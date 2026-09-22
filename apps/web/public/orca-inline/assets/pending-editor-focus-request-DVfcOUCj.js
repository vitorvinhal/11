import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
function isMarkdownDocCompletionQueryTooLarge(n, r = 2048) {
	return isClipboardTextByteLengthOverLimit(n, r);
}
function normalizeCompletionText(e) {
	return e.trim().replaceAll("\\", "/").toLowerCase();
}
function getMarkdownDocCompletionContext(e) {
	let r = e.lastIndexOf("[[");
	if (r === -1 || e.length - r - 2 > 2048) return null;
	let i = e.slice(r + 2);
	return isMarkdownDocCompletionQueryTooLarge(i) || i.includes("[") || i.includes("]") || i.includes("|") ? null : { partial: i };
}
function getMarkdownDocCompletionDocuments(e, i) {
	if (isMarkdownDocCompletionQueryTooLarge(i)) return [];
	let a = normalizeCompletionText(i);
	return e.filter((e) => a ? normalizeCompletionText(e.name).startsWith(a) || normalizeCompletionText(e.relativePath).startsWith(a) : !0).sort((e, n) => e.relativePath.localeCompare(n.relativePath));
}
function matchesPendingEditorFocusRequest(e, n) {
	return !e || n.worktreeId === void 0 || n.viewStateId === void 0 ? !1 : e.fileId === n.fileId && e.worktreeId === n.worktreeId && e.viewStateId === n.viewStateId;
}
export { getMarkdownDocCompletionContext as n, getMarkdownDocCompletionDocuments as r, matchesPendingEditorFocusRequest as t };
