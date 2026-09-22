import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { a as createSlot } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, i) => {
	let a = createSlot(`Primitive.${i}`), s = import_react.forwardRef((e, o) => {
		let { asChild: s, ...c } = e, l = s ? a : i;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, {
			...c,
			ref: o
		});
	});
	return s.displayName = `Primitive.${i}`, {
		...e,
		[i]: s
	};
}, {});
function dispatchDiscreteCustomEvent(e, i) {
	e && import_react_dom.flushSync(() => e.dispatchEvent(i));
}
export { dispatchDiscreteCustomEvent as n, Primitive as t };
