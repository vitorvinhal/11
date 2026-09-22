# 📋 RELATÓRIO COMPLETO — Pendências (v2.12.2-alpha)

Data: 2026-09-21 · Branch: `vitorvinhal/candlefish`

## 🟢 Resolvidas nesta rodada

| #   | Pendência                    | O que foi feito                                                                                                                                                                             | Verificação                                                             |
| --- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 3   | APK release                  | `build.gradle`: `signingConfig signingConfigs.debug` no buildType release + versão 2.12.1/19                                                                                                | `assembleRelease` OK → **app-release.apk 6.4MB**                        |
| 5   | CORS do PC Agent             | Default agora aceita localhost:3000/1420 + domínio Vercel + `NEXT_PUBLIC_URL` (override via `ALLOWED_ORIGINS`)                                                                              | smoke pair+tool OK                                                      |
| 6   | JWT_SECRET no Tauri          | Spawn (`lib.rs`) define `JWT_SECRET` local de dev se ausente (não cai no fail-fast)                                                                                                         | servidor sobe                                                           |
| 8   | Re-trigger pós-aprovação     | `agent-bus.ts` (pub/sub) + `useDeviceAgent.approveJob` aguarda job terminal e emite `agent:job-resume`; `ChatPanel` assina e chama `/api/agent` com o resultado → resposta contínua no chat | lint/build web OK                                                       |
| 10  | settings do PC               | Novas chaves: `timezone` (get e set), `region` (get); lista de suportadas atualizada                                                                                                        | smoke `device.settings_get timezone` → `E. South America Standard Time` |
| 11  | Versão desktop               | `tauri.conf.json` + `Cargo.toml` → **2.12.1**; rebuild → `11-desktop_2.12.1_x64-setup.exe`/`.msi`                                                                                           | bundles gerados                                                         |
| —   | **Conflito dist (bug real)** | `vite build` apagava `dist/server.js` → servidor Node movido para **`dist-server/`** (`tsconfig outDir` + script `router` + spawn do Tauri)                                                 | `dist-server/server.js` existe e smoke passou                           |
| —   | Downloads da versão          | `/downloads` atualizado: setup.exe, MSI (2.12.1) e **APK release**                                                                                                                          | arquivos presentes                                                      |

## 🟡 Bloqueadas (ambiente/terceiros — ações necessárias)

| #   | Pendência                                        | Motivo                                                                                    | Como resolver                                                                             |
| --- | ------------------------------------------------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 1   | Migração Supabase `20260919_devices_gateway.sql` | Ambiente sem credenciais (sem `SUPABASE_ACCESS_TOKEN`/`DB_PASSWORD`, projeto não linkado) | `supabase link --project-ref uacqekmejviqddrbnfhg` → `supabase db push`                   |
| 2   | Deploy Vercel desta branch                       | Repository deploya produção via outra branch/PR                                           | Criar PR (`https://github.com/vitorvinhal/11/pull/new/vitorvinhal/candlefish`) ou mergear |
| 4   | iOS                                              | Windows (sem macOS/Xcode)                                                                 | Buildar em macOS; depois publicar e configurar env iOS                                    |
| 7   | Envs de download no Vercel                       | Opcional — já há fallback `/downloads/*`                                                  | Definir `NEXT_PUBLIC_DOWNLOAD_*_URL` se quiser links externos                             |

## ⏸️ Candidatas futuras (documentadas como limitações reais)

- **Mobile**: lista de apps instalados, galeria de fotos e screenshot dependem de plugin de mídia **não publicado no npm** (Media/ScreenCapture). `device.exec` indisponível no mobile (sandbox).
- **Brilho (PC)**: set pode exigir admin (retorna nota quando falha).
- **Aprovação em segundo plano**: se o usuário aprovou com o chat desmontado (outra aba), a continuação é perdida (ChatPanel desmonta no AppShell).

## 📊 Estados de verificação (final)

- `pnpm lint` (root): ✅ 0 erros (warnings pré-existentes)
- `pnpm test`: ✅ web 130/130 · ia 257/257 · shared 1/1
- `pnpm --filter @11/web build`: ✅ (rotas devices/updates presentes)
- Desktop `tsc` → `dist-server` + smoke (pair · 21 tools · timezone): ✅
- APK `assembleRelease`: ✅ 6.4MB assinado
- Tauri `build`: ✅ 2.12.1 (MSI + EXE)
- Downloads publicados em `apps/web/public/downloads/`: ✅

## Versão

`2.12.2-alpha` (versionCode 20) — bump em todos os workspaces + CHANGELOG.md.
