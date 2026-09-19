import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { requireUser } from "../../../lib/auth-helpers";
import { loadRootEnv } from "../../../lib/server-env";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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
      .from("device_sessions")
      .select("*")
      .eq("user_id", auth.userId)
      .order("last_active", { ascending: false });

    if (error) return NextResponse.json({ sessions: [] });

    return NextResponse.json({ sessions: data ?? [] });
  } catch {
    return NextResponse.json({ sessions: [] });
  }
}

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const body = await req.json();
    const { platform, device, browser } = body;

    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
    );

    // Upsert: mesma plataforma + browser = mesma sessão
    const { data: existing } = await sb
      .from("device_sessions")
      .select("id")
      .eq("user_id", auth.userId)
      .eq("platform", platform ?? "unknown")
      .eq("browser", browser ?? "unknown")
      .limit(1)
      .maybeSingle();

    if (existing) {
      await sb
        .from("device_sessions")
        .update({ last_active: new Date().toISOString(), device })
        .eq("id", existing.id);
    } else {
      await sb.from("device_sessions").insert({
        user_id: auth.userId,
        platform: platform ?? "unknown",
        device: device ?? "unknown",
        browser: browser ?? "unknown",
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

export async function DELETE(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id)
      return NextResponse.json({ error: "id obrigatório" }, { status: 400 });

    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
    );

    await sb
      .from("device_sessions")
      .delete()
      .eq("id", id)
      .eq("user_id", auth.userId);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
