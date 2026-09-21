var SCROLL_MARK_MATCH_EPSILON = 2, MAX_PENDING_SCROLL_MARKS = 16;
function createProgrammaticScrollMarks() {
	let n = [], r = /* @__PURE__ */ new WeakMap(), i = (t, n, r) => Math.abs(n - t) <= SCROLL_MARK_MATCH_EPSILON ? !0 : t > r + SCROLL_MARK_MATCH_EPSILON && n >= r - SCROLL_MARK_MATCH_EPSILON;
	return {
		mark: (e) => {
			n.push(e), n.length > MAX_PENDING_SCROLL_MARKS && n.shift();
		},
		consume: (e, t, a) => {
			let o = r.get(e);
			if (o !== void 0) return o;
			let s = n.findIndex((e) => i(e, t, a));
			s !== -1 && n.splice(0, s + 1);
			let c = s !== -1;
			return r.set(e, c), c;
		}
	};
}
export { createProgrammaticScrollMarks as t };
