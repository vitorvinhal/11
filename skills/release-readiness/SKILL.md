---
name: release-readiness
description: Workflow geral de preparação de release para QUALQUER projeto que o usuário estiver construindo (não específico de um sistema) — diagnóstico inicial, limpeza segura de repositório, backup validado, checklist de pré-deploy e relatório final honesto de prontidão. Use SEMPRE que o usuário pedir para "preparar para produção", "deixar pronto pro deploy", "limpar o projeto", "fazer backup antes de mexer", ou pedir um "relatório final" de status de qualquer projeto — mesmo que peça só "organiza o repo" ou "faz backup". NUNCA apague arquivos, backups antigos ou dados sem seguir o passo de confirmação desta skill primeiro.
---

# Skill de Operações de Release (geral, multi-projeto)

Cobre a parte operacional de preparar qualquer projeto para lançamento: o que vem antes dos testes (`qa-testing-playbook`) e depois deles (o relatório final). A regra mais importante: nunca apagar nada sem confirmação, nunca inventar regra de negócio.

## 0. Diagnóstico inicial (sempre primeiro)

Antes de tocar em qualquer arquivo:
1. `view` na estrutura do repositório inteiro para entender a stack real presente.
2. Rode o build/lint/testes atuais e registre o baseline — o que já quebra hoje, antes de qualquer mudança sua. Isso evita tanto atribuir a você bugs pré-existentes quanto "consertar" silenciosamente algo sem avisar o usuário.
3. Se houver uma skill de arquitetura específica do projeto já carregada na conversa, leia-a — ela pode já descrever convenções e riscos conhecidos. Não assuma que documentação prévia (skill ou README) reflete 100% o estado atual do código; confirme contra o repo real.

## 1. Backup (antes de qualquer alteração)

1. Crie **um único backup compactado** com timestamp: código-fonte + dump/export do schema e dados de configuração do banco (sem dados sensíveis reais se o ambiente for produção).
2. **Valide o backup** — restaure em pasta temporária e confirme que o projeto sobe a partir dele. Um backup não testado não conta como backup.
3. Só depois de validado, liste os backups antigos existentes e **peça confirmação explícita ao usuário** antes de apagar qualquer um. Nunca apague automaticamente.

## 2. Limpeza do repositório

1. Liste (sem apagar ainda) candidatos a remoção: logs, builds antigos, arquivos temporários, duplicatas, dependências órfãs.
2. Apresente a lista ao usuário com o tamanho total a ser liberado.
3. Só apague após confirmação. Prefira mover para uma pasta temporária primeiro e apagar de fato depois de confirmar que um novo build funciona, em vez de apagar direto.

## 3. Checklist de pré-deploy

Adapte os itens à stack real do projeto, mas não declare "pronto" sem checar item por item:

- [ ] Controle de acesso (RLS/middleware/policy) habilitado em toda tabela/rota que expõe dado sensível — não só as principais.
- [ ] Nenhum secret (chave de API, token, credencial) hardcoded no client — tudo via variável de ambiente do servidor ou função backend.
- [ ] Variáveis de ambiente de produção configuradas no ambiente de deploy real, não só localmente.
- [ ] Build de produção roda sem warning crítico.
- [ ] Se houver build mobile/desktop separado do web, ele foi gerado e testado num dispositivo/emulador real — comportamento de rede e storage pode diferir do browser.
- [ ] Todos os testes de `qa-testing-playbook` rodados contra staging com resultado documentado (não assumido).
- [ ] Rollback definido: se o deploy falhar, qual o passo exato para voltar à versão anterior (reverter build + restaurar backup do schema se houve migration).

## 4. Relatório final

Ao concluir, entregue um relatório objetivo — nunca "100% blindado" ou "sem nenhum risco". Estrutura sugerida:

```
## Status de Release — [projeto] [data]

### O que foi feito
- [lista de mudanças por módulo/arquivo]

### Resultados dos testes (qa-testing-playbook)
- Segurança/IDOR: PASS/FAIL — [detalhe]
- Concorrência: PASS/FAIL — [detalhe]
- Offline/rede: PASS/FAIL — [detalhe]
- Performance/memory: PASS/FAIL — [números]
- Responsividade: PASS/FAIL — [breakpoints testados]

### Riscos conhecidos remanescentes
- [o que não foi coberto ou precisa de monitoramento pós-deploy]

### Checklist de pré-deploy
- [itens marcados da seção 3 acima]

### Recomendação
- [pronto para deploy / pronto com ressalvas / não recomendado ainda — e por quê]
```

Se algum item do checklist não foi verificado, isso deve aparecer explicitamente como "não verificado", nunca ser omitido.