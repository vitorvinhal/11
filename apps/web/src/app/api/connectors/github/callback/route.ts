import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { loadRootEnv } from '../../../../../lib/server-env';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
    );
    const url = new URL(req.url);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (!code || !state) return NextResponse.redirect(new URL(`/?error=github_missing_code`, url.origin));

    let userId: string;
    try {
      const decoded = JSON.parse(Buffer.from(state, 'base64url').toString());
      userId = decoded.userId;
    } catch {
      return NextResponse.redirect(new URL(`/?error=github_invalid_state`, url.origin));
    }

    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    const tokens = await tokenRes.json();
    if (!tokens.access_token) {
      return NextResponse.redirect(new URL(`/?error=github_token_failed`, url.origin));
    }

    // Get user info
    const userRes = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${tokens.access_token}`, Accept: 'application/vnd.github+json' },
    });
    const user = await userRes.json();

    const { error: dbError } = await sb.from('connectors').upsert({
      user_id: userId,
      provider: 'github',
      access_token: tokens.access_token,
      metadata: {
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
        email: user.email,
      },
    }, { onConflict: 'user_id,provider' });

    if (dbError) console.error('DB error:', dbError);

    return NextResponse.redirect(new URL(`/?github_connected=true`, url.origin));
  } catch (e) {
    console.error('GitHub callback error:', e);
    return NextResponse.redirect(new URL(`/?error=github_callback_failed`, new URL(req.url).origin));
  }
}