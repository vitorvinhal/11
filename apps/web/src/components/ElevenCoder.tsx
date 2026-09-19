"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Terminal as TerminalIcon,
  Wifi,
  WifiOff,
  Trash2,
  RotateCw,
  Copy,
  Clipboard,
  Plus,
  X,
  Zap,
  Activity,
  Search,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "../lib/auth";

const OLED_BG = "#05050A";
const CYAN = "#00e5ff";
const FONT = "JetBrains Mono, ui-monospace, SFMono-Regular, monospace";

interface TerminalSession {
  id: string;
  name: string;
  connected: boolean;
  processName: string;
  cwd: string;
}

let TerminalClass: any = null;
let FitAddonClass: any = null;
let WebLinksAddonClass: any = null;
let SearchAddonClass: any = null;

async function loadDeps() {
  if (!TerminalClass) {
    const xterm = await import("@xterm/xterm");
    TerminalClass = xterm.Terminal;
    const fit = await import("@xterm/addon-fit");
    FitAddonClass = fit.FitAddon;
    try {
      const search = await import("@xterm/addon-search");
      SearchAddonClass = search.SearchAddon;
    } catch {
      /* ignore */
    }
    try {
      const wl = await import("@xterm/addon-web-links");
      WebLinksAddonClass = wl.WebLinksAddon;
    } catch {
      /* ignore */
    }
  }
}

function uid() {
  return Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
}

interface XTermHandle {
  id: string;
  container: HTMLElement;
  term: any;
  fitAddon: any;
  searchAddon: any;
  busy: boolean;
  line: string;
  history: string[];
  histIdx: number;
  cwd: string;
}

