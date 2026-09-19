"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  Play,
  Square,
  Copy,
  Download,
  Plus,
  FileCode2,
  X,
  Check,
  Loader2,
  Terminal,
  Braces,
  Code2,
  Eye,
} from "lucide-react";
import Editor from "@monaco-editor/react";
import "../lib/monaco-setup";
import { monacoFindOptions } from "../lib/monaco-find-options";
import { MAX_TOKENIZATION_LINE_LENGTH } from "../lib/monaco-languages/monarch-embed-entry-budget";

interface File {
  id: string;
  name: string;
  language: string;
  content: string;
}

interface ConsoleEntry {
  type: "log" | "error" | "warn" | "info" | "result";
  content: string;
  timestamp: number;
}

const SNIPPETS = [
  {
    label: "Fetch API",
    code: `const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');\nconst data = await res.json();\nconsole.log(data);`,
  },
  {
    label: "Array methods",
    code: `const nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log('Dobrados:', doubled);\nconsole.log('Pares:', evens);`,
  },
  {
    label: "Async/Await",
    code: `async function fetchData() {\n  const res = await fetch('https://api.github.com/users/octocat');\n  const user = await res.json();\n  console.log('User:', user.login);\n  console.log('Repos:', user.public_repos);\n}\nfetchData();`,
  },
  {
    label: "DOM manipulation",
    code: `document.body.innerHTML = '<h1 style="color:white;font-family:system-ui">Hello from Eleven Code!</h1>';`,
  },
  {
    label: "Canvas drawing",
    code: `const canvas = document.createElement('canvas');\ncanvas.width = 400;\ncanvas.height = 300;\ndocument.body.appendChild(canvas);\nconst ctx = canvas.getContext('2d');\nconst grad = ctx.createLinearGradient(0, 0, 400, 300);\ngrad.addColorStop(0, '#7dd3fc');\ngrad.addColorStop(1, '#e879f9');\nctx.fillStyle = grad;\nctx.fillRect(0, 0, 400, 300);\nctx.fillStyle = 'white';\nctx.font = 'bold 24px system-ui';\nctx.textAlign = 'center';\nctx.fillText('Eleven Code', 200, 155);`,
  },
  {
    label: "Web Worker",
    code: `const blob = new Blob([\n  \`self.onmessage = (e) => {\n    const result = e.data.reduce((a, b) => a + b, 0);\n    self.postMessage(result);\n  }\`\n], { type: 'application/javascript' });\nconst worker = new Worker(URL.createObjectURL(blob));\nworker.onmessage = (e) => console.log('Soma:', e.data);\nworker.postMessage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);`,
  },
];

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function detectLanguage(name: string): string {
  const ext = name.split(".").pop()?.toLowerCase();
  if (ext === "ts" || ext === "tsx") return "typescript";
  if (ext === "html" || ext === "htm") return "html";
  if (ext === "css") return "css";
  if (ext === "json") return "json";
  if (ext === "vue") return "vue";
  if (ext === "svelte") return "svelte";
  if (ext === "astro") return "astro";
  if (ext === "py" || ext === "python") return "python";
  return "javascript";
}

// Options do editor Monaco portadas do Orca (MonacoEditor.tsx + monaco-find-options.ts).
const MONACO_OPTIONS = {
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  fontSize: 13,
  fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace",
  lineNumbers: "on" as const,
  renderLineHighlight: "line" as const,
  automaticLayout: true,
  tabSize: 2,
  readOnly: false,
  smoothScrolling: true,
  cursorSmoothCaretAnimation: "off" as const,
  padding: { top: 0 },
  find: monacoFindOptions,
  maxTokenizationLineLength: MAX_TOKENIZATION_LINE_LENGTH,
};

