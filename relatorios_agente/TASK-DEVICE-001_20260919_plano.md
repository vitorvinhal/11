# 📋 PLANO DE EXECUÇÃO - TAREFA TASK-DEVICE-001

Status inicial: 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)

## Objetivo Geral

Construir **Agente de Dispositivo** para PC (desktop/Tauri) e Mobile (Capacitor) no monorepo 11:
agente 100% funcional com acesso a arquivos, fotos, apps, configurações e controle do dispositivo,
visível **apenas nos apps nativos** (fora da versão web). Base de referência: `nousresearch/hermes-agent` (MIT).

## Metas Esperadas

- [ ] Pareamento real de device (deviceId persistente + registro + segredo) nas duas plataformas
- [ ] Device Gateway WS outbound (device → nuvem), sem tunnel inbound
- [ ] Function calling conectado (`@11/ia` envia `tools` e parseia `tool_calls` no adapter 9Router)
- [ ] Executor de tools no PC Agent local (fs, exec, media, apps, settings, screen, system)
- [ ] Bridge nativo mobile (plugins Capacitor) com os mesmos namespaces de tools
- [ ] Fluxo de aprovação risco DESTRUCTIVE ponta-a-ponta (pending_actions + UI)
- [ ] Gating de UI: Agente PC só em desktop-app, Agente Mobile só em mobile-app
- [ ] Fix painéis mortos (MobileDevicePanel `/api/agent/mobile` 404; MobileAgent WS direto)
- [ ] Version bump + CHANGELOG + testes + lint/build verdes + relatório pós-alteração

## Roteiro

| O que fazer       | Como fazer                                                                                                            | Arquivos afetados                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Tipos de contrato | Novo `packages/shared/src/types/device.ts` (DeviceInfo, DeviceToolCall, DeviceToolResult, GatewayMessage)             | `packages/shared/src/index.ts`, `types/device.ts`                                   |
| Migração devices  | Novo `infra/supabase/migrations/20260919_devices_gateway.sql`                                                         | `infra/supabase/migrations/`                                                        |
| Register API      | POST/GET em `apps/web/src/app/api/devices/register/route.ts`                                                          | `apps/web/src/app/api/devices/register/route.ts`                                    |
| Gateway WS        | `apps/web/src/app/api/devices/gateway/route.ts` + `apps/web/src/lib/device-gateway.ts`                                | `apps/web/src/app/api/devices/gateway/`, `apps/web/src/lib/device-gateway.ts`       |
| Function calling  | `packages/ia/src/router/adapters/9router.ts` (tools+tool_calls); `agent-core.ts` (device.* tools, dispatch, approval) | `packages/ia/src/router/adapters/9router.ts`, `packages/ia/src/agent/agent-core.ts` |
| PC tools          | Expansion `apps/desktop/src/pc-agent/server.ts` + `device-tools/` (Windows) + `gateway-client.ts`                     | `apps/desktop/src/pc-agent/*`                                                       |
| Tauri spawn       | `apps/desktop/src-tauri/src/lib.rs` spawn Node server                                                                 | `apps/desktop/src-tauri/src/lib.rs`                                                 |
| Mobile bridge     | Plugins Capacitor + `apps/mobile/src/utils/device-bridge.ts` + gateway injection                                      | `apps/mobile/package.json`, `apps/mobile/src/*`, `apps/mobile/App.tsx`              |
| UI gating         | `Sidebar.tsx` platforms nativas; fix `MobileDevicePanel.tsx`/`MobileDevicePanel`; painel approval                     | `apps/web/src/components/Sidebar.tsx`, `MobileDevicePanel.tsx`, `MobileAgent.tsx`   |
| Pós               | version bump + CHANGELOG + testes + lint/build                                                                        | raiz + workspaces + `relatorios_agente/TASK-DEVICE-001_...md`                       |

## 🔄 Diário de Execução em Tempo Real

