"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testsTool = void 0;
exports.runTests = runTests;
exports.validateFrontend = validateFrontend;
const child_process_1 = require("child_process");
const file_1 = require("./file");
function run(cmd, args, cwd) {
    return new Promise((resolve, reject) => {
        const child = (0, child_process_1.spawn)(cmd, args, { cwd, shell: false, env: { ...process.env, CI: 'true' }, windowsHide: true });
        let stdout = '';
        let stderr = '';
        child.stdout?.on('data', (d) => (stdout += d.toString()));
        child.stderr?.on('data', (d) => (stderr += d.toString()));
        child.on('error', reject);
        child.on('close', (code) => resolve({ stdout, stderr, exitCode: code }));
    });
}
async function runTests(cwd, command = 'test') {
    const exists = await file_1.fileTool.exists(cwd);
    if (!exists)
        return { stdout: '', stderr: `Diretório não encontrado: ${cwd}`, exitCode: 1 };
    const bin = process.env.PNPM_BIN ?? 'pnpm';
    return run(bin, [command], cwd);
}
async function validateFrontend(cwd) {
    const steps = ['typecheck', 'test'];
    const summary = [];
    for (const step of steps) {
        summary.push(await runTests(cwd, step));
    }
    const ok = summary.every((s) => s.exitCode === 0);
    return { ok, summary };
}
exports.testsTool = { runTests, validateFrontend };
