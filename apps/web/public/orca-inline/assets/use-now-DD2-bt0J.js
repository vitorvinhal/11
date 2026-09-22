import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as installWindowVisibilityInterval } from "./window-visibility-interval-BxcyZyE8.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), nowClocks = /* @__PURE__ */ new Map();
function createSharedNowClock(e, r = {
	now: () => Date.now(),
	setInterval: (e, r) => setInterval(e, r),
	clearInterval: (e) => clearInterval(e)
}) {
	let a = r.now(), o = null, s = /* @__PURE__ */ new Set(), c = () => {
		a = r.now();
		for (let e of s) e();
	};
	return {
		getSnapshot: () => a,
		subscribe: (a) => (s.add(a), o ||= installWindowVisibilityInterval({
			run: c,
			intervalMs: e,
			setIntervalFn: r.setInterval,
			clearIntervalFn: r.clearInterval
		}), () => {
			s.delete(a), s.size === 0 && o && (o(), o = null);
		})
	};
}
function getSharedNowClock(e) {
	let r = nowClocks.get(e);
	return r || (r = createSharedNowClock(e), nowClocks.set(e, r)), r;
}
var subscribeWhileDisabled = () => () => {};
function useNow(e, r = !0) {
	let i = getSharedNowClock(e);
	return (0, import_react.useSyncExternalStore)(r ? i.subscribe : subscribeWhileDisabled, i.getSnapshot, i.getSnapshot);
}
export { useNow as t };
