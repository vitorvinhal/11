import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), SCRIPT_KIND_LABEL = {
	setup: "setup script",
	archive: "archive script",
	issueCommand: "issue command",
	vmRecipe: "VM recipe"
}, SCRIPT_KIND_TRIGGER = {
	setup: "when this workspace is created",
	archive: "when this workspace is removed",
	issueCommand: "when this workspace launches with a linked issue",
	vmRecipe: "before provisioning a VM"
}, OrcaYamlTrustDialog_default = import_react.memo(function() {
	let e = useAppStore((e) => e.activeModal), m = useAppStore((e) => e.modalData), h = useAppStore((e) => e.closeModal), g = useAppStore((e) => e.markOrcaHookScriptConfirmed), _ = useAppStore((e) => e.markOrcaHookRepoAlwaysTrusted), v = e === "confirm-orca-yaml-hooks", [y, b] = (0, import_react.useState)(() => ({
		isOpen: v,
		value: !1
	}));
	y.isOpen !== v && b({
		isOpen: v,
		value: !1
	});
	let x = y.isOpen === v ? y.value : !1, S = (e) => {
		b({
			isOpen: v,
			value: e
		});
	}, C = typeof m.repoId == "string" ? m.repoId : "", w = typeof m.repoName == "string" ? m.repoName : "this repository", T = m.scriptKind === "archive" ? "archive" : m.scriptKind === "issueCommand" ? "issueCommand" : m.scriptKind === "vmRecipe" ? "vmRecipe" : "setup", E = typeof m.scriptContent == "string" ? m.scriptContent : "", D = typeof m.contentHash == "string" ? m.contentHash : "", O = m.previouslyApproved === !0, k = typeof m.onResolve == "function" ? m.onResolve : null, A = (0, import_react.useCallback)((e) => {
		e === "run" && C && (x ? _(C) : D && g(C, T, D)), k?.(e), h();
	}, [
		x,
		h,
		D,
		_,
		g,
		k,
		C,
		T
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: v,
		onOpenChange: (0, import_react.useCallback)((e) => {
			e || A("skip");
		}, [A]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-md sm:max-w-md",
			showCloseButton: !1,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm",
					children: O ? translate("auto.components.sidebar.OrcaYamlTrustDialog.02b0ede5ad", "{{value0}}'s {{value1}} changed — run the new version?", {
						value0: w,
						value1: SCRIPT_KIND_LABEL[T]
					}) : translate("auto.components.sidebar.OrcaYamlTrustDialog.e4a51dc4b3", "Run {{value0}} from {{value1}}?", {
						value0: SCRIPT_KIND_LABEL[T],
						value1: w
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-xs",
					children: O ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: translate("auto.components.sidebar.OrcaYamlTrustDialog.79afc6772b", "orca.yaml") }),
						" ",
						translate("auto.components.sidebar.OrcaYamlTrustDialog.c55beddbf8", "changed since you last approved. Re-review before it runs"),
						" ",
						SCRIPT_KIND_TRIGGER[T],
						"."
					] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						translate("auto.components.sidebar.OrcaYamlTrustDialog.aa3ffb33fb", "This repository's"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: translate("auto.components.sidebar.OrcaYamlTrustDialog.79afc6772b", "orca.yaml") }),
						" ",
						translate("auto.components.sidebar.OrcaYamlTrustDialog.831f2cd9f0", "runs on your machine"),
						" ",
						SCRIPT_KIND_TRIGGER[T],
						translate("auto.components.sidebar.OrcaYamlTrustDialog.bf800b7e04", ". Only run if you trust"),
						" ",
						w,
						"."
					] })
				})] }),
				E && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-border/70 bg-muted/35 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
						children: O ? translate("auto.components.sidebar.OrcaYamlTrustDialog.9e52effffd", "New {{value0}} script", { value0: T }) : translate("auto.components.sidebar.OrcaYamlTrustDialog.95bf974a1a", "{{value0}} script", { value0: T })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "max-h-48 overflow-auto whitespace-pre-wrap break-all font-mono text-xs text-foreground scrollbar-sleek",
						children: E
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: `flex cursor-pointer items-center gap-2.5 rounded-md border px-3 py-2 transition-colors ${x ? "border-primary/60 bg-primary/5" : "border-border/70 bg-muted/25 hover:border-border hover:bg-muted/40"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "h-4 w-4 accent-primary",
						checked: x,
						onChange: (e) => S(e.target.checked)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-medium text-foreground",
						children: [
							translate("auto.components.sidebar.OrcaYamlTrustDialog.531689199b", "Always trust"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: translate("auto.components.sidebar.OrcaYamlTrustDialog.79afc6772b", "orca.yaml") }),
							" ",
							translate("auto.components.sidebar.OrcaYamlTrustDialog.c494b3ccb1", "in"),
							" ",
							w
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => A("skip"),
					children: translate("auto.components.sidebar.OrcaYamlTrustDialog.43b7bec4cd", "Don't run")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => A("run"),
					children: translate("auto.components.sidebar.OrcaYamlTrustDialog.f3e2b868fb", "Run hooks")
				})] })
			]
		})
	});
});
export { OrcaYamlTrustDialog_default as default };
