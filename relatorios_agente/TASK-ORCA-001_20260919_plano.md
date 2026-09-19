# 📋 PLANO DE EXECUÇÃO - TAREFA TASK-ORCA-001

Status inicial: 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)

## Objetivo Geral

Fazer relatório + testes completos do projeto 11 e transformar a aba **Eleven Code** (`CodePanel.tsx`) para funcionar de forma equivalente ao **Orca** (stablyai/orca, MIT, clonado em `C:\Users\Administrator\Documents\orca`).

## Metas Esperadas

- [ ] Rodar `pnpm lint` → `pnpm test` → `pnpm build` e registrar cada resultado
- [ ] Gerar relatório executivo do projeto completo
- [ ] Mapear features do Orca portáveis para a aba Eleven Code no contexto Next.js
- [ ] Implementar mudanças na aba Eleven Code (editor, terminal, agentes)
- [ ] Relatório pós-alteração + version bump + CHANGELOG

## Roteiro

| O que fazer          | Como fazer                                          | Arquivos afetados                                                          |
| -------------------- | --------------------------------------------------- | -------------------------------------------------------------------------- |
| Testes de rotina     | pnpm lint → test → build (root)                     | —                                                                          |
| Audit do Orca        | Explorar `src/renderer` (editor, terminal, agentes) | — (leitura)                                                                |
| Redesign Eleven Code | Portar conceitos Orca p/ CodePanel/ElevenCoder      | `apps/web/src/components/CodePanel.tsx`, `ElevenCoder.tsx`, `AppShell.tsx` |
| Pós-relatório        | Rodapé com Status Final                             | `relatorios_agente/TASK-ORCA-001_20260919_plano.md`                        |

## ✅ RESULTADO DOS TESTES COMPLETOS (projeto 11)

- **pnpm lint**: PASS — 0 erros; 39 warnings (17 ia, 16 web, 4 desktop, 2 outros). Nada bloqueante.
- **pnpm test**: PASS — 385 testes, 0 falhas (`shared` 1/1, `ia` 13 suites/254, `web` 16 suites/130).
- **pnpm build**: PASS — `✓ Compiled successfully` (shared → ia → web). Apenas warnings já conhecidos.

> ⚠️ Warning menor: teste `job-queue` força exit de worker ("force exited") — vazamento de timer, não falha.

## 🔄 Diário de Execução em Tempo Real

> 🔄 INÍCIO [00:00:00] — Rebanho: clone do orca concluído (`C:\Users\Administrator\Documents\orca`, 28.201 arquivos). Aba Eleven Code identificada: `CodePanel.tsx` (editor iframe sandbox) + `ElevenCoder.tsx` (terminal xterm.js). Orca = Electron ADE (node-pty, worktrees git, Monaco, terminal WebGL, agentes paralelos).
>
> 🔄 TESTES [00:05:00] — lint/test/build 100% verde. Orca mapeado: `@monaco-editor/react` + xterm.js + adapter de agentes. Infra do 11 já tem `/api/code` (sessões de comando com aprovação) e `/api/terminal/exec` (REST+SSE) + `terminal-validate.ts`.

## 🏗️ RELATÓRIO GERAL DO PROJETO 11

- Monorepo pnpm 8 workspaces: `apps/{web,api,desktop,mobile}` + `packages/{shared,ia,cli}`.
- Web = Next.js App Router, 30+ rotas `/api/*`; `packages/ia` = núcleo de IA (router, safety, agent).
- Infra de código já presente: `/api/code/*` (execução de comandos com sanitização + aprovação), `/api/terminal/exec` (SSE), `terminal-validate.ts`.
- Estado atual das abas: **Eleven Code** = playground (textarea cru + iframe sandbox); **Eleven Coder** = terminal ANSI próprio (xterm).
- Gap vs Orca: editor Monaco (highlights, inteligente), terminal integrado à aba de código, workbench split.

## 🏁 Relatório Pós-Alteração (Status Final)

> 🟢 **CONCLUÍDO COM SUCESSO**

### Alterações executadas

