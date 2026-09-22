import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), NAME = "Label", Label$1 = import_react.forwardRef((e, u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.label, {
	...e,
	ref: u,
	onMouseDown: (u) => {
		u.target.closest("button, input, select, textarea") || (e.onMouseDown?.(u), !u.defaultPrevented && u.detail > 1 && u.preventDefault());
	}
}));
Label$1.displayName = NAME;
var Root = Label$1;
function Label({ className: e, ...u }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "label",
		className: cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", e),
		...u
	});
}
export { Label as t };
