---
name: feature-flags
description: Implementa feature flags e rollout gradual (liberar uma funcionalidade nova para um subconjunto de usuários antes de virar padrão) para QUALQUER projeto (não específico de um sistema). Use SEMPRE que o usuário pedir para "lançar aos poucos", "testar com alguns usuários antes", "esconder uma feature até estar pronta", "reverter uma feature rapidamente se der problema", ou quando uma funcionalidade nova for arriscada o suficiente para não valer o tudo-ou-nada de um deploy direto — mesmo que o usuário não use o termo "feature flag".
---

# Feature Flags e Rollout Gradual (geral, multi-projeto)

O objetivo é desacoplar **deploy de código** de **liberação da funcionalidade** — o código vai pra produção, mas só é ativado para quem você escolher, e pode ser desligado instantaneamente sem precisar reverter um deploy.

## Passo 0 — A feature precisa mesmo de flag?

Nem toda mudança justifica isso — tem custo de complexidade. Use flag quando pelo menos um for verdade:
- A mudança é arriscada (toca em dado existente, muda um fluxo crítico como login/pagamento).
- Você quer validar com um grupo pequeno antes de todo mundo ver.
- Você quer poder desligar instantaneamente se algo der errado, sem precisar de um novo deploy.
- É uma mudança visual/UX grande (ex: layout novo) onde reação do usuário importa antes de virar padrão.

Se a mudança é pequena e de baixo risco, um deploy direto é mais simples e a flag só adiciona complexidade sem benefício real.

## 1. Onde guardar o estado da flag

- Simples (poucas flags, controle manual): uma tabela/registro central (`feature_flags` com nome, ativa/inativa, e critério de quem vê) — evita reduzir a lógica de rollout a "editar uma constante no código e fazer deploy de novo", que anula o benefício.
- Critério de quem vê a flag: pode ser por porcentagem de usuários (hash do id do usuário mod N), lista explícita de usuários (ex: internos/beta testers primeiro), ou por atributo (ex: só contas criadas depois de X data).
- Guarde o estado no servidor, não só no client — um client malicioso ou desatualizado não deve conseguir ativar uma flag sozinho.

## 2. Implementação no código

- Envolva a funcionalidade nova num check simples (`if (flagAtiva) { novo } else { antigo }`), mantendo os dois caminhos funcionando em paralelo até a flag ser removida — não delete o caminho antigo até o rollout estar 100% e estável.
- Evite lógica de flag espalhada em múltiplos lugares do código para a mesma feature — centralize a checagem (uma função/hook) para não esquecer um lugar quando for reverter.
- Se a feature envolve dado persistido (ex: preferência de tema/layout), o dado salvo por quem já usou a feature nova precisa continuar legível se a flag for desligada de novo — coordene com `schema-migrations` se a feature muda formato de dado.

## 3. Processo de rollout

1. Ative para você mesmo/equipe interna primeiro.
2. Ative para uma fração pequena de usuários reais (ex: 5-10%), monitorando erros (via `observability-setup`) e feedback direto.
3. Aumente gradualmente se estável, com um critério claro de "o que faria eu reverter" definido *antes* de começar (ex: taxa de erro acima de X, reclamações específicas) — não decidir isso no meio do susto.
4. Quando 100% e estável por um tempo razoável, remova o código do caminho antigo e a checagem de flag — uma flag esquecida vira dívida técnica permanente.

## 4. Teste

- Confirme que a flag realmente restringe acesso no servidor (não só esconde um botão no frontend — teste chamando a funcionalidade nova diretamente sem passar pela flag do client).
- Teste o caminho de desligar a flag com a feature já em uso: usuários que já geraram dado no formato novo não podem quebrar ao voltar pro caminho antigo.

## Saída

Documente: nome da flag, critério de quem vê, critério de reversão definido antes do rollout, e em que estágio do rollout está — isso é relevante tanto pro relatório de `release-readiness` quanto pra decisão de quando remover a flag depois.