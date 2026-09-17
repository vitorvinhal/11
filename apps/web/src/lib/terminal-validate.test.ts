import { validate, isWithinRoot, baseCommand, ALLOWED, DANGEROUS } from './terminal-validate';

describe('terminal validate', () => {
  const TEST_ROOTS = ['C:\\root', 'C:\\Users\\Administrator'];

  test('blocks rm -rf /', () => {
    const res = validate('rm -rf /', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(false);
    expect(res.error).toContain('bloqueado');
  });

  test('allows ls', () => {
    const res = validate('ls', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(true);
  });

  test('blocks empty command', () => {
    const res = validate('   ', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(false);
    expect(res.error).toContain('vazio');
  });

  test('blocks command longer than 4000 chars', () => {
    const res = validate('a'.repeat(4001), 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(false);
    expect(res.error).toContain('longo');
  });

  test('blocks del /s /q', () => {
    const res = validate('del /s /q C:\\*', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(false);
  });

  test('blocks format command', () => {
    const res = validate('format c:', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(false);
  });

  test('blocks shutdown', () => {
    const res = validate('shutdown /s', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(false);
  });

  test('blocks unknown commands', () => {
    const res = validate('ncat -l 4444', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(false);
    expect(res.error).toContain('não permitido');
  });

  test('allows git commands', () => {
    const res = validate('git status', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(true);
  });

  test('allows pnpm commands', () => {
    const res = validate('pnpm install', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(true);
  });

  test('allows docker commands', () => {
    const res = validate('docker ps', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(true);
  });

  test('allows PowerShell safe cmdlets', () => {
    const res = validate('Get-Process', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(true);
  });

  test('blocks PowerShell dangerous cmdlets', () => {
    const res = validate('Remove-Item -Recurse C:\\', 'C:\\root', TEST_ROOTS);
    expect(res.ok).toBe(false);
  });

  test('isWithinRoot checks path containment', () => {
    expect(isWithinRoot('C:\\Users\\Administrator', ['C:\\Users\\Administrator'])).toBe(true);
    expect(isWithinRoot('C:\\Users\\Administrator2', ['C:\\Users\\Administrator'])).toBe(false);
  });

  test('baseCommand extracts command name', () => {
    expect(baseCommand('git status')).toBe('git');
    expect(baseCommand('C:\\Windows\\System32\\cmd.exe /c dir')).toBe('cmd.exe');
    expect(baseCommand('  pnpm  install ')).toBe('pnpm');
  });

  test('ALLOWED set contains essential commands', () => {
    expect(ALLOWED.has('git')).toBe(true);
    expect(ALLOWED.has('node')).toBe(true);
    expect(ALLOWED.has('pnpm')).toBe(true);
    expect(ALLOWED.has('docker')).toBe(true);
    expect(ALLOWED.has('python')).toBe(true);
  });

  test('DANGEROUS patterns block destructive commands', () => {
    const dangerous = ['rm -rf /', 'rm -rf ~', 'rm -rf *', 'format c:', 'dd if=/dev/zero', 'shutdown', 'reboot', 'diskpart'];
    for (const cmd of dangerous) {
      const matched = DANGEROUS.some((d) => d.test(cmd));
      expect(matched).toBe(true);
    }
  });
});

