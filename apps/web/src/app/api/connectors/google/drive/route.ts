import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { loadRootEnv } from '../../../../../lib/server-env';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function sb(req: Request) {
  const auth = req.headers.get('authorization') ?? '';
  const token = auth.replace('Bearer ', '');
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
    { global: { headers: { Authorization: `Bearer ${token}` } } }
  );
}

async function getGoogleToken(s: ReturnType<typeof sb>, userId: string) {
  const { data } = await s.from('connectors').select('access_token, refresh_token, expires_at').eq('user_id', userId).eq('provider', 'google').single();
  if (!data?.access_token) return null;

  // Check if expired and refresh
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
      await s.from('connectors').update({
        access_token: tokens.access_token,
        expires_at: tokens.expires_in ? new Date(Date.now() + tokens.expires_in * 1000).toISOString() : null,
      }).eq('user_id', userId).eq('provider', 'google');
      return tokens.access_token;
    }
  }
  return data.access_token;
}

// Google Drive: list files
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');
    const query = url.searchParams.get('q') ?? '';
    const pageToken = url.searchParams.get('pageToken') ?? '';
    const s = sb(req);
    if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

    const token = await getGoogleToken(s, userId);
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