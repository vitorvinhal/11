import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { l as cva, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { n as Presence, t as useId } from "./dist-CxjmhSN9.js";
import { t as useDirection } from "./dist-DqysERl8.js";
import { n as Root, r as createRovingFocusGroupScope, t as Item } from "./dist-Dm7fY9iq.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), TABS_NAME = "Tabs", [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [createRovingFocusGroupScope]), useRovingFocusGroupScope = createRovingFocusGroupScope(), [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME), Tabs$1 = import_react.forwardRef((o, E) => {
	let { __scopeTabs: D, value: O, onValueChange: k, defaultValue: A, orientation: j = "horizontal", dir: N, activationMode: I = "automatic", ...L } = o, R = useDirection(N), [z, B] = useControllableState({
		prop: O,
		onChange: k,
		defaultProp: A ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsProvider, {
		scope: D,
		baseId: useId(),
		value: z,
		onValueChange: B,
		orientation: j,
		dir: R,
		activationMode: I,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			dir: R,
			"data-orientation": j,
			...L,
			ref: E
		})
	});
});
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList", TabsList$1 = import_react.forwardRef((o, E) => {
	let { __scopeTabs: D, loop: O = !0, ...k } = o, A = useTabsContext(TAB_LIST_NAME, D), j = useRovingFocusGroupScope(D);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		asChild: !0,
		...j,
		orientation: A.orientation,
		dir: A.dir,
		loop: O,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "tablist",
			"aria-orientation": A.orientation,
			...k,
			ref: E
		})
	});
});
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger", TabsTrigger$1 = import_react.forwardRef((o, E) => {
	let { __scopeTabs: D, value: O, disabled: k = !1, ...A } = o, M = useTabsContext(TRIGGER_NAME, D), N = useRovingFocusGroupScope(D), P = makeTriggerId(M.baseId, O), F = makeContentId(M.baseId, O), I = O === M.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: !0,
		...N,
		focusable: !k,
		active: I,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": I,
			"aria-controls": F,
			"data-state": I ? "active" : "inactive",
			"data-disabled": k ? "" : void 0,
			disabled: k,
			id: P,
			...A,
			ref: E,
			onMouseDown: composeEventHandlers(o.onMouseDown, (o) => {
				!k && o.button === 0 && o.ctrlKey === !1 ? M.onValueChange(O) : o.preventDefault();
			}),
			onKeyDown: composeEventHandlers(o.onKeyDown, (o) => {
				k || o.target !== o.currentTarget || [" ", "Enter"].includes(o.key) && M.onValueChange(O);
			}),
			onFocus: composeEventHandlers(o.onFocus, () => {
				let o = M.activationMode !== "manual";
				!I && !k && o && M.onValueChange(O);
			})
		})
	});
});
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent", TabsContent$1 = import_react.forwardRef((o, E) => {
	let { __scopeTabs: D, value: O, forceMount: k, children: A, ...j } = o, M = useTabsContext(CONTENT_NAME, D), P = makeTriggerId(M.baseId, O), F = makeContentId(M.baseId, O), I = O === M.value, L = import_react.useRef(I);
	return import_react.useEffect(() => {
		let o = requestAnimationFrame(() => L.current = !1);
		return () => cancelAnimationFrame(o);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: k || I,
		children: ({ present: D }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": I ? "active" : "inactive",
			"data-orientation": M.orientation,
			role: "tabpanel",
			"aria-labelledby": P,
			hidden: !D,
			id: F,
			tabIndex: 0,
			...j,
			ref: E,
			style: {
				...o.style,
				animationDuration: L.current ? "0s" : void 0
			},
			children: D && A
		})
	});
});
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(o, E) {
	return `${o}-trigger-${E}`;
}
function makeContentId(o, E) {
	return `${o}-content-${E}`;
}
var Root2 = Tabs$1, List = TabsList$1, Trigger = TabsTrigger$1, Content = TabsContent$1;
function Tabs({ className: o, orientation: E = "horizontal", ...D }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "tabs",
		"data-orientation": E,
		orientation: E,
		className: cn("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col", o),
		...D
	});
}
var tabsListVariants = cva("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none", {
	variants: { variant: {
		default: "bg-muted",
		line: "gap-1 bg-transparent"
	} },
	defaultVariants: { variant: "default" }
});
function TabsList({ className: o, variant: E = "default", ...D }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		"data-slot": "tabs-list",
		"data-variant": E,
		className: cn(tabsListVariants({ variant: E }), o),
		...D
	});
}
function TabsTrigger({ className: o, ...E }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "tabs-trigger",
		className: cn("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent", "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100", o),
		...E
	});
}
function TabsContent({ className: o, ...E }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		"data-slot": "tabs-content",
		className: cn("flex-1 outline-none", o),
		...E
	});
}
export { TabsTrigger as i, TabsContent as n, TabsList as r, Tabs as t };
