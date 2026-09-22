/**
 * Device job approval — humano aprova/rejeita um job que aguarda approval.
 *
 * POST /api/devices/jobs/:id/approve — body: { approved: boolean }
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../../../../lib/auth-helpers";
import { loadRootEnv } from "../../../../../../lib/server-env";
import { getServerClient } from "../../../../../../lib/server-supabase";
import { approveDeviceJob } from "../../../../../../lib/device-jobs";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ApproveBody = { approved: boolean };

export async function POST(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = (await req.json()) as ApproveBody;
    if (typeof body.approved !== "boolean") {
      return NextResponse.json(
        { error: "approved deve ser boolean" },
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

    const job = await approveDeviceJob(sb, {
      userId: auth.userId,
      jobId: params.id,
      approved: body.approved,
    });

    return NextResponse.json({ success: true, job });
  } catch (err) {
    console.error("[devices/jobs/approve] Erro:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