> 🔄 INÍCIO [—] — Plano aprovado. Início da execução.
>
> 🚨 **AJUSTE DE DESIGN [—]** — Vercel Serverless Functions NÃO suporta hijack de WebSocket
> (a rota `mobile-agent/ws` atual apenas devolve a URL, sem upgrade real).
> ✅ **Decisão**: transporte primário = fila de jobs no Supabase (`device_jobs`) + polling HTTP
> por dispositivo (Vercel-compatível e stateless). Protocolo tipado `GatewayMessage` do shared
> reutilizado nos payloads HTTP. WS será opcional/self-hosted no futuro, não no MVP.

## 🏁 Relatório Pós-Alteração (Status Final)

> 🟢 **CONCLUÍDO COM SUCESSO** — v2.11.0-alpha

### Alterações executadas

- [x] `packages/shared/src/types/device.ts` — contrato (DeviceInfo, DeviceToolCall/Result, GatewayMessage) exportado
- [x] `infra/supabase/migrations/20260919_devices_gateway.sql` — tabelas `devices` + `device_jobs` + RLS + trigger
- [x] `/api/devices/register` (POST cria/atualiza + secret único; GET lista) + `lib/device-registry.ts`
- [x] Fila de jobs: `/api/devices/jobs[/poll][/result][/approve]` + `lib/device-jobs.ts` (ownership check)
- [x] Function calling: `adapters/9router.ts` envia `tools`/`tool_choice` e parseia `tool_calls` (JSON e SSE); `router/index.ts` e `types.ts` passam `tools`; 3 testes novos (257 total no ia)
- [x] `agent-core.ts` — 21 tools `device.*`, roteamento via `device-jobs.ts` (nuvem), aprovação `awaiting_approval`, mensagens de tool por call (protocolo OpenAI)
- [x] `risk-engine.ts` — regras `system.*`, `media.import`, `app.*`
- [x] Desktop: `device-tools.ts` (21 tools Windows, Node+PowerShell), `/device/pair` + `/device/tool`, `lib.rs` spawna servidor local no boot Tauri; fix tsc pré-existente (router9 double export, server.ts double listen) → `dist/server.js` agora gera
- [x] Mobile: 8 plugins Capacitor (filesystem, camera, device, network, clipboard, app, preferences, local-notifications) + `device-bridge.ts` injetado no WebView
- [x] UI: gating nativo puro no Sidebar (agent→desktop-app, mobile→mobile-app); painéis Agente PC/Mobile reescritos (status/jobs/aprovações/histórico/comando); Chat usa `/api/agent`+deviceId em apps nativos; `useDeviceAgent.ts` (poll 2.5s + transporte node/bridge)
- [x] Version bump 2.11.0-alpha em todos workspaces + CHANGELOG + version.json; lint 0 erros · testes 384/385(base)+257(ia)+130(web)+1(shared) · build root OK
- [x] Smoke test Windows: pair → 21 tools → `device.system_info` respondeu hostname+os

### Ocorrências resolvidas durante a execução

> 🚨 `@capacitor/media`, `@capawesome/capacitor-photos`, `@capawesome/capacitor-screen-capture` — 404 no npm. ✅ Substituídos por plugins oficiais; screenshot mobile e lista de galeria ficam como **limitação documentada** (requer MediaProjection/API restrita). Screenshot e apps/settings completos funcionam no PC.
> 🚨 Device Gateway via WebSocket inviável em Vercel Serverless (sem hijack). ✅ Transport = fila `device_jobs` + polling HTTP (Vercel-compatível).
> 🚨 Vercel path alias: sub-routes dinâmicos `[id]` exigiam 6 `../`. ✅ Corrigido (build web passou).
> 🚨 Desktop nunca compilava (`router9` double `export default`; `pc-agent/server.ts` auto-listen + server.ts re-listen → `ERR_SERVER_ALREADY_LISTEN`). ✅ Corrigidos — `dist/server.js` gerado e servidor boota com pair+tools.

### Notas / próximos passos sugeridos

- Aprovação ponta-a-ponta entre UI e chat: job DESTRUCTIVE pausa o loop (modelo informa usuário); aprovar job re-enfileira p/ próxima interação. Melhoria futura: re-trigger automático da iteração após aprovação.
- Migração Supabase precisa ser aplicada (`supabase db push` / migration no dashboard).
- Mobile: exige build nativo (`.capacitor`), lista de apps/galeria/screenshot pendentes de plugin específico.
