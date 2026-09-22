import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as ORCA_RENDERER_SHUTDOWN_CHECKPOINT_FAILED_EVENT, f as formatShutdownCheckpointFailureReason, l as ORCA_RENDERER_UNLOAD_PREVENTED_EVENT, p as publishShutdownCheckpointFailureReason, u as clearShutdownCheckpointFailureReason } from "./lazy-with-retry--hTe1cP7.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { C as rememberPrelaunchedSimulatorSession, E as shutdownManagedSimulatorIfNoPane, F as onBrowserRemoteViewerChange, H as onBrowserDriverChange, K as useBrowserMobileDriverForAny, L as useBrowserRemoteViewerForAny, O as isBrowserAutomationVisible, P as isBrowserPageRemotelyViewed, S as isManualSimulatorLaunchPending, V as isBrowserPageMobileDriven, _ as beginManualSimulatorLaunch, b as dispatchManualSimulatorLaunchStarted, i as clearBrowserAddressBarEditSession, j as useBrowserAutomationVisibilityForAny, k as onBrowserAutomationVisibilityChange, t as clearBrowserPageDeferredNavigation, w as cancelPendingSimulatorPaneShutdown, x as finishManualSimulatorLaunch, y as dispatchManualSimulatorLaunchFailed } from "./browser-page-deferred-navigation-BJhtePd9.js";
import { t as Keyboard } from "./keyboard-CGp7JiNG.js";
import { $f as isUnifiedTabOwnedByWorktree, A as normalizeWorkspaceDocHistoryEntries, Bm as toVisibleTabType, Gv as callRuntimeRpc, H as assertClientCreationActionAvailable, Io as getActiveTabNavOrder, JS as LOCAL_EXECUTION_HOST_ID, Jf as getActiveExecutionHostIdForWorktree, Kf as findAmbiguousWorktreeIds, M as normalizeBrowserHistoryEntries, O_ as parseAppSshPtyId, Qu as destroyWorkspaceWebviews, Rf as getRuntimeEnvironmentIdForWorktree, Sl as pruneClosedTerminalTabTombstones, Wf as sanitizeRecentTabIds, Xg as collectPendingClientHostedBrowserCloses, sp as isExecutionHostAliasForWorktree, t as useAppStore, tC as isRuntimeOwnedSshTargetId, tg as folderWorkspaceToWorktree } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { C as getKeybindingDefinition, a as formatKeybindingList, p as isKeybindingPotentialTerminalConflict, s as keybindingMatchesAction, u as getEffectiveKeybindingsForAction } from "./keybindings-1v53ESY9.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { v as recordRendererCrashBreadcrumb } from "./pane-metric-options-deferral-Bz211kas.js";
import { A as isEmptyFloatingWorkspacePanelVisible, L as switchFloatingWorkspaceTab, M as isFloatingWorkspacePanelFocused, W as resolveBrowserWorkspaceOwner, Y as pruneLocalTerminalScrollbackBuffers, dt as getActiveEntityIdForTabType, ft as getNextTabAcrossAllTypes, pt as getNextTabWithinActiveType } from "./terminal-provider-snapshot-capability-BX-qikE7.js";
import { t as useShallow } from "./shallow-CDSK0iEX.js";
import { l as resolvePinnedTabLabel, s as guardPinnedTabClose, t as closeTerminalTab } from "./terminal-tab-actions-CMBYTSo0.js";
import { on as isWebRuntimeSessionActive, u as closeWebRuntimeSessionTab } from "./web-runtime-session-CeAC5QPx.js";
import { o as reuseArrayIfEqual } from "./worktree-agent-row-selectors-CkGQD3YA.js";
import { m as requestEditorFileClose } from "./editor-autosave-DihR6gbk.js";
import { c as TOGGLE_FLOATING_TERMINAL_EVENT } from "./codex-session-restart-CJCGlfm-.js";
function sameBucketRecords(f, V, H) {
	if (f === V) return !0;
	let U = Object.keys(V);
	if (U.length !== Object.keys(f).length) return !1;
	for (let W of U) {
		let U = V[W], G = f[W];
		if (G !== U) {
			if (!G || !U || G.length !== U.length) return !1;
			for (let f = 0; f < U.length; f += 1) {
				let V = G[f], W = U[f];
				if (V === void 0 || W === void 0 || !H(V, W)) return !1;
			}
		}
	}
	return !0;
}
function resolveCycleContext() {
	let f = useAppStore.getState(), V = f.activeWorktreeId;
	if (!V) return null;
	let H = getActiveTabNavOrder(f, V);
	if (H.length <= 1) return null;
	let U = f.activeGroupIdByWorktree[V], W = U ? (f.groupsByWorktree[V] ?? []).find((f) => f.id === U) : void 0;
	return {
		store: f,
		worktreeId: V,
		allTabIds: H,
		groupTabIdInNav: W?.activeTabId && H.some((f) => f.tabId === W.activeTabId) ? W.activeTabId : null
	};
}
function activateCyclableTab(f, V) {
	V.type === "terminal" ? (f.setActiveTab(V.id), V.tabId && f.activateTab?.(V.tabId), f.setActiveTabType("terminal")) : V.type === "browser" ? (f.setActiveBrowserTab(V.id), V.tabId && f.activateTab?.(V.tabId), f.setActiveTabType("browser")) : V.type === "simulator" ? (f.setActiveTab(V.tabId ?? V.id), V.tabId && f.activateTab?.(V.tabId), f.setActiveTabType("simulator")) : V.type === "agent-session" ? (V.tabId && f.activateTab?.(V.tabId), f.setActiveTabType("agent-session")) : (f.setActiveFile(V.id), V.tabId && f.activateTab?.(V.tabId), f.setActiveTabType("editor"));
}
function handleSwitchTab(f) {
	let V = resolveCycleContext();
	if (!V) return !1;
	let { store: H, allTabIds: U, groupTabIdInNav: W } = V, G = getNextTabWithinActiveType({
		tabs: U,
		activeTabType: H.activeTabType,
		activeTabId: H.activeTabId,
		activeFileId: H.activeFileId,
		activeBrowserTabId: H.activeBrowserTabId,
		activeGroupTabId: W,
		direction: f
	});
	return G ? (activateCyclableTab(H, G), !0) : !1;
}
function handleSwitchTabAcrossAllTypes(f) {
	let V = resolveCycleContext();
	if (!V) return !1;
	let { store: H, allTabIds: U, groupTabIdInNav: W } = V, G = getNextTabAcrossAllTypes({
		tabs: U,
		activeTabType: H.activeTabType,
		activeTabId: H.activeTabId,
		activeFileId: H.activeFileId,
		activeBrowserTabId: H.activeBrowserTabId,
		activeGroupTabId: W,
		direction: f
	});
	return G ? (activateCyclableTab(H, G), !0) : !1;
}
function getWorktreeTerminalTabOrder(f, V) {
	let H = f.tabsByWorktree?.[V] ?? [], U = (f.unifiedTabsByWorktree?.[V] ?? []).filter((f) => f.contentType === "terminal"), W = f.activeGroupIdByWorktree?.[V], G = /* @__PURE__ */ new Map();
	for (let f of U) {
		let V = G.get(f.entityId);
		V ? V.push(f) : G.set(f.entityId, [f]);
	}
	let K = (f) => {
		let V = G.get(f) ?? [], H = W ? V.filter((f) => f.groupId === W) : [];
		return H.length === 1 ? H[0].id : V.length === 1 ? V[0].id : void 0;
	}, q = [], J = /* @__PURE__ */ new Set();
	for (let f of H) {
		if (J.has(f.id)) continue;
		J.add(f.id);
		let V = K(f.id);
		q.push({
			type: "terminal",
			id: f.id,
			...V ? { tabId: V } : {}
		});
	}
	for (let f of U) J.has(f.entityId) || (J.add(f.entityId), q.push({
		type: "terminal",
		id: f.entityId,
		tabId: f.id
	}));
	return q;
}
function shouldUseWorktreeTerminalFallback(f, V, H, U, W) {
	if (U.length >= 2 || W.length <= U.length) return !1;
	let G = f.groupsByWorktree?.[V] ?? [], K = f.activeGroupIdByWorktree?.[V], q = K ? G.find((f) => f.id === K) : void 0;
	if (!q) return !0;
	let J = (f.unifiedTabsByWorktree?.[V] ?? []).filter((f) => f.contentType === "terminal");
	if (J.length === 0) return !0;
	let Y = new Set(J.map((f) => f.entityId));
	if (W.some((f) => !Y.has(f.id))) return !0;
	let X = H.some((f) => f.type !== "terminal"), Z = J.filter((f) => f.groupId === q.id), Q = new Set(U.map((f) => f.id));
	if (Z.some((f) => !Q.has(f.entityId))) return !0;
	if (U.length === 0 && X) return Z.length > 0;
	let $ = new Set(q.tabOrder ?? []);
	if (Z.some((f) => !$.has(f.id))) return !0;
	if (G.length <= 1) {
		let f = new Set(Z.map((f) => f.entityId));
		if (W.some((V) => !f.has(V.id))) return !0;
	}
	if (q.activeTabId) {
		let H = (f.unifiedTabsByWorktree?.[V] ?? []).find((f) => f.id === q.activeTabId);
		if (!H || H.groupId !== q.id) return !0;
	}
	return !1;
}
function handleSwitchRecentTab() {
	let f = resolveCycleContext();
	if (!f) return !1;
	let { store: V, worktreeId: H, allTabIds: U, groupTabIdInNav: W } = f;
	if (!W) return !1;
	let G = V.activeGroupIdByWorktree[H], K = G ? (V.groupsByWorktree[H] ?? []).find((f) => f.id === G) : void 0;
	if (!K?.recentTabIds) return !1;
	let q = U.flatMap((f) => f.tabId ? [f.tabId] : []), J = sanitizeRecentTabIds(K.recentTabIds, q), Y = J.lastIndexOf(W);
	if (Y <= 0) return !1;
	let X = J[Y - 1], Z = U.find((f) => f.tabId === X);
	return Z ? (activateCyclableTab(V, Z), !0) : !1;
}
function handleSwitchTerminalTab(f) {
	let V = useAppStore.getState(), H = V.activeWorktreeId;
	if (!H) return !1;
	let U = getActiveTabNavOrder(V, H), W = U.filter((f) => f.type === "terminal"), G = getWorktreeTerminalTabOrder(V, H), K = shouldUseWorktreeTerminalFallback(V, H, U, W, G) ? G : W;
	if (K.length === 0) return !1;
	let q = V.getActiveTab(H), J = getActiveEntityIdForTabType(V.activeTabType, V.activeTabId, V.activeFileId, V.activeBrowserTabId, q?.contentType === "agent-session" ? q.entityId : null), Y = K.findIndex((f) => f.id === J);
	if (K.length === 1 && Y === 0) return !1;
	let X = K[((Y === -1 && f > 0 ? -1 : Y === -1 ? 0 : Y) + f + K.length) % K.length];
	return X.id === V.activeTabId && V.activeTabType === "terminal" ? !1 : (V.setActiveTab(X.id), V.setActiveTabType("terminal"), !0);
}
function matchesRecentTabSwitcherChord(f, V, H, U = {}) {
	let W = !!(f.control ?? f.ctrlKey), G = !!(f.meta ?? f.metaKey), K = !!(f.alt ?? f.altKey);
	return f.code !== "Tab" || !W || G || K ? !1 : keybindingMatchesAction("tab.previousRecent", {
		key: f.key,
		code: f.code,
		alt: K,
		meta: G,
		control: W,
		shift: !1,
		altKey: K,
		metaKey: G,
		ctrlKey: W,
		shiftKey: !1
	}, V, H, U);
}
function isControlKey(f) {
	return f.code === "ControlLeft" || f.code === "ControlRight" || f.code === "Control" || f.key === "Control";
}
function isTabKey(f) {
	return f.code === "Tab" || f.key === "Tab";
}
function isRecentTabSwitcherCommitRelease(f) {
	if (f.type !== "keyUp" && f.type !== "keyup") return !1;
	if (isControlKey(f)) return !0;
	let V = f.control ?? f.ctrlKey;
	return isTabKey(f) && V === !1;
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function useReusedArrayIdentity(f) {
	let V = (0, import_react.useRef)(f), H = reuseArrayIfEqual(V.current, f);
	return (0, import_react.useEffect)(() => {
		V.current = H;
	}, [H]), H;
}
var NO_BROWSER_PAGE_IDS = [];
function collectBrowserPageIds(f) {
	return !f || f.length === 0 ? NO_BROWSER_PAGE_IDS : f.flatMap((f) => f.pageIds && f.pageIds.length > 0 ? f.pageIds : [f.activePageId ?? f.id]);
}
var NO_BROWSER_TABS_BY_WORKTREE = {};
function useWorktreeBrowserPageIds(f) {
	return useAppStore(useShallow((V) => collectBrowserPageIds(V.browserTabsByWorktree[f])));
}
function useBrowserGuestPaintRetention(f) {
	let V = useBrowserAutomationVisibilityForAny(f), H = useBrowserMobileDriverForAny(f), U = useBrowserRemoteViewerForAny(f);
	return V || H || U;
}
function browserPageNeedsPaintRetention(f) {
	return isBrowserAutomationVisible(f) || isBrowserPageMobileDriven(f) || isBrowserPageRemotelyViewed(f);
}
function onBrowserGuestPaintRetentionChange(f) {
	let V = [
		onBrowserAutomationVisibilityChange(f),
		onBrowserDriverChange(f),
		onBrowserRemoteViewerChange(f)
	];
	return () => {
		for (let f of V) f();
	};
}
function useAnyBrowserGuestNeedsPaint(f) {
	let V = useAppStore((V) => f ? V.browserTabsByWorktree : NO_BROWSER_TABS_BY_WORKTREE);
	return useBrowserGuestPaintRetention((0, import_react.useMemo)(() => f ? Object.values(V).flatMap((f) => collectBrowserPageIds(f)) : NO_BROWSER_PAGE_IDS, [V, f]));
}
function prunePersistedLayoutForGroups(f, V) {
	if (f.type === "leaf") return V.has(f.groupId) ? f : null;
	let H = prunePersistedLayoutForGroups(f.first, V), U = prunePersistedLayoutForGroups(f.second, V);
	return H === null ? U : U === null ? H : {
		...f,
		first: H,
		second: U
	};
}
function buildPersistedGroupsForWorktree(f, V) {
	let H = new Set(f.map((f) => f.id)), U = /* @__PURE__ */ new Map();
	for (let V of f) {
		let f = U.get(V.groupId) ?? [];
		f.push(V.id), U.set(V.groupId, f);
	}
	return V.map((f) => {
		let V = new Set([...f.tabOrder.filter((f) => H.has(f)), ...U.get(f.id) ?? []]), W = Array.from(V), G = f.activeTabId && V.has(f.activeTabId) ? f.activeTabId : null;
		return {
			...f,
			activeTabId: G,
			tabOrder: W,
			recentTabIds: f.recentTabIds?.filter((f) => V.has(f))
		};
	}).filter((f) => f.tabOrder.length > 0);
}
function buildPersistedUnifiedTabSessionData(f) {
	let V = {}, H = {}, U = {}, W = {}, G = f.unifiedTabsByWorktree ?? {}, K = f.groupsByWorktree ?? {}, q = f.layoutByWorktree ?? {}, J = f.activeGroupIdByWorktree ?? {}, Y = new Set([
		...Object.keys(G),
		...Object.keys(K),
		...Object.keys(q)
	]);
	for (let f of Y) {
		let Y = G[f] ?? [];
		if (Y.length === 0) continue;
		let X = buildPersistedGroupsForWorktree(Y, K[f] ?? []);
		if (X.length === 0) continue;
		let Z = new Set(X.map((f) => f.id)), Q = Y.filter((f) => Z.has(f.groupId));
		if (Q.length === 0) continue;
		V[f] = Q, H[f] = X;
		let $ = J[f];
		W[f] = $ && Z.has($) ? $ : X[0].id, U[f] = (q[f] ? prunePersistedLayoutForGroups(q[f], Z) : null) ?? {
			type: "leaf",
			groupId: X[0].id
		};
	}
	return {
		unifiedTabs: V,
		tabGroups: H,
		tabGroupLayouts: U,
		activeGroupIdByWorktree: W
	};
}
function buildLastVisitedAtByWorktreeId(f) {
	return f.lastVisitedAtByWorktreeId && Object.keys(f.lastVisitedAtByWorktreeId).length > 0 ? f.lastVisitedAtByWorktreeId : void 0;
}
function buildSleepingAgentSessionData(f) {
	let V = f.sleepingAgentSessionsByPaneKey;
	return V && Object.keys(V).length > 0 ? { sleepingAgentSessionsByPaneKey: V } : {};
}
function buildPersistedClosedTerminalTabTombstones(f) {
	let V = pruneClosedTerminalTabTombstones(f, Date.now());
	return Object.keys(V).length > 0 ? V : void 0;
}
function buildActiveConnectionIdsAtShutdown(f, V) {
	let H = new Set(Array.from(f.sshConnectionStates.entries()).filter(([f, V]) => V.status === "connected" && !isRuntimeOwnedSshTargetId(f)).map(([f]) => f));
	for (let U of Object.values(V ?? {})) {
		let V = parseAppSshPtyId(U)?.connectionId;
		if (!V || isRuntimeOwnedSshTargetId(V)) continue;
		let W = f.sshConnectionStates.get(V)?.status;
		W && W !== "disconnected" && W !== "auth-failed" && H.add(V);
	}
	return H.size > 0 ? Array.from(H) : void 0;
}
function withoutStagedBrowserTabs(f) {
	let V = f.remoteBrowserPageHandlesByPageId ?? {}, H = /* @__PURE__ */ new Set();
	for (let [U, W] of Object.entries(f.browserPagesByWorkspace)) W.some((f) => V[f.id]?.staged === !0) && H.add(U);
	if (H.size === 0) return f;
	let U = { ...f.browserPagesByWorkspace };
	for (let f of H) delete U[f];
	return {
		...f,
		browserTabsByWorktree: Object.fromEntries(Object.entries(f.browserTabsByWorktree).map(([f, V]) => [f, V.filter((f) => !H.has(f.id))])),
		browserPagesByWorkspace: U,
		activeBrowserTabIdByWorktree: Object.fromEntries(Object.entries(f.activeBrowserTabIdByWorktree).map(([f, V]) => [f, V && H.has(V) ? null : V])),
		unifiedTabsByWorktree: Object.fromEntries(Object.entries(f.unifiedTabsByWorktree).map(([f, V]) => [f, V.filter((f) => !(f.contentType === "browser" && H.has(f.entityId)))]))
	};
}
function buildBrowserSessionData(f, V, H, U) {
	return {
		browserTabsByWorktree: buildPersistedBrowserTabsByWorktree(f),
		browserPagesByWorkspace: buildPersistedBrowserPagesByWorkspace(V, U),
		activeBrowserTabIdByWorktree: H
	};
}
function buildPersistedBrowserTabsByWorktree(f) {
	return Object.fromEntries(Object.entries(f).map(([f, V]) => [f, V.map((f) => ({
		...f,
		loading: !1
	}))]));
}
function buildPersistedBrowserPagesByWorkspace(f, V) {
	return Object.fromEntries(Object.entries(f).map(([f, H]) => [f, H.map((f) => ({
		...f,
		loading: !1,
		...persistedRemoteBrowserPageIdentity(V[f.id])
	}))]));
}
function persistedRemoteBrowserPageIdentity(f) {
	if (!f) return {};
	let V = f.placement?.kind === "client" || f.restoredClientHosted === !0;
	return {
		remoteBrowserPageId: f.remotePageId,
		...V ? { remoteBrowserPageClientHosted: !0 } : {}
	};
}
function shouldPersistWorkspaceSession(f) {
	return f.workspaceSessionReady && f.hydrationSucceeded;
}
const SESSION_RELEVANT_FIELDS = /* @__PURE__ */ "activeRepoId.activeWorkspaceKey.activeWorkspaceExecutionHostId.activeWorktreeId.activeTabId.tabsByWorktree.ptyIdsByTabId.terminalLayoutsByTabId.localOnlyScrollbackByTabId.activeTabIdByWorktree.openFiles.editorDrafts.markdownFrontmatterVisible.activeFileIdByWorktree.activeTabTypeByWorktree.browserTabsByWorktree.browserPagesByWorkspace.activeBrowserTabIdByWorktree.browserUrlHistory.workspaceDocHistory.remoteBrowserPageHandlesByPageId.unifiedTabsByWorktree.groupsByWorktree.layoutByWorktree.activeGroupIdByWorktree.sshConnectionStates.repos.worktreesByRepo.lastKnownRelayPtyIdByTabId.lastVisitedAtByWorktreeId.defaultTerminalTabsAppliedByWorktreeId.closedTerminalTabTombstonesByTabId.sleepingAgentSessionsByPaneKey.clientHostedBrowserCloseIntentsByEnvironment.pendingReconnectPtyIdByTabId.deferredSshSessionIdsByTabId".split(".");
function buildEditorSessionData(f, V, H, U, W) {
	let G = f.filter((f) => f.mode === "edit"), K = {}, q = {};
	for (let f of G) {
		let H = K[f.worktreeId] ?? (K[f.worktreeId] = []), U = f.isDirty && f.readOnly !== !0 ? V[f.id] : void 0;
		H.push({
			filePath: f.filePath,
			relativePath: f.relativePath,
			worktreeId: f.worktreeId,
			language: f.language,
			isPreview: f.isPreview || void 0,
			runtimeEnvironmentId: f.runtimeEnvironmentId,
			externalSshTargetId: f.externalSshTargetId,
			...f.readOnly === !0 ? { readOnly: !0 } : {},
			...f.readOnly === !0 && f.liveTail === !0 ? { liveTail: !0 } : {},
			...U === void 0 ? {} : { dirtyDraftContent: U },
			...U !== void 0 && f.lastKnownDiskSignature ? { lastKnownDiskSignature: f.lastKnownDiskSignature } : {}
		}), (q[f.worktreeId] ?? (q[f.worktreeId] = /* @__PURE__ */ new Set())).add(f.id);
	}
	let J = [];
	for (let [f, V] of Object.entries(U)) V && q[f]?.has(V) && J.push([f, V]);
	let Y = Object.fromEntries(J), X = [];
	for (let [f, V] of Object.entries(W)) {
		if (V !== "editor") {
			X.push([f, V]);
			continue;
		}
		Y[f] && X.push([f, V]);
	}
	let Z = Object.fromEntries(X), Q = new Set(Object.values(q).flatMap((f) => [...f]));
	return {
		openFilesByWorktree: K,
		activeFileIdByWorktree: Y,
		activeTabTypeByWorktree: Z,
		markdownFrontmatterVisible: Object.fromEntries(Object.entries(H ?? {}).filter(([f]) => Q.has(f)))
	};
}
function buildSanitizedTabsByWorktree(f) {
	return Object.fromEntries(Object.entries(f).map(([f, V]) => [f, V.map((f) => {
		let { pendingActivationSpawn: V, recovery: H, ...U } = f;
		return U;
	})]));
}
function buildTerminalSessionData(f) {
	let V = f.tabsByWorktree, H = f.ptyIdsByTabId, U = (f) => (H[f]?.length ?? 0) > 0, W = f.lastKnownRelayPtyIdByTabId, G = f.pendingReconnectPtyIdByTabId ?? {}, K = f.deferredSshSessionIdsByTabId ?? {}, q = (f) => W[f] || G[f] || K[f], J = (f) => U(f.id) || !f.ptyId && !!q(f.id), Y = Object.entries(V).filter(([, f]) => f.some(J)).map(([f]) => f), X = new Map(Object.values(f.worktreesByRepo).flat().map((f) => [f.id, f])), Z = new Map(f.repos.map((f) => [f.id, f])), Q = {};
	for (let [f, H] of Object.entries(V)) {
		let V = X.get(f);
		if ((V ? Z.get(V.repoId) : null)?.connectionId) for (let f of H) {
			if (!J(f)) continue;
			let V = f.ptyId || q(f.id);
			V && (Q[f.id] = V);
		}
	}
	return {
		activeWorktreeIdsOnShutdown: Y,
		remoteSessionIdsByTabId: Object.keys(Q).length > 0 ? Q : void 0
	};
}
function buildWorkspaceSessionPayload(f) {
	let V = withoutStagedBrowserTabs(f), H = buildTerminalSessionData(V);
	return pruneLocalTerminalScrollbackBuffers({
		activeRepoId: V.activeRepoId,
		activeWorkspaceKey: V.activeWorkspaceKey,
		activeWorkspaceExecutionHostId: V.activeWorkspaceExecutionHostId,
		activeWorktreeId: V.activeWorktreeId,
		activeTabId: V.activeTabId,
		tabsByWorktree: buildSanitizedTabsByWorktree(V.tabsByWorktree),
		terminalLayoutsByTabId: V.terminalLayoutsByTabId,
		localOnlyScrollbackByTabId: V.localOnlyScrollbackByTabId,
		activeWorktreeIdsOnShutdown: H.activeWorktreeIdsOnShutdown,
		activeTabIdByWorktree: V.activeTabIdByWorktree,
		...buildEditorSessionData(V.openFiles, V.editorDrafts, V.markdownFrontmatterVisible, V.activeFileIdByWorktree, V.activeTabTypeByWorktree),
		...buildBrowserSessionData(V.browserTabsByWorktree, V.browserPagesByWorkspace, V.activeBrowserTabIdByWorktree, V.remoteBrowserPageHandlesByPageId),
		browserUrlHistory: normalizeBrowserHistoryEntries(V.browserUrlHistory),
		workspaceDocHistory: normalizeWorkspaceDocHistoryEntries(V.workspaceDocHistory ?? []),
		...buildPersistedUnifiedTabSessionData(V),
		activeConnectionIdsAtShutdown: buildActiveConnectionIdsAtShutdown(V, H.remoteSessionIdsByTabId ?? null),
		remoteSessionIdsByTabId: H.remoteSessionIdsByTabId,
		lastVisitedAtByWorktreeId: buildLastVisitedAtByWorktreeId(V),
		defaultTerminalTabsAppliedByWorktreeId: V.defaultTerminalTabsAppliedByWorktreeId && Object.keys(V.defaultTerminalTabsAppliedByWorktreeId).length > 0 ? V.defaultTerminalTabsAppliedByWorktreeId : void 0,
		closedTerminalTabTombstonesByTabId: buildPersistedClosedTerminalTabTombstones(V.closedTerminalTabTombstonesByTabId),
		...buildSleepingAgentSessionData(V),
		clientHostedBrowserCloseIntentsByEnvironment: V.clientHostedBrowserCloseIntentsByEnvironment
	}, V.repos);
}
function reportShutdownCheckpointFailure(f) {
	console.error("[app] Shutdown checkpoint persist failed:", f);
	let V = formatShutdownCheckpointFailureReason(f);
	publishShutdownCheckpointFailureReason(V), recordRendererCrashBreadcrumb("renderer_shutdown_checkpoint_failed", { message: V });
}
function createShutdownCheckpointGuard(f, V) {
	let H = !1;
	return {
		persistOnce() {
			if (H) return !0;
			try {
				f();
			} catch (f) {
				return reportShutdownCheckpointFailure(f), !1;
			}
			return H = !0, clearShutdownCheckpointFailureReason(), !0;
		},
		abortAfterCheckpointFailure() {
			H = !1;
		},
		abandonAttempt() {
			H = !1, V?.();
		}
	};
}
function createShutdownCheckpointBeforeUnloadHandler(f) {
	return (V) => {
		f.persistOnce() || (V.currentTarget?.dispatchEvent(new Event(ORCA_RENDERER_SHUTDOWN_CHECKPOINT_FAILED_EVENT)), V.preventDefault());
	};
}
function preventUnloadAndScheduleShutdownCheckpointReset(f, V) {
	f.preventDefault(), queueMicrotask(() => {
		V.dispatchEvent(new Event(ORCA_RENDERER_UNLOAD_PREVENTED_EVENT));
	});
}
function firstLeafGroupId(f) {
	return f.type === "leaf" ? f.groupId : firstLeafGroupId(f.first);
}
function findReusableRightSplitTarget(f, V) {
	if (f.type === "leaf") return {
		containsSource: f.groupId === V,
		reusableGroupId: null
	};
	let H = findReusableRightSplitTarget(f.first, V);
	if (H.containsSource) return {
		containsSource: !0,
		reusableGroupId: H.reusableGroupId ?? (f.direction === "horizontal" ? firstLeafGroupId(f.second) : null)
	};
	let U = findReusableRightSplitTarget(f.second, V);
	return {
		containsSource: U.containsSource,
		reusableGroupId: U.reusableGroupId
	};
}
function findReusableRightSplitGroupId(f, V) {
	return f ? findReusableRightSplitTarget(f, V).reusableGroupId : null;
}
function getSimulatorWorktrees(f, V) {
	return [...f.allWorktrees?.() ?? [], ...(f.folderWorkspaces ?? []).map(folderWorkspaceToWorktree)].filter((f) => f.id === V);
}
function resolveSimulatorExecutionHostId(f, V, H) {
	let U = getSimulatorWorktrees(f, V), W = H ?? getActiveExecutionHostIdForWorktree(f, V);
	return W && U.some((f) => isExecutionHostAliasForWorktree(W, f)) ? W : H || (U.length === 1 ? U[0].hostId ?? "local" : H);
}
function getSimulatorTabForWorktree(f, V) {
	let H = useAppStore.getState(), U = getSimulatorWorktrees(H, f), W = V ?? getActiveExecutionHostIdForWorktree(H, f), G = U.find((f) => W ? isExecutionHostAliasForWorktree(W, f) : !1), K = (H.unifiedTabsByWorktree[f] ?? []).filter((f) => f.contentType === "simulator");
	if (U.length === 0) return V ? K.find((f) => f.executionHostId === V) ?? null : K[0] ?? null;
	if (V && !G) return K.find((f) => f.executionHostId === V) ?? null;
	let q = G ?? (U.length === 1 ? U[0] : null);
	if (!q) return null;
	let J = findAmbiguousWorktreeIds(U);
	return K.find((f) => isUnifiedTabOwnedByWorktree(f, q, J)) ?? null;
}
function ensureSimulatorTab(f, V) {
	let H = useAppStore.getState();
	if (H.settings?.mobileEmulatorEnabled === !1) return null;
	let U = V?.targetGroupId ?? H.activeGroupIdByWorktree[f] ?? H.groupsByWorktree[f]?.[0]?.id;
	if (!U) return null;
	cancelPendingSimulatorPaneShutdown(f);
	let W = resolveSimulatorExecutionHostId(H, f, V?.executionHostId), G = getSimulatorTabForWorktree(f, W), K = V?.surfacePane ?? !0;
	if (G) return K && H.activeWorktreeId === f && (H.activateTab(G.id), H.focusGroup(f, G.groupId), H.setActiveTabType("simulator")), G.id;
	if (V?.placement === "rightSplit" && K) {
		let V = findReusableRightSplitGroupId(H.layoutByWorktree[f], U);
		if (V) {
			let U = H.createUnifiedTab(f, "simulator", {
				label: translate("auto.lib.ensure.simulator.tab.372d21d428", "Mobile Emulator"),
				targetGroupId: V,
				activate: !0,
				...W ? { executionHostId: W } : {}
			});
			return H.activateTab(U.id), H.setActiveTabType("simulator"), H.focusGroup(f, U.groupId), U.id;
		}
		let G = H.createUnifiedTabInSplit(f, "simulator", {
			sourceGroupId: U,
			splitDirection: "right"
		}, {
			label: translate("auto.lib.ensure.simulator.tab.372d21d428", "Mobile Emulator"),
			activate: !0,
			...W ? { executionHostId: W } : {}
		});
		if (G) return G.id;
	}
	let J = H.createUnifiedTab(f, "simulator", {
		label: translate("auto.lib.ensure.simulator.tab.372d21d428", "Mobile Emulator"),
		targetGroupId: U,
		activate: K,
		...W ? { executionHostId: W } : {}
	});
	return K && (H.activateTab(J.id), H.setActiveTabType("simulator"), H.focusGroup(f, J.groupId)), J.id;
}
function dispatchPrelaunchedSession(f, V) {
	typeof window > "u" || window.setTimeout(() => {
		window.dispatchEvent(new CustomEvent("orca:emulator-auto-attach", { detail: {
			worktreeId: f,
			info: V
		} }));
	}, 0);
}
function getLaunchErrorMessage(f) {
	return f instanceof Error && f.message ? f.message : translate("auto.lib.open.mobile.emulator.tab.bf4f2a8a72", "Could not start the emulator. Check iOS or Android emulator setup and try another device.");
}
async function openMobileEmulatorTab(f, V = {}) {
	let H = useAppStore.getState();
	if (assertClientCreationActionAvailable(H, f, "mobile-emulator"), H.settings?.mobileEmulatorEnabled === !1) return null;
	let U = getSimulatorTabForWorktree(f, LOCAL_EXECUTION_HOST_ID);
	if (U) return U.id;
	let W = V.targetGroupId ?? H.activeGroupIdByWorktree[f] ?? H.groupsByWorktree[f]?.[0]?.id;
	if (!W) return null;
	if (cancelPendingSimulatorPaneShutdown(f), isManualSimulatorLaunchPending(f)) return ensureSimulatorTab(f, {
		placement: V.placement ?? "rightSplit",
		targetGroupId: W,
		surfacePane: !0,
		executionHostId: LOCAL_EXECUTION_HOST_ID
	});
	beginManualSimulatorLaunch(f);
	try {
		let H = ensureSimulatorTab(f, {
			placement: V.placement ?? "rightSplit",
			targetGroupId: W,
			surfacePane: !0,
			executionHostId: LOCAL_EXECUTION_HOST_ID
		});
		if (!H) return null;
		dispatchManualSimulatorLaunchStarted(f);
		try {
			let V = await callRuntimeRpc({ kind: "local" }, "emulator.attach", {
				worktree: f,
				focus: !1
			});
			if (!V.attached || !V.info) throw Error("Could not start the emulator.");
			return await shutdownManagedSimulatorIfNoPane(f, H) ? H : (rememberPrelaunchedSimulatorSession(f, V.info), dispatchPrelaunchedSession(f, V.info), H);
		} catch (V) {
			let U = getLaunchErrorMessage(V);
			return toast.error(U), dispatchManualSimulatorLaunchFailed(f, U), H;
		}
	} finally {
		finishManualSimulatorLaunch(f);
	}
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), STORAGE_PREFIX = "orca.terminalShortcutCapturedNotice.", NOTICE_DURATION_MS = 2e4;
function hasShownNotice(f) {
	try {
		return localStorage.getItem(`${STORAGE_PREFIX}${f}`) === "true";
	} catch {
		return !1;
	}
}
function markNoticeShown(f) {
	try {
		localStorage.setItem(`${STORAGE_PREFIX}${f}`, "true");
	} catch {}
}
function openShortcutSettings() {
	let f = useAppStore.getState();
	f.openSettingsPage(), f.openSettingsTarget({
		pane: "shortcuts",
		repoId: null,
		sectionId: "terminal-shortcut-policy"
	});
}
function showTerminalShortcutCaptureNotification({ actionId: f, platform: V, keybindings: H }) {
	let U = getKeybindingDefinition(f);
	if (!U || !isKeybindingPotentialTerminalConflict(U) || hasShownNotice(f)) return;
	markNoticeShown(f);
	let W = formatKeybindingList(getEffectiveKeybindingsForAction(f, V, H), V);
	toast.message(translate("auto.lib.terminal.shortcut.capture.notification.141ad6c004", "Terminal shortcut handled"), {
		description: `${U.title} (${W})`,
		duration: NOTICE_DURATION_MS,
		dismissible: !0,
		className: "!w-[420px] !max-w-[calc(100vw-2rem)] !gap-2 !py-2 !pl-3 !pr-2",
		classNames: {
			content: "min-w-0 flex-1 !gap-0.5",
			title: "truncate !leading-5",
			description: "truncate !leading-4",
			actionButton: "!h-7 !shrink-0 !rounded-md !px-2.5"
		},
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keyboard, { className: "size-4 text-muted-foreground" }),
		action: {
			label: translate("auto.lib.terminal.shortcut.capture.notification.b0536028c9", "Open Shortcuts"),
			onClick: openShortcutSettings
		}
	});
}
function getBrowserWorkspaceRemoteOwnerEnvironmentIds(f, V) {
	let H = /* @__PURE__ */ new Set();
	for (let U of f.browserPagesByWorkspace[V] ?? []) {
		let V = f.remoteBrowserPageHandlesByPageId[U.id]?.environmentId?.trim() || U.browserRuntimeEnvironmentId?.trim();
		V && H.add(V);
	}
	return [...H];
}
function browserWorkspaceHasRemoteOwner(f, V, H) {
	let U = H?.trim();
	return U ? (f.browserPagesByWorkspace[V] ?? []).some((V) => f.remoteBrowserPageHandlesByPageId[V.id]?.environmentId === U || V.browserRuntimeEnvironmentId === U) : !1;
}
function planBrowserWorkspaceTabClose({ state: f, workspaceId: V, focusedEnvironmentId: H, isEnvironmentActive: U }) {
	let W = {
		hostEnvironmentIds: [],
		closesLocally: !0,
		removesVisibleTab: !0
	}, G = f.browserPagesByWorkspace[V] ?? [];
	if (G.some((V) => f.remoteBrowserPageHandlesByPageId[V.id]?.staged === !0)) return {
		...W,
		localCloseReason: "cleanup"
	};
	let K = G.length > 0, q = getBrowserWorkspaceRemoteOwnerEnvironmentIds(f, V);
	if (q.length > 0) {
		let f = q.filter((f) => U(f));
		return f.length === 0 ? W : {
			hostEnvironmentIds: f,
			closesLocally: !1,
			removesVisibleTab: !1
		};
	}
	return K || !U(H) ? W : {
		hostEnvironmentIds: [H ?? null],
		closesLocally: !1,
		removesVisibleTab: !0
	};
}
function closeBrowserWorkspaceTabOnHosts({ state: f, worktreeId: V, workspaceId: H, visibleTabId: U, focusedEnvironmentId: W }) {
	let G = planBrowserWorkspaceTabClose({
		state: f,
		workspaceId: H,
		focusedEnvironmentId: W,
		isEnvironmentActive: isWebRuntimeSessionActive
	});
	for (let V of f.browserPagesByWorkspace[H] ?? []) clearBrowserAddressBarEditSession(V.id), clearBrowserPageDeferredNavigation(V.id);
	let K = collectPendingClientHostedBrowserCloses(f, {
		workspaceId: H,
		worktreeId: V,
		environmentIds: G.hostEnvironmentIds.length > 0 ? G.hostEnvironmentIds.filter((f) => f !== null) : getBrowserWorkspaceRemoteOwnerEnvironmentIds(f, H)
	});
	return G.closesLocally ? (f.recordClientHostedBrowserCloseIntents(K), G) : (settleBrowserWorkspaceTabCloseOnHosts({
		plan: G,
		worktreeId: V,
		workspaceId: H,
		visibleTabId: U,
		pending: K,
		recordCloseIntents: f.recordClientHostedBrowserCloseIntents
	}), G);
}
async function settleBrowserWorkspaceTabCloseOnHosts(f) {
	let V = await Promise.all(f.plan.hostEnvironmentIds.map(async (V) => ({
		environmentId: V,
		outcome: await closeWebRuntimeSessionTab({
			worktreeId: f.worktreeId,
			tabId: f.visibleTabId,
			environmentId: V,
			reason: "user"
		})
	}))), H = new Set(V.filter((f) => f.outcome === "failed").map((f) => f.environmentId));
	f.recordCloseIntents(f.pending.filter((f) => H.has(f.environmentId))), !f.plan.removesVisibleTab && V.length > 0 && V.every((f) => f.outcome === "unknown-tab") && tearDownBrowserWorkspaceTabLocally(f.worktreeId, f.workspaceId);
}
function tearDownBrowserWorkspaceTabLocally(f, V) {
	let H = useAppStore.getState();
	if (!(H.browserTabsByWorktree[f] ?? []).some((f) => f.id === V)) return;
	H.closeBrowserTab(V), destroyWorkspaceWebviews(H.browserPagesByWorkspace, V);
	let U = (useAppStore.getState().unifiedTabsByWorktree[f] ?? []).find((f) => f.contentType === "browser" && f.entityId === V);
	U && useAppStore.getState().closeUnifiedTab(U.id);
}
function closeWorkspaceBrowserTab(f, V, H) {
	let U = useAppStore.getState(), { closeBrowserTab: W, closeUnifiedTab: G } = U, K = closeBrowserWorkspaceTabOnHosts({
		state: U,
		worktreeId: f,
		workspaceId: V,
		visibleTabId: H ?? V,
		focusedEnvironmentId: getRuntimeEnvironmentIdForWorktree(U, f)
	}), q = K.localCloseReason === "cleanup" ? {
		preserveWorktreeSelection: !0,
		recordInteraction: !1
	} : void 0;
	return K.closesLocally && (W(V, K.localCloseReason ? { reason: K.localCloseReason } : void 0), destroyWorkspaceWebviews(U.browserPagesByWorkspace, V)), K.removesVisibleTab && H && G(H, q), K;
}
function createWorkspaceTabCloseCommands({ worktreeId: f, groupTabs: V }) {
	let { closeUnifiedTab: H, closeFile: U, setActiveWorktree: W } = useAppStore.getState(), G = (V, H) => {
		if (!(useAppStore.getState().unifiedTabsByWorktree[f] ?? []).some((f) => f.id !== H && f.entityId === V && (f.contentType === "editor" || f.contentType === "diff" || f.contentType === "conflict-review" || f.contentType === "check-details"))) {
			if (useAppStore.getState().openFiles.find((f) => f.id === V)?.isDirty) return requestEditorFileClose(V), !1;
			U(V);
		}
		return !0;
	}, K = () => {
		let V = useAppStore.getState();
		if (V.activeWorktreeId !== f) return;
		let { renderableTabCount: H } = V.reconcileWorktreeTabModel(f);
		H === 0 && W(null);
	};
	return {
		closeItem: (U, W) => {
			let q = V.find((f) => f.id === U);
			if (q) {
				if (q.contentType === "agent-session") {
					H(q.id), W?.skipEmptyCheck || K();
					return;
				}
				if (q.contentType === "terminal") {
					closeTerminalTab(q.entityId, {
						...W?.skipRunningProcessConfirm ? { skipRunningProcessConfirm: !0 } : {},
						...W?.skipEmptyCheck ? {} : { onClosed: K }
					});
					return;
				}
				if (q.contentType === "browser") {
					let V = closeWorkspaceBrowserTab(f, q.entityId, q.id);
					if (!V.closesLocally || V.localCloseReason === "cleanup") return;
				} else if (q.contentType === "simulator") H(q.id);
				else {
					if (!G(q.entityId, q.id)) return;
					H(q.id);
				}
				W?.skipEmptyCheck || K();
			}
		},
		leaveWorktreeIfEmpty: K
	};
}
function hasFocusedGroup(f, V) {
	let H = f.activeGroupIdByWorktree?.[V];
	return (f.groupsByWorktree?.[V] ?? []).some((f) => f.id === H);
}
function resolveActiveTab(f, V) {
	let H = f.getActiveTab(V);
	if (H) return H;
	if (hasFocusedGroup(f, V)) return null;
	let U = f.activeTabType === "browser" ? f.activeBrowserTabId : f.activeTabType === "editor" ? f.activeFileId : f.activeTabId;
	return (f.unifiedTabsByWorktree[V] ?? []).find((V) => toVisibleTabType(V.contentType) === f.activeTabType && V.entityId === U) ?? null;
}
function resolveCloseTarget(f, V) {
	if (V?.kind === "tab") {
		let H = (f.unifiedTabsByWorktree[V.worktreeId] ?? []).find((f) => f.id === V.tabId);
		return H ? {
			worktreeId: V.worktreeId,
			tab: H
		} : null;
	}
	if (V?.kind === "browser-source") {
		let H = resolveBrowserWorkspaceOwner(f, V.sourceId);
		if (!H) return null;
		let U = (f.unifiedTabsByWorktree[H.worktreeId] ?? []).find((f) => f.contentType === "browser" && f.entityId === H.workspaceId);
		return {
			worktreeId: H.worktreeId,
			tab: U ?? null,
			browserWorkspaceId: H.workspaceId
		};
	}
	if (!f.activeWorktreeId) return null;
	let H = resolveActiveTab(f, f.activeWorktreeId);
	return H ? {
		worktreeId: f.activeWorktreeId,
		tab: H
	} : !hasFocusedGroup(f, f.activeWorktreeId) && f.activeTabType === "browser" && f.activeBrowserTabId ? resolveCloseTarget(f, {
		kind: "browser-source",
		sourceId: f.activeBrowserTabId
	}) : null;
}
function dispatchWorkspaceTabCommand(f) {
	let V = useAppStore.getState();
	if (f.type === "close") {
		if (!f.target) {
			if (isEmptyFloatingWorkspacePanelVisible()) return window.dispatchEvent(new Event(TOGGLE_FLOATING_TERMINAL_EVENT)), !0;
			if (isFloatingWorkspacePanelFocused()) return !1;
		}
		let H = resolveCloseTarget(V, f.target);
		if (!H) return !1;
		if (!H.tab) {
			if (!H.browserWorkspaceId) return !1;
			let V = closeWorkspaceBrowserTab(H.worktreeId, H.browserWorkspaceId);
			return V.closesLocally && V.localCloseReason !== "cleanup" && !f.skipEmptyCheck && !f.bulk && createWorkspaceTabCloseCommands({
				worktreeId: H.worktreeId,
				groupTabs: []
			}).leaveWorktreeIfEmpty(), !0;
		}
		let U = H.tab;
		if (f.context === "terminal" && U.contentType === "terminal") return !1;
		let W = createWorkspaceTabCloseCommands({
			worktreeId: H.worktreeId,
			groupTabs: V.unifiedTabsByWorktree[H.worktreeId] ?? []
		});
		if ((f.bulk || f.skipEmptyCheck) && U.isPinned) return !0;
		let G = () => W.closeItem(U.id, {
			skipEmptyCheck: f.bulk || f.skipEmptyCheck,
			skipRunningProcessConfirm: f.bulk
		});
		return U.contentType === "terminal" || f.bulk ? G() : guardPinnedTabClose({
			isPinned: U.isPinned === !0,
			tabLabel: resolvePinnedTabLabel(V, H.worktreeId, U.id),
			onClose: G
		}), !0;
	}
	if (f.type === "previous-recent") return isFloatingWorkspacePanelFocused() ? !1 : handleSwitchRecentTab();
	if (isFloatingWorkspacePanelFocused()) return switchFloatingWorkspaceTab(V, f.direction, f.scope), !0;
	switch (f.scope) {
		case "same-type": return handleSwitchTab(f.direction);
		case "all-types": return handleSwitchTabAcrossAllTypes(f.direction);
		case "terminal": return handleSwitchTerminalTab(f.direction);
	}
}
const TOGGLE_QUICK_COMMANDS_MENU_EVENT = "orca:toggleQuickCommandsMenu";
export { useBrowserGuestPaintRetention as A, buildPersistedClosedTerminalTabTombstones as C, browserPageNeedsPaintRetention as D, buildPersistedUnifiedTabSessionData as E, activateCyclableTab as F, sameBucketRecords as I, useReusedArrayIdentity as M, isRecentTabSwitcherCommitRelease as N, onBrowserGuestPaintRetentionChange as O, matchesRecentTabSwitcherChord as P, buildActiveConnectionIdsAtShutdown as S, buildLastVisitedAtByWorktreeId as T, buildWorkspaceSessionPayload as _, browserWorkspaceHasRemoteOwner as a, buildPersistedBrowserTabsByWorktree as b, ensureSimulatorTab as c, createShutdownCheckpointGuard as d, preventUnloadAndScheduleShutdownCheckpointReset as f, buildTerminalSessionData as g, buildSanitizedTabsByWorktree as h, closeBrowserWorkspaceTabOnHosts as i, useWorktreeBrowserPageIds as j, useAnyBrowserGuestNeedsPaint as k, getSimulatorTabForWorktree as l, buildEditorSessionData as m, dispatchWorkspaceTabCommand as n, showTerminalShortcutCaptureNotification as o, SESSION_RELEVANT_FIELDS as p, createWorkspaceTabCloseCommands as r, openMobileEmulatorTab as s, TOGGLE_QUICK_COMMANDS_MENU_EVENT as t, createShutdownCheckpointBeforeUnloadHandler as u, shouldPersistWorkspaceSession as v, buildSleepingAgentSessionData as w, withoutStagedBrowserTabs as x, buildPersistedBrowserPagesByWorkspace as y };
