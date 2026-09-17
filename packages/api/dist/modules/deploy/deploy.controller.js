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
exports.DeployController = void 0;
const common_1 = require("@nestjs/common");
const deploy_broker_service_1 = require("./deploy-broker.service");
const session_guard_1 = require("../auth/session.guard");
/**
 * DeployController — governança de deploy.
 *  - IA só cria requests (pending) e NUNCA tem credenciais estáticas.
 *  - Humano aprova e recebe token curto de escopo mínimo.
 *  - Circuit breaker + rollback de um clique no mesmo controlador.
 */
let DeployController = class DeployController {
    broker;
    constructor(broker) {
        this.broker = broker;
    }
    request(req, body) {
        const userId = req.user?.sub ?? 'agent';
        return this.broker.requestDeploy(userId, {
            action: body.action,
            target: body.target,
            metadata: body.metadata,
        });
    }
    approve(requestId, req) {
        const approverId = req.user?.sub ?? 'human'; // substitua por guard RBAC de admin
        return this.broker.approveDeploy(requestId, approverId);
    }
    execute(body) {
        return this.broker.executeWithToken(body.token, async () => {
            // Runner real fica em packages/cli (scripts/deploy). Aqui registramos o objetivo.
            return { ok: true, revision: `deploy-${Date.now()}` };
        });
    }
    rollback(requestId) {
        return this.broker.rollback(requestId);
    }
    circuit() {
        return this.broker.circuitStatus();
    }
};
exports.DeployController = DeployController;
__decorate([
    (0, common_1.Post)('request'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DeployController.prototype, "request", null);
__decorate([
    (0, common_1.Post)('approve/:requestId'),
    __param(0, (0, common_1.Param)('requestId')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DeployController.prototype, "approve", null);
__decorate([
    (0, common_1.Post)('execute'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeployController.prototype, "execute", null);
__decorate([
    (0, common_1.Post)('rollback/:requestId'),
    __param(0, (0, common_1.Param)('requestId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeployController.prototype, "rollback", null);
__decorate([
    (0, common_1.Get)('circuit'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeployController.prototype, "circuit", null);
exports.DeployController = DeployController = __decorate([
    (0, common_1.Controller)('deploy'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __metadata("design:paramtypes", [deploy_broker_service_1.DeployBrokerService])
], DeployController);
