import { NextResponse } from "next/server";
import { requireUser } from "../../../lib/auth-helpers";
import { loadRootEnv } from "../../../lib/server-env";
import { metricsCache } from "../../../lib/cache";

loadRootEnv();

/**
 * GET /api/performance — Performance metrics
 * Requer auth
 */
export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    // Check cache
    const cached = metricsCache.get("perf:metrics");
    if (cached) {
      return NextResponse.json(cached);
    }

    const response = {
      ok: true,
      data: {
        uptime: Math.round(process.uptime()),
        memory: {
          rss: Math.round(process.memoryUsage().rss / 1024 / 1024),
          heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
          heapTotal: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
          external: Math.round(process.memoryUsage().external / 1024 / 1024),
        },
        cpu: {
          usage: process.cpuUsage(),
        },
        env: process.env.NODE_ENV || "development",
        nodeVersion: process.version,
        timestamp: new Date().toISOString(),
      },
    };

    metricsCache.set("perf:metrics", response, 10_000); // Cache 10s

    return NextResponse.json(response);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
