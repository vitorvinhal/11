# Formulários, Dados e Mutações

## Formulários

- Padrão: `react-hook-form` + `zod` (via `@hookform/resolvers/zod`) + os componentes `Form*` do shadcn (`components/ui/form.tsx`, que já integra os três).
- Schema de validação em `zod` é a fonte única de verdade do formato dos dados — tipar o form a partir do schema (`z.infer<typeof schema>`), não escrever a interface TypeScript do form separada e torcer pra ficar igual.
- Mensagem de erro de validação vem do schema (`.min(1, "Campo obrigatório")` etc.), não hardcoded no JSX do componente.

## Busca de dados (leitura)

- Server Component busca dados direto (`await fetch(...)` ou chamada de DB/ORM direto no componente async) — não criar uma API route interna só pra um Server Component chamar a si mesmo.
- Client Component que precisa de dados dinâmicos (refetch, cache client-side, polling): usar uma lib de data-fetching (`@tanstack/react-query` ou `swr`) em vez de `useEffect` + `fetch` manual — evita boilerplate de loading/error repetido em cada componente.
- Evitar water-fall de fetches sequenciais quando dá pra paralelizar (`Promise.all`) — comum em Server Components que buscam múltiplos recursos pra montar uma página.

## Mutações (escrita)

- Preferir **Server Actions** (`"use server"`) para mutações disparadas de dentro do próprio app (submit de formulário, botão de ação) — integra direto com `useFormState`/`useActionState` e revalida cache sem precisar de API route + fetch client manual.
- Usar **Route Handler** (`app/api/.../route.ts`) só quando o consumidor é externo ao app (webhook de terceiro, mobile app separado, integração) — não para toda mutação por padrão.
- Depois de uma mutação que muda dado exibido em outra parte do app, chamar `revalidatePath`/`revalidateTag` (Server Action) ou invalidar a query (React Query) — não confiar em refresh manual da página.

## Estado

- Estado de servidor (dado que vem do banco) NÃO é estado de React — não copiar pra `useState` "pra facilitar", buscar via Server Component ou lib de data-fetching.
- Estado de UI local (modal aberto, aba selecionada, valor de input controlado) fica em `useState` simples no componente client mais próximo de onde é usado.
- Estado compartilhado entre vários componentes distantes: `useContext` para casos simples; só introduzir uma lib de state management global (Zustand, Jotai etc.) quando o projeto realmente tiver esse tipo de necessidade — não por padrão.

## Erros e loading

- `loading.tsx` por rota para loading de navegação (ver `project-structure.md`); `useFormState`/`useActionState` retorna estado de pending pra loading de submit de formulário — evitar spinner manual controlado por `useState` quando o framework já resolve.
- `error.tsx` por rota para erro de renderização; `try/catch` dentro de Server Action retornando um objeto de erro tipado para o form tratar — não deixar Server Action estourar exceção sem tratamento pro usuário.