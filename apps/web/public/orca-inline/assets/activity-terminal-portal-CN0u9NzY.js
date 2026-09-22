import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), currentTargets = [], emptyTargets = [], subscribers = /* @__PURE__ */ new Set(), ACTIVITY_TERMINAL_PORTAL_FIELD_EQUALS = Object.values({
	slotId: (e, c) => e.slotId === c.slotId,
	requestToken: (e, c) => e.requestToken === c.requestToken,
	target: (e, c) => e.target === c.target,
	worktreeId: (e, c) => e.worktreeId === c.worktreeId,
	tabId: (e, c) => e.tabId === c.tabId,
	paneKey: (e, c) => e.paneKey === c.paneKey,
	forceUnavailable: (e, c) => e.forceUnavailable === c.forceUnavailable,
	active: (e, c) => e.active === c.active
});
function haveSameActivityTerminalPortals(e, c) {
	return e.length === c.length && e.every((e, l) => {
		let u = c[l];
		return u !== void 0 && ACTIVITY_TERMINAL_PORTAL_FIELD_EQUALS.every((c) => c(e, u));
	});
}
function setActivityTerminalPortals(e) {
	if (!(currentTargets === e || haveSameActivityTerminalPortals(currentTargets, e))) {
		currentTargets = e;
		for (let e of subscribers) e();
	}
}
function subscribeActivityTerminalPortals(e) {
	return subscribers.add(e), () => {
		subscribers.delete(e);
	};
}
function useActivityTerminalPortals(e) {
	let c = (0, import_react.useCallback)((c) => e ? subscribeActivityTerminalPortals(c) : () => {}, [e]), d = (0, import_react.useCallback)(() => e ? currentTargets : emptyTargets, [e]);
	return (0, import_react.useSyncExternalStore)(c, d, d);
}
function findActivityTerminalPortal(e, c) {
	let l = e.filter((e) => e.worktreeId === c.worktreeId && e.tabId === c.tabId);
	if (c.slotId !== void 0 || c.paneKey !== void 0 || c.requestToken !== void 0) {
		let e = l.find((e) => (c.slotId === void 0 || e.slotId === c.slotId) && (c.paneKey === void 0 || e.paneKey === c.paneKey) && (c.requestToken === void 0 || e.requestToken === c.requestToken));
		if (e) return e;
	}
	return l.find((e) => e.active) ?? (l.length === 1 ? l[0] : null) ?? null;
}
export { setActivityTerminalPortals as n, useActivityTerminalPortals as r, findActivityTerminalPortal as t };
