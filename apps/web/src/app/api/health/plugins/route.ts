import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../../lib/server-env';
import { requireUser } from '../../../../lib/auth-helpers';
import { createClient } from '@supabase/supabase-js';

loadRootEnv();

/**
 * GET /api/health/plugins — Health check do Plugin Registry
 * Retorna contagem de plugins instalados e status.
 */
export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { count, error } = await supabase
      .from('installed_plugins')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;

    return NextResponse.json({
      ok: true,
      service: 'plugins',
      timestamp: new Date().toISOString(),
      data: {
        installed: count ?? 0,
      },
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, service: 'plugins', error: (e as Error).message },
      { status: 500 }
    );
  }
}
