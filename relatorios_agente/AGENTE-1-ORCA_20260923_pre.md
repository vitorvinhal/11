# PLANO PRÉ — AGENTE-1-ORCA (Orca Lead)

- **Branch:** `fix/orca-agent1` (a criar; sem commit direto em main)
- **Data:** 2026-09-23
- **Escopo permitido:** `apps/orca/`, `apps/web/src/app/api/code/**`
- **Fora de escopo:** `CHANGELOG.md`, `version.json`, `git push origin main`, deploy, typecheck root

## 1. Diagnóstico prévio

Smoke inicial em `apps/orca/src/server.ts`:

- `POST /orca/exec` com `{"command":"echo healthcheck"}` → **500**.
  Causa: `pty.spawn("echo healthcheck", [])` — string não é executável (no Windows
  `echo` é builtin de `cmd.exe`; no POSIX resolve só se splitar em argv).
- `pty.spawn("cmd.exe", ["/c","echo","healthcheck"])` → **200**
  `{success:true, output:"...healthcheck\r\n", exitCode:0}` → PTY funcional.
- Riscos de sandbox identificados no stub:
  - `app.listen(PORT)` vincula **0.0.0.0** (exposto na rede) — deve ser 127.0.0.1.
  - Sem `cwd` com `..`/path traversal check.
  - Sem timeout: PTY interativo que nunca exita deixa request pendurado.
  - Sem cap de tamanho de output.
  - `cors()` sem origem restrita.
  - Sem rejeição de metacharacteres de shell no `command` (bypass shell potencial).

## 2. Plano de implementação

1. **Parse de comando**: se `args` vier vazio, splitar `command` por whitespace
   (argv seguro, sem shell).
2. **Sandbox do servidor:**
   - listen apenas `127.0.0.1`.
   - rejeitar metacharacters (`; & | < > ( ) \` $ % ! " '`) e `..` no comando.
   - `cwd`: precisar existir (`fs.existsSync`), rejeitar segmentos `..`.
   - fallback para builtins Windows (`echo`, `cd`, `dir`, `type`, `ver`) via
     `cmd.exe /c` **somente** com o argv já saneado (metachar já rejeitado).
   - timeout padrão 30s (mata PTY, responde `timed_out:true`).
   - cap de output 1MB com truncamento.
   - CORS restrito a `http://localhost:*` / `http://127.0.0.1:*`.
3. **Proxy `/api/code`:** validar `workingDir` no `POST` (absoluto, sem `..`)
   antes de criar sessão — cobre path traversal pelo lado da API.
4. **Smoke:**
   - `POST /orca/exec {"command":"echo healthcheck"}` → esperado `success:true`.
   - Ataque: `{"command":"echo a; calc"}` / `{"cwd":"C:\\..\\..\\etc"}` → 400.
   - Proxy: script ts-node que cria+aprova sessão via `session-manager`
     apontando `ORCA_URL=http://localhost:4001` → status `completed`
     (sem conexão recusada). **PUT /api/code E2E com token real exige login
     Supabase** — será reportado como pendente se não houver credencial.
5. **Gates:** `pnpm -r lint`, `pnpm -r build`, `pnpm -r test`
   (não `pnpm typecheck`).

## 3. Checkpoints git

- `git checkout -b fix/orca-agent1` antes de qualquer edit.
- Commit intermediário após gates passarem.

## 4. Risco aceito / pendências

- Autenticação do servidor Orca: é processo local (127.0.0.1) — token removido
  de propósito; autorização fica em `/api/code` (verifyToken + rate limit).
- PUT /api/code com token vivo: depende de credenciais Supabase não versionadas.

<!-- BRAIN_SYNC_START — pre plan -->
