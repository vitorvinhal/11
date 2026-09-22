"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRegistry = exports.AdapterRegistry = void 0;
const _9router_1 = require("./9router");
const anthropic_1 = require("./anthropic");
const gemini_1 = require("./gemini");
const minimax_1 = require("./minimax");
const openrouter_1 = require("./openrouter");
/**
 * Registry de adapters por provedor.
 * Ordem de preferência default no Modo Auto:
 *   9Router (free) → Gemini (free) → OpenRouter (pago) → Anthropic (pago) → MiniMax (pago)
 */
class AdapterRegistry {
    adapters = new Map();
    constructor() {
        this.register((0, _9router_1.nineRouterAdapter)());
        this.register((0, gemini_1.geminiAdapter)());
        this.register((0, openrouter_1.openRouterAdapter)());
        this.register((0, anthropic_1.anthropicAdapter)());
        this.register((0, minimax_1.minimaxAdapter)());
    }
    register(adapter) {
        this.adapters.set(adapter.id, adapter);
    }
    get(id) {
        return this.adapters.get(id);
    }
    /** Ordem de fallback no Modo Auto. */
    fallbackOrder() {
        return [(0, _9router_1.nineRouterAdapter)(), (0, gemini_1.geminiAdapter)(), (0, openrouter_1.openRouterAdapter)()];
    }
}
exports.AdapterRegistry = AdapterRegistry;
exports.defaultRegistry = new AdapterRegistry();
