---
name: accessibility-audit
description: Audita e corrige acessibilidade (contraste, navegação por teclado, leitores de tela, foco, aria) em QUALQUER projeto de interface (não específico de um sistema). Use SEMPRE que o usuário pedir para "testar acessibilidade", "checar contraste", "navegação por teclado", "suporte a leitor de tela", ou como parte da seção de responsividade de `qa-testing-playbook` quando o projeto tiver uma UI real — mesmo que o usuário não peça "acessibilidade" explicitamente ao pedir para revisar uma tela ou componente novo.
---

# Auditoria de Acessibilidade (geral, multi-projeto)

Complementa o item de responsividade de `qa-testing-playbook` — responsivo não é o mesmo que acessível. Esta skill cobre o que falta: quem usa teclado, leitor de tela, ou tem baixa visão.

## 1. Contraste de cor

- Todo par texto/fundo precisa atingir a razão de contraste mínima do WCAG AA (4.5:1 para texto normal, 3:1 para texto grande/negrito e para elementos de UI como bordas de input e ícones informativos).
- Teste especialmente estados que costumam ser esquecidos: texto placeholder, texto desabilitado, texto sobre imagem/gradiente, e **ambos** os temas se o projeto tiver alternância claro/escuro — um tema pode passar no teste e o outro não.
- Não confie só em "parece legível" — meça a razão de contraste real (ferramenta de contraste, ou cálculo automatizado no processo de teste).

## 2. Navegação por teclado

- Todo elemento interativo (botão, link, campo, item de menu, card clicável) precisa ser alcançável via Tab, na ordem visual esperada, sem "buracos" (elemento que só funciona com clique de mouse) nem armadilhas de foco (um modal que prende o Tab dentro dele até ser fechado — isso é esperado; um elemento comum que prende o foco sem motivo não é).
- Todo elemento com foco precisa ter indicação visual clara de que está focado (outline visível, não removido por `outline: none` sem substituto).
- Ações acionáveis por clique (`onClick` em uma `div`, por exemplo) precisam também responder a Enter/Espaço quando o elemento recebe foco — ou, melhor, usar elementos nativos (`button`, `a`) que já fazem isso.
- Modais, dropdowns e menus precisam fechar com Esc e devolver o foco para o elemento que os abriu ao fechar.

## 3. Leitor de tela

- Toda imagem informativa tem `alt` descritivo; imagens puramente decorativas têm `alt=""` (não omitido, para não serem anunciadas de forma confusa).
- Todo input tem `label` associado (não só placeholder — placeholder some ao digitar e muitos leitores de tela não o tratam como label).
- Conteúdo que muda dinamicamente sem interação direta do usuário (toast, contador, resultado de busca ao vivo) usa `aria-live` para ser anunciado — sem isso, quem usa leitor de tela não sabe que algo mudou na tela.
- Ícones usados sozinhos como botão (sem texto visível) têm `aria-label` descrevendo a ação, não o nome do ícone (ex: "Excluir item", não "ícone de lixeira").
- Elementos puramente visuais/estruturais (divisores decorativos, wrappers sem função) não devem gerar ruído para leitor de tela (`aria-hidden="true"` quando apropriado).

## 4. Estrutura semântica

- Hierarquia de headings (`h1`→`h2`→`h3`) reflete a estrutura real da página, sem pular níveis por motivo puramente visual (usar CSS para tamanho, não trocar a tag por causa do tamanho desejado).
- Elementos nativos (`button`, `nav`, `main`, `table` para dado tabular) preferidos sobre `div`/`span` genéricos com role reinventado via JS.

## 5. Teste

- Automatizado: rode uma ferramenta de auditoria automática (ex: axe, ou o audit de acessibilidade do Lighthouse) nas telas principais como primeira passada — pega boa parte dos problemas óbvios, mas não pega tudo.
- Manual (obrigatório, automatizado não substitui): navegue as telas principais só com teclado (sem mouse) do início ao fim de um fluxo real (ex: criar um registro, editar, apagar). Se travar ou perder o foco em algum ponto, é um bug real.
- Se possível, teste com um leitor de tela real (VoiceOver, NVDA, TalkBack) em pelo menos o fluxo principal — a diferença entre "tem aria-label" e "faz sentido ouvido em sequência" só aparece ouvindo de verdade.

## Saída

Reporte por tela/componente: problemas de contraste com os pares de cor específicos, pontos onde a navegação por teclado quebra, elementos sem label/alt/aria-live necessário. Isso alimenta tanto `release-readiness` quanto qualquer skill de design system do projeto (para corrigir na origem, não só no componente que falhou).