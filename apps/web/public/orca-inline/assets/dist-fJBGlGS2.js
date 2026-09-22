import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function createContextScope(e, t = []) {
	let n = [];
	function a(t, a) {
		let o = import_react.createContext(a);
		o.displayName = t + "Context";
		let s = n.length;
		n = [...n, a];
		let c = (t) => {
			let { scope: n, children: a, ...c } = t, l = n?.[e]?.[s] || o, u = import_react.useMemo(() => c, Object.values(c));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.Provider, {
				value: u,
				children: a
			});
		};
		c.displayName = t + "Provider";
		function l(n, i, c = {}) {
			let { optional: l = !1 } = c, u = i?.[e]?.[s] || o, d = import_react.useContext(u);
			if (d) return d;
			if (a !== void 0) return a;
			if (!l) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [c, l];
	}
	let s = () => {
		let t = n.map((e) => import_react.createContext(e));
		return function(n) {
			let i = n?.[e] || t;
			return import_react.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: i
			} }), [n, i]);
		};
	};
	return s.scopeName = e, [a, composeContextScopes(s, ...t)];
}
function composeContextScopes(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let i = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
export { createContextScope as t };
