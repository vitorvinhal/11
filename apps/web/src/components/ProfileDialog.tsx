"use client";

import { useState, useEffect, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  UserRound,
  Shield,
  Cpu,
  X,
  Palette,
  Lock,
  Puzzle,
  Smartphone,
  Key,
  Mail,
  AlertTriangle,
  Download,
  Eye,
  EyeOff,
  Globe,
  Cog,
  Zap,
  RefreshCw,
  Loader2,
} from "lucide-react";
import { useAuth } from "../lib/auth";
import {
  checkForUpdate,
  acknowledgeVersion,
  openDownloadForPlatform,
  type UpdateInfo,
} from "../lib/update-client";
import { getPlatform } from "../lib/platform";
import { ReleaseNotes } from "./ReleaseNotes";
import { DownloadCards } from "./DownloadCards";
import { SkillsPanel } from "./SkillsPanel";
import { PluginsPanel } from "./PluginsPanel";
import ConnectorsPanel from "./ConnectorsPanel";
import AvatarUpload from "./AvatarUpload";
import OllamaPanel from "./OllamaPanel";
import ZenPanel from "./ZenPanel";
import SessionsPanel from "./SessionsPanel";

type SettingsTab =
  | "general"
  | "account"
  | "appearance"
  | "ai"
  | "sessions"
  | "privacy"
  | "updates"
  | "customize";

