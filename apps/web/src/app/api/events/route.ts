import { NextResponse } from "next/server";
import { requireUser } from "../../../lib/auth-helpers";
import { systemEvents } from "../../../lib/event-emitter";
import { loadRootEnv } from "../../../lib/server-env";

loadRootEnv();

/**
 * GET /api/events — SSE stream para atualizações real-time
 * Requer auth via query param (SSE não suporta headers customizados facilmente)
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token obrigatório" }, { status: 401 });
  }

  // Validar token (simplificado — em produção usar Supabase)
  const auth = await requireUser(req);
  if (!auth) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { userId } = auth;

  // Criar ReadableStream para SSE
  const stream = new ReadableStream({
    start(controller) {
      // Enviar heartbeat a cada 30s
      const heartbeat = setInterval(() => {
        controller.enqueue(
          `data: ${JSON.stringify({ type: "heartbeat" })}\n\n`,
        );
      }, 30_000);

      // Enviar mensagem inicial
      controller.enqueue(
        `data: ${JSON.stringify({ type: "connected", userId, timestamp: new Date().toISOString() })}\n\n`,
      );

      // Escutar eventos relevantes
      const unsubAgent = systemEvents.on("agent:status", (data) => {
        if (data.userId === userId) {
          controller.enqueue(
            `data: ${JSON.stringify({ type: "agent:status", ...data })}\n\n`,
          );
        }
      });

      const unsubMessage = systemEvents.on("agent:message", (data) => {
        if (data.userId === userId) {
          controller.enqueue(
            `data: ${JSON.stringify({ type: "agent:message", ...data })}\n\n`,
          );
        }
      });

      const unsubHealth = systemEvents.on("health:update", (data) => {
        controller.enqueue(
          `data: ${JSON.stringify({ type: "health:update", ...data })}\n\n`,
        );
      });

      // Cleanup on close
      req.signal?.addEventListener("abort", () => {
        clearInterval(heartbeat);
        unsubAgent();
        unsubMessage();
        unsubHealth();
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
