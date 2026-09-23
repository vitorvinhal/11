# 📋 PLANO DE EXECUÇÃO - TAREFA TASK-OLLAMA-LLAMA

🟢 CONCLUÍDO COM SUCESSO

## Objetivo Geral

Adicionar suporte explícito a modelos Llama no fluxo Ollama, ampliando a lista de modelos populares e permitindo seleção via UI.

## Metas Esperadas

- [x] Incluir novos nomes de modelos Llama em `OLLAMA_POPULAR`.
- [x] Atualizar UI (se necessário) para exibir os novos modelos.
- [x] Garantir que seleção e chamada ao endpoint Ollama funcionem com os novos modelos.

## Roteiro Passo a Passo

1. Editar `apps/web/src/lib/local-llama.ts` – ampliar `OLLAMA_POPULAR` com `"llama2"`, `"llama3"`, `"llama3.1"` além dos já existentes.
2. Verificar importação em `OllamaPanel.tsx` – nenhum ajuste necessário pois a lista é consumida diretamente.
3. Executar smoke‑test (`pnpm dev:web` e chamar chat com provider "ollama" usando novo modelo) para validar fluxo.
4. Atualizar `CHANGELOG.md` e version bump após conclusão (não incluído aqui).

## Arquivos Afetados

- `apps/web/src/lib/local-llm.ts`

## Próximo Passo

Aplicar a edição no arquivo acima.

---

## 🔄 Diário de Execução em Tempo Real

> 🚨 **PROBLEMA/ERRO DETECTADO (validação E2E)**
> Default `llama3.2` (sem tag) retornava `404 model 'llama3.2' not found` — modelo instalado é `llama3.2:3b`. Corrigido default em `getOllamaConfig()` (dois locais).

> 🔄 Ampliação de escopo autorizada pelo usuário ("pode fazer sem me pergunta"): além de `OLLAMA_POPULAR`, implementado fallback automático de modelo inexistente (client-side `chatOpenAICompat`/`streamChat` via `isModelNotFound` + `discoverFirstModel`; server-side `routeOllama` com candidatos via `/api/tags`).

## 🏁 Relatório Pós-Alteração (Status Final)

🟢 CONCLUÍDO COM SUCESSO

### Resumo das alterações

- [x] `apps/web/src/lib/local-llm.ts`: default `llama3.2` → `llama3.2:3b`; `OLLAMA_POPULAR` com variantes Llama; `streamChat` com retry via `isModelNotFound()` + `discoverFirstModel()`.
- [x] `apps/web/src/app/api/chat/route.ts`: `routeOllama()` consulta `/api/tags` e usa primeiro modelo instalado como candidato de fallback.
- [x] `CHANGELOG.md` + `apps/web/public/version.json`: bump 2.16.3-alpha (code 32) com notas do release.
- [x] `.task_state.md` atualizado.
- [x] Commit `5624321` realizado; pendências residuais (formatação do relatório + checkpoint) commitadas em follow-up.

### Verificações

- `pnpm --filter @11/web lint` — 0 erros (warnings pré-existentes).
- `pnpm --filter @11/web test` — 157 testes, 16 suites, todos OK.
- Fallback E2E validado: modelo inexistente → 404 → discover → `llama3.2:3b` → 200.

### Ocorrências

- Nenhum erro em execução das edições. Smoke test raiz tem expectativas desatualizadas (401 vs 400) — pré-existente, fora do escopo.
