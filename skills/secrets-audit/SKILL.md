> Segue também as regras de `destructive-operations-safety` (dry-run, backup, Git, distinção restaurado/recriado, hash antes de chamar de duplicata) — não repita essa lógica aqui, só aplique.

# Auditoria de Segredos (geral, multi-projeto)

Complementa uma revisão de RLS genérica — RLS correta não é o mesmo que
segredo protegido. RLS isola *quem* pode ver uma linha; não impede que o
valor fique em texto puro em disco, em backups, em replication streams,
ou visível pra quem tem acesso direto ao banco (dono do projeto, uma
service role vazada, etc.).

## 1. Levantar onde segredos são guardados

Procure por padrões de nome de coluna/campo, não só o óbvio `token`:
`access_token`, `refresh_token`, `api_key`, `secret`, `client_secret`,
`partner_key`, `app_secret`, `password` (fora do hash gerenciado pelo
Auth), `webhook_secret`, `private_key`.

Onde olhar:
- Colunas de tabela (schema SQL, migrations)
- `localStorage`/`sessionStorage` no frontend (ex: `grep` por `setItem`)
- Arquivos de config commitados (`config.js`, `.env` que não deveria estar
  no repo)
- Logs de Edge Function / server — um `console.log` de payload inteiro
  em um endpoint de OAuth callback é um vazamento clássico

## 2. Classificar cada achado

Nem todo valor sensível-parecido é um achado real:
- **Achado real:** segredo de terceiro (token OAuth, client secret) em
  texto puro numa tabela acessível via RLS a um usuário comum, ou lido
  fora de um contexto server-only.
- **Risco aceito, não achado:** `anon key` do Supabase em `config.js` —
  é pública por design, protegida por RLS. Não reporte como se fosse
  vazamento; mas confirme que RLS de fato existe nas tabelas que ela
  acessa.
- **Achado de RPC, não de coluna:** função `SECURITY DEFINER` que aceita
  um `p_user_id`/`p_target_id` como parâmetro sem comparar com
  `auth.uid()` — deixa qualquer usuário autenticado ler/escrever dados de
  outro. Esse é o mesmo tipo de bug que apareceu em `get_user_connections`
  no FinDash antes do P1.

## 3. Corrigir texto-puro → Vault

Para Postgres/Supabase, a correção padrão é a extensão `vault` (Transparent
Column Encryption via pgsodium, habilitada por padrão em projetos Supabase):

1. Trocar a coluna de segredo por uma coluna `*_id uuid` que referencia
   `vault.secrets`.
2. Escrever via `vault.create_secret(valor, nome_unico)` / `vault.update_secret(id, novo_valor)`.
3. Ler via a view `vault.decrypted_secrets` — **nunca** direto; sempre
   por trás de uma função `SECURITY DEFINER` restrita
   (`IF auth.role() <> 'service_role' THEN RAISE EXCEPTION ...`), pra que
   só o backend (Edge Function com service role) consiga decriptar.
4. Backfill dos valores existentes numa migration separada, validado antes
   de dropar as colunas antigas.
5. Só depois de todo o código que lia/escrevia a coluna antiga estar
   migrado para as funções novas, dropar as colunas de texto puro — numa
   migration separada, fácil de reverter.

Para segredos que não são por-linha (ex: uma API key compartilhada do
projeto inteiro), prefira variável de ambiente da plataforma de Edge
Functions em vez de Vault — Vault é pro caso de "um segredo por registro,
por usuário" (como um token OAuth por conexão de loja).

## 4. Checar RPCs `SECURITY DEFINER`

Para cada função com `SECURITY DEFINER`:
- Ela aceita algum parâmetro que identifica "de quem" é o dado
  (`p_user_id`, `p_owner_id`, etc.)?
- Se sim: ela compara esse parâmetro com `auth.uid()`/`auth.role()` antes
  de agir, ou confia cegamente no valor passado pelo caller?
- Funções sem `SECURITY DEFINER` já respeitam RLS automaticamente — o
  risco é só nas que optaram por pular RLS de propósito.

## 5. Saída

Siga o mesmo formato que o projeto já usa (ex: `SECURITY-AUDIT.md` no
FinDash): tabela por tabela/RPC, status ✅/⚠️, e uma seção "Action Items"
numerada com o que ainda precisa de execução manual (ex: um toggle de
dashboard que não dá pra fazer por migration) separado do que já foi
corrigido em SQL. Isso mantém um histórico auditável entre rodadas —
essencial pra retomar um item que ficou pendente numa sessão anterior sem
precisar reconstruir o contexto do zero.
