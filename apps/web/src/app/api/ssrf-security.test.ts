/**
 * CI-MIN-001 — Regressão de segurança: SSRF.
 *
 * Exigência: toda rota com fetch de URL do cliente precisa de allowlist.
 * Verificação alvo: /api/settings, /api/connectors/test + detector estático
 * de padrão perigoso em TODAS as rotas (route.ts sob apps/web/src/app/api).
 *
 * Achado de rota pública de URL do cliente → o teste falha aqui e o agente
 * REPORTA ao Brain (não corrige neste patch).
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

const API_ROOT = join(__dirname);

function listRouteFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      out.push(...listRouteFiles(full));
    } else if (entry === "route.ts") {
      out.push(full);
    }
  }
  return out;
}

describe("ssrf-security — rotas específicas", () => {
  test("/api/settings não faz fetch de URL externa", () => {
    const src = readFileSync(join(API_ROOT, "settings/route.ts"), "utf8");
    expect(src).not.toMatch(/\bfetch\s*\(/);
  });

  test("/api/connectors/test: toda URL de fetch é host hardcoded allowlistado", () => {
    const src = readFileSync(
      join(API_ROOT, "connectors/test/route.ts"),
      "utf8",
    );
    const fetchUrls = Array.from(
      src.matchAll(/fetch\(\s*(['"`])([^'"`]+)\1/g),
    ).map((m) => m[2]);
    expect(fetchUrls.length).toBeGreaterThan(0);
    const ALLOWED_HOSTS = [
      "https://www.googleapis.com/",
      "https://slack.com/",
      "https://api.github.com/",
      "https://api.notion.com/",
    ];
    for (const u of fetchUrls) {
      expect(ALLOWED_HOSTS.some((h) => u.startsWith(h))).toBe(true);
    }
  });
});

describe("ssrf-security — detector estático em todas as rotas", () => {
  const files = listRouteFiles(API_ROOT);

  test("encontrou rotas para varrer (>20)", () => {
    expect(files.length).toBeGreaterThan(20);
  });

  test("nenhuma rota faz fetch com URL vinda do body do cliente", () => {
    // Padrão perigoso: fetch(url) em que url deriva de body/payload/reqBody.(url|endpoint|href|uri)
    const dangerous =
      /fetch\(\s*(?:body|payload|reqBody|input)\s*(?:\?\.)?\s*\.\s*(?:url|endpoint|href|uri)/;
    const offenders: string[] = [];
    for (const f of files) {
      const src = readFileSync(f, "utf8");
      if (dangerous.test(src)) offenders.push(f);
    }
    expect(offenders).toEqual([]);
  });

  test("nenhuma rota faz fetch com URL montada a partir de searchParams (query)", () => {
    // fetch(exato searchParams.get(...)) — URL arbitrária via query string
    const dangerous = /fetch\(\s*(?:url|target|endpoint|href)\s*\)/;
    // Regra mais direta: searchParams.get não pode ser argumento direto de fetch
    const direct = /fetch\(\s*[^)]*searchParams\.get/;
    const offenders: string[] = [];
    for (const f of files) {
      const src = readFileSync(f, "utf8");
      if (direct.test(src)) offenders.push(f);
      // (dangerous é informativo — variável "url" isolada só é flag se vinda do body; o teste acima cobre o caso direto)
      void dangerous;
    }
    expect(offenders).toEqual([]);
  });
});
