import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), PROGRESS_NAME = "Progress", DEFAULT_MAX = 100, [createProgressContext, createProgressScope] = createContextScope(PROGRESS_NAME), [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME), Progress$1 = import_react.forwardRef((e, v) => {
	let { __scopeProgress: y, value: b = null, max: x, getValueLabel: S = defaultGetValueLabel, ...C } = e;
	(x || x === 0) && !isValidMaxNumber(x) && console.error(getInvalidMaxError(`${x}`, "Progress"));
	let w = isValidMaxNumber(x) ? x : DEFAULT_MAX;
	b !== null && !isValidValueNumber(b, w) && console.error(getInvalidValueError(`${b}`, "Progress"));
	let T = isValidValueNumber(b, w) ? b : null, E = isNumber(T) ? S(T, w) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressProvider, {
		scope: y,
		value: T,
		max: w,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"aria-valuemax": w,
			"aria-valuemin": 0,
			"aria-valuenow": isNumber(T) ? T : void 0,
			"aria-valuetext": E,
			role: "progressbar",
			"data-state": getProgressState(T, w),
			"data-value": T ?? void 0,
			"data-max": w,
			...C,
			ref: v
		})
	});
});
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator", ProgressIndicator = import_react.forwardRef((e, v) => {
	let { __scopeProgress: y, ...b } = e, x = useProgressContext(INDICATOR_NAME, y);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getProgressState(x.value, x.max),
		"data-value": x.value ?? void 0,
		"data-max": x.max,
		...b,
		ref: v
	});
});
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(e, v) {
	return `${Math.round(e / v * 100)}%`;
}
function getProgressState(e, v) {
	return e == null ? "indeterminate" : e === v ? "complete" : "loading";
}
function isNumber(e) {
	return typeof e == "number";
}
function isValidMaxNumber(e) {
	return isNumber(e) && !isNaN(e) && e > 0;
}
function isValidValueNumber(e, v) {
	return isNumber(e) && !isNaN(e) && e <= v && e >= 0;
}
function getInvalidMaxError(e, v) {
	return `Invalid prop \`max\` of value \`${e}\` supplied to \`${v}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(e, v) {
	return `Invalid prop \`value\` of value \`${e}\` supplied to \`${v}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress$1, Indicator = ProgressIndicator;
function Progress({ className: e, value: v, ...b }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "progress",
		value: v,
		className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", e),
		...b,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			"data-slot": "progress-indicator",
			className: "h-full w-full flex-1 bg-primary transition-all duration-300 ease-out",
			style: { transform: `translateX(-${100 - (v || 0)}%)` }
		})
	});
}
export { Progress as t };
