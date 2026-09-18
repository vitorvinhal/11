/**
 * Performance Monitoring — FASE 16C
 *
 * Coleta de métricas de performance da aplicação.
 * Rastreia latência de requests, uso de memória e throughput.
 */

import { logger } from "./logger";

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: string;
  tags?: Record<string, string>;
}

export interface RequestMetric {
  path: string;
  method: string;
  statusCode: number;
  duration: number;
  timestamp: string;
}

// Armazenamento em memória (em produção, usar Prometheus/Datadog)
const metrics: PerformanceMetric[] = [];
const requestMetrics: RequestMetric[] = [];
const MAX_METRICS = 1000;

/**
 * Registrar métrica customizada.
 */
export function recordMetric(
  name: string,
  value: number,
  unit: string = "count",
  tags?: Record<string, string>,
) {
  const metric: PerformanceMetric = {
    name,
    value,
    unit,
    timestamp: new Date().toISOString(),
    tags,
  };

  metrics.push(metric);
  if (metrics.length > MAX_METRICS) {
    metrics.shift();
  }
}

/**
 * Registrar métrica de request.
 */
export function recordRequest(
  path: string,
  method: string,
  statusCode: number,
  duration: number,
) {
  const metric: RequestMetric = {
    path,
    method,
    statusCode,
    duration,
    timestamp: new Date().toISOString(),
  };

  requestMetrics.push(metric);
  if (requestMetrics.length > MAX_METRICS) {
    requestMetrics.shift();
  }

  // Log requests lentos (> 1s)
  if (duration > 1000) {
    logger.warn(`Slow request: ${method} ${path}`, {
      duration,
      statusCode,
    });
  }
}

/**
 * Middleware para medir performance de requests.
 */
export function withPerformanceTracking(
  handler: (req: Request) => Promise<Response>,
): (req: Request) => Promise<Response> {
  return async (req: Request) => {
    const start = performance.now();
    const url = new URL(req.url);

    try {
      const response = await handler(req);
      const duration = Math.round(performance.now() - start);

      recordRequest(url.pathname, req.method, response.status, duration);

      // Adicionar headers de performance
      const headers = new Headers(response.headers);
      headers.set("X-Response-Time", `${duration}ms`);

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    } catch (error) {
      const duration = Math.round(performance.now() - start);
      recordRequest(url.pathname, req.method, 500, duration);
      throw error;
    }
  };
}

/**
 * Obter resumo de performance.
 */
export function getPerformanceSummary() {
  const now = Date.now();
  const last5min = requestMetrics.filter(
    (m) => now - new Date(m.timestamp).getTime() < 5 * 60 * 1000,
  );

  const avgDuration =
    last5min.length > 0
      ? last5min.reduce((sum, m) => sum + m.duration, 0) / last5min.length
      : 0;

  const p95Duration =
    last5min.length > 0
      ? last5min.sort((a, b) => a.duration - b.duration)[
          Math.floor(last5min.length * 0.95)
        ]?.duration || 0
      : 0;

  const errorRate =
    last5min.length > 0
      ? last5min.filter((m) => m.statusCode >= 400).length / last5min.length
      : 0;

  return {
    totalRequests: requestMetrics.length,
    last5min: {
      count: last5min.length,
      avgDuration: Math.round(avgDuration),
      p95Duration,
      errorRate: Math.round(errorRate * 100) / 100,
    },
    customMetrics: metrics.length,
  };
}

/**
 * Obter métricas de request por path.
 */
export function getRequestMetricsByPath() {
  const byPath: Record<
    string,
    { count: number; avgDuration: number; errors: number }
  > = {};

  for (const metric of requestMetrics) {
    if (!byPath[metric.path]) {
      byPath[metric.path] = { count: 0, avgDuration: 0, errors: 0 };
    }
    byPath[metric.path].count++;
    byPath[metric.path].avgDuration += metric.duration;
    if (metric.statusCode >= 400) {
      byPath[metric.path].errors++;
    }
  }

  // Calcular médias
  for (const path of Object.keys(byPath)) {
    byPath[path].avgDuration = Math.round(
      byPath[path].avgDuration / byPath[path].count,
    );
  }

  return byPath;
}
