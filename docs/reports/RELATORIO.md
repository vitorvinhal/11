# Relatório — 11 (Inteligência Autônoma)

Versão: **0.3.0-alpha** · Data: 2026-09-17

---

## 1. Resumo Executivo

Executadas 7 frentes: correção do 9Router para produção, correção de bugs críticos,
refação de favicon/ícones, ajuste de UI estilo GPT/ELEVEN, perfil funcional, terminal
estilo VSCode e testes/debug. **Build de produção OK, typecheck limpo, lint sem erros
(apenas warnings pré-existentes), smoke test 9/9.**

---

## 2. 9Router — problema e correção

### Diagnóstico (teste real dos endpoints)

| Endpoint                                | Resultado   |
| --------------------------------------- | ----------- |
| `http://localhost:20128` (local)        | ✅ responde |
| `https://rdri7er.abc-tunnel.us` (túnel) | ✅ responde |

**Causa raiz:** o modelo padrão no `.env` (`gemini/gemini-3.8-flash`) estava com
**quota free esgotada (HTTP 429)**. Vários combos do catálogo (`9router/groq/llama-3`,
`9router/vtx/gemini-3-pro`, `9router/opencode/free`) **não existem no gateway local**
(modelos da nuvem 9Router, não do gateway `npx 9router`).

### Combos verificados

| Combo                                                    | Status                          |
| -------------------------------------------------------- | ------------------------------- |
| `kr/glm-5`                                               | ✅ funcional                    |
| `kr/claude-sonnet-4.5`                                   | ✅ funcional                    |
| `gemini/gemini-3.6-flash`                                | ✅ funcional                    |
| `gemini/gemini-3.8-flash`                                | ⚠️ 429 quota                    |
| `groq/llama-3`, `vtx/...`, `nvidia/...`, `opencode/free` | ❌ não existem no gateway local |

### Correções aplicadas

- `9ROUTER_MODEL=kr/glm-5` + `9ROUTER_FALLBACK_MODELS` (cadeia de fallback).
- `route9Router` (`apps/web/src/app/api/chat/route.ts`): tenta combo escolhido → fallbacks
  → lista segura; pula em 503/404; loga erro claro.
- **Parser JSON+SSE**: o 9Router retorna `data: {...}` (streaming) mesmo com `stream:false`.
  Adicionado `parseCompletionContent()` que entende os dois formatos (era a causa de
  respostas vazias).
- Novo adapter resiliente em `packages/ia/src/router/adapters/9router.ts`.
- **Health check** novo: `GET /api/health/router` testa local + túnel em todos os combos.
- `server-env.ts`: agora mescla **todos** os `.env` do caminho (do app até a raiz do
  monorepo), corrigindo o fato de `apps/web/.env` "esconder" as vars do 9Router.

> **Ação necessária no Vercel:** definir as env vars `9ROUTER_ENDPOINT`, `9ROUTER_TUNNEL`,
> `9ROUTER_TOKEN`, `9ROUTER_MODEL`, `9ROUTER_FALLBACK_MODELS` no dashboard (o túnel é
> obrigatório em produção, pois `localhost` não existe no servidor).

---

## 3. Bugs críticos corrigidos

| #   | Bug                                                                              | Correção                        |
| --- | -------------------------------------------------------------------------------- | ------------------------------- |
| 1   | `capacitor.config.json` com JSON inválido e path de ícone cross-app              | reescrito válido                |
| 2   | `apps/web/.env` definia `SUPABASE_SERVICE_ROLE_KEY` com valor de publishable key | removido (herda da raiz/Vercel) |
| 3   | `loadRootEnv` parava no primeiro `.env`                                          | passa a mesclar toda a cadeia   |
| 4   | `saveProfile` não salvava API keys / 9Router                                     | unificado com `saveKeys`        |
| 5   | `.gitignore` não cobria `.env` das subpastas                                     | adicionado `**/.env`            |
| 6   | Redux `Store does not have a valid reducer`                                      | slice placeholder válido        |

---

## 4. Favicon e ícones

- `icon.svg` redesenhado ("11" em paths vetoriais, compatível com qualquer rasterizer).
- Web: `favicon.ico` (16/32/48), `favicon-16/32/48`, `apple-touch-icon` (180),
  `icon-192`, `icon-512`, `icon-1024` + **`manifest.json`** (PWA).
- `layout.tsx` atualizado com metadata completo.
- Android: `ic_launcher`/`ic_launcher_round`/`ic_launcher_foreground` em mdpi→xxxhdpi.
- iOS: AppIcons 20→1024.
- Desktop Tauri: 32→310 px + `icon.ico` regenerado; `tauri.conf.json` com lista completa.

---

## 5. UI estilo GPT/ELEVEN

- Empty state centralizado: logo, "O que posso fazer por você?", cards 2x2.
- Composer arredondado (`rounded-[24px]`), borda, sombra, botões circulares.
- Mensagens com avatar (V / 11) e rótulos.
- Sidebar 272px, header com logo, botão "Nova conversa".
- Header mobile com marca ELEVEN + ProfileDialog à direita.

