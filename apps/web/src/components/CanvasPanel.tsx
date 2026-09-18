"use client";

import { useCallback, useEffect, useState } from "react";
import { RefreshCw, Sparkles, Code2 } from "lucide-react";

type Mode = "html" | "svg";

const PREFIX_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">`;

/**
 * Canvas generativo — playground onde a 11 renderiza e compila componentes
 * React/Tailwind/SVG em um iframe isolado em tempo real.
 * Modos: HTML (+ Tailwind via CDN) ou SVG diagram.
 */
export function CanvasPanel() {
  const [mode, setMode] = useState<Mode>("html");
  const [code, setCode] = useState(DEFAULT_HTML);
  const [srcDoc, setSrcDoc] = useState("");

  const render = useCallback(() => {
    if (mode === "svg") {
      const body = code.trim().startsWith("<svg")
        ? code
        : PREFIX_SVG + "\n" + code + "\n</svg>";
      setSrcDoc(
        `<!doctype html><html><body style="background:#05050A;margin:0;height:100vh;display:grid;place-items:center">${body}</body></html>`,
      );
      return;
    }
    const html = code.trim().startsWith("<") ? code : `\n${code}`;
    setSrcDoc(
      `<!doctype html><html><head><meta charset="utf-8"><script src="https://cdn.tailwindcss.com"></script></head><body class="bg-[#05050A]">${html}</body></html>`,
    );
  }, [code, mode]);

  useEffect(() => {
    render();
  }, [render]);

  const sendToCoder = () => {
    window.dispatchEvent(
      new CustomEvent("codeGenerated", {
        detail: {
          code,
          language: mode === "svg" ? "svg" : "html",
          extension: mode === "svg" ? "svg" : "html",
        },
      }),
    );
  };

  return (
    <div className="mx-auto flex h-full flex-col gap-4">
      <div className="glassmorph flex flex-wrap items-center gap-3 p-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold text-text-primary">
            Canvas Generativo
          </h2>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex rounded-lg bg-white/[0.04] p-0.5">
            {(["html", "svg"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-md px-3 py-1 text-[11px] uppercase tracking-wide transition ${mode === m ? "bg-white/12 text-text-primary" : "text-text-dim hover:text-text-muted"}`}
              >
                {m === "html" ? "React/Tailwind" : "SVG"}
              </button>
            ))}
          </div>
          <button
            onClick={render}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary/20 px-3 py-1.5 text-[11px] text-primary hover:bg-primary/30 transition"
          >
            <RefreshCw className="h-3 w-3" /> Re-render
          </button>
          <button
            onClick={sendToCoder}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.06] px-3 py-1.5 text-[11px] text-text-muted hover:bg-white/[0.1] hover:text-text-primary transition"
          >
            <Code2 className="h-3 w-3" /> Enviar ao Code
          </button>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-2">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="h-64 min-h-full resize-none rounded-xl border border-white/[0.07] bg-[#0a0a12] p-4 font-mono text-[13px] leading-relaxed text-[#a5f3fc] outline-none focus:border-primary/40 lg:h-auto"
          placeholder={
            mode === "html"
              ? "Cole JSX/Tailwind (ex.: hello world) ou script React…"
              : "Cole um diagrama SVG…"
          }
        />

        <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-white/[0.07] bg-[#0a0a12]">
          <iframe
            title="preview"
            sandbox="allow-scripts"
            srcDoc={srcDoc}
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
      <p className="text-center text-[11px] text-text-dim">
        Respostas do agente chegam com &lt;code&gt; → envie ao Canvas para
        pré-visualizar em tempo real.
      </p>
    </div>
  );
}

const DEFAULT_HTML = `<div class="flex h-screen items-center justify-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
  Hello, 11 ✨
</div>`;
