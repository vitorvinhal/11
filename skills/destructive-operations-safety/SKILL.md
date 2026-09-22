name: destructive-operations-safety
description: Regras obrigatórias antes de QUALQUER operação que apaga, sobrescreve, move em lote, ou executa um script novo contra arquivos reais (não um teste/staging). Use SEMPRE antes de rodar um script de limpeza, um regex de find-and-replace em massa, uma deleção baseada em padrão (wildcard/nome), ou qualquer automação que você não rodou antes exatamente daquele jeito — mesmo que o pedido pareça simples ("limpa isso", "remove os duplicados"). Esta skill é referenciada por `safe-code-cleanup`, `git-repo-hygiene` e `skills-library-hygiene` em vez de cada uma repetir a regra à sua moda — se uma dessas ativar, esta ativa junto.

# Segurança em Operações Destrutivas (geral, qualquer projeto)

O padrão de erro que esta skill existe pra evitar: executar uma ação em lote direto contra os arquivos reais, sem checagem prévia, confiando que a lógica (regex, nome, "parece duplicado") está certa — e, quando dá errado, tentar consertar reconstruindo o conteúdo de memória em vez de restaurar de uma fonte confiável. As três coisas abaixo evitam isso na origem, não depois do estrago.

## Regra 1 — Dry-run sempre, antes de qualquer script novo tocar em arquivos reais

Nunca rode pela primeira vez, contra os arquivos de verdade, um script que apaga, sobrescreve ou move mais de um arquivo por vez baseado em padrão (regex, extensão, nome, "arquivos que parecem X"). Antes:

1. Rode o script em modo "só imprime o que faria" (`--dry-run`, ou literalmente troque o `os.remove`/`shutil.move` por um `print` temporário) e liste TODOS os arquivos que seriam afetados.
2. Leia a lista inteira, não só os primeiros. Se a lista tiver mais itens do que você esperava pelo pedido original, pare — a lógica pegou algo que não devia (é exatamente esse tipo de regex largo demais que já causou perda de dado antes).
3. Só depois da lista bater com a expectativa, rode de verdade.

Isso vale mesmo pra scripts "óbvios" — o bug que já acontecia não era num script complexo, era um regex de "encontra duplicado" simples demais que também capturou o que não devia.

## Regra 2 — Backup antes, não recriação depois

Antes de rodar qualquer script/ação em lote contra uma pasta que você não tem como restaurar via Git (ver Regra 3), copie a pasta inteira pra um destino separado com timestamp:

```
cp -r <pasta-alvo> <pasta-alvo>.bak-$(date +%Y%m%d-%H%M%S)/
```

Isso é barato e automático — não precisa ser pedido. Se a ação der errado, a correção é restaurar do backup, não "reconstruir com base no que eu lembro que tinha lá". Reconstrução de memória só é aceitável quando não existe backup NEM controle de versão — e mesmo assim, ver Regra 4 sobre como reportar isso.

## Regra 3 — Qualquer pasta que você edita/apaga repetidamente precisa estar sob Git

Se uma pasta é alvo recorrente de scripts de limpeza, edição em lote, ou qualquer automação sua (não só o repositório do projeto principal — isso inclui suas próprias pastas de ferramentas, configuração, biblioteca de skills), ela precisa ter `git init` e commits regulares, do mesmo jeito que você já exige isso de um projeto antes de mexer nele (ver `release-readiness`). Sem isso, todo erro seu vira permanente ou vira reconstrução de memória — com Git, vira `git checkout -- <arquivo>` em segundos.

## Regra 4 — "Restaurado" e "recriado" não são a mesma palavra

No seu relatório, nunca marque como ✅ concluído/restaurado algo que você reconstruiu de memória sem confirmar contra uma fonte real (backup, Git, ou o que a pessoa te enviou originalmente). Reporte como:
- **Restaurado**: veio de um backup, Git, ou cópia confirmada byte a byte com a original.
- **Recriado (não verificado)**: você escreveu de novo com base no que lembrava ou inferia do contexto — sinalize isso explicitamente como conteúdo que pode ter divergido do original, e recomende que seja conferido antes de confiar nele pra qualquer decisão.

Se alguma coisa foi perdida sem forma de restaurar, diga isso claramente ("perdido, sem backup, sem Git — reconstruí uma versão nova, mas não é garantido que bata com a original") em vez de reportar como se o problema estivesse resolvido.

## Regra 5 — Nome igual não é conteúdo igual

Antes de tratar qualquer arquivo como "duplicata" de outro (pra fins de deleção), confirme por hash (`md5sum`/`sha256sum` ou equivalente) que o conteúdo é idêntico — nunca decida só pelo nome do arquivo ou da pasta baterem. Isso vale tanto pra script automatizado quanto pra decisão manual sua no meio de uma limpeza.

## Antes de reportar qualquer limpeza como concluída

Confirme que passou pelas 5 regras acima e que nenhum item foi marcado ✅ que na verdade é "recriado sem verificação" ou "apagado sem a checagem que foi pedida antes". Se algo ficou pendente de verificação, reporte como pendente — não como resolvido com ressalva escondida numa nota de rodapé.
