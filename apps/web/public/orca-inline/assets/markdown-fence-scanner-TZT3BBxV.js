var FENCE_LINE = /[ ]{0,3}(`{3,}|~{3,})/y;
function hasClosingSuffix(e, t, n) {
	let r = !1;
	for (let i = t; i < n; i += 1) {
		let t = e.charCodeAt(i);
		if (t === 32) {
			r = !0;
			continue;
		}
		if (!((t === 126 || t === 96) && !r)) return !1;
	}
	return !0;
}
function hasBacktick(e, t, n) {
	for (let r = t; r < n; r += 1) if (e.charCodeAt(r) === 96) return !0;
	return !1;
}
function createMarkdownFenceTracker() {
	let r = "", i = 0;
	return {
		get insideFence() {
			return i > 0;
		},
		consume(e) {
			return this.consumeRange(e, 0, e.length);
		},
		consumeRange(a, o, s) {
			FENCE_LINE.lastIndex = o;
			let c = FENCE_LINE.exec(a);
			if (!c || c.index !== o || c[0].length > s - o) return !1;
			let l = c[1][0], u = c[1].length, d = o + c[0].length;
			return i > 0 ? (l === r && u >= i && hasClosingSuffix(a, d, s) && (r = "", i = 0), !0) : l === "`" && hasBacktick(a, d, s) ? !1 : (r = l, i = u, !0);
		}
	};
}
var LINE_BREAK = /[\n\r]/g;
function findMarkdownLineEnd(e, t) {
	return LINE_BREAK.lastIndex = t, LINE_BREAK.exec(e)?.index ?? e.length;
}
function skipMarkdownLineBreak(e, t) {
	return e.charCodeAt(t) === 13 && e.charCodeAt(t + 1) === 10 ? t + 2 : t < e.length ? t + 1 : t;
}
function forEachMarkdownLine(e, t) {
	let n = 0;
	for (;;) {
		let r = findMarkdownLineEnd(e, n), i = skipMarkdownLineBreak(e, r);
		if (t(n, r, i), r >= e.length) return;
		n = i;
	}
}
function getMarkdownFenceRanges(e) {
	let t = [], n = createMarkdownFenceTracker(), i = -1;
	return forEachMarkdownLine(e, (r, a, o) => {
		let s = n.insideFence, c = n.consumeRange(e, r, a);
		!s && c ? i = r : s && !n.insideFence && (t.push([i, o]), i = -1);
	}), i !== -1 && t.push([i, e.length]), t;
}
function createMarkdownFenceRangeCursor(e) {
	let t = 0;
	return (n) => {
		for (; t < e.length && n >= e[t][1];) t += 1;
		return t < e.length && n >= e[t][0];
	};
}
export { createMarkdownFenceTracker as n, getMarkdownFenceRanges as r, createMarkdownFenceRangeCursor as t };
