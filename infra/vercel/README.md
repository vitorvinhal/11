# Vercel Configuration

## Build Output
- Frontend web (`apps/web`) será compilado via `next build`.
- Mobile (`apps/mobile`) usa Capacitor – não requer build no Vercel.
- Desktop (`apps/desktop`) não é hospedado no Vercel.

## Functions
- API NestJS será exposta como Vercel Function na pasta `packages/api`.
- Arquivo de configuração `vercel.json` inclui rewrites para `/api/*`.

## Deploy Command
```bash
vercel --prod --confirm
```

## Variáveis de ambiente
Configure no dashboard Vercel:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `9ROUTER_ENDPOINT`
- `9ROUTER_TUNNEL`
- `9ROUTER_TOKEN`
- `9ROUTER_MODEL`
- `CF_TUNNEL_URL`
- `GEMINI_API_KEY`

## 9Router fora do seu PC (importante)
O 9Router roda **localmente** (`http://localhost:20128`) por padrão — isso não
funciona em ambientes remotos (Vercel, outra máquina, celular).

Para a IA funcionar fora do seu PC, aponte os endpoints para o **túnel público**:
- `9ROUTER_ENDPOINT=https://rdri7er.abc-tunnel.us` (endpoint público via Cloudflare Tunnel)
- `9ROUTER_TUNNEL=https://rdri7er.abc-tunnel.us` (fallback)

> O código já tenta, em ordem: endpoint configurado → túnel → modelo alternativo.
> Windows/mobile não precisam do 9Router local; usam o túnel automaticamente.

## Observação
Todas as funções são gratuitas no plano Hobby da Vercel.
