# Responda sempre em português do Brasil.

Todos os textos, mensagens e respostas da IA devem ser em pt‑BR.

## REGRA DE RESILIÊNCIA E RECUPERAÇÃO AUTOMÁTICA DE SESSÃO

### Criação de rastro em tempo real (`.task_state.md`)

- Objetivo Global: <descrição sucinta da tarefa ativa>
- Concluído: <lista de passos já executados>
- Em Andamento: <arquivo/função/módulo atual>
- Próximo Passo: <ação exata a ser executada>

### Micro‑checkpoints de Git

- Commit local a cada sub‑etapa concluída que não quebre o build.

### Protocolo de inicialização / recovery (toda nova sessão)

1. Ler `.task_state.md` (se existir).
2. Executar `git status` e `git diff`.
3. Executar `git log -n 3 --oneline`.
4. Apresentar resumo de 3 linhas ao usuário e pedir confirmação para prosseguir.

### Regra de recuperação de crash

- Antes de qualquer comando ou edição, manter `.task_state.md` atualizado com:
  - Objetivo Atual: <resumo>
  - Concluído: <lista>
  - Em Andamento: <arquivo/função>
  - Próximo Passo: <ação pendente>

---

# PROTOCOLO DE PLANEJAMENTO, AUDITORIA E SYSTEM PROMPT DO AGENTE

Protocolo oficial de referência: `docs/AGENTE.md`. System Prompt carregado: `agent/system_prompt.md`. Regras: `agent/rules.md`.

## Regra absoluta do fluxo de trabalho

Nenhuma linha de código ou arquivo de projeto pode ser alterada sem o ciclo abaixo (obrigatório para tarefas com ID, ex.: `TASK-123`):

```
[1. RECEBER ID DA TAREFA]
         ↓
[2. GERAR PLANO PRÉ-ALTERAÇÃO (.md)]  <-- Salvo em relatorios_agente/
         ↓
[3. EXECUTAR ALTERAÇÕES & REGISTRAR ERROS EM TEMPO REAL]
         ↓
[4. ATUALIZAR RELATÓRIO PÓS-ALTERAÇÃO (.md)]
```

## Ciclo de execução obrigatório

1. **PRÉ-ALTERAÇÃO (antes de codar):** criar `relatorios_agente/ID_[TASK_ID]_[TIMESTAMP]_plano.md` com Objetivo Geral, Metas Esperadas, Roteiro passo a passo e arquivos afetados. Só então editar código.
2. **EXECUÇÃO E LOG (em tempo real):** erros, exceptions e avisos devem ser registrados imediatamente no `.md` da tarefa.
3. **PÓS-ALTERAÇÃO (ao concluir):** atualizar rodapé do `.md` com Status Final (`🟢 CONCLUÍDO COM SUCESSO` / `🔴 FINALIZADO COM ERROS`) + resumo das alterações.

## Estrutura do relatório .md (`relatorios_agente/`)

- Estágio 1 — pré: `# 📋 PLANO DE EXECUÇÃO - TAREFA [ID]`, status inicial `🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)`, Objetivo, Metas `- [ ]`, Roteiro com O que fazer / Como fazer / Arquivos afetados.
- Estágio 2 — durante: `## 🔄 Diário de Execução em Tempo Real`, blocos `> 🚨 **PROBLEMA/ERRO DETECTADO [HH:MM:SS]**`.
- Estágio 3 — pós: `## 🏁 Relatório Pós-Alteração (Status Final)`, resumo das alterações `- [x] ...` e ocorrências resolvidas.

## Arquivos do protocolo

- `agent/system_prompt.md` — System Prompt oficial do agente (usar como instruções do sistema).
- `agent/rules.md` — regras de conduta e estrutura dos relatórios.

## Regra obrigatória de Versionamento e Changelog

Toda alteração de código que modifique funcionalidade, corrija bug ou adicione feature **deve** atualizar:

1. **Versão** — Bump no `package.json` raiz e em todos os workspaces (`apps/*`, `packages/*`) usando `pnpm version:patch`, `pnpm version:minor` ou `pnpm version:major`. A versão segue o padrão `v0.{MAJOR}.{MINOR}-{canal}` (alpha → rc → estável).
2. **CHANGELOG.md** — Adicionar entrada na raiz do projeto (`CHANGELOG.md`) com a versão, data e descrição das mudanças.
3. **`apps/web/public/version.json`** — Atualizar `version` e `buildTime` (feito automaticamente pelo script `scripts/version.js`).

**Fluxo obrigatório ao concluir tarefa:**

```
[pós-alteração]
  → rodar pnpm version:patch (ou minor/major conforme impacto)
  → adicionar entrada no CHANGELOG.md
  → commit incluindo: version bump + changelog + código alterado
```

**NUNCA** fazer commit de alterações funcionais sem bump de versão e atualização do CHANGELOG.

