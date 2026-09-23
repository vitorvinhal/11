#!/usr/bin/env node
/**
 * Smoke test — 11
 * Valida endpoints críticos do app rodando localmente.
 *
 * Uso:
 *   node scripts/smoke-test.mjs [baseURL]
 *   BASE=http://localhost:3099 node scripts/smoke-test.mjs
 */

const BASE = process.argv[2] ?? process.env.BASE ?? 'http://localhost:3099';

let pass = 0;
let fail = 0;

async function check(name, fn) {
  try {
    const ok = await fn();
    if (ok) { pass++; console.log(`  ✓ ${name}`); }
    else { fail++; console.log(`  ✗ ${name}`); }
  } catch (err) {
    fail++;
    console.log(`  ✗ ${name} — ${err.message}`);
  }
}

function timeout(ms) {
  const c = new AbortController();
  setTimeout(() => c.abort(), ms);
  return c.signal;
}

console.log(`\nSmoke test — ${BASE}\n`);

await check('home responde 200', async () => {
  const r = await fetch(BASE, { signal: timeout(15000) });
  return r.status === 200;
});

await check('icon.svg existe', async () => {
  const r = await fetch(`${BASE}/icon.svg`, { signal: timeout(10000) });
  return r.ok && (await r.text()).includes('<svg');
});

await check('favicon.ico existe', async () => {
  const r = await fetch(`${BASE}/favicon.ico`, { signal: timeout(10000) });
  return r.ok;
});

await check('manifest.json válido (PWA)', async () => {
  const r = await fetch(`${BASE}/manifest.json`, { signal: timeout(10000) });
  if (!r.ok) return false;
  const m = await r.json();
  return Array.isArray(m.icons) && m.icons.length > 0;
});

await check('GET /api/health/router responde', async () => {
  const r = await fetch(`${BASE}/api/health/router`, { signal: timeout(60000) });
  if (!r.ok) return false;
  const d = await r.json();
  return typeof d.ok === 'boolean' && Array.isArray(d.cells);
});

await check('9Router acessível (local ou túnel)', async () => {
  const r = await fetch(`${BASE}/api/health/router?model=kr/glm-5`, { signal: timeout(60000) });
  if (!r.ok) return false;
  const d = await r.json();
  return d.ok === true;
});

await check('GET /api/terminal/exec responde cwd', async () => {
  const r = await fetch(`${BASE}/api/terminal/exec?sessionId=smoke`, { signal: timeout(15000) });
  if (!r.ok) return false;
  const d = await r.json();
  return typeof d.cwd === 'string' && Array.isArray(d.allowedRoots);
});

await check('POST /api/terminal/exec exige auth', async () => {
  const r = await fetch(`${BASE}/api/terminal/exec`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ command: 'echo x', sessionId: 'smoke' }),
    signal: timeout(15000),
  });
  return r.status === 401;
});

await check('POST /api/chat exige auth (401 pós unify-auth)', async () => {
  const r = await fetch(`${BASE}/api/chat`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ messages: [{ role: 'user', content: 'oi' }] }),
    signal: timeout(20000),
  });
  return r.status === 401;
});

console.log(`\nResultado: ${pass} passou, ${fail} falhou\n`);
process.exit(fail === 0 ? 0 : 1);
