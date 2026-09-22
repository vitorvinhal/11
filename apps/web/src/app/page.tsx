"use client";

import { useState, useEffect } from "react";
import { AuthGate } from "../components/AuthGate";
import { AppShell } from "../components/AppShell";
import { VersionBadge } from "../components/VersionBadge";
import { DownloadCards } from "../components/DownloadCards";
import { ReleaseNotes } from "../components/ReleaseNotes";
import type { UpdateInfo } from "../lib/update-client";
import { useAuth } from "../lib/auth";
import {
  Sparkles,
  Terminal,
  PanelsTopLeft,
  Wrench,
  BrainCircuit,
  ArrowRight,
  Layers,
  Lock,
} from "lucide-react";

const FEATURES = [
  {
    icon: Terminal,
    title: "Computer Use",
    desc: "Comandos controlados, bridge segura e terminal assistido.",
  },
  {
    icon: PanelsTopLeft,
    title: "Full-Stack",
    desc: "Geração de código web, API, mobile e artefatos.",
  },
  {
    icon: Wrench,
    title: "Testes & Validação",
    desc: "Lint, typecheck e testes gerenciados pelo agente.",
  },
  {
    icon: BrainCircuit,
    title: "Multimodelo",
    desc: "Gateway unificado com alternância dinâmica.",
  },
];

export default function Home() {
  const { user } = useAuth();
  const [started, setStarted] = useState(false);
  const [upd, setUpd] = useState<UpdateInfo | null>(null);

  useEffect(() => {
    fetch("/api/updates", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setUpd(d))
      .catch(() => {});
  }, []);

  if (user) {
    return <AppShell initialNav="conversas" />;
  }

  if (started) {
    return (
      <main className="relative z-10 min-h-screen bg-transparent">
        <AuthGate>
          <div />
        </AuthGate>
      </main>
    );
  }

  return (
    <main className="relative z-10 flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 bg-[#030309]/55" />
      <div className="relative flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm font-medium tracking-[0.28em] text-white">
              ELEVEN
            </span>
          </div>
          <button
            onClick={() => setStarted(true)}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm text-white hover:bg-white/15 transition"
          >
            <Lock className="h-3.5 w-3.5 text-primary" /> Entrar
          </button>
        </header>
        <section className="flex flex-1 flex-col items-center justify-center px-5 pb-12 text-center md:px-6 md:pb-14">
          <div className="anim-fade-up mb-5 flex items-center gap-2 rounded-full bg-white/8 px-4 py-1.5 text-[10px] tracking-wide text-white/80 md:text-[11px]">
            <Layers className="h-3.5 w-3.5 text-primary" /> MENTE ÚNICA ·
            AUTONOMIA TOTAL · MULTIMODELO
          </div>
          <h1 className="anim-fade-up delay-100 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
            <span className="grad-cyan-magenta">11</span>
          </h1>
          <p className="anim-fade-up delay-200 mt-5 max-w-xl text-[15px] leading-relaxed text-white/90 md:mt-6 md:max-w-2xl md:text-[17px]">
            Uma inteligência viva e ilimitada que entende o que você faz, gera
            código full-stack, controla seu computador, cria artefatos e evolui
            com você — no padrão Astra.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="anim-fade-up delay-300 group mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90 md:mt-8"
          >
            Começar agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="anim-fade-up delay-400 mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12 md:gap-4 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl bg-black/45 p-4 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-black/60 md:p-5"
              >
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#7dd3fc]/40 to-[#e879f9]/40">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-base font-semibold text-white">
                  {f.title}
                </div>
                <div className="mt-1.5 text-[13px] leading-relaxed text-white/70">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Baixe o app */}
        {upd && (
          <section className="mx-auto mb-12 w-full max-w-3xl px-6">
            <div className="rounded-2xl border border-white/[0.07] bg-black/40 p-5 backdrop-blur-md md:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-base font-semibold text-white">
                  Baixe o app 11
                </h2>
                <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-mono text-primary">
                  v{upd.version}
                </span>
              </div>
              <DownloadCards downloads={upd.downloads} big />
              {upd.changelog.length > 0 && (
                <div className="mt-5 border-t border-white/[0.06] pt-4">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                    Novidades desta versão
                  </p>
                  <ReleaseNotes
                    version={upd.version}
                    changelog={upd.changelog}
                  />
                </div>
              )}
            </div>
          </section>
        )}

        <footer className="flex flex-col items-center gap-2 px-6 pb-6 text-center text-[11px] text-white/60">
          <span>Isolamento por usuário · RLS · Supabase Auth</span>
          <VersionBadge />
        </footer>
      </div>
    </main>
  );
}
