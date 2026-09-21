import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as CircleAlert } from "./circle-alert-xAjxBVzK.js";
import { t as CircleDashed } from "./circle-dashed-PoJjEZvD.js";
import { t as CircleX } from "./circle-x-B4rQismt.js";
import { t as Circle } from "./circle-DN6sV7ND.js";
import { t as List } from "./list-C_HWlpVX.js";
import { t as Pin } from "./pin-y_bcWXAu.js";
import { $S as getSettingsFocusedExecutionHostId, $y as normalizeRuntimePathForComparison, BS as getWorkspaceStatus, Bl as getLocalProjectExecutionRuntimeContext, D as getHostDisplayLabelOverrides, Dg as isNativeChatTranscriptLocalReadable, E_ as getEffectiveProjectGroupManualRank, Ff as getExecutionHostIdForWorktree, Fg as getFolderWorkspacePathStatusDescription, Fh as parseLegacyNumericPaneKey, Ga as setWorktreeNavViewActivator, HS as getWorkspaceStatusGroupKey, IC as RUNTIME_PROTOCOL_VERSION, Ig as getFolderWorkspacePathStatusTitle, Ih as parsePaneKey, JS as LOCAL_EXECUTION_HOST_ID, Jg as resolveIndexedRepoOwner, Lf as getKnownExecutionHostIdForWorktree, Mg as findFolderWorkspaceOwner, NS as DEFAULT_WORKSPACE_STATUS_COLOR_ID, Nh as isTerminalLeafId, PC as MIN_COMPATIBLE_RUNTIME_SERVER_VERSION, PS as DEFAULT_WORKSPACE_STATUS_ICON_ID, Pd as isWebTerminalSurfaceTabId, Pg as folderWorkspaceActivationBlocked, Ph as makePaneKey, Qd as structuredAgentSessionTabId, Qy as isWindowsAbsolutePathLike, Rf as getRuntimeEnvironmentIdForWorktree, Ro as reconcileTabOrder, Sv as getWorktreeHostIdentity, Sy as toRuntimeWorktreeSelector, T_ as UNGROUPED_PROJECT_GROUP_KEY, VS as getWorkspaceStatusFromGroupKey, Wa as setWorktreeNavActivator, XS as getLocalExecutionHostLabel, YS as getExecutionHostLabel, Yg as resolveIndexedWorktreeOwner, Yu as tabHasLivePty, ZS as getRepoExecutionHostId, Zh as resolveWorktreeOperationRouteResult, bf as agentStatusEvidenceObservedAt, dv as worktreeIdsEqual, eC as getWorktreeExecutionHostId, fp as isGitHubPRSuppressed, fv as PTY_SESSION_ID_SEPARATOR, gy as evaluateRuntimeCompat, hb as FLOATING_TERMINAL_WORKTREE_ID, hl as agentEntryCompletionAt, hp as getLegacyGitHubPRCacheKey, iC as parseExecutionHostId, ib as parseWslUncPath, ix as resolveTuiAgentLaunchEnv, kp as parseRemoteRuntimePtyId, mm as getIndexedAllWorktrees, mv as folderWorkspaceKey, nC as normalizeExecutionHostId, nu as classifyTitleActivity, oC as toRuntimeExecutionHostId, ov as getRepoIdFromWorktreeId, ox as resolveLocalWindowsAgentStartupShell, pb as DEFAULT_SHOW_SLEEPING_WORKSPACES, pp as getGitHubPRCacheKey, pu as isSyntheticAgentPermissionTitle, pv as parsePtySessionId, qS as ALL_EXECUTION_HOSTS_SCOPE, rb as isWslUncPath$1, rg as normalizeWorkspaceCreatorProvenance, ru as isExplicitAgentStatusFresh, rx as resolveTuiAgentLaunchArgs, sC as toSshExecutionHostId, t as useAppStore, tC as isRuntimeOwnedSshTargetId, tg as folderWorkspaceToWorktree, to as resolveRuntimePaneTitleLeafId, ug as branchName, ul as agentProviderSessionsEqual, up as isValidResolvedWorktreeLineageEdge, vf as AGENT_STATUS_STALE_AFTER_MS, vv as parseWorkspaceKey, xf as isFreshNonDoneAgentStatus, xm as basename, zS as cloneDefaultWorkspaceStatuses } from "./store-C9f8FDJV.js";
import { _ as measureClipboardTextByteLength } from "./renderer-app-platform--nJ6HYmL.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { o as agentKindToTuiAgent, s as tuiAgentToAgentKind } from "./telemetry-DdvWHaqb.js";
import { i as getWorktreeMapFromState, r as getRepoMapFromState, t as getAllWorktreesFromState, y as getProjectHostSetupProjectionFromState } from "./selectors-Cdg4hUQI.js";
import { $ as endWebRuntimeWakeTerminalRespawn, H as parkUntilHostMirrorHandleLands, K as parkUntilHostSessionMirrorHydrates, N as getLastKnownHostTerminalTabCount, Q as beginWebRuntimeWakeTerminalRespawn, U as hasHostSessionMirrorHydrated, V as hasHostMirrorHandleWaitExpired, d as activateWebRuntimeSessionWorktree, h as createWebRuntimeSessionTerminal, on as isWebRuntimeSessionActive } from "./web-runtime-session-CeAC5QPx.js";
import { b as encodePowerShellCommand, f as buildAgentResumeStartupPlan } from "./agent-paste-draft-Ddp-k6QZ.js";
import { b as CLIENT_PLATFORM, h as initialAgentTabViewModeProps, n as seedNativeChatAppliedSessionOptions } from "./native-chat-session-option-cache-DOY0fjiI.js";
import { t as getWorktreeGitIdentityDisplay } from "./worktree-git-identity-display-BVUtz189.js";
import { o as resolveDecayedAgentRowState, r as resolveAgentStatusWorktreeId, s as migrationUnsupportedToAgentStatusEntry } from "./agent-status-worktree-attribution-0Thqf3S9.js";
import { i as getProjectedWorktreeLineageChildrenByParentId, n as getLineageRenderInfo, r as getProjectedWorktreeLineage, t as getCyclicProjectedWorktreeLineageIds } from "./worktree-lineage-projection-yv9KfVOV.js";
import { t as createLocalizedCatalog } from "./localized-catalog-Dsz6wk5E.js";
import { t as getConnectionId } from "./connection-context-2sxF2wah.js";
var Ban = createLucideIcon("ban", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M4.929 4.929 19.07 19.071",
	key: "196cmz"
}]]), CircleDot = createLucideIcon("circle-dot", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "1",
	key: "41hilf"
}]]), CircleEllipsis = createLucideIcon("circle-ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M17 12h.01",
		key: "1m0b6t"
	}],
	["path", {
		d: "M12 12h.01",
		key: "1mp3jc"
	}],
	["path", {
		d: "M7 12h.01",
		key: "eqddd0"
	}]
]), CirclePause = createLucideIcon("circle-pause", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "10",
		x2: "10",
		y1: "15",
		y2: "9",
		key: "c1nkhi"
	}],
	["line", {
		x1: "14",
		x2: "14",
		y1: "15",
		y2: "9",
		key: "h65svq"
	}]
]), CirclePlay = createLucideIcon("circle-play", [["path", {
	d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
	key: "kmsa83"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), Flag = createLucideIcon("flag", [["path", {
	d: "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",
	key: "1jaruq"
}]]), FolderTree = createLucideIcon("folder-tree", [
	["path", {
		d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
		key: "hod4my"
	}],
	["path", {
		d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
		key: "w4yl2u"
	}],
	["path", {
		d: "M3 5a2 2 0 0 0 2 2h3",
		key: "f2jnh7"
	}],
	["path", {
		d: "M3 3v13a2 2 0 0 0 2 2h3",
		key: "k8epm1"
	}]
]), Timer = createLucideIcon("timer", [
	["line", {
		x1: "10",
		x2: "14",
		y1: "2",
		y2: "2",
		key: "14vaq8"
	}],
	["line", {
		x1: "12",
		x2: "15",
		y1: "14",
		y2: "11",
		key: "17fdiu"
	}],
	["circle", {
		cx: "12",
		cy: "14",
		r: "8",
		key: "1e1u0o"
	}]
]);
function registerWorktreeActivation(e, x) {
	setWorktreeNavActivator(e), setWorktreeNavViewActivator(x);
}
function resolveActivationPtyListScope(e, x) {
	if (x === "global-floating-terminal") return { connectionId: null };
	let S = resolveWorktreeOperationRouteResult(e, x);
	if (S.kind === "missing" && !getRuntimeEnvironmentIdForWorktree(e, x)) {
		let S = resolveIndexedRepoOwner(e.repos, getRepoIdFromWorktreeId(x)), C = resolveIndexedWorktreeOwner(e.worktreesByRepo, x);
		if (S.kind === "resolved" && !(e.activeWorktreeId === x && e.activeWorkspaceExecutionHostId) && (C.kind === "missing" || C.kind === "resolved" && !C.owner.hostId && !C.owner.runtimeOwnerEnvironmentId) && !S.owner.connectionId && (!S.owner.executionHostId || S.owner.executionHostId === "local")) return { connectionId: null };
	}
	if (S.kind !== "resolved" || S.route.runtimeEnvironmentId) return;
	let C = parseExecutionHostId(S.route.executionHostId);
	if (!(!C || C.kind === "runtime")) return { connectionId: C.kind === "ssh" ? C.targetId : null };
}
async function listActivationPtySessions(e, x) {
	let S = resolveActivationPtyListScope(e, x);
	if (!S) throw Error("Activation PTY inventory is unverifiable: no execution-owner route");
	return window.api.pty.listSessions(S);
}
function getProviderSessionClaimKey(e) {
	let x = `${e.worktreeId}\0${e.agent}\0${e.providerSession.key}\0${e.providerSession.id}`;
	return e.agent === "pi" || e.agent === "prime-agent" ? `${x}\0${e.providerSession.transcriptPath ?? ""}` : x;
}
function isPassiveCompletedHibernationEvidence(e) {
	return e.origin !== "quit" && !(e.origin === "live" && e.interrupted === !0) && e.state === "done";
}
function getLegacyPaneTabId(e) {
	let x = parseLegacyNumericPaneKey(e.paneKey);
	return !x || e.tabId && e.tabId !== x.tabId ? null : e.tabId ?? x.tabId;
}
function getLegacyProviderSessionKeysForTab(e, x, S) {
	let C = /* @__PURE__ */ new Set();
	for (let w of Object.values(e.sleepingAgentSessionsByPaneKey)) w.worktreeId === x && getLegacyPaneTabId(w) === S && C.add(getProviderSessionClaimKey(w));
	return C;
}
function layoutContainsLeaf$1(e, x) {
	return !!(e && (e.type === "leaf" ? e.leafId === x : layoutContainsLeaf$1(e.first, x) || layoutContainsLeaf$1(e.second, x)));
}
function hasMatchingStablePaneLayout(e, x, S) {
	return layoutContainsLeaf$1(S[e]?.root, x);
}
function hasRestorableStablePanePty(e, x, S, C, w) {
	let T = w[x], E = !!T?.ptyIdsByLeafId?.[S], D = T?.root?.type === "leaf" && T.root.leafId === S;
	return !!(E || D && (e.ptyId || (C[x]?.length ?? 0) > 0));
}
function stablePaneHasLivePty(e, x, S, C) {
	let w = S[e] ?? [];
	if (w.length === 0) return !1;
	let T = C?.ptyIdsByLeafId?.[x];
	return T ? w.includes(T) : C?.root?.type === "leaf" && C.root.leafId === x;
}
function paneWillConnectOnActivation(e, x, S) {
	return S.activeWorktreeId === e ? !isWebTerminalSurfaceTabId(x) : !1;
}
function recordPaneIsOwnedByPreservedPane(e, x) {
	let S = x.tabsByWorktree[e.worktreeId] ?? [], C = parsePaneKey(e.paneKey);
	if (C) {
		if (e.tabId && e.tabId !== C.tabId) return !1;
		let w = e.tabId ?? C.tabId, T = S.find((e) => e.id === w) ?? null;
		return !T || !hasMatchingStablePaneLayout(w, C.leafId, x.terminalLayoutsByTabId) ? !1 : isPassiveCompletedHibernationEvidence(e) || stablePaneHasLivePty(w, C.leafId, x.ptyIdsByTabId, x.terminalLayoutsByTabId[w]) ? !0 : hasRestorableStablePanePty(T, w, C.leafId, x.ptyIdsByTabId, x.terminalLayoutsByTabId) && paneWillConnectOnActivation(e.worktreeId, w, x);
	}
	let w = getLegacyPaneTabId(e);
	if (!w) return !1;
	let T = S.find((e) => e.id === w) ?? null, E = getLegacyProviderSessionKeysForTab(x, e.worktreeId, w);
	return !!(T && (T.ptyId || (x.ptyIdsByTabId[T.id]?.length ?? 0) > 0) && E.size === 1 && paneWillConnectOnActivation(e.worktreeId, w, x));
}
function isWindowsUserAgent(e) {
	return e?.includes("Windows") ?? !1;
}
function isWslCwd(e) {
	return isWslUncPath$1(e ?? "");
}
function isWslShellOverride(e) {
	return /(?:^|[/\\])wsl(?:\.exe)?$/i.test(e ?? "");
}
function parseWindowsBuildNumber(e) {
	let x = e?.split(".")[2];
	if (!x) return;
	let S = Number.parseInt(x, 10);
	return Number.isFinite(S) && S > 0 ? S : void 0;
}
function buildXtermWindowsPtyOptions(e) {
	return e === void 0 || e < 21376 ? { backend: "conpty" } : {
		backend: "conpty",
		buildNumber: e
	};
}
function buildWindowsPtyCompatibilityOptions(e) {
	return isLocalNativeWindowsConpty(e) ? buildLocalConptyTerminalOptions(e.osRelease) : {};
}
function buildLocalConptyTerminalOptions(e) {
	return { windowsPty: buildXtermWindowsPtyOptions(parseWindowsBuildNumber(e)) };
}
function resolveWindowsShellOverride(e, x) {
	return e ?? x ?? void 0;
}
function isLocalNativeWindowsPty(e) {
	return isWindowsUserAgent(e.userAgent) && e.connectionId === null && !isWslCwd(e.cwd) && !isWslShellOverride(e.shellOverride);
}
function isLocalNativeWindowsConpty(e) {
	return e.executionHostId === "local" && isLocalNativeWindowsPty(e);
}
function resolveResumeLaunchPlatform(e) {
	return e.projectRuntime?.status === "repair-required" ? e.projectRuntime.repair.preferredRuntime.kind === "wsl" ? "linux" : CLIENT_PLATFORM : e.projectRuntime?.status === "resolved" && e.projectRuntime.runtime.kind === "wsl" || e.connectionId || e.worktreePath && isWslUncPath$1(e.worktreePath) ? "linux" : CLIENT_PLATFORM;
}
function resolveAgentResumeLaunchTarget(e) {
	let x = resolveResumeLaunchPlatform(e);
	return {
		platform: x,
		shell: resolveLocalWindowsAgentStartupShell({
			platform: x,
			isRemote: !!e.connectionId || parseExecutionHostId(e.executionHostId)?.kind !== "local",
			terminalWindowsShell: resolveWindowsShellOverride(e.tabShellOverride, e.terminalWindowsShell)
		})
	};
}
function getResumeLaunchTarget(e) {
	let x = useAppStore.getState(), S = x.getKnownWorktreeById(e), C = S ? x.repos.find((e) => e.id === S.repoId) : null;
	return resolveAgentResumeLaunchTarget({
		projectRuntime: getLocalProjectExecutionRuntimeContext(x, e),
		connectionId: C?.connectionId,
		executionHostId: getExecutionHostIdForWorktree(x, e),
		worktreePath: S?.path,
		terminalWindowsShell: x.settings?.terminalWindowsShell
	});
}
function appendTabToWorktreeOrder(e, x) {
	let S = useAppStore.getState(), C = (S.tabsByWorktree[e] ?? []).map((e) => e.id), w = S.openFiles.filter((x) => x.worktreeId === e).map((e) => e.id), T = (S.browserTabsByWorktree?.[e] ?? []).map((e) => e.id), E = reconcileTabOrder(S.tabBarOrderByWorktree[e], C, w, T).filter((e) => e !== x);
	E.push(x), S.setTabBarOrder(e, E);
}
function launchSleepingAgentSession(e, x) {
	let C = useAppStore.getState(), w = e.launchConfig, T = getResumeLaunchTarget(e.worktreeId), E = buildAgentResumeStartupPlan({
		agent: e.agent,
		providerSession: e.providerSession,
		cmdOverrides: C.settings?.agentCmdOverrides ?? {},
		agentArgs: w === void 0 ? resolveTuiAgentLaunchArgs(e.agent, C.settings?.agentDefaultArgs) : w.agentArgs,
		agentEnv: w === void 0 ? resolveTuiAgentLaunchEnv(e.agent, C.settings?.agentDefaultEnv) : w.agentEnv,
		...w?.agentCommand ? { agentCommand: w.agentCommand } : {},
		...w?.ompResumeFilePath ? { ompResumeFilePath: w.ompResumeFilePath } : {},
		platform: T.platform,
		shell: T.shell
	});
	if (!E) return toast.error(translate("auto.lib.resume.sleeping.agent.session.f235f604fd", "This agent session cannot be resumed.")), !1;
	let D = C.createTab(e.worktreeId, void 0, void 0, {
		launchAgent: e.agent,
		pendingStartup: {
			command: E.launchCommand,
			...E.env ? { env: E.env } : {},
			launchConfig: E.launchConfig,
			resumeProviderSession: e.providerSession,
			launchAgent: e.agent,
			...w ? { agentArgsOverride: w.agentArgs } : {},
			...E.startupCommandDelivery ? { startupCommandDelivery: E.startupCommandDelivery } : {},
			showSessionRestoredBanner: !0,
			telemetry: {
				agent_kind: tuiAgentToAgentKind(e.agent),
				launch_source: "sidebar",
				request_kind: "resume"
			}
		},
		automaticResumeClaim: {
			worktreeId: e.worktreeId,
			launchAgent: e.agent,
			providerSession: e.providerSession
		},
		...x?.suppressNavigation ? {
			activate: !1,
			recordInteraction: !1
		} : {}
	});
	return C.clearSleepingAgentSession(e.paneKey), x?.suppressNavigation || C.setActiveTabType("terminal"), appendTabToWorktreeOrder(e.worktreeId, D.id), x?.onSessionLaunched?.(D.id), !0;
}
function isStructuredAgentSyntheticSleepingRecord(e) {
	let x = parsePaneKey(e.paneKey);
	return x !== null && e.providerSession.key === "session_id" && structuredAgentSessionTabId(e.providerSession.id) === x.tabId;
}
function tabHoldsEnvironmentPtyBinding(e, x, S) {
	let C = e.terminalLayoutsByTabId[x]?.ptyIdsByLeafId ?? {};
	return Object.values(C).some((e) => parseRemoteRuntimePtyId(e)?.environmentId === S);
}
function findUnhydratedHostMirrorForPane(e, x) {
	let S = e.tabId ?? parsePaneKey(e.paneKey)?.tabId ?? null;
	if (!S || !isWebTerminalSurfaceTabId(S) || !(x.tabsByWorktree[e.worktreeId] ?? []).some((e) => e.id === S) || (x.ptyIdsByTabId[S]?.length ?? 0) > 0) return null;
	let C = getRuntimeEnvironmentIdForWorktree(x, e.worktreeId);
	return !C || !hasHostSessionMirrorHydrated(C, e.worktreeId) ? {
		kind: "mirror",
		environmentId: C
	} : tabHoldsEnvironmentPtyBinding(x, S, C) && !hasHostMirrorHandleWaitExpired(C, S) ? {
		kind: "handle",
		environmentId: C,
		tabId: S
	} : null;
}
function agentResumeOriginNamesAnotherExecutionHost(e, x) {
	if (e === void 0) return !1;
	let S = e === null ? null : e.trim();
	if (S === "") return !1;
	let C = parseExecutionHostId(x);
	return !C || C.kind === "runtime" ? !1 : C.kind === "ssh" ? S === null || toSshExecutionHostId(S) !== C.id : S !== null;
}
function sleepingRecordNamesAnotherExecutionHost(e, x) {
	return agentResumeOriginNamesAnotherExecutionHost(e.connectionId, getKnownExecutionHostIdForWorktree(x, e.worktreeId));
}
var TERMINATED_WITHOUT_ANSWER_PHASES = new Set(["offline", "error"]);
function resolveDirectSshAuthority(e, x) {
	let S = e.remoteWorkspaceSyncStatusByTargetId?.[x]?.phase;
	return e.remoteWorkspaceHydratedTargetIds?.has(x) ? S === "conflict" ? "unverifiable" : "none" : S !== void 0 && TERMINATED_WITHOUT_ANSWER_PHASES.has(S) ? "none" : "unverifiable";
}
function resolveWorkspaceTerminalHostAuthority(e, x) {
	if (!x || x === "global-floating-terminal") return "none";
	if (isWebRuntimeSessionActive(getRuntimeEnvironmentIdForWorktree(e, x))) return "live";
	let S = parseExecutionHostId(getExecutionHostIdForWorktree(e, x));
	return S?.kind === "runtime" ? "unverifiable" : S?.kind === "ssh" && parseWorkspaceKey(x)?.type !== "folder" ? resolveDirectSshAuthority(e, S.targetId) : "none";
}
var AUTHORITY_INPUT_KEYS = [
	"activeWorktreeId",
	"activeWorkspaceExecutionHostId",
	"detectedWorktreesByRepo",
	"folderWorkspaces",
	"projectGroups",
	"remoteWorkspaceHydratedTargetIds",
	"remoteWorkspaceSyncStatusByTargetId",
	"removedRuntimeEnvironmentIds",
	"repos",
	"restoredRuntimeHostIdByWorkspaceSessionKey",
	"runtimeEnvironmentCatalogHydrated",
	"runtimeEnvironments",
	"settings",
	"worktreesByRepo"
];
function captureAuthorityInputs(e) {
	return AUTHORITY_INPUT_KEYS.map((x) => e[x]);
}
function createWorkspaceTerminalHostAuthoritySelector(e) {
	let x = null, S = "none";
	return (C) => {
		let w = captureAuthorityInputs(C);
		return x?.every((e, x) => e === w[x]) === !0 ? S : (x = w, S = resolveWorkspaceTerminalHostAuthority(C, e), S);
	};
}
function clearPassiveCompletedRecordsForClaimKey(e, x, S) {
	let C = useAppStore.getState();
	for (let w of e) w.paneKey === S || !isPassiveCompletedHibernationEvidence(w) || getProviderSessionClaimKey(w) === x && C.clearSleepingAgentSession(w.paneKey);
}
function getCurrentPaneOwnedClaimKeys(e) {
	let x = useAppStore.getState(), S = /* @__PURE__ */ new Set();
	for (let C of e) x.sleepingAgentSessionsByPaneKey[C.paneKey] !== C || isInvalidWorktreeActivationRecord(C) || isPassiveCompletedHibernationEvidence(C) || recordPaneIsOwnedByPreservedPane(C, x) && S.add(getProviderSessionClaimKey(C));
	return S;
}
function getNewestActiveRecordsByClaimKey(e) {
	let x = /* @__PURE__ */ new Map();
	for (let S of e) {
		let e = getProviderSessionClaimKey(S), C = x.get(e);
		(!C || S.capturedAt > C.capturedAt || S.capturedAt === C.capturedAt && S.updatedAt > C.updatedAt) && x.set(e, S);
	}
	return x;
}
function getAgentStatusTabId(e) {
	if (e.tabId) return e.tabId;
	let x = e.paneKey.indexOf(":");
	return x === -1 ? null : e.paneKey.slice(0, x);
}
function activeOrQueuedResumeClaimsProviderSession(e, x, S) {
	let C = new Set((x.tabsByWorktree[e.worktreeId] ?? []).map((e) => e.id));
	for (let w of Object.values(x.agentStatusByPaneKey)) {
		if (S && w.paneKey === e.paneKey) continue;
		let T = getAgentStatusTabId(w), E = parsePaneKey(w.paneKey);
		if (!(w.agentType !== e.agent || !agentProviderSessionsEqual(e.agent, w.providerSession, e.providerSession)) && (E && T === E.tabId && stablePaneHasLivePty(E.tabId, E.leafId, x.ptyIdsByTabId, x.terminalLayoutsByTabId[E.tabId]) || w.state !== "done" && C.has(T ?? "") && w.worktreeId === e.worktreeId)) return !0;
	}
	for (let [S, w] of Object.entries(x.pendingStartupByTabId)) if (C.has(S) && w.launchAgent === e.agent && agentProviderSessionsEqual(e.agent, w.resumeProviderSession, e.providerSession)) return !0;
	for (let [S, w] of Object.entries(x.automaticAgentResumeClaimsByTabId)) if (C.has(S) && w.worktreeId === e.worktreeId && w.launchAgent === e.agent && agentProviderSessionsEqual(e.agent, w.providerSession, e.providerSession)) return !0;
	return !1;
}
function isInvalidWorktreeActivationRecord(e) {
	return isStructuredAgentSyntheticSleepingRecord(e) || !e.origin && e.state === "done" ? !0 : e.state !== "done" && e.capturedAt - e.updatedAt > 18e5;
}
function replayParkedWorktreeResumeSweep(e, x) {
	let S = useAppStore.getState().activeWorktreeId === e;
	resumeSleepingAgentSessionsForWorktree(e, {
		...x?.onSessionLaunched ? { onSessionLaunched: x.onSessionLaunched } : {},
		...S ? {} : { suppressNavigation: !0 }
	});
}
function parkWorktreeResumeSweepUntilHostMirrorAnswers(e, x, S) {
	let C = () => replayParkedWorktreeResumeSweep(e, S);
	if (x.kind === "handle") {
		parkUntilHostMirrorHandleLands(x.environmentId, e, x.tabId, C);
		return;
	}
	x.environmentId && parkUntilHostSessionMirrorHydrates(x.environmentId, e, C);
}
function resumeSleepingAgentSessionsForWorktree(e, x) {
	let S = useAppStore.getState();
	if (resolveWorkspaceTerminalHostAuthority(S, e) === "unverifiable") return 0;
	let C = Object.values(S.sleepingAgentSessionsByPaneKey).filter((x) => x.worktreeId === e).sort((e, x) => e.capturedAt - x.capturedAt || e.updatedAt - x.updatedAt), w = C.filter((e) => !isInvalidWorktreeActivationRecord(e)).filter((e) => !isPassiveCompletedHibernationEvidence(e)), T = new Set(w.map(getProviderSessionClaimKey)), E = getNewestActiveRecordsByClaimKey(w), D = /* @__PURE__ */ new Set(), O = 0;
	for (let k of C) {
		let A = useAppStore.getState();
		if (A.sleepingAgentSessionsByPaneKey[k.paneKey] !== k) continue;
		let j = getProviderSessionClaimKey(k);
		if (x?.skipClaimKeys?.has(j)) continue;
		if (isInvalidWorktreeActivationRecord(k)) {
			S.clearSleepingAgentSession(k.paneKey);
			continue;
		}
		if (sleepingRecordNamesAnotherExecutionHost(k, A)) continue;
		let M = findUnhydratedHostMirrorForPane(k, A);
		if (M) {
			parkWorktreeResumeSweepUntilHostMirrorAnswers(e, M, x);
			continue;
		}
		let N = recordPaneIsOwnedByPreservedPane(k, A);
		if (isPassiveCompletedHibernationEvidence(k)) {
			(!N || T.has(j)) && S.clearSleepingAgentSession(k.paneKey);
			continue;
		}
		if (activeOrQueuedResumeClaimsProviderSession(k, A, N)) {
			S.clearSleepingAgentSession(k.paneKey);
			continue;
		}
		if (getCurrentPaneOwnedClaimKeys(w).has(j)) {
			N || S.clearSleepingAgentSession(k.paneKey);
			continue;
		}
		if (D.has(j)) {
			S.clearSleepingAgentSession(k.paneKey);
			continue;
		}
		if (E.get(j) !== k) {
			S.clearSleepingAgentSession(k.paneKey);
			continue;
		}
		N || launchSleepingAgentSession(k, x) && (O += 1, D.add(j), clearPassiveCompletedRecordsForClaimKey(C, j, k.paneKey));
	}
	return O;
}
function resolveTerminalTabPtyOwnership(e, x, S, C = {}) {
	let w = e.tabsByWorktree[x] ?? [], T = [], E = [];
	for (let x of w) {
		if ((e.ptyIdsByTabId[x.id] ?? []).includes(S)) {
			T.push(x.id);
			continue;
		}
		let C = e.terminalLayoutsByTabId[x.id]?.ptyIdsByLeafId;
		(x.ptyId === S || C !== void 0 && Object.values(C).includes(S)) && E.push(x.id);
	}
	let D = C.preferTabId !== void 0 && w.some((e) => e.id === C.preferTabId) ? C.preferTabId : void 0, O = T.length > 0 ? T : E;
	return O.length === 1 ? {
		kind: "owned",
		tabId: O[0]
	} : O.length > 1 ? D !== void 0 && O.includes(D) ? {
		kind: "owned",
		tabId: D
	} : { kind: "ambiguous" } : D === void 0 ? { kind: "none" } : {
		kind: "owned",
		tabId: D
	};
}
function resolveTerminalTabIdForPtyId(e, x, S) {
	let C = resolveTerminalTabPtyOwnership(e, x, S);
	return C.kind === "owned" ? C.tabId : null;
}
function layoutContainsLeaf(e, x) {
	return e ? e.type === "leaf" ? e.leafId === x : layoutContainsLeaf(e.first, x) || layoutContainsLeaf(e.second, x) : !1;
}
function bindLivePtyToExactSurface(e, x, S) {
	let C = parsePaneKey(S.paneKey);
	if (!C || C.tabId !== S.tabId) return !1;
	let w = Object.entries(e.tabsByWorktree).flatMap(([e, x]) => x.filter((e) => e.id === S.tabId).map((x) => ({
		ownerWorktreeId: e,
		tab: x
	}))), T = Object.entries(e.ptyIdsByTabId).some(([e, x]) => e !== S.tabId && x.includes(S.ptyId));
	if (w.length > 1 || T) return !1;
	let E = w[0];
	if (E) {
		let w = e.terminalLayoutsByTabId[S.tabId];
		return !worktreeIdsEqual(E.ownerWorktreeId, x) || !layoutContainsLeaf(w?.root ?? null, C.leafId) ? !1 : (e.updateTabPtyId(S.tabId, S.ptyId), e.replaceTerminalLayoutPanePtyId(S.tabId, C.leafId, S.ptyId), !0);
	}
	return e.createTab(x, void 0, void 0, {
		id: S.tabId,
		initialLeafId: C.leafId,
		initialPtyId: S.ptyId,
		activate: !1,
		recordInteraction: !1
	}).id === S.tabId;
}
function tabExists(e, x) {
	return Object.values(e.tabsByWorktree).some((e) => e.some((e) => e.id === x));
}
function adoptHostOwnedSurface(e, x, S, C) {
	let w = e(), T = tabExists(w, S.tabId);
	if (bindLivePtyToExactSurface(w, x, S)) return T || C.add(S.tabId), !0;
	let E = parsePaneKey(S.paneKey);
	if (!E || !C.has(S.tabId)) return !1;
	let D = e(), O = D.terminalLayoutsByTabId[S.tabId];
	return O?.root ? (D.setTabLayout(S.tabId, {
		...O,
		root: {
			type: "split",
			direction: "horizontal",
			first: O.root,
			second: {
				type: "leaf",
				leafId: E.leafId
			}
		},
		ptyIdsByLeafId: {
			...O.ptyIdsByLeafId,
			[E.leafId]: S.ptyId
		}
	}), D.updateTabPtyId(S.tabId, S.ptyId), !0) : !1;
}
async function adoptLiveWorkspacePtySurfaces(e, x, S, C) {
	let w = S.filter((S) => resolveTerminalTabPtyOwnership(e(), x, S).kind === "none"), T = w.length < S.length, E = [];
	if (w.length === 0) return {
		surfaced: T,
		declinedPtyIds: E
	};
	let D;
	try {
		D = await C(x);
	} catch {
		D = null;
	}
	let O = /* @__PURE__ */ new Set();
	for (let S of w) {
		if (resolveTerminalTabPtyOwnership(e(), x, S).kind !== "none") {
			T = !0;
			continue;
		}
		let C = D?.get(S);
		if (C) {
			adoptHostOwnedSurface(e, x, C, O) ? T = !0 : E.push(S);
			continue;
		}
		if (!D || D.has(S)) {
			E.push(S);
			continue;
		}
		e().createTab(x, void 0, void 0, {
			initialPtyId: S,
			activate: !1,
			recordInteraction: !1
		}), T = !0;
	}
	return {
		surfaced: T,
		declinedPtyIds: E
	};
}
var OWNER_LISTING_LIMIT = 200;
function isScopedTerminalListResult(e) {
	if (!e || typeof e != "object" || !Array.isArray(e.terminals)) return !1;
	let x = e.hostScope;
	return !!x && typeof x == "object" && Array.isArray(x.hostIds) && Array.isArray(x.omittedHostIds);
}
function toSurfaceOwner(e) {
	return !e.ptyId || !e.tabId || e.tabId.includes(":") ? null : isTerminalLeafId(e.leafId) ? {
		paneKey: makePaneKey(e.tabId, e.leafId),
		ptyId: e.ptyId,
		tabId: e.tabId
	} : null;
}
function indexLiveTerminalSurfaceOwners(e, x) {
	let S = /* @__PURE__ */ new Map();
	for (let C of e) {
		if (!worktreeIdsEqual(C.worktreeId, x) || !C.ptyId || C.orphaned === !0) continue;
		let e = toSurfaceOwner(C), w = S.get(C.ptyId);
		S.set(C.ptyId, S.has(C.ptyId) && w?.paneKey !== e?.paneKey ? null : e);
	}
	return S;
}
async function readWorktreeLiveTerminalSurfaceOwners(e) {
	if (typeof window > "u") return null;
	let x = await window.api.runtime.call({
		method: "terminal.list",
		params: {
			worktree: toRuntimeWorktreeSelector(e),
			limit: OWNER_LISTING_LIMIT,
			includeVisualLayouts: !1
		}
	});
	if (!x.ok || !isScopedTerminalListResult(x.result)) return null;
	let { hostScope: S, terminals: C, truncated: w } = x.result;
	return w === !0 || S.hostIds.length === 0 ? null : indexLiveTerminalSurfaceOwners(C, e);
}
async function readWorktreeStructuredActivationInventory(e) {
	if (typeof window > "u") return !1;
	let x = await window.api.runtime.call({
		method: "session.tabs.list",
		params: { worktree: toRuntimeWorktreeSelector(e) }
	});
	if (!x.ok) throw Error("structured session inventory unavailable");
	let S = x.result;
	if (!S || typeof S.worktree != "string" || !worktreeIdsEqual(S.worktree, e) || !Array.isArray(S.tabs)) throw Error("structured session inventory scope unavailable");
	if (!S.tabs.some((e) => e.type === "agent-session")) return !1;
	let C = /* @__PURE__ */ new Map();
	return await Promise.all(S.tabs.flatMap((e) => e.type === "agent-session" ? [window.api.runtime.call({
		method: "agentSession.handoffStatus",
		params: { sessionId: e.sessionId }
	}).then((x) => {
		if (!x.ok) return;
		let S = x.result;
		S.owner === "native" ? C.set(e.sessionId, { owner: "native" }) : S.owner === "tui" && typeof S.terminal?.paneKey == "string" && typeof S.terminal?.ptyId == "string" && S.terminal.ptyId.length > 0 && typeof S.terminal.tabId == "string" && C.set(e.sessionId, {
			owner: "tui",
			terminal: {
				paneKey: S.terminal.paneKey,
				ptyId: S.terminal.ptyId,
				tabId: S.terminal.tabId
			}
		});
	})] : [])), {
		snapshot: S,
		ownerBySessionId: C
	};
}
var inFlightByWorktreeId = /* @__PURE__ */ new Map(), WORKSPACE_SESSION_READY_TIMEOUT_MS = 3e4;
function waitForWorkspaceSessionReady() {
	let e = () => {
		let e = useAppStore.getState();
		return e.workspaceSessionReady && e.terminalStartupRestorationReady;
	};
	return e() ? Promise.resolve(!0) : new Promise((x) => {
		let S = null, C = (e) => {
			clearTimeout(w), S?.(), x(e);
		}, w = setTimeout(() => C(e()), WORKSPACE_SESSION_READY_TIMEOUT_MS);
		S = useAppStore.subscribe((e) => {
			e.workspaceSessionReady && e.terminalStartupRestorationReady && C(!0);
		}), e() && C(!0);
	});
}
function workspaceHasSleepingAgentSessions(e, x) {
	return Object.values(e.sleepingAgentSessionsByPaneKey).some((e) => e.worktreeId === x);
}
function hasStructuredSession(e, x) {
	return (e.unifiedTabsByWorktree[x] ?? []).some((e) => e.contentType === "agent-session");
}
function sessionBelongsToWorkspace(e, x) {
	return parsePtySessionId(e).worktreeId === x ? !0 : parseWorkspaceKey(x)?.type === "folder" && e.startsWith(`${x}@@`) && e.length > x.length + 2;
}
function liveSleepingAgentClaims(e, x, S, C) {
	let w = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
	for (let E of Object.values(e.sleepingAgentSessionsByPaneKey)) {
		if (E.worktreeId !== x) continue;
		let D = parsePaneKey(E.paneKey), O = E.tabId ?? D?.tabId, k = D ? e.terminalLayoutsByTabId[D.tabId]?.ptyIdsByLeafId?.[D.leafId] : void 0, A = O ? e.ptyIdsByTabId[O] : void 0, j = D && isStructuredAgentSyntheticSleepingRecord(E) ? C?.ownerBySessionId.get(E.providerSession.id) : void 0;
		if (j?.owner === "native") {
			w.add(getProviderSessionClaimKey(E));
			continue;
		}
		let M = j?.owner === "tui" ? j.terminal?.ptyId : void 0, N = k ?? (A?.length === 1 ? A[0] : void 0) ?? M;
		N && S.has(N) && (T.add(N), w.add(getProviderSessionClaimKey(E)));
	}
	return {
		keys: w,
		claimedPtyIds: T
	};
}
async function runWorktreeAgentActivationGate(e, x) {
	try {
		if (x.awaitReady && !await x.awaitReady()) return "blocked";
	} catch {
		return "blocked";
	}
	let S = !1, C = null;
	try {
		let w = await x.hasStructuredSession?.(e);
		C = typeof w == "object" ? w : null, S = !!(hasStructuredSession(x.getState(), e) || w);
	} catch {
		return "blocked";
	}
	if ((C?.snapshot.tabs.filter((e) => e.type === "agent-session"))?.some((e) => {
		let x = C?.ownerBySessionId.get(e.sessionId);
		return !x || x.owner === "tui" && (!x.terminal || parsePaneKey(x.terminal.paneKey)?.tabId !== x.terminal.tabId);
	}) || S && !C && workspaceHasSleepingAgentSessions(x.getState(), e)) return "blocked";
	let w;
	try {
		w = await x.listSessions();
	} catch {
		return "blocked";
	}
	let T = w.filter((x) => x.worktreeId !== void 0 && worktreeIdsEqual(x.worktreeId, e) || sessionBelongsToWorkspace(x.id, e)), E = new Set(T.map((e) => e.id));
	for (let S of C?.ownerBySessionId.values() ?? []) if (S.owner === "tui" && (!S.terminal || !E.has(S.terminal.ptyId) || !bindLivePtyToExactSurface(x.getState(), e, S.terminal))) return "blocked";
	let D = !1;
	if (T.length > 0) {
		let S = await adoptLiveWorkspacePtySurfaces(x.getState, e, [...E], x.listSurfaceOwners);
		if (D = S.surfaced, S.declinedPtyIds.length > 0 && console.warn("[worktree-activation] live PTYs left without a surface", {
			worktreeId: e,
			declinedPtyIds: S.declinedPtyIds
		}), D && !workspaceHasSleepingAgentSessions(x.getState(), e)) return "adopted";
	}
	if (S && !workspaceHasSleepingAgentSessions(x.getState(), e)) return "structured";
	let O = x.getState(), k = liveSleepingAgentClaims(O, e, E, C);
	return Object.values(O.sleepingAgentSessionsByPaneKey).some((x) => x.worktreeId === e && !k.keys.has(getProviderSessionClaimKey(x))) && T.some((e) => e.agentOwnership !== "absent" && !k.claimedPtyIds.has(e.id)) ? "blocked" : x.resume(e, { skipClaimKeys: k.keys }) > 0 ? "resumed" : D ? "adopted" : S ? "structured" : "empty";
}
function gateWorktreeAgentActivation(e) {
	let x = inFlightByWorktreeId.get(e);
	if (x) return x;
	let S = runWorktreeAgentActivationGate(e, {
		getState: () => useAppStore.getState(),
		awaitReady: waitForWorkspaceSessionReady,
		listSessions: () => typeof window > "u" ? Promise.resolve([]) : listActivationPtySessions(useAppStore.getState(), e),
		listSurfaceOwners: readWorktreeLiveTerminalSurfaceOwners,
		hasStructuredSession: readWorktreeStructuredActivationInventory,
		resume: resumeSleepingAgentSessionsForWorktree
	}).finally(() => {
		inFlightByWorktreeId.get(e) === S && inFlightByWorktreeId.delete(e);
	});
	return inFlightByWorktreeId.set(e, S), S;
}
function shouldAutoCreateInitialTerminal(e, x = !1) {
	return e === 0 && !x;
}
function isSleepingSweepExemptWorkspace(e, x) {
	return x !== !1 && e.isMainWorktree;
}
function isSleepingSweepExemptionNarrowingList(e, x) {
	return !e && x === !1;
}
function isAutomationGeneratedWorkspace(e) {
	return e.automationProvenance?.kind === "created-by-automation";
}
function isCliCreatedWorkspace(e) {
	return e.cliProvenance?.kind === "created-by-cli";
}
function isDetachedHeadWorkspace(e) {
	return getWorktreeGitIdentityDisplay(e)?.kind === "detached";
}
function sidebarHasActiveFilters(e) {
	return e.showSleepingWorkspaces !== !0 || e.filterRepoIds.length > 0 || e.hideDefaultBranchWorkspace || e.hideAutomationGeneratedWorkspaces || e.hideCliCreatedWorkspaces || e.hideDetachedHeadWorkspaces || e.hideWorkspacesFromOtherDevices || e.alwaysShowDefaultBranchWorkspace === !1 || e.visibleWorkspaceHostIds != null || e.workspaceHostScope != null && e.workspaceHostScope !== "all";
}
function computeClearFilterActions(e) {
	return {
		resetShowSleepingWorkspaces: e.showSleepingWorkspaces !== !0,
		resetFilterRepoIds: e.filterRepoIds.length > 0,
		resetHideDefaultBranchWorkspace: e.hideDefaultBranchWorkspace,
		resetHideAutomationGeneratedWorkspaces: e.hideAutomationGeneratedWorkspaces,
		resetHideCliCreatedWorkspaces: e.hideCliCreatedWorkspaces,
		resetHideDetachedHeadWorkspaces: e.hideDetachedHeadWorkspaces,
		resetHideWorkspacesFromOtherDevices: e.hideWorkspacesFromOtherDevices,
		resetAlwaysShowDefaultBranchWorkspace: e.alwaysShowDefaultBranchWorkspace === !1,
		resetVisibleWorkspaceHostIds: e.visibleWorkspaceHostIds != null || e.workspaceHostScope != null && e.workspaceHostScope !== "all"
	};
}
function getVisibleWorkspaceHostIdSet(e) {
	let x = e.visibleWorkspaceHostIds ?? (e.workspaceHostScope === "all" ? null : [e.workspaceHostScope]);
	return x ? new Set(x) : null;
}
function worktreeMatchesVisibleHost(e, x, S, C) {
	if (!x) return !0;
	let w = S.get(e.repoId);
	return w ? x.has(getWorktreeExecutionHostId(e, w, C)) : !1;
}
const IDLE = {
	cls: 5,
	attentionTimestamp: 0
};
function hasFreshAttributedAgentStatus(e, x, S) {
	let C = /* @__PURE__ */ new Set();
	for (let S of Object.values(e ?? {})) {
		let e = parsePaneKey(S.paneKey);
		if (!(e === null || !isExplicitAgentStatusFresh(S, x, 18e5))) {
			if (S.worktreeId) return !0;
			C.add(e.tabId);
		}
	}
	return C.size === 0 ? !1 : Object.values(S).some((e) => e.some((e) => C.has(e.id)));
}
function mostRecentAttentionInHistory(e) {
	let x = 0;
	for (let S of e) if (!(S.state === "done" && S.interrupted) && (S.state === "done" || S.state === "blocked" || S.state === "waiting")) {
		if (!Number.isFinite(S.startedAt)) continue;
		S.startedAt > x && (x = S.startedAt);
	}
	return x > 0 ? x : null;
}
function resolveAttention(e, x) {
	let S = 5, C = 0, w;
	for (let T of e) {
		let e, E, D;
		if (T.kind === "hook") {
			let O = T.entry;
			if (!isExplicitAgentStatusFresh(O, x, 18e5)) {
				if (resolveDecayedAgentRowState(O, T.hasLivePty) === "unverifiable") {
					let e = agentStatusEvidenceObservedAt(O);
					Number.isFinite(e) && (4 < S || S === 4 && e > C) && (S = 4, C = e, w = void 0);
				}
				continue;
			}
			if (!Number.isFinite(O.stateStartedAt)) continue;
			if (O.state === "blocked" || O.state === "waiting") e = 1, E = O.stateStartedAt, D = O.state;
			else if (O.state === "done") {
				let S = agentEntryCompletionAt(O);
				if (S === null || x - S > 18e5) continue;
				e = 2, E = S;
			} else {
				e = 3;
				let x = mostRecentAttentionInHistory(O.stateHistory);
				E = x === null ? O.stateStartedAt : O.agentType === "command-code" ? Math.max(x, O.stateStartedAt) : x;
			}
		} else if (T.status === "permission") e = 1, E = x, D = "title-heuristic";
		else if (T.status === "working") e = 3, E = T.worktreeLastActivityAt;
		else continue;
		(e < S || e === S && E > C) && (S = e, C = E, w = D);
	}
	return S === 1 && w ? {
		cls: S,
		attentionTimestamp: C,
		cause: w
	} : {
		cls: S,
		attentionTimestamp: C
	};
}
function buildExplicitEntriesByTabId(e, x) {
	let S = /* @__PURE__ */ new Map(), C = (e) => {
		let x = parsePaneKey(e.paneKey);
		if (!x) return;
		let C = S.get(x.tabId);
		C ? C.push(e) : S.set(x.tabId, [e]);
	};
	for (let x of Object.values(e ?? {})) C(x);
	for (let e of Object.values(x ?? {})) {
		let x = migrationUnsupportedToAgentStatusEntry(e);
		x && C(x);
	}
	return S;
}
function buildExplicitEntriesByWorktreeId(e) {
	let x = /* @__PURE__ */ new Map();
	for (let S of Object.values(e ?? {})) {
		if (!S.worktreeId || !parsePaneKey(S.paneKey)) continue;
		let e = x.get(S.worktreeId);
		e ? e.push(S) : x.set(S.worktreeId, [S]);
	}
	return x;
}
function leafIdFromPaneKey(e) {
	return parsePaneKey(e)?.leafId ?? null;
}
function collectTabPaneInputs(e, x, S, C) {
	let w = [], T = tabHasLivePty(S.ptyIdsByTabId, e.id), E = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
	for (let x of S.entriesByTabId.get(e.id) ?? []) {
		w.push({
			kind: "hook",
			entry: x,
			hasLivePty: T
		});
		let e = leafIdFromPaneKey(x.paneKey);
		e !== null && D.add(e), !(!x.restoredUnconfirmed && !isExplicitAgentStatusFresh(x, C, 18e5)) && e !== null && E.add(e);
	}
	if (!T) return w;
	let O = S.runtimePaneTitlesByTabId[e.id];
	if (!O || Object.keys(O).length === 0) return (isSyntheticAgentPermissionTitle(e.title) ? D : E).size === 0 && w.push({
		kind: "title",
		status: classifyTitleActivity(e.title),
		worktreeLastActivityAt: x
	}), w;
	let k = S.terminalLayoutsByTabId?.[e.id], A = Object.entries(O);
	for (let [e, S] of A) {
		let C = isSyntheticAgentPermissionTitle(S) ? D : E, T = resolveRuntimePaneTitleLeafId(k, e), O = T === null && C.size === 1 && A.length === 1;
		T !== null && C.has(T) || O || w.push({
			kind: "title",
			status: classifyTitleActivity(S),
			worktreeLastActivityAt: x
		});
	}
	return w;
}
function buildAttentionByWorktree(e, x, S, C, w, T, E, D) {
	let O = buildExplicitEntriesByTabId(S, E), k = buildExplicitEntriesByWorktreeId(S), A = /* @__PURE__ */ new Set();
	for (let e of Object.values(x ?? {})) for (let x of e) A.add(x.id);
	let j = {
		entriesByTabId: O,
		ptyIdsByTabId: w,
		runtimePaneTitlesByTabId: C,
		terminalLayoutsByTabId: D
	}, M = /* @__PURE__ */ new Map();
	for (let S of e) {
		let e = x?.[S.id] ?? [], C = (k.get(S.id) ?? []).filter((e) => {
			let x = parsePaneKey(e.paneKey);
			return x !== null && !A.has(x.tabId);
		}).map((e) => ({
			kind: "hook",
			entry: e,
			hasLivePty: !1
		}));
		if (e.length === 0) {
			M.set(S.id, resolveAttention(C, T));
			continue;
		}
		for (let x of e) C.push(...collectTabPaneInputs(x, S.lastActivityAt, j, T));
		M.set(S.id, resolveAttention(C, T));
	}
	return M;
}
function effectiveRecentActivity(e, x) {
	let { lastActivityAt: S, createdAt: C } = e;
	return C === void 0 || x >= C + 3e5 ? S : Math.max(S, C + 3e5);
}
function getWorktreeSortLabel(e) {
	return (typeof e.displayName == "string" ? e.displayName.trim() : "") || (typeof e.path == "string" ? basename(e.path).trim() : "") || e.id;
}
function buildWorktreeSortLabels(e) {
	let x = /* @__PURE__ */ new Map();
	for (let S of e) x.set(S, getWorktreeSortLabel(S));
	return x;
}
function compareWorktreeSortLabel(e, x, S) {
	return (S?.get(e) ?? getWorktreeSortLabel(e)).localeCompare(S?.get(x) ?? getWorktreeSortLabel(x));
}
function buildWorktreeComparator(e, x, S, C, w) {
	return (T, E) => {
		switch (e) {
			case "name": return compareWorktreeSortLabel(T, E, w);
			case "smart": {
				let e = C.get(T.id) ?? IDLE, x = C.get(E.id) ?? IDLE;
				return e.cls - x.cls || x.attentionTimestamp - e.attentionTimestamp || effectiveRecentActivity(E, S) - effectiveRecentActivity(T, S) || compareWorktreeSortLabel(T, E, w);
			}
			case "recent": return effectiveRecentActivity(E, S) - effectiveRecentActivity(T, S) || compareWorktreeSortLabel(T, E, w);
			case "repo": {
				let e = x.get(T.repoId)?.displayName ?? "", S = x.get(E.repoId)?.displayName ?? "", C = e.localeCompare(S);
				return C === 0 ? compareWorktreeSortLabel(T, E, w) : C;
			}
			case "manual": return (E.manualOrder ?? E.sortOrder) - (T.manualOrder ?? T.sortOrder) || compareWorktreeSortLabel(T, E, w);
		}
	};
}
function sortWorktreesSmart(e, x, S, C, w, T, E, D) {
	let O = Object.values(x).some((e) => e.some((e) => tabHasLivePty(T, e.id))), k = Date.now(), A = buildWorktreeSortLabels(e);
	if (!O && !hasFreshAttributedAgentStatus(C, k, x)) return [...e].sort((e, x) => x.sortOrder - e.sortOrder || compareWorktreeSortLabel(e, x, A));
	let j = buildAttentionByWorktree(e, x, C, w, T, k, E, D);
	return [...e].sort(buildWorktreeComparator("smart", S, k, j, A));
}
function getWorktreeIdsWithLiveAgent(e, x, S) {
	return new Set(getLiveAgentStatusByWorktreeId(e, x, S).keys());
}
function getLiveAgentStatusByWorktreeId(e, x, S) {
	let C = Object.values(e ?? {}).filter((e) => isFreshNonDoneAgentStatus(e, S));
	if (C.length === 0) return /* @__PURE__ */ new Map();
	let w = /* @__PURE__ */ new Map();
	for (let [e, S] of Object.entries(x ?? {})) for (let x of S) w.set(x.id, e);
	let T = /* @__PURE__ */ new Map();
	for (let e of C) {
		let x = resolveAgentStatusWorktreeId(e, w);
		if (x) {
			let S = e.state === "working" ? e.workingMode === "monitoring" ? "monitoring" : "working" : "permission", C = T.get(x);
			(S === "permission" || C === void 0 || S === "working" && C === "monitoring") && T.set(x, S);
		}
	}
	return T;
}
function hasActiveWorkspaceActivity(e, x, S, C, w) {
	let T = x?.[e] ?? [], E = S != null && T.some((e) => tabHasLivePty(S, e.id)), D = (C?.[e] ?? []).length > 0, O = w.has(e);
	return E || D || O;
}
function isInactiveWorkspace(e, x, S, C, w) {
	return !hasActiveWorkspaceActivity(e, x, S, C, w);
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function ConductorDoneIcon({ className: e }) {
	return import_react.createElement("svg", {
		className: e,
		viewBox: "0 0 12 12",
		fill: "none",
		"aria-hidden": !0
	}, import_react.createElement("circle", {
		cx: 6,
		cy: 6,
		r: 5.1,
		fill: "currentColor"
	}), import_react.createElement("path", {
		d: "M4 6.05 5.25 7.25 8.05 4.7",
		stroke: "white",
		strokeWidth: 1.25,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
}
function ConductorReviewIcon({ className: e }) {
	return import_react.createElement("svg", {
		className: e,
		viewBox: "0 0 12 12",
		fill: "none",
		"aria-hidden": !0
	}, import_react.createElement("circle", {
		cx: 6,
		cy: 6,
		r: 4.9,
		fill: "var(--background)",
		stroke: "currentColor",
		strokeWidth: 1.45
	}), import_react.createElement("path", {
		d: "M4.15 6.05 5.25 7.05 7.7 4.75",
		stroke: "currentColor",
		strokeWidth: 1.2,
		strokeLinecap: "round",
		strokeLinejoin: "round"
	}));
}
function ConductorProgressIcon({ className: e }) {
	return import_react.createElement("svg", {
		className: e,
		viewBox: "0 0 12 12",
		fill: "none",
		"aria-hidden": !0
	}, import_react.createElement("circle", {
		cx: 6,
		cy: 6,
		r: 4.9,
		fill: "var(--background)",
		stroke: "currentColor",
		strokeWidth: 1.45
	}), import_react.createElement("path", {
		d: "M6 3.75v2.7",
		stroke: "currentColor",
		strokeWidth: 1.25,
		strokeLinecap: "round"
	}));
}
const PR_GROUP_ORDER = [
	"done",
	"in-review",
	"in-progress",
	"closed"
];
function getPRLaneKey(e) {
	return `pr:${e}`;
}
const PR_GROUP_META = {
	done: {
		get label() {
			return translate("auto.components.sidebar.worktree.list.groups.5076efc3d2", "Done");
		},
		icon: ConductorDoneIcon,
		tone: "text-workspace-status-done"
	},
	"in-review": {
		get label() {
			return translate("auto.components.sidebar.worktree.list.groups.6798dc7c94", "In review");
		},
		icon: ConductorReviewIcon,
		tone: "text-workspace-status-review"
	},
	"in-progress": {
		get label() {
			return translate("auto.components.sidebar.worktree.list.groups.7c2f009786", "In progress");
		},
		icon: ConductorProgressIcon,
		tone: "text-workspace-status-progress"
	},
	closed: {
		get label() {
			return translate("auto.components.sidebar.worktree.list.groups.682ed5d551", "Closed");
		},
		icon: CircleX,
		tone: "text-zinc-600 dark:text-zinc-300"
	}
}, PROJECT_GROUP_META = {
	tone: "text-foreground",
	icon: FolderTree
};
function getProjectGroupHeaderKey(e) {
	return e ? `project-group:${e}` : UNGROUPED_PROJECT_GROUP_KEY;
}
const PINNED_GROUP_KEY = "pinned", PINNED_GROUP_META = {
	get label() {
		return translate("auto.components.sidebar.worktree.list.groups.4aeefc5996", "Pinned");
	},
	tone: "text-foreground",
	icon: Pin
}, ALL_GROUP_KEY = "all", ALL_GROUP_META = {
	get label() {
		return translate("auto.components.sidebar.worktree.list.groups.0ed04075b8", "All");
	},
	tone: "text-foreground",
	icon: List
};
function getLineageGroupKey(e) {
	return `lineage:${e}`;
}
function getWorktreeLineageGroupKey(e) {
	return getLineageGroupKey(e.hostId ? getWorktreeHostIdentity(e) : e.id);
}
function getPRGroupKey(e, x, S, C) {
	let w = x.get(e.repoId), T = branchName(e.branch), E = w && T ? getGitHubPRCacheKey(w.path, w.id, T, C, w.connectionId, w.executionHostId, !0) : "", D = w !== void 0 && !w.connectionId && !w.executionHostId, O = D && T ? getLegacyGitHubPRCacheKey(w.path, w.id, T) : "", k = D && T ? getLegacyGitHubPRCacheKey(w.path, void 0, T) : "", A = (S ? (E ? S[E] : void 0) ?? (O ? S[O] : void 0) ?? (k ? S[k] : void 0) : void 0)?.data;
	return !A || typeof A.number == "number" && isGitHubPRSuppressed(e, A.number) ? "in-progress" : A.state === "merged" ? "done" : A.state === "closed" ? "closed" : A.state === "draft" ? "in-progress" : "in-review";
}
const getWorkspaceStatusIconOptions = createLocalizedCatalog(() => [
	{
		id: "circle",
		label: translate("auto.components.sidebar.workspace.status.b4a7101fe1", "Circle"),
		icon: Circle
	},
	{
		id: "circle-dot",
		label: translate("auto.components.sidebar.workspace.status.a702bc08d4", "Dot"),
		icon: CircleDot
	},
	{
		id: "circle-progress",
		label: translate("auto.components.sidebar.workspace.status.226d1e7773", "Progress"),
		icon: ConductorProgressIcon
	},
	{
		id: "circle-dashed",
		label: translate("auto.components.sidebar.workspace.status.821d156f54", "Dashed"),
		icon: CircleDashed
	},
	{
		id: "circle-ellipsis",
		label: translate("auto.components.sidebar.workspace.status.5f9ca31a84", "Waiting"),
		icon: CircleEllipsis
	},
	{
		id: "git-pull-request",
		label: translate("auto.components.sidebar.workspace.status.409528031f", "Review"),
		icon: ConductorReviewIcon
	},
	{
		id: "timer",
		label: translate("auto.components.sidebar.workspace.status.251c817bdd", "Timer"),
		icon: Timer
	},
	{
		id: "flag",
		label: translate("auto.components.sidebar.workspace.status.6380517b10", "Flag"),
		icon: Flag
	},
	{
		id: "circle-alert",
		label: translate("auto.components.sidebar.workspace.status.642da473f2", "Alert"),
		icon: CircleAlert
	},
	{
		id: "circle-pause",
		label: translate("auto.components.sidebar.workspace.status.111db162bf", "Paused"),
		icon: CirclePause
	},
	{
		id: "circle-play",
		label: translate("auto.components.sidebar.workspace.status.2c19d1db33", "Play"),
		icon: CirclePlay
	},
	{
		id: "circle-check",
		label: translate("auto.components.sidebar.workspace.status.6b8285b8dd", "Done"),
		icon: ConductorDoneIcon
	},
	{
		id: "ban",
		label: translate("auto.components.sidebar.workspace.status.93ac840dcb", "Blocked"),
		icon: Ban
	},
	{
		id: "conductor-done",
		label: translate("auto.components.sidebar.workspace.status.6b8285b8dd", "Done"),
		icon: ConductorDoneIcon
	},
	{
		id: "conductor-review",
		label: translate("auto.components.sidebar.workspace.status.6c1efa2cf8", "In review"),
		icon: ConductorReviewIcon
	},
	{
		id: "conductor-progress",
		label: translate("auto.components.sidebar.workspace.status.cb387159f6", "In progress"),
		icon: ConductorProgressIcon
	}
]), WORKSPACE_STATUS_DRAG_TYPE = "application/x-orca-worktree-id", WORKSPACE_STATUS_DRAG_IDS_TYPE = "application/x-orca-worktree-ids";
function writeWorkspaceDragData(e, x) {
	let S = Array.isArray(x) ? x : [x], [C] = S;
	C && (e.effectAllowed = "move", e.setData(WORKSPACE_STATUS_DRAG_TYPE, C), e.setData(WORKSPACE_STATUS_DRAG_IDS_TYPE, JSON.stringify(S)), e.setData("text/plain", C));
}
function readWorkspaceDragData(e) {
	let x = readWorkspaceStatusDragPayload(e, WORKSPACE_STATUS_DRAG_TYPE);
	if (x.status === "ok") return x.value;
	if (x.status === "too-large") return null;
	let S = readWorkspaceStatusDragPayload(e, "text/plain");
	return S.status === "ok" ? S.value : null;
}
function readWorkspaceDragDataIds(e) {
	let x = readWorkspaceStatusDragPayload(e, WORKSPACE_STATUS_DRAG_IDS_TYPE);
	if (x.status === "too-large") return [];
	if (x.status === "ok") try {
		let e = JSON.parse(x.value);
		if (Array.isArray(e)) return collectWorkspaceStatusDragIds(e) ?? [];
	} catch {}
	let S = readWorkspaceDragData(e);
	return S ? [S] : [];
}
function collectWorkspaceStatusDragIds(e) {
	let x = [];
	for (let S of e) if (!(typeof S != "string" || S.length === 0)) {
		if (x.length >= 512) return null;
		x.push(S);
	}
	return x;
}
function hasWorkspaceDragData(e) {
	let x = Array.from(e.types);
	return hasBoundedWorkspaceStatusDragPayload(e, x, "application/x-orca-worktree-ids") || hasBoundedWorkspaceStatusDragPayload(e, x, "application/x-orca-worktree-id") || hasBoundedWorkspaceStatusDragPayload(e, x, "text/plain");
}
function readWorkspaceStatusDragPayload(e, x) {
	let S = e.getData(x);
	return S ? S.length > 16384 || measureClipboardTextByteLength(S, { stopAfterBytes: 16384 }).exceededLimit ? { status: "too-large" } : {
		status: "ok",
		value: S
	} : { status: "empty" };
}
function hasBoundedWorkspaceStatusDragPayload(e, x, S) {
	return x.includes(S) && readWorkspaceStatusDragPayload(e, S).status === "ok";
}
const getWorkspaceStatusColorOptions = createLocalizedCatalog(() => [
	{
		id: "neutral",
		label: translate("auto.components.sidebar.workspace.status.52e3c6e2a4", "Neutral"),
		tone: "text-muted-foreground",
		swatch: "bg-muted-foreground",
		border: "border-t-muted-foreground/45",
		laneTint: "bg-background/55"
	},
	{
		id: "blue",
		label: translate("auto.components.sidebar.workspace.status.fc3b92756c", "Blue"),
		tone: "text-blue-600 dark:text-blue-300",
		swatch: "bg-blue-500",
		border: "border-t-blue-500/70",
		laneTint: "bg-blue-500/[0.04]"
	},
	{
		id: "sky",
		label: translate("auto.components.sidebar.workspace.status.6437a8c253", "Sky"),
		tone: "text-sky-600 dark:text-sky-300",
		swatch: "bg-sky-500",
		border: "border-t-sky-500/70",
		laneTint: "bg-sky-500/[0.04]"
	},
	{
		id: "violet",
		label: translate("auto.components.sidebar.workspace.status.1b81da243a", "Violet"),
		tone: "text-violet-600 dark:text-violet-300",
		swatch: "bg-violet-500",
		border: "border-t-violet-500/70",
		laneTint: "bg-violet-500/[0.04]"
	},
	{
		id: "amber",
		label: translate("auto.components.sidebar.workspace.status.7cebab6d4a", "Amber"),
		tone: "text-amber-700 dark:text-amber-200",
		swatch: "bg-amber-500",
		border: "border-t-amber-500/70",
		laneTint: "bg-amber-500/[0.04]"
	},
	{
		id: "emerald",
		label: translate("auto.components.sidebar.workspace.status.ddf25b6262", "Emerald"),
		tone: "text-emerald-700 dark:text-emerald-200",
		swatch: "bg-emerald-500",
		border: "border-t-emerald-500/70",
		laneTint: "bg-emerald-500/[0.04]"
	},
	{
		id: "rose",
		label: translate("auto.components.sidebar.workspace.status.7adb43ecf0", "Rose"),
		tone: "text-rose-600 dark:text-rose-300",
		swatch: "bg-rose-500",
		border: "border-t-rose-500/70",
		laneTint: "bg-rose-500/[0.04]"
	},
	{
		id: "zinc",
		label: translate("auto.components.sidebar.workspace.status.caabd5ca85", "Zinc"),
		tone: "text-zinc-600 dark:text-zinc-300",
		swatch: "bg-zinc-500",
		border: "border-t-zinc-500/70",
		laneTint: "bg-zinc-500/[0.04]"
	},
	{
		id: "conductor-done",
		label: translate("auto.components.sidebar.workspace.status.895f381714", "Conductor Done"),
		tone: "text-[#c7a594]",
		swatch: "bg-[#c7a594]",
		border: "border-t-[#c7a594]/70",
		laneTint: "bg-[#c7a594]/[0.04]"
	},
	{
		id: "conductor-review",
		label: translate("auto.components.sidebar.workspace.status.caebe3c10f", "Conductor Review"),
		tone: "text-[#16a34a]",
		swatch: "bg-[#16a34a]",
		border: "border-t-[#16a34a]/70",
		laneTint: "bg-[#16a34a]/[0.04]"
	},
	{
		id: "conductor-progress",
		label: translate("auto.components.sidebar.workspace.status.1a9383112b", "Conductor Progress"),
		tone: "text-[#d4a300]",
		swatch: "bg-[#d4a300]",
		border: "border-t-[#d4a300]/70",
		laneTint: "bg-[#d4a300]/[0.04]"
	}
]);
function getFallbackColorOption() {
	return getWorkspaceStatusColorOptions()[0] ?? {
		id: "neutral",
		label: translate("auto.components.sidebar.workspace.status.52e3c6e2a4", "Neutral"),
		tone: "text-muted-foreground",
		swatch: "bg-muted-foreground",
		border: "border-t-muted-foreground/45",
		laneTint: "bg-background/55"
	};
}
function getFallbackIconOption() {
	return getWorkspaceStatusIconOptions()[1] ?? {
		id: "circle-dot",
		label: translate("auto.components.sidebar.workspace.status.a702bc08d4", "Dot"),
		icon: CircleDot
	};
}
var DEFAULT_STATUS_VISUALS = {
	todo: {
		color: "neutral",
		icon: "circle"
	},
	"in-progress": {
		color: "conductor-progress",
		icon: "conductor-progress"
	},
	"in-review": {
		color: "conductor-review",
		icon: "conductor-review"
	},
	completed: {
		color: "conductor-done",
		icon: "conductor-done"
	}
};
function getWorkspaceStatusVisualMeta(e) {
	let x = typeof e == "string" ? e : e.id, S = typeof e == "string" ? DEFAULT_STATUS_VISUALS[e] : e, C = S?.color ?? DEFAULT_STATUS_VISUALS[x]?.color, w = S?.icon ?? DEFAULT_STATUS_VISUALS[x]?.icon, T = getWorkspaceStatusColorOptions().find((e) => e.id === C) ?? getWorkspaceStatusColorOptions().find((e) => e.id === "neutral") ?? getFallbackColorOption(), E = getWorkspaceStatusIconOptions(), D = E.find((e) => e.id === w) ?? E.find((e) => e.id === "circle-dot") ?? getFallbackIconOption();
	return {
		tone: T.tone,
		swatch: T.swatch,
		border: T.border,
		laneTint: T.laneTint,
		icon: D.icon
	};
}
function getHostContextLabel(e, x = {}) {
	return x.hostLabelById?.get(e)?.trim() || (parseExecutionHostId(e)?.kind === "local" ? x.hostPlatform === null ? "This computer" : x.hostPlatform === void 0 ? getExecutionHostLabel(e) : getLocalExecutionHostLabel(x.hostPlatform) : getExecutionHostLabel(e));
}
function getMixedHostContextLabels$1(e, x) {
	let S, C = !1;
	for (let w of e) {
		let e = x.getHostId(w);
		if (S === void 0) {
			S = e;
			continue;
		}
		if (e !== S) {
			C = !0;
			break;
		}
	}
	if (!C) return;
	let w = /* @__PURE__ */ new Map();
	for (let S of e) w.set(x.getIdentity(S), getHostContextLabel(x.getHostId(S), x.sources));
	return w;
}
var projectGroupingIndexCache = /* @__PURE__ */ new WeakMap();
function isDistinctUserCheckout(e) {
	return e.setupMethod !== "provisioned" && e.kind !== "folder";
}
function getProjectSetupSurfaceKey(e) {
	return `${e.projectId}::${e.hostId}::${getExecutionSurface(e)}::${getPathSurface(e)}`;
}
function getExecutionSurface(e) {
	let x = e.connectionId?.trim();
	return x ? toSshExecutionHostId(x) : e.executionHostId?.trim() || e.hostId;
}
function getCheckoutIdentity(e) {
	return normalizeRuntimePathForComparison(e.path.trim()) || e.repoId || e.id;
}
function getPathSurface(e) {
	let x = parseWslUncPath(e.path);
	return x ? `wsl:${x.distro.toLowerCase()}` : isWindowsAbsolutePathLike(e.path) ? "windows-host" : "default";
}
function buildProjectGroupingIndex(e) {
	if (!e) return null;
	let x = projectGroupingIndexCache.get(e);
	if (x !== void 0) return x;
	let S = e.projects ?? [], C = e.projectHostSetups ?? [];
	if (S.length === 0 || C.length === 0) return projectGroupingIndexCache.set(e, null), null;
	let w = /* @__PURE__ */ new Map();
	for (let e of C) {
		if (!isDistinctUserCheckout(e)) continue;
		let x = getProjectSetupSurfaceKey(e), S = w.get(x);
		S ? S.add(getCheckoutIdentity(e)) : w.set(x, new Set([getCheckoutIdentity(e)]));
	}
	let T = /* @__PURE__ */ new Set();
	for (let [e, x] of w) x.size > 1 && T.add(e);
	let E = {
		projectById: new Map(S.map((e) => [e.id, e])),
		setupByRepoId: new Map(C.map((e) => [e.repoId, e])),
		surfaceKeysRequiringSetupGroups: T
	};
	return projectGroupingIndexCache.set(e, E), E;
}
function getProjectGroupingForRepo(e, x, S) {
	let C = x.get(e), w = S?.setupByRepoId.get(e), T = w ? S?.projectById.get(w.projectId) : void 0;
	return !w || !T ? {
		key: `repo:${e}`,
		label: C?.displayName ?? "Unknown",
		repo: C
	} : S?.surfaceKeysRequiringSetupGroups.has(getProjectSetupSurfaceKey(w)) && isDistinctUserCheckout(w) ? {
		key: `project:${T.id}::setup:${e}`,
		label: C?.displayName ?? w.displayName,
		repo: C,
		projectId: T.id
	} : {
		key: `project:${T.id}`,
		label: T.displayName,
		repo: C,
		projectId: T.id
	};
}
function getProjectHeaderRevealTarget(e, x, S) {
	return getProjectGroupingForRepo(e, x, buildProjectGroupingIndex(S));
}
function addRepoIdToGroup(e, x) {
	e.repoIds.add(x);
}
function getFolderWorkspaceHostId(e, x, S) {
	let C = e.connectionId ?? x.connectionId;
	return C ? toSshExecutionHostId(C) : S;
}
function getRepoHostId$1(e, x) {
	let S = x.get(e);
	return S ? getRepoExecutionHostId(S) : null;
}
function getRepoHostLabel(e, x, S, C) {
	let w = S?.setupByRepoId.get(e);
	if (w) return getHostContextLabel(w.hostId, { hostLabelById: C });
	let T = x.get(e);
	return T ? getHostContextLabel(getRepoExecutionHostId(T), { hostLabelById: C }) : null;
}
function getMixedHostContextLabels(e, x, S, C) {
	let w = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set();
	for (let E of e.repoIds) {
		let e = getRepoHostLabel(E, x, S, C);
		if (!e) continue;
		w.set(E, e);
		let D = S?.setupByRepoId.get(E)?.hostId ?? getRepoHostId$1(E, x);
		D && T.add(D);
	}
	return T.size > 1 ? w : void 0;
}
function getNoticeHostContextLabels(e, x, S, C, w) {
	let T = new Set(e);
	if (T.size === 0) return;
	let E = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
	for (let e of x) {
		let x = getRepoHostLabel(e, S, C, w);
		if (!x) continue;
		let k = getProjectGroupingForRepo(e, S, C).projectId ?? e, A = C?.setupByRepoId.get(e)?.hostId ?? getRepoHostId$1(e, S);
		if (A) {
			let e = E.get(k) ?? /* @__PURE__ */ new Set();
			e.add(A), E.set(k, e);
		}
		T.has(e) && A && (D.set(e, {
			label: x,
			hostId: A
		}), O.set(e, k));
	}
	let k = /* @__PURE__ */ new Map();
	for (let [e, x] of D) {
		let S = O.get(e);
		S && (E.get(S)?.size ?? 0) > 1 && k.set(e, x);
	}
	return k.size > 0 ? k : void 0;
}
function getMixedWorktreeHostContextLabels(e, x, S, C) {
	return getMixedHostContextLabels$1(e, {
		getHostId: (e) => getWorktreeExecutionHostId(e, x.get(e.repoId), C),
		getIdentity: getWorktreeHostIdentity,
		sources: { hostLabelById: S }
	});
}
function getHostWorktreeCounts(e, x, S) {
	if (e.length === 0) return;
	let C = getHostWorktreeIds(e, x, S);
	if (!C) return;
	let w = /* @__PURE__ */ new Map();
	for (let [e, x] of C) w.set(e, x.length);
	return w;
}
function getHostWorktreeIds(e, x, S) {
	if (e.length === 0) return;
	let C = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set();
	for (let T of e) {
		let e = getWorktreeHostIdentity(T);
		if (w.has(e)) continue;
		w.add(e);
		let E = getWorktreeExecutionHostId(T, x.get(T.repoId), S), D = C.get(E) ?? [];
		D.push(T.id), C.set(E, D);
	}
	return C;
}
function getLaneHostWorktreeCounts(e, x, S, C) {
	if (e.length === 0 && x.length === 0) return;
	let w = getHostWorktreeCounts(e, S, C) ?? /* @__PURE__ */ new Map();
	for (let { folderWorkspace: e, projectGroup: S } of x) {
		let x = getFolderWorkspaceHostId(e, S, C);
		w.set(x, (w.get(x) ?? 0) + 1);
	}
	return w;
}
function getLaneHostWorktreeIds(e, x, S, C) {
	if (e.length === 0 && x.length === 0) return;
	let w = getHostWorktreeIds(e, S, C) ?? /* @__PURE__ */ new Map();
	for (let { folderWorkspace: e, projectGroup: S } of x) {
		let x = getFolderWorkspaceHostId(e, S, C);
		w.has(x) || w.set(x, []);
	}
	return w;
}
function buildPendingCreationRow(e, x) {
	return {
		type: "pending-creation",
		key: `pending:${e.creationId}`,
		creationId: e.creationId,
		repo: x.get(e.repoId)
	};
}
function buildImportedWorktreesCardRow(e, x, S) {
	return {
		type: "imported-worktrees-card",
		key: `imported-worktrees-card:${x}:${e.repo.id}`,
		repo: e.repo,
		hiddenWorktrees: e.hiddenWorktrees,
		placement: x,
		...S ? {
			hostContextLabel: S.label,
			hostContextHostId: S.hostId
		} : {}
	};
}
function buildNewExternalWorktreesInboxRow(e, x) {
	return {
		type: "new-external-worktrees-inbox",
		key: `new-external-worktrees-inbox:${e.repo.id}`,
		repo: e.repo,
		inboxWorktrees: e.inboxWorktrees,
		...x ? {
			hostContextLabel: x.label,
			hostContextHostId: x.hostId
		} : {}
	};
}
function buildWorktreeRow(e, x, S) {
	return {
		type: "item",
		rowKey: S.rowKey,
		sectionKey: S.sectionKey,
		worktree: e,
		repo: x.get(e.repoId),
		depth: S.depth,
		groupDepth: S.groupDepth,
		lineageTrail: S.lineageTrail,
		isLastLineageChild: S.isLastLineageChild,
		lineageChildCount: S.lineageChildCount,
		...S.hostContextLabel ? { hostContextLabel: S.hostContextLabel } : {},
		...S.lineageChildCount > 0 ? { lineageGroupKey: getWorktreeLineageGroupKey(e) } : {},
		...S.lineageChildCount > 0 ? { lineageCollapsed: S.lineageCollapsed } : {}
	};
}
function appendWorktreeRows(e, x, S, C, w, T) {
	let { nestLineage: E, collapsedGroups: D, groupDepth: O, sectionKey: k, hostContextLabelByRepoId: A, hostContextLabelByWorktreeIdentity: j, cyclicLineageIds: M } = T;
	if (!E) {
		for (let C of x) e.push(buildWorktreeRow(C, S, {
			rowKey: `${k}:${getWorktreeHostIdentity(C)}`,
			sectionKey: k,
			depth: 0,
			groupDepth: O,
			lineageTrail: [],
			isLastLineageChild: !1,
			lineageChildCount: 0,
			lineageCollapsed: !1,
			hostContextLabel: j?.get(getWorktreeHostIdentity(C)) ?? A?.get(C.repoId)
		}));
		return;
	}
	let N = new Map(x.map((e) => [getWorktreeHostIdentity(e), e])), P = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Set();
	for (let e of x) {
		let x = getProjectedWorktreeLineage(e, C), S = e.lineage, w = x?.worktreeInstanceId === e.instanceId ? x : S;
		if (!w || M.has(e.id)) continue;
		let T = getWorktreeHostIdentity({
			id: w.parentWorktreeId,
			hostId: e.hostId
		}), E = N.get(T);
		if (!E || !isValidResolvedWorktreeLineageEdge(e, E, w)) continue;
		let D = getWorktreeHostIdentity(e);
		F.add(D);
		let O = P.get(T) ?? [];
		O.push(e), P.set(T, O);
	}
	let I = /* @__PURE__ */ new Set(), L = [], R = () => {
		for (; L.length > 0;) {
			let x = L.pop();
			if (!x || I.has(getWorktreeHostIdentity(x.worktree))) continue;
			let { worktree: C, depth: w, lineageTrail: T, isLastChild: E } = x, M = getWorktreeHostIdentity(C), N = P.get(M) ?? [], F = getWorktreeLineageGroupKey(C), R = D.has(F);
			if (I.add(M), e.push(buildWorktreeRow(C, S, {
				rowKey: `${k}:${M}`,
				sectionKey: k,
				depth: w,
				groupDepth: O,
				lineageTrail: T,
				isLastLineageChild: E,
				lineageChildCount: N.length,
				lineageCollapsed: R,
				hostContextLabel: j?.get(M) ?? A?.get(C.repoId)
			})), !R) for (let e = N.length - 1; e >= 0; --e) L.push({
				worktree: N[e],
				depth: w + 1,
				lineageTrail: [...T, e < N.length - 1],
				isLastChild: e === N.length - 1
			});
		}
	}, z = (e, x, S, C) => {
		I.has(getWorktreeHostIdentity(e)) || (L.push({
			worktree: e,
			depth: x,
			lineageTrail: S,
			isLastChild: C
		}), R());
	}, B = x.filter((e) => !F.has(getWorktreeHostIdentity(e)));
	for (let [e, x] of B.entries()) z(x, 0, [], e === B.length - 1);
	if (B.length === 0) for (let e of x) I.has(getWorktreeHostIdentity(e)) || z(e, 0, [], !0);
}
function buildFolderWorkspaceRow(e, x) {
	return {
		type: "folder-workspace",
		key: `folder-workspace:${e.folderWorkspace.id}`,
		folderWorkspace: e.folderWorkspace,
		projectGroup: e.projectGroup,
		depth: 0,
		groupDepth: x
	};
}
function getRepoDisplayLabelKey(e) {
	return `${getRepoExecutionHostId(e)}::${e.path}`;
}
function normalizePathSegments(e) {
	return e.replace(/\\/g, "/").replace(/\/+$/g, "").split("/").filter(Boolean);
}
function labelForDepth(e, x) {
	let S = normalizePathSegments(e.path), C = S.slice(Math.max(0, S.length - x));
	return C.length === 0 ? e.displayName : (C[C.length - 1] = e.displayName, C.join("/"));
}
function hasDuplicateLabels(e) {
	return new Set(e).size !== e.length;
}
function getRepoDisplayLabelsByPath(e) {
	let x = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
	for (let C of e) {
		let e = C.displayName || C.path;
		x.set(getRepoDisplayLabelKey(C), e);
		let w = S.get(e) ?? [];
		w.push({
			...C,
			displayName: e
		}), S.set(e, w);
	}
	for (let e of S.values()) {
		if (e.length < 2) continue;
		let S = Math.max(...e.map((e) => normalizePathSegments(e.path).length)), C = 1, w = e.map((e) => labelForDepth(e, C));
		for (; C < S && hasDuplicateLabels(w);) C += 1, w = e.map((e) => labelForDepth(e, C));
		e.forEach((e, S) => {
			x.set(getRepoDisplayLabelKey(e), w[S] ?? e.displayName);
		});
	}
	return x;
}
function getGroupKeyForWorktree(e, x, S, C, w = cloneDefaultWorkspaceStatuses(), T, E) {
	return e === "none" ? "all" : e === "workspace-status" ? getWorkspaceStatusGroupKey(getWorkspaceStatus(x, w)) : e === "repo" ? getProjectGroupingForRepo(x.repoId, S, buildProjectGroupingIndex(E)).key : `pr:${getPRGroupKey(x, S, C, T)}`;
}
function getGroupKeysForWorktree(e, x, S, C, w = cloneDefaultWorkspaceStatuses(), T, E = [], D) {
	let O = getGroupKeyForWorktree(e, x, S, C, w, T, D);
	if (!O) return [];
	if (e !== "repo") return [O];
	let k = S.get(x.repoId), A = [], j = new Map(E.map((e) => [e.id, e])), M = /* @__PURE__ */ new Set(), N = k?.projectGroupId ?? null;
	for (; N && !M.has(N);) {
		let e = j.get(N);
		if (!e) break;
		M.add(N), A.unshift(N);
		let x = e.parentGroupId ?? null;
		N = x && j.has(x) ? x : null;
	}
	return [...A.map((e) => getProjectGroupHeaderKey(e)), O];
}
function getRenderedNaturalAnchorRepoIds({ groupBy: e, worktrees: x, repoMap: S, prCache: C, collapsedGroups: w, workspaceStatuses: T, settings: E, projectGrouping: D }) {
	let O = /* @__PURE__ */ new Set();
	if (e === "none") {
		if (!w.has("all")) for (let e of x) O.add(e.repoId);
		return O;
	}
	if (e === "repo") {
		for (let e of x) O.add(e.repoId);
		return O;
	}
	for (let k of x) {
		let x = getGroupKeyForWorktree(e, k, S, C, T, E, D);
		x && !w.has(x) && O.add(k.repoId);
	}
	return O;
}
function orderMainWorktreeFirst(e) {
	let x = e.filter((e) => e.isMainWorktree);
	return x.length === 0 ? e : [...x, ...e.filter((e) => !e.isMainWorktree)];
}
function withRepoSectionDisplayLabels(e) {
	let x = e.flatMap(([, e]) => e.repo ? [{
		...e.repo,
		displayName: e.label
	}] : []);
	if (x.length === 0) return [...e];
	let S = getRepoDisplayLabelsByPath(x);
	return e.map(([e, x]) => [e, x.repo ? {
		...x,
		label: S.get(getRepoDisplayLabelKey(x.repo)) ?? x.label
	} : x]);
}
function recentRankForEntry(e) {
	let x = -Infinity;
	for (let S of e[1].items) S.lastActivityAt > x && (x = S.lastActivityAt);
	if (x !== -Infinity) return {
		hasActivity: !0,
		ts: x
	};
	let S = e[1].repo?.addedAt;
	return {
		hasActivity: !1,
		ts: typeof S == "number" ? S : -Infinity
	};
}
function compareRecentRank(e, x) {
	return e.hasActivity === x.hasActivity ? x.ts - e.ts : e.hasActivity ? -1 : 1;
}
function manualRankForEntry(e, x) {
	let S = e[0], C = e[1].repoIds.size > 0 ? [...e[1].repoIds] : [S.startsWith("repo:") ? S.slice(5) : S], w = Infinity;
	for (let e of C) {
		let S = x?.get(e);
		S !== void 0 && S < w && (w = S);
	}
	return w;
}
function getManualOrderAnchorRepo(e, x, S) {
	let C = e.repo, w = C ? S?.get(C.id) ?? Infinity : void 0;
	for (let T of e.repoIds) {
		let e = x.get(T);
		if (!e) continue;
		let E = S?.get(T) ?? Infinity;
		(!C || E < (w ?? Infinity)) && (C = e, w = E);
	}
	return C;
}
function sortProjectEntries(e, x, S) {
	return x === "recent" ? [...e].sort((e, x) => {
		let C = compareRecentRank(recentRankForEntry(e), recentRankForEntry(x));
		if (C !== 0) return C;
		let w = manualRankForEntry(e, S), T = manualRankForEntry(x, S);
		return w === T ? e[1].label.localeCompare(x[1].label) : w - T;
	}) : S ? [...e].sort((e, x) => {
		let C = manualRankForEntry(e, S), w = manualRankForEntry(x, S);
		return C === w ? e[1].label.localeCompare(x[1].label) : C - w;
	}) : e;
}
function appendOrderedGroups(e, x, S = 0) {
	let { result: C, groupBy: w, collapsedGroups: T, workspaceStatuses: E, repoMap: D, defaultHostId: O, hostLabelById: k, projectIndex: A, importedWorktreesByRepo: j, newExternalWorktreesInboxByRepo: M, pendingByRepo: N, mixedWorktreeHostContextLabels: P, lineageById: F, worktreeMap: I, nestLineage: L, cyclicLineageIds: R } = e;
	for (let [z, B] of x) {
		let x = T.has(z), V = B.repo, H = B.folderWorkspaces ?? [], U = w === "repo" ? {
			type: "header",
			key: z,
			label: B.label,
			count: B.items.length,
			tone: PROJECT_GROUP_META.tone,
			icon: PROJECT_GROUP_META.icon,
			repo: V,
			projectGroupDepth: S
		} : w === "workspace-status" ? (() => {
			let e = getWorkspaceStatusFromGroupKey(z, E) ?? E[0]?.id ?? "in-progress", x = E.find((x) => x.id === e), S = getWorkspaceStatusVisualMeta(x ?? e);
			return {
				type: "header",
				key: z,
				label: x?.label ?? e,
				count: B.items.length + H.length,
				tone: S.tone,
				icon: S.icon,
				hostWorktreeCounts: getLaneHostWorktreeCounts(B.items, H, D, O),
				hostWorktreeIds: getLaneHostWorktreeIds(B.items, H, D, O),
				worktreeIds: B.items.map((e) => e.id)
			};
		})() : (() => {
			let e = PR_GROUP_META[z.replace(/^pr:/, "")];
			return {
				type: "header",
				key: z,
				label: e.label,
				count: B.items.length + H.length,
				tone: e.tone,
				icon: e.icon,
				hostWorktreeCounts: getLaneHostWorktreeCounts(B.items, H, D, O),
				hostWorktreeIds: getLaneHostWorktreeIds(B.items, H, D, O),
				worktreeIds: B.items.map((e) => e.id)
			};
		})();
		if (C.push(U), !x) {
			if (w === "repo") {
				let x = B.repoIds.size > 0 ? [...B.repoIds] : V ? [V.id] : z.startsWith("repo:") ? [z.slice(5)] : [];
				for (let S of x) {
					let x = j.get(S);
					x && C.push(buildImportedWorktreesCardRow(x, "repo-group", e.noticeHostContextLabelByRepoId?.get(S)));
				}
				for (let S of x) {
					let x = M.get(S);
					x && C.push(buildNewExternalWorktreesInboxRow(x, e.noticeHostContextLabelByRepoId?.get(S)));
				}
				for (let e of x) for (let x of N.get(e) ?? []) C.push(buildPendingCreationRow(x, D));
			}
			let x = w === "repo" ? orderMainWorktreeFirst(B.items) : B.items, E = w === "repo" ? getMixedHostContextLabels(B, D, A, k) : void 0;
			appendWorktreeRows(C, x, D, F, I, {
				nestLineage: L,
				collapsedGroups: T,
				groupDepth: S,
				sectionKey: z,
				hostContextLabelByRepoId: E,
				hostContextLabelByWorktreeIdentity: w === "repo" && E ? void 0 : P,
				cyclicLineageIds: R
			});
			for (let e of H) C.push(buildFolderWorkspaceRow(e, S));
		}
	}
}
function getRenderableFolderWorkspaces(e, x) {
	let S = new Map(x.map((e) => [e.id, e])), C = [];
	for (let x of e) {
		let e = S.get(x.projectGroupId);
		e?.parentPath && C.push({
			folderWorkspace: x,
			projectGroup: e
		});
	}
	return C;
}
function getFolderWorkspaceLaneKey(e, x, S) {
	switch (x) {
		case "workspace-status": return getWorkspaceStatusGroupKey(getWorkspaceStatus(e.folderWorkspace, S));
		case "pr-status": return getPRLaneKey("in-progress");
		case "none": return "all";
	}
}
function compareFolderWorkspacesForDisplay(e, x) {
	let S = e.manualOrder ?? e.sortOrder;
	return (x.manualOrder ?? x.sortOrder) - S || e.name.localeCompare(x.name);
}
function appendProjectGroupSections(e, x) {
	let { orderedGroups: S, projectGroups: C, folderWorkspaces: w, projectOrderBy: T, repoOrder: E } = x, { result: D, collapsedGroups: O } = e, k = /* @__PURE__ */ new Map();
	for (let e of S) {
		let x = e[1].repo?.projectGroupId ?? null, S = k.get(x) ?? [];
		S.push(e), k.set(x, S);
	}
	let A = (e) => T === "recent" ? [...e].sort((e, x) => compareRecentRank(recentRankForEntry(e), recentRankForEntry(x))) : [...e].sort((e, x) => getEffectiveProjectGroupManualRank(e[1].repo, E) - getEffectiveProjectGroupManualRank(x[1].repo, E)), j = new Map(C.map((e) => [e.id, e])), M = /* @__PURE__ */ new Map();
	for (let e of w) {
		let x = e.folderWorkspace.projectGroupId, S = M.get(x) ?? [];
		S.push(e), M.set(x, S);
	}
	for (let e of M.values()) e.sort((e, x) => compareFolderWorkspacesForDisplay(e.folderWorkspace, x.folderWorkspace));
	let N = /* @__PURE__ */ new Map();
	for (let e of C) {
		let x = e.parentGroupId && j.has(e.parentGroupId) ? e.parentGroupId : null, S = N.get(x) ?? [];
		S.push(e), N.set(x, S);
	}
	for (let e of N.values()) e.sort((e, x) => e.tabOrder - x.tabOrder || e.name.localeCompare(x.name));
	let P = (e) => {
		let x = k.get(e)?.length ?? 0, S = M.get(e)?.length ?? 0;
		return (N.get(e) ?? []).reduce((e, x) => e + P(x.id), x + S);
	}, F = (x, S) => {
		let C = A(k.get(x.id) ?? []), w = N.get(x.id) ?? [], T = getProjectGroupHeaderKey(x.id);
		if (D.push({
			type: "header",
			key: T,
			label: x.name,
			count: P(x.id),
			tone: PROJECT_GROUP_META.tone,
			icon: PROJECT_GROUP_META.icon,
			projectGroup: x,
			projectGroupDepth: S
		}), !O.has(T)) {
			for (let e of M.get(x.id) ?? []) D.push(buildFolderWorkspaceRow(e, S + 1));
			appendOrderedGroups(e, withRepoSectionDisplayLabels(C), S + 1);
			for (let e of w) F(e, S + 1);
		}
		k.delete(x.id);
	};
	for (let e of N.get(null) ?? []) F(e, 0);
	let L = [...k.get(null) ?? []];
	for (let [e, x] of k) e === null || j.has(e) || L.push(...x);
	appendOrderedGroups(e, withRepoSectionDisplayLabels(A(L)), 0);
}
function getPinnedSectionWorktrees(e, x, S) {
	let C = new Set(e.map(getWorktreeHostIdentity)), w = getProjectedWorktreeLineageChildrenByParentId(x, S), T = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set(), D = e.filter((e) => e.isPinned).map(({ id: e, hostId: x }) => ({
		id: e,
		hostId: x
	}));
	for (; D.length > 0;) {
		let e = D.pop();
		if (!e) continue;
		let x = getWorktreeHostIdentity(e);
		if (!E.has(x)) {
			E.add(x), C.has(x) && T.add(x);
			for (let x of w.get(e.id) ?? []) D.push({
				id: x.id,
				hostId: e.hostId
			});
		}
	}
	return e.filter((e) => T.has(getWorktreeHostIdentity(e)));
}
function isPinnedSectionWorktree(e, x, S, C) {
	if (e.isPinned) return !0;
	let w = getWorktreeHostIdentity(e);
	return getPinnedSectionWorktrees(x, S, C).some((e) => getWorktreeHostIdentity(e) === w);
}
function emitPinnedGroup(e, x, S, C, w, T, E, D, O, k, A, j, M, N) {
	if (e.length === 0) return;
	let P = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), I = [], L = /* @__PURE__ */ new Set();
	for (let C of e) {
		let e = getWorktreeExecutionHostId(C, x.get(C.repoId), S);
		P.set(e, (P.get(e) ?? 0) + 1);
		let w = F.get(e) ?? [];
		w.push(C.id), F.set(e, w), L.has(C.repoId) || (I.push(C.repoId), L.add(C.repoId));
	}
	if (D.push({
		type: "header",
		key: PINNED_GROUP_KEY,
		label: PINNED_GROUP_META.label,
		count: e.length,
		tone: PINNED_GROUP_META.tone,
		icon: PINNED_GROUP_META.icon,
		hostWorktreeCounts: P,
		hostWorktreeIds: F,
		worktreeIds: e.map((e) => e.id)
	}), C.has("pinned")) {
		for (let e of I) {
			let x = T.get(e);
			E && x && !w.has(e) && D.push(buildImportedWorktreesCardRow(x, "pinned-fallback", M?.get(e)));
		}
		return;
	}
	let R = D.length;
	if (appendWorktreeRows(D, e, x, O, k, {
		nestLineage: A,
		collapsedGroups: C,
		groupDepth: 0,
		sectionKey: PINNED_GROUP_KEY,
		hostContextLabelByWorktreeIdentity: N,
		cyclicLineageIds: j
	}), !E) return;
	let z = /* @__PURE__ */ new Map();
	for (let e = R; e < D.length; e++) {
		let x = D[e];
		x?.type === "item" && z.set(x.worktree.repoId, e);
	}
	let B = [...z.entries()].sort((e, x) => x[1] - e[1]);
	for (let [e, x] of B) {
		let S = T.get(e);
		S && !w.has(e) && D.splice(x + 1, 0, buildImportedWorktreesCardRow(S, "pinned-fallback", M?.get(e)));
	}
}
function getPinnedWorktreeDisplayPolicy(e) {
	return e?.showPinnedWorktreesInGroups === !0 ? "duplicate-in-groups" : "single-location";
}
function getLaneLabelForKey(e, x, S) {
	if (x === "workspace-status") {
		let x = getWorkspaceStatusFromGroupKey(e, S);
		return S.find((e) => e.id === x)?.label ?? x ?? e;
	}
	return x === "pr-status" ? PR_GROUP_META[e.replace(/^pr:/, "")].label : e;
}
function buildOrderedGroups(e) {
	let { groupBy: x, naturalWorktrees: S, repoMap: C, prCache: w, settings: T, workspaceStatuses: E, projectIndex: D, placeholderRepoIds: O, importedWorktreesByRepo: k, newExternalWorktreesInboxByRepo: A, pendingByRepo: j, repoOrder: N, projectOrderBy: P, folderWorkspaces: F = [] } = e, I = /* @__PURE__ */ new Map();
	for (let e of S) {
		let S, O, k;
		if (x === "repo") {
			let x = getProjectGroupingForRepo(e.repoId, C, D);
			S = x.key, O = x.label, k = x.repo;
		} else if (x === "workspace-status") {
			let x = getWorkspaceStatus(e, E);
			S = getWorkspaceStatusGroupKey(x), O = E.find((e) => e.id === x)?.label ?? x;
		} else {
			let x = getPRGroupKey(e, C, w, T);
			S = getPRLaneKey(x), O = PR_GROUP_META[x].label;
		}
		I.has(S) || I.set(S, {
			label: O,
			items: [],
			repo: k,
			repoIds: /* @__PURE__ */ new Set()
		});
		let A = I.get(S);
		A.items.push(e), addRepoIdToGroup(A, e.repoId);
	}
	if (x !== "repo") {
		for (let e of F) {
			let S = getFolderWorkspaceLaneKey(e, x, E);
			I.has(S) || I.set(S, {
				label: getLaneLabelForKey(S, x, E),
				items: [],
				repo: void 0,
				repoIds: /* @__PURE__ */ new Set()
			});
			let C = I.get(S);
			C.folderWorkspaces ??= [], C.folderWorkspaces.push(e);
		}
		for (let e of I.values()) e.folderWorkspaces?.sort((e, x) => compareFolderWorkspacesForDisplay(e.folderWorkspace, x.folderWorkspace));
	}
	if (x === "repo") for (let e of O) {
		let x = getProjectGroupingForRepo(e, C, D);
		if (!x.repo) continue;
		let S = x.key;
		I.has(S) ? addRepoIdToGroup(I.get(S), e) : I.set(S, {
			label: x.label,
			items: [],
			repo: x.repo,
			repoIds: new Set([e])
		});
	}
	if (x === "repo") for (let [e, x] of k) {
		let S = getProjectGroupingForRepo(e, C, D), w = S.key;
		I.has(w) ? I.has(w) && addRepoIdToGroup(I.get(w), e) : I.set(w, {
			label: S.label,
			items: [],
			repo: S.repo ?? x.repo,
			repoIds: new Set([e])
		});
	}
	if (x === "repo") for (let [e, x] of A) {
		let S = getProjectGroupingForRepo(e, C, D), w = S.key;
		I.has(w) ? I.has(w) && addRepoIdToGroup(I.get(w), e) : I.set(w, {
			label: S.label,
			items: [],
			repo: S.repo ?? x.repo,
			repoIds: new Set([e])
		});
	}
	if (x === "repo") for (let e of j.keys()) {
		let x = getProjectGroupingForRepo(e, C, D), S = x.key;
		I.has(S) ? addRepoIdToGroup(I.get(S), e) : I.set(S, {
			label: x.label,
			items: [],
			repo: x.repo,
			repoIds: new Set([e])
		});
	}
	let L = [];
	if (x === "pr-status") for (let e of PR_GROUP_ORDER) {
		let x = `pr:${e}`, S = I.get(x);
		S && L.push([x, S]);
	}
	else if (x === "workspace-status") for (let e of E) {
		let x = getWorkspaceStatusGroupKey(e.id), S = I.get(x);
		S && L.push([x, S]);
	}
	else {
		for (let e of I.values()) e.repo = getManualOrderAnchorRepo(e, C, N);
		let e = sortProjectEntries(Array.from(I.entries()), P, N);
		for (let x of e) L.push(x);
	}
	return L;
}
function buildRows(e, x, S, C, w, T, E = cloneDefaultWorkspaceStatuses(), D = "manual", O = {}, k = new Map(x.map((e) => [e.id, e])), A = !1, j, M = [], N = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), I = [], L, R = [], z, B = LOCAL_EXECUTION_HOST_ID, V = getPinnedWorktreeDisplayPolicy(j)) {
	let H = [], U = buildProjectGroupingIndex(L), W = getRenderableFolderWorkspaces(R, M), G = A ? getCyclicProjectedWorktreeLineageIds(O, k) : /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Map();
	for (let e of I) {
		let x = K.get(e.repoId) ?? [];
		x.push(e), K.set(e.repoId, x);
	}
	if (e !== "repo" && I.length > 0) for (let e of I) H.push(buildPendingCreationRow(e, S));
	let q = A ? getPinnedSectionWorktrees(x, O, k) : x.filter((e) => e.isPinned), J = new Set(q.map(getWorktreeHostIdentity)), Y = V === "duplicate-in-groups" ? x : x.filter((e) => !J.has(getWorktreeHostIdentity(e))), X = getMixedWorktreeHostContextLabels(x, S, z, B), Z = getNoticeHostContextLabels(new Set([...P.keys(), ...F.keys()]), S.keys(), S, U, z);
	if (emitPinnedGroup(q, S, B, w, getRenderedNaturalAnchorRepoIds({
		groupBy: e,
		worktrees: Y,
		repoMap: S,
		prCache: C,
		collapsedGroups: w,
		workspaceStatuses: E,
		settings: j,
		projectGrouping: L
	}), P, e !== "repo", H, O, k, A, G, Z, X), e === "none") {
		if ((Y.length > 0 || W.length > 0) && (H.push({
			type: "header",
			key: "all",
			label: ALL_GROUP_META.label,
			count: Y.length + W.length,
			tone: ALL_GROUP_META.tone,
			icon: ALL_GROUP_META.icon,
			hostWorktreeCounts: getLaneHostWorktreeCounts(Y, W, S, B),
			hostWorktreeIds: getLaneHostWorktreeIds(Y, W, S, B),
			worktreeIds: Y.map((e) => e.id)
		}), !w.has("all"))) {
			appendWorktreeRows(H, Y, S, O, k, {
				nestLineage: A,
				collapsedGroups: w,
				groupDepth: 0,
				sectionKey: "all",
				hostContextLabelByWorktreeIdentity: X,
				cyclicLineageIds: G
			});
			for (let e of [...W].sort((e, x) => compareFolderWorkspacesForDisplay(e.folderWorkspace, x.folderWorkspace))) H.push(buildFolderWorkspaceRow(e, 0));
		}
		return H;
	}
	let Q = buildOrderedGroups({
		groupBy: e,
		naturalWorktrees: Y,
		repoMap: S,
		prCache: C,
		settings: j,
		workspaceStatuses: E,
		projectIndex: U,
		placeholderRepoIds: N,
		importedWorktreesByRepo: P,
		newExternalWorktreesInboxByRepo: F,
		pendingByRepo: K,
		repoOrder: T,
		projectOrderBy: D,
		folderWorkspaces: W
	}), $ = {
		result: H,
		groupBy: e,
		collapsedGroups: w,
		workspaceStatuses: E,
		repoMap: S,
		defaultHostId: B,
		hostLabelById: z,
		projectIndex: U,
		importedWorktreesByRepo: P,
		newExternalWorktreesInboxByRepo: F,
		pendingByRepo: K,
		mixedWorktreeHostContextLabels: X,
		noticeHostContextLabelByRepoId: Z,
		lineageById: O,
		worktreeMap: k,
		nestLineage: A,
		cyclicLineageIds: G
	};
	return e !== "repo" || M.length === 0 ? (appendOrderedGroups($, e === "repo" ? withRepoSectionDisplayLabels(Q) : Q), H) : (appendProjectGroupSections($, {
		orderedGroups: Q,
		projectGroups: M,
		folderWorkspaces: W,
		projectOrderBy: D,
		repoOrder: T
	}), H);
}
function getRepoHostId(e, x) {
	return e?.connectionId || e?.executionHostId ? getRepoExecutionHostId(e) : x;
}
function getRowHostId(e, x) {
	switch (e.type) {
		case "item": return getWorktreeExecutionHostId(e.worktree, e.repo, x);
		case "pending-creation":
		case "imported-worktrees-card":
		case "new-external-worktrees-inbox": return getRepoHostId(e.repo, x);
		case "folder-workspace": return getFolderWorkspaceHostId(e.folderWorkspace, e.projectGroup, x);
		case "header": return e.repo ? getRepoHostId(e.repo, x) : null;
	}
}
function getFallbackHost(e) {
	let x = e === LOCAL_EXECUTION_HOST_ID;
	return {
		id: e,
		kind: x ? "local" : e.startsWith("ssh:") ? "ssh" : "runtime",
		label: x ? getLocalExecutionHostLabel() : e,
		detail: x ? "This computer" : "Host",
		health: x ? "local" : "available"
	};
}
function countWorkspaceRows(e) {
	let x = 0, S = /* @__PURE__ */ new Set(), C = null, w = !1, T = () => {
		if (C && !w) if (C.worktreeIds) {
			let e = new Set(C.worktreeIds);
			for (let e of C.worktreeIds) S.has(e) || (x += 1, S.add(e));
			x += Math.max(0, C.count - e.size);
		} else x += C.count;
		C = null, w = !1;
	};
	for (let E of e) {
		if (E.type === "header") {
			T(), C = E;
			continue;
		}
		if (E.type === "item") {
			S.has(E.worktree.id) || (x += 1, S.add(E.worktree.id)), w = C !== null;
			continue;
		}
		E.type === "folder-workspace" && (x += 1, w = C !== null);
	}
	return T(), x;
}
function localizePendingRowsForHost(e, x) {
	let S = [];
	for (let C of e) {
		if (!C.hostWorktreeCounts) {
			S.push(C);
			continue;
		}
		let e = C.hostWorktreeCounts.get(x);
		e !== void 0 && e > 0 && S.push({
			...C,
			count: e,
			hostId: x,
			worktreeIds: C.hostWorktreeIds?.get(x) ?? C.worktreeIds
		});
	}
	return S;
}
function getPendingRowsKey(e) {
	return e.map((e) => `${e.key}:${e.count}:${e.worktreeIds?.join(",") ?? ""}`).join("\0");
}
function addHostSectionRows(e) {
	let x = e.visibleWorkspaceHostIds ?? (e.workspaceHostScope === "all" ? null : [e.workspaceHostScope]);
	if (e.preferProjectGrouping && e.workspaceHostScope === "all" && !e.visibleWorkspaceHostIds || x && x.length <= 1 || e.hostOptions.length <= 1) return [...e.rows];
	let S = new Map(e.hostOptions.map((e) => [e.id, e])), C = /* @__PURE__ */ new Map(), w = [], T = [], E = !1, D = /* @__PURE__ */ new Map(), O = () => {
		if (!(T.length === 0 || E)) {
			if (!T.some((e) => e.hostWorktreeCounts)) {
				w.push(...T);
				return;
			}
			for (let e of T) for (let [x, S] of e.hostWorktreeCounts ?? []) {
				if (S <= 0) continue;
				let w = C.get(x) ?? [], T = e.hostWorktreeIds?.get(x);
				w.push({
					...e,
					count: S,
					hostId: x,
					worktreeIds: T ?? e.worktreeIds
				}), C.set(x, w);
			}
		}
	};
	for (let x of e.rows) {
		let S = getRowHostId(x, e.defaultHostId);
		if (S) {
			let e = C.get(S) ?? [];
			if (T.length > 0) {
				let x = localizePendingRowsForHost(T, S), C = getPendingRowsKey(x);
				x.length > 0 && D.get(S) !== C && (e.push(...x), D.set(S, C)), E ||= x.length > 0;
			}
			e.push(x), C.set(S, e);
			continue;
		}
		x.type === "header" ? (O(), T = [x], E = !1) : w.push(x);
	}
	O();
	let k = [];
	for (let x of e.hostOptions) C.has(x.id) && k.push(x.id);
	for (let e of C.keys()) S.has(e) || k.push(e);
	if (C.size <= 1) return [...e.rows];
	let A = [...w];
	for (let x of k) {
		let w = C.get(x);
		if (!w || w.length === 0) continue;
		let T = S.get(x) ?? getFallbackHost(x), E = e.forceCollapseHosts || (e.collapsedHostKeys?.has(`host:${T.id}`) ?? !1);
		A.push({
			type: "host-header",
			key: `host:${T.id}`,
			hostId: T.id,
			kind: T.kind,
			label: T.label,
			detail: T.detail,
			health: T.health,
			compatibility: T.compatibility,
			connectionStatus: T.connectionStatus,
			collapsed: E,
			count: countWorkspaceRows(w)
		}), E || A.push(...w);
	}
	return A;
}
function orderHostSectionOptions(e, x = []) {
	if (x.length === 0 || e.length <= 1) return [...e];
	let S = new Map(e.map((e) => [e.id, e])), C = [], w = /* @__PURE__ */ new Set();
	for (let e of x) {
		let x = S.get(e);
		!x || w.has(x.id) || (C.push(x), w.add(x.id));
	}
	for (let x of e) w.has(x.id) || C.push(x);
	return C;
}
function normalizeHostPart(e) {
	return e?.trim() || null;
}
function runtimeCompatibility(e) {
	return e ? evaluateRuntimeCompat({
		clientProtocolVersion: 3,
		minCompatibleServerProtocolVersion: 2,
		serverProtocolVersion: e.runtimeProtocolVersion ?? e.protocolVersion,
		serverMinCompatibleClientProtocolVersion: e.minCompatibleRuntimeClientVersion ?? e.minCompatibleMobileVersion
	}) : null;
}
function runtimeHealth(e, x, S) {
	return e ? x && x.kind === "blocked" ? "blocked" : "available" : S?.state === "ready" ? "available" : "disconnected";
}
function runtimeControlHealth(e) {
	switch (e?.state) {
		case "awaiting_authenticated":
		case "awaiting_ready":
		case "reconnecting": return "connecting";
		case "closed": return e.lastError ? "error" : "disconnected";
		case "ready": return null;
		case void 0: return null;
	}
}
function sshHealth(e) {
	switch (e?.status) {
		case "connected": return "available";
		case "connecting":
		case "deploying-relay":
		case "reconnecting": return "connecting";
		case "auth-failed":
		case "error":
		case "reconnection-failed": return "error";
		case "disconnected":
		case void 0: return "disconnected";
	}
}
function setHost(e, x) {
	let S = e.get(x.id);
	if (!S) {
		e.set(x.id, x);
		return;
	}
	S.health === "disconnected" && e.set(x.id, {
		...x,
		label: S.label,
		source: S.source ?? x.source
	});
}
function addRuntimeHost(e, x, S, C, w) {
	let T = toRuntimeExecutionHostId(x), E = w?.get(x), D = E?.status, O = E?.snapshot, k = D ?? O?.status, A = runtimeCompatibility(k), j = E?.remoteControl ?? D?.remoteControl;
	setHost(e, {
		id: T,
		kind: "runtime",
		label: S,
		detail: "Orca server",
		health: (O?.retired ? "disconnected" : O?.verification === "blocked" ? "blocked" : !E || O?.verification === "checking" || O?.transport === "disconnected" || O?.transport === "connecting" ? "connecting" : O?.transport === "ready" ? A?.kind === "blocked" ? "blocked" : "available" : runtimeControlHealth(j)) ?? runtimeHealth(D, A, j),
		compatibility: A ?? void 0,
		capabilities: k?.capabilities,
		appVersion: E?.appVersion ?? k?.appVersion ?? null,
		protocolVersion: k?.runtimeProtocolVersion ?? k?.protocolVersion ?? null,
		minCompatibleClientVersion: k?.minCompatibleRuntimeClientVersion ?? k?.minCompatibleMobileVersion ?? null,
		platform: k?.hostPlatform ?? null,
		remoteControlState: j ?? null,
		...C ? { source: C } : {}
	});
}
function buildExecutionHostRegistry(e) {
	let x = /* @__PURE__ */ new Map();
	x.set(LOCAL_EXECUTION_HOST_ID, {
		id: LOCAL_EXECUTION_HOST_ID,
		kind: "local",
		label: getLocalExecutionHostLabel(),
		detail: "This computer",
		health: "local"
	});
	for (let S of e.runtimeEnvironments ?? []) {
		let C = normalizeHostPart(S.id);
		C && addRuntimeHost(x, C, normalizeHostPart(S.name) ?? C, S.source, e.runtimeStatusByEnvironmentId);
	}
	for (let S of e.runtimeStatusByEnvironmentId?.keys() ?? []) addRuntimeHost(x, S, S, void 0, e.runtimeStatusByEnvironmentId);
	let S = parseExecutionHostId(getSettingsFocusedExecutionHostId(e.settings));
	S?.kind === "runtime" && e.hostSource !== "configured-only" && addRuntimeHost(x, S.environmentId, S.environmentId, void 0, e.runtimeStatusByEnvironmentId);
	let C = /* @__PURE__ */ new Set();
	if (e.hostSource !== "configured-only") for (let S of e.repos) {
		let w = parseExecutionHostId(S.executionHostId);
		w?.kind === "runtime" && addRuntimeHost(x, w.environmentId, w.environmentId, void 0, e.runtimeStatusByEnvironmentId), w?.kind === "ssh" && !isRuntimeOwnedSshTargetId(w.targetId) && C.add(w.targetId);
	}
	for (let x of e.sshTargetLabels?.keys() ?? []) {
		let e = normalizeHostPart(x);
		e && !isRuntimeOwnedSshTargetId(e) && C.add(e);
	}
	if (e.hostSource !== "configured-only") for (let x of e.repos) {
		let e = normalizeHostPart(x.connectionId);
		e && !isRuntimeOwnedSshTargetId(e) && C.add(e);
	}
	for (let S of C) {
		let C = e.sshConnectionStates?.get(S);
		setHost(x, {
			id: toSshExecutionHostId(S),
			kind: "ssh",
			label: e.sshTargetLabels?.get(S) || S,
			detail: "SSH",
			health: sshHealth(C),
			connectionStatus: C?.status
		});
	}
	let w = e.hostLabelOverrides;
	return !w || w.size === 0 ? [...x.values()] : [...x.values()].map((e) => {
		let x = w.get(e.id);
		return x ? {
			...e,
			label: x
		} : e;
	});
}
function buildSidebarHostOptions(e) {
	let x = new Set(e.sshTargetLabels.keys()), S = /* @__PURE__ */ new Set();
	for (let x of e.repos) x.connectionId?.trim() && S.add(x.connectionId.trim()), x.executionHostId?.startsWith("ssh:") && S.add(decodeURIComponent(x.executionHostId.slice(4)));
	let C = e.settings?.activeRuntimeEnvironmentId?.trim() ? `runtime:${encodeURIComponent(e.settings.activeRuntimeEnvironmentId.trim())}` : null;
	return buildExecutionHostRegistry({
		repos: e.repos,
		settings: e.settings,
		sshTargetLabels: e.sshTargetLabels,
		sshConnectionStates: e.sshConnectionStates,
		runtimeEnvironments: e.runtimeEnvironments,
		runtimeStatusByEnvironmentId: e.runtimeStatusByEnvironmentId,
		hostLabelOverrides: e.hostLabelOverrides
	}).map((e) => {
		if (e.kind === "local") return {
			...e,
			presence: "local"
		};
		if (e.kind === "ssh") {
			let C = decodeURIComponent(e.id.slice(4));
			return {
				...e,
				presence: x.has(C) ? "configured" : S.has(C) ? "project" : "active"
			};
		}
		return {
			...e,
			presence: e.id === C ? "active" : "project"
		};
	});
}
function shouldShowHostScopeControls(e) {
	return e.some((e) => e.id !== LOCAL_EXECUTION_HOST_ID);
}
function buildSidebarHostScopeOptions(e) {
	return [{
		id: "all",
		label: translate("auto.components.sidebar.sidebarHostOptions.3e102f111c", "All hosts"),
		detail: e.map((e) => e.label).join(", "),
		health: "mixed"
	}, ...e.map((e) => ({
		id: e.id,
		label: e.label,
		detail: e.detail,
		health: e.health
	}))];
}
function getSidebarHostVisibilityLabel(e, x) {
	return !e || e.length === x.length ? translate("auto.components.sidebar.sidebarHostOptions.3e102f111c", "All hosts") : e.length === 1 ? x.find((x) => x.id === e[0])?.label ?? "Hosts" : translate("auto.components.sidebar.sidebarHostOptions.visibleHostsCount", "{{value0}} hosts", { value0: e.length });
}
function getSidebarHostHealthLabel(e) {
	switch (e) {
		case "local": return "Local";
		case "available": return "Connected";
		case "connecting": return "Connecting";
		case "blocked": return "Update needed";
		case "disconnected": return "Disconnected";
		case "error": return "Needs attention";
		case "mixed": return "Mixed";
	}
}
var EDGE_ZONE_PX = 56, MAX_OUTSIDE_EDGE_PX = 48, MAX_SCROLL_SPEED_PX_PER_SECOND = 960, MAX_FRAME_MS = 32, DROP_BOUNDS_PADDING_PX = 8;
function getWorktreeSidebarDragAutoscroll(e) {
	let { point: x, containerRect: S } = e;
	if (x.clientX < S.left || x.clientX > S.right) return null;
	let C = Math.max(0, e.scrollHeight - e.clientHeight);
	if (C <= 0) return null;
	let w = Math.max(0, Math.min(C, e.scrollTop)), T = Math.max(0, Math.min(MAX_FRAME_MS, e.elapsedMs));
	if (T <= 0) return null;
	let E = getVerticalEdgeIntensity(x.clientY, S);
	if (!E) return null;
	let D = Math.max(0, Math.min(C, w + E.direction * E.intensity * MAX_SCROLL_SPEED_PX_PER_SECOND * (T / 1e3)));
	return D === w ? null : { scrollTop: D };
}
function getWorktreeSidebarBoundaryDrop(e) {
	if (e.localY < e.firstRect.top - DROP_BOUNDS_PADDING_PX) return e.firstRect.groupIndex === 0 && e.localY >= e.firstRect.top - EDGE_ZONE_PX ? {
		kind: "drop",
		dropIndex: 0,
		indicatorY: Math.max(0, e.firstRect.top - 3)
	} : { kind: "outside" };
	if (e.localY > e.lastRect.bottom + DROP_BOUNDS_PADDING_PX) {
		let x = e.sourceGroupSize - 1;
		return e.lastRect.groupIndex === x && e.localY <= e.lastRect.bottom + EDGE_ZONE_PX ? {
			kind: "drop",
			dropIndex: e.sourceGroupSize,
			indicatorY: e.lastRect.bottom + 3
		} : { kind: "outside" };
	}
	return { kind: "inside" };
}
function getWorktreeSidebarDragRectsForGroup(e, x) {
	let S = e.getBoundingClientRect(), C = [];
	return e.querySelectorAll("[data-worktree-drag-id]").forEach((w) => {
		if (w.getAttribute("data-worktree-drag-group-key") !== x) return;
		let T = w.getAttribute("data-worktree-drag-id"), E = w.getAttribute("data-worktree-drag-group-index"), D = E === null ? NaN : Number(E);
		if (!T || !Number.isFinite(D)) return;
		let O = w.getBoundingClientRect(), k = w.closest("[data-worktree-virtual-row]"), A = getWorktreeVirtualRowStart(k), j = k && A !== null ? A + O.top - k.getBoundingClientRect().top : O.top - S.top + e.scrollTop;
		C.push({
			worktreeId: T,
			groupIndex: D,
			top: j,
			bottom: j + O.height
		});
	}), C.sort((e, x) => e.top - x.top), C;
}
function getWorktreeVirtualRowStart(e) {
	if (!e) return null;
	let x = e.getAttribute("data-worktree-virtual-row-start");
	if (x === null) return null;
	let S = Number(x);
	return Number.isFinite(S) ? S : null;
}
function refreshWorktreeSidebarDragSession(e) {
	let x = e.groups.find((x) => x.key === e.session.sourceGroupKey);
	if (!x || !x.worktreeIds.includes(e.session.draggingWorktreeId)) return null;
	let S = e.unitGroups.find((x) => x.key === e.session.sourceGroupKey);
	if (!S) return null;
	let C = new Set(x.worktreeIds), w = new Set(S.worktreeIds);
	return e.session.reorderUnitDraggedIds.some((e) => !w.has(e) && !C.has(e)) ? null : {
		...e.session,
		rects: e.rects
	};
}
function getVerticalEdgeIntensity(e, x) {
	return e < x.top - MAX_OUTSIDE_EDGE_PX || e > x.bottom + MAX_OUTSIDE_EDGE_PX ? null : e <= x.top + EDGE_ZONE_PX ? {
		direction: -1,
		intensity: Math.min(1, (x.top + EDGE_ZONE_PX - e) / EDGE_ZONE_PX)
	} : e >= x.bottom - EDGE_ZONE_PX ? {
		direction: 1,
		intensity: Math.min(1, (e - (x.bottom - EDGE_ZONE_PX)) / EDGE_ZONE_PX)
	} : null;
}
var INDICATOR_GAP_PX = 4;
function computeWorktreeSidebarHeaderDropPreview(e) {
	if (e.rects.length === 0 || e.headerCount === 0) return null;
	let x = e.pointerY - e.containerTop + e.scrollTop;
	if (e.contentBottom !== void 0 && x > e.contentBottom) return null;
	let S = e.rects[0], C = e.rects.at(-1), w = Math.max(C.bottom, C.sectionBottom ?? C.bottom), T = getWorktreeSidebarBoundaryDrop({
		localY: x,
		firstRect: {
			worktreeId: e.getId(S),
			groupIndex: S.headerIndex,
			top: S.top,
			bottom: S.bottom
		},
		lastRect: {
			worktreeId: e.getId(C),
			groupIndex: C.headerIndex,
			top: C.top,
			bottom: w
		},
		sourceGroupSize: e.headerCount
	});
	if (T.kind === "outside") return null;
	if (T.kind === "drop") return {
		dropIndex: T.dropIndex,
		dropIndicatorY: Math.max(e.scrollTop, T.indicatorY)
	};
	let E = e.rects.find((e) => x >= e.top && x <= e.bottom);
	if (E) {
		let S = (E.top + E.bottom) / 2, C = x < S ? E.headerIndex : E.headerIndex + 1, w = x < S ? E : e.rects.find((e) => e.headerIndex >= C), T = w ? Math.max(0, w.top - INDICATOR_GAP_PX) : Math.max(E.bottom, E.sectionBottom ?? E.bottom) + INDICATOR_GAP_PX;
		return {
			dropIndex: C,
			dropIndicatorY: Math.max(e.scrollTop, T)
		};
	}
	let D = pickNearestHeaderBoundarySlot(e.rects, x);
	return D ? {
		dropIndex: D.dropIndex,
		dropIndicatorY: Math.max(e.scrollTop, D.indicatorY)
	} : null;
}
function pickNearestHeaderBoundarySlot(e, x) {
	let S, C;
	for (let w of e) w.top <= x ? S = w : C === void 0 && (C = w);
	let w = S ? {
		dropIndex: S.headerIndex + 1,
		indicatorY: Math.max(S.bottom, S.sectionBottom ?? S.bottom) + INDICATOR_GAP_PX
	} : null, T = C ? {
		dropIndex: C.headerIndex,
		indicatorY: Math.max(0, C.top - INDICATOR_GAP_PX)
	} : null;
	return w ? T && Math.abs(x - T.indicatorY) <= Math.abs(x - w.indicatorY) ? T : w : T;
}
function getProjectHeaderDragBucketKey(e) {
	return e.projectGroupId ? `group:${e.projectGroupId}` : "ungrouped";
}
function getSidebarOrderedRepoHeaderIdsByBucket(e) {
	let x = /* @__PURE__ */ new Map();
	for (let S of e) {
		if (S.type !== "header" || !S.repo) continue;
		let e = getProjectHeaderDragBucketKey(S.repo), C = x.get(e) ?? [];
		C.push(S.repo.id), x.set(e, C);
	}
	return x;
}
function getLogicalRepoOrderRankById(e) {
	let x = /* @__PURE__ */ new Map();
	return e.forEach((e, S) => {
		x.has(e) || x.set(e, S);
	}), x;
}
function getProjectGroupOrderForSidebarDrop(e) {
	let x = e.siblings.slice();
	if (x.length === 0) return 0;
	let S = (x, S) => {
		if (x) return getEffectiveProjectGroupManualRank(x, e.repoOrderRankById, S);
	}, C = S(x[e.dropIndex - 1], e.dropIndex - 1), w = S(x[e.dropIndex], e.dropIndex);
	return C === void 0 && w === void 0 ? 0 : C === void 0 ? w === void 0 ? 0 : w - 1 : w === void 0 ? C + 1 : w > C ? C + (w - C) / 2 : C + 1;
}
function mapSidebarProjectHeaderDropIndexToSiblingInsertIndex(e) {
	let x = e.sourceIndex >= 0 && e.sidebarDropIndex > e.sourceIndex ? e.sidebarDropIndex - 1 : e.sidebarDropIndex;
	return Math.max(0, Math.min(e.siblingCount, x));
}
function getVirtualRowStart(e) {
	if (!e) return null;
	let x = e.getAttribute("data-worktree-virtual-row-start");
	if (x === null) return null;
	let S = Number(x);
	return Number.isFinite(S) ? S : null;
}
function getOptionalNumberAttribute(e, x) {
	let S = e.getAttribute(x);
	if (S === null) return;
	let C = Number(S);
	return Number.isFinite(C) ? C : void 0;
}
function measureProjectHeaderDragRects(e, x) {
	let S = e.getBoundingClientRect(), C = [];
	return e.querySelectorAll("[data-repo-header-id]").forEach((w) => {
		let T = w.getAttribute("data-repo-header-id"), E = w.getAttribute("data-repo-header-bucket"), D = w.getAttribute("data-repo-header-index"), O = D === null ? NaN : Number(D);
		if (!T || !E || !Number.isFinite(O) || x !== void 0 && E !== x) return;
		let k = w.getBoundingClientRect(), A = w.closest("[data-worktree-virtual-row]"), j = getVirtualRowStart(A), M = A && j !== null ? j + k.top - A.getBoundingClientRect().top : k.top - S.top + e.scrollTop;
		C.push({
			repoId: T,
			bucketKey: E,
			headerIndex: O,
			top: M,
			bottom: M + k.height,
			sectionBottom: getOptionalNumberAttribute(w, "data-repo-header-section-end")
		});
	}), C.sort((e, x) => e.top - x.top), C;
}
function mapSidebarRepoDropIndexToAllRepoInsertAt(e, x, S) {
	if (x.length === 0) return 0;
	if (e <= 0) return S.indexOf(x[0]);
	if (e >= x.length) {
		let e = x.at(-1);
		return S.indexOf(e) + 1;
	}
	return S.indexOf(x[e]);
}
function computeProjectHeaderDropPreview(e) {
	let { rects: x, sidebarRepoHeaderIds: S } = e;
	return computeWorktreeSidebarHeaderDropPreview({
		pointerY: e.pointerY,
		containerTop: e.containerTop,
		scrollTop: e.scrollTop,
		rects: x,
		headerCount: S.length,
		getId: (e) => e.repoId,
		contentBottom: e.contentBottom
	});
}
function applyAllRepoInsertAt(e, x, S) {
	if (!e.includes(x) || S < 0 || S > e.length) return null;
	let C = e.filter((e) => e === x), w = S - e.slice(0, S).filter((e) => e === x).length, T = e.filter((e) => e !== x);
	return T.splice(w, 0, ...C), T.every((x, S) => x === e[S]) ? null : T;
}
function getPreferredWorktreeRows(e, x) {
	if (x === "single-location") {
		let x = /* @__PURE__ */ new Set();
		return e.filter((e) => {
			let S = getWorktreeHostIdentity(e.worktree);
			return x.has(S) ? !1 : (x.add(S), !0);
		});
	}
	let S = [], C = /* @__PURE__ */ new Set();
	for (let x of e) {
		let e = getWorktreeHostIdentity(x.worktree);
		x.sectionKey === "pinned" || C.has(e) || (S.push(x), C.add(e));
	}
	for (let x of e) {
		let e = getWorktreeHostIdentity(x.worktree);
		C.has(e) || (S.push(x), C.add(e));
	}
	return S;
}
function getRenderedWorktreesInSidebarOrder(e, x) {
	let S = e.filter((e) => e.type === "item"), C = new Set(getPreferredWorktreeRows(S, x).map((e) => e.rowKey)), w = [];
	for (let x of e) x.type === "item" && C.has(x.rowKey) ? w.push(x.worktree) : x.type === "folder-workspace" && w.push(folderWorkspaceToWorktree(x.folderWorkspace));
	return w;
}
const EMPTY_WORKTREE_LIST_REVIEW_CACHE_INPUTS = Object.freeze({
	prCache: null,
	hostedReviewCache: null
});
function selectWorktreeListReviewCacheInputs(e, x, S) {
	let C = e.folderWorkspaces.length > 0, w = e.settings?.experimentalNewWorktreeCardStyle === !0, T = C && (w ? S.includes("status") : S.includes("pr")), E = x === "pr-status" || T, D = w && T;
	return !E && !D ? EMPTY_WORKTREE_LIST_REVIEW_CACHE_INPUTS : {
		prCache: E ? e.prCache : null,
		hostedReviewCache: D ? e.hostedReviewCache : null
	};
}
function getVisibleSidebarHostIdSet(e, x) {
	let S = e ?? (x === "all" ? null : [x]);
	return S ? new Set(S) : null;
}
function filterProjectGroupsForVisibleHosts(e, x, S) {
	return x ? e.filter((e) => x.has(getProjectGroupExecutionHostIdForRows(e, S))) : e;
}
function filterFolderWorkspacesForVisibleHosts(e, x, S, C) {
	if (!S) return e;
	let w = new Map(x.map((e) => [e.id, e]));
	return e.filter((e) => S.has(getFolderWorkspaceExecutionHostIdForRows({
		folderWorkspace: e,
		projectGroup: w.get(e.projectGroupId),
		defaultHostId: C
	})));
}
function getProjectGroupExecutionHostIdForRows(e, x) {
	return normalizeExecutionHostId(e.executionHostId) || (e.connectionId ? toSshExecutionHostId(e.connectionId) : x);
}
function getFolderWorkspaceExecutionHostIdForRows({ folderWorkspace: e, projectGroup: x, defaultHostId: S }) {
	let C = normalizeExecutionHostId(e.executionHostId);
	if (C) return C;
	if (x) {
		let C = normalizeExecutionHostId(x.executionHostId);
		if (C) return C;
		let w = getProjectGroupExecutionHostIdForRows(x, S);
		if (w !== S || !e.connectionId) return w;
	}
	return e.connectionId ? toSshExecutionHostId(e.connectionId) : S;
}
function getRuntimeEnvironmentIdForFolderPathStatusHost(e) {
	let x = parseExecutionHostId(e);
	return x?.kind === "runtime" ? x.environmentId : null;
}
function getProjectGroupExecutionHostIdForFolderPathStatus(e) {
	return normalizeExecutionHostId(e.executionHostId) || (e.connectionId ? toSshExecutionHostId(e.connectionId) : "local");
}
function getFolderPathStatusRouteOptionsForRows({ request: e, projectGroupsById: x, folderWorkspacesById: S }) {
	let C = e.scope === "folder-workspace" ? S.get(e.folderWorkspaceId) : void 0, w = e.scope === "project-group" ? x.get(e.projectGroupId) : x.get(C?.projectGroupId ?? "");
	if (w) return { runtimeEnvironmentId: getRuntimeEnvironmentIdForFolderPathStatusHost(e.scope === "project-group" ? getProjectGroupExecutionHostIdForFolderPathStatus(w) : getFolderWorkspaceExecutionHostIdForRows({
		folderWorkspace: C ?? {
			connectionId: null,
			executionHostId: null
		},
		projectGroup: w,
		defaultHostId: getProjectGroupExecutionHostIdForFolderPathStatus(w)
	})) };
}
var EMPTY_REPO_ID_SET = Object.freeze(/* @__PURE__ */ new Set()), EMPTY_IMPORTED_BY_REPO = Object.freeze(/* @__PURE__ */ new Map()), EMPTY_INBOX_BY_REPO = Object.freeze(/* @__PURE__ */ new Map()), EMPTY_PENDING_CREATIONS = Object.freeze([]);
function computeRenderedSidebarWorktrees(e, x) {
	let S = getSettingsFocusedExecutionHostId(e.settings), C = getPinnedWorktreeDisplayPolicy(e.settings), w = getProjectHostSetupProjectionFromState(e), T = getVisibleSidebarHostIdSet(e.visibleWorkspaceHostIds, e.workspaceHostScope), E = e.projectGroups ?? [], { prCache: D } = selectWorktreeListReviewCacheInputs(e, e.groupBy, e.worktreeCardProperties), O = buildRows(e.groupBy, [...x], getRepoMapFromState(e), D, e.collapsedGroups, getLogicalRepoOrderRankById(e.repos.map((e) => e.id)), e.workspaceStatuses, e.projectOrderBy, e.worktreeLineageById, getWorktreeMapFromState(e), !0, e.settings, filterProjectGroupsForVisibleHosts(E, T, S), EMPTY_REPO_ID_SET, EMPTY_IMPORTED_BY_REPO, EMPTY_INBOX_BY_REPO, EMPTY_PENDING_CREATIONS, {
		projects: w.projects,
		projectHostSetups: w.setups
	}, filterFolderWorkspacesForVisibleHosts(e.folderWorkspaces, E, T, S), void 0, S, C);
	return getRenderedWorktreesInSidebarOrder(e.workspaceHostScope !== "all" || e.visibleWorkspaceHostIds != null ? addHostSectionRows({
		rows: O,
		hostOptions: orderHostSectionOptions(buildSidebarHostOptions({
			repos: e.repos,
			sshTargetLabels: e.sshTargetLabels,
			sshConnectionStates: e.sshConnectionStates,
			settings: e.settings,
			runtimeEnvironments: e.runtimeEnvironments,
			runtimeStatusByEnvironmentId: e.runtimeStatusByEnvironmentId,
			hostLabelOverrides: getHostDisplayLabelOverrides(e.settings)
		}), e.workspaceHostOrder),
		workspaceHostScope: e.workspaceHostScope,
		visibleWorkspaceHostIds: e.visibleWorkspaceHostIds,
		defaultHostId: S,
		collapsedHostKeys: e.collapsedGroups,
		forceCollapseHosts: !1,
		preferProjectGrouping: !0
	}) : O, C);
}
function computeRenderedSidebarWorktreeOrder(e, x) {
	return Array.from(new Set(computeRenderedSidebarWorktrees(e, x).map((e) => e.id)));
}
const EMPTY_PAIRED_DEVICE_IDS_BY_ENVIRONMENT = /* @__PURE__ */ new Map();
function getPairedDeviceIdsByEnvironment(e, x) {
	let S = /* @__PURE__ */ new Map();
	for (let C of e) {
		let e = x.get(C.id)?.status?.pairedDeviceId ?? C.pairedDeviceId;
		e && S.set(C.id, e);
	}
	return S;
}
function isWorkspaceFromOtherDevice(e, x) {
	let S = normalizeWorkspaceCreatorProvenance(e.creatorProvenance);
	if (!S) return !1;
	let C = e.runtimeOwnerEnvironmentId;
	if (!C) return S.kind !== "host";
	let w = x.get(C);
	return w ? S.kind !== "paired-device" || S.deviceId !== w : !1;
}
function isFolderWorkspaceFromOtherDevice(e, x) {
	return isWorkspaceFromOtherDevice(folderWorkspaceToWorktree(e), x);
}
function filterFolderWorkspacesFromOtherDevices(e, x) {
	return e.filter((e) => !isFolderWorkspaceFromOtherDevice(e, x));
}
function isDefaultBranchWorkspace(e) {
	return e.isMainWorktree && e.branch.trim() !== "" && e.ephemeralVmCheckoutMode !== "provisioned-root";
}
var lineageAncestorIndexCache = /* @__PURE__ */ new WeakMap();
function getLineageAncestorIndex(e) {
	let x = lineageAncestorIndexCache.get(e);
	if (x) return x;
	let S = /* @__PURE__ */ new Map();
	for (let x of getIndexedAllWorktrees(e)) x.isArchived || S.set(x.id, x);
	return lineageAncestorIndexCache.set(e, S), S;
}
var sortedWorktreeRankIndexCache = /* @__PURE__ */ new WeakMap();
function getSortedWorktreeRankIndex(e) {
	let x = sortedWorktreeRankIndexCache.get(e);
	if (x) return x;
	let S = new Map(e.map((e, x) => [e, x]));
	return sortedWorktreeRankIndexCache.set(e, S), S;
}
function computeVisibleWorktrees(e, x, S) {
	let C = getAllWorktreesFromState({ worktreesByRepo: e });
	C = C.filter((e) => !e.isArchived);
	let w = getLineageAncestorIndex(e);
	S.hideWorkspacesFromOtherDevices && (C = C.filter((e) => !isWorkspaceFromOtherDevice(e, S.pairedDeviceIdsByEnvironment))), S.hideDefaultBranchWorkspace && (C = C.filter((e) => !isDefaultBranchWorkspace(e))), S.hideAutomationGeneratedWorkspaces && (C = C.filter((e) => !isAutomationGeneratedWorkspace(e))), S.hideCliCreatedWorkspaces && (C = C.filter((e) => !isCliCreatedWorkspace(e))), S.hideDetachedHeadWorkspaces && (C = C.filter((e) => !isDetachedHeadWorkspace(e)));
	let T = S.visibleWorkspaceHostIds ?? (S.workspaceHostScope === "all" ? null : [S.workspaceHostScope]);
	if (T) {
		let e = new Set(T);
		C = C.filter((x) => {
			let C = S.repoMap.get(x.repoId);
			if (!C) return !1;
			let w = getWorktreeExecutionHostId(x, C, S.defaultHostId);
			return e.has(w);
		});
	}
	if (S.filterRepoIds.length > 0) {
		let e = new Set(S.filterRepoIds);
		C = C.filter((x) => e.has(x.repoId));
	}
	if (S.showSleepingWorkspaces || (C = C.filter((e) => isSleepingSweepExemptWorkspace(e, S.alwaysShowDefaultBranchWorkspace) || !isInactiveWorkspace(e.id, S.tabsByWorktree, S.ptyIdsByTabId, S.browserTabsByWorktree, S.worktreeIdsWithLiveAgent))), S.forcedVisibleWorktreeIds && S.forcedVisibleWorktreeIds.length > 0) {
		let e = new Set(C.map((e) => e.id));
		for (let x of S.forcedVisibleWorktreeIds) {
			let S = w.get(x);
			S && !e.has(x) && (e.add(x), C.push(S));
		}
	}
	let E = getSortedWorktreeRankIndex(x);
	return C.sort((e, x) => (E.get(e.id) ?? Infinity) - (E.get(x.id) ?? Infinity)), S.injectLineageAncestors === !1 ? C : addVisibleLineageAncestors(C, w, S.worktreeLineageById);
}
function addVisibleLineageAncestors(e, x, S) {
	let C = [], w = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set(), E = getCyclicProjectedWorktreeLineageIds(S, x), D = (e) => {
		let O = getWorktreeHostIdentity(e);
		if (w.has(O) || T.has(O)) return;
		T.add(O);
		let k = getLineageRenderInfo(e, S, x, E);
		k.state === "valid" && D(k.parent), T.delete(O), w.has(O) || (w.add(O), C.push(e));
	};
	for (let x of e) D(x);
	return C;
}
function computeVisibleWorktreeIds(e, x, S) {
	return computeVisibleWorktrees(e, x, S).map((e) => e.id);
}
var _publishedVisibleIds = null, _publishedVisibleShortcutTargets = null;
function setVisibleWorktreeIds(e) {
	_publishedVisibleIds = e;
}
function setVisibleWorktreeShortcutTargets(e) {
	_publishedVisibleShortcutTargets = e;
}
function buildVisibleWorktreeOptionsFromState(e, x) {
	return {
		filterRepoIds: e.filterRepoIds,
		showSleepingWorkspaces: e.showSleepingWorkspaces,
		tabsByWorktree: e.tabsByWorktree,
		ptyIdsByTabId: e.ptyIdsByTabId,
		browserTabsByWorktree: e.browserTabsByWorktree,
		worktreeIdsWithLiveAgent: getWorktreeIdsWithLiveAgent(e.agentStatusByPaneKey, e.tabsByWorktree, Date.now()),
		hideDefaultBranchWorkspace: e.hideDefaultBranchWorkspace,
		hideAutomationGeneratedWorkspaces: e.hideAutomationGeneratedWorkspaces,
		hideCliCreatedWorkspaces: e.hideCliCreatedWorkspaces,
		hideDetachedHeadWorkspaces: e.hideDetachedHeadWorkspaces,
		hideWorkspacesFromOtherDevices: e.hideWorkspacesFromOtherDevices,
		pairedDeviceIdsByEnvironment: e.hideWorkspacesFromOtherDevices ? getPairedDeviceIdsByEnvironment(e.runtimeEnvironments, e.runtimeStatusByEnvironmentId) : EMPTY_PAIRED_DEVICE_IDS_BY_ENVIRONMENT,
		alwaysShowDefaultBranchWorkspace: e.alwaysShowDefaultBranchWorkspace,
		repoMap: x,
		workspaceHostScope: e.workspaceHostScope,
		visibleWorkspaceHostIds: e.visibleWorkspaceHostIds,
		defaultHostId: getSettingsFocusedExecutionHostId(e.settings),
		worktreeLineageById: e.worktreeLineageById
	};
}
function getVisibleWorktreeIds() {
	if (_publishedVisibleIds) return _publishedVisibleIds;
	let e = useAppStore.getState(), x = getAllWorktreesFromState(e).filter((e) => !e.isArchived), S = getRepoMapFromState(e), C;
	C = e.sortBy === "smart" ? sortWorktreesSmart(x, e.tabsByWorktree, S, e.agentStatusByPaneKey, e.runtimePaneTitlesByTabId, e.ptyIdsByTabId, e.migrationUnsupportedByPtyId, e.terminalLayoutsByTabId).map((e) => e.id) : [...x].sort(buildWorktreeComparator(e.sortBy, S, Date.now(), /* @__PURE__ */ new Map())).map((e) => e.id);
	let w = computeVisibleWorktreeIds(e.worktreesByRepo, C, buildVisibleWorktreeOptionsFromState(e, S)), T = new Map(w.map((e, x) => [e, x])), E = getVisibleWorkspaceHostIdSet(e), D = getSettingsFocusedExecutionHostId(e.settings);
	return computeRenderedSidebarWorktreeOrder(e, x.filter((e) => T.has(e.id) && worktreeMatchesVisibleHost(e, E, S, D)).sort((e, x) => (T.get(e.id) ?? 0) - (T.get(x.id) ?? 0)));
}
function getVisibleWorktreeShortcutTargets() {
	if (_publishedVisibleShortcutTargets) return _publishedVisibleShortcutTargets;
	let e = useAppStore.getState(), x = getVisibleWorktreeIds(), S = new Map(x.map((e, x) => [e, x])), C = getRepoMapFromState(e), w = getVisibleWorkspaceHostIdSet(e), T = getSettingsFocusedExecutionHostId(e.settings);
	return computeRenderedSidebarWorktrees(e, getAllWorktreesFromState(e).filter((e) => !e.isArchived && S.has(e.id) && worktreeMatchesVisibleHost(e, w, C, T)).sort((e, x) => (S.get(e.id) ?? 0) - (S.get(x.id) ?? 0))).map((e) => ({
		id: e.id,
		...e.hostId ? { executionHostId: e.hostId } : {}
	}));
}
function revealRepoInProjectFilter(e, x) {
	e.filterRepoIds.length === 0 || e.filterRepoIds.includes(x) || e.setFilterRepoIds([...e.filterRepoIds, x]);
}
var WINDOWS_RUNNER_PATH_CMD_GUARD_PATTERN = /[%&|<>^()!,;=$`]/;
function windowsRunnerPathNeedsCmdGuard(e) {
	return WINDOWS_RUNNER_PATH_CMD_GUARD_PATTERN.test(e);
}
function buildWindowsCmdRunnerDelayedLaunchCommand(e) {
	return `powershell.exe -NoProfile -NonInteractive -EncodedCommand ${encodePowerShellCommand([
		`$runner = ${quotePowerShellString$1(e)}`,
		"if ([string]::IsNullOrEmpty($runner)) { exit 1 }",
		"$processInfo = [System.Diagnostics.ProcessStartInfo]::new()",
		"$processInfo.FileName = $env:ComSpec",
		"if (-not $processInfo.FileName) { $processInfo.FileName = 'cmd.exe' }",
		"$processInfo.Arguments = '/d /s /v:on /c \"\"!ORCA_SETUP_RUNNER!\"\"'",
		"$processInfo.UseShellExecute = $false",
		"$processInfo.EnvironmentVariables[\"ORCA_SETUP_RUNNER\"] = $runner",
		"$process = [System.Diagnostics.Process]::Start($processInfo)",
		"$process.WaitForExit()",
		"exit $process.ExitCode"
	].join("; "))}`;
}
function quotePowerShellString$1(e) {
	return `'${e.replace(/'/g, "''")}'`;
}
function buildSetupRunnerCommand$1(e, x, S) {
	return resolveSetupRunnerCommand(e, x, S).command;
}
function getSetupRunnerCommandPlatformForPath(e, x) {
	return isWindowsAbsolutePathLike(e) ? "windows" : e.startsWith("/") ? "posix" : x;
}
function resolveSetupRunnerCommand(e, x, S) {
	if (x === "windows") {
		if (isWslUncPath(e)) {
			let x = wslUncToLinuxPath(e);
			return {
				command: `bash ${quotePosixArg$1(x)}`,
				runnerScriptPathForShell: x,
				shell: "posix"
			};
		}
		if (e.startsWith("/") && !isWindowsAbsolutePathLike(e)) return {
			command: `bash ${quotePosixArg$1(e)}`,
			runnerScriptPathForShell: e,
			shell: "posix"
		};
		if (!isWindowsCmdRunnerPath(e) && (S?.family === "posix" || /\.sh$/i.test(e))) {
			if (isWslExecutable(S?.executable)) {
				let x = nativeWindowsPathToWslShellPath(e);
				return {
					command: `bash ${quotePosixArg$1(x)}`,
					runnerScriptPathForShell: x,
					shell: "posix"
				};
			}
			let x = nativeWindowsPathToPosixShellPath(e);
			return {
				command: `bash ${quotePosixArg$1(x)}`,
				runnerScriptPathForShell: x,
				shell: "posix"
			};
		}
		return {
			command: S?.family === "posix" || windowsRunnerPathNeedsCmdGuard(e) ? buildWindowsCmdRunnerDelayedLaunchCommand(e) : `cmd.exe /c ${quoteWindowsArg(e)}`,
			runnerScriptPathForShell: e,
			shell: "windows"
		};
	}
	return {
		command: `bash ${quotePosixArg$1(e)}`,
		runnerScriptPathForShell: e,
		shell: "posix"
	};
}
function isWindowsCmdRunnerPath(e) {
	return /\.(cmd|bat)$/i.test(e);
}
function isWslUncPath(e) {
	let x = e.replace(/\\/g, "/");
	return /^\/\/(wsl\.localhost|wsl\$)\//i.test(x);
}
function wslUncToLinuxPath(e) {
	return e.replace(/\\/g, "/").match(/^\/\/(wsl\.localhost|wsl\$)\/[^/]+(\/.*)?$/i)?.[2] || "/";
}
function quotePosixArg$1(e) {
	return /^[A-Za-z0-9_./:-]+$/.test(e) ? e : `'${e.replace(/'/g, "'\\''")}'`;
}
function quoteWindowsArg(e) {
	return `"${e.replace(/"/g, "\"\"")}"`;
}
function nativeWindowsPathToPosixShellPath(e) {
	let x = e.match(/^([A-Za-z]):[\\/](.*)$/);
	return x ? `/${x[1].toLowerCase()}/${x[2].replace(/\\/g, "/")}` : e.replace(/\\/g, "/");
}
function nativeWindowsPathToWslShellPath(e) {
	let x = e.match(/^([A-Za-z]):[\\/](.*)$/);
	return x ? `/mnt/${x[1].toLowerCase()}/${x[2].replace(/\\/g, "/")}` : e.replace(/\\/g, "/");
}
function isWslExecutable(e) {
	let x = e?.trim().replaceAll("\\", "/").split("/").pop()?.toLowerCase() ?? "";
	return x === "wsl.exe" || x === "wsl";
}
var DEFAULT_WAIT_TIMEOUT_SECONDS = 7200;
const SETUP_COMPLETE_MESSAGE = "Setup finished; starting agent.", SETUP_AGENT_SEQUENCE_STARTUP_COMMAND_ENV = "ORCA_SEQUENCED_STARTUP_COMMAND", SETUP_AGENT_SEQUENCE_STARTUP_SCRIPT_ENV = "ORCA_SEQUENCED_STARTUP_SCRIPT";
function createSetupAgentSequenceNonce() {
	let e = globalThis.crypto;
	return typeof e?.randomUUID == "function" ? e.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function createSequencedSetupAgentCommands(e) {
	let x = e.nonce ?? createSetupAgentSequenceNonce(), S = resolveSetupRunnerCommand(e.runnerScriptPath, e.platform, e.shell), C = S.shell === "windows" && e.shell?.family === "posix", w = `${C ? nativeWindowsPathToPosixShellPath(S.runnerScriptPathForShell) : S.runnerScriptPathForShell}.${x}.done`, T = e.waitTimeoutSeconds ?? DEFAULT_WAIT_TIMEOUT_SECONDS;
	if (S.shell === "windows" && !C) return {
		setupCommand: buildWindowsSetupCommand(S.runnerScriptPathForShell, w, x),
		startupCommand: buildWindowsStartupCommand(w, x, T),
		startupEnv: { [SETUP_AGENT_SEQUENCE_STARTUP_COMMAND_ENV]: e.startupCommand }
	};
	let E = buildPosixStartupScript(e.startupCommand, w, x, T);
	return {
		setupCommand: buildPosixSetupCommand(S.command, w, x),
		startupCommand: `bash -lc 'eval "$${SETUP_AGENT_SEQUENCE_STARTUP_SCRIPT_ENV}"'`,
		startupEnv: {
			[SETUP_AGENT_SEQUENCE_STARTUP_COMMAND_ENV]: e.startupCommand,
			[SETUP_AGENT_SEQUENCE_STARTUP_SCRIPT_ENV]: E
		}
	};
}
function buildPosixSetupCommand(e, x, S) {
	let C = quotePosixArg(x), w = quotePosixArg(`${x}.tmp`), T = quotePosixArg(S);
	return `bash -lc ${quotePosixArg([
		`rm -f ${C} ${w} 2>/dev/null`,
		`( ${e} )`,
		"status=$?",
		`printf '%s:%s\\n' ${T} "$status" > ${w}`,
		`mv -f ${w} ${C}`,
		"exit \"$status\""
	].join("; "))}`;
}
function buildPosixStartupScript(e, x, S, C) {
	let w = quotePosixArg(x), T = quotePosixArg(`${x}.tmp`), E = quotePosixArg(S), D = Math.max(1, Math.floor(C)), O = buildPosixStartupSuccessCommand(e);
	return [
		`deadline=$((SECONDS + ${D}));`,
		"echo \"Waiting for setup to finish before starting agent...\" >&2;",
		"while :; do",
		`if [ -f ${w} ]; then`,
		`IFS=: read -r seen status < ${w} || true;`,
		`if [ "$seen" = ${E} ]; then`,
		`rm -f ${w} ${T} 2>/dev/null;`,
		`if [ "$status" = "0" ]; then echo ${quotePosixArg(SETUP_COMPLETE_MESSAGE)} >&2; if [ -n "\${${SETUP_AGENT_SEQUENCE_STARTUP_COMMAND_ENV}:-}" ]; then eval "\$${SETUP_AGENT_SEQUENCE_STARTUP_COMMAND_ENV}"; exit "$?"; else ${O}; fi; fi;`,
		"echo \"Setup failed; skipping agent startup.\" >&2;",
		"exit \"${status:-1}\";",
		"fi;",
		"fi;",
		"if [ \"$SECONDS\" -ge \"$deadline\" ]; then",
		"echo \"Timed out waiting for setup before starting agent.\" >&2;",
		"exit 124;",
		"fi;",
		"sleep 1;",
		"done"
	].join(" ");
}
function buildPosixStartupSuccessCommand(e) {
	return hasUnquotedPosixCommandSeparator(e) || hasLeadingPosixEnvAssignment(e) ? `eval ${quotePosixArg(e)}; exit "$?"` : `exec ${e}`;
}
function hasLeadingPosixEnvAssignment(e) {
	return /^[A-Za-z_][A-Za-z0-9_]*=/.test(e.trimStart());
}
function hasUnquotedPosixCommandSeparator(e) {
	let x = null, S = !1;
	for (let C of e) {
		if (S) {
			S = !1;
			continue;
		}
		if (C === "\\") {
			S = !0;
			continue;
		}
		if (x) {
			C === x && (x = null);
			continue;
		}
		if (C === "'" || C === "\"") {
			x = C;
			continue;
		}
		if (C === ";" || C === "&" || C === "|" || C === "\n" || C === "\r") return !0;
	}
	return !1;
}
function buildWindowsSetupCommand(e, x, S) {
	return encodePowerShellInvocation([
		`$runner = ${quotePowerShellString(e)}`,
		`$marker = ${quotePowerShellString(x)}`,
		"$tmp = $marker + \".tmp\"",
		`$nonce = ${quotePowerShellString(S)}`,
		"Remove-Item -LiteralPath $marker, $tmp -Force -ErrorAction SilentlyContinue",
		"$processInfo = [System.Diagnostics.ProcessStartInfo]::new()",
		"$processInfo.FileName = $env:ComSpec",
		"$processInfo.Arguments = '/d /s /v:on /c \"\"!ORCA_SETUP_RUNNER!\"\"'",
		"$processInfo.UseShellExecute = $false",
		"$processInfo.EnvironmentVariables[\"ORCA_SETUP_RUNNER\"] = $runner",
		"$process = [System.Diagnostics.Process]::Start($processInfo)",
		"$process.WaitForExit()",
		"$setupStatus = $process.ExitCode",
		"$utf8 = [System.Text.UTF8Encoding]::new($false)",
		"[System.IO.File]::WriteAllText($tmp, ($nonce + \":\" + $setupStatus + [Environment]::NewLine), $utf8)",
		"Move-Item -LiteralPath $tmp -Destination $marker -Force",
		"exit $setupStatus"
	].join("; "));
}
function buildWindowsStartupCommand(e, x, S) {
	let C = Math.max(1, Math.floor(S));
	return encodePowerShellInvocation([
		"$orcaProgress = $ProgressPreference; $ProgressPreference = 'SilentlyContinue'",
		"try { Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force -ErrorAction Stop } catch { [Console]::Error.WriteLine(\"Orca: could not relax the execution policy for this \" + \"session (\" + $_.FullyQualifiedErrorId + \"). A startup command that runs a .ps1 \" + \"may be blocked.\") }",
		"$ProgressPreference = $orcaProgress",
		`$marker = ${quotePowerShellString(e)}`,
		"if ([string]::IsNullOrWhiteSpace($marker)) {",
		"  [Console]::Error.WriteLine(\"Missing setup marker path.\")",
		"  exit 1",
		"}",
		"$tmp = $marker + \".tmp\"",
		`$nonce = ${quotePowerShellString(x)}`,
		`$deadline = (Get-Date).AddSeconds(${C})`,
		"[Console]::Error.WriteLine(\"Waiting for setup to finish before starting agent...\")",
		"while ($true) {",
		"  if (Test-Path -LiteralPath $marker) {",
		"    $content = Get-Content -LiteralPath $marker -TotalCount 1",
		"    if ($content -match \"^([0-9A-Za-z_-]+):([0-9]+)$\" -and $Matches[1] -eq $nonce) {",
		"      $setupStatus = [int]$Matches[2]",
		"      Remove-Item -LiteralPath $marker, $tmp -Force -ErrorAction SilentlyContinue",
		"      if ($setupStatus -ne 0) {",
		"        [Console]::Error.WriteLine(\"Setup failed; skipping agent startup.\")",
		"        exit $setupStatus",
		"      }",
		`      $startup = $env:${SETUP_AGENT_SEQUENCE_STARTUP_COMMAND_ENV}`,
		"      if ([string]::IsNullOrWhiteSpace($startup)) {",
		"        [Console]::Error.WriteLine(\"Missing sequenced startup command.\")",
		"        exit 1",
		"      }",
		`      [Console]::Error.WriteLine(${quotePowerShellString(SETUP_COMPLETE_MESSAGE)})`,
		"      Invoke-Expression $startup",
		"      if ($global:LASTEXITCODE -ne $null) { exit $global:LASTEXITCODE }",
		"      if (-not $?) { exit 1 }",
		"      exit 0",
		"    }",
		"  }",
		"  if ((Get-Date) -ge $deadline) {",
		"    [Console]::Error.WriteLine(\"Timed out waiting for setup before starting agent.\")",
		"    exit 124",
		"  }",
		"  Start-Sleep -Seconds 1",
		"}"
	].join("; "));
}
function encodePowerShellInvocation(e) {
	return `powershell.exe -NoProfile -NonInteractive -EncodedCommand ${encodePowerShellCommand(e)}`;
}
function quotePosixArg(e) {
	return /^[A-Za-z0-9_./:-]+$/.test(e) ? e : `'${e.replace(/'/g, "'\\''")}'`;
}
function quotePowerShellString(e) {
	return `'${e.replace(/'/g, "''")}'`;
}
var pendingHookCommandDeliveries = /* @__PURE__ */ new Map(), unsubscribePendingHookCommandDeliveries = null;
function queueHookCommandsForFirstWorktreeTab(e) {
	let x = pendingHookCommandDeliveries.get(e.worktreeId);
	x ? x.push(e) : pendingHookCommandDeliveries.set(e.worktreeId, [e]), ensurePendingHookCommandSubscription(), flushPendingHookCommandDeliveries();
}
function ensurePendingHookCommandSubscription() {
	if (unsubscribePendingHookCommandDeliveries) return;
	let e = useAppStore.getState(), x = e.tabsByWorktree, S = e.worktreesByRepo, C = e.detectedWorktreesByRepo, w = e.folderWorkspaces, T = e.getKnownWorktreeById;
	unsubscribePendingHookCommandDeliveries = useAppStore.subscribe((e) => {
		e.tabsByWorktree === x && e.worktreesByRepo === S && e.detectedWorktreesByRepo === C && e.folderWorkspaces === w && e.getKnownWorktreeById === T || (x = e.tabsByWorktree, S = e.worktreesByRepo, C = e.detectedWorktreesByRepo, w = e.folderWorkspaces, T = e.getKnownWorktreeById, flushPendingHookCommandDeliveries());
	});
}
function stopPendingHookCommandSubscriptionIfIdle() {
	pendingHookCommandDeliveries.size > 0 || !unsubscribePendingHookCommandDeliveries || (unsubscribePendingHookCommandDeliveries(), unsubscribePendingHookCommandDeliveries = null);
}
function flushPendingHookCommandDeliveries() {
	let e = useAppStore.getState();
	for (let [x, S] of pendingHookCommandDeliveries) {
		let C = e.tabsByWorktree[x]?.[0]?.id;
		if (!C) {
			e.getKnownWorktreeById(x) || pendingHookCommandDeliveries.delete(x);
			continue;
		}
		pendingHookCommandDeliveries.delete(x);
		for (let x of S) x.deliver(e, C);
	}
	stopPendingHookCommandSubscriptionIfIdle();
}
function resolveStartupLaunchDraftText(e) {
	return e?.draftPrompt ?? e?.launchDraftText;
}
function draftViewModeProps(e) {
	return e == null ? {} : {
		promptDelivery: "draft",
		launchDraftText: e
	};
}
function buildSetupRunnerCommand(e, x) {
	return buildSetupRunnerCommand$1(e, getSetupRunnerCommandPlatformForPath(e, navigator.userAgent.includes("Windows") ? "windows" : "posix"), x);
}
function queueSetupAndIssueCommands(e, x, S, C, w, T, E) {
	if (C) {
		let w = useAppStore.getState().settings?.setupScriptLaunchMode ?? "new-tab", D = {
			command: T ?? C.command ?? buildSetupRunnerCommand(C.runnerScriptPath, C.shell),
			env: C.envVars
		};
		if (w === "new-tab") {
			let C = e.createTab(x, void 0, void 0, {
				recordInteraction: !1,
				...E?.activateCreatedTabs === !1 ? { activate: !1 } : {}
			});
			E?.activateCreatedTabs !== !1 && S && e.setActiveTab(S), e.setTabCustomTitle(C.id, "Setup", { recordInteraction: !1 }), e.queueTabStartupCommand(C.id, D);
		} else S && e.queueTabSetupSplit(S, {
			...D,
			direction: w === "split-horizontal" ? "horizontal" : "vertical"
		});
	}
	if (w && S) {
		let x = "runnerScriptPath" in w ? {
			command: buildSetupRunnerCommand(w.runnerScriptPath, w.shell),
			env: w.envVars
		} : {
			command: w.command,
			env: w.env
		};
		e.queueTabIssueCommandSplit(S, x);
	}
}
function applyDefaultTerminalTabs(e, x, S, C, w, T, E, D) {
	if (!T || e.defaultTerminalTabsAppliedByWorktreeId[x] || (e.markDefaultTerminalTabsApplied(x), T.tabs.length === 0)) return null;
	let O = null;
	for (let [C, w] of T.tabs.entries()) {
		let E = C === 0 && S !== void 0, k = E && S?.launchAgent ? S.launchAgent : E && S?.telemetry ? agentKindToTuiAgent(S.telemetry.agent_kind) ?? void 0 : void 0, A = e.createTab(x, void 0, void 0, {
			pendingActivationSpawn: !0,
			recordInteraction: !1,
			...k ? {
				launchAgent: k,
				...initialAgentTabViewModeProps(e.settings ?? null, {
					agent: k,
					...draftViewModeProps(E ? resolveStartupLaunchDraftText(S) : void 0),
					nativeChatTranscriptIsLocalReadable: isNativeChatTranscriptLocalReadable(getConnectionId(x))
				})
			} : {},
			...D?.activateCreatedTabs === !1 ? { activate: !1 } : {}
		});
		C === 0 && (O = A.id), w.title && e.setTabCustomTitle(A.id, w.title, { recordInteraction: !1 }), w.color && e.setTabColor(A.id, w.color);
		let j = w.command?.trim();
		j && T.runCommands && !(C === 0 && S) && e.queueTabStartupCommand(A.id, { command: j });
	}
	if (!O) return null;
	if (D?.activateCreatedTabs !== !1 && e.setActiveTab(O), S) {
		let x = S.launchAgent ?? (S.telemetry ? agentKindToTuiAgent(S.telemetry.agent_kind) ?? void 0 : void 0);
		x && seedNativeChatAppliedSessionOptions(O, x, S.sessionOptions), e.queueTabStartupCommand(O, S);
	}
	return queueSetupAndIssueCommands(e, x, O, C, w, E, D), O;
}
function getSetupRunnerCommandPlatformForLaunch(e) {
	return getSetupRunnerCommandPlatformForPath(e.runnerScriptPath, navigator.userAgent.includes("Windows") ? "windows" : "posix");
}
function reseedGatedEmptyWorkspace(e, x, S) {
	let C = useAppStore.getState();
	x === !0 || C.activeWorktreeId !== e || S !== void 0 && C.activeWorkspaceExecutionHostId !== S || ensureWorktreeHasInitialTerminal(C, e, void 0, void 0, void 0, void 0, { reseedEmptiedWorkspace: !0 });
}
function ensureWorktreeHasInitialTerminal(e, x, S, C, w, T, E) {
	let { renderableTabCount: D } = e.reconcileWorktreeTabModel(x), O = e.settings !== void 0 || e.repos !== void 0 || e.worktreesByRepo !== void 0 ? e : useAppStore.getState(), k = S, A;
	if (S && C?.waitForAgentStartup === !0) {
		let e = getSetupRunnerCommandPlatformForLaunch(C), x = createSequencedSetupAgentCommands({
			runnerScriptPath: C.runnerScriptPath,
			startupCommand: S.command,
			platform: e,
			shell: C.shell
		});
		k = {
			...S,
			command: x.startupCommand,
			...x.startupEnv ? { env: {
				...S.env,
				...x.startupEnv
			} } : {}
		}, A = x.setupCommand;
	}
	let j = E?.backendStartupTerminalSpawned === !0, M = resolveWorkspaceTerminalHostAuthority(O, x);
	if (j || M === "live") {
		let S = e.tabsByWorktree[x]?.[0]?.id;
		return S && (C || w) ? (queueSetupAndIssueCommands(e, x, S, C, w, A, E), S) : S && j ? S : ((C || w) && queueHookCommandsForFirstWorktreeTab({
			worktreeId: x,
			deliver: (e, S) => queueSetupAndIssueCommands(e, x, S, C, w, A, E)
		}), null);
	}
	let N = !!(k || C || w), P = C !== void 0 && (useAppStore.getState().settings?.setupScriptLaunchMode ?? "new-tab") !== "new-tab";
	if (E?.callerProvidesSurface === !0 && D === 0 && !k && !w && !P && !T?.tabs.length && E?.createNewTerminalForStartup !== !0) return queueSetupAndIssueCommands(e, x, null, C, void 0, A, E), null;
	let I = Object.hasOwn(e.tabsByWorktree, x) && E?.reseedEmptiedWorkspace !== !0, L = M === "none" && shouldAutoCreateInitialTerminal(D, I), R = D === 0 && N, z = E?.createNewTerminalForStartup === !0 && k !== void 0;
	if (!L && !R && !z) {
		let S = e.tabsByWorktree[x]?.[0]?.id;
		return S && (C || w) ? (queueSetupAndIssueCommands(e, x, S, C, w, A, E), S) : null;
	}
	let B = applyDefaultTerminalTabs(e, x, k, C, w, T, A, E);
	if (B) return B;
	let V = k?.launchAgent ?? (k?.telemetry ? agentKindToTuiAgent(k.telemetry.agent_kind) ?? void 0 : void 0), H = e.createTab(x, void 0, void 0, {
		pendingActivationSpawn: !0,
		...V ? {
			launchAgent: V,
			...initialAgentTabViewModeProps(e.settings ?? null, {
				agent: V,
				...draftViewModeProps(resolveStartupLaunchDraftText(k)),
				nativeChatTranscriptIsLocalReadable: isNativeChatTranscriptLocalReadable(getConnectionId(x))
			})
		} : {},
		...E?.activateCreatedTabs === !1 ? { activate: !1 } : {}
	});
	return E?.activateCreatedTabs !== !1 && e.setActiveTab(H.id), k && (V && seedNativeChatAppliedSessionOptions(H.id, V, k.sessionOptions), e.queueTabStartupCommand(H.id, k)), queueSetupAndIssueCommands(e, x, H.id, C, w, A, E), H.id;
}
function ensureWebRuntimeWorktreeTerminalAfterWake(e, x) {
	let S = useAppStore.getState(), C = x && "runtimeEnvironmentId" in x ? x.runtimeEnvironmentId ?? null : getRuntimeEnvironmentIdForWorktree(S, e);
	if (!C || !isWebRuntimeSessionActive(C)) return;
	let w = S.tabsByWorktree[e] ?? [], T = x?.startup?.launchAgent ?? x?.agent ?? void 0;
	if (T && w.some((e) => e.launchAgent === T && (isWebTerminalSurfaceTabId(e.id) || tabHasLivePty(S.ptyIdsByTabId, e.id)))) return;
	if (!T) {
		if (w.some((e) => tabHasLivePty(S.ptyIdsByTabId, e.id)) || w.some((e) => isWebTerminalSurfaceTabId(e.id)) || getLastKnownHostTerminalTabCount(C, e) > 0) return;
		let { renderableTabCount: x } = S.reconcileWorktreeTabModel(e);
		if (w.length > 0 && x === 0) return;
	}
	if (!beginWebRuntimeWakeTerminalRespawn(e)) return;
	let E = x?.startup;
	createWebRuntimeSessionTerminal({
		worktreeId: e,
		environmentId: C,
		...T ? initialAgentTabViewModeProps(S.settings, {
			agent: T,
			...draftViewModeProps(resolveStartupLaunchDraftText(E)),
			nativeChatTranscriptIsLocalReadable: isNativeChatTranscriptLocalReadable(getConnectionId(e))
		}) : {},
		...E ? {
			command: E.command,
			...E.env ? { env: E.env } : {},
			...E.launchConfig ? { launchConfig: E.launchConfig } : {},
			...E.launchToken ? { launchToken: E.launchToken } : {},
			...T ? {
				launchAgent: T,
				preparedAgentCommand: !0
			} : {},
			...E.startupCommandDelivery ? { startupCommandDelivery: E.startupCommandDelivery } : {}
		} : T ? { agent: T } : {},
		activate: x?.activate !== !1,
		selectWorktree: !1
	}).then((x) => {
		x.status === "failed" && toast.error(x.message, { id: `web-runtime-worktree-terminal:${C}:${e}` });
	}).finally(() => {
		endWebRuntimeWakeTerminalRespawn(e);
	});
}
function applyWorktreeNavViewEntry(e) {
	if (e === "automations" || e === "artifacts" || e === "skills") {
		useAppStore.getState().setActiveView(e);
		return;
	}
	if (e === "tasks") {
		useAppStore.setState((e) => ({
			activeView: "tasks",
			githubTaskDrawerWorkItem: null,
			taskPageData: {
				...e.taskPageData,
				openGitHubWorkItem: void 0,
				openGitHubSourceContext: void 0,
				openGitHubInitialTab: void 0,
				openGitLabWorkItem: void 0,
				openGitLabSourceContext: void 0,
				openLinearIssue: void 0,
				openLinearSourceContext: void 0,
				openJiraIssue: void 0,
				openJiraSourceContext: void 0
			}
		}));
		return;
	}
	if (e.source === "github") {
		useAppStore.setState((x) => ({
			activeView: "tasks",
			taskPageData: {
				...x.taskPageData,
				taskSource: "github",
				preselectedRepoId: e.workItem.repoId,
				openGitHubWorkItem: e.workItem,
				openGitHubSourceContext: e.sourceContext,
				openGitHubInitialTab: e.initialTab,
				openGitLabWorkItem: void 0,
				openGitLabSourceContext: void 0,
				openLinearIssue: void 0,
				openLinearSourceContext: void 0,
				openJiraIssue: void 0,
				openJiraSourceContext: void 0
			}
		}));
		return;
	}
	if (e.source === "gitlab") {
		useAppStore.setState((x) => ({
			activeView: "tasks",
			githubTaskDrawerWorkItem: null,
			taskPageData: {
				...x.taskPageData,
				taskSource: "gitlab",
				preselectedRepoId: e.workItem.repoId,
				openGitHubWorkItem: void 0,
				openGitHubSourceContext: void 0,
				openGitHubInitialTab: void 0,
				openGitLabWorkItem: e.workItem,
				openGitLabSourceContext: e.sourceContext,
				openLinearIssue: void 0,
				openLinearSourceContext: void 0,
				openJiraIssue: void 0,
				openJiraSourceContext: void 0
			}
		}));
		return;
	}
	if (e.source === "jira") {
		useAppStore.setState((x) => ({
			activeView: "tasks",
			githubTaskDrawerWorkItem: null,
			taskPageData: {
				...x.taskPageData,
				taskSource: "jira",
				openGitHubWorkItem: void 0,
				openGitHubSourceContext: void 0,
				openGitHubInitialTab: void 0,
				openGitLabWorkItem: void 0,
				openGitLabSourceContext: void 0,
				openLinearIssue: void 0,
				openLinearSourceContext: void 0,
				openJiraIssue: e.issue,
				openJiraSourceContext: e.sourceContext
			}
		}));
		return;
	}
	useAppStore.setState((x) => ({
		activeView: "tasks",
		githubTaskDrawerWorkItem: null,
		taskPageData: {
			...x.taskPageData,
			taskSource: "linear",
			openGitHubWorkItem: void 0,
			openGitHubSourceContext: void 0,
			openGitHubInitialTab: void 0,
			openGitLabWorkItem: void 0,
			openGitLabSourceContext: void 0,
			openLinearIssue: e.issue,
			openLinearSourceContext: e.sourceContext,
			openJiraIssue: void 0,
			openJiraSourceContext: void 0
		}
	}));
}
function activationProvidesInitialSurface(e) {
	return e?.providesInitialSurface === !0 || e?.agent != null;
}
var latestReseedIntentByGate = /* @__PURE__ */ new WeakMap();
function gateAndReseedEmptyWorkspace(e, x, S) {
	let C = gateWorktreeAgentActivation(e), w = {
		callerProvidesSurface: x,
		...S ? { executionHostId: S } : {}
	};
	latestReseedIntentByGate.set(C, w), C.then((x) => {
		latestReseedIntentByGate.get(C) === w && (latestReseedIntentByGate.delete(C), x === "empty" && reseedGatedEmptyWorkspace(e, w.callerProvidesSurface, w.executionHostId));
	});
}
function ensureFolderWorkspaceInitialTerminal(e, x, S) {
	return S === !0 && x === void 0 ? null : ensureWorktreeHasInitialTerminal(useAppStore.getState(), folderWorkspaceKey(e.id), x, void 0, void 0, void 0, { reseedEmptiedWorkspace: S !== !0 });
}
function canInspectAgentActivationInventory() {
	return typeof window < "u" && typeof window.api?.runtime?.call == "function" && typeof window.api?.pty?.listSessions == "function";
}
function activateAndRevealFolderWorkspace(e, x) {
	let C = useAppStore.getState(), w = findFolderWorkspaceOwner(C, e, x?.executionHostId), T = C.folderWorkspaces.find((e) => e === w);
	if (!T) return !1;
	let E = x && "runtimeEnvironmentId" in x ? x.runtimeEnvironmentId ?? null : getRuntimeEnvironmentIdForWorktree(C, folderWorkspaceKey(e)), D = C.getFreshFolderWorkspacePathStatus({
		scope: "folder-workspace",
		folderWorkspaceId: e
	}, { runtimeEnvironmentId: E });
	if (folderWorkspaceActivationBlocked(D)) {
		let e = getFolderWorkspacePathStatusTitle(D) ?? translate("auto.lib.worktree.activation.cannotOpenFolderWorkspace", "Cannot open folder workspace");
		return toast.error(e, { description: getFolderWorkspacePathStatusDescription(D) ?? T.folderPath }), !1;
	}
	C.activeView !== "terminal" && C.setActiveView("terminal"), C.setActiveFolderWorkspace(e, x?.executionHostId);
	let O = folderWorkspaceKey(e), k = activationProvidesInitialSurface(x);
	C.markWorktreeVisited(O), C.isNavigatingHistory || C.recordWorktreeVisit(O);
	let A = !x?.startup && (workspaceHasSleepingAgentSessions(C, O) || canInspectAgentActivationInventory() && shouldAutoCreateInitialTerminal(C.reconcileWorktreeTabModel(O).renderableTabCount));
	A || resumeSleepingAgentSessionsForWorktree(O), A && gateAndReseedEmptyWorkspace(O, x?.providesInitialSurface === !0, x?.executionHostId);
	let j = A ? null : ensureFolderWorkspaceInitialTerminal(T, x?.startup, k);
	return x?.revealInSidebar !== !1 && C.revealWorktreeInSidebar(O, x?.sidebarRevealBehavior ? { behavior: x.sidebarRevealBehavior } : void 0), x?.providesInitialSurface !== !0 && ensureWebRuntimeWorktreeTerminalAfterWake(O, {
		runtimeEnvironmentId: E,
		startup: x?.startup,
		agent: x?.agent
	}), { primaryTabId: j };
}
function activateAndRevealWorktree(e, x) {
	let S = useAppStore.getState(), C = S.getKnownWorktreeById(e, x?.executionHostId);
	if (!C) return !1;
	let w = !!(x?.startup || x?.setup || x?.defaultTabs || x?.issueCommand), T = activationProvidesInitialSurface(x), E = !w && S.activeRepoId === C.repoId && S.activeWorktreeId === e && S.activeWorkspaceExecutionHostId === (x?.executionHostId ?? null) && S.activeView === "terminal";
	C.repoId !== S.activeRepoId && S.setActiveRepo(C.repoId), S.activeView !== "terminal" && S.setActiveView("terminal"), S.setActiveWorktree(e, x?.executionHostId);
	let D = useAppStore.getState(), O = getRuntimeEnvironmentIdForWorktree(D, C.id);
	x?.notifyHostRuntime !== !1 && isWebRuntimeSessionActive(O) && activateWebRuntimeSessionWorktree({
		worktreeId: e,
		environmentId: O
	}), E || S.markWorktreeVisited(e), !E && !S.isNavigatingHistory && S.recordWorktreeVisit(e);
	let k = !w && (workspaceHasSleepingAgentSessions(D, e) || canInspectAgentActivationInventory() && shouldAutoCreateInitialTerminal(D.reconcileWorktreeTabModel(e).renderableTabCount));
	k || resumeSleepingAgentSessionsForWorktree(e), k && gateAndReseedEmptyWorkspace(e, x?.providesInitialSurface === !0, x?.executionHostId);
	let A = k || T && !w ? null : ensureWorktreeHasInitialTerminal(useAppStore.getState(), e, x?.startup, x?.setup, x?.issueCommand, x?.defaultTabs, {
		...x?.backendStartupTerminalSpawned ? { backendStartupTerminalSpawned: !0 } : {},
		...x?.createNewTerminalForStartup ? { createNewTerminalForStartup: !0 } : {},
		...T ? { callerProvidesSurface: !0 } : {},
		reseedEmptiedWorkspace: !T
	});
	return A && x?.initialCwd && useAppStore.getState().queueTabInitialCwd(A, x.initialCwd), x?.clearSidebarFilters !== !1 && (revealRepoInProjectFilter(S, C.repoId), S.hideAutomationGeneratedWorkspaces && C.automationProvenance?.kind === "created-by-automation" && S.setHideAutomationGeneratedWorkspaces(!1), S.hideCliCreatedWorkspaces && C.cliProvenance?.kind === "created-by-cli" && S.setHideCliCreatedWorkspaces(!1), S.hideDetachedHeadWorkspaces && isDetachedHeadWorkspace(C) && S.setHideDetachedHeadWorkspaces(!1)), x?.revealInSidebar !== !1 && (x?.sidebarRevealBehavior || x?.executionHostId ? S.revealWorktreeInSidebar(e, {
		...x.sidebarRevealBehavior ? { behavior: x.sidebarRevealBehavior } : {},
		...x.executionHostId ? { executionHostId: x.executionHostId } : {}
	}) : S.revealWorktreeInSidebar(e)), x?.notifyHostRuntime !== !1 && !x?.backendStartupTerminalSpawned && x?.providesInitialSurface !== !0 && ensureWebRuntimeWorktreeTerminalAfterWake(e, {
		startup: x?.startup,
		agent: x?.agent
	}), { primaryTabId: A };
}
function activateAndRevealWorkspace(e, x) {
	let S = parseWorkspaceKey(e);
	return S?.type === "folder" ? activateAndRevealFolderWorkspace(S.folderWorkspaceId, x) : activateAndRevealWorktree(e, x);
}
registerWorktreeActivation(activateAndRevealWorkspace, applyWorktreeNavViewEntry);
export { isPinnedSectionWorktree as $, recordPaneIsOwnedByPreservedPane as $t, computeProjectHeaderDropPreview as A, getVisibleWorkspaceHostIdSet as At, getWorktreeSidebarDragAutoscroll as B, resolveTerminalTabIdForPtyId as Bt, getFolderWorkspaceExecutionHostIdForRows as C, compareWorktreeSortLabel as Ct, getPreferredWorktreeRows as D, collectTabPaneInputs as Dt, selectWorktreeListReviewCacheInputs as E, buildExplicitEntriesByTabId as Et, mapSidebarProjectHeaderDropIndexToSiblingInsertIndex as F, isDetachedHeadWorkspace as Ft, getSidebarHostHealthLabel as G, sleepingRecordNamesAnotherExecutionHost as Gt, refreshWorktreeSidebarDragSession as H, resumeSleepingAgentSessionsForWorktree as Ht, mapSidebarRepoDropIndexToAllRepoInsertAt as I, isSleepingSweepExemptWorkspace as It, buildExecutionHostRegistry as J, buildWindowsPtyCompatibilityOptions as Jt, getSidebarHostVisibilityLabel as K, resolveAgentResumeLaunchTarget as Kt, measureProjectHeaderDragRects as L, isSleepingSweepExemptionNarrowingList as Lt, getProjectGroupOrderForSidebarDrop as M, sidebarHasActiveFilters as Mt, getProjectHeaderDragBucketKey as N, isAutomationGeneratedWorkspace as Nt, getRenderedWorktreesInSidebarOrder as O, hasFreshAttributedAgentStatus as Ot, getSidebarOrderedRepoHeaderIdsByBucket as P, isCliCreatedWorkspace as Pt, getPinnedWorktreeDisplayPolicy as Q, isPassiveCompletedHibernationEvidence as Qt, computeWorktreeSidebarHeaderDropPreview as R, shouldAutoCreateInitialTerminal as Rt, getFolderPathStatusRouteOptionsForRows as S, buildWorktreeSortLabels as St, getVisibleSidebarHostIdSet as T, buildAttentionByWorktree as Tt, buildSidebarHostOptions as U, createWorkspaceTerminalHostAuthoritySelector as Ut, getWorktreeSidebarDragRectsForGroup as V, resolveTerminalTabPtyOwnership as Vt, buildSidebarHostScopeOptions as W, agentResumeOriginNamesAnotherExecutionHost as Wt, addHostSectionRows as X, resolveWindowsShellOverride as Xt, orderHostSectionOptions as Y, isLocalNativeWindowsConpty as Yt, buildRows as Z, getProviderSessionClaimKey as Zt, filterFolderWorkspacesFromOtherDevices as _, getWorktreeLineageGroupKey as _t, ensureWorktreeHasInitialTerminal as a, Ban as an, getProjectHeaderRevealTarget as at, filterFolderWorkspacesForVisibleHosts as b, isInactiveWorkspace as bt, getSetupRunnerCommandPlatformForPath as c, getWorkspaceStatusVisualMeta as ct, computeVisibleWorktrees as d, writeWorkspaceDragData as dt, Timer as en, getFolderWorkspaceLaneKey as et, getVisibleWorktreeShortcutTargets as f, getWorkspaceStatusIconOptions as ft, EMPTY_PAIRED_DEVICE_IDS_BY_ENVIRONMENT as g, getProjectGroupHeaderKey as gt, isDefaultBranchWorkspace as h, getLineageGroupKey as ht, ensureWebRuntimeWorktreeTerminalAfterWake as i, CircleDot as in, getFolderWorkspaceHostId as it, getLogicalRepoOrderRankById as j, computeClearFilterActions as jt, applyAllRepoInsertAt as k, resolveAttention as kt, revealRepoInProjectFilter as l, hasWorkspaceDragData as lt, setVisibleWorktreeShortcutTargets as m, PINNED_GROUP_KEY as mt, activateAndRevealWorkspace as n, Flag as nn, getRepoDisplayLabelKey as nt, queueHookCommandsForFirstWorktreeTab as o, getHostContextLabel as ot, setVisibleWorktreeIds as p, ALL_GROUP_KEY as pt, shouldShowHostScopeControls as q, buildLocalConptyTerminalOptions as qt, activateAndRevealWorktree as r, CirclePlay as rn, getRepoDisplayLabelsByPath as rt, buildSetupRunnerCommand$1 as s, getWorkspaceStatusColorOptions as st, activateAndRevealFolderWorkspace as t, FolderTree as tn, getGroupKeysForWorktree as tt, buildVisibleWorktreeOptionsFromState as u, readWorkspaceDragDataIds as ut, getPairedDeviceIdsByEnvironment as v, getLiveAgentStatusByWorktreeId as vt, getProjectGroupExecutionHostIdForRows as w, sortWorktreesSmart as wt, filterProjectGroupsForVisibleHosts as x, buildWorktreeComparator as xt, isWorkspaceFromOtherDevice as y, getWorktreeIdsWithLiveAgent as yt, getWorktreeSidebarBoundaryDrop as z, gateWorktreeAgentActivation as zt };
