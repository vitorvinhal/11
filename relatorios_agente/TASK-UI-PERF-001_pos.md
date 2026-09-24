# 📋 RELATÓRIO FASE 2 — TASK-UI-PERF-001 — 2026-09-23

**Status final:** 🟢 CONCLUÍDO COM SUCESSO
**Branch:** `ag4/auth-ui` (base `origin/main` @ 5a0b621)
**Agente:** AGENTE 4 (UNIFY-AUTH & FRONTEND)
**Cobertura:** TASK AUTH-GAPS-002 (Fase 1, commit `5dc853e`) + TASK-UI-PERF-001 (Fase 2, este commit) — BRAIN_SYNC único ao final.

## Objetivo Geral

Auditoria de UI/UX + performance e redesign da interface "11" com benchmark
ChatGPT/Claude, sob a regra de **ZERO degradação visual** (AGENTS.md seção 7):
nenhuma redução estática de partículas/shader/backdrop-filter — tudo que mexe
com render 3D/blur tem comportamento idêntico em hardware capaz.

## Metas Esperadas

- [x] FPS medido ANTES (baseline) — **23.2** (registrado no plano prévio)
- [x] AstroSphere: pausa em aba oculta + overlay full-viewport; retomada **sem reset de clock**
- [x] Blur isolado: tokens `--glass-*` + `contain: layout paint` + `will-change` — blur real preservado
- [x] Pollings 5s unificados em `DeviceJobsProvider` (1 timer ref-counted, intervalo idêntico 5000ms)
- [x] `layout.tsx`: camadas de fundo consolidadas em `.bg-stack` (AstroSphere mantida)
- [x] Tokens glass coerentes (`.glass` / `.glass-card` / `.glass-chip` / `.glassmorph*`)
- [x] `AppShell`: code-split dos 13 painéis secundários via `LazyLoad.tsx`
- [x] Sidebar retrátil com navegação preservada + ChatPanel com MarkdownLite (hierarquia/tipografia ChatGPT/Claude); abas/funcionalidades preservadas
- [x] Fallback dinâmico de hardware: **não foi necessário** (nenhuma redução aplicada — meta cumprida por não degradar)
- [x] Gate `pnpm lint && pnpm test && pnpm build` verdes
- [x] FPS DEPOIS medido (mesmo método) — **25.9**
- [x] Entrada draft `## Unreleased` no CHANGELOG.md (SEM bump)
- [x] Commit separado da Fase 1 + relatório pós com BRAIN_SYNC único

## FPS — ANTES × DEPOIS

| Momento | Mediana FPS | Amostras      | Método                                                                                                                    |
| ------- | ----------- | ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ANTES   | **23.2**    | 23.0 / 23.2   | Playwright headless, rAF 3000ms ×2, mediana, 1280×720, landing sem sessão (`apps/web/scripts/fps-measure.mjs`, dev :3005) |
| DEPOIS  | **25.9**    | 25.43 / 25.92 | idêntico (mesmo script, mesmo dev :3005, mesma viewport)                                                                  |

**Delta: +2.7 FPS (+11,6%).** Nota: ambiente headless com SwiftShader é
CPU-bound; o valor é comparável apenas dentro do mesmo método antes/depois.
Ganhos qualitativos não capturados por esse número: render pausado com
overlays/aba oculta (CPU/GPU ~0 nesses estados) e −2/3 das chamadas a
`/api/devices/jobs`.

## O que foi alterado (por tema)

### 1. AstroSphere — pausa sem reset (`AstroSphere.tsx`)

- `isViewportCovered()`: seletor `dialog[open], [role=dialog/menu], [aria-modal], [data-fullscreen-cover], .fixed.inset-0`, excluindo o próprio root da cena; gatilhos `visibilitychange` + MutationObserver (debounce 120ms) + sweep 500ms.
- `frameloop={paused ? 'never' : 'always'}`; captura de `clock.elapsedTime` em `frozenRef` **antes** do pause (guard `restorePendingRef`) e restauração no effect do pai após o Canvas aplicar o frameloop (o `setFrameloop` do R3F v8 zera o clock — conhecido e contornado); retomada exige `delta < 0.05` para não aplicar um salto gigante.
- Listeners de `webglcontextlost/restored` reanexados via effect `[resetKey]`; import morto `WebGLRenderer` removido.

### 2. Blur/glass + fundo (`globals.css`, `layout.tsx`)

- Novos tokens `--glass-blur-*`, `--glass-sat-*`, `--glass-bg-*`, `--glass-border*`, `--glass-radius`, `--glass-space` (com `--glass-bg-base: var(--surface)` p/ light mode).
- `.glass`/`.glass-card`/`.glass-chip`/`.glassmorph*` convertidos para tokens + `contain: layout paint` + `will-change: backdrop-filter` — mesmos valores de blur de antes.
- `layout.tsx`: aurora → vignette → AstroSphere → noise dentro de `<div className="bg-stack" aria-hidden>` (as duas primeiras migraram `fixed` → `absolute`).

### 3. Polling único (`device-poll-context.tsx` novo; `useDeviceAgent`, `MobileDevicePanel`, `MobileAgent`)

- `DeviceJobsProvider`: timer único 5000ms ref-counted (roda só com ≥1 assinante), snapshot via Context, `refreshNow()` compartilhado.
- `useDeviceAgent`: `useOptionalDeviceJobs()` deriva `pendingApprovals` do feed e o poll de 2.5s de job ativo **não** duplica fetch de aprovações quando o provider está ativo (mantido no modo legado sem provider). Identidade estabilizada via `sharedRef` (o objeto de contexto muda a cada snapshot — sem isso o timer de 2.5s reiniciaria a cada 5s).
- Painéis: `setInterval(5000)` locais removidos; botões "Atualizar" → `refreshNow()` único.
- `DeviceJobsProvider` montado no `AppShell`.

