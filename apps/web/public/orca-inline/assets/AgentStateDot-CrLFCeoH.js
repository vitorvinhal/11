import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Activity } from "./activity-CyJyRYHq.js";
import { t as CircleCheck } from "./circle-check-f8jEo_jQ.js";
import { t as CircleDashed } from "./circle-dashed-PoJjEZvD.js";
import { t as AgentQuestionIcon } from "./AgentQuestionIcon-DjFsmxm7.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), SPINNER_ANIMATION_NAME = "agent-spinner-rotate";
function syncSpinnerPhase(e) {
	if (e === null || typeof e.getAnimations != "function") return;
	let u = e.getAnimations().find((e) => "animationName" in e && e.animationName === SPINNER_ANIMATION_NAME);
	u !== void 0 && (u.startTime = 0);
}
function handleSpinnerAnimationStart(e) {
	e.animationName === SPINNER_ANIMATION_NAME && syncSpinnerPhase(e.currentTarget);
}
function AgentWorkingSpinner({ className: e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		onAnimationStart: handleSpinnerAnimationStart,
		"data-agent-spinner": "",
		className: cn("agent-working-spinner block rounded-full border-2 border-yellow-500 border-t-transparent motion-reduce:border-t-yellow-500", e)
	});
}
function StateIndicatorTooltip({ label: e, side: u = "top", children: d }) {
	return e === null ? d : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
		delayDuration: 200,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: d
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: u,
			sideOffset: 6,
			children: e
		})]
	});
}
function agentStateLabel(e) {
	switch (e) {
		case "working": return "Working";
		case "monitoring": return "Monitoring background tasks";
		case "blocked": return "Blocked";
		case "waiting": return "Waiting for input";
		case "interrupted": return "Interrupted";
		case "failed": return "Failed";
		case "done": return "Done";
		case "idle": return "Idle";
		case "unverifiable": return "No recent update";
		case "permission": return "Needs attention";
	}
}
const AgentStateDot = import_react.memo(function({ state: e, size: u = "sm", className: f, title: p, tooltipSide: m }) {
	let h = u === "md" ? "h-3 w-3" : "h-2.5 w-2.5", g = u === "md" ? "size-2" : "size-1.5", _ = u === "md" ? "size-3" : "size-2.5", v = p === null ? null : p ?? agentStateLabel(e), y;
	return y = e === "working" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex shrink-0 items-center justify-center", h, f),
		"aria-label": agentStateLabel(e),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentWorkingSpinner, { className: g })
	}) : e === "monitoring" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex shrink-0 items-center justify-center", h, f),
		"aria-label": agentStateLabel(e),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
			className: cn("text-yellow-500", _),
			"aria-hidden": "true"
		})
	}) : e === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex shrink-0 items-center justify-center", h, f),
		"aria-label": agentStateLabel(e),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
			className: cn("text-emerald-500", _),
			"aria-hidden": "true"
		})
	}) : e === "unverifiable" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex shrink-0 items-center justify-center", h, f),
		"aria-label": agentStateLabel(e),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDashed, {
			className: cn("text-amber-500", _),
			"aria-hidden": "true"
		})
	}) : e === "permission" || e === "waiting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex shrink-0 items-center justify-center", h, f),
		"aria-label": agentStateLabel(e),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentQuestionIcon, { className: _ })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex shrink-0 items-center justify-center", h, f),
		"aria-label": agentStateLabel(e),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block rounded-full", g, e === "blocked" || e === "interrupted" || e === "failed" ? "bg-red-500" : "bg-neutral-500/40") })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateIndicatorTooltip, {
		label: v,
		side: m,
		children: y
	});
});
export { AgentWorkingSpinner as i, agentStateLabel as n, StateIndicatorTooltip as r, AgentStateDot as t };
