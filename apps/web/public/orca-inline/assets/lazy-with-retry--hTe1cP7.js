import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
const ORCA_EDITOR_SAVE_DIRTY_FILES_EVENT = "orca:editor-save-dirty-files", ORCA_EDITOR_PREPARE_HOT_EXIT_EVENT = "orca:editor-prepare-hot-exit", ORCA_RENDERER_UNLOAD_PREVENTED_EVENT = "orca:renderer-unload-prevented", ORCA_RENDERER_SHUTDOWN_CHECKPOINT_FAILED_EVENT = "orca:renderer-shutdown-checkpoint-failed", ORCA_RENDERER_SHUTDOWN_CHECKPOINT_ABORTED_EVENT = "orca:renderer-shutdown-checkpoint-aborted", ORCA_SHUTDOWN_CHECKPOINT_FAILURE_REASON_ATTRIBUTE = "data-orca-shutdown-checkpoint-failure";
function formatShutdownCheckpointFailureReason(m) {
	try {
		return String(m instanceof Error ? m.message : m) || "Unknown shutdown checkpoint failure";
	} catch {
		return "Unknown shutdown checkpoint failure";
	}
}
function publishShutdownCheckpointFailureReason(m) {
	try {
		globalThis.document?.documentElement?.setAttribute(ORCA_SHUTDOWN_CHECKPOINT_FAILURE_REASON_ATTRIBUTE, m);
	} catch {}
}
function clearShutdownCheckpointFailureReason() {
	try {
		globalThis.document?.documentElement?.removeAttribute(ORCA_SHUTDOWN_CHECKPOINT_FAILURE_REASON_ATTRIBUTE);
	} catch {}
}
function consumeShutdownCheckpointFailureReason() {
	try {
		let m = globalThis.document?.documentElement, P = m?.getAttribute(ORCA_SHUTDOWN_CHECKPOINT_FAILURE_REASON_ATTRIBUTE);
		return P && m?.removeAttribute(ORCA_SHUTDOWN_CHECKPOINT_FAILURE_REASON_ATTRIBUTE), P || null;
	} catch {
		return null;
	}
}
function requestEditorHotExitBackup(m) {
	return new Promise((P, F) => {
		let L = !1;
		m.dispatchEvent(new CustomEvent(ORCA_EDITOR_PREPARE_HOT_EXIT_EVENT, { detail: {
			claim: () => {
				L = !0;
			},
			resolve: P,
			reject: (m) => {
				F(Error(m));
			}
		} })), L || P();
	});
}
async function prepareRendererForAppRestart(m, { startedEventName: P, abortedEventName: F, awaitCheckpoint: I }) {
	m.dispatchEvent(new Event(P));
	let L = !1;
	try {
		await requestEditorHotExitBackup(m);
		let P = () => {
			L = !0;
		};
		m.addEventListener(ORCA_RENDERER_SHUTDOWN_CHECKPOINT_FAILED_EVENT, P);
		try {
			m.dispatchEvent(new Event("beforeunload", { cancelable: !0 }));
		} finally {
			m.removeEventListener(ORCA_RENDERER_SHUTDOWN_CHECKPOINT_FAILED_EVENT, P);
		}
		if (L) {
			let m = consumeShutdownCheckpointFailureReason();
			throw Error(m ? `Renderer shutdown checkpoint was not completed: ${m}` : "Renderer shutdown checkpoint was not completed.");
		}
		await I();
	} catch (P) {
		throw m.dispatchEvent(new Event(L ? ORCA_RENDERER_SHUTDOWN_CHECKPOINT_ABORTED_EVENT : F)), P;
	}
}
const ORCA_UPDATER_QUIT_AND_INSTALL_STARTED_EVENT = "orca:updater-quit-and-install-started", ORCA_UPDATER_QUIT_AND_INSTALL_ABORTED_EVENT = "orca:updater-quit-and-install-aborted", ORCA_APP_RESTART_STARTED_EVENT = "orca:app-restart-started", ORCA_APP_RESTART_ABORTED_EVENT = "orca:app-restart-aborted";
var RELOAD_SETTLE_GRACE_MS = 1e4;
function waitForRefusedNavigation(m) {
	let P, F = () => void 0, I = () => {
		P !== void 0 && (clearTimeout(P), P = void 0), m.removeEventListener(ORCA_RENDERER_UNLOAD_PREVENTED_EVENT, F);
	};
	return {
		outcome: new Promise((R) => {
			let z = (m) => {
				I(), R(m);
			};
			F = () => z("unload-vetoed"), m.addEventListener(ORCA_RENDERER_UNLOAD_PREVENTED_EVENT, F), P = setTimeout(() => z("never-landed"), RELOAD_SETTLE_GRACE_MS);
		}),
		cancel: I
	};
}
async function requestLazyChunkRecoveryReload(m, P = () => window.api?.app?.awaitBeforeUnloadCheckpoint?.() ?? Promise.resolve()) {
	try {
		await prepareRendererForAppRestart(m, {
			startedEventName: ORCA_APP_RESTART_STARTED_EVENT,
			abortedEventName: ORCA_APP_RESTART_ABORTED_EVENT,
			awaitCheckpoint: P
		});
	} catch {
		return "checkpoint-refused";
	}
	let F = () => void 0;
	try {
		let P = waitForRefusedNavigation(m);
		return F = P.cancel, m.location.reload(), await P.outcome;
	} catch {
		return "request-failed";
	} finally {
		F(), m.dispatchEvent(new Event(ORCA_APP_RESTART_ABORTED_EVENT));
	}
}
var import_react = /* @__PURE__ */ __toESM(require_react()), LazyChunkLoadError = class extends Error {
	reloadKey;
	constructor(m, P = "unknown") {
		super("Lazy chunk load failed after reload recovery was exhausted"), this.name = "LazyChunkLoadError", this.reloadKey = P, this.cause = m;
	}
};
function isLazyChunkLoadError(m) {
	return m instanceof LazyChunkLoadError;
}
var RELOAD_GUARD_KEY = "orca:lazy-chunk-reload-attempted", FALLBACK_RELOAD_TOKEN = `doc-${Math.random().toString(36).slice(2)}`, DEFAULT_RETRIES = 2, DEFAULT_BASE_DELAY_MS = 250;
function currentDocumentReloadToken() {
	let m = typeof performance > "u" ? NaN : performance.timeOrigin;
	return Number.isFinite(m) && m > 0 ? String(m) : FALLBACK_RELOAD_TOKEN;
}
function readChunkReloadGuardState() {
	if (typeof window > "u") return "unavailable";
	try {
		let m = window.sessionStorage.getItem(RELOAD_GUARD_KEY);
		return m === null ? "not-attempted" : m === currentDocumentReloadToken() ? "reload-not-landed" : "reload-landed";
	} catch {
		return "unavailable";
	}
}
function markChunkReloadAttempted() {
	try {
		return window.sessionStorage.setItem(RELOAD_GUARD_KEY, currentDocumentReloadToken()), !0;
	} catch {
		return !1;
	}
}
function clearChunkReloadGuard() {
	try {
		window.sessionStorage.removeItem(RELOAD_GUARD_KEY);
	} catch {}
}
var MAX_RELOAD_REQUESTS_PER_DOCUMENT = 2, reloadRequestsThisDocument = 0, reloadRequestInFlight = !1;
function recordReloadBreadcrumb(m, P, F, I) {
	try {
		window.api?.crashReports.recordBreadcrumb({
			name: m,
			data: {
				reloadKey: P,
				message: F,
				...I === void 0 ? {} : { outcome: I }
			}
		});
	} catch {}
}
var wait = (m) => new Promise((P) => setTimeout(P, m));
function containedChunkFailure(m, P) {
	return isKnownDynamicImportFailure(m) ? new LazyChunkLoadError(m, P) : m;
}
function isKnownDynamicImportFailure(m) {
	return m instanceof Error ? m.name === "ChunkLoadError" || m.name === "SyntaxError" ? !0 : [
		/failed to fetch dynamically imported module/i,
		/error loading dynamically imported module/i,
		/importing a module script failed/i,
		/failed to load module script/i,
		/loading chunk .+ failed/i,
		/unexpected token/i,
		/unexpected end of (input|script|json)/i
	].some((P) => P.test(m.message)) : !1;
}
async function loadLazyWithRetry(m, P = {}) {
	let F = P.retries ?? DEFAULT_RETRIES, I = P.baseDelayMs ?? DEFAULT_BASE_DELAY_MS, L;
	for (let P = 0; P <= F; P += 1) try {
		return await m();
	} catch (m) {
		L = m, P < F && await wait(I * 2 ** P);
	}
	let R = P.reloadKey ?? "unknown", z = L instanceof Error ? L.message : String(L), B = readChunkReloadGuardState();
	if (typeof window < "u" && B === "not-attempted" && reloadRequestsThisDocument < MAX_RELOAD_REQUESTS_PER_DOCUMENT) {
		if (!markChunkReloadAttempted()) throw L;
		reloadRequestsThisDocument += 1, reloadRequestInFlight = !0, recordReloadBreadcrumb("lazy_chunk_reload", R, z);
		let m = "request-failed";
		try {
			m = await requestLazyChunkRecoveryReload(window);
		} finally {
			reloadRequestInFlight = !1, clearChunkReloadGuard(), recordReloadBreadcrumb("lazy_chunk_reload_vetoed", R, z, m);
		}
		throw containedChunkFailure(L, R);
	}
	throw B === "reload-landed" ? containedChunkFailure(L, R) : B === "reload-not-landed" ? (!reloadRequestInFlight && isKnownDynamicImportFailure(L) && (clearChunkReloadGuard(), recordReloadBreadcrumb("lazy_chunk_reload_vetoed", R, z, "guard-not-landed")), containedChunkFailure(L, R)) : B === "not-attempted" ? containedChunkFailure(L, R) : L;
}
function lazyWithRetry(m, P) {
	return (0, import_react.lazy)(() => loadLazyWithRetry(m, P));
}
export { ORCA_UPDATER_QUIT_AND_INSTALL_ABORTED_EVENT as a, ORCA_RENDERER_SHUTDOWN_CHECKPOINT_FAILED_EVENT as c, consumeShutdownCheckpointFailureReason as d, formatShutdownCheckpointFailureReason as f, ORCA_EDITOR_SAVE_DIRTY_FILES_EVENT as h, ORCA_APP_RESTART_STARTED_EVENT as i, ORCA_RENDERER_UNLOAD_PREVENTED_EVENT as l, ORCA_EDITOR_PREPARE_HOT_EXIT_EVENT as m, lazyWithRetry as n, ORCA_UPDATER_QUIT_AND_INSTALL_STARTED_EVENT as o, publishShutdownCheckpointFailureReason as p, ORCA_APP_RESTART_ABORTED_EVENT as r, ORCA_RENDERER_SHUTDOWN_CHECKPOINT_ABORTED_EVENT as s, isLazyChunkLoadError as t, clearShutdownCheckpointFailureReason as u };