export function ProfileDialog({
  open: externalOpen,
  onOpenChange,
  initialTab,
  updateBadge = false,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  initialTab?: SettingsTab;
  updateBadge?: boolean;
} = {}) {
  const { user, supabase, signOut, getAccessToken } = useAuth();
  const [internalOpen, setInternalOpen] = useState(false);
  const open = externalOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;
  const [settingsTab, setSettingsTab] = useState<SettingsTab>("general");
  const [name, setName] = useState(user?.user_metadata?.name ?? "");
  const [callYou, setCallYou] = useState(user?.user_metadata?.callYou ?? "");
  const [instructions, setInstructions] = useState(
    user?.user_metadata?.instructions ?? "",
  );
  const [saved, setSaved] = useState(false);
  const [geminiKey, setGeminiKey] = useState("");
  const [anthropicKey, setAnthropicKey] = useState("");
  const [nineRouterKey, setNineRouterKey] = useState("");
  const [keysSaved, setKeysSaved] = useState(false);
  const [changelog, setChangelog] = useState<string[] | null>(null);
  const [appVersion, setAppVersion] = useState("");
  const [appearance, setAppearance] = useState<"dark" | "light" | "system">(
    "dark",
  );
  const [chatFont, setChatFont] = useState("system");
  const [motion, setMotion] = useState<"system" | "reduced">("system");
  const [codeFont, setCodeFont] = useState("JetBrains Mono");
  const [caps, setCaps] = useState<Record<string, boolean>>({
    webSearch: true,
    memory: true,
    codeExecution: false,
    fileUpload: true,
    screenshot: true,
    voiceChat: true,
  });
  const [incognito, setIncognito] = useState(false);
  const [dataBusy, setDataBusy] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [accountMsg, setAccountMsg] = useState("");
  const [accountBusy, setAccountBusy] = useState(false);
  const [customizeTab, setCustomizeTab] = useState<
    "skills" | "connectors" | "plugins"
  >("skills");

  const [upd, setUpd] = useState<UpdateInfo | null>(null);
  const [updBusy, setUpdBusy] = useState(false);
  const [updHasNew, setUpdHasNew] = useState(false);
  const [updCheckMsg, setUpdCheckMsg] = useState<string | null>(null);

  const checkUpdates = useCallback(async () => {
    setUpdBusy(true);
    setUpdCheckMsg(null);
    const res = await checkForUpdate();
    setUpd(res.info);
    setUpdHasNew(res.hasUpdate);
    setUpdCheckMsg(
      res.hasUpdate
        ? "Nova versão encontrada — role abaixo para baixar."
        : res.info
          ? "Verificado — sua versão está atualizada."
          : "Não foi possível verificar agora (sem conexão?).",
    );
    setUpdBusy(false);
  }, []);

  useEffect(() => {
    if (settingsTab === "updates" && !upd) void checkUpdates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settingsTab]);

  const loadSettings = useCallback(async () => {
    if (!user) return;
    try {
      const token = await getAccessToken();
      const res = await fetch(`/api/settings?userId=${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.geminiKey) setGeminiKey(data.geminiKey);
      if (data.anthropicKey) setAnthropicKey(data.anthropicKey);
      if (data.nineRouterKey) setNineRouterKey(data.nineRouterKey);
      if (data.appearance) setAppearance(data.appearance);
      if (data.chatFont) setChatFont(data.chatFont);
      if (data.motion) setMotion(data.motion);
      if (data.codeFont) setCodeFont(data.codeFont);
      if (data.name) setName(data.name);
      if (data.callYou) setCallYou(data.callYou);
      if (data.instructions) setInstructions(data.instructions);
      if (data.caps) setCaps((prev) => ({ ...prev, ...data.caps }));
      if (data.incognito !== undefined) setIncognito(data.incognito);
    } catch {
      /* ignore */
    }
  }, [user, getAccessToken]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    if (appearance === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.add(appearance);
    }
  }, [appearance]);

  useEffect(() => {
    if (open) {
      void loadSettings();
      fetch("/api/version", { cache: "no-store" })
        .then((r) => r.json())
        .then((v) => {
          setAppVersion(v.version ?? "");
          setChangelog(v.changelog ?? []);
        })
        .catch(() => {});
    }
  }, [open, loadSettings]);

  // Abre direto numa aba específica (ex.: notificação de atualização).
  useEffect(() => {
    if (open && initialTab) setSettingsTab(initialTab);
  }, [open, initialTab]);

  const changePassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      setAccountMsg("Senha muito curta (mín. 6).");
      return;
    }
    setAccountBusy(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setAccountMsg(error ? `Erro: ${error.message}` : "Senha atualizada ✓");
    setNewPassword("");
    setAccountBusy(false);
  };

  const changeEmail = async () => {
    if (!newEmail || !newEmail.includes("@")) {
      setAccountMsg("E-mail inválido.");
      return;
    }
    setAccountBusy(true);
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    setAccountMsg(
      error
        ? `Erro: ${error.message}`
        : "Confirmação enviada para o novo e-mail ✓",
    );
    setNewEmail("");
    setAccountBusy(false);
  };

  const deleteAccount = async () => {
    if (!user) return;
    if (
      !window.confirm(
        "Isso apaga sua conta e TODOS os seus dados permanentemente. Continuar?",
      )
    )
      return;
    setAccountBusy(true);
    try {
      const token = await getAccessToken();
      const res = await fetch("/api/account", {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.ok) {
        await signOut();
      } else setAccountMsg(data.error ?? "Falha ao excluir conta.");
    } catch (e) {
      setAccountMsg((e as Error).message);
    }
    setAccountBusy(false);
  };

  const exportData = async () => {
    if (!user) return;
    setDataBusy(true);
    try {
      const token = await getAccessToken();
      const auth = { Authorization: `Bearer ${token}` };
      const [mem, sk, proj, media] = await Promise.all([
        fetch(`/api/memories?userId=${user.id}`, { headers: auth })
          .then((r) => r.json())
          .catch(() => []),
        fetch(`/api/skills?userId=${user.id}`, { headers: auth })
          .then((r) => r.json())
          .catch(() => []),
        fetch(`/api/projects?userId=${user.id}`, { headers: auth })
          .then((r) => r.json())
          .catch(() => []),
        fetch(`/api/media?userId=${user.id}`, { headers: auth })
          .then((r) => r.json())
          .catch(() => []),
      ]);
      const payload = {
        exported_at: new Date().toISOString(),
        profile: {
          name,
          callYou,
          instructions,
          appearance,
          chatFont,
          motion,
          codeFont,
        },
        settings: { caps, incognito },
        memories: mem,
        skills: sk,
        projects: proj,
        media,
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `eleven-dados-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      /* ignore */
    }
    setDataBusy(false);
  };

  const saveProfile = async () => {
    await supabase.auth.updateUser({ data: { name, callYou, instructions } });
    if (user) {
      try {
        const token = await getAccessToken();
        await fetch("/api/settings", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            settings: {
              name,
              callYou,
              instructions,
              geminiKey,
              anthropicKey,
              nineRouterKey,
              appearance,
              chatFont,
              motion,
              codeFont,
              caps,
              incognito,
            },
          }),
        });
        localStorage.setItem(
          "eleven_api_keys",
          JSON.stringify({
            gemini: geminiKey,
            anthropic: anthropicKey,
            nineRouter: nineRouterKey,
          }),
        );
      } catch {
        /* ignore */
      }
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
    } catch {
      /* ignore */
    }
  };

  const settingsNav: Array<{
    id: SettingsTab;
    label: string;
    icon: any;
    section?: string;
  }> = [
    { id: "general", icon: UserRound, label: "Geral", section: "Settings" },
    { id: "account", icon: Shield, label: "Conta" },
    { id: "appearance", icon: Palette, label: "Aparência" },
    { id: "ai", icon: Cpu, label: "IA Provider" },
    { id: "sessions", icon: Smartphone, label: "Sessões" },
    { id: "privacy", icon: Lock, label: "Privacidade" },
    {
      id: "updates",
      icon: RefreshCw,
      label: "Atualizações",
      section: "System",
    },
    {
      id: "customize",
      icon: Puzzle,
      label: "Customização",
      section: "Customize",
    },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.05] text-text-muted transition hover:text-text-primary relative"
          aria-label="Configurações"
        >
          <Cog className="h-4 w-4" />
          {updateBadge && (
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary ring-2 ring-[#05050A]" />
          )}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="glass-card fixed inset-0 z-50 flex flex-col overflow-hidden rounded-none md:left-1/2 md:top-1/2 md:h-[86vh] md:w-[92vw] md:max-w-4xl md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10">
                <Cog className="h-4 w-4 text-primary" />
              </div>
              <div>
                <Dialog.Title className="text-sm font-semibold text-text-primary">
                  Settings
                </Dialog.Title>
                <p className="text-[10px] text-text-dim">
                  v{appVersion || "…"}
                </p>
              </div>
            </div>
            <Dialog.Close className="grid h-7 w-7 place-items-center rounded-lg text-text-dim transition hover:bg-white/6 hover:text-text-primary">
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>

          {/* Mobile tabs */}
          <div className="flex overflow-x-auto border-b border-white/[0.06] md:hidden no-scrollbar">
            {settingsNav.map((item) => (
              <button
                key={item.id}
                onClick={() => setSettingsTab(item.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-2.5 text-[11px] font-medium border-b-2 transition ${settingsTab === item.id ? "border-primary text-text-primary" : "border-transparent text-text-dim hover:text-text-muted"}`}
              >
                <item.icon className="h-3 w-3 opacity-70" /> {item.label}
              </button>
            ))}
          </div>

          <div className="flex min-h-0 flex-1 flex-col md:flex-row">
            {/* Desktop sidebar */}
            <div className="hidden w-52 shrink-0 flex-col border-r border-white/[0.06] md:flex">
              <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
                {settingsNav.map((item) => (
                  <div key={item.id}>
                    {item.section && (
                      <div className="px-2 pt-3 pb-1 text-[10px] font-medium uppercase tracking-wider text-text-dim">
                        {item.section}
                      </div>
                    )}
                    <button
                      onClick={() => setSettingsTab(item.id)}
                      className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] transition ${settingsTab === item.id ? "bg-white/6 text-text-primary" : "text-text-muted hover:bg-white/[0.03] hover:text-text-primary"}`}
                    >
                      <item.icon className="h-3.5 w-3.5 opacity-70" />{" "}
                      {item.label}
                    </button>
                  </div>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
              {/* ── GENERAL ── */}
              {settingsTab === "general" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Perfil
                  </h2>

                  {/* Avatar */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <AvatarUpload />
                  </div>

                  {/* Form */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 space-y-3">
                    <div>
                      <label className="mb-1 block text-[11px] font-medium text-text-muted">
                        Nome completo
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-sm text-text-primary outline-none focus:border-primary/30 transition"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-medium text-text-muted">
                        Como o Eleven deve te chamar
                      </label>
                      <input
                        value={callYou}
                        onChange={(e) => setCallYou(e.target.value)}
                        placeholder="Apelido"
                        className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-sm text-text-primary outline-none focus:border-primary/30 transition"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-medium text-text-muted">
                        Instruções para o Eleven
                      </label>
                      <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Ex: responda sempre em português, seja direto..."
                        rows={3}
                        className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-sm text-text-primary placeholder:text-text-dim outline-none resize-none focus:border-primary/30 transition"
                      />
                    </div>
                  </div>

                  {/* Changelog */}
                  {changelog && changelog.length > 0 && (
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <h3 className="text-xs font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <Zap className="h-3.5 w-3.5 text-primary" />
                        Changelog
                      </h3>
                      <ReleaseNotes
                        version={appVersion}
                        changelog={changelog}
                      />
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={saveProfile}
                      className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      {saved ? "Salvo ✓" : "Salvar alterações"}
                    </button>
                    <button
                      onClick={() => {
                        const data = {
                          name,
                          callYou,
                          instructions,
                          appearance,
                          chatFont,
                          motion,
                          codeFont,
                          geminiKey,
                          anthropicKey,
                          nineRouterKey,
                        };
                        const blob = new Blob([JSON.stringify(data, null, 2)], {
                          type: "application/json",
                        });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "eleven-settings.json";
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="rounded-lg bg-white/[0.06] px-3 py-2 text-xs text-text-muted hover:bg-white/10 hover:text-text-primary transition"
                    >
                      Exportar
                    </button>
                  </div>
                </div>
              )}

              {/* ── ACCOUNT ── */}
              {settingsTab === "account" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Conta
                  </h2>

                  {/* Current email */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-text-primary">
                        E-mail atual
                      </span>
                    </div>
                    <div className="rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-text-muted">
                      {user?.email}
                    </div>
                  </div>

                  {/* Change email */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-white/40" />
                      <span className="text-xs font-medium text-text-primary">
                        Alterar e-mail
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        placeholder="novo@email.com"
                        className="flex-1 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-sm text-text-primary outline-none focus:border-primary/30 transition"
                      />
                      <button
                        onClick={() => void changeEmail()}
                        disabled={accountBusy}
                        className="rounded-lg bg-white/[0.08] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.12] transition disabled:opacity-40"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>

                  {/* Change password */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Key className="h-4 w-4 text-white/40" />
                      <span className="text-xs font-medium text-text-primary">
                        Alterar senha
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Nova senha (mín. 6)"
                          className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 pr-8 text-sm text-text-primary outline-none focus:border-primary/30 transition"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                        >
                          {showPassword ? (
                            <EyeOff className="h-3.5 w-3.5" />
                          ) : (
                            <Eye className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>
                      <button
                        onClick={() => void changePassword()}
                        disabled={accountBusy}
                        className="rounded-lg bg-white/[0.08] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.12] transition disabled:opacity-40"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>

                  {accountMsg && (
                    <div
                      className={`rounded-lg px-3 py-2 text-xs ${
                        accountMsg.startsWith("Erro")
                          ? "bg-rose-500/10 text-rose-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}
                    >
                      {accountMsg}
                    </div>
                  )}

                  {/* Danger zone */}
                  <div className="rounded-xl border border-rose-500/20 bg-rose-500/[0.04] p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="h-4 w-4 text-rose-400" />
                      <span className="text-sm font-medium text-rose-300">
                        Zona de perigo
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mb-3">
                      Apaga permanentemente sua conta e todos os dados. Esta
                      ação é irreversível.
                    </p>
                    <button
                      onClick={() => void deleteAccount()}
                      disabled={accountBusy}
                      className="rounded-lg bg-rose-500/20 px-4 py-2 text-xs text-rose-300 hover:bg-rose-500/30 transition disabled:opacity-40"
                    >
                      {accountBusy ? "Processando…" : "Excluir minha conta"}
                    </button>
                  </div>
                </div>
              )}

              {/* ── APPEARANCE ── */}
              {settingsTab === "appearance" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Aparência
                  </h2>

                  {/* Theme */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 space-y-3">
                    <span className="text-xs font-medium text-text-primary">
                      Tema
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        {
                          key: "dark" as const,
                          label: "Dark",
                          preview: "bg-[#05050A]",
                        },
                        {
                          key: "light" as const,
                          label: "Light",
                          preview: "bg-[#f7f7f8]",
                        },
                        {
                          key: "system" as const,
                          label: "System",
                          preview:
                            "bg-gradient-to-r from-[#05050A] to-[#f7f7f8]",
                        },
                      ].map((t) => (
                        <button
                          key={t.key}
                          onClick={() => setAppearance(t.key)}
                          className={`rounded-xl border p-3 transition text-center ${
                            appearance === t.key
                              ? "border-primary/40 bg-primary/[0.06]"
                              : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                          }`}
                        >
                          <div
                            className={`h-8 w-full rounded-lg mb-2 ${t.preview} border border-white/[0.06]`}
                          />
                          <span className="text-[11px] text-text-muted">
                            {t.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chat font */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-text-primary">
                        Fonte do chat
                      </span>
                      <select
                        value={chatFont}
                        onChange={(e) => setChatFont(e.target.value)}
                        className="rounded-lg bg-white/[0.06] border border-white/[0.06] px-3 py-1.5 text-xs text-text-primary outline-none"
                      >
                        <option value="system">System</option>
                        <option value="serif">Serif</option>
                        <option value="mono">Mono</option>
                      </select>
                    </div>
                    <div
                      className="rounded-lg bg-white/[0.03] p-2 text-xs text-text-dim"
                      style={{
                        fontFamily:
                          chatFont === "serif"
                            ? "Georgia, serif"
                            : chatFont === "mono"
                              ? "JetBrains Mono, monospace"
                              : "inherit",
                      }}
                    >
                      The quick brown fox jumps over the lazy dog
                    </div>
                  </div>

                  {/* Motion */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-text-primary">
                        Animações
                      </span>
                      <div className="flex rounded-lg bg-white/[0.04] p-0.5">
                        {(["system", "reduced"] as const).map((m) => (
                          <button
                            key={m}
                            onClick={() => setMotion(m)}
                            className={`rounded-md px-3 py-1.5 text-[11px] transition ${motion === m ? "bg-white/10 text-text-primary" : "text-text-dim hover:text-text-muted"}`}
                          >
                            {m === "system" ? "System" : "Reduced"}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Code font */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <label className="mb-2 block text-xs font-medium text-text-primary">
                      Fonte do código
                    </label>
                    <input
                      value={codeFont}
                      onChange={(e) => setCodeFont(e.target.value)}
                      placeholder="JetBrains Mono"
                      className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-sm text-text-primary outline-none focus:border-primary/30 transition"
                    />
                    <div
                      className="mt-2 rounded-lg bg-white/[0.03] p-2 text-xs text-text-dim"
                      style={{ fontFamily: codeFont || "monospace" }}
                    >
                      {"const hello = () => 'world';"}
                    </div>
                  </div>

                  <button
                    onClick={saveProfile}
                    className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    {saved ? "Salvo ✓" : "Salvar alterações"}
                  </button>
                </div>
              )}

              {/* ── AI PROVIDER ── */}
              {settingsTab === "ai" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    IA Provider
                  </h2>

                  {/* API Keys */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 space-y-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Key className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-text-primary">
                        Chaves de API
                      </span>
                    </div>

                    <div>
                      <label className="mb-1 block text-[11px] text-text-muted">
                        Gemini API Key
                      </label>
                      <input
                        type="password"
                        value={geminiKey}
                        onChange={(e) => setGeminiKey(e.target.value)}
                        placeholder="AIza..."
                        className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-sm text-text-primary outline-none focus:border-primary/30 transition"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] text-text-muted">
                        Anthropic API Key
                      </label>
                      <input
                        type="password"
                        value={anthropicKey}
                        onChange={(e) => setAnthropicKey(e.target.value)}
                        placeholder="sk-ant-..."
                        className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-sm text-text-primary outline-none focus:border-primary/30 transition"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] text-text-muted">
                        9Router Endpoint + Key
                      </label>
                      <input
                        type="password"
                        value={nineRouterKey}
                        onChange={(e) => setNineRouterKey(e.target.value)}
                        placeholder="endpoint|chave"
                        className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-sm text-text-primary outline-none focus:border-primary/30 transition"
                      />
                    </div>

                    <button
                      onClick={saveKeys}
                      className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      {keysSaved ? "Salvo ✓" : "Salvar chaves"}
                    </button>
                  </div>

                  {/* Ollama */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="h-4 w-4 text-white/40" />
                      <span className="text-xs font-medium text-text-primary">
                        Ollama (local)
                      </span>
                    </div>
                    <OllamaPanel />
                  </div>

                  {/* Zen / OpenAI compat */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-4 w-4 text-white/40" />
                      <span className="text-xs font-medium text-text-primary">
                        Zen / OpenAI-compatível
                      </span>
                    </div>
                    <ZenPanel />
                  </div>
                </div>
              )}

              {/* ── SESSIONS ── */}
              {settingsTab === "sessions" && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-semibold text-text-primary">
                      Sessões
                    </h2>
                    <p className="text-[11px] text-text-dim mt-0.5">
                      Gerencie seus dispositivos e sessões ativas
                    </p>
                  </div>
                  <SessionsPanel />
                </div>
              )}

              {/* ── PRIVACY ── */}
              {settingsTab === "privacy" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Privacidade
                  </h2>

                  {/* Incognito */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <Lock className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-text-primary">
                            Modo Incognito
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] text-text-muted">
                          Conversa sem memória — para assuntos sensíveis.
                        </p>
                      </div>
                      <div
                        className={`h-5 w-9 shrink-0 rounded-full transition ${incognito ? "bg-primary" : "bg-white/10"} relative cursor-pointer`}
                        onClick={() => setIncognito(!incognito)}
                      >
                        <div
                          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${incognito ? "left-[18px]" : "left-0.5"}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Export */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Download className="h-4 w-4 text-white/40" />
                      <span className="text-sm font-medium text-text-primary">
                        Exportar dados
                      </span>
                    </div>
                    <p className="text-[11px] text-text-muted mb-3">
                      Baixe tudo (memórias, skills, projetos, mídia) em JSON.
                    </p>
                    <button
                      onClick={() => void exportData()}
                      disabled={dataBusy}
                      className="rounded-lg bg-white/[0.06] border border-white/[0.06] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.1] hover:text-text-primary transition disabled:opacity-40"
                    >
                      {dataBusy ? "Exportando…" : "Exportar meus dados"}
                    </button>
                  </div>

                  {/* Capabilities */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-4 w-4 text-white/40" />
                      <span className="text-sm font-medium text-text-primary">
                        Capabilities
                      </span>
                    </div>
                    {(
                      [
                        { key: "webSearch", label: "Web search" },
                        { key: "memory", label: "Memory" },
                        { key: "codeExecution", label: "Code execution" },
                        { key: "fileUpload", label: "File upload" },
                        { key: "screenshot", label: "Screenshot" },
                        { key: "voiceChat", label: "Voice chat" },
                      ] as const
                    ).map((cap) => (
                      <div
                        key={cap.key}
                        className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0"
                      >
                        <span className="text-sm text-text-primary">
                          {cap.label}
                        </span>
                        <div
                          className={`h-5 w-9 shrink-0 rounded-full transition ${caps[cap.key] ? "bg-primary" : "bg-white/10"} relative cursor-pointer`}
                          onClick={() =>
                            setCaps((p) => ({ ...p, [cap.key]: !p[cap.key] }))
                          }
                        >
                          <div
                            className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${caps[cap.key] ? "left-[18px]" : "left-0.5"}`}
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => void saveProfile()}
                      className="mt-3 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      {saved ? "Salvo ✓" : "Salvar capabilities"}
                    </button>
                  </div>
                </div>
              )}

              {/* ── UPDATES ── */}
              {settingsTab === "updates" && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-semibold text-text-primary">
                      Atualizações
                    </h2>
                    <p className="text-[11px] text-text-dim mt-0.5">
                      A cada nova versão você é notificado aqui. Baixe o app da
                      sua plataforma e veja o que mudou.
                    </p>
                  </div>

                  {/* Status da versão */}
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] text-text-dim">
                          Versão instalada
                        </p>
                        <p className="text-sm font-semibold text-text-primary">
                          {appVersion || "—"}{" "}
                          {upd && !updHasNew && (
                            <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-normal text-emerald-400">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              em dia
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] text-text-dim">
                          {updHasNew ? "Atualização disponível" : "Conectado"}
                        </p>
                        {upd && (
                          <p className="text-[11px] font-medium text-primary">
                            {updHasNew
                              ? `v${upd.version} pronto para baixar`
                              : `v${upd.version}`}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        onClick={() => void checkUpdates()}
                        disabled={updBusy}
                        className="flex items-center gap-1.5 rounded-lg bg-white/[0.06] border border-white/[0.06] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.1] hover:text-text-primary transition disabled:opacity-40"
                      >
                        {updBusy ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <RefreshCw className="h-3.5 w-3.5" />
                        )}
                        Buscar atualizações
                      </button>
                      {updHasNew && upd && upd.downloads && (
                        <button
                          onClick={() => {
                            const ok = openDownloadForPlatform(
                              upd.downloads,
                              getPlatform(),
                            );
                            if (ok) {
                              acknowledgeVersion(upd.versionCode);
                              setUpdHasNew(false);
                            }
                          }}
                          className="flex items-center gap-1.5 rounded-lg bg-primary/20 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/30 transition"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Baixar para este aparelho
                        </button>
                      )}
                      <button
                        onClick={() => window.location.reload()}
                        className="flex items-center gap-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.1] transition"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                        Recarregar o app
                      </button>
                    </div>
                  </div>

                  {updCheckMsg && (
                    <p
                      className={`mt-2 text-[11px] ${updCheckMsg.startsWith("Nova") ? "text-amber-400" : updCheckMsg.startsWith("Verificado") ? "text-emerald-400" : "text-red-400"}`}
                    >
                      {updCheckMsg}
                    </p>
                  )}
                  {/* Downloads por plataforma */}
                  {upd ? (
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-text-dim">
                        Baixar o app
                      </p>
                      <DownloadCards downloads={upd.downloads} />
                      <p className="mt-3 text-[10px] leading-snug text-white/35">
                        iOS: gerado no GitHub Actions (IPA sem assinatura) —
                        instale no seu iPhone com Sideloadly/AltStore usando sua
                        Apple ID (revalidar a cada 7 dias).
                      </p>
                    </div>
                  ) : (
                    <p className="text-[10px] text-white/35">
                      Clique em “Buscar atualizações” para carregar.
                    </p>
                  )}

                  {/* Novidades */}
                  {upd && (
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-text-dim">
                        Novidades
                      </p>
                      <ReleaseNotes
                        version={upd.version}
                        changelog={upd.changelog}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* ── CUSTOMIZE ── */}
              {settingsTab === "customize" && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Customização
                  </h2>
                  <div className="flex gap-1 rounded-lg bg-white/[0.04] p-0.5">
                    {(["skills", "connectors", "plugins"] as const).map(
                      (tab) => (
                        <button
                          key={tab}
                          onClick={() => setCustomizeTab(tab)}
                          className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition ${customizeTab === tab ? "bg-white/10 text-text-primary" : "text-text-dim hover:text-text-muted"}`}
                        >
                          {tab === "skills"
                            ? "Skills"
                            : tab === "connectors"
                              ? "Connectors"
                              : "Plugins"}
                        </button>
                      ),
                    )}
                  </div>
                  {customizeTab === "skills" && <SkillsPanel />}
                  {customizeTab === "connectors" && user && (
                    <ConnectorsPanel userId={user.id} />
                  )}
                  {customizeTab === "plugins" && <PluginsPanel />}
                </div>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
