import { C_ as sshTargetLabelsEqual, Gv as callRuntimeRpc, S_ as sshTargetGenerationsEqual, d_ as getEnvironmentSshStateGeneration, k_ as sanitizeSshTargetGeneration, t as useAppStore, x_ as collectSshTargetGenerations } from "./store-C9f8FDJV.js";
import { v as clampUtf8TextPrefix, w as measureUtf8ByteLength } from "./renderer-app-platform--nJ6HYmL.js";
var CONNECTION_STATUSES = new Set([
	"disconnected",
	"connecting",
	"auth-failed",
	"deploying-relay",
	"connected",
	"reconnecting",
	"reconnection-failed",
	"error"
]);
function isSshRetainedIdentifier(e) {
	return typeof e == "string" && e.length > 0 && !measureUtf8ByteLength(e, { stopAfterBytes: 1024 }).exceededLimit;
}
function admitSshConnectionState(e, v) {
	if (!e || typeof e != "object" || !isSshRetainedIdentifier(v)) return null;
	let y = e;
	if (y.targetId !== void 0 && (!isSshRetainedIdentifier(y.targetId) || y.targetId !== v) || typeof y.status != "string" || !CONNECTION_STATUSES.has(y.status) || !isNonNegativeSafeInteger(y.reconnectAttempt) || y.error !== null && typeof y.error != "string") return null;
	let b = clampSshConnectionError(y.error), x = y.providerEpoch !== void 0 && y.providerEpoch !== null;
	return x !== (y.connectionGeneration !== void 0) || x && (!isSshProviderEpoch(y.providerEpoch) || !isNonNegativeSafeInteger(y.connectionGeneration)) ? null : {
		targetId: v,
		status: y.status,
		error: b,
		reconnectAttempt: y.reconnectAttempt,
		providerEpoch: x ? y.providerEpoch : null,
		...x ? { connectionGeneration: y.connectionGeneration } : {},
		...typeof y.supportsFolderDownload == "boolean" ? { supportsFolderDownload: y.supportsFolderDownload } : {},
		...y.remotePlatform === "linux" || y.remotePlatform === "darwin" || y.remotePlatform === "win32" ? { remotePlatform: y.remotePlatform } : {}
	};
}
function isSshProviderEpoch(e) {
	return typeof e == "string" && e.length > 0 && !measureUtf8ByteLength(e, { stopAfterBytes: 128 }).exceededLimit;
}
function clampSshConnectionError(e) {
	return typeof e == "string" ? clampUtf8TextPrefix(e, 16384) : null;
}
function isNonNegativeSafeInteger(e) {
	return Number.isSafeInteger(e) && e >= 0;
}
var SSH_RPC_TIMEOUT_MS = 15e3;
function environmentTarget(e) {
	return {
		kind: "environment",
		environmentId: e
	};
}
async function fetchEnvironmentSshTargets(e) {
	let { targets: y } = await callRuntimeRpc(environmentTarget(e), "ssh.listTargetSummaries", void 0, { timeoutMs: SSH_RPC_TIMEOUT_MS });
	if (!Array.isArray(y)) throw Error("Remote SSH target metadata is invalid");
	return y.map((e) => {
		if (typeof e.id != "string" || typeof e.label != "string") throw Error("Remote SSH target metadata is invalid");
		let v = sanitizeSshTargetGeneration(e.generation);
		return {
			id: e.id,
			label: e.label,
			...v === void 0 ? {} : { generation: v }
		};
	});
}
async function syncEnvironmentSshTargetMetadata(e, v) {
	let y = await fetchEnvironmentSshTargets(e);
	return v === getEnvironmentSshStateGeneration(e) ? (useAppStore.getState().setEnvironmentSshTargetsMetadata(e, y, v), await syncEnvironmentRemovedSshTargetLabels(e, v), v === getEnvironmentSshStateGeneration(e) ? y : []) : [];
}
async function syncEnvironmentRemovedSshTargetLabels(e, y) {
	try {
		let { labels: b } = await callRuntimeRpc(environmentTarget(e), "ssh.listRemovedTargetLabels", void 0, { timeoutMs: SSH_RPC_TIMEOUT_MS });
		useAppStore.getState().setEnvironmentRemovedSshTargetLabels(e, b, y);
	} catch {}
}
async function fetchEnvironmentSshConnectionStates(e, y, x) {
	for (let C of y) {
		if (x !== getEnvironmentSshStateGeneration(e)) return;
		try {
			let { state: y } = await callRuntimeRpc(environmentTarget(e), "ssh.getState", { targetId: C.id }, { timeoutMs: SSH_RPC_TIMEOUT_MS }), b = y ? admitSshConnectionState(y, C.id) : null;
			b && useAppStore.getState().setEnvironmentSshConnectionState(e, C.id, b, x);
		} catch {}
	}
}
var sshRefreshesInFlight = /* @__PURE__ */ new Map();
function mergeSshRefreshKind(e, v) {
	return e === "full" || v === "full" ? "full" : "metadata";
}
async function runEnvironmentSshHydration(e) {
	let v = getEnvironmentSshStateGeneration(e);
	await fetchEnvironmentSshConnectionStates(e, await syncEnvironmentSshTargetMetadata(e, v), v);
}
async function runEnvironmentSshTargetMetadataRefresh(v) {
	let x = getEnvironmentSshStateGeneration(v), w = useAppStore.getState().sshStateByEnvironment.get(v), T = await fetchEnvironmentSshTargets(v);
	if (x !== getEnvironmentSshStateGeneration(v)) return;
	let E = w?.targetGenerations ?? /* @__PURE__ */ new Map(), D = collectSshTargetGenerations(T), O = !w?.targetsHydrated || !sshTargetLabelsEqual(w.targetLabels, T) || !sshTargetGenerationsEqual(E, D);
	useAppStore.getState().setEnvironmentSshTargetsMetadata(v, T, x);
	let k = new Set(w?.targetLabels.keys() ?? []), A = useAppStore.getState().sshStateByEnvironment.get(v)?.connectionStates, j = T.filter((e) => !k.has(e.id) || !A?.has(e.id) || E.get(e.id) !== D.get(e.id));
	if (!O) {
		await fetchEnvironmentSshConnectionStates(v, j, x);
		return;
	}
	await syncEnvironmentRemovedSshTargetLabels(v, x), await fetchEnvironmentSshConnectionStates(v, j, x);
}
function requestSshRefreshRerun(e, v) {
	e.rerunKind = mergeSshRefreshKind(e.rerunKind, v);
}
function startEnvironmentSshRefresh(e, v) {
	let y = {
		promise: Promise.resolve(),
		generation: getEnvironmentSshStateGeneration(e),
		kind: v,
		rerunKind: null
	};
	return y.promise = (async () => {
		let x = v, S = null;
		try {
			for (; x;) {
				y.kind = x, y.generation = getEnvironmentSshStateGeneration(e), y.rerunKind = null;
				try {
					await (y.kind === "full" ? runEnvironmentSshHydration(e) : runEnvironmentSshTargetMetadataRefresh(e)), S = null;
				} catch (e) {
					S = e, y.rerunKind &&= mergeSshRefreshKind(y.rerunKind, y.kind);
				}
				x = y.rerunKind;
			}
			if (S) throw S;
		} finally {
			sshRefreshesInFlight.get(e) === y && sshRefreshesInFlight.delete(e);
		}
	})(), sshRefreshesInFlight.set(e, y), y.promise;
}
async function hydrateRuntimeEnvironmentSshState(e, v = {}) {
	let y = getEnvironmentSshStateGeneration(e), x = sshRefreshesInFlight.get(e);
	if (x) return (v.force || x.generation !== y) && requestSshRefreshRerun(x, "full"), x.promise;
	let C = useAppStore.getState().sshStateByEnvironment.get(e);
	if (!(!v.force && C?.targetsHydrated)) return startEnvironmentSshRefresh(e, "full");
}
async function refreshRuntimeEnvironmentSshTargetMetadata(e) {
	let v = getEnvironmentSshStateGeneration(e), y = sshRefreshesInFlight.get(e);
	return y ? (requestSshRefreshRerun(y, y.generation === v ? "metadata" : "full"), y.promise) : startEnvironmentSshRefresh(e, useAppStore.getState().sshStateByEnvironment.get(e)?.targetsHydrated ? "metadata" : "full");
}
function applyRuntimeEnvironmentSshStateChanged(e, v, y, x = getEnvironmentSshStateGeneration(e)) {
	if (x !== getEnvironmentSshStateGeneration(e)) return;
	let C = admitSshConnectionState(y, v);
	if (!C) return;
	let w = useAppStore.getState(), T = w.sshStateByEnvironment.get(e);
	if (T?.targetsHydrated && T.targetLabels.has(v)) {
		w.setEnvironmentSshConnectionState(e, v, C, x);
		return;
	}
	hydrateRuntimeEnvironmentSshState(e, { force: !0 }).catch(() => {});
}
async function connectRuntimeEnvironmentSshTarget(e, y) {
	let x = getEnvironmentSshStateGeneration(e), { state: C } = await callRuntimeRpc(environmentTarget(e), "ssh.connect", { targetId: y }, { timeoutMs: 6e4 }), w = C ? admitSshConnectionState(C, y) : null;
	return w && useAppStore.getState().setEnvironmentSshConnectionState(e, y, w, x), w;
}
async function resyncRuntimeEnvironmentSshTargets(e) {
	await hydrateRuntimeEnvironmentSshState(e, { force: !0 });
}
export { resyncRuntimeEnvironmentSshTargets as a, refreshRuntimeEnvironmentSshTargetMetadata as i, connectRuntimeEnvironmentSshTarget as n, admitSshConnectionState as o, hydrateRuntimeEnvironmentSshState as r, applyRuntimeEnvironmentSshStateChanged as t };
