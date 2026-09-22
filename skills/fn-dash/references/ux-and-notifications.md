# Notificações, Acessibilidade, Erros

## Sistema de notificações (central, único)

Todo alerta de qualquer módulo (parcela vencendo, conta recorrente, estoque baixo, MRR, domínio/hospedagem, manutenção de carro) passa pelo MESMO sistema central — nenhum módulo implementa seu próprio popup/alerta isolado.

- Push notification via browser Notification API.
- Lembretes diários automáticos (checagem agendada, não só ao abrir o app).
- Compartilhamento de alerta via WhatsApp e via Email — botão padrão em qualquer card de alerta.

---

## Tratamento de erros (global, único)

- `window.onerror` global.
- `unhandledrejection` handler global.
- Interceptação de `fetch` com log de erros — usar isso para diagnosticar falhas de sync/API, não logar só no console.
- `safeAsync()` — wrapper padrão para qualquer operação assíncrona que pode falhar (chamada Supabase, upload, export). Toda função async nova deve passar por ele, não criar try/catch ad-hoc espalhado.
- Toast de erro visível ao usuário sempre que `safeAsync` capturar uma falha — nunca falhar silenciosamente.
- Error boundary para evitar tela branca em caso de erro de render.

### Implementação do safeAsync

```javascript
function safeAsync(fn, fallback) {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (e) {
      console.error('Safe async error:', e);
      if (fallback) return fallback;
      showToast('Operação falhou. Tente novamente.', 'error');
    }
  };
}
```

---

## Acessibilidade (checklist para toda tela nova)

- [ ] Focus trap em modais.
- [ ] `aria-live` para anúncios dinâmicos (ex: "produto salvo", "3 alertas novos").
- [ ] Navegação completa por teclado (tab order lógico, sem armadilhas de foco fora de modal).
- [ ] Respeitar `prefers-reduced-motion`.
- [ ] Roles ARIA corretos em elementos interativos custom (não usar `<div onClick>` sem role).
- [ ] Labels em TODO input, sem exceção.
- [ ] Contraste adequado mesmo no dark mode "Purple Noir" (roxo sobre preto pode falhar contraste — testar).

### Implementação de Focus Trap

```javascript
function trapFocus(container) {
  const focusable = container.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return () => {};

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  function handleTab(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  container.addEventListener('keydown', handleTab);
  first.focus();

  return () => {
    container.removeEventListener('keydown', handleTab);
  };
}
```

### Live Region para screen readers

```javascript
function announceToScreenReader(message, priority = 'polite') {
  const liveRegion = document.getElementById('sr-live-region') || createLiveRegion();
  liveRegion.setAttribute('aria-live', priority);
  liveRegion.textContent = message;
}
```
