import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as useComposedRefs, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { t as usePrevious } from "./dist-DKfCV6tt.js";
import { t as useSize } from "./dist-CFMQL9Z5.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), SWITCH_NAME = "Switch", [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME), [SwitchProviderImpl, useSwitchContext] = createSwitchContext(SWITCH_NAME);
function SwitchProvider(e) {
	let { __scopeSwitch: d, checked: f, children: p, defaultChecked: m, disabled: h, form: g, name: _, onCheckedChange: y, required: b, value: C = "on", internal_do_not_use_render: w } = e, [E, D] = useControllableState({
		prop: f,
		defaultProp: m ?? !1,
		onChange: y,
		caller: SWITCH_NAME
	}), [O, k] = import_react.useState(null), [A, j] = import_react.useState(null), M = {
		checked: E,
		setChecked: D,
		disabled: h,
		control: O,
		setControl: k,
		name: _,
		form: g,
		value: C,
		hasConsumerStoppedPropagationRef: import_react.useRef(!1),
		required: b,
		defaultChecked: m,
		isFormControl: O ? !!g || !!O.closest("form") : !0,
		bubbleInput: A,
		setBubbleInput: j
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchProviderImpl, {
		scope: d,
		...M,
		children: isFunction(w) ? w(M) : p
	});
}
var TRIGGER_NAME = "SwitchTrigger", SwitchTrigger = import_react.forwardRef(({ __scopeSwitch: e, onClick: d, ...p }, m) => {
	let { control: g, form: v, value: y, disabled: b, checked: S, required: C, setControl: w, setChecked: T, hasConsumerStoppedPropagationRef: D, isFormControl: k, bubbleInput: A } = useSwitchContext(TRIGGER_NAME, e), j = useComposedRefs(m, w), M = import_react.useRef(S);
	return import_react.useEffect(() => {
		let e = v ? g?.ownerDocument.getElementById(v) : g?.form;
		if (e instanceof HTMLFormElement) {
			let d = () => T(M.current);
			return e.addEventListener("reset", d), () => e.removeEventListener("reset", d);
		}
	}, [
		g,
		v,
		T
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "switch",
		"aria-checked": S,
		"aria-required": C,
		"data-state": getState(S),
		"data-disabled": b ? "" : void 0,
		disabled: b,
		value: y,
		...p,
		ref: j,
		onClick: composeEventHandlers(d, (e) => {
			T((e) => !e), A && k && (D.current = e.isPropagationStopped(), D.current || e.stopPropagation());
		})
	});
});
SwitchTrigger.displayName = TRIGGER_NAME;
var Switch$1 = import_react.forwardRef((e, d) => {
	let { __scopeSwitch: f, name: p, checked: m, defaultChecked: h, required: g, disabled: _, value: v, onCheckedChange: y, form: b, ...x } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchProvider, {
		__scopeSwitch: f,
		checked: m,
		defaultChecked: h,
		disabled: _,
		required: g,
		onCheckedChange: y,
		name: p,
		form: b,
		value: v,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchTrigger, {
			...x,
			ref: d,
			__scopeSwitch: f
		}), e && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchBubbleInput, { __scopeSwitch: f })] })
	});
});
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb", SwitchThumb = import_react.forwardRef((e, d) => {
	let { __scopeSwitch: f, ...p } = e, m = useSwitchContext(THUMB_NAME, f);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-state": getState(m.checked),
		"data-disabled": m.disabled ? "" : void 0,
		...p,
		ref: d
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput", SwitchBubbleInput = import_react.forwardRef(({ __scopeSwitch: e, ...d }, p) => {
	let { control: m, hasConsumerStoppedPropagationRef: g, checked: _, defaultChecked: v, required: S, disabled: C, name: w, value: T, form: D, bubbleInput: O, setBubbleInput: k } = useSwitchContext(BUBBLE_INPUT_NAME, e), A = useComposedRefs(p, k), j = usePrevious(_), M = useSize(m);
	import_react.useEffect(() => {
		let e = O;
		if (!e) return;
		let d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(d, "checked").set, p = !g.current;
		if (j !== _ && f) {
			let d = new Event("click", { bubbles: p });
			f.call(e, _), e.dispatchEvent(d);
		}
	}, [
		O,
		j,
		_,
		g
	]);
	let N = import_react.useRef(_);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: v ?? N.current,
		required: S,
		disabled: C,
		name: w,
		value: T,
		form: D,
		...d,
		tabIndex: -1,
		ref: A,
		style: {
			...d.style,
			...M,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(e) {
	return typeof e == "function";
}
function getState(e) {
	return e ? "checked" : "unchecked";
}
var trackClassName = "relative inline-flex h-5 w-9 shrink-0 items-center rounded-full border border-transparent p-0.5 transition-colors data-[state=checked]:bg-foreground data-[state=unchecked]:bg-muted-foreground/30", thumbClassName = "pointer-events-none block size-3.5 translate-x-0 rounded-full bg-background shadow-sm transition-transform data-[state=checked]:translate-x-4", compactTrackClassName = "h-3.5 w-6 border-0 p-0.5", compactThumbClassName = "size-2.5 data-[state=checked]:translate-x-2.5";
function Switch({ className: e, thumbClassName: d, ...f }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		"data-slot": "switch",
		className: cn(trackClassName, "cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50", e),
		...f,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, {
			"data-slot": "switch-thumb",
			className: cn(thumbClassName, d)
		})
	});
}
function SwitchIndicator({ checked: e, className: d, size: f = "default", thumbClassName: m, ...h }) {
	let g = e ? "checked" : "unchecked";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": "true",
		"data-slot": "switch-indicator",
		"data-state": g,
		className: cn(trackClassName, f === "compact" && compactTrackClassName, d),
		...h,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-slot": "switch-thumb",
			"data-state": g,
			className: cn(thumbClassName, f === "compact" && compactThumbClassName, m)
		})
	});
}
export { SwitchIndicator as n, Switch as t };
