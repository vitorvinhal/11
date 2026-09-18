import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../../lib/server-env';
import { requireUser } from '../../../../lib/auth-helpers';

loadRootEnv();

/**
 * GET /api/health/router — Health check do Model Gateway
 * Verifica se o gateway está acessível.
 */
export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }

    // Lazy import to avoid circular deps at build time
    const ia = await import('@11/ia');
    const gateway = ia.modelGateway;

    // Verify gateway is instantiated
    const ok = gateway !== null && gateway !== undefined;

    return NextResponse.json({
      ok,
      service: 'router',
      timestamp: new Date().toISOString(),
      data: {
        available: ok,
      },
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, service: 'router', error: (e as Error).message },
      { status: 500 }
    );
  }
}
