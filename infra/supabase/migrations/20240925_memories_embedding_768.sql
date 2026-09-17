-- =============================================================================
-- Padroniza a dimensão de embedding em 768 (Gemini text-embedding-004, free tier).
--
-- Contexto: `embeddings` (20240915_init.sql) já é vector(768) e o produtor real
-- é o Gemini. `memories.embedding` ficou em vector(1536) e NUNCA é escrito pelo
-- web (o /api/chat insere sem a coluna embedding) → coluna inerte.
--
-- Sem índice pgvector (ivfflat/hnsw) em nenhuma migration → nada a dropar.
-- =============================================================================

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM memories WHERE embedding IS NOT NULL) THEN
    -- Segurança: se existir algum vetor 1536 não-nulo, recria a coluna em 768.
    ALTER TABLE memories DROP COLUMN embedding;
    ALTER TABLE memories ADD COLUMN embedding vector(768);
  ELSE
    ALTER TABLE memories ALTER COLUMN embedding TYPE vector(768);
  END IF;
END
$$;