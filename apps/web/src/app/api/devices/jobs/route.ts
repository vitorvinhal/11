/**
 * Device jobs — lista + criação de jobs (UI e chat).
 *
 * GET  /api/devices/jobs?deviceId=...&limit=... — lista jobs do usuário.
 * POST /api/devices/jobs — cria um job manual para o dispositivo.
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../../lib/auth-helpers";
import { loadRootEnv } from "../../../../lib/server-env";
import { getServerClient } from "../../../../lib/server-supabase";
import { listDeviceJobs } from "../../../../lib/device-jobs";
import { createDeviceJob, type DeviceToolName } from "@11/ia";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CreateJobBody = {
  deviceId: string;
  name: DeviceToolName;
  args?: Record<string, unknown>;
  requiresApproval?: boolean;
};

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = (await req.json()) as CreateJobBody;
    if (!body.deviceId || !body.name?.startsWith("device.")) {
      return NextResponse.json(
        { error: "deviceId e name (device.*) são obrigatórios" },
        { status: 400 },
      );
    }

    const job = await createDeviceJob({
      userId: auth.userId,
      deviceId: body.deviceId,
      name: body.name,
      args: body.args ?? {},
      requiresApproval: body.requiresApproval ?? false,
    });

    return NextResponse.json({ success: true, job });
  } catch (err) {
    console.error("[devices/jobs] Erro ao criar:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const url = new URL(req.url);
    const deviceId = url.searchParams.get("deviceId") ?? undefined;
    const limit = Math.min(
      parseInt(url.searchParams.get("limit") ?? "50", 10) || 50,
      200,
    );

    const sb = getServerClient();
    if (!sb) {
      return NextResponse.json(
        { error: "Supabase não configurado" },
        { status: 500 },
      );
    }

    const jobs = await listDeviceJobs(sb, {
      userId: auth.userId,
      deviceId,
      limit,
    });
    return NextResponse.json({ jobs });
  } catch (err) {
    console.error("[devices/jobs] Erro:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
