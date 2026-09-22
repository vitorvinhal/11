import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function clampSidebarResizeWidth(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function getRenderedSidebarWidthCssValue(e, t, n) {
	return e ? `${t + n}px` : "0px";
}
function getNextSidebarResizeWidth({ clientX: e, startX: t, startWidth: n, deltaSign: i, minWidth: a, maxWidth: o }) {
	return clampSidebarResizeWidth(n + (e - t) * i, a, o);
}
function useSidebarResize({ isOpen: e, width: t, minWidth: r, maxWidth: o, deltaSign: s, renderedExtraWidth: c = 0, setWidth: l, onDraftWidthChange: u }) {
	let d = (0, import_react.useRef)(null), f = (0, import_react.useRef)(!1), p = (0, import_react.useRef)(0), m = (0, import_react.useRef)(t), h = (0, import_react.useRef)(t), g = (0, import_react.useRef)(null), _ = (0, import_react.useRef)(null), [v, y] = (0, import_react.useState)(!1), b = (0, import_react.useCallback)(() => {
		let e = _.current;
		e && e.parentNode && e.parentNode.removeChild(e), _.current = null;
	}, []), x = (0, import_react.useCallback)(() => {
		document.body.style.cursor = "", document.body.style.userSelect = "", b();
	}, [b]), S = (0, import_react.useCallback)((t) => {
		let n = d.current;
		n && (n.style.width = getRenderedSidebarWidthCssValue(e, t, c));
	}, [e, c]);
	(0, import_react.useLayoutEffect)(() => {
		f.current || (h.current = t, S(t), u?.(t));
	}, [
		S,
		u,
		t
	]);
	let C = (0, import_react.useCallback)(() => {
		if (!f.current) return;
		f.current = !1, y(!1), g.current !== null && (cancelAnimationFrame(g.current), g.current = null), x();
		let e = h.current;
		S(e), u?.(e), e !== t && l(e);
	}, [
		S,
		u,
		x,
		l,
		t
	]), w = (0, import_react.useCallback)((e) => {
		if (!f.current) return;
		let t = getNextSidebarResizeWidth({
			clientX: e.clientX,
			startX: p.current,
			startWidth: m.current,
			deltaSign: s,
			minWidth: r,
			maxWidth: o
		});
		t !== h.current && (h.current = t, g.current === null && (g.current = window.requestAnimationFrame(() => {
			g.current = null, S(h.current), u?.(h.current);
		})));
	}, [
		S,
		s,
		o,
		r,
		u
	]);
	return (0, import_react.useEffect)(() => (window.addEventListener("mousemove", w), window.addEventListener("mouseup", C), window.addEventListener("blur", C), () => {
		window.removeEventListener("mousemove", w), window.removeEventListener("mouseup", C), window.removeEventListener("blur", C), g.current !== null && (cancelAnimationFrame(g.current), g.current = null), f.current = !1, x();
	}), [
		w,
		x,
		C
	]), {
		containerRef: d,
		isResizing: v,
		onResizeStart: (0, import_react.useCallback)((e) => {
			if (e.preventDefault(), f.current = !0, y(!0), p.current = e.clientX, m.current = t, h.current = t, u?.(t), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", !_.current) {
				let e = document.createElement("div");
				e.style.position = "fixed", e.style.inset = "0", e.style.zIndex = "2147483647", e.style.cursor = "col-resize", e.style.background = "transparent", document.body.appendChild(e), _.current = e;
			}
		}, [u, t])
	};
}
export { useSidebarResize as t };
