# Estrutura de Projeto & App Router

## Estrutura de pastas padrão

```
app/
  layout.tsx            # root layout — <html>, <body>, providers globais
  page.tsx               # rota "/"
  globals.css            # tailwind base + tokens de tema
  (grupo)/                # route groups para organizar sem afetar a URL
    dashboard/
      page.tsx
      layout.tsx          # layout específico da seção
  api/
    <recurso>/route.ts     # route handlers (GET/POST/etc)
components/
  ui/                     # gerado pelo shadcn — não editar a lógica interna
  <feature>/              # componentes específicos de uma feature/tela
lib/
  utils.ts                # cn() e outros helpers puros
  <integração>.ts          # clients (db, auth, api externa)
hooks/
  use-<algo>.ts
types/
  <domínio>.ts
```

Componente usado em UMA tela só: fica dentro da pasta da rota (colocation), ao lado do `page.tsx`. Componente reutilizado em 2+ lugares: sobe pra `components/<feature>/`.

## Server vs Client Components

- Padrão é Server Component — sem diretiva no topo do arquivo.
- `"use client"` é necessário quando o componente usa: `useState`, `useEffect`, outros hooks de React, event handlers (`onClick`, `onChange`), APIs de browser (`window`, `localStorage`), ou uma lib de terceiros que depende de client (ex: bibliotecas de gráfico interativo).
- Empurre `"use client"` para a FOLHA da árvore de componentes, não para a raiz. Um layout inteiro não precisa ser client só porque um botão dentro dele tem `onClick` — isole o botão interativo em seu próprio componente client e mantenha o resto como server.
- Server Components podem importar e renderizar Client Components, mas não o contrário direto (client não importa server component como filho da mesma forma — passa via `children`/props se precisar).
- Nunca usar hooks de estado/efeito dentro de um Server Component — vai quebrar o build.

## Layouts e metadata

- `layout.tsx` compartilha UI entre rotas irmãs sem re-renderizar em navegação — usar para sidebar, header, providers de contexto que não mudam por página.
- `metadata` (export estático) ou `generateMetadata` (dinâmico) em cada `page.tsx`/`layout.tsx` para SEO — não usar `<Head>` do Pages Router, não existe mais no App Router.
- `loading.tsx` e `error.tsx` por rota para estados de carregamento/erro automáticos do Next — preferir isso a spinner manual dentro do componente quando o carregamento é da navegação/fetch da página inteira.

## Route Handlers (`app/api/.../route.ts`)

- Usar para endpoints que precisam ser chamados por fora (webhooks, integrações externas) ou por client components que não podem chamar Server Actions.
- Exportar funções nomeadas por método HTTP: `export async function GET(req) {}`, `POST`, etc.
- Não usar route handler para mutação disparada só de dentro do próprio app quando Server Action resolve mais simples (ver `forms-and-data.md`).

## Imports e paths

- Usar alias `@/` (configurado em `tsconfig.json`) para imports absolutos a partir da raiz — evitar `../../../` encadeado.