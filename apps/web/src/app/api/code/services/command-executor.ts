import { spawn, SpawnOptions } from 'child_process';
import { ExecuteResult } from '../types';

export interface ExecuteOptions {
  command: string;
  args: string[];
  workingDir?: string;
  env?: Record<string, string>;
  timeout?: number;
  maxOutputSize?: number;
}

export async function executeCommand(options: ExecuteOptions): Promise<ExecuteResult> {
  const {
    command,
    args = [],
    workingDir = process.cwd(),
    env = {},
    timeout = 30000,
    maxOutputSize = 1024 * 1024, // 1MB
  } = options;

  return new Promise((resolve) => {
    let output = '';
    let error = '';
    let killed = false;

    const child = spawn(command, args, {
      cwd: workingDir,
      env: { ...process.env, ...env },
      shell: false,
    } as SpawnOptions);

    const timeoutId = setTimeout(() => {
      if (!killed) {
        killed = true;
        child.kill('SIGTERM');
        error = `Command timed out after ${timeout}ms`;
      }
    }, timeout);

    child.stdout?.on('data', (data: Buffer) => {
      const chunk = data.toString();
      if (output.length + chunk.length > maxOutputSize) {
        output += '\n[OUTPUT TRUNCATED - MAX SIZE REACHED]';
        if (!killed) {
          killed = true;
          child.kill('SIGTERM');
        }
      } else {
        output += chunk;
      }
    });

    child.stderr?.on('data', (data: Buffer) => {
      const chunk = data.toString();
      if (error.length + chunk.length > maxOutputSize) {
        error += '\n[ERROR TRUNCATED - MAX SIZE REACHED]';
      } else {
        error += chunk;
      }
    });

    child.on('error', (err: Error) => {
      clearTimeout(timeoutId);
      if (!killed) {
        resolve({
          success: false,
          output,
          error: `${error}\n${err.message}`,
          exitCode: -1,
        });
      }
    });

    child.on('exit', (code: number | null) => {
      clearTimeout(timeoutId);
      if (!killed) {
        resolve({
          success: code === 0,
          output: output.trim(),
          error: error.trim() || undefined,
          exitCode: code || undefined,
        });
      }
    });
  });
}

export async function executeCommandWithOutput(
  command: string,
  args: string[],
  options?: Partial<Omit<ExecuteOptions, 'command' | 'args'>>
): Promise<ExecuteResult> {
  return executeCommand({ command, args, ...options });
}