import { validate } from './terminal-validate';

describe('terminal validate', () => {
  test.skip('blocks rm -rf /', () => {
    const res = validate('rm -rf /', 'C:\\root');
    expect(res.ok).toBe(false);
  });

  test.skip('allows ls', () => {
    const res = validate('ls', 'C:\\root');
    expect(res.ok).toBe(true);
  });
});

