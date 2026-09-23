# MCPs — Curadoria para o projeto 11

Guia de configuração dos MCPs (Model Context Protocol) nas IDEs de desenvolvimento.
Fontes: curadoria "top 10" + "top 5 essenciais" (2026) consolidada pelo Brain.

## ⚠️ Regra de ouro: menos é mais

Mais MCPs ligados = mais contexto/token gasto por turno = IA mais cara e mais
propensa a alucinar. **Só mantenha ativo o que o trabalho atual exige.**
Trocou de tipo de tarefa? Desative o que não serve.

## Curadoria para o 11

| Tier                                         | MCPs                                                                                     | Por quê                                                                                        |
| -------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Core (em `.mcp.json`)**                    | `filesystem`, `github`, `sequential-thinking`, `chrome-devtools`, `context7`, `supabase` | Arquivos, PRs, planejamento, teste de UI no navegador real, docs atualizadas, banco do projeto |
| **Opcional (só em `mcp.full.example.json`)** | `puppeteer`, `sentry`, `slack`, `firebase`, `stripe`, `sonarqube`, `firecrawl`, `figma`  | Exigem conta/chave externa ou não fazem parte do stack atual — ative sob demanda               |

Notas de curadoria:

- **`chrome-devtools` vs `puppeteer`:** overlap. Core usa `chrome-devtools` (Chrome real, console, rede). Ative um por vez.
- **`firebase` / `stripe`:** o 11 usa Supabase, não Firebase/Stripe — só ative se um dia o stack mudar.
- **`supabase`:** `SERVICE_ROLE_KEY` ignora RLS. Nunca commitar; em time, prefira chave restrita.
- **`figma`:** MCP bidirecional (lê e escreve no canvas). Prompt pronto em [figma-design-system-prompt.md](figma-design-system-prompt.md).

## Onde colar a config

| IDE                 | Onde                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| **Claude Code**     | `.mcp.json` na raiz do projeto (já criado — só exportar as env vars e reiniciar)                   |
| **Antigravity**     | ⋯ (canto sup. dir.) → MCP Servers → Manage MCP servers → **View config** → abre `mcp.json` → colar |
| **Trae AI**         | Settings → MCPs → Add manually → colar JSON                                                        |
| **VS Code (Cline)** | Extensão **Cline** → ícone MCP Servers → **Configure MCP Servers** → colar no `Cline MCP Settings` |
| **Cursor**          | Settings → MCP → Add new MCP server (mesmo formato)                                                |

JSON para colar nas IDEs (com placeholders): [`mcp.full.example.json`](mcp.full.example.json)
JSON do Claude Code (com `${ENV}`): [`../../.mcp.json`](../../.mcp.json)

> IDEs que **não** expandem `${ENV}`: cole o exemplo e troque `SEU_TOKEN` pelo
> valor real **localmente** — mas nunca faça commit disso (configs de usuário
> ficam fora do repo ou em arquivos gitignored).

## Como obter cada token

| MCP       | Passos                                                                                                                 |
| --------- | ---------------------------------------------------------------------------------------------------------------------- |
| github    | GitHub → Settings → Developer settings → Personal access tokens → Generate (repo scope mínimo)                         |
| supabase  | Dashboard → Project Settings → API (`service_role` ou chave restrita) — já documentado no `.env.example`               |
| sentry    | User settings → Custom integrations → Internal integrations → Create → access token; org slug em Organization settings |
| slack     | api.slack.com/apps → Create app → Bot Token scopes → Install to workspace                                              |
| firebase  | Console → Contas de serviço → Gerar nova chave privada (JSON **fora do repositório**)                                  |
| stripe    | Developers → API keys (`sk_test_…` em dev)                                                                             |
| sonarqube | My account → Security → Generate tokens                                                                                |
| firecrawl | firecrawl.dev → dashboard → API key (tier gratuito)                                                                    |
| figma     | Figma → Settings → Personal access tokens                                                                              |

Variáveis correspondentes já documentadas em [`.env.example`](../../.env.example)
(seção `==== MCP ====`).

## Segurança (obrigatório)

1. **Nunca** committar token real — nem em `.mcp.json`, nem em docs, nem em prompt.
2. Token ausente = não ativa o MCP (fail fast), nunca placeholder funcional.
3. `firebase`: JSON de credenciais fora do repo (acesso total ao projeto Google).
4. `supabase` service role: ignora RLS — trate como root do banco.
5. PR que tocar estes arquivos deve citar a seção "REGRAS DE SEGURANÇA" do `AGENTS.md`.
