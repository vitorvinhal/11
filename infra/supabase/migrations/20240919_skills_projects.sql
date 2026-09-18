-- Skills do agente
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  icon TEXT DEFAULT '⚡',
  enabled BOOLEAN DEFAULT true,
  prompt TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "skills_isolate" ON skills FOR ALL USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_skills_user ON skills(user_id);

-- Projetos (agrupam conversas)
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "projects_isolate" ON projects FOR ALL USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_projects_user ON projects(user_id);

-- Junção projeto ↔ sessão
CREATE TABLE IF NOT EXISTS project_chats (
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  session_id UUID REFERENCES sessions(id) ON DELETE CASCADE NOT NULL,
  PRIMARY KEY (project_id, session_id)
);

ALTER TABLE project_chats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "project_chats_isolate" ON project_chats
  FOR ALL USING (
    EXISTS (SELECT 1 FROM projects WHERE projects.id = project_chats.project_id AND projects.user_id = auth.uid())
  );

CREATE INDEX IF NOT EXISTS idx_project_chats_session ON project_chats(session_id);

-- Tabela de memória (nós do grafo neural)
CREATE TABLE IF NOT EXISTS memories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  kind TEXT NOT NULL DEFAULT 'note',
  title TEXT NOT NULL,
  content TEXT DEFAULT '',
  embedding vector(768),
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE memories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "memories_isolate" ON memories FOR ALL USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_memories_user ON memories(user_id);
CREATE INDEX IF NOT EXISTS idx_memories_kind ON memories(kind);