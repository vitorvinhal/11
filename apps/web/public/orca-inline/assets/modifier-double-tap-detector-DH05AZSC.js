import { a as uiZoomFactorFromLevel } from "./ui-zoom-level-yFz0_XNX.js";
var isMac = navigator.userAgent.includes("Mac"), UI_ZOOM_FACTOR_CSS_VAR = "--ui-zoom-factor";
function getUIZoomFactor() {
	return uiZoomFactorFromLevel(window.api?.ui?.getZoomLevel?.() ?? 0);
}
function windowDipToCssPx(e) {
	return e / getUIZoomFactor();
}
function publishZoomFactor(e) {
	document.documentElement.style.setProperty(UI_ZOOM_FACTOR_CSS_VAR, String(e)), isMac && window.api.ui.syncTrafficLights(e);
}
function applyUIZoom(p) {
	window.api.ui.setZoomLevel(p), publishZoomFactor(uiZoomFactorFromLevel(p));
}
function syncZoomCSSVar() {
	publishZoomFactor(getUIZoomFactor());
}
var DOUBLE_TAP_WINDOW_MS = 300, MODIFIER_BY_CODE = {
	ShiftLeft: "Shift",
	ShiftRight: "Shift",
	ControlLeft: "Ctrl",
	ControlRight: "Ctrl",
	AltLeft: "Alt",
	AltRight: "Alt",
	MetaLeft: "Cmd",
	MetaRight: "Cmd"
}, MODIFIER_BY_KEY = {
	Shift: "Shift",
	Control: "Ctrl",
	Alt: "Alt",
	Meta: "Cmd"
};
function modifierFromKeyEvent(e, p) {
	return e && MODIFIER_BY_CODE[e] ? MODIFIER_BY_CODE[e] : p ? MODIFIER_BY_KEY[p] ?? null : null;
}
function otherModifierHeld(e, p) {
	return !!(p !== "Shift" && e.shift || p !== "Ctrl" && e.control || p !== "Alt" && e.alt || p !== "Cmd" && e.meta);
}
function toModifierDoubleTapEvent(e) {
	let p = modifierFromKeyEvent(e.code, e.key);
	return {
		type: e.type,
		modifier: p,
		isModifierOnly: p !== null && !otherModifierHeld(e, p),
		isAutoRepeat: !!e.isAutoRepeat
	};
}
var ModifierDoubleTapDetector = class {
	state = { phase: "idle" };
	process(e, p) {
		return e.modifier === null || !e.isModifierOnly ? (this.state = { phase: "idle" }, null) : e.type === "keyUp" ? (this.onModifierUp(e.modifier, p), null) : this.onModifierDown(e.modifier, e.isAutoRepeat, p);
	}
	reset() {
		this.state = { phase: "idle" };
	}
	onModifierDown(e, p, m) {
		return this.state.phase === "armed" && this.state.modifier === e && !p && m <= this.state.deadlineMs ? (this.state = { phase: "idle" }, { modifier: e }) : p ? (this.state = { phase: "idle" }, null) : (this.state = {
			phase: "down1",
			modifier: e
		}, null);
	}
	onModifierUp(e, p) {
		if (this.state.phase === "down1" && this.state.modifier === e) {
			this.state = {
				phase: "armed",
				modifier: e,
				deadlineMs: p + DOUBLE_TAP_WINDOW_MS
			};
			return;
		}
		this.state.phase === "armed" && this.state.modifier === e && (this.state = { phase: "idle" });
	}
};
export { syncZoomCSSVar as a, applyUIZoom as i, modifierFromKeyEvent as n, windowDipToCssPx as o, toModifierDoubleTapEvent as r, ModifierDoubleTapDetector as t };
