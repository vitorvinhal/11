import { CodeSession, CreateCodeSessionDTO, ApproveSessionDTO } from '../types';
import { executeCommand, ExecuteOptions } from './command-executor';
import { generateSessionId } from './security';

// In-memory session store (use Redis/DB in production)
const sessionStore = new Map<string, CodeSession>();

export function createSession(data: CreateCodeSessionDTO, userId: string): CodeSession {
  const session: CodeSession = {
    id: generateSessionId(),
    userId,
    command: data.command,
    args: data.args || [],
    workingDir: data.workingDir,
    env: data.env,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  sessionStore.set(session.id, session);
  return session;
}

export function getSession(id: string): CodeSession | undefined {
  return sessionStore.get(id);
}

export function getUserSessions(userId: string): CodeSession[] {
  return Array.from(sessionStore.values()).filter(s => s.userId === userId);
}

export function updateSession(id: string, updates: Partial<CodeSession>): CodeSession | undefined {
  const session = sessionStore.get(id);
  if (!session) return undefined;

  const updated = {
    ...session,
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  sessionStore.set(id, updated);
  return updated;
}

export function deleteSession(id: string): boolean {
  return sessionStore.delete(id);
}

export async function approveAndExecuteSession(
  id: string,
  approval: ApproveSessionDTO,
  approverId: string
): Promise<CodeSession | undefined> {
  const session = sessionStore.get(id);
  if (!session) return undefined;

  if (session.status !== 'pending') {
    throw new Error(`Session is not in pending state: ${session.status}`);
  }

  // Update with approval info
  const updated = updateSession(id, {
    approved: approval.approved,
    approvedBy: approverId,
    approvedAt: new Date().toISOString(),
    status: approval.approved ? 'running' : 'rejected',
  });

  if (!updated) return undefined;

  // If approved, execute the command
  if (approval.approved) {
    executeSessionAsync(id);
  } else {
    updated.error = approval.reason || 'Rejected by user';
    updated.status = 'rejected';
    updated.completedAt = new Date().toISOString();
    sessionStore.set(id, updated);
  }

  return updated;
}

async function executeSessionAsync(id: string): Promise<void> {
  const session = sessionStore.get(id);
  if (!session) return;

  try {
    const options: ExecuteOptions = {
      command: session.command,
      args: session.args,
      workingDir: session.workingDir,
      env: session.env,
      timeout: 30000,
      maxOutputSize: 1024 * 1024,
    };

    const result = await executeCommand(options);

    updateSession(id, {
      output: result.output,
      error: result.error,
      exitCode: result.exitCode,
      status: result.success ? 'completed' : 'failed',
      completedAt: new Date().toISOString(),
    });
  } catch (error) {
    updateSession(id, {
      error: (error as Error).message,
      status: 'failed',
      completedAt: new Date().toISOString(),
    });
  }
}

export function cancelSession(id: string): boolean {
  const session = sessionStore.get(id);
  if (!session) return false;

  if (session.status === 'running' || session.status === 'pending') {
    updateSession(id, {
      status: 'cancelled',
      completedAt: new Date().toISOString(),
    });
    return true;
  }
  return false;
}

export function getAllSessions(): CodeSession[] {
  return Array.from(sessionStore.values());
}

export function getSessionsByStatus(status: CodeSession['status']): CodeSession[] {
  return Array.from(sessionStore.values()).filter(s => s.status === status);
}