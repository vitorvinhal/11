import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as useComposedRefs, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { n as Presence } from "./dist-CxjmhSN9.js";
import { n as DismissableLayer, t as Portal } from "./dist-BZKlajuP.js";
import { a as createPopperScope, i as Root2$1, n as Arrow, r as Content, t as Anchor } from "./dist-CJIJTNCs.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), originalBodyUserSelect, HOVERCARD_NAME = "HoverCard", [createHoverCardContext, createHoverCardScope] = createContextScope(HOVERCARD_NAME, [createPopperScope]), usePopperScope = createPopperScope(), [HoverCardProvider, useHoverCardContext] = createHoverCardContext(HOVERCARD_NAME), HoverCard$1 = (e) => {
	let { __scopeHoverCard: D, children: O, open: k, defaultOpen: A, onOpenChange: j, openDelay: M = 700, closeDelay: N = 300 } = e, F = usePopperScope(D), I = import_react.useRef(0), L = import_react.useRef(0), R = import_react.useRef(!1), B = import_react.useRef(!1), [V, H] = useControllableState({
		prop: k,
		defaultProp: A ?? !1,
		onChange: j,
		caller: HOVERCARD_NAME
	}), U = import_react.useCallback(() => {
		clearTimeout(L.current), I.current = window.setTimeout(() => H(!0), M);
	}, [M, H]), G = import_react.useCallback(() => {
		clearTimeout(I.current), !R.current && !B.current && (L.current = window.setTimeout(() => H(!1), N));
	}, [N, H]), K = import_react.useCallback(() => H(!1), [H]);
	return import_react.useEffect(() => () => {
		clearTimeout(I.current), clearTimeout(L.current);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardProvider, {
		scope: D,
		open: V,
		onOpenChange: H,
		onOpen: U,
		onClose: G,
		onDismiss: K,
		hasSelectionRef: R,
		isPointerDownOnContentRef: B,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$1, {
			...F,
			children: O
		})
	});
};
HoverCard$1.displayName = HOVERCARD_NAME;
var TRIGGER_NAME = "HoverCardTrigger", HoverCardTrigger$1 = import_react.forwardRef((e, D) => {
	let { __scopeHoverCard: O, ...k } = e, A = useHoverCardContext(TRIGGER_NAME, O), M = usePopperScope(O);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		asChild: !0,
		...M,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.a, {
			"data-state": A.open ? "open" : "closed",
			...k,
			ref: D,
			onPointerEnter: composeEventHandlers(e.onPointerEnter, excludeTouch(A.onOpen)),
			onPointerLeave: composeEventHandlers(e.onPointerLeave, excludeTouch(A.onClose)),
			onFocus: composeEventHandlers(e.onFocus, A.onOpen),
			onBlur: composeEventHandlers(e.onBlur, A.onClose),
			onTouchStart: composeEventHandlers(e.onTouchStart, (e) => e.preventDefault())
		})
	});
});
HoverCardTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "HoverCardPortal", [PortalProvider, usePortalContext] = createHoverCardContext(PORTAL_NAME, { forceMount: void 0 }), HoverCardPortal = (e) => {
	let { __scopeHoverCard: D, forceMount: O, children: k, container: A } = e, j = useHoverCardContext(PORTAL_NAME, D);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: D,
		forceMount: O,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: O || j.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: !0,
				container: A,
				children: k
			})
		})
	});
};
HoverCardPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "HoverCardContent", HoverCardContent$1 = import_react.forwardRef((e, D) => {
	let O = usePortalContext(CONTENT_NAME, e.__scopeHoverCard), { forceMount: k = O.forceMount, ...A } = e, j = useHoverCardContext(CONTENT_NAME, e.__scopeHoverCard);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: k || j.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardContentImpl, {
			"data-state": j.open ? "open" : "closed",
			...A,
			onPointerEnter: composeEventHandlers(e.onPointerEnter, excludeTouch(j.onOpen)),
			onPointerLeave: composeEventHandlers(e.onPointerLeave, excludeTouch(j.onClose)),
			ref: D
		})
	});
});
HoverCardContent$1.displayName = CONTENT_NAME;
var HoverCardContentImpl = import_react.forwardRef((e, D) => {
	let { __scopeHoverCard: k, onEscapeKeyDown: A, onPointerDownOutside: j, onFocusOutside: M, onInteractOutside: P, ...F } = e, L = useHoverCardContext(CONTENT_NAME, k), R = usePopperScope(k), z = import_react.useRef(null), B = useComposedRefs(D, z), [H, W] = import_react.useState(!1);
	return import_react.useEffect(() => {
		if (H) {
			let e = document.body;
			return originalBodyUserSelect = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
				e.style.userSelect = originalBodyUserSelect, e.style.webkitUserSelect = originalBodyUserSelect;
			};
		}
	}, [H]), import_react.useEffect(() => {
		if (z.current) {
			let e = () => {
				W(!1), L.isPointerDownOnContentRef.current = !1, setTimeout(() => {
					document.getSelection()?.toString() !== "" && (L.hasSelectionRef.current = !0);
				});
			};
			return document.addEventListener("pointerup", e), () => {
				document.removeEventListener("pointerup", e), L.hasSelectionRef.current = !1, L.isPointerDownOnContentRef.current = !1;
			};
		}
	}, [L.isPointerDownOnContentRef, L.hasSelectionRef]), import_react.useEffect(() => {
		z.current && getTabbableNodes(z.current).forEach((e) => e.setAttribute("tabindex", "-1"));
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onInteractOutside: P,
		onEscapeKeyDown: A,
		onPointerDownOutside: j,
		onFocusOutside: composeEventHandlers(M, (e) => {
			e.preventDefault();
		}),
		onDismiss: L.onDismiss,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
			...R,
			...F,
			onPointerDown: composeEventHandlers(F.onPointerDown, (e) => {
				e.currentTarget.contains(e.target) && W(!0), L.hasSelectionRef.current = !1, L.isPointerDownOnContentRef.current = !0;
			}),
			ref: B,
			style: {
				...F.style,
				userSelect: H ? "text" : void 0,
				WebkitUserSelect: H ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}), ARROW_NAME = "HoverCardArrow", HoverCardArrow = import_react.forwardRef((e, D) => {
	let { __scopeHoverCard: O, ...k } = e, A = usePopperScope(O);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		...A,
		...k,
		ref: D
	});
});
HoverCardArrow.displayName = ARROW_NAME;
function excludeTouch(e) {
	return (D) => D.pointerType === "touch" ? void 0 : e();
}
function getTabbableNodes(e) {
	let D = [], O = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; O.nextNode();) D.push(O.currentNode);
	return D;
}
var Root2 = HoverCard$1, Trigger = HoverCardTrigger$1, Portal$1 = HoverCardPortal, Content2 = HoverCardContent$1;
function HoverCard({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "hover-card",
		...e
	});
}
function HoverCardTrigger({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "hover-card-trigger",
		...e
	});
}
function HoverCardContent({ className: e, align: D = "center", sideOffset: O = 4, ...A }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$1, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
			"data-slot": "hover-card-content",
			align: D,
			sideOffset: O,
			className: cn("z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border border-black/14 bg-[rgba(255,255,255,0.82)] p-4 text-popover-foreground shadow-[0_16px_36px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl outline-hidden dark:border-white/14 dark:bg-[rgba(0,0,0,0.72)] dark:shadow-[0_20px_44px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.04)] data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
			...A
		})
	});
}
export { HoverCardContent as n, HoverCardTrigger as r, HoverCard as t };
