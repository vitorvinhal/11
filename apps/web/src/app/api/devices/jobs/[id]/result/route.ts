/**
 * Device job result — dispositivo submete o resultado de um job.
 *
 * POST /api/devices/jobs/:id/result — body: { status, result?, error? }
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../../../../lib/auth-helpers";
import { loadRootEnv } from "../../../../../../lib/server-env";
import { getServerClient } from "../../../../../../lib/server-supabase";
import { submitDeviceJobResult } from "../../../../../../lib/device-jobs";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ResultBody = {
  status: "completed" | "failed" | "cancelled";
  result?: unknown;
  error?: string;
};

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = (await req.json()) as ResultBody;
    if (!["completed", "failed", "cancelled"].includes(body.status)) {
      return NextResponse.json(
        { error: `status inválido: ${body.status}` },
        { status: 400 },
      );
    }

    const sb = getServerClient();
    if (!sb) {
      return NextResponse.json(
        { error: "Supabase não configurado" },
        { status: 500 },
      );
    }

    const job = await submitDeviceJobResult(sb, {
      userId: auth.userId,
      jobId: params.id,
      status: body.status,
      result: body.result,
      error: body.error,
    });

    return NextResponse.json({ success: true, job });
  } catch (err) {
    console.error("[devices/jobs/result] Erro:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
