import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { Ff as getExecutionHostIdForWorktree, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as useVirtualizer } from "./esm-COD_EJuQ.js";
import { l as writeWorkspaceFileDragSourceIfResolved } from "./workspace-file-drag-QEvqcvgi.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function measureSourceControlScrollMargin(e, a) {
	return Math.round(e.getBoundingClientRect().top - a.getBoundingClientRect().top + a.scrollTop);
}
function observeSourceControlScrollMargin(e, a, o) {
	let s = new ResizeObserver(o);
	s.observe(e), s.observe(a);
	let c = /* @__PURE__ */ new Set(), l = () => {
		let o = new Set(a.children);
		for (let a of c) !o.has(a) && a !== e && s.unobserve(a);
		for (let e of o) s.observe(e);
		c = o;
	};
	l();
	let u = new MutationObserver(() => {
		l(), o();
	});
	return u.observe(a, { childList: !0 }), () => {
		s.disconnect(), u.disconnect();
	};
}
function SourceControlVirtualFileList({ rows: e, getRowKey: a, renderRow: o, scrollElement: s, estimateRowHeightPx: c = 24 }) {
	let u = (0, import_react.useRef)(null), [d, f] = (0, import_react.useState)(0), p = e.length >= 50;
	(0, import_react.useLayoutEffect)(() => {
		if (!p) return;
		let e = u.current;
		if (!e || !s) return;
		let a = () => {
			let a = measureSourceControlScrollMargin(e, s);
			f((e) => e === a ? e : a);
		};
		return a(), observeSourceControlScrollMargin(e, s, a);
	}, [s, p]);
	let m = useVirtualizer({
		count: e.length,
		enabled: p && s !== null,
		getScrollElement: () => s,
		estimateSize: () => c,
		overscan: 10,
		scrollMargin: d,
		getItemKey: (o) => {
			let s = e[o];
			return s === void 0 ? o : a(s);
		}
	});
	return p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: u,
		"data-testid": "source-control-virtual-list",
		className: "relative w-full",
		style: { height: m.getTotalSize() },
		children: m.getVirtualItems().map((a) => {
			let s = e[a.index];
			return s === void 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: m.measureElement,
				"data-index": a.index,
				className: "absolute top-0 left-0 w-full",
				style: { transform: `translateY(${a.start - d}px)` },
				children: o(s)
			}, a.key);
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: e.map((e) => o(e)) });
}
function writeWorkspaceFileDragSourceForWorkspace(e, a) {
	writeWorkspaceFileDragSourceIfResolved(e, a, getExecutionHostIdForWorktree(useAppStore.getState(), a));
}
export { SourceControlVirtualFileList as n, writeWorkspaceFileDragSourceForWorkspace as t };
