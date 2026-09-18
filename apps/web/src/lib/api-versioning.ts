/**
 * FASE 26 — API Versioning
 *
 * Suporte a versionamento de API (v1/v2) com compatibilidade retroativa.
 * Permite depreciação gradual de endpoints e migração suave.
 */

export interface ApiVersion {
  /** Versão principal */
  major: number;
  /** Se a versão está ativa */
  active: boolean;
  /** Data de deprecação (se aplicável) */
  deprecatedAt?: string;
  /** Data de remoção (se aplicável) */
  removedAt?: string;
  /** Mensagem de migração */
  migrationGuide?: string;
}

export interface VersionedResponse<T = unknown> {
  data: T;
  meta: {
    version: string;
    deprecated?: boolean;
    deprecationWarning?: string;
    nextVersion?: string;
  };
}

// Versões conhecidas
const versions: Map<string, ApiVersion> = new Map([
  [
    "v1",
    {
      major: 1,
      active: true,
      migrationGuide: "Use /api/v2/ para novos recursos",
    },
  ],
  [
    "v2",
    {
      major: 2,
      active: true,
    },
  ],
]);

/**
 * Detecta a versão da API a partir da URL ou header.
 */
export function detectVersion(request: Request): string {
  // 1. Query parameter: ?version=v2
  const url = new URL(request.url);
  const queryVersion = url.searchParams.get("version");
  if (queryVersion && versions.has(queryVersion)) return queryVersion;

  // 2. Header: Accept: application/vnd.11.v2+json
  const accept = request.headers.get("Accept") ?? "";
  const headerMatch = accept.match(/application\/vnd\.11\.(v\d+)\+json/);
  if (headerMatch && versions.has(headerMatch[1])) return headerMatch[1];

  // 3. URL path: /api/v1/... ou /api/v2/...
  const pathMatch = url.pathname.match(/\/api\/(v\d+)\//);
  if (pathMatch && versions.has(pathMatch[1])) return pathMatch[1];

  // Default: v1
  return "v1";
}

/**
 * Verifica se uma versão está ativa.
 */
export function isVersionActive(version: string): boolean {
  const v = versions.get(version);
  return v?.active ?? false;
}

/**
 * Verifica se uma versão está deprecada.
 */
export function isVersionDeprecated(version: string): boolean {
  const v = versions.get(version);
  return v?.deprecatedAt !== undefined;
}

/**
 * Retorna informações sobre uma versão.
 */
export function getVersionInfo(version: string): ApiVersion | undefined {
  return versions.get(version);
}

/**
 * Retorna todas as versões disponíveis.
 */
export function getAllVersions(): ApiVersion[] {
  return Array.from(versions.values());
}

/**
 * Cria uma resposta versionada.
 */
export function versionedResponse<T>(
  data: T,
  version: string,
): VersionedResponse<T> {
  const v = versions.get(version);
  const response: VersionedResponse<T> = {
    data,
    meta: {
      version,
      deprecated: v?.deprecatedAt !== undefined,
    },
  };

  if (v?.deprecatedAt) {
    response.meta.deprecationWarning =
      v.migrationGuide ?? `API ${version} está depreciada`;
    response.meta.nextVersion = `v${v.major + 1}`;
  }

  return response;
}

/**
 * Adiciona headers de versão à response.
 */
export function addVersionHeaders(
  response: Response,
  version: string,
): Response {
  response.headers.set("X-API-Version", version);

  const v = versions.get(version);
  if (v?.deprecatedAt) {
    response.headers.set("X-API-Deprecated", "true");
    response.headers.set(
      "X-API-Deprecation-Warning",
      v.migrationGuide ?? `API ${version} está depreciada`,
    );
    response.headers.set("X-API-Next-Version", `v${v.major + 1}`);
  }

  return response;
}
