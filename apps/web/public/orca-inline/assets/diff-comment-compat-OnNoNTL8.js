import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
var Trash = createLucideIcon("trash", [
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
function getDiffCommentSource(e) {
	return e.source === "markdown" ? "markdown" : "diff";
}
function isDiffComment(e) {
	return getDiffCommentSource(e) === "diff";
}
function isMarkdownComment(e) {
	return getDiffCommentSource(e) === "markdown";
}
function getDiffCommentLineLabel(e, a = !1) {
	return e.startLine !== void 0 && e.startLine !== e.lineNumber ? a ? `L${e.startLine}-L${e.lineNumber}` : `Lines ${e.startLine}-${e.lineNumber}` : a ? `L${e.lineNumber}` : `Line ${e.lineNumber}`;
}
export { Trash as a, isMarkdownComment as i, getDiffCommentSource as n, isDiffComment as r, getDiffCommentLineLabel as t };
