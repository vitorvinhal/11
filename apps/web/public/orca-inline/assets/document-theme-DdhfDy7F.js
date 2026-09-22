const THEME_TRANSITION_DISABLED_CLASS = "theme-transition-disabled";
var DARK_MODE_QUERY = "(prefers-color-scheme: dark)", pendingTransitionDisableFrames = [];
function cancelPendingTransitionDisableFrames(e) {
	for (let i of pendingTransitionDisableFrames) e(i);
	pendingTransitionDisableFrames = [];
}
function systemPrefersDark(e = window.matchMedia.bind(window)) {
	return e(DARK_MODE_QUERY).matches;
}
function resolveDocumentTheme(e, i) {
	return e === "dark" ? !0 : e === "light" ? !1 : systemPrefersDark(i);
}
function applyDocumentTheme(i, a = {}) {
	let o = a.root ?? document.documentElement, s = a.disableTransitions ?? !0, c = resolveDocumentTheme(i, a.matchMedia);
	if (s && o.classList.add(THEME_TRANSITION_DISABLED_CLASS), o.classList.toggle("dark", c), o.classList.toggle("light", !c), !s) return;
	let l = a.requestAnimationFrame ?? window.requestAnimationFrame.bind(window);
	cancelPendingTransitionDisableFrames(a.cancelAnimationFrame ?? window.cancelAnimationFrame.bind(window));
	let u = l(() => {
		pendingTransitionDisableFrames = pendingTransitionDisableFrames.filter((e) => e !== u);
		let i = l(() => {
			pendingTransitionDisableFrames = pendingTransitionDisableFrames.filter((e) => e !== i), o.classList.remove(THEME_TRANSITION_DISABLED_CLASS);
		});
		pendingTransitionDisableFrames.push(i);
	});
	pendingTransitionDisableFrames.push(u);
}
export { resolveDocumentTheme as n, applyDocumentTheme as t };
