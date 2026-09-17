#!/usr/bin/env bash
# Verifica a API local antes de subir o túnel (Cloudflare Access).
set -euo pipefail

API_URL="${API_URL:-http://localhost:4000/health}"
CONFIG="${CONFIG:-$HOME/.cloudflared/config.yaml}"
TUNNEL_NAME="${TUNNEL_NAME:-11-pc}"

echo "[tunnel] verificando API local em $API_URL ..."
until curl -fsS "$API_URL" >/dev/null 2>&1; do
  echo "[tunnel] aguardando API local em $API_URL..."
  sleep 5
done

echo "[tunnel] API local OK — subindo túnel '$TUNNEL_NAME' (Access protegido)"
exec cloudflared tunnel --config "$CONFIG" run "$TUNNEL_NAME"