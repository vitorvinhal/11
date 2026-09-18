/**
 * FASE 24 — Structured Error Logger
 *
 * Logger estruturado específico para erros 5xx com contexto completo.
 * Coleta: request, response, stack trace, timing, e contexto do servidor.
 */

import { logger } from "./logger";

export interface ServerError {
  id: string;
  timestamp: string;
  statusCode: number;
  message: string;
  stack?: string;
  request: {
    method: string;
    path: string;
    query: string;
    ip: string;
    userAgent: string;
    userId?: string;
    requestId?: string;
  };
  server: {
    hostname: string;
    pid: number;
    uptime: number;
    memoryUsage: NodeJS.MemoryUsage;
  };
  timing: {
    startTime: number;
    endTime: number;
    durationMs: number;
  };
}

let errorCounter = 0;

function generateErrorId(): string {
  errorCounter++;
  return `srv_${Date.now()}_${errorCounter}`;
}

/**
 * Registra um erro 5xx estruturado.
 */
export function logServerError(
  statusCode: number,
  message: string,
  request: Request,
  error?: Error,
  startTime?: number,
): ServerError {
  const endTime = performance.now();
  const hostname =
    process.env.HOSTNAME ?? process.env.COMPUTERNAME ?? "unknown";

  const serverError: ServerError = {
    id: generateErrorId(),
    timestamp: new Date().toISOString(),
    statusCode,
    message,
    stack: error?.stack,
    request: {
      method: request.method,
      path: new URL(request.url).pathname,
      query: new URL(request.url).search,
      ip:
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        request.headers.get("x-real-ip") ??
        "127.0.0.1",
      userAgent: request.headers.get("user-agent") ?? "unknown",
      requestId: request.headers.get("x-request-id") ?? undefined,
    },
    server: {
      hostname,
      pid: process.pid,
      uptime: Math.round(process.uptime()),
      memoryUsage: process.memoryUsage(),
    },
    timing: {
      startTime: startTime ?? endTime,
      endTime,
      durationMs: Math.round(endTime - (startTime ?? endTime)),
    },
  };

  // Log estruturado
  logger.error(
    `[5xx] ${message}`,
    {
      errorId: serverError.id,
      statusCode,
      path: serverError.request.path,
      method: serverError.request.method,
      ip: serverError.request.ip,
      durationMs: serverError.timing.durationMs,
      pid: serverError.server.pid,
      uptime: serverError.server.uptime,
      heapUsed: Math.round(
        serverError.server.memoryUsage.heapUsed / 1024 / 1024,
      ),
    },
    error,
  );

  return serverError;
}

/**
 * Retorna estatísticas de erros do servidor.
 */
export function getErrorStats(): {
  totalErrors: number;
  uptime: number;
  memoryUsage: NodeJS.MemoryUsage;
} {
  return {
    totalErrors: errorCounter,
    uptime: Math.round(process.uptime()),
    memoryUsage: process.memoryUsage(),
  };
}
