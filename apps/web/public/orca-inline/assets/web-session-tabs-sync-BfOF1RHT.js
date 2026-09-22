import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { $v as getRuntimeEnvironmentRevision, Ac as getRemoteRuntimePtyEnvironmentId, Ap as toRemoteRuntimePtyId, Au as DROID_AGENT_NAME_RE, Bf as getRuntimeSessionMirrorEnvironmentIds, Cf as normalizeTurnCompletedAtField, Cu as isPiTerminalTitle, Cx as resolveTuiAgentPermissionMode, Et as isWebSessionCloseIntentPending, Fm as clearWebSessionFocusIntentsForOwner, Fo as sanitizeTerminalLayoutPaneTitlesForLabels, Gg as findIndexedWorktreeOwner, Hf as pickNextActiveTab, Hg as findIndexedProjectGroupOwner, Id as toWebTerminalSurfaceTabId, If as getExplicitRuntimeEnvironmentIdForWorktree, Ih as parsePaneKey, Im as peekWebSessionFocusIntent, JS as LOCAL_EXECUTION_HOST_ID, Jg as resolveIndexedRepoOwner, Kg as findIndexedWorktreeOwnerForHost, Md as HOST_TERMINAL_SURFACE_SEPARATOR, Nd as WEB_TERMINAL_SURFACE_TAB_PREFIX, Nh as isTerminalLeafId, Nm as clearWebSessionFocusIntent, Nu as titleHasAnyLegacyAgentName, O_ as parseAppSshPtyId, Ot as reconcileWebSessionCloseIntents, Pd as isWebTerminalSurfaceTabId, Ph as makePaneKey, Qd as structuredAgentSessionTabId, Rm as resolveWebSessionSiblingVisibleTabId, Su as isGeminiTerminalTitle, Sy as toRuntimeWorktreeSelector, Uf as pushRecentTabId$1, Ug as findIndexedRepoOwner, Vg as findIndexedFolderWorkspaceOwner, Wf as sanitizeRecentTabIds$1, Wg as findIndexedRepoOwnerForHost, Yc as buildRetiredTerminalTabStateSweepPatch, Za as buildAgentNotificationId, Zc as isPiCompatibleAgentType, Zg as getRuntimeEnvironmentConnectionGeneration, Zo as resolveTerminalLayoutRoot, __ as isDisconnectedRuntimeHostState, _f as pickParsedAgentStatusPayload, bf as agentStatusEvidenceObservedAt, bh as shouldRetainStructuredAgentSessionLaunchTab, bs as normalizeTerminalLayoutPtyOwnership, cg as worktreeMatchesHost, co as terminalLayoutEqual, fu as getSyntheticAgentTitleProfile, gs as collectLeafIdsInOrder, hb as FLOATING_TERMINAL_WORKTREE_ID, hl as agentEntryCompletionAt, iC as parseExecutionHostId, iu as resolveCommittedTitleAgentType, jc as getRemoteRuntimeTerminalHandle, ju as HERMES_AGENT_NAME_RE, ku as AGY_AGENT_NAME_RE, mv as folderWorkspaceKey, oC as toRuntimeExecutionHostId, ph as hasStructuredAgentSessionLaunchCancellationTombstone, qg as getCatalogOwnerHostId, sC as toSshExecutionHostId, sg as worktreeHostMatchOptions, su as detectAgentStatusFromTitle, t as useAppStore, tu as formatAgentTypeLabel, tw as lastVerifiedRuntimeStatus, ul as agentProviderSessionsEqual, vf as AGENT_STATUS_STALE_AFTER_MS, vm as getIndexedWorktreesById, vv as parseWorkspaceKey, wt as clearWebSessionCloseIntentsForOwner, xf as isFreshNonDoneAgentStatus, y_ as runtimeHostConnectionStateForEntry, yf as agentStatusAuthorityObservedAt, zm as resolveWebSessionVisibleTabId } from "./store-C9f8FDJV.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { t as useShallow } from "./shallow-CDSK0iEX.js";
import { n as getWindowParkVisible, r as subscribeWindowParkVisibility, t as WINDOW_HIDE_PARK_GRACE_MS } from "./window-park-visibility-BBcurIcE.js";
import { r as getRepoMapFromState } from "./selectors-Cdg4hUQI.js";
import { $ as endWebRuntimeWakeTerminalRespawn, At as latestReceivedSessionTabsInventoryFrameByEnvironment, B as setHostSessionTabIdMapping, C as shouldBootstrapInitialWebRuntimeTerminal, Ct as HOST_WORKING_CLIENT_BOUNDARY_LIMIT, D as queueAcceptedWebSessionTerminalSnapshot, Dt as WEB_SESSION_TABS_VISIBILITY_RESUME_STAGGER_MS, E as shouldSyncRuntimeSessionTabs, Et as WEB_SESSION_GROUP_PREFIX, F as getWebSessionTabsTrackingGeneration, Ft as sessionTabsInventoryOmissionsByWorktree, G as markHostSessionMirrorWorktreeHydrated, It as peekWebSessionTerminalPlacementGroup, J as markWebSessionBrowserPlacementAdopted, L as clearHostSessionTabIdMappings, M as clearWebSessionTabsTrackingForEnvironment, Mt as nextReceivedSessionTabsFrame, Nt as replayableSessionTabsSnapshotByWorktree, Ot as hostWorkingClientBoundaryByPaneKey, Pt as sessionTabsEnvironmentsByWorktree, Q as beginWebRuntimeWakeTerminalRespawn, R as hostSessionTabIdsByLocalTabForWorktree, S as shouldApplyWebSessionTabsSnapshot, T as shouldSyncAllRuntimeSessionTabs, Tt as VISIBILITY_INVENTORY_REMOVAL_EPOCH, W as markHostSessionMirrorHydrated, X as clearWebSessionReorderIntentsForOwner, Y as peekWebSessionBrowserPlacementGroup, Z as resolveWebSessionReorderedOrder, at as recordReceivedWebSessionTabsRemoval, b as WEB_SESSION_TABS_FRAME_OUTRANKED, ct as shouldApplyRecoveredWebSessionTabsSnapshot, dt as acceptSessionTabsRuntimeId, et as shouldSkipWebRuntimeWakeTerminalRespawn, ft as getSessionTabsRuntimeIdFromResponse, gt as isRetiredSessionTabsRuntimeId, h as createWebRuntimeSessionTerminal, ht as isCurrentSessionTabsRuntimeId, it as recordReceivedWebSessionTabsInventory, j as acceptReplayedWebSessionTabsSnapshot, jt as latestSessionTabsSnapshotByWorktree, kt as latestReceivedSessionTabsFrameByEnvironment, lt as hostSnapshotAffirmsClientHostedPages, mt as isCurrentSessionTabsRuntimeFrame, nt as getTrackedWebSessionTabsWorktrees, ot as recordReceivedWebSessionTabsSnapshot, q as isWebSessionBrowserPlacementGroupReserved, rt as isSessionTabsListAllResult, st as sessionTabsFreshnessKey, tt as advancesSessionTabsFreshness, v as recoverWebSessionTerminalOrphansBeforeApply, vt as recordReceivedWebSessionTabsEnvironmentFrame, w as shouldRespawnWebRuntimeTerminalAfterWake, wt as MAX_TRACKED_SESSION_TABS_INVENTORY_OMISSIONS, x as decideWebSessionTabsSnapshot, xt as suppressE2eWebRuntimeBrowserSnapshot, y as hostScopeCensusIsComplete } from "./web-runtime-session-CeAC5QPx.js";
import { d as isClientOnlyUnverifiableInspection, i as recognizeAgentProcess, r as isRecognizedAgentType } from "./agent-process-recognition-BUFJTuDF.js";
import { a as isWebAgentSessionHandoffPostCreateSnapshotConfirmed, s as resolveWebAgentSessionHandoff, t as clearWebAgentSessionHandoff } from "./web-agent-session-handoff-f0A-yvKF.js";
import { i as normalizeCompatibleAgentTitleForOwner, n as resolvePaneAgentOwnerRecord, o as shareCompatibleTitleIdentityGroup, r as normalizeCompatibleAgentStatusEntryForOwner } from "./pane-agent-owner-Ci26i0GA.js";
var panesByPaneKey = /* @__PURE__ */ new Map();
function registerRendererOwnedAgentStatusPane(e, t) {
	let n = panesByPaneKey.get(e), r = {
		environmentId: t,
		hasClientWrite: n?.environmentId === t && n.hasClientWrite
	};
	return panesByPaneKey.set(e, r), () => {
		panesByPaneKey.get(e) === r && panesByPaneKey.delete(e);
	};
}
function markRendererOwnedAgentStatusWrite(e) {
	let t = panesByPaneKey.get(e);
	!t || t.hasClientWrite || (t.hasClientWrite = !0);
}
function isClientAuthoritativeAgentStatusPane(e) {
	return panesByPaneKey.get(e)?.hasClientWrite === !0;
}
function defaultAgentChatLabel(e) {
	return `${formatAgentTypeLabel(e)} Chat`;
}
function mergeCapturedLeafState(e) {
	let t = {};
	if (e.prior) for (let [n, r] of Object.entries(e.prior)) e.currentLeafIds.has(n) && (t[n] = r);
	for (let [n, r] of Object.entries(e.fresh)) e.currentLeafIds.has(n) && (t[n] = r);
	return t;
}
function retainLocalScrollbackInRemoteLayout(e, t) {
	if (!e?.buffersByLeafId && !e?.scrollbackRefsByLeafId) return t;
	let n = new Set(collectLeafIdsInOrder(t.root));
	if (n.size === 0) return t;
	let r = mergeCapturedLeafState({
		prior: t.buffersByLeafId,
		fresh: e.buffersByLeafId ?? {},
		currentLeafIds: n
	}), i = mergeCapturedLeafState({
		prior: t.scrollbackRefsByLeafId,
		fresh: e.scrollbackRefsByLeafId ?? {},
		currentLeafIds: n
	}), a = { ...t };
	return Object.keys(r).length > 0 ? a.buffersByLeafId = r : delete a.buffersByLeafId, Object.keys(i).length > 0 ? a.scrollbackRefsByLeafId = i : delete a.scrollbackRefsByLeafId, a;
}
function isReadyTerminalTab(e) {
	return e.type === "terminal" && e.status === "ready" && e.terminal.trim().length > 0;
}
function isTerminalSurfaceTab(e) {
	return e.type === "terminal";
}
function isReadyBrowserTab(e) {
	return e.type === "browser" && typeof e.browserPageId == "string" && e.browserPageId !== "";
}
function isReadyEditorTab(e) {
	return e.type === "markdown" || e.type === "file";
}
function isAgentSessionTab(e) {
	return e.type === "agent-session";
}
function buildMirroredAgentTabs(e, t, n, r, i, a) {
	let o = e.tabs.filter(isAgentSessionTab).filter((t) => !hasStructuredAgentSessionLaunchCancellationTombstone(e.worktree, t.sessionId)), s = new Set(i.map((e) => e.id)), c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set();
	for (let e of o) {
		if (!e.replacesSessionId) continue;
		let t = i.find((t) => t.contentType === "agent-session" && t.entityId === e.sessionId) ?? i.find((t) => !u.has(t.id) && (t.structuredSessionId === e.replacesSessionId || t.contentType === "agent-session" && t.entityId === e.replacesSessionId));
		t && (l.set(e.sessionId, t), u.add(t.id));
	}
	return o.map((o, d) => {
		let f = l.get(o.sessionId) ?? i.find((e) => !u.has(e.id) && e.contentType === "agent-session" && e.entityId === o.sessionId), p = structuredAgentSessionTabId(o.sessionId), m = f?.id ?? p;
		if (!f || c.has(m)) {
			let e = 0;
			for (; s.has(m);) m = `${p}:history-${++e}`;
		}
		return s.add(m), c.add(m), {
			hostTabId: o.id,
			unifiedTab: {
				id: m,
				entityId: o.sessionId,
				groupId: f?.groupId ?? t.get(o.id) ?? n,
				worktreeId: e.worktree,
				contentType: "agent-session",
				agentSessionAgent: o.agent,
				label: o.title?.trim() || defaultAgentChatLabel(o.agent),
				customLabel: f?.customLabel ?? null,
				color: o.color === void 0 ? f?.color ?? null : o.color,
				sortOrder: r + d,
				createdAt: f?.createdAt ?? a + r + d,
				isPinned: o.isPinned === void 0 ? f?.isPinned === !0 : o.isPinned
			}
		};
	});
}
function localEditorFileId(e) {
	return e.type === "markdown" && e.mode === "markdown-preview" ? `markdown-preview::${e.sourceFilePath}` : e.filePath;
}
function editorSourceFileId(e) {
	return e.type === "markdown" && e.mode === "markdown-preview" ? e.sourceFilePath : void 0;
}
function isRuntimeTerminalTabForEnvironment(e, t) {
	return e.ptyId ? getRemoteRuntimePtyEnvironmentId(e.ptyId) === t : !1;
}
function isMirroredTerminalSurfaceId(e) {
	return e.startsWith("web-terminal-") || e.includes("::");
}
function chooseRemoteTerminalLayout(e, t, n, r) {
	let i = e.map((e) => e.leafId), a = new Set(i), o = e.find((e) => e.parentLayout), s = o?.parentLayout ? sanitizeTerminalLayoutPaneTitlesForLabels(o.parentLayout, [o.title]) : void 0, c = (r && a.has(r) ? r : null) ?? (n?.activeLeafId && a.has(n.activeLeafId) ? n.activeLeafId : null) ?? (s?.activeLeafId && a.has(s.activeLeafId) ? s.activeLeafId : null) ?? e.find((e) => e.isActive)?.leafId ?? i[0] ?? null, l = r && (n?.expandedLeafId || s?.expandedLeafId) ? r : s?.expandedLeafId && a.has(s.expandedLeafId) ? s.expandedLeafId : null;
	return retainLocalScrollbackInRemoteLayout(n, {
		root: resolveTerminalLayoutRoot({
			authoritativeRoot: s?.root,
			existingRoot: n?.root,
			leafIds: i,
			onSynthesize: (e) => console.warn(`[web-session-tabs-sync] synthesized a split direction for ${e} leaves no authoritative or prior tree placed`)
		}),
		activeLeafId: c,
		expandedLeafId: l,
		ptyIdsByLeafId: t,
		...s?.titlesByLeafId ? { titlesByLeafId: s.titlesByLeafId } : {}
	});
}
function shouldReplaceTerminalTab(e, t, n, r, i) {
	return i.has(e.id) || isMirroredTerminalSurfaceId(e.id) || e.pendingActivationSpawn && e.ptyId === null && n.size > 0 ? !0 : isRuntimeTerminalTabForEnvironment(e, t) ? e.ptyId !== null && (n.has(e.ptyId) || r.has(toWebTerminalSurfaceTabId(e.id))) : !1;
}
function sameStringArray(e, t) {
	return e.length === t.length ? e.every((e, n) => e === t[n]) : !1;
}
function sameAgentStateHistory(e, t) {
	return e.length === t.length ? e.every((e, n) => e.state === t[n]?.state && e.prompt === t[n]?.prompt && e.startedAt === t[n]?.startedAt && e.interrupted === t[n]?.interrupted) : !1;
}
function agentStatusEntryEqual(e, t) {
	return e ? e.state === t.state && e.workingMode === t.workingMode && e.prompt === t.prompt && e.updatedAt === t.updatedAt && e.stateStartedAt === t.stateStartedAt && e.agentType === t.agentType && e.paneKey === t.paneKey && e.worktreeId === t.worktreeId && e.tabId === t.tabId && e.terminalTitle === t.terminalTitle && e.toolName === t.toolName && e.toolInput === t.toolInput && e.interactivePrompt === t.interactivePrompt && e.lastAssistantMessage === t.lastAssistantMessage && e.lastAssistantMessageIsToolOutput === t.lastAssistantMessageIsToolOutput && e.interrupted === t.interrupted && e.promptInteractionKey === t.promptInteractionKey && e.restoredUnconfirmed === t.restoredUnconfirmed && agentProviderSessionsEqual(e.agentType, e.providerSession, t.providerSession) && sameAgentStateHistory(e.stateHistory, t.stateHistory) : !1;
}
function isAgentStatusFresh(e, t) {
	return e.restoredUnconfirmed !== !0 && t - agentStatusEvidenceObservedAt(e) <= 18e5;
}
function isMirroredCommandCodeTurnBump(e, t) {
	return e?.agentType === "command-code" && t.agentType === "command-code" && e.state === "working" && t.state === "working" && t.stateStartedAt > e.stateStartedAt;
}
function sanitizeRecentTabIds(e, t) {
	if (!e || e.length === 0) return [];
	let n = new Set(t), r = /* @__PURE__ */ new Set(), i = [];
	for (let t = e.length - 1; t >= 0; --t) {
		let a = e[t];
		!n.has(a) || r.has(a) || (r.add(a), i.push(a));
	}
	return i.toReversed();
}
function pushRecentTabId(e, t) {
	let n = e ?? [];
	return n.length > 0 && n.at(-1) === t ? n : [...n.filter((e) => e !== t), t];
}
function writableWebSessionTabsRecord(e, t, n) {
	let r = e[t] ?? {};
	if (!n) return { ...r };
	if (n.changedRecords.has(t)) return r;
	let i = { ...r }, a = e;
	return a[t] = i, n.changedRecords.add(t), i;
}
function withWorktreeEntry(e, t, n, r, i, a, o = !0) {
	let s = e[t] ?? {};
	if (i(s[n], r)) return s;
	let c = writableWebSessionTabsRecord(e, t, a);
	return r === null && o ? delete c[n] : c[n] = r, c;
}
function isMirroredAgentStatusOwnedBy(e, t, n) {
	return e.worktreeId === n && (e.connectionId === t || e.connectionId == null);
}
function toMirroredPaneKey(e, t = e.leafId) {
	return isTerminalLeafId(t) ? makePaneKey(toWebTerminalSurfaceTabId(e.parentTabId), t) : null;
}
function remapHostAgentStatus(e, t) {
	if (!e.agentStatus) return null;
	let n = toMirroredPaneKey(e, t?.leafId);
	if (!n) return null;
	let r = resolvePaneAgentOwnerRecord({
		launchAgent: t?.launchAgent ?? e.launchAgent,
		hookAgent: e.agentStatus.agentType
	});
	return {
		...normalizeCompatibleAgentStatusEntryForOwner(e.agentStatus, r?.agent, { ownerIsLaunch: r?.ownerIsLaunch === !0 }),
		paneKey: n,
		tabId: toWebTerminalSurfaceTabId(e.parentTabId)
	};
}
function isMirroredAgentPaneKeyForTabs(e, t) {
	let n = parsePaneKey(e);
	return n !== null && t.has(n.tabId);
}
function hostAgentStatusPiercesClientAuthority(e) {
	return e.state === "blocked" || e.interactivePrompt != null;
}
function isClientOwnedAgentStatus(e, t) {
	return t !== void 0 && isClientAuthoritativeAgentStatusPane(e);
}
function isFencedClientAgentStatus(e, t, n) {
	return isClientOwnedAgentStatus(e, t) && isAgentStatusFresh(t, n);
}
function batchAgentPaneKeysForTabs(e, t, n) {
	if (!n) return Object.keys(e.agentStatusByPaneKey);
	if (!n.agentPaneKeysByTabId) {
		n.agentPaneKeysByTabId = /* @__PURE__ */ new Map();
		for (let t of Object.keys(e.agentStatusByPaneKey)) {
			let e = parsePaneKey(t)?.tabId;
			if (!e) continue;
			let r = n.agentPaneKeysByTabId.get(e) ?? /* @__PURE__ */ new Set();
			r.add(t), n.agentPaneKeysByTabId.set(e, r);
		}
	}
	return [...t].flatMap((e) => [...n.agentPaneKeysByTabId?.get(e) ?? []]);
}
function updateBatchAgentPaneKey(e, t, n) {
	let r = parsePaneKey(e)?.tabId, i = n?.agentPaneKeysByTabId;
	if (!r || !i) return;
	if (t) {
		let t = i.get(r) ?? /* @__PURE__ */ new Set();
		t.add(e), i.set(r, t);
		return;
	}
	let a = i.get(r);
	a?.delete(e), a?.size === 0 && i.delete(r);
}
function buildRemirroredClosedTabMarkerLiftPatch(e, t) {
	let n = null;
	for (let r of t) r in (e ?? {}) && (n ??= { ...e }, delete n[r]);
	return n ? { recentlyClosedAgentStatusTabIds: n } : null;
}
function buildRetractedMirroredTabSweepPatch(e, t, n, r, i, a) {
	let o = r.filter(isMirroredTerminalSurfaceId);
	if (o.length === 0) return null;
	let s = {
		acknowledgedAgentsByPaneKey: e.acknowledgedAgentsByPaneKey ?? {},
		activityClearedAtByPaneKey: e.activityClearedAtByPaneKey ?? {},
		agentLaunchConfigByPaneKey: e.agentLaunchConfigByPaneKey ?? {},
		agentStatusByPaneKey: n?.agentStatusByPaneKey ?? e.agentStatusByPaneKey,
		agentStatusEpoch: n?.agentStatusEpoch ?? e.agentStatusEpoch,
		migrationUnsupportedByPtyId: e.migrationUnsupportedByPtyId ?? {},
		manuallyUnreadTurnsByPaneKey: e.manuallyUnreadTurnsByPaneKey ?? {},
		paneForegroundAgentByPaneKey: e.paneForegroundAgentByPaneKey ?? {},
		recentlyClosedAgentStatusTabIds: e.recentlyClosedAgentStatusTabIds ?? {},
		recentlyRetiredAgentStatusPaneKeys: e.recentlyRetiredAgentStatusPaneKeys ?? {},
		retainedAgentsByPaneKey: e.retainedAgentsByPaneKey ?? {},
		retentionSuppressedPaneKeys: e.retentionSuppressedPaneKeys ?? {},
		sortEpoch: n?.sortEpoch ?? e.sortEpoch,
		tabsByWorktree: t
	}, c = s.agentStatusByPaneKey, l = null;
	for (let e of o) {
		let t = i.get(e), n = buildRetiredTerminalTabStateSweepPatch(s, [e], void 0, {
			preserveActivityClearedState: !0,
			...t ? { paneKeys: t } : {}
		});
		n && (l ??= {}, Object.assign(l, n), s = {
			...s,
			...n
		});
	}
	if (!l?.agentStatusByPaneKey || !a) return l ?? null;
	let u = e;
	u.agentStatusByPaneKey = l.agentStatusByPaneKey, a.changedRecords.add("agentStatusByPaneKey");
	for (let e of Object.keys(c)) e in l.agentStatusByPaneKey || updateBatchAgentPaneKey(e, !1, a);
	return l;
}
function collectUnhydratedMirroredTabRetractions(e) {
	let t = /* @__PURE__ */ new Set();
	for (let [n, r] of hostSessionTabIdsByLocalTabForWorktree(e.environmentId, e.worktreeId)) isWebTerminalSurfaceTabId(n) && !e.currentTerminalIds.has(n) && !e.nextHostTerminalTabIds.has(r) && t.add(n);
	if (t.size === 0) return [];
	let n = /* @__PURE__ */ new Set();
	for (let r of batchAgentPaneKeysForTabs(e.state, t, e.batchContext)) {
		let i = e.state.agentStatusByPaneKey[r], a = parsePaneKey(r)?.tabId;
		i?.worktreeId === e.worktreeId && (i.connectionId === e.environmentId || e.environmentId === "local" && (i.connectionId === null || i.connectionId === void 0)) && a && t.has(a) && n.add(a);
	}
	return [...n];
}
function omissionKey(e, t) {
	return `${e}:${t}`;
}
function trackedWorktreeOmissionFingerprint(e) {
	return [e.freshness.publicationEpoch, e.freshness.snapshotVersion].join("\0");
}
function clearTrackedWebSessionTabsInventoryAbsence(e, t) {
	sessionTabsInventoryOmissionsByWorktree.delete(omissionKey(e, t));
}
function confirmTrackedWebSessionTabsInventoryAbsence(e, t) {
	let n = omissionKey(e, t.worktree), r = trackedWorktreeOmissionFingerprint(t), i = sessionTabsInventoryOmissionsByWorktree.get(n), a = i?.fingerprint === r ? i.observations + 1 : 1;
	for (sessionTabsInventoryOmissionsByWorktree.delete(n), sessionTabsInventoryOmissionsByWorktree.set(n, {
		fingerprint: r,
		observations: Math.min(a, 2)
	}); sessionTabsInventoryOmissionsByWorktree.size > 512;) {
		let e = sessionTabsInventoryOmissionsByWorktree.keys().next().value;
		if (typeof e != "string") break;
		sessionTabsInventoryOmissionsByWorktree.delete(e);
	}
	return a >= 2;
}
function isTrackedWebSessionTabsOmissionCurrent(e, t) {
	let n = sessionTabsFreshnessKey(e, t.worktree), r = latestSessionTabsSnapshotByWorktree.get(n);
	return r?.publicationEpoch === t.freshness.publicationEpoch && r.snapshotVersion === t.freshness.snapshotVersion;
}
function isWebSessionTabsWorktreeRemovalFrame(e) {
	return e.removed === !0 || e.publicationEpoch === "visibility-inventory-removal";
}
function buildMissingWebSessionTabsRemovals(e, t, n, r) {
	return t.filter((t) => n.has(t.worktree) ? (clearTrackedWebSessionTabsInventoryAbsence(e, t.worktree), !1) : isTrackedWebSessionTabsOmissionCurrent(e, t) ? r ? (clearTrackedWebSessionTabsInventoryAbsence(e, t.worktree), !0) : confirmTrackedWebSessionTabsInventoryAbsence(e, t) : !1).map((e) => ({
		trackedWorktree: e,
		snapshot: {
			worktree: e.worktree,
			publicationEpoch: VISIBILITY_INVENTORY_REMOVAL_EPOCH,
			snapshotVersion: 0,
			removed: !0,
			activeGroupId: null,
			activeTabId: null,
			activeTabType: null,
			tabs: []
		}
	}));
}
function pendingBindingBelongsToEnvironment(e, t, n) {
	let r = getRemoteRuntimePtyEnvironmentId(e);
	return n === "local" ? r === null : r === t;
}
function retainPendingTerminalBindings(e, t, n, r, i) {
	let a = t?.ptyIdsByLeafId;
	if (!a) return n;
	let o = n;
	for (let t of e) {
		if (t.status !== "pending-handle" || Object.hasOwn(o, t.leafId)) continue;
		let e = a[t.leafId];
		!e || !pendingBindingBelongsToEnvironment(e, r, i) || (o === n && (o = { ...n }), o[t.leafId] = e);
	}
	return o;
}
function buildMirroredTerminalTabs(e, t, n, r, i, o, s, c = "remote") {
	let l = /* @__PURE__ */ new Map();
	for (let t of e.tabs.filter(isTerminalSurfaceTab)) {
		let e = l.get(t.parentTabId) ?? [];
		e.push(t), l.set(t.parentTabId, e);
	}
	return [...l.entries()].map(([l, u], d) => {
		let f = toWebTerminalSurfaceTabId(l), p = r[f], m = s?.parentTabId === l ? s.leafId : void 0, h = (m ? u.find((e) => e.leafId === m) : void 0) ?? (p?.activeLeafId ? u.find((e) => e.leafId === p.activeLeafId) : void 0) ?? u.find((e) => e.isActive) ?? u[0], g = (e) => c === "local" ? e : toRemoteRuntimePtyId(e, t), v = retainPendingTerminalBindings(u, p, Object.fromEntries(u.filter((e) => e.status === "ready").map((e) => [e.leafId, g(e.terminal)])), t, c), y = normalizeTerminalLayoutPtyOwnership(chooseRemoteTerminalLayout(u, v, p, m)).snapshot, b = Object.entries(y.ptyIdsByLeafId ?? {}), x = b.map(([, e]) => e), S;
		if (b.length < Object.keys(v).length) {
			let e = new Map(b.map(([e, t]) => [t, e])), t = new Map(u.map((e) => [e.leafId, e]));
			S = /* @__PURE__ */ new Map();
			for (let [n, r] of Object.entries(v)) {
				let i = e.get(r);
				if (i && i !== n) {
					let e = t.get(i);
					e && S.set(n, e);
				}
			}
		}
		let C = h.launchAgent ?? u.find((e) => e.launchAgent)?.launchAgent, w = resolvePaneAgentOwnerRecord({
			launchAgent: C,
			hookAgent: h.agentStatus?.agentType,
			siblingHookAgent: u.find((e) => e.agentStatus?.agentType)?.agentStatus?.agentType
		}), T = n.get(f) ?? n.get(l) ?? u.map((e) => n.get(toWebTerminalSurfaceTabId(e.id))).find((e) => !!e), E = h.title.trim() || u[0]?.title.trim() || "", D = E === "" || h.status === "pending-handle" && E === "Terminal", O = T?.title?.trim() || T?.defaultTitle?.trim() || "", k = normalizeCompatibleAgentTitleForOwner(D && O || E || "Terminal", w?.agent, { ownerIsLaunch: w?.ownerIsLaunch === !0 }), A = h.quickCommandLabel?.trim() || u.find((e) => e.quickCommandLabel?.trim())?.quickCommandLabel?.trim() || T?.quickCommandLabel?.trim(), j = h.startupCwd || u.find((e) => e.startupCwd)?.startupCwd, M = u.find((e) => e.color != null), N = T ? T.color ?? null : M?.color ?? null, P = T ? T.isPinned === !0 : u.some((e) => e.isPinned), F = u.find((e) => e.viewMode), I = T ? T.viewMode : F?.viewMode;
		return {
			tab: {
				id: f,
				ptyId: v[h.leafId] ?? null,
				worktreeId: e.worktree,
				title: k,
				defaultTitle: T?.defaultTitle ?? k,
				...T?.generatedTitle ? { generatedTitle: T.generatedTitle } : {},
				...T?.aiVaultTitle ? { aiVaultTitle: T.aiVaultTitle } : {},
				...T?.recovery ? { recovery: T.recovery } : {},
				...A ? { quickCommandLabel: A } : {},
				...j ? { startupCwd: j } : {},
				customTitle: T?.customTitle ?? null,
				color: N,
				isPinned: P,
				...I ? { viewMode: I } : {},
				sortOrder: i + d,
				createdAt: T?.createdAt ?? o + d,
				...C ? { launchAgent: C } : {}
			},
			hostTabId: l,
			ptyIds: x,
			layout: y,
			...S ? { retainedSurfaceByPrunedLeafId: S } : {}
		};
	});
}
function prepareWebSessionTabsSnapshotBase(e, t, n, r, i, o, s) {
	let c = (e) => e.type === "terminal" ? e.parentTabId : e.id;
	reconcileWebSessionCloseIntents({ environmentId: n }, r, new Set(t.tabs.map((e) => c(e))));
	let l = t.tabs.some((e) => isWebSessionCloseIntentPending({ environmentId: n }, r, c(e), i)) ? {
		...t,
		tabs: t.tabs.filter((e) => !isWebSessionCloseIntentPending({ environmentId: n }, r, c(e), i))
	} : t, u = peekWebSessionFocusIntent({ environmentId: n }, r), f = u?.hostTabId ?? null, p = f === null ? null : u?.leafId ? l.tabs.find((e) => e.type === "terminal" && e.leafId === u.leafId && (e.id === f || e.parentTabId === f)) ?? null : l.tabs.find((e) => e.id === f || e.type === "terminal" && e.parentTabId === f || e.type === "browser" && e.browserPageId === f) ?? null, m = u?.expectedCurrentLocalTabId, h = resolveWebSessionVisibleTabId(e, r), g = p && (m === void 0 || m === h) ? p : null, v = l.navigationIntent === "follow" ? l.tabs.find((e) => e.id === l.activeTabId) ?? null : null, y = g ?? v, x = y !== null;
	p && clearWebSessionFocusIntent({ environmentId: n }, r);
	let S = e.tabsByWorktree[r] ?? [], C = new Map(S.map((e) => [e.id, e])), w = s?.contentScope !== "agent-session", T = w ? l.tabs.filter(isTerminalSurfaceTab) : [], E = T.filter(isReadyTerminalTab), O = new Set(E.map((e) => toRemoteRuntimePtyId(e.terminal, n))), k = new Set(T.map((e) => toWebTerminalSurfaceTabId(e.parentTabId))), j = new Set(T.map((e) => e.parentTabId)), M = /* @__PURE__ */ new Map();
	for (let e of S) {
		if (isMirroredTerminalSurfaceId(e.id)) continue;
		if (j.has(e.id)) {
			M.set(e.id, e.id);
			continue;
		}
		let t = {
			environmentId: n,
			worktreeId: r,
			provisionalTabId: e.id
		}, i = resolveWebAgentSessionHandoff(t);
		i !== null && (j.has(i) || isWebAgentSessionHandoffPostCreateSnapshotConfirmed(t)) && M.set(e.id, i);
	}
	let N = new Set(M.keys()), P = new Set(l.tabs.flatMap((e) => e.type === "agent-session" && e.replacesSessionId ? [e.replacesSessionId] : [])), F = new Set((e.unifiedTabsByWorktree[r] ?? []).filter((e) => e.contentType === "terminal" && e.structuredSessionId && P.has(e.structuredSessionId)).map((e) => e.entityId)), I = (w ? S.filter((e) => !shouldReplaceTerminalTab(e, n, O, k, N)) : S).filter((e) => !F.has(e.id)), L = buildMirroredTerminalTabs(l, n, C, e.terminalLayoutsByTabId, I.length, i, g?.type === "terminal" ? {
		parentTabId: g.parentTabId,
		leafId: g.leafId
	} : void 0, s?.terminalPtyMode), R = L.map((e) => e.tab), z = new Set(I.map((e) => e.id)), B = I.length + R.length > 0 ? [...I, ...R] : null, V = new Set(R.map((e) => e.id)), H = new Set(S.filter((e) => !z.has(e.id)).map((e) => e.id));
	if (w && !isWebSessionTabsWorktreeRemovalFrame(l)) for (let t of collectUnhydratedMirroredTabRetractions({
		state: e,
		environmentId: n,
		worktreeId: r,
		nextHostTerminalTabIds: j,
		currentTerminalIds: new Set(C.keys()),
		batchContext: o
	})) H.add(t);
	let U = [...H].filter((e) => !V.has(e));
	for (let e of N) clearWebAgentSessionHandoff({
		environmentId: n,
		worktreeId: r,
		provisionalTabId: e
	});
	return {
		state: e,
		rawSnapshot: t,
		snapshot: l,
		environmentId: n,
		worktreeId: r,
		now: i,
		batchContext: o,
		options: s,
		focusIntent: u,
		matchingFocusIntentTab: p,
		callerFocusIntentTab: g,
		navigationIntentTab: y,
		honorSnapshotActiveFocus: x,
		currentTerminalTabs: S,
		existingTerminalById: C,
		reconcilesNonAgentTabs: w,
		terminalSurfaceTabs: T,
		readyTerminalTabs: E,
		nextRemotePtyIds: O,
		nextMirroredTerminalIds: k,
		provisionalHandoffHostTabIds: M,
		exactProvisionalHandoffs: N,
		retainedTerminalTabs: I,
		mirroredTerminalTabs: L,
		mirroredTerminalTabEntries: R,
		nextTerminalTabs: B,
		mirroredTerminalIds: V,
		removedTerminalIds: H,
		removedTerminalResourceIds: U
	};
}
function setFirst(e, t, n) {
	e.has(t) || e.set(t, n);
}
function buildWebSessionExistingTabIndex({ unifiedTabs: e }) {
	let t = null, n = () => {
		if (!t) {
			let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
			e.forEach((e, t) => {
				if (e.contentType === "editor") {
					let i = {
						position: t,
						tab: e
					};
					setFirst(n, e.id, i), setFirst(r, e.entityId, i);
				}
			}), t = {
				editorTabById: n,
				editorTabByFileId: r
			};
		}
		return t;
	};
	return { getEditorUnifiedTab: (e, t) => {
		let { editorTabById: r, editorTabByFileId: i } = n(), a = r.get(t), o = i.get(e);
		return a && o ? a.position <= o.position ? a.tab : o.tab : a?.tab ?? o?.tab ?? null;
	} };
}
function chooseTargetGroupId(e, t) {
	let n = e.groupsByWorktree[t.worktree] ?? [], r = collectLayoutGroupIds(e.layoutByWorktree[t.worktree]), i = (e) => !!(e && (r.size === 0 || r.has(e))), a = n.find((e) => e.id === t.activeGroupId && i(e.id)) ?? n.find((n) => n.id === e.activeGroupIdByWorktree[t.worktree] && i(n.id)) ?? n.find((e) => i(e.id)), o = r.values().next().value;
	return a?.id ?? o ?? t.activeGroupId ?? `web-session-tabs:${t.worktree}`;
}
function collectLayoutGroupIds(e) {
	let t = /* @__PURE__ */ new Set(), n = (e) => {
		if (e) {
			if (e.type === "leaf") {
				t.add(e.groupId);
				return;
			}
			n(e.first), n(e.second);
		}
	};
	return n(e), t;
}
function buildHostGroupIdByTabId(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e ?? []) {
		for (let e of n.tabOrder) t.set(e, n.id);
		n.activeTabId && t.set(n.activeTabId, n.id);
	}
	return t;
}
function pruneTabGroupLayout(e, t) {
	if (!e) return null;
	if (e.type === "leaf") return t.has(e.groupId) ? e : null;
	let n = pruneTabGroupLayout(e.first, t), r = pruneTabGroupLayout(e.second, t);
	return n && r ? {
		...e,
		first: n,
		second: r
	} : n ?? r;
}
function dropTabGroupLayoutGroups(e, t) {
	if (!e) return null;
	if (e.type === "leaf") return t.has(e.groupId) ? null : e;
	let n = dropTabGroupLayoutGroups(e.first, t), r = dropTabGroupLayoutGroups(e.second, t);
	return n && r ? {
		...e,
		first: n,
		second: r
	} : n ?? r;
}
function appendTabGroupLayout(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = dropTabGroupLayoutGroups(t, collectLayoutGroupIds(e));
	return n ? {
		type: "split",
		direction: "horizontal",
		first: e,
		second: n
	} : e;
}
function tabGroupLayoutEqual(e, t) {
	return !e || !t ? !e && !t : e.type === t.type ? e.type === "leaf" ? t.type === "leaf" && e.groupId === t.groupId : t.type === "split" && e.direction === t.direction && e.ratio === t.ratio && tabGroupLayoutEqual(e.first, t.first) && tabGroupLayoutEqual(e.second, t.second) : !1;
}
function mapHostRecentTabIds(e, t, n) {
	if (!e || e.length === 0) return [];
	let r = new Set(n);
	return sanitizeRecentTabIds(e.map((e) => t.get(e) ?? "").filter(Boolean), [...r]);
}
var cachedBrowserClientHostId = null;
function readBrowserClientHostId() {
	if (cachedBrowserClientHostId !== null) return cachedBrowserClientHostId;
	let e = globalThis.api;
	try {
		cachedBrowserClientHostId = e?.browser?.readClientHostId?.() ?? null;
	} catch {
		cachedBrowserClientHostId = null;
	}
	return cachedBrowserClientHostId;
}
function sameRuntimeBrowserPlacement(e, t) {
	return e.kind === t.kind && (e.kind === "server" || t.kind === "client" && e.browserHostClientId === t.browserHostClientId && e.browserHostGeneration === t.browserHostGeneration && e.pageHostGeneration === t.pageHostGeneration);
}
function terminalTabEqual(e, t) {
	return e.id === t.id && e.ptyId === t.ptyId && e.worktreeId === t.worktreeId && e.title === t.title && e.defaultTitle === t.defaultTitle && e.quickCommandLabel === t.quickCommandLabel && e.startupCwd === t.startupCwd && e.generatedTitle === t.generatedTitle && e.aiVaultTitle?.agent === t.aiVaultTitle?.agent && e.aiVaultTitle?.sessionId === t.aiVaultTitle?.sessionId && e.aiVaultTitle?.title === t.aiVaultTitle?.title && e.customTitle === t.customTitle && e.color === t.color && e.sortOrder === t.sortOrder && e.createdAt === t.createdAt && e.generation === t.generation && e.shellOverride === t.shellOverride && e.launchAgent === t.launchAgent && e.pendingActivationSpawn === t.pendingActivationSpawn;
}
function sameTerminalTabs(e, t) {
	let n = e ?? [], r = t ?? [];
	return n.length === r.length ? n.every((e, t) => terminalTabEqual(e, r[t])) : !1;
}
function browserPageEqual(e, t) {
	return e.id === t.id && e.workspaceId === t.workspaceId && e.worktreeId === t.worktreeId && e.url === t.url && e.title === t.title && e.loading === t.loading && e.faviconUrl === t.faviconUrl && e.canGoBack === t.canGoBack && e.canGoForward === t.canGoForward && e.loadError?.code === t.loadError?.code && e.loadError?.description === t.loadError?.description && e.loadError?.validatedUrl === t.loadError?.validatedUrl && e.createdAt === t.createdAt && e.browserRuntimeEnvironmentId === t.browserRuntimeEnvironmentId && e.viewportPresetId === t.viewportPresetId;
}
function optionalRuntimeBrowserPlacementsEqual(e, t) {
	return e === void 0 ? t === void 0 : t !== void 0 && sameRuntimeBrowserPlacement(e, t);
}
function browserCertificateFailureEqual(e, t) {
	let n = e ?? null, r = t ?? null;
	return n === r ? !0 : !!(n && r && n.challengeId === r.challengeId && n.browserPageId === r.browserPageId && n.errorCode === r.errorCode && n.error === r.error && n.origin === r.origin && n.displayHost === r.displayHost && n.canProceed === r.canProceed && n.observedAt === r.observedAt);
}
function sameBrowserPages(e, t) {
	let n = e ?? [], r = t ?? [];
	return n.length === r.length ? n.every((e, t) => browserPageEqual(e, r[t])) : !1;
}
function browserWorkspaceEqual(e, t) {
	return e.id === t.id && e.worktreeId === t.worktreeId && e.label === t.label && e.sessionProfileId === t.sessionProfileId && e.activePageId === t.activePageId && sameStringArray(e.pageIds ?? [], t.pageIds ?? []) && e.url === t.url && e.title === t.title && e.loading === t.loading && e.faviconUrl === t.faviconUrl && e.canGoBack === t.canGoBack && e.canGoForward === t.canGoForward && e.loadError?.code === t.loadError?.code && e.loadError?.description === t.loadError?.description && e.loadError?.validatedUrl === t.loadError?.validatedUrl && e.createdAt === t.createdAt;
}
function sameBrowserTabs(e, t) {
	let n = e ?? [], r = t ?? [];
	return n.length === r.length ? n.every((e, t) => browserWorkspaceEqual(e, r[t])) : !1;
}
function buildTerminalUnifiedTab(e, t, n, r) {
	return {
		id: e.id,
		entityId: e.id,
		groupId: t,
		worktreeId: e.worktreeId,
		executionHostId: toRuntimeExecutionHostId(n),
		contentType: "terminal",
		label: e.title,
		...e.quickCommandLabel?.trim() ? { quickCommandLabel: e.quickCommandLabel.trim() } : {},
		...e.generatedTitle?.trim() ? { generatedLabel: e.generatedTitle.trim() } : {},
		...e.aiVaultTitle ? { aiVaultTitle: e.aiVaultTitle } : {},
		customLabel: e.customTitle,
		color: e.color,
		sortOrder: e.sortOrder,
		createdAt: e.createdAt,
		isPreview: !1,
		isPinned: e.isPinned === !0,
		...r ? { viewMode: r } : {}
	};
}
function buildBrowserUnifiedTab(e, t, n, r, i) {
	return {
		id: n?.id ?? t.id,
		entityId: e.id,
		groupId: r,
		worktreeId: e.worktreeId,
		executionHostId: toRuntimeExecutionHostId(i),
		contentType: "browser",
		label: e.title,
		customLabel: null,
		color: t.color === void 0 ? n?.color ?? null : t.color,
		sortOrder: e.createdAt,
		createdAt: e.createdAt,
		isPreview: !1,
		isPinned: t.isPinned === void 0 ? n?.isPinned === !0 : t.isPinned === !0
	};
}
function buildEditorUnifiedTab(e, t, n, r, i, a, o, s, c) {
	return {
		id: n,
		entityId: e.id,
		groupId: a,
		worktreeId: e.worktreeId,
		executionHostId: toRuntimeExecutionHostId(c),
		contentType: "editor",
		label: i,
		customLabel: null,
		color: t.color === void 0 ? r?.color ?? null : t.color,
		sortOrder: o,
		createdAt: s,
		isPreview: !1,
		isPinned: t.isPinned === void 0 ? r?.isPinned === !0 : t.isPinned === !0
	};
}
function buildMirroredEditorTabs(e, t, n, r, i, a, o, s, c) {
	return e.tabs.filter(isReadyEditorTab).map((l, u) => {
		let d = localEditorFileId(l), f = n.get(d), p = r.getEditorUnifiedTab(d, l.id), m = editorSourceFileId(l), h = i.get(l.id) ?? a, g = f?.isDirty === !0 && c(d), _ = {
			...f,
			id: d,
			filePath: l.filePath,
			relativePath: l.relativePath,
			worktreeId: e.worktree,
			language: l.language,
			isDirty: l.isDirty || g,
			runtimeEnvironmentId: t,
			mode: l.type === "markdown" ? l.mode : "edit",
			markdownPreviewSourceFileId: m,
			mirroredFromRuntimeSession: !0
		};
		return {
			file: _,
			hostTabId: l.id,
			unifiedTab: buildEditorUnifiedTab(_, l, l.id, p, l.title.trim() || l.relativePath || "File", h, o + u, p?.createdAt ?? s + o + u, t)
		};
	});
}
function findBrowserWorkspaceForRemotePage(e, t, n, r) {
	let i = e.browserTabsByWorktree[t] ?? [];
	for (let a of i) {
		let i = e.browserPagesByWorkspace[a.id] ?? [];
		for (let o of i) {
			let i = e.remoteBrowserPageHandlesByPageId[o.id];
			if (i?.environmentId === n && i.remotePageId === r) return {
				workspace: a,
				page: o,
				unifiedTab: (e.unifiedTabsByWorktree[t] ?? []).find((e) => e.contentType === "browser" && e.entityId === a.id) ?? null
			};
		}
	}
	return null;
}
function browserWorkspaceHasRemoteEnvironmentPage(e, t, n) {
	return (e.browserPagesByWorkspace[t.id] ?? []).some((t) => e.remoteBrowserPageHandlesByPageId[t.id]?.environmentId === n);
}
function browserWorkspaceHasClientHostedEnvironmentPage(e, t, n) {
	return (e.browserPagesByWorkspace[t.id] ?? []).some((t) => {
		let r = e.remoteBrowserPageHandlesByPageId[t.id];
		return r?.environmentId === n && (r.placement?.kind === "client" || r.stagedClientHosted === !0 || r.restoredClientHosted === !0);
	});
}
function resolveMirroredBrowserTitle(e, t) {
	let n = e.title.trim(), r = n === "" || n === e.url.trim() || n === "Browser";
	return t && r && e.url === t.url ? t.title : n || "Browser";
}
function clientHostsMirroredBrowserPage(e) {
	if (e.placement?.kind !== "client") return !1;
	let t = readBrowserClientHostId();
	return t !== null && e.placement.browserHostClientId === t;
}
function resolveMirroredBrowserPageContent(e, t) {
	return clientHostsMirroredBrowserPage(e) && t ? {
		url: t.url,
		title: t.title,
		loading: t.loading,
		canGoBack: t.canGoBack,
		canGoForward: t.canGoForward
	} : {
		url: e.url,
		title: resolveMirroredBrowserTitle(e, t),
		loading: e.loading,
		canGoBack: e.canGoBack,
		canGoForward: e.canGoForward
	};
}
function buildMirroredBrowserTabs(e, t, n, r, i, a, o) {
	let s = collectLayoutGroupIds(n.layoutByWorktree[e.worktree]), c = new Set((n.groupsByWorktree[e.worktree] ?? []).map((e) => e.id));
	return e.tabs.filter(isReadyBrowserTab).map((l, u) => {
		let d = findBrowserWorkspaceForRemotePage(n, e.worktree, t, l.browserPageId), f = d?.workspace.id ?? l.browserWorkspaceId, p = d?.page.id ?? l.browserPageId, m = d?.page.createdAt ?? o + a + u, h = peekWebSessionBrowserPlacementGroup({
			environmentId: t,
			worktreeId: e.worktree,
			remotePageId: l.browserPageId
		}), g = r.get(l.id) ?? i, _ = d?.unifiedTab?.groupId === g ? void 0 : d?.unifiedTab?.groupId, v = d && n.remoteBrowserPageHandlesByPageId[d.page.id]?.staged === !0 ? d.unifiedTab?.groupId ?? h : h ?? _, y = v && c.has(v) && (s.size === 0 || s.has(v)) ? v : void 0, b = y ?? g, x = resolveMirroredBrowserPageContent(l, d?.page), S = {
			id: p,
			workspaceId: f,
			worktreeId: e.worktree,
			...x,
			faviconUrl: d?.page.faviconUrl ?? null,
			loadError: (l.placement?.kind === "client" ? d?.page.loadError : l.loadError) ?? null,
			createdAt: m,
			browserRuntimeEnvironmentId: t,
			viewportPresetId: d?.page.viewportPresetId ?? null
		}, C = d && browserPageEqual(d.page, S) ? d.page : S, w = {
			id: f,
			worktreeId: e.worktree,
			label: d?.workspace.label,
			sessionProfileId: d?.workspace.sessionProfileId ?? null,
			activePageId: C.id,
			pageIds: [C.id],
			url: C.url,
			title: C.title,
			loading: C.loading,
			faviconUrl: C.faviconUrl,
			canGoBack: C.canGoBack,
			canGoForward: C.canGoForward,
			loadError: C.loadError,
			createdAt: m
		};
		return {
			workspace: w,
			page: C,
			certificateFailure: l.certificateFailure ?? null,
			remotePageId: l.browserPageId,
			...l.placement ? { placement: l.placement } : {},
			unifiedTab: buildBrowserUnifiedTab(w, l, d?.unifiedTab ?? null, b, t),
			hostTabId: l.id,
			...y ? { clientGroupId: y } : {}
		};
	});
}
function openFileEqual(e, t) {
	return e.id === t.id && e.filePath === t.filePath && e.relativePath === t.relativePath && e.worktreeId === t.worktreeId && e.language === t.language && e.isDirty === t.isDirty && e.runtimeEnvironmentId === t.runtimeEnvironmentId && e.markdownPreviewSourceFileId === t.markdownPreviewSourceFileId && e.markdownPreviewAnchor === t.markdownPreviewAnchor && e.isPreview === t.isPreview && e.isUntitled === t.isUntitled && e.deleteUntouchedOnClose === t.deleteUntouchedOnClose && e.externalMutation === t.externalMutation && e.mirroredFromRuntimeSession === t.mirroredFromRuntimeSession && e.mode === t.mode;
}
function sameOpenFiles(e, t) {
	return e.length === t.length ? e.every((e, n) => openFileEqual(e, t[n])) : !1;
}
function webSessionOpenFilesForWorktree(e, t, n) {
	if (!n) return e.openFiles.filter((e) => e.worktreeId === t);
	let r = n.openFilesIndex;
	if (!r || r.source !== e.openFiles) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e.openFiles) {
			let e = t.get(n.worktreeId) ?? [];
			e.push(n), t.set(n.worktreeId, e);
		}
		r = {
			source: e.openFiles,
			byWorktree: t
		}, n.openFilesIndex = r;
	}
	return r.byWorktree.get(t) ?? [];
}
function advanceWebSessionOpenFilesIndex(e, t, n) {
	let r = e?.openFilesIndex;
	if (!r || r.source === t) return;
	let i = [];
	for (let e of t) e.worktreeId === n && i.push(e);
	r.byWorktree.set(n, i), r.source = t;
}
function firstOpenFileByIdForWorktree(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.has(n.id) || t.set(n.id, n);
	return t;
}
function tabEqual(e, t) {
	return e.id === t.id && e.entityId === t.entityId && e.groupId === t.groupId && e.worktreeId === t.worktreeId && e.executionHostId === t.executionHostId && e.contentType === t.contentType && e.agentSessionAgent === t.agentSessionAgent && e.label === t.label && e.generatedLabel === t.generatedLabel && e.aiVaultTitle?.agent === t.aiVaultTitle?.agent && e.aiVaultTitle?.sessionId === t.aiVaultTitle?.sessionId && e.aiVaultTitle?.title === t.aiVaultTitle?.title && e.customLabel === t.customLabel && e.color === t.color && e.sortOrder === t.sortOrder && e.createdAt === t.createdAt && e.isPreview === t.isPreview && e.isPinned === t.isPinned;
}
function sameUnifiedTabs(e, t) {
	let n = e ?? [], r = t ?? [];
	return n.length === r.length ? n.every((e, t) => tabEqual(e, r[t])) : !1;
}
function groupEqual(e, t) {
	return e.id === t.id && e.worktreeId === t.worktreeId && e.activeTabId === t.activeTabId && sameStringArray(e.tabOrder, t.tabOrder) && sameStringArray(e.recentTabIds ?? [], t.recentTabIds ?? []);
}
function sameGroups(e, t) {
	let n = e ?? [], r = t ?? [];
	return n.length === r.length ? n.every((e, t) => groupEqual(e, r[t])) : !1;
}
function toVisibleTabType(e) {
	return e.contentType === "agent-session" ? "agent-session" : e.contentType === "browser" || e.contentType === "terminal" ? e.contentType : "editor";
}
function prepareWebSessionTabsSnapshotBrowser(e) {
	let { state: t, snapshot: n, environmentId: r, worktreeId: i, now: a, mirroredTerminalTabEntries: o, mirroredTerminalIds: s, removedTerminalIds: c, reconcilesNonAgentTabs: l, batchContext: u } = e, d = chooseTargetGroupId(t, n), f = buildHostGroupIdByTabId(n.tabGroups), p = t.unifiedTabsByWorktree[i] ?? [], m = new Set(n.tabs.filter((e) => e.type === "agent-session").map((e) => e.sessionId)), h = buildWebSessionExistingTabIndex({ unifiedTabs: p }), g = l ? n.tabs.filter(isReadyBrowserTab) : [], _ = new Set(g.map((e) => e.browserPageId)), v = buildMirroredBrowserTabs(n, r, t, f, d, o.length, a), y = new Set(v.map((e) => e.workspace.id)), b = t.browserTabsByWorktree[i] ?? [], x = new Set((l ? b : []).filter((e) => y.has(e.id) ? !0 : !browserWorkspaceHasRemoteEnvironmentPage(t, e, r) || (t.browserPagesByWorkspace[e.id] ?? []).some((e) => {
		let n = t.remoteBrowserPageHandlesByPageId[e.id];
		return n?.staged === !0 || n?.restoredFromSession === !0;
	}) || !hostSnapshotAffirmsClientHostedPages(n) && browserWorkspaceHasClientHostedEnvironmentPage(t, e, r) ? !1 : !(t.browserPagesByWorkspace[e.id] ?? []).some((e) => {
		let n = t.remoteBrowserPageHandlesByPageId[e.id];
		return n?.environmentId === r && _.has(n.remotePageId);
	})).map((e) => e.id)), S = b.filter((e) => !x.has(e.id)), C = S.length + v.length > 0 ? [...S, ...v.map((e) => e.workspace)] : null, w = l ? n.tabs.filter(isReadyEditorTab) : [], T = webSessionOpenFilesForWorktree(t, i, u), E = buildMirroredEditorTabs(n, r, firstOpenFileByIdForWorktree(T), h, f, d, o.length + v.length, a, (e) => t.editorDrafts?.[e] !== void 0), D = buildMirroredAgentTabs(n, f, d, o.length + v.length + E.length, p, a), O = new Set(E.map((e) => e.file.id)), k = new Set(E.map((e) => e.hostTabId)), A = new Set((l ? T : []).filter((e) => e.runtimeEnvironmentId === r && (e.mode === "edit" || e.mode === "markdown-preview") && e.mirroredFromRuntimeSession === !0 && !O.has(e.id)).map((e) => e.id)), j = (e) => e.runtimeEnvironmentId === r && (A.has(e.id) || O.has(e.id)), M = T.filter(j).length, N = new Set(T.filter((e) => !j(e)).map((e) => e.id));
	for (let e of O) N.add(e);
	let P = E.map((e) => e.file), F = (() => {
		if (M === 0 && P.length === 0) return t.openFiles;
		let e = [...t.openFiles.filter((e) => !(e.worktreeId === i && e.runtimeEnvironmentId === r && (A.has(e.id) || O.has(e.id)))), ...P];
		return sameOpenFiles(t.openFiles, e) ? t.openFiles : e;
	})();
	advanceWebSessionOpenFilesIndex(u, F, i);
	let I = p.filter((e) => e.contentType === "agent-session" ? !m.has(e.entityId) && shouldRetainStructuredAgentSessionLaunchTab(i, e.entityId) : e.contentType === "browser" ? !x.has(e.entityId) && !y.has(e.entityId) : e.contentType === "editor" ? !A.has(e.entityId) && !O.has(e.entityId) && !k.has(e.id) : e.contentType === "terminal" ? c.has(e.entityId) || c.has(e.id) ? !1 : !s.has(e.entityId) && !s.has(e.id) : !0), L = new Map(p.filter((e) => e.contentType === "terminal" && e.viewMode).map((e) => [e.id, e.viewMode]));
	return {
		...e,
		targetGroupId: d,
		hostGroupIdByTabId: f,
		currentUnifiedTabs: p,
		existingTabIndex: h,
		readyBrowserTabs: g,
		nextRemoteBrowserPageIds: _,
		mirroredBrowserTabs: v,
		mirroredBrowserWorkspaceIds: y,
		currentBrowserTabs: b,
		removedBrowserWorkspaceIds: x,
		retainedBrowserTabs: S,
		nextBrowserTabs: C,
		readyEditorTabs: w,
		worktreeOpenFiles: T,
		mirroredEditorTabs: E,
		mirroredAgentTabs: D,
		mirroredEditorFileIds: O,
		mirroredEditorHostTabIds: k,
		removedEditorFileIds: A,
		nextWorktreeOpenFileIds: N,
		nextOpenFiles: F,
		retainedUnifiedTabs: I,
		existingViewModeByTabId: L
	};
}
function buildHostToLocalTabIdMap({ terminalSurfaces: e, terminalTabs: t, browserTabs: n, editorTabs: r, agentTabs: i }) {
	let a = /* @__PURE__ */ new Map(), o = new Set(t.map((e) => e.id));
	for (let t of e) {
		let e = toWebTerminalSurfaceTabId(t.parentTabId);
		o.has(e) && (a.set(t.parentTabId, e), a.set(t.id, e));
	}
	for (let e of n) a.set(e.hostTabId, e.unifiedTab.id), a.set(e.unifiedTab.id, e.unifiedTab.id);
	for (let e of r) a.set(e.hostTabId, e.unifiedTab.id);
	for (let e of i) a.set(e.hostTabId, e.unifiedTab.id);
	return a;
}
function updateHostSessionTabIdMappings(e) {
	clearHostSessionTabIdMappings(e.environmentId, e.worktreeId);
	let t = new Set(e.terminalTabs.map((e) => e.id));
	for (let n of e.terminalSurfaces) {
		let r = toWebTerminalSurfaceTabId(n.parentTabId);
		t.has(r) && setHostSessionTabIdMapping({
			...e,
			tabId: r
		}, n.parentTabId);
	}
	for (let t of e.browserTabs) setHostSessionTabIdMapping({
		...e,
		tabId: t.unifiedTab.id
	}, t.hostTabId);
	for (let t of e.editorTabs) setHostSessionTabIdMapping({
		...e,
		tabId: t.unifiedTab.id
	}, t.hostTabId);
	for (let t of e.agentTabs) setHostSessionTabIdMapping({
		...e,
		tabId: t.unifiedTab.id
	}, t.hostTabId);
}
function retainClientPlacedMirroredTabs(e) {
	return e.groups.map((t) => {
		let n = t.tabOrder.filter((n) => e.validUnifiedTabIds.has(n) && (!e.mirroredUnifiedIds.has(n) || e.clientGroupIdByLocalTabId.get(n) === t.id)), r = [...e.clientGroupIdByLocalTabId].filter(([r, i]) => i === t.id && e.validUnifiedTabIds.has(r) && !n.includes(r)).map(([e]) => e), i = [...n, ...r], a = e.nextActiveUnifiedTabId && i.includes(e.nextActiveUnifiedTabId) ? e.nextActiveUnifiedTabId : t.activeTabId && i.includes(t.activeTabId) ? t.activeTabId : i[0] ?? null;
		return {
			...t,
			tabOrder: i,
			activeTabId: a,
			recentTabIds: a ? pushRecentTabId(sanitizeRecentTabIds(t.recentTabIds, i), a) : []
		};
	});
}
function buildMirroredHostGroups({ currentGroups: e, hostGroups: t, hostToLocalTabId: n, mirroredUnifiedIds: r, nextActiveUnifiedTabId: i, now: a, validUnifiedTabIds: o, environmentId: s, worktreeId: c, clientGroupIdByLocalTabId: l }) {
	let u = retainClientPlacedMirroredTabs({
		groups: e,
		mirroredUnifiedIds: r,
		validUnifiedTabIds: o,
		clientGroupIdByLocalTabId: l,
		nextActiveUnifiedTabId: i
	}), d = new Map(u.map((e) => [e.id, e])), f = [], p = /* @__PURE__ */ new Set();
	for (let e of t) {
		let t = d.get(e.id), r = e.tabOrder.map((e) => n.get(e)).filter((e) => e !== void 0 && o.has(e) && !l.has(e)), u = new Set(r), m = [...t?.tabOrder.filter((e) => !u.has(e)) ?? [], ...r], h = resolveWebSessionReorderedOrder({ environmentId: s }, c, e.id, m, a);
		if (h.length === 0) continue;
		let g = e.activeTabId === null ? null : n.get(e.activeTabId) ?? null, _ = i && h.includes(i) ? i : g && h.includes(g) ? g : t?.activeTabId && h.includes(t.activeTabId) ? t.activeTabId : h[0] ?? null;
		f.push({
			id: e.id,
			worktreeId: c,
			tabOrder: h,
			activeTabId: _,
			recentTabIds: _ ? pushRecentTabId(mapHostRecentTabIds(e.recentTabIds, n, h), _) : []
		}), p.add(e.id);
	}
	for (let e of u) !p.has(e.id) && (e.tabOrder.length > 0 || isWebSessionBrowserPlacementGroupReserved({
		worktreeId: c,
		groupId: e.id
	})) && f.push(e);
	return f.length > 0 ? f : null;
}
function prepareWebSessionTabsSnapshotUnified(e) {
	let { state: t, snapshot: n, environmentId: r, worktreeId: i, navigationIntentTab: a, honorSnapshotActiveFocus: o, terminalSurfaceTabs: s, mirroredTerminalTabs: c, mirroredTerminalTabEntries: l, nextTerminalTabs: u, mirroredBrowserTabs: d, mirroredEditorTabs: f, mirroredAgentTabs: p, readyBrowserTabs: m, readyEditorTabs: h, nextBrowserTabs: g, nextWorktreeOpenFileIds: v, retainedUnifiedTabs: y, existingViewModeByTabId: b, hostGroupIdByTabId: x, targetGroupId: S } = e, C = c.map((e) => buildTerminalUnifiedTab(e.tab, x.get(e.hostTabId) ?? S, r, e.tab.viewMode ?? b.get(e.tab.id))), w = d.map((e) => e.unifiedTab), T = f.map((e) => e.unifiedTab), E = p.map((e) => e.unifiedTab), D = [
		...C,
		...w,
		...T,
		...E
	], O = y.length + D.length > 0 ? [...y, ...D] : null, k = new Set(O?.map((e) => e.id) ?? []), A = s.find((e) => e.id === n.activeTabId)?.id ?? s.find((e) => e.isActive)?.id ?? null, j = s.find((e) => e.id === A)?.parentTabId ?? s.find((e) => e.isActive)?.parentTabId ?? null, M = A ? toWebTerminalSurfaceTabId(j ?? A) : null, N = m.find((e) => e.id === n.activeTabId) ?? m.find((e) => e.isActive) ?? null, F = N ? d.find((e) => e.remotePageId === N.browserPageId) ?? null : null, I = F?.unifiedTab.id ?? null, L = F?.workspace.id ?? null, R = h.find((e) => e.id === n.activeTabId) ?? h.find((e) => e.isActive) ?? null, z = R ? f.find((e) => e.hostTabId === R.id) ?? null : null, B = z?.file.id ?? null, V = z?.unifiedTab.id ?? null, H = n.tabs.filter(isAgentSessionTab).find((e) => e.id === n.activeTabId || e.isActive) ?? null, U = H ? p.find((e) => e.hostTabId === H.id)?.unifiedTab.id ?? null : null, W = a?.type === "terminal" ? toWebTerminalSurfaceTabId(a.parentTabId) : null, G = a?.type === "browser" ? d.find((e) => e.hostTabId === a.id || e.remotePageId === a.browserPageId) ?? null : null, K = a?.type === "markdown" || a?.type === "file" ? f.find((e) => e.hostTabId === a.id) ?? null : null, q = a?.type === "agent-session" ? p.find((e) => e.hostTabId === a.id) ?? null : null, J = t.activeTabIdByWorktree[i] && (u ?? []).some((e) => e.id === t.activeTabIdByWorktree[i]) ? t.activeTabIdByWorktree[i] : null, Y = o && a?.type === "terminal" ? W : null, X = Y ?? J ?? (n.activeTabType === "terminal" ? M ?? l[0]?.id : l[0]?.id) ?? null, Z = t.activeBrowserTabIdByWorktree[i] && (g ?? []).some((e) => e.id === t.activeBrowserTabIdByWorktree[i]) ? t.activeBrowserTabIdByWorktree[i] : null, Wo = o && a?.type === "browser" ? G?.workspace.id ?? null : null, Go = Wo ?? Z ?? (n.activeTabType === "browser" ? L ?? d[0]?.workspace.id : d[0]?.workspace.id) ?? null, Q = t.activeFileIdByWorktree[i], Ko = Q && v.has(Q) ? Q : null, qo = o ? K?.file.id ?? null : null, Jo = qo ?? Ko ?? (n.activeTabType === "markdown" || n.activeTabType === "file" ? B ?? f[0]?.file.id : f[0]?.file.id) ?? null, $ = resolveWebSessionVisibleTabId(t, i, O ?? []), Yo = $ && O?.find((e) => e.id === $ && e.contentType === "agent-session") ? $ : null, Xo = t.activeGroupIdByWorktree[i], Zo = $ == null && Xo != null && isWebSessionBrowserPlacementGroupReserved({
		worktreeId: i,
		groupId: Xo
	}) ? resolveWebSessionSiblingVisibleTabId(t, i, O ?? []) : null, Qo = o ? a?.type === "browser" ? G?.unifiedTab.id ?? null : a?.type === "terminal" ? Y : a?.type === "agent-session" ? q?.unifiedTab.id ?? null : a?.type === "markdown" || a?.type === "file" ? K?.unifiedTab.id ?? null : null : null, $o = Qo ?? $ ?? Zo ?? (n.activeTabType === "agent-session" ? U ?? E[0]?.id ?? X : n.activeTabType === "browser" ? I ?? d[0]?.unifiedTab.id ?? t.activeTabIdByWorktree[i] ?? X : n.activeTabType === "markdown" || n.activeTabType === "file" ? V ?? f[0]?.unifiedTab.id ?? t.activeTabIdByWorktree[i] ?? X : X), es = new Set(D.map((e) => e.id)), ts = buildHostToLocalTabIdMap({
		terminalSurfaces: s,
		terminalTabs: l,
		browserTabs: d,
		editorTabs: f,
		agentTabs: p
	});
	return updateHostSessionTabIdMappings({
		environmentId: r,
		worktreeId: i,
		terminalSurfaces: s,
		terminalTabs: l,
		browserTabs: d,
		editorTabs: f,
		agentTabs: p
	}), {
		...e,
		mirroredTerminalUnifiedTabs: C,
		mirroredBrowserUnifiedTabs: w,
		mirroredEditorUnifiedTabs: T,
		mirroredAgentUnifiedTabs: E,
		mirroredUnifiedTabs: D,
		nextUnifiedTabs: O,
		validUnifiedTabIds: k,
		activeHostTerminalId: A,
		activeMirroredTerminalId: M,
		activeHostBrowser: N,
		activeMirroredBrowser: F,
		activeMirroredBrowserTabId: I,
		activeMirroredBrowserWorkspaceId: L,
		activeHostEditor: R,
		activeMirroredEditor: z,
		activeMirroredEditorFileId: B,
		activeMirroredEditorTabId: V,
		activeHostAgent: H,
		activeMirroredAgentTabId: U,
		intentMirroredTerminalId: W,
		intentMirroredBrowser: G,
		intentMirroredEditor: K,
		intentMirroredAgent: q,
		currentActiveTerminalStillExists: J,
		intentTerminalId: Y,
		nextActiveTerminalId: X,
		currentActiveBrowserStillExists: Z,
		intentBrowserWorkspaceId: Wo,
		nextActiveBrowserWorkspaceId: Go,
		currentActiveEditorStillExists: Ko,
		intentEditorFileId: qo,
		nextActiveEditorFileId: Jo,
		currentVisibleUnifiedTabId: $,
		currentVisibleStructuredTabId: Yo,
		reservedEmptyPreviewFallbackTabId: Zo,
		intentUnifiedTabId: Qo,
		nextActiveUnifiedTabId: $o,
		mirroredUnifiedIds: es,
		hostToLocalTabId: ts
	};
}
function collectClientLayoutGroupIds(e) {
	let t = /* @__PURE__ */ new Set(), n = (e) => {
		if (e) {
			if (e.type === "leaf") {
				t.add(e.groupId);
				return;
			}
			n(e.first), n(e.second);
		}
	};
	return n(e), t;
}
function pruneClientTabGroupLayout(e, t) {
	if (!e) return null;
	if (e.type === "leaf") return t.has(e.groupId) ? e : null;
	let n = pruneClientTabGroupLayout(e.first, t), r = pruneClientTabGroupLayout(e.second, t);
	return n && r ? {
		...e,
		first: n,
		second: r
	} : n ?? r;
}
function reconcileClientOwnedTabPlacement(e) {
	let t = collectClientLayoutGroupIds(e.currentLayout), n = (t) => e.rekeyedTabIds.get(t) ?? t, r = /* @__PURE__ */ new Map(), i = [];
	for (let t of e.currentGroups) {
		let a = e.rekeyedTabIds.size === 0 ? t : {
			...t,
			tabOrder: t.tabOrder.map(n),
			activeTabId: t.activeTabId ? n(t.activeTabId) : t.activeTabId,
			recentTabIds: (t.recentTabIds ?? []).map(n)
		};
		r.set(t.id, {
			group: a,
			tabOrder: a.tabOrder.filter((t) => e.validUnifiedTabIds.has(t))
		}), i.push(t.id);
	}
	let a = (t) => {
		let n = r.get(t);
		if (n) return n;
		let a = {
			group: {
				id: t,
				worktreeId: e.worktreeId,
				activeTabId: null,
				tabOrder: [],
				recentTabIds: []
			},
			tabOrder: []
		};
		return r.set(t, a), i.push(t), a;
	}, o = e.currentActiveGroupId && (r.has(e.currentActiveGroupId) || t.has(e.currentActiveGroupId)) ? e.currentActiveGroupId : null, s = (e) => r.has(e) || t.has(e) ? e : o ?? i[0] ?? t.values().next().value ?? e, c = /* @__PURE__ */ new Set();
	for (let t of e.placementMoves) {
		if (!e.validUnifiedTabIds.has(t.tabId)) continue;
		let n = s(t.groupId);
		if (!n) continue;
		c.add(t.tabId);
		for (let e of r.values()) e.group.id !== n && (e.tabOrder = e.tabOrder.filter((e) => e !== t.tabId));
		let i = a(n);
		i.tabOrder.includes(t.tabId) || i.tabOrder.push(t.tabId);
	}
	for (let t of e.adoptedTabs) {
		if (c.has(t.tabId) || !e.validUnifiedTabIds.has(t.tabId)) continue;
		let n = s(t.groupId);
		if (!n) continue;
		let r = a(n);
		r.tabOrder.includes(t.tabId) || r.tabOrder.push(t.tabId);
	}
	let l = [];
	for (let t of i) {
		let n = r.get(t);
		if (!n) continue;
		let { group: i, tabOrder: a } = n, o = e.intentTabId && a.includes(e.intentTabId) ? e.intentTabId : null, s = i.activeTabId && !a.includes(i.activeTabId) ? i.activeTabId : null, c = s ? i.tabOrder.filter((e) => a.includes(e) || e === s) : null, u = o ?? (s && c ? pickNextActiveTab(c, i.recentTabIds, s) ?? a[0] ?? null : i.activeTabId ?? a[0] ?? null), d = u && a.includes(u) ? u : a[0] ?? null;
		l.push({
			...i,
			tabOrder: a,
			activeTabId: d,
			recentTabIds: d ? pushRecentTabId$1(sanitizeRecentTabIds$1(i.recentTabIds, a), d) : []
		});
	}
	let u = new Set(l.filter((t) => t.tabOrder.length === 0 && !e.isGroupReserved(t.id) && (r.get(t.id)?.group.tabOrder.length ?? 0) > 0).map((e) => e.id)), d = l.filter((n) => n.tabOrder.length > 0 || e.isGroupReserved(n.id) || t.has(n.id) && !u.has(n.id));
	d.length === 0 && l.length > 0 && (d = [l.find((t) => t.id === e.currentActiveGroupId) ?? l[0]]);
	let f = new Set(d.map((e) => e.id)), p = e.intentTabId ? d.find((t) => t.tabOrder.includes(e.intentTabId))?.id ?? null : null, m = e.reservedEmptyGroupFallbackTabId ? d.find((t) => t.tabOrder.includes(e.reservedEmptyGroupFallbackTabId))?.id ?? null : null, g = p ?? m ?? (e.currentActiveGroupId && f.has(e.currentActiveGroupId) ? e.currentActiveGroupId : d.find((e) => t.has(e.id))?.id ?? d[0]?.id ?? null), _ = pruneClientTabGroupLayout(e.currentLayout, f), v = collectClientLayoutGroupIds(_);
	for (let e of d) if (!v.has(e.id)) {
		let t = {
			type: "leaf",
			groupId: e.id
		};
		_ = _ ? {
			type: "split",
			direction: "horizontal",
			first: _,
			second: t
		} : t;
	}
	return {
		groups: d.length > 0 ? d : null,
		activeGroupId: g,
		layout: _
	};
}
function prepareWebSessionTabsSnapshotGroups(e) {
	let { state: t, snapshot: n, environmentId: r, worktreeId: i, now: a, options: o, terminalSurfaceTabs: s, mirroredBrowserTabs: c, mirroredEditorTabs: l, mirroredUnifiedIds: u, mirroredUnifiedTabs: d, nextUnifiedTabs: f, validUnifiedTabIds: p, nextActiveUnifiedTabId: m, retainedUnifiedTabs: h, targetGroupId: g, hostToLocalTabId: v, provisionalHandoffHostTabIds: y, existingTabIndex: b, honorSnapshotActiveFocus: x, intentUnifiedTabId: S, reservedEmptyPreviewFallbackTabId: C } = e, w = t.groupsByWorktree[i] ?? [], T = new Map(c.flatMap((e) => e.clientGroupId ? [[e.unifiedTab.id, e.clientGroupId]] : [])), E = (() => {
		if (!f || w.length === 0 && !o?.preserveLocalLayout) return null;
		let e = /* @__PURE__ */ new Map();
		for (let [t, n] of y) {
			let r = toWebTerminalSurfaceTabId(n);
			r !== t && e.set(t, r);
		}
		for (let t of l) {
			let n = b.getEditorUnifiedTab(t.file.id, t.hostTabId);
			n && n.id !== t.unifiedTab.id && e.set(n.id, t.unifiedTab.id);
		}
		let n = new Set(w.flatMap((t) => t.tabOrder.map((t) => e.get(t) ?? t))), a = c.flatMap((e) => {
			let t = peekWebSessionBrowserPlacementGroup({
				environmentId: r,
				worktreeId: i,
				remotePageId: e.remotePageId
			});
			return t ? [{
				tabId: e.unifiedTab.id,
				groupId: e.clientGroupId ?? t
			}] : [];
		});
		for (let e of new Set(s.map((e) => e.parentTabId))) {
			let t = peekWebSessionTerminalPlacementGroup({
				environmentId: r,
				worktreeId: i,
				hostTabId: e
			});
			t && a.push({
				tabId: toWebTerminalSurfaceTabId(e),
				groupId: t
			});
		}
		return reconcileClientOwnedTabPlacement({
			currentGroups: w,
			worktreeId: i,
			validUnifiedTabIds: p,
			adoptedTabs: d.filter((e) => !n.has(e.id)).map((e) => ({
				tabId: e.id,
				groupId: T.get(e.id) ?? e.groupId
			})),
			placementMoves: a,
			rekeyedTabIds: e,
			intentTabId: x ? S ?? null : null,
			reservedEmptyGroupFallbackTabId: C,
			currentActiveGroupId: t.activeGroupIdByWorktree[i] ?? null,
			currentLayout: t.layoutByWorktree[i] ?? null,
			isGroupReserved: (e) => isWebSessionBrowserPlacementGroupReserved({
				worktreeId: i,
				groupId: e
			})
		});
	})(), D = (() => {
		if (E) return E.groups;
		if (!f || f.length === 0) return null;
		if (n.tabGroups && n.tabGroups.length > 0) return buildMirroredHostGroups({
			currentGroups: w,
			hostGroups: n.tabGroups,
			hostToLocalTabId: v,
			mirroredUnifiedIds: u,
			nextActiveUnifiedTabId: m,
			now: a,
			validUnifiedTabIds: p,
			environmentId: r,
			worktreeId: i,
			clientGroupIdByLocalTabId: T
		});
		let e = retainClientPlacedMirroredTabs({
			groups: w,
			mirroredUnifiedIds: u,
			validUnifiedTabIds: p,
			clientGroupIdByLocalTabId: T,
			nextActiveUnifiedTabId: m
		}), t = e.find((e) => e.id === g) ?? {
			id: g,
			worktreeId: i,
			activeTabId: null,
			tabOrder: [],
			recentTabIds: []
		}, o = [...t.tabOrder.filter((e) => p.has(e)), ...d.filter((e) => !T.has(e.id)).map((e) => e.id)], s = m && o.includes(m) ? m : t.activeTabId && o.includes(t.activeTabId) ? t.activeTabId : o[0] ?? null, c = {
			...t,
			worktreeId: i,
			tabOrder: o,
			activeTabId: s,
			recentTabIds: s ? pushRecentTabId(sanitizeRecentTabIds(t.recentTabIds, o), s) : []
		};
		return (e.some((e) => e.id === g) ? e.map((e) => e.id === g ? c : e) : [...e, c]).filter((e) => e.id === g || e.tabOrder.length > 0 || isWebSessionBrowserPlacementGroupReserved({
			worktreeId: i,
			groupId: e.id
		}));
	})(), O = (() => {
		let e = t.tabBarOrderByWorktree[i] ?? [], r = new Set([...h.map((e) => e.id), ...d.map((e) => e.id)]), a = n.tabGroups?.flatMap((e) => e.tabOrder.map((e) => v.get(e)).filter((e) => e !== void 0 && r.has(e))) ?? [], o = [], s = /* @__PURE__ */ new Set(), c = (e) => {
			r.has(e) && !s.has(e) && (s.add(e), o.push(e));
		};
		for (let t of e) c(t);
		let l = a.length > 0 ? a : d.map((e) => e.id);
		for (let e of l) c(e);
		return o;
	})();
	return {
		...e,
		currentGroups: w,
		clientGroupIdByLocalTabId: T,
		clientOwnedPlacement: E,
		nextGroups: D,
		nextTabBarOrder: O
	};
}
function applyTerminalRecordUpdates(e) {
	let { state: t, batchContext: n, mirroredTerminalTabs: r, removedTerminalResourceIds: i, removedTerminalIds: a, exactProvisionalHandoffs: o } = e, s = t.ptyIdsByTabId;
	for (let e of i) s[e] && (s = s === t.ptyIdsByTabId ? writableWebSessionTabsRecord(t, "ptyIdsByTabId", n) : s, delete s[e]);
	for (let { tab: e, ptyIds: i } of r) {
		if (i.length === 0) {
			s[e.id] && (s = s === t.ptyIdsByTabId ? writableWebSessionTabsRecord(t, "ptyIdsByTabId", n) : s, delete s[e.id]);
			continue;
		}
		sameStringArray(s[e.id] ?? [], i) || (s = s === t.ptyIdsByTabId ? writableWebSessionTabsRecord(t, "ptyIdsByTabId", n) : s, s[e.id] = i);
	}
	let c = t.terminalLayoutsByTabId;
	for (let e of i) c[e] && (c = c === t.terminalLayoutsByTabId ? writableWebSessionTabsRecord(t, "terminalLayoutsByTabId", n) : c, delete c[e]);
	for (let { tab: e, layout: i } of r) terminalLayoutEqual(c[e.id], i) || (c = c === t.terminalLayoutsByTabId ? writableWebSessionTabsRecord(t, "terminalLayoutsByTabId", n) : c, c[e.id] = i);
	let l = t.localOnlyScrollbackByTabId;
	for (let e of i) l?.[e] && (l = l === t.localOnlyScrollbackByTabId ? writableWebSessionTabsRecord(t, "localOnlyScrollbackByTabId", n) : l, delete l[e]);
	let u = t.unreadTerminalTabs;
	for (let e of a) u[e] && (u = u === t.unreadTerminalTabs ? writableWebSessionTabsRecord(t, "unreadTerminalTabs", n) : u, delete u[e]);
	let d = t.pendingStartupByTabId ?? {}, f = d, p = t.automaticAgentResumeClaimsByTabId ?? {}, m = p;
	for (let e of o) f[e] && (f = f === d ? writableWebSessionTabsRecord(t, "pendingStartupByTabId", n) : f, delete f[e]), m[e] && (m = m === p ? writableWebSessionTabsRecord(t, "automaticAgentResumeClaimsByTabId", n) : m, delete m[e]);
	return {
		...e,
		nextPtyIdsByTabId: s,
		nextTerminalLayoutsByTabId: c,
		nextLocalOnlyScrollbackByTabId: l,
		nextUnreadTerminalTabs: u,
		pendingStartupByTabId: d,
		nextPendingStartupByTabId: f,
		automaticAgentResumeClaimsByTabId: p,
		nextAutomaticAgentResumeClaimsByTabId: m
	};
}
function applyBrowserRecordUpdates(e) {
	let { state: t, batchContext: n, environmentId: r, worktreeId: i, mirroredBrowserTabs: a, removedBrowserWorkspaceIds: o, retainedBrowserTabs: s, nextBrowserTabs: c } = e, l = t.browserPagesByWorkspace, u = t.remoteBrowserPageHandlesByPageId, d = t.browserCertificateFailuresByPageId;
	if (o.size > 0) {
		let e = new Set(c?.map((e) => e.id) ?? []), r = new Set(a.map((e) => e.page.id));
		for (let e of s) for (let n of t.browserPagesByWorkspace[e.id] ?? []) r.add(n.id);
		for (let i of o) {
			let a = l[i] ?? [];
			!e.has(i) && l[i] && (l = l === t.browserPagesByWorkspace ? writableWebSessionTabsRecord(t, "browserPagesByWorkspace", n) : l, delete l[i]);
			for (let e of a) r.has(e.id) || (d[e.id] && (d = d === t.browserCertificateFailuresByPageId ? writableWebSessionTabsRecord(t, "browserCertificateFailuresByPageId", n) : d, delete d[e.id]), u[e.id] && (u = u === t.remoteBrowserPageHandlesByPageId ? writableWebSessionTabsRecord(t, "remoteBrowserPageHandlesByPageId", n) : u, delete u[e.id]));
		}
	}
	for (let { page: e, certificateFailure: o, remotePageId: s, placement: c } of a) {
		sameBrowserPages(l[e.workspaceId] ?? [], [e]) || (l = l === t.browserPagesByWorkspace ? writableWebSessionTabsRecord(t, "browserPagesByWorkspace", n) : l, l[e.workspaceId] = [e]);
		let a = u[e.id];
		(a?.environmentId !== r || a.remotePageId !== s || a.staged === !0 || a.restoredFromSession === !0 || !optionalRuntimeBrowserPlacementsEqual(a.placement, c)) && (u = u === t.remoteBrowserPageHandlesByPageId ? writableWebSessionTabsRecord(t, "remoteBrowserPageHandlesByPageId", n) : u, u[e.id] = {
			environmentId: r,
			remotePageId: s,
			...c ? { placement: c } : {}
		}), markWebSessionBrowserPlacementAdopted({
			environmentId: r,
			worktreeId: i,
			remotePageId: s
		}), c?.kind !== "client" && !browserCertificateFailureEqual(d[e.id], o) && (d = d === t.browserCertificateFailuresByPageId ? writableWebSessionTabsRecord(t, "browserCertificateFailuresByPageId", n) : d, o ? d[e.id] = o : delete d[e.id]);
	}
	return {
		...e,
		nextBrowserPagesByWorkspace: l,
		nextRemoteBrowserPageHandlesByPageId: u,
		nextBrowserCertificateFailuresByPageId: d
	};
}
function applyWorktreeRecordUpdates(e) {
	let { state: t, batchContext: n, worktreeId: r, nextTerminalTabs: i, nextBrowserTabs: a, nextUnifiedTabs: o, nextGroups: s, clientOwnedPlacement: c, retainedUnifiedTabs: l, mirroredUnifiedTabs: u, mirroredTerminalIds: d, nextTabBarOrder: f } = e, p = withWorktreeEntry(t, "tabsByWorktree", r, i, sameTerminalTabs, n), m = withWorktreeEntry(t, "browserTabsByWorktree", r, a, sameBrowserTabs, n), h = (() => {
		if (!c?.groups || !o) return o;
		let e = new Map(c.groups.flatMap((e) => e.tabOrder.map((t) => [t, e.id]))), t = !1, n = o.map((n) => {
			let r = e.get(n.id);
			return !r || r === n.groupId ? n : (t = !0, {
				...n,
				groupId: r
			});
		});
		return t ? n : o;
	})(), g = withWorktreeEntry(t, "unifiedTabsByWorktree", r, h, sameUnifiedTabs, n), _ = withWorktreeEntry(t, "groupsByWorktree", r, s, sameGroups, n);
	return {
		...e,
		nextTabsByWorktree: p,
		nextBrowserTabsByWorktree: m,
		placedUnifiedTabs: h,
		nextUnifiedTabsByWorktree: g,
		nextGroupsByWorktree: _,
		mirroredTerminalIds: d,
		retainedUnifiedTabs: l,
		mirroredUnifiedTabs: u,
		nextTabBarOrder: f
	};
}
function applyActiveStateUpdates(e) {
	let { state: t, snapshot: n, options: r, worktreeId: i, targetGroupId: a, nextGroups: o, clientOwnedPlacement: s, nextUnifiedTabs: c, nextTerminalTabs: l, nextWorktreeOpenFileIds: u, nextActiveUnifiedTabId: d, nextTabBarOrder: f, navigationIntentTab: p, honorSnapshotActiveFocus: m, intentMirroredAgent: h, activeMirroredAgentTabId: g, currentVisibleUnifiedTabId: _, currentVisibleStructuredTabId: v, currentActiveTerminalStillExists: y, currentActiveBrowserStillExists: b, currentActiveEditorStillExists: x, intentEditorFileId: S, nextActiveTerminalId: C, nextActiveBrowserWorkspaceId: w, nextActiveEditorFileId: T, intentTerminalId: E, intentBrowserWorkspaceId: D } = e, O = s ? s.activeGroupId : o?.find((e) => e.activeTabId === d)?.id ?? o?.find((e) => e.id === n.activeGroupId)?.id ?? o?.[0]?.id ?? null, k = o && t.activeGroupIdByWorktree[i] !== O ? withWorktreeEntry(t, "activeGroupIdByWorktree", i, O ?? a, (e, t) => e === t, e.batchContext) : t.activeGroupIdByWorktree, A = (() => {
		if (!o) return t.layoutByWorktree;
		if (s) {
			let n = s.layout ?? (O ? {
				type: "leaf",
				groupId: O
			} : null);
			return !n || tabGroupLayoutEqual(t.layoutByWorktree[i], n) ? t.layoutByWorktree : withWorktreeEntry(t, "layoutByWorktree", i, n, (e, t) => e === t, e.batchContext);
		}
		if (r?.preserveLocalLayout) return t.layoutByWorktree;
		let c = new Set(o.map((e) => e.id)), l = pruneTabGroupLayout(n.tabGroupLayout, c), u = {
			type: "leaf",
			groupId: O ?? a
		}, d = collectLayoutGroupIds(l ?? void 0), f = new Set(n.tabGroups?.map((e) => e.id) ?? []), p = new Set(o.map((e) => e.id).filter((e) => l ? !d.has(e) : n.tabGroups && n.tabGroups.length > 0 ? !f.has(e) : !1)), m = pruneTabGroupLayout(t.layoutByWorktree[i], p), h = appendTabGroupLayout(l ?? (n.tabGroups && n.tabGroups.length > 0 ? u : null), m) ?? (n.tabGroups && n.tabGroups.length > 0 ? u : t.layoutByWorktree[i] ? null : u);
		return !h || tabGroupLayoutEqual(t.layoutByWorktree[i], h) ? t.layoutByWorktree : withWorktreeEntry(t, "layoutByWorktree", i, h, (e, t) => e === t, e.batchContext);
	})(), j = withWorktreeEntry(t, "tabBarOrderByWorktree", i, f.length > 0 ? f : null, (e, t) => sameStringArray(e ?? [], t ?? []), e.batchContext), M = (t.activeTabIdByWorktree[i] ?? null) === (h?.unifiedTab.id ?? v ?? C) ? t.activeTabIdByWorktree : withWorktreeEntry(t, "activeTabIdByWorktree", i, h?.unifiedTab.id ?? v ?? C, (e, t) => (e ?? null) === t, e.batchContext, !1), N = (t.activeBrowserTabIdByWorktree[i] ?? null) === w ? t.activeBrowserTabIdByWorktree : withWorktreeEntry(t, "activeBrowserTabIdByWorktree", i, w, (e, t) => (e ?? null) === t, e.batchContext, !1), P = (t.activeFileIdByWorktree[i] ?? null) === T ? t.activeFileIdByWorktree : withWorktreeEntry(t, "activeFileIdByWorktree", i, T, (e, t) => (e ?? null) === t, e.batchContext, !1), F = t.activeWorktreeId === i, I = p?.type === "agent-session" && h ? "agent-session" : p?.type === "browser" && D ? "browser" : p?.type === "terminal" && E ? "terminal" : S ? "editor" : null, L = n.activeTabType === "agent-session" && g ? "agent-session" : n.activeTabType === "browser" && w ? "browser" : n.activeTabType === "terminal" && C ? "terminal" : (n.activeTabType === "markdown" || n.activeTabType === "file") && T ? "editor" : null, R = t.activeTabTypeByWorktree[i] ?? (F ? t.activeTabType : null), z = v === null ? R === "agent-session" && _ && c?.some((e) => e.id === _ && e.contentType === "agent-session") ? "agent-session" : R === "browser" && b ? "browser" : R === "editor" && x ? "editor" : R === "terminal" && y ? "terminal" : null : "agent-session", B = d && c ? c.find((e) => e.id === d) ?? null : null, V = B === null ? C ? "terminal" : w ? "browser" : T ? "editor" : "terminal" : toVisibleTabType(B), H = m ? I ?? z ?? L ?? V : z ?? L ?? V, U = t.activeTabId && (l ?? []).some((e) => e.id === t.activeTabId) ? t.activeTabId : null, W = t.activeFileId && u.has(t.activeFileId) ? t.activeFileId : null, G = F ? h?.unifiedTab.id ?? (n.activeTabType === "terminal" ? C : U ?? C) : t.activeTabId, K = F ? w : t.activeBrowserTabId, q = F ? n.activeTabType === "markdown" || n.activeTabType === "file" ? T : W ?? T : t.activeFileId, J = F ? H : t.activeTabType, Y = t.activeTabTypeByWorktree[i] === H ? t.activeTabTypeByWorktree : withWorktreeEntry(t, "activeTabTypeByWorktree", i, H, (e, t) => e === t, e.batchContext);
	return {
		...e,
		nextActiveGroupId: O,
		nextActiveGroupIdByWorktree: k,
		nextLayoutByWorktree: A,
		nextTabBarOrderByWorktree: j,
		nextActiveTabIdByWorktree: M,
		nextActiveBrowserTabIdByWorktree: N,
		nextActiveFileIdByWorktree: P,
		nextVisibleTabType: H,
		nextActiveTabId: G,
		nextActiveBrowserTabId: K,
		nextActiveFileId: q,
		nextActiveTabType: J,
		nextActiveTabTypeByWorktree: Y
	};
}
function recordPaneKeysForTabs(e, t, n, r = !1) {
	if (!e) return [];
	let i = n ? n.retractionPaneKeysByRecord ??= /* @__PURE__ */ new WeakMap() : void 0, a = i?.get(e);
	if (!a) {
		a = /* @__PURE__ */ new Map();
		for (let [t, n] of Object.entries(e)) {
			let e = r ? typeof n == "object" && n && "paneKey" in n && typeof n.paneKey == "string" ? n.paneKey : void 0 : t, i = e ? parsePaneKey(e)?.tabId : void 0;
			if (!e || !i) continue;
			let o = a.get(i) ?? /* @__PURE__ */ new Set();
			o.add(e), a.set(i, o);
		}
		i?.set(e, a);
	}
	return [...t].flatMap((e) => [...a.get(e) ?? []]);
}
function collectCollidingRetractionPaneKeys(e, t, n, r, i) {
	let a = new Set(t.filter(isMirroredTerminalSurfaceId)), o = /* @__PURE__ */ new Map();
	if (a.size === 0) return o;
	let s = new Set(batchAgentPaneKeysForTabs(e, a, i));
	for (let t of [
		e.retainedAgentsByPaneKey,
		e.acknowledgedAgentsByPaneKey,
		e.agentLaunchConfigByPaneKey,
		e.paneForegroundAgentByPaneKey
	]) for (let e of recordPaneKeysForTabs(t, a, i)) s.add(e);
	for (let t of recordPaneKeysForTabs(e.migrationUnsupportedByPtyId, a, i, !0)) s.add(t);
	let c = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
	for (let t of s) {
		let i = parsePaneKey(t)?.tabId;
		if (!i || !a.has(i)) continue;
		let o = e.agentStatusByPaneKey[t] ?? e.retainedAgentsByPaneKey?.[t]?.entry;
		if (o && isMirroredAgentStatusOwnedBy(o, n, r)) {
			let e = c.get(i) ?? /* @__PURE__ */ new Set();
			e.add(t), c.set(i, e);
		} else l.add(i);
	}
	for (let e of l) o.set(e, c.get(e) ?? /* @__PURE__ */ new Set());
	return o;
}
function withMirroredEvidenceReceipt(e, t, n) {
	let r = t?.mirroredEvidenceReceivedAt !== void 0 && agentStatusAuthorityObservedAt(t) === agentStatusAuthorityObservedAt(e) ? t.mirroredEvidenceReceivedAt : n;
	return {
		...e,
		mirroredEvidenceReceivedAt: r
	};
}
function buildMirroredAgentStatusPatch(e, t, n, r, i, a, o, s, c) {
	let l = /* @__PURE__ */ new Set();
	for (let e of t) isWebTerminalSurfaceTabId(e.id) && l.add(e.id);
	for (let e of n) l.add(toWebTerminalSurfaceTabId(e.parentTabId));
	if (l.size === 0) return null;
	let u;
	for (let e of r) e.retainedSurfaceByPrunedLeafId && (u ??= /* @__PURE__ */ new Map(), u.set(e.hostTabId, e.retainedSurfaceByPrunedLeafId));
	let d = /* @__PURE__ */ new Map();
	for (let t of n) {
		let n = u?.get(t.parentTabId)?.get(t.leafId), r = remapHostAgentStatus(t, n);
		if (!r) continue;
		let a = d.get(r.paneKey) ?? e.agentStatusByPaneKey[r.paneKey], o = withMirroredEvidenceReceipt(r.connectionId === void 0 ? {
			...r,
			connectionId: i
		} : r, a, s), c = a !== void 0 && o.state === "done" && a.state !== "done" && a.stateStartedAt > o.stateStartedAt, l = isFencedClientAgentStatus(o.paneKey, a, s) && !hostAgentStatusPiercesClientAuthority(o), f = a && (l || a.updatedAt > o.updatedAt) ? {
			...normalizeCompatibleAgentStatusEntryForOwner(a, o.agentType),
			...l && a.state === "working" && o.state === "working" ? { workingMode: o.workingMode } : {},
			paneKey: o.paneKey,
			worktreeId: o.worktreeId ?? a.worktreeId,
			tabId: o.tabId,
			providerSession: a.providerSession ?? (c ? void 0 : o.providerSession),
			lastAssistantMessage: (c ? void 0 : o.lastAssistantMessage) ?? a.lastAssistantMessage,
			lastAssistantMessageIsToolOutput: c || o.lastAssistantMessage === void 0 ? a.lastAssistantMessageIsToolOutput : o.lastAssistantMessageIsToolOutput
		} : o;
		d.set(o.paneKey, f);
	}
	let f = e.agentStatusByPaneKey, p = !1, m = !1, h = !1;
	for (let t of batchAgentPaneKeysForTabs(e, l, c)) isMirroredAgentPaneKeyForTabs(t, l) && isMirroredAgentStatusOwnedBy(e.agentStatusByPaneKey[t], i, a) && (isMirroredAgentPaneKeyForTabs(t, o) || d.has(t) || isClientOwnedAgentStatus(t, e.agentStatusByPaneKey[t]) || (f === e.agentStatusByPaneKey && (f = writableWebSessionTabsRecord(e, "agentStatusByPaneKey", c)), delete f[t], updateBatchAgentPaneKey(t, !1, c), p = !0, m = !0, h = !0));
	for (let [t, n] of d) {
		let r = f[t];
		if (agentStatusEntryEqual(r, n)) continue;
		f === e.agentStatusByPaneKey && (f = writableWebSessionTabsRecord(e, "agentStatusByPaneKey", c)), f[t] = n, updateBatchAgentPaneKey(t, !0, c), p = !0;
		let i = r?.worktreeId !== n.worktreeId || r?.tabId !== n.tabId, a = !!r && isAgentStatusFresh(r, s) !== isAgentStatusFresh(n, s), o = r?.state === "done" && n.state === "done" && agentEntryCompletionAt(r) !== agentEntryCompletionAt(n), l = r?.workingMode !== n.workingMode, u = !r || r.state !== n.state || !isAgentStatusFresh(r, s) || a || i || o || isMirroredCommandCodeTurnBump(r, n);
		m = m || u || l, h ||= u;
	}
	return p ? {
		agentStatusByPaneKey: f,
		agentStatusEpoch: m ? e.agentStatusEpoch + 1 : e.agentStatusEpoch,
		sortEpoch: h ? e.sortEpoch + 1 : e.sortEpoch
	} : null;
}
function buildWebSessionTabsFinalPatch(e) {
	let { state: t, snapshot: n, environmentId: r, worktreeId: i, now: a, batchContext: o, currentTerminalTabs: s, terminalSurfaceTabs: c, mirroredTerminalTabs: l, nextTabsByWorktree: u, removedTerminalResourceIds: d, mirroredTerminalIds: f, nextOpenFiles: p, nextBrowserTabsByWorktree: m, nextUnifiedTabsByWorktree: h, nextGroupsByWorktree: g, nextActiveGroupIdByWorktree: _, nextLayoutByWorktree: v, nextTabBarOrderByWorktree: y, nextPtyIdsByTabId: b, nextTerminalLayoutsByTabId: x, nextLocalOnlyScrollbackByTabId: S, nextUnreadTerminalTabs: C, pendingStartupByTabId: w, nextPendingStartupByTabId: T, automaticAgentResumeClaimsByTabId: E, nextAutomaticAgentResumeClaimsByTabId: D, nextBrowserPagesByWorkspace: O, nextRemoteBrowserPageHandlesByPageId: k, nextBrowserCertificateFailuresByPageId: A, nextActiveTabIdByWorktree: j, nextActiveBrowserTabIdByWorktree: M, nextActiveFileIdByWorktree: N, nextActiveTabId: P, nextActiveBrowserTabId: F, nextActiveFileId: I, nextActiveTabType: L, nextActiveTabTypeByWorktree: R } = e, z = collectCollidingRetractionPaneKeys(t, d, r, i, o), B = buildMirroredAgentStatusPatch(t, s, c, l, r, i, new Set(isWebSessionTabsWorktreeRemovalFrame(n) ? [] : d), a, o), V = isWebSessionTabsWorktreeRemovalFrame(n) ? null : buildRetractedMirroredTabSweepPatch(t, u, B, d, z, o), H = buildRemirroredClosedTabMarkerLiftPatch(V?.recentlyClosedAgentStatusTabIds ?? t.recentlyClosedAgentStatusTabIds, f), U = {
		...B,
		...V,
		...H,
		...p === t.openFiles ? {} : { openFiles: p },
		...u === t.tabsByWorktree ? {} : { tabsByWorktree: u },
		...m === t.browserTabsByWorktree ? {} : { browserTabsByWorktree: m },
		...h === t.unifiedTabsByWorktree ? {} : { unifiedTabsByWorktree: h },
		...g === t.groupsByWorktree ? {} : { groupsByWorktree: g },
		..._ === t.activeGroupIdByWorktree ? {} : { activeGroupIdByWorktree: _ },
		...v === t.layoutByWorktree ? {} : { layoutByWorktree: v },
		...y === t.tabBarOrderByWorktree ? {} : { tabBarOrderByWorktree: y },
		...b === t.ptyIdsByTabId ? {} : { ptyIdsByTabId: b },
		...x === t.terminalLayoutsByTabId ? {} : { terminalLayoutsByTabId: x },
		...S === t.localOnlyScrollbackByTabId ? {} : { localOnlyScrollbackByTabId: S },
		...C === t.unreadTerminalTabs ? {} : { unreadTerminalTabs: C },
		...T === w ? {} : { pendingStartupByTabId: T },
		...D === E ? {} : { automaticAgentResumeClaimsByTabId: D },
		...O === t.browserPagesByWorkspace ? {} : { browserPagesByWorkspace: O },
		...k === t.remoteBrowserPageHandlesByPageId ? {} : { remoteBrowserPageHandlesByPageId: k },
		...A === t.browserCertificateFailuresByPageId ? {} : { browserCertificateFailuresByPageId: A },
		...j === t.activeTabIdByWorktree ? {} : { activeTabIdByWorktree: j },
		...M === t.activeBrowserTabIdByWorktree ? {} : { activeBrowserTabIdByWorktree: M },
		...N === t.activeFileIdByWorktree ? {} : { activeFileIdByWorktree: N },
		...P === t.activeTabId ? {} : { activeTabId: P },
		...F === t.activeBrowserTabId ? {} : { activeBrowserTabId: F },
		...I === t.activeFileId ? {} : { activeFileId: I },
		...L === t.activeTabType ? {} : { activeTabType: L },
		...R === t.activeTabTypeByWorktree ? {} : { activeTabTypeByWorktree: R }
	};
	return Object.keys(U).length === 0 ? t : U;
}
function applyWebSessionTabsSnapshotWithContext(e, t, n, r = Date.now(), i, a) {
	if (suppressE2eWebRuntimeBrowserSnapshot(t) || t.worktree === "global-floating-terminal") return e;
	let o = t.worktree;
	return buildWebSessionTabsFinalPatch(applyActiveStateUpdates(applyWorktreeRecordUpdates(applyBrowserRecordUpdates(applyTerminalRecordUpdates(prepareWebSessionTabsSnapshotGroups(prepareWebSessionTabsSnapshotUnified(prepareWebSessionTabsSnapshotBrowser(prepareWebSessionTabsSnapshotBase(e, t, n, o, r, i, a)))))))));
}
function applyWebSessionTabsSnapshot(e, t, n, r = Date.now(), i) {
	return applyWebSessionTabsSnapshotWithContext(e, t, n, r, void 0, i);
}
function applyWebSessionTabsSnapshots(e, t, n, r = Date.now()) {
	let i = { ...e }, a = {
		agentPaneKeysByTabId: null,
		changedRecords: /* @__PURE__ */ new Set(),
		openFilesIndex: null
	}, o = {};
	for (let e of t) {
		let t = applyWebSessionTabsSnapshotWithContext(i, e, n, r, a);
		t !== i && (o = {
			...o,
			...t
		}, Object.assign(i, t));
	}
	let s = o, c = i;
	for (let e of a.changedRecords) s[e] = c[e];
	return Object.keys(o).length === 0 ? e : o;
}
function applyFreshWebSessionTabsSnapshot(e, t, n, r = Date.now()) {
	return shouldApplyWebSessionTabsSnapshot(t, n) ? applyWebSessionTabsSnapshot(e, t, n, r) : e;
}
function applyFreshWebSessionTabsSnapshots(e, t, n, r = Date.now()) {
	let i = t.filter((e) => shouldApplyWebSessionTabsSnapshot(e, n));
	return i.length === 0 ? e : applyWebSessionTabsSnapshots(e, i, n, r);
}
function decideWebSessionTabsSnapshotOperations(e) {
	return e.map((e) => ({
		...e,
		decision: decideWebSessionTabsSnapshot(e.snapshot, e.environmentId, e.runtimeId)
	}));
}
function applyWebSessionTabsSnapshotOperations(e, t) {
	let n = e, r = {};
	for (let { environmentId: e, snapshot: i, decision: a } of t) {
		if (!a.apply) continue;
		let t = applyWebSessionTabsSnapshot(n, i, e);
		t !== n && (r = {
			...r,
			...t
		}, n = {
			...n,
			...t
		});
	}
	return Object.keys(r).length === 0 ? e : r;
}
var lastCompletionByPane = /* @__PURE__ */ new Map(), handledTurnCompletedAtsByPane = /* @__PURE__ */ new Map(), pendingStampedTailByPane = /* @__PURE__ */ new Map(), workingBoundaryByPane = /* @__PURE__ */ new Map(), coordinatorCountByPane = /* @__PURE__ */ new Map(), HANDLED_TURN_STAMP_LIMIT = 16, nextCoordinatorId = 1;
function createAgentCompletionIdentityScope(e, t) {
	let n = t ?? `coordinator:${nextCoordinatorId++}`, r = pendingStampedTailByPane.get(e)?.eligibleWorkingBoundaryByLane.get(n);
	coordinatorCountByPane.set(e, (coordinatorCountByPane.get(e) ?? 0) + 1);
	function i(t) {
		let i = workingBoundaryByPane.get(e);
		if (typeof t != "number" || !Number.isFinite(t)) {
			i?.delete(n), i?.size === 0 && workingBoundaryByPane.delete(e);
			return;
		}
		i || (i = /* @__PURE__ */ new Map(), workingBoundaryByPane.set(e, i)), r = void 0, i.set(n, t);
	}
	function a() {
		r = void 0;
		let t = workingBoundaryByPane.get(e);
		t?.delete(n), t?.size === 0 && workingBoundaryByPane.delete(e);
	}
	function o(t) {
		return handledTurnCompletedAtsByPane.get(e)?.includes(t) === !0 || lastCompletionByPane.get(e)?.lastTurnCompletedAtNotified === t;
	}
	function s(t) {
		if (o(t)) return !0;
		let r = new Map(workingBoundaryByPane.get(e));
		return r.delete(n), pendingStampedTailByPane.set(e, {
			turnCompletedAt: t,
			originLane: n,
			eligibleWorkingBoundaryByLane: r,
			consumedIdentityByLane: /* @__PURE__ */ new Map(),
			tailOpen: !0
		}), !1;
	}
	function c(t, i) {
		let a = pendingStampedTailByPane.get(e), o = lastCompletionByPane.get(e), s = workingBoundaryByPane.get(e)?.get(n), c = a?.eligibleWorkingBoundaryByLane.get(n);
		return !a || o?.lastTurnCompletedAtNotified !== a.turnCompletedAt || t === null || o.agentIdentity !== t || c === void 0 || s !== c && r !== c ? !1 : (a.eligibleWorkingBoundaryByLane.delete(n), r = void 0, i && a.consumedIdentityByLane.set(n, i), a.tailOpen = a.eligibleWorkingBoundaryByLane.size > 0, !0);
	}
	return {
		lane: n,
		getLast: () => lastCompletionByPane.get(e),
		setLast: (t) => lastCompletionByPane.set(e, t),
		deleteLast: () => lastCompletionByPane.delete(e),
		turnCompletedAtAlreadyHandled: (t) => handledTurnCompletedAtsByPane.get(e)?.includes(t) === !0 || lastCompletionByPane.get(e)?.lastTurnCompletedAtNotified === t,
		rememberTurnCompletedAt: (t) => {
			let n = handledTurnCompletedAtsByPane.get(e) ?? [];
			n.includes(t) || (n.push(t), n.length > HANDLED_TURN_STAMP_LIMIT && n.shift(), handledTurnCompletedAtsByPane.set(e, n));
		},
		recordWorkingBoundary: i,
		clearWorkingBoundary: a,
		openStampedTail: s,
		consumePendingStampedTailForAgent: c,
		consumeStampedTail: (t) => {
			let r = pendingStampedTailByPane.get(e);
			r?.turnCompletedAt === t && (r.eligibleWorkingBoundaryByLane.delete(n), r.tailOpen = r.eligibleWorkingBoundaryByLane.size > 0);
		},
		hasUnconsumedStampedTail: () => pendingStampedTailByPane.get(e)?.tailOpen === !0,
		hasConsumedIdentity: (t) => pendingStampedTailByPane.get(e)?.consumedIdentityByLane.get(n) === t,
		clearOriginStampedTail: () => {
			let t = pendingStampedTailByPane.get(e);
			t?.originLane === n && (pendingStampedTailByPane.delete(e), lastCompletionByPane.get(e)?.lastTurnCompletedAtNotified === t.turnCompletedAt && lastCompletionByPane.delete(e));
		},
		clearStampedTail: () => {
			pendingStampedTailByPane.delete(e);
		},
		dispose: (t) => {
			let n = (coordinatorCountByPane.get(e) ?? 1) - 1;
			n > 0 ? coordinatorCountByPane.set(e, n) : coordinatorCountByPane.delete(e), n <= 0 && !t && (lastCompletionByPane.delete(e), handledTurnCompletedAtsByPane.delete(e), pendingStampedTailByPane.delete(e), workingBoundaryByPane.delete(e));
		}
	};
}
var MAX_CONCURRENT_INSPECTIONS = 4, MAX_INSPECTION_STARTS_PER_SECOND = 8, activeInspections = 0, inspectionPumpQueued = !1, inspectionPumpTimer = null, inspectionStarts = [], inspectionQueue = [];
function availableInspectionStarts(e) {
	for (inspectionStarts.length > 0 && e < inspectionStarts[0] && (inspectionStarts.length = 0); inspectionStarts.length > 0 && e - inspectionStarts[0] >= 1e3;) inspectionStarts.shift();
	return Math.min(MAX_CONCURRENT_INSPECTIONS - activeInspections, MAX_INSPECTION_STARTS_PER_SECOND - inspectionStarts.length);
}
function queueInspectionPump() {
	inspectionPumpQueued || (inspectionPumpQueued = !0, queueMicrotask(() => {
		inspectionPumpQueued = !1, pumpInspectionQueue();
	}));
}
function scheduleInspectionPump(e = 0) {
	inspectionPumpTimer === null && (inspectionPumpTimer = setTimeout(() => {
		inspectionPumpTimer = null, pumpInspectionQueue();
	}, e));
}
function dropDisposedInspections() {
	let e = 0;
	for (let t = 0; t < inspectionQueue.length; t += 1) {
		let n = inspectionQueue[t];
		n.canRun() && (inspectionQueue[e] = n, e += 1);
	}
	inspectionQueue.length = e;
}
function startInspectionRound(e, t) {
	activeInspections += 1, inspectionStarts.push(t);
	let n = e.length, r = () => {
		--n, !(n > 0) && (activeInspections = Math.max(0, activeInspections - 1), inspectionQueue.length > 0 && scheduleInspectionPump());
	};
	for (let t of e) t.run().catch(() => {}).finally(r);
}
function takeSharedObservationRound() {
	let e = [], t = 0;
	for (let n = 0; n < inspectionQueue.length; n += 1) {
		let r = inspectionQueue[n];
		r.sharesHostObservation === !0 ? e.push(r) : (inspectionQueue[t] = r, t += 1);
	}
	return inspectionQueue.length = t, e;
}
function pumpInspectionQueue() {
	if (dropDisposedInspections(), inspectionQueue.length === 0) return;
	let e = Date.now(), t = availableInspectionStarts(e);
	if (t <= 0) {
		scheduleInspectionPump(100);
		return;
	}
	let n = takeSharedObservationRound();
	for (n.length > 0 && (startInspectionRound(n, e), --t); t > 0 && inspectionQueue.length > 0;) {
		let n = inspectionQueue.findIndex((e) => e.priority === "pending-title"), r = n === -1 ? inspectionQueue.shift() : inspectionQueue.splice(n, 1)[0];
		if (!r) break;
		startInspectionRound([r], e), --t;
	}
	inspectionQueue.length > 0 && scheduleInspectionPump();
}
function enqueueAgentProcessInspection(e) {
	inspectionQueue.push(e), queueInspectionPump();
}
const POLL_TIER_INTERVAL_MS = {
	active: 750,
	idle: 2e3,
	hidden: 3e3,
	"no-evidence": 15e3
};
typeof process < "u" && process.platform;
function nextCadenceInspectionDelayMs(e) {
	let { alignToSharedGrid: t, baseMs: n, hasConsecutiveErrors: r, now: i } = e;
	if (!Number.isFinite(n) || n <= 0) return 0;
	if (r || !t) {
		let t = e.random ?? Math.random;
		return Math.round(n * (1 + (t() * .2 - .1)));
	}
	let a = Math.floor((i + n) / n) * n, o = Math.max(1, n - 500);
	return Math.min(n, Math.max(o, a - i));
}
function createAgentCompletionPollScheduler(e) {
	let { options: t, state: n, pendingTitle: r, requestInspection: i } = e;
	function a() {
		n.pollTimer !== null && (clearTimeout(n.pollTimer), n.pollTimer = null, n.pollTimerTier = null);
	}
	function o() {
		let e = t.getPtyId();
		return e && t.isRemotePtyId?.(e) === !0 ? !1 : n.hasAgentRunEvidence || n.lastForegroundAgent !== null || t.shouldPollProcessCadence?.() !== !1 && t.shouldPollNoEvidenceProcessCadence?.() !== !1 || t.shouldPollProcessCadence?.() !== !1 && n.lastPaneActivityAt !== null && Date.now() - n.lastPaneActivityAt < 1e4;
	}
	function s() {
		let e = t.getPtyId();
		return e && t.isRemotePtyId?.(e) === !0 || t.shouldPollProcessCadence?.() === !1 ? "hidden" : n.lastForegroundAgent ? "active" : n.hasAgentRunEvidence ? "idle" : t.isProcessInspectionCostly?.() === !0 && (n.lastPaneActivityAt === null || Date.now() - n.lastPaneActivityAt >= 1e4) ? "no-evidence" : "idle";
	}
	function c() {
		if (n.disposed || !n.pollTrackingStarted || !t.isLive() || r.get()) return;
		let e = s();
		if (n.pollTimer !== null) if (n.pollTimerTier !== null && POLL_TIER_INTERVAL_MS[e] < POLL_TIER_INTERVAL_MS[n.pollTimerTier]) a();
		else return;
		if (!o() || !t.getPtyId()) return;
		let c = POLL_TIER_INTERVAL_MS[e], l = n.consecutiveInspectionErrors > 0 ? Math.min(Math.max(1e4, c), c * 2 ** n.consecutiveInspectionErrors) : c, u = Date.now(), d = n.lastForegroundAgent === null && (n.lastPaneActivityAt === null || u - n.lastPaneActivityAt >= 1e4), f = nextCadenceInspectionDelayMs({
			baseMs: l,
			hasConsecutiveErrors: n.consecutiveInspectionErrors > 0,
			alignToSharedGrid: d,
			now: u
		});
		n.pollTimerTier = e, n.pollTimer = setTimeout(() => {
			n.pollTimer = null, n.pollTimerTier = null, i("cadence");
		}, f);
	}
	return {
		clearPollTimer: a,
		scheduleNextPoll: c,
		shouldRunCadenceInspection: o
	};
}
var isNonEmptyString = (e) => typeof e == "string" && e.length > 0 && e.length <= 256;
function isHostObservation(e) {
	return isNonEmptyString(e.authorityGeneration) && Number.isSafeInteger(e.observationEpoch) && Number(e.observationEpoch) >= 0 && Number.isSafeInteger(e.capturedAgeMs) && Number(e.capturedAgeMs) >= 0 && Number(e.capturedAgeMs) <= 864e5 && isNonEmptyString(e.ptyId) && isNonEmptyString(e.ptyIncarnationId);
}
function isPosixFence(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	if (t.platform !== "posix" || !Number.isSafeInteger(t.shellPid) || Number(t.shellPid) <= 0 || !isNonEmptyString(t.shellStartTime) || !isNonEmptyString(t.tty) || !Number.isSafeInteger(t.foregroundPgid) || Number(t.foregroundPgid) <= 0) return !1;
	if (t.process === void 0) return !0;
	if (typeof t.process != "object" || t.process === null) return !1;
	let n = t.process;
	return Number.isSafeInteger(n.pid) && Number(n.pid) > 0 && isNonEmptyString(n.startTime);
}
function isWindowsFence(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	if (t.platform !== "windows" || !Number.isSafeInteger(t.rootProcessId) || Number(t.rootProcessId) <= 0 || !isNonEmptyString(t.rootCreationTime) || !isNonEmptyString(t.sessionId)) return !1;
	if (t.process === void 0) return !0;
	if (typeof t.process != "object" || t.process === null) return !1;
	let n = t.process;
	return Number.isSafeInteger(n.pid) && Number(n.pid) > 0 && isNonEmptyString(n.creationTime);
}
function isRemoteForegroundEvidence(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return isHostObservation(t) ? t.verdict === "live" ? (t.processName === null || typeof t.processName == "string") && (isPosixFence(t.fence) || isWindowsFence(t.fence)) : (t.verdict === "unverifiable" || t.verdict === "exited") && typeof t.reason == "string" && t.reason.length > 0 && t.reason.length <= 256 : !1;
}
function admitRemoteForegroundEvidence(e, t) {
	if (!isRemoteForegroundEvidence(e) || t.expectedIncarnationId === null || e.ptyId !== t.expectedPtyId || e.ptyIncarnationId !== t.expectedIncarnationId) return null;
	let n = Math.max(0, t.receivedAtMonotonic - t.requestStartedAtMonotonic);
	return Math.max(e.capturedAgeMs, n) > 2e3 || t.knownAuthorityGenerations?.has(e.authorityGeneration) && t.lastAuthorityGeneration !== e.authorityGeneration || t.lastAuthorityGeneration === e.authorityGeneration && e.observationEpoch <= t.lastObservationEpoch ? null : e;
}
function handleAgentCompletionInspectionResult(e) {
	let { result: t, requestStartedAtMonotonic: n, options: r, state: i, identityScope: a, clearAgentRunEvidence: o, hasPendingHookDone: s, hasPendingCodexAttention: c, scheduleNextPoll: l, handleRecognizedProcess: u, dispatchCompletion: d, remoteInspection: f } = e, p = r.isRemotePtyId?.(r.getPtyId() ?? "") === !0;
	if (isClientOnlyUnverifiableInspection(t) || !p && t.childProcessEvidence === "unverifiable") return i.pendingProcessExitAgent = null, i.consecutiveInspectionErrors += 1, l(), !1;
	if (p) {
		let e = t.foregroundProcessEvidence, a = r.getExpectedIncarnationId?.() ?? null, s = r.getPtyId(), c = `${s ?? ""}\0${a ?? ""}`;
		f.bindingKey !== c && (f.bindingKey = c, f.authorityGeneration = null, f.observationEpoch = -1, f.knownAuthorityGenerations.clear());
		let l = admitRemoteForegroundEvidence(e, {
			expectedPtyId: s ? ((e) => parseAppSshPtyId(e)?.relayPtyId ?? getRemoteRuntimeTerminalHandle(e) ?? e)(s) : "",
			expectedIncarnationId: a,
			requestStartedAtMonotonic: n,
			receivedAtMonotonic: performance.now(),
			lastAuthorityGeneration: f.authorityGeneration,
			lastObservationEpoch: f.observationEpoch,
			knownAuthorityGenerations: f.knownAuthorityGenerations
		});
		if (!l) return i.pendingProcessExitAgent = null, i.consecutiveInspectionErrors += 1, !1;
		if (f.authorityGeneration = l.authorityGeneration, f.observationEpoch = l.observationEpoch, f.knownAuthorityGenerations.add(l.authorityGeneration), l.verdict === "exited") {
			let e = i.lastForegroundAgent;
			return e && i.hasAgentRunEvidence && r.shouldSuppressConfirmedProcessExitCompletion?.(e) !== !0 && d("process-exit", e.processName, {
				terminalIdleConfirmed: !0,
				completionIdentity: {
					source: "process-exit",
					identity: `${e.agent}:${e.processName}`,
					agentIdentity: e.agent
				}
			}), i.lastForegroundAgent = null, o(), !1;
		}
		if (l.verdict !== "live" || (i.consecutiveInspectionErrors = 0, l.processName === null)) return i.pendingProcessExitAgent = null, !1;
		let p = recognizeAgentProcess(l.processName);
		return p ? (u(p), !0) : (i.pendingProcessExitAgent = null, !1);
	}
	i.consecutiveInspectionErrors = 0;
	let m = recognizeAgentProcess(t.foregroundProcess);
	if (m) return u(m), !0;
	if (s() || c()) return l(), !1;
	if (i.lastForegroundAgent && i.hasAgentRunEvidence) {
		if (t.hasChildProcesses) return i.pendingProcessExitAgent = null, l(), !1;
		let e = i.pendingProcessExitAgent;
		if (!e || e.agent !== i.lastForegroundAgent.agent || e.processName !== i.lastForegroundAgent.processName) return i.pendingProcessExitAgent = i.lastForegroundAgent, l(), !1;
		let n = i.lastForegroundAgent;
		if (i.pendingProcessExitAgent = null, r.shouldSuppressConfirmedProcessExitCompletion?.(n) !== !0) {
			let e = a.getLast();
			!d("process-exit", n.processName, {
				terminalIdleConfirmed: !0,
				completionIdentity: {
					source: "process-exit",
					identity: `${n.agent}:${n.processName}`,
					agentIdentity: n.agent
				}
			}) && !a.hasUnconsumedStampedTail() && e?.source === "hook" && e.agentIdentity === n.agent && a.deleteLast();
		}
		i.lastForegroundAgent = null, o();
	} else i.lastForegroundAgent = null, o();
	return !1;
}
function createAgentCompletionProcessMonitor({ options: e, state: t, identityScope: n, pendingTitle: r, establishAgentEvidence: i, clearAgentRunEvidence: a, hasPendingHookDone: o, hasPendingCodexAttention: s, dispatchCompletion: c }) {
	let l = {
		authorityGeneration: null,
		observationEpoch: -1,
		bindingKey: null,
		knownAuthorityGenerations: /* @__PURE__ */ new Set()
	};
	function u(n, r) {
		if (e.isRemotePtyId?.(n) !== !0) return;
		let i = `${n}\0${r ?? ""}`;
		l.bindingKey !== i && (l.bindingKey = i, l.authorityGeneration = null, l.observationEpoch = -1, l.knownAuthorityGenerations.clear(), t.inspectionGeneration += 1);
	}
	let { clearPollTimer: d, scheduleNextPoll: f, shouldRunCadenceInspection: p } = createAgentCompletionPollScheduler({
		options: e,
		state: t,
		pendingTitle: r,
		requestInspection: h
	});
	function m(r) {
		t.pendingProcessExitAgent = null;
		let a = n.getLast();
		!t.lastForegroundAgent && t.processSession > 0 && !n.hasUnconsumedStampedTail() && a?.source === "hook" && a.agentIdentity === r.agent && n.deleteLast(), t.lastForegroundAgent?.agent !== r.agent && (t.lastForegroundAgent && t.hasAgentRunEvidence && e.shouldSuppressProcessReplacementCompletion?.(t.lastForegroundAgent, r) !== !0 && c("process-exit", t.lastForegroundAgent.processName, { completionIdentity: {
			source: "process-exit",
			identity: `${t.lastForegroundAgent.agent}:${t.lastForegroundAgent.processName}`,
			agentIdentity: t.lastForegroundAgent.agent
		} }), t.processSession += 1), t.lastForegroundAgent = r, i();
	}
	function h(i) {
		if (t.disposed || t.inspectionInFlight || !e.isLive() || i === "cadence" && !p()) return;
		let d = e.getPtyId();
		if (!d) return;
		let g = e.getExpectedIncarnationId?.() ?? null;
		u(d, g), t.inspectionInFlight = !0;
		let _ = t.inspectionGeneration, v = performance.now(), y = i === "pending-title" ? r.get()?.id : null;
		enqueueAgentProcessInspection({
			priority: i,
			canRun: () => !t.disposed,
			sharesHostObservation: e.isRemotePtyId?.(d) !== !0,
			run: async () => {
				let u = !1, p = !1;
				try {
					let h = {
						...g ? { expectedIncarnationId: g } : {},
						...i === "cadence" && e.isRemotePtyId?.(d) !== !0 ? { steadyState: !0 } : {}
					}, b = await (Object.keys(h).length > 0 ? e.inspectProcess(e.getSettings(), d, h) : e.inspectProcess(e.getSettings(), d));
					if (!t.disposed && _ === t.inspectionGeneration && (e.getExpectedIncarnationId?.() ?? null) === g) {
						let d = r.get();
						(!d || i === "pending-title" && d.id === y) && (u = handleAgentCompletionInspectionResult({
							result: b,
							requestStartedAtMonotonic: v,
							options: e,
							state: t,
							identityScope: n,
							clearAgentRunEvidence: a,
							hasPendingHookDone: o,
							hasPendingCodexAttention: s,
							scheduleNextPoll: f,
							handleRecognizedProcess: m,
							dispatchCompletion: c,
							remoteInspection: l
						})), p = !0;
					}
				} catch {
					t.pendingProcessExitAgent = null, t.consecutiveInspectionErrors += 1;
				} finally {
					if (t.inspectionInFlight = !1, _ !== t.inspectionGeneration) r.get() ? h("pending-title") : f();
					else {
						let e = r.get();
						e && (i === "pending-title" && e.id === y ? r.finishInspection(e.id, p, u) : h("pending-title")), f();
					}
				}
			}
		});
	}
	return {
		requestInspection: h,
		scheduleNextPoll: f,
		clearPollTimer: d,
		start: () => {
			t.pollTrackingStarted = !0, f();
		},
		recordActivity: () => {
			t.lastPaneActivityAt = Date.now(), (t.pollTimer === null || t.pollTimerTier === "no-evidence") && f();
		},
		incrementGeneration: () => {
			t.inspectionGeneration += 1;
		}
	};
}
var PENDING_TITLE_TTL_MS = 15500, PENDING_TITLE_MAX_TTL_MS = Math.max(3e4, PENDING_TITLE_TTL_MS);
function createPendingTitleController({ hasAgentEvidence: e, onEligible: t, onExpired: n, requestInspection: r, schedulePoll: i }) {
	let a = null, o = null, s = 0;
	function c() {
		o !== null && (clearTimeout(o), o = null);
	}
	function l() {
		if (c(), !a) return;
		let e = a.expiresAt - Date.now();
		if (e <= 0) {
			a = null, i(), n();
			return;
		}
		o = setTimeout(() => {
			if (o = null, a) {
				if (!a.firstInspectionFinished && Date.now() < a.maxExpiresAt) {
					a.expiresAt = Math.min(Date.now() + 500, a.maxExpiresAt), l();
					return;
				}
				a = null, i(), n();
			}
		}, e);
	}
	return {
		get: () => a,
		hold: (e) => {
			let t = Date.now();
			a = {
				id: ++s,
				title: e,
				expiresAt: Math.min(t + PENDING_TITLE_TTL_MS, t + PENDING_TITLE_MAX_TTL_MS),
				maxExpiresAt: t + PENDING_TITLE_MAX_TTL_MS,
				firstInspectionFinished: !1,
				validatedByFreshInspection: !1
			}, l(), r();
		},
		drop: () => {
			c(), a = null;
		},
		finishInspection: (n, r, i) => {
			!a || a.id !== n || (a.firstInspectionFinished = !0, r && i && e() ? (a.validatedByFreshInspection = !0, t(a.title)) : r || (a = null), l());
		},
		clearTimer: c
	};
}
var COMPLETION_REPLAY_GUARD_MS$1 = 1e3, HOOK_DONE_QUIET_MS = 1500, CODEX_ATTENTION_QUIET_MS = 1500;
function createAgentCompletionNotificationController({ options: e, state: t, processState: n, identityScope: r }) {
	function i(e) {
		return typeof e == "number" && Number.isFinite(e);
	}
	function a(e) {
		return t.workingStatusObserved ? `turn:${t.currentTurn}` : n.lastForegroundAgent ? `process:${n.processSession}` : `${e}:${t.currentTurn}:${n.processSession}`;
	}
	function o(e, t, n) {
		return [
			e,
			t ?? "",
			String(Math.trunc(n))
		].join(":");
	}
	function s(e) {
		let t = i(e.turnCompletedAt) ? e.turnCompletedAt : e.stateStartedAt;
		return typeof t != "number" || !Number.isFinite(t) ? null : o(e.state, e.agentType, t);
	}
	function c(e) {
		return e.agentType?.trim().toLowerCase() || null;
	}
	function l(e) {
		return t.workingStatusObserved || isPiCompatibleAgentType(c(e));
	}
	function u(e) {
		let n = s(e);
		return n ? `identity:${n}` : [
			"turn",
			String(t.currentTurn),
			e.state,
			e.agentType ?? "",
			e.toolName ?? "",
			e.toolInput ?? "",
			e.prompt
		].join(":");
	}
	function d(e) {
		if (!e) return !1;
		if (e.source === "hook" && r.hasConsumedIdentity(e.identity)) return !0;
		let t = r.getLast();
		return t ? t.source === e.source ? t.identity === e.identity || e.source === "hook" && r.consumePendingStampedTailForAgent(e.agentIdentity, e.identity) : t.agentIdentity !== null && e.agentIdentity !== null && t.agentIdentity === e.agentIdentity : !1;
	}
	function f(i, o, s = {}) {
		if (i !== "hook" && t.pendingHookDoneTimer !== null || t.requiresFreshWorking || t.lastCompletedTurn === t.currentTurn || !e.isLive() || !n.hasAgentRunEvidence) return !1;
		let c = Date.now(), l = a(i);
		return l === t.lastCompletionToken && c - t.lastCompletionAt < COMPLETION_REPLAY_GUARD_MS$1 || d(s.completionIdentity) ? !1 : (t.lastCompletionToken = l, t.lastCompletionAt = c, t.lastCompletedTurn = t.currentTurn, t.lastCompletionSource = i, t.workingStatusObserved = !1, _(), s.completionIdentity && (r.setLast(s.completionIdentity), s.completionIdentity.lastTurnCompletedAtNotified === void 0 ? r.clearStampedTail() : r.rememberTurnCompletedAt(s.completionIdentity.lastTurnCompletedAtNotified)), i === "hook" && s.agentStatus && s.notifyWithoutLifecycle !== !0 && e.dispatchHookLifecycle?.(s.agentStatus), s.quietedHookDone === !0 || i === "process-exit" ? e.dispatchCompletion(o, {
			source: i,
			quietedHookDone: s.quietedHookDone === !0,
			...s.terminalIdleConfirmed === !0 ? { terminalIdleConfirmed: !0 } : {},
			...s.agentStatus ? { agentStatus: s.agentStatus } : {}
		}) : s.notifyWithoutLifecycle === !0 && s.agentStatus ? e.dispatchCompletion(o, {
			source: i,
			quietedHookDone: !1,
			agentStatus: s.agentStatus
		}) : e.dispatchCompletion(o), !0);
	}
	function p(t) {
		e.dispatchAttention?.(t.agentType ?? e.paneKey, {
			source: "hook",
			agentStatus: t
		});
	}
	function m(r) {
		if (!e.dispatchAttention || !e.isLive() || !n.hasAgentRunEvidence) return;
		let i = u(r);
		if (i !== t.lastAttentionToken) {
			if (t.lastAttentionToken = i, e.dispatchHookLifecycle?.(r), r.agentType === "codex") {
				_(), t.pendingCodexAttentionTimer = setTimeout(() => {
					t.pendingCodexAttentionTimer = null, !(!e.isLive() || !n.hasAgentRunEvidence) && p(r);
				}, CODEX_ATTENTION_QUIET_MS);
				return;
			}
			p(r);
		}
	}
	function h(e, n) {
		t.pendingHookDoneTitle = e, t.pendingHookDonePayload = n, t.pendingHookDoneTimer === null && (t.pendingHookDoneTimer = setTimeout(() => {
			t.pendingHookDoneTimer = null;
			let e = t.pendingHookDoneTitle, n = t.pendingHookDonePayload;
			if (t.pendingHookDoneTitle = null, t.pendingHookDonePayload = null, e) {
				let t = n ? s(n) : null;
				f("hook", e, {
					quietedHookDone: !0,
					...n ? { agentStatus: n } : {},
					...t ? { completionIdentity: {
						source: "hook",
						identity: t,
						agentIdentity: n ? c(n) : null
					} } : {}
				});
			}
		}, HOOK_DONE_QUIET_MS));
	}
	function g() {
		t.pendingHookDoneTimer !== null && (clearTimeout(t.pendingHookDoneTimer), t.pendingHookDoneTimer = null), t.pendingHookDoneTitle = null, t.pendingHookDonePayload = null;
	}
	function _() {
		t.pendingCodexAttentionTimer !== null && (clearTimeout(t.pendingCodexAttentionTimer), t.pendingCodexAttentionTimer = null);
	}
	return {
		completionIdentityFor: o,
		hookCompletionIdentity: s,
		hookCompletionAgentIdentity: c,
		doneShouldUseQuietWindow: l,
		clearPendingHookDone: g,
		clearPendingCodexAttention: _,
		dispatchCompletion: f,
		dispatchAttention: m,
		scheduleHookDoneCompletion: h,
		hasPendingHookDone: () => t.pendingHookDoneTimer !== null,
		hasPendingCodexAttention: () => t.pendingCodexAttentionTimer !== null
	};
}
var EXTRA_TITLE_AGENT_TOKEN_RE = RegExp("(?<![\\w./\\\\-])(?:cursor-agent|pi)(?:\\.(?:exe|cmd|bat|ps1))?(?![\\w./\\\\-])", "i");
function titleHasExplicitAgentIdentity(e) {
	return e ? e.startsWith(". ") || e.startsWith("* ") || e.startsWith("✳") || isGeminiTerminalTitle(e) || isPiTerminalTitle(e) ? !0 : titleHasAnyLegacyAgentName(e) || AGY_AGENT_NAME_RE.test(e) || DROID_AGENT_NAME_RE.test(e) || HERMES_AGENT_NAME_RE.test(e) || EXTRA_TITLE_AGENT_TOKEN_RE.test(e) : !1;
}
function titleIsInconclusiveNativeDroidTitle(e) {
	return /\bDroid\b/i.test(e) && detectAgentStatusFromTitle(e) === null;
}
function createAgentCompletionTitleObserver({ getLastStatus: e, setLastStatus: t, hasAgentEvidence: n, establishAgentEvidence: r, recordPaneActivity: i, recordTitleWorking: a, holdTitleCompletionPending: o, hasPendingTitle: s, dropPendingTitle: c, markTitleCompletionNotified: l, dispatchTitleCompletion: u }) {
	function d(e) {
		let t = e.toLowerCase();
		return /\bcodex\b/.test(t) ? "codex" : /\bclaude\b/.test(t) ? "claude" : /\bgemini\b/.test(t) ? "gemini" : /\bcursor(?: agent)?\b/.test(t) ? "cursor" : /\bopencode\b/.test(t) ? "opencode" : /\bdroid\b/.test(t) ? "droid" : /\bhermes\b/.test(t) ? "hermes" : /\baider\b/.test(t) ? "aider" : /\bpi\b/.test(t) || t.includes("π") ? "pi" : null;
	}
	function f(e) {
		l(e), u(e);
	}
	function p(l) {
		i();
		let u = detectAgentStatusFromTitle(l), d = titleIsInconclusiveNativeDroidTitle(l), p = titleHasExplicitAgentIdentity(l) && !d, m = s();
		if (p && r(), u === "working") {
			if (!a()) return;
		} else if (e() === "working") {
			if (d) {
				t(u);
				return;
			}
			if (u === null && !titleHasExplicitAgentIdentity(l)) {
				o(l), t(u);
				return;
			}
			n() ? f(l) : o(l);
		} else m && u !== null && p && (c(), f(l));
		t(u);
	}
	function m(e) {
		titleHasExplicitAgentIdentity(e) && r(), n() ? f(e) : o(e);
	}
	return {
		observeTitle: p,
		observeClassifiedTitleCompletion: m,
		titleCompletionAgentIdentity: d
	};
}
function isFiniteTurnCompletedAt(e) {
	return typeof e == "number" && Number.isFinite(e);
}
function isAttentionHookState(e) {
	return e === "waiting" || e === "blocked";
}
function createAgentCompletionHookObserver({ options: e, state: t, establishAgentEvidence: n, recordPaneActivity: r, clearPendingHookDone: i, clearPendingCodexAttention: a, dispatchAttention: o, dispatchCompletion: s, scheduleHookDoneCompletion: c, doneShouldUseQuietWindow: l, hookCompletionIdentity: u, hookCompletionAgentIdentity: d, completionIdentityFor: f, openStampedTail: p, rememberHandledTurnCompletedAt: m, turnCompletedAtAlreadyHandled: h, consumePendingStampedTailForAgent: g, consumeStampedTailForCurrentCoordinator: _, clearOriginStampedTail: v, recordWorkingBoundary: y, dropPendingTitle: b }) {
	function x(x) {
		if (r(), e.shouldSuppressHookCompletion?.(x)) {
			isAttentionHookState(x.state) && (i(), a());
			return;
		}
		if (isRecognizedAgentType(x.agentType) && n(), x.state === "working") {
			let n = isFiniteTurnCompletedAt(x.turnCompletedAt) ? x.turnCompletedAt : void 0;
			if (n !== void 0) {
				let r = p(n);
				if (t.workingStatusObserved && !r && t.lastCompletionIdentity?.lastTurnCompletedAtNotified !== n) {
					let r = {
						...x,
						state: "done",
						stateStartedAt: n,
						turnCompletedAt: n
					}, i = {
						source: "hook",
						identity: f("done", x.agentType, n),
						agentIdentity: d(x),
						lastTurnCompletedAtNotified: n
					};
					s("hook", x.agentType ?? e.paneKey, {
						notifyWithoutLifecycle: !0,
						agentStatus: r,
						completionIdentity: i
					}) && (t.lastCompletionIdentity = i);
				} else t.workingStatusObserved || m(n);
				e.dispatchHookLifecycle?.(x);
				return;
			}
			v(), y(x.stateStartedAt), i(), a(), t.workingStatusObserved = !0, t.requiresFreshWorking = !1, t.lastCompletionIdentity = null, t.lastAttentionToken = null, t.currentTurn += 1, b(), e.dispatchHookLifecycle?.(x);
			return;
		}
		if (isAttentionHookState(x.state)) {
			i(), o(x);
			return;
		}
		if (x.state === "done" && x.sessionBoundary === !0 || x.state !== "done") return;
		a();
		let S = u(x), C = isFiniteTurnCompletedAt(x.turnCompletedAt) ? x.turnCompletedAt : void 0;
		if (C === void 0 && g(d(x), S)) {
			t.lastCompletionIdentity = S ? {
				source: "hook",
				identity: S,
				agentIdentity: d(x)
			} : null, e.dispatchHookLifecycle?.(x);
			return;
		}
		if (C !== void 0 && (h(C) || t.lastCompletionIdentity?.lastTurnCompletedAtNotified === C || t.lastCompletedTurn === t.currentTurn)) {
			_(C), e.dispatchHookLifecycle?.(x);
			return;
		}
		if (S && t.lastCompletionIdentity?.source === "hook" && S === t.lastCompletionIdentity.identity) {
			t.pendingHookDoneTimer !== null && c(x.agentType ?? e.paneKey, x);
			return;
		}
		if (!t.workingStatusObserved && t.lastCompletionSource === "hook" && t.lastCompletedTurn === t.currentTurn && Date.now() - t.lastCompletionAt >= 1e3 && (t.currentTurn += 1), t.lastCompletionIdentity = S ? {
			source: "hook",
			identity: S,
			agentIdentity: d(x)
		} : null, l(x)) {
			c(x.agentType ?? e.paneKey, x);
			return;
		}
		s("hook", x.agentType ?? e.paneKey, {
			agentStatus: x,
			...t.lastCompletionIdentity ? { completionIdentity: t.lastCompletionIdentity } : {}
		});
	}
	return {
		observeHookStatus: x,
		seedHookStatus: (e) => {
			let { turnCompletedAt: t, ...n } = e;
			isFiniteTurnCompletedAt(t) && m(t), x(n);
		}
	};
}
function createAgentCompletionLifecycle({ state: e, processState: t, identityScope: n, clearPendingHookDone: r, clearPendingCodexAttention: i, dropPendingTitle: a, clearWorkingBoundary: o, incrementGeneration: s, clearPollTimer: c, isLive: l, clearEvidence: u, clearTitleStatus: d }) {
	function f(n = {}) {
		r(), i(), a(), u(), d(), e.workingStatusObserved = !1, e.lastCompletionToken = null, e.lastCompletionAt = 0, e.lastCompletedTurn = null, e.lastCompletionSource = null, e.lastCompletionIdentity = null, e.lastAttentionToken = null, t.lastForegroundAgent = null, t.hasAgentRunEvidence = !1, e.requiresFreshWorking = n.requireFreshWorking ?? !1, s(), o();
	}
	function p() {
		t.disposed || (t.disposed = !0, c(), r(), i(), a(), o(), n.dispose(l()));
	}
	return {
		resetCompletionState: f,
		dispose: p,
		startProcessTracking: (e) => e(),
		hasPendingHookDoneCompletion: () => e.pendingHookDoneTimer !== null
	};
}
var COMPLETION_REPLAY_GUARD_MS = 1e3;
function createAgentCompletionCoordinator(e) {
	let t = createAgentCompletionIdentityScope(e.paneKey, e.statusLane), n = !1, r = !1, i = null, a = {
		currentTurn: 0,
		workingStatusObserved: !1,
		requiresFreshWorking: !1,
		lastCompletionToken: null,
		lastCompletionAt: 0,
		lastCompletedTurn: null,
		lastCompletionSource: null,
		lastCompletionIdentity: null,
		lastAttentionToken: null,
		pendingHookDoneTimer: null,
		pendingHookDoneTitle: null,
		pendingHookDonePayload: null,
		pendingCodexAttentionTimer: null
	}, o = {
		disposed: !1,
		inspectionInFlight: !1,
		inspectionGeneration: 0,
		consecutiveInspectionErrors: 0,
		pollTrackingStarted: !1,
		pollTimer: null,
		pollTimerTier: null,
		lastPaneActivityAt: null,
		hasAgentRunEvidence: !1,
		pendingProcessExitAgent: null,
		lastForegroundAgent: null,
		processSession: 0
	}, s, c, l, u, d, f;
	function p() {
		n = !0, r = !0, o.hasAgentRunEvidence = !0, s?.scheduleNextPoll();
	}
	function m() {
		n = !1, r = !1, a.workingStatusObserved = !1, o.hasAgentRunEvidence = !1, o.pendingProcessExitAgent = null, j();
	}
	function h() {
		l.clearPendingHookDone();
	}
	function g() {
		l.clearPendingCodexAttention();
	}
	function _(e, t, n = {}) {
		return l.dispatchCompletion(e, t, n);
	}
	function v(e) {
		l.dispatchAttention(e);
	}
	let y = (e, t, n) => l.completionIdentityFor(e, t, n), b = (e) => l.hookCompletionIdentity(e), x = (e) => l.hookCompletionAgentIdentity(e), S = (e) => l.doneShouldUseQuietWindow(e);
	function C(e, t) {
		l.scheduleHookDoneCompletion(e, t);
	}
	l = createAgentCompletionNotificationController({
		options: e,
		state: a,
		processState: o,
		identityScope: t
	});
	function w(e) {
		t.recordWorkingBoundary(e);
	}
	function T() {
		t.clearWorkingBoundary();
	}
	function E(e) {
		return t.turnCompletedAtAlreadyHandled(e);
	}
	function D(e) {
		t.rememberTurnCompletedAt(e);
	}
	function O(e, n) {
		return t.consumePendingStampedTailForAgent(e, n);
	}
	function k(e) {
		t.consumeStampedTail(e);
	}
	function A() {
		return t.hasUnconsumedStampedTail();
	}
	c = createPendingTitleController({
		hasAgentEvidence: () => r,
		onEligible: M,
		onExpired: () => {},
		requestInspection: () => s.requestInspection("pending-title"),
		schedulePoll: () => s.scheduleNextPoll()
	}), s = createAgentCompletionProcessMonitor({
		options: e,
		state: o,
		identityScope: t,
		pendingTitle: c,
		establishAgentEvidence: p,
		clearAgentRunEvidence: m,
		hasPendingHookDone: () => a.pendingHookDoneTimer !== null,
		hasPendingCodexAttention: () => a.pendingCodexAttentionTimer !== null,
		dispatchCompletion: _
	}), u = createAgentCompletionTitleObserver({
		getLastStatus: () => i,
		setLastStatus: (e) => {
			i = e;
		},
		hasAgentEvidence: () => n && r,
		establishAgentEvidence: p,
		recordPaneActivity: P,
		recordTitleWorking: I,
		holdTitleCompletionPending: N,
		hasPendingTitle: () => c.get() !== null,
		dropPendingTitle: j,
		markTitleCompletionNotified: R,
		dispatchTitleCompletion: (e) => _("title", e, { completionIdentity: {
			source: "title",
			identity: e,
			agentIdentity: u.titleCompletionAgentIdentity(e)
		} })
	});
	function j() {
		c.drop();
	}
	function M() {
		let e = c.get();
		if (!e || !e.validatedByFreshInspection || !n || !r) return;
		let t = e.title;
		j(), R(t), _("title", t, { completionIdentity: {
			source: "title",
			identity: t,
			agentIdentity: u.titleCompletionAgentIdentity(t)
		} });
	}
	function N(e) {
		c.hold(e);
	}
	function P() {
		s.recordActivity();
	}
	function F() {
		P();
	}
	function I() {
		return h(), a.lastCompletionSource === "hook" && Date.now() - a.lastCompletionAt < COMPLETION_REPLAY_GUARD_MS ? !1 : (g(), a.workingStatusObserved = !0, a.requiresFreshWorking = !1, A() || t.deleteLast(), a.currentTurn += 1, j(), !0);
	}
	function L() {
		I();
	}
	function R(e) {
		a.lastCompletionIdentity = {
			source: "title",
			identity: e,
			agentIdentity: u.titleCompletionAgentIdentity(e)
		};
	}
	return d = createAgentCompletionHookObserver({
		options: e,
		state: a,
		establishAgentEvidence: p,
		recordPaneActivity: P,
		clearPendingHookDone: h,
		clearPendingCodexAttention: g,
		dispatchAttention: v,
		dispatchCompletion: (e, t, n) => _(e, t, n),
		scheduleHookDoneCompletion: C,
		doneShouldUseQuietWindow: S,
		hookCompletionIdentity: b,
		hookCompletionAgentIdentity: x,
		completionIdentityFor: y,
		openStampedTail: (e) => t.openStampedTail(e),
		rememberHandledTurnCompletedAt: D,
		turnCompletedAtAlreadyHandled: E,
		consumePendingStampedTailForAgent: O,
		consumeStampedTailForCurrentCoordinator: k,
		clearOriginStampedTail: () => t.clearOriginStampedTail(),
		recordWorkingBoundary: w,
		dropPendingTitle: j
	}), f = createAgentCompletionLifecycle({
		state: a,
		processState: o,
		identityScope: t,
		clearPendingHookDone: h,
		clearPendingCodexAttention: g,
		dropPendingTitle: j,
		clearWorkingBoundary: T,
		incrementGeneration: () => s.incrementGeneration(),
		clearPollTimer: () => s.clearPollTimer(),
		isLive: e.isLive,
		clearEvidence: () => {
			n = !1, r = !1;
		},
		clearTitleStatus: () => {
			i = null;
		}
	}), {
		observeTitle: u.observeTitle,
		observeClassifiedTitleCompletion: u.observeClassifiedTitleCompletion,
		observeTitleWorking: L,
		observeOutputActivity: F,
		observeHookStatus: d.observeHookStatus,
		seedHookStatus: d.seedHookStatus,
		startProcessTracking: () => s.start(),
		hasPendingHookDoneCompletion: f.hasPendingHookDoneCompletion,
		resetCompletionState: f.resetCompletionState,
		dispose: f.dispose
	};
}
async function playDesktopNotificationSound(e, t) {
	if (!e || e === "system") return !1;
	try {
		let e = await window.api.notifications.playSound({ volume: t ?? void 0 });
		return !e.played && e.reason !== "deduped" && console.warn("Failed to play custom notification sound:", e.reason), e.played;
	} catch (e) {
		return console.warn("Failed to play custom notification sound:", e), !1;
	}
}
var shownThisSession = !1;
function showBlockedNotificationFallbackToast() {
	shownThisSession || (shownThisSession = !0, toast.warning(translate("auto.lib.blocked.notification.fallback.de50bef680", "macOS is blocking Orca notifications"), {
		description: translate("auto.components.onboarding.mac.notification.permission.card.721d2bedb6", "Turn on Allow notifications for Orca in System Settings."),
		action: {
			label: translate("auto.components.onboarding.NotificationStep.4f6a1da718", "Open System Settings"),
			onClick: () => {
				window.api.notifications.openSystemSettings();
			}
		}
	}));
}
function isSupersededAgentCompletionSnapshot(e, t) {
	if (!e || !t) return !1;
	let n = t.localStateStartedAt ?? t.stateStartedAt;
	if (typeof n != "number") return e.state !== t.state;
	if (e.stateStartedAt > n) return !0;
	let r = typeof t.turnCompletedAt == "number" && Number.isFinite(t.turnCompletedAt);
	return e.stateStartedAt === n && e.state !== t.state && !r;
}
function getResolvedFolderHost(e, t) {
	let n = e.activeWorktreeId === folderWorkspaceKey(t) ? e.activeWorkspaceExecutionHostId ?? void 0 : void 0, r = findIndexedFolderWorkspaceOwner(e.folderWorkspaces, t, n), i = r ? findIndexedProjectGroupOwner(e.projectGroups, r.projectGroupId, n) : null, a = parseExecutionHostId(r?.executionHostId ?? i?.executionHostId);
	if (a) return a.id;
	let o = r?.connectionId?.trim() || i?.connectionId?.trim();
	if (o) return toSshExecutionHostId(o);
	let s = parseExecutionHostId(e.restoredRuntimeHostIdByWorkspaceSessionKey?.[folderWorkspaceKey(t)]);
	return s?.kind === "runtime" ? s.id : r && (i || n) ? n ?? "local" : null;
}
function getResolvedExecutionHostIdForWorktree(e, t) {
	if (!t) return null;
	if (t === "global-floating-terminal") return LOCAL_EXECUTION_HOST_ID;
	let n = parseWorkspaceKey(t);
	if (n?.type === "folder") return getResolvedFolderHost(e, n.folderWorkspaceId);
	let r = e.activeWorktreeId === t ? e.activeWorkspaceExecutionHostId ?? void 0 : void 0, i = r ? findIndexedWorktreeOwnerForHost(e.worktreesByRepo, t, r) : findIndexedWorktreeOwner(e.worktreesByRepo, t), a = parseExecutionHostId(i?.hostId);
	if (a) return a.id;
	if (!i) return null;
	let o = r ? findIndexedRepoOwnerForHost(e.repos, i.repoId, r) : findIndexedRepoOwner(e.repos, i.repoId);
	if (!o) return null;
	let s = parseExecutionHostId(o.executionHostId);
	return s ? s.id : o.connectionId?.trim() ? toSshExecutionHostId(o.connectionId) : LOCAL_EXECUTION_HOST_ID;
}
function getPaneKeyTabId(e) {
	let t = parsePaneKey(e);
	if (t) return t.tabId;
	let n = e.indexOf(":");
	return n <= 0 || n !== e.lastIndexOf(":") || n === e.length - 1 ? null : e.slice(0, n);
}
function isSuppressedPtyHint(e, t) {
	return !!(t && e.suppressedPtyExitIds?.[t]);
}
function hasLivePtyForWorktree(e, t) {
	return (e.tabsByWorktree[t] ?? []).some((t) => (e.ptyIdsByTabId[t.id] ?? []).some((t) => !isSuppressedPtyHint(e, t)));
}
function hasLivePtyForPaneKey(e, t) {
	if (!t) return !1;
	let n = getPaneKeyTabId(t);
	return n !== null && (e.ptyIdsByTabId[n] ?? []).some((t) => !isSuppressedPtyHint(e, t));
}
function hasLivePtyForNotification(e, t, n) {
	return hasLivePtyForWorktree(e, t) || hasLivePtyForPaneKey(e, n);
}
function layoutContainsLeaf(e, t) {
	return e ? e.type === "leaf" ? e.leafId === t : layoutContainsLeaf(e.first, t) || layoutContainsLeaf(e.second, t) : !1;
}
function isCurrentLivePaneKey(e, t, n) {
	let r = parsePaneKey(n);
	if (!r || Object.entries(e.tabsByWorktree).some(([e, n]) => e !== t && n.some((e) => e.id === r.tabId))) return !1;
	let i = (e.ptyIdsByTabId[r.tabId] ?? []).filter((t) => !isSuppressedPtyHint(e, t));
	if (i.length === 0) return !1;
	let a = e.terminalLayoutsByTabId?.[r.tabId];
	if (!a) return !0;
	if (!layoutContainsLeaf(a.root, r.leafId)) return !1;
	let o = a.ptyIdsByLeafId?.[r.leafId];
	return o === void 0 || i.includes(o);
}
function isCurrentKnownPaneKey(e, t, n) {
	let r = parsePaneKey(n);
	if (!r) return !1;
	let i;
	for (let [n, a] of Object.entries(e.tabsByWorktree)) {
		let e = a.find((e) => e.id === r.tabId);
		if (e) {
			if (n !== t) return !1;
			i = e.ptyId;
		}
	}
	if (i === void 0) return !1;
	let a = e.terminalLayoutsByTabId?.[r.tabId];
	if (a?.root && !layoutContainsLeaf(a.root, r.leafId)) return !1;
	let o = a?.ptyIdsByLeafId?.[r.leafId], s = [i, o].filter((e) => !!e);
	return s.length === 0 || s.some((t) => !isSuppressedPtyHint(e, t));
}
function findWorktreeRowOnItsOwnHost(e, t) {
	let n = getIndexedWorktreesById(e.worktreesByRepo, t);
	if (n.length <= 1) return {
		worktree: n[0],
		hostId: null
	};
	let r = getResolvedExecutionHostIdForWorktree(e, t);
	if (!r) return {
		worktree: void 0,
		hostId: null
	};
	let i = worktreeHostMatchOptions(e, n[0].repoId, r);
	return {
		worktree: n.find((e) => worktreeMatchesHost(e, r, i)),
		hostId: r
	};
}
function findNotificationRepo(e, t, n, r) {
	if (resolveIndexedRepoOwner(e.repos, n).kind !== "ambiguous") return getRepoMapFromState(e).get(n);
	let i = r ?? getResolvedExecutionHostIdForWorktree(e, t);
	if (i) return findIndexedRepoOwnerForHost(e.repos, n, i) ?? void 0;
}
function getNotificationWorkspaceLabels(e, t, n) {
	let r = parseWorkspaceKey(t), i = n?.trim() || "workspace";
	if (r?.type === "folder") {
		let t = findIndexedFolderWorkspaceOwner(e.folderWorkspaces, r.folderWorkspaceId);
		return {
			repoLabel: (t && findIndexedProjectGroupOwner(e.projectGroups, t.projectGroupId, getCatalogOwnerHostId(t)))?.name,
			worktreeLabel: t?.name || i
		};
	}
	let a = r?.type === "worktree" ? r.worktreeId : t, { worktree: o, hostId: s } = findWorktreeRowOnItsOwnHost(e, a);
	return {
		repoLabel: (o ? findNotificationRepo(e, a, o.repoId, s) : void 0)?.displayName,
		worktreeLabel: o?.displayName || o?.branch || i
	};
}
function isOrcaWindowForegroundFocused() {
	return typeof document > "u" ? !0 : document.visibilityState === "visible" && document.hasFocus();
}
function isVisibleForegroundPaneKey(e, t, n) {
	if (!isOrcaWindowForegroundFocused() || e.activeWorktreeId !== t) return !1;
	let r = parsePaneKey(n);
	return !r || e.activeTabId !== r.tabId ? !1 : e.terminalLayoutsByTabId?.[r.tabId]?.activeLeafId === r.leafId;
}
function admitTerminalPane(e, t, n) {
	let r = getPaneKeyTabId(t.surfaceKey);
	return r === null ? {
		admitted: !1,
		cause: "unknown-surface"
	} : (n.hasLiveSession ? isCurrentLivePaneKey(e, t.workspaceId, t.surfaceKey) : isCurrentKnownPaneKey(e, t.workspaceId, t.surfaceKey)) ? {
		admitted: !0,
		groupId: r
	} : {
		admitted: !1,
		cause: "superseded-surface"
	};
}
function collectTerminalAttentionRemainder(e, t) {
	let n = new Set((e.tabsByWorktree[t] ?? []).map((e) => e.id));
	if (n.size === 0) return {
		hasSurfaces: !1,
		unreadSubjectKeys: [],
		unreadGroupIds: []
	};
	let r = [];
	for (let t of Object.keys(e.unreadAgentCompletionPanes)) {
		let e = parsePaneKey(t);
		e && n.has(e.tabId) && r.push(t);
	}
	return {
		hasSurfaces: !0,
		unreadSubjectKeys: r,
		unreadGroupIds: Object.keys(e.unreadTerminalTabs).filter((e) => n.has(e))
	};
}
function resolveViewedPaneKey(e, t) {
	let n = e.terminalLayoutsByTabId[t]?.activeLeafId ?? null;
	return n !== null && isTerminalLeafId(n) ? makePaneKey(t, n) : null;
}
function createTerminalAttentionSurface(e) {
	return {
		hasLiveSession: (t) => hasLivePtyForNotification(e, t.workspaceId, t.surfaceKey),
		admitSurface: (t, n) => admitTerminalPane(e, t, n),
		isSurfaceViewed: (t) => isVisibleForegroundPaneKey(e, t.workspaceId, t.surfaceKey),
		isWorkspaceViewed: (t) => e.activeWorktreeId === t && isOrcaWindowForegroundFocused(),
		isWorkspaceActive: (t) => e.activeWorktreeId === t,
		resolveViewedSubjectKey: (t) => resolveViewedPaneKey(e, t),
		collectWorkspaceAttentionRemainder: (t) => collectTerminalAttentionRemainder(e, t)
	};
}
function resolveAgentAttention(e, t) {
	let { workspaceId: n } = e.subject, r = e.subject.surfaceKey ?? null, i = t.hasLiveSession(e.subject);
	if (!i && !e.hasFreshActivityEvidence) return {
		admitted: !1,
		cause: "no-live-session"
	};
	let a = null;
	if (e.settlesTurn && r !== null) {
		let o = t.admitSurface({
			workspaceId: n,
			surfaceKey: r
		}, {
			hasLiveSession: i,
			hasFreshActivityEvidence: e.hasFreshActivityEvidence
		});
		if (!o.admitted) return {
			admitted: !1,
			cause: o.cause
		};
		a = o.groupId;
	}
	let o = {
		workspaceId: n,
		subjectKey: r,
		workspaceIsActive: t.isWorkspaceActive(n)
	};
	return e.settlesTurn ? {
		admitted: !0,
		unread: (r === null ? t.isWorkspaceViewed(n) : t.isSurfaceViewed({
			workspaceId: n,
			surfaceKey: r
		})) ? null : {
			workspaceId: n,
			subjectKey: r,
			groupId: a,
			reason: e.reason,
			groupAttentionEnabled: e.groupAttentionEnabled
		},
		delivery: o
	} : {
		admitted: !0,
		unread: null,
		delivery: o
	};
}
function applyAgentAttentionUnread(e, t) {
	t.markWorkspaceUnread(e.workspaceId), e.subjectKey !== null && t.markSubjectUnread(e.subjectKey, e.reason), e.groupAttentionEnabled && e.groupId !== null && e.subjectKey !== null && (t.markGroupUnread(e.groupId, e.reason), t.markSurfaceUnread(e.subjectKey, e.reason));
}
function applyAgentAttention(e, t) {
	e.admitted && (e.unread !== null && applyAgentAttentionUnread(e.unread, t.unread), t.requestDelivery(e.delivery));
}
var import_react = /* @__PURE__ */ __toESM(require_react()), AGENT_NOTIFICATION_SNAPSHOT_MAX_AGE_MS = 1e4;
function agentSnapshotMatchesExplicitTitle(e, t) {
	return !e || !t || e.agentType === t;
}
function hasFreshActiveHookStatus(e, t) {
	let n = t && e?.agentType && e.agentType !== "unknown" && !shareCompatibleTitleIdentityGroup(e.agentType, t);
	return !!(isFreshNonDoneAgentStatus(e) && !n);
}
function dispatchTerminalNotification(e, t) {
	let n = useAppStore.getState(), r = t.source === "agent-task-complete" && t.terminalTitle ? resolveCommittedTitleAgentType(t.terminalTitle) : null, i = t.source === "agent-task-complete" && t.paneKey ? n.agentStatusByPaneKey[t.paneKey] : void 0, a = t.source === "agent-task-complete" && agentSnapshotMatchesExplicitTitle(t.agentStatusSnapshot, r) ? t.agentStatusSnapshot : void 0, o = i && Date.now() - i.updatedAt <= AGENT_NOTIFICATION_SNAPSHOT_MAX_AGE_MS && agentSnapshotMatchesExplicitTitle(i, r) ? i : void 0;
	if (t.source === "agent-task-complete" && t.agentCompletionSource !== "process-exit" && !a && hasFreshActiveHookStatus(i, r)) return;
	let s = t.source === "agent-task-complete" ? a ?? (t.agentCompletionSource === "process-exit" && o?.state !== "done" ? void 0 : o) : void 0;
	if (t.source === "agent-task-complete" && isSupersededAgentCompletionSnapshot(i, a)) return;
	let c = a?.stateStartedAt ?? o?.stateStartedAt, l = resolveAgentAttention({
		subject: {
			workspaceId: e,
			surfaceKey: t.paneKey
		},
		reason: t.source === "agent-task-complete" ? "agent-completion" : "terminal-bell",
		settlesTurn: t.source === "agent-task-complete",
		hasFreshActivityEvidence: !!s,
		groupAttentionEnabled: n.settings?.experimentalTerminalAttention === !0
	}, createTerminalAttentionSurface(n));
	if (!l.admitted) return;
	let u = n.settings?.notifications?.customSoundId ?? "system", d = n.settings?.notifications?.customSoundVolume ?? null, f = s ? {
		agentType: s.agentType,
		agentState: s.state,
		agentPrompt: s.prompt,
		agentToolName: s.toolName,
		agentToolInput: s.toolInput,
		agentLastAssistantMessage: s.lastAssistantMessage,
		agentInterrupted: s.interrupted
	} : {}, p = t.source === "agent-task-complete" ? buildAgentNotificationId({
		worktreeId: e,
		paneKey: t.paneKey,
		stateStartedAt: c
	}) : null;
	applyAgentAttention(l, {
		unread: {
			markWorkspaceUnread: n.markWorktreeUnread,
			markSubjectUnread: n.markAgentCompletionPaneUnread,
			markGroupUnread: n.markTerminalTabUnread,
			markSurfaceUnread: n.markTerminalPaneUnread
		},
		requestDelivery: (e) => {
			window.api.notifications.dispatch({
				source: t.source,
				...p ? { notificationId: p } : {},
				worktreeId: e.workspaceId,
				paneKey: e.subjectKey ?? void 0,
				...getNotificationWorkspaceLabels(n, e.workspaceId, t.terminalTitle),
				terminalTitle: t.terminalTitle,
				isActiveWorktree: e.workspaceIsActive,
				...f
			}).then((e) => {
				if (e.delivered) {
					playDesktopNotificationSound(u, d);
					return;
				}
				e.reason === "blocked-by-system" && showBlockedNotificationFallbackToast();
			}).catch((e) => {
				console.warn("Failed to dispatch notification:", e);
			});
		}
	});
}
function useNotificationDispatch(e) {
	return (0, import_react.useCallback)((t) => dispatchTerminalNotification(e, t), [e]);
}
function isAskUserQuestionTool(e) {
	let t = e?.replaceAll(/[^a-z0-9]/gi, "").toLowerCase();
	return t === "askuserquestion" || t === "requestuserinput";
}
var QUESTION_ANSWER_ENTER_INPUTS = new Set([
	"\r",
	"\n",
	"\r\n",
	"\x1B[13u",
	"\x1B[13;1u"
]), QUESTION_ANSWER_DIGIT_INPUTS = /* @__PURE__ */ new Set("123456789");
function isPotentialQuestionAnsweredSubmitInput(e) {
	return QUESTION_ANSWER_ENTER_INPUTS.has(e) || QUESTION_ANSWER_DIGIT_INPUTS.has(e);
}
function readSingleSelectOptionCount(e) {
	if (!e) return null;
	try {
		let t = JSON.parse(e);
		if (!Array.isArray(t.questions) || t.questions.length !== 1) return -1;
		let [n] = t.questions;
		return !n || n.multiSelect === !0 || !Array.isArray(n.options) ? -1 : n.options.length;
	} catch {
		return -1;
	}
}
function isQuestionAnsweredSubmitInput(e, t) {
	if (!isPotentialQuestionAnsweredSubmitInput(e)) return !1;
	let n = readSingleSelectOptionCount(t);
	return n === -1 ? !1 : QUESTION_ANSWER_ENTER_INPUTS.has(e) ? !0 : n === null ? !1 : Number(e) <= n;
}
var CODEX_AUTO_APPROVED_PERMISSION_STATES = ["waiting", "blocked"];
function isCodexAutoApprovedPermissionState(e) {
	return CODEX_AUTO_APPROVED_PERMISSION_STATES.some((t) => t === e);
}
function shouldSuppressCodexAutoApprovalStatus(e, t) {
	if (e.agentType !== "codex" || !isCodexAutoApprovedPermissionState(e.state) || isAskUserQuestionTool(e.toolName)) return !1;
	let n = useAppStore.getState();
	if (typeof n.getAgentLaunchConfigForStatusMetadata != "function") return !1;
	let r = n.getAgentLaunchConfigForStatusMetadata({
		paneKey: t.paneKey,
		agentType: "codex",
		tabId: t.tabId,
		terminalHandle: t.terminalHandle,
		launchToken: t.launchToken,
		providerSession: t.providerSession,
		existingProviderSession: t.existingProviderSession
	});
	return r ? resolveTuiAgentPermissionMode({
		agent: "codex",
		agentArgs: r.agentArgs,
		agentEnv: r.agentEnv
	}) === "yolo" : !1;
}
function shouldSuppressCodexAutoApprovalSyntheticTitle(e, t) {
	return e === getSyntheticAgentTitleProfile("codex")?.permissionLabel ? shouldSuppressCodexAutoApprovalStatus({
		state: "waiting",
		prompt: "",
		agentType: "codex"
	}, t) : !1;
}
function createCodexAutoApprovalHookCompletionSuppressor(e, t) {
	return (n) => shouldSuppressCodexAutoApprovalStatus(n, {
		paneKey: e,
		...t?.()
	});
}
var handlersByPaneKey = /* @__PURE__ */ new Map();
function registerAgentHookTerminalLifecycleHandler(e, t) {
	return handlersByPaneKey.set(e, t), () => {
		handlersByPaneKey.get(e) === t && handlersByPaneKey.delete(e);
	};
}
function dispatchAgentHookTerminalLifecycle(e, t) {
	handlersByPaneKey.get(e)?.(t);
}
const AGENT_TASK_COMPLETE_NOTIFICATION_GRACE_MS = 250, AGENT_TASK_COMPLETE_NOTIFICATION_MAX_WAIT_MS = 1500;
function isAgentTaskCompleteOsNotificationEnabledFromState(e) {
	let t = e.settings?.notifications;
	return t?.enabled !== !1 && t?.agentTaskComplete !== !1;
}
function isAgentTaskCompleteTrackingEnabledFromState(e) {
	return e.settings !== null;
}
function hasAgentNotificationDetail(e) {
	return !!(e && Date.now() - e.updatedAt <= 1e4 && (e.lastAssistantMessage || e.toolName || e.toolInput));
}
function canDispatchAgentNotificationAfterGrace(e, t = {}) {
	return hasAgentNotificationDetail(e) && (e?.state !== "done" || t.allowDoneDetailAfterGrace === !0);
}
function terminalTabLivenessMatches(e, t, n) {
	if (e === t) return !0;
	let r = Object.keys(e), i = Object.keys(t);
	if (r.length !== i.length) return !1;
	for (let a = 0; a < r.length; a += 1) {
		let o = r[a];
		if (i[a] !== o) return !1;
		let s = e[o], c = t[o];
		if (s !== c) {
			if (!s || !c || s.length !== c.length) return !1;
			for (let e = 0; e < s.length; e += 1) {
				let t = s[e];
				n?.();
				let r = c[e];
				if (!r || t.id !== r.id || t.ptyId !== r.ptyId) return !1;
			}
		}
	}
	return !0;
}
function shouldSync(e, t, n) {
	return isAgentTaskCompleteTrackingEnabledFromState(e) !== isAgentTaskCompleteTrackingEnabledFromState(t) || e.ptyIdsByTabId !== t.ptyIdsByTabId || e.terminalLayoutsByTabId !== t.terminalLayoutsByTabId || e.suppressedPtyExitIds !== t.suppressedPtyExitIds ? !0 : !terminalTabLivenessMatches(e.tabsByWorktree, t.tabsByWorktree, n);
}
function shouldSyncAgentHookCompletionForStoreUpdate(e, t) {
	return shouldSync(e, t);
}
var coordinatorsByPaneKey = /* @__PURE__ */ new Map(), paneKeysRequiringFreshWorking = /* @__PURE__ */ new Set(), wasAgentTaskCompleteTrackingEnabled, requireFreshWorkingForNewTrackingCoordinators = !1, lastPrunedLivenessSnapshot = null;
function disposeCoordinatorForPaneKey(e) {
	coordinatorsByPaneKey.get(e)?.coordinator.dispose(), coordinatorsByPaneKey.delete(e), paneKeysRequiringFreshWorking.delete(e);
}
function buildTabIndex(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of Object.values(e ?? {})) for (let e of n) t.has(e.id) || t.set(e.id, e);
	return t;
}
function pruneClosedPaneCoordinators() {
	if (coordinatorsByPaneKey.size === 0 && paneKeysRequiringFreshWorking.size === 0) {
		lastPrunedLivenessSnapshot = null;
		return;
	}
	let e = useAppStore.getState(), t = {
		tabsByWorktree: e.tabsByWorktree,
		ptyIdsByTabId: e.ptyIdsByTabId,
		terminalLayoutsByTabId: e.terminalLayoutsByTabId,
		suppressedPtyExitIds: e.suppressedPtyExitIds
	};
	if (lastPrunedLivenessSnapshot?.tabsByWorktree === t.tabsByWorktree && lastPrunedLivenessSnapshot.ptyIdsByTabId === t.ptyIdsByTabId && lastPrunedLivenessSnapshot.terminalLayoutsByTabId === t.terminalLayoutsByTabId && lastPrunedLivenessSnapshot.suppressedPtyExitIds === t.suppressedPtyExitIds) return;
	lastPrunedLivenessSnapshot = t;
	let n = buildTabIndex(t.tabsByWorktree);
	for (let e of coordinatorsByPaneKey.keys()) paneCanReceiveHookCompletion(e, n) || disposeCoordinatorForPaneKey(e);
	for (let e of paneKeysRequiringFreshWorking) paneCanReceiveHookCompletion(e, n) || paneKeysRequiringFreshWorking.delete(e);
	coordinatorsByPaneKey.size === 0 && paneKeysRequiringFreshWorking.size === 0 && (lastPrunedLivenessSnapshot = null);
}
function isAgentTaskCompleteTrackingEnabled() {
	return isAgentTaskCompleteTrackingEnabledFromState(useAppStore.getState());
}
function syncAgentTaskCompleteTrackingEnabled(e) {
	if (wasAgentTaskCompleteTrackingEnabled === void 0) {
		wasAgentTaskCompleteTrackingEnabled = e, requireFreshWorkingForNewTrackingCoordinators = !e;
		return;
	}
	if (e !== wasAgentTaskCompleteTrackingEnabled) {
		requireFreshWorkingForNewTrackingCoordinators = !0;
		for (let e of coordinatorsByPaneKey.keys()) paneKeysRequiringFreshWorking.add(e);
	}
	wasAgentTaskCompleteTrackingEnabled = e;
}
function syncAgentHookCompletionNotificationSettings() {
	pruneClosedPaneCoordinators();
	let e = isAgentTaskCompleteTrackingEnabled();
	return syncAgentTaskCompleteTrackingEnabled(e), e;
}
function syncAgentHookCompletionNotificationsForStoreUpdate(e, t) {
	return shouldSyncAgentHookCompletionForStoreUpdate(e, t) ? (wasAgentTaskCompleteTrackingEnabled === void 0 && syncAgentTaskCompleteTrackingEnabled(isAgentTaskCompleteTrackingEnabledFromState(t)), syncAgentHookCompletionNotificationSettings(), !0) : !1;
}
function getPtyIdForPaneKey(e) {
	let t = parsePaneKey(e);
	if (!t) return null;
	let n = useAppStore.getState(), r = n.ptyIdsByTabId?.[t.tabId];
	if (!r || r.length === 0) return null;
	let i = n.terminalLayoutsByTabId?.[t.tabId], a = i?.ptyIdsByLeafId;
	if (a) {
		let e = a[t.leafId];
		return e && r.includes(e) ? e : i?.root ? collectLeafIdsInOrder(i.root).includes(t.leafId) ? r[0] ?? null : null : r[0] ?? null;
	}
	return r[0] ?? null;
}
function paneHasLivePty(e) {
	return getPtyIdForPaneKey(e) !== null;
}
function resolveTabById(e, t, n) {
	if (n) return n.get(t);
	for (let n of Object.values(e.tabsByWorktree ?? {})) {
		let e = n.find((e) => e.id === t);
		if (e) return e;
	}
}
function paneKeyHasUnsuppressedPtyHint(e, t, n) {
	let r = parsePaneKey(t);
	if (!r) return !1;
	let i = resolveTabById(e, r.tabId, n);
	if (!i) return !1;
	let a = e.terminalLayoutsByTabId?.[r.tabId];
	if (a?.root && !collectLeafIdsInOrder(a.root).includes(r.leafId)) return !1;
	let o = a?.ptyIdsByLeafId?.[r.leafId], s = [i.ptyId, o].filter((e) => !!e);
	return s.length === 0 || s.some((t) => !e.suppressedPtyExitIds?.[t]);
}
function paneCanReceiveHookCompletion(e, t) {
	return paneKeyHasUnsuppressedPtyHint(useAppStore.getState(), e, t) || paneHasLivePty(e);
}
function createCoordinator(e, t) {
	return createAgentCompletionCoordinator({
		paneKey: e,
		statusLane: "hook",
		getPtyId: () => getPtyIdForPaneKey(e),
		getSettings: () => useAppStore.getState().settings,
		inspectProcess: async () => ({
			foregroundProcess: null,
			hasChildProcesses: !1
		}),
		dispatchHookLifecycle: (t) => dispatchAgentHookTerminalLifecycle(e, t),
		dispatchCompletion: (n, r) => {
			!isAgentTaskCompleteTrackingEnabled() || paneKeysRequiringFreshWorking.has(e) || dispatchTerminalNotification(t, {
				source: "agent-task-complete",
				terminalTitle: n,
				paneKey: e,
				...r?.agentStatus ? { agentStatusSnapshot: r.agentStatus } : {}
			});
		},
		dispatchAttention: (n, r) => {
			!isAgentTaskCompleteTrackingEnabled() || paneKeysRequiringFreshWorking.has(e) || dispatchTerminalNotification(t, {
				source: "agent-task-complete",
				terminalTitle: n,
				paneKey: e,
				agentStatusSnapshot: r.agentStatus
			});
		},
		isLive: () => paneCanReceiveHookCompletion(e),
		shouldSuppressHookCompletion: createCodexAutoApprovalHookCompletionSuppressor(e)
	});
}
function observeAgentHookCompletionForNotification({ paneKey: e, worktreeId: t, payload: n, seedOnly: r }) {
	if (r !== !0 && (pruneClosedPaneCoordinators(), !paneCanReceiveHookCompletion(e))) return;
	let i = isAgentTaskCompleteTrackingEnabled();
	r === !0 ? syncAgentTaskCompleteTrackingEnabled(i) : syncAgentHookCompletionNotificationSettings();
	let a = coordinatorsByPaneKey.get(e);
	(!a || a.worktreeId !== t) && (a?.coordinator.dispose(), a = {
		worktreeId: t,
		coordinator: createCoordinator(e, t)
	}, coordinatorsByPaneKey.set(e, a), requireFreshWorkingForNewTrackingCoordinators && paneKeysRequiringFreshWorking.add(e)), n.state === "working" && n.turnCompletedAt === void 0 && i && paneKeysRequiringFreshWorking.delete(e), r === !0 ? a.coordinator.seedHookStatus(n) : a.coordinator.observeHookStatus(n);
}
function resetAgentHookCompletionNotificationCoordinators() {
	for (let e of coordinatorsByPaneKey.values()) e.coordinator.dispose();
	coordinatorsByPaneKey.clear(), paneKeysRequiringFreshWorking.clear(), lastPrunedLivenessSnapshot = null, wasAgentTaskCompleteTrackingEnabled = isAgentTaskCompleteTrackingEnabled(), requireFreshWorkingForNewTrackingCoordinators = !wasAgentTaskCompleteTrackingEnabled;
}
var inFlightProbeByEnvironment = /* @__PURE__ */ new Map();
function isTerminalListResult(e) {
	if (!e || typeof e != "object" || !Array.isArray(e.terminals) || !Number.isInteger(e.totalCount) || e.totalCount < 0) return !1;
	let t = e.hostScope;
	return t === void 0 ? !0 : !!t && typeof t == "object" && Array.isArray(t.hostIds) && Array.isArray(t.omittedHostIds);
}
async function probeHost(e, t, n) {
	let r = await t({
		selector: e,
		method: "terminal.list",
		params: {
			limit: 1,
			requireFreshPtyLiveness: !0,
			includeVisualLayouts: !1
		},
		timeoutMs: 15e3,
		expectedEnvironmentPairingRevision: n
	});
	if (r.ok === !1 || !isTerminalListResult(r.result)) return "unverifiable";
	let i = r.result.hostScope;
	if (i && !hostScopeCensusIsComplete(i)) return "unverifiable";
	let { terminals: a, totalCount: o } = r.result;
	return a.length > 0 || typeof o == "number" && o > 0 ? "live" : "none";
}
function probeHostLiveTerminals(e, t = (e) => window.api.runtimeEnvironments.call(e), n = 0, r) {
	let i = `${e}\0${n}\0${r ?? "unknown"}`, a = inFlightProbeByEnvironment.get(i);
	if (a) return a;
	let o = probeHost(e, t, r).catch(() => "unverifiable").finally(() => {
		inFlightProbeByEnvironment.get(i) === o && inFlightProbeByEnvironment.delete(i);
	});
	return inFlightProbeByEnvironment.set(i, o), o;
}
function captureHostSessionMirrorSettleFence(e, t = {}) {
	return {
		environmentId: e,
		connectionGeneration: t.connectionGeneration ?? getRuntimeEnvironmentConnectionGeneration(e),
		pairingRevision: t.pairingRevision ?? getRuntimeEnvironmentRevision(e),
		trackingGeneration: t.trackingGeneration ?? getWebSessionTabsTrackingGeneration(e)
	};
}
function hostSessionMirrorSettleFenceIsCurrent(e) {
	return getRuntimeEnvironmentConnectionGeneration(e.environmentId) === e.connectionGeneration && getRuntimeEnvironmentRevision(e.environmentId) === e.pairingRevision && getWebSessionTabsTrackingGeneration(e.environmentId) === e.trackingGeneration;
}
function settleEmptyHostInventoryOnlyIfHostHasNoTerminals(e) {
	probeHostLiveTerminals(e.environmentId, void 0, e.connectionGeneration, e.pairingRevision).then((t) => {
		t === "none" && hostSessionMirrorSettleFenceIsCurrent(e) && markHostSessionMirrorHydrated(e.environmentId);
	});
}
function createHostSessionMirrorSettle(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.frames) t.set(n.environmentId, captureHostSessionMirrorSettleFence(n.environmentId, {
		connectionGeneration: n.expectedEnvironmentConnectionGeneration,
		pairingRevision: n.expectedEnvironmentPairingRevision,
		trackingGeneration: n.expectedTrackingGeneration
	}));
	return e.fullInventory && t.set(e.fullInventory.environmentId, captureHostSessionMirrorSettleFence(e.fullInventory.environmentId, {
		connectionGeneration: e.fullInventory.expectedEnvironmentConnectionGeneration,
		pairingRevision: e.fullInventory.expectedEnvironmentPairingRevision,
		trackingGeneration: e.fullInventory.expectedTrackingGeneration
	})), () => {
		let { frames: n, fullInventory: r } = e, i = n.filter(({ decision: e }) => e.settlesHostMirror);
		if (r && i.length === r.publishedSnapshotCount) {
			let e = t.get(r.environmentId);
			if (!e || !hostSessionMirrorSettleFenceIsCurrent(e)) return;
			if (r.publishedSnapshotCount === 0) {
				r.authoritative ? markHostSessionMirrorHydrated(r.environmentId) : settleEmptyHostInventoryOnlyIfHostHasNoTerminals(e);
				return;
			}
			markHostSessionMirrorHydrated(r.environmentId);
			return;
		}
		for (let { environmentId: e, worktreeId: n } of i) {
			let r = t.get(e);
			r && hostSessionMirrorSettleFenceIsCurrent(r) && markHostSessionMirrorWorktreeHydrated(e, n);
		}
	};
}
function hostSessionMirrorSettleForPatchlessFrame(e, t, n, r = {}) {
	if (!e.settlesHostMirror) return null;
	let i = captureHostSessionMirrorSettleFence(t, r);
	return () => {
		hostSessionMirrorSettleFenceIsCurrent(i) && markHostSessionMirrorWorktreeHydrated(t, n);
	};
}
function applyWebSessionTabsStorePatch(e, t, n, r = !1) {
	let i = !1, a = !1, o = [], s = (t) => {
		let s = e(t);
		if (i = s !== t && Object.hasOwn(s, "agentStatusByPaneKey"), n) {
			let e = s.agentStatusByPaneKey ?? t.agentStatusByPaneKey, i = Array.isArray(n) ? n : [n];
			for (let n of i) for (let i of n.tabs) {
				if (i.type !== "terminal") continue;
				let a = remapHostAgentStatus(i), s = a ? e[a.paneKey] : void 0, l = a ? normalizeTurnCompletedAtField(i.turnCompletedAt, a.state) : void 0;
				a?.state === "done" && l === void 0 && hostWorkingClientBoundaryByPaneKey.delete(a.paneKey);
				let u = !!(a && isClientAuthoritativeAgentStatusPane(a.paneKey) && (a.state === "working" || l !== void 0));
				if (!a || !u && (!s || s === t.agentStatusByPaneKey[a.paneKey] || !agentStatusEntryEqual(s, a))) continue;
				let d = u ? a : s;
				if (!d) continue;
				let f = u ? t.agentStatusByPaneKey[d.paneKey]?.stateStartedAt : void 0, p = f;
				if (u && d.state === "working" && f !== void 0) if (l === void 0) {
					let e = hostWorkingClientBoundaryByPaneKey.get(d.paneKey);
					if ((!e || e.hostStateStartedAt !== d.stateStartedAt || e.hostPrompt !== d.prompt || e.stamped) && (hostWorkingClientBoundaryByPaneKey.delete(d.paneKey), hostWorkingClientBoundaryByPaneKey.set(d.paneKey, {
						hostStateStartedAt: d.stateStartedAt,
						hostPrompt: d.prompt,
						clientStateStartedAt: f,
						stamped: !1
					}), hostWorkingClientBoundaryByPaneKey.size > 512)) {
						let e = hostWorkingClientBoundaryByPaneKey.keys().next().value;
						e !== void 0 && hostWorkingClientBoundaryByPaneKey.delete(e);
					}
				} else {
					let e = hostWorkingClientBoundaryByPaneKey.get(d.paneKey);
					e?.hostStateStartedAt === d.stateStartedAt && e.hostPrompt === d.prompt && (p = e.clientStateStartedAt, e.stamped = !0);
				}
				!r && d.state !== "working" || o.push({
					paneKey: d.paneKey,
					worktreeId: d.worktreeId ?? n.worktree,
					...r ? {} : { seedOnly: !0 },
					payload: {
						...pickParsedAgentStatusPayload({
							...d,
							...l === void 0 ? {} : { turnCompletedAt: l }
						}),
						stateStartedAt: d.stateStartedAt,
						...u ? { localStateStartedAt: p } : {}
					}
				});
			}
		}
		return a = !0, s;
	};
	try {
		useAppStore.setState(s);
	} catch (e) {
		if (!a) throw e;
		console.warn("[web-session-tabs-sync] a store subscriber failed after the patch landed:", e);
	}
	let l = createHostSessionMirrorSettle(t);
	try {
		i && useAppStore.getState().scheduleAgentStatusFreshness();
		for (let e of o) observeAgentHookCompletionForNotification(e);
	} catch (e) {
		console.warn("[web-session-tabs-sync] post-patch bookkeeping failed:", e);
	}
	return l;
}
function getReachableRuntimeSessionMirrorTargets(e) {
	let t = new Map((e.runtimeEnvironments ?? []).map((e) => [e.id, e])), n = [];
	for (let r of getRuntimeSessionMirrorEnvironmentIds(e)) {
		let i = e.runtimeStatusByEnvironmentId?.get(r);
		if (isDisconnectedRuntimeHostState(runtimeHostConnectionStateForEntry(i))) continue;
		let a = lastVerifiedRuntimeStatus(i)?.runtimeId;
		if (!a) continue;
		let o = t.get(r);
		o && n.push({
			environmentId: r,
			runtimeId: a,
			connectionGeneration: i?.connectionGeneration ?? 0,
			pairingRevision: o.pairingRevision ?? o.createdAt,
			hostContactEpoch: i?.hostContactEpoch ?? 0
		});
	}
	return n;
}
function selectRuntimeSessionMirrorTargetInputs(e) {
	return {
		activeRuntimeEnvironmentId: e.settings?.activeRuntimeEnvironmentId ?? null,
		repos: e.repos,
		worktreesByRepo: e.worktreesByRepo,
		detectedWorktreesByRepo: e.detectedWorktreesByRepo,
		projectGroups: e.projectGroups,
		restoredRuntimeHostIdByWorkspaceSessionKey: e.restoredRuntimeHostIdByWorkspaceSessionKey,
		runtimeEnvironments: e.runtimeEnvironments,
		runtimeStatusByEnvironmentId: e.runtimeStatusByEnvironmentId
	};
}
function buildRuntimeSessionMirrorEnvironmentKeys(e) {
	let t = getReachableRuntimeSessionMirrorTargets({
		settings: { activeRuntimeEnvironmentId: e.activeRuntimeEnvironmentId },
		repos: e.repos,
		worktreesByRepo: e.worktreesByRepo,
		detectedWorktreesByRepo: e.detectedWorktreesByRepo,
		projectGroups: e.projectGroups,
		restoredRuntimeHostIdByWorkspaceSessionKey: e.restoredRuntimeHostIdByWorkspaceSessionKey,
		runtimeEnvironments: e.runtimeEnvironments,
		runtimeStatusByEnvironmentId: e.runtimeStatusByEnvironmentId
	});
	return {
		environmentKey: t.map(({ environmentId: e, runtimeId: t, connectionGeneration: n, pairingRevision: r }) => `${e}\u0001${t}\u0001${n}\u0001${r}`).join("\0"),
		resubscribeSignal: t.map(({ environmentId: e, hostContactEpoch: t }) => `${e}\u0001${t}`).join("\0")
	};
}
function useRuntimeSessionMirrorEnvironmentKeys() {
	let { activeRuntimeEnvironmentId: e, repos: t, worktreesByRepo: n, detectedWorktreesByRepo: r, projectGroups: i, restoredRuntimeHostIdByWorkspaceSessionKey: a, runtimeEnvironments: o, runtimeStatusByEnvironmentId: s } = useAppStore(useShallow(selectRuntimeSessionMirrorTargetInputs));
	return (0, import_react.useMemo)(() => buildRuntimeSessionMirrorEnvironmentKeys({
		activeRuntimeEnvironmentId: e,
		repos: t,
		worktreesByRepo: n,
		detectedWorktreesByRepo: r,
		projectGroups: i,
		restoredRuntimeHostIdByWorkspaceSessionKey: a,
		runtimeEnvironments: o,
		runtimeStatusByEnvironmentId: s
	}), [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s
	]);
}
var WINDOW_VISIBILITY_SUBSCRIPTION_RETRY_MAX_MS = 3e4, WINDOW_VISIBILITY_SUBSCRIPTION_RETRY_JITTER_MS = 250;
function installWindowVisibilitySubscriptionParking(e, t = {}) {
	let n = t.parkDelayMs ?? 500, r = n * 8, i = !1, a = getWindowParkVisible(), o = a ? 0 : 1, s = null, c = n, l = null, u = e.map(() => ({
		desired: !1,
		generation: 0,
		visibilityGeneration: 0,
		pending: null,
		retryAttempt: 0,
		retryTimer: null,
		startTimer: null,
		unsubscribe: null
	})), d = (e) => {
		e.retryTimer !== null && (clearTimeout(e.retryTimer), e.retryTimer = null);
	}, f = (e) => {
		e.startTimer !== null && (clearTimeout(e.startTimer), e.startTimer = null);
	}, p = (e, t) => {
		let n = e.unsubscribe;
		if (e.unsubscribe = null, n) try {
			n();
		} catch (e) {
			t.onUnsubscribeError?.(e);
		}
	};
	function m(e, t) {
		if (i || !e.desired || e.retryTimer !== null) return;
		let n = Math.min(1e3 * 2 ** Math.min(e.retryAttempt, 5), WINDOW_VISIBILITY_SUBSCRIPTION_RETRY_MAX_MS), r = Math.floor(Math.random() * WINDOW_VISIBILITY_SUBSCRIPTION_RETRY_JITTER_MS);
		e.retryAttempt += 1, e.retryTimer = setTimeout(() => {
			e.retryTimer = null, h(e, t);
		}, n + r);
	}
	function h(e, t) {
		if (i || !e.desired || e.pending || e.retryTimer !== null || e.startTimer !== null || e.unsubscribe) return;
		let n = e.generation, r = () => !i && e.desired && e.generation === n, a;
		try {
			a = t.subscribe(r, { visibilityGeneration: e.visibilityGeneration });
		} catch (n) {
			r() && (t.onSubscribeError?.(n), m(e, t));
			return;
		}
		let o = Promise.resolve(a).then((n) => {
			if (e.pending !== o) {
				try {
					n.unsubscribe();
				} catch (e) {
					t.onUnsubscribeError?.(e);
				}
				return;
			}
			if (e.pending = null, r()) {
				e.retryAttempt = 0, e.unsubscribe = n.unsubscribe;
				return;
			}
			try {
				n.unsubscribe();
			} catch (e) {
				t.onUnsubscribeError?.(e);
			}
			!i && e.desired && h(e, t);
		}, (n) => {
			if (e.pending === o) {
				if (e.pending = null, r()) {
					t.onSubscribeError?.(n), m(e, t);
					return;
				}
				!i && e.desired && h(e, t);
			}
		});
		e.pending = o;
	}
	let g = (n) => {
		let r = u.flatMap((e, t) => e.desired ? [] : [t]);
		n && r.length > 0 && t.onVisibilityResume?.({
			visibilityGeneration: o,
			restartingSpecIndexes: r
		});
		for (let e of r) {
			let t = u[e];
			t.visibilityGeneration = o, t.desired = !0;
		}
		let a = n ? [...r].sort((e, n) => {
			let r = t.getVisibilityResumePriority;
			return (r?.(e) ?? 0) - (r?.(n) ?? 0) || e - n;
		}) : r, s = Math.max(0, t.visibilityResumeStaggerMs ?? 0);
		if (!n || s === 0) {
			for (let t of a) h(u[t], e[t]);
			return;
		}
		let c = (t) => {
			let n = a[t];
			if (n === void 0) return;
			let r = u[n];
			if (r.startTimer = null, i || !r.desired) return;
			h(r, e[n]);
			let o = a[t + 1];
			if (o === void 0) return;
			let l = u[o];
			l.startTimer = setTimeout(() => c(t + 1), s);
		};
		c(0);
	}, _ = () => {
		u.forEach((t, n) => {
			t.desired = !1, t.generation += 1, t.retryAttempt = 0, f(t), d(t), p(t, e[n]);
		});
	}, v = () => {
		s !== null && (clearTimeout(s), s = null);
	}, y = () => {
		if (getWindowParkVisible()) {
			v();
			let e = l === null ? null : Date.now() - l;
			l = null, a || (a = !0, e !== null && (c = e >= r ? n : Math.min(c * 2, r)), g(o > 0));
			return;
		}
		!a || s !== null || (l = Date.now(), s = setTimeout(() => {
			if (s = null, getWindowParkVisible()) {
				y();
				return;
			}
			a = !1, o += 1, _();
		}, c));
	};
	a && g(!1);
	let b = subscribeWindowParkVisibility(y);
	return () => {
		i = !0, v(), b(), a = !1, _();
	};
}
function isHostMirroredWorktree(e) {
	return e !== FLOATING_TERMINAL_WORKTREE_ID;
}
function loadInitialWebSessionTabs({ environmentId: e, expectedEnvironmentConnectionGeneration: t, expectedEnvironmentPairingRevision: n, expectedTrackingGeneration: i, isCurrent: a }) {
	let o = nextReceivedSessionTabsFrame(), s = null;
	window.api.runtimeEnvironments.call({
		selector: e,
		method: "session.tabs.listAll",
		params: {},
		timeoutMs: 15e3,
		expectedEnvironmentPairingRevision: n
	}).then(async (c) => {
		if (!a() || getRuntimeEnvironmentRevision(e) !== n) return;
		if (c.ok === !1) {
			console.warn("[web-session-tabs-sync] initial listAll failed:", c.error.message);
			return;
		}
		let l = c.result;
		if (!isSessionTabsListAllResult(l)) {
			console.warn("[web-session-tabs-sync] initial listAll returned an invalid payload");
			return;
		}
		let u = getSessionTabsRuntimeIdFromResponse(c), d = latestReceivedSessionTabsFrameByEnvironment.get(e) ?? 0;
		if (u && d <= o && !acceptSessionTabsRuntimeId(e, u, o)) return;
		recordReceivedWebSessionTabsEnvironmentFrame(e, o);
		let f = l.snapshots.map((t) => recordReceivedWebSessionTabsSnapshot(e, t, o, u, "bootstrap")), p = await Promise.all(l.snapshots.map((t) => recoverWebSessionTerminalOrphansBeforeApply(useAppStore.getState(), t, e, {
			expectedEnvironmentPairingRevision: n,
			expectedRuntimeId: u,
			getCurrentState: () => useAppStore.getState()
		})));
		if (!a() || getRuntimeEnvironmentRevision(e) !== n) return;
		let m = (latestReceivedSessionTabsInventoryFrameByEnvironment.get(e) ?? 0) > o, h = p.filter((t, n) => t !== null && !m && shouldApplyRecoveredWebSessionTabsSnapshot(e, t, f[n], u)), g = h.map((t) => decideWebSessionTabsSnapshot(t, e, u)), _ = h.filter((e, t) => g[t].apply), v = latestReceivedSessionTabsFrameByEnvironment.get(e) === o && (latestReceivedSessionTabsInventoryFrameByEnvironment.get(e) ?? 0) <= o;
		s = applyWebSessionTabsStorePatch((t) => applyWebSessionTabsSnapshots(t, _, e), {
			frames: h.map((r, a) => ({
				environmentId: e,
				worktreeId: r.worktree,
				decision: g[a],
				expectedEnvironmentConnectionGeneration: t,
				expectedEnvironmentPairingRevision: n,
				expectedTrackingGeneration: i
			})),
			...v ? { fullInventory: {
				environmentId: e,
				authoritative: l.authoritative === !0,
				expectedEnvironmentConnectionGeneration: t,
				expectedEnvironmentPairingRevision: n,
				expectedTrackingGeneration: i,
				publishedSnapshotCount: l.snapshots.filter((e) => isHostMirroredWorktree(e.worktree)).length
			} } : {}
		}, h);
	}).catch((e) => {
		a() && console.warn("[web-session-tabs-sync] failed to load initial session tabs:", e instanceof Error ? e.message : String(e));
	}).finally(() => {
		a() && getRuntimeEnvironmentRevision(e) === n && s?.();
	});
}
var RUNTIME_SUBSCRIPTION_REPLAY_FLAG = "_replayedAfterReconnect";
function isRuntimeSubscriptionReplayResponse(e) {
	return typeof e == "object" && !!e && e[RUNTIME_SUBSCRIPTION_REPLAY_FLAG] === !0;
}
function handleGlobalSessionInventoryEvent({ environmentId: e, expectedEnvironmentConnectionGeneration: t, expectedEnvironmentPairingRevision: n, expectedTrackingGeneration: r, visibilityGeneration: i, isCurrent: a, event: o, replayed: s, runtimeId: c, awaitingVisibilityResumeInventory: l, coordinator: u }) {
	let d = l.value && !s;
	l.value = !1;
	let f = o.snapshots.map((t) => {
		let n = `${e}:${t.worktree}`, r = latestSessionTabsSnapshotByWorktree.get(n);
		return !!(d && !replayableSessionTabsSnapshotByWorktree.has(n) && r?.publicationEpoch === t.publicationEpoch && r.snapshotVersion === t.snapshotVersion);
	}), p = o.snapshots.map((t) => {
		let n = recordReceivedWebSessionTabsSnapshot(e, t, void 0, c);
		return u.recordSnapshotReceipt(e, t, n, c), n;
	}), m = recordReceivedWebSessionTabsInventory(e), h = u.recordInventoryReceipt(e, i, m, o.snapshots, o.authoritative === !0, c), g = null;
	Promise.all(o.snapshots.map((t, r) => f[r] ? Promise.resolve(t) : recoverWebSessionTerminalOrphansBeforeApply(useAppStore.getState(), t, e, {
		expectedEnvironmentPairingRevision: n,
		expectedRuntimeId: c,
		getCurrentState: () => useAppStore.getState()
	}))).then((l) => {
		if (!a()) return;
		let d = l.flatMap((t, n) => t !== null && shouldApplyRecoveredWebSessionTabsSnapshot(e, t, p[n], c) && u.shouldApplySnapshot(e, t, p[n], c) ? [{
			index: n,
			snapshot: t
		}] : []);
		if (i > 0 || s) for (let { index: t, snapshot: n } of d) f[t] || acceptReplayedWebSessionTabsSnapshot(e, n.worktree);
		let _ = d.map(({ index: t, snapshot: n }) => f[t] ? WEB_SESSION_TABS_FRAME_OUTRANKED : decideWebSessionTabsSnapshot(n, e, c)), v = d.flatMap(({ snapshot: e }, t) => _[t].apply ? [e] : []);
		g = applyWebSessionTabsStorePatch((t) => applyWebSessionTabsSnapshots(t, v, e), {
			frames: d.map(({ snapshot: i }, a) => ({
				environmentId: e,
				worktreeId: i.worktree,
				decision: _[a],
				expectedEnvironmentConnectionGeneration: t,
				expectedEnvironmentPairingRevision: n,
				expectedTrackingGeneration: r
			})),
			fullInventory: {
				environmentId: e,
				authoritative: o.authoritative === !0,
				expectedEnvironmentConnectionGeneration: t,
				expectedEnvironmentPairingRevision: n,
				expectedTrackingGeneration: r,
				publishedSnapshotCount: o.snapshots.filter((e) => isHostMirroredWorktree(e.worktree)).length
			}
		}, v);
		let y = new Set(v);
		for (let { index: t, snapshot: n } of d) f[t] && queueAcceptedWebSessionTerminalSnapshot(n, e), (f[t] || y.has(n)) && u.recordSnapshot(e, n, p[t], c);
		u.recordInventory(e, i, m, h);
	}).catch((e) => {
		a() && console.warn("[web-session-tabs-sync] snapshot recovery failed:", e);
	}).finally(() => {
		a() && g?.();
	});
}
function handleGlobalSessionEvent(e) {
	let { environmentId: t, expectedEnvironmentConnectionGeneration: n, expectedEnvironmentPairingRevision: r, expectedTrackingGeneration: i, visibilityGeneration: a, isCurrent: o, response: s, awaitingVisibilityResumeInventory: c, coordinator: l } = e;
	if (!o()) return;
	if (s.ok === !1) {
		console.warn("[web-session-tabs-sync] global subscription failed:", s.error.message);
		return;
	}
	let u = getSessionTabsRuntimeIdFromResponse(s);
	if (u && !acceptSessionTabsRuntimeId(t, u)) return;
	let d = e.event, f = isRuntimeSubscriptionReplayResponse(s);
	if (d.type === "snapshots") {
		handleGlobalSessionInventoryEvent({
			environmentId: t,
			expectedEnvironmentConnectionGeneration: n,
			expectedEnvironmentPairingRevision: r,
			expectedTrackingGeneration: i,
			visibilityGeneration: a,
			isCurrent: o,
			event: d,
			replayed: f,
			runtimeId: u,
			awaitingVisibilityResumeInventory: c,
			coordinator: l
		});
		return;
	}
	if (d.type !== "snapshot" && d.type !== "updated") return;
	let p = recordReceivedWebSessionTabsSnapshot(t, d, void 0, u);
	l.recordSnapshotReceipt(t, d, p, u);
	let m = null;
	recoverWebSessionTerminalOrphansBeforeApply(useAppStore.getState(), d, t, {
		expectedEnvironmentPairingRevision: r,
		expectedRuntimeId: u,
		getCurrentState: () => useAppStore.getState()
	}).then((e) => {
		if (!o() || !e || !shouldApplyRecoveredWebSessionTabsSnapshot(t, e, p, u) || !l.shouldApplySnapshot(t, e, p, u)) return;
		f && acceptReplayedWebSessionTabsSnapshot(t, e.worktree);
		let a = decideWebSessionTabsSnapshot(e, t, u);
		a.apply ? (m = applyWebSessionTabsStorePatch((n) => applyWebSessionTabsSnapshot(n, e, t), { frames: [{
			environmentId: t,
			worktreeId: e.worktree,
			decision: a,
			expectedEnvironmentConnectionGeneration: n,
			expectedEnvironmentPairingRevision: r,
			expectedTrackingGeneration: i
		}] }, e, d.type === "updated" && !f), l.recordSnapshot(t, e, p, u)) : m = hostSessionMirrorSettleForPatchlessFrame(a, t, e.worktree, {
			connectionGeneration: n,
			pairingRevision: r,
			trackingGeneration: i
		});
	}).catch((e) => {
		o() && console.warn("[web-session-tabs-sync] snapshot recovery failed:", e);
	}).finally(() => {
		o() && m?.();
	});
}
function applyVisibilityResumeRepairs(e, t) {
	if (t.length === 0) return;
	let n = decideWebSessionTabsSnapshotOperations(t);
	applyWebSessionTabsStorePatch((e) => applyWebSessionTabsSnapshotOperations(e, n), { frames: n.map(({ environmentId: t, snapshot: n, decision: r }) => ({
		environmentId: t,
		worktreeId: n.worktree,
		decision: r,
		expectedEnvironmentConnectionGeneration: e.environments.get(t)?.expectedEnvironmentConnectionGeneration,
		expectedEnvironmentPairingRevision: e.environments.get(t)?.expectedEnvironmentPairingRevision,
		expectedTrackingGeneration: e.environments.get(t)?.expectedTrackingGeneration
	})) }, t.map(({ snapshot: e }) => e))();
}
function recordVisibilityResumeInventoryReceipt(e) {
	let { batch: t, omissions: n, environmentId: r, visibilityGeneration: i, inventoryReceivedFrame: a, snapshots: o, hostAuthoritative: s, runtimeId: c } = e;
	if (!isCurrentSessionTabsRuntimeFrame(r, c)) return [];
	for (let e of o) n.delete(sessionTabsFreshnessKey(r, e.worktree));
	if (!t || t.visibilityGeneration !== i) return [];
	let l = t.environments.get(r);
	if (!l || (l.latestInventoryReceivedFrame = Math.max(l.latestInventoryReceivedFrame, a), l.latestInventoryReceivedFrame !== a)) return [];
	let u = new Set(o.map((e) => e.worktree));
	return buildMissingWebSessionTabsRemovals(r, l.trackedWorktrees, u, s).map((e) => {
		let t = sessionTabsFreshnessKey(r, e.snapshot.worktree);
		return n.set(t, {
			baseline: e.trackedWorktree.freshness,
			environmentId: r,
			inventoryReceivedFrame: a,
			superseded: !1,
			visibilityGeneration: i
		}), recordReceivedWebSessionTabsRemoval(r, e.snapshot.worktree, a, e.snapshot.publicationEpoch), {
			environmentId: r,
			inventoryReceivedFrame: a,
			...c ? { runtimeId: c } : {},
			...e
		};
	});
}
function recordVisibilityResumeInventory(e) {
	let { batch: t, environmentId: n, visibilityGeneration: r, inventoryReceivedFrame: i, missingWorktrees: a } = e;
	if (!t || r === 0 || t.visibilityGeneration !== r) return;
	let o = t.environments.get(n);
	if (!o || o.latestInventoryReceivedFrame !== i) return;
	let s = new Set(o.pendingMissingWorktrees);
	for (let e of o.pendingMissingWorktrees) {
		let r = t.pendingMissingByWorktree.get(e);
		r?.delete(n), r?.size === 0 && t.pendingMissingByWorktree.delete(e);
	}
	o.pendingMissingWorktrees.clear();
	for (let e of a) {
		let r = e.snapshot.worktree, i = t.pendingMissingByWorktree.get(r) ?? /* @__PURE__ */ new Map();
		i.set(n, e), t.pendingMissingByWorktree.set(r, i), o.pendingMissingWorktrees.add(r), s.add(r);
	}
	o.inventoryReceived || (o.inventoryReceived = !0, --t.pendingInventoryCount), e.reconcileWorktrees(s);
}
function buildVisibilityResumeBatch(e) {
	let t = e.activeRuntimeWorktreeKey();
	for (let [n, r] of e.omissions) (n !== t || r.visibilityGeneration < e.visibilityGeneration - 1) && e.omissions.delete(n);
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
	for (let t of e.restartingSpecIndexes) {
		let i = e.environmentIdBySubscriptionSpec[t];
		if (!i) continue;
		let a = getTrackedWebSessionTabsWorktrees(i);
		if (a.length === 0) continue;
		for (let { worktree: e } of a) r.add(e);
		let o = e.environments.find((e) => e.environmentId === i);
		n.set(i, {
			trackedWorktrees: a,
			inventoryReceived: !1,
			latestInventoryReceivedFrame: 0,
			pendingMissingWorktrees: /* @__PURE__ */ new Set(),
			expectedEnvironmentConnectionGeneration: o?.expectedEnvironmentConnectionGeneration ?? getRuntimeEnvironmentConnectionGeneration(i),
			expectedEnvironmentPairingRevision: o?.expectedEnvironmentPairingRevision,
			expectedTrackingGeneration: getWebSessionTabsTrackingGeneration(i)
		});
	}
	return n.size ? {
		visibilityGeneration: e.visibilityGeneration,
		environments: n,
		pendingInventoryCount: n.size,
		pendingMissingByWorktree: /* @__PURE__ */ new Map(),
		deferredRepairWorktrees: /* @__PURE__ */ new Set(),
		trackedWorktreeIds: r,
		reapplyableSnapshotsByKey: /* @__PURE__ */ new Map()
	} : null;
}
var VisibilityResumeCoordinator = class {
	batch = null;
	constructor(e) {
		this.options = e;
	}
	recordSnapshotReceipt(e, t, n, r) {
		if (r && this.isSupersededRuntimeId(e, r)) return;
		let i = this.options.omissions.get(sessionTabsFreshnessKey(e, t.worktree));
		i && n > i.inventoryReceivedFrame && (t.removed === !0 || advancesSessionTabsFreshness(t, i.baseline)) && (i.superseded = !0, this.batch?.pendingMissingByWorktree.has(t.worktree) && this.reconcileWorktrees([t.worktree]));
	}
	shouldApplySnapshot(e, t, n, r) {
		if (r && this.isSupersededRuntimeId(e, r)) return !1;
		let i = this.options.omissions.get(sessionTabsFreshnessKey(e, t.worktree));
		return i ? n < i.inventoryReceivedFrame ? !1 : t.removed === !0 || advancesSessionTabsFreshness(t, i.baseline) : !0;
	}
	isSupersededRuntimeId(e, t) {
		return isRetiredSessionTabsRuntimeId(e, t) || !isCurrentSessionTabsRuntimeId(e, t);
	}
	missingCurrent(e) {
		let t = this.options.omissions.get(sessionTabsFreshnessKey(e.environmentId, e.snapshot.worktree));
		return t?.inventoryReceivedFrame === e.inventoryReceivedFrame && !t.superseded;
	}
	replayableEntry(e, t, n) {
		let r = sessionTabsFreshnessKey(t, n), i = e.reapplyableSnapshotsByKey.get(r), a = i ? latestSessionTabsSnapshotByWorktree.get(r) : void 0;
		return !i || !a || a.publicationEpoch !== i.snapshot.publicationEpoch || a.snapshotVersion !== i.snapshot.snapshotVersion || !shouldApplyRecoveredWebSessionTabsSnapshot(t, i.snapshot, i.receivedFrame, i.runtimeId) ? null : i;
	}
	replayableSnapshot(e, t, n) {
		return this.replayableEntry(e, t, n)?.snapshot ?? null;
	}
	finishIfIdle(e) {
		e.pendingInventoryCount === 0 && e.pendingMissingByWorktree.size === 0 && this.batch === e && (this.batch = null);
	}
	reconcileWorktrees(e) {
		let t = this.batch;
		if (!t) return;
		let n = [];
		for (let r of new Set(e)) {
			let e = t.pendingMissingByWorktree.get(r);
			if (!e) {
				t.deferredRepairWorktrees.delete(r);
				continue;
			}
			for (let [n, i] of e) this.missingCurrent(i) || (e.delete(n), t.environments.get(n)?.pendingMissingWorktrees.delete(r));
			if (e.size === 0) {
				t.pendingMissingByWorktree.delete(r), t.deferredRepairWorktrees.delete(r);
				continue;
			}
			let i = new Set(e.keys()), a = [], o = !0;
			for (let e of sessionTabsEnvironmentsByWorktree.get(r) ?? []) {
				if (i.has(e)) continue;
				let n = this.replayableEntry(t, e, r);
				if (!n) {
					o = !1;
					break;
				}
				a.push({
					environmentId: e,
					snapshot: n.snapshot,
					...n.runtimeId ? { runtimeId: n.runtimeId } : {}
				});
			}
			if (!o) {
				t.deferredRepairWorktrees.add(r);
				continue;
			}
			for (let t of e.values()) n.push({
				environmentId: t.environmentId,
				snapshot: t.snapshot,
				...t.runtimeId ? { runtimeId: t.runtimeId } : {}
			});
			for (let { environmentId: e, snapshot: t, runtimeId: i } of a) acceptReplayedWebSessionTabsSnapshot(e, r), n.push({
				environmentId: e,
				snapshot: t,
				...i ? { runtimeId: i } : {}
			});
			for (let n of e.keys()) t.environments.get(n)?.pendingMissingWorktrees.delete(r);
			t.pendingMissingByWorktree.delete(r), t.deferredRepairWorktrees.delete(r);
		}
		applyVisibilityResumeRepairs(t, n), this.finishIfIdle(t);
	}
	recordSnapshot(e, t, n, r) {
		if (r && this.isSupersededRuntimeId(e, r)) return;
		let i = this.batch;
		if (!i || !i.trackedWorktreeIds.has(t.worktree)) return;
		let a = sessionTabsFreshnessKey(e, t.worktree), o = this.replayableSnapshot(i, e, t.worktree), s = latestSessionTabsSnapshotByWorktree.get(a), c = (sessionTabsEnvironmentsByWorktree.get(t.worktree)?.size ?? 0) > 1 || i.deferredRepairWorktrees.has(t.worktree);
		t.removed === !0 || t.tabs.length === 0 || !c || s?.publicationEpoch !== t.publicationEpoch || s.snapshotVersion !== t.snapshotVersion || !shouldApplyRecoveredWebSessionTabsSnapshot(e, t, n, r) ? o || i.reapplyableSnapshotsByKey.delete(a) : i.reapplyableSnapshotsByKey.set(a, {
			snapshot: t,
			receivedFrame: n,
			runtimeId: r
		}), i.pendingMissingByWorktree.has(t.worktree) && this.reconcileWorktrees([t.worktree]);
	}
	recordInventory(e, t, n, r) {
		recordVisibilityResumeInventory({
			batch: this.batch,
			environmentId: e,
			visibilityGeneration: t,
			inventoryReceivedFrame: n,
			missingWorktrees: r,
			reconcileWorktrees: (e) => this.reconcileWorktrees(e)
		});
	}
	recordInventoryReceipt(e, t, n, r, i, a) {
		return recordVisibilityResumeInventoryReceipt({
			batch: this.batch,
			omissions: this.options.omissions,
			environmentId: e,
			visibilityGeneration: t,
			inventoryReceivedFrame: n,
			snapshots: r,
			hostAuthoritative: i,
			runtimeId: a
		});
	}
	beginVisibilityResume(e, t) {
		this.batch = buildVisibilityResumeBatch({
			visibilityGeneration: e,
			restartingSpecIndexes: t,
			environmentIdBySubscriptionSpec: this.options.environmentIdBySubscriptionSpec,
			environments: this.options.environments,
			omissions: this.options.omissions,
			activeRuntimeWorktreeKey: this.options.activeRuntimeWorktreeKey
		});
	}
};
function parseEnvironments(e) {
	return e ? e.split("\0").map((e) => {
		let [t = "", , n = "0", r = ""] = e.split("");
		return {
			environmentId: t,
			expectedEnvironmentConnectionGeneration: Number(n),
			expectedEnvironmentPairingRevision: r === "" ? void 0 : Number(r)
		};
	}).filter(({ environmentId: e }) => e.trim()) : [];
}
function installGlobalSessionTabsSubscriptions({ runtimeSessionMirrorEnvironmentKey: e, workspaceSessionReady: t, refs: n }) {
	let i = parseEnvironments(e), a = new Map((t ? i : []).map(({ environmentId: e, expectedEnvironmentPairingRevision: t }) => [e, t])), o = n.ownerRevisions.current;
	for (let [e, t] of o) (!a.has(e) || a.get(e) !== t) && clearWebSessionTabsTrackingForEnvironment(e);
	n.ownerRevisions.current = a;
	for (let [e, t] of n.visibilityResumeOmissions.current) {
		let r = o.get(t.environmentId);
		(!a.has(t.environmentId) || o.has(t.environmentId) && a.get(t.environmentId) !== r) && n.visibilityResumeOmissions.current.delete(e);
	}
	if (!t || i.length === 0) return;
	let s = [], c = [], l = new VisibilityResumeCoordinator({
		environments: i,
		environmentIdBySubscriptionSpec: c,
		omissions: n.visibilityResumeOmissions.current,
		activeRuntimeWorktreeKey: () => n.activeRuntimeWorktreeKey.current
	});
	n.snapshotReceipt.current = l.recordSnapshotReceipt.bind(l), n.snapshotApply.current = l.shouldApplySnapshot.bind(l), n.snapshotAccepted.current = l.recordSnapshot.bind(l);
	for (let e of i) {
		let { environmentId: n, expectedEnvironmentConnectionGeneration: i, expectedEnvironmentPairingRevision: a } = e;
		if (!shouldSyncAllRuntimeSessionTabs({
			activeRuntimeEnvironmentId: n,
			workspaceSessionReady: t
		})) continue;
		let o = !1, u = getWebSessionTabsTrackingGeneration(n);
		c.push(n), s.push({
			subscribe: (e, { visibilityGeneration: t }) => {
				let s = { value: t > 0 };
				return o || (o = !0, loadInitialWebSessionTabs({
					environmentId: n,
					expectedEnvironmentConnectionGeneration: i,
					expectedEnvironmentPairingRevision: a,
					expectedTrackingGeneration: u,
					isCurrent: e
				})), window.api.runtimeEnvironments.subscribe({
					selector: n,
					method: "session.tabs.subscribeAll",
					params: {},
					timeoutMs: 15e3,
					expectedEnvironmentPairingRevision: a
				}, {
					onResponse: (o) => {
						!e() || getRuntimeEnvironmentRevision(n) !== a || handleGlobalSessionEvent({
							environmentId: n,
							expectedEnvironmentConnectionGeneration: i,
							expectedEnvironmentPairingRevision: a,
							expectedTrackingGeneration: u,
							visibilityGeneration: t,
							isCurrent: e,
							event: o.ok ? o.result : { type: "end" },
							response: o,
							awaitingVisibilityResumeInventory: s,
							coordinator: l
						});
					},
					onError: (t) => {
						e() && console.warn("[web-session-tabs-sync] global subscription error:", t.message);
					}
				});
			},
			onSubscribeError: (e) => {
				console.warn("[web-session-tabs-sync] failed to subscribe globally:", e instanceof Error ? e.message : String(e));
			},
			onUnsubscribeError: (e) => {
				console.warn("[web-session-tabs-sync] failed to unsubscribe globally:", e);
			}
		});
	}
	let u = installWindowVisibilitySubscriptionParking(s, {
		getVisibilityResumePriority: (e) => c[e] === n.activeRuntimeEnvironmentId.current ? 0 : 1,
		visibilityResumeStaggerMs: 100,
		onVisibilityResume: ({ visibilityGeneration: e, restartingSpecIndexes: t }) => l.beginVisibilityResume(e, t)
	});
	return () => {
		n.snapshotReceipt.current = () => {}, n.snapshotApply.current = () => !0, n.snapshotAccepted.current = () => {}, u();
		for (let { environmentId: e, expectedEnvironmentPairingRevision: t } of i) {
			let n = {
				environmentId: e,
				pairingRevision: t
			};
			clearWebSessionCloseIntentsForOwner(n), clearWebSessionFocusIntentsForOwner(n), clearWebSessionReorderIntentsForOwner(n);
		}
	};
}
function installActiveSessionTabsSubscription({ activeWorktreeId: e, activeWorktreeRuntimeEnvironmentId: t, activeWorktreeRuntimeConnectionGeneration: n, activeWorktreeRuntimePairingRevision: i, workspaceSessionReady: a, visibilitySnapshotReceipt: o, visibilitySnapshotApply: s, visibilitySnapshotAccepted: c }) {
	let l = t?.trim();
	if (!shouldSyncRuntimeSessionTabs({
		activeWorktreeId: e,
		activeWorktreeRuntimeEnvironmentId: t,
		workspaceSessionReady: a
	}) || !l || !e) return;
	let u = getWebSessionTabsTrackingGeneration(l), d = !1, f = !1, p = async (t, r, a, o, p) => {
		let m = await recoverWebSessionTerminalOrphansBeforeApply(useAppStore.getState(), t, l, {
			expectedEnvironmentPairingRevision: i,
			expectedRuntimeId: p,
			getCurrentState: () => useAppStore.getState()
		});
		if (!a() || !m || !shouldApplyRecoveredWebSessionTabsSnapshot(l, m, o, p) || !s.current(l, m, o, p)) return null;
		(t.type === "snapshot" || isRuntimeSubscriptionReplayResponse(r)) && acceptReplayedWebSessionTabsSnapshot(l, m.worktree);
		let h = {
			...m,
			type: t.type
		}, g = decideWebSessionTabsSnapshot(m, l, p), _ = useAppStore.getState(), v = _.tabsByWorktree[e] ?? [], y = v.length, b = v.some((e) => (_.ptyIdsByTabId[e.id] ?? []).length > 0), x = shouldSkipWebRuntimeWakeTerminalRespawn(e), S = !x && shouldBootstrapInitialWebRuntimeTerminal({
			event: h,
			activeWorktreeId: e,
			requestedInitialTerminal: d,
			snapshotIsFresh: g.apply,
			localTerminalCount: y
		}), C = shouldRespawnWebRuntimeTerminalAfterWake({
			event: h,
			activeWorktreeId: e,
			requestedRespawnAfterWake: f,
			snapshotIsFresh: g.apply,
			localTerminalCount: y,
			hasLiveLocalPty: b,
			skipWakeRespawn: x
		}), w = g.apply ? null : hostSessionMirrorSettleForPatchlessFrame(g, l, m.worktree, {
			connectionGeneration: n,
			pairingRevision: i,
			trackingGeneration: u
		});
		if (g.apply) {
			let e = isRuntimeSubscriptionReplayResponse(r);
			w = applyWebSessionTabsStorePatch((e) => applyWebSessionTabsSnapshot(e, m, l), { frames: [{
				environmentId: l,
				worktreeId: m.worktree,
				decision: g,
				expectedEnvironmentConnectionGeneration: n,
				expectedEnvironmentPairingRevision: i,
				expectedTrackingGeneration: u
			}] }, m, t.type === "updated" && !e), c.current(l, m, o, p);
		}
		try {
			a() && S ? (d = !0, await createWebRuntimeSessionTerminal({
				worktreeId: e,
				environmentId: l,
				activate: !0
			})) : a() && C && beginWebRuntimeWakeTerminalRespawn(e) && (f = !0, await createWebRuntimeSessionTerminal({
				worktreeId: e,
				environmentId: l,
				activate: !0,
				selectWorktree: !1
			}).finally(() => endWebRuntimeWakeTerminalRespawn(e)));
		} catch (e) {
			a() && console.warn("[web-session-tabs-sync] snapshot follow-up failed:", e);
		}
		return w;
	};
	return installWindowVisibilitySubscriptionParking([{
		subscribe: (t) => window.api.runtimeEnvironments.subscribe({
			selector: l,
			method: "session.tabs.subscribe",
			params: { worktree: toRuntimeWorktreeSelector(e) },
			timeoutMs: 15e3,
			expectedEnvironmentPairingRevision: i
		}, {
			onResponse: (e) => {
				if (!t() || getRuntimeEnvironmentRevision(l) !== i) return;
				if (e.ok === !1) {
					console.warn("[web-session-tabs-sync] subscription failed:", e.error.message);
					return;
				}
				let n = e.result;
				if (n.type !== "snapshot" && n.type !== "updated") return;
				let a = getSessionTabsRuntimeIdFromResponse(e);
				if (a && !acceptSessionTabsRuntimeId(l, a)) return;
				let s = recordReceivedWebSessionTabsSnapshot(l, n, void 0, a);
				o.current(l, n, s, a), p(n, e, t, s, a).catch((e) => (t() && console.warn("[web-session-tabs-sync] active snapshot recovery failed:", e), null)).then((e) => {
					t() && e?.();
				});
			},
			onError: (e) => {
				t() && console.warn("[web-session-tabs-sync] subscription error:", e.message);
			}
		}),
		onSubscribeError: (e) => {
			console.warn("[web-session-tabs-sync] failed to subscribe:", e instanceof Error ? e.message : String(e));
		},
		onUnsubscribeError: (e) => {
			console.warn("[web-session-tabs-sync] failed to unsubscribe:", e);
		}
	}]);
}
function useWebSessionTabsSync() {
	let e = (0, import_react.useRef)(null), t = (0, import_react.useRef)(null), n = (0, import_react.useRef)(/* @__PURE__ */ new Map()), r = (0, import_react.useRef)(/* @__PURE__ */ new Map()), i = (0, import_react.useRef)(() => {}), a = (0, import_react.useRef)(() => !0), o = (0, import_react.useRef)(() => {}), s = useAppStore((e) => e.activeWorktreeId), c = useAppStore((e) => e.workspaceSessionReady), { environmentKey: l, resubscribeSignal: u } = useRuntimeSessionMirrorEnvironmentKeys(), d = useAppStore((e) => getExplicitRuntimeEnvironmentIdForWorktree(e, e.activeWorktreeId)), f = useAppStore((e) => {
		let t = getExplicitRuntimeEnvironmentIdForWorktree(e, e.activeWorktreeId);
		return t ? lastVerifiedRuntimeStatus(e.runtimeStatusByEnvironmentId.get(t))?.runtimeId ?? null : null;
	}), p = useAppStore((e) => {
		let t = getExplicitRuntimeEnvironmentIdForWorktree(e, e.activeWorktreeId);
		return t ? e.runtimeStatusByEnvironmentId.get(t)?.connectionGeneration ?? 0 : 0;
	}), m = useAppStore((e) => {
		let t = getExplicitRuntimeEnvironmentIdForWorktree(e, e.activeWorktreeId);
		return t ? e.runtimeStatusByEnvironmentId.get(t)?.hostContactEpoch ?? 0 : 0;
	}), h = useAppStore((e) => {
		let t = getExplicitRuntimeEnvironmentIdForWorktree(e, e.activeWorktreeId), n = e.runtimeEnvironments.find((e) => e.id === t);
		return n ? n.pairingRevision ?? n.createdAt : void 0;
	});
	(0, import_react.useLayoutEffect)(() => {
		let n = d?.trim() || null;
		e.current = n, t.current = n && s ? sessionTabsFreshnessKey(n, s) : null;
	}, [s, d]), (0, import_react.useEffect)(() => () => {
		for (let e of r.current.keys()) clearWebSessionTabsTrackingForEnvironment(e);
		r.current.clear(), n.current.clear();
	}, []), (0, import_react.useEffect)(() => installGlobalSessionTabsSubscriptions({
		runtimeSessionMirrorEnvironmentKey: l,
		workspaceSessionReady: c,
		refs: {
			activeRuntimeEnvironmentId: e,
			activeRuntimeWorktreeKey: t,
			visibilityResumeOmissions: n,
			snapshotReceipt: i,
			snapshotApply: a,
			snapshotAccepted: o,
			ownerRevisions: r
		}
	}), [
		l,
		u,
		c
	]), (0, import_react.useEffect)(() => installActiveSessionTabsSubscription({
		activeWorktreeId: s,
		activeWorktreeRuntimeEnvironmentId: d,
		activeWorktreeRuntimeConnectionGeneration: p,
		activeWorktreeRuntimePairingRevision: h,
		workspaceSessionReady: c,
		visibilitySnapshotReceipt: i,
		visibilitySnapshotApply: a,
		visibilitySnapshotAccepted: o
	}), [
		s,
		d,
		p,
		m,
		h,
		f,
		c
	]);
}
export { applyFreshWebSessionTabsSnapshots as A, useNotificationDispatch as C, createAgentCompletionCoordinator as D, getResolvedExecutionHostIdForWorktree as E, retainLocalScrollbackInRemoteLayout as F, mergeCapturedLeafState as I, defaultAgentChatLabel as L, applyWebSessionTabsSnapshotOperations as M, applyWebSessionTabsSnapshots as N, admitRemoteForegroundEvidence as O, decideWebSessionTabsSnapshotOperations as P, markRendererOwnedAgentStatusWrite as R, dispatchTerminalNotification as S, isOrcaWindowForegroundFocused as T, shouldSuppressCodexAutoApprovalStatus as _, hostSessionMirrorSettleForPatchlessFrame as a, isPotentialQuestionAnsweredSubmitInput as b, syncAgentHookCompletionNotificationsForStoreUpdate as c, canDispatchAgentNotificationAfterGrace as d, isAgentTaskCompleteOsNotificationEnabledFromState as f, createCodexAutoApprovalHookCompletionSuppressor as g, registerAgentHookTerminalLifecycleHandler as h, createHostSessionMirrorSettle as i, applyWebSessionTabsSnapshot as j, applyFreshWebSessionTabsSnapshot as k, AGENT_TASK_COMPLETE_NOTIFICATION_GRACE_MS as l, dispatchAgentHookTerminalLifecycle as m, isRuntimeSubscriptionReplayResponse as n, observeAgentHookCompletionForNotification as o, isAgentTaskCompleteTrackingEnabledFromState as p, applyWebSessionTabsStorePatch as r, resetAgentHookCompletionNotificationCoordinators as s, useWebSessionTabsSync as t, AGENT_TASK_COMPLETE_NOTIFICATION_MAX_WAIT_MS as u, shouldSuppressCodexAutoApprovalSyntheticTitle as v, createTerminalAttentionSurface as w, isQuestionAnsweredSubmitInput as x, isAskUserQuestionTool as y, registerRendererOwnedAgentStatusPane as z };
