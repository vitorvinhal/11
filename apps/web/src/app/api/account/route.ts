import { NextResponse } from "next/server";
import { loadRootEnv } from "../../../lib/server-env";
import { getServerClient, getAuthClient } from "../../../lib/server-supabase";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * DELETE /api/account
 * Exclui a conta do usuário autenticado e TODOS os seus dados.
 * Requer SUPABASE_SERVICE_ROLE_KEY (admin). O usuário é identificado pelo JWT.
 */
export async function DELETE(req: Request) {
  try {
    const auth = getAuthClient(req);
    const { data: userData, error: userErr } = await auth.auth.getUser();
    if (userErr || !userData?.user) {
      return NextResponse.json(
        { ok: false, error: "Não autenticado" },
        { status: 401 },
      );
    }
    const userId = userData.user.id;

    const admin = getServerClient();
    if (!admin) {
      return NextResponse.json(
        { ok: false, error: "Servidor sem service role configurado" },
        { status: 500 },
      );
    }

    // Apaga dados do usuário (best-effort por tabela).
    const tables = [
      "messages",
      "memories",
      "skills",
      "projects",
      "media",
      "connectors",
      "user_settings",
      "sessions",
      "artifacts",
      "plugins",
      "device_sessions",
      "model_usage",
    ];
    for (const t of tables) {
      try {
        await admin.from(t).delete().eq("user_id", userId);
      } catch {
        /* tabela pode não existir */
      }
    }

    // Exclui o usuário do auth.
    const { error: delErr } = await admin.auth.admin.deleteUser(userId);
    if (delErr)
      return NextResponse.json(
        { ok: false, error: delErr.message },
        { status: 500 },
      );

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: (err as Error).message },
      { status: 500 },
    );
  }
}
