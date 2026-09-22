import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { a as createSlot, c as useComposedRefs } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { n as Presence, t as useId } from "./dist-CxjmhSN9.js";
import { n as DismissableLayer, r as useDismissableLayerSurface, t as Portal } from "./dist-BZKlajuP.js";
import { i as FocusScope, n as Combination_default, r as useFocusGuards, t as hideOthers } from "./es2015-D9zZpuOq.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), DIALOG_NAME = "Dialog", [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME), [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME), Dialog = (p) => {
	let { __scopeDialog: L, children: R, open: z, defaultOpen: B, onOpenChange: V, modal: H = !0 } = p, U = import_react.useRef(null), G = import_react.useRef(null), [K, q] = useControllableState({
		prop: z,
		defaultProp: B ?? !1,
		onChange: V,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: L,
		triggerRef: U,
		contentRef: G,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		open: K,
		onOpenChange: q,
		onOpenToggle: import_react.useCallback(() => q((p) => !p), [q]),
		modal: H,
		children: R
	});
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger", DialogTrigger = import_react.forwardRef((p, L) => {
	let { __scopeDialog: R, ...B } = p, H = useDialogContext(TRIGGER_NAME, R), W = useComposedRefs(L, H.triggerRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": H.open,
		"aria-controls": H.open ? H.contentId : void 0,
		"data-state": getState(H.open),
		...B,
		ref: W,
		onClick: composeEventHandlers(p.onClick, H.onOpenToggle)
	});
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal", [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 }), DialogPortal = (p) => {
	let { __scopeDialog: L, forceMount: R, children: z, container: B } = p, V = useDialogContext(PORTAL_NAME, L);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: L,
		forceMount: R,
		children: import_react.Children.map(z, (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: R || V.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: !0,
				container: B,
				children: p
			})
		}))
	});
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay", DialogOverlay = import_react.forwardRef((p, L) => {
	let R = usePortalContext(OVERLAY_NAME, p.__scopeDialog), { forceMount: z = R.forceMount, ...B } = p, V = useDialogContext(OVERLAY_NAME, p.__scopeDialog);
	return V.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: z || V.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...B,
			ref: L
		})
	}) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot = createSlot("DialogOverlay.RemoveScroll"), DialogOverlayImpl = import_react.forwardRef((p, L) => {
	let { __scopeDialog: R, ...B } = p, H = useDialogContext(OVERLAY_NAME, R), U = useComposedRefs(L, useDismissableLayerSurface());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combination_default, {
		as: Slot,
		allowPinchZoom: !0,
		shards: [H.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(H.open),
			...B,
			ref: U,
			style: {
				pointerEvents: "auto",
				...B.style
			}
		})
	});
}), CONTENT_NAME = "DialogContent", DialogContent = import_react.forwardRef((p, L) => {
	let R = usePortalContext(CONTENT_NAME, p.__scopeDialog), { forceMount: z = R.forceMount, ...B } = p, V = useDialogContext(CONTENT_NAME, p.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: z || V.open,
		children: V.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...B,
			ref: L
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...B,
			ref: L
		})
	});
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = import_react.forwardRef((p, L) => {
	let R = useDialogContext(CONTENT_NAME, p.__scopeDialog), B = import_react.useRef(null), V = useComposedRefs(L, R.contentRef, B);
	return import_react.useEffect(() => {
		let p = B.current;
		if (p) return hideOthers(p);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...p,
		ref: V,
		trapFocus: R.open,
		disableOutsidePointerEvents: R.open,
		onCloseAutoFocus: composeEventHandlers(p.onCloseAutoFocus, (p) => {
			p.preventDefault(), R.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(p.onPointerDownOutside, (p) => {
			let L = p.detail.originalEvent, R = L.button === 0 && L.ctrlKey === !0;
			(L.button === 2 || R) && p.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(p.onFocusOutside, (p) => p.preventDefault())
	});
}), DialogContentNonModal = import_react.forwardRef((p, L) => {
	let R = useDialogContext(CONTENT_NAME, p.__scopeDialog), z = import_react.useRef(!1), B = import_react.useRef(!1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...p,
		ref: L,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (L) => {
			p.onCloseAutoFocus?.(L), L.defaultPrevented || (z.current || R.triggerRef.current?.focus(), L.preventDefault()), z.current = !1, B.current = !1;
		},
		onInteractOutside: (L) => {
			p.onInteractOutside?.(L), L.defaultPrevented || (z.current = !0, L.detail.originalEvent.type === "pointerdown" && (B.current = !0));
			let V = L.target;
			R.triggerRef.current?.contains(V) && L.preventDefault(), L.detail.originalEvent.type === "focusin" && B.current && L.preventDefault();
		}
	});
}), DialogContentImpl = import_react.forwardRef((p, L) => {
	let { __scopeDialog: R, trapFocus: z, onOpenAutoFocus: B, onCloseAutoFocus: V, ...H } = p, U = useDialogContext(CONTENT_NAME, R);
	return useFocusGuards(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: z,
		onMountAutoFocus: B,
		onUnmountAutoFocus: V,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: U.contentId,
			"aria-describedby": U.descriptionId,
			"aria-labelledby": U.titleId,
			"data-state": getState(U.open),
			...H,
			ref: L,
			deferPointerDownOutside: !0,
			onDismiss: () => U.onOpenChange(!1)
		})
	}) });
}), TITLE_NAME = "DialogTitle", DialogTitle = import_react.forwardRef((p, L) => {
	let { __scopeDialog: R, ...z } = p, B = useDialogContext(TITLE_NAME, R);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: B.titleId,
		...z,
		ref: L
	});
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription", DialogDescription = import_react.forwardRef((p, L) => {
	let { __scopeDialog: R, ...z } = p, B = useDialogContext(DESCRIPTION_NAME, R);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: B.descriptionId,
		...z,
		ref: L
	});
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose", DialogClose = import_react.forwardRef((p, L) => {
	let { __scopeDialog: R, ...z } = p, B = useDialogContext(CLOSE_NAME, R);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...z,
		ref: L,
		onClick: composeEventHandlers(p.onClick, () => B.onOpenChange(!1))
	});
});
DialogClose.displayName = CLOSE_NAME;
function getState(p) {
	return p ? "open" : "closed";
}
export { DialogOverlay as a, DialogTrigger as c, DialogDescription as i, DialogClose as n, DialogPortal as o, DialogContent as r, DialogTitle as s, Dialog as t };
