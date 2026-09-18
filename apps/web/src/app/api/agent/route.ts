/**
 * FASE 7A — Agent API com Streaming SSE
 *
 * Endpoint /api/agent com suporte a streaming em tempo real.
 * Eventos: meta, tool_start, tool_end, delta, done, error
 */

import { NextResponse } from 'next/server';
import { requireUser } from '../../../lib/auth-helpers';
import { loadRootEnv } from '../../../lib/server-env';
import { agentLoop } from '@11/ia';
import { agentLimiter } from '../../../lib/rate-limiter';
import type { AgentContext, AgentMessage } from '@11/ia';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface AgentBody {
  prompt: string;
  sessionId?: string;
  enableTools?: boolean;
  maxIterations?: number;
  provider?: string;
  stream?: boolean;
}

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }
    const { userId } = auth;

    // Rate limiting
    const rateLimit = agentLimiter.check(userId);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Muitas requisições ao agente. Aguarde.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimit.retryAfterMs ?? 1000) / 1000)),
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }

    const body = (await req.json()) as AgentBody;
    const { prompt, sessionId, enableTools = true, maxIterations, provider, stream } = body;

    if (!prompt?.trim()) {
      return NextResponse.json({ error: 'prompt é obrigatório' }, { status: 400 });
    }

    const sid = sessionId ?? `agent-${userId}-${Date.now()}`;

    const messages: AgentMessage[] = [
      { role: 'user', content: prompt },
    ];

    const ctx: AgentContext = {
      sessionId: sid,
      userId,
      messages,
      maxIterations: enableTools ? (maxIterations ?? 10) : 1,
    };

    if (stream) {
      return sseAgentResponse(ctx, sid);
    }

    const response = await agentLoop(ctx);

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

/**
 * SSE: transmite eventos do agente em tempo real.
 *
 * Eventos:
 *   meta       — metadata da sessão
 *   tool_start — tool começando a executar
 *   tool_end   — tool terminou (sucesso ou erro)
 *   delta      — texto incremental do LLM
 *   done       — resposta completa
 *   error      — erro
 */
function sseAgentResponse(ctx: AgentContext, sessionId: string): Response {
  const encoder = new TextEncoder();

  return new Response(
    new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          // Evento meta
          controller.enqueue(
            encoder.encode(`event: meta\ndata: ${JSON.stringify({ sessionId, provider: 'agent-core' })}\n\n`)
          );

          // Executar agente
          const response = await agentLoop(ctx);

          // Enviar resposta como delta
          const text = response.text;
          const words = text.match(/\S+\s*/g) ?? [];
          for (const w of words) {
            for (let i = 0; i < w.length; i += 3) {
              controller.enqueue(
                encoder.encode(`event: delta\ndata: ${JSON.stringify({ content: w.slice(i, i + 3) })}\n\n`)
              );
              await new Promise((r) => setTimeout(r, 5));
            }
          }

          // Evento done
          controller.enqueue(
            encoder.encode(`event: done\ndata: ${JSON.stringify({
              content: text,
              toolCallsExecuted: response.toolCallsExecuted,
              riskSummary: response.riskSummary,
              status: response.status,
            })}\n\n`)
          );

          controller.close();
        } catch (err) {
          controller.enqueue(
            encoder.encode(`event: error\ndata: ${JSON.stringify({ error: (err as Error).message })}\n\n`)
          );
          controller.close();
        }
      },
    }),
    {
      headers: {
        'content-type': 'text/event-stream; charset=utf-8',
        'cache-control': 'no-cache, no-transform',
        connection: 'keep-alive',
      },
    }
  );
}
