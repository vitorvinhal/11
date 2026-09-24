"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowLeft,
  Layers,
  Cpu,
  ShieldCheck,
  Rocket,
  MessageSquare,
  MousePointerClick,
  ScrollText,
  Globe,
  Monitor,
  Smartphone,
  Wifi,
  CheckCircle2,
  GitBranch,
  Zap,
} from "lucide-react";
import { DownloadCards } from "../../components/DownloadCards";
import { ReleaseNotes } from "../../components/ReleaseNotes";
import { fetchUpdates, type UpdateInfo } from "../../lib/update-client";

const SECTIONS = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "dia-a-dia", label: "Dia a dia" },
  { id: "baixar", label: "Baixar apps" },
  { id: "atualizacoes", label: "Atualizações" },
  { id: "evolucao", label: "Evolução" },
];

const STEPS = [
  {
    icon: MessageSquare,
    title: "1. Você conversa",
    desc: "Pergunte ou peça tarefas em linguagem natural — a 11 entende o contexto e o que você quer fazer.",
  },
  {
    icon: Cpu,
    title: "2. A IA pensa e age",
    desc: "Escolhe o melhor modelo (nuvem ou local) e decide se precisa de ferramentas para executar a tarefa.",
  },
  {
    icon: MousePointerClick,
    title: "3. Executa no seu dispositivo",
    desc: "Arquivos, fotos, aplicativos, configurações e tela do PC/celular — com aprovação humana para ações sensíveis.",
  },
  {
    icon: ShieldCheck,
    title: "4. Privacidade em primeiro",
    desc: "Rode modelos locais (Ollama/Zen) sem passar pela nuvem. Seus dados ficam no seu aparelho quando você quiser.",
  },
  {
    icon: ScrollText,
    title: "5. Evolui com você",
    desc: "Memoria persistente e skills: ela lembra de você entre sessões e melhora cada vez que você usa.",
  },
];

const PLATFORMS = [
  {
    icon: Monitor,
    title: "Desktop (Windows)",
    desc: "App nativo com agente de dispositivo completo: arquivos, terminal, aplicativos, captura de tela e IA local no seu PC.",
  },
  {
    icon: Smartphone,
    title: "Mobile (Android)",
    desc: "O agente no seu bolso: fotos, arquivos, apps e mídia do celular, com IA local direto no aparelho.",
  },
  {
    icon: Globe,
    title: "Web (navegador)",
    desc: "Acesse de qualquer lugar sem instalar. Mesma conta, mesmos dados, mesma inteligência.",
  },
];

const EVOLUTION = [
  {
    icon: Zap,
    phase: "Agora",
    items: [
      "Chat multimodal + agente de dispositivo (21 tools)",
      "IA local (Ollama/Zen) nos apps",
      "Downloads e atualizações integrados",
      "Sobre/landing de produto",
    ],
  },
  {
    icon: Rocket,
    phase: "Em breve",
    items: [
      "iOS instalável (sideload pessoal)",
      "Mais skills e plugins da comunidade",
      "Automações agendadas (cron) no dispositivo",
    ],
  },
  {
    icon: GitBranch,
    phase: "Em evolução",
    items: [
      "Memória e aprendizagem contínua",
      "Integrações (Telegram, Discord)",
      "Modo totalmente offline",
    ],
  },
];

