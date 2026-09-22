var terminalScrollIntentByKey = /* @__PURE__ */ new Map(), terminalScrollIntentBindingByKey = /* @__PURE__ */ new Map();
function readKeyedTerminalScrollIntent(l) {
	return terminalScrollIntentByKey.get(l);
}
function writeKeyedTerminalScrollIntent(l, u) {
	terminalScrollIntentByKey.set(l, u);
}
function readKeyedTerminalScrollIntentBinding(e) {
	return terminalScrollIntentBindingByKey.get(e);
}
function writeKeyedTerminalScrollIntentBinding(e, u) {
	terminalScrollIntentBindingByKey.set(e, u);
}
function releaseTerminalScrollIntentKey(u) {
	terminalScrollIntentByKey.delete(u), terminalScrollIntentBindingByKey.delete(u);
}
function releaseRenderPause(e) {
	e._isPaused = !1, e._needsFullRefresh = !1;
	try {
		e._pausedResizeTask?.flush?.();
	} catch {}
}
function getRenderService(e) {
	let l = e?._core?._renderService;
	return l && typeof l.refreshRows == "function" ? l : null;
}
function forceRepaintThroughRenderPause(e) {
	let l = getRenderService(e);
	if (!l || l._isPaused !== !0) return !1;
	let u = e.rows;
	if (typeof u != "number" || u < 1) return !1;
	releaseRenderPause(l);
	try {
		return l.refreshRows(0, u - 1, !0), !0;
	} catch {
		return !1;
	}
}
function requestFullViewportPresent(e) {
	let l = getRenderService(e);
	if (!l) return !1;
	let u = e.rows;
	if (typeof u != "number" || u < 1) return !1;
	let d = l._isPaused === !0;
	if (!d && !isSynchronizedOutputHeld(e)) return !1;
	d && releaseRenderPause(l);
	try {
		return l.refreshRows(0, u - 1, !0), !0;
	} catch {
		return !1;
	}
}
function getRenderer(e) {
	let l = e._renderer;
	return l ? typeof l.renderRows == "function" ? l : l.value ?? null : null;
}
function isSynchronizedOutputHeld(e) {
	let l = e._core;
	return (l?.coreService?.decPrivateModes ?? l?._coreService?.decPrivateModes)?.synchronizedOutput === !0;
}
function forceFullViewportPresent(e) {
	let l = getRenderService(e);
	if (!l) return !1;
	let u = e.rows;
	if (typeof u != "number" || u < 1) return !1;
	let d = l._isPaused === !0, f = isSynchronizedOutputHeld(e);
	if (!d && !f) return !1;
	d && releaseRenderPause(l);
	let p = getRenderer(l);
	try {
		return f && typeof p?.renderRows == "function" ? (p.renderRows(0, u - 1), !0) : (l.refreshRows(0, u - 1, !0), !0);
	} catch {
		return !1;
	}
}
export { readKeyedTerminalScrollIntentBinding as a, writeKeyedTerminalScrollIntentBinding as c, readKeyedTerminalScrollIntent as i, forceRepaintThroughRenderPause as n, releaseTerminalScrollIntentKey as o, requestFullViewportPresent as r, writeKeyedTerminalScrollIntent as s, forceFullViewportPresent as t };
