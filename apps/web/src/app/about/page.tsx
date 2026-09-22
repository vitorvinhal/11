"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowLeft,
  Terminal,
  PanelsTopLeft,
  Wrench,
  BrainCircuit,
  MessageSquare,
  Smartphone,
  Monitor,
  Globe,
  Blocks,
  ScrollText,
  Cpu,
  Wifi,
  Rocket,
  CheckCircle2,
  CircleDashed,
  MousePointerClick,
} from "lucide-react";
import { DownloadCards } from "../../components/DownloadCards";
import { ReleaseNotes } from "../../components/ReleaseNotes";
import type { UpdateInfo } from "../../lib/update-client";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Chat multimodal",
    desc: "Converse com a 11 usando vários provedores: 9Router, Gemini, Anthropic — ou modelos locais (Ollama/Zen) direto do seu aparelho.",
  },
  {
    icon: Terminal,
    title: "Eleven Code & Coder",
    desc: "Editor de código com Inteligência + terminal integrado para desenvolver full-stack (web, API, mobile) com a ajuda da IA.",
  },
  {
    icon: MousePointerClick,
    title: "Agente de Dispositivo",
    desc: "Controle real do seu PC e celular: arquivos, fotos, aplicativos, configurações, tela e estado do sistema — com aprovação humana para ações sensíveis.",
  },
  {
    icon: PanelsTopLeft,
    title: "Computer Use",
    desc: "Comandos controlados, bridge segura, terminal assistido e captura de tela no seu computador.",
  },
  {
    icon: ScrollText,
    title: "Memória persistente",
    desc: "A 11 lembra de você entre sessões e guarda aprendizados para conversar cada vez melhor.",
  },
  {
    icon: Blocks,
    title: "Skills & Plugins",
    desc: "Habilidades instáveis e plugins ampliam o que o agente consegue fazer — inclusive skills da comunidade.",
  },
  {
    icon: Cpu,
    title: "IA local (Ollama/Zen)",
    desc: "Rode modelos no próprio aparelho, sem depender da nuvem. Baixe modelos direto no painel.",
  },
  {
    icon: Wrench,
    title: "Testes & Validação",
    desc: "Lint, testes e build gerenciados pelo agente dentro do próprio projeto.",
  },
  {
    icon: Rocket,
    title: "Atualizações integradas",
    desc: "A cada nova versão você recebe a notificação e baixa a atualização na mesma tela — web, desktop e mobile.",
  },
];

const STATUS = [
  {
    label: "Plataformas",
    value: "Web · Desktop (Windows) · Android · iOS (em breve)",
  },
  {
    label: "IA Local",
    value: "Ollama e APIs OpenAI-compatíveis funcionando nos apps",
  },
  {
    label: "Agente de dispositivo",
    value:
      "21 ferramentas (arquivos, mídia, apps, configurações, tela, sistema)",
  },
  { label: "Banco e conta", value: "Supabase (Auth + RLS por usuário)" },
];

export default function AboutPage() {
  const [upd, setUpd] = useState<UpdateInfo | null>(null);

  useEffect(() => {
    fetch("/api/updates", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setUpd(d))
      .catch(() => {});
  }, []);

  return (
    <main className="relative z-10 flex min-h-screen flex-col bg-[#05050A]">
      <div className="mx-auto w-full max-w-4xl flex-1 px-5 py-6 md:px-8">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs font-medium tracking-[0.28em] text-white/80">
              ELEVEN — SOBRE
            </span>
          </div>
        </header>

        {/* Hero */}
        <section className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 md:p-8">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            O projeto 11
          </span>
          <h1 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
            Uma inteligência viva que trabalha com você, no seu aparelho.
          </h1>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-white/70">
            O <strong className="text-white/90">11</strong> é um agente de IA
            pessoal construído para entender o que você faz, executar tarefas
            reais no seu computador e celular (arquivos, aplicativos,
            configurações), gerar código full-stack e evoluir com você no dia a
            dia — sempre com foco em privacidade, permitindo rodar modelos
            locais sem passar pela nuvem.
          </p>
        </section>

        {/* Estado atual */}
        <section className="mt-6">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
            <CircleDashed className="h-4 w-4 text-primary" /> Estado atual do
            projeto
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <Rocket className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-[13px] font-medium text-white">
                  Versão {upd ? upd.version : "…"}
                </p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-white/50">
                  Em produção, com atualizações automáticas. Canal:{" "}
                  {upd?.channel ?? "alpha"}.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <div>
                <p className="text-[13px] font-medium text-white">No ar</p>
                <p className="mt-0.5 text-[12px] leading-relaxed text-white/50">
                  Web, desktop e Android funcionando. iOS em build (sideload
                  pessoal).
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {STATUS.map((s) => (
                <li key={s.label} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  <span className="text-[12px] text-white/60">
                    <strong className="text-white/85">{s.label}:</strong>{" "}
                    {s.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Apps */}
        <section className="mt-6">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
            <Smartphone className="h-4 w-4 text-primary" /> Use no dia a dia
          </h2>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
            {upd ? (
              <DownloadCards downloads={upd.downloads} big />
            ) : (
              <p className="text-[12px] text-white/40">
                Carregando opções de download…
              </p>
            )}
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
              <AppTile
                icon={Monitor}
                title="Desktop (Windows)"
                desc="App nativo com controle total do PC e IA local."
              />
              <AppTile
                icon={Smartphone}
                title="Mobile (Android)"
                desc="Agente no bolso: arquivos, fotos e apps do celular."
              />
              <AppTile
                icon={Globe}
                title="Web (navegador)"
                desc="Acesse de qualquer lugar, sem instalar nada."
              />
            </div>
          </div>
        </section>

        {/* Funcionalidades */}
        <section className="mt-6">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
            <BrainCircuit className="h-4 w-4 text-primary" /> Funcionalidades
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:bg-white/[0.04]"
              >
                <f.icon className="mb-3 h-5 w-5 text-primary" />
                <p className="text-[13px] font-semibold text-white">
                  {f.title}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-white/55">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Novidades */}
        {upd && upd.changelog.length > 0 && (
          <section className="mt-6">
            <h2 className="mb-3 text-sm font-semibold text-white">
              Novidades da versão atual
            </h2>
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <ReleaseNotes version={upd.version} changelog={upd.changelog} />
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-8 rounded-2xl border border-primary/25 bg-primary/10 p-6 text-center md:p-8">
          <p className="text-base font-semibold text-white">
            Pronto para começar?
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Entrar no 11
            </Link>
            {upd?.downloads.desktop && (
              <a
                href={upd.downloads.desktop}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2.5 text-sm text-white transition hover:bg-white/20"
              >
                Baixar desktop
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function AppTile({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl bg-white/[0.03] p-4">
      <Icon className="mb-2 h-4 w-4 text-white/60" />
      <p className="text-[13px] font-medium text-white">{title}</p>
      <p className="mt-0.5 text-[11px] leading-relaxed text-white/45">{desc}</p>
    </div>
  );
}
