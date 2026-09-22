"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileTool = void 0;
exports.isWithinRoot = isWithinRoot;
exports.readFileText = readFileText;
exports.writeFileText = writeFileText;
exports.writeFileBuffer = writeFileBuffer;
exports.exists = exists;
exports.refactorFile = refactorFile;
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const path_1 = require("path");
/**
 * FileTool — leitura/escrita/refatoração de código local com whitelist segura.
 *
 * Correção de segurança: `isWithinRoot` usa `path.relative` (+ case-insensitive
 * no Windows + realpath) em vez de `startsWith`, que aceitava prefixos irmãos
 * (ex.: `C:\Users\Administrator2` passava na raiz `C:\Users\Administrator`).
 */
const IS_WINDOWS = process.platform === 'win32';
const ALLOWED_ROOTS = (process.env.TOOL_ALLOWED_ROOTS ?? process.env.BRIDGE_ALLOWED_DIRS ?? '')
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => (0, path_1.resolve)(p));
/** Resolve symlinks quando o caminho existe (best-effort). */
function realOr(p) {
    try {
        return (0, fs_1.existsSync)(p) ? (0, fs_1.realpathSync)(p) : p;
    }
    catch {
        return p;
    }
}
/**
 * true se `target` está dentro de alguma raiz permitida.
 * Usa path.relative (+ case-insensitive no Windows) + realpath.
 */
function isWithinRoot(target, roots = ALLOWED_ROOTS) {
    if (!roots.length)
        return true;
    const abs = realOr((0, path_1.resolve)(target));
    const cmp = IS_WINDOWS ? (s) => s.toLowerCase() : (s) => s;
    return roots.some((root) => {
        const rootAbs = cmp(realOr((0, path_1.resolve)(root)));
        const rel = (0, path_1.relative)(rootAbs, cmp(abs));
        return rel === '' || (!rel.startsWith('..') && !(0, path_1.isAbsolute)(rel));
    });
}
function resolveSafe(p) {
    const abs = (0, path_1.resolve)(p);
    if (!isWithinRoot(abs))
        throw new Error(`Acesso rejeitado (fora da whitelist): ${p}`);
    return abs;
}
async function readFileText(p) {
    const abs = resolveSafe(p);
    const buf = await (0, promises_1.readFile)(abs);
    return buf.toString('utf8');
}
async function writeFileText(p, content) {
    const abs = resolveSafe(p);
    await (0, promises_1.mkdir)((0, path_1.dirname)(abs), { recursive: true });
    await (0, promises_1.writeFile)(abs, content, 'utf8');
    return { ok: true, path: abs, data: { bytes: Buffer.byteLength(content) } };
}
/** Escrita binária (ex.: PPTX/PNG) — não passar por utf8, que corrompe. */
async function writeFileBuffer(p, buffer) {
    const abs = resolveSafe(p);
    await (0, promises_1.mkdir)((0, path_1.dirname)(abs), { recursive: true });
    await (0, promises_1.writeFile)(abs, buffer);
    return { ok: true, path: abs, data: { bytes: buffer.length } };
}
async function exists(p) {
    const abs = resolveSafe(p);
    try {
        await (0, promises_1.access)(abs);
        return true;
    }
    catch {
        return false;
    }
}
/** Refatoração inteligente: substitui padrões no arquivo e valida sintaxe mínimo. */
async function refactorFile(p, replace) {
    const abs = resolveSafe(p);
    let src = await readFileText(abs);
    let replacements = 0;
    for (const { from, to } of replace) {
        const before = src;
        src = src.split(from).join(to);
        replacements += (before.length - src.length) / from.length;
    }
    if (!src.trim())
        return { ok: false, path: abs, error: 'Resultado vazio após refatoração' };
    await writeFileText(abs, src);
    return { ok: true, path: abs, data: { replacements, bytes: Buffer.byteLength(src) } };
}
exports.fileTool = { readFileText, writeFileText, writeFileBuffer, exists, refactorFile };
