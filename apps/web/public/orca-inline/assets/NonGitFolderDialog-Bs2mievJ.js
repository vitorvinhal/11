import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import "./worktree-activation-u-wSAPlP.js";
import { Dg as isNativeChatTranscriptLocalReadable, Eg as markOnboardingProjectAdded, t as useAppStore } from "./store-C9f8FDJV.js";
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
import "./icons-CAdlcsWl.js";
import "./agent-catalog-Cgr0_vcs.js";
import "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import "./native-chat-launch-session-options-CUf2xfmH.js";
import { n as upsertAddedRepoWithProjectHostSetup, t as worktreeRefreshOptions } from "./add-repo-runtime-owner-kPGNrqS9.js";
import { n as revealOnboardingFolderWithAgentLaunch, t as resolveDismissedOnboardingFolderAgentLaunch } from "./onboarding-folder-agent-launch-CpJSqm8Y.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), NonGitFolderDialog_default = import_react.memo(function() {
	let e = useAppStore((e) => e.activeModal), h = useAppStore((e) => e.modalData), v = useAppStore((e) => e.closeModal), x = useAppStore((e) => e.addNonGitFolder), S = useAppStore((e) => e.runtimeEnvironments), C = e === "confirm-non-git-folder", w = typeof h.folderPath == "string" ? h.folderPath : "", T = typeof h.connectionId == "string" ? h.connectionId : "", E = typeof h.runtimeEnvironmentId == "string" ? h.runtimeEnvironmentId : "", D = typeof h.displayName == "string" ? h.displayName.trim() : "", O = E && (S.find((e) => e.id === E)?.name || E), k = T ? translate("auto.components.sidebar.NonGitFolderDialog.9a766f33ac", "This path was checked on the SSH host.") : O ? translate("auto.components.sidebar.NonGitFolderDialog.79fd02cf5f", "This path was checked on {{hostName}}.", { hostName: O }) : translate("auto.components.sidebar.NonGitFolderDialog.8851b77327", "This path was checked locally."), A = (0, import_react.useCallback)(() => {
		T && w ? (async () => {
			try {
				let e = useAppStore.getState(), h = await window.api.repos.addRemote({
					connectionId: T,
					remotePath: w,
					kind: "folder",
					...D ? { displayName: D } : {}
				});
				if ("error" in h) throw Error(h.error);
				let { repo: g } = upsertAddedRepoWithProjectHostSetup(h.repo, { sshConnectionId: T }), _ = useAppStore.getState(), v = e.repos.length > 0;
				await markOnboardingProjectAdded("addedFolder");
				let y = worktreeRefreshOptions(void 0, T);
				await _.fetchWorktrees(g.id, y);
				let b = useAppStore.getState().worktreesByRepo[g.id]?.find((e) => e.hostId === y.executionHostId);
				if (b) {
					let e = await window.api.onboarding.get().catch(() => null), h = resolveDismissedOnboardingFolderAgentLaunch({
						store: useAppStore.getState(),
						onboarding: e,
						hasExistingProject: v,
						executionHostId: y.executionHostId ?? T,
						nativeChatTranscriptIsLocalReadable: isNativeChatTranscriptLocalReadable(T)
					});
					await revealOnboardingFolderWithAgentLaunch({
						worktreeId: b.id,
						executionHostId: y.executionHostId,
						launch: h
					});
				}
			} catch (e) {
				toast.error(e instanceof Error ? e.message : translate("auto.components.sidebar.NonGitFolderDialog.c49fb13492", "Failed to add folder on this host"));
			}
		})() : w && x(w, {
			runtimeEnvironmentId: E || null,
			...D ? { displayName: D } : {}
		}), v();
	}, [
		x,
		v,
		D,
		w,
		T,
		E
	]), j = (0, import_react.useCallback)((e) => {
		e || v();
	}, [v]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: C,
		onOpenChange: j,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-sm sm:max-w-sm",
			showCloseButton: !1,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm",
					children: translate("auto.components.sidebar.NonGitFolderDialog.e52454b7f6", "Open as Folder")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
					className: "text-xs",
					children: [translate("auto.components.sidebar.NonGitFolderDialog.8fba4b8cbb", "This folder isn't a Git repository. You'll have the editor, terminal, and search, but Git-based features won't be available."), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block",
						children: k
					})]
				})] }),
				w && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-md border border-border/70 bg-muted/35 px-3 py-2 text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "break-all text-muted-foreground",
						children: w
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => j(!1),
					children: translate("auto.components.sidebar.NonGitFolderDialog.05b33a17a9", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: A,
					children: translate("auto.components.sidebar.NonGitFolderDialog.e52454b7f6", "Open as Folder")
				})] })
			]
		})
	});
});
export { NonGitFolderDialog_default as default };
