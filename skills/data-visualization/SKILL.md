---
name: data-visualization
description: Visualização de dados, gráficos, tabelas e dashboards interativos. Use quando precisar criar gráficos, tabelas de dados, KPIs, sparklines, ou qualquer elemento que visualize dados de forma clara e acessível.
---

# Data Visualization

Padrões para visualização de dados em dashboards e aplicações.

## Tipos de Gráficos

### 1. Line Charts
- **Uso**: Tendências ao longo do tempo
- **Dados**: Séries temporais
- **Exemplos**: Receita mensal, despesas semanais

### 2. Bar Charts
- **Uso**: Comparação entre categorias
- **Dados**: Categorias discretas
- **Exemplos**: Vendas por produto, despesas por tipo

### 3. Pie/Donut Charts
- **Uso**: Proporções de um todo
- **Dados**: Percentuais
- **Exemplos**: Distribuição de receita, categorias de despesas

### 4. Area Charts
- **Uso**: Volume acumulado
- **Dados**: Séries temporais com acumulação
- **Exemplos**: Acumulado de vendas, saldo ao longo do tempo

### 5. Sparklines
- **Uso**: Tendência compacta
- **Dados**: Mini série temporal
- **Exemplos**: Em KPI cards, tabelas

## KPI Cards

### Estrutura
```html
<div class="kpi-card">
  <div class="kpi-header">
    <span class="kpi-label">Receita Total</span>
    <span class="kpi-trend positive">+12.5%</span>
  </div>
  <div class="kpi-value">R$ 45.231,00</div>
  <div class="kpi-sparkline">
    <!-- Mini gráfico -->
  </div>
</div>
```

### CSS
```css
.kpi-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
}

.kpi-value {
  font-size: var(--text-3xl);
  font-weight: 700;
  font-family: var(--font-mono);
}

.kpi-trend {
  font-size: var(--text-sm);
  font-weight: 600;
}

.kpi-trend.positive { color: var(--green); }
.kpi-trend.negative { color: var(--red); }
```

## Tabelas

### Estrutura
```html
<table class="data-table">
  <thead>
    <tr>
      <th>Data</th>
      <th>Descrição</th>
      <th>Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01/08/2026</td>
      <td>Venda #1234</td>
      <td class="amount positive">+R$ 1.250,00</td>
    </tr>
  </tbody>
</table>
```

### Responsiva (Card no Mobile)
```css
@media (max-width: 768px) {
  .data-table thead { display: none; }
  
  .data-table tr {
    display: block;
    margin-bottom: var(--space-4);
    padding: var(--space-4);
    background: var(--bg-card);
    border-radius: var(--radius-md);
  }
  
  .data-table td {
    display: flex;
    justify-content: space-between;
    padding: var(--space-2) 0;
  }
  
  .data-table td::before {
    content: attr(data-label);
    font-weight: 600;
    color: var(--text-secondary);
  }
}
```

## Cores para Dados

### Paleta Semântica
```css
:root {
  --data-1: #3B82F6; /* Azul */
  --data-2: #10B981; /* Verde */
  --data-3: #F59E0B; /* Amarelo */
  --data-4: #EF4444; /* Vermelho */
  --data-5: #8B5CF6; /* Roxo */
  --data-6: #EC4899; /* Rosa */
}
```

### Uso
- **Positivo**: Verde (`--green`)
- **Negativo**: Vermelho (`--red`)
- **Neutro**: Azul/Cinza
- **Alerta**: Amarelo/Laranja

## Formatação

### Números
```javascript
// Moeda brasileira
const formatCurrency = (value) => 
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

// Porcentagem
const formatPercent = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 1
  }).format(value / 100);

// Número compacto
const formatCompact = (value) =>
  new Intl.NumberFormat('pt-BR', {
    notation: 'compact',
    compactDisplay: 'short'
  }).format(value);
```

### Datas
```javascript
const formatDate = (date) =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(date));

const formatDateTime = (date) =>
  new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(new Date(date));
```

## Acessibilidade

- **Labels**: sempre associar dados a labels
- **Cores**: não usar cor como único indicador (usar ícones/texto)
- **Contraste**: garantir 4.5:1 para texto
- **Tooltips**: informações extras ao hover/focus
- **Tabelas**: usar `<caption>`, `<th scope>`, `aria-label`

## Performance

- **Lazy loading**: carregar gráficos abaixo da dobra
- **Virtualização**: para tabelas grandes
- **Debounce**: em filtros e buscas
- **Cache**: armazenar dados processados