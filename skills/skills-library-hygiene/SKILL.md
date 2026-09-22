> Segue também as regras de `destructive-operations-safety` (dry-run, backup, Git, distinção restaurado/recriado, hash antes de chamar de duplicata) — não repita essa lógica aqui, só aplique.

# Skills Library Hygiene

Diagnostica e corrige redundância na pasta skills/ (zips soltos já extraídos, repositórios GitHub inteiros baixados quando só uma skill lá dentro interessa, duplicatas entre repositório-dump e skill já promovida ao nível raiz).

## Trigger

Use ao adicionar uma nova skill/pacote de skills, ou sempre que a pasta skills/ crescer visivelmente sem organização — mesmo sem pedido explícito de limpeza.

## Passo 0 — Ao baixar um pacote/repositório que contém uma ou mais skills

1. Nunca deixe o .zip original ao lado da pasta já extraída — escolha um dos dois e apague o outro no mesmo commit/ação.
2. Nunca deixe um repositório GitHub inteiro (com src/, tests/, CI, lockfiles) sentado dentro de skills/ só porque uma ou duas skills estão enterradas lá dentro. Extraia CADA skill individual (a pasta que contém o SKILL.md) pro nível raiz de skills/, com o nome dela, e apague o resto do repositório.
3. Antes de apagar o repositório-dump, confirme por hash que cada SKILL.md relevante já foi promovido corretamente — não confie só no nome da pasta.

## Passo 1 — Antes de apagar qualquer coisa "não relevante ao projeto atual"

- Se o ambiente de skills é compartilhado entre múltiplos projetos, "não relevante a ESTE projeto" não é critério de remoção. Critério é: nunca foi promovido a lugar nenhum E ninguém confirma uso em nenhum projeto.
- Pergunte antes de apagar qualquer pacote temático inteiro (ex: um pacote de skills de áudio/vídeo, marketing, etc.) só por não ter uso óbvio no projeto que você está atendendo agora.

## Passo 2 — Nomes duplicados com conteúdo diferente

- Se duas skills têm o mesmo nome (mesmo diretório) mas conteúdo diferente entre uma cópia promovida e uma dentro de um repositório-dump, isso é um conflito, não uma duplicata — pare e descubra qual está sendo carregada de fato antes de escolher uma.

## Saída

Reporte, por pacote/repositório baixado: quantas skills foram promovidas ao nível raiz, quantas eram duplicata confirmada (apagadas), quantas ficaram pendentes de confirmação de uso (não apagadas), e o espaço total liberado.
