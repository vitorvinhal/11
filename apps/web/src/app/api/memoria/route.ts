import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getMemoryAudit, supersedeMemory } from "@11/ia";
import { loadRootEnv } from "../../../lib/server-env";
import { requireUser } from "../../../lib/auth-helpers";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/memoria — trilha de auditoria: memory_events, checkpoints,
 * pending_actions e memórias (com origem/status).
 * POST /api/memoria { title, content, supersedingIds[] } — consolida memórias.
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

    const [events, checkpoints, pending, memories] = await Promise.all([
      getMemoryAudit(auth.userId, 200),
      sb
        .from("checkpoints")
        .select("id, action_id, target_type, target_id, status, created_at")
        .eq("user_id", auth.userId)
        .order("created_at", { ascending: false })
        .limit(50)
        .then((r) => ({
          error: r.error,
          data: (r.data ?? []).map(safeParseRow),
        })),
      sb
        .from("pending_actions")
        .select("id, action, risk_level, status, created_at")
        .eq("user_id", auth.userId)
        .order("created_at", { ascending: false })
        .limit(50)
        .then((r) => ({
          error: r.error,
          data: (r.data ?? []).map(safeParseRow),
        })),
      sb
        .from("memories")
        .select(
          "id, kind, title, origin, scope, status, superseded_by, superseded_at, created_at",
        )
        .eq("user_id", auth.userId)
        .order("created_at", { ascending: false })
        .limit(200)
        .then((r) => ({
          error: r.error,
          data: (r.data ?? []).map(safeParseRow),
        })),
    ]);

    return NextResponse.json({ events, checkpoints, pending, memories });
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

    const body = (await req.json()) as {
      title?: string;
      content?: string;
      supersedingIds?: string[];
    };
    if (
      !body.title?.trim() ||
      !body.content?.trim() ||
      !body.supersedingIds?.length
    ) {
      return NextResponse.json(
        { error: "title, content e supersedingIds são obrigatórios" },
        { status: 400 },
      );
    }

    const memory = await supersedeMemory({
      userId: auth.userId,
      kind: "fact",
      title: body.title,
      content: body.content,
      supersedingIds: body.supersedingIds,
      actor: String(auth.userId),
    });

    return NextResponse.json({ memory });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}

function safeParseRow(row: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = { ...row };
  for (const k of Object.keys(out)) {
    if (typeof out[k] === "string" && looksJson(out[k] as string)) {
      try {
        out[k] = JSON.parse(out[k] as string);
      } catch {
        /* keep */
      }
    }
  }
  return out;
}

function looksJson(v: string): boolean {
  return v.startsWith("{") || v.startsWith("[");
}
