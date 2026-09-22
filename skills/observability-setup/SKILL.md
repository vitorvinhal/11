---
name: observability-setup
description: Instrumenta QUALQUER projeto com logging estruturado, captura de erros não tratados e alertas básicos para monitoramento pós-deploy (não específico de um sistema). Use SEMPRE que o usuário mencionar "monitoramento pós-deploy", "logging", "rastrear erros em produção", "saber quando algo quebra", ou quando `release-readiness` chegar no item de monitoramento e ele ainda não estiver implementado de fato — não basta escrever "monitorar" no relatório final, essa skill configura o mecanismo real.
---

# Observabilidade e Logging (geral, multi-projeto)

Sem isso, "vamos monitorar depois do deploy" é só uma frase — ninguém vê o erro até um usuário reclamar. Esta skill garante que erros em produção sejam capturados e visíveis, não silenciosos.

## Passo 0 — Detecte o que já existe

Antes de adicionar qualquer coisa nova, procure por: bibliotecas de error tracking já instaladas (Sentry, LogRocket, Rollbar, etc.), configuração de log do backend/hosting (ex: logs nativos da plataforma de deploy), e qualquer `console.error`/`try-catch` genérico já espalhado pelo código. Não duplique o que já existe — complete o que falta.

## 1. Captura de erros não tratados

- **Frontend:** listener global de erro (`window.onerror`, `window.addEventListener('unhandledrejection', ...)`) e, em apps com componentes (React/Vue), error boundaries nos pontos de entrada principais — não deixe uma exceção em um componente derrubar a tela inteira sem log.
- **Backend/API:** middleware/handler global que captura exceções não tratadas em cada rota/RPC antes de retornar erro genérico ao client, logando o erro completo no servidor (nunca expondo stack trace pro client).
- **Fila offline/mutação assíncrona (se existir):** falhas de sync devem ser logadas explicitamente, não engolidas silenciosamente — um retry que falha 10x sem log é um bug invisível.

## 2. Logging estruturado

- Prefira logs em formato estruturado (JSON com campos fixos: timestamp, nível, usuário/sessão quando aplicável, contexto) em vez de strings soltas — facilita busca depois.
- Níveis mínimos: `error` (algo quebrou), `warn` (comportamento inesperado mas recuperável), `info` (eventos de negócio relevantes: login, criação de registro importante). Não logue dado sensível (senha, token, dado financeiro completo) — mascare ou omita.
- Se o projeto já usa uma ferramenta de terceiros (Sentry etc.), configure para capturar contexto útil: usuário (id, não PII completo), rota/ação, versão do build — sem isso, o erro reportado não é acionável.

## 3. Alertas básicos

- Defina pelo menos um canal de alerta para erros críticos (ex: taxa de erro acima de X, uma exceção específica de pagamento/dado financeiro) — não precisa ser sofisticado, mas precisa notificar alguém, não só acumular em um dashboard que ninguém olha.
- Diferencie "erro que precisa de ação imediata" de "erro que só precisa ficar registrado" — alertar para tudo gera fadiga e as pessoas param de prestar atenção.

## 4. Validação

Depois de instrumentar, force um erro de propósito (em staging) em cada camada — frontend, backend, fila assíncrona — e confirme que ele aparece no sistema de log/alerta configurado. Se não aparecer, a instrumentação não está completa, mesmo que o código pareça certo.

## Saída para o relatório de release

Ao alimentar o relatório final de `release-readiness`, substitua "monitoramento pós-deploy: sim" por: onde os erros aparecem, quem é notificado e como, e quais camadas foram validadas nesta etapa.