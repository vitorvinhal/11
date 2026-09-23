# ADR-001 — Monorepo pnpm + Turbo

- **Status:** `aceito`
- **Data:** 2026-09-01 (registro retroativo)

## Contexto

O produto tem múltiplas superfícies (web, desktop, mobile) e um core de IA compartilhado. Sem unificação, cada superfície duplicaria lógica de router, safety e plugins.

## Decisão

Monorepo com **pnpm 8.15.9** (pinado em `packageManager`) e workspaces `apps/*` + `packages/*`, orquestrado por **Turbo** (`test` → depende de `lint`; `build` → depende de `test`).

## Alternativas consideradas

- Multi-repo — descartado: sincronização manual de `@11/ia`, versionamento divergente, CI caro.
- npm/yarn workspaces — descartado: hoisting imprevisível; pnpm mais rápido e `.npmrc` com `shamefully-hoist=true` resolve compat.

## Consequências

- ✅ Core de IA único para todas as plataformas; gate único (`pnpm -r lint && build && test`).
- ⚠️ `dist/` de `@11/shared`/`@11/ia` precisa existir antes de consumir (ordem de build importa).
