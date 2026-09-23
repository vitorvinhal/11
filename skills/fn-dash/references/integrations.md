# Integrações (Shopee & TikTok Shop)

## Regra de ouro
**Client secret e refresh de token NUNCA rodam no browser.** Todo fluxo OAuth e todo refresh de token passa por Supabase Edge Function. O client só recebe um token de curta duração ou nada — nunca o segredo.

---

## Fluxo OAuth (mesmo padrão para Shopee e TikTok Shop)

1. Client pede à Edge Function a URL de autorização.
2. Usuário autoriza no site da plataforma (Shopee/TikTok).
3. Callback bate na Edge Function, que troca o código por tokens e grava em `shop_connections` (nunca no client).
4. Client apenas consulta o **status** da conexão: `connected` | `disconnected` | `error` | `expired`.

---

## Multi-loja

Um usuário pode ter mais de uma loja conectada por plataforma — `shop_connections` precisa suportar N conexões por usuário/plataforma, não assumir 1:1.

---

## Sincronização

- **Sync de pedidos, produtos e estoque** — cada um é uma operação separada (podem falhar independentemente; não acoplar as três num único job atômico).
- **Webhook** de recebimento para eventos em tempo real da plataforma (ex: novo pedido) — processar no Edge Function, nunca expor endpoint de webhook direto pro client escrever.
- **Refresh de token automático** quando expira, também via Edge Function — client nunca deve tentar renovar token diretamente.

---

## Ao adicionar uma nova plataforma de venda

Seguir o mesmo esqueleto:
1. Edge Function para OAuth + refresh
2. Tabela `shop_connections` com nova linha de plataforma
3. Status de conexão exposto ao client
4. Sync de pedidos/produtos/estoque como jobs separados
5. Webhook tratado no backend
