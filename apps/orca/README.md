# orca (apps/orca)

Servidor local de execução de comandos (`POST /orca/exec`) usado pelo proxy
`/api/code` do web. Bind fixo em `127.0.0.1` (nunca `0.0.0.0`).

## Subir o servidor

```bash
# porta default 4001
pnpm --filter orca start

# porta alternativa
ORCA_PORT=4002 pnpm --filter orca start
```

## Sandbox de `cwd` (hardening ORCA-PAIR-002)

Todo `cwd` de `POST /orca/exec` é validado contra uma lista de raízes:

- Env **`ORCA_ALLOWED_ROOTS`** — lista separada por `path.delimiter`
  (`;` no Windows, `:` no Unix). Ex.: `ORCA_ALLOWED_ROOTS=C:\projetos\11;D:\outro`.
- **Default:** raiz do monorepo (detecção sobendo a partir do módulo até achar
  `pnpm-workspace.yaml` ou `.git`).
- Validação: `path.relative(raiz, alvo)` — rejeita se o relative começar com
  `..` ou for absoluto (drive diferente no Windows). **Nunca** se usa
  `string.startsWith` no path completo (bug clássico de prefixo:
  `/app/root` vs `/app/root-evil`).
- Mantidos: bloqueio de metacaracteres de shell (`; & | \` $ …`) em `command`e`cwd`, e existência do diretório.

Resposta para cwd fora da raiz: `400 {"error":"invalid cwd"}`.

## Pareamento (PAIR-ORCA-001 / ORCA-PAIR-002)

O pareamento **não** é feito pelo servidor Express (`/orca/exec`) — ele é um exec
local sem UI. O CLI wrapper desta casa em `src/serve.ts` repassa os flags para o
runtime headless do Orca desktop:

```bash
# wrapper do workspace (recomendado)
pnpm --filter orca serve -- --port 4001 --pairing-address 127.0.0.1 --json

# equivalente ao binário do sistema
orca serve --port 4001 --pairing-address 127.0.0.1 --json
```

Flags relevantes (help real do binário `orca` 1.4.x + parser em `src/serve.ts`):

| Flag                | O que faz                                                           |
| ------------------- | ------------------------------------------------------------------- |
| `--port <port>`     | Porta do runtime (default 6768; usar 4001 colide com `orca start`)  |
| `--pairing-address` | Host anunciado ao cliente (LAN/Tailscale/SSH-forward/reverse proxy) |
| `--json`            | Emite JSON legível por máquina (endpoint, pairing status, URL)      |
| `--mobile-pairing`  | Link/QR com escopo mobile                                           |
| `--no-pairing`      | Desliga pareamento                                                  |

### Extração da Pairing URL

1. Rodar o comando acima em background, redirecionando stdout para arquivo.
2. Aguardar a linha/evento de readiness (`orca_server_ready` / campo
   `pairing` no JSON).
3. Ler `pairing.url` no formato `orca://pair?code=...` (ou browser URL com
   pairing embutido, quando o web client bundle está disponível).

### Fluxo manual de teste de UI (ainda requiring humano)

1. `orca serve --port 4001 --pairing-address <IP_alcançável> --json`
2. Copiar a Pairing URL (`orca://pair?code=...`).
3. Abrir a UI Eleven Code → **Connect to Orca** (produção) e colar a URL.
4. Validar: sem erro de parse; runtime visível/pareado no cliente.

> **Blocker known neste ambiente:** a validação passo 3–4 exige browser com
> sessão autenticada na UI de produção — não automatizável no CI/agente sem
> credencial. O passo 1–2 (captura real da URL) é o que este task automatiza.

## Testes

```bash
pnpm --filter orca test   # jest (cwd sandbox)
pnpm --filter orca lint
```
