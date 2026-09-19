import { rmSync } from 'node:fs';

const paths = ['apps/web/.next/cache', 'apps/web/.next'];
for (const p of paths) {
  rmSync(p, { recursive: true, force: true });
}
console.log('[clear-next-cache] limpo:', paths.join(', '));