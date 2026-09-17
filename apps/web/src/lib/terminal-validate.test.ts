import { validate } from '../../lib/terminal-validate';

describe('terminal validate', () => {
  test('blocks rm -rf /', () => {
    const res = validate('rm -rf /', 'C:\\root');
    expect(res.ok).toBe(false);
    expect(res.error).toMatch(/bloqueado/);
  });

  test('allows ls', () => {
    const res = validate('ls', 'C:\\root');
    expect(res.ok).toBe(true);
  });

  test('cd .. escapes root when not resolved', () => {
    const res = validate('cd ..', 'C:\\root\\sub');
    expect(res.ok).toBe(false);
    expect(res.error).toMatch(/fora das raízes/);
  });
});
