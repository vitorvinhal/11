"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployVercel = deployVercel;
exports.pushSupabaseMigrations = pushSupabaseMigrations;
const child_process_1 = require("child_process");
async function deployVercel() {
    console.log('Deploying to Vercel...');
    (0, child_process_1.execSync)('npx vercel --prod --confirm', { stdio: 'inherit' });
}
async function pushSupabaseMigrations() {
    console.log('Pushing Supabase migrations...');
    (0, child_process_1.execSync)('supabase db push', { stdio: 'inherit' });
}
