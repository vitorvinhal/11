import { rmSync } from 'node:fs';

// O cwd muda conforme o runner: local (raiz do repo) ou Vercel (rootDirectory = apps/web).
const IN_WEB = process.cwd().replace(/\\/g, '/').endsWith('/apps/web');
const prefix = IN_WEB ? '' : 'apps/web/';
const paths = [`${prefix}.next/cache`, `${prefix}.next`];
for (const p of paths) {
  rmSync(p, { recursive: true, force: true });
}
console.log('[clear-next-cache] limpo:', paths.join(', '));