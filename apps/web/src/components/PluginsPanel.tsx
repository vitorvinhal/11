"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Search,
  Plus,
  Check,
  Blocks,
  Database,
  BarChart3,
  Briefcase,
  Scale,
  GraduationCap,
  Globe,
  Loader2,
} from "lucide-react";
import { useAuth } from "../lib/auth";

interface Plugin {
  id: string;
  name: string;
  description: string;
  icon: any;
  installed: boolean;
  category: string;
  author: string;
}

interface ExternalPlugin {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  source: "github";
  url: string;
  stars: number;
  author: string;
  tags: string[];
  installed: boolean;
}

const PLUGINS: Plugin[] = [
  {
    id: "data",
    name: "Data",
    description:
      "Consultar, gerar gráficos e explicar seus dados — SQL, planilhas e dashboards em um só lugar",
    icon: Database,
    installed: false,
    category: "Produtividade",
    author: "Anthropic",
  },
  {
    id: "financial",
    name: "Claude for Financial Advisors",
    description:
      "Workflows prontos para consultores financeiros no Claude Cowork",
    icon: BarChart3,
    installed: false,
    category: "Finanças",
    author: "Anthropic",
  },
  {
    id: "sales",
    name: "Sales Team",
    description:
      "Preparação de reuniões, follow-ups e gestão de pipeline de vendas",
    icon: Briefcase,
    installed: false,
    category: "Vendas",
    author: "Anthropic",
  },
  {
    id: "legal",
    name: "Legal Review",
    description: "Revisão de contratos, cláusulas e conformidade legal",
    icon: Scale,
    installed: false,
    category: "Jurídico",
    author: "Anthropic",
  },
  {
    id: "learn",
    name: "Learn",
    description:
      "Usar esta skill quando o usuário quer compreensão intelectual — aprendizado",
    icon: GraduationCap,
    installed: false,
    category: "Educação",
    author: "Anthropic",
  },
  {
    id: "web-builder",
    name: "Web Artifacts Builder",
    description: "Construir artefatos web completos com HTML, CSS e JavaScript",
    icon: Globe,
    installed: false,
    category: "Desenvolvimento",
    author: "Anthropic",
  },
];

