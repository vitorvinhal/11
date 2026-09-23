# Modelo de Dados (Supabase)

## Tabelas

### `profiles`
Extensão de `auth.users`. Campos: avatar, username, role (`admin` | `familia`), permissões de módulo (quais módulos este usuário enxerga).

```sql
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'family' CHECK (role IN ('admin', 'family')),
  username TEXT,
  avatar TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### `user_data`
Uma linha (ou uma linha por usuário/família, conforme escopo de dados compartilhados) com colunas JSONB por seção:

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `clothing_store` | jsonb | Loja de roupas |
| `home_expenses` | jsonb | Despesas de casa |
| `digital_agency` | jsonb | Agência digital |
| `lotteries` | jsonb | Loterias |

```sql
CREATE TABLE IF NOT EXISTS public.user_data (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  section TEXT NOT NULL CHECK (section IN ('clothingStore', 'homeExpenses', 'digitalAgency')),
  payload JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, section)
);
```

**Regra:** novos módulos entram como nova coluna JSONB nesta tabela, **não** como tabela relacional nova, **a menos que**:
- Precisem de índice/consulta pesada que JSONB não resolve bem, OU
- Guardem segredos/credenciais (caso do `shop_connections`), OU
- O volume de linhas for claramente maior que "um registro por família" (ex: histórico de milhares de vendas pode justificar tabela própria — avaliar com o usuário antes de decidir).

### `shop_connections`
Tokens OAuth de Shopee/TikTok Shop. Nunca expor `client_secret` nem `refresh_token` para o client — toda leitura/escrita desses campos passa por Edge Function.

```sql
CREATE TABLE IF NOT EXISTS public.shop_connections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('shopee', 'tiktok')),
  shop_id TEXT,
  status TEXT DEFAULT 'disconnected' CHECK (status IN ('connected', 'disconnected', 'error', 'expired')),
  partner_id TEXT,
  partner_key TEXT,
  access_token TEXT,
  refresh_token TEXT,
  token_expires_at TIMESTAMPTZ,
  warehouse_id TEXT,
  redirect_uri TEXT,
  app_id TEXT,
  app_secret TEXT,
  last_synced_at TIMESTAMPTZ,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, platform)
);
```

---

## RPCs

### `claim_first_admin`
A primeira conta criada no sistema vira admin automaticamente. Deve ser idempotente e falhar silenciosamente (ou com erro claro) se já existe um admin.

### `admin_create_user`
Só admin pode criar novos usuários; define role e permissões de módulo no momento da criação.

---

## RLS (Row Level Security)

- Habilitada em **TODAS** as tabelas, sem exceção.
- Políticas mínimas por tabela: `SELECT`, `INSERT`, `UPDATE` restritas ao próprio usuário/família (via `auth.uid()`), exceto ações explicitamente de admin.
- **Nunca** desabilitar RLS "temporariamente" para debug em produção.

---

## Realtime

- Replicação real-time habilitada nas tabelas relevantes para sync entre dispositivos.
- Ao aplicar mutações vindas da fila offline, **mutar** (silenciar) o listener de realtime durante o processo de sync para evitar loop de atualização (escrever → ouvir a própria escrita → re-processar).

---

## Índices

- Otimizar índices para os filtros mais usados por módulo: data, categoria, canal de venda (loja), status (agência).
- Ao adicionar um filtro novo na UI, checar se precisa de índice correspondente.

---

## Segurança de senha (auth)

- Regra mínima: 12+ caracteres, maiúscula, minúscula, número, símbolo.
- Indicador de força de senha na UI de criação/alteração.
- Detecção de senha padrão/fraca (ex: bloquear senhas óbvias tipo "123456", nome do app, etc.) antes de aceitar.
