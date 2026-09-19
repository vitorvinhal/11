import { build } from 'esbuild';
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// O cwd muda conforme o runner: local (raiz do repo) ou Vercel (rootDirectory = apps/web).
const IN_WEB = process.cwd().replace(/\\/g, '/').endsWith('/apps/web');
const MONACO = 'node_modules/monaco-editor/esm/vs';
const OUT = `${IN_WEB ? '' : 'apps/web/'}public/vs`;

const workers = {
  'monaco-editor.worker': `${MONACO}/editor/editor.worker.js`,
  'monaco-json.worker': `${MONACO}/language/json/json.worker.js`,
  'monaco-css.worker': `${MONACO}/language/css/css.worker.js`,
  'monaco-html.worker': `${MONACO}/language/html/html.worker.js`,
  'monaco-ts.worker': `${MONACO}/language/typescript/ts.worker.js`,
};

await build({
  entryPoints: workers,
  entryNames: '[name]',
  outdir: OUT,
  bundle: true,
  format: 'esm',
  target: ['es2020'],
  minify: true,
  sourcemap: false,
  legalComments: 'none',
  logLevel: 'warning',
});

copyFileSync(
  'node_modules/vscode-oniguruma/release/onig.wasm',
  join(OUT, 'onig.wasm'),
);

console.log('[build-monaco-workers] workers + onig.wasm gerados em public/vs');