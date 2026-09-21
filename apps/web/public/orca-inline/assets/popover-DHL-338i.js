import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { a as createSlot, c as useComposedRefs, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { n as Presence, t as useId } from "./dist-CxjmhSN9.js";
import { n as DismissableLayer, t as Portal } from "./dist-BZKlajuP.js";
import { i as FocusScope, n as Combination_default, r as useFocusGuards, t as hideOthers } from "./es2015-D9zZpuOq.js";
import { a as createPopperScope, i as Root2$1, n as Arrow, r as Content, t as Anchor } from "./dist-CJIJTNCs.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), POPOVER_NAME = "Popover", [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [createPopperScope]), usePopperScope = createPopperScope(), [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME), Popover$1 = (u) => {
	let { __scopePopover: z, children: B, open: V, defaultOpen: H, onOpenChange: U, modal: W = !1 } = u, G = usePopperScope(z), K = import_react.useRef(null), [J, X] = import_react.useState(!1), [Z, Q] = useControllableState({
		prop: V,
		defaultProp: H ?? !1,
		onChange: U,
		caller: POPOVER_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2$1, {
		...G,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverProvider, {
			scope: z,
			contentId: useId(),
			triggerRef: K,
			open: Z,
			onOpenChange: Q,
			onOpenToggle: import_react.useCallback(() => Q((u) => !u), [Q]),
			hasCustomAnchor: J,
			onCustomAnchorAdd: import_react.useCallback(() => X(!0), []),
			onCustomAnchorRemove: import_react.useCallback(() => X(!1), []),
			modal: W,
			children: B
		})
	});
};
Popover$1.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor", PopoverAnchor$1 = import_react.forwardRef((u, z) => {
	let { __scopePopover: B, ...V } = u, H = usePopoverContext(ANCHOR_NAME, B), U = usePopperScope(B), { onCustomAnchorAdd: W, onCustomAnchorRemove: G } = H;
	return import_react.useEffect(() => (W(), () => G()), [W, G]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		...U,
		...V,
		ref: z
	});
});
PopoverAnchor$1.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger", PopoverTrigger$1 = import_react.forwardRef((u, z) => {
	let { __scopePopover: B, ...H } = u, U = usePopoverContext(TRIGGER_NAME, B), G = usePopperScope(B), q = useComposedRefs(z, U.triggerRef), J = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": U.open,
		"aria-controls": U.open ? U.contentId : void 0,
		"data-state": getState(U.open),
		...H,
		ref: q,
		onClick: composeEventHandlers(u.onClick, U.onOpenToggle)
	});
	return U.hasCustomAnchor ? J : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		asChild: !0,
		...G,
		children: J
	});
});
PopoverTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal", [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, { forceMount: void 0 }), PopoverPortal = (u) => {
	let { __scopePopover: z, forceMount: B, children: V, container: H } = u, U = usePopoverContext(PORTAL_NAME, z);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: z,
		forceMount: B,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: B || U.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: !0,
				container: H,
				children: V
			})
		})
	});
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent", PopoverContent$1 = import_react.forwardRef((u, z) => {
	let B = usePortalContext(CONTENT_NAME, u.__scopePopover), { forceMount: V = B.forceMount, ...H } = u, U = usePopoverContext(CONTENT_NAME, u.__scopePopover);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: V || U.open,
		children: U.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentModal, {
			...H,
			ref: z
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentNonModal, {
			...H,
			ref: z
		})
	});
});
PopoverContent$1.displayName = CONTENT_NAME;
var Slot = createSlot("PopoverContent.RemoveScroll"), PopoverContentModal = import_react.forwardRef((u, z) => {
	let B = usePopoverContext(CONTENT_NAME, u.__scopePopover), H = import_react.useRef(null), U = useComposedRefs(z, H), W = import_react.useRef(!1);
	return import_react.useEffect(() => {
		let u = H.current;
		if (u) return hideOthers(u);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combination_default, {
		as: Slot,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentImpl, {
			...u,
			ref: U,
			trapFocus: B.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: composeEventHandlers(u.onCloseAutoFocus, (u) => {
				u.preventDefault(), W.current || B.triggerRef.current?.focus();
			}),
			onPointerDownOutside: composeEventHandlers(u.onPointerDownOutside, (u) => {
				let z = u.detail.originalEvent, B = z.button === 0 && z.ctrlKey === !0;
				W.current = z.button === 2 || B;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: composeEventHandlers(u.onFocusOutside, (u) => u.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), PopoverContentNonModal = import_react.forwardRef((u, z) => {
	let B = usePopoverContext(CONTENT_NAME, u.__scopePopover), V = import_react.useRef(!1), H = import_react.useRef(!1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContentImpl, {
		...u,
		ref: z,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (z) => {
			u.onCloseAutoFocus?.(z), z.defaultPrevented || (V.current || B.triggerRef.current?.focus(), z.preventDefault()), V.current = !1, H.current = !1;
		},
		onInteractOutside: (z) => {
			u.onInteractOutside?.(z), z.defaultPrevented || (V.current = !0, z.detail.originalEvent.type === "pointerdown" && (H.current = !0));
			let U = z.target;
			B.triggerRef.current?.contains(U) && z.preventDefault(), z.detail.originalEvent.type === "focusin" && H.current && z.preventDefault();
		}
	});
}), PopoverContentImpl = import_react.forwardRef((u, z) => {
	let { __scopePopover: B, trapFocus: V, onOpenAutoFocus: H, onCloseAutoFocus: U, disableOutsidePointerEvents: W, onEscapeKeyDown: G, onPointerDownOutside: K, onFocusOutside: q, onInteractOutside: J, ...Y } = u, Z = usePopoverContext(CONTENT_NAME, B), $ = usePopperScope(B);
	return useFocusGuards(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: V,
		onMountAutoFocus: H,
		onUnmountAutoFocus: U,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			asChild: !0,
			disableOutsidePointerEvents: W,
			onInteractOutside: J,
			onEscapeKeyDown: G,
			onPointerDownOutside: K,
			onFocusOutside: q,
			onDismiss: () => Z.onOpenChange(!1),
			deferPointerDownOutside: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
				"data-state": getState(Z.open),
				role: "dialog",
				id: Z.contentId,
				...$,
				...Y,
				ref: z,
				style: {
					...Y.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), CLOSE_NAME = "PopoverClose", PopoverClose = import_react.forwardRef((u, z) => {
	let { __scopePopover: B, ...V } = u, H = usePopoverContext(CLOSE_NAME, B);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...V,
		ref: z,
		onClick: composeEventHandlers(u.onClick, () => H.onOpenChange(!1))
	});
});
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow", PopoverArrow$1 = import_react.forwardRef((u, z) => {
	let { __scopePopover: B, ...V } = u, H = usePopperScope(B);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		...H,
		...V,
		ref: z
	});
});
PopoverArrow$1.displayName = ARROW_NAME;
function getState(u) {
	return u ? "open" : "closed";
}
var Root2 = Popover$1, Anchor2 = PopoverAnchor$1, Trigger = PopoverTrigger$1, Portal$1 = PopoverPortal, Content2 = PopoverContent$1, Arrow2 = PopoverArrow$1, consumerPreventedWheelEvents = /* @__PURE__ */ new WeakSet();
function Popover(u) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "popover",
		...u
	});
}
function PopoverTrigger(u) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "popover-trigger",
		...u
	});
}
function PopoverAnchor(u) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor2, {
		"data-slot": "popover-anchor",
		...u
	});
}
function resolvePopoverScroller(u, z) {
	let B = u instanceof Node ? u : null;
	for (; B && B !== z.parentNode;) {
		if (B instanceof HTMLElement && B.scrollHeight > B.clientHeight) {
			let u = getComputedStyle(B).overflowY;
			if (u === "auto" || u === "scroll") return B;
		}
		B = B.parentNode;
	}
	return null;
}
function handlePopoverWheel(u, z) {
	if (u.defaultPrevented || consumerPreventedWheelEvents.has(u) || !(u.target instanceof Node) || !z.contains(u.target) || !z.classList.contains("popover-scroll-content") && !z.classList.contains("popover-wheel-scroll")) return;
	let B = resolvePopoverScroller(u.target, z);
	if (!B) return;
	let V = u.deltaMode === WheelEvent.DOM_DELTA_LINE ? u.deltaY * 16 : u.deltaMode === WheelEvent.DOM_DELTA_PAGE ? u.deltaY * B.clientHeight : u.deltaY, H = B.scrollHeight - B.clientHeight, U = Math.max(0, Math.min(H, B.scrollTop + V));
	U !== B.scrollTop && (u.preventDefault(), B.scrollTop = U);
}
function attachPopoverContent(u, z, B) {
	let V = z ?? u.ownerDocument.body, H = (z) => handlePopoverWheel(z, u);
	V.addEventListener("wheel", H, { passive: !1 });
	let U = typeof B == "function" ? B(u) : void 0;
	return B && typeof B != "function" && (B.current = u), () => {
		V.removeEventListener("wheel", H), typeof U == "function" ? U() : typeof B == "function" ? B(null) : B && (B.current = null);
	};
}
function PopoverContent({ className: u, align: z = "center", sideOffset: B = 4, portalContainer: V, style: U, onWheel: W, onWheelCapture: G, ref: K, ...q }) {
	let J = import_react.useCallback((u) => {
		W?.(u), u.defaultPrevented && consumerPreventedWheelEvents.add(u.nativeEvent);
	}, [W]), Y = import_react.useCallback((u) => {
		G?.(u), u.defaultPrevented && consumerPreventedWheelEvents.add(u.nativeEvent);
	}, [G]), X = import_react.useCallback((u) => {
		if (u) return attachPopoverContent(u, V, K);
		typeof K == "function" ? K(null) : K && (K.current = null);
	}, [K, V]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal$1, {
		container: V ?? void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
			"data-slot": "popover-content",
			align: z,
			sideOffset: B,
			className: cn("z-[60] overflow-hidden rounded-md border border-black/14 bg-[rgba(255,255,255,0.82)] text-popover-foreground shadow-[0_16px_36px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl outline-none dark:border-white/14 dark:bg-[rgba(0,0,0,0.72)] dark:shadow-[0_20px_44px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.04)] data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", u),
			ref: X,
			style: {
				...U,
				WebkitAppRegion: "no-drag"
			},
			onWheel: J,
			onWheelCapture: Y,
			...q
		})
	});
}
function PopoverArrow({ className: u, style: z, ...B }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow2, {
		"data-slot": "popover-arrow",
		className: cn("fill-popover !visible block overflow-visible", u),
		style: {
			visibility: "visible",
			...z
		},
		...B
	});
}
export { PopoverTrigger as a, PopoverContent as i, PopoverAnchor as n, PopoverArrow as r, Popover as t };
