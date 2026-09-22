const PRIMARY_SELECTION_MAX_LENGTH = 65536;
var PRIMARY_SELECTION_MAX_BYTES = PRIMARY_SELECTION_MAX_LENGTH * 4, PRIMARY_SELECTION_NATIVE_PASTE_SUPPRESSION_MS = 750, enabled = !1, primarySelectionText = "", nativePasteSuppressionUntil = 0;
function isLinuxUserAgent(e) {
	return !e.includes("Mac") && !e.includes("Windows") && e.includes("Linux");
}
function getUserAgent() {
	return typeof navigator > "u" ? "" : navigator.userAgent;
}
function getSelectionClipboardApi() {
	if (typeof window > "u") return null;
	let e = window.api?.ui;
	return typeof e?.readSelectionClipboardText != "function" || typeof e.writeSelectionClipboardText != "function" ? null : e;
}
function shouldUseSystemPrimarySelectionClipboard(e = getUserAgent()) {
	return isLinuxUserAgent(e) && getSelectionClipboardApi() !== null;
}
function canStorePrimarySelectionText(e) {
	return enabled && e.length > 0 && e.length <= 65536;
}
function setPrimarySelectionEnabled(e) {
	enabled = e, enabled || (primarySelectionText = "", nativePasteSuppressionUntil = 0);
}
function armPrimarySelectionNativePasteSuppression(e = Date.now()) {
	!enabled || !isLinuxUserAgent(getUserAgent()) || (nativePasteSuppressionUntil = e + PRIMARY_SELECTION_NATIVE_PASTE_SUPPRESSION_MS);
}
function consumePrimarySelectionNativePasteSuppression(e = Date.now()) {
	return !enabled || nativePasteSuppressionUntil === 0 || e > nativePasteSuppressionUntil ? !1 : (nativePasteSuppressionUntil = 0, !0);
}
function isPrimarySelectionEnabled() {
	return enabled;
}
function setPrimarySelectionText(e) {
	if (!canStorePrimarySelectionText(e)) return !1;
	primarySelectionText = e;
	let g = shouldUseSystemPrimarySelectionClipboard() ? getSelectionClipboardApi() : null;
	return g && g.writeSelectionClipboardText(e).catch(() => {}), !0;
}
async function readPrimarySelectionText() {
	if (!enabled) return "";
	let e = shouldUseSystemPrimarySelectionClipboard() ? getSelectionClipboardApi() : null;
	if (!e) return primarySelectionText;
	try {
		return await e.readSelectionClipboardText({ maxBytes: PRIMARY_SELECTION_MAX_BYTES });
	} catch {
		return primarySelectionText;
	}
}
export { readPrimarySelectionText as a, isPrimarySelectionEnabled as i, armPrimarySelectionNativePasteSuppression as n, setPrimarySelectionEnabled as o, consumePrimarySelectionNativePasteSuppression as r, setPrimarySelectionText as s, PRIMARY_SELECTION_MAX_LENGTH as t };
