# Componentes (shadcn/ui) & Estilo (Tailwind)

## Adicionar componentes shadcn/ui

- Sempre via CLI: `npx shadcn add <componente>` — nunca copiar/colar código de componente shadcn manualmente de memória, a CLI resolve versão, dependências (Radix) e o `cn()` corretamente.
- Componente instalado vive em `components/ui/<nome>.tsx` e é considerado código do projeto (pode editar), mas edições devem ser em cima do padrão gerado, não uma reescrita do zero.

## Composição em vez de props extras

Preferir compor componentes existentes (`<Card><CardHeader/><CardContent/></Card>`) a criar uma prop nova tipo `variant="special-card-for-this-one-screen"` dentro do primitivo genérico. Se uma tela precisa de um card muito diferente, criar um componente novo em `components/<feature>/` que usa o `Card` base por dentro, em vez de inchar o primitivo genérico com casos especiais.

## Variantes com `class-variance-authority` (cva)

Para componentes com múltiplas variantes visuais (tamanho, cor, estado), usar `cva` — é o padrão que o próprio shadcn usa nos componentes gerados (ex: `button.tsx`). Não criar um sistema de variante paralelo com ternários encadeados de `className`.

## `cn()` — util central

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
Usar `cn()` sempre que uma classe pode variar por prop/estado/condição. Para classes 100% estáticas, string direta é suficiente.

## Tema e tokens

- Cores, radius, fontes: definidos como CSS custom properties em `globals.css` e referenciados no `tailwind.config` (Tailwind v3) ou direto via `@theme` (Tailwind v4) — nunca hardcode de hex/px direto na classe quando o token já existe.
- Se o projeto tem uma identidade visual definida (ex: um design system específico do produto), os tokens desse sistema são a fonte de verdade — configurar aqui, não redefinir por componente.
- Dark mode: shadcn usa a estratégia `class` (`dark:` prefix + classe `dark` no `<html>`) — não misturar com `prefers-color-scheme` automático a menos que o produto explicitamente não precise de toggle manual.

## Ícones

- `lucide-react` é o padrão do ecossistema shadcn — usar para consistência de peso/estilo de ícone, não misturar com outra lib de ícones no mesmo projeto sem motivo.

## Responsividade

- Mobile-first: escrever a classe base pensando em mobile, adicionar `sm:`/`md:`/`lg:`/`xl:` para telas maiores — não o inverso.
- Reaproveitar os breakpoints padrão do Tailwind a menos que o projeto tenha breakpoints customizados definidos no config.

## Acessibilidade

- Componentes shadcn são construídos sobre Radix UI, que já cuida de foco, `aria-*` e navegação por teclado — preservar esse comportamento ao customizar (não sobrescrever handlers de teclado/foco do Radix sem necessidade real).
- Sempre `alt` em `<Image>`, sempre `label`/`aria-label` em inputs sem texto visível associado.