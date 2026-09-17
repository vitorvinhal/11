'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { Plus, Trash2, Loader2, X, Check, Search } from 'lucide-react';
import { useAuth } from '../lib/auth';
import { SKILL_CATALOG, SKILL_CATEGORIES, SkillCatalogItem } from '../lib/skill-catalog';

interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
  enabled: boolean;
  prompt: string;
  created_at: string;
}

type PanelTab = 'your' | 'discover';

export function SkillsPanel() {
  const { user, getAccessToken } = useAuth();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newIcon, setNewIcon] = useState('⚡');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [panelTab, setPanelTab] = useState<PanelTab>('your');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const [addingSkill, setAddingSkill] = useState<string | null>(null);

  const fetchSkills = useCallback(async () => {
    if (!user) { setLoading(false); return; }
    try {
      const token = await getAccessToken();
      const res = await fetch(`/api/skills?userId=${user.id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setSkills([]);
      } else {
        setSkills(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      setError((e as Error).message);
      setSkills([]);
    }
    setLoading(false);
  }, [user, getAccessToken]);

  useEffect(() => { void fetchSkills(); }, [fetchSkills]);

  const toggle = async (skill: Skill) => {
    try {
      const token = await getAccessToken();
      await fetch('/api/skills', {
        method: 'PATCH',
        headers: { 'content-type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ id: skill.id, enabled: !skill.enabled }),
      });
      setSkills((prev) => prev.map((s) => s.id === skill.id ? { ...s, enabled: !s.enabled } : s));
    } catch { /* ignore */ }
  };

  const remove = async (id: string) => {
    try {
      const token = await getAccessToken();
      await fetch(`/api/skills?id=${id}`, {
        method: 'DELETE',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setSkills((prev) => prev.filter((s) => s.id !== id));
    } catch { /* ignore */ }
  };

  const create = async () => {
    if (!newName.trim() || !user) return;
    setSaving(true);
    try {
      const token = await getAccessToken();
      const res = await fetch('/api/skills', {
        method: 'POST',
        headers: { 'content-type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ userId: user.id, name: newName, description: newDesc, icon: newIcon }),
      });
      const skill = await res.json();
      if (skill.error) return;
      setSkills((prev) => [skill, ...prev]);
      setNewName(''); setNewDesc(''); setNewIcon('⚡');
      setCreating(false);
    } catch { /* ignore */ }
    setSaving(false);
  };

  const addFromCatalog = async (item: SkillCatalogItem) => {
    if (!user) return;
    setAddingSkill(item.id);
    try {
      const token = await getAccessToken();
      const res = await fetch('/api/skills', {
        method: 'POST',
        headers: { 'content-type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ userId: user.id, name: item.name, description: item.description, icon: item.icon, prompt: item.description }),
      });
      const skill = await res.json();
      if (!skill.error) setSkills((prev) => [skill, ...prev]);
    } catch { /* ignore */ }
    setAddingSkill(null);
  };

  const filteredCatalog = useMemo(() => {
    return SKILL_CATALOG.filter((item) => {
      const matchSearch = !search || item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'Todos' || item.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const installedIds = useMemo(() => new Set(skills.map((s) => s.name.toLowerCase())), [skills]);

  if (loading) return <div className="flex items-center justify-center py-12"><Loader2 className="h-5 w-5 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-text-primary">Skills</h3>
        <button onClick={() => setCreating(true)} className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-[11px] text-text-muted hover:bg-white/[0.1] hover:text-text-primary transition">
          <Plus className="h-3 w-3" /> Add
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-lg bg-white/[0.04] p-0.5">
        <button onClick={() => setPanelTab('your')}
          className={`flex-1 rounded-md px-3 py-1.5 text-[12px] font-medium transition ${panelTab === 'your' ? 'bg-white/[0.08] text-text-primary' : 'text-text-dim hover:text-text-muted'}`}>
          Your skills <span className="ml-1 text-[10px] text-text-dim">({skills.length})</span>
        </button>
        <button onClick={() => setPanelTab('discover')}
          className={`flex-1 rounded-md px-3 py-1.5 text-[12px] font-medium transition ${panelTab === 'discover' ? 'bg-white/[0.08] text-text-primary' : 'text-text-dim hover:text-text-muted'}`}>
          Discover
        </button>
      </div>

      {error && (
        <div className="rounded-xl bg-rose-500/10 p-3 text-center">
          <p className="text-xs text-rose-300">{error}</p>
          <button onClick={() => { setError(null); setLoading(true); void fetchSkills(); }}
            className="mt-2 rounded-lg bg-white/[0.06] px-3 py-1.5 text-[11px] text-text-muted hover:bg-white/[0.1] transition">
            Tentar novamente
          </button>
        </div>
      )}

      {/* YOUR SKILLS TAB */}
      {panelTab === 'your' && (
        <>
          {creating && (
            <div className="rounded-xl bg-white/[0.04] p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">Nova skill</span>
                <button onClick={() => setCreating(false)} className="text-text-dim hover:text-text-primary"><X className="h-3.5 w-3.5" /></button>
              </div>
              <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nome da skill"
                className="w-full rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary placeholder:text-text-dim outline-none" />
              <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder="Descrição (opcional)"
                className="w-full rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary placeholder:text-text-dim outline-none" />
              <div className="flex flex-wrap gap-1.5">
                {['⚡', '🧠', '📝', '🔍', '🛠️', '📊', '🎨', '🔒', '🌐', '💡', '🤖', '📋'].map((ic) => (
                  <button key={ic} onClick={() => setNewIcon(ic)}
                    className={`grid h-7 w-7 place-items-center rounded-lg text-sm transition ${newIcon === ic ? 'bg-primary/20 ring-1 ring-primary' : 'bg-white/[0.04] hover:bg-white/[0.08]'}`}>
                    {ic}
                  </button>
                ))}
              </div>
              <button onClick={() => void create()} disabled={!newName.trim() || saving}
                className="w-full rounded-lg bg-white py-2 text-sm font-semibold text-black disabled:opacity-40">
                {saving ? <Loader2 className="mx-auto h-4 w-4 animate-spin" /> : 'Criar'}
              </button>
            </div>
          )}

          <div className="space-y-1">
            {skills.length === 0 && (
              <div className="rounded-xl bg-white/[0.03] p-6 text-center">
                <p className="text-sm text-text-muted">Nenhuma skill ainda.</p>
                <p className="mt-1 text-xs text-text-dim">Clique em &quot;Add&quot; para explorar o catálogo.</p>
              </div>
            )}
            {skills.map((sk) => (
              <div key={sk.id} className="group flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5 hover:bg-white/[0.05] transition">
                <span className="text-lg">{sk.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-text-primary">{sk.name}</div>
                  {sk.description && <div className="text-[11px] text-text-dim truncate">{sk.description}</div>}
                </div>
                <button onClick={() => void toggle(sk)}
                  className={`grid h-6 w-6 place-items-center rounded-md transition ${sk.enabled ? 'bg-emerald-400/20 text-emerald-400' : 'bg-white/[0.04] text-text-dim'}`}>
                  {sk.enabled ? <Check className="h-3 w-3" /> : <span className="h-2 w-2 rounded-full bg-current" />}
                </button>
                <button onClick={() => void remove(sk.id)}
                  className="hidden rounded-md p-1 text-text-dim hover:text-rose-300 hover:bg-rose-500/10 group-hover:block">
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* DISCOVER TAB */}
      {panelTab === 'discover' && (
        <>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-text-dim" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search skills and plugins"
              className="w-full rounded-lg bg-white/[0.05] py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-dim outline-none" />
          </div>

          {/* Categories */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {SKILL_CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium transition ${category === cat ? 'bg-primary/20 text-primary ring-1 ring-primary/30' : 'bg-white/[0.04] text-text-dim hover:text-text-muted'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Featured */}
          {category === 'Todos' && !search && (
            <div className="rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-4">
              <div className="text-[10px] font-medium text-emerald-400">From Anthropic</div>
              <div className="mt-1 text-base font-semibold text-text-primary">Data</div>
              <div className="mt-1 text-xs text-text-dim">Query, chart e explique seus dados — SQL, planilhas e dashboards em um só lugar.</div>
              <button onClick={() => void addFromCatalog(SKILL_CATALOG.find((s) => s.id === 'data-visualization')!)}
                className="mt-3 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-white/90 transition">
                Add
              </button>
            </div>
          )}

          {/* Skill Grid */}
          <div className="space-y-1">
            {filteredCatalog.length === 0 && (
              <p className="py-6 text-center text-xs text-text-dim">Nenhuma skill encontrada.</p>
            )}
            {filteredCatalog.map((item) => {
              const isInstalled = installedIds.has(item.name.toLowerCase());
              return (
                <div key={item.id} className="group flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-2.5 hover:bg-white/[0.05] transition">
                  <span className="text-lg">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-text-primary">{item.name}</span>
                      {item.popular && <span className="rounded bg-primary/20 px-1.5 py-0.5 text-[9px] font-medium text-primary">popular</span>}
                    </div>
                    <div className="text-[11px] text-text-dim truncate">{item.description}</div>
                    <div className="text-[10px] text-text-dim">from {item.author} — {item.category}</div>
                  </div>
                  {isInstalled ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400"><Check className="h-3 w-3" /> Instalado</span>
                  ) : (
                    <button onClick={() => void addFromCatalog(item)} disabled={addingSkill === item.id}
                      className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.06] text-text-dim hover:bg-white/[0.1] hover:text-text-primary transition disabled:opacity-50">
                      {addingSkill === item.id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Plus className="h-3.5 w-3.5" />}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}