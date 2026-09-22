import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import "./worktree-activation-u-wSAPlP.js";
import { t as FolderPlus } from "./folder-plus-BqtRacbk.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { Ag as isGitRepoKind, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import "./window-park-visibility-BBcurIcE.js";
import "./selectors-Cdg4hUQI.js";
import "./web-runtime-session-CeAC5QPx.js";
import "./agent-paste-draft-Ddp-k6QZ.js";
import "./agent-process-recognition-BUFJTuDF.js";
import "./native-chat-session-option-cache-DOY0fjiI.js";
import "./gitlab-links-Di3ozbga.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./localized-catalog-Dsz6wk5E.js";
import "./connection-context-2sxF2wah.js";
import "./web-session-tabs-sync-BfOF1RHT.js";
import "./pane-agent-owner-Ci26i0GA.js";
import { t as finishProjectAddWithDefaultCheckout } from "./project-added-default-checkout-BsdXXdXX.js";
import { n as upsertAddedRepoWithProjectHostSetup, t as worktreeRefreshOptions } from "./add-repo-runtime-owner-kPGNrqS9.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), NON_GIT_REPO_ERROR = "Not a valid git repository", AddProjectFromFolderDialog_default = import_react.memo(function() {
	let e = useAppStore((e) => e.activeModal), v = useAppStore((e) => e.modalData), S = useAppStore((e) => e.closeModal), C = useAppStore((e) => e.openModal), w = useAppStore((e) => e.addRepoPath), T = useAppStore((e) => e.fetchWorktrees), E = useAppStore((e) => e.setHideDefaultBranchWorkspace), [D, O] = (0, import_react.useState)(!1), [k, A] = (0, import_react.useState)(null), j = useMountedRef(), M = (0, import_react.useRef)(0), N = e === "confirm-add-project-from-folder", [P, F] = (0, import_react.useState)(N), I = typeof v.folderPath == "string" ? v.folderPath : "", L = typeof v.connectionId == "string" ? v.connectionId : "", R = typeof v.runtimeEnvironmentId == "string" ? v.runtimeEnvironmentId : null;
	N !== P && (F(N), N || (M.current++, O(!1), A(null)));
	let z = (0, import_react.useCallback)(() => {
		S(), C("confirm-non-git-folder", {
			folderPath: I,
			...L ? { connectionId: L } : {},
			...R ? { runtimeEnvironmentId: R } : {}
		});
	}, [
		S,
		L,
		I,
		C,
		R
	]), B = (0, import_react.useCallback)(async () => {
		if (!I || D) return;
		let e = ++M.current;
		O(!0), A(null);
		try {
			let v;
			if (L) {
				let b = await window.api.repos.addRemote({
					connectionId: L,
					remotePath: I
				});
				if ("error" in b) throw Error(b.error);
				let x = upsertAddedRepoWithProjectHostSetup(b.repo, { sshConnectionId: L });
				if (v = x.repo, x.alreadyPresent && useAppStore.getState().clearOrcaHookTrustForRepo(v.id), !j.current || e !== M.current) return;
				toast.success(translate("auto.components.sidebar.AddProjectFromFolderDialog.e643b30398", "Project added on SSH host"), { description: v.displayName });
			} else v = await w(I, "git", { runtimeEnvironmentId: R });
			if (!j.current || e !== M.current || !v) return;
			if (!isGitRepoKind(v)) {
				z();
				return;
			}
			let b = worktreeRefreshOptions(R, L);
			if (await T(v.id, b), !j.current || e !== M.current) return;
			await finishProjectAddWithDefaultCheckout({
				repoId: v.id,
				source: L ? "ssh_remote_path" : R ? "runtime_server_path" : "local_folder_picker",
				selectedPath: I,
				executionHostId: b.executionHostId,
				closeModal: S,
				setHideDefaultBranchWorkspace: E
			});
		} catch (v) {
			let y = v instanceof Error ? v.message : String(v);
			if (y.includes(NON_GIT_REPO_ERROR)) {
				j.current && e === M.current && z();
				return;
			}
			j.current && e === M.current && A(y);
		} finally {
			j.current && e === M.current && O(!1);
		}
	}, [
		w,
		S,
		L,
		T,
		I,
		D,
		j,
		z,
		R,
		E
	]), V = (0, import_react.useCallback)((e) => {
		e || (M.current++, S());
	}, [S]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: N,
		onOpenChange: V,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddProjectFromFolderDialog.7d1f51678c", "Add Project") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddProjectFromFolderDialog.046751dbfb", "Add this folder as a separate Orca project.") })] }),
				I && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-md border border-border/70 bg-muted/35 px-3 py-2 text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "break-all font-mono text-muted-foreground",
						children: I
					})
				}),
				k && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive",
					children: k
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => V(!1),
					disabled: D,
					children: translate("auto.components.sidebar.AddProjectFromFolderDialog.7726a16374", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: B,
					disabled: !I || D,
					children: [D ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, { className: "size-4" }), translate("auto.components.sidebar.AddProjectFromFolderDialog.7d1f51678c", "Add Project")]
				})] })
			]
		})
	});
});
export { AddProjectFromFolderDialog_default as default };
