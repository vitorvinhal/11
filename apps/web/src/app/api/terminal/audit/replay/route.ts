/**
 * Replay de comandos — repete um comando salvo no audit log.
 *
 * POST /api/terminal/audit/replay — { command, sessionId? }
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../../../lib/auth-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const auth = await requireUser(req);
  if (!auth) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  let body: { command?: string; sessionId?: string };
  try {
    body = (await req.json()) as { command?: string; sessionId?: string };
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  if (!body.command?.trim()) {
    return NextResponse.json({ error: "Comando vazio" }, { status: 400 });
  }

  // Redireciona para o endpoint de execução do terminal
  const execUrl = new URL("/api/terminal/exec", req.url);
  const execRes = await fetch(execUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      cookie: req.headers.get("cookie") ?? "",
      authorization: req.headers.get("authorization") ?? "",
    },
    body: JSON.stringify({
      command: body.command,
      sessionId: body.sessionId ?? "replay",
    }),
  });

  // Retorna o SSE stream como-is
  return new Response(execRes.body, {
    status: execRes.status,
    headers: {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
    },
  });
}
