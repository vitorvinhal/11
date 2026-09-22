import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as useComposedRefs, o as createSlottable, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as Root } from "./dist-D-i0AoUO.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { n as Presence, t as useId } from "./dist-CxjmhSN9.js";
import { n as DismissableLayer, t as Portal } from "./dist-BZKlajuP.js";
import { a as createPopperScope, i as Root2, n as Arrow, r as Content, t as Anchor } from "./dist-CJIJTNCs.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]), usePopperScope = createPopperScope(), PROVIDER_NAME = "TooltipProvider", DEFAULT_DELAY_DURATION = 700, TOOLTIP_OPEN = "tooltip.open", [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME), TooltipProvider$1 = (e) => {
	let { __scopeTooltip: A, delayDuration: j = DEFAULT_DELAY_DURATION, skipDelayDuration: M = 300, disableHoverableContent: N = !1, children: P } = e, F = import_react.useRef(!0), I = import_react.useRef(!1), L = import_react.useRef(0);
	return import_react.useEffect(() => {
		let e = L.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProviderContextProvider, {
		scope: A,
		isOpenDelayedRef: F,
		delayDuration: j,
		onOpen: import_react.useCallback(() => {
			M <= 0 || (window.clearTimeout(L.current), F.current = !1);
		}, [M]),
		onClose: import_react.useCallback(() => {
			M <= 0 || (window.clearTimeout(L.current), L.current = window.setTimeout(() => F.current = !0, M));
		}, [M]),
		isPointerInTransitRef: I,
		onPointerInTransitChange: import_react.useCallback((e) => {
			I.current = e;
		}, []),
		disableHoverableContent: N,
		children: P
	});
};
TooltipProvider$1.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip", [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME), Tooltip$1 = (e) => {
	let { __scopeTooltip: A, children: j, open: M, defaultOpen: N, onOpenChange: P, disableHoverableContent: F, delayDuration: I } = e, L = useTooltipProviderContext(TOOLTIP_NAME, e.__scopeTooltip), R = usePopperScope(A), [B, H] = import_react.useState(null), U = useId(), W = import_react.useRef(0), G = F ?? L.disableHoverableContent, K = I ?? L.delayDuration, q = import_react.useRef(!1), [J, Y] = useControllableState({
		prop: M,
		defaultProp: N ?? !1,
		onChange: (e) => {
			e ? (L.onOpen(), document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN))) : L.onClose(), P?.(e);
		},
		caller: TOOLTIP_NAME
	}), X = import_react.useMemo(() => J ? q.current ? "delayed-open" : "instant-open" : "closed", [J]), Z = import_react.useCallback(() => {
		window.clearTimeout(W.current), W.current = 0, q.current = !1, Y(!0);
	}, [Y]), Q = import_react.useCallback(() => {
		window.clearTimeout(W.current), W.current = 0, Y(!1);
	}, [Y]), $ = import_react.useCallback(() => {
		window.clearTimeout(W.current), W.current = window.setTimeout(() => {
			q.current = !0, Y(!0), W.current = 0;
		}, K);
	}, [K, Y]);
	return import_react.useEffect(() => () => {
		W.current &&= (window.clearTimeout(W.current), 0);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		...R,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContextProvider, {
			scope: A,
			contentId: U,
			open: J,
			stateAttribute: X,
			trigger: B,
			onTriggerChange: H,
			onTriggerEnter: import_react.useCallback(() => {
				L.isOpenDelayedRef.current ? $() : Z();
			}, [
				L.isOpenDelayedRef,
				$,
				Z
			]),
			onTriggerLeave: import_react.useCallback(() => {
				G ? Q() : (window.clearTimeout(W.current), W.current = 0);
			}, [Q, G]),
			onOpen: Z,
			onClose: Q,
			disableHoverableContent: G,
			children: j
		})
	});
};
Tooltip$1.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger", TooltipTrigger$1 = import_react.forwardRef((e, A) => {
	let { __scopeTooltip: M, ...N } = e, P = useTooltipContext(TRIGGER_NAME, M), I = useTooltipProviderContext(TRIGGER_NAME, M), L = usePopperScope(M), z = useComposedRefs(A, import_react.useRef(null), P.onTriggerChange), B = import_react.useRef(!1), V = import_react.useRef(!1), H = import_react.useCallback(() => B.current = !1, []);
	return import_react.useEffect(() => () => document.removeEventListener("pointerup", H), [H]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		asChild: !0,
		...L,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			"aria-describedby": P.open ? P.contentId : void 0,
			"data-state": P.stateAttribute,
			...N,
			ref: z,
			onPointerMove: composeEventHandlers(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !V.current && !I.isPointerInTransitRef.current && (P.onTriggerEnter(), V.current = !0);
			}),
			onPointerLeave: composeEventHandlers(e.onPointerLeave, () => {
				P.onTriggerLeave(), V.current = !1;
			}),
			onPointerDown: composeEventHandlers(e.onPointerDown, () => {
				P.open && P.onClose(), B.current = !0, document.addEventListener("pointerup", H, { once: !0 });
			}),
			onFocus: composeEventHandlers(e.onFocus, () => {
				B.current || P.onOpen();
			}),
			onBlur: composeEventHandlers(e.onBlur, P.onClose),
			onClick: composeEventHandlers(e.onClick, P.onClose)
		})
	});
});
TooltipTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal", [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 }), TooltipPortal = (e) => {
	let { __scopeTooltip: A, forceMount: j, children: M, container: N } = e, P = useTooltipContext(PORTAL_NAME, A);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: A,
		forceMount: j,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: j || P.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: !0,
				container: N,
				children: M
			})
		})
	});
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent", TooltipContent$1 = import_react.forwardRef((e, A) => {
	let j = usePortalContext(CONTENT_NAME, e.__scopeTooltip), { forceMount: M = j.forceMount, side: N = "top", ...P } = e, F = useTooltipContext(CONTENT_NAME, e.__scopeTooltip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: M || F.open,
		children: F.disableHoverableContent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContentImpl, {
			side: N,
			...P,
			ref: A
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContentHoverable, {
			side: N,
			...P,
			ref: A
		})
	});
}), TooltipContentHoverable = import_react.forwardRef((e, A) => {
	let M = useTooltipContext(CONTENT_NAME, e.__scopeTooltip), N = useTooltipProviderContext(CONTENT_NAME, e.__scopeTooltip), P = import_react.useRef(null), F = useComposedRefs(A, P), [I, L] = import_react.useState(null), { trigger: R, onClose: z } = M, B = P.current, { onPointerInTransitChange: V } = N, H = import_react.useCallback(() => {
		L(null), V(!1);
	}, [V]), U = import_react.useCallback((e, A) => {
		let j = e.currentTarget, M = {
			x: e.clientX,
			y: e.clientY
		}, N = getPaddedExitPoints(M, getExitSideFromRect(M, j.getBoundingClientRect())), P = getPointsFromRect(A.getBoundingClientRect());
		L(getHull([...N, ...P])), V(!0);
	}, [V]);
	return import_react.useEffect(() => () => H(), [H]), import_react.useEffect(() => {
		if (R && B) {
			let e = (e) => U(e, B), A = (e) => U(e, R);
			return R.addEventListener("pointerleave", e), B.addEventListener("pointerleave", A), () => {
				R.removeEventListener("pointerleave", e), B.removeEventListener("pointerleave", A);
			};
		}
	}, [
		R,
		B,
		U,
		H
	]), import_react.useEffect(() => {
		if (I) {
			let e = (e) => {
				let A = e.target, j = {
					x: e.clientX,
					y: e.clientY
				}, M = R?.contains(A) || B?.contains(A), N = !isPointInPolygon(j, I);
				M ? H() : N && (H(), z());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		R,
		B,
		I,
		z,
		H
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContentImpl, {
		...e,
		ref: F
	});
}), [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: !1 }), Slottable = createSlottable("TooltipContent"), TooltipContentImpl = import_react.forwardRef((e, A) => {
	let { __scopeTooltip: j, children: M, "aria-label": N, onEscapeKeyDown: P, onPointerDownOutside: F, ...L } = e, R = useTooltipContext(CONTENT_NAME, j), z = usePopperScope(j), { onClose: B } = R;
	return import_react.useEffect(() => (document.addEventListener(TOOLTIP_OPEN, B), () => document.removeEventListener(TOOLTIP_OPEN, B)), [B]), import_react.useEffect(() => {
		if (R.trigger) {
			let e = (e) => {
				e.target instanceof Node && e.target.contains(R.trigger) && B();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [R.trigger, B]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: P,
		onPointerDownOutside: F,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: B,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content, {
			"data-state": R.stateAttribute,
			...z,
			...L,
			ref: A,
			style: {
				...L.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slottable, { children: M }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisuallyHiddenContentContextProvider, {
				scope: j,
				isInside: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
					id: R.contentId,
					role: "tooltip",
					children: N || M
				})
			})]
		})
	});
});
TooltipContent$1.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow", TooltipArrow = import_react.forwardRef((e, A) => {
	let { __scopeTooltip: j, ...M } = e, N = usePopperScope(j);
	return useVisuallyHiddenContentContext(ARROW_NAME, j).isInside ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		...N,
		...M,
		ref: A
	});
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(e, A) {
	let j = Math.abs(A.top - e.y), M = Math.abs(A.bottom - e.y), N = Math.abs(A.right - e.x), P = Math.abs(A.left - e.x);
	switch (Math.min(j, M, N, P)) {
		case P: return "left";
		case N: return "right";
		case j: return "top";
		case M: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(e, A, j = 5) {
	let M = [];
	switch (A) {
		case "top":
			M.push({
				x: e.x - j,
				y: e.y + j
			}, {
				x: e.x + j,
				y: e.y + j
			});
			break;
		case "bottom":
			M.push({
				x: e.x - j,
				y: e.y - j
			}, {
				x: e.x + j,
				y: e.y - j
			});
			break;
		case "left":
			M.push({
				x: e.x + j,
				y: e.y - j
			}, {
				x: e.x + j,
				y: e.y + j
			});
			break;
		case "right":
			M.push({
				x: e.x - j,
				y: e.y - j
			}, {
				x: e.x - j,
				y: e.y + j
			});
			break;
	}
	return M;
}
function getPointsFromRect(e) {
	let { top: A, right: j, bottom: M, left: N } = e;
	return [
		{
			x: N,
			y: A
		},
		{
			x: j,
			y: A
		},
		{
			x: j,
			y: M
		},
		{
			x: N,
			y: M
		}
	];
}
function isPointInPolygon(e, A) {
	let { x: j, y: M } = e, N = !1;
	for (let e = 0, P = A.length - 1; e < A.length; P = e++) {
		let F = A[e], I = A[P], L = F.x, R = F.y, z = I.x, B = I.y;
		R > M != B > M && j < (z - L) * (M - R) / (B - R) + L && (N = !N);
	}
	return N;
}
function getHull(e) {
	let A = e.slice();
	return A.sort((e, A) => e.x < A.x ? -1 : e.x > A.x ? 1 : e.y < A.y ? -1 : e.y > A.y ? 1 : 0), getHullPresorted(A);
}
function getHullPresorted(e) {
	if (e.length <= 1) return e.slice();
	let A = [];
	for (let j = 0; j < e.length; j++) {
		let M = e[j];
		for (; A.length >= 2;) {
			let e = A[A.length - 1], j = A[A.length - 2];
			if ((e.x - j.x) * (M.y - j.y) >= (e.y - j.y) * (M.x - j.x)) A.pop();
			else break;
		}
		A.push(M);
	}
	A.pop();
	let j = [];
	for (let A = e.length - 1; A >= 0; A--) {
		let M = e[A];
		for (; j.length >= 2;) {
			let e = j[j.length - 1], A = j[j.length - 2];
			if ((e.x - A.x) * (M.y - A.y) >= (e.y - A.y) * (M.x - A.x)) j.pop();
			else break;
		}
		j.push(M);
	}
	return j.pop(), A.length === 1 && j.length === 1 && A[0].x === j[0].x && A[0].y === j[0].y ? A : A.concat(j);
}
var Provider = TooltipProvider$1, Root3 = Tooltip$1, Trigger = TooltipTrigger$1, Portal$1 = TooltipPortal, Content2 = TooltipContent$1, Arrow2 = TooltipArrow;
function TooltipProvider({ delayDuration: e = 0, disableHoverableContent: A = !0, ...j }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		disableHoverableContent: A,
		...j
	});
}
function Tooltip({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root3, {
		"data-slot": "tooltip",
		...e
	});
}
function TooltipTrigger({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function TooltipContent({ className: e, sideOffset: A = 0, showArrow: j = !0, children: M, ...P }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content2, {
		"data-slot": "tooltip-content",
		sideOffset: A,
		className: cn("pointer-events-none z-[90] w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", e),
		...P,
		children: [M, j ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow2, { className: "size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" }) : null]
	}) });
}
export { TooltipTrigger as i, TooltipContent as n, TooltipProvider as r, Tooltip as t };
