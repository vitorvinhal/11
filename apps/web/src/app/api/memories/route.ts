import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../lib/server-env';
import { requireUser } from '../../../lib/auth-helpers';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const { sb, userId } = auth;
    const { data, error } = await sb
      .from('memories')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(200);
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
    const { data, error } = await sb.from('memories').insert({
      user_id: userId,
      kind: body.kind ?? 'note',
      title: body.title,
      content: body.content ?? '',
      metadata: body.metadata ?? {},
    }).select().single();
    if (error) throw error;
    return NextResponse.json(data);
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
    const { error } = await sb.from('memories').delete().eq('id', id).eq('user_id', userId);
    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}