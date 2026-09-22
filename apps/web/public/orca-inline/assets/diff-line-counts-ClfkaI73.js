import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function DiffLineCounts({ added: e, removed: n }) {
	let r = typeof e == "number" && e > 0, i = typeof n == "number" && n > 0;
	return !r && !i ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "shrink-0 tabular-nums text-[10px]",
		children: [
			r && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				style: { color: "var(--git-decoration-added)" },
				children: ["+", e]
			}),
			r && i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " " }),
			i && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				style: { color: "var(--git-decoration-deleted)" },
				children: ["-", n]
			})
		]
	});
}
export { DiffLineCounts as t };
