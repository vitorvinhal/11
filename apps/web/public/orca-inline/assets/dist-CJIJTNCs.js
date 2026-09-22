import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { c as useComposedRefs } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { n as useLayoutEffect2 } from "./dist-DDM3IpIH.js";
import { i as useCallbackRef } from "./dist-BZKlajuP.js";
import { t as useSize } from "./dist-CFMQL9Z5.js";
import { a as hide$1, c as shift$1, i as flip$1, l as size$1, n as autoUpdate, o as limitShift$1, r as computePosition, s as offset$1, t as arrow$1 } from "./floating-ui.dom-HG4TtDPa.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1), index = typeof document < "u" ? import_react.useLayoutEffect : function() {};
function deepEqual(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!deepEqual(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !deepEqual(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function getDPR(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(e, t) {
	let n = getDPR(e);
	return Math.round(t * n) / n;
}
function useLatestRef(e) {
	let t = import_react.useRef(e);
	return index(() => {
		t.current = e;
	}), t;
}
function useFloating(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = import_react.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = import_react.useState(r);
	deepEqual(f, r) || p(r);
	let [m, h] = import_react.useState(null), [_, v] = import_react.useState(null), T = import_react.useCallback((e) => {
		e !== k.current && (k.current = e, h(e));
	}, []), E = import_react.useCallback((e) => {
		e !== A.current && (A.current = e, v(e));
	}, []), D = a || m, O = o || _, k = import_react.useRef(null), A = import_react.useRef(null), j = import_react.useRef(u), M = c != null, N = useLatestRef(c), P = useLatestRef(i), F = useLatestRef(l), I = import_react.useCallback(() => {
		if (!k.current || !A.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		P.current && (e.platform = P.current), computePosition(k.current, A.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: F.current !== !1
			};
			L.current && !deepEqual(j.current, t) && (j.current = t, import_react_dom.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		P,
		F
	]);
	index(() => {
		l === !1 && j.current.isPositioned && (j.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let L = import_react.useRef(!1);
	index(() => (L.current = !0, () => {
		L.current = !1;
	}), []), index(() => {
		if (D && (k.current = D), O && (A.current = O), D && O) {
			if (N.current) return N.current(D, O, I);
			I();
		}
	}, [
		D,
		O,
		I,
		N,
		M
	]);
	let R = import_react.useMemo(() => ({
		reference: k,
		floating: A,
		setReference: T,
		setFloating: E
	}), [T, E]), z = import_react.useMemo(() => ({
		reference: D,
		floating: O
	}), [D, O]), B = import_react.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!z.floating) return e;
		let t = roundByDPR(z.floating, u.x), r = roundByDPR(z.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...getDPR(z.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		z.floating,
		u.x,
		u.y
	]);
	return import_react.useMemo(() => ({
		...u,
		update: I,
		refs: R,
		elements: z,
		floatingStyles: B
	}), [
		u,
		I,
		R,
		z,
		B
	]);
}
var arrow$1$1 = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : arrow$1({
				element: r.current,
				padding: i
			}).fn(n) : r ? arrow$1({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, offset = (e, t) => {
	let n = offset$1(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, shift = (e, t) => {
	let n = shift$1(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, limitShift = (e, t) => ({
	fn: limitShift$1(e).fn,
	options: [e, t]
}), flip = (e, t) => {
	let n = flip$1(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, size = (e, t) => {
	let n = size$1(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, hide = (e, t) => {
	let n = hide$1(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, arrow = (e, t) => {
	let n = arrow$1$1(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), NAME = "Arrow", Arrow$1 = import_react.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...o } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.svg, {
		...o,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "0,0 30,0 15,10" })
	});
});
Arrow$1.displayName = NAME;
var Root = Arrow$1, POPPER_NAME = "Popper", [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME), [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME), Popper = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = import_react.useState(null), [a, o] = import_react.useState(void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperProvider, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		placementState: a,
		setPlacementState: o,
		children: n
	});
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor", PopperAnchor = import_react.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: i, ...o } = e, s = usePopperContext(ANCHOR_NAME, n), c = import_react.useRef(null), l = s.onAnchorChange, u = useComposedRefs(t, import_react.useCallback((e) => {
		c.current = e, e && l(e);
	}, [l])), d = import_react.useRef(null);
	import_react.useEffect(() => {
		if (!i) return;
		let e = d.current;
		d.current = i.current, e !== d.current && l(d.current);
	});
	let f = s.placementState && getSideAndAlignFromPlacement(s.placementState), p = f?.[0], m = f?.[1];
	return i ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-radix-popper-side": p,
		"data-radix-popper-align": m,
		...o,
		ref: u
	});
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent", [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME), PopperContent = import_react.forwardRef((e, t) => {
	let { __scopePopper: n, side: i = "bottom", sideOffset: o = 0, align: u = "center", alignOffset: d = 0, arrowPadding: f = 0, avoidCollisions: p = !0, collisionBoundary: h = [], collisionPadding: g = 0, sticky: _ = "partial", hideWhenDetached: v = !1, updatePositionStrategy: y = "optimized", onPlaced: b, ...x } = e, S = usePopperContext(CONTENT_NAME, n), [C, w] = import_react.useState(null), E = useComposedRefs(t, w), [F, I] = import_react.useState(null), L = useSize(F), R = L?.width ?? 0, z = L?.height ?? 0, B = i + (u === "center" ? "" : "-" + u), V = typeof g == "number" ? g : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...g
	}, H = Array.isArray(h) ? h : [h], U = H.length > 0, W = {
		padding: V,
		boundary: H.filter(isNotNull),
		altBoundary: U
	}, { refs: G, floatingStyles: K, placement: q, isPositioned: J, middlewareData: Y } = useFloating({
		strategy: "fixed",
		placement: B,
		whileElementsMounted: (...e) => autoUpdate(...e, { animationFrame: y === "always" }),
		elements: { reference: S.anchor },
		middleware: [
			offset({
				mainAxis: o + z,
				alignmentAxis: d
			}),
			p && shift({
				mainAxis: !0,
				crossAxis: !1,
				limiter: _ === "partial" ? limitShift() : void 0,
				...W
			}),
			p && flip({ ...W }),
			size({
				...W,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			F && arrow({
				element: F,
				padding: f
			}),
			transformOrigin({
				arrowWidth: R,
				arrowHeight: z
			}),
			v && hide({
				strategy: "referenceHidden",
				...W,
				boundary: U ? W.boundary : void 0
			})
		]
	}), X = S.setPlacementState;
	useLayoutEffect2(() => (X(q), () => {
		X(void 0);
	}), [q, X]);
	let [Z, Q] = getSideAndAlignFromPlacement(q), $ = useCallbackRef(b);
	useLayoutEffect2(() => {
		J && $?.();
	}, [J, $]);
	let se = Y.arrow?.x, ce = Y.arrow?.y, le = Y.arrow?.centerOffset !== 0, [ue, de] = import_react.useState();
	return useLayoutEffect2(() => {
		C && de(window.getComputedStyle(C).zIndex);
	}, [C]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: G.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...K,
			transform: J ? K.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ue,
			"--radix-popper-transform-origin": [Y.transformOrigin?.x, Y.transformOrigin?.y].join(" "),
			...Y.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopperContentProvider, {
			scope: n,
			placedSide: Z,
			placedAlign: Q,
			onArrowChange: I,
			arrowX: se,
			arrowY: ce,
			shouldHideArrow: le,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				"data-side": Z,
				"data-align": Q,
				...x,
				ref: E,
				style: {
					...x.style,
					animation: J ? void 0 : "none"
				}
			})
		})
	});
});
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow", OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, PopperArrow = import_react.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = useContentContext(ARROW_NAME, n), a = OPPOSITE_SIDE[i.placedSide];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(e) {
	return e !== null;
}
var transformOrigin = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = getSideAndAlignFromPlacement(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function getSideAndAlignFromPlacement(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var Root2 = Popper, Anchor = PopperAnchor, Content = PopperContent, Arrow = PopperArrow;
export { createPopperScope as a, Root2 as i, Arrow as n, Content as r, Anchor as t };
