function encodeDiffViewerModelKey(e) {
	return encodeURIComponent(e).replace(/~/g, "~7E").replace(/%/g, "~");
}
function getDiffViewerMonacoModelPathPrefixes(t) {
	let n = encodeDiffViewerModelKey(t);
	return {
		originalModelPathPrefix: `diff:original:${n}`,
		modifiedModelPathPrefix: `diff:modified:${n}`
	};
}
function getDiffViewerMonacoModelPaths({ modelKey: n, originalModelKey: r, modifiedModelKey: i, generationSuffix: a }) {
	let o = getDiffViewerMonacoModelPathPrefixes(n), s = encodeDiffViewerModelKey(r ?? n), c = encodeDiffViewerModelKey(i ?? n);
	return {
		originalModelPath: `${o.originalModelPathPrefix}:${s}${a}`,
		modifiedModelPath: `${o.modifiedModelPathPrefix}:${c}${a}`
	};
}
function disposeUnattachedDiffViewerMonacoModels(e, t) {
	disposeUnattachedMonacoModelPaths(e, [t.originalModelPath, t.modifiedModelPath]);
}
function disposeUnattachedMonacoModelPaths(e, t) {
	for (let n of t) disposeUnattachedMonacoModel(e.editor.getModel(e.Uri.parse(n)));
}
function disposeUnattachedMonacoModelsByPathPrefixes(e, t) {
	if (t.length === 0) return;
	let n = new Set(t), r = Infinity, i = 0;
	for (let e of n) r = Math.min(r, e.length), i = Math.max(i, e.length);
	let a = {
		shortestPrefixLength: r,
		longestPrefixLength: i
	};
	for (let t of e.editor.getModels()) (isOwnedByPathPrefix(t.uri.toString(!0), n, a) || isOwnedByPathPrefix(t.uri.toString(), n, a)) && disposeUnattachedMonacoModel(t);
}
function isOwnedByPathPrefix(e, t, n) {
	if (t.has(e)) return !0;
	for (let r = e.indexOf(":"); r !== -1 && r <= n.longestPrefixLength; r = e.indexOf(":", r + 1)) if (r >= n.shortestPrefixLength && t.has(e.slice(0, r))) return !0;
	return !1;
}
function disposeUnattachedMonacoModel(e) {
	!e || e.isAttachedToEditor() || e.dispose();
}
export { getDiffViewerMonacoModelPaths as a, getDiffViewerMonacoModelPathPrefixes as i, disposeUnattachedMonacoModelPaths as n, disposeUnattachedMonacoModelsByPathPrefixes as r, disposeUnattachedDiffViewerMonacoModels as t };
