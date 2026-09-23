# 📋 PLANO DE EXECUÇÃO - TAREFA MOBILE-UNIFY-001

🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)

## Objetivo geral

Unificar URL web no mobile, corrigir device‑bridge, melhorar shell nativo, adicionar plugins Tauri e registrar ServiceWorker para app desktop offline.

## Metas esperadas

- Fonte única de URL (ex.: https://candlefish.vercel.app) em todos os arquivos.
- device‑bridge.ts carrega após runtime @capacitor/core.
- Splash screen, status bar e back‑gesture configurados.
- Cargo.toml inclui tauri‑plugin‑tray, notification, autostart, single‑instance, updater.
- public/sw.js criado e registrado em App.tsx.
- Versão bump e CHANGELOG atualizados.

## Roteiro passo a passo

1. **Criar pré‑plano** (este arquivo).
2. **Unificar URL**:
   - Editar `apps/mobile/capacitor.config.json` → usar `https://candlefish.vercel.app`.
   - Editar `apps/mobile/capacitor.config.ts` → remover fallback env, fixar URL.
   - Editar `apps/desktop/src/ui/App.tsx` → usar mesma URL.
3. **Corrigir device‑bridge.ts**:
   - Garantir import `import '@capacitor/core';` antes de usar `window.Capacitor.Plugins` ou mover código para `window.addEventListener('load', ...)`.
4. **Shell nativo**:
   - Configurar splash screen e status bar via Tauri API (`tauri-plugin-splashscreen`).
   - Implementar back‑gesture listener (`tauri-plugin-window`).
5. **Plugins Tauri**:
   - Atualizar `Cargo.toml` adicionando dependências:
     `tauri-plugin-tray`, `tauri-plugin-notification`, `tauri-plugin-autostart`, `tauri-plugin-single-instance`, `tauri-plugin-updater`.
6. **ServiceWorker**:
   - Criar `public/sw.js` com cache básico e fallback.
   - Registrar no `App.tsx` usando `navigator.serviceWorker.register('/sw.js')`.
7. **Versão & CHANGELOG**:
   - Rodar `pnpm version:patch`.
   - Atualizar `CHANGELOG.md` com entrada v0.x.x‑alpha (data, descrição).
8. **Validação**:
   - `pnpm lint && pnpm test && pnpm build`.
   - Testar offline desktop.
9. **Commit**:
   - Commit todas mudanças com mensagem `[mobile] unifica URL, bridge, Tauri plugins, SW`.
   - Push.

## Próximo passo

Implementar passo 2: unificar URL nos arquivos de configuração.
