// Validação de sintaxe TOML mínima p/ Cargo.toml (sem cargo) — DEVICE-E2E-002
import { readFileSync } from 'node:fs';

const file = process.argv[2];
const text = readFileSync(file, 'utf8');
const errors = [];
let section = null;
const seenSections = new Set();
let packageVersion = null;

for (const [i, rawLine] of text.split(/\r?\n/).entries()) {
  const line = rawLine.replace(/#.*$/, '').trim();
  if (!line) continue;
  if (line.startsWith('[')) {
    if (!line.endsWith(']')) errors.push(`linha ${i + 1}: seção sem fechar: ${line}`);
    section = line.slice(1, -1).trim();
    if (seenSections.has(section)) errors.push(`linha ${i + 1}: seção duplicada: [${section}]`);
    seenSections.add(section);
    continue;
  }
  if (!line.includes('=')) {
    errors.push(`linha ${i + 1}: esperado key = value: ${line}`);
    continue;
  }
  const m = /^([A-Za-z0-9_.-]+)\s*=\s*(.+)$/.exec(line);
  if (!m) { errors.push(`linha ${i + 1}: atribuição inválida: ${line}`); continue; }
  const [, key, valueRaw] = m;
  const value = valueRaw.trim();
  const isString = /^"[^"]*"$/.test(value) || /^'[^']*'$/.test(value);
  const isBool = /^(true|false)$/.test(value);
  const isNumber = /^-?\d+(\.\d+)?$/.test(value);
  const isArray = value.startsWith('[') && value.endsWith(']');
  const isTable = value.startsWith('{') && value.endsWith('}');
  const isInlineFunc = /^(std|raw)\(/.test(value);
  if (!isString && !isBool && !isNumber && !isArray && !isTable && !isInlineFunc) {
    errors.push(`linha ${i + 1}: valor não reconhecido p/ ${key}: ${value}`);
  }
  if (section === 'package' && key === 'version' && isString) {
    packageVersion = value.slice(1, -1);
  }
}

if (!seenSections.has('package')) errors.push('seção [package] ausente');
if (!packageVersion) errors.push('[package].version ausente/inválido');

if (errors.length) {
  console.error('TOML INVALID:');
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log(`TOML OK: ${file}`);
console.log(`  secoes: ${[...seenSections].join(', ')}`);
console.log(`  [package].version = ${packageVersion}`);
