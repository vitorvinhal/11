"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Search, ChevronUp, ChevronDown, X } from "lucide-react";
import { Terminal as Xterm } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { WebLinksAddon } from "@xterm/addon-web-links";
import { SearchAddon } from "@xterm/addon-search";
import { useAuth } from "../lib/auth";

const OLED_BG = "#05050A";
const CYAN = "#00e5ff";
const FONT = "JetBrains Mono, ui-monospace, SFMono-Regular, monospace";

interface TerminalPaneProps {
  sessionId?: string;
  height?: number;
  className?: string;
}

export default function TerminalPane({
  sessionId,
  height = 168,
  className = "",
}: TerminalPaneProps) {
  const { getAccessToken } = useAuth();
  const hostRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<Xterm | null>(null);
  const fitRef = useRef<FitAddon | null>(null);
  const searchRef = useRef<SearchAddon | null>(null);
  const busyRef = useRef(false);
  const lineRef = useRef("");
  const historyRef = useRef<string[]>([]);
  const histIdxRef = useRef(-1);
  const cwdRef = useRef("~");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [connected, setConnected] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [matches, setMatches] = useState<{
    current: number;
    total: number;
  } | null>(null);

  const prompt = useCallback(() => "\x1b[38;5;80m❯\x1b[0m ", []);

  const runSearch = useCallback(
    (forward: boolean, q: string) => {
      const sa = searchRef.current;
      const term = termRef.current;
      if (!sa || !term) return;
      if (!q) {
        setMatches(null);
        return;
      }
      const found = forward ? sa.findNext(q) : sa.findPrevious(q);
      if (!found && matches?.total) {
        if (forward) sa.findNext(q);
        else sa.findPrevious(q);
      }
      setQuery(q);
    },
    [matches],
  );

  const runCommand = useCallback(
    async (cmd: string) => {
      const term = termRef.current;
      if (!term || busyRef.current) return;
      busyRef.current = true;
      term.write("\r\n");
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
            sessionId,
            cwd: cwdRef.current,
          }),
        });
        const ct = res.headers.get("content-type") ?? "";
        if (!res.ok && ct.includes("application/json")) {
          const err = await res.json();
          term.write(`\x1b[31m${err.error ?? "erro"}\x1b[0m\r\n`);
          term.write(prompt());
          return;
        }
        if (!res.body) {
          term.write(prompt());
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
              term.write(String(data).replace(/\r?\n/g, "\r\n"));
            } else if (event === "exit") {
              fetch(
                `/api/terminal/exec?sessionId=${encodeURIComponent(sessionId ?? "default")}`,
                {
                  headers: token ? { Authorization: `Bearer ${token}` } : {},
                },
              )
                .then((r) => r.json())
                .then((d) => {
                  cwdRef.current = d.cwd ?? cwdRef.current;
                })
                .catch(() => {});
            }
          }
        }
      } catch (err) {
        term.write(`\x1b[31m${(err as Error).message}\x1b[0m\r\n`);
      }
      busyRef.current = false;
      term.write(prompt());
    },
    [getAccessToken, prompt, sessionId],
  );

  useEffect(() => {
    if (!hostRef.current) return;
    const host = hostRef.current;
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.inset = "0";
    host.appendChild(container);

    const term = new Xterm({
      cursorBlink: true,
      cursorStyle: "bar",
      fontFamily: FONT,
      fontSize: 12,
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
    const fit = new FitAddon();
    const search = new SearchAddon();
    term.loadAddon(fit);
    term.loadAddon(search);
    try {
      term.loadAddon(new WebLinksAddon());
    } catch {
      /* ignore */
    }
    term.open(container);

    termRef.current = term;
    fitRef.current = fit;
    searchRef.current = search;

    term.write("\x1b[38;5;80m\r\n");
    term.write("  ╔══════════════════════════════════════╗\r\n");
    term.write("  ║                                      ║\r\n");
    term.write(
      "  ║    \x1b[1;38;5;114m⚡ Eleven Terminal\x1b[0m\x1b[38;5;80m               ║\r\n",
    );
    term.write("  ║    REST+SSE · Ctrl+F para buscar      ║\r\n");
    term.write("  ╚══════════════════════════════════════╝\r\n");
    term.write("\x1b[0m\r\n");
    term.write(prompt());

    const onData = (data: string) => {
      if (busyRef.current) return;
      if (data === "\u001b[A") {
        if (!historyRef.current.length) return;
        histIdxRef.current =
          histIdxRef.current <= 0 ? 0 : histIdxRef.current - 1;
        const next = historyRef.current[histIdxRef.current] ?? "";
        term.write("\r\x1b[K" + prompt() + next);
        lineRef.current = next;
        return;
      }
      if (data === "\u001b[B") {
        if (!historyRef.current.length) return;
        histIdxRef.current = Math.min(
          historyRef.current.length,
          histIdxRef.current + 1,
        );
        const next = historyRef.current[histIdxRef.current] ?? "";
        term.write("\r\x1b[K" + prompt() + next);
        lineRef.current = next;
        return;
      }
      if (data.startsWith("\u001b")) return;
      if ((data === "\u0006" || data === "\x1b") && searchOpenRef.current)
        return;
      for (const ch of data) {
        const code = ch.charCodeAt(0);
        if (ch === "\r") {
          const cmd = lineRef.current;
          lineRef.current = "";
          if (cmd.trim()) {
            historyRef.current.push(cmd);
            histIdxRef.current = historyRef.current.length;
          }
          void runCommand(cmd);
          return;
        } else if (ch === "\u007f") {
          if (lineRef.current.length > 0) {
            lineRef.current = lineRef.current.slice(0, -1);
            term.write("\b \b");
          }
        } else if (ch === "\u0003") {
          term.write("^C\r\n");
          lineRef.current = "";
          term.write(prompt());
        } else if (ch === "\u000c") {
          term.write("\x1b[2J\x1b[H");
          term.write(prompt() + lineRef.current);
        } else if (code >= 32) {
          lineRef.current += ch;
          term.write(ch);
        }
      }
    };
    term.onData(onData);

    void getAccessToken().then((token) => {
      fetch(
        `/api/terminal/exec?sessionId=${encodeURIComponent(sessionId ?? "default")}`,
        {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        },
      )
        .then((r) => r.json())
        .then((d) => {
          cwdRef.current = d.cwd ?? "~";
          setConnected(true);
        })
        .catch(() => setConnected(false));
    });

    const fitTimer = setTimeout(() => {
      try {
        fit.fit();
      } catch {
        /* ignore */
      }
      term.focus();
    }, 60);

    return () => {
      clearTimeout(fitTimer);
      try {
        term.dispose();
      } catch {
        /* ignore */
      }
      container.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  useEffect(() => {
    const onResize = () => {
      try {
        fitRef.current?.fit();
      } catch {
        /* ignore */
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

  const searchOpenRef = useRef(false);
  useEffect(() => {
    searchOpenRef.current = searchOpen;
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const handleSearchKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        runSearch(!e.shiftKey, (e.target as HTMLInputElement).value);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
        termRef.current?.focus();
      }
    },
    [runSearch],
  );

  return (
    <div
      className={`relative flex flex-col ${className}`}
      style={{ height, background: OLED_BG }}
    >
      <div
        className="flex items-center gap-2 px-3 py-1 text-[10px]"
        style={{ borderBottom: "1px solid #ffffff0a", background: "#ffffff04" }}
      >
        <span
          className="flex items-center gap-1.5"
          style={{ color: connected ? "#34d399" : "#f87171", fontFamily: FONT }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: connected ? "#34d399" : "#f87171" }}
          />
          {connected ? "Terminal · conectado" : "Terminal · desconectado"}
        </span>
        <span className="flex-1" />
        <button
          onClick={() => setSearchOpen((v) => !v)}
          title="Buscar (Ctrl+F)"
          className="grid h-5 w-5 place-items-center rounded transition hover:bg-white/10"
        >
          <Search className="h-3 w-3" style={{ color: "#8f8f8f" }} />
        </button>
      </div>
      <div ref={hostRef} className="relative min-h-0 flex-1 overflow-hidden" />
      {searchOpen && (
        <div
          className="absolute bottom-2 right-2 flex items-center gap-1.5 px-2 py-1.5"
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
              if (e.target.value) runSearch(true, e.target.value);
              else setMatches(null);
            }}
            onKeyDown={handleSearchKey}
            placeholder="Buscar no buffer…"
            className="w-40 bg-transparent text-xs outline-none"
            style={{ color: "#e6e6e6", fontFamily: FONT }}
          />
          <span
            className="text-[10px] whitespace-nowrap"
            style={{ color: "#8f8f8f", fontFamily: FONT }}
          >
            {matches ? `${matches.current ?? 0}/${matches.total ?? 0}` : ""}
          </span>
          <button
            onClick={() => runSearch(false, query)}
            title="Anterior"
            className="grid h-5 w-5 place-items-center rounded hover:bg-white/10"
          >
            <ChevronUp className="h-3 w-3" style={{ color: CYAN }} />
          </button>
          <button
            onClick={() => runSearch(true, query)}
            title="Próximo"
            className="grid h-5 w-5 place-items-center rounded hover:bg-white/10"
          >
            <ChevronDown className="h-3 w-3" style={{ color: CYAN }} />
          </button>
          <button
            onClick={() => setSearchOpen(false)}
            title="Fechar"
            className="grid h-5 w-5 place-items-center rounded hover:bg-white/10"
          >
            <X className="h-3 w-3" style={{ color: "#8f8f8f" }} />
          </button>
        </div>
      )}
    </div>
  );
}
