/**
 * Auditoria de comandos — lista e replay.
 *
 * GET  /api/terminal/audit?limit=...&offset=... — lista logs de auditoria
 * POST /api/terminal/audit/replay — repete um comando salvo
 */

import { NextResponse } from "next/server";
import { requireUser } from "../../../../lib/auth-helpers";
import { getServerClient } from "../../../../lib/server-supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const auth = await requireUser(req);
  if (!auth) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const url = new URL(req.url);
  const limit = Math.min(parseInt(url.searchParams.get("limit") ?? "50"), 200);
  const offset = parseInt(url.searchParams.get("offset") ?? "0");
  const blocked = url.searchParams.get("blocked");

  const sb = getServerClient();
  let q = sb
    .from("terminal_audit_log")
    .select("*")
    .eq("user_id", auth.userId)
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (blocked === "true") q = q.eq("blocked", true);
  if (blocked === "false") q = q.eq("blocked", false);

  const { data, error, count } = await q;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    logs: data,
    total: count ?? data?.length ?? 0,
    limit,
    offset,
  });
}
