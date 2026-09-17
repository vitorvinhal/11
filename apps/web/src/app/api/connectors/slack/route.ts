import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../../lib/server-env';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');
    if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

    const state = Buffer.from(JSON.stringify({ userId, ts: Date.now() })).toString('base64url');
    const redirect = process.env.NEXT_PUBLIC_URL + '/api/connectors/slack/callback';

    return NextResponse.redirect(
      `https://slack.com/oauth/v2/authorize?` +
      `client_id=${process.env.SLACK_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirect)}` +
      `&scope=channels:read,chat:write,files:read,users:read,email_read` +
      `&state=${state}`
    );
  } catch {
    return NextResponse.redirect(new URL('/?error=slack_init_failed', new URL(req.url).origin));
  }
}