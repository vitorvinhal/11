/**
 * Fonte ÚNICA da dimensão de embedding para todo o pacote de IA.
 *
 * Deve casar com as colunas pgvector:
 *  - `embeddings.embedding`  → vector(768) (20240915_init.sql)
 *  - `memories.embedding`    → vector(768) (20240925_memories_embedding_768.sql)
 *
 * Produtor alvo: Gemini `text-embedding-004` (768 dims, free tier).
 * NÃO altere aqui sem migração correspondente — o guard `migrations-dims.test.ts`
 * (T3) compara este valor com todos os `vector(N)` das migrations.
 */
export declare const EMBEDDING_DIMS: number;
