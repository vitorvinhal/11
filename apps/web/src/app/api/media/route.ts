import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { loadRootEnv } from '../../../lib/server-env';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

interface MediaItem {
  id: string;
  user_id: string;
  filename: string;
  mime_type: string;
  size: number;
  url: string;
  thumbnail_url?: string;
  analysis?: string;
  kind: 'image' | 'video' | 'audio' | 'other';
  created_at: string;
}

function getSupabase(authHeader?: string) {
  const token = authHeader?.replace('Bearer ', '') || '';
  return createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: token ? { Authorization: `Bearer ${token}` } : {} },
  });
}

/** Garante que o usuário autenticado é dono do item. Retorna o userId ou null. */
async function assertOwnership(sb: ReturnType<typeof getSupabase>, id: string): Promise<string | null> {
  const { data } = await sb.auth.getUser();
  if (!data?.user) return null;
  const userId = data.user.id;
  const { data: row } = await sb.from('media').select('user_id').eq('id', id).single();
  if (!row) return null;
  return row.user_id === userId ? userId : null;
}

function detectKind(mime: string): MediaItem['kind'] {
  if (mime.startsWith('image/')) return 'image';
  if (mime.startsWith('video/')) return 'video';
  if (mime.startsWith('audio/')) return 'audio';
  return 'other';
}

// GET — list media
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get('userId');
    const limit = parseInt(url.searchParams.get('limit') ?? '50', 10);
    const offset = parseInt(url.searchParams.get('offset') ?? '0', 10);

    const sb = getSupabase(req.headers.get('Authorization'));

    let query = sb.from('media').select('*').order('created_at', { ascending: false }).range(offset, offset + limit - 1);
    if (userId) query = query.eq('user_id', userId);

    const { data, error } = await query;
    if (error) throw error;

    return NextResponse.json(data ?? []);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

// POST — upload media (multipart or JSON with base64)
export async function POST(req: Request) {
  try {
    const sb = getSupabase(req.headers.get('Authorization'));

    const contentType = req.headers.get('content-type') ?? '';
    let filename: string;
    let mimeType: string;
    let buffer: Buffer;
    let userId: string;

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const file = formData.get('file') as File | null;
      userId = (formData.get('userId') as string) ?? 'anonymous';
      if (!file) return NextResponse.json({ error: 'Arquivo não fornecido' }, { status: 400 });
      filename = file.name;
      mimeType = file.type;
      buffer = Buffer.from(await file.arrayBuffer());
    } else {
      const body = await req.json();
      userId = body.userId ?? 'anonymous';
      filename = body.filename ?? 'clipboard.png';
      mimeType = body.mimeType ?? 'image/png';
      const b64 = (body.data as string) ?? '';
      buffer = Buffer.from(b64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    }

    const id = `media_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const kind = detectKind(mimeType);

    // Store as data URL for simplicity (no external storage needed)
    const dataUrl = `data:${mimeType};base64,${buffer.toString('base64')}`;

    const { error } = await sb.from('media').insert({
      id,
      user_id: userId,
      filename,
      mime_type: mimeType,
      size: buffer.length,
      url: dataUrl,
      kind,
    });

    if (error) throw error;

    const item: MediaItem = {
      id,
      user_id: userId,
      filename,
      mime_type: mimeType,
      size: buffer.length,
      url: dataUrl,
      kind,
      created_at: new Date().toISOString(),
    };

    return NextResponse.json(item, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

// DELETE — remove media (exige ownership)
export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID obrigatório' }, { status: 400 });

    const sb = getSupabase(req.headers.get('Authorization'));
    const owner = await assertOwnership(sb, id);
    if (!owner) return NextResponse.json({ error: 'Não autenticado ou item não pertence ao usuário' }, { status: 403 });

    const { error } = await sb.from('media').delete().eq('id', id).eq('user_id', owner);
    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

// PATCH — update analysis field (exige ownership)
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    if (!body.id) return NextResponse.json({ error: 'ID obrigatório' }, { status: 400 });

    const sb = getSupabase(req.headers.get('Authorization'));
    const owner = await assertOwnership(sb, body.id);
    if (!owner) return NextResponse.json({ error: 'Não autenticado ou item não pertence ao usuário' }, { status: 403 });

    const { error } = await sb.from('media').update({ analysis: body.analysis }).eq('id', body.id).eq('user_id', owner);
    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}