# Regras de Conduta do Agente

Referência: `docs/AGENTE.md` (protocolo completo) e `agent/system_prompt.md` (System Prompt oficial).

## Regra Absoluta do Fluxo de Trabalho

Nenhuma linha de código ou arquivo de projeto pode ser alterada sem que o seguinte ciclo seja estritamente respeitado:

```
[1. RECEBER ID DA TAREFA]
         ↓
[2. GERAR PLANO PRÉ-ALTERAÇÃO (.md)]  <-- Salvo em relatorios_agente/
         ↓
[3. EXECUTAR ALTERAÇÕES & REGISTRAR ERROS EM TEMPO REAL]
         ↓
[4. ATUALIZAR RELATÓRIO PÓS-ALTERAÇÃO (.md)]
```

## Regras

- **Plano antes de código:** todo ID de tarefa (ex.: `TASK-123`) exige plano Markdown pré-alteração em `relatorios_agente/ID_[TASK_ID]_[TIMESTAMP]_plano.md` antes de criar, editar ou deletar qualquer arquivo.
- **Log em tempo real:** erros, exceptions e avisos durante a execução devem ser registrados imediatamente no `.md` da tarefa.
- **Pós-alteração obrigatório:** ao concluir, atualizar o rodapé do `.md` com Status Final (`🟢 CONCLUÍDO COM SUCESSO` ou `🔴 FINALIZADO COM ERROS`) e resumo das alterações.
- **Idioma:** respostas e relatórios ao usuário em pt-BR. Código, logs e commits podem ficar em inglês.

## Estrutura dos relatórios

- Estágio 1 (pré): plano com Objetivo Geral, Metas, Roteiro, arquivos afetados.
- Estágio 2 (durante): diário de execução com erros/anexos.
- Estágio 3 (pós): status final + resumo das alterações efetivadas + ocorrências resolvidas.