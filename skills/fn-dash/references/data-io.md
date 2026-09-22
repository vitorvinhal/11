# Exportação, Importação, Comprovantes, Paginação e Filtros

## Exportação (padrão em todo módulo com listagem)

| Formato | Biblioteca | Uso |
|---------|-----------|-----|
| **CSV** | Nativo | Sempre disponível, é o formato mais barato de gerar — implementar primeiro. |
| **Excel** | SheetJS (xlsx) | Para exportação em planilha. |
| **PDF** | jsPDF | Usado principalmente para o "relatório mensal" (não para listas brutas — PDF é para relatório formatado, CSV/Excel são para dado bruto). |

---

## Importação

- Apenas JSON, e apenas onde o usuário pedir explicitamente — não expor importação em todo módulo por padrão, é uma feature de poucos módulos (ex: Loja de Roupas).

---

## Comprovantes

- Upload de imagem ou PDF.
- Imagens são comprimidas no client antes do upload: canvas, máx. 900px no maior lado, JPEG qualidade 70% — isso evita estourar limite de storage do Supabase com fotos de celular em resolução total.
- UI mostra um "chip" de comprovante anexado no item da lista (não abre automaticamente — usuário clica para visualizar).

---

## Paginação

Padrão fixo: **8 itens por página** em toda listagem do sistema — não variar por módulo, mantém a UI previsível.

- Navegação anterior/próxima + indicador "Exibindo X-Y de Z".

```javascript
const PAGE_SIZE = 8;

function paginated(list, key) {
  const page = paginationPage[key] || 0;
  const start = page * PAGE_SIZE;
  return {
    items: list.slice(start, start + PAGE_SIZE),
    total: list.length,
    page,
    totalPages: Math.ceil(list.length / PAGE_SIZE)
  };
}
```

---

## Filtros

Disponíveis conforme o módulo, mas usar **sempre o mesmo componente** de filtro.

| Filtro | Disponível em |
|--------|---------------|
| Por mês | Todos |
| Por dia exato | Todos |
| Por intervalo de datas | Todos |
| Por categoria | Todos com categorias |
| Por canal de venda | Só Loja de Roupas |
| Busca por texto livre | Todos com listagem |

### Comportamento
- Combinar filtros deve ser **aditivo (AND)**, não exclusivo — usuário pode filtrar categoria + intervalo de data ao mesmo tempo.

---

## Calendário

- Visualização de vencimentos (contas, domínio/hospedagem, parcelas) num calendário com navegação por offset de mês.
- Indicadores visuais nos dias que têm evento — sem abrir detalhe automaticamente, só sinaliza.
