function normalizeToModelEol(e, t) {
	let n = t.getEOL();
	return n === "\n" && !e.includes("\r") ? e : e.replace(/\r\n|\r|\n/g, n);
}
function applyModelEdit(e, t, n, r, i) {
	if (r === "read-only-live-tail") {
		t.applyEdits([n]);
		return;
	}
	i && e.pushUndoStop(), t.pushEditOperations([], [n], () => null), i && e.pushUndoStop();
}
function replaceModelContent(e, n, r, i, a, o) {
	r !== i && applyModelEdit(e, n, {
		range: n.getFullModelRange(),
		text: i
	}, a, o);
}
function syncContentOnMount(t, r, i = "undoable") {
	let a = t.getModel();
	if (!a) return !1;
	let o = a.getValue(), s = normalizeToModelEol(r, a);
	return o === s ? !1 : (replaceModelContent(t, a, o, s, i, !1), !0);
}
function syncContentUpdate(r, i, a = "undoable") {
	let o = r.getModel();
	if (!o) return;
	let s = o.getValue(), c = normalizeToModelEol(i, o);
	if (s.length === c.length) {
		replaceModelContent(r, o, s, c, a, !0);
		return;
	}
	if (c.length > s.length && c.startsWith(s)) {
		let e = o.getFullModelRange();
		applyModelEdit(r, o, {
			range: {
				startLineNumber: e.endLineNumber,
				startColumn: e.endColumn,
				endLineNumber: e.endLineNumber,
				endColumn: e.endColumn
			},
			text: c.slice(s.length)
		}, a, !0);
		return;
	}
	replaceModelContent(r, o, s, c, a, !0);
}
export { syncContentUpdate as n, syncContentOnMount as t };
