import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { restoreCheckpoint } from "@11/ia";
import { loadRootEnv } from "../../../lib/server-env";
import { requireUser } from "../../../lib/auth-helpers";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/reverter — lista checkpoints ativos do usuário.
 * POST /api/reverter { checkpointId } — restaura o estado salvo.
 */
export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
    );

    const { data, error } = await sb
      .from("checkpoints")
      .select(
        "id, action_id, target_type, target_id, before_state, status, created_at, expires_at",
      )
      .eq("user_id", auth.userId)
      .order("created_at", { ascending: false })
      .limit(100);

    if (error)
      return NextResponse.json({ error: error.message }, { status: 500 });

    const now = new Date().toISOString();
    const parsed = (data ?? []).map((c: Record<string, unknown>) => ({
      id: c.id,
      actionId: c.action_id,
      targetType: c.target_type,
      targetId: c.target_id,
      beforeState: safeParse(c.before_state),
      status: c.status,
      createdAt: c.created_at,
      expired: (c.expires_at as string) < now,
    }));

    return NextResponse.json({ checkpoints: parsed });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const body = (await req.json()) as { checkpointId?: string };
    if (!body.checkpointId) {
      return NextResponse.json(
        { error: "checkpointId é obrigatório" },
        { status: 400 },
      );
    }

    const result = await restoreCheckpoint(body.checkpointId, auth.userId);
    if (!result.restored) {
      return NextResponse.json(
        { error: result.error ?? "Falha ao restaurar" },
        { status: 400 },
      );
    }

    return NextResponse.json({ restored: true, state: result.beforeState });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}

function safeParse(v: unknown): unknown {
  if (typeof v !== "string") return v ?? null;
  try {
    return JSON.parse(v);
  } catch {
    return v;
  }
}
