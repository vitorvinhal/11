import { execSync } from 'child_process';

/**
 * GitGuard — regras de governança para self-coding.
 *  - commits apenas em branches feature/* ou fix/*
 *  - nunca direto na main
 *  - gate obrigatório de lint + tests + build antes de merge/deploy
 */

const ALLOWED_PREFIXES = ['feature/', 'fix/', 'chore/', 'docs/'];

function currentBranch(): string {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
}

function isMainlike(branch: string): boolean {
  return branch === 'main' || branch === 'master' || branch === 'develop';
}

function canCommit(): { ok: boolean; branch: string; reason?: string } {
  const branch = currentBranch();
  if (isMainlike(branch)) {
    return { ok: false, branch, reason: `Branch protegida ('${branch}') — crie feature/* ou fix/*` };
  }
  const allowed = ALLOWED_PREFIXES.some((p) => branch.startsWith(p));
  if (!allowed) {
    return { ok: false, branch, reason: `Prefix de branch não permitido (esperado: ${ALLOWED_PREFIXES.join(', ')})` };
  }
  return { ok: true, branch };
}

function runGate(): void {
  console.log('[git-guard] rodando gate obrigatório: lint + tests + build');
  for (const cmd of ['pnpm lint', 'pnpm test', 'pnpm build']) {
    console.log(`[git-guard] $ ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
  }
  console.log('[git-guard] gate OK');
}

export function guardCommit(): boolean {
  const check = canCommit();
  if (!check.ok) {
    console.error(`[git-guard] ✅ bloqueado: ${check.reason}`);
    process.exit(1);
  }
  runGate();
  return true;
}

if (require.main === module) {
  guardCommit();
}