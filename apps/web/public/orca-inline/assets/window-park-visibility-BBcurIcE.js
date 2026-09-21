import { n as isWindowVisible } from "./window-visibility-interval-BxcyZyE8.js";
import { n as registerStaleDocumentVisibilityRecovery, t as isDocumentVisibilityProvenStale } from "./stale-document-visibility-rSdoU229.js";
function getWindowParkVisible() {
	return isWindowVisible() || isDocumentVisibilityProvenStale();
}
function subscribeWindowParkVisibility(e) {
	let i = registerStaleDocumentVisibilityRecovery(e), a = typeof document < "u" && typeof document.addEventListener == "function";
	return a && document.addEventListener("visibilitychange", e), () => {
		a && document.removeEventListener("visibilitychange", e), i();
	};
}
const WINDOW_HIDE_PARK_GRACE_MS = 500;
export { getWindowParkVisible as n, subscribeWindowParkVisibility as r, WINDOW_HIDE_PARK_GRACE_MS as t };
