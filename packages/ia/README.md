# IA Core

## Estrutura
```
packages/ia/src/
├─ router/          # Seleciona modelo (9Router, fallback Gemini) e invoca prompt
├─ personality/     # System prompts dinâmicos (humor, advogado, loja, etc.)
├─ tools/           # Funções que podem ser chamadas pela IA via Function Calling:
│   ├─ file.ts      # readFile/writeFile (sandboxed)
│   ├─ office.ts    # geração de PPTX/Excel via officegen
│   ├─ deploy.ts    # wrappers Vercel e Supabase migrations
│   └─ codegen.ts   # usa 11‑cli para gerar projetos full‑stack
└─ seed.ts         # script para inserir personas Vitor, Giovana, Renata
```

## Roteador de IA (`router/AgentRouter.ts`)
- Recebe a mensagem do usuário, decide o modelo, analisa **function calls** e executa as ferramentas correspondentes.
- Atualiza o **estado de humor** na tabela `agent_states` após cada interação.
- Usa **embeddings** para buscar memórias relevantes (`SELECT * FROM embeddings ORDER BY embedding <=> query LIMIT 5`).

## Ferramentas principais
- `file.ts` – acesso a arquivos em diretórios whitelist (ex.: `~/projects`).
- `office.ts` – gera apresentações PowerPoint usando `officegen` a partir de templates.
- `deploy.ts` – executa `vercel --prod` e `supabase db push`.
- `codegen.ts` – chama o CLI (`11-cli generate`) com especificações OpenAPI para criar backend, frontend e mobile.

## Persona Seed (`seed.ts`)
```ts
import { PERSONAS_SEED } from './personality/seed';
// script executado via `pnpm seed:personas`
```

## Como usar
```ts
import { handleMessage } from './router/AgentRouter';
const response = await handleMessage('Criar loja para a Renata', userId);
```

## Observação de segurança
- Todos os tools são **sandboxed**; caminhos são validados contra uma whitelist (`ALLOWED_PATHS`).
- Logs de execução são gravados em `logs/ia.log` (não incluído no repo). 
