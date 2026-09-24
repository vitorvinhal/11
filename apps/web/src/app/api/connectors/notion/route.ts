import { NextResponse } from "next/server";
import { loadRootEnv } from "../../../../lib/server-env";
import { requireUser } from "../../../../lib/auth-unify";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const session = await requireUser(req);
    if (!session)
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

    const state = Buffer.from(
      JSON.stringify({ userId: session.userId, ts: Date.now() }),
    ).toString("base64url");
    const redirect =
      process.env.NEXT_PUBLIC_URL + "/api/connectors/notion/callback";

    const url =
      `https://api.notion.com/v1/oauth/authorize?` +
      `client_id=${process.env.NOTION_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirect)}` +
      `&response_type=code` +
      `&owner=user` +
      `&state=${state}`;
    return NextResponse.json({ url });
  } catch {
    return NextResponse.json({ error: "notion_init_failed" }, { status: 500 });
  }
}
