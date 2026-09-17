'use client';

import { useState } from 'react';
import { AuthGate } from '../components/AuthGate';
import { Sidebar, SidebarChat, NavTab } from '../components/Sidebar';
import { ChatPanel, ChatMessage } from '../components/ChatPanel';
import { ProfileDialog } from '../components/ProfileDialog';
import { VersionBadge } from '../components/VersionBadge';
import { SkillsPanel } from '../components/SkillsPanel';
import { ProjectsPanel } from '../components/ProjectsPanel';
import { NeuralGraph } from '../components/NeuralGraph';
import ConnectorsPanel from '../components/ConnectorsPanel';
import { PluginsPanel } from '../components/PluginsPanel';
import { ArtifactsPanel } from '../components/ArtifactsPanel';
import CodeWorkspace from '../components/CodeWorkspace';
import ElevenCoder from '../components/ElevenCoder';
import { MediaGallery } from '../components/MediaGallery';
import { MobileAgent } from '../components/MobileAgent';
import { useAuth } from '../lib/auth';
import { Menu, Sparkles, Terminal, PanelsTopLeft, Wrench, BrainCircuit, ArrowRight, Layers, Lock } from 'lucide-react';

const FEATURES = [
  { icon: Terminal, title: 'Computer Use', desc: 'Comandos controlados, bridge segura e terminal assistido.' },
  { icon: PanelsTopLeft, title: 'Full-Stack', desc: 'Geração de código web, API, mobile e artefatos.' },
  { icon: Wrench, title: 'Testes & Validação', desc: 'Lint, typecheck e testes gerenciados pelo agente.' },
  { icon: BrainCircuit, title: 'Multimodelo', desc: 'Gateway unificado com alternância dinâmica.' },
];

export default function Home() {
  const { user } = useAuth();
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [chats, setChats] = useState<SidebarChat[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<NavTab>('conversas');
  const [settingsOpen, setSettingsOpen] = useState(false);

  const newChat = () => {
    const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    setChats((prev) => [{ id, title: 'Nova conversa', preview: '' }, ...prev]);
    setActiveChat(id); setMessages([]); setActiveNav('conversas');
    setDrawerOpen(false);
  };
  const selectChat = (id: string) => { setActiveChat(id); setMessages([]); setActiveNav('conversas'); setDrawerOpen(false); };
  const deleteChat = (id: string) => {
    setChats((p) => p.filter((c) => c.id !== id));
    if (activeChat === id) { setActiveChat(null); setMessages([]); }
  };

  if (user) {
    return (
      <main className="relative z-10 flex h-screen flex-col overflow-hidden bg-[#0c0e14]">
        {drawerOpen && (
          <div className="fixed inset-0 z-30 bg-black/60 md:hidden" onClick={() => setDrawerOpen(false)} />
        )}
        <div className="flex h-full">
          <div className="hidden md:block">
            <Sidebar chats={chats} activeChat={activeChat} onSelectChat={selectChat} onNewChat={newChat} onDeleteChat={deleteChat} activeNav={activeNav} onNavChange={setActiveNav} onOpenSettings={() => setSettingsOpen(true)} />
          </div>
          <div className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 md:hidden ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <Sidebar chats={chats} activeChat={activeChat} onSelectChat={selectChat} onNewChat={newChat} onDeleteChat={deleteChat} onClose={() => setDrawerOpen(false)} activeNav={activeNav} onNavChange={(n) => { setActiveNav(n); setDrawerOpen(false); }} onOpenSettings={() => { setSettingsOpen(true); setDrawerOpen(false); }} />
          </div>

          <div className="flex min-w-0 flex-1 flex-col md:ml-0">
            <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-3">
              <div className="flex items-center gap-3 md:hidden">
                <button onClick={() => setDrawerOpen(true)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.05] text-white/70 hover:text-white transition"
                  aria-label="Abrir menu">
                  <Menu className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs font-semibold tracking-[0.25em] text-text-primary/90">ELEVEN</span>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <ProfileDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 md:px-8 pb-8">
              {activeNav === 'conversas' && <ChatPanel messages={messages} setMessages={setMessages} />}
              {activeNav === 'projetos' && <div className="mx-auto max-w-2xl pt-8"><ProjectsPanel /></div>}
              {activeNav === 'skills' && <div className="mx-auto max-w-2xl pt-8"><SkillsPanel /></div>}
              {activeNav === 'connectors' && <div className="mx-auto max-w-2xl pt-8"><ConnectorsPanel userId={user.id} /></div>}
              {activeNav === 'plugins' && <div className="mx-auto max-w-2xl pt-8"><PluginsPanel /></div>}
              {activeNav === 'artifacts' && <div className="mx-auto max-w-2xl pt-8"><ArtifactsPanel /></div>}
              {activeNav === 'code' && (
                <div className="h-full">
                  <CodeWorkspace />
                </div>
              )}
              {activeNav === 'coder' && (
                <div className="h-full">
                  <ElevenCoder />
                </div>
              )}
              {activeNav === 'media' && <div className="mx-auto max-w-2xl pt-8"><MediaGallery /></div>}
              {activeNav === 'agent' && (
                <div className="h-full">
                  <MobileAgent />
                </div>
              )}
              {activeNav === 'neural' && <div className="mx-auto max-w-2xl pt-8"><NeuralGraph /></div>}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (started) {
    return (
      <main className="relative z-10 min-h-screen bg-transparent">
        <AuthGate><div /></AuthGate>
      </main>
    );
  }

  return (
    <main className="relative z-10 flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 bg-[#030309]/55" />
      <div className="relative flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm font-medium tracking-[0.28em] text-white">ELEVEN</span>
          </div>
          <button onClick={() => setStarted(true)}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm text-white hover:bg-white/15 transition">
            <Lock className="h-3.5 w-3.5 text-primary" /> Entrar
          </button>
        </header>
        <section className="flex flex-1 flex-col items-center justify-center px-5 pb-12 text-center md:px-6 md:pb-14">
          <div className="anim-fade-up mb-5 flex items-center gap-2 rounded-full bg-white/8 px-4 py-1.5 text-[10px] tracking-wide text-white/80 md:text-[11px]">
            <Layers className="h-3.5 w-3.5 text-primary" /> MENTE ÚNICA · AUTONOMIA TOTAL · MULTIMODELO
          </div>
          <h1 className="anim-fade-up delay-100 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
            <span className="grad-cyan-magenta">11</span>
          </h1>
          <p className="anim-fade-up delay-200 mt-5 max-w-xl text-[15px] leading-relaxed text-white/90 md:mt-6 md:max-w-2xl md:text-[17px]">
            Uma inteligência viva e ilimitada que entende o que você faz, gera código full-stack,
            controla seu computador, cria artefatos e evolui com você — no padrão Astra.
          </p>
          <button onClick={() => setStarted(true)}
            className="anim-fade-up delay-300 group mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 md:mt-8">
            Começar agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="anim-fade-up delay-400 mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12 md:gap-4 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="group rounded-2xl bg-black/45 p-4 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-black/60 md:p-5">
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#7dd3fc]/40 to-[#e879f9]/40">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-base font-semibold text-white">{f.title}</div>
                <div className="mt-1.5 text-[13px] leading-relaxed text-white/70">{f.desc}</div>
              </div>
            ))}
          </div>
        </section>
        <footer className="flex flex-col items-center gap-2 px-6 pb-6 text-center text-[11px] text-white/60">
          <span>Isolamento por usuário · RLS · Supabase Auth</span>
          <VersionBadge />
        </footer>
      </div>
    </main>
  );
}