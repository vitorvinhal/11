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
      .from('connectors')
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
    const { data, error } = await sb.from('connectors').upsert({
      user_id: userId,
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
    const auth = await requireUser(req);
    if (!auth) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const { sb, userId } = auth;
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const provider = url.searchParams.get('provider');
    if (!id && !provider) {
      return NextResponse.json({ error: 'id or provider required' }, { status: 400 });
    }
    if (id) {
      const owned = await assertRowOwnership(sb, 'connectors', id, userId);
      if (!owned) return NextResponse.json({ error: 'Não autorizado' }, { status: 403 });
      const { error } = await sb.from('connectors').delete().eq('id', id).eq('user_id', userId);
      if (error) throw error;
    } else {
      const { error } = await sb.from('connectors').delete().eq('provider', provider).eq('user_id', userId);
      if (error) throw error;
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}