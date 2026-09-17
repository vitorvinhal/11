import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuditLogService } from './audit-log.service';
/**
 * AuditInterceptor — grava nome da operação + payload no audit log.
 * É aplicado por rota no BridgeController.
 */
export declare class AuditInterceptor implements NestInterceptor {
    private readonly audit;
    private readonly operation;
    constructor(audit: AuditLogService, operation: string);
    intercept(context: ExecutionContext, next: CallHandler): Observable<unknown>;
}
