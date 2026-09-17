# Cloudflare Tunnel — Segurança Cross-Device (PC ⇄ Celular)

O túnel expõe **apenas a API remota** (`http://localhost:4000`) como serviço
**protegido por Cloudflare Access**. Nenhum serviço é exposto abertamente.

## Modelo de autenticação (Cloudflare Access)

| Tipo de acesso     | Método                                      | Uso previsto                         |
|--------------------|---------------------------------------------|--------------------------------------|
| **Humanos**        | E‑mail + senha + **2FA** (OTP/TOTP)         | Vitor, Giovana, Renata (dashboard, dev) |
| **Scripts/AI**     | **Service Token** (Client ID + Secret)      | A IA 11 local, CI, automações de longa duração |

> Nunca use o token do humano em scripts. Crie um *Service Token* dedicado no
> dashboard do Cloudflare (Zero Trust → Access → Service Auth) e injete como
> `CF_SERVICE_TOKEN` no ambiente da IA.

## `config.yaml` (exemplo de ingress com Access)

```yaml
tunnel: <TUNNEL_NAME>
credentials-file: ~/.cloudflared/<TUNNEL_NAME>.json

ingress:
  - hostname: pc11.<seu-dominio>.com
    service: http://localhost:4000
    originRequest:
      noTLSVerify: false
  - service: http_status:404
```

No Cloudflare Zero Trust, associe o hostname `pc11.<dominio>` a um **Access Application**
(ex.: `pc11.<dominio>.com/*`) com as seguintes políticas:
1. **Humanos**: `Any Access Service Token` OU `Emails + 2FA` (allow list de e‑mails).
2. **Scripts**: política separada usando `Service Token` (Client ID + Secret).

## `start.sh` — subida do túnel

```bash
#!/usr/bin/env bash
# Só sobe o túnel se a API local estiver respondendo.
# Requer: cloudflared instalado e config.yaml/credenciais presentes.
set -euo pipefail

API_URL="${API_URL:-http://localhost:4000/health}"
CONFIG="${CONFIG:-$HOME/.cloudflared/config.yaml}"

until curl -fsS "$API_URL" >/dev/null 2>&1; do
  echo "[tunnel] aguardando API local em $API_URL..."
  sleep 5
done

echo "[tunnel] API local OK — iniciando Cloudflare Tunnel (Access protegido)"
exec cloudflared tunnel --config "$CONFIG" run <TUNNEL_NAME>
```

## Checklist mínimo de segurança

- [x] Nenhum `trycloudflare` randômico em produção (apenas hostname próprio + Access).
- [x] Access Application ativa no hostname do túnel.
- [x] Política humana exige **2FA**.
- [x] Service Token apenas para scripts (nunca em código-fonte).
- [x] API só aceita operações nomeadas (`/ops/*`), sem shell arbitrário (ver `packages/api/src/modules/bridge`).
- [x] Todas as operações são gravadas em `bridge_audit_log` (append-only, admin).
- [x] Rate limiting habilitado no `/ops/*`.