"use strict";
/**
 * Agent Core — FASE 5-7
 *
 * Loop de execução do agente com integração ao Safety Engine.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearMetrics = exports.getRawMetrics = exports.getMetricSummary = exports.recordTokens = exports.recordError = exports.recordToolCalls = exports.recordLatency = exports.recordMetric = exports.getMemoryAudit = exports.logMemoryEvent = exports.supersedeMemory = exports.deleteMemory = exports.getRecentMemories = exports.searchMemories = exports.saveMemory = exports.expireOldSessions = exports.getMessages = exports.addMessage = exports.listActiveSessions = exports.updateSessionStatus = exports.getSession = exports.createSession = exports.claimDeviceJob = exports.resolveDeviceJob = exports.waitForDeviceJob = exports.createDeviceJob = exports.executeTool = exports.agentLoop = void 0;
var agent_core_1 = require("./agent-core");
Object.defineProperty(exports, "agentLoop", { enumerable: true, get: function () { return agent_core_1.agentLoop; } });
var tool_executor_1 = require("./tool-executor");
Object.defineProperty(exports, "executeTool", { enumerable: true, get: function () { return tool_executor_1.executeTool; } });
var device_jobs_1 = require("./device-jobs");
Object.defineProperty(exports, "createDeviceJob", { enumerable: true, get: function () { return device_jobs_1.createDeviceJob; } });
Object.defineProperty(exports, "waitForDeviceJob", { enumerable: true, get: function () { return device_jobs_1.waitForDeviceJob; } });
Object.defineProperty(exports, "resolveDeviceJob", { enumerable: true, get: function () { return device_jobs_1.resolveDeviceJob; } });
Object.defineProperty(exports, "claimDeviceJob", { enumerable: true, get: function () { return device_jobs_1.claimDeviceJob; } });
var session_manager_1 = require("./session-manager");
Object.defineProperty(exports, "createSession", { enumerable: true, get: function () { return session_manager_1.createSession; } });
Object.defineProperty(exports, "getSession", { enumerable: true, get: function () { return session_manager_1.getSession; } });
Object.defineProperty(exports, "updateSessionStatus", { enumerable: true, get: function () { return session_manager_1.updateSessionStatus; } });
Object.defineProperty(exports, "listActiveSessions", { enumerable: true, get: function () { return session_manager_1.listActiveSessions; } });
Object.defineProperty(exports, "addMessage", { enumerable: true, get: function () { return session_manager_1.addMessage; } });
Object.defineProperty(exports, "getMessages", { enumerable: true, get: function () { return session_manager_1.getMessages; } });
Object.defineProperty(exports, "expireOldSessions", { enumerable: true, get: function () { return session_manager_1.expireOldSessions; } });
var memory_1 = require("./memory");
Object.defineProperty(exports, "saveMemory", { enumerable: true, get: function () { return memory_1.saveMemory; } });
Object.defineProperty(exports, "searchMemories", { enumerable: true, get: function () { return memory_1.searchMemories; } });
Object.defineProperty(exports, "getRecentMemories", { enumerable: true, get: function () { return memory_1.getRecentMemories; } });
Object.defineProperty(exports, "deleteMemory", { enumerable: true, get: function () { return memory_1.deleteMemory; } });
Object.defineProperty(exports, "supersedeMemory", { enumerable: true, get: function () { return memory_1.supersedeMemory; } });
Object.defineProperty(exports, "logMemoryEvent", { enumerable: true, get: function () { return memory_1.logMemoryEvent; } });
Object.defineProperty(exports, "getMemoryAudit", { enumerable: true, get: function () { return memory_1.getMemoryAudit; } });
var metrics_1 = require("./metrics");
Object.defineProperty(exports, "recordMetric", { enumerable: true, get: function () { return metrics_1.recordMetric; } });
Object.defineProperty(exports, "recordLatency", { enumerable: true, get: function () { return metrics_1.recordLatency; } });
Object.defineProperty(exports, "recordToolCalls", { enumerable: true, get: function () { return metrics_1.recordToolCalls; } });
Object.defineProperty(exports, "recordError", { enumerable: true, get: function () { return metrics_1.recordError; } });
Object.defineProperty(exports, "recordTokens", { enumerable: true, get: function () { return metrics_1.recordTokens; } });
Object.defineProperty(exports, "getMetricSummary", { enumerable: true, get: function () { return metrics_1.getMetricSummary; } });
Object.defineProperty(exports, "getRawMetrics", { enumerable: true, get: function () { return metrics_1.getRawMetrics; } });
Object.defineProperty(exports, "clearMetrics", { enumerable: true, get: function () { return metrics_1.clearMetrics; } });
