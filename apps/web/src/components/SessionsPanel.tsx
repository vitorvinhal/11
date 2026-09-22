"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
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
  ShieldCheck,
  ShieldAlert,
  ShieldQuestion,
  Search,
  X,
  Pencil,
  MapPin,
  Activity,
  BarChart3,
  Zap,
  Users,
  Timer,
  TrendingUp,
  Lock,
} from "lucide-react";
import { useAuth } from "../lib/auth";
import { getPlatform } from "../lib/platform";

interface DeviceSession {
  id: string;
  platform: string;
  device: string;
  browser: string;
  app_version: string;
  app_name: string;
  display_name: string | null;
  ip_address: string | null;
  city: string | null;
  country: string | null;
  country_code: string | null;
  last_active: string;
  created_at: string;
}

interface ActivityEntry {
  session_id: string;
  action: string;
  created_at: string;
}

interface Metrics {
  totalSessions: number;
  totalActiveMinutes: number;
  mostUsedPlatform: string | null;
  peakHour: string | null;
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
      "Eleven Code",
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

const PLATFORM_FILTERS = [
  { key: "all", label: "Todos" },
  { key: "desktop-app", label: "Desktop App" },
  { key: "desktop-web", label: "Desktop Web" },
  { key: "mobile-app", label: "Mobile App" },
  { key: "mobile-web", label: "Mobile Web" },
];

function parseBrowser(ua: string): string {
  if (!ua || ua === "unknown") return "Desconhecido";
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("Chrome/")) return "Chrome";
  if (ua.includes("Firefox/")) return "Firefox";
  if (ua.includes("Safari/") && !ua.includes("Chrome")) return "Safari";
  return ua.split(" ").pop() ?? ua;
}

function formatTime(dateStr: string): string {
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
}

function getSecurityStatus(
  session: DeviceSession,
  allSessions: DeviceSession[],
): {
  level: "trusted" | "new" | "unknown";
  label: string;
  color: string;
  bg: string;
} {
  const created = new Date(session.created_at).getTime();
  const now = Date.now();
  const hoursSinceCreation = (now - created) / (1000 * 60 * 60);

  if (hoursSinceCreation < 24) {
    return {
      level: "new",
      label: "Novo",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    };
  }

  const knownIps = new Set(
    allSessions
      .filter((s) => s.id !== session.id && s.ip_address)
      .map((s) => s.ip_address),
  );

  if (session.ip_address && knownIps.has(session.ip_address)) {
    return {
      level: "trusted",
      label: "Confiável",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    };
  }

  return {
    level: "unknown",
    label: "Desconhecido",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  };
}

