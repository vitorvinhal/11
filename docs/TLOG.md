# TLOG — Technical Log

Registro técnico de todas as versões do projeto 11.

---

## v0.4.0-alpha — 2026-09-17

### Eleven Coder (Terminal Interativo)
- **`packages/api/src/modules/terminal/pty-manager.service.ts`** — PTY Session Manager com node-pty, suporte bash/zsh/powershell/cmd, sessões por usuário (max 5), timeout 30min
- **`packages/api/src/modules/terminal/terminal.gateway.ts`** — WebSocket Gateway NestJS com autenticação JWT Supabase, eventos: create-session, input, output, resize, kill-session
- **`packages/api/src/modules/terminal/terminal.module.ts`** — Módulo NestJS para terminal
- **`apps/web/src/components/ElevenCoder.tsx`** — Frontend xterm.js com UI IDE-style: tabs, HUD, copiar/colar/reconectar, tema OLED
- **`apps/web/src/app/coder/page.tsx`** — Rota `/coder`

### NeuralGraph Redesign
- **`apps/web/src/components/NeuralGraph.tsx`** — Reescrito: OLED (#05050A), glassmorphism, partículas animadas, energy beams, layout clusters, search filter

### Segurança (CRITICAL fixes)
- **Service role key fallback removido** em 12 arquivos — user-facing clients agora usam apenas `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Hardcoded Supabase URL removida** em `health.controller.ts`
- **CORS wildcard corrigido** em `main.ts` — usa `ALLOWED_ORIGINS` env var
- **Settings route** — verificação de ownership (userId autenticado === userId solicitado)
- **Media route** — service role key substituída por anon key no client user-facing
- **Orphaned `exec.controller.js`** removido do tracking (execução arbitrária sem auth)

### Infra & CI/CD
- **`.gitignore`** — reescrito com regras para `dist/`, `*.tsbuildinfo`, `.expo/`, `*.log`
- **`dist/` removido** de todos os packages do git tracking (~100+ arquivos)
- **`.tsbuildinfo` removido** de todos os packages
- **`.expo/` removido** do tracking
- **`packages/tsconfig.json`** duplicado removido
- **`.eslintignore`** redundante removido (coberto por `.eslintrc.cjs`)
- **`@types/*`** movidos de `dependencies` para `devDependencies` no root
- **`workspaces` key** removida do root `package.json` (pnpm não usa)
- **`node-pty`** movido para `optionalDependencies` no `packages/api`
- **`socket.io-client`** adicionado ao `apps/web`
- **`@nestjs/websockets` + `socket.io`** adicionados ao `packages/api`
- **`next.config.js`** — fallbacks webpack para módulos Node.js

### Testes
- **terminal-validate** — 17/17 passando (validação de comandos, path containment, baseCommand)
- **`validate()`** agora aceita `allowedRoots` customizáveis

### Arquivos criados
| Arquivo | Descrição |
|---------|-----------|
| `packages/api/src/modules/terminal/pty-manager.service.ts` | PTY Session Manager |
| `packages/api/src/modules/terminal/terminal.gateway.ts` | WebSocket Gateway |
| `packages/api/src/modules/terminal/terminal.module.ts` | Terminal Module |
| `apps/web/src/components/ElevenCoder.tsx` | Frontend terminal |
| `apps/web/src/app/coder/page.tsx` | Rota /coder |
| `docs/TLOG.md` | Este arquivo |

### Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `packages/api/src/modules/app.module.ts` | TerminalModule importado |
| `packages/api/src/main.ts` | CORS com ALLOWED_ORIGINS |
| `packages/api/package.json` | node-pty optional, websockets deps |
| `apps/web/next.config.js` | webpack fallbacks |
| `apps/web/package.json` | socket.io-client |
| `apps/web/src/components/NeuralGraph.tsx` | Redesign completo |
| `apps/web/src/components/Sidebar.tsx` | Aba Eleven Coder |
| `apps/web/src/app/page.tsx` | Import ElevenCoder |
| `apps/web/src/lib/terminal-validate.ts` | allowedRoots param |
| `apps/web/src/lib/terminal-validate.test.ts` | TEST_ROOTS |
| `.gitignore` | Regras expandidas |
| `vercel.json` | builds config restaurado |
| `package.json` | @types→devDeps, workspaces removido |
| 12 arquivos backend | Service role key fix |

### Arquivos removidos do tracking
- `packages/*/dist/`, `apps/mobile/dist/`, `apps/web/tsconfig.tsbuildinfo`, `packages/*/tsconfig.tsbuildinfo`, `apps/mobile/.expo/`, `.eslintignore`, `packages/tsconfig.json`

---

## v0.3.0-alpha — 2026-09-17
(Veja CHANGELOG.md para detalhes completos)
