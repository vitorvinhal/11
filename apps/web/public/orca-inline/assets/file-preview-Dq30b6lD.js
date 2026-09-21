import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { Cm as getRelativePathInsideRoot, G as absolutePathToFileUri, Gf as findSiblingGroupId, Pu as browserPageDocLocationsEqual, Rf as getRuntimeEnvironmentIdForWorktree, W as getClientCreationActionPolicy, _l as getConnectionIdForFileFromState, bb as ORCA_BROWSER_BLANK_URL, t as useAppStore, xm as basename, z as findPage } from "./store-C9f8FDJV.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { t as useShallow } from "./shallow-CDSK0iEX.js";
import { n as getConnectionIdForFile } from "./connection-context-2sxF2wah.js";
import { t as activateBrowserWorkspaceTab } from "./browser-workspace-tab-activation-BXci4-Vs.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
const REMOTE_FILE_BROWSER_UNSUPPORTED_MESSAGE = "Open in Orca Browser is only available for local files.";
function pairedOutsideWorktreeMessage() {
	return translate("auto.lib.file.preview.pairedOutsideWorktree", "Files outside the workspace can't be previewed on a paired server yet.");
}
function getWorkspaceFilePreviewPlan(t, w, T) {
	let O = getConnectionIdForFileFromState(t, w, T);
	if (O === void 0) return {
		status: "unsupported",
		message: REMOTE_FILE_BROWSER_UNSUPPORTED_MESSAGE,
		reason: "no-channel"
	};
	if (O !== null) return { status: "doc-preview" };
	if (getRuntimeEnvironmentIdForWorktree(t, w)) {
		let D = t.getKnownWorktreeById(w)?.path ?? null;
		return D && !getRelativePathInsideRoot(T, D) ? {
			status: "unsupported",
			message: pairedOutsideWorktreeMessage(),
			reason: "outside-worktree"
		} : { status: "doc-preview" };
	}
	let k = getClientCreationActionPolicy(t, w)["managed-browser"];
	return k.state === "enabled" ? {
		status: "browser-tab",
		url: absolutePathToFileUri(T),
		title: basename(T) || T
	} : {
		status: "unsupported",
		message: k.reason,
		reason: "no-channel"
	};
}
function canShowWorkspaceFileBrowserAction(t, w, T) {
	let E = getWorkspaceFilePreviewPlan(t, w, T);
	return E.status !== "unsupported" || E.reason === "outside-worktree";
}
function useWorkspaceFileBrowserActionPredicate(t) {
	return useAppStore(useShallow((w) => ({
		managedBrowser: t ? getClientCreationActionPolicy(w, t)["managed-browser"].state : null,
		runtimeEnvironmentId: t ? getRuntimeEnvironmentIdForWorktree(w, t) ?? null : null,
		folderWorkspaces: w.folderWorkspaces,
		projectGroups: w.projectGroups,
		repos: w.repos,
		worktreesByRepo: w.worktreesByRepo
	}))), (0, import_react.useCallback)((w) => t ? canShowWorkspaceFileBrowserAction(useAppStore.getState(), t, w) : !1, [t]);
}
function getWorkspaceFileBrowserOpenTarget(t) {
	return getConnectionIdForFile(t.worktreeId, t.filePath) === null ? {
		status: "ready",
		url: absolutePathToFileUri(t.filePath),
		title: basename(t.filePath) || t.filePath
	} : {
		status: "unsupported",
		reason: "remote-worktree",
		message: REMOTE_FILE_BROWSER_UNSUPPORTED_MESSAGE
	};
}
function openDocPreviewTab(t, w) {
	let T = {
		kind: "workspace-doc",
		worktreeId: w.worktreeId,
		filePath: w.filePath
	}, E = (t.browserTabsByWorktree[w.worktreeId] ?? []).find((t) => browserPageDocLocationsEqual(t.docLocation ?? null, T));
	if (E) {
		(!w.activate || !activateBrowserWorkspaceTab({
			worktreeId: w.worktreeId,
			workspaceId: E.id
		})) && t.setActiveBrowserTab(E.id);
		return;
	}
	t.createBrowserTab(w.worktreeId, ORCA_BROWSER_BLANK_URL, {
		docLocation: T,
		title: basename(w.filePath) || w.filePath,
		targetGroupId: w.targetGroupId,
		browserRuntimeEnvironmentId: null,
		activate: w.activate
	});
}
function openFileInBrowserTab(t) {
	let w = useAppStore.getState(), T = getWorkspaceFilePreviewPlan(w, t.worktreeId, t.filePath);
	return T.status === "unsupported" ? T : T.status === "doc-preview" ? (openDocPreviewTab(w, {
		...t,
		activate: !0
	}), T) : (w.createBrowserTab(t.worktreeId, T.url, {
		title: T.title,
		activate: !0
	}), T);
}
function findWorkspaceShowingDoc(t, w) {
	for (let T of t.browserTabsByWorktree[w.worktreeId] ?? []) {
		let E = (t.browserPagesByWorkspace[T.id] ?? []).find((t) => browserPageDocLocationsEqual(t.docLocation ?? null, w));
		if (E) return {
			workspaceId: T.id,
			pageId: E.id
		};
	}
	return null;
}
function convertBrowserPageToWorkspaceDoc(t, w, T) {
	let E = useAppStore.getState(), D = T?.leg !== void 0, O = D ? null : findWorkspaceShowingDoc(E, w);
	if (O) return E.activeWorktreeId !== w.worktreeId && E.setActiveWorktree(w.worktreeId), activateBrowserWorkspaceTab({
		worktreeId: w.worktreeId,
		workspaceId: O.workspaceId
	}) || E.setActiveBrowserTab(O.workspaceId), E.setActiveBrowserPage(O.workspaceId, O.pageId), "activated-existing";
	let k = findPage(E.browserPagesByWorkspace, t);
	if (!D && k && k.worktreeId !== w.worktreeId) {
		E.activeWorktreeId !== w.worktreeId && E.setActiveWorktree(w.worktreeId);
		let t = openFileInBrowserTab({
			filePath: w.filePath,
			worktreeId: w.worktreeId
		});
		return t.status === "unsupported" ? (toast.error(t.message), "failed") : "opened-in-owning-worktree";
	}
	return E.convertBrowserPage(t, {
		kind: "workspace-doc",
		docLocation: w
	}, T) ? "converted" : "failed";
}
function canPreviewLanguage(t) {
	return t === "html";
}
function openFilePreviewToSide(t) {
	if (!canPreviewLanguage(t.language)) return;
	let w = useAppStore.getState(), T = t.worktreeId, E = getWorkspaceFilePreviewPlan(w, T, t.filePath);
	if (E.status === "unsupported") {
		toast.error(E.message);
		return;
	}
	let D = t.sourceGroupId ?? w.activeGroupIdByWorktree[T] ?? w.groupsByWorktree[T]?.[0]?.id ?? null;
	if (!D) return;
	let k = w.layoutByWorktree[T] ?? null, A = (k ? findSiblingGroupId(k, D) : null) ?? (getRuntimeEnvironmentIdForWorktree(w, T) ? w.createEmptySplitGroup(T, D, "right", { activate: !1 }) : w.createEmptySplitGroup(T, D, "right"));
	if (A) {
		if (E.status === "doc-preview") {
			openDocPreviewTab(w, {
				filePath: t.filePath,
				worktreeId: T,
				targetGroupId: A,
				activate: !1
			});
			return;
		}
		w.createBrowserTab(T, E.url, {
			title: E.title,
			targetGroupId: A,
			activate: !0
		});
	}
}
export { getWorkspaceFilePreviewPlan as a, useWorkspaceFileBrowserActionPredicate as c, getWorkspaceFileBrowserOpenTarget as i, canShowWorkspaceFileBrowserAction as n, openFileInBrowserTab as o, convertBrowserPageToWorkspaceDoc as r, openFilePreviewToSide as s, canPreviewLanguage as t };
