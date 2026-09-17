# Changelog — 11

Todas as alterações significativas são documentadas aqui.
O versionamento segue: `v0.{MAIOR}.{MENOR}-{canal}` (alpha → rc → estável).

Versão atual em `apps/web/public/version.json`. Bump automático:

```bash
pnpm version:patch   # v0.4.0-alpha → v0.4.1-alpha
pnpm version:minor   # v0.4.0-alpha → v0.5.0-alpha
pnpm version:major   # v0.4.0-alpha → v1.0.0-alpha
pnpm version:rc      # patch e troca canal para rc
```

Bump com notas de release:

```bash
node scripts/version.js minor --change "Eleven Coder: terminal interativo PTY" --change "NeuralGraph redesenhado"
```

---

## v0.4.0-alpha — 2026-09-17

### 🖥️ Eleven Coder (Terminal Interativo)
- **PTY Session Manager**: sessões PTY reais com node-pty, suporte a bash/zsh/powershell/cmd
- **WebSocket Gateway**: NestJS WebSocket com autenticação JWT Supabase, eventos create-session/input/output/resize/kill
- **Frontend xterm.js**: UI IDE-style com:
  - Tabs de sessão com indicadores de status (conectado/desconectado)
  - HUD footer com info de conexão e contagem de sessões
  - Ações: copiar seleção, colar, limpar terminal, reconectar
  - Tema OLED (#05050A) com cyan/magenta accents
  - Fonte JetBrains Mono, cursor bar com blink
  - Suporte a web links clicáveis
- **Sidebar**: aba "Eleven Coder" integrada à navegação principal

### 🧠 Rede Neural (NeuralGraph)
- **Redesign completo**: visual futurista OLED (#05050A), glassmorphism panels
- **Partículas animadas**: sistema de partículas no fundo com movimento orgânico
- **Energy beams**: conexões entre nós com gradiente cyan→magenta e animação
- **Layout em clusters**: nós agrupados por tipo (core, ia, memory, integration)
- **HUD overlays**: contadores animados, legenda por tipo de nó
- **Search filter**: filtro por label com highlighting de matches
- **Node detail panel**: sidebar com info detalhada do nó selecionado

### 🔐 Segurança (CRITICAL)
- **Service role key fallback removido** em 12 arquivos — user-facing clients agora usam apenas `NEXT_PUBLIC_SUPABASE_ANON_KEY`, admin clients usam `SUPABASE_SERVICE_ROLE_KEY`
- **Hardcoded Supabase URL removida** de `health.controller.ts`
- **CORS wildcard corrigido** — `main.ts` agora usa `ALLOWED_ORIGINS` env var (comma-separated)
- **Settings route** — verificação de ownership: userId autenticado deve coincidir com userId solicitado
- **Media route** — service role key substituída por anon key no client user-facing
- **Orphaned `exec.controller.js`** removido do tracking (execução arbitrária sem auth/validação)

### 🧹 Limpeza do Repositório
- `.gitignore` reescrito com regras para `dist/`, `*.tsbuildinfo`, `.expo/`, `*.log`
- `dist/` removido de todos os packages do git tracking (~100+ arquivos)
- `.tsbuildinfo` removido de todos os packages
- `.expo/` removido do tracking
- `packages/tsconfig.json` duplicado removido
- `.eslintignore` redundante removido
- `@types/*` movidos de `dependencies` para `devDependencies` no root
- `workspaces` key removida do root `package.json`

### 🔧 Infra & Correções
- **socket.io-client**: adicionado ao frontend para WebSocket
- **@nestjs/websockets + socket.io**: adicionados ao packages/api
- **node-pty**: PTY nativo para sessões de terminal reais, movido para `optionalDependencies`
- **next.config.js**: fallbacks webpack para módulos Node.js (fs, net, crypto, etc.)
- **terminal-validate**: função `validate` agora aceita `allowedRoots` customizáveis
- **Testes**: 17/17 passando (validação de comandos, path containment, baseCommand)
- **Todos os package.json** sincronizados em `0.4.0-alpha`

---

## v0.3.0-alpha — 2026-09-17

### ⚡ Streaming & Chat
- **Streaming SSE no chat** (`/api/chat` com `stream:true` → eventos `meta`/`delta`/`done`) + efeito "digitando" no `ChatPanel`; contrato JSON mantido quando `stream` não é enviado
- **Web search real** (flag `webSearch` antes ignorada): injeta contexto do DuckDuckGo Instant Answer, sem chave
- Persistência de mensagens/memórias movida para antes da transmissão SSE (não duplica se o cliente abortar)

### 🔐 Segurança
- **`getAuthClient` agora usa ANON key** (RLS sempre aplicado): sem token, nenhuma rota vaza dados — antes usava service role como base e listava tudo sem auth
- **`/api/code` auth corrigida**: aceita Supabase JWT (claim `sub`) e JWT legado; removido `JWT_SECRET` com default hardcoded
- **Media**: `DELETE`/`PATCH` com verificação de ownership (`assertOwnership`, 403 sem dono) — fecha IDOR
- **PKCE Google**: cookie `secure` apenas em HTTPS (antes quebrava em `http://localhost`)
- **CSRF OAuth Google**: o `state` retornado agora é comparado com o cookie emitido no início do fluxo
- **Provider pinning**: chave de sessão convertida para UUID (antes md5-hex era rejeitado pela coluna `uuid` e nunca persistia)
- **Plugins/Artifacts** persistidos no Supabase com RLS por `auth.uid()` (antes: localStorage / estado local)

### 🖥️ Terminal & UI
- Terminal xterm.js com containers isolados por aba (sem empilhar divs) e cwd persistente
- `MobileAgent`: `wsUrl` editável agora chega ao hook `useMobileAgent({ wsUrl })`
- `VersionBadge`: link web relativo ao origin (sem URL hardcoded)
- `skill-catalog`: removido caractere CJK na descrição pt-BR
- `settings`: erros propagados (antes o POST sempre retornava `{ ok: true }`)

### 🧩 Artefatos
- `generatePPTXAdvanced` grava binário via `writeFileBuffer` (antes `buf.toString('binary')` por utf8 corrompia o arquivo)

### 🔧 Infra & Correções
- `9Router` resiliente: combos padrão/fallback (`kr/glm-5`, `kr/claude-sonnet-4.5`, `gemini/gemini-3.6-flash`) + parser de resposta JSON **e** SSE
- Health check `GET /api/health/router` (testa local + túnel em todos os combos)
- Loader de `.env` multi-camada (raiz do monorepo → app), compatível com Vercel
- Persistência do chat end-to-end: trigger `handle_new_user` (auth.users → users) resolve FK `sessions` (23503)
- Build de produção no Node 22+/24: `hashFunction: sha256` (md4 removido do Webpack)
- `@11/ia` e `@11/cli` com `dist/index.js` funcional + cópia de assets não-TS no build
- **Versões reconciliadas**: todos os `package.json` + `version.json` agora em `0.3.0-alpha`

### 🗃️ Supabase
- Migration `20240924_artifacts_plugins.sql`: tabelas `artifacts` e `plugins` (RLS multi-tenant)
- Migration `20240923_users_sync.sql`: trigger `handle_new_user` (auth.users → users)

---

## v0.2.0-alpha — 2026-09-15

### 🎙️ Chat & Voz
- Live chat por voz: Web Speech API (pt‑BR) em navegadores + fallback ElevenLabs via `/api/stt`
- Transcrição real enviada de volta ao input antes do envio
- Anexos: arquivos de texto, imagens com thumbnail e screenshot da tela

### 🧠 Memória
- Injeção de memórias relevantes do usuário como contexto no `/api/chat`
- Salvamento compacto de conversas na tabela `memories` (Supabase)
- Painel de memórias nas configurações: listar, remover, carregar

### 💬 Eleven Code
- Editor multi‑arquivo com execução JS/TS/HTML/CSS no navegador
- Console colorido por tipo, preview HTML/CSS em iframe sandboxed
- API `/api/code` com sessões, aprovação, sanitização, timeout e rate limit

### 📊 Conectores
- Painel Connectors com OAuth real (Google, Slack, GitHub, Notion)
- Teste de conexão por provedor com dados reais (`/api/connectors/test`)

### 🖼️ Mídia
- Upload de imagem/vídeo com análise de IA (9Router/Gemini) via `/api/media`
- Análise automática com tags e anotações (OCR/descrição)

### 🖥️ Agente de PC (desktop)
- PC Agent: servidor HTTP + WebSocket (JWT), sessões, aprovação e execução com streaming
- Router9 corrigido para API real do `@inferencesh/sdk`, com SQLite de logs

### 📱 Agente Mobile
- Bridge Capacitor + hook `useMobileAgent` para comunicação em tempo real (WSS)
- Criação, aprovação e cancelamento de sessões remotas

### 🔧 Infra & Correções
- Build, lint e typecheck limpos em web/desktop/mobile
- Correção de erros pré‑existentes (PKCE, alias `@/*`, `ui/button`, `no-case-declarations`, `supabaseKey`)
- `.env.example` com todas as variáveis de ambiente documentadas

---

## v0.1.0-alpha — 2026-09-15

### 🌌 Visual
- Galáxia espiral animada estilo GPT‑Astra com 24k+ estrelas, glow central e estrelas individuais (shader custom twinkle + espícula)
- Layout mobile‑first com drawer de conversas (estilo Claude/GPT)
- Login/Cadastro minimalista estilo ChatGPT (fundo escuro, card limpo)
- Ícone favicon SVG (galáxia) usado em web, desktop e mobile
- Remoção completa de bordas/linhas brancas — visual sólido e clean

### 💬 Chat
- Chat estilo GPT/Claude com sidebar de conversas (desktop) ou drawer (mobile)
- Sugestões rápidas, input fixo no rodapé, botões de ação por mensagem
- Persistência de sessões no Supabase (sessions + messages)

### 🔐 Auth
- Cadastro/login por e-mail + senha (Supabase Auth, autoconfirm)
- Multi‑tenant: qualquer usuário cria conta; dados isolados por RLS

### 🛡️ Segurança
- Bridge: operações nomeadas (list-files, read-file, run-build) — sem shell arbitrário
- Rate limiting no endpoint de operações remotas
- Audit log append‑only (bridge_audit_log) com RLS admin‑only
- Whitelist de diretórios para operações de arquivo

### 📡 Infra
- Cloudflare Tunnel configurado para cross‑device (PC ⇄ Celular)
- ModelGateway multi‑provedor (9Router → Gemini → fallback local)
- Sessões de chat com histórico vetorial no Supabase
- Keep‑alive automático do banco (GitHub Actions a cada 3 dias)
- Deploy via Vercel (pipeline CI com lint → test → build)

### 📱 App
- Mobile: Capacitor + WebView → OTA via Vercel (sem reinstalar APK)
- Desktop: Tauri 2 + WebView → OTA via Vercel (sem reinstalar exe)
- Ícones: galáxia SVG regenerados para Tauri (icns/ico/png) e Android (mipmaps)

### 🔧 Backend
- API NestJS com endpoints: /health, /keep-alive, /api/chat, /api/ops/*
- Bridge de operações seguras (list-files, read-file, write-file, run-build, run-command)
- Deploy broker com tokens de curta duração e circuit breaker
- Sessões de chat persistidas (sessions + messages table)

### 📊 Supabase
- Migration: users, personas, messages, embeddings (pgvector), products, agent_states, access_rules
- Migration: sessions + messages.session_id + provider
- Migration: deploy_requests, deploy_tokens, deploy_history
- Migration: model_sessions, model_usage
- Migration: bridge_audit_log
- RPC select_one para keep-alive
- RLS multi‑tenant em todas as tabelas
