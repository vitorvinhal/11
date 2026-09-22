"use client";

import { useState, useEffect, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  UserRound,
  Shield,
  Cpu,
  Check,
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
} from "lucide-react";
import { useAuth } from "../lib/auth";
import { SkillsPanel } from "./SkillsPanel";
import { PluginsPanel } from "./PluginsPanel";
import ConnectorsPanel from "./ConnectorsPanel";
import AvatarUpload from "./AvatarUpload";
import OllamaPanel from "./OllamaPanel";
import SessionsPanel from "./SessionsPanel";

type SettingsTab =
  | "general"
  | "account"
  | "appearance"
  | "ai"
  | "sessions"
  | "privacy"
  | "customize";

const TABS: Array<{
  id: SettingsTab;
  label: string;
  icon: typeof Cog;
  group?: string;
}> = [
  { id: "general", label: "Perfil", icon: UserRound, group: "Conta" },
  { id: "account", label: "Seguranca", icon: Shield },
  { id: "appearance", label: "Visual", icon: Palette },
  { id: "ai", label: "Modelos", icon: Cpu },
  { id: "sessions", label: "Sessoes", icon: Smartphone },
  { id: "privacy", label: "Dados", icon: Lock, group: "Sistema" },
  { id: "customize", label: "Plugins", icon: Puzzle },
];

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className={`relative h-[22px] w-[40px] shrink-0 rounded-full transition-colors ${
        checked ? "bg-[#00e5ff]" : "bg-white/10"
      }`}
    >
      <span
        className={`absolute top-[3px] h-[16px] w-[16px] rounded-full bg-white transition-transform ${
          checked ? "translate-x-[21px]" : "translate-x-[3px]"
        }`}
      />
    </button>
  );
}

