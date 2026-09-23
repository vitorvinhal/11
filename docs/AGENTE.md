# PROTOCOLO DE PLANEJAMENTO, AUDITORIA E SYSTEM PROMPT DO AGENTE

Este documento centraliza as diretrizes do projeto, definindo a estrutura da pasta agent/, o System Prompt oficial de orientação do agente e o fluxo de auditoria em Markdown (.md).

## 📁 Estrutura da Pasta agent/

Para que o agente saiba como se comportar e executar o fluxo de auditoria, os seguintes arquivos devem estar presentes no projeto:

```
/projeto-raiz
│
├── agent/
│   ├── system_prompt.md         <-- Prompt de Sistema carregado pelo Agente
│   └── rules.md                 <-- Regras de conduta e estilo de código
│
├── relatorios_agente/           <-- Pasta onde os relatórios das tarefas serão salvos
│   └── ID_[TASK_ID]_[TIMESTAMP]_plano.md
│
└── docs/
    └── AGENTE.md                <-- Este protocolo de referência
```

## 🎯 System Prompt do Agente (agent/system_prompt.md)

O texto a seguir deve ser configurado como System Prompt (ou instruções do sistema) do seu Agente/LLM. Ele garante que o agente nunca modifique o código sem criar o plano prévio.

# SYSTEM PROMPT DO AGENTE DE DESENVOLVIMENTO

Você é um Agente Autônomo de Desenvolvimento e Auditoria de Software. Sua principal responsabilidade é garantir que todas as alterações no código sejam planejadas, executadas e auditadas com total transparência.

### ⚠️ REGRA ABSOLUTA E IMPERATIVA:

Antes de criar, editar ou deletar QUALQUER arquivo de código do projeto associado a um ID de Tarefa (ex: `TASK-123`), você DEVE criar um relatório Markdown no diretório `relatorios_agente/`.

### 🔄 CICLO DE EXECUÇÃO OBRIGATÓRIO:

1. **FASE 1: PRÉ-ALTERAÇÃO (OBRIGATÓRIO ANTES DE CODAR)**
   - Crie o arquivo `relatorios_agente/ID_[TASK_ID]_[TIMESTAMP]_plano.md`.
   - Detalhe o Objetivo Geral, Metas Esperadas e Roteiro de Ação passo a passo.
   - Indique quais arquivos serão afetados e como serão alterados.
   - Salve o arquivo. SOMENTE APÓS SALVAR, inicie as alterações de código.

2. **FASE 2: EXECUÇÃO E LOG DE ERROS (EM TEMPO REAL)**
   - Durante a execução de comandos ou edição de código, se qualquer erro, exception ou aviso ocorrer, registre IMEDIATAMENTE no arquivo `.md` criado.

3. **FASE 3: PÓS-ALTERAÇÃO (AO CONCLUIR)**
   - Atualize o rodapé do arquivo `.md` com o Status Final (`🟢 CONCLUÍDO COM SUCESSO` ou `🔴 FINALIZADO COM ERROS`).
   - Forneça um resumo detalhado de todas as alterações realizadas.

## 📌 Regra Absoluta do Fluxo de Trabalho

Nenhuma linha de código ou arquivo de projeto pode ser alterado sem que o seguinte ciclo seja estritamente respeitado:

```
[1. RECEBER ID DA TAREFA]
         ↓
[2. GERAR PLANO PRÉ-ALTERAÇÃO (.md)]  <-- Salvo em relatorios_agente/
         ↓
[3. EXECUTAR ALTERAÇÕES & REGISTRAR ERROS EM TEMPO REAL]
         ↓
[4. ATUALIZAR RELATÓRIO PÓS-ALTERAÇÃO (.md)]
```

## 📄 Estrutura do Arquivo .md Gerado pelo Agente

O arquivo Markdown criado em relatorios_agente/ deve ter a seguinte estrutura:

### 1️⃣ Estágio 1: Pré-Alteração (Gravado ANTES de mexer no projeto)

```markdown
# 📋 PLANO DE EXECUÇÃO - TAREFA [ID_DA_TAREFA]

- **ID da Tarefa:** `[ID_DA_TAREFA]`
- **Data/Hora de Início:** YYYY-MM-DD HH:MM:SS
- **Status Inicial:** 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)

---

## 🎯 Objetivo Geral

Descrever de forma clara o objetivo final das alterações.

## 📌 Metas e Verificações Esperadas

- [ ] Meta 1
- [ ] Meta 2
- [ ] Meta 3

## 🗺️ Roteiro Detalhado de Ação (Como e O Que Fazer)

### Passo 1: [Nome da Etapa]

- **O que fazer:** [Descrição exata da mudança]
- **Como fazer:** [Técnica, funções, bibliotecas ou comandos que serão usados]
- **Arquivos afetados:** `caminho/do/arquivo1.ext`, `caminho/do/arquivo2.ext`

### Passo 2: [Nome da Etapa]

- **O que fazer:** [Descrição exata da mudança]
- **Como fazer:** [Técnica, funções, bibliotecas ou comandos que serão usados]
- **Arquivos afetados:** `caminho/do/arquivo.ext`
```

