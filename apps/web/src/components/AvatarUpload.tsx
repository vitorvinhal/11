"use client";

import { useState, useRef } from "react";
import { Camera, Loader2, User } from "lucide-react";
import { useAuth } from "../lib/auth";

interface AvatarUploadProps {
  currentUrl?: string | null;
  onUpload?: (url: string) => void;
}

export default function AvatarUpload({
  currentUrl,
  onUpload,
}: AvatarUploadProps) {
  const { user, supabase, getAccessToken } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    // Validar tipo e tamanho
    if (!file.type.startsWith("image/")) return;
    if (file.size > 2 * 1024 * 1024) return; // 2MB max

    setUploading(true);
    try {
      const ext = file.name.split(".").pop() ?? "jpg";
      const path = `avatars/${user.id}.${ext}`;

      // Upload para Supabase Storage
      const { error } = await supabase.storage
        .from("avatars")
        .upload(path, file, { upsert: true });

      if (error) throw error;

      // Obter URL pública
      const { data: urlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(path);

      const publicUrl = urlData.publicUrl;

      // Atualizar perfil do usuário
      await supabase.auth.updateUser({
        data: { avatar_url: publicUrl },
      });

      setPreview(publicUrl);
      onUpload?.(publicUrl);
    } catch (err) {
      console.error("[AvatarUpload]", err);
    } finally {
      setUploading(false);
    }
  };

  const displayUrl = preview ?? currentUrl ?? user?.user_metadata?.avatar_url;

  return (
    <div className="relative group">
      <div
        className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-white/10 bg-white/[0.04] transition group-hover:border-primary/40"
        onClick={() => fileRef.current?.click()}
      >
        {displayUrl ? (
          <img
            src={displayUrl}
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        ) : (
          <User className="h-8 w-8 text-white/20" />
        )}
        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition group-hover:opacity-100">
          {uploading ? (
            <Loader2 className="h-5 w-5 animate-spin text-white" />
          ) : (
            <Camera className="h-5 w-5 text-white" />
          )}
        </div>
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
      />
    </div>
  );
}
