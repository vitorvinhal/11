import { writeFileText, writeFileBuffer } from './file';
/**
 * ArtifactsTool — geração de artefatos estruturados:
 *  - Markdown/documentos (.md)
 *  - Planilhas CSV (.csv) com delimitador e BOM
 *  - Apresentações PPTX via officegen
 *  - JSON estruturado (schema) para consumo de pipelines
 */
export interface SlideInput {
    heading: string;
    content: string;
}
export declare function generateMarkdown(p: string, title: string, sections: Array<{
    h: number;
    title: string;
    body: string;
}>): Promise<{
    ok: boolean;
    path: string;
}>;
export declare function generateCSV(p: string, rows: Array<Array<string | number>>): Promise<{
    ok: boolean;
    path: string;
}>;
/**
 * Planilha simples em XLSX (SpreadsheetML) sem dependência pesada.
 * Suficiente para importar em Excel/Sheets.
 */
export declare function generateXLSX(p: string, sheetName: string, rows: Array<Array<string | number>>): Promise<{
    ok: boolean;
    path: string;
}>;
export declare function generatePPTXAdvanced(title: string, slides: SlideInput[]): Promise<{
    message: string;
    path?: string;
}>;
export declare function generateJSON(p: string, data: unknown): Promise<{
    ok: boolean;
    path: string;
}>;
export declare const artifactsTool: {
    generateMarkdown: typeof generateMarkdown;
    generateCSV: typeof generateCSV;
    generateXLSX: typeof generateXLSX;
    generatePPTXAdvanced: typeof generatePPTXAdvanced;
    generateJSON: typeof generateJSON;
    fileTool: {
        readFileText: typeof import("./file").readFileText;
        writeFileText: typeof writeFileText;
        writeFileBuffer: typeof writeFileBuffer;
        exists: typeof import("./file").exists;
        refactorFile: typeof import("./file").refactorFile;
    };
};
