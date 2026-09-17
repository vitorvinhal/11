'use client';

import { useEffect, useState, useCallback } from 'react';
import { FolderGit2, Plus, Trash2, Loader2, X } from 'lucide-react';
import { useAuth } from '../lib/auth';

interface Project {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

export function ProjectsPanel() {
  const { user, getAccessToken } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    if (!user) { setLoading(false); return; }
    try {
      const token = await getAccessToken();
      const res = await fetch(`/api/projects?userId=${user.id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setProjects([]);
      } else {
        setProjects(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      setError((e as Error).message);
      setProjects([]);
    }
    setLoading(false);
  }, [user, getAccessToken]);

  useEffect(() => { void fetchProjects(); }, [fetchProjects]);

  const remove = async (id: string) => {
    try {
      const token = await getAccessToken();
      await fetch(`/api/projects?id=${id}`, {
        method: 'DELETE',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch { /* ignore */ }
  };

  const create = async () => {
    if (!newName.trim() || !user) return;
    setSaving(true);
    try {
      const token = await getAccessToken();
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'content-type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ userId: user.id, name: newName, description: newDesc }),
      });
      const project = await res.json();
      if (project.error) return;
      setProjects((prev) => [project, ...prev]);
      setNewName(''); setNewDesc('');
      setCreating(false);
    } catch { /* ignore */ }
    setSaving(false);
  };

  if (loading) return <div className="flex items-center justify-center py-12"><Loader2 className="h-5 w-5 animate-spin text-primary" /></div>;

  if (error) {
    return (
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-text-primary">Projetos</h3>
        <div className="rounded-xl bg-white/[0.04] p-6 text-center">
          <p className="text-sm text-rose-300">Erro ao carregar projetos</p>
          <p className="mt-1 text-xs text-text-dim">{error}</p>
          <button onClick={() => { setError(null); setLoading(true); void fetchProjects(); }}
            className="mt-3 rounded-lg bg-white/[0.06] px-3 py-1.5 text-xs text-text-muted hover:bg-white/[0.1] transition">
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-text-primary">Projetos</h3>
        <button onClick={() => setCreating(true)} className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-[11px] text-text-muted hover:bg-white/[0.1] hover:text-text-primary transition">
          <Plus className="h-3 w-3" /> Novo projeto
        </button>
      </div>

      {creating && (
        <div className="rounded-xl bg-white/[0.04] p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-muted">Novo projeto</span>
            <button onClick={() => setCreating(false)} className="text-text-dim hover:text-text-primary"><X className="h-3.5 w-3.5" /></button>
          </div>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nome do projeto"
            className="w-full rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary placeholder:text-text-dim outline-none" />
          <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder="Descrição (opcional)"
            className="w-full rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary placeholder:text-text-dim outline-none" />
          <button onClick={() => void create()} disabled={!newName.trim() || saving}
            className="w-full rounded-lg bg-white py-2 text-sm font-semibold text-black disabled:opacity-40">
            {saving ? <Loader2 className="mx-auto h-4 w-4 animate-spin" /> : 'Criar'}
          </button>
        </div>
      )}

      <div className="space-y-1">
        {projects.length === 0 && <p className="py-6 text-center text-xs text-text-dim">Nenhum projeto criado ainda.</p>}
        {projects.map((p) => (
          <div key={p.id} className="group flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5 hover:bg-white/[0.05] transition">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06]">
              <FolderGit2 className="h-4 w-4 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm text-text-primary">{p.name}</div>
              {p.description && <div className="text-[11px] text-text-dim truncate">{p.description}</div>}
            </div>
            <button onClick={() => void remove(p.id)}
              className="hidden rounded-md p-1 text-text-dim hover:text-rose-300 hover:bg-rose-500/10 group-hover:block">
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}