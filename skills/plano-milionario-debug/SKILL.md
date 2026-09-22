# Skill: Plano Milionario Debug

## Quando Usar

Use esta skill quando o usuario pedir para:
- Rodar testes ou debugs no Plano Milionario
- Corrigir erros ou bugs
- Gerar relatorios de debug
- Verificar performance
- Testar funcionalidades

## Fluxo de Debug

### 1. Coletar Informacoes
- Versao atual do sistema
- Erros no console do navegador
- Comportamento esperado vs atual
- Prints/screenshots se possivel

### 2. Executar Debugs

#### Debug 1: Root Cause Analysis
```
1. Identificar o erro exato e a linha
2. Analisar o valor que causou o erro
3. Listar causas provaveis (ordenadas por likelihood)
4. Para cada causa: metodo barato para confirmar/rejeitar
5. Quando encontrar a causa: menor correcao correta
6. Verificar se o mesmo bug existe em outros lugares
7. Teste que teria pegado este bug
```

#### Debug 2: Performance
```
1. Medir tempo de carregamento atual
2. Identificar bottleneck principal:
   - JavaScript pesado/duplicado
   - Render-blocking resources
   - Layout thrashing
   - Imagens grandes/nao dimensionadas
   - DOM excessivo
3. Aplicar fix e medir novamente
4. Documentar melhoria
```

#### Debug 3: Memory Leak
```
1. Verificar crescimento de memoria no DevTools
2. Identificar objetos retidos
3. Verificar:
   - Event listeners nao removidos
   - Intervals/timeouts nao limpos
   - Closures capturando escopos grandes
   - Caches que so crescem
4. Aplicar cleanup e confirmar
```

#### Debug 4: CSS Layout
```
1. Identificar elemento com problema
2. Verificar box-model no DevTools
3. Verificar formatting context (block/flex/grid)
4. Testar de 320px a desktop
5. Corrigir causa raiz, nao sintoma
```

#### Debug 5/6: Race Condition
```
1. Identificar operacoes async que podem sobrepor
2. Mapear interleaving que causa o bug
3. Aplicar fix:
   - AbortController para cancelar trabalho obsoleto
   - Tag de request para ignorar respostas desatualizadas
   - Mutex/queue para serializar
   - State updates funcionais
4. Reproduzir determinismicamente
```

### 3. Testes

#### Teste 1: Unit Tests
```
- Testar comportamento, nao implementacao
- Mock apenas boundary de DB/repositorio
- Assertions em return values e chamadas ao mock
- Covers happy path e error paths
- 90%+ coverage
```

#### Teste 2: Integration Tests
```
- Testar HTTP real + DB real
- Cobrir: GET, POST, PUT, DELETE
- Testar autenticacao e autorizacao
- Validar formato de erro
- Cada teste independente
```

#### Teste 3: E2E Tests
```
- Testar jornadas criticas
- Usar getByRole/getByLabel (nao CSS selectors)
- Auto-waiting do Playwright
- Dados de teste via API, nao UI
- Screenshots e traces em caso de falha
```

#### Teste 4: API Contract Tests
```
- Validar responses contra schema (Zod)
- Testar success E error shapes
- Schema compartilhado com server
- Falha em CI quebra contract
```

#### Teste 5: Visual Regression
```
- Snapshots deterministicos
- Freeze time e animations
- Pin viewport e device-scale
- Threshold para AA noise
- CI job que falha em PR
```

#### Teste 6: Test Data Factories
```
- Factory para cada entidade
- Traits para variantes comuns
- Sequencias para campos unicos
- build (in-memory) e create (persist)
- Tipo inferido do factory
```

### 4. Gerar Relatorio

Formato do relatorio:
```markdown
# Relatorio de Debug — Plano Milionario
Data: YYYY-MM-DD HH:MM
Versao: v0.1-beta

## Resumo
- Erros encontrados: X
- Corrigidos: X
- Pendentes: X

## Debugs Executados
1. [DEBUG 1] Root Cause Analysis — Status: ✅/❌
2. [DEBUG 2] Performance — Status: ✅/❌
...

## Testes Executados
1. [TESTE 1] Unit Tests — Coverage: XX%
2. [TESTE 2] Integration Tests — Status: ✅/❌
...

## Correcoes Aplicadas
- Erro X: Corrigido em arquivo.js:linha
- Erro Y: Corrigido em arquivo.js:linha

## Proximos Passos
- [ ] Pendencia 1
- [ ] Pendencia 2
```

### 5. Deploy

Apos correcoes:
1. Verificar se todas as correcoes estao salvas
2. Fazer commit das alteracoes
3. Push para o repositorio
4. Vercel faz deploy automatico
5. Verificar se o deploy foi bem sucedido
6. Testar em producao

## Arquivos do Projeto

- `plano-milionario/index.html` — HTML principal
- `plano-milionario/css/design-system.css` — Design system
- `plano-milionario/js/config.js` — Configuracao das loterias
- `plano-milionario/js/analyzer.js` — Motor estatistico
- `plano-milionario/js/generator.js` — Gerador de jogos
- `plano-milionario/js/score.js` — Sistema de pontuacao
- `plano-milionario/js/diversity.js` — Controle de diversidade
- `plano-milionario/js/app.js` — App principal

## Deploy Domain

- **URL**: https://findash-e4f52wx08-vitorvinhal90-8297s-projects.vercel.app
- **Branch**: main
- **Build**: Estatico (HTML/CSS/JS)