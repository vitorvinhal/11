import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as useComposedRefs, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as Minus } from "./minus-Dme7h17H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { n as Presence } from "./dist-CxjmhSN9.js";
import { t as usePrevious } from "./dist-DKfCV6tt.js";
import { t as useSize } from "./dist-CFMQL9Z5.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), CHECKBOX_NAME = "Checkbox", [createCheckboxContext, createCheckboxScope] = createContextScope(CHECKBOX_NAME), [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(e) {
	let { __scopeCheckbox: u, checked: d, children: f, defaultChecked: p, disabled: m, form: h, name: g, onCheckedChange: _, required: v, value: b = "on", internal_do_not_use_render: x } = e, [S, w] = useControllableState({
		prop: d,
		defaultProp: p ?? !1,
		onChange: _,
		caller: CHECKBOX_NAME
	}), [T, D] = import_react.useState(null), [O, k] = import_react.useState(null), A = import_react.useRef(!1), j = T ? !!h || !!T.closest("form") : !0, M = {
		checked: S,
		disabled: m,
		setChecked: w,
		control: T,
		setControl: D,
		name: g,
		form: h,
		value: b,
		hasConsumerStoppedPropagationRef: A,
		required: v,
		defaultChecked: isIndeterminate(p) ? !1 : p,
		isFormControl: j,
		bubbleInput: O,
		setBubbleInput: k
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProviderImpl, {
		scope: u,
		...M,
		children: isFunction(x) ? x(M) : f
	});
}
var TRIGGER_NAME = "CheckboxTrigger", CheckboxTrigger = import_react.forwardRef(({ __scopeCheckbox: e, onKeyDown: u, onClick: f, ...p }, m) => {
	let { control: h, value: _, disabled: y, checked: b, required: x, setControl: S, setChecked: C, hasConsumerStoppedPropagationRef: w, isFormControl: T, bubbleInput: E } = useCheckboxContext(TRIGGER_NAME, e), O = useComposedRefs(m, S), A = import_react.useRef(b);
	return import_react.useEffect(() => {
		let e = h?.form;
		if (e) {
			let u = () => C(A.current);
			return e.addEventListener("reset", u), () => e.removeEventListener("reset", u);
		}
	}, [h, C]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": isIndeterminate(b) ? "mixed" : b,
		"aria-required": x,
		"data-state": getState(b),
		"data-disabled": y ? "" : void 0,
		disabled: y,
		value: _,
		...p,
		ref: O,
		onKeyDown: composeEventHandlers(u, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: composeEventHandlers(f, (e) => {
			C((e) => isIndeterminate(e) ? !0 : !e), E && T && (w.current = e.isPropagationStopped(), w.current || e.stopPropagation());
		})
	});
});
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = import_react.forwardRef((e, u) => {
	let { __scopeCheckbox: d, name: f, checked: p, defaultChecked: m, required: h, disabled: g, value: _, onCheckedChange: v, form: y, ...b } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProvider, {
		__scopeCheckbox: d,
		checked: p,
		defaultChecked: m,
		disabled: g,
		required: h,
		onCheckedChange: v,
		name: f,
		form: y,
		value: _,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxTrigger, {
			...b,
			ref: u,
			__scopeCheckbox: d
		}), e && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxBubbleInput, { __scopeCheckbox: d })] })
	});
});
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator", CheckboxIndicator = import_react.forwardRef((e, u) => {
	let { __scopeCheckbox: d, forceMount: f, ...p } = e, m = useCheckboxContext(INDICATOR_NAME, d);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: f || isIndeterminate(m.checked) || m.checked === !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState(m.checked),
			"data-disabled": m.disabled ? "" : void 0,
			...p,
			ref: u,
			style: {
				pointerEvents: "none",
				...e.style
			}
		})
	});
});
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput", CheckboxBubbleInput = import_react.forwardRef(({ __scopeCheckbox: e, ...u }, f) => {
	let { control: p, hasConsumerStoppedPropagationRef: m, checked: h, defaultChecked: _, required: v, disabled: y, name: b, value: C, form: w, bubbleInput: T, setBubbleInput: E } = useCheckboxContext(BUBBLE_INPUT_NAME, e), O = useComposedRefs(f, E), k = usePrevious(h), A = useSize(p);
	import_react.useEffect(() => {
		let e = T;
		if (!e) return;
		let u = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(u, "checked").set, f = !m.current;
		if (k !== h && d) {
			let u = new Event("click", { bubbles: f });
			e.indeterminate = isIndeterminate(h), d.call(e, isIndeterminate(h) ? !1 : h), e.dispatchEvent(u);
		}
	}, [
		T,
		k,
		h,
		m
	]);
	let j = import_react.useRef(isIndeterminate(h) ? !1 : h);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: _ ?? j.current,
		required: v,
		disabled: y,
		name: b,
		value: C,
		form: w,
		...u,
		tabIndex: -1,
		ref: O,
		style: {
			...u.style,
			...A,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(e) {
	return typeof e == "function";
}
function isIndeterminate(e) {
	return e === "indeterminate";
}
function getState(e) {
	return isIndeterminate(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Checkbox({ className: e, checked: u, ...d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		"data-slot": "checkbox",
		checked: u,
		className: cn("peer size-4 shrink-0 rounded-[4px] border border-border bg-background shadow-xs outline-none transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
		...d,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
			"data-slot": "checkbox-indicator",
			className: "flex items-center justify-center text-current",
			children: u === "indeterminate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
		})
	});
}
export { Checkbox as t };
