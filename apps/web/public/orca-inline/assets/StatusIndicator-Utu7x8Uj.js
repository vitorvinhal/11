import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Activity } from "./activity-CyJyRYHq.js";
import { t as AgentQuestionIcon } from "./AgentQuestionIcon-DjFsmxm7.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as AgentWorkingSpinner, r as StateIndicatorTooltip } from "./AgentStateDot-CrLFCeoH.js";
import { n as getWorktreeStatusLabel } from "./worktree-status-B377qdvd.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), AGENT_STATUS_TOOLTIP_STATUSES = new Set([
	"working",
	"monitoring",
	"permission",
	"interrupted",
	"done"
]), StatusIndicator_default = import_react.memo(function({ status: e, className: l, showTooltip: u = !0, tooltipSide: d, ...f }) {
	let p = u && AGENT_STATUS_TOOLTIP_STATUSES.has(e) ? getWorktreeStatusLabel(e) : null, m;
	return m = e === "working" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-3 w-3 shrink-0 items-center justify-center", l),
		...f,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentWorkingSpinner, { className: "size-2" })
	}) : e === "monitoring" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-3 w-3 shrink-0 items-center justify-center", l),
		...f,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
			className: "size-3 text-yellow-500",
			"aria-hidden": "true"
		})
	}) : e === "interrupted" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-3 w-3 shrink-0 items-center justify-center", l),
		...f,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block size-1.5 rounded-full bg-red-500" })
	}) : e === "permission" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-3 w-3 shrink-0 items-center justify-center", l),
		...f,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentQuestionIcon, { className: "size-3" })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-3 w-3 shrink-0 items-center justify-center", l),
		...f,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-2 rounded-full", e === "done" || e === "active" ? "bg-emerald-500" : "bg-neutral-500/40") })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateIndicatorTooltip, {
		label: p,
		side: d,
		children: m
	});
});
export { StatusIndicator_default as t };
