import { a as __toESM, r as __require, t as __commonJSMin } from "./assets/chunk-BKjlJnyO.js";
import { t as require_react } from "./assets/react-BWRHcv7t.js";
import { n as lazyWithRetry } from "./assets/lazy-with-retry--hTe1cP7.js";
import { t as require_client } from "./assets/client-KaZE_emc.js";
import "./assets/react-dom-Cm0_4y6Q.js";
import { c as resolveUiLocale, d as normalizeUiLanguage, i as translate, n as i18n, r as setRendererPluginLanguagePacks, u as isPluginUiLanguage } from "./assets/i18n-CakWKPtl.js";
import { r as I18nContext, t as useTranslation } from "./assets/useTranslation-gONZYZRO.js";
import { n as Button } from "./assets/useMountedRef-De7bTfqf.js";
import { t as Cable } from "./assets/cable-IKxNEuG2.js";
import { t as LoaderCircle } from "./assets/loader-circle-BA3hVfs6.js";
import { t as Server } from "./assets/server-BmPwXRCG.js";
import { AC as GITHUB_MARK_PR_READY_RUNTIME_CAPABILITY, Dy as normalizeFeatureInteractions, Eb as getDefaultOnboardingState, Fy as normalizeWorktreeVisibilityDefaults, IC as RUNTIME_PROTOCOL_VERSION, JC as WORKTREE_VISIBILITY_DEFAULTS_RUNTIME_CAPABILITY, JS as LOCAL_EXECUTION_HOST_ID, KC as WORKTREE_GITHUB_PR_SUPPRESSION_RUNTIME_CAPABILITY, LC as SESSION_TABS_RETIREMENT_PROOF_DELTA_RUNTIME_CAPABILITY, MC as GITLAB_READY_FOR_REVIEW_RUNTIME_CAPABILITY, MS as normalizeWorktreeCardProperties, Mb as normalizeAgentActivityDisplayMode, NC as GITLAB_READY_FOR_REVIEW_UPDATE_REQUIRED_MESSAGE, OS as normalizeUsagePercentageDisplay, Ob as getDefaultSettings, PC as MIN_COMPATIBLE_RUNTIME_SERVER_VERSION, RC as SESSION_TAB_CLOSE_INTENT_RUNTIME_CAPABILITY, Sy as toRuntimeWorktreeSelector, TS as normalizeStatusBarUsageMode, Ty as assertFileMutationOwnershipCapability, YC as WORKTREE_VISIBILITY_SOURCE_DEFAULTS_RUNTIME_CAPABILITY, ZC as SKILL_DELETE_CAPABILITY, cC as createE2EConfig, dy as EMPTY_RETIRED_NAME_REGISTRY, ew as isRuntimeHostStatusBlocked, gC as AGENT_SESSION_TURN_ITEM_CAPABILITY, gy as evaluateRuntimeCompat, iC as parseExecutionHostId, iS as normalizeDisabledTuiAgents, iw as Trash2, jC as GITHUB_MARK_PR_READY_UPDATE_REQUIRED_MESSAGE, jS as getWorktreeCardModeProperties, jb as getDefaultWorkspaceSession, jy as normalizeTerminalCustomThemes, kb as getDefaultUIState, ky as normalizeContextualTourIds, lC as AGENT_SESSION_BACKGROUND_TASK_ROW_STOP_CAPABILITY, nC as normalizeExecutionHostId, nw as runtimeHostStatusError, nx as normalizeTuiAgentEnvRecord, oC as toRuntimeExecutionHostId, rC as normalizeExecutionHostScope, rw as runtimeHostStatusFailure, t as useAppStore, tb as relativePathInsideRoot, tx as normalizeTuiAgentArgsRecord, uC as AGENT_SESSION_BOUNDARY_RUNTIME_CAPABILITY, vy as createEmptyRateLimitState, yb as ONBOARDING_FLOW_VERSION, yy as callAbortableRuntimeEnvironment } from "./assets/store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./assets/jsx-runtime-CVy3GVGV.js";
import { t as Label } from "./assets/label-CA70r2No.js";
import { t as Input } from "./assets/input-BrXOv9Kv.js";
import { D as createBrowserUuid, d as assertClipboardTextWriteWithinLimitWithYield, u as assertClipboardTextWithinLimitWithYield } from "./assets/renderer-app-platform--nJ6HYmL.js";
import { t as installWindowVisibilityInterval } from "./assets/window-visibility-interval-BxcyZyE8.js";
import { A as discriminatedUnion, D as _null, E as _enum, F as object, I as record, L as string, N as literal, O as array, P as number, R as union, k as boolean, m as EMPTY_PTY_MAIN_DELIVERY_DIAGNOSTICS, z as unknown } from "./assets/stale-document-visibility-rSdoU229.js";
import "./assets/react-error-boundary-reporting-DBcqyoKP.js";
import { i as RecoverableRenderErrorBoundary, t as readRetiredNameRegistryForRepo } from "./assets/retired-name-cache-Ce6mGXUk.js";
import { r as AI_VAULT_SCOPE_PATHS_MAX_COUNT, t as AI_VAULT_AGENTS } from "./assets/ai-vault-types-c5I0n8i0.js";
import { i as normalizePRBotAuthorOverrides, n as applyPRBotAuthorOverride } from "./assets/pr-bot-author-overrides-v2gQBnI8.js";
import { E as isKeybindingActionId, a as formatKeybindingList, n as findKeybindingConflicts, w as getKeybindingPlatform, y as normalizeKeybindingArrayForAction } from "./assets/keybindings-1v53ESY9.js";
import { n as parseRuntimeNativeChatReadSessionResult, r as parseRuntimeNativeChatTurnLifecycle } from "./assets/native-chat-runtime-contract-BteLQZr7.js";
import { a as assertClipboardImageByteLengthWithinLimit, c as DEFAULT_LOCAL_ORCA_PROFILE_ID, i as CLIPBOARD_IMAGE_TOO_LARGE_ERROR, l as createDefaultLocalOrcaProfile, o as assertClipboardImageDimensionsWithinLimit, s as clipboardImageThumbnailSize, t as CLIPBOARD_IMAGE_MAX_BASE64_CHARS } from "./assets/clipboard-image-qg1ipGte.js";
import { t as legacyBaseRefSearchResult } from "./assets/base-ref-search-result-C0RGz11h.js";
import { n as getDefaultCreateProjectParent } from "./assets/create-project-defaults-xqxL2BRP.js";
import { i as parseHostAccessLink, t as translateHostAccessLinkError } from "./assets/remote-pairing-copy-DKFvujw5.js";
import { n as normalizeComputerAwakeMode, t as computerAwakeSettingsForMode } from "./assets/computer-awake-mode-DEFoqKd7.js";
import "./assets/dist-E3opdjfr.js";
import "./assets/telemetry-DdvWHaqb.js";
import "./assets/pane-metric-options-deferral-Bz211kas.js";
import { n as usePluginLanguagePacks } from "./assets/plugin-language-packs-DxCQC5ak.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function I18nextProvider({ i18n: e, defaultNS: t, children: n }) {
	let r = (0, import_react.useMemo)(() => ({
		i18n: e,
		defaultNS: t
	}), [e, t]);
	return (0, import_react.createElement)(I18nContext.Provider, { value: r }, n);
}
var import_client = /* @__PURE__ */ __toESM(require_client()), ENVIRONMENT_STORAGE_KEY = "orca.web.runtimeEnvironment.v1";
function readStoredWebRuntimeEnvironment() {
	let e = window.localStorage.getItem(ENVIRONMENT_STORAGE_KEY);
	if (!e) return null;
	try {
		let t = JSON.parse(e);
		if (!t.id || !t.name || !Array.isArray(t.endpoints) || t.endpoints.length === 0) return null;
		let n = Array.isArray(t.compatibleEnvironmentIds) ? t.compatibleEnvironmentIds.filter((e) => typeof e == "string") : [], r = typeof t.pairedDeviceId == "string" && t.pairedDeviceId.trim().length > 0 ? t.pairedDeviceId.trim() : null, { compatibleEnvironmentIds: i, pairedDeviceId: a, ...o } = t;
		return {
			...o,
			...r ? { pairedDeviceId: r } : {},
			...n.length > 0 ? { compatibleEnvironmentIds: n } : {}
		};
	} catch {
		return null;
	}
}
function saveStoredWebRuntimeEnvironment(e) {
	window.localStorage.setItem(ENVIRONMENT_STORAGE_KEY, JSON.stringify(e));
}
function clearStoredWebRuntimeEnvironment$1() {
	window.localStorage.removeItem(ENVIRONMENT_STORAGE_KEY);
}
function createStoredWebRuntimeEnvironment(e) {
	let t = `web-${createBrowserUuid()}`, n = Date.now(), r = getCompatibleEnvironmentIds(e.previousEnvironment, e.offer);
	return {
		id: t,
		name: e.name.trim() || "Orca Server",
		createdAt: n,
		updatedAt: n,
		lastUsedAt: null,
		runtimeId: null,
		...e.offer.pairedDeviceId ? { pairedDeviceId: e.offer.pairedDeviceId } : {},
		...e.connectionDependency ? { connectionDependency: e.connectionDependency } : {},
		...r.length > 0 ? { compatibleEnvironmentIds: r } : {},
		preferredEndpointId: `ws-${t}`,
		endpoints: [{
			id: `ws-${t}`,
			kind: "websocket",
			label: translate("auto.web.web.runtime.environment.07f788de83", "WebSocket"),
			endpoint: e.offer.endpoint,
			deviceToken: e.offer.deviceToken,
			publicKeyB64: e.offer.publicKeyB64
		}]
	};
}
function getCompatibleEnvironmentIds(e, t) {
	return e?.endpoints.some((e) => e.publicKeyB64 === t.publicKeyB64) ? [...new Set([...e.compatibleEnvironmentIds ?? [], e.id])] : [];
}
function redactStoredWebRuntimeEnvironment(e) {
	let { compatibleEnvironmentIds: t, ...n } = e;
	return {
		...n,
		endpoints: e.endpoints.map(({ deviceToken: e, publicKeyB64: t, ...n }) => ({ ...n }))
	};
}
function getPreferredWebPairingOffer(e) {
	let t = e.endpoints.find((t) => t.id === e.preferredEndpointId) ?? e.endpoints[0];
	if (!t) throw Error("No runtime endpoint is stored for this web client.");
	return {
		v: 2,
		endpoint: t.endpoint,
		deviceToken: t.deviceToken,
		publicKeyB64: t.publicKeyB64,
		...e.pairedDeviceId ? { pairedDeviceId: e.pairedDeviceId } : {}
	};
}
function updateStoredEnvironmentRuntimeId(e, t, n) {
	let r = {
		...e,
		runtimeId: t,
		...n ? { pairedDeviceId: n } : {},
		updatedAt: Date.now(),
		lastUsedAt: Date.now()
	};
	return saveStoredWebRuntimeEnvironment(r), r;
}
function isMixedContentWebSocket(e) {
	return window.location.protocol === "https:" && e.startsWith("ws://");
}
var PAIRING_OFFER_VERSION = 2;
function parseWebPairingInput(e) {
	let t = e.trim();
	if (!t) return null;
	try {
		if (t.toLowerCase().startsWith("orca://")) {
			let e = extractPairingCodeFromUrl(t);
			return e ? decodePairingPayload(e) : null;
		}
		return decodePairingPayload(t);
	} catch {
		return null;
	}
}
function readPairingInputFromLocation(e) {
	let t = new URLSearchParams(e.search);
	for (let e of [
		"pairing",
		"pair",
		"code",
		"token"
	]) {
		let n = t.get(e);
		if (n?.trim()) return n.trim();
	}
	let n = e.hash.replace(/^#/, "").trim();
	if (!n) return null;
	if (n.startsWith("orca://pair")) return n;
	let r = new URLSearchParams(n);
	for (let e of [
		"pairing",
		"pair",
		"code",
		"token"
	]) {
		let t = r.get(e);
		if (t?.trim()) return t.trim();
	}
	return n;
}
function decideWebPairingStartup(e) {
	let t = e.initialPairingInput ? parseWebPairingInput(e.initialPairingInput) : null;
	return t?.scope === "runtime" ? {
		kind: "auto-save-runtime-offer",
		offer: t
	} : t ? {
		kind: "show-connect",
		initialPairingInput: e.initialPairingInput
	} : e.hasStoredEnvironment ? { kind: "use-stored-environment" } : {
		kind: "show-connect",
		initialPairingInput: null
	};
}
function clearPairingInputFromAddressBar() {
	if (!window.location.hash && !window.location.search) return;
	let e = `${window.location.origin}${window.location.pathname}`;
	window.history.replaceState(null, document.title, e);
}
function decodePairingPayload(e) {
	let t = new TextDecoder().decode(base64UrlToBytes(e)), n = JSON.parse(t);
	if (n.v !== PAIRING_OFFER_VERSION || typeof n.endpoint != "string" || n.endpoint.length === 0 || typeof n.deviceToken != "string" || n.deviceToken.length === 0 || typeof n.publicKeyB64 != "string" || n.publicKeyB64.length === 0) return null;
	let r = parseWebPairingScope(n.scope), i = typeof n.pairedDeviceId == "string" && n.pairedDeviceId.length > 0 ? n.pairedDeviceId : null;
	return {
		v: PAIRING_OFFER_VERSION,
		endpoint: normalizeWebSocketEndpoint(n.endpoint),
		deviceToken: n.deviceToken,
		publicKeyB64: n.publicKeyB64,
		...i ? { pairedDeviceId: i } : {},
		...r ? { scope: r } : {}
	};
}
function parseWebPairingScope(e) {
	return e === "mobile" || e === "runtime" ? e : null;
}
function extractPairingCodeFromUrl(e) {
	let t;
	try {
		t = new URL(e);
	} catch {
		return null;
	}
	return t.protocol !== "orca:" || t.hostname !== "pair" || t.pathname !== "" && t.pathname !== "/" ? null : t.searchParams.get("code") || t.hash && t.hash.slice(1) || null;
}
function base64UrlToBytes(e) {
	let t = e.replace(/-/g, "+").replace(/_/g, "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "="), r = globalThis.atob(n), i = new Uint8Array(r.length);
	for (let e = 0; e < r.length; e += 1) i[e] = r.charCodeAt(e);
	return i;
}
function normalizeWebSocketEndpoint(e) {
	return e.startsWith("http://") ? `ws://${e.slice(7)}` : e.startsWith("https://") ? `wss://${e.slice(8)}` : e;
}
var RETRY_DELAYS_MS = [
	3e3,
	6e3,
	12e3,
	3e4,
	6e4
], REQUEST_TIMEOUT_MS$1 = 15e3, publicationSequence = 0, RuntimeHostStatusOwner = class {
	active = !1;
	disposed = !1;
	persistent;
	attempt = 0;
	retry = null;
	request = null;
	waiters = /* @__PURE__ */ new Set();
	response = runtimeHostStatusFailure("runtime_unavailable", "Status has not been checked.");
	snapshot;
	constructor(e) {
		this.options = e, this.persistent = e.persistent ?? !1, this.snapshot = {
			environmentId: e.environmentId,
			pairingRevision: e.pairingRevision,
			sequence: ++publicationSequence,
			checkedAt: 0,
			status: null,
			verification: "checking",
			transport: "unknown"
		};
	}
	read() {
		return this.snapshot;
	}
	activate() {
		this.active || this.disposed || (this.active = !0, this.startRequest());
	}
	acceptVerified(e) {
		this.disposed || (this.active = !0, this.retireRequest(), this.clearRetry(), this.complete(e));
	}
	refresh(e = {}) {
		if (e.signal?.aborted) return Promise.reject(e.signal.reason);
		if (this.disposed || (e.observeOnly || (this.active = !0), e.reconnect && (this.attempt = 0, this.update({ verification: "checking" })), this.snapshot.verification === "blocked")) return Promise.resolve(this.response);
		let t = new Promise((t, n) => {
			let r = () => {
				o.cleanup(), this.waiters.delete(o), !this.active && this.waiters.size === 0 && this.retireRequest();
			}, i = () => {
				r(), n(e.signal?.reason);
			}, a = setTimeout(() => {
				r(), t(runtimeHostStatusFailure("runtime_unavailable", this.snapshot.transport === "ready" ? "Status request timed out." : "Timed out waiting for the remote Orca runtime."));
			}, e.timeoutMs ?? REQUEST_TIMEOUT_MS$1), o = {
				resolve: t,
				cleanup: () => {
					clearTimeout(a), e.signal?.removeEventListener("abort", i);
				}
			};
			this.waiters.add(o), e.signal?.addEventListener("abort", i, { once: !0 });
		});
		return this.startRequest(), t;
	}
	connectionChanged(e, t) {
		if (this.disposed) return;
		let n = this.snapshot.transport;
		this.update({
			transport: e,
			...t === void 0 ? {} : { remoteControl: t }
		}), e !== n && (n === "ready" && (this.retireRequest(), this.clearRetry(), this.snapshot.verification !== "blocked" && this.update({ verification: "unavailable" })), e === "ready" && this.snapshot.verification !== "blocked" && (this.retireRequest(), (this.active || this.waiters.size > 0) && this.startRequest()));
	}
	authenticationRejected() {
		this.disposed || (this.retireRequest(), this.clearRetry(), this.complete(runtimeHostStatusFailure("unauthorized", "Pair this client again.")));
	}
	dispose() {
		this.disposed || (this.disposed = !0, this.active = !1, this.retireRequest(), this.clearRetry(), this.response = runtimeHostStatusFailure("runtime_manually_disconnected", "Runtime environment was disconnected or replaced."), this.update({
			retired: !0,
			transport: "disconnected",
			verification: "blocked"
		}), this.settleWaiters());
	}
	startRequest() {
		if (this.disposed || this.request || this.snapshot.verification === "blocked") return;
		this.clearRetry();
		let e = new AbortController();
		this.request = e, this.snapshot.verification !== "verified" && this.update({ verification: "checking" }), this.verify(e);
	}
	async verify(e) {
		let t;
		try {
			t = await this.options.request(e.signal);
		} catch (e) {
			t = runtimeHostStatusError(e), (e instanceof TypeError || e instanceof SyntaxError) && (console.error("Runtime status verification failed:", e), t = runtimeHostStatusFailure("invalid_runtime_response", e.message));
		}
		this.request !== e || this.disposed || (this.request = null, this.complete(t));
	}
	complete(e) {
		this.response = e, e.ok ? (this.attempt = 0, this.update({
			status: e.result,
			checkedAt: Date.now(),
			verification: "verified"
		}), this.persistent = this.options.verified(e, this.active)) : (this.update({
			checkedAt: Date.now(),
			verification: isRuntimeHostStatusBlocked(e) ? "blocked" : "unavailable"
		}), this.scheduleRetry()), this.settleWaiters();
	}
	scheduleRetry() {
		if (!this.active || this.disposed || this.snapshot.verification === "blocked" || this.persistent && this.snapshot.transport !== "ready") return;
		let e = RETRY_DELAYS_MS[Math.min(this.attempt++, RETRY_DELAYS_MS.length - 1)];
		this.retry = setTimeout(() => {
			this.retry = null, this.startRequest();
		}, e);
	}
	settleWaiters() {
		for (let e of this.waiters) e.cleanup(), e.resolve(this.response);
		this.waiters.clear();
	}
	retireRequest() {
		let e = this.request;
		this.request = null, e?.abort();
	}
	clearRetry() {
		this.retry && clearTimeout(this.retry), this.retry = null;
	}
	update(e) {
		this.snapshot = {
			...this.snapshot,
			...e,
			sequence: ++publicationSequence
		}, this.options.publish(this.snapshot);
	}
};
function withReconnectJitter(e, t = Math.random) {
	return e + Math.floor(e * .2 * t());
}
var HEARTBEAT_INTERVAL_MS = 1e4, HEARTBEAT_IDLE_MS = 25e3, HEARTBEAT_PROBE_GRACE_MS = 2e4, WebRuntimeConnectionHeartbeat = class {
	lastInboundFrameAt = 0;
	heartbeatProbeSentAt = null;
	lastHeartbeatTickAt = 0;
	cleanup = null;
	constructor(e) {
		this.options = e;
	}
	noteInboundFrame() {
		this.lastInboundFrameAt = this.options.now(), this.heartbeatProbeSentAt = null;
	}
	start() {
		this.clear();
		let e = this.options.now();
		this.lastInboundFrameAt = e, this.lastHeartbeatTickAt = e, this.heartbeatProbeSentAt = null, this.cleanup = installWindowVisibilityInterval({
			run: () => this.runTick(),
			runOnVisible: () => this.rebaseline(),
			intervalMs: HEARTBEAT_INTERVAL_MS
		});
	}
	clear() {
		this.cleanup?.(), this.cleanup = null, this.heartbeatProbeSentAt = null;
	}
	runTick() {
		let e = this.options.now(), t = e - this.lastHeartbeatTickAt;
		if (this.lastHeartbeatTickAt = e, t >= HEARTBEAT_INTERVAL_MS * 2 && (this.lastInboundFrameAt = e, this.heartbeatProbeSentAt = null), !this.options.isDocumentVisible()) return;
		let n = this.options.getSocket();
		if (!(!n || n.readyState !== WebSocket.OPEN || !this.options.isConnected())) {
			if (this.heartbeatProbeSentAt !== null && e - this.heartbeatProbeSentAt >= HEARTBEAT_PROBE_GRACE_MS) {
				n.close(), this.options.handleDeadSocket(n);
				return;
			}
			this.heartbeatProbeSentAt === null && e - this.lastInboundFrameAt >= HEARTBEAT_IDLE_MS && (this.heartbeatProbeSentAt = e, this.options.sendProbe());
		}
	}
	rebaseline() {
		this.lastHeartbeatTickAt = this.options.now(), this.heartbeatProbeSentAt = null;
	}
}, MetaSuccess = object({ runtimeId: string() }).strip(), MetaFailure = object({ runtimeId: union([string(), _null()]) }).strip().optional();
union([
	object({
		id: string(),
		ok: literal(!0),
		result: unknown(),
		_meta: MetaSuccess
	}).strip(),
	object({
		id: string(),
		ok: literal(!1),
		error: object({
			code: string(),
			message: string(),
			data: unknown().optional()
		}).strip(),
		_meta: MetaFailure
	}).strip(),
	object({ _keepalive: literal(!0) }).strip()
]);
function isKeepaliveFrame(e) {
	return typeof e == "object" && !!e && "_keepalive" in e && e._keepalive === !0;
}
var UNAUTHORIZED_MESSAGE = "Unauthorized. Pair this web client again.", WebRuntimeClientError = class extends Error {
	constructor(e, t) {
		super(e), this.code = t, this.name = "WebRuntimeClientError";
	}
};
function createWebRuntimeUnauthorizedError() {
	return new WebRuntimeClientError(UNAUTHORIZED_MESSAGE, "unauthorized");
}
function isWebRuntimeUnauthorizedError(e) {
	return e instanceof Error && "code" in e && e.code === "unauthorized";
}
var require___vite_browser_external = /* @__PURE__ */ __commonJSMin(((e, t) => {
	t.exports = {};
})), import_nacl_fast = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((e, n) => {
	(function(e) {
		var n = function(e) {
			var t, n = new Float64Array(16);
			if (e) for (t = 0; t < e.length; t++) n[t] = e[t];
			return n;
		}, r = function() {
			throw Error("no PRNG");
		}, i = new Uint8Array(16), a = new Uint8Array(32);
		a[0] = 9;
		var o = n(), s = n([1]), c = n([56129, 1]), l = n([
			30883,
			4953,
			19914,
			30187,
			55467,
			16705,
			2637,
			112,
			59544,
			30585,
			16505,
			36039,
			65139,
			11119,
			27886,
			20995
		]), u = n([
			61785,
			9906,
			39828,
			60374,
			45398,
			33411,
			5274,
			224,
			53552,
			61171,
			33010,
			6542,
			64743,
			22239,
			55772,
			9222
		]), d = n([
			54554,
			36645,
			11616,
			51542,
			42930,
			38181,
			51040,
			26924,
			56412,
			64982,
			57905,
			49316,
			21502,
			52590,
			14035,
			8553
		]), f = n([
			26200,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214,
			26214
		]), p = n([
			41136,
			18958,
			6951,
			50414,
			58488,
			44335,
			6150,
			12099,
			55207,
			15867,
			153,
			11085,
			57099,
			20417,
			9344,
			11139
		]);
		function m(e, t, n, r) {
			e[t] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = n & 255, e[t + 4] = r >> 24 & 255, e[t + 5] = r >> 16 & 255, e[t + 6] = r >> 8 & 255, e[t + 7] = r & 255;
		}
		function h(e, t, n, r, i) {
			var a, o = 0;
			for (a = 0; a < i; a++) o |= e[t + a] ^ n[r + a];
			return (1 & o - 1 >>> 8) - 1;
		}
		function g(e, t, n, r) {
			return h(e, t, n, r, 16);
		}
		function _(e, t, n, r) {
			return h(e, t, n, r, 32);
		}
		function v(e, t, n, r) {
			for (var i = r[0] & 255 | (r[1] & 255) << 8 | (r[2] & 255) << 16 | (r[3] & 255) << 24, a = n[0] & 255 | (n[1] & 255) << 8 | (n[2] & 255) << 16 | (n[3] & 255) << 24, o = n[4] & 255 | (n[5] & 255) << 8 | (n[6] & 255) << 16 | (n[7] & 255) << 24, s = n[8] & 255 | (n[9] & 255) << 8 | (n[10] & 255) << 16 | (n[11] & 255) << 24, c = n[12] & 255 | (n[13] & 255) << 8 | (n[14] & 255) << 16 | (n[15] & 255) << 24, l = r[4] & 255 | (r[5] & 255) << 8 | (r[6] & 255) << 16 | (r[7] & 255) << 24, u = t[0] & 255 | (t[1] & 255) << 8 | (t[2] & 255) << 16 | (t[3] & 255) << 24, d = t[4] & 255 | (t[5] & 255) << 8 | (t[6] & 255) << 16 | (t[7] & 255) << 24, f = t[8] & 255 | (t[9] & 255) << 8 | (t[10] & 255) << 16 | (t[11] & 255) << 24, p = t[12] & 255 | (t[13] & 255) << 8 | (t[14] & 255) << 16 | (t[15] & 255) << 24, m = r[8] & 255 | (r[9] & 255) << 8 | (r[10] & 255) << 16 | (r[11] & 255) << 24, h = n[16] & 255 | (n[17] & 255) << 8 | (n[18] & 255) << 16 | (n[19] & 255) << 24, g = n[20] & 255 | (n[21] & 255) << 8 | (n[22] & 255) << 16 | (n[23] & 255) << 24, _ = n[24] & 255 | (n[25] & 255) << 8 | (n[26] & 255) << 16 | (n[27] & 255) << 24, v = n[28] & 255 | (n[29] & 255) << 8 | (n[30] & 255) << 16 | (n[31] & 255) << 24, y = r[12] & 255 | (r[13] & 255) << 8 | (r[14] & 255) << 16 | (r[15] & 255) << 24, b = i, x = a, S = o, C = s, w = c, T = l, E = u, D = d, O = f, k = p, A = m, j = h, M = g, N = _, P = v, F = y, I, L = 0; L < 20; L += 2) I = b + M | 0, w ^= I << 7 | I >>> 25, I = w + b | 0, O ^= I << 9 | I >>> 23, I = O + w | 0, M ^= I << 13 | I >>> 19, I = M + O | 0, b ^= I << 18 | I >>> 14, I = T + x | 0, k ^= I << 7 | I >>> 25, I = k + T | 0, N ^= I << 9 | I >>> 23, I = N + k | 0, x ^= I << 13 | I >>> 19, I = x + N | 0, T ^= I << 18 | I >>> 14, I = A + E | 0, P ^= I << 7 | I >>> 25, I = P + A | 0, S ^= I << 9 | I >>> 23, I = S + P | 0, E ^= I << 13 | I >>> 19, I = E + S | 0, A ^= I << 18 | I >>> 14, I = F + j | 0, C ^= I << 7 | I >>> 25, I = C + F | 0, D ^= I << 9 | I >>> 23, I = D + C | 0, j ^= I << 13 | I >>> 19, I = j + D | 0, F ^= I << 18 | I >>> 14, I = b + C | 0, x ^= I << 7 | I >>> 25, I = x + b | 0, S ^= I << 9 | I >>> 23, I = S + x | 0, C ^= I << 13 | I >>> 19, I = C + S | 0, b ^= I << 18 | I >>> 14, I = T + w | 0, E ^= I << 7 | I >>> 25, I = E + T | 0, D ^= I << 9 | I >>> 23, I = D + E | 0, w ^= I << 13 | I >>> 19, I = w + D | 0, T ^= I << 18 | I >>> 14, I = A + k | 0, j ^= I << 7 | I >>> 25, I = j + A | 0, O ^= I << 9 | I >>> 23, I = O + j | 0, k ^= I << 13 | I >>> 19, I = k + O | 0, A ^= I << 18 | I >>> 14, I = F + P | 0, M ^= I << 7 | I >>> 25, I = M + F | 0, N ^= I << 9 | I >>> 23, I = N + M | 0, P ^= I << 13 | I >>> 19, I = P + N | 0, F ^= I << 18 | I >>> 14;
			b = b + i | 0, x = x + a | 0, S = S + o | 0, C = C + s | 0, w = w + c | 0, T = T + l | 0, E = E + u | 0, D = D + d | 0, O = O + f | 0, k = k + p | 0, A = A + m | 0, j = j + h | 0, M = M + g | 0, N = N + _ | 0, P = P + v | 0, F = F + y | 0, e[0] = b >>> 0 & 255, e[1] = b >>> 8 & 255, e[2] = b >>> 16 & 255, e[3] = b >>> 24 & 255, e[4] = x >>> 0 & 255, e[5] = x >>> 8 & 255, e[6] = x >>> 16 & 255, e[7] = x >>> 24 & 255, e[8] = S >>> 0 & 255, e[9] = S >>> 8 & 255, e[10] = S >>> 16 & 255, e[11] = S >>> 24 & 255, e[12] = C >>> 0 & 255, e[13] = C >>> 8 & 255, e[14] = C >>> 16 & 255, e[15] = C >>> 24 & 255, e[16] = w >>> 0 & 255, e[17] = w >>> 8 & 255, e[18] = w >>> 16 & 255, e[19] = w >>> 24 & 255, e[20] = T >>> 0 & 255, e[21] = T >>> 8 & 255, e[22] = T >>> 16 & 255, e[23] = T >>> 24 & 255, e[24] = E >>> 0 & 255, e[25] = E >>> 8 & 255, e[26] = E >>> 16 & 255, e[27] = E >>> 24 & 255, e[28] = D >>> 0 & 255, e[29] = D >>> 8 & 255, e[30] = D >>> 16 & 255, e[31] = D >>> 24 & 255, e[32] = O >>> 0 & 255, e[33] = O >>> 8 & 255, e[34] = O >>> 16 & 255, e[35] = O >>> 24 & 255, e[36] = k >>> 0 & 255, e[37] = k >>> 8 & 255, e[38] = k >>> 16 & 255, e[39] = k >>> 24 & 255, e[40] = A >>> 0 & 255, e[41] = A >>> 8 & 255, e[42] = A >>> 16 & 255, e[43] = A >>> 24 & 255, e[44] = j >>> 0 & 255, e[45] = j >>> 8 & 255, e[46] = j >>> 16 & 255, e[47] = j >>> 24 & 255, e[48] = M >>> 0 & 255, e[49] = M >>> 8 & 255, e[50] = M >>> 16 & 255, e[51] = M >>> 24 & 255, e[52] = N >>> 0 & 255, e[53] = N >>> 8 & 255, e[54] = N >>> 16 & 255, e[55] = N >>> 24 & 255, e[56] = P >>> 0 & 255, e[57] = P >>> 8 & 255, e[58] = P >>> 16 & 255, e[59] = P >>> 24 & 255, e[60] = F >>> 0 & 255, e[61] = F >>> 8 & 255, e[62] = F >>> 16 & 255, e[63] = F >>> 24 & 255;
		}
		function y(e, t, n, r) {
			for (var i = r[0] & 255 | (r[1] & 255) << 8 | (r[2] & 255) << 16 | (r[3] & 255) << 24, a = n[0] & 255 | (n[1] & 255) << 8 | (n[2] & 255) << 16 | (n[3] & 255) << 24, o = n[4] & 255 | (n[5] & 255) << 8 | (n[6] & 255) << 16 | (n[7] & 255) << 24, s = n[8] & 255 | (n[9] & 255) << 8 | (n[10] & 255) << 16 | (n[11] & 255) << 24, c = n[12] & 255 | (n[13] & 255) << 8 | (n[14] & 255) << 16 | (n[15] & 255) << 24, l = r[4] & 255 | (r[5] & 255) << 8 | (r[6] & 255) << 16 | (r[7] & 255) << 24, u = t[0] & 255 | (t[1] & 255) << 8 | (t[2] & 255) << 16 | (t[3] & 255) << 24, d = t[4] & 255 | (t[5] & 255) << 8 | (t[6] & 255) << 16 | (t[7] & 255) << 24, f = t[8] & 255 | (t[9] & 255) << 8 | (t[10] & 255) << 16 | (t[11] & 255) << 24, p = t[12] & 255 | (t[13] & 255) << 8 | (t[14] & 255) << 16 | (t[15] & 255) << 24, m = r[8] & 255 | (r[9] & 255) << 8 | (r[10] & 255) << 16 | (r[11] & 255) << 24, h = n[16] & 255 | (n[17] & 255) << 8 | (n[18] & 255) << 16 | (n[19] & 255) << 24, g = n[20] & 255 | (n[21] & 255) << 8 | (n[22] & 255) << 16 | (n[23] & 255) << 24, _ = n[24] & 255 | (n[25] & 255) << 8 | (n[26] & 255) << 16 | (n[27] & 255) << 24, v = n[28] & 255 | (n[29] & 255) << 8 | (n[30] & 255) << 16 | (n[31] & 255) << 24, y = r[12] & 255 | (r[13] & 255) << 8 | (r[14] & 255) << 16 | (r[15] & 255) << 24, b = i, x = a, S = o, C = s, w = c, T = l, E = u, D = d, O = f, k = p, A = m, j = h, M = g, N = _, P = v, F = y, I, L = 0; L < 20; L += 2) I = b + M | 0, w ^= I << 7 | I >>> 25, I = w + b | 0, O ^= I << 9 | I >>> 23, I = O + w | 0, M ^= I << 13 | I >>> 19, I = M + O | 0, b ^= I << 18 | I >>> 14, I = T + x | 0, k ^= I << 7 | I >>> 25, I = k + T | 0, N ^= I << 9 | I >>> 23, I = N + k | 0, x ^= I << 13 | I >>> 19, I = x + N | 0, T ^= I << 18 | I >>> 14, I = A + E | 0, P ^= I << 7 | I >>> 25, I = P + A | 0, S ^= I << 9 | I >>> 23, I = S + P | 0, E ^= I << 13 | I >>> 19, I = E + S | 0, A ^= I << 18 | I >>> 14, I = F + j | 0, C ^= I << 7 | I >>> 25, I = C + F | 0, D ^= I << 9 | I >>> 23, I = D + C | 0, j ^= I << 13 | I >>> 19, I = j + D | 0, F ^= I << 18 | I >>> 14, I = b + C | 0, x ^= I << 7 | I >>> 25, I = x + b | 0, S ^= I << 9 | I >>> 23, I = S + x | 0, C ^= I << 13 | I >>> 19, I = C + S | 0, b ^= I << 18 | I >>> 14, I = T + w | 0, E ^= I << 7 | I >>> 25, I = E + T | 0, D ^= I << 9 | I >>> 23, I = D + E | 0, w ^= I << 13 | I >>> 19, I = w + D | 0, T ^= I << 18 | I >>> 14, I = A + k | 0, j ^= I << 7 | I >>> 25, I = j + A | 0, O ^= I << 9 | I >>> 23, I = O + j | 0, k ^= I << 13 | I >>> 19, I = k + O | 0, A ^= I << 18 | I >>> 14, I = F + P | 0, M ^= I << 7 | I >>> 25, I = M + F | 0, N ^= I << 9 | I >>> 23, I = N + M | 0, P ^= I << 13 | I >>> 19, I = P + N | 0, F ^= I << 18 | I >>> 14;
			e[0] = b >>> 0 & 255, e[1] = b >>> 8 & 255, e[2] = b >>> 16 & 255, e[3] = b >>> 24 & 255, e[4] = T >>> 0 & 255, e[5] = T >>> 8 & 255, e[6] = T >>> 16 & 255, e[7] = T >>> 24 & 255, e[8] = A >>> 0 & 255, e[9] = A >>> 8 & 255, e[10] = A >>> 16 & 255, e[11] = A >>> 24 & 255, e[12] = F >>> 0 & 255, e[13] = F >>> 8 & 255, e[14] = F >>> 16 & 255, e[15] = F >>> 24 & 255, e[16] = E >>> 0 & 255, e[17] = E >>> 8 & 255, e[18] = E >>> 16 & 255, e[19] = E >>> 24 & 255, e[20] = D >>> 0 & 255, e[21] = D >>> 8 & 255, e[22] = D >>> 16 & 255, e[23] = D >>> 24 & 255, e[24] = O >>> 0 & 255, e[25] = O >>> 8 & 255, e[26] = O >>> 16 & 255, e[27] = O >>> 24 & 255, e[28] = k >>> 0 & 255, e[29] = k >>> 8 & 255, e[30] = k >>> 16 & 255, e[31] = k >>> 24 & 255;
		}
		function b(e, t, n, r) {
			v(e, t, n, r);
		}
		function x(e, t, n, r) {
			y(e, t, n, r);
		}
		var S = new Uint8Array([
			101,
			120,
			112,
			97,
			110,
			100,
			32,
			51,
			50,
			45,
			98,
			121,
			116,
			101,
			32,
			107
		]);
		function C(e, t, n, r, i, a, o) {
			var s = new Uint8Array(16), c = new Uint8Array(64), l, u;
			for (u = 0; u < 16; u++) s[u] = 0;
			for (u = 0; u < 8; u++) s[u] = a[u];
			for (; i >= 64;) {
				for (b(c, s, o, S), u = 0; u < 64; u++) e[t + u] = n[r + u] ^ c[u];
				for (l = 1, u = 8; u < 16; u++) l = l + (s[u] & 255) | 0, s[u] = l & 255, l >>>= 8;
				i -= 64, t += 64, r += 64;
			}
			if (i > 0) for (b(c, s, o, S), u = 0; u < i; u++) e[t + u] = n[r + u] ^ c[u];
			return 0;
		}
		function w(e, t, n, r, i) {
			var a = new Uint8Array(16), o = new Uint8Array(64), s, c;
			for (c = 0; c < 16; c++) a[c] = 0;
			for (c = 0; c < 8; c++) a[c] = r[c];
			for (; n >= 64;) {
				for (b(o, a, i, S), c = 0; c < 64; c++) e[t + c] = o[c];
				for (s = 1, c = 8; c < 16; c++) s = s + (a[c] & 255) | 0, a[c] = s & 255, s >>>= 8;
				n -= 64, t += 64;
			}
			if (n > 0) for (b(o, a, i, S), c = 0; c < n; c++) e[t + c] = o[c];
			return 0;
		}
		function T(e, t, n, r, i) {
			var a = new Uint8Array(32);
			x(a, r, i, S);
			for (var o = new Uint8Array(8), s = 0; s < 8; s++) o[s] = r[s + 16];
			return w(e, t, n, o, a);
		}
		function E(e, t, n, r, i, a, o) {
			var s = new Uint8Array(32);
			x(s, a, o, S);
			for (var c = new Uint8Array(8), l = 0; l < 8; l++) c[l] = a[l + 16];
			return C(e, t, n, r, i, c, s);
		}
		var D = function(e) {
			this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0;
			var t = e[0] & 255 | (e[1] & 255) << 8, n, r, i, a, o, s, c;
			this.r[0] = t & 8191, n = e[2] & 255 | (e[3] & 255) << 8, this.r[1] = (t >>> 13 | n << 3) & 8191, r = e[4] & 255 | (e[5] & 255) << 8, this.r[2] = (n >>> 10 | r << 6) & 7939, i = e[6] & 255 | (e[7] & 255) << 8, this.r[3] = (r >>> 7 | i << 9) & 8191, a = e[8] & 255 | (e[9] & 255) << 8, this.r[4] = (i >>> 4 | a << 12) & 255, this.r[5] = a >>> 1 & 8190, o = e[10] & 255 | (e[11] & 255) << 8, this.r[6] = (a >>> 14 | o << 2) & 8191, s = e[12] & 255 | (e[13] & 255) << 8, this.r[7] = (o >>> 11 | s << 5) & 8065, c = e[14] & 255 | (e[15] & 255) << 8, this.r[8] = (s >>> 8 | c << 8) & 8191, this.r[9] = c >>> 5 & 127, this.pad[0] = e[16] & 255 | (e[17] & 255) << 8, this.pad[1] = e[18] & 255 | (e[19] & 255) << 8, this.pad[2] = e[20] & 255 | (e[21] & 255) << 8, this.pad[3] = e[22] & 255 | (e[23] & 255) << 8, this.pad[4] = e[24] & 255 | (e[25] & 255) << 8, this.pad[5] = e[26] & 255 | (e[27] & 255) << 8, this.pad[6] = e[28] & 255 | (e[29] & 255) << 8, this.pad[7] = e[30] & 255 | (e[31] & 255) << 8;
		};
		D.prototype.blocks = function(e, t, n) {
			for (var r = this.fin ? 0 : 2048, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C = this.h[0], w = this.h[1], T = this.h[2], E = this.h[3], D = this.h[4], O = this.h[5], k = this.h[6], A = this.h[7], j = this.h[8], M = this.h[9], N = this.r[0], P = this.r[1], F = this.r[2], I = this.r[3], L = this.r[4], R = this.r[5], z = this.r[6], B = this.r[7], V = this.r[8], H = this.r[9]; n >= 16;) i = e[t + 0] & 255 | (e[t + 1] & 255) << 8, C += i & 8191, a = e[t + 2] & 255 | (e[t + 3] & 255) << 8, w += (i >>> 13 | a << 3) & 8191, o = e[t + 4] & 255 | (e[t + 5] & 255) << 8, T += (a >>> 10 | o << 6) & 8191, s = e[t + 6] & 255 | (e[t + 7] & 255) << 8, E += (o >>> 7 | s << 9) & 8191, c = e[t + 8] & 255 | (e[t + 9] & 255) << 8, D += (s >>> 4 | c << 12) & 8191, O += c >>> 1 & 8191, l = e[t + 10] & 255 | (e[t + 11] & 255) << 8, k += (c >>> 14 | l << 2) & 8191, u = e[t + 12] & 255 | (e[t + 13] & 255) << 8, A += (l >>> 11 | u << 5) & 8191, d = e[t + 14] & 255 | (e[t + 15] & 255) << 8, j += (u >>> 8 | d << 8) & 8191, M += d >>> 5 | r, f = 0, p = f, p += C * N, p += 5 * H * w, p += 5 * V * T, p += 5 * B * E, p += 5 * z * D, f = p >>> 13, p &= 8191, p += 5 * R * O, p += 5 * L * k, p += 5 * I * A, p += 5 * F * j, p += 5 * P * M, f += p >>> 13, p &= 8191, m = f, m += C * P, m += w * N, m += 5 * H * T, m += 5 * V * E, m += 5 * B * D, f = m >>> 13, m &= 8191, m += 5 * z * O, m += 5 * R * k, m += 5 * L * A, m += 5 * I * j, m += 5 * F * M, f += m >>> 13, m &= 8191, h = f, h += C * F, h += w * P, h += T * N, h += 5 * H * E, h += 5 * V * D, f = h >>> 13, h &= 8191, h += 5 * B * O, h += 5 * z * k, h += 5 * R * A, h += 5 * L * j, h += 5 * I * M, f += h >>> 13, h &= 8191, g = f, g += C * I, g += w * F, g += T * P, g += E * N, g += 5 * H * D, f = g >>> 13, g &= 8191, g += 5 * V * O, g += 5 * B * k, g += 5 * z * A, g += 5 * R * j, g += 5 * L * M, f += g >>> 13, g &= 8191, _ = f, _ += C * L, _ += w * I, _ += T * F, _ += E * P, _ += D * N, f = _ >>> 13, _ &= 8191, _ += 5 * H * O, _ += 5 * V * k, _ += 5 * B * A, _ += 5 * z * j, _ += 5 * R * M, f += _ >>> 13, _ &= 8191, v = f, v += C * R, v += w * L, v += T * I, v += E * F, v += D * P, f = v >>> 13, v &= 8191, v += O * N, v += 5 * H * k, v += 5 * V * A, v += 5 * B * j, v += 5 * z * M, f += v >>> 13, v &= 8191, y = f, y += C * z, y += w * R, y += T * L, y += E * I, y += D * F, f = y >>> 13, y &= 8191, y += O * P, y += k * N, y += 5 * H * A, y += 5 * V * j, y += 5 * B * M, f += y >>> 13, y &= 8191, b = f, b += C * B, b += w * z, b += T * R, b += E * L, b += D * I, f = b >>> 13, b &= 8191, b += O * F, b += k * P, b += A * N, b += 5 * H * j, b += 5 * V * M, f += b >>> 13, b &= 8191, x = f, x += C * V, x += w * B, x += T * z, x += E * R, x += D * L, f = x >>> 13, x &= 8191, x += O * I, x += k * F, x += A * P, x += j * N, x += 5 * H * M, f += x >>> 13, x &= 8191, S = f, S += C * H, S += w * V, S += T * B, S += E * z, S += D * R, f = S >>> 13, S &= 8191, S += O * L, S += k * I, S += A * F, S += j * P, S += M * N, f += S >>> 13, S &= 8191, f = (f << 2) + f | 0, f = f + p | 0, p = f & 8191, f >>>= 13, m += f, C = p, w = m, T = h, E = g, D = _, O = v, k = y, A = b, j = x, M = S, t += 16, n -= 16;
			this.h[0] = C, this.h[1] = w, this.h[2] = T, this.h[3] = E, this.h[4] = D, this.h[5] = O, this.h[6] = k, this.h[7] = A, this.h[8] = j, this.h[9] = M;
		}, D.prototype.finish = function(e, t) {
			var n = new Uint16Array(10), r, i, a, o;
			if (this.leftover) {
				for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++) this.buffer[o] = 0;
				this.fin = 1, this.blocks(this.buffer, 0, 16);
			}
			for (r = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++) this.h[o] += r, r = this.h[o] >>> 13, this.h[o] &= 8191;
			for (this.h[0] += r * 5, r = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r, r = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r, n[0] = this.h[0] + 5, r = n[0] >>> 13, n[0] &= 8191, o = 1; o < 10; o++) n[o] = this.h[o] + r, r = n[o] >>> 13, n[o] &= 8191;
			for (n[9] -= 8192, i = (r ^ 1) - 1, o = 0; o < 10; o++) n[o] &= i;
			for (i = ~i, o = 0; o < 10; o++) this.h[o] = this.h[o] & i | n[o];
			for (this.h[0] = (this.h[0] | this.h[1] << 13) & 65535, this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535, this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535, this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535, this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535, this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535, this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535, this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535, a = this.h[0] + this.pad[0], this.h[0] = a & 65535, o = 1; o < 8; o++) a = (this.h[o] + this.pad[o] | 0) + (a >>> 16) | 0, this.h[o] = a & 65535;
			e[t + 0] = this.h[0] >>> 0 & 255, e[t + 1] = this.h[0] >>> 8 & 255, e[t + 2] = this.h[1] >>> 0 & 255, e[t + 3] = this.h[1] >>> 8 & 255, e[t + 4] = this.h[2] >>> 0 & 255, e[t + 5] = this.h[2] >>> 8 & 255, e[t + 6] = this.h[3] >>> 0 & 255, e[t + 7] = this.h[3] >>> 8 & 255, e[t + 8] = this.h[4] >>> 0 & 255, e[t + 9] = this.h[4] >>> 8 & 255, e[t + 10] = this.h[5] >>> 0 & 255, e[t + 11] = this.h[5] >>> 8 & 255, e[t + 12] = this.h[6] >>> 0 & 255, e[t + 13] = this.h[6] >>> 8 & 255, e[t + 14] = this.h[7] >>> 0 & 255, e[t + 15] = this.h[7] >>> 8 & 255;
		}, D.prototype.update = function(e, t, n) {
			var r, i;
			if (this.leftover) {
				for (i = 16 - this.leftover, i > n && (i = n), r = 0; r < i; r++) this.buffer[this.leftover + r] = e[t + r];
				if (n -= i, t += i, this.leftover += i, this.leftover < 16) return;
				this.blocks(this.buffer, 0, 16), this.leftover = 0;
			}
			if (n >= 16 && (i = n - n % 16, this.blocks(e, t, i), t += i, n -= i), n) {
				for (r = 0; r < n; r++) this.buffer[this.leftover + r] = e[t + r];
				this.leftover += n;
			}
		};
		function O(e, t, n, r, i, a) {
			var o = new D(a);
			return o.update(n, r, i), o.finish(e, t), 0;
		}
		function k(e, t, n, r, i, a) {
			var o = new Uint8Array(16);
			return O(o, 0, n, r, i, a), g(e, t, o, 0);
		}
		function A(e, t, n, r, i) {
			var a;
			if (n < 32) return -1;
			for (E(e, 0, t, 0, n, r, i), O(e, 16, e, 32, n - 32, e), a = 0; a < 16; a++) e[a] = 0;
			return 0;
		}
		function j(e, t, n, r, i) {
			var a, o = new Uint8Array(32);
			if (n < 32 || (T(o, 0, 32, r, i), k(t, 16, t, 32, n - 32, o) !== 0)) return -1;
			for (E(e, 0, t, 0, n, r, i), a = 0; a < 32; a++) e[a] = 0;
			return 0;
		}
		function M(e, t) {
			var n;
			for (n = 0; n < 16; n++) e[n] = t[n] | 0;
		}
		function N(e) {
			var t, n, r = 1;
			for (t = 0; t < 16; t++) n = e[t] + r + 65535, r = Math.floor(n / 65536), e[t] = n - r * 65536;
			e[0] += r - 1 + 37 * (r - 1);
		}
		function P(e, t, n) {
			for (var r, i = ~(n - 1), a = 0; a < 16; a++) r = i & (e[a] ^ t[a]), e[a] ^= r, t[a] ^= r;
		}
		function F(e, t) {
			var r, i, a, o = n(), s = n();
			for (r = 0; r < 16; r++) s[r] = t[r];
			for (N(s), N(s), N(s), i = 0; i < 2; i++) {
				for (o[0] = s[0] - 65517, r = 1; r < 15; r++) o[r] = s[r] - 65535 - (o[r - 1] >> 16 & 1), o[r - 1] &= 65535;
				o[15] = s[15] - 32767 - (o[14] >> 16 & 1), a = o[15] >> 16 & 1, o[14] &= 65535, P(s, o, 1 - a);
			}
			for (r = 0; r < 16; r++) e[2 * r] = s[r] & 255, e[2 * r + 1] = s[r] >> 8;
		}
		function I(e, t) {
			var n = new Uint8Array(32), r = new Uint8Array(32);
			return F(n, e), F(r, t), _(n, 0, r, 0);
		}
		function L(e) {
			var t = new Uint8Array(32);
			return F(t, e), t[0] & 1;
		}
		function R(e, t) {
			var n;
			for (n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
			e[15] &= 32767;
		}
		function z(e, t, n) {
			for (var r = 0; r < 16; r++) e[r] = t[r] + n[r];
		}
		function B(e, t, n) {
			for (var r = 0; r < 16; r++) e[r] = t[r] - n[r];
		}
		function V(e, t, n) {
			var r, i, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0, x = 0, S = 0, C = 0, w = 0, T = 0, E = 0, D = 0, O = 0, k = 0, A = 0, j = 0, M = 0, N = 0, P = 0, F = 0, I = n[0], L = n[1], R = n[2], z = n[3], B = n[4], V = n[5], H = n[6], U = n[7], W = n[8], G = n[9], K = n[10], q = n[11], J = n[12], Y = n[13], X = n[14], Z = n[15];
			r = t[0], a += r * I, o += r * L, s += r * R, c += r * z, l += r * B, u += r * V, d += r * H, f += r * U, p += r * W, m += r * G, h += r * K, g += r * q, _ += r * J, v += r * Y, y += r * X, b += r * Z, r = t[1], o += r * I, s += r * L, c += r * R, l += r * z, u += r * B, d += r * V, f += r * H, p += r * U, m += r * W, h += r * G, g += r * K, _ += r * q, v += r * J, y += r * Y, b += r * X, x += r * Z, r = t[2], s += r * I, c += r * L, l += r * R, u += r * z, d += r * B, f += r * V, p += r * H, m += r * U, h += r * W, g += r * G, _ += r * K, v += r * q, y += r * J, b += r * Y, x += r * X, S += r * Z, r = t[3], c += r * I, l += r * L, u += r * R, d += r * z, f += r * B, p += r * V, m += r * H, h += r * U, g += r * W, _ += r * G, v += r * K, y += r * q, b += r * J, x += r * Y, S += r * X, C += r * Z, r = t[4], l += r * I, u += r * L, d += r * R, f += r * z, p += r * B, m += r * V, h += r * H, g += r * U, _ += r * W, v += r * G, y += r * K, b += r * q, x += r * J, S += r * Y, C += r * X, w += r * Z, r = t[5], u += r * I, d += r * L, f += r * R, p += r * z, m += r * B, h += r * V, g += r * H, _ += r * U, v += r * W, y += r * G, b += r * K, x += r * q, S += r * J, C += r * Y, w += r * X, T += r * Z, r = t[6], d += r * I, f += r * L, p += r * R, m += r * z, h += r * B, g += r * V, _ += r * H, v += r * U, y += r * W, b += r * G, x += r * K, S += r * q, C += r * J, w += r * Y, T += r * X, E += r * Z, r = t[7], f += r * I, p += r * L, m += r * R, h += r * z, g += r * B, _ += r * V, v += r * H, y += r * U, b += r * W, x += r * G, S += r * K, C += r * q, w += r * J, T += r * Y, E += r * X, D += r * Z, r = t[8], p += r * I, m += r * L, h += r * R, g += r * z, _ += r * B, v += r * V, y += r * H, b += r * U, x += r * W, S += r * G, C += r * K, w += r * q, T += r * J, E += r * Y, D += r * X, O += r * Z, r = t[9], m += r * I, h += r * L, g += r * R, _ += r * z, v += r * B, y += r * V, b += r * H, x += r * U, S += r * W, C += r * G, w += r * K, T += r * q, E += r * J, D += r * Y, O += r * X, k += r * Z, r = t[10], h += r * I, g += r * L, _ += r * R, v += r * z, y += r * B, b += r * V, x += r * H, S += r * U, C += r * W, w += r * G, T += r * K, E += r * q, D += r * J, O += r * Y, k += r * X, A += r * Z, r = t[11], g += r * I, _ += r * L, v += r * R, y += r * z, b += r * B, x += r * V, S += r * H, C += r * U, w += r * W, T += r * G, E += r * K, D += r * q, O += r * J, k += r * Y, A += r * X, j += r * Z, r = t[12], _ += r * I, v += r * L, y += r * R, b += r * z, x += r * B, S += r * V, C += r * H, w += r * U, T += r * W, E += r * G, D += r * K, O += r * q, k += r * J, A += r * Y, j += r * X, M += r * Z, r = t[13], v += r * I, y += r * L, b += r * R, x += r * z, S += r * B, C += r * V, w += r * H, T += r * U, E += r * W, D += r * G, O += r * K, k += r * q, A += r * J, j += r * Y, M += r * X, N += r * Z, r = t[14], y += r * I, b += r * L, x += r * R, S += r * z, C += r * B, w += r * V, T += r * H, E += r * U, D += r * W, O += r * G, k += r * K, A += r * q, j += r * J, M += r * Y, N += r * X, P += r * Z, r = t[15], b += r * I, x += r * L, S += r * R, C += r * z, w += r * B, T += r * V, E += r * H, D += r * U, O += r * W, k += r * G, A += r * K, j += r * q, M += r * J, N += r * Y, P += r * X, F += r * Z, a += 38 * x, o += 38 * S, s += 38 * C, c += 38 * w, l += 38 * T, u += 38 * E, d += 38 * D, f += 38 * O, p += 38 * k, m += 38 * A, h += 38 * j, g += 38 * M, _ += 38 * N, v += 38 * P, y += 38 * F, i = 1, r = a + i + 65535, i = Math.floor(r / 65536), a = r - i * 65536, r = o + i + 65535, i = Math.floor(r / 65536), o = r - i * 65536, r = s + i + 65535, i = Math.floor(r / 65536), s = r - i * 65536, r = c + i + 65535, i = Math.floor(r / 65536), c = r - i * 65536, r = l + i + 65535, i = Math.floor(r / 65536), l = r - i * 65536, r = u + i + 65535, i = Math.floor(r / 65536), u = r - i * 65536, r = d + i + 65535, i = Math.floor(r / 65536), d = r - i * 65536, r = f + i + 65535, i = Math.floor(r / 65536), f = r - i * 65536, r = p + i + 65535, i = Math.floor(r / 65536), p = r - i * 65536, r = m + i + 65535, i = Math.floor(r / 65536), m = r - i * 65536, r = h + i + 65535, i = Math.floor(r / 65536), h = r - i * 65536, r = g + i + 65535, i = Math.floor(r / 65536), g = r - i * 65536, r = _ + i + 65535, i = Math.floor(r / 65536), _ = r - i * 65536, r = v + i + 65535, i = Math.floor(r / 65536), v = r - i * 65536, r = y + i + 65535, i = Math.floor(r / 65536), y = r - i * 65536, r = b + i + 65535, i = Math.floor(r / 65536), b = r - i * 65536, a += i - 1 + 37 * (i - 1), i = 1, r = a + i + 65535, i = Math.floor(r / 65536), a = r - i * 65536, r = o + i + 65535, i = Math.floor(r / 65536), o = r - i * 65536, r = s + i + 65535, i = Math.floor(r / 65536), s = r - i * 65536, r = c + i + 65535, i = Math.floor(r / 65536), c = r - i * 65536, r = l + i + 65535, i = Math.floor(r / 65536), l = r - i * 65536, r = u + i + 65535, i = Math.floor(r / 65536), u = r - i * 65536, r = d + i + 65535, i = Math.floor(r / 65536), d = r - i * 65536, r = f + i + 65535, i = Math.floor(r / 65536), f = r - i * 65536, r = p + i + 65535, i = Math.floor(r / 65536), p = r - i * 65536, r = m + i + 65535, i = Math.floor(r / 65536), m = r - i * 65536, r = h + i + 65535, i = Math.floor(r / 65536), h = r - i * 65536, r = g + i + 65535, i = Math.floor(r / 65536), g = r - i * 65536, r = _ + i + 65535, i = Math.floor(r / 65536), _ = r - i * 65536, r = v + i + 65535, i = Math.floor(r / 65536), v = r - i * 65536, r = y + i + 65535, i = Math.floor(r / 65536), y = r - i * 65536, r = b + i + 65535, i = Math.floor(r / 65536), b = r - i * 65536, a += i - 1 + 37 * (i - 1), e[0] = a, e[1] = o, e[2] = s, e[3] = c, e[4] = l, e[5] = u, e[6] = d, e[7] = f, e[8] = p, e[9] = m, e[10] = h, e[11] = g, e[12] = _, e[13] = v, e[14] = y, e[15] = b;
		}
		function H(e, t) {
			V(e, t, t);
		}
		function U(e, t) {
			var r = n(), i;
			for (i = 0; i < 16; i++) r[i] = t[i];
			for (i = 253; i >= 0; i--) H(r, r), i !== 2 && i !== 4 && V(r, r, t);
			for (i = 0; i < 16; i++) e[i] = r[i];
		}
		function W(e, t) {
			var r = n(), i;
			for (i = 0; i < 16; i++) r[i] = t[i];
			for (i = 250; i >= 0; i--) H(r, r), i !== 1 && V(r, r, t);
			for (i = 0; i < 16; i++) e[i] = r[i];
		}
		function G(e, t, r) {
			var i = new Uint8Array(32), a = new Float64Array(80), o, s, l = n(), u = n(), d = n(), f = n(), p = n(), m = n();
			for (s = 0; s < 31; s++) i[s] = t[s];
			for (i[31] = t[31] & 127 | 64, i[0] &= 248, R(a, r), s = 0; s < 16; s++) u[s] = a[s], f[s] = l[s] = d[s] = 0;
			for (l[0] = f[0] = 1, s = 254; s >= 0; --s) o = i[s >>> 3] >>> (s & 7) & 1, P(l, u, o), P(d, f, o), z(p, l, d), B(l, l, d), z(d, u, f), B(u, u, f), H(f, p), H(m, l), V(l, d, l), V(d, u, p), z(p, l, d), B(l, l, d), H(u, l), B(d, f, m), V(l, d, c), z(l, l, f), V(d, d, l), V(l, f, m), V(f, u, a), H(u, p), P(l, u, o), P(d, f, o);
			for (s = 0; s < 16; s++) a[s + 16] = l[s], a[s + 32] = d[s], a[s + 48] = u[s], a[s + 64] = f[s];
			var h = a.subarray(32), g = a.subarray(16);
			return U(h, h), V(g, g, h), F(e, g), 0;
		}
		function K(e, t) {
			return G(e, t, a);
		}
		function q(e, t) {
			return r(t, 32), K(e, t);
		}
		function J(e, t, n) {
			var r = new Uint8Array(32);
			return G(r, n, t), x(e, i, r, S);
		}
		var Y = A, X = j;
		function Z(e, t, n, r, i, a) {
			var o = new Uint8Array(32);
			return J(o, i, a), Y(e, t, n, r, o);
		}
		function Wa(e, t, n, r, i, a) {
			var o = new Uint8Array(32);
			return J(o, i, a), X(e, t, n, r, o);
		}
		var Ga = [
			1116352408,
			3609767458,
			1899447441,
			602891725,
			3049323471,
			3964484399,
			3921009573,
			2173295548,
			961987163,
			4081628472,
			1508970993,
			3053834265,
			2453635748,
			2937671579,
			2870763221,
			3664609560,
			3624381080,
			2734883394,
			310598401,
			1164996542,
			607225278,
			1323610764,
			1426881987,
			3590304994,
			1925078388,
			4068182383,
			2162078206,
			991336113,
			2614888103,
			633803317,
			3248222580,
			3479774868,
			3835390401,
			2666613458,
			4022224774,
			944711139,
			264347078,
			2341262773,
			604807628,
			2007800933,
			770255983,
			1495990901,
			1249150122,
			1856431235,
			1555081692,
			3175218132,
			1996064986,
			2198950837,
			2554220882,
			3999719339,
			2821834349,
			766784016,
			2952996808,
			2566594879,
			3210313671,
			3203337956,
			3336571891,
			1034457026,
			3584528711,
			2466948901,
			113926993,
			3758326383,
			338241895,
			168717936,
			666307205,
			1188179964,
			773529912,
			1546045734,
			1294757372,
			1522805485,
			1396182291,
			2643833823,
			1695183700,
			2343527390,
			1986661051,
			1014477480,
			2177026350,
			1206759142,
			2456956037,
			344077627,
			2730485921,
			1290863460,
			2820302411,
			3158454273,
			3259730800,
			3505952657,
			3345764771,
			106217008,
			3516065817,
			3606008344,
			3600352804,
			1432725776,
			4094571909,
			1467031594,
			275423344,
			851169720,
			430227734,
			3100823752,
			506948616,
			1363258195,
			659060556,
			3750685593,
			883997877,
			3785050280,
			958139571,
			3318307427,
			1322822218,
			3812723403,
			1537002063,
			2003034995,
			1747873779,
			3602036899,
			1955562222,
			1575990012,
			2024104815,
			1125592928,
			2227730452,
			2716904306,
			2361852424,
			442776044,
			2428436474,
			593698344,
			2756734187,
			3733110249,
			3204031479,
			2999351573,
			3329325298,
			3815920427,
			3391569614,
			3928383900,
			3515267271,
			566280711,
			3940187606,
			3454069534,
			4118630271,
			4000239992,
			116418474,
			1914138554,
			174292421,
			2731055270,
			289380356,
			3203993006,
			460393269,
			320620315,
			685471733,
			587496836,
			852142971,
			1086792851,
			1017036298,
			365543100,
			1126000580,
			2618297676,
			1288033470,
			3409855158,
			1501505948,
			4234509866,
			1607167915,
			987167468,
			1816402316,
			1246189591
		];
		function Ka(e, t, n, r) {
			for (var i = new Int32Array(16), a = new Int32Array(16), o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M = e[0], N = e[1], P = e[2], F = e[3], I = e[4], L = e[5], R = e[6], z = e[7], B = t[0], V = t[1], H = t[2], U = t[3], W = t[4], G = t[5], K = t[6], q = t[7], J = 0; r >= 128;) {
				for (w = 0; w < 16; w++) T = 8 * w + J, i[w] = n[T + 0] << 24 | n[T + 1] << 16 | n[T + 2] << 8 | n[T + 3], a[w] = n[T + 4] << 24 | n[T + 5] << 16 | n[T + 6] << 8 | n[T + 7];
				for (w = 0; w < 80; w++) if (o = M, s = N, c = P, l = F, u = I, d = L, f = R, p = z, m = B, h = V, g = H, _ = U, v = W, y = G, b = K, x = q, E = z, D = q, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = (I >>> 14 | W << 18) ^ (I >>> 18 | W << 14) ^ (W >>> 9 | I << 23), D = (W >>> 14 | I << 18) ^ (W >>> 18 | I << 14) ^ (I >>> 9 | W << 23), O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, E = I & L ^ ~I & R, D = W & G ^ ~W & K, O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, E = Ga[w * 2], D = Ga[w * 2 + 1], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, E = i[w % 16], D = a[w % 16], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, S = A & 65535 | j << 16, C = O & 65535 | k << 16, E = S, D = C, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = (M >>> 28 | B << 4) ^ (B >>> 2 | M << 30) ^ (B >>> 7 | M << 25), D = (B >>> 28 | M << 4) ^ (M >>> 2 | B << 30) ^ (M >>> 7 | B << 25), O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, E = M & N ^ M & P ^ N & P, D = B & V ^ B & H ^ V & H, O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, p = A & 65535 | j << 16, x = O & 65535 | k << 16, E = l, D = _, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = S, D = C, O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, l = A & 65535 | j << 16, _ = O & 65535 | k << 16, N = o, P = s, F = c, I = l, L = u, R = d, z = f, M = p, V = m, H = h, U = g, W = _, G = v, K = y, q = b, B = x, w % 16 == 15) for (T = 0; T < 16; T++) E = i[T], D = a[T], O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = i[(T + 9) % 16], D = a[(T + 9) % 16], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, S = i[(T + 1) % 16], C = a[(T + 1) % 16], E = (S >>> 1 | C << 31) ^ (S >>> 8 | C << 24) ^ S >>> 7, D = (C >>> 1 | S << 31) ^ (C >>> 8 | S << 24) ^ (C >>> 7 | S << 25), O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, S = i[(T + 14) % 16], C = a[(T + 14) % 16], E = (S >>> 19 | C << 13) ^ (C >>> 29 | S << 3) ^ S >>> 6, D = (C >>> 19 | S << 13) ^ (S >>> 29 | C << 3) ^ (C >>> 6 | S << 26), O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, i[T] = A & 65535 | j << 16, a[T] = O & 65535 | k << 16;
				E = M, D = B, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = e[0], D = t[0], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, e[0] = M = A & 65535 | j << 16, t[0] = B = O & 65535 | k << 16, E = N, D = V, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = e[1], D = t[1], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, e[1] = N = A & 65535 | j << 16, t[1] = V = O & 65535 | k << 16, E = P, D = H, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = e[2], D = t[2], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, e[2] = P = A & 65535 | j << 16, t[2] = H = O & 65535 | k << 16, E = F, D = U, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = e[3], D = t[3], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, e[3] = F = A & 65535 | j << 16, t[3] = U = O & 65535 | k << 16, E = I, D = W, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = e[4], D = t[4], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, e[4] = I = A & 65535 | j << 16, t[4] = W = O & 65535 | k << 16, E = L, D = G, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = e[5], D = t[5], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, e[5] = L = A & 65535 | j << 16, t[5] = G = O & 65535 | k << 16, E = R, D = K, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = e[6], D = t[6], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, e[6] = R = A & 65535 | j << 16, t[6] = K = O & 65535 | k << 16, E = z, D = q, O = D & 65535, k = D >>> 16, A = E & 65535, j = E >>> 16, E = e[7], D = t[7], O += D & 65535, k += D >>> 16, A += E & 65535, j += E >>> 16, k += O >>> 16, A += k >>> 16, j += A >>> 16, e[7] = z = A & 65535 | j << 16, t[7] = q = O & 65535 | k << 16, J += 128, r -= 128;
			}
			return r;
		}
		function qa(e, t, n) {
			var r = new Int32Array(8), i = new Int32Array(8), a = new Uint8Array(256), o, s = n;
			for (r[0] = 1779033703, r[1] = 3144134277, r[2] = 1013904242, r[3] = 2773480762, r[4] = 1359893119, r[5] = 2600822924, r[6] = 528734635, r[7] = 1541459225, i[0] = 4089235720, i[1] = 2227873595, i[2] = 4271175723, i[3] = 1595750129, i[4] = 2917565137, i[5] = 725511199, i[6] = 4215389547, i[7] = 327033209, Ka(r, i, t, n), n %= 128, o = 0; o < n; o++) a[o] = t[s - n + o];
			for (a[n] = 128, n = 256 - 128 * (n < 112 ? 1 : 0), a[n - 9] = 0, m(a, n - 8, s / 536870912 | 0, s << 3), Ka(r, i, a, n), o = 0; o < 8; o++) m(e, 8 * o, r[o], i[o]);
			return 0;
		}
		function Ja(e, t) {
			var r = n(), i = n(), a = n(), o = n(), s = n(), c = n(), l = n(), d = n(), f = n();
			B(r, e[1], e[0]), B(f, t[1], t[0]), V(r, r, f), z(i, e[0], e[1]), z(f, t[0], t[1]), V(i, i, f), V(a, e[3], t[3]), V(a, a, u), V(o, e[2], t[2]), z(o, o, o), B(s, i, r), B(c, o, a), z(l, o, a), z(d, i, r), V(e[0], s, c), V(e[1], d, l), V(e[2], l, c), V(e[3], s, d);
		}
		function Ya(e, t, n) {
			var r;
			for (r = 0; r < 4; r++) P(e[r], t[r], n);
		}
		function Xa(e, t) {
			var r = n(), i = n(), a = n();
			U(a, t[2]), V(r, t[0], a), V(i, t[1], a), F(e, i), e[31] ^= L(r) << 7;
		}
		function Za(e, t, n) {
			var r, i;
			for (M(e[0], o), M(e[1], s), M(e[2], s), M(e[3], o), i = 255; i >= 0; --i) r = n[i / 8 | 0] >> (i & 7) & 1, Ya(e, t, r), Ja(t, e), Ja(e, e), Ya(e, t, r);
		}
		function Qa(e, t) {
			var r = [
				n(),
				n(),
				n(),
				n()
			];
			M(r[0], d), M(r[1], f), M(r[2], s), V(r[3], d, f), Za(e, r, t);
		}
		function $a(e, t, i) {
			var a = new Uint8Array(64), o = [
				n(),
				n(),
				n(),
				n()
			], s;
			for (i || r(t, 32), qa(a, t, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64, Qa(o, a), Xa(e, o), s = 0; s < 32; s++) t[s + 32] = e[s];
			return 0;
		}
		var eo = new Float64Array([
			237,
			211,
			245,
			92,
			26,
			99,
			18,
			88,
			214,
			156,
			247,
			162,
			222,
			249,
			222,
			20,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			0,
			16
		]);
		function to(e, t) {
			var n, r, i, a;
			for (r = 63; r >= 32; --r) {
				for (n = 0, i = r - 32, a = r - 12; i < a; ++i) t[i] += n - 16 * t[r] * eo[i - (r - 32)], n = Math.floor((t[i] + 128) / 256), t[i] -= n * 256;
				t[i] += n, t[r] = 0;
			}
			for (n = 0, i = 0; i < 32; i++) t[i] += n - (t[31] >> 4) * eo[i], n = t[i] >> 8, t[i] &= 255;
			for (i = 0; i < 32; i++) t[i] -= n * eo[i];
			for (r = 0; r < 32; r++) t[r + 1] += t[r] >> 8, e[r] = t[r] & 255;
		}
		function no(e) {
			var t = new Float64Array(64), n;
			for (n = 0; n < 64; n++) t[n] = e[n];
			for (n = 0; n < 64; n++) e[n] = 0;
			to(e, t);
		}
		function ro(e, t, r, i) {
			var a = new Uint8Array(64), o = new Uint8Array(64), s = new Uint8Array(64), c, l, u = new Float64Array(64), d = [
				n(),
				n(),
				n(),
				n()
			];
			qa(a, i, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64;
			var f = r + 64;
			for (c = 0; c < r; c++) e[64 + c] = t[c];
			for (c = 0; c < 32; c++) e[32 + c] = a[32 + c];
			for (qa(s, e.subarray(32), r + 32), no(s), Qa(d, s), Xa(e, d), c = 32; c < 64; c++) e[c] = i[c];
			for (qa(o, e, r + 64), no(o), c = 0; c < 64; c++) u[c] = 0;
			for (c = 0; c < 32; c++) u[c] = s[c];
			for (c = 0; c < 32; c++) for (l = 0; l < 32; l++) u[c + l] += o[c] * a[l];
			return to(e.subarray(32), u), f;
		}
		function io(e, t) {
			var r = n(), i = n(), a = n(), c = n(), u = n(), d = n(), f = n();
			return M(e[2], s), R(e[1], t), H(a, e[1]), V(c, a, l), B(a, a, e[2]), z(c, e[2], c), H(u, c), H(d, u), V(f, d, u), V(r, f, a), V(r, r, c), W(r, r), V(r, r, a), V(r, r, c), V(r, r, c), V(e[0], r, c), H(i, e[0]), V(i, i, c), I(i, a) && V(e[0], e[0], p), H(i, e[0]), V(i, i, c), I(i, a) ? -1 : (L(e[0]) === t[31] >> 7 && B(e[0], o, e[0]), V(e[3], e[0], e[1]), 0);
		}
		function ao(e, t, r, i) {
			var a, o = new Uint8Array(32), s = new Uint8Array(64), c = [
				n(),
				n(),
				n(),
				n()
			], l = [
				n(),
				n(),
				n(),
				n()
			];
			if (r < 64 || io(l, i)) return -1;
			for (a = 0; a < r; a++) e[a] = t[a];
			for (a = 0; a < 32; a++) e[a + 32] = i[a];
			if (qa(s, e, r), no(s), Za(c, l, s), Qa(l, t.subarray(32)), Ja(c, l), Xa(o, c), r -= 64, _(t, 0, o, 0)) {
				for (a = 0; a < r; a++) e[a] = 0;
				return -1;
			}
			for (a = 0; a < r; a++) e[a] = t[a + 64];
			return r;
		}
		var oo = 32, so = 24, co = 32, lo = 16, uo = 32, fo = 32, po = 32, mo = 32, ho = 32, go = so, _o = co, vo = lo, Q = 64, yo = 32, bo = 64, xo = 32, So = 64;
		e.lowlevel = {
			crypto_core_hsalsa20: x,
			crypto_stream_xor: E,
			crypto_stream: T,
			crypto_stream_salsa20_xor: C,
			crypto_stream_salsa20: w,
			crypto_onetimeauth: O,
			crypto_onetimeauth_verify: k,
			crypto_verify_16: g,
			crypto_verify_32: _,
			crypto_secretbox: A,
			crypto_secretbox_open: j,
			crypto_scalarmult: G,
			crypto_scalarmult_base: K,
			crypto_box_beforenm: J,
			crypto_box_afternm: Y,
			crypto_box: Z,
			crypto_box_open: Wa,
			crypto_box_keypair: q,
			crypto_hash: qa,
			crypto_sign: ro,
			crypto_sign_keypair: $a,
			crypto_sign_open: ao,
			crypto_secretbox_KEYBYTES: oo,
			crypto_secretbox_NONCEBYTES: so,
			crypto_secretbox_ZEROBYTES: co,
			crypto_secretbox_BOXZEROBYTES: lo,
			crypto_scalarmult_BYTES: uo,
			crypto_scalarmult_SCALARBYTES: fo,
			crypto_box_PUBLICKEYBYTES: po,
			crypto_box_SECRETKEYBYTES: mo,
			crypto_box_BEFORENMBYTES: ho,
			crypto_box_NONCEBYTES: go,
			crypto_box_ZEROBYTES: _o,
			crypto_box_BOXZEROBYTES: vo,
			crypto_sign_BYTES: Q,
			crypto_sign_PUBLICKEYBYTES: yo,
			crypto_sign_SECRETKEYBYTES: bo,
			crypto_sign_SEEDBYTES: xo,
			crypto_hash_BYTES: So,
			gf: n,
			D: l,
			L: eo,
			pack25519: F,
			unpack25519: R,
			M: V,
			A: z,
			S: H,
			Z: B,
			pow2523: W,
			add: Ja,
			set25519: M,
			modL: to,
			scalarmult: Za,
			scalarbase: Qa
		};
		function Co(e, t) {
			if (e.length !== oo) throw Error("bad key size");
			if (t.length !== so) throw Error("bad nonce size");
		}
		function wo(e, t) {
			if (e.length !== po) throw Error("bad public key size");
			if (t.length !== mo) throw Error("bad secret key size");
		}
		function $() {
			for (var e = 0; e < arguments.length; e++) if (!(arguments[e] instanceof Uint8Array)) throw TypeError("unexpected type, use Uint8Array");
		}
		function To(e) {
			for (var t = 0; t < e.length; t++) e[t] = 0;
		}
		e.randomBytes = function(e) {
			var t = new Uint8Array(e);
			return r(t, e), t;
		}, e.secretbox = function(e, t, n) {
			$(e, t, n), Co(n, t);
			for (var r = new Uint8Array(co + e.length), i = new Uint8Array(r.length), a = 0; a < e.length; a++) r[a + co] = e[a];
			return A(i, r, r.length, t, n), i.subarray(lo);
		}, e.secretbox.open = function(e, t, n) {
			$(e, t, n), Co(n, t);
			for (var r = new Uint8Array(lo + e.length), i = new Uint8Array(r.length), a = 0; a < e.length; a++) r[a + lo] = e[a];
			return r.length < 32 || j(i, r, r.length, t, n) !== 0 ? null : i.subarray(co);
		}, e.secretbox.keyLength = oo, e.secretbox.nonceLength = so, e.secretbox.overheadLength = lo, e.scalarMult = function(e, t) {
			if ($(e, t), e.length !== fo) throw Error("bad n size");
			if (t.length !== uo) throw Error("bad p size");
			var n = new Uint8Array(uo);
			return G(n, e, t), n;
		}, e.scalarMult.base = function(e) {
			if ($(e), e.length !== fo) throw Error("bad n size");
			var t = new Uint8Array(uo);
			return K(t, e), t;
		}, e.scalarMult.scalarLength = fo, e.scalarMult.groupElementLength = uo, e.box = function(t, n, r, i) {
			var a = e.box.before(r, i);
			return e.secretbox(t, n, a);
		}, e.box.before = function(e, t) {
			$(e, t), wo(e, t);
			var n = new Uint8Array(ho);
			return J(n, e, t), n;
		}, e.box.after = e.secretbox, e.box.open = function(t, n, r, i) {
			var a = e.box.before(r, i);
			return e.secretbox.open(t, n, a);
		}, e.box.open.after = e.secretbox.open, e.box.keyPair = function() {
			var e = new Uint8Array(po), t = new Uint8Array(mo);
			return q(e, t), {
				publicKey: e,
				secretKey: t
			};
		}, e.box.keyPair.fromSecretKey = function(e) {
			if ($(e), e.length !== mo) throw Error("bad secret key size");
			var t = new Uint8Array(po);
			return K(t, e), {
				publicKey: t,
				secretKey: new Uint8Array(e)
			};
		}, e.box.publicKeyLength = po, e.box.secretKeyLength = mo, e.box.sharedKeyLength = ho, e.box.nonceLength = go, e.box.overheadLength = e.secretbox.overheadLength, e.sign = function(e, t) {
			if ($(e, t), t.length !== bo) throw Error("bad secret key size");
			var n = new Uint8Array(Q + e.length);
			return ro(n, e, e.length, t), n;
		}, e.sign.open = function(e, t) {
			if ($(e, t), t.length !== yo) throw Error("bad public key size");
			var n = new Uint8Array(e.length), r = ao(n, e, e.length, t);
			if (r < 0) return null;
			for (var i = new Uint8Array(r), a = 0; a < i.length; a++) i[a] = n[a];
			return i;
		}, e.sign.detached = function(t, n) {
			for (var r = e.sign(t, n), i = new Uint8Array(Q), a = 0; a < i.length; a++) i[a] = r[a];
			return i;
		}, e.sign.detached.verify = function(e, t, n) {
			if ($(e, t, n), t.length !== Q) throw Error("bad signature size");
			if (n.length !== yo) throw Error("bad public key size");
			var r = new Uint8Array(Q + e.length), i = new Uint8Array(Q + e.length), a;
			for (a = 0; a < Q; a++) r[a] = t[a];
			for (a = 0; a < e.length; a++) r[a + Q] = e[a];
			return ao(i, r, r.length, n) >= 0;
		}, e.sign.keyPair = function() {
			var e = new Uint8Array(yo), t = new Uint8Array(bo);
			return $a(e, t), {
				publicKey: e,
				secretKey: t
			};
		}, e.sign.keyPair.fromSecretKey = function(e) {
			if ($(e), e.length !== bo) throw Error("bad secret key size");
			for (var t = new Uint8Array(yo), n = 0; n < t.length; n++) t[n] = e[32 + n];
			return {
				publicKey: t,
				secretKey: new Uint8Array(e)
			};
		}, e.sign.keyPair.fromSeed = function(e) {
			if ($(e), e.length !== xo) throw Error("bad seed size");
			for (var t = new Uint8Array(yo), n = new Uint8Array(bo), r = 0; r < 32; r++) n[r] = e[r];
			return $a(t, n, !0), {
				publicKey: t,
				secretKey: n
			};
		}, e.sign.publicKeyLength = yo, e.sign.secretKeyLength = bo, e.sign.seedLength = xo, e.sign.signatureLength = Q, e.hash = function(e) {
			$(e);
			var t = new Uint8Array(So);
			return qa(t, e, e.length), t;
		}, e.hash.hashLength = So, e.verify = function(e, t) {
			return $(e, t), e.length === 0 || t.length === 0 || e.length !== t.length ? !1 : h(e, 0, t, 0, e.length) === 0;
		}, e.setPRNG = function(e) {
			r = e;
		}, (function() {
			var n = typeof self < "u" ? self.crypto || self.msCrypto : null;
			if (n && n.getRandomValues) {
				var r = 65536;
				e.setPRNG(function(e, t) {
					var i, a = new Uint8Array(t);
					for (i = 0; i < t; i += r) n.getRandomValues(a.subarray(i, i + Math.min(t - i, r)));
					for (i = 0; i < t; i++) e[i] = a[i];
					To(a);
				});
			} else __require !== void 0 && (n = require___vite_browser_external(), n && n.randomBytes && e.setPRNG(function(e, t) {
				var r, i = n.randomBytes(t);
				for (r = 0; r < t; r++) e[r] = i[r];
				To(i);
			}));
		})();
	})(n !== void 0 && n.exports ? n.exports : self.nacl = self.nacl || {});
})))());
globalThis.crypto?.getRandomValues && import_nacl_fast.default.setPRNG((e, t) => {
	globalThis.crypto.getRandomValues(e.subarray(0, t));
});
function generateKeyPair() {
	return import_nacl_fast.default.box.keyPair();
}
function deriveSharedKey(e, t) {
	return import_nacl_fast.default.box.before(t, e);
}
function publicKeyFromBase64(e) {
	let t = base64ToBytes(e);
	if (t.length !== 32) throw Error(`Invalid public key: expected 32 bytes, got ${t.length}`);
	return t;
}
function publicKeyToBase64(e) {
	return bytesToBase64(e);
}
function encrypt(e, t) {
	return bytesToBase64(encryptBytes(new TextEncoder().encode(e), t));
}
function decrypt(e, t) {
	let n = decryptBytes(base64ToBytes(e), t);
	return n ? new TextDecoder().decode(n) : null;
}
function encryptBytes(e, t) {
	let n = import_nacl_fast.default.randomBytes(import_nacl_fast.default.box.nonceLength), r = import_nacl_fast.default.box.after(e, n, t), i = new Uint8Array(n.length + r.length);
	return i.set(n), i.set(r, n.length), i;
}
function decryptBytes(e, t) {
	if (e.length < import_nacl_fast.default.box.nonceLength + import_nacl_fast.default.box.overheadLength) return null;
	let n = e.slice(0, import_nacl_fast.default.box.nonceLength), r = e.slice(import_nacl_fast.default.box.nonceLength), i = import_nacl_fast.default.box.open.after(r, n, t);
	return i ? new Uint8Array(i) : null;
}
function base64ToBytes(e) {
	let t = window.atob(e), n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e += 1) n[e] = t.charCodeAt(e);
	return n;
}
function bytesToBase64(e) {
	let t = 32768, n = "";
	for (let r = 0; r < e.length; r += t) {
		let i = e.subarray(r, r + t);
		n += String.fromCharCode(...i);
	}
	return window.btoa(n);
}
async function routeWebRuntimeConnectionFrame(e, t, n) {
	let r = typeof e == "string" ? e : null, i = n.getSharedKey();
	if (n.getState() === "handshaking") {
		if (r === null || !i) return;
		try {
			if (JSON.parse(r).type === "e2ee_ready") {
				n.sendEncrypted({
					type: "e2ee_auth",
					deviceToken: n.pairingToken,
					clientCapabilities: [
						AGENT_SESSION_BACKGROUND_TASK_ROW_STOP_CAPABILITY,
						AGENT_SESSION_TURN_ITEM_CAPABILITY,
						SESSION_TAB_CLOSE_INTENT_RUNTIME_CAPABILITY,
						SESSION_TABS_RETIREMENT_PROOF_DELTA_RUNTIME_CAPABILITY,
						AGENT_SESSION_BOUNDARY_RUNTIME_CAPABILITY,
						WORKTREE_GITHUB_PR_SUPPRESSION_RUNTIME_CAPABILITY,
						WORKTREE_VISIBILITY_DEFAULTS_RUNTIME_CAPABILITY,
						WORKTREE_VISIBILITY_SOURCE_DEFAULTS_RUNTIME_CAPABILITY
					]
				});
				return;
			}
		} catch {}
		let e = decrypt(r, i);
		if (e === null) return;
		try {
			let t = JSON.parse(e);
			if (t.type === "e2ee_authenticated") n.setConnected();
			else if (t.type === "e2ee_error" || t.error?.code === "unauthorized") {
				let e = createWebRuntimeUnauthorizedError();
				n.setAuthFailed(), n.rejectUnauthorized(e), n.notifyUnauthorized(), n.getSocket()?.close();
			}
		} catch {}
		return;
	}
	if (n.getState() !== "connected" || !i) return;
	if (r === null) {
		let r = await websocketPayloadToUint8(e);
		if (t && n.getSocket() !== t || !r) return;
		let a = decryptBytes(r, i);
		if (!a) return;
		for (let e of n.subscriptions.values()) e.callbacks.onBinary?.(a);
		return;
	}
	let a = decrypt(r, i);
	if (a === null) return;
	let o;
	try {
		o = JSON.parse(a);
	} catch {
		return;
	}
	if (isKeepaliveFrame(o) || !("id" in o) || typeof o.id != "string") return;
	if (isRuntimeFailureResponse(o) && o.error.code === "unauthorized") {
		let e = createWebRuntimeUnauthorizedError();
		n.setAuthFailed(), n.rejectUnauthorized(e), n.notifyUnauthorized(), n.getSocket()?.close();
		return;
	}
	let s = n.subscriptions.get(o.id);
	if (s) {
		let e = o;
		e.ok === !1 && n.subscriptions.delete(o.id), s.callbacks.onResponse(e), e.ok && isEndResult(e.result) && (n.subscriptions.delete(o.id), s.callbacks.onClose?.());
		return;
	}
	let c = n.pending.get(o.id);
	c && (n.pending.delete(o.id), window.clearTimeout(c.timeout), c.resolve(o));
}
function isRuntimeFailureResponse(e) {
	return "ok" in e && e.ok === !1 && "error" in e && !!e.error && typeof e.error == "object" && "code" in e.error;
}
function isEndResult(e) {
	return !!e && typeof e == "object" && e.type === "end";
}
async function websocketPayloadToUint8(e) {
	return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : e instanceof Blob ? new Uint8Array(await e.arrayBuffer()) : null;
}
var REPLAYABLE_SUBSCRIPTION_METHODS = new Set(["files.watch"]), WebRuntimeSubscriptionRegistry = class {
	subscriptions = /* @__PURE__ */ new Map();
	constructor(e) {
		this.options = e;
	}
	close(e) {
		let t = Array.from(this.subscriptions.values());
		if (this.subscriptions.clear(), e) for (let e of t) e.callbacks.onClose?.();
	}
	handleInterrupted() {
		for (let [e, t] of Array.from(this.subscriptions)) {
			if (!REPLAYABLE_SUBSCRIPTION_METHODS.has(t.method)) {
				this.subscriptions.delete(e), t.callbacks.onClose?.();
				continue;
			}
			t.callbacks.onTransportInterrupted?.(), this.subscriptions.get(t.id) === t && (t.needsReplay = !0);
		}
	}
	replayInterrupted() {
		for (let e of Array.from(this.subscriptions.values())) e.needsReplay && (this.subscriptions.delete(e.id), e.id = this.options.nextId(), e.needsReplay = !1, this.subscriptions.set(e.id, e), this.options.sendEncrypted({
			id: e.id,
			deviceToken: this.options.deviceToken,
			method: e.method,
			params: e.params
		}) ? e.callbacks.onTransportReplayed?.() : e.needsReplay = !0);
	}
	notifyError(e, t) {
		let n = Array.from(this.subscriptions.values());
		this.subscriptions.clear();
		for (let r of n) r.callbacks.onError?.({
			code: e,
			message: t
		});
	}
}, REQUEST_TIMEOUT_MS = 3e4, WebRuntimeRequestRegistry = class {
	pending = /* @__PURE__ */ new Map();
	constructor(e) {
		this.options = e;
	}
	async call(e, t, n) {
		let r = n?.signal;
		return await this.options.waitForConnected(n?.timeoutMs, r), r?.throwIfAborted(), new Promise((i, a) => {
			let o = this.options.nextId(), s = n?.timeoutMs ?? REQUEST_TIMEOUT_MS, c = window.setTimeout(() => {
				this.pending.delete(o), l(), a(/* @__PURE__ */ Error(`Request timed out: ${e}`));
			}, s), l = () => {
				r?.removeEventListener("abort", u);
			}, u = () => {
				this.pending.delete(o), window.clearTimeout(c), l(), a(r?.reason);
			};
			r?.addEventListener("abort", u, { once: !0 }), this.pending.set(o, {
				method: e,
				resolve: (e) => {
					l(), i(e);
				},
				reject: (e) => {
					l(), a(e);
				},
				timeout: c
			}), this.options.sendEncrypted({
				id: o,
				deviceToken: this.options.deviceToken,
				method: e,
				params: t
			}) || (this.pending.delete(o), window.clearTimeout(c), l(), a(/* @__PURE__ */ Error("Remote Orca runtime is not connected.")));
		});
	}
	rejectAll(e) {
		let t = typeof e == "string" ? Error(e) : e;
		for (let [e, n] of this.pending) this.pending.delete(e), window.clearTimeout(n.timeout), n.reject(t);
	}
}, TAILSCALE_DOWNLOAD_URL = "https://tailscale.com/download", REMOTE_RUNTIME_UNREACHABLE_RE = /could not connect to the remote orca runtime|remote orca runtime closed the connection|timed out (?:waiting for|while connecting to) the remote orca runtime/i, TAILSCALE_MAGIC_DNS_SUFFIX_RE = /(?:^|\.)ts\.net$/i, IPV4_LITERAL_RE = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/, TAILSCALE_CGNAT_RE = /^100\.(?:6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./, TAILSCALE_IPV6_RE = /^fd7a:115c:a1e0:/i;
function extractHost(e) {
	let t;
	try {
		t = new URL(e).hostname || null;
	} catch {
		t = e.replace(/^[a-z]+:\/\//i, "").split(/[/:?#]/, 1)[0] || null;
	}
	return t && t.replace(/^\[|\]$/g, "").replace(/\.$/, "") || null;
}
function isTailscaleEndpoint(e) {
	if (!e) return !1;
	let t = extractHost(e);
	return t ? TAILSCALE_MAGIC_DNS_SUFFIX_RE.test(t) || IPV4_LITERAL_RE.test(t) && TAILSCALE_CGNAT_RE.test(t) || TAILSCALE_IPV6_RE.test(t) : !1;
}
var TAILNET_ENDPOINT_HINT = "The server may be offline on your tailnet, or its Tailscale Funnel reverted to tailnet-only. Confirm it's reachable; re-pair only when adding a new device, since already-paired devices reconnect with their saved token.", OTHER_NETWORK_HINT = `If the server is on another network, connect both devices to Tailscale and pair using its Tailscale address (100.x or a *.ts.net name). See ${TAILSCALE_DOWNLOAD_URL}.`;
function withRemoteRuntimeTailscaleHint(e, t) {
	return !REMOTE_RUNTIME_UNREACHABLE_RE.test(e) || e.endsWith(TAILNET_ENDPOINT_HINT) || e.endsWith(OTHER_NETWORK_HINT) ? e : `${e} ${isTailscaleEndpoint(t) ? TAILNET_ENDPOINT_HINT : OTHER_NETWORK_HINT}`;
}
var WebRuntimeConnectionWaiters = class {
	waiters = [];
	constructor(e) {
		this.options = e;
	}
	wait(e = 3e4, t) {
		return t?.aborted ? Promise.reject(t.reason) : this.options.getState() === "connected" ? Promise.resolve() : this.options.getState() === "auth-failed" ? Promise.reject(createWebRuntimeUnauthorizedError()) : this.options.isIntentionallyClosed() ? Promise.reject(/* @__PURE__ */ Error("Remote Orca runtime connection closed.")) : new Promise((n, r) => {
			let i = () => {
				window.clearTimeout(o), t?.removeEventListener("abort", a);
				let e = this.waiters.indexOf(s);
				e !== -1 && this.waiters.splice(e, 1);
			}, a = () => {
				i(), r(t?.reason);
			}, o = window.setTimeout(() => {
				i(), r(Error(withRemoteRuntimeTailscaleHint("Timed out while connecting to the remote Orca runtime.", this.options.endpoint)));
			}, e), s = {
				resolve: () => {
					i(), n();
				},
				reject: (e) => {
					i(), r(e);
				}
			};
			this.waiters.push(s), t?.addEventListener("abort", a, { once: !0 });
		});
	}
	resolveAll() {
		for (let e of this.waiters.splice(0)) e.resolve();
	}
	rejectUnavailable() {
		this.rejectAll(Error(withRemoteRuntimeTailscaleHint("Could not connect to the remote Orca runtime.", this.options.endpoint)));
	}
	rejectAll(e) {
		for (let t of this.waiters.splice(0)) t.reject(e);
	}
}, CONNECT_TIMEOUT_MS = 12e3, HANDSHAKE_TIMEOUT_MS = 1e4, RECONNECT_DELAYS_MS = [
	500,
	1e3,
	2e3,
	4e3,
	8e3,
	15e3
], WebRuntimeConnectionTransport = class {
	ws = null;
	sharedKey = null;
	state = "disconnected";
	subscriptions;
	heartbeat;
	requestCounter = 0;
	reconnectAttempt = 0;
	intentionallyClosed = !1;
	connectTimer = null;
	handshakeTimer = null;
	reconnectTimer = null;
	serverPublicKey;
	subscriptionRegistry;
	requestRegistry;
	connectionWaiters;
	constructor(e, t, n = {}) {
		this.pairing = e, this.lifecycle = n, this.serverPublicKey = publicKeyFromBase64(e.publicKeyB64), this.connectionWaiters = new WebRuntimeConnectionWaiters({
			endpoint: e.endpoint,
			getState: () => this.state,
			isIntentionallyClosed: () => this.intentionallyClosed
		}), this.subscriptionRegistry = new WebRuntimeSubscriptionRegistry({
			deviceToken: e.deviceToken,
			nextId: () => this.nextId(),
			sendEncrypted: (e) => this.sendEncrypted(e)
		}), this.subscriptions = this.subscriptionRegistry.subscriptions, this.requestRegistry = new WebRuntimeRequestRegistry({
			deviceToken: e.deviceToken,
			nextId: () => this.nextId(),
			waitForConnected: (e, t) => this.connectionWaiters.wait(e, t),
			sendEncrypted: (e) => this.sendEncrypted(e)
		}), this.heartbeat = new WebRuntimeConnectionHeartbeat({
			now: t.now,
			isDocumentVisible: t.isDocumentVisible,
			isConnected: () => this.state === "connected",
			getSocket: () => this.ws,
			sendProbe: () => this.sendEncrypted({
				id: `web-heartbeat-${this.nextId()}`,
				deviceToken: this.pairing.deviceToken,
				method: "status.get"
			}),
			handleDeadSocket: (e) => this.handleSocketClosed(e)
		}), this.openConnection();
	}
	async call(e, t, n) {
		return this.requestRegistry.call(e, t, n);
	}
	close(e = {}) {
		this.intentionallyClosed = !0, this.clearTimers(), this.requestRegistry.rejectAll("Remote Orca runtime connection closed."), this.connectionWaiters.rejectAll(/* @__PURE__ */ Error("Remote Orca runtime connection closed.")), this.subscriptionRegistry.close(e.notifySubscriptions ?? !0), this.ws &&= (this.ws.close(), null), this.sharedKey = null, this.setState("disconnected");
	}
	async handleSocketMessage(e, t) {
		await routeWebRuntimeConnectionFrame(e, t, {
			getState: () => this.state,
			getSharedKey: () => this.sharedKey,
			getSocket: () => this.ws,
			pairingToken: this.pairing.deviceToken,
			pending: this.requestRegistry.pending,
			subscriptions: this.subscriptions,
			sendEncrypted: (e) => this.sendEncrypted(e),
			setConnected: () => {
				this.clearHandshakeTimer(), this.reconnectAttempt = 0, this.setState("connected");
			},
			setAuthFailed: () => {
				this.intentionallyClosed = !0, this.setState("auth-failed");
			},
			rejectUnauthorized: (e) => this.requestRegistry.rejectAll(e),
			notifyUnauthorized: () => this.notifySubscriptionsError("unauthorized", "Unauthorized. Pair this web client again.")
		});
	}
	handleSocketClosed(e) {
		if (this.ws === e) {
			if (this.ws = null, this.sharedKey = null, this.clearConnectTimer(), this.clearHandshakeTimer(), this.heartbeat.clear(), this.requestRegistry.rejectAll("Remote Orca runtime connection interrupted."), this.subscriptionRegistry.handleInterrupted(), this.intentionallyClosed || this.state === "auth-failed") {
				this.setState(this.state === "auth-failed" ? "auth-failed" : "disconnected");
				return;
			}
			this.setState("disconnected"), this.scheduleReconnect();
		}
	}
	setState(e) {
		this.state = e, e === "connected" ? (this.subscriptionRegistry.replayInterrupted(), this.heartbeat.start(), this.connectionWaiters.resolveAll()) : e === "auth-failed" && this.connectionWaiters.rejectAll(createWebRuntimeUnauthorizedError()), this.lifecycle.onStateChanged?.(e);
	}
	openConnection() {
		if (this.intentionallyClosed) return;
		let e;
		try {
			e = new WebSocket(this.pairing.endpoint);
		} catch (e) {
			this.requestRegistry.rejectAll(e instanceof Error ? e.message : String(e)), this.scheduleReconnect();
			return;
		}
		e.binaryType = "arraybuffer", this.ws = e, this.sharedKey = null, this.setState("connecting"), this.connectTimer = window.setTimeout(() => {
			this.ws === e && e.readyState === WebSocket.CONNECTING && (e.close(), this.handleSocketClosed(e));
		}, CONNECT_TIMEOUT_MS), e.onopen = () => {
			if (this.ws !== e) return;
			this.clearConnectTimer(), this.setState("handshaking");
			let t = generateKeyPair();
			this.sharedKey = deriveSharedKey(t.secretKey, this.serverPublicKey), e.send(JSON.stringify({
				type: "e2ee_hello",
				publicKeyB64: publicKeyToBase64(t.publicKey)
			})), this.handshakeTimer = window.setTimeout(() => {
				this.ws === e && this.state === "handshaking" && e.close();
			}, HANDSHAKE_TIMEOUT_MS);
		}, e.onmessage = (t) => {
			this.ws === e && (this.heartbeat.noteInboundFrame(), this.handleSocketMessage(t.data, e));
		}, e.onclose = () => this.handleSocketClosed(e), e.onerror = () => {
			this.state === "connecting" && this.connectionWaiters.rejectUnavailable();
		};
	}
	sendEncrypted(e) {
		let t = this.ws;
		return !t || t.readyState !== WebSocket.OPEN || !this.sharedKey ? !1 : (t.send(encrypt(JSON.stringify(e), this.sharedKey)), !0);
	}
	sendEncryptedBinary(e) {
		let t = this.ws;
		return !t || t.readyState !== WebSocket.OPEN || !this.sharedKey ? !1 : (t.send(encryptBytes(e, this.sharedKey)), !0);
	}
	waitForConnected(e = 3e4) {
		return this.connectionWaiters.wait(e);
	}
	scheduleReconnect() {
		if (this.reconnectTimer || this.intentionallyClosed || this.lifecycle.reconnect === !1) return;
		let e = withReconnectJitter(RECONNECT_DELAYS_MS[Math.min(this.reconnectAttempt, RECONNECT_DELAYS_MS.length - 1)]);
		this.reconnectAttempt += 1, this.reconnectTimer = window.setTimeout(() => {
			this.reconnectTimer = null, this.openConnection();
		}, e);
	}
	nextId() {
		return this.requestCounter += 1, `web-rpc-${this.requestCounter}-${Date.now()}`;
	}
	notifySubscriptionsError(e, t) {
		this.subscriptionRegistry.notifyError(e, t);
	}
	clearTimers() {
		this.clearConnectTimer(), this.clearHandshakeTimer(), this.heartbeat.clear(), this.reconnectTimer &&= (window.clearTimeout(this.reconnectTimer), null);
	}
	clearConnectTimer() {
		this.connectTimer &&= (window.clearTimeout(this.connectTimer), null);
	}
	clearHandshakeTimer() {
		this.handshakeTimer &&= (window.clearTimeout(this.handshakeTimer), null);
	}
};
async function subscribeWebRuntimeFileWatch({ params: e, callbacks: t, subscribe: n, call: r, teardownRetries: i }) {
	let a = JSON.stringify(e) ?? String(e);
	await Promise.all(Array.from(i.get(a) ?? [], (e) => e()));
	let o = !1, s = null, c = !1, l = !1, u = !1, d = null, f = () => d?.unsubscribe(), p = null, m = () => {
		if (p) return p;
		u = !0;
		let e = r("files.unwatch", { subscriptionId: s }, { timeoutMs: 5e3 }).then((e) => {
			if (e.ok === !1) throw Error(`${e.error.code}: ${e.error.message}`);
			let t = i.get(a);
			t?.delete(m), t?.size === 0 && i.delete(a), f();
		}).catch((e) => {
			throw console.warn("Failed to unwatch remote file subscription:", e), e;
		}).finally(() => {
			p = null, u = !1;
		});
		return p = e, e;
	}, h = () => {
		if (u) return;
		if (!s) {
			f();
			return;
		}
		let e = i.get(a) ?? /* @__PURE__ */ new Set();
		e.add(m), i.set(a, e), m().catch(() => {});
	};
	return d = await n({
		...t,
		onResponse: (n) => {
			c = !1;
			let r = getFileWatchSubscriptionId(n);
			if (r && (s = r, o)) {
				h();
				return;
			}
			isFileWatchStartingResponse(n) || (o ? n.ok === !1 && f() : (t.onResponse(n), l && r && n.ok && (l = !1, t.onResponse(createFileWatchReplayOverflowResponse(n, e)))));
		},
		onError: (e) => {
			o || t.onError?.(e);
		},
		onClose: () => {
			o || t.onClose?.();
		},
		onTransportInterrupted: () => {
			if (c = !0, s = null, !o) return;
			let e = i.get(a);
			e?.delete(m), e?.size === 0 && i.delete(a), f();
		},
		onTransportReplayed: () => {
			c = !1, l = !0;
		}
	}), {
		unsubscribe: () => {
			o || (o = !0, s ? h() : c && f());
		},
		sendBinary: (e) => d?.sendBinary(e)
	};
}
function getFileWatchSubscriptionId(e) {
	if (!e.ok || !e.result || typeof e.result != "object") return null;
	let t = e.result.subscriptionId;
	return typeof t == "string" ? t : null;
}
function createFileWatchReplayOverflowResponse(e, t) {
	let n = t?.worktree;
	return {
		id: e.id,
		ok: !0,
		result: {
			type: "changed",
			worktree: typeof n == "string" ? n : "",
			events: [{
				kind: "overflow",
				absolutePath: ""
			}]
		},
		_meta: e._meta
	};
}
function isFileWatchStartingResponse(e) {
	return e.ok && !!e.result && typeof e.result == "object" && e.result.type === "starting";
}
var SHARED_CONNECTION_SUBSCRIPTION_METHODS = new Set(["files.watch"]), WebRuntimeClient = class e {
	transport;
	fileWatchTeardownRetries = /* @__PURE__ */ new Map();
	childClients = /* @__PURE__ */ new Set();
	statusOwner;
	constructor(e, t = {}) {
		if (this.pairing = e, this.transport = new WebRuntimeConnectionTransport(e, {
			now: () => this.now(),
			isDocumentVisible: () => this.isDocumentVisible()
		}, {
			reconnect: t.reconnect,
			onStateChanged: (e) => {
				e === "auth-failed" && this.statusOwner?.authenticationRejected(), this.statusOwner?.connectionChanged(e === "connected" ? "ready" : e === "disconnected" || e === "auth-failed" ? "disconnected" : "connecting");
			}
		}), t.status) {
			let e = t.status;
			this.statusOwner = new RuntimeHostStatusOwner({
				...e,
				persistent: !0,
				request: (e) => this.transport.call("status.get", void 0, {
					timeoutMs: 15e3,
					signal: e
				}),
				verified: (t) => (e.verified(t), !0)
			}), this.statusOwner.connectionChanged(this.transport.state === "connected" ? "ready" : "connecting"), this.statusOwner.activate();
		}
	}
	call(e, t, n) {
		return e === "status.get" && this.statusOwner ? this.statusOwner.refresh(n) : this.transport.call(e, t, n);
	}
	async subscribe(t, n, r, i) {
		if (SHARED_CONNECTION_SUBSCRIPTION_METHODS.has(t)) return subscribeWebRuntimeFileWatch({
			params: n,
			callbacks: r,
			subscribe: (e) => this.subscribeOnCurrentConnection("files.watch", n, e, i),
			call: (e, t, n) => this.call(e, t, n),
			teardownRetries: this.fileWatchTeardownRetries
		});
		let a = new e(this.pairing);
		this.childClients.add(a);
		let o = (e = !1) => {
			this.childClients.delete(a), a.close({ notifySubscriptions: e });
		};
		try {
			let e = {
				...r,
				onError: (e) => {
					r.onError?.(e), o();
				},
				onClose: () => {
					r.onClose?.(), o();
				}
			}, s = await a.subscribeOnCurrentConnection(t, n, e, i);
			return {
				unsubscribe: () => {
					s.unsubscribe(), o();
				},
				sendBinary: (e) => s.sendBinary(e)
			};
		} catch (e) {
			throw o(), e;
		}
	}
	close(e = {}) {
		this.statusOwner?.dispose();
		let t = e.notifySubscriptions ?? !0;
		for (let e of Array.from(this.childClients)) e.close({ notifySubscriptions: t });
		this.childClients.clear(), this.fileWatchTeardownRetries.clear(), this.transport.close(e);
	}
	async subscribeOnCurrentConnection(e, t, n, r) {
		await this.waitForConnected(r?.timeoutMs);
		let i = this.nextId(), a = {
			id: i,
			method: e,
			params: t,
			callbacks: n,
			needsReplay: !1
		};
		if (this.subscriptions.set(i, a), !this.sendEncrypted({
			id: i,
			deviceToken: this.pairing.deviceToken,
			method: e,
			params: t
		})) throw this.subscriptions.delete(i), Error("Remote Orca runtime is not connected.");
		return {
			unsubscribe: () => {
				this.subscriptions.delete(a.id);
				let e = r?.buildUnsubscribe?.(t);
				e && this.sendEncrypted({
					id: this.nextId(),
					deviceToken: this.pairing.deviceToken,
					method: e.method,
					params: e.params
				});
			},
			sendBinary: (e) => {
				this.sendEncryptedBinary(e);
			}
		};
	}
	now() {
		return Date.now();
	}
	isDocumentVisible() {
		return typeof document > "u" || document.visibilityState !== "hidden";
	}
	get ws() {
		return this.transport.ws;
	}
	set ws(e) {
		this.transport.ws = e;
	}
	get sharedKey() {
		return this.transport.sharedKey;
	}
	set sharedKey(e) {
		this.transport.sharedKey = e;
	}
	get state() {
		return this.transport.state;
	}
	set state(e) {
		this.transport.state = e;
	}
	get subscriptions() {
		return this.transport.subscriptions;
	}
	get lastInboundFrameAt() {
		return this.transport.heartbeat.lastInboundFrameAt;
	}
	set lastInboundFrameAt(e) {
		this.transport.heartbeat.lastInboundFrameAt = e;
	}
	get lastHeartbeatTickAt() {
		return this.transport.heartbeat.lastHeartbeatTickAt;
	}
	set lastHeartbeatTickAt(e) {
		this.transport.heartbeat.lastHeartbeatTickAt = e;
	}
	get heartbeatProbeSentAt() {
		return this.transport.heartbeat.heartbeatProbeSentAt;
	}
	set heartbeatProbeSentAt(e) {
		this.transport.heartbeat.heartbeatProbeSentAt = e;
	}
	startHeartbeat() {
		this.transport.heartbeat.start();
	}
	runHeartbeatTick() {
		this.transport.heartbeat.runTick();
	}
	handleSocketMessage(e, t) {
		return this.transport.handleSocketMessage(e, t);
	}
	handleSocketClosed(e) {
		this.transport.handleSocketClosed(e);
	}
	setState(e) {
		this.transport.setState(e);
	}
	waitForConnected(e) {
		return this.transport.waitForConnected(e);
	}
	sendEncrypted(e) {
		return this.transport.sendEncrypted(e);
	}
	sendEncryptedBinary(e) {
		return this.transport.sendEncryptedBinary(e);
	}
	nextId() {
		return this.transport.nextId();
	}
}, import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function WebConnect({ initialPairingInput: e, onConnected: t }) {
	let n = readStoredWebRuntimeEnvironment(), [r, i] = (0, import_react.useState)(n?.name ?? "Orca Server"), [a, o] = (0, import_react.useState)(e ?? ""), [s, l] = (0, import_react.useState)(null), [u, d] = (0, import_react.useState)(!1), f = (0, import_react.useMemo)(() => parseWebPairingInput(a), [a]), p = (0, import_react.useRef)(!1), v = async () => {
		if (l(null), !f) {
			l("Enter a valid Orca pairing URL or pairing code.");
			return;
		}
		if (f.scope === "mobile") {
			l(translate("auto.web.WebConnect.mobileScopeRejected", "This QR code grants limited (mobile) access. To use the full web app, open the browser access link from Settings → Runtime Environments → Share this Orca server → New Link."));
			return;
		}
		if (isMixedContentWebSocket(f.endpoint)) {
			l("This HTTPS page cannot connect to a plain ws:// Orca server. Open the web client over HTTP or pair with a wss:// endpoint.");
			return;
		}
		d(!0);
		let e = createStoredWebRuntimeEnvironment({
			name: r,
			offer: f,
			previousEnvironment: n
		}), i = new WebRuntimeClient(f);
		try {
			let n = await i.call("status.get", void 0, { timeoutMs: 15e3 });
			if (!n.ok) throw Error(n.error.message);
			if (n.result?.deviceScope === "mobile") {
				l(translate("auto.web.WebConnect.mobileScopeRejected", "This QR code grants limited (mobile) access. To use the full web app, open the browser access link from Settings → Runtime Environments → Share this Orca server → New Link."));
				return;
			}
			saveStoredWebRuntimeEnvironment({
				...e,
				runtimeId: n._meta.runtimeId,
				lastUsedAt: Date.now()
			}), t();
		} catch (e) {
			l(e instanceof Error ? e.message : String(e));
		} finally {
			i.close(), d(!1);
		}
	};
	(0, import_react.useEffect)(() => {
		p.current || !e || !f || (p.current = !0, v());
	}, [e, f]);
	let y = () => {
		clearStoredWebRuntimeEnvironment$1(), o(""), l(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-background px-4 py-6 text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full max-w-[520px] flex-col gap-5 rounded-lg border border-border bg-card p-5 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, {
							size: 18,
							"aria-hidden": !0
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-base font-semibold leading-6",
							children: translate("auto.web.WebConnect.e3bcd082ac", "Connect to Orca")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-5 text-muted-foreground",
							children: translate("auto.web.WebConnect.3affe7de3a", "Paste a pairing URL from an Orca server that this browser can reach.")
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "web-runtime-name",
						children: translate("auto.web.WebConnect.cb4d287238", "Server name")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "web-runtime-name",
						value: r,
						onChange: (e) => i(e.target.value),
						autoComplete: "off"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "web-runtime-pairing-code",
						children: translate("auto.web.WebConnect.7a566540de", "Pairing URL or code")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "web-runtime-pairing-code",
						value: a,
						onChange: (e) => o(e.target.value),
						placeholder: translate("auto.web.WebConnect.27393856e4", "orca://pair?code=..."),
						autoComplete: "off",
						spellCheck: !1
					})]
				}),
				f && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-border bg-muted px-3 py-2 text-xs text-muted-foreground",
					children: [
						translate("auto.web.WebConnect.4a4c017be1", "Endpoint:"),
						" ",
						f.endpoint
					]
				}),
				s && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive",
					children: s
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						onClick: y,
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
							size: 15,
							"aria-hidden": !0
						}), translate("auto.web.WebConnect.2cf9e5a294", "Clear saved server")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						onClick: () => void v(),
						disabled: u || !f,
						className: "gap-2",
						children: [u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							size: 15,
							className: "animate-spin",
							"aria-hidden": !0
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cable, {
							size: 15,
							"aria-hidden": !0
						}), translate("auto.web.WebConnect.b411ec0069", "Connect")]
					})]
				})
			]
		})
	});
}
var webE2EExposeStore = !1, webE2EQuery = webE2EExposeStore ? new URLSearchParams(window.location.search) : null;
const webE2EConfig = createE2EConfig({
	exposeStore: webE2EExposeStore,
	terminalParkingDelayMs: Number(webE2EQuery?.get("orcaE2ETerminalParkingDelayMs")) || null,
	terminalRetentionLimit: Number(webE2EQuery?.get("orcaE2ETerminalRetentionLimit")) || null
});
function createWebE2EApi() {
	return { e2e: { getConfig: () => webE2EConfig } };
}
function createMiniMaxCredentialsApi() {
	let e = {
		configured: !1,
		cookieConfigured: !1,
		apiKeyConfigured: !1
	}, t = /* @__PURE__ */ Error("MiniMax cookie storage is only available in the desktop app.");
	return {
		getStatus: () => Promise.resolve(e),
		saveCookie: () => Promise.reject(t),
		clearCookie: () => Promise.resolve(e),
		saveApiKey: () => Promise.reject(t),
		clearApiKey: () => Promise.resolve(e)
	};
}
function createGrokAccountsApi() {
	let e = {
		signedIn: !1,
		email: null,
		teamId: null,
		tokenFresh: !1,
		error: null
	};
	return { getStatus: () => Promise.resolve(e) };
}
function createEmptyManagedAccountsState() {
	return {
		accounts: [],
		activeAccountId: null,
		activeAccountIdsByRuntime: {
			host: null,
			wsl: {}
		}
	};
}
function createClaudeAccountsApi() {
	let e = createEmptyManagedAccountsState();
	return {
		list: () => Promise.resolve(e),
		add: () => Promise.resolve(e),
		cancelPendingLogin: () => Promise.resolve(!1),
		reauthenticate: () => Promise.resolve(e),
		remove: () => Promise.resolve(e),
		select: () => Promise.resolve(e)
	};
}
function createCodexAccountsApi() {
	let e = createEmptyManagedAccountsState();
	return {
		list: () => Promise.resolve(e),
		add: () => Promise.resolve(e),
		cancelPendingLogin: () => Promise.resolve(!1),
		getPendingLoginUrl: () => Promise.resolve(null),
		onPendingLoginUrlChanged: () => () => {},
		reauthenticate: () => Promise.resolve(e),
		remove: () => Promise.resolve(e),
		select: () => Promise.resolve(e),
		listStalePanes: () => Promise.resolve([]),
		listRecordedPaneLanes: () => Promise.resolve({}),
		forgetStalePanes: () => Promise.resolve()
	};
}
const SETTINGS_STORAGE_KEY = "orca.web.settings.v1", UI_STORAGE_KEY = "orca.web.ui.v1", SESSION_STORAGE_KEY = "orca.web.workspaceSession.v1", ONBOARDING_STORAGE_KEY = "orca.web.onboarding.v1", GITHUB_CACHE_STORAGE_KEY = "orca.web.githubCache.v1", KEYBINDINGS_STORAGE_KEY = "orca.web.keybindings.v1";
function getBrowserPlatform() {
	return navigator.userAgent.includes("Windows") ? "win32" : navigator.userAgent.includes("Linux") ? "linux" : "darwin";
}
function readJson(e, t) {
	let n = window.localStorage.getItem(e);
	if (!n) return cloneJson(t);
	try {
		return {
			...cloneJson(t),
			...JSON.parse(n)
		};
	} catch {
		return cloneJson(t);
	}
}
function writeJson(e, t) {
	window.localStorage.setItem(e, JSON.stringify(t));
}
function cloneJson(e) {
	return JSON.parse(JSON.stringify(e));
}
function noopUnsubscribe() {}
function createWebAgentStatusApi() {
	return { agentStatus: {
		onSet: () => noopUnsubscribe,
		onClear: () => noopUnsubscribe,
		getSnapshot: () => Promise.resolve([]),
		inferInterrupt: () => Promise.resolve(!1),
		inferQuestionAnswered: () => Promise.resolve(!1),
		onMigrationUnsupported: () => noopUnsubscribe,
		onMigrationUnsupportedClear: () => noopUnsubscribe,
		onLegacyWorkerTerminalRecovery: () => noopUnsubscribe,
		getMigrationUnsupportedSnapshot: () => Promise.resolve([]),
		drop: () => {},
		dropPersisted: () => {},
		dropPersistedBatch: () => {},
		reconcileEndedProcess: () => {},
		dropByTabPrefix: () => {},
		retirePaneAuthority: () => {},
		restorePaneAuthority: () => {},
		transferPaneAuthority: () => {}
	} };
}
function resolveSessionSearchLimit(e) {
	let t = Number.isInteger(e) ? e : 20;
	return Math.min(Math.max(1, t), 100);
}
const AiVaultSearchScopeIdentitySchema = discriminatedUnion("kind", [object({
	kind: literal("workspace"),
	worktreeId: string().min(1).max(8192)
}), object({
	kind: literal("project"),
	projectKey: string().min(1).max(1024)
})]), AiVaultSearchFiltersSchema = object({
	agents: array(_enum(AI_VAULT_AGENTS)).optional(),
	scopePaths: array(string().min(1).max(4096)).max(64).optional(),
	since: string().datetime({ offset: !0 }).optional(),
	sort: _enum(["relevance", "newest"]).optional()
}), AiVaultSearchRequestSchema = object({
	query: string(),
	scope: _enum(["conversation", "all"]).optional(),
	freshness: _enum(["indexed", "wait-until-current"]).optional(),
	limit: number().optional().transform(resolveSessionSearchLimit),
	cursor: string().optional(),
	filters: AiVaultSearchFiltersSchema.optional(),
	within: AiVaultSearchScopeIdentitySchema.optional(),
	debug: boolean().optional()
}).refine((e) => e.within === void 0 || (e.filters?.scopePaths ?? []).length === 0, { message: "A search carries either a scope identity or explicit scope paths, not both" }), AiVaultSearchSourceSchema = object({
	presence: _enum([
		"present",
		"unverifiable",
		"missing"
	]),
	filePath: string().optional(),
	codexHome: string().optional()
}), AiVaultSearchEvidenceSchema = object({
	snippet: string(),
	role: _enum([
		"user",
		"assistant",
		"tool",
		"system",
		"unknown"
	]),
	timestamp: string().nullable()
});
var executionHostIdSchema = string().min(1);
const AiVaultSearchHitSchema = object({
	agent: _enum(AI_VAULT_AGENTS),
	executionHostId: executionHostIdSchema.optional(),
	sessionId: string(),
	title: string(),
	cwd: string().nullable(),
	branch: string().nullable(),
	updatedAt: string().nullable(),
	messageCount: number().int().nonnegative(),
	score: number(),
	source: AiVaultSearchSourceSchema,
	evidence: AiVaultSearchEvidenceSchema.nullable(),
	resumeCommand: string().optional()
}).refine((e) => e.source.presence === "present" || e.resumeCommand === void 0, { message: "Only present sources may have a resume command" }), AiVaultSearchPageSchema = object({
	cursor: string().nullable(),
	hasMore: boolean()
}), AiVaultSearchTruncationSchema = object({
	candidates: boolean(),
	snippets: number().int().nonnegative(),
	query: boolean(),
	freshness: boolean()
}), AiVaultSearchHostOutcomeSchema = object({
	executionHostId: executionHostIdSchema,
	outcome: _enum([
		"searched",
		"stale",
		"disabled",
		"not-ready",
		"no-service",
		"unreachable",
		"scope-unknown"
	])
});
var routeSchema = _enum([
	"phrase",
	"and",
	"or",
	"typo+phrase",
	"typo+and",
	"typo+or"
]);
const AiVaultSearchPlannerReportSchema = object({
	route: routeSchema,
	repairedTerms: array(string()).optional(),
	scope: _enum(["conversation", "all"])
}), AiVaultSearchDebugSchema = object({
	route: routeSchema,
	repairedTerms: array(string()).optional(),
	plannerReport: AiVaultSearchPlannerReportSchema
}), AiVaultSearchResponseSchema = discriminatedUnion("kind", [
	object({
		kind: literal("results"),
		hits: array(AiVaultSearchHitSchema).max(100),
		page: AiVaultSearchPageSchema,
		generation: number().int().nonnegative(),
		truncated: AiVaultSearchTruncationSchema,
		durationMs: number().nonnegative(),
		debug: AiVaultSearchDebugSchema.optional(),
		hosts: array(AiVaultSearchHostOutcomeSchema).optional()
	}),
	object({
		kind: literal("stale-cursor"),
		generation: number().int().nonnegative(),
		expectedGeneration: number().int().nonnegative().optional()
	}),
	object({ kind: literal("malformed-cursor") }),
	object({
		kind: literal("unavailable"),
		reason: _enum([
			"disabled",
			"not-ready",
			"no-service",
			"scope-unknown"
		])
	})
]);
object({}), object({ enabled: boolean() });
const AiVaultSearchStatusSchema = object({
	enabled: boolean(),
	phase: _enum([
		"idle",
		"indexing",
		"current",
		"degraded",
		"closed"
	]),
	filesIndexed: number().int().nonnegative(),
	filesDue: number().int().nonnegative(),
	filesFailed: number().int().nonnegative(),
	messagesIndexed: number().int().nonnegative().optional(),
	degradedRoots: array(object({
		root: string().optional(),
		reason: string()
	})),
	lastReconcileAt: number().nullable(),
	lastSweepCompletedAt: number().nullable(),
	sessionsByAgent: record(string(), number().int().nonnegative()).optional(),
	generation: number().int().nonnegative()
});
function redactForTransport(e, t) {
	let { resumeCommand: n, source: r, ...i } = e;
	return {
		...i,
		source: t === "relay" ? { presence: r.presence } : { ...r },
		...t !== "relay" && r.presence === "present" && n !== void 0 ? { resumeCommand: n } : {}
	};
}
function redactStatusForTransport(e, t) {
	return t === "relay" ? {
		...e,
		degradedRoots: e.degradedRoots.map(() => ({ reason: "Source root could not be verified." }))
	} : e;
}
function unavailableSessionSearchStatus() {
	return {
		enabled: !1,
		phase: "idle",
		filesIndexed: 0,
		filesDue: 0,
		filesFailed: 0,
		degradedRoots: [],
		lastReconcileAt: null,
		lastSweepCompletedAt: null,
		generation: 0
	};
}
function isUnknownSessionSearchMethod(e) {
	return !e || typeof e != "object" || !("code" in e) ? !1 : e.code === -32601 || e.code === "method_not_found";
}
function createSessionSearchClient(e, t) {
	return {
		searchSessions: async (n) => {
			let r = AiVaultSearchRequestSchema.parse(n), i;
			try {
				i = await e("aiVault.searchSessions", r);
			} catch (e) {
				if (isUnknownSessionSearchMethod(e)) return {
					kind: "unavailable",
					reason: "no-service"
				};
				throw e;
			}
			let a = AiVaultSearchResponseSchema.parse(i);
			if (a.kind !== "results") return a;
			let { debug: o, ...s } = a;
			return {
				...s,
				hits: a.hits.map((e) => redactForTransport(e, t)),
				...r.debug && o ? { debug: o } : {}
			};
		},
		searchStatus: async () => {
			try {
				return redactStatusForTransport(AiVaultSearchStatusSchema.parse(await e("aiVault.searchStatus", {})), t);
			} catch (e) {
				if (isUnknownSessionSearchMethod(e)) return unavailableSessionSearchStatus();
				throw e;
			}
		}
	};
}
function abortSignalReason(e) {
	return e.reason instanceof Error ? e.reason : Object.assign(/* @__PURE__ */ Error("The operation was aborted."), { name: "AbortError" });
}
var DEFAULT_REMOTE_RUNTIME_CALL_CONCURRENCY = 8, DEFAULT_REMOTE_RUNTIME_BACKGROUND_CALL_CONCURRENCY = 2, RuntimeRpcCallQueueOverloadError = class extends Error {
	code = "runtime_rpc_queue_overloaded";
	constructor(e) {
		super("Remote runtime call queue is full; retry after current calls finish."), this.scope = e, this.name = "RuntimeRpcCallQueueOverloadError";
	}
};
function isBackgroundRuntimeMethod(e) {
	return e === "hostedReview.forBranch" || e === "github.prForBranch" || e === "github.listWorkItems" || e === "github.countWorkItems" || e === "git.status" || e === "git.history" || e === "git.conflictOperation" || e === "git.branchCompare" || e === "git.upstreamStatus" || e === "worktree.prefetchCreateBase";
}
var RuntimeRpcCallQueuePool = class {
	queues = /* @__PURE__ */ new Map();
	queuedCallCount = 0;
	retainedCallBytes = 0;
	constructor(e = DEFAULT_REMOTE_RUNTIME_CALL_CONCURRENCY, t = DEFAULT_REMOTE_RUNTIME_BACKGROUND_CALL_CONCURRENCY, n = 256, r = 2048, i = 33554432) {
		this.concurrency = e, this.backgroundConcurrency = t, this.maxQueuedPerSelector = n, this.maxQueuedTotal = r, this.maxRetainedBytes = i;
	}
	enqueue(e, t, n, r = 0, i) {
		if (i?.aborted) return Promise.reject(abortSignalReason(i));
		if (this.queuedCallCount >= this.maxQueuedTotal) return Promise.reject(new RuntimeRpcCallQueueOverloadError("global"));
		let a = this.queues.get(e);
		if (a && this.queuedCount(a) >= this.maxQueuedPerSelector) return Promise.reject(new RuntimeRpcCallQueueOverloadError("selector"));
		if (!Number.isSafeInteger(r) || r < 0 || this.retainedCallBytes + r > this.maxRetainedBytes) return Promise.reject(new RuntimeRpcCallQueueOverloadError("memory"));
		let o = this.getQueue(e);
		return new Promise((a, s) => {
			let c = {
				background: isBackgroundRuntimeMethod(t),
				retainedBytes: r,
				run: n,
				resolve: a,
				reject: s,
				started: !1,
				signal: i
			};
			(c.background ? o.background : o.foreground).push(c), this.queuedCallCount += 1, this.retainedCallBytes += r, i && (c.onAbort = () => this.cancelQueuedCall(e, o, c), i.addEventListener("abort", c.onAbort, { once: !0 })), this.pump(e, o);
		});
	}
	getQueue(e) {
		let t = this.queues.get(e);
		return t || (t = {
			active: 0,
			backgroundActive: 0,
			foreground: [],
			foregroundHead: 0,
			background: [],
			backgroundHead: 0
		}, this.queues.set(e, t)), t;
	}
	pump(e, t) {
		for (; t.active < this.concurrency;) {
			let n = this.takeForeground(t);
			if (!n && t.backgroundActive < this.backgroundConcurrency && (n = this.takeBackground(t)), !n) break;
			n.started = !0, n.signal && n.onAbort && n.signal.removeEventListener("abort", n.onAbort), t.active += 1, n.background && (t.backgroundActive += 1);
			let r;
			try {
				r = n.run();
			} catch (e) {
				r = Promise.reject(e);
			}
			r.then(n.resolve, n.reject).finally(() => {
				if (this.retainedCallBytes = Math.max(0, this.retainedCallBytes - n.retainedBytes), t.active = Math.max(0, t.active - 1), n.background && (t.backgroundActive = Math.max(0, t.backgroundActive - 1)), t.active === 0 && this.isEmpty(t)) {
					this.queues.delete(e);
					return;
				}
				this.pump(e, t);
			});
		}
	}
	cancelQueuedCall(e, t, n) {
		if (n.started || !n.signal) return;
		let r = n.background ? t.background : t.foreground, i = n.background ? t.backgroundHead : t.foregroundHead, a = r.indexOf(n, i);
		if (a !== -1) {
			if (r.splice(a, 1), this.queuedCallCount = Math.max(0, this.queuedCallCount - 1), this.retainedCallBytes = Math.max(0, this.retainedCallBytes - n.retainedBytes), n.reject(abortSignalReason(n.signal)), t.active === 0 && this.isEmpty(t)) {
				this.queues.delete(e);
				return;
			}
			this.pump(e, t);
		}
	}
	takeForeground(e) {
		if (e.foregroundHead >= e.foreground.length) return;
		let t = e.foreground[e.foregroundHead];
		return e.foreground[e.foregroundHead] = void 0, e.foregroundHead += 1, this.queuedCallCount = Math.max(0, this.queuedCallCount - 1), this.compactForeground(e), t;
	}
	takeBackground(e) {
		if (e.backgroundHead >= e.background.length) return;
		let t = e.background[e.backgroundHead];
		return e.background[e.backgroundHead] = void 0, e.backgroundHead += 1, this.queuedCallCount = Math.max(0, this.queuedCallCount - 1), this.compactBackground(e), t;
	}
	compactForeground(e) {
		e.foregroundHead <= 32 || e.foregroundHead * 2 < e.foreground.length || (e.foreground.splice(0, e.foregroundHead), e.foregroundHead = 0);
	}
	compactBackground(e) {
		e.backgroundHead <= 32 || e.backgroundHead * 2 < e.background.length || (e.background.splice(0, e.backgroundHead), e.backgroundHead = 0);
	}
	isEmpty(e) {
		return e.foregroundHead >= e.foreground.length && e.backgroundHead >= e.background.length;
	}
	queuedCount(e) {
		return e.foreground.length - e.foregroundHead + e.background.length - e.backgroundHead;
	}
};
const webRuntimeState = {
	activeEnvironment: readStoredWebRuntimeEnvironment(),
	worktreeVisibilityDefaultsRuntimeEnvironmentId: null,
	worktreeVisibilityDefaultsRuntimeValue: null,
	activeClient: null,
	activeClientEnvironmentId: null,
	cachedWorktrees: null,
	cachedDetectedWorktrees: null
};
var statusListeners = /* @__PURE__ */ new Set();
function subscribeWebRuntimeStatus(e) {
	return statusListeners.add(e), () => {
		statusListeners.delete(e);
	};
}
function readWebRuntimeStatusSnapshots() {
	let e = webRuntimeState.activeClient?.statusOwner?.read();
	return e ? [e] : [];
}
async function observeWebRuntimeStatus(e, t) {
	let n = resolveEnvironment(e);
	if (manuallyDisconnectedEnvironmentIds.has(n.id)) return manuallyDisconnectedResponse(n);
	let r = webRuntimeState.activeClient?.statusOwner;
	if (r) return r.refresh({
		timeoutMs: t,
		observeOnly: !0
	});
	let i = new WebRuntimeClient(getPreferredWebPairingOffer(n), { reconnect: !1 });
	try {
		return await i.call("status.get", void 0, { timeoutMs: t });
	} finally {
		i.close();
	}
}
const manuallyDisconnectedEnvironmentIds = /* @__PURE__ */ new Set(), runtimeCallQueuePool = new RuntimeRpcCallQueuePool();
function invalidateRuntimeWorktreeCaches() {
	webRuntimeState.cachedWorktrees = null, webRuntimeState.cachedDetectedWorktrees = null;
}
function getClientForEnvironment(e) {
	if (manuallyDisconnectedEnvironmentIds.has(e.id)) throw Error("runtime_manually_disconnected");
	return (!webRuntimeState.activeClient || webRuntimeState.activeClientEnvironmentId !== e.id) && (webRuntimeState.activeClient?.close(), webRuntimeState.activeClient = new WebRuntimeClient(getPreferredWebPairingOffer(e), { status: {
		environmentId: e.id,
		pairingRevision: e.pairingRevision ?? e.createdAt,
		publish: (e) => {
			for (let t of statusListeners) t(e);
		},
		verified: (t) => updateEnvironmentFromResponse(e, t)
	} }), webRuntimeState.activeClientEnvironmentId = e.id), webRuntimeState.activeClient;
}
function closeActiveRuntimeClients() {
	webRuntimeState.activeClient?.close(), webRuntimeState.activeClient = null, webRuntimeState.activeClientEnvironmentId = null, invalidateRuntimeWorktreeCaches();
}
function disconnectActiveRuntimeEnvironment() {
	closeActiveRuntimeClients();
}
function removeActiveRuntimeEnvironment() {
	disconnectActiveRuntimeEnvironment(), clearStoredWebRuntimeEnvironment$1(), webRuntimeState.activeEnvironment = null;
}
function manuallyDisconnectedResponse(e) {
	return {
		id: "runtime.manualDisconnect",
		ok: !1,
		error: {
			code: "runtime_manually_disconnected",
			message: translate("auto.web.webPreloadApi.runtimeEnvironmentManuallyDisconnected", "Runtime environment is manually disconnected.")
		},
		_meta: { runtimeId: e.runtimeId }
	};
}
function resolveEnvironment(e) {
	let t = requireActiveEnvironment();
	if (e === t.id || e === t.name || e === "active" || t.compatibleEnvironmentIds?.includes(e)) return t;
	throw Error(`Unknown Orca runtime environment: ${e}`);
}
function requireActiveEnvironment() {
	if (webRuntimeState.activeEnvironment = webRuntimeState.activeEnvironment ?? readStoredWebRuntimeEnvironment(), !webRuntimeState.activeEnvironment) throw Error("Pair this web client with an Orca server first.");
	return webRuntimeState.activeEnvironment;
}
function requireActiveEnvironmentOrNull() {
	return webRuntimeState.activeEnvironment = webRuntimeState.activeEnvironment ?? readStoredWebRuntimeEnvironment(), webRuntimeState.activeEnvironment;
}
function assertActiveEnvironment(e) {
	if (requireActiveEnvironment().id !== e) throw Error("The paired Orca server changed while the request was in progress.");
}
function updateEnvironmentFromResponse(e, t) {
	webRuntimeState.activeEnvironment?.id === e.id && (webRuntimeState.activeEnvironment = updateStoredEnvironmentRuntimeId(e, t.ok ? t._meta.runtimeId : t._meta?.runtimeId ?? null, t.ok && typeof t.result == "object" && t.result !== null && typeof t.result.pairedDeviceId == "string" ? t.result.pairedDeviceId : void 0));
}
async function callRuntimeEnvelope(e, t, n) {
	let r = requireActiveEnvironment();
	if (manuallyDisconnectedEnvironmentIds.has(r.id)) return manuallyDisconnectedResponse(r);
	let i = await runtimeCallQueuePool.enqueue(r.id, e, () => manuallyDisconnectedEnvironmentIds.has(r.id) ? Promise.resolve(manuallyDisconnectedResponse(r)) : getClientForEnvironment(r).call(e, t, { timeoutMs: n }));
	return manuallyDisconnectedEnvironmentIds.has(r.id) ? manuallyDisconnectedResponse(r) : (updateEnvironmentFromResponse(r, i), i);
}
async function callEnvironmentEnvelope(e, t, n, r) {
	let i = resolveEnvironment(e);
	if (manuallyDisconnectedEnvironmentIds.has(i.id)) return manuallyDisconnectedResponse(i);
	let a = await runtimeCallQueuePool.enqueue(i.id, t, () => manuallyDisconnectedEnvironmentIds.has(i.id) ? Promise.resolve(manuallyDisconnectedResponse(i)) : getClientForEnvironment(i).call(t, n, { timeoutMs: r }));
	return manuallyDisconnectedEnvironmentIds.has(i.id) ? manuallyDisconnectedResponse(i) : (updateEnvironmentFromResponse(i, a), a);
}
async function callRuntimeResult(e, t, n) {
	let r = await callRuntimeEnvelope(e, t, n);
	if (!r.ok) throw Object.assign(Error(r.error.message), { code: r.error.code });
	return r.result;
}
async function callRuntimeResultWithOwner(e, t, n) {
	let r = requireActiveEnvironment().id;
	return {
		result: await callRuntimeResult(e, t, n),
		hostId: toRuntimeExecutionHostId(r),
		environmentId: r
	};
}
function withRuntimeRepoOwner(e, t) {
	return {
		...e,
		executionHostId: t
	};
}
function withRuntimeRepoMutationOwner(e, t) {
	return "repo" in e ? {
		...e,
		repo: withRuntimeRepoOwner(e.repo, t)
	} : e;
}
function withRuntimeWorktreeOwner(e, t) {
	let n = parseExecutionHostId(t);
	return n?.kind === "runtime" ? {
		...e,
		runtimeOwnerEnvironmentId: n.environmentId
	} : e;
}
async function getRemoteRuntimeStatus() {
	return callRuntimeResult("status.get", void 0, 15e3);
}
function createWebAiVaultApi() {
	let e = createSessionSearchClient((e, t) => callRuntimeResult(e, t), "relay");
	return {
		searchSessions: (t, n) => addressesOwnRuntime(n) ? e.searchSessions(t) : Promise.resolve({
			kind: "unavailable",
			reason: "no-service"
		}),
		searchStatus: (t) => addressesOwnRuntime(t) ? e.searchStatus() : Promise.resolve(unavailableSessionSearchStatus()),
		setSearchEnabled: () => Promise.reject(/* @__PURE__ */ Error("unsupported")),
		clearSearchIndex: () => Promise.reject(/* @__PURE__ */ Error("Clearing Agent Session History is unavailable in the browser.")),
		listSessions: (e) => {
			let t = toRuntimeExecutionHostId(requireActiveEnvironment().id), n = normalizeExecutionHostScope(e?.executionHostScope ?? t);
			return n !== "all" && n !== t ? Promise.resolve(webAiVaultUnavailableResult(n)) : callRuntimeResult("aiVault.listSessions", {
				limit: e?.limit,
				force: e?.force,
				scopePaths: e?.scopePaths,
				executionHostId: t
			});
		},
		resolveSessionTitles: (e) => {
			let t = toRuntimeExecutionHostId(requireActiveEnvironment().id);
			return e.executionHostScope && normalizeExecutionHostScope(e.executionHostScope) !== t ? Promise.resolve({ titles: [] }) : callRuntimeResult("aiVault.resolveSessionTitles", { requests: e.requests }).catch(() => ({ titles: [] }));
		},
		cancelListSessions: () => Promise.resolve(),
		prepareSessionResume: (e) => callRuntimeResult("aiVault.prepareSessionResume", e),
		listSubagentSessions: () => Promise.resolve({
			sessions: [],
			issues: []
		}),
		getFirstUserPrompt: () => Promise.resolve({ prompt: null }),
		deleteSession: (e) => Promise.resolve({
			outcome: "rejected",
			agent: e.agent,
			reason: "non-local-host"
		}),
		onWindowFocused: () => noopUnsubscribe
	};
}
function addressesOwnRuntime(e) {
	let t = toRuntimeExecutionHostId(requireActiveEnvironment().id);
	return e === void 0 || normalizeExecutionHostId(e) === t;
}
function webAiVaultUnavailableResult(e) {
	return {
		sessions: [],
		issues: [{
			executionHostId: e,
			agent: "codex",
			path: e,
			message: translate("auto.web.webPreloadApi.aiVaultUnavailableForHost", "Agent Session History is not available for this execution host.")
		}],
		scannedAt: (/* @__PURE__ */ new Date()).toISOString()
	};
}
function sanitizeWebRuntimeWorkspaceSession(e) {
	let t = getDefaultWorkspaceSession();
	return {
		...t,
		activeRepoId: e.activeRepoId ?? null,
		activeWorktreeId: e.activeWorktreeId ?? null,
		browserUrlHistory: e.browserUrlHistory ?? t.browserUrlHistory,
		lastVisitedAtByWorktreeId: e.lastVisitedAtByWorktreeId
	};
}
function normalizeAutoRenameBranchFromWorkDefaultOn(e, t = {}) {
	return {
		autoRenameBranchFromWork: e?.autoRenameBranchFromWorkDefaultedOn === !0 || t.preserveExplicitValue === !0 ? e?.autoRenameBranchFromWork ?? !0 : !0,
		autoRenameBranchFromWorkDefaultedOn: !0
	};
}
function normalizeOsc52ClipboardDefaultOn(e) {
	return {
		terminalAllowOsc52Clipboard: e?.terminalAllowOsc52ClipboardDefaultedOnForAllUsers === !0 ? e?.terminalAllowOsc52Clipboard ?? !0 : !0,
		terminalAllowOsc52ClipboardDefaultedOnForAllUsers: !0
	};
}
function osc52ClipboardDefaultOnOverridesPersistedOff(e) {
	return e?.terminalAllowOsc52ClipboardDefaultedOnForAllUsers !== !0 && e?.terminalAllowOsc52Clipboard === !1;
}
function isTerminalCursorStyle(e) {
	return e === "bar" || e === "block" || e === "underline";
}
function normalizeTerminalCursorStyleDefault(e, t = {}) {
	return {
		terminalCursorStyle: (e?.terminalCursorStyleDefaultedToBlock === !0 || t.preserveExplicitValue === !0) && isTerminalCursorStyle(e?.terminalCursorStyle) ? e.terminalCursorStyle : "block",
		terminalCursorStyleDefaultedToBlock: !0
	};
}
function mergeWorkspaceCleanupUIState(e, t) {
	return t ? {
		...e,
		...t
	} : e;
}
function mergeWebUIState(e, t) {
	let { featureInteractionTelemetryBuckets: n, ...r } = t;
	return {
		...e,
		...r,
		workspaceCleanup: mergeWorkspaceCleanupUIState(e.workspaceCleanup, r.workspaceCleanup),
		worktreeCardProperties: normalizeWorktreeCardProperties(r.worktreeCardProperties ?? e.worktreeCardProperties),
		_worktreeCardModeDefaulted: r._worktreeCardModeDefaulted ?? e._worktreeCardModeDefaulted,
		agentActivityDisplayMode: normalizeAgentActivityDisplayMode(r.agentActivityDisplayMode ?? e.agentActivityDisplayMode),
		usagePercentageDisplay: normalizeUsagePercentageDisplay(r.usagePercentageDisplay ?? e.usagePercentageDisplay),
		statusBarUsageMode: normalizeStatusBarUsageMode(r.statusBarUsageMode ?? e.statusBarUsageMode)
	};
}
function mergeHostWebUIState(e, t) {
	let n = {
		automationHostFilter: e.automationHostFilter,
		hideWorkspacesFromOtherDevices: e.hideWorkspacesFromOtherDevices === !0,
		manualRepoOrder: e.manualRepoOrder,
		workspaceHostOrder: e.workspaceHostOrder,
		agentsVisibleHostIds: e.agentsVisibleHostIds,
		agentsFilterRepoIds: e.agentsFilterRepoIds,
		agentsShowChildAgents: e.agentsShowChildAgents,
		agentsCompactMode: e.agentsCompactMode,
		agentsShowSearch: e.agentsShowSearch,
		agentsReadFilter: e.agentsReadFilter,
		agentsGroupBy: e.agentsGroupBy,
		activityClearedAtByPaneKey: e.activityClearedAtByPaneKey,
		manuallyUnreadTurnsByPaneKey: e.manuallyUnreadTurnsByPaneKey
	};
	return {
		...mergeWebUIState(e, t),
		...n
	};
}
function mergeFeatureInteractionState(e, t) {
	let n = normalizeFeatureInteractions(e), r = normalizeFeatureInteractions(t), i = { ...n };
	for (let [e, t] of Object.entries(r)) {
		let r = e, a = n[r];
		i[r] = a ? {
			firstInteractedAt: Math.min(a.firstInteractedAt, t.firstInteractedAt),
			interactionCount: Math.max(a.interactionCount, t.interactionCount)
		} : t;
	}
	return i;
}
function mergeContextualTourSeenIds(e, t) {
	let n = new Set(normalizeContextualTourIds(e));
	for (let e of normalizeContextualTourIds(t)) n.add(e);
	return [...n];
}
function mergeOsc52ClipboardNoticePending(e, t) {
	return e.osc52ClipboardDefaultOnNoticePending === !0 || t.osc52ClipboardDefaultOnNoticePending === !0;
}
function mergeSettings(e, t, n = {}) {
	let r = getDefaultSettings("~"), i = {
		...e,
		...t,
		notifications: {
			...e.notifications,
			...t.notifications
		},
		githubProjects: {
			...e.githubProjects ?? r.githubProjects,
			...t.githubProjects
		},
		disabledTuiAgents: normalizeDisabledTuiAgents(t.disabledTuiAgents ?? e.disabledTuiAgents),
		agentDefaultArgs: normalizeTuiAgentArgsRecord(t.agentDefaultArgs ?? e.agentDefaultArgs),
		agentDefaultEnv: normalizeTuiAgentEnvRecord(t.agentDefaultEnv ?? e.agentDefaultEnv),
		voice: {
			...e.voice ?? r.voice,
			...t.voice
		},
		activeRuntimeEnvironmentId: Object.hasOwn(t, "activeRuntimeEnvironmentId") ? t.activeRuntimeEnvironmentId ?? null : e.activeRuntimeEnvironmentId ?? null,
		terminalCustomThemes: normalizeTerminalCustomThemes(t.terminalCustomThemes ?? e.terminalCustomThemes),
		uiLanguage: normalizeUiLanguage(t.uiLanguage ?? e.uiLanguage)
	};
	return {
		...i,
		...normalizeAutoRenameBranchFromWorkDefaultOn(i, { preserveExplicitValue: n.preserveAutoRenameBranchFromWorkUpdate })
	};
}
function getStoredSettings() {
	webRuntimeState.activeEnvironment = webRuntimeState.activeEnvironment ?? readStoredWebRuntimeEnvironment();
	let e = getDefaultSettings("~"), t = window.localStorage.getItem(SETTINGS_STORAGE_KEY), n = readJson(SETTINGS_STORAGE_KEY, {}), r = {
		...n,
		...normalizeAutoRenameBranchFromWorkDefaultOn(n),
		...normalizeTerminalCursorStyleDefault(n),
		...normalizeOsc52ClipboardDefaultOn(n),
		terminalCustomThemes: normalizeTerminalCustomThemes(n.terminalCustomThemes),
		uiLanguage: normalizeUiLanguage(n.uiLanguage)
	};
	if (t && (n.autoRenameBranchFromWork !== r.autoRenameBranchFromWork || n.autoRenameBranchFromWorkDefaultedOn !== r.autoRenameBranchFromWorkDefaultedOn || n.terminalCursorStyle !== r.terminalCursorStyle || n.terminalCursorStyleDefaultedToBlock !== r.terminalCursorStyleDefaultedToBlock || n.terminalAllowOsc52Clipboard !== r.terminalAllowOsc52Clipboard || n.terminalAllowOsc52ClipboardDefaultedOnForAllUsers !== r.terminalAllowOsc52ClipboardDefaultedOnForAllUsers || n.terminalCustomThemes !== r.terminalCustomThemes || n.uiLanguage !== r.uiLanguage)) try {
		let e = JSON.parse(t);
		e && typeof e == "object" && !Array.isArray(e) && (writeJson(SETTINGS_STORAGE_KEY, r), osc52ClipboardDefaultOnOverridesPersistedOff(n) && writeJson(UI_STORAGE_KEY, {
			...readJson(UI_STORAGE_KEY, {}),
			osc52ClipboardDefaultOnNoticePending: !0
		}));
	} catch {}
	return mergeSettings({
		...e,
		floatingTerminalEnabled: !1,
		rightSidebarOpenByDefault: !1,
		activeRuntimeEnvironmentId: null
	}, r);
}
function writeStoredSettings(e, t) {
	let n = { ...e };
	if (t !== void 0) n.activeRuntimeEnvironmentId = t;
	else {
		let e = readJson(SETTINGS_STORAGE_KEY, {});
		Object.hasOwn(e, "activeRuntimeEnvironmentId") ? n.activeRuntimeEnvironmentId = e.activeRuntimeEnvironmentId ?? null : delete n.activeRuntimeEnvironmentId;
	}
	writeJson(SETTINGS_STORAGE_KEY, n);
}
async function getRuntimeBackedStoredSettings() {
	let e = getStoredSettings(), t = requireActiveEnvironmentOrNull();
	if (!t) return e;
	try {
		let n = await callRuntimeResult("settings.get", void 0, 15e3), r = {};
		if (requireActiveEnvironmentOrNull()?.id === t.id) {
			let e = normalizeWorktreeVisibilityDefaults(n.settings.worktreeVisibilityDefaults);
			webRuntimeState.worktreeVisibilityDefaultsRuntimeEnvironmentId = e ? t.id : null, webRuntimeState.worktreeVisibilityDefaultsRuntimeValue = e ?? null;
		}
		typeof n.settings.experimentalNewWorktreeCardStyle == "boolean" && (r.experimentalNewWorktreeCardStyle = n.settings.experimentalNewWorktreeCardStyle), typeof n.settings.compactWorktreeCards == "boolean" && (r.compactWorktreeCards = n.settings.compactWorktreeCards), typeof n.settings.minimaxGroupId == "string" && (r.minimaxGroupId = n.settings.minimaxGroupId), typeof n.settings.minimaxUsageModels == "string" && (r.minimaxUsageModels = n.settings.minimaxUsageModels), (n.settings.minimaxEndpoint === "overseas" || n.settings.minimaxEndpoint === "cn") && (r.minimaxEndpoint = n.settings.minimaxEndpoint), Array.isArray(n.settings.prBotAuthorOverrides) && (r.prBotAuthorOverrides = normalizePRBotAuthorOverrides(n.settings.prBotAuthorOverrides)), typeof n.settings.artifactSharingEnabled == "boolean" && (r.artifactSharingEnabled = n.settings.artifactSharingEnabled), typeof n.settings.agentSkillSharingEnabled == "boolean" && (r.agentSkillSharingEnabled = n.settings.agentSkillSharingEnabled);
		let i = mergeSettings(e, r);
		return writeStoredSettings(i), settingsForActiveVisibilityOwner(i);
	} catch {
		return settingsForActiveVisibilityOwner(e);
	}
}
function settingsForActiveVisibilityOwner(e) {
	let t = requireActiveEnvironmentOrNull();
	if (!t) return e;
	if (t.id === webRuntimeState.worktreeVisibilityDefaultsRuntimeEnvironmentId && webRuntimeState.worktreeVisibilityDefaultsRuntimeValue) return {
		...e,
		worktreeVisibilityDefaults: webRuntimeState.worktreeVisibilityDefaultsRuntimeValue
	};
	let { worktreeVisibilityDefaults: n, ...r } = e;
	return r;
}
async function syncRuntimeBackedSettings(e, t) {
	let n = requireActiveEnvironmentOrNull();
	if (!n) return t;
	let r = {}, i = normalizeWorktreeVisibilityDefaults(e.worktreeVisibilityDefaults);
	if (i && (r.worktreeVisibilityDefaults = i), typeof e.experimentalNewWorktreeCardStyle == "boolean" && (r.experimentalNewWorktreeCardStyle = e.experimentalNewWorktreeCardStyle), typeof e.compactWorktreeCards == "boolean" && (r.compactWorktreeCards = e.compactWorktreeCards), typeof e.minimaxGroupId == "string" && (r.minimaxGroupId = e.minimaxGroupId), typeof e.minimaxUsageModels == "string" && (r.minimaxUsageModels = e.minimaxUsageModels), (e.minimaxEndpoint === "overseas" || e.minimaxEndpoint === "cn") && (r.minimaxEndpoint = e.minimaxEndpoint), Array.isArray(e.prBotAuthorOverrides) && (r.prBotAuthorOverrides = normalizePRBotAuthorOverrides(e.prBotAuthorOverrides)), Object.keys(r).length === 0) return t;
	try {
		let e = { ...(await callRuntimeResult("settings.update", r, 15e3)).settings };
		delete e.activeRuntimeEnvironmentId;
		let i = normalizeWorktreeVisibilityDefaults(e.worktreeVisibilityDefaults);
		requireActiveEnvironmentOrNull()?.id === n.id && i && (webRuntimeState.worktreeVisibilityDefaultsRuntimeEnvironmentId = n.id, webRuntimeState.worktreeVisibilityDefaultsRuntimeValue = i), delete e.worktreeVisibilityDefaults;
		let a = mergeSettings(t, e);
		return writeStoredSettings(a), a;
	} catch (e) {
		if (i) throw e;
		return t;
	}
}
async function updateRuntimePRBotAuthorOverride(e) {
	let t = getStoredSettings();
	if (requireActiveEnvironmentOrNull()) {
		let n = mergeSettings(t, { prBotAuthorOverrides: normalizePRBotAuthorOverrides((await callRuntimeResult("settings.updatePRBotAuthorOverride", e, 15e3)).settings.prBotAuthorOverrides) });
		return writeStoredSettings(n), n;
	}
	let n = mergeSettings(t, { prBotAuthorOverrides: applyPRBotAuthorOverride(t.prBotAuthorOverrides, e.author, e.isBot) });
	return writeStoredSettings(n), n;
}
function readLocalWebUIState() {
	let e = getDefaultUIState(), t = getStoredSettings(), n = readJson(UI_STORAGE_KEY, {}), r = {
		...e,
		worktreeCardProperties: getWorktreeCardModeProperties(t.compactWorktreeCards ? "Compact" : "Default")
	};
	return typeof n.rightSidebarOpen == "boolean" ? mergeWebUIState(r, n) : mergeWebUIState(r, {
		...n,
		rightSidebarOpen: t.rightSidebarOpenByDefault
	});
}
function sessionStorageKeyForHost(e) {
	let t = normalizeExecutionHostId(e) ?? "local";
	return t === "local" ? SESSION_STORAGE_KEY : `${SESSION_STORAGE_KEY}.${t}`;
}
function listStoredWorkspaceSessionHostIds() {
	let e = new Set([LOCAL_EXECUTION_HOST_ID]), t = `${SESSION_STORAGE_KEY}.`;
	for (let n = 0; n < localStorage.length; n += 1) {
		let r = localStorage.key(n);
		if (!r?.startsWith(t)) continue;
		let i = normalizeExecutionHostId(r.slice(t.length));
		i && e.add(i);
	}
	return [...e];
}
function getStoredWorkspaceSession(e) {
	let t = normalizeExecutionHostId(e) ?? "local";
	if (t !== "local") return sanitizeWebRuntimeWorkspaceSession(readJson(sessionStorageKeyForHost(t), getDefaultWorkspaceSession()));
	let n = sanitizeWebRuntimeWorkspaceSession(readJson(SESSION_STORAGE_KEY, getDefaultWorkspaceSession()));
	if (!requireActiveEnvironmentOrNull()) return n;
	let r = readLocalWebUIState();
	return sanitizeWebRuntimeWorkspaceSession({
		...getDefaultWorkspaceSession(),
		activeRepoId: r.lastActiveRepoId,
		activeWorktreeId: r.lastActiveWorktreeId,
		lastVisitedAtByWorktreeId: n.lastVisitedAtByWorktreeId
	});
}
function createWebWorkspaceSessionApi() {
	return { session: {
		get: (e) => Promise.resolve(getStoredWorkspaceSession(e)),
		listHostIds: () => Promise.resolve(listStoredWorkspaceSessionHostIds()),
		set: async (e, t) => {
			writeJson(sessionStorageKeyForHost(t), sanitizeWebRuntimeWorkspaceSession(e));
		},
		patch: async (e, t) => {
			writeJson(sessionStorageKeyForHost(t), sanitizeWebRuntimeWorkspaceSession({
				...getStoredWorkspaceSession(t),
				...e
			}));
		},
		flush: async () => {},
		readTerminalScrollback: () => null,
		setSync: (e, t) => {
			writeJson(sessionStorageKeyForHost(t), sanitizeWebRuntimeWorkspaceSession(e));
		}
	} };
}
function createWebAppApi() {
	return { app: {
		getIdentity: () => Promise.resolve({
			name: "Orca",
			isDev: !1,
			devLabel: null,
			devBranch: null,
			devWorktreeName: null,
			devRepoRoot: null,
			dockBadgeLabel: null
		}),
		getFeatureWallAssetBaseUrl: () => Promise.resolve("/"),
		relaunch: () => Promise.resolve(window.location.reload()),
		restart: () => Promise.resolve(window.location.reload()),
		reload: () => Promise.resolve(window.location.reload()),
		stageBeforeUnloadSync: ({ sessions: e, ui: t }) => {
			for (let { state: t, hostId: n } of e) writeJson(sessionStorageKeyForHost(n), sanitizeWebRuntimeWorkspaceSession(t));
			writeJson(UI_STORAGE_KEY, mergeWebUIState(readLocalWebUIState(), t));
		},
		awaitBeforeUnloadCheckpoint: () => Promise.resolve(),
		awaitFirstWindowStartupServices: () => Promise.resolve(),
		awaitGitEnvironmentStartupBarrier: () => Promise.resolve(),
		prepareTerminalStartupRestoration: () => Promise.resolve(),
		recoverLegacyWorkerTerminalsForRendererStartup: () => Promise.resolve(),
		startupDiagnostic: () => Promise.resolve(),
		getKeyboardInputSourceId: () => Promise.resolve(null),
		getMacCapturedDigitRowChords: () => Promise.resolve([]),
		getKeyboardLayoutSnapshot: () => Promise.resolve(null),
		onKeyboardLayoutChanged: () => () => void 0,
		setUnreadDockBadgeCount: () => Promise.resolve(),
		getFloatingTerminalCwd: () => Promise.resolve(""),
		getFloatingMarkdownDirectory: () => Promise.resolve(""),
		pickFloatingMarkdownDocument: () => Promise.resolve(null),
		pickFloatingWorkspaceDirectory: () => Promise.resolve(null),
		writeTerminalRenderDesyncEvidence: () => Promise.reject(/* @__PURE__ */ Error("Terminal render evidence is unavailable in the browser fallback."))
	} };
}
function createBrowserApi() {
	return {
		registerGuest: () => Promise.resolve(!1),
		isGuestRegistered: () => Promise.resolve(!1),
		repairGuestRegistration: () => Promise.resolve(!1),
		unregisterGuest: () => Promise.resolve(),
		openDevTools: () => Promise.resolve(!1),
		setViewportOverride: () => Promise.resolve(!1),
		reportViewportScrollState: () => {},
		setAnnotationViewportBridge: () => Promise.resolve(!1),
		publishClientPageMetadata: () => Promise.resolve({ status: "refused" }),
		onGuestLoadFailed: () => noopUnsubscribe,
		onCertificateFailureChanged: () => noopUnsubscribe,
		proceedCertificate: () => Promise.resolve({
			ok: !1,
			reason: "missing"
		}),
		onPermissionDenied: () => noopUnsubscribe,
		onPopup: () => noopUnsubscribe,
		onDownloadRequested: () => noopUnsubscribe,
		onDownloadProgress: () => noopUnsubscribe,
		onDownloadFinished: () => noopUnsubscribe,
		onContextMenuRequested: () => noopUnsubscribe,
		onContextMenuDismissed: () => noopUnsubscribe,
		onNavigationUpdate: () => noopUnsubscribe,
		onActivateView: () => noopUnsubscribe,
		onPaneFocus: () => noopUnsubscribe,
		onOpenLinkInOrcaTab: () => noopUnsubscribe,
		cancelDownload: () => Promise.resolve(!1),
		setGrabMode: () => Promise.resolve({
			ok: !1,
			error: translate("auto.web.web.preload.api.31bea294d5", "Grab mode is unavailable in the web client.")
		}),
		awaitGrabSelection: () => Promise.resolve({
			ok: !1,
			error: translate("auto.web.web.preload.api.31bea294d5", "Grab mode is unavailable in the web client.")
		}),
		cancelGrab: () => Promise.resolve(!1),
		captureSelectionScreenshot: () => Promise.resolve({
			ok: !1,
			error: translate("auto.web.web.preload.api.8dfcb7a351", "Selection screenshots are unavailable in the web client.")
		}),
		extractHoverPayload: () => Promise.resolve({
			ok: !1,
			error: translate("auto.web.web.preload.api.275a776357", "Hover extraction is unavailable in the web client.")
		}),
		onGrabModeToggle: () => noopUnsubscribe,
		onGrabActionShortcut: () => noopUnsubscribe,
		sessionListProfiles: () => Promise.resolve([]),
		prepareSshWorkspacePartition: () => Promise.reject(/* @__PURE__ */ Error("browser_local_route_unavailable")),
		sessionCreateProfile: () => Promise.resolve(null),
		sessionDeleteProfile: () => Promise.resolve(!1),
		sessionImportCookies: () => Promise.resolve({
			ok: !1,
			summary: null,
			error: translate("auto.web.web.preload.api.67ec964791", "Cookie import is unavailable in the web client.")
		}),
		sessionResolvePartition: () => Promise.resolve(null),
		sessionDetectBrowsers: () => Promise.resolve([]),
		sessionDetectBrowsersForClientHost: () => Promise.resolve(null),
		sessionImportFromBrowserForClientHost: () => Promise.resolve(null),
		sessionClientRouteImportSources: () => Promise.resolve({}),
		sessionImportFromBrowser: () => Promise.resolve({
			ok: !1,
			summary: null,
			error: translate("auto.web.web.preload.api.67ec964791", "Cookie import is unavailable in the web client.")
		}),
		sessionClearDefaultCookies: () => Promise.resolve(!1),
		notifyActiveTabChanged: () => Promise.resolve(!1)
	};
}
function createEmulatorApi() {
	return {
		onPaneFocus: () => noopUnsubscribe,
		onAutoAttach: () => noopUnsubscribe,
		startFrameStream: () => Promise.reject(/* @__PURE__ */ Error("Mobile emulator is unavailable on web.")),
		stopFrameStream: () => Promise.resolve(),
		onFrameStreamFrame: () => noopUnsubscribe,
		onFrameStreamError: () => noopUnsubscribe
	};
}
function createCliApi() {
	let e = {
		platform: getBrowserPlatform(),
		commandName: getBrowserPlatform() === "linux" ? "orca-ide" : "orca",
		commandPath: null,
		pathDirectory: null,
		pathConfigured: !1,
		launcherPath: null,
		installMethod: null,
		supported: !1,
		state: "unsupported",
		currentTarget: null,
		unsupportedReason: "launch_mode_unavailable",
		detail: "CLI registration is managed on the Orca server, not in the web browser."
	};
	return {
		getInstallStatus: () => Promise.resolve(e),
		install: () => Promise.resolve(e),
		remove: () => Promise.resolve(e),
		getWslInstallStatus: (t) => Promise.resolve(e),
		installWsl: (t) => Promise.resolve(e),
		removeWsl: (t) => Promise.resolve(e)
	};
}
function createWebDiagnosticsApi() {
	return {
		crashReports: {
			getLatestPending: () => Promise.resolve(null),
			getLatestReport: () => Promise.resolve(null),
			dismiss: () => Promise.resolve(null),
			recordRendererError: () => Promise.resolve({
				ok: !0,
				report: null,
				deduped: !0
			}),
			recordBreadcrumb: () => {},
			submit: () => Promise.resolve({
				ok: !1,
				status: null,
				error: translate("auto.web.web.preload.api.fb290366b2", "Unavailable on web.")
			}),
			copyLatestDiagnostics: () => Promise.resolve({
				ok: !1,
				error: translate("auto.web.web.preload.api.fb290366b2", "Unavailable on web.")
			}),
			readHeapStatistics: () => null
		},
		diagnostics: {
			getStatus: () => Promise.resolve({
				localFileEnabled: !1,
				bundleEnabled: !1,
				traceFilePath: "",
				traceFamilySize: 0
			}),
			collectBundle: () => Promise.reject(/* @__PURE__ */ Error("Review files are unavailable on web.")),
			openBundlePreview: () => Promise.reject(/* @__PURE__ */ Error("Review files are unavailable on web.")),
			discardBundlePreview: () => Promise.resolve(),
			uploadBundle: () => Promise.reject(/* @__PURE__ */ Error("Sending diagnostics is unavailable on web.")),
			deleteBundle: () => Promise.reject(/* @__PURE__ */ Error("Sent diagnostics are unavailable on web."))
		}
	};
}
function withFallback(e, t) {
	return new Proxy(e, { get(e, n, r) {
		if (n in e) {
			let i = Reflect.get(e, n, r);
			return i && typeof i == "object" && !Array.isArray(i) ? withFallback(i, [...t, String(n)]) : i;
		}
		return createFallbackProxy([...t, String(n)]);
	} });
}
function createFallbackProxy(e, t) {
	return new Proxy(() => void 0, {
		get(n, r) {
			if (r !== "then") return createFallbackProxy([...e, String(r)], t);
		},
		apply(n, r, i) {
			return t ? t(e, i) : getFallbackResult(e, i);
		}
	});
}
function getFallbackResult(e, t) {
	let n = e.at(-1) ?? "";
	if (n.startsWith("on")) return noopUnsubscribe;
	if (n.startsWith("is") || n.startsWith("has") || n === "pathExists") return Promise.resolve(!1);
	if (n.startsWith("list") || n.startsWith("detect")) return Promise.resolve([]);
	if (n.startsWith("preview")) return Promise.resolve({
		found: !1,
		diff: {},
		unsupportedKeys: []
	});
	if (n.startsWith("get") && n.endsWith("Status")) return Promise.resolve([]);
	if (!(n === "write" || n === "resize" || n === "reportGeometry")) return t.length === 0 && (n === "getZoomLevel" || n === "declarePendingPaneSerializer") ? 0 : Promise.resolve(void 0);
}
var SSH_OWNER_CHANGED_MESSAGE = "Couldn't verify the SSH connection. Reconnect the host and try again.";
async function captureWebFileMutationProvenance(e, t) {
	let n = parseExecutionHostId(e.worktree.hostId);
	if (e.worktree.hostId !== void 0 && !n) throw Error(SSH_OWNER_CHANGED_MESSAGE);
	if (!n || n.kind === "local" || n.kind === "runtime") return { expectedExecutionHostId: "local" };
	let r = await t(n.targetId);
	if (r?.targetId !== n.targetId || r.connectionGeneration === void 0) throw Error(SSH_OWNER_CHANGED_MESSAGE);
	return {
		expectedExecutionHostId: n.id,
		expectedSshTargetId: n.targetId,
		expectedSshConnectionGeneration: r.connectionGeneration
	};
}
function assertSameWorktree(e, t) {
	if (e.worktree.id !== t.worktree.id) throw Error("File operation cannot cross runtime worktrees");
}
function createWebFileMutationMethods(e) {
	let t = async (e, t, n, r) => {
		await e.assertMutationSupported();
		let i = await captureWebFileMutationProvenance(n, e.getSshState);
		await e.callRuntimeResult(t, {
			worktree: toRuntimeWorktreeSelector(n.worktree.id),
			...r,
			...i
		});
	};
	return {
		writeFile: async ({ filePath: n, content: r }) => {
			let i = e.captureSession(), a = await i.resolveFilePath(n);
			await t(i, "files.write", a, {
				relativePath: a.relativePath,
				content: r
			});
		},
		createFile: async ({ filePath: n }) => {
			let r = e.captureSession(), i = await r.resolveFilePath(n);
			await t(r, "files.createFile", i, { relativePath: i.relativePath });
		},
		createDir: async ({ dirPath: n }) => {
			let r = e.captureSession(), i = await r.resolveFilePath(n);
			await t(r, "files.createDir", i, { relativePath: i.relativePath });
		},
		rename: async ({ oldPath: n, newPath: r }) => {
			let i = e.captureSession(), a = await i.resolveFilePath(n), o = await i.resolveFilePath(r);
			assertSameWorktree(a, o), await t(i, "files.rename", a, {
				oldRelativePath: a.relativePath,
				newRelativePath: o.relativePath
			});
		},
		copy: async ({ sourcePath: n, destinationPath: r }) => {
			let i = e.captureSession(), a = await i.resolveFilePath(n), o = await i.resolveFilePath(r);
			assertSameWorktree(a, o), await t(i, "files.copy", a, {
				sourceRelativePath: a.relativePath,
				destinationRelativePath: o.relativePath
			});
		},
		deletePath: async ({ targetPath: n, recursive: r }) => {
			let i = e.captureSession(), a = await i.resolveFilePath(n);
			await t(i, "files.delete", a, {
				relativePath: a.relativePath,
				recursive: r
			});
		}
	};
}
const WEB_RUNTIME_WORKTREE_LIST_LIMIT = 1e4;
async function listAllRuntimeWorktrees() {
	if (webRuntimeState.cachedWorktrees && Date.now() - webRuntimeState.cachedWorktrees.loadedAt < 5e3) return webRuntimeState.cachedWorktrees.worktrees;
	let e = await callRuntimeResultWithOwner("worktree.list", { limit: WEB_RUNTIME_WORKTREE_LIST_LIMIT }), t = e.result.worktrees.map((t) => withRuntimeWorktreeOwner(t, e.hostId));
	return assertActiveEnvironment(e.environmentId), webRuntimeState.cachedWorktrees = {
		loadedAt: Date.now(),
		worktrees: t
	}, t;
}
async function listAllRuntimeDetectedWorktrees(e = callRuntimeResult, t = callRuntimeEnvelope, n = !0, r = requireActiveEnvironment().id) {
	if (n && webRuntimeState.cachedDetectedWorktrees && Date.now() - webRuntimeState.cachedDetectedWorktrees.loadedAt < 5e3) return webRuntimeState.cachedDetectedWorktrees.worktrees;
	assertActiveEnvironment(r);
	let i = (await e("repo.list")).repos, a = (await Promise.all(i.map((n) => callRuntimeDetectedWorktrees(n.id, r, e, t)))).flatMap((e) => e.worktrees);
	return assertActiveEnvironment(r), n && (webRuntimeState.cachedDetectedWorktrees = {
		loadedAt: Date.now(),
		worktrees: a
	}), a;
}
async function callRuntimeDetectedWorktrees(e, t = requireActiveEnvironment().id, n = callRuntimeResult, r = callRuntimeEnvelope) {
	assertActiveEnvironment(t);
	let i = toRuntimeExecutionHostId(t), a = await r("worktree.detectedList", { repo: e }, 15e3);
	if (a.ok) return {
		...a.result,
		worktrees: a.result.worktrees.map((e) => withRuntimeWorktreeOwner(e, i))
	};
	if (a.error.code !== "method_not_found") throw Error(a.error.message);
	return assertActiveEnvironment(t), toLegacyDetectedWorktreeResult(e, (await n("worktree.list", {
		repo: e,
		limit: WEB_RUNTIME_WORKTREE_LIST_LIMIT
	}, 15e3)).worktrees.map((e) => withRuntimeWorktreeOwner(e, i)));
}
function toLegacyDetectedWorktreeResult(e, t) {
	return {
		repoId: e,
		authoritative: !0,
		source: "session-fallback",
		worktrees: t.map((e) => ({
			...e,
			ownership: "orca-managed",
			selectedCheckout: !1,
			visible: !0
		}))
	};
}
function isMissingPathError(e) {
	return e instanceof Error ? /\bENOENT\b|not found|no such file/i.test(e.message) : !1;
}
async function resolveRuntimeWorktreeByPath(e, t = callRuntimeResult, n = callRuntimeEnvelope, r = !0, i = requireActiveEnvironment().id) {
	let a = (await listAllRuntimeDetectedWorktrees(t, n, r, i)).map((t) => ({
		worktree: t,
		relativePath: relativePathInsideRoot(t.path, e)
	})).filter((e) => e.relativePath !== null).sort((e, t) => t.worktree.path.length - e.worktree.path.length)[0];
	if (!a) throw Error(`No runtime worktree owns ${e}`);
	return a.worktree;
}
async function resolveRuntimeFilePath(e, t, n = callRuntimeResult, r = callRuntimeEnvelope, i = !0, a = requireActiveEnvironment().id) {
	let o = t ? await resolveRuntimeWorktreeByPath(t, n, r, i, a) : await resolveRuntimeWorktreeByPath(e, n, r, i, a), s = relativePathInsideRoot(o.path, e);
	if (s === null) throw Error(`File is outside runtime worktree: ${e}`);
	return {
		worktree: o,
		relativePath: s
	};
}
function createFileApi() {
	return {
		readDir: async ({ dirPath: e }) => {
			let t = await resolveRuntimeFilePath(e);
			return callRuntimeResult("files.readDir", {
				worktree: toRuntimeWorktreeSelector(t.worktree.id),
				relativePath: t.relativePath
			});
		},
		readFile: async ({ filePath: e }) => {
			let t = await resolveRuntimeFilePath(e);
			return callRuntimeResult("files.readPreview", {
				worktree: toRuntimeWorktreeSelector(t.worktree.id),
				relativePath: t.relativePath
			});
		},
		readLocalLogTail: async () => {
			throw Error("Local log tailing is unavailable in paired web clients.");
		},
		startLocalLogTail: async () => {
			throw Error("Local log tailing is unavailable in paired web clients.");
		},
		stopLocalLogTail: async () => {},
		onLocalLogTailChanged: () => noopUnsubscribe,
		downloadFile: async () => {
			throw Error("Remote file download is unavailable in paired web clients.");
		},
		downloadFolder: async () => {
			throw Error("Remote folder download is unavailable in paired web clients.");
		},
		saveDownloadedFile: async () => {
			throw Error("Remote file download is unavailable in paired web clients.");
		},
		startDownloadedFile: async () => {
			throw Error("Remote file download is unavailable in paired web clients.");
		},
		appendDownloadedFileChunk: async () => {
			throw Error("Remote file download is unavailable in paired web clients.");
		},
		finishDownloadedFile: async () => {
			throw Error("Remote file download is unavailable in paired web clients.");
		},
		cancelDownloadedFile: async () => {
			throw Error("Remote file download is unavailable in paired web clients.");
		},
		listMarkdownDocuments: async ({ rootPath: e }) => callRuntimeResult("files.listMarkdownDocuments", { worktree: toRuntimeWorktreeSelector((await resolveRuntimeFilePath(e)).worktree.id) }),
		...createWebFileMutationMethods({ captureSession: captureWebFileMutationSession }),
		authorizeExternalPath: () => Promise.resolve(),
		stat: async ({ filePath: e }) => {
			let t = await resolveRuntimeFilePath(e);
			return callRuntimeResult("files.stat", {
				worktree: toRuntimeWorktreeSelector(t.worktree.id),
				relativePath: t.relativePath
			});
		},
		pathExists: async ({ filePath: e }) => {
			try {
				let t = await resolveRuntimeFilePath(e);
				return await callRuntimeResult("files.stat", {
					worktree: toRuntimeWorktreeSelector(t.worktree.id),
					relativePath: t.relativePath
				}), !0;
			} catch (e) {
				if (isMissingPathError(e)) return !1;
				throw e;
			}
		},
		listFiles: async ({ rootPath: e, excludePaths: t }) => (await callRuntimeResult("files.listAll", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeFilePath(e)).worktree.id),
			excludePaths: t
		})).files.map((e) => e.relativePath),
		cancelListFiles: async () => {},
		search: async (e) => callRuntimeResult("files.search", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeFilePath(e.rootPath)).worktree.id),
			query: e.query,
			caseSensitive: e.caseSensitive,
			wholeWord: e.wholeWord,
			useRegex: e.useRegex,
			includePattern: e.includePattern,
			excludePattern: e.excludePattern,
			maxResults: e.maxResults
		}),
		importExternalPaths: async () => ({ results: [] }),
		stageExternalPathsForRuntimeUpload: async () => ({ sources: [] }),
		uploadExternalFileToRuntime: async () => {
			throw Error("Uploading local files is not supported in the web client");
		},
		resolveDroppedPathsForAgent: async () => ({
			resolvedPaths: [],
			skipped: [],
			failed: []
		}),
		watchWorktree: () => Promise.resolve(),
		unwatchWorktree: () => Promise.resolve(),
		onFsChanged: () => noopUnsubscribe
	};
}
function captureWebFileMutationSession() {
	let e = requireActiveEnvironment(), t = getClientForEnvironment(e), n = () => {
		if (webRuntimeState.activeClient !== t || requireActiveEnvironmentOrNull()?.id !== e.id) throw Error("Runtime pairing changed; refresh and try again");
	}, r = async (r, i, a) => {
		n();
		let o = await runtimeCallQueuePool.enqueue(e.id, r, () => (n(), t.call(r, i, { timeoutMs: a })));
		return n(), updateEnvironmentFromResponse(e, o), o;
	}, i = async (e, t, n) => {
		let i = await r(e, t, n);
		if (!i.ok) throw Error(i.error.message);
		return i.result;
	};
	return {
		resolveFilePath: (t) => resolveRuntimeFilePath(t, void 0, i, r, !1, e.id),
		assertMutationSupported: async () => {
			assertFileMutationOwnershipCapability(await i("status.get", void 0, 15e3));
		},
		callRuntimeResult: i,
		getSshState: async (e) => (await i("ssh.getState", { targetId: e })).state
	};
}
const webGitStatusAbortControllers = /* @__PURE__ */ new Map();
async function callAbortableRuntimeStatus(e, t) {
	let n = requireActiveEnvironment();
	webGitStatusAbortControllers.get(e)?.abort();
	let r = new AbortController();
	webGitStatusAbortControllers.set(e, r);
	try {
		let e = await callAbortableRuntimeEnvironment(n.id, "git.status", t, void 0, r.signal);
		if (updateEnvironmentFromResponse(n, e), !e.ok) throw Error(e.error.message);
		return e.result;
	} finally {
		webGitStatusAbortControllers.get(e) === r && webGitStatusAbortControllers.delete(e);
	}
}
function createGitApi() {
	return {
		status: async ({ worktreePath: e, includeIgnored: t, includeLineStats: n, bypassEffectiveUpstreamNegativeCache: r, reuseLineStats: i, branchLineTotalMergeBase: a, requestToken: o }) => {
			let s = {
				worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
				includeIgnored: t,
				includeLineStats: n,
				bypassEffectiveUpstreamNegativeCache: r,
				reuseLineStats: i,
				...a ? { branchLineTotalMergeBase: a } : {}
			};
			return o ? callAbortableRuntimeStatus(o, s) : callRuntimeResult("git.status", s);
		},
		cancelStatus: async ({ requestToken: e }) => {
			webGitStatusAbortControllers.get(e)?.abort();
		},
		setStatusUpstreamRefWatch: async () => {},
		submoduleStatus: async ({ worktreePath: e, submodulePath: t, area: n }) => callRuntimeResult("git.submoduleStatus", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			submodulePath: t,
			area: n
		}),
		checkIgnored: async ({ worktreePath: e, paths: t }) => callRuntimeResult("git.checkIgnored", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			paths: t
		}),
		findHugeFoldersToIgnore: async () => [],
		appendGitignore: async () => !1,
		history: async ({ worktreePath: e, limit: t, baseRef: n }) => callRuntimeResult("git.history", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			limit: t,
			baseRef: n
		}),
		conflictOperation: async ({ worktreePath: e }) => callRuntimeResult("git.conflictOperation", { worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id) }),
		abortMerge: async ({ worktreePath: e }) => {
			await callRuntimeResult("git.abortMerge", { worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id) });
		},
		abortRebase: async ({ worktreePath: e }) => {
			await callRuntimeResult("git.abortRebase", { worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id) });
		},
		diff: async ({ worktreePath: e, filePath: t, staged: n, compareAgainstHead: r }) => {
			let i = await resolveRuntimeFilePath(t, e);
			return callRuntimeResult("git.diff", {
				worktree: toRuntimeWorktreeSelector(i.worktree.id),
				filePath: i.relativePath,
				staged: n,
				compareAgainstHead: r
			});
		},
		branchCompare: async ({ worktreePath: e, baseRef: t, admissionTier: n }) => callRuntimeResult("git.branchCompare", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			baseRef: t,
			...n ? { admissionTier: n } : {}
		}),
		commitCompare: async ({ worktreePath: e, commitId: t }) => callRuntimeResult("git.commitCompare", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			commitId: t
		}),
		upstreamStatus: async ({ worktreePath: e, pushTarget: t }) => callRuntimeResult("git.upstreamStatus", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			pushTarget: t
		}),
		fetch: async ({ worktreePath: e, pushTarget: t }) => {
			await callRuntimeResult("git.fetch", {
				worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
				pushTarget: t
			});
		},
		syncFork: async ({ worktreePath: e, expectedUpstream: t }) => callRuntimeResult("git.forkSync", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			expectedUpstream: t
		}, 6e4),
		push: async ({ worktreePath: e, publish: t, pushTarget: n }) => {
			await callRuntimeResult("git.push", {
				worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
				publish: t,
				pushTarget: n
			});
		},
		pull: async ({ worktreePath: e, pushTarget: t }) => {
			await callRuntimeResult("git.pull", {
				worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
				pushTarget: t
			});
		},
		fastForward: async ({ worktreePath: e, pushTarget: t }) => {
			await callRuntimeResult("git.fastForward", {
				worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
				pushTarget: t
			});
		},
		rebaseFromBase: async ({ worktreePath: e, baseRef: t }) => {
			await callRuntimeResult("git.rebaseFromBase", {
				worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
				baseRef: t
			});
		},
		branchDiff: async ({ worktreePath: e, filePath: t, compare: n, oldPath: r }) => {
			let i = await resolveRuntimeFilePath(t, e);
			return callRuntimeResult("git.branchDiff", {
				worktree: toRuntimeWorktreeSelector(i.worktree.id),
				filePath: i.relativePath,
				compare: n,
				oldPath: r
			});
		},
		commitDiff: async ({ worktreePath: e, filePath: t, commitOid: n, parentOid: r, oldPath: i }) => {
			let a = await resolveRuntimeFilePath(t, e);
			return callRuntimeResult("git.commitDiff", {
				worktree: toRuntimeWorktreeSelector(a.worktree.id),
				filePath: a.relativePath,
				commitOid: n,
				parentOid: r,
				oldPath: i
			});
		},
		commit: async ({ worktreePath: e, message: t }) => callRuntimeResult("git.commit", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			message: t
		}),
		generateCommitMessage: async () => ({
			success: !1,
			error: translate("auto.web.web.preload.api.9fc90740b6", "Commit message generation is unavailable in the web client.")
		}),
		discoverCommitMessageModels: async () => ({
			success: !1,
			error: translate("auto.web.web.preload.api.e57c82d276", "Commit message model discovery is unavailable in the web client.")
		}),
		cancelGenerateCommitMessage: () => Promise.resolve(),
		generatePullRequestFields: async () => ({
			success: !1,
			error: translate("auto.web.web.preload.api.b8a1618172", "Pull request detail generation is unavailable in the web client.")
		}),
		cancelGeneratePullRequestFields: () => Promise.resolve(),
		stage: async ({ worktreePath: e, filePath: t }) => mutateGitPath("git.stage", e, t),
		bulkStage: async ({ worktreePath: e, filePaths: t }) => mutateGitPaths("git.bulkStage", e, t),
		unstage: async ({ worktreePath: e, filePath: t }) => mutateGitPath("git.unstage", e, t),
		bulkUnstage: async ({ worktreePath: e, filePaths: t }) => mutateGitPaths("git.bulkUnstage", e, t),
		discard: async ({ worktreePath: e, filePath: t }) => mutateGitPath("git.discard", e, t),
		bulkDiscard: async ({ worktreePath: e, filePaths: t }) => {
			for (let n of t) await mutateGitPath("git.discard", e, n);
		},
		remoteFileUrl: async ({ worktreePath: e, relativePath: t, line: n }) => callRuntimeResult("git.remoteFileUrl", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			relativePath: t,
			line: n
		}),
		remoteCommitUrl: async ({ worktreePath: e, sha: t }) => callRuntimeResult("git.remoteCommitUrl", {
			worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(e)).id),
			sha: t
		})
	};
}
async function mutateGitPath(e, t, n) {
	let r = await resolveRuntimeFilePath(n, t);
	await callRuntimeResult(e, {
		worktree: toRuntimeWorktreeSelector(r.worktree.id),
		filePath: r.relativePath
	});
}
async function mutateGitPaths(e, t, n) {
	await callRuntimeResult(e, {
		worktree: toRuntimeWorktreeSelector((await resolveRuntimeWorktreeByPath(t)).id),
		filePaths: n
	});
}
function createWebGithubCacheApi() {
	return { cache: {
		getGitHub: () => Promise.resolve(readJson(GITHUB_CACHE_STORAGE_KEY, {
			pr: {},
			issue: {}
		})),
		setGitHub: async ({ cache: e }) => {
			writeJson(GITHUB_CACHE_STORAGE_KEY, e);
		}
	} };
}
const GITHUB_WEB_RPC_METHODS = {
	repoSlug: "github.repoSlug",
	repoUpstream: "github.repoUpstream",
	prForBranch: "github.prForBranch",
	issue: "github.issue",
	workItem: "github.workItem",
	workItemByOwnerRepo: "github.workItemByOwnerRepo",
	workItemDetails: "github.workItemDetails",
	prFileContents: "github.prFileContents",
	listIssues: "github.listIssues",
	createIssue: "github.createIssue",
	countWorkItems: "github.countWorkItems",
	listWorkItems: "github.listWorkItems",
	prChecks: "github.prChecks",
	prCheckDetails: "github.prCheckDetails",
	rerunPRChecks: "github.rerunPRChecks",
	prComments: "github.prComments",
	setPRCommentReaction: "github.setPRCommentReaction",
	resolveReviewThread: "github.resolveReviewThread",
	setPRFileViewed: "github.setPRFileViewed",
	updatePRTitle: "github.updatePRTitle",
	mergePR: "github.mergePR",
	markPRReadyForReview: "github.markPRReadyForReview",
	setPRAutoMerge: "github.setPRAutoMerge",
	updatePRState: "github.updatePRState",
	requestPRReviewers: "github.requestPRReviewers",
	removePRReviewers: "github.removePRReviewers",
	updateIssue: "github.updateIssue",
	addIssueComment: "github.addIssueComment",
	addPRReviewCommentReply: "github.addPRReviewCommentReply",
	addPRReviewComment: "github.addPRReviewComment",
	listLabels: "github.listLabels",
	listAssignableUsers: "github.listAssignableUsers",
	rateLimit: "github.rateLimit",
	listBindableAccounts: "github.listBindableAccounts",
	validateAccountBinding: "github.validateAccountBinding",
	listAccessibleProjects: "github.project.listAccessible",
	resolveProjectRef: "github.project.resolveRef",
	listProjectViews: "github.project.listViews",
	getProjectViewTable: "github.project.viewTable",
	projectWorkItemDetailsBySlug: "github.project.workItemDetailsBySlug",
	updateProjectItemField: "github.project.updateItemField",
	clearProjectItemField: "github.project.clearItemField",
	updateIssueBySlug: "github.project.updateIssueBySlug",
	updatePullRequestBySlug: "github.project.updatePullRequestBySlug",
	addIssueCommentBySlug: "github.project.addIssueCommentBySlug",
	updateIssueCommentBySlug: "github.project.updateIssueCommentBySlug",
	deleteIssueCommentBySlug: "github.project.deleteIssueCommentBySlug",
	listLabelsBySlug: "github.project.listLabelsBySlug",
	listAssignableUsersBySlug: "github.project.listAssignableUsersBySlug",
	listIssueTypesBySlug: "github.project.listIssueTypesBySlug",
	updateIssueTypeBySlug: "github.project.updateIssueTypeBySlug"
};
function createRuntimeNamespaceApi(e) {
	return createFallbackProxy([e], (t, n) => callRuntimeResult(`${e}.${t.at(-1) ?? ""}`, mapRuntimeNamespaceArg(e, n[0])));
}
function createHooksApi() {
	return {
		check: async ({ repoId: e }) => callRuntimeResult("repo.hooksCheck", { repo: e }),
		inspectSetupScriptImports: async ({ repoId: e }) => callRuntimeResult("repo.setupScriptImports", { repo: e }),
		createIssueCommandRunner: async () => ({ launched: !1 }),
		readIssueCommand: async ({ repoId: e }) => callRuntimeResult("repo.issueCommandRead", { repo: e }),
		writeIssueCommand: async ({ repoId: e, content: t }) => {
			await callRuntimeResult("repo.issueCommandWrite", {
				repo: e,
				content: t
			});
		}
	};
}
function mapRepoPathArg(e) {
	if (!e || typeof e != "object" || !("repoPath" in e)) return e;
	let t = e, n = typeof t.repoId == "string" && t.repoId.trim() ? t.repoId : null;
	return {
		...t,
		repo: n ? `id:${n}` : t.repoPath
	};
}
function mapRuntimeNamespaceArg(e, t) {
	return e === "hostedReview" ? mapRepoPathArg(t) : t;
}
function createGitHubApi() {
	let e = (e, t) => callRuntimeResult(e, mapRepoPathArg(t));
	return {
		viewer: () => Promise.resolve(null),
		repoSlug: (t) => e(GITHUB_WEB_RPC_METHODS.repoSlug, t),
		repoUpstream: (t) => e(GITHUB_WEB_RPC_METHODS.repoUpstream, t),
		prForBranch: (t) => e(GITHUB_WEB_RPC_METHODS.prForBranch, t),
		refreshPRNow: async ({ candidate: t, reason: n }) => {
			let r = t.linkedPRNumber == null && t.fallbackPRNumber != null && t.fallbackPRSource != null, i = await e(GITHUB_WEB_RPC_METHODS.prForBranch, {
				repoPath: t.repoPath,
				repoId: t.repoId,
				branch: t.branch,
				linkedPRNumber: t.linkedPRNumber ?? null,
				fallbackPRNumber: t.fallbackPRNumber ?? null,
				currentHeadOid: t.currentHeadOid ?? null,
				...n ? { reason: n } : {},
				...r ? { acceptMergedFallbackPR: !0 } : {}
			});
			return i ? {
				kind: "found",
				pr: i,
				fetchedAt: Date.now()
			} : {
				kind: "no-pr",
				fetchedAt: Date.now()
			};
		},
		enqueuePRRefresh: () => Promise.resolve(!1),
		reportVisiblePRRefreshCandidates: () => Promise.resolve(!1),
		onPRRefreshEvent: () => noopUnsubscribe,
		issue: (t) => e(GITHUB_WEB_RPC_METHODS.issue, t),
		workItem: (t) => e(GITHUB_WEB_RPC_METHODS.workItem, t),
		workItemByOwnerRepo: ({ repo: t, ...n }) => e(GITHUB_WEB_RPC_METHODS.workItemByOwnerRepo, {
			...n,
			ownerRepo: t
		}),
		workItemDetails: (t) => e(GITHUB_WEB_RPC_METHODS.workItemDetails, t),
		notifyWorkItemMutated: () => Promise.resolve(!1),
		prFileContents: (t) => e(GITHUB_WEB_RPC_METHODS.prFileContents, t),
		listIssues: (t) => e(GITHUB_WEB_RPC_METHODS.listIssues, t),
		createIssue: (t) => e(GITHUB_WEB_RPC_METHODS.createIssue, t),
		countWorkItems: (t) => e(GITHUB_WEB_RPC_METHODS.countWorkItems, t),
		listWorkItems: (t) => e(GITHUB_WEB_RPC_METHODS.listWorkItems, t),
		prChecks: (t) => e(GITHUB_WEB_RPC_METHODS.prChecks, t),
		prCheckDetails: (t) => e(GITHUB_WEB_RPC_METHODS.prCheckDetails, t),
		rerunPRChecks: (t) => e(GITHUB_WEB_RPC_METHODS.rerunPRChecks, t),
		prComments: (t) => e(GITHUB_WEB_RPC_METHODS.prComments, t),
		setPRCommentReaction: (t) => e(GITHUB_WEB_RPC_METHODS.setPRCommentReaction, t),
		resolveReviewThread: (t) => e(GITHUB_WEB_RPC_METHODS.resolveReviewThread, t),
		setPRFileViewed: (t) => e(GITHUB_WEB_RPC_METHODS.setPRFileViewed, t),
		updatePRTitle: (t) => e(GITHUB_WEB_RPC_METHODS.updatePRTitle, t),
		mergePR: (t) => e(GITHUB_WEB_RPC_METHODS.mergePR, t),
		markPRReadyForReview: async (t) => (await getRemoteRuntimeStatus().catch(() => null))?.capabilities?.includes("github.markPRReadyForReview") ? e(GITHUB_WEB_RPC_METHODS.markPRReadyForReview, t) : {
			ok: !1,
			error: GITHUB_MARK_PR_READY_UPDATE_REQUIRED_MESSAGE
		},
		setPRAutoMerge: (t) => e(GITHUB_WEB_RPC_METHODS.setPRAutoMerge, t),
		updatePRState: (t) => e(GITHUB_WEB_RPC_METHODS.updatePRState, t),
		requestPRReviewers: (t) => e(GITHUB_WEB_RPC_METHODS.requestPRReviewers, t),
		removePRReviewers: (t) => e(GITHUB_WEB_RPC_METHODS.removePRReviewers, t),
		updateIssue: (t) => e(GITHUB_WEB_RPC_METHODS.updateIssue, t),
		addIssueComment: (t) => e(GITHUB_WEB_RPC_METHODS.addIssueComment, t),
		addPRReviewCommentReply: (t) => e(GITHUB_WEB_RPC_METHODS.addPRReviewCommentReply, t),
		addPRReviewComment: (t) => e(GITHUB_WEB_RPC_METHODS.addPRReviewComment, t),
		listLabels: (t) => e(GITHUB_WEB_RPC_METHODS.listLabels, t),
		listAssignableUsers: (t) => e(GITHUB_WEB_RPC_METHODS.listAssignableUsers, t),
		onWorkItemMutated: () => noopUnsubscribe,
		checkOrcaStarred: () => Promise.resolve(null),
		starOrca: () => Promise.resolve(!1),
		rateLimit: (t) => e(GITHUB_WEB_RPC_METHODS.rateLimit, t),
		listBindableAccounts: (t) => e(GITHUB_WEB_RPC_METHODS.listBindableAccounts, t),
		validateAccountBinding: (t) => e(GITHUB_WEB_RPC_METHODS.validateAccountBinding, t),
		diagnoseAuth: () => Promise.resolve({
			ok: !1,
			message: translate("auto.web.web.preload.api.31bfe8ae1a", "Unavailable in the web client.")
		}),
		listAccessibleProjects: (t) => e(GITHUB_WEB_RPC_METHODS.listAccessibleProjects, t),
		resolveProjectRef: (t) => e(GITHUB_WEB_RPC_METHODS.resolveProjectRef, t),
		listProjectViews: (t) => e(GITHUB_WEB_RPC_METHODS.listProjectViews, t),
		getProjectViewTable: (t) => e(GITHUB_WEB_RPC_METHODS.getProjectViewTable, t),
		projectWorkItemDetailsBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.projectWorkItemDetailsBySlug, t),
		updateProjectItemField: (t) => e(GITHUB_WEB_RPC_METHODS.updateProjectItemField, t),
		clearProjectItemField: (t) => e(GITHUB_WEB_RPC_METHODS.clearProjectItemField, t),
		updateIssueBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.updateIssueBySlug, t),
		updatePullRequestBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.updatePullRequestBySlug, t),
		addIssueCommentBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.addIssueCommentBySlug, t),
		updateIssueCommentBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.updateIssueCommentBySlug, t),
		deleteIssueCommentBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.deleteIssueCommentBySlug, t),
		listLabelsBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.listLabelsBySlug, t),
		listAssignableUsersBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.listAssignableUsersBySlug, t),
		listIssueTypesBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.listIssueTypesBySlug, t),
		updateIssueTypeBySlug: (t) => e(GITHUB_WEB_RPC_METHODS.updateIssueTypeBySlug, t)
	};
}
const GITLAB_WEB_RPC_METHODS = {
	diagnoseAuth: "gitlab.diagnoseAuth",
	rateLimit: "gitlab.rateLimit",
	listMRs: "gitlab.listMRs",
	listWorkItems: "gitlab.listWorkItems",
	listIssues: "gitlab.listIssues",
	createIssue: "gitlab.createIssue",
	updateIssue: "gitlab.updateIssue",
	addIssueComment: "gitlab.addIssueComment",
	listLabels: "gitlab.listLabels",
	todos: "gitlab.todos",
	workItemDetails: "gitlab.workItemDetails",
	closeMR: "gitlab.updateMRState",
	reopenMR: "gitlab.updateMRState",
	mergeMR: "gitlab.mergeMR",
	updateMR: "gitlab.updateMR",
	updateMRReviewers: "gitlab.updateMRReviewers",
	addMRComment: "gitlab.addMRComment",
	addMRInlineComment: "gitlab.addMRInlineComment",
	resolveMRDiscussion: "gitlab.resolveMRDiscussion",
	jobTrace: "gitlab.jobTrace",
	retryJob: "gitlab.retryJob",
	workItemByPath: "gitlab.workItemByPath"
};
function createGitLabApi() {
	let e = (e, t) => callRuntimeResult(e, mapRepoPathArg(t));
	return {
		viewer: () => Promise.resolve(null),
		diagnoseAuth: () => e(GITLAB_WEB_RPC_METHODS.diagnoseAuth),
		rateLimit: (t) => e(GITLAB_WEB_RPC_METHODS.rateLimit, t),
		projectSlug: () => Promise.resolve(null),
		mrForBranch: () => Promise.resolve(null),
		mr: () => Promise.resolve(null),
		listMRs: (t) => e(GITLAB_WEB_RPC_METHODS.listMRs, t),
		listWorkItems: (t) => e(GITLAB_WEB_RPC_METHODS.listWorkItems, t),
		issue: () => Promise.resolve(null),
		listIssues: (t) => e(GITLAB_WEB_RPC_METHODS.listIssues, t),
		createIssue: (t) => e(GITLAB_WEB_RPC_METHODS.createIssue, t),
		updateIssue: (t) => e(GITLAB_WEB_RPC_METHODS.updateIssue, t),
		addIssueComment: (t) => e(GITLAB_WEB_RPC_METHODS.addIssueComment, t),
		listLabels: (t) => e(GITLAB_WEB_RPC_METHODS.listLabels, t),
		listAssignableUsers: () => Promise.resolve([]),
		todos: (t) => e(GITLAB_WEB_RPC_METHODS.todos, t),
		workItemDetails: ({ repoOwnerExecutionHostId: t, ...n }) => e(GITLAB_WEB_RPC_METHODS.workItemDetails, n),
		closeMR: (t) => e(GITLAB_WEB_RPC_METHODS.closeMR, {
			...t,
			state: "closed"
		}),
		reopenMR: (t) => e(GITLAB_WEB_RPC_METHODS.reopenMR, {
			...t,
			state: "opened"
		}),
		mergeMR: (t) => e(GITLAB_WEB_RPC_METHODS.mergeMR, t),
		updateMR: async (t) => t.updates.readyForReview && !(await getRemoteRuntimeStatus().catch(() => null))?.capabilities?.includes("gitlab.updateMR.readyForReview.v1") ? {
			ok: !1,
			error: GITLAB_READY_FOR_REVIEW_UPDATE_REQUIRED_MESSAGE
		} : e(GITLAB_WEB_RPC_METHODS.updateMR, t),
		updateMRReviewers: (t) => e(GITLAB_WEB_RPC_METHODS.updateMRReviewers, t),
		addMRComment: (t) => e(GITLAB_WEB_RPC_METHODS.addMRComment, t),
		addMRInlineComment: (t) => e(GITLAB_WEB_RPC_METHODS.addMRInlineComment, t),
		resolveMRDiscussion: (t) => e(GITLAB_WEB_RPC_METHODS.resolveMRDiscussion, t),
		jobTrace: (t) => e(GITLAB_WEB_RPC_METHODS.jobTrace, t),
		retryJob: (t) => e(GITLAB_WEB_RPC_METHODS.retryJob, t),
		workItemByPath: (t) => e(GITLAB_WEB_RPC_METHODS.workItemByPath, t)
	};
}
function createPreflightApi() {
	let e = {
		git: { installed: !1 },
		gh: {
			installed: !1,
			authenticated: !1
		},
		glab: {
			installed: !1,
			authenticated: !1
		},
		bitbucket: {
			configured: !1,
			authenticated: !1,
			account: null
		},
		azureDevOps: {
			configured: !1,
			authenticated: !1,
			account: null,
			baseUrl: null,
			tokenConfigured: !1
		},
		gitea: {
			configured: !1,
			authenticated: !1,
			account: null,
			baseUrl: null,
			tokenConfigured: !1
		}
	}, t = {
		agents: [],
		addedPathSegments: [],
		shellHydrationOk: !1,
		pathSource: "sync_seed_only",
		pathFailureReason: "spawn_error"
	}, n = {
		wslAvailable: !1,
		wslDistros: [],
		pwshAvailable: !1,
		gitBashAvailable: !1,
		hostPlatform: null
	};
	return {
		check: async (t) => requireActiveEnvironmentOrNull() ? callRuntimeResult("preflight.check", t) : e,
		detectAgents: async () => requireActiveEnvironmentOrNull() ? callRuntimeResult("preflight.detectAgents").catch(() => []) : [],
		refreshAgents: () => requireActiveEnvironmentOrNull() ? callRuntimeResult("preflight.refreshAgents").then((e) => e).catch(() => t) : Promise.resolve(t),
		detectRemoteAgents: async (e) => requireActiveEnvironmentOrNull() ? callRuntimeResult("preflight.detectRemoteAgents", e).catch(() => []) : [],
		detectRemoteWindowsTerminalCapabilities: async (e) => requireActiveEnvironmentOrNull() ? callRuntimeResult("preflight.detectRemoteWindowsTerminalCapabilities", e).catch(() => n) : Promise.resolve(n)
	};
}
function createDeveloperPermissionsApi() {
	return {
		getStatus: () => Promise.resolve([]),
		request: ({ id: e }) => Promise.resolve({
			id: e,
			status: "unsupported",
			openedSystemSettings: !1
		}),
		openSettings: () => Promise.resolve(),
		testLocalNetworkConnection: ({ host: e, port: t }) => Promise.resolve({
			ok: !1,
			host: e,
			port: t,
			testedAt: Date.now(),
			failure: "unsupported"
		})
	};
}
function createComputerUsePermissionsApi() {
	return {
		getStatus: () => callRuntimeResult("computer.permissionsStatus", {}, 15e3),
		openSetup: (e) => callRuntimeResult("computer.permissions", e ?? {}, 15e3).catch(() => ({
			platform: getBrowserPlatform(),
			helperAppPath: null,
			openedSettings: !1,
			launchedHelper: !1,
			nextStep: "Computer-use permissions are managed on the Orca server."
		})),
		reset: () => Promise.resolve({
			platform: getBrowserPlatform(),
			helperAppPath: null,
			helperUnavailableReason: "web_client",
			bundleId: null,
			permissions: []
		})
	};
}
function createSkillsApi() {
	return {
		discover: (e) => callRuntimeResult("skills.discover", e, 15e3),
		freshnessInventory: () => Promise.resolve({
			schemaVersion: 1,
			installations: [],
			eligibleUpdateNames: [],
			scanIssues: [],
			scannedAt: Date.now()
		}),
		startUpdateRun: () => Promise.resolve({
			started: !1,
			reason: "invalid-names"
		}),
		cancelUpdateRun: () => Promise.resolve(),
		acknowledgeUpdateRun: () => Promise.resolve(),
		getUpdateRun: () => Promise.resolve({ state: "idle" }),
		prepareShare: () => Promise.reject(/* @__PURE__ */ Error("Skill publishing requires the desktop app.")),
		publishShare: () => Promise.reject(/* @__PURE__ */ Error("Skill publishing requires the desktop app.")),
		cancelShare: () => Promise.resolve(),
		releaseShare: () => Promise.resolve(),
		resolveShare: () => Promise.reject(/* @__PURE__ */ Error("Skill share links require the desktop app.")),
		installShare: () => Promise.reject(/* @__PURE__ */ Error("Skill installation requires the desktop app.")),
		installBundleShare: () => Promise.reject(/* @__PURE__ */ Error("Skill installation requires the desktop app.")),
		installPackageVersion: () => Promise.reject(/* @__PURE__ */ Error("Skill installation requires the desktop app.")),
		installBundlePackageVersion: () => Promise.reject(/* @__PURE__ */ Error("Skill installation requires the desktop app.")),
		cancelInstall: () => Promise.resolve({ cancelled: !1 }),
		previewInstall: () => Promise.reject(/* @__PURE__ */ Error("Skill installation requires the desktop app.")),
		previewBundleInstall: () => Promise.reject(/* @__PURE__ */ Error("Skill installation requires the desktop app.")),
		removeInstall: () => Promise.reject(/* @__PURE__ */ Error("Skill installation requires the desktop app.")),
		deleteSupported: async () => (await getRemoteRuntimeStatus().catch(() => null))?.capabilities?.includes(SKILL_DELETE_CAPABILITY) === !0,
		previewDelete: (e) => callRuntimeResult("skills.previewDelete", e, 6e4),
		delete: (e) => callRuntimeResult("skills.delete", e, 5 * 6e4),
		listManagedInstalls: () => Promise.reject(/* @__PURE__ */ Error("Skill installation requires the desktop app.")),
		getPackage: () => Promise.reject(/* @__PURE__ */ Error("Skill installation requires the desktop app.")),
		listOwnedShares: () => Promise.reject(/* @__PURE__ */ Error("Skill package management requires the desktop app.")),
		revokeShare: () => Promise.reject(/* @__PURE__ */ Error("Skill package management requires the desktop app.")),
		deletePackageVersion: () => Promise.reject(/* @__PURE__ */ Error("Skill package management requires the desktop app.")),
		deletePackage: () => Promise.reject(/* @__PURE__ */ Error("Skill package management requires the desktop app.")),
		listWslDistros: () => Promise.resolve([]),
		onInstallProgress: () => () => {},
		onShareProgress: () => () => {},
		onUpdateRun: () => () => {}
	};
}
const WEB_KEYBINDING_PLATFORMS = [
	"darwin",
	"linux",
	"win32"
];
function isJsonObject(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function normalizeStoredWebOverrides(e, t, n) {
	if (e === void 0) return {};
	if (!isJsonObject(e)) return n.push({
		severity: "error",
		section: t,
		message: translate("auto.web.web.preload.api.d2e43e426a", "{{value0}} must be an object.", { value0: t })
	}), {};
	let r = {};
	for (let [i, a] of Object.entries(e)) {
		if (!isKeybindingActionId(i)) {
			n.push({
				severity: "warning",
				section: t,
				actionId: i,
				message: translate("auto.web.web.preload.api.36761d9604", "Unknown keybinding action \"{{value0}}\" was ignored.", { value0: i })
			});
			continue;
		}
		if (!Array.isArray(a) || !a.every((e) => typeof e == "string")) {
			n.push({
				severity: "error",
				section: t,
				actionId: i,
				message: translate("auto.web.web.preload.api.10898045f3", "Shortcut for \"{{value0}}\" was ignored: Use a string array.", { value0: i })
			});
			continue;
		}
		let e = normalizeKeybindingArrayForAction(i, a);
		if (!Array.isArray(e)) {
			let r = e.ok ? "Unable to parse shortcut." : e.error;
			n.push({
				severity: "error",
				section: t,
				actionId: i,
				message: translate("auto.web.web.preload.api.76122208ca", "Shortcut for \"{{value0}}\" was ignored: {{value1}}", {
					value0: i,
					value1: r
				})
			});
			continue;
		}
		r[i] = e;
	}
	return r;
}
function normalizeWebPlatformOverrides(e, t) {
	if (e === void 0) return {};
	if (!isJsonObject(e)) return t.push({
		severity: "error",
		section: "platforms",
		message: translate("auto.web.web.preload.api.0a69fcd8bc", "platforms must be an object with darwin, linux, or win32 sections.")
	}), {};
	let n = {};
	for (let [r, i] of Object.entries(e)) {
		if (!WEB_KEYBINDING_PLATFORMS.includes(r)) {
			t.push({
				severity: "warning",
				section: `platforms.${r}`,
				message: translate("auto.web.web.preload.api.32f15bdb0f", "Unknown platform \"{{value0}}\" was ignored.", { value0: r })
			});
			continue;
		}
		n[r] = normalizeStoredWebOverrides(i, `platforms.${r}`, t);
	}
	return n;
}
function removeConflictingWebOverrides(e, t, n) {
	let r = { ...t };
	for (let t = 0; t < 20; t++) {
		let t = findKeybindingConflicts(e, r), i = /* @__PURE__ */ new Set();
		for (let e of t) for (let t of e.actionIds) Object.hasOwn(r, t) && i.add(t);
		if (i.size === 0) return r;
		for (let e of i) delete r[e];
		n.push({
			severity: "error",
			message: translate("auto.web.web.preload.api.52bee9d8a0", "Conflicting custom shortcuts were ignored: {{value0}}.", { value0: Array.from(i).map((e) => e).join(", ") })
		});
	}
	return r;
}
const webKeybindingListeners = /* @__PURE__ */ new Set();
function createEmptyWebKeybindingDocument() {
	return {
		version: 1,
		keybindings: {},
		platforms: {
			darwin: {},
			linux: {},
			win32: {}
		}
	};
}
function getWebKeybindingPlatform() {
	return getKeybindingPlatform(getBrowserPlatform());
}
function readWebKeybindingDocument() {
	let e = readJson(KEYBINDINGS_STORAGE_KEY, createEmptyWebKeybindingDocument());
	return {
		version: 1,
		keybindings: isJsonObject(e.keybindings) ? e.keybindings : {},
		platforms: isJsonObject(e.platforms) ? e.platforms : {}
	};
}
function getWebKeybindingSnapshot() {
	let e = getWebKeybindingPlatform(), t = [], n = readWebKeybindingDocument(), r = normalizeStoredWebOverrides(n.keybindings, "keybindings", t), i = normalizeWebPlatformOverrides(n.platforms, t), a = removeConflictingWebOverrides(e, {
		...r,
		...i[e]
	}, t);
	return {
		path: "Browser local storage",
		platform: e,
		exists: window.localStorage.getItem(KEYBINDINGS_STORAGE_KEY) !== null,
		overrides: a,
		commonOverrides: r,
		platformOverrides: i,
		diagnostics: t
	};
}
function writeWebKeybindingAction(e, t) {
	if (!isKeybindingActionId(e)) throw Error(`Unknown keybinding action "${String(e)}".`);
	let n = t === null ? null : normalizeKeybindingArrayForAction(e, t);
	if (n !== null && !Array.isArray(n)) throw Error(n.ok ? "Unable to parse shortcut." : n.error);
	let r = getWebKeybindingPlatform(), i = getWebKeybindingSnapshot(), a = { ...i.overrides };
	n === null ? delete a[e] : a[e] = n;
	let o = findKeybindingConflicts(r, a).find((t) => t.actionIds.includes(e));
	if (o) throw Error(`${formatKeybindingList([o.binding], r)} conflicts with another shortcut.`);
	let s = { ...i.platformOverrides[r] };
	n === null ? delete s[e] : s[e] = n, writeJson(KEYBINDINGS_STORAGE_KEY, {
		version: 1,
		keybindings: i.commonOverrides,
		platforms: {
			...i.platformOverrides,
			darwin: i.platformOverrides.darwin ?? {},
			linux: i.platformOverrides.linux ?? {},
			win32: i.platformOverrides.win32 ?? {},
			[r]: s
		}
	});
	let c = getWebKeybindingSnapshot();
	return notifyWebKeybindingListeners(c), c;
}
function notifyWebKeybindingListeners(e) {
	for (let t of webKeybindingListeners) t(e);
}
function createWebKeybindingsApi() {
	return {
		get: () => Promise.resolve(getWebKeybindingSnapshot()),
		ensureFile: () => Promise.resolve(getWebKeybindingSnapshot()),
		setAction: async ({ actionId: e, bindings: t }) => writeWebKeybindingAction(e, t),
		reload: () => {
			let e = getWebKeybindingSnapshot();
			return notifyWebKeybindingListeners(e), Promise.resolve(e);
		},
		openFile: () => Promise.resolve(getWebKeybindingSnapshot()),
		revealFile: () => Promise.resolve(getWebKeybindingSnapshot()),
		onChanged: (e) => {
			webKeybindingListeners.add(e);
			let t = (t) => {
				t.key === "orca.web.keybindings.v1" && e(getWebKeybindingSnapshot());
			};
			return window.addEventListener("storage", t), () => {
				webKeybindingListeners.delete(e), window.removeEventListener("storage", t);
			};
		}
	};
}
function createMacosTccPromptsApi() {
	return {
		onThreshold: () => noopUnsubscribe,
		consumePending: () => Promise.resolve(null),
		acknowledgePending: () => Promise.resolve(),
		releasePending: () => Promise.resolve(),
		dismiss: () => Promise.resolve()
	};
}
function createEmptyMemorySnapshot() {
	let e = {
		cpu: 0,
		memory: 0
	};
	return {
		app: {
			...e,
			main: e,
			renderer: e,
			other: e,
			history: []
		},
		worktrees: [],
		host: {
			totalMemory: 0,
			freeMemory: 0,
			availableMemory: 0,
			availableMemorySource: "free-memory",
			usedMemory: 0,
			memoryUsagePercent: 0,
			cpuCoreCount: navigator.hardwareConcurrency || 1,
			loadAverage1m: 0
		},
		processMemoryMetric: getBrowserPlatform() === "win32" ? "working-set" : "rss",
		totalCpu: 0,
		totalMemory: 0,
		collectedAt: Date.now()
	};
}
function createWebMobileApi() {
	return { mobile: {
		listNetworkInterfaces: () => Promise.resolve({ interfaces: [] }),
		getPairingQR: () => Promise.resolve({ available: !1 }),
		getWindowsFirewallStatus: () => Promise.resolve({ supported: !1 }),
		repairWindowsFirewall: () => Promise.resolve({
			ok: !1,
			reason: "unsupported"
		}),
		openWindowsNetworkSettings: () => Promise.resolve(!1),
		getRuntimePairingUrl: () => Promise.resolve({ available: !1 }),
		listDevices: () => Promise.resolve({ devices: [] }),
		revokeDevice: () => Promise.resolve({ revoked: !1 }),
		listRuntimeAccessGrants: () => Promise.resolve({ grants: [] }),
		revokeRuntimeAccess: () => Promise.resolve({ revoked: !1 }),
		isWebSocketReady: () => Promise.resolve({
			ready: !!webRuntimeState.activeEnvironment,
			endpoint: null
		}),
		getRelayStatus: () => Promise.resolve({ status: "offline" }),
		onRelayStatusChanged: () => noopUnsubscribe,
		consumePendingUnpairedDeviceAuthFailure: () => Promise.resolve(!1),
		onUnpairedDeviceAuthFailure: () => noopUnsubscribe
	} };
}
function buildNativeChatSubscriptionId(e, t) {
	return `${e}:${t}`;
}
function buildNativeChatUnsubscribe(e, t, n) {
	return {
		method: "nativeChat.unsubscribe",
		params: { subscriptionId: n ?? buildNativeChatSubscriptionId(e, t) }
	};
}
function createWebNativeChatApi() {
	return {
		readSession: async (e, t, n, r) => parseRuntimeNativeChatReadSessionResult(await callRuntimeResult("nativeChat.readSession", {
			agent: e,
			sessionId: t,
			limit: n,
			transcriptPath: r
		})),
		subscribe: (e, t) => {
			let n = requireActiveEnvironmentOrNull();
			if (!n) return t({
				type: "snapshot",
				messages: [],
				hasMore: !1,
				error: translate("components.native-chat.state.pairHost", "Pair a host to view agent chat history.")
			}), () => {};
			let r = null, i = !1, a = !1;
			return getClientForEnvironment(n).subscribe("nativeChat.subscribe", {
				agent: e.agent,
				sessionId: e.sessionId,
				subscriptionId: e.subscriptionId,
				transcriptPath: e.transcriptPath,
				limit: e.limit,
				capabilities: { transcriptPending: 1 }
			}, { onResponse: (n) => {
				if (i) return;
				if (!n.ok) {
					a || (a = !0, t({
						type: "snapshot",
						messages: [],
						hasMore: !1,
						error: n.error.message
					}));
					return;
				}
				let r = n.result, o = parseRuntimeNativeChatTurnLifecycle(r?.lifecycle), s = r?.pending === !0;
				(r?.type === "appended" || r?.type === "snapshot" || r?.type === "replacement") && Array.isArray(r.messages) ? a ? r.type === "snapshot" ? t({
					type: "snapshot",
					messages: r.messages,
					hasMore: r.hasMore ?? !1,
					...r.error ? { error: r.error } : {},
					...o ? { lifecycle: o } : {},
					...s ? { pending: !0 } : {}
				}) : t(r.type === "replacement" ? {
					type: "replacement",
					messages: r.messages,
					hasMore: r.hasMore ?? !1,
					...o ? { lifecycle: o } : {}
				} : {
					type: "appended",
					messages: r.messages,
					...o ? { lifecycle: o } : {}
				}) : (s || (a = !0), t({
					type: "snapshot",
					messages: r.messages,
					hasMore: r.hasMore ?? r.messages.length >= (e.limit ?? 300),
					...r.error ? { error: r.error } : {},
					...o ? { lifecycle: o } : {},
					...s ? { pending: !0 } : {}
				})) : a || (a = !0, t({
					type: "snapshot",
					messages: [],
					hasMore: !1,
					...r?.error ? { error: r.error } : {}
				}));
			} }, { buildUnsubscribe: () => buildNativeChatUnsubscribe(e.agent, e.sessionId, e.subscriptionId) }).then((e) => {
				i ? e.unsubscribe() : r = e;
			}).catch((e) => {
				!i && !a && (a = !0, t({
					type: "snapshot",
					messages: [],
					hasMore: !1,
					error: e instanceof Error ? e.message : String(e)
				}));
			}), () => {
				i = !0, r?.unsubscribe();
			};
		}
	};
}
function createNotificationsApi() {
	return {
		getDesktopAwayState: async () => void 0,
		dispatch: () => Promise.resolve({
			delivered: !1,
			reason: "not-supported"
		}),
		dismiss: () => Promise.resolve({ dismissed: 0 }),
		openSystemSettings: () => Promise.resolve(),
		getPermissionStatus: () => Promise.resolve({
			supported: !1,
			platform: getBrowserPlatform(),
			requested: !1
		}),
		probeDelivery: () => Promise.resolve({
			state: "unsupported",
			authoritative: !1
		}),
		playSound: () => Promise.resolve({
			played: !1,
			reason: "missing-path"
		})
	};
}
function getStoredOnboarding() {
	if (window.localStorage.getItem("orca.web.onboarding.v1")) {
		let e = readJson(ONBOARDING_STORAGE_KEY, getDefaultOnboardingState());
		if (e.checklist.dismissed) return e;
		let t = closeWebOnboarding(e);
		return writeJson(ONBOARDING_STORAGE_KEY, t), t;
	}
	let e = closeWebOnboarding(getDefaultOnboardingState());
	return writeJson(ONBOARDING_STORAGE_KEY, e), e;
}
function closeWebOnboarding(e) {
	return {
		...e,
		flowVersion: 4,
		closedAt: Date.now(),
		outcome: "dismissed",
		checklist: {
			...e.checklist,
			dismissed: !0
		}
	};
}
function createWebOnboardingApi() {
	return { onboarding: {
		get: () => Promise.resolve(getStoredOnboarding()),
		update: async (e) => {
			let t = getStoredOnboarding(), n = {
				...t,
				...e,
				flowVersion: 4,
				checklist: {
					...t.checklist,
					...e.checklist
				}
			};
			return writeJson(ONBOARDING_STORAGE_KEY, n), n;
		}
	} };
}
function createWebOrcaProfilesApi() {
	let e = () => Promise.resolve({
		activeProfileId: DEFAULT_LOCAL_ORCA_PROFILE_ID,
		configured: !1,
		state: "unconfigured",
		persistence: "none",
		setupMessage: "Orca Cloud sign-in is not available in the browser fallback."
	});
	return { orcaProfiles: {
		list: () => Promise.resolve({
			activeProfileId: DEFAULT_LOCAL_ORCA_PROFILE_ID,
			profiles: [createDefaultLocalOrcaProfile(0)],
			multiProfileUi: !1
		}),
		authStatus: e,
		onAuthStatusChanged: () => noopUnsubscribe,
		createLocal: () => Promise.resolve({
			activeProfileId: DEFAULT_LOCAL_ORCA_PROFILE_ID,
			profiles: [createDefaultLocalOrcaProfile(0)],
			profile: createDefaultLocalOrcaProfile(0)
		}),
		createCloudLinked: async () => ({
			status: "unconfigured",
			auth: await e()
		}),
		switchProfile: () => Promise.resolve({ status: "already-active" }),
		transferProject: (e) => Promise.resolve({
			status: "duplicate-target",
			sourceProfileId: e.sourceProfileId,
			targetProfileId: e.targetProfileId,
			sourceRepoId: e.repoId,
			duplicateRepoId: e.repoId
		}),
		findProjectProfiles: async () => ({ projects: [] }),
		connectCurrent: async () => ({
			status: "unconfigured",
			auth: await e()
		}),
		refreshAuth: async () => ({
			status: "unconfigured",
			auth: await e()
		}),
		signOutCurrent: async () => ({
			status: "signed-out",
			auth: await e(),
			activeProfileId: DEFAULT_LOCAL_ORCA_PROFILE_ID,
			profiles: [createDefaultLocalOrcaProfile(0)]
		}),
		selectOrg: async () => ({
			status: "unconfigured",
			auth: await e()
		}),
		orgMembersList: async () => ({ status: "unconfigured" }),
		orgMemberInvite: async () => ({ status: "unconfigured" }),
		orgInviteRevoke: async () => ({ status: "unconfigured" }),
		orgMemberChangeRole: async () => ({ status: "unconfigured" }),
		orgMemberRemove: async () => ({ status: "unconfigured" })
	} };
}
function createWebPlatformApi() {
	return { platform: { get: () => ({
		platform: getBrowserPlatform(),
		osRelease: "",
		arch: "",
		shell: "",
		displayServer: null
	}) } };
}
function createRateLimitsApi() {
	let e = createEmptyRateLimitState();
	return {
		get: () => Promise.resolve(e),
		refresh: () => Promise.resolve(e),
		refreshCodexForTarget: () => Promise.resolve(e),
		consumeCodexResetCredit: () => Promise.resolve({
			outcome: "noCredit",
			state: e
		}),
		refreshClaudeForTarget: () => Promise.resolve(e),
		setPollingInterval: () => Promise.resolve(),
		fetchInactiveClaudeAccounts: () => Promise.resolve(),
		fetchInactiveCodexAccounts: () => Promise.resolve(),
		refreshMiniMax: () => Promise.resolve(e),
		refreshGrok: () => Promise.resolve(e),
		onUpdate: () => noopUnsubscribe
	};
}
function createReposApi() {
	return {
		list: async () => {
			let e = await callRuntimeResultWithOwner("repo.list");
			return e.result.repos.map((t) => withRuntimeRepoOwner(t, e.hostId));
		},
		add: async ({ path: e, kind: t, displayName: n }) => {
			invalidateRuntimeWorktreeCaches();
			let r = await callRuntimeResultWithOwner("repo.add", {
				path: e,
				kind: t,
				displayName: n
			});
			return withRuntimeRepoMutationOwner(r.result, r.hostId);
		},
		remove: async ({ repoId: e }) => {
			await callRuntimeResult("repo.rm", { repo: e }), invalidateRuntimeWorktreeCaches();
		},
		removeForHost: () => {
			throw Error("Forgetting a host is unavailable in paired web clients.");
		},
		reorder: async ({ orderedIds: e }) => callRuntimeResult("repo.reorder", { orderedIds: e }),
		reorderForHost: async () => {
			throw Error("Host-scoped project reordering is unavailable in paired web clients.");
		},
		update: async ({ repoId: e, updates: t }) => {
			let n = await callRuntimeResultWithOwner("repo.update", {
				repo: e,
				updates: t
			});
			return withRuntimeRepoOwner(n.result.repo, n.hostId);
		},
		pickFolder: () => Promise.resolve(null),
		pickFolders: () => Promise.resolve([]),
		pickDirectory: () => Promise.resolve(null),
		clone: async ({ url: e, destination: t }) => {
			invalidateRuntimeWorktreeCaches();
			let n = await callRuntimeResultWithOwner("repo.clone", {
				url: e,
				destination: t
			}, 10 * 6e4);
			return withRuntimeRepoOwner(n.result.repo, n.hostId);
		},
		cloneRemote: async () => {
			throw Error("SSH clone is unavailable in paired web clients.");
		},
		createRemote: async () => {
			throw Error("Creating projects on SSH hosts is unavailable in paired web clients.");
		},
		cloneAbort: () => Promise.resolve(),
		addRemote: async ({ remotePath: e, displayName: t, kind: n }) => {
			invalidateRuntimeWorktreeCaches();
			let r = await callRuntimeResultWithOwner("repo.add", {
				path: e,
				kind: n
			}), i = { repo: withRuntimeRepoOwner(r.result.repo, r.hostId) };
			return t ? (assertActiveEnvironment(r.environmentId), { repo: await createReposApi().update({
				repoId: i.repo.id,
				updates: { displayName: t }
			}) }) : i;
		},
		create: async ({ parentPath: e, name: t, kind: n }) => {
			invalidateRuntimeWorktreeCaches();
			let r = await callRuntimeResultWithOwner("repo.create", {
				parentPath: e,
				name: t,
				kind: n
			});
			return withRuntimeRepoMutationOwner(r.result, r.hostId);
		},
		isGitAvailable: async () => (await callRuntimeResult("repo.gitAvailable")).available,
		getDefaultCreateProjectParent: async () => getDefaultCreateProjectParent((await callRuntimeResult("files.browseServerDir", { path: "~" })).resolvedPath),
		onCloneProgress: () => noopUnsubscribe,
		getGitUsername: () => Promise.resolve(""),
		getBaseRefDefault: async ({ repoId: e }) => callRuntimeResult("repo.baseRefDefault", { repo: e }),
		searchBaseRefs: async ({ repoId: e, query: t, limit: n }) => (await callRuntimeResult("repo.searchRefs", {
			repo: e,
			query: t,
			limit: n
		})).refs,
		searchBaseRefDetails: async ({ repoId: e, query: t, limit: n }) => {
			let r = await callRuntimeResult("repo.searchRefs", {
				repo: e,
				query: t,
				limit: n
			});
			return r.refDetails ?? r.refs.map(legacyBaseRefSearchResult);
		},
		onChanged: () => noopUnsubscribe
	};
}
function createWebRuntimeApi() {
	return {
		syncWindowGraph: async (e) => getRemoteRuntimeStatus(),
		getStatus: () => getRemoteRuntimeStatus(),
		call: ({ method: e, params: t }) => callRuntimeEnvelope(e, t),
		subscribe: async ({ method: e, params: t }, n) => {
			let r = requireActiveEnvironment(), i = await getClientForEnvironment(r).subscribe(e, t, { onResponse: n });
			if (manuallyDisconnectedEnvironmentIds.has(r.id)) throw i.unsubscribe(), Error("runtime_manually_disconnected");
			return i;
		},
		getTerminalFitOverrides: () => Promise.resolve([]),
		getTerminalDrivers: () => Promise.resolve([]),
		getBrowserDrivers: () => Promise.resolve([]),
		getBrowserRemoteViewerPages: () => Promise.resolve([]),
		getClientHostedBrowserRows: () => Promise.resolve([]),
		restoreTerminalFit: () => Promise.resolve({ restored: !1 }),
		reclaimBrowserForDesktop: () => Promise.resolve({ reclaimed: !1 }),
		onTerminalFitOverrideChanged: () => noopUnsubscribe,
		onTerminalDriverChanged: () => noopUnsubscribe,
		onNativeChatLaunchDraftResolved: () => noopUnsubscribe,
		onBrowserDriverChanged: () => noopUnsubscribe,
		onBrowserRemoteViewersChanged: () => noopUnsubscribe,
		onClientHostedBrowserRowsChanged: () => noopUnsubscribe
	};
}
var RUNTIME_GRAPH_STATUSES = new Set([
	"ready",
	"reloading",
	"unavailable"
]);
function isNonNegativeSafeInteger(e) {
	return Number.isSafeInteger(e) && Number(e) >= 0;
}
function hasValidRuntimeStatus(e) {
	return typeof e.runtimeId == "string" && e.runtimeId.length > 0 && isNonNegativeSafeInteger(e.rendererGraphEpoch) && typeof e.graphStatus == "string" && RUNTIME_GRAPH_STATUSES.has(e.graphStatus) && (e.authoritativeWindowId === null || isNonNegativeSafeInteger(e.authoritativeWindowId)) && isNonNegativeSafeInteger(e.liveTabCount) && isNonNegativeSafeInteger(e.liveLeafCount) && (e.deviceScope === void 0 || e.deviceScope === "mobile" || e.deviceScope === "runtime") && (e.capabilities === void 0 || Array.isArray(e.capabilities) && e.capabilities.every((e) => typeof e == "string"));
}
function verifyRemotePairingRuntimeStatus(e) {
	if (typeof e != "object" || !e) return {
		ok: !1,
		kind: "connection-interrupted",
		message: "The remote host returned an invalid status response."
	};
	let t = e;
	if (t.deviceScope === "mobile") return {
		ok: !1,
		kind: "access-link-invalid",
		message: "This link grants mobile-only access. Generate a link for another Orca client."
	};
	if ([
		t.runtimeProtocolVersion,
		t.protocolVersion,
		t.minCompatibleRuntimeClientVersion,
		t.minCompatibleMobileVersion
	].some((e) => e !== void 0 && (!Number.isSafeInteger(e) || Number(e) < 0))) return {
		ok: !1,
		kind: "connection-interrupted",
		message: "The remote host returned an invalid protocol version."
	};
	let n = evaluateRuntimeCompat({
		clientProtocolVersion: 3,
		minCompatibleServerProtocolVersion: 2,
		serverProtocolVersion: t.runtimeProtocolVersion ?? t.protocolVersion,
		serverMinCompatibleClientProtocolVersion: t.minCompatibleRuntimeClientVersion ?? t.minCompatibleMobileVersion
	});
	return n.kind === "blocked" ? {
		ok: !1,
		kind: "protocol-incompatible",
		message: n.reason === "client-too-old" ? "Update this Orca client before adding the remote host." : "Update Orca on the remote host before adding it."
	} : hasValidRuntimeStatus(t) ? {
		ok: !0,
		runtimeStatus: e
	} : {
		ok: !1,
		kind: "connection-interrupted",
		message: "The remote host returned an invalid status response."
	};
}
function createRuntimeEnvironmentsApi() {
	return {
		onStatusChanged: subscribeWebRuntimeStatus,
		getStatusSnapshots: async () => readWebRuntimeStatusSnapshots(),
		list: async () => {
			let e = requireActiveEnvironmentOrNull();
			return e ? [redactStoredWebRuntimeEnvironment(e)] : [];
		},
		addFromPairingCode: async ({ name: e, pairingCode: t }) => {
			let n = parseWebPairingInput(t);
			if (!n) throw Error("Invalid Orca pairing code.");
			let r = webRuntimeState.activeEnvironment;
			return closeActiveRuntimeClients(), webRuntimeState.activeEnvironment = createStoredWebRuntimeEnvironment({
				name: e,
				offer: n,
				previousEnvironment: r
			}), manuallyDisconnectedEnvironmentIds.clear(), saveStoredWebRuntimeEnvironment(webRuntimeState.activeEnvironment), { environment: redactStoredWebRuntimeEnvironment(webRuntimeState.activeEnvironment) };
		},
		verifyAndAddFromPairingCode: async ({ name: e, pairingCode: t, allowLoopback: n }) => {
			let r = parseHostAccessLink(t);
			if (!r.ok) return {
				ok: !1,
				kind: "access-link-invalid",
				message: translateHostAccessLinkError(r.kind)
			};
			if (r.value.endpointKind === "loopback" && !n) return {
				ok: !1,
				kind: "host-unreachable",
				message: translate("auto.web.webPreloadApi.loopbackPairingBlocked", "This access link points back to this device.")
			};
			let i = null, a;
			try {
				i = new WebRuntimeClient(r.value.pairing);
				let e = await i.call("status.get", void 0, { timeoutMs: 15e3 });
				if (!e.ok) return {
					ok: !1,
					kind: "connection-interrupted",
					message: e.error.message
				};
				let t = verifyRemotePairingRuntimeStatus(e.result);
				if (!t.ok) return t;
				a = t.runtimeStatus;
			} catch (e) {
				return e instanceof Error && e.message.startsWith("Invalid public key") ? {
					ok: !1,
					kind: "access-link-invalid",
					message: translate("auto.web.webPreloadApi.remotePairingInvalidDetails", "This access link contains invalid connection details.")
				} : isWebRuntimeUnauthorizedError(e) || e instanceof Error && e.message.startsWith("Unauthorized.") ? {
					ok: !1,
					kind: "access-link-invalid",
					message: e.message
				} : {
					ok: !1,
					kind: "host-unreachable",
					message: translate("auto.web.webPreloadApi.remotePairingUnreachable", "Cannot reach Orca at {{endpoint}}.", { endpoint: r.value.displayEndpoint })
				};
			} finally {
				i?.close();
			}
			let o = r.value.endpointKind === "loopback" && n === !0, s = {
				...createStoredWebRuntimeEnvironment({
					name: e,
					offer: r.value.pairing,
					previousEnvironment: webRuntimeState.activeEnvironment,
					...o ? { connectionDependency: "ssh-tunnel" } : {}
				}),
				...a.pairedDeviceId ? { pairedDeviceId: a.pairedDeviceId } : {}
			};
			try {
				saveStoredWebRuntimeEnvironment(s);
			} catch {
				return {
					ok: !1,
					kind: "environment-save-failed",
					message: translate("auto.web.webPreloadApi.remotePairingSaveFailed", "Orca verified the host but could not save it. Check browser storage and try again.")
				};
			}
			return manuallyDisconnectedEnvironmentIds.clear(), closeActiveRuntimeClients(), webRuntimeState.activeEnvironment = s, getClientForEnvironment(s).statusOwner?.acceptVerified({
				id: "status.get",
				ok: !0,
				result: a,
				_meta: { runtimeId: a.runtimeId }
			}), {
				ok: !0,
				environment: redactStoredWebRuntimeEnvironment(s),
				runtimeStatus: a
			};
		},
		resolve: async ({ selector: e }) => redactStoredWebRuntimeEnvironment(resolveEnvironment(e)),
		remove: async ({ selector: e }) => {
			let t = resolveEnvironment(e);
			return webRuntimeState.activeEnvironment?.id === t.id && removeActiveRuntimeEnvironment(), manuallyDisconnectedEnvironmentIds.delete(t.id), { removed: redactStoredWebRuntimeEnvironment(t) };
		},
		disconnect: async ({ selector: e }) => {
			let t = resolveEnvironment(e);
			return webRuntimeState.activeEnvironment?.id === t.id && (manuallyDisconnectedEnvironmentIds.add(t.id), disconnectActiveRuntimeEnvironment()), { disconnected: redactStoredWebRuntimeEnvironment(t) };
		},
		connect: ({ selector: e, timeoutMs: t }) => {
			let n = resolveEnvironment(e);
			return manuallyDisconnectedEnvironmentIds.delete(n.id), closeActiveRuntimeClients(), callEnvironmentEnvelope(n.id, "status.get", void 0, t);
		},
		getStatus: ({ selector: e, timeoutMs: t, observeOnly: n }) => n ? observeWebRuntimeStatus(e, t) : callEnvironmentEnvelope(e, "status.get", void 0, t),
		retryControlConnection: () => Promise.resolve(),
		prepareBrowserClientHostPlacement: async () => ({ kind: "server" }),
		call: ({ selector: e, method: t, params: n, timeoutMs: r }) => callEnvironmentEnvelope(e, t, n, r),
		subscribe: async ({ selector: e, method: t, params: n, timeoutMs: r }, i) => {
			let a = resolveEnvironment(e), o = await getClientForEnvironment(a).subscribe(t, n, i, { timeoutMs: r });
			if (manuallyDisconnectedEnvironmentIds.has(a.id)) throw o.unsubscribe(), Error("runtime_manually_disconnected");
			return o;
		}
	};
}
function createWebSettingsApi() {
	return {
		settings: {
			get: async () => getRuntimeBackedStoredSettings(),
			getSync: () => settingsForActiveVisibilityOwner(getStoredSettings()),
			set: async (e) => {
				let t = { ...e }, n = requireActiveEnvironmentOrNull();
				delete t.activeRuntimeEnvironmentId, "worktreeVisibilityDefaults" in t && n && n.id !== webRuntimeState.worktreeVisibilityDefaultsRuntimeEnvironmentId && delete t.worktreeVisibilityDefaults, "worktreeVisibilityDefaults" in t && (t.worktreeVisibilityDefaults = {
					...settingsForActiveVisibilityOwner(getStoredSettings()).worktreeVisibilityDefaults,
					...t.worktreeVisibilityDefaults
				}), "computerAwakeMode" in t ? Object.assign(t, computerAwakeSettingsForMode(normalizeComputerAwakeMode(t.computerAwakeMode, t.keepComputerAwakeWhileAgentsRun))) : "keepComputerAwakeWhileAgentsRun" in t && Object.assign(t, computerAwakeSettingsForMode(t.keepComputerAwakeWhileAgentsRun ? "auto" : "off")), "autoRenameBranchFromWorkDefaultedOn" in t && (t.autoRenameBranchFromWorkDefaultedOn = !0), "terminalCursorStyle" in t && Object.assign(t, normalizeTerminalCursorStyleDefault({ terminalCursorStyle: t.terminalCursorStyle }, { preserveExplicitValue: !0 }));
				let r = { ...t };
				n && delete r.worktreeVisibilityDefaults;
				let i = mergeSettings(getStoredSettings(), r, { preserveAutoRenameBranchFromWorkUpdate: "autoRenameBranchFromWork" in t });
				return writeStoredSettings(i), settingsForActiveVisibilityOwner(await syncRuntimeBackedSettings(t, i));
			},
			setActiveRuntimeEnvironmentPreference: async ({ environmentId: e }) => {
				let t = e?.trim() || null, n = t ? resolveEnvironment(t).id : null, r = mergeSettings(getStoredSettings(), { activeRuntimeEnvironmentId: n });
				return writeStoredSettings(r, n), r;
			},
			updatePRBotAuthorOverride: (e) => updateRuntimePRBotAuthorOverride(e),
			listFonts: () => Promise.resolve([]),
			onChanged: () => noopUnsubscribe
		},
		agentAwake: {
			getStatus: async () => {
				let e = getStoredSettings();
				return {
					mode: normalizeComputerAwakeMode(e.computerAwakeMode, e.keepComputerAwakeWhileAgentsRun),
					active: !1
				};
			},
			onChanged: () => noopUnsubscribe
		}
	};
}
async function pathExistsOnRuntime(e) {
	try {
		return await resolveRuntimeFilePath(e), !0;
	} catch {
		return !1;
	}
}
function createShellApi() {
	let e = { ok: !0 };
	return {
		openPath: (e) => Promise.resolve(window.open(e, "_blank", "noopener,noreferrer")),
		openInFileManager: () => Promise.resolve(e),
		openInExternalEditor: () => Promise.resolve(e),
		openUrl: (e) => Promise.resolve(window.open(e, "_blank", "noopener,noreferrer")),
		openFilePath: () => Promise.resolve(!1),
		openFileUri: (e) => Promise.resolve(window.open(e, "_blank", "noopener,noreferrer")),
		pathExists: async (e) => pathExistsOnRuntime(e),
		pathsExist: (e) => Promise.all(e.map((e) => pathExistsOnRuntime(e))),
		pickAttachment: () => Promise.resolve(null),
		pickImage: () => Promise.resolve(null),
		pickRepoIconImage: () => Promise.resolve(null),
		pickAudio: () => Promise.resolve(null),
		pickDirectory: () => Promise.resolve(null),
		copyFile: () => Promise.resolve()
	};
}
function createWebStarNagApi() {
	return { starNag: {
		onShow: () => noopUnsubscribe,
		onHide: () => noopUnsubscribe,
		dismiss: () => Promise.resolve(),
		later: () => Promise.resolve(),
		complete: () => Promise.resolve(),
		disable: () => Promise.resolve(),
		openWeb: () => Promise.resolve(),
		starOrca: () => Promise.resolve(!1),
		forceShow: () => Promise.resolve(),
		agentValueMoment: () => Promise.resolve({ status: "skipped" }),
		showAgentValueMoment: () => Promise.resolve(),
		onboardingCompleted: () => Promise.resolve()
	} };
}
function createWebTelemetryApi() {
	return {
		telemetryTrack: () => Promise.resolve(),
		telemetrySetOptIn: () => Promise.resolve(),
		telemetryGetConsentState: () => Promise.resolve({
			optedIn: !1,
			source: "default",
			blockedByEnv: !1
		}),
		telemetryAcknowledgeBanner: () => Promise.resolve()
	};
}
function createPtyApi() {
	return {
		spawn: () => Promise.reject(/* @__PURE__ */ Error("Local PTYs are unavailable in the web client.")),
		write: () => {},
		writeAccepted: () => Promise.resolve(!1),
		resize: () => {},
		claimViewport: () => {},
		reportGeometry: () => {},
		signal: () => {},
		clearBuffer: () => {},
		kill: () => Promise.resolve(),
		ackColdRestore: () => {},
		ackData: () => {},
		onDeliveryResyncRequest: () => noopUnsubscribe,
		respondDeliveryResync: () => {},
		reportRendererDeliveryState: () => Promise.resolve({
			inFlightTotalChars: 0,
			inFlightPtyCount: 0,
			msSinceLastAck: null
		}),
		getPtyDataListenerCount: () => 0,
		rendererDispatcherReady: () => {},
		setActiveRendererPty: () => {},
		setRendererPtyVisible: () => {},
		setHiddenRendererPty: () => {},
		setPtyDeliveryInterest: () => {},
		publishTerminalViewAttributes: () => {},
		hasChildProcesses: () => Promise.resolve(!1),
		getForegroundProcess: () => Promise.resolve(null),
		inspectProcess: () => Promise.reject(/* @__PURE__ */ Error("terminal_liveness_unavailable")),
		confirmForegroundProcess: () => Promise.resolve(null),
		getCwd: () => Promise.resolve("~"),
		getSize: () => Promise.resolve(null),
		listSessions: () => Promise.resolve([]),
		getAuthoritativeBufferSnapshotCapabilities: (e) => Promise.resolve(e.map((e) => ({
			id: e,
			authoritative: !1
		}))),
		hasPty: () => Promise.resolve(null),
		getMainBufferSnapshot: () => Promise.resolve(null),
		onSideEffect: () => noopUnsubscribe,
		getSideEffectSnapshot: () => Promise.resolve(null),
		getRendererDeliveryDebugSnapshot: () => Promise.resolve({
			pendingPtyCount: 0,
			pendingChars: 0,
			maxPendingCharsByPty: 0,
			rendererInFlightPtyCount: 0,
			rendererInFlightChars: 0,
			maxRendererInFlightCharsByPty: 0,
			activeRendererPtyCount: 0,
			flushScheduled: !1,
			peakPendingChars: 0,
			peakMaxPendingCharsByPty: 0,
			peakRendererInFlightChars: 0,
			peakMaxRendererInFlightCharsByPty: 0,
			ackGatedFlushSkipCount: 0,
			hiddenDeliveryGatedPtyCount: 0,
			hiddenDeliveryGatedVisiblePtyCount: 0,
			hiddenDeliveryGatedActivePtyCount: 0,
			deliveryInterestPtyCount: 0,
			hiddenDeliveryDroppedChars: 0,
			hiddenDeliveryDroppedChunks: 0,
			pendingDroppedChars: 0,
			diagnostics: EMPTY_PTY_MAIN_DELIVERY_DIAGNOSTICS,
			rendererLifecycleResetCount: 0,
			lastLifecycleResetClearedChars: 0,
			rendererPtyDispatcherReady: !1,
			rendererDispatcherReadyForcedCount: 0
		}),
		resetRendererDeliveryDebug: () => Promise.resolve(),
		onData: () => noopUnsubscribe,
		onReplay: () => noopUnsubscribe,
		onModelRestoreNeeded: () => noopUnsubscribe,
		onExit: () => noopUnsubscribe,
		onSpawned: () => noopUnsubscribe,
		onSerializeBufferRequest: () => noopUnsubscribe,
		onClearBufferRequest: () => noopUnsubscribe,
		sendSerializedBuffer: () => {},
		declarePendingPaneSerializer: () => Promise.resolve(0),
		settlePaneSerializer: () => Promise.resolve(),
		clearPendingPaneSerializer: () => Promise.resolve(),
		reportRendererSerializerReady: () => Promise.resolve(),
		management: {
			listSessions: () => Promise.resolve({
				sessions: [],
				degraded: !1
			}),
			killAll: () => Promise.resolve({
				killedCount: 0,
				remainingCount: 0,
				killedSessionIds: []
			}),
			killOne: () => Promise.resolve({ success: !1 }),
			restart: () => Promise.resolve({ success: !1 }),
			macTccAttribution: () => Promise.resolve({ health: "unknown" })
		}
	};
}
function createSshApi() {
	return {
		listTargets: async () => {
			if (!requireActiveEnvironmentOrNull()) return [];
			let { targets: e } = await callRuntimeResult("ssh.listTargetSummaries");
			return e;
		},
		listRemovedTargetLabels: async () => {
			if (!requireActiveEnvironmentOrNull()) return {};
			let { labels: e } = await callRuntimeResult("ssh.listRemovedTargetLabels");
			return e;
		},
		addTarget: () => Promise.reject(/* @__PURE__ */ Error("SSH target management is unavailable in the web client.")),
		updateTarget: () => Promise.reject(/* @__PURE__ */ Error("SSH target management is unavailable in the web client.")),
		removeTarget: () => Promise.resolve(),
		importConfig: () => Promise.resolve({
			targets: [],
			repoReadoptions: []
		}),
		listConfigHosts: () => Promise.resolve({
			hosts: [],
			totalHostCount: 0,
			newHostCount: 0,
			matchCount: 0,
			hasMore: !1
		}),
		resolveConfigHost: () => Promise.resolve(null),
		connect: async (e) => {
			let { state: t } = await callRuntimeResult("ssh.connect", { targetId: e.targetId });
			return t;
		},
		disconnect: () => Promise.resolve(),
		terminateSessions: () => Promise.resolve({
			terminated: 0,
			unverifiable: 0
		}),
		resetRelay: () => Promise.resolve(),
		getState: async (e) => {
			if (!requireActiveEnvironmentOrNull()) return null;
			let { state: t } = await callRuntimeResult("ssh.getState", { targetId: e.targetId });
			return t;
		},
		needsPassphrasePrompt: () => Promise.resolve(!1),
		testConnection: () => Promise.resolve({
			success: !1,
			error: translate("auto.web.web.preload.api.31bfe8ae1a", "Unavailable in the web client.")
		}),
		onStateChanged: () => noopUnsubscribe,
		addPortForward: () => Promise.reject(/* @__PURE__ */ Error("SSH port forwarding is unavailable in the web client.")),
		updatePortForward: () => Promise.reject(/* @__PURE__ */ Error("SSH port forwarding is unavailable in the web client.")),
		removePortForward: () => Promise.resolve(null),
		listPortForwards: () => Promise.resolve([]),
		listDetectedPorts: () => Promise.resolve([]),
		onPortForwardsChanged: () => noopUnsubscribe,
		onDetectedPortsChanged: () => noopUnsubscribe,
		browseDir: () => Promise.resolve({
			entries: [],
			resolvedPath: "",
			pathFlavor: "posix"
		}),
		onCredentialRequest: () => noopUnsubscribe,
		onCredentialResolved: () => noopUnsubscribe,
		submitCredential: () => Promise.resolve()
	};
}
var PAIRING_LOCAL_UI_FIELD_SET = new Set([
	"automationHostFilter",
	"hideWorkspacesFromOtherDevices",
	"manualRepoOrder",
	"workspaceHostOrder",
	"agentsVisibleHostIds",
	"agentsFilterRepoIds",
	"agentsShowChildAgents",
	"agentsCompactMode",
	"agentsShowSearch",
	"agentsReadFilter",
	"agentsGroupBy",
	"activityClearedAtByPaneKey",
	"manuallyUnreadTurnsByPaneKey"
]);
function omitPairingLocalUiFields(e) {
	return Object.fromEntries(Object.entries(e).filter(([e]) => !PAIRING_LOCAL_UI_FIELD_SET.has(e)));
}
function copyClipboardTextViaExecCommand(e, t = document) {
	if (typeof t.execCommand != "function" || typeof t.addEventListener != "function") return !1;
	let n = !1, r = (t) => {
		t.clipboardData && (t.clipboardData.setData("text/plain", e), t.stopImmediatePropagation(), t.preventDefault(), n = !0);
	};
	t.addEventListener("copy", r);
	try {
		return t.execCommand("copy") === !0 && n;
	} catch {
		return !1;
	} finally {
		t.removeEventListener("copy", r);
	}
}
const MAX_CLIPBOARD_IMAGE_BASE64_CHARS = CLIPBOARD_IMAGE_MAX_BASE64_CHARS, CLIPBOARD_IMAGE_UPLOAD_CHUNK_BASE64_CHARS = 512 * 1024, CLIPBOARD_IMAGE_SAVE_TIMEOUT_MS = 3e4;
function blobToBase64(e) {
	return new Promise((t, n) => {
		let r = new FileReader();
		r.onload = () => {
			let e = typeof r.result == "string" ? r.result : "", n = e.indexOf(",");
			t(n === -1 ? e : e.slice(n + 1));
		}, r.onerror = () => n(r.error ?? /* @__PURE__ */ Error("Failed to read clipboard image")), r.readAsDataURL(e);
	});
}
function assertClipboardImageBlobWithinLimit(e) {
	assertClipboardImageByteLengthWithinLimit(e.size);
}
async function convertImageBlobToPng(e) {
	assertClipboardImageBlobWithinLimit(e);
	let t = await createImageBitmap(e);
	try {
		assertClipboardImageDimensionsWithinLimit(t);
		let e = document.createElement("canvas");
		e.width = t.width, e.height = t.height;
		let n = e.getContext("2d");
		if (!n || e.width <= 0 || e.height <= 0) throw Error("Clipboard image could not be decoded");
		return n.drawImage(t, 0, 0), await new Promise((t, n) => {
			e.toBlob((e) => {
				if (!e) {
					n(/* @__PURE__ */ Error("Clipboard image could not be encoded as PNG"));
					return;
				}
				try {
					assertClipboardImageBlobWithinLimit(e);
				} catch (e) {
					n(e);
					return;
				}
				t(e);
			}, "image/png");
		});
	} finally {
		t.close();
	}
}
async function readClipboardImageBlob() {
	let e = navigator.clipboard;
	if (!e?.read) return null;
	let t = await e.read();
	for (let e of t) {
		let t = e.types.find((e) => e.startsWith("image/"));
		if (t) return e.getType(t);
	}
	return null;
}
async function readClipboardImageThumbnail() {
	let e = await readClipboardImageBlob();
	if (!e) return null;
	assertClipboardImageBlobWithinLimit(e);
	let t = await createImageBitmap(e);
	try {
		assertClipboardImageDimensionsWithinLimit(t);
		let e = clipboardImageThumbnailSize(t), n = document.createElement("canvas");
		n.width = e.width, n.height = e.height;
		let r = n.getContext("2d");
		return r ? (r.drawImage(t, 0, 0, e.width, e.height), {
			dataUrl: n.toDataURL("image/png"),
			height: t.height,
			width: t.width
		}) : null;
	} finally {
		t.close();
	}
}
async function readClipboardImagePngBase64() {
	let e = navigator.clipboard;
	if (!e?.read) return null;
	let t = await e.read();
	for (let e of t) {
		let t = e.types.find((e) => e.startsWith("image/"));
		if (!t) continue;
		let n = await e.getType(t);
		return assertClipboardImageBlobWithinLimit(n), blobToBase64(t === "image/png" ? n : await convertImageBlobToPng(n));
	}
	return null;
}
async function writeWebClipboardText(e) {
	await assertClipboardTextWriteWithinLimitWithYield(e);
	let t = navigator.clipboard;
	if (typeof t?.writeText == "function") try {
		await t.writeText(e);
		return;
	} catch (t) {
		if (copyClipboardTextViaExecCommand(e)) return;
		throw t;
	}
	if (!copyClipboardTextViaExecCommand(e)) throw Error("Clipboard write is unavailable in this browser context");
}
async function saveClipboardImageAsTempFileInRuntime(e, t) {
	if (e.length > MAX_CLIPBOARD_IMAGE_BASE64_CHARS) throw Error(CLIPBOARD_IMAGE_TOO_LARGE_ERROR);
	let n = t?.connectionId ?? null, r = await callRuntimeEnvelope("clipboard.startImageUpload", {
		expectedBase64Length: e.length,
		connectionId: n
	}, CLIPBOARD_IMAGE_SAVE_TIMEOUT_MS);
	if (!r.ok) {
		if (r.error.code === "method_not_found" && e.length <= 262144) return callRuntimeResult("clipboard.saveImageAsTempFile", {
			contentBase64: e,
			connectionId: n
		}, CLIPBOARD_IMAGE_SAVE_TIMEOUT_MS);
		throw Error(r.error.message);
	}
	let { uploadId: i } = r.result;
	try {
		for (let t = 0; t < e.length; t += CLIPBOARD_IMAGE_UPLOAD_CHUNK_BASE64_CHARS) await callRuntimeResult("clipboard.appendImageUploadChunk", {
			uploadId: i,
			offset: t,
			contentBase64: e.slice(t, t + CLIPBOARD_IMAGE_UPLOAD_CHUNK_BASE64_CHARS)
		}, CLIPBOARD_IMAGE_SAVE_TIMEOUT_MS);
		return await callRuntimeResult("clipboard.commitImageUpload", { uploadId: i }, CLIPBOARD_IMAGE_SAVE_TIMEOUT_MS);
	} catch (e) {
		throw await callRuntimeResult("clipboard.abortImageUpload", { uploadId: i }, CLIPBOARD_IMAGE_SAVE_TIMEOUT_MS).catch(() => {}), e;
	}
}
function createWebUiApi() {
	let e = readLocalWebUIState().uiZoomLevel;
	return {
		get: async () => {
			try {
				let t = await callRuntimeResult("ui.get", void 0, 15e3), n = readLocalWebUIState(), r = {
					...mergeHostWebUIState(n, t.ui),
					osc52ClipboardDefaultOnNoticePending: mergeOsc52ClipboardNoticePending(n, t.ui),
					featureInteractions: mergeFeatureInteractionState(n.featureInteractions, t.ui.featureInteractions),
					contextualToursSeenIds: mergeContextualTourSeenIds(n.contextualToursSeenIds, t.ui.contextualToursSeenIds)
				};
				return writeJson(UI_STORAGE_KEY, r), e = r.uiZoomLevel, r;
			} catch {
				return readLocalWebUIState();
			}
		},
		set: async (t) => {
			let n = mergeWebUIState(readLocalWebUIState(), t);
			writeJson(UI_STORAGE_KEY, n), e = n.uiZoomLevel;
			let r = omitPairingLocalUiFields(t);
			try {
				await callRuntimeResult("ui.set", r, 15e3);
			} catch {}
		},
		setWithAck: async (t) => {
			let n = mergeWebUIState(readLocalWebUIState(), t);
			writeJson(UI_STORAGE_KEY, n), e = n.uiZoomLevel, await callRuntimeResult("ui.set", omitPairingLocalUiFields(t), 15e3);
		},
		recordFeatureInteraction: async (t) => {
			let n = readLocalWebUIState(), r = normalizeFeatureInteractions(n.featureInteractions), i = r[t], a = mergeWebUIState(n, { featureInteractions: {
				...r,
				[t]: {
					firstInteractedAt: i?.firstInteractedAt ?? Date.now(),
					interactionCount: (i?.interactionCount ?? 0) + 1
				}
			} });
			writeJson(UI_STORAGE_KEY, a);
			try {
				let n = await callRuntimeResult("ui.recordFeatureInteraction", t, 15e3), r = readLocalWebUIState(), i = {
					...mergeHostWebUIState(r, n.ui),
					osc52ClipboardDefaultOnNoticePending: mergeOsc52ClipboardNoticePending(r, n.ui),
					featureInteractions: mergeFeatureInteractionState(r.featureInteractions, n.ui.featureInteractions),
					contextualToursSeenIds: mergeContextualTourSeenIds(r.contextualToursSeenIds, n.ui.contextualToursSeenIds)
				};
				return writeJson(UI_STORAGE_KEY, i), e = i.uiZoomLevel, i;
			} catch {
				return a;
			}
		},
		readClipboardText: async (e) => assertClipboardTextWithinLimitWithYield(await (navigator.clipboard?.readText?.() ?? ""), e),
		readSelectionClipboardText: () => Promise.reject(/* @__PURE__ */ Error("Selection clipboard is unavailable in the web client")),
		saveClipboardImageAsTempFile: async (e) => {
			if (!requireActiveEnvironmentOrNull()) return null;
			let t = await readClipboardImagePngBase64();
			return t ? saveClipboardImageAsTempFileInRuntime(t, e) : null;
		},
		readClipboardImageThumbnail: () => readClipboardImageThumbnail().catch(() => null),
		writeClipboardText: writeWebClipboardText,
		writeTerminalClipboardText: writeWebClipboardText,
		writeSelectionClipboardText: () => Promise.reject(/* @__PURE__ */ Error("Selection clipboard is unavailable in the web client")),
		writeClipboardImage: () => Promise.resolve(),
		writeClipboardFile: () => Promise.resolve({
			ok: !1,
			reason: "unsupported-platform"
		}),
		performNativePaste: () => {
			document.execCommand?.("paste");
		},
		performNativeSelectionAction: (e) => {
			document.execCommand?.(e === "copy" ? "copy" : "selectAll");
		},
		onExportPdfRequested: () => noopUnsubscribe,
		onAppMenuPaste: () => noopUnsubscribe,
		onAppMenuSelectionAction: () => noopUnsubscribe,
		onEditableContextPaste: () => noopUnsubscribe,
		getZoomLevel: () => e,
		setZoomLevel: (t) => {
			e = t;
		},
		isMaximized: () => Promise.resolve(!1),
		onOpenSettings: () => noopUnsubscribe,
		consumePendingOpenSettings: () => Promise.resolve(!1),
		onOpenSkillShare: () => noopUnsubscribe,
		consumePendingSkillShare: () => Promise.resolve(null),
		onOpenMarkdownFiles: () => noopUnsubscribe,
		consumePendingMarkdownFileOpens: () => Promise.resolve([]),
		onOpenSetupGuide: () => noopUnsubscribe,
		onOpenFeatureTour: () => noopUnsubscribe,
		onOpenCrashReport: () => noopUnsubscribe,
		onStateChanged: () => noopUnsubscribe,
		onToggleLeftSidebar: () => noopUnsubscribe,
		onToggleRightSidebar: () => noopUnsubscribe,
		onToggleWorktreePalette: () => noopUnsubscribe,
		onToggleFloatingTerminal: () => noopUnsubscribe,
		onTerminalShortcutCaptured: () => noopUnsubscribe,
		onOpenQuickOpen: () => noopUnsubscribe,
		onToggleQuickCommandsMenu: () => noopUnsubscribe,
		onOpenTasks: () => noopUnsubscribe,
		onOpenNewWorkspace: () => noopUnsubscribe,
		onDeleteCurrentWorkspace: () => noopUnsubscribe,
		onOpenWorkspaceBoard: () => noopUnsubscribe,
		onToggleAgentDashboard: () => noopUnsubscribe,
		onJumpToWorktreeIndex: () => noopUnsubscribe,
		onJumpToTabIndex: () => noopUnsubscribe,
		onWorktreeHistoryNavigate: () => noopUnsubscribe,
		onNewBrowserTab: () => noopUnsubscribe,
		onNewMarkdownTab: () => noopUnsubscribe,
		onNewSimulatorTab: () => noopUnsubscribe,
		onRequestTabCreate: () => noopUnsubscribe,
		replyTabCreate: () => {},
		onRequestTabSetProfile: () => noopUnsubscribe,
		replyTabSetProfile: () => {},
		onRequestTabClose: () => noopUnsubscribe,
		replyTabClose: () => {},
		onNewTerminalTab: () => noopUnsubscribe,
		onFocusBrowserAddressBar: () => noopUnsubscribe,
		onFindInBrowserPage: () => noopUnsubscribe,
		onReloadBrowserPage: () => noopUnsubscribe,
		onBrowserHistoryNavigate: () => noopUnsubscribe,
		onZoomBrowserPage: () => noopUnsubscribe,
		onHardReloadBrowserPage: () => noopUnsubscribe,
		onCloseActiveTab: () => noopUnsubscribe,
		onCloseFloatingItem: () => noopUnsubscribe,
		onSelectFloatingIndex: () => noopUnsubscribe,
		onSwitchTab: () => noopUnsubscribe,
		onSwitchTabAcrossAllTypes: () => noopUnsubscribe,
		onSwitchRecentTab: () => noopUnsubscribe,
		onSwitchTerminalTab: () => noopUnsubscribe,
		onCtrlTabKeyDown: () => noopUnsubscribe,
		onCtrlTabKeyUp: () => noopUnsubscribe,
		onToggleStatusBar: () => noopUnsubscribe,
		onDictationKeyDown: () => noopUnsubscribe,
		onActivateWorktree: () => noopUnsubscribe,
		onCreateTerminal: () => noopUnsubscribe,
		onRequestTerminalCreate: () => noopUnsubscribe,
		onRequestTerminalTabMount: () => noopUnsubscribe,
		replyTerminalCreate: () => {},
		onSplitTerminal: () => noopUnsubscribe,
		onRenameTerminal: () => noopUnsubscribe,
		onFocusTerminal: () => noopUnsubscribe,
		onFocusEditorTab: () => noopUnsubscribe,
		onCloseSessionTab: () => noopUnsubscribe,
		onSessionTabCloseRequest: () => noopUnsubscribe,
		respondSessionTabClose: () => {},
		onMoveSessionTab: () => noopUnsubscribe,
		onOpenFileFromMobile: () => noopUnsubscribe,
		onOpenDiffFromMobile: () => noopUnsubscribe,
		onMobileMarkdownRequest: () => noopUnsubscribe,
		respondMobileMarkdownRequest: () => {},
		onCloseTerminal: () => noopUnsubscribe,
		onTerminalTabCloseRequest: () => noopUnsubscribe,
		respondTerminalTabClose: () => {},
		onSleepWorktree: () => noopUnsubscribe,
		onResumeSleepingAgents: () => noopUnsubscribe,
		onTerminalZoom: () => noopUnsubscribe,
		onSystemResumed: () => noopUnsubscribe,
		onFileDrop: () => noopUnsubscribe,
		syncTrafficLights: () => {},
		setMarkdownEditorFocused: () => {},
		setRichMarkdownContextMenuTarget: () => {},
		setTerminalInputFocused: () => {},
		setFloatingFocus: () => {},
		setShortcutRecorderFocused: () => {},
		onRichMarkdownContextCommand: () => noopUnsubscribe,
		onFullscreenChanged: () => noopUnsubscribe,
		minimize: () => {},
		maximize: () => {},
		onMaximizeChanged: () => noopUnsubscribe,
		requestClose: () => {},
		popupMenu: () => {},
		onWindowCloseRequested: () => noopUnsubscribe,
		confirmWindowClose: () => {},
		notifyWindowRevealed: () => {}
	};
}
function createUpdaterApi() {
	let e = "Linux package install recovery is only available in the desktop app.";
	return {
		getVersion: () => Promise.resolve("web"),
		getStatus: () => Promise.resolve({ state: "idle" }),
		check: () => Promise.resolve(),
		download: () => Promise.resolve(),
		quitAndInstall: () => Promise.resolve(),
		dismissNudge: () => Promise.resolve(),
		dismissAvailableUpdate: () => Promise.resolve(),
		getLinuxPackageInstallInstructions: () => Promise.reject(Error(e)),
		showLinuxPackage: () => Promise.reject(Error(e)),
		listBuilds: (e) => Promise.resolve({
			ok: !1,
			channel: e,
			message: translate("auto.components.settings.ReleaseChannelSection.webUnavailable", "Switching builds is only available in the desktop app.")
		}),
		onStatus: () => noopUnsubscribe,
		onClearDismissal: () => noopUnsubscribe
	};
}
function createWebWorkspacePortsApi() {
	return { workspacePorts: {
		scan: () => Promise.resolve({
			platform: getBrowserPlatform(),
			scannedAt: Date.now(),
			ports: [],
			unavailableReason: "Workspace port scanning is unavailable for browser-local workspaces."
		}),
		kill: () => Promise.resolve({
			ok: !1,
			reason: "Workspace port management is unavailable for browser-local workspaces."
		}),
		onAdvertisedUrlChanged: () => noopUnsubscribe
	} };
}
function createWorktreesApi() {
	return {
		list: async ({ repoId: e }) => {
			let t = await callRuntimeResultWithOwner("worktree.list", {
				repo: e,
				limit: WEB_RUNTIME_WORKTREE_LIST_LIMIT
			});
			return t.result.worktrees.map((e) => withRuntimeWorktreeOwner(e, t.hostId));
		},
		listRetiredNames: async ({ repoId: e }) => {
			try {
				return readRetiredNameRegistryForRepo(await callRuntimeResult("worktree.listRetiredNames", { repo: e }), e);
			} catch {
				return EMPTY_RETIRED_NAME_REGISTRY;
			}
		},
		listDetected: async ({ repoId: e }) => callRuntimeDetectedWorktrees(e),
		listAll: () => listAllRuntimeWorktrees(),
		create: async (e) => {
			invalidateRuntimeWorktreeCaches();
			let t = await callRuntimeResultWithOwner("worktree.create", {
				repo: e.repoId,
				name: e.name,
				...e.nameWasGenerated ? { nameWasGenerated: !0 } : {},
				...e.displayNameKind ? { displayNameKind: e.displayNameKind } : {},
				baseBranch: e.baseBranch,
				compareBaseRef: e.compareBaseRef,
				branchNameOverride: e.branchNameOverride,
				linkedIssue: e.linkedIssue,
				linkedPR: e.linkedPR,
				linkedLinearIssue: e.linkedLinearIssue,
				linkedLinearIssueWorkspaceId: e.linkedLinearIssueWorkspaceId,
				linkedLinearIssueOrganizationUrlKey: e.linkedLinearIssueOrganizationUrlKey,
				linkedGitLabIssue: e.linkedGitLabIssue,
				linkedGitLabMR: e.linkedGitLabMR,
				linkedBitbucketPR: e.linkedBitbucketPR,
				linkedAzureDevOpsPR: e.linkedAzureDevOpsPR,
				linkedGiteaPR: e.linkedGiteaPR,
				displayName: e.displayName,
				sparseCheckout: e.sparseCheckout,
				pushTarget: e.pushTarget,
				setupDecision: e.setupDecision,
				createdWithAgent: e.createdWithAgent,
				pendingFirstAgentMessageRename: e.pendingFirstAgentMessageRename,
				...e.startup ? {
					startupCommand: e.startup.command,
					...e.startup.env ? { startupEnv: e.startup.env } : {},
					...e.startup.launchConfig ? { startupLaunchConfig: e.startup.launchConfig } : {},
					...e.startup.startupCommandDelivery ? { startupCommandDelivery: e.startup.startupCommandDelivery } : {},
					activate: !0
				} : {},
				parentWorkspace: e.parentWorkspace,
				...e.parentWorkspace ? { parentWorkspaceOrigin: "manual" } : {},
				workspaceStatus: e.workspaceStatus,
				manualOrder: e.manualOrder,
				automationProvenanceRequest: e.automationProvenanceRequest
			});
			return {
				...t.result,
				worktree: withRuntimeWorktreeOwner(t.result.worktree, t.hostId)
			};
		},
		adoptProvisionedRoot: () => Promise.reject(/* @__PURE__ */ Error("Provisioned-root recipes require a direct SSH connection from the desktop app.")),
		onCreateProgress: () => noopUnsubscribe,
		prefetchCreateBase: async ({ repoId: e, baseBranch: t }) => {
			await callRuntimeResult("worktree.prefetchCreateBase", {
				repo: e,
				baseBranch: t
			});
		},
		resolvePrBase: async ({ repoId: e, prNumber: t, headRefName: n, baseRefName: r, isCrossRepository: i }) => callRuntimeResult("worktree.resolvePrBase", {
			repo: e,
			prNumber: t,
			headRefName: n,
			baseRefName: r,
			isCrossRepository: i
		}),
		resolveMrBase: async ({ repoId: e, mrIid: t, sourceBranch: n, targetBranch: r, isCrossRepository: i }) => callRuntimeResult("worktree.resolveMrBase", {
			repo: e,
			mrIid: t,
			sourceBranch: n,
			targetBranch: r,
			isCrossRepository: i
		}),
		remove: async ({ worktreeId: e, hostId: t, force: n, allowUnverifiedPtyStop: r, skipArchive: i }) => (invalidateRuntimeWorktreeCaches(), callRuntimeResult("worktree.rm", {
			worktree: toRuntimeWorktreeSelector(e),
			...t ? { hostId: t } : {},
			force: n,
			allowUnverifiedPtyStop: r,
			runHooks: i !== !0
		})),
		forgetLocal: () => {
			throw Error("Forgetting a workspace is unavailable in paired web clients.");
		},
		forceDeletePreservedBranch: ({ worktreeId: e, branchName: t, expectedHead: n, hostId: r }) => callRuntimeResult("worktree.forceDeleteBranch", {
			worktree: toRuntimeWorktreeSelector(e),
			branchName: t,
			expectedHead: n,
			...r ? { hostId: r } : {}
		}),
		updateMeta: async ({ worktreeId: e, updates: t }) => {
			let n = Object.hasOwn(t, "pushTarget") && t.pushTarget === void 0 ? {
				...t,
				pushTarget: null
			} : t, r = await callRuntimeResultWithOwner("worktree.set", {
				worktree: toRuntimeWorktreeSelector(e),
				...n
			});
			return withRuntimeWorktreeOwner(r.result.worktree, r.hostId);
		},
		listLineage: async () => await callRuntimeResult("worktree.lineageList"),
		updateLineage: async ({ worktreeId: e, parentWorktreeId: t, noParent: n }) => (invalidateRuntimeWorktreeCaches(), (await callRuntimeResult("worktree.set", {
			worktree: toRuntimeWorktreeSelector(e),
			parentWorktree: t,
			noParent: n
		})).worktree.lineage ?? null),
		persistSortOrder: async ({ orderedIds: e }) => {
			await callRuntimeResult("worktree.persistSortOrder", { orderedIds: e });
		},
		getBranchRenameFailureOutput: async () => null,
		onChanged: () => noopUnsubscribe,
		onGitStatusMetadataChanged: () => noopUnsubscribe,
		onHeadIdentitiesChanged: () => noopUnsubscribe,
		onBaseStatus: () => noopUnsubscribe,
		onRemoteBranchConflict: () => noopUnsubscribe
	};
}
function installWebPreloadApi() {
	webRuntimeState.activeEnvironment = readStoredWebRuntimeEnvironment();
	let e = window;
	e.__ORCA_WEB_CLIENT__ = !0, window.api = withFallback(createWebPreloadApi(), []);
}
function createWebPreloadApi() {
	return {
		...createWebAppApi(),
		...createWebStarNagApi(),
		...createWebPlatformApi(),
		...createWebWorkspacePortsApi(),
		...createWebOrcaProfilesApi(),
		...createWebE2EApi(),
		...createWebSettingsApi(),
		keybindings: createWebKeybindingsApi(),
		ui: createWebUiApi(),
		...createWebDiagnosticsApi(),
		...createWebWorkspaceSessionApi(),
		...createWebOnboardingApi(),
		...createWebGithubCacheApi(),
		runtime: createWebRuntimeApi(),
		nativeChat: createWebNativeChatApi(),
		runtimeEnvironments: createRuntimeEnvironmentsApi(),
		repos: createReposApi(),
		worktrees: createWorktreesApi(),
		fs: createFileApi(),
		git: createGitApi(),
		browser: createBrowserApi(),
		emulator: createEmulatorApi(),
		gh: createGitHubApi(),
		gl: createGitLabApi(),
		hostedReview: createRuntimeNamespaceApi("hostedReview"),
		linear: createRuntimeNamespaceApi("linear"),
		hooks: createHooksApi(),
		stats: { getSummary: async () => callRuntimeResult("stats.summary").catch(() => ({
			totalAgentsSpawned: 0,
			totalPRsCreated: 0,
			totalAgentTimeMs: 0,
			firstEventAt: null
		})) },
		memory: { getSnapshot: () => Promise.resolve(createEmptyMemorySnapshot()) },
		aiVault: createWebAiVaultApi(),
		preflight: createPreflightApi(),
		notifications: createNotificationsApi(),
		rateLimits: createRateLimitsApi(),
		minimaxCredentials: createMiniMaxCredentialsApi(),
		grokAccounts: createGrokAccountsApi(),
		codexAccounts: createCodexAccountsApi(),
		claudeAccounts: createClaudeAccountsApi(),
		cli: createCliApi(),
		macosTccPrompts: createMacosTccPromptsApi(),
		codexConfigSync: { status: () => Promise.resolve({
			state: "synced",
			reason: null,
			systemConfigPath: ""
		}) },
		developerPermissions: createDeveloperPermissionsApi(),
		computerUsePermissions: createComputerUsePermissionsApi(),
		updater: createUpdaterApi(),
		shell: createShellApi(),
		skills: createSkillsApi(),
		pty: createPtyApi(),
		ssh: createSshApi(),
		wsl: {
			isAvailable: () => callRuntimeResult("host.wsl.isAvailable").catch(() => !1),
			listDistros: () => callRuntimeResult("host.wsl.listDistros").catch(() => [])
		},
		pwsh: { isAvailable: () => callRuntimeResult("host.pwsh.isAvailable").catch(() => !1) },
		gitBash: { isAvailable: () => callRuntimeResult("host.gitBash.isAvailable").catch(() => !1) },
		...createWebAgentStatusApi(),
		...createWebMobileApi(),
		...createWebTelemetryApi()
	};
}
function I18nProvider({ children: e }) {
	let t = useAppStore((e) => e.settings?.uiLanguage ?? null), n = usePluginLanguagePacks(), r = n.find((e) => e.id === t), i = t === null ? null : r?.resourceLanguage ?? (isPluginUiLanguage(t) ? "en" : resolveUiLocale(t)), a = (0, import_react.useRef)(null);
	return (0, import_react.useEffect)(() => {
		setRendererPluginLanguagePacks(n), a.current = null;
	}, [n]), (0, import_react.useEffect)(() => {
		i === null || a.current === i || (a.current = i, i18n.changeLanguage(i));
	}, [i, n]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nextProvider, {
		i18n,
		children: e
	});
}
var App = lazyWithRetry(() => import("./assets/App-DJXERIMP.js"));
function mountOrca(e, t = {}) {
	t.resetStoredEnvironment && clearStoredWebRuntimeEnvironment();
	function n() {
		let e = (0, import_react.useMemo)(() => readPairingInputFromLocation(window.location), []), t = (0, import_react.useMemo)(() => {
			let t = decideWebPairingStartup({
				initialPairingInput: e,
				hasStoredEnvironment: readStoredWebRuntimeEnvironment() !== null
			});
			return (t.kind === "auto-save-runtime-offer" || t.kind === "show-connect" && t.initialPairingInput !== null) && clearPairingInputFromAddressBar(), t;
		}, [e]), [n, r] = (0, import_react.useState)(() => t.kind === "auto-save-runtime-offer" ? (saveStoredWebRuntimeEnvironment(createStoredWebRuntimeEnvironment({
			name: "Orca Server",
			offer: t.offer,
			previousEnvironment: readStoredWebRuntimeEnvironment()
		})), !0) : t.kind === "use-stored-environment");
		return n ? (installWebPreloadApi(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-dvh bg-background" }),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {})
		})) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WebConnect, {
			initialPairingInput: t.kind === "show-connect" ? t.initialPairingInput : null,
			onConnected: () => r(!0)
		});
	}
	function r() {
		return useTranslation(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecoverableRenderErrorBoundary, {
			boundaryId: "web.root",
			surface: "web-root",
			title: translate("app.recoverableError.webTitle", "Orca web hit a renderer error."),
			description: translate("app.recoverableError.webDescription", "Retry the web client or reconnect to the paired runtime."),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, {})
		});
	}
	let i = import_client.createRoot(e);
	return i.render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r, {}) })), import("./assets/pane-webgl-renderer-phdQxRLt.js").then((e) => e.primeTerminalWebglAddon()), () => {
		i.unmount();
	};
}
export { mountOrca };
