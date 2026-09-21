import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { c as useComposedRefs } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as dispatchDiscreteCustomEvent, t as Primitive } from "./dist-qqbILKL5.js";
import { n as useLayoutEffect2, r as composeEventHandlers } from "./dist-DDM3IpIH.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useCallbackRef(n) {
	let i = import_react.useRef(n);
	return import_react.useEffect(() => {
		i.current = n;
	}), import_react.useMemo(() => ((...n) => i.current?.(...n)), []);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), DISMISSABLE_LAYER_NAME = "DismissableLayer", CONTEXT_UPDATE = "dismissableLayer.update", POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside", FOCUS_OUTSIDE = "dismissableLayer.focusOutside", originalBodyPointerEvents, DismissableLayerContext = import_react.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), DismissableLayer = import_react.forwardRef((n, i) => {
	let { disableOutsidePointerEvents: a = !1, deferPointerDownOutside: s = !1, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: h, onInteractOutside: _, onDismiss: v, ...x } = n, S = import_react.useContext(DismissableLayerContext), [C, w] = import_react.useState(null), T = C?.ownerDocument ?? globalThis?.document, [, E] = import_react.useState({}), D = useComposedRefs(i, w), O = Array.from(S.layers), [k] = [...S.layersWithOutsidePointerEventsDisabled].slice(-1), A = k ? O.indexOf(k) : -1, j = C ? O.indexOf(C) : -1, M = S.layersWithOutsidePointerEventsDisabled.size > 0, N = j >= A, P = import_react.useRef(!1), F = usePointerDownOutside((n) => {
		u?.(n), _?.(n), n.defaultPrevented || v?.();
	}, {
		ownerDocument: T,
		deferPointerDownOutside: s,
		isDeferredPointerDownOutsideRef: P,
		dismissableSurfaces: S.dismissableSurfaces,
		shouldHandlePointerDownOutside: import_react.useCallback((n) => {
			if (!(n instanceof Node)) return !1;
			let i = [...S.branches].some((i) => i.contains(n));
			return N && !i;
		}, [S.branches, N])
	}), I = useFocusOutside((n) => {
		if (s && P.current) return;
		let i = n.target;
		[...S.branches].some((n) => n.contains(i)) || (h?.(n), _?.(n), n.defaultPrevented || v?.());
	}, T), L = C ? j === O.length - 1 : !1, R = useCallbackRef((n) => {
		n.key === "Escape" && (c?.(n), !n.defaultPrevented && v && (n.preventDefault(), v()));
	});
	return import_react.useEffect(() => {
		if (L) return T.addEventListener("keydown", R, { capture: !0 }), () => T.removeEventListener("keydown", R, { capture: !0 });
	}, [
		T,
		L,
		R
	]), import_react.useEffect(() => {
		if (C) return a && (S.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = T.body.style.pointerEvents, T.body.style.pointerEvents = "none"), S.layersWithOutsidePointerEventsDisabled.add(C)), S.layers.add(C), dispatchUpdate(), () => {
			a && (S.layersWithOutsidePointerEventsDisabled.delete(C), S.layersWithOutsidePointerEventsDisabled.size === 0 && (T.body.style.pointerEvents = originalBodyPointerEvents));
		};
	}, [
		C,
		T,
		a,
		S
	]), import_react.useEffect(() => () => {
		C && (S.layers.delete(C), S.layersWithOutsidePointerEventsDisabled.delete(C), dispatchUpdate());
	}, [C, S]), import_react.useEffect(() => {
		let n = () => E({});
		return document.addEventListener(CONTEXT_UPDATE, n), () => document.removeEventListener(CONTEXT_UPDATE, n);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...x,
		ref: D,
		style: {
			pointerEvents: M ? N ? "auto" : "none" : void 0,
			...n.style
		},
		onFocusCapture: composeEventHandlers(n.onFocusCapture, I.onFocusCapture),
		onBlurCapture: composeEventHandlers(n.onBlurCapture, I.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(n.onPointerDownCapture, F.onPointerDownCapture)
	});
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch", DismissableLayerBranch = import_react.forwardRef((n, i) => {
	let a = import_react.useContext(DismissableLayerContext), s = import_react.useRef(null), c = useComposedRefs(i, s);
	return import_react.useEffect(() => {
		let n = s.current;
		if (n) return a.branches.add(n), () => {
			a.branches.delete(n);
		};
	}, [a.branches]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...n,
		ref: c
	});
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function useDismissableLayerSurface() {
	let n = import_react.useContext(DismissableLayerContext), [i, a] = import_react.useState(null);
	return import_react.useEffect(() => {
		if (i) return n.dismissableSurfaces.add(i), () => {
			n.dismissableSurfaces.delete(i);
		};
	}, [i, n.dismissableSurfaces]), a;
}
var IS_TRUE = () => !0;
function usePointerDownOutside(n, i) {
	let { ownerDocument: a = globalThis?.document, deferPointerDownOutside: o = !1, isDeferredPointerDownOutsideRef: s, dismissableSurfaces: c, shouldHandlePointerDownOutside: l = IS_TRUE } = i, u = useCallbackRef(n), d = import_react.useRef(!1), m = import_react.useRef(!1), h = import_react.useRef(/* @__PURE__ */ new Map()), g = import_react.useRef(() => {});
	return import_react.useEffect(() => {
		function n() {
			m.current = !1, s.current = !1, h.current.clear();
		}
		function i() {
			return Array.from(h.current.values()).some(Boolean);
		}
		function f(n) {
			if (!m.current) return;
			let i = n.target;
			i instanceof Node && [...c].some((n) => n.contains(i)) || h.current.set(n.type, !0), n.type === "click" && window.setTimeout(() => {
				m.current && g.current();
			}, 0);
		}
		function p(n) {
			m.current && h.current.set(n.type, !1);
		}
		let v = (c) => {
			if (c.target && !d.current) {
				let f = function() {
					a.removeEventListener("click", g.current);
					let o = i();
					n(), o || handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, u, p, { discrete: !0 });
				};
				if (!l(c.target)) {
					a.removeEventListener("click", g.current), n(), d.current = !1;
					return;
				}
				let p = { originalEvent: c };
				m.current = !0, s.current = o && c.button === 0, h.current.clear(), !o || c.button !== 0 ? f() : (a.removeEventListener("click", g.current), g.current = f, a.addEventListener("click", g.current, { once: !0 }));
			} else a.removeEventListener("click", g.current), n();
			d.current = !1;
		}, y = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let n of y) a.addEventListener(n, f, !0), a.addEventListener(n, p);
		let b = window.setTimeout(() => {
			a.addEventListener("pointerdown", v);
		}, 0);
		return () => {
			window.clearTimeout(b), a.removeEventListener("pointerdown", v), a.removeEventListener("click", g.current);
			for (let n of y) a.removeEventListener(n, f, !0), a.removeEventListener(n, p);
		};
	}, [
		a,
		u,
		o,
		s,
		c,
		l
	]), { onPointerDownCapture: () => d.current = !0 };
}
function useFocusOutside(n, i = globalThis?.document) {
	let a = useCallbackRef(n), o = import_react.useRef(!1);
	return import_react.useEffect(() => {
		let n = (n) => {
			n.target && !o.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, a, { originalEvent: n }, { discrete: !1 });
		};
		return i.addEventListener("focusin", n), () => i.removeEventListener("focusin", n);
	}, [i, a]), {
		onFocusCapture: () => o.current = !0,
		onBlurCapture: () => o.current = !1
	};
}
function dispatchUpdate() {
	let n = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(n);
}
function handleAndDispatchCustomEvent(n, i, a, { discrete: o }) {
	let s = a.originalEvent.target, l = new CustomEvent(n, {
		bubbles: !1,
		cancelable: !0,
		detail: a
	});
	i && s.addEventListener(n, i, { once: !0 }), o ? dispatchDiscreteCustomEvent(s, l) : s.dispatchEvent(l);
}
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1), PORTAL_NAME = "Portal", Portal = import_react.forwardRef((n, i) => {
	let { container: a, ...o } = n, [s, c] = import_react.useState(!1);
	useLayoutEffect2(() => c(!0), []);
	let d = a || s && globalThis?.document?.body;
	return d ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...o,
		ref: i
	}), d) : null;
});
Portal.displayName = PORTAL_NAME;
export { useCallbackRef as i, DismissableLayer as n, useDismissableLayerSurface as r, Portal as t };
