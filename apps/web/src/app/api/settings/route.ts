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
    const { data, error } = await sb.from('user_settings').select('settings').eq('user_id', userId).single();
    if (error) {
      if (error.code === '42P01' || error.message?.includes('does not exist')) return NextResponse.json({});
      if (error.code !== 'PGRST116') throw error;
    }
    return NextResponse.json(data?.settings ?? {});
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    const { sb, userId } = auth;
    const body = await req.json();
    const { settings } = body;
    if (!settings) return NextResponse.json({ error: 'settings required' }, { status: 400 });
    const { error } = await sb.from('user_settings').upsert({
      user_id: userId,
      settings,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' });
    if (error) {
      if (error.code === '42P01' || error.message?.includes('does not exist')) {
        const { error: createErr } = await sb.rpc('exec_sql', {
          query: `CREATE TABLE IF NOT EXISTS user_settings (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
            settings JSONB NOT NULL DEFAULT '{}',
            created_at TIMESTAMPTZ DEFAULT now(),
            updated_at TIMESTAMPTZ DEFAULT now()
          );
          ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
          CREATE POLICY "user_settings_isolated" ON user_settings FOR ALL USING (auth.uid() = user_id);`
        });
        if (!createErr) {
          const { error: retryErr } = await sb.from('user_settings').upsert({
            user_id: userId,
            settings,
            updated_at: new Date().toISOString(),
          }, { onConflict: 'user_id' });
          if (retryErr) throw retryErr;
          return NextResponse.json({ ok: true });
        }
      }
      throw error;
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('POST /api/settings error:', err);
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}