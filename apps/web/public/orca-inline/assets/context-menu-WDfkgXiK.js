import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as Circle } from "./circle-DN6sV7ND.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { _ as createMenuScope, a as Group, c as Label, d as RadioItem, f as Root3, g as SubTrigger, h as SubContent, i as Content2$1, l as Portal, m as Sub, n as Arrow2, o as Item2$1, p as Separator, r as CheckboxItem, s as ItemIndicator, t as Anchor2, u as RadioGroup } from "./dist-F0n2bMkK.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), CONTEXT_MENU_NAME = "ContextMenu", [createContextMenuContext, createContextMenuScope] = createContextScope(CONTEXT_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME), ContextMenu$1 = (d) => {
	let { __scopeContextMenu: B, children: V, onOpenChange: H, open: U, dir: W, modal: G = !0 } = d, K = import_react.useRef(!1);
	{
		let d = import_react.useRef(!1);
		import_react.useEffect(() => {
			U === !0 && !K.current && !d.current && (d.current = !0, console.warn("ContextMenu: The `open` prop has been set to `true` before the user has interacted with the trigger, so its position is indeterminate. This is likely unintended and will result in the menu being anchored to the top-left corner of the viewport."));
		}, [U]);
	}
	let [q, Y] = useControllableState({
		prop: U,
		defaultProp: !1,
		onChange: H,
		caller: CONTEXT_MENU_NAME
	}), X = useMenuScope(B);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuProvider, {
		scope: B,
		open: q,
		onOpenChange: Y,
		modal: G,
		hasInteractedRef: K,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root3, {
			...X,
			dir: W,
			open: q,
			onOpenChange: Y,
			modal: G,
			children: V
		})
	});
};
ContextMenu$1.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME = "ContextMenuTrigger", ContextMenuTrigger$1 = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, disabled: H = !1, ...U } = d, W = useContextMenuContext(TRIGGER_NAME, V), K = useMenuScope(V), [J, Y] = import_react.useState({
		x: 0,
		y: 0
	}), X = import_react.useMemo(() => ({ current: { getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...J
	}) } }), [J]), Z = import_react.useRef(0), Q = import_react.useCallback(() => window.clearTimeout(Z.current), []), $ = (d) => {
		W.hasInteractedRef.current = !0, Y({
			x: d.clientX,
			y: d.clientY
		}), W.onOpenChange(!0);
	};
	return import_react.useEffect(() => Q, [Q]), import_react.useEffect(() => void (H && Q()), [H, Q]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor2, {
		...K,
		virtualRef: X
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-state": W.open ? "open" : "closed",
		"data-disabled": H ? "" : void 0,
		...U,
		ref: B,
		style: {
			WebkitTouchCallout: "none",
			...d.style
		},
		onContextMenu: H ? d.onContextMenu : composeEventHandlers(d.onContextMenu, (d) => {
			Q(), $(d), d.preventDefault();
		}),
		onPointerDown: H ? d.onPointerDown : composeEventHandlers(d.onPointerDown, whenTouchOrPen((d) => {
			Q(), W.open && W.onOpenChange(!1), Z.current = window.setTimeout(() => $(d), 700);
		})),
		onPointerMove: H ? d.onPointerMove : composeEventHandlers(d.onPointerMove, whenTouchOrPen(Q)),
		onPointerCancel: H ? d.onPointerCancel : composeEventHandlers(d.onPointerCancel, whenTouchOrPen(Q)),
		onPointerUp: H ? d.onPointerUp : composeEventHandlers(d.onPointerUp, whenTouchOrPen(Q))
	})] });
});
ContextMenuTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "ContextMenuPortal", ContextMenuPortal = (d) => {
	let { __scopeContextMenu: B, ...V } = d, H = useMenuScope(B);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		...H,
		...V
	});
};
ContextMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "ContextMenuContent", ContextMenuContent$1 = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useContextMenuContext(CONTENT_NAME, V), W = useMenuScope(V), G = import_react.useRef(!1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
		...W,
		...H,
		ref: B,
		side: "right",
		sideOffset: 2,
		align: "start",
		onCloseAutoFocus: (B) => {
			d.onCloseAutoFocus?.(B), !B.defaultPrevented && G.current && B.preventDefault(), G.current = !1;
		},
		onInteractOutside: (B) => {
			d.onInteractOutside?.(B), !B.defaultPrevented && !U.modal && (G.current = !0);
		},
		style: {
			...d.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
ContextMenuContent$1.displayName = CONTENT_NAME;
var GROUP_NAME = "ContextMenuGroup", ContextMenuGroup = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "ContextMenuLabel", ContextMenuLabel$1 = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuLabel$1.displayName = LABEL_NAME;
var ITEM_NAME = "ContextMenuItem", ContextMenuItem$1 = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuItem$1.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "ContextMenuCheckboxItem", ContextMenuCheckboxItem = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxItem, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "ContextMenuRadioGroup", ContextMenuRadioGroup$1 = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuRadioGroup$1.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "ContextMenuRadioItem", ContextMenuRadioItem$1 = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioItem, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuRadioItem$1.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "ContextMenuItemIndicator", ContextMenuItemIndicator = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "ContextMenuSeparator", ContextMenuSeparator$1 = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuSeparator$1.displayName = SEPARATOR_NAME;
var ARROW_NAME = "ContextMenuArrow", ContextMenuArrow = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow2, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "ContextMenuSub", ContextMenuSub$1 = (d) => {
	let { __scopeContextMenu: B, children: V, onOpenChange: H, open: U, defaultOpen: W } = d, G = useMenuScope(B), [K, q] = useControllableState({
		prop: U,
		defaultProp: W ?? !1,
		onChange: H,
		caller: SUB_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, {
		...G,
		open: K,
		onOpenChange: q,
		children: V
	});
};
ContextMenuSub$1.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "ContextMenuSubTrigger", ContextMenuSubTrigger$1 = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubTrigger, {
		...U,
		...H,
		ref: B
	});
});
ContextMenuSubTrigger$1.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "ContextMenuSubContent", ContextMenuSubContent$1 = import_react.forwardRef((d, B) => {
	let { __scopeContextMenu: V, ...H } = d, U = useMenuScope(V);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent, {
		...U,
		...H,
		ref: B,
		style: {
			...d.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
ContextMenuSubContent$1.displayName = SUB_CONTENT_NAME;
function whenTouchOrPen(d) {
	return (B) => B.pointerType === "mouse" ? void 0 : d(B);
}
var Root2 = ContextMenu$1, Trigger = ContextMenuTrigger$1, Portal2 = ContextMenuPortal, Content2 = ContextMenuContent$1, Label2 = ContextMenuLabel$1, Item2 = ContextMenuItem$1, RadioGroup2 = ContextMenuRadioGroup$1, RadioItem2 = ContextMenuRadioItem$1, ItemIndicator2 = ContextMenuItemIndicator, Separator2 = ContextMenuSeparator$1, Sub2 = ContextMenuSub$1, SubTrigger2 = ContextMenuSubTrigger$1, SubContent2 = ContextMenuSubContent$1;
function ContextMenu({ ...d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "context-menu",
		modal: !1,
		...d
	});
}
function ContextMenuTrigger({ ...d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "context-menu-trigger",
		...d
	});
}
function ContextMenuSub({ ...d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub2, {
		"data-slot": "context-menu-sub",
		...d
	});
}
function ContextMenuRadioGroup({ ...d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup2, {
		"data-slot": "context-menu-radio-group",
		...d
	});
}
function ContextMenuSubTrigger({ className: d, inset: B, children: U, ...W }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
		"data-slot": "context-menu-sub-trigger",
		"data-inset": B,
		className: cn("flex cursor-default items-center gap-2 rounded-md px-2 py-[4px] text-[12px] leading-[17px] font-[450] outline-hidden select-none focus:bg-black/8 dark:focus:bg-white/14 focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-black/8 dark:data-[state=open]:bg-white/14 data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground", d),
		...W,
		children: [U, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
	});
}
function ContextMenuSubContent({ className: d, style: B, ...H }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
		"data-slot": "context-menu-sub-content",
		className: cn("z-[70] min-w-[11rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-[11px] border border-black/14 bg-[rgba(255,255,255,0.10)] p-[4px] text-popover-foreground shadow-[0_12px_28px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl dark:border-white/14 dark:bg-[rgba(0,0,0,0.12)] dark:shadow-[0_16px_34px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.04)] data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:duration-150 data-[state=open]:zoom-in-[0.98]", d),
		style: {
			...B,
			WebkitAppRegion: "no-drag"
		},
		...H
	}) });
}
function ContextMenuContent({ className: d, style: B, ...H }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		"data-slot": "context-menu-content",
		className: cn("z-[70] max-h-(--radix-context-menu-content-available-height) min-w-[11rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto scrollbar-sleek rounded-[11px] border border-black/14 bg-[rgba(255,255,255,0.10)] p-[4px] text-popover-foreground shadow-[0_12px_28px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl dark:border-white/14 dark:bg-[rgba(0,0,0,0.12)] dark:shadow-[0_16px_34px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.04)] data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:duration-150 data-[state=open]:zoom-in-[0.98]", d),
		style: {
			...B,
			WebkitAppRegion: "no-drag"
		},
		...H
	}) });
}
function ContextMenuItem({ className: d, inset: B, variant: H = "default", ...U }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		"data-slot": "context-menu-item",
		"data-inset": B,
		"data-variant": H,
		className: cn("relative flex cursor-default items-center gap-2 rounded-md px-2 py-[4px] text-[12px] leading-[17px] font-[450] outline-hidden select-none focus:bg-black/8 dark:focus:bg-white/14 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!", d),
		...U
	});
}
function ContextMenuRadioItem({ className: d, children: B, ...H }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
		"data-slot": "context-menu-radio-item",
		className: cn("relative flex cursor-default items-center gap-2 rounded-md py-[4px] pr-2 pl-8 text-[12px] leading-[17px] font-[450] outline-hidden select-none focus:bg-black/8 dark:focus:bg-white/14 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5", d),
		...H,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-2 fill-current" }) })
		}), B]
	});
}
function ContextMenuLabel({ className: d, inset: B, ...H }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
		"data-slot": "context-menu-label",
		"data-inset": B,
		className: cn("px-2 py-[4px] text-[11px] font-semibold text-muted-foreground data-[inset]:pl-8", d),
		...H
	});
}
function ContextMenuSeparator({ className: d, ...B }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
		"data-slot": "context-menu-separator",
		className: cn("my-[3px] h-px bg-border/60", d),
		...B
	});
}
function ContextMenuShortcut({ className: d, ...B }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "context-menu-shortcut",
		className: cn("ml-auto shrink-0 whitespace-nowrap text-[11px] tracking-normal text-muted-foreground/85", d),
		...B
	});
}
export { ContextMenuRadioGroup as a, ContextMenuShortcut as c, ContextMenuSubTrigger as d, ContextMenuTrigger as f, ContextMenuLabel as i, ContextMenuSub as l, ContextMenuContent as n, ContextMenuRadioItem as o, ContextMenuItem as r, ContextMenuSeparator as s, ContextMenu as t, ContextMenuSubContent as u };
