"use client";

/**
 * DownloadCards — cards de download da versão atual (Desktop, Android, iOS).
 * Usado na landing e no Perfil → Atualizações.
 */

import {
  Monitor,
  Smartphone,
  Apple,
  Download,
  type LucideIcon,
} from "lucide-react";
import type { UpdateDownloads } from "../lib/update-client";

interface Card {
  key: string;
  label: string;
  sub: string;
  url: string | null;
  icon: LucideIcon;
  hint?: string;
}

export function DownloadCards({
  downloads,
  big,
}: {
  downloads: UpdateDownloads | null;
  big?: boolean;
}) {
  if (!downloads) return null;

  const cards: Card[] = [
    {
      key: "desktop",
      label: "Windows",
      sub: "Instalador .exe",
      url: downloads.desktop,
      icon: Monitor,
    },
    {
      key: "android",
      label: "Android",
      sub: "APK · instala direto",
      url: downloads.android,
      icon: Smartphone,
    },
    {
      key: "ios",
      label: "iOS",
      sub: "IPA · Sideloadly/AltStore",
      url: downloads.ios,
      icon: Apple,
      hint: "Gerado no GitHub Actions (uso pessoal)",
    },
  ];

  return (
    <div
      className={`grid gap-3 ${big ? "sm:grid-cols-3" : "grid-cols-3"} w-full`}
    >
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div
            key={c.key}
            className={`rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 ${
              big ? "flex flex-col gap-2" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/15">
                <Icon className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-white/90">
                  {c.label}
                </p>
                <p className="truncate text-[10px] text-white/40">{c.sub}</p>
              </div>
            </div>
            {c.hint && (
              <p className="mt-1 text-[9px] leading-snug text-white/30">
                {c.hint}
              </p>
            )}
            {c.url ? (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary/20 px-2 py-1.5 text-[11px] font-medium text-primary hover:bg-primary/30 transition"
              >
                <Download className="h-3 w-3" /> Baixar
              </a>
            ) : (
              <div className="mt-2 w-full rounded-lg bg-white/[0.03] px-2 py-1.5 text-center text-[10px] text-white/25">
                Em breve
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
