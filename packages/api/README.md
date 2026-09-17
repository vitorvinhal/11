# API (NestJS)

## Estrutura de pastas
```
packages/api/src/
├─ modules/
│   ├─ auth/          # Magic Link Supabase + JWT
│   ├─ bridge/        # Endpoints que executam comandos no PC (via Cloudflare Tunnel)
│   ├─ store/          # CRUD da loja Renata Modas
│   └─ common/        # DTOs, guards, interceptors
└─ main.ts            # Bootstrap do NestJS
```
## Principais endpoints
- `POST /bridge/exec` – recebe `{command:string, args:string[]}` e, após validação, executa via `child_process.exec` no PC.
- `GET /store/products` – lista produtos da loja.
- `POST /store/products` – cria produto com imagem (upload direto para Supabase Storage).
- `GET /auth/magic-link?email=...` – gera link Magic Link usando o client Supabase.

## Segurança
- Cada request deve conter token JWT emitido pelo Supabase Auth.
- O módulo `bridge` verifica permissões usando a tabela `access_rules` antes de executar comandos.

## Deploy
- A API é containerizada (Dockerfile) e deployada na Vercel Functions (`vercel.json`).
- CI/CD roda `pnpm run build && vercel --prod`.
