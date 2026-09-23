# Skill: Test & Debug Toolkit

Coleção de prompts e workflows para testes, debugs, performance e análisis de código.
Use quando o usuário pedir para rodar testes, debugar erros, verificar performance, ou criar suite de testes.

---

## Tabela de Roteamento

| Tarefa | Seção | Prompt-chave |
|---|---|---|
| Criar testes de contrato de API | [Testes de Contrato](#testes-de-contrato-api) | Zod schemas, validação success/error |
| Criar unit tests (service CRUD) | [Unit Tests](#unit-tests-serviço-crud) | Vitest, mocks no repositório |
| Criar integration tests REST | [Integration Tests](#integration-tests-rest) | Supertest, DB real, JWT auth |
| Criar E2E tests | [E2E Tests](#e2e-tests-playwright) | Playwright, 3 viewports |
| Testes visuais (regressão) | [Visual Regression](#visual-regression-testing) | Playwright toHaveScreenshot |
| Criar factories de dados | [Test Data Factories](#test-data-factories) | Fishery-style, type-safe |
| Debugar erro/exception | [Root Cause Analysis](#root-cause-analysis) | Análise de stack trace |
| Debugar performance | [Performance Debug](#performance-debug) | Core Web Vitals, traces |
| Debugar memory leak | [Memory Leak Debug](#memory-leak-debug) | Heap snapshots, retainer chains |
| Debugar CSS layout | [CSS Debug](#css-debug-layout) | Box model, formatting contexts |
| Debugar race condition | [Race Condition Debug](#race-condition-debug) | Async interleaving |
| Debugar API integration | [API Debug](#api-integration-debug) | Network tab, curl, CORS |

---

## Testes de Contrato API

**Quando usar:** Criar testes que garantem que respostas da API seguem um schema acordado.

### Prompt

```
Set up API contract tests in TypeScript that guarantee responses match an agreed
schema, using Zod (or JSON Schema) as the single source of truth.

For each endpoint, define the response schema precisely: required vs optional
fields, types, nested object and array-item shapes, enum values, nullability,
and formats (uuid, email, ISO date).

Write tests that hit the running API and parse every response through its schema,
failing on any extra, missing, or mistyped field — and assert that the success
shape AND the error shapes (400/401/404/422/500) all conform to their contracts,
since error formats are what drift the most.

Ideally derive the same Zod schemas the SERVER uses for runtime validation so the
contract can't silently diverge from the implementation, and generate
OpenAPI/JSON-Schema docs from them.

Add a test that fails loudly when the API starts returning an undocumented field.

Done when:
- Every endpoint's success and error responses are validated against an explicit schema
- The schemas are shared with (not duplicated from) the server
- A contract-breaking change fails CI
- The API docs are generated from the schemas rather than hand-written
```

### Checklist de Implementação

- [ ] Criar `schemas/` com Zod schemas para cada endpoint
- [ ] Schema compartilhado entre server e testes
- [ ] Testes de success shape E error shapes
- [ ] Teste de campo não documentado
- [ ] Geração de OpenAPI/JSON-Schema
- [ ] CI quebrar em contract change

---

## Unit Tests — Serviço CRUD

**Quando usar:** Criar suite de unit tests para um serviço com CRUD via repositório.

### Prompt

```
Write a thorough unit-test suite in TypeScript with Vitest (or Jest) for a
UserService that performs CRUD over a repository.

Test BEHAVIOR, not implementation:
- create (valid input, duplicate email rejected, validation errors)
- read (by id, not-found, paginated list)
- update (partial update, optimistic-concurrency conflict)
- delete (soft delete sets the flag, cascade/guard checks)

Mock ONLY the repository/DB boundary (via vi.mock or dependency injection) so the
service's own logic runs for real, and assert on both the return values and the
calls made to the mock (arguments and call count).

Use describe blocks, beforeEach/afterEach for isolated state, and an
arrange-act-assert structure with descriptive test names that read as
specifications.

Include error-path tests (the repo throws → the service maps it to a domain error)
and at least one snapshot of a response shape.

Avoid the anti-patterns:
- No shared mutable state across tests
- No asserting on private internals
- No over-mocking that ends up testing the mock instead of the code

Done when:
- The suite is deterministic and order-independent
- Covers happy and error paths for every method
- Exceeds 90% coverage on the service
- The test names alone document the behavior
```

### Checklist de Implementação

- [ ] Arrange-Act-Assert em cada teste
- [ ] describe/it com nomes descritivos
- [ ] Mock apenas na borda do repositório
- [ ] Testes de happy path E error path
- [ ] Snapshot de response shape
- [ ] beforeEach/afterEach para estado isolado
- [ ] Coverage > 90%

---

## Integration Tests — REST

**Quando usar:** Criar testes de integração que exercitam a API real com banco de dados real.

### Prompt

```
Write integration tests in TypeScript (Vitest/Jest + Supertest) that exercise a
REST resource (e.g. /api/posts) through the REAL HTTP stack and a real test
database — mock nothing below the route handler.

Cover the full matrix:
- GET list with pagination and filtering
- GET one (found and 404)
- POST (valid → 201, validation error → 422, unauthenticated → 401)
- PUT (owner can update, non-owner → 403, missing → 404)
- DELETE (owner and admin-override, plus idempotency)
- Assert the consistent error envelope on every failure path

Use a real PostgreSQL test database — Testcontainers or a dedicated test DB —
migrated once and reset between tests (transaction rollback or truncate) so tests
are isolated and parallel-safe.

Provide an auth helper that mints valid JWTs for seeded test users of each role.

Assert the status, the body shape, AND any side effect in the database.

Done when:
- The suite runs against a fresh database
- Each test is independent of execution order and of other tests' data
- Every status path including authorization is covered
- The error response format is verified against real responses rather than assumed
```

### Checklist de Implementação

- [ ] DB de teste real (Testcontainers ou DB dedicado)
- [ ] Migração única + reset entre testes
- [ ] Helper de auth com JWTs por role
- [ ] Todos os status paths cobertos
- [ ] Error envelope consistente verificado
- [ ] Testes independentes e paralelizáveis

---

## E2E Tests — Playwright

**Quando usar:** Criar testes end-to-end para jornadas críticas do app.

### Prompt

```
Write end-to-end tests with Playwright + TypeScript for a web app's critical
journeys.

Cover:
- Registration (fill, submit, assert redirect to dashboard and persisted session)
- Login (valid credentials, wrong password shows error, remember-me)
- Creating an item (fill form, upload image, submit, assert it appears in list)
- Search/filter (type query, apply filters, assert results update and URL reflects state)

Run the create and search specs across desktop, tablet, and mobile viewport projects.

Make the tests ROBUST, not flaky:
- Select by user-facing roles and labels (getByRole/getByLabel), not brittle CSS selectors
- Rely on Playwright's auto-waiting and web-first assertions instead of fixed sleeps
- Isolate each test with its own data and fresh storage state
- Use a global setup to authenticate once and reuse the session where appropriate

Seed and clean test data via the API rather than clicking through the UI, for speed.

Capture a screenshot, video, and trace on failure.

Done when:
- The suite passes RELIABLY across all three viewports
- Contains no hard-coded waits
- Each test is independent
- A failure produces a trace that makes the cause obvious
```

### Checklist de Implementação

- [ ] 3 viewports: desktop, tablet, mobile
- [ ] getByRole/getByLabel (sem CSS selectors)
- [ ] Auto-waiting, sem fixed sleeps
- [ ] Dados via API, não UI
- [ ] Screenshot + video + trace on failure
- [ ] Storage state isolado por teste

---

## Visual Regression Testing

**Quando usar:** Criar testes visuais para detectar mudanças visuais indesejadas.

### Prompt

```
Set up visual regression testing for a component library using Playwright's
toHaveScreenshot (or Storybook + Chromatic).

Create stories/specs that render each component in every meaningful state:
- Button: default/hover/focus/active/disabled/loading across size variants
- Form: showing validation errors
- Modal: open, and with scrollable overflow content
- Data table: empty/loading/populated/error states
- Responsive navigation: desktop expanded vs mobile hamburger

Make the snapshots DETERMINISTIC:
- Freeze time and animations
- Disable transitions
- Wait for fonts and images to load
- Mask or stub dynamic content (dates, avatars, random data)
- Pin viewport, device-scale, and OS rendering
- Generate baselines inside the SAME container/CI image

Set a small comparison threshold for AA noise and document how to review and
intentionally update a baseline.

Wire a CI job that runs on PRs and uploads the diff images as artifacts.

Done when:
- An unintended visual change fails the PR with a clear diff
- Snapshots are stable across runs on CI
- Updating a baseline is a deliberate, reviewable step
```

---

## Test Data Factories

**Quando usar:** Criar sistema de factories para dados de teste, estilo Fishery/FactoryBot.

### Prompt

```
Build a typed test-data factory system in TypeScript (in the spirit of Fishery or
FactoryBot) for User, Post, and Comment.

Each factory produces a valid entity with faker-generated defaults, supports
overriding any field per call, exposes traits for common variants
(User.admin(), User.unverified()), and uses sequences for unique fields
(email, username) so no two built records collide.

Associations build their dependencies automatically — Post.create() creates and
links a User unless one is passed in — without infinite recursion, and support
batch creation (User.buildList(10)).

Provide BOTH:
- A pure build (in-memory, for unit tests)
- An async create that persists to the test database (for integration tests)
Sharing one definition.

Make it fully type-safe:
- Return type inferred from the factory definition
- Overrides type-checked against the entity
- Traits compose
- Invalid override caught at COMPILE time

Keep generated data deterministic when a seed is set so a failure reproduces.

Done when:
- Factories produce valid entities with unique sequenced fields
- Associations and traits compose without boilerplate
- Build and create share a single definition
- Inferred types catch an invalid override at COMPILE time
```

---

## Root Cause Analysis

**Quando usar:** Debugar erros/exceptions com stack trace.

### Prompt

```
Act as a senior engineer doing root-cause analysis.

Here is the error and full stack trace:
[paste error]

Here is the relevant code and the surrounding context:
[paste code]

Do NOT jump straight to a fix.

1. Restate what the error actually means at the language/runtime level
2. Identify the exact line and the specific value that triggered it
3. Enumerate plausible causes ranked by likelihood
4. For each cause: concrete, cheap way to confirm or rule it out
   (specific log line, breakpoint, or minimal repro)
5. When evidence points to one cause: SMALLEST correct fix
6. Explain why it addresses the root cause, not the symptom
7. Call out other places likely to carry the same latent bug
8. Tell what test would have caught this and prevent regression

If information is insufficient: tell exactly what to capture next, don't guess.
```

---

## Performance Debug

**Quando usar:** Debugar apps web lentos (>4s para interativo).

### Prompt

```
My web app is slow — it takes over 4 seconds to become interactive.

Act as a performance engineer and build a MEASUREMENT-FIRST plan; do not suggest
fixes before we have data.

1. Walk me through capturing a trace (Chrome DevTools Performance panel + Lighthouse)
2. How to read the flame chart: main-thread long tasks vs network vs rendering time
3. How to map what I see onto Core Web Vitals (LCP, INP, CLS)

For each common culprit, tell me:
- Heavy/duplicated JS → signature in trace + targeted fix
- Render-blocking resources → signature + fix
- Layout thrashing → signature + fix
- Oversized/unsized images → signature + fix
- Excessive DOM nodes → signature + fix
- Unbatched re-renders → signature + fix

Prioritized list ordered by expected impact vs effort:
1. Code splitting
2. Lazy loading
3. Correctly sized and modern-format images
4. Font-display strategy
5. Caching and compression headers
6. Memoization

Insist on measure before AND after each change.

Done when:
- I can point to the specific bottleneck in my own trace
- Apply the matching fix
- Show the relevant metric improved
```

---

## Memory Leak Debug

**Quando usar:** Debugar memory leaks em apps JavaScript/TypeScript.

### Prompt

```
Help me find and fix a memory leak in my JavaScript/TypeScript app — memory grows
steadily over time and never recovers.

Work EMPIRICALLY.

1. Taking heap snapshots and using the allocation timeline
2. Comparing two snapshots to find objects that should have been collected but were retained
3. Reading a retainer chain back to the exact reference pinning them

Map evidence onto usual root causes:
- Detached DOM nodes
- Event listeners or subscriptions never removed
- Intervals/timeouts not cleared
- Closures capturing large scopes
- Caches or Maps that only ever grow
- React stale closures or missing cleanup in useEffect

For each, show:
- The pattern that causes it
- The corrected pattern that prevents it

Hammer on: every subscription, listener, observer, and timer needs a matching teardown.

Done when:
- I can identify the specific retained object and its retainer chain
- Apply the matching cleanup
- Confirm memory returns to baseline after repeating the suspect interaction
```

---

## CSS Debug Layout

**Quando usar:** Debugar layouts CSS quebrados.

### Prompt

```
My CSS layout is broken: [describe the issue]

Here is the markup and the styles:
[paste code]

Debug it METHODICALLY, not by trial and error.

1. Explain the box-model and formatting-context concepts governing this case:
   - content-box vs border-box
   - margin collapsing
   - block vs flex vs grid formatting contexts
   - stacking contexts: how created, why z-index can be trapped

2. Show what to inspect in DevTools:
   - Computed styles
   - Box-model diagram
   - Flex/grid overlays
   - Where real width/height/offset diverges from expected

3. Corrected CSS with comment on each change naming the cause

4. Flag fixes that only work by coincidence (magic numbers) vs robust fixes

Done when:
- Layout holds from 320px to wide desktop with no overflow
- I understand WHICH property was the actual cause
```

---

## Race Condition Debug

**Quando usar:** Debugar race conditions em async JavaScript.

### Prompt

```
I think my app has a race condition: [describe the symptom]

Help me reason about it PRECISELY.

1. Explain how races arise in async JavaScript without threads:
   - Overlapping fetches resolving out of order
   - State updates computed from a stale closure
   - Effects firing before prior async operation settles
   - Shared mutable state mutated from concurrent handlers

2. Pin down the exact interleaving producing my symptom:
   - Which async operations can overlap
   - What ordering breaks the invariant

3. Concrete fixes matched to the cause:
   - AbortController for cancelling stale work
   - Tagging requests and checking latest request id
   - Mutex or queue for serialization
   - Functional state updates instead of read-then-write
   - Debounce rapid triggers
   - Optimistic locking/versioning for server state

Done when:
- We have NAMED the specific interleaving triggering the bug
- Chosen the fix that closes that exact window
- Identified a way to reproduce deterministically
```

---

## API Integration Debug

**Quando usar:** Debugar integrações com APIs externas que falham.

### Prompt

```
My API integration is failing:
- API: [describe]
- Request: [what I send]
- Response/Error: [what I get]
- Expected: [what I expected]

Debug it SYSTEMATICALLY and isolate which side is at fault.

1. Inspect real request in Network tab:
   - Method, full URL, every header, body
   - Actual response status and payload

2. Reproduce OUTSIDE the app with curl/Postman
   (so we know if bug is client-side or server-side)

3. Compare request against API docs field by field

4. Cover usual suspects with their tells:
   - CORS and preflight (OPTIONS) handshake
   - Auth header format and token expiry
   - Content-Type vs actual body
   - URL-encoding and trailing-slash issues
   - Pagination and rate-limit responses
   - API versioning

5. If CORS: explain why browser-enforced and how to fix on server
   (show correct server headers + client-side change)

Done when:
- PROVEN whether failure is client- or server-side via out-of-app reproduction
- Identified the specific mismatch
- Applied fix on the correct side
```

---

## Como Usar Esta Skill

### Para criar uma nova suite de testes:
1. Identificar o tipo de teste (contract/unit/integration/E2E/visual)
2. Copiar o prompt correspondente
3. Adaptar para o contexto do projeto
4. Executar e seguir o checklist

### Para debugar:
1. Identificar o tipo de problema (erro/perf/memory/CSS/race/API)
2. Copiar o prompt correspondente
3. Colocar o erro/código/contexto nos placeholders
4. Seguir a metodologia passo a passo

### Para o FN Dash Loja especificamente:
- Unit tests: `tests/unit/` (Vitest)
- Integration tests: `tests/integration/` (Vitest)
- E2E tests: `tests/e2e/` (Playwright)
- Visual tests: `tests/visual/` (Playwright)
- Run: `npx vitest run` ou `npx playwright test`
