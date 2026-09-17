'use client';

import { useMemo, useState } from 'react';
import { MessageSquare, Plus, Settings, Sparkles, LogOut, Trash2, FolderGit2, Code2, Blocks, ChevronLeft, Brain, Plug2, Puzzle, FileText, Terminal } from 'lucide-react';
import { useAuth } from '../lib/auth';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export interface SidebarChat { id: string; title: string; preview?: string; }

export type NavTab = 'conversas' | 'projetos' | 'skills' | 'code' | 'coder' | 'neural' | 'artifacts' | 'connectors' | 'plugins' | 'media' | 'agent';

interface SidebarProps {
  chats: SidebarChat[];
  activeChat: string | null;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
  onDeleteChat: (id: string) => void;
  onClose?: () => void;
  activeNav: NavTab;
  onNavChange: (nav: NavTab) => void;
  onOpenSettings?: () => void;
}

export function Sidebar({ chats, activeChat, onSelectChat, onNewChat, onDeleteChat, onClose, activeNav, onNavChange, onOpenSettings }: SidebarProps) {
  const { user, signOut } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [busySignout, setBusySignout] = useState(false);

  const initials = useMemo(() => {
    const n = user?.email?.split('@')[0] ?? 'U';
    return n.slice(0, 2).toUpperCase();
  }, [user?.email]);

  const handleSignOut = async () => { setBusySignout(true); await signOut(); setBusySignout(false); };

  if (collapsed) {
    return (
      <aside className="flex h-full w-[60px] flex-col items-center gap-2 bg-[#0a0d12] py-4">
        <button onClick={() => setCollapsed(false)} className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-text-muted hover:text-text-primary transition" title="Menu">
          <MessageSquare className="h-4 w-4" />
        </button>
        <button onClick={onNewChat} className="mt-1 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7dd3fc]/20 to-[#e879f9]/20 text-primary hover:brightness-110 transition" title="Nova conversa">
          <Plus className="h-4 w-4" />
        </button>
        <div className="mt-auto flex flex-col items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#e879f9] text-[11px] font-bold text-black">{initials}</div>
        </div>
      </aside>
    );
  }

  const navItems: Array<{ id: NavTab; label: string; icon: any; section?: string }> = [
    { id: 'conversas', label: 'Conversas', icon: MessageSquare, section: 'Menu' },
    { id: 'projetos', label: 'Projects', icon: FolderGit2 },
    { id: 'artifacts', label: 'Artifacts', icon: FileText },
    { id: 'code', label: 'Code & Terminal', icon: Code2 },
    { id: 'coder', label: 'Eleven Coder', icon: Terminal },
    { id: 'neural', label: 'Rede Neural', icon: Brain },
    { id: 'skills', label: 'Skills', icon: Blocks, section: 'Customize' },
    { id: 'connectors', label: 'Connectors', icon: Plug2 },
    { id: 'media', label: 'Mídia', icon: FileText },
    { id: 'agent', label: 'Agente PC', icon: Terminal },
    { id: 'plugins', label: 'Plugins', icon: Puzzle },
  ];

  return (
    <aside className="flex h-full w-[272px] shrink-0 flex-col bg-[#0d0f15]">
      <div className="flex items-center justify-between px-4 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[#7dd3fc] to-[#e879f9]">
            <Sparkles className="h-4 w-4 text-black" />
          </div>
          <span className="font-mono text-[12px] font-semibold tracking-[0.22em] text-text-primary/90">ELEVEN</span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => { if (onClose) onClose(); else setCollapsed(true); }}
            className="p-1.5 rounded-lg text-text-dim hover:bg-white/5 hover:text-text-primary transition" title="Fechar">
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="px-3 pb-1">
        <button onClick={onNewChat}
          className="flex w-full items-center gap-2 rounded-xl bg-white/[0.05] px-3 py-2.5 text-[13px] font-medium text-text-muted transition hover:bg-white/[0.09] hover:text-text-primary">
          <Plus className="h-4 w-4 text-primary" /> Nova conversa
        </button>
      </div>

      <div className="mt-3 px-3">
        <nav className="space-y-0.5">
          {navItems.map((ni) => (
            <div key={ni.id}>
              {ni.section && <div className="px-2.5 pt-3 pb-1 text-[10px] font-medium uppercase tracking-wider text-text-dim">{ni.section}</div>}
              <button onClick={() => onNavChange(ni.id)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition ${activeNav === ni.id ? 'bg-white/6 text-text-primary' : 'text-text-muted hover:bg-white/[0.03] hover:text-text-primary'}`}>
                <ni.icon className="h-3.5 w-3.5 opacity-70" /> {ni.label}
              </button>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-3 flex-1 overflow-y-auto px-3 pb-2">
        {activeNav === 'conversas' && <>
          <div className="px-1.5 pb-1.5 text-[10px] font-medium uppercase tracking-wider text-text-dim">Recentes</div>
          {chats.length === 0 && <p className="px-1.5 py-2 text-xs text-text-dim">Nenhuma conversa ainda.</p>}
          <div className="space-y-0.5">
            {chats.map((c) => (
              <div key={c.id} onClick={() => onSelectChat(c.id)}
                className={`group flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] transition ${activeChat === c.id ? 'bg-white/5 text-text-primary' : 'text-text-muted hover:bg-white/[0.03] hover:text-text-primary'}`}>
                <MessageSquare className="h-3.5 w-3.5 shrink-0 opacity-50" />
                <span className="flex-1 truncate">{c.title}</span>
                <button onClick={(e) => { e.stopPropagation(); onDeleteChat(c.id); }}
                  className="hidden shrink-0 rounded-md p-1 text-text-dim hover:text-rose-300 hover:bg-rose-500/10 group-hover:block">
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </>}
      </div>

      <div className="border-t border-white/[0.04] p-2.5">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="flex w-full items-center gap-2.5 rounded-xl px-2 py-2 text-left hover:bg-white/[0.03] transition">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#e879f9] text-[11px] font-bold text-black">{initials}</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13px] text-text-primary">{user?.email}</div>
              <div className="text-[10px] text-text-dim">online · sincronizado</div>
            </div>
            <Settings className="h-4 w-4 text-text-dim" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content side="top" sideOffset={6} align="end" className="z-50 w-60 rounded-xl glass-card p-1">
              <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6" onSelect={() => onOpenSettings?.()}><Settings className="h-4 w-4" /> Settings</DropdownMenu.Item>
              <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6" onSelect={() => onNavChange('skills')}><Blocks className="h-4 w-4" /> Skills & Conexões</DropdownMenu.Item>
              <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6" onSelect={() => onNavChange('projetos')}><FolderGit2 className="h-4 w-4" /> Gerenciar projetos</DropdownMenu.Item>
              <div className="my-1 h-px bg-white/5" />
              <DropdownMenu.Item className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-rose-300 hover:bg-rose-500/10" onSelect={handleSignOut}>
                {busySignout ? <span className="h-4 w-4 animate-pulse" /> : <LogOut className="h-4 w-4" />} Sair
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </aside>
  );
}