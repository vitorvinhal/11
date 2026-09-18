import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../lib/server-env';
import { requireUser } from '../../../lib/auth-helpers';

loadRootEnv();

/**
 * GET /api/metrics — Resumo das métricas do agente
 */
export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    const { getMetricSummary } = await import('@11/ia');
    const summary = getMetricSummary();

    return NextResponse.json({
      ok: true,
      timestamp: new Date().toISOString(),
      data: summary,
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/metrics — Limpar métricas antigas
 */
export async function DELETE(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    const { clearMetrics } = await import('@11/ia');
    clearMetrics();

    return NextResponse.json({ ok: true, message: 'Métricas limpas' });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500 }
    );
  }
}
