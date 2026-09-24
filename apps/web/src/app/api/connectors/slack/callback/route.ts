import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { loadRootEnv } from "../../../../../lib/server-env";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// public by design: OAuth callback
export async function GET(req: Request) {
  try {
    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
    );
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const error = url.searchParams.get("error");

    if (error)
      return NextResponse.redirect(new URL(`/?error=slack_denied`, url.origin));
    if (!code || !state)
      return NextResponse.redirect(
        new URL(`/?error=slack_missing_code`, url.origin),
      );

    let userId: string;
    try {
      const decoded = JSON.parse(Buffer.from(state, "base64url").toString());
      userId = decoded.userId;
    } catch {
      return NextResponse.redirect(
        new URL(`/?error=slack_invalid_state`, url.origin),
      );
    }

    const tokenRes = await fetch("https://slack.com/api/oauth.v2.access", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.SLACK_CLIENT_ID ?? "",
        client_secret: process.env.SLACK_CLIENT_SECRET ?? "",
        code,
        redirect_uri:
          process.env.NEXT_PUBLIC_URL + "/api/connectors/slack/callback",
      }),
    });
    const tokens = await tokenRes.json();
    if (!tokens.ok) {
      console.error("Slack token exchange failed:", tokens);
      return NextResponse.redirect(
        new URL(`/?error=slack_token_failed`, url.origin),
      );
    }

    const { error: dbError } = await sb.from("connectors").upsert(
      {
        user_id: userId,
        provider: "slack",
        access_token: tokens.access_token,
        metadata: {
          team_name: tokens.team?.name,
          team_id: tokens.team?.id,
          bot_user_id: tokens.bot_user_id,
          scope: tokens.scope,
        },
      },
      { onConflict: "user_id,provider" },
    );

    if (dbError) console.error("DB error:", dbError);

    return NextResponse.redirect(new URL(`/?slack_connected=true`, url.origin));
  } catch (e) {
    console.error("Slack callback error:", e);
    return NextResponse.redirect(
      new URL(`/?error=slack_callback_failed`, new URL(req.url).origin),
    );
  }
}