export default function CodePanel() {
  const [files, setFiles] = useState<File[]>([
    {
      id: uid(),
      name: "main.js",
      language: "javascript",
      content:
        '// Bem-vindo ao Eleven Code!\n// Escreva JavaScript aqui e clique em Executar\n\nconsole.log("Olá, mundo!");\nconsole.log("Versão:", "1.0.0");\n\nconst soma = (a, b) => a + b;\nconsole.log("2 + 3 =", soma(2, 3));',
    },
  ]);
  const [activeFileId, setActiveFileId] = useState<string>(
    () => files[0]?.id ?? "",
  );
  const [consoleEntries, setConsoleEntries] = useState<ConsoleEntry[]>([]);
  const [running, setRunning] = useState(false);
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showConsole, setShowConsole] = useState(true);
  const [copied, setCopied] = useState(false);
  const consoleRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const activeFile = files.find((f) => f.id === activeFileId);

  // Listen for code generated from chat
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.code) {
        const ext = detail.extension || "js";
        const lang = detectLanguage(`x.${ext}`);
        const newFile: File = {
          id: uid(),
          name: `chat-generated.${ext}`,
          language: lang,
          content: detail.code,
        };
        setFiles((prev) => [...prev, newFile]);
        setActiveFileId(newFile.id);
        setConsoleEntries([
          {
            type: "info",
            content: `Arquivo recebido do chat: chat-generated.${ext}`,
            timestamp: Date.now(),
          },
        ]);
      }
    };
    window.addEventListener("codeGenerated", handler);
    return () => window.removeEventListener("codeGenerated", handler);
  }, []);

  const updateContent = useCallback(
    (content: string) => {
      setFiles((prev) =>
        prev.map((f) => (f.id === activeFileId ? { ...f, content } : f)),
      );
    },
    [activeFileId],
  );

  const addFile = useCallback(() => {
    const name = prompt("Nome do arquivo:", "novo.js");
    if (!name) return;
    const f: File = {
      id: uid(),
      name,
      language: detectLanguage(name),
      content: "",
    };
    setFiles((prev) => [...prev, f]);
    setActiveFileId(f.id);
  }, []);

  const removeFile = useCallback(
    (id: string) => {
      setFiles((prev) => {
        const next = prev.filter((f) => f.id !== id);
        if (next.length === 0) {
          const f: File = {
            id: uid(),
            name: "main.js",
            language: "javascript",
            content: "",
          };
          return [f];
        }
        return next;
      });
      setActiveFileId((prev) => {
        if (prev === id) {
          const remaining = files.filter((f) => f.id !== id);
          return remaining[0]?.id ?? "";
        }
        return prev;
      });
    },
    [files],
  );

  const addConsole = useCallback(
    (type: ConsoleEntry["type"], content: string) => {
      setConsoleEntries((prev) => [
        ...prev,
        { type, content, timestamp: Date.now() },
      ]);
    },
    [],
  );

  const clearConsole = useCallback(() => {
    setConsoleEntries([]);
  }, []);

  const runCode = useCallback(async () => {
    if (!activeFile || running) return;
    setRunning(true);
    setConsoleEntries([]);
    setPreviewHtml(null);
    setShowPreview(false);

    const code = activeFile.content;

    if (activeFile.language === "html") {
      setPreviewHtml(code);
      setShowPreview(true);
      addConsole("info", "HTML renderizado no preview");
      setRunning(false);
      return;
    }

    if (activeFile.language === "css") {
      setPreviewHtml(
        `<style>${code}</style><div style="padding:20px;color:white;font-family:system-ui"><h2>CSS Preview</h2><p>O CSS está sendo aplicado abaixo:</p><div class="preview-target" style="margin-top:10px;padding:20px;border:1px solid #333;border-radius:8px">Conteúdo de exemplo</div></div>`,
      );
      setShowPreview(true);
      addConsole("info", "CSS renderizado no preview");
      setRunning(false);
      return;
    }

    // JS/TS execution via sandboxed iframe
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.sandbox = "allow-scripts";
    document.body.appendChild(iframe);

    const handler = (e: MessageEvent) => {
      if (e.data?.type === "eleven-code-result") {
        const resultLogs = e.data.logs ?? [];
        resultLogs.forEach((l: { type: string; content: string }) => {
          addConsole(l.type as ConsoleEntry["type"], l.content);
        });
        if (resultLogs.length === 0) {
          addConsole("info", "Código executado sem saída");
        }
        document.body.removeChild(iframe);
        window.removeEventListener("message", handler);
        setRunning(false);
      }
    };
    window.addEventListener("message", handler);

    iframe.srcdoc = `<html><body><script>
      const __logs = [];
      console = { log: (...a) => __logs.push({type:'log',content:a.map(x=>typeof x==='object'?JSON.stringify(x,null,2):String(x)).join(' ')}), error: (...a) => __logs.push({type:'error',content:a.map(x=>String(x)).join(' ')}), warn: (...a) => __logs.push({type:'warn',content:a.map(x=>String(x)).join(' ')}), info: (...a) => __logs.push({type:'info',content:a.map(x=>String(x)).join(' ')}) };
      window.onerror=(m,s,l)=>__logs.push({type:'error',content:m+(l?' (linha '+l):'')});
      window.onunhandledrejection=(e)=>__logs.push({type:'error',content:'Promise rejeitada: '+(e.reason?.message??e.reason)});
      (async()=>{try{${code}}catch(e){__logs.push({type:'error',content:e.message})}parent.postMessage({type:'eleven-code-result',logs:__logs},'*')})();
    </script></body></html>`;

    setTimeout(() => {
      try {
        document.body.removeChild(iframe);
      } catch {
        /* already removed */
      }
      window.removeEventListener("message", handler);
      if (running) {
        addConsole("warn", "Execução interrompida (timeout 10s)");
        setRunning(false);
      }
    }, 10000);
  }, [activeFile, running, addConsole]);

  const stopCode = useCallback(() => {
    setRunning(false);
    addConsole("warn", "Execução interrompida pelo usuário");
  }, [addConsole]);

  const copyCode = useCallback(() => {
    if (!activeFile) return;
    navigator.clipboard.writeText(activeFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [activeFile]);

  const downloadCode = useCallback(() => {
    if (!activeFile) return;
    const blob = new Blob([activeFile.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = activeFile.name;
    a.click();
    URL.revokeObjectURL(url);
  }, [activeFile]);

  const loadSnippet = useCallback(
    (code: string) => {
      if (!activeFile) return;
      updateContent(
        activeFile.content ? activeFile.content + "\n\n" + code : code,
      );
    },
    [activeFile, updateContent],
  );

  // Auto-scroll console
  useEffect(() => {
    consoleRef.current?.scrollTo({ top: consoleRef.current.scrollHeight });
  }, [consoleEntries]);

  if (!activeFile) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Code2 className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Eleven Code</h3>
            <p className="text-[10px] text-muted-foreground">
              Editor Monaco + executor de código
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => void runCode()}
            disabled={running}
            className="h-7 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center gap-1.5 transition disabled:opacity-50"
          >
            {running ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <Play className="h-3 w-3" />
            )}
            {running ? "Executando…" : "Executar"}
          </button>
          {running && (
            <button
              onClick={stopCode}
              className="h-7 px-2 rounded-lg bg-red-600/20 text-red-400 text-xs flex items-center gap-1 hover:bg-red-600/30 transition"
            >
              <Square className="h-3 w-3" /> Parar
            </button>
          )}
        </div>
      </div>

      {/* File tabs */}
      <div className="flex items-center gap-1 px-4 pt-2 pb-1 overflow-x-auto border-b border-border">
        {files.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFileId(f.id)}
            className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
              f.id === activeFileId
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            <FileCode2 className="h-3 w-3" />
            {f.name}
            {files.length > 1 && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(f.id);
                }}
                className="ml-0.5 opacity-0 group-hover:opacity-100 hover:text-red-400 transition"
              >
                <X className="h-3 w-3" />
              </span>
            )}
          </button>
        ))}
        <button
          onClick={addFile}
          className="h-6 w-6 grid place-items-center rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition"
          title="Novo arquivo"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex-1 flex min-h-0">
        {/* Editor (Monaco — portado do Orca) */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 relative">
            <Editor
              key={activeFile.id}
              height="100%"
              language={activeFile.language}
              defaultValue={activeFile.content}
              onChange={(value) => updateContent(value ?? "")}
              options={MONACO_OPTIONS}
              theme="vs-dark"
            />
          </div>

          {/* Editor toolbar */}
          <div className="flex items-center gap-2 px-4 py-2 border-t border-border text-[10px] text-muted-foreground">
            <span className="uppercase tracking-wider">
              {activeFile.language}
            </span>
            <span>•</span>
            <span>{activeFile.content.split("\n").length} linhas</span>
            <span>•</span>
            <span>{activeFile.content.length} chars</span>
            <div className="ml-auto flex items-center gap-1">
              <button
                onClick={copyCode}
                className="h-6 px-2 rounded-md hover:bg-muted flex items-center gap-1 transition"
                title="Copiar"
              >
                {copied ? (
                  <Check className="h-3 w-3 text-emerald-400" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
                {copied ? "Copiado" : "Copiar"}
              </button>
              <button
                onClick={downloadCode}
                className="h-6 px-2 rounded-md hover:bg-muted flex items-center gap-1 transition"
                title="Baixar"
              >
                <Download className="h-3 w-3" /> Baixar
              </button>
            </div>
          </div>
        </div>

        {/* Snippets sidebar */}
        <div className="w-48 border-l border-border p-3 overflow-y-auto hidden lg:block">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-medium">
            Snippets
          </div>
          <div className="space-y-1.5">
            {SNIPPETS.map((s) => (
              <button
                key={s.label}
                onClick={() => loadSnippet(s.code)}
                className="w-full text-left px-2.5 py-2 rounded-lg text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition"
              >
                <Braces className="h-3 w-3 inline mr-1.5 opacity-50" />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Console + Preview */}
      <div className="border-t border-border">
        <div className="flex items-center gap-2 px-4 py-1.5 bg-muted/30">
          <button
            onClick={() => setShowConsole(!showConsole)}
            className={`flex items-center gap-1.5 text-xs font-medium transition ${
              showConsole
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Terminal className="h-3 w-3" /> Console
            {consoleEntries.length > 0 && (
              <span className="h-4 min-w-[16px] px-1 rounded-full bg-muted text-[10px] flex items-center justify-center">
                {consoleEntries.length}
              </span>
            )}
          </button>
          {previewHtml && (
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={`flex items-center gap-1.5 text-xs font-medium transition ${
                showPreview
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Eye className="h-3 w-3" /> Preview
            </button>
          )}
          <button
            onClick={clearConsole}
            className="ml-auto text-[10px] text-muted-foreground hover:text-foreground transition"
          >
            Limpar
          </button>
        </div>

        <div className="flex" style={{ height: showPreview ? 200 : 120 }}>
          {showConsole && (
            <div
              ref={consoleRef}
              className="flex-1 overflow-y-auto p-3 font-mono text-xs space-y-1 bg-[#0a0c10]"
            >
              {consoleEntries.length === 0 ? (
                <div className="text-muted-foreground/50 italic">
                  Console vazio — execute o código para ver a saída
                </div>
              ) : (
                consoleEntries.map((entry, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2 ${
                      entry.type === "error"
                        ? "text-red-400"
                        : entry.type === "warn"
                          ? "text-yellow-400"
                          : entry.type === "info"
                            ? "text-blue-400"
                            : "text-green-400"
                    }`}
                  >
                    <span className="opacity-40 select-none shrink-0">
                      {entry.type === "error"
                        ? "✗"
                        : entry.type === "warn"
                          ? "⚠"
                          : entry.type === "info"
                            ? "ℹ"
                            : "›"}
                    </span>
                    <pre className="whitespace-pre-wrap break-all">
                      {entry.content}
                    </pre>
                  </div>
                ))
              )}
            </div>
          )}
          {showPreview && previewHtml && (
            <div
              className={`${showConsole ? "border-l border-border" : ""} flex-1 bg-white`}
            >
              <iframe
                ref={iframeRef}
                srcDoc={previewHtml}
                className="w-full h-full border-0"
                sandbox="allow-scripts"
                title="Preview"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
