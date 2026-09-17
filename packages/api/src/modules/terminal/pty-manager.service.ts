import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import * as os from 'os';

export interface PtySession {
  id: string;
  userId: string;
  pty: any;
  cwd: string;
  cols: number;
  rows: number;
  createdAt: number;
  lastActivity: number;
  command: string;
}

@Injectable()
export class PtyManagerService implements OnModuleDestroy {
  private readonly logger = new Logger(PtyManagerService.name);
  private readonly sessions = new Map<string, PtySession>();
  private readonly userSessions = new Map<string, Set<string>>();
  private readonly MAX_SESSIONS_PER_USER = 5;
  private readonly SESSION_TIMEOUT_MS = 30 * 60 * 1000;

  constructor() {
    setInterval(() => this.cleanupStaleSessions(), 60_000);
  }

  async createSession(userId: string, id: string, opts?: { cols?: number; rows?: number; cwd?: string }): Promise<PtySession> {
    const existing = this.userSessions.get(userId);
    if (existing && existing.size >= this.MAX_SESSIONS_PER_USER) {
      throw new Error(`Limite de ${this.MAX_SESSIONS_PER_USER} sessoes atingido`);
    }

    const shell = this.getShell();
    const cwd = opts?.cwd ?? this.getDefaultCwd();
    const cols = opts?.cols ?? 120;
    const rows = opts?.rows ?? 30;

    const pty = await this.spawnPty(shell, cwd, cols, rows);

    const session: PtySession = {
      id, userId, pty, cwd, cols, rows,
      createdAt: Date.now(),
      lastActivity: Date.now(),
      command: shell,
    };

    this.sessions.set(id, session);
    if (!this.userSessions.has(userId)) this.userSessions.set(userId, new Set());
    this.userSessions.get(userId)!.add(id);

    this.logger.log(`PTY created: ${id} user=${userId} shell=${shell} cwd=${cwd}`);
    return session;
  }

  private async spawnPty(shell: string, cwd: string, cols: number, rows: number): Promise<any> {
    try {
      const nodePty = await import('node-pty');
      const isWin = os.platform() === 'win32';
      const ptyShell = isWin ? (shell || 'powershell.exe') : (shell || '/bin/bash');
      const ptyArgs = isWin
        ? ['-NoLogo', '-NoProfile']
        : ['--login'];

      return nodePty.spawn(ptyShell, ptyArgs, {
        name: 'xterm-256color',
        cols, rows, cwd,
        env: { ...process.env, TERM: 'xterm-256color', COLORTERM: 'truecolor' } as any,
      });
    } catch (err) {
      this.logger.error(`node-pty spawn failed: ${(err as Error).message}`);
      throw new Error('PTY indisponivel: instale node-pty');
    }
  }

  getSession(id: string): PtySession | undefined {
    return this.sessions.get(id);
  }

  getUserSessions(userId: string): PtySession[] {
    const ids = this.userSessions.get(userId);
    if (!ids) return [];
    return Array.from(ids).map((id) => this.sessions.get(id)).filter(Boolean) as PtySession[];
  }

  writeToSession(id: string, data: string): boolean {
    const session = this.sessions.get(id);
    if (!session) return false;
    session.lastActivity = Date.now();
    session.pty.write(data);
    return true;
  }

  resizeSession(id: string, cols: number, rows: number): boolean {
    const session = this.sessions.get(id);
    if (!session) return false;
    session.cols = cols;
    session.rows = rows;
    session.lastActivity = Date.now();
    try { session.pty.resize(cols, rows); } catch { /* ignore */ }
    return true;
  }

  killSession(id: string): boolean {
    const session = this.sessions.get(id);
    if (!session) return false;
    try { session.pty.kill(); } catch { /* ignore */ }
    this.sessions.delete(id);
    this.userSessions.get(session.userId)?.delete(id);
    this.logger.log(`PTY killed: ${id}`);
    return true;
  }

  killUserSessions(userId: string): number {
    const ids = this.userSessions.get(userId);
    if (!ids) return 0;
    let count = 0;
    for (const id of Array.from(ids)) {
      this.killSession(id);
      count++;
    }
    return count;
  }

  onSessionOutput(id: string, callback: (data: string) => void): () => void {
    const session = this.sessions.get(id);
    if (!session) return () => {};
    const disposable = session.pty.onData((data: string) => {
      session.lastActivity = Date.now();
      callback(data);
    });
    return () => { try { disposable.dispose(); } catch { /* ignore */ } };
  }

  onSessionExit(id: string, callback: (exitCode: number) => void): () => void {
    const session = this.sessions.get(id);
    if (!session) return () => {};
    const disposable = session.pty.onExit(({ exitCode }) => {
      callback(exitCode);
      this.sessions.delete(id);
      this.userSessions.get(session.userId)?.delete(id);
    });
    return () => { try { disposable.dispose(); } catch { /* ignore */ } };
  }

  private getShell(): string {
    if (os.platform() === 'win32') return process.env.COMSPEC || 'powershell.exe';
    return process.env.SHELL || '/bin/bash';
  }

  private getDefaultCwd(): string {
    if (os.platform() === 'win32') return process.env.USERPROFILE || 'C:\\Users\\Administrator';
    return process.env.HOME || '/root';
  }

  private cleanupStaleSessions(): void {
    const now = Date.now();
    for (const [id, session] of this.sessions) {
      if (now - session.lastActivity > this.SESSION_TIMEOUT_MS) {
        this.logger.log(`PTY stale, killing: ${id}`);
        this.killSession(id);
      }
    }
  }

  onModuleDestroy(): void {
    for (const id of Array.from(this.sessions.keys())) {
      this.killSession(id);
    }
  }
}
