# 🧪 Como testar o Agente de Dispositivo (PC)

## Pré-requisitos

- **Windows** (as tools `device.*` do PC usam Node + PowerShell).
- Modelo de chat: o Agente só age quando o provider é **9router** (chat envia `deviceId`).
- O banco já tem as tabelas (`devices`, `device_jobs`) — migração já aplicada.

## 1. Rodar os serviços locais do PC

Servidor local (PC Agent porta **3001** + Router9 porta **3002**):

```bash
pnpm --filter @11/desktop router
```

> Se instalou o app desktop (EXE/MSI, `11-desktop_2.12.2`), o Tauri já sobe esses serviços sozinho.

## 2. Rodar a web dev para testes

```bash
# 1) envs reais (Supabase + 9Router local)
cd apps/web
npx vercel env pull .env.local        # ou copie do deploy
# adicione no final do .env.local:
#   9ROUTER_ENDPOINT=http://localhost:20128
#   (coloque 9ROUTER_TOKEN= se o seu 9Router exigir)
pnpm dev:web                           # http://localhost:3000
```

## 3. Liberar a aba "Agente PC" no browser

Por design a aba só aparece em app nativo. Para testar no browser:

```js
// console do navegador (F12) em localhost:3000:
localStorage.setItem("eleven_platform_override", "desktop-app");
location.reload();
// para voltar ao normal: localStorage.removeItem("eleven_platform_override");
```

## 4. Parear e ativar

- Sidebar → **Agente PC**.
- O cabeçalho mostra o `deviceId` (gerado no login) e o estado: **"servidor local OK"** = PC Agent pareado (usou o secret vindo do `/api/devices/register`).
- Botão **Play** → começa a escutar jobs (poll a cada 2.5s).

## 5. Testes rápidos

**Comando no painel** (cria job `device.exec` direto):

- Digite `systeminfo` e Enter → resultado aparece em "Resultado".

**Via chat (fluxo completo com IA):**

1. Aba Conversas, provider **9router**.
2. Pergunte algo como:
   - `liste a pasta Downloads do meu PC`
   - `me mostre o status da bateria`
   - `abra a Calculadora`
   - `liste meus aplicativos instalados`
3. A IA decide usar a ferramenta `device.*`.
   - Ações **reversíveis/destrutivas** (escrever, executar, mudar config) geram job `awaiting_approval` → aba Agente PC → "Aprovações" → **Aprovar** → executa → **aparece o resultado no chat** (re-trigger automático).
   - Ações de leitura (listar, status, info) executam direto e o resultado volta no chat.

## 6. Verificar o servidor

```bash
curl http://localhost:3001/health
# → { status: "ok", paired: true, ... }
curl http://localhost:3001/device/tools   # lista as 21 tools do PC
```

## Solução de problemas

| Sintoma                         | Causa/Correção                                                                                |
| ------------------------------- | --------------------------------------------------------------------------------------------- |
| "Servidor local não pareado"    | `dist-server` não rodando → rode `pnpm --filter @11/desktop router` ou reinstale o EXE 2.12.2 |
| Chat não usa ferramenta         | provider ≠ 9router; ou 9Router (20128) fora do ar; ou prompt não pediu dispositivo            |
| Job travado "awaiting_approval" | Aprovar no painel Agente PC (não some só com o chat)                                          |
| Nada aparece                    | Registrar de novo: `localStorage.removeItem("eleven_device_secret_v1"); location.reload()`    |
