import { createSession, getSession, deleteSession, approveAndExecuteSession } from './session-manager';
jest.mock('./command-executor', () => ({
  executeCommand: jest.fn(() => Promise.resolve({ stdout: 'ok', stderr: '' }))
}));

describe('session-manager', () => {
  const userId = 'uid';
  const cmd = 'echo hi';

  test('create and retrieve session', async () => {
    const sess = await createSession({ command: cmd, args: [] }, userId);
    expect(sess.id).toBeDefined();
    const fetched = getSession(sess.id);
    expect(fetched?.command).toBe('echo hi');
  });

  test('approve and execute pending session', async () => {
    const sess = await createSession({ command: cmd, args: [] }, userId);
    const updated = await approveAndExecuteSession(sess.id, { approved: true, reason: '' }, userId);
    expect(updated?.status).toBe('running');
  });

  test('delete session removes it', async () => {
    const sess = await createSession({ command: cmd, args: [] }, userId);
    const ok = deleteSession(sess.id);
    expect(ok).toBe(true);
    expect(getSession(sess.id)).toBeUndefined();
  });
});


