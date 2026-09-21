import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as useComposedRefs } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { n as useLayoutEffect2, r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { n as Presence, t as useId } from "./dist-CxjmhSN9.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), COLLAPSIBLE_NAME = "Collapsible", [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME), [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME), Collapsible$1 = import_react.forwardRef((e, d) => {
	let { __scopeCollapsible: f, open: p, defaultOpen: h, disabled: g, onOpenChange: _, ...y } = e, [S, C] = useControllableState({
		prop: p,
		defaultProp: h ?? !1,
		onChange: _,
		caller: COLLAPSIBLE_NAME
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleProvider, {
		scope: f,
		disabled: g,
		contentId: useId(),
		open: S,
		onOpenToggle: import_react.useCallback(() => C((e) => !e), [C]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState(S),
			"data-disabled": g ? "" : void 0,
			...y,
			ref: d
		})
	});
});
Collapsible$1.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger", CollapsibleTrigger$1 = import_react.forwardRef((e, d) => {
	let { __scopeCollapsible: f, ...p } = e, h = useCollapsibleContext(TRIGGER_NAME, f);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		"aria-controls": h.open ? h.contentId : void 0,
		"aria-expanded": h.open || !1,
		"data-state": getState(h.open),
		"data-disabled": h.disabled ? "" : void 0,
		disabled: h.disabled,
		...p,
		ref: d,
		onClick: composeEventHandlers(e.onClick, h.onOpenToggle)
	});
});
CollapsibleTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent", CollapsibleContent$1 = import_react.forwardRef((e, d) => {
	let { forceMount: f, ...p } = e, m = useCollapsibleContext(CONTENT_NAME, e.__scopeCollapsible);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: f || m.open,
		children: ({ present: e }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContentImpl, {
			...p,
			ref: d,
			present: e
		})
	});
});
CollapsibleContent$1.displayName = CONTENT_NAME;
var CollapsibleContentImpl = import_react.forwardRef((e, d) => {
	let { __scopeCollapsible: p, present: h, children: _, ...v } = e, y = useCollapsibleContext(CONTENT_NAME, p), [b, x] = import_react.useState(h), S = import_react.useRef(null), C = useComposedRefs(d, S), w = import_react.useRef(0), T = w.current, E = import_react.useRef(0), D = E.current, O = y.open || b, k = import_react.useRef(O), A = import_react.useRef(void 0);
	return import_react.useEffect(() => {
		let e = requestAnimationFrame(() => k.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), useLayoutEffect2(() => {
		let e = S.current;
		if (e) {
			A.current = A.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let d = e.getBoundingClientRect();
			w.current = d.height, E.current = d.width, k.current || (e.style.transitionDuration = A.current.transitionDuration, e.style.animationName = A.current.animationName), x(h);
		}
	}, [y.open, h]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getState(y.open),
		"data-disabled": y.disabled ? "" : void 0,
		id: y.contentId,
		hidden: !O,
		...v,
		ref: C,
		style: {
			"--radix-collapsible-content-height": T ? `${T}px` : void 0,
			"--radix-collapsible-content-width": D ? `${D}px` : void 0,
			...e.style
		},
		children: O && _
	});
});
function getState(e) {
	return e ? "open" : "closed";
}
var Root = Collapsible$1, Trigger = CollapsibleTrigger$1, Content = CollapsibleContent$1;
function Collapsible({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "collapsible",
		...e
	});
}
function CollapsibleTrigger({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "collapsible-trigger",
		...e
	});
}
function CollapsibleContent({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		"data-slot": "collapsible-content",
		...e
	});
}
export { Root as a, Content as i, CollapsibleContent as n, Trigger as o, CollapsibleTrigger as r, createCollapsibleScope as s, Collapsible as t };
