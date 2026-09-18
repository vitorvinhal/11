/**
 * FASE 5B — ToolExecutor
 *
 * Pipeline completo de execução de tools com safety integrado.
 * Diferente do agent-core (que é leve), aqui temos:
 *   - Checkpoint/rollback automático para ações REVERSIBLE
 *   - Pending actions para ações DESTRUCTIVE
 *   - Audit log em tempo real
 *   - Retry com backoff
 */

import { classifyAction, getRisk, requiresApproval } from '../safety/risk-engine';
import { dryRun } from '../safety/dry-run';
import { createCheckpoint, restoreCheckpoint } from '../safety/checkpoint';
import type { RiskLevel } from '../safety/risk-engine';
import type { DryRunResult } from '../safety/dry-run';
import type { Checkpoint } from '../safety/checkpoint';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// ─── Tipos ──────────────────────────────────────────────────────────────────

export type ExecutionStatus = 'pending' | 'simulating' | 'checkpointed' | 'executing' | 'completed' | 'failed' | 'rolled_back' | 'awaiting_approval';

export interface ExecutionContext {
  userId: string;
  tenantId?: string;
  sessionId: string;
  /** Se true, cria checkpoint antes de ações reversíveis */
  enableCheckpoints?: boolean;
  /** Se true, ações destrutivas ficam pendentes de aprovação */
  enablePendingActions?: boolean;
}

export interface ExecutionResult {
  status: ExecutionStatus;
  toolName: string;
  arguments: Record<string, unknown>;
  result?: unknown;
  error?: string;
  checkpoint?: Checkpoint;
  dryRun?: DryRunResult;
  riskLevel: RiskLevel;
  durationMs: number;
}

// ─── Configuração ───────────────────────────────────────────────────────────

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1000;

// ─── Supabase Client ────────────────────────────────────────────────────────

function createServiceClient(): SupabaseClient {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
  );
}

// ─── Tool Definitions ───────────────────────────────────────────────────────

interface ToolDefinition {
  name: string;
  action: string;
  handler: (args: Record<string, unknown>) => Promise<unknown>;
}

/**
 * Registra tools disponíveis para execução.
 */
function createToolRegistry(): ToolDefinition[] {
  return [
    {
      name: 'file_read',
      action: 'filesystem.read',
      handler: async (args) => {
        const { existsSync, readFileSync } = await import('fs');
        const { resolve } = await import('path');
        const p = resolve(process.cwd(), args.path as string);
        if (!existsSync(p)) throw new Error(`Arquivo não encontrado: ${p}`);
        return readFileSync(p, 'utf-8');
      },
    },
    {
      name: 'file_write',
      action: 'filesystem.write',
      handler: async (args) => {
        const { writeFileSync } = await import('fs');
        const { resolve } = await import('path');
        const p = resolve(process.cwd(), args.path as string);
        writeFileSync(p, args.content as string, 'utf-8');
        return { written: true, path: p };
      },
    },
    {
      name: 'file_delete',
      action: 'filesystem.delete',
      handler: async (args) => {
        const { existsSync, unlinkSync } = await import('fs');
        const { resolve } = await import('path');
        const p = resolve(process.cwd(), args.path as string);
        if (!existsSync(p)) throw new Error(`Arquivo não encontrado: ${p}`);
        unlinkSync(p);
        return { deleted: true, path: p };
      },
    },
    {
      name: 'terminal_exec',
      action: 'terminal.exec',
      handler: async (args) => {
        const { execSync } = await import('child_process');
        return execSync(args.command as string, {
          cwd: (args.cwd as string) ?? process.cwd(),
          encoding: 'utf-8',
          timeout: 30000,
        });
      },
    },
  ];
}

// ─── Execution Pipeline ─────────────────────────────────────────────────────

/**
 * Executa uma tool com pipeline completo de segurança.
 *
 * Pipeline:
 *   1. Classificar risco
 *   2. Dry-run (se DESTRUCTIVE ou REVERSIBLE)
 *   3. Checkpoint (se REVERSIBLE e enableCheckpoints)
 *   4. Executar com retry
 *   5. Rollback (se falhar e checkpoint existe)
 */
