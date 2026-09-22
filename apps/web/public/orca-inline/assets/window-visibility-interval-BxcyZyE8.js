var MAX_VISIBILITY_JITTER_MS = 400;
function isWindowVisible() {
	return typeof document > "u" || document.visibilityState === void 0 || document.visibilityState === "visible";
}
function installWindowVisibilityInterval(n) {
	let r = n.setIntervalFn ?? ((e, t) => setInterval(e, t)), i = n.clearIntervalFn ?? ((e) => clearInterval(e)), a = null, o = null, s = n.jitterOnVisible ? Math.max(0, Math.min(MAX_VISIBILITY_JITTER_MS, Math.floor(n.jitterFn?.() ?? Math.random() * (MAX_VISIBILITY_JITTER_MS + 1)))) : 0, c = () => {
		o !== null && (clearTimeout(o), o = null), a !== null && (i(a), a = null);
	}, l = (e) => {
		if (a !== null || !isWindowVisible()) return;
		let i = n.runOnVisible ?? n.run;
		e ? o = setTimeout(() => {
			o = null, isWindowVisible() && i();
		}, s) : i(), a = r(n.run, n.intervalMs);
	}, u = () => {
		isWindowVisible() ? l(n.jitterOnVisible === !0) : c();
	};
	return l(!1), typeof document < "u" && typeof document.addEventListener == "function" && document.addEventListener("visibilitychange", u), () => {
		c(), typeof document < "u" && typeof document.removeEventListener == "function" && document.removeEventListener("visibilitychange", u);
	};
}
export { isWindowVisible as n, installWindowVisibilityInterval as t };
