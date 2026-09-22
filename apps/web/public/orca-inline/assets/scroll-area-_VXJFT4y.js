import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as useComposedRefs, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { n as useLayoutEffect2, r as composeEventHandlers } from "./dist-DDM3IpIH.js";
import { n as Presence } from "./dist-CxjmhSN9.js";
import { t as useDirection } from "./dist-DqysERl8.js";
import { i as useCallbackRef } from "./dist-BZKlajuP.js";
import { t as clamp } from "./dist-P-hJgGS4.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function useStateMachine(e, w) {
	return import_react.useReducer((e, T) => w[e][T] ?? e, e);
}
var SCROLL_AREA_NAME = "ScrollArea", [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME), [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME), ScrollArea$1 = import_react.forwardRef((e, w) => {
	let { __scopeScrollArea: E, type: D = "hover", dir: k, scrollHideDelay: A = 600, ...j } = e, [M, P] = import_react.useState(null), [F, I] = import_react.useState(null), [L, R] = import_react.useState(null), [z, V] = import_react.useState(null), [H, U] = import_react.useState(null), [W, G] = import_react.useState(0), [K, q] = import_react.useState(0), [J, Y] = import_react.useState(!1), [X, Z] = import_react.useState(!1), Q = useComposedRefs(w, P), $ = useDirection(k);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaProvider, {
		scope: E,
		type: D,
		dir: $,
		scrollHideDelay: A,
		scrollArea: M,
		viewport: F,
		onViewportChange: I,
		content: L,
		onContentChange: R,
		scrollbarX: z,
		onScrollbarXChange: V,
		scrollbarXEnabled: J,
		onScrollbarXEnabledChange: Y,
		scrollbarY: H,
		onScrollbarYChange: U,
		scrollbarYEnabled: X,
		onScrollbarYEnabledChange: Z,
		onCornerWidthChange: G,
		onCornerHeightChange: q,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: $,
			...j,
			ref: Q,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": W + "px",
				"--radix-scroll-area-corner-height": K + "px",
				...e.style
			}
		})
	});
});
ScrollArea$1.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport", ScrollAreaViewport = import_react.forwardRef((e, w) => {
	let { __scopeScrollArea: E, children: D, nonce: k, ...A } = e, j = useScrollAreaContext(VIEWPORT_NAME, E), M = useComposedRefs(w, import_react.useRef(null), j.onViewportChange);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaViewportStyle, { nonce: k }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-radix-scroll-area-viewport": "",
		...A,
		ref: M,
		style: {
			overflowX: j.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: j.scrollbarYEnabled ? "scroll" : "hidden",
			...e.style
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: j.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children: D
		})
	})] });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var ScrollAreaViewportStyle = import_react.memo(({ nonce: e }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
	dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
	nonce: e
}), (e, w) => e.nonce === w.nonce), SCROLLBAR_NAME = "ScrollAreaScrollbar", ScrollAreaScrollbar = import_react.forwardRef((e, w) => {
	let { forceMount: T, ...E } = e, D = useScrollAreaContext(SCROLLBAR_NAME, e.__scopeScrollArea), { onScrollbarXEnabledChange: O, onScrollbarYEnabledChange: k } = D, A = e.orientation === "horizontal";
	return import_react.useEffect(() => (A ? O(!0) : k(!0), () => {
		A ? O(!1) : k(!1);
	}), [
		A,
		O,
		k
	]), D.type === "hover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarHover, {
		...E,
		ref: w,
		forceMount: T
	}) : D.type === "scroll" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarScroll, {
		...E,
		ref: w,
		forceMount: T
	}) : D.type === "auto" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
		...E,
		ref: w,
		forceMount: T
	}) : D.type === "always" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
		...E,
		ref: w,
		"data-state": "visible"
	}) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = import_react.forwardRef((e, w) => {
	let { forceMount: T, ...E } = e, D = useScrollAreaContext(SCROLLBAR_NAME, e.__scopeScrollArea), [O, k] = import_react.useState(!1);
	return import_react.useEffect(() => {
		let e = D.scrollArea, w = 0;
		if (e) {
			let T = () => {
				window.clearTimeout(w), k(!0);
			}, E = () => {
				w = window.setTimeout(() => k(!1), D.scrollHideDelay);
			};
			return e.addEventListener("pointerenter", T), e.addEventListener("pointerleave", E), () => {
				window.clearTimeout(w), e.removeEventListener("pointerenter", T), e.removeEventListener("pointerleave", E);
			};
		}
	}, [D.scrollArea, D.scrollHideDelay]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: T || O,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
			"data-state": O ? "visible" : "hidden",
			...E,
			ref: w
		})
	});
}), ScrollAreaScrollbarScroll = import_react.forwardRef((e, w) => {
	let { forceMount: T, ...E } = e, D = useScrollAreaContext(SCROLLBAR_NAME, e.__scopeScrollArea), O = e.orientation === "horizontal", k = useDebounceCallback(() => N("SCROLL_END"), 100), [A, N] = useStateMachine("hidden", {
		hidden: { SCROLL: "scrolling" },
		scrolling: {
			SCROLL_END: "idle",
			POINTER_ENTER: "interacting"
		},
		interacting: {
			SCROLL: "interacting",
			POINTER_LEAVE: "idle"
		},
		idle: {
			HIDE: "hidden",
			SCROLL: "scrolling",
			POINTER_ENTER: "interacting"
		}
	});
	return import_react.useEffect(() => {
		if (A === "idle") {
			let e = window.setTimeout(() => N("HIDE"), D.scrollHideDelay);
			return () => window.clearTimeout(e);
		}
	}, [
		A,
		D.scrollHideDelay,
		N
	]), import_react.useEffect(() => {
		let e = D.viewport, w = O ? "scrollLeft" : "scrollTop";
		if (e) {
			let T = e[w], E = () => {
				let E = e[w];
				T !== E && (N("SCROLL"), k()), T = E;
			};
			return e.addEventListener("scroll", E), () => e.removeEventListener("scroll", E);
		}
	}, [
		D.viewport,
		O,
		N,
		k
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: T || A !== "hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": A === "hidden" ? "hidden" : "visible",
			...E,
			ref: w,
			onPointerEnter: composeEventHandlers(e.onPointerEnter, () => N("POINTER_ENTER")),
			onPointerLeave: composeEventHandlers(e.onPointerLeave, () => N("POINTER_LEAVE"))
		})
	});
}), ScrollAreaScrollbarAuto = import_react.forwardRef((e, w) => {
	let T = useScrollAreaContext(SCROLLBAR_NAME, e.__scopeScrollArea), { forceMount: E, ...D } = e, [O, k] = import_react.useState(!1), A = e.orientation === "horizontal", j = useDebounceCallback(() => {
		if (T.viewport) {
			let e = T.viewport.offsetWidth < T.viewport.scrollWidth, w = T.viewport.offsetHeight < T.viewport.scrollHeight;
			k(A ? e : w);
		}
	}, 10);
	return useResizeObserver(T.viewport, j), useResizeObserver(T.content, j), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: E || O,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			"data-state": O ? "visible" : "hidden",
			...D,
			ref: w
		})
	});
}), ScrollAreaScrollbarVisible = import_react.forwardRef((e, w) => {
	let { orientation: T = "vertical", ...E } = e, D = useScrollAreaContext(SCROLLBAR_NAME, e.__scopeScrollArea), O = import_react.useRef(null), k = import_react.useRef(0), [A, j] = import_react.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), M = getThumbRatio(A.viewport, A.content), N = {
		...E,
		sizes: A,
		onSizesChange: j,
		hasThumb: M > 0 && M < 1,
		onThumbChange: (e) => O.current = e,
		onThumbPointerUp: () => k.current = 0,
		onThumbPointerDown: (e) => k.current = e
	};
	function P(e, w) {
		return getScrollPositionFromPointer(e, k.current, A, w);
	}
	return T === "horizontal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarX, {
		...N,
		ref: w,
		onThumbPositionChange: () => {
			if (D.viewport && O.current) {
				let e = D.viewport.scrollLeft, w = getThumbOffsetFromScroll(e, A, D.dir);
				O.current.style.transform = `translate3d(${w}px, 0, 0)`;
			}
		},
		onWheelScroll: (e) => {
			D.viewport && (D.viewport.scrollLeft = e);
		},
		onDragScroll: (e) => {
			D.viewport && (D.viewport.scrollLeft = P(e, D.dir));
		}
	}) : T === "vertical" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarY, {
		...N,
		ref: w,
		onThumbPositionChange: () => {
			if (D.viewport && O.current) {
				let e = D.viewport.scrollTop, w = getThumbOffsetFromScroll(e, A);
				O.current.style.transform = `translate3d(0, ${w}px, 0)`;
			}
		},
		onWheelScroll: (e) => {
			D.viewport && (D.viewport.scrollTop = e);
		},
		onDragScroll: (e) => {
			D.viewport && (D.viewport.scrollTop = P(e));
		}
	}) : null;
}), ScrollAreaScrollbarX = import_react.forwardRef((e, w) => {
	let { sizes: E, onSizesChange: D, ...O } = e, k = useScrollAreaContext(SCROLLBAR_NAME, e.__scopeScrollArea), [A, j] = import_react.useState(), M = import_react.useRef(null), N = useComposedRefs(w, M, k.onScrollbarXChange);
	return import_react.useEffect(() => {
		M.current && j(getComputedStyle(M.current));
	}, [M]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "horizontal",
		...O,
		ref: N,
		sizes: E,
		style: {
			bottom: 0,
			left: k.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: k.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": getThumbSize(E) + "px",
			...e.style
		},
		onThumbPointerDown: (w) => e.onThumbPointerDown(w.x),
		onDragScroll: (w) => e.onDragScroll(w.x),
		onWheelScroll: (w, T) => {
			if (k.viewport) {
				let E = k.viewport.scrollLeft + w.deltaX;
				e.onWheelScroll(E), isScrollingWithinScrollbarBounds(E, T) && w.preventDefault();
			}
		},
		onResize: () => {
			M.current && k.viewport && A && D({
				content: k.viewport.scrollWidth,
				viewport: k.viewport.offsetWidth,
				scrollbar: {
					size: M.current.clientWidth,
					paddingStart: toInt(A.paddingLeft),
					paddingEnd: toInt(A.paddingRight)
				}
			});
		}
	});
}), ScrollAreaScrollbarY = import_react.forwardRef((e, w) => {
	let { sizes: E, onSizesChange: D, ...O } = e, k = useScrollAreaContext(SCROLLBAR_NAME, e.__scopeScrollArea), [A, j] = import_react.useState(), M = import_react.useRef(null), N = useComposedRefs(w, M, k.onScrollbarYChange);
	return import_react.useEffect(() => {
		M.current && j(getComputedStyle(M.current));
	}, [M]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
		"data-orientation": "vertical",
		...O,
		ref: N,
		sizes: E,
		style: {
			top: 0,
			right: k.dir === "ltr" ? 0 : void 0,
			left: k.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": getThumbSize(E) + "px",
			...e.style
		},
		onThumbPointerDown: (w) => e.onThumbPointerDown(w.y),
		onDragScroll: (w) => e.onDragScroll(w.y),
		onWheelScroll: (w, T) => {
			if (k.viewport) {
				let E = k.viewport.scrollTop + w.deltaY;
				e.onWheelScroll(E), isScrollingWithinScrollbarBounds(E, T) && w.preventDefault();
			}
		},
		onResize: () => {
			M.current && k.viewport && A && D({
				content: k.viewport.scrollHeight,
				viewport: k.viewport.offsetHeight,
				scrollbar: {
					size: M.current.clientHeight,
					paddingStart: toInt(A.paddingTop),
					paddingEnd: toInt(A.paddingBottom)
				}
			});
		}
	});
}), [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME), ScrollAreaScrollbarImpl = import_react.forwardRef((e, w) => {
	let { __scopeScrollArea: E, sizes: D, hasThumb: k, onThumbChange: A, onThumbPointerUp: M, onThumbPointerDown: N, onThumbPositionChange: F, onDragScroll: I, onWheelScroll: L, onResize: R, ...z } = e, B = useScrollAreaContext(SCROLLBAR_NAME, E), [H, U] = import_react.useState(null), W = useComposedRefs(w, U), G = import_react.useRef(null), q = import_react.useRef(""), J = B.viewport, Y = D.content - D.viewport, X = useCallbackRef(L), Z = useCallbackRef(F), Q = useDebounceCallback(R, 10);
	function $(e) {
		G.current && I({
			x: e.clientX - G.current.left,
			y: e.clientY - G.current.top
		});
	}
	return import_react.useEffect(() => {
		let e = (e) => {
			let w = e.target;
			H?.contains(w) && X(e, Y);
		};
		return document.addEventListener("wheel", e, { passive: !1 }), () => document.removeEventListener("wheel", e, { passive: !1 });
	}, [
		J,
		H,
		Y,
		X
	]), import_react.useEffect(Z, [D, Z]), useResizeObserver(H, Q), useResizeObserver(B.content, Q), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollbarProvider, {
		scope: E,
		scrollbar: H,
		hasThumb: k,
		onThumbChange: useCallbackRef(A),
		onThumbPointerUp: useCallbackRef(M),
		onThumbPositionChange: Z,
		onThumbPointerDown: useCallbackRef(N),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...z,
			ref: W,
			style: {
				position: "absolute",
				...z.style
			},
			onPointerDown: composeEventHandlers(e.onPointerDown, (e) => {
				e.button === 0 && (e.target.setPointerCapture(e.pointerId), G.current = H.getBoundingClientRect(), q.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", B.viewport && (B.viewport.style.scrollBehavior = "auto"), $(e));
			}),
			onPointerMove: composeEventHandlers(e.onPointerMove, $),
			onPointerUp: composeEventHandlers(e.onPointerUp, (e) => {
				let w = e.target;
				w.hasPointerCapture(e.pointerId) && w.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = q.current, B.viewport && (B.viewport.style.scrollBehavior = ""), G.current = null;
			})
		})
	});
}), THUMB_NAME = "ScrollAreaThumb", ScrollAreaThumb = import_react.forwardRef((e, w) => {
	let { forceMount: T, ...E } = e, D = useScrollbarContext(THUMB_NAME, e.__scopeScrollArea);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: T || D.hasThumb,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumbImpl, {
			ref: w,
			...E
		})
	});
}), ScrollAreaThumbImpl = import_react.forwardRef((e, w) => {
	let { __scopeScrollArea: E, style: D, ...k } = e, A = useScrollAreaContext(THUMB_NAME, E), M = useScrollbarContext(THUMB_NAME, E), { onThumbPositionChange: N } = M, P = useComposedRefs(w, M.onThumbChange), F = import_react.useRef(void 0), I = useDebounceCallback(() => {
		F.current &&= (F.current(), void 0);
	}, 100);
	return import_react.useEffect(() => {
		let e = A.viewport;
		if (e) {
			let w = () => {
				I(), F.current || (F.current = addUnlinkedScrollListener(e, N), N());
			};
			return N(), e.addEventListener("scroll", w), () => e.removeEventListener("scroll", w);
		}
	}, [
		A.viewport,
		I,
		N
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": M.hasThumb ? "visible" : "hidden",
		...k,
		ref: P,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...D
		},
		onPointerDownCapture: composeEventHandlers(e.onPointerDownCapture, (e) => {
			let w = e.target.getBoundingClientRect(), T = e.clientX - w.left, E = e.clientY - w.top;
			M.onThumbPointerDown({
				x: T,
				y: E
			});
		}),
		onPointerUp: composeEventHandlers(e.onPointerUp, M.onThumbPointerUp)
	});
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner", ScrollAreaCorner = import_react.forwardRef((e, w) => {
	let T = useScrollAreaContext(CORNER_NAME, e.__scopeScrollArea), E = !!(T.scrollbarX && T.scrollbarY);
	return T.type !== "scroll" && E ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaCornerImpl, {
		...e,
		ref: w
	}) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = import_react.forwardRef((e, w) => {
	let { __scopeScrollArea: T, ...E } = e, D = useScrollAreaContext(CORNER_NAME, T), [k, A] = import_react.useState(0), [j, M] = import_react.useState(0), N = !!(k && j), { onCornerWidthChange: P, onCornerHeightChange: F } = D;
	return useResizeObserver(D.scrollbarX, () => {
		let e = D.scrollbarX?.offsetHeight || 0;
		D.onCornerHeightChange(e), M(e);
	}), useResizeObserver(D.scrollbarY, () => {
		let e = D.scrollbarY?.offsetWidth || 0;
		D.onCornerWidthChange(e), A(e);
	}), import_react.useEffect(() => () => {
		P(0), F(0);
	}, [P, F]), N ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...E,
		ref: w,
		style: {
			width: k,
			height: j,
			position: "absolute",
			right: D.dir === "ltr" ? 0 : void 0,
			left: D.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...e.style
		}
	}) : null;
});
function toInt(e) {
	return e ? parseInt(e, 10) : 0;
}
function getThumbRatio(e, w) {
	let T = e / w;
	return isNaN(T) ? 0 : T;
}
function getThumbSize(e) {
	let w = getThumbRatio(e.viewport, e.content), T = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, E = (e.scrollbar.size - T) * w;
	return Math.max(E, 18);
}
function getScrollPositionFromPointer(e, w, T, E = "ltr") {
	let D = getThumbSize(T), O = D / 2, k = w || O, A = D - k, j = T.scrollbar.paddingStart + k, M = T.scrollbar.size - T.scrollbar.paddingEnd - A, N = T.content - T.viewport, P = E === "ltr" ? [0, N] : [N * -1, 0];
	return linearScale([j, M], P)(e);
}
function getThumbOffsetFromScroll(e, w, T = "ltr") {
	let E = getThumbSize(w), D = w.scrollbar.paddingStart + w.scrollbar.paddingEnd, O = w.scrollbar.size - D, k = w.content - w.viewport, A = O - E, j = clamp(e, T === "ltr" ? [0, k] : [k * -1, 0]);
	return linearScale([0, k], [0, A])(j);
}
function linearScale(e, w) {
	return (T) => {
		if (e[0] === e[1] || w[0] === w[1]) return w[0];
		let E = (w[1] - w[0]) / (e[1] - e[0]);
		return w[0] + E * (T - e[0]);
	};
}
function isScrollingWithinScrollbarBounds(e, w) {
	return e > 0 && e < w;
}
var addUnlinkedScrollListener = (e, w = () => {}) => {
	let T = {
		left: e.scrollLeft,
		top: e.scrollTop
	}, E = 0;
	return (function D() {
		let O = {
			left: e.scrollLeft,
			top: e.scrollTop
		}, k = T.left !== O.left, A = T.top !== O.top;
		(k || A) && w(), T = O, E = window.requestAnimationFrame(D);
	})(), () => window.cancelAnimationFrame(E);
};
function useDebounceCallback(e, w) {
	let T = useCallbackRef(e), E = import_react.useRef(0);
	return import_react.useEffect(() => () => window.clearTimeout(E.current), []), import_react.useCallback(() => {
		window.clearTimeout(E.current), E.current = window.setTimeout(T, w);
	}, [T, w]);
}
function useResizeObserver(e, w) {
	let T = useCallbackRef(w);
	useLayoutEffect2(() => {
		let w = 0;
		if (e) {
			let E = new ResizeObserver(() => {
				cancelAnimationFrame(w), w = window.requestAnimationFrame(T);
			});
			return E.observe(e), () => {
				window.cancelAnimationFrame(w), E.unobserve(e);
			};
		}
	}, [e, T]);
}
var Root = ScrollArea$1, Viewport = ScrollAreaViewport, Corner = ScrollAreaCorner;
function ScrollArea({ className: e, viewportClassName: w, viewportRef: T, viewportTabIndex: D, viewportProps: O, children: k, ...A }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
		"data-slot": "scroll-area",
		className: cn("relative", e),
		...A,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
				ref: T,
				tabIndex: D,
				"data-slot": "scroll-area-viewport",
				className: cn("size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1", w),
				...O,
				children: k
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Corner, {})
		]
	});
}
function ScrollBar({ className: e, orientation: w = "vertical", ...T }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbar, {
		"data-slot": "scroll-area-scrollbar",
		orientation: w,
		className: cn("flex touch-none p-px transition-colors select-none bg-transparent", w === "vertical" && "h-full w-3 py-2 border-l border-l-transparent", w === "horizontal" && "h-3 px-2 flex-col border-t border-t-transparent", e),
		...T,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumb, {
			"data-slot": "scroll-area-thumb",
			className: "relative flex-1 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/60"
		})
	});
}
export { ScrollArea as t };
