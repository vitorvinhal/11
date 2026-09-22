"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Send,
  Sparkles,
  Loader2,
  Plus,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Mic,
  Cpu,
  Paperclip,
  Image as ImageIcon,
  FolderGit2,
  Blocks,
  Webhook,
  Plug2,
  Globe,
  X,
  Check,
  Code2,
  WifiOff,
} from "lucide-react";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useAuth } from "../lib/auth";
import { getDeviceContext } from "../lib/device-client";
import { onAgentEvent, type AgentJobResumeEvent } from "../lib/agent-bus";
import {
  getOllamaConfig,
  getZenConfig,
  getZenModels,
  saveZenConfig,
  chatOpenAICompat,
  type CompatConfig,
} from "../lib/local-llm";
import {
  isNetworkError,
  enqueueChatOffline,
  registerChatSync,
} from "../lib/offline-queue";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
export interface ChatViewProps {
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

const SUGGESTIONS = [
  {
    icon: "💻",
    label: "Gere um código full-stack",
    prompt: "Crie uma API REST completa com NestJS + Prisma",
  },
  {
    icon: "🧠",
    label: "Explique um conceito",
    prompt: "Explique como funciona um ModelGateway multi-provedor",
  },
  {
    icon: "🛠️",
    label: "Automatize uma rotina",
    prompt: "Monte um fluxo para automatizar deploy em CI/CD",
  },
  {
    icon: "🌌",
    label: "Modo Astra",
    prompt: "Descreva uma experiência visual imersiva no estilo Astra",
  },
];

interface Attach {
  id: string;
  label: string;
  snippet?: string;
  thumb?: string;
}

const MAX_FILE_BYTES = 512 * 1024;

export type RoutingProfile = "cost" | "latency" | "quality";

function uid() {
  return Math.random().toString(36).slice(2);
}

export function ChatPanel({ messages, setMessages }: ChatViewProps) {
  const { user, supabase, getAccessToken } = useAuth();
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [attached, setAttached] = useState<Attach[]>([]);
  const [webSearch, setWebSearch] = useState(false);
  const [memory, setMemory] = useState(false);
  const [incognito, setIncognito] = useState(false);
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [offline, setOffline] = useState(false);
  const [provider, setProvider] = useState("9router/Arcenal");
  const [zenModel, setZenModel] = useState<string>(() => {
    try {
      return getZenConfig().model;
    } catch {
      return "";
    }
  });
  const profile: RoutingProfile = "cost";
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const recRef = useRef<any>(null);
  const apiKeysRef = useRef<Record<string, string>>({});

  // Load API keys + preferences (caps/incognito) from settings on mount
  useEffect(() => {
    const loadKeys = async () => {
      if (!user) return;
      try {
        const token = await getAccessToken();
        const res = await fetch(`/api/settings?userId=${user.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        const keys: Record<string, string> = {};
        if (data.geminiKey) keys.gemini = data.geminiKey;
        if (data.anthropicKey) keys.anthropic = data.anthropicKey;
        if (data.nineRouterKey) keys.nineRouter = data.nineRouterKey;
        apiKeysRef.current = keys;
        // Aplica preferências salvas do perfil.
        if (data.caps) {
          if (typeof data.caps.webSearch === "boolean")
            setWebSearch(data.caps.webSearch);
          if (typeof data.caps.memory === "boolean")
            setMemory(data.caps.memory);
        }
        if (typeof data.incognito === "boolean") setIncognito(data.incognito);
        if (keys.gemini || keys.anthropic) {
          localStorage.setItem("eleven_api_keys", JSON.stringify(keys));
        }
      } catch {
        try {
          apiKeysRef.current = JSON.parse(
            localStorage.getItem("eleven_api_keys") ?? "{}",
          );
        } catch {
          /* ignore */
        }
      }
    };
    void loadKeys();
  }, [user, getAccessToken]);

  useEffect(() => {
    const boot = async () => {
      if (!user) return;
      const localId =
        typeof window !== "undefined"
          ? localStorage.getItem("eleven_session")
          : null;
      if (localId) {
        setSessionId(localId);
        return;
      }
      const newId =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${uid()}${Date.now().toString(36)}`;
      localStorage.setItem("eleven_session", newId);
      setSessionId(newId);
      try {
        await supabase
          .from("sessions")
          .insert({ id: newId, user_id: user.id, title: "Nova conversa" });
      } catch {
        /* best-effort */
      }
    };
    void boot();
  }, [user, supabase]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, busy]);

  // Conectividade: banner GATEWAY_UNAVAILABLE + flush da fila offline.
  useEffect(() => {
    const onOffline = () => {
      setOffline(true);
      window.dispatchEvent(new CustomEvent("gateway_unavailable"));
    };
    const onOnline = () => {
      setOffline(false);
      window.dispatchEvent(new CustomEvent("gateway_online"));
      void registerChatSync();
    };
    const onFlushed = () => setOffline(false);
    window.addEventListener("offline", onOffline);
    window.addEventListener("online", onOnline);
    window.addEventListener("queue_flushed", onFlushed);
    return () => {
      window.removeEventListener("offline", onOffline);
      window.removeEventListener("online", onOnline);
      window.removeEventListener("queue_flushed", onFlushed);
    };
  }, []);

  // Preenche o placeholder do assistente mais recente (content === '') com o texto acumulado.
  const patchAssistant = useCallback(
    (content: string) => {
      setMessages((prev) => {
        let replaced = false;
        const next = prev.map((m) => {
          if (!replaced && m.role === "assistant" && m.content === "") {
            replaced = true;
            return { role: "assistant" as const, content };
          }
          return m;
        });
        return next;
      });
    },
    [setMessages],
  );

  // Ollama / Zen — chamada local direto do device (a nuvem não alcança localhost).
  const sendLocalCompat = useCallback(
    async (prompt: string, history: ChatMessage[]) => {
      let cfg: CompatConfig;
      if (provider === "ollama") {
        cfg = getOllamaConfig();
      } else if (provider === "9router-local") {
        const endpoint =
          (typeof localStorage !== "undefined"
            ? localStorage.getItem("eleven_9r_endpoint")
            : null) ?? "http://localhost:20128";
        const model =
          (typeof localStorage !== "undefined"
            ? localStorage.getItem("eleven_9r_model")
            : null) ?? "Arcenal";
        cfg = { baseUrl: endpoint, apiKey: undefined, model };
      } else {
        cfg = getZenConfig();
        if (!cfg.baseUrl || !cfg.model) {
          patchAssistant(
            "Configure a API Zen no Perfil → IA Provider (base URL + modelo).",
          );
          setBusy(false);
          return;
        }
      }
      const messages = history.map((m) => ({
        role: m.role,
        content: m.content,
      }));
      let acc = "";
      try {
        const r = await chatOpenAICompat(cfg, messages, {
          onDelta: (d) => {
            acc += d;
            patchAssistant(acc);
          },
        });
        if (!acc) patchAssistant(r.text || "(resposta vazia)");
      } catch (err) {
        patchAssistant(
          `(Provedor local indisponível: ${(err as Error).message}. Ollama rodando? Para site https, use OLLAMA_ORIGINS="*" no seu PC.)`,
        );
      }
      setBusy(false);
    },
    [provider, patchAssistant, setBusy],
  );

  // Continua a conversa quando um job do Agente de Dispositivo é aprovado e executado.
  const resumeAfterDeviceJob = useCallback(
    async (ev: AgentJobResumeEvent) => {
      if (!sessionId || busy) return;
      const { job, deviceId } = ev;
      setBusy(true);
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
      const resultText =
        typeof job.result === "string"
          ? job.result
          : JSON.stringify(job.result ?? {});
      const prompt = `A ferramenta ${job.name} foi executada no seu dispositivo (agente de dispositivo). Resultado:\n${resultText}\nResuma o que foi feito.`;
      try {
        const token = user ? await getAccessToken() : null;
        const res = await fetch("/api/agent", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({
            prompt,
            sessionId,
            deviceId,
            stream: false,
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { content?: string };
        patchAssistant(data.content ?? "");
      } catch (err) {
        patchAssistant(
          `Ação executada no dispositivo (${job.name}), mas não consegui continuar: ${(err as Error).message}`,
        );
      } finally {
        setBusy(false);
      }
    },
    [sessionId, busy, user, getAccessToken, patchAssistant, setMessages],
  );

  useEffect(() => {
    const off = onAgentEvent<AgentJobResumeEvent>(
      "agent:job-resume",
      (ev) => void resumeAfterDeviceJob(ev),
    );
    return off;
  }, [resumeAfterDeviceJob]);

  // Persiste um artefato de código no servidor (antes: só localStorage, nunca gravado).
  const saveArtifact = useCallback(
    async (name: string, type: string, content: string) => {
      if (!user) return;
      try {
        const token = await getAccessToken();
        await fetch("/api/artifacts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userId: user.id, name, type, content }),
        });
      } catch {
        /* best-effort */
      }
    },
    [user, getAccessToken],
  );

  const send = useCallback(
    async (prompt?: string) => {
      const keys = apiKeysRef.current;
      const text = (prompt ?? input).trim();
      if (!text || busy || !sessionId) return;
      const next = [...messages, { role: "user" as const, content: text }];
      setMessages(next);
      setInput("");
      setBusy(true);
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      // Local LLM (Ollama/Zen): chama direto do device — a nuvem não enxerga localhost.
      if (provider === "ollama" || provider === "zen") {
        await sendLocalCompat(text, next);
        return;
      }

      const token = user ? await getAccessToken() : null;
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};

      try {
        const devCtx = getDeviceContext();
        const isNativeApp =
          devCtx.platform === "desktop-app" || devCtx.platform === "mobile-app";
        const useAgent =
          isNativeApp && !!devCtx.deviceId && provider === "9router";

        const apiUrl = useAgent ? "/api/agent" : "/api/chat";
        const body = useAgent
          ? {
              prompt: text,
              sessionId,
              deviceId: devCtx.deviceId,
              stream: true,
            }
          : {
              sessionId,
              userId: user?.id,
              messages: next.map((m) => ({ role: m.role, content: m.content })),
              provider,
              geminiKey: (keys.gemini ?? "").trim(),
              anthropicKey: (keys.anthropic ?? "").trim(),
              nineRouterKey: (keys.nineRouter ?? "").trim(),
              ...(provider === "ollama"
                ? (() => {
                    try {
                      const cfg = JSON.parse(
                        localStorage.getItem("ollama_config") ?? "{}",
                      );
                      return cfg.selectedModel
                        ? { ollamaModel: cfg.selectedModel }
                        : {};
                    } catch {
                      return {};
                    }
                  })()
                : {}),
              files: attached.map((a) => ({
                label: a.label,
                snippet: a.snippet,
              })),
              webSearch,
              memory: memory && !incognito,
              profile,
              stream: true,
            };

        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "content-type": "application/json", ...authHeaders },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          const errData = await res
            .json()
            .catch(() => ({ error: `HTTP ${res.status}` }));
          throw new Error(errData.error ?? "Erro");
        }
        const ct = res.headers.get("content-type") ?? "";
        if (!ct.includes("text/event-stream")) {
          const data = await res.json();
          patchAssistant(data.content ?? "");
        } else if (res.body) {
          const reader = res.body.getReader();
          const decoder = new TextDecoder();
          let buffer = "";
          let acc = "";
          for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            let idx;
            while ((idx = buffer.indexOf("\n\n")) !== -1) {
              const raw = buffer.slice(0, idx);
              buffer = buffer.slice(idx + 2);
              const evLine = raw
                .split("\n")
                .find((l) => l.startsWith("event: "));
              const dataLine = raw
                .split("\n")
                .find((l) => l.startsWith("data: "));
              const event = evLine?.slice(7);
              if (!dataLine) continue;
              let data: unknown = dataLine?.slice(6) ?? "";
              try {
                data = JSON.parse(data as string);
              } catch {
                /* texto puro */
              }
              if (event === "delta") {
                acc += (data as { content?: string })?.content ?? "";
                patchAssistant(acc);
              } else if (event === "done") {
                const finalContent = (data as { content?: string })?.content;
                if (typeof finalContent === "string")
                  patchAssistant(finalContent);
              }
            }
          }
        }
      } catch (err) {
        // Offline: enfileira no SW (IndexedDB) com status pending_sync e avisa a UI.
        if (
          isNetworkError(err) &&
          typeof navigator !== "undefined" &&
          navigator.onLine === false
        ) {
          setOffline(true);
          window.dispatchEvent(new CustomEvent("gateway_unavailable"));
          try {
            await enqueueChatOffline(
              {
                sessionId,
                userId: user?.id,
                messages: next.map((m) => ({
                  role: m.role,
                  content: m.content,
                })),
                provider,
                profile,
                webSearch,
                memory: memory && !incognito,
                stream: false,
              },
              authHeaders,
            );
          } catch {
            /* best-effort */
          }
        }
        setMessages((prev) => {
          let replaced = false;
          return prev.map((m) => {
            if (!replaced && m.role === "assistant" && m.content === "") {
              replaced = true;
              return {
                role: "assistant" as const,
                content: `⚠️ ${(err as Error).message}`,
              };
            }
            return m;
          });
        });
      } finally {
        setBusy(false);
      }
    },
    [
      input,
      busy,
      messages,
      sessionId,
      user?.id,
      getAccessToken,
      provider,
      sendLocalCompat,
      setMessages,
      attached,
      webSearch,
      memory,
      incognito,
      patchAssistant,
    ],
  );

