import { _ as mergeDiscoveredAuthoritativeModels, g as mergeCatalogModels, h as getAgentSessionOptionCatalog, v as sessionOptionValueIsValid } from "./agent-paste-draft-Ddp-k6QZ.js";
import { m as decideInitialAgentTabViewMode } from "./native-chat-session-option-cache-DOY0fjiI.js";
var STRUCTURED_BOOLEAN_OPTION_IDS = new Set(["fastMode"]);
function encodeStructuredAgentSessionOptionValue(e, u) {
	return STRUCTURED_BOOLEAN_OPTION_IDS.has(e) ? typeof u == "boolean" ? String(u) : null : typeof u == "string" ? u : null;
}
function decodeStructuredAgentSessionOptionValue(e, u) {
	return STRUCTURED_BOOLEAN_OPTION_IDS.has(e) ? u === "true" ? !0 : u === "false" ? !1 : null : u;
}
function resolveNativeChatSessionOptionDefaults(e, u) {
	let d = e?.[u], p = typeof d?.model == "string" && d.model.trim() ? d.model : void 0;
	if (!p) return;
	let m = { model: p }, h = d?.valuesByModel?.[p];
	if (h && typeof h == "object") for (let [e, u] of Object.entries(h)) sessionOptionValueIsValid(u) && (m[e] = u);
	return m;
}
const STRUCTURED_LAUNCH_SEED_OPTION_IDS = [
	"model",
	"effort",
	"fastMode"
];
var enrichmentByAgentHost = /* @__PURE__ */ new Map();
function enrichmentKey(e, u) {
	return JSON.stringify([e, u]);
}
function readNativeChatEnrichedModels(e, u) {
	let d = enrichmentByAgentHost.get(enrichmentKey(e, u))?.models;
	return d ? [...d] : null;
}
function subscribeNativeChatEnrichedModels(e, u, d) {
	let f = enrichmentKey(e, u), p = enrichmentByAgentHost.get(f) ?? {
		agent: e,
		state: "idle",
		models: null,
		listeners: /* @__PURE__ */ new Set()
	};
	return p.listeners.add(d), enrichmentByAgentHost.set(f, p), () => p.listeners.delete(d);
}
function resolveNativeChatLaunchSessionOptions(e, u) {
	let f = resolveNativeChatSessionOptionDefaults(e, u);
	if (!f || !getAgentSessionOptionCatalog(u)?.discoveredModelsAreAuthoritative) return f;
	let p = !1;
	for (let e of enrichmentByAgentHost.values()) if (e.agent === u && e.models && (p = !0, e.models.some((e) => e.id === f.model))) return f;
	return p ? void 0 : f;
}
function ensureNativeChatModelEnrichment(f) {
	let p = getAgentSessionOptionCatalog(f.agent);
	if (!p?.listModels) return;
	let m = enrichmentKey(f.agent, f.hostKey), h = enrichmentByAgentHost.get(m);
	if (h?.state === "pending" || h?.state === "settled") return;
	let g = h ?? {
		agent: f.agent,
		state: "idle",
		models: null,
		listeners: /* @__PURE__ */ new Set()
	};
	g.state = "pending", enrichmentByAgentHost.set(m, g), f.discover().then((d) => {
		if (g.state = "settled", !(!d || d.length === 0)) {
			g.models = f.agent === "claude" ? [...d] : p.discoveredModelsAreAuthoritative ? mergeDiscoveredAuthoritativeModels(p.models, d) : mergeCatalogModels(p.models, d);
			for (let e of g.listeners) e([...g.models]);
		}
	}).catch(() => {
		g.state = "settled";
	});
}
function resolveInitialNativeChatSessionOptions(e, u) {
	return decideInitialAgentTabViewMode({
		experimentalNativeChat: e?.experimentalNativeChat,
		openAgentTabsInChatByDefault: e?.openAgentTabsInChatByDefault,
		...u
	}) === "chat" ? resolveNativeChatLaunchSessionOptions(e?.nativeChatSessionOptions, u.agent) : void 0;
}
export { STRUCTURED_LAUNCH_SEED_OPTION_IDS as a, subscribeNativeChatEnrichedModels as i, ensureNativeChatModelEnrichment as n, decodeStructuredAgentSessionOptionValue as o, readNativeChatEnrichedModels as r, encodeStructuredAgentSessionOptionValue as s, resolveInitialNativeChatSessionOptions as t };
