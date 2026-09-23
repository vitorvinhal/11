# 📋 PLANO - MOBILE-NATIVE-001 (offline-first mobile/desktop)

🟡 DIAGNÓSTICO (pré-alteração)

## Diagnóstico: capacitares/taura carregando assets locais ou URL remota?

### Mobile (Capacitor/Expo)

| Fonte                        | Valor atual                                                                 | Tipo   |
| ---------------------------- | --------------------------------------------------------------------------- | ------ |
| `capacitor.config.json`      | `server.url = https://11-five-umber.vercel.app`                             | REMOTA |
| `capacitor.config.ts`        | `server.url = https://candlefish.vercel.app`                                | REMOTA |
| `apps/mobile/App.tsx`        | `source={{ uri: EXPO_PUBLIC_WEB_URL ?? https://11-five-umber.vercel.app }}` | REMOTA |
| `apps/mobile/www/index.html` | `<meta refresh> → 11-five-umber.vercel.app`                                 | REMOTA |

**Conclusão:** mobile carrega URL remota a cada abertura. `www/` tem só 1 arquivo (redirect). Nenhum asset local de build UE empacotado.

### Desktop (Tauri)

| Fonte                         | Valor atual                                             | Tipo                        |
| ----------------------------- | ------------------------------------------------------- | --------------------------- |
| `apps/desktop/src/ui/App.tsx` | `window.location.href = webUrl` (candlefish.vercel.app) | REMOTA                      |
| `tauri.conf.json`             | `frontendDist = ../dist` (vite shell)                   | shell local que redireciona |

**Conclusão:** Tauri abre janela própria com shell Vite, mas o shell faz redirect remoto via `window.location.href`. Não é offline.

## Limitação real de "export estático do Next.js"

- `apps/web` usa Next 13 `app` router com 30+ rotas API e dezenas de `export const dynamic = "force-dynamic"` + `layout.tsx` dinâmico.
- Praticamente todo o app é server-rendered. **`output: 'export'` estático é inviável** sem refatoração grande do Next (mudaria a app web → fora do escopo).
- Build otimizado (`next build` + `next start`) mantém servidor Node → não cabe em Capacitor/Tauri autônomo sem levantar Node local.

## Estratégia offline-first viável (dentro do escopo)

1. **Mobile:** trocar WebView de URL remota → asset local (`www/build`). Empacotar um bundle local real da UI (shell offline-first) com SW já registrado como camada extra.
2. **Desktop:** remover redirect `window.location.href`. Renderizar UI local empacotada no frontendDist; API calls vão pro backend direto.
3. **API/Supabase/IA**: ficam em runtime (precisam rede). UI local renderiza offline; chamadas dinâmicas retornam `{ok:false,error}` tratado.

## Roteiro

1. ✅ Diagnóstico (este arquivo)
2. Disparar `build-ios.yml` no Actions e baixar IPA
3. Gerar bundle web otimizado → empacotar em `apps/mobile/www` e `apps/desktop/dist`
4. Trocar `App.tsx` mobile (local) e desktop (remover redirect)
5. Garantir SW como camada extra (não única)
6. Teste offline
7. Bump + changelog + commit

## Próximo passo

Disparar workflow iOS no Actions (branch de integração) e baixar IPA.
