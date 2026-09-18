/**
 * FASE 5A — AgentCore
 *
 * Loop principal de execução do agente.
 * Fluxo: user_msg → LLM → tool_calls → safety check → execute → loop até resposta final
 *
 * Integra com:
 *   - Risk Engine (FASE 4A): classifica ações
 *   - Dry-Run (FASE 4B): simula antes de executar
 *   - Checkpoint (FASE 4C): salva estado para rollback
 */

import { modelGateway } from '../router/index';
import { classifyAction, getRisk, requiresApproval } from '../safety/risk-engine';
import { dryRun } from '../safety/dry-run';
import type { RiskLevel } from '../safety/risk-engine';
import type { DryRunResult } from '../safety/dry-run';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// ─── Tipos ──────────────────────────────────────────────────────────────────

export type AgentStatus = 'idle' | 'thinking' | 'executing' | 'awaiting_approval' | 'error';

export interface AgentToolCall {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface AgentToolResult {
  toolCallId: string;
  content: string;
  isError?: boolean;
}

export interface AgentMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  toolCalls?: AgentToolCall[];
  toolResults?: AgentToolResult[];
}

export interface AgentContext {
  sessionId: string;
  userId: string;
  tenantId?: string;
  messages: AgentMessage[];
  maxIterations?: number;
  /** Se true, ações destrutivas precisam de aprovação humana */
  requireApprovalForDestructive?: boolean;
}

export interface AgentResponse {
  text: string;
  toolCallsExecuted: number;
  riskSummary: {
    safe: number;
    reversible: number;
    destructive: number;
  };
  status: AgentStatus;
  error?: string;
}

// ─── Configuração ───────────────────────────────────────────────────────────

const DEFAULT_MAX_ITERATIONS = 10;
const SYSTEM_PROMPT = `Você é a IA 11 — um agente autônomo com acesso a ferramentas.
Sempre que precisar executar uma ação, use a ferramenta apropriada.
Suas ferramentas: file_read, file_write, file_delete, terminal_exec, git_status, git_diff, git_commit.
Responda sempre em português do Brasil.`;

// ─── Tool Definitions ───────────────────────────────────────────────────────

const TOOL_DEFINITIONS = [
  {
    name: 'file_read',
    description: 'Lê o conteúdo de um arquivo',
    parameters: {
      type: 'object' as const,
      properties: {
        path: { type: 'string', description: 'Caminho do arquivo' },
      },
      required: ['path'],
    },
  },
  {
    name: 'file_write',
    description: 'Escreve conteúdo em um arquivo (cria ou sobrescreve)',
    parameters: {
      type: 'object' as const,
      properties: {
        path: { type: 'string', description: 'Caminho do arquivo' },
        content: { type: 'string', description: 'Conteúdo a escrever' },
      },
      required: ['path', 'content'],
    },
  },
  {
    name: 'file_delete',
    description: 'Deleta um arquivo',
    parameters: {
      type: 'object' as const,
      properties: {
        path: { type: 'string', description: 'Caminho do arquivo' },
      },
      required: ['path'],
    },
  },
  {
    name: 'terminal_exec',
    description: 'Executa um comando no terminal',
    parameters: {
      type: 'object' as const,
      properties: {
        command: { type: 'string', description: 'Comando a executar' },
        cwd: { type: 'string', description: 'Diretório de trabalho' },
      },
      required: ['command'],
    },
  },
  {
    name: 'git_status',
    description: 'Mostra o status do repositório git',
    parameters: {
      type: 'object' as const,
      properties: {},
    },
  },
  {
    name: 'git_diff',
    description: 'Mostra diferenças no repositório git',
    parameters: {
      type: 'object' as const,
      properties: {
        file: { type: 'string', description: 'Arquivo específico (opcional)' },
      },
    },
  },
  {
    name: 'git_commit',
    description: 'Cria um commit com mensagem',
    parameters: {
      type: 'object' as const,
      properties: {
        message: { type: 'string', description: 'Mensagem do commit' },
        files: {
          type: 'array',
          items: { type: 'string' },
          description: 'Arquivos para adicionar',
        },
      },
      required: ['message'],
    },
  },
];

// ─── Tool Executor ──────────────────────────────────────────────────────────

/**
 * Mapeia nome da ferramenta para ação do risk engine.
 */
function mapToolToAction(toolName: string): string {
  const map: Record<string, string> = {
    file_read: 'filesystem.read',
    file_write: 'filesystem.write',
    file_delete: 'filesystem.delete',
    terminal_exec: 'terminal.exec',
    git_status: 'git.status',
    git_diff: 'git.diff',
    git_commit: 'git.commit',
  };
  return map[toolName] ?? 'unknown';
}

/**
 * Executa uma tool call com verificações de segurança.
 */
