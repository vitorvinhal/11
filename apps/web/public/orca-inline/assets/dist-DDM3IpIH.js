import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
typeof window < "u" && window.document && window.document.createElement;
function composeEventHandlers(e, n, { checkForDefaultPrevented: r = !0 } = {}) {
	return function(i) {
		if (e?.(i), r === !1 || !i || !i.defaultPrevented) return n?.(i);
	};
}
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), useLayoutEffect2 = globalThis?.document ? import_react.useLayoutEffect : () => {}, useInsertionEffect = import_react.useInsertionEffect || useLayoutEffect2;
function useControllableState({ prop: e, defaultProp: n, onChange: r = () => {}, caller: a }) {
	let [o, s, l] = useUncontrolledState({
		defaultProp: n,
		onChange: r
	}), u = e !== void 0, d = u ? e : o;
	{
		let n = import_react.useRef(e !== void 0);
		import_react.useEffect(() => {
			let e = n.current;
			if (e !== u) {
				let n = e ? "controlled" : "uncontrolled", r = u ? "controlled" : "uncontrolled";
				console.warn(`${a} is changing from ${n} to ${r}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			n.current = u;
		}, [u, a]);
	}
	return [d, import_react.useCallback((n) => {
		if (u) {
			let r = isFunction(n) ? n(e) : n;
			r !== e && l.current?.(r);
		} else s(n);
	}, [
		u,
		e,
		s,
		l
	])];
}
function useUncontrolledState({ defaultProp: e, onChange: n }) {
	let [r, a] = import_react.useState(e), s = import_react.useRef(r), c = import_react.useRef(n);
	return useInsertionEffect(() => {
		c.current = n;
	}, [n]), import_react.useEffect(() => {
		s.current !== r && (c.current?.(r), s.current = r);
	}, [r, s]), [
		r,
		a,
		c
	];
}
function isFunction(e) {
	return typeof e == "function";
}
export { useLayoutEffect2 as n, composeEventHandlers as r, useControllableState as t };
