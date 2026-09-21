var pendingEditorFlushes = /* @__PURE__ */ new Map();
function registerPendingEditorFlush(t, n) {
	return pendingEditorFlushes.set(t, n), () => {
		pendingEditorFlushes.get(t) === n && pendingEditorFlushes.delete(t);
	};
}
function flushPendingEditorChange(t) {
	pendingEditorFlushes.get(t)?.();
}
export { registerPendingEditorFlush as n, flushPendingEditorChange as t };
