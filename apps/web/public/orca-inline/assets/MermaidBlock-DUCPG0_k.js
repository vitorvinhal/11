import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as purify } from "./purify.es-Ddnop6vN.js";
function getMermaidConfig(e, a = !1) {
	return {
		startOnLoad: !1,
		securityLevel: "strict",
		suppressErrorRendering: !0,
		theme: e ? "dark" : "default",
		htmlLabels: a
	};
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), mermaidModulePromise = null;
function loadMermaid() {
	return mermaidModulePromise ||= import("./mermaid.core-sQTh41Fa.js").then((e) => e.default), mermaidModulePromise;
}
var renderQueue = Promise.resolve();
function enqueueRender(e) {
	renderQueue = renderQueue.then(e, e).then(() => {
		renderQueue = Promise.resolve();
	});
}
function MermaidBlock({ content: e, isDark: a, htmlLabels: s = !1 }) {
	let u = (0, import_react.useId)().replace(/:/g, "_"), d = (0, import_react.useRef)(null), [f, p] = (0, import_react.useState)(null);
	return (0, import_react.useEffect)(() => {
		let o = !1;
		return enqueueRender(async () => {
			try {
				let c = await loadMermaid();
				if (o) return;
				c.initialize(getMermaidConfig(a, s));
				let { svg: l } = await c.render(`mermaid-${u}`, e);
				!o && d.current && (d.current.innerHTML = purify.sanitize(l, { USE_PROFILES: { svg: !0 } }), p(null));
			} catch (e) {
				o || (p(e instanceof Error ? e.message : "Invalid mermaid syntax"), document.getElementById(`d${`mermaid-${u}`}`)?.remove());
			}
		}), () => {
			o = !0;
		};
	}, [
		e,
		s,
		a,
		u
	]), f ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mermaid-block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mermaid-error",
			children: [
				translate("auto.components.editor.MermaidBlock.dcc132e691", "Diagram error:"),
				" ",
				f
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: e }) })]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mermaid-block",
		ref: d
	});
}
export { MermaidBlock as t };