- [x] Clone completo `stablyai/orca` (MIT) em `C:\Users\Administrator\Documents\orca`
- [x] Deps do Orca instaladas no web: `monaco-editor@^0.55.1`, `@monaco-editor/react@^4.7.0`, `vscode-textmate@^9.3.2`, `vscode-oniguruma@^2.0.1`, `@xterm/addon-search@0.16.0`
- [x] `apps/web/src/lib/monaco-setup.ts` — novo, portado do Orca `monaco-setup.ts` (workers JSON/CSS/HTML/TS + linguagens Vue/Svelte/Astro/Nim/JSONL/shell)
- [x] `apps/web/src/lib/monaco-languages/*` — 10 arquivos copiados do Orca (register-vue/svelte/astro/nim/jsonl/shell + textmate infra + grammar nim)
- [x] `apps/web/src/lib/monaco-find-options.ts` — novo, copiado do Orca
- [x] `apps/web/src/components/CodePanel.tsx` — reescrito: textarea → **Monaco Editor** com options do Orca (minimap off, automaticLayout, smoothScrolling, find seed selection, maxTokenizationLineLength 20k)
- [x] `apps/web/src/app/layout.tsx` — import css global do Monaco
- [x] Teste: lint web 0 erros; 130/130 testes web; build root ✓ Compiled (EXITCODE=0); `onig.wasm` emitido em `.next/static` (462KB)
- [x] Bump `2.10.7-alpha` em todos workspaces + CHANGELOG.md

### Ocorrências resolvidas durante a execução

> 🚨 **PROBLEMA [15:14]** — Build falhou: `Can't resolve './textmate-grammars/nim.tmLanguage.json'` e `Module parse failed` no `onig.wasm?url` (Next webpack não trata `?url` de node_modules).
> ✅ Resolvido: copiada pasta `textmate-grammars/` (grammar nim + LICENSE) do Orca; `textmate-token-provider.ts` trocado para `new URL('vscode-oniguruma/release/onig.wasm', import.meta.url)` (mesmo padrão dos workers).

### Notas / próximos passos sugeridos

- `@xterm/addon-search` instalado e pronto p/ integrar busca no Eleven Coder (feature do Orca) — pendente por escopo
- Workbench split editor+terminal na mesma aba (core visual do Orca) — possível próximo passo

---

## ➕ ADENDO — Rodada 2: Terminal integrado + busca (v2.10.9-alpha)

- Novo `apps/web/src/components/TerminalPane.tsx`: terminal xterm reutilizável (REST+SSE) com busca Ctrl+F via `@xterm/addon-search`
- `CodePanel.tsx`: split editor+terminal estilo Orca (botão "Terminal" / `Ctrl+``), painel inferior 176px
- `ElevenCoder.tsx`: busca no buffer (Ctrl+F, prev/next, wrap)
- Lint 0 erros · testes web 130/130 · build ✓ · commit `82bd2de` pushado

## ➕ ADENDO — Rodada 3: Fix deploy Vercel (v2.10.11-alpha)

- 🚨 **BUG EM PRODUÇÃO**: abas novas não apareciam no site — deploys automáticos do GitHub falhavam.
- **Causa**: `vercel.json` tinha `rootDirectory: "apps/web"` — propriedade inválida no schema atual do Vercel → deploy automático com status **Error** (produção estagnada no build antigo).
- ✅ **Fix**: removido `rootDirectory` do `vercel.json` (já configurado no project settings do dashboard). Deploy manual → **Ready** em `11-app-sage.vercel.app`; push `24688be` → deploy automático voltou a dar **Ready**.
- Commit `24688be` pushado.

## ➕ ADENDO — Rodada 4: UX Eleven Code (v2.10.12-alpha)

- 🚨 **BUG**: aba "Code & Terminal" abria em modo Terminal por padrão — usuário via terminal, parecia "nada alterado".
- ✅ **Fix**: `CodeWorkspace.tsx` default `mode: 'editor'` (Monaco aparece direto); aba renomeada para **"Eleven Code"** no `Sidebar.tsx`.
- Lint 0 erros · build ✓ · commit `a533ebc` pushado (deploy automático em andamento).