### 4. AppShell — code-split

- 13 painéis secundários via `lazyLoad` (named exports mapeados para `default`; `ConnectorsPanel`/`ElevenOrca` default direto). Sidebar/ChatPanel/ProfileDialog permanecem no bundle inicial.
- `LazyLoad.tsx`: tipagem do factory relaxada para `ComponentType<any>` (componentes com props obrigatórias, ex. `ConnectorsPanel({userId})`).

### 5. Sidebar + ChatPanel (benchmark ChatGPT/Claude)

- **Sidebar:** rail retrátil agora exibe os ícones das abas + Settings (antes colapsar perdia a navegação toda); ativo com barra de destaque `before:` na cor primária; conversa ativa com `bg-white/[0.07]`.
- **ChatPanel:** mensagens do usuário em balão (`rounded-2xl bg-white/[0.05]`); render via `MarkdownLite`; botão Copiar real (feedback ✓ 1.6s); ThumbsUp/Down mantidos visuais.
- **`MarkdownLite.tsx` (novo):** parser React-only (zero `dangerouslySetInnerHTML`) — fences ``` com header lang + **Copiar** + Abrir no Code, headings, listas ol/ul, blockquote, `**bold**`, `*italic*`, `` `code` ``, `[link](url)` restrito a http/https/relativo (bloqueia `javascript:`); quebras de linha preservadas (`whitespace-pre-line`).

## FPS DEPOIS / Gates

```
pnpm lint → 0 errors (17 warnings preexistentes no web + 18 no ia — nenhum novo)
pnpm test → 415 testes / 31 suites (web: 17 suites, 172 testes) — PASS
pnpm build → shared + ia + web OK (route table next build) — PASS
FPS antes 23.2 → FPS depois 25.9 (mesmo método)
```

## 🔄 Diário de Execução em Tempo Real

> ✅ **Gates** — lint 0 errors; test 172/172 web verdes.
>
> 🚨 **PROBLEMA/ERRO DETECTADO** — `next build` crachou com
> `WasmHash._updateWithBuffer: Cannot read properties of undefined (reading
'length')` (next 13.5.11/webpack). **Causa:** dev server (:3005) rodando
> sobre o mesmo `.next` durante o build (corrupção de cache).
> **Resolução:** encerrar só o pid do :3005 (o :3000 de outro projeto foi
> preservado), `Remove-Item apps/web/.next`, rebuild → verde.
>
> 🚨 **PROBLEMA/ERRO DETECTADO** — type error `AstroSphere.tsx:43`:
> `Type 'NodeListOf<Element>' can only be iterated … '--downlevelIteration'`
> (target ES5). **Resolução:** `for…of` → `nodes.forEach` com flag `covered`.
> (O `pnpm typecheck` da raiz continua não existindo — o gate de tipo real é
> o `next build`, que pegou o erro.)
>
> ⚠️ **DECISÃO** — `refreshPending`/poll do `useDeviceAgent` não podem depender
> do objeto de contexto `sharedJobs` (identidade muda a cada snapshot de 5s →
> reiniciaria o intervalo de 2.5s a cada tick). **Resolução:** `sharedRef`
> estável lido no momento do uso; dependências de efeito sem o objeto.
>
> ✅ **FPS DEPOIS** — 25.9 (25.43/25.92) vs baseline 23.2 → **+2.7 FPS**.

## 🏁 Relatório Pós-Alteração (Status Final)

### Resumo das alterações

- [x] `AstroSphere.tsx` — pausa/retomada sem reset + overlay/visibility observers
- [x] `globals.css` — tokens glass + contain/will-change + `.bg-stack`
- [x] `layout.tsx` — 4 camadas consolidadas em `.bg-stack`
- [x] `device-poll-context.tsx` (novo) — timer 5s único ref-counted
- [x] `useDeviceAgent.ts` — feed compartilhado + `sharedRef` estável + sem fetch duplicado
- [x] `MobileDevicePanel.tsx` / `MobileAgent.tsx` — timers locais removidos → `refreshNow()`
- [x] `AppShell.tsx` — `DeviceJobsProvider` + code-split de 13 painéis
- [x] `LazyLoad.tsx` — tipagem de factory com props
- [x] `Sidebar.tsx` — rail retrátil navegável + active states
- [x] `ChatPanel.tsx` — MarkdownLite + balão usuário + Copiar funcional
- [x] `MarkdownLite.tsx` (novo) — markdown React-only com copy
- [x] `fps-measure.mjs` (novo) — instrumento de medição commitado
- [x] `CHANGELOG.md` — entrada `## Unreleased` (draft, sem bump)
- [x] Gates verdes + FPS 23.2→25.9

### Ocorrências resolvidas

- `WasmHash` crash no build (cache `.next` × dev server) — resolvido (limpeza).
- Type error `NodeListOf` iteração ES5 — resolvido (`forEach`).
- Risco de restart do poll de 2.5s por identidade de contexto — evitado (`sharedRef`).
- Nenhum item da seção "REGRAS DE SEGURANÇA" foi tocado; nenhum endpoint novo de rede; nenhum segredo/URL arbitrária introduzido.

### NOT FOUND / pendências

- Nenhum blocker. PR/push **não** realizados (proibição de agente — Brain faz FASE D).

<!-- BRAIN_SYNC_START -->

TASK_ID: AUTH-GAPS-002 + TASK-UI-PERF-001
PHASE: 2/2
STATUS: SUCCESS
<!-- BRAIN_SYNC_END -->
