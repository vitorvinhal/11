import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { Xp as preservedBranchCleanupKey, iw as Trash2, ov as getRepoIdFromWorktreeId, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { t as Checkbox } from "./checkbox-Daq-_tqE.js";
import { t as Label } from "./label-CA70r2No.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as forceDeletePreservedBranchBatch } from "./preserved-branch-batch-toast-C08Rnofp.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function selectionKey(e) {
	return preservedBranchCleanupKey(e);
}
function getRepositoryLabel(e) {
	let p = getRepoIdFromWorktreeId(e.worktreeId);
	return useAppStore.getState().repos?.find((e) => e.id === p)?.displayName || p;
}
function PreservedBranchBatchReviewDialog({ branches: e, open: p, onOpenChange: g, onForceDelete: v }) {
	let y = (0, import_react.useMemo)(() => e.filter((e) => !!e.expectedHead), [e]), b = (0, import_react.useMemo)(() => y.map((e) => selectionKey(e)), [y]), [x, S] = (0, import_react.useState)(() => new Set(b)), C = y.filter((e) => x.has(selectionKey(e))), w = C.length === y.length, T = C.length > 0 && !w, E = (e, p) => {
		S((m) => {
			let h = new Set(m);
			return p ? h.add(selectionKey(e)) : h.delete(selectionKey(e)), h;
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: p,
		onOpenChange: g,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm",
					children: translate("auto.components.sidebar.PreservedBranchBatchReviewDialog.c4bf8e7eaf", "Review kept branches")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.PreservedBranchBatchReviewDialog.f21976c9a8", "Select the local branches you want to force delete. Unselected branches stay in their repositories.") })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-72 overflow-y-auto scrollbar-sleek rounded-md border border-border/70 bg-muted/35 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-0 z-10 flex min-h-9 items-center justify-between gap-3 border-b border-border/70 bg-background/95 px-3 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
							htmlFor: "preserved-branch-select-all",
							className: "gap-2 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								id: "preserved-branch-select-all",
								checked: T ? "indeterminate" : w,
								onCheckedChange: (e) => S(e === !0 ? new Set(b) : /* @__PURE__ */ new Set())
							}), translate("auto.components.sidebar.PreservedBranchBatchReviewDialog.38c947f7c5", "Select all")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] tabular-nums text-muted-foreground",
							children: translate("auto.components.sidebar.PreservedBranchBatchReviewDialog.9602129d38", "{{value0}} of {{value1}} selected", {
								value0: C.length,
								value1: y.length
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "px-3",
						children: e.map((e, p) => {
							let h = e.expectedHead ? e : null, g = selectionKey(e), _ = `preserved-branch-${p}`;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid min-h-11 grid-cols-[1rem_minmax(0,1fr)_auto] items-center gap-2.5 border-b border-border/50 py-1.5 last:border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
										id: _,
										checked: h ? x.has(g) : !1,
										disabled: !h,
										onCheckedChange: (e) => {
											h && E(h, e === !0);
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
										htmlFor: _,
										className: "block min-w-0 cursor-pointer leading-snug",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block break-all font-mono font-medium text-foreground",
											children: e.branchName
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-0.5 block break-all text-[11px] text-muted-foreground",
											children: [getRepositoryLabel(e), e.expectedHead ? ` · ${e.expectedHead.slice(0, 7)}` : ""]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] whitespace-nowrap text-muted-foreground",
										children: h ? translate("auto.components.sidebar.PreservedBranchBatchReviewDialog.ee39e872d5", "May be unmerged") : translate("auto.components.sidebar.PreservedBranchBatchReviewDialog.676db406fd", "Head unavailable")
									})
								]
							}, g);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => g(!1),
					children: translate("auto.components.sidebar.PreservedBranchBatchReviewDialog.285e1e4882", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "destructive",
					disabled: C.length === 0,
					onClick: () => v(C),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), translate("auto.components.sidebar.PreservedBranchBatchReviewDialog.a0f9863597", "Force Delete {{count}} Branches", { count: C.length })]
				})] })
			]
		})
	});
}
function isPreservedBranchCleanup(e) {
	if (!e || typeof e != "object") return !1;
	let p = e;
	return typeof p.worktreeId == "string" && typeof p.branchName == "string" && (p.expectedHead === void 0 || typeof p.expectedHead == "string") && (p.hostId === void 0 || typeof p.hostId == "string") && (p.runtimeEnvironmentId === void 0 || typeof p.runtimeEnvironmentId == "string");
}
function getModalBranches(e) {
	return Array.isArray(e) ? e.filter(isPreservedBranchCleanup) : [];
}
function PreservedBranchBatchReviewModal() {
	let e = useAppStore((e) => e.activeModal), p = useAppStore((e) => e.modalData), m = useAppStore((e) => e.closeModal), h = (0, import_react.useMemo)(() => getModalBranches(p.branches), [p.branches]), g = e === "preserved-branch-review" && h.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreservedBranchBatchReviewDialog, {
		branches: h,
		open: g,
		onOpenChange: (e) => {
			e || m();
		},
		onForceDelete: (e) => {
			m(), forceDeletePreservedBranchBatch(e);
		}
	});
}
export { PreservedBranchBatchReviewModal as default };
