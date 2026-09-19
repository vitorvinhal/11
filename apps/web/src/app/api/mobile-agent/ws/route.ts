/**
 * Mobile Agent WebSocket Proxy — Mobile only
 *
 * Proxy WebSocket para o PC Agent (porta 3001) para mobile web.
 * Disponível apenas na versão mobile (Capacitor app ou mobile web).
 */

import { NextRequest, NextResponse } from "next/server";
import { requireUser } from "@/lib/auth-helpers";
import { loadRootEnv } from "@/lib/server-env";
import { mobileOnly, platformError } from "@/lib/platform-guard";

loadRootEnv();

const PC_AGENT_WS = process.env.PC_AGENT_WS_URL ?? "ws://localhost:3001";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  // Platform guard - mobile only
  const guard = mobileOnly(req);
  if (!guard.allowed) {
    return platformError(guard.platform, ["mobile-app", "mobile-web"]);
  }

  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const upgradeHeader = req.headers.get("upgrade");
    if (upgradeHeader !== "websocket") {
      return NextResponse.json(
        { error: "Expected WebSocket upgrade" },
        { status: 400 },
      );
    }

    // Return info for WebSocket connection
    return NextResponse.json({
      wsUrl: PC_AGENT_WS,
      message: "Connect to PC Agent WebSocket",
      protocol: "ws",
    });
  } catch (err) {
    console.error("[mobile-agent-ws] Erro:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
