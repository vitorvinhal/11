"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeController = void 0;
const common_1 = require("@nestjs/common");
const ops_service_1 = require("./ops.service");
const audit_log_service_1 = require("./audit-log.service");
const rate_limit_guard_1 = require("./rate-limit.guard");
const session_guard_1 = require("../auth/session.guard");
/**
 * BridgeController — expõe APENAS operações nomeadas e validadas.
 * Sem endpoint genérico de execução de shell.
 */
let BridgeController = class BridgeController {
    ops;
    audit;
    constructor(ops, audit) {
        this.ops = ops;
        this.audit = audit;
    }
    async auditOp(req, operation, payload, err) {
        await this.audit.record(req.user?.sub, operation, mapObj(payload, err));
    }
    async listFiles(req, path) {
        if (!path)
            return { error: 'path é obrigatório' };
        try {
            const result = await this.ops.listFiles({ path });
            await this.auditOp(req, 'list-files', { path });
            return result;
        }
        catch (err) {
            await this.auditOp(req, 'list-files', { path }, err);
            throw err;
        }
    }
    async readFile(req, path) {
        if (!path)
            return { error: 'path é obrigatório' };
        try {
            const result = await this.ops.readFile({ path });
            await this.auditOp(req, 'read-file', { path });
            return result;
        }
        catch (err) {
            await this.auditOp(req, 'read-file', { path }, err);
            throw err;
        }
    }
    async writeFile(req, body) {
        if (!body?.path || body.content === undefined)
            return { error: 'path e content são obrigatórios' };
        try {
            const result = await this.ops.writeFile({ path: body.path, content: body.content });
            await this.auditOp(req, 'write-file', { path: body.path, bytes: result.bytes });
            return result;
        }
        catch (err) {
            await this.auditOp(req, 'write-file', { path: body.path }, err);
            throw err;
        }
    }
    async runBuild(req, body) {
        if (!body?.path)
            return { error: 'path é obrigatório' };
        try {
            const result = await this.ops.runBuild({ path: body.path, script: body.script });
            await this.auditOp(req, 'run-build', { path: body.path, script: body.script });
            return result;
        }
        catch (err) {
            await this.auditOp(req, 'run-build', { path: body.path }, err);
            throw err;
        }
    }
    async runCommand(req, body) {
        if (!body?.command)
            return { error: 'command é obrigatório' };
        try {
            const result = await this.ops.runCommand({ command: body.command, args: body.args, cwd: body.cwd });
            await this.auditOp(req, 'run-command', { command: body.command, args: body.args, cwd: body.cwd });
            return result;
        }
        catch (err) {
            await this.auditOp(req, 'run-command', { command: body.command }, err);
            throw err;
        }
    }
    async runTests(req, body) {
        if (!body?.path)
            return { error: 'path é obrigatório' };
        try {
            const result = await this.ops.runTests({ path: body.path, command: body.command });
            await this.auditOp(req, 'run-tests', { path: body.path, command: body.command });
            return result;
        }
        catch (err) {
            await this.auditOp(req, 'run-tests', { path: body.path }, err);
            throw err;
        }
    }
};
exports.BridgeController = BridgeController;
__decorate([
    (0, common_1.Get)('list-files'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('path')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BridgeController.prototype, "listFiles", null);
__decorate([
    (0, common_1.Get)('read-file'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('path')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BridgeController.prototype, "readFile", null);
__decorate([
    (0, common_1.Post)('write-file'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BridgeController.prototype, "writeFile", null);
__decorate([
    (0, common_1.Post)('run-build'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BridgeController.prototype, "runBuild", null);
__decorate([
    (0, common_1.Post)('run-command'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BridgeController.prototype, "runCommand", null);
__decorate([
    (0, common_1.Post)('run-tests'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BridgeController.prototype, "runTests", null);
exports.BridgeController = BridgeController = __decorate([
    (0, common_1.Controller)('ops'),
    (0, common_1.UseGuards)(rate_limit_guard_1.RateLimitGuard, session_guard_1.SessionGuard),
    __metadata("design:paramtypes", [ops_service_1.OpsService,
        audit_log_service_1.AuditLogService])
], BridgeController);
function mapObj(o, err) {
    const base = o ? { ...o } : {};
    if (err)
        base.error = err.message;
    return base;
}