export function ProfileDialog({
  open: externalOpen,
  onOpenChange,
}: { open?: boolean; onOpenChange?: (open: boolean) => void } = {}) {
  const { user, supabase, signOut, getAccessToken } = useAuth();
  const [internalOpen, setInternalOpen] = useState(false);
  const open = externalOpen ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;
  const [tab, setTab] = useState<SettingsTab>("general");

  // Profile
  const [name, setName] = useState(user?.user_metadata?.name ?? "");
  const [callYou, setCallYou] = useState(user?.user_metadata?.callYou ?? "");
  const [instructions, setInstructions] = useState(
    user?.user_metadata?.instructions ?? "",
  );
  const [saved, setSaved] = useState(false);

  // Keys
  const [geminiKey, setGeminiKey] = useState("");
  const [anthropicKey, setAnthropicKey] = useState("");
  const [nineRouterKey, setNineRouterKey] = useState("");
  const [keysSaved, setKeysSaved] = useState(false);

  // Version
  const [changelog, setChangelog] = useState<string[] | null>(null);
  const [appVersion, setAppVersion] = useState("");

  // Appearance
  const [appearance, setAppearance] = useState<"dark" | "light" | "system">(
    "dark",
  );
  const [chatFont, setChatFont] = useState("system");
  const [motion, setMotion] = useState<"system" | "reduced">("system");
  const [codeFont, setCodeFont] = useState("JetBrains Mono");

  // Privacy
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

  // Account
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [accountMsg, setAccountMsg] = useState("");
  const [accountBusy, setAccountBusy] = useState(false);

  // Customize
  const [customizeTab, setCustomizeTab] = useState<
    "skills" | "connectors" | "plugins"
  >("skills");

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
      fetch("/api/version")
        .then((r) => r.json())
        .then((v) => {
          setAppVersion(v.version ?? "");
          setChangelog(v.changelog ?? []);
        })
        .catch(() => {});
    }
  }, [open, loadSettings]);

  const changePassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      setAccountMsg("Senha muito curta (min. 6).");
      return;
    }
    setAccountBusy(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    setAccountMsg(error ? `Erro: ${error.message}` : "Senha atualizada!");
    setNewPassword("");
    setAccountBusy(false);
  };

  const changeEmail = async () => {
    if (!newEmail || !newEmail.includes("@")) {
      setAccountMsg("Email invalido.");
      return;
    }
    setAccountBusy(true);
    const { error } = await supabase.auth.updateUser({ email: newEmail });
    setAccountMsg(
      error
        ? `Erro: ${error.message}`
        : "Confirmacao enviada para o novo email",
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
      a.download = `11-dados-${Date.now()}.json`;
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

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.05] text-text-muted transition hover:text-text-primary"
          aria-label="Configuracoes"
        >
          <Cog className="h-4 w-4" />
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
                  v{appVersion || "..."}
                </p>
              </div>
            </div>
            <Dialog.Close className="grid h-7 w-7 place-items-center rounded-lg text-text-dim transition hover:bg-white/6 hover:text-text-primary">
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>

          {/* Mobile tabs */}
          <div className="flex overflow-x-auto border-b border-white/[0.06] md:hidden no-scrollbar">
            {TABS.map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-2.5 text-[11px] font-medium border-b-2 transition ${tab === item.id ? "border-primary text-text-primary" : "border-transparent text-text-dim hover:text-text-muted"}`}
              >
                <item.icon className="h-3 w-3 opacity-70" /> {item.label}
              </button>
            ))}
          </div>

          <div className="flex min-h-0 flex-1 flex-col md:flex-row">
            {/* Desktop sidebar */}
            <div className="hidden w-52 shrink-0 flex-col border-r border-white/[0.06] md:flex">
              <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
                {TABS.map((item) => (
                  <div key={item.id}>
                    {item.group && (
                      <div className="px-2 pt-3 pb-1 text-[10px] font-medium uppercase tracking-wider text-text-dim">
                        {item.group}
                      </div>
                    )}
                    <button
                      onClick={() => setTab(item.id)}
                      className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] transition ${tab === item.id ? "bg-white/6 text-text-primary" : "text-text-muted hover:bg-white/[0.03] hover:text-text-primary"}`}
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
              {/* ═══ GENERAL ═══ */}
              {tab === "general" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Perfil
                  </h2>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <AvatarUpload />
                  </div>

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
                        Instrucoes para o Eleven
                      </label>
                      <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Ex: responda sempre em portugues, seja direto..."
                        rows={3}
                        className="w-full rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-2 text-sm text-text-primary placeholder:text-text-dim outline-none resize-none focus:border-primary/30 transition"
                      />
                    </div>
                  </div>

                  {changelog && changelog.length > 0 && (
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <h3 className="text-xs font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <Zap className="h-3.5 w-3.5 text-primary" />
                        Changelog
                      </h3>
                      <ul className="space-y-1.5">
                        {changelog.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-[11px] text-text-dim"
                          >
                            <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={saveProfile}
                      className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      {saved ? "Salvo!" : "Salvar alteracoes"}
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
                        a.download = "11-settings.json";
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

              {/* ═══ ACCOUNT ═══ */}
              {tab === "account" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Seguranca
                  </h2>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-text-primary">
                        Email atual
                      </span>
                    </div>
                    <div className="rounded-lg bg-white/[0.04] px-3 py-2 text-sm text-text-muted">
                      {user?.email}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-white/40" />
                      <span className="text-xs font-medium text-text-primary">
                        Alterar email
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
                          placeholder="Nova senha (min. 6)"
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

                  <div className="rounded-xl border border-rose-500/20 bg-rose-500/[0.04] p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertTriangle className="h-4 w-4 text-rose-400" />
                      <span className="text-sm font-medium text-rose-300">
                        Zona de perigo
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mb-3">
                      Apaga permanentemente sua conta e todos os dados. Esta
                      acao e irreversivel.
                    </p>
                    <button
                      onClick={() => void deleteAccount()}
                      disabled={accountBusy}
                      className="rounded-lg bg-rose-500/20 px-4 py-2 text-xs text-rose-300 hover:bg-rose-500/30 transition disabled:opacity-40"
                    >
                      {accountBusy ? "Processando..." : "Excluir minha conta"}
                    </button>
                  </div>
                </div>
              )}

              {/* ═══ APPEARANCE ═══ */}
              {tab === "appearance" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Visual
                  </h2>

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

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-text-primary">
                        Animacoes
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

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <label className="mb-2 block text-xs font-medium text-text-primary">
                      Fonte do codigo
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
                    {saved ? "Salvo!" : "Salvar alteracoes"}
                  </button>
                </div>
              )}

              {/* ═══ AI PROVIDER ═══ */}
              {tab === "ai" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Modelos
                  </h2>

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
                      {keysSaved ? "Salvo!" : "Salvar chaves"}
                    </button>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="h-4 w-4 text-white/40" />
                      <span className="text-xs font-medium text-text-primary">
                        Ollama (local)
                      </span>
                    </div>
                    <OllamaPanel />
                  </div>
                </div>
              )}

              {/* ═══ SESSIONS ═══ */}
              {tab === "sessions" && (
                <div className="space-y-5">
                  <div>
                    <h2 className="text-lg font-semibold text-text-primary">
                      Sessoes
                    </h2>
                    <p className="text-[11px] text-text-dim mt-0.5">
                      Gerencie seus dispositivos e sessoes ativas
                    </p>
                  </div>
                  <SessionsPanel />
                </div>
              )}

              {/* ═══ PRIVACY ═══ */}
              {tab === "privacy" && (
                <div className="space-y-5 max-w-lg">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Dados
                  </h2>

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
                          Conversa sem memoria — para assuntos sensiveis.
                        </p>
                      </div>
                      <Toggle
                        checked={incognito}
                        onChange={() => setIncognito(!incognito)}
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Download className="h-4 w-4 text-white/40" />
                      <span className="text-sm font-medium text-text-primary">
                        Exportar dados
                      </span>
                    </div>
                    <p className="text-[11px] text-text-muted mb-3">
                      Baixe tudo (memorias, skills, projetos, midia) em JSON.
                    </p>
                    <button
                      onClick={() => void exportData()}
                      disabled={dataBusy}
                      className="rounded-lg bg-white/[0.06] border border-white/[0.06] px-3 py-2 text-xs text-text-muted hover:bg-white/[0.1] hover:text-text-primary transition disabled:opacity-40"
                    >
                      {dataBusy ? "Exportando..." : "Exportar meus dados"}
                    </button>
                  </div>

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
                        <Toggle
                          checked={caps[cap.key]}
                          onChange={() =>
                            setCaps((p) => ({ ...p, [cap.key]: !p[cap.key] }))
                          }
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => void saveProfile()}
                      className="mt-3 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      {saved ? "Salvo!" : "Salvar capabilities"}
                    </button>
                  </div>
                </div>
              )}

              {/* ═══ CUSTOMIZE ═══ */}
              {tab === "customize" && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-text-primary">
                    Plugins
                  </h2>
                  <div className="flex gap-1 rounded-lg bg-white/[0.04] p-0.5">
                    {(["skills", "connectors", "plugins"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setCustomizeTab(t)}
                        className={`flex-1 rounded-md px-3 py-2 text-xs font-medium transition ${customizeTab === t ? "bg-white/10 text-text-primary" : "text-text-dim hover:text-text-muted"}`}
                      >
                        {t === "skills"
                          ? "Skills"
                          : t === "connectors"
                            ? "Connectors"
                            : "Plugins"}
                      </button>
                    ))}
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
