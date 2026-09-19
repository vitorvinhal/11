#!/usr/bin/env bash
# =============================================================================
# 11 Project - VPS Deploy Script (9Router + Ollama)
# Run on fresh Ubuntu 22.04+ VPS (Hetzner CX22, DigitalOcean Basic, etc.)
# Usage: curl -fsSL <raw-url> | sudo bash
# =============================================================================
set -euo pipefail

# Colors
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; NC='\033[0m'
log()  { echo -e "${GREEN}[DEPLOY]${NC} $*"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $*"; }
err()  { echo -e "${RED}[ERR]${NC} $*"; }

# Check root
[[ $EUID -eq 0 ]] || { err "Run as root (sudo)"; exit 1; }

# Update system
log "Updating system..."
apt-get update -qq && apt-get upgrade -y -qq

# Install dependencies
log "Installing dependencies (curl, nodejs 20, pm2)..."
apt-get install -y -qq curl gnupg2 ca-certificates

# Node.js 20
log "Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y -qq nodejs

# PM2 for process management
log "Installing PM2..."
npm install -g pm2

# Ollama
log "Installing Ollama..."
curl -fsSL https://ollama.com/install.sh | sh

# Pull models (adjust as needed)
log "Pulling Ollama models (this takes a few minutes)..."
ollama pull qwen3:4b
ollama pull gemma3:4b
ollama pull llama3.2:3b
# ollama pull dolphin3:8b  # Uncomment if you have >8GB RAM

# 9Router
log "Installing 9Router..."
npm install -g 9router

# Create systemd service for Ollama
log "Creating Ollama systemd service..."
cat > /etc/systemd/system/ollama.service <<'EOF'
[Unit]
Description=Ollama API Server
After=network-online.target

[Service]
ExecStart=/usr/local/bin/ollama serve
Restart=always
RestartSec=3
Environment=OLLAMA_HOST=0.0.0.0:11434
Environment=OLLAMA_ORIGINS=*

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
systemctl enable --now ollama

# Create systemd service for 9Router
log "Creating 9Router systemd service..."
cat > /etc/systemd/system/9router.service <<'EOF'
[Unit]
Description=9Router AI Gateway
After=network-online.target ollama.service
Wants=ollama.service

[Service]
Type=simple
ExecStart=/usr/local/bin/9router --no-browser --skip-update
Restart=always
RestartSec=5
Environment=HOME=/root
Environment=PATH=/usr/local/bin:/usr/bin:/bin

[Install]
WantedBy=multi-user.target
EOF
systemctl daemon-reload
systemctl enable --now 9router

# Firewall (allow SSH, HTTP, HTTPS, 9Router dashboard if needed)
log "Configuring firewall..."
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
# ufw allow 20128/tcp  # Uncomment if you want direct dashboard access
ufw --force enable

# Wait for services
log "Waiting for services to start..."
sleep 10

# Verify
log "Verifying Ollama..."
ollama list
curl -s http://localhost:11434/api/version

log "Verifying 9Router..."
curl -s http://localhost:20128/api/health

# Get tunnel URL
log "Getting tunnel URL (waiting for registration)..."
sleep 15
TUNNEL_URL=$(curl -s http://localhost:20128/api/health 2>/dev/null && \
  grep -o 'https://r[^.]*\.abc-tunnel\.us' /root/.config/9router/tunnel/state.json 2>/dev/null | head -1 || \
  curl -s http://localhost:20128/api/health 2>/dev/null | jq -r '.tunnelUrl' 2>/dev/null || \
  echo "Check dashboard at http://localhost:20128")

log "====================================================================="
log "DEPLOY COMPLETE!"
log "====================================================================="
log "Ollama:     http://localhost:11434"
log "9Router:    http://localhost:20128"
log "Tunnel:     $TUNNEL_URL"
log ""
log "Update your .env / Vercel with:"
log "  ROUTER9_ENDPOINT=http://localhost:20128"
log "  ROUTER9_TUNNEL=$TUNNEL_URL"
log "  ROUTER9_TOKEN=<your-9router-token>"
log "  ROUTER9_MODEL=Arcenal"
log "  ROUTER9_FALLBACK_MODELS=Ollama/qwen3:4b,Ollama/gemma3:4b,Ollama/llama3.2:3b,Ollama/dolphin3:8b,oc/big-pickle,oc/mimo-v2.5-free,Arcenal"
log ""
log "Check logs: journalctl -u 9router -f | journalctl -u ollama -f"