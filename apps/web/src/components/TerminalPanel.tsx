"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Plus, X, Terminal as TerminalIcon } from "lucide-react";
import "@xterm/xterm/css/xterm.css";

interface TermSession {
  id: string;
  name: string;
}

interface XTermHandle {
  id: string;
  container: HTMLElement;
  dispose: () => void;
  focus: () => void;
  fit: () => void;
}

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

export default function TerminalPanel() {
  const hostRef = useRef<HTMLDivElement>(null);
  const handlesRef = useRef<Map<string, XTermHandle>>(new Map());
  const [sessions, setSessions] = useState<TermSession[]>([
    { id: uid(), name: "Terminal 1" },
  ]);
  const [activeId, setActiveId] = useState<string>("");
  const [connected, setConnected] = useState(false);
  const [cwd, setCwd] = useState("");
  const activeRef = useRef<string>("");

  useEffect(() => {
    if (!activeId && sessions[0]) setActiveId(sessions[0].id);
  }, [activeId, sessions]);
  useEffect(() => {
    activeRef.current = activeId;
  }, [activeId]);

  const createSession = useCallback(() => {
    setSessions((prev) => {
      const s: TermSession = { id: uid(), name: `Terminal ${prev.length + 1}` };
      setActiveId(s.id);
      return [...prev, s];
    });
  }, []);

  const closeSession = useCallback((id: string) => {
    handlesRef.current.get(id)?.dispose();
    handlesRef.current.delete(id);
    setSessions((prev) => {
      const next = prev.filter((s) => s.id !== id);
      if (next.length === 0) {
        const s = { id: uid(), name: "Terminal 1" };
        setActiveId(s.id);
        return [s];
      }
      if (activeRef.current === id) setActiveId(next[next.length - 1].id);
      return next;
    });
  }, []);

  useEffect(() => {
    if (!activeId || !hostRef.current) return;
    const host = hostRef.current;
    let cancelled = false;
    host.style.position = "relative";
    (async () => {
      let handle = handlesRef.current.get(activeId);
      if (!handle) {
        handle = await createXterm(activeId, host, setConnected, setCwd);
        if (cancelled) {
          handle.dispose();
          return;
        }
        handlesRef.current.set(activeId, handle);
      }
      // Só a aba ativa fica visível; as demais são ocultadas (sem empilhar divs).
      handlesRef.current.forEach((h) => {
        h.container.style.display = h.id === activeId ? "" : "none";
      });
      setTimeout(() => handle?.fit(), 30);
      handle.focus();
    })();
    return () => {
      cancelled = true;
    };
  }, [activeId]);

  useEffect(
    () => () => {
      handlesRef.current.forEach((h) => h.dispose());
      handlesRef.current.clear();
    },
    [],
  );

  useEffect(() => {
    const onResize = () => handlesRef.current.get(activeRef.current)?.fit();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="flex h-full flex-col bg-[#0a0c10]">
      <div className="flex items-center gap-1 border-b border-border px-3 py-1.5">
        <div className="mr-2 flex items-center gap-1.5 text-[11px] text-text-dim">
          <TerminalIcon className="h-3.5 w-3.5 text-emerald-400" />
          <span className="font-mono">Terminal</span>
          <span
            className={`ml-1 h-1.5 w-1.5 rounded-full ${connected ? "bg-emerald-400" : "bg-amber-400"}`}
          />
        </div>
        {sessions.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            className={`group flex items-center gap-1.5 rounded-t-md px-3 py-1 text-[11px] font-medium transition ${activeId === s.id ? "bg-white/[0.06] text-text-primary" : "text-text-dim hover:text-text-muted"}`}
          >
            {s.name}
            {sessions.length > 1 && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  closeSession(s.id);
                }}
                className="opacity-0 group-hover:opacity-100 hover:text-rose-400"
              >
                <X className="h-3 w-3" />
              </span>
            )}
          </button>
        ))}
        <button
          onClick={createSession}
          className="ml-1 grid h-6 w-6 place-items-center rounded-md text-text-dim hover:bg-white/[0.06] hover:text-text-primary transition"
          title="Novo terminal"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
        <div className="ml-auto truncate font-mono text-[10px] text-text-dim">
          {cwd}
        </div>
      </div>
      <div ref={hostRef} className="min-h-0 flex-1 overflow-hidden p-1" />
    </div>
  );
}

