---
name: fn-dash
description: >
  Use SEMPRE que o usuário pedir para criar, adicionar, corrigir ou
  expandir qualquer parte do sistema FN Dash — loja de roupas, despesas
  de casa, agência digital, loterias, dashboard, exportação CSV/Excel/PDF,
  integrações Shopee/TikTok Shop, modo offline, Capacitor, design system
  Purple Noir, Supabase Auth/DB. Mesmo que peça só "adiciona um módulo",
  "cria uma tela de despesas", "faz o dashboard", "exporta pra PDF",
  "integra com Shopee" ou qualquer feature das seções abaixo.
---

# FN Dash — Skill de Construção do Sistema

Esta skill encapsula as decisões de arquitetura do FN Dash para que qualquer trabalho novo (nova tela, novo módulo, bugfix, refactor) siga os MESMOS padrões já estabelecidos — como se a mesma pessoa/IA estivesse construindo o sistema inteiro do início ao fim.

## Como usar esta skill

1. **Leia primeiro** a seção "Stack & Arquitetura" abaixo — isso não muda entre tarefas.
2. **Depois leia só o(s) reference file(s) relevante(s)** para a tarefa pedida (tabela de roteamento abaixo). Não carregue tudo de uma vez — a maioria das tarefas toca 1-2 arquivos de referência.
3. Se o usuário estiver **começando do zero**, siga "Ordem de Construção Recomendada" no final.
4. Se o usuário já tem código existente, primeiro rode **view** na estrutura de pastas antes de assumir convenções — este SKILL.md descreve o padrão-alvo, não necessariamente o que já existe no repo do usuário.

---

## Stack & Arquitetura (sempre válido)

| Camada | Tecnologia |
|--------|------------|
| **Frontend** | SPA (React ou vanilla+Chart.js conforme o projeto já iniciado) + Service Worker (PWA) |
| **Backend** | Supabase (Postgres + Auth + Realtime + Edge Functions). Nenhuma lógica de servidor customizada fora de Supabase. |
| **Mobile** | Capacitor empacotando o mesmo build web (Android via APK, iOS via fndash-ios) |
| **Autenticação** | Supabase Auth (login/senha). Dois roles: `admin` e `familia`. NUNCA criar um terceiro sistema de auth paralelo. |
| **Dados** | Guardados em uma única tabela `user_data` (JSONB), uma seção por módulo (`clothingStore`, `homeExpenses`, `digitalAgency`, etc.) — não criar uma tabela SQL nova por módulo a menos que o volume/consulta exija. |
| **Tema** | Dark mode "Purple Noir" é o padrão; light mode é opcional secundário. |
| **Segredos** | Client secret, tokens OAuth e refresh tokens NUNCA tocam o browser — sempre via Edge Function. |

---

## Tabela de roteamento — qual reference ler

| Pedido do usuário envolve... | Reference file |
|-------------------------------|----------------|
| Cores, tipografia, cards, modais, toasts, badges, "visual", "tema", CSS | `references/design-system.md` |
| Tabelas Supabase, RLS, RPCs, estrutura de user_data, JSONB, permissões por módulo | `references/data-model.md` |
| Loja de roupas, despesas de casa, agência digital, loterias, cálculo de lucro/orçamento/MRR | `references/modules.md` |
| Shopee, TikTok Shop, OAuth, webhooks, sync de pedidos/estoque | `references/integrations.md` |
| Offline, service worker, fila de mutação, real-time, Capacitor, APK, PWA/manifest | `references/offline-and-mobile.md` |
| Exportação CSV/Excel/PDF, importação JSON, comprovantes, paginação, filtros | `references/data-io.md` |
| Notificações, alertas, WhatsApp/Email share, atalhos de teclado, acessibilidade, animações | `references/ux-and-notifications.md` |

---

## Convenções transversais (aplicam-se a QUALQUER módulo novo)

Ao criar um módulo novo ou tela nova, **sempre implementar** (nesta ordem de prioridade):

1. **Schema de dados** dentro de `user_data.<secao>` (ver `data-model.md`) + política RLS.
2. **Permissão de módulo** no painel de admin (todo módulo é opt-in por usuário).
3. **CRUD** com paginação de 8 itens/página, busca por texto, filtros por data/categoria.
4. **Cálculos financeiros derivados** (lucro, saldo, MRR etc.) — nunca armazenar valor calculado sem também guardar os campos-fonte.
5. **Exportação CSV/Excel/PDF** seguindo o padrão de `data-io.md`.
6. **Alertas relevantes** (vencimento, estoque baixo, meta) registrados no sistema central de notificações — não criar um sistema de alerta isolado por módulo.
7. **Estados vazio/loading/erro** com toast padrão do design system.
8. **Acessibilidade**: labels em inputs, `aria-live` para updates, foco em modais.
9. **Suporte offline**: toda escrita passa pela fila de mutação, nunca grava direto ignorando o padrão de sync.

---

## Ordem de Construção Recomendada (projeto do zero)

1. Supabase: schema (`data-model.md`) + RLS + RPCs `claim_first_admin`, `admin_create_user`.
2. Auth + perfis + gerenciamento de permissões por módulo.
3. Design system base (`design-system.md`) + sidebar/navegação + tema.
4. Dashboard/Overview com KPIs mockados.
5. Um módulo completo por vez (recomendado: Despesas de Casa primeiro, é o mais simples; Loja de Roupas depois, por ser o mais complexo).
6. Sistema de notificações central.
7. Exportação/relatórios.
8. Integrações Shopee/TikTok (só depois do core estável — dependem de Edge Functions).
9. Offline/PWA/Capacitor por último — exige que o resto do app já esteja estável, pois a fila de mutação precisa saber a forma final de cada escrita.

> **Não pule para offline/integrações antes do core CRUD + auth estarem sólidos** — são as partes mais caras de refatorar depois.

---

## Arquivos de referência

- `references/design-system.md` — Design System "Purple Noir"
- `references/data-model.md` — Modelo de Dados (Supabase)
- `references/modules.md` — Módulos de Negócio
- `references/integrations.md` — Integrações (Shopee & TikTok Shop)
- `references/offline-and-mobile.md` — Offline, PWA e Mobile
- `references/data-io.md` — Exportação, Importação, Comprovantes, Paginação e Filtros
- `references/ux-and-notifications.md` — Notificações, Acessibilidade, Erros
