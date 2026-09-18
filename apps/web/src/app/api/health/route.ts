import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../lib/server-env';

loadRootEnv();

interface HealthCheck {
  service: string;
  ok: boolean;
  latencyMs: number;
  error?: string;
}

/**
 * GET /api/health — Health check aggregado de todos os subsystems.
 * Não requer auth (para load balancers/monitoring).
 */
export async function GET() {
  const checks: HealthCheck[] = [];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const services = [
    { name: 'router', path: '/api/health/router' },
    { name: 'plugins', path: '/api/health/plugins' },
    { name: 'skills', path: '/api/health/skills' },
  ];

  for (const svc of services) {
    const start = Date.now();
    try {
      const res = await fetch(`${baseUrl}${svc.path}`, {
        headers: { 'x-health-check': 'true' },
        signal: AbortSignal.timeout(5000),
      });
      const latencyMs = Date.now() - start;
      const body = await res.json().catch(() => ({}));

      checks.push({
        service: svc.name,
        ok: res.ok && body.ok !== false,
        latencyMs,
        error: body.error,
      });
    } catch (e) {
      checks.push({
        service: svc.name,
        ok: false,
        latencyMs: Date.now() - start,
        error: (e as Error).message,
      });
    }
  }

  const allOk = checks.every((c) => c.ok);

  return NextResponse.json(
    {
      ok: allOk,
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || 'unknown',
      checks,
    },
    { status: allOk ? 200 : 503 }
  );
}
