"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgeModule = void 0;
const common_1 = require("@nestjs/common");
const bridge_controller_1 = require("./bridge.controller");
const ops_service_1 = require("./ops.service");
const audit_log_service_1 = require("./audit-log.service");
const rate_limit_guard_1 = require("./rate-limit.guard");
const session_guard_1 = require("../auth/session.guard");
let BridgeModule = class BridgeModule {
};
exports.BridgeModule = BridgeModule;
exports.BridgeModule = BridgeModule = __decorate([
    (0, common_1.Module)({
        controllers: [bridge_controller_1.BridgeController],
        providers: [ops_service_1.OpsService, audit_log_service_1.AuditLogService, rate_limit_guard_1.RateLimitGuard, session_guard_1.SessionGuard],
    })
], BridgeModule);
