# Offline, PWA e Mobile

## PWA

- `manifest.json`: nome, ícones (incluindo ícone maskable), cores do design system (`--bg`, `--accent`).
- `display: standalone` para abrir em tela cheia no celular.
- Service Worker cacheia os ativos estáticos do app (app shell) para load instantâneo mesmo offline.

```json
{
  "name": "FinDash — Dashboard Financeiro",
  "short_name": "FinDash",
  "display": "standalone",
  "background_color": "#08080d",
  "theme_color": "#08080d",
  "icons": [
    { "src": "favicon.png", "sizes": "256x256", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

---

## Modo offline

- Dados ficam disponíveis via `localStorage` como cache local quando não há conexão.
- **Toda escrita** (criar/editar/deletar registro em qualquer módulo) passa pela **fila de mutação** (mutation queue), nunca grava direto no Supabase de forma otimista sem passar pela fila — isso é o que garante que nada se perde ao ficar offline no meio de uma ação.
- Quando a conexão volta: a fila processa as mutações pendentes em ordem, com até 3 tentativas automáticas por mutação antes de marcar como falha e alertar o usuário.
- Durante o processamento da fila, silenciar (mute) o listener de Realtime (ver `data-model.md`) para não reprocessar em loop a própria escrita.

### Ao criar um módulo/tela nova
Toda operação de escrita nova deve ser registrada na fila de mutação usando o mesmo formato das existentes (tipo de operação, payload, timestamp, tentativas) — não inventar um mecanismo de persistência paralelo "só para essa tela".

### Formato da fila de mutação

```javascript
mutationQueue.push({
  id: Date.now() + '_' + Math.random().toString(36).slice(2,8),
  type: 'upsert_data',       // tipo de operação
  payload: { ... },           // dados a sincronizar
  timestamp: new Date().toISOString(),
  retries: 0                  // tentativas (máx 3)
});
```

---

## Capacitor (Android/iOS)

- Build Android via Capacitor gera APK (versionar builds: v1.0, v1.1... — manter histórico de versões).
- Config iOS mantida em pasta própria (`fndash-ios`), com scripts de build dedicados (ex: `build-ios-quick.bat`, `setup-ios.bat`).
- O app mobile é o MESMO build web empacotado — nunca duplicar lógica de negócio para uma versão "mobile-only"; diferenças ficam só em camada de apresentação/responsividade (ver `design-system.md`).
