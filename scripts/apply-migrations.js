// Aplica migrations SQL do projeto diretamente no Supabase via RPC exec_sql
// (útil quando não há acesso psql do CLI). Requer SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.
// Uso: node scripts/apply-migrations.js [migration.sql ...]
const { readFileSync, readdirSync, existsSync } = require('fs');
const { join, resolve, basename } = require('path');

const URL = process.env.SUPABASE_URL || 'https://uacqekmejviqddrbnfhg.supabase.co';
const KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_ANON_KEY;
const MIGRATIONS_DIR = resolve(process.cwd(), 'infra/supabase/migrations');

if (!KEY) {
  console.error('SUPABASE_SERVICE_ROLE_KEY ausente');
  process.exit(1);
}

function findMigrations(patterns) {
  if (!patterns.length) {
    return readdirSync(MIGRATIONS_DIR)
      .filter((f) => f.endsWith('.sql'))
      .sort()
      .map((f) => join(MIGRATIONS_DIR, f));
  }
  return patterns.map((p) => {
    const abs = resolve(process.cwd(), p);
    if (existsSync(abs)) return abs;
    const inDir = join(MIGRATIONS_DIR, p);
    if (existsSync(inDir)) return inDir;
    throw new Error(`migration não encontrada: ${p}`);
  });
}

async function apply(file) {
  const sql = readFileSync(file, 'utf8');
  const res = await fetch(`${URL}/rest/v1/rpc/exec_sql`, {
    method: 'POST',
    headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: sql }),
  });
  const text = await res.text();
  return { ok: res.ok, status: res.status, body: text.slice(0, 500) };
}

(async () => {
  const files = findMigrations(process.argv.slice(2));
  let failed = 0;
  for (const file of files) {
    const r = await apply(file);
    if (r.ok) {
      console.log(`[ok]   ${basename(file)}`);
    } else {
      failed++;
      console.error(`[fail] ${basename(file)} (HTTP ${r.status}): ${r.body}`);
    }
  }
  process.exitCode = failed ? 1 : 0;
})();