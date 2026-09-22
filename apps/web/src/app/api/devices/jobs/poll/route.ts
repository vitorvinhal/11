/**
 * Device jobs poll — o dispositivo busca e reivindica o próximo job queued.
 *
 * GET /api/devices/jobs/poll?deviceId=... — retorna o job reivindicado (running) ou null.
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../../../lib/auth-helpers";
import { loadRootEnv } from "../../../../../lib/server-env";
import { getServerClient } from "../../../../../lib/server-supabase";
import { claimNextDeviceJob } from "../../../../../lib/device-jobs";
import { isValidDeviceId } from "../../../../../lib/device-registry";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const url = new URL(req.url);
    const deviceId = url.searchParams.get("deviceId") ?? "";
    if (!isValidDeviceId(deviceId)) {
      return NextResponse.json({ error: "deviceId inválido" }, { status: 400 });
    }

    const sb = getServerClient();
    if (!sb) {
      return NextResponse.json(
        { error: "Supabase não configurado" },
        { status: 500 },
      );
    }

    const job = await claimNextDeviceJob(sb, {
      userId: auth.userId,
      deviceId,
    });

    return NextResponse.json({ job });
  } catch (err) {
    console.error("[devices/jobs/poll] Erro:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
