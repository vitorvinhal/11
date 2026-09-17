'use client';

import { useState, useEffect, useCallback } from 'react';
import { FileText, Code, Image, Eye, Trash2, Loader2 } from 'lucide-react';
import { useAuth } from '../lib/auth';

interface Artifact {
  id: string;
  name: string;
  type: 'document' | 'code' | 'image' | 'chart';
  content: string;
  created_at: string;
}

export function ArtifactsPanel() {
  const { user, getAccessToken } = useAuth();
  const [artifacts, setArtifacts] = useState<Artifact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Artifact | null>(null);

  const load = useCallback(async () => {
    if (!user) { setLoading(false); return; }
    try {
      const token = await getAccessToken();
      const res = await fetch(`/api/artifacts?userId=${user.id}`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (Array.isArray(data)) setArtifacts(data);
    } catch { /* mantém vazio */ }
    setLoading(false);
  }, [user, getAccessToken]);

  useEffect(() => { void load(); }, [load]);

  const remove = async (id: string) => {
    setArtifacts((prev) => prev.filter((a) => a.id !== id));
    if (selected?.id === id) setSelected(null);
    if (!user) return;
    try {
      const token = await getAccessToken();
      await fetch(`/api/artifacts?id=${id}&userId=${user.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch { /* best-effort */ }
  };

  const typeIcon = (type: string) => {
    switch (type) {
      case 'code': return Code;
      case 'image': return Image;
      case 'chart': return Eye;
      default: return FileText;
    }
  };

  if (loading) return <div className="flex items-center justify-center py-12"><Loader2 className="h-5 w-5 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-text-primary">Artifacts</h3>
        <span className="text-[11px] text-text-dim">{artifacts.length} itens</span>
      </div>

      <p className="text-xs text-text-dim">Documentos, códigos, sites, gráficos e outros conteúdos gerados ficam salvos aqui.</p>

      <div className="space-y-1">
        {artifacts.length === 0 && (
          <div className="rounded-xl bg-white/[0.03] p-6 text-center">
            <FileText className="mx-auto h-8 w-8 text-text-dim" />
            <p className="mt-3 text-sm text-text-muted">Nenhum artifact ainda</p>
            <p className="mt-1 text-xs text-text-dim">Artefatos gerados durante as conversas aparecerão aqui.</p>
          </div>
        )}
        {artifacts.map((a) => {
          const Icon = typeIcon(a.type);
          return (
            <div key={a.id} onClick={() => setSelected(a)}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer transition ${selected?.id === a.id ? 'bg-white/[0.06]' : 'bg-white/[0.03] hover:bg-white/[0.05]'}`}>
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06]">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm text-text-primary truncate">{a.name}</div>
                <div className="text-[11px] text-text-dim">{new Date(a.created_at).toLocaleDateString('pt-BR')}</div>
              </div>
              <button onClick={(e) => { e.stopPropagation(); remove(a.id); }}
                className="hidden rounded-md p-1 text-text-dim hover:text-rose-300 hover:bg-rose-500/10 group-hover:block">
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          );
        })}
      </div>

      {selected && (
        <div className="rounded-xl bg-white/[0.04] p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-text-primary">{selected.name}</div>
            <button onClick={() => setSelected(null)} className="text-text-dim hover:text-text-primary text-xs">Fechar</button>
          </div>
          <pre className="mt-3 max-h-64 overflow-auto rounded-lg bg-black/30 p-3 text-xs text-text-muted whitespace-pre-wrap">
            {selected.content.slice(0, 2000)}
          </pre>
        </div>
      )}
    </div>
  );
}