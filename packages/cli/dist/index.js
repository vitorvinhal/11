#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const deploy_1 = require("./scripts/deploy");
const codegen_1 = require("./generators/codegen");
const git_guard_1 = require("./scripts/git-guard");
const program = new commander_1.Command();
program
    .name('11-cli')
    .description('CLI da IA 11 — deploy, codegen e git-guard')
    .version('0.2.0-alpha');
program
    .command('deploy <action>')
    .description('Solicita deploy via broker (vercel|supabase|database|web)')
    .option('--run <token>', 'executa deploy aprovado com token curto')
    .option('--scope <vercel|supabase>', 'escopo do deploy ao executar com --run')
    .option('--sub <subject>', 'subject do request')
    .action(async (action, opts) => {
    try {
        if (opts.run) {
            const res = await (0, deploy_1.runDeploy)(opts.run, opts.scope ?? 'vercel');
            console.log('Deploy OK:', res.ok);
            return;
        }
        const res = await (0, deploy_1.requestDeploy)(action, { sub: opts.sub ?? 'agent' });
        console.log('Request criado:', JSON.stringify(res, null, 2));
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
});
program
    .command('codegen <type> <spec>')
    .description('Gera código full-stack a partir de spec OpenAPI/Swagger')
    .action(async (type, spec) => {
    try {
        await (0, codegen_1.generateCode)(type, spec);
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
});
program
    .command('git-guard')
    .description('Bloqueia commit em branch protegida e roda gate lint+tests+build')
    .action(() => {
    (0, git_guard_1.guardCommit)();
});
program.parse(process.argv);
if (!process.argv.slice(2).length) {
    program.help();
}
