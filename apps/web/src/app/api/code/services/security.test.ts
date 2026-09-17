import { sanitizeCommand, sanitizeArgs, checkRateLimit } from './security';

jest.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: {
      getUser: async (token) => ({
        data: { user: { id: 'mySupabaseId', email: 'sup@example.com' } },
        error: null
      })
    }
  })
}));

describe('security utilities', () => {
  test('sanitizeCommand removes dangerous chars', () => {
    const cmd = 'rm -rf /tmp; echo hi';
    expect(sanitizeCommand(cmd)).toBe('rm -rf /tmp echo hi');
  });

  test('sanitizeArgs removes dangerous chars from args', () => {
    const args = ['--file', 'a;rm'];
    expect(sanitizeArgs(args)).toEqual(['--file', 'a rm']);
  });

  test('checkRateLimit allows first request and blocks after limit', () => {
    const id = 'testUser';
    expect(checkRateLimit(id)).toBe(true);
    for (let i = 0; i < 99; i++) checkRateLimit(id);
    expect(checkRateLimit(id)).toBe(false);
  });
});

