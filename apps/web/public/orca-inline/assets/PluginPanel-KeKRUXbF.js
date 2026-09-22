import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { E as _enum, F as object, I as record, L as string, N as literal, O as array, P as number, c as isPluginPanelTabKey, j as json, k as boolean, z as unknown } from "./stale-document-visibility-rSdoU229.js";
import "./keybindings-1v53ESY9.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { n as getWindowParkVisible, r as subscribeWindowParkVisibility } from "./window-park-visibility-BBcurIcE.js";
import { t as PLUGIN_EVENT_NAMES } from "./plugin-manifest-IOUR3zA1.js";
import { a as usePluginPanelsStore, i as usePluginPanels } from "./plugin-panels-CCxWKTKi.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
const PLUGIN_TERMINAL_ID_MAX_LENGTH = 1024;
var workspaceReadContextParams = object({}).strict().optional(), workspaceReadContextResult = object({
	branch: string().max(512),
	displayName: string().max(512),
	terminals: array(object({ id: string().min(1).max(PLUGIN_TERMINAL_ID_MAX_LENGTH) }).strict()).max(50)
}).strict().nullable(), terminalSendTextParams = object({
	terminalId: string().min(1).max(PLUGIN_TERMINAL_ID_MAX_LENGTH),
	text: string().min(1).max(4096),
	enter: boolean().default(!1)
}), terminalSendTextResult = object({ accepted: boolean() }), notificationsShowParams = object({
	title: string().min(1).max(120),
	body: string().max(1e3).optional()
}), notificationsShowResult = object({ delivered: boolean() }), RESERVED_STORAGE_KEYS = new Set([
	"__proto__",
	"prototype",
	"constructor"
]), storageKeySchema = string().min(1).max(256).refine((o) => !RESERVED_STORAGE_KEYS.has(o), "reserved storage key"), pluginJsonValueSchema = json(), storageGetParams = object({ key: storageKeySchema }), storageGetResult = object({ value: pluginJsonValueSchema }), storageSetParams = object({
	key: storageKeySchema,
	value: pluginJsonValueSchema
}), storageSetResult = object({ ok: literal(!0) }), storageDeleteParams = object({ key: storageKeySchema }), storageDeleteResult = object({ ok: literal(!0) }), storageKeysParams = object({}).strict().optional(), storageKeysResult = object({ keys: array(string()).max(1024) }), secretsGetParams = object({ key: storageKeySchema }), secretsGetResult = object({ value: string().nullable() }), secretsSetParams = object({
	key: storageKeySchema,
	value: string().max(64 * 1024)
}), secretsSetResult = object({ ok: literal(!0) }), secretsDeleteParams = object({ key: storageKeySchema }), secretsDeleteResult = object({ ok: literal(!0) }), settingsGetParams = object({}).strict().optional(), settingsGetResult = object({ settings: record(string(), pluginJsonValueSchema) }), settingsSetParams = object({
	key: storageKeySchema,
	value: pluginJsonValueSchema
}), settingsSetResult = object({ ok: literal(!0) }), eventsSubscribeParams = object({ events: array(_enum(PLUGIN_EVENT_NAMES)).min(1).max(PLUGIN_EVENT_NAMES.length) }), eventsSubscribeResult = object({ subscribed: array(_enum(PLUGIN_EVENT_NAMES)) }), spec = (o) => ({
	...o,
	stability: "experimental"
});
const PLUGIN_HOST_API_V0 = [
	spec({
		name: "workspace.readContext",
		since: "1.0",
		scope: "active-worktree",
		capability: "workspace:read",
		mutation: !1,
		panel: !0,
		params: workspaceReadContextParams,
		result: workspaceReadContextResult
	}),
	spec({
		name: "terminal.sendText",
		since: "1.0",
		scope: "explicit-terminal",
		capability: "terminal:send",
		mutation: !0,
		panel: !0,
		params: terminalSendTextParams,
		result: terminalSendTextResult
	}),
	spec({
		name: "notifications.show",
		since: "1.0",
		scope: "desktop",
		capability: "notifications:show",
		mutation: !0,
		panel: !0,
		params: notificationsShowParams,
		result: notificationsShowResult
	}),
	spec({
		name: "storage.get",
		since: "1.0",
		scope: "plugin-private",
		capability: "storage",
		mutation: !1,
		panel: !1,
		params: storageGetParams,
		result: storageGetResult
	}),
	spec({
		name: "storage.set",
		since: "1.0",
		scope: "plugin-private",
		capability: "storage",
		mutation: !0,
		panel: !1,
		params: storageSetParams,
		result: storageSetResult
	}),
	spec({
		name: "storage.delete",
		since: "1.0",
		scope: "plugin-private",
		capability: "storage",
		mutation: !0,
		panel: !1,
		params: storageDeleteParams,
		result: storageDeleteResult
	}),
	spec({
		name: "storage.keys",
		since: "1.0",
		scope: "plugin-private",
		capability: "storage",
		mutation: !1,
		panel: !1,
		params: storageKeysParams,
		result: storageKeysResult
	}),
	spec({
		name: "secrets.get",
		since: "1.0",
		scope: "plugin-private",
		capability: "secrets",
		mutation: !1,
		panel: !1,
		params: secretsGetParams,
		result: secretsGetResult
	}),
	spec({
		name: "secrets.set",
		since: "1.0",
		scope: "plugin-private",
		capability: "secrets",
		mutation: !0,
		panel: !1,
		params: secretsSetParams,
		result: secretsSetResult
	}),
	spec({
		name: "secrets.delete",
		since: "1.0",
		scope: "plugin-private",
		capability: "secrets",
		mutation: !0,
		panel: !1,
		params: secretsDeleteParams,
		result: secretsDeleteResult
	}),
	spec({
		name: "settings.get",
		since: "1.0",
		scope: "plugin-private",
		capability: "settings:own",
		mutation: !1,
		panel: !1,
		params: settingsGetParams,
		result: settingsGetResult
	}),
	spec({
		name: "settings.set",
		since: "1.0",
		scope: "plugin-private",
		capability: "settings:own",
		mutation: !0,
		panel: !1,
		params: settingsSetParams,
		result: settingsSetResult
	}),
	spec({
		name: "events.subscribe",
		since: "1.0",
		scope: "host-events",
		capability: "events:subscribe",
		mutation: !1,
		panel: !1,
		params: eventsSubscribeParams,
		result: eventsSubscribeResult
	})
];
new Map(PLUGIN_HOST_API_V0.map((o) => [o.name, o]));
const PLUGIN_PANEL_ACTIONS = PLUGIN_HOST_API_V0.filter((o) => o.panel).map((o) => o.name);
function isPluginPanelAction(o) {
	return PLUGIN_PANEL_ACTIONS.includes(o);
}
const PANEL_ACTION_RESULT_TYPE = "orca-panel-action-result", PANEL_MESSAGE_RATE_LIMIT = {
	maxMessages: 30,
	perMs: 1e4
}, panelActionRequestSchema = object({
	type: literal("orca-panel-action"),
	requestId: string().min(1).max(128),
	action: string().min(1).refine(isPluginPanelAction, "not a panel-callable action"),
	params: unknown().optional()
});
object({
	type: literal("orca-panel-pong"),
	pingId: number().int().nonnegative()
}), object({
	sessionToken: string().min(32).max(128),
	action: string().min(1),
	params: unknown().optional()
}).strict();
function parsePanelActionRequest(o) {
	let F = panelActionRequestSchema.safeParse(o);
	if (F.success) return {
		ok: !0,
		request: F.data
	};
	let I = null;
	if (typeof o == "object" && o && "requestId" in o) {
		let F = o.requestId;
		typeof F == "string" && F.length > 0 && F.length <= 128 && (I = F);
	}
	let L = F.error.issues[0], R = L?.path.join(".") || "(root)";
	return {
		ok: !1,
		requestId: I,
		error: `${R}: ${L?.message ?? "invalid panel action request"}`
	};
}
function looksLikePanelActionRequest(o) {
	return typeof o == "object" && !!o && o.type === "orca-panel-action";
}
function readPanelPongId(o) {
	if (typeof o != "object" || !o) return null;
	let F = o;
	return F.type !== "orca-panel-pong" || typeof F.pingId != "number" ? null : Number.isSafeInteger(F.pingId) && F.pingId >= 0 ? F.pingId : null;
}
const PANEL_DESIGN_TOKEN_ALLOWLIST = [
	"--background",
	"--foreground",
	"--card",
	"--card-foreground",
	"--popover",
	"--popover-foreground",
	"--primary",
	"--primary-foreground",
	"--secondary",
	"--secondary-foreground",
	"--muted",
	"--muted-foreground",
	"--accent",
	"--accent-foreground",
	"--destructive",
	"--destructive-foreground",
	"--border",
	"--input",
	"--ring",
	"--radius"
];
function createPanelMessageBudget(o = {}) {
	let F = o.maxBytes ?? 65536, I = o.maxMessages ?? PANEL_MESSAGE_RATE_LIMIT.maxMessages, L = o.perMs ?? PANEL_MESSAGE_RATE_LIMIT.perMs, R = [];
	return {
		maxBytes: F,
		admit(o, z) {
			for (; R.length > 0 && R[0] <= o - L;) R.shift();
			return R.length >= I ? "rate_limited" : (R.push(o), z > F ? "oversized" : null);
		}
	};
}
function createPanelControlMessageBudget() {
	return {
		maxBytes: 1024,
		admit: (o, F) => F > 1024 ? "oversized" : null
	};
}
var textEncoder = new TextEncoder();
function utf8Bytes(o, F) {
	return o.length > F ? F + 1 : textEncoder.encode(o).byteLength;
}
function structuredCloneMessageBytes(o, F = 65536) {
	let I = /* @__PURE__ */ new WeakSet(), L = 0, R = 0, z = (o) => {
		L = Math.min(F + 1, L + o);
	}, B = (o, V) => {
		if (L > F) return;
		if (o === null) {
			z(1);
			return;
		}
		switch (typeof o) {
			case "undefined":
			case "boolean":
				z(1);
				return;
			case "number":
				z(8);
				return;
			case "bigint":
				z(utf8Bytes(o.toString(), F - L));
				return;
			case "string":
				z(utf8Bytes(o, F - L));
				return;
			case "symbol":
			case "function":
				L = F + 1;
				return;
			case "object": break;
		}
		let H = o;
		if (I.has(H)) {
			z(8);
			return;
		}
		if (I.add(H), R += 1, R > 1e4 || V > 100) {
			L = F + 1;
			return;
		}
		if (H instanceof ArrayBuffer) {
			z(H.byteLength);
			return;
		}
		if (typeof SharedArrayBuffer < "u" && H instanceof SharedArrayBuffer) {
			z(H.byteLength);
			return;
		}
		if (ArrayBuffer.isView(H)) {
			z(16), B(H.buffer, V + 1);
			return;
		}
		if (typeof Blob < "u" && H instanceof Blob) {
			z(H.size);
			return;
		}
		if (H instanceof Date) {
			z(8);
			return;
		}
		if (H instanceof RegExp) {
			B(H.source, V + 1), B(H.flags, V + 1);
			return;
		}
		if (H instanceof Map) {
			z(8);
			for (let [o, I] of H) if (z(4), B(o, V + 1), B(I, V + 1), L > F) return;
			return;
		}
		if (H instanceof Set) {
			z(8);
			for (let o of H) if (z(4), B(o, V + 1), L > F) return;
			return;
		}
		if (Array.isArray(H)) {
			z(8);
			for (let o of H) if (z(4), B(o, V + 1), L > F) return;
			return;
		}
		try {
			let o = Object.getPrototypeOf(H);
			if (o !== Object.prototype && o !== null) {
				L = F + 1;
				return;
			}
			for (let o of Object.keys(H)) if (z(4), z(utf8Bytes(o, F - L)), B(H[o], V + 1), L > F) return;
		} catch {
			L = F + 1;
		}
	};
	return B(o, 0), L;
}
function callPanelActionViaPreload(o) {
	let F = window.api?.plugins?.panelAction;
	return F ? F(o) : Promise.resolve({
		ok: !1,
		code: "unavailable",
		error: translate("auto.components.rightSidebar.pluginPanelBridgeHost.actionsUnavailable", "Plugin actions are not available in this client.")
	});
}
function createPanelBridgeMessageHandler(o) {
	let F = o.budget ?? createPanelMessageBudget(), L = o.controlBudget ?? createPanelControlMessageBudget(), R = o.now ?? (() => Date.now());
	return (z) => {
		let B = o.getPanelWindow();
		if (!B || z.source !== B) return;
		let V = B, H = (F) => {
			o.isActive?.() === !1 || o.getPanelWindow() !== V || V.postMessage(F, "*");
		}, U = readPanelPongId(z.data);
		if (U !== null) {
			let I = R(), B = structuredCloneMessageBytes(z.data, L.maxBytes ?? 1024);
			F.admit(I, B), L.admit(I, B) || o.onPong?.(U);
			return;
		}
		let W = F.admit(R(), structuredCloneMessageBytes(z.data, F.maxBytes));
		if (W) {
			let o = typeof z.data == "object" && z.data !== null ? z.data.requestId : void 0;
			typeof o == "string" && o.length > 0 && o.length <= 128 && H({
				type: PANEL_ACTION_RESULT_TYPE,
				requestId: o,
				ok: !1,
				errorCode: W === "oversized" ? "invalid_request" : "rate_limited",
				error: W === "oversized" ? translate("auto.components.rightSidebar.pluginPanelBridgeHost.messageTooLarge", "Message exceeds the size limit.") : translate("auto.components.rightSidebar.pluginPanelBridgeHost.tooManyRequests", "Too many requests.")
			});
			return;
		}
		if (!looksLikePanelActionRequest(z.data)) return;
		let G = parsePanelActionRequest(z.data);
		if (!G.ok) {
			G.requestId && H({
				type: PANEL_ACTION_RESULT_TYPE,
				requestId: G.requestId,
				ok: !1,
				errorCode: "invalid_request",
				error: G.error
			});
			return;
		}
		let { requestId: K, action: q, params: J } = G.request;
		o.callPanelAction({
			sessionToken: o.sessionToken,
			action: q,
			params: J
		}).then((o) => {
			H(o.ok ? {
				type: PANEL_ACTION_RESULT_TYPE,
				requestId: K,
				ok: !0,
				value: o.value
			} : {
				type: PANEL_ACTION_RESULT_TYPE,
				requestId: K,
				ok: !1,
				errorCode: o.code,
				error: o.error
			});
		}).catch((o) => {
			H({
				type: PANEL_ACTION_RESULT_TYPE,
				requestId: K,
				ok: !1,
				errorCode: "action_failed",
				error: o instanceof Error ? o.message : String(o)
			});
		});
	};
}
function createPanelWatchdog(o) {
	let F = o.pingIntervalMs ?? 1e4, I = o.pongTimeoutMs ?? 5e3, L = null, R = null, z = 0, B = null, V = !1, H = 0, U = null, W = () => {
		R &&= (clearTimeout(R), null);
	}, G = () => {
		if (!V || B !== null || !getWindowParkVisible()) return;
		B = z++, o.sendPing(B);
		let F = H;
		R = setTimeout(() => {
			V && H === F && B !== null && (V = !1, L &&= (clearInterval(L), null), R = null, B = null, o.onUnresponsive());
		}, I);
	};
	return {
		start() {
			V || (H += 1, V = !0, B = null, W(), L = setInterval(G, F), U?.(), U = subscribeWindowParkVisibility(() => {
				getWindowParkVisible() && G();
			}), G());
		},
		stop() {
			V = !1, H += 1, U?.(), U = null, L &&= (clearInterval(L), null), W(), B = null;
		},
		handlePong(o) {
			V && o === B && (B = null, W());
		}
	};
}
function buildPanelDesignTokenCss() {
	let o = getComputedStyle(document.documentElement), F = [];
	for (let I of PANEL_DESIGN_TOKEN_ALLOWLIST) {
		let L = o.getPropertyValue(I).trim();
		L.length > 0 && F.push(`${I}:${L.replaceAll(/[{}<>;]/g, "")}`);
	}
	return F.join(";");
}
function currentPanelColorScheme() {
	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function readPanelThemeSnapshot() {
	return `${currentPanelColorScheme()}|${buildPanelDesignTokenCss()}`;
}
function usePluginPanelThemeRevision() {
	let [o, F] = (0, import_react.useState)(0), I = (0, import_react.useRef)(null);
	return (0, import_react.useEffect)(() => {
		I.current ??= readPanelThemeSnapshot();
		let o = new MutationObserver(() => {
			let o = readPanelThemeSnapshot();
			o !== I.current && (I.current = o, F((o) => o + 1));
		});
		return o.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class", "style"]
		}), () => o.disconnect();
	}, []), o;
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function PluginPanelMessage({ children: o }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-0 flex-1 items-center justify-center p-6 text-center text-sm text-muted-foreground",
		children: o
	});
}
function fillPanelShell(o) {
	return o.replace("__ORCA_COLOR_SCHEME__", currentPanelColorScheme()).replace("/*__ORCA_PANEL_TOKENS__*/", buildPanelDesignTokenCss());
}
function PluginPanel({ tabKey: o }) {
	let F = usePluginPanels(), L = usePluginPanelsStore((o) => o.setPanelHealth), R = isPluginPanelTabKey(o) ? F.find((F) => F.tabKey === o) ?? null : null, [z, B] = (0, import_react.useState)({ status: "loading" }), [V, H] = (0, import_react.useState)(null), [U, W] = (0, import_react.useState)(null), K = (0, import_react.useRef)(null), q = usePluginPanelThemeRevision(), J = R?.pluginKey ?? null, Y = R?.id ?? null, X = z.status === "ready" ? z.shellHtml : null, Z = X ? fillPanelShell(X) : null, Q = z.status === "ready" ? `${o}:${z.documentRevision}:${q}` : null, $ = (0, import_react.useMemo)(() => createPanelWatchdog({
		sendPing: (o) => K.current?.contentWindow?.postMessage({
			type: "orca-panel-ping",
			pingId: o
		}, "*"),
		onUnresponsive: () => {
			L(o, "error"), B({ status: "unresponsive" });
		}
	}), [L, o]);
	return (0, import_react.useEffect)(() => {
		if (!V || !Z) return;
		let o = !0, F = createPanelBridgeMessageHandler({
			sessionToken: V,
			getPanelWindow: () => K.current?.contentWindow ?? null,
			callPanelAction: callPanelActionViaPreload,
			isActive: () => o,
			onPong: (o) => $.handlePong(o)
		});
		return window.addEventListener("message", F), () => {
			o = !1, window.removeEventListener("message", F);
		};
	}, [
		Z,
		V,
		$
	]), (0, import_react.useEffect)(() => {
		if (!(!Q || U !== Q)) return $.start(), () => $.stop();
	}, [
		U,
		Q,
		$
	]), (0, import_react.useEffect)(() => {
		if (!J || !Y) return;
		let F = !1, I = null, R = 0;
		B({ status: "loading" }), H(null);
		let z = window.api?.plugins;
		if (!z) {
			L(o, "error"), B({ status: "error" });
			return;
		}
		let V = 0, U = () => {
			let U = ++V;
			z.readPanelEntry({
				pluginKey: J,
				panelId: Y
			}).then((z) => {
				if (!(F || U !== V)) {
					if (!z) {
						I = null, H(null), L(o, "error"), B({ status: "error" });
						return;
					}
					H(z.sessionToken), L(o, "healthy"), z.html !== I && (I = z.html, R += 1, L(o, "healthy"), B({
						status: "ready",
						shellHtml: z.html,
						documentRevision: R
					}));
				}
			}).catch(() => {
				!F && U === V && (I = null, H(null), L(o, "error"), B({ status: "error" }));
			});
		};
		U();
		let W = z.onChanged ? z.onChanged(U) : null;
		return () => {
			F = !0, V += 1, W?.();
		};
	}, [
		Y,
		J,
		L,
		o
	]), R ? z.status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginPanelMessage, { children: translate("auto.components.right.sidebar.PluginPanel.loading", "Loading plugin panel...") }) : z.status === "unresponsive" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginPanelMessage, { children: translate("auto.components.right.sidebar.PluginPanel.unresponsive", "This plugin panel stopped responding and was suspended.") }) : z.status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginPanelMessage, { children: translate("auto.components.right.sidebar.PluginPanel.loadFailed", "The plugin panel could not be loaded.") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
		ref: K,
		sandbox: "allow-scripts",
		name: `orca-plugin-panel:${o}`,
		srcDoc: Z ?? "",
		onLoad: () => W(Q),
		title: R.title,
		className: "h-full w-full flex-1 border-0 bg-background"
	}, Q) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PluginPanelMessage, { children: translate("auto.components.right.sidebar.PluginPanel.unavailable", "This plugin panel is no longer available.") });
}
var PluginPanel_default = PluginPanel;
export { PluginPanel_default as default };
