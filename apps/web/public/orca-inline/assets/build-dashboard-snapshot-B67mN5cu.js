import { Yt as isLocalNativeWindowsConpty, n as activateAndRevealWorkspace } from "./worktree-activation-u-wSAPlP.js";
import { Ac as getRemoteRuntimePtyEnvironmentId, BS as getWorkspaceStatus, Ff as getExecutionHostIdForWorktree, GS as DEFAULT_WORKSPACE_STATUSES, Ih as parsePaneKey, Lr as hostedReviewInfoFromGitHubPRInfo, O_ as parseAppSshPtyId, ag as isPositiveHostedReviewNumber, gp as getHostedReviewCacheKey, iC as parseExecutionHostId, nS as filterEnabledTuiAgents, oC as toRuntimeExecutionHostId, sC as toSshExecutionHostId, tS as TUI_AGENT_AUTO_PICK_ORDER, ug as branchName, vl as getConnectionIdFromState, vv as parseWorkspaceKey, wS as isTuiAgent } from "./store-C9f8FDJV.js";
import { s as activateTabAndFocusPane } from "./web-runtime-session-CeAC5QPx.js";
import { n as getAgentRowConversationName, t as resolveAgentRowPaneLiveTitle } from "./agent-row-pane-live-title-BggTVlpJ.js";
import { t as lastEnteredDoneAt } from "./agent-finished-timestamp-BwQZ7hrN.js";
import { c as selectRuntimePaneTitlesForWorktree, d as dashboardCardParentPaneKey } from "./worktree-agent-rows-IU_JQSGH.js";
import { d as selectTerminalLayoutsForWorktree, f as EMPTY_WORKTREE_AGENT_ORCHESTRATION } from "./worktree-agent-row-selectors-CkGQD3YA.js";
import { n as canUseParentPrChecksGitHubPRCacheEntry, r as getParentPrChecksGitHubPRCacheEntry, t as canUseParentPrChecksHostedReviewCacheEntry } from "./parent-pr-checks-hosted-review-cache-6w7By-pK.js";
import { a as resolveWindowsShiftEnterEncodingForPane, c as shouldDisableKittyKeyboardForTerminal, i as hasCtrlEnterCsiUAuthorityForPane, r as resolveTerminalInputHostPlatform, t as resolveProtectedMultilinePasteOptionsForAgentEvidence } from "./terminal-agent-paste-bracketing-B_r-vqmN.js";
import { a as dashboardCardMapWorkspaceMetadata, c as selectWorktreeAgentRowsCached, d as DASHBOARD_MAX_LABEL_LENGTH, f as DASHBOARD_MAX_LAUNCH_WORKTREES, i as collectActiveDashboardWorkspaces, l as startWorktreeAgentRowsCachePass, n as dashboardCardDotState, p as DASHBOARD_MAX_MAP_WORKSPACES, r as dashboardRowBucketProjection, s as finishWorktreeAgentRowsCachePass, t as selectDashboardOrchestration } from "./dashboard-orchestration-selection-D_et0bzo.js";
function revealDashboardAgent(e) {
	return activateAndRevealWorkspace(e.worktreeId, e.executionHostId ? { executionHostId: e.executionHostId } : void 0) === !1 ? !1 : (activateTabAndFocusPane(e.tabId, e.leafId, { flashFocusedPane: !0 }), !0);
}
var EMPTY_RECORD = {};
function withHydratedSlices(e) {
	return {
		repos: e.repos ?? [],
		worktreesByRepo: e.worktreesByRepo ?? EMPTY_RECORD,
		detectedWorktreesByRepo: e.detectedWorktreesByRepo ?? EMPTY_RECORD,
		folderWorkspaces: e.folderWorkspaces ?? [],
		projectGroups: e.projectGroups ?? [],
		settings: e.settings ?? null,
		sshConnectionStates: e.sshConnectionStates ?? /* @__PURE__ */ new Map(),
		sshStateByEnvironment: e.sshStateByEnvironment ?? /* @__PURE__ */ new Map(),
		runtimeStatusByEnvironmentId: e.runtimeStatusByEnvironmentId ?? /* @__PURE__ */ new Map(),
		restoredRuntimeHostIdByWorkspaceSessionKey: e.restoredRuntimeHostIdByWorkspaceSessionKey ?? EMPTY_RECORD,
		runtimeEnvironments: e.runtimeEnvironments ?? [],
		runtimeEnvironmentCatalogHydrated: e.runtimeEnvironmentCatalogHydrated ?? !1,
		removedRuntimeEnvironmentIds: e.removedRuntimeEnvironmentIds ?? /* @__PURE__ */ new Set(),
		paneForegroundAgentByPaneKey: e.paneForegroundAgentByPaneKey ?? EMPTY_RECORD,
		agentStatusByPaneKey: e.agentStatusByPaneKey ?? EMPTY_RECORD,
		agentLaunchConfigByPaneKey: e.agentLaunchConfigByPaneKey ?? EMPTY_RECORD
	};
}
function resolveDashboardCardTerminalInput(T, D) {
	let k = withHydratedSlices(T), A = parseAppSshPtyId(D.ptyId), j = getRemoteRuntimePtyEnvironmentId(D.ptyId), N = A?.connectionId ?? (j ? null : getConnectionIdFromState(k, D.worktreeId)), P = A ? toSshExecutionHostId(A.connectionId) : j ? toRuntimeExecutionHostId(j) : getExecutionHostIdForWorktree(k, D.worktreeId), F = {
		userAgent: D.userAgent,
		osRelease: D.osRelease,
		connectionId: N,
		cwd: D.cwd,
		shellOverride: D.shellOverride,
		executionHostId: P
	}, I = resolveTerminalInputHostPlatform({
		clientPlatform: D.clientPlatform,
		state: k,
		worktreeId: D.worktreeId,
		transport: {
			getConnectionId: () => N,
			getPtyId: () => D.ptyId,
			getExecutionHostId: () => P,
			getLocalSessionMetadata: () => N ? null : {
				...D.cwd ? { cwd: D.cwd } : {},
				...D.shellOverride ? { shellOverride: D.shellOverride } : {}
			}
		}
	}), z = resolveProtectedMultilinePasteOptionsForAgentEvidence({
		isWindowsClient: D.clientPlatform === "win32",
		hostPlatform: I,
		foregroundAgent: k.paneForegroundAgentByPaneKey[D.paneKey]?.agent,
		entry: k.agentStatusByPaneKey[D.paneKey]
	});
	return {
		hostPlatform: I,
		localWindowsConpty: isLocalNativeWindowsConpty(F),
		...D.osRelease === void 0 ? {} : { osRelease: D.osRelease },
		windowsShiftEnterEncoding: resolveWindowsShiftEnterEncodingForPane(k, D.paneKey),
		...z?.forceBracketedPasteForMultiline ? { forceBracketedMultilineTextPaste: !0 } : {},
		...z?.windowsInputRecordNewline ? { windowsInputRecordPasteNewline: z.windowsInputRecordNewline } : {},
		ctrlEnterCsiU: hasCtrlEnterCsiUAuthorityForPane(k, D.paneKey),
		kittyKeyboardAdvertised: !shouldDisableKittyKeyboardForTerminal({
			...F,
			tuiAgent: D.launchAgent ?? null
		})
	};
}
function readDashboardClientHost() {
	let e = typeof navigator > "u" ? "" : navigator.userAgent;
	return {
		platform: e.includes("Mac") ? "darwin" : e.includes("Windows") ? "win32" : "linux",
		userAgent: e,
		osRelease: readClientOsRelease()
	};
}
function readClientOsRelease() {
	try {
		return window.api?.platform?.get?.()?.osRelease;
	} catch {
		return;
	}
}
function hasLinkedReview(e) {
	return [
		e.linkedPR,
		e.linkedGitLabMR,
		e.linkedBitbucketPR,
		e.linkedAzureDevOpsPR,
		e.linkedGiteaPR
	].some(isPositiveHostedReviewNumber);
}
function resolveReview(e, T, E) {
	if (!T || !e.hostedReviewCache || !e.prCache || T.kind === "folder") return;
	let D = branchName(E.branch), O = e.hostedReviewCache[getHostedReviewCacheKey(T.path, D, e.settings, T.id, T.connectionId, T.executionHostId, !0)], k = O?.data;
	if (k && canUseParentPrChecksHostedReviewCacheEntry(E, k, O)) return {
		number: k.number,
		state: k.state
	};
	let A = getParentPrChecksGitHubPRCacheEntry({
		prCache: e.prCache,
		repo: T,
		branch: D,
		settings: e.settings ?? null
	}), M = canUseParentPrChecksGitHubPRCacheEntry(E, A, O) ? hostedReviewInfoFromGitHubPRInfo(A.data) : void 0;
	return M ? {
		number: M.number,
		state: M.state
	} : void 0;
}
function resolveDashboardCardContext(e, T, E) {
	let O = e.workspaceStatuses && e.workspaceStatuses.length > 0 ? e.workspaceStatuses : DEFAULT_WORKSPACE_STATUSES, A = getWorkspaceStatus(E, O), j = resolveReview(e, T, E);
	return {
		workspaceStatus: O.find((e) => e.id === A) ?? DEFAULT_WORKSPACE_STATUSES[0],
		review: j,
		hasReview: hasLinkedReview(E) || j !== void 0
	};
}
function rowTask(e) {
	return (e.entry.orchestration?.taskTitle ?? "").trim() || (e.entry.prompt ?? "").trim();
}
function nonEmpty(e) {
	let T = (e ?? "").trim();
	return T.length > 0 ? T : void 0;
}
function boundedLabel(e) {
	return e.length > 1024 ? e.slice(0, DASHBOARD_MAX_LABEL_LENGTH) : e;
}
function boundedLabelOrUndefined(e) {
	return e === void 0 ? void 0 : boundedLabel(e);
}
function rowConversationName(e, T, E, D) {
	let O = e.entry.orchestration?.parentPaneKey;
	if (e.lineage?.depth === 1 && O !== void 0 && parsePaneKey(O)?.tabId === e.tab.id) return;
	let k = resolveAgentRowPaneLiveTitle(E, D, parsePaneKey(e.paneKey)?.leafId);
	return getAgentRowConversationName(e.tab, e.agentType, T, k, e.entry.providerSession?.id) ?? void 0;
}
function buildDashboardLaunchCatalog(e) {
	return {
		foldersById: new Map((e.folderWorkspaces ?? []).map((e) => [e.id, e])),
		groupsById: new Map((e.projectGroups ?? []).map((e) => [e.id, e])),
		reposById: new Map((e.repos ?? []).map((e) => [e.id, e])),
		worktreesByRepoAndId: new Map(Object.entries(e.worktreesByRepo ?? {}).map(([e, T]) => [e, new Map(T.map((e) => [e.id, e]))]))
	};
}
function detectedAgentsForWorktree(e, T, E, D) {
	let O = parseWorkspaceKey(T);
	if (O?.type === "folder") {
		let T = D.foldersById.get(O.folderWorkspaceId), E = T ? D.groupsById.get(T.projectGroupId) : void 0, k = parseExecutionHostId(E?.executionHostId);
		if (k?.kind === "runtime") return e.runtimeDetectedAgentIds?.[k.environmentId] ?? [];
		let A = T?.connectionId ?? E?.connectionId;
		return A ? e.remoteDetectedAgentIds?.[A] ?? [] : [];
	}
	let k = D.worktreesByRepoAndId.get(E)?.get(T), A = D.reposById.get(k?.repoId ?? E), j = parseExecutionHostId(k?.hostId ?? A?.executionHostId);
	if (j?.kind === "runtime") return e.runtimeDetectedAgentIds?.[j.environmentId] ?? [];
	let M = j?.kind === "ssh" ? j.targetId : A?.connectionId;
	return M ? e.remoteDetectedAgentIds?.[M] ?? [] : e.detectedAgentIds ?? [];
}
function buildDashboardWorktreeLaunchOptions(e, T, E = []) {
	let D = buildDashboardLaunchCatalog(e), O = /* @__PURE__ */ new Map(), k = new Map(E.map((e) => [e.worktreeId, e.repoId]));
	for (let e of T) {
		k.set(e.worktreeId, e.repoId);
		let T = O.get(e.worktreeId);
		T ? T.push(e) : O.set(e.worktreeId, [e]);
	}
	let A = {};
	for (let [T, E] of k) {
		if (Object.keys(A).length >= 500) break;
		let k = O.get(T) ?? [], j = new Set(detectedAgentsForWorktree(e, T, E, D));
		for (let e of k) isTuiAgent(e.agentType) && j.add(e.agentType);
		let M = filterEnabledTuiAgents(TUI_AGENT_AUTO_PICK_ORDER.filter((e) => j.has(e)), e.settings?.disabledTuiAgents), N = e.settings?.defaultTuiAgent;
		A[T] = N && N !== "blank" && M.includes(N) ? [N, ...M.filter((e) => e !== N)] : M;
	}
	return A;
}
function buildDashboardSnapshotFilterOptions(e, T) {
	return {
		projects: [...new Map(T.map((e) => [e.projectId, e])).values()].map((e) => ({
			id: e.projectId,
			label: boundedLabel(e.projectName)
		})),
		workspaceStatuses: (e.workspaceStatuses && e.workspaceStatuses.length > 0 ? e.workspaceStatuses : DEFAULT_WORKSPACE_STATUSES).map((e) => ({
			id: e.id,
			label: e.label,
			color: e.color
		}))
	};
}
function groupSubagentsByParentPaneKey(e) {
	let T = /* @__PURE__ */ new Map();
	for (let E of e) {
		if (E.rowSource !== "subagent") continue;
		let e = E.entry.orchestration?.parentPaneKey;
		if (!e) continue;
		let D = {
			id: E.paneKey,
			name: nonEmpty(E.entry.orchestration?.displayName) ?? nonEmpty(E.entry.prompt) ?? E.agentType,
			dotState: dashboardCardDotState(E.state)
		}, O = T.get(e);
		O ? O.push(D) : T.set(e, [D]);
	}
	return T;
}
function buildDashboardSnapshot(e, T, E = {}) {
	let D = [], O = E.includeCardDetails === !1 ? void 0 : [], k = readDashboardClientHost(), j = {}, M = E.includeCardDetails !== !1, N = e.settings?.tabAutoGenerateTitle === !0, P = e.settings?.experimentalAgentDashboardShowIdle === !0, F = collectActiveDashboardWorkspaces(e, M), I = E.includeFilterOptions === !1 ? void 0 : buildDashboardSnapshotFilterOptions(e, F), { singletonOrchestration: L, orchestrationByWorktree: R } = selectDashboardOrchestration(e, F);
	E.rowsCache && startWorktreeAgentRowsCachePass(E.rowsCache);
	for (let P of F) {
		let { repo: F, worktree: I } = P, z = I.id, B = I.parentWorktreeId, V = selectTerminalLayoutsForWorktree(e, z), H = selectRuntimePaneTitlesForWorktree(e, z), U = selectWorktreeAgentRowsCached({
			state: e,
			worktreeId: z,
			orchestration: L ?? R?.get(z) ?? EMPTY_WORKTREE_AGENT_ORCHESTRATION,
			now: T,
			generation: E.rowsGeneration,
			cache: E.rowsCache
		}), W = M ? groupSubagentsByParentPaneKey(U) : void 0, G = M ? resolveDashboardCardContext(e, F, I) : void 0;
		if (O && O.length < 2e3) {
			let e = dashboardCardMapWorkspaceMetadata(P, null, void 0, k.platform);
			O.push({
				repoId: P.projectId,
				worktreeId: z,
				repoName: boundedLabel(P.projectName),
				worktreeName: boundedLabel(I.displayName),
				...B ? { parentWorktreeId: B } : {},
				...e,
				workspaceStatusId: G?.workspaceStatus.id,
				workspaceStatusLabel: G?.workspaceStatus.label,
				workspaceStatusColor: G?.workspaceStatus.color,
				hasReview: G?.hasReview,
				review: G?.review
			});
		}
		for (let T of U) {
			if (T.rowSource === "subagent") continue;
			let { isTitleDerived: E, dotState: O, workingMode: F, unseen: L, bucket: R } = dashboardRowBucketProjection(T, e.acknowledgedAgentsByPaneKey), U = T.activationPaneKey ?? T.paneKey, K = parsePaneKey(U), q = K?.tabId ?? T.tab.id, J = K?.leafId ?? null, Y = (J ? V[q]?.ptyIdsByLeafId?.[J] : void 0) ?? null, X = Y && (e.ptyIdsByTabId?.[q] ?? []).includes(Y) ? Y : null, Z = X && M ? resolveDashboardCardTerminalInput(e, {
				ptyId: X,
				worktreeId: z,
				paneKey: U,
				cwd: T.tab.startupCwd ?? I.path,
				shellOverride: T.tab.shellOverride,
				launchAgent: T.tab.launchAgent,
				clientPlatform: k.platform,
				userAgent: k.userAgent,
				osRelease: k.osRelease
			}) : null, Q = lastEnteredDoneAt(T), $ = M ? dashboardCardMapWorkspaceMetadata(P, X, Z ?? void 0, k.platform) : void 0;
			j[P.projectId] = P.repoIcon, D.push({
				paneKey: T.paneKey,
				ptyId: X,
				agentType: T.agentType,
				bucket: R,
				dotState: O,
				...F ? { workingMode: F } : {},
				task: E ? "" : rowTask(T),
				repoId: P.projectId,
				worktreeId: z,
				tabId: q,
				leafId: J,
				repoName: boundedLabel(P.projectName),
				worktreeName: boundedLabel(I.displayName),
				...M ? {
					parentPaneKey: dashboardCardParentPaneKey(T),
					...B ? { parentWorktreeId: B } : {},
					...$
				} : {},
				workspaceStatusId: G?.workspaceStatus.id,
				workspaceStatusLabel: G?.workspaceStatus.label,
				workspaceStatusColor: G?.workspaceStatus.color,
				hasReview: G ? G.hasReview || G.review !== void 0 : void 0,
				review: G?.review,
				subagents: W?.get(T.paneKey),
				lastUserMessage: E ? void 0 : nonEmpty(T.entry.prompt),
				lastAgentMessage: E ? void 0 : nonEmpty(T.entry.lastAssistantMessage),
				startedAt: T.startedAt,
				finishedAt: Q,
				stateChangedAt: T.entry.stateStartedAt || T.startedAt,
				statusUpdatedAt: T.entry.updatedAt,
				unseen: L,
				askSummary: R === "attention" ? T.entry.interactivePrompt ?? void 0 : void 0,
				conversationName: boundedLabelOrUndefined(rowConversationName(T, N, V[T.tab.id], H[T.tab.id])),
				...Z ? { terminalInput: Z } : {}
			});
		}
	}
	return E.rowsCache && finishWorktreeAgentRowsCachePass(E.rowsCache), {
		generatedAt: T,
		cards: D,
		...O ? { workspaces: O } : {},
		showIdle: P,
		filterOptions: I,
		...M ? { launchableAgentsByWorktreeId: buildDashboardWorktreeLaunchOptions(e, D, O) } : {},
		repoIconsByRepoId: j
	};
}
export { revealDashboardAgent as n, buildDashboardSnapshot as t };
