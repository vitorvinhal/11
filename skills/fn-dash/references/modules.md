# Módulos de Negócio

Cada módulo abaixo é uma seção JSONB em `user_data` (ver `data-model.md`) e segue as Convenções Transversais do SKILL.md principal (paginação, filtros, export, alertas, etc.) além do que é descrito aqui.

---

## Dashboard / Overview

- Agrega KPIs de TODOS os módulos ativos do usuário (receita loja, despesas casa, MRR agência) — nunca hardcoded; se um módulo está desativado para o usuário (permissão), seu card some do dashboard.
- Gráficos com Chart.js.
- Lista consolidada de alertas/lembretes vindos do sistema central de notificações (não duplicar lógica de alerta aqui).

---

## Loja de Roupas

### Campos de produto
- nome, preço, custo, comissão%, frete, SKU, categoria (15+ categorias: Camisas, Vestidos, Calças, Casacos, Acessórios, Maquiagem, Perfumes...), estoque, estoque mínimo, múltiplas imagens, links Shopee/TikTok.

### Canais de venda
Loja Física, Online, Shopee, TikTok Shop, Atacado — todo registro de venda tem canal associado, pois relatórios/filtros dependem disso.

### Fórmula de lucro real (não simplificar)

```
lucro = (preço - custo) × (1 - comissão%) - frete
```

Guardar histórico de vendas (`salesHistory`) com quantidade, preço unitário no momento da venda (não referenciar preço atual do produto — preço muda com o tempo) e lucro calculado no momento da venda.

### Parcelamento de compras (fornecedor)
Com rastreamento de parcelas pagas — mesmo padrão de parcelamento usado em Despesas de Casa, reutilizar o mesmo componente/lógica.

### Alerta de estoque baixo
Dispara quando `estoque <= minEstoque`.

---

## Despesas de Casa

### Configuração
- Salário mensal, limite de orçamento, chave PIX (para gerar QR Code de pagamento).

### 8 categorias fixas
1. Contas Fixas
2. Supermercado
3. Manutenção Carro
4. Financiamento Carro
5. Lazer & Restaurantes
6. Saúde & Farmácia
7. Diversos & Imprevistos
8. Crediário/Cartão

### Regras
- Contas fixas recorrentes: gerar automaticamente todo mês (job/trigger, não depender do usuário lembrar de criar).
- Parcelamento com rastreamento (ex: financiamento de carro em 48x) — componente compartilhado com Loja de Roupas.
- Orçamento variável por categoria: sempre mostrar gasto-vs-budget, não só o gasto absoluto.
- Metas de economia.
- Manutenção do carro: km, data, custo, status — tratado como sub-registro dentro do módulo, não módulo separado.
- Fechamento de caixa diário.
- Regras de categorização automática (ex: por palavra-chave na descrição do lançamento).
- Alertas de vencimento: 7 dias antes E quando já atrasada — dois estados de alerta distintos, não um só.

---

## Agência Digital

### Campos de cliente
- nome, status (Ativo | Em Desenvolvimento), tipo de serviço, mensalidade (MRR), valor único, data de vencimento, domínio (com vencimento próprio), hospedagem (com vencimento próprio), website, data de início do contrato.

### Regras
- MRR total = soma das mensalidades de clientes com status Ativo (não somar clientes "Em Desenvolvimento").
- Despesas da agência (servidores, licenças, software) tratadas separadamente da receita, para permitir margem líquida no dashboard.
- Alertas independentes para: renovação de domínio, renovação de hospedagem, vencimento de MRR — três tipos de alerta distintos, mesma UI de alerta do sistema central.

---

## Loterias

Módulo mais simples: rastreamento de apostas, histórico de resultados, estatísticas. Não tem fluxo financeiro tão profundo quanto os outros — trate como CRUD + histórico, sem necessidade de cálculo de lucro/margem a menos que o usuário peça.
