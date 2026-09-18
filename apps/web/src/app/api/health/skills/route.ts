import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../../lib/server-env';
import { requireUser } from '../../../../lib/auth-helpers';
import { createClient } from '@supabase/supabase-js';

loadRootEnv();

/**
 * GET /api/health/skills — Health check do Skill System
 * Retorna contagem de skills instaladas.
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
      .from('installed_skills')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;

    return NextResponse.json({
      ok: true,
      service: 'skills',
      timestamp: new Date().toISOString(),
      data: {
        installed: count ?? 0,
      },
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, service: 'skills', error: (e as Error).message },
      { status: 500 }
    );
  }
}
