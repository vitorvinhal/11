"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMessageLegacy = exports.handleMessage = exports.modelGateway = void 0;
/**
 * @11/ia — ponto de entrada do pacote de IA.
 * Expõe o ModelGateway (roteador multi-provedor), o AgentRouter e as tools.
 */
__exportStar(require("./router/types"), exports);
__exportStar(require("./router/convert"), exports);
__exportStar(require("./router/index"), exports);
__exportStar(require("./router/AgentRouter"), exports);
var index_1 = require("./router/index");
Object.defineProperty(exports, "modelGateway", { enumerable: true, get: function () { return index_1.modelGateway; } });
var AgentRouter_1 = require("./router/AgentRouter");
Object.defineProperty(exports, "handleMessage", { enumerable: true, get: function () { return AgentRouter_1.handleMessage; } });
Object.defineProperty(exports, "handleMessageLegacy", { enumerable: true, get: function () { return AgentRouter_1.handleMessageLegacy; } });
__exportStar(require("./tools/index"), exports);
__exportStar(require("./personality/seed"), exports);
