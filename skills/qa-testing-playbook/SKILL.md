---
name: qa-testing-playbook
description: Playbook geral de testes de segurança, concorrência, resiliência offline/rede e performance para QUALQUER sistema que o usuário estiver construindo (não específico de um projeto) — web app, API, mobile, multi-usuário, com ou sem banco compartilhado. Use SEMPRE que o usuário pedir para "testar", "validar antes de lançar", "rodar stress test", "verificar segurança/IDOR", "testar race condition/concorrência", "testar offline", "checar memory leak", "testar responsividade" em qualquer projeto — mesmo que peça só "roda os testes" ou "valida que tá tudo certo". Gera scripts automatizados executáveis e adapta os testes à arquitetura real do repo em questão, nunca aplica um checklist genérico sem antes olhar o código.
---

# Playbook de QA e Testes (geral, multi-projeto)

Esta skill não assume uma stack fixa. O primeiro passo é sempre entender a arquitetura real do projeto em questão e SÓ DEPOIS adaptar os testes abaixo a ela — os riscos mudam dependendo de como os dados são guardados e sincronizados.

## Passo 0 — Identifique os pontos de risco do projeto atual

Antes de escrever qualquer teste, responda (lendo o código, não assumindo):
1. Onde ficam os dados de cada usuário? Uma tabela por entidade, ou um blob único (JSON/JSONB) por usuário guardando vários módulos juntos? **Blob único é o padrão de maior risco de concorrência** — qualquer escrita concorrente pode sobrescrever partes do blob que não foram tocadas por aquela escrita específica.
2. Existe controle de acesso por linha (RLS, middleware de auth, checagem manual por `user_id`)? Onde é aplicado — no client, na API, ou nos dois?
3. O app funciona offline? Existe fila de mutação/sync? Como ela resolve conflitos ao reconectar?
4. Existem preferências de UI (tema, layout, densidade) que alternam estado global repetidamente? Isso é candidato a memory leak.
5. Existe alguma stack específica com skill própria já carregada nesta conversa (ex: uma skill de arquitetura do projeto)? Se sim, leia-a primeiro — ela pode já responder as perguntas acima.

## Regra geral

Todo teste deve ser um **script automatizado e repetível**, salvo em `tests/qa/` (ou equivalente do projeto), com saída de PASS/FAIL clara e números — nunca "testei manualmente e parece ok". Rode sempre contra staging/ambiente de teste, nunca produção, e nunca contra dados reais de usuários.

Ferramentas por tipo de projeto (adapte, não é fixo):
- Web app com backend HTTP/DB: chamadas diretas à API/SDK do banco (ex: cliente do Postgres/Supabase/Firebase/Mongo) para simular múltiplos usuários/sessões.
- Frontend browser: Playwright/Puppeteer para simular usuário real, DevTools Protocol para heap/memória e emulação de rede.
- API pura: requisições HTTP concorrentes (ex: `Promise.all` com múltiplos tokens/sessões).

---

## 1. Segurança — Auth, IDOR e controle de acesso

**Objetivo:** um usuário nunca acessa/altera dados de outro, e endpoints privilegiados (admin) rejeitam quem não tem permissão.

1. Crie 2+ usuários/contas de teste com papéis diferentes se o app tiver roles.
2. Autenticado como usuário B, tente:
   - Ler/editar registros pertencentes ao usuário A trocando IDs na URL, no body da requisição, ou em parâmetros de RPC/query.
   - Chamar endpoints/RPCs restritos a admin.
   - Confiar em qualquer campo `user_id`/`owner_id` vindo do client em vez de derivado do token de autenticação no servidor.
3. Se o banco suporta row-level security (Postgres RLS e similares), confirme que **toda** tabela com dado sensível tem a policy ativa — não só as tabelas "principais". Uma tabela nova adicionada depois é o erro mais comum aqui.

**Critério de PASS:** toda tentativa de acesso cruzado retorna vazio/403, nunca dado de outro usuário, nunca erro 500 que vaza estrutura interna (stack trace, nomes de tabela/coluna).

