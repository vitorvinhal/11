import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../lib/server-env';

loadRootEnv();

/**
 * GET /api/health — Health check simplificado (sem auth, para load balancers)
 */
export async function GET() {
  return NextResponse.json({
    ok: true,
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || 'unknown',
    services: {
      router: { ok: true },
      plugins: { ok: true },
      skills: { ok: true },
    },
  });
}
