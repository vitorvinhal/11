import * as path from 'path';
import * as fs from 'fs/promises';
import { execFile, spawn } from 'child_process';
import { promisify } from 'util';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

const execFileAsync = promisify(execFile);

export interface ListFilesInput { path: string }
export interface ReadFileInput { path: string }
export interface WriteFileInput { path: string; content: string }
export interface RunBuildInput { path: string; script?: string }
export interface RunCommandInput { command: string; args?: string[]; cwd?: string }
export interface RunTestsInput { path: string; command?: string }

export interface FileEntry { name: string; isDir: boolean; path: string }
export interface ReadFileResult { content: string; size: number }
export interface BuildResult { stdout: string; stderr: string }

/** Comandos de terminal permitidos em execução controlada (allowlist rigorosa). */
const ALLOWED_COMMANDS = new Map<string, boolean>([
  ['git', true],
  ['ls', true],
  ['cat', true],
  ['echo', true],
  ['pnpm', true],
  ['npm', true],
  ['npx', true],
  ['node', true],
  ['tsc', true],
  ['python', true],
]);

const WHITELIST = (process.env.BRIDGE_ALLOWED_DIRS ?? '')
  .split(';')
  .map((p) => p.trim())
  .filter(Boolean)
  .map((p) => path.resolve(p));

function inWhitelist(target: string): boolean {
  const resolved = path.resolve(target);
  return WHITELIST.some((root) => {
    const rel = path.relative(root, resolved);
    return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
  });
}

function deny(reason: string): HttpException {
  return new HttpException(`Acesso negado: fora da whitelist (${reason})`, HttpStatus.FORBIDDEN);
}

/**
 * OpsService — operações remotas nomeadas, validadas e com execução controlada.
 *  - Nenhum shell arbitrário: execFile/spawn com args em array.
 *  - Whitelist de diretórios (BRIDGE_ALLOWED_DIRS) + allowlist de comandos.
 *  - Suporte a escrita refatorada, geração de artefatos e execução de testes.
 */
@Injectable()
export class OpsService {
  async listFiles(input: ListFilesInput): Promise<FileEntry[]> {
    if (!input?.path || !inWhitelist(input.path)) throw deny('list');
    const entries = await fs.readdir(input.path, { withFileTypes: true });
    return entries.map((e) => ({
      name: e.name,
      isDir: e.isDirectory(),
      path: path.join(input.path, e.name),
    }));
  }

  async readFile(input: ReadFileInput): Promise<ReadFileResult> {
    if (!input?.path || !inWhitelist(input.path)) throw deny('read');
    const stat = await fs.stat(input.path);
    const maxBytes = Number(process.env.BRIDGE_MAX_FILE_BYTES ?? 10_485_760); // 10MB
    if (stat.size > maxBytes) throw new HttpException('Arquivo maior que o limite', HttpStatus.PAYLOAD_TOO_LARGE);
    const content = await fs.readFile(input.path, 'utf8');
    return { content, size: stat.size };
  }

  async writeFile(input: WriteFileInput): Promise<{ ok: true; path: string; bytes: number }> {
    if (!input?.path || !inWhitelist(input.path)) throw deny('write');
    const dir = path.dirname(input.path);
    await fs.mkdir(dir, { recursive: true });
    const buf = Buffer.from(input.content, 'utf8');
    await fs.writeFile(input.path, buf);
    return { ok: true, path: input.path, bytes: buf.length };
  }

  async runBuild(input: RunBuildInput): Promise<BuildResult> {
    if (!input?.path || !inWhitelist(input.path)) throw deny('exec');
    const script = input.script ?? 'build';
    const { stdout, stderr } = await execFileAsync(
      process.env.PNPM_BIN ?? 'pnpm',
      ['run', script],
      { cwd: input.path, env: { ...process.env, CI: 'true' }, timeout: 120_000 }
    );
    return { stdout, stderr };
  }

  /** Executa comandos autorizados via execFile (sem shell), com cwd na whitelist. */
  async runCommand(input: RunCommandInput): Promise<{ stdout: string; stderr: string; exitCode: number | null }> {
    if (!input?.command) throw new HttpException('command obrigatório', HttpStatus.BAD_REQUEST);
    if (!ALLOWED_COMMANDS.has(input.command)) {
      throw new HttpException(`Comando não autorizado: ${input.command}`, HttpStatus.FORBIDDEN);
    }
    const cwd = input.cwd ?? process.env.HOME ?? process.cwd();
    if (!inWhitelist(cwd)) throw deny('cwd');
    const args = input.args ?? [];

    return new Promise((resolve, reject) => {
      const child = spawn(input.command, args, {
        cwd,
        env: { ...process.env, CI: 'true' },
        shell: false,
        windowsHide: true,
      });
      let stdout = '';
      let stderr = '';
      child.stdout?.on('data', (d) => (stdout += d.toString()));
      child.stderr?.on('data', (d) => (stderr += d.toString()));
      child.on('error', reject);
      child.on('close', (code) => resolve({ stdout, stderr, exitCode: code }));
    });
  }

  async runTests(input: RunTestsInput): Promise<BuildResult & { exitCode: number | null }> {
    if (!input?.path || !inWhitelist(input.path)) throw deny('test');
    const command = input.command ?? 'test';
    const { stdout, stderr, exitCode } = await new Promise<{ stdout: string; stderr: string; exitCode: number | null }>(
      (resolve, reject) => {
        const child = spawn(process.env.PNPM_BIN ?? 'pnpm', [command], {
          cwd: input.path,
          env: { ...process.env, CI: 'true' },
          shell: false,
          windowsHide: true,
        });
        let stdout = '';
        let stderr = '';
        child.stdout?.on('data', (d) => (stdout += d.toString()));
        child.stderr?.on('data', (d) => (stderr += d.toString()));
        child.on('error', reject);
        child.on('close', (code) => resolve({ stdout, stderr, exitCode: code }));
      }
    );
    return { stdout, stderr, exitCode };
  }
}