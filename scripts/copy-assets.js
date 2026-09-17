// Copia assets não-TS (JSON etc.) de src/ para dist/ após o tsc.
// Uso: node scripts/copy-assets.js <frontSrc-dir> <dist-dir>
const { cpSync, existsSync } = require('fs');
const { join, resolve } = require('path');

const [, , srcArg, distArg] = process.argv;
if (!srcArg || !distArg) {
  console.error('uso: node copy-assets.js <src> <dist>');
  process.exit(1);
}

const src = resolve(process.cwd(), srcArg);
const dist = resolve(process.cwd(), distArg);

if (!existsSync(src)) {
  console.error(`src não existe: ${src}`);
  process.exit(1);
}
cpSync(src, dist, { recursive: true, filter: (s) => !s.endsWith('.ts') && !s.endsWith('.tsx') });
console.log(`assets copiados: ${src} -> ${dist}`);