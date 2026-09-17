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
    const q = s.from('artifacts').select('*').order('created_at', { ascending: false });
    if (userId) q.eq('user_id', userId);
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
    const id = body.id ?? `art_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const { data, error } = await s.from('artifacts').upsert({
      id,
      user_id: body.userId,
      name: body.name,
      type: body.type ?? 'document',
      content: body.content ?? '',
    }, { onConflict: 'id' }).select().single();
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
    const userId = url.searchParams.get('userId');
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
    const s = sb(req);
    const { error } = await s.from('artifacts').delete().eq('id', id).eq('user_id', userId);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}