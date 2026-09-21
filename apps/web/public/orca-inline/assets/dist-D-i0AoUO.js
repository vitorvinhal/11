import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), VISUALLY_HIDDEN_STYLES = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), NAME = "VisuallyHidden", VisuallyHidden = import_react.forwardRef((e, l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
	...e,
	ref: l,
	style: {
		...VISUALLY_HIDDEN_STYLES,
		...e.style
	}
}));
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;
export { VISUALLY_HIDDEN_STYLES as n, Root as t };