- `docs/AGENTE.md` — protocolo completo de referência (incluindo `agent/agente.py` de exemplo).
- `relatorios_agente/` — pasta onde os relatórios das tarefas são salvos.

---

# Notas técnicas do repo

## Monorepo e ferramentas

- pnpm 8.15.9 (PINADO em `packageManager`), workspaces `apps/*` + `packages/*`. Use `pnpm`, nunca npm/yarn. `.npmrc`: `shamefully-hoist=true`.
- Turvo `turbo.json`: `test` depende de `lint`, `build` depende de `test`. Build completo roda lint+tests de todo workspace.
- Husky `pre-commit` roda `pnpm lint-staged` → `eslint --fix` + `prettier --write` nos staged. Commit falha se um arquivo staged não passar.

## Ordem de build (importante)

- `@11/shared`, `@11/ia` e `@11/cli` têm `main: <dist>/index.js` — **`dist/` precisa existir antes de consumir**.
- `apps/web` declara `@11/shared` e `@11/ia` como `workspace:*`. O script `build` do web só builda `@11/shared`; **`@11/ia` precisa build manual**.
- Root `pnpm build` resolve tudo na ordem certa: shared → ia → web. Para build isolado do web:
  `pnpm --filter @11/shared build; pnpm --filter @11/ia build; pnpm --filter @11/web build`
- `@11/ia` e `@11/cli` rodam `node ../../scripts/copy-assets.js src dist` no build (copia assets não‑TS). Não apague `dist` inteiro manualmente se tiver assets customizados.

## Comandos

- Verificação de rotina (nesta ordem): `pnpm lint` → `pnpm test` → `pnpm build`.
- **`pnpm typecheck` está quebrado**: root chama `pnpm -r typecheck`, mas NENHUM workspace define esse script → falha. Use `pnpm build` ou `tsc -p <pkg>/tsconfig.json` como substitute.
- Testes = jest multi-projeto (`jest.config.js`): `apps/web`, `packages/ia`, `packages/shared`. `pnpm --filter @11/web test` roda só o web. api/cli/desktop/mobile não têm testes.
- Dev servers: `pnpm dev:web` (porta 3000), `pnpm dev:api` (NestJS legacy, `dist/main.js` precisa build antes), `pnpm dev:mobile` (Expo), `pnpm dev:desktop` (Tauri/Vite).
- **Router unificado do desktop**: `apps/desktop/src/server.ts` sobe os dois serviços — Router9 (`ROUTER9_PORT`, default 3002) e PC Agent (`PC_AGENT_PORT`, default 3001). Para rodar só como servidor: `pnpm --filter @11/desktop router`.
- Smoke test: `node scripts/smoke-test.mjs [baseURL]` (default `http://localhost:3099`). Testa endpoints críticos incl. `/api/health/router`, terminal auth, PWA manifest.

## Env e runtime gotchas

- `.env.example` (raiz) documenta TODAS as variáveis. `apps/web` usa `.env.local` (gitignored, secrets reais). Desktop lê env do processo/`.env` em `src-tauri`.
- 9Router local default `ROUTER9_ENDPOINT=http://localhost:20128`, modelo default `ROUTER9_MODEL=Arcenal` com `ROUTER9_FALLBACK_MODELS` (Arcenal, kr/glm-5, kr/claude-sonnet-4.5, gemini/gemini-3.6-flash). Sem o 9Router rodando, `/api/chat` e `/api/health/router` falham.
- `apps/web/src/lib/server-env.ts` + `server-supabase.ts`: env de servidor é validado no boot. Vars obrigatórias ausentes derrubam requests específicos (ex.: Supabase sem anon key).
- `next.config.js`: headers de segurança + CSP com `'unsafe-eval' 'unsafe-inline'` em script-src (exigido pelo runtime — não remover sem testar). `officegen`/`readable-stream` são externalizados no server bundle (incompatíveis com webpack).

## Estrutura

- `apps/web/src/app/api/*` = todas as rotas Next (30+, ver `.task_state.md`/docs para contrato). Rotas de plataforma: `/api/pc-agent`, `/api/mobile-agent`.
- `apps/web/src/lib/platform.ts` + `platform-guard.ts`: detecção de plataforma (desktop/mobile/web) e guards de UI.
- `packages/ia` = core de IA (router, safety, agent, plugins/skills). `packages/api` = NestJS **legacy**, mantido por compat.
- `infra/supabase` = migrations; `scripts/deploy-vps.sh|ps1` = deploy VPS (Oracle Cloud A1 ARM).
- **Sem CI configurado**: `.github/` está vazio (README menciona GitHub Actions → Vercel, mas não existe workflow). Deploy é manual via Vercel + VPS.
- Skills da IA 11 moram em `skills/` (ex.: `responder-em-portugues`), não em `.claude/`. Responder sempre pt-BR com usuário; códigos, logs, commits e comandos podem ficar em inglês.
