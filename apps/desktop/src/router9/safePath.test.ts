/**
 * Teste unitário para safePath() — correção do bug de bypass via prefixo.
 *
 * Rodar: cd apps/desktop && npx ts-node src/router9/safePath.test.ts
 * Ou: node dist/router9/safePath.test.js (após build)
 */

import path from "path";
import { existsSync, mkdirSync, writeFileSync, rmSync } from "fs";
import { realpathSync } from "fs";

// Replicar a função isInsideRoot + safePath para teste isolado
function isInsideRoot(target: string, root: string): boolean {
  return target === root || target.startsWith(root + path.sep);
}

// Configuração de teste
const TEST_ROOT = path.resolve(__dirname, "../../../tmp/test-root");
const TEST_SIBLING = path.resolve(__dirname, "../../../tmp/test-root-evil");
const ROOT_DIR = TEST_ROOT;

const { existsSync: exists, realpathSync: realpath } =
  require("fs") as typeof import("fs");

function safePath(targetPath: string): string | null {
  const absPath = path.resolve(ROOT_DIR, targetPath ?? ".");
  try {
    if (exists(absPath)) {
      const real = realpath(absPath);
      const realRoot = realpath(ROOT_DIR);
      if (!isInsideRoot(real, realRoot)) return null;
      return real;
    }
    const parentDir = path.dirname(absPath);
    if (exists(parentDir)) {
      const realParent = realpath(parentDir);
      const realRoot = realpath(ROOT_DIR);
      if (!isInsideRoot(realParent, realRoot)) return null;
    } else {
      // Nem path nem pai existem — sobe até achar um existente e valida
      let dir = parentDir;
      while (dir && !exists(dir) && dir !== path.dirname(dir)) {
        dir = path.dirname(dir);
      }
      if (dir && exists(dir)) {
        const realDir = realpath(dir);
        const realRoot = realpath(ROOT_DIR);
        if (!isInsideRoot(realDir, realRoot)) return null;
      }
    }
    return absPath;
  } catch {
    return null;
  }
}

// ─── Setup ──────────────────────────────────────────────────────────────────

function setup() {
  // ROOT_DIR existe
  if (!exists(TEST_ROOT)) {
    mkdirSync(TEST_ROOT, { recursive: true });
  }
  // Arquivo dentro de ROOT_DIR
  const legitFile = path.join(TEST_ROOT, "arquivo.txt");
  if (!exists(legitFile)) {
    writeFileSync(legitFile, "conteudo legitimo");
  }
  // Diretório irmão malicioso
  if (!exists(TEST_SIBLING)) {
    mkdirSync(TEST_SIBLING, { recursive: true });
  }
  const evilFile = path.join(TEST_SIBLING, "arquivo.txt");
  if (!exists(evilFile)) {
    writeFileSync(evilFile, "conteudo malicioso");
  }
}

function cleanup() {
  try {
    rmSync(TEST_ROOT, { recursive: true, force: true });
    rmSync(TEST_SIBLING, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}

// ─── Testes ─────────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

function assert(condition: boolean, name: string) {
  if (condition) {
    console.log(`  ✅ ${name}`);
    passed++;
  } else {
    console.error(`  ❌ ${name}`);
    failed++;
  }
}

function runTests() {
  console.log("🧪 Testes de safePath — bypass via sibling directory\n");

  setup();

  // 1. Caminho legítimo dentro de ROOT_DIR funciona
  const legit = safePath("arquivo.txt");
  assert(
    legit !== null,
    "Caminho legítimo dentro de ROOT_DIR retorna não-null",
  );
  assert(
    legit === realpath(path.join(TEST_ROOT, "arquivo.txt")),
    "Caminho legítimo retorna o path correto",
  );

  // 2. Caminho legítimo com subdiretório
  mkdirSync(path.join(TEST_ROOT, "sub"), { recursive: true });
  writeFileSync(path.join(TEST_ROOT, "sub", "file.txt"), "sub");
  const subFile = safePath(path.join("sub", "file.txt"));
  assert(subFile !== null, "Caminho com subdiretório funciona");

  // 3. BLOQUEIO: tentativa de escape para diretório irmão (o bug original)
  const escaped = safePath("../test-root-evil/arquivo.txt");
  assert(
    escaped === null,
    "BLOQUEADO: ../test-root-evil/arquivo.txt retorna null (bug corrigido!)",
  );

  // 4. BLOQUEIO: caminho absoluto fora do root
  // No Windows, /tmp/... resolve para C:\tmp\... (relativo à drive root)
  // Esse path não existe → parent C:\ existe → realpath(C:\) ≠ ROOT_DIR → null
  const absEscape = safePath("/tmp/test-root-evil/arquivo.txt");
  assert(
    absEscape === null,
    "BLOQUEADO: caminho absoluto fora do root retorna null",
  );

  // 5. Caminho não existente com pai dentro do root
  const futureFile = safePath("novo-arquivo.txt");
  assert(
    futureFile !== null,
    "Caminho não existente com pai dentro do root aceito",
  );

  // 6. Caminho não existente com pai fora do root
  const futureEscape = safePath("../test-root-evil/novo.txt");
  assert(
    futureEscape === null,
    "BLOQUEADO: caminho não existente com pai fora do root retorna null",
  );

  // 7. ROOT_DIR em si é aceito
  const rootPath = safePath(".");
  assert(rootPath !== null, "ROOT_DIR em si é aceito");

  cleanup();

  console.log(`\n📊 Resultado: ${passed} passaram, ${failed} falharam`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
