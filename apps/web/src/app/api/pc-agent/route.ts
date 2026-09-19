/**
 * PC Agent API — Desktop only
 *
 * Proxy para o router9 local (porta 3002) e PC Agent (porta 3001) que rodam no desktop app.
 * Disponível apenas na versão desktop (Tauri).
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../lib/auth-helpers";
import { loadRootEnv } from "../../../lib/server-env";
import { desktopOnly, platformError } from "../../../lib/platform-guard";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface PCAgentBody {
  action:
    | "stt"
    | "file"
    | "remote"
    | "media"
    | "health"
    | "create_session"
    | "list_sessions"
    | "approve_session"
    | "cancel_session"
    | "get_session";
  data: Record<string, unknown>;
}

const ROUTER9_BASE = process.env.ROUTER9_BASE_URL ?? "http://localhost:3002";
const PC_AGENT_BASE = process.env.PC_AGENT_BASE_URL ?? "http://localhost:3001";

async function callRouter9(
  action: string,
  data: Record<string, unknown>,
): Promise<any> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60_000);

  try {
    const res = await fetch(`${ROUTER9_BASE}/router9`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ action, data }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Router9 error ${res.status}: ${text}`);
    }

    return res.json();
  } finally {
    clearTimeout(timeout);
  }
}

async function callPCAgent(
  endpoint: string,
  method: string,
  data: Record<string, unknown>,
): Promise<any> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60_000);

  try {
    const res = await fetch(`${PC_AGENT_BASE}${endpoint}`, {
      method,
      headers:
        method === "GET" ? undefined : { "content-type": "application/json" },
      body: method === "GET" ? undefined : JSON.stringify(data),
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

function routeAction(
  action: string,
  data: Record<string, unknown>,
): {
  endpoint: string;
  method: string;
  base: "ROUTER9_BASE" | "PC_AGENT_BASE";
} | null {
  // Router9 actions
  if (["stt", "file", "remote", "media", "health"].includes(action)) {
    return { endpoint: "/router9", method: "POST", base: "ROUTER9_BASE" };
  }
  // PC Agent actions
  if (action === "create_session")
    return { endpoint: "/api/sessions", method: "POST", base: "PC_AGENT_BASE" };
  if (action === "list_sessions")
    return { endpoint: "/api/sessions", method: "GET", base: "PC_AGENT_BASE" };
  if (action === "get_session") {
    const sessionId = data.sessionId as string;
    return {
      endpoint: `/api/sessions/${sessionId}`,
      method: "GET",
      base: "PC_AGENT_BASE",
    };
  }
  if (action === "approve_session") {
    const sessionId = data.sessionId as string;
    return {
      endpoint: `/api/sessions/${sessionId}/approve`,
      method: "PUT",
      base: "PC_AGENT_BASE",
    };
  }
  if (action === "cancel_session") {
    const sessionId = data.sessionId as string;
    return {
      endpoint: `/api/sessions/${sessionId}/cancel`,
      method: "PATCH",
      base: "PC_AGENT_BASE",
    };
  }
  if (action === "delete_session") {
    const sessionId = data.sessionId as string;
    return {
      endpoint: `/api/sessions/${sessionId}`,
      method: "DELETE",
      base: "PC_AGENT_BASE",
    };
  }
  return null;
}

export async function POST(req: Request) {
  // Platform guard - desktop only
  const guard = desktopOnly(req as any);
  if (!guard.allowed) {
    return platformError(guard.platform, ["desktop-app", "desktop-web"]);
  }

  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = (await req.json()) as PCAgentBody;
    const { action, data } = body;

    const route = routeAction(action, data);
    if (!route) {
      return NextResponse.json(
        {
          error: `Ação inválida: ${action}. Use: stt, file, remote, media, health, create_session, list_sessions, approve_session, cancel_session, get_session`,
        },
        { status: 400 },
      );
    }

    let result: any;
    if (route.base === "ROUTER9_BASE") {
      result = await callRouter9(action, data ?? {});
    } else {
      // For GET requests, pass data as query params
      if (route.method === "GET") {
        const params = new URLSearchParams();
        Object.entries(data).forEach(([k, v]) => params.append(k, String(v)));
        const url = `${PC_AGENT_BASE}${route.endpoint}?${params.toString()}`;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 60_000);
        try {
          const res = await fetch(url, {
            method: "GET",
            signal: controller.signal,
          });
          clearTimeout(timeout);
          if (!res.ok)
            throw new Error(
              `PC Agent error ${res.status}: ${await res.text()}`,
            );
          result = await res.json();
        } finally {
          clearTimeout(timeout);
        }
      } else {
        result = await callPCAgent(route.endpoint, route.method, data ?? {});
      }
    }

    return NextResponse.json({
      success: true,
      action,
      result,
    });
  } catch (err) {
    console.error("[pc-agent] Erro:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  // Health check
  const guard = desktopOnly(req as any);
  if (!guard.allowed) {
    return platformError(guard.platform, ["desktop-app", "desktop-web"]);
  }

  try {
    const [router9Health, pcAgentHealth] = await Promise.allSettled([
      callRouter9("health", {}),
      callPCAgent("/health", "GET", {}),
    ]);

    const failedCount = [router9Health.status, pcAgentHealth.status].filter(
      (s) => s === "rejected",
    ).length;

    return NextResponse.json({
      status: failedCount === 0 ? "ok" : "degraded",
      router9:
        router9Health.status === "fulfilled"
          ? router9Health.value
          : { error: router9Health.reason?.message },
      pcAgent:
        pcAgentHealth.status === "fulfilled"
          ? pcAgentHealth.value
          : { error: pcAgentHealth.reason?.message },
    });
  } catch (err) {
    return NextResponse.json(
      { status: "error", error: (err as Error).message },
      { status: 503 },
    );
  }
}
