import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as useComposedRefs, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as Circle } from "./circle-DN6sV7ND.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { t as useId } from "./dist-CxjmhSN9.js";
import { _ as createMenuScope, a as Group, c as Label, d as RadioItem, f as Root3, g as SubTrigger, h as SubContent, i as Content2$1, l as Portal, m as Sub, n as Arrow2, o as Item2$1, p as Separator, r as CheckboxItem, s as ItemIndicator, t as Anchor2, u as RadioGroup } from "./dist-F0n2bMkK.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), DROPDOWN_MENU_NAME = "DropdownMenu", [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(DROPDOWN_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME), DropdownMenu$1 = (m) => {
	let { __scopeDropdownMenu: U, children: W, dir: G, open: K, defaultOpen: q, onOpenChange: J, modal: Y = !0 } = m, X = useMenuScope(U), Z = import_react.useRef(null), [Q, $] = useControllableState({
		prop: K,
		defaultProp: q ?? !1,
		onChange: J,
		caller: DROPDOWN_MENU_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuProvider, {
		scope: U,
		triggerId: useId(),
		triggerRef: Z,
		contentId: useId(),
		open: Q,
		onOpenChange: $,
		onOpenToggle: import_react.useCallback(() => $((m) => !m), [$]),
		modal: Y,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root3, {
			...X,
			open: Q,
			onOpenChange: $,
			dir: G,
			modal: Y,
			children: W
		})
	});
};
DropdownMenu$1.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger", DropdownMenuTrigger$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: G, disabled: K = !1, ...q } = m, J = useDropdownMenuContext(TRIGGER_NAME, G), Y = useMenuScope(G), Z = useComposedRefs(U, J.triggerRef);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor2, {
		asChild: !0,
		...Y,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			id: J.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": J.open,
			"aria-controls": J.open ? J.contentId : void 0,
			"data-state": J.open ? "open" : "closed",
			"data-disabled": K ? "" : void 0,
			disabled: K,
			...q,
			ref: Z,
			onPointerDown: composeEventHandlers(m.onPointerDown, (m) => {
				!K && m.button === 0 && m.ctrlKey === !1 && (J.onOpenToggle(), J.open || m.preventDefault());
			}),
			onKeyDown: composeEventHandlers(m.onKeyDown, (m) => {
				K || (["Enter", " "].includes(m.key) && J.onOpenToggle(), m.key === "ArrowDown" && J.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(m.key) && m.preventDefault());
			})
		})
	});
});
DropdownMenuTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DropdownMenuPortal", DropdownMenuPortal$1 = (m) => {
	let { __scopeDropdownMenu: U, ...W } = m, G = useMenuScope(U);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		...G,
		...W
	});
};
DropdownMenuPortal$1.displayName = PORTAL_NAME;
var CONTENT_NAME = "DropdownMenuContent", DropdownMenuContent$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useDropdownMenuContext(CONTENT_NAME, W), q = useMenuScope(W), J = import_react.useRef(!1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
		id: K.contentId,
		"aria-labelledby": K.triggerId,
		...q,
		...G,
		ref: U,
		onCloseAutoFocus: composeEventHandlers(m.onCloseAutoFocus, (m) => {
			J.current || K.triggerRef.current?.focus(), J.current = !1, m.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(m.onInteractOutside, (m) => {
			let U = m.detail.originalEvent, W = U.button === 0 && U.ctrlKey === !0, G = U.button === 2 || W;
			(!K.modal || G) && (J.current = !0);
		}),
		style: {
			...m.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuContent$1.displayName = CONTENT_NAME;
var GROUP_NAME = "DropdownMenuGroup", DropdownMenuGroup = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel", DropdownMenuLabel$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuLabel$1.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem", DropdownMenuItem$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2$1, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuItem$1.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem", DropdownMenuCheckboxItem$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxItem, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuCheckboxItem$1.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup", DropdownMenuRadioGroup$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuRadioGroup$1.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem", DropdownMenuRadioItem$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioItem, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuRadioItem$1.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator", DropdownMenuItemIndicator = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator", DropdownMenuSeparator$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuSeparator$1.displayName = SEPARATOR_NAME;
var ARROW_NAME = "DropdownMenuArrow", DropdownMenuArrow = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow2, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuArrow.displayName = ARROW_NAME;
var DropdownMenuSub$1 = (m) => {
	let { __scopeDropdownMenu: U, children: W, open: G, onOpenChange: K, defaultOpen: q } = m, J = useMenuScope(U), [Y, X] = useControllableState({
		prop: G,
		defaultProp: q ?? !1,
		onChange: K,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub, {
		...J,
		open: Y,
		onOpenChange: X,
		children: W
	});
}, SUB_TRIGGER_NAME = "DropdownMenuSubTrigger", DropdownMenuSubTrigger$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubTrigger, {
		...K,
		...G,
		ref: U
	});
});
DropdownMenuSubTrigger$1.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent", DropdownMenuSubContent$1 = import_react.forwardRef((m, U) => {
	let { __scopeDropdownMenu: W, ...G } = m, K = useMenuScope(W);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent, {
		...K,
		...G,
		ref: U,
		style: {
			...m.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuSubContent$1.displayName = SUB_CONTENT_NAME;
var Root2 = DropdownMenu$1, Trigger = DropdownMenuTrigger$1, Portal2 = DropdownMenuPortal$1, Content2 = DropdownMenuContent$1, Label2 = DropdownMenuLabel$1, Item2 = DropdownMenuItem$1, CheckboxItem2 = DropdownMenuCheckboxItem$1, RadioGroup2 = DropdownMenuRadioGroup$1, RadioItem2 = DropdownMenuRadioItem$1, ItemIndicator2 = DropdownMenuItemIndicator, Separator2 = DropdownMenuSeparator$1, Sub2 = DropdownMenuSub$1, SubTrigger2 = DropdownMenuSubTrigger$1, SubContent2 = DropdownMenuSubContent$1;
function DropdownMenu({ ...m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "dropdown-menu",
		...m
	});
}
function DropdownMenuPortal({ ...m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, {
		"data-slot": "dropdown-menu-portal",
		...m
	});
}
function DropdownMenuTrigger({ ...m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...m
	});
}
function DropdownMenuContent({ className: m, sideOffset: U = 4, style: W, ...K }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		"data-slot": "dropdown-menu-content",
		sideOffset: U,
		className: cn("z-[70] max-h-(--radix-dropdown-menu-content-available-height) min-w-[11rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto scrollbar-sleek rounded-[11px] border border-black/14 bg-[rgba(255,255,255,0.82)] p-[4px] text-black dark:text-white shadow-[0_12px_28px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl dark:border-white/14 dark:bg-[rgba(0,0,0,0.72)] dark:shadow-[0_16px_34px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.04)] data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:duration-150 data-[state=open]:zoom-in-[0.98]", m),
		style: {
			...W,
			WebkitAppRegion: "no-drag"
		},
		...K
	}) });
}
function DropdownMenuItem({ className: m, inset: U, variant: W = "default", ...K }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		"data-slot": "dropdown-menu-item",
		"data-inset": U,
		"data-variant": W,
		className: cn("relative flex cursor-default items-center gap-2 rounded-md px-2 py-[4px] text-[12px] leading-[17px] font-[450] outline-hidden select-none focus:bg-black/8 dark:focus:bg-white/14 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:text-destructive!", m),
		...K
	});
}
function DropdownMenuCheckboxItem({ className: m, children: U, checked: W, ...q }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: cn("relative flex cursor-default items-center gap-2 rounded-md py-[4px] pr-2 pl-7 text-[12px] leading-[17px] font-[450] outline-hidden select-none focus:bg-black/8 dark:focus:bg-white/14 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5", m),
		checked: W,
		...q,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) })
		}), U]
	});
}
function DropdownMenuRadioGroup({ ...m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup2, {
		"data-slot": "dropdown-menu-radio-group",
		...m
	});
}
function DropdownMenuRadioItem({ className: m, children: U, ...W }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
		"data-slot": "dropdown-menu-radio-item",
		className: cn("relative flex cursor-default items-center gap-2 rounded-md py-[4px] pr-2 pl-7 text-[12px] leading-[17px] font-[450] outline-hidden select-none focus:bg-black/8 dark:focus:bg-white/14 focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5", m),
		...W,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-2 fill-current" }) })
		}), U]
	});
}
function DropdownMenuLabel({ className: m, inset: U, ...W }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
		"data-slot": "dropdown-menu-label",
		"data-inset": U,
		className: cn("px-2 py-[4px] text-[11px] font-semibold text-muted-foreground data-[inset]:pl-7", m),
		...W
	});
}
function DropdownMenuSeparator({ className: m, ...U }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
		"data-slot": "dropdown-menu-separator",
		className: cn("my-[3px] h-px bg-border/60", m),
		...U
	});
}
function DropdownMenuShortcut({ className: m, ...U }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: cn("ml-auto shrink-0 whitespace-nowrap text-[11px] tracking-normal text-muted-foreground/85", m),
		...U
	});
}
function DropdownMenuSub({ ...m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sub2, {
		"data-slot": "dropdown-menu-sub",
		...m
	});
}
function DropdownMenuSubTrigger({ className: m, inset: U, children: W, hideChevron: K, ...J }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": U,
		className: cn("flex cursor-default items-center gap-2 rounded-md px-2 py-[4px] text-[12px] leading-[17px] font-[450] outline-hidden select-none focus:bg-black/8 dark:focus:bg-white/14 focus:text-accent-foreground data-[inset]:pl-7 data-[state=open]:bg-black/8 dark:data-[state=open]:bg-white/14 data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground", m),
		...J,
		children: [W, K ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto size-4" })]
	});
}
function DropdownMenuSubContent({ className: m, style: U, ...W }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
		"data-slot": "dropdown-menu-sub-content",
		className: cn("z-[70] min-w-[11rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-[11px] border border-black/14 bg-[rgba(255,255,255,0.82)] p-[4px] text-black dark:text-white shadow-[0_12px_28px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl dark:border-white/14 dark:bg-[rgba(0,0,0,0.72)] dark:shadow-[0_16px_34px_rgba(0,0,0,0.40),inset_0_1px_0_rgba(255,255,255,0.04)] data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:duration-150 data-[state=open]:zoom-in-[0.98]", m),
		style: {
			...U,
			WebkitAppRegion: "no-drag"
		},
		...W
	}) });
}
export { DropdownMenuLabel as a, DropdownMenuRadioItem as c, DropdownMenuSub as d, DropdownMenuSubContent as f, DropdownMenuItem as i, DropdownMenuSeparator as l, DropdownMenuTrigger as m, DropdownMenuCheckboxItem as n, DropdownMenuPortal as o, DropdownMenuSubTrigger as p, DropdownMenuContent as r, DropdownMenuRadioGroup as s, DropdownMenu as t, DropdownMenuShortcut as u };