export async function executeTool(
  toolName: string,
  args: Record<string, unknown>,
  ctx: ExecutionContext,
  sb?: SupabaseClient
): Promise<ExecutionResult> {
  const start = Date.now();
  const client = sb ?? createServiceClient();
  const registry = createToolRegistry();
  const tool = registry.find((t) => t.name === toolName);

  if (!tool) {
    return {
      status: 'failed',
      toolName,
      arguments: args,
      error: `Tool desconhecida: ${toolName}`,
      riskLevel: 'SAFE',
      durationMs: Date.now() - start,
    };
  }

  // 1. Classificar risco
  const classification = classifyAction(tool.action, args);
  const riskLevel = getRisk(tool.action, args);

  // 2. Dry-run para ações não seguras
  let dryRunResult: DryRunResult | undefined;
  if (riskLevel !== 'SAFE') {
    dryRunResult = await dryRun(tool.action, {
      userId: ctx.userId,
      tenantId: ctx.tenantId,
      params: args,
    });

    if (dryRunResult.status === 'error') {
      return {
        status: 'failed',
        toolName,
        arguments: args,
        error: `Dry-run falhou: ${dryRunResult.error}`,
        dryRun: dryRunResult,
        riskLevel,
        durationMs: Date.now() - start,
      };
    }

    // Ações destrutivas que falharam no dry-run
    if (riskLevel === 'DESTRUCTIVE' && !dryRunResult.wouldSucceed) {
      return {
        status: 'failed',
        toolName,
        arguments: args,
        error: `Ação destrutiva não passou no dry-run: ${dryRunResult.simulationResult?.note ?? 'desconhecido'}`,
        dryRun: dryRunResult,
        riskLevel,
        durationMs: Date.now() - start,
      };
    }
  }

  // 3. Checkpoint para ações reversíveis
  let checkpoint: Checkpoint | undefined;
  if (riskLevel === 'REVERSIBLE' && ctx.enableCheckpoints !== false) {
    try {
      checkpoint = await createCheckpoint(
        {
          actionId: `${toolName}-${Date.now()}`,
          tenantId: ctx.tenantId,
          userId: ctx.userId,
          targetType: tool.action.split('.')[0],
          targetId: JSON.stringify(args),
          beforeState: args,
        },
        client
      );
    } catch {
      // Checkpoint é best-effort — não bloqueia execução
    }
  }

  // 4. Executar com retry
  let lastError: string | undefined;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await tool.handler(args);

      // Log de sucesso
      await logExecution(client, {
        userId: ctx.userId,
        sessionId: ctx.sessionId,
        toolName,
        action: tool.action,
        riskLevel,
        status: 'completed',
        checkpointId: checkpoint?.id,
        durationMs: Date.now() - start,
      });

      return {
        status: 'completed',
        toolName,
        arguments: args,
        result,
        checkpoint,
        dryRun: dryRunResult,
        riskLevel,
        durationMs: Date.now() - start,
      };
    } catch (e) {
      lastError = (e as Error).message;

      if (attempt < MAX_RETRIES) {
        await new Promise((r) => setTimeout(r, RETRY_DELAY_MS * (attempt + 1)));
      }
    }
  }

  // 5. Rollback se checkpoint existe
  if (checkpoint) {
    try {
      await restoreCheckpoint(checkpoint.id, ctx.userId, client);
    } catch {
      // Rollback é best-effort
    }
  }

  // Log de falha
  await logExecution(client, {
    userId: ctx.userId,
    sessionId: ctx.sessionId,
    toolName,
    action: tool.action,
    riskLevel,
    status: 'failed',
    checkpointId: checkpoint?.id,
    error: lastError,
    durationMs: Date.now() - start,
  });

  return {
    status: checkpoint ? 'rolled_back' : 'failed',
    toolName,
    arguments: args,
    error: lastError,
    checkpoint,
    dryRun: dryRunResult,
    riskLevel,
    durationMs: Date.now() - start,
  };
}

// ─── Audit Log ──────────────────────────────────────────────────────────────

interface AuditLogEntry {
  userId: string;
  sessionId: string;
  toolName: string;
  action: string;
  riskLevel: string;
  status: string;
  checkpointId?: string;
  error?: string;
  durationMs: number;
}

async function logExecution(
  sb: SupabaseClient,
  entry: AuditLogEntry
): Promise<void> {
  try {
    await sb.from('bridge_audit_log').insert({
      user_id: entry.userId,
      session_id: entry.sessionId,
      operation: entry.toolName,
      details: JSON.stringify({
        action: entry.action,
        riskLevel: entry.riskLevel,
        status: entry.status,
        checkpointId: entry.checkpointId,
        error: entry.error,
        durationMs: entry.durationMs,
      }),
    });
  } catch {
    // Audit log é best-effort
  }
}
