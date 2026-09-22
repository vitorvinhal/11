import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), TONE_CLASSES = {
	connected: {
		pill: "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
		dot: "bg-emerald-500"
	},
	attention: {
		pill: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
		dot: "bg-amber-500"
	},
	neutral: {
		pill: "border-border bg-background text-muted-foreground",
		dot: "bg-muted-foreground"
	}
};
function IntegrationStatusPill({ tone: e, children: a }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium", TONE_CLASSES[e].pill),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", TONE_CLASSES[e].dot) }), a]
	});
}
export { IntegrationStatusPill as t };