## 2. Sanitização de Inputs

- Injete em todo campo de texto: `<script>alert(1)</script>`, tentativas de SQL/NoSQL injection, JSON malformado, strings gigantes, unicode/emoji exótico, tipo errado (string onde espera número, null onde espera obrigatório).
- Verifique: o dado é rejeitado com erro claro ou armazenado sanitizado — e ao ser exibido de volta, não executa como HTML/JS (teste renderizando de fato, não só olhando o banco).
- Validação client-side nunca é suficiente sozinha — confirme que o servidor também rejeita/sanitiza, testando direto contra a API/RPC sem passar pela UI.

## 3. Concorrência / Race Conditions

**Objetivo:** duas escritas quase simultâneas no mesmo registro (ou no mesmo blob compartilhado) não perdem dados silenciosamente.

1. Identifique o(s) registro(s) onde múltiplos campos/itens convivem no mesmo objeto salvo de uma vez (blob JSON, documento, linha com vários campos editáveis independentemente).
2. Dispare N escritas simultâneas (N ≥ 10) que cada uma altera uma parte diferente do mesmo registro (ex: adicionar itens diferentes a uma mesma lista).
3. Após todas resolverem, confirme que **todas as N alterações estão presentes** — não só a que "venceu" por último.
4. Repita alterando o mesmo campo (não itens diferentes) para verificar se o padrão é last-write-wins (aceitável se documentado) versus perda de outros campos que a escrita nem deveria ter tocado (bug real).

**Se houver perda de dados fora de um campo diretamente conflitante:** é um bug de arquitetura — a escrita precisa de merge atômico no servidor/banco (não "ler no client, mesclar no client, sobrescrever tudo"). Reporte com prioridade alta, separado de bugs de UI.

## 4. Resiliência Offline/Rede Instável

Aplica-se sempre que o app tiver algum tipo de cache local, fila de sincronização, ou tolerância a queda de conexão.

- Simule offline (emulação de rede do browser/DevTools, ou desligar o backend em teste).
- Com o app offline, faça múltiplas mutações (criar, editar, apagar).
- Reconecte e aguarde a sincronização. Verifique: todas as mutações aplicadas exatamente uma vez, sem duplicatas, na ordem que reflete a intenção do usuário (ex: criar-depois-editar offline resulta no estado editado, não nos dois).
- Derrube a conexão de novo **no meio** da sincronização para simular rede instável, não só um corte limpo.
- Se o app é multi-dispositivo: teste edição offline em dois dispositivos do mesmo usuário simultaneamente — isso combina o risco da seção 3 com o de rede, e costuma ser onde bugs reais aparecem.

## 5. Performance / Memory Leaks

Aplica-se a qualquer estado de UI alternado repetidamente (tema, layout, filtros, abas).

- Via Playwright + DevTools Protocol: heap snapshot inicial → alternar o estado 50-100x programaticamente → forçar garbage collection → heap snapshot final.
- Critério de PASS: crescimento de heap entre snapshots é estável/platô, não linear e contínuo (pequeno crescimento por cache é normal; crescimento sem limite indica leak, geralmente listener de evento não removido).
- Reporte números reais: heap inicial, heap final, contagem de listeners ativos antes/depois — nunca "não notei lag".

## 6. Responsividade

- Não invente breakpoints — leia o design system/CSS do projeto para pegar os valores reais definidos.
- Via Playwright, capture screenshots das telas principais em cada breakpoint real, para cada variante de layout que existir.
- Verifique overflow horizontal, texto cortado, elementos sobrepostos.

---

## Relatório de saída (sempre)

Para cada seção rodada: script usado, quantas iterações, resultado com números (PASS/FAIL), e se FAIL, o bug específico com passos para reproduzir. "Tudo passou" sem números por trás não é um resultado válido — é isso que alimenta a skill `release-readiness` na hora de decidir se libera o deploy.