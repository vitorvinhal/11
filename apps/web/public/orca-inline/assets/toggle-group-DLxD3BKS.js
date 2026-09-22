import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { t as useControllableState } from "./dist-DDM3IpIH.js";
import { t as useDirection } from "./dist-DqysERl8.js";
import { n as Root, r as createRovingFocusGroupScope, t as Item } from "./dist-Dm7fY9iq.js";
import { n as toggleVariants, r as Toggle } from "./toggle-BseEOkHu.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), TOGGLE_GROUP_NAME = "ToggleGroup", [createToggleGroupContext, createToggleGroupScope] = createContextScope(TOGGLE_GROUP_NAME, [createRovingFocusGroupScope]), useRovingFocusGroupScope = createRovingFocusGroupScope(), ToggleGroup$1 = import_react.forwardRef((n, y) => {
	let { type: b, ...x } = n;
	if (b === "single") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImplSingle, {
		role: "radiogroup",
		...x,
		ref: y
	});
	if (b === "multiple") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImplMultiple, {
		role: "toolbar",
		...x,
		ref: y
	});
	throw Error(`Missing prop \`type\` expected on \`${TOGGLE_GROUP_NAME}\``);
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupValueProvider, useToggleGroupValueContext] = createToggleGroupContext(TOGGLE_GROUP_NAME), ToggleGroupImplSingle = import_react.forwardRef((n, y) => {
	let { value: b, defaultValue: x, onValueChange: S = () => {}, ...C } = n, [T, E] = useControllableState({
		prop: b,
		defaultProp: x ?? "",
		onChange: S,
		caller: TOGGLE_GROUP_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupValueProvider, {
		scope: n.__scopeToggleGroup,
		type: "single",
		value: import_react.useMemo(() => T ? [T] : [], [T]),
		onItemActivate: E,
		onItemDeactivate: import_react.useCallback(() => E(""), [E]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImpl, {
			...C,
			ref: y
		})
	});
}), ToggleGroupImplMultiple = import_react.forwardRef((n, y) => {
	let { value: b, defaultValue: x, onValueChange: S = () => {}, ...C } = n, [T, E] = useControllableState({
		prop: b,
		defaultProp: x ?? [],
		onChange: S,
		caller: TOGGLE_GROUP_NAME
	}), D = import_react.useCallback((n) => E((y = []) => [...y, n]), [E]), O = import_react.useCallback((n) => E((y = []) => y.filter((y) => y !== n)), [E]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupValueProvider, {
		scope: n.__scopeToggleGroup,
		type: "multiple",
		value: T,
		onItemActivate: D,
		onItemDeactivate: O,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupImpl, {
			...C,
			ref: y
		})
	});
});
ToggleGroup$1.displayName = TOGGLE_GROUP_NAME;
var [ToggleGroupContext$1, useToggleGroupContext] = createToggleGroupContext(TOGGLE_GROUP_NAME), ToggleGroupImpl = import_react.forwardRef((n, y) => {
	let { __scopeToggleGroup: b, disabled: x = !1, rovingFocus: C = !0, orientation: w, dir: D, loop: O = !0, ...k } = n, A = useRovingFocusGroupScope(b), j = useDirection(D), M = {
		dir: j,
		...k
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupContext$1, {
		scope: b,
		rovingFocus: C,
		disabled: x,
		children: C ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
			asChild: !0,
			...A,
			orientation: w,
			dir: j,
			loop: O,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...M,
				ref: y
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...M,
			ref: y
		})
	});
}), ITEM_NAME = "ToggleGroupItem", ToggleGroupItem$1 = import_react.forwardRef((n, y) => {
	let b = useToggleGroupValueContext(ITEM_NAME, n.__scopeToggleGroup), x = useToggleGroupContext(ITEM_NAME, n.__scopeToggleGroup), S = useRovingFocusGroupScope(n.__scopeToggleGroup), C = b.value.includes(n.value), w = x.disabled || n.disabled, T = {
		...n,
		pressed: C,
		disabled: w
	}, E = import_react.useRef(null);
	return x.rovingFocus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		asChild: !0,
		...S,
		focusable: !w,
		active: C,
		ref: E,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItemImpl, {
			...T,
			ref: y
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItemImpl, {
		...T,
		ref: y
	});
});
ToggleGroupItem$1.displayName = ITEM_NAME;
var ToggleGroupItemImpl = import_react.forwardRef((n, y) => {
	let { __scopeToggleGroup: b, value: x, ...S } = n, C = useToggleGroupValueContext(ITEM_NAME, b), w = {
		role: "radio",
		"aria-checked": n.pressed,
		"aria-pressed": void 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
		...C.type === "single" ? w : void 0,
		...S,
		ref: y,
		onPressedChange: (n) => {
			n ? C.onItemActivate(x) : C.onItemDeactivate(x);
		}
	});
}), ToggleGroupContext = import_react.createContext({
	size: "default",
	variant: "default",
	spacing: 0
});
function ToggleGroup({ className: n, variant: y, size: x, spacing: S = 0, children: C, ...w }) {
	let T = import_react.useMemo(() => ({
		variant: y,
		size: x,
		spacing: S
	}), [
		y,
		x,
		S
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroup$1, {
		"data-slot": "toggle-group",
		"data-variant": y,
		"data-size": x,
		"data-spacing": S,
		style: { "--gap": S },
		className: cn("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", n),
		...w,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupContext.Provider, {
			value: T,
			children: C
		})
	});
}
function ToggleGroupItem({ className: n, children: y, variant: x, size: S, ...C }) {
	let w = import_react.useContext(ToggleGroupContext);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleGroupItem$1, {
		"data-slot": "toggle-group-item",
		"data-variant": w.variant || x,
		"data-size": w.size || S,
		"data-spacing": w.spacing,
		className: cn(toggleVariants({
			variant: w.variant || x,
			size: w.size || S
		}), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", n),
		...C,
		children: y
	});
}
export { ToggleGroupItem as n, ToggleGroup as t };