---

## 6. Perfil funcional (todas as abas)

| Aba                           | Antes          | Agora                                                   |
| ----------------------------- | -------------- | ------------------------------------------------------- |
| General                       | OK             | OK (+keys unificadas)                                   |
| **Account**                   | só sign out    | email, senha, **excluir conta** (`DELETE /api/account`) |
| **Privacy**                   | texto          | **incognito** funcional, **exportar dados** (JSON)      |
| **Billing**                   | texto          | free (mantido)                                          |
| **Capabilities**              | toggles falsos | **persistidos** em `user_settings`                      |
| **Memory**                    | OK             | OK                                                      |
| **Reflect**                   | texto          | **stats reais** (memórias/skills/projetos/mídia)        |
| **Time**                      | texto          | **Pomodoro real** + quiet hours persistidos             |
| Code                          | parcial        | mantido                                                 |
| **Skills/Connectors/Plugins** | links mortos   | **painéis reais embutidos**                             |

Extra: tema **light** funcional + `ThemeSync` aplica a preferência ao carregar.

---

## 7. Terminal estilo VSCode

- **xterm.js** (`@xterm/xterm`, fit, web-links) em `TerminalPanel.tsx`.
- API `POST /api/terminal/exec` com **SSE streaming** (stdout/stderr/exit em tempo real).
- Shell: **PowerShell** no Windows (dá `pwd`, `ls`, `cat`, pipes — igual VSCode), `bash -lc` fora.
- `cd` com **cwd persistente por sessão**; histórico (↑/↓); Ctrl+C / Ctrl+L.
- Múltiplas abas de terminal.
- **Segurança:** auth obrigatória (Supabase JWT), allowlist de comandos + família de
  cmdlets PowerShell read-only, bloqueio de padrões destrutivos (`rm -rf /`, `format`, `shutdown`…),
  cwd restrito a `BRIDGE_ALLOWED_DIRS`.
- Workspace **Code & Terminal** com abas Editor/Terminal.

### Testes reais executados no terminal

| Comando                         | Resultado        |
| ------------------------------- | ---------------- |
| `echo ola-mundo`                | ✅ `ola-mundo`   |
| `cd Documents`                  | ✅ `/Documents`  |
| `pwd`                           | ✅ path          |
| `ls \| Select-Object -First 2`  | ✅ lista         |
| `Get-Date -Format 'yyyy-MM-dd'` | ✅ data          |
| `rm -rf /`                      | ✅ **bloqueado** |
| POST sem token                  | ✅ 401           |

---

## 8. Testes e debug

- `tsc --noEmit` → **limpo** (apps/web e packages/ia).
- `next lint` → **sem erros** (só warnings pré-existentes de `<img>`).
- `next build` → **sucesso** (era falha por Node 24/md4; corrigido com `hashFunction: sha256`).
- **Smoke test** (`scripts/smoke-test.mjs`): **9/9 passou**.
- Usuários de teste criados no Supabase foram **removidos** ao final.

---

## 9. Sugestões de novas features

| Prioridade | Feature                                                              |
| ---------- | -------------------------------------------------------------------- |
| Alta       | **Streaming no chat** (SSE, efeito "digitando")                      |
| Alta       | **PTY real** no terminal (`node-pty`) para shell interativo contínuo |
| Alta       | Túnel **nomeado** (Cloudflare) com domínio fixo                      |
| Média      | **Command Palette** (Cmd+K)                                          |
| Média      | **Split view** Chat + Code                                           |
| Média      | Persistir **Plugins** e **Artifacts** no servidor                    |
| Média      | **TTS** (a 11 ler as respostas)                                      |
| Média      | **i18n** (pt-BR/en/es)                                               |
| Baixa      | Geração de **imagens** no chat                                       |
| Baixa      | **Analytics pessoal** de uso                                         |
| Baixa      | Exportar conversas em PDF/Markdown                                   |

---

## 10. Arquivos principais alterados/criados

**Criados**

- `apps/web/src/app/api/health/router/route.ts`
- `apps/web/src/app/api/account/route.ts`
- `apps/web/src/app/api/terminal/exec/route.ts`
- `apps/web/src/components/TerminalPanel.tsx`
- `apps/web/src/components/CodeWorkspace.tsx`
- `apps/web/src/lib/theme-sync.tsx`
- `apps/web/public/manifest.json` + PNGs/ICO
- `scripts/smoke-test.mjs`

**Alterados**

- `apps/web/src/app/api/chat/route.ts`
- `apps/web/src/lib/server-env.ts`
- `apps/web/src/components/{ChatPanel,Sidebar,ProfileDialog}.tsx`
- `apps/web/src/app/{page,layout,providers}.tsx`
- `apps/web/src/styles/globals.css`
- `apps/web/next.config.js`
- `packages/ia/src/router/adapters/9router.ts`
- `packages/shared/src/store/store.ts`
- `apps/mobile/capacitor.config.json`, `apps/desktop/src-tauri/tauri.conf.json`
- `.env`, `.env.example`, `.gitignore`, `TODO.md`, `version.json`
