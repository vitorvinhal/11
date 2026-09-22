const STATUS_BAR_CONTEXT_MENU_EXEMPT_ATTR = "data-status-bar-context-menu-exempt", STATUS_BAR_CONTEXT_MENU_EXEMPT_SELECTOR = `[${STATUS_BAR_CONTEXT_MENU_EXEMPT_ATTR}]`, STATUS_BAR_CONTEXT_MENU_EXEMPT_PROPS = { [STATUS_BAR_CONTEXT_MENU_EXEMPT_ATTR]: "" };
var FLOATING_TERMINAL_TOGGLE_SELECTOR = "[data-floating-terminal-toggle]";
function hasClosest(e) {
	return typeof e?.closest == "function";
}
function closestTargetFromEventTarget(e) {
	if (hasClosest(e)) return e;
	let a = e?.parentElement;
	if (hasClosest(a)) return a;
	let o = e?.parentNode;
	return hasClosest(o) ? o : null;
}
function shouldOpenStatusBarContextMenu(e) {
	let o = closestTargetFromEventTarget(e);
	return o ? o.closest(FLOATING_TERMINAL_TOGGLE_SELECTOR) === null && o.closest(STATUS_BAR_CONTEXT_MENU_EXEMPT_SELECTOR) === null : !0;
}
export { shouldOpenStatusBarContextMenu as n, STATUS_BAR_CONTEXT_MENU_EXEMPT_PROPS as t };
