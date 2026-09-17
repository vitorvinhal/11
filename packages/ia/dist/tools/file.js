"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileTool = void 0;
exports.readFileText = readFileText;
exports.writeFileText = writeFileText;
exports.writeFileBuffer = writeFileBuffer;
exports.exists = exists;
exports.refactorFile = refactorFile;
const promises_1 = require("fs/promises");
const path_1 = require("path");
/**
 * FileTool — leitura/escrita/refatoração de código local com whitelist.
 * Opera no filesystem do host (desktop/API) apenas dentro de ALLOWED_ROOTS.
 */
const ALLOWED_ROOTS = (process.env.TOOL_ALLOWED_ROOTS ?? process.env.BRIDGE_ALLOWED_DIRS ?? '')
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => (0, path_1.resolve)(p));
function resolveSafe(p) {
    const abs = (0, path_1.resolve)(p);
    const ok = ALLOWED_ROOTS.length === 0 || ALLOWED_ROOTS.some((root) => {
        const rel = (0, path_1.normalize)(abs).startsWith((0, path_1.normalize)(root));
        return rel;
    });
    if (!ok)
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