### 2️⃣ Estágio 2: Registro durante a Execução (Alertas e Erros)

Qualquer falha, erro de sintaxe, teste quebrado ou aviso ocorrido durante o processo deve ser anexado imediatamente ao final da seção de log do mesmo arquivo .md:

````markdown
---

## 🔄 Diário de Execução em Tempo Real

[HH:MM:SS] 🛠️ [EXECUÇÃO]: Iniciando alteração do arquivo `src/auth.py`.

> 🚨 **PROBLEMA/ERRO DETECTADO [HH:MM:SS]**
> **Descrição:** [Descrição clara do erro ou exceção disparada]
> **Traceback / Detalhes:**
>
> ```python
> [Erro detalhado se houver]
> ```
````

### 3️⃣ Estágio 3: Pós-Alteração (Atualizado APÓS concluir as mudanças)

Ao finalizar a execução (seja com sucesso ou com falha), o agente deve anexar o relatório final ao rodapé do arquivo .md:

```markdown
---

## 🏁 Relatório Pós-Alteração (Status Final)

- **Data/Hora de Conclusão:** YYYY-MM-DD HH:MM:SS
- **Status Final:** 🟢 CONCLUÍDO COM SUCESSO / 🔴 FINALIZADO COM ERROS

### 📝 Resumo das Alterações Efetivadas:
- [x] Alterado arquivo `src/auth.py` adicionando a validação do token JWT.
- [x] Atualizadas as rotas em `src/routes.py`.

### ⚠️ Ocorrências e Problemas Resolvidos:
- [Detalhar erros capturados e como foram corrigidos, ou pendências restantes]

---

_Relatório auditado e registrado automaticamente pelo Agente._
```

## 💻 Exemplo de Integração em Python (agent/agente.py)

Caso você esteja construindo o agente em Python para ler as instruções da pasta agent/ e executar o fluxo:

````python
import os
from datetime import datetime
from pathlib import Path

class AgenteMD:
    def __init__(self, task_id: str, pasta_projeto: str = "."):
        self.task_id = str(task_id)
        self.pasta_agente = Path(pasta_projeto) / "agent"
        self.pasta_relatorios = Path(pasta_projeto) / "relatorios_agente"
        self.pasta_relatorios.mkdir(parents=True, exist_ok=True)

        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        self.caminho_md = self.pasta_relatorios / f"ID_{self.task_id}_{timestamp}_plano.md"

    def carregar_system_prompt(self) -> str:
        """Carrega as instruções do System Prompt contidas na pasta agent/"""
        prompt_file = self.pasta_agente / "system_prompt.md"
        if prompt_file.exists():
            return prompt_file.read_text(encoding="utf-8")
        return "System Prompt padrão não encontrado em agent/system_prompt.md."

    def criar_plano_pre_alteracao(self, objetivo: str, passos: list, metas: list):
        conteudo = f"""# 📋 PLANO DE EXECUÇÃO - TAREFA {self.task_id}

- **ID da Tarefa:** `{self.task_id}`
- **Data/Hora de Início:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
- **Status Inicial:** 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)

---

## 🎯 Objetivo Geral
{objetivo}

## 📌 Metas Esperadas
"""
        for meta in metas:
            conteudo += f"- [ ] {meta}\n"

        conteudo += "\n## 🗺️ Roteiro Detalhado de Ação\n"
        for i, p in enumerate(passos, 1):
            conteudo += f"\n### Passo {i}: {p['titulo']}\n"
            conteudo += f"- **O que fazer:** {p['o_que_fazer']}\n"
            conteudo += f"- **Como fazer:** {p['como_fazer']}\n"
            conteudo += f"- **Arquivos afetados:** `{p['arquivos']}`\n"

        conteudo += f"\n---\n## 🔄 Diário de Execução\n[{datetime.now().strftime('%H:%M:%S')}] Plano pré-alteração gerado.\n"

        with open(self.caminho_md, "w", encoding="utf-8") as f:
            f.write(conteudo)

        print(f"Plano pré-alteração salvo em: {self.caminho_md}")

    def registrar_erro(self, descricao: str, detalhe: str = ""):
        bloco = f"\n> 🚨 **PROBLEMA DETECTADO [{datetime.now().strftime('%H:%M:%S')}]**\n> **Descrição:** {descricao}\n"
        if detalhe:
            bloco += f"> **Detalhes:**\n```\n{detalhe}\n```\n"

        with open(self.caminho_md, "a", encoding="utf-8") as f:
            f.write(bloco)

    def finalizar_pos_alteracao(self, sucesso: bool, alteracoes: list):
        status = "🟢 CONCLUÍDO COM SUCESSO" if sucesso else "🔴 FINALIZADO COM ERROS"
        conteudo = f"""\n---
## 🏁 Relatório Pós-Alteração (Status Final)

- **Data/Hora de Conclusão:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
- **Status Final:** **{status}**

### 📝 Resumo das Alterações Efetivadas:
"""
        for alt in alteracoes:
            conteudo += f"- {alt}\n"

        with open(self.caminho_md, "a", encoding="utf-8") as f:
            f.write(conteudo)

        print(f"Relatório pós-alteração atualizado em: {self.caminho_md}")