async function executeToolCall(
  toolCall: AgentToolCall,
  userId: string,
  tenantId?: string
): Promise<AgentToolResult> {
  try {
    // 1. Classificar risco
    const action = mapToolToAction(toolCall.name);
    const classification = classifyAction(action);
    const risk = getRisk(action);
    const needsApproval = requiresApproval(action);

    // 2. Dry-run (quando aplicável)
    if (risk !== 'SAFE') {
      const dryResult: DryRunResult = await dryRun(action, {
        userId,
        tenantId,
        params: toolCall.arguments,
      });

      if (dryResult.status === 'error') {
        return {
          toolCallId: toolCall.id,
          content: `Erro na simulação: ${dryResult.error}`,
          isError: true,
        };
      }

      if (needsApproval && !dryResult.wouldSucceed) {
        return {
          toolCallId: toolCall.id,
          content: `Ação requer aprovação e não passou na simulação: ${(dryResult.simulationResult as Record<string, unknown>)?.note ?? 'desconhecido'}`,
          isError: true,
        };
      }
    }

    // 3. Executar a tool real
    const result = await runTool(toolCall.name, toolCall.arguments);

    return {
      toolCallId: toolCall.id,
      content: typeof result === 'string' ? result : JSON.stringify(result),
      isError: false,
    };
  } catch (e) {
    return {
      toolCallId: toolCall.id,
      content: `Erro ao executar ${toolCall.name}: ${(e as Error).message}`,
      isError: true,
    };
  }
}

/**
 * Executa a tool real (delega para o executor apropriado).
 */
async function runTool(
  name: string,
  args: Record<string, unknown>
): Promise<unknown> {
  const { existsSync, readFileSync, writeFileSync, unlinkSync } = await import('fs');
  const { resolve } = await import('path');
  const { execSync } = await import('child_process');

  const cwd = (args.cwd as string) ?? process.cwd();

  switch (name) {
    case 'file_read': {
      const p = resolve(cwd, args.path as string);
      if (!existsSync(p)) throw new Error(`Arquivo não encontrado: ${p}`);
      return readFileSync(p, 'utf-8');
    }

    case 'file_write': {
      const p = resolve(cwd, args.path as string);
      writeFileSync(p, args.content as string, 'utf-8');
      return `Arquivo escrito: ${p}`;
    }

    case 'file_delete': {
      const p = resolve(cwd, args.path as string);
      if (!existsSync(p)) throw new Error(`Arquivo não encontrado: ${p}`);
      unlinkSync(p);
      return `Arquivo deletado: ${p}`;
    }

    case 'terminal_exec': {
      const cmd = args.command as string;
      const result = execSync(cmd, { cwd, encoding: 'utf-8', timeout: 30000 });
      return result;
    }

    case 'git_status': {
      return execSync('git status --short', { cwd, encoding: 'utf-8' });
    }

    case 'git_diff': {
      const file = args.file as string | undefined;
      const cmd = file ? `git diff ${file}` : 'git diff';
      return execSync(cmd, { cwd, encoding: 'utf-8' });
    }

    case 'git_commit': {
      const message = args.message as string;
      const files = (args.files as string[]) ?? ['.'];
      for (const f of files) {
        execSync(`git add ${f}`, { cwd });
      }
      return execSync(`git commit -m "${message}"`, { cwd, encoding: 'utf-8' });
    }

    default:
      throw new Error(`Tool desconhecida: ${name}`);
  }
}

// ─── Agent Loop ─────────────────────────────────────────────────────────────

/**
 * Loop principal do agente.
 * Envia mensagem ao LLM, executa tool calls, repete até resposta final.
 */
export async function agentLoop(
  ctx: AgentContext
): Promise<AgentResponse> {
  const maxIter = ctx.maxIterations ?? DEFAULT_MAX_ITERATIONS;
  const riskSummary = { safe: 0, reversible: 0, destructive: 0 };
  let toolCallsExecuted = 0;
  let status: AgentStatus = 'thinking';

  const messages: AgentMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...ctx.messages,
  ];

  for (let i = 0; i < maxIter; i++) {
    // 1. Chamar LLM
    const result = await modelGateway.complete({
      sessionId: ctx.sessionId,
      messages: messages.map((m) => ({
        role: m.role as 'system' | 'user' | 'assistant',
        content: [{ type: 'text' as const, text: m.content }],
      })),
    });

    const assistantMsg = result.message;
    const text = assistantMsg.content.map((c: { text?: string }) => c.text ?? '').join('\n');
    const toolCalls = assistantMsg.toolCalls ?? [];

    // 2. Se não há tool calls, retornar resposta final
    if (toolCalls.length === 0) {
      return {
        text,
        toolCallsExecuted,
        riskSummary,
        status: 'idle',
      };
    }

    // 3. Executar tool calls
    status = 'executing';
    const results: AgentToolResult[] = [];

    for (const tc of toolCalls) {
      const action = mapToolToAction(tc.name);
      const risk = getRisk(action);
      riskSummary[risk as keyof typeof riskSummary]++;

      const result = await executeToolCall(tc, ctx.userId, ctx.tenantId);
      results.push(result);
      toolCallsExecuted++;
    }

    // 4. Adicionar assistant message + tool results ao contexto
    messages.push({
      role: 'assistant',
      content: text,
      toolCalls: toolCalls.map((tc: { id: string; name: string; arguments: Record<string, unknown> }) => ({
        id: tc.id,
        name: tc.name,
        arguments: tc.arguments,
      })),
    });

    messages.push({
      role: 'tool',
      content: results.map((r) => `[${r.toolCallId}] ${r.content}`).join('\n'),
      toolResults: results,
    });
  }

  return {
    text: 'Limite de iterações atingido.',
    toolCallsExecuted,
    riskSummary,
    status: 'error',
    error: 'max_iterations_exceeded',
  };
}
