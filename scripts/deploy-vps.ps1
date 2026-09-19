#!/usr/bin/env pwsh
<#
.SYNOPSIS
    11 Project - VPS Deploy Script for Windows (run on Ubuntu VPS via SSH)
    Run on fresh Ubuntu 22.04+ VPS (Hetzner CX22, DigitalOcean Basic, etc.)
#>

# Exit on error
$ErrorActionPreference = "Stop"

# Colors
$Green  = [ConsoleColor]::Green
$Yellow = [ConsoleColor]::Yellow
$Red    = [ConsoleColor]::Red

function Log($msg) { Write-Host "[DEPLOY] $msg" -ForegroundColor $Green }
function Warn($msg) { Write-Host "[WARN] $msg" -ForegroundColor $Yellow }
function Err($msg) { Write-Host "[ERR] $msg" -ForegroundColor $Red; exit 1 }

# Check root
if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Err "Run as Administrator (sudo equivalent on Linux)"
}

Write-Host "====================================================================="
Write-Host "11 Project - VPS Deploy (9Router + Ollama)"
Write-Host "Target: Ubuntu 22.04+ VPS"
Write-Host "====================================================================="

# This script is for Linux - on Windows it just shows the Linux commands
Write-Host ""
Write-Host "This is a reference script. Run these commands ON YOUR UBUNTU VPS:"
Write-Host ""

$script = @"
# =============================================================================
# 11 Project - VPS Deploy (9Router + Ollama)
# Run on fresh Ubuntu 22.04+ VPS as root:
#   curl -fsSL https://raw.githubusercontent.com/<your-repo>/main/scripts/deploy-vps.sh | sudo bash
# =============================================================================
set -euo pipefail

log()  { echo -e "\033[0;32m[DEPLOY]\033[0m $*"; }
warn() { echo -e "\033[1;33m[WARN]\033[0m $*"; }
err()  { echo -e "\033[0;31m[ERR]\033[0m $*"; exit 1; }

[[ $EUID -eq 0 ]] || { echo "Run as root (sudo)"; exit 1; }

# Update system
log "Updating system..."
apt-get update -qq && apt-get upgrade -y -qq

# Dependencies
log "Installing dependencies..."
apt-get install -y -qq curl gnupg2 ca-certificates

# Node.js 20
log "Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y -qq nodejs

# PM2
log "Installing PM2..."
npm install -g pm2

# Ollama
log "Installing Ollama..."
curl -fsSL https://ollama.com/install.sh | sh

# Pull models
log "Pulling Ollama models..."
ollama pull qwen3:4b
ollama pull gemma3:4b
ollama pull llama3.2:3b
# ollama pull dolphin3:8b  # Uncomment if >8GB RAM

# 9Router
log "Installing 9Router..."
npm install -g 9router

# Ollama systemd service
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

# 9Router systemd service
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

# Firewall
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
# ufw allow 20128/tcp  # Uncomment for direct dashboard access
ufw --force enable

# Wait and verify
log "Waiting for services..."
sleep 10

log "Verifying Ollama..."
ollama list
curl -s http://localhost:11434/api/version

log "Verifying 9Router..."
curl -s http://localhost:20128/api/health

# Get tunnel URL
sleep 15
TUNNEL_URL=$(curl -s http://localhost:20128/api/health 2>/dev/null && \
  grep -o 'https://r[^.]*\.abc-tunnel\.us' /root/.config/9router/tunnel/state.json 2>/dev/null | head -1 || \
  echo "Check dashboard at http://localhost:20128")

echo "====================================================================="
echo "DEPLOY COMPLETE!"
echo "====================================================================="
echo "Ollama:     http://localhost:11434"
echo "9Router:    http://localhost:20128"
echo "Tunnel:     $TUNNEL_URL"
echo ""
echo "Update .env / Vercel with:"
echo "  ROUTER9_ENDPOINT=http://localhost:20128"
echo "  ROUTER9_TUNNEL=$TUNNEL_URL"
echo "  ROUTER9_TOKEN=<your-9router-token>"
echo "  ROUTER9_MODEL=Arcenal"
echo "  ROUTER9_FALLBACK_MODELS=Ollama/qwen3:4b,Ollama/gemma3:4b,Ollama/llama3.2:3b,Ollama/dolphin3:8b,oc/big-pickle,oc/mimo-v2.5-free,Arcenal"
echo ""
echo "Logs: journalctl -u 9router -f | journalctl -u ollama -f"
"@

