# TODO / Status do Projeto

Última atualização: 0.3.0-alpha

## Concluído nesta rodada

- [x] 9Router funcional em produção: combos com fallback, parser JSON+SSE, health check (`/api/health/router`)
- [x] Loader de `.env` multi-camada (raiz do monorepo → app) compatível com Vercel
- [x] Terminal real estilo VSCode (xterm.js) com streaming SSE e execução aprovada (`/api/terminal/exec`)
- [x] Perfil funcional: Account, Privacy, Capabilities, Reflect, Time & focus, Skills/Connectors/Plugins
- [x] Favicon + ícones (web/PWA/Android/iOS/desktop) refeitos
- [x] UI estilo GPT/ELEVEN (chat, composer, sidebar)
- [x] Correções: capacitor.config.json, service role key, .gitignore, Redux store, build Node 24

## Próximos passos sugeridos

1. **Streaming no chat** — hoje a resposta chega completa; usar SSE também em `/api/chat` para efeito "digitando".
2. **Persistir Plugins** — hoje o estado é local (`PluginsPanel`); mover para Supabase.
3. **Artifacts no servidor** — hoje usa localStorage; migrar para tabela `artifacts`.
4. **Testes automatizados** — adicionar jest/ts-jest e cobrir `parseCompletionContent`, validação do terminal e rotas de API.
5. **Rate limit persistente** — mover de memória para Redis/Supabase em produção.
6. **Túnel estável** — trocar quick-tunnel por nomeado (Cloudflare) com domínio fixo; configurar `9ROUTER_TUNNEL` no dashboard Vercel.
7. **Terminal: sessões PTY** — hoje cada comando é um processo; usar `node-pty` para shell interativo contínuo.
8. **Command Palette (Cmd+K)** e **split view Chat + Code**.
9. **i18n** (pt-BR/en/es) e **temas customizados**.
10. **Migrar projetos/mídia/artifacts** para RLS endurecida e auditoria.

## Comandos úteis

```bash
pnpm install
pnpm dev:web            # frontend (Next.js)
node scripts/smoke-test.mjs http://localhost:3000   # smoke test dos endpoints
npx next build          # build de produção (apps/web)
```
