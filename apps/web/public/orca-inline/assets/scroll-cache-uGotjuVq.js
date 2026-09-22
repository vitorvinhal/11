var CACHE_MAX_ENTRIES = 20;
function setWithLRU(n, r, i, a = CACHE_MAX_ENTRIES) {
	if (n.delete(r), n.set(r, i), n.size > a) {
		let e = n.keys().next();
		e.done || n.delete(e.value);
	}
}
const scrollTopCache = /* @__PURE__ */ new Map(), editorSelectionCache = /* @__PURE__ */ new Map(), pdfViewPositionCache = /* @__PURE__ */ new Map(), diffViewStateCache = /* @__PURE__ */ new Map();
export { setWithLRU as a, scrollTopCache as i, editorSelectionCache as n, pdfViewPositionCache as r, diffViewStateCache as t };
