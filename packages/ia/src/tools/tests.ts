import { spawn } from 'child_process';
import { fileTool } from './file';

/**
 * TestsTool — execução de testes/validações frontend e lint.
 * Roda comandos de projeto (pnpm) de forma controlada no diretório do alvo.
 */

export interface RunResult { stdout: string; stderr: string; exitCode: number | null }

function run(cmd: string, args: string[], cwd: string): Promise<RunResult> {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd, shell: false, env: { ...process.env, CI: 'true' }, windowsHide: true });
    let stdout = '';
    let stderr = '';
    child.stdout?.on('data', (d) => (stdout += d.toString()));
    child.stderr?.on('data', (d) => (stderr += d.toString()));
    child.on('error', reject);
    child.on('close', (code) => resolve({ stdout, stderr, exitCode: code }));
  });
}

export async function runTests(cwd: string, command: 'test' | 'lint' | 'typecheck' | 'build' = 'test'): Promise<RunResult> {
  const exists = await fileTool.exists(cwd);
  if (!exists) return { stdout: '', stderr: `Diretório não encontrado: ${cwd}`, exitCode: 1 };
  const bin = process.env.PNPM_BIN ?? 'pnpm';
  return run(bin, [command], cwd);
}

export async function validateFrontend(cwd: string): Promise<{ ok: boolean; summary: RunResult[] }> {
  const steps: Array<'typecheck' | 'test'> = ['typecheck', 'test'];
  const summary: RunResult[] = [];
  for (const step of steps) {
    summary.push(await runTests(cwd, step));
  }
  const ok = summary.every((s) => s.exitCode === 0);
  return { ok, summary };
}

export const testsTool = { runTests, validateFrontend };