/**
 * TestsTool — execução de testes/validações frontend e lint.
 * Roda comandos de projeto (pnpm) de forma controlada no diretório do alvo.
 */
export interface RunResult {
    stdout: string;
    stderr: string;
    exitCode: number | null;
}
export declare function runTests(cwd: string, command?: 'test' | 'lint' | 'typecheck' | 'build'): Promise<RunResult>;
export declare function validateFrontend(cwd: string): Promise<{
    ok: boolean;
    summary: RunResult[];
}>;
export declare const testsTool: {
    runTests: typeof runTests;
    validateFrontend: typeof validateFrontend;
};
