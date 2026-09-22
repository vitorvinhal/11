import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Badge } from "./badge-D7sahA2a.js";
var GitCommitHorizontal = createLucideIcon("git-commit-horizontal", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "3",
		key: "1v7zrd"
	}],
	["line", {
		x1: "3",
		x2: "9",
		y1: "12",
		y2: "12",
		key: "1dyftd"
	}],
	["line", {
		x1: "15",
		x2: "21",
		y1: "12",
		y2: "12",
		key: "oup4p8"
	}]
]);
require_react();
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function DetachedHeadBadge({ display: e, label: c = "source-control", side: l = "right", className: u, tabIndex: d }) {
	let f = c === "sidebar" ? e.sidebarLabel : e.sourceControlLabel;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
			variant: "outline",
			"aria-label": e.tooltip,
			tabIndex: d,
			className: cn("h-[18px] shrink-0 gap-1 rounded px-1.5 text-[10px] font-medium leading-none", "border-[color:color-mix(in_srgb,var(--git-decoration-modified)_30%,transparent)] bg-[color:color-mix(in_srgb,var(--git-decoration-modified)_8%,transparent)] text-[color:var(--git-decoration-modified)]", u),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitCommitHorizontal, { className: "size-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 truncate",
				children: f
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: l,
		sideOffset: 8,
		children: e.tooltip
	})] });
}
export { GitCommitHorizontal as n, DetachedHeadBadge as t };
