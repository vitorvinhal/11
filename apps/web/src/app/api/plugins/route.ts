import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../lib/server-env';
import { requireUser, assertRowOwnership } from '../../../lib/auth-helpers';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const { sb, userId } = auth;
    const { data, error } = await sb
      .from('plugins')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const { sb, userId } = auth;
    const body = await req.json();
    const { data, error } = await sb.from('plugins').upsert({
      id: body.id,
      user_id: userId,
      name: body.name,
      description: body.description ?? '',
      category: body.category ?? '',
      author: body.author ?? '',
      icon: body.icon ?? '',
      enabled: body.enabled ?? true,
      metadata: body.metadata ?? {},
      updated_at: new Date().toISOString(),
    }, { onConflict: 'id' }).select().single();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const { sb, userId } = auth;
    const body = await req.json();
    const { id, ...updates } = body;
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
    const owned = await assertRowOwnership(sb, 'plugins', id, userId);
    if (!owned) return NextResponse.json({ error: 'Não autorizado' }, { status: 403 });
    const { error } = await sb.from('plugins').update({ ...updates, updated_at: new Date().toISOString() }).eq('id', id).eq('user_id', userId);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const { sb, userId } = auth;
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
    const owned = await assertRowOwnership(sb, 'plugins', id, userId);
    if (!owned) return NextResponse.json({ error: 'Não autorizado' }, { status: 403 });
    const { error } = await sb.from('plugins').delete().eq('id', id).eq('user_id', userId);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}