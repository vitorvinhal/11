/**
 * Health check agregado — status de todos os serviços.
 *
 * GET /api/health/all — verifica todos os serviços e retorna status consolidado
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../../lib/auth-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ServiceCheck {
  name: string;
  status: "ok" | "error" | "timeout";
  latencyMs: number;
  error?: string;
}

async function checkService(
  name: string,
  url: string,
  timeoutMs = 5000,
): Promise<ServiceCheck> {
  const start = Date.now();
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(timeoutMs),
      headers: { "user-agent": "11-health-check" },
    });
    const latencyMs = Date.now() - start;
    if (res.ok) {
      return { name, status: "ok", latencyMs };
    }
    return {
      name,
      status: "error",
      latencyMs,
      error: `HTTP ${res.status}`,
    };
  } catch (err) {
    return {
      name,
      status: "error",
      latencyMs: Date.now() - start,
      error: (err as Error).message,
    };
  }
}

export async function GET(req: Request) {
  const auth = await requireUser(req);
  if (!auth) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const routerUrl = process.env.ROUTER9_ENDPOINT ?? "http://localhost:20128";

  const checks = await Promise.all([
    checkService("web", `${baseUrl}/api/health`),
    checkService("router", `${routerUrl}/v1/models`),
    checkService("supabase", `${baseUrl}/api/health/supabase`),
    checkService("plugins", `${baseUrl}/api/health/plugins`),
    checkService("skills", `${baseUrl}/api/health/skills`),
  ]);

  const allOk = checks.every((c) => c.status === "ok");
  const overallStatus = allOk ? "healthy" : "degraded";

  return NextResponse.json(
    {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      services: checks,
      summary: {
        total: checks.length,
        healthy: checks.filter((c) => c.status === "ok").length,
        degraded: checks.filter((c) => c.status !== "ok").length,
        avgLatencyMs: Math.round(
          checks.reduce((s, c) => s + c.latencyMs, 0) / checks.length,
        ),
      },
    },
    { status: allOk ? 200 : 503 },
  );
}
