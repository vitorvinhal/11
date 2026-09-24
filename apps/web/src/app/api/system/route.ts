import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { resolve } from "path";
import { requireUser } from "../../../lib/auth-unify";

/**
 * GET /api/system — Informações detalhadas do sistema
 * Requer sessão (AUTH-GAPS-002): expõe runtime/memória do host.
 */
export async function GET(req: Request) {
  try {
    const session = await requireUser(req);
    if (!session)
      return NextResponse.json(
        { ok: false, error: "Não autenticado" },
        { status: 401 },
      );
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
