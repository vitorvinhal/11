import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { C as mapWithConcurrency, iw as Trash2, ov as getRepoIdFromWorktreeId, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as toast } from "./dist-E3opdjfr.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), BRANCH_REPO_DELETE_CONCURRENCY = 4;
function PreservedBranchBatchToastBody({ branches: e, onReview: c }) {
	let u = e.filter((e) => e.expectedHead).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-[300px] max-w-[calc(100vw-96px)] flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "min-w-0 break-words text-sm leading-5 text-popover-foreground/80",
			children: translate("auto.components.sidebar.preserved.branch.batch.toast.a3cdd9d9e6", "Git kept {{count}} local branches because they may contain unmerged commits. Kept branches do not retain workspace folders; their commits remain in the repository. Orca may continue freeing workspace disk space in the background.", { count: e.length })
		}), u > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "destructive",
			size: "sm",
			className: "w-full",
			onClick: c,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), translate("auto.components.sidebar.preserved.branch.batch.toast.6310412304", "Review {{count}} Branches", { count: u })]
		}) : null]
	});
}
function showPreservedBranchBatchToast(e, s) {
	if (s.length === 0) return;
	let c = s.filter((e) => e.expectedHead).length, l = `preserved-branch-batch:${s[0].worktreeId}:${s.length}`, u = translate("auto.components.sidebar.preserved.branch.batch.toast.cea24c2b7d", "{{count}} workspaces removed", { count: e }), d = translate("auto.components.sidebar.preserved.branch.batch.toast.0e0379f24a", "{{count}} branches kept", { count: s.length });
	toast.warning(translate("auto.components.sidebar.preserved.branch.batch.toast.4cf75caab7", "{{value0}}, {{value1}}", {
		value0: u,
		value1: d
	}), {
		id: l,
		description: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreservedBranchBatchToastBody, {
			branches: s,
			onReview: () => {
				useAppStore.getState().openModal("preserved-branch-review", { branches: s }), toast.dismiss(l);
			}
		}),
		dismissible: !0,
		...c > 0 ? { duration: Infinity } : {}
	});
}
async function forceDeletePreservedBranchBatch(e) {
	if (e.length === 0) return;
	let d = `force-delete-branch-batch:${e[0].worktreeId}:${e.length}`;
	toast.loading(translate("auto.components.sidebar.preserved.branch.batch.toast.e61d78054f", "Deleting local branches: {{value0}}", { value0: e.length }), { id: d });
	let f = /* @__PURE__ */ new Map();
	for (let o of e) {
		let e = getRepoIdFromWorktreeId(o.worktreeId), s = f.get(e);
		s ? s.push(o) : f.set(e, [o]);
	}
	let p = (await mapWithConcurrency([...f.values()], BRANCH_REPO_DELETE_CONCURRENCY, async (e) => {
		let o = [];
		for (let s of e) o.push({
			branch: s,
			result: await useAppStore.getState().forceDeletePreservedBranch(s.worktreeId, s.branchName, s.expectedHead, {
				suppressToast: !0,
				...s.hostId ? { hostId: s.hostId } : {},
				...s.runtimeEnvironmentId ? { runtimeEnvironmentId: s.runtimeEnvironmentId } : {}
			})
		});
		return o;
	})).flat().filter((e) => !e.result.ok);
	if (p.length === 0) {
		toast.success(translate("auto.components.sidebar.preserved.branch.batch.toast.1e1a5f6763", "Local branches deleted: {{value0}}", { value0: e.length }), { id: d });
		return;
	}
	let m = e.length - p.length, h = p.map(({ branch: e, result: o }) => o.ok ? "" : `${e.branchName}: ${o.error}`).filter(Boolean).join("; "), g = p.map(({ branch: e }) => e);
	toast.error(translate("auto.components.sidebar.preserved.branch.batch.toast.43d9395605", "{{value0}} deleted, {{value1}} not deleted", {
		value0: m,
		value1: p.length
	}), {
		id: d,
		description: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-[300px] max-w-[calc(100vw-96px)] flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "min-w-0 break-words text-sm leading-5 text-popover-foreground/80",
				children: h
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "destructive",
				size: "sm",
				className: "w-full",
				onClick: () => {
					forceDeletePreservedBranchBatch(g);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), translate("auto.components.sidebar.preserved.branch.batch.toast.d42f1f14e0", "Retry {{count}} Branches", { count: g.length })]
			})]
		}),
		duration: Infinity,
		dismissible: !0
	});
}
export { showPreservedBranchBatchToast as n, forceDeletePreservedBranchBatch as t };
