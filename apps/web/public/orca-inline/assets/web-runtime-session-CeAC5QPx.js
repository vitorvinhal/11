import { i as translate } from "./i18n-CakWKPtl.js";
import { $v as getRuntimeEnvironmentRevision, At as WEB_SESSION_TAB_RPC_TIMEOUT_MS, CC as BROWSER_CLIENT_AUTOMATION_RUNTIME_CAPABILITY, Ct as clearWebSessionCloseIntent, DC as BROWSER_NETWORK_TUNNEL_RUNTIME_CAPABILITY, Dt as makeWebSessionCloseIntentDurable, EC as BROWSER_NETWORK_EXECUTION_HOSTS_RUNTIME_CAPABILITY, Fd as toHostSessionTabId, Id as toWebTerminalSurfaceTabId, Ih as parsePaneKey, Im as peekWebSessionFocusIntent, Jv as runtimeEnvironmentSupportsCapability, Kc as toRemoteRuntimeClientErrorLike, Ku as e2eConfig, Lb as DESKTOP_TERMINAL_SCROLLBACK_ROWS_DEFAULT, Lm as recordWebSessionFocusIntent, Pd as isWebTerminalSurfaceTabId, Ph as makePaneKey, Pm as clearWebSessionFocusIntentIfMatches, Rf as getRuntimeEnvironmentIdForWorktree, Sy as toRuntimeWorktreeSelector, TC as BROWSER_CLIENT_PAGE_METADATA_RUNTIME_CAPABILITY, Tt as clearWebSessionCloseIntentsForWorktree, U as assertRuntimeManagedBrowserCreationAvailable, Vm as webSessionIntentOwnerKey, Wc as isRecoverableRemoteRuntimeConnectionError, Zg as getRuntimeEnvironmentConnectionGeneration, dC as AGENT_SESSION_HOST_AUTHORITY_RUNTIME_CAPABILITY, ey as RuntimeRpcCallError, fC as AGENT_SESSION_KEYBOARD_RUNTIME_CAPABILITY, hb as FLOATING_TERMINAL_WORKTREE_ID, iC as parseExecutionHostId, iy as isRuntimeCompatBlockError, kC as BROWSER_TAB_CREATE_KNOWN_ID_RUNTIME_CAPABILITY, kp as parseRemoteRuntimePtyId, kt as recordWebSessionCloseIntent, mC as AGENT_SESSION_OMP_RESUME_PATH_RUNTIME_CAPABILITY, ny as hasRuntimeRpcErrorCode, oC as toRuntimeExecutionHostId, pC as AGENT_SESSION_KIMI_RESUME_RUNTIME_CAPABILITY, ry as callRuntimeEnvironmentWithRevision, t as useAppStore, ty as unwrapRuntimeRpcResult, vs as resolveRootlessTerminalLayoutLeafId, wC as BROWSER_CLIENT_HOST_RUNTIME_CAPABILITY, zm as resolveWebSessionVisibleTabId, zo as LIGHT_BG_MIN_CONTRAST } from "./store-C9f8FDJV.js";
import { D as createBrowserUuid } from "./renderer-app-platform--nJ6HYmL.js";
import { D as _null, F as object, I as record, L as string, M as lazy, N as literal, O as array, P as number, R as union, k as boolean } from "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as pasteDraftWhenAgentReady, j as agentDeliversDraftViaNativePrefill } from "./agent-paste-draft-Ddp-k6QZ.js";
import { n as clearWebAgentSessionHandoffsForEnvironment, r as clearWebAgentSessionHandoffsForWorktree, s as resolveWebAgentSessionHandoff } from "./web-agent-session-handoff-f0A-yvKF.js";
import { r as FOCUS_TERMINAL_PANE_EVENT } from "./terminal-_vGmMZGb.js";
function isWebRuntimeSessionActive(e) {
	return !!e?.trim();
}
function captureRuntimeEnvironmentCall(e, x = getRuntimeEnvironmentRevision(e)) {
	return (b) => window.api.runtimeEnvironments.call({
		selector: e,
		...b,
		expectedEnvironmentPairingRevision: x
	});
}
function captureWebSessionIntentOwner(e) {
	return {
		environmentId: e,
		pairingRevision: getRuntimeEnvironmentRevision(e)
	};
}
function matchesWebSessionIntentOwner(e) {
	return getRuntimeEnvironmentRevision(e.environmentId) === e.pairingRevision;
}
const AGENT_TUI_CLEAR_INPUT_LINE = "";
function buildAgentTuiClearInput(e) {
	let b = 2 * Math.max(1, Math.min(40, Math.floor(e))) - 1;
	return "".repeat(b) + "\v".repeat(b);
}
const AGENT_TUI_CLEAR_INPUT_MAX = buildAgentTuiClearInput(40);
function countAgentTuiInputLines(e) {
	return e.split(/\r\n|\r|\n/).length;
}
function buildAgentTuiClearInputForText(e) {
	return buildAgentTuiClearInput(countAgentTuiInputLines(e) + 8);
}
function canMirrorLaunchDraftToNativeChat(e) {
	return e.trim().length > 0 && !/[\u2028\u2029]/.test(e) && countAgentTuiInputLines(e) <= 40;
}
const NATIVE_CHAT_SUPPORTED_AGENT_LIST = [
	"claude",
	"openclaude",
	"codex",
	"grok",
	"omp"
], NATIVE_CHAT_SUPPORTED_AGENTS = new Set(NATIVE_CHAT_SUPPORTED_AGENT_LIST);
function isNativeChatSupportedAgent(e) {
	return e != null && NATIVE_CHAT_SUPPORTED_AGENTS.has(e);
}
function nativeChatRequiresLocalTranscript(e) {
	let b = resolveNativeChatTranscriptAgent(e);
	return b === "grok" || b === "omp";
}
function shouldStepNativeChatAskAnswer(e) {
	let b = resolveNativeChatTranscriptAgent(e);
	return b === "claude" || b === "codex";
}
function resolveNativeChatTranscriptAgent(e) {
	return e === "claude" || e === "openclaude" ? "claude" : e === "codex" || e === "grok" || e === "omp" ? e : null;
}
function seedNativeChatLaunchDraftForAgentTab(e) {
	!canMirrorLaunchDraftToNativeChat(e.text) || !isNativeChatSupportedAgent(e.agent) || useAppStore.getState().seedNativeChatLaunchDraft({
		tabId: e.tabId,
		agent: e.agent,
		text: e.text,
		createdAt: Date.now()
	});
}
function deliverLaunchPromptToAgentTab(e) {
	let { tabId: b, agent: x, content: S, submit: C, forcePaste: w, timeoutMs: T, onTimeout: E } = e, D = C === !0 && S.trim().length > 0 && isNativeChatSupportedAgent(x);
	D ? useAppStore.getState().seedNativeChatLaunchPrompt({
		tabId: b,
		agent: x,
		text: S,
		createdAt: Date.now()
	}) : C !== !0 && seedNativeChatLaunchDraftForAgentTab({
		tabId: b,
		agent: x,
		text: S
	});
	let O = agentDeliversDraftViaNativePrefill(x, w);
	return pasteDraftWhenAgentReady({
		tabId: b,
		content: S,
		agent: x,
		submit: C,
		forcePaste: w,
		timeoutMs: T,
		onTimeout: E
	}).then((e) => (D && !e && !O && useAppStore.getState().markNativeChatLaunchPromptFailed(b), e || O), (e) => {
		throw D && !O && useAppStore.getState().markNativeChatLaunchPromptFailed(b), e;
	});
}
const DEFAULT_TERMINAL_SCROLL_SENSITIVITY = 1.15, DEFAULT_TERMINAL_FAST_SCROLL_SENSITIVITY = 5;
function normalizeTerminalScrollSensitivity(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.min(10, Math.max(.1, e)) : DEFAULT_TERMINAL_SCROLL_SENSITIVITY;
}
function normalizeTerminalFastScrollSensitivity(e) {
	return typeof e == "number" && Number.isFinite(e) ? Math.min(20, Math.max(1, e)) : 5;
}
function resolveTerminalCursorInactiveStyle(e) {
	return (e ?? "block") === "block" ? "outline" : e ?? "block";
}
function buildDefaultTerminalOptions() {
	let e = "block";
	return {
		allowProposedApi: !0,
		cursorBlink: !0,
		cursorStyle: e,
		cursorInactiveStyle: resolveTerminalCursorInactiveStyle(e),
		fontSize: 14,
		fontFamily: "\"SF Mono\", \"Menlo\", \"Monaco\", \"Cascadia Mono\", \"Consolas\", \"DejaVu Sans Mono\", \"Liberation Mono\", \"Symbols Nerd Font Mono\", \"MesloLGS Nerd Font\", \"JetBrainsMono Nerd Font\", \"Hack Nerd Font\", monospace",
		fontWeight: "300",
		fontWeightBold: "500",
		scrollback: DESKTOP_TERMINAL_SCROLLBACK_ROWS_DEFAULT,
		scrollSensitivity: DEFAULT_TERMINAL_SCROLL_SENSITIVITY,
		fastScrollSensitivity: 5,
		allowTransparency: !1,
		minimumContrastRatio: LIGHT_BG_MIN_CONTRAST,
		macOptionIsMeta: !1,
		macOptionClickForcesSelection: !0,
		drawBoldTextInBrightColors: !0,
		scrollbar: { width: 7 },
		vtExtensions: { kittyKeyboard: !0 }
	};
}
function createAgentSessionKeyboardOptions(e) {
	let b;
	return (x) => (b ??= (async () => {
		if (e !== !0) return {};
		try {
			return await runtimeEnvironmentSupportsCapability(x, "agent-session.keyboard.v1") ? { terminalKittyKeyboardProtocol: !0 } : {};
		} catch (e) {
			if (isRuntimeCompatBlockError(e)) throw e;
			return {};
		}
	})(), b);
}
var RESUME_HOST_AUTHORITY_CAPABILITY_BY_AGENT = {
	claude: void 0,
	codex: void 0,
	gemini: void 0,
	antigravity: void 0,
	opencode: void 0,
	pi: void 0,
	"mimo-code": void 0,
	droid: void 0,
	grok: void 0,
	devin: void 0,
	"prime-agent": void 0,
	copilot: void 0,
	omp: AGENT_SESSION_OMP_RESUME_PATH_RUNTIME_CAPABILITY,
	kimi: AGENT_SESSION_KIMI_RESUME_RUNTIME_CAPABILITY
};
function agentResumeHostAuthorityCapability(e) {
	if (e) return RESUME_HOST_AUTHORITY_CAPABILITY_BY_AGENT[e];
}
function randomOperationNonce() {
	let e = globalThis.crypto;
	if (!e?.getRandomValues) throw Error("Secure randomness is unavailable for this agent launch.");
	let b = new Uint8Array(16);
	return e.getRandomValues(b), Array.from(b, (e) => e.toString(16).padStart(2, "0")).join("");
}
function createAgentSessionOperationId(e = Date.now()) {
	return `${e}-${randomOperationNonce()}`;
}
var MAX_AMBIGUOUS_CREATE_ATTEMPTS = 2;
function isAmbiguousCreateFailure(e) {
	return !(e instanceof RuntimeRpcCallError) && !(e instanceof Error && e.name === "AbortError");
}
function createAgentSessionCreateOperation() {
	let e = createAgentSessionOperationId();
	return {
		clientOperationId: e,
		async run(b) {
			let x;
			for (let S = 0; S < MAX_AMBIGUOUS_CREATE_ATTEMPTS; S += 1) try {
				return await b(e);
			} catch (e) {
				if (x = e, !isAmbiguousCreateFailure(e)) throw e;
			}
			throw x;
		}
	};
}
function toAgentLaunchPreferences(e) {
	if (!e) return;
	let b = (b) => {
		let x = e[b];
		return typeof x == "string" && x.trim() ? x.trim() : void 0;
	}, x = b("model"), S = b("effort"), C = b("mode"), w = {
		...x ? { model: x } : {},
		...S ? { effort: S } : {},
		...C ? { mode: C } : {}
	};
	return Object.keys(w).length > 0 ? w : void 0;
}
function withAgentSessionCreateOperationId(e, b) {
	return {
		...e,
		clientOperationId: b
	};
}
async function runRemoteAgentSessionLaunch(e) {
	if (!e.hostAuthority) return await e.legacy({ skipCompatibilityCheck: !1 });
	let b;
	try {
		b = await runtimeEnvironmentSupportsCapability(e.environmentId, e.hostAuthorityCapability ?? "agent-session.host-authority.v1");
	} catch (b) {
		if (isRuntimeCompatBlockError(b)) throw b;
		return await e.legacy({ skipCompatibilityCheck: !0 });
	}
	if (!b) return await e.legacy({ skipCompatibilityCheck: !0 });
	try {
		return await e.hostAuthority();
	} catch (b) {
		if (b instanceof RuntimeRpcCallError && (b.code === "agent_session_legacy_required" || b.code === "method_not_found")) return await e.legacy({ skipCompatibilityCheck: !0 });
		throw b;
	}
}
function resolveWebRuntimeSessionEnvironmentId(e, b) {
	return e === void 0 ? b?.trim() || null : e?.trim() || null;
}
function selectionsMatch(e, b) {
	return e.worktreeId === b.worktreeId && e.executionHostId === b.executionHostId;
}
function shouldRestoreWebRuntimeSessionWorkspaceSelection(e) {
	return selectionsMatch(e.current, e.applied) && !selectionsMatch(e.previous, e.applied);
}
var groupByPendingHostTabId = /* @__PURE__ */ new Map(), MAX_PENDING_TERMINAL_PLACEMENTS = 128;
function webTerminalPlacementParentTabId(e) {
	let b = e.indexOf("::");
	return b === -1 ? e : e.slice(0, b);
}
function hostTabKey(e, b, x) {
	return `${e}\0${b}\0${x}`;
}
function recordWebSessionTerminalPlacement(e) {
	let b = hostTabKey(e.environmentId, e.worktreeId, e.hostTabId);
	if (!groupByPendingHostTabId.has(b) && groupByPendingHostTabId.size >= MAX_PENDING_TERMINAL_PLACEMENTS) {
		let e = groupByPendingHostTabId.keys().next().value;
		e !== void 0 && groupByPendingHostTabId.delete(e);
	}
	groupByPendingHostTabId.set(b, e.groupId);
}
function peekWebSessionTerminalPlacementGroup(e) {
	return groupByPendingHostTabId.get(hostTabKey(e.environmentId, e.worktreeId, e.hostTabId));
}
function forgetWebSessionTerminalPlacement(e) {
	groupByPendingHostTabId.delete(hostTabKey(e.environmentId, e.worktreeId, e.hostTabId));
}
function clearWebSessionTerminalPlacementsForWorktree(e, b) {
	let x = `${e}\0${b}\0`;
	for (let e of groupByPendingHostTabId.keys()) e.startsWith(x) && groupByPendingHostTabId.delete(e);
}
function clearWebSessionTerminalPlacementsForEnvironment(e) {
	let b = `${e}\0`;
	for (let e of groupByPendingHostTabId.keys()) e.startsWith(b) && groupByPendingHostTabId.delete(e);
}
const WEB_SESSION_GROUP_PREFIX = "web-session-tabs:", WEB_SESSION_TABS_VISIBILITY_RESUME_STAGGER_MS = 100, VISIBILITY_INVENTORY_REMOVAL_EPOCH = "visibility-inventory-removal", HOST_WORKING_CLIENT_BOUNDARY_LIMIT = 512, latestSessionTabsSnapshotByWorktree = /* @__PURE__ */ new Map(), replayableSessionTabsSnapshotByWorktree = /* @__PURE__ */ new Map(), latestReceivedSessionTabsSnapshotByWorktree = /* @__PURE__ */ new Map();
function setBoundedSessionTabsReceipt(e, b, x, S) {
	if (e.set(b, x), e.size <= 512) return;
	let C = receivedSessionTabsFrameSequence - 512;
	for (let [b, x] of e) S(x) < C && e.delete(b);
}
const sessionTabsRuntimeHistoryByEnvironment = /* @__PURE__ */ new Map(), sessionTabsPublicationEpochHistoryByWorktree = /* @__PURE__ */ new Map(), latestReceivedSessionTabsFrameByEnvironment = /* @__PURE__ */ new Map(), latestReceivedSessionTabsInventoryFrameByEnvironment = /* @__PURE__ */ new Map(), sessionTabsRemovalWatermarkByWorktree = /* @__PURE__ */ new Map(), trackedSessionTabsWorktreeIdsByEnvironment = /* @__PURE__ */ new Map(), sessionTabsEnvironmentsByWorktree = /* @__PURE__ */ new Map(), sessionTabsTrackingGenerationByEnvironment = /* @__PURE__ */ new Map(), lastHostTerminalTabCountByWorktree = /* @__PURE__ */ new Map(), MAX_TRACKED_SESSION_TABS_INVENTORY_OMISSIONS = 512, sessionTabsInventoryOmissionsByWorktree = /* @__PURE__ */ new Map(), hostSessionTabIdByLocalKey = /* @__PURE__ */ new Map(), hostSessionTabMappingKeysByEnvironmentAndWorktree = /* @__PURE__ */ new Map(), hostWorkingClientBoundaryByPaneKey = /* @__PURE__ */ new Map();
let receivedSessionTabsFrameSequence = 0;
function nextReceivedSessionTabsFrame() {
	return receivedSessionTabsFrameSequence += 1, receivedSessionTabsFrameSequence;
}
function resetReceivedSessionTabsFrameSequence() {
	receivedSessionTabsFrameSequence = 0;
}
var inFlightBySession = /* @__PURE__ */ new Map();
function remoteRuntimeSessionTabsKey(e) {
	return `${e.environmentId}\u0000${e.worktreeId}`;
}
function listRemoteRuntimeSessionTabsDeduped(e) {
	let b = remoteRuntimeSessionTabsKey(e), x = inFlightBySession.get(b);
	if (x) return x;
	let S = nextReceivedSessionTabsFrame(), C = e.load().then(({ snapshot: e, runtimeId: b }) => ({
		snapshot: e,
		receivedFrame: S,
		...b ? { runtimeId: b } : {}
	})).finally(() => {
		inFlightBySession.get(b) === C && inFlightBySession.delete(b);
	});
	return inFlightBySession.set(b, C), C;
}
async function listRemoteRuntimeSessionTabsAfterCurrentInFlight(e) {
	let b = inFlightBySession.get(remoteRuntimeSessionTabsKey(e));
	return b && await b.catch(() => void 0), listRemoteRuntimeSessionTabsDeduped(e);
}
var armed = !1, capabilityRejectionArmed = !1, createdPageId = null, failNextReconciliation = !1, failNextInventoryRpc = !1, releaseCreatedPage = null, createdPageBarrier = null, preparationArmed = !1, preparationReached = !1, releasePreparationBarrier = null, preparationBarrier = null, settleCreation = null, creationSettlement = null, suppressedPageIds = /* @__PURE__ */ new Set(), MAX_SUPPRESSED_PAGE_IDS = 128;
function rejectPendingCreationSettlement(e) {
	settleCreation?.({
		status: "rejected",
		error: e
	});
}
function resetFault() {
	releaseCreatedPage?.(), releasePreparationBarrier?.(), preparationArmed = !1, preparationReached = !1, releasePreparationBarrier = null, preparationBarrier = null, armed = !1, capabilityRejectionArmed = !1, createdPageId = null, failNextReconciliation = !1, failNextInventoryRpc = !1, releaseCreatedPage = null, createdPageBarrier = null, rejectPendingCreationSettlement("E2E browser creation settlement reset"), settleCreation = null, creationSettlement = null, suppressedPageIds.clear();
}
function exposeFaultApi() {
	if (!e2eConfig.exposeStore || typeof window > "u") return;
	let e = window;
	e.__webRuntimeBrowserCreationFault ??= {
		arm: () => {
			resetFault(), armed = !0, createdPageBarrier = new Promise((e) => {
				releaseCreatedPage = e;
			});
		},
		armCapabilityRejection: () => {
			resetFault(), capabilityRejectionArmed = !0;
		},
		armInventoryRpcFailure: () => {
			failNextInventoryRpc = !0;
		},
		armPreparation: () => {
			resetFault(), preparationArmed = !0, preparationBarrier = new Promise((e) => {
				releasePreparationBarrier = e;
			});
		},
		armSettlement: () => {
			rejectPendingCreationSettlement("E2E browser creation settlement superseded"), creationSettlement = new Promise((e) => {
				settleCreation = e;
			});
		},
		release: () => {
			if (!armed || !createdPageId || !releaseCreatedPage) return !1;
			failNextReconciliation = !0;
			let e = releaseCreatedPage;
			return releaseCreatedPage = null, e(), !0;
		},
		releasePreparation: () => {
			if (!preparationArmed || !releasePreparationBarrier) return !1;
			let e = releasePreparationBarrier;
			return releasePreparationBarrier = null, e(), !0;
		},
		reset: resetFault,
		snapshot: () => ({
			armed,
			capabilityRejectionArmed,
			createdPageId,
			preparationArmed,
			preparationReached,
			suppressedPageIds: [...suppressedPageIds]
		}),
		takeInventoryRpcFailure: () => failNextInventoryRpc ? (failNextInventoryRpc = !1, "e2e_forced_inventory_rpc_failure") : null,
		waitForSettlement: async () => {
			if (!creationSettlement) throw Error("E2E browser creation settlement was not armed");
			return creationSettlement;
		}
	};
}
exposeFaultApi();
function throwIfE2eWebRuntimeBrowserCapabilityUnavailable() {
	if (!(!e2eConfig.exposeStore || !capabilityRejectionArmed)) throw capabilityRejectionArmed = !1, Error("E2E forced browser capability rejection");
}
async function pauseAfterE2eWebRuntimeBrowserCreate(e) {
	e2eConfig.exposeStore && (createdPageId = e, !(!armed || !createdPageBarrier) && await createdPageBarrier);
}
async function pauseDuringE2eWebRuntimeBrowserClientHostPreparation() {
	!e2eConfig.exposeStore || !preparationArmed || !preparationBarrier || (preparationReached = !0, await preparationBarrier);
}
function throwIfE2eWebRuntimeBrowserReconciliationFails() {
	if (!(!e2eConfig.exposeStore || !failNextReconciliation)) throw failNextReconciliation = !1, Error("E2E forced session-tabs reconciliation timeout");
}
function suppressE2eWebRuntimeBrowserSnapshot(e) {
	if (!e2eConfig.exposeStore || !armed) return !1;
	let b = e.tabs.flatMap((e) => e.type === "browser" && e.browserPageId ? [e.browserPageId] : []);
	for (let e of b) {
		if (suppressedPageIds.size >= MAX_SUPPRESSED_PAGE_IDS) break;
		suppressedPageIds.add(e);
	}
	return b.length > 0;
}
var SESSION_TABS_RETIRED_EPOCH_LIMIT = 8, SESSION_TABS_RETIRED_RUNTIME_ID_LIMIT = 8;
function hasRetiredValue(e, b) {
	return e?.retired.includes(b) ?? !1;
}
function noteRetiredValue(e, b, x) {
	return e ? e.current === b ? e : (e.current && !e.retired.includes(e.current) && (e.retired.push(e.current), e.retired.length > x && e.retired.splice(0, e.retired.length - x)), e.current = b, e) : {
		current: b,
		retired: []
	};
}
function reviveRetiredValue(e, b) {
	let x = e?.retired.indexOf(b) ?? -1;
	e && x >= 0 && e.retired.splice(x, 1);
}
function normalizeSessionTabsRuntimeId(e) {
	if (typeof e != "string") return;
	let b = e.trim();
	return b.length > 0 ? b : void 0;
}
function getSessionTabsRuntimeIdFromResponse(e) {
	return e.ok ? normalizeSessionTabsRuntimeId(e._meta?.runtimeId) : void 0;
}
function recordReceivedWebSessionTabsEnvironmentFrame(e, b) {
	b > (latestReceivedSessionTabsFrameByEnvironment.get(e) ?? 0) && latestReceivedSessionTabsFrameByEnvironment.set(e, b);
}
function isRetiredSessionTabsRuntimeId(e, b) {
	return hasRetiredValue(sessionTabsRuntimeHistoryByEnvironment.get(e), b);
}
function noteSessionTabsRuntimeId(e, b) {
	let x = noteRetiredValue(sessionTabsRuntimeHistoryByEnvironment.get(e), b, SESSION_TABS_RETIRED_RUNTIME_ID_LIMIT);
	return sessionTabsRuntimeHistoryByEnvironment.set(e, x), x;
}
function isCurrentSessionTabsRuntimeId(e, b) {
	let x = sessionTabsRuntimeHistoryByEnvironment.get(e);
	return x === void 0 || x.current === b;
}
function isCurrentSessionTabsRuntimeFrame(e, b) {
	return b === void 0 || !isRetiredSessionTabsRuntimeId(e, b) && isCurrentSessionTabsRuntimeId(e, b);
}
function acceptSessionTabsRuntimeId(e, b, x) {
	let S = sessionTabsRuntimeHistoryByEnvironment.get(e), C = latestReceivedSessionTabsFrameByEnvironment.get(e) ?? 0;
	return x !== void 0 && x < C && S !== void 0 && S.current !== b || isRetiredSessionTabsRuntimeId(e, b) ? !1 : (noteSessionTabsRuntimeId(e, b), !0);
}
function isRetiredSessionTabsPublicationEpoch(e, b) {
	return sessionTabsPublicationEpochHistoryByWorktree.get(e)?.retired.some((e) => sameSessionTabsPublicationLineage(e, b)) ?? !1;
}
function sameSessionTabsPublicationLineage(e, b) {
	return e === b || (e.includes(":headless-merge:") || b.includes(":headless-merge:")) && e.split(":headless-merge:")[0] === b.split(":headless-merge:")[0];
}
function isHeadlessMergeSessionTabsPublication(e) {
	return e.includes(":headless-merge:");
}
function noteSessionTabsPublicationEpoch(e, b) {
	let x = sessionTabsPublicationEpochHistoryByWorktree.get(e);
	if (x?.current && sameSessionTabsPublicationLineage(x.current, b)) return x.current = b, sessionTabsPublicationEpochHistoryByWorktree.set(e, x), x;
	let S = noteRetiredValue(x, b, SESSION_TABS_RETIRED_EPOCH_LIMIT);
	return sessionTabsPublicationEpochHistoryByWorktree.set(e, S), S;
}
function hostSnapshotAffirmsWorktreeContents(e) {
	return !(e.publicationEpoch === "none" && e.snapshotVersion === 0);
}
function hostSnapshotAffirmsClientHostedPages(e) {
	return hostSnapshotAffirmsWorktreeContents(e) && !e.clientHostedPagesUnreconciled;
}
function isSessionTabsListAllResult(e) {
	return !!e && typeof e == "object" && Array.isArray(e.snapshots);
}
function sessionTabsFreshnessKey(e, b) {
	return `${e}:${b}`;
}
function advancesSessionTabsFreshness(e, b) {
	return e.publicationEpoch !== b.publicationEpoch || e.snapshotVersion > b.snapshotVersion;
}
function getTrackedWebSessionTabsWorktrees(e) {
	return [...trackedSessionTabsWorktreeIdsByEnvironment.get(e) ?? []].flatMap((b) => {
		let x = sessionTabsFreshnessKey(e, b), S = latestSessionTabsSnapshotByWorktree.get(x);
		return S ? [{
			worktree: b,
			freshness: S
		}] : [];
	});
}
function trackWebSessionTabsWorktree(e, b) {
	let x = trackedSessionTabsWorktreeIdsByEnvironment.get(e) ?? /* @__PURE__ */ new Set();
	x.add(b), trackedSessionTabsWorktreeIdsByEnvironment.set(e, x);
}
function untrackWebSessionTabsWorktree(e, b) {
	let x = trackedSessionTabsWorktreeIdsByEnvironment.get(e);
	x && (x.delete(b), x.size === 0 && trackedSessionTabsWorktreeIdsByEnvironment.delete(e));
}
function recordReceivedWebSessionTabsSnapshot(e, b, x = void 0, S, C = "stream") {
	let w = x ?? nextReceivedSessionTabsFrame(), T = sessionTabsFreshnessKey(e, b.worktree), E = latestReceivedSessionTabsSnapshotByWorktree.get(T);
	if (C === "bootstrap" && E && w < E.receivedFrame || S && !acceptSessionTabsRuntimeId(e, S, w)) return w;
	recordReceivedWebSessionTabsEnvironmentFrame(e, w);
	let D = b.publicationEpoch, O = "removed" in b && b.removed === !0, k = sessionTabsPublicationEpochHistoryByWorktree.get(T);
	return isRetiredSessionTabsPublicationEpoch(T, D) ? w : (!O && hostSnapshotAffirmsWorktreeContents(b) && (!k || k.current !== D) && noteSessionTabsPublicationEpoch(T, D), (C === "stream" || !E || E.publicationEpoch !== D || b.snapshotVersion > E.snapshotVersion || b.snapshotVersion === E.snapshotVersion && E.receivedFrame <= w) && (setBoundedSessionTabsReceipt(latestReceivedSessionTabsSnapshotByWorktree, T, {
		receivedFrame: w,
		publicationEpoch: D,
		snapshotVersion: b.snapshotVersion,
		...S ? { runtimeId: S } : {}
	}, (e) => e.receivedFrame), O && recordReceivedWebSessionTabsRemoval(e, b.worktree, w, D)), w);
}
function recordReceivedWebSessionTabsInventory(e) {
	let b = nextReceivedSessionTabsFrame();
	return recordReceivedWebSessionTabsEnvironmentFrame(e, b), latestReceivedSessionTabsInventoryFrameByEnvironment.set(e, b), b;
}
function recordReceivedWebSessionTabsRemoval(e, b, x, S) {
	let C = sessionTabsFreshnessKey(e, b), w = latestReceivedSessionTabsSnapshotByWorktree.get(C);
	(!w || w.receivedFrame <= x) && setBoundedSessionTabsReceipt(latestReceivedSessionTabsSnapshotByWorktree, C, {
		receivedFrame: x,
		publicationEpoch: S,
		snapshotVersion: 0
	}, (e) => e.receivedFrame), x > (sessionTabsRemovalWatermarkByWorktree.get(C) ?? 0) && sessionTabsRemovalWatermarkByWorktree.set(C, x);
}
function precedesWebSessionTabsRemoval(e, b) {
	return b < (sessionTabsRemovalWatermarkByWorktree.get(e) ?? 0);
}
function shouldApplyRecoveredWebSessionTabsSnapshot(e, b, x, S) {
	if (S && (isRetiredSessionTabsRuntimeId(e, S) || !isCurrentSessionTabsRuntimeId(e, S))) return !1;
	let C = sessionTabsFreshnessKey(e, b.worktree);
	if (isRetiredSessionTabsPublicationEpoch(C, b.publicationEpoch) || precedesWebSessionTabsRemoval(C, x)) return !1;
	let w = latestReceivedSessionTabsSnapshotByWorktree.get(C);
	return !w || w.receivedFrame === x ? w !== void 0 : w.publicationEpoch === b.publicationEpoch ? b.snapshotVersion >= w.snapshotVersion : x > w.receivedFrame;
}
function recordAcceptedWebSessionTabsEnvironment(e, b) {
	let x = new Set(sessionTabsEnvironmentsByWorktree.get(b.worktree) ?? []);
	b.tabs.length > 0 ? x.add(e) : x.delete(e), x.size > 0 ? sessionTabsEnvironmentsByWorktree.set(b.worktree, x) : sessionTabsEnvironmentsByWorktree.delete(b.worktree);
}
function removeWebSessionTabsEnvironment(e, b) {
	let x = new Set(sessionTabsEnvironmentsByWorktree.get(b) ?? []);
	x.delete(e), x.size > 0 ? sessionTabsEnvironmentsByWorktree.set(b, x) : sessionTabsEnvironmentsByWorktree.delete(b);
}
function rememberHostTerminalTabCount(e, b) {
	let x = sessionTabsFreshnessKey(e, b.worktree), S = b.tabs.filter((e) => e.type === "terminal").length;
	lastHostTerminalTabCountByWorktree.set(x, S);
}
var wakeTerminalRespawnInFlightByWorktree = /* @__PURE__ */ new Set();
function shouldSkipWebRuntimeWakeTerminalRespawn(e) {
	return wakeTerminalRespawnInFlightByWorktree.has(e);
}
function beginWebRuntimeWakeTerminalRespawn(e) {
	return wakeTerminalRespawnInFlightByWorktree.has(e) ? !1 : (wakeTerminalRespawnInFlightByWorktree.add(e), !0);
}
function endWebRuntimeWakeTerminalRespawn(e) {
	wakeTerminalRespawnInFlightByWorktree.delete(e);
}
function clearWebRuntimeWakeTerminalRespawnForWorktree(e) {
	wakeTerminalRespawnInFlightByWorktree.delete(e);
}
function clearAllWebRuntimeWakeTerminalRespawn() {
	wakeTerminalRespawnInFlightByWorktree.clear();
}
var REORDER_INTENT_TTL_MS = 1e4, pendingReorderByOwnerAndWorktree = /* @__PURE__ */ new Map();
function reorderIntentPartitionKey(e, b) {
	return `${webSessionIntentOwnerKey(e)}\0${b}`;
}
function sameMembership(e, b) {
	if (e.length !== b.length) return !1;
	let x = new Set(e);
	return b.every((e) => x.has(e));
}
function sameOrder(e, b) {
	return e.length === b.length && e.every((e, x) => e === b[x]);
}
function recordWebSessionReorderIntent(e, b, x, S, C) {
	if (!b || !x || S.length === 0) return;
	let w = reorderIntentPartitionKey(e, b), T = pendingReorderByOwnerAndWorktree.get(w);
	T || (T = /* @__PURE__ */ new Map(), pendingReorderByOwnerAndWorktree.set(w, T)), T.set(x, {
		order: [...S],
		recordedAt: C
	});
}
function resolveWebSessionReorderedOrder(e, b, x, S, C) {
	let w = reorderIntentPartitionKey(e, b), T = pendingReorderByOwnerAndWorktree.get(w), E = T?.get(x);
	return E ? C - E.recordedAt > REORDER_INTENT_TTL_MS || !sameMembership(E.order, S) || sameOrder(E.order, S) ? (T.delete(x), T.size === 0 && pendingReorderByOwnerAndWorktree.delete(w), S) : [...E.order] : S;
}
function clearWebSessionReorderIntentsForWorktree(e, b) {
	pendingReorderByOwnerAndWorktree.delete(reorderIntentPartitionKey(e, b));
}
function clearWebSessionReorderIntent(e, b, x) {
	let S = reorderIntentPartitionKey(e, b), C = pendingReorderByOwnerAndWorktree.get(S);
	C?.delete(x), C?.size === 0 && pendingReorderByOwnerAndWorktree.delete(S);
}
function clearWebSessionReorderIntentsForOwner(e) {
	let b = `${webSessionIntentOwnerKey(e)}\0`;
	for (let e of pendingReorderByOwnerAndWorktree.keys()) e.startsWith(b) && pendingReorderByOwnerAndWorktree.delete(e);
}
var placementByPendingPage = /* @__PURE__ */ new Map(), materializedGroupKeys = /* @__PURE__ */ new Set(), pendingCleanupClaimsByGroup = /* @__PURE__ */ new Map(), MAX_PENDING_PLACEMENTS = 128;
function pageKey(e, b, x) {
	return `${e}\0${b}\0${x}`;
}
function worktreePrefix(e, b) {
	return `${e}\0${b}\0`;
}
function worktreeGroupKey(e, b) {
	return `${e}\0${b}`;
}
function hasPlacementForGroup(e, b) {
	let x = `\0${e}\0`;
	for (let [e, S] of placementByPendingPage) if (e.includes(x) && S.groupId === b) return !0;
	return !1;
}
function forgetSettledMaterializedGroup(e, b) {
	let x = worktreeGroupKey(e, b);
	!hasPlacementForGroup(e, b) && !pendingCleanupClaimsByGroup.has(x) && materializedGroupKeys.delete(x);
}
function recordWebSessionBrowserPlacement(e) {
	let b = pageKey(e.environmentId, e.worktreeId, e.remotePageId), x = placementByPendingPage.get(b);
	if (!x && placementByPendingPage.size >= MAX_PENDING_PLACEMENTS) throw Error("Too many paired browser placements are pending.");
	placementByPendingPage.set(b, {
		groupId: e.groupId,
		ownsGroupCleanup: e.callerCreatedGroup === !0 || x?.ownsGroupCleanup === !0,
		...x?.adopted ? { adopted: !0 } : {}
	});
}
function moveWebSessionBrowserPlacement(e) {
	let b = pageKey(e.environmentId, e.worktreeId, e.fromRemotePageId), x = placementByPendingPage.get(b);
	placementByPendingPage.delete(b), x && (recordWebSessionBrowserPlacement({
		environmentId: e.environmentId,
		worktreeId: e.worktreeId,
		remotePageId: e.toRemotePageId,
		groupId: x.groupId,
		callerCreatedGroup: x.ownsGroupCleanup
	}), x.adopted && markWebSessionBrowserPlacementAdopted({
		environmentId: e.environmentId,
		worktreeId: e.worktreeId,
		remotePageId: e.toRemotePageId
	}));
}
function forgetWebSessionBrowserPlacement(e) {
	let b = pageKey(e.environmentId, e.worktreeId, e.remotePageId), x = placementByPendingPage.get(b);
	placementByPendingPage.delete(b), x && forgetSettledMaterializedGroup(e.worktreeId, x.groupId);
}
function markWebSessionBrowserPlacementAdopted(e) {
	let b = pageKey(e.environmentId, e.worktreeId, e.remotePageId), x = placementByPendingPage.get(b);
	x && !x.adopted && placementByPendingPage.set(b, {
		...x,
		adopted: !0
	});
}
function peekWebSessionBrowserPlacementGroup(e) {
	let b = placementByPendingPage.get(pageKey(e.environmentId, e.worktreeId, e.remotePageId));
	return b?.adopted ? void 0 : b?.groupId;
}
function isWebSessionBrowserPlacementGroupReserved(e) {
	let b = `\0${e.worktreeId}\0`;
	for (let [x, S] of placementByPendingPage) if (x.includes(b) && S.groupId === e.groupId) return !0;
	return !1;
}
function releaseWebSessionBrowserPlacementGroup(e) {
	let b = pageKey(e.environmentId, e.worktreeId, e.remotePageId), x = placementByPendingPage.get(b), S = x?.groupId ?? e.groupId, C = worktreeGroupKey(e.worktreeId, S), w = materializedGroupKeys.has(C);
	placementByPendingPage.delete(b);
	let T = !w && (e.callerCreatedGroup || x?.ownsGroupCleanup === !0);
	return T && pendingCleanupClaimsByGroup.set(C, (pendingCleanupClaimsByGroup.get(C) ?? 0) + 1), forgetSettledMaterializedGroup(e.worktreeId, S), T;
}
function markWebSessionBrowserPlacementGroupMaterialized(e) {
	hasPlacementForGroup(e.worktreeId, e.groupId) && materializedGroupKeys.add(worktreeGroupKey(e.worktreeId, e.groupId));
}
function claimWebSessionBrowserPlacementGroupCleanup(e) {
	if (!e.ownsGroupCleanup) return !1;
	let b = worktreeGroupKey(e.worktreeId, e.groupId), x = pendingCleanupClaimsByGroup.get(b) ?? 0;
	if (x <= 1 ? pendingCleanupClaimsByGroup.delete(b) : pendingCleanupClaimsByGroup.set(b, x - 1), materializedGroupKeys.has(b)) return forgetSettledMaterializedGroup(e.worktreeId, e.groupId), !1;
	let S = `\0${e.worktreeId}\0`, C = !1;
	for (let [b, x] of placementByPendingPage) b.includes(S) && x.groupId === e.groupId && (placementByPendingPage.set(b, {
		...x,
		ownsGroupCleanup: !0
	}), C = !0);
	return !C;
}
function clearWebSessionBrowserPlacementsForWorktree(e, b) {
	let x = worktreePrefix(e, b);
	for (let e of placementByPendingPage.keys()) e.startsWith(x) && !placementByPendingPage.get(e)?.ownsGroupCleanup && placementByPendingPage.delete(e);
}
function clearWebSessionBrowserPlacementsForEnvironment(e) {
	let b = `${e}\0`;
	for (let e of placementByPendingPage.keys()) e.startsWith(b) && !placementByPendingPage.get(e)?.ownsGroupCleanup && placementByPendingPage.delete(e);
}
function resetWebSessionBrowserPlacementsForTests() {
	placementByPendingPage.clear(), materializedGroupKeys.clear(), pendingCleanupClaimsByGroup.clear();
}
var hydratedGenerationByEnvironment = /* @__PURE__ */ new Map(), hydratedGenerationByWorktree = /* @__PURE__ */ new Map(), parkedWaitersByWorktree = /* @__PURE__ */ new Map();
function worktreeKey(e, b) {
	return `${e}\0${b}`;
}
function isCurrentGeneration(e, b) {
	return b !== void 0 && b === getRuntimeEnvironmentConnectionGeneration(e);
}
function hasHostSessionMirrorHydrated(e, b) {
	return isCurrentGeneration(e, hydratedGenerationByEnvironment.get(e)) || isCurrentGeneration(e, hydratedGenerationByWorktree.get(worktreeKey(e, b)));
}
function drainParkedWaiters(e) {
	let b = [];
	for (let [x, S] of parkedWaitersByWorktree) e(S) && b.push(x);
	for (let e of b) {
		let b = parkedWaitersByWorktree.get(e);
		if (b) {
			parkedWaitersByWorktree.delete(e);
			try {
				b.run();
			} catch (e) {
				console.warn("[host-session-mirror-hydration] parked replay failed:", e);
			}
		}
	}
}
function markHostSessionMirrorHydrated(e) {
	hydratedGenerationByEnvironment.set(e, getRuntimeEnvironmentConnectionGeneration(e)), drainParkedWaiters((b) => b.environmentId === e);
}
function markHostSessionMirrorWorktreeHydrated(e, b) {
	hydratedGenerationByWorktree.set(worktreeKey(e, b), getRuntimeEnvironmentConnectionGeneration(e)), drainParkedWaiters((x) => x.environmentId === e && x.worktreeId === b);
}
function clearHostSessionMirrorHydration(e) {
	hydratedGenerationByEnvironment.delete(e);
	let b = `${e}\0`;
	for (let e of hydratedGenerationByWorktree.keys()) e.startsWith(b) && hydratedGenerationByWorktree.delete(e);
}
function parkUntilHostSessionMirrorHydrates(e, b, x) {
	parkedWaitersByWorktree.set(worktreeKey(e, b), {
		environmentId: e,
		worktreeId: b,
		run: x
	});
}
const HOST_MIRROR_HANDLE_GAP_DEADLINE_MS = WEB_SESSION_TAB_RPC_TIMEOUT_MS;
var waitersByPane = /* @__PURE__ */ new Map(), expiredGenerationByPane = /* @__PURE__ */ new Map(), unsubscribeStore = null;
function paneWaitKey(e, b) {
	return `${e}\0${b}`;
}
function paneBindingFor(e, b) {
	let x = useAppStore.getState().terminalLayoutsByTabId[e]?.ptyIdsByLeafId ?? {};
	return Object.values(x).filter((e) => typeof e == "string" && parseRemoteRuntimePtyId(e)?.environmentId === b).sort().join("");
}
function hasHostMirrorHandleWaitExpired(e, b) {
	let x = expiredGenerationByPane.get(paneWaitKey(e, b));
	return x === void 0 || x.paneBinding === "" ? !1 : x.generation === getRuntimeEnvironmentConnectionGeneration(e) && x.paneBinding === paneBindingFor(b, e);
}
function liveTabIds() {
	let e = /* @__PURE__ */ new Set();
	for (let b of Object.values(useAppStore.getState().tabsByWorktree)) for (let x of b) e.add(x.id);
	return e;
}
function recordExpiredWait(e, b) {
	let x = getRuntimeEnvironmentConnectionGeneration(e), S = `${e}\0`, C = liveTabIds();
	for (let [e, b] of expiredGenerationByPane) {
		let x = e.slice(0, e.indexOf("\0"));
		if (b.generation !== getRuntimeEnvironmentConnectionGeneration(x)) {
			expiredGenerationByPane.delete(e);
			continue;
		}
		e.startsWith(S) && !C.has(e.slice(S.length)) && expiredGenerationByPane.delete(e);
	}
	expiredGenerationByPane.set(b, {
		generation: x,
		paneBinding: waitersByPane.get(b)?.paneBinding ?? ""
	}), startStoreSubscription();
}
function retireVerdictsWithLandedHandles(e) {
	for (let b of expiredGenerationByPane.keys()) {
		let x = b.slice(b.indexOf("\0") + 1);
		(e.ptyIdsByTabId[x]?.length ?? 0) > 0 && expiredGenerationByPane.delete(b);
	}
}
function stopStoreSubscriptionIfIdle() {
	waitersByPane.size === 0 && expiredGenerationByPane.size === 0 && unsubscribeStore && (unsubscribeStore(), unsubscribeStore = null);
}
function releaseWaiter(e) {
	let b = waitersByPane.get(e);
	if (b) {
		clearTimeout(b.deadline), waitersByPane.delete(e), stopStoreSubscriptionIfIdle();
		try {
			b.run();
		} catch (e) {
			console.warn("[host-mirror-handle-gap] parked resume replay failed:", e);
		}
	}
}
function waiterIsReleased(e, b) {
	return (b.ptyIdsByTabId[e.tabId]?.length ?? 0) > 0 ? !0 : !(b.tabsByWorktree[e.worktreeId] ?? []).some((b) => b.id === e.tabId);
}
function releaseDueWaiters(e) {
	let b = [];
	for (let [x, S] of waitersByPane) waiterIsReleased(S, e) && b.push([x, S]);
	for (let [e, x] of b) waitersByPane.get(e) === x && waiterIsReleased(x, useAppStore.getState()) && releaseWaiter(e);
}
function startStoreSubscription() {
	if (unsubscribeStore) return;
	let e = useAppStore.getState();
	unsubscribeStore = useAppStore.subscribe((b) => {
		b.ptyIdsByTabId === e.ptyIdsByTabId && b.tabsByWorktree === e.tabsByWorktree || (e = b, retireVerdictsWithLandedHandles(b), releaseDueWaiters(b), stopStoreSubscriptionIfIdle());
	});
}
function parkUntilHostMirrorHandleLands(e, b, x, S) {
	let C = paneWaitKey(e, x), w = waitersByPane.get(C);
	if (w) {
		w.run = S, w.worktreeId = b;
		return;
	}
	let T = getRuntimeEnvironmentConnectionGeneration(e), E = setTimeout(() => {
		waitersByPane.get(C)?.generation === getRuntimeEnvironmentConnectionGeneration(e) && recordExpiredWait(e, C), releaseWaiter(C);
	}, HOST_MIRROR_HANDLE_GAP_DEADLINE_MS);
	waitersByPane.set(C, {
		worktreeId: b,
		tabId: x,
		generation: T,
		paneBinding: paneBindingFor(x, e),
		deadline: E,
		run: S
	}), startStoreSubscription();
}
function clearHostMirrorHandleGapVerdictsForEnvironment(e) {
	let b = `${e}\0`;
	for (let e of expiredGenerationByPane.keys()) e.startsWith(b) && expiredGenerationByPane.delete(e);
	stopStoreSubscriptionIfIdle();
}
function hostSessionTabMappingKey(e) {
	return `${e.environmentId}:${e.worktreeId}:${e.tabId}`;
}
function clearHostSessionTabIdMappings(e, b) {
	let x = hostSessionTabMappingKeysByEnvironmentAndWorktree.get(e), S = x?.get(b);
	if (S) {
		for (let e of S) hostSessionTabIdByLocalKey.delete(e);
		x?.delete(b), x?.size === 0 && hostSessionTabMappingKeysByEnvironmentAndWorktree.delete(e);
	}
}
function setHostSessionTabIdMapping(e, b) {
	let x = hostSessionTabMappingKey(e);
	hostSessionTabIdByLocalKey.set(x, b);
	let S = hostSessionTabMappingKeysByEnvironmentAndWorktree.get(e.environmentId) ?? /* @__PURE__ */ new Map(), C = S.get(e.worktreeId) ?? /* @__PURE__ */ new Set();
	C.add(x), S.set(e.worktreeId, C), hostSessionTabMappingKeysByEnvironmentAndWorktree.set(e.environmentId, S);
}
function resolveHostSessionTabIdForWebSessionTab(e, b) {
	return hostSessionTabIdByLocalKey.get(hostSessionTabMappingKey(b)) ?? resolveWebAgentSessionHandoff({
		environmentId: b.environmentId,
		worktreeId: b.worktreeId,
		provisionalTabId: b.tabId
	});
}
function hostSessionTabIdsByLocalTabForWorktree(e, b) {
	let x = hostSessionTabMappingKey({
		environmentId: e,
		worktreeId: b,
		tabId: ""
	}), S = hostSessionTabMappingKeysByEnvironmentAndWorktree.get(e)?.get(b), C = /* @__PURE__ */ new Map();
	for (let e of S ?? []) {
		let b = hostSessionTabIdByLocalKey.get(e);
		b !== void 0 && C.set(e.slice(x.length), b);
	}
	return C;
}
function getLastKnownHostTerminalTabCount(e, b) {
	return lastHostTerminalTabCountByWorktree.get(sessionTabsFreshnessKey(e, b)) ?? 0;
}
function getLatestWebSessionTabsPublicationEpoch(e, b) {
	return latestSessionTabsSnapshotByWorktree.get(sessionTabsFreshnessKey(e, b))?.publicationEpoch ?? null;
}
function acceptReplayedWebSessionTabsSnapshot(e, b) {
	let x = sessionTabsFreshnessKey(e, b), S = latestSessionTabsSnapshotByWorktree.get(x);
	S && replayableSessionTabsSnapshotByWorktree.set(x, S);
}
function resetWebSessionTabsSnapshotFreshnessForTests() {
	latestSessionTabsSnapshotByWorktree.clear(), replayableSessionTabsSnapshotByWorktree.clear(), latestReceivedSessionTabsSnapshotByWorktree.clear(), sessionTabsRuntimeHistoryByEnvironment.clear(), sessionTabsPublicationEpochHistoryByWorktree.clear(), latestReceivedSessionTabsFrameByEnvironment.clear(), latestReceivedSessionTabsInventoryFrameByEnvironment.clear(), sessionTabsRemovalWatermarkByWorktree.clear(), trackedSessionTabsWorktreeIdsByEnvironment.clear(), sessionTabsEnvironmentsByWorktree.clear(), resetReceivedSessionTabsFrameSequence(), lastHostTerminalTabCountByWorktree.clear(), sessionTabsInventoryOmissionsByWorktree.clear(), hostSessionTabIdByLocalKey.clear(), hostSessionTabMappingKeysByEnvironmentAndWorktree.clear(), hostWorkingClientBoundaryByPaneKey.clear(), resetWebSessionBrowserPlacementsForTests();
}
function _getWebSessionTabsTrackingCountsForTest() {
	let e = 0;
	for (let b of hostSessionTabMappingKeysByEnvironmentAndWorktree.values()) e += b.size;
	return {
		freshness: latestSessionTabsSnapshotByWorktree.size,
		hostMappings: hostSessionTabIdByLocalKey.size,
		hostMappingWorktrees: e
	};
}
function _getWebSessionTabsReceiptTrackingCountsForTest() {
	return {
		receipts: latestReceivedSessionTabsSnapshotByWorktree.size,
		removalWatermarks: sessionTabsRemovalWatermarkByWorktree.size
	};
}
function clearWebSessionTabsTrackingForWorktree(e, b) {
	let x = sessionTabsFreshnessKey(e, b);
	latestSessionTabsSnapshotByWorktree.delete(x), replayableSessionTabsSnapshotByWorktree.delete(x), untrackWebSessionTabsWorktree(e, b), removeWebSessionTabsEnvironment(e, b), lastHostTerminalTabCountByWorktree.delete(x), sessionTabsInventoryOmissionsByWorktree.delete(x), clearWebRuntimeWakeTerminalRespawnForWorktree(b), clearWebSessionReorderIntentsForWorktree({ environmentId: e }, b), clearWebSessionCloseIntentsForWorktree({ environmentId: e }, b), clearWebAgentSessionHandoffsForWorktree(e, b), clearHostSessionTabIdMappings(e, b), clearWebSessionBrowserPlacementsForWorktree(e, b), clearWebSessionTerminalPlacementsForWorktree(e, b);
}
function clearWebSessionTabsTrackingForEnvironment(e) {
	let b = e.trim();
	if (!b) return;
	let x = `${b}:`;
	sessionTabsTrackingGenerationByEnvironment.set(b, (sessionTabsTrackingGenerationByEnvironment.get(b) ?? 0) + 1);
	for (let e of latestSessionTabsSnapshotByWorktree.keys()) e.startsWith(x) && latestSessionTabsSnapshotByWorktree.delete(e);
	for (let e of replayableSessionTabsSnapshotByWorktree.keys()) e.startsWith(x) && replayableSessionTabsSnapshotByWorktree.delete(e);
	for (let e of latestReceivedSessionTabsSnapshotByWorktree.keys()) e.startsWith(x) && latestReceivedSessionTabsSnapshotByWorktree.delete(e);
	sessionTabsRuntimeHistoryByEnvironment.delete(b);
	for (let e of sessionTabsPublicationEpochHistoryByWorktree.keys()) e.startsWith(x) && sessionTabsPublicationEpochHistoryByWorktree.delete(e);
	latestReceivedSessionTabsFrameByEnvironment.delete(b), latestReceivedSessionTabsInventoryFrameByEnvironment.delete(b);
	for (let e of sessionTabsRemovalWatermarkByWorktree.keys()) e.startsWith(x) && sessionTabsRemovalWatermarkByWorktree.delete(e);
	trackedSessionTabsWorktreeIdsByEnvironment.delete(b);
	for (let e of sessionTabsEnvironmentsByWorktree.keys()) removeWebSessionTabsEnvironment(b, e);
	for (let e of lastHostTerminalTabCountByWorktree.keys()) e.startsWith(x) && lastHostTerminalTabCountByWorktree.delete(e);
	for (let e of sessionTabsInventoryOmissionsByWorktree.keys()) e.startsWith(x) && sessionTabsInventoryOmissionsByWorktree.delete(e);
	let S = hostSessionTabMappingKeysByEnvironmentAndWorktree.get(b);
	if (S) {
		for (let e of S.values()) for (let b of e) hostSessionTabIdByLocalKey.delete(b);
		hostSessionTabMappingKeysByEnvironmentAndWorktree.delete(b);
	}
	clearWebAgentSessionHandoffsForEnvironment(b), clearWebSessionBrowserPlacementsForEnvironment(b), clearWebSessionTerminalPlacementsForEnvironment(b), clearHostSessionMirrorHydration(b), clearHostMirrorHandleGapVerdictsForEnvironment(b), clearAllWebRuntimeWakeTerminalRespawn();
}
function getWebSessionTabsTrackingGeneration(e) {
	return sessionTabsTrackingGenerationByEnvironment.get(e.trim()) ?? 0;
}
var subscribersBySession = /* @__PURE__ */ new Map(), pendingSnapshotBySession = /* @__PURE__ */ new Map();
function sessionKey(e, b) {
	return `${e}\u0000${b}`;
}
function resolveSubscriberUpdate(e, b) {
	let x = e.tabs.filter((e) => e.type === "terminal" && (e.parentTabId === b.hostTabId || e.id === b.hostTabId) && (!b.leafId || e.leafId === b.leafId));
	if (x.length === 0) return {
		surfacePresent: !1,
		terminalHandle: null
	};
	let S = x.filter((e) => e.parentTabId === b.hostTabId);
	return {
		surfacePresent: !0,
		terminalHandle: (S.find((e) => e.status === "ready" && e.isActive) ?? S.find((e) => e.status === "ready"))?.terminal ?? null
	};
}
function subscribeAcceptedWebSessionTerminalHandle(e, b) {
	let x = sessionKey(e.environmentId, e.worktreeId), S = subscribersBySession.get(x) ?? /* @__PURE__ */ new Set(), C = {
		hostTabId: e.hostTabId,
		leafId: e.leafId ?? null,
		listener: b
	};
	return S.add(C), subscribersBySession.set(x, S), () => {
		S.delete(C), S.size === 0 && subscribersBySession.delete(x);
	};
}
function queueAcceptedWebSessionTerminalSnapshot(e, b) {
	if (subscribersBySession.size === 0) return;
	let x = sessionKey(b, e.worktree), S = subscribersBySession.get(x);
	if (!S || S.size === 0) return;
	let C = {
		snapshot: e,
		eligibleSubscribers: new Set(S)
	};
	pendingSnapshotBySession.set(x, C), queueMicrotask(() => {
		if (pendingSnapshotBySession.get(x) !== C) return;
		pendingSnapshotBySession.delete(x);
		let e = subscribersBySession.get(x);
		for (let b of C.eligibleSubscribers) e?.has(b) && b.listener(resolveSubscriberUpdate(C.snapshot, b));
	});
}
var WEB_SESSION_TABS_FRAME_APPLIED = {
	apply: !0,
	settlesHostMirror: !0
};
const WEB_SESSION_TABS_FRAME_OUTRANKED = {
	apply: !1,
	settlesHostMirror: !0
};
var WEB_SESSION_TABS_FRAME_UNMIRRORED = {
	apply: !1,
	settlesHostMirror: !1
};
function isHostMirroredWorktree(e) {
	return e !== FLOATING_TERMINAL_WORKTREE_ID;
}
function shouldApplyWebSessionTabsSnapshot(e, b, x) {
	return decideWebSessionTabsSnapshot(e, b, x).apply;
}
function decideWebSessionTabsSnapshot(e, b, x) {
	if (x && !acceptSessionTabsRuntimeId(b, x)) return WEB_SESSION_TABS_FRAME_OUTRANKED;
	let S = sessionTabsFreshnessKey(b, e.worktree);
	if (e.removed === !0) return clearWebSessionTabsTrackingForWorktree(b, e.worktree), queueAcceptedWebSessionTerminalSnapshot(e, b), WEB_SESSION_TABS_FRAME_APPLIED;
	if (!isHostMirroredWorktree(e.worktree)) return WEB_SESSION_TABS_FRAME_UNMIRRORED;
	let C = latestSessionTabsSnapshotByWorktree.get(S), w = !!(C && sameSessionTabsPublicationLineage(C.publicationEpoch, e.publicationEpoch)), T = C ? isHeadlessMergeSessionTabsPublication(C.publicationEpoch) : !1, E = w && (T || !isHeadlessMergeSessionTabsPublication(e.publicationEpoch));
	if (isRetiredSessionTabsPublicationEpoch(S, e.publicationEpoch) && !w) return WEB_SESSION_TABS_FRAME_OUTRANKED;
	let D = replayableSessionTabsSnapshotByWorktree.get(S), O = !!(C && D && C.publicationEpoch === D.publicationEpoch && C.snapshotVersion === D.snapshotVersion && e.publicationEpoch === D.publicationEpoch && e.snapshotVersion === D.snapshotVersion);
	return C && E && sameSessionTabsPublicationLineage(C.publicationEpoch, e.publicationEpoch) && e.snapshotVersion <= C.snapshotVersion && !O ? WEB_SESSION_TABS_FRAME_OUTRANKED : (rememberHostTerminalTabCount(b, e), replayableSessionTabsSnapshotByWorktree.delete(S), hostSnapshotAffirmsWorktreeContents(e) && noteSessionTabsPublicationEpoch(S, e.publicationEpoch), latestSessionTabsSnapshotByWorktree.set(S, {
		publicationEpoch: e.publicationEpoch,
		snapshotVersion: e.snapshotVersion
	}), trackWebSessionTabsWorktree(b, e.worktree), recordAcceptedWebSessionTabsEnvironment(b, e), queueAcceptedWebSessionTerminalSnapshot(e, b), WEB_SESSION_TABS_FRAME_APPLIED);
}
function shouldBootstrapInitialWebRuntimeTerminal(e) {
	return e.snapshotIsFresh && e.event.type === "snapshot" && e.event.tabs.length === 0 && e.localTerminalCount === 0 && !e.requestedInitialTerminal && e.activeWorktreeId === e.event.worktree;
}
function shouldRespawnWebRuntimeTerminalAfterWake(e) {
	return !e.snapshotIsFresh || e.requestedRespawnAfterWake || e.skipWakeRespawn === !0 || e.localTerminalCount === 0 || e.hasLiveLocalPty || e.event.type !== "snapshot" && e.event.type !== "updated" || e.activeWorktreeId !== e.event.worktree ? !1 : e.event.tabs.filter((e) => e.type === "terminal").length === 0;
}
function shouldSyncRuntimeSessionTabs(e) {
	return !e.activeWorktreeRuntimeEnvironmentId?.trim() || !e.workspaceSessionReady ? !1 : !!e.activeWorktreeId?.trim();
}
function shouldSyncAllRuntimeSessionTabs(e) {
	return !!(e.activeRuntimeEnvironmentId?.trim() && e.workspaceSessionReady);
}
var MAX_CACHED_SURFACE_RESOLUTIONS = 512, stableSurfaceRecoveryFailures = /* @__PURE__ */ new Map(), MAX_CACHED_PANE_RESOLUTION_FAILURES = 512, cachedPaneResolutionFailures = /* @__PURE__ */ new Map(), MAX_CACHED_INVENTORY_ABSENCES = 512, surfaceInventoryAbsences = /* @__PURE__ */ new Map();
function buildSurfaceRecoveryCacheKey(e) {
	return `${e.environmentId}\0${e.expectedEnvironmentPairingRevision ?? "unknown"}\0${e.worktreeId}\0${e.surfaceKey}`;
}
function buildSurfaceRecoveryFingerprint(e, b) {
	return [
		e.publicationEpoch,
		e.snapshotVersion,
		b.handle,
		b.incomingId ?? "",
		b.incomingStatus ?? "absent",
		b.incomingPtyId ?? ""
	].join("\0");
}
function surfaceRecoveryCoordinates(e) {
	return {
		key: buildSurfaceRecoveryCacheKey({
			environmentId: e.environmentId,
			worktreeId: e.snapshot.worktree,
			surfaceKey: e.surface.surfaceKey,
			expectedEnvironmentPairingRevision: e.expectedEnvironmentPairingRevision
		}),
		fingerprint: buildSurfaceRecoveryFingerprint(e.snapshot, {
			handle: e.surface.handle,
			incomingId: e.surface.incoming?.id,
			incomingStatus: e.surface.incoming?.status,
			incomingPtyId: e.surface.incoming?.ptyId
		})
	};
}
function readStableSurfaceRecoveryFailure(e) {
	let { key: b, fingerprint: x } = surfaceRecoveryCoordinates(e), S = stableSurfaceRecoveryFailures.get(b);
	return S ? S.fingerprint === x ? (stableSurfaceRecoveryFailures.delete(b), stableSurfaceRecoveryFailures.set(b, S), !0) : (stableSurfaceRecoveryFailures.delete(b), !1) : !1;
}
function cacheStableSurfaceRecoveryFailure(e) {
	let { key: b, fingerprint: x } = surfaceRecoveryCoordinates(e);
	for (stableSurfaceRecoveryFailures.delete(b), stableSurfaceRecoveryFailures.set(b, { fingerprint: x }); stableSurfaceRecoveryFailures.size > MAX_CACHED_SURFACE_RESOLUTIONS;) {
		let e = stableSurfaceRecoveryFailures.keys().next().value;
		if (typeof e != "string") return;
		stableSurfaceRecoveryFailures.delete(e);
	}
}
function buildPaneResolutionFingerprint(e, b) {
	return [
		e.publicationEpoch,
		e.snapshotVersion,
		b.expectedPtyId ?? "",
		b.incoming?.id ?? "",
		b.incoming?.status ?? "absent"
	].join("\0");
}
function inventoryAbsenceCoordinates(e) {
	return {
		key: buildSurfaceRecoveryCacheKey({
			environmentId: e.environmentId,
			worktreeId: e.snapshot.worktree,
			surfaceKey: e.surface.surfaceKey,
			expectedEnvironmentPairingRevision: e.expectedEnvironmentPairingRevision
		}),
		fingerprint: [e.surface.handle, e.surface.expectedPtyId ?? ""].join("\0")
	};
}
function confirmSurfaceInventoryAbsence(e) {
	let { key: b, fingerprint: x } = inventoryAbsenceCoordinates(e), S = surfaceInventoryAbsences.get(b), C = S?.fingerprint === x ? S.observations + 1 : 1;
	for (surfaceInventoryAbsences.delete(b), surfaceInventoryAbsences.set(b, {
		fingerprint: x,
		observations: Math.min(C, 2)
	}); surfaceInventoryAbsences.size > MAX_CACHED_INVENTORY_ABSENCES;) {
		let e = surfaceInventoryAbsences.keys().next().value;
		if (typeof e != "string") break;
		surfaceInventoryAbsences.delete(e);
	}
	return C >= 2;
}
function clearSurfaceInventoryAbsence(e) {
	surfaceInventoryAbsences.delete(inventoryAbsenceCoordinates(e).key);
}
function readStablePaneResolutionFailure(e) {
	let b = buildSurfaceRecoveryCacheKey({
		environmentId: e.environmentId,
		worktreeId: e.snapshot.worktree,
		surfaceKey: e.surface.surfaceKey,
		expectedEnvironmentPairingRevision: e.expectedEnvironmentPairingRevision
	}), x = buildPaneResolutionFingerprint(e.snapshot, e.surface), S = cachedPaneResolutionFailures.get(b);
	return S ? S.fingerprint === x ? (cachedPaneResolutionFailures.delete(b), cachedPaneResolutionFailures.set(b, S), !0) : (cachedPaneResolutionFailures.delete(b), !1) : !1;
}
function cacheStablePaneResolutionFailure(e) {
	let b = buildSurfaceRecoveryCacheKey({
		environmentId: e.environmentId,
		worktreeId: e.snapshot.worktree,
		surfaceKey: e.surface.surfaceKey,
		expectedEnvironmentPairingRevision: e.expectedEnvironmentPairingRevision
	});
	for (cachedPaneResolutionFailures.delete(b), cachedPaneResolutionFailures.set(b, { fingerprint: buildPaneResolutionFingerprint(e.snapshot, e.surface) }); cachedPaneResolutionFailures.size > MAX_CACHED_PANE_RESOLUTION_FAILURES;) {
		let e = cachedPaneResolutionFailures.keys().next().value;
		if (typeof e != "string") return;
		cachedPaneResolutionFailures.delete(e);
	}
}
var PrioritySemaphore = class {
	available;
	waiters = [];
	constructor(e) {
		this.available = e;
	}
	acquire(e, b) {
		if (b?.aborted) return Promise.reject(b.reason);
		if (this.available > 0) {
			this.available--;
			let e = !1;
			return Promise.resolve(() => {
				e || (e = !0, this.release());
			});
		}
		return new Promise((x, S) => {
			let C = {
				priority: e,
				resolve: x,
				signal: b
			};
			b && (C.onAbort = () => {
				let e = this.waiters.indexOf(C);
				e !== -1 && (this.waiters.splice(e, 1), S(b.reason));
			}, b.addEventListener("abort", C.onAbort, { once: !0 })), this.waiters.push(C);
		});
	}
	release() {
		if (this.waiters.length === 0) {
			this.available++;
			return;
		}
		let e = 0;
		for (let b = 1; b < this.waiters.length; b++) this.waiters[b].priority < this.waiters[e].priority && (e = b);
		let b = this.waiters.splice(e, 1)[0];
		b.signal && b.onAbort && b.signal.removeEventListener("abort", b.onAbort);
		let x = !1;
		b.resolve(() => {
			x || (x = !0, this.release());
		});
	}
}, MAX_CONCURRENT_RECOVERY_RPCS = 4, MAX_WAITING_RECOVERY_RPCS = 64, recoveryRpcLane = new PrioritySemaphore(MAX_CONCURRENT_RECOVERY_RPCS), waitingRecoveryRpcs = 0;
async function runInTerminalRecoveryRpcLane(e, b) {
	if (waitingRecoveryRpcs >= MAX_WAITING_RECOVERY_RPCS) return null;
	waitingRecoveryRpcs += 1;
	let x = await recoveryRpcLane.acquire(0);
	--waitingRecoveryRpcs;
	try {
		return e() ? await b() : null;
	} finally {
		x();
	}
}
function surfaceKey(e, b) {
	return `${e}\0${b}`;
}
function hasTerminalHandleRetirementProof(e, b) {
	return e.retiredTerminalSurfaces?.some((e) => e.parentTabId === b.tabId && e.leafId === b.leafId && e.terminal === b.handle) === !0;
}
function isRemovedSnapshot(e) {
	return "removed" in e && e.removed === !0;
}
function isValidReadySurface(e) {
	return e.status === "ready" && typeof e.terminal == "string" && e.terminal.length > 0;
}
function terminalRowsBySurface(e) {
	let b = /* @__PURE__ */ new Map();
	for (let x of e.tabs) {
		if (x.type !== "terminal") continue;
		let e = surfaceKey(x.parentTabId, x.leafId), S = b.get(e) ?? [];
		S.push(x), b.set(e, S);
	}
	return b;
}
function terminalLayoutLeafIds(e) {
	if (!e) return [];
	let b = e.root ? terminalLayoutTreeLeafIds(e.root) : [], x = e.root ? b : [resolveRootlessTerminalLayoutLeafId(e)].filter((e) => e !== null), S = x.map((e) => ({
		leafId: e,
		offTree: !1
	})), C = new Set(x), w = Object.keys(e.ptyIdsByLeafId ?? {}).filter((e) => !C.has(e)).map((e) => ({
		leafId: e,
		offTree: !0
	}));
	return [...S, ...w];
}
function terminalLayoutTreeLeafIds(e) {
	return e.type === "leaf" ? [e.leafId] : [...terminalLayoutTreeLeafIds(e.first), ...terminalLayoutTreeLeafIds(e.second)];
}
var identity = string().regex(/\S/), nullableString = string().nullable(), version = number().int().nonnegative(), paneLayout = lazy(() => union([object({
	type: literal("leaf"),
	leafId: identity
}), object({
	type: literal("split"),
	first: paneLayout,
	second: paneLayout
})])), groupLayout = lazy(() => union([object({
	type: literal("leaf"),
	groupId: identity
}), object({
	type: literal("split"),
	first: groupLayout,
	second: groupLayout
})])), tabRowFields = {
	id: identity,
	title: string(),
	isActive: boolean()
}, terminalRow = object({
	...tabRowFields,
	type: literal("terminal"),
	parentTabId: identity,
	leafId: identity,
	ptyId: nullableString.optional(),
	incarnationId: nullableString.optional(),
	parentLayout: object({
		root: paneLayout.nullable(),
		activeLeafId: nullableString,
		expandedLeafId: nullableString,
		ptyIdsByLeafId: record(string(), string()).optional()
	}).optional()
}), terminalRows = union([terminalRow.extend({
	status: literal("pending-handle"),
	terminal: _null()
}), terminalRow.extend({
	status: literal("ready"),
	terminal: identity
})]), otherRow = object({
	...tabRowFields,
	type: string().refine((e) => e !== "terminal")
}), snapshotSchema = object({
	worktree: identity,
	publicationEpoch: identity,
	snapshotVersion: version,
	activeGroupId: nullableString,
	activeTabId: nullableString,
	activeTabType: nullableString,
	tabGroups: array(object({
		id: identity,
		activeTabId: nullableString,
		tabOrder: array(string()),
		recentTabIds: array(string()).optional()
	})).optional(),
	tabGroupLayout: groupLayout.nullable().optional(),
	retiredTerminalSurfaces: array(object({
		parentTabId: identity,
		leafId: identity,
		ptyId: string(),
		terminal: identity,
		incarnationId: string().optional()
	})).optional(),
	tabs: array(union([terminalRows, otherRow]))
});
function isTerminalRecoverySnapshot(e) {
	try {
		return snapshotSchema.safeParse(e).success;
	} catch {
		return !1;
	}
}
function captureTerminalRecoveryTopologyToken(e, b) {
	let x = e.tabsByWorktree[b], S = e.groupsByWorktree?.[b];
	return JSON.stringify({
		tabs: (x ?? []).map((b) => {
			let x = e.terminalLayoutsByTabId[b.id];
			return {
				id: b.id,
				ptyId: b.ptyId,
				ptyIds: e.ptyIdsByTabId?.[b.id],
				worktreeId: b.worktreeId,
				sortOrder: b.sortOrder,
				root: x?.root,
				activeLeafId: x?.activeLeafId,
				expandedLeafId: x?.expandedLeafId,
				ptyIdsByLeafId: x?.ptyIdsByLeafId
			};
		}),
		activeTabId: e.activeTabIdByWorktree[b],
		activeGroupId: e.activeGroupIdByWorktree[b],
		groups: (S ?? []).map((e) => ({
			id: e.id,
			activeTabId: e.activeTabId,
			tabOrder: e.tabOrder,
			recentTabIds: e.recentTabIds
		})),
		groupLayout: e.layoutByWorktree?.[b]
	});
}
function hasExactTerminalRetirementProof(e, b) {
	return b.incoming === void 0 && hasTerminalHandleRetirementProof(e, b);
}
function prepareTerminalOrphanRecovery(e, b, x) {
	if (isRemovedSnapshot(b)) return {
		candidates: [],
		unresolved: [],
		observed: [],
		retained: []
	};
	let S = terminalRowsBySurface(b), C = [], w = [], T = [], E = [];
	for (let O of e.tabsByWorktree[b.worktree] ?? []) {
		if (!isWebTerminalSurfaceTabId(O.id)) continue;
		let k = e.terminalLayoutsByTabId[O.id], A = toHostSessionTabId(O.id);
		for (let { leafId: D, offTree: j } of terminalLayoutLeafIds(k)) {
			let M = k?.ptyIdsByLeafId?.[D], N = M ? parseRemoteRuntimePtyId(M) : null, P = surfaceKey(A, D), F = S.get(P), I = F?.find(isValidReadySurface), L = I ?? F?.[0], R = L !== void 0 && !isValidReadySurface(L), z = {
				tabId: A,
				leafId: D,
				surfaceKey: P,
				localTab: O,
				incoming: L,
				pending: R,
				expectedPtyId: R && typeof L?.ptyId == "string" && L.ptyId.length > 0 ? L.ptyId : null,
				locallyActive: e.activeTabIdByWorktree[b.worktree] === O.id && k?.activeLeafId === D
			};
			if (j) {
				E.push({
					...z,
					offTree: !0,
					handle: N?.environmentId === x ? N.handle : null
				});
				continue;
			}
			if (I) {
				N?.environmentId === x && T.push({
					...z,
					incoming: I,
					handle: N.handle
				});
				continue;
			}
			N?.environmentId === x ? C.push({
				...z,
				handle: N.handle
			}) : M || w.push({
				...z,
				handle: null
			});
		}
	}
	return {
		candidates: C,
		unresolved: w,
		observed: T,
		retained: E
	};
}
function buildRetainedTerminalSurface(e) {
	let b = e.incoming, x = typeof e.localTab.title == "string" ? e.localTab.title.trim() : "";
	return e.handle ? {
		...b ?? {
			type: "terminal",
			id: `${e.tabId}::${e.leafId}`,
			parentTabId: e.tabId,
			leafId: e.leafId,
			title: x || "Terminal",
			isActive: e.locallyActive,
			status: "pending-handle",
			terminal: null
		},
		type: "terminal",
		id: b?.id ?? `${e.tabId}::${e.leafId}`,
		parentTabId: e.tabId,
		leafId: e.leafId,
		title: b?.title?.trim() || x || "Terminal",
		isActive: b?.isActive ?? e.locallyActive,
		status: "ready",
		terminal: e.handle
	} : {
		...b ?? {
			type: "terminal",
			id: `${e.tabId}::${e.leafId}`,
			parentTabId: e.tabId,
			leafId: e.leafId,
			title: x || "Terminal",
			isActive: e.locallyActive
		},
		type: "terminal",
		id: b?.id ?? `${e.tabId}::${e.leafId}`,
		parentTabId: e.tabId,
		leafId: e.leafId,
		title: b?.title?.trim() || x || "Terminal",
		isActive: b?.isActive ?? e.locallyActive,
		status: "pending-handle",
		terminal: null
	};
}
function mergeRetainedTerminalSurfaces(e, b, x = /* @__PURE__ */ new Set()) {
	if (b.length === 0 && x.size === 0) return e;
	let S = new Map(b.map((e) => [e.surfaceKey, buildRetainedTerminalSurface(e)])), C = /* @__PURE__ */ new Set(), w = e.tabs.flatMap((e) => {
		if (e.type !== "terminal") return [e];
		let b = surfaceKey(e.parentTabId, e.leafId);
		if (x.has(b)) return [];
		let w = S.get(b);
		return w ? C.has(b) ? [] : (C.add(b), [w]) : [e];
	});
	for (let e of b) {
		if (C.has(e.surfaceKey)) continue;
		let b = S.get(e.surfaceKey);
		if (!b) continue;
		let x = -1;
		for (let b = w.length - 1; b >= 0; --b) {
			let S = w[b];
			if (S.type === "terminal" && S.parentTabId === e.tabId) {
				x = b + 1;
				break;
			}
		}
		x < 0 ? w.push(b) : w.splice(x, 0, b), C.add(e.surfaceKey);
	}
	return w.length !== e.tabs.length || w.some((b, x) => b !== e.tabs[x]) ? {
		...e,
		tabs: w
	} : e;
}
function hasStrongOrphanIdentity(e, b, x) {
	return e.handle === b.handle && e.orphaned === !0 && typeof e.ptyId == "string" && e.ptyId.length > 0 && typeof e.incarnationId == "string" && e.incarnationId.length > 0 && (typeof e.worktreeId != "string" || e.worktreeId === x);
}
function buildTopologyCandidates(e, b) {
	let x = new Set(b.map((e) => e.tabId));
	return [...new Map(e.filter((e) => x.has(e.tabId)).map((e) => [e.localTab.id, e.localTab])).values()];
}
var STABLE_ADOPTION_FAILURE_CODES = new Set([
	"method_not_found",
	"capability_unsupported",
	"invalid_runtime_response"
]);
function isRecord$2(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function isAdoptionResult(e) {
	return isRecord$2(e) && typeof e.adopted == "boolean" && Number.isSafeInteger(e.topologyRevision) && isTerminalRecoverySnapshot(e.snapshot);
}
function isStableAdoptionFailure(e) {
	return isRecoverableRemoteRuntimeConnectionError(toRemoteRuntimeClientErrorLike(isRecord$2(e) && isRecord$2(e.error) ? e.error : e)) ? !1 : [...STABLE_ADOPTION_FAILURE_CODES].some((b) => hasRuntimeRpcErrorCode(e, b));
}
function isRpcResponse(e) {
	if (!isRecord$2(e) || typeof e.ok != "boolean") return !1;
	if (e.ok) return "result" in e;
	let b = e.error;
	return isRecord$2(b) && typeof b.code == "string" && typeof b.message == "string";
}
async function readClientSessionSnapshotAfterAdoption(e) {
	try {
		let b = await runInTerminalRecoveryRpcLane(e.isCurrent, () => e.call({
			selector: e.environmentId,
			method: "session.tabs.list",
			params: { worktree: toRuntimeWorktreeSelector(e.worktreeId) },
			timeoutMs: 15e3,
			expectedEnvironmentPairingRevision: e.expectedEnvironmentPairingRevision
		}));
		return isRpcResponse(b) && b.ok && (e.expectedRuntimeId === void 0 || getSessionTabsRuntimeIdFromResponse(b) === e.expectedRuntimeId) && isTerminalRecoverySnapshot(b.result) && b.result.worktree === e.worktreeId ? b.result : null;
	} catch {
		return null;
	}
}
function claimSurfaces(e, b) {
	return e.filter((e) => b.some((b) => b.tabId === e.tabId && b.leafId === e.leafId));
}
function retainedSharesClaimedTab(e, b) {
	let x = new Set(b.map((e) => e.tabId));
	return e.some((e) => x.has(e.tabId));
}
function cacheRetainedSurfaces(e, b, x, S) {
	for (let C of x) cacheStableSurfaceRecoveryFailure({
		environmentId: e,
		snapshot: b,
		surface: C,
		expectedEnvironmentPairingRevision: S
	});
}
function mergeFailedAdoption(e, b, x, S, C) {
	return mergeRetainedTerminalSurfaces(e, [...x, ...claimSurfaces(b, S)], C);
}
function mergeAdoptionResponse(e, b, x, S) {
	let C = terminalRowsBySurface(e), w = new Set([...C.entries()].filter(([, e]) => e.some(isValidReadySurface)).map(([e]) => e)), T = new Set([...S].filter((e) => !C.has(e)));
	return mergeRetainedTerminalSurfaces(e, [...b, ...x].filter((b) => w.has(b.surfaceKey) ? !1 : b.handle && hasTerminalHandleRetirementProof(e, {
		tabId: b.tabId,
		leafId: b.leafId,
		handle: b.handle
	}) ? (C.has(b.surfaceKey) || T.add(b.surfaceKey), !1) : !T.has(b.surfaceKey)), T);
}
function isRecord$1(e) {
	return typeof e == "object" && !!e;
}
function isStringArray(e) {
	return Array.isArray(e) && e.every((e) => typeof e == "string");
}
function isTerminalListResult(e) {
	if (!isRecord$1(e) || !Array.isArray(e.terminals) || typeof e.totalCount != "number" || !Number.isFinite(e.totalCount) || e.totalCount < 0 || typeof e.truncated != "boolean" || e.terminals.some((e) => !isRecord$1(e) || typeof e.handle != "string" || !e.handle)) return !1;
	let b = e.hostScope;
	if (b !== void 0 && (!isRecord$1(b) || !isStringArray(b.hostIds) || !isStringArray(b.omittedHostIds))) return !1;
	let x = e.topologyRevisions;
	return x === void 0 || isRecord$1(x) && Object.values(x).every((e) => typeof e == "number" && Number.isFinite(e) && e >= 0);
}
function hostScopeCensusIsComplete(e) {
	return e === void 0 || !e.hostIds.some((e) => parseExecutionHostId(e)) ? !1 : e.omittedHostIds.every((e) => parseExecutionHostId(e)?.kind === "runtime");
}
function fallback(e, b, x) {
	return {
		retained: [...e, ...b],
		removed: new Set(x),
		claims: [],
		topologyRevision: 0
	};
}
async function resolveTerminalOrphanInventory(e) {
	let { candidates: b, snapshot: x, environmentId: S, call: C, expectedEnvironmentPairingRevision: w, isCurrent: T } = e, E = b.filter((e) => hasExactTerminalRetirementProof(x, e)), D = new Set(E.map((e) => e.surfaceKey)), O = b.filter((e) => !hasExactTerminalRetirementProof(x, e)), k = /* @__PURE__ */ new Map();
	for (let e of O) {
		let b = k.get(e.handle) ?? [];
		b.push(e), k.set(e.handle, b);
	}
	let A = new Set([...k.entries()].filter(([, e]) => e.length > 1).map(([e]) => e)), j = O.filter((e) => A.has(e.handle)), M = O.filter((e) => !A.has(e.handle)), N = [], P = [];
	for (let e of M) (readStableSurfaceRecoveryFailure({
		environmentId: S,
		snapshot: x,
		surface: e,
		expectedEnvironmentPairingRevision: w
	}) ? N : P).push(e);
	let F = [...j, ...N];
	if (P.length > 64) return {
		retained: [...F, ...P],
		removed: D,
		claims: [],
		topologyRevision: 0
	};
	if (P.length === 0) return {
		retained: F,
		removed: D,
		claims: [],
		topologyRevision: 0
	};
	if (!T()) return null;
	let I = [...new Set(P.map((e) => e.handle))], L;
	try {
		L = await runInTerminalRecoveryRpcLane(T, () => C({
			selector: S,
			method: "terminal.list",
			params: {
				worktree: toRuntimeWorktreeSelector(x.worktree),
				handles: I,
				requireFreshPtyLiveness: !0,
				includeVisualLayouts: !1
			},
			timeoutMs: 15e3,
			expectedEnvironmentPairingRevision: w
		}));
	} catch {
		L = null;
	}
	if (L === null) return T() ? fallback(F, P, D) : null;
	if (!T()) return null;
	if (!L.ok || !isTerminalListResult(L.result)) return fallback(F, P, D);
	let R = L.result, z = new Set(I), B = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Set();
	for (let e of R.terminals) z.has(e.handle) && (B.has(e.handle) ? V.add(e.handle) : B.set(e.handle, e));
	let H = !hostScopeCensusIsComplete(R.hostScope), U = /* @__PURE__ */ new Map(), W = [];
	for (let e of P) {
		let b = B.get(e.handle), C = "retain";
		if ((b || e.pending) && clearSurfaceInventoryAbsence({
			environmentId: S,
			snapshot: x,
			surface: e,
			expectedEnvironmentPairingRevision: w
		}), V.has(e.handle)) C = "retain";
		else if (!b) C = e.pending || R.truncated || H ? "retain" : confirmSurfaceInventoryAbsence({
			environmentId: S,
			snapshot: x,
			surface: e,
			expectedEnvironmentPairingRevision: w
		}) ? "remove" : "retain";
		else if (e.pending && (!e.expectedPtyId || typeof b.ptyId != "string" || b.ptyId.length === 0)) C = "retain";
		else if (e.pending && b.ptyId !== e.expectedPtyId) C = "retain";
		else if (!hasStrongOrphanIdentity(b, e, x.worktree)) C = "retain";
		else {
			let x = b.ptyId, S = b.incarnationId;
			if (typeof x != "string" || x.length === 0 || typeof S != "string" || S.length === 0) {
				C = "retain", U.set(e.surfaceKey, C);
				continue;
			}
			C = "claim", W.push({
				terminal: b.handle,
				ptyId: x,
				incarnationId: S,
				tabId: e.tabId,
				leafId: e.leafId
			});
		}
		U.set(e.surfaceKey, C);
	}
	let G = P.filter((e) => U.get(e.surfaceKey) === "retain"), K = new Set([...E, ...P.filter((e) => U.get(e.surfaceKey) === "remove")].map((e) => e.surfaceKey));
	return {
		retained: [...F, ...G],
		removed: K,
		claims: W,
		topologyRevision: R.topologyRevisions?.[x.worktree] ?? 0
	};
}
var MAX_PANE_RESOLVES = 64;
function isRecord(e) {
	return typeof e == "object" && !!e;
}
function readResolvedPane(e) {
	if (!isRecord(e) || !isRecord(e.terminal)) return { kind: "invalid" };
	let b = e.terminal;
	return typeof b.handle != "string" || b.handle.length === 0 || typeof b.tabId != "string" || typeof b.leafId != "string" || b.ptyId !== null && (typeof b.ptyId != "string" || b.ptyId.length === 0) || typeof b.connected != "boolean" || typeof b.worktreeId != "string" ? { kind: "invalid" } : b.connected ? {
		kind: "connected",
		terminal: {
			handle: b.handle,
			tabId: b.tabId,
			leafId: b.leafId,
			ptyId: b.ptyId,
			connected: !0,
			worktreeId: b.worktreeId
		}
	} : { kind: "disconnected" };
}
function matchesSurface(e, b, x) {
	return e.tabId === b.tabId && e.leafId === b.leafId && e.worktreeId === x && (!b.expectedPtyId || e.ptyId === b.expectedPtyId);
}
function resolvedSurface(e, b) {
	return {
		...e,
		handle: b.handle
	};
}
async function resolveOne(e) {
	let { surface: b, snapshot: x, environmentId: S, call: C, expectedEnvironmentPairingRevision: w, isCurrent: T } = e;
	if (!T()) return null;
	let E = () => {
		T() && cacheStablePaneResolutionFailure({
			environmentId: S,
			snapshot: x,
			surface: b,
			expectedEnvironmentPairingRevision: w
		});
	};
	if (readStablePaneResolutionFailure({
		environmentId: S,
		snapshot: x,
		surface: b,
		expectedEnvironmentPairingRevision: w
	})) return null;
	let D;
	try {
		D = makePaneKey(b.tabId, b.leafId);
	} catch {
		return E(), null;
	}
	try {
		let e = await runInTerminalRecoveryRpcLane(T, () => C({
			selector: S,
			method: "terminal.resolvePane",
			params: {
				paneKey: D,
				worktreeId: x.worktree
			},
			timeoutMs: 15e3,
			expectedEnvironmentPairingRevision: w
		}));
		if (!e?.ok) return e?.error.code === "method_not_found" && E(), null;
		let O = readResolvedPane(e.result);
		if (O.kind === "invalid") return E(), null;
		if (O.kind === "disconnected") return null;
		let { terminal: k } = O;
		return matchesSurface(k, b, x.worktree) ? resolvedSurface(b, k) : null;
	} catch {
		return null;
	}
}
async function resolvePersistedTerminalSurfaces(e) {
	let { surfaces: b, isCurrent: x } = e;
	if (b.length === 0) return {
		resolved: [],
		unresolved: []
	};
	if (b.length > MAX_PANE_RESOLVES) return {
		resolved: [],
		unresolved: [...b]
	};
	let S = await Promise.all(b.map(async (b) => ({
		surface: b,
		resolved: await resolveOne({
			...e,
			surface: b
		})
	})));
	return x() ? {
		resolved: S.flatMap(({ resolved: e }) => e ? [e] : []),
		unresolved: S.flatMap(({ surface: e, resolved: b }) => b ? [] : [e])
	} : null;
}
var recoveryQueues = /* @__PURE__ */ new Map();
function startRecovery(e, b, x) {
	let S = {
		superseded: !1,
		promise: Promise.resolve(null)
	}, C = x(() => !S.superseded).catch(() => null);
	return S.promise = C, b.active = S, C.then(() => {
		if (recoveryQueues.get(e) !== b || b.active !== S) return;
		b.active = void 0;
		let x = b.queued;
		if (b.queued = void 0, !x) {
			recoveryQueues.delete(e);
			return;
		}
		startRecovery(e, b, x.run).then(x.resolve, () => x.resolve(null));
	}), C;
}
function enqueueLatestTerminalRecovery(e, b) {
	let x = recoveryQueues.get(e) ?? {};
	return recoveryQueues.set(e, x), x.active ? (x.active.superseded = !0, x.queued?.resolve(null), new Promise((e) => {
		x.queued = {
			run: b,
			resolve: e
		};
	})) : startRecovery(e, x, b);
}
function supersedeTerminalRecovery(e) {
	let b = recoveryQueues.get(e);
	b && (b.active && (b.active.superseded = !0), b.queued && b.queued.resolve(null), b.queued = void 0, b.active || recoveryQueues.delete(e));
}
function prunePaneLayout(e, b) {
	if (!e) return null;
	if (e.type === "leaf") return b.has(e.leafId) ? e : null;
	let x = prunePaneLayout(e.first, b), S = prunePaneLayout(e.second, b);
	return x ? S ? {
		...e,
		first: x,
		second: S
	} : x : S;
}
function pruneGroupLayout(e, b) {
	if (!e) return;
	if (e.type === "leaf") return b.has(e.groupId) ? e : void 0;
	let x = pruneGroupLayout(e.first, b), S = pruneGroupLayout(e.second, b);
	return x ? S ? {
		...e,
		first: x,
		second: S
	} : x : S;
}
function buildWebTerminalOrphanTopologyProposal(e, b, x, S) {
	let C = /* @__PURE__ */ new Map();
	for (let e of S) {
		let b = C.get(e.tabId) ?? /* @__PURE__ */ new Set();
		b.add(e.leafId), C.set(e.tabId, b);
	}
	let w = new Map(x.map((e) => [e.id, toHostSessionTabId(e.id)])), T = x.flatMap((b) => {
		let x = w.get(b.id), S = C.get(x), T = e.terminalLayoutsByTabId[b.id], E = S ? prunePaneLayout(T?.root ?? null, S) : null;
		if (!T || !E || !S || S.size === 0) return [];
		let D = [...S][0];
		return [{
			tabId: x,
			root: E,
			activeLeafId: S.has(T.activeLeafId ?? "") ? T.activeLeafId : D,
			expandedLeafId: T.expandedLeafId && S.has(T.expandedLeafId) ? T.expandedLeafId : null
		}];
	});
	if (T.length !== C.size) return;
	let E = new Set(T.map((e) => e.tabId)), O = (e.groupsByWorktree?.[b] ?? []).flatMap((e) => {
		let b = e.tabOrder.map((e) => w.get(e)).filter((e) => !!(e && E.has(e)));
		if (b.length === 0) return [];
		let x = e.activeTabId ? w.get(e.activeTabId) : void 0, S = e.recentTabIds?.map((e) => w.get(e)).filter((e) => !!(e && b.includes(e)));
		return [{
			id: e.id,
			activeTabId: x && b.includes(x) ? x : b[0],
			tabOrder: b,
			...S && S.length > 0 ? { recentTabIds: S } : {}
		}];
	}), k = O.length > 0 ? O : [{
		id: e.activeGroupIdByWorktree[b] ?? "recovered-orphans",
		activeTabId: T[0].tabId,
		tabOrder: T.map((e) => e.tabId)
	}], A = new Set(k.map((e) => e.id)), j = pruneGroupLayout(e.layoutByWorktree?.[b], A);
	return {
		tabs: T,
		groups: k,
		...j ? { groupLayout: j } : {}
	};
}
var surfaceKey$1 = (e) => `${e.parentTabId}\0${e.leafId}`;
const retirementProofKey = (e) => `${e.parentTabId}\0${e.leafId}\0${e.terminal}`;
function dropRetirementProofsForLiveSurfaces(e, b) {
	let x = /* @__PURE__ */ new Set();
	for (let e of b) e.type === "terminal" && e.parentTabId !== void 0 && e.leafId !== void 0 && x.add(surfaceKey$1({
		parentTabId: e.parentTabId,
		leafId: e.leafId
	}));
	return e.filter((e) => !x.has(surfaceKey$1(e)));
}
function appendRetiredTerminalSurfaceProofs(e, b) {
	let x = new Map((e ?? []).map((e) => [retirementProofKey(e), e]));
	for (let e of b) {
		let b = retirementProofKey(e);
		x.delete(b), x.set(b, e);
	}
	for (; x.size > 64;) {
		let e = x.keys().next().value;
		if (typeof e != "string") break;
		x.delete(e);
	}
	return [...x.values()];
}
var retainedByKey = /* @__PURE__ */ new Map(), MAX_LEDGER_WORKTREES = 512, ledgerKey = (e, b) => `${e}\0${b}`;
function mergeRetainedTerminalRetirementProofs(e, b) {
	let x = ledgerKey(e, b.worktree);
	if (isRemovedSnapshot(b) || b.retiredTerminalSurfaces === void 0) return retainedByKey.delete(x), b;
	let S = getRuntimeEnvironmentConnectionGeneration(e), C = retainedByKey.get(x), w = C?.connectionGeneration === S ? C.proofs : void 0;
	if (!w && b.retiredTerminalSurfaces.length === 0) return retainedByKey.delete(x), b;
	let T = dropRetirementProofsForLiveSurfaces(appendRetiredTerminalSurfaceProofs(w, b.retiredTerminalSurfaces), b.tabs);
	if (retainedByKey.delete(x), T.length > 0) for (retainedByKey.set(x, {
		connectionGeneration: S,
		proofs: T
	}); retainedByKey.size > MAX_LEDGER_WORKTREES;) {
		let e = retainedByKey.keys().next().value;
		if (typeof e != "string") break;
		retainedByKey.delete(e);
	}
	return T.length === (b.retiredTerminalSurfaces?.length ?? 0) && T.every((e, x) => e === b.retiredTerminalSurfaces?.[x]) ? b : {
		...b,
		retiredTerminalSurfaces: T
	};
}
function recoveryKey(e, b, x) {
	return `${e}\0${x ?? "unknown"}\0${b}`;
}
async function recoverTerminalOrphans(e, b, x, S, C, w, T, E) {
	let O = E?.() ?? e, k = captureTerminalRecoveryTopologyToken(O, b.worktree), A = () => !E || captureTerminalRecoveryTopologyToken(E(), b.worktree) === k, j = () => T() && A(), M = prepareTerminalOrphanRecovery(O, b, x);
	if (M.candidates.length === 0 && M.unresolved.length === 0 && M.retained.length === 0) return b;
	let N = await resolvePersistedTerminalSurfaces({
		surfaces: M.unresolved,
		snapshot: b,
		environmentId: x,
		call: S,
		expectedEnvironmentPairingRevision: C,
		isCurrent: T
	});
	if (!N || !j()) return null;
	let P = [...M.candidates, ...N.resolved], F = N.unresolved, L = [...M.retained, ...F];
	if (P.length === 0) return mergeRetainedTerminalSurfaces(b, L);
	let R = await resolveTerminalOrphanInventory({
		candidates: P,
		snapshot: b,
		environmentId: x,
		call: S,
		expectedEnvironmentPairingRevision: C,
		isCurrent: T
	});
	if (!R || !j()) return null;
	let { retained: z, removed: B, claims: V } = R;
	if (L.push(...z), V.length === 0) return mergeRetainedTerminalSurfaces(b, L, B);
	let H = O.activeTabIdByWorktree[b.worktree], U = H && isWebTerminalSurfaceTabId(H) ? toHostSessionTabId(H) : void 0, W = O.activeGroupIdByWorktree[b.worktree] ?? void 0, G = retainedSharesClaimedTab(L, V) ? void 0 : buildWebTerminalOrphanTopologyProposal(O, b.worktree, buildTopologyCandidates(P, V), V), K = claimSurfaces(P, V), q = (e) => (e && cacheRetainedSurfaces(x, b, K, C), mergeFailedAdoption(b, P, L, V, B)), J, Y = !1, X;
	try {
		if (!A()) return null;
		J = await runInTerminalRecoveryRpcLane(T, () => S({
			selector: x,
			method: "terminal.adoptOrphans",
			params: {
				worktree: toRuntimeWorktreeSelector(b.worktree),
				expectedTopologyRevision: R.topologyRevision,
				claims: V,
				...U ? { activeTabId: U } : {},
				...W ? { activeGroupId: W } : {},
				...G ? { topology: G } : {}
			},
			timeoutMs: 15e3,
			expectedEnvironmentPairingRevision: C
		}));
	} catch (e) {
		Y = !0, X = e;
	}
	if (!T() || !A()) return null;
	if (J === null) return q(!1);
	if (Y) return q(isStableAdoptionFailure(X));
	if (!isRpcResponse(J)) return q(!0);
	if (!T()) return null;
	if (!J.ok) return q(isStableAdoptionFailure(J));
	if (!isAdoptionResult(J.result)) return q(!0);
	if (J.result.snapshot.worktree !== b.worktree) return q(!1);
	let Z = await readClientSessionSnapshotAfterAdoption({
		environmentId: x,
		worktreeId: b.worktree,
		expectedEnvironmentPairingRevision: C,
		expectedRuntimeId: w ?? getSessionTabsRuntimeIdFromResponse(J),
		call: S,
		isCurrent: j
	});
	if (!j()) return null;
	if (!Z) return q(!1);
	let Q = terminalRowsBySurface(Z), $ = K.filter((e) => !Q.get(surfaceKey(e.tabId, e.leafId))?.some(isValidReadySurface));
	return cacheRetainedSurfaces(x, b, $, C), mergeAdoptionResponse(Z, L, $, B);
}
function normalizeOptions(e) {
	return typeof e == "function" ? { call: e } : e ?? {};
}
function recoverWebSessionTerminalOrphansBeforeApply(e, b, x, S) {
	let C = normalizeOptions(S), w = mergeRetainedTerminalRetirementProofs(x, b), T = recoveryKey(x, w.worktree, C.expectedEnvironmentPairingRevision);
	if (isRemovedSnapshot(w)) return supersedeTerminalRecovery(T), Promise.resolve(w);
	let E = prepareTerminalOrphanRecovery(e, w, x);
	for (let e of E.observed) clearSurfaceInventoryAbsence({
		environmentId: x,
		snapshot: w,
		surface: e,
		expectedEnvironmentPairingRevision: C.expectedEnvironmentPairingRevision
	});
	if (E.candidates.length === 0 && E.unresolved.length === 0 && E.retained.length === 0) return supersedeTerminalRecovery(T), Promise.resolve(w);
	if (E.candidates.length === 0 && E.unresolved.length === 0) return supersedeTerminalRecovery(T), Promise.resolve(mergeRetainedTerminalSurfaces(w, E.retained));
	let D = C.call ?? ((e) => callRuntimeEnvironmentWithRevision({
		environmentId: x,
		method: e.method,
		params: e.params,
		timeoutMs: e.timeoutMs,
		expectedEnvironmentPairingRevision: C.expectedEnvironmentPairingRevision
	}));
	return enqueueLatestTerminalRecovery(T, (b) => recoverTerminalOrphans(e, w, x, D, C.expectedEnvironmentPairingRevision, C.expectedRuntimeId, b, C.getCurrentState));
}
var pendingRuntimeWorktreeRecoveryRefreshes = /* @__PURE__ */ new Map(), RUNTIME_WORKTREE_RECOVERY_REFRESH_DELAYS_MS = [
	250,
	500,
	1e3,
	2e3,
	4e3
];
async function refreshWebRuntimeSessionTabsSnapshot(e, x, S = {}) {
	let C = await import("./web-session-tabs-sync-BGwzt9H0.js"), w = S.expectedEnvironmentPairingRevision ?? getRuntimeEnvironmentRevision(e), T = getRuntimeEnvironmentConnectionGeneration(e), E = C.getWebSessionTabsTrackingGeneration(e), D = captureRuntimeEnvironmentCall(e, w);
	try {
		if (S.acceptCurrentSnapshot) {
			let { acceptReplayedWebSessionTabsSnapshot: b } = await import("./web-session-tabs-sync-BGwzt9H0.js");
			b(e, x);
		}
		let O = S.confirmAgentSessionHandoff || S.afterCurrentInFlight ? listRemoteRuntimeSessionTabsAfterCurrentInFlight : listRemoteRuntimeSessionTabsDeduped;
		S.afterCurrentInFlight && throwIfE2eWebRuntimeBrowserReconciliationFails();
		let { snapshot: k, receivedFrame: A, runtimeId: j } = await O({
			environmentId: e,
			worktreeId: x,
			load: async () => {
				let e = await D({
					method: "session.tabs.list",
					params: { worktree: toRuntimeWorktreeSelector(x) },
					timeoutMs: 15e3
				});
				return {
					snapshot: unwrapRuntimeRpcResult(e),
					runtimeId: getSessionTabsRuntimeIdFromResponse(e)
				};
			}
		});
		if (S.confirmAgentSessionHandoff) {
			let { confirmWebAgentSessionHandoffAfterCreate: b } = await import("./web-agent-session-handoff-Dm3d2pft.js");
			b({
				environmentId: e,
				worktreeId: x,
				...S.confirmAgentSessionHandoff
			});
		}
		let { applyWebSessionTabsSnapshot: M, applyWebSessionTabsStorePatch: N, decideWebSessionTabsSnapshot: P } = C;
		if (recordReceivedWebSessionTabsSnapshot(e, k, A, j, "bootstrap"), getRuntimeEnvironmentRevision(e) !== w) return;
		let F = await recoverWebSessionTerminalOrphansBeforeApply(useAppStore.getState(), k, e, {
			expectedEnvironmentPairingRevision: w,
			expectedRuntimeId: j,
			getCurrentState: () => useAppStore.getState()
		});
		if (!F || getRuntimeEnvironmentRevision(e) !== w) return;
		let I = shouldApplyRecoveredWebSessionTabsSnapshot(e, F, A, j) ? P(F, e) : WEB_SESSION_TABS_FRAME_OUTRANKED;
		N((b) => {
			let x = I.apply ? M(b, F, e) : b;
			return x === b ? b : x;
		}, { frames: [{
			environmentId: e,
			worktreeId: k.worktree,
			decision: I,
			expectedEnvironmentConnectionGeneration: T,
			expectedEnvironmentPairingRevision: w,
			expectedTrackingGeneration: E
		}] }, F)();
	} catch (e) {
		if (S.errorMode === "throw") throw e;
		console.warn("[web-runtime-session] failed to refresh session-tabs snapshot:", e instanceof Error ? e.message : String(e));
	}
}
function scheduleRuntimeWorktreeRecoveryRefresh(e, x, S = getRuntimeEnvironmentRevision(e)) {
	let C = useAppStore.getState();
	if (!("tabsByWorktree" in C) || (C.tabsByWorktree[x] ?? []).length > 0) return;
	let w = `${e}\0${S ?? ""}\0${x}`, T = Symbol(w);
	pendingRuntimeWorktreeRecoveryRefreshes.set(w, T), (async () => {
		try {
			for (let C of RUNTIME_WORKTREE_RECOVERY_REFRESH_DELAYS_MS) if (await new Promise((e) => setTimeout(e, C)), pendingRuntimeWorktreeRecoveryRefreshes.get(w) !== T || getRuntimeEnvironmentRevision(e) !== S || (await refreshWebRuntimeSessionTabsSnapshot(e, x, { expectedEnvironmentPairingRevision: S }), (useAppStore.getState().tabsByWorktree[x] ?? []).length > 0)) return;
		} finally {
			pendingRuntimeWorktreeRecoveryRefreshes.get(w) === T && pendingRuntimeWorktreeRecoveryRefreshes.delete(w);
		}
	})();
}
function selectWebRuntimeSessionWorktree(e, b) {
	useAppStore.getState().setActiveWorktree(e, toRuntimeExecutionHostId(b));
}
function readActiveWorkspaceSelection() {
	let e = useAppStore.getState();
	return {
		worktreeId: e.activeWorktreeId ?? null,
		executionHostId: e.activeWorkspaceExecutionHostId ?? null
	};
}
function restoreActiveWorkspaceSelection(e) {
	shouldRestoreWebRuntimeSessionWorkspaceSelection({
		...e,
		current: readActiveWorkspaceSelection()
	}) && useAppStore.getState().setActiveWorktree(e.previous.worktreeId, e.previous.executionHostId ?? void 0);
}
function selectWebRuntimeSessionBrowserWorktree(e, b) {
	let x = useAppStore.getState();
	(x.activeWorktreeId !== e || x.activeWorkspaceExecutionHostId !== toRuntimeExecutionHostId(b)) && x.setActiveWorktree(e, toRuntimeExecutionHostId(b));
}
function createdTerminalLeafId(e) {
	let b = parsePaneKey(e.paneKey ?? "");
	return b && b.tabId === e.tabId ? b.leafId : void 0;
}
function readCreatedAgentTerminalIdentity(e) {
	if (typeof e != "object" || !e || !("terminal" in e)) throw Error("Host returned an invalid agent terminal result");
	let b = e.terminal;
	if (typeof b != "object" || !b) throw Error("Host returned an invalid agent terminal identity");
	let x = "tabId" in b ? b.tabId : void 0, S = "paneKey" in b ? b.paneKey : void 0;
	if (x !== void 0 && typeof x != "string" || S != null && typeof S != "string") throw Error("Host returned invalid agent terminal coordinates");
	return { terminal: {
		tabId: x,
		paneKey: S
	} };
}
function insertUnifiedTabAfterAnchor(e, b, x) {
	if (b === x) return;
	let S = useAppStore.getState(), C = (S.groupsByWorktree[e] ?? []).find((e) => e.tabOrder.includes(b) && e.tabOrder.includes(x));
	if (!C) return;
	let w = C.tabOrder.filter((e) => e !== b);
	w.splice(w.indexOf(x) + 1, 0, b), S.reorderUnifiedTabs(C.id, w, { recordInteraction: !1 });
}
function anchorUnifiedTabId(e, b) {
	return (useAppStore.getState().unifiedTabsByWorktree[e] ?? []).some((e) => e.id === b) || !isWebTerminalSurfaceTabId(b) ? b : toWebTerminalSurfaceTabId(webTerminalPlacementParentTabId(toHostSessionTabId(b)));
}
async function settleWebRuntimeTerminalPlacement(e, b, x, S) {
	let C = toWebTerminalSurfaceTabId(x), w = () => (useAppStore.getState().unifiedTabsByWorktree[b] ?? []).find((e) => e.id === C);
	try {
		let e = Date.now() + 1e4;
		for (; !w() && Date.now() < e;) await new Promise((e) => setTimeout(e, 250));
		let x = w();
		if (!x) return;
		let T = S.afterTabId ? anchorUnifiedTabId(b, S.afterTabId) : void 0, E = useAppStore.getState(), D = E.groupsByWorktree[b] ?? [], O = D.find((e) => e.id === S.groupId) ?? (T === void 0 ? void 0 : D.find((e) => e.tabOrder.includes(T)));
		if (!O) return;
		x.groupId !== O.id && E.moveUnifiedTabToGroup(C, O.id, {
			activate: S.activate,
			recordInteraction: !1
		}), T && insertUnifiedTabAfterAnchor(b, C, T);
	} finally {
		forgetWebSessionTerminalPlacement({
			environmentId: e,
			worktreeId: b,
			hostTabId: x
		});
	}
}
async function createWebRuntimeSessionTerminalResult(b) {
	let x = resolveWebRuntimeSessionEnvironmentId(b.environmentId, useAppStore.getState().settings?.activeRuntimeEnvironmentId);
	if (!x || !isWebRuntimeSessionActive(x)) return { outcome: {
		status: "failed",
		message: translate("auto.runtime.webRuntimeSession.remoteHostDisconnected", "The workspace is not connected to a remote Orca host.")
	} };
	let S = captureWebSessionIntentOwner(x), C = captureRuntimeEnvironmentCall(x, S.pairingRevision), w = null;
	if (b.selectWorktree !== !1) {
		let e = readActiveWorkspaceSelection();
		selectWebRuntimeSessionWorktree(b.worktreeId, x), w = {
			previous: e,
			applied: {
				worktreeId: b.worktreeId,
				executionHostId: toRuntimeExecutionHostId(x)
			}
		};
	}
	let T = !1, E, O;
	try {
		let e = b.launchAgent ?? b.agent, w = b.agentArgs === void 0 ? b.launchConfig?.agentArgs : b.agentArgs;
		if (e) {
			let S = buildDefaultTerminalOptions().vtExtensions?.kittyKeyboard, k = createAgentSessionKeyboardOptions(S), A = !1, j = b.preparedAgentCommand || b.afterTabId ? void 0 : b.agentSessionKind === "resume" ? b.providerSession ? async () => readCreatedAgentTerminalIdentity(unwrapRuntimeRpcResult(await C({
				method: "terminal.ensureAgentSession",
				params: {
					...await k(x),
					kind: "explicit",
					worktree: toRuntimeWorktreeSelector(b.worktreeId),
					agent: e,
					providerSession: b.providerSession,
					...b.launchConfig?.ompResumeFilePath ? { ompResumeFilePath: b.launchConfig.ompResumeFilePath } : {},
					...w === void 0 ? {} : { agentArgs: w },
					...b.launchPreferences ? { launchPreferences: b.launchPreferences } : {},
					presentation: "background"
				},
				timeoutMs: 15e3
			}))) : void 0 : async () => await createAgentSessionCreateOperation().run(async (S) => readCreatedAgentTerminalIdentity(unwrapRuntimeRpcResult(await C({
				method: "terminal.createAgentSession",
				params: withAgentSessionCreateOperationId({
					...await k(x),
					worktree: toRuntimeWorktreeSelector(b.worktreeId),
					agent: e,
					...b.prompt ? { prompt: b.prompt } : {},
					...b.promptDelivery ? { promptDelivery: b.promptDelivery } : {},
					...w === void 0 ? {} : { agentArgs: w },
					...b.launchPreferences ? { launchPreferences: b.launchPreferences } : {},
					...b.cwd ? { startupCwd: b.cwd } : {},
					...b.viewMode ? { viewMode: b.viewMode } : {},
					presentation: "background"
				}, S),
				timeoutMs: 15e3
			})))), M = b.agentSessionKind === "resume" ? agentResumeHostAuthorityCapability(e) : void 0, N = await runRemoteAgentSessionLaunch({
				environmentId: x,
				...j ? { hostAuthority: j } : {},
				...M ? { hostAuthorityCapability: M } : {},
				legacy: async () => {
					let e = unwrapRuntimeRpcResult(await C({
						method: "session.tabs.createTerminal",
						params: {
							worktree: toRuntimeWorktreeSelector(b.worktreeId),
							afterTabId: b.afterTabId ? toHostSessionTabId(b.afterTabId) : void 0,
							targetGroupId: b.targetGroupId,
							command: b.command,
							cwd: b.cwd,
							...b.env ? { env: b.env } : {},
							...b.envToDelete ? { envToDelete: b.envToDelete } : {},
							startupCommandDelivery: b.startupCommandDelivery,
							...b.launchConfig ? { launchConfig: b.launchConfig } : {},
							...b.launchToken ? { launchToken: b.launchToken } : {},
							...b.agent ? { agent: b.agent } : {},
							...b.launchAgent ? { launchAgent: b.launchAgent } : {},
							...b.viewMode ? { viewMode: b.viewMode } : {},
							activate: !1,
							select: b.activate !== !1,
							navigation: "caller"
						},
						timeoutMs: 15e3
					}));
					return A = !0, { terminal: {
						tabId: e.tab.id,
						leafId: e.tab.leafId
					} };
				}
			});
			T = !0, E = N.terminal.tabId, O = A ? N.terminal.leafId : createdTerminalLeafId(N.terminal), b.targetGroupId && E && !A && await C({
				method: "session.tabs.move",
				params: {
					worktree: toRuntimeWorktreeSelector(b.worktreeId),
					tabId: E,
					targetGroupId: b.targetGroupId,
					kind: "move-to-group"
				},
				timeoutMs: 15e3
			});
		} else {
			let e = unwrapRuntimeRpcResult(await C({
				method: "session.tabs.createTerminal",
				params: {
					worktree: toRuntimeWorktreeSelector(b.worktreeId),
					afterTabId: b.afterTabId ? toHostSessionTabId(b.afterTabId) : void 0,
					targetGroupId: b.targetGroupId,
					command: b.command,
					cwd: b.cwd,
					...b.env ? { env: b.env } : {},
					...b.envToDelete ? { envToDelete: b.envToDelete } : {},
					startupCommandDelivery: b.startupCommandDelivery,
					...b.launchConfig ? { launchConfig: b.launchConfig } : {},
					...b.launchToken ? { launchToken: b.launchToken } : {},
					...b.viewMode ? { viewMode: b.viewMode } : {},
					activate: !1,
					select: b.activate !== !1,
					navigation: "caller"
				},
				timeoutMs: 15e3
			}));
			T = !0, E = e.tab.id, O = e.tab.leafId;
		}
		b.targetGroupId && E && recordWebSessionTerminalPlacement({
			environmentId: x,
			worktreeId: b.worktreeId,
			hostTabId: webTerminalPlacementParentTabId(E),
			groupId: b.targetGroupId
		}), b.activate !== !1 && E && matchesWebSessionIntentOwner(S) && recordWebSessionFocusIntent(S, b.worktreeId, E, O);
		let k = E && (b.targetGroupId || b.afterTabId) ? E : void 0;
		return await refreshWebRuntimeSessionTabsSnapshot(x, b.worktreeId, {
			expectedEnvironmentPairingRevision: S.pairingRevision,
			acceptCurrentSnapshot: !!E && (b.activate !== !1 || !!k),
			...k ? { afterCurrentInFlight: !0 } : {}
		}), k && await settleWebRuntimeTerminalPlacement(x, b.worktreeId, webTerminalPlacementParentTabId(k), {
			groupId: b.targetGroupId,
			afterTabId: b.afterTabId,
			activate: b.activate !== !1
		}), {
			outcome: { status: "created" },
			...E ? { hostTabId: E } : {}
		};
	} catch (e) {
		let S = e instanceof Error ? e.message : String(e);
		return console.warn(T ? "[web-runtime-session] terminal created but reconciliation failed:" : "[web-runtime-session] failed to create terminal:", S), E && forgetWebSessionTerminalPlacement({
			environmentId: x,
			worktreeId: b.worktreeId,
			hostTabId: webTerminalPlacementParentTabId(E)
		}), !T && w && restoreActiveWorkspaceSelection(w), {
			outcome: T ? { status: "created" } : {
				status: "failed",
				message: S
			},
			...E ? { hostTabId: E } : {}
		};
	}
}
async function createWebRuntimeSessionTerminal(e) {
	return (await createWebRuntimeSessionTerminalResult(e)).outcome;
}
async function createWebRuntimeAgentSessionTerminal(e) {
	let b = await createWebRuntimeSessionTerminalResult(e);
	if (b.outcome.status === "failed" || !b.hostTabId) return {
		outcome: b.outcome,
		promptDelivered: !1
	};
	let x = await deliverLaunchPromptToAgentTab({
		tabId: toWebTerminalSurfaceTabId(b.hostTabId),
		content: e.promptAfterReady,
		agent: e.agent,
		submit: e.submitPrompt,
		forcePaste: e.forcePromptPaste
	});
	return {
		outcome: b.outcome,
		promptDelivered: x
	};
}
async function createWebRuntimeAgentSessionTerminalWithLaunchDraft(e) {
	let b = await createWebRuntimeSessionTerminalResult(e);
	return b.outcome.status !== "failed" && b.hostTabId && seedNativeChatLaunchDraftForAgentTab({
		tabId: toWebTerminalSurfaceTabId(b.hostTabId),
		agent: e.agent,
		text: e.launchDraft
	}), b.outcome;
}
function hasMaterializedWebRuntimeBrowserPage(e, b, x, S, C) {
	return (e.browserTabsByWorktree[x] ?? []).some((w) => (e.browserPagesByWorkspace[w.id] ?? []).some((x) => {
		let C = e.remoteBrowserPageHandlesByPageId[x.id];
		return C?.environmentId === b && C.remotePageId === S && C.staged !== !0;
	}) ? (e.unifiedTabsByWorktree[x] ?? []).some((e) => e.contentType === "browser" && e.entityId === w.id && (!C || e.groupId === C)) : !1);
}
var PAGE_MATERIALIZATION_TIMEOUT_MS = 8e3;
function waitForWebRuntimeBrowserPageMaterialization(e) {
	let b = () => hasMaterializedWebRuntimeBrowserPage(useAppStore.getState(), e.environmentId, e.worktreeId, e.remotePageId, e.expectedGroupId);
	return b() ? Promise.resolve(!0) : new Promise((x) => {
		let S = !1, C, w, T = (e) => {
			S || (S = !0, C && clearTimeout(C), w?.(), x(e));
		};
		if (w = useAppStore.subscribe((b) => {
			hasMaterializedWebRuntimeBrowserPage(b, e.environmentId, e.worktreeId, e.remotePageId, e.expectedGroupId) && T(!0);
		}), S) {
			w();
			return;
		}
		C = setTimeout(() => T(!1), PAGE_MATERIALIZATION_TIMEOUT_MS), b() && T(!0);
	});
}
function stageWebRuntimeBrowserTab(e) {
	let b = useAppStore.getState();
	try {
		let x = b.createBrowserTab(e.worktreeId, e.url ?? "about:blank", {
			activate: e.activate,
			browserPageId: e.remotePageId,
			browserRuntimeEnvironmentId: e.environmentId,
			...e.title === void 0 ? {} : { title: e.title },
			...e.profileId !== void 0 && e.profileId !== null ? { sessionProfileId: e.profileId } : {},
			...e.targetGroupId ? { targetGroupId: e.targetGroupId } : {},
			...e.focusAddressBar === void 0 ? {} : { focusAddressBar: e.focusAddressBar }
		}), S = useAppStore.getState().browserPagesByWorkspace[x.id]?.[0]?.id;
		return S ? (useAppStore.getState().setRemoteBrowserPageHandle(S, {
			environmentId: e.environmentId,
			remotePageId: e.remotePageId,
			staged: !0,
			...e.clientHosted ? { stagedClientHosted: !0 } : {}
		}), {
			workspaceId: x.id,
			pageId: S,
			clientHosted: e.clientHosted === !0
		}) : null;
	} catch (e) {
		return console.warn("[web-runtime-session] failed to stage browser tab:", e instanceof Error ? e.message : String(e)), null;
	}
}
var StagedWebRuntimeBrowserTabCancelledError = class extends Error {
	constructor() {
		super("The browser tab was closed before its create finished."), this.name = "StagedWebRuntimeBrowserTabCancelledError";
	}
};
function isStagedWebRuntimeBrowserTabLive(e, b) {
	return (useAppStore.getState().browserTabsByWorktree[b] ?? []).some((b) => b.id === e.workspaceId);
}
function resolveStagedWebRuntimeBrowserTabGroupId(e, b) {
	return (useAppStore.getState().unifiedTabsByWorktree[b] ?? []).find((b) => b.contentType === "browser" && b.entityId === e.workspaceId)?.groupId;
}
function findWorkspaceIdForRemotePage(e) {
	let b = useAppStore.getState();
	for (let x of b.browserTabsByWorktree[e.worktreeId] ?? []) for (let S of b.browserPagesByWorkspace[x.id] ?? []) {
		let C = b.remoteBrowserPageHandlesByPageId[S.id];
		if (C?.environmentId === e.environmentId && C.remotePageId === e.remotePageId) return x.id;
	}
	return null;
}
function rehomeStagedWebRuntimeBrowserTab(e, b) {
	if (useAppStore.getState().remoteBrowserPageHandlesByPageId[e.pageId]?.staged !== !0) return null;
	let x = findWorkspaceIdForRemotePage(b);
	return x !== null && x !== e.workspaceId ? (discardStagedWebRuntimeBrowserTab(e), null) : (useAppStore.getState().setRemoteBrowserPageHandle(e.pageId, {
		environmentId: b.environmentId,
		remotePageId: b.remotePageId,
		staged: !0,
		...e.clientHosted ? { stagedClientHosted: !0 } : {}
	}), e);
}
function restageWebRuntimeBrowserTabHostingIntent(e, b) {
	if (e.clientHosted === b.clientHosted) return e;
	let x = useAppStore.getState();
	return x.remoteBrowserPageHandlesByPageId[e.pageId]?.staged === !0 ? (x.setRemoteBrowserPageHandle(e.pageId, {
		environmentId: b.environmentId,
		remotePageId: b.remotePageId,
		staged: !0,
		...b.clientHosted ? { stagedClientHosted: !0 } : {}
	}), {
		...e,
		clientHosted: b.clientHosted
	}) : e;
}
function discardStagedWebRuntimeBrowserTab(e) {
	let b = useAppStore.getState();
	b.remoteBrowserPageHandlesByPageId[e.pageId]?.staged === !0 && (b.removeRemoteBrowserPageHandle(e.pageId), useAppStore.getState().closeBrowserTab(e.workspaceId, { reason: "cleanup" }));
}
const BROWSER_CLIENT_HOSTING_RUNTIME_CAPABILITIES = [
	BROWSER_CLIENT_HOST_RUNTIME_CAPABILITY,
	BROWSER_CLIENT_PAGE_METADATA_RUNTIME_CAPABILITY,
	BROWSER_CLIENT_AUTOMATION_RUNTIME_CAPABILITY,
	BROWSER_NETWORK_TUNNEL_RUNTIME_CAPABILITY,
	BROWSER_NETWORK_EXECUTION_HOSTS_RUNTIME_CAPABILITY
];
function runtimeAdvertisesBrowserClientHosting(e) {
	return BROWSER_CLIENT_HOSTING_RUNTIME_CAPABILITIES.every((b) => e?.includes(b));
}
function expectsBrowserClientHosting(e) {
	return e.enabled && (e.preference ?? "auto") !== "server" && e.deviceScope !== "mobile" && runtimeAdvertisesBrowserClientHosting(e.capabilities);
}
function createWebRuntimeBrowserCreationContext(e, b) {
	let x = captureWebSessionIntentOwner(b), S = captureRuntimeEnvironmentCall(b, x.pairingRevision), C = e.focusOnCreate !== !1, w = createBrowserUuid(), T = useAppStore.getState().runtimeStatusByEnvironmentId?.get(b)?.status?.capabilities ?? [], E = T.includes(BROWSER_TAB_CREATE_KNOWN_ID_RUNTIME_CAPABILITY), D = expectsBrowserClientHosting({
		enabled: useAppStore.getState().settings?.browserClientHostedRemoteEnabled !== !1,
		preference: e.placementPreference,
		deviceScope: useAppStore.getState().runtimeStatusByEnvironmentId?.get(b)?.status?.deviceScope,
		capabilities: T
	});
	return {
		args: e,
		environmentId: b,
		intentOwner: x,
		callEnvironment: S,
		shouldFocusOnCreate: C,
		shouldSelectWorktree: e.selectWorktree !== !1,
		provisionalPageId: w,
		hostSupportsKnownPageId: E,
		expectsClientHosting: D,
		unsubscribeFocusGuard: () => {},
		guardedPageId: w,
		createdPageId: null,
		createAttempted: !1,
		staged: null
	};
}
function stageWebRuntimeBrowserCreation(e) {
	let { args: b, environmentId: x, intentOwner: S, provisionalPageId: C, shouldFocusOnCreate: w } = e;
	throwIfE2eWebRuntimeBrowserCapabilityUnavailable(), assertRuntimeManagedBrowserCreationAvailable(useAppStore.getState(), x), b.clientTargetGroupId && recordWebSessionBrowserPlacement({
		environmentId: x,
		worktreeId: b.worktreeId,
		remotePageId: C,
		groupId: b.clientTargetGroupId,
		callerCreatedGroup: b.clientTargetGroupCreated
	}), e.shouldSelectWorktree && selectWebRuntimeSessionBrowserWorktree(b.worktreeId, x), e.staged = stageWebRuntimeBrowserTab({
		environmentId: x,
		worktreeId: b.worktreeId,
		remotePageId: C,
		activate: w,
		...b.url === void 0 ? {} : { url: b.url },
		...b.stagedTitle === void 0 ? {} : { title: b.stagedTitle },
		...b.profileId === void 0 ? {} : { profileId: b.profileId },
		...b.clientTargetGroupId ?? b.targetGroupId ? { targetGroupId: b.clientTargetGroupId ?? b.targetGroupId } : {},
		...b.stagedFocusAddressBar === void 0 ? {} : { focusAddressBar: b.stagedFocusAddressBar },
		clientHosted: e.expectsClientHosting
	});
	let T = w ? useAppStore.getState() : null, E = T?.activeWorktreeId, D = T?.activeWorkspaceExecutionHostId;
	e.expectedCurrentLocalTabId = T ? resolveWebSessionVisibleTabId(T, b.worktreeId) : null, w && matchesWebSessionIntentOwner(S) && (recordWebSessionFocusIntent(S, b.worktreeId, C, void 0, e.expectedCurrentLocalTabId), e.unsubscribeFocusGuard = useAppStore.subscribe((x, C) => {
		x.activeBrowserTabIdByWorktree === C.activeBrowserTabIdByWorktree && x.activeFileIdByWorktree === C.activeFileIdByWorktree && x.activeGroupIdByWorktree === C.activeGroupIdByWorktree && x.activeTabIdByWorktree === C.activeTabIdByWorktree && x.activeTabType === C.activeTabType && x.activeTabTypeByWorktree === C.activeTabTypeByWorktree && x.activeWorktreeId === C.activeWorktreeId && x.activeWorkspaceExecutionHostId === C.activeWorkspaceExecutionHostId && x.groupsByWorktree === C.groupsByWorktree && x.unifiedTabsByWorktree === C.unifiedTabsByWorktree || x.activeWorktreeId === E && x.activeWorkspaceExecutionHostId === D && resolveWebSessionVisibleTabId(x, b.worktreeId) === e.expectedCurrentLocalTabId || (clearWebSessionFocusIntentIfMatches(S, b.worktreeId, e.guardedPageId), e.unsubscribeFocusGuard());
	}));
}
function restageWebRuntimeBrowserCreation(e, b) {
	e.staged &&= restageWebRuntimeBrowserTabHostingIntent(e.staged, {
		environmentId: e.environmentId,
		remotePageId: e.provisionalPageId,
		clientHosted: b
	});
}
function rehomeWebRuntimeBrowserCreation(e, b) {
	let { args: x, environmentId: S, intentOwner: C, provisionalPageId: w } = e;
	moveWebSessionBrowserPlacement({
		environmentId: S,
		worktreeId: x.worktreeId,
		fromRemotePageId: w,
		toRemotePageId: b
	}), e.staged &&= rehomeStagedWebRuntimeBrowserTab(e.staged, {
		environmentId: S,
		worktreeId: x.worktreeId,
		remotePageId: b
	});
	let T = e.shouldFocusOnCreate ? peekWebSessionFocusIntent(C, x.worktreeId) : null;
	T?.hostTabId === w && recordWebSessionFocusIntent(C, x.worktreeId, b, void 0, T.expectedCurrentLocalTabId), e.guardedPageId = b;
}
function completeWebRuntimeBrowserCreation(e) {
	let { args: b, environmentId: x, intentOwner: S, guardedPageId: C } = e;
	e.staged = null;
	let w = e.shouldFocusOnCreate ? peekWebSessionFocusIntent(S, b.worktreeId) : null;
	return w?.hostTabId === C && w.expectedCurrentLocalTabId === e.expectedCurrentLocalTabId && clearWebSessionFocusIntentIfMatches(S, b.worktreeId, C), e.unsubscribeFocusGuard(), b.clientTargetGroupId && markWebSessionBrowserPlacementGroupMaterialized({
		worktreeId: b.worktreeId,
		groupId: b.clientTargetGroupId
	}), forgetWebSessionBrowserPlacement({
		environmentId: x,
		worktreeId: b.worktreeId,
		remotePageId: C
	}), !0;
}
var DEFINITIVE_BROWSER_CREATE_FAILURE_CODES = [
	"browser_error",
	"capability_unsupported",
	"invalid_argument",
	"invalid_params",
	"method_not_found",
	"runtime_rpc_queue_overloaded",
	"selector_ambiguous",
	"selector_not_found",
	"unauthorized"
];
function isDefinitiveBrowserCreateFailure(e) {
	return DEFINITIVE_BROWSER_CREATE_FAILURE_CODES.some((b) => hasRuntimeRpcErrorCode(e, b));
}
function prepareWebRuntimeBrowserCreationFailure(e, b) {
	let { args: x, environmentId: S, guardedPageId: C } = e;
	e.unsubscribeFocusGuard(), e.staged && discardStagedWebRuntimeBrowserTab(e.staged);
	let w = isDefinitiveBrowserCreateFailure(b), T = e.createdPageId ?? (e.createAttempted && !w && e.hostSupportsKnownPageId ? e.provisionalPageId : null), E = !T && !w, D = x.clientTargetGroupId ? releaseWebSessionBrowserPlacementGroup({
		environmentId: S,
		worktreeId: x.worktreeId,
		remotePageId: C,
		groupId: x.clientTargetGroupId,
		callerCreatedGroup: x.clientTargetGroupCreated === !0
	}) : !1;
	return x.clientTargetGroupId || forgetWebSessionBrowserPlacement({
		environmentId: S,
		worktreeId: x.worktreeId,
		remotePageId: C
	}), {
		cleanupPageId: T,
		createOutcomeUnknown: E,
		ownsClientGroupCleanup: D,
		recoveryError: null
	};
}
function finishWebRuntimeBrowserCreationFailure(e, b, x) {
	let { args: S, intentOwner: C, guardedPageId: w } = e;
	if (e.shouldFocusOnCreate && clearWebSessionFocusIntentIfMatches(C, S.worktreeId, w), S.clientTargetGroupId && claimWebSessionBrowserPlacementGroupCleanup({
		worktreeId: S.worktreeId,
		groupId: S.clientTargetGroupId,
		ownsGroupCleanup: b.ownsClientGroupCleanup
	}) && useAppStore.getState().closeEmptyGroup(S.worktreeId, S.clientTargetGroupId), x instanceof StagedWebRuntimeBrowserTabCancelledError ? console.warn("[web-runtime-session] browser tab was closed before its create finished") : S.failureLogMode === "operation-only" ? console.warn("[web-runtime-session] failed to create browser tab") : console.warn("[web-runtime-session] failed to create browser tab:", x instanceof Error ? x.message : String(x)), b.recoveryError) throw Error("The paired runtime could not recover the failed browser creation.", { cause: b.recoveryError });
	if (!e.createAttempted) throw x;
	if (b.createOutcomeUnknown) throw Error("The paired runtime did not confirm whether the browser tab was created.", { cause: x });
	return !1;
}
async function createWebRuntimeSessionBrowserTab(b) {
	let x = b.environmentId?.trim() ?? useAppStore.getState().settings?.activeRuntimeEnvironmentId?.trim() ?? null;
	if (!x || !isWebRuntimeSessionActive(x)) return !1;
	let S = createWebRuntimeBrowserCreationContext(b, x);
	try {
		stageWebRuntimeBrowserCreation(S);
		let C = b.placementPreference ?? "auto", w = { kind: "server" };
		if (C !== "server") try {
			await pauseDuringE2eWebRuntimeBrowserClientHostPreparation(), w = await window.api.runtimeEnvironments.prepareBrowserClientHostPlacement({
				selector: x,
				expectedPairingRevision: S.intentOwner.pairingRevision,
				preference: C
			});
		} catch (b) {
			throw console.warn("[web-runtime-session] failed to prepare client browser host:", b), Error(translate("browser.clientHosted.preparationFailed", "Couldn't start the remote browser on this desktop. Check the paired connection and try again."), { cause: b });
		}
		restageWebRuntimeBrowserCreation(S, w.kind === "client"), S.createAttempted = !0;
		let T = b.waitForRegistration === !0 && b.url && b.url !== "about:blank", E = unwrapRuntimeRpcResult(await S.callEnvironment({
			method: "browser.tabCreate",
			params: {
				worktree: toRuntimeWorktreeSelector(b.worktreeId),
				url: T ? void 0 : b.url,
				...S.hostSupportsKnownPageId ? { page: S.provisionalPageId } : {},
				...w.kind === "client" ? { placement: w } : {},
				profileId: b.profileId ?? void 0,
				activate: S.shouldFocusOnCreate,
				navigation: "caller",
				...b.targetGroupId ? { targetGroupId: b.targetGroupId } : {},
				waitForRegistration: b.waitForRegistration ?? !1
			},
			timeoutMs: 15e3
		}));
		if (S.createdPageId = E.browserPageId, T && S.callEnvironment({
			method: "browser.goto",
			params: {
				worktree: toRuntimeWorktreeSelector(b.worktreeId),
				page: E.browserPageId,
				url: b.url
			},
			timeoutMs: 15e3
		}).then((e) => unwrapRuntimeRpcResult(e)).catch((e) => {
			console.warn("[web-runtime-session] created browser tab navigation failed:", e instanceof Error ? e.message : String(e));
		}), await pauseAfterE2eWebRuntimeBrowserCreate(E.browserPageId), S.staged && !isStagedWebRuntimeBrowserTabLive(S.staged, b.worktreeId)) throw new StagedWebRuntimeBrowserTabCancelledError();
		E.browserPageId !== S.provisionalPageId && rehomeWebRuntimeBrowserCreation(S, E.browserPageId);
		try {
			await refreshWebRuntimeSessionTabsSnapshot(x, b.worktreeId, {
				expectedEnvironmentPairingRevision: S.intentOwner.pairingRevision,
				acceptCurrentSnapshot: !0,
				afterCurrentInFlight: !0,
				errorMode: "throw"
			});
		} catch (e) {
			if (!hasMaterializedWebRuntimeBrowserPage(useAppStore.getState(), x, b.worktreeId, E.browserPageId, b.clientTargetGroupId ?? b.targetGroupId)) throw e;
		}
		let D = (S.staged ? resolveStagedWebRuntimeBrowserTabGroupId(S.staged, b.worktreeId) : void 0) ?? b.clientTargetGroupId ?? b.targetGroupId, O = hasMaterializedWebRuntimeBrowserPage(useAppStore.getState(), x, b.worktreeId, E.browserPageId, D);
		if (O ||= await waitForWebRuntimeBrowserPageMaterialization({
			environmentId: x,
			worktreeId: b.worktreeId,
			remotePageId: E.browserPageId,
			...D ? { expectedGroupId: D } : {}
		}), !O && D && (O = hasMaterializedWebRuntimeBrowserPage(useAppStore.getState(), x, b.worktreeId, E.browserPageId), O && console.warn("[web-runtime-session] created browser tab landed outside the requested group:", D)), !O) throw Error("The created browser tab did not materialize in the client.");
		if (S.staged && !isStagedWebRuntimeBrowserTabLive(S.staged, b.worktreeId)) throw new StagedWebRuntimeBrowserTabCancelledError();
		return completeWebRuntimeBrowserCreation(S);
	} catch (e) {
		let C = prepareWebRuntimeBrowserCreationFailure(S, e);
		if (C.cleanupPageId) try {
			if (!unwrapRuntimeRpcResult(await S.callEnvironment({
				method: "browser.tabClose",
				params: {
					worktree: toRuntimeWorktreeSelector(b.worktreeId),
					page: C.cleanupPageId
				},
				timeoutMs: 15e3
			})).closed) throw Error("The paired runtime did not close the unreconciled browser tab.");
			if (await refreshWebRuntimeSessionTabsSnapshot(x, b.worktreeId, {
				expectedEnvironmentPairingRevision: S.intentOwner.pairingRevision,
				afterCurrentInFlight: !0,
				errorMode: "throw"
			}), hasMaterializedWebRuntimeBrowserPage(useAppStore.getState(), x, b.worktreeId, C.cleanupPageId)) throw Error("The closed browser tab remained materialized in the client.");
		} catch (e) {
			!S.createdPageId && S.hostSupportsKnownPageId && hasRuntimeRpcErrorCode(e, "browser_tab_not_found") ? C.recoveryError = null : (C.recoveryError = e, console.warn("[web-runtime-session] failed to clean up unreconciled browser tab:", e instanceof Error ? e.message : String(e)));
		}
		return finishWebRuntimeBrowserCreationFailure(S, C, e);
	}
}
async function activateWebRuntimeSessionWorktree(e) {
	let b = e.environmentId?.trim() ?? useAppStore.getState().settings?.activeRuntimeEnvironmentId?.trim() ?? null;
	if (!b || !isWebRuntimeSessionActive(b)) return !1;
	let x = captureWebSessionIntentOwner(b), S = captureRuntimeEnvironmentCall(b, x.pairingRevision);
	try {
		return unwrapRuntimeRpcResult(await S({
			method: "worktree.activate",
			params: {
				worktree: toRuntimeWorktreeSelector(e.worktreeId),
				notifyClients: !1,
				navigation: "caller"
			},
			timeoutMs: 15e3
		})), await refreshWebRuntimeSessionTabsSnapshot(b, e.worktreeId, {
			expectedEnvironmentPairingRevision: x.pairingRevision,
			acceptCurrentSnapshot: !0
		}), scheduleRuntimeWorktreeRecoveryRefresh(b, e.worktreeId, x.pairingRevision), !0;
	} catch (e) {
		return console.warn("[web-runtime-session] failed to activate worktree:", e instanceof Error ? e.message : String(e)), !1;
	}
}
async function activateWebRuntimeSessionTab(e) {
	return await callWebRuntimeSessionTabMethod("session.tabs.activate", e) === "applied";
}
async function closeWebRuntimeSessionTab(e) {
	return callWebRuntimeSessionTabMethod("session.tabs.close", e);
}
async function callWebRuntimeSessionTabMethod(e, b) {
	let S = b.environmentId?.trim() ?? useAppStore.getState().settings?.activeRuntimeEnvironmentId?.trim() ?? null;
	if (!S || !isWebRuntimeSessionActive(S)) return "failed";
	let w = captureWebSessionIntentOwner(S), E = captureRuntimeEnvironmentCall(S, w.pairingRevision), O = /* @__PURE__ */ new Set(), k = null, A = e === "session.tabs.close", j = A && b.reason !== "user";
	if (j && (!b.publicationEpoch || !b.terminalHandle)) {
		let { acceptReplayedWebSessionTabsSnapshot: e } = await import("./web-session-tabs-sync-BGwzt9H0.js");
		return e(S, b.worktreeId), await refreshWebRuntimeSessionTabsSnapshot(S, b.worktreeId), console.warn("[web-runtime-session] suppressed lifecycle close without incarnation evidence", { closeReason: b.reason }), "failed";
	}
	let M = toHostSessionTabId(b.tabId);
	A && (O.add(M), recordWebSessionCloseIntent(w, b.worktreeId, M, Date.now()));
	try {
		let { resolveHostSessionTabIdForWebSessionTab: T } = await import("./web-session-tabs-sync-BGwzt9H0.js"), N = T(useAppStore.getState(), {
			environmentId: S,
			worktreeId: b.worktreeId,
			tabId: b.tabId
		}) ?? toHostSessionTabId(b.tabId);
		A ? (O.add(N), recordWebSessionCloseIntent(w, b.worktreeId, N, Date.now())) : (k = N, recordWebSessionFocusIntent(w, b.worktreeId, N));
		let P = unwrapRuntimeRpcResult(await E({
			method: j ? "session.tabs.closeLifecycle" : e,
			params: {
				worktree: toRuntimeWorktreeSelector(b.worktreeId),
				tabId: N,
				...e === "session.tabs.activate" ? {
					notifyClients: !1,
					navigation: "caller",
					intent: "user"
				} : {},
				...j ? {
					reason: b.reason,
					publicationEpoch: b.publicationEpoch,
					terminal: b.terminalHandle
				} : A ? { reason: b.reason } : {}
			},
			timeoutMs: WEB_SESSION_TAB_RPC_TIMEOUT_MS
		}));
		if (A) {
			if (P?.refused === !0 && P.snapshotRepublished === !0) {
				clearWebSessionCloseIntent(w, b.worktreeId, M), clearWebSessionCloseIntent(w, b.worktreeId, N);
				let { acceptReplayedWebSessionTabsSnapshot: e } = await import("./web-session-tabs-sync-BGwzt9H0.js");
				e(S, b.worktreeId);
			}
			await refreshWebRuntimeSessionTabsSnapshot(S, b.worktreeId, { expectedEnvironmentPairingRevision: w.pairingRevision });
		}
		return "applied";
	} catch (e) {
		k && clearWebSessionFocusIntentIfMatches(w, b.worktreeId, k);
		let x = hasRuntimeRpcErrorCode(e, "tab_not_found") || hasRuntimeRpcErrorCode(e, "terminal_tab_not_found");
		for (let e of O) x ? makeWebSessionCloseIntentDurable(w, b.worktreeId, e) : clearWebSessionCloseIntent(w, b.worktreeId, e);
		if (j) {
			let { acceptReplayedWebSessionTabsSnapshot: e } = await import("./web-session-tabs-sync-BGwzt9H0.js");
			e(S, b.worktreeId), await refreshWebRuntimeSessionTabsSnapshot(S, b.worktreeId, { expectedEnvironmentPairingRevision: w.pairingRevision });
		}
		return console.warn(`[web-runtime-session] failed to ${A ? "close" : "activate"} tab:`, e instanceof Error ? e.message : String(e)), x ? "unknown-tab" : "failed";
	}
}
async function moveWebRuntimeSessionTab(e) {
	let b = e.environmentId?.trim() ?? useAppStore.getState().settings?.activeRuntimeEnvironmentId?.trim() ?? null;
	if (!b || !isWebRuntimeSessionActive(b)) return !1;
	let x = captureWebSessionIntentOwner(b), S = captureRuntimeEnvironmentCall(b, x.pairingRevision);
	e.kind === "reorder" && recordWebSessionReorderIntent(x, e.worktreeId, e.targetGroupId, e.tabOrder, Date.now());
	try {
		let { resolveHostSessionTabIdForWebSessionTab: C } = await import("./web-session-tabs-sync-BGwzt9H0.js"), w = useAppStore.getState(), T = (x) => C(w, {
			environmentId: b,
			worktreeId: e.worktreeId,
			tabId: x
		}) ?? (isWebTerminalSurfaceTabId(x) ? toHostSessionTabId(x) : null), E = e.kind === "reorder" ? T(e.tabId) : ((e) => T(e) ?? e)(e.tabId);
		if (!E) return clearWebSessionReorderIntent(x, e.worktreeId, e.targetGroupId), !1;
		let O = e.kind === "reorder" ? e.tabOrder.map(T).filter((e) => !!e) : null;
		if (O && !O.includes(E)) return clearWebSessionReorderIntent(x, e.worktreeId, e.targetGroupId), !1;
		let k = e.kind === "move-to-group" && typeof e.index == "number" ? w.groupsByWorktree?.[e.worktreeId]?.find((b) => b.id === e.targetGroupId)?.tabOrder.slice(0, e.index).map(T).filter((e) => !!e).length ?? e.index : e.kind === "move-to-group" ? e.index : void 0, A = {
			worktree: toRuntimeWorktreeSelector(e.worktreeId),
			tabId: E,
			targetGroupId: e.targetGroupId
		};
		return unwrapRuntimeRpcResult(await S({
			method: "session.tabs.move",
			params: e.kind === "reorder" ? {
				...A,
				kind: "reorder",
				tabOrder: O
			} : e.kind === "split" ? {
				...A,
				kind: "split",
				splitDirection: e.splitDirection
			} : {
				...A,
				kind: "move-to-group",
				index: k
			},
			timeoutMs: 15e3
		})), !0;
	} catch (b) {
		return e.kind === "reorder" && clearWebSessionReorderIntent(x, e.worktreeId, e.targetGroupId), console.warn("[web-runtime-session] failed to move tab:", b instanceof Error ? b.message : String(b)), !1;
	}
}
var pendingFocusPaneFrameId = null;
function cancelPendingFocusPaneFrame() {
	pendingFocusPaneFrameId !== null && (cancelAnimationFrame(pendingFocusPaneFrameId), pendingFocusPaneFrameId = null);
}
function activateTabAndFocusPane(e, b, x) {
	let { setActiveTab: S, setActiveTabType: C } = useAppStore.getState();
	C("terminal"), S(e), cancelPendingFocusPaneFrame(), b !== null && (pendingFocusPaneFrameId = requestAnimationFrame(() => {
		pendingFocusPaneFrameId = null;
		let S = {
			tabId: e,
			leafId: b,
			...x?.ackPaneKeyOnSuccess ? { ackPaneKeyOnSuccess: x.ackPaneKeyOnSuccess } : {},
			...x?.flashFocusedPane ? { flashFocusedPane: !0 } : {},
			...x?.scrollToBottomIfOutputSinceLastView ? { scrollToBottomIfOutputSinceLastView: !0 } : {}
		};
		window.dispatchEvent(new CustomEvent(FOCUS_TERMINAL_PANE_EVENT, { detail: S }));
	}));
}
var latestWebRuntimeSplitFocusRequestByKey = /* @__PURE__ */ new Map(), nextWebRuntimeSplitFocusRequestId = 0;
function beginWebRuntimeSplitFocusRequest(e, b) {
	let x = {
		key: `${webSessionIntentOwnerKey(e)}\0${b}`,
		id: ++nextWebRuntimeSplitFocusRequestId
	};
	return latestWebRuntimeSplitFocusRequestByKey.set(x.key, x.id), x;
}
function isLatestWebRuntimeSplitFocusRequest(e) {
	return !!(e && latestWebRuntimeSplitFocusRequestByKey.get(e.key) === e.id);
}
function finishWebRuntimeSplitFocusRequest(e) {
	e && isLatestWebRuntimeSplitFocusRequest(e) && latestWebRuntimeSplitFocusRequestByKey.delete(e.key);
}
function captureWebRuntimeSplitFocusTarget(e, b) {
	let x = useAppStore.getState();
	if (!x || !x.tabsByWorktree?.[b.worktreeId]?.find((e) => e.id === b.tabId) || x.terminalLayoutsByTabId?.[b.tabId]?.ptyIdsByLeafId?.[b.leafId] !== e) return null;
	let S = x.activeWorktreeId ?? null, C = S ? resolveWebSessionVisibleTabId(x, S) : null;
	return {
		worktreeId: b.worktreeId,
		sourceTabId: b.tabId,
		sourceLeafId: b.leafId,
		sourcePtyId: e,
		expectedActiveWorktreeId: S,
		expectedExecutionHostId: x.activeWorkspaceExecutionHostId ?? null,
		expectedCurrentLocalTabId: C,
		expectedCurrentLocalLeafId: C ? x.terminalLayoutsByTabId?.[C]?.activeLeafId ?? null : null
	};
}
function matchesWebRuntimeSplitFocusTarget(e, b, x) {
	let S = useAppStore.getState();
	if (!S || toHostSessionTabId(e.sourceTabId) !== b || S.terminalLayoutsByTabId?.[e.sourceTabId]?.ptyIdsByLeafId?.[e.sourceLeafId] !== e.sourcePtyId || (S.activeWorktreeId ?? null) !== e.expectedActiveWorktreeId || (S.activeWorkspaceExecutionHostId ?? null) !== e.expectedExecutionHostId) return !1;
	let C = e.expectedActiveWorktreeId ? resolveWebSessionVisibleTabId(S, e.expectedActiveWorktreeId) : null;
	return C === e.expectedCurrentLocalTabId ? (C ? S.terminalLayoutsByTabId?.[C]?.activeLeafId ?? null : null) === e.expectedCurrentLocalLeafId : !!(C && x && toHostSessionTabId(C) === b && S.terminalLayoutsByTabId?.[C]?.activeLeafId === x);
}
async function focusSplitWebRuntimeTerminalPane(e, b, x, S) {
	let C = S?.tabId?.trim(), w = S?.leafId?.trim();
	if (!(!C || !w || !b || !isLatestWebRuntimeSplitFocusRequest(x) || !matchesWebSessionIntentOwner(e) || !matchesWebRuntimeSplitFocusTarget(b, C))) {
		if (recordWebSessionFocusIntent(e, b.worktreeId, C, w, b.expectedCurrentLocalTabId), await refreshWebRuntimeSessionTabsSnapshot(e.environmentId, b.worktreeId, {
			expectedEnvironmentPairingRevision: e.pairingRevision,
			acceptCurrentSnapshot: !0
		}), !isLatestWebRuntimeSplitFocusRequest(x) || !matchesWebSessionIntentOwner(e) || !matchesWebRuntimeSplitFocusTarget(b, C, w)) {
			isLatestWebRuntimeSplitFocusRequest(x) && clearWebSessionFocusIntentIfMatches(e, b.worktreeId, C, w);
			return;
		}
		activateTabAndFocusPane(toWebTerminalSurfaceTabId(C), w);
	}
}
var pendingWebRuntimeSplitMirrorTelemetry = /* @__PURE__ */ new Map(), WEB_RUNTIME_SPLIT_MIRROR_SUPPRESSION_TTL_MS = 3e4, pendingWebRuntimeSplitMirrorTelemetryId = 0;
function splitWebRuntimeTerminal(e, b, x, S) {
	if (!e) return !1;
	let C = parseRemoteRuntimePtyId(e), w = C?.environmentId?.trim();
	if (!C || !w || !isWebRuntimeSessionActive(w)) return !1;
	let T = schedulePendingWebRuntimeSplitMirrorTelemetryRelease(e, b, reservePendingWebRuntimeSplitMirrorTelemetry(e, b)), E = captureWebSessionIntentOwner(w), D = S ? captureWebRuntimeSplitFocusTarget(e, S) : null, O = S ? beginWebRuntimeSplitFocusRequest(E, S.worktreeId) : null;
	return captureRuntimeEnvironmentCall(w, E.pairingRevision)({
		method: "terminal.split",
		params: {
			terminal: C.handle,
			direction: b,
			telemetrySource: x
		},
		timeoutMs: 15e3
	}).then(async (e) => {
		await focusSplitWebRuntimeTerminalPane(E, D, O, unwrapRuntimeRpcResult(e)?.split);
	}).catch((e) => {
		T();
		let b = e instanceof Error ? e.message : String(e);
		toast.error(b), console.warn("[web-runtime-session] failed to split terminal:", b);
	}).finally(() => finishWebRuntimeSplitFocusRequest(O)), !0;
}
function consumePendingWebRuntimeSplitMirrorTelemetry(e, b) {
	if (!e) return !1;
	let x = getPendingWebRuntimeSplitMirrorTelemetryKey(e, b), S = pendingWebRuntimeSplitMirrorTelemetry.get(x), C = S?.values().next().value;
	return !S || !C ? !1 : (S.delete(C), S.size === 0 && pendingWebRuntimeSplitMirrorTelemetry.delete(x), !0);
}
function reservePendingWebRuntimeSplitMirrorTelemetry(e, b) {
	let x = String(++pendingWebRuntimeSplitMirrorTelemetryId), S = getPendingWebRuntimeSplitMirrorTelemetryKey(e, b), C = pendingWebRuntimeSplitMirrorTelemetry.get(S) ?? /* @__PURE__ */ new Set();
	return C.add(x), pendingWebRuntimeSplitMirrorTelemetry.set(S, C), x;
}
function schedulePendingWebRuntimeSplitMirrorTelemetryRelease(e, b, x) {
	let S = !1, C = () => {
		S || (S = !0, releasePendingWebRuntimeSplitMirrorTelemetry(e, b, x));
	}, w = globalThis.setTimeout(C, WEB_RUNTIME_SPLIT_MIRROR_SUPPRESSION_TTL_MS);
	return () => {
		globalThis.clearTimeout(w), C();
	};
}
function releasePendingWebRuntimeSplitMirrorTelemetry(e, b, x) {
	let S = getPendingWebRuntimeSplitMirrorTelemetryKey(e, b), C = pendingWebRuntimeSplitMirrorTelemetry.get(S);
	C && (C.delete(x), C.size === 0 && pendingWebRuntimeSplitMirrorTelemetry.delete(S));
}
function getPendingWebRuntimeSplitMirrorTelemetryKey(e, b) {
	return `${b}:${e}`;
}
function closeWebRuntimeTerminal(e) {
	if (!e) return !1;
	let b = parseRemoteRuntimePtyId(e), x = b?.environmentId?.trim();
	return !b || !x || !isWebRuntimeSessionActive(x) ? !1 : (window.api.runtimeEnvironments.call({
		selector: x,
		method: "terminal.close",
		params: { terminal: b.handle },
		timeoutMs: 15e3
	}).then((e) => {
		unwrapRuntimeRpcResult(e);
	}).catch((e) => {
		console.warn("[web-runtime-session] failed to close terminal pane:", e instanceof Error ? e.message : String(e));
	}), !0);
}
async function updateWebRuntimePaneLayout(e) {
	let b = getRuntimeEnvironmentIdForWorktree(useAppStore.getState(), e.worktreeId) ?? null;
	if (!b || !isWebRuntimeSessionActive(b)) return !1;
	let x = captureRuntimeEnvironmentCall(b), S = isWebTerminalSurfaceTabId(e.tabId) ? toHostSessionTabId(e.tabId) : e.tabId;
	try {
		return unwrapRuntimeRpcResult(await x({
			method: "session.tabs.updatePaneLayout",
			params: {
				worktree: toRuntimeWorktreeSelector(e.worktreeId),
				tabId: S,
				root: e.root,
				expandedLeafId: e.expandedLeafId,
				...e.titlesByLeafId ? { titlesByLeafId: e.titlesByLeafId } : {}
			},
			timeoutMs: 15e3
		})), !0;
	} catch (e) {
		return console.warn("[web-runtime-session] failed to update pane layout:", e instanceof Error ? e.message : String(e)), !1;
	}
}
function setWebRuntimeTabProps(e) {
	let b = getRuntimeEnvironmentIdForWorktree(useAppStore.getState(), e.worktreeId) ?? null;
	if (!b || !isWebRuntimeSessionActive(b)) return !1;
	let x = captureRuntimeEnvironmentCall(b), S = useAppStore.getState();
	return import("./web-session-tabs-sync-BGwzt9H0.js").then(({ resolveHostSessionTabIdForWebSessionTab: C }) => {
		let w = C(S, {
			environmentId: b,
			worktreeId: e.worktreeId,
			tabId: e.tabId
		}) ?? (isWebTerminalSurfaceTabId(e.tabId) ? toHostSessionTabId(e.tabId) : e.tabId);
		return x({
			method: "session.tabs.setTabProps",
			params: {
				worktree: toRuntimeWorktreeSelector(e.worktreeId),
				tabId: w,
				...e.color === void 0 ? {} : { color: e.color },
				...e.isPinned === void 0 ? {} : { isPinned: e.isPinned },
				...e.viewMode === void 0 ? {} : { viewMode: e.viewMode }
			},
			timeoutMs: 15e3
		});
	}).then((e) => {
		unwrapRuntimeRpcResult(e);
	}).catch((e) => {
		console.warn("[web-runtime-session] failed to set tab props:", e instanceof Error ? e.message : String(e));
	}), !0;
}
function clearWebRuntimeTerminalBuffer(e) {
	if (!e) return !1;
	let b = parseRemoteRuntimePtyId(e), x = b?.environmentId?.trim();
	return !b || !x || !isWebRuntimeSessionActive(x) ? !1 : (window.api.runtimeEnvironments.call({
		selector: x,
		method: "terminal.clearBuffer",
		params: { terminal: b.handle },
		timeoutMs: 15e3
	}).then((e) => {
		unwrapRuntimeRpcResult(e);
	}).catch((e) => {
		console.warn("[web-runtime-session] failed to clear terminal buffer:", e instanceof Error ? e.message : String(e));
	}), !0);
}
export { endWebRuntimeWakeTerminalRespawn as $, nativeChatRequiresLocalTranscript as $t, _getWebSessionTabsTrackingCountsForTest as A, latestReceivedSessionTabsInventoryFrameByEnvironment as At, setHostSessionTabIdMapping as B, withAgentSessionCreateOperationId as Bt, shouldBootstrapInitialWebRuntimeTerminal as C, HOST_WORKING_CLIENT_BOUNDARY_LIMIT as Ct, queueAcceptedWebSessionTerminalSnapshot as D, WEB_SESSION_TABS_VISIBILITY_RESUME_STAGGER_MS as Dt, shouldSyncRuntimeSessionTabs as E, WEB_SESSION_GROUP_PREFIX as Et, getWebSessionTabsTrackingGeneration as F, sessionTabsInventoryOmissionsByWorktree as Ft, markHostSessionMirrorWorktreeHydrated as G, buildDefaultTerminalOptions as Gt, parkUntilHostMirrorHandleLands as H, createAgentSessionKeyboardOptions as Ht, resetWebSessionTabsSnapshotFreshnessForTests as I, peekWebSessionTerminalPlacementGroup as It, markWebSessionBrowserPlacementAdopted as J, resolveTerminalCursorInactiveStyle as Jt, parkUntilHostSessionMirrorHydrates as K, normalizeTerminalFastScrollSensitivity as Kt, clearHostSessionTabIdMappings as L, runRemoteAgentSessionLaunch as Lt, clearWebSessionTabsTrackingForEnvironment as M, nextReceivedSessionTabsFrame as Mt, getLastKnownHostTerminalTabCount as N, replayableSessionTabsSnapshotByWorktree as Nt, subscribeAcceptedWebSessionTerminalHandle as O, hostWorkingClientBoundaryByPaneKey as Ot, getLatestWebSessionTabsPublicationEpoch as P, sessionTabsEnvironmentsByWorktree as Pt, beginWebRuntimeWakeTerminalRespawn as Q, isNativeChatSupportedAgent as Qt, hostSessionTabIdsByLocalTabForWorktree as R, createAgentSessionCreateOperation as Rt, shouldApplyWebSessionTabsSnapshot as S, listRemoteRuntimeSessionTabsDeduped as St, shouldSyncAllRuntimeSessionTabs as T, VISIBILITY_INVENTORY_REMOVAL_EPOCH as Tt, hasHostSessionMirrorHydrated as U, DEFAULT_TERMINAL_FAST_SCROLL_SENSITIVITY as Ut, hasHostMirrorHandleWaitExpired as V, agentResumeHostAuthorityCapability as Vt, markHostSessionMirrorHydrated as W, DEFAULT_TERMINAL_SCROLL_SENSITIVITY as Wt, clearWebSessionReorderIntentsForOwner as X, seedNativeChatLaunchDraftForAgentTab as Xt, peekWebSessionBrowserPlacementGroup as Y, deliverLaunchPromptToAgentTab as Yt, resolveWebSessionReorderedOrder as Z, NATIVE_CHAT_SUPPORTED_AGENT_LIST as Zt, refreshWebRuntimeSessionTabsSnapshot as _, noteRetiredValue as _t, splitWebRuntimeTerminal as a, buildAgentTuiClearInputForText as an, recordReceivedWebSessionTabsRemoval as at, WEB_SESSION_TABS_FRAME_OUTRANKED as b, sameSessionTabsPublicationLineage as bt, moveWebRuntimeSessionTab as c, shouldApplyRecoveredWebSessionTabsSnapshot as ct, activateWebRuntimeSessionWorktree as d, acceptSessionTabsRuntimeId as dt, resolveNativeChatTranscriptAgent as en, shouldSkipWebRuntimeWakeTerminalRespawn as et, createWebRuntimeSessionBrowserTab as f, getSessionTabsRuntimeIdFromResponse as ft, insertUnifiedTabAfterAnchor as g, isRetiredSessionTabsRuntimeId as gt, createWebRuntimeSessionTerminal as h, isCurrentSessionTabsRuntimeId as ht, setWebRuntimeTabProps as i, AGENT_TUI_CLEAR_INPUT_MAX as in, recordReceivedWebSessionTabsInventory as it, acceptReplayedWebSessionTabsSnapshot as j, latestSessionTabsSnapshotByWorktree as jt, _getWebSessionTabsReceiptTrackingCountsForTest as k, latestReceivedSessionTabsFrameByEnvironment as kt, activateWebRuntimeSessionTab as l, hostSnapshotAffirmsClientHostedPages as lt, createWebRuntimeAgentSessionTerminalWithLaunchDraft as m, isCurrentSessionTabsRuntimeFrame as mt, closeWebRuntimeTerminal as n, canMirrorLaunchDraftToNativeChat as nn, getTrackedWebSessionTabsWorktrees as nt, updateWebRuntimePaneLayout as o, isWebRuntimeSessionActive as on, recordReceivedWebSessionTabsSnapshot as ot, createWebRuntimeAgentSessionTerminal as p, hasRetiredValue as pt, isWebSessionBrowserPlacementGroupReserved as q, normalizeTerminalScrollSensitivity as qt, consumePendingWebRuntimeSplitMirrorTelemetry as r, AGENT_TUI_CLEAR_INPUT_LINE as rn, isSessionTabsListAllResult as rt, activateTabAndFocusPane as s, sessionTabsFreshnessKey as st, clearWebRuntimeTerminalBuffer as t, shouldStepNativeChatAskAnswer as tn, advancesSessionTabsFreshness as tt, closeWebRuntimeSessionTab as u, hostSnapshotAffirmsWorktreeContents as ut, recoverWebSessionTerminalOrphansBeforeApply as v, recordReceivedWebSessionTabsEnvironmentFrame as vt, shouldRespawnWebRuntimeTerminalAfterWake as w, MAX_TRACKED_SESSION_TABS_INVENTORY_OMISSIONS as wt, decideWebSessionTabsSnapshot as x, suppressE2eWebRuntimeBrowserSnapshot as xt, hostScopeCensusIsComplete as y, reviveRetiredValue as yt, resolveHostSessionTabIdForWebSessionTab as z, toAgentLaunchPreferences as zt };
