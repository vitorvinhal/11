# CLI (11‑cli)

## Propósito
Ferramenta de linha de comando para automatizar:
- **Seed de personas** (`seed:personas`)
- **Geração de código** full‑stack (`generate`)
- **Deploy** automático (`deploy`)
- **Execução de migrations** Supabase (`supabase:migrate`)

## Estrutura
```
packages/cli/src/
├─ index.ts            # entrypoint do comando `11-cli`
├─ generators/
│   └─ codegen.ts     # gera projetos a partir de specs OpenAPI/YAML
├─ scripts/
│   ├─ deploy.ts       # wrapper para Vercel CLI
│   └─ supabase.ts    # chama `supabase db push`
└─ utils/
    └─ logger.ts      # logging simples para stdout + file
```

## Uso
```bash
# Instalar
pnpm i -g 11-cli

# Seed de personas
11-cli seed:personas

# Gerar código a partir de spec
11-cli generate --type api --spec ./specs/my-api.yaml

# Deploy
11-cli deploy
```

## Integração com IA
O módulo `packages/ia/src/tools/codegen.ts` chama internamente o CLI para gerar projetos sob demanda.

## Observação
Todo o CLI opera sem custos, usando apenas recursos gratuitos (Supabase, Vercel, 9Router, Gemini). 
