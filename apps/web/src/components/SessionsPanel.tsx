"use client";

import { useState, useEffect, useCallback } from "react";
import { Monitor, Smartphone, Trash2, Loader2 } from "lucide-react";
import { useAuth } from "../lib/auth";

interface DeviceSession {
  id: string;
  platform: string;
  device: string;
  browser: string;
  last_active: string;
  created_at: string;
}

export default function SessionsPanel() {
  const { user, getAccessToken } = useAuth();
  const [sessions, setSessions] = useState<DeviceSession[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSessions = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const token = await getAccessToken();
      const res = await fetch("/api/devices", {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      setSessions(Array.isArray(data.sessions) ? data.sessions : []);
    } catch {
      setSessions([]);
    }
    setLoading(false);
  }, [user, getAccessToken]);

  useEffect(() => {
    void fetchSessions();
  }, [user, fetchSessions]);

  const revokeSession = async (id: string) => {
    try {
      const token = await getAccessToken();
      await fetch(`/api/devices?id=${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setSessions((prev) => prev.filter((s) => s.id !== id));
    } catch {
      /* ignore */
    }
  };

  const getPlatformIcon = (platform: string) => {
    if (
      platform.includes("mobile") ||
      platform.includes("android") ||
      platform.includes("ios")
    ) {
      return <Smartphone className="h-4 w-4 text-primary/60" />;
    }
    return <Monitor className="h-4 w-4 text-primary/60" />;
  };

  const formatTime = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      const now = new Date();
      const diffMs = now.getTime() - d.getTime();
      const diffMin = Math.floor(diffMs / 60000);
      if (diffMin < 1) return "agora";
      if (diffMin < 60) return `${diffMin}min atrás`;
      const diffH = Math.floor(diffMin / 60);
      if (diffH < 24) return `${diffH}h atrás`;
      return `${Math.floor(diffH / 24)}d atrás`;
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="space-y-3">
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-5 w-5 animate-spin text-white/30" />
        </div>
      ) : sessions.length === 0 ? (
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-center">
          <p className="text-[11px] text-white/30">
            Nenhuma sessão registrada.
          </p>
        </div>
      ) : (
        sessions.map((s) => (
          <div
            key={s.id}
            className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
          >
            {getPlatformIcon(s.platform)}
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-white/80">
                {s.device || s.browser || s.platform}
              </p>
              <p className="text-[10px] text-white/30">
                {s.platform} · {formatTime(s.last_active)}
              </p>
            </div>
            <button
              onClick={() => revokeSession(s.id)}
              className="rounded-lg p-1.5 text-white/20 hover:bg-red-500/10 hover:text-red-400 transition"
              title="Revogar sessão"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        ))
      )}
    </div>
  );
}
