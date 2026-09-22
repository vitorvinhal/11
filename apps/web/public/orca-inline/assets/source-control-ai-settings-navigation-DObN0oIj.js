import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as SlidersHorizontal } from "./sliders-horizontal-DgZM52tn.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as DropdownMenuItem, m as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DRu_J4_e.js";
import { i as getRepositorySourceControlAiSectionId } from "./repository-settings-targets-xJ_7l2op.js";
import { n as SourceControlAgentActionDialog } from "./source-control-launch-platform-Dg1MYT-v.js";
var Sparkle = createLucideIcon("sparkle", [["path", {
	d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
	key: "1s2grr"
}]]), import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function SourceControlFixSplitButton({ label: e, actionId: m, dialogTitle: g, dialogDescription: _, launchSource: v, contextUnavailableLabel: y, primaryTitle: b, primaryAriaLabel: x, chevronTitle: S, chevronAriaLabel: C, worktreeId: w, groupId: T, connectionId: E, repoId: D, launchPlatform: O, prompt: k, isLaunching: A, disabledReason: j, variant: M, size: N, iconClassName: P, primaryClassName: F, chevronClassName: I, savedAgentId: L, savedCommandInputTemplate: R, savedAgentArgs: z, onSaveAgentDefault: B, onOpenSettings: V, onFixWithDefaultAgent: H, onPromptDelivered: U }) {
	let [W, G] = (0, import_react.useState)(!1), K = !!(w && T && k && !j), q = M === "default" ? "border-primary-foreground/20" : "border-border";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex shrink-0 items-stretch",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: M,
			size: N,
			className: cn("rounded-r-none", F),
			disabled: A || !K,
			title: j ?? b,
			"aria-label": x,
			onClick: () => void H(),
			children: [A ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn(P, "animate-spin") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkle, { className: P }), e]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: M,
				size: N,
				className: cn("rounded-l-none border-l", q, I),
				disabled: A || !K,
				title: S,
				"aria-label": C,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: P })
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
		align: "end",
		className: "min-w-[210px] p-1",
		children: w && T && k && !j ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onSelect: () => G(!0),
			className: "gap-2 rounded-[7px] px-2 py-1.5 text-[12px] leading-5 font-medium",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4 text-muted-foreground" }), translate("auto.components.right.sidebar.SourceControl.f0a2dc9e46", "Customize launch...")]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
			disabled: !0,
			children: y
		})
	})] }), w && T && k ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceControlAgentActionDialog, {
		open: W,
		onOpenChange: G,
		actionId: m,
		title: g,
		description: _,
		baseCommandInput: k,
		worktreeId: w,
		groupId: T,
		connectionId: E,
		repoId: D,
		promptDelivery: "submit-after-ready",
		launchPlatform: O,
		launchSource: v,
		savedAgentId: L,
		savedCommandInputTemplate: R,
		savedAgentArgs: z,
		onSaveAgentDefault: B,
		onOpenSettings: V,
		onLaunched: U
	}) : null] });
}
function openSourceControlAiSettingsTarget({ activeRepo: e, openSettingsTarget: m, openSettingsPage: h }) {
	m(e ? {
		pane: "repo",
		repoId: e.id,
		sectionId: getRepositorySourceControlAiSectionId(e.id)
	} : {
		pane: "git",
		repoId: null,
		sectionId: "source-control-ai-settings"
	}), h();
}
export { SourceControlFixSplitButton as n, openSourceControlAiSettingsTarget as t };
