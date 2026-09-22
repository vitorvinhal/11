import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { $m as requeueStructuredAgentSessionSendRefusal, Bl as getLocalProjectExecutionRuntimeContext, Df as callStructuredAgentSession, Dg as isNativeChatTranscriptLocalReadable, Ef as closeStructuredAgentSession, Ff as getExecutionHostIdForWorktree, Gm as mutateStructuredAgentSessionLaunchPrompt, Hm as discardStructuredAgentSessionLaunchOutbox, JS as LOCAL_EXECUTION_HOST_ID, Lm as recordWebSessionFocusIntent, Mm as LOCAL_STRUCTURED_SESSION_OWNER, Nf as readLocalRuntimeCapabilitiesOrUnknown, Pf as refreshLocalRuntimeCapabilities, Pm as clearWebSessionFocusIntentIfMatches, Qd as structuredAgentSessionTabId, Sh as subscribeStructuredAgentLaunchStatus, Sy as toRuntimeWorktreeSelector, Th as startStructuredAgentLaunchCancellationCleanup, Um as enqueueStructuredAgentSessionLaunchPrompt, VC as STRUCTURED_AGENT_SESSION_RUNTIME_CAPABILITY, Vl as getLocalRepoProjectExecutionRuntimeContext, _h as retireAbsentStructuredAgentSessionLaunchCancellationTombstones, ah as structuredAgentSessionCreateFingerprint, ch as deleteStructuredLaunchStateIfCurrent, dh as getStructuredLaunchState, eh as structuredAgentSessionSendRequest, fh as getStructuredLaunchStateBySessionId, gh as notifyStructuredLaunchListeners, hb as FLOATING_TERMINAL_WORKTREE_ID, hh as markStructuredAgentSessionLaunchPublished, iC as parseExecutionHostId, ih as createStructuredAgentSessionOperationId, lh as getPersistedStructuredAgentLaunchRecord, mh as markStructuredAgentSessionLaunchCancelled, mv as folderWorkspaceKey, ny as hasRuntimeRpcErrorCode, oC as toRuntimeExecutionHostId, ph as hasStructuredAgentSessionLaunchCancellationTombstone, t as useAppStore, uh as getStructuredAgentLaunchStatus, vh as retireStructuredAgentSessionLaunchCancellationTombstone, vl as getConnectionIdFromState, vv as parseWorkspaceKey, wf as suppressCancelledStructuredSessionTabs, wh as beginStructuredAgentSessionAuthoritativeInventory, xh as structuredLaunchIdentity, yh as setStructuredLaunchState, yl as getRepoConnectionIdFromState, zm as resolveWebSessionVisibleTabId } from "./store-C9f8FDJV.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { _t as noteRetiredValue, bt as sameSessionTabsPublicationLineage, pt as hasRetiredValue, ut as hostSnapshotAffirmsWorktreeContents, yt as reviveRetiredValue } from "./web-runtime-session-CeAC5QPx.js";
import { _ as resolveStructuredNativeChatSupport, g as prefersStructuredNativeChatByDefault, m as decideInitialAgentTabViewMode, y as isAgentSessionHandleProvider } from "./native-chat-session-option-cache-DOY0fjiI.js";
import { L as defaultAgentChatLabel, j as applyWebSessionTabsSnapshot, r as applyWebSessionTabsStorePatch } from "./web-session-tabs-sync-BfOF1RHT.js";
import { n as getAgentCatalog } from "./agent-catalog-Cgr0_vcs.js";
function workspaceKindForWorktreeId(h) {
	return h === "global-floating-terminal" ? "floating" : parseWorkspaceKey(h)?.type === "folder" ? "folder" : "git-worktree";
}
function hasExplicitTuiLaunchCommand(h, W) {
	return !!h?.agentCmdOverrides?.[W]?.trim();
}
function resolveAgentLaunchRoute(h) {
	return prefersStructuredNativeChatByDefault(h.settings) && structuredAgentLaunchSupported(h) ? "structured-native-chat" : decideInitialAgentTabViewMode({
		experimentalNativeChat: h.settings?.experimentalNativeChat,
		openAgentTabsInChatByDefault: h.settings?.openAgentTabsInChatByDefault,
		agent: h.agent,
		promptDelivery: h.promptDelivery,
		launchDraftText: h.launchText,
		nativeChatTranscriptIsLocalReadable: h.nativeChatTranscriptIsLocalReadable
	}) === "chat" ? "legacy-native-chat" : "terminal-tui";
}
function structuredAgentLaunchSupported(h) {
	return h.settings?.experimentalStructuredNativeChat === !0 && resolveStructuredNativeChatSupport({
		agent: h.agent,
		executionHostId: h.executionHostId,
		hostCapabilities: h.hostCapabilities,
		workspaceKind: h.workspaceKind,
		projectRuntime: h.projectRuntime,
		requiresTuiLaunchCommand: h.requiresTuiLaunchCommand
	}).supported;
}
function resolveExecutionHostId(h, W) {
	return W.worktreeId ? getExecutionHostIdForWorktree(h, W.worktreeId) : W.runtimeEnvironmentId ? toRuntimeExecutionHostId(W.runtimeEnvironmentId) : W.executionHostId ?? "local";
}
function resolveProjectRuntime(h, W, G) {
	if (!(G !== "local" || W.kind === "floating")) return W.worktreeId ? getLocalProjectExecutionRuntimeContext(h, W.worktreeId) : getLocalRepoProjectExecutionRuntimeContext(h, W.repoId);
}
function resolveTranscriptIsLocalReadable(h, W, G) {
	if (W.worktreeId) {
		let G = getConnectionIdFromState(h, W.worktreeId);
		return isNativeChatTranscriptLocalReadable(G === void 0 ? getRepoConnectionIdFromState(h, W.repoId) : G);
	}
	let K = parseExecutionHostId(G);
	return K?.kind === "ssh" ? isNativeChatTranscriptLocalReadable(K.targetId) : !0;
}
function buildAgentLaunchRouteInput(h, W) {
	let { agent: G, workspace: K, tuiCustomization: q } = W, J = resolveExecutionHostId(h, K);
	return {
		agent: G,
		settings: h.settings,
		executionHostId: J,
		hostCapabilities: readLocalRuntimeCapabilitiesOrUnknown(),
		workspaceKind: K.kind,
		projectRuntime: resolveProjectRuntime(h, K, J),
		promptDelivery: W.promptDelivery,
		launchText: W.prompt,
		nativeChatTranscriptIsLocalReadable: resolveTranscriptIsLocalReadable(h, K, J),
		requiresTuiLaunchCommand: !!q?.cwd?.trim() || hasExplicitTuiLaunchCommand(h.settings, G),
		initialSessionOptions: W.initialSessionOptions
	};
}
function createStructuredAgentSessionId(h, W) {
	return `${h}_${W().replaceAll("-", "_")}`;
}
function structuredAgentSessionCreateParams(h) {
	let W = {
		worktree: h.worktree,
		agent: h.agent,
		...h.resumeFrom ? { resumeFrom: h.resumeFrom } : {}
	};
	return {
		envelope: {
			sessionId: h.sessionId,
			clientOperationId: createStructuredAgentSessionOperationId(h.randomUuid, h.now),
			expectedRuntimeFence: null,
			payloadFingerprint: structuredAgentSessionCreateFingerprint({
				sessionId: h.sessionId,
				...W
			})
		},
		...W
	};
}
var DEFINITIVE_REFUSAL_CODES = new Set(["structured_agent_session_unsupported"]), DEFINITIVE_RPC_ERROR_CODES = new Set(["method_not_found"]);
function isDefinitiveAgentSessionCreateRefusal(h) {
	return typeof h == "string" ? DEFINITIVE_REFUSAL_CODES.has(h) || DEFINITIVE_RPC_ERROR_CODES.has(h) : !1;
}
var StructuredAgentSessionCreateError = class extends Error {
	constructor(h, W) {
		super(h), this.code = W;
	}
}, StructuredAgentSessionCreateRefusalError = class extends StructuredAgentSessionCreateError {
	constructor(h, W = "structured_agent_session_unsupported") {
		super(h, W), this.name = "StructuredAgentSessionCreateRefusalError";
	}
}, StructuredAgentSessionCreateUnknownOutcomeError = class extends StructuredAgentSessionCreateError {
	constructor(h, W) {
		super(h, W), this.name = "StructuredAgentSessionCreateUnknownOutcomeError";
	}
}, DEFINITIVE_CREATE_FAILURE_CODES = ["structured_agent_session_unsupported", "method_not_found"];
function definitiveStructuredAgentSessionCreateErrorCode(h) {
	if (h instanceof StructuredAgentSessionCreateError) return h instanceof StructuredAgentSessionCreateRefusalError && isDefinitiveAgentSessionCreateRefusal(h.code) ? h.code : null;
	for (let W of DEFINITIVE_CREATE_FAILURE_CODES) if (hasRuntimeRpcErrorCode(h, W)) return W;
	return null;
}
function createStructuredAgentSessionLaunchIntent(h, W, G) {
	return buildStructuredAgentSessionLaunchIntent(h, W, createStructuredAgentSessionId(W, () => crypto.randomUUID()), G);
}
function buildStructuredAgentSessionLaunchIntent(h, W, G, K) {
	let q = useAppStore.getState();
	return recordWebSessionFocusIntent({ environmentId: LOCAL_STRUCTURED_SESSION_OWNER }, h, `agent-session:${G}`, void 0, resolveWebSessionVisibleTabId(q, h)), {
		sessionId: G,
		worktreeId: h,
		agent: W,
		params: structuredAgentSessionCreateParams({
			sessionId: G,
			worktree: toRuntimeWorktreeSelector(h),
			agent: W,
			...K ? { resumeFrom: K } : {},
			randomUuid: () => crypto.randomUUID()
		})
	};
}
function retryStructuredAgentSessionLaunchIntent(h) {
	return buildStructuredAgentSessionLaunchIntent(h.worktreeId, h.agent, h.sessionId, h.params.resumeFrom);
}
function restoreStructuredAgentSessionLaunchIntent(h) {
	let W = useAppStore.getState();
	return recordWebSessionFocusIntent({ environmentId: LOCAL_STRUCTURED_SESSION_OWNER }, h.worktreeId, `agent-session:${h.sessionId}`, void 0, resolveWebSessionVisibleTabId(W, h.worktreeId)), {
		sessionId: h.sessionId,
		worktreeId: h.worktreeId,
		agent: h.agent,
		params: {
			envelope: {
				sessionId: h.sessionId,
				clientOperationId: h.clientOperationId,
				expectedRuntimeFence: h.expectedRuntimeFence,
				payloadFingerprint: h.payloadFingerprint
			},
			worktree: toRuntimeWorktreeSelector(h.worktreeId),
			agent: h.agent,
			...h.resumeFrom ? { resumeFrom: h.resumeFrom } : {}
		}
	};
}
function abandonStructuredAgentSessionLaunchIntent(h) {
	clearWebSessionFocusIntentIfMatches({ environmentId: LOCAL_STRUCTURED_SESSION_OWNER }, h.worktreeId, `agent-session:${h.sessionId}`);
}
var SELECTOR_NOT_RESOLVABLE_CODE = "selector_not_found", CREATE_SUPPORT_RETRY_DELAYS_MS = [
	50,
	150,
	300
];
function delay(h) {
	return new Promise((W) => setTimeout(W, h));
}
function runtimeErrorCode(h) {
	return h && typeof h == "object" && "code" in h && typeof h.code == "string" ? h.code : "runtime_unavailable";
}
async function hostSupportsCreate(h) {
	for (let W = 0;; W += 1) try {
		return (await callStructuredAgentSession({ kind: "local" }, "agentSession.createSupport", {
			worktree: h.params.worktree,
			agent: h.agent
		})).supported === !0;
	} catch (h) {
		let G = CREATE_SUPPORT_RETRY_DELAYS_MS[W];
		if (G === void 0) return !1;
		if (hasRuntimeRpcErrorCode(h, SELECTOR_NOT_RESOLVABLE_CODE)) {
			await delay(G);
			continue;
		}
		let K = runtimeErrorCode(h);
		if (isDefinitiveAgentSessionCreateRefusal(K)) return !1;
		throw new StructuredAgentSessionCreateUnknownOutcomeError(h instanceof Error ? h.message : String(h), K);
	}
}
async function requireHostCreateSupport(h) {
	if (!await hostSupportsCreate(h)) throw abandonStructuredAgentSessionLaunchIntent(h), new StructuredAgentSessionCreateRefusalError("structured_agent_session_unsupported", "structured_agent_session_unsupported");
}
async function launchStructuredAgentSession(h) {
	await requireHostCreateSupport(h);
	let W;
	try {
		W = await callStructuredAgentSession({ kind: "local" }, "agentSession.create", h.params);
	} catch (W) {
		let G = definitiveStructuredAgentSessionCreateErrorCode(W);
		throw G ? (abandonStructuredAgentSessionLaunchIntent(h), new StructuredAgentSessionCreateRefusalError(W instanceof Error ? W.message : String(W), G)) : W;
	}
	if (!W.ok) {
		let { code: G, message: K } = W.refusal;
		throw isDefinitiveAgentSessionCreateRefusal(G) ? (abandonStructuredAgentSessionLaunchIntent(h), new StructuredAgentSessionCreateRefusalError(K, G)) : new StructuredAgentSessionCreateUnknownOutcomeError(K, G);
	}
	return {
		sessionId: W.value.sessionId,
		fence: W.value.fence
	};
}
function structuredAgentLabel(h) {
	return getAgentCatalog().find((W) => W.id === h)?.label ?? h;
}
function knownStructuredSessionWorktreeIds(h) {
	let W = new Set(Object.keys(h.unifiedTabsByWorktree));
	for (let G of Object.values(h.worktreesByRepo ?? {})) for (let h of G) W.add(h.id);
	for (let G of Object.values(h.detectedWorktreesByRepo ?? {})) for (let h of G.worktrees) W.add(h.id);
	for (let G of h.folderWorkspaces ?? []) W.add(folderWorkspaceKey(G.id));
	return W;
}
function removeStructuredSessionTabsForVersions(h, W, G, K) {
	let q = h;
	for (let [h, J] of W) {
		let W = applyWebSessionTabsSnapshot(q, {
			worktree: h,
			publicationEpoch: J.publicationEpoch,
			snapshotVersion: J.snapshotVersion + 1,
			activeGroupId: null,
			activeTabId: null,
			activeTabType: null,
			tabGroups: [],
			tabs: []
		}, G, K, {
			contentScope: "agent-session",
			preserveLocalLayout: !0,
			terminalPtyMode: "local"
		});
		q = W === q ? q : {
			...q,
			...W
		};
	}
	return q;
}
var syncGeneration = 0, restorePromise = null;
const localStructuredSessionVersionByWorktree = /* @__PURE__ */ new Map(), localStructuredSessionEpochHistoryByWorktree = /* @__PURE__ */ new Map();
function localStructuredSessionGeneration() {
	return syncGeneration;
}
function isCurrentLocalStructuredSessionGeneration(h) {
	return h === syncGeneration;
}
function supersedeLocalStructuredSessionGeneration() {
	syncGeneration += 1;
}
function forgetLocalStructuredSessionPublicationCursors() {
	localStructuredSessionVersionByWorktree.clear(), localStructuredSessionEpochHistoryByWorktree.clear();
}
function dropLocalStructuredSessionRestoreLatch() {
	restorePromise = null;
}
function latchLocalStructuredSessionRestore(h) {
	return restorePromise ??= h().catch((h) => {
		throw restorePromise = null, h;
	}), restorePromise;
}
var MAX_REPAIR_ATTEMPTS = 3, BASE_REPAIR_DELAY_MS = 250, MAX_REPAIR_DELAY_MS = 5e3, REPAIR_ATTEMPT_DECAY_MS = 6e4, repairsByWorktree = /* @__PURE__ */ new Map();
function repairState(h, W) {
	let G = repairsByWorktree.get(h);
	if (!G) {
		let G = {
			attempts: 0,
			lastAttemptAt: W,
			timer: null
		};
		return repairsByWorktree.set(h, G), G;
	}
	return W - G.lastAttemptAt >= REPAIR_ATTEMPT_DECAY_MS && (G.attempts = 0), G;
}
function scheduleRetiredEpochRepair(h, W, G) {
	let K = Date.now(), q = repairState(h, K);
	if (q.timer !== null) return;
	if (q.attempts >= MAX_REPAIR_ATTEMPTS) {
		console.warn("[structured-session-tabs] retired publication epoch still unrepaired", {
			worktree: h,
			publicationEpoch: W,
			attempts: q.attempts,
			retryAfterMs: Math.max(0, REPAIR_ATTEMPT_DECAY_MS - (K - q.lastAttemptAt))
		});
		return;
	}
	let J = localStructuredSessionGeneration(), Y = Math.min(BASE_REPAIR_DELAY_MS * 2 ** q.attempts, MAX_REPAIR_DELAY_MS);
	q.attempts += 1, q.lastAttemptAt = K, q.timer = setTimeout(() => {
		if (q.timer = null, !isCurrentLocalStructuredSessionGeneration(J)) {
			repairsByWorktree.delete(h);
			return;
		}
		G(J).then(() => {
			(localStructuredSessionEpochHistoryByWorktree.get(h)?.retired.includes(W) ?? !1) || repairsByWorktree.delete(h);
		}).catch((h) => {
			console.warn("[structured-session-tabs] retired-epoch repair refresh failed", h);
		});
	}, Y);
}
function forgetRetiredEpochRepairsOutside(h) {
	for (let [W, G] of repairsByWorktree) h.has(W) || (G.timer !== null && clearTimeout(G.timer), repairsByWorktree.delete(W));
}
function projectLocalStructuredSessionTabs(h) {
	let W = new Set(h.tabs.filter((h) => h.type === "agent-session").map((h) => h.id)), G = W, K = W, q = h.tabGroups?.map((h) => ({
		...h,
		tabOrder: h.tabOrder.filter((h) => G.has(h)),
		activeTabId: h.activeTabId && G.has(h.activeTabId) ? h.activeTabId : null,
		recentTabIds: h.recentTabIds?.filter((h) => G.has(h))
	})).filter((h) => h.tabOrder.length > 0);
	return {
		...h,
		activeTabId: K.has(h.activeTabId ?? "") ? h.activeTabId : null,
		activeTabType: h.activeTabId && K.has(h.activeTabId) ? h.activeTabType : null,
		activeGroupId: h.activeGroupId && q?.some((W) => W.id === h.activeGroupId) ? h.activeGroupId : q?.[0]?.id ?? null,
		tabs: h.tabs.filter((h) => K.has(h.id)),
		tabGroups: q,
		tabGroupLayout: void 0
	};
}
function isWorktreeRetraction(h) {
	return h.removed === !0;
}
function applyStructuredSessionTabSnapshots(h, W = LOCAL_STRUCTURED_SESSION_OWNER, G = {}) {
	let K = /* @__PURE__ */ new Map();
	applyWebSessionTabsStorePatch((q) => applyLocalStructuredSessionTabSnapshots(q, h, W, void 0, {
		...G,
		onAcceptedAgentSession: (h, W) => {
			K.set(W, h), G.onAcceptedAgentSession?.(h, W);
		}
	}), { frames: [] })();
	for (let [h, W] of K) hasStructuredAgentSessionLaunchCancellationTombstone(W, h) || markStructuredAgentSessionLaunchPublished(W, h);
	G.authoritative && (startStructuredAgentLaunchCancellationCleanup((h) => closeStructuredAgentSession({ kind: "local" }, h)), retireAbsentStructuredAgentSessionLaunchCancellationTombstones(new Set(h.flatMap((h) => h.tabs.filter((h) => h.type === "agent-session").map((h) => h.sessionId))), G.authoritativeInventory ?? beginStructuredAgentSessionAuthoritativeInventory()));
}
function removeLocalStructuredSessionTabs(h, W = LOCAL_STRUCTURED_SESSION_OWNER, G = Date.now()) {
	return removeStructuredSessionTabsForVersions(h, localStructuredSessionVersionByWorktree, W, G);
}
function clearLocalStructuredSessionTabs() {
	supersedeLocalStructuredSessionGeneration(), applyWebSessionTabsStorePatch((h) => removeLocalStructuredSessionTabs(h), { frames: [] })(), dropLocalStructuredSessionRestoreLatch(), forgetLocalStructuredSessionPublicationCursors();
}
function applyLocalStructuredSessionTabSnapshots(h, W, G = LOCAL_STRUCTURED_SESSION_OWNER, K = Date.now(), q = {}) {
	let J = h;
	for (let h of W) {
		if (getExecutionHostIdForWorktree(J, h.worktree) !== "local" || !hostSnapshotAffirmsWorktreeContents(h)) continue;
		let W = localStructuredSessionVersionByWorktree.get(h.worktree), Y = !!(W && sameSessionTabsPublicationLineage(W.publicationEpoch, h.publicationEpoch)), X = localStructuredSessionEpochHistoryByWorktree.get(h.worktree);
		if (hasRetiredValue(X, h.publicationEpoch) && !Y) {
			if (!q.authoritative) {
				q.onRetiredEpochDrop?.(h.worktree, h.publicationEpoch);
				continue;
			}
			reviveRetiredValue(X, h.publicationEpoch);
		}
		if (W && Y && h.snapshotVersion <= W.snapshotVersion) continue;
		let Q = suppressCancelledStructuredSessionTabs(h, { kind: "local" });
		for (let W of Q.tabs) W.type === "agent-session" && q.onAcceptedAgentSession?.(h.worktree, W.sessionId);
		let $ = applyWebSessionTabsSnapshot(J, projectLocalStructuredSessionTabs(Q), G, K, {
			contentScope: "agent-session",
			preserveLocalLayout: !0,
			terminalPtyMode: "local"
		});
		if (J = $ === J ? J : {
			...J,
			...$
		}, isWorktreeRetraction(Q)) {
			let W = localStructuredSessionEpochHistoryByWorktree.get(h.worktree);
			W && localStructuredSessionEpochHistoryByWorktree.set(h.worktree, {
				current: null,
				retired: W.retired
			});
			continue;
		}
		localStructuredSessionVersionByWorktree.set(h.worktree, {
			publicationEpoch: h.publicationEpoch,
			snapshotVersion: h.snapshotVersion
		}), localStructuredSessionEpochHistoryByWorktree.set(h.worktree, noteRetiredValue(X, h.publicationEpoch, 8));
	}
	let Y = knownStructuredSessionWorktreeIds(J);
	for (let h of localStructuredSessionVersionByWorktree.keys()) Y.has(h) || (localStructuredSessionVersionByWorktree.delete(h), localStructuredSessionEpochHistoryByWorktree.delete(h));
	return forgetRetiredEpochRepairsOutside(Y), J;
}
function isStructuredSessionInventoryResponse(h) {
	return typeof h != "object" || !h ? !1 : "snapshots" in h ? h.snapshots === void 0 || Array.isArray(h.snapshots) : !0;
}
function restoreLocalStructuredSessionTabsOnce(h = localStructuredSessionGeneration()) {
	return latchLocalStructuredSessionRestore(() => Promise.all([refreshLocalRuntimeCapabilities(), refreshLocalStructuredSessionTabs(h)]).then(() => void 0));
}
function refreshLocalStructuredSessionTabs(h = localStructuredSessionGeneration(), W = {}) {
	let G = beginStructuredAgentSessionAuthoritativeInventory();
	return W.authoritative && startStructuredAgentLaunchCancellationCleanup((h) => closeStructuredAgentSession({ kind: "local" }, h)), window.api.runtime.call({
		method: "session.tabs.listAll",
		params: {}
	}).then((K) => {
		if (!K.ok) throw Error("structured session inventory unavailable");
		let q = isStructuredSessionInventoryResponse(K.result) ? K.result : {}, J = q.snapshots ?? [];
		return (W.authoritative === !0 || q.authoritative === !0) && startStructuredAgentLaunchCancellationCleanup((h) => closeStructuredAgentSession({ kind: "local" }, h)), isCurrentLocalStructuredSessionGeneration(h) && applyStructuredSessionTabSnapshots(J, void 0, {
			...W,
			authoritative: W.authoritative === !0 || q.authoritative === !0,
			authoritativeInventory: G
		}), J;
	});
}
var REPAIR_DROPPED_EPOCHS = { onRetiredEpochDrop: (h, W) => scheduleRetiredEpochRepair(h, W, (h) => refreshLocalStructuredSessionTabs(h, { authoritative: !0 })) };
async function startLocalStructuredSessionTabsSync(h) {
	let W = localStructuredSessionGeneration(), G = () => !h.isDisposed() && isCurrentLocalStructuredSessionGeneration(W), K = await refreshLocalRuntimeCapabilities();
	if (!G()) return;
	let q = K.includes(STRUCTURED_AGENT_SESSION_RUNTIME_CAPABILITY);
	if (await restoreLocalStructuredSessionTabsOnce(W), !G() || !q) return;
	let J = 0, Y = null, X = 0, Z = null, Q = () => {
		if (!G() || Y !== null) return;
		let h = Math.min(250 * 2 ** X, 5e3);
		X += 1, Y = setTimeout(() => {
			Y = null, refreshLocalStructuredSessionTabs(W).catch((h) => console.warn("[structured-session-tabs] resync failed", h)).finally(() => {
				G() && $().catch((h) => {
					console.warn("[structured-session-tabs] resubscribe failed", h), Q();
				});
			});
		}, h);
	}, $ = async () => {
		if (!G()) return;
		let h = ++J, W = null;
		W = await window.api.runtime.subscribe({
			method: "session.tabs.subscribeAll",
			params: {}
		}, (K) => {
			if (!G() || h !== J) return;
			if (!K.ok) {
				J += 1, W?.unsubscribe(), Z === W && (Z = null), Q();
				return;
			}
			let q = K.result;
			q.type === "snapshots" ? applyStructuredSessionTabSnapshots(q.snapshots, void 0, {
				...REPAIR_DROPPED_EPOCHS,
				authoritative: q.authoritative === !0
			}) : q.type === "snapshot" || q.type === "updated" ? applyStructuredSessionTabSnapshots([q], void 0, REPAIR_DROPPED_EPOCHS) : q.type === "end" && h === J && (J += 1, W?.unsubscribe(), Z === W && (Z = null), Y !== null && clearTimeout(Y), Q());
		}), !G() || h !== J ? W.unsubscribe() : Z = W;
	};
	h.setUnsubscribe(() => {
		Y !== null && (clearTimeout(Y), Y = null), Z?.unsubscribe(), Z = null;
	}), $().catch((h) => {
		console.warn("[structured-session-tabs] subscribe failed", h), Q();
	});
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function useLocalStructuredSessionTabsSync() {
	let h = useAppStore((h) => h.workspaceSessionReady && h.terminalStartupRestorationReady), W = useAppStore((h) => h.settings?.experimentalStructuredNativeChat === !0);
	(0, import_react.useEffect)(() => {
		if (!h) return;
		if (!W) {
			clearLocalStructuredSessionTabs();
			return;
		}
		let G = !1, K = () => {};
		return startLocalStructuredSessionTabsSync({
			isDisposed: () => G,
			setUnsubscribe: (h) => {
				K = h;
			}
		}).catch((h) => console.warn("[structured-session-tabs] sync failed", h)), () => {
			G = !0, K();
		};
	}, [W, h]);
}
var StructuredAgentSessionLaunchCancelledError = class extends Error {
	constructor() {
		super("structured session launch cancelled"), this.name = "StructuredAgentSessionLaunchCancelledError";
	}
};
function throwIfLaunchCancelled(h) {
	if (h.cancelled) throw new StructuredAgentSessionLaunchCancelledError();
}
async function verifyPublishedSession(h) {
	let W = await refreshLocalStructuredSessionTabs(void 0, { authoritative: !0 });
	if (throwIfLaunchCancelled(h), !W.some((W) => W.worktree === h.intent.worktreeId && W.tabs.some((W) => W.type === "agent-session" && W.sessionId === h.intent.sessionId))) throw Error("structured session tab publication unavailable");
}
async function recoverPublishedSessionReceipt(h) {
	await verifyPublishedSession(h);
	let W = await callStructuredAgentSession({ kind: "local" }, "agentSession.history", {
		sessionId: h.intent.sessionId,
		direction: "tail",
		limit: 1
	});
	throwIfLaunchCancelled(h);
	let G = W.page.fence ?? (W.ok ? void 0 : W.fence);
	if (typeof G != "number") throw Error("structured session fence publication unavailable");
	return {
		sessionId: h.intent.sessionId,
		fence: G
	};
}
async function retrySameIntent(h, W) {
	throwIfLaunchCancelled(h);
	try {
		let W = await launchStructuredAgentSession(h.intent);
		return throwIfLaunchCancelled(h), await verifyPublishedSession(h), W;
	} catch (G) {
		if (h.cancelled) throw new StructuredAgentSessionLaunchCancelledError();
		if (G instanceof StructuredAgentSessionCreateRefusalError) throw G;
		try {
			return await recoverPublishedSessionReceipt(h);
		} catch {
			throw h.cancelled ? new StructuredAgentSessionLaunchCancelledError() : (h.visibilityUnknown = !0, h.onVisibilityChanged?.(), G ?? W);
		}
	}
}
async function launchAndReconcile(h) {
	throwIfLaunchCancelled(h);
	let W;
	try {
		W = await launchStructuredAgentSession(h.intent);
	} catch (W) {
		if (h.cancelled) throw new StructuredAgentSessionLaunchCancelledError();
		if (W instanceof StructuredAgentSessionCreateRefusalError) throw W;
		try {
			return await recoverPublishedSessionReceipt(h);
		} catch {
			return retrySameIntent(h, W);
		}
	}
	try {
		return throwIfLaunchCancelled(h), await verifyPublishedSession(h), W;
	} catch (W) {
		if (h.cancelled) throw new StructuredAgentSessionLaunchCancelledError();
		return retrySameIntent(h, W);
	}
}
async function reconcileUnknownLaunch(h) {
	throwIfLaunchCancelled(h), h.visibilityUnknown = !1, h.onVisibilityChanged?.();
	try {
		return await recoverPublishedSessionReceipt(h);
	} catch (W) {
		return retrySameIntent(h, W);
	}
}
var inFlightDispatches = /* @__PURE__ */ new Map();
function dispatchKey(h, W, G) {
	return `${h}:${W}:${G}`;
}
function getStructuredAgentLaunchPromptDispatch(h, W, G) {
	if (G !== void 0) return inFlightDispatches.get(dispatchKey(h, W, G));
	let K = `${h}:${W}:`;
	for (let [h, W] of inFlightDispatches) if (h.startsWith(K)) return W;
}
function shareStructuredAgentLaunchPromptDispatch(h, W, G, K) {
	let q = dispatchKey(h, W, G), J = inFlightDispatches.get(q);
	if (J) return {
		promise: J,
		started: !1
	};
	let Y = Promise.resolve().then(K);
	inFlightDispatches.set(q, Y);
	let X = () => {
		inFlightDispatches.get(q) === Y && inFlightDispatches.delete(q);
	};
	return Y.then(X, X), {
		promise: Y,
		started: !0
	};
}
function mutateEntry(h, W) {
	return mutateStructuredAgentSessionLaunchPrompt(h.sessionId, h.clientMessageId, W);
}
async function dispatchStructuredLaunchPrompt(h, W) {
	if (!mutateEntry(h, (h) => ({
		...h,
		state: "dispatching",
		lastAttemptAt: Date.now()
	}))) return !1;
	try {
		let G = await callStructuredAgentSession({ kind: "local" }, "agentSession.send", structuredAgentSessionSendRequest(h, W.fence));
		if (!G.ok) return mutateEntry(h, (W) => requeueStructuredAgentSessionSendRefusal(W, G.refusal.code, () => createStructuredAgentSessionOperationId(() => crypto.randomUUID()), h.lastAttemptAt !== null)), !1;
		let q = G.value.submission.dispatchState;
		return mutateEntry(h, (h) => q === "accepted" ? null : {
			...h,
			state: q === "unknown" ? "unconfirmed" : q === "pending" ? "dispatching" : "queued"
		}), q === "accepted" || q === "pending";
	} catch {
		return mutateEntry(h, (h) => ({
			...h,
			state: "unconfirmed"
		})), !1;
	}
}
function settleStructuredAgentLaunchPrompt(h) {
	if (!(h.options.promptDelivery === "draft" || !h.options.prompt?.trim())) return h.launchResult.then(async (W) => {
		if (!h.stagedEntry) return {
			delivered: !1,
			failureNotified: !0
		};
		let G = h.stagedEntry, K = await shareStructuredAgentLaunchPromptDispatch(G.sessionId, G.clientMessageId, W.fence, () => dispatchStructuredLaunchPrompt(G, W)).promise;
		return K && h.options.onPromptDelivered?.(), {
			delivered: K,
			failureNotified: !1
		};
	});
}
function createStructuredLaunchCallerGroup() {
	return {
		outcome: "pending",
		entries: /* @__PURE__ */ new Set(),
		promptDeliveryResults: /* @__PURE__ */ new Set(),
		onSettled: () => {}
	};
}
function trackPromptDelivery(h, W) {
	h.promptDeliveryResults.add(W);
	let G = () => {
		h.promptDeliveryResults.delete(W), h.onSettled();
	};
	W.then(G, G);
}
function addStructuredLaunchCaller(h) {
	let W = {};
	return h.group.entries.add(W), W.promptDeliveryResult = settleStructuredAgentLaunchPrompt({
		launchResult: h.launchResult,
		options: h.options,
		stagedEntry: h.stagedEntry
	})?.catch(() => ({
		delivered: !1,
		failureNotified: !0
	})), W.promptDeliveryResult && trackPromptDelivery(h.group, W.promptDeliveryResult), W;
}
function settleStructuredLaunchCallers(h, W) {
	h.outcome = W, h.onSettled();
}
function releaseStructuredLaunchCallerAfterUnknownOutcome(h, W) {
	return h.outcome !== "unknown" || !h.entries.delete(W) ? !1 : (h.onSettled(), !0);
}
function structuredLaunchCallersHavePendingWork(h) {
	return h.outcome === "pending" || h.outcome === "unknown" || h.promptDeliveryResults.size > 0;
}
function seedStructuredAgentLaunchDraft(h, W, G) {
	G.promptDelivery !== "draft" || !G.prompt || useAppStore.getState().seedNativeChatLaunchDraft({
		tabId: structuredAgentSessionTabId(h),
		agent: W,
		text: G.prompt,
		createdAt: Date.now()
	});
}
function clearStructuredAgentLaunchDraft(h) {
	useAppStore.getState().clearNativeChatLaunchDraft(structuredAgentSessionTabId(h));
}
function trackStructuredLaunchFailureToast(h, W) {
	W.catch(async (W) => {
		if (W instanceof StructuredAgentSessionLaunchCancelledError) return;
		let K = structuredAgentLabel(h);
		console.warn("[native-chat] structured launch failed", W), toast.error(translate("components.native-chat.structuredSessionLaunchFailed", "Could not open {{value0}} chat", { value0: K }), { description: translate("components.native-chat.structuredSessionLaunchFailedDescription", "Orca could not open a structured {{value0}} chat. See the logs for details.", { value0: K }) });
	});
}
function restorePersistedStructuredLaunchState(h, W) {
	let G = getPersistedStructuredAgentLaunchRecord(W);
	if (!G) return;
	let K = restoreStructuredAgentSessionLaunchIntent({
		worktreeId: h,
		sessionId: G.sessionId,
		agent: G.agent,
		clientOperationId: G.clientOperationId,
		payloadFingerprint: G.payloadFingerprint,
		expectedRuntimeFence: G.expectedRuntimeFence,
		...G.resumeFrom ? { resumeFrom: G.resumeFrom } : {}
	}), q = createStructuredLaunchCallerGroup(), J = {
		identity: structuredLaunchIdentity(h, G.agent, G.resumeFrom),
		intent: K,
		promptDelivery: "draft",
		promise: Promise.resolve({
			sessionId: G.sessionId,
			fence: 0
		}),
		visibilityUnknown: G.lifecycle === "visibility-unknown",
		cancelled: !1,
		onVisibilityChanged: void 0,
		callers: q
	};
	return q.outcome = G.lifecycle === "failed" ? "failed" : "unknown", setStructuredLaunchState(J), J;
}
function useStructuredAgentLaunchStatus(h, W) {
	return (0, import_react.useSyncExternalStore)(subscribeStructuredAgentLaunchStatus, () => getStructuredAgentLaunchStatus(h, W), () => "idle");
}
function outboxPromptText(h) {
	return h.promptDelivery === "draft" ? "" : h.prompt?.trim() ?? "";
}
function joinLaunchDelivery(h, W) {
	let G = W ?? h.promptDelivery, { promptDelivery: K, ...q } = h;
	return G ? {
		...q,
		promptDelivery: G
	} : q;
}
function cleanupLaunchState(h) {
	deleteStructuredLaunchStateIfCurrent(h) && notifyStructuredLaunchListeners();
}
function maybeCleanupLaunchState(h) {
	h.callers.outcome === "failed" || structuredLaunchCallersHavePendingWork(h.callers) || cleanupLaunchState(h);
}
function settleStructuredLaunchRefusal(h) {
	h.callers.outcome !== "pending" && h.callers.outcome !== "unknown" || (retireStructuredAgentSessionLaunchCancellationTombstone(h.intent.worktreeId, h.intent.sessionId), settleStructuredLaunchCallers(h.callers, "failed"), notifyStructuredLaunchListeners());
}
function trackLaunchSettlement(h, W) {
	W.then(() => {
		h.promise === W && (settleStructuredLaunchCallers(h.callers, "published"), notifyStructuredLaunchListeners());
	}, (G) => {
		if (h.promise === W) {
			if (h.cancelled) {
				G instanceof StructuredAgentSessionCreateRefusalError && retireStructuredAgentSessionLaunchCancellationTombstone(h.intent.worktreeId, h.intent.sessionId);
				return;
			}
			G instanceof StructuredAgentSessionCreateRefusalError ? settleStructuredLaunchRefusal(h) : h.visibilityUnknown ? (h.callers.outcome = "unknown", notifyStructuredLaunchListeners()) : (settleStructuredLaunchCallers(h.callers, "failed"), notifyStructuredLaunchListeners());
		}
	});
}
function resetStructuredLaunchCallers(h) {
	h.callers = createStructuredLaunchCallerGroup(), h.callers.onSettled = () => maybeCleanupLaunchState(h);
}
function restartStructuredLaunchState(h) {
	let W = h.visibilityUnknown;
	W || (h.intent = retryStructuredAgentSessionLaunchIntent(h.intent)), resetStructuredLaunchCallers(h), h.callers.outcome = "pending", h.promise = W ? reconcileUnknownLaunch(h) : launchAndReconcile(h), trackLaunchSettlement(h, h.promise), trackStructuredLaunchFailureToast(h.intent.agent, h.promise), notifyStructuredLaunchListeners();
}
function structuredAgentLaunchState(h, W, G) {
	let K = structuredLaunchIdentity(h, W, G.resumeFrom), q = getStructuredLaunchState(K);
	if (q) {
		let h = q.visibilityUnknown || q.callers.outcome === "failed";
		h && restartStructuredLaunchState(q);
		let K = joinLaunchDelivery(G, q.promptDelivery), J = h ? "" : outboxPromptText(K), Y = J ? enqueueStructuredAgentSessionLaunchPrompt(q.intent.sessionId, J) : null;
		h || seedStructuredAgentLaunchDraft(q.intent.sessionId, W, K);
		let { prompt: X, ...Z } = K, Q = h ? Z : K;
		return {
			state: q,
			caller: addStructuredLaunchCaller({
				group: q.callers,
				launchResult: q.promise,
				options: Q,
				stagedEntry: Y
			})
		};
	}
	let J = G.resumeFrom ? createStructuredAgentSessionLaunchIntent(h, W, G.resumeFrom) : createStructuredAgentSessionLaunchIntent(h, W), Y = outboxPromptText(G), X = Y ? enqueueStructuredAgentSessionLaunchPrompt(J.sessionId, Y) : null;
	seedStructuredAgentLaunchDraft(J.sessionId, W, G);
	let Z = createStructuredLaunchCallerGroup(), Q = {
		identity: K,
		intent: J,
		promptDelivery: G.promptDelivery,
		promise: Promise.resolve({
			sessionId: "",
			fence: 0
		}),
		visibilityUnknown: !1,
		cancelled: !1,
		onVisibilityChanged: notifyStructuredLaunchListeners,
		callers: Z
	};
	Z.onSettled = () => maybeCleanupLaunchState(Q), Q.promise = Y && !X ? Promise.reject(new StructuredAgentSessionCreateRefusalError(`Could not durably stage the ${structuredAgentLabel(W)} launch prompt.`)) : launchAndReconcile(Q);
	let $ = addStructuredLaunchCaller({
		group: Q.callers,
		launchResult: Q.promise,
		options: G,
		stagedEntry: X
	});
	return setStructuredLaunchState(Q), notifyStructuredLaunchListeners(), trackLaunchSettlement(Q, Q.promise), trackStructuredLaunchFailureToast(Q.intent.agent, Q.promise), {
		state: Q,
		caller: $
	};
}
function cancelStructuredAgentLaunch(h, W) {
	let G = getStructuredLaunchStateBySessionId(W);
	return G ? (markStructuredAgentSessionLaunchCancelled(h, W), discardStructuredAgentSessionLaunchOutbox(G.intent.sessionId), clearStructuredAgentLaunchDraft(G.intent.sessionId), abandonStructuredAgentSessionLaunchIntent(G.intent), notifyStructuredLaunchListeners(), !0) : !1;
}
function startStructuredAgentLaunch(h, W, G = {}) {
	let { state: K, caller: q } = structuredAgentLaunchState(h, W, G);
	return {
		sessionId: K.intent.sessionId,
		launchResult: K.promise,
		...q.promptDeliveryResult ? { promptDeliveryResult: q.promptDeliveryResult } : {},
		isVisibilityUnknown: () => K.visibilityUnknown,
		releaseCallerAfterUnknownOutcome: () => releaseStructuredLaunchCallerAfterUnknownOutcome(K.callers, q)
	};
}
function retryStructuredAgentSessionLaunch(h, W) {
	let G = getStructuredLaunchStateBySessionId(W) ?? restorePersistedStructuredLaunchState(h, W);
	return G?.intent.worktreeId !== h || !G.visibilityUnknown && G.callers.outcome !== "failed" ? !1 : (restartStructuredLaunchState(G), !0);
}
async function settleStartedStructuredAgentLaunch(h, W, G) {
	let K = G.signal, q = !1, J = () => q || K?.aborted === !0, Y = () => {
		q || (q = !0, cancelStructuredAgentLaunch(h, W.sessionId));
	};
	K?.addEventListener("abort", Y, { once: !0 }), J() && Y();
	let X = () => ({
		kind: "cancelled",
		sessionId: W.sessionId
	});
	try {
		let h = await W.launchResult;
		return J() ? X() : (G.onStructuredReady?.(h.sessionId), {
			kind: "structured",
			sessionId: h.sessionId,
			...W.promptDeliveryResult ? { promptDeliveryResult: W.promptDeliveryResult } : {}
		});
	} catch (h) {
		return J() ? X() : h instanceof StructuredAgentSessionCreateRefusalError ? {
			kind: "failed",
			error: h
		} : W.isVisibilityUnknown() ? (W.releaseCallerAfterUnknownOutcome(), {
			kind: "visibility-unknown",
			sessionId: W.sessionId
		}) : {
			kind: "failed",
			error: h
		};
	} finally {
		K?.removeEventListener("abort", Y);
	}
}
function beginStructuredAgentLaunchSettlement(h, W, G, K) {
	let q = startStructuredAgentLaunch(h, W, G);
	return {
		sessionId: q.sessionId,
		settlement: settleStartedStructuredAgentLaunch(h, q, K),
		cancel: () => cancelStructuredAgentLaunch(h, q.sessionId),
		...q.promptDeliveryResult ? { promptDeliveryResult: q.promptDeliveryResult } : {}
	};
}
function structuredLaunchOptions(h) {
	return {
		...h.prompt === void 0 ? {} : { prompt: h.prompt },
		...h.promptDelivery ? { promptDelivery: h.promptDelivery } : {},
		...h.resumeFrom ? { resumeFrom: h.resumeFrom } : {},
		...h.onPromptDelivered ? { onPromptDelivered: h.onPromptDelivered } : {}
	};
}
function beginStructuredPlanLaunch(h, W, G) {
	if (h.route !== "structured-native-chat" || !isAgentSessionHandleProvider(h.agent)) return null;
	let K = G?.worktreeId ?? h.worktreeId;
	if (!K) throw Error("A structured agent launch needs the workspace it targets.");
	return beginStructuredAgentLaunchSettlement(K, h.agent, structuredLaunchOptions(h), W);
}
function adoptAgentSessionLaunchVerdict(h) {
	return {
		...h,
		begin: (W, G) => beginStructuredPlanLaunch(h, W, G),
		launch: async (W, G) => beginStructuredPlanLaunch(h, W, G)?.settlement ?? null
	};
}
function structuredAgentSessionLaunchFeasible(h, W) {
	let { settings: G, ...K } = W;
	return structuredAgentLaunchSupported({
		...buildAgentLaunchRouteInput(h, K),
		settings: G
	});
}
function planAgentSessionLaunch(h, W) {
	return adoptAgentSessionLaunchVerdict({
		route: resolveAgentLaunchRoute(buildAgentLaunchRouteInput(h, W)),
		agent: W.agent,
		...W.workspace.worktreeId ? { worktreeId: W.workspace.worktreeId } : {},
		...W.prompt === void 0 ? {} : { prompt: W.prompt },
		...W.promptDelivery ? { promptDelivery: W.promptDelivery } : {},
		...W.resumeFrom ? { resumeFrom: W.resumeFrom } : {},
		...W.onPromptDelivered ? { onPromptDelivered: W.onPromptDelivered } : {}
	});
}
function openStructuredAgentSessionProvisionalTab(h) {
	let W = useAppStore.getState(), G = structuredAgentSessionTabId(h.sessionId), K = (W.unifiedTabsByWorktree[h.worktreeId] ?? []).find((W) => W.id === G && W.contentType === "agent-session" && W.entityId === h.sessionId);
	if (K) return h.activate !== !1 && (W.focusGroup(h.worktreeId, K.groupId), W.activateTab(K.id, { worktreeId: h.worktreeId }), W.setActiveTabType("agent-session", h.worktreeId)), K;
	let q = W.createUnifiedTab(h.worktreeId, "agent-session", {
		id: G,
		entityId: h.sessionId,
		executionHostId: LOCAL_EXECUTION_HOST_ID,
		agentSessionAgent: h.agent,
		label: defaultAgentChatLabel(h.agent),
		...h.targetGroupId ? { targetGroupId: h.targetGroupId } : {},
		activate: h.activate !== !1
	});
	return h.activate !== !1 && W.setActiveTabType("agent-session", h.worktreeId), q;
}
function beginStructuredAgentSessionProvisionalLaunch(h) {
	let W = h.plan.begin(h.hooks, h.target);
	if (!W) return null;
	let G = h.target?.worktreeId ?? h.plan.worktreeId;
	if (!G || h.plan.agent !== "claude" && h.plan.agent !== "codex") throw Error("A provisional structured launch needs its workspace and provider.");
	try {
		return h.beforeOpen?.(W.sessionId) === !1 ? (W.cancel(), null) : {
			...W,
			tab: openStructuredAgentSessionProvisionalTab({
				worktreeId: G,
				sessionId: W.sessionId,
				agent: h.plan.agent,
				...h.targetGroupId ? { targetGroupId: h.targetGroupId } : {},
				...h.activate === void 0 ? {} : { activate: h.activate }
			})
		};
	} catch (h) {
		throw W.cancel(), h;
	}
}
export { retryStructuredAgentSessionLaunch as a, shareStructuredAgentLaunchPromptDispatch as c, applyStructuredSessionTabSnapshots as d, isCurrentLocalStructuredSessionGeneration as f, structuredAgentSessionLaunchFeasible as i, useLocalStructuredSessionTabsSync as l, workspaceKindForWorktreeId as m, adoptAgentSessionLaunchVerdict as n, useStructuredAgentLaunchStatus as o, localStructuredSessionGeneration as p, planAgentSessionLaunch as r, getStructuredAgentLaunchPromptDispatch as s, beginStructuredAgentSessionProvisionalLaunch as t, restoreLocalStructuredSessionTabsOnce as u };
