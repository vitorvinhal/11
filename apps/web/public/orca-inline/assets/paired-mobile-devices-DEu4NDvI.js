import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), snapshot = {
	devices: [],
	loaded: !1,
	loading: !1,
	error: !1
}, activeRequest = null, latestRequestId = 0, listeners = /* @__PURE__ */ new Set();
function publish(e) {
	snapshot = e;
	for (let e of listeners) e();
}
function subscribe(e) {
	return listeners.add(e), () => {
		listeners.delete(e);
	};
}
function getSnapshot() {
	return snapshot;
}
function supersededResult() {
	return activeRequest?.promise ?? snapshot.devices;
}
function getPairedMobileDevicesSnapshot() {
	return snapshot.devices;
}
function replacePairedMobileDevices(e) {
	latestRequestId += 1, activeRequest = null, publish({
		devices: [...e],
		loaded: !0,
		loading: !1,
		error: !1
	});
}
function refreshPairedMobileDevices({ force: e = !1 } = {}) {
	if (activeRequest && !e) return activeRequest.promise;
	let m = latestRequestId + 1;
	latestRequestId = m, publish({
		...snapshot,
		loading: !0
	});
	let h = window.api.mobile.listDevices().then((e) => {
		let h = [...e.devices];
		return m === latestRequestId ? (publish({
			devices: h,
			loaded: !0,
			loading: !1,
			error: !1
		}), h) : supersededResult();
	}).catch((e) => {
		if (m !== latestRequestId) return supersededResult();
		throw publish({
			...snapshot,
			loaded: !0,
			loading: !1,
			error: !0
		}), e;
	}).finally(() => {
		activeRequest?.id === m && (activeRequest = null);
	});
	return activeRequest = {
		id: m,
		promise: h
	}, h;
}
var enabledConsumerCount = 0;
function recoverPairedMobileDevicesOnReconnect() {
	enabledConsumerCount > 0 && snapshot.error && refreshPairedMobileDevices({ force: !0 }).catch(() => {});
}
function addRecoveryConsumer() {
	return enabledConsumerCount === 0 && (window.addEventListener("focus", recoverPairedMobileDevicesOnReconnect), window.addEventListener("online", recoverPairedMobileDevicesOnReconnect)), enabledConsumerCount += 1, () => {
		--enabledConsumerCount, enabledConsumerCount === 0 && (window.removeEventListener("focus", recoverPairedMobileDevicesOnReconnect), window.removeEventListener("online", recoverPairedMobileDevicesOnReconnect));
	};
}
function usePairedMobileDevices({ enabled: e = !0, refreshOnMount: m = !0 } = {}) {
	let g = (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot), _ = (0, import_react.useCallback)((e) => refreshPairedMobileDevices(e), []);
	return (0, import_react.useEffect)(() => {
		!e || !m || g.loaded || g.loading || refreshPairedMobileDevices().catch(() => {});
	}, [
		g.loaded,
		g.loading,
		e,
		m
	]), (0, import_react.useEffect)(() => {
		if (e) return addRecoveryConsumer();
	}, [e]), {
		...g,
		hasPairedDevice: g.devices.length > 0,
		refresh: _
	};
}
export { replacePairedMobileDevices as n, usePairedMobileDevices as r, getPairedMobileDevicesSnapshot as t };