````

---

## 6. PROTOCOLO DO AGENTE BRAIN (MASTER ORCHESTRATOR & EXCLUSIVE DEPLOYER)

### 6.1 Regra de Monopólio de Deploy

- **Proibição de Push em Main:** Os Agentes Trabalhadores (1, 2, 3 e 4) estão estritamente PROIBIDOS de executar `git push origin main`, disparar builds de produção no Vercel/Railway ou criar tags de release no GitHub.
- **Autoridade Única do Brain:** Apenas o Agente **Brain** possui permissão para autorizar e executar a FASE D (Release & Deploy) após validar que `pnpm -r lint`, `pnpm -r build` e `pnpm -r test` passaram sem erros em todos os pacotes.
- **Nota sobre `pnpm -r typecheck`:** o script `typecheck` está QUEBRADO na raiz do monorepo (nenhum workspace o define). Não usar como evidência de tipagem; o gate de validação é `lint && build && test`.

### 6.2 Formato de Comunicação com o Brain

Todo relatório de conclusão gerado por um agente em `relatorios_agente/` deve conter o bloco de síntese para leitura do Brain:

```markdown
<!-- BRAIN_SYNC_START -->

- TASK_ID: <ID_DA_TAREFA>
- BRANCH: <NOME_DA_BRANCH>
- STATUS: SUCCESS | FAILURE | BLOCKED
- AFFECTED_FILES: [<LISTA_DE_ARQUIVOS>]
- TEST_SUMMARY: Lint: PASS | Build: PASS | Tests: PASS
- REQUIRES_SMOKE_TEST: YES/NO (Porta/Servidor se aplicável)

<!-- BRAIN_SYNC_END -->
```

## 7. GUARDRAILS DE UI & PERFORMANCE (ZERO DEGRADATION RULE)

### 7.1 Restrição de Qualidade Visual

- **Fallback Dinâmico Apenas:** É PROIBIDO reduzir o número de partículas do AstroSphere 3D, diminuir resolução de shaders ou trocar `backdrop-filter` (blur) por overlay sólido de forma estática no CSS.
- **Hardware Detection em Runtime:** Reduções visuais só podem ser aplicadas dinamicamente via Javascript ao detectar baixo desempenho em tempo real (`navigator.hardwareConcurrency < 4`, `deviceMemory < 4` ou FPS < 30 no canvas por 3 segundos consecutivos).

### 7.2 Métricas Obrigatórias em Relatórios de UI

Em qualquer alteração visual ou de layout, o relatório pré e pós DEVE incluir a medição de FPS e uso de memória:

- **FPS Médio com Menu Aberto:** Antes (ex: 22 FPS) vs Depois (ex: 60 FPS).
- **Consumo de Memória do Canvas/WebGL:** Medido via Chrome DevTools / Performance tab.

## 8. CHECKLIST DE AMBIENTE E SMOKE TEST PRÉ-INTEGRAÇÃO

Antes de marcar uma tarefa como concluída, o agente deve validar os seguintes pontos conforme o escopo:

- [ ] **Orca Server:** Se alterou `/api/code`, confirmar se o servidor Orca está respondendo em `http://localhost:4001/orca/exec`.
- [ ] **Auth Unified:** Se criou/editou rotas de API, confirmar o uso de `requireUser()` do unify-auth em vez de `verifyToken` legado (em GET inclusive, não só POST/PATCH/DELETE).
- [ ] **Segurança de Path e SSRF:** validação de path com `path.relative` (nunca `startsWith`); proxy de URL do cliente só com allowlist de host antes do `fetch()` no servidor.
- [ ] **Ollama Fallback:** Se alterou `/api/chat`, garantir que a lista de candidatos `routeOllama` possui tratamento para modelo inexistente.
- [ ] **Compilação Monorepo:** `pnpm -r lint && pnpm -r build && pnpm -r test` 100% verde. (Não usar `pnpm -r typecheck` — quebrado na raiz.)
