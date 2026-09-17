import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';

// Next.js só carrega .env do diretório do app (apps/web). Este loader sobe a
// árvore de diretórios a partir do cwd, junta TODOS os .env encontrados
// (do mais profundo ao mais raso) e injeta em process.env (server-only).
// Vars já definidas no processo NÃO são sobrescritas.
let loaded = false;

function collectDotEnvCandidates(startDir: string): string[] {
  const found: string[] = [];
  let dir = startDir;
  for (let i = 0; i < 8; i++) {
    const candidate = join(dir, '.env');
    if (existsSync(candidate)) found.push(candidate);
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return found;
}

export function loadRootEnv(): void {
  if (loaded) return;
  loaded = true;
  try {
    // Mais profundo primeiro → vars do app têm prioridade sobre as da raiz.
    const candidates = collectDotEnvCandidates(process.cwd()).reverse();
    for (const file of candidates) {
      for (const raw of readFileSync(file, 'utf8').split(/\r?\n/)) {
        const line = raw.trim();
        if (!line || line.startsWith('#')) continue;
        const eq = line.indexOf('=');
        if (eq <= 0) continue;
        const key = line.slice(0, eq).trim();
        let value = line.slice(eq + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) process.env[key] = value;
      }
    }
  } catch {
    // best effort — vars do processo/Vercel ainda valem
  }
}