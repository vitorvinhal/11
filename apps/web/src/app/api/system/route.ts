import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { resolve } from "path";

/**
 * GET /api/system — Informações detalhadas do sistema
 * Não requer auth (para debug/monitoring)
 */
export async function GET() {
  try {
    const versionPath = resolve(process.cwd(), "public/version.json");
    const versionData = JSON.parse(readFileSync(versionPath, "utf8"));

    return NextResponse.json({
      ok: true,
      data: {
        version: versionData,
        runtime: {
          node: process.version,
          platform: process.platform,
          arch: process.arch,
          uptime: Math.round(process.uptime()),
          memory: {
            rss: Math.round(process.memoryUsage().rss / 1024 / 1024),
            heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
            heapTotal: Math.round(
              process.memoryUsage().heapTotal / 1024 / 1024,
            ),
          },
        },
        environment: process.env.NODE_ENV || "development",
      },
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500 },
    );
  }
}
