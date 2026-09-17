import { readFile, writeFile, access, mkdir } from 'fs/promises';
import { resolve, dirname, normalize } from 'path';
/**
 * FileTool — leitura/escrita/refatoração de código local com whitelist.
 * Opera no filesystem do host (desktop/API) apenas dentro de ALLOWED_ROOTS.
 */

const ALLOWED_ROOTS = (process.env.TOOL_ALLOWED_ROOTS ?? process.env.BRIDGE_ALLOWED_DIRS ?? '')
  .split(';')
  .map((p) => p.trim())
  .filter(Boolean)
  .map((p) => resolve(p));

function resolveSafe(p: string): string {
  const abs = resolve(p);
  const ok = ALLOWED_ROOTS.length === 0 || ALLOWED_ROOTS.some((root) => {
    const rel = normalize(abs).startsWith(normalize(root));
    return rel;
  });
  if (!ok) throw new Error(`Acesso rejeitado (fora da whitelist): ${p}`);
  return abs;
}

export interface FileToolResult<T = unknown> {
  ok: boolean;
  path: string;
  data?: T;
  error?: string;
}

export async function readFileText(p: string): Promise<string> {
  const abs = resolveSafe(p);
  const buf = await readFile(abs);
  return buf.toString('utf8');
}

export async function writeFileText(p: string, content: string): Promise<FileToolResult> {
  const abs = resolveSafe(p);
  await mkdir(dirname(abs), { recursive: true });
  await writeFile(abs, content, 'utf8');
  return { ok: true, path: abs, data: { bytes: Buffer.byteLength(content) } };
}

/** Escrita binária (ex.: PPTX/PNG) — não passar por utf8, que corrompe. */
export async function writeFileBuffer(p: string, buffer: Buffer): Promise<FileToolResult> {
  const abs = resolveSafe(p);
  await mkdir(dirname(abs), { recursive: true });
  await writeFile(abs, buffer);
  return { ok: true, path: abs, data: { bytes: buffer.length } };
}

export async function exists(p: string): Promise<boolean> {
  const abs = resolveSafe(p);
  try { await access(abs); return true; } catch { return false; }
}

/** Refatoração inteligente: substitui padrões no arquivo e valida sintaxe mínimo. */
export async function refactorFile(p: string, replace: Array<{ from: string; to: string }>): Promise<FileToolResult> {
  const abs = resolveSafe(p);
  let src = await readFileText(abs);
  let replacements = 0;
  for (const { from, to } of replace) {
    const before = src;
    src = src.split(from).join(to);
    replacements += (before.length - src.length) / from.length;
  }
  if (!src.trim()) return { ok: false, path: abs, error: 'Resultado vazio após refatoração' };
  await writeFileText(abs, src);
  return { ok: true, path: abs, data: { replacements, bytes: Buffer.byteLength(src) } };
}

export const fileTool = { readFileText, writeFileText, writeFileBuffer, exists, refactorFile };