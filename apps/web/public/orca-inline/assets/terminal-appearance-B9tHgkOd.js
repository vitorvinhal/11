import { Bo as resolveTerminalMinimumContrastRatio, Qb as HEX_COLOR_RE, cs as resolvePaneStyleOptions, fs as buildFontFamily, is as getBuiltinTheme, ss as resolveEffectiveTerminalAppearance } from "./store-C9f8FDJV.js";
import { h as isClipboardTextTooLargeError } from "./renderer-app-platform--nJ6HYmL.js";
import { T as resolveTerminalFontWeights } from "./stale-document-visibility-rSdoU229.js";
import { a as paneMetricOptionsAlreadySettled, t as applyOrDeferPaneMetricOptions } from "./pane-metric-options-deferral-Bz211kas.js";
import { Jt as resolveTerminalCursorInactiveStyle, Kt as normalizeTerminalFastScrollSensitivity, qt as normalizeTerminalScrollSensitivity } from "./web-runtime-session-CeAC5QPx.js";
import { l as createTextControlRejectedResult, o as TEXT_CONTROL_PASTE_DIRECT_MAX_BYTES, r as pasteTextIntoTextControl, s as TEXT_CONTROL_PASTE_MAX_BYTES, t as measureTextControlPasteByteLength } from "./text-control-paste-Bg1FpWOl.js";
import { C as safeFit, O as canApplyPaneMetricOptions, n as attachWebgl, ot as getFitOverrideForPty, s as disposeWebgl, w as safeFitAndThen } from "./pane-webgl-renderer-xMdAw5Mm.js";
import { t as PRIMARY_SELECTION_MAX_LENGTH } from "./primary-selection-WP9lhEQ-.js";
var TEXT_INPUT_TYPES = new Set([
	"",
	"email",
	"password",
	"search",
	"tel",
	"text",
	"url"
]);
function isTextInputElement(e) {
	return e instanceof HTMLInputElement && TEXT_INPUT_TYPES.has(e.type);
}
function isPrimarySelectionTextControl(e) {
	return isTextInputElement(e) || e instanceof HTMLTextAreaElement;
}
function readTextControlSelection(e) {
	if (e instanceof HTMLInputElement && e.type === "password") return null;
	try {
		let E = e.selectionStart, D = e.selectionEnd;
		return E === null || D === null || E === D || Math.abs(D - E) > 65536 ? null : e.value.slice(Math.min(E, D), Math.max(E, D));
	} catch {
		return null;
	}
}
function getRangeTextLengthUpTo(e, E) {
	let D = 0, O = e.commonAncestorContainer, k = O.ownerDocument ?? document, A = (O) => {
		if (!e.intersectsNode(O)) return !1;
		let k = 0, A = O.data.length;
		return O === e.startContainer && (k = e.startOffset), O === e.endContainer && (A = e.endOffset), D += Math.max(0, A - k), D > E;
	};
	if (O.nodeType === Node.TEXT_NODE) return A(O), D;
	let j = k.createTreeWalker(O, NodeFilter.SHOW_TEXT), M = j.nextNode();
	for (; M;) {
		if (A(M)) return D;
		M = j.nextNode();
	}
	return D;
}
function selectionTextLengthExceeds(e, E) {
	let D = 0;
	for (let O = 0; O < e.rangeCount; O += 1) if (D += getRangeTextLengthUpTo(e.getRangeAt(O), E - D), D > E) return !0;
	return !1;
}
function readDocumentSelection() {
	let e = window.getSelection();
	if (!e || e.isCollapsed || selectionTextLengthExceeds(e, 65536)) return null;
	let E = e.toString();
	return E.length > 0 ? E : null;
}
function readCurrentPrimarySelectionText() {
	let e = document.activeElement;
	if (e instanceof Element) {
		let E = e.closest("input, textarea");
		if (E && isPrimarySelectionTextControl(E)) {
			let e = readTextControlSelection(E);
			if (e) return e;
		}
	}
	return readDocumentSelection();
}
function findOwnedTextControlPasteTarget(e = typeof document > "u" ? null : document.activeElement) {
	if (!(e instanceof Element) || e.closest(".xterm-helper-textarea")) return null;
	let E = e.closest("input, textarea");
	return !E || !isPrimarySelectionTextControl(E) || E.disabled || E.readOnly ? null : E;
}
function findOwnedPasteEventTextControlTarget(e, E = typeof document > "u" ? null : document.activeElement) {
	if (!(e instanceof Element) || e.closest(".xterm-helper-textarea")) return null;
	let D = e.closest("input, textarea");
	return !D || E !== D ? null : findOwnedTextControlPasteTarget(D);
}
function classifyTextControlPastePayloadOwnership(e, E = {}) {
	if (!e) return {
		action: "allow-native",
		reason: "empty",
		byteLength: 0,
		exceededLimit: !1
	};
	let D = E.maxBytes ?? 16777216, O = E.directMaxBytes ?? 65536, k = measureTextControlPasteByteLength(e, { stopAfterBytes: Math.min(O, D) });
	return k.exceededLimit ? e.length > D || O >= D ? {
		action: "reject",
		reason: "too-large",
		byteLength: measureRejectedTextControlPasteByteLength(e, D),
		exceededLimit: !0
	} : {
		action: "claim-orca",
		byteLength: k.byteLength,
		exceededLimit: !0
	} : {
		action: "allow-native",
		reason: "small",
		byteLength: k.byteLength,
		exceededLimit: !1
	};
}
function measureRejectedTextControlPasteByteLength(e, E) {
	return E <= 65536 ? measureTextControlPasteByteLength(e, { stopAfterBytes: E }).byteLength : E + 1;
}
const APP_MENU_PASTE_EVENT = "orca-app-menu-paste";
function dispatchAppMenuPasteEvent(e = window) {
	let E = new CustomEvent(APP_MENU_PASTE_EVENT, {
		bubbles: !1,
		cancelable: !0
	});
	return e.dispatchEvent(E), E.defaultPrevented;
}
function findFocusedAppMenuTextControlPasteTarget(e = typeof document > "u" ? null : document.activeElement) {
	return findOwnedTextControlPasteTarget(e);
}
function createAppMenuTextControlRejectedResult({ reason: e, redactedDiagnostic: E }) {
	return {
		status: "rejected",
		target: "text-control",
		reason: e,
		redactedDiagnostic: E
	};
}
function getNowMs() {
	return globalThis.performance?.now?.() ?? Date.now();
}
async function handleAppMenuPasteRequest({ readClipboardText: e, performNativePaste: E, dispatchOwnedPasteEvent: D = dispatchAppMenuPasteEvent, getActiveElement: O = () => document.activeElement, nativePasteMode: k = "paste" }) {
	let A = getNowMs();
	if (D()) return {
		status: "handled",
		target: "terminal"
	};
	let M = findFocusedAppMenuTextControlPasteTarget(O());
	if (!M) return E({ mode: k }), {
		status: "native-fallback",
		reason: "no-owned-target"
	};
	let N;
	try {
		N = await e({ maxBytes: TEXT_CONTROL_PASTE_MAX_BYTES });
	} catch (e) {
		return isClipboardTextTooLargeError(e) ? createAppMenuTextControlRejectedResult({
			reason: "too-large",
			redactedDiagnostic: createTextControlRejectedResult("too-large", TEXT_CONTROL_PASTE_MAX_BYTES + 1, "app-menu", getNowMs() - A).redactedDiagnostic
		}) : M.ownerDocument.activeElement === M ? (E({ mode: k }), {
			status: "native-fallback",
			reason: "clipboard-read-failed"
		}) : createAppMenuTextControlRejectedResult({
			reason: "target-unavailable",
			redactedDiagnostic: createTextControlRejectedResult("target-unavailable", 0, "app-menu", getNowMs() - A).redactedDiagnostic
		});
	}
	let P = await pasteTextIntoTextControl(M, N, {
		source: "app-menu",
		canContinue: (e) => e.ownerDocument.activeElement === e
	});
	return P.status === "pasted" ? {
		status: "handled",
		target: "text-control"
	} : createAppMenuTextControlRejectedResult({
		reason: P.reason,
		redactedDiagnostic: P.redactedDiagnostic
	});
}
const APP_MENU_SELECTION_ACTION_EVENT = "orca-app-menu-selection-action";
function dispatchAppMenuSelectionAction(e, E = window) {
	let D = new CustomEvent(APP_MENU_SELECTION_ACTION_EVENT, {
		detail: e,
		cancelable: !0
	});
	return E.dispatchEvent(D), D.defaultPrevented;
}
var LIGATURE_FONT_TOKENS = [
	"fira code",
	"fira mono",
	"jetbrains mono",
	"jetbrainsmono",
	"cascadia code",
	"cascadia mono",
	"iosevka",
	"victor mono",
	"hasklig",
	"monoid",
	"operator mono",
	"dank mono",
	"mononoki",
	"pragmatapro",
	"recursive",
	"monolisa",
	"commit mono",
	"geist mono",
	"maple mono",
	"departure mono"
];
function fontFamilyHasKnownLigatures(e) {
	if (!e) return !1;
	let E = e.split(",")[0]?.replace(/"/g, "").trim().toLowerCase() ?? "";
	return E ? LIGATURE_FONT_TOKENS.some((e) => E.includes(e)) : !1;
}
function resolveTerminalLigaturesEnabled(e, E) {
	return e === "on" ? !0 : e === "off" ? !1 : fontFamilyHasKnownLigatures(E);
}
const PANE_PTY_RESIZE_HOLD_FLUSH_EVENT = "orca-pane-pty-resize-hold-flush";
var resizeHolds = /* @__PURE__ */ new WeakMap();
function getOrCreateHoldState(e) {
	let E = resizeHolds.get(e);
	if (E) return E;
	let D = {
		depth: 0,
		pending: null
	};
	return resizeHolds.set(e, D), D;
}
function beginPanePtyResizeHold(e) {
	let E = getOrCreateHoldState(e);
	E.depth += 1;
}
function queuePanePtyResizeIfHeld(e, E, D) {
	let O = resizeHolds.get(e);
	return O ? (O.pending = {
		cols: E,
		rows: D
	}, !0) : !1;
}
function flushPanePtyResizeHold(e) {
	let E = resizeHolds.get(e);
	E && (--E.depth, !(E.depth > 0) && (resizeHolds.delete(e), E.pending && e.dispatchEvent(new CustomEvent(PANE_PTY_RESIZE_HOLD_FLUSH_EVENT, { detail: E.pending }))));
}
function cancelPanePtyResizeHold(e) {
	let E = resizeHolds.get(e);
	E && (--E.depth, E.pending = null, E.depth <= 0 && resizeHolds.delete(e));
}
function collectPaneElements(e, E) {
	if (e) {
		if (e.classList.contains("pane")) {
			E.add(e);
			return;
		}
		for (let D of e.querySelectorAll(".pane[data-pane-id]")) E.add(D);
	}
}
function holdPtyResizesForPaneSubtrees(e) {
	let E = /* @__PURE__ */ new Set();
	for (let D of e) collectPaneElements(D, E);
	for (let e of E) beginPanePtyResizeHold(e);
	let D = Array.from(E), O = !1, k = (e) => {
		if (!O) {
			O = !0;
			for (let E of D) e ? flushPanePtyResizeHold(E) : cancelPanePtyResizeHold(E);
		}
	};
	return {
		flush: () => k(!0),
		cancel: () => k(!1)
	};
}
var MIN_PANE_SIZE = 50, dividerDragCleanups = /* @__PURE__ */ new WeakMap();
function createDividerFlexFrameScheduler({ apply: e, requestFrame: E = requestAnimationFrame, cancelFrame: D = cancelAnimationFrame }) {
	let O = null, k = null, A = () => {
		O = null;
		let E = k;
		k = null, E && e(E.prevFlex, E.nextFlex);
	};
	return {
		schedule(e, D) {
			k = {
				prevFlex: e,
				nextFlex: D
			}, O === null && (O = E(A));
		},
		flush() {
			O !== null && (D(O), O = null), A();
		},
		cancel() {
			O !== null && (D(O), O = null), k = null;
		}
	};
}
function attachDividerDrag(e, E, D) {
	let O = !1, k = !1, A = 0, j = 0, M = 0, N = null, P = null, F = "", I = "", L = null, R = null, z = null, B = !1, V = createDividerFlexFrameScheduler({ apply: (e, E) => {
		!N || !P || (N.style.flex = `${e} 1 0%`, P.style.flex = `${E} 1 0%`);
	} }), H = () => {
		B || typeof window > "u" || (B = !0, window.addEventListener("pointermove", J, !0), window.addEventListener("pointerup", Y, !0), window.addEventListener("pointercancel", Z, !0), window.addEventListener("blur", Q, !0));
	}, U = () => {
		!B || typeof window > "u" || (B = !1, window.removeEventListener("pointermove", J, !0), window.removeEventListener("pointerup", Y, !0), window.removeEventListener("pointercancel", Z, !0), window.removeEventListener("blur", Q, !0));
	}, W = (E) => {
		if (E !== null) try {
			e.hasPointerCapture(E) && e.releasePointerCapture(E);
		} catch {}
	}, G = (E) => {
		if (!O) {
			U(), W(L), L = null, R = null;
			return;
		}
		let A = L;
		O = !1, L = null, R = null, U(), E ? V.flush() : (V.cancel(), k && N && P && (N.style.flex = F, P.style.flex = I)), W(A), e.classList.remove("is-dragging"), D.onDragActiveChange?.(!1);
		let j = k || E;
		j && N && D.refitPanesUnder(N), j && P && D.refitPanesUnder(P), E && j ? z?.flush() : z?.cancel(), z = null, N = null, P = null, F = "", I = "", k && E && D.onLayoutChanged?.(), k = !1;
	}, K = (B) => {
		B.preventDefault(), V.cancel(), G(!1);
		let U = e.previousElementSibling, W = e.nextElementSibling;
		if (!U || !W) return;
		let K = U.getBoundingClientRect(), q = W.getBoundingClientRect(), J = E ? K.width : K.height, Y = J + (E ? q.width : q.height);
		!Number.isFinite(Y) || Y <= 0 || (e.setPointerCapture(B.pointerId), L = B.pointerId, R = B.pointerType, e.classList.add("is-dragging"), O = !0, k = !1, D.onDragActiveChange?.(!0), H(), A = E ? B.clientX : B.clientY, N = U, P = W, F = N.style.flex, I = P.style.flex, z = holdPtyResizesForPaneSubtrees([N, P]), M = Y, j = J);
	}, q = (e) => e.pointerId === L || e.isPrimary && e.pointerType !== "touch" && R !== "touch", J = (e) => {
		if (!O || !q(e) || !N || !P) return;
		k = !0;
		let D = (E ? e.clientX : e.clientY) - A, F = Math.min(MIN_PANE_SIZE, M / 2), I = M - F, L = Math.min(Math.max(j + D, F), I), R = M - L;
		V.schedule(L, R);
	}, Y = (e) => {
		q(e) && G(!0);
	}, X = () => {
		let E = e.previousElementSibling, O = e.nextElementSibling;
		!E || !O || (E.style.flex = "1 1 0%", O.style.flex = "1 1 0%", D.refitPanesUnder(E), D.refitPanesUnder(O), D.onLayoutChanged?.());
	}, Z = (e) => {
		q(e) && G(!1);
	}, Q = () => {
		G(!1);
	};
	e.addEventListener("pointerdown", K), e.addEventListener("pointermove", J), e.addEventListener("pointerup", Y), e.addEventListener("pointercancel", Z), e.addEventListener("dblclick", X), dividerDragCleanups.set(e, () => {
		G(!1), e.removeEventListener("pointerdown", K), e.removeEventListener("pointermove", J), e.removeEventListener("pointerup", Y), e.removeEventListener("pointercancel", Z), e.removeEventListener("dblclick", X);
	});
}
function disposeDividerDrag(e) {
	let E = dividerDragCleanups.get(e);
	E && (E(), dividerDragCleanups.delete(e));
}
function getDividerHitSize(e) {
	return (e.dividerThicknessPx ?? 4) + 6;
}
function createDivider(e, E, D) {
	let O = document.createElement("div");
	O.className = `pane-divider ${e ? "is-vertical" : "is-horizontal"}`;
	let k = getDividerHitSize(E);
	return e ? (O.style.width = `${k}px`, O.style.cursor = "col-resize") : (O.style.height = `${k}px`, O.style.cursor = "row-resize"), O.style.flex = "none", O.style.position = "relative", attachDividerDrag(O, e, D), O;
}
function disposeDivider(e) {
	disposeDividerDrag(e);
}
function disposeDividersIn(e) {
	let E = e.querySelectorAll(".pane-divider");
	for (let e of E) disposeDivider(e);
}
function applyDividerStyles(e, E) {
	let D = E.dividerThicknessPx ?? 4, O = getDividerHitSize(E), k = e.querySelectorAll(".pane-divider");
	for (let e of k) {
		let E = e;
		E.classList.contains("is-vertical") ? E.style.width = `${O}px` : E.style.height = `${O}px`, E.style.setProperty("--divider-thickness", `${D}px`), E.style.setProperty("--divider-extension", `${O / 2}px`);
	}
}
function applyPaneOpacity(e, E, D) {
	let { activePaneOpacity: O = 1, inactivePaneOpacity: k = 1, opacityTransitionMs: A = 0 } = D, j = A > 0 ? `opacity ${A}ms ease` : "";
	for (let D of e) {
		let e = D.id === E;
		D.container.style.opacity = String(e ? O : k), D.container.style.transition = j;
	}
}
function applyRootBackground(e, E) {
	E.splitBackground && (e.style.background = E.splitBackground), E.paddingX !== void 0 && e.style.setProperty("--pane-padding-x", `${E.paddingX}px`), E.paddingY !== void 0 && e.style.setProperty("--pane-padding-y", `${E.paddingY}px`);
}
function findPaneChildren(e) {
	return Array.from(e.children).filter((e) => e instanceof HTMLElement && (e.classList.contains("pane") || e.classList.contains("pane-split")));
}
function getSplitDirection(e) {
	return e.classList.contains("is-horizontal") ? "horizontal" : "vertical";
}
function getEqualizeWeight(e, E, D) {
	if (!e.classList.contains("pane-split") || getSplitDirection(e) !== E) return 1;
	let O = D.get(e);
	if (O !== void 0) return O;
	let k = findPaneChildren(e), A = Math.max(1, k.reduce((e, O) => e + getEqualizeWeight(O, E, D), 0));
	return D.set(e, A), A;
}
function equalizePaneSplitSizes(e) {
	if (!e) return !1;
	let E = /* @__PURE__ */ new Map(), D = !1, O = (e) => {
		if (!e.classList.contains("pane-split")) return;
		let k = getSplitDirection(e), A = findPaneChildren(e);
		if (A.length >= 2) for (let e of A) {
			let O = `${getEqualizeWeight(e, k, E)} 1 0%`;
			e.style.flex !== O && (e.style.flex = O, D = !0);
		}
		for (let e of A) O(e);
	};
	return O(e), D;
}
function fitAllPanesInternal(e) {
	for (let E of e.values()) safeFit(E);
}
function refitPanesUnder(e, E) {
	if (e.classList.contains("pane")) {
		let D = Number(e.dataset.paneId), O = E.get(D);
		O && safeFit(O);
		return;
	}
	if (e.classList.contains("pane-split")) {
		let D = e.querySelectorAll(".pane[data-pane-id]");
		for (let e of D) {
			let D = Number(e.dataset.paneId), O = E.get(D);
			O && safeFit(O);
		}
	}
}
function detachPaneFromTree(e, E) {
	let D = e.container, O = D.parentElement;
	if (!O) return;
	if (!O.classList.contains("pane-split")) {
		D.remove();
		return;
	}
	let k = Array.from(O.children).filter((e) => e instanceof HTMLElement && (e.classList.contains("pane") || e.classList.contains("pane-split"))).find((e) => e !== D) ?? null;
	D.remove(), removeDividers(O), promoteSibling(k, O, E.getRoot());
}
function insertPaneNextTo(e, E, D, O) {
	let k = E.container, A = k.parentElement;
	if (!A) return;
	let j = D === "left" || D === "right", M = D === "left" || D === "top", N = k.style.flex || "", P = k.style.minWidth || "", F = k.style.minHeight || "", I = document.createElement("div");
	I.className = `pane-split ${j ? "is-vertical" : "is-horizontal"}`, I.style.display = "flex", I.style.flexDirection = j ? "row" : "column", A.classList.contains("pane-split") ? (I.style.flex = N || "1 1 0%", I.style.minWidth = P || "0", I.style.minHeight = F || "0") : (I.style.width = "100%", I.style.height = "100%");
	let L = createDivider(j, O.getStyleOptions(), {
		refitPanesUnder: O.refitPanesUnder,
		onLayoutChanged: O.onLayoutChanged,
		onDragActiveChange: O.onDragActiveChange
	});
	applyPaneFlexStyle(e.container), applyPaneFlexStyle(k);
	let R = !!e.webglAddon, z = !!E.webglAddon;
	disposeWebgl(e), disposeWebgl(E), A.replaceChild(I, k), M ? (I.appendChild(e.container), I.appendChild(L), I.appendChild(k)) : (I.appendChild(k), I.appendChild(L), I.appendChild(e.container)), (O.requestPaneReparentFrame ?? ((e) => requestAnimationFrame(e)))(() => {
		O.isDestroyed?.() || (R && e.gpuRenderingEnabled && !e.webglDisabledAfterContextLoss && attachWebgl(e), z && E.gpuRenderingEnabled && !E.webglDisabledAfterContextLoss && attachWebgl(E), O.safeFit(e), O.safeFit(E));
	});
}
function promoteSibling(e, E, D) {
	if (e) {
		let O = E.parentElement;
		O && (O === D ? (e.style.flex = "", e.style.minWidth = "", e.style.minHeight = "", e.style.width = "100%", e.style.height = "100%", e.style.position = "relative", e.style.overflow = "hidden") : O.classList.contains("pane-split") && (e.style.flex = E.style.flex || "1 1 0%", e.style.minWidth = E.style.minWidth || "0", e.style.minHeight = E.style.minHeight || "0", e.style.overflow = "hidden"), O.replaceChild(e, E));
	} else E.remove();
}
function applyPaneFlexStyle(e) {
	e.style.flex = "1 1 0%", e.style.minWidth = "0", e.style.minHeight = "0", e.style.position = "relative", e.style.overflow = "hidden", e.style.width = "", e.style.height = "";
}
function removeDividers(e) {
	let E = Array.from(e.children).filter((e) => e instanceof HTMLElement && e.classList.contains("pane-divider"));
	for (let e of E) disposeDivider(e), e.remove();
}
function wrapInSplit(e, E, D, O, k) {
	let A = e.parentElement;
	if (!A) return;
	let j = e.style.flex || "", M = e.style.minWidth || "", N = e.style.minHeight || "", P = document.createElement("div");
	P.className = `pane-split ${D ? "is-vertical" : "is-horizontal"}`, P.style.display = "flex", P.style.flexDirection = D ? "row" : "column", A.classList.contains("pane-split") ? (P.style.flex = j || "1 1 0%", P.style.minWidth = M || "0", P.style.minHeight = N || "0") : (P.style.width = "100%", P.style.height = "100%"), applyPaneFlexStyle(e), applyPaneFlexStyle(E);
	let F = k?.ratio;
	F !== void 0 && F > 0 && F < 1 && (e.style.flex = `${F} 1 0%`, E.style.flex = `${1 - F} 1 0%`), A.replaceChild(P, e), P.appendChild(e), P.appendChild(O), P.appendChild(E);
}
var parkedCursorBlink = /* @__PURE__ */ new WeakMap();
function suspendTerminalCursorBlink(e) {
	parkedCursorBlink.has(e) || (parkedCursorBlink.set(e, e.options.cursorBlink === !0), e.options.cursorBlink = !1);
}
function resumeTerminalCursorBlink(e) {
	if (!parkedCursorBlink.has(e)) return;
	let E = parkedCursorBlink.get(e) === !0;
	parkedCursorBlink.delete(e), e.options.cursorBlink = E;
}
function setTerminalCursorBlinkOption(e, E) {
	if (parkedCursorBlink.has(e)) {
		parkedCursorBlink.set(e, E);
		return;
	}
	e.options.cursorBlink = E;
}
var DEFAULT_FOREGROUND = {
	rgb: [
		255,
		255,
		255
	],
	alpha: 255
}, DEFAULT_BACKGROUND = {
	rgb: [
		0,
		0,
		0
	],
	alpha: 255
}, DEFAULT_CURSOR = {
	rgb: [
		255,
		255,
		255
	],
	alpha: 255
}, DEFAULT_ANSI_16 = [
	"#2e3436",
	"#cc0000",
	"#4e9a06",
	"#c4a000",
	"#3465a4",
	"#75507b",
	"#06989a",
	"#d3d7cf",
	"#555753",
	"#ef2929",
	"#8ae234",
	"#fce94f",
	"#729fcf",
	"#ad7fa8",
	"#34e2e2",
	"#eeeeec"
], THEME_ANSI_KEYS = [
	"black",
	"red",
	"green",
	"yellow",
	"blue",
	"magenta",
	"cyan",
	"white",
	"brightBlack",
	"brightRed",
	"brightGreen",
	"brightYellow",
	"brightBlue",
	"brightMagenta",
	"brightCyan",
	"brightWhite"
];
function buildDefaultAnsiPalette() {
	let e = DEFAULT_ANSI_16.map((e) => parseThemeColor(e, DEFAULT_BACKGROUND).rgb), E = [
		0,
		95,
		135,
		175,
		215,
		255
	];
	for (let D = 0; D < 216; D++) e.push([
		E[D / 36 % 6 | 0],
		E[D / 6 % 6 | 0],
		E[D % 6]
	]);
	for (let E = 0; E < 24; E++) {
		let D = 8 + E * 10;
		e.push([
			D,
			D,
			D
		]);
	}
	return e;
}
var DEFAULT_ANSI_PALETTE = buildDefaultAnsiPalette();
function parseCssColor(e) {
	if (/^#[\da-f]{3,8}$/i.test(e)) switch (e.length) {
		case 4: return {
			rgb: [
				Number.parseInt(e.slice(1, 2).repeat(2), 16),
				Number.parseInt(e.slice(2, 3).repeat(2), 16),
				Number.parseInt(e.slice(3, 4).repeat(2), 16)
			],
			alpha: 255
		};
		case 5: return {
			rgb: [
				Number.parseInt(e.slice(1, 2).repeat(2), 16),
				Number.parseInt(e.slice(2, 3).repeat(2), 16),
				Number.parseInt(e.slice(3, 4).repeat(2), 16)
			],
			alpha: Number.parseInt(e.slice(4, 5).repeat(2), 16)
		};
		case 7: return {
			rgb: [
				Number.parseInt(e.slice(1, 3), 16),
				Number.parseInt(e.slice(3, 5), 16),
				Number.parseInt(e.slice(5, 7), 16)
			],
			alpha: 255
		};
		case 9: return {
			rgb: [
				Number.parseInt(e.slice(1, 3), 16),
				Number.parseInt(e.slice(3, 5), 16),
				Number.parseInt(e.slice(5, 7), 16)
			],
			alpha: Number.parseInt(e.slice(7, 9), 16)
		};
		default: return null;
	}
	let E = e.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
	return E ? {
		rgb: [
			Number.parseInt(E[1], 10),
			Number.parseInt(E[2], 10),
			Number.parseInt(E[3], 10)
		],
		alpha: Math.round((E[5] === void 0 ? 1 : Number.parseFloat(E[5])) * 255)
	} : null;
}
function parseThemeColor(e, E) {
	if (e !== void 0) {
		let E = parseCssColor(e);
		if (E) return E;
	}
	return E;
}
function blendOverBackground(e, E) {
	if (E.alpha === 255) return E.rgb;
	let D = E.alpha / 255;
	return [
		e[0] + Math.round((E.rgb[0] - e[0]) * D),
		e[1] + Math.round((E.rgb[1] - e[1]) * D),
		e[2] + Math.round((E.rgb[2] - e[2]) * D)
	];
}
function composeTerminalViewAttributes(e, E, D) {
	let O = parseThemeColor(e?.foreground, DEFAULT_FOREGROUND), k = parseThemeColor(e?.background, DEFAULT_BACKGROUND), A = parseThemeColor(e?.cursor, DEFAULT_CURSOR), j = THEME_ANSI_KEYS.map((E, D) => {
		let O = e?.[E];
		return parseThemeColor(typeof O == "string" ? O : void 0, {
			rgb: DEFAULT_ANSI_PALETTE[D],
			alpha: 255
		}).rgb;
	});
	for (let E = 16; E < DEFAULT_ANSI_PALETTE.length; E++) {
		let D = e?.extendedAnsi?.[E - 16];
		j.push(parseThemeColor(D, {
			rgb: DEFAULT_ANSI_PALETTE[E],
			alpha: 255
		}).rgb);
	}
	return {
		foreground: O.rgb,
		background: k.rgb,
		cursor: blendOverBackground(k.rgb, A),
		ansi: j,
		colorSchemeMode: E,
		cursorStyle: D.terminalCursorStyle ?? "block",
		cursorBlink: D.terminalCursorBlink === !0
	};
}
var lastPublishedSnapshot = null;
function sendViaPreload(e) {
	return typeof window > "u" || !window.api?.pty?.publishTerminalViewAttributes ? !1 : (window.api.pty.publishTerminalViewAttributes(e), !0);
}
function publishTerminalViewAttributes(e, E, D, O = sendViaPreload) {
	let k = composeTerminalViewAttributes(e, E, D), A = JSON.stringify(k);
	return A === lastPublishedSnapshot || !O(k) ? !1 : (lastPublishedSnapshot = A, !0);
}
function normalizeTerminalLineHeight(e) {
	return typeof e != "number" || !Number.isFinite(e) ? 1 : Math.min(3, Math.max(1, e));
}
var MODE_2031_SCAN_TAIL_LIMIT = 128;
function mode2031SequenceFor(e) {
	return e === "dark" ? "\x1B[?997;1n" : "\x1B[?997;2n";
}
function resolveTerminalColorSchemeMode(e, E) {
	let D = e?.theme ?? "system";
	return D === "system" ? E ? "dark" : "light" : D;
}
const INITIAL_MODE_2031_REPLY_SCAN_STATE = {
	tail: "",
	pendingSubscribe: !1
};
var NO_MODE_2031_REPLY_DECISION = {
	decision: null,
	state: INITIAL_MODE_2031_REPLY_SCAN_STATE
}, NO_MODE_2031_SEQUENCE = {
	subscribe: !1,
	unsubscribe: !1,
	finalState: null,
	tail: "",
	tailMayResolveToMode2031: !1
};
function scanMode2031Sequences(e, E) {
	if (!e && !E.includes("\x1B") && !E.includes("")) return NO_MODE_2031_SEQUENCE;
	let D = `${e}${E}`, O = extractPrivateModeScanTail(D), k = {
		subscribe: !1,
		unsubscribe: !1,
		finalState: null,
		tail: O,
		tailMayResolveToMode2031: tailCouldStillBeMode2031(O)
	}, A = /\x1b\[\?([0-9;]+)([hl])|\x9b\?([0-9;]+)([hl])/g, j;
	for (; (j = A.exec(D)) !== null;) hasMode2031(j[1] ?? j[3]) && ((j[2] ?? j[4]) === "h" ? (k.subscribe = !0, k.finalState = "subscribed") : (k.unsubscribe = !0, k.finalState = "unsubscribed"));
	return k;
}
function scanMode2031ReplyDecision(e, E) {
	if (!e.pendingSubscribe && !e.tail && !E.includes("\x1B") && !E.includes("")) return NO_MODE_2031_REPLY_DECISION;
	let D = scanMode2031Sequences(e.tail, E), O = D.finalState, k = e.pendingSubscribe;
	return D.finalState === "unsubscribed" ? k = !1 : (D.finalState === "subscribed" || k) && (D.tailMayResolveToMode2031 ? (O = null, k = !0) : (O = "subscribed", k = !1)), {
		decision: O,
		state: {
			tail: D.tail,
			pendingSubscribe: k
		}
	};
}
function hasMode2031(e) {
	return e.split(";").some((e) => Number(e) === 2031);
}
function extractPrivateModeScanTail(e) {
	let E = Math.max(e.lastIndexOf("\x1B"), e.lastIndexOf(""));
	if (E === -1) return "";
	let D = e.slice(E);
	return D.length > MODE_2031_SCAN_TAIL_LIMIT ? "" : D === "\x1B" || D === "\x1B[" || D === "" ? D : D.startsWith("\x1B[?") ? isIncompletePrivateModeParams(D.slice(3)) ? D : "" : D.startsWith("?") && isIncompletePrivateModeParams(D.slice(2)) ? D : "";
}
function isIncompletePrivateModeParams(e) {
	return /^[0-9;]*$/.test(e);
}
function tailCouldStillBeMode2031(e) {
	return e.length > 0;
}
function sendMode2031Reply(e, E) {
	return e.sendInputImmediate(mode2031SequenceFor(E));
}
function maybePushMode2031Flip(e, E, D, O, k) {
	return !D.isConnected() || !O.get(e) || k.get(e) === E || !sendMode2031Reply(D, E) ? !1 : (k.set(e, E), !0);
}
function resolveTerminalInlineImagesEnabled(e) {
	return e !== !1;
}
function hexToRgba(e, E) {
	let D = e.replace("#", "");
	return D.length === 3 && (D = D.split("").map((e) => e + e).join("")), `rgba(${Number.parseInt(D.slice(0, 2), 16)}, ${Number.parseInt(D.slice(2, 4), 16)}, ${Number.parseInt(D.slice(4, 6), 16)}, ${E})`;
}
function isHexColor(e) {
	return HEX_COLOR_RE.test(e);
}
function composeActiveTerminalTheme(e, E) {
	if (!e) return null;
	let D = {
		overviewRulerBorder: "transparent",
		scrollbarSliderBackground: "rgba(180, 180, 185, 0.4)",
		scrollbarSliderHoverBackground: "rgba(180, 180, 185, 0.6)",
		scrollbarSliderActiveBackground: "rgba(180, 180, 185, 0.8)",
		...e
	};
	return E.terminalColorOverrides && (D = {
		...D,
		...E.terminalColorOverrides
	}), E.terminalBackgroundOpacity !== void 0 && D.background && (D = {
		...D,
		background: hexToRgba(D.background, E.terminalBackgroundOpacity)
	}), E.terminalCursorOpacity !== void 0 && D.cursor && isHexColor(D.cursor) && (D = {
		...D,
		cursor: hexToRgba(D.cursor, E.terminalCursorOpacity)
	}), D;
}
function publishTerminalViewAttributesAtAppStart(e, E, D) {
	if (!e) return !1;
	let O = resolveEffectiveTerminalAppearance(e, E), j = composeActiveTerminalTheme(O.theme ?? getBuiltinTheme(O.themeName), e);
	return D === void 0 ? publishTerminalViewAttributes(j, O.mode, e) : publishTerminalViewAttributes(j, O.mode, e, D);
}
function composedTerminalThemesEqual(e, E) {
	if (!e) return !1;
	if (e === E) return !0;
	let D = new Set([...Object.keys(e), ...Object.keys(E)]);
	for (let O of D) if (O !== "extendedAnsi" && e[O] !== E[O]) return !1;
	let O = e.extendedAnsi, k = E.extendedAnsi;
	return !O || !k ? O === k : O.length === k.length && O.every((e, E) => e === k[E]);
}
function applyTerminalAppearance(E, j, R, z, B, V, H, G) {
	let q = resolveEffectiveTerminalAppearance(j, R), Y = resolvePaneStyleOptions(j), X = composeActiveTerminalTheme(q.theme ?? getBuiltinTheme(q.themeName), j);
	publishTerminalViewAttributes(X, q.mode, j);
	let Z = X?.background ?? "#000000", Q = resolveTerminalFontWeights(j.terminalFontWeight, j.terminalFontWeightBold), $ = resolveTerminalLigaturesEnabled(j.terminalLigatures, j.terminalFontFamily);
	for (let D of E.getPanes()) {
		X && !composedTerminalThemesEqual(D.terminal.options.theme, X) && (D.terminal.options.theme = X);
		let k = resolveTerminalMinimumContrastRatio(X?.background, q.mode, j.terminalMinimumContrastRatio);
		D.terminal.options.minimumContrastRatio !== k && (D.terminal.options.minimumContrastRatio = k), D.terminal.options.allowTransparency = j.terminalBackgroundOpacity !== void 0 && j.terminalBackgroundOpacity < 1;
		let A = j.terminalCursorStyle ?? "block";
		D.terminal.options.cursorStyle = A, D.terminal.options.cursorInactiveStyle = resolveTerminalCursorInactiveStyle(A), setTerminalCursorBlinkOption(D.terminal, j.terminalCursorBlink);
		let M = {
			fontSize: z.get(D.id) ?? j.terminalFontSize,
			fontFamily: buildFontFamily(j.terminalFontFamily),
			fontWeight: Q.fontWeight,
			fontWeightBold: Q.fontWeightBold,
			lineHeight: normalizeTerminalLineHeight(j.terminalLineHeight)
		};
		paneMetricOptionsAlreadySettled(D, M) || applyOrDeferPaneMetricOptions(D, M, canApplyPaneMetricOptions(D)), D.terminal.options.scrollSensitivity = normalizeTerminalScrollSensitivity(j.terminalScrollSensitivity), D.terminal.options.fastScrollSensitivity = normalizeTerminalFastScrollSensitivity(j.terminalFastScrollSensitivity), D.terminal.options.macOptionIsMeta = V === "true", E.setPaneLigaturesEnabled(D.id, $), E.setPaneInlineImagesEnabled(D.id, resolveTerminalInlineImagesEnabled(j.terminalInlineImages));
		let R = B.get(D.id), Y = R?.getPtyId();
		R?.isConnected() && (!Y || !getFitOverrideForPty(Y)) ? (maybePushMode2031Flip(D.id, q.mode, R, H, G), safeFitAndThen(D, "appearance-pty-resize", () => {
			B.get(D.id) !== R || !R.isConnected() || R.getPtyId() !== Y || R.resize(D.terminal.cols, D.terminal.rows);
		})) : safeFit(D);
	}
	E.setPaneStyleOptions({
		splitBackground: Z,
		paneBackground: Z,
		inactivePaneOpacity: Y.inactivePaneOpacity,
		activePaneOpacity: Y.activePaneOpacity,
		opacityTransitionMs: Y.opacityTransitionMs,
		dividerThicknessPx: Y.dividerThicknessPx,
		focusFollowsMouse: Y.focusFollowsMouse,
		paddingX: j.terminalPaddingX,
		paddingY: j.terminalPaddingY
	});
}
export { dispatchAppMenuSelectionAction as A, createDivider as C, fontFamilyHasKnownLigatures as D, queuePanePtyResizeIfHeld as E, isPrimarySelectionTextControl as F, readCurrentPrimarySelectionText as I, handleAppMenuPasteRequest as M, classifyTextControlPastePayloadOwnership as N, resolveTerminalLigaturesEnabled as O, findOwnedPasteEventTextControlTarget as P, applyRootBackground as S, PANE_PTY_RESIZE_HOLD_FLUSH_EVENT as T, wrapInSplit as _, INITIAL_MODE_2031_REPLY_SCAN_STATE as a, applyDividerStyles as b, normalizeTerminalLineHeight as c, detachPaneFromTree as d, fitAllPanesInternal as f, removeDividers as g, refitPanesUnder as h, resolveTerminalInlineImagesEnabled as i, APP_MENU_PASTE_EVENT as j, APP_MENU_SELECTION_ACTION_EVENT as k, resumeTerminalCursorBlink as l, promoteSibling as m, composeActiveTerminalTheme as n, resolveTerminalColorSchemeMode as o, insertPaneNextTo as p, publishTerminalViewAttributesAtAppStart as r, scanMode2031ReplyDecision as s, applyTerminalAppearance as t, suspendTerminalCursorBlink as u, equalizePaneSplitSizes as v, disposeDividersIn as w, applyPaneOpacity as x, findPaneChildren as y };
