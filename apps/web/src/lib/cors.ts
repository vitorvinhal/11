/**
 * FASE 22 — CORS Middleware
 *
 * Configuração de Cross-Origin Resource Sharing para API routes.
 * Suporta origins configuráveis via variável de ambiente.
 */

export interface CorsConfig {
  /** Origins permitidos (se vazio, bloqueia tudo) */
  origins: string[];
  /** Métodos permitidos */
  methods: string[];
  /** Headers permitidos */
  allowedHeaders: string[];
  /** Headers expostos */
  exposedHeaders: string[];
  /** Se deve enviar credenciais */
  credentials: boolean;
  /** Tempo de cache do preflight (segundos) */
  maxAge: number;
}

const defaultConfig: CorsConfig = {
  origins: (process.env.CORS_ORIGINS ?? "").split(",").filter(Boolean),
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Request-Id",
    "X-Idempotency-Key",
  ],
  exposedHeaders: [
    "X-RateLimit-Limit",
    "X-RateLimit-Remaining",
    "X-RateLimit-Reset",
    "X-Request-Id",
  ],
  credentials: true,
  maxAge: 86400,
};

let config: CorsConfig = { ...defaultConfig };

/**
 * Atualiza a configuração CORS.
 */
export function configureCors(overrides: Partial<CorsConfig>): void {
  config = { ...config, ...overrides };
}

/**
 * Verifica se um origin é permitido.
 */
export function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return config.origins.length === 0;
  if (config.origins.includes("*")) return true;
  return config.origins.some(
    (allowed) =>
      origin === allowed || origin.endsWith(`.${new URL(allowed).hostname}`),
  );
}

/**
 * Retorna headers CORS para uma response.
 */
export function getCorsHeaders(origin: string | null): Record<string, string> {
  const headers: Record<string, string> = {};

  if (isOriginAllowed(origin)) {
    headers["Access-Control-Allow-Origin"] = origin ?? "*";
  } else if (config.origins.length > 0) {
    headers["Access-Control-Allow-Origin"] = "null";
  }

  if (config.credentials) {
    headers["Access-Control-Allow-Credentials"] = "true";
  }

  if (config.exposedHeaders.length > 0) {
    headers["Access-Control-Expose-Headers"] = config.exposedHeaders.join(", ");
  }

  return headers;
}

/**
 * Retorna headers para preflight (OPTIONS).
 */
export function getPreflightHeaders(): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": config.origins.includes("*")
      ? "*"
      : (config.origins[0] ?? ""),
    "Access-Control-Allow-Methods": config.methods.join(", "),
    "Access-Control-Allow-Headers": config.allowedHeaders.join(", "),
    "Access-Control-Max-Age": String(config.maxAge),
    ...(config.credentials
      ? { "Access-Control-Allow-Credentials": "true" }
      : {}),
  };
}

/**
 * Aplica headers CORS a uma Response.
 */
export function applyCors(response: Response, request: Request): Response {
  const origin = request.headers.get("Origin");
  const corsHeaders = getCorsHeaders(origin);

  for (const [key, value] of Object.entries(corsHeaders)) {
    response.headers.set(key, value);
  }

  return response;
}

/**
 * Trata preflight OPTIONS request.
 */
export function handlePreflight(): Response {
  return new Response(null, {
    status: 204,
    headers: getPreflightHeaders(),
  });
}
