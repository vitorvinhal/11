"use client";

import { useState } from "react";
import { Code2, Terminal as TerminalIcon } from "lucide-react";
import CodePanel from "./CodePanel";
import TerminalPanel from "./TerminalPanel";

type Mode = "editor" | "terminal";

export default function CodeWorkspace() {
  const [mode, setMode] = useState<Mode>("editor");

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-1 border-b border-border px-3 py-1.5">
        <button
          onClick={() => setMode("editor")}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium transition ${mode === "editor" ? "bg-white/[0.08] text-text-primary" : "text-text-dim hover:text-text-muted"}`}
        >
          <Code2 className="h-3.5 w-3.5" /> Editor
        </button>
        <button
          onClick={() => setMode("terminal")}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12px] font-medium transition ${mode === "terminal" ? "bg-white/[0.08] text-text-primary" : "text-text-dim hover:text-text-muted"}`}
        >
          <TerminalIcon className="h-3.5 w-3.5" /> Terminal
        </button>
      </div>
      <div className="min-h-0 flex-1">
        {mode === "editor" ? <CodePanel /> : <TerminalPanel />}
      </div>
    </div>
  );
}
