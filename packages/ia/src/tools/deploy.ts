import { execSync } from 'child_process';

export async function deployVercel() {
  console.log('Deploying to Vercel...');
  execSync('npx vercel --prod --confirm', { stdio: 'inherit' });
}

export async function pushSupabaseMigrations() {
  console.log('Pushing Supabase migrations...');
  execSync('supabase db push', { stdio: 'inherit' });
}
