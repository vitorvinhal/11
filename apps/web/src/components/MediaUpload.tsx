'use client';

import { useState, useRef, useCallback } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { useAuth } from '../lib/auth';

interface MediaUploadProps {
  onUploaded?: (item: MediaItem) => void;
}

interface MediaItem {
  id: string;
  user_id: string;
  filename: string;
  mime_type: string;
  size: number;
  url: string;
  kind: 'image' | 'video' | 'audio' | 'other';
  created_at: string;
}

export function MediaUpload({ onUploaded }: MediaUploadProps) {
  const { user, getAccessToken } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const upload = useCallback(async (file: File) => {
    setUploading(true);
    setError('');
    try {
      const token = await getAccessToken();
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', user?.id ?? 'anonymous');

      const res = await fetch('/api/media', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Erro no upload');
      onUploaded?.(data);
    } catch (err) {
      setError((err as Error).message);
    }
    setUploading(false);
  }, [user, getAccessToken, onUploaded]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) upload(file);
  }, [upload]);

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) upload(file);
    if (fileRef.current) fileRef.current.value = '';
  }, [upload]);

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={onDrop}
      onClick={() => fileRef.current?.click()}
      className={`relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 transition cursor-pointer ${
        dragOver ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-white/20'
      }`}
    >
      <input ref={fileRef} type="file" accept="image/*,video/*,audio/*" className="hidden" onChange={onFileChange} />
      {uploading ? (
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      ) : (
        <Upload className="h-6 w-6 text-text-dim" />
      )}
      <span className="text-xs text-text-dim">
        {uploading ? 'Enviando...' : 'Arraste ou clique para enviar'}
      </span>
      {error && (
        <div className="flex items-center gap-1.5 text-xs text-red-400">
          <X className="h-3 w-3" /> {error}
        </div>
      )}
    </div>
  );
}
