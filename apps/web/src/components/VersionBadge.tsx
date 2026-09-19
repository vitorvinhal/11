"use client";

import { useState, useEffect } from "react";
import { Sparkles, ExternalLink, Download } from "lucide-react";
import { parseVersionPayload, type ParsedVersion } from "../lib/version";

interface VersionInfo extends ParsedVersion {
  apkUrl?: string;
  desktopUrl?: string;
}

export function VersionBadge() {
  const [info, setInfo] = useState<VersionInfo | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/api/version")
      .then((r) => r.json())
      .then((d) => setInfo(parseVersionPayload(d) as VersionInfo))
      .catch(() => {});
  }, []);

  if (!info) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono tracking-wider text-text-dim transition hover:bg-white/[0.06] hover:text-text-muted"
      >
        <Sparkles className="h-2.5 w-2.5 text-primary/60" />v{info.version} ·{" "}
        {info.channel}
      </button>

      {open && (
        <div className="absolute bottom-full left-0 mb-2 w-80 glass-card rounded-xl p-4 z-50 shadow-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-white">
              {info.name}
            </span>
            <span className="text-[10px] text-emerald-400">
              v{info.version}
            </span>
          </div>
          <div className="space-y-1 mb-3">
            {info.changelog.slice(0, 5).map((item, i) => (
              <p key={i} className="text-[11px] text-white/50">
                • {item}
              </p>
            ))}
          </div>
          <div className="flex gap-2">
            {info.apkUrl && (
              <a
                href={info.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-[10px] text-white/70 hover:bg-white/[0.10] transition"
              >
                <Download className="h-3 w-3" /> Android
              </a>
            )}
            {info.desktopUrl && (
              <a
                href={info.desktopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-[10px] text-white/70 hover:bg-white/[0.10] transition"
              >
                <Download className="h-3 w-3" /> Windows
              </a>
            )}
            <a
              href={typeof location !== "undefined" ? location.origin : "/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-[10px] text-white/70 hover:bg-white/[0.10] transition"
            >
              <ExternalLink className="h-3 w-3" /> Web
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
