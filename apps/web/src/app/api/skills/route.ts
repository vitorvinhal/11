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
    let q = s.from('skills').select('*').order('created_at', { ascending: false });
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
    const { data, error } = await s.from('skills').insert({
      user_id: body.userId,
      name: body.name,
      description: body.description ?? '',
      icon: body.icon ?? '⚡',
      enabled: body.enabled ?? true,
      prompt: body.prompt ?? '',
    }).select().single();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const s = sb(req);
    const { id, ...updates } = body;
    const { error } = await s.from('skills').update({ ...updates, updated_at: new Date().toISOString() }).eq('id', id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
    const s = sb(req);
    const { error } = await s.from('skills').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}