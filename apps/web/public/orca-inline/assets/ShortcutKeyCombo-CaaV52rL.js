import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function KeyCap({ label: e, className: a }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex min-w-6 items-center justify-center rounded border border-border/80 bg-secondary/70 px-1.5 py-0.5 text-xs font-medium text-muted-foreground shadow-sm", a),
		children: e
	});
}
function ShortcutKeyCombo({ keys: e, className: a, separatorClassName: s, keyCapClassName: c, doubleTap: l = !1 }) {
	let u = navigator.userAgent.includes("Mac");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-1", a),
		title: l && e.length > 0 ? translate("auto.components.ShortcutKeyCombo.07eb4985a1", "Double-tap {{value0}}", { value0: e[0] }) : void 0,
		children: e.map((a, o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyCap, {
			label: a,
			className: c
		}), !u && !l && o < e.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: s ?? "mx-0.5 text-xs text-muted-foreground",
			children: "+"
		}) : null] }, `${a}-${o}`))
	});
}
export { ShortcutKeyCombo as t };
