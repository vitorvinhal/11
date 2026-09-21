"use client";

import { useState } from "react";
import { Sidebar, SidebarChat, NavTab } from "./Sidebar";
import { ChatPanel, ChatMessage } from "./ChatPanel";
import { ProfileDialog } from "./ProfileDialog";
import { SkillsPanel } from "./SkillsPanel";
import { ProjectsPanel } from "./ProjectsPanel";
import { NeuralGraph } from "./NeuralGraph";
import ConnectorsPanel from "./ConnectorsPanel";
import { PluginsPanel } from "./PluginsPanel";
import { ArtifactsPanel } from "./ArtifactsPanel";
import ElevenOrca from "./ElevenOrca";
import { MediaGallery } from "./MediaGallery";
import { MobileAgent } from "./MobileAgent";
import { MobileDevicePanel } from "./MobileDevicePanel";
import { MemoriaPanel } from "./MemoriaPanel";
import { FinOpsPanel } from "./FinOpsPanel";
import { CanvasPanel } from "./CanvasPanel";
import { useAuth } from "../lib/auth";
import { Menu, Sparkles } from "lucide-react";

export function AppShell({
  initialNav = "conversas" as NavTab,
}: {
  initialNav?: NavTab;
}) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [chats, setChats] = useState<SidebarChat[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<NavTab>(initialNav);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const newChat = () => {
    const id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    setChats((prev) => [{ id, title: "Nova conversa", preview: "" }, ...prev]);
    setActiveChat(id);
    setMessages([]);
    setActiveNav("conversas");
    setDrawerOpen(false);
  };
  const selectChat = (id: string) => {
    setActiveChat(id);
    setMessages([]);
    setActiveNav("conversas");
    setDrawerOpen(false);
  };
  const deleteChat = (id: string) => {
    setChats((p) => p.filter((c) => c.id !== id));
    if (activeChat === id) {
      setActiveChat(null);
      setMessages([]);
    }
  };

  if (!user) {
    return (
      <main className="relative z-10 min-h-screen bg-transparent">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-sm text-text-muted">Autenticando…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative z-10 flex h-screen flex-col overflow-hidden bg-[#05050A]">
      {drawerOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      <div className="flex h-full">
        <div className="hidden md:block">
          <Sidebar
            chats={chats}
            activeChat={activeChat}
            onSelectChat={selectChat}
            onNewChat={newChat}
            onDeleteChat={deleteChat}
            activeNav={activeNav}
            onNavChange={setActiveNav}
            onOpenSettings={() => setSettingsOpen(true)}
          />
        </div>
        <div
          className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 md:hidden ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <Sidebar
            chats={chats}
            activeChat={activeChat}
            onSelectChat={selectChat}
            onNewChat={newChat}
            onDeleteChat={deleteChat}
            onClose={() => setDrawerOpen(false)}
            activeNav={activeNav}
            onNavChange={(n) => {
              setActiveNav(n);
              setDrawerOpen(false);
            }}
            onOpenSettings={() => {
              setSettingsOpen(true);
              setDrawerOpen(false);
            }}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col md:ml-0">
          <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-3">
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setDrawerOpen(true)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.05] text-white/70 hover:text-white transition"
                aria-label="Abrir menu"
              >
                <Menu className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs font-semibold tracking-[0.25em] text-text-primary/90">
                  ELEVEN
                </span>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <ProfileDialog
                open={settingsOpen}
                onOpenChange={setSettingsOpen}
              />
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 md:px-8 pb-8">
            {activeNav === "conversas" && (
              <ChatPanel messages={messages} setMessages={setMessages} />
            )}
            {activeNav === "projetos" && (
              <div className="mx-auto max-w-2xl pt-8">
                <ProjectsPanel />
              </div>
            )}
            {activeNav === "skills" && (
              <div className="mx-auto max-w-2xl pt-8">
                <SkillsPanel />
              </div>
            )}
            {activeNav === "connectors" && (
              <div className="mx-auto max-w-2xl pt-8">
                <ConnectorsPanel userId={user.id} />
              </div>
            )}
            {activeNav === "plugins" && (
              <div className="mx-auto max-w-2xl pt-8">
                <PluginsPanel />
              </div>
            )}
            {activeNav === "artifacts" && (
              <div className="mx-auto max-w-2xl pt-8">
                <ArtifactsPanel />
              </div>
            )}
            {activeNav === "code" && (
              <div className="h-full">
                <ElevenOrca />
              </div>
            )}
            {activeNav === "media" && (
              <div className="mx-auto max-w-2xl pt-8">
                <MediaGallery />
              </div>
            )}
            {activeNav === "agent" && (
              <div className="h-full">
                <MobileAgent />
              </div>
            )}
            {activeNav === "mobile" && (
              <div className="h-full">
                <MobileDevicePanel />
              </div>
            )}
            {activeNav === "neural" && (
              <div className="mx-auto max-w-2xl pt-8">
                <NeuralGraph />
              </div>
            )}
            {activeNav === "canvas" && (
              <div className="mx-auto max-w-5xl pt-8">
                <CanvasPanel />
              </div>
            )}
            {activeNav === "memoria" && (
              <div className="mx-auto max-w-4xl pt-8">
                <MemoriaPanel />
              </div>
            )}
            {activeNav === "finops" && (
              <div className="mx-auto max-w-5xl pt-8">
                <FinOpsPanel />
              </div>
            )}
          </div>
        </div>
      </div>
      <button type="button" className="hidden" aria-hidden />
    </main>
  );
}
