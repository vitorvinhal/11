/**
 * Mobile Agent API — Mobile only
 *
 * WebSocket bridge para o PC Agent via mobile app (Capacitor).
 * Disponível apenas na versão mobile (Capacitor app ou mobile web).
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../lib/auth-helpers";
import { loadRootEnv } from "../../../lib/server-env";
import { mobileOnly, platformError } from "../../../lib/platform-guard";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface MobileAgentBody {
  action:
    | "connect"
    | "disconnect"
    | "create_session"
    | "approve"
    | "cancel"
    | "send_command"
    | "list_sessions";
  data: Record<string, unknown>;
}

const PC_AGENT_BASE = process.env.PC_AGENT_BASE_URL ?? "http://localhost:3001";
const PC_AGENT_WS = process.env.PC_AGENT_WS_URL ?? "ws://localhost:3001";

async function callPCAgent(
  endpoint: string,
  method: string,
  data: Record<string, unknown>,
): Promise<any> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);

  try {
    const res = await fetch(`${PC_AGENT_BASE}${endpoint}`, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`PC Agent error ${res.status}: ${text}`);
    }

    return res.json();
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(req: Request) {
  // Platform guard - mobile only
  const guard = mobileOnly(req as any);
  if (!guard.allowed) {
    return platformError(guard.platform, ["mobile-app", "mobile-web"]);
  }

  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = (await req.json()) as MobileAgentBody;
    const { action, data } = body;

    let result: any;
    switch (action) {
      case "connect":
        result = { wsUrl: PC_AGENT_WS, message: "Connect via WebSocket" };
        break;
      case "create_session":
        result = await callPCAgent("/api/sessions", "POST", data ?? {});
        break;
      case "list_sessions":
        result = await callPCAgent("/api/sessions", "GET", {});
        break;
      case "approve":
        result = await callPCAgent(
          `/api/sessions/${data.sessionId}/approve`,
          "PUT",
          { approved: data.approved ?? true },
        );
        break;
      case "cancel":
        result = await callPCAgent(
          `/api/sessions/${data.sessionId}/cancel`,
          "PATCH",
          {},
        );
        break;
      default:
        return NextResponse.json(
          {
            error: `Ação inválida: ${action}. Use: connect, create_session, list_sessions, approve, cancel`,
          },
          { status: 400 },
        );
    }

    return NextResponse.json({
      success: true,
      action,
      result,
    });
  } catch (err) {
    console.error("[mobile-agent] Erro:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  // Info de conexão para mobile
  const guard = mobileOnly(req as any);
  if (!guard.allowed) {
    return platformError(guard.platform, ["mobile-app", "mobile-web"]);
  }

  return NextResponse.json({
    platform: "mobile",
    wsUrl: PC_AGENT_WS,
    httpUrl: PC_AGENT_BASE,
    features: [
      "file_operations",
      "stt",
      "media_analysis",
      "remote_wake",
      "session_management",
    ],
    message: "Conecte via WebSocket para usar o Mobile Agent em tempo real",
  });
}
