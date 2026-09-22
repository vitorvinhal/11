/**
 * true se `target` está dentro de alguma raiz permitida.
 * Usa path.relative (+ case-insensitive no Windows) + realpath.
 */
export declare function isWithinRoot(target: string, roots?: string[]): boolean;
export interface FileToolResult<T = unknown> {
    ok: boolean;
    path: string;
    data?: T;
    error?: string;
}
export declare function readFileText(p: string): Promise<string>;
export declare function writeFileText(p: string, content: string): Promise<FileToolResult>;
/** Escrita binária (ex.: PPTX/PNG) — não passar por utf8, que corrompe. */
export declare function writeFileBuffer(p: string, buffer: Buffer): Promise<FileToolResult>;
export declare function exists(p: string): Promise<boolean>;
/** Refatoração inteligente: substitui padrões no arquivo e valida sintaxe mínimo. */
export declare function refactorFile(p: string, replace: Array<{
    from: string;
    to: string;
}>): Promise<FileToolResult>;
export declare const fileTool: {
    readFileText: typeof readFileText;
    writeFileText: typeof writeFileText;
    writeFileBuffer: typeof writeFileBuffer;
    exists: typeof exists;
    refactorFile: typeof refactorFile;
};
