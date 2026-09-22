import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { l as cva, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), NAME = "Toggle", Toggle$1 = import_react.forwardRef((e, c) => {
	let { pressed: l, defaultPressed: u, onPressedChange: d, ...f } = e, [p, m] = useControllableState({
		prop: l,
		onChange: d,
		defaultProp: u ?? !1,
		caller: NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-pressed": p,
		"data-state": p ? "on" : "off",
		"data-disabled": e.disabled ? "" : void 0,
		...f,
		ref: c,
		onClick: composeEventHandlers(e.onClick, () => {
			e.disabled || m(!p);
		})
	});
});
Toggle$1.displayName = NAME;
var Root = Toggle$1, toggleVariants = cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
		},
		size: {
			default: "h-9 min-w-9 px-2",
			sm: "h-8 min-w-8 px-1.5",
			lg: "h-10 min-w-10 px-2.5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Toggle({ className: e, variant: c, size: l, ...d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "toggle",
		className: cn(toggleVariants({
			variant: c,
			size: l,
			className: e
		})),
		...d
	});
}
export { toggleVariants as n, Toggle$1 as r, Toggle as t };
