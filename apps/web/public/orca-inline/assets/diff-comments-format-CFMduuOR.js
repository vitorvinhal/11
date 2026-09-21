function isMarkdownComment(e) {
	return e.source === "markdown";
}
function formatDiffComment(t) {
	let n = t.body.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\r/g, "\\r").replace(/\n/g, "\\n"), r = t.lineNumber === 0 ? "Scope: file" : t.startLine !== void 0 && t.startLine !== t.lineNumber ? `Lines: ${t.startLine}-${t.lineNumber}` : `Line: ${t.lineNumber}`;
	return isMarkdownComment(t) ? [
		`File: ${t.filePath}`,
		"Source: markdown",
		r,
		`User comment: "${n}"`
	].join("\n") : [
		`File: ${t.filePath}`,
		r,
		`User comment: "${n}"`
	].join("\n");
}
function formatDiffComments(e) {
	return e.map(formatDiffComment).join("\n\n");
}
export { formatDiffComments as n, formatDiffComment as t };
