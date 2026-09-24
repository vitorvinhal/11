"use client";

import { useState, type ReactNode } from "react";
import { Check, Code2, Copy } from "lucide-react";

/**
 * MarkdownLite — renderizador minimalista de Markdown para bolhas de chat.
 * Sem dangerouslySetInnerHTML (XSS-safe: tudo vira React nodes).
 * Suporta: blocos ```fenced``` (com copiar), # headings, listas, blockquote,
 * inline **bold**, *italic*, `code` e [link](url) (somente http/https/relativo).
 */

interface MarkdownLiteProps {
  content: string;
  /** Ação extra no header do bloco de código (ex.: enviar para o Eleven Code). */
  onOpenInCode?: (code: string, language: string, extension: string) => void;
}

function extFor(lang: string): string {
  const l = lang.toLowerCase();
  if (l === "javascript" || l === "js" || l === "jsx") return "js";
  if (l === "typescript" || l === "ts" || l === "tsx") return "ts";
  if (l === "html") return "html";
  if (l === "css") return "css";
  if (l === "python" || l === "py") return "py";
  if (l === "json") return "json";
  if (l === "md" || l === "markdown") return "md";
  return "txt";
}

function safeHref(url: string): string | null {
  const u = url.trim();
  if (/^https?:\/\//i.test(u)) return u;
  if (u.startsWith("/") && !u.startsWith("//")) return u;
  if (u.startsWith("#")) return u;
  return null;
}

/** Inline: **bold**, *italic*, `code`, [texto](url). */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const re = /(\*\*[^*\n]+\*\*|\*[^*\n]+\*|`[^`\n]+`|\[[^\]\n]+\]\([^)\s]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    const key = `${keyPrefix}-i${i++}`;
    if (tok.startsWith("**")) {
      nodes.push(
        <strong key={key} className="font-semibold text-white">
          {tok.slice(2, -2)}
        </strong>,
      );
    } else if (tok.startsWith("`")) {
      nodes.push(
        <code
          key={key}
          className="rounded bg-white/[0.08] px-1.5 py-0.5 font-mono text-[13px] text-[#f0f4ff]"
        >
          {tok.slice(1, -1)}
        </code>,
      );
    } else if (tok.startsWith("[")) {
      const br = tok.indexOf("](");
      const label = tok.slice(1, br);
      const href = safeHref(tok.slice(br + 2, -1));
      if (href) {
        nodes.push(
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-primary/40 underline-offset-2 hover:decoration-primary"
          >
            {label}
          </a>,
        );
      } else {
        nodes.push(tok);
      }
    } else {
      nodes.push(
        <em key={key} className="italic text-white/90">
          {tok.slice(1, -1)}
        </em>,
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Bloco de código com header (lang + ações). */
function CodeBlock({
  lang,
  code,
  onOpenInCode,
}: {
  lang: string;
  code: string;
  onOpenInCode?: MarkdownLiteProps["onOpenInCode"];
}) {
  const [copied, setCopied] = useState(false);
  const ext = extFor(lang);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard indisponível */
    }
  };

  return (
    <div className="my-3 overflow-hidden rounded-xl border border-white/[0.06]">
      <div className="flex items-center justify-between bg-white/[0.04] px-3 py-1.5">
        <span className="text-[10px] uppercase text-text-dim">{lang}</span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={copy}
            className="flex items-center gap-1.5 rounded-md bg-white/[0.06] px-2 py-1 text-[10px] text-text-muted transition hover:bg-white/[0.1] hover:text-text-primary"
            title="Copiar código"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" /> Copiado
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" /> Copiar
              </>
            )}
          </button>
          {onOpenInCode && (
            <button
              onClick={() => onOpenInCode(code, lang, ext)}
              className="flex items-center gap-1.5 rounded-md bg-primary/20 px-2 py-1 text-[10px] text-primary transition hover:bg-primary/30"
            >
              <Code2 className="h-3 w-3" /> Abrir no Code
            </button>
          )}
        </div>
      </div>
      <pre className="overflow-x-auto bg-black/40 p-3 text-[13px] leading-relaxed text-white/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/** Texto simples → parágrafos, headings, listas e blockquotes. */
