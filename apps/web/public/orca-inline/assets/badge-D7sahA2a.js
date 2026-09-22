import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as Slot, l as cva, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), badgeVariants = cva("inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		dot: "bg-background text-foreground border-border shadow-xs dark:bg-secondary dark:border-white/20",
		destructive: "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
		outline: "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		link: "text-primary underline-offset-4 [a&]:hover:underline",
		hostContext: "h-4 rounded border-border bg-accent px-1.5 text-[10px] leading-none text-muted-foreground dark:border-border/50 dark:bg-accent/80"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className: e, variant: o = "default", asChild: s = !1, ...c }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s ? Slot : "span", {
		"data-slot": "badge",
		"data-variant": o,
		className: cn(badgeVariants({ variant: o }), e),
		...c
	});
}
export { Badge as t };
