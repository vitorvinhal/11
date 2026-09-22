import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), SYSTEM_DARK_QUERY = "(prefers-color-scheme: dark)", subscribers = /* @__PURE__ */ new Set(), mediaQueryList = null, unsubscribeMediaQuery = null, hasSnapshot = !1, snapshot = !0;
function readMediaQueryList() {
	return mediaQueryList || (typeof window > "u" || typeof window.matchMedia != "function" ? null : (mediaQueryList = window.matchMedia(SYSTEM_DARK_QUERY), mediaQueryList));
}
function refreshSnapshot() {
	snapshot = readMediaQueryList()?.matches ?? !0, hasSnapshot = !0;
}
function getSystemPrefersDarkSnapshot() {
	return hasSnapshot || refreshSnapshot(), snapshot;
}
function subscribeToSystemPrefersDarkChange(e) {
	if (subscribers.add(e), !unsubscribeMediaQuery) {
		let e = readMediaQueryList();
		if (e) {
			snapshot = e.matches, hasSnapshot = !0;
			let p = (e) => {
				snapshot = e.matches;
				for (let e of subscribers) e();
			};
			e.addEventListener("change", p), unsubscribeMediaQuery = () => e.removeEventListener("change", p);
		}
	}
	return () => {
		subscribers.delete(e), !(subscribers.size > 0) && (unsubscribeMediaQuery?.(), unsubscribeMediaQuery = null, mediaQueryList = null, hasSnapshot = !1);
	};
}
function useSystemPrefersDark() {
	return (0, import_react.useSyncExternalStore)(subscribeToSystemPrefersDarkChange, getSystemPrefersDarkSnapshot, () => !0);
}
export { useSystemPrefersDark as n, getSystemPrefersDarkSnapshot as t };
