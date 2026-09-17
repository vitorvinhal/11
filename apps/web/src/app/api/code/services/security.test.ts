import { verifyToken, sanitizeCommand, sanitizeArgs, checkRateLimit } from '../../app/api/code/services/security';
import jwt from 'jsonwebtoken';

jest.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    from: () => ({ single: () => ({ data: { user: { id: 'u1', email: 'a@b.c' } } }) })
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

  test('verifyToken accepts JWT with sub claim', () => {
    const secret = 'test';
    const token = jwt.sign({ sub: 'uid123', email: 'e@x.com' }, secret);
    process.env.JWT_SECRET = secret;
    const req = { headers: new Map([['authorization', `Bearer ${token}`]]) } as any;
    const user = verifyToken(req);
    expect(user?.userId).toBe('uid123');
    expect(user?.email).toBe('e@x.com');
  });

  test('verifyToken returns null on invalid token', () => {
    const req = { headers: new Map([['authorization', 'Bearer invalid']]) } as any;
    expect(verifyToken(req)).toBeNull();
  });

  test('checkRateLimit allows first request and blocks after limit', () => {
    const id = 'testUser';
    expect(checkRateLimit(id)).toBe(true);
    // simulate 100 requests
    for (let i = 0; i < 99; i++) checkRateLimit(id);
    expect(checkRateLimit(id)).toBe(false);
  });
});