export default function AboutPage() {
  const [upd, setUpd] = useState<UpdateInfo | null>(null);

  useEffect(() => {
    fetchUpdates()
      .then((d) => setUpd(d))
      .catch(() => {});
  }, []);

  return (
    <main className="relative z-10 flex min-h-screen flex-col bg-[#05050A]">
      <div className="mx-auto w-full max-w-5xl flex-1 px-5 py-6 md:px-8">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between">
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

        {/* Navegação de âncoras */}
        <nav className="sticky top-0 z-20 mb-8 -mx-1 flex gap-1 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0a0a12]/90 px-2 py-1.5 backdrop-blur no-scrollbar">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 rounded-lg px-3 py-1.5 text-[12px] text-white/60 transition hover:bg-white/[0.06] hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Visão geral */}
        <section id="visao-geral" className="mb-10 scroll-mt-24">
          <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 md:p-8">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
              <Layers className="h-3 w-3" /> O que é o 11
            </span>
            <h1 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
              Um agente de IA pessoal que trabalha no seu aparelho.
            </h1>
            <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-white/70">
              O 11 entende o que você faz, executa tarefas reais no seu
              computador e celular (arquivos, fotos, aplicativos,
              configurações), gera código full-stack e evolui com você. É feito
              para o dia a dia: você conversa, a IA age e o resultado aparece —
              com privacidade (modelos locais) e controle humano nas ações
              sensíveis.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
              <InfoCard
                icon={Wifi}
                title={`Versão ${upd?.version ?? "…"}`}
                desc={`Canal ${upd?.channel ?? "alpha"}, em produção com atualizações automáticas.`}
              />
              <InfoCard
                icon={ShieldCheck}
                title="Privacidade e segurança"
                desc="Isolamento por usuário (RLS), aprovação humana para ações destrutivas e IA local sem nuvem."
              />
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="mb-10 scroll-mt-24">
          <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-white">
            <Cpu className="h-4 w-4 text-primary" /> Como funciona
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition hover:bg-white/[0.04]"
              >
                <s.icon className="mb-3 h-5 w-5 text-primary" />
                <p className="text-[13px] font-semibold text-white">
                  {s.title}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-white/55">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dia a dia */}
        <section id="dia-a-dia" className="mb-10 scroll-mt-24">
          <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-white">
            <Smartphone className="h-4 w-4 text-primary" /> No seu dia a dia
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {PLATFORMS.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
              >
                <p.icon className="mb-3 h-5 w-5 text-primary" />
                <p className="text-[13px] font-semibold text-white">
                  {p.title}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-white/55">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
            <p className="mb-2 text-[13px] font-semibold text-white">
              Funcionalidades principais
            </p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {[
                "Chat multimodal (nuvem e local)",
                "Agente de dispositivo (21 ferramentas)",
                "Eleven Code & terminal",
                "Memória persistente",
                "Skills e plugins",
                "Atualizações automáticas",
                "IA local (Ollama/Zen)",
                "Aprovação humana em ações sensíveis",
              ].map((f) => (
                <p
                  key={f}
                  className="flex items-center gap-2 text-[12px] text-white/60"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  {f}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Baixar */}
        <section id="baixar" className="mb-10 scroll-mt-24">
          <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-white">
            <DownloadIconSolid /> Baixar os apps
          </h2>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
            {upd ? (
              <>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="text-[13px] font-medium text-white">
                    Versão atual {upd.version}
                  </span>
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-mono text-primary">
                    canal {upd.channel}
                  </span>
                </div>
                <DownloadCards downloads={upd.downloads} big />
                <p className="mt-4 text-[11px] leading-relaxed text-white/40">
                  iOS: o IPA é gerado no GitHub Actions (sem assinatura) — para
                  instalação pessoal no iPhone, use Sideloadly/AltStore com sua
                  Apple ID (revalidar a cada 7 dias). Windows: baixe o
                  instalador .exe ou .msi. Android: baixe o APK e instale
                  diretamente.
                </p>
              </>
            ) : (
              <p className="text-[12px] text-white/40">
                Carregando opções de download…
              </p>
            )}
          </div>
        </section>

        {/* Atualizações */}
        <section id="atualizacoes" className="mb-10 scroll-mt-24">
          <h2 className="mb-2 flex items-center gap-2 text-base font-semibold text-white">
            <Rocket className="h-4 w-4 text-primary" /> Atualizações
          </h2>
          <p className="mb-4 text-[12px] leading-relaxed text-white/50">
            Você recebe uma notificação a cada versão nova e baixa a atualização
            direto do app (Perfil → Atualizações). Abaixo, o que mudou na versão
            atual — em linguagem simples.
          </p>
          {upd && (
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <ReleaseNotes version={upd.version} changelog={upd.changelog} />
            </div>
          )}
        </section>

        {/* Evolução */}
        <section id="evolucao" className="mb-10 scroll-mt-24">
          <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-white">
            <GitBranch className="h-4 w-4 text-primary" /> Processo de evolução
          </h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {EVOLUTION.map((e) => (
              <div
                key={e.phase}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
              >
                <p className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-white">
                  <e.icon className="h-4 w-4 text-primary" /> {e.phase}
                </p>
                <ul className="space-y-1.5">
                  {e.items.map((i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[12px] leading-relaxed text-white/60"
                    >
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-white/30" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-primary/25 bg-primary/10 p-6 text-center md:p-8">
          <p className="text-base font-semibold text-white">Comece agora</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Entrar no 11
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-4">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <div>
        <p className="text-[13px] font-medium text-white">{title}</p>
        <p className="mt-0.5 text-[12px] leading-relaxed text-white/50">
          {desc}
        </p>
      </div>
    </div>
  );
}

function DownloadIconSolid() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
