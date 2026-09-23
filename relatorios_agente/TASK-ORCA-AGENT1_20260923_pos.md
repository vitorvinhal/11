# RELATÓRIO PÓS — TASK-ORCA-AGENT1 (Orca Lead) — 2026-09-23

## 1. Metadados

- **Agente:** Agente 1 (Orca Lead)
- **Branch:** `fix/orca-agent1` → merge para `integration/agents-20260923`
- **Commits no branch:** `a06bcc0` (Orca server + proxy + UI), `42b3c72` (read-only API) + commit do sandbox `apps/orca/src/server.ts` + este relatório
- **Escopo:** `apps/orca/`, `apps/web/src/app/api/code/**`
- **Status:** CONCLUÍDO — gates PASS, smoke PASS

## 2. Gate real (executado neste relatório, saída real)

### `pnpm -r lint` → EXIT 0 ✅

- `packages/ia`: 18 warnings preexistentes, **0 errors** (igual à baseline)
- demais workspaces: Done, 0 problems

### `pnpm -r build` → EXIT 0 ✅

- `packages/shared`, `packages/ia`, `packages/cli`, `packages/api`: **Done**
- (npm `typecheck` não executado — quebrado no root, conforme protocolo)

### `pnpm -r test` → EXIT 0 ✅

- `packages/shared`: 1 passed / 1 total
- `packages/ia`: **257 passed / 257 total** (14 suites, 0 falhas)
- web: suites incluídas no jest multiprojeto — run exit 0

## 3. Smoke obrigatório (porta 4001)

Servidor: `node ts-node src/server.ts` → `Orca server listening on 127.0.0.1:4001`

### Comando mandatório

```http
POST http://localhost:4001/orca/exec
Content-Type: application/json
{"command":"echo healthcheck"}
```

Resposta real:

```json
{
  "success": true,
  "output": "...healthcheck\r\n...",
  "exitCode": 0,
  "timedOut": false
}
```

→ **SMOKE PASS**

### Sandbox — payloads de ataque (todos bloqueados, 400)

| Payload                                                   | Resultado                                        |
| --------------------------------------------------------- | ------------------------------------------------ |
| `{"command":"echo a; calc"}`                              | **400 invalid command** (metachar `;`)           |
| `{"command":"echo a && whoami"}`                          | **400 invalid command** (metachar `&`)           |
| `{"command":"echo x","cwd":"C:\\Windows\\..\\..\\Users"}` | **400 invalid cwd** (traversal)                  |
| `{"command":"type C:\\..\\..\\secret"}`                   | **400** (metachar `.` path traversal no comando) |

Proteções presentes no `apps/orca/src/server.ts`:

- listen **somente 127.0.0.1** (não 0.0.0.0)
- allowlist de metacharacters rejeitados (`; & | < > ( ) \` $ % ! " ' \r \n`)
- `cwd` via `path.resolve` + rejeição de segmentos `..` + `existsSync` de diretório
- builtins Windows (`echo`, `cd`, `dir`, `type`, `ver`, `set`) só via `cmd.exe /d /c` com argv já saneado
- timeout 30s (mata PTY, `timedOut:true`)
- cap de output 1MB com truncamento
- CORS restrito a `localhost`/`127.0.0.1`
- `express.json({limit:"64kb"})`

Proxy `/api/code`: mantém `verifyToken` + `checkRateLimit` + ownership checks
antes de encaminhar ao Orca — autorização fica na camada da API, o servidor
local é processo privado de rede.

## 4. Modificações finais deste ciclo

- `apps/orca/src/server.ts`: sandbox completo (ver §3)
- `relatorios_agente/AGENTE-1-ORCA_20260923_pre.md`: plano pré
- `relatorios_agente/TASK-ORCA-002_report.md`: relatório intermediário
- `relatorios_agente/TASK-ORCA-AGENT1_20260923_pos.md`: este relatório

## 5. Pendências declaradas ao Brain

- `PUT /api/code` E2E com token Supabase real não executado (sem credencial de
  login no ambiente do agente) — proxy validado indirettamente via
  `session-manager → ORCA_URL` com servidor vivo; **REQUIRES_SMOKE_TEST: YES**
  para o Brain rodar com sessão autenticada.
- `vendor/orca/` (clone do repo open source real) e restrição de plataforma
  `desktop-app/mobile-app only` (nunca web): **fora** deste ciclo — escopo do
  próximo agente/integração.

<!-- BRAIN_SYNC_START -->

AGENT: Agent-1 (Orca Lead)
TASK: TASK-ORCA-AGENT1
STATUS: DONE
BRANCH: fix/orca-agent1 → integration/agents-20260923
GATE: lint=PASS(0 errors), build=PASS, test=PASS(257+1)
SMOKE: PASS — POST /orca/exec {"command":"echo healthcheck"} → success:true, exitCode:0
SANDBOX: PASS — 4/4 payloads de ataque bloqueados (400); bind 127.0.0.1; sem shell bypass
REQUIRES_SMOKE_TEST: YES (porta 4001) — PUT /api/code autenticado pendente p/ Brain
PUSH_MAIN: NO
DEPLOY: NO
CHANGELOG/VERSION: untouched (responsabilidade do Brain)
NEXT: standby — Brain valida gate; próximos passos (vendor/orca, platform gate desktop/mobile-only) aguardam despacho
<!-- BRAIN_SYNC_END -->