export function PluginsPanel() {
  const { user, getAccessToken } = useAuth();
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"your" | "discover">("your");
  const [plugins, setPlugins] = useState<Plugin[]>(PLUGINS);
  const [installedIds, setInstalledIds] = useState<Set<string>>(new Set());
  const [externalResults, setExternalResults] = useState<ExternalPlugin[]>([]);
  const [externalLoading, setExternalLoading] = useState(false);
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout>>();

  // Carrega plugins instalados do servidor e mescla com o catálogo.
  useEffect(() => {
    if (!user) return;
    (async () => {
      try {
        const token = await getAccessToken();
        const res = await fetch(`/api/plugins?userId=${user.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        const list = Array.isArray(data) ? data : (data.plugins ?? []);
        const ids = new Set<string>(
          list.filter((p: any) => p.enabled).map((p: any) => p.id),
        );
        setInstalledIds(ids);
        setPlugins((prev) =>
          prev.map((p) => ({ ...p, installed: ids.has(p.id) })),
        );
      } catch {
        /* mantém catálogo local */
      }
    })();
  }, [user, getAccessToken]);

  const toggleInstall = useCallback(
    async (id: string) => {
      const plugin = plugins.find((p) => p.id === id);
      if (!plugin) return;
      const nextInstalled = !installedIds.has(id);
      const nextIds = new Set(installedIds);
      if (nextInstalled) nextIds.add(id);
      else nextIds.delete(id);
      setInstalledIds(nextIds);
      setPlugins((prev) =>
        prev.map((p) => (p.id === id ? { ...p, installed: nextInstalled } : p)),
      );
      if (!user) return;
      try {
        const token = await getAccessToken();
        if (nextInstalled) {
          await fetch("/api/plugins", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              id,
              userId: user.id,
              name: plugin.name,
              description: plugin.description,
              category: plugin.category,
              author: plugin.author,
              enabled: true,
            }),
          });
        } else {
          await fetch(`/api/plugins?id=${id}&userId=${user.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
        }
      } catch {
        /* best-effort */
      }
    },
    [plugins, installedIds, user, getAccessToken],
  );

  const searchExternal = useCallback(async (query: string) => {
    if (!query.trim()) {
      setExternalResults([]);
      return;
    }
    setExternalLoading(true);
    try {
      const res = await fetch(
        `/api/plugins/discover?q=${encodeURIComponent(query)}&source=github`,
      );
      const data = await res.json();
      setExternalResults(data.plugins ?? []);
    } catch {
      setExternalResults([]);
    }
    setExternalLoading(false);
  }, []);

  useEffect(() => {
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    searchDebounceRef.current = setTimeout(() => {
      if (tab === "discover") void searchExternal(search);
    }, 500);
    return () => {
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    };
  }, [search, tab, searchExternal]);

  const filtered = plugins.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (tab === "your" && !p.installed) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-text-primary">Plugins</h3>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-text-dim" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar plugins"
            className="w-full rounded-lg bg-white/[0.05] pl-9 pr-3 py-2 text-sm text-text-primary placeholder:text-text-dim outline-none"
          />
        </div>
        <div className="flex rounded-lg bg-white/[0.04] p-0.5">
          <button
            onClick={() => setTab("your")}
            className={`rounded-md px-3 py-1.5 text-[11px] transition ${tab === "your" ? "bg-white/10 text-text-primary" : "text-text-dim hover:text-text-muted"}`}
          >
            Seus plugins
          </button>
          <button
            onClick={() => setTab("discover")}
            className={`rounded-md px-3 py-1.5 text-[11px] transition ${tab === "discover" ? "bg-white/10 text-text-primary" : "text-text-dim hover:text-text-muted"}`}
          >
            Descobrir
          </button>
        </div>
      </div>

      {tab === "your" && (
        <div className="space-y-1">
          {filtered.length === 0 && (
            <div className="rounded-xl bg-white/[0.03] p-6 text-center">
              <Blocks className="mx-auto h-8 w-8 text-text-dim" />
              <p className="mt-3 text-sm text-text-muted">
                Adicione seus primeiros plugins
              </p>
              <p className="mt-1 text-xs text-text-dim">
                Dê ao 11 expertise de nível de função com plugins. Adicione-os
                em Descobrir ou crie os seus.
              </p>
              <button
                onClick={() => setTab("discover")}
                className="mt-3 rounded-lg bg-white/[0.06] px-4 py-2 text-xs text-text-muted hover:bg-white/[0.1] transition"
              >
                Descobrir plugins
              </button>
            </div>
          )}
          {filtered.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5 hover:bg-white/[0.05] transition"
            >
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06]">
                <p.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm text-text-primary">{p.name}</div>
                <div className="text-[11px] text-text-dim">{p.author}</div>
              </div>
              <span className="rounded-md bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-400">
                Instalado
              </span>
            </div>
          ))}
        </div>
      )}

      {tab === "discover" && (
        <div className="space-y-4">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4">
            <div className="text-[10px] text-primary">Anthropic</div>
            <div className="mt-1 text-lg font-semibold text-text-primary">
              Data
            </div>
            <p className="mt-1 text-xs text-text-dim">
              Consultar, gerar gráficos e explicar seus dados — SQL, planilhas e
              dashboards em um só lugar
            </p>
            <button
              onClick={() => toggleInstall("data")}
              className="mt-3 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-white/90 transition"
            >
              Adicionar
            </button>
          </div>

          {externalLoading && (
            <div className="flex items-center justify-center gap-2 py-4">
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
              <span className="text-xs text-text-dim">
                Buscando no GitHub...
              </span>
            </div>
          )}

          {/* External results */}
          {externalResults.length > 0 && (
            <div className="space-y-1">
              <div className="text-[10px] font-medium text-sky-400 flex items-center gap-1">
                <Globe className="h-3 w-3" /> Do GitHub
              </div>
              {externalResults.map((p) => (
                <div
                  key={p.id}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-3 hover:bg-white/[0.05] transition"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/10 text-lg">
                    {p.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-text-primary">
                        {p.name}
                      </span>
                      <span className="flex items-center gap-1 rounded bg-sky-500/20 px-1.5 py-0.5 text-[9px] font-medium text-sky-400">
                        <Globe className="h-2.5 w-2.5" /> GitHub
                      </span>
                      {p.stars > 0 && (
                        <span className="text-[10px] text-yellow-400">
                          ★ {p.stars}
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-[11px] text-text-dim line-clamp-2">
                      {p.description}
                    </div>
                    <div className="mt-1 text-[10px] text-text-dim">
                      {p.author} — {p.category}
                    </div>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-lg bg-white/[0.06] px-2 py-1.5 text-[10px] text-text-muted hover:bg-white/[0.1] transition"
                  >
                    Ver
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Local catalog */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-3 hover:bg-white/[0.05] transition"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06]">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-text-primary">{p.name}</div>
                  <div className="mt-0.5 text-[11px] text-text-dim line-clamp-2">
                    {p.description}
                  </div>
                  <div className="mt-1 text-[10px] text-text-dim">
                    {p.author}
                  </div>
                </div>
                <button
                  onClick={() => toggleInstall(p.id)}
                  className={`shrink-0 rounded-lg p-1.5 transition ${p.installed ? "bg-emerald-400/10 text-emerald-400" : "bg-white/[0.06] text-text-muted hover:bg-white/[0.1]"}`}
                >
                  {p.installed ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
