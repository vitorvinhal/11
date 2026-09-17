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
    const redirect = process.env.NEXT_PUBLIC_URL + '/api/connectors/github/callback';

    return NextResponse.redirect(
      `https://github.com/login/oauth/authorize?` +
      `client_id=${process.env.GITHUB_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirect)}` +
      `&scope=read:user,user:email,repo,read:org` +
      `&state=${state}`
    );
  } catch {
    return NextResponse.redirect(new URL('/?error=github_init_failed', new URL(req.url).origin));
  }
}