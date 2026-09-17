'use client';

import { useState, useEffect, useCallback } from 'react';
import { Trash2, Loader2, Image as ImageIcon, Film, Music, File, RefreshCw } from 'lucide-react';
import { useAuth } from '../lib/auth';
import { MediaUpload } from './MediaUpload';

interface MediaItem {
  id: string;
  user_id: string;
  filename: string;
  mime_type: string;
  size: number;
  url: string;
  kind: 'image' | 'video' | 'audio' | 'other';
  analysis?: string;
  created_at: string;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function kindIcon(kind: string) {
  if (kind === 'image') return ImageIcon;
  if (kind === 'video') return Film;
  if (kind === 'audio') return Music;
  return File;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'agora';
  if (mins < 60) return `${mins}min atrás`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h atrás`;
  const days = Math.floor(hours / 24);
  return `${days}d atrás`;
}

export function MediaGallery() {
  const { user, getAccessToken } = useAuth();
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<MediaItem | null>(null);

  const fetchMedia = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const token = await getAccessToken();
      const res = await fetch(`/api/media?userId=${user.id}&limit=50`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch { setItems([]); }
    setLoading(false);
  }, [user, getAccessToken]);

  useEffect(() => { fetchMedia(); }, [fetchMedia]);

  const deleteItem = useCallback(async (id: string) => {
    if (!user) return;
    try {
      const token = await getAccessToken();
      await fetch(`/api/media?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems((prev) => prev.filter((i) => i.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch { /* ignore */ }
  }, [user, getAccessToken, selected]);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-4 pb-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
            <ImageIcon className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Mídia</h3>
            <p className="text-[10px] text-muted-foreground">{items.length} arquivo{items.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <button onClick={() => fetchMedia()} className="h-7 w-7 grid place-items-center rounded-lg hover:bg-muted transition" disabled={loading}>
          <RefreshCw className={`h-3.5 w-3.5 text-muted-foreground ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="p-4 border-b border-border">
        <MediaUpload onUploaded={(item) => setItems((prev) => [item, ...prev])} />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {loading && items.length === 0 ? (
          <div className="flex justify-center py-8"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>
        ) : items.length === 0 ? (
          <div className="text-center py-8 text-sm text-muted-foreground">Nenhuma mídia enviada ainda</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {items.map((item) => {
              const Icon = kindIcon(item.kind);
              return (
                <div key={item.id}
                  onClick={() => setSelected(item)}
                  className={`group relative rounded-xl border overflow-hidden cursor-pointer transition hover:-translate-y-0.5 ${
                    selected?.id === item.id ? 'border-primary' : 'border-border hover:border-white/20'
                  }`}>
                  {item.kind === 'image' && item.url ? (
                    <div className="aspect-square bg-muted/30">
                      <img src={item.url} alt={item.filename} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="aspect-square bg-muted/30 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-6">
                    <div className="text-[11px] text-white truncate">{item.filename}</div>
                    <div className="text-[9px] text-white/60">{formatSize(item.size)} · {timeAgo(item.created_at)}</div>
                  </div>
                  <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition flex gap-1">
                    <button onClick={(e) => { e.stopPropagation(); deleteItem(item.id); }}
                      className="h-6 w-6 grid place-items-center rounded-md bg-black/60 text-white/80 hover:text-red-400 transition">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selected && (
        <div className="border-t border-border p-4">
          <div className="flex items-start gap-3">
            {selected.kind === 'image' && selected.url ? (
              <img src={selected.url} alt={selected.filename} className="h-20 w-20 rounded-lg object-cover" />
            ) : (
              <div className="h-20 w-20 rounded-lg bg-muted/30 flex items-center justify-center">
                {(() => { const Icon = kindIcon(selected.kind); return <Icon className="h-6 w-6 text-muted-foreground" />; })()}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{selected.filename}</div>
              <div className="text-xs text-muted-foreground">{selected.mime_type} · {formatSize(selected.size)}</div>
              {selected.analysis && <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{selected.analysis}</div>}
            </div>
            <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground text-xs">✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
