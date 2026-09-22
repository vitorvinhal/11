import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./purify.es-Ddnop6vN.js";
import { t as MermaidBlock } from "./MermaidBlock-DUCPG0_k.js";
import { a as setWithLRU, i as scrollTopCache } from "./scroll-cache-uGotjuVq.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function MermaidViewer({ content: e, filePath: i }) {
	let o = (0, import_react.useRef)(null), l = useAppStore((e) => e.settings), u = l?.theme === "dark" || l?.theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches, d = `${i}:mermaid-diagram`;
	return (0, import_react.useLayoutEffect)(() => {
		let e = o.current;
		if (!e) return;
		let i = null, a = () => {
			i !== null && clearTimeout(i), i = setTimeout(() => {
				setWithLRU(scrollTopCache, d, e.scrollTop), i = null;
			}, 150);
		};
		return e.addEventListener("scroll", a, { passive: !0 }), () => {
			(e.scrollHeight > e.clientHeight || e.scrollTop > 0) && setWithLRU(scrollTopCache, d, e.scrollTop), i !== null && clearTimeout(i), e.removeEventListener("scroll", a);
		};
	}, [d]), (0, import_react.useLayoutEffect)(() => {
		let e = o.current, i = scrollTopCache.get(d);
		if (!e || i === void 0) return;
		let a = 0, s = 0, c = () => {
			let o = Math.max(0, e.scrollHeight - e.clientHeight);
			e.scrollTop = Math.min(i, o), !(Math.abs(e.scrollTop - i) <= 1 || o >= i) && (s += 1, s < 30 && (a = window.requestAnimationFrame(c)));
		};
		return c(), () => window.cancelAnimationFrame(a);
	}, [d, e]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: o,
		className: "mermaid-viewer h-full min-h-0 overflow-auto scrollbar-editor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mermaid-viewer-canvas",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MermaidBlock, {
				content: e.trim(),
				isDark: u,
				htmlLabels: !1
			})
		})
	});
}
export { MermaidViewer as default };
