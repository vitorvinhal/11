# SPEC-001 — Terminal Exec (SSE + Sandbox)

- **Status:** `concluída` (registro retroativo)
- **ADR relacionado:** [ADR-004](../adr/ADR-004-rest-sse-terminal.md), [ADR-002](../adr/ADR-002-auth-unify-requireUser.md)
- **Data:** 2026-09-23

## Objetivo

Executar comandos de shell no ambiente do usuário com streaming em tempo real no terminal web (xterm.js), com segurança e auditoria.

## Regras de negócio

1. Sem `requireUser()` → **401** em GET e POST (sem exceção de método).
2. Comando fora da allowlist de `terminal-validate.ts` → bloqueado com 400 e log de auditoria.
3. Path/cwd fora de `ALLOWED_ROOTS` → bloqueado (validação por `path.relative`, nunca `startsWith`).
4. Rate limit: 30 comandos/min por `userId:sessionId`.
5. Output truncado em 512KB; timeout de processo: 120s.
6. Env do processo = whitelist (nunca herda `process.env` inteiro).

## Comportamento detalhado

- `POST /api/terminal/exec` → SSE (`stdout`, `stderr`, `exit`), `runtime: nodejs`, `dynamic: force-dynamic`.
- `GET /api/terminal/exec?sessionId=X` → `{ cwd, history, allowedRoots }` do próprio usuário.
- Comando especial `cd` troca o cwd da sessão sem spawn.
- Comando passa por `validate(trimmed, cwd)` antes do `spawn` (bash/powershell com flag `-lc`/`-Command`).
- Audit em tabela `terminal_audit_log` (best-effort).

## Critérios de aceitação

- [x] SEM token → 401 (GET e POST)
- [x] Payload de bypass (`;`, `&&`, `cd ..`, path `..`) → 400
- [x] Sessão de outro usuário inacessível (key `userId:sessionId`)
- [x] Smoke: `node scripts/smoke-test.mjs` cobre os casos acima

## Fora de escopo

- PTY interativa contínua (ver ADR-005 — servidor Orca).
