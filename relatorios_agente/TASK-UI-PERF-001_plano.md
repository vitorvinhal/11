# 📋 PLANO DE EXECUÇÃO — TASK-UI-PERF-001 (Fase 2/2)

**Status inicial:** 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)
**Branch:** `ag4/auth-ui` (base `origin/main` @ 5a0b621)
**Agente:** AGENTE 4 (UNIFY-AUTH & FRONTEND)
**Pré-requisito:** Fase 1 AUTH-GAPS-002 concluída e commitada (`5dc853e`).

## Objetivo Geral

Auditoria de UI/UX + performance e redesign da interface "11" com benchmark
ChatGPT/Claude, sem ZERO degradação visual em hardware capaz (regra AGENTS.md
seção 7): qualquer redução de partículas/shader/blur SÓ como fallback dinâmico
em runtime.

## FPS BASELINE (ANTES da alteração)

- **Método:** Playwright (Chromium headless) → `page.evaluate` amostrando
  `requestAnimationFrame` por 3000 ms na home (`http://localhost:3005`),
  calculando FPS médio (frames / segundos decorridos). Medição repetida 2×,
  adotando a mediana. Ambiente: dev server Next (`pnpm exec next dev -p 3005`),
  viewport Desktop Chrome 1280×720, sem sessão (landing com AstroSphere
  renderizando). Script: `apps/web/scripts/fps-measure.mjs`.
- **FPS_BASELINE (medido 2026-09-23, antes de qualquer alteração):** **23.2**
  (amostras: 23.0 / 23.2). Nota: headless + WebGL via SwiftShader é
  CPU-bound; o valor serve como baseline relativo do MESMO método antes/depois.

## Metas Esperadas

- [ ] FPS medido ANTES (baseline) no relatório prévio
- [ ] AstroSphere: pausa em `visibilitychange` (aba em background) e quando
      overlay/menu cobrir 100% da viewport; retomada instantânea sem reset/pop
- [ ] Blur isolado: `contain: layout paint` + `will-change: backdrop-filter`
      nas camadas glass (~6 componentes) — sem trocar blur real por overlay sólido
- [ ] Pollings 5s de `useDeviceAgent`/`MobileDevicePanel`/`MobileAgent`
      unificados em um Context/Hook compartilhado (intervalo permanece 5s)
- [ ] `layout.tsx`: 4 camadas de fundo consolidadas competindo menos com texto
      (AstroSphere mantida)
- [ ] Tokens glass coerentes (glass / glass-card / glass-chip) no CSS
- [ ] `AppShell`: code-splitting dos ~14 painéis via `LazyLoad.tsx` existente
- [ ] Sidebar retrátil + ChatPanel com hierarquia/tipografia/markdown no padrão
      ChatGPT/Claude; abas/funcionalidades preservadas
- [ ] Fallback dinâmico de hardware (se redução for necessária): somente via
      `navigator.hardwareConcurrency` / `deviceMemory` / medição FPS inicial
- [ ] Gate `pnpm -r lint && pnpm -r test && pnpm -r build` verdes
- [ ] FPS DEPOIS medido (mesmo método) no relatório pós
- [ ] Entrada draft no CHANGELOG.md sob 2.17.0-alpha / Unreleased (SEM bump)
- [ ] Commit separado + relatório pós com BRAIN_SYNC único cobrindo as 2 fases

## Roteiro

1. **Baseline FPS** — subir dev server, rodar script Playwright de medição,
   registrar no corpo deste arquivo.
2. **AstroSphere** — hook `useRenderPaused` em `AstroSphere.tsx`:
   `document.visibilitychange` → pausar `Canvas` (remount com mesma key NÃO;
   usar `frameloop="never"`/`demand` ou flag em `useFrame` com `pause`);
   overlay full-viewport (menu/modal) → pausar via MutationObserver/estado
   global leve; retomar sem `setResetKey`.
3. **Blur** — em `globals.css`: `.glass`, `.glass-card`, `.glass-chip`,
   `.glassmorph`, `.glassmorph-strong` + wrappers de painel com
   `contain: layout paint; will-change: backdrop-filter`.
4. **Polling unificado** — novo `apps/web/src/lib/device-poll-context.tsx`
   (Context + `useInterval` 5000 ms compartilhado); consumir em
   `MobileDevicePanel` e `MobileAgent`; `useDeviceAgent` passa a usar o
   mesmo scheduler para o poll de jobs (sem mudar 2.5s/5s por endpoint —
   apenas eliminar timers duplicados do history 5s).
5. **layout.tsx** — agrupar `aurora-bg`/`vignette`/`noise-overlay` em um único
   container `bg-stack` com z-index otimizado; AstroSphere sobreposta com
   opacidade levemente reduzida só na camada de texto (NÃO na partícula).
6. **Tokens glass** — CSS vars `--glass-blur-*`, `--glass-bg-*`, bordas e
   raios; as 3 variantes passam a referenciar vars.
7. **AppShell** — trocar imports estáticos dos painéis por `lazyLoad(...)`
   de `LazyLoad.tsx`; só o painel ativo entra no bundle principal.
8. **Sidebar/ChatPanel** — sidebar retrátil já existe (collapsed 60px);
   refinar hierarquia (seções, active state, espaçamento ChatGPT/Claude);
   ChatPanel: max-w mensagens, tipografia 15px/1.6, blocos de código com
   header linguagem + copy, markdown leve (negrito/lista via parser simples
   já existente de fences) sem quebrar abas code/mobile-app.
9. **Gate + FPS depois + CHANGELOG draft + commit + relatório pós.**

## Arquivos Afetados (previsto)

- `apps/web/src/components/AstroSphere.tsx`
- `apps/web/src/styles/globals.css`
- `apps/web/src/app/layout.tsx`
- `apps/web/src/components/AppShell.tsx`
- `apps/web/src/components/Sidebar.tsx`
- `apps/web/src/components/ChatPanel.tsx`
- `apps/web/src/lib/useDeviceAgent.ts`
- `apps/web/src/lib/device-poll-context.tsx` (novo)
- `apps/web/src/components/MobileDevicePanel.tsx`
- `apps/web/src/components/MobileAgent.tsx`
- `CHANGELOG.md` (entrada draft, sem bump)
- `relatorios_agente/TASK-UI-PERF-001_{plano,pos}.md`

## 🔄 Diário de Execução em Tempo Real

> Aguardando execução.

<!-- BRAIN_SYNC_START -->

TASK_ID: AUTH-GAPS-002 + TASK-UI-PERF-001
PHASE: 2/2 (plano pré)
STATUS: PLANNED
<!-- BRAIN_SYNC_END -->
