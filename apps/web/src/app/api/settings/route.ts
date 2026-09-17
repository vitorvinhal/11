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
    if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });
    const s = sb(req);
    const { data, error } = await s.from('user_settings').select('settings').eq('user_id', userId).single();
    if (error) {
      // Table might not exist yet, return empty
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
    const body = await req.json();
    const { userId, settings } = body;
    if (!userId || !settings) return NextResponse.json({ error: 'userId and settings required' }, { status: 400 });
    const s = sb(req);
    const { error } = await s.from('user_settings').upsert({
      user_id: userId,
      settings,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'user_id' });
    if (error) {
      // If table doesn't exist, try to create it
      if (error.code === '42P01' || error.message?.includes('does not exist')) {
        const { error: createErr } = await s.rpc('exec_sql', {
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
          // Retry the upsert
          const { error: retryErr } = await s.from('user_settings').upsert({
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