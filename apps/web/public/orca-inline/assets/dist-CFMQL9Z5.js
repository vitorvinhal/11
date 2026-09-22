import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { n as useLayoutEffect2 } from "./dist-DDM3IpIH.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useSize(e) {
	let [t, i] = import_react.useState(void 0);
	return useLayoutEffect2(() => {
		if (e) {
			i({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let n = t[0], r, a;
				if ("borderBoxSize" in n) {
					let e = n.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					r = t.inlineSize, a = t.blockSize;
				} else r = e.offsetWidth, a = e.offsetHeight;
				i({
					width: r,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		} else i(void 0);
	}, [e]), t;
}
export { useSize as t };
