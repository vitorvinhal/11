import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../../lib/server-env';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function b64url(input: string) {
  return Buffer.from(input).toString('base64url');
}

function verifier() {
  const array = new Uint8Array(32);
  if (typeof globalThis.crypto !== 'undefined' && globalThis.crypto.getRandomValues) {
    globalThis.crypto.getRandomValues(array);
  } else {
    for (let i = 0; i < 32; i++) array[i] = Math.floor(Math.random() * 256);
  }
  return b64url(String.fromCharCode(...Array.from(array)));
}

function challenge(ver: string) {
  // Simple SHA-256 for PKCE
  const { createHash } = require('crypto');
  return createHash('sha256').update(ver).digest('base64url');
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');
    if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

    const origin = new URL(req.url).origin;
    const isHttps = origin.startsWith('https://');

    const state = b64url(JSON.stringify({ userId, ts: Date.now() }));
    const v = verifier();
    const c = challenge(v);

    // Store PKCE verifier in a short-lived cookie.
    // `secure` apenas em HTTPS — em HTTP (dev localhost) o navegador ignora cookie secure.
    const cookieOpts: Record<string, string | number | boolean> = { httpOnly: true, secure: isHttps, sameSite: 'lax', path: '/', maxAge: 600 };
    const res = NextResponse.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${process.env.GOOGLE_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_URL + '/api/connectors/google/callback')}` +
      `&response_type=code` +
      `&scope=${encodeURIComponent('https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile')}` +
      `&access_type=offline` +
      `&prompt=consent` +
      `&state=${state}` +
      `&code_challenge=${c}` +
      `&code_challenge_method=S256`
    );
    res.cookies.set('google_pkce_verifier', v, cookieOpts);
    res.cookies.set('google_pkce_state', state, cookieOpts);
    return res;
  } catch {
    return NextResponse.redirect(new URL('/?error=google_oauth_init_failed', new URL(req.url).origin));
  }
}