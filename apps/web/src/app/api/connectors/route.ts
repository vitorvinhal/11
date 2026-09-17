import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../lib/server-env';
import { getAuthClient } from '../../../lib/server-supabase';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function sb(req: Request) {
  return getAuthClient(req);
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');
    const s = sb(req);
    let q = s.from('connectors').select('*').order('created_at', { ascending: false });
    if (userId) q = q.eq('user_id', userId);
    const { data, error } = await q;
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const s = sb(req);
    const { data, error } = await s.from('connectors').upsert({
      user_id: body.userId,
      provider: body.provider,
      access_token: body.access_token,
      refresh_token: body.refresh_token,
      expires_at: body.expires_at,
      scope: body.scope,
      metadata: body.metadata ?? {},
    }, { onConflict: 'user_id,provider' }).select().single();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const provider = url.searchParams.get('provider');
    const userId = url.searchParams.get('userId');
    const s = sb(req);
    let q = s.from('connectors').delete();
    if (id) q = q.eq('id', id);
    else if (provider && userId) q = q.eq('provider', provider).eq('user_id', userId);
    else return NextResponse.json({ error: 'id or provider+userId required' }, { status: 400 });
    const { error } = await q;
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}