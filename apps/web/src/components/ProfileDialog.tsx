'use client';

import { useState, useEffect, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  UserRound, Shield, Cpu, Check, X, Moon,
  CreditCard, ScrollText, Lock, Eye,
  Clock, Code2, Blocks, Plug2, Puzzle, Sun, Monitor,
} from 'lucide-react';
import { useAuth } from '../lib/auth';
import { SkillsPanel } from './SkillsPanel';
import { PluginsPanel } from './PluginsPanel';
import ConnectorsPanel from './ConnectorsPanel';

type SettingsTab = 'general' | 'account' | 'privacy' | 'billing' | 'capabilities' | 'memory' | 'reflect' | 'time' | 'code' | 'skills' | 'connectors' | 'plugins';

export function ProfileDialog({ open: externalOpen, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void } = {}) {
  const { user, supabase, signOut, getAccessToken } = useAuth();
  const [internalOpen, setInternalOpen] = useState(false);
  const open = externalOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;
  const [settingsTab, setSettingsTab] = useState<SettingsTab>('general');
  const [name, setName] = useState(user?.user_metadata?.name ?? '');
  const [callYou, setCallYou] = useState(user?.user_metadata?.callYou ?? '');
  const [workCategory, setWorkCategory] = useState(user?.user_metadata?.workCategory ?? 'other');
  const [instructions, setInstructions] = useState(user?.user_metadata?.instructions ?? '');
  const [saved, setSaved] = useState(false);
  const [geminiKey, setGeminiKey] = useState('');
  const [anthropicKey, setAnthropicKey] = useState('');
  const [nineRouterKey, setNineRouterKey] = useState('');
  const [keysSaved, setKeysSaved] = useState(false);
  const [changelog, setChangelog] = useState<string[] | null>(null);
  const [appVersion, setAppVersion] = useState('');
  const [appearance, setAppearance] = useState<'dark' | 'light' | 'system'>('dark');
  const [chatFont, setChatFont] = useState('system');
  const [motion, setMotion] = useState<'system' | 'reduced'>('system');
  const [codeFont, setCodeFont] = useState('JetBrains Mono');
  const [branchPrefix, setBranchPrefix] = useState('eleven');
  const [autoPR, setAutoPR] = useState(false);
  const [autoFix, setAutoFix] = useState(false);
  const [busySignout, setBusySignout] = useState(false);
  const [memories, setMemories] = useState<{ id: string; title?: string; content?: string }[]>([]);
  const [memoryLoading, setMemoryLoading] = useState(false);

  // Capabilities (persistidas em user_settings)
  const [caps, setCaps] = useState<Record<string, boolean>>({
    webSearch: true, memory: true, codeExecution: false, fileUpload: true, screenshot: true, voiceChat: true,
  });
  // Privacy
  const [incognito, setIncognito] = useState(false);
  const [dataBusy, setDataBusy] = useState(false);
  // Account
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [accountMsg, setAccountMsg] = useState('');
  const [accountBusy, setAccountBusy] = useState(false);
  // Reflect (stats)
  const [stats, setStats] = useState<{ memories: number; skills: number; projects: number; media: number; sessions: number } | null>(null);
  // Time & focus
  const [quietStart, setQuietStart] = useState('22:00');
  const [quietEnd, setQuietEnd] = useState('07:00');
  const [quietEnabled, setQuietEnabled] = useState(false);
  const [pomoMin, setPomoMin] = useState(25);
  const [pomoLeft, setPomoLeft] = useState(25 * 60);
  const [pomoRunning, setPomoRunning] = useState(false);

  const loadSettings = useCallback(async () => {
    if (!user) return;
    try {
      const token = await getAccessToken();
      const res = await fetch(`/api/settings?userId=${user.id}`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (data.geminiKey) setGeminiKey(data.geminiKey);
      if (data.anthropicKey) setAnthropicKey(data.anthropicKey);
      if (data.nineRouterKey) setNineRouterKey(data.nineRouterKey);
      if (data.appearance) setAppearance(data.appearance);
      if (data.chatFont) setChatFont(data.chatFont);
      if (data.motion) setMotion(data.motion);
      if (data.codeFont) setCodeFont(data.codeFont);
      if (data.branchPrefix) setBranchPrefix(data.branchPrefix);
      if (data.autoPR !== undefined) setAutoPR(data.autoPR);
      if (data.autoFix !== undefined) setAutoFix(data.autoFix);
      if (data.name) setName(data.name);
      if (data.callYou) setCallYou(data.callYou);
      if (data.workCategory) setWorkCategory(data.workCategory);
      if (data.instructions) setInstructions(data.instructions);
      if (data.caps) setCaps((prev) => ({ ...prev, ...data.caps }));
      if (data.incognito !== undefined) setIncognito(data.incognito);
      if (data.quietStart) setQuietStart(data.quietStart);
      if (data.quietEnd) setQuietEnd(data.quietEnd);
      if (data.quietEnabled !== undefined) setQuietEnabled(data.quietEnabled);
      if (data.pomoMin) { setPomoMin(data.pomoMin); setPomoLeft(data.pomoMin * 60); }
    } catch { /* ignore */ }
  }, [user, getAccessToken]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    if (appearance === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(prefersDark ? 'dark' : 'light');
    } else {
      root.classList.add(appearance);
    }
  }, [appearance]);

  const loadMemories = useCallback(async () => {
    if (!user) return;
    setMemoryLoading(true);
    try {
      const token = await getAccessToken();
      const res = await fetch(`/api/memories?userId=${user.id}`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      setMemories(Array.isArray(data) ? data : []);
    } catch { setMemories([]); }
    setMemoryLoading(false);
  }, [user, getAccessToken]);

  useEffect(() => {
    if (open) {
      void loadSettings();
      fetch('/version.json').then((r) => r.json()).then((v) => { setAppVersion(v.version ?? ''); setChangelog(v.changelog ?? []); }).catch(() => {});
      if (settingsTab === 'memory' && user) void loadMemories();
    }
  }, [open, settingsTab, user, loadSettings, loadMemories]);

  const deleteMemory = async (id: string) => {
    try {
      const token = await getAccessToken();
      await fetch(`/api/memories?id=${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
      setMemories((prev) => prev.filter((m) => m.id !== id));
    } catch { /* ignore */ }
  };

  const changePassword = async () => {
    if (!newPassword || newPassword.length < 6) { setAccountMsg('Senha muito curta (mín. 6).'); return; }
    setAccountBusy(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setAccountMsg(error ? `Erro: ${error.message}` : 'Senha atualizada ✓');
    setNewPassword('');
    setAccountBusy(false);
  };

  const changeEmail = async () => {
    if (!newEmail || !newEmail.includes('@')) { setAccountMsg('E-mail inválido.'); return; }
    setAccountBusy(true);
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    setAccountMsg(error ? `Erro: ${error.message}` : 'Confirmação enviada para o novo e-mail ✓');
    setNewEmail('');
    setAccountBusy(false);
  };

  const deleteAccount = async () => {
    if (!user) return;
    const sure = window.confirm('Isso apaga sua conta e TODOS os seus dados permanentemente. Continuar?');
    if (!sure) return;
    setAccountBusy(true);
    try {
      const token = await getAccessToken();
      const res = await fetch('/api/account', { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      if (data.ok) { await signOut(); }
      else setAccountMsg(data.error ?? 'Falha ao excluir conta.');
    } catch (e) { setAccountMsg((e as Error).message); }
    setAccountBusy(false);
  };

  const exportData = async () => {
    if (!user) return;
    setDataBusy(true);
    try {
      const token = await getAccessToken();
      const auth = { Authorization: `Bearer ${token}` };
      const [mem, sk, proj, media] = await Promise.all([
        fetch(`/api/memories?userId=${user.id}`, { headers: auth }).then((r) => r.json()).catch(() => []),
        fetch(`/api/skills?userId=${user.id}`, { headers: auth }).then((r) => r.json()).catch(() => []),
        fetch(`/api/projects?userId=${user.id}`, { headers: auth }).then((r) => r.json()).catch(() => []),
        fetch(`/api/media?userId=${user.id}`, { headers: auth }).then((r) => r.json()).catch(() => []),
      ]);
      const payload = {
        exported_at: new Date().toISOString(),
        profile: { name, callYou, workCategory, instructions, appearance, chatFont, motion, codeFont },
        settings: { caps, incognito, quietStart, quietEnd, quietEnabled, pomoMin },
        memories: mem, skills: sk, projects: proj, media,
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `eleven-dados-${Date.now()}.json`; a.click();
      URL.revokeObjectURL(url);
    } catch { /* ignore */ }
    setDataBusy(false);
  };

  const loadStats = useCallback(async () => {
    if (!user) return;
    try {
      const token = await getAccessToken();
      const auth = { Authorization: `Bearer ${token}` };
      const [mem, sk, proj, media] = await Promise.all([
        fetch(`/api/memories?userId=${user.id}`, { headers: auth }).then((r) => r.json()).catch(() => []),
        fetch(`/api/skills?userId=${user.id}`, { headers: auth }).then((r) => r.json()).catch(() => []),
        fetch(`/api/projects?userId=${user.id}`, { headers: auth }).then((r) => r.json()).catch(() => []),
        fetch(`/api/media?userId=${user.id}`, { headers: auth }).then((r) => r.json()).catch(() => []),
      ]);
      setStats({
        memories: Array.isArray(mem) ? mem.length : 0,
        skills: Array.isArray(sk) ? sk.length : 0,
        projects: Array.isArray(proj) ? proj.length : 0,
        media: Array.isArray(media) ? media.length : 0,
        sessions: 0,
      });
    } catch { /* ignore */ }
  }, [user, getAccessToken]);

  useEffect(() => { if (open && settingsTab === 'reflect' && user) void loadStats(); }, [open, settingsTab, user, loadStats]);

  // Pomodoro
  useEffect(() => {
    if (!pomoRunning) return;
    const t = setInterval(() => {
      setPomoLeft((s) => {
        if (s <= 1) { setPomoRunning(false); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [pomoRunning]);

  const saveProfile = async () => {
    await supabase.auth.updateUser({ data: { name, callYou, workCategory, instructions } });
    if (user) {
      try {
        const token = await getAccessToken();
        await fetch('/api/settings', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user.id,
            settings: { name, callYou, workCategory, instructions, geminiKey, anthropicKey, nineRouterKey, appearance, chatFont, motion, codeFont, branchPrefix, autoPR, autoFix, caps, incognito, quietStart, quietEnd, quietEnabled, pomoMin },
          }),
        });
        localStorage.setItem('eleven_api_keys', JSON.stringify({ gemini: geminiKey, anthropic: anthropicKey, nineRouter: nineRouterKey }));
      } catch { /* ignore */ }
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const saveKeys = async () => {
    if (!user) return;
    try {
      await saveProfile();
      setKeysSaved(true);
      setTimeout(() => setKeysSaved(false), 2000);
    } catch { /* ignore */ }
  };

  const handleSignOut = async () => { setBusySignout(true); await signOut(); setBusySignout(false); };

  const settingsNav: Array<{ id: SettingsTab; label: string; icon: any; section?: string }> = [
    { id: 'general', icon: UserRound, label: 'General', section: 'Settings' },
    { id: 'account', icon: Lock, label: 'Account' },
    { id: 'privacy', icon: Shield, label: 'Privacy' },
    { id: 'billing', icon: CreditCard, label: 'Billing' },
    { id: 'capabilities', icon: Cpu, label: 'Capabilities' },
    { id: 'memory', icon: Eye, label: 'Memory' },
    { id: 'reflect', icon: ScrollText, label: 'Reflect' },
    { id: 'time', icon: Clock, label: 'Time and focus' },
    { id: 'code', icon: Code2, label: 'Claude Code' },
    { id: 'skills', icon: Blocks, label: 'Skills', section: 'Customize' },
    { id: 'connectors', icon: Plug2, label: 'Connectors' },
    { id: 'plugins', icon: Puzzle, label: 'Plugins' },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.05] text-text-muted transition hover:text-text-primary" aria-label="Configurações">
          <Cpu className="h-4 w-4" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="glass-card fixed inset-0 z-50 flex flex-col overflow-hidden rounded-none md:left-1/2 md:top-1/2 md:h-[86vh] md:w-[92vw] md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 md:px-4">
            <Dialog.Title className="text-base font-semibold text-text-primary">Settings</Dialog.Title>
            <Dialog.Close className="grid h-7 w-7 place-items-center rounded-lg text-text-dim transition hover:bg-white/6 hover:text-text-primary">
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>

          {/* Mobile: horizontal scrollable tabs */}
          <div className="flex overflow-x-auto border-b border-white/[0.06] md:hidden no-scrollbar">
            {settingsNav.map((item) => (
              <button key={item.id} onClick={() => setSettingsTab(item.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-2.5 text-[11px] font-medium transition border-b-2 ${settingsTab === item.id ? 'border-primary text-text-primary' : 'border-transparent text-text-dim hover:text-text-muted'}`}>
                <item.icon className="h-3 w-3 opacity-70" /> {item.label}
              </button>
            ))}
          </div>

          <div className="flex min-h-0 flex-1 flex-col md:flex-row">
            {/* Desktop: sidebar navigation */}
            <div className="hidden w-56 shrink-0 flex-col border-r border-white/[0.06] md:flex">
              <div className="flex-1 overflow-y-auto px-2 pb-2">
                <nav className="space-y-0.5">
                  {settingsNav.map((item) => (
                    <div key={item.id}>
                      {item.section && <div className="px-2.5 pt-3 pb-1 text-[10px] font-medium uppercase tracking-wider text-text-dim">{item.section}</div>}
                      <button onClick={() => setSettingsTab(item.id)}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition ${settingsTab === item.id ? 'bg-white/6 text-text-primary' : 'text-text-muted hover:bg-white/[0.03] hover:text-text-primary'}`}>
                        <item.icon className="h-3.5 w-3.5 opacity-70" /> {item.label}
                      </button>
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">

            {/* GENERAL */}
            {settingsTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Profile</h2>

                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#e879f9] text-lg font-bold text-black">
                    {(name || user?.email || 'U').slice(0, 2).toUpperCase()}
                  </div>
                  <div><div className="text-lg font-semibold text-text-primary">{name || 'Usuário'}</div><div className="text-sm text-text-muted">{user?.email}</div></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs text-text-muted">Full name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome"
                      className="w-full rounded-lg bg-white/[0.05] px-3.5 py-2.5 text-sm text-text-primary outline-none" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-text-muted">What should Eleven call you?</label>
                    <input value={callYou} onChange={(e) => setCallYou(e.target.value)} placeholder="Como quer ser chamado"
                      className="w-full rounded-lg bg-white/[0.05] px-3.5 py-2.5 text-sm text-text-primary outline-none" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-text-muted">What best describes your work?</label>
                    <select value={workCategory} onChange={(e) => setWorkCategory(e.target.value)}
                      className="w-full rounded-lg bg-white/[0.05] px-3.5 py-2.5 text-sm text-text-primary outline-none">
                      <option value="other">Other</option>
                      <option value="engineering">Engineering</option>
                      <option value="design">Design</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="legal">Legal</option>
                      <option value="finance">Finance</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-text-muted">Instructions for Eleven</label>
                    <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)}
                      placeholder="e.g. keep explanations brief and to the point"
                      rows={3}
                      className="w-full rounded-lg bg-white/[0.05] px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-dim outline-none resize-none" />
                    <p className="mt-1 text-[10px] text-text-dim">Eleven vai seguir essas instruções em todas as suas conversas.</p>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-4">
                  <h3 className="text-sm font-semibold text-text-primary mb-3">Preferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Appearance</span>
                      <div className="flex rounded-lg bg-white/[0.04] p-0.5">
                        {(['dark', 'light', 'system'] as const).map((a) => (
                          <button key={a} onClick={() => setAppearance(a)}
                            className={`rounded-md px-3 py-1.5 text-[11px] transition ${appearance === a ? 'bg-white/10 text-text-primary' : 'text-text-dim hover:text-text-muted'}`}>
                            {a === 'dark' ? <Moon className="h-3 w-3" /> : a === 'light' ? <Sun className="h-3 w-3" /> : <Monitor className="h-3 w-3" />}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Chat font</span>
                      <select value={chatFont} onChange={(e) => setChatFont(e.target.value)}
                        className="rounded-lg bg-white/[0.05] px-3 py-1.5 text-xs text-text-primary outline-none">
                        <option value="system">System</option>
                        <option value="serif">Serif</option>
                        <option value="mono">Mono</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Motion</span>
                      <div className="flex rounded-lg bg-white/[0.04] p-0.5">
                        {(['system', 'reduced'] as const).map((m) => (
                          <button key={m} onClick={() => setMotion(m)}
                            className={`rounded-md px-3 py-1.5 text-[11px] transition ${motion === m ? 'bg-white/10 text-text-primary' : 'text-text-dim hover:text-text-muted'}`}>
                            {m === 'system' ? 'System' : 'Reduced'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button onClick={saveProfile}
                  className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">
                  {saved ? 'Salvo ✓' : 'Salvar alterações'}
                </button>

                <div className="border-t border-white/[0.06] pt-4">
                  <h3 className="text-sm font-semibold text-text-primary mb-3">Backup</h3>
                  <div className="flex gap-2">
                    <button onClick={() => {
                      const data = { name, callYou, workCategory, instructions, appearance, chatFont, motion, codeFont, branchPrefix, autoPR, autoFix, geminiKey, anthropicKey, nineRouterKey };
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url; a.download = 'eleven-settings.json'; a.click();
                      URL.revokeObjectURL(url);
                    }} className="rounded-lg bg-white/[0.06] px-3 py-2 text-xs text-text-muted hover:bg-white/10 hover:text-text-primary transition">
                      Exportar configurações
                    </button>
                    <label className="rounded-lg bg-white/[0.06] px-3 py-2 text-xs text-text-muted hover:bg-white/10 hover:text-text-primary transition cursor-pointer">
                      Importar configurações
                      <input type="file" accept=".json" className="hidden" onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (!f) return;
                        const reader = new FileReader();
                        reader.onload = () => {
                          try {
                            const d = JSON.parse(reader.result as string);
                            if (d.name) setName(d.name);
                            if (d.callYou) setCallYou(d.callYou);
                            if (d.workCategory) setWorkCategory(d.workCategory);
                            if (d.instructions) setInstructions(d.instructions);
                            if (d.appearance) setAppearance(d.appearance);
                            if (d.chatFont) setChatFont(d.chatFont);
                            if (d.motion) setMotion(d.motion);
                            if (d.codeFont) setCodeFont(d.codeFont);
                            if (d.branchPrefix) setBranchPrefix(d.branchPrefix);
                            if (d.autoPR !== undefined) setAutoPR(d.autoPR);
                            if (d.autoFix !== undefined) setAutoFix(d.autoFix);
                            if (d.geminiKey) setGeminiKey(d.geminiKey);
                            if (d.anthropicKey) setAnthropicKey(d.anthropicKey);
                            if (d.nineRouterKey) setNineRouterKey(d.nineRouterKey);
                            alert('Configurações importadas com sucesso!');
                          } catch { alert('Arquivo inválido'); }
                        };
                        reader.readAsText(f);
                      }} />
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* ACCOUNT */}
            {settingsTab === 'account' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Account</h2>

                <div className="rounded-xl bg-white/[0.04] p-4 space-y-3">
                  <div className="text-sm font-medium text-text-primary">Alterar e-mail</div>
                  <div className="text-xs text-text-dim">{user?.email}</div>
                  <div className="flex gap-2">
                    <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="novo@email.com"
                      className="flex-1 rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary outline-none" />
                    <button onClick={() => void changeEmail()} disabled={accountBusy}
                      className="rounded-lg bg-white/[0.08] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.12] transition disabled:opacity-40">
                      Enviar
                    </button>
                  </div>
                </div>

                <div className="rounded-xl bg-white/[0.04] p-4 space-y-3">
                  <div className="text-sm font-medium text-text-primary">Alterar senha</div>
                  <div className="flex gap-2">
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Nova senha (mín. 6)"
                      className="flex-1 rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary outline-none" />
                    <button onClick={() => void changePassword()} disabled={accountBusy}
                      className="rounded-lg bg-white/[0.08] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.12] transition disabled:opacity-40">
                      Salvar
                    </button>
                  </div>
                </div>

                {accountMsg && <p className="text-xs text-emerald-400">{accountMsg}</p>}

                <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-4">
                  <div><div className="text-sm text-text-primary">Sair de todos os dispositivos</div></div>
                  <button onClick={() => void handleSignOut()} className="rounded-lg bg-white/[0.06] px-4 py-2 text-xs text-text-muted hover:bg-white/[0.1] transition">
                    {busySignout ? 'Saindo…' : 'Sair'}
                  </button>
                </div>

                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm text-text-primary">Organization ID</div>
                  <div className="mt-1 font-mono text-xs text-text-dim">{user?.id?.slice(0, 8) ?? '—'}</div>
                </div>

                <div className="rounded-xl bg-rose-500/[0.06] p-4">
                  <div className="text-sm font-medium text-rose-300">Excluir conta</div>
                  <p className="mt-1 text-xs text-text-muted">Apaga permanentemente sua conta e todos os dados (conversas, memórias, projetos, mídia).</p>
                  <button onClick={() => void deleteAccount()} disabled={accountBusy}
                    className="mt-3 rounded-lg bg-rose-500/20 px-4 py-2 text-xs text-rose-300 hover:bg-rose-500/30 transition disabled:opacity-40">
                    {accountBusy ? 'Processando…' : 'Excluir minha conta'}
                  </button>
                </div>
              </div>
            )}

            {/* PRIVACY */}
            {settingsTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Privacy</h2>
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm text-text-primary">Dados isolados por usuário</div>
                  <p className="mt-1 text-xs text-text-muted">Cada usuário só enxerga seus próprios dados via RLS no Supabase.</p>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-4">
                  <div>
                    <div className="text-sm text-text-primary">Modo Incognito</div>
                    <p className="mt-1 text-xs text-text-muted">Conversa sem usar nem salvar memória — bom para assuntos sensíveis.</p>
                  </div>
                  <div className={`h-5 w-9 shrink-0 rounded-full transition ${incognito ? 'bg-primary' : 'bg-white/10'} relative cursor-pointer`}
                    onClick={() => setIncognito(!incognito)}>
                    <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${incognito ? 'left-[18px]' : 'left-0.5'}`} />
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm font-medium text-text-primary">Seus dados</div>
                  <p className="mt-1 text-xs text-text-muted">Baixe uma cópia de tudo (memórias, skills, projetos, mídia e configurações) em JSON.</p>
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => void exportData()} disabled={dataBusy}
                      className="rounded-lg bg-white/[0.06] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.1] hover:text-text-primary transition disabled:opacity-40">
                      {dataBusy ? 'Exportando…' : 'Exportar meus dados'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* BILLING */}
            {settingsTab === 'billing' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Billing</h2>
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm text-text-primary">Plano atual</div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="rounded-lg bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-300">FREE</span>
                    <span className="text-xs text-text-dim">100% gratuito · 9Router + Gemini</span>
                  </div>
                </div>
              </div>
            )}

            {/* CAPABILITIES */}
            {settingsTab === 'capabilities' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Capabilities</h2>
                <div className="space-y-3">
                  {([
                    { key: 'webSearch', label: 'Web search', desc: 'Pesquisar na internet em tempo real' },
                    { key: 'memory', label: 'Memory', desc: 'Guardar e recuperar informações de conversas' },
                    { key: 'codeExecution', label: 'Code execution', desc: 'Executar scripts e processar arquivos' },
                    { key: 'fileUpload', label: 'File upload', desc: 'Analisar PDFs, imagens e planilhas' },
                    { key: 'screenshot', label: 'Screenshot', desc: 'Capturar tela do computador' },
                    { key: 'voiceChat', label: 'Voice chat', desc: 'Falar com o 11 por voz' },
                  ] as const).map((cap) => {
                    const on = caps[cap.key];
                    return (
                      <div key={cap.key} className="flex items-center justify-between rounded-xl bg-white/[0.04] p-4">
                        <div>
                          <div className="text-sm text-text-primary">{cap.label}</div>
                          <div className="text-xs text-text-dim">{cap.desc}</div>
                        </div>
                        <div className={`h-5 w-9 shrink-0 rounded-full transition ${on ? 'bg-primary' : 'bg-white/10'} relative cursor-pointer`}
                          onClick={() => { setCaps((prev) => ({ ...prev, [cap.key]: !prev[cap.key] })); setSaved(false); }}>
                          <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${on ? 'left-[18px]' : 'left-0.5'}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button onClick={() => void saveProfile()}
                  className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">
                  {saved ? 'Salvo ✓' : 'Salvar capabilities'}
                </button>
              </div>
            )}

            {/* MEMORY */}
            {settingsTab === 'memory' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Memory</h2>
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm text-text-primary">Memórias salvas</div>
                  <p className="mt-1 text-xs text-text-muted">Informações relevantes de conversas passadas ficam salvas aqui.</p>
                  <div className="mt-3 space-y-2">
                    {memories.map((m) => (
                      <div key={m.id} className="rounded-lg bg-white/[0.04] px-3 py-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs text-text-primary truncate">{m.title}</span>
                          <button onClick={() => deleteMemory(m.id)}
                            className="text-[10px] text-text-dim hover:text-rose-400 transition">remover</button>
                        </div>
                        <p className="mt-1 text-[11px] leading-relaxed text-text-dim whitespace-pre-wrap">{m.content}</p>
                      </div>
                    ))}
                    {memories.length === 0 && <p className="text-[11px] text-text-dim">{memoryLoading ? 'carregando…' : 'Nenhuma memória salva ainda.'}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* REFLECT */}
            {settingsTab === 'reflect' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Reflect</h2>
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm text-text-primary">Resumo de uso</div>
                  <p className="mt-1 text-xs text-text-muted">Visão geral do que você construiu com a 11.</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { label: 'Memórias', value: stats?.memories },
                      { label: 'Skills', value: stats?.skills },
                      { label: 'Projetos', value: stats?.projects },
                      { label: 'Mídia', value: stats?.media },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-white/[0.04] p-3 text-center">
                        <div className="text-xl font-semibold text-primary">{s.value ?? '—'}</div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-text-dim">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  {!stats && <p className="mt-3 text-[11px] text-text-dim">carregando…</p>}
                </div>
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm text-text-primary">Dica</div>
                  <p className="mt-1 text-xs text-text-muted">Ative a Memory no chat para a 11 lembrar do contexto entre conversas e preencher este resumo.</p>
                </div>
              </div>
            )}

            {/* TIME AND FOCUS */}
            {settingsTab === 'time' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Time and focus</h2>

                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-text-primary">Quiet hours</div>
                    <div className={`h-5 w-9 shrink-0 rounded-full transition ${quietEnabled ? 'bg-primary' : 'bg-white/10'} relative cursor-pointer`}
                      onClick={() => setQuietEnabled(!quietEnabled)}>
                      <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${quietEnabled ? 'left-[18px]' : 'left-0.5'}`} />
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-text-muted">Não receber notificações nesse intervalo.</p>
                  <div className="mt-3 flex items-center gap-2">
                    <input type="time" value={quietStart} onChange={(e) => setQuietStart(e.target.value)}
                      className="rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary outline-none" />
                    <span className="text-xs text-text-dim">até</span>
                    <input type="time" value={quietEnd} onChange={(e) => setQuietEnd(e.target.value)}
                      className="rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary outline-none" />
                  </div>
                </div>

                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm text-text-primary">Pomodoro timer</div>
                  <p className="mt-1 text-xs text-text-muted">Lembretes de pausa para manter o foco.</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="font-mono text-3xl font-semibold text-primary">
                      {String(Math.floor(pomoLeft / 60)).padStart(2, '0')}:{String(pomoLeft % 60).padStart(2, '0')}
                    </div>
                    <button onClick={() => setPomoRunning(!pomoRunning)}
                      className="rounded-lg bg-white/[0.08] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.12] transition">
                      {pomoRunning ? 'Pausar' : 'Iniciar'}
                    </button>
                    <button onClick={() => { setPomoRunning(false); setPomoLeft(pomoMin * 60); }}
                      className="rounded-lg bg-white/[0.06] px-3 py-2 text-xs text-text-dim hover:text-text-muted transition">
                      Resetar
                    </button>
                    <select value={pomoMin} onChange={(e) => { const v = Number(e.target.value); setPomoMin(v); setPomoLeft(v * 60); setPomoRunning(false); }}
                      className="rounded-lg bg-white/[0.05] px-2 py-2 text-xs text-text-primary outline-none">
                      {[15, 25, 45, 60].map((m) => <option key={m} value={m}>{m} min</option>)}
                    </select>
                  </div>
                </div>

                <button onClick={() => void saveProfile()}
                  className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">
                  {saved ? 'Salvo ✓' : 'Salvar preferências'}
                </button>
              </div>
            )}

            {/* CLAUDE CODE */}
            {settingsTab === 'code' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Claude Code</h2>
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm text-text-primary">Code font</div>
                  <input value={codeFont} onChange={(e) => setCodeFont(e.target.value)} placeholder="JetBrains Mono"
                    className="mt-2 w-full rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary outline-none" />
                </div>
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-sm text-text-primary">Branch prefix</div>
                  <input value={branchPrefix} onChange={(e) => setBranchPrefix(e.target.value)}
                    className="mt-2 w-full rounded-lg bg-white/[0.05] px-3 py-2 text-sm text-text-primary outline-none" />
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-4">
                  <div><div className="text-sm text-text-primary">Create pull requests automatically</div></div>
                  <div className={`h-5 w-9 rounded-full transition ${autoPR ? 'bg-primary' : 'bg-white/10'} relative cursor-pointer`} onClick={() => setAutoPR(!autoPR)}>
                    <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${autoPR ? 'left-[18px]' : 'left-0.5'}`} />
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-white/[0.04] p-4">
                  <div><div className="text-sm text-text-primary">Auto-fix pull requests</div></div>
                  <div className={`h-5 w-9 rounded-full transition ${autoFix ? 'bg-primary' : 'bg-white/10'} relative cursor-pointer`} onClick={() => setAutoFix(!autoFix)}>
                    <div className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${autoFix ? 'left-[18px]' : 'left-0.5'}`} />
                  </div>
                </div>
              </div>
            )}

            {/* SKILLS */}
            {settingsTab === 'skills' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Skills</h2>
                <SkillsPanel />
              </div>
            )}

            {/* CONNECTORS */}
            {settingsTab === 'connectors' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Connectors</h2>
                {user && <ConnectorsPanel userId={user.id} />}
              </div>
            )}

            {/* PLUGINS */}
            {settingsTab === 'plugins' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-text-primary">Plugins</h2>
                <PluginsPanel />
              </div>
            )}

            {/* APIs (acessível pelo General ou como sub-seção) */}
            {settingsTab === 'general' && (
              <div className="border-t border-white/[0.06] pt-4 mt-6">
                <h3 className="text-sm font-semibold text-text-primary mb-3">API Keys</h3>
                <div className="space-y-3">
                  <div>
                    <label className="mb-1.5 block text-xs text-text-muted">Gemini API Key</label>
                    <input type="password" value={geminiKey} onChange={(e) => setGeminiKey(e.target.value)} placeholder="AIza..."
                      className="w-full rounded-lg bg-white/[0.05] px-3.5 py-2.5 text-sm text-text-primary outline-none" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-text-muted">Anthropic API Key</label>
                    <input type="password" value={anthropicKey} onChange={(e) => setAnthropicKey(e.target.value)} placeholder="sk-ant-..."
                      className="w-full rounded-lg bg-white/[0.05] px-3.5 py-2.5 text-sm text-text-primary outline-none" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-text-muted">9Router Endpoint + Key</label>
                    <input type="password" value={nineRouterKey} onChange={(e) => setNineRouterKey(e.target.value)} placeholder="http://localhost:20128|sua-chave"
                      className="w-full rounded-lg bg-white/[0.05] px-3.5 py-2.5 text-sm text-text-primary outline-none" />
                    <p className="mt-1 text-[10px] text-text-dim">Formato: endpoint|chave — rode 9Router com: npx 9router</p>
                  </div>
                  <button onClick={saveKeys} className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">
                    {keysSaved ? 'Salvo ✓' : 'Salvar chaves'}
                  </button>
                </div>
              </div>
            )}

            {/* CHANGELOG */}
            {settingsTab === 'general' && (
              <div className="border-t border-white/[0.06] pt-4 mt-6">
                <h3 className="text-sm font-semibold text-text-primary mb-3">Changelog</h3>
                <div className="rounded-xl bg-white/[0.04] p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted">Versão</span>
                    <span className="font-mono text-[11px] text-primary">{appVersion || '…'}</span>
                  </div>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {(changelog ?? []).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-text-dim">
                      <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}