# 📋 PLANO DE EXECUÇÃO - TAREFA REPLACE_CODER

🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)

## Objetivo geral

Substituir sistema atual "Eleven Coder" por única aba **Eleven Code** que incorpora todo repositório `stablyai/orca` como bundle único, removendo dependências legacy (Monaco, XTerm) e código associado.

## Metas esperadas

- [ ] Copiar código fonte Orca completo para `vendor/orca`.
- [ ] Criar bundle Vite para Orca (`scripts/build-orca-bundle.mjs`).
- [ ] Expor componente `<ElevenOrca />` que monta bundle em `<div id="orca-root"/>`.
- [ ] Atualizar `Sidebar` para exibir aba "Eleven Code" em desktop‑app e mobile‑app; ocultar "Eleven Coder".
- [ ] Remover arquivos/components relacionados a Eleven Coder, Monaco, Terminal.
- [ ] Ajustar `AppShell`/rotas para renderizar `<ElevenOrca />` quando `activeNav === "code"`.
- [ ] Atualizar `package.json` removendo deps `@monaco-editor/react`, `monaco-editor`, `@xterm/*`.
- [ ] Atualizar `vercel.json` buildCommand para incluir bundle Orca.
- [ ] Executar lint, test, build para garantir integridade.
- [ ] Atualizar `CHANGELOG.md` e version bump após sucesso.

## Roteiro passo‑a‑passo

1. **Vendor copy** – rodar script `scripts/copy-orca-vendor.mjs` que clona `stablyai/orca` dentro `vendor/orca`.
2. **Bundle build** – configurar `vite.eleven.config.ts` para bundle único, gerar `public/orca-inline.js`.
3. **Novo componente** – criar `apps/web/src/components/ElevenOrca.tsx` que carrega bundle via `<script src="/orca-inline.js"/>` e monta em div.
4. **Sidebar** – remover item `coder` da lista `allNavItems`; garantir visibilidade apenas para `code`.
5. **AppShell** – substituir renderização de `coder` por `<ElevenOrca />` quando `activeNav === "code"`.
6. **Remoções** – deletar arquivos: `CodePanel.tsx`, `CodeWorkspace.tsx`, `ElevenCoder.tsx`, `TerminalPane.tsx`, `TerminalPanel.tsx`, `monaco-setup.ts`, `monaco-languages/*`, script `build-monaco-workers.mjs`.
7. **Dependências** – remover entradas no `package.json` correspondentes; rodar `pnpm install`.
8. **Vercel** – ajustar `vercel.json` para usar novo script de build que inclui bundle.
9. **Testes** – rodar `pnpm lint`, `pnpm test`, `pnpm build`.
10. **Versionamento** – após sucesso, executar `pnpm version:patch`, atualizar `CHANGELOG.md` e commit.

## Arquivos afetados

- `apps/web/src/components/Sidebar.tsx`
- `apps/web/src/components/AppShell.tsx`
- `apps/web/src/components/ElevenOrca.tsx` (novo)
- `apps/web/package.json`
- `vercel.json`
- Vários arquivos dentro `apps/web/src/components/` relacionados a Coder/Monaco.
- `vendor/orca/` (novo).

## 🏁 Relatório Pós-Alteração (Status Final)

🟢 CONCLUÍDO COM SUCESSO

### Resumo das alterações

- [x] Bundle Orca já disponível em `apps/web/public/orca-inline/` (build completo do renderer web do Orca, entry ESM `orca.js` exportando `mountOrca`)
- [x] Novo componente `apps/web/src/components/ElevenOrca.tsx` — carrega CSS + bundle via `import(/* webpackIgnore */ url)` e monta em `<div>`; fallback de erro em tela
- [x] `Sidebar.tsx` — aba "Eleven Code" mantida (desktop-app, desktop-web, mobile-app); aba "Eleven Coder" removida; `"coder"` removido do tipo `NavTab`
- [x] `AppShell.tsx` — `activeNav === "code"` renderiza `<ElevenOrca />`; bloco `coder` removido
- [x] Removidos arquivos: `CodePanel.tsx`, `CodeWorkspace.tsx`, `ElevenCoder.tsx`, `TerminalPane.tsx`, `TerminalPanel.tsx`, `lib/monaco-setup.ts`, `lib/monaco-find-options.ts`, `lib/monaco-languages/*`, `app/coder/page.tsx`, `scripts/build-monaco-workers.mjs`
- [x] `package.json` — removidas deps `@monaco-editor/react`, `monaco-editor`, `@xterm/*`; `pnpm install` ok
- [x] `layout.tsx` — removido `import "monaco-editor/.../editor.main.css"`
- [x] `vercel.json` — removido `build-monaco-workers.mjs` do buildCommand
- [x] `.eslintrc.cjs` — `apps/web/public/orca-inline/**` no ignorePatterns
- [x] `SessionsPanel.tsx` — "Eleven Coder" → "Eleven Code"
- [x] Validações: `pnpm --filter @11/web lint` (0 erros) · `pnpm --filter @11/web test` (16 suites / 130 testes pass) · `pnpm --filter @11/web build` (23 rotas, compilação ok) · `@11/shared` + `@11/ia` build ok
- [x] Versionamento: `pnpm version:patch` → `2.10.16-alpha`; `CHANGELOG.md` atualizado

### Ocorrências resolvidas

- [x] ESM bundle não resolvia no webpack do Next — resolvido com URL runtime (`window.location.origin`) + `/* webpackIgnore */`
- [x] Aba "Eleven Code" removida junto com a "coder" no primeiro edit acidental — re-adicionada com plataformas corretas
