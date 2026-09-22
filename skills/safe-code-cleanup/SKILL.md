> Segue também as regras de `destructive-operations-safety` (dry-run, backup, Git, distinção restaurado/recriado, hash antes de chamar de duplicata) — não repita essa lógica aqui, só aplique.

# Limpeza Segura de Código (geral, multi-projeto)

O risco que esta skill evita: tratar um backlog de warnings como uma lista homogênea e corrigir tudo do mesmo jeito. Alguns problemas são 100% mecânicos (corrigir sem pensar); outros são só sintoma de algo incompleto ou intencional, e "corrigir" às cegas introduz bug novo em vez de remover um.

## Passo 0 — Classifique antes de tocar em qualquer linha

Separe cada tipo de warning/erro em uma das três categorias:

**Categoria A — Mecânico, corrige direto:**
- Globals faltando na config do linter (o código já estava correto, só a config não conhecia o identificador).
- Erros de sintaxe reais (vírgula sobrando, parênteses não fechado).
- Formatação (espaçamento, ponto e vírgula).

**Categoria B — Provavelmente seguro, mas corrige em lote separado dos demais:**
- Parâmetro de `catch` não usado — geralmente seguro renomear/omitir, mas confirme que nenhum desses blocos deveria estar logando o erro (se deveria e não está, isso é matéria pra `observability-setup`, não só um warning de lint).
- Import/variável declarada e nunca usada em arquivo pequeno e recém-tocado.

**Categoria C — Exige contexto antes de decidir, NUNCA corrigir em lote:**
- Comparação solta (`==`/`!=` vs `===`/`!==`) — troca cega pode quebrar checagem intencional de `null`/`undefined` junto. Sempre mostre a linha exata e o contexto ao redor antes de decidir.
- Variável/função não usada em código maior ou mais antigo — pode ser código morto de verdade, ou pode ser uma feature incompleta/desabilitada temporariamente. Liste cada uma com uma linha de contexto (onde está, o que parece que deveria fazer) antes de apagar.
- Qualquer warning que, ao ser corrigido "certo", mudaria comportamento visível (não só suprimir o aviso).

## 1. Execução

1. Corrija a Categoria A inteira e faça **um commit só pra ela** (`fix: add missing linter globals` etc.).
2. Corrija a Categoria B inteira e faça **outro commit separado**.
3. Para a Categoria C, **pare e liste** cada item com contexto suficiente para quem está pedindo decidir — não presuma a resposta. Só corrija depois de resposta explícita, e ainda assim um commit por decisão relacionada (não misture decisões diferentes no mesmo commit).
4. Depois de cada commit, rode o linter de novo e confirme que o número de problemas caiu exatamente pelo esperado — se caiu mais ou menos que o previsto, algo inesperado aconteceu e vale investigar antes de seguir pro próximo commit.

## 2. Por que commits separados por categoria

Se algo quebrar depois, um `git bisect` ou `git revert` num commit "corrigi tudo de uma vez" obriga a reverter mudanças seguras junto com a arriscada. Commits separados por categoria significam que reverter a Categoria C (se ela causar problema) não desfaz a A e B, que eram seguras.

## 3. Validação final

Depois de todas as categorias resolvidas (ou pausadas em C aguardando decisão), rode a aplicação localmente e confirme que abre e funciona sem erro novo no console — um lint mais limpo que quebra a aplicação é regressão, não melhoria.

## Saída

Reporte por categoria: quantos itens, quantos commits, e para a Categoria C, a lista pendente de decisão com contexto — nunca um número único "resolvi 124 problemas" sem essa divisão.
