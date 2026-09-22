"use strict";
/**
 * Safety Engine — FASE 4
 *
 * Módulo de segurança para ações do agente.
 * Expõe: Risk Engine, Dry-Run, Checkpoint, Rollback.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.markExecuted = exports.rejectAction = exports.approveAction = exports.createPendingAction = exports.restoreCheckpoint = exports.createCheckpoint = exports.dryRun = exports.getAllRules = exports.addCustomRule = exports.requiresApproval = exports.getRisk = exports.classifyAction = void 0;
var risk_engine_1 = require("./risk-engine");
Object.defineProperty(exports, "classifyAction", { enumerable: true, get: function () { return risk_engine_1.classifyAction; } });
Object.defineProperty(exports, "getRisk", { enumerable: true, get: function () { return risk_engine_1.getRisk; } });
Object.defineProperty(exports, "requiresApproval", { enumerable: true, get: function () { return risk_engine_1.requiresApproval; } });
Object.defineProperty(exports, "addCustomRule", { enumerable: true, get: function () { return risk_engine_1.addCustomRule; } });
Object.defineProperty(exports, "getAllRules", { enumerable: true, get: function () { return risk_engine_1.getAllRules; } });
var dry_run_1 = require("./dry-run");
Object.defineProperty(exports, "dryRun", { enumerable: true, get: function () { return dry_run_1.dryRun; } });
var checkpoint_1 = require("./checkpoint");
Object.defineProperty(exports, "createCheckpoint", { enumerable: true, get: function () { return checkpoint_1.createCheckpoint; } });
Object.defineProperty(exports, "restoreCheckpoint", { enumerable: true, get: function () { return checkpoint_1.restoreCheckpoint; } });
Object.defineProperty(exports, "createPendingAction", { enumerable: true, get: function () { return checkpoint_1.createPendingAction; } });
Object.defineProperty(exports, "approveAction", { enumerable: true, get: function () { return checkpoint_1.approveAction; } });
Object.defineProperty(exports, "rejectAction", { enumerable: true, get: function () { return checkpoint_1.rejectAction; } });
Object.defineProperty(exports, "markExecuted", { enumerable: true, get: function () { return checkpoint_1.markExecuted; } });