Write-Host $script
Write-Host ""
Write-Host "====================================================================="
Write-Host "COPY THE ABOVE SCRIPT AND RUN ON YOUR UBUNTU VPS:"
Write-Host "  curl -fsSL <raw-github-url-to-deploy-vps.sh> | sudo bash"
Write-Host "====================================================================="
Write-Host ""
Write-Host "Or run manually on VPS (copy-paste each section):"
Write-Host ""
Write-Host "1. UPDATE SYSTEM:"
Write-Host "   sudo apt-get update && sudo apt-get upgrade -y"
Write-Host ""
Write-Host "2. INSTALL NODE.JS 20 + PM2:"
Write-Host "   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -"
Write-Host "   sudo apt-get install -y nodejs"
Write-Host "   sudo npm install -g pm2"
Write-Host ""
Write-Host "3. INSTALL OLLAMA + MODELS:"
Write-Host "   curl -fsSL https://ollama.com/install.sh | sh"
Write-Host "   ollama pull qwen3:4b"
Write-Host "   ollama pull gemma3:4b"
Write-Host "   ollama pull llama3.2:3b"
Write-Host "   # ollama pull dolphin3:8b  # if >8GB RAM"
Write-Host ""
Write-Host "4. INSTALL 9ROUTER:"
Write-Host "   sudo npm install -g 9router"
Write-Host ""
Write-Host "5. SYSTEMD SERVICES (create files):"
Write-Host "   sudo tee /etc/systemd/system/ollama.service <<'EOF'"
Write-Host "[Unit]"
Write-Host "Description=Ollama API Server"
Write-Host "After=network-online.target"
Write-Host ""
Write-Host "[Service]"
Write-Host "ExecStart=/usr/local/bin/ollama serve"
Write-Host "Restart=always"
Write-Host "RestartSec=3"
Write-Host "Environment=OLLAMA_HOST=0.0.0.0:11434"
Write-Host "Environment=OLLAMA_ORIGINS=*"
Write-Host ""
Write-Host "[Install]"
Write-Host "WantedBy=multi-user.target"
Write-Host "EOF"
Write-Host ""
Write-Host "   sudo tee /etc/systemd/system/9router.service <<'EOF'"
Write-Host "[Unit]"
Write-Host "Description=9Router AI Gateway"
Write-Host "After=network-online.target ollama.service"
Write-Host "Wants=ollama.service"
Write-Host ""
Write-Host "[Service]"
Write-Host "Type=simple"
Write-Host "ExecStart=/usr/local/bin/9router --no-browser --skip-update"
Write-Host "Restart=always"
Write-Host "RestartSec=5"
Write-Host "Environment=HOME=/root"
Write-Host "Environment=PATH=/usr/local/bin:/usr/bin:/bin"
Write-Host ""
Write-Host "[Install]"
Write-Host "WantedBy=multi-user.target"
Write-Host "EOF"
Write-Host ""
Write-Host "   sudo systemctl daemon-reload"
Write-Host "   sudo systemctl enable --now ollama 9router"
Write-Host ""
Write-Host "6. FIREWALL:"
Write-Host "   sudo ufw allow OpenSSH"
Write-Host "   sudo ufw allow 80/tcp"
Write-Host "   sudo ufw allow 443/tcp"
Write-Host "   sudo ufw --force enable"
Write-Host ""
Write-Host "7. VERIFY:"
Write-Host "   sleep 10"
Write-Host "   ollama list"
Write-Host "   curl -s http://localhost:20128/api/health"
Write-Host ""
Write-Host "8. GET TUNNEL URL:"
Write-Host "   sleep 15"
Write-Host "   grep 'tunnelUrl' ~/.config/9router/tunnel/state.json"
Write-Host ""
Write-Host "====================================================================="
Write-Host "AFTER DEPLOY - UPDATE VERCEL / .env:"
Write-Host "====================================================================="
Write-Host "ROUTER9_ENDPOINT=http://localhost:20128"
Write-Host "ROUTER9_TUNNEL=https://r<shortId>.abc-tunnel.us  # from state.json"
Write-Host "ROUTER9_TOKEN=sk-1caaa403ccf39bb8-nlesjz-216ce4e8"
Write-Host "ROUTER9_MODEL=Arcenal"
Write-Host "ROUTER9_FALLBACK_MODELS=Ollama/qwen3:4b,Ollama/gemma3:4b,Ollama/llama3.2:3b,Ollama/dolphin3:8b,oc/big-pickle,oc/mimo-v2.5-free,Arcenal"
Write-Host ""
Write-Host "Logs: journalctl -u 9router -f"