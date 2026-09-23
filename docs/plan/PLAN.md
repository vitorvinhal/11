# PLAN — Checklist Vivo de Implementação

> Plano de implementação. Nasce quando a implementação começa. Atualizado a cada patch.
> Regra: um patch só fecha quando TODOS os itens dele estão feitos, gate verde e deploy no ar.
> Fonte de negócio: `docs/prd/PRD.md` · Decisões: `docs/adr/` · Detalhe técnico: `docs/specs/`.

## 📦 Patch atual — 2.17.0-alpha (em consolidação)

- [x] AG1 — Orca server + proxy `/api/code` + sandbox (merge `b3cc100`, gate Brain OK)
- [x] AG2 — Offline-first mobile/desktop: URL unificada, bridges, plugins Tauri, SW
- [x] AG3 — Ollama/Llama: `llama3.2:3b`, fallback `/api/tags`, smoke-test expectations (commit `08765d4`)
- [x] AG4 — Unify-auth `requireUser()` + eliminação de `verifyToken`/`authenticate()`
- [x] Reorganização documental (PRD/ADR/SPEC/PLAN/agents) — TASK-BRAIN-002
- [ ] AG2 — fechamento formal (relatório pos + BRAIN_SYNC)
- [ ] AG4 — varredura final de rotas sem auth + fechamento formal
- [ ] Lista de problemas do usuário (aguardando envio)
- [ ] Gate final: `pnpm -r lint && pnpm -r build && pnpm -r test` na integração
- [ ] FASE D: deploy `2.17.0-alpha` (Brain)

## ✅ Concluídos (histórico)

- [x] 9Router em produção: combos, fallback, JSON+SSE, `/api/health/router`
- [x] Terminal real (xterm.js + SSE) com sandbox e auditoria
- [x] Agente PC/Mobile: 21 tools, pareamento, jobs, approval
- [x] Sistema de upgrade (notificação + downloads) + builds desktop/APK
- [x] Supabase `20260919_devices_gateway.sql` aplicado
- [x] CI GitHub Actions: build, Android (APK), iOS (IPA)
- [x] Perfil funcional (7 tabs) + UI estilo ELEVEN
- [x] Safety engine 50+ regras, agent loop, plugins/skills (fases 4-10)

## 📋 Próximos patches (MVP2 — pós-BETA)

1. Streaming SSE no chat (efeito "digitando")
2. Persistir Plugins no Supabase (hoje localStorage)
3. Artifacts no servidor (tabela `artifacts`)
4. Rate limit persistente (Redis/Supabase)
5. Túnel estável 9Router (Cloudflare nomeado)
6. Terminal PTY contínuo via Orca (node-pty)
7. Command Palette (Cmd+K) + split view
8. i18n (pt-BR/en/es) + temas customizados
9. RLS endurecida para projetos/mídia/artifacts

## ❓ Decisões pendentes (precisam do usuário)

- [ ] Hospedar binários fora de `/downloads` (`NEXT_PUBLIC_DOWNLOAD_*_URL`)?
- [ ] Escopo do MVP2 em ordem de prioridade?