export default function ElevenCoder() {
  const { getAccessToken } = useAuth();
  const hostRef = useRef<HTMLDivElement>(null);
  const handlesRef = useRef<Map<string, XTermHandle>>(new Map());
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [sessions, setSessions] = useState<TerminalSession[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [connectionStatus, setConnectionStatus] = useState<
    "connecting" | "connected" | "disconnected"
  >("disconnected");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const activeRef = useRef<string>("");
  const sessionsRef = useRef<TerminalSession[]>([]);

  useEffect(() => {
    activeRef.current = activeId;
  }, [activeId]);
  useEffect(() => {
    sessionsRef.current = sessions;
  }, [sessions]);

  const prompt = () => "\x1b[38;5;80m❯\x1b[0m ";

  const runCommand = useCallback(
    async (handle: XTermHandle, cmd: string) => {
      if (handle.busy) return;
      handle.busy = true;
      handle.term.write("\r\n");
      try {
        const token = await getAccessToken();
        const res = await fetch("/api/terminal/exec", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({
            command: cmd,
            sessionId: handle.id,
            cwd: handle.cwd,
          }),
        });
        const ct = res.headers.get("content-type") ?? "";
        if (!res.ok && ct.includes("application/json")) {
          const err = await res.json();
          handle.term.write(`\x1b[31m${err.error ?? "erro"}\x1b[0m\r\n`);
          handle.busy = false;
          handle.term.write(prompt());
          return;
        }
        if (!res.body) {
          handle.busy = false;
          handle.term.write(prompt());
          return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          let idx;
          while ((idx = buffer.indexOf("\n\n")) !== -1) {
            const raw = buffer.slice(0, idx);
            buffer = buffer.slice(idx + 2);
            const evLine = raw.split("\n").find((l) => l.startsWith("event: "));
            const dataLine = raw
              .split("\n")
              .find((l) => l.startsWith("data: "));
            const event = evLine?.slice(7);
            let data: string = dataLine?.slice(6) ?? "";
            try {
              data = JSON.parse(data);
            } catch {
              /* ignore */
            }
            if (event === "stdout" || event === "stderr") {
              handle.term.write(String(data).replace(/\r?\n/g, "\r\n"));
            } else if (event === "exit") {
              fetch(
                `/api/terminal/exec?sessionId=${encodeURIComponent(handle.id)}`,
                {
                  headers: token ? { Authorization: `Bearer ${token}` } : {},
                },
              )
                .then((r) => r.json())
                .then((d) => {
                  handle.cwd = d.cwd ?? handle.cwd;
                })
                .catch(() => {});
            }
          }
        }
      } catch (err) {
        handle.term.write(`\x1b[31m${(err as Error).message}\x1b[0m\r\n`);
      }
      handle.busy = false;
      handle.term.write(prompt());
    },
    [getAccessToken],
  );

  const createXTerm = useCallback(
    async (id: string, host: HTMLElement) => {
      await loadDeps();
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.inset = "0";
      host.appendChild(container);

      const term = new TerminalClass({
        cursorBlink: true,
        cursorStyle: "bar",
        fontFamily: FONT,
        fontSize: 13,
        lineHeight: 1.3,
        scrollback: 10000,
        allowProposedApi: true,
        theme: {
          background: OLED_BG,
          foreground: "#e6e6e6",
          cursor: CYAN,
          cursorAccent: OLED_BG,
          selectionBackground: "rgba(0,229,255,0.25)",
          selectionForeground: "#ffffff",
          black: "#1b1e26",
          red: "#f87171",
          green: "#34d399",
          yellow: "#fbbf24",
          blue: "#60a5fa",
          magenta: "#c084fc",
          cyan: "#22d3ee",
          white: "#e6e6e6",
          brightBlack: "#6b7280",
          brightRed: "#fb7185",
          brightGreen: "#4ade80",
          brightYellow: "#fcd34d",
          brightBlue: "#93c5fd",
          brightMagenta: "#d8b4fe",
          brightCyan: "#67e8f9",
          brightWhite: "#ffffff",
        },
      });

      const fitAddon = new FitAddonClass();
      term.loadAddon(fitAddon);
      const searchAddon = SearchAddonClass ? new SearchAddonClass() : null;
      if (searchAddon) term.loadAddon(searchAddon);
      try {
        if (WebLinksAddonClass) term.loadAddon(new WebLinksAddonClass());
      } catch {
        /* ignore */
      }
      term.open(container);

      const handle: XTermHandle = {
        id,
        container,
        term,
        fitAddon,
        searchAddon,
        busy: false,
        line: "",
        history: [],
        histIdx: -1,
        cwd: "~",
      };

      term.onData((data: string) => {
        if (handle.busy) return;
        if (data === "\u0006") {
          setSearchOpen(true);
          setTimeout(() => searchInputRef.current?.focus(), 0);
          return;
        }
        if (data === "\u001b[A") {
          if (!handle.history.length) return;
          handle.histIdx = handle.histIdx <= 0 ? 0 : handle.histIdx - 1;
          const next = handle.history[handle.histIdx] ?? "";
          term.write("\r\x1b[K" + prompt() + next);
          handle.line = next;
          return;
        }
        if (data === "\u001b[B") {
          if (!handle.history.length) return;
          handle.histIdx = Math.min(handle.history.length, handle.histIdx + 1);
          const next = handle.history[handle.histIdx] ?? "";
          term.write("\r\x1b[K" + prompt() + next);
          handle.line = next;
          return;
        }
        if (data.startsWith("\u001b")) return;

        for (const ch of data) {
          const code = ch.charCodeAt(0);
          if (ch === "\r") {
            const cmd = handle.line;
            handle.line = "";
            if (cmd.trim()) {
              handle.history.push(cmd);
              handle.histIdx = handle.history.length;
            }
            void runCommand(handle, cmd);
            return;
          } else if (ch === "\u007f") {
            if (handle.line.length > 0) {
              handle.line = handle.line.slice(0, -1);
              term.write("\b \b");
            }
          } else if (ch === "\u0003") {
            term.write("^C\r\n");
            handle.line = "";
            term.write(prompt());
          } else if (ch === "\u000c") {
            term.write("\x1b[2J\x1b[H");
            term.write(prompt() + handle.line);
          } else if (code >= 32) {
            handle.line += ch;
            term.write(ch);
          }
        }
      });

      term.write("\x1b[38;5;80m");
      term.write("\r\n");
      term.write("  ╔══════════════════════════════════════╗\r\n");
      term.write("  ║                                      ║\r\n");
      term.write(
        "  ║    \x1b[1;38;5;114m⚡ Eleven Coder\x1b[0m\x1b[38;5;80m              ║\r\n",
      );
      term.write("  ║    Terminal interativo REST+SSE       ║\r\n");
      term.write("  ║                                      ║\r\n");
      term.write("  ╚══════════════════════════════════════╝\r\n");
      term.write("\x1b[0m\r\n");
      term.write(prompt());

      const token = await getAccessToken();
      fetch(`/api/terminal/exec?sessionId=${encodeURIComponent(id)}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
        .then((r) => r.json())
        .then((d) => {
          handle.cwd = d.cwd ?? "~";
          setConnectionStatus("connected");
        })
        .catch(() => setConnectionStatus("disconnected"));

      setTimeout(() => {
        try {
          fitAddon.fit();
        } catch {
          /* ignore */
        }
        try {
          term.focus();
        } catch {
          /* ignore */
        }
      }, 50);

      handlesRef.current.set(id, handle);
      return handle;
    },
    [getAccessToken, runCommand],
  );

  useEffect(() => {
    if (!hostRef.current || !activeId) return;
    const host = hostRef.current;

    const handle = handlesRef.current.get(activeId);
    if (!handle) {
      setConnectionStatus("connecting");
      createXTerm(activeId, host).then((h) => {
        handlesRef.current.forEach((hh) => {
          hh.container.style.display = hh.id === activeId ? "" : "none";
        });
        setTimeout(() => {
          try {
            h.fitAddon.fit();
          } catch {
            /* ignore */
          }
        }, 30);
      });
    } else {
      handlesRef.current.forEach((hh) => {
        hh.container.style.display = hh.id === activeId ? "" : "none";
      });
      setTimeout(() => {
        try {
          handle!.fitAddon.fit();
        } catch {
          /* ignore */
        }
        try {
          handle!.term.focus();
        } catch {
          /* ignore */
        }
      }, 30);
    }
  }, [activeId, createXTerm]);

  useEffect(
    () => () => {
      handlesRef.current.forEach((h) => {
        try {
          h.term.dispose();
        } catch {
          /* ignore */
        }
        h.container.remove();
      });
      handlesRef.current.clear();
    },
    [],
  );

  useEffect(() => {
    const onResize = () => {
      const h = handlesRef.current.get(activeRef.current);
      if (h) {
        try {
          h.fitAddon.fit();
        } catch {
          /* ignore */
        }
      }
    };
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    if (hostRef.current) ro.observe(hostRef.current);
    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  const createSession = useCallback(() => {
    const id = uid();
    const num = sessionsRef.current.length + 1;
    const newSession: TerminalSession = {
      id,
      name: `Coder ${num}`,
      connected: false,
      processName: "bash",
      cwd: "~",
    };
    setSessions((prev) => [...prev, newSession]);
    setActiveId(id);
  }, []);

  const closeSession = useCallback((id: string) => {
    const h = handlesRef.current.get(id);
    if (h) {
      try {
        h.term.dispose();
      } catch {
        /* ignore */
      }
      h.container.remove();
      handlesRef.current.delete(id);
    }
    setSessions((prev) => {
      const next = prev.filter((s) => s.id !== id);
      if (next.length === 0) {
        const s: TerminalSession = {
          id: uid(),
          name: "Coder 1",
          connected: false,
          processName: "bash",
          cwd: "~",
        };
        setActiveId(s.id);
        return [s];
      }
      if (activeRef.current === id) setActiveId(next[next.length - 1].id);
      return next;
    });
  }, []);

  const clearTerminal = useCallback(() => {
    const h = handlesRef.current.get(activeId);
    if (h) {
      h.term.clear();
      h.term.write("\x1b[2J\x1b[H");
    }
  }, [activeId]);

  const reconnect = useCallback(() => {
    const id = activeId;
    const old = handlesRef.current.get(id);
    if (old) {
      try {
        old.term.dispose();
      } catch {
        /* ignore */
      }
      old.container.remove();
      handlesRef.current.delete(id);
    }
    setActiveId("");
    setTimeout(() => setActiveId(id), 50);
  }, [activeId]);

  const copyBuffer = useCallback(async () => {
    const h = handlesRef.current.get(activeId);
    if (!h) return;
    const selection = h.term.getSelection();
    if (selection) {
      try {
        await navigator.clipboard.writeText(selection);
      } catch {
        /* ignore */
      }
    }
  }, [activeId]);

  const pasteBuffer = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        const h = handlesRef.current.get(activeId);
        if (h) h.term.write(text);
      }
    } catch {
      /* ignore */
    }
  }, [activeId]);

  const findNext = useCallback(() => {
    const h = handlesRef.current.get(activeId);
    if (h?.searchAddon && query) h.searchAddon.findNext(query);
  }, [activeId, query]);

  const findPrevious = useCallback(() => {
    const h = handlesRef.current.get(activeId);
    if (h?.searchAddon && query) h.searchAddon.findPrevious(query);
  }, [activeId, query]);

  const activeSession = sessions.find((s) => s.id === activeId);

  return (
    <div className="flex h-full flex-col" style={{ background: OLED_BG }}>
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{ borderBottom: "1px solid #ffffff10", background: "#ffffff04" }}
      >
        <div
          className="flex items-center gap-1.5 rounded-lg px-2 py-1"
          style={{ background: "#ffffff08" }}
        >
          {connectionStatus === "connected" ? (
            <Wifi className="h-3.5 w-3.5" style={{ color: "#34d399" }} />
          ) : connectionStatus === "connecting" ? (
            <RotateCw
              className="h-3.5 w-3.5 animate-spin"
              style={{ color: "#fbbf24" }}
            />
          ) : (
            <WifiOff className="h-3.5 w-3.5" style={{ color: "#f87171" }} />
          )}
          <span
            className="text-[10px] font-medium"
            style={{ color: "#8f8f8f", fontFamily: FONT }}
          >
            {connectionStatus === "connected"
              ? "Conectado"
              : connectionStatus === "connecting"
                ? "Conectando..."
                : "Desconectado"}
          </span>
        </div>
        {activeSession && (
          <div
            className="flex items-center gap-1.5 rounded-lg px-2 py-1"
            style={{ background: "#ffffff08" }}
          >
            <Activity
              className="h-3 w-3"
              style={{ color: activeSession.connected ? CYAN : "#f87171" }}
            />
            <span
              className="text-[10px]"
              style={{ color: "#b4b4b4", fontFamily: FONT }}
            >
              {activeSession.processName}
            </span>
          </div>
        )}
        {activeSession && activeSession.cwd && (
          <div
            className="hidden sm:flex items-center gap-1.5 rounded-lg px-2 py-1 truncate max-w-[200px]"
            style={{ background: "#ffffff08" }}
          >
            <span
              className="text-[10px] truncate"
              style={{ color: "#8f8f8f", fontFamily: FONT }}
            >
              {activeSession.cwd}
            </span>
          </div>
        )}
        <div className="flex-1" />
        <div className="flex items-center gap-1">
          <button
            onClick={copyBuffer}
            title="Copiar"
            className="h-7 w-7 grid place-items-center rounded-lg transition"
            style={{ background: "#ffffff08" }}
          >
            <Copy className="h-3.5 w-3.5" style={{ color: "#8f8f8f" }} />
          </button>
          <button
            onClick={pasteBuffer}
            title="Colar"
            className="h-7 w-7 grid place-items-center rounded-lg transition"
            style={{ background: "#ffffff08" }}
          >
            <Clipboard className="h-3.5 w-3.5" style={{ color: "#8f8f8f" }} />
          </button>
          <button
            onClick={clearTerminal}
            title="Limpar"
            className="h-7 w-7 grid place-items-center rounded-lg transition"
            style={{ background: "#ffffff08" }}
          >
            <Trash2 className="h-3.5 w-3.5" style={{ color: "#8f8f8f" }} />
          </button>
          <button
            onClick={reconnect}
            title="Reconectar"
            className="h-7 w-7 grid place-items-center rounded-lg transition"
            style={{ background: "#ffffff08" }}
          >
            <RotateCw className="h-3.5 w-3.5" style={{ color: "#8f8f8f" }} />
          </button>
          <button
            onClick={() => setSearchOpen((v) => !v)}
            title="Buscar (Ctrl+F)"
            className={`h-7 w-7 grid place-items-center rounded-lg transition ${
              searchOpen ? "" : ""
            }`}
            style={{
              background: searchOpen ? "#00e5ff22" : "#ffffff08",
              color: searchOpen ? CYAN : "#8f8f8f",
            }}
          >
            <Search className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div
        className="flex items-center gap-0.5 px-2 py-1"
        style={{ borderBottom: "1px solid #ffffff08" }}
      >
        {sessions.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className="group flex items-center gap-1.5 rounded-t-md px-3 py-1 text-[11px] font-medium transition"
            style={{
              background: activeId === s.id ? "#ffffff0a" : "transparent",
              color: activeId === s.id ? CYAN : "#8f8f8f",
              fontFamily: FONT,
            }}
          >
            <TerminalIcon className="h-3 w-3" />
            <span>{s.name}</span>
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: s.connected ? "#34d399" : "#f87171" }}
            />
            {sessions.length > 1 && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  closeSession(s.id);
                }}
                className="opacity-0 group-hover:opacity-100 transition ml-1"
                style={{ color: "#f87171" }}
              >
                <X className="h-3 w-3" />
              </span>
            )}
          </button>
        ))}
        <button
          onClick={createSession}
          className="ml-1 grid h-6 w-6 place-items-center rounded-md transition"
          style={{ color: "#8f8f8f" }}
          title="Novo terminal"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      <div ref={hostRef} className="min-h-0 flex-1 overflow-hidden relative">
        {searchOpen && (
          <div
            className="absolute top-2 right-2 z-10 flex items-center gap-1.5 px-2 py-1.5"
            style={{
              background: "#12141c",
              border: "1px solid #00e5ff33",
              borderRadius: 8,
            }}
          >
            <input
              ref={searchInputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value) {
                  const h = handlesRef.current.get(activeId);
                  if (h?.searchAddon) h.searchAddon.findNext(e.target.value);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  findNext();
                } else if (e.key === "Escape") {
                  setSearchOpen(false);
                  const h = handlesRef.current.get(activeId);
                  try {
                    h?.term.focus();
                  } catch {
                    /* ignore */
                  }
                }
              }}
              placeholder="Buscar no buffer…"
              spellCheck={false}
              className="w-44 bg-transparent text-xs outline-none"
              style={{ color: "#e6e6e6", fontFamily: FONT }}
            />
            <button
              onClick={findPrevious}
              title="Anterior"
              className="grid h-5 w-5 place-items-center rounded transition hover:bg-white/10"
            >
              <ChevronUp className="h-3.5 w-3.5" style={{ color: CYAN }} />
            </button>
            <button
              onClick={findNext}
              title="Próximo"
              className="grid h-5 w-5 place-items-center rounded transition hover:bg-white/10"
            >
              <ChevronDown className="h-3.5 w-3.5" style={{ color: CYAN }} />
            </button>
            <button
              onClick={() => setSearchOpen(false)}
              title="Fechar"
              className="grid h-5 w-5 place-items-center rounded transition hover:bg-white/10"
            >
              <X className="h-3.5 w-3.5" style={{ color: "#8f8f8f" }} />
            </button>
          </div>
        )}
      </div>

      <div
        className="flex items-center justify-between px-3 py-1.5"
        style={{ borderTop: "1px solid #ffffff08", background: "#ffffff02" }}
      >
        <div
          className="flex items-center gap-3 text-[10px]"
          style={{ color: "#8f8f8f", fontFamily: FONT }}
        >
          <span className="flex items-center gap-1">
            <Zap className="h-3 w-3" style={{ color: CYAN }} />
            REST+SSE
          </span>
          <span>
            {sessions.length} sessao{sessions.length !== 1 ? "es" : ""}
          </span>
        </div>
        <div
          className="text-[10px]"
          style={{ color: "#8f8f8f", fontFamily: FONT }}
        >
          Eleven Coder v2.0
        </div>
      </div>
    </div>
  );
}
