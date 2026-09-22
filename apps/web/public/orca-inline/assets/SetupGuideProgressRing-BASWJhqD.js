import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
var Earth = createLucideIcon("earth", [
	["path", {
		d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
		key: "1djwo0"
	}],
	["path", {
		d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
		key: "1tzkfa"
	}],
	["path", {
		d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
		key: "14pb5j"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function SetupGuideProgressRing({ done: e, total: s, className: c, sizeClassName: l = "size-5", strokeWidth: u = 2, tooltipLabel: d }) {
	let f = Math.max(s, 1), p = Math.min(Math.max(e, 0), f), m = `${p}/${f}`, h = 2 * Math.PI * 7, g = h * (1 - p / f);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("relative flex shrink-0 items-center justify-center text-muted-foreground", l, c),
			"aria-label": translate("auto.components.setup.guide.SetupGuideProgressRing.dac3a4724a", "{{value0}} of {{value1}} setup steps complete", {
				value0: p,
				value1: f
			}),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: cn("-rotate-90", l),
				viewBox: "0 0 20 20",
				"aria-hidden": !0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: 10,
					cy: 10,
					r: 7,
					fill: "none",
					stroke: "currentColor",
					strokeWidth: u,
					className: "opacity-25"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: 10,
					cy: 10,
					r: 7,
					fill: "none",
					stroke: "currentColor",
					strokeWidth: u,
					strokeLinecap: "round",
					strokeDasharray: h,
					strokeDashoffset: g
				})]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "top",
		sideOffset: 4,
		children: d ?? m
	})] });
}
export { Earth as n, SetupGuideProgressRing as t };