function renderTextBlock(text: string, keyPrefix: string): ReactNode[] {
  const lines = text.split("\n");
  const out: ReactNode[] = [];
  let listBuf: { ordered: boolean; items: string[] } | null = null;
  let paraBuf: string[] = [];

  const flushPara = (k: string) => {
    if (!paraBuf.length) return;
    const body = paraBuf.join("\n");
    out.push(
      <p key={k} className="my-1.5 whitespace-pre-line first:mt-0 last:mb-0">
        {renderInline(body, k)}
      </p>,
    );
    paraBuf = [];
  };
  const flushList = (k: string) => {
    if (!listBuf) return;
    const { ordered, items } = listBuf;
    const Tag = ordered ? "ol" : "ul";
    out.push(
      <Tag
        key={k}
        className={`my-1.5 space-y-1 ${ordered ? "list-decimal" : "list-disc"} pl-5`}
      >
        {items.map((it, ii) => (
          <li key={`${k}-${ii}`}>{renderInline(it, `${k}-${ii}`)}</li>
        ))}
      </Tag>,
    );
    listBuf = null;
  };

  lines.forEach((raw, idx) => {
    const key = `${keyPrefix}-l${idx}`;
    const line = raw.trimEnd();
    const h = line.match(/^(#{1,3})\s+(.*)$/);
    const li = line.match(/^\s*([-*]|\d+[.)])\s+(.*)$/);
    const bq = line.match(/^>\s?(.*)$/);

    if (h) {
      flushPara(`${key}-p`);
      flushList(`${key}-fl`);
      const level = h[1].length;
      const cls =
        level === 1
          ? "mt-3 mb-1.5 text-lg font-semibold text-white first:mt-0"
          : level === 2
            ? "mt-3 mb-1.5 text-[15px] font-semibold text-white first:mt-0"
            : "mt-2 mb-1 text-[14px] font-semibold text-white/90 first:mt-0";
      out.push(
        <p key={key} className={cls}>
          {renderInline(h[2], key)}
        </p>,
      );
      return;
    }
    if (li) {
      flushPara(`${key}-p`);
      const ordered = /\d/.test(li[1][0]);
      if (listBuf && listBuf.ordered === ordered) {
        listBuf.items.push(li[2]);
      } else {
        flushList(`${key}-fl`);
        listBuf = { ordered, items: [li[2]] };
      }
      return;
    }
    if (bq) {
      flushPara(`${key}-p`);
      flushList(`${key}-fl`);
      out.push(
        <blockquote
          key={key}
          className="my-1.5 border-l-2 border-primary/50 pl-3 text-white/80 italic"
        >
          {renderInline(bq[1], key)}
        </blockquote>,
      );
      return;
    }
    if (!line.trim()) {
      flushPara(`${key}-p`);
      flushList(`${key}-fl`);
      return;
    }
    flushList(`${key}-fl`);
    paraBuf.push(line);
  });
  flushPara(`${keyPrefix}-pend`);
  flushList(`${keyPrefix}-fl`);
  return out;
}

export function MarkdownLite({ content, onOpenInCode }: MarkdownLiteProps) {
  const parts = content.split(/(```[\s\S]*?```)/g);
  return (
    <>
      {parts.map((part, pi) => {
        if (!part) return null;
        const codeMatch = part.match(/^```(\w*)\n?([\s\S]*?)```$/);
        if (codeMatch) {
          return (
            <CodeBlock
              key={`c${pi}`}
              lang={codeMatch[1] || "code"}
              code={codeMatch[2]}
              onOpenInCode={onOpenInCode}
            />
          );
        }
        return <span key={`t${pi}`}>{renderTextBlock(part, `t${pi}`)}</span>;
      })}
    </>
  );
}
