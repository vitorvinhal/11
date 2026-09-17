export interface SkillCatalogItem {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  author?: string;
  popular?: boolean;
}

export const SKILL_CATALOG: SkillCatalogItem[] = [
  // ═══════════════════════════════════════════════════════════════
  // COMMUNITY SKILLS (local)
  // ═══════════════════════════════════════════════════════════════
  { id: 'code-ultrareview', name: 'Code Ultrareview', description: 'Revisão de código completa em 8 eixos — Corretitude, Simplificação, Testes, Documentação, Estilo, Intenção, Design/API, Performance.', category: 'Código', icon: '🔍', author: 'Community', popular: true },
  { id: 'qa-testing-playbook', name: 'QA Testing Playbook', description: 'Playbook de testes de segurança, concorrência, resiliência offline/rede e performance para qualquer sistema.', category: 'Código', icon: '🧪', author: 'Community', popular: true },
  { id: 'data-visualization', name: 'Data Visualization', description: 'Visualização de dados, gráficos, tabelas e dashboards interativos com Chart.js, D3 e afins.', category: 'UI/Design', icon: '📊', author: 'Community', popular: true },
  { id: 'release-readiness', name: 'Release Readiness', description: 'Workflow de preparação de release — diagnóstico, backup, limpeza, checklist pré-deploy e relatório.', category: 'Deploy', icon: '🚀', author: 'Community', popular: true },
  { id: 'accessibility-audit', name: 'Accessibility Audit', description: 'Auditoria de acessibilidade — contraste, navegação por teclado, leitores de tela, foco, aria.', category: 'UI/Design', icon: '♿', author: 'Community' },
  { id: 'brainstorming', name: 'Brainstorming', description: 'Sessão de brainstorming estruturada com visual companion e review de spec documents.', category: 'Conhecimento', icon: '💡', author: 'Community' },
  { id: 'brand-guidelines', name: 'Brand Guidelines', description: 'Criação e aplicação de diretrizes de marca — identidade visual, paleta, tipografia.', category: 'Design', icon: '🏷️', author: 'Community' },
  { id: 'canvas-design', name: 'Canvas Design', description: 'Design em canvas com fonts customizadas e rendering capabilities.', category: 'UI/Design', icon: '🖼️', author: 'Community' },
  { id: 'claude-api', name: 'Claude API', description: 'Integração com a API do Claude — Python, TypeScript, Go, Java, Ruby, C#, PHP, cURL.', category: 'LLM', icon: '🤖', author: 'Community' },
  { id: 'claude-md', name: 'CLAUDE.md', description: 'Cria e otimiza arquivos CLAUDE.md de memória para projetos Claude Code.', category: 'Agentes', icon: '📝', author: 'Community' },
  { id: 'composition-patterns', name: 'Composition Patterns', description: 'Padrões de composição com rules, AGENTS.md e metadata para desenvolvimento estruturado.', category: 'Frameworks', icon: '🧩', author: 'Community' },
  { id: 'design-studio', name: 'Design Studio', description: 'Studio de design com materiais de referência para criar e iterar designs.', category: 'Design', icon: '🎨', author: 'Community' },
  { id: 'design-system', name: 'Design System', description: 'Governance de DESIGN.md — tokens de design YAML, padrões Google, Tailwind/DTCG.', category: 'Design', icon: '🎨', author: 'Community' },
  { id: 'destructive-ops', name: 'Destructive Operations Safety', description: 'Regras obrigatórias antes de operações que apagam, sobrescrevem ou movem em lote.', category: 'Git', icon: '⚠️', author: 'Community' },
  { id: 'docx', name: 'DOCX', description: 'Geração e manipulação de documentos Word com scripts.', category: 'Documentação', icon: '📄', author: 'Community' },
  { id: 'feature-flags', name: 'Feature Flags', description: 'Rollout gradual e features escondidas até prontas. Reversão instantânea.', category: 'Deploy', icon: '🚩', author: 'Community' },
  { id: 'fn-dash', name: 'FN Dash', description: 'Sistema FN Dash — loja de roupas, despesas, agência digital, loterias.', category: 'Customizadas', icon: '📊', author: 'MazyOS' },
  { id: 'fndash-redesign', name: 'FN Dash Redesign', description: 'Redesign visual do FinDash — novo design system, micro-interações.', category: 'Customizadas', icon: '🔄', author: 'MazyOS' },
  { id: 'frontend-design', name: 'Frontend Design', description: 'Princípios, padrões e melhores práticas de design frontend para web.', category: 'UI/Design', icon: '🖥️', author: 'Community' },
  { id: 'git-repo-hygiene', name: 'Git Repo Hygiene', description: 'Mantém repositórios Git limpos — .gitignore, branches órfãs, commits sujos.', category: 'Git', icon: '🧹', author: 'Community' },
  { id: 'internal-comms', name: 'Internal Comms', description: 'Templates de comunicação interna para mensagens de equipe.', category: 'Comunicação', icon: '💬', author: 'Community' },
  { id: 'mcp-builder', name: 'MCP Builder', description: 'Construção de MCPs (Model Context Protocol) com materiais de referência.', category: 'Agentes', icon: '🔧', author: 'Community' },
  { id: 'nextjs-tailwind-shadcn', name: 'Next.js + Tailwind + shadcn', description: 'Padrões para Next.js App Router + Tailwind CSS + shadcn/ui.', category: 'Frameworks', icon: '⚡', author: 'Community' },
  { id: 'observability-setup', name: 'Observability Setup', description: 'Instrumenta qualquer projeto com logging estruturado, captura de erros e alertas.', category: 'Infraestrutura', icon: '📡', author: 'Community' },
  { id: 'password-strength-meter', name: 'Password Strength Meter', description: 'Componente React + TypeScript que exibe a força da senha em tempo real.', category: 'Código', icon: '🔐', author: 'Community' },
  { id: 'pdf', name: 'PDF', description: 'Geração de PDFs, formulários e manipulação de documentos.', category: 'Documentação', icon: '📕', author: 'Community' },
  { id: 'playwright-cli', name: 'Playwright CLI', description: 'Automação de interações com browser, testes web e Playwright.', category: 'Automação', icon: '🎭', author: 'Community' },
  { id: 'pptx', name: 'PPTX', description: 'Geração e manipulação de apresentações PowerPoint com scripts.', category: 'Documentação', icon: '📊', author: 'Community' },
  { id: 'react-native-skills', name: 'React Native', description: 'Padrões de desenvolvimento React Native com rules e AGENTS.md.', category: 'Frameworks', icon: '📱', author: 'Community' },
  { id: 'requesting-code-review', name: 'Requesting Code Review', description: 'Prompts e padrões para solicitar reviews de código eficazes.', category: 'Código', icon: '👀', author: 'Community' },
  { id: 'responsive-sidebar', name: 'Responsive Sidebar', description: 'Navegação lateral responsiva que se transforma em bottom nav no mobile.', category: 'UI/Design', icon: '📱', author: 'Community' },
  { id: 'safe-code-cleanup', name: 'Safe Code Cleanup', description: 'Limpeza segura de código — classifica warnings antes de tocar em qualquer linha.', category: 'Código', icon: '🧹', author: 'Community' },
  { id: 'schema-migrations', name: 'Schema Migrations', description: 'Mudanças de schema versionadas e retrocompatíveis para qualquer projeto.', category: 'Infraestrutura', icon: '🗃️', author: 'Community' },
  { id: 'secrets-audit', name: 'Secrets Audit', description: 'Auditoria de segredos — levanta onde segredos são guardados e garante proteção.', category: 'Infraestrutura', icon: '🔑', author: 'Community' },
  { id: 'site-builder', name: 'Site Builder', description: 'Padrões de construção de sites e landing pages.', category: 'UI/Design', icon: '🏗️', author: 'Community' },
  { id: 'skill-creator', name: 'Skill Creator', description: 'Cria novas skills de agente com evaluation viewer, scripts e referências.', category: 'Agentes', icon: '✨', author: 'Community' },
  { id: 'skills-hygiene', name: 'Skills Library Hygiene', description: 'Diagnóstica e corrige redundância na pasta de skills.', category: 'Agentes', icon: '📁', author: 'Community' },
  { id: 'slack-gif-creator', name: 'Slack GIF Creator', description: 'Cria GIFs animados para Slack com Python e processamento de imagens.', category: 'Mídia', icon: '🎞️', author: 'Community' },
  { id: 'subagent-dev', name: 'Subagent-Driven Development', description: 'Workflow de desenvolvimento com subagentes — implementer, reviewer, re-review.', category: 'Agentes', icon: '🤖', author: 'Community' },
  { id: 'supabase', name: 'Supabase', description: 'Padrões de integração Supabase — Auth, RLS, Edge Functions, Storage.', category: 'Infraestrutura', icon: '⚡', author: 'Community' },
  { id: 'supabase-postgres', name: 'Supabase PostgreSQL Best Practices', description: 'Melhores práticas PostgreSQL para Supabase — queries, indexação, performance.', category: 'Infraestrutura', icon: '🐘', author: 'Community' },
  { id: 'systematic-debugging', name: 'Systematic Debugging', description: 'Metodologia de debug sistemático — root-cause tracing, defense-in-depth.', category: 'Código', icon: '🔬', author: 'Community' },
  { id: 'test-debug-toolkit', name: 'Test & Debug Toolkit', description: 'Coleção de prompts e workflows para testes, debugs e performance.', category: 'Código', icon: '🛠️', author: 'Community' },
  { id: 'test-driven-development', name: 'Test-Driven Development', description: 'TDD — ciclo RED-GREEN-REFACTOR aplicado a qualquer linguagem.', category: 'Código', icon: '✅', author: 'Community' },
  { id: 'theme-factory', name: 'Theme Factory', description: 'Criação e gestão de temas com showcase gallery e ferramentas.', category: 'Design', icon: '🎭', author: 'Community' },
  { id: 'using-superpowers', name: 'Using Superpowers', description: 'Referências para usar superpoderes e capacidades avançadas do agente.', category: 'Agentes', icon: '⚡', author: 'Community' },
  { id: 'vercel-optimize', name: 'Vercel Optimize', description: 'Otimização de deploy na Vercel — ISR, caching, edge functions.', category: 'Deploy', icon: '▲', author: 'Community' },
  { id: 'web-artifacts-builder', name: 'Web Artifacts Builder', description: 'Construção de artefatos web — HTML standalone, componentes interativos.', category: 'Código', icon: '🌐', author: 'Community' },
  { id: 'webapp-testing', name: 'Web App Testing', description: 'Testes de web apps com exemplos, scripts e cobertura completa.', category: 'Código', icon: '🧪', author: 'Community' },
  { id: 'write-clear-readme', name: 'Write Clear README', description: 'Autora, audita ou polir READMEs — clareza, estrutura e concisão.', category: 'Documentação', icon: '📖', author: 'Community' },
  { id: 'writing-plans', name: 'Writing Plans', description: 'Criação de planos de implementação com prompts estruturados.', category: 'Documentação', icon: '📋', author: 'Community' },
  { id: 'writing-skills', name: 'Writing Skills', description: 'Melhores práticas para escrever skills — persuasão, Graphviz, Anthropic.', category: 'Agentes', icon: '✍️', author: 'Community' },
  { id: 'xlsx', name: 'XLSX', description: 'Geração e manipulação de planilhas Excel com scripts.', category: 'Documentação', icon: '📗', author: 'Community' },
  { id: 'plano-milionario', name: 'Plano Milionário Debug', description: 'Debug e testes especializados para o sistema Plano Milionário.', category: 'Customizadas', icon: '🐛', author: 'MazyOS' },
  { id: 'debug-test-hub', name: 'Debug & Test Hub', description: 'Framework completo de debugging e testing — relatórios, testes, identificação de issues.', category: 'Código', icon: '🐛', author: 'Community' },
  { id: 'find-skills', name: 'Find Skills', description: 'Descobre e instala skills de agentes do ecossistema aberto.', category: 'Agentes', icon: '🔍', author: 'Community' },
  { id: 'impeccable', name: 'Impeccable', description: 'Design, redesign, critique, audit, polish de interfaces frontend.', category: 'Design', icon: '💎', author: 'Community' },
  { id: 'search-registry', name: 'Search Registry Items', description: 'Encontra itens do shadcn registry por keyword para instalar.', category: 'UI/Design', icon: '🔎', author: 'Community' },
  { id: 'web-guidelines', name: 'Web Interface Guidelines', description: 'Diretrizes para construir, revisar ou polir qualquer interface web.', category: 'UI/Design', icon: '🌐', author: 'Community' },

  // ═══════════════════════════════════════════════════════════════
  // MAZYOS SKILLS
  // ═══════════════════════════════════════════════════════════════
  { id: 'mazyos-abrir', name: 'Abrir Sessão', description: 'Abre sessão de trabalho carregando memória do negócio e devolve resumo.', category: 'Agentes', icon: '📂', author: 'MazyOS' },
  { id: 'mazyos-analisar', name: 'Analisar Dados', description: 'Analisa arquivos de dados (CSV, Excel, JSON) e gera resumo executivo.', category: 'Conhecimento', icon: '📈', author: 'MazyOS' },
  { id: 'mazyos-google-ads', name: 'Anúncio Google', description: 'Cria campanha completa do Google Ads a partir de briefing ou pesquisa SEO.', category: 'Automação', icon: '📢', author: 'MazyOS' },
  { id: 'mazyos-aprovar', name: 'Aprovar Post', description: 'Aprova e publica post da fila — draft→published, commit, Instagram/Facebook.', category: 'Social', icon: '✅', author: 'MazyOS' },
  { id: 'mazyos-atualizar', name: 'Atualizar Contexto', description: 'Varre projeto e atualiza arquivos de contexto desatualizados.', category: 'Agentes', icon: '🔄', author: 'MazyOS' },
  { id: 'mazyos-carrossel', name: 'Carrossel', description: 'Cria carrosséis pra Instagram, TikTok, LinkedIn com identidade visual.', category: 'Social', icon: '🎠', author: 'MazyOS' },
  { id: 'mazyos-email', name: 'Email Profissional', description: 'Rascunha emails profissionais calibrados ao destinatário.', category: 'Comunicação', icon: '📧', author: 'MazyOS' },
  { id: 'mazyos-instalar', name: 'Instalar MazyOS', description: 'Instala MazyOS no negócio — entrevista, configuração, deploy.', category: 'Agentes', icon: '⚙️', author: 'MazyOS' },
  { id: 'mazyos-rotinas', name: 'Mapear Rotinas', description: 'Mapeia tarefas repetitivas e gera skills personalizadas.', category: 'Automação', icon: '🗺️', author: 'MazyOS' },
  { id: 'mazyos-novo', name: 'Novo Projeto', description: 'Cria pasta de projeto nova com CLAUDE.md dedicado.', category: 'Agentes', icon: '📁', author: 'MazyOS' },
  { id: 'mazyos-publicar', name: 'Publicar Tema', description: 'Orquestra conteúdo SEO + redes sociais a partir de um tema.', category: 'Social', icon: '📰', author: 'MazyOS' },
  { id: 'mazyos-relatorio', name: 'Relatório Ads', description: 'Relatório semanal de performance de anúncios pagos.', category: 'Automação', icon: '📋', author: 'MazyOS' },
  { id: 'mazyos-avaliacoes', name: 'Responder Avaliações', description: 'Respostas curtas e humanas para avaliações do Google.', category: 'Social', icon: '💬', author: 'MazyOS' },
  { id: 'mazyos-salvar', name: 'Salvar no GitHub', description: 'Commit + push no GitHub. Configura repo remoto na primeira vez.', category: 'Git', icon: '💾', author: 'MazyOS' },
  { id: 'mazyos-seo', name: 'SEO Completo', description: 'Fluxo de SEO, GEO e Google Ads em 8 passos.', category: 'Automação', icon: '🔎', author: 'MazyOS' },

  // ═══════════════════════════════════════════════════════════════
  // INFERENCE.SH — TOOLS
  // ═══════════════════════════════════════════════════════════════
  { id: 'inf-agent-tools', name: 'Agent Tools', description: 'Roda apps de IA via inference.sh — imagem, vídeo, LLMs, busca, 3D, Twitter.', category: 'Automação', icon: '🛠️', author: 'Inference.sh' },
  { id: 'inf-cli', name: 'Inference.sh CLI', description: 'CLI para inference.sh — geração de imagem, vídeo, LLMs, busca.', category: 'Automação', icon: '⚡', author: 'Inference.sh' },

  // ═══════════════════════════════════════════════════════════════
  // INFERENCE.SH — AUDIO
  // ═══════════════════════════════════════════════════════════════
  { id: 'inf-ai-music', name: 'AI Music Generation', description: 'Gera música com ElevenLabs, Diffrythm, Tencent Song Generation.', category: 'Áudio', icon: '🎵', author: 'Inference.sh', popular: true },
  { id: 'inf-voice-cloning', name: 'AI Voice Cloning', description: 'Geração de voz, TTS e síntese de voz com múltiplos modelos.', category: 'Áudio', icon: '🎤', author: 'Inference.sh', popular: true },
  { id: 'inf-dialogue-audio', name: 'Dialogue Audio', description: 'Áudio multi-falante com Fish Audio S2.1 Pro, controle de emoção.', category: 'Áudio', icon: '🗣️', author: 'Fish Audio' },
  { id: 'inf-elevenlabs-dialogue', name: 'ElevenLabs Dialogue', description: 'Diálogo multi-falante com vozes diferentes em um único áudio.', category: 'Áudio', icon: '🗣️', author: 'Inference.sh' },
  { id: 'inf-dubbing', name: 'ElevenLabs Dubbing', description: 'Dublagem automática — traduz e dubla áudio/vídeo em 29 idiomas.', category: 'Áudio', icon: '🌍', author: 'Inference.sh' },
  { id: 'inf-elevenlabs-music', name: 'ElevenLabs Music', description: 'Geração de música original a partir de prompts de texto, até 10 min.', category: 'Áudio', icon: '🎶', author: 'Inference.sh' },
  { id: 'inf-sound-effects', name: 'ElevenLabs Sound Effects', description: 'Gera efeitos sonoros de IA a partir de descrições de texto.', category: 'Áudio', icon: '🔊', author: 'Inference.sh' },
  { id: 'inf-stt', name: 'ElevenLabs STT', description: 'Speech-to-text com Scribe — 98%+ acurácia, 90+ idiomas.', category: 'Áudio', icon: '📝', author: 'Inference.sh' },
  { id: 'inf-fish-audio-tts', name: 'Fish Audio TTS', description: 'Text-to-speech com vozes premium, 80+ idiomas, latência ~100ms.', category: 'Áudio', icon: '🐟', author: 'Fish Audio', popular: true },
  { id: 'inf-voice-changer', name: 'Voice Changer', description: 'Transforma qualquer voz em outra preservando conteúdo e emoção.', category: 'Áudio', icon: '🔀', author: 'Inference.sh' },
  { id: 'inf-voice-isolator', name: 'Voice Isolator', description: 'Remove ruído de fundo e isola vocais de áudio.', category: 'Áudio', icon: '🔇', author: 'Inference.sh' },
  { id: 'inf-speech-to-text', name: 'Speech-to-Text', description: 'Transcreve áudio para texto com Scribe e Whisper.', category: 'Áudio', icon: '📋', author: 'Inference.sh' },
  { id: 'inf-tts', name: 'Text-to-Speech', description: 'Converte texto em fala natural — Fish Audio, Inworld, DIA, Kokoro.', category: 'Áudio', icon: '🔊', author: 'Inference.sh' },

  // ═══════════════════════════════════════════════════════════════
  // INFERENCE.SH — IMAGE
  // ═══════════════════════════════════════════════════════════════
  { id: 'inf-ai-image', name: 'AI Image Generation', description: 'Gera imagens com GPT-Image-2, FLUX, Gemini, Grok, 50+ modelos.', category: 'Imagem', icon: '🖼️', author: 'Inference.sh', popular: true },
  { id: 'inf-bg-removal', name: 'Background Removal', description: 'Remove fundo de imagens com BiRefNet para fotos de produto e retratos.', category: 'Imagem', icon: '✂️', author: 'Inference.sh' },
  { id: 'inf-flux', name: 'FLUX Image', description: 'Gera imagens com FLUX (Black Forest Labs) com LoRA fine-tuning.', category: 'Imagem', icon: '⚡', author: 'Inference.sh' },
  { id: 'inf-gpt-image', name: 'GPT Image', description: 'Gera e edita imagens com OpenAI GPT-Image-2 — inpainting, multi-referência.', category: 'Imagem', icon: '🤖', author: 'Inference.sh' },
  { id: 'inf-upscaling', name: 'Image Upscaling', description: 'Aumenta resolução com Real-ESRGAN, Thera, Topaz, FLUX Upscaler.', category: 'Imagem', icon: '🔍', author: 'Inference.sh' },
  { id: 'inf-nano-banana', name: 'Nano Banana (Gemini)', description: 'Gera imagens com modelos nativos do Google Gemini.', category: 'Imagem', icon: '🍌', author: 'Inference.sh' },
  { id: 'inf-nano-banana-2', name: 'Nano Banana 2 (Gemini 3.1)', description: 'Gemini 3.1 Flash Image — multi-image input e Search grounding.', category: 'Imagem', icon: '🍌', author: 'Inference.sh' },
  { id: 'inf-p-image', name: 'Pruna P-Image', description: 'Imagens otimizadas para velocidade sem perda de qualidade.', category: 'Imagem', icon: '⚡', author: 'Inference.sh' },
  { id: 'inf-qwen-image', name: 'Qwen Image 2.0', description: 'Gera e edita imagens com Alibaba Qwen-Image-2.0.', category: 'Imagem', icon: '🐉', author: 'Inference.sh' },
  { id: 'inf-qwen-pro', name: 'Qwen Image 2.0 Pro', description: 'Text rendering profissional e designs complexos com Qwen Pro.', category: 'Imagem', icon: '🐉', author: 'Inference.sh' },

  // ═══════════════════════════════════════════════════════════════
  // INFERENCE.SH — VIDEO
  // ═══════════════════════════════════════════════════════════════
  { id: 'inf-avatar-video', name: 'AI Avatar Video', description: 'Cria vídeos de avatar e talking head com P-Video-Avatar.', category: 'Vídeo', icon: '🎭', author: 'Inference.sh', popular: true },
  { id: 'inf-ai-video', name: 'AI Video Generation', description: 'Gera vídeos com Veo, Seedance, HappyHorse, Wan, Grok e 40+ modelos.', category: 'Vídeo', icon: '🎬', author: 'Inference.sh', popular: true },
  { id: 'inf-google-veo', name: 'Google Veo', description: 'Gera vídeos com Google Veo 3.1, Veo 3, Veo 2.', category: 'Vídeo', icon: '🎬', author: 'Inference.sh' },
  { id: 'inf-happyhorse', name: 'HappyHorse', description: 'Vídeos fisicamente realistas com Alibaba HappyHorse 1.0.', category: 'Vídeo', icon: '🐴', author: 'Inference.sh' },
  { id: 'inf-i2v', name: 'Image to Video', description: 'Conversão de imagem estática para vídeo — seleção de modelo, motion.', category: 'Vídeo', icon: '🎞️', author: 'Inference.sh' },
  { id: 'inf-p-video', name: 'Pruna P-Video', description: 'Vídeos com P-Video e WAN otimizados para velocidade.', category: 'Vídeo', icon: '⚡', author: 'Inference.sh' },
  { id: 'inf-p-video-avatar', name: 'P-Video Avatar', description: 'Talking head avatar — 18x mais rápido, 6x mais barato.', category: 'Vídeo', icon: '🎭', author: 'Inference.sh' },
  { id: 'inf-remotion', name: 'Remotion Render', description: 'Renderiza vídeos de código React/Remotion — passa TSX, ganha MP4.', category: 'Vídeo', icon: '🎥', author: 'Inference.sh' },
  { id: 'inf-seedance', name: 'Seedance 2.0', description: 'Vídeos com ByteDance Seedance 2.0 — áudio sincronizado.', category: 'Vídeo', icon: '💃', author: 'Inference.sh' },

  // ═══════════════════════════════════════════════════════════════
  // INFERENCE.SH — LLM
  // ═══════════════════════════════════════════════════════════════
  { id: 'inf-rag', name: 'AI RAG Pipeline', description: 'Pipelines RAG com busca web e LLMs para pesquisa e knowledge.', category: 'LLM', icon: '🔗', author: 'Inference.sh' },
  { id: 'inf-llm-models', name: 'LLM Models', description: 'Acessa Claude, Gemini, Kimi, GLM e 100+ LLMs via OpenRouter.', category: 'LLM', icon: '🧠', author: 'Inference.sh', popular: true },
  { id: 'inf-web-search', name: 'Web Search', description: 'Busca web e extração de conteúdo com Tavily e Exa.', category: 'LLM', icon: '🔍', author: 'Inference.sh' },

  // ═══════════════════════════════════════════════════════════════
  // INFERENCE.SH — SOCIAL
  // ═══════════════════════════════════════════════════════════════
  { id: 'inf-twitter', name: 'Twitter Automation', description: 'Automatiza Twitter/X — posting, engajamento, gestão de usuários.', category: 'Social', icon: '🐦', author: 'Inference.sh' },

  // ═══════════════════════════════════════════════════════════════
  // INFERENCE.SH — UTILITIES
  // ═══════════════════════════════════════════════════════════════
  { id: 'inf-browser', name: 'Agent Browser', description: 'Automação de browser para agentes IA com Playwright.', category: 'Automação', icon: '🌐', author: 'Inference.sh' },
  { id: 'inf-python', name: 'Python Executor', description: 'Executa Python em sandbox seguro — 100+ bibliotecas pré-instaladas.', category: 'Automação', icon: '🐍', author: 'Inference.sh' },
  { id: 'inf-related-skill', name: 'Related Skill', description: 'Descobre e instala skills relacionadas do registro inference.sh.', category: 'Agentes', icon: '🔗', author: 'Inference.sh' },

  // ═══════════════════════════════════════════════════════════════
  // INFERENCE.SH — GUIDES
  // ═══════════════════════════════════════════════════════════════
  { id: 'inf-affirmations', name: 'Affirmations', description: 'Reset trajectory quando stuck — le afirmações e re-ground.', category: 'Agentes', icon: '🧘', author: 'Inference.sh' },
  { id: 'inf-automation', name: 'AI Automation Workflows', description: 'Workflows automatizados combinando múltiplos modelos e serviços.', category: 'Automação', icon: '⚙️', author: 'Inference.sh' },
  { id: 'inf-content-pipeline', name: 'AI Content Pipeline', description: 'Pipeline multi-step de criação de conteúdo — imagem, vídeo, áudio, texto.', category: 'Automação', icon: '🔗', author: 'Inference.sh' },
  { id: 'inf-podcast', name: 'AI Podcast', description: 'Gera podcasts com múltiplas personalidades — TTS, avatares, video.', category: 'Áudio', icon: '🎙️', author: 'Inference.sh' },
  { id: 'inf-podcast-create', name: 'AI Podcast Creation', description: 'Cria podcasts com TTS, música e edição de áudio.', category: 'Áudio', icon: '🎙️', author: 'Inference.sh' },
  { id: 'inf-repurposing', name: 'Content Repurposing', description: 'Atomização de conteúdo — transforma 1 peça em muitos formatos.', category: 'Social', icon: '♻️', author: 'Inference.sh' },

  // INFERENCE.SH — DESIGN GUIDES
  { id: 'inf-app-store', name: 'App Store Screenshots', description: 'Screenshots de App Store e Google Play com specs exatas.', category: 'Design', icon: '📱', author: 'Inference.sh' },
  { id: 'inf-book-cover', name: 'Book Cover Design', description: 'Design de capas de livro com convenções de gênero e tipografia.', category: 'Design', icon: '📚', author: 'Inference.sh' },
  { id: 'inf-character-design', name: 'Character Design Sheet', description: 'Consistência de personagens com reference sheets e LoRA.', category: 'Design', icon: '🧑', author: 'Inference.sh' },
  { id: 'inf-dataviz-guide', name: 'Data Visualization Guide', description: 'Seleção de gráficos, teoria das cores e boas práticas de anotação.', category: 'Design', icon: '📊', author: 'Inference.sh' },
  { id: 'inf-email-design', name: 'Email Design', description: 'Design de email marketing — layout, subject lines, deliverability.', category: 'Design', icon: '📧', author: 'Inference.sh' },
  { id: 'inf-landing-page', name: 'Landing Page Design', description: 'Otimização de conversão — hero, CTA, F-pattern, mobile.', category: 'Design', icon: '🌐', author: 'Inference.sh' },
  { id: 'inf-logo-design', name: 'Logo Design Guide', description: 'Princípios de design de logo com geração de imagem de IA.', category: 'Design', icon: '✨', author: 'Inference.sh' },
  { id: 'inf-og-image', name: 'OG Image Design', description: 'Design de imagens Open Graph — specs, texto, branding.', category: 'Design', icon: '🖼️', author: 'Inference.sh' },
  { id: 'inf-pitch-deck', name: 'Pitch Deck Visuals', description: 'Estrutura de pitch deck investidor — slides, dados, design.', category: 'Design', icon: '📊', author: 'Inference.sh' },
  { id: 'inf-yt-thumb', name: 'YouTube Thumbnail Design', description: 'Thumbnails de YouTube — dimensões, contraste, mobile.', category: 'Design', icon: '📺', author: 'Inference.sh' },

  // INFERENCE.SH — PHOTO
  { id: 'inf-product-photo', name: 'AI Product Photography', description: 'Fotografia de produto com FLUX, Imagen 3, Grok.', category: 'Imagem', icon: '📸', author: 'Inference.sh' },
  { id: 'inf-packshot', name: 'Product Photography', description: 'Fotografia de produto — lighting studio, lifestyle, packshot.', category: 'Imagem', icon: '📸', author: 'Inference.sh' },

  // INFERENCE.SH — PRODUCT
  { id: 'inf-competitor', name: 'Competitor Teardown', description: 'Análise competitiva — feature matrices, SWOT, posicionamento.', category: 'Produto', icon: '🔎', author: 'Inference.sh' },
  { id: 'inf-persona', name: 'Customer Persona', description: 'Criação de persona com dados de mercado e avatar.', category: 'Produto', icon: '👤', author: 'Inference.sh' },
  { id: 'inf-changelog', name: 'Product Changelog', description: 'Release notes que os usuários realmente leem.', category: 'Produto', icon: '📋', author: 'Inference.sh' },
  { id: 'inf-product-hunt', name: 'Product Hunt Launch', description: 'Otimização de lançamento no Product Hunt — specs, timing, galeria.', category: 'Produto', icon: '🚀', author: 'Inference.sh' },

  // INFERENCE.SH — PROMPTING
  { id: 'inf-prompt-engineering', name: 'Prompt Engineering', description: 'Domine prompt engineering para LLMs, geradores de imagem e vídeo.', category: 'LLM', icon: '🧠', author: 'Inference.sh', popular: true },
  { id: 'inf-video-prompting', name: 'Video Prompting Guide', description: 'Melhores práticas de prompts para Veo, Seedance, Wan, Grok.', category: 'Vídeo', icon: '🎬', author: 'Inference.sh' },

  // INFERENCE.SH — SOCIAL GUIDES
  { id: 'inf-social-media', name: 'AI Social Media Content', description: 'Conteúdo para TikTok, Instagram, YouTube, Twitter/X.', category: 'Social', icon: '📱', author: 'Inference.sh' },
  { id: 'inf-linkedin', name: 'LinkedIn Content', description: 'Posts LinkedIn com hooks, formatação e engagement.', category: 'Social', icon: '💼', author: 'Inference.sh' },
  { id: 'inf-carousel-guide', name: 'Social Media Carousel', description: 'Carrosséis multi-slide para Instagram, LinkedIn, Twitter/X.', category: 'Social', icon: '🎠', author: 'Inference.sh' },
  { id: 'inf-twitter-thread', name: 'Twitter Thread Creation', description: 'Threads Twitter/X com hooks e otimização de engajamento.', category: 'Social', icon: '🐦', author: 'Inference.sh' },

  // INFERENCE.SH — VIDEO GUIDES
  { id: 'inf-marketing-video', name: 'AI Marketing Videos', description: 'Vídeos de marketing — ads, promos, lançamentos, brand content.', category: 'Vídeo', icon: '📢', author: 'Inference.sh' },
  { id: 'inf-explainer', name: 'Explainer Video Guide', description: 'Produção de vídeos explicativos — script, voiceover, assembly.', category: 'Vídeo', icon: '🎥', author: 'Inference.sh' },
  { id: 'inf-storyboard', name: 'Storyboard Creation', description: 'Storyboarding com vocabulário de shots e regras de continuidade.', category: 'Vídeo', icon: '🎬', author: 'Inference.sh' },
  { id: 'inf-talking-head', name: 'Talking Head Production', description: 'Produção de talking head com avatares AI e lipsync.', category: 'Vídeo', icon: '🎭', author: 'Inference.sh' },
  { id: 'inf-ad-specs', name: 'Video Ad Specs', description: 'Specs exatas para ads — TikTok, Instagram, YouTube, Facebook.', category: 'Vídeo', icon: '📺', author: 'Inference.sh' },

  // INFERENCE.SH — WRITING
  { id: 'inf-case-study', name: 'Case Study Writing', description: 'Escrita de case studies B2B com framework STAR.', category: 'Escrita', icon: '📝', author: 'Inference.sh' },
  { id: 'inf-newsletter', name: 'Newsletter Curation', description: 'Curadoria de newsletters — sourcing, estrutura, crescimento.', category: 'Escrita', icon: '📰', author: 'Inference.sh' },
  { id: 'inf-press-release', name: 'Press Release Writing', description: 'Comunicados de imprensa em estilo AP com pirâmide invertida.', category: 'Escrita', icon: '📰', author: 'Inference.sh' },
  { id: 'inf-seo-brief', name: 'SEO Content Brief', description: 'Brief de conteúdo SEO — keywords, search intent, estrutura.', category: 'Escrita', icon: '🔎', author: 'Inference.sh' },
  { id: 'inf-tech-blog', name: 'Technical Blog Writing', description: 'Blog posts técnicos — estrutura, code examples, convenções.', category: 'Escrita', icon: '💻', author: 'Inference.sh' },

  // INFERENCE.SH — SDK
  { id: 'inf-building-apps', name: 'Building Inference.sh Apps', description: 'Constrói e faz deploy de apps no inference.sh — Python e Node.js.', category: 'Frameworks', icon: '🏗️', author: 'Inference.sh' },
  { id: 'inf-js-sdk', name: 'JavaScript SDK', description: 'SDK JS/TS para inference.sh — streaming, uploads, agent building.', category: 'Frameworks', icon: '📦', author: 'Inference.sh' },
  { id: 'inf-python-sdk', name: 'Python SDK', description: 'SDK Python para inference.sh — sync/async, streaming, uploads.', category: 'Frameworks', icon: '🐍', author: 'Inference.sh' },

  // INFERENCE.SH — UI
  { id: 'inf-agent-ui', name: 'Agent UI', description: 'Componente agent para React/Next.js — runtime, tools, streaming.', category: 'UI/Design', icon: '🤖', author: 'Inference.sh' },
  { id: 'inf-chat-ui', name: 'Chat UI', description: 'Building blocks de chat — container, messages, input, avatars.', category: 'UI/Design', icon: '💬', author: 'Inference.sh' },
  { id: 'inf-tools-ui', name: 'Tools UI', description: 'Componentes de lifecycle de tools — pending, progress, approval.', category: 'UI/Design', icon: '🛠️', author: 'Inference.sh' },
  { id: 'inf-widgets-ui', name: 'Widgets UI', description: 'Widgets declarativos de JSON para React/Next.js.', category: 'UI/Design', icon: '🧩', author: 'Inference.sh' },
];

export const SKILL_CATEGORIES = [
  'Todos',
  'Código',
  'Conhecimento',
  'Design',
  'Deploy',
  'Documentação',
  'Frameworks',
  'Git',
  'Infraestrutura',
  'Agentes',
  'Automação',
  'Comunicação',
  'Customizadas',
  'Imagem',
  'Áudio',
  'Vídeo',
  'Social',
  'LLM',
  'UI/Design',
  'Mídia',
  'Produto',
  'Escrita',
];