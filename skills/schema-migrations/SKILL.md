---
name: schema-migrations
description: Planeja e executa mudanças de schema/formato de dados de forma versionada e retrocompatível para QUALQUER projeto (não específico de um sistema) — especialmente crítico quando dados de um usuário/entidade vivem num blob único (JSON/JSONB) em vez de colunas separadas, onde mudar o formato sem migração quebra silenciosamente registros antigos. Use SEMPRE que o usuário pedir para "adicionar um campo", "mudar a estrutura de um módulo/tabela", "renomear algo no banco", ou qualquer alteração que toque no formato de dado já salvo — mesmo que pareça uma mudança pequena.
---

# Migração de Schema (geral, multi-projeto)

O risco que esta skill previne: um deploy muda o formato esperado de um dado, usuários antigos têm o formato velho salvo, e o app quebra (ou pior, corrompe silenciosamente) ao ler dados de antes da mudança. Isso é especialmente fácil de esquecer em bancos schema-less/semi-estruturados (JSON/JSONB, NoSQL), onde não existe um erro de constraint te avisando.

## Passo 0 — Classifique a mudança

Antes de codar, identifique o tipo de mudança:
- **Aditiva** (novo campo opcional, novo módulo): geralmente segura, mas ainda precisa de um valor default para registros que não têm o campo.
- **Modificativa** (renomear campo, mudar tipo, mudar estrutura de aninhamento): sempre precisa de migração explícita — nunca assuma que "todo mundo vai salvar de novo em breve".
- **Removida** (campo/módulo descontinuado): precisa decidir se apaga o dado antigo ou só para de usá-lo (mais seguro manter e ignorar, a menos que haja motivo de compliance/espaço para apagar).

## 1. Escreva a migração antes do código que a usa

- Toda mudança modificativa ou removida precisa de um script de migração versionado (numerado/datado), não uma alteração manual feita uma vez e esquecida — outro ambiente (staging, outro dev, o próprio banco de produção mais tarde) vai precisar rodar a mesma mudança de forma reprodutível.
- Para dados em blob único (JSONB/documento): a migração precisa iterar sobre os registros existentes e transformar o formato antigo para o novo, não só passar a escrever no formato novo dali pra frente — senão você tem dois formatos coexistindo e todo código de leitura precisa saber lidar com ambos indefinidamente.
- Migração deve ser idempotente (rodar duas vezes não duplica nem corrompe) — sempre existe risco de precisar rodar de novo por engano ou depois de uma falha parcial.

## 2. Retrocompatibilidade durante o rollout

- Se o deploy do backend/schema e do frontend não são atômicos (comum em PWA/mobile, onde clients antigos continuam em uso por um tempo), o código de leitura precisa aceitar os dois formatos (antigo e novo) durante uma janela de transição — não só o formato mais recente.
- Documente até quando essa compatibilidade dupla precisa ser mantida (ex: "até todos os clients terem atualizado" ou uma data-limite), pra não virar dívida técnica esquecida.

## 3. Teste a migração com dados reais (anonimizados) de staging, não só dados fictícios

- Rode a migração contra uma cópia de dados de staging que reflita o histórico real de formatos (usuários criados em versões diferentes do app tendem a ter variações que dados fictícios recém-criados não têm).
- Confirme: nenhum registro fica em estado inconsistente, nenhum dado é perdido (compare contagem de registros e uma amostra de valores antes/depois), e a migração é reversível ou pelo menos o backup pré-migração (via `release-readiness`) foi validado antes de rodar em produção.

## 4. Rollback

- Toda migração modificativa/removida precisa de um plano de rollback explícito antes de rodar em produção: reverter para o backup, ou uma migração inversa testada. "Vamos torcer para não precisar" não é um plano.

## Saída

Ao terminar, documente: o que mudou no formato, a migração usada, se há período de retrocompatibilidade dupla e até quando, e o resultado do teste contra dados de staging. Isso alimenta o checklist de `release-readiness` antes do deploy.