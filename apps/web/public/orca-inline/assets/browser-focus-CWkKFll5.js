const ORCA_BROWSER_FOCUS_REQUEST_EVENT = "orca:browser-focus-request";
var FOCUS_REQUEST_TTL_MS = 3e4, pendingBrowserFocusByPageId = /* @__PURE__ */ new Map(), expiredRequestCleanupTimer = null;
function clearExpiredRequestCleanupTimerIfIdle() {
	pendingBrowserFocusByPageId.size > 0 || expiredRequestCleanupTimer === null || (clearTimeout(expiredRequestCleanupTimer), expiredRequestCleanupTimer = null);
}
function purgeExpiredFocusRequests(e = Date.now()) {
	for (let [c, l] of pendingBrowserFocusByPageId) l.expiresAt <= e && pendingBrowserFocusByPageId.delete(c);
	clearExpiredRequestCleanupTimerIfIdle();
}
function scheduleExpiredRequestCleanup() {
	if (expiredRequestCleanupTimer !== null || pendingBrowserFocusByPageId.size === 0) return;
	let e = Infinity;
	for (let c of pendingBrowserFocusByPageId.values()) e = Math.min(e, c.expiresAt);
	expiredRequestCleanupTimer = setTimeout(() => {
		expiredRequestCleanupTimer = null, purgeExpiredFocusRequests(), scheduleExpiredRequestCleanup();
	}, Math.max(0, e - Date.now()));
}
function queueBrowserFocusRequest(e) {
	let l = Date.now();
	purgeExpiredFocusRequests(l), pendingBrowserFocusByPageId.set(e.pageId, {
		target: e.target,
		expiresAt: l + FOCUS_REQUEST_TTL_MS
	}), scheduleExpiredRequestCleanup();
}
function requestBrowserFocus(c) {
	queueBrowserFocusRequest(c), window.dispatchEvent(new CustomEvent(ORCA_BROWSER_FOCUS_REQUEST_EVENT, { detail: c }));
}
function consumeBrowserFocusRequest(e) {
	purgeExpiredFocusRequests();
	let c = pendingBrowserFocusByPageId.get(e) ?? null;
	return c ? (pendingBrowserFocusByPageId.delete(e), clearExpiredRequestCleanupTimerIfIdle(), c.target) : null;
}
export { requestBrowserFocus as i, consumeBrowserFocusRequest as n, queueBrowserFocusRequest as r, ORCA_BROWSER_FOCUS_REQUEST_EVENT as t };
