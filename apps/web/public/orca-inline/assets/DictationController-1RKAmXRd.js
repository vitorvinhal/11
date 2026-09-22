import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Square } from "./square-raMJv92T.js";
import { Ku as e2eConfig, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { E as yieldToEventLoop, S as getUtf8ChunkEndIndex } from "./renderer-app-platform--nJ6HYmL.js";
import { f as useStore, p as createStore } from "./stale-document-visibility-rSdoU229.js";
import { s as keybindingMatchesAction } from "./keybindings-1v53ESY9.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { t as ShortcutKeyCombo } from "./ShortcutKeyCombo-CaaV52rL.js";
import { t as getShortcutPlatform } from "./shortcut-platform-yj_laTMg.js";
import { a as TEXT_CONTROL_PASTE_CHUNK_MAX_BYTES, n as measureTextControlPasteByteLengthWithYield, o as TEXT_CONTROL_PASTE_DIRECT_MAX_BYTES, r as pasteTextIntoTextControl, s as TEXT_CONTROL_PASTE_MAX_BYTES, t as measureTextControlPasteByteLength } from "./text-control-paste-Bg1FpWOl.js";
import { s as useShortcutKeyDetails } from "./useShortcutLabel-B283mfzm.js";
import { n as dispatchDictationControl, t as DICTATION_CONTROL_EVENT } from "./dictation-control-events-jtAkmadU.js";
import { i as openMicrophoneCaptureStream } from "./microphone-devices-DdUHYWFo.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
const DEFAULT_DICTATION_METER = {
	level: 0,
	isSpeaking: !1,
	isClipping: !1
};
var CLIPPING_THRESHOLD = .98, CLIPPING_HOLD_MS = 500;
function clamp(e, C, w) {
	return Math.min(w, Math.max(C, e));
}
function createDictationMeterAnalyzerState() {
	return {
		...DEFAULT_DICTATION_METER,
		peak: 0,
		lastUpdatedAt: 0,
		noiseFloor: .008,
		smoothedLevel: 0,
		clippingUntil: -Infinity
	};
}
function measureDictationAudioChunk(e) {
	if (e.length === 0) return {
		rms: 0,
		peak: 0
	};
	let C = 0, w = 0;
	for (let T of e) {
		let e = Math.abs(T);
		C += T * T, w = Math.max(w, e);
	}
	return {
		rms: Math.sqrt(C / e.length),
		peak: clamp(w, 0, 1)
	};
}
function analyzeDictationAudioChunk(e, C, w) {
	let { rms: T, peak: E } = measureDictationAudioChunk(e), D = Math.max(.004, w.noiseFloor * .96 + Math.min(T, w.noiseFloor * 2) * .04), O = clamp((T - D) / .16, 0, 1), k = O > w.smoothedLevel ? .58 : .2, A = w.smoothedLevel + (O - w.smoothedLevel) * k, j = E >= CLIPPING_THRESHOLD ? C + CLIPPING_HOLD_MS : w.clippingUntil;
	return {
		level: A,
		peak: E,
		isSpeaking: A >= .1 || E >= .18,
		isClipping: C <= j,
		lastUpdatedAt: C,
		noiseFloor: D,
		smoothedLevel: A,
		clippingUntil: j
	};
}
function toPublicDictationMeterState(e) {
	return {
		level: Math.round(e.level * 100) / 100,
		isSpeaking: e.isSpeaking,
		isClipping: e.isClipping
	};
}
function dictationMeterStatesEqual(e, C) {
	return e.level === C.level && e.isSpeaking === C.isSpeaking && e.isClipping === C.isClipping;
}
var MAX_BUFFERED_AUDIO_SECONDS = 30, MAX_BUFFERED_AUDIO_BYTES = 8 * 1024 * 1024, METER_PUBLISH_INTERVAL_MS = 1e3 / 15;
function useAudioCapture(e) {
	let C = (0, import_react.useRef)(null), w = (0, import_react.useRef)(null), T = (0, import_react.useRef)(null), E = (0, import_react.useRef)(null), D = (0, import_react.useRef)(!1), O = (0, import_react.useRef)(0), k = (0, import_react.useRef)(!1), A = (0, import_react.useRef)(0), j = (0, import_react.useRef)([]), M = (0, import_react.useRef)(0), N = (0, import_react.useRef)(0), P = (0, import_react.useRef)(0), F = (0, import_react.useRef)("desktop"), I = (0, import_react.useRef)(null), L = (0, import_react.useRef)(void 0);
	L.current ??= createDictationMeterAnalyzerState();
	let R = (0, import_react.useRef)(DEFAULT_DICTATION_METER), z = (0, import_react.useRef)(-Infinity), B = (0, import_react.useCallback)(() => {
		I.current?.(), I.current = null, T.current?.disconnect(), E.current?.disconnect(), T.current = null, E.current = null, w.current?.state !== "closed" && w.current?.close(), w.current = null, C.current?.getTracks().forEach((e) => e.stop()), C.current = null;
	}, []), V = (0, import_react.useCallback)(() => {
		A.current += 1, j.current = [], M.current = 0, N.current = 0;
	}, []), H = (0, import_react.useCallback)(() => {
		L.current = createDictationMeterAnalyzerState(), R.current = DEFAULT_DICTATION_METER, z.current = -Infinity, e?.(DEFAULT_DICTATION_METER);
	}, [e]), U = (0, import_react.useCallback)(() => {
		let e = j.current.shift();
		e && (M.current -= e.samples.byteLength, N.current -= e.samples.length / e.sampleRate);
	}, []), W = (0, import_react.useCallback)((e) => {
		for (j.current.push(e), M.current += e.samples.byteLength, N.current += e.samples.length / e.sampleRate; j.current.length > 0 && (M.current > MAX_BUFFERED_AUDIO_BYTES || N.current > MAX_BUFFERED_AUDIO_SECONDS);) U();
	}, [U]), G = (0, import_react.useCallback)(async (A = {}) => {
		if (D.current) return;
		let j = O.current + 1;
		O.current = j, B(), F.current = A.sessionId ?? "desktop", k.current = A.bufferAudio ?? !1, V(), P.current = 0, H();
		let { stream: M, fellBackToDefaultMicrophone: N } = await openMicrophoneCaptureStream({
			preferredDeviceId: A.microphoneDeviceId,
			preferredDeviceLabel: A.microphoneDeviceLabel,
			getUserMedia: (e) => navigator.mediaDevices.getUserMedia(e),
			enumerateDevices: navigator.mediaDevices?.enumerateDevices ? () => navigator.mediaDevices.enumerateDevices() : void 0
		});
		if (O.current !== j) {
			M.getTracks().forEach((e) => e.stop());
			return;
		}
		C.current = M;
		let U = null, G = null, K = null;
		try {
			if (U = new AudioContext(), w.current = U, U.state === "suspended" && await U.resume(), O.current !== j || C.current !== M) {
				w.current === U && (w.current = null), U.state !== "closed" && U.close(), C.current === M && (C.current = null), M.getTracks().forEach((e) => e.stop());
				return;
			}
			G = U.createMediaStreamSource(M), K = U.createScriptProcessor(4096, 1, 1);
			let B = U.sampleRate;
			K.onaudioprocess = (C) => {
				if (!D.current || O.current !== j || T.current !== K) return;
				let w = new Float32Array(C.inputBuffer.getChannelData(0)), E = performance.now();
				if (L.current = analyzeDictationAudioChunk(w, E, L.current), !document.hidden && E - z.current >= METER_PUBLISH_INTERVAL_MS) {
					z.current = E;
					let C = toPublicDictationMeterState(L.current);
					dictationMeterStatesEqual(R.current, C) || (R.current = C, e?.(C));
				}
				if (P.current += 1, k.current) {
					W({
						samples: w,
						sampleRate: B,
						sessionId: F.current
					});
					return;
				}
				window.api.speech.feedAudio(w, B, F.current).catch(() => void 0);
			}, G.connect(K), K.connect(U.destination), T.current = K, E.current = G, D.current = !0;
			let V = A.onCaptureLost, H = M.getAudioTracks()[0];
			if (V && H) {
				let e = () => {
					O.current !== j || !D.current || V();
				};
				H.addEventListener("ended", e), I.current = () => {
					H.removeEventListener("ended", e);
				};
			}
			return { fellBackToDefaultMicrophone: N };
		} catch (e) {
			if (K?.disconnect(), G?.disconnect(), T.current === K && (T.current = null), E.current === G && (E.current = null), w.current === U && (w.current = null), U && U.state !== "closed" && U.close(), M.getTracks().forEach((e) => e.stop()), C.current === M && (C.current = null), O.current === j && (k.current = !1, V()), O.current !== j) return;
			throw e;
		}
	}, [
		W,
		B,
		e,
		V,
		H
	]), K = (0, import_react.useCallback)(async () => {
		let e = A.current;
		try {
			for (; A.current === e && j.current.length > 0;) {
				let e = j.current[0];
				if (!e) break;
				U(), await window.api.speech.feedAudio(e.samples, e.sampleRate, e.sessionId);
			}
		} finally {
			A.current === e && (k.current = !1, V());
		}
	}, [U, V]), q = (0, import_react.useCallback)(() => {
		k.current = !1, V();
	}, [V]), J = (0, import_react.useCallback)(() => P.current, []);
	return {
		start: G,
		stop: (0, import_react.useCallback)((e = {}) => {
			O.current += 1, D.current = !1, k.current = !1, e.preserveBufferedAudio || V(), B(), H();
		}, [
			B,
			V,
			H
		]),
		flushBufferedAudio: K,
		discardBufferedAudio: q,
		getCapturedChunkCount: J,
		isCapturingRef: D
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), GRAPES = [
	{
		base: .64,
		response: .45,
		lift: 1
	},
	{
		base: .76,
		response: .75,
		lift: -1
	},
	{
		base: .9,
		response: 1,
		lift: 1
	},
	{
		base: 1,
		response: 1.25,
		lift: -1
	},
	{
		base: .86,
		response: .9,
		lift: 1
	},
	{
		base: .72,
		response: 1.1,
		lift: -1
	},
	{
		base: .82,
		response: .7,
		lift: 1
	},
	{
		base: .68,
		response: .55,
		lift: -1
	},
	{
		base: .58,
		response: .35,
		lift: 1
	}
];
function DictationGrapes({ level: e, active: C, transitioning: w }) {
	let T = Math.min(1, Math.max(0, e));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-testid": "dictation-grapes",
		"aria-hidden": "true",
		className: cn("flex h-6 w-11 shrink-0 items-center justify-center gap-px overflow-hidden", w && "animate-pulse motion-reduce:animate-none"),
		children: GRAPES.map((e, w) => {
			let E = C ? T : 0, D = e.base + E * e.response;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "size-1 shrink-0 rounded-full bg-current opacity-80 transition-transform duration-100 ease-out motion-reduce:transition-none",
				style: { transform: `translateY(${E * e.lift * 2}px) scale(${D})` }
			}, w);
		})
	});
}
var dictationMeterStore = createStore(() => DEFAULT_DICTATION_METER);
function publishDictationMeter(e) {
	dictationMeterStatesEqual(dictationMeterStore.getState(), e) || dictationMeterStore.setState(e, !0);
}
function useDictationMeter() {
	return useStore(dictationMeterStore, (e) => e);
}
if (e2eConfig.exposeStore && typeof window < "u") {
	let e = window;
	e.__dictationMeterE2E = { publish: publishDictationMeter };
}
function DictationIndicator() {
	let e = useAppStore((e) => e.dictationState), C = useAppStore((e) => e.partialTranscript), O = useDictationMeter(), A = useAppStore((e) => e.settings?.voice?.dictationMode === "hold"), P = useShortcutKeyDetails("voice.dictation");
	if (![
		"listening",
		"starting",
		"stopping"
	].includes(e)) return null;
	let F = e === "listening", I = F && O.isClipping, L = F && O.isSpeaking && !I, R = e === "starting" ? translate("auto.components.dictation.DictationIndicator.7f3660a7ba", "Starting mic…") : e === "stopping" ? translate("auto.components.dictation.DictationIndicator.f082d0cb9d", "Processing…") : translate("auto.components.dictation.DictationIndicator.3de5a129e7", "Listening"), z = I ? translate("auto.components.dictation.DictationIndicator.4977162383", "Too loud") : L ? translate("auto.components.dictation.DictationIndicator.25f2b7a6a5", "Speaking") : R, V = I ? z : R, H = e !== "stopping", U = !A && P.keys.length > 0, W = C.trim(), G = translate("auto.components.dictation.DictationIndicator.335e1bc6cb", "Stop dictation");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-testid": "dictation-indicator",
		className: cn("fixed bottom-12 left-1/2 z-50 -translate-x-1/2 overflow-hidden", "border border-border bg-popover/95 text-sm text-popover-foreground shadow-floating backdrop-blur", "transition-[width,border-radius,opacity] duration-200 ease-out motion-reduce:transition-none", W ? "w-[min(28rem,calc(100vw-2rem))] rounded-xl" : "max-w-[min(28rem,calc(100vw-2rem))] rounded-full", I && "border-destructive/40 text-destructive"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-10 items-center gap-2 px-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DictationGrapes, {
					level: O.level,
					active: e !== "stopping",
					transitioning: e !== "listening"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": !0,
					className: "min-w-0 truncate font-medium",
					children: z
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					role: "status",
					"aria-live": "polite",
					"aria-atomic": "true",
					className: "sr-only",
					children: V
				}),
				H ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": !0,
					className: "ml-0.5 h-4 w-px shrink-0 bg-border"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon-xs",
						"aria-label": G,
						className: "shrink-0 text-muted-foreground hover:bg-accent hover:text-accent-foreground",
						onMouseDown: (e) => e.preventDefault(),
						onClick: () => dispatchDictationControl("stop"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-3 fill-current" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, {
					side: "top",
					sideOffset: 6,
					className: "flex items-center gap-1.5",
					children: [G, U ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutKeyCombo, {
						keys: P.keys,
						doubleTap: P.doubleTap
					}) : null]
				})] })] }) : null
			]
		}), W ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "truncate border-t border-border px-3 py-2 text-xs text-muted-foreground",
			children: W
		}) : null]
	});
}
function captureInsertionTarget() {
	let e = document.activeElement;
	if (!e) return null;
	if (e.classList.contains("xterm-helper-textarea")) {
		let C = e.closest(".pane[data-pane-id]"), w = e.closest("[data-terminal-tab-id]"), T = Number(C?.dataset.paneId), E = w?.dataset.terminalTabId;
		return E && Number.isFinite(T) ? {
			kind: "terminal",
			tabId: E,
			paneId: T
		} : null;
	}
	return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement ? {
		kind: "text",
		element: e
	} : e instanceof HTMLElement && e.isContentEditable ? {
		kind: "contentEditable",
		element: e
	} : null;
}
function insertText(e, C) {
	if (C.kind === "terminal") {
		document.dispatchEvent(new CustomEvent("dictation:insertText", { detail: {
			text: e,
			tabId: C.tabId,
			paneId: C.paneId
		} }));
		return;
	}
	if (C.kind === "text") {
		let w = C.element;
		if (!w.isConnected) return;
		pasteTextIntoTextControl(w, e, {
			source: "programmatic",
			inputType: "insertText",
			canContinue: (e) => e.ownerDocument.activeElement === e
		}).catch(() => {});
		return;
	}
	C.kind === "contentEditable" && insertTextIntoContentEditableTarget(C.element, e).catch(() => {});
}
function findClosestEditorElement(e) {
	return e.closest(".ProseMirror, [contenteditable=\"true\"]");
}
async function insertTextIntoContentEditableTarget(e, C) {
	let w = measureTextControlPasteByteLength(C, { stopAfterBytes: TEXT_CONTROL_PASTE_DIRECT_MAX_BYTES });
	if (w.byteLength === 0 || !isContentEditableDictationTargetCurrent(e)) return;
	let T = findClosestEditorElement(e) ?? e;
	if (!w.exceededLimit) {
		insertContentEditableDictationChunk(e, T, C);
		return;
	}
	if ((await measureTextControlPasteByteLengthWithYield(C, { stopAfterBytes: 16777216 })).exceededLimit) return;
	let E = 0;
	for (; E < C.length;) {
		if (!isContentEditableDictationTargetCurrent(e)) return;
		let w = getUtf8ChunkEndIndex(C, E, TEXT_CONTROL_PASTE_CHUNK_MAX_BYTES);
		if (!insertContentEditableDictationChunk(e, T, C.slice(E, w))) return;
		E = w, E < C.length && await yieldToEventLoop();
	}
}
function insertContentEditableDictationChunk(e, C, w) {
	let T = new InputEvent("beforeinput", {
		bubbles: !0,
		cancelable: !0,
		inputType: "insertText",
		data: w
	});
	if (!C.dispatchEvent(T)) return !1;
	if (e.ownerDocument.execCommand?.("insertText", !1, w) === !0) return !0;
	let E = e.ownerDocument.getSelection();
	if (E && E.rangeCount > 0) {
		let C = E.getRangeAt(0);
		C.deleteContents();
		let T = e.ownerDocument.createTextNode(w);
		C.insertNode(T), C.setStartAfter(T), C.collapse(!0), E.removeAllRanges(), E.addRange(C);
	}
	return C.dispatchEvent(new InputEvent("input", {
		bubbles: !0,
		inputType: "insertText",
		data: w
	})), !0;
}
function isContentEditableDictationTargetCurrent(e) {
	return e.isConnected && e.contains(e.ownerDocument.activeElement);
}
var WORD_BOUNDARY_CHAR_RE = /^[\p{L}\p{N}]$/u, CJK_BOUNDARY_CHAR_RE = /^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]$/u, NO_SPACE_BEFORE_CHAR_RE = /^[,.;:!?%。，、！？；：）)\]}]$/u, NO_SPACE_AFTER_CHAR_RE = /^[([{（《「『]$/u, SPACE_AFTER_CHAR_RE = /^[,.;:!?%]$/u;
function getFirstNonWhitespaceChar(e) {
	return Array.from(e.trimStart())[0] ?? "";
}
function getLastNonWhitespaceChar(e) {
	return Array.from(e.trimEnd()).at(-1) ?? "";
}
function shouldInsertSpaceBetweenFinalSegments(e, C) {
	if (!e || !C || /\s$/.test(e) || /^\s/.test(C)) return !1;
	let w = getLastNonWhitespaceChar(e), T = getFirstNonWhitespaceChar(C);
	return !w || !T || CJK_BOUNDARY_CHAR_RE.test(w) || CJK_BOUNDARY_CHAR_RE.test(T) || NO_SPACE_BEFORE_CHAR_RE.test(T) || NO_SPACE_AFTER_CHAR_RE.test(w) ? !1 : (WORD_BOUNDARY_CHAR_RE.test(w) || SPACE_AFTER_CHAR_RE.test(w)) && WORD_BOUNDARY_CHAR_RE.test(T);
}
function formatFinalTranscriptSegment(e, C) {
	return shouldInsertSpaceBetweenFinalSegments(C, e) ? ` ${e}` : e;
}
var STOPPED_SESSION_WAIT_MS = 1e3, MAX_EARLY_STOPPED_SESSION_IDS = 16;
function recordStoppedSession(e, C, w) {
	let T = w.current.get(e);
	if (T) {
		w.current.delete(e), T();
		return;
	}
	for (C.current.delete(e), C.current.add(e); C.current.size > MAX_EARLY_STOPPED_SESSION_IDS;) {
		let e = C.current.values().next().value;
		if (!e) break;
		C.current.delete(e);
	}
}
function waitForStoppedSession(e, C, w) {
	return C.current.delete(e) ? Promise.resolve() : new Promise((C) => {
		let T = window.setTimeout(() => {
			w.current.delete(e), C();
		}, STOPPED_SESSION_WAIT_MS);
		w.current.set(e, () => {
			window.clearTimeout(T), C();
		});
	});
}
function openVoiceSettings() {
	useAppStore.getState().openSettingsTarget({
		pane: "voice",
		repoId: null
	}), useAppStore.getState().openSettingsPage();
}
function showDictationStartErrorToast(e) {
	e.includes("Permission") || e.includes("NotAllowed") ? toast.error(translate("auto.components.dictation.DictationController.2d5b9fabf9", "Microphone access denied. Grant access in system settings, then restart Orca.")) : e.includes("not ready") ? toast("Speech model not ready. Download it in Settings > Voice.") : e.includes("Unknown model") ? toast("Selected model is no longer available. Please choose another in Settings > Voice.", { action: {
		label: translate("auto.components.dictation.DictationController.bb7f599ee7", "Open Settings"),
		onClick: openVoiceSettings
	} }) : toast.error(translate("auto.components.dictation.DictationController.55127a3706", "Dictation failed: {{value0}}", { value0: e }));
}
var MODIFIER_KEYS_BY_NAME = {
	Alt: "alt",
	AltGraph: "alt",
	Control: "control",
	Ctrl: "control",
	Meta: "meta",
	OS: "meta",
	Shift: "shift"
}, UNRELIABLE_KEY_VALUES = new Set([
	"",
	"Dead",
	"Unidentified"
]), UNRELIABLE_CODE_VALUES = new Set(["", "Unidentified"]);
function normalizeReleasedKey(e) {
	return e.length === 1 ? e.toLowerCase() : e;
}
function getReleasedModifier(e) {
	return MODIFIER_KEYS_BY_NAME[e.key] || (e.code.startsWith("Alt") ? "alt" : e.code.startsWith("Control") ? "control" : e.code.startsWith("Meta") ? "meta" : e.code.startsWith("Shift") ? "shift" : null);
}
function getReleasedPrimaryKey(e) {
	if (getReleasedModifier(e)) return null;
	let C = normalizeReleasedKey(e.key);
	return UNRELIABLE_KEY_VALUES.has(C) ? null : C;
}
function getReleasedPrimaryCode(e) {
	return getReleasedModifier(e) || UNRELIABLE_CODE_VALUES.has(e.code) ? null : e.code;
}
function createHoldDictationReleaseMatcher(e) {
	let C = getReleasedPrimaryKey(e), w = getReleasedPrimaryCode(e), T = {
		alt: e.altKey,
		control: e.ctrlKey,
		meta: e.metaKey,
		shift: e.shiftKey
	};
	return (e) => {
		let E = getReleasedModifier(e);
		if (E) return T[E];
		let D = getReleasedPrimaryCode(e);
		return w !== null && D !== null ? D === w : C !== null && getReleasedPrimaryKey(e) === C;
	};
}
function useHoldDictationGesture({ dictationStateRef: e, holdGestureActiveRef: C, insertionTargetRef: w, intentionalTargetCancellationRef: T, keybindings: E, settings: D, startDictation: O, stopDictation: k }) {
	let A = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if ((D?.voice?.dictationMode ?? "toggle") !== "hold") return;
		let j = (w) => {
			if (keybindingMatchesAction("voice.dictation", w, getShortcutPlatform(), E)) {
				if (!D?.voice?.enabled || !D.voice.sttModel) return;
				w.preventDefault(), w.stopPropagation(), C.current = !0, A.current = createHoldDictationReleaseMatcher(w), e.current === "idle" && O();
			}
		}, M = (w) => {
			if (C.current && !(!keybindingMatchesAction("voice.dictation", w, getShortcutPlatform(), E) && A.current?.(w) !== !0)) {
				if (A.current = null, e.current === "idle" || e.current === "stopping") {
					C.current = !1;
					return;
				}
				C.current = !1, k();
			}
		}, N = () => {
			C.current && (C.current = !1, A.current = null, e.current !== "idle" && e.current !== "stopping" && (w.current = null, T.current = !0, k()));
		}, P = () => {
			document.visibilityState !== "visible" && N();
		};
		return window.addEventListener("keydown", j, !0), window.addEventListener("keyup", M, !0), window.addEventListener("blur", N), document.addEventListener("visibilitychange", P), () => {
			N(), window.removeEventListener("keydown", j, !0), window.removeEventListener("keyup", M, !0), window.removeEventListener("blur", N), document.removeEventListener("visibilitychange", P);
		};
	}, [
		D?.voice?.dictationMode,
		D?.voice?.enabled,
		D?.voice?.sttModel,
		E,
		O,
		k,
		e,
		C,
		w,
		T
	]);
}
function DictationController() {
	let e = useAppStore((e) => e.dictationState), C = useAppStore((e) => e.setDictationState), T = useAppStore((e) => e.setPartialTranscript), E = useAppStore((e) => e.recordFeatureInteraction), D = useAppStore((e) => e.settings), O = useAppStore((e) => e.keybindings), { start: A, stop: j, flushBufferedAudio: M, discardBufferedAudio: N, getCapturedChunkCount: P } = useAudioCapture(publishDictationMeter), F = (0, import_react.useRef)(e);
	F.current = e;
	let I = (0, import_react.useRef)(0), L = (0, import_react.useRef)(!1), R = (0, import_react.useRef)(null), B = (0, import_react.useRef)(null), V = (0, import_react.useRef)(/* @__PURE__ */ new Set()), H = (0, import_react.useRef)(/* @__PURE__ */ new Map()), U = (0, import_react.useRef)(!1), W = (0, import_react.useRef)(!1), G = (0, import_react.useRef)(/* @__PURE__ */ new Set()), K = (0, import_react.useRef)(!1), q = (0, import_react.useRef)(""), J = (0, import_react.useRef)(null), Y = (0, import_react.useRef)(null), X = (0, import_react.useCallback)((e) => {
		waitForStoppedSession(e, V, H);
	}, []), Z = (0, import_react.useCallback)(async (e) => {
		F.current = "stopping", C("stopping"), j();
		try {
			await window.api.speech.stopDictation(e);
		} catch {}
		await waitForStoppedSession(e, V, H), !G.current.delete(e) && !W.current && P() > 0 && toast.message(translate("auto.components.dictation.DictationController.5d2c3e7ae3", "No speech detected.")), R.current = null, W.current = !1, q.current = "", K.current = !1, U.current = !1, B.current === e && (B.current = null), F.current = "idle", C("idle"), T("");
	}, [
		C,
		T,
		j,
		P
	]), Q = (0, import_react.useCallback)(async () => {
		if (F.current !== "idle") return;
		let e = D?.voice?.sttModel;
		if (!e) {
			toast("No speech model selected. Download one in Settings > Voice.", { action: {
				label: translate("auto.components.dictation.DictationController.bb7f599ee7", "Open Settings"),
				onClick: () => {
					useAppStore.getState().openSettingsTarget({
						pane: "voice",
						repoId: null
					}), useAppStore.getState().openSettingsPage();
				}
			} });
			return;
		}
		if (!D?.voice?.enabled) {
			toast("Voice dictation is disabled. Enable it in Settings > Voice.");
			return;
		}
		let O = I.current + 1, P = String(O);
		I.current = O, B.current = P, R.current = captureInsertionTarget(), U.current = !1, W.current = !1, G.current.clear(), q.current = "", K.current = !1, F.current = "starting", C("starting");
		let L = !1;
		try {
			let T = D?.voice?.microphoneDeviceId ?? null, k = await A({
				bufferAudio: !0,
				sessionId: P,
				microphoneDeviceId: T,
				microphoneDeviceLabel: D?.voice?.microphoneDeviceLabel ?? null,
				onCaptureLost: () => {
					I.current === O && (toast.message(translate("auto.components.dictation.DictationController.micDisconnected", "Microphone disconnected. Dictation stopped.")), Y.current?.());
				}
			});
			if (L = !0, k?.fellBackToDefaultMicrophone ? !U.current && J.current !== T && (J.current = T, toast.message(translate("auto.components.dictation.DictationController.micFallback", "Selected microphone unavailable. Using system default."))) : J.current = null, U.current && j({ preserveBufferedAudio: !0 }), I.current !== O) {
				N(), j(), R.current = null;
				return;
			}
			if (await window.api.speech.startDictation(e, void 0, P), I.current !== O) {
				N(), R.current = null, j(), await window.api.speech.stopDictation(P).catch(() => void 0), X(P);
				return;
			}
			if (await M(), I.current !== O) {
				N(), R.current = null, j(), await window.api.speech.stopDictation(P).catch(() => void 0), X(P);
				return;
			}
			if (U.current) {
				await Z(P);
				return;
			}
			F.current = "listening", C("listening"), E("voice-dictation");
		} catch (e) {
			if (I.current !== O) return;
			await window.api.speech.stopDictation(P).catch(() => void 0), X(P), L && j(), N();
			let w = String(e);
			if (R.current = null, K.current = !1, U.current = !1, W.current = !1, G.current.clear(), q.current = "", B.current = null, T(""), w.includes("dictation_canceled")) {
				F.current = "idle", C("idle");
				return;
			}
			F.current = "error", C("error"), showDictationStartErrorToast(w), F.current = "idle", C("idle");
		}
	}, [
		D,
		C,
		A,
		M,
		N,
		j,
		Z,
		X,
		T,
		E
	]), $ = (0, import_react.useCallback)(async () => {
		if (F.current === "starting") {
			U.current = !0, F.current = "stopping", C("stopping"), j({ preserveBufferedAudio: !0 });
			return;
		}
		if (F.current !== "listening") return;
		let e = B.current;
		e && await Z(e);
	}, [
		Z,
		C,
		j
	]);
	return Y.current = () => void $(), (0, import_react.useEffect)(() => (D?.voice?.dictationMode ?? "toggle") === "toggle" ? window.api.ui.onDictationKeyDown(() => {
		!D?.voice?.enabled || !D.voice.sttModel || F.current === "stopping" || (F.current === "listening" || F.current === "starting" ? $() : Q());
	}) : void 0, [
		D?.voice?.dictationMode,
		D?.voice?.enabled,
		D?.voice?.sttModel,
		Q,
		$
	]), (0, import_react.useEffect)(() => {
		let e = () => !!(D?.voice?.enabled && D.voice.sttModel), C = (C) => {
			if (!e() || F.current === "stopping") return;
			let w = C.detail;
			if (w === "start") {
				F.current === "idle" && Q();
				return;
			}
			if (w === "stop") {
				(F.current === "listening" || F.current === "starting") && $();
				return;
			}
			F.current === "listening" || F.current === "starting" ? $() : Q();
		};
		return document.addEventListener(DICTATION_CONTROL_EVENT, C), () => document.removeEventListener(DICTATION_CONTROL_EVENT, C);
	}, [
		D?.voice?.enabled,
		D?.voice?.sttModel,
		Q,
		$
	]), useHoldDictationGesture({
		dictationStateRef: F,
		holdGestureActiveRef: L,
		insertionTargetRef: R,
		intentionalTargetCancellationRef: K,
		keybindings: O,
		settings: D,
		startDictation: Q,
		stopDictation: $
	}), (0, import_react.useEffect)(() => {
		let e = window.api.speech.onPartialTranscript((e) => {
			e.sessionId === B.current && T(e.text);
		}), E = window.api.speech.onFinalTranscript((e) => {
			if (e.sessionId !== B.current || !e.text) return;
			T(""), W.current = !0;
			let C = R.current;
			if (C) {
				let w = formatFinalTranscriptSegment(e.text, q.current);
				insertText(w, C), q.current += w;
			} else K.current || toast.message(translate("auto.components.dictation.DictationController.7afff43472", "Dictation finished, but no text field was focused."));
		}), D = window.api.speech.onStopped((e) => {
			recordStoppedSession(e.sessionId, V, H);
		}), O = window.api.speech.onError((e) => {
			if (e.sessionId !== B.current) return;
			let E = e.sessionId;
			G.current.add(E), I.current += 1, B.current = null, toast.error(translate("auto.components.dictation.DictationController.de136f1199", "Speech error: {{value0}}", { value0: e.error })), F.current = "stopping", C("stopping"), j(), N(), (async () => {
				await window.api.speech.stopDictation(E).catch(() => void 0), await waitForStoppedSession(E, V, H), R.current = null, K.current = !1, U.current = !1, W.current = !1, q.current = "", F.current = "idle", C("idle"), T("");
			})();
		});
		return () => {
			e(), E(), D(), O();
		};
	}, [
		T,
		C,
		j,
		N
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DictationIndicator, {});
}
export { DictationController };
