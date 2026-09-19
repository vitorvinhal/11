"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Monitor,
  Smartphone,
  Tablet,
  Trash2,
  Loader2,
  Globe,
  AppWindow,
  Clock,
  Shield,
} from "lucide-react";
import { useAuth } from "../lib/auth";

interface DeviceSession {
  id: string;
  platform: string;
  device: string;
  browser: string;
  app_version: string;
  app_name: string;
  last_active: string;
  created_at: string;
}

const PLATFORM_META: Record<
  string,
  { label: string; icon: typeof Monitor; color: string; features: string[] }
> = {
  "desktop-app": {
    label: "Desktop (App)",
    icon: AppWindow,
    color: "text-violet-400",
    features: [
      "Terminal",
      "Eleven Coder",
      "Agente PC",
      "Canvas",
      "Neural Graph",
    ],
  },
  "desktop-web": {
    label: "Desktop (Web)",
    icon: Monitor,
    color: "text-sky-400",
    features: ["Chat", "Skills", "Plugins", "Canvas", "FinOps"],
  },
  "mobile-app": {
    label: "Mobile (App)",
    icon: Smartphone,
    color: "text-emerald-400",
    features: ["Chat", "Skills", "Agent Mobile", "Mídia"],
  },
  "mobile-web": {
    label: "Mobile (Web)",
    icon: Tablet,
    color: "text-amber-400",
    features: ["Chat", "Skills", "Mídia"],
  },
};

function parseBrowser(ua: string): string {
  if (!ua || ua === "unknown") return "Desconhecido";
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("Chrome/")) return "Chrome";
  if (ua.includes("Firefox/")) return "Firefox";
  if (ua.includes("Safari/") && !ua.includes("Chrome")) return "Safari";
  return ua.split(" ").pop() ?? ua;
}

export default function SessionsPanel() {
  const { user, getAccessToken } = useAuth();
  const [sessions, setSessions] = useState<DeviceSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

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

  const getPlatformMeta = (platform: string) =>
    PLATFORM_META[platform] ?? {
      label: platform,
      icon: Globe,
      color: "text-white/40",
      features: [],
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
        sessions.map((s) => {
          const meta = getPlatformMeta(s.platform);
          const Icon = meta.icon;
          const isExpanded = expandedId === s.id;
          const isCurrent =
            s.app_name === "web" &&
            s.platform === "desktop-web" &&
            s.last_active &&
            Date.now() - new Date(s.last_active).getTime() < 120000;

          return (
            <div
              key={s.id}
              className="rounded-lg border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            >
              <div
                className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-white/[0.02] transition"
                onClick={() => setExpandedId(isExpanded ? null : s.id)}
              >
                <div
                  className={`grid h-8 w-8 place-items-center rounded-lg bg-white/[0.04] ${meta.color}`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-xs font-medium text-white/80">
                      {meta.label}
                    </p>
                    {isCurrent && (
                      <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-medium text-emerald-400">
                        Atual
                      </span>
                    )}
                    {s.app_version && s.app_version !== "unknown" && (
                      <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] text-white/40">
                        v{s.app_version}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-white/30">
                    {parseBrowser(s.browser)} · {s.device} ·{" "}
                    {formatTime(s.last_active)}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    revokeSession(s.id);
                  }}
                  className="rounded-lg p-1.5 text-white/20 hover:bg-red-500/10 hover:text-red-400 transition"
                  title="Revogar sessão"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>

              {isExpanded && (
                <div className="border-t border-white/[0.04] px-3 py-2.5 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="flex items-center gap-1.5 text-white/40">
                      <Globe className="h-3 w-3" /> Plataforma
                    </div>
                    <div className="text-white/60">{meta.label}</div>

                    <div className="flex items-center gap-1.5 text-white/40">
                      <Monitor className="h-3 w-3" /> Dispositivo
                    </div>
                    <div className="text-white/60">{s.device}</div>

                    <div className="flex items-center gap-1.5 text-white/40">
                      <Shield className="h-3 w-3" /> Navegador
                    </div>
                    <div className="text-white/60">
                      {parseBrowser(s.browser)}
                    </div>

                    <div className="flex items-center gap-1.5 text-white/40">
                      <AppWindow className="h-3 w-3" /> Versão
                    </div>
                    <div className="text-white/60">
                      {s.app_version !== "unknown"
                        ? `v${s.app_version}`
                        : "N/A"}
                    </div>

                    <div className="flex items-center gap-1.5 text-white/40">
                      <Clock className="h-3 w-3" /> Último acesso
                    </div>
                    <div className="text-white/60">
                      {formatTime(s.last_active)}
                    </div>
                  </div>

                  {meta.features.length > 0 && (
                    <div>
                      <p className="text-[9px] text-white/30 mb-1">
                        Features disponíveis nesta plataforma:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {meta.features.map((f) => (
                          <span
                            key={f}
                            className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[9px] text-white/40"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
