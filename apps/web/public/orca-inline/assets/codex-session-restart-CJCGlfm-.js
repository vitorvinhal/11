import { i as translate } from "./i18n-CakWKPtl.js";
import { Bl as getLocalProjectExecutionRuntimeContext, Fl as isWslShellName, Il as resolveLocalWindowsTerminalRuntimeOptions, Kl as hasCachedWindowsTerminalCapabilities, O_ as parseAppSshPtyId, Wl as getCachedWindowsTerminalCapabilities, Yv as getActiveRuntimeTarget, hb as FLOATING_TERMINAL_WORKTREE_ID, ib as parseWslUncPath, kp as parseRemoteRuntimePtyId, nb as resolveRuntimePath, ou as isShellProcess, t as useAppStore, vv as parseWorkspaceKey } from "./store-C9f8FDJV.js";
import { t as getRendererAppPlatform } from "./renderer-app-platform--nJ6HYmL.js";
import { d as isClientOnlyUnverifiableInspection, i as recognizeAgentProcess, o as confirmRuntimeTerminalForegroundProcess, s as inspectRuntimeTerminalProcess, t as isAgentForegroundWrapperProcess } from "./agent-process-recognition-BUFJTuDF.js";
const TOGGLE_FLOATING_TERMINAL_EVENT = "orca-toggle-floating-terminal";
var openMaximizedIntentAt = null, OPEN_MAXIMIZED_INTENT_TTL_MS = 2e3;
function requestFloatingTerminalOpenMaximized() {
	openMaximizedIntentAt = Date.now();
}
function consumeFloatingTerminalOpenMaximizedIntent() {
	if (openMaximizedIntentAt === null) return !1;
	let v = openMaximizedIntentAt;
	return openMaximizedIntentAt = null, Date.now() - v <= OPEN_MAXIMIZED_INTENT_TTL_MS;
}
function normalizeCodexAccountEmail(v) {
	return (v ?? "").trim().toLowerCase();
}
function getCodexAccountDisplayDetail(v, q) {
	let J = v.workspaceLabel?.trim() || null, Y = normalizeCodexAccountEmail(v.email), X = q.filter((q) => q.id !== v.id && normalizeCodexAccountEmail(q.email) === Y), Z = [J, ...X.map((v) => v.workspaceLabel?.trim() || null)];
	if (X.length === 0 || Z.every(Boolean) && new Set(Z).size === Z.length) return J;
	let Q = Math.min(8, v.id.length);
	for (; Q < v.id.length && X.some((q) => q.id.slice(0, Q) === v.id.slice(0, Q));) Q += 1;
	let $ = v.id.slice(0, Q);
	return J ? `${J} · ${$}` : $;
}
function getCodexAccountDisplayLabel(v, q) {
	let J = getCodexAccountDisplayDetail(v, q);
	return J ? `${v.email} (${J})` : v.email;
}
function normalizeProcessName(v) {
	return v ? v.toLowerCase().replace(/\.exe$/, "") : null;
}
function isCodexForegroundProcess(v) {
	let q = normalizeProcessName(v);
	return q ? q === "codex" || q.startsWith("codex-") : !1;
}
function isCodexRestartEligiblePane(v) {
	if (isClientOnlyUnverifiableInspection(v.inspection)) return !1;
	let { foregroundProcess: q, hasChildProcesses: J } = v.inspection;
	return isCodexForegroundProcess(q) ? !0 : v.launchAgent !== "codex" || q === null || !J || isShellProcess(q) ? !1 : recognizeAgentProcess(q) !== null || isAgentForegroundWrapperProcess(q);
}
function normalizeCodexAccountSelectionTarget(v) {
	return v?.runtime === "wsl" ? {
		runtime: "wsl",
		wslDistro: normalizeWslDistro(v.wslDistro)
	} : {
		runtime: "host",
		wslDistro: null
	};
}
function getCodexSelectionLaneKey(v) {
	let q = normalizeCodexAccountSelectionTarget(v);
	return q.runtime === "host" ? "host" : `wsl:${getWslSelectionKey(q.wslDistro)}`;
}
function getWslSelectionKey(v) {
	return normalizeWslDistro(v) ?? "__default__";
}
function normalizeWslDistro(v) {
	return v?.trim() || null;
}
function resolveTerminalStartupCwd(v, q, J) {
	let Y = q?.trim();
	if (!Y) return;
	let X = resolveRuntimePath(v, Y);
	return J && X !== v && !J.directoryExists(X) && J.directoryExists(v) ? (J.onFallbackToWorkspaceRoot?.(X), v) : X;
}
var RUNTIME_ENVIRONMENT_LANE_PREFIX = "env:", SSH_CONNECTION_LANE_KEY = "ssh-connection", UNATTRIBUTED_REMOTE_LANE_KEY = "remote-runtime", HOST_LANE_KEY = "host", WSL_LANE_PREFIX = "wsl:";
function isLocalCodexSelectionLaneKey(v) {
	return v === HOST_LANE_KEY || v.startsWith(WSL_LANE_PREFIX);
}
function isForeignMachineCodexPtyId(v) {
	return parseRemoteRuntimePtyId(v) !== null || parseAppSshPtyId(v) !== null;
}
function getCodexAccountSwitchLaneMatcher(v) {
	let q = getActiveRuntimeTarget(v.settings);
	if (q.kind === "environment") {
		let v = `${RUNTIME_ENVIRONMENT_LANE_PREFIX}${q.environmentId}`;
		return (q) => q === v;
	}
	let J = normalizeCodexAccountSelectionTarget(v.target);
	if (v.clearsEveryWslDistro && J.runtime === "wsl" && J.wslDistro === null) return (v) => v.startsWith(WSL_LANE_PREFIX);
	let Y = getCodexSelectionLaneKey(J);
	return (v) => v === Y;
}
function resolveCodexPaneSelectionLane(v) {
	let q = v.recordedLaneKey?.trim();
	if (!(q && isLocalCodexSelectionLaneKey(q) && !isForeignMachineCodexPtyId(v.ptyId))) {
		let q = resolveCodexPaneSelectionLaneKey(v);
		return {
			laneKey: q,
			source: "derived",
			derivedLaneKey: q
		};
	}
	let J = deriveLaneKeyForDiagnostics(v);
	return J !== null && J !== q && console.warn("[codex-lane] recorded launch lane disagrees with the derived one:", {
		ptyId: v.ptyId,
		recorded: q,
		derived: J
	}), {
		laneKey: q,
		source: "recorded",
		derivedLaneKey: J
	};
}
function deriveLaneKeyForDiagnostics(v) {
	try {
		return resolveCodexPaneSelectionLaneKey(v);
	} catch {
		return null;
	}
}
function resolveCodexPaneSelectionLaneKey(v) {
	let q = parseRemoteRuntimePtyId(v.ptyId);
	if (q !== null) {
		let J = getActiveRuntimeTarget(v.state.settings), Y = q.environmentId?.trim() || (J.kind === "environment" ? J.environmentId : null);
		return Y ? `${RUNTIME_ENVIRONMENT_LANE_PREFIX}${Y}` : UNATTRIBUTED_REMOTE_LANE_KEY;
	}
	return parseAppSshPtyId(v.ptyId) === null ? getCodexSelectionLaneKey(resolveLocalPaneSelectionTarget(v)) : SSH_CONNECTION_LANE_KEY;
}
function resolveLocalPaneSelectionTarget(v) {
	let q = resolvePaneCwd(v), Y = q ? parseWslUncPath(q) : null;
	if (Y) return {
		runtime: "wsl",
		wslDistro: Y.distro
	};
	let X = resolveLocalPaneTerminalRuntime(v);
	return isWslShellName(X.shellOverride) ? {
		runtime: "wsl",
		wslDistro: X.terminalWindowsWslDistro
	} : { runtime: "host" };
}
function resolvePaneCwd(v) {
	if (v.tab.worktreeId === "global-floating-terminal") return null;
	let q = getWorkspacePath(v.state, v.tab.worktreeId);
	return q ? resolveTerminalStartupCwd(q, v.tab.startupCwd) ?? q : null;
}
function resolveLocalPaneTerminalRuntime(v) {
	if (getRendererAppPlatform() !== "win32") return {
		shellOverride: v.tab.shellOverride,
		terminalWindowsWslDistro: null
	};
	let J = hasCachedWindowsTerminalCapabilities() ? getCachedWindowsTerminalCapabilities() : null, Z = getLocalProjectExecutionRuntimeContext(v.state, v.tab.worktreeId, void 0, {
		wslAvailable: J?.wslAvailable,
		availableWslDistros: J?.wslDistros ?? null
	});
	return Z?.status === "repair-required" ? {
		shellOverride: "wsl.exe",
		terminalWindowsWslDistro: Z.repair.preferredRuntime.distro
	} : resolveLocalWindowsTerminalRuntimeOptions({
		requestedShellOverride: v.tab.shellOverride,
		settings: v.state.settings ?? void 0,
		projectRuntime: Z
	});
}
function getWorkspacePath(v, q) {
	let J = parseWorkspaceKey(q);
	return J?.type === "folder" ? (v.folderWorkspaces ?? []).find((v) => v.id === J.folderWorkspaceId)?.folderPath ?? null : Object.values(v.worktreesByRepo ?? {}).flat().find((v) => v.id === q)?.path ?? null;
}
const CODEX_ACCOUNT_RESTART_STARTUP = {
	command: "codex",
	startupCommandDelivery: "shell-ready",
	launchAgent: "codex"
};
async function readRecordedCodexPaneLanes(v) {
	let q = v.filter((v) => !isForeignMachineCodexPtyId(v));
	if (q.length === 0) return {};
	let J = window.api.codexAccounts.listRecordedPaneLanes;
	return typeof J == "function" ? await J({ ptyIds: q }).catch(() => ({})) : {};
}
async function isConfirmedCodexForegroundDespiteShellReading(v, q, J, Y) {
	return J !== "codex" || isClientOnlyUnverifiableInspection(Y) || Y.foregroundProcess === null || !isShellProcess(Y.foregroundProcess) ? !1 : isCodexForegroundProcess(await confirmRuntimeTerminalForegroundProcess(v.settings, q));
}
async function scanCodexPanes(v, q) {
	let J = Object.values(v.tabsByWorktree).flat().flatMap((J) => (v.ptyIdsByTabId[J.id] ?? []).filter((v) => q.ptyIdFilter === null || q.ptyIdFilter.has(v)).map((v) => ({
		tab: J,
		ptyId: v
	}))), Y = await readRecordedCodexPaneLanes(J.map((v) => v.ptyId));
	return Promise.all(J.map(async ({ tab: J, ptyId: X }) => {
		let Z = resolveCodexPaneSelectionLane({
			state: v,
			tab: J,
			ptyId: X,
			recordedLaneKey: Y[X]
		});
		if (!q.isLaneInScope(Z.laneKey)) return {
			ptyId: X,
			eligible: !1,
			inconclusive: !1,
			launchedCodex: !1,
			notified: !1,
			laneKey: Z.laneKey,
			laneSource: Z.source
		};
		let Q = await inspectRuntimeTerminalProcess(v.settings, X).then((v) => v, () => null);
		return {
			ptyId: X,
			eligible: Q !== null && (isCodexRestartEligiblePane({
				inspection: Q,
				launchAgent: J.launchAgent
			}) || await isConfirmedCodexForegroundDespiteShellReading(v, X, J.launchAgent, Q)),
			inconclusive: Q === null || isClientOnlyUnverifiableInspection(Q),
			launchedCodex: J.launchAgent === "codex",
			notified: !1,
			laneKey: Z.laneKey,
			laneSource: Z.source
		};
	}));
}
async function markLiveCodexSessionsForRestart(v) {
	let q = useAppStore.getState(), J = await scanCodexPanes(q, {
		ptyIdFilter: null,
		isLaneInScope: getCodexAccountSwitchLaneMatcher({
			settings: q.settings,
			target: v.target,
			clearsEveryWslDistro: v.clearsEveryWslDistro
		})
	});
	if (J.filter((v) => v.eligible).map((v) => v.ptyId).length === 0) return;
	let Y = J.filter((v) => v.eligible && v.laneSource === "recorded"), X = Y.length === 0 ? null : await window.api.codexAccounts.listStalePanes({ ptyIds: Y.map((v) => v.ptyId) }).catch(() => null), Z = X ? new Map(X.map((v) => [v.ptyId, v])) : null;
	if (Z) for (let v of Y) Z.has(v.ptyId) || useAppStore.getState().clearCodexRestartNotice(v.ptyId);
	useAppStore.getState().markCodexRestartNotices(J.flatMap((q) => {
		if (!q.eligible) return [];
		if (Z && q.laneSource === "recorded") {
			let J = Z.get(q.ptyId);
			return J ? [{
				ptyId: q.ptyId,
				previousAccountLabel: v.previousAccountLabel,
				nextAccountLabel: v.nextAccountLabel,
				previousAccountId: J.launchAccountId,
				nextAccountId: J.activeAccountId,
				homeRouteChanged: J.reason === "home-route-change"
			}] : [];
		}
		return [{
			ptyId: q.ptyId,
			previousAccountLabel: v.previousAccountLabel,
			nextAccountLabel: v.nextAccountLabel,
			...v.previousAccountId === void 0 ? {} : { previousAccountId: v.previousAccountId },
			...v.nextAccountId === void 0 ? {} : { nextAccountId: v.nextAccountId }
		}];
	}));
}
async function markRestoredStaleCodexSessionsForRestart(v) {
	let q = await scanCodexPanes(useAppStore.getState(), {
		ptyIdFilter: v?.ptyIds ? new Set(v.ptyIds) : null,
		isLaneInScope: isLocalCodexSelectionLaneKey
	}), J = q.filter((v) => v.eligible).map((v) => v.ptyId);
	if (J.length === 0) return q;
	let Y = await window.api.codexAccounts.listStalePanes({ ptyIds: J });
	if (Y.length === 0) return q;
	let X = await createCodexAccountLabelResolver(), Z = useAppStore.getState().markCodexRestartNotices(Y.map((v) => ({
		ptyId: v.ptyId,
		previousAccountLabel: X(v.launchAccountId),
		nextAccountLabel: X(v.activeAccountId),
		previousAccountId: v.launchAccountId,
		nextAccountId: v.activeAccountId,
		...v.reason === "home-route-change" ? { homeRouteChanged: !0 } : {}
	}))), Q = new Set(Z);
	return q.map((v) => Q.has(v.ptyId) ? {
		...v,
		notified: !0
	} : v);
}
function resolveCodexRestartPromptAccountLabel(q, J) {
	if (J == null) return translate("auto.lib.codex.session.restart.4bd4a3a9c7", "System default");
	let Y = q.find((v) => v.id === J);
	if (!Y) return translate("auto.lib.codex.session.restart.9f0b1c2d3e", "Codex account");
	let X = normalizeCodexAccountEmail(Y.email);
	return q.some((v) => v.id !== Y.id && normalizeCodexAccountEmail(v.email) === X) ? getCodexAccountDisplayLabel(Y, q) : Y.email;
}
async function createCodexAccountLabelResolver() {
	let v = await window.api.codexAccounts.list().catch(() => null);
	return (q) => resolveCodexRestartPromptAccountLabel(v?.accounts ?? [], q);
}
export { isForeignMachineCodexPtyId as a, TOGGLE_FLOATING_TERMINAL_EVENT as c, resolveCodexRestartPromptAccountLabel as i, consumeFloatingTerminalOpenMaximizedIntent as l, markLiveCodexSessionsForRestart as n, getCodexAccountDisplayDetail as o, markRestoredStaleCodexSessionsForRestart as r, getCodexAccountDisplayLabel as s, CODEX_ACCOUNT_RESTART_STARTUP as t, requestFloatingTerminalOpenMaximized as u };
