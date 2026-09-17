import { Request } from 'express';
import { OpsService } from './ops.service';
import { AuditLogService } from './audit-log.service';
/**
 * BridgeController — expõe APENAS operações nomeadas e validadas.
 * Sem endpoint genérico de execução de shell.
 */
export declare class BridgeController {
    private readonly ops;
    private readonly audit;
    constructor(ops: OpsService, audit: AuditLogService);
    private auditOp;
    listFiles(req: Request, path: string): Promise<import("./ops.service").FileEntry[] | {
        error: string;
    }>;
    readFile(req: Request, path: string): Promise<import("./ops.service").ReadFileResult | {
        error: string;
    }>;
    writeFile(req: Request, body: {
        path?: string;
        content?: string;
    }): Promise<{
        ok: true;
        path: string;
        bytes: number;
    } | {
        error: string;
    }>;
    runBuild(req: Request, body: {
        path?: string;
        script?: string;
    }): Promise<import("./ops.service").BuildResult | {
        error: string;
    }>;
    runCommand(req: Request, body: {
        command?: string;
        args?: string[];
        cwd?: string;
    }): Promise<{
        stdout: string;
        stderr: string;
        exitCode: number | null;
    } | {
        error: string;
    }>;
    runTests(req: Request, body: {
        path?: string;
        command?: string;
    }): Promise<(import("./ops.service").BuildResult & {
        exitCode: number | null;
    }) | {
        error: string;
    }>;
}
