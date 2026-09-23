# ADR-002 — Auth unificada via `requireUser()`

- **Status:** `aceito`
- **Data:** 2026-09-22

## Contexto

Havia três formas de autenticação convivendo: `requireUser()` (auth-helpers), `authenticate()` (terminal exec, com fallback `dev-user`) e `verifyToken()` (code API, com branch de JWT legado via `JWT_SECRET`). Rotas novas podiam herdar a implantação errada e GETs ficavam sem auth (regressão já ocorrida em `GET /api/terminal/exec`).

## Decisão

Toda rota de API usa **`requireUser(req)`** importado de módulo único (`apps/web/src/lib/auth-helpers.ts` / `auth-unify.ts`). `authenticate()` e `verifyToken()` eliminados. GET incluído — sem exceção para método HTTP. Rotas OAuth `*/callback` são públicas por design (justificado).

## Alternativas consideradas

- Manter as 3 implementações com wrapper — descartado: três caminhos de falha, hardcodes de JWT_SECRET já regrediram uma vez.
- Middleware global do Next — descartado: granularidade por rota mais clara para auditoria de segurança.

## Consequências

- ✅ Um único ponto de verificação; regra "auth first" auditável por grep (`grep -r requireUser apps/`).
- ⚠️ `scripts/smoke-test.mjs` precisa refletir 401 sem token (feito no patch 2.16.4/2.17).
- ⚠️ Varredura de rotas sem auth é checklist permanente em `docs/AGENTE.md` seção 8.
