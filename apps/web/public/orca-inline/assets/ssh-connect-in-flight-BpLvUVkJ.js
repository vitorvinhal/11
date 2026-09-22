import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), inFlightLockIds = /* @__PURE__ */ new Map(), lastLockId = 0, listeners = /* @__PURE__ */ new Set();
function emit() {
	for (let e of listeners) e();
}
function subscribeSshConnectInFlight(e) {
	return listeners.add(e), () => {
		listeners.delete(e);
	};
}
function acquire(e) {
	let f = inFlightLockIds.get(e);
	return f === void 0 ? (lastLockId += 1, inFlightLockIds.set(e, lastLockId), emit(), lastLockId) : f;
}
function releaseOwned(e, f) {
	inFlightLockIds.get(e) === f && (inFlightLockIds.delete(e), emit());
}
function beginSshConnect(e) {
	acquire(e);
}
function endSshConnect(e) {
	inFlightLockIds.delete(e) && emit();
}
function isSshConnectInFlight(e) {
	return inFlightLockIds.has(e);
}
function trackSshConnect(e, f) {
	let p = acquire(e), m = () => {
		releaseOwned(e, p);
	};
	return f.then(m, m), f;
}
function useSshConnectInFlight(e) {
	let f = (0, import_react.useCallback)(() => inFlightLockIds.has(e), [e]);
	return (0, import_react.useSyncExternalStore)(subscribeSshConnectInFlight, f, f);
}
export { useSshConnectInFlight as a, trackSshConnect as i, endSshConnect as n, isSshConnectInFlight as r, beginSshConnect as t };
