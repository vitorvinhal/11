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

    if (error) {
      return NextResponse.redirect(
        new URL(`/?error=google_oauth_denied`, url.origin),
      );
    }

    if (!code || !state) {
      return NextResponse.redirect(
        new URL(`/?error=google_oauth_missing_code`, url.origin),
      );
    }

    // CSRF: o state retornado precisa bater com o cookie emitido no início do fluxo.
    const cookieHeader = req.headers.get("cookie") ?? "";
    const stateCookieMatch = cookieHeader.match(/google_pkce_state=([^;]+)/);
    const stateCookie = stateCookieMatch?.[1] ?? "";
    if (!stateCookie || stateCookie !== state) {
      return NextResponse.redirect(
        new URL(`/?error=google_oauth_invalid_state`, url.origin),
      );
    }

    // Decode state to get userId
    let userId: string;
    try {
      const decoded = JSON.parse(Buffer.from(state, "base64url").toString());
      userId = decoded.userId;
    } catch {
      return NextResponse.redirect(
        new URL(`/?error=google_oauth_invalid_state`, url.origin),
      );
    }

    // Get PKCE verifier from cookie
    const verifierMatch = cookieHeader.match(/google_pkce_verifier=([^;]+)/);
    const v = verifierMatch?.[1] ?? "";

    // Exchange code for tokens
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID ?? "",
        client_secret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        redirect_uri:
          process.env.NEXT_PUBLIC_URL + "/api/connectors/google/callback",
        grant_type: "authorization_code",
        code_verifier: v,
      }),
    });

    const tokens = await tokenRes.json();
    if (!tokens.access_token) {
      console.error("Google token exchange failed:", tokens);
      return NextResponse.redirect(
        new URL(`/?error=google_oauth_token_exchange_failed`, url.origin),
      );
    }

    // Get user info
    const userInfoRes = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${tokens.access_token}` },
      },
    );
    const userInfo = await userInfoRes.json();

    // Store in Supabase
    const { error: dbError } = await sb.from("connectors").upsert(
      {
        user_id: userId,
        provider: "google",
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token ?? null,
        expires_at: tokens.expires_in
          ? new Date(Date.now() + tokens.expires_in * 1000).toISOString()
          : null,
        scope: tokens.scope ?? "",
        metadata: {
          email: userInfo.email,
          name: userInfo.name,
          picture: userInfo.picture,
        },
      },
      { onConflict: "user_id,provider" },
    );

    if (dbError) {
      console.error("DB error storing Google tokens:", dbError);
      return NextResponse.redirect(
        new URL(`/?error=google_oauth_db_error`, url.origin),
      );
    }

    // Redirect back to app with success
    const res = NextResponse.redirect(
      new URL(`/?google_connected=true`, url.origin),
    );
    res.cookies.delete("google_pkce_verifier");
    res.cookies.delete("google_pkce_state");
    return res;
  } catch (e) {
    console.error("Google callback error:", e);
    return NextResponse.redirect(
      new URL(`/?error=google_oauth_callback_failed`, new URL(req.url).origin),
    );
  }
}
