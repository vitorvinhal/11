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
    const error = url.searchParams.get('error');

    if (error) return NextResponse.redirect(new URL(`/?error=notion_denied`, url.origin));
    if (!code || !state) return NextResponse.redirect(new URL(`/?error=notion_missing_code`, url.origin));

    let userId: string;
    try {
      const decoded = JSON.parse(Buffer.from(state, 'base64url').toString());
      userId = decoded.userId;
    } catch {
      return NextResponse.redirect(new URL(`/?error=notion_invalid_state`, url.origin));
    }

    const credentials = Buffer.from(`${process.env.NOTION_CLIENT_ID}:${process.env.NOTION_CLIENT_SECRET}`).toString('base64');
    const tokenRes = await fetch('https://api.notion.com/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.NEXT_PUBLIC_URL + '/api/connectors/notion/callback',
      }),
    });
    const tokens = await tokenRes.json();
    if (!tokens.access_token) {
      return NextResponse.redirect(new URL(`/?error=notion_token_failed`, url.origin));
    }

    const { error: dbError } = await sb.from('connectors').upsert({
      user_id: userId,
      provider: 'notion',
      access_token: tokens.access_token,
      metadata: {
        workspace_name: tokens.workspace_name,
        workspace_id: tokens.workspace_id,
        bot_id: tokens.bot_id,
        avatar_url: tokens.workspace_icon,
      },
    }, { onConflict: 'user_id,provider' });

    if (dbError) console.error('DB error:', dbError);

    return NextResponse.redirect(new URL(`/?notion_connected=true`, url.origin));
  } catch (e) {
    console.error('Notion callback error:', e);
    return NextResponse.redirect(new URL(`/?error=notion_callback_failed`, new URL(req.url).origin));
  }
}