export interface ListFilesInput {
    path: string;
}
export interface ReadFileInput {
    path: string;
}
export interface WriteFileInput {
    path: string;
    content: string;
}
export interface RunBuildInput {
    path: string;
    script?: string;
}
export interface RunCommandInput {
    command: string;
    args?: string[];
    cwd?: string;
}
export interface RunTestsInput {
    path: string;
    command?: string;
}
export interface FileEntry {
    name: string;
    isDir: boolean;
    path: string;
}
export interface ReadFileResult {
    content: string;
    size: number;
}
export interface BuildResult {
    stdout: string;
    stderr: string;
}
/**
 * OpsService — operações remotas nomeadas, validadas e com execução controlada.
 *  - Nenhum shell arbitrário: execFile/spawn com args em array.
 *  - Whitelist de diretórios (BRIDGE_ALLOWED_DIRS) + allowlist de comandos.
 *  - Suporte a escrita refatorada, geração de artefatos e execução de testes.
 */
export declare class OpsService {
    listFiles(input: ListFilesInput): Promise<FileEntry[]>;
    readFile(input: ReadFileInput): Promise<ReadFileResult>;
    writeFile(input: WriteFileInput): Promise<{
        ok: true;
        path: string;
        bytes: number;
    }>;
    runBuild(input: RunBuildInput): Promise<BuildResult>;
    /** Executa comandos autorizados via execFile (sem shell), com cwd na whitelist. */
    runCommand(input: RunCommandInput): Promise<{
        stdout: string;
        stderr: string;
        exitCode: number | null;
    }>;
    runTests(input: RunTestsInput): Promise<BuildResult & {
        exitCode: number | null;
    }>;
}
