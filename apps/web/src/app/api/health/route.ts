import { NextResponse } from "next/server";
import { loadRootEnv } from "../../../lib/server-env";
import { healthCache } from "../../../lib/cache";

loadRootEnv();

/**
 * GET /api/health — Health check com cache (sem auth, para load balancers)
 */
export async function GET() {
  const cached = healthCache.get("health:main");
  if (cached) {
    return NextResponse.json(cached);
  }

  const response = {
    ok: true,
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || "unknown",
    services: {
      router: { ok: true },
      plugins: { ok: true },
      skills: { ok: true },
    },
  };

  healthCache.set("health:main", response, 30_000); // Cache 30s

  return NextResponse.json(response);
}
