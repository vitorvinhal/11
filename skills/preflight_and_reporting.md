# SKILL: Agent PreFlight Check & Auto-Reporting Engine

**ID:** `skill-11-preflight-reporting`
**Versão:** 1.0.0
**Escopo:** Automação de pré-checagem, integridade de rotas, geração de relatórios `.md` e sincronização com o Agente Brain.

---

## 1. Descrição

Esta Skill fornece instruções e rotinas passo a passo para o Agente executar checagens de saúde da infraestrutura do "11" antes de aplicar mudanças e gerar os relatórios de auditoria exigidos pelo protocolo `docs/AGENTE.md`.

**Limites obrigatórios (ver `docs/AGENTE.md` seção 6):**

- PROIBIDO `git push origin main`, builds de produção (Vercel/Railway) e tags de release. Deploy é exclusivo do Brain.
- Gate de validação = `pnpm -r lint && pnpm -r build && pnpm -r test`. `pnpm -r typecheck` está QUEBRADO na raiz — não usar.
- Toda rota nova de API precisa de `requireUser()` (GET inclusive). Validação de path com `path.relative` (nunca `startsWith`).

---

## 2. Ações Autônomas da Skill

### Ação 1: Gerar Relatório Pré-Execução

Antes de modificar qualquer código, crie o arquivo em `relatorios_agente/TASK-<ID>_<YYYYMMDD>_plano.md` preenchendo o template:

```markdown
# 📋 PLANO DE EXECUÇÃO - TAREFA TASK-<ID>

- **ID da Tarefa:** `TASK-<ID>`
- **Data/Hora de Início:** <ISO Timestamp>
- **Status Inicial:** 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)
- **Agente Executor:** <Nome do Agente>
- **Branch:** <Nome da Branch>

## 🎯 Objetivo Geral

<Descrição detalhada do que será feito>

## 📌 Metas Esperadas

- [ ] <Meta 1>
- [ ] <Meta 2>

## 🗺️ Roteiro Detalhado de Ação

### Passo 1: <Nome da Etapa>

- **O que fazer:** <Descrição exata da mudança>
- **Como fazer:** <Técnica, funções, bibliotecas ou comandos a usar>
- **Arquivos afetados:** `caminho/do/arquivo/1.ts`, `caminho/do/arquivo/2.tsx`

## ⚠️ Análise de Risco e Segurança

- Nível de Risco: SAFE / REVERSIBLE / DESTRUCTIVE
- Impacto na Autenticação (`requireUser`): <Sim/Não>
- Impacto no Servidor Orca (Porta 4001): <Sim/Não>
- Impacto Visual/UI (FPS/partículas/blur): <Sim/Não>

## 🔬 Plano de Teste e Validação

1. Executar `pnpm -r lint && pnpm -r build && pnpm -r test`
2. Validar rota X via curl/POST
```

### Ação 2: Executar Verificação de Pré-Voo (PreFlight Verification)

Rode os comandos de inspeção e valide os serviços necessários:

- **Checagem de Git & Diff:**

  ```bash
  git status && git diff --shortstat
  ```

- **Checagem do Monorepo (gate obrigatório):**

  ```bash
  pnpm -r lint && pnpm -r build && pnpm -r test
  ```

  > ⚠️ **ATENÇÃO:** `pnpm -r typecheck` NÃO existe na raiz do monorepo. Use o gate acima. Se precisar validar tipos de um pacote isolado, rode `tsc -p <pkg>/tsconfig.json` ou `pnpm --filter <pkg> build` direto.

- **Checagem do Servidor Orca (se afetar `/api/code`):**

  ```bash
  curl -X POST http://localhost:4001/orca/exec -H "Content-Type: application/json" -d '{"command":"echo healthcheck"}'
  ```

- **Checagem do Servidor Desktop (se afetar PC Agent/Router9):**
  ```bash
  curl http://localhost:3001/health     # espera paired: true
  curl http://localhost:3001/device/tools # espera as 21 tools
  ```

### Ação 3: Gerar Relatório Pós-Execução & Bloco Brain

Após concluir as alterações e passar no gate, crie o arquivo `relatorios_agente/TASK-<ID>_<YYYYMMDD>_pos.md`:

```markdown
# 📋 Relatório Pós-Execução: TASK-<ID>

## 1. Resumo das Alterações Executadas

<Descrição das mudanças aplicadas>

## 2. Diffs e Arquivos Alterados

<Resumo do git diff>

## 3. Resultado dos Testes

- **Lint:** PASS
- **Build:** PASS
- **Testes Unitários:** PASS
- **Smoke Test Orca (se aplicável):** PASS

## 4. Métricas de UI/Performance (se aplicável)

- **FPS com Menu Aberto:** <Antes> fps -> <Depois> fps
- **Quality Loss:** ZERO (sem redução permanente de partículas/blur)
- **Memória Canvas/WebGL:** <Antes> MB -> <Depois> MB (Chrome DevTools / Performance tab)

## 5. Status Final

🟢 CONCLUÍDO COM SUCESSO

<!-- BRAIN_SYNC_START -->

- TASK_ID: TASK-<ID>
- BRANCH: <NOME_DA_BRANCH>
- STATUS: SUCCESS
- AFFECTED_FILES: [<LISTA_DE_ARQUIVOS>]
- TEST_SUMMARY: Lint: PASS | Build: PASS | Tests: PASS
- REQUIRES_SMOKE_TEST: NO

<!-- BRAIN_SYNC_END -->
```

---

## 3. Regras de Compliance (nunca regredir)

1. **Sem deploy sem o Brain:** NUNCA fazer push em `main`, deploy ou tag de release. Reportar ao Brain e aguardar a FASE D.
2. **Sem hardcode de secret:** ausência de secret = FAIL FAST, nunca valor de fallback conhecido.
3. **Sem regressão visual estática:** reduções de partículas/blur/shaders só dinamicamente via runtime (hardware detection).
4. **TEST_SUMMARY sempre com resultado real:** preencher PASS/FAIL com base no output executado, nunca em suposição.
