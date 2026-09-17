# Responda sempre em português do Brasil.

Todos os textos, mensagens e respostas da IA devem ser em pt‑BR.

## REGRA DE RESILIÊNCIA E RECUPERAÇÃO AUTOMÁTICA DE SESSÃO

### Criação de rastro em tempo real (`.task_state.md`)
- Objetivo Global: <descrição sucinta da tarefa ativa>
- Concluído: <lista de passos já executados>
- Em Andamento: <arquivo/função/módulo atual>
- Próximo Passo: <ação exata a ser executada>

### Micro‑checkpoints de Git
- Commit local a cada sub‑etapa concluída que não quebre o build.

### Protocolo de inicialização / recovery (toda nova sessão)
1. Ler `.task_state.md` (se existir).
2. Executar `git status` e `git diff`.
3. Executar `git log -n 3 --oneline`.
4. Apresentar resumo de 3 linhas ao usuário e pedir confirmação para prosseguir.

### Regra de recuperação de crash
- Antes de qualquer comando ou edição, manter `.task_state.md` atualizado com:
  - Objetivo Atual: <resumo>
  - Concluído: <lista>
  - Em Andamento: <arquivo/função>
  - Próximo Passo: <ação pendente>
