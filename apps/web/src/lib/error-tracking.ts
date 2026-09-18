/**
 * Error Tracking — FASE 16B
 *
 * Middleware para captura e rastreamento de erros não tratados.
 * Coleta contexto da request e erros para debug.
 */

import { logger } from "./logger";

export interface ErrorContext {
  requestId?: string;
  userId?: string;
  path?: string;
  method?: string;
  userAgent?: string;
  ip?: string;
  timestamp: string;
}

export interface TrackedError {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: "low" | "medium" | "high" | "critical";
}

// Gerar ID único para o erro
function generateErrorId(): string {
  return `err_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

// Determinar severidade baseado no erro
function getSeverity(error: Error): TrackedError["severity"] {
  const name = error.name.toLowerCase();
  if (name.includes("auth") || name.includes("permission")) return "high";
  if (name.includes("timeout") || name.includes("rate")) return "medium";
  if (name.includes("validation") || name.includes("syntax")) return "low";
  return "medium";
}

/**
 * Capturar e rastrear erro.
 */
export function trackError(
  error: Error,
  context: Partial<ErrorContext> = {},
): TrackedError {
  const tracked: TrackedError = {
    id: generateErrorId(),
    message: error.message,
    stack: error.stack,
    context: {
      timestamp: new Date().toISOString(),
      ...context,
    },
    severity: getSeverity(error),
  };

  // Log estruturado
  logger.error(
    `[${tracked.id}] ${error.message}`,
    {
      severity: tracked.severity,
      ...context,
    },
    error,
  );

  return tracked;
}

/**
 * Middleware para capturar erros em API routes.
 */
export function withErrorTracking(
  handler: (req: Request) => Promise<Response>,
): (req: Request) => Promise<Response> {
  return async (req: Request) => {
    const requestId = `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    try {
      return await handler(req);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));

      trackError(err, {
        requestId,
        path: new URL(req.url).pathname,
        method: req.method,
        userAgent: req.headers.get("user-agent") || undefined,
      });

      return new Response(
        JSON.stringify({
          error: "Internal server error",
          requestId,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  };
}

/**
 * Handler para erros não capturados (global).
 */
export function setupGlobalErrorHandlers() {
  if (typeof process !== "undefined") {
    process.on("uncaughtException", (error) => {
      trackError(error, { path: "uncaughtException" });
    });

    process.on("unhandledRejection", (reason) => {
      const error =
        reason instanceof Error ? reason : new Error(String(reason));
      trackError(error, { path: "unhandledRejection" });
    });
  }
}