  const onFilesSelected = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files ?? []);
      for (const f of files) {
        const a: Attach = { id: uid(), label: f.name };
        if (
          f.size <= MAX_FILE_BYTES &&
          /\.(txt|md|csv|json|ts|tsx|js|jsx|py|html|css|yaml|yml|toml)$/i.test(
            f.name,
          )
        ) {
          try {
            a.snippet = (await f.text()).slice(0, 4000);
          } catch {
            /* ignore */
          }
        } else if (f.type.startsWith("image/") && f.size < 2 * 1024 * 1024) {
          try {
            const bmp = await createImageBitmap(f);
            const cv = document.createElement("canvas");
            const max = 512;
            const scale = Math.min(1, max / Math.max(bmp.width, bmp.height));
            cv.width = Math.round(bmp.width * scale);
            cv.height = Math.round(bmp.height * scale);
            cv.getContext("2d")!.drawImage(bmp, 0, 0, cv.width, cv.height);
            a.thumb = cv.toDataURL("image/jpeg", 0.75);
          } catch {
            /* ignore */
          }
        }
        setAttached((prev) => [...prev, a]);
      }
      if (e.target) e.target.value = "";
    },
    [],
  );

  const captureScreen = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      const video = document.createElement("video");
      video.srcObject = stream;
      await video.play();
      await new Promise((r) => setTimeout(r, 350));
      const cv = document.createElement("canvas");
      const max = 640;
      const scale = Math.min(
        1,
        max / Math.max(video.videoWidth, video.videoHeight),
      );
      cv.width = Math.round(video.videoWidth * scale);
      cv.height = Math.round(video.videoHeight * scale);
      cv.getContext("2d")!.drawImage(video, 0, 0, cv.width, cv.height);
      stream.getTracks().forEach((t) => t.stop());
      setAttached((prev) => [
        ...prev,
        {
          id: uid(),
          label: `screenshot-${Date.now()}.jpg`,
          thumb: cv.toDataURL("image/jpeg", 0.75),
        },
      ]);
    } catch {
      /* user cancelled or not supported */
    }
  }, []);

  const recordFallback = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream, { mimeType: "audio/webm" });
      const chunks: BlobPart[] = [];
      rec.ondataavailable = (e) => {
        if (e.data.size) chunks.push(e.data);
      };
      rec.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks, { type: "audio/webm" });
        const reader = new FileReader();
        reader.onloadend = async () => {
          setInterim("");
          setListening(false);
          try {
            const res = await fetch("/api/stt", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({
                audio: String(reader.result),
                mime: "audio/webm",
              }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? "STT falhou");
            setInput((prev) => (prev + " " + (data.text ?? "")).trim());
          } catch (err) {
            setInput((prev) =>
              (prev + " " + `⚠️ ${(err as Error).message}`).trim(),
            );
          }
        };
        reader.readAsDataURL(blob);
      };
      rec.start();
      recRef.current = rec;
      setListening(true);
      setInterim("Ouvindo…");
    } catch {
      setListening(false);
    }
  }, []);

  const toggleVoice = useCallback(() => {
    if (listening) {
      recRef.current?.stop();
      setListening(false);
      setInterim("");
      return;
    }
    const SR =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SR) {
      void recordFallback();
      return;
    }
    const rec = new SR();
    rec.lang = "pt-BR";
    rec.interimResults = true;
    rec.continuous = false;
    rec.onresult = (e: any) => {
      let inter = "";
      let final = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t;
        else inter += t;
      }
      if (final) setInput((prev) => (prev + " " + final).trim());
      setInterim(inter);
    };
    rec.onend = () => {
      setListening(false);
      setInterim("");
      recRef.current = null;
    };
    rec.onerror = () => {
      setListening(false);
      setInterim("");
    };
    rec.start();
    recRef.current = rec;
    setListening(true);
  }, [listening, recordFallback]);

  return (
    <div className="flex h-full flex-col bg-astro-dark">
      {offline && (
        <div className="mx-auto mt-4 w-full max-w-3xl px-3">
          <div className="flex items-center gap-2.5 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-2.5 text-[13px] text-amber-200">
            <WifiOff className="h-4 w-4 shrink-0" />
            <span>
              Sem conexão com os modelos de IA. Navegação no histórico e no
              grafo /neural permanecem ativos. Sua mensagem ficou na fila (
              <code className="text-amber-100">pending_sync</code>) e será
              enviada ao reconectar.
            </span>
          </div>
        </div>
      )}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-3 py-4 md:px-5 md:py-5"
      >
        {messages.length === 0 ? (
          <div className="mx-auto mt-[8vh] max-w-3xl px-2">
            <div className="flex flex-col items-center text-center">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#e879f9] shadow-lg shadow-[#7dd3fc]/20">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h1 className="mt-4 text-2xl font-semibold text-text-primary md:text-3xl">
                O que posso fazer por você?
              </h1>
              <p className="mt-1.5 text-sm text-text-dim">
                Modelo ativo:{" "}
                <span className="font-medium text-primary">
                  {provider.split("/").pop() ?? provider}
                </span>
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.label}
                  onClick={() => void send(s.prompt)}
                  className="group flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.03] p-4 text-left transition hover:border-white/[0.1] hover:bg-white/[0.05]"
                >
                  <span className="mt-0.5 text-lg">{s.icon}</span>
                  <div>
                    <div className="text-sm text-text-primary group-hover:text-white">
                      {s.label}
                    </div>
                    <div className="mt-0.5 text-xs text-text-dim">
                      {s.prompt}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl space-y-8">
            {messages.map((m, i) => (
              <div key={i} className="group flex gap-4">
                <div
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${m.role === "user" ? "bg-white/[0.08]" : "bg-gradient-to-br from-[#7dd3fc] to-[#e879f9]"} text-[11px] font-bold ${m.role === "user" ? "text-text-primary" : "text-black"}`}
                >
                  {m.role === "user" ? "V" : "11"}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center gap-2 text-[11px] text-text-dim">
                    {m.role === "user" ? "Você" : "Eleven"}
                  </div>
                  <div className="text-[15px] leading-relaxed text-text-primary whitespace-pre-wrap">
                    {m.content.split(/(```[\s\S]*?```)/g).map((part, pi) => {
                      const codeMatch = part.match(/^```(\w*)\n([\s\S]*?)```$/);
                      if (codeMatch) {
                        const lang = codeMatch[1] || "code";
                        const code = codeMatch[2];
                        const ext =
                          lang === "javascript" || lang === "js"
                            ? "js"
                            : lang === "typescript" || lang === "ts"
                              ? "ts"
                              : lang === "html"
                                ? "html"
                                : lang === "css"
                                  ? "css"
                                  : "txt";
                        return (
                          <div
                            key={pi}
                            className="my-3 rounded-xl border border-white/[0.06] overflow-hidden"
                          >
                            <div className="flex items-center justify-between bg-white/[0.04] px-3 py-1.5">
                              <span className="text-[10px] text-text-dim uppercase">
                                {lang}
                              </span>
                              <button
                                onClick={() => {
                                  window.dispatchEvent(
                                    new CustomEvent("codeGenerated", {
                                      detail: {
                                        code,
                                        language: lang,
                                        extension: ext,
                                      },
                                    }),
                                  );
                                  void saveArtifact(
                                    `chat-generated.${ext}`,
                                    "code",
                                    code,
                                  );
                                  alert("Código enviado para o Eleven Code!");
                                }}
                                className="flex items-center gap-1.5 rounded-md bg-primary/20 px-2 py-1 text-[10px] text-primary hover:bg-primary/30 transition"
                              >
                                <Code2 className="h-3 w-3" /> Abrir no Code
                              </button>
                            </div>
                            <pre className="overflow-x-auto bg-black/40 p-3 text-[13px] leading-relaxed text-white/90">
                              <code>{code}</code>
                            </pre>
                          </div>
                        );
                      }
                      return <span key={pi}>{part}</span>;
                    })}
                  </div>
                  {m.role === "assistant" && (
                    <div className="mt-2 flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
                      {[Copy, ThumbsUp, ThumbsDown].map((Ic, j) => (
                        <button
                          key={j}
                          className="grid h-7 w-7 place-items-center rounded-lg text-text-dim hover:bg-white/[0.05] hover:text-text-primary transition"
                        >
                          <Ic className="h-3.5 w-3.5" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex items-center gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#7dd3fc] to-[#e879f9]">
                  <Loader2 className="h-4 w-4 animate-spin text-black" />
                </div>
                <span className="text-sm text-text-dim">pensando…</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="px-3 pb-3 pt-2 md:px-5 md:pb-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void send();
          }}
          className="mx-auto max-w-3xl rounded-[24px] border border-white/[0.07] bg-[#171a22] p-2 shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition focus-within:border-white/[0.14] focus-within:shadow-[0_8px_48px_rgba(0,209,255,0.08)]"
        >
          {attached.length > 0 && (
            <div className="flex flex-wrap gap-2 px-3 pt-2">
              {attached.map((a) => (
                <span
                  key={a.id}
                  className="group/att inline-flex items-center gap-1.5 rounded-md bg-white/[0.06] px-2 py-1 text-[11px] text-text-muted"
                >
                  {a.thumb ? (
                    <Image
                      src={a.thumb}
                      className="h-5 w-5 rounded object-cover"
                      alt=""
                    />
                  ) : null}
                  <span className="max-w-[120px] truncate">{a.label}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setAttached((prev) => prev.filter((x) => x.id !== a.id))
                    }
                    className="text-text-dim hover:text-text-primary"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send();
              }
            }}
            placeholder={
              listening ? interim || "Ouvindo…" : "Mensagem para a Eleven…"
            }
            rows={1}
            className="max-h-40 min-h-[52px] w-full resize-none bg-transparent px-4 py-3 text-[15px] text-text-primary placeholder:text-text-dim/60 outline-none"
          />

          <div className="flex flex-wrap items-center gap-1.5 px-3 pb-2">
            <input
              ref={fileRef}
              type="file"
              className="hidden"
              multiple
              accept="*/*"
              onChange={onFilesSelected}
            />

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  type="button"
                  className="grid h-8 w-8 place-items-center rounded-full text-text-dim hover:bg-white/[0.08] hover:text-text-primary transition"
                  title="Anexar"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  side="top"
                  sideOffset={6}
                  className="z-50 w-64 rounded-xl glass-card p-1.5 shadow-2xl"
                >
                  <DropdownMenu.Item
                    className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6 hover:text-text-primary outline-none"
                    onSelect={(e) => {
                      e.preventDefault();
                      fileRef.current?.click();
                    }}
                  >
                    <Paperclip className="h-4 w-4 text-primary" /> Arquivos
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6 hover:text-text-primary outline-none"
                    onSelect={(e) => {
                      e.preventDefault();
                      void captureScreen();
                    }}
                  >
                    <ImageIcon className="h-4 w-4 text-primary" /> Screenshot
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6 hover:text-text-primary outline-none"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <FolderGit2 className="h-4 w-4 text-primary" /> Projeto
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6 hover:text-text-primary outline-none"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <Blocks className="h-4 w-4 text-primary" /> Skills
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6 hover:text-text-primary outline-none"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <Webhook className="h-4 w-4 text-primary" /> Conectores
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6 hover:text-text-primary outline-none"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <Plug2 className="h-4 w-4 text-primary" /> Plugins
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="my-1 h-px bg-white/6" />
                  <DropdownMenu.Item
                    className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6 hover:text-text-primary outline-none"
                    onSelect={(e) => {
                      e.preventDefault();
                      setWebSearch((v) => !v);
                    }}
                  >
                    <span className="flex items-center gap-2.5">
                      <Globe className="h-4 w-4 text-primary" /> Web search
                    </span>
                    {webSearch ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : null}
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm text-text-muted hover:bg-white/6 hover:text-text-primary outline-none"
                    onSelect={(e) => {
                      e.preventDefault();
                      setMemory((v) => !v);
                    }}
                  >
                    <span className="flex items-center gap-2.5">
                      <Cpu className="h-4 w-4 text-primary" /> Memory
                    </span>
                    {memory ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : null}
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] px-2 py-1.5 text-[11px] text-text-muted hover:bg-white/[0.08] transition">
                <Cpu className="h-3 w-3 text-primary" />{" "}
                {provider.split("/").pop() ?? provider}
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  side="top"
                  sideOffset={4}
                  className="z-50 w-48 rounded-xl glass-card p-1"
                >
                  {[
                    { id: "9router/Arcenal", label: "Arcenal (9Router)" },
                    {
                      id: "9router/kr/claude-sonnet-4.5",
                      label: "Claude Sonnet 4.5",
                    },
                    { id: "9router/kr/glm-5", label: "GLM-5" },
                    {
                      id: "9router/gemini/gemini-3.6-flash",
                      label: "Gemini 3.6 Flash",
                    },
                    { id: "gemini", label: "Google Gemini" },
                    { id: "anthropic", label: "Anthropic Claude" },
                    { id: "ollama", label: "Ollama (local)" },
                    { id: "9router-local", label: "9Router (local)" },
                    { id: "zen", label: "Zen / API OpenAI" },
                  ].map((p) => (
                    <DropdownMenu.Item
                      key={p.id}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm outline-none ${
                        provider === p.id
                          ? "bg-primary/10 text-primary"
                          : "text-text-muted hover:bg-white/6 hover:text-text-primary"
                      }`}
                      onSelect={(e) => {
                        e.preventDefault();
                        setProvider(p.id);
                      }}
                    >
                      {provider === p.id && <Check className="h-3 w-3" />}
                      {p.label}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>

            {provider === "zen" && (
              <div className="relative">
                <input
                  list="zen-model-list"
                  value={zenModel}
                  onChange={(e) => {
                    setZenModel(e.target.value);
                    saveZenConfig({
                      ...getZenConfig(),
                      model: e.target.value.trim(),
                    });
                  }}
                  placeholder="selecione o modelo"
                  title="Modelo da API Zen / OpenAI"
                  className="w-40 rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1.5 font-mono text-[11px] text-text-primary outline-none placeholder:text-text-dim/40 focus:border-primary/40 transition"
                />
                <datalist id="zen-model-list">
                  {getZenModels().map((m) => (
                    <option key={m} value={m} />
                  ))}
                </datalist>
              </div>
            )}

            <button
              type="button"
              onClick={toggleVoice}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11px] transition ${listening ? "bg-rose-500/20 text-rose-400" : "bg-white/[0.04] text-text-muted hover:bg-white/[0.08] hover:text-text-primary"}`}
              title={listening ? "Parar ouvir" : "Falar"}
            >
              <Mic className={`h-3 w-3 ${listening ? "animate-pulse" : ""}`} />{" "}
              {listening ? "Ouvindo" : "Live"}
            </button>

            <div className="ml-auto">
              <button
                type="submit"
                disabled={busy || !input.trim() || !sessionId}
                className="grid h-8 w-8 place-items-center rounded-full bg-white text-black transition enabled:hover:bg-white/90 disabled:opacity-40"
                aria-label="Enviar"
              >
                {busy ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </form>
        <div className="mx-auto mt-2 max-w-3xl text-center text-[11px] text-text-dim/70">
          Eleven pode cometer erros. Verifique informações importantes.
        </div>
      </div>
    </div>
  );
}
