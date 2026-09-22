import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { a as createSlot, c as useComposedRefs } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
function createCollection(e) {
	let r = e + "CollectionProvider", [o, c] = createContextScope(r), [l, u] = o(r, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), d = (e) => {
		let { scope: r, children: i } = e, a = import_react.useRef(null), o = import_react.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l, {
			scope: r,
			itemMap: o,
			collectionRef: a,
			children: i
		});
	};
	d.displayName = r;
	let f = e + "CollectionSlot", p = createSlot(f), m = import_react.forwardRef((e, r) => {
		let { scope: i, children: o } = e;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p, {
			ref: useComposedRefs(r, u(f, i).collectionRef),
			children: o
		});
	});
	m.displayName = f;
	let h = e + "CollectionItemSlot", g = "data-radix-collection-item", _ = createSlot(h), v = import_react.forwardRef((e, r) => {
		let { scope: i, children: o, ...s } = e, c = import_react.useRef(null), l = useComposedRefs(r, c), d = u(h, i);
		return import_react.useEffect(() => (d.itemMap.set(c, {
			ref: c,
			...s
		}), () => void d.itemMap.delete(c))), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_, {
			[g]: "",
			ref: l,
			children: o
		});
	});
	v.displayName = h;
	function y(r) {
		let i = u(e + "CollectionConsumer", r);
		return import_react.useCallback(() => {
			let e = i.collectionRef.current;
			if (!e) return [];
			let r = Array.from(e.querySelectorAll(`[${g}]`));
			return Array.from(i.itemMap.values()).sort((e, i) => r.indexOf(e.ref.current) - r.indexOf(i.ref.current));
		}, [i.collectionRef, i.itemMap]);
	}
	return [
		{
			Provider: d,
			Slot: m,
			ItemSlot: v
		},
		y,
		c
	];
}
export { createCollection as t };
