/**
 * FASE 6A — Agent API Route
 *
 * Endpoint /api/agent que usa o AgentCore completo com tools + safety.
 * Diferente do /api/chat (chat simples), aqui o agente pode executar ações.
 */

import { NextResponse } from 'next/server';
import { requireUser } from '../../../lib/auth-helpers';
import { loadRootEnv } from '../../../lib/server-env';
import { agentLoop } from '@11/ia';
import type { AgentContext, AgentMessage } from '@11/ia';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface AgentBody {
  prompt: string;
  sessionId?: string;
  /** Habilitar execução de tools (padrão: true) */
  enableTools?: boolean;
  /** Máximo de iterações do loop (padrão: 10) */
  maxIterations?: number;
  /** Provider específico */
  provider?: string;
}

export async function POST(req: Request) {
  try {
    // 1. Autenticação
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }
    const { userId } = auth;

    // 2. Parse do body
    const body = (await req.json()) as AgentBody;
    const { prompt, sessionId, enableTools = true, maxIterations, provider } = body;

    if (!prompt?.trim()) {
      return NextResponse.json({ error: 'prompt é obrigatório' }, { status: 400 });
    }

    const sid = sessionId ?? `agent-${userId}-${Date.now()}`;

    // 3. Construir contexto do agente
    const messages: AgentMessage[] = [
      { role: 'user', content: prompt },
    ];

    const ctx: AgentContext = {
      sessionId: sid,
      userId,
      messages,
      maxIterations: enableTools ? (maxIterations ?? 10) : 1,
    };

    // 4. Executar loop do agente
    const response = await agentLoop(ctx);

    // 5. Retornar resultado
    return NextResponse.json({
      content: response.text,
      provider: 'agent-core',
      toolCallsExecuted: response.toolCallsExecuted,
      riskSummary: response.riskSummary,
      status: response.status,
      sessionId: sid,
    });
  } catch (err) {
    console.error('[agent] Erro:', err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
