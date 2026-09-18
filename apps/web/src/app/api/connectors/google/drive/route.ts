import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../../../lib/server-env';
import { requireUser } from '../../../../../lib/auth-helpers';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

async function getGoogleToken(sb: any, userId: string) {
  const { data } = await sb.from('connectors').select('access_token, refresh_token, expires_at').eq('user_id', userId).eq('provider', 'google').single();
  if (!data?.access_token) return null;

  if (data.expires_at && new Date(data.expires_at) < new Date() && data.refresh_token) {
    const refreshRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID ?? '',
        client_secret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        refresh_token: data.refresh_token,
        grant_type: 'refresh_token',
      }),
    });
    const tokens = await refreshRes.json();
    if (tokens.access_token) {
      await sb.from('connectors').update({
        access_token: tokens.access_token,
        expires_at: tokens.expires_in ? new Date(Date.now() + tokens.expires_in * 1000).toISOString() : null,
      }).eq('user_id', userId).eq('provider', 'google');
      return tokens.access_token;
    }
  }
  return data.access_token;
}

export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const { sb, userId } = auth;

    const url = new URL(req.url);
    const query = url.searchParams.get('q') ?? '';
    const pageToken = url.searchParams.get('pageToken') ?? '';

    const token = await getGoogleToken(sb, userId);
    if (!token) return NextResponse.json({ error: 'Google not connected' }, { status: 401 });

    const driveQuery = query
      ? `name contains '${query}' and trashed = false`
      : 'trashed = false';
    const params = new URLSearchParams({
      q: driveQuery,
      pageSize: '20',
      fields: 'nextPageToken,files(id,name,mimeType,modifiedTime,size,webViewLink,iconLink)',
      orderBy: 'modifiedTime desc',
    });
    if (pageToken) params.set('pageToken', pageToken);

    const res = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