function SecurityBadge({
  session,
  allSessions,
}: {
  session: DeviceSession;
  allSessions: DeviceSession[];
}) {
  const s = getSecurityStatus(session, allSessions);
  const Icon =
    s.level === "trusted"
      ? ShieldCheck
      : s.level === "new"
        ? ShieldAlert
        : ShieldQuestion;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium ${s.color} ${s.bg}`}
    >
      <Icon className="h-2.5 w-2.5" />
      {s.label}
    </span>
  );
}

function CountryFlag({ code }: { code: string | null }) {
  if (!code || code === "LC") return null;
  return (
    <span className="inline-flex items-center rounded bg-white/[0.06] px-1 py-0.5 text-[8px] font-bold text-white/50 leading-none">
      {code}
    </span>
  );
}

function TimelineChart({
  activity,
  sessionId,
}: {
  activity: ActivityEntry[];
  sessionId: string;
}) {
  const hours = useMemo(() => {
    const counts: number[] = new Array(24).fill(0);
    for (const a of activity) {
      if (a.session_id === sessionId) {
        const h = new Date(a.created_at).getHours();
        counts[h]++;
      }
    }
    return counts;
  }, [activity, sessionId]);

  const max = Math.max(...hours, 1);

  return (
    <div className="flex items-end gap-px h-6">
      {hours.map((count, i) => (
        <div
          key={i}
          className="flex-1 rounded-t bg-primary/20 min-h-[1px]"
          style={{ height: `${(count / max) * 100}%` }}
          title={`${i}:00 — ${count} ações`}
        />
      ))}
    </div>
  );
}

function SessionCard({
  session,
  allSessions,
  activity,
  isSelected,
  isCurrent,
  onSelect,
  onRename,
  onRevoke,
}: {
  session: DeviceSession;
  allSessions: DeviceSession[];
  activity: ActivityEntry[];
  isSelected: boolean;
  isCurrent: boolean;
  onSelect: () => void;
  onRename: (id: string, name: string) => void;
  onRevoke: (id: string) => void;
}) {
  const meta = PLATFORM_META[session.platform] ?? {
    label: session.platform,
    icon: Globe,
    color: "text-white/40",
    features: [],
  };
  const Icon = meta.icon;
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(session.display_name ?? "");
  const [expanded, setExpanded] = useState(false);

  const handleSave = () => {
    onRename(session.id, draft);
    setEditing(false);
  };

  return (
    <div
      className={`rounded-xl border overflow-hidden transition ${
        isSelected
          ? "border-primary/30 bg-primary/[0.04]"
          : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.035]"
      }`}
    >
      <div className="flex items-center gap-3 px-3 py-2.5">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          className="h-3.5 w-3.5 rounded border-white/20 bg-white/5 accent-primary"
        />

        {/* Icon */}
        <div
          className={`grid h-8 w-8 place-items-center rounded-lg bg-white/[0.04] ${meta.color}`}
        >
          <Icon className="h-4 w-4" />
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            {editing ? (
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSave();
                  if (e.key === "Escape") setEditing(false);
                }}
                autoFocus
                className="rounded bg-white/[0.06] px-1.5 py-0.5 text-xs text-text-primary outline-none ring-1 ring-primary/30 w-32"
              />
            ) : (
              <p className="truncate text-xs font-medium text-white/80">
                {session.display_name || meta.label}
              </p>
            )}
            {isCurrent && (
              <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[9px] font-medium text-emerald-400">
                Atual
              </span>
            )}
            <SecurityBadge session={session} allSessions={allSessions} />
            {session.app_version && session.app_version !== "unknown" && (
              <span className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] text-white/40">
                v{session.app_version}
              </span>
            )}
          </div>
          <p className="text-[10px] text-white/30">
            {parseBrowser(session.browser)} · {session.device} ·{" "}
            {formatTime(session.last_active)}
            {session.city && (
              <>
                {" · "}
                <MapPin className="inline h-2.5 w-2.5" /> {session.city}
                {session.country_code && (
                  <CountryFlag code={session.country_code} />
                )}
              </>
            )}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setEditing(!editing)}
            className="rounded-lg p-1.5 text-white/20 hover:bg-white/[0.06] hover:text-white/50 transition"
            title="Renomear"
          >
            <Pencil className="h-3 w-3" />
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-lg p-1.5 text-white/20 hover:bg-white/[0.06] hover:text-white/50 transition"
            title="Detalhes"
          >
            <Activity className="h-3 w-3" />
          </button>
          {isCurrent ? (
            <span
              className="grid h-7 w-7 place-items-center rounded-lg text-emerald-400/60"
              title="Dispositivo atual — use este para acessar o sistema"
            >
              <Lock className="h-3.5 w-3.5" />
            </span>
          ) : (
            <button
              onClick={() => {
                if (window.confirm("Encerrar esta sessão?"))
                  onRevoke(session.id);
              }}
              className="rounded-lg p-1.5 text-white/20 hover:bg-red-500/10 hover:text-red-400 transition"
              title="Encerrar sessão"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="border-t border-white/[0.04] px-3 py-2.5 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="flex items-center gap-1.5 text-white/40">
              <Globe className="h-3 w-3" /> Plataforma
            </div>
            <div className="text-white/60">{meta.label}</div>

            <div className="flex items-center gap-1.5 text-white/40">
              <Monitor className="h-3 w-3" /> Dispositivo
            </div>
            <div className="text-white/60">{session.device}</div>

            <div className="flex items-center gap-1.5 text-white/40">
              <Shield className="h-3 w-3" /> Navegador
            </div>
            <div className="text-white/60">{parseBrowser(session.browser)}</div>

            <div className="flex items-center gap-1.5 text-white/40">
              <AppWindow className="h-3 w-3" /> Versão
            </div>
            <div className="text-white/60">
              {session.app_version !== "unknown"
                ? `v${session.app_version}`
                : "N/A"}
            </div>

            <div className="flex items-center gap-1.5 text-white/40">
              <Clock className="h-3 w-3" /> Último acesso
            </div>
            <div className="text-white/60">
              {formatTime(session.last_active)}
            </div>

            <div className="flex items-center gap-1.5 text-white/40">
              <MapPin className="h-3 w-3" /> Localização
            </div>
            <div className="text-white/60">
              {session.city
                ? `${session.city}${session.country ? `, ${session.country}` : ""}`
                : "Indisponível"}
            </div>
          </div>

          {/* Mini timeline */}
          <div>
            <p className="text-[9px] text-white/30 mb-1">Atividade (24h)</p>
            <TimelineChart activity={activity} sessionId={session.id} />
          </div>

          {meta.features.length > 0 && (
            <div>
              <p className="text-[9px] text-white/30 mb-1">Features:</p>
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
}

export default function SessionsPanel() {
  const { user, getAccessToken } = useAuth();
  const [sessions, setSessions] = useState<DeviceSession[]>([]);
  const [activity, setActivity] = useState<ActivityEntry[]>([]);
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

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
      setActivity(Array.isArray(data.activity) ? data.activity : []);
      setMetrics(data.metrics ?? null);
    } catch {
      setSessions([]);
      setActivity([]);
      setMetrics(null);
    }
    setLoading(false);
  }, [user, getAccessToken]);

  useEffect(() => {
    void fetchSessions();
  }, [user, fetchSessions]);

  const filteredSessions = useMemo(() => {
    return sessions.filter((s) => {
      if (platformFilter !== "all" && s.platform !== platformFilter)
        return false;
      if (search) {
        const q = search.toLowerCase();
        const label =
          PLATFORM_META[s.platform]?.label.toLowerCase() ?? s.platform;
        const browser = parseBrowser(s.browser).toLowerCase();
        const device = s.device.toLowerCase();
        const name = (s.display_name ?? "").toLowerCase();
        const city = (s.city ?? "").toLowerCase();
        if (
          !label.includes(q) &&
          !browser.includes(q) &&
          !device.includes(q) &&
          !name.includes(q) &&
          !city.includes(q)
        )
          return false;
      }
      return true;
    });
  }, [sessions, search, platformFilter]);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === filteredSessions.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredSessions.map((s) => s.id)));
    }
  };

  const revokeSelected = async () => {
    if (selectedIds.size === 0) return;
    const ids = Array.from(selectedIds).join(",");
    try {
      const token = await getAccessToken();
      await fetch(`/api/devices?ids=${ids}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setSessions((prev) => prev.filter((s) => !selectedIds.has(s.id)));
      setSelectedIds(new Set());
    } catch {
      /* ignore */
    }
  };

  const revokeSession = async (id: string) => {
    try {
      const token = await getAccessToken();
      const res = await fetch(`/api/devices?id=${id}`, {
        method: "DELETE",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      if (res.ok) {
        setSessions((prev) => prev.filter((s) => s.id !== id));
        setSelectedIds((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }
    } catch {
      /* ignore */
    }
  };

  const renameSession = async (id: string, name: string) => {
    try {
      const token = await getAccessToken();
      await fetch("/api/devices", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, display_name: name }),
      });
      setSessions((prev) =>
        prev.map((s) =>
          s.id === id ? { ...s, display_name: name || null } : s,
        ),
      );
    } catch {
      /* ignore */
    }
  };

  const currentSessionId = useMemo(() => {
    if (typeof window === "undefined") return null;
    const platform = getPlatform();
    const browser = (navigator.userAgent.split(" ").pop() ?? "").toLowerCase();
    // Sessão do dispositivo atual: mesma plataforma + navegador + ativa há < 5 min.
    const recent = sessions.find(
      (s) =>
        s.platform === platform &&
        s.browser &&
        s.browser.toLowerCase() === browser &&
        s.last_active &&
        Date.now() - new Date(s.last_active).getTime() < 5 * 60 * 1000,
    );
    if (recent) return recent.id;
    // Fallback: última sessão ativa da plataforma atual.
    const lastByPlatform = sessions
      .filter((s) => s.platform === platform)
      .sort(
        (a, b) =>
          new Date(b.last_active).getTime() - new Date(a.last_active).getTime(),
      )[0];
    if (lastByPlatform) return lastByPlatform.id;
    return null;
  }, [sessions]);

  return (
    <div className="space-y-4">
      {/* Metrics */}
      {metrics && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center">
            <Users className="mx-auto mb-1 h-4 w-4 text-primary/60" />
            <div className="text-xl font-semibold text-primary">
              {metrics.totalSessions}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-text-dim">
              Sessões
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center">
            <Timer className="mx-auto mb-1 h-4 w-4 text-primary/60" />
            <div className="text-xl font-semibold text-primary">
              {metrics.totalActiveMinutes < 60
                ? `${metrics.totalActiveMinutes}m`
                : metrics.totalActiveMinutes < 1440
                  ? `${Math.floor(metrics.totalActiveMinutes / 60)}h${metrics.totalActiveMinutes % 60 > 0 ? `${metrics.totalActiveMinutes % 60}m` : ""}`
                  : `${(metrics.totalActiveMinutes / 1440).toFixed(1)}d`}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-text-dim">
              Tempo Total
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center">
            <TrendingUp className="mx-auto mb-1 h-4 w-4 text-primary/60" />
            <div className="text-sm font-semibold text-primary truncate">
              {metrics.mostUsedPlatform
                ? (PLATFORM_META[metrics.mostUsedPlatform]?.label ?? "—")
                : "—"}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-text-dim">
              Mais Usada
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3 text-center">
            <Zap className="mx-auto mb-1 h-4 w-4 text-primary/60" />
            <div className="text-xl font-semibold text-primary">
              {metrics.peakHour ?? "—"}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-text-dim">
              Horário Pico
            </div>
          </div>
        </div>
      )}

      {/* Global timeline */}
      {activity.length > 0 && (
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-3.5 w-3.5 text-white/40" />
            <span className="text-[11px] text-white/50">
              Atividade geral (24h)
            </span>
          </div>
          <div className="flex items-end gap-px h-8">
            {(() => {
              const counts: number[] = new Array(24).fill(0);
              for (const a of activity) {
                const h = new Date(a.created_at).getHours();
                counts[h]++;
              }
              const max = Math.max(...counts, 1);
              return counts.map((count, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-primary/25 min-h-[1px]"
                  style={{ height: `${(count / max) * 100}%` }}
                  title={`${i}:00 — ${count} ações`}
                />
              ));
            })()}
          </div>
        </div>
      )}

      {/* Search + Filters */}
      <div className="flex flex-col gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar sessões..."
            className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] pl-8 pr-8 py-2 text-xs text-text-primary placeholder:text-white/30 outline-none focus:border-primary/30 transition"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        <div className="flex gap-1 flex-wrap">
          {PLATFORM_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setPlatformFilter(f.key)}
              className={`rounded-full px-2.5 py-1 text-[10px] font-medium transition ${
                platformFilter === f.key
                  ? "bg-primary/20 text-primary"
                  : "bg-white/[0.04] text-white/40 hover:text-white/60"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bulk actions bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={
              filteredSessions.length > 0 &&
              selectedIds.size === filteredSessions.length
            }
            onChange={toggleSelectAll}
            className="h-3.5 w-3.5 rounded border-white/20 bg-white/5 accent-primary"
          />
          <span className="text-[10px] text-white/30">
            {selectedIds.size > 0
              ? `${selectedIds.size} selecionada(s)`
              : `${filteredSessions.length} sessão(ões)`}
          </span>
        </div>
        {selectedIds.size > 0 && (
          <button
            onClick={revokeSelected}
            className="flex items-center gap-1.5 rounded-lg bg-red-500/10 px-2.5 py-1.5 text-[10px] font-medium text-red-400 hover:bg-red-500/20 transition"
          >
            <Trash2 className="h-3 w-3" />
            Revogar ({selectedIds.size})
          </button>
        )}
      </div>

      {/* Sessions list */}
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-5 w-5 animate-spin text-white/30" />
        </div>
      ) : filteredSessions.length === 0 ? (
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center">
          <p className="text-[11px] text-white/30">
            {sessions.length === 0
              ? "Nenhuma sessão registrada."
              : "Nenhuma sessão encontrada com esses filtros."}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {filteredSessions.map((s) => (
            <SessionCard
              key={s.id}
              session={s}
              allSessions={sessions}
              activity={activity}
              isSelected={selectedIds.has(s.id)}
              isCurrent={s.id === currentSessionId}
              onSelect={() => toggleSelect(s.id)}
              onRename={renameSession}
              onRevoke={revokeSession}
            />
          ))}
        </div>
      )}
    </div>
  );
}
