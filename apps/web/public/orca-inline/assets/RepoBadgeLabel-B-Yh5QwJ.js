import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function RepoBadgeMark({ color: e, className: r }) {
	let i = e ? { backgroundColor: e } : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		className: cn("block size-1.5 shrink-0", r),
		style: i
	});
}
function RepoBadgeLabel({ name: e, color: r, className: a, badgeClassName: o }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex min-w-0 items-center gap-1.5", a),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoBadgeMark, {
			color: r,
			className: o
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: e
		})]
	});
}
var RepoBadgeLabel_default = RepoBadgeLabel;
export { RepoBadgeMark as n, RepoBadgeLabel_default as t };
