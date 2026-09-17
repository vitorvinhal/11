#!/usr/bin/env node
/**
 * Release/versioning script for Eleventh.
 * Usage (from repo root):
 *   node scripts/version.js patch  -- v0.1.0-alpha -> v0.1.1-alpha
 *   node scripts/version.js minor  -- v0.1.0-alpha -> v0.2.0-alpha
 *   node scripts/version.js major  -- v0.1.0-alpha -> v1.0.0-alpha
 *   node scripts/version.js patch --release beta --version 1.2.3
 *   node scripts/version.js minor --change "Nova feature" --change "Correções"
 *
 * Behavior:
 *   - Parses current version from apps/web/public/version.json
 *   - Bumps semver (major/minor/patch) preserving the pre-release tag (default alpha)
 *   - Writes version.json + all workspace package.json files
 *   - Collects change lines from --change "..." arguments
 *   - Prepends a new section to CHANGELOG.md
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const VERSION_FILE = path.join(ROOT, 'apps/web/public/version.json');
const CHANGELOG = path.join(ROOT, 'CHANGELOG.md');

function fail(msg) {
  console.error(`❌ ${msg}`);
  process.exit(1);
}

function parseVersion(v) {
  const match = /^v?(\d+)\.(\d+)\.(\d+)(?:-([a-z0-9]+))?$/i.exec((v || '').trim());
  if (!match) return null;
  return {
    raw: v,
    major: parseInt(match[1], 10),
    minor: parseInt(match[2], 10),
    patch: parseInt(match[3], 10),
    pre: match[4] || 'alpha',
  };
}

function bump(v, kind) {
  const next = { ...v };
  if (kind === 'major') { next.major++; next.minor = 0; next.patch = 0; }
  else if (kind === 'minor') { next.minor++; next.patch = 0; }
  else if (kind === 'patch') { next.patch++; }
  else fail(`Unknown bump kind: ${kind}`);
  return next;
}

function currentDate() {
  return new Date().toISOString().slice(0, 10);
}

function collectChanges(args) {
  const changes = [];
  let preToken = false;
  let pre = '';
  for (const arg of args) {
    if (arg === '--change') { preToken = true; pre = ''; continue; }
    if (preToken) { changes.push(pre + (pre ? ' ' : '') + arg); preToken = false; continue; }
    if (arg.startsWith('--change=')) { changes.push(arg.replace('--change=', '')); continue; }
    // unknown token that starts with -- is a flag; if no value after --change, ignore
  }
  return changes;
}

function writeJson(file, obj) {
  fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n', 'utf8');
}

function main() {
  const args = process.argv.slice(2);
  const kind = args.find((a) => ['major', 'minor', 'patch'].includes(a)) || 'patch';

  // Optional explicit version override
  const overrideIdx = args.findIndex((a) => a === '--version');
  let explicit = null;
  if (overrideIdx !== -1 && args[overrideIdx + 1]) explicit = args[overrideIdx + 1];

  const preFlagIdx = args.findIndex((a) => a === '--release');
  const preTag = preFlagIdx !== -1 && args[preFlagIdx + 1] ? args[preFlagIdx + 1] : null;

  const changes = collectChanges(args);

  if (!fs.existsSync(VERSION_FILE)) fail(`version.json not found: ${VERSION_FILE}`);
  const versionJson = JSON.parse(fs.readFileSync(VERSION_FILE, 'utf8'));

  const current = explicit
    ? parseVersion(`v${explicit}`)
    : parseVersion(versionJson.version);
  if (!current) fail(`Cannot parse version: ${versionJson.version}`);

  let next = bump(current, kind);
  // Reconstrói a versão com o pre-release correto (sem replace frágil).
  let nextVersion = `v${next.major}.${next.minor}.${next.patch}-${preTag || next.pre}`;

  // 1. Update version.json (changelog -> fresh list for this release)
  writeJson(VERSION_FILE, {
    version: nextVersion.replace('v', ''),
    versionCode: (versionJson.versionCode || 0) + 1,
    name: versionJson.name || '11 — Inteligência Autônoma',
    channel: preTag || versionJson.channel || current.pre,
    changelog: changes.length ? changes : versionJson.changelog || [],
  });

  console.log(`✅ ${nextVersion.replace('v', '')}` );
  // 2. Update workspace package.json versions
  const pkgFiles = [];
  const walk = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === 'target' || entry.name === 'dist') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      if (entry.name === 'package.json') pkgFiles.push(full);
    }
  };
  walk(path.join(ROOT, 'apps'));
  walk(path.join(ROOT, 'packages'));

  pkgFiles.unshift(path.join(ROOT, 'package.json'));

  for (const f of pkgFiles) {
    if (f.endsWith('version.json')) continue;
    let pkg;
    try { pkg = JSON.parse(fs.readFileSync(f, 'utf8')); } catch { continue; }
    if (!pkg.name) continue;
    const oldV = pkg.version || current.raw;
    pkg.version = nextVersion.replace('v', '');
    writeJson(f, pkg);
    // Heartbeat
    if (f === pkgFiles[0]) console.log(`   package.json (root): ${oldV} → ${pkg.version}`);
  }

  // 3. Update CHANGELOG.md
  let changelog = '';
  try { changelog = fs.readFileSync(CHANGELOG, 'utf8'); } catch { changelog = '# Changelog — 11\n\nNenhuma alteração registrada.\n'; }

  const section = [
    `\n## ${nextVersion} — ${currentDate()}\n`,
    ...(changes.length ? changes.map((c) => `- ${c}`) : ['- Sem notas de release.']),
  ].join('\n');

  const headerEnd = changelog.indexOf('## ');
  if (headerEnd === -1) {
    changelog = '# Changelog — 11\n\n' + section.trim() + '\n';
  } else {
    changelog = changelog.slice(0, headerEnd) + section.trim() + '\n\n' + changelog.slice(headerEnd).trim() + '\n';
  }

  fs.writeFileSync(CHANGELOG, changelog, 'utf8');
  console.log(`✅ CHANGELOG.md updated (${nextVersion})`);
  console.log(`\nDone. Next version: ${nextVersion}`);
}

main();