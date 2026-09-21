import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), LOG_EXCERPT_ERROR_LINE_PATTERN = /(?:##\[error\]|::error::|::error\b|\berror:|FAILED|exit code|ENOENT|EACCES|panic:|AssertionError)/i;
function getLogExcerptScrollTop(e, a) {
	let o = a.split(/\r?\n/), s = o.length - 1;
	for (let e = 0; e < o.length; e += 1) LOG_EXCERPT_ERROR_LINE_PATTERN.test(o[e] ?? "") && (s = e);
	let c = Number.parseFloat(getComputedStyle(e).lineHeight), l = s * (Number.isFinite(c) ? c : 16), u = Math.max(0, e.scrollHeight - e.clientHeight);
	return s < o.length - 1 ? Math.min(u, Math.max(0, l - e.clientHeight / 3)) : u;
}
function CopyButton({ text: e, title: a = "Copy comment" }) {
	let [o, s] = (0, import_react.useState)(!1), u = (0, import_react.useRef)(null), d = (0, import_react.useRef)(!1), f = (0, import_react.useCallback)(() => {
		u.current !== null && (window.clearTimeout(u.current), u.current = null);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref: (0, import_react.useCallback)((e) => {
			d.current = e !== null, e === null && f();
		}, [f]),
		className: "p-1 rounded hover:bg-accent text-muted-foreground/40 hover:text-foreground transition-colors shrink-0",
		title: a,
		onClick: (0, import_react.useCallback)((a) => {
			a.stopPropagation(), window.api.ui.writeClipboardText(e).then(() => {
				d.current && (f(), s(!0), u.current = window.setTimeout(() => {
					u.current = null, s(!1);
				}, 1500));
			});
		}, [f, e]),
		children: o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" })
	});
}
function CheckJobLogTail({ logTail: e, expanded: a = !1 }) {
	let c = (0, import_react.useRef)(null);
	return (0, import_react.useEffect)(() => {
		let a = c.current;
		a && (a.scrollTop = getLogExcerptScrollTop(a, e));
	}, [a, e]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3 min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1.5 flex min-w-0 items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",
				children: translate("auto.components.right.sidebar.checks.panel.content.d713f500b2", "Log excerpt")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyButton, {
				text: e,
				title: translate("auto.components.right.sidebar.checks.panel.content.679bf2093c", "Copy log excerpt")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			ref: c,
			className: cn("overflow-auto whitespace-pre-wrap rounded bg-muted/40 p-3 font-mono text-xs text-muted-foreground scrollbar-sleek", a ? "min-h-48 max-h-[min(50vh,32rem)]" : "max-h-72"),
			children: e
		})]
	});
}
export { CheckJobLogTail as t };
