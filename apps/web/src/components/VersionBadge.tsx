"use client";

import { useState, useEffect } from "react";
import { Sparkles, ExternalLink } from "lucide-react";
import { ReleaseNotes } from "./ReleaseNotes";
import { DownloadCards } from "./DownloadCards";
import { fetchUpdates, type UpdateInfo } from "../lib/update-client";

export function VersionBadge() {
  const [info, setInfo] = useState<UpdateInfo | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchUpdates()
      .then((d) => setInfo(d))
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
        <div className="absolute bottom-full left-0 mb-2 z-50 max-h-[72vh] w-[300px] overflow-y-auto rounded-xl glass-card p-4 shadow-2xl">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="max-w-[70%] truncate text-xs font-semibold text-white">
              {info.name}
            </span>
            <span className="shrink-0 text-[10px] text-emerald-400">
              v{info.version}
            </span>
          </div>

          <div className="mb-3">
            <DownloadCards downloads={info.downloads} />
          </div>

          <div className="mb-3">
            <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-white/40">
              Novidades
            </p>
            <ReleaseNotes
              version={info.version}
              changelog={info.changelog}
              compact
            />
          </div>

          <a
            href={typeof location !== "undefined" ? location.origin : "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-[10px] text-white/70 hover:bg-white/[0.10] transition"
          >
            <ExternalLink className="h-3 w-3" /> Abrir versão web
          </a>
        </div>
      )}
    </div>
  );
}