async function createXterm(
  sessionId: string,
  host: HTMLElement,
  onStatus: (v: boolean) => void,
  onCwd: (v: string) => void,
): Promise<XTermHandle> {
  const { Terminal } = await import("@xterm/xterm");
  const { FitAddon } = await import("@xterm/addon-fit");
  const { WebLinksAddon } = await import("@xterm/addon-web-links");

  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.inset = "0";
  host.appendChild(container);

  const term = new Terminal({
    cursorBlink: true,
    fontFamily: "'JetBrains Mono', 'Cascadia Code', Consolas, monospace",
    fontSize: 13,
    lineHeight: 1.25,
    scrollback: 5000,
    theme: {
      background: "#0a0c10",
      foreground: "#e6e6e6",
      cursor: "#7dd3fc",
      selectionBackground: "rgba(125,211,252,0.3)",
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

  const fit = new FitAddon();
  term.loadAddon(fit);
  try {
    term.loadAddon(new WebLinksAddon());
  } catch {
    /* opcional */
  }
  term.open(container);
  setTimeout(() => {
    try {
      fit.fit();
    } catch {
      /* ignore */
    }
  }, 40);

  let line = "";
  const history: string[] = [];
  let histIdx = -1;
  let busy = false;
  let currentCwd = "";

  const prompt = () => `\x1b[38;5;80m❯\x1b[0m `;
  const say = (s: string) => term.write(s);
  const drawPrompt = () => term.write(prompt());

  fetch(`/api/terminal/exec?sessionId=${encodeURIComponent(sessionId)}`)
    .then((r) => r.json())
    .then((d) => {
      currentCwd = d.cwd ?? "";
      onCwd(currentCwd);
      onStatus(true);
    })
    .catch(() => onStatus(false));

  say(
    `\x1b[38;5;80m11 Terminal\x1b[0m — rodando em ${typeof navigator !== "undefined" ? "seu PC" : ""}. Ex.: \x1b[38;5;114mls\x1b[0m, \x1b[38;5;114mgit status\x1b[0m, \x1b[38;5;114mopencode\x1b[0m\r\n`,
  );
  drawPrompt();

  const runCommand = async (cmd: string) => {
    busy = true;
    term.write("\r\n");
    try {
      const res = await fetch("/api/terminal/exec", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ command: cmd, sessionId, cwd: currentCwd }),
      });
      const ct = res.headers.get("content-type") ?? "";
      if (!res.ok && ct.includes("application/json")) {
        const err = await res.json();
        say(`\x1b[31m${err.error ?? "erro"}\x1b[0m\r\n`);
        busy = false;
        drawPrompt();
        return;
      }
      if (!res.body) {
        busy = false;
        drawPrompt();
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
          const dataLine = raw.split("\n").find((l) => l.startsWith("data: "));
          const event = evLine?.slice(7);
          let data: string = dataLine?.slice(6) ?? "";
          try {
            data = JSON.parse(data);
          } catch {
            /* texto puro */
          }
          if (event === "stdout" || event === "stderr") {
            say(String(data).replace(/\r?\n/g, "\r\n"));
          } else if (event === "exit") {
            fetch(
              `/api/terminal/exec?sessionId=${encodeURIComponent(sessionId)}`,
            )
              .then((r) => r.json())
              .then((d) => {
                currentCwd = d.cwd ?? currentCwd;
                onCwd(currentCwd);
              })
              .catch(() => {});
          }
        }
      }
    } catch (err) {
      say(`\x1b[31m${(err as Error).message}\x1b[0m\r\n`);
    }
    busy = false;
    drawPrompt();
  };

  const redrawLine = (next: string) => {
    term.write("\r\x1b[K" + prompt() + next);
    line = next;
  };

  term.onData((data: string) => {
    if (busy) return;

    // Sequências de escape (setas / home / end)
    if (data === "\u001b[A") {
      // up
      if (!history.length) return;
      histIdx = histIdx <= 0 ? 0 : histIdx - 1;
      redrawLine(history[histIdx] ?? "");
      return;
    }
    if (data === "\u001b[B") {
      // down
      if (!history.length) return;
      histIdx = Math.min(history.length, histIdx + 1);
      redrawLine(history[histIdx] ?? "");
      return;
    }
    if (data.startsWith("\u001b")) return; // ignora outras escapes

    for (const ch of data) {
      const code = ch.charCodeAt(0);
      if (ch === "\r") {
        const cmd = line;
        line = "";
        if (cmd.trim()) {
          history.push(cmd);
          histIdx = history.length;
        }
        void runCommand(cmd);
        return;
      } else if (ch === "\u007f") {
        if (line.length > 0) {
          line = line.slice(0, -1);
          term.write("\b \b");
        }
      } else if (ch === "\u0003") {
        // Ctrl+C
        term.write("^C");
        line = "";
        term.write("\r\n");
        drawPrompt();
      } else if (ch === "\u000c") {
        // Ctrl+L
        term.write("\x1b[2J\x1b[H");
        term.write(prompt() + line);
      } else if (code >= 32) {
        line += ch;
        term.write(ch);
      }
    }
  });

  return {
    id: sessionId,
    container,
    dispose() {
      try {
        term.dispose();
      } catch {
        /* ignore */
      }
      container.remove();
      onStatus(false);
    },
    focus() {
      try {
        term.focus();
      } catch {
        /* ignore */
      }
    },
    fit() {
      try {
        fit.fit();
      } catch {
        /* ignore */
      }
    },
  };
}
