# Infraestrutura

## Supabase
- **Migrations**: `infra/supabase/migrations/20240915_init.sql` – cria tabelas de usuários, personas, mensagens, embeddings vetoriais, produtos da loja, estado da IA e regras de acesso.
- **Edge Functions** (a criar): manipulam busca vetorial, ingestão de memória e validações de permissões.

## Cloudflare Tunnel
- Script `infra/tunnel/start.sh` inicia o túnel para a API local (`http://localhost:4000`).
- **Segurança**: Cloudflare Access obrigatório — e-mail + 2FA para humanos, **Service Token** para scripts/IA. Veja `infra/tunnel/README.md`.
- Variáveis `CF_TUNNEL_TOKEN`, `CF_TUNNEL_URL` e `CF_SERVICE_TOKEN` em `.env.example`.

## Governança de Deploy
- Endpoint `POST /api/deploy/request` + `POST /api/deploy/approve/:id` (aprovação humana obrigatória).
- Tokens de curta duração (TTL 5 min) e escopo mínimo — sem credenciais estáticas para a IA.
- Circuit breaker: máx. `DEPLOY_CIRCUIT_MAX_PER_HOUR` deploys/hora + rollback de 1 clique.
- Commits apenas em `feature/*`/`fix/*` (`packages/cli/src/scripts/git-guard.ts`).

## Vercel
- Configuração de deploy em `infra/vercel/vercel.json` (a criar). O CI/CD roda `pnpm run build && vercel --prod`.

## CI/CD (GitHub Actions)
- Workflow `/.github/workflows/ci.yml` (a criar) executa lint, test, build e deploy nas plataformas acima.

## Observações
- Todos os recursos são gratuitos nas camadas free de Supabase, Vercel e Cloudflare.
- Quando necessário, a IA pode chamar `supabase db push` e `vercel --prod` via scripts no `packages/cli`.
