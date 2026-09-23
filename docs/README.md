# docs/ — Mapa de Documentação (padrão PRD/ADR/SPEC/PLAN)

| Pasta/Arquivo                      | O que é                                      | Quando ler                               |
| ---------------------------------- | -------------------------------------------- | ---------------------------------------- |
| [prd/PRD.md](prd/PRD.md)           | Visão de negócio, personas, escopo, MVPs     | Início de qualquer tarefa de produto     |
| [adr/](adr/README.md)              | Registros de decisão arquitetural            | Antes de decidir DB/framework/infra/auth |
| [specs/](specs/README.md)          | Especificação técnica linha-a-linha          | ANTES de desenvolver qualquer feature    |
| [plan/PLAN.md](plan/PLAN.md)       | Checklist vivo (feitos/andamento/pendências) | Sempre — estado real do patch            |
| [agents/](agents/README.md)        | Papéis + loop developer→tester→reviewer      | Ao orquestrar ou assumir um papel        |
| [AGENTE.md](AGENTE.md)             | Protocolo de relatórios + Brain + guardrails | Antes de qualquer alteração de código    |
| [architecture.md](architecture.md) | Arquitetura técnica detalhada                | Dúvidas estruturais                      |
| [api.md](api.md)                   | Contrato das rotas API                       | Ao criar/editar rotas                    |
| [TLOG.md](TLOG.md)                 | Timeline técnica                             | Histórico de mudanças                    |
| [reports/](reports/)               | Relatórios avulsos históricos                | Referência                               |
| [audit/](audit/)                   | Baseline de auditoria                        | Checagens de segurança                   |

**Fluxo:** PRD (porquê) → ADR (decisão) → SPEC (como, linha-a-linha) → PLAN (quando/checklist) → relatório em `relatorios_agente/` (feito).
