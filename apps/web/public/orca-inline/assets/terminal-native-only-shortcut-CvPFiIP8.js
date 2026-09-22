import { a as __toESM, t as __commonJSMin } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { Bc as KITTY_REPORT_ASSOCIATED_TEXT, Hc as kittyReportsAllKeysAsEscapeCodes, Lc as KITTY_DISAMBIGUATE_ESCAPE_CODES, Rc as KITTY_REPORT_ALL_KEYS_AS_ESCAPE_CODES, Uc as parseTerminalKittyKeyboardFlags, Vc as KITTY_REPORT_EVENT_TYPES, _o as ownRetainedString, t as useAppStore, zc as KITTY_REPORT_ALTERNATE_KEYS } from "./store-C9f8FDJV.js";
import { E as yieldToEventLoop, T as readUtf8CodePointAt, x as getUtf8ByteLengthForCodePoint } from "./renderer-app-platform--nJ6HYmL.js";
import { s as keybindingMatchesAction } from "./keybindings-1v53ESY9.js";
import { v as recordRendererCrashBreadcrumb } from "./pane-metric-options-deferral-Bz211kas.js";
import { C as BRACKETED_PASTE_START, S as BRACKETED_PASTE_END, x as runTerminalPtyInputTransaction } from "./agent-paste-draft-Ddp-k6QZ.js";
import { c as measurePastePayloadMetadataWithYield } from "./text-control-paste-Bg1FpWOl.js";
import { c as isMacPlatform } from "./terminal-link-open-hints-297CL93x.js";
const TERMINAL_PASTE_MAX_BYTES = 16 * 1024 * 1024, TERMINAL_PASTE_OPERATION_TIMEOUT_MS = 3e4;
async function runTerminalPasteOperationWithTimeout(e, t) {
	if (!Number.isFinite(t) || t <= 0) return {
		timedOut: !1,
		value: await e()
	};
	let n = null;
	try {
		return await Promise.race([Promise.resolve().then(e).then((e) => ({
			timedOut: !1,
			value: e
		})), new Promise((e) => {
			n = setTimeout(() => e({ timedOut: !0 }), t);
		})]);
	} finally {
		n !== null && clearTimeout(n);
	}
}
function isTerminalLinkActivation(e) {
	return isMacPlatform() ? !!e?.metaKey : !!e?.ctrlKey;
}
function isTerminalLinkDirectActivation(e) {
	return !!(e && (e.button === void 0 || e.button === 0) && !e.altKey && isTerminalLinkActivation(e));
}
function isTerminalLinkActionActivation(e) {
	return !!(e && (e.button === void 0 || e.button === 0) && !e.altKey && !e.shiftKey && !e.metaKey && !e.ctrlKey);
}
function isTerminalMiddleClickActivation(e) {
	return !!(e && e.button === 1 && !e.altKey && !e.shiftKey && !e.metaKey && !e.ctrlKey);
}
function isTerminalOwnedLinkGesture(e) {
	return isTerminalLinkDirectActivation(e) || isTerminalLinkActionActivation(e) || isTerminalMiddleClickActivation(e);
}
var US_FINGERPRINT = {
	KeyQ: "q",
	KeyW: "w",
	KeyA: "a",
	KeyZ: "z",
	Semicolon: ";",
	Quote: "'",
	Backquote: "`",
	BracketLeft: "[",
	BracketRight: "]"
};
function detectOptionAsAltFromLayoutMap(e) {
	if (!e || e.size === 0) return "unknown";
	for (let [t, n] of Object.entries(US_FINGERPRINT)) {
		let r = e.get(t);
		if (r === void 0) return "unknown";
		if (r !== n) return "non-us";
	}
	return "us";
}
function detectedCategoryToDefault(e) {
	return e === "us" ? "true" : "false";
}
function effectiveMacOptionAsAlt(e, t) {
	return e === "auto" ? detectedCategoryToDefault(t) : e;
}
var META_INPUT_SOURCE_IDS = ["com.apple.keylayout.us", "com.apple.keylayout.usinternational-pc"];
function classifyInputSourceId(e) {
	if (!e) return "unknown";
	let t = e.toLowerCase();
	for (let e of META_INPUT_SOURCE_IDS) if (t === e) return "meta";
	return "compose";
}
function defaultKeyboardLayoutChangeSubscriber() {
	return (e) => globalThis.window?.api?.app?.onKeyboardLayoutChanged?.(e) ?? (() => void 0);
}
function defaultInputSourceIdReader() {
	return async () => {
		let e = globalThis.window?.api, t = e?.app?.getKeyboardLayoutSnapshot;
		if (t) try {
			let e = await t();
			if (e?.inputSourceId) return e.inputSourceId;
		} catch {}
		let n = e?.app?.getKeyboardInputSourceId;
		if (!n) return null;
		try {
			return await n();
		} catch {
			return null;
		}
	};
}
function createOptionAsAltProbe(e = window, t = {}) {
	let n = "unknown", r = /* @__PURE__ */ new Set(), i = !1, o = 0, s = 0, p = !1, S = t.readInputSourceId ?? defaultInputSourceIdReader(), T = t.subscribeKeyboardLayoutChanged ?? defaultKeyboardLayoutChangeSubscriber(), k = (e) => {
		if (e !== n) {
			n = e;
			for (let t of r) try {
				t(e);
			} catch (e) {
				console.error("[option-as-alt-probe] listener threw:", e);
			}
		}
	}, A = async () => {
		if (i || p) return;
		let t = ++o, n = e.navigator?.keyboard, r = null;
		try {
			r = await S();
		} catch {
			r = null;
		}
		if (i || t !== o) return;
		let s = classifyInputSourceId(r);
		if (s === "meta") {
			k("us");
			return;
		}
		if (s === "compose") {
			k("non-us");
			return;
		}
		if (!n?.getLayoutMap) {
			k("unknown");
			return;
		}
		try {
			let e = await n.getLayoutMap();
			if (i || t !== o) return;
			k(detectOptionAsAltFromLayoutMap(e));
		} catch (e) {
			console.warn("[option-as-alt-probe] getLayoutMap rejected:", e);
		}
	}, Sl = () => {
		A();
	}, Cl = (e) => {
		if (!(e && e.generation < s)) {
			if (k("unknown"), e?.phase === "invalidated") {
				s = e.generation, p = !0, ++o;
				return;
			}
			e && (s = e.generation), p = !1, A();
		}
	};
	e.addEventListener("focus", Sl);
	let wl = T(Cl);
	return A(), {
		getCurrent: () => n,
		subscribe: (e) => (r.add(e), () => {
			r.delete(e);
		}),
		refresh: A,
		dispose: () => {
			i = !0, e.removeEventListener("focus", Sl), wl(), r.clear();
		}
	};
}
var _singleton = null;
function getOptionAsAltProbe() {
	return _singleton ||= createOptionAsAltProbe(), _singleton;
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function useDetectedOptionAsAlt() {
	let e = getOptionAsAltProbe();
	return (0, import_react.useSyncExternalStore)((t) => e.subscribe(() => t()), () => e.getCurrent(), () => "unknown");
}
function useEffectiveMacOptionAsAlt(e) {
	let t = useDetectedOptionAsAlt();
	return effectiveMacOptionAsAlt(e ?? "auto", t);
}
var ORCA_UNICODE_VERSION = "orca-11-zwj", UNICODE11_VERSION = "11", ZERO_WIDTH_JOINER = 8205;
function extractWidth(e) {
	return e >> 1 & 3;
}
function extractCharKind(e) {
	return e >> 3;
}
function createProperties(e, t, n) {
	return (e & 16777215) << 3 | (t & 3) << 1 | (n ? 1 : 0);
}
var OrcaUnicodeProvider = class {
	version = ORCA_UNICODE_VERSION;
	constructor(e) {
		this.baseProvider = e;
	}
	wcwidth(e) {
		return this.baseProvider.wcwidth(e);
	}
	charProperties(e, t) {
		let n = extractWidth(t), r = extractCharKind(t);
		return e === ZERO_WIDTH_JOINER && n > 0 ? createProperties(ZERO_WIDTH_JOINER, n, !0) : r === ZERO_WIDTH_JOINER && n > 0 && this.wcwidth(e) > 0 ? createProperties(e, n, !0) : this.baseProvider.charProperties(e, t);
	}
};
function activateOrcaTerminalUnicodeProvider(e) {
	let { unicode: t } = e;
	if (t.activeVersion === ORCA_UNICODE_VERSION) return;
	let n = e._core?.unicodeService?._providers?.[UNICODE11_VERSION];
	if (!n) {
		t.activeVersion = UNICODE11_VERSION;
		return;
	}
	t.versions.includes(ORCA_UNICODE_VERSION) || t.register(new OrcaUnicodeProvider(n)), t.activeVersion = ORCA_UNICODE_VERSION;
}
var DOM_DELTA_PIXEL = 0, DOM_DELTA_LINE$1 = 1, DOM_DELTA_PAGE = 2, DISCRETE_PIXEL_WHEEL_DELTA_MIN = 50, LEGACY_MOUSE_WHEEL_DELTA_MIN = 100, LEGACY_MOUSE_WHEEL_DELTA_UNIT = 120, DEFAULT_TERMINAL_CELL_HEIGHT = 16, TUI_WHEEL_ACCELERATED_DISTANCE_GAIN = 1.6, TUI_WHEEL_BURST_FULL_INTERVAL_MS = 16, TUI_WHEEL_BURST_MAX_INTERVAL_MS = 45, TUI_WHEEL_BURST_MAX_BONUS_ROWS = 3, TUI_WHEEL_BURST_RAMP_EVENTS = 4, TUI_WHEEL_MOMENTUM_TAIL_DECAY_RATIO = .85, TUI_WHEEL_COMPRESSED_MAX_DISTANCE_ROWS_PER_EVENT = 6, TUI_WHEEL_BURST_MAX_DISTANCE_ROWS_PER_EVENT = 9;
const TERMINAL_TUI_MOUSE_WHEEL_MULTIPLIER = 1;
function createTerminalTuiMouseWheelDistanceState() {
	return {
		fastStreak: 0,
		lastDistanceRows: null,
		lastInputAt: null,
		pendingDirection: 0,
		pendingRows: 0
	};
}
function resolveTerminalWheelDirection(e) {
	return e.deltaY < 0 ? -1 : 1;
}
function legacyVerticalWheelDelta(e) {
	let t = e;
	return typeof t.wheelDeltaY == "number" && Number.isFinite(t.wheelDeltaY) ? t.wheelDeltaY : typeof t.wheelDelta == "number" && Number.isFinite(t.wheelDelta) ? t.wheelDelta : null;
}
function hasDiscreteLegacyWheelDelta(e) {
	let t = legacyVerticalWheelDelta(e);
	return t !== null && Math.abs(t) >= LEGACY_MOUSE_WHEEL_DELTA_MIN;
}
function isDiscreteTerminalTuiWheelEvent(e) {
	return (e.deltaMode ?? DOM_DELTA_PIXEL) !== DOM_DELTA_PIXEL || Math.abs(e.deltaY) >= DISCRETE_PIXEL_WHEEL_DELTA_MIN ? !0 : hasDiscreteLegacyWheelDelta(e);
}
function canBurstBoostWheelEvent(e) {
	return (e.deltaMode ?? DOM_DELTA_PIXEL) === DOM_DELTA_PIXEL ? hasDiscreteLegacyWheelDelta(e) : !0;
}
function isTrackpadLikePixelWheelEvent(e) {
	return (e.deltaMode ?? DOM_DELTA_PIXEL) === DOM_DELTA_PIXEL && !hasDiscreteLegacyWheelDelta(e);
}
function wheelInputTime(e) {
	return typeof e.timeStamp == "number" && Number.isFinite(e.timeStamp) ? e.timeStamp : null;
}
function normalizeCellHeight(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : DEFAULT_TERMINAL_CELL_HEIGHT;
}
function resolveWheelDistanceRows(e, t) {
	let n = e.deltaMode ?? DOM_DELTA_PIXEL, r = Math.abs(e.deltaY), i = n === DOM_DELTA_LINE$1 ? r : n === DOM_DELTA_PAGE ? r * Math.max(1, t.rows ?? 1) : r / normalizeCellHeight(t.cellHeight), o = legacyVerticalWheelDelta(e), s = o === null ? 0 : Math.abs(o) / LEGACY_MOUSE_WHEEL_DELTA_UNIT, p = Math.max(i, s);
	return isDiscreteTerminalTuiWheelEvent(e) ? Math.max(1, p) : p;
}
function compressWheelDistanceRows(e) {
	return e <= 1 ? e : Math.min(TUI_WHEEL_COMPRESSED_MAX_DISTANCE_ROWS_PER_EVENT, 1 + Math.log2(e) * TUI_WHEEL_ACCELERATED_DISTANCE_GAIN);
}
function resolveBurstWheelDistanceRows(e, t, n) {
	if (!canBurstBoostWheelEvent(e)) return t.fastStreak = 0, t.lastDistanceRows = null, t.lastInputAt = null, 0;
	let r = wheelInputTime(e);
	if (r === null) return t.fastStreak = 0, t.lastDistanceRows = null, t.lastInputAt = null, 0;
	let i = t.lastInputAt === null ? null : r - t.lastInputAt, o = t.lastDistanceRows !== null && n < t.lastDistanceRows * TUI_WHEEL_MOMENTUM_TAIL_DECAY_RATIO;
	if (t.lastDistanceRows = n, t.lastInputAt = r, o || i === null || i < 0 || i > TUI_WHEEL_BURST_MAX_INTERVAL_MS) return t.fastStreak = 0, 0;
	let s = i <= TUI_WHEEL_BURST_FULL_INTERVAL_MS ? 1 : (TUI_WHEEL_BURST_MAX_INTERVAL_MS - i) / (TUI_WHEEL_BURST_MAX_INTERVAL_MS - TUI_WHEEL_BURST_FULL_INTERVAL_MS);
	return t.fastStreak = Math.min(TUI_WHEEL_BURST_RAMP_EVENTS, t.fastStreak + 1), TUI_WHEEL_BURST_MAX_BONUS_ROWS * s * (t.fastStreak / TUI_WHEEL_BURST_RAMP_EVENTS);
}
function resolveTrackpadPixelWheelReportCount(e, t, n) {
	if (!isTrackpadLikePixelWheelEvent(e)) return null;
	let r = t.pendingRows + n, i = Math.trunc(r);
	return t.pendingRows = r - i, i;
}
function normalizeTerminalTuiMouseWheelMultiplier(e) {
	return typeof e != "number" || !Number.isFinite(e) ? 1 : Math.round(Math.min(10, Math.max(1, e)));
}
function resolveTerminalTuiMouseWheelReportCount(e, t, n, r = {}) {
	let i = resolveTerminalWheelDirection(e);
	n.pendingDirection !== 0 && n.pendingDirection !== i && (n.fastStreak = 0, n.lastDistanceRows = null, n.lastInputAt = null, n.pendingRows = 0), n.pendingDirection = i;
	let o = resolveWheelDistanceRows(e, r), s = resolveTrackpadPixelWheelReportCount(e, n, o);
	if (s !== null) return s;
	let p = Math.min(TUI_WHEEL_BURST_MAX_DISTANCE_ROWS_PER_EVENT, compressWheelDistanceRows(o) + resolveBurstWheelDistanceRows(e, n, o)) * normalizeTerminalTuiMouseWheelMultiplier(t), S = n.pendingRows + p, T = Math.trunc(S);
	return n.pendingRows = S - T, T;
}
var XTERM_MOUSE_REPORTING_CLASS = "enable-mouse-events", REPLAYED_WHEEL_EVENT_PROPERTY = "__orcaReplayedTerminalWheelEvent", DOM_DELTA_LINE = 1;
function createTerminalTuiMouseWheelReplayState() {
	return {
		distance: createTerminalTuiMouseWheelDistanceState(),
		drainScheduled: !1,
		pendingDirection: 0,
		pendingEvent: null,
		pendingReports: 0,
		pendingTarget: null
	};
}
function isReplayedWheelEvent(e) {
	return e[REPLAYED_WHEEL_EVENT_PROPERTY] === !0;
}
function markReplayedWheelEvent(e) {
	Object.defineProperty(e, REPLAYED_WHEEL_EVENT_PROPERTY, {
		configurable: !0,
		value: !0
	});
}
function cloneWheelReportEvent(e) {
	let t = new WheelEvent(e.type, {
		bubbles: e.bubbles,
		cancelable: e.cancelable,
		composed: e.composed,
		view: e.view,
		detail: e.detail,
		screenX: e.screenX,
		screenY: e.screenY,
		clientX: e.clientX,
		clientY: e.clientY,
		ctrlKey: e.ctrlKey,
		altKey: e.altKey,
		shiftKey: e.shiftKey,
		metaKey: e.metaKey,
		button: e.button,
		buttons: e.buttons,
		relatedTarget: e.relatedTarget,
		deltaX: 0,
		deltaY: e.deltaY < 0 ? -1 : 1,
		deltaZ: 0,
		deltaMode: DOM_DELTA_LINE
	});
	return markReplayedWheelEvent(t), t;
}
function resolveTerminalWheelCellHeight(e) {
	if (typeof e.element?.querySelector != "function") return;
	let t = (e.element?.querySelector(".xterm-screen"))?.getBoundingClientRect();
	if (!(!t || t.height <= 0 || e.rows <= 0)) return t.height / e.rows;
}
function shouldMultiplyTerminalMouseWheel(e, t) {
	return !(isReplayedWheelEvent(e) || !t?.classList.contains(XTERM_MOUSE_REPORTING_CLASS) || e.deltaY === 0 || e.shiftKey);
}
function drainTerminalTuiWheelReports(e, t) {
	let n = e.pendingTarget, r = e.pendingEvent;
	if (!n || !r || e.pendingReports <= 0) {
		e.drainScheduled = !1;
		return;
	}
	if (t.modes.mouseTrackingMode === "none") {
		e.pendingReports = 0, e.drainScheduled = !1, e.pendingDirection = 0, e.pendingEvent = null, e.pendingTarget = null;
		return;
	}
	let i = e.pendingReports;
	for (let e = 0; e < i; e += 1) n.dispatchEvent(cloneWheelReportEvent(r));
	e.pendingReports = 0, e.drainScheduled = !1, e.pendingDirection = 0, e.pendingEvent = null, e.pendingTarget = null;
}
function queueTerminalTuiWheelReports(e, t, n, r, i) {
	if (i <= 0) return;
	let o = resolveTerminalWheelDirection(r);
	e.pendingDirection !== 0 && e.pendingDirection !== o && (e.pendingReports = 0), e.pendingDirection = o, e.pendingEvent = r, e.pendingTarget = n, e.pendingReports += i, !e.drainScheduled && (e.drainScheduled = !0, queueMicrotask(() => {
		drainTerminalTuiWheelReports(e, t);
	}));
}
function attachTerminalMouseWheelMultiplier(e, t = {}) {
	let n = createTerminalTuiMouseWheelReplayState();
	e.attachCustomWheelEventHandler((r) => {
		if (e.modes.mouseTrackingMode === "none" || !shouldMultiplyTerminalMouseWheel(r, e.element)) return !0;
		let i = r.currentTarget instanceof EventTarget ? r.currentTarget : e.element;
		return i ? (queueTerminalTuiWheelReports(n, e, i, r, resolveTerminalTuiMouseWheelReportCount(r, normalizeTerminalTuiMouseWheelMultiplier(t.getTuiMouseWheelMultiplier?.()), n.distance, {
			cellHeight: resolveTerminalWheelCellHeight(e),
			rows: e.rows
		})), !1) : !0;
	});
}
var require_addon_ligatures = /* @__PURE__ */ __commonJSMin(((e, t) => {
	(function(n, r) {
		typeof e == "object" && typeof t == "object" ? t.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof e == "object" ? e.LigaturesAddon = r() : n.LigaturesAddon = r();
	})(globalThis, () => (() => {
		var e = {
			426(e, t, n) {
				var r, i, o = (() => {
					var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, i = {};
					((t, n) => {
						for (var r in n) e(t, r, {
							get: n[r],
							enumerable: !0
						});
					})(i, {
						BoundingBox: () => Bl,
						Font: () => ih,
						Glyph: () => ud,
						Path: () => Gl,
						_parse: () => Tu,
						load: () => xh,
						loadSync: () => Sh,
						parse: () => bh
					});
					var o = 0, s = -3;
					function p() {
						this.table = new Uint16Array(16), this.trans = new Uint16Array(288);
					}
					function S(e, t) {
						this.source = e, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = t, this.destLen = 0, this.ltree = new p(), this.dtree = new p();
					}
					var T = new p(), k = new p(), A = new Uint8Array(30), Sl = new Uint16Array(30), Cl = new Uint8Array(30), wl = new Uint16Array(30), Tl = new Uint8Array([
						16,
						17,
						18,
						0,
						8,
						7,
						9,
						6,
						10,
						5,
						11,
						4,
						12,
						3,
						13,
						2,
						14,
						1,
						15
					]), El = new p(), Dl = new Uint8Array(320);
					function Ol(e, t, n, r) {
						var i, o;
						for (i = 0; i < n; ++i) e[i] = 0;
						for (i = 0; i < 30 - n; ++i) e[i + n] = i / n | 0;
						for (o = r, i = 0; i < 30; ++i) t[i] = o, o += 1 << e[i];
					}
					var kl = new Uint16Array(16);
					function Al(e, t, n, r) {
						var i, o;
						for (i = 0; i < 16; ++i) e.table[i] = 0;
						for (i = 0; i < r; ++i) e.table[t[n + i]]++;
						for (e.table[0] = 0, o = 0, i = 0; i < 16; ++i) kl[i] = o, o += e.table[i];
						for (i = 0; i < r; ++i) t[n + i] && (e.trans[kl[t[n + i]]++] = i);
					}
					function jl(e) {
						e.bitcount-- || (e.tag = e.source[e.sourceIndex++], e.bitcount = 7);
						var t = 1 & e.tag;
						return e.tag >>>= 1, t;
					}
					function Ml(e, t, n) {
						if (!t) return n;
						for (; e.bitcount < 24;) e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;
						var r = e.tag & 65535 >>> 16 - t;
						return e.tag >>>= t, e.bitcount -= t, r + n;
					}
					function Nl(e, t) {
						for (; e.bitcount < 24;) e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;
						var n = 0, r = 0, i = 0, o = e.tag;
						do
							r = 2 * r + (1 & o), o >>>= 1, ++i, n += t.table[i], r -= t.table[i];
						while (r >= 0);
						return e.tag = o, e.bitcount -= i, t.trans[n + r];
					}
					function Pl(e, t, n) {
						var r, i, o, s, p, S;
						for (r = Ml(e, 5, 257), i = Ml(e, 5, 1), o = Ml(e, 4, 4), s = 0; s < 19; ++s) Dl[s] = 0;
						for (s = 0; s < o; ++s) {
							var T = Ml(e, 3, 0);
							Dl[Tl[s]] = T;
						}
						for (Al(El, Dl, 0, 19), p = 0; p < r + i;) {
							var k = Nl(e, El);
							switch (k) {
								case 16:
									var A = Dl[p - 1];
									for (S = Ml(e, 2, 3); S; --S) Dl[p++] = A;
									break;
								case 17:
									for (S = Ml(e, 3, 3); S; --S) Dl[p++] = 0;
									break;
								case 18:
									for (S = Ml(e, 7, 11); S; --S) Dl[p++] = 0;
									break;
								default: Dl[p++] = k;
							}
						}
						Al(t, Dl, 0, r), Al(n, Dl, r, i);
					}
					function Fl(e, t, n) {
						for (;;) {
							var r, i, s, p, S = Nl(e, t);
							if (S === 256) return o;
							if (S < 256) e.dest[e.destLen++] = S;
							else for (r = Ml(e, A[S -= 257], Sl[S]), i = Nl(e, n), p = s = e.destLen - Ml(e, Cl[i], wl[i]); p < s + r; ++p) e.dest[e.destLen++] = e.dest[p];
						}
					}
					function Il(e) {
						for (var t, n; e.bitcount > 8;) e.sourceIndex--, e.bitcount -= 8;
						if ((t = 256 * (t = e.source[e.sourceIndex + 1]) + e.source[e.sourceIndex]) !== (65535 & ~(256 * e.source[e.sourceIndex + 3] + e.source[e.sourceIndex + 2]))) return s;
						for (e.sourceIndex += 4, n = t; n; --n) e.dest[e.destLen++] = e.source[e.sourceIndex++];
						return e.bitcount = 0, o;
					}
					function Ll(e, t) {
						var n, r, i = new S(e, t);
						do {
							switch (n = jl(i), Ml(i, 2, 0)) {
								case 0:
									r = Il(i);
									break;
								case 1:
									r = Fl(i, T, k);
									break;
								case 2:
									Pl(i, i.ltree, i.dtree), r = Fl(i, i.ltree, i.dtree);
									break;
								default: r = s;
							}
							if (r !== o) throw Error("Data error");
						} while (!n);
						return i.destLen < i.dest.length ? typeof i.dest.slice == "function" ? i.dest.slice(0, i.destLen) : i.dest.subarray(0, i.destLen) : i.dest;
					}
					function Rl(e, t, n, r, i) {
						return (1 - i) ** 3 * e + 3 * (1 - i) ** 2 * i * t + 3 * (1 - i) * i ** 2 * n + i ** 3 * r;
					}
					function zl() {
						this.x1 = NaN, this.y1 = NaN, this.x2 = NaN, this.y2 = NaN;
					}
					(function(e, t) {
						var n;
						for (n = 0; n < 7; ++n) e.table[n] = 0;
						for (e.table[7] = 24, e.table[8] = 152, e.table[9] = 112, n = 0; n < 24; ++n) e.trans[n] = 256 + n;
						for (n = 0; n < 144; ++n) e.trans[24 + n] = n;
						for (n = 0; n < 8; ++n) e.trans[168 + n] = 280 + n;
						for (n = 0; n < 112; ++n) e.trans[176 + n] = 144 + n;
						for (n = 0; n < 5; ++n) t.table[n] = 0;
						for (t.table[5] = 32, n = 0; n < 32; ++n) t.trans[n] = n;
					})(T, k), Ol(A, Sl, 4, 3), Ol(Cl, wl, 2, 1), A[28] = 0, Sl[28] = 258, zl.prototype.isEmpty = function() {
						return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
					}, zl.prototype.addPoint = function(e, t) {
						typeof e == "number" && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)), typeof t == "number" && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
					}, zl.prototype.addX = function(e) {
						this.addPoint(e, null);
					}, zl.prototype.addY = function(e) {
						this.addPoint(null, e);
					}, zl.prototype.addBezier = function(e, t, n, r, i, o, s, p) {
						let S = [e, t], T = [n, r], k = [i, o], A = [s, p];
						this.addPoint(e, t), this.addPoint(s, p);
						for (let e = 0; e <= 1; e++) {
							let t = 6 * S[e] - 12 * T[e] + 6 * k[e], n = -3 * S[e] + 9 * T[e] - 9 * k[e] + 3 * A[e], r = 3 * T[e] - 3 * S[e];
							if (n === 0) {
								if (t === 0) continue;
								let n = -r / t;
								0 < n && n < 1 && (e === 0 && this.addX(Rl(S[e], T[e], k[e], A[e], n)), e === 1 && this.addY(Rl(S[e], T[e], k[e], A[e], n)));
								continue;
							}
							let i = t ** 2 - 4 * r * n;
							if (i < 0) continue;
							let o = (-t + Math.sqrt(i)) / (2 * n);
							0 < o && o < 1 && (e === 0 && this.addX(Rl(S[e], T[e], k[e], A[e], o)), e === 1 && this.addY(Rl(S[e], T[e], k[e], A[e], o)));
							let s = (-t - Math.sqrt(i)) / (2 * n);
							0 < s && s < 1 && (e === 0 && this.addX(Rl(S[e], T[e], k[e], A[e], s)), e === 1 && this.addY(Rl(S[e], T[e], k[e], A[e], s)));
						}
					}, zl.prototype.addQuad = function(e, t, n, r, i, o) {
						let s = e + 2 / 3 * (n - e), p = t + 2 / 3 * (r - t), S = s + 1 / 3 * (i - e), T = p + 1 / 3 * (o - t);
						this.addBezier(e, t, s, p, S, T, i, o);
					};
					var Bl = zl;
					function Vl() {
						this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1;
					}
					var Hl = {};
					function Ul(e, t) {
						let n = Math.floor(e), r = e - n;
						if (Hl[t] || (Hl[t] = {}), Hl[t][r] !== void 0) return n + Hl[t][r];
						let i = +(Math.round(r + "e+" + t) + "e-" + t);
						return Hl[t][r] = i, n + i;
					}
					function Wl(e) {
						let t = [[]], n = 0, r = 0;
						for (let i = 0; i < e.length; i += 1) {
							let o = t[t.length - 1], s = e[i], p = o[0], S = o[1], T = o[o.length - 1], k = e[i + 1];
							o.push(s), s.type === "M" ? (n = s.x, r = s.y) : s.type !== "L" || k && k.type !== "Z" ? s.type === "L" && T && T.x === s.x && T.y === s.y ? o.pop() : s.type === "Z" && (p && S && T && p.type === "M" && S.type === "L" && T.type === "L" && T.x === p.x && T.y === p.y && (o.shift(), o[0].type = "M"), i + 1 < e.length && t.push([])) : Math.abs(s.x - n) > 1 || Math.abs(s.y - r) > 1 || o.pop();
						}
						return [].concat.apply([], t);
					}
					Vl.prototype.fromSVG = function(e, t = {}) {
						typeof SVGPathElement < "u" && e instanceof SVGPathElement && (e = e.getAttribute("d")), t = function(e) {
							return Object.assign({}, {
								decimalPlaces: 2,
								optimize: !0,
								flipY: !0,
								flipYBase: void 0,
								scale: 1,
								x: 0,
								y: 0
							}, e);
						}(t), this.commands = [];
						let n = "MmLlQqCcZzHhVv", r = {}, i = [""], o = !1;
						function s(e) {
							if (!this.commands.length) return e;
							let t = this.commands[this.commands.length - 1];
							for (let n = 0; n < e.length; n++) e[n] += t[1 & n ? "y" : "x"];
							return e;
						}
						function p() {
							if (r.type === void 0) return;
							let e = r.type.toUpperCase(), n = e !== "Z" && r.type.toUpperCase() !== r.type, o = i.filter((e) => e.length).map((e) => {
								let n = parseFloat(e);
								return (t.decimalPlaces || t.decimalPlaces === 0) && (n = Ul(n, t.decimalPlaces)), n;
							});
							if (i = [""], !o.length && e !== "Z") return;
							n && e !== "H" && e !== "V" && (o = s.apply(this, [o]));
							let p = this.commands.length && this.commands[this.commands.length - 1].x || 0, S = this.commands.length && this.commands[this.commands.length - 1].y || 0;
							switch (e) {
								case "M":
									this.moveTo(...o);
									break;
								case "L":
									this.lineTo(...o);
									break;
								case "V":
									for (let e = 0; e < o.length; e++) {
										let t = 0;
										n && (t = this.commands.length && this.commands[this.commands.length - 1].y || 0), this.lineTo(p, o[e] + t);
									}
									break;
								case "H":
									for (let e = 0; e < o.length; e++) {
										let t = 0;
										n && (t = this.commands.length && this.commands[this.commands.length - 1].x || 0), this.lineTo(o[e] + t, S);
									}
									break;
								case "C":
									this.bezierCurveTo(...o);
									break;
								case "Q":
									this.quadraticCurveTo(...o);
									break;
								case "Z": (this.commands.length < 1 || this.commands[this.commands.length - 1].type !== "Z") && this.close();
							}
							if (this.commands.length) for (let e in this.commands[this.commands.length - 1]) this.commands[this.commands.length - 1][e] === void 0 && (this.commands[this.commands.length - 1][e] = 0);
						}
						for (let t = 0; t < e.length; t++) {
							let s = e.charAt(t), S = i[i.length - 1];
							if ("0123456789".indexOf(s) > -1) i[i.length - 1] += s;
							else if ("-+".indexOf(s) > -1) if (r.type || this.commands.length || (r.type = "L"), s === "-") !r.type || S.indexOf("-") > 0 ? o = !0 : S.length ? i.push("-") : i[i.length - 1] = s;
							else {
								if (r.type && !(S.length > 0)) continue;
								o = !0;
							}
							else if (n.indexOf(s) > -1) r.type ? (p.apply(this), r = { type: s }) : r.type = s;
							else {
								if ("SsTtAa".indexOf(s) > -1) throw Error("Unsupported path command: " + s + ". Currently supported commands are " + n.split("").join(", ") + ".");
								" ,	\n\r\f\v".indexOf(s) > -1 ? i.push("") : s === "." ? !r.type || S.indexOf(s) > -1 ? o = !0 : i[i.length - 1] += s : o = !0;
							}
							if (o) throw Error("Unexpected character: " + s + " at offset " + t);
						}
						p.apply(this), t.optimize && (this.commands = Wl(this.commands));
						let S = t.flipY, T = t.flipYBase;
						if (!0 === S && t.flipYBase === void 0) {
							let e = this.getBoundingBox();
							T = e.y1 + e.y2;
						}
						for (let e in this.commands) {
							let n = this.commands[e];
							for (let r in n) [
								"x",
								"x1",
								"x2"
							].includes(r) ? this.commands[e][r] = t.x + n[r] * t.scale : [
								"y",
								"y1",
								"y2"
							].includes(r) && (this.commands[e][r] = t.y + (S ? T - n[r] : n[r]) * t.scale);
						}
						return this;
					}, Vl.fromSVG = function(e, t) {
						return new Vl().fromSVG(e, t);
					}, Vl.prototype.moveTo = function(e, t) {
						this.commands.push({
							type: "M",
							x: e,
							y: t
						});
					}, Vl.prototype.lineTo = function(e, t) {
						this.commands.push({
							type: "L",
							x: e,
							y: t
						});
					}, Vl.prototype.curveTo = Vl.prototype.bezierCurveTo = function(e, t, n, r, i, o) {
						this.commands.push({
							type: "C",
							x1: e,
							y1: t,
							x2: n,
							y2: r,
							x: i,
							y: o
						});
					}, Vl.prototype.quadTo = Vl.prototype.quadraticCurveTo = function(e, t, n, r) {
						this.commands.push({
							type: "Q",
							x1: e,
							y1: t,
							x: n,
							y: r
						});
					}, Vl.prototype.close = Vl.prototype.closePath = function() {
						this.commands.push({ type: "Z" });
					}, Vl.prototype.extend = function(e) {
						if (e.commands) e = e.commands;
						else if (e instanceof Bl) {
							let t = e;
							this.moveTo(t.x1, t.y1), this.lineTo(t.x2, t.y1), this.lineTo(t.x2, t.y2), this.lineTo(t.x1, t.y2), this.close();
							return;
						}
						Array.prototype.push.apply(this.commands, e);
					}, Vl.prototype.getBoundingBox = function() {
						let e = new Bl(), t = 0, n = 0, r = 0, i = 0;
						for (let o = 0; o < this.commands.length; o++) {
							let s = this.commands[o];
							switch (s.type) {
								case "M":
									e.addPoint(s.x, s.y), t = r = s.x, n = i = s.y;
									break;
								case "L":
									e.addPoint(s.x, s.y), r = s.x, i = s.y;
									break;
								case "Q":
									e.addQuad(r, i, s.x1, s.y1, s.x, s.y), r = s.x, i = s.y;
									break;
								case "C":
									e.addBezier(r, i, s.x1, s.y1, s.x2, s.y2, s.x, s.y), r = s.x, i = s.y;
									break;
								case "Z":
									r = t, i = n;
									break;
								default: throw Error("Unexpected path command " + s.type);
							}
						}
						return e.isEmpty() && e.addPoint(0, 0), e;
					}, Vl.prototype.draw = function(e) {
						let t = this._layers;
						if (t && t.length) {
							for (let n = 0; n < t.length; n++) this.draw.call(t[n], e);
							return;
						}
						let n = this._image;
						if (n) e.drawImage(n.image, n.x, n.y, n.width, n.height);
						else {
							e.beginPath();
							for (let t = 0; t < this.commands.length; t += 1) {
								let n = this.commands[t];
								n.type === "M" ? e.moveTo(n.x, n.y) : n.type === "L" ? e.lineTo(n.x, n.y) : n.type === "C" ? e.bezierCurveTo(n.x1, n.y1, n.x2, n.y2, n.x, n.y) : n.type === "Q" ? e.quadraticCurveTo(n.x1, n.y1, n.x, n.y) : n.type === "Z" && this.stroke && this.strokeWidth && e.closePath();
							}
							this.fill && (e.fillStyle = this.fill, e.fill()), this.stroke && (e.strokeStyle = this.stroke, e.lineWidth = this.strokeWidth, e.stroke());
						}
					}, Vl.prototype.toPathData = function(e) {
						function t(t) {
							let n = Ul(t, e.decimalPlaces);
							return Math.round(t) === n ? "" + n : n.toFixed(e.decimalPlaces);
						}
						function n() {
							let e = "";
							for (let n = 0; n < arguments.length; n += 1) {
								let r = arguments[n];
								r >= 0 && n > 0 && (e += " "), e += t(r);
							}
							return e;
						}
						e = function(e) {
							return parseInt(e) === e && (e = {
								decimalPlaces: e,
								flipY: !1
							}), Object.assign({}, {
								decimalPlaces: 2,
								optimize: !0,
								flipY: !0,
								flipYBase: void 0
							}, e);
						}(e);
						let r = this.commands;
						e.optimize && (r = JSON.parse(JSON.stringify(this.commands)), r = Wl(r));
						let i = e.flipY, o = e.flipYBase;
						if (!0 === i && o === void 0) {
							let e = new Vl();
							e.extend(r);
							let t = e.getBoundingBox();
							o = t.y1 + t.y2;
						}
						let s = "";
						for (let e = 0; e < r.length; e += 1) {
							let t = r[e];
							t.type === "M" ? s += "M" + n(t.x, i ? o - t.y : t.y) : t.type === "L" ? s += "L" + n(t.x, i ? o - t.y : t.y) : t.type === "C" ? s += "C" + n(t.x1, i ? o - t.y1 : t.y1, t.x2, i ? o - t.y2 : t.y2, t.x, i ? o - t.y : t.y) : t.type === "Q" ? s += "Q" + n(t.x1, i ? o - t.y1 : t.y1, t.x, i ? o - t.y : t.y) : t.type === "Z" && (s += "Z");
						}
						return s;
					}, Vl.prototype.toSVG = function(e, t) {
						this._layers && this._layers.length && console.warn("toSVG() does not support colr font layers yet"), this._image && console.warn("toSVG() does not support SVG glyphs yet"), t ||= this.toPathData(e);
						let n = "<path d=\"";
						return n += t, n += "\"", this.fill !== void 0 && this.fill !== "black" && (this.fill === null ? n += " fill=\"none\"" : n += " fill=\"" + this.fill + "\""), this.stroke && (n += " stroke=\"" + this.stroke + "\" stroke-width=\"" + this.strokeWidth + "\""), n += "/>", n;
					}, Vl.prototype.toDOMElement = function(e, t) {
						this._layers && this._layers.length && console.warn("toDOMElement() does not support colr font layers yet"), t ||= this.toPathData(e);
						let n = document.createElementNS("http://www.w3.org/2000/svg", "path");
						return n.setAttribute("d", t), this.fill !== void 0 && this.fill !== "black" && (this.fill === null ? n.setAttribute("fill", "none") : n.setAttribute("fill", this.fill)), this.stroke && (n.setAttribute("stroke", this.stroke), n.setAttribute("stroke-width", this.strokeWidth)), n;
					};
					var Gl = Vl;
					function Kl(e) {
						throw Error(e);
					}
					function ql(e, t) {
						e || Kl(t);
					}
					var Jl = {
						fail: Kl,
						argument: ql,
						assert: ql
					}, Yl = 2147483648, Xl = {}, Zl = {}, Ql = {};
					function $l(e) {
						return function() {
							return e;
						};
					}
					Zl.BYTE = function(e) {
						return Jl.argument(e >= 0 && e <= 255, "Byte value should be between 0 and 255."), [e];
					}, Ql.BYTE = $l(1), Zl.CHAR = function(e) {
						return [e.charCodeAt(0)];
					}, Ql.CHAR = $l(1), Zl.CHARARRAY = function(e) {
						e ?? (e = "", console.warn("CHARARRAY with undefined or null value encountered and treated as an empty string. This is probably caused by a missing glyph name."));
						let t = [];
						for (let n = 0; n < e.length; n += 1) t[n] = e.charCodeAt(n);
						return t;
					}, Ql.CHARARRAY = function(e) {
						return e === void 0 ? 0 : e.length;
					}, Zl.USHORT = function(e) {
						return [e >> 8 & 255, 255 & e];
					}, Ql.USHORT = $l(2), Zl.SHORT = function(e) {
						return e >= 32768 && (e = -(65536 - e)), [e >> 8 & 255, 255 & e];
					}, Ql.SHORT = $l(2), Zl.UINT24 = function(e) {
						return [
							e >> 16 & 255,
							e >> 8 & 255,
							255 & e
						];
					}, Ql.UINT24 = $l(3), Zl.ULONG = function(e) {
						return [
							e >> 24 & 255,
							e >> 16 & 255,
							e >> 8 & 255,
							255 & e
						];
					}, Ql.ULONG = $l(4), Zl.LONG = function(e) {
						return e >= Yl && (e = -(2 * Yl - e)), [
							e >> 24 & 255,
							e >> 16 & 255,
							e >> 8 & 255,
							255 & e
						];
					}, Ql.LONG = $l(4), Zl.FLOAT = function(e) {
						if (e > 32767.00001525879 || e < -32768) throw Error(`Value ${e} is outside the range of representable values in 16.16 format`);
						let t = 0 | Math.round(65536 * e);
						return Zl.ULONG(t);
					}, Ql.FLOAT = Ql.ULONG, Zl.FIXED = Zl.ULONG, Ql.FIXED = Ql.ULONG, Zl.FWORD = Zl.SHORT, Ql.FWORD = Ql.SHORT, Zl.UFWORD = Zl.USHORT, Ql.UFWORD = Ql.USHORT, Zl.F2DOT14 = function(e) {
						return Zl.USHORT(16384 * e);
					}, Ql.F2DOT14 = Ql.USHORT, Zl.LONGDATETIME = function(e) {
						return [
							0,
							0,
							0,
							0,
							e >> 24 & 255,
							e >> 16 & 255,
							e >> 8 & 255,
							255 & e
						];
					}, Ql.LONGDATETIME = $l(8), Zl.TAG = function(e) {
						return Jl.argument(e.length === 4, "Tag should be exactly 4 ASCII characters."), [
							e.charCodeAt(0),
							e.charCodeAt(1),
							e.charCodeAt(2),
							e.charCodeAt(3)
						];
					}, Ql.TAG = $l(4), Zl.Card8 = Zl.BYTE, Ql.Card8 = Ql.BYTE, Zl.Card16 = Zl.USHORT, Ql.Card16 = Ql.USHORT, Zl.OffSize = Zl.BYTE, Ql.OffSize = Ql.BYTE, Zl.SID = Zl.USHORT, Ql.SID = Ql.USHORT, Zl.NUMBER = function(e) {
						return e >= -107 && e <= 107 ? [e + 139] : e >= 108 && e <= 1131 ? [247 + ((e -= 108) >> 8), 255 & e] : e >= -1131 && e <= -108 ? [251 + ((e = -e - 108) >> 8), 255 & e] : e >= -32768 && e <= 32767 ? Zl.NUMBER16(e) : Zl.NUMBER32(e);
					}, Ql.NUMBER = function(e) {
						return Zl.NUMBER(e).length;
					}, Zl.NUMBER16 = function(e) {
						return [
							28,
							e >> 8 & 255,
							255 & e
						];
					}, Ql.NUMBER16 = $l(3), Zl.NUMBER32 = function(e) {
						return [
							29,
							e >> 24 & 255,
							e >> 16 & 255,
							e >> 8 & 255,
							255 & e
						];
					}, Ql.NUMBER32 = $l(5), Zl.REAL = function(e) {
						let t = e.toString(), n = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);
						if (n) {
							let r = parseFloat("1e" + ((n[2] ? +n[2] : 0) + n[1].length));
							t = (Math.round(e * r) / r).toString();
						}
						let r = "";
						for (let e = 0, n = t.length; e < n; e += 1) {
							let n = t[e];
							r += n === "e" ? t[++e] === "-" ? "c" : "b" : n === "." ? "a" : n === "-" ? "e" : n;
						}
						r += 1 & r.length ? "f" : "ff";
						let i = [30];
						for (let e = 0, t = r.length; e < t; e += 2) i.push(parseInt(r.substr(e, 2), 16));
						return i;
					}, Ql.REAL = function(e) {
						return Zl.REAL(e).length;
					}, Zl.NAME = Zl.CHARARRAY, Ql.NAME = Ql.CHARARRAY, Zl.STRING = Zl.CHARARRAY, Ql.STRING = Ql.CHARARRAY, Xl.UTF8 = function(e, t, n) {
						let r = [], i = n;
						for (let n = 0; n < i; n++, t += 1) r[n] = e.getUint8(t);
						return String.fromCharCode.apply(null, r);
					}, Xl.UTF16 = function(e, t, n) {
						let r = [], i = n / 2;
						for (let n = 0; n < i; n++, t += 2) r[n] = e.getUint16(t);
						return String.fromCharCode.apply(null, r);
					}, Zl.UTF16 = function(e) {
						let t = [];
						for (let n = 0; n < e.length; n += 1) {
							let r = e.charCodeAt(n);
							t[t.length] = r >> 8 & 255, t[t.length] = 255 & r;
						}
						return t;
					}, Ql.UTF16 = function(e) {
						return 2 * e.length;
					};
					var eu = {
						"x-mac-croatian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č…\xA0ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ",
						"x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»…\xA0ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
						"x-mac-gaelic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»…\xA0ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ",
						"x-mac-greek": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»…\xA0ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­",
						"x-mac-icelandic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
						"x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ…\xA0ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
						"x-mac-ce": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»…\xA0ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
						macintosh: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
						"x-mac-romanian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
						"x-mac-turkish": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"
					};
					Xl.MACSTRING = function(e, t, n, r) {
						let i = eu[r];
						if (i === void 0) return;
						let o = "";
						for (let r = 0; r < n; r++) {
							let n = e.getUint8(t + r);
							o += n <= 127 ? String.fromCharCode(n) : i[127 & n];
						}
						return o;
					};
					var tu, nu = typeof WeakMap == "function" && /* @__PURE__ */ new WeakMap();
					function ru(e) {
						return e >= -128 && e <= 127;
					}
					function iu(e, t, n) {
						let r = 0, i = e.length;
						for (; t < i && r < 64 && e[t] === 0;) ++t, ++r;
						return n.push(128 | r - 1), t;
					}
					function au(e, t, n) {
						let r = 0, i = e.length, o = t;
						for (; o < i && r < 64;) {
							let t = e[o];
							if (!ru(t) || t === 0 && o + 1 < i && e[o + 1] === 0) break;
							++o, ++r;
						}
						n.push(r - 1);
						for (let r = t; r < o; ++r) n.push(e[r] + 256 & 255);
						return o;
					}
					function ou(e, t, n) {
						let r = 0, i = e.length, o = t;
						for (; o < i && r < 64;) {
							let t = e[o];
							if (t === 0 || ru(t) && o + 1 < i && ru(e[o + 1])) break;
							++o, ++r;
						}
						n.push(64 | r - 1);
						for (let r = t; r < o; ++r) {
							let t = e[r];
							n.push(t + 65536 >> 8 & 255, t + 256 & 255);
						}
						return o;
					}
					Zl.MACSTRING = function(e, t) {
						let n = function(e) {
							if (!tu) for (let e in tu = {}, eu) tu[e] = new String(e);
							let t = tu[e];
							if (t === void 0) return;
							if (nu) {
								let e = nu.get(t);
								if (e !== void 0) return e;
							}
							let n = eu[e];
							if (n === void 0) return;
							let r = {};
							for (let e = 0; e < n.length; e++) r[n.charCodeAt(e)] = e + 128;
							return nu && nu.set(t, r), r;
						}(t);
						if (n === void 0) return;
						let r = [];
						for (let t = 0; t < e.length; t++) {
							let i = e.charCodeAt(t);
							if (i >= 128 && (i = n[i], i === void 0)) return;
							r[t] = i;
						}
						return r;
					}, Ql.MACSTRING = function(e, t) {
						let n = Zl.MACSTRING(e, t);
						return n === void 0 ? 0 : n.length;
					}, Zl.VARDELTAS = function(e) {
						let t = 0, n = [];
						for (; t < e.length;) {
							let r = e[t];
							t = r === 0 ? iu(e, t, n) : r >= -128 && r <= 127 ? au(e, t, n) : ou(e, t, n);
						}
						return n;
					}, Zl.INDEX = function(e) {
						let t = 1, n = [t], r = [];
						for (let i = 0; i < e.length; i += 1) {
							let o = Zl.OBJECT(e[i]);
							Array.prototype.push.apply(r, o), t += o.length, n.push(t);
						}
						if (r.length === 0) return [0, 0];
						let i = [], o = 1 + Math.floor(Math.log(t) / Math.log(2)) / 8 | 0, s = [
							void 0,
							Zl.BYTE,
							Zl.USHORT,
							Zl.UINT24,
							Zl.ULONG
						][o];
						for (let e = 0; e < n.length; e += 1) {
							let t = s(n[e]);
							Array.prototype.push.apply(i, t);
						}
						return Array.prototype.concat(Zl.Card16(e.length), Zl.OffSize(o), i, r);
					}, Ql.INDEX = function(e) {
						return Zl.INDEX(e).length;
					}, Zl.DICT = function(e) {
						let t = [], n = Object.keys(e), r = n.length;
						for (let i = 0; i < r; i += 1) {
							let r = parseInt(n[i], 0), o = e[r], s = Zl.OPERAND(o.value, o.type), p = Zl.OPERATOR(r);
							for (let e = 0; e < s.length; e++) t.push(s[e]);
							for (let e = 0; e < p.length; e++) t.push(p[e]);
						}
						return t;
					}, Ql.DICT = function(e) {
						return Zl.DICT(e).length;
					}, Zl.OPERATOR = function(e) {
						return e < 1200 ? [e] : [12, e - 1200];
					}, Zl.OPERAND = function(e, t) {
						let n = [];
						if (Array.isArray(t)) for (let r = 0; r < t.length; r += 1) {
							Jl.argument(e.length === t.length, "Not enough arguments given for type" + t);
							let i = Zl.OPERAND(e[r], t[r]);
							for (let e = 0; e < i.length; e++) n.push(i[e]);
						}
						else if (t === "SID") {
							let t = Zl.NUMBER(e);
							for (let e = 0; e < t.length; e++) n.push(t[e]);
						} else if (t === "offset") {
							let t = Zl.NUMBER32(e);
							for (let e = 0; e < t.length; e++) n.push(t[e]);
						} else if (t === "number") {
							let t = Zl.NUMBER(e);
							for (let e = 0; e < t.length; e++) n.push(t[e]);
						} else {
							if (t !== "real") throw Error("Unknown operand type " + t);
							{
								let t = Zl.REAL(e);
								for (let e = 0; e < t.length; e++) n.push(t[e]);
							}
						}
						return n;
					}, Zl.OP = Zl.BYTE, Ql.OP = Ql.BYTE;
					var su = typeof WeakMap == "function" && /* @__PURE__ */ new WeakMap();
					function cu(e, t, n) {
						if (t && t.length) for (let e = 0; e < t.length; e += 1) {
							let n = t[e];
							this[n.name] = n.value;
						}
						if (this.tableName = e, this.fields = t, n) {
							let e = Object.keys(n);
							for (let t = 0; t < e.length; t += 1) {
								let r = e[t], i = n[r];
								this[r] !== void 0 && (this[r] = i);
							}
						}
					}
					function lu(e, t, n) {
						n === void 0 && (n = t.length);
						let r = Array(t.length + 1);
						r[0] = {
							name: e + "Count",
							type: "USHORT",
							value: n
						};
						for (let n = 0; n < t.length; n++) r[n + 1] = {
							name: e + n,
							type: "USHORT",
							value: t[n]
						};
						return r;
					}
					function uu(e, t, n) {
						let r = t.length, i = Array(r + 1);
						i[0] = {
							name: e + "Count",
							type: "USHORT",
							value: r
						};
						for (let o = 0; o < r; o++) i[o + 1] = {
							name: e + o,
							type: "TABLE",
							value: n(t[o], o)
						};
						return i;
					}
					function du(e, t, n) {
						let r = t.length, i = [];
						i[0] = {
							name: e + "Count",
							type: "USHORT",
							value: r
						};
						for (let e = 0; e < r; e++) i = i.concat(n(t[e], e));
						return i;
					}
					function fu(e) {
						e.format === 1 ? cu.call(this, "coverageTable", [{
							name: "coverageFormat",
							type: "USHORT",
							value: 1
						}].concat(lu("glyph", e.glyphs))) : e.format === 2 ? cu.call(this, "coverageTable", [{
							name: "coverageFormat",
							type: "USHORT",
							value: 2
						}].concat(du("rangeRecord", e.ranges, function(e, t) {
							return [
								{
									name: "startGlyphID" + t,
									type: "USHORT",
									value: e.start
								},
								{
									name: "endGlyphID" + t,
									type: "USHORT",
									value: e.end
								},
								{
									name: "startCoverageIndex" + t,
									type: "USHORT",
									value: e.index
								}
							];
						}))) : Jl.assert(!1, "Coverage format must be 1 or 2.");
					}
					function pu(e) {
						cu.call(this, "scriptListTable", du("scriptRecord", e, function(e, t) {
							let n = e.script, r = n.defaultLangSys;
							return Jl.assert(!!r, "Unable to write GSUB: script " + e.tag + " has no default language system."), [{
								name: "scriptTag" + t,
								type: "TAG",
								value: e.tag
							}, {
								name: "script" + t,
								type: "TABLE",
								value: new cu("scriptTable", [{
									name: "defaultLangSys",
									type: "TABLE",
									value: new cu("defaultLangSys", [{
										name: "lookupOrder",
										type: "USHORT",
										value: 0
									}, {
										name: "reqFeatureIndex",
										type: "USHORT",
										value: r.reqFeatureIndex
									}].concat(lu("featureIndex", r.featureIndexes)))
								}].concat(du("langSys", n.langSysRecords, function(e, t) {
									let n = e.langSys;
									return [{
										name: "langSysTag" + t,
										type: "TAG",
										value: e.tag
									}, {
										name: "langSys" + t,
										type: "TABLE",
										value: new cu("langSys", [{
											name: "lookupOrder",
											type: "USHORT",
											value: 0
										}, {
											name: "reqFeatureIndex",
											type: "USHORT",
											value: n.reqFeatureIndex
										}].concat(lu("featureIndex", n.featureIndexes)))
									}];
								})))
							}];
						}));
					}
					function mu(e) {
						cu.call(this, "featureListTable", du("featureRecord", e, function(e, t) {
							let n = e.feature;
							return [{
								name: "featureTag" + t,
								type: "TAG",
								value: e.tag
							}, {
								name: "feature" + t,
								type: "TABLE",
								value: new cu("featureTable", [{
									name: "featureParams",
									type: "USHORT",
									value: n.featureParams
								}].concat(lu("lookupListIndex", n.lookupListIndexes)))
							}];
						}));
					}
					function hu(e, t) {
						cu.call(this, "lookupListTable", uu("lookup", e, function(e) {
							let n = t[e.lookupType];
							return Jl.assert(!!n, "Unable to write GSUB lookup type " + e.lookupType + " tables."), new cu("lookupTable", [{
								name: "lookupType",
								type: "USHORT",
								value: e.lookupType
							}, {
								name: "lookupFlag",
								type: "USHORT",
								value: e.lookupFlag
							}].concat(uu("subtable", e.subtables, n)));
						}));
					}
					function gu(e) {
						e.format === 1 ? cu.call(this, "classDefTable", [{
							name: "classFormat",
							type: "USHORT",
							value: 1
						}, {
							name: "startGlyphID",
							type: "USHORT",
							value: e.startGlyph
						}].concat(lu("glyph", e.classes))) : e.format === 2 ? cu.call(this, "classDefTable", [{
							name: "classFormat",
							type: "USHORT",
							value: 2
						}].concat(du("rangeRecord", e.ranges, function(e, t) {
							return [
								{
									name: "startGlyphID" + t,
									type: "USHORT",
									value: e.start
								},
								{
									name: "endGlyphID" + t,
									type: "USHORT",
									value: e.end
								},
								{
									name: "class" + t,
									type: "USHORT",
									value: e.classId
								}
							];
						}))) : Jl.assert(!1, "Class format must be 1 or 2.");
					}
					Zl.CHARSTRING = function(e) {
						if (su) {
							let t = su.get(e);
							if (t !== void 0) return t;
						}
						let t = [], n = e.length;
						for (let r = 0; r < n; r += 1) {
							let n = e[r], i = Zl[n.type](n.value);
							for (let e = 0; e < i.length; e++) t.push(i[e]);
						}
						return su && su.set(e, t), t;
					}, Ql.CHARSTRING = function(e) {
						return Zl.CHARSTRING(e).length;
					}, Zl.OBJECT = function(e) {
						let t = Zl[e.type];
						return Jl.argument(t !== void 0, "No encoding function for type " + e.type), t(e.value);
					}, Ql.OBJECT = function(e) {
						let t = Ql[e.type];
						return Jl.argument(t !== void 0, "No sizeOf function for type " + e.type), t(e.value);
					}, Zl.TABLE = function(e) {
						let t = [], n = (e.fields || []).length, r = [], i = [];
						for (let o = 0; o < n; o += 1) {
							let n = e.fields[o], s = Zl[n.type];
							Jl.argument(s !== void 0, "No encoding function for field type " + n.type + " (" + n.name + ")");
							let p = e[n.name];
							p === void 0 && (p = n.value);
							let S = s(p);
							if (n.type === "TABLE") p.fields !== null && (i.push(t.length), r.push(S)), t.push(0, 0);
							else for (let e = 0; e < S.length; e++) t.push(S[e]);
						}
						for (let n = 0; n < r.length; n += 1) {
							let o = i[n], s = t.length;
							Jl.argument(s < 65536, "Table " + e.tableName + " too big."), t[o] = s >> 8, t[o + 1] = 255 & s;
							for (let e = 0; e < r[n].length; e++) t.push(r[n][e]);
						}
						return t;
					}, Ql.TABLE = function(e) {
						let t = 0, n = (e.fields || []).length;
						for (let r = 0; r < n; r += 1) {
							let n = e.fields[r], i = Ql[n.type];
							Jl.argument(i !== void 0, "No sizeOf function for field type " + n.type + " (" + n.name + ")");
							let o = e[n.name];
							o === void 0 && (o = n.value), t += i(o), n.type === "TABLE" && (t += 2);
						}
						return t;
					}, Zl.RECORD = Zl.TABLE, Ql.RECORD = Ql.TABLE, Zl.LITERAL = function(e) {
						return e;
					}, Ql.LITERAL = function(e) {
						return e.length;
					}, cu.prototype.encode = function() {
						return Zl.TABLE(this);
					}, cu.prototype.sizeOf = function() {
						return Ql.TABLE(this);
					}, fu.prototype = Object.create(cu.prototype), fu.prototype.constructor = fu, pu.prototype = Object.create(cu.prototype), pu.prototype.constructor = pu, mu.prototype = Object.create(cu.prototype), mu.prototype.constructor = mu, hu.prototype = Object.create(cu.prototype), hu.prototype.constructor = hu, gu.prototype = Object.create(cu.prototype), gu.prototype.constructor = gu;
					var _u = {
						Table: cu,
						Record: cu,
						Coverage: fu,
						ClassDef: gu,
						ScriptList: pu,
						FeatureList: mu,
						LookupList: hu,
						ushortList: lu,
						tableList: uu,
						recordList: du
					};
					function vu(e, t) {
						return e.getUint8(t);
					}
					function yu(e, t) {
						return e.getUint16(t, !1);
					}
					function bu(e, t) {
						return (e.getUint16(t) << 8) + e.getUint8(t + 2);
					}
					function xu(e, t) {
						return e.getUint32(t, !1);
					}
					function Su(e, t) {
						return e.getInt16(t, !1) + e.getUint16(t + 2, !1) / 65535;
					}
					var Cu = {
						byte: 1,
						uShort: 2,
						f2dot14: 2,
						short: 2,
						uInt24: 3,
						uLong: 4,
						fixed: 4,
						longDateTime: 8,
						tag: 4
					};
					function N(e, t) {
						this.data = e, this.offset = t, this.relativeOffset = 0;
					}
					N.prototype.parseByte = function() {
						let e = this.data.getUint8(this.offset + this.relativeOffset);
						return this.relativeOffset += 1, e;
					}, N.prototype.parseChar = function() {
						let e = this.data.getInt8(this.offset + this.relativeOffset);
						return this.relativeOffset += 1, e;
					}, N.prototype.parseCard8 = N.prototype.parseByte, N.prototype.parseUShort = function() {
						let e = this.data.getUint16(this.offset + this.relativeOffset);
						return this.relativeOffset += 2, e;
					}, N.prototype.parseCard16 = N.prototype.parseUShort, N.prototype.parseSID = N.prototype.parseUShort, N.prototype.parseOffset16 = N.prototype.parseUShort, N.prototype.parseShort = function() {
						let e = this.data.getInt16(this.offset + this.relativeOffset);
						return this.relativeOffset += 2, e;
					}, N.prototype.parseF2Dot14 = function() {
						let e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
						return this.relativeOffset += 2, e;
					}, N.prototype.parseUInt24 = function() {
						let e = bu(this.data, this.offset + this.relativeOffset);
						return this.relativeOffset += 3, e;
					}, N.prototype.parseULong = function() {
						let e = xu(this.data, this.offset + this.relativeOffset);
						return this.relativeOffset += 4, e;
					}, N.prototype.parseLong = function() {
						let e = (t = this.data, n = this.offset + this.relativeOffset, t.getInt32(n, !1));
						var t, n;
						return this.relativeOffset += 4, e;
					}, N.prototype.parseOffset32 = N.prototype.parseULong, N.prototype.parseFixed = function() {
						let e = Su(this.data, this.offset + this.relativeOffset);
						return this.relativeOffset += 4, e;
					}, N.prototype.parseString = function(e) {
						let t = this.data, n = this.offset + this.relativeOffset, r = "";
						this.relativeOffset += e;
						for (let i = 0; i < e; i++) r += String.fromCharCode(t.getUint8(n + i));
						return r;
					}, N.prototype.parseTag = function() {
						return this.parseString(4);
					}, N.prototype.parseLongDateTime = function() {
						let e = xu(this.data, this.offset + this.relativeOffset + 4);
						return e -= 2082844800, this.relativeOffset += 8, e;
					}, N.prototype.parseVersion = function(e) {
						let t = yu(this.data, this.offset + this.relativeOffset), n = yu(this.data, this.offset + this.relativeOffset + 2);
						return this.relativeOffset += 4, e === void 0 && (e = 4096), t + n / e / 10;
					}, N.prototype.skip = function(e, t) {
						t === void 0 && (t = 1), this.relativeOffset += Cu[e] * t;
					}, N.prototype.parseULongList = function(e) {
						e === void 0 && (e = this.parseULong());
						let t = Array(e), n = this.data, r = this.offset + this.relativeOffset;
						for (let i = 0; i < e; i++) t[i] = n.getUint32(r), r += 4;
						return this.relativeOffset += 4 * e, t;
					}, N.prototype.parseOffset16List = N.prototype.parseUShortList = function(e) {
						e === void 0 && (e = this.parseUShort());
						let t = Array(e), n = this.data, r = this.offset + this.relativeOffset;
						for (let i = 0; i < e; i++) t[i] = n.getUint16(r), r += 2;
						return this.relativeOffset += 2 * e, t;
					}, N.prototype.parseShortList = function(e) {
						let t = Array(e), n = this.data, r = this.offset + this.relativeOffset;
						for (let i = 0; i < e; i++) t[i] = n.getInt16(r), r += 2;
						return this.relativeOffset += 2 * e, t;
					}, N.prototype.parseByteList = function(e) {
						let t = Array(e), n = this.data, r = this.offset + this.relativeOffset;
						for (let i = 0; i < e; i++) t[i] = n.getUint8(r++);
						return this.relativeOffset += e, t;
					}, N.prototype.parseList = function(e, t) {
						t || (t = e, e = this.parseUShort());
						let n = Array(e);
						for (let r = 0; r < e; r++) n[r] = t.call(this);
						return n;
					}, N.prototype.parseList32 = function(e, t) {
						t || (t = e, e = this.parseULong());
						let n = Array(e);
						for (let r = 0; r < e; r++) n[r] = t.call(this);
						return n;
					}, N.prototype.parseRecordList = function(e, t) {
						t || (t = e, e = this.parseUShort());
						let n = Array(e), r = Object.keys(t);
						for (let i = 0; i < e; i++) {
							let e = {};
							for (let n = 0; n < r.length; n++) {
								let i = r[n];
								e[i] = t[i].call(this);
							}
							n[i] = e;
						}
						return n;
					}, N.prototype.parseRecordList32 = function(e, t) {
						t || (t = e, e = this.parseULong());
						let n = Array(e), r = Object.keys(t);
						for (let i = 0; i < e; i++) {
							let e = {};
							for (let n = 0; n < r.length; n++) {
								let i = r[n];
								e[i] = t[i].call(this);
							}
							n[i] = e;
						}
						return n;
					}, N.prototype.parseTupleRecords = function(e, t) {
						let n = [];
						for (let r = 0; r < e; r++) {
							let e = [];
							for (let n = 0; n < t; n++) e.push(this.parseF2Dot14());
							n.push(e);
						}
						return n;
					}, N.prototype.parseStruct = function(e) {
						if (typeof e == "function") return e.call(this);
						{
							let t = Object.keys(e), n = {};
							for (let r = 0; r < t.length; r++) {
								let i = t[r];
								n[i] = e[i].call(this);
							}
							return n;
						}
					}, N.prototype.parseValueRecord = function(e) {
						if (e === void 0 && (e = this.parseUShort()), e === 0) return;
						let t = {};
						return 1 & e && (t.xPlacement = this.parseShort()), 2 & e && (t.yPlacement = this.parseShort()), 4 & e && (t.xAdvance = this.parseShort()), 8 & e && (t.yAdvance = this.parseShort()), 16 & e && (t.xPlaDevice = void 0, this.parseShort()), 32 & e && (t.yPlaDevice = void 0, this.parseShort()), 64 & e && (t.xAdvDevice = void 0, this.parseShort()), 128 & e && (t.yAdvDevice = void 0, this.parseShort()), t;
					}, N.prototype.parseValueRecordList = function() {
						let e = this.parseUShort(), t = this.parseUShort(), n = Array(t);
						for (let r = 0; r < t; r++) n[r] = this.parseValueRecord(e);
						return n;
					}, N.prototype.parsePointer = function(e) {
						let t = this.parseOffset16();
						if (t > 0) return new N(this.data, this.offset + t).parseStruct(e);
					}, N.prototype.parsePointer32 = function(e) {
						let t = this.parseOffset32();
						if (t > 0) return new N(this.data, this.offset + t).parseStruct(e);
					}, N.prototype.parseListOfLists = function(e) {
						let t = this.parseOffset16List(), n = t.length, r = this.relativeOffset, i = Array(n);
						for (let r = 0; r < n; r++) {
							let n = t[r];
							if (n !== 0) if (this.relativeOffset = n, e) {
								let t = this.parseOffset16List(), o = Array(t.length);
								for (let r = 0; r < t.length; r++) this.relativeOffset = n + t[r], o[r] = e.call(this);
								i[r] = o;
							} else i[r] = this.parseUShortList();
							else i[r] = void 0;
						}
						return this.relativeOffset = r, i;
					}, N.prototype.parseCoverage = function() {
						let e = this.offset + this.relativeOffset, t = this.parseUShort(), n = this.parseUShort();
						if (t === 1) return {
							format: 1,
							glyphs: this.parseUShortList(n)
						};
						if (t === 2) {
							let e = Array(n);
							for (let t = 0; t < n; t++) e[t] = {
								start: this.parseUShort(),
								end: this.parseUShort(),
								index: this.parseUShort()
							};
							return {
								format: 2,
								ranges: e
							};
						}
						throw Error("0x" + e.toString(16) + ": Coverage format must be 1 or 2.");
					}, N.prototype.parseClassDef = function() {
						let e = this.offset + this.relativeOffset, t = this.parseUShort();
						return t === 1 ? {
							format: 1,
							startGlyph: this.parseUShort(),
							classes: this.parseUShortList()
						} : t === 2 ? {
							format: 2,
							ranges: this.parseRecordList({
								start: N.uShort,
								end: N.uShort,
								classId: N.uShort
							})
						} : (console.warn(`0x${e.toString(16)}: This font file uses an invalid ClassDef format of ${t}. It might be corrupted and should be reacquired if it doesn't display as intended.`), { format: t });
					}, N.list = function(e, t) {
						return function() {
							return this.parseList(e, t);
						};
					}, N.list32 = function(e, t) {
						return function() {
							return this.parseList32(e, t);
						};
					}, N.recordList = function(e, t) {
						return function() {
							return this.parseRecordList(e, t);
						};
					}, N.recordList32 = function(e, t) {
						return function() {
							return this.parseRecordList32(e, t);
						};
					}, N.pointer = function(e) {
						return function() {
							return this.parsePointer(e);
						};
					}, N.pointer32 = function(e) {
						return function() {
							return this.parsePointer32(e);
						};
					}, N.tag = N.prototype.parseTag, N.byte = N.prototype.parseByte, N.uShort = N.offset16 = N.prototype.parseUShort, N.uShortList = N.prototype.parseUShortList, N.uInt24 = N.prototype.parseUInt24, N.uLong = N.offset32 = N.prototype.parseULong, N.uLongList = N.prototype.parseULongList, N.fixed = N.prototype.parseFixed, N.f2Dot14 = N.prototype.parseF2Dot14, N.struct = N.prototype.parseStruct, N.coverage = N.prototype.parseCoverage, N.classDef = N.prototype.parseClassDef;
					var wu = {
						reserved: N.uShort,
						reqFeatureIndex: N.uShort,
						featureIndexes: N.uShortList
					};
					N.prototype.parseScriptList = function() {
						return this.parsePointer(N.recordList({
							tag: N.tag,
							script: N.pointer({
								defaultLangSys: N.pointer(wu),
								langSysRecords: N.recordList({
									tag: N.tag,
									langSys: N.pointer(wu)
								})
							})
						})) || [];
					}, N.prototype.parseFeatureList = function() {
						return this.parsePointer(N.recordList({
							tag: N.tag,
							feature: N.pointer({
								featureParams: N.offset16,
								lookupListIndexes: N.uShortList
							})
						})) || [];
					}, N.prototype.parseLookupList = function(e) {
						return this.parsePointer(N.list(N.pointer(function() {
							let t = this.parseUShort();
							Jl.argument(1 <= t && t <= 9, "GPOS/GSUB lookup type " + t + " unknown.");
							let n = this.parseUShort(), r = 16 & n;
							return {
								lookupType: t,
								lookupFlag: n,
								subtables: this.parseList(N.pointer(e[t])),
								markFilteringSet: r ? this.parseUShort() : void 0
							};
						}))) || [];
					}, N.prototype.parseFeatureVariationsList = function() {
						return this.parsePointer32(function() {
							let e = this.parseUShort(), t = this.parseUShort();
							return Jl.argument(e === 1 && t < 1, "GPOS/GSUB feature variations table unknown."), this.parseRecordList32({
								conditionSetOffset: N.offset32,
								featureTableSubstitutionOffset: N.offset32
							});
						}) || [];
					}, N.prototype.parseVariationStore = function() {
						let e = this.relativeOffset, t = this.parseUShort(), n = { itemVariationStore: this.parseItemVariationStore() };
						return this.relativeOffset = e + t + 2, n;
					}, N.prototype.parseItemVariationStore = function() {
						let e = this.relativeOffset, t = {
							format: this.parseUShort(),
							variationRegions: [],
							itemVariationSubtables: []
						}, n = this.parseOffset32(), r = this.parseUShort(), i = this.parseULongList(r);
						this.relativeOffset = e + n, t.variationRegions = this.parseVariationRegionList();
						for (let n = 0; n < r; n++) this.relativeOffset = e + i[n], t.itemVariationSubtables.push(this.parseItemVariationSubtable());
						return t;
					}, N.prototype.parseVariationRegionList = function() {
						let e = this.parseUShort(), t = this.parseUShort();
						return this.parseRecordList(t, { regionAxes: N.recordList(e, {
							startCoord: N.f2Dot14,
							peakCoord: N.f2Dot14,
							endCoord: N.f2Dot14
						}) });
					}, N.prototype.parseItemVariationSubtable = function() {
						let e = this.parseUShort(), t = this.parseUShort(), n = this.parseUShortList(), r = n.length;
						return {
							regionIndexes: n,
							deltaSets: e && r ? this.parseDeltaSets(e, t, r) : []
						};
					}, N.prototype.parseDeltaSetIndexMap = function() {
						let e = this.parseByte(), t = this.parseByte(), n = [], r = 0;
						switch (e) {
							case 0:
								r = this.parseUShort();
								break;
							case 1:
								r = this.parseULong();
								break;
							default: console.error(`unsupported DeltaSetIndexMap format ${e}`);
						}
						if (!r) return {
							format: e,
							entryFormat: t
						};
						let i = 1 + (15 & t), o = 1 + ((48 & t) >> 4);
						for (let e = 0; e < r; e++) {
							let e;
							if (o === 1) e = this.parseByte();
							else if (o === 2) e = this.parseUShort();
							else if (o === 3) e = this.parseUInt24();
							else {
								if (o !== 4) throw Error(`Invalid entry size of ${o}`);
								e = this.parseULong();
							}
							let t = e >> i, r = e & (1 << i) - 1;
							n.push({
								outerIndex: t,
								innerIndex: r
							});
						}
						return {
							format: e,
							entryFormat: t,
							map: n
						};
					}, N.prototype.parseDeltaSets = function(e, t, n) {
						let r = Array.from({ length: e }, () => []), i = 32768 & t, o = 32767 & t;
						if (o > n) throw Error("wordCount must be less than or equal to regionIndexCount");
						let s = (i ? this.parseLong : this.parseShort).bind(this), p = (i ? this.parseShort : this.parseChar).bind(this);
						for (let t = 0; t < e; t++) for (let e = 0; e < n; e++) e < o ? r[t].push(s()) : r[t].push(p());
						return r;
					}, N.prototype.parseTupleVariationStoreList = function(e, t, n) {
						let r = this.parseUShort(), i = 1 & this.parseUShort(), o = this.parseOffset32(), s = (i ? this.parseULong : this.parseUShort).bind(this), p = {}, S, T = s();
						i || (T *= 2);
						for (let k = 0; k < r; k++) S = s(), i || (S *= 2), p[k] = S - T ? this.parseTupleVariationStore(o + T, e, t, n, k) : void 0, T = S;
						return p;
					}, N.prototype.parseTupleVariationStore = function(e, t, n, r, i) {
						let o = this.relativeOffset;
						this.relativeOffset = e, n === "cvar" && (this.relativeOffset += 4);
						let s = this.parseUShort(), p = !!(32768 & s), S = 4095 & s, T = this.parseOffset16(), k = [], A = [];
						for (let e = 0; e < S; e++) {
							let e = this.parseTupleVariationHeader(t, n);
							k.push(e);
						}
						this.relativeOffset !== e + T && (console.warn(`Unexpected offset after parsing tuple variation headers! Expected ${e + T}, actually ${this.relativeOffset}`), this.relativeOffset = e + T), p && (A = this.parsePackedPointNumbers());
						let Sl = this.relativeOffset;
						for (let e = 0; e < S; e++) {
							let t = k[e];
							t.privatePoints = [], this.relativeOffset = Sl, n !== "cvar" || t.peakTuple || console.warn("An embedded peak tuple is required in TupleVariationHeaders for the cvar table."), t.flags.privatePointNumbers && (t.privatePoints = this.parsePackedPointNumbers()), delete t.flags;
							let o = this.offset, s = this.relativeOffset, p = (e) => {
								let p, S, T = () => {
									let e = 0;
									if (n === "gvar") {
										if (e = t.privatePoints.length || A.length, !e) {
											let t = r.get(i);
											t.path, e = t.points.length, e += 4;
										}
									} else n === "cvar" && (e = r.length);
									this.offset = o, this.relativeOffset = s, p = this.parsePackedDeltas(e), n === "gvar" && (S = this.parsePackedDeltas(e));
								};
								return {
									configurable: !0,
									get: function() {
										return p === void 0 && T(), e === "deltasY" ? S : p;
									},
									set: function(t) {
										p === void 0 && T(), e === "deltasY" ? S = t : p = t;
									}
								};
							};
							Object.defineProperty(t, "deltas", p.call(this, "deltas")), n === "gvar" && Object.defineProperty(t, "deltasY", p.call(this, "deltasY")), Sl += t.variationDataSize, delete t.variationDataSize;
						}
						this.relativeOffset = o;
						let Cl = { headers: k };
						return Cl.sharedPoints = A, Cl;
					}, N.prototype.parseTupleVariationHeader = function(e, t) {
						let n = this.parseUShort(), r = this.parseUShort(), i = !!(32768 & r), o = !!(16384 & r), s = !!(8192 & r), p = i ? void 0 : 4095 & r, S = {
							variationDataSize: n,
							peakTuple: i ? this.parseTupleRecords(1, e)[0] : void 0,
							intermediateStartTuple: o ? this.parseTupleRecords(1, e)[0] : void 0,
							intermediateEndTuple: o ? this.parseTupleRecords(1, e)[0] : void 0,
							flags: {
								embeddedPeakTuple: i,
								intermediateRegion: o,
								privatePointNumbers: s
							}
						};
						return t === "gvar" && (S.sharedTupleRecordsIndex = p), S;
					}, N.prototype.parsePackedPointNumbers = function() {
						let e = this.parseByte(), t = [], n = e;
						e >= 128 && (n = (127 & e) << 8 | this.parseByte());
						let r = 0;
						for (; t.length < n;) {
							let e = this.parseByte(), i = !!(128 & e), o = 1 + (127 & e);
							for (let e = 0; e < o && t.length < n; e++) {
								let e;
								e = i ? this.parseUShort() : this.parseByte(), r += e, t.push(r);
							}
						}
						return t;
					}, N.prototype.parsePackedDeltas = function(e) {
						let t = [];
						for (; t.length < e;) {
							let n = this.parseByte(), r = !!(128 & n), i = !!(64 & n), o = 1 + (63 & n);
							for (let n = 0; n < o && t.length < e; n++) r ? t.push(0) : i ? t.push(this.parseShort()) : t.push(this.parseChar());
						}
						return t;
					};
					var Tu = {
						getByte: vu,
						getCard8: vu,
						getUShort: yu,
						getCard16: yu,
						getShort: function(e, t) {
							return e.getInt16(t, !1);
						},
						getUInt24: bu,
						getULong: xu,
						getFixed: Su,
						getTag: function(e, t) {
							let n = "";
							for (let r = t; r < t + 4; r += 1) n += String.fromCharCode(e.getInt8(r));
							return n;
						},
						getOffset: function(e, t, n) {
							let r = 0;
							for (let i = 0; i < n; i += 1) r <<= 8, r += e.getUint8(t + i);
							return r;
						},
						getBytes: function(e, t, n) {
							let r = [];
							for (let i = t; i < n; i += 1) r.push(e.getUint8(i));
							return r;
						},
						bytesToString: function(e) {
							let t = "";
							for (let n = 0; n < e.length; n += 1) t += String.fromCharCode(e[n]);
							return t;
						},
						Parser: N
					}, Eu = [
						"copyright",
						"fontFamily",
						"fontSubfamily",
						"uniqueID",
						"fullName",
						"version",
						"postScriptName",
						"trademark",
						"manufacturer",
						"designer",
						"description",
						"manufacturerURL",
						"designerURL",
						"license",
						"licenseURL",
						"reserved",
						"preferredFamily",
						"preferredSubfamily",
						"compatibleFullName",
						"sampleText",
						"postScriptFindFontName",
						"wwsFamily",
						"wwsSubfamily"
					], Du = {
						0: "en",
						1: "fr",
						2: "de",
						3: "it",
						4: "nl",
						5: "sv",
						6: "es",
						7: "da",
						8: "pt",
						9: "no",
						10: "he",
						11: "ja",
						12: "ar",
						13: "fi",
						14: "el",
						15: "is",
						16: "mt",
						17: "tr",
						18: "hr",
						19: "zh-Hant",
						20: "ur",
						21: "hi",
						22: "th",
						23: "ko",
						24: "lt",
						25: "pl",
						26: "hu",
						27: "es",
						28: "lv",
						29: "se",
						30: "fo",
						31: "fa",
						32: "ru",
						33: "zh",
						34: "nl-BE",
						35: "ga",
						36: "sq",
						37: "ro",
						38: "cz",
						39: "sk",
						40: "si",
						41: "yi",
						42: "sr",
						43: "mk",
						44: "bg",
						45: "uk",
						46: "be",
						47: "uz",
						48: "kk",
						49: "az-Cyrl",
						50: "az-Arab",
						51: "hy",
						52: "ka",
						53: "mo",
						54: "ky",
						55: "tg",
						56: "tk",
						57: "mn-CN",
						58: "mn",
						59: "ps",
						60: "ks",
						61: "ku",
						62: "sd",
						63: "bo",
						64: "ne",
						65: "sa",
						66: "mr",
						67: "bn",
						68: "as",
						69: "gu",
						70: "pa",
						71: "or",
						72: "ml",
						73: "kn",
						74: "ta",
						75: "te",
						76: "si",
						77: "my",
						78: "km",
						79: "lo",
						80: "vi",
						81: "id",
						82: "tl",
						83: "ms",
						84: "ms-Arab",
						85: "am",
						86: "ti",
						87: "om",
						88: "so",
						89: "sw",
						90: "rw",
						91: "rn",
						92: "ny",
						93: "mg",
						94: "eo",
						128: "cy",
						129: "eu",
						130: "ca",
						131: "la",
						132: "qu",
						133: "gn",
						134: "ay",
						135: "tt",
						136: "ug",
						137: "dz",
						138: "jv",
						139: "su",
						140: "gl",
						141: "af",
						142: "br",
						143: "iu",
						144: "gd",
						145: "gv",
						146: "ga",
						147: "to",
						148: "el-polyton",
						149: "kl",
						150: "az",
						151: "nn"
					}, Ou = {
						0: 0,
						1: 0,
						2: 0,
						3: 0,
						4: 0,
						5: 0,
						6: 0,
						7: 0,
						8: 0,
						9: 0,
						10: 5,
						11: 1,
						12: 4,
						13: 0,
						14: 6,
						15: 0,
						16: 0,
						17: 0,
						18: 0,
						19: 2,
						20: 4,
						21: 9,
						22: 21,
						23: 3,
						24: 29,
						25: 29,
						26: 29,
						27: 29,
						28: 29,
						29: 0,
						30: 0,
						31: 4,
						32: 7,
						33: 25,
						34: 0,
						35: 0,
						36: 0,
						37: 0,
						38: 29,
						39: 29,
						40: 0,
						41: 5,
						42: 7,
						43: 7,
						44: 7,
						45: 7,
						46: 7,
						47: 7,
						48: 7,
						49: 7,
						50: 4,
						51: 24,
						52: 23,
						53: 7,
						54: 7,
						55: 7,
						56: 7,
						57: 27,
						58: 7,
						59: 4,
						60: 4,
						61: 4,
						62: 4,
						63: 26,
						64: 9,
						65: 9,
						66: 9,
						67: 13,
						68: 13,
						69: 11,
						70: 10,
						71: 12,
						72: 17,
						73: 16,
						74: 14,
						75: 15,
						76: 18,
						77: 19,
						78: 20,
						79: 22,
						80: 30,
						81: 0,
						82: 0,
						83: 0,
						84: 4,
						85: 28,
						86: 28,
						87: 28,
						88: 0,
						89: 0,
						90: 0,
						91: 0,
						92: 0,
						93: 0,
						94: 0,
						128: 0,
						129: 0,
						130: 0,
						131: 0,
						132: 0,
						133: 0,
						134: 0,
						135: 7,
						136: 4,
						137: 26,
						138: 0,
						139: 0,
						140: 0,
						141: 0,
						142: 0,
						143: 28,
						144: 0,
						145: 0,
						146: 0,
						147: 0,
						148: 6,
						149: 0,
						150: 0,
						151: 0
					}, ku = {
						1078: "af",
						1052: "sq",
						1156: "gsw",
						1118: "am",
						5121: "ar-DZ",
						15361: "ar-BH",
						3073: "ar",
						2049: "ar-IQ",
						11265: "ar-JO",
						13313: "ar-KW",
						12289: "ar-LB",
						4097: "ar-LY",
						6145: "ary",
						8193: "ar-OM",
						16385: "ar-QA",
						1025: "ar-SA",
						10241: "ar-SY",
						7169: "aeb",
						14337: "ar-AE",
						9217: "ar-YE",
						1067: "hy",
						1101: "as",
						2092: "az-Cyrl",
						1068: "az",
						1133: "ba",
						1069: "eu",
						1059: "be",
						2117: "bn",
						1093: "bn-IN",
						8218: "bs-Cyrl",
						5146: "bs",
						1150: "br",
						1026: "bg",
						1027: "ca",
						3076: "zh-HK",
						5124: "zh-MO",
						2052: "zh",
						4100: "zh-SG",
						1028: "zh-TW",
						1155: "co",
						1050: "hr",
						4122: "hr-BA",
						1029: "cs",
						1030: "da",
						1164: "prs",
						1125: "dv",
						2067: "nl-BE",
						1043: "nl",
						3081: "en-AU",
						10249: "en-BZ",
						4105: "en-CA",
						9225: "en-029",
						16393: "en-IN",
						6153: "en-IE",
						8201: "en-JM",
						17417: "en-MY",
						5129: "en-NZ",
						13321: "en-PH",
						18441: "en-SG",
						7177: "en-ZA",
						11273: "en-TT",
						2057: "en-GB",
						1033: "en",
						12297: "en-ZW",
						1061: "et",
						1080: "fo",
						1124: "fil",
						1035: "fi",
						2060: "fr-BE",
						3084: "fr-CA",
						1036: "fr",
						5132: "fr-LU",
						6156: "fr-MC",
						4108: "fr-CH",
						1122: "fy",
						1110: "gl",
						1079: "ka",
						3079: "de-AT",
						1031: "de",
						5127: "de-LI",
						4103: "de-LU",
						2055: "de-CH",
						1032: "el",
						1135: "kl",
						1095: "gu",
						1128: "ha",
						1037: "he",
						1081: "hi",
						1038: "hu",
						1039: "is",
						1136: "ig",
						1057: "id",
						1117: "iu",
						2141: "iu-Latn",
						2108: "ga",
						1076: "xh",
						1077: "zu",
						1040: "it",
						2064: "it-CH",
						1041: "ja",
						1099: "kn",
						1087: "kk",
						1107: "km",
						1158: "quc",
						1159: "rw",
						1089: "sw",
						1111: "kok",
						1042: "ko",
						1088: "ky",
						1108: "lo",
						1062: "lv",
						1063: "lt",
						2094: "dsb",
						1134: "lb",
						1071: "mk",
						2110: "ms-BN",
						1086: "ms",
						1100: "ml",
						1082: "mt",
						1153: "mi",
						1146: "arn",
						1102: "mr",
						1148: "moh",
						1104: "mn",
						2128: "mn-CN",
						1121: "ne",
						1044: "nb",
						2068: "nn",
						1154: "oc",
						1096: "or",
						1123: "ps",
						1045: "pl",
						1046: "pt",
						2070: "pt-PT",
						1094: "pa",
						1131: "qu-BO",
						2155: "qu-EC",
						3179: "qu",
						1048: "ro",
						1047: "rm",
						1049: "ru",
						9275: "smn",
						4155: "smj-NO",
						5179: "smj",
						3131: "se-FI",
						1083: "se",
						2107: "se-SE",
						8251: "sms",
						6203: "sma-NO",
						7227: "sms",
						1103: "sa",
						7194: "sr-Cyrl-BA",
						3098: "sr",
						6170: "sr-Latn-BA",
						2074: "sr-Latn",
						1132: "nso",
						1074: "tn",
						1115: "si",
						1051: "sk",
						1060: "sl",
						11274: "es-AR",
						16394: "es-BO",
						13322: "es-CL",
						9226: "es-CO",
						5130: "es-CR",
						7178: "es-DO",
						12298: "es-EC",
						17418: "es-SV",
						4106: "es-GT",
						18442: "es-HN",
						2058: "es-MX",
						19466: "es-NI",
						6154: "es-PA",
						15370: "es-PY",
						10250: "es-PE",
						20490: "es-PR",
						3082: "es",
						1034: "es",
						21514: "es-US",
						14346: "es-UY",
						8202: "es-VE",
						2077: "sv-FI",
						1053: "sv",
						1114: "syr",
						1064: "tg",
						2143: "tzm",
						1097: "ta",
						1092: "tt",
						1098: "te",
						1054: "th",
						1105: "bo",
						1055: "tr",
						1090: "tk",
						1152: "ug",
						1058: "uk",
						1070: "hsb",
						1056: "ur",
						2115: "uz-Cyrl",
						1091: "uz",
						1066: "vi",
						1106: "cy",
						1160: "wo",
						1157: "sah",
						1144: "ii",
						1130: "yo"
					};
					function Au(e, t, n) {
						switch (e) {
							case 0:
								if (t === 65535) return "und";
								if (n) return n[t];
								break;
							case 1: return Du[t];
							case 3: return ku[t];
						}
					}
					var ju = "utf-16", Mu = {
						0: "macintosh",
						1: "x-mac-japanese",
						2: "x-mac-chinesetrad",
						3: "x-mac-korean",
						6: "x-mac-greek",
						7: "x-mac-cyrillic",
						9: "x-mac-devanagai",
						10: "x-mac-gurmukhi",
						11: "x-mac-gujarati",
						12: "x-mac-oriya",
						13: "x-mac-bengali",
						14: "x-mac-tamil",
						15: "x-mac-telugu",
						16: "x-mac-kannada",
						17: "x-mac-malayalam",
						18: "x-mac-sinhalese",
						19: "x-mac-burmese",
						20: "x-mac-khmer",
						21: "x-mac-thai",
						22: "x-mac-lao",
						23: "x-mac-georgian",
						24: "x-mac-armenian",
						25: "x-mac-chinesesimp",
						26: "x-mac-tibetan",
						27: "x-mac-mongolian",
						28: "x-mac-ethiopic",
						29: "x-mac-ce",
						30: "x-mac-vietnamese",
						31: "x-mac-extarabic"
					}, Nu = {
						15: "x-mac-icelandic",
						17: "x-mac-turkish",
						18: "x-mac-croatian",
						24: "x-mac-ce",
						25: "x-mac-ce",
						26: "x-mac-ce",
						27: "x-mac-ce",
						28: "x-mac-ce",
						30: "x-mac-icelandic",
						37: "x-mac-romanian",
						38: "x-mac-ce",
						39: "x-mac-ce",
						40: "x-mac-ce",
						143: "x-mac-inuit",
						146: "x-mac-gaelic"
					};
					function Pu(e, t, n) {
						switch (e) {
							case 0: return ju;
							case 1: return Nu[n] || Mu[t];
							case 3: if (t === 1 || t === 10) return ju;
						}
					}
					var Fu = {
						0: "unicode",
						1: "macintosh",
						2: "reserved",
						3: "windows"
					};
					function Iu(e) {
						return Fu[e];
					}
					function Lu(e) {
						let t = {};
						for (let n in e) t[e[n]] = parseInt(n);
						return t;
					}
					function Ru(e, t, n, r, i, o) {
						return new _u.Record("NameRecord", [
							{
								name: "platformID",
								type: "USHORT",
								value: e
							},
							{
								name: "encodingID",
								type: "USHORT",
								value: t
							},
							{
								name: "languageID",
								type: "USHORT",
								value: n
							},
							{
								name: "nameID",
								type: "USHORT",
								value: r
							},
							{
								name: "length",
								type: "USHORT",
								value: i
							},
							{
								name: "offset",
								type: "USHORT",
								value: o
							}
						]);
					}
					function zu(e, t) {
						let n = function(e, t) {
							let n = e.length, r = t.length - n + 1;
							e: for (let i = 0; i < r; i++) for (; i < r; i++) {
								for (let r = 0; r < n; r++) if (t[i + r] !== e[r]) continue e;
								return i;
							}
							return -1;
						}(e, t);
						if (n < 0) {
							n = t.length;
							let r = 0, i = e.length;
							for (; r < i; ++r) t.push(e[r]);
						}
						return n;
					}
					function Bu(e, t, n = []) {
						if (t < 256 && t in Eu) {
							if (n.length && !n.includes(parseInt(t))) return;
							t = Eu[t];
						}
						for (let n in e) for (let r in e[n]) if (r === t || parseInt(r) === t) return e[n][r];
					}
					var Vu = {
						parse: function(e, t, n) {
							let r = {}, i = new Tu.Parser(e, t), o = i.parseUShort(), s = i.parseUShort(), p = i.offset + i.parseUShort();
							for (let t = 0; t < s; t++) {
								let t = i.parseUShort(), o = i.parseUShort(), s = i.parseUShort(), S = i.parseUShort(), T = Eu[S] || S, k = i.parseUShort(), A = i.parseUShort(), Sl = Au(t, s, n), Cl = Pu(t, o, s), wl = Iu(t);
								if (Cl !== void 0 && Sl !== void 0 && wl !== void 0) {
									let t;
									if (t = Cl === ju ? Xl.UTF16(e, p + A, k) : Xl.MACSTRING(e, p + A, k, Cl), t) {
										let e = r[wl];
										e === void 0 && (e = r[wl] = {});
										let n = e[T];
										n === void 0 && (n = e[T] = {}), n[Sl] = t;
									}
								}
							}
							return o === 1 && i.parseUShort(), r;
						},
						make: function(e, t) {
							let n = Lu(Fu), r = Lu(Du), i = Lu(ku), o = [], s = [];
							for (let p in e) {
								let S, T = [], k = {}, A = Lu(Eu), Sl = n[p];
								for (let t in e[p]) {
									let n = A[t];
									if (n === void 0 && (n = t), S = parseInt(n), isNaN(S)) throw Error("Name table entry \"" + t + "\" does not exist, see nameTableNames for complete list.");
									k[S] = e[p][t], T.push(S);
								}
								for (let e = 0; e < T.length; e++) {
									S = T[e];
									let n = k[S];
									for (let e in n) {
										let p = n[e];
										if (Sl === 1 || Sl === 0) {
											let n = r[e], i = Ou[n], T = Pu(Sl, i, n), k = Zl.MACSTRING(p, T);
											if (Sl === 0 && (n = t.indexOf(e), n < 0 && (n = t.length, t.push(e)), i = 4, k = Zl.UTF16(p)), k !== void 0) {
												let e = zu(k, s);
												o.push(Ru(Sl, i, n, S, k.length, e));
											}
										}
										if (Sl === 3) {
											let t = i[e];
											if (t !== void 0) {
												let e = Zl.UTF16(p), n = zu(e, s);
												o.push(Ru(3, 1, t, S, e.length, n));
											}
										}
									}
								}
							}
							o.sort(function(e, t) {
								return e.platformID - t.platformID || e.encodingID - t.encodingID || e.languageID - t.languageID || e.nameID - t.nameID;
							});
							let p = new _u.Table("name", [
								{
									name: "format",
									type: "USHORT",
									value: 0
								},
								{
									name: "count",
									type: "USHORT",
									value: o.length
								},
								{
									name: "stringOffset",
									type: "USHORT",
									value: 6 + 12 * o.length
								}
							]);
							for (let e = 0; e < o.length; e++) p.fields.push({
								name: "record_" + e,
								type: "RECORD",
								value: o[e]
							});
							return p.fields.push({
								name: "strings",
								type: "LITERAL",
								value: s
							}), p;
						},
						getNameByID: Bu
					};
					function Hu(e, t, n) {
						e.segments.push({
							end: t,
							start: t,
							delta: -(t - n),
							offset: 0,
							glyphIndex: n
						});
					}
					var Uu = {
						parse: function(e, t) {
							let n = {};
							n.version = Tu.getUShort(e, t), Jl.argument(n.version === 0, "cmap table version should be 0."), n.numTables = Tu.getUShort(e, t + 2);
							let r = null, i = -1, o = -1, s = null, p = null, S = [
								0,
								1,
								2,
								3,
								4,
								6
							], T = [
								0,
								1,
								10
							];
							for (let k = n.numTables - 1; k >= 0; --k) if (s = Tu.getUShort(e, t + 4 + 8 * k), p = Tu.getUShort(e, t + 4 + 8 * k + 2), s === 3 && T.includes(p) || s === 0 && S.includes(p) || s === 1 && p === 0) {
								if (o > 0) continue;
								if (o = Tu.getULong(e, t + 4 + 8 * k + 4), r) break;
							} else if (s === 0 && p === 5) {
								if (i = Tu.getULong(e, t + 4 + 8 * k + 4), r = new Tu.Parser(e, t + i), r.parseUShort() !== 14) i = -1, r = null;
								else if (o > 0) break;
							}
							if (o === -1) throw Error("No valid cmap sub-tables found.");
							let k = new Tu.Parser(e, t + o);
							if (n.format = k.parseUShort(), n.format === 0) (function(e, t, n, r) {
								e.length = t.parseUShort(), e.language = t.parseUShort() - 1;
								let i = t.parseByteList(e.length), o = Object.assign({}, i), s = eu[Pu(n, r, e.language)];
								for (let e = 0; e < s.length; e++) o[s.charCodeAt(e)] = i[128 + e];
								e.glyphIndexMap = o;
							})(n, k, s, p);
							else if (n.format === 12 || n.format === 13) (function(e, t, n) {
								let r;
								t.parseUShort(), e.length = t.parseULong(), e.language = t.parseULong(), e.groupCount = r = t.parseULong(), e.glyphIndexMap = {};
								for (let i = 0; i < r; i += 1) {
									let r = t.parseULong(), i = t.parseULong(), o = t.parseULong();
									for (let t = r; t <= i; t += 1) e.glyphIndexMap[t] = o, n === 12 && o++;
								}
							})(n, k, n.format);
							else {
								if (n.format !== 4) throw Error("Only format 0 (platformId 1, encodingId 0), 4, 12 and 14 cmap tables are supported (found format " + n.format + ", platformId " + s + ", encodingId " + p + ").");
								(function(e, t, n, r, i) {
									let o;
									e.length = t.parseUShort(), e.language = t.parseUShort(), e.segCount = o = t.parseUShort() >> 1, t.skip("uShort", 3), e.glyphIndexMap = {};
									let s = new Tu.Parser(n, r + i + 14), p = new Tu.Parser(n, r + i + 16 + 2 * o), S = new Tu.Parser(n, r + i + 16 + 4 * o), T = new Tu.Parser(n, r + i + 16 + 6 * o), k = r + i + 16 + 8 * o;
									for (let t = 0; t < o - 1; t += 1) {
										let t, r = s.parseUShort(), i = p.parseUShort(), o = S.parseShort(), A = T.parseUShort();
										for (let s = i; s <= r; s += 1) A === 0 ? t = s + o & 65535 : (k = T.offset + T.relativeOffset - 2, k += A, k += 2 * (s - i), t = Tu.getUShort(n, k), t !== 0 && (t = t + o & 65535)), e.glyphIndexMap[s] = t;
									}
								})(n, k, e, t, o);
							}
							return r && function(e, t) {
								let n = {};
								t.skip("uLong");
								let r = t.parseULong();
								for (let e = 0; e < r; e += 1) {
									let e = t.parseUInt24(), r = { varSelector: e }, i = t.parseOffset32(), o = t.parseOffset32(), s = t.relativeOffset;
									i && (t.relativeOffset = i, r.defaultUVS = t.parseStruct({ ranges: function() {
										return t.parseRecordList32({
											startUnicodeValue: t.parseUInt24,
											additionalCount: t.parseByte
										});
									} })), o && (t.relativeOffset = o, r.nonDefaultUVS = t.parseStruct({ uvsMappings: function() {
										let e = {}, n = t.parseRecordList32({
											unicodeValue: t.parseUInt24,
											glyphID: t.parseUShort
										});
										for (let t = 0; t < n.length; t += 1) e[n[t].unicodeValue] = n[t];
										return e;
									} })), n[e] = r, t.relativeOffset = s;
								}
								e.varSelectorList = n;
							}(n, r), n;
						},
						make: function(e) {
							let t, n = !0;
							for (t = e.length - 1; t > 0; --t) if (e.get(t).unicode > 65535) {
								n = !1;
								break;
							}
							let r = [
								{
									name: "version",
									type: "USHORT",
									value: 0
								},
								{
									name: "numTables",
									type: "USHORT",
									value: n ? 1 : 2
								},
								{
									name: "platformID",
									type: "USHORT",
									value: 3
								},
								{
									name: "encodingID",
									type: "USHORT",
									value: 1
								},
								{
									name: "offset",
									type: "ULONG",
									value: n ? 12 : 20
								}
							];
							n || r.push({
								name: "cmap12PlatformID",
								type: "USHORT",
								value: 3
							}, {
								name: "cmap12EncodingID",
								type: "USHORT",
								value: 10
							}, {
								name: "cmap12Offset",
								type: "ULONG",
								value: 0
							}), r.push({
								name: "format",
								type: "USHORT",
								value: 4
							}, {
								name: "cmap4Length",
								type: "USHORT",
								value: 0
							}, {
								name: "language",
								type: "USHORT",
								value: 0
							}, {
								name: "segCountX2",
								type: "USHORT",
								value: 0
							}, {
								name: "searchRange",
								type: "USHORT",
								value: 0
							}, {
								name: "entrySelector",
								type: "USHORT",
								value: 0
							}, {
								name: "rangeShift",
								type: "USHORT",
								value: 0
							});
							let i = new _u.Table("cmap", r);
							for (i.segments = [], t = 0; t < e.length; t += 1) {
								let n = e.get(t);
								for (let e = 0; e < n.unicodes.length; e += 1) Hu(i, n.unicodes[e], t);
							}
							i.segments.sort(function(e, t) {
								return e.start - t.start;
							}), i.segments = function(e) {
								if (e.length === 0) return e;
								let t = [e[0]];
								for (let n = 1; n < e.length; n++) {
									let r = t[t.length - 1], i = e[n];
									r.end + 1 === i.start && r.delta === i.delta && i.end !== 65535 ? r.end = i.end : t.push(i);
								}
								return t;
							}(i.segments), function(e) {
								e.segments.push({
									end: 65535,
									start: 65535,
									delta: 1,
									offset: 0
								});
							}(i);
							let o = i.segments.length, s = 0, p = [], S = [], T = [], k = [], A = [], Sl = [];
							for (t = 0; t < o; t += 1) {
								let e = i.segments[t];
								e.end <= 65535 && e.start <= 65535 ? (p.push({
									name: "end_" + t,
									type: "USHORT",
									value: e.end
								}), S.push({
									name: "start_" + t,
									type: "USHORT",
									value: e.start
								}), T.push({
									name: "idDelta_" + t,
									type: "SHORT",
									value: e.delta
								}), k.push({
									name: "idRangeOffset_" + t,
									type: "USHORT",
									value: e.offset
								}), e.glyphId !== void 0 && A.push({
									name: "glyph_" + t,
									type: "USHORT",
									value: e.glyphId
								})) : s += 1, n || e.glyphIndex === void 0 || (Sl.push({
									name: "cmap12Start_" + t,
									type: "ULONG",
									value: e.start
								}), Sl.push({
									name: "cmap12End_" + t,
									type: "ULONG",
									value: e.end
								}), Sl.push({
									name: "cmap12Glyph_" + t,
									type: "ULONG",
									value: e.glyphIndex
								}));
							}
							i.segCountX2 = 2 * (o - s), i.searchRange = 2 * 2 ** Math.floor(Math.log(o - s) / Math.log(2)), i.entrySelector = Math.log(i.searchRange / 2) / Math.log(2), i.rangeShift = i.segCountX2 - i.searchRange;
							for (let e = 0; e < p.length; e++) i.fields.push(p[e]);
							i.fields.push({
								name: "reservedPad",
								type: "USHORT",
								value: 0
							});
							for (let e = 0; e < S.length; e++) i.fields.push(S[e]);
							for (let e = 0; e < T.length; e++) i.fields.push(T[e]);
							for (let e = 0; e < k.length; e++) i.fields.push(k[e]);
							for (let e = 0; e < A.length; e++) i.fields.push(A[e]);
							if (i.cmap4Length = 14 + 2 * p.length + 2 + 2 * S.length + 2 * T.length + 2 * k.length + 2 * A.length, !n) {
								let e = 16 + 4 * Sl.length;
								i.cmap12Offset = 20 + i.cmap4Length, i.fields.push({
									name: "cmap12Format",
									type: "USHORT",
									value: 12
								}, {
									name: "cmap12Reserved",
									type: "USHORT",
									value: 0
								}, {
									name: "cmap12Length",
									type: "ULONG",
									value: e
								}, {
									name: "cmap12Language",
									type: "ULONG",
									value: 0
								}, {
									name: "cmap12nGroups",
									type: "ULONG",
									value: Sl.length / 3
								});
								for (let e = 0; e < Sl.length; e++) i.fields.push(Sl[e]);
							}
							return i;
						}
					}, Wu = /* @__PURE__ */ ".notdef,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quoteright,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,quoteleft,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,exclamdown,cent,sterling,fraction,yen,florin,section,currency,quotesingle,quotedblleft,guillemotleft,guilsinglleft,guilsinglright,fi,fl,endash,dagger,daggerdbl,periodcentered,paragraph,bullet,quotesinglbase,quotedblbase,quotedblright,guillemotright,ellipsis,perthousand,questiondown,grave,acute,circumflex,tilde,macron,breve,dotaccent,dieresis,ring,cedilla,hungarumlaut,ogonek,caron,emdash,AE,ordfeminine,Lslash,Oslash,OE,ordmasculine,ae,dotlessi,lslash,oslash,oe,germandbls,onesuperior,logicalnot,mu,trademark,Eth,onehalf,plusminus,Thorn,onequarter,divide,brokenbar,degree,thorn,threequarters,twosuperior,registered,minus,eth,multiply,threesuperior,copyright,Aacute,Acircumflex,Adieresis,Agrave,Aring,Atilde,Ccedilla,Eacute,Ecircumflex,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Ntilde,Oacute,Ocircumflex,Odieresis,Ograve,Otilde,Scaron,Uacute,Ucircumflex,Udieresis,Ugrave,Yacute,Ydieresis,Zcaron,aacute,acircumflex,adieresis,agrave,aring,atilde,ccedilla,eacute,ecircumflex,edieresis,egrave,iacute,icircumflex,idieresis,igrave,ntilde,oacute,ocircumflex,odieresis,ograve,otilde,scaron,uacute,ucircumflex,udieresis,ugrave,yacute,ydieresis,zcaron,exclamsmall,Hungarumlautsmall,dollaroldstyle,dollarsuperior,ampersandsmall,Acutesmall,parenleftsuperior,parenrightsuperior,266 ff,onedotenleader,zerooldstyle,oneoldstyle,twooldstyle,threeoldstyle,fouroldstyle,fiveoldstyle,sixoldstyle,sevenoldstyle,eightoldstyle,nineoldstyle,commasuperior,threequartersemdash,periodsuperior,questionsmall,asuperior,bsuperior,centsuperior,dsuperior,esuperior,isuperior,lsuperior,msuperior,nsuperior,osuperior,rsuperior,ssuperior,tsuperior,ff,ffi,ffl,parenleftinferior,parenrightinferior,Circumflexsmall,hyphensuperior,Gravesmall,Asmall,Bsmall,Csmall,Dsmall,Esmall,Fsmall,Gsmall,Hsmall,Ismall,Jsmall,Ksmall,Lsmall,Msmall,Nsmall,Osmall,Psmall,Qsmall,Rsmall,Ssmall,Tsmall,Usmall,Vsmall,Wsmall,Xsmall,Ysmall,Zsmall,colonmonetary,onefitted,rupiah,Tildesmall,exclamdownsmall,centoldstyle,Lslashsmall,Scaronsmall,Zcaronsmall,Dieresissmall,Brevesmall,Caronsmall,Dotaccentsmall,Macronsmall,figuredash,hypheninferior,Ogoneksmall,Ringsmall,Cedillasmall,questiondownsmall,oneeighth,threeeighths,fiveeighths,seveneighths,onethird,twothirds,zerosuperior,foursuperior,fivesuperior,sixsuperior,sevensuperior,eightsuperior,ninesuperior,zeroinferior,oneinferior,twoinferior,threeinferior,fourinferior,fiveinferior,sixinferior,seveninferior,eightinferior,nineinferior,centinferior,dollarinferior,periodinferior,commainferior,Agravesmall,Aacutesmall,Acircumflexsmall,Atildesmall,Adieresissmall,Aringsmall,AEsmall,Ccedillasmall,Egravesmall,Eacutesmall,Ecircumflexsmall,Edieresissmall,Igravesmall,Iacutesmall,Icircumflexsmall,Idieresissmall,Ethsmall,Ntildesmall,Ogravesmall,Oacutesmall,Ocircumflexsmall,Otildesmall,Odieresissmall,OEsmall,Oslashsmall,Ugravesmall,Uacutesmall,Ucircumflexsmall,Udieresissmall,Yacutesmall,Thornsmall,Ydieresissmall,001.000,001.001,001.002,001.003,Black,Bold,Book,Light,Medium,Regular,Roman,Semibold".split(","), Gu = /* @__PURE__ */ ".notdef,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quoteright,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,quoteleft,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,exclamdown,cent,sterling,fraction,yen,florin,section,currency,quotesingle,quotedblleft,guillemotleft,guilsinglleft,guilsinglright,fi,fl,endash,dagger,daggerdbl,periodcentered,paragraph,bullet,quotesinglbase,quotedblbase,quotedblright,guillemotright,ellipsis,perthousand,questiondown,grave,acute,circumflex,tilde,macron,breve,dotaccent,dieresis,ring,cedilla,hungarumlaut,ogonek,caron,emdash,AE,ordfeminine,Lslash,Oslash,OE,ordmasculine,ae,dotlessi,lslash,oslash,oe,germandbls,onesuperior,logicalnot,mu,trademark,Eth,onehalf,plusminus,Thorn,onequarter,divide,brokenbar,degree,thorn,threequarters,twosuperior,registered,minus,eth,multiply,threesuperior,copyright,Aacute,Acircumflex,Adieresis,Agrave,Aring,Atilde,Ccedilla,Eacute,Ecircumflex,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Ntilde,Oacute,Ocircumflex,Odieresis,Ograve,Otilde,Scaron,Uacute,Ucircumflex,Udieresis,Ugrave,Yacute,Ydieresis,Zcaron,aacute,acircumflex,adieresis,agrave,aring,atilde,ccedilla,eacute,ecircumflex,edieresis,egrave,iacute,icircumflex,idieresis,igrave,ntilde,oacute,ocircumflex,odieresis,ograve,otilde,scaron,uacute,ucircumflex,udieresis,ugrave,yacute,ydieresis,zcaron".split(","), Ku = /* @__PURE__ */ ".notdef,space,exclamsmall,Hungarumlautsmall,dollaroldstyle,dollarsuperior,ampersandsmall,Acutesmall,parenleftsuperior,parenrightsuperior,twodotenleader,onedotenleader,comma,hyphen,period,fraction,zerooldstyle,oneoldstyle,twooldstyle,threeoldstyle,fouroldstyle,fiveoldstyle,sixoldstyle,sevenoldstyle,eightoldstyle,nineoldstyle,colon,semicolon,commasuperior,threequartersemdash,periodsuperior,questionsmall,asuperior,bsuperior,centsuperior,dsuperior,esuperior,isuperior,lsuperior,msuperior,nsuperior,osuperior,rsuperior,ssuperior,tsuperior,ff,fi,fl,ffi,ffl,parenleftinferior,parenrightinferior,Circumflexsmall,hyphensuperior,Gravesmall,Asmall,Bsmall,Csmall,Dsmall,Esmall,Fsmall,Gsmall,Hsmall,Ismall,Jsmall,Ksmall,Lsmall,Msmall,Nsmall,Osmall,Psmall,Qsmall,Rsmall,Ssmall,Tsmall,Usmall,Vsmall,Wsmall,Xsmall,Ysmall,Zsmall,colonmonetary,onefitted,rupiah,Tildesmall,exclamdownsmall,centoldstyle,Lslashsmall,Scaronsmall,Zcaronsmall,Dieresissmall,Brevesmall,Caronsmall,Dotaccentsmall,Macronsmall,figuredash,hypheninferior,Ogoneksmall,Ringsmall,Cedillasmall,onequarter,onehalf,threequarters,questiondownsmall,oneeighth,threeeighths,fiveeighths,seveneighths,onethird,twothirds,zerosuperior,onesuperior,twosuperior,threesuperior,foursuperior,fivesuperior,sixsuperior,sevensuperior,eightsuperior,ninesuperior,zeroinferior,oneinferior,twoinferior,threeinferior,fourinferior,fiveinferior,sixinferior,seveninferior,eightinferior,nineinferior,centinferior,dollarinferior,periodinferior,commainferior,Agravesmall,Aacutesmall,Acircumflexsmall,Atildesmall,Adieresissmall,Aringsmall,AEsmall,Ccedillasmall,Egravesmall,Eacutesmall,Ecircumflexsmall,Edieresissmall,Igravesmall,Iacutesmall,Icircumflexsmall,Idieresissmall,Ethsmall,Ntildesmall,Ogravesmall,Oacutesmall,Ocircumflexsmall,Otildesmall,Odieresissmall,OEsmall,Oslashsmall,Ugravesmall,Uacutesmall,Ucircumflexsmall,Udieresissmall,Yacutesmall,Thornsmall,Ydieresissmall".split(","), qu = /* @__PURE__ */ ".notdef,space,dollaroldstyle,dollarsuperior,parenleftsuperior,parenrightsuperior,twodotenleader,onedotenleader,comma,hyphen,period,fraction,zerooldstyle,oneoldstyle,twooldstyle,threeoldstyle,fouroldstyle,fiveoldstyle,sixoldstyle,sevenoldstyle,eightoldstyle,nineoldstyle,colon,semicolon,commasuperior,threequartersemdash,periodsuperior,asuperior,bsuperior,centsuperior,dsuperior,esuperior,isuperior,lsuperior,msuperior,nsuperior,osuperior,rsuperior,ssuperior,tsuperior,ff,fi,fl,ffi,ffl,parenleftinferior,parenrightinferior,hyphensuperior,colonmonetary,onefitted,rupiah,centoldstyle,figuredash,hypheninferior,onequarter,onehalf,threequarters,oneeighth,threeeighths,fiveeighths,seveneighths,onethird,twothirds,zerosuperior,onesuperior,twosuperior,threesuperior,foursuperior,fivesuperior,sixsuperior,sevensuperior,eightsuperior,ninesuperior,zeroinferior,oneinferior,twoinferior,threeinferior,fourinferior,fiveinferior,sixinferior,seveninferior,eightinferior,nineinferior,centinferior,dollarinferior,periodinferior,commainferior".split(","), Ju = /* @__PURE__ */ "................................space.exclam.quotedbl.numbersign.dollar.percent.ampersand.quoteright.parenleft.parenright.asterisk.plus.comma.hyphen.period.slash.zero.one.two.three.four.five.six.seven.eight.nine.colon.semicolon.less.equal.greater.question.at.A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.bracketleft.backslash.bracketright.asciicircum.underscore.quoteleft.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.braceleft.bar.braceright.asciitilde...................................exclamdown.cent.sterling.fraction.yen.florin.section.currency.quotesingle.quotedblleft.guillemotleft.guilsinglleft.guilsinglright.fi.fl..endash.dagger.daggerdbl.periodcentered..paragraph.bullet.quotesinglbase.quotedblbase.quotedblright.guillemotright.ellipsis.perthousand..questiondown..grave.acute.circumflex.tilde.macron.breve.dotaccent.dieresis..ring.cedilla..hungarumlaut.ogonek.caron.emdash.................AE..ordfeminine.....Lslash.Oslash.OE.ordmasculine......ae....dotlessi...lslash.oslash.oe.germandbls".split("."), Yu = /* @__PURE__ */ "................................space.exclamsmall.Hungarumlautsmall..dollaroldstyle.dollarsuperior.ampersandsmall.Acutesmall.parenleftsuperior.parenrightsuperior.twodotenleader.onedotenleader.comma.hyphen.period.fraction.zerooldstyle.oneoldstyle.twooldstyle.threeoldstyle.fouroldstyle.fiveoldstyle.sixoldstyle.sevenoldstyle.eightoldstyle.nineoldstyle.colon.semicolon.commasuperior.threequartersemdash.periodsuperior.questionsmall..asuperior.bsuperior.centsuperior.dsuperior.esuperior...isuperior...lsuperior.msuperior.nsuperior.osuperior...rsuperior.ssuperior.tsuperior..ff.fi.fl.ffi.ffl.parenleftinferior..parenrightinferior.Circumflexsmall.hyphensuperior.Gravesmall.Asmall.Bsmall.Csmall.Dsmall.Esmall.Fsmall.Gsmall.Hsmall.Ismall.Jsmall.Ksmall.Lsmall.Msmall.Nsmall.Osmall.Psmall.Qsmall.Rsmall.Ssmall.Tsmall.Usmall.Vsmall.Wsmall.Xsmall.Ysmall.Zsmall.colonmonetary.onefitted.rupiah.Tildesmall...................................exclamdownsmall.centoldstyle.Lslashsmall...Scaronsmall.Zcaronsmall.Dieresissmall.Brevesmall.Caronsmall..Dotaccentsmall...Macronsmall...figuredash.hypheninferior...Ogoneksmall.Ringsmall.Cedillasmall....onequarter.onehalf.threequarters.questiondownsmall.oneeighth.threeeighths.fiveeighths.seveneighths.onethird.twothirds...zerosuperior.onesuperior.twosuperior.threesuperior.foursuperior.fivesuperior.sixsuperior.sevensuperior.eightsuperior.ninesuperior.zeroinferior.oneinferior.twoinferior.threeinferior.fourinferior.fiveinferior.sixinferior.seveninferior.eightinferior.nineinferior.centinferior.dollarinferior.periodinferior.commainferior.Agravesmall.Aacutesmall.Acircumflexsmall.Atildesmall.Adieresissmall.Aringsmall.AEsmall.Ccedillasmall.Egravesmall.Eacutesmall.Ecircumflexsmall.Edieresissmall.Igravesmall.Iacutesmall.Icircumflexsmall.Idieresissmall.Ethsmall.Ntildesmall.Ogravesmall.Oacutesmall.Ocircumflexsmall.Otildesmall.Odieresissmall.OEsmall.Oslashsmall.Ugravesmall.Uacutesmall.Ucircumflexsmall.Udieresissmall.Yacutesmall.Thornsmall.Ydieresissmall".split("."), Xu = /* @__PURE__ */ ".notdef,.null,nonmarkingreturn,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quotesingle,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,grave,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,Adieresis,Aring,Ccedilla,Eacute,Ntilde,Odieresis,Udieresis,aacute,agrave,acircumflex,adieresis,atilde,aring,ccedilla,eacute,egrave,ecircumflex,edieresis,iacute,igrave,icircumflex,idieresis,ntilde,oacute,ograve,ocircumflex,odieresis,otilde,uacute,ugrave,ucircumflex,udieresis,dagger,degree,cent,sterling,section,bullet,paragraph,germandbls,registered,copyright,trademark,acute,dieresis,notequal,AE,Oslash,infinity,plusminus,lessequal,greaterequal,yen,mu,partialdiff,summation,product,pi,integral,ordfeminine,ordmasculine,Omega,ae,oslash,questiondown,exclamdown,logicalnot,radical,florin,approxequal,Delta,guillemotleft,guillemotright,ellipsis,nonbreakingspace,Agrave,Atilde,Otilde,OE,oe,endash,emdash,quotedblleft,quotedblright,quoteleft,quoteright,divide,lozenge,ydieresis,Ydieresis,fraction,currency,guilsinglleft,guilsinglright,fi,fl,daggerdbl,periodcentered,quotesinglbase,quotedblbase,perthousand,Acircumflex,Ecircumflex,Aacute,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Oacute,Ocircumflex,apple,Ograve,Uacute,Ucircumflex,Ugrave,dotlessi,circumflex,tilde,macron,breve,dotaccent,ring,cedilla,hungarumlaut,ogonek,caron,Lslash,lslash,Scaron,scaron,Zcaron,zcaron,brokenbar,Eth,eth,Yacute,yacute,Thorn,thorn,minus,multiply,onesuperior,twosuperior,threesuperior,onehalf,onequarter,threequarters,franc,Gbreve,gbreve,Idotaccent,Scedilla,scedilla,Cacute,cacute,Ccaron,ccaron,dcroat".split(",");
					function Zu(e) {
						this.font = e;
					}
					function Qu(e) {
						this.cmap = e;
					}
					function $u(e, t) {
						this.encoding = e, this.charset = t;
					}
					function ed(e) {
						switch (e.version) {
							case 1:
								this.names = Xu.slice();
								break;
							case 2:
								this.names = Array(e.numberOfGlyphs);
								for (let t = 0; t < e.numberOfGlyphs; t++) e.glyphNameIndex[t] < Xu.length ? this.names[t] = Xu[e.glyphNameIndex[t]] : this.names[t] = e.names[e.glyphNameIndex[t] - Xu.length];
								break;
							case 2.5:
								this.names = Array(e.numberOfGlyphs);
								for (let t = 0; t < e.numberOfGlyphs; t++) this.names[t] = Xu[t + e.glyphNameIndex[t]];
								break;
							default: this.names = [];
						}
					}
					Zu.prototype.charToGlyphIndex = function(e) {
						let t = e.codePointAt(0), n = this.font.glyphs;
						if (n) for (let e = 0; e < n.length; e += 1) {
							let r = n.get(e);
							for (let n = 0; n < r.unicodes.length; n += 1) if (r.unicodes[n] === t) return e;
						}
						return null;
					}, Qu.prototype.charToGlyphIndex = function(e) {
						return this.cmap.glyphIndexMap[e.codePointAt(0)] || 0;
					}, $u.prototype.charToGlyphIndex = function(e) {
						let t = e.codePointAt(0), n = this.encoding[t];
						return this.charset.indexOf(n);
					}, ed.prototype.nameToGlyphIndex = function(e) {
						return this.names.indexOf(e);
					}, ed.prototype.glyphIndexToName = function(e) {
						return this.names[e];
					};
					var td = function(e, t, n, r, i) {
						e.beginPath(), e.moveTo(t, n), e.lineTo(r, i), e.stroke();
					};
					function nd(e) {
						var t = (4278190080 & e) >> 24, n = (16711680 & e) >> 16, r = (65280 & e) >> 8, i = 255 & e;
						return {
							b: t = t + 256 & 255,
							g: n = n + 256 & 255,
							r: r = r + 256 & 255,
							a: i = (i + 256 & 255) / 255
						};
					}
					function rd(e, t, n = 0, r = "hexa") {
						if (t == 65535) return "currentColor";
						let i = e && e.tables && e.tables.cpal;
						if (!i) return "currentColor";
						if (n > i.colorRecordIndices.length - 1) throw Error(`Palette index out of range (colorRecordIndices.length: ${i.colorRecordIndices.length}, index: ${t})`);
						if (t > i.numPaletteEntries) throw Error(`Color index out of range (numPaletteEntries: ${i.numPaletteEntries}, index: ${t})`);
						let o = i.colorRecordIndices[n] + t;
						if (o > i.colorRecords) throw Error(`Color index out of range (colorRecords.length: ${i.colorRecords.length}, lookupIndex: ${o})`);
						let s = nd(i.colorRecords[o]);
						return r === "bgra" ? s : sd(s, r);
					}
					function id(e) {
						return ("0" + parseInt(e).toString(16)).slice(-2);
					}
					function ad(e) {
						return parseInt(`0x${id(e.b)}${id(e.g)}${id(e.r)}${id(255 * e.a)}`, 16);
					}
					function od(e, t = "hexa") {
						let n = t == "raw" || t == "cpal", r = Number.isInteger(e), i = !0;
						if (r && n || e === "currentColor") return e;
						if (typeof e == "object") {
							if (t == "bgra") return e;
							if (n) return ad(e);
						} else if (!r && /^#([a-f0-9]{3}|[a-f0-9]{4}|[a-f0-9]{6}|[a-f0-9]{8})$/i.test(e.trim())) {
							switch ((e = e.trim().substring(1)).length) {
								case 3:
									e = {
										r: parseInt(e[0].repeat(2), 16),
										g: parseInt(e[1].repeat(2), 16),
										b: parseInt(e[2].repeat(2), 16),
										a: 1
									};
									break;
								case 4:
									e = {
										r: parseInt(e[0].repeat(2), 16),
										g: parseInt(e[1].repeat(2), 16),
										b: parseInt(e[2].repeat(2), 16),
										a: parseInt(e[3].repeat(2), 16) / 255
									};
									break;
								case 6:
									e = {
										r: parseInt(e[0] + e[1], 16),
										g: parseInt(e[2] + e[3], 16),
										b: parseInt(e[4] + e[5], 16),
										a: 1
									};
									break;
								case 8: e = {
									r: parseInt(e[0] + e[1], 16),
									g: parseInt(e[2] + e[3], 16),
									b: parseInt(e[4] + e[5], 16),
									a: parseInt(e[6] + e[7], 16) / 255
								};
							}
							if (t == "bgra") return e;
						} else if (typeof document < "u" && /^[a-z]+$/i.test(e)) {
							let t = document.createElement("canvas").getContext("2d");
							t.fillStyle = e;
							let n = sd(t.fillStyle, "hexa");
							n === "#000000ff" && e.toLowerCase() !== "black" ? i = !1 : e = n;
						} else {
							e = e.trim();
							let t = /rgba?\(\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:,|\s*)\s*(?:(\d*\.\d+)(%?)|(\d+)(%?))\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;
							if (t.test(e)) {
								let n = e.match(t).filter((e) => e !== void 0);
								e = {
									r: Math.round(parseFloat(n[1]) / (n[2] ? 100 / 255 : 1)),
									g: Math.round(parseFloat(n[3]) / (n[4] ? 100 / 255 : 1)),
									b: Math.round(parseFloat(n[5]) / (n[6] ? 100 / 255 : 1)),
									a: n[7] ? parseFloat(n[7]) / (n[8] ? 100 : 1) : 1
								};
							} else {
								let t = /hsla?\(\s*(?:(\d*\.\d+|\d+)(deg|turn|))\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:,|\s*)\s*(?:(\d*\.\d+)%?|(\d+)%?)\s*(?:(?:,|\s|\/)\s*(?:(0*(?:\.\d+)?()|0*1(?:\.0+)?())|(?:\.\d+)|(\d+)(%)|(\d*\.\d+)(%)))?\s*\)/;
								if (t.test(e)) {
									let n = e.match(t).filter((e) => e !== void 0);
									e = function(e) {
										let { h: t, s: n, l: r, a: i } = e;
										t %= 360, n /= 100, r /= 100;
										let o = (1 - Math.abs(2 * r - 1)) * n, s = o * (1 - Math.abs(t / 60 % 2 - 1)), p = r - o / 2, S = 0, T = 0, k = 0;
										return 0 <= t && t < 60 ? (S = o, T = s, k = 0) : 60 <= t && t < 120 ? (S = s, T = o, k = 0) : 120 <= t && t < 180 ? (S = 0, T = o, k = s) : 180 <= t && t < 240 ? (S = 0, T = s, k = o) : 240 <= t && t < 300 ? (S = s, T = 0, k = o) : 300 <= t && t <= 360 && (S = o, T = 0, k = s), {
											r: Math.round(255 * (S + p)),
											g: Math.round(255 * (T + p)),
											b: Math.round(255 * (k + p)),
											a: i
										};
									}({
										h: parseFloat(n[1]) * (n[2] === "turn" ? 360 : 1),
										s: parseFloat(n[3]),
										l: parseFloat(n[4]),
										a: n[5] ? parseFloat(n[5]) / (n[6] ? 100 : 1) : 1
									});
								} else i = !1;
							}
						}
						if (!i) throw Error(`Invalid color format: ${e}`);
						return sd(e, t);
					}
					function sd(e, t = "hexa") {
						if (e === "currentColor") return e;
						if (Number.isInteger(e)) {
							if (t == "raw" || t == "cpal") return e;
							e = nd(e);
						} else typeof e != "object" && (e = od(e, "bgra"));
						let n = ["hsl", "hsla"].includes(t) ? function(e) {
							let t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.max(t, n, r), o = Math.min(t, n, r), s, p, S = (i + o) / 2;
							if (i === o) s = p = 0;
							else {
								let e = i - o;
								switch (p = S > .5 ? e / (2 - i - o) : e / (i + o), i) {
									case t:
										s = (n - r) / e + (n < r ? 6 : 0);
										break;
									case n:
										s = (r - t) / e + 2;
										break;
									case r: s = (t - n) / e + 4;
								}
								s /= 6;
							}
							return {
								h: 360 * s,
								s: 100 * p,
								l: 100 * S
							};
						}(e) : null;
						switch (t) {
							case "rgba": return `rgba(${e.r}, ${e.g}, ${e.b}, ${parseFloat(e.a.toFixed(3))})`;
							case "rgb": return `rgb(${e.r}, ${e.g}, ${e.b})`;
							case "hex":
							case "hex6":
							case "hex-6": return `#${id(e.r)}${id(e.g)}${id(e.b)}`;
							case "hexa":
							case "hex8":
							case "hex-8": return `#${id(e.r)}${id(e.g)}${id(e.b)}${id(255 * e.a)}`;
							case "hsl": return `hsl(${n.h.toFixed(2)}, ${n.s.toFixed(2)}%, ${n.l.toFixed(2)}%)`;
							case "hsla": return `hsla(${n.h.toFixed(2)}, ${n.s.toFixed(2)}%, ${n.l.toFixed(2)}%, ${parseFloat(e.a.toFixed(3))})`;
							case "bgra": return e;
							case "raw":
							case "cpal": return ad(e);
							default: throw Error("Unknown color format: " + t);
						}
					}
					var cd = {
						parse: function(e, t) {
							let n = new N(e, t), r = n.parseShort();
							r !== 0 && console.warn("Only CPALv0 is currently fully supported.");
							let i = n.parseShort(), o = n.parseShort(), s = n.parseShort(), p = n.parseOffset32(), S = n.parseUShortList(o);
							n.relativeOffset = p;
							let T = n.parseULongList(s);
							return n.relativeOffset = p, {
								version: r,
								numPaletteEntries: i,
								colorRecords: T,
								colorRecordIndices: S
							};
						},
						make: function({ version: e = 0, numPaletteEntries: t = 0, colorRecords: n = [], colorRecordIndices: r = [0] }) {
							return Jl.argument(e === 0, "Only CPALv0 are supported."), Jl.argument(n.length, "No colorRecords given."), Jl.argument(r.length, "No colorRecordIndices given."), r.length > 1 && Jl.argument(t, "Can't infer numPaletteEntries on multiple colorRecordIndices"), new _u.Table("CPAL", [
								{
									name: "version",
									type: "USHORT",
									value: e
								},
								{
									name: "numPaletteEntries",
									type: "USHORT",
									value: t || n.length
								},
								{
									name: "numPalettes",
									type: "USHORT",
									value: r.length
								},
								{
									name: "numColorRecords",
									type: "USHORT",
									value: n.length
								},
								{
									name: "colorRecordsArrayOffset",
									type: "ULONG",
									value: 12 + 2 * r.length
								},
								...r.map((e, t) => ({
									name: "colorRecordIndices_" + t,
									type: "USHORT",
									value: e
								})),
								...n.map((e, t) => ({
									name: "colorRecords_" + t,
									type: "ULONG",
									value: e
								}))
							]);
						},
						getPaletteColor: rd,
						parseColor: od,
						formatColor: sd
					};
					function ld(e) {
						this.bindConstructorValues(e);
					}
					ld.prototype.bindConstructorValues = function(e) {
						if (this.index = e.index || 0, e.name === ".notdef" ? e.unicode = void 0 : e.name === ".null" && (e.unicode = 0), e.unicode === 0 && e.name !== ".null") throw Error("The unicode value \"0\" is reserved for the glyph name \".null\" and cannot be used by any other glyph.");
						this.name = e.name || null, this.unicode = e.unicode, this.unicodes = e.unicodes || (e.unicode === void 0 ? [] : [e.unicode]), "xMin" in e && (this.xMin = e.xMin), "yMin" in e && (this.yMin = e.yMin), "xMax" in e && (this.xMax = e.xMax), "yMax" in e && (this.yMax = e.yMax), "advanceWidth" in e && (this.advanceWidth = e.advanceWidth), "leftSideBearing" in e && (this.leftSideBearing = e.leftSideBearing), "points" in e && (this.points = e.points), Object.defineProperty(this, "path", function(e, t) {
							let n = t || new Gl();
							return {
								configurable: !0,
								get: function() {
									return typeof n == "function" && (n = n()), n;
								},
								set: function(e) {
									n = e;
								}
							};
						}(0, e.path));
					}, ld.prototype.addUnicode = function(e) {
						this.unicodes.length === 0 && (this.unicode = e), this.unicodes.push(e);
					}, ld.prototype.getBoundingBox = function() {
						return this.path.getBoundingBox();
					}, ld.prototype.getPath = function(e, t, n, r, i) {
						let o, s;
						e = e === void 0 ? 0 : e, t = t === void 0 ? 0 : t, n = n === void 0 ? 72 : n;
						let p = (r = Object.assign({}, i && i.defaultRenderOptions, r)).xScale, S = r.yScale, T = 1 / (this.path.unitsPerEm || 1e3) * n, k = this;
						i && i.variation && (k = i.variation.getTransform(this, r.variation), o = k.path.commands), r.hinting && i && i.hinting && (s = k.path && i.hinting.exec(k, n, r)), s ? (o = i.hinting.getCommands(s), e = Math.round(e), t = Math.round(t), p = S = 1) : (o = k.path.commands, p === void 0 && (p = T), S === void 0 && (S = T));
						let A = new Gl();
						if (r.drawSVG) {
							let n = this.getSvgImage(i);
							if (n) {
								let r = new Gl();
								return r._image = {
									image: n.image,
									x: e + n.leftSideBearing * T,
									y: t - n.baseline * T,
									width: n.image.width * T,
									height: n.image.height * T
								}, A._layers = [r], A;
							}
						}
						if (r.drawLayers) {
							let o = this.getLayers(i);
							if (o && o.length) {
								A._layers = [];
								for (let s = 0; s < o.length; s += 1) {
									let p = o[s], S = rd(i, p.paletteIndex, r.usePalette);
									S = S === "currentColor" ? r.fill || "black" : sd(S, r.colorFormat || "rgba"), r = Object.assign({}, r, { fill: S }), A._layers.push(this.getPath.call(p.glyph, e, t, n, r, i));
								}
								return A;
							}
						}
						A.fill = r.fill || this.path.fill, A.stroke = this.path.stroke, A.strokeWidth = this.path.strokeWidth * T;
						for (let n = 0; n < o.length; n += 1) {
							let r = o[n];
							r.type === "M" ? A.moveTo(e + r.x * p, t + -r.y * S) : r.type === "L" ? A.lineTo(e + r.x * p, t + -r.y * S) : r.type === "Q" ? A.quadraticCurveTo(e + r.x1 * p, t + -r.y1 * S, e + r.x * p, t + -r.y * S) : r.type === "C" ? A.curveTo(e + r.x1 * p, t + -r.y1 * S, e + r.x2 * p, t + -r.y2 * S, e + r.x * p, t + -r.y * S) : r.type === "Z" && A.stroke && A.strokeWidth && A.closePath();
						}
						return A;
					}, ld.prototype.getLayers = function(e) {
						if (!e) throw Error("The font object is required to read the colr/cpal tables in order to get the layers.");
						return e.layers.get(this.index);
					}, ld.prototype.getSvgImage = function(e) {
						if (!e) throw Error("The font object is required to read the svg table in order to get the image.");
						return e.svgImages.get(this.index);
					}, ld.prototype.getContours = function(e = null) {
						if (this.points === void 0 && !e) return [];
						let t = [], n = [], r = e || this.points;
						for (let e = 0; e < r.length; e += 1) {
							let i = r[e];
							n.push(i), i.lastPointOfContour && (t.push(n), n = []);
						}
						return Jl.argument(n.length === 0, "There are still points left in the current contour."), t;
					}, ld.prototype.getMetrics = function() {
						let e = this.path.commands, t = [], n = [];
						for (let r = 0; r < e.length; r += 1) {
							let i = e[r];
							i.type !== "Z" && (t.push(i.x), n.push(i.y)), i.type !== "Q" && i.type !== "C" || (t.push(i.x1), n.push(i.y1)), i.type === "C" && (t.push(i.x2), n.push(i.y2));
						}
						let r = {
							xMin: Math.min.apply(null, t),
							yMin: Math.min.apply(null, n),
							xMax: Math.max.apply(null, t),
							yMax: Math.max.apply(null, n),
							leftSideBearing: this.leftSideBearing
						};
						return isFinite(r.xMin) || (r.xMin = 0), isFinite(r.xMax) || (r.xMax = this.advanceWidth), isFinite(r.yMin) || (r.yMin = 0), isFinite(r.yMax) || (r.yMax = 0), r.rightSideBearing = this.advanceWidth - r.leftSideBearing - (r.xMax - r.xMin), r;
					}, ld.prototype.draw = function(e, t, n, r, i, o) {
						i = Object.assign({}, o && o.defaultRenderOptions, i), this.getPath(t, n, r, i, o).draw(e);
					}, ld.prototype.drawPoints = function(e, t, n, r, i, o) {
						if ((i = Object.assign({}, o && o.defaultRenderOptions, i)).drawLayers) {
							let i = this.getLayers(o);
							if (i && i.length) {
								for (let o = 0; o < i.length; o += 1) i[o].glyph.index !== this.index && this.drawPoints.call(i[o].glyph, e, t, n, r);
								return;
							}
						}
						function s(t, n, r, i) {
							e.beginPath();
							for (let o = 0; o < t.length; o += 1) e.moveTo(n + t[o].x * i, r + t[o].y * i), e.arc(n + t[o].x * i, r + t[o].y * i, 2, 0, 2 * Math.PI, !1);
							e.fill();
						}
						t = t === void 0 ? 0 : t, n = n === void 0 ? 0 : n, r = r === void 0 ? 24 : r;
						let p = 1 / this.path.unitsPerEm * r, S = [], T = [], k = this.path.commands;
						o && o.variation && (k = o.variation.getTransform(this, i.variation).path.commands);
						for (let e = 0; e < k.length; e += 1) {
							let t = k[e];
							t.x !== void 0 && S.push({
								x: t.x,
								y: -t.y
							}), t.x1 !== void 0 && T.push({
								x: t.x1,
								y: -t.y1
							}), t.x2 !== void 0 && T.push({
								x: t.x2,
								y: -t.y2
							});
						}
						e.fillStyle = "blue", s(S, t, n, p), e.fillStyle = "red", s(T, t, n, p);
					}, ld.prototype.drawMetrics = function(e, t, n, r) {
						let i;
						t = t === void 0 ? 0 : t, n = n === void 0 ? 0 : n, r = r === void 0 ? 24 : r, i = 1 / this.path.unitsPerEm * r, e.lineWidth = 1, e.strokeStyle = "black", td(e, t, -1e4, t, 1e4), td(e, -1e4, n, 1e4, n);
						let o = this.xMin || 0, s = this.yMin || 0, p = this.xMax || 0, S = this.yMax || 0, T = this.advanceWidth || 0;
						e.strokeStyle = "blue", td(e, t + o * i, -1e4, t + o * i, 1e4), td(e, t + p * i, -1e4, t + p * i, 1e4), td(e, -1e4, n + -s * i, 1e4, n + -s * i), td(e, -1e4, n + -S * i, 1e4, n + -S * i), e.strokeStyle = "green", td(e, t + T * i, -1e4, t + T * i, 1e4);
					}, ld.prototype.toPathData = function(e, t) {
						e = Object.assign({}, { variation: t && t.defaultRenderOptions.variation }, e);
						let n = this;
						t && t.variation && (n = t.variation.getTransform(this, e.variation));
						let r = n.points && e.pointsTransform ? e.pointsTransform(n.points) : n.path;
						return e.pathTransform && (r = e.pathTransform(r)), r.toPathData(e);
					}, ld.prototype.fromSVG = function(e, t = {}) {
						return this.path.fromSVG(e, t);
					}, ld.prototype.toSVG = function(e, t) {
						let n = this.toPathData.apply(this, [e, t]);
						return this.path.toSVG(e, n);
					}, ld.prototype.toDOMElement = function(e, t) {
						e = Object.assign({}, { variation: t && t.defaultRenderOptions.variation }, e);
						let n = this.path;
						return t && t.variation && (n = t.variation.getTransform(this, e.variation).path), n.toDOMElement(e);
					};
					var ud = ld;
					function dd(e, t, n) {
						Object.defineProperty(e, t, {
							get: function() {
								return e[n] === void 0 && e.path, e[n];
							},
							set: function(t) {
								e[n] = t;
							},
							enumerable: !0,
							configurable: !0
						});
					}
					function fd(e, t) {
						if (this.font = e, this.glyphs = {}, Array.isArray(t)) for (let n = 0; n < t.length; n++) {
							let r = t[n];
							r.path.unitsPerEm = e.unitsPerEm, this.glyphs[n] = r;
						}
						this.length = t && t.length || 0;
					}
					typeof Symbol < "u" && Symbol.iterator && (fd.prototype[Symbol.iterator] = function() {
						let e = -1;
						return { next: function() {
							e++;
							let t = e >= this.length - 1;
							return {
								value: this.get(e),
								done: t
							};
						}.bind(this) };
					}), fd.prototype.get = function(e) {
						if (this.font._push && this.glyphs[e] === void 0) {
							this.font._push(e), typeof this.glyphs[e] == "function" && (this.glyphs[e] = this.glyphs[e]());
							let t = this.glyphs[e], n = this.font._IndexToUnicodeMap[e];
							if (n) for (let e = 0; e < n.unicodes.length; e++) t.addUnicode(n.unicodes[e]);
							this.font.cffEncoding ? t.name = this.font.cffEncoding.charset[e] : this.font.glyphNames.names && (t.name = this.font.glyphNames.glyphIndexToName(e)), this.glyphs[e].advanceWidth = this.font._hmtxTableData[e].advanceWidth, this.glyphs[e].leftSideBearing = this.font._hmtxTableData[e].leftSideBearing;
						} else typeof this.glyphs[e] == "function" && (this.glyphs[e] = this.glyphs[e]());
						return this.glyphs[e];
					}, fd.prototype.push = function(e, t) {
						this.glyphs[e] = t, this.length++;
					};
					var pd = {
						GlyphSet: fd,
						glyphLoader: function(e, t) {
							return new ud({
								index: t,
								font: e
							});
						},
						ttfGlyphLoader: function(e, t, n, r, i, o) {
							return function() {
								let s = new ud({
									index: t,
									font: e
								});
								return s.path = function() {
									n(s, r, i);
									let t = o(e.glyphs, s);
									return t.unitsPerEm = e.unitsPerEm, t;
								}, dd(s, "numberOfContours", "_numberOfContours"), dd(s, "xMin", "_xMin"), dd(s, "xMax", "_xMax"), dd(s, "yMin", "_yMin"), dd(s, "yMax", "_yMax"), dd(s, "points", "_points"), s;
							};
						},
						cffGlyphLoader: function(e, t, n, r, i) {
							return function() {
								let o = new ud({
									index: t,
									font: e
								});
								return o.path = function() {
									let t = n(e, o, r, i);
									return t.unitsPerEm = e.unitsPerEm, t;
								}, o;
							};
						}
					};
					function md(e, t) {
						if (e === t) return !0;
						if (Array.isArray(e) && Array.isArray(t)) {
							if (e.length !== t.length) return !1;
							for (let n = 0; n < e.length; n += 1) if (!md(e[n], t[n])) return !1;
							return !0;
						}
						return !1;
					}
					function hd(e) {
						let t;
						return t = e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768, t;
					}
					function gd(e, t, n, r) {
						let i = [], o = [], s = r > 1 ? Tu.getULong(e, t) : Tu.getCard16(e, t), p = r > 1 ? 4 : 2, S, T;
						if (s !== 0) {
							let n = Tu.getByte(e, t + p);
							S = t + (s + 1) * n + p;
							let r = t + p + 1;
							for (let t = 0; t < s + 1; t += 1) i.push(Tu.getOffset(e, r, n)), r += n;
							T = S + i[s];
						} else T = t + p;
						for (let s = 0; s < i.length - 1; s += 1) {
							let p = Tu.getBytes(e, S + i[s], S + i[s + 1]);
							n && (p = n(p, e, t, r)), o.push(p);
						}
						return {
							objects: o,
							startOffset: t,
							endOffset: T
						};
					}
					function _d(e, t) {
						let n, r, i, o;
						if (t === 28) return n = e.parseByte(), r = e.parseByte(), n << 8 | r;
						if (t === 29) return n = e.parseByte(), r = e.parseByte(), i = e.parseByte(), o = e.parseByte(), n << 24 | r << 16 | i << 8 | o;
						if (t === 30) return function(e) {
							let t = "", n = [
								"0",
								"1",
								"2",
								"3",
								"4",
								"5",
								"6",
								"7",
								"8",
								"9",
								".",
								"E",
								"E-",
								null,
								"-"
							];
							for (;;) {
								let r = e.parseByte(), i = r >> 4, o = 15 & r;
								if (i === 15 || (t += n[i], o === 15)) break;
								t += n[o];
							}
							return parseFloat(t);
						}(e);
						if (t >= 32 && t <= 246) return t - 139;
						if (t >= 247 && t <= 250) return n = e.parseByte(), 256 * (t - 247) + n + 108;
						if (t >= 251 && t <= 254) return n = e.parseByte(), 256 * -(t - 251) - n - 108;
						throw Error("Invalid b0 " + t);
					}
					function vd(e, t, n, r) {
						t = t === void 0 ? 0 : t;
						let i = new Tu.Parser(e, t), o = [], s = [];
						n = n === void 0 ? e.byteLength : n;
						let p = r < 2 ? 22 : 28;
						for (; i.relativeOffset < n;) {
							let e = i.parseByte();
							if (e < p) {
								if (e === 12 && (e = 1200 + i.parseByte()), r > 1 && e === 23) {
									Ad(s);
									continue;
								}
								o.push([e, s]), s = [];
							} else s.push(_d(i, e));
						}
						return function(e) {
							let t = {};
							for (let n = 0; n < e.length; n += 1) {
								let r = e[n][0], i = e[n][1], o;
								if (o = i.length === 1 ? i[0] : i, Object.prototype.hasOwnProperty.call(t, r) && !isNaN(t[r])) throw Error("Object " + t + " already has key " + r);
								t[r] = o;
							}
							return t;
						}(o);
					}
					function yd(e, t) {
						return t <= 390 ? Wu[t] : e ? e[t - 391] : void 0;
					}
					function bd(e, t, n) {
						let r = {}, i;
						for (let o = 0; o < t.length; o += 1) {
							let s = t[o];
							if (Array.isArray(s.type)) {
								let t = [];
								t.length = s.type.length;
								for (let r = 0; r < s.type.length; r++) i = e[s.op] === void 0 ? void 0 : e[s.op][r], i === void 0 && (i = s.value !== void 0 && s.value[r] !== void 0 ? s.value[r] : null), s.type[r] === "SID" && (i = yd(n, i)), t[r] = i;
								r[s.name] = t;
							} else i = e[s.op], i === void 0 && (i = s.value === void 0 ? null : s.value), s.type === "SID" && (i = yd(n, i)), r[s.name] = i;
						}
						return r;
					}
					var xd = [
						{
							name: "version",
							op: 0,
							type: "SID"
						},
						{
							name: "notice",
							op: 1,
							type: "SID"
						},
						{
							name: "copyright",
							op: 1200,
							type: "SID"
						},
						{
							name: "fullName",
							op: 2,
							type: "SID"
						},
						{
							name: "familyName",
							op: 3,
							type: "SID"
						},
						{
							name: "weight",
							op: 4,
							type: "SID"
						},
						{
							name: "isFixedPitch",
							op: 1201,
							type: "number",
							value: 0
						},
						{
							name: "italicAngle",
							op: 1202,
							type: "number",
							value: 0
						},
						{
							name: "underlinePosition",
							op: 1203,
							type: "number",
							value: -100
						},
						{
							name: "underlineThickness",
							op: 1204,
							type: "number",
							value: 50
						},
						{
							name: "paintType",
							op: 1205,
							type: "number",
							value: 0
						},
						{
							name: "charstringType",
							op: 1206,
							type: "number",
							value: 2
						},
						{
							name: "fontMatrix",
							op: 1207,
							type: [
								"real",
								"real",
								"real",
								"real",
								"real",
								"real"
							],
							value: [
								.001,
								0,
								0,
								.001,
								0,
								0
							]
						},
						{
							name: "uniqueId",
							op: 13,
							type: "number"
						},
						{
							name: "fontBBox",
							op: 5,
							type: [
								"number",
								"number",
								"number",
								"number"
							],
							value: [
								0,
								0,
								0,
								0
							]
						},
						{
							name: "strokeWidth",
							op: 1208,
							type: "number",
							value: 0
						},
						{
							name: "xuid",
							op: 14,
							type: [],
							value: null
						},
						{
							name: "charset",
							op: 15,
							type: "offset",
							value: 0
						},
						{
							name: "encoding",
							op: 16,
							type: "offset",
							value: 0
						},
						{
							name: "charStrings",
							op: 17,
							type: "offset",
							value: 0
						},
						{
							name: "private",
							op: 18,
							type: ["number", "offset"],
							value: [0, 0]
						},
						{
							name: "ros",
							op: 1230,
							type: [
								"SID",
								"SID",
								"number"
							]
						},
						{
							name: "cidFontVersion",
							op: 1231,
							type: "number",
							value: 0
						},
						{
							name: "cidFontRevision",
							op: 1232,
							type: "number",
							value: 0
						},
						{
							name: "cidFontType",
							op: 1233,
							type: "number",
							value: 0
						},
						{
							name: "cidCount",
							op: 1234,
							type: "number",
							value: 8720
						},
						{
							name: "uidBase",
							op: 1235,
							type: "number"
						},
						{
							name: "fdArray",
							op: 1236,
							type: "offset"
						},
						{
							name: "fdSelect",
							op: 1237,
							type: "offset"
						},
						{
							name: "fontName",
							op: 1238,
							type: "SID"
						}
					], Sd = [
						{
							name: "fontMatrix",
							op: 1207,
							type: [
								"real",
								"real",
								"real",
								"real",
								"real",
								"real"
							],
							value: [
								.001,
								0,
								0,
								.001,
								0,
								0
							]
						},
						{
							name: "charStrings",
							op: 17,
							type: "offset"
						},
						{
							name: "fdArray",
							op: 1236,
							type: "offset"
						},
						{
							name: "fdSelect",
							op: 1237,
							type: "offset"
						},
						{
							name: "vstore",
							op: 24,
							type: "offset"
						}
					], Cd = [
						{
							name: "subrs",
							op: 19,
							type: "offset",
							value: 0
						},
						{
							name: "defaultWidthX",
							op: 20,
							type: "number",
							value: 0
						},
						{
							name: "nominalWidthX",
							op: 21,
							type: "number",
							value: 0
						}
					], wd = [
						{
							name: "blueValues",
							op: 6,
							type: "delta"
						},
						{
							name: "otherBlues",
							op: 7,
							type: "delta"
						},
						{
							name: "familyBlues",
							op: 7,
							type: "delta"
						},
						{
							name: "familyBlues",
							op: 8,
							type: "delta"
						},
						{
							name: "familyOtherBlues",
							op: 9,
							type: "delta"
						},
						{
							name: "blueScale",
							op: 1209,
							type: "number",
							value: .039625
						},
						{
							name: "blueShift",
							op: 1210,
							type: "number",
							value: 7
						},
						{
							name: "blueFuzz",
							op: 1211,
							type: "number",
							value: 1
						},
						{
							name: "stdHW",
							op: 10,
							type: "number"
						},
						{
							name: "stdVW",
							op: 11,
							type: "number"
						},
						{
							name: "stemSnapH",
							op: 1212,
							type: "number"
						},
						{
							name: "stemSnapV",
							op: 1213,
							type: "number"
						},
						{
							name: "languageGroup",
							op: 1217,
							type: "number",
							value: 0
						},
						{
							name: "expansionFactor",
							op: 1218,
							type: "number",
							value: .06
						},
						{
							name: "vsindex",
							op: 22,
							type: "number",
							value: 0
						},
						{
							name: "subrs",
							op: 19,
							type: "offset"
						}
					], Td = [{
						name: "private",
						op: 18,
						type: ["number", "offset"],
						value: [0, 0]
					}];
					function Ed(e, t, n, r) {
						return bd(vd(e, t, e.byteLength, r), r > 1 ? Sd : xd, n);
					}
					function Dd(e, t, n, r, i) {
						return bd(vd(e, t, n, i), i > 1 ? wd : Cd, r);
					}
					function Od(e, t, n) {
						return bd(vd(e, t, void 0, n), Td);
					}
					function kd(e, t, n, r, i) {
						let o = [];
						for (let s = 0; s < n.length; s += 1) {
							let p = Ed(new DataView(new Uint8Array(n[s]).buffer), 0, r, i);
							p._subrs = [], p._subrsBias = 0, p._defaultWidthX = 0, p._nominalWidthX = 0;
							let S = i < 2 ? p.private[0] : 0, T = i < 2 ? p.private[1] : 0;
							if (S !== 0 && T !== 0) {
								let n = Dd(e, T + t, S, r, i);
								p._defaultWidthX = n.defaultWidthX, p._nominalWidthX = n.nominalWidthX, n.subrs !== 0 && (p._subrs = gd(e, T + n.subrs + t, void 0, i).objects, p._subrsBias = hd(p._subrs)), p._privateDict = n;
							}
							o.push(p);
						}
						return o;
					}
					function Ad(e) {
						let t = e.pop();
						for (; e.length > t;) e.pop();
					}
					function jd(e, t) {
						let n = e.tables.cff && e.tables.cff.topDict && e.tables.cff.topDict.paintType || 0;
						return n === 2 && (t.fill = null, t.stroke = "black", t.strokeWidth = e.tables.cff.topDict.strokeWidth || 0), n;
					}
					function Md(e, t, n, r, i) {
						let o, s, p, S, T = new Gl(), k = [], A, Sl, Cl, wl, Tl, El = 0, Dl = !1, Ol = !1, kl = 0, Al = 0, jl = 0, Ml = [], Nl = 0, Pl = e.tables.cff2 || e.tables.cff;
						if (Cl = Pl.topDict._defaultWidthX, wl = Pl.topDict._nominalWidthX, i ||= e.variation && e.variation.get(), t.getBlendPath ||= function(i) {
							return Md(e, t, n, r, i);
						}, e.isCIDFont || r > 1) {
							let e = Pl.topDict._fdSelect ? Pl.topDict._fdSelect[t.index] : 0, n = Pl.topDict._fdArray[e];
							A = n._subrs, Sl = n._subrsBias, r > 1 ? (Ml = Pl.topDict._vstore.itemVariationStore, jl = n._privateDict.vsindex) : (Cl = n._defaultWidthX, wl = n._nominalWidthX);
						} else A = Pl.topDict._subrs, Sl = Pl.topDict._subrsBias;
						let Fl = jd(e, T), Il = Cl;
						function Ll(e, t) {
							Ol && Fl !== 2 && T.closePath(), T.moveTo(e, t), Ol = !0;
						}
						function Rl() {
							let e;
							e = !!(1 & k.length), e && !Dl && (Il = k.shift() + wl), El += k.length >> 1, k.length = 0, Dl = !0;
						}
						return function n(Cl) {
							let Pl, zl, Bl, Vl, Hl, Ul, Wl, Gl, Kl, ql, Jl, Yl, Xl = 0;
							for (; Xl < Cl.length;) {
								let ru = Cl[Xl];
								switch (Xl += 1, ru) {
									case 1:
									case 3:
									case 18:
									case 23:
										Rl();
										break;
									case 4:
										k.length > 1 && !Dl && (Il = k.shift() + wl, Dl = !0), Al += k.pop(), Ll(kl, Al);
										break;
									case 5:
										for (; k.length > 0;) kl += k.shift(), Al += k.shift(), T.lineTo(kl, Al);
										break;
									case 6:
										for (; k.length > 0 && (kl += k.shift(), T.lineTo(kl, Al), k.length !== 0);) Al += k.shift(), T.lineTo(kl, Al);
										break;
									case 7:
										for (; k.length > 0 && (Al += k.shift(), T.lineTo(kl, Al), k.length !== 0);) kl += k.shift(), T.lineTo(kl, Al);
										break;
									case 8:
										for (; k.length > 0;) o = kl + k.shift(), s = Al + k.shift(), p = o + k.shift(), S = s + k.shift(), kl = p + k.shift(), Al = S + k.shift(), T.curveTo(o, s, p, S, kl, Al);
										break;
									case 10:
										if (Hl = k.pop() + Sl, Ul = A[Hl], Ul) {
											if (Nl >= 10) {
												console.warn("CFF charstring subroutine call depth exceeded, skipping callsubr");
												break;
											}
											Nl++, n(Ul), Nl--;
										}
										break;
									case 11:
										if (r > 1) {
											console.error("CFF CharString operator return (11) is not supported in CFF2");
											break;
										}
										return;
									case 12:
										switch (ru = Cl[Xl], Xl += 1, ru) {
											case 35:
												o = kl + k.shift(), s = Al + k.shift(), p = o + k.shift(), S = s + k.shift(), Wl = p + k.shift(), Gl = S + k.shift(), Kl = Wl + k.shift(), ql = Gl + k.shift(), Jl = Kl + k.shift(), Yl = ql + k.shift(), kl = Jl + k.shift(), Al = Yl + k.shift(), k.shift(), T.curveTo(o, s, p, S, Wl, Gl), T.curveTo(Kl, ql, Jl, Yl, kl, Al);
												break;
											case 34:
												o = kl + k.shift(), s = Al, p = o + k.shift(), S = s + k.shift(), Wl = p + k.shift(), Gl = S, Kl = Wl + k.shift(), ql = S, Jl = Kl + k.shift(), Yl = Al, kl = Jl + k.shift(), T.curveTo(o, s, p, S, Wl, Gl), T.curveTo(Kl, ql, Jl, Yl, kl, Al);
												break;
											case 36:
												o = kl + k.shift(), s = Al + k.shift(), p = o + k.shift(), S = s + k.shift(), Wl = p + k.shift(), Gl = S, Kl = Wl + k.shift(), ql = S, Jl = Kl + k.shift(), Yl = ql + k.shift(), kl = Jl + k.shift(), T.curveTo(o, s, p, S, Wl, Gl), T.curveTo(Kl, ql, Jl, Yl, kl, Al);
												break;
											case 37:
												o = kl + k.shift(), s = Al + k.shift(), p = o + k.shift(), S = s + k.shift(), Wl = p + k.shift(), Gl = S + k.shift(), Kl = Wl + k.shift(), ql = Gl + k.shift(), Jl = Kl + k.shift(), Yl = ql + k.shift(), Math.abs(Jl - kl) > Math.abs(Yl - Al) ? kl = Jl + k.shift() : Al = Yl + k.shift(), T.curveTo(o, s, p, S, Wl, Gl), T.curveTo(Kl, ql, Jl, Yl, kl, Al);
												break;
											default: console.log("Glyph " + t.index + ": unknown operator 1200" + ru), k.length = 0;
										}
										break;
									case 14:
										if (r > 1) {
											console.error("CFF CharString operator endchar (14) is not supported in CFF2");
											break;
										}
										if (k.length >= 4) {
											let n = Ju[k.pop()], r = Ju[k.pop()], i = k.pop(), o = k.pop();
											if (n && r) {
												t.isComposite = !0, t.components = [];
												let s = e.cffEncoding.charset.indexOf(n), p = e.cffEncoding.charset.indexOf(r);
												t.components.push({
													glyphIndex: p,
													dx: 0,
													dy: 0
												}), t.components.push({
													glyphIndex: s,
													dx: o,
													dy: i
												}), T.extend(e.glyphs.get(p).path);
												let S = e.glyphs.get(s), k = JSON.parse(JSON.stringify(S.path.commands));
												for (let e = 0; e < k.length; e += 1) {
													let t = k[e];
													t.type !== "Z" && (t.x += o, t.y += i), t.type !== "Q" && t.type !== "C" || (t.x1 += o, t.y1 += i), t.type === "C" && (t.x2 += o, t.y2 += i);
												}
												T.extend(k);
											}
										} else k.length > 0 && !Dl && (Il = k.shift() + wl, Dl = !0);
										Ol && Fl !== 2 && (T.closePath(), Ol = !1);
										break;
									case 15:
										if (r < 2) {
											console.error("CFF2 CharString operator vsindex (15) is not supported in CFF");
											break;
										}
										jl = k.pop();
										break;
									case 16:
										if (r < 2) {
											console.error("CFF2 CharString operator blend (16) is not supported in CFF");
											break;
										}
										Tl ||= e.variation && i && e.variation.process.getBlendVector(Ml, jl, i);
										var Zl = k.pop(), Ql = Tl ? Tl.length : Ml.itemVariationSubtables[jl].regionIndexes.length, $l = Zl * Ql, eu = k.length - $l, tu = eu - Zl;
										if (Tl) for (let e = 0; e < Zl; e++) {
											var nu = k[tu + e];
											for (let e = 0; e < Ql; e++) nu += Tl[e] * k[eu++];
											k[tu + e] = nu;
										}
										for (; $l--;) k.pop();
										break;
									case 19:
									case 20:
										Rl(), Xl += El + 7 >> 3;
										break;
									case 21:
										k.length > 2 && !Dl && (Il = k.shift() + wl, Dl = !0), Al += k.pop(), kl += k.pop(), Ll(kl, Al);
										break;
									case 22:
										k.length > 1 && !Dl && (Il = k.shift() + wl, Dl = !0), kl += k.pop(), Ll(kl, Al);
										break;
									case 24:
										for (; k.length > 2;) o = kl + k.shift(), s = Al + k.shift(), p = o + k.shift(), S = s + k.shift(), kl = p + k.shift(), Al = S + k.shift(), T.curveTo(o, s, p, S, kl, Al);
										kl += k.shift(), Al += k.shift(), T.lineTo(kl, Al);
										break;
									case 25:
										for (; k.length > 6;) kl += k.shift(), Al += k.shift(), T.lineTo(kl, Al);
										o = kl + k.shift(), s = Al + k.shift(), p = o + k.shift(), S = s + k.shift(), kl = p + k.shift(), Al = S + k.shift(), T.curveTo(o, s, p, S, kl, Al);
										break;
									case 26:
										for (1 & k.length && (kl += k.shift()); k.length > 0;) o = kl, s = Al + k.shift(), p = o + k.shift(), S = s + k.shift(), kl = p, Al = S + k.shift(), T.curveTo(o, s, p, S, kl, Al);
										break;
									case 27:
										for (1 & k.length && (Al += k.shift()); k.length > 0;) o = kl + k.shift(), s = Al, p = o + k.shift(), S = s + k.shift(), kl = p + k.shift(), Al = S, T.curveTo(o, s, p, S, kl, Al);
										break;
									case 28:
										Pl = Cl[Xl], zl = Cl[Xl + 1], k.push((Pl << 24 | zl << 16) >> 16), Xl += 2;
										break;
									case 29:
										if (Hl = k.pop() + e.gsubrsBias, Ul = e.gsubrs[Hl], Ul) {
											if (Nl >= 10) {
												console.warn("CFF charstring subroutine call depth exceeded, skipping callgsubr");
												break;
											}
											Nl++, n(Ul), Nl--;
										}
										break;
									case 30:
										for (; k.length > 0 && (o = kl, s = Al + k.shift(), p = o + k.shift(), S = s + k.shift(), kl = p + k.shift(), Al = S + (k.length === 1 ? k.shift() : 0), T.curveTo(o, s, p, S, kl, Al), k.length !== 0);) o = kl + k.shift(), s = Al, p = o + k.shift(), S = s + k.shift(), Al = S + k.shift(), kl = p + (k.length === 1 ? k.shift() : 0), T.curveTo(o, s, p, S, kl, Al);
										break;
									case 31:
										for (; k.length > 0 && (o = kl + k.shift(), s = Al, p = o + k.shift(), S = s + k.shift(), Al = S + k.shift(), kl = p + (k.length === 1 ? k.shift() : 0), T.curveTo(o, s, p, S, kl, Al), k.length !== 0);) o = kl, s = Al + k.shift(), p = o + k.shift(), S = s + k.shift(), kl = p + k.shift(), Al = S + (k.length === 1 ? k.shift() : 0), T.curveTo(o, s, p, S, kl, Al);
										break;
									default: ru < 32 ? console.log("Glyph " + t.index + ": unknown operator " + ru) : ru < 247 ? k.push(ru - 139) : ru < 251 ? (Pl = Cl[Xl], Xl += 1, k.push(256 * (ru - 247) + Pl + 108)) : ru < 255 ? (Pl = Cl[Xl], Xl += 1, k.push(256 * -(ru - 251) - Pl - 108)) : (Pl = Cl[Xl], zl = Cl[Xl + 1], Bl = Cl[Xl + 2], Vl = Cl[Xl + 3], Xl += 4, k.push((Pl << 24 | zl << 16 | Bl << 8 | Vl) / 65536));
								}
							}
						}(n), e.variation && i && (T.commands = T.commands.map((e) => {
							let t = Object.keys(e);
							for (let n = 0; n < t.length; n++) {
								let r = t[n];
								r !== "type" && (e[r] = Math.round(e[r]));
							}
							return e;
						})), Dl && (t.advanceWidth = Il), T;
					}
					function Nd(e, t, n, r, i) {
						let o = [], s, p = new Tu.Parser(e, t), S = p.parseCard8();
						if (S === 0) for (let e = 0; e < n; e++) {
							if (s = p.parseCard8(), s >= r) throw Error("CFF table CID Font FDSelect has bad FD index value " + s + " (FD count " + r + ")");
							o.push(s);
						}
						else {
							if (!(S === 3 || i > 1 && S === 4)) throw Error("CFF Table CID Font FDSelect table has unsupported format " + S);
							{
								let e = S === 4 ? p.parseULong() : p.parseCard16(), t, T = S === 4 ? p.parseULong() : p.parseCard16();
								if (T !== 0) throw Error(`CFF Table CID Font FDSelect format ${S} range has bad initial GID ${T}`);
								for (let k = 0; k < e; k++) {
									if (s = S === 4 ? p.parseUShort() : p.parseCard8(), t = S === 4 ? p.parseULong() : p.parseCard16(), s >= r) throw Error("CFF table CID Font FDSelect has bad FD index value " + s + " (FD count " + r + ")");
									if (t > n) throw Error(`CFF Table CID Font FDSelect format ${i} range has bad GID ${t}`);
									for (; T < t; T++) o.push(s);
									T = t;
								}
								if (t !== n) throw Error("CFF Table CID Font FDSelect format 3 range has bad final (Sentinal) GID " + t);
							}
						}
						return o;
					}
					function Pd(e, t) {
						let n, r = Wu.indexOf(e);
						return r >= 0 && (n = r), r = t.indexOf(e), r >= 0 ? n = r + Wu.length : (n = Wu.length + t.length, t.push(e)), n;
					}
					function Fd(e, t, n) {
						let r = {};
						for (let i = 0; i < e.length; i += 1) {
							let o = e[i], s = t[o.name];
							s === void 0 || md(s, o.value) || (o.type === "SID" && (s = Pd(s, n)), r[o.op] = {
								name: o.name,
								type: o.type,
								value: s
							});
						}
						return r;
					}
					function Id(e, t, n) {
						let r = new _u.Record("Top DICT", [{
							name: "dict",
							type: "DICT",
							value: {}
						}]);
						return r.dict = Fd(n > 1 ? Sd : xd, e, t), r;
					}
					function Ld(e) {
						let t = new _u.Record("Top DICT INDEX", [{
							name: "topDicts",
							type: "INDEX",
							value: []
						}]);
						return t.topDicts = [{
							name: "topDict_0",
							type: "TABLE",
							value: e
						}], t;
					}
					function Rd(e, t) {
						let n = [], r = e.path;
						t < 2 && n.push({
							name: "width",
							type: "NUMBER",
							value: e.advanceWidth
						});
						let i = 0, o = 0;
						for (let e = 0; e < r.commands.length; e += 1) {
							let t, s, p = r.commands[e];
							if (p.type === "Q") {
								let e = 1 / 3, t = 2 / 3;
								p = {
									type: "C",
									x: p.x,
									y: p.y,
									x1: Math.round(e * i + t * p.x1),
									y1: Math.round(e * o + t * p.y1),
									x2: Math.round(e * p.x + t * p.x1),
									y2: Math.round(e * p.y + t * p.y1)
								};
							}
							if (p.type === "M") t = Math.round(p.x - i), s = Math.round(p.y - o), n.push({
								name: "dx",
								type: "NUMBER",
								value: t
							}), n.push({
								name: "dy",
								type: "NUMBER",
								value: s
							}), n.push({
								name: "rmoveto",
								type: "OP",
								value: 21
							}), i = Math.round(p.x), o = Math.round(p.y);
							else if (p.type === "L") t = Math.round(p.x - i), s = Math.round(p.y - o), n.push({
								name: "dx",
								type: "NUMBER",
								value: t
							}), n.push({
								name: "dy",
								type: "NUMBER",
								value: s
							}), n.push({
								name: "rlineto",
								type: "OP",
								value: 5
							}), i = Math.round(p.x), o = Math.round(p.y);
							else if (p.type === "C") {
								let e = Math.round(p.x1 - i), r = Math.round(p.y1 - o), S = Math.round(p.x2 - p.x1), T = Math.round(p.y2 - p.y1);
								t = Math.round(p.x - p.x2), s = Math.round(p.y - p.y2), n.push({
									name: "dx1",
									type: "NUMBER",
									value: e
								}), n.push({
									name: "dy1",
									type: "NUMBER",
									value: r
								}), n.push({
									name: "dx2",
									type: "NUMBER",
									value: S
								}), n.push({
									name: "dy2",
									type: "NUMBER",
									value: T
								}), n.push({
									name: "dx",
									type: "NUMBER",
									value: t
								}), n.push({
									name: "dy",
									type: "NUMBER",
									value: s
								}), n.push({
									name: "rrcurveto",
									type: "OP",
									value: 8
								}), i = Math.round(p.x), o = Math.round(p.y);
							}
						}
						return t < 2 && n.push({
							name: "endchar",
							type: "OP",
							value: 14
						}), n;
					}
					var zd = {
						parse: function(e, t, n, r) {
							let i, o = function(e, t) {
								let n = {};
								if (n.formatMajor = Tu.getCard8(e, t), n.formatMinor = Tu.getCard8(e, t + 1), n.formatMajor > 2) throw Error(`Unsupported CFF table version ${n.formatMajor}.${n.formatMinor}`);
								return n.size = Tu.getCard8(e, t + 2), n.formatMajor < 2 ? (n.offsetSize = Tu.getCard8(e, t + 3), n.startOffset = t, n.endOffset = t + 4) : (n.topDictLength = Tu.getCard16(e, t + 3), n.endOffset = t + 8), n;
							}(e, t);
							i = o.formatMajor === 2 ? n.tables.cff2 = {} : n.tables.cff = {};
							let s = o.formatMajor > 1 ? null : gd(e, o.endOffset, Tu.bytesToString), p = o.formatMajor > 1 ? null : gd(e, s.endOffset), S = o.formatMajor > 1 ? null : gd(e, p.endOffset, Tu.bytesToString), T = gd(e, o.formatMajor > 1 ? t + o.size + o.topDictLength : S.endOffset, void 0, o.formatMajor), k, A;
							if (n.gsubrs = T.objects, n.gsubrsBias = hd(n.gsubrs), o.formatMajor > 1) {
								let n = t + o.size;
								k = kd(e, 0, [Tu.getBytes(e, n, n + o.topDictLength)], void 0, o.formatMajor)[0];
							} else {
								let n = kd(e, t, p.objects, S.objects, o.formatMajor);
								if (n.length !== 1) throw Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + n.length);
								k = n[0];
							}
							if (i.topDict = k, k._privateDict && (n.defaultWidthX = k._privateDict.defaultWidthX, n.nominalWidthX = k._privateDict.nominalWidthX), o.formatMajor < 2 && k.ros[0] !== void 0 && k.ros[1] !== void 0 && (n.isCIDFont = !0), o.formatMajor > 1) {
								let r = k.fdArray, i = k.fdSelect;
								if (!r) throw Error("This is a CFF2 font, but FDArray information is missing");
								let s = function(e, t, n) {
									let r = [];
									for (let i = 0; i < n.length; i++) {
										let o = Od(new DataView(new Uint8Array(n[i]).buffer), 0, 2), s = o.private[0], p = o.private[1];
										if (s !== 0 && p !== 0) {
											let n = Dd(e, p + t, s, [], 2);
											n.subrs && (o._subrs = gd(e, p + n.subrs + t, void 0, 2).objects, o._subrsBias = hd(o._subrs)), o._privateDict = n;
										}
										r.push(o);
									}
									return r;
								}(e, t, gd(e, t + r, null, o.formatMajor).objects);
								k._fdArray = s, i && (k._fdSelect = Nd(e, t + i, n.numGlyphs, s.length, o.formatMajor));
							} else if (n.isCIDFont) {
								let r = k.fdArray, i = k.fdSelect;
								if (r === 0 || i === 0) throw Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
								r += t;
								let s = kd(e, t, gd(e, r).objects, S.objects, o.formatMajor);
								k._fdArray = s, i += t, k._fdSelect = Nd(e, i, n.numGlyphs, s.length, o.formatMajor);
							}
							if (o.formatMajor < 2) {
								let r = t + k.private[1], i = Dd(e, r, k.private[0], S.objects, o.formatMajor);
								n.defaultWidthX = i.defaultWidthX, n.nominalWidthX = i.nominalWidthX, i.subrs === 0 ? (n.subrs = [], n.subrsBias = 0) : (n.subrs = gd(e, r + i.subrs).objects, n.subrsBias = hd(n.subrs));
							}
							if (r.lowMemory ? (A = function(e, t, n) {
								let r = [], i = n > 1 ? Tu.getULong(e, t) : Tu.getCard16(e, t), o = n > 1 ? 4 : 2, s, p;
								if (i !== 0) {
									let n = Tu.getByte(e, t + o);
									s = t + (i + 1) * n + o;
									let S = t + o + 1;
									for (let t = 0; t < i + 1; t += 1) r.push(Tu.getOffset(e, S, n)), S += n;
									p = s + r[i];
								} else p = t + o;
								return {
									offsets: r,
									startOffset: t,
									endOffset: p
								};
							}(e, t + k.charStrings, o.formatMajor), n.nGlyphs = A.offsets.length - (o.formatMajor > 1 ? 1 : 0)) : (A = gd(e, t + k.charStrings, null, o.formatMajor), n.nGlyphs = A.objects.length), o.formatMajor > 1 && n.tables.maxp && n.nGlyphs !== n.tables.maxp.numGlyphs && console.error(`Glyph count in the CFF2 table (${n.nGlyphs}) must correspond to the glyph count in the maxp table (${n.tables.maxp.numGlyphs})`), o.formatMajor < 2) {
								let r = [], i = [];
								r = k.charset === 0 ? Gu : k.charset === 1 ? Ku : k.charset === 2 ? qu : function(e, t, n, r, i) {
									let o, s, p = new Tu.Parser(e, t);
									--n;
									let S = [".notdef"], T = p.parseCard8();
									if (T === 0) for (let e = 0; e < n; e += 1) o = p.parseSID(), i ? S.push(o) : S.push(yd(r, o) || o);
									else if (T === 1) for (; S.length <= n;) {
										o = p.parseSID(), s = p.parseCard8();
										for (let e = 0; e <= s; e += 1) i ? S.push("cid" + ("00000" + o).slice(-5)) : S.push(yd(r, o) || o), o += 1;
									}
									else {
										if (T !== 2) throw Error("Unknown charset format " + T);
										for (; S.length <= n;) {
											o = p.parseSID(), s = p.parseCard16();
											for (let e = 0; e <= s; e += 1) i ? S.push("cid" + ("00000" + o).slice(-5)) : S.push(yd(r, o) || o), o += 1;
										}
									}
									return S;
								}(e, t + k.charset, n.nGlyphs, S.objects, n.isCIDFont), i = k.encoding === 0 ? Ju : k.encoding === 1 ? Yu : function(e, t) {
									let n, r = {}, i = new Tu.Parser(e, t), o = i.parseCard8();
									if (o === 0) {
										let e = i.parseCard8();
										for (let t = 0; t < e; t += 1) n = i.parseCard8(), r[n] = t;
									} else {
										if (o !== 1) throw Error("Unknown encoding format " + o);
										{
											let e = i.parseCard8();
											n = 1;
											for (let t = 0; t < e; t += 1) {
												let e = i.parseCard8(), t = i.parseCard8();
												for (let i = e; i <= e + t; i += 1) r[i] = n, n += 1;
											}
										}
									}
									return r;
								}(e, t + k.encoding), n.cffEncoding = new $u(i, r), n.encoding = n.encoding || n.cffEncoding;
							}
							if (n.glyphs = new pd.GlyphSet(n), r.lowMemory) n._push = function(r) {
								let i = function(e, t, n, r, i, o) {
									let s = o > 1 ? Tu.getULong(n, r) : Tu.getCard16(n, r), p = o > 1 ? 4 : 2, S = 0;
									return s !== 0 && (S = r + (s + 1) * Tu.getByte(n, r + p) + p), Tu.getBytes(n, S + t[e], S + t[e + 1]);
								}(r, A.offsets, e, t + k.charStrings, 0, o.formatMajor);
								n.glyphs.push(r, pd.cffGlyphLoader(n, r, Md, i, o.formatMajor));
							};
							else for (let e = 0; e < n.nGlyphs; e += 1) {
								let t = A.objects[e];
								n.glyphs.push(e, pd.cffGlyphLoader(n, e, Md, t, o.formatMajor));
							}
							if (k.vstore) {
								let n = new Tu.Parser(e, t + k.vstore);
								k._vstore = n.parseVariationStore();
							}
						},
						make: function(e, t) {
							let n = new _u.Table("CFF ", [
								{
									name: "header",
									type: "RECORD"
								},
								{
									name: "nameIndex",
									type: "RECORD"
								},
								{
									name: "topDictIndex",
									type: "RECORD"
								},
								{
									name: "stringIndex",
									type: "RECORD"
								},
								{
									name: "globalSubrIndex",
									type: "RECORD"
								},
								{
									name: "charsets",
									type: "RECORD"
								},
								{
									name: "charStringsIndex",
									type: "RECORD"
								},
								{
									name: "privateDict",
									type: "RECORD"
								}
							]), r = 1 / t.unitsPerEm, i = {
								version: t.version,
								fullName: t.fullName,
								familyName: t.familyName,
								weight: t.weightName,
								fontBBox: t.fontBBox || [
									0,
									0,
									0,
									0
								],
								fontMatrix: [
									r,
									0,
									0,
									r,
									0,
									0
								],
								charset: 999,
								encoding: 0,
								charStrings: 999,
								private: [0, 999]
							}, o = t && t.topDict || {};
							o.paintType && (i.paintType = o.paintType, i.strokeWidth = o.strokeWidth || 0);
							let s = [], p;
							for (let t = 1; t < e.length; t += 1) p = e.get(t), s.push(p.name);
							let S = [];
							n.header = new _u.Record("Header", [
								{
									name: "major",
									type: "Card8",
									value: 1
								},
								{
									name: "minor",
									type: "Card8",
									value: 0
								},
								{
									name: "hdrSize",
									type: "Card8",
									value: 4
								},
								{
									name: "major",
									type: "Card8",
									value: 1
								}
							]), n.nameIndex = function(e) {
								let t = new _u.Record("Name INDEX", [{
									name: "names",
									type: "INDEX",
									value: []
								}]);
								t.names = [];
								for (let n = 0; n < e.length; n += 1) t.names.push({
									name: "name_" + n,
									type: "NAME",
									value: e[n]
								});
								return t;
							}([t.postScriptName]);
							let T = Id(i, S);
							return n.topDictIndex = Ld(T), n.globalSubrIndex = new _u.Record("Global Subr INDEX", [{
								name: "subrs",
								type: "INDEX",
								value: []
							}]), n.charsets = function(e, t) {
								let n = new _u.Record("Charsets", [{
									name: "format",
									type: "Card8",
									value: 0
								}]);
								for (let r = 0; r < e.length; r += 1) {
									let i = Pd(e[r], t);
									n.fields.push({
										name: "glyph_" + r,
										type: "SID",
										value: i
									});
								}
								return n;
							}(s, S), n.charStringsIndex = function(e) {
								let t = new _u.Record("CharStrings INDEX", [{
									name: "charStrings",
									type: "INDEX",
									value: []
								}]);
								for (let n = 0; n < e.length; n += 1) {
									let r = e.get(n), i = Rd(r, 1);
									t.charStrings.push({
										name: r.name,
										type: "CHARSTRING",
										value: i
									});
								}
								return t;
							}(e), n.privateDict = function(e, t) {
								let n = new _u.Record("Private DICT", [{
									name: "dict",
									type: "DICT",
									value: {}
								}]);
								return n.dict = Fd(Cd, {}, t), n;
							}(0, S), n.stringIndex = function(e) {
								let t = new _u.Record("String INDEX", [{
									name: "strings",
									type: "INDEX",
									value: []
								}]);
								t.strings = [];
								for (let n = 0; n < e.length; n += 1) t.strings.push({
									name: "string_" + n,
									type: "STRING",
									value: e[n]
								});
								return t;
							}(S), i.charset = n.header.sizeOf() + n.nameIndex.sizeOf() + n.topDictIndex.sizeOf() + n.stringIndex.sizeOf() + n.globalSubrIndex.sizeOf(), i.encoding = 0, i.charStrings = i.charset + n.charsets.sizeOf(), i.private[1] = i.charStrings + n.charStringsIndex.sizeOf(), T = Id(i, S), n.topDictIndex = Ld(T), n;
						}
					}, Bd = {
						parse: function(e, t) {
							let n = {}, r = new Tu.Parser(e, t);
							return n.version = r.parseVersion(), n.fontRevision = Math.round(1e3 * r.parseFixed()) / 1e3, n.checkSumAdjustment = r.parseULong(), n.magicNumber = r.parseULong(), Jl.argument(n.magicNumber === 1594834165, "Font header has wrong magic number."), n.flags = r.parseUShort(), n.unitsPerEm = r.parseUShort(), n.created = r.parseLongDateTime(), n.modified = r.parseLongDateTime(), n.xMin = r.parseShort(), n.yMin = r.parseShort(), n.xMax = r.parseShort(), n.yMax = r.parseShort(), n.macStyle = r.parseUShort(), n.lowestRecPPEM = r.parseUShort(), n.fontDirectionHint = r.parseShort(), n.indexToLocFormat = r.parseShort(), n.glyphDataFormat = r.parseShort(), n;
						},
						make: function(e) {
							let t = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3) + 2082844800, n = t, r = e.macStyle || 0;
							return e.createdTimestamp && (n = e.createdTimestamp + 2082844800), new _u.Table("head", [
								{
									name: "version",
									type: "FIXED",
									value: 65536
								},
								{
									name: "fontRevision",
									type: "FIXED",
									value: 65536
								},
								{
									name: "checkSumAdjustment",
									type: "ULONG",
									value: 0
								},
								{
									name: "magicNumber",
									type: "ULONG",
									value: 1594834165
								},
								{
									name: "flags",
									type: "USHORT",
									value: 0
								},
								{
									name: "unitsPerEm",
									type: "USHORT",
									value: 1e3
								},
								{
									name: "created",
									type: "LONGDATETIME",
									value: n
								},
								{
									name: "modified",
									type: "LONGDATETIME",
									value: t
								},
								{
									name: "xMin",
									type: "SHORT",
									value: 0
								},
								{
									name: "yMin",
									type: "SHORT",
									value: 0
								},
								{
									name: "xMax",
									type: "SHORT",
									value: 0
								},
								{
									name: "yMax",
									type: "SHORT",
									value: 0
								},
								{
									name: "macStyle",
									type: "USHORT",
									value: r
								},
								{
									name: "lowestRecPPEM",
									type: "USHORT",
									value: 0
								},
								{
									name: "fontDirectionHint",
									type: "SHORT",
									value: 2
								},
								{
									name: "indexToLocFormat",
									type: "SHORT",
									value: 0
								},
								{
									name: "glyphDataFormat",
									type: "SHORT",
									value: 0
								}
							], e);
						}
					}, Vd = {
						parse: function(e, t) {
							let n = {}, r = new Tu.Parser(e, t);
							return n.version = r.parseVersion(), n.ascender = r.parseShort(), n.descender = r.parseShort(), n.lineGap = r.parseShort(), n.advanceWidthMax = r.parseUShort(), n.minLeftSideBearing = r.parseShort(), n.minRightSideBearing = r.parseShort(), n.xMaxExtent = r.parseShort(), n.caretSlopeRise = r.parseShort(), n.caretSlopeRun = r.parseShort(), n.caretOffset = r.parseShort(), r.relativeOffset += 8, n.metricDataFormat = r.parseShort(), n.numberOfHMetrics = r.parseUShort(), n;
						},
						make: function(e) {
							return new _u.Table("hhea", [
								{
									name: "version",
									type: "FIXED",
									value: 65536
								},
								{
									name: "ascender",
									type: "FWORD",
									value: 0
								},
								{
									name: "descender",
									type: "FWORD",
									value: 0
								},
								{
									name: "lineGap",
									type: "FWORD",
									value: 0
								},
								{
									name: "advanceWidthMax",
									type: "UFWORD",
									value: 0
								},
								{
									name: "minLeftSideBearing",
									type: "FWORD",
									value: 0
								},
								{
									name: "minRightSideBearing",
									type: "FWORD",
									value: 0
								},
								{
									name: "xMaxExtent",
									type: "FWORD",
									value: 0
								},
								{
									name: "caretSlopeRise",
									type: "SHORT",
									value: 1
								},
								{
									name: "caretSlopeRun",
									type: "SHORT",
									value: 0
								},
								{
									name: "caretOffset",
									type: "SHORT",
									value: 0
								},
								{
									name: "reserved1",
									type: "SHORT",
									value: 0
								},
								{
									name: "reserved2",
									type: "SHORT",
									value: 0
								},
								{
									name: "reserved3",
									type: "SHORT",
									value: 0
								},
								{
									name: "reserved4",
									type: "SHORT",
									value: 0
								},
								{
									name: "metricDataFormat",
									type: "SHORT",
									value: 0
								},
								{
									name: "numberOfHMetrics",
									type: "USHORT",
									value: 0
								}
							], e);
						}
					}, Hd = {
						parse: function(e, t, n, r, i, o, s) {
							s.lowMemory ? function(e, t, n, r, i) {
								let o, s;
								e._hmtxTableData = {};
								let p = new Tu.Parser(t, n);
								for (let t = 0; t < i; t += 1) t < r && (o = p.parseUShort(), s = p.parseShort()), e._hmtxTableData[t] = {
									advanceWidth: o,
									leftSideBearing: s
								};
							}(e, t, n, r, i) : function(e, t, n, r, i) {
								let o, s, p = new Tu.Parser(e, t);
								for (let e = 0; e < r; e += 1) {
									e < n && (o = p.parseUShort(), s = p.parseShort());
									let t = i.get(e);
									t.advanceWidth = o, t.leftSideBearing = s;
								}
							}(t, n, r, i, o);
						},
						make: function(e) {
							let t = new _u.Table("hmtx", []);
							for (let n = 0; n < e.length; n += 1) {
								let r = e.get(n), i = r.advanceWidth || 0, o = r.leftSideBearing || 0;
								t.fields.push({
									name: "advanceWidth_" + n,
									type: "USHORT",
									value: i
								}), t.fields.push({
									name: "leftSideBearing_" + n,
									type: "SHORT",
									value: o
								});
							}
							return t;
						}
					}, Ud = {
						make: function(e) {
							let t = new _u.Table("ltag", [
								{
									name: "version",
									type: "ULONG",
									value: 1
								},
								{
									name: "flags",
									type: "ULONG",
									value: 0
								},
								{
									name: "numTags",
									type: "ULONG",
									value: e.length
								}
							]), n = "", r = 12 + 4 * e.length;
							for (let i = 0; i < e.length; ++i) {
								let o = n.indexOf(e[i]);
								o < 0 && (o = n.length, n += e[i]), t.fields.push({
									name: "offset " + i,
									type: "USHORT",
									value: r + o
								}), t.fields.push({
									name: "length " + i,
									type: "USHORT",
									value: e[i].length
								});
							}
							return t.fields.push({
								name: "stringPool",
								type: "CHARARRAY",
								value: n
							}), t;
						},
						parse: function(e, t) {
							let n = new Tu.Parser(e, t), r = n.parseULong();
							Jl.argument(r === 1, "Unsupported ltag table version."), n.skip("uLong", 1);
							let i = n.parseULong(), o = [];
							for (let r = 0; r < i; r++) {
								let r = "", i = t + n.parseUShort(), s = n.parseUShort();
								for (let t = i; t < i + s; ++t) r += String.fromCharCode(e.getInt8(t));
								o.push(r);
							}
							return o;
						}
					}, Wd = {
						parse: function(e, t) {
							let n = {}, r = new Tu.Parser(e, t);
							return n.version = r.parseVersion(), n.numGlyphs = r.parseUShort(), n.version === 1 && (n.maxPoints = r.parseUShort(), n.maxContours = r.parseUShort(), n.maxCompositePoints = r.parseUShort(), n.maxCompositeContours = r.parseUShort(), n.maxZones = r.parseUShort(), n.maxTwilightPoints = r.parseUShort(), n.maxStorage = r.parseUShort(), n.maxFunctionDefs = r.parseUShort(), n.maxInstructionDefs = r.parseUShort(), n.maxStackElements = r.parseUShort(), n.maxSizeOfInstructions = r.parseUShort(), n.maxComponentElements = r.parseUShort(), n.maxComponentDepth = r.parseUShort()), n;
						},
						make: function(e) {
							return new _u.Table("maxp", [{
								name: "version",
								type: "FIXED",
								value: 20480
							}, {
								name: "numGlyphs",
								type: "USHORT",
								value: e
							}]);
						}
					}, Gd = [
						{
							begin: 0,
							end: 127
						},
						{
							begin: 128,
							end: 255
						},
						{
							begin: 256,
							end: 383
						},
						{
							begin: 384,
							end: 591
						},
						{
							begin: 592,
							end: 687
						},
						{
							begin: 688,
							end: 767
						},
						{
							begin: 768,
							end: 879
						},
						{
							begin: 880,
							end: 1023
						},
						{
							begin: 11392,
							end: 11519
						},
						{
							begin: 1024,
							end: 1279
						},
						{
							begin: 1328,
							end: 1423
						},
						{
							begin: 1424,
							end: 1535
						},
						{
							begin: 42240,
							end: 42559
						},
						{
							begin: 1536,
							end: 1791
						},
						{
							begin: 1984,
							end: 2047
						},
						{
							begin: 2304,
							end: 2431
						},
						{
							begin: 2432,
							end: 2559
						},
						{
							begin: 2560,
							end: 2687
						},
						{
							begin: 2688,
							end: 2815
						},
						{
							begin: 2816,
							end: 2943
						},
						{
							begin: 2944,
							end: 3071
						},
						{
							begin: 3072,
							end: 3199
						},
						{
							begin: 3200,
							end: 3327
						},
						{
							begin: 3328,
							end: 3455
						},
						{
							begin: 3584,
							end: 3711
						},
						{
							begin: 3712,
							end: 3839
						},
						{
							begin: 4256,
							end: 4351
						},
						{
							begin: 6912,
							end: 7039
						},
						{
							begin: 4352,
							end: 4607
						},
						{
							begin: 7680,
							end: 7935
						},
						{
							begin: 7936,
							end: 8191
						},
						{
							begin: 8192,
							end: 8303
						},
						{
							begin: 8304,
							end: 8351
						},
						{
							begin: 8352,
							end: 8399
						},
						{
							begin: 8400,
							end: 8447
						},
						{
							begin: 8448,
							end: 8527
						},
						{
							begin: 8528,
							end: 8591
						},
						{
							begin: 8592,
							end: 8703
						},
						{
							begin: 8704,
							end: 8959
						},
						{
							begin: 8960,
							end: 9215
						},
						{
							begin: 9216,
							end: 9279
						},
						{
							begin: 9280,
							end: 9311
						},
						{
							begin: 9312,
							end: 9471
						},
						{
							begin: 9472,
							end: 9599
						},
						{
							begin: 9600,
							end: 9631
						},
						{
							begin: 9632,
							end: 9727
						},
						{
							begin: 9728,
							end: 9983
						},
						{
							begin: 9984,
							end: 10175
						},
						{
							begin: 12288,
							end: 12351
						},
						{
							begin: 12352,
							end: 12447
						},
						{
							begin: 12448,
							end: 12543
						},
						{
							begin: 12544,
							end: 12591
						},
						{
							begin: 12592,
							end: 12687
						},
						{
							begin: 43072,
							end: 43135
						},
						{
							begin: 12800,
							end: 13055
						},
						{
							begin: 13056,
							end: 13311
						},
						{
							begin: 44032,
							end: 55215
						},
						{
							begin: 55296,
							end: 57343
						},
						{
							begin: 67840,
							end: 67871
						},
						{
							begin: 19968,
							end: 40959
						},
						{
							begin: 57344,
							end: 63743
						},
						{
							begin: 12736,
							end: 12783
						},
						{
							begin: 64256,
							end: 64335
						},
						{
							begin: 64336,
							end: 65023
						},
						{
							begin: 65056,
							end: 65071
						},
						{
							begin: 65040,
							end: 65055
						},
						{
							begin: 65104,
							end: 65135
						},
						{
							begin: 65136,
							end: 65279
						},
						{
							begin: 65280,
							end: 65519
						},
						{
							begin: 65520,
							end: 65535
						},
						{
							begin: 3840,
							end: 4095
						},
						{
							begin: 1792,
							end: 1871
						},
						{
							begin: 1920,
							end: 1983
						},
						{
							begin: 3456,
							end: 3583
						},
						{
							begin: 4096,
							end: 4255
						},
						{
							begin: 4608,
							end: 4991
						},
						{
							begin: 5024,
							end: 5119
						},
						{
							begin: 5120,
							end: 5759
						},
						{
							begin: 5760,
							end: 5791
						},
						{
							begin: 5792,
							end: 5887
						},
						{
							begin: 6016,
							end: 6143
						},
						{
							begin: 6144,
							end: 6319
						},
						{
							begin: 10240,
							end: 10495
						},
						{
							begin: 40960,
							end: 42127
						},
						{
							begin: 5888,
							end: 5919
						},
						{
							begin: 66304,
							end: 66351
						},
						{
							begin: 66352,
							end: 66383
						},
						{
							begin: 66560,
							end: 66639
						},
						{
							begin: 118784,
							end: 119039
						},
						{
							begin: 119808,
							end: 120831
						},
						{
							begin: 1044480,
							end: 1048573
						},
						{
							begin: 65024,
							end: 65039
						},
						{
							begin: 917504,
							end: 917631
						},
						{
							begin: 6400,
							end: 6479
						},
						{
							begin: 6480,
							end: 6527
						},
						{
							begin: 6528,
							end: 6623
						},
						{
							begin: 6656,
							end: 6687
						},
						{
							begin: 11264,
							end: 11359
						},
						{
							begin: 11568,
							end: 11647
						},
						{
							begin: 19904,
							end: 19967
						},
						{
							begin: 43008,
							end: 43055
						},
						{
							begin: 65536,
							end: 65663
						},
						{
							begin: 65856,
							end: 65935
						},
						{
							begin: 66432,
							end: 66463
						},
						{
							begin: 66464,
							end: 66527
						},
						{
							begin: 66640,
							end: 66687
						},
						{
							begin: 66688,
							end: 66735
						},
						{
							begin: 67584,
							end: 67647
						},
						{
							begin: 68096,
							end: 68191
						},
						{
							begin: 119552,
							end: 119647
						},
						{
							begin: 73728,
							end: 74751
						},
						{
							begin: 119648,
							end: 119679
						},
						{
							begin: 7040,
							end: 7103
						},
						{
							begin: 7168,
							end: 7247
						},
						{
							begin: 7248,
							end: 7295
						},
						{
							begin: 43136,
							end: 43231
						},
						{
							begin: 43264,
							end: 43311
						},
						{
							begin: 43312,
							end: 43359
						},
						{
							begin: 43520,
							end: 43615
						},
						{
							begin: 65936,
							end: 65999
						},
						{
							begin: 66e3,
							end: 66047
						},
						{
							begin: 66208,
							end: 66271
						},
						{
							begin: 127024,
							end: 127135
						}
					], Kd = {
						parse: function(e, t) {
							let n = {}, r = new Tu.Parser(e, t);
							n.version = r.parseUShort(), n.xAvgCharWidth = r.parseShort(), n.usWeightClass = r.parseUShort(), n.usWidthClass = r.parseUShort(), n.fsType = r.parseUShort(), n.ySubscriptXSize = r.parseShort(), n.ySubscriptYSize = r.parseShort(), n.ySubscriptXOffset = r.parseShort(), n.ySubscriptYOffset = r.parseShort(), n.ySuperscriptXSize = r.parseShort(), n.ySuperscriptYSize = r.parseShort(), n.ySuperscriptXOffset = r.parseShort(), n.ySuperscriptYOffset = r.parseShort(), n.yStrikeoutSize = r.parseShort(), n.yStrikeoutPosition = r.parseShort(), n.sFamilyClass = r.parseShort(), n.panose = [];
							for (let e = 0; e < 10; e++) n.panose[e] = r.parseByte();
							return n.ulUnicodeRange1 = r.parseULong(), n.ulUnicodeRange2 = r.parseULong(), n.ulUnicodeRange3 = r.parseULong(), n.ulUnicodeRange4 = r.parseULong(), n.achVendID = String.fromCharCode(r.parseByte(), r.parseByte(), r.parseByte(), r.parseByte()), n.fsSelection = r.parseUShort(), n.usFirstCharIndex = r.parseUShort(), n.usLastCharIndex = r.parseUShort(), n.sTypoAscender = r.parseShort(), n.sTypoDescender = r.parseShort(), n.sTypoLineGap = r.parseShort(), n.usWinAscent = r.parseUShort(), n.usWinDescent = r.parseUShort(), n.version >= 1 && (n.ulCodePageRange1 = r.parseULong(), n.ulCodePageRange2 = r.parseULong()), n.version >= 2 && (n.sxHeight = r.parseShort(), n.sCapHeight = r.parseShort(), n.usDefaultChar = r.parseUShort(), n.usBreakChar = r.parseUShort(), n.usMaxContent = r.parseUShort()), n;
						},
						make: function(e) {
							return new _u.Table("OS/2", [
								{
									name: "version",
									type: "USHORT",
									value: 3
								},
								{
									name: "xAvgCharWidth",
									type: "SHORT",
									value: 0
								},
								{
									name: "usWeightClass",
									type: "USHORT",
									value: 0
								},
								{
									name: "usWidthClass",
									type: "USHORT",
									value: 0
								},
								{
									name: "fsType",
									type: "USHORT",
									value: 0
								},
								{
									name: "ySubscriptXSize",
									type: "SHORT",
									value: 650
								},
								{
									name: "ySubscriptYSize",
									type: "SHORT",
									value: 699
								},
								{
									name: "ySubscriptXOffset",
									type: "SHORT",
									value: 0
								},
								{
									name: "ySubscriptYOffset",
									type: "SHORT",
									value: 140
								},
								{
									name: "ySuperscriptXSize",
									type: "SHORT",
									value: 650
								},
								{
									name: "ySuperscriptYSize",
									type: "SHORT",
									value: 699
								},
								{
									name: "ySuperscriptXOffset",
									type: "SHORT",
									value: 0
								},
								{
									name: "ySuperscriptYOffset",
									type: "SHORT",
									value: 479
								},
								{
									name: "yStrikeoutSize",
									type: "SHORT",
									value: 49
								},
								{
									name: "yStrikeoutPosition",
									type: "SHORT",
									value: 258
								},
								{
									name: "sFamilyClass",
									type: "SHORT",
									value: 0
								},
								{
									name: "bFamilyType",
									type: "BYTE",
									value: 0
								},
								{
									name: "bSerifStyle",
									type: "BYTE",
									value: 0
								},
								{
									name: "bWeight",
									type: "BYTE",
									value: 0
								},
								{
									name: "bProportion",
									type: "BYTE",
									value: 0
								},
								{
									name: "bContrast",
									type: "BYTE",
									value: 0
								},
								{
									name: "bStrokeVariation",
									type: "BYTE",
									value: 0
								},
								{
									name: "bArmStyle",
									type: "BYTE",
									value: 0
								},
								{
									name: "bLetterform",
									type: "BYTE",
									value: 0
								},
								{
									name: "bMidline",
									type: "BYTE",
									value: 0
								},
								{
									name: "bXHeight",
									type: "BYTE",
									value: 0
								},
								{
									name: "ulUnicodeRange1",
									type: "ULONG",
									value: 0
								},
								{
									name: "ulUnicodeRange2",
									type: "ULONG",
									value: 0
								},
								{
									name: "ulUnicodeRange3",
									type: "ULONG",
									value: 0
								},
								{
									name: "ulUnicodeRange4",
									type: "ULONG",
									value: 0
								},
								{
									name: "achVendID",
									type: "CHARARRAY",
									value: "XXXX"
								},
								{
									name: "fsSelection",
									type: "USHORT",
									value: 0
								},
								{
									name: "usFirstCharIndex",
									type: "USHORT",
									value: 0
								},
								{
									name: "usLastCharIndex",
									type: "USHORT",
									value: 0
								},
								{
									name: "sTypoAscender",
									type: "SHORT",
									value: 0
								},
								{
									name: "sTypoDescender",
									type: "SHORT",
									value: 0
								},
								{
									name: "sTypoLineGap",
									type: "SHORT",
									value: 0
								},
								{
									name: "usWinAscent",
									type: "USHORT",
									value: 0
								},
								{
									name: "usWinDescent",
									type: "USHORT",
									value: 0
								},
								{
									name: "ulCodePageRange1",
									type: "ULONG",
									value: 0
								},
								{
									name: "ulCodePageRange2",
									type: "ULONG",
									value: 0
								},
								{
									name: "sxHeight",
									type: "SHORT",
									value: 0
								},
								{
									name: "sCapHeight",
									type: "SHORT",
									value: 0
								},
								{
									name: "usDefaultChar",
									type: "USHORT",
									value: 0
								},
								{
									name: "usBreakChar",
									type: "USHORT",
									value: 0
								},
								{
									name: "usMaxContext",
									type: "USHORT",
									value: 0
								}
							], e);
						},
						unicodeRanges: Gd,
						getUnicodeRange: function(e) {
							for (let t = 0; t < Gd.length; t += 1) {
								let n = Gd[t];
								if (e >= n.begin && e < n.end) return t;
							}
							return -1;
						}
					}, qd = {
						parse: function(e, t) {
							let n = {}, r = new Tu.Parser(e, t);
							switch (n.version = r.parseVersion(), n.italicAngle = r.parseFixed(), n.underlinePosition = r.parseShort(), n.underlineThickness = r.parseShort(), n.isFixedPitch = r.parseULong(), n.minMemType42 = r.parseULong(), n.maxMemType42 = r.parseULong(), n.minMemType1 = r.parseULong(), n.maxMemType1 = r.parseULong(), n.version) {
								case 1:
									n.names = Xu.slice();
									break;
								case 2:
									n.numberOfGlyphs = r.parseUShort(), n.glyphNameIndex = Array(n.numberOfGlyphs);
									for (let e = 0; e < n.numberOfGlyphs; e++) n.glyphNameIndex[e] = r.parseUShort();
									n.names = [];
									for (let e = 0; e < n.numberOfGlyphs; e++) if (n.glyphNameIndex[e] >= Xu.length) {
										let e = r.parseChar();
										n.names.push(r.parseString(e));
									}
									break;
								case 2.5:
									n.numberOfGlyphs = r.parseUShort(), n.offset = Array(n.numberOfGlyphs);
									for (let e = 0; e < n.numberOfGlyphs; e++) n.offset[e] = r.parseChar();
							}
							return n;
						},
						make: function(e) {
							let { italicAngle: t = Math.round(65536 * (e.italicAngle || 0)), underlinePosition: n = 0, underlineThickness: r = 0, isFixedPitch: i = 0, minMemType42: o = 0, maxMemType42: s = 0, minMemType1: p = 0, maxMemType1: S = 0 } = e.tables.post || {};
							return new _u.Table("post", [
								{
									name: "version",
									type: "FIXED",
									value: 196608
								},
								{
									name: "italicAngle",
									type: "FIXED",
									value: t
								},
								{
									name: "underlinePosition",
									type: "FWORD",
									value: n
								},
								{
									name: "underlineThickness",
									type: "FWORD",
									value: r
								},
								{
									name: "isFixedPitch",
									type: "ULONG",
									value: i
								},
								{
									name: "minMemType42",
									type: "ULONG",
									value: o
								},
								{
									name: "maxMemType42",
									type: "ULONG",
									value: s
								},
								{
									name: "minMemType1",
									type: "ULONG",
									value: p
								},
								{
									name: "maxMemType1",
									type: "ULONG",
									value: S
								}
							]);
						}
					}, Jd = Array(9);
					Jd[1] = function() {
						let e = this.offset + this.relativeOffset, t = this.parseUShort();
						return t === 1 ? {
							substFormat: 1,
							coverage: this.parsePointer(N.coverage),
							deltaGlyphId: this.parseShort()
						} : t === 2 ? {
							substFormat: 2,
							coverage: this.parsePointer(N.coverage),
							substitute: this.parseOffset16List()
						} : void Jl.assert(!1, "0x" + e.toString(16) + ": lookup type 1 format must be 1 or 2.");
					}, Jd[2] = function() {
						let e = this.parseUShort();
						return Jl.argument(e === 1, "GSUB Multiple Substitution Subtable identifier-format must be 1"), {
							substFormat: e,
							coverage: this.parsePointer(N.coverage),
							sequences: this.parseListOfLists()
						};
					}, Jd[3] = function() {
						let e = this.parseUShort();
						return Jl.argument(e === 1, "GSUB Alternate Substitution Subtable identifier-format must be 1"), {
							substFormat: e,
							coverage: this.parsePointer(N.coverage),
							alternateSets: this.parseListOfLists()
						};
					}, Jd[4] = function() {
						let e = this.parseUShort();
						return Jl.argument(e === 1, "GSUB ligature table identifier-format must be 1"), {
							substFormat: e,
							coverage: this.parsePointer(N.coverage),
							ligatureSets: this.parseListOfLists(function() {
								return {
									ligGlyph: this.parseUShort(),
									components: this.parseUShortList(this.parseUShort() - 1)
								};
							})
						};
					};
					var Yd = {
						sequenceIndex: N.uShort,
						lookupListIndex: N.uShort
					};
					Jd[5] = function() {
						let e = this.offset + this.relativeOffset, t = this.parseUShort();
						if (t === 1) return {
							substFormat: t,
							coverage: this.parsePointer(N.coverage),
							ruleSets: this.parseListOfLists(function() {
								let e = this.parseUShort(), t = this.parseUShort();
								return {
									input: this.parseUShortList(e - 1),
									lookupRecords: this.parseRecordList(t, Yd)
								};
							})
						};
						if (t === 2) return {
							substFormat: t,
							coverage: this.parsePointer(N.coverage),
							classDef: this.parsePointer(N.classDef),
							classSets: this.parseListOfLists(function() {
								let e = this.parseUShort(), t = this.parseUShort();
								return {
									classes: this.parseUShortList(e - 1),
									lookupRecords: this.parseRecordList(t, Yd)
								};
							})
						};
						if (t === 3) {
							let e = this.parseUShort(), n = this.parseUShort();
							return {
								substFormat: t,
								coverages: this.parseList(e, N.pointer(N.coverage)),
								lookupRecords: this.parseRecordList(n, Yd)
							};
						}
						Jl.assert(!1, "0x" + e.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
					}, Jd[6] = function() {
						let e = this.offset + this.relativeOffset, t = this.parseUShort();
						return t === 1 ? {
							substFormat: 1,
							coverage: this.parsePointer(N.coverage),
							chainRuleSets: this.parseListOfLists(function() {
								return {
									backtrack: this.parseUShortList(),
									input: this.parseUShortList(this.parseShort() - 1),
									lookahead: this.parseUShortList(),
									lookupRecords: this.parseRecordList(Yd)
								};
							})
						} : t === 2 ? {
							substFormat: 2,
							coverage: this.parsePointer(N.coverage),
							backtrackClassDef: this.parsePointer(N.classDef),
							inputClassDef: this.parsePointer(N.classDef),
							lookaheadClassDef: this.parsePointer(N.classDef),
							chainClassSet: this.parseListOfLists(function() {
								return {
									backtrack: this.parseUShortList(),
									input: this.parseUShortList(this.parseShort() - 1),
									lookahead: this.parseUShortList(),
									lookupRecords: this.parseRecordList(Yd)
								};
							})
						} : t === 3 ? {
							substFormat: 3,
							backtrackCoverage: this.parseList(N.pointer(N.coverage)),
							inputCoverage: this.parseList(N.pointer(N.coverage)),
							lookaheadCoverage: this.parseList(N.pointer(N.coverage)),
							lookupRecords: this.parseRecordList(Yd)
						} : void Jl.assert(!1, "0x" + e.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
					}, Jd[7] = function() {
						let e = this.parseUShort();
						Jl.argument(e === 1, "GSUB Extension Substitution subtable identifier-format must be 1");
						let t = this.parseUShort(), n = new N(this.data, this.offset + this.parseULong());
						return {
							substFormat: 1,
							lookupType: t,
							extension: Jd[t].call(n)
						};
					}, Jd[8] = function() {
						let e = this.parseUShort();
						return Jl.argument(e === 1, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), {
							substFormat: e,
							coverage: this.parsePointer(N.coverage),
							backtrackCoverage: this.parseList(N.pointer(N.coverage)),
							lookaheadCoverage: this.parseList(N.pointer(N.coverage)),
							substitutes: this.parseUShortList()
						};
					};
					var Xd = Array(9);
					Xd[1] = function(e) {
						return e.substFormat === 1 ? new _u.Table("substitutionTable", [
							{
								name: "substFormat",
								type: "USHORT",
								value: 1
							},
							{
								name: "coverage",
								type: "TABLE",
								value: new _u.Coverage(e.coverage)
							},
							{
								name: "deltaGlyphID",
								type: "SHORT",
								value: e.deltaGlyphId
							}
						]) : e.substFormat === 2 ? new _u.Table("substitutionTable", [{
							name: "substFormat",
							type: "USHORT",
							value: 2
						}, {
							name: "coverage",
							type: "TABLE",
							value: new _u.Coverage(e.coverage)
						}].concat(_u.ushortList("substitute", e.substitute))) : void Jl.fail("Lookup type 1 substFormat must be 1 or 2.");
					}, Xd[2] = function(e) {
						return Jl.assert(e.substFormat === 1, "Lookup type 2 substFormat must be 1."), new _u.Table("substitutionTable", [{
							name: "substFormat",
							type: "USHORT",
							value: 1
						}, {
							name: "coverage",
							type: "TABLE",
							value: new _u.Coverage(e.coverage)
						}].concat(_u.tableList("seqSet", e.sequences, function(e) {
							return new _u.Table("sequenceSetTable", _u.ushortList("sequence", e));
						})));
					}, Xd[3] = function(e) {
						return Jl.assert(e.substFormat === 1, "Lookup type 3 substFormat must be 1."), new _u.Table("substitutionTable", [{
							name: "substFormat",
							type: "USHORT",
							value: 1
						}, {
							name: "coverage",
							type: "TABLE",
							value: new _u.Coverage(e.coverage)
						}].concat(_u.tableList("altSet", e.alternateSets, function(e) {
							return new _u.Table("alternateSetTable", _u.ushortList("alternate", e));
						})));
					}, Xd[4] = function(e) {
						return Jl.assert(e.substFormat === 1, "Lookup type 4 substFormat must be 1."), new _u.Table("substitutionTable", [{
							name: "substFormat",
							type: "USHORT",
							value: 1
						}, {
							name: "coverage",
							type: "TABLE",
							value: new _u.Coverage(e.coverage)
						}].concat(_u.tableList("ligSet", e.ligatureSets, function(e) {
							return new _u.Table("ligatureSetTable", _u.tableList("ligature", e, function(e) {
								return new _u.Table("ligatureTable", [{
									name: "ligGlyph",
									type: "USHORT",
									value: e.ligGlyph
								}].concat(_u.ushortList("component", e.components, e.components.length + 1)));
							}));
						})));
					}, Xd[5] = function(e) {
						if (e.substFormat === 1) return new _u.Table("contextualSubstitutionTable", [{
							name: "substFormat",
							type: "USHORT",
							value: e.substFormat
						}, {
							name: "coverage",
							type: "TABLE",
							value: new _u.Coverage(e.coverage)
						}].concat(_u.tableList("sequenceRuleSet", e.ruleSets, function(e) {
							return e ? new _u.Table("sequenceRuleSetTable", _u.tableList("sequenceRule", e, function(e) {
								let t = _u.ushortList("seqLookup", [], e.lookupRecords.length).concat(_u.ushortList("inputSequence", e.input, e.input.length + 1));
								[t[0], t[1]] = [t[1], t[0]];
								for (let n = 0; n < e.lookupRecords.length; n++) {
									let r = e.lookupRecords[n];
									t = t.concat({
										name: "sequenceIndex" + n,
										type: "USHORT",
										value: r.sequenceIndex
									}).concat({
										name: "lookupListIndex" + n,
										type: "USHORT",
										value: r.lookupListIndex
									});
								}
								return new _u.Table("sequenceRuleTable", t);
							})) : new _u.Table("NULL", null);
						})));
						if (e.substFormat === 2) return new _u.Table("contextualSubstitutionTable", [
							{
								name: "substFormat",
								type: "USHORT",
								value: e.substFormat
							},
							{
								name: "coverage",
								type: "TABLE",
								value: new _u.Coverage(e.coverage)
							},
							{
								name: "classDef",
								type: "TABLE",
								value: new _u.ClassDef(e.classDef)
							}
						].concat(_u.tableList("classSeqRuleSet", e.classSets, function(e) {
							return e ? new _u.Table("classSeqRuleSetTable", _u.tableList("classSeqRule", e, function(e) {
								let t = _u.ushortList("classes", e.classes, e.classes.length + 1).concat(_u.ushortList("seqLookupCount", [], e.lookupRecords.length));
								for (let n = 0; n < e.lookupRecords.length; n++) {
									let r = e.lookupRecords[n];
									t = t.concat({
										name: "sequenceIndex" + n,
										type: "USHORT",
										value: r.sequenceIndex
									}).concat({
										name: "lookupListIndex" + n,
										type: "USHORT",
										value: r.lookupListIndex
									});
								}
								return new _u.Table("classSeqRuleTable", t);
							})) : new _u.Table("NULL", null);
						})));
						if (e.substFormat === 3) {
							let t = [{
								name: "substFormat",
								type: "USHORT",
								value: e.substFormat
							}];
							t.push({
								name: "inputGlyphCount",
								type: "USHORT",
								value: e.coverages.length
							}), t.push({
								name: "substitutionCount",
								type: "USHORT",
								value: e.lookupRecords.length
							});
							for (let n = 0; n < e.coverages.length; n++) {
								let r = e.coverages[n];
								t.push({
									name: "inputCoverage" + n,
									type: "TABLE",
									value: new _u.Coverage(r)
								});
							}
							for (let n = 0; n < e.lookupRecords.length; n++) {
								let r = e.lookupRecords[n];
								t = t.concat({
									name: "sequenceIndex" + n,
									type: "USHORT",
									value: r.sequenceIndex
								}).concat({
									name: "lookupListIndex" + n,
									type: "USHORT",
									value: r.lookupListIndex
								});
							}
							return new _u.Table("contextualSubstitutionTable", t);
						}
						Jl.assert(!1, "lookup type 5 format must be 1, 2 or 3.");
					}, Xd[6] = function(e) {
						if (e.substFormat === 1) return new _u.Table("chainContextTable", [{
							name: "substFormat",
							type: "USHORT",
							value: e.substFormat
						}, {
							name: "coverage",
							type: "TABLE",
							value: new _u.Coverage(e.coverage)
						}].concat(_u.tableList("chainRuleSet", e.chainRuleSets, function(e) {
							return new _u.Table("chainRuleSetTable", _u.tableList("chainRule", e, function(e) {
								let t = _u.ushortList("backtrackGlyph", e.backtrack, e.backtrack.length).concat(_u.ushortList("inputGlyph", e.input, e.input.length + 1)).concat(_u.ushortList("lookaheadGlyph", e.lookahead, e.lookahead.length)).concat(_u.ushortList("substitution", [], e.lookupRecords.length));
								for (let n = 0; n < e.lookupRecords.length; n++) {
									let r = e.lookupRecords[n];
									t = t.concat({
										name: "sequenceIndex" + n,
										type: "USHORT",
										value: r.sequenceIndex
									}).concat({
										name: "lookupListIndex" + n,
										type: "USHORT",
										value: r.lookupListIndex
									});
								}
								return new _u.Table("chainRuleTable", t);
							}));
						})));
						if (e.substFormat === 2) Jl.assert(!1, "lookup type 6 format 2 is not yet supported.");
						else if (e.substFormat === 3) {
							let t = [{
								name: "substFormat",
								type: "USHORT",
								value: e.substFormat
							}];
							t.push({
								name: "backtrackGlyphCount",
								type: "USHORT",
								value: e.backtrackCoverage.length
							});
							for (let n = 0; n < e.backtrackCoverage.length; n++) {
								let r = e.backtrackCoverage[n];
								t.push({
									name: "backtrackCoverage" + n,
									type: "TABLE",
									value: new _u.Coverage(r)
								});
							}
							t.push({
								name: "inputGlyphCount",
								type: "USHORT",
								value: e.inputCoverage.length
							});
							for (let n = 0; n < e.inputCoverage.length; n++) {
								let r = e.inputCoverage[n];
								t.push({
									name: "inputCoverage" + n,
									type: "TABLE",
									value: new _u.Coverage(r)
								});
							}
							t.push({
								name: "lookaheadGlyphCount",
								type: "USHORT",
								value: e.lookaheadCoverage.length
							});
							for (let n = 0; n < e.lookaheadCoverage.length; n++) {
								let r = e.lookaheadCoverage[n];
								t.push({
									name: "lookaheadCoverage" + n,
									type: "TABLE",
									value: new _u.Coverage(r)
								});
							}
							t.push({
								name: "substitutionCount",
								type: "USHORT",
								value: e.lookupRecords.length
							});
							for (let n = 0; n < e.lookupRecords.length; n++) {
								let r = e.lookupRecords[n];
								t = t.concat({
									name: "sequenceIndex" + n,
									type: "USHORT",
									value: r.sequenceIndex
								}).concat({
									name: "lookupListIndex" + n,
									type: "USHORT",
									value: r.lookupListIndex
								});
							}
							return new _u.Table("chainContextTable", t);
						}
						Jl.assert(!1, "lookup type 6 format must be 1, 2 or 3.");
					};
					var Zd = {
						parse: function(e, t) {
							let n = new N(e, t ||= 0), r = n.parseVersion(1);
							return Jl.argument(r === 1 || r === 1.1, "Unsupported GSUB table version."), r === 1 ? {
								version: r,
								scripts: n.parseScriptList(),
								features: n.parseFeatureList(),
								lookups: n.parseLookupList(Jd)
							} : {
								version: r,
								scripts: n.parseScriptList(),
								features: n.parseFeatureList(),
								lookups: n.parseLookupList(Jd),
								variations: n.parseFeatureVariationsList()
							};
						},
						make: function(e) {
							return new _u.Table("GSUB", [
								{
									name: "version",
									type: "ULONG",
									value: 65536
								},
								{
									name: "scripts",
									type: "TABLE",
									value: new _u.ScriptList(e.scripts)
								},
								{
									name: "features",
									type: "TABLE",
									value: new _u.FeatureList(e.features)
								},
								{
									name: "lookups",
									type: "TABLE",
									value: new _u.LookupList(e.lookups, Xd)
								}
							]);
						}
					}, Qd = {
						parse: function(e, t) {
							let n = new Tu.Parser(e, t), r = n.parseULong();
							Jl.argument(r === 1, "Unsupported META table version."), n.parseULong(), n.parseULong();
							let i = n.parseULong(), o = {};
							for (let r = 0; r < i; r++) {
								let r = n.parseTag(), i = n.parseULong(), s = n.parseULong();
								r === "appl" || r === "bild" || (o[r] = Xl.UTF8(e, t + i, s));
							}
							return o;
						},
						make: function(e) {
							let t = Object.keys(e).length, n = "", r = 16 + 12 * t, i = new _u.Table("meta", [
								{
									name: "version",
									type: "ULONG",
									value: 1
								},
								{
									name: "flags",
									type: "ULONG",
									value: 0
								},
								{
									name: "offset",
									type: "ULONG",
									value: r
								},
								{
									name: "numTags",
									type: "ULONG",
									value: t
								}
							]);
							for (let t in e) {
								let o = n.length;
								n += e[t], i.fields.push({
									name: "tag " + t,
									type: "TAG",
									value: t
								}), i.fields.push({
									name: "offset " + t,
									type: "ULONG",
									value: r + o
								}), i.fields.push({
									name: "length " + t,
									type: "ULONG",
									value: e[t].length
								});
							}
							return i.fields.push({
								name: "stringPool",
								type: "CHARARRAY",
								value: n
							}), i;
						}
					}, $d = {
						parse: function(e, t) {
							let n = new N(e, t), r = n.parseUShort();
							r !== 0 && console.warn("Only COLRv0 is currently fully supported. A subset of color glyphs might be available in this font if provided in the v0 format.");
							let i = n.parseUShort(), o = n.parseOffset32(), s = n.parseOffset32(), p = n.parseUShort();
							n.relativeOffset = o;
							let S = n.parseRecordList(i, {
								glyphID: N.uShort,
								firstLayerIndex: N.uShort,
								numLayers: N.uShort
							});
							return n.relativeOffset = s, {
								version: r,
								baseGlyphRecords: S,
								layerRecords: n.parseRecordList(p, {
									glyphID: N.uShort,
									paletteIndex: N.uShort
								})
							};
						},
						make: function({ version: e = 0, baseGlyphRecords: t = [], layerRecords: n = [] }) {
							Jl.argument(e === 0, "Only COLRv0 supported.");
							let r = 14 + 6 * t.length;
							return new _u.Table("COLR", [
								{
									name: "version",
									type: "USHORT",
									value: e
								},
								{
									name: "numBaseGlyphRecords",
									type: "USHORT",
									value: t.length
								},
								{
									name: "baseGlyphRecordsOffset",
									type: "ULONG",
									value: 14
								},
								{
									name: "layerRecordsOffset",
									type: "ULONG",
									value: r
								},
								{
									name: "numLayerRecords",
									type: "USHORT",
									value: n.length
								},
								...t.map((e, t) => [
									{
										name: "glyphID_" + t,
										type: "USHORT",
										value: e.glyphID
									},
									{
										name: "firstLayerIndex_" + t,
										type: "USHORT",
										value: e.firstLayerIndex
									},
									{
										name: "numLayers_" + t,
										type: "USHORT",
										value: e.numLayers
									}
								]).flat(),
								...n.map((e, t) => [{
									name: "LayerGlyphID_" + t,
									type: "USHORT",
									value: e.glyphID
								}, {
									name: "paletteIndex_" + t,
									type: "USHORT",
									value: e.paletteIndex
								}]).flat()
							]);
						}
					};
					function ef(e, t) {
						return [
							{
								name: "tag_" + e,
								type: "TAG",
								value: t.tag
							},
							{
								name: "minValue_" + e,
								type: "FIXED",
								value: t.minValue << 16
							},
							{
								name: "defaultValue_" + e,
								type: "FIXED",
								value: t.defaultValue << 16
							},
							{
								name: "maxValue_" + e,
								type: "FIXED",
								value: t.maxValue << 16
							},
							{
								name: "flags_" + e,
								type: "USHORT",
								value: 0
							},
							{
								name: "nameID_" + e,
								type: "USHORT",
								value: t.axisNameID
							}
						];
					}
					function tf(e, t, n) {
						let r = {}, i = new Tu.Parser(e, t);
						r.tag = i.parseTag(), r.minValue = i.parseFixed(), r.defaultValue = i.parseFixed(), r.maxValue = i.parseFixed(), i.skip("uShort", 1);
						let o = i.parseUShort();
						return r.axisNameID = o, r.name = Bu(n, o), r;
					}
					function nf(e, t, n, r = {}) {
						let i = [{
							name: "nameID_" + e,
							type: "USHORT",
							value: t.subfamilyNameID
						}, {
							name: "flags_" + e,
							type: "USHORT",
							value: 0
						}];
						for (let r = 0; r < n.length; ++r) {
							let o = n[r].tag;
							i.push({
								name: "axis_" + e + " " + o,
								type: "FIXED",
								value: t.coordinates[o] << 16
							});
						}
						return r && r.postScriptNameID && i.push({
							name: "postScriptNameID_",
							type: "USHORT",
							value: t.postScriptNameID === void 0 ? 65535 : t.postScriptNameID
						}), i;
					}
					function rf(e, t, n, r, i) {
						let o = {}, s = new Tu.Parser(e, t), p = s.parseUShort();
						o.subfamilyNameID = p, o.name = Bu(r, p, [2, 17]), s.skip("uShort", 1), o.coordinates = {};
						for (let e = 0; e < n.length; ++e) o.coordinates[n[e].tag] = s.parseFixed();
						if (s.relativeOffset === i) return o.postScriptNameID = void 0, o.postScriptName = void 0, o;
						let S = s.parseUShort();
						return o.postScriptNameID = S == 65535 ? void 0 : S, o.postScriptName = o.postScriptNameID === void 0 ? "" : Bu(r, S, [6]), o;
					}
					var af = {
						make: function(e, t) {
							let n = new _u.Table("fvar", [
								{
									name: "version",
									type: "ULONG",
									value: 65536
								},
								{
									name: "offsetToData",
									type: "USHORT",
									value: 0
								},
								{
									name: "countSizePairs",
									type: "USHORT",
									value: 2
								},
								{
									name: "axisCount",
									type: "USHORT",
									value: e.axes.length
								},
								{
									name: "axisSize",
									type: "USHORT",
									value: 20
								},
								{
									name: "instanceCount",
									type: "USHORT",
									value: e.instances.length
								},
								{
									name: "instanceSize",
									type: "USHORT",
									value: 4 + 4 * e.axes.length
								}
							]);
							n.offsetToData = n.sizeOf();
							for (let t = 0; t < e.axes.length; t++) n.fields = n.fields.concat(ef(t, e.axes[t]));
							let r = {};
							for (let t = 0; t < e.instances.length; t++) if (e.instances[t].postScriptNameID !== void 0) {
								n.instanceSize += 2, r.postScriptNameID = !0;
								break;
							}
							for (let t = 0; t < e.instances.length; t++) n.fields = n.fields.concat(nf(t, e.instances[t], e.axes, r));
							return n;
						},
						parse: function(e, t, n) {
							let r = new Tu.Parser(e, t), i = r.parseULong();
							Jl.argument(i === 65536, "Unsupported fvar table version.");
							let o = r.parseOffset16();
							r.skip("uShort", 1);
							let s = r.parseUShort(), p = r.parseUShort(), S = r.parseUShort(), T = r.parseUShort(), k = [];
							for (let r = 0; r < s; r++) k.push(tf(e, t + o + r * p, n));
							let A = [], Sl = t + o + s * p;
							for (let t = 0; t < S; t++) A.push(rf(e, Sl + t * T, k, n, T));
							return {
								axes: k,
								instances: A
							};
						}
					}, of = {
						tag: N.tag,
						nameID: N.uShort,
						ordering: N.uShort
					}, sf = [
						,
						,
						,
						,
						,
					];
					function cf() {
						let e = this.parseUShort(), t = sf[e], n = { format: e };
						return t === void 0 ? (console.warn(`Unknown axis value table format ${e}`), n) : Object.assign(n, this.parseStruct(t.bind(this)));
					}
					sf[1] = function() {
						return {
							axisIndex: this.parseUShort(),
							flags: this.parseUShort(),
							valueNameID: this.parseUShort(),
							value: this.parseFixed()
						};
					}, sf[2] = function() {
						return {
							axisIndex: this.parseUShort(),
							flags: this.parseUShort(),
							valueNameID: this.parseUShort(),
							nominalValue: this.parseFixed(),
							rangeMinValue: this.parseFixed(),
							rangeMaxValue: this.parseFixed()
						};
					}, sf[3] = function() {
						return {
							axisIndex: this.parseUShort(),
							flags: this.parseUShort(),
							valueNameID: this.parseUShort(),
							value: this.parseFixed(),
							linkedValue: this.parseFixed()
						};
					}, sf[4] = function() {
						let e = this.parseUShort();
						return {
							flags: this.parseUShort(),
							valueNameID: this.parseUShort(),
							axisValues: this.parseList(e, function() {
								return {
									axisIndex: this.parseUShort(),
									value: this.parseFixed()
								};
							})
						};
					};
					var lf = [
						,
						,
						,
						,
						,
					];
					function uf(e, t) {
						return new _u.Record("axisRecord_" + e, [
							{
								name: "axisTag_" + e,
								type: "TAG",
								value: t.tag
							},
							{
								name: "axisNameID_" + e,
								type: "USHORT",
								value: t.nameID
							},
							{
								name: "axisOrdering_" + e,
								type: "USHORT",
								value: t.ordering
							}
						]);
					}
					function df(e, t) {
						let n = t.format, r = lf[n];
						Jl.argument(r !== void 0, `Unknown axis value table format ${n}`);
						let i = r(e, t);
						return new _u.Table("axisValueTable_" + e, i);
					}
					lf[1] = function(e, t) {
						return [
							{
								name: `format${e}`,
								type: "USHORT",
								value: 1
							},
							{
								name: `axisIndex${e}`,
								type: "USHORT",
								value: t.axisIndex
							},
							{
								name: `flags${e}`,
								type: "USHORT",
								value: t.flags
							},
							{
								name: `valueNameID${e}`,
								type: "USHORT",
								value: t.valueNameID
							},
							{
								name: `value${e}`,
								type: "FLOAT",
								value: t.value
							}
						];
					}, lf[2] = function(e, t) {
						return [
							{
								name: `format${e}`,
								type: "USHORT",
								value: 2
							},
							{
								name: `axisIndex${e}`,
								type: "USHORT",
								value: t.axisIndex
							},
							{
								name: `flags${e}`,
								type: "USHORT",
								value: t.flags
							},
							{
								name: `valueNameID${e}`,
								type: "USHORT",
								value: t.valueNameID
							},
							{
								name: `nominalValue${e}`,
								type: "FLOAT",
								value: t.nominalValue
							},
							{
								name: `rangeMinValue${e}`,
								type: "FLOAT",
								value: t.rangeMinValue
							},
							{
								name: `rangeMaxValue${e}`,
								type: "FLOAT",
								value: t.rangeMaxValue
							}
						];
					}, lf[3] = function(e, t) {
						return [
							{
								name: `format${e}`,
								type: "USHORT",
								value: 3
							},
							{
								name: `axisIndex${e}`,
								type: "USHORT",
								value: t.axisIndex
							},
							{
								name: `flags${e}`,
								type: "USHORT",
								value: t.flags
							},
							{
								name: `valueNameID${e}`,
								type: "USHORT",
								value: t.valueNameID
							},
							{
								name: `value${e}`,
								type: "FLOAT",
								value: t.value
							},
							{
								name: `linkedValue${e}`,
								type: "FLOAT",
								value: t.linkedValue
							}
						];
					}, lf[4] = function(e, t) {
						let n = [
							{
								name: `format${e}`,
								type: "USHORT",
								value: 4
							},
							{
								name: `axisCount${e}`,
								type: "USHORT",
								value: t.axisValues.length
							},
							{
								name: `flags${e}`,
								type: "USHORT",
								value: t.flags
							},
							{
								name: `valueNameID${e}`,
								type: "USHORT",
								value: t.valueNameID
							}
						];
						for (let r = 0; r < t.axisValues.length; r++) n = n.concat([{
							name: `format${e}axisIndex${r}`,
							type: "USHORT",
							value: t.axisValues[r].axisIndex
						}, {
							name: `format${e}value${r}`,
							type: "FLOAT",
							value: t.axisValues[r].value
						}]);
						return n;
					};
					var ff = {
						make: function(e) {
							let t = new _u.Table("STAT", [
								{
									name: "majorVersion",
									type: "USHORT",
									value: 1
								},
								{
									name: "minorVersion",
									type: "USHORT",
									value: 2
								},
								{
									name: "designAxisSize",
									type: "USHORT",
									value: 8
								},
								{
									name: "designAxisCount",
									type: "USHORT",
									value: e.axes.length
								},
								{
									name: "designAxesOffset",
									type: "ULONG",
									value: 0
								},
								{
									name: "axisValueCount",
									type: "USHORT",
									value: e.values.length
								},
								{
									name: "offsetToAxisValueOffsets",
									type: "ULONG",
									value: 0
								},
								{
									name: "elidedFallbackNameID",
									type: "USHORT",
									value: e.elidedFallbackNameID
								}
							]);
							t.designAxesOffset = t.offsetToAxisValueOffsets = t.sizeOf();
							for (let n = 0; n < e.axes.length; n++) {
								let r = uf(n, e.axes[n]);
								t.offsetToAxisValueOffsets += r.sizeOf(), t.fields = t.fields.concat(r.fields);
							}
							let n = [], r = [], i = 2 * e.values.length;
							for (let t = 0; t < e.values.length; t++) {
								let o = df(t, e.values[t]);
								n.push({
									name: "offset_" + t,
									type: "USHORT",
									value: i
								}), i += o.sizeOf(), r = r.concat(o.fields);
							}
							return t.fields = t.fields.concat(n), t.fields = t.fields.concat(r), t;
						},
						parse: function(e, t, n) {
							t ||= 0;
							let r = new Tu.Parser(e, t), i = r.parseUShort(), o = r.parseUShort();
							i !== 1 && console.warn(`Unsupported STAT table version ${i}.${o}`);
							let s = [i, o], p = r.parseUShort(), S = r.parseUShort(), T = r.parseOffset32(), k = r.parseUShort(), A = r.parseOffset32(), Sl = i > 1 || o > 0 ? r.parseUShort() : void 0;
							n !== void 0 && Jl.argument(S >= n.axes.length, "STAT axis count must be greater than or equal to fvar axis count"), k > 0 && Jl.argument(S >= 0, "STAT axis count must be greater than 0 if STAT axis value count is greater than 0");
							let Cl = [];
							for (let e = 0; e < S; e++) r.offset = t + T, r.relativeOffset = e * p, Cl.push(r.parseStruct(of));
							r.offset = t, r.relativeOffset = A;
							let wl = r.parseUShortList(k), Tl = [];
							for (let e = 0; e < k; e++) r.offset = t + A, r.relativeOffset = wl[e], Tl.push(cf.apply(r));
							return {
								version: s,
								axes: Cl,
								values: Tl,
								elidedFallbackNameID: Sl
							};
						}
					};
					function pf(e, t) {
						return new _u.Record("axisValueMap_" + e, [{
							name: "fromCoordinate_" + e,
							type: "F2DOT14",
							value: t.fromCoordinate
						}, {
							name: "toCoordinate_" + e,
							type: "F2DOT14",
							value: t.toCoordinate
						}]);
					}
					function mf(e, t) {
						let n = new _u.Record("segmentMap_" + e, [{
							name: "positionMapCount_" + e,
							type: "USHORT",
							value: t.axisValueMaps.length
						}]), r = [];
						for (let n = 0; n < t.axisValueMaps.length; n++) {
							let i = pf(`${e}_${n}`, t.axisValueMaps[n]);
							r = r.concat(i.fields);
						}
						return n.fields = n.fields.concat(r), n;
					}
					var hf = {
						make: function(e, t) {
							Jl.argument(e.axisSegmentMaps.length === t.axes.length, "avar axis count must correspond to fvar axis count");
							let n = new _u.Table("avar", [
								{
									name: "majorVersion",
									type: "USHORT",
									value: 1
								},
								{
									name: "minorVersion",
									type: "USHORT",
									value: 0
								},
								{
									name: "reserved",
									type: "USHORT",
									value: 0
								},
								{
									name: "axisCount",
									type: "USHORT",
									value: e.axisSegmentMaps.length
								}
							]);
							for (let t = 0; t < e.axisSegmentMaps.length; t++) {
								let r = mf(t, e.axisSegmentMaps[t]);
								n.fields = n.fields.concat(r.fields);
							}
							return n;
						},
						parse: function(e, t, n) {
							t ||= 0;
							let r = new N(e, t), i = r.parseUShort(), o = r.parseUShort();
							i !== 1 && console.warn(`Unsupported avar table version ${i}.${o}`), r.skip("uShort", 1);
							let s = r.parseUShort();
							Jl.argument(s === n.axes.length, "avar axis count must correspond to fvar axis count");
							let p = [];
							for (let e = 0; e < s; e++) {
								let e = [], t = r.parseUShort();
								for (let n = 0; n < t; n++) {
									let t = r.parseF2Dot14(), n = r.parseF2Dot14();
									e.push({
										fromCoordinate: t,
										toCoordinate: n
									});
								}
								p.push({ axisValueMaps: e });
							}
							return {
								version: [i, o],
								axisSegmentMaps: p
							};
						}
					}, gf = {
						make: function() {
							console.warn("Writing of cvar tables is not yet supported.");
						},
						parse: function(e, t, n, r) {
							let i = new Tu.Parser(e, t), o = i.parseTupleVariationStore(i.relativeOffset, n.axes.length, "cvar", r), s = i.parseUShort(), p = i.parseUShort();
							return s !== 1 && console.warn(`Unsupported cvar table version ${s}.${p}`), {
								version: [s, p],
								...o
							};
						}
					}, _f = {
						make: function() {
							console.warn("Writing of gvar tables is not yet supported.");
						},
						parse: function(e, t, n, r) {
							let i = new Tu.Parser(e, t), o = i.parseUShort(), s = i.parseUShort();
							o !== 1 && console.warn(`Unsupported gvar table version ${o}.${s}`);
							let p = i.parseUShort();
							p !== n.axes.length && console.warn(`axisCount ${p} in gvar table does not match the number of axes ${n.axes.length} in the fvar table!`);
							let S = i.parseUShort();
							return {
								version: [o, s],
								sharedTuples: i.parsePointer32(function() {
									return this.parseTupleRecords(S, p);
								}),
								glyphVariations: i.parseTupleVariationStoreList(p, "gvar", r)
							};
						}
					}, vf = {
						parse: function(e, t) {
							let n = {}, r = new Tu.Parser(e, t);
							n.version = r.parseUShort(), Jl.argument(n.version <= 1, "Unsupported gasp table version."), n.numRanges = r.parseUShort(), n.gaspRanges = [];
							for (let e = 0; e < n.numRanges; e++) n.gaspRanges[e] = {
								rangeMaxPPEM: r.parseUShort(),
								rangeGaspBehavior: r.parseUShort()
							};
							return n;
						},
						make: function(e) {
							let t = new _u.Table("gasp", [{
								name: "version",
								type: "USHORT",
								value: 1
							}, {
								name: "numRanges",
								type: "USHORT",
								value: e.numRanges
							}]);
							for (let n in e.gaspRanges) t.fields.push({
								name: "rangeMaxPPEM",
								type: "USHORT",
								value: e.gaspRanges[n].rangeMaxPPEM
							}), t.fields.push({
								name: "rangeGaspBehavior",
								type: "USHORT",
								value: e.gaspRanges[n].rangeGaspBehavior
							});
							return t;
						}
					}, yf = {
						make: function(e) {
							let t = Array.from(e.keys()).sort(), n = [], r = [], i = /* @__PURE__ */ new Map(), o = 0, s = { endGlyphID: null };
							for (let p = 0, S = t.length; p < S; p++) {
								let S = t[p], T = e.get(S), k = i.get(T);
								k === void 0 && (k = o, r.push(T), i.set(T, k), o += T.byteLength), S - 1 === s.endGlyphID && k === s.svgDocOffset ? s.endGlyphID = S : (s = {
									startGlyphID: S,
									endGlyphID: S,
									svgDocOffset: k,
									svgDocLength: T.byteLength
								}, n.push(s));
							}
							let p = n.length, S = r.length, T = 2 + 12 * p, k = Array(4 + 4 * p + S), A = 0;
							k[A++] = {
								name: "version",
								type: "USHORT",
								value: 0
							}, k[A++] = {
								name: "svgDocumentListOffset",
								type: "ULONG",
								value: 10
							}, k[A++] = {
								name: "reserved",
								type: "ULONG",
								value: 0
							}, k[A++] = {
								name: "numEntries",
								type: "USHORT",
								value: p
							};
							for (let e = 0; e < p; e++) {
								let t = "documentRecord_" + e, { startGlyphID: r, endGlyphID: i, svgDocOffset: o, svgDocLength: s } = n[e];
								k[A++] = {
									name: t + "_startGlyphID",
									type: "USHORT",
									value: r
								}, k[A++] = {
									name: t + "_endGlyphID",
									type: "USHORT",
									value: i
								}, k[A++] = {
									name: t + "_svgDocOffset",
									type: "ULONG",
									value: T + o
								}, k[A++] = {
									name: t + "_svgDocLength",
									type: "ULONG",
									value: s
								};
							}
							for (let e = 0; e < S; e++) k[A++] = {
								name: "svgDoc_" + e,
								type: "LITERAL",
								value: r[e]
							};
							return new _u.Table("SVG ", k);
						},
						parse: function(e, t) {
							let n = /* @__PURE__ */ new Map(), r = e.buffer, i = new N(e, t);
							if (i.parseUShort() !== 0) return n;
							i.relativeOffset = i.parseOffset32();
							let o = e.byteOffset + t + i.relativeOffset, s = i.parseUShort(), p = /* @__PURE__ */ new Map();
							for (let e = 0; e < s; e++) {
								let e = i.parseUShort(), t = i.parseUShort(), s = o + i.parseOffset32(), S = i.parseULong(), T = p.get(s);
								T === void 0 && (T = new Uint8Array(r, s, S), p.set(s, T));
								for (let r = e; r <= t; r++) n.set(r, T);
							}
							return n;
						}
					};
					function bf(e) {
						return Math.log(e) / Math.log(2) | 0;
					}
					function xf(e) {
						for (; e.length % 4 != 0;) e.push(0);
						let t = 0;
						for (let n = 0; n < e.length; n += 4) t += (e[n] << 24) + (e[n + 1] << 16) + (e[n + 2] << 8) + e[n + 3];
						return t %= 2 ** 32, t;
					}
					function Sf(e, t, n, r) {
						return new _u.Record("Table Record", [
							{
								name: "tag",
								type: "TAG",
								value: e === void 0 ? "" : e
							},
							{
								name: "checkSum",
								type: "ULONG",
								value: t === void 0 ? 0 : t
							},
							{
								name: "offset",
								type: "ULONG",
								value: n === void 0 ? 0 : n
							},
							{
								name: "length",
								type: "ULONG",
								value: r === void 0 ? 0 : r
							}
						]);
					}
					function Cf(e) {
						let t = new _u.Table("sfnt", [
							{
								name: "version",
								type: "TAG",
								value: "OTTO"
							},
							{
								name: "numTables",
								type: "USHORT",
								value: 0
							},
							{
								name: "searchRange",
								type: "USHORT",
								value: 0
							},
							{
								name: "entrySelector",
								type: "USHORT",
								value: 0
							},
							{
								name: "rangeShift",
								type: "USHORT",
								value: 0
							}
						]);
						t.tables = e, t.numTables = e.length;
						let n = 2 ** bf(t.numTables);
						t.searchRange = 16 * n, t.entrySelector = bf(n), t.rangeShift = 16 * t.numTables - t.searchRange;
						let r = [], i = [], o = t.sizeOf() + Sf().sizeOf() * t.numTables;
						for (; o % 4 != 0;) o += 1, i.push({
							name: "padding",
							type: "BYTE",
							value: 0
						});
						for (let t = 0; t < e.length; t += 1) {
							let n = e[t];
							Jl.argument(n.tableName.length === 4, "Table name" + n.tableName + " is invalid.");
							let s = n.sizeOf(), p = Sf(n.tableName, xf(n.encode()), o, s);
							for (r.push({
								name: p.tag + " Table Record",
								type: "RECORD",
								value: p
							}), i.push({
								name: n.tableName + " table",
								type: "RECORD",
								value: n
							}), o += s, Jl.argument(!isNaN(o), "Something went wrong calculating the offset."); o % 4 != 0;) o += 1, i.push({
								name: "padding",
								type: "BYTE",
								value: 0
							});
						}
						return r.sort(function(e, t) {
							return e.value.tag > t.value.tag ? 1 : -1;
						}), t.fields = t.fields.concat(r), t.fields = t.fields.concat(i), t;
					}
					function wf(e, t, n) {
						for (let n = 0; n < t.length; n += 1) {
							let r = e.charToGlyphIndex(t[n]);
							if (r > 0) return e.glyphs.get(r).getMetrics();
						}
						return n;
					}
					function Tf(e) {
						let t = 0;
						for (let n = 0; n < e.length; n += 1) t += e[n];
						return t / e.length;
					}
					var Ef = function(e) {
						let t = [], n = [], r = [], i = [], o = [], s = [], p = [], S, T = 0, k = 0, A = 0, Sl = 0, Cl = 0;
						for (let wl = 0; wl < e.glyphs.length; wl += 1) {
							let Tl = e.glyphs.get(wl), El = 0 | Tl.unicode;
							if (isNaN(Tl.advanceWidth)) throw Error("Glyph " + Tl.name + " (" + wl + "): advanceWidth is not a number.");
							(S > El || S === void 0) && El > 0 && (S = El), T < El && (T = El);
							let Dl = Kd.getUnicodeRange(El);
							if (Dl < 32) k |= 1 << Dl;
							else if (Dl < 64) A |= 1 << Dl - 32;
							else if (Dl < 96) Sl |= 1 << Dl - 64;
							else {
								if (!(Dl < 123)) throw Error("Unicode ranges bits > 123 are reserved for internal usage");
								Cl |= 1 << Dl - 96;
							}
							if (Tl.name === ".notdef") continue;
							let Ol = Tl.getMetrics();
							t.push(Ol.xMin), n.push(Ol.yMin), r.push(Ol.xMax), i.push(Ol.yMax), s.push(Ol.leftSideBearing), p.push(Ol.rightSideBearing), o.push(Tl.advanceWidth);
						}
						let wl = {
							xMin: Math.min.apply(null, t),
							yMin: Math.min.apply(null, n),
							xMax: Math.max.apply(null, r),
							yMax: Math.max.apply(null, i),
							advanceWidthMax: Math.max.apply(null, o),
							advanceWidthAvg: Tf(o),
							minLeftSideBearing: Math.min.apply(null, s),
							maxLeftSideBearing: Math.max.apply(null, s),
							minRightSideBearing: Math.min.apply(null, p)
						};
						wl.ascender = e.ascender, wl.descender = e.descender;
						let Tl = 0;
						e.weightClass >= 600 && (Tl |= e.macStyleValues.BOLD), e.italicAngle < 0 && (Tl |= e.macStyleValues.ITALIC);
						let El = Bd.make({
							flags: 3,
							unitsPerEm: e.unitsPerEm,
							xMin: wl.xMin,
							yMin: wl.yMin,
							xMax: wl.xMax,
							yMax: wl.yMax,
							lowestRecPPEM: 3,
							macStyle: Tl,
							createdTimestamp: e.createdTimestamp
						}), Dl = Vd.make({
							ascender: wl.ascender,
							descender: wl.descender,
							advanceWidthMax: wl.advanceWidthMax,
							minLeftSideBearing: wl.minLeftSideBearing,
							minRightSideBearing: wl.minRightSideBearing,
							xMaxExtent: wl.maxLeftSideBearing + (wl.xMax - wl.xMin),
							numberOfHMetrics: e.glyphs.length
						}), Ol = Wd.make(e.glyphs.length), kl = Kd.make(Object.assign({
							xAvgCharWidth: Math.round(wl.advanceWidthAvg),
							usFirstCharIndex: S,
							usLastCharIndex: T,
							ulUnicodeRange1: k,
							ulUnicodeRange2: A,
							ulUnicodeRange3: Sl,
							ulUnicodeRange4: Cl,
							sTypoAscender: wl.ascender,
							sTypoDescender: wl.descender,
							sTypoLineGap: 0,
							usWinAscent: wl.yMax,
							usWinDescent: Math.abs(wl.yMin),
							ulCodePageRange1: 1,
							sxHeight: wf(e, "xyvw", { yMax: Math.round(wl.ascender / 2) }).yMax,
							sCapHeight: wf(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", wl).yMax,
							usDefaultChar: e.hasChar(" ") ? 32 : 0,
							usBreakChar: e.hasChar(" ") ? 32 : 0
						}, e.tables.os2)), Al = Hd.make(e.glyphs), jl = Uu.make(e.glyphs), Ml = e.getEnglishName("fontFamily"), Nl = e.getEnglishName("fontSubfamily"), Pl = Ml + " " + Nl, Fl = e.getEnglishName("postScriptName");
						Fl ||= Ml.replace(/\s/g, "") + "-" + Nl;
						let Il = {};
						for (let t in e.names) Il[t] = e.names[t];
						Il.unicode = Il.unicode || {}, Il.macintosh = Il.macintosh || {}, Il.windows = Il.windows || {};
						let Ll = e.names.unicode || {}, Rl = e.names.macintosh || {}, zl = e.names.windows || {};
						for (let t in Il) {
							if (Il[t] = Il[t] || {}, !Il[t].uniqueID) {
								let n = e.getEnglishName("manufacturer") || "";
								Il[t].uniqueID = { en: `${n}: ${Pl}` };
							}
							Il[t].postScriptName || (Il[t].postScriptName = { en: Fl });
						}
						Il.unicode.preferredFamily || (Il.unicode.preferredFamily = Ll.fontFamily || Rl.fontFamily || zl.fontFamily), Il.macintosh.preferredFamily || (Il.macintosh.preferredFamily = Rl.fontFamily || Ll.fontFamily || zl.fontFamily), Il.windows.preferredFamily || (Il.windows.preferredFamily = zl.fontFamily || Ll.fontFamily || Rl.fontFamily), Il.unicode.preferredSubfamily || (Il.unicode.preferredSubfamily = Ll.fontSubfamily || Rl.fontSubfamily || zl.fontSubfamily), Il.macintosh.preferredSubfamily || (Il.macintosh.preferredSubfamily = Rl.fontSubfamily || Ll.fontSubfamily || zl.fontSubfamily), Il.windows.preferredSubfamily || (Il.windows.preferredSubfamily = zl.fontSubfamily || Ll.fontSubfamily || Rl.fontSubfamily);
						let Bl = [], Vl = Vu.make(Il, Bl), Hl = Bl.length > 0 ? Ud.make(Bl) : void 0, Ul = qd.make(e), Wl = zd.make(e.glyphs, {
							version: e.getEnglishName("version"),
							fullName: Pl,
							familyName: Ml,
							weightName: Nl,
							postScriptName: Fl,
							unitsPerEm: e.unitsPerEm,
							fontBBox: [
								0,
								wl.yMin,
								wl.ascender,
								wl.advanceWidthMax
							],
							topDict: e.tables.cff && e.tables.cff.topDict || {}
						}), Gl = e.metas && Object.keys(e.metas).length > 0 ? Qd.make(e.metas) : void 0, Kl = [
							El,
							Dl,
							Ol,
							kl,
							Vl,
							jl,
							Ul,
							Wl,
							Al
						];
						Hl && Kl.push(Hl);
						let ql = {
							gsub: Zd,
							cpal: cd,
							colr: $d,
							stat: ff,
							avar: hf,
							cvar: gf,
							fvar: af,
							gvar: _f,
							gasp: vf,
							svg: yf
						}, Jl = {
							avar: [e.tables.fvar],
							fvar: [e.names]
						};
						for (let t in ql) {
							let n = e.tables[t];
							if (n) {
								let r = ql[t].make.call(e, n, ...Jl[t] || []);
								r && Kl.push(r);
							}
						}
						Gl && Kl.push(Gl);
						let Yl = Cf(Kl), Xl = xf(Yl.encode()), Zl = Yl.fields, Ql = !1;
						for (let e = 0; e < Zl.length; e += 1) if (Zl[e].name === "head table") {
							Zl[e].value.checkSumAdjustment = 2981146554 - Xl, Ql = !0;
							break;
						}
						if (!Ql) throw Error("Could not find head table with checkSum to adjust.");
						return Yl;
					};
					function Df(e, t) {
						let n = 0, r = e.length - 1;
						for (; n <= r;) {
							let i = n + r >>> 1, o = e[i].tag;
							if (o === t) return i;
							o < t ? n = i + 1 : r = i - 1;
						}
						return -n - 1;
					}
					function Of(e, t) {
						let n = 0, r = e.length - 1;
						for (; n <= r;) {
							let i = n + r >>> 1, o = e[i];
							if (o === t) return i;
							o < t ? n = i + 1 : r = i - 1;
						}
						return -n - 1;
					}
					function kf(e, t) {
						let n, r = 0, i = e.length - 1;
						for (; r <= i;) {
							let o = r + i >>> 1;
							n = e[o];
							let s = n.start;
							if (s === t) return n;
							s < t ? r = o + 1 : i = o - 1;
						}
						if (r > 0) return n = e[r - 1], t > n.end ? 0 : n;
					}
					function Af(e, t) {
						this.font = e, this.tableName = t;
					}
					Af.prototype = {
						searchTag: Df,
						binSearch: Of,
						getTable: function(e) {
							let t = this.font.tables[this.tableName];
							return !t && e && (t = this.font.tables[this.tableName] = this.createDefaultTable()), t;
						},
						getScriptNames: function() {
							let e = this.getTable();
							return e ? e.scripts.map(function(e) {
								return e.tag;
							}) : [];
						},
						getDefaultScriptName: function() {
							let e = this.getTable();
							if (!e) return;
							let t = !1;
							for (let n = 0; n < e.scripts.length; n++) {
								let r = e.scripts[n].tag;
								if (r === "DFLT") return r;
								r === "latn" && (t = !0);
							}
							return t ? "latn" : void 0;
						},
						getScriptTable: function(e, t) {
							let n = this.getTable(t);
							if (n) {
								e ||= "DFLT";
								let r = n.scripts, i = Df(n.scripts, e);
								if (i >= 0) return r[i].script;
								if (t) {
									let t = {
										tag: e,
										script: {
											defaultLangSys: {
												reserved: 0,
												reqFeatureIndex: 65535,
												featureIndexes: []
											},
											langSysRecords: []
										}
									};
									return r.splice(-1 - i, 0, t), t.script;
								}
							}
						},
						getLangSysTable: function(e, t, n) {
							let r = this.getScriptTable(e, n);
							if (r) {
								if (!t || t === "dflt" || t === "DFLT") return r.defaultLangSys;
								let e = Df(r.langSysRecords, t);
								if (e >= 0) return r.langSysRecords[e].langSys;
								if (n) {
									let n = {
										tag: t,
										langSys: {
											reserved: 0,
											reqFeatureIndex: 65535,
											featureIndexes: []
										}
									};
									return r.langSysRecords.splice(-1 - e, 0, n), n.langSys;
								}
							}
						},
						getFeatureTable: function(e, t, n, r) {
							let i = this.getLangSysTable(e, t, r);
							if (i) {
								let e, t = i.featureIndexes, o = this.font.tables[this.tableName].features;
								for (let r = 0; r < t.length; r++) if (e = o[t[r]], e.tag === n) return e.feature;
								if (r) {
									let r = o.length;
									return Jl.assert(r === 0 || n >= o[r - 1].tag, "Features must be added in alphabetical order."), e = {
										tag: n,
										feature: {
											params: 0,
											lookupListIndexes: []
										}
									}, o.push(e), t.push(r), e.feature;
								}
							}
						},
						getLookupTables: function(e, t, n, r, i) {
							let o = this.getFeatureTable(e, t, n, i), s = [];
							if (o) {
								let e, t = o.lookupListIndexes, n = this.font.tables[this.tableName].lookups;
								for (let i = 0; i < t.length; i++) e = n[t[i]], e.lookupType === r && s.push(e);
								if (s.length === 0 && i) {
									e = {
										lookupType: r,
										lookupFlag: 0,
										subtables: [],
										markFilteringSet: void 0
									};
									let i = n.length;
									return n.push(e), t.push(i), [e];
								}
							}
							return s;
						},
						getGlyphClass: function(e, t) {
							switch (e.format) {
								case 1: return e.startGlyph <= t && t < e.startGlyph + e.classes.length ? e.classes[t - e.startGlyph] : 0;
								case 2: {
									let n = kf(e.ranges, t);
									return n ? n.classId : 0;
								}
							}
						},
						getCoverageIndex: function(e, t) {
							switch (e.format) {
								case 1: {
									let n = Of(e.glyphs, t);
									return n >= 0 ? n : -1;
								}
								case 2: {
									let n = kf(e.ranges, t);
									return n ? n.index + t - n.start : -1;
								}
							}
						},
						expandCoverage: function(e) {
							if (e.format === 1) return e.glyphs;
							{
								let t = [], n = e.ranges;
								for (let e = 0; e < n.length; e++) {
									let r = n[e], i = r.start, o = r.end;
									for (let e = i; e <= o; e++) t.push(e);
								}
								return t;
							}
						}
					};
					var jf = Af;
					function Mf(e) {
						jf.call(this, e, "gpos");
					}
					Mf.prototype = jf.prototype, Mf.prototype.init = function() {
						let e = this.getDefaultScriptName();
						this.defaultKerningTables = this.getKerningTables(e);
					}, Mf.prototype.getKerningValue = function(e, t, n) {
						for (let r = 0; r < e.length; r++) {
							let i = e[r].subtables;
							for (let e = 0; e < i.length; e++) {
								let r = i[e], o = this.getCoverageIndex(r.coverage, t);
								if (!(o < 0)) switch (r.posFormat) {
									case 1: {
										let e = r.pairSets[o];
										for (let t = 0; t < e.length; t++) {
											let r = e[t];
											if (r.secondGlyph === n) return r.value1 && r.value1.xAdvance || 0;
										}
										break;
									}
									case 2: {
										let e = this.getGlyphClass(r.classDef1, t), i = this.getGlyphClass(r.classDef2, n), o = r.classRecords[e][i];
										return o.value1 && o.value1.xAdvance || 0;
									}
								}
							}
						}
						return 0;
					}, Mf.prototype.getKerningTables = function(e, t) {
						if (this.font.tables.gpos) return this.getLookupTables(e, t, "kern", 2);
					};
					var Nf = Mf;
					function Pf(e, t) {
						let n = e.length;
						if (n !== t.length) return !1;
						for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
						return !0;
					}
					function Ff(e) {
						return e[0] === 31 && e[1] === 139 && e[2] === 8;
					}
					function If(e) {
						return {
							x: e.x,
							y: e.y,
							onCurve: e.onCurve,
							lastPointOfContour: e.lastPointOfContour
						};
					}
					function Lf(e) {
						return {
							glyphIndex: e.glyphIndex,
							xScale: e.xScale,
							scale01: e.scale01,
							scale10: e.scale10,
							yScale: e.yScale,
							dx: e.dx,
							dy: e.dy
						};
					}
					function Rf(e) {
						jf.call(this, e, "gsub");
					}
					function zf(e, t, n) {
						let r = e.subtables;
						for (let e = 0; e < r.length; e++) {
							let n = r[e];
							if (n.substFormat === t) return n;
						}
						if (n) return r.push(n), n;
					}
					Rf.prototype = jf.prototype, Rf.prototype.createDefaultTable = function() {
						return {
							version: 1,
							scripts: [{
								tag: "DFLT",
								script: {
									defaultLangSys: {
										reserved: 0,
										reqFeatureIndex: 65535,
										featureIndexes: []
									},
									langSysRecords: []
								}
							}],
							features: [],
							lookups: []
						};
					}, Rf.prototype.getSingle = function(e, t, n) {
						let r = [], i = this.getLookupTables(t, n, e, 1);
						for (let e = 0; e < i.length; e++) {
							let t = i[e].subtables;
							for (let e = 0; e < t.length; e++) {
								let n = t[e], i = this.expandCoverage(n.coverage), o;
								if (n.substFormat === 1) {
									let e = n.deltaGlyphId;
									for (o = 0; o < i.length; o++) {
										let t = i[o];
										r.push({
											sub: t,
											by: t + e
										});
									}
								} else {
									let e = n.substitute;
									for (o = 0; o < i.length; o++) r.push({
										sub: i[o],
										by: e[o]
									});
								}
							}
						}
						return r;
					}, Rf.prototype.getMultiple = function(e, t, n) {
						let r = [], i = this.getLookupTables(t, n, e, 2);
						for (let e = 0; e < i.length; e++) {
							let t = i[e].subtables;
							for (let e = 0; e < t.length; e++) {
								let n = t[e], i = this.expandCoverage(n.coverage), o;
								for (o = 0; o < i.length; o++) {
									let e = i[o], t = n.sequences[o];
									r.push({
										sub: e,
										by: t
									});
								}
							}
						}
						return r;
					}, Rf.prototype.getAlternates = function(e, t, n) {
						let r = [], i = this.getLookupTables(t, n, e, 3);
						for (let e = 0; e < i.length; e++) {
							let t = i[e].subtables;
							for (let e = 0; e < t.length; e++) {
								let n = t[e], i = this.expandCoverage(n.coverage), o = n.alternateSets;
								for (let e = 0; e < i.length; e++) r.push({
									sub: i[e],
									by: o[e]
								});
							}
						}
						return r;
					}, Rf.prototype.getLigatures = function(e, t, n) {
						let r = [], i = this.getLookupTables(t, n, e, 4);
						for (let e = 0; e < i.length; e++) {
							let t = i[e].subtables;
							for (let e = 0; e < t.length; e++) {
								let n = t[e], i = this.expandCoverage(n.coverage), o = n.ligatureSets;
								for (let e = 0; e < i.length; e++) {
									let t = i[e], n = o[e];
									for (let e = 0; e < n.length; e++) {
										let i = n[e];
										r.push({
											sub: [t].concat(i.components),
											by: i.ligGlyph
										});
									}
								}
							}
						}
						return r;
					}, Rf.prototype.addSingle = function(e, t, n, r) {
						let i = zf(this.getLookupTables(n, r, e, 1, !0)[0], 2, {
							substFormat: 2,
							coverage: {
								format: 1,
								glyphs: []
							},
							substitute: []
						});
						Jl.assert(i.coverage.format === 1, "Single: unable to modify coverage table format " + i.coverage.format);
						let o = t.sub, s = this.binSearch(i.coverage.glyphs, o);
						s < 0 && (s = -1 - s, i.coverage.glyphs.splice(s, 0, o), i.substitute.splice(s, 0, 0)), i.substitute[s] = t.by;
					}, Rf.prototype.addMultiple = function(e, t, n, r) {
						Jl.assert(t.by instanceof Array && t.by.length > 1, "Multiple: \"by\" must be an array of two or more ids");
						let i = zf(this.getLookupTables(n, r, e, 2, !0)[0], 1, {
							substFormat: 1,
							coverage: {
								format: 1,
								glyphs: []
							},
							sequences: []
						});
						Jl.assert(i.coverage.format === 1, "Multiple: unable to modify coverage table format " + i.coverage.format);
						let o = t.sub, s = this.binSearch(i.coverage.glyphs, o);
						s < 0 && (s = -1 - s, i.coverage.glyphs.splice(s, 0, o), i.sequences.splice(s, 0, 0)), i.sequences[s] = t.by;
					}, Rf.prototype.addAlternate = function(e, t, n, r) {
						let i = zf(this.getLookupTables(n, r, e, 3, !0)[0], 1, {
							substFormat: 1,
							coverage: {
								format: 1,
								glyphs: []
							},
							alternateSets: []
						});
						Jl.assert(i.coverage.format === 1, "Alternate: unable to modify coverage table format " + i.coverage.format);
						let o = t.sub, s = this.binSearch(i.coverage.glyphs, o);
						s < 0 && (s = -1 - s, i.coverage.glyphs.splice(s, 0, o), i.alternateSets.splice(s, 0, 0)), i.alternateSets[s] = t.by;
					}, Rf.prototype.addLigature = function(e, t, n, r) {
						let i = this.getLookupTables(n, r, e, 4, !0)[0], o = i.subtables[0];
						o || (o = {
							substFormat: 1,
							coverage: {
								format: 1,
								glyphs: []
							},
							ligatureSets: []
						}, i.subtables[0] = o), Jl.assert(o.coverage.format === 1, "Ligature: unable to modify coverage table format " + o.coverage.format);
						let s = t.sub[0], p = t.sub.slice(1), S = {
							ligGlyph: t.by,
							components: p
						}, T = this.binSearch(o.coverage.glyphs, s);
						if (T >= 0) {
							let e = o.ligatureSets[T];
							for (let t = 0; t < e.length; t++) if (Pf(e[t].components, p)) return;
							e.push(S);
						} else T = -1 - T, o.coverage.glyphs.splice(T, 0, s), o.ligatureSets.splice(T, 0, [S]);
					}, Rf.prototype.getFeature = function(e, t, n) {
						if (/ss\d\d/.test(e)) return this.getSingle(e, t, n);
						switch (e) {
							case "aalt":
							case "salt": return this.getSingle(e, t, n).concat(this.getAlternates(e, t, n));
							case "dlig":
							case "liga":
							case "rlig": return this.getLigatures(e, t, n);
							case "ccmp": return this.getMultiple(e, t, n).concat(this.getLigatures(e, t, n));
							case "stch": return this.getMultiple(e, t, n);
						}
					}, Rf.prototype.add = function(e, t, n, r) {
						if (/ss\d\d/.test(e)) return this.addSingle(e, t, n, r);
						switch (e) {
							case "aalt":
							case "salt": return typeof t.by == "number" ? this.addSingle(e, t, n, r) : this.addAlternate(e, t, n, r);
							case "dlig":
							case "liga":
							case "rlig": return this.addLigature(e, t, n, r);
							case "ccmp": return t.by instanceof Array ? this.addMultiple(e, t, n, r) : this.addLigature(e, t, n, r);
						}
					};
					var Bf = Rf, Vf = class {
						constructor(e) {
							this.defaultValue = 255, this.font = e;
						}
						cpal() {
							return !(!this.font.tables || !this.font.tables.cpal) && this.font.tables.cpal;
						}
						getAll(e) {
							let t = [], n = this.cpal();
							if (!n) return t;
							for (let r = 0; r < n.colorRecordIndices.length; r++) {
								let i = n.colorRecordIndices[r], o = [];
								for (let t = i; t < i + n.numPaletteEntries; t++) o.push(sd(n.colorRecords[t], e || "hexa"));
								t.push(o);
							}
							return t;
						}
						toCPALcolor(e) {
							return Array.isArray(e) ? e.map((e) => od(e, "raw")) : od(e, "raw");
						}
						fillPalette(e, t = [], n = this.cpal().numPaletteEntries) {
							return e = Number.isInteger(e) ? this.get(e, "raw") : e, Object.assign(Array(n).fill(this.defaultValue), this.toCPALcolor(e).concat(this.toCPALcolor(t)));
						}
						extend(e) {
							if (this.ensureCPAL(Array(e).fill(this.defaultValue))) return;
							let t = this.cpal(), n = t.numPaletteEntries + e, r = this.getAll().map((e) => this.fillPalette(e, [], n));
							t.numPaletteEntries = n, t.colorRecords = this.toCPALcolor(r.flat()), this.updateIndices();
						}
						get(e, t = "hexa") {
							return this.getAll(t)[e] || null;
						}
						getColor(e, t = 0, n = "hexa") {
							return rd(this.font, e, t, n);
						}
						setColor(e, t, n = 0) {
							e = parseInt(e), n = parseInt(n);
							let r = this.getAll("raw"), i = r[n];
							if (!i) throw Error(`paletteIndex ${n} out of range`);
							let o = this.cpal(), s = o.numPaletteEntries;
							Array.isArray(t) || (t = [t]), t.length + e > s && (this.extend(t.length + e - s), r = this.getAll("raw"), i = r[n]);
							for (let n = 0; n < t.length; n++) i[n + e] = this.toCPALcolor(t[n]);
							o.colorRecords = r.flat(), this.updateIndices();
						}
						add(e) {
							if (this.ensureCPAL(e)) return;
							let t = this.cpal(), n = t.numPaletteEntries;
							e && e.length ? ((e = this.toCPALcolor(e)).length > n ? this.extend(e.length - n) : e.length < n && (e = this.fillPalette(e)), t.colorRecordIndices.push(t.colorRecords.length), t.colorRecords.push(...e)) : (t.colorRecordIndices.push(t.colorRecords.length), t.colorRecords.push(...Array(n).fill(this.defaultValue)));
						}
						delete(e) {
							let t = this.getAll("raw");
							delete t[e];
							let n = this.cpal();
							n.colorRecordIndices.pop(), n.colorRecords = t.flat();
						}
						deleteColor(e, t) {
							if (e === t) throw Error("replacementIndex cannot be the same as colorIndex");
							let n = this.cpal(), r = this.getAll("raw"), i = [];
							if (t > n.numPaletteEntries - 1) throw Error(`Replacement index out of range: numPaletteEntries after deletion: ${n.numPaletteEntries - 1}, replacementIndex: ${t})`);
							for (let t = 0; t < r.length; t++) {
								let n = r[t].filter((t, n) => n !== e);
								i.push(n);
							}
							let o = this.font.tables.colr;
							if (o) {
								let n = o.layerRecords;
								for (let i = 0; i < n.length; i++) {
									let o = n[i].paletteIndex;
									if (o > e) --n[i].paletteIndex;
									else if (o === e) {
										let o = 0;
										for (let n = 0; n < r.length; n++) if (t > e && t <= e + r[n].length) {
											o++;
											break;
										}
										n[i].paletteIndex = t - o;
									}
								}
								this.font.tables.colr = {
									...o,
									layerRecords: n
								};
							}
							let s = i.flat();
							for (let e = 0; e < r.length; e++) n.colorRecordIndices[e] -= e;
							n.numPaletteEntries = Math.max(0, n.numPaletteEntries - 1), n.colorRecords = this.toCPALcolor(s);
						}
						ensureCPAL(e) {
							return !this.cpal() && (e = e && e.length ? this.toCPALcolor(e) : [this.defaultValue], this.font.tables.cpal = {
								version: 0,
								numPaletteEntries: e.length,
								colorRecords: e,
								colorRecordIndices: [0]
							}, !0);
						}
						updateIndices() {
							let e = this.cpal(), t = Math.ceil(e.colorRecords.length / e.numPaletteEntries);
							e.colorRecordIndices = [];
							for (let n = 0; n < t; n++) e.colorRecordIndices.push(n * e.numPaletteEntries);
						}
					}, Hf = class {
						constructor(e) {
							this.font = e;
						}
						ensureCOLR() {
							return this.font.tables.colr || (this.font.tables.colr = {
								version: 0,
								baseGlyphRecords: [],
								layerRecords: []
							}), this.font;
						}
						get(e) {
							let t = this.font, n = [], r = t.tables.colr, i = t.tables.cpal;
							if (!r || !i) return n;
							let o = function(e, t, n) {
								let r = 0, i = e.length - 1, o = null;
								for (; r <= i;) {
									let t = Math.floor((r + i) / 2), s = e[t], p = s.glyphID;
									if (p < n) r = t + 1;
									else {
										if (!(p > n)) {
											o = s;
											break;
										}
										i = t - 1;
									}
								}
								return o;
							}(r.baseGlyphRecords, 0, e);
							if (!o) return n;
							let s = o.firstLayerIndex, p = o.numLayers;
							for (let e = 0; e < p; e++) {
								let i = r.layerRecords[s + e];
								n.push({
									glyph: t.glyphs.get(i.glyphID),
									paletteIndex: i.paletteIndex
								});
							}
							return n;
						}
						add(e, t, n) {
							let r = this.get(e);
							t = Array.isArray(t) ? t : [t], n === void 0 || n === Infinity || n > r.length ? n = r.length : n < 0 && (n = r.length + 1 + n % (r.length + 1)) >= r.length + 1 && (n -= r.length + 1);
							let i = [];
							for (let e = 0; e < n; e++) {
								let t = Number.isInteger(r[e].glyph) ? r[e].glyph : r[e].glyph.index;
								i.push({
									glyphID: t,
									paletteIndex: r[e].paletteIndex
								});
							}
							for (let e of t) {
								let t = Number.isInteger(e.glyph) ? e.glyph : e.glyph.index;
								i.push({
									glyphID: t,
									paletteIndex: e.paletteIndex
								});
							}
							for (let e = n; e < r.length; e++) {
								let t = Number.isInteger(r[e].glyph) ? r[e].glyph : r[e].glyph.index;
								i.push({
									glyphID: t,
									paletteIndex: r[e].paletteIndex
								});
							}
							this.updateColrTable(e, i);
						}
						setPaletteIndex(e, t, n) {
							let r = this.get(e);
							r[t] ? (r = r.map((e, r) => ({
								glyphID: e.glyph.index,
								paletteIndex: r === t ? n : e.paletteIndex
							})), this.updateColrTable(e, r)) : console.error("Invalid layer index");
						}
						remove(e, t, n = t) {
							let r = this.get(e);
							r = r.map((e) => ({
								glyphID: e.glyph.index,
								paletteIndex: e.paletteIndex
							})), r.splice(t, n - t + 1), this.updateColrTable(e, r);
						}
						updateColrTable(e, t) {
							this.ensureCOLR();
							let n = this.font.tables.colr, r = function(e, t, n) {
								let r = 0, i = e.length - 1;
								for (; r <= i;) {
									let o = Math.floor((r + i) / 2), s = e[o];
									if (s[t] < n) r = o + 1;
									else {
										if (!(s[t] > n)) return o;
										i = o - 1;
									}
								}
								return -1;
							}(n.baseGlyphRecords, "glyphID", e);
							if (r === -1) {
								let t = {
									glyphID: e,
									firstLayerIndex: n.layerRecords.length,
									numLayers: 0
								};
								r = function(e, t, n) {
									let r = 0, i = e.length, o = (e, n) => e[t] - n[t];
									for (; r < i;) {
										let t = r + i >>> 1;
										o(e[t], n) < 0 ? r = t + 1 : i = t;
									}
									return e.splice(r, 0, n), r;
								}(n.baseGlyphRecords, "glyphID", t);
							}
							let i = n.baseGlyphRecords[r], o = i.numLayers, s = t.length, p = s - o;
							if (p > 0) {
								let e = t.slice(o).map((e) => ({
									glyphID: e.glyphID,
									paletteIndex: e.paletteIndex
								}));
								n.layerRecords.splice(i.firstLayerIndex + o, 0, ...e);
							} else p < 0 && n.layerRecords.splice(i.firstLayerIndex + s, -p);
							for (let e = 0; e < Math.min(o, s); e++) n.layerRecords[i.firstLayerIndex + e] = {
								glyphID: t[e].glyphID,
								paletteIndex: t[e].paletteIndex
							};
							if (i.numLayers = s, p !== 0) for (let e = 0; e < n.baseGlyphRecords.length; e++) {
								let t = n.baseGlyphRecords[e];
								e === r || t.firstLayerIndex < i.firstLayerIndex || (n.baseGlyphRecords[e].firstLayerIndex += p);
							}
						}
					}, Uf = class {
						constructor(e) {
							this.font = e, this.cache = /* @__PURE__ */ new WeakMap();
						}
						get(e) {
							let t = this.getOrCreateSvgImageCacheEntry(e);
							return t && t.image;
						}
						getAsync(e) {
							let t = this.getOrCreateSvgImageCacheEntry(e);
							return t && t.promise;
						}
						getOrCreateSvgImageCacheEntry(e) {
							let t = this.font.tables.svg;
							if (t === void 0) return;
							let n = t.get(e);
							if (n === void 0) return;
							let r = this.cache.get(n);
							r === void 0 && (r = function(e) {
								return {
									template: Wf(e).then(Gf),
									images: /* @__PURE__ */ new Map()
								};
							}(n), this.cache.set(n, r));
							let i = r.images.get(e);
							return i === void 0 && (i = function(e, t, n) {
								return {
									promise: t.then((t) => {
										let r;
										typeof t == "string" ? r = t : (t[4] = n, r = t.join(""));
										let i = function(e, t) {
											let n = new DOMParser().parseFromString(e, "image/svg+xml").documentElement, r = n.viewBox.baseVal, i = n.width.baseVal, o = n.height.baseVal, s = 1, p = 1;
											r.width > 0 && r.height > 0 && (i.unitType === 1 ? (s = i.valueInSpecifiedUnits / r.width, p = o.unitType === 1 ? o.valueInSpecifiedUnits / r.height : s) : o.unitType === 1 ? (p = o.valueInSpecifiedUnits / r.height, s = p) : t && (s = t / r.width, p = t / r.height));
											let S = document.createElement("div");
											S.style.position = "fixed", S.style.visibility = "hidden", S.appendChild(n), document.body.appendChild(S);
											let T = n.getBBox();
											document.body.removeChild(S);
											let k = (T.x - r.x) * s, A = (r.y - T.y) * p, Sl = T.width * s, Cl = T.height * p;
											n.setAttribute("viewBox", [
												T.x,
												T.y,
												T.width,
												T.height
											].join(" ")), s !== 1 && n.setAttribute("width", Sl), p !== 1 && n.setAttribute("height", Cl);
											let wl = new Image(Sl, Cl);
											return wl.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(n.outerHTML), {
												leftSideBearing: k,
												baseline: A,
												image: wl
											};
										}(r, e.unitsPerEm);
										return i.image.decode().then(() => i);
									}),
									image: void 0
								};
							}(this.font, r.template, e), i.promise.then((t) => {
								if (i.image = t, typeof this.font.onGlyphUpdated == "function") try {
									this.font.onGlyphUpdated(e);
								} catch (t) {
									console.error("font.onGlyphUpdated", e, t);
								}
							}), r.images.set(e, i)), i;
						}
					}, Wf = typeof DecompressionStream == "function" ? function(e) {
						if (Ff(e)) return new Response(new Response(e).body.pipeThrough(new DecompressionStream("gzip"))).text();
						try {
							return Promise.resolve(new TextDecoder().decode(e));
						} catch (e) {
							return Promise.reject(e);
						}
					} : function(e) {
						try {
							return Promise.resolve(new TextDecoder().decode(Ff(e) ? function(e) {
								let t = new DataView(e.buffer, e.byteOffset, e.byteLength), n = 10, r = e.byteLength - 8, i = t.getInt8(3);
								if (4 & i && (n += 2 + t.getUint16(n, !0)), 8 & i) for (; n < r && e[n++] !== 0;);
								if (16 & i) for (; n < r && e[n++] !== 0;);
								if (2 & i && (n += 2), n >= r) throw Error("Can't find compressed blocks");
								let o = t.getUint32(t.byteLength - 4, !0);
								return Ll(e.subarray(n, r), new Uint8Array(o));
							}(e) : e));
						} catch (e) {
							return Promise.reject(e);
						}
					};
					function Gf(e) {
						let t = e.indexOf("<svg"), n = e.indexOf(">", t + 4) + 1;
						if (/ id=['"]glyph\d+['"]/.test(e.substring(t, n))) return e;
						let r = e.lastIndexOf("</svg>");
						return [
							e.substring(0, n),
							"<defs>",
							e.substring(n, r),
							"</defs><use href=\"#glyph",
							"",
							"\"/>",
							e.substring(r)
						];
					}
					var Kf = /* @__PURE__ */ new WeakMap();
					function qf(e, t, n, r, i) {
						let o;
						return (t & r) > 0 ? (o = e.parseByte(), (t & i) === 0 && (o = -o), o = n + o) : o = (t & i) > 0 ? n : n + e.parseShort(), o;
					}
					function Jf(e, t, n) {
						let r = new Tu.Parser(t, n), i, o;
						if (e._numberOfContours = r.parseShort(), e._xMin = r.parseShort(), e._yMin = r.parseShort(), e._xMax = r.parseShort(), e._yMax = r.parseShort(), e._numberOfContours > 0) {
							let t = e.endPointIndices = [];
							for (let n = 0; n < e._numberOfContours; n += 1) t.push(r.parseUShort());
							e.instructionLength = r.parseUShort(), e.instructions = [];
							for (let t = 0; t < e.instructionLength; t += 1) e.instructions.push(r.parseByte());
							let n = t[t.length - 1] + 1;
							i = [];
							for (let e = 0; e < n; e += 1) if (o = r.parseByte(), i.push(o), (8 & o) > 0) {
								let t = r.parseByte();
								for (let n = 0; n < t; n += 1) i.push(o), e += 1;
							}
							if (Jl.argument(i.length === n, "Bad flags."), t.length > 0) {
								let s = [], p;
								if (n > 0) {
									for (let e = 0; e < n; e += 1) o = i[e], p = {}, p.onCurve = !!(1 & o), p.lastPointOfContour = t.indexOf(e) >= 0, s.push(p);
									let e = 0;
									for (let t = 0; t < n; t += 1) o = i[t], p = s[t], p.x = qf(r, o, e, 2, 16), e = p.x;
									let S = 0;
									for (let e = 0; e < n; e += 1) o = i[e], p = s[e], p.y = qf(r, o, S, 4, 32), S = p.y;
								}
								e.points = s;
							} else e.points = [];
						} else if (e._numberOfContours === 0) e.points = [];
						else {
							e.isComposite = !0, e.points = [], e.components = [];
							let t = !0;
							for (; t;) {
								i = r.parseUShort();
								let n = {
									glyphIndex: r.parseUShort(),
									xScale: 1,
									scale01: 0,
									scale10: 0,
									yScale: 1,
									dx: 0,
									dy: 0
								};
								(1 & i) > 0 ? (2 & i) > 0 ? (n.dx = r.parseShort(), n.dy = r.parseShort()) : n.matchedPoints = [r.parseUShort(), r.parseUShort()] : (2 & i) > 0 ? (n.dx = r.parseChar(), n.dy = r.parseChar()) : n.matchedPoints = [r.parseByte(), r.parseByte()], (8 & i) > 0 ? n.xScale = n.yScale = r.parseF2Dot14() : (64 & i) > 0 ? (n.xScale = r.parseF2Dot14(), n.yScale = r.parseF2Dot14()) : (128 & i) > 0 && (n.xScale = r.parseF2Dot14(), n.scale01 = r.parseF2Dot14(), n.scale10 = r.parseF2Dot14(), n.yScale = r.parseF2Dot14()), e.components.push(n), t = !!(32 & i);
							}
							if (256 & i) {
								e.instructionLength = r.parseUShort(), e.instructions = [];
								for (let t = 0; t < e.instructionLength; t += 1) e.instructions.push(r.parseByte());
							}
						}
					}
					function Yf(e, t) {
						let n = [];
						for (let r = 0; r < e.length; r += 1) {
							let i = e[r], o = {
								x: t.xScale * i.x + t.scale10 * i.y + t.dx,
								y: t.scale01 * i.x + t.yScale * i.y + t.dy,
								onCurve: i.onCurve,
								lastPointOfContour: i.lastPointOfContour
							};
							n.push(o);
						}
						return n;
					}
					function Xf(e) {
						let t = new Gl();
						if (!e) return t;
						let n = function(e) {
							let t = [], n = [];
							for (let r = 0; r < e.length; r += 1) {
								let i = e[r];
								n.push(i), i.lastPointOfContour && (t.push(n), n = []);
							}
							return Jl.argument(n.length === 0, "There are still points left in the current contour."), t;
						}(e);
						for (let e = 0; e < n.length; ++e) {
							let r = n[e], i = r[r.length - 1], o = r[0];
							if (i.onCurve) t.moveTo(i.x, i.y);
							else if (o.onCurve) t.moveTo(o.x, o.y);
							else {
								let e = {
									x: .5 * (i.x + o.x),
									y: .5 * (i.y + o.y)
								};
								t.moveTo(e.x, e.y);
							}
							for (let e = 0; e < r.length; ++e) if (i = o, o = r[(e + 1) % r.length], i.onCurve) t.lineTo(i.x, i.y);
							else {
								let e = o;
								o.onCurve || (e = {
									x: .5 * (i.x + o.x),
									y: .5 * (i.y + o.y)
								}), t.quadraticCurveTo(i.x, i.y, e.x, e.y);
							}
							t.closePath();
						}
						return t;
					}
					function Zf(e, t) {
						if (t.isComposite) {
							Kf.has(e) || Kf.set(e, /* @__PURE__ */ new Set());
							let n = Kf.get(e);
							n.add(t.index);
							try {
								for (let r = 0; r < t.components.length; r += 1) {
									let i = t.components[r];
									if (n.has(i.glyphIndex)) continue;
									let o = e.get(i.glyphIndex);
									if (o.getPath(), o.points) {
										let e;
										if (i.matchedPoints === void 0) e = Yf(o.points, i);
										else {
											if (i.matchedPoints[0] > t.points.length - 1 || i.matchedPoints[1] > o.points.length - 1) throw Error("Matched points out of range in " + t.name);
											let n = t.points[i.matchedPoints[0]], r = o.points[i.matchedPoints[1]], s = {
												xScale: i.xScale,
												scale01: i.scale01,
												scale10: i.scale10,
												yScale: i.yScale,
												dx: 0,
												dy: 0
											};
											r = Yf([r], s)[0], s.dx = n.x - r.x, s.dy = n.y - r.y, e = Yf(o.points, s);
										}
										t.points = t.points.concat(e);
									}
								}
							} finally {
								n.delete(t.index);
							}
						}
						return Xf(t.points);
					}
					var Qf, $f, ep, tp, np = {
						getPath: Xf,
						parse: function(e, t, n, r, i) {
							return i.lowMemory ? function(e, t, n, r) {
								let i = new pd.GlyphSet(r);
								return r._push = function(o) {
									let s = n[o];
									s === n[o + 1] ? i.push(o, pd.glyphLoader(r, o)) : i.push(o, pd.ttfGlyphLoader(r, o, Jf, e, t + s, Zf));
								}, i;
							}(e, t, n, r) : function(e, t, n, r) {
								let i = new pd.GlyphSet(r);
								for (let o = 0; o < n.length - 1; o += 1) {
									let s = n[o];
									s === n[o + 1] ? i.push(o, pd.glyphLoader(r, o)) : i.push(o, pd.ttfGlyphLoader(r, o, Jf, e, t + s, Zf));
								}
								return i;
							}(e, t, n, r);
						}
					}, rp = class {
						constructor(e) {
							this.font = e;
						}
						normalizeCoordTags(e) {
							for (let t in e) if (t.length < 4) {
								let n = t.padEnd(4, " ");
								e[n] === void 0 && (e[n] = e[t]), delete e[t];
							}
						}
						getNormalizedCoords(e) {
							e ||= this.font.variation.get();
							let t = [];
							this.normalizeCoordTags(e);
							for (let n = 0; n < this.fvar().axes.length; n++) {
								let r = this.fvar().axes[n], i = e[r.tag];
								i === void 0 && (i = r.defaultValue), i < r.defaultValue ? t.push((i - r.defaultValue + 2 ** -52) / (r.defaultValue - r.minValue + 2 ** -52)) : t.push((i - r.defaultValue + 2 ** -52) / (r.maxValue - r.defaultValue + 2 ** -52));
							}
							if (this.avar()) for (let e = 0; e < this.avar().axisSegmentMaps.length; e++) {
								let n = this.avar().axisSegmentMaps[e];
								for (let r = 0; r < n.axisValueMaps.length; r++) {
									let i = n.axisValueMaps[r];
									if (r >= 1 && t[e] < i.fromCoordinate) {
										let o = n.axisValueMaps[r - 1];
										t[e] = ((t[e] - o.fromCoordinate) * (i.toCoordinate - o.toCoordinate) + 2 ** -52) / (i.fromCoordinate - o.fromCoordinate + 2 ** -52) + o.toCoordinate;
										break;
									}
								}
							}
							return t;
						}
						interpolatePoints(e, t, n) {
							if (e.length === 0) return;
							let r = 0;
							for (; r < e.length;) {
								let i = r, o = r, s = e[o];
								for (; !s.lastPointOfContour;) s = e[++o];
								for (; r <= o && !n[r];) r++;
								if (r > o) continue;
								let p = r, S = r;
								for (r++; r <= o;) n[r] && (this.deltaInterpolate(S + 1, r - 1, S, r, t, e), S = r), r++;
								S === p ? this.deltaShift(i, o, S, t, e) : (this.deltaInterpolate(S + 1, o, S, p, t, e), p > 0 && this.deltaInterpolate(i, p - 1, S, p, t, e)), r = o + 1;
							}
						}
						deltaInterpolate(e, t, n, r, i, o) {
							if (e > t) return;
							let s = ["x", "y"];
							for (let S = 0; S < s.length; S++) {
								let T = s[S];
								if (i[n][T] > i[r][T]) {
									var p = n;
									n = r, r = p;
								}
								let k = i[n][T], A = i[r][T], Sl = o[n][T], Cl = o[r][T];
								if (k !== A || Sl === Cl) {
									let n = k === A ? 0 : (Cl - Sl) / (A - k);
									for (let r = e; r <= t; r++) {
										let e = i[r][T];
										e <= k ? e += Sl - k : e >= A ? e += Cl - A : e = Sl + (e - k) * n, o[r][T] = e;
									}
								}
							}
						}
						deltaShift(e, t, n, r, i) {
							let o = i[n].x - r[n].x, s = i[n].y - r[n].y;
							if (o !== 0 || s !== 0) for (let r = e; r <= t; r++) r !== n && (i[r].x += o, i[r].y += s);
						}
						transformComponents(e, t, n, r, i, o) {
							let s = 0;
							for (let p = 0; p < e.components.length; p++) {
								let S = e.components[p], T = this.font.glyphs.get(S.glyphIndex), k = Lf(S), A = r.indexOf(p);
								A > -1 && (k.dx += Math.round(i.deltas[A] * o), k.dy += Math.round(i.deltasY[A] * o));
								let Sl = Yf(this.getTransform(T, n).points, k);
								t.splice(s, Sl.length, ...Sl), s += T.points.length;
							}
						}
						applyTupleVariationStore(e, t, n, r = "gvar", i = {}) {
							n ||= this.font.variation.get();
							let o = this.getNormalizedCoords(n), { headers: s, sharedPoints: p } = e, S = this.fvar().axes.length, T;
							r === "gvar" ? T = t.map(If) : r === "cvar" && (T = [...t]);
							for (let e = 0; e < s.length; e++) {
								let k = s[e], A = 1;
								for (let e = 0; e < S; e++) {
									let t = [0];
									switch (r) {
										case "gvar":
											t = k.peakTuple ? k.peakTuple : this.gvar().sharedTuples[k.sharedTupleRecordsIndex];
											break;
										case "cvar": t = k.peakTuple;
									}
									if (t[e] !== 0) {
										if (o[e] === 0) {
											A = 0;
											break;
										}
										if (k.intermediateStartTuple) {
											if (o[e] < k.intermediateStartTuple[e] || o[e] > k.intermediateEndTuple[e]) {
												A = 0;
												break;
											}
											A = o[e] < t[e] ? A * (o[e] - k.intermediateStartTuple[e] + 2 ** -52) / (t[e] - k.intermediateStartTuple[e] + 2 ** -52) : A * (k.intermediateEndTuple[e] - o[e] + 2 ** -52) / (k.intermediateEndTuple[e] - t[e] + 2 ** -52);
										} else {
											if (o[e] < Math.min(0, t[e]) || o[e] > Math.max(0, t[e])) {
												A = 0;
												break;
											}
											A = (A * o[e] + 2 ** -52) / (t[e] + 2 ** -52);
										}
									}
								}
								if (A === 0) continue;
								let Sl = k.privatePoints.length ? k.privatePoints : p;
								if (r === "gvar" && i.glyph && i.glyph.isComposite) this.transformComponents(i.glyph, T, n, Sl, k, A);
								else if (Sl.length === 0) for (let e = 0; e < T.length; e++) {
									let t = T[e];
									r === "gvar" ? T[e] = {
										x: Math.round(t.x + k.deltas[e] * A),
										y: Math.round(t.y + k.deltasY[e] * A),
										onCurve: t.onCurve,
										lastPointOfContour: t.lastPointOfContour
									} : r === "cvar" && (T[e] = Math.round(t + k.deltas[e] * A));
								}
								else {
									let e;
									r === "gvar" ? e = T.map(If) : r === "cvar" && (e = T);
									let n = Array(t.length).fill(!1);
									for (let i = 0; i < Sl.length; i++) {
										let o = Sl[i];
										if (o < t.length) {
											let t = e[o];
											r === "gvar" ? (n[o] = !0, t.x += k.deltas[i] * A, t.y += k.deltasY[i] * A) : r === "cvar" && (T[o] = Math.round(t + k.deltas[i] * A));
										}
									}
									if (r === "gvar") {
										this.interpolatePoints(e, T, n);
										for (let n = 0; n < t.length; n++) {
											let t = e[n].x - T[n].x, r = e[n].y - T[n].y;
											T[n].x = Math.round(T[n].x + t), T[n].y = Math.round(T[n].y + r);
										}
									}
								}
							}
							return T;
						}
						getTransform(e, t) {
							Number.isInteger(e) && (e = this.font.glyphs.get(e));
							let n = e.getBlendPath, r = !(!e.points || !e.points.length), i = e;
							if (n || r) {
								if (t ||= this.font.variation.get(), r) {
									let n = this.gvar() && this.gvar().glyphVariations[e.index];
									if (n) {
										let r = e.points, o = this.applyTupleVariationStore(n, r, t, "gvar", { glyph: e });
										i = new ud(Object.assign({}, e, {
											points: o,
											path: Xf(o)
										}));
									}
								} else if (n) {
									let n = e.getBlendPath(t);
									i = new ud(Object.assign({}, e, { path: n }));
								}
							}
							return this.font.tables.hvar && (e._advanceWidth = e._advanceWidth === void 0 ? e.advanceWidth : e._advanceWidth, e.advanceWidth = i.advanceWidth = Math.round(e._advanceWidth + this.getVariableAdjustment(i.index, "hvar", "advanceWidth", t)), e._leftSideBearing = e._leftSideBearing === void 0 ? e.leftSideBearing : e._leftSideBearing, e.leftSideBearing = i.leftSideBearing = Math.round(e._leftSideBearing + this.getVariableAdjustment(i.index, "hvar", "lsb", t))), i;
						}
						getCvarTransform(e) {
							let t = this.font.tables.cvt, n = this.cvar();
							return t && t.length && n && n.headers.length ? this.applyTupleVariationStore(n, t, e, "cvar") : t;
						}
						getVariableAdjustment(e, t, n, r) {
							let i, o;
							r ||= this.font.variation.get();
							let s = this.font.tables[t];
							if (!s) throw Error(`trying to get variation adjustment from non-existent table "${s}"`);
							if (!s.itemVariationStore) throw Error(`trying to get variation adjustment from table "${s}" which does not have an itemVariationStore`);
							let p = s[n] && s[n].map.length;
							if (p) {
								let t = e;
								t >= p && (t = p - 1), {outerIndex: i, innerIndex: o} = s[n].map[t];
							} else i = 0, o = e;
							return this.getDelta(s.itemVariationStore, i, o, r);
						}
						getDelta(e, t, n, r) {
							if (t >= e.itemVariationSubtables.length) return 0;
							let i = e.itemVariationSubtables[t];
							if (n >= i.deltaSets.length) return 0;
							let o = i.deltaSets[n], s = this.getBlendVector(e, t, r), p = 0;
							for (let e = 0; e < i.regionIndexes.length; e++) p += o[e] * s[e];
							return p;
						}
						getBlendVector(e, t, n) {
							n ||= this.font.variation.get();
							let r = e.itemVariationSubtables[t], i = this.getNormalizedCoords(n), o = [];
							for (let t = 0; t < r.regionIndexes.length; t++) {
								let n = 1, s = r.regionIndexes[t], p = e.variationRegions[s].regionAxes;
								for (let e = 0; e < p.length; e++) {
									let t, r = p[e];
									t = r.startCoord > r.peakCoord || r.peakCoord > r.endCoord || r.startCoord < 0 && r.endCoord > 0 && r.peakCoord !== 0 || r.peakCoord === 0 ? 1 : i[e] < r.startCoord || i[e] > r.endCoord ? 0 : i[e] === r.peakCoord ? 1 : i[e] < r.peakCoord ? (i[e] - r.startCoord + 2 ** -52) / (r.peakCoord - r.startCoord + 2 ** -52) : (r.endCoord - i[e] + 2 ** -52) / (r.endCoord - r.peakCoord + 2 ** -52), n *= t;
								}
								o[t] = n;
							}
							return o;
						}
						avar() {
							return this.font.tables.avar;
						}
						cvar() {
							return this.font.tables.cvar;
						}
						fvar() {
							return this.font.tables.fvar;
						}
						gvar() {
							return this.font.tables.gvar;
						}
						hvar() {
							return this.font.tables.hvar;
						}
					}, ip = class {
						constructor(e) {
							this.font = e, this.process = new rp(this.font), this.activateDefaultVariation(), this.getTransform = this.process.getTransform.bind(this.process);
						}
						activateDefaultVariation() {
							let e = this.getDefaultInstanceIndex();
							e > -1 ? this.set(e) : this.set(this.getDefaultCoordinates());
						}
						getDefaultCoordinates() {
							return this.fvar().axes.reduce((e, t) => (e[t.tag] = t.defaultValue, e), {});
						}
						getDefaultInstanceIndex() {
							let e = this.getDefaultCoordinates(), t = this.getInstanceIndex(e);
							return t < 0 && (t = this.fvar().instances.findIndex((e) => e.name && e.name.en === "Regular")), t;
						}
						getInstanceIndex(e) {
							return this.fvar().instances.findIndex((t) => Object.keys(e).every((n) => t.coordinates[n] === e[n]));
						}
						getInstance(e) {
							return this.fvar().instances && this.fvar().instances[e];
						}
						set(e) {
							let t;
							if (Number.isInteger(e)) {
								let n = this.getInstance(e);
								if (!n) throw Error(`Invalid instance index ${e}`);
								t = { ...n.coordinates };
							} else t = e, this.process.normalizeCoordTags(t);
							t = Object.assign({}, this.font.defaultRenderOptions.variation, t), this.font.defaultRenderOptions = Object.assign({}, this.font.defaultRenderOptions, { variation: t });
						}
						get() {
							return Object.assign({}, this.font.defaultRenderOptions.variation);
						}
						avar() {
							return this.font.tables.avar;
						}
						cvar() {
							return this.font.tables.cvar;
						}
						fvar() {
							return this.font.tables.fvar;
						}
						gvar() {
							return this.font.tables.gvar;
						}
						hvar() {
							return this.font.tables.hvar;
						}
					}, ap = 1e6, op = 1e4;
					function sp(e) {
						this.font = e, this.getCommands = function(e) {
							return np.getPath(e).commands;
						}, this._fpgmState = this._prepState = void 0, this._errorState = 0;
					}
					function cp(e) {
						return e;
					}
					function lp(e) {
						return Math.sign(e) * Math.round(Math.abs(e));
					}
					function up(e) {
						return Math.sign(e) * Math.round(Math.abs(2 * e)) / 2;
					}
					function dp(e) {
						return Math.sign(e) * (Math.round(Math.abs(e) + .5) - .5);
					}
					function fp(e) {
						return Math.sign(e) * Math.ceil(Math.abs(e));
					}
					function pp(e) {
						return Math.sign(e) * Math.floor(Math.abs(e));
					}
					var mp = function(e) {
						let t = this.srPeriod, n = this.srPhase, r = 1;
						return e < 0 && (e = -e, r = -1), e += this.srThreshold - n, e = Math.trunc(e / t) * t, (e += n) < 0 ? n * r : e * r;
					}, hp = {
						x: 1,
						y: 0,
						axis: "x",
						distance: function(e, t, n, r) {
							return (n ? e.xo : e.x) - (r ? t.xo : t.x);
						},
						interpolate: function(e, t, n, r) {
							let i, o, s, p, S, T, k;
							if (!r || r === this) return i = e.xo - t.xo, o = e.xo - n.xo, S = t.x - t.xo, T = n.x - n.xo, s = Math.abs(i), p = Math.abs(o), k = s + p, k === 0 ? void (e.x = e.xo + (S + T) / 2) : void (e.x = e.xo + (S * p + T * s) / k);
							i = r.distance(e, t, !0, !0), o = r.distance(e, n, !0, !0), S = r.distance(t, t, !1, !0), T = r.distance(n, n, !1, !0), s = Math.abs(i), p = Math.abs(o), k = s + p, k === 0 ? hp.setRelative(e, e, (S + T) / 2, r, !0) : hp.setRelative(e, e, (S * p + T * s) / k, r, !0);
						},
						normalSlope: -Infinity,
						setRelative: function(e, t, n, r, i) {
							if (!r || r === this) return void (e.x = (i ? t.xo : t.x) + n);
							let o = i ? t.xo : t.x, s = i ? t.yo : t.y, p = o + n * r.x, S = s + n * r.y;
							e.x = p + (e.y - S) / r.normalSlope;
						},
						slope: 0,
						touch: function(e) {
							e.xTouched = !0;
						},
						touched: function(e) {
							return e.xTouched;
						},
						untouch: function(e) {
							e.xTouched = !1;
						}
					}, gp = {
						x: 0,
						y: 1,
						axis: "y",
						distance: function(e, t, n, r) {
							return (n ? e.yo : e.y) - (r ? t.yo : t.y);
						},
						interpolate: function(e, t, n, r) {
							let i, o, s, p, S, T, k;
							if (!r || r === this) return i = e.yo - t.yo, o = e.yo - n.yo, S = t.y - t.yo, T = n.y - n.yo, s = Math.abs(i), p = Math.abs(o), k = s + p, k === 0 ? void (e.y = e.yo + (S + T) / 2) : void (e.y = e.yo + (S * p + T * s) / k);
							i = r.distance(e, t, !0, !0), o = r.distance(e, n, !0, !0), S = r.distance(t, t, !1, !0), T = r.distance(n, n, !1, !0), s = Math.abs(i), p = Math.abs(o), k = s + p, k === 0 ? gp.setRelative(e, e, (S + T) / 2, r, !0) : gp.setRelative(e, e, (S * p + T * s) / k, r, !0);
						},
						normalSlope: 0,
						setRelative: function(e, t, n, r, i) {
							if (!r || r === this) return void (e.y = (i ? t.yo : t.y) + n);
							let o = i ? t.xo : t.x, s = i ? t.yo : t.y, p = o + n * r.x;
							e.y = s + n * r.y + r.normalSlope * (e.x - p);
						},
						slope: Infinity,
						touch: function(e) {
							e.yTouched = !0;
						},
						touched: function(e) {
							return e.yTouched;
						},
						untouch: function(e) {
							e.yTouched = !1;
						}
					};
					function _p(e, t) {
						this.x = e, this.y = t, this.axis = void 0, this.slope = t / e, this.normalSlope = -e / t, Object.freeze(this);
					}
					function vp(e, t) {
						let n = Math.sqrt(e * e + t * t);
						return t /= n, (e /= n) === 1 && t === 0 ? hp : e === 0 && t === 1 ? gp : new _p(e, t);
					}
					function yp(e, t, n, r) {
						this.x = this.xo = Math.round(64 * e) / 64, this.y = this.yo = Math.round(64 * t) / 64, this.lastPointOfContour = n, this.onCurve = r, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = !1, this.yTouched = !1, Object.preventExtensions(this);
					}
					Object.freeze(hp), Object.freeze(gp), _p.prototype.distance = function(e, t, n, r) {
						return this.x * hp.distance(e, t, n, r) + this.y * gp.distance(e, t, n, r);
					}, _p.prototype.interpolate = function(e, t, n, r) {
						let i, o, s, p, S, T, k;
						s = r.distance(e, t, !0, !0), p = r.distance(e, n, !0, !0), i = r.distance(t, t, !1, !0), o = r.distance(n, n, !1, !0), S = Math.abs(s), T = Math.abs(p), k = S + T, k === 0 ? this.setRelative(e, e, (i + o) / 2, r, !0) : this.setRelative(e, e, (i * T + o * S) / k, r, !0);
					}, _p.prototype.setRelative = function(e, t, n, r, i) {
						r ||= this;
						let o = i ? t.xo : t.x, s = i ? t.yo : t.y, p = o + n * r.x, S = s + n * r.y, T = r.normalSlope, k = this.slope, A = e.x, Sl = e.y;
						e.x = (k * A - T * p + S - Sl) / (k - T), e.y = k * (e.x - A) + Sl;
					}, _p.prototype.touch = function(e) {
						e.xTouched = !0, e.yTouched = !0;
					}, yp.prototype.nextTouched = function(e) {
						let t = this.nextPointOnContour;
						for (; !e.touched(t) && t !== this;) t = t.nextPointOnContour;
						return t;
					}, yp.prototype.prevTouched = function(e) {
						let t = this.prevPointOnContour;
						for (; !e.touched(t) && t !== this;) t = t.prevPointOnContour;
						return t;
					};
					var bp = Object.freeze(new yp(0, 0)), xp = {
						cvCutIn: 17 / 16,
						deltaBase: 9,
						deltaShift: .125,
						loop: 1,
						minDis: 1,
						autoFlip: !0
					};
					function Sp(e, t) {
						switch (this.env = e, this.stack = [], this.prog = t, e) {
							case "glyf": this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;
							case "prep": this.fv = this.pv = this.dpv = hp, this.round = lp;
						}
					}
					function Cp(e) {
						let t = e.tZone = Array(e.gZone.length);
						for (let e = 0; e < t.length; e++) t[e] = new yp(0, 0);
					}
					function wp(e, t) {
						let n = e.prog, r, i = e.ip, o = 1;
						do
							if (r = n[++i], r === 88) o++;
							else if (r === 89) o--;
							else if (r === 64) i += n[i + 1] + 1;
							else if (r === 65) i += 2 * n[i + 1] + 1;
							else if (r >= 176 && r <= 183) i += r - 176 + 1;
							else if (r >= 184 && r <= 191) i += 2 * (r - 184 + 1);
							else if (t && o === 1 && r === 27) break;
						while (o > 0);
						e.ip = i;
					}
					function Tp(e, t) {
						t.fv = t.pv = t.dpv = e;
					}
					function Ep(e, t) {
						t.pv = t.dpv = e;
					}
					function Dp(e, t) {
						t.fv = e;
					}
					function Op(e, t) {
						let n = t.stack, r = n.pop(), i = n.pop(), o = t.z2[r], s = t.z1[i], p, S;
						e ? (p = o.y - s.y, S = s.x - o.x) : (p = s.x - o.x, S = s.y - o.y), t.pv = t.dpv = vp(p, S);
					}
					function kp(e, t) {
						let n = t.stack, r = n.pop(), i = n.pop(), o = t.z2[r], s = t.z1[i], p, S;
						e ? (p = o.y - s.y, S = s.x - o.x) : (p = s.x - o.x, S = s.y - o.y), t.fv = vp(p, S);
					}
					function Ap(e) {
						e.stack.pop();
					}
					function jp(e, t) {
						let n = t.stack.pop(), r = t.z0[n], i = t.fv, o = t.pv, s = o.distance(r, bp);
						e && (s = t.round(s)), i.setRelative(r, bp, s, o), i.touch(r), t.rp0 = t.rp1 = n;
					}
					function Mp(e, t) {
						let n = t.z2, r = n.length - 2, i, o, s;
						for (let t = 0; t < r; t++) i = n[t], e.touched(i) || (o = i.prevTouched(e), o !== i && (s = i.nextTouched(e), o === s && e.setRelative(i, i, e.distance(o, o, !1, !0), e, !0), e.interpolate(i, o, s, e)));
					}
					function Np(e, t) {
						let n = t.stack, r = e ? t.rp1 : t.rp2, i = (e ? t.z0 : t.z1)[r], o = t.fv, s = t.pv, p = t.loop, S = t.z2;
						for (; p--;) {
							let e = S[n.pop()], t = s.distance(i, i, !1, !0);
							o.setRelative(e, e, t, s), o.touch(e);
						}
						t.loop = 1;
					}
					function Pp(e, t) {
						let n = t.stack, r = e ? t.rp1 : t.rp2, i = (e ? t.z0 : t.z1)[r], o = t.fv, s = t.pv, p = n.pop(), S = t.z2[t.contours[p]], T = S, k = s.distance(i, i, !1, !0);
						do
							T !== i && o.setRelative(T, T, k, s), T = T.nextPointOnContour;
						while (T !== S);
					}
					function Fp(e, t) {
						let n = t.stack, r = e ? t.rp1 : t.rp2, i = (e ? t.z0 : t.z1)[r], o = t.fv, s = t.pv, p, S;
						switch (n.pop()) {
							case 0:
								p = t.tZone;
								break;
							case 1:
								p = t.gZone;
								break;
							default: throw Error("Invalid zone");
						}
						let T = s.distance(i, i, !1, !0), k = p.length - 2;
						for (let e = 0; e < k; e++) S = p[e], o.setRelative(S, S, T, s);
					}
					function Ip(e, t) {
						let n = t.stack, r = n.pop() / 64, i = n.pop(), o = t.z1[i], s = t.z0[t.rp0], p = t.fv, S = t.pv;
						p.setRelative(o, s, r, S), p.touch(o), t.rp1 = t.rp0, t.rp2 = i, e && (t.rp0 = i);
					}
					function Lp(e, t) {
						let n = t.stack, r = n.pop(), i = n.pop(), o = t.z0[i], s = t.fv, p = t.pv, S = t.cvt[r], T = p.distance(o, bp);
						e && (Math.abs(T - S) < t.cvCutIn && (T = S), T = t.round(T)), s.setRelative(o, bp, T, p), t.zp0 === 0 && (o.xo = o.x, o.yo = o.y), s.touch(o), t.rp0 = t.rp1 = i;
					}
					function Rp(e, t) {
						let n = t.stack, r = n.pop(), i = t.z2[r];
						n.push(64 * t.dpv.distance(i, bp, e, !1));
					}
					function zp(e, t) {
						let n = t.stack, r = n.pop(), i = n.pop(), o = t.z1[r], s = t.z0[i], p = t.dpv.distance(s, o, e, e);
						t.stack.push(Math.round(64 * p));
					}
					function Bp(e, t) {
						let n = t.stack, r = n.pop(), i = t.fv, o = t.pv, s = t.ppem, p = t.deltaBase + 16 * (e - 1), S = t.deltaShift, T = t.z0;
						for (let e = 0; e < r; e++) {
							let e = n.pop(), t = n.pop();
							if (p + ((240 & t) >> 4) !== s) continue;
							let r = (15 & t) - 8;
							r >= 0 && r++;
							let k = T[e];
							i.setRelative(k, k, r * S, o);
						}
					}
					function Vp(e, t) {
						let n = t.stack, r = n.pop();
						n.push(64 * t.round(r / 64));
					}
					function Hp(e, t) {
						let n = t.stack, r = n.pop(), i = t.ppem, o = t.deltaBase + 16 * (e - 1), s = t.deltaShift;
						for (let e = 0; e < r; e++) {
							let e = n.pop(), r = n.pop();
							if (o + ((240 & r) >> 4) !== i) continue;
							let p = (15 & r) - 8;
							p >= 0 && p++;
							let S = p * s;
							t.cvt[e] += S;
						}
					}
					function Up(e, t) {
						let n = t.stack, r = n.pop(), i = n.pop(), o = t.z2[r], s = t.z1[i], p, S;
						e ? (p = o.y - s.y, S = s.x - o.x) : (p = s.x - o.x, S = s.y - o.y), t.dpv = vp(p, S);
					}
					function Wp(e, t) {
						let n = t.stack, r = t.prog, i = t.ip;
						for (let t = 0; t < e; t++) n.push(r[++i]);
						t.ip = i;
					}
					function Gp(e, t) {
						let n = t.ip, r = t.prog, i = t.stack;
						for (let t = 0; t < e; t++) {
							let e = r[++n] << 8 | r[++n];
							32768 & e && (e = -(1 + (65535 ^ e))), i.push(e);
						}
						t.ip = n;
					}
					function Kp(e, t, n, r, i, o) {
						let s = o.stack, p = e && s.pop(), S = s.pop(), T = o.rp0, k = o.z0[T], A = o.z1[S], Sl = o.minDis, Cl = o.fv, wl = o.dpv, Tl, El, Dl;
						Tl = wl.distance(A, k, !0, !0), El = Tl >= 0 ? 1 : -1, Tl = Math.abs(Tl), e && (Dl = o.cvt[p], r && Math.abs(Tl - Dl) < o.cvCutIn && (Tl = Dl)), n && Tl < Sl && (Tl = Sl), r && (Tl = o.round(Tl)), Cl.setRelative(A, k, El * Tl, wl), Cl.touch(A), o.rp1 = o.rp0, o.rp2 = S, t && (o.rp0 = S);
					}
					sp.prototype.exec = function(e, t) {
						if (typeof t != "number") throw Error("Point size is not a number!");
						if (this._errorState > 2) return;
						let n = this.font, r = this._prepState;
						if (!r || r.ppem !== t) {
							let e = this._fpgmState;
							if (!e) {
								Sp.prototype = xp, e = this._fpgmState = new Sp("fpgm", n.tables.fpgm), e.funcs = [], e.font = n, e.instructionCount = 0, e.callDepth = 0;
								try {
									$f(e);
								} catch (e) {
									console.log("Hinting error in FPGM:" + e), this._errorState = 3;
									return;
								}
							}
							Sp.prototype = e, r = this._prepState = new Sp("prep", n.tables.prep), r.ppem = t, r.instructionCount = 0, r.callDepth = 0;
							let i = n.variation && n.variation.process.getCvarTransform() || n.tables.cvt;
							if (i) {
								let e = r.cvt = Array(i.length), o = t / n.unitsPerEm;
								for (let t = 0; t < i.length; t++) e[t] = i[t] * o;
							} else r.cvt = [];
							try {
								$f(r);
							} catch (e) {
								this._errorState < 2 && console.log("Hinting error in PREP:" + e), this._errorState = 2;
							}
						}
						if (!(this._errorState > 1)) try {
							return ep(e, r);
						} catch (e) {
							this._errorState < 1 && (console.log("Hinting error:" + e), console.log("Note: further hinting errors are silenced")), this._errorState = 1;
							return;
						}
					}, ep = function(e, t) {
						let n = t.ppem / t.font.unitsPerEm, r = n, i, o, s, p = e.components;
						if (Sp.prototype = t, p) {
							let S = t.font;
							o = [], i = [];
							for (let e = 0; e < p.length; e++) {
								let t = p[e], T = S.glyphs.get(t.glyphIndex);
								s = new Sp("glyf", T.instructions), s.instructionCount = 0, s.callDepth = 0, tp(T, s, n, r);
								let k = Math.round(t.dx * n), A = Math.round(t.dy * r), Sl = s.gZone, Cl = s.contours;
								for (let e = 0; e < Sl.length; e++) {
									let t = Sl[e];
									t.xTouched = t.yTouched = !1, t.xo = t.x += k, t.yo = t.y += A;
								}
								let wl = o.length;
								o.push.apply(o, Sl);
								for (let e = 0; e < Cl.length; e++) i.push(Cl[e] + wl);
							}
							e.instructions && !s.inhibitGridFit && (s = new Sp("glyf", e.instructions), s.gZone = s.z0 = s.z1 = s.z2 = o, s.contours = i, o.push(new yp(0, 0), new yp(Math.round(e.advanceWidth * n), 0)), $f(s), o.length -= 2);
						} else s = new Sp("glyf", e.instructions), s.instructionCount = 0, s.callDepth = 0, tp(e, s, n, r), o = s.gZone;
						return o;
					}, tp = function(e, t, n, r) {
						let i = e.points || [], o = i.length, s = t.gZone = t.z0 = t.z1 = t.z2 = [], p = t.contours = [], S, T, k;
						for (let e = 0; e < o; e++) S = i[e], s[e] = new yp(S.x * n, S.y * r, S.lastPointOfContour, S.onCurve);
						for (let e = 0; e < o; e++) S = s[e], T || (T = S, p.push(e)), S.lastPointOfContour ? (S.nextPointOnContour = T, T.prevPointOnContour = S, T = void 0) : (k = s[e + 1], S.nextPointOnContour = k, k.prevPointOnContour = S);
						t.inhibitGridFit || (s.push(new yp(0, 0), new yp(Math.round(e.advanceWidth * n), 0)), $f(t), s.length -= 2);
					}, $f = function(e) {
						let t = e.prog;
						if (!t) return;
						let n = t.length, r;
						for (e.ip = 0; e.ip < n; e.ip++) {
							if (++e.instructionCount > ap) throw Error("Hinting instructions exceeded maximum of " + ap);
							if (r = Qf[t[e.ip]], !r) throw Error("unknown instruction: 0x" + Number(t[e.ip]).toString(16));
							r(e);
						}
					}, Qf = [
						Tp.bind(void 0, gp),
						Tp.bind(void 0, hp),
						Ep.bind(void 0, gp),
						Ep.bind(void 0, hp),
						Dp.bind(void 0, gp),
						Dp.bind(void 0, hp),
						Op.bind(void 0, 0),
						Op.bind(void 0, 1),
						kp.bind(void 0, 0),
						kp.bind(void 0, 1),
						function(e) {
							let t = e.stack, n = t.pop();
							e.pv = e.dpv = vp(t.pop(), n);
						},
						function(e) {
							let t = e.stack, n = t.pop();
							e.fv = vp(t.pop(), n);
						},
						function(e) {
							let t = e.stack, n = e.pv;
							t.push(16384 * n.x), t.push(16384 * n.y);
						},
						function(e) {
							let t = e.stack, n = e.fv;
							t.push(16384 * n.x), t.push(16384 * n.y);
						},
						function(e) {
							e.fv = e.pv;
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop(), i = t.pop(), o = t.pop(), s = t.pop(), p = e.z0, S = e.z1, T = p[n], k = p[r], A = S[i], Sl = S[o], Cl = e.z2[s], wl = T.x, Tl = T.y, El = k.x, Dl = k.y, Ol = A.x, kl = A.y, Al = Sl.x, jl = Sl.y, Ml = (wl - El) * (kl - jl) - (Tl - Dl) * (Ol - Al), Nl = wl * Dl - Tl * El, Pl = Ol * jl - kl * Al;
							Cl.x = (Nl * (Ol - Al) - Pl * (wl - El)) / Ml, Cl.y = (Nl * (kl - jl) - Pl * (Tl - Dl)) / Ml;
						},
						function(e) {
							e.rp0 = e.stack.pop();
						},
						function(e) {
							e.rp1 = e.stack.pop();
						},
						function(e) {
							e.rp2 = e.stack.pop();
						},
						function(e) {
							let t = e.stack.pop();
							switch (e.zp0 = t, t) {
								case 0:
									e.tZone || Cp(e), e.z0 = e.tZone;
									break;
								case 1:
									e.z0 = e.gZone;
									break;
								default: throw Error("Invalid zone pointer");
							}
						},
						function(e) {
							let t = e.stack.pop();
							switch (e.zp1 = t, t) {
								case 0:
									e.tZone || Cp(e), e.z1 = e.tZone;
									break;
								case 1:
									e.z1 = e.gZone;
									break;
								default: throw Error("Invalid zone pointer");
							}
						},
						function(e) {
							let t = e.stack.pop();
							switch (e.zp2 = t, t) {
								case 0:
									e.tZone || Cp(e), e.z2 = e.tZone;
									break;
								case 1:
									e.z2 = e.gZone;
									break;
								default: throw Error("Invalid zone pointer");
							}
						},
						function(e) {
							let t = e.stack.pop();
							switch (e.zp0 = e.zp1 = e.zp2 = t, t) {
								case 0:
									e.tZone || Cp(e), e.z0 = e.z1 = e.z2 = e.tZone;
									break;
								case 1:
									e.z0 = e.z1 = e.z2 = e.gZone;
									break;
								default: throw Error("Invalid zone pointer");
							}
						},
						function(e) {
							e.loop = e.stack.pop(), e.loop > op && (e.loop = op);
						},
						function(e) {
							e.round = lp;
						},
						function(e) {
							e.round = dp;
						},
						function(e) {
							e.minDis = e.stack.pop() / 64;
						},
						function(e) {
							wp(e, !1);
						},
						function(e) {
							let t = e.stack.pop();
							e.ip += t - 1;
						},
						function(e) {
							e.cvCutIn = e.stack.pop() / 64;
						},
						void 0,
						void 0,
						function(e) {
							let t = e.stack;
							t.push(t[t.length - 1]);
						},
						Ap,
						function(e) {
							e.stack.length = 0;
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(n), t.push(r);
						},
						function(e) {
							let t = e.stack;
							t.push(t.length);
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(t[t.length - n]);
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(t.splice(t.length - n, 1)[0]);
						},
						void 0,
						void 0,
						void 0,
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							if (r > op && (r = op), ++e.callDepth > 64) throw Error("Hinting call depth exceeded maximum of 64");
							let i = e.ip, o = e.prog;
							e.prog = e.funcs[n];
							for (let t = 0; t < r; t++) $f(e);
							e.ip = i, e.prog = o, e.callDepth--;
						},
						function(e) {
							let t = e.stack.pop();
							if (++e.callDepth > 64) throw Error("Hinting call depth exceeded maximum of 64");
							let n = e.ip, r = e.prog;
							e.prog = e.funcs[t], $f(e), e.ip = n, e.prog = r, e.callDepth--;
						},
						function(e) {
							if (e.env !== "fpgm") throw Error("FDEF not allowed here");
							let t = e.stack, n = e.prog, r = e.ip, i = t.pop(), o = r;
							for (; n[++r] !== 45;);
							e.ip = r, e.funcs[i] = n.slice(o + 1, r);
						},
						void 0,
						jp.bind(void 0, 0),
						jp.bind(void 0, 1),
						Mp.bind(void 0, gp),
						Mp.bind(void 0, hp),
						Np.bind(void 0, 0),
						Np.bind(void 0, 1),
						Pp.bind(void 0, 0),
						Pp.bind(void 0, 1),
						Fp.bind(void 0, 0),
						Fp.bind(void 0, 1),
						function(e) {
							let t = e.stack, n = e.loop, r = e.fv, i = t.pop() / 64, o = e.z2;
							for (; n--;) {
								let e = o[t.pop()];
								r.setRelative(e, e, i), r.touch(e);
							}
							e.loop = 1;
						},
						function(e) {
							let t = e.stack, n = e.rp1, r = e.rp2, i = e.loop, o = e.z0[n], s = e.z1[r], p = e.fv, S = e.dpv, T = e.z2;
							for (; i--;) {
								let e = T[t.pop()];
								p.interpolate(e, o, s, S), p.touch(e);
							}
							e.loop = 1;
						},
						Ip.bind(void 0, 0),
						Ip.bind(void 0, 1),
						function(e) {
							let t = e.stack, n = e.rp0, r = e.z0[n], i = e.loop, o = e.fv, s = e.pv, p = e.z1;
							for (; i--;) {
								let e = p[t.pop()];
								o.setRelative(e, r, 0, s), o.touch(e);
							}
							e.loop = 1;
						},
						function(e) {
							e.round = up;
						},
						Lp.bind(void 0, 0),
						Lp.bind(void 0, 1),
						function(e) {
							let t = e.prog, n = e.ip, r = e.stack, i = t[++n];
							for (let e = 0; e < i; e++) r.push(t[++n]);
							e.ip = n;
						},
						function(e) {
							let t = e.ip, n = e.prog, r = e.stack, i = n[++t];
							for (let e = 0; e < i; e++) {
								let e = n[++t] << 8 | n[++t];
								32768 & e && (e = -(1 + (65535 ^ e))), r.push(e);
							}
							e.ip = t;
						},
						function(e) {
							let t = e.stack, n = e.store;
							n ||= e.store = [];
							let r = t.pop();
							n[t.pop()] = r;
						},
						function(e) {
							let t = e.stack, n = e.store, r = t.pop(), i = n && n[r] || 0;
							t.push(i);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							e.cvt[r] = n / 64;
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(64 * e.cvt[n]);
						},
						Rp.bind(void 0, 0),
						Rp.bind(void 0, 1),
						void 0,
						zp.bind(void 0, 0),
						zp.bind(void 0, 1),
						function(e) {
							e.stack.push(e.ppem);
						},
						void 0,
						function(e) {
							e.autoFlip = !0;
						},
						void 0,
						void 0,
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(r < n ? 1 : 0);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(r <= n ? 1 : 0);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(r > n ? 1 : 0);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(r >= n ? 1 : 0);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(n === r ? 1 : 0);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(n === r ? 0 : 1);
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(1 & Math.trunc(n) ? 1 : 0);
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(1 & Math.trunc(n) ? 0 : 1);
						},
						function(e) {
							e.stack.pop() || wp(e, !0);
						},
						function(e) {},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(n && r ? 1 : 0);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(n || r ? 1 : 0);
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(n ? 0 : 1);
						},
						Bp.bind(void 0, 1),
						function(e) {
							e.deltaBase = e.stack.pop();
						},
						function(e) {
							e.deltaShift = .5 ** e.stack.pop();
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(r + n);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(r - n);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(64 * r / n);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(r * n / 64);
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(Math.abs(n));
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(-n);
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(64 * Math.floor(n / 64));
						},
						function(e) {
							let t = e.stack, n = t.pop();
							t.push(64 * Math.ceil(n / 64));
						},
						Vp.bind(void 0, 0),
						Vp.bind(void 0, 1),
						Vp.bind(void 0, 2),
						Vp.bind(void 0, 3),
						void 0,
						void 0,
						void 0,
						void 0,
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							e.cvt[r] = n * e.ppem / e.font.unitsPerEm;
						},
						Bp.bind(void 0, 2),
						Bp.bind(void 0, 3),
						Hp.bind(void 0, 1),
						Hp.bind(void 0, 2),
						Hp.bind(void 0, 3),
						function(e) {
							let t, n = e.stack.pop();
							switch (e.round = mp, 192 & n) {
								case 0:
									t = .5;
									break;
								case 64:
									t = 1;
									break;
								case 128:
									t = 2;
									break;
								default: throw Error("invalid SROUND value");
							}
							switch (e.srPeriod = t, 48 & n) {
								case 0:
									e.srPhase = 0;
									break;
								case 16:
									e.srPhase = .25 * t;
									break;
								case 32:
									e.srPhase = .5 * t;
									break;
								case 48:
									e.srPhase = .75 * t;
									break;
								default: throw Error("invalid SROUND value");
							}
							n &= 15, e.srThreshold = n === 0 ? 0 : (n / 8 - .5) * t;
						},
						function(e) {
							let t, n = e.stack.pop();
							switch (e.round = mp, 192 & n) {
								case 0:
									t = Math.sqrt(2) / 2;
									break;
								case 64:
									t = Math.sqrt(2);
									break;
								case 128:
									t = 2 * Math.sqrt(2);
									break;
								default: throw Error("invalid S45ROUND value");
							}
							switch (e.srPeriod = t, 48 & n) {
								case 0:
									e.srPhase = 0;
									break;
								case 16:
									e.srPhase = .25 * t;
									break;
								case 32:
									e.srPhase = .5 * t;
									break;
								case 48:
									e.srPhase = .75 * t;
									break;
								default: throw Error("invalid S45ROUND value");
							}
							n &= 15, e.srThreshold = n === 0 ? 0 : (n / 8 - .5) * t;
						},
						void 0,
						void 0,
						function(e) {
							e.round = cp;
						},
						void 0,
						function(e) {
							e.round = fp;
						},
						function(e) {
							e.round = pp;
						},
						Ap,
						Ap,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						function(e) {
							e.stack.pop();
						},
						Up.bind(void 0, 0),
						Up.bind(void 0, 1),
						function(e) {
							let t = e.stack, n = t.pop(), r = 0;
							1 & n && (r = 35), 32 & n && (r |= 4096), t.push(r);
						},
						void 0,
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop(), i = t.pop();
							t.push(r), t.push(n), t.push(i);
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(Math.max(r, n));
						},
						function(e) {
							let t = e.stack, n = t.pop(), r = t.pop();
							t.push(Math.min(r, n));
						},
						function(e) {
							e.stack.pop();
						},
						function(e) {
							let t = e.stack.pop(), n = e.stack.pop();
							switch (t) {
								case 1:
									e.inhibitGridFit = !!n;
									return;
								case 2:
									e.ignoreCvt = !!n;
									return;
								default: throw Error("invalid INSTCTRL[] selector");
							}
						},
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						void 0,
						Wp.bind(void 0, 1),
						Wp.bind(void 0, 2),
						Wp.bind(void 0, 3),
						Wp.bind(void 0, 4),
						Wp.bind(void 0, 5),
						Wp.bind(void 0, 6),
						Wp.bind(void 0, 7),
						Wp.bind(void 0, 8),
						Gp.bind(void 0, 1),
						Gp.bind(void 0, 2),
						Gp.bind(void 0, 3),
						Gp.bind(void 0, 4),
						Gp.bind(void 0, 5),
						Gp.bind(void 0, 6),
						Gp.bind(void 0, 7),
						Gp.bind(void 0, 8),
						Kp.bind(void 0, 0, 0, 0, 0, 0),
						Kp.bind(void 0, 0, 0, 0, 0, 1),
						Kp.bind(void 0, 0, 0, 0, 0, 2),
						Kp.bind(void 0, 0, 0, 0, 0, 3),
						Kp.bind(void 0, 0, 0, 0, 1, 0),
						Kp.bind(void 0, 0, 0, 0, 1, 1),
						Kp.bind(void 0, 0, 0, 0, 1, 2),
						Kp.bind(void 0, 0, 0, 0, 1, 3),
						Kp.bind(void 0, 0, 0, 1, 0, 0),
						Kp.bind(void 0, 0, 0, 1, 0, 1),
						Kp.bind(void 0, 0, 0, 1, 0, 2),
						Kp.bind(void 0, 0, 0, 1, 0, 3),
						Kp.bind(void 0, 0, 0, 1, 1, 0),
						Kp.bind(void 0, 0, 0, 1, 1, 1),
						Kp.bind(void 0, 0, 0, 1, 1, 2),
						Kp.bind(void 0, 0, 0, 1, 1, 3),
						Kp.bind(void 0, 0, 1, 0, 0, 0),
						Kp.bind(void 0, 0, 1, 0, 0, 1),
						Kp.bind(void 0, 0, 1, 0, 0, 2),
						Kp.bind(void 0, 0, 1, 0, 0, 3),
						Kp.bind(void 0, 0, 1, 0, 1, 0),
						Kp.bind(void 0, 0, 1, 0, 1, 1),
						Kp.bind(void 0, 0, 1, 0, 1, 2),
						Kp.bind(void 0, 0, 1, 0, 1, 3),
						Kp.bind(void 0, 0, 1, 1, 0, 0),
						Kp.bind(void 0, 0, 1, 1, 0, 1),
						Kp.bind(void 0, 0, 1, 1, 0, 2),
						Kp.bind(void 0, 0, 1, 1, 0, 3),
						Kp.bind(void 0, 0, 1, 1, 1, 0),
						Kp.bind(void 0, 0, 1, 1, 1, 1),
						Kp.bind(void 0, 0, 1, 1, 1, 2),
						Kp.bind(void 0, 0, 1, 1, 1, 3),
						Kp.bind(void 0, 1, 0, 0, 0, 0),
						Kp.bind(void 0, 1, 0, 0, 0, 1),
						Kp.bind(void 0, 1, 0, 0, 0, 2),
						Kp.bind(void 0, 1, 0, 0, 0, 3),
						Kp.bind(void 0, 1, 0, 0, 1, 0),
						Kp.bind(void 0, 1, 0, 0, 1, 1),
						Kp.bind(void 0, 1, 0, 0, 1, 2),
						Kp.bind(void 0, 1, 0, 0, 1, 3),
						Kp.bind(void 0, 1, 0, 1, 0, 0),
						Kp.bind(void 0, 1, 0, 1, 0, 1),
						Kp.bind(void 0, 1, 0, 1, 0, 2),
						Kp.bind(void 0, 1, 0, 1, 0, 3),
						Kp.bind(void 0, 1, 0, 1, 1, 0),
						Kp.bind(void 0, 1, 0, 1, 1, 1),
						Kp.bind(void 0, 1, 0, 1, 1, 2),
						Kp.bind(void 0, 1, 0, 1, 1, 3),
						Kp.bind(void 0, 1, 1, 0, 0, 0),
						Kp.bind(void 0, 1, 1, 0, 0, 1),
						Kp.bind(void 0, 1, 1, 0, 0, 2),
						Kp.bind(void 0, 1, 1, 0, 0, 3),
						Kp.bind(void 0, 1, 1, 0, 1, 0),
						Kp.bind(void 0, 1, 1, 0, 1, 1),
						Kp.bind(void 0, 1, 1, 0, 1, 2),
						Kp.bind(void 0, 1, 1, 0, 1, 3),
						Kp.bind(void 0, 1, 1, 1, 0, 0),
						Kp.bind(void 0, 1, 1, 1, 0, 1),
						Kp.bind(void 0, 1, 1, 1, 0, 2),
						Kp.bind(void 0, 1, 1, 1, 0, 3),
						Kp.bind(void 0, 1, 1, 1, 1, 0),
						Kp.bind(void 0, 1, 1, 1, 1, 1),
						Kp.bind(void 0, 1, 1, 1, 1, 2),
						Kp.bind(void 0, 1, 1, 1, 1, 3)
					];
					var qp = sp;
					function Jp(e) {
						this.char = e, this.state = {}, this.activeState = null;
					}
					function Yp(e, t, n) {
						this.contextName = n, this.startIndex = e, this.endOffset = t;
					}
					function Xp(e, t, n) {
						this.contextName = e, this.openRange = null, this.ranges = [], this.checkStart = t, this.checkEnd = n;
					}
					function Zp(e, t) {
						this.context = e, this.index = t, this.length = e.length, this.current = e[t], this.backtrack = e.slice(0, t), this.lookahead = e.slice(t + 1);
					}
					function Qp(e) {
						this.eventId = e, this.subscribers = [];
					}
					function $p(e) {
						let t = [
							"start",
							"end",
							"next",
							"newToken",
							"contextStart",
							"contextEnd",
							"insertToken",
							"removeToken",
							"removeRange",
							"replaceToken",
							"replaceRange",
							"composeRUD",
							"updateContextsRanges"
						];
						for (let e = 0; e < t.length; e++) {
							let n = t[e];
							Object.defineProperty(this.events, n, { value: new Qp(n) });
						}
						if (e) for (let n = 0; n < t.length; n++) {
							let r = t[n], i = e[r];
							typeof i == "function" && this.events[r].subscribe(i);
						}
						let n = [
							"insertToken",
							"removeToken",
							"removeRange",
							"replaceToken",
							"replaceRange",
							"composeRUD"
						];
						for (let e = 0; e < n.length; e++) {
							let t = n[e];
							this.events[t].subscribe(this.updateContextsRanges);
						}
					}
					function em(e) {
						this.tokens = [], this.registeredContexts = {}, this.contextCheckers = [], this.events = {}, this.registeredModifiers = [], $p.call(this, e);
					}
					Jp.prototype.setState = function(e, t) {
						return this.state[e] = t, this.activeState = {
							key: e,
							value: this.state[e]
						}, this.activeState;
					}, Jp.prototype.getState = function(e) {
						return this.state[e] || null;
					}, em.prototype.inboundIndex = function(e) {
						return e >= 0 && e < this.tokens.length;
					}, em.prototype.composeRUD = function(e) {
						let t = e.map((e) => this[e[0]].apply(this, e.slice(1).concat(!0))), n = (e) => typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "FAIL");
						if (t.every(n)) return {
							FAIL: "composeRUD: one or more operations hasn't completed successfully",
							report: t.filter(n)
						};
						this.dispatch("composeRUD", [t.filter((e) => !n(e))]);
					}, em.prototype.replaceRange = function(e, t, n, r) {
						t = t === null ? this.tokens.length : t;
						let i = n.every((e) => e instanceof Jp);
						if (!isNaN(e) && this.inboundIndex(e) && i) {
							let i = this.tokens.splice.apply(this.tokens, [e, t].concat(n));
							return r || this.dispatch("replaceToken", [
								e,
								t,
								n
							]), [i, n];
						}
						return { FAIL: "replaceRange: invalid tokens or startIndex." };
					}, em.prototype.replaceToken = function(e, t, n) {
						if (!isNaN(e) && this.inboundIndex(e) && t instanceof Jp) {
							let r = this.tokens.splice(e, 1, t);
							return n || this.dispatch("replaceToken", [e, t]), [r[0], t];
						}
						return { FAIL: "replaceToken: invalid token or index." };
					}, em.prototype.removeRange = function(e, t, n) {
						t = isNaN(t) ? this.tokens.length : t;
						let r = this.tokens.splice(e, t);
						return n || this.dispatch("removeRange", [
							r,
							e,
							t
						]), r;
					}, em.prototype.removeToken = function(e, t) {
						if (!isNaN(e) && this.inboundIndex(e)) {
							let n = this.tokens.splice(e, 1);
							return t || this.dispatch("removeToken", [n, e]), n;
						}
						return { FAIL: "removeToken: invalid token index." };
					}, em.prototype.insertToken = function(e, t, n) {
						return e.every((e) => e instanceof Jp) ? (this.tokens.splice.apply(this.tokens, [t, 0].concat(e)), n || this.dispatch("insertToken", [e, t]), e) : { FAIL: "insertToken: invalid token(s)." };
					}, em.prototype.registerModifier = function(e, t, n) {
						this.events.newToken.subscribe(function(r, i) {
							let o = [r, i], s = [r, i];
							if (t === null || !0 === t.apply(this, o)) {
								let t = n.apply(this, s);
								r.setState(e, t);
							}
						}), this.registeredModifiers.push(e);
					}, Qp.prototype.subscribe = function(e) {
						return typeof e == "function" ? this.subscribers.push(e) - 1 : { FAIL: `invalid '${this.eventId}' event handler` };
					}, Qp.prototype.unsubscribe = function(e) {
						this.subscribers.splice(e, 1);
					}, Zp.prototype.setCurrentIndex = function(e) {
						this.index = e, this.current = this.context[e], this.backtrack = this.context.slice(0, e), this.lookahead = this.context.slice(e + 1);
					}, Zp.prototype.get = function(e) {
						switch (!0) {
							case e === 0: return this.current;
							case e < 0 && Math.abs(e) <= this.backtrack.length: return this.backtrack.slice(e)[0];
							case e > 0 && e <= this.lookahead.length: return this.lookahead[e - 1];
							default: return null;
						}
					}, em.prototype.rangeToText = function(e) {
						if (e instanceof Yp) return this.getRangeTokens(e).map((e) => e.char).join("");
					}, em.prototype.getText = function() {
						return this.tokens.map((e) => e.char).join("");
					}, em.prototype.getContext = function(e) {
						return this.registeredContexts[e] || null;
					}, em.prototype.on = function(e, t) {
						let n = this.events[e];
						return n ? n.subscribe(t) : null;
					}, em.prototype.dispatch = function(e, t) {
						let n = this.events[e];
						if (n instanceof Qp) for (let e = 0; e < n.subscribers.length; e++) n.subscribers[e].apply(this, t || []);
					}, em.prototype.registerContextChecker = function(e, t, n) {
						if (this.getContext(e)) return { FAIL: `context name '${e}' is already registered.` };
						if (typeof t != "function") return { FAIL: "missing context start check." };
						if (typeof n != "function") return { FAIL: "missing context end check." };
						let r = new Xp(e, t, n);
						return this.registeredContexts[e] = r, this.contextCheckers.push(r), r;
					}, em.prototype.getRangeTokens = function(e) {
						let t = e.startIndex + e.endOffset;
						return [].concat(this.tokens.slice(e.startIndex, t));
					}, em.prototype.getContextRanges = function(e) {
						let t = this.getContext(e);
						return t ? t.ranges : { FAIL: `context checker '${e}' is not registered.` };
					}, em.prototype.resetContextsRanges = function() {
						let e = this.registeredContexts;
						for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (e[t].ranges = []);
					}, em.prototype.updateContextsRanges = function() {
						this.resetContextsRanges();
						let e = this.tokens.map((e) => e.char);
						for (let t = 0; t < e.length; t++) {
							let n = new Zp(e, t);
							this.runContextCheck(n);
						}
						this.dispatch("updateContextsRanges", [this.registeredContexts]);
					}, em.prototype.setEndOffset = function(e, t) {
						let n = new Yp(this.getContext(t).openRange.startIndex, e, t), r = this.getContext(t).ranges;
						return n.rangeId = `${t}.${r.length}`, r.push(n), this.getContext(t).openRange = null, n;
					}, em.prototype.runContextCheck = function(e) {
						let t = e.index;
						for (let n = 0; n < this.contextCheckers.length; n++) {
							let r = this.contextCheckers[n], i = r.contextName, o = this.getContext(i).openRange;
							if (!o && r.checkStart(e) && (o = new Yp(t, null, i), this.getContext(i).openRange = o, this.dispatch("contextStart", [i, t])), o && r.checkEnd(e)) {
								let e = t - o.startIndex + 1, n = this.setEndOffset(e, i);
								this.dispatch("contextEnd", [i, n]);
							}
						}
					}, em.prototype.tokenize = function(e) {
						this.tokens = [], this.resetContextsRanges();
						let t = Array.from(e);
						this.dispatch("start");
						for (let e = 0; e < t.length; e++) {
							let n = t[e], r = new Zp(t, e);
							this.dispatch("next", [r]), this.runContextCheck(r);
							let i = new Jp(n);
							this.tokens.push(i), this.dispatch("newToken", [i, r]);
						}
						return this.dispatch("end", [this.tokens]), this.tokens;
					};
					var tm = em;
					function nm(e) {
						return /[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e);
					}
					function rm(e) {
						return /[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(e);
					}
					function im(e) {
						return /[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e);
					}
					function am(e) {
						return /[\u0E00-\u0E7F]/.test(e);
					}
					function om(e) {
						return /[A-z]/.test(e);
					}
					function sm(e) {
						this.font = e, this.features = {};
					}
					function cm(e) {
						this.id = e.id, this.tag = e.tag, this.substitution = e.substitution;
					}
					function lm(e, t) {
						if (!e) return -1;
						switch (t.format) {
							case 1: return t.glyphs.indexOf(e);
							case 2: {
								let n = t.ranges;
								for (let t = 0; t < n.length; t++) {
									let r = n[t];
									if (e >= r.start && e <= r.end) {
										let t = e - r.start;
										return r.index + t;
									}
								}
								break;
							}
							default: return -1;
						}
						return -1;
					}
					function um(e, t) {
						return lm(e, t.coverage) === -1 ? null : e + t.deltaGlyphId;
					}
					function dm(e, t) {
						let n = lm(e, t.coverage);
						return n === -1 ? null : t.substitute[n];
					}
					function fm(e, t) {
						let n = [];
						for (let r = 0; r < e.length; r++) {
							let i = e[r], o = t.current;
							o = Array.isArray(o) ? o[0] : o;
							let s = lm(o, i);
							s !== -1 && n.push(s);
						}
						return n.length === e.length ? n : -1;
					}
					function pm(e, t) {
						let n = t.inputCoverage.length + t.lookaheadCoverage.length + t.backtrackCoverage.length;
						if (e.context.length < n) return [];
						let r = fm(t.inputCoverage, e);
						if (r === -1) return [];
						let i = t.inputCoverage.length - 1;
						if (e.lookahead.length < t.lookaheadCoverage.length) return [];
						let o = e.lookahead.slice(i);
						for (; o.length && im(o[0].char);) o.shift();
						let s = new Zp(o, 0), p = fm(t.lookaheadCoverage, s), S = [].concat(e.backtrack);
						for (S.reverse(); S.length && im(S[0].char);) S.shift();
						if (S.length < t.backtrackCoverage.length) return [];
						let T = new Zp(S, 0), k = fm(t.backtrackCoverage, T), A = [];
						if (r.length === t.inputCoverage.length && p.length === t.lookaheadCoverage.length && k.length === t.backtrackCoverage.length) for (let n = 0; n < t.lookupRecords.length; n++) {
							let r = t.lookupRecords[n], i = r.lookupListIndex, o = this.getLookupByIndex(i);
							for (let t = 0; t < o.subtables.length; t++) {
								let n, i = o.subtables[t], s = this.getSubstitutionType(o, i);
								if (s === "71" ? (s = this.getSubstitutionType(i, i.extension), n = this.getLookupMethod(i, i.extension), i = i.extension) : n = this.getLookupMethod(o, i), s === "12") {
									let t = n(e.get(r.sequenceIndex));
									t && A.push(t);
								} else {
									if (s !== "21") throw Error(`Substitution type ${s} is not supported in chaining substitution`);
									{
										let t = n(e.get(r.sequenceIndex));
										t && A.push(t);
									}
								}
							}
						}
						return A;
					}
					function mm(e, t) {
						let n, r = lm(e.current, t.coverage);
						if (r === -1) return null;
						let i = t.ligatureSets[r];
						for (let t = 0; t < i.length; t++) {
							n = i[t];
							for (let t = 0; t < n.components.length && e.lookahead[t] === n.components[t]; t++) if (t === n.components.length - 1) return n;
						}
						return null;
					}
					function hm(e, t) {
						let n = e.current;
						if (lm(n, t.coverage) === -1) return null;
						for (let r of t.ruleSets) for (let t of r) {
							let r = !0;
							for (let n = 0; n < t.input.length; n++) if (e.lookahead[n] !== t.input[n]) {
								r = !1;
								break;
							}
							if (r) {
								let e = [];
								e.push(n);
								for (let n = 0; n < t.input.length; n++) e.push(t.input[n]);
								let r = (e, t) => {
									let { lookupListIndex: n, sequenceIndex: r } = t, { subtables: i } = this.getLookupByIndex(n);
									for (let t of i) lm(e[r], t.coverage) !== -1 && (e[r] = t.deltaGlyphId);
								};
								for (let n = 0; n < t.lookupRecords.length; n++) r(e, t.lookupRecords[n]);
								return e;
							}
						}
						return null;
					}
					function gm(e, t) {
						if (e.context.length < t.coverages.length) return [];
						for (let n = 0; n < t.coverages.length; n++) {
							let r = e.get(n);
							if (r = Array.isArray(r) ? r[0] : r, lm(r, t.coverages[n]) === -1) return [];
						}
						let n = [];
						for (let r = 0; r < t.lookupRecords.length; r++) {
							let i = t.lookupRecords[r], o = i.lookupListIndex, s = this.getLookupByIndex(o);
							for (let t = 0; t < s.subtables.length; t++) {
								let r, o = s.subtables[t], p = this.getSubstitutionType(s, o);
								if (p === "71" ? (p = this.getSubstitutionType(o, o.extension), r = this.getLookupMethod(o, o.extension), o = o.extension) : r = this.getLookupMethod(s, o), p === "12") {
									let t = r(e.get(i.sequenceIndex));
									t && n.push(t);
								} else if (p === "21") {
									let t = r(e.get(i.sequenceIndex));
									t && n.push(t);
								}
							}
						}
						return n;
					}
					function _m(e, t) {
						let n = lm(e, t.coverage);
						return n === -1 ? null : t.sequences[n];
					}
					sm.prototype.getDefaultScriptFeaturesIndexes = function() {
						let e = this.font.tables.gsub.scripts;
						for (let t = 0; t < e.length; t++) {
							let n = e[t];
							if (n.tag === "DFLT") return n.script.defaultLangSys.featureIndexes;
						}
						return [];
					}, sm.prototype.getScriptFeaturesIndexes = function(e) {
						if (!this.font.tables.gsub) return [];
						if (!e) return this.getDefaultScriptFeaturesIndexes();
						let t = this.font.tables.gsub.scripts;
						for (let n = 0; n < t.length; n++) {
							let r = t[n];
							if (r.tag === e && r.script.defaultLangSys) return r.script.defaultLangSys.featureIndexes;
							{
								let t = r.langSysRecords;
								if (t) for (let n = 0; n < t.length; n++) {
									let r = t[n];
									if (r.tag === e) return r.langSys.featureIndexes;
								}
							}
						}
						return this.getDefaultScriptFeaturesIndexes();
					}, sm.prototype.mapTagsToFeatures = function(e, t) {
						let n = {};
						for (let t = 0; t < e.length; t++) {
							let r = e[t].tag;
							n[r] = e[t].feature;
						}
						this.features[t].tags = n;
					}, sm.prototype.getScriptFeatures = function(e) {
						let t = this.features[e];
						if (Object.prototype.hasOwnProperty.call(this.features, e)) return t;
						let n = this.getScriptFeaturesIndexes(e);
						if (!n) return null;
						let r = this.font.tables.gsub;
						return t = n.map((e) => r.features[e]), this.features[e] = t, this.mapTagsToFeatures(t, e), t;
					}, sm.prototype.getSubstitutionType = function(e, t) {
						return e.lookupType.toString() + t.substFormat.toString();
					}, sm.prototype.getLookupMethod = function(e, t) {
						let n = this.getSubstitutionType(e, t);
						switch (n) {
							case "11": return (e) => um.apply(this, [e, t]);
							case "12": return (e) => dm.apply(this, [e, t]);
							case "63": return (e) => pm.apply(this, [e, t]);
							case "41": return (e) => mm.apply(this, [e, t]);
							case "21": return (e) => _m.apply(this, [e, t]);
							case "51": return (e) => hm.apply(this, [e, t]);
							case "53": return (e) => gm.apply(this, [e, t]);
							default: throw Error(`substitutionType : ${n} lookupType: ${e.lookupType} - substFormat: ${t.substFormat} is not yet supported`);
						}
					}, sm.prototype.lookupFeature = function(e) {
						let t = e.contextParams, n = t.index, r = this.getFeature({
							tag: e.tag,
							script: e.script
						});
						if (!r) return /* @__PURE__ */ Error(`font '${(this.font.names.unicode || this.font.names.windows || this.font.names.macintosh).fullName.en}' doesn't support feature '${e.tag}' for script '${e.script}'.`);
						let i = this.getFeatureLookups(r), o = [].concat(t.context);
						for (let r = 0; r < i.length; r++) {
							let s = i[r], p = this.getLookupSubtables(s);
							for (let r = 0; r < p.length; r++) {
								let i, S, T = p[r], k = this.getSubstitutionType(s, T);
								switch (k === "71" ? (k = this.getSubstitutionType(T, T.extension), i = this.getLookupMethod(T, T.extension), T = T.extension) : i = this.getLookupMethod(s, T), k) {
									case "11":
										S = i(t.current), S && o.splice(n, 1, new cm({
											id: 11,
											tag: e.tag,
											substitution: S
										}));
										break;
									case "12":
										S = i(t.current), S && o.splice(n, 1, new cm({
											id: 12,
											tag: e.tag,
											substitution: S
										}));
										break;
									case "63":
										S = i(t), Array.isArray(S) && S.length && o.splice(n, 1, new cm({
											id: 63,
											tag: e.tag,
											substitution: S
										}));
										break;
									case "41":
										S = i(t), S && o.splice(n, 1, new cm({
											id: 41,
											tag: e.tag,
											substitution: S
										}));
										break;
									case "21":
										S = i(t.current), S && o.splice(n, 1, new cm({
											id: 21,
											tag: e.tag,
											substitution: S
										}));
										break;
									case "51":
									case "53": S = i(t), Array.isArray(S) && S.length && o.splice(n, 1, new cm({
										id: parseInt(k),
										tag: e.tag,
										substitution: S
									}));
								}
								t = new Zp(o, n), Array.isArray(S) && !S.length || (S = null);
							}
						}
						return o.length ? o : null;
					}, sm.prototype.supports = function(e) {
						if (!e.script) return !1;
						this.getScriptFeatures(e.script);
						let t = Object.prototype.hasOwnProperty.call(this.features, e.script);
						if (!e.tag) return t;
						let n = this.features[e.script].some((t) => t.tag === e.tag);
						return t && n;
					}, sm.prototype.getLookupSubtables = function(e) {
						return e.subtables || null;
					}, sm.prototype.getLookupByIndex = function(e) {
						return this.font.tables.gsub.lookups[e] || null;
					}, sm.prototype.getFeatureLookups = function(e) {
						return e.lookupListIndexes.map(this.getLookupByIndex.bind(this));
					}, sm.prototype.getFeature = function(e) {
						if (!this.font) return { FAIL: "No font was found" };
						Object.prototype.hasOwnProperty.call(this.features, e.script) || this.getScriptFeatures(e.script);
						let t = this.features[e.script];
						return t ? t.tags[e.tag] ? this.features[e.script].tags[e.tag] : null : { FAIL: `No feature for script ${e.script}` };
					};
					var vm = sm, ym = {
						startCheck: function(e) {
							let t = e.current, n = e.get(-1);
							return n === null && nm(t) || !nm(n) && nm(t);
						},
						endCheck: function(e) {
							let t = e.get(1);
							return t === null || !nm(t);
						}
					}, bm = {
						startCheck: function(e) {
							let t = e.current, n = e.get(-1);
							return (nm(t) || im(t)) && !nm(n);
						},
						endCheck: function(e) {
							let t = e.get(1);
							switch (!0) {
								case t === null: return !0;
								case !nm(t) && !im(t): {
									let n = /\s/.test(t);
									if (!n) return !0;
									if (n) {
										let t = !1;
										if (t = e.lookahead.some((e) => nm(e) || im(e)), !t) return !0;
									}
									break;
								}
								default: return !1;
							}
						}
					};
					function xm(e, t, n) {
						for (let r = 0; r < e.substitution.length; r++) {
							let i = e.substitution[r], o = t[n + r];
							Array.isArray(i) ? i.length ? o.setState(e.tag, i[0]) : o.setState("deleted", !0) : o.setState(e.tag, i);
						}
					}
					var Sm = {
						11: function(e, t, n) {
							t[n].setState(e.tag, e.substitution);
						},
						12: function(e, t, n) {
							t[n].setState(e.tag, e.substitution);
						},
						63: xm,
						41: function(e, t, n) {
							let r = t[n];
							r.setState(e.tag, e.substitution.ligGlyph);
							let i = e.substitution.components.length;
							for (let e = 0; e < i; e++) r = t[n + e + 1], r.setState("deleted", !0);
						},
						51: xm,
						53: xm
					}, Cm = function(e, t, n) {
						e instanceof cm && Sm[e.id] && Sm[e.id](e, t, n);
					};
					function wm(e) {
						let t = [].concat(e.backtrack);
						for (let e = t.length - 1; e >= 0; e--) {
							let n = t[e], r = rm(n), i = im(n);
							if (!r && !i) return !0;
							if (r) return !1;
						}
						return !1;
					}
					function Tm(e) {
						if (rm(e.current)) return !1;
						for (let t = 0; t < e.lookahead.length; t++) if (!im(e.lookahead[t])) return !0;
						return !1;
					}
					var Em = function(e) {
						let t = "arab", n = this.featuresTags[t], r = this.tokenizer.getRangeTokens(e);
						if (r.length === 1) return;
						let i = new Zp(r.map((e) => e.getState("glyphIndex")), 0), o = new Zp(r.map((e) => e.char), 0);
						for (let e = 0; e < r.length; e++) {
							if (im(r[e].char)) continue;
							i.setCurrentIndex(e), o.setCurrentIndex(e);
							let s, p = 0;
							switch (wm(o) && (p |= 1), Tm(o) && (p |= 2), p) {
								case 1:
									s = "fina";
									break;
								case 2:
									s = "init";
									break;
								case 3: s = "medi";
							}
							if (n.indexOf(s) === -1) continue;
							let S = this.query.lookupFeature({
								tag: s,
								script: t,
								contextParams: i
							});
							if (S instanceof Error) console.info(S.message);
							else for (let e = 0; e < S.length; e++) {
								let t = S[e];
								t instanceof cm && (Cm(t, r, e), i.context[e] = t.substitution);
							}
						}
					};
					function Dm(e, t) {
						return new Zp(e.map((e) => e.activeState.value), t || 0);
					}
					var Om = function(e) {
						let t = this.tokenizer.getRangeTokens(e), n = Dm(t);
						for (let e = 0; e < n.context.length; e++) {
							n.setCurrentIndex(e);
							let r = this.query.lookupFeature({
								tag: "rlig",
								script: "arab",
								contextParams: n
							});
							if (r.length) {
								for (let n = 0; n < r.length; n++) {
									let i = r[n];
									Cm(i, t, e);
								}
								n = Dm(t);
							}
						}
					};
					function km(e, t) {
						return new Zp(e.map((e) => e.activeState.value), t || 0);
					}
					var Am = function(e) {
						let t = "delf", n = "ccmp", r = this.tokenizer.getRangeTokens(e), i = km(r);
						for (let e = 0; e < i.context.length; e++) {
							if (!this.query.getFeature({
								tag: n,
								script: t,
								contextParams: i
							})) continue;
							i.setCurrentIndex(e);
							let o = this.query.lookupFeature({
								tag: n,
								script: t,
								contextParams: i
							});
							if (o.length) {
								for (let t = 0; t < o.length; t++) {
									let n = o[t];
									Cm(n, r, e);
								}
								i = km(r);
							}
						}
					}, jm = {
						startCheck: function(e) {
							let t = e.current, n = e.get(-1);
							return n === null && om(t) || !om(n) && om(t);
						},
						endCheck: function(e) {
							let t = e.get(1);
							return t === null || !om(t);
						}
					};
					function Mm(e, t) {
						return new Zp(e.map((e) => e.activeState.value), t || 0);
					}
					var Nm = function(e) {
						let t = this.tokenizer.getRangeTokens(e), n = Mm(t);
						for (let e = 0; e < n.context.length; e++) {
							n.setCurrentIndex(e);
							let r = this.query.lookupFeature({
								tag: "liga",
								script: "latn",
								contextParams: n
							});
							if (r.length) {
								for (let n = 0; n < r.length; n++) {
									let i = r[n];
									Cm(i, t, e);
								}
								n = Mm(t);
							}
						}
					}, Pm = {
						startCheck: function(e) {
							let t = e.current, n = e.get(-1);
							return n === null && am(t) || !am(n) && am(t);
						},
						endCheck: function(e) {
							let t = e.get(1);
							return t === null || !am(t);
						}
					};
					function Fm(e, t) {
						return new Zp(e.map((e) => e.activeState.value), t || 0);
					}
					var Im = function(e) {
						let t = this.tokenizer.getRangeTokens(e), n = Fm(t, 0);
						for (let e = 0; e < n.context.length; e++) {
							n.setCurrentIndex(e);
							let r = this.query.lookupFeature({
								tag: "ccmp",
								script: "thai",
								contextParams: n
							});
							if (r.length) {
								for (let n = 0; n < r.length; n++) {
									let i = r[n];
									Cm(i, t, e);
								}
								n = Fm(t, e);
							}
						}
					};
					function Lm(e, t) {
						return new Zp(e.map((e) => e.activeState.value), t || 0);
					}
					var Rm = function(e) {
						let t = this.tokenizer.getRangeTokens(e), n = Lm(t, 0);
						for (let e = 0; e < n.context.length; e++) {
							n.setCurrentIndex(e);
							let r = this.query.lookupFeature({
								tag: "liga",
								script: "thai",
								contextParams: n
							});
							if (r.length) {
								for (let n = 0; n < r.length; n++) {
									let i = r[n];
									Cm(i, t, e);
								}
								n = Lm(t, e);
							}
						}
					};
					function zm(e, t) {
						return new Zp(e.map((e) => e.activeState.value), t || 0);
					}
					var Bm = function(e) {
						let t = this.tokenizer.getRangeTokens(e), n = zm(t, 0);
						for (let e = 0; e < n.context.length; e++) {
							n.setCurrentIndex(e);
							let r = this.query.lookupFeature({
								tag: "rlig",
								script: "thai",
								contextParams: n
							});
							if (r.length) {
								for (let n = 0; n < r.length; n++) {
									let i = r[n];
									Cm(i, t, e);
								}
								n = zm(t, e);
							}
						}
					};
					function Vm(e) {
						if (e === null) return !1;
						let t = e.codePointAt(0);
						return t >= 6155 && t <= 6157 || t >= 65024 && t <= 65039 || t >= 917760 && t <= 917999;
					}
					var Hm = {
						startCheck: function(e) {
							let t = e.current, n = e.get(1);
							return n === null && Vm(t) || Vm(n);
						},
						endCheck: function(e) {
							let t = e.get(1);
							return t === null || !Vm(t);
						}
					}, Um = function(e) {
						let t = this.query.font, n = this.tokenizer.getRangeTokens(e);
						if (n[1].setState("deleted", !0), t.tables.cmap && t.tables.cmap.varSelectorList) {
							let e = n[0].char.codePointAt(0), r = n[1].char.codePointAt(0), i = t.tables.cmap.varSelectorList[r];
							if (i !== void 0 && i.nonDefaultUVS) {
								let r = i.nonDefaultUVS.uvsMappings;
								if (r[e]) {
									let i = r[e].glyphID;
									t.glyphs.glyphs[i] !== void 0 && n[0].setState("glyphIndex", i);
								}
							}
						}
					};
					function Wm(e) {
						this.baseDir = e || "ltr", this.tokenizer = new tm(), this.featuresTags = {};
					}
					function Gm(e) {
						let t = this.contextChecks[`${e}Check`];
						return this.tokenizer.registerContextChecker(e, t.startCheck, t.endCheck);
					}
					function Km() {
						return Gm.call(this, "ccmpReplacement"), Gm.call(this, "latinWord"), Gm.call(this, "arabicWord"), Gm.call(this, "arabicSentence"), Gm.call(this, "thaiWord"), Gm.call(this, "unicodeVariationSequence"), this.tokenizer.tokenize(this.text);
					}
					function qm() {
						let e = this.tokenizer.getContextRanges("arabicSentence");
						for (let t = 0; t < e.length; t++) {
							let n = e[t], r = this.tokenizer.getRangeTokens(n);
							this.tokenizer.replaceRange(n.startIndex, n.endOffset, r.reverse());
						}
					}
					function Jm() {
						if (this.tokenizer.registeredModifiers.indexOf("glyphIndex") === -1) throw Error("glyphIndex modifier is required to apply arabic presentation features.");
					}
					function Ym() {
						if (!Object.prototype.hasOwnProperty.call(this.featuresTags, "arab")) return;
						Jm.call(this);
						let e = this.tokenizer.getContextRanges("arabicWord");
						for (let t = 0; t < e.length; t++) {
							let n = e[t];
							Em.call(this, n);
						}
					}
					function Xm() {
						Jm.call(this);
						let e = this.tokenizer.getContextRanges("ccmpReplacement");
						for (let t = 0; t < e.length; t++) {
							let n = e[t];
							Am.call(this, n);
						}
					}
					function Zm() {
						if (!this.hasFeatureEnabled("arab", "rlig")) return;
						Jm.call(this);
						let e = this.tokenizer.getContextRanges("arabicWord");
						for (let t = 0; t < e.length; t++) {
							let n = e[t];
							Om.call(this, n);
						}
					}
					function Qm() {
						if (!this.hasFeatureEnabled("latn", "liga")) return;
						Jm.call(this);
						let e = this.tokenizer.getContextRanges("latinWord");
						for (let t = 0; t < e.length; t++) {
							let n = e[t];
							Nm.call(this, n);
						}
					}
					function $m() {
						let e = this.tokenizer.getContextRanges("unicodeVariationSequence");
						for (let t = 0; t < e.length; t++) {
							let n = e[t];
							Um.call(this, n);
						}
					}
					function eh() {
						Jm.call(this);
						let e = this.tokenizer.getContextRanges("thaiWord");
						for (let t = 0; t < e.length; t++) {
							let n = e[t];
							this.hasFeatureEnabled("thai", "liga") && Rm.call(this, n), this.hasFeatureEnabled("thai", "rlig") && Bm.call(this, n), this.hasFeatureEnabled("thai", "ccmp") && Im.call(this, n);
						}
					}
					Wm.prototype.setText = function(e) {
						this.text = e;
					}, Wm.prototype.contextChecks = {
						ccmpReplacementCheck: {
							startCheck: function(e) {
								return e.index === 0 && e.context.length > 1;
							},
							endCheck: function(e) {
								return e.index === e.context.length - 1;
							}
						},
						latinWordCheck: jm,
						arabicWordCheck: ym,
						arabicSentenceCheck: bm,
						thaiWordCheck: Pm,
						unicodeVariationSequenceCheck: Hm
					}, Wm.prototype.registerFeatures = function(e, t) {
						let n = t.filter((t) => this.query.supports({
							script: e,
							tag: t
						}));
						Object.prototype.hasOwnProperty.call(this.featuresTags, e) ? this.featuresTags[e] = this.featuresTags[e].concat(n) : this.featuresTags[e] = n;
					}, Wm.prototype.applyFeatures = function(e, t) {
						if (!e) throw Error("No valid font was provided to apply features");
						this.query ||= new vm(e);
						for (let e = 0; e < t.length; e++) {
							let n = t[e];
							this.query.supports({ script: n.script }) && this.registerFeatures(n.script, n.tags);
						}
					}, Wm.prototype.registerModifier = function(e, t, n) {
						this.tokenizer.registerModifier(e, t, n);
					}, Wm.prototype.checkContextReady = function(e) {
						return !!this.tokenizer.getContext(e);
					}, Wm.prototype.applyFeaturesToContexts = function() {
						this.checkContextReady("ccmpReplacement") && Xm.call(this), this.checkContextReady("arabicWord") && (Ym.call(this), Zm.call(this)), this.checkContextReady("latinWord") && Qm.call(this), this.checkContextReady("arabicSentence") && qm.call(this), this.checkContextReady("thaiWord") && eh.call(this), this.checkContextReady("unicodeVariationSequence") && $m.call(this);
					}, Wm.prototype.hasFeatureEnabled = function(e, t) {
						return (this.featuresTags[e] || []).indexOf(t) !== -1;
					}, Wm.prototype.processText = function(e) {
						this.text && this.text === e || (this.setText(e), Km.call(this), this.applyFeaturesToContexts());
					}, Wm.prototype.getBidiText = function(e) {
						return this.processText(e), this.tokenizer.getText();
					}, Wm.prototype.getTextGlyphs = function(e) {
						this.processText(e);
						let t = [];
						for (let e = 0; e < this.tokenizer.tokens.length; e++) {
							let n = this.tokenizer.tokens[e];
							if (n.state.deleted) continue;
							let r = n.activeState.value;
							t.push(Array.isArray(r) ? r[0] : r);
						}
						return t;
					};
					var th = Wm;
					function nh(e) {
						return {
							fontFamily: { en: e.familyName || " " },
							fontSubfamily: { en: e.styleName || " " },
							fullName: { en: e.fullName || e.familyName + " " + e.styleName },
							postScriptName: { en: e.postScriptName || (e.familyName + e.styleName).replace(/\s/g, "") },
							designer: { en: e.designer || " " },
							designerURL: { en: e.designerURL || " " },
							manufacturer: { en: e.manufacturer || " " },
							manufacturerURL: { en: e.manufacturerURL || " " },
							license: { en: e.license || " " },
							licenseURL: { en: e.licenseURL || " " },
							version: { en: e.version || "Version 0.1" },
							description: { en: e.description || " " },
							copyright: { en: e.copyright || " " },
							trademark: { en: e.trademark || " " }
						};
					}
					function rh(e) {
						if ((e ||= {}).tables = e.tables || {}, !e.empty) {
							if (!e.familyName) throw Error("When creating a new Font object, familyName is required.");
							if (!e.styleName) throw Error("When creating a new Font object, styleName is required.");
							if (!e.unitsPerEm) throw Error("When creating a new Font object, unitsPerEm is required.");
							if (!e.ascender) throw Error("When creating a new Font object, ascender is required.");
							if (e.descender > 0) throw Error("When creating a new Font object, negative descender value is required.");
							this.names = {}, this.names.unicode = nh(e), this.names.macintosh = nh(e), this.names.windows = nh(e), this.unitsPerEm = e.unitsPerEm || 1e3, this.ascender = e.ascender, this.descender = e.descender, this.createdTimestamp = e.createdTimestamp, this.italicAngle = e.italicAngle || 0, this.weightClass = e.weightClass || 0;
							let t = 0;
							e.fsSelection ? t = e.fsSelection : (this.italicAngle < 0 ? t |= this.fsSelectionValues.ITALIC : this.italicAngle > 0 && (t |= this.fsSelectionValues.OBLIQUE), this.weightClass >= 600 && (t |= this.fsSelectionValues.BOLD), t === 0 && (t = this.fsSelectionValues.REGULAR)), e.panose && Array.isArray(e.panose) || (e.panose = [
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0,
								0
							]), this.tables = Object.assign(e.tables, { os2: Object.assign({
								usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM,
								usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM,
								bFamilyType: e.panose[0] || 0,
								bSerifStyle: e.panose[1] || 0,
								bWeight: e.panose[2] || 0,
								bProportion: e.panose[3] || 0,
								bContrast: e.panose[4] || 0,
								bStrokeVariation: e.panose[5] || 0,
								bArmStyle: e.panose[6] || 0,
								bLetterform: e.panose[7] || 0,
								bMidline: e.panose[8] || 0,
								bXHeight: e.panose[9] || 0,
								fsSelection: t
							}, e.tables.os2) });
						}
						this.supported = !0, this.glyphs = new pd.GlyphSet(this, e.glyphs || []), this.encoding = new Zu(this), this.position = new Nf(this), this.substitution = new Bf(this), this.tables = this.tables || {}, this.tables = new Proxy(this.tables, { set: (e, t, n) => (e[t] = n, e.fvar && (e.gvar || e.cff2) && !this.variation && (this.variation = new ip(this)), !0) }), this.palettes = new Vf(this), this.layers = new Hf(this), this.svgImages = new Uf(this), this._push = null, this._hmtxTableData = {}, Object.defineProperty(this, "hinting", { get: function() {
							return this._hinting ? this._hinting : this.outlinesFormat === "truetype" ? this._hinting = new qp(this) : null;
						} });
					}
					rh.prototype.hasChar = function(e) {
						return this.encoding.charToGlyphIndex(e) > 0;
					}, rh.prototype.charToGlyphIndex = function(e) {
						return this.encoding.charToGlyphIndex(e);
					}, rh.prototype.charToGlyph = function(e) {
						let t = this.charToGlyphIndex(e), n = this.glyphs.get(t);
						return n ||= this.glyphs.get(0), n;
					}, rh.prototype.updateFeatures = function(e) {
						return this.defaultRenderOptions.features.map((t) => t.script === "latn" ? {
							script: "latn",
							tags: t.tags.filter((t) => e[t])
						} : t);
					}, rh.prototype.stringToGlyphIndexes = function(e, t) {
						let n = new th();
						n.registerModifier("glyphIndex", null, (e) => this.charToGlyphIndex(e.char));
						let r = t ? this.updateFeatures(t.features) : this.defaultRenderOptions.features;
						return n.applyFeatures(this, r), n.getTextGlyphs(e);
					}, rh.prototype.stringToGlyphs = function(e, t) {
						let n = this.stringToGlyphIndexes(e, t), r = n.length, i = Array(r), o = this.glyphs.get(0);
						for (let e = 0; e < r; e += 1) i[e] = this.glyphs.get(n[e]) || o;
						return i;
					}, rh.prototype.nameToGlyphIndex = function(e) {
						return this.glyphNames.nameToGlyphIndex(e);
					}, rh.prototype.nameToGlyph = function(e) {
						let t = this.nameToGlyphIndex(e), n = this.glyphs.get(t);
						return n ||= this.glyphs.get(0), n;
					}, rh.prototype.glyphIndexToName = function(e) {
						return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(e) : "";
					}, rh.prototype.getKerningValue = function(e, t) {
						e = e.index || e, t = t.index || t;
						let n = this.position.defaultKerningTables;
						return n ? this.position.getKerningValue(n, e, t) : this.kerningPairs[e + "," + t] || 0;
					}, rh.prototype.defaultRenderOptions = {
						kerning: !0,
						features: [
							{
								script: "arab",
								tags: [
									"init",
									"medi",
									"fina",
									"rlig"
								]
							},
							{
								script: "latn",
								tags: ["liga", "rlig"]
							},
							{
								script: "thai",
								tags: [
									"liga",
									"rlig",
									"ccmp"
								]
							}
						],
						hinting: !1,
						usePalette: 0,
						drawLayers: !0,
						drawSVG: !0
					}, rh.prototype.forEachGlyph = function(e, t, n, r, i, o) {
						t = t === void 0 ? 0 : t, n = n === void 0 ? 0 : n, r = r === void 0 ? 72 : r, i = Object.assign({}, this.defaultRenderOptions, i);
						let s = 1 / this.unitsPerEm * r, p = this.stringToGlyphs(e, i), S;
						if (i.kerning) {
							let e = i.script || this.position.getDefaultScriptName();
							S = this.position.getKerningTables(e, i.language);
						}
						for (let e = 0; e < p.length; e += 1) {
							let T = p[e];
							o.call(this, T, t, n, r, i), T.advanceWidth && (t += T.advanceWidth * s), i.kerning && e < p.length - 1 && (t += (S ? this.position.getKerningValue(S, T.index, p[e + 1].index) : this.getKerningValue(T, p[e + 1])) * s), i.letterSpacing ? t += i.letterSpacing * r : i.tracking && (t += i.tracking / 1e3 * r);
						}
						return t;
					}, rh.prototype.getPath = function(e, t, n, r, i) {
						i = Object.assign({}, this.defaultRenderOptions, i);
						let o = new Gl();
						if (o._layers = [], jd(this, o), o.stroke) {
							let e = 1 / (o.unitsPerEm || 1e3) * r;
							o.strokeWidth *= e;
						}
						return this.forEachGlyph(e, t, n, r, i, (e, t, n, r) => {
							let s = e.getPath(t, n, r, i, this);
							if (i.drawSVG || i.drawLayers) {
								let e = s._layers;
								if (e && e.length) {
									for (let t = 0; t < e.length; t++) {
										let n = e[t];
										o._layers.push(n);
									}
									return;
								}
							}
							o.extend(s);
						}), o;
					}, rh.prototype.getPaths = function(e, t, n, r, i) {
						i = Object.assign({}, this.defaultRenderOptions, i);
						let o = [];
						return this.forEachGlyph(e, t, n, r, i, function(e, t, n, r) {
							let s = e.getPath(t, n, r, i, this);
							o.push(s);
						}), o;
					}, rh.prototype.getAdvanceWidth = function(e, t, n) {
						return n = Object.assign({}, this.defaultRenderOptions, n), this.forEachGlyph(e, 0, 0, t, n, function() {});
					}, rh.prototype.draw = function(e, t, n, r, i, o) {
						this.getPath(t, n, r, i, o).draw(e);
					}, rh.prototype.drawPoints = function(e, t, n, r, i, o) {
						o = Object.assign({}, this.defaultRenderOptions, o), this.forEachGlyph(t, n, r, i, o, function(t, n, r, i) {
							t.drawPoints(e, n, r, i, o, this);
						});
					}, rh.prototype.drawMetrics = function(e, t, n, r, i, o) {
						o = Object.assign({}, this.defaultRenderOptions, o), this.forEachGlyph(t, n, r, i, o, function(t, n, r, i) {
							t.drawMetrics(e, n, r, i);
						});
					}, rh.prototype.getEnglishName = function(e) {
						let t = (this.names.unicode || this.names.macintosh || this.names.windows)[e];
						if (t) return t.en;
					}, rh.prototype.validate = function() {
						let e = [], t = this;
						function n(t, n) {
							t || (console.warn(`[opentype.js] ${n}`), e.push(n));
						}
						function r(e) {
							let r = t.getEnglishName(e);
							n(r && r.trim().length > 0, "No English " + e + " specified.");
						}
						if (r("fontFamily"), r("weightName"), r("manufacturer"), r("copyright"), r("version"), n(this.unitsPerEm > 0, "No unitsPerEm specified."), this.tables.colr) {
							let e = this.tables.colr.baseGlyphRecords, t = -1;
							for (let r = 0; r < e.length; r++) {
								let i = e[r].glyphID;
								if (n(t < e[r].glyphID, `baseGlyphs must be sorted by GlyphID in ascending order, but glyphID ${i} comes after ${t}`), t > e[r].glyphID) break;
								t = i;
							}
						}
						return e;
					}, rh.prototype.toTables = function() {
						return Ef(this);
					}, rh.prototype.toBuffer = function() {
						return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer();
					}, rh.prototype.toArrayBuffer = function() {
						let e = this.toTables().encode(), t = new ArrayBuffer(e.length), n = new Uint8Array(t);
						for (let t = 0; t < e.length; t++) n[t] = e[t];
						return t;
					}, rh.prototype.download = function() {
						console.error("DEPRECATED: platform-specific actions are to be implemented on user-side");
					}, rh.prototype.fsSelectionValues = {
						ITALIC: 1,
						UNDERSCORE: 2,
						NEGATIVE: 4,
						OUTLINED: 8,
						STRIKEOUT: 16,
						BOLD: 32,
						REGULAR: 64,
						USER_TYPO_METRICS: 128,
						WWS: 256,
						OBLIQUE: 512
					}, rh.prototype.macStyleValues = {
						BOLD: 1,
						ITALIC: 2,
						UNDERLINE: 4,
						OUTLINED: 8,
						SHADOW: 16,
						CONDENSED: 32,
						EXTENDED: 64
					}, rh.prototype.usWidthClasses = {
						ULTRA_CONDENSED: 1,
						EXTRA_CONDENSED: 2,
						CONDENSED: 3,
						SEMI_CONDENSED: 4,
						MEDIUM: 5,
						SEMI_EXPANDED: 6,
						EXPANDED: 7,
						EXTRA_EXPANDED: 8,
						ULTRA_EXPANDED: 9
					}, rh.prototype.usWeightClasses = {
						THIN: 100,
						EXTRA_LIGHT: 200,
						LIGHT: 300,
						NORMAL: 400,
						MEDIUM: 500,
						SEMI_BOLD: 600,
						BOLD: 700,
						EXTRA_BOLD: 800,
						BLACK: 900
					};
					var ih = rh, ah = {
						make: function() {
							console.warn("Writing of hvar tables is not yet supported.");
						},
						parse: function(e, t) {
							let n = new Tu.Parser(e, t), r = n.parseUShort(), i = n.parseUShort();
							return r !== 1 && console.warn(`Unsupported hvar table version ${r}.${i}`), {
								version: [r, i],
								itemVariationStore: n.parsePointer32(function() {
									return this.parseItemVariationStore();
								}),
								advanceWidth: n.parsePointer32(function() {
									return this.parseDeltaSetIndexMap();
								}),
								lsb: n.parsePointer32(function() {
									return this.parseDeltaSetIndexMap();
								}),
								rsb: n.parsePointer32(function() {
									return this.parseDeltaSetIndexMap();
								})
							};
						}
					}, oh = function() {
						return {
							coverage: this.parsePointer(N.coverage),
							attachPoints: this.parseList(N.pointer(N.uShortList))
						};
					}, sh = function() {
						var e = this.parseUShort();
						return Jl.argument(e === 1 || e === 2 || e === 3, "Unsupported CaretValue table version."), e === 1 ? { coordinate: this.parseShort() } : e === 2 ? { pointindex: this.parseShort() } : e === 3 ? { coordinate: this.parseShort() } : void 0;
					}, ch = function() {
						return this.parseList(N.pointer(sh));
					}, lh = function() {
						return {
							coverage: this.parsePointer(N.coverage),
							ligGlyphs: this.parseList(N.pointer(ch))
						};
					}, uh = function() {
						return this.parseUShort(), this.parseList(N.pointer(N.coverage));
					}, dh = { parse: function(e, t) {
						let n = new N(e, t ||= 0), r = n.parseVersion(1);
						Jl.argument(r === 1 || r === 1.2 || r === 1.3, "Unsupported GDEF table version.");
						var i = {
							version: r,
							classDef: n.parsePointer(N.classDef),
							attachList: n.parsePointer(oh),
							ligCaretList: n.parsePointer(lh),
							markAttachClassDef: n.parsePointer(N.classDef)
						};
						return r >= 1.2 && (i.markGlyphSets = n.parsePointer(uh)), i;
					} }, fh = Array(10);
					fh[1] = function() {
						let e = this.offset + this.relativeOffset, t = this.parseUShort();
						return t === 1 ? {
							posFormat: 1,
							coverage: this.parsePointer(N.coverage),
							value: this.parseValueRecord()
						} : t === 2 ? {
							posFormat: 2,
							coverage: this.parsePointer(N.coverage),
							values: this.parseValueRecordList()
						} : void Jl.assert(!1, "0x" + e.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
					}, fh[2] = function() {
						let e = this.offset + this.relativeOffset, t = this.parseUShort();
						Jl.assert(t === 1 || t === 2, "0x" + e.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
						let n = this.parsePointer(N.coverage), r = this.parseUShort(), i = this.parseUShort();
						if (t === 1) return {
							posFormat: t,
							coverage: n,
							valueFormat1: r,
							valueFormat2: i,
							pairSets: this.parseList(N.pointer(N.list(function() {
								return {
									secondGlyph: this.parseUShort(),
									value1: this.parseValueRecord(r),
									value2: this.parseValueRecord(i)
								};
							})))
						};
						if (t === 2) {
							let e = this.parsePointer(N.classDef), o = this.parsePointer(N.classDef), s = this.parseUShort(), p = this.parseUShort();
							return {
								posFormat: t,
								coverage: n,
								valueFormat1: r,
								valueFormat2: i,
								classDef1: e,
								classDef2: o,
								class1Count: s,
								class2Count: p,
								classRecords: this.parseList(s, N.list(p, function() {
									return {
										value1: this.parseValueRecord(r),
										value2: this.parseValueRecord(i)
									};
								}))
							};
						}
					}, fh[3] = function() {
						return { error: "GPOS Lookup 3 not supported" };
					}, fh[4] = function() {
						return { error: "GPOS Lookup 4 not supported" };
					}, fh[5] = function() {
						return { error: "GPOS Lookup 5 not supported" };
					}, fh[6] = function() {
						return { error: "GPOS Lookup 6 not supported" };
					}, fh[7] = function() {
						return { error: "GPOS Lookup 7 not supported" };
					}, fh[8] = function() {
						return { error: "GPOS Lookup 8 not supported" };
					}, fh[9] = function() {
						return { error: "GPOS Lookup 9 not supported" };
					};
					var ph, mh = Array(10), hh = {
						parse: function(e, t) {
							let n = new N(e, t ||= 0), r = n.parseVersion(1);
							return Jl.argument(r === 1 || r === 1.1, "Unsupported GPOS table version " + r), r === 1 ? {
								version: r,
								scripts: n.parseScriptList(),
								features: n.parseFeatureList(),
								lookups: n.parseLookupList(fh)
							} : {
								version: r,
								scripts: n.parseScriptList(),
								features: n.parseFeatureList(),
								lookups: n.parseLookupList(fh),
								variations: n.parseFeatureVariationsList()
							};
						},
						make: function(e) {
							return new _u.Table("GPOS", [
								{
									name: "version",
									type: "ULONG",
									value: 65536
								},
								{
									name: "scripts",
									type: "TABLE",
									value: new _u.ScriptList(e.scripts)
								},
								{
									name: "features",
									type: "TABLE",
									value: new _u.FeatureList(e.features)
								},
								{
									name: "lookups",
									type: "TABLE",
									value: new _u.LookupList(e.lookups, mh)
								}
							]);
						}
					}, gh = { parse: function(e, t) {
						let n = new Tu.Parser(e, t), r = n.parseUShort();
						if (r === 0) return function(e) {
							let t = {};
							e.skip("uShort");
							let n = e.parseUShort();
							Jl.argument(n === 0, "Unsupported kern sub-table version."), e.skip("uShort", 2);
							let r = e.parseUShort();
							e.skip("uShort", 3);
							for (let n = 0; n < r; n += 1) {
								let n = e.parseUShort(), r = e.parseUShort(), i = e.parseShort();
								t[n + "," + r] = i;
							}
							return t;
						}(n);
						if (r === 1) return function(e) {
							let t = {};
							e.skip("uShort"), e.parseULong() > 1 && console.warn("Only the first kern subtable is supported."), e.skip("uLong");
							let n = 255 & e.parseUShort();
							if (e.skip("uShort"), n === 0) {
								let n = e.parseUShort();
								e.skip("uShort", 3);
								for (let r = 0; r < n; r += 1) {
									let n = e.parseUShort(), r = e.parseUShort(), i = e.parseShort();
									t[n + "," + r] = i;
								}
							}
							return t;
						}(n);
						throw Error("Unsupported kern table version (" + r + ").");
					} }, _h = { parse: function(e, t, n, r) {
						let i = new Tu.Parser(e, t), o = r ? i.parseUShort : i.parseULong, s = [];
						for (let e = 0; e < n + 1; e += 1) {
							let e = o.call(i);
							r && (e *= 2), s.push(e);
						}
						return s;
					} };
					function vh(e, t) {
						let n = [], r = 12;
						for (let i = 0; i < t; i += 1) {
							let t = Tu.getTag(e, r), i = Tu.getULong(e, r + 4), o = Tu.getULong(e, r + 8), s = Tu.getULong(e, r + 12);
							n.push({
								tag: t,
								checksum: i,
								offset: o,
								length: s,
								compression: !1
							}), r += 16;
						}
						return n;
					}
					function yh(e, t) {
						if (t.compression === "WOFF") {
							let n = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2), r = new Uint8Array(t.length);
							if (Ll(n, r), r.byteLength !== t.length) throw Error("Decompression error: " + t.tag + " decompressed length doesn't match recorded length");
							return {
								data: new DataView(r.buffer, 0),
								offset: 0
							};
						}
						return {
							data: e,
							offset: t.offset
						};
					}
					function bh(e, t = {}) {
						let n, r, i = new ih({ empty: !0 });
						e.constructor !== ArrayBuffer && (e = new Uint8Array(e).buffer);
						let o = new DataView(e, 0), s, p = [], S = Tu.getTag(o, 0);
						if (S === "\0\0\0" || S === "true" || S === "typ1") i.outlinesFormat = "truetype", s = Tu.getUShort(o, 4), p = vh(o, s);
						else if (S === "OTTO") i.outlinesFormat = "cff", s = Tu.getUShort(o, 4), p = vh(o, s);
						else {
							if (S !== "wOFF") throw S === "wOF2" ? Error("WOFF2 require an external decompressor library, see examples at: https://github.com/opentypejs/opentype.js/issues/183#issuecomment-1147228025") : Error("Unsupported OpenType signature " + S);
							{
								let e = Tu.getTag(o, 4);
								if (e === "\0\0\0") i.outlinesFormat = "truetype";
								else {
									if (e !== "OTTO") throw Error("Unsupported OpenType flavor " + S);
									i.outlinesFormat = "cff";
								}
								s = Tu.getUShort(o, 12), p = function(e, t) {
									let n = [], r = 44;
									for (let i = 0; i < t; i += 1) {
										let t = Tu.getTag(e, r), i = Tu.getULong(e, r + 4), o = Tu.getULong(e, r + 8), s = Tu.getULong(e, r + 12), p;
										p = o < s && "WOFF", n.push({
											tag: t,
											offset: i,
											compression: p,
											compressedLength: o,
											length: s
										}), r += 20;
									}
									return n;
								}(o, s);
							}
						}
						let T, k, A, Sl, Cl, wl, Tl, El, Dl, Ol, kl, Al, jl, Ml, Nl, Pl, Fl, Il;
						for (let e = 0; e < s; e += 1) {
							let t = p[e], s;
							switch (t.tag) {
								case "avar":
									Tl = t;
									break;
								case "cmap":
									s = yh(o, t), i.tables.cmap = Uu.parse(s.data, s.offset), i.encoding = new Qu(i.tables.cmap);
									break;
								case "cvt ":
									s = yh(o, t), Il = new Tu.Parser(s.data, s.offset), i.tables.cvt = Il.parseShortList(t.length / 2);
									break;
								case "fvar":
									A = t;
									break;
								case "STAT":
									Sl = t;
									break;
								case "gvar":
									Cl = t;
									break;
								case "cvar":
									wl = t;
									break;
								case "fpgm":
									s = yh(o, t), Il = new Tu.Parser(s.data, s.offset), i.tables.fpgm = Il.parseByteList(t.length);
									break;
								case "head":
									s = yh(o, t), i.tables.head = Bd.parse(s.data, s.offset), i.unitsPerEm = i.tables.head.unitsPerEm, n = i.tables.head.indexToLocFormat;
									break;
								case "hhea":
									s = yh(o, t), i.tables.hhea = Vd.parse(s.data, s.offset), i.ascender = i.tables.hhea.ascender, i.descender = i.tables.hhea.descender, i.numberOfHMetrics = i.tables.hhea.numberOfHMetrics;
									break;
								case "HVAR":
									jl = t;
									break;
								case "hmtx":
									Al = t;
									break;
								case "ltag":
									s = yh(o, t), r = Ud.parse(s.data, s.offset);
									break;
								case "COLR":
									s = yh(o, t), i.tables.colr = $d.parse(s.data, s.offset);
									break;
								case "CPAL":
									s = yh(o, t), i.tables.cpal = cd.parse(s.data, s.offset);
									break;
								case "maxp":
									s = yh(o, t), i.tables.maxp = Wd.parse(s.data, s.offset), i.numGlyphs = i.tables.maxp.numGlyphs;
									break;
								case "name":
									Pl = t;
									break;
								case "OS/2":
									s = yh(o, t), i.tables.os2 = Kd.parse(s.data, s.offset);
									break;
								case "post":
									s = yh(o, t), i.tables.post = qd.parse(s.data, s.offset), i.glyphNames = new ed(i.tables.post);
									break;
								case "prep":
									s = yh(o, t), Il = new Tu.Parser(s.data, s.offset), i.tables.prep = Il.parseByteList(t.length);
									break;
								case "glyf":
									El = t;
									break;
								case "loca":
									Nl = t;
									break;
								case "CFF ":
									T = t;
									break;
								case "CFF2":
									k = t;
									break;
								case "kern":
									Ml = t;
									break;
								case "GDEF":
									Dl = t;
									break;
								case "GPOS":
									Ol = t;
									break;
								case "GSUB":
									kl = t;
									break;
								case "meta":
									Fl = t;
									break;
								case "gasp":
									try {
										s = yh(o, t), i.tables.gasp = vf.parse(s.data, s.offset);
									} catch (e) {
										console.warn("Failed to parse gasp table, skipping."), console.warn(e);
									}
									break;
								case "SVG ": s = yh(o, t), i.tables.svg = yf.parse(s.data, s.offset);
							}
						}
						let Ll = yh(o, Pl);
						if (i.tables.name = Vu.parse(Ll.data, Ll.offset, r), i.names = i.tables.name, El && Nl) {
							let e = n === 0, r = yh(o, Nl), s = _h.parse(r.data, r.offset, i.numGlyphs, e), p = yh(o, El);
							i.glyphs = np.parse(p.data, p.offset, s, i, t);
						} else if (T) {
							let e = yh(o, T);
							zd.parse(e.data, e.offset, i, t);
						} else {
							if (!k) throw Error("Font doesn't contain TrueType, CFF or CFF2 outlines.");
							{
								let e = yh(o, k);
								zd.parse(e.data, e.offset, i, t);
							}
						}
						let Rl = yh(o, Al);
						if (Hd.parse(i, Rl.data, Rl.offset, i.numberOfHMetrics, i.numGlyphs, i.glyphs, t), function(e, t) {
							t.lowMemory ? function(e) {
								e._IndexToUnicodeMap = {};
								let t = e.tables.cmap.glyphIndexMap, n = Object.keys(t);
								for (let r = 0; r < n.length; r += 1) {
									let i = n[r], o = t[i];
									e._IndexToUnicodeMap[o] === void 0 ? e._IndexToUnicodeMap[o] = { unicodes: [parseInt(i)] } : e._IndexToUnicodeMap[o].unicodes.push(parseInt(i));
								}
							}(e) : function(e) {
								let t, n = e.tables.cmap.glyphIndexMap, r = Object.keys(n);
								for (let i = 0; i < r.length; i += 1) {
									let o = r[i], s = n[o];
									t = e.glyphs.get(s), t.addUnicode(parseInt(o));
								}
								for (let n = 0; n < e.glyphs.length; n += 1) t = e.glyphs.get(n), e.cffEncoding ? t.name = e.cffEncoding.charset[n] : e.glyphNames.names && (t.name = e.glyphNames.glyphIndexToName(n));
							}(e);
						}(i, t), Ml) {
							let e = yh(o, Ml);
							i.kerningPairs = gh.parse(e.data, e.offset);
						} else i.kerningPairs = {};
						if (Dl) {
							let e = yh(o, Dl);
							i.tables.gdef = dh.parse(e.data, e.offset);
						}
						if (Ol) {
							let e = yh(o, Ol);
							i.tables.gpos = hh.parse(e.data, e.offset), i.position.init();
						}
						if (kl) {
							let e = yh(o, kl);
							i.tables.gsub = Zd.parse(e.data, e.offset);
						}
						if (A) {
							let e = yh(o, A);
							i.tables.fvar = af.parse(e.data, e.offset, i.names);
						}
						if (Sl) {
							let e = yh(o, Sl);
							i.tables.stat = ff.parse(e.data, e.offset, i.tables.fvar);
						}
						if (Cl) {
							A || console.warn("This font provides a gvar table, but no fvar table, which is required for variable fonts."), El || console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");
							let e = yh(o, Cl);
							i.tables.gvar = _f.parse(e.data, e.offset, i.tables.fvar, i.glyphs);
						}
						if (wl) {
							A || console.warn("This font provides a cvar table, but no fvar table, which is required for variable fonts."), i.tables.cvt || console.warn("This font provides a cvar table, but no cvt table which could be made variable."), El || console.warn("This font provides a gvar table, but no glyf table. Glyph variation only works with TrueType outlines.");
							let e = yh(o, wl);
							i.tables.cvar = gf.parse(e.data, e.offset, i.tables.fvar, i.tables.cvt || []);
						}
						if (Tl) {
							A || console.warn("This font provides an avar table, but no fvar table, which is required for variable fonts.");
							let e = yh(o, Tl);
							i.tables.avar = hf.parse(e.data, e.offset, i.tables.fvar);
						}
						if (jl) {
							A || console.warn("This font provides an HVAR table, but no fvar table, which is required for variable fonts."), Al || console.warn("This font provides an HVAR table, but no hmtx table to vary.");
							let e = yh(o, jl);
							i.tables.hvar = ah.parse(e.data, e.offset, i.tables.fvar);
						}
						if (Fl) {
							let e = yh(o, Fl);
							i.tables.meta = Qd.parse(e.data, e.offset), i.metas = i.tables.meta;
						}
						return i.palettes = new Vf(i), i;
					}
					function xh() {
						console.error("DEPRECATED! migrate to: opentype.parse(buffer, opt) See: https://github.com/opentypejs/opentype.js/issues/675");
					}
					function Sh() {
						console.error("DEPRECATED! migrate to: opentype.parse(require(\"fs\").readFileSync(url), opt)");
					}
					return ph = i, ((i, o, s, p) => {
						if (o && typeof o == "object" || typeof o == "function") for (let s of n(o)) r.call(i, s) || s === void 0 || e(i, s, {
							get: () => o[s],
							enumerable: !(p = t(o, s)) || p.enumerable
						});
						return i;
					})(e({}, "__esModule", { value: !0 }), ph);
				})();
				(i = typeof (r = () => ({
					...o,
					default: o
				})) == "function" ? r.call(t, n, t, e) : r) === void 0 || (e.exports = i);
			},
			416(e, t, n) {
				var r = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : { default: e };
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = async function(e, t) {
					var n;
					if (!s) {
						if (typeof navigator < "u" && "fonts" in navigator) {
							try {
								let e = await (n = navigator.permissions).request?.call(n, { name: "local-fonts" });
								if (e && e.state !== "granted") throw Error("Permission to access local fonts not granted.");
							} catch (e) {
								if (e instanceof Error && e.name !== "TypeError") throw e;
							}
							let e = {};
							try {
								let t = await navigator.fonts.query();
								for (let n of t) e.hasOwnProperty(n.family) || (e[n.family] = []), e[n.family].push(n);
								s = Promise.resolve(e);
							} catch (e) {
								e instanceof Error && console.error(e.name, e.message);
							}
						} else if (typeof window < "u" && "queryLocalFonts" in window) {
							let e = {};
							try {
								let t = await window.queryLocalFonts();
								for (let n of t) e.hasOwnProperty(n.family) || (e[n.family] = []), e[n.family].push(n);
								s = Promise.resolve(e);
							} catch (e) {
								e instanceof Error && console.error(e.name, e.message);
							}
						}
						s ??= Promise.resolve({});
					}
					let r = await s;
					for (let n of (0, o.default)(e)) {
						if (p.includes(n)) return;
						if (r.hasOwnProperty(n) && r[n].length > 0) {
							let e = r[n][0];
							if ("blob" in e) {
								let n = await (await e.blob()).arrayBuffer();
								return (0, i.loadBuffer)(n, { cacheSize: t });
							}
							return;
						}
					}
				};
				let i = n(431), o = r(n(838)), s, p = [
					"serif",
					"sans-serif",
					"cursive",
					"fantasy",
					"monospace",
					"system-ui",
					"emoji",
					"math",
					"fangsong"
				];
			},
			485(e, t) {
				function n(e, t = /* @__PURE__ */ new Map()) {
					let n = {};
					for (let [i, o] of Object.entries(e.individual)) n[i] = r(o, t);
					for (let { range: i, entry: o } of e.range) {
						let e = r(o, t);
						for (let t = i[0]; t < i[1]; t++) n[t] = e;
					}
					return n;
				}
				function r(e, t) {
					if (t.has(e)) return t.get(e);
					let r = {};
					return t.set(e, r), e.forward && (r.forward = n(e.forward, t)), e.reverse && (r.reverse = n(e.reverse, t)), e.lookup && (r.lookup = e.lookup), r;
				}
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = n;
			},
			431(e, t, n) {
				var r, i = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
					r === void 0 && (r = n);
					var i = Object.getOwnPropertyDescriptor(t, n);
					i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
						enumerable: !0,
						get: function() {
							return t[n];
						}
					}), Object.defineProperty(e, r, i);
				} : function(e, t, n, r) {
					r === void 0 && (r = n), e[r] = t[n];
				}), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
					Object.defineProperty(e, "default", {
						enumerable: !0,
						value: t
					});
				} : function(e, t) {
					e.default = t;
				}), s = this && this.__importStar || (r = function(e) {
					return r = Object.getOwnPropertyNames || function(e) {
						var t = [];
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
						return t;
					}, r(e);
				}, function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (e != null) for (var n = r(e), s = 0; s < n.length; s++) n[s] !== "default" && i(t, e, n[s]);
					return o(t, e), t;
				}), p = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : { default: e };
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.loadBuffer = function(e, t) {
					return new Ol(S.parse(e), Object.assign({ cacheSize: 0 }, t));
				};
				let S = s(n(426)), T = n(664), k = p(n(975)), A = p(n(566)), Sl = p(n(694)), Cl = p(n(929)), wl = p(n(792)), Tl = p(n(407)), El = p(n(55)), Dl = p(n(485));
				class Ol {
					constructor(e, t) {
						this._lookupTrees = [], this._glyphLookups = {}, this._font = e, t.cacheSize > 0 && (this._cache = new T.LRUCache({
							maxSize: t.cacheSize,
							sizeCalculation: (e, t) => t.length
						}));
						let n = (this._font.tables.gsub && this._font.tables.gsub.features.filter((e) => e.tag === "calt") || []).reduce((e, t) => [...e, ...t.feature.lookupListIndexes], []), r = this._font.tables.gsub && this._font.tables.gsub.lookups || [], i = r.filter((e, t) => n.some((e) => e === t));
						for (let [e, t] of i.entries()) {
							let n = [];
							switch (t.lookupType) {
								case 6:
									for (let [e, i] of t.subtables.entries()) switch (i.substFormat) {
										case 1:
											n.push((0, Cl.default)(i, r, e));
											break;
										case 2:
											n.push((0, wl.default)(i, r, e));
											break;
										case 3: n.push((0, Tl.default)(i, r, e));
									}
									break;
								case 8: for (let [e, r] of t.subtables.entries()) n.push((0, El.default)(r, e));
							}
							let i = (0, Dl.default)((0, k.default)(n));
							this._lookupTrees.push({
								tree: i,
								processForward: t.lookupType !== 8
							});
							for (let t of Object.keys(i)) this._glyphLookups[t] || (this._glyphLookups[t] = []), this._glyphLookups[t].push(e);
						}
					}
					findLigatures(e) {
						let t = this._cache && this._cache.get(e);
						if (t && !Array.isArray(t)) return t;
						let n = [];
						for (let t of e) n.push(this._font.charToGlyphIndex(t));
						if (this._lookupTrees.length === 0) return {
							inputGlyphs: n,
							outputGlyphs: n,
							contextRanges: []
						};
						let r = this._findInternal(n.slice()), i = {
							inputGlyphs: n,
							outputGlyphs: r.sequence,
							contextRanges: r.ranges
						};
						return this._cache && this._cache.set(e, i), i;
					}
					findLigatureRanges(e) {
						if (this._lookupTrees.length === 0) return [];
						let t = this._cache && this._cache.get(e);
						if (t) return Array.isArray(t) ? t : t.contextRanges;
						let n = [];
						for (let t of e) n.push(this._font.charToGlyphIndex(t));
						let r = this._findInternal(n);
						return this._cache && this._cache.set(e, r.ranges), r.ranges;
					}
					_findInternal(e) {
						let t = [], n = this._getNextLookup(e, 0);
						for (; n.index !== null;) {
							let r = this._lookupTrees[n.index];
							if (r.processForward) {
								let i = n.last;
								for (let o = n.first; o < i; o++) {
									let n = (0, A.default)(r.tree, e, o, o);
									if (n) {
										for (let t = 0; t < n.substitutions.length; t++) {
											let r = n.substitutions[t];
											r !== null && (e[o + t] = r);
										}
										(0, Sl.default)(t, n.contextRange[0] + o, n.contextRange[1] + o), o + n.length >= i && (i = o + n.length + 1), o += n.length - 1;
									}
								}
							} else for (let i = n.last - 1; i >= n.first; i--) {
								let n = (0, A.default)(r.tree, e, i, i);
								if (n) {
									for (let t = 0; t < n.substitutions.length; t++) {
										let r = n.substitutions[t];
										r !== null && (e[i + t] = r);
									}
									(0, Sl.default)(t, n.contextRange[0] + i, n.contextRange[1] + i), i -= n.length - 1;
								}
							}
							n = this._getNextLookup(e, n.index + 1);
						}
						return {
							sequence: e,
							ranges: t
						};
					}
					_getNextLookup(e, t) {
						let n = {
							index: null,
							first: Infinity,
							last: -1
						};
						for (let r = 0; r < e.length; r++) {
							let i = this._glyphLookups[e[r]];
							if (i) for (let e = 0; e < i.length; e++) {
								let o = i[e];
								if (o >= t) {
									(n.index === null || o <= n.index) && (n.index = o, n.first > r && (n.first = r), n.last = r + 1);
									break;
								}
							}
						}
						return n;
					}
				}
			},
			975(e, t) {
				function n(e, t, n) {
					for (let [i, s] of Object.entries(t.individual)) if (e.individual[i]) r(e.individual[i], s, n);
					else {
						let t = !1;
						for (let [S, { range: T, entry: k }] of e.range.entries()) {
							let A = o(Number(i), T);
							if (A.both !== null) {
								t = !0, e.individual[i] = s, r(e.individual[i], p(k), n), e.range.splice(S, 1);
								for (let t of A.second) Array.isArray(t) ? e.range.push({
									range: t,
									entry: p(k)
								}) : e.individual[t] = p(k);
							}
						}
						t || (e.individual[i] = s);
					}
					for (let { range: s, entry: S } of t.range) {
						let t = [s];
						for (let s = 0; s < e.range.length; s++) {
							let { range: T, entry: k } = e.range[s];
							for (let [A, Sl] of t.entries()) {
								if (!Array.isArray(Sl)) {
									let i = o(Sl, T);
									if (i.both === null) continue;
									e.individual[Sl] = p(S), r(e.individual[Sl], p(k), n), e.range.splice(s, 1), s--;
									for (let t of i.second) Array.isArray(t) ? e.range.push({
										range: t,
										entry: p(k)
									}) : e.individual[t] = p(k);
									t.splice(A, 1, ...i.first);
									break;
								}
								{
									let o = i(Sl, T);
									if (o.both === null) continue;
									e.range.splice(s, 1), s--;
									let A = p(k);
									Array.isArray(o.both) ? e.range.push({
										range: o.both,
										entry: A
									}) : e.individual[o.both] = A, r(A, p(S), n);
									for (let t of o.second) Array.isArray(t) ? e.range.push({
										range: t,
										entry: p(k)
									}) : e.individual[t] = p(k);
									t = o.first;
								}
							}
						}
						for (let i of Object.keys(e.individual)) for (let [s, T] of t.entries()) {
							if (Array.isArray(T)) {
								let k = o(Number(i), T);
								if (k.both === null) continue;
								r(e.individual[i], p(S), n), t.splice(s, 1, ...k.second);
								break;
							}
							if (Number(i) === T) {
								r(e.individual[i], p(S), n);
								break;
							}
						}
						for (let n of t) Array.isArray(n) ? e.range.push({
							range: n,
							entry: p(S)
						}) : e.individual[n] = p(S);
					}
				}
				function r(e, t, r) {
					let i = r.get(e);
					i != null && i.has(t) || (i || (i = /* @__PURE__ */ new Set(), r.set(e, i)), i.add(t), t.lookup && (!e.lookup || e.lookup.index > t.lookup.index || e.lookup.index === t.lookup.index && e.lookup.subIndex > t.lookup.subIndex) && (e.lookup = t.lookup), t.forward && (e.forward ? n(e.forward, t.forward, r) : e.forward = t.forward), t.reverse && (e.reverse ? n(e.reverse, t.reverse, r) : e.reverse = t.reverse));
				}
				function i(e, t) {
					let n = {
						first: [],
						second: [],
						both: null
					};
					if (e[0] < t[1] && t[0] < e[1] && (n.both = s(Math.max(e[0], t[0]), Math.min(e[1], t[1]))), e[0] < t[0]) {
						let r = e[0], i = Math.min(t[0], e[1]);
						n.first.push(s(r, i));
					} else if (t[0] < e[0]) {
						let r = t[0], i = Math.min(t[1], e[0]);
						n.second.push(s(r, i));
					}
					if (e[1] > t[1]) {
						let r = Math.max(e[0], t[1]), i = e[1];
						n.first.push(s(r, i));
					} else if (t[1] > e[1]) {
						let r = Math.max(e[1], t[0]), i = t[1];
						n.second.push(s(r, i));
					}
					return n;
				}
				function o(e, t) {
					if (e < t[0] || e > t[1]) return {
						first: [e],
						second: [t],
						both: null
					};
					let n = {
						first: [],
						second: [],
						both: e
					};
					return t[0] < e && n.second.push(s(t[0], e)), t[1] > e && n.second.push(s(e + 1, t[1])), n;
				}
				function s(e, t) {
					return t - e === 1 ? e : [e, t];
				}
				function p(e, t = /* @__PURE__ */ new Map()) {
					if (t.has(e)) return t.get(e);
					let n = {};
					return t.set(e, n), e.forward && (n.forward = S(e.forward, t)), e.reverse && (n.reverse = S(e.reverse, t)), e.lookup && (n.lookup = {
						contextRange: e.lookup.contextRange.slice(),
						index: e.lookup.index,
						length: e.lookup.length,
						subIndex: e.lookup.subIndex,
						substitutions: e.lookup.substitutions.slice()
					}), n;
				}
				function S(e, t = /* @__PURE__ */ new Map()) {
					let n = {};
					for (let [r, i] of Object.entries(e.individual)) n[r] = p(i, t);
					return {
						individual: n,
						range: e.range.map(({ range: e, entry: n }) => ({
							range: e.slice(),
							entry: p(n, t)
						}))
					};
				}
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
					let t = {
						individual: {},
						range: []
					}, r = /* @__PURE__ */ new WeakMap();
					for (let i of e) n(t, i, r);
					return t;
				};
			},
			694(e, t) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, n) {
					let r = !1;
					for (let i = 0; i < e.length; i++) {
						let o = e[i];
						if (r) {
							if (n <= o[0]) return e[i - 1][1] = n, e;
							if (n <= o[1]) return e[i - 1][1] = Math.max(n, o[1]), e.splice(i, 1), e;
							e.splice(i, 1), i--;
						} else {
							if (n <= o[0]) return e.splice(i, 0, [t, n]), e;
							if (n <= o[1]) return o[0] = Math.min(t, o[0]), e;
							if (!(t < o[1])) continue;
							o[0] = Math.min(t, o[0]), r = !0;
						}
					}
					return r ? e[e.length - 1][1] = n : e.push([t, n]), e;
				};
			},
			929(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, n) {
					let o = {
						individual: {},
						range: []
					}, s = (0, r.listGlyphsByIndex)(e.coverage);
					for (let { glyphId: r, index: p } of s) {
						let s = e.chainRuleSets[p];
						if (s) for (let [e, p] of s.entries()) {
							let s = (0, i.getInputTree)(o, p.lookupRecords, t, 0, r).map(({ entry: e, substitution: t }) => ({
								entry: e,
								substitutions: [t]
							}));
							for (let [e, n] of p.input.entries()) s = (0, i.processInputPosition)([n], e + 1, s, p.lookupRecords, t);
							for (let e of p.lookahead) s = (0, i.processLookaheadPosition)([e], s);
							for (let e of p.backtrack) s = (0, i.processBacktrackPosition)([e], s);
							for (let { entry: t, substitutions: r } of s) t.lookup = {
								substitutions: r,
								length: p.input.length + 1,
								index: n,
								subIndex: e,
								contextRange: [-1 * p.backtrack.length, 1 + p.input.length + p.lookahead.length]
							};
						}
					}
					return o;
				};
				let r = n(871), i = n(393);
			},
			792(e, t, n) {
				var r, i = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
					r === void 0 && (r = n);
					var i = Object.getOwnPropertyDescriptor(t, n);
					i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
						enumerable: !0,
						get: function() {
							return t[n];
						}
					}), Object.defineProperty(e, r, i);
				} : function(e, t, n, r) {
					r === void 0 && (r = n), e[r] = t[n];
				}), o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
					Object.defineProperty(e, "default", {
						enumerable: !0,
						value: t
					});
				} : function(e, t) {
					e.default = t;
				}), s = this && this.__importStar || (r = function(e) {
					return r = Object.getOwnPropertyNames || function(e) {
						var t = [];
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
						return t;
					}, r(e);
				}, function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (e != null) for (var n = r(e), s = 0; s < n.length; s++) n[s] !== "default" && i(t, e, n[s]);
					return o(t, e), t;
				}), p = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : { default: e };
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, n) {
					let r = [], i = (0, T.listGlyphsByIndex)(e.coverage);
					for (let { glyphId: o } of i) {
						let i = (0, k.default)(e.inputClassDef, o);
						for (let [o, s] of i.entries()) {
							if (s === null) continue;
							let i = e.chainClassSet[s];
							if (i) for (let [s, p] of i.entries()) {
								let i = {
									individual: {},
									range: []
								}, S = (0, A.getInputTree)(i, p.lookupRecords, t, 0, o).map(({ entry: e, substitution: t }) => ({
									entry: e,
									substitutions: [t]
								}));
								for (let [n, r] of p.input.entries()) S = (0, A.processInputPosition)((0, k.listClassGlyphs)(e.inputClassDef, r), n + 1, S, p.lookupRecords, t);
								for (let t of p.lookahead) S = (0, A.processLookaheadPosition)((0, k.listClassGlyphs)(e.lookaheadClassDef, t), S);
								for (let t of p.backtrack) S = (0, A.processBacktrackPosition)((0, k.listClassGlyphs)(e.backtrackClassDef, t), S);
								for (let { entry: e, substitutions: t } of S) e.lookup = {
									substitutions: t,
									index: n,
									subIndex: s,
									length: p.input.length + 1,
									contextRange: [-1 * p.backtrack.length, 1 + p.input.length + p.lookahead.length]
								};
								r.push(i);
							}
						}
					}
					return (0, S.default)(r);
				};
				let S = p(n(975)), T = n(871), k = s(n(818)), A = n(393);
			},
			407(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t, n) {
					let o = {
						individual: {},
						range: []
					}, s = (0, r.listGlyphsByIndex)(e.inputCoverage[0]);
					for (let { glyphId: p } of s) {
						let s = (0, i.getInputTree)(o, e.lookupRecords, t, 0, p).map(({ entry: e, substitution: t }) => ({
							entry: e,
							substitutions: [t]
						}));
						for (let [n, o] of e.inputCoverage.slice(1).entries()) s = (0, i.processInputPosition)((0, r.listGlyphsByIndex)(o).map((e) => e.glyphId), n + 1, s, e.lookupRecords, t);
						for (let t of e.lookaheadCoverage) s = (0, i.processLookaheadPosition)((0, r.listGlyphsByIndex)(t).map((e) => e.glyphId), s);
						for (let t of e.backtrackCoverage) s = (0, i.processBacktrackPosition)((0, r.listGlyphsByIndex)(t).map((e) => e.glyphId), s);
						for (let { entry: t, substitutions: r } of s) t.lookup = {
							substitutions: r,
							index: n,
							subIndex: 0,
							length: e.inputCoverage.length,
							contextRange: [-1 * e.backtrackCoverage.length, e.inputCoverage.length + e.lookaheadCoverage.length]
						};
					}
					return o;
				};
				let r = n(871), i = n(393);
			},
			55(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) {
					let n = {
						individual: {},
						range: []
					}, o = (0, r.listGlyphsByIndex)(e.coverage);
					for (let { glyphId: s, index: p } of o) {
						let o = {};
						Array.isArray(s) ? n.range.push({
							entry: o,
							range: s
						}) : n.individual[s] = o;
						let S = [{
							entry: o,
							substitutions: [e.substitutes[p]]
						}];
						for (let t of e.lookaheadCoverage) S = (0, i.processLookaheadPosition)((0, r.listGlyphsByIndex)(t).map((e) => e.glyphId), S);
						for (let t of e.backtrackCoverage) S = (0, i.processBacktrackPosition)((0, r.listGlyphsByIndex)(t).map((e) => e.glyphId), S);
						for (let { entry: n, substitutions: r } of S) n.lookup = {
							substitutions: r,
							index: t,
							subIndex: 0,
							length: 1,
							contextRange: [-1 * e.backtrackCoverage.length, 1 + e.lookaheadCoverage.length]
						};
					}
					return n;
				};
				let r = n(871), i = n(393);
			},
			818(e, t) {
				function n(e, t) {
					for (let n of e.ranges) if (n.start <= t && n.end >= t) return n.classId;
					return null;
				}
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) {
					return e.format === 2 ? Array.isArray(t) ? function(e, t) {
						let r = t[0], i = n(e, r), o = t[0] + 1, s = /* @__PURE__ */ new Map();
						for (; o < t[1];) n(e, o) !== i && (o - r <= 1 ? s.set(r, i) : s.set([r, o], i)), o++;
						return o - r <= 1 ? s.set(r, i) : s.set([r, o], i), s;
					}(e, t) : new Map([[t, n(e, t)]]) : new Map([[t, null]]);
				}, t.listClassGlyphs = function(e, t) {
					if (e.format === 2) {
						let n = [];
						for (let r of e.ranges) r.classId === t && (r.end === r.start ? n.push(r.start) : n.push([r.start, r.end + 1]));
						return n;
					}
					return [];
				};
			},
			871(e, t) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e, t) {
					switch (e.format) {
						case 1:
							let n = e.glyphs.indexOf(t);
							return n === -1 ? null : n;
						case 2:
							let r = e.ranges.find((e) => e.start <= t && e.end >= t);
							return r ? r.index : null;
					}
				}, t.listGlyphsByIndex = function(e) {
					switch (e.format) {
						case 1: return e.glyphs.map((e, t) => ({
							glyphId: e,
							index: t
						}));
						case 2:
							let t = [];
							for (let [n, r] of e.ranges.entries()) r.end === r.start ? t.push({
								glyphId: r.start,
								index: n
							}) : t.push({
								glyphId: [r.start, r.end + 1],
								index: n
							});
							return t;
					}
				};
			},
			393(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.processInputPosition = function(e, t, n, r, o) {
					let s = [];
					for (let p of n) {
						p.entry.forward = {
							individual: {},
							range: []
						};
						for (let n of e) s.push(...i(p.entry.forward, r, o, t, n).map(({ entry: e, substitution: t }) => ({
							entry: e,
							substitutions: [...p.substitutions, t]
						})));
					}
					return s;
				}, t.processLookaheadPosition = function(e, t) {
					var n;
					let r = [], i = /* @__PURE__ */ new Set();
					for (let o of t) {
						if (i.has(o.entry)) continue;
						i.add(o.entry), (n = o.entry).forward ?? (n.forward = {
							individual: {},
							range: []
						});
						let t = {};
						for (let n of e) Array.isArray(n) ? o.entry.forward.range.push({
							entry: t,
							range: n
						}) : o.entry.forward.individual[n] = t;
						r.push({
							entry: t,
							substitutions: o.substitutions
						});
					}
					return r;
				}, t.processBacktrackPosition = function(e, t) {
					var n;
					let r = [], i = /* @__PURE__ */ new Set();
					for (let o of t) {
						if (i.has(o.entry)) continue;
						i.add(o.entry), (n = o.entry).reverse ?? (n.reverse = {
							individual: {},
							range: []
						});
						let t = {};
						for (let n of e) Array.isArray(n) ? o.entry.reverse.range.push({
							entry: t,
							range: n
						}) : o.entry.reverse.individual[n] = t;
						r.push({
							entry: t,
							substitutions: o.substitutions
						});
					}
					return r;
				}, t.getInputTree = i;
				let r = n(76);
				function i(e, t, n, i, s) {
					let p = [];
					if (Array.isArray(s)) {
						let o = function(e, t, n, i) {
							for (let o of e.filter((e) => e.sequenceIndex === n)) for (let e of t[o.lookupListIndex].subtables) {
								let t = (0, r.getRangeSubstitutionGlyphs)(e, i);
								if (!Array.from(t.values()).every((e) => e !== null)) return t;
							}
							return new Map([[i, null]]);
						}(t, n, i, s);
						for (let [t, n] of o) {
							let r = {};
							Array.isArray(t) ? e.range.push({
								range: t,
								entry: r
							}) : e.individual[t] = {}, p.push({
								entry: r,
								substitution: n
							});
						}
					} else e.individual[s] = {}, p.push({
						entry: e.individual[s],
						substitution: o(t, n, i, s)
					});
					return p;
				}
				function o(e, t, n, i) {
					for (let o of e.filter((e) => e.sequenceIndex === n)) for (let e of t[o.lookupListIndex].subtables) {
						let t = (0, r.getIndividualSubstitutionGlyph)(e, i);
						if (t !== null) return t;
					}
					return null;
				}
			},
			76(e, t, n) {
				var r = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : { default: e };
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.getRangeSubstitutionGlyphs = function(e, t) {
					let n = t[0], r = o(e, n), i = t[0] + 1, s = /* @__PURE__ */ new Map();
					for (; i < t[1];) o(e, i) !== r && (i - n <= 1 ? s.set(n, r) : s.set([n, i], r)), i++;
					return i - n <= 1 ? s.set(n, r) : s.set([n, i], r), s;
				}, t.getIndividualSubstitutionGlyph = o;
				let i = r(n(871));
				function o(e, t) {
					let n = (0, i.default)(e.coverage, t);
					if (n === null) return null;
					switch (e.substFormat) {
						case 1: return (t + e.deltaGlyphId) % 65536;
						case 2: return e.substitute[n] ?? null;
					}
				}
			},
			566(e, t) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function e(t, n, r, i) {
					let o = t[n[i]];
					if (!o) return;
					let s = o.lookup;
					if (o.reverse) {
						let e = function(e, t, n) {
							let r = e[t[--n]], i = r && r.lookup;
							for (; r && ((!i && r.lookup || r.lookup && i && i.index > r.lookup.index) && (i = r.lookup), !(--n < 0) && r.reverse);) r = r.reverse[t[n]];
							return i;
						}(o.reverse, n, r);
						(!s && e || e && s && (s.index > e.index || s.index === e.index && s.subIndex > e.subIndex)) && (s = e);
					}
					if (++i >= n.length || !o.forward) return s;
					let p = e(o.forward, n, r, i);
					return (!s && p || p && s && (s.index > p.index || s.index === p.index && s.subIndex > p.subIndex)) && (s = p), s;
				};
			},
			241(e, t, n) {
				var r = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : { default: e };
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.enableLigatures = function(e, t = []) {
					let n, r, o, s = 0;
					return e.registerCharacterJoiner((p) => {
						let S = e.options.fontFamily;
						if (S && (s === 0 || n !== S)) {
							r = void 0, s = 1, n = S;
							let t = n;
							(0, i.default)(t, 1e5).then((n) => {
								t === e.options.fontFamily && (s = 2, r = n, n && e.refresh(0, e.rows - 1));
							}).catch((n) => {
								t === e.options.fontFamily && (s = 3, e.options.logLevel === "debug" && console.debug(o, /* @__PURE__ */ Error("Failure while loading font")), r = void 0, o = n);
							});
						}
						return r && s === 2 ? r.findLigatureRanges(p).map((e) => [e[0], e[1]]) : function(e, t) {
							let n = [];
							for (let r = 0; r < e.length; r++) for (let i = 0; i < t.length; i++) if (e.startsWith(t[i], r)) {
								n.push([r, r + t[i].length]), r += t[i].length - 1;
								break;
							}
							return n;
						}(p, t);
					});
				};
				let i = r(n(416));
			},
			838(e, t) {
				function n(e, t) {
					let n = "", r = !1;
					for (; e.offset < e.input.length;) {
						let o = e.input[e.offset++];
						if (r) /[\dA-Fa-f]/.test(o) ? (e.offset--, n += i(e)) : o !== "\n" && (n += o), r = !1;
						else switch (o) {
							case t: return n;
							case "\\":
								r = !0;
								break;
							default: n += o;
						}
					}
					throw Error("Unterminated string");
				}
				function r(e) {
					let t = "", n = !1;
					for (; e.offset < e.input.length;) {
						let r = e.input[e.offset++];
						if (n) /[\dA-Fa-f]/.test(r) ? (e.offset--, t += i(e)) : t += r, n = !1;
						else switch (r) {
							case "\\":
								n = !0;
								break;
							case ",": return t;
							default: /\s/.test(r) ? t.endsWith(" ") || (t += " ") : t += r;
						}
					}
					return t;
				}
				function i(e) {
					let t = "";
					for (; e.offset < e.input.length;) {
						let n = e.input[e.offset++];
						if (/\s/.test(n)) return o(t);
						if (t.length >= 6 || !/[\dA-Fa-f]/.test(n)) return e.offset--, o(t);
						t += n;
					}
					return o(t);
				}
				function o(e) {
					return String.fromCodePoint(parseInt(e, 16));
				}
				Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function(e) {
					if (typeof e != "string") throw Error("Font family must be a string");
					let t = {
						input: e,
						offset: 0
					}, i = [], o = "";
					for (; t.offset < t.input.length;) {
						let e = t.input[t.offset++];
						switch (e) {
							case "'":
							case "\"":
								o += n(t, e);
								break;
							case ",":
								i.push(o), o = "";
								break;
							default: /\s/.test(e) || (t.offset--, o += r(t), i.push(o), o = "");
						}
					}
					return i;
				};
			},
			664(e, t) {
				var n = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), r = n((e) => {
					Object.defineProperty(e, "__esModule", { value: !0 }), e.tracing = e.metrics = void 0;
					var t = { hasSubscribers: !1 };
					e.metrics = t, e.tracing = t;
				}), i = n((e) => {
					Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultPerf = void 0, e.defaultPerf = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date;
				});
				Object.defineProperty(t, "__esModule", { value: !0 }), t.LRUCache = void 0;
				var o = r(), s = i(), p = () => o.metrics.hasSubscribers || o.tracing.hasSubscribers, S = /* @__PURE__ */ new Set(), T = typeof process == "object" && process ? process : {}, k = (e) => !!e && e === Math.floor(e) && e > 0 && isFinite(e), A = (e) => k(e) ? e <= 2 ** 8 ? Uint8Array : e <= 2 ** 16 ? Uint16Array : e <= 2 ** 32 ? Uint32Array : e <= 2 ** 53 - 1 ? Sl : null : null, Sl = class extends Array {
					constructor(e) {
						super(e), this.fill(0);
					}
				}, Cl = class e {
					heap;
					length;
					static #e = !1;
					static create(t) {
						let n = A(t);
						if (!n) return [];
						e.#e = !0;
						let r = new e(t, n);
						return e.#e = !1, r;
					}
					constructor(t, n) {
						if (!e.#e) throw TypeError("instantiate Stack using Stack.create(n)");
						this.heap = new n(t), this.length = 0;
					}
					push(e) {
						this.heap[this.length++] = e;
					}
					pop() {
						return this.heap[--this.length];
					}
				};
				t.LRUCache = class e {
					#e;
					#t;
					#n;
					#r;
					#i;
					#a;
					#o;
					#s;
					get perf() {
						return this.#s;
					}
					ttl;
					ttlResolution;
					ttlAutopurge;
					updateAgeOnGet;
					updateAgeOnHas;
					allowStale;
					noDisposeOnSet;
					noUpdateTTL;
					maxEntrySize;
					sizeCalculation;
					noDeleteOnFetchRejection;
					noDeleteOnStaleGet;
					allowStaleOnFetchAbort;
					allowStaleOnFetchRejection;
					ignoreFetchAbort;
					backgroundFetchSize;
					#c;
					#l;
					#u;
					#d;
					#f;
					#p;
					#m;
					#h;
					#g;
					#_;
					#v;
					#y;
					#b;
					#x;
					#S;
					#C;
					#w;
					#T;
					#E;
					static unsafeExposeInternals(e) {
						return {
							starts: e.#b,
							ttls: e.#x,
							autopurgeTimers: e.#S,
							sizes: e.#y,
							keyMap: e.#u,
							keyList: e.#d,
							valList: e.#f,
							next: e.#p,
							prev: e.#m,
							get head() {
								return e.#h;
							},
							get tail() {
								return e.#g;
							},
							free: e.#_,
							isBackgroundFetch: (t) => e.#W(t),
							backgroundFetch: (t, n, r, i) => e.#U(t, n, r, i),
							moveToTail: (t) => e.#X(t),
							indexes: (t) => e.#I(t),
							rindexes: (t) => e.#L(t),
							isStale: (t) => e.#j(t)
						};
					}
					get max() {
						return this.#e;
					}
					get maxSize() {
						return this.#t;
					}
					get calculatedSize() {
						return this.#l;
					}
					get size() {
						return this.#c;
					}
					get fetchMethod() {
						return this.#a;
					}
					get memoMethod() {
						return this.#o;
					}
					get dispose() {
						return this.#n;
					}
					get onInsert() {
						return this.#r;
					}
					get disposeAfter() {
						return this.#i;
					}
					constructor(t) {
						let { max: n = 0, ttl: r, ttlResolution: i = 1, ttlAutopurge: o, updateAgeOnGet: p, updateAgeOnHas: Sl, allowStale: wl, dispose: Tl, onInsert: El, disposeAfter: Dl, noDisposeOnSet: Ol, noUpdateTTL: kl, maxSize: Al = 0, maxEntrySize: jl = 0, sizeCalculation: Ml, fetchMethod: Nl, memoMethod: Pl, noDeleteOnFetchRejection: Fl, noDeleteOnStaleGet: Il, allowStaleOnFetchRejection: Ll, allowStaleOnFetchAbort: Rl, ignoreFetchAbort: zl, backgroundFetchSize: Bl = 1, perf: Vl } = t;
						if (this.backgroundFetchSize = Bl, Vl !== void 0 && typeof Vl?.now != "function") throw TypeError("perf option must have a now() method if specified");
						if (this.#s = Vl ?? s.defaultPerf, n !== 0 && !k(n)) throw TypeError("max option must be a nonnegative integer");
						let Hl = n ? A(n) : Array;
						if (!Hl) throw Error("invalid max value: " + n);
						if (this.#e = n, this.#t = Al, this.maxEntrySize = jl || this.#t, this.sizeCalculation = Ml, this.sizeCalculation) {
							if (!this.#t && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
							if (typeof this.sizeCalculation != "function") throw TypeError("sizeCalculation set to non-function");
						}
						if (Pl !== void 0 && typeof Pl != "function") throw TypeError("memoMethod must be a function if defined");
						if (this.#o = Pl, Nl !== void 0 && typeof Nl != "function") throw TypeError("fetchMethod must be a function if specified");
						if (this.#a = Nl, this.#w = !!Nl, this.#u = /* @__PURE__ */ new Map(), this.#d = Array.from({ length: n }).fill(void 0), this.#f = Array.from({ length: n }).fill(void 0), this.#p = new Hl(n), this.#m = new Hl(n), this.#h = 0, this.#g = 0, this.#_ = Cl.create(n), this.#c = 0, this.#l = 0, typeof Tl == "function" && (this.#n = Tl), typeof El == "function" && (this.#r = El), typeof Dl == "function" ? (this.#i = Dl, this.#v = []) : (this.#i = void 0, this.#v = void 0), this.#C = !!this.#n, this.#E = !!this.#r, this.#T = !!this.#i, this.noDisposeOnSet = !!Ol, this.noUpdateTTL = !!kl, this.noDeleteOnFetchRejection = !!Fl, this.allowStaleOnFetchRejection = !!Ll, this.allowStaleOnFetchAbort = !!Rl, this.ignoreFetchAbort = !!zl, this.maxEntrySize !== 0) {
							if (this.#t !== 0 && !k(this.#t)) throw TypeError("maxSize must be a positive integer if specified");
							if (!k(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
							this.#M();
						}
						if (this.allowStale = !!wl, this.noDeleteOnStaleGet = !!Il, this.updateAgeOnGet = !!p, this.updateAgeOnHas = !!Sl, this.ttlResolution = k(i) || i === 0 ? i : 1, this.ttlAutopurge = !!o, this.ttl = r || 0, this.ttl) {
							if (!k(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
							this.#D();
						}
						if (this.#e === 0 && this.ttl === 0 && this.#t === 0) throw TypeError("At least one of max, maxSize, or ttl is required");
						if (!this.ttlAutopurge && !this.#e && !this.#t) {
							let t = "LRU_CACHE_UNBOUNDED";
							((e) => !S.has(e))(t) && (S.add(t), ((e, t, n, r) => {
								typeof T.emitWarning == "function" ? T.emitWarning(e, t, n, r) : console.error(`[${n}] ${t}: ${e}`);
							})("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", t, e));
						}
					}
					getRemainingTTL(e) {
						return this.#u.has(e) ? Infinity : 0;
					}
					#D() {
						let e = new Sl(this.#e), t = new Sl(this.#e);
						this.#x = e, this.#b = t;
						let n = this.ttlAutopurge ? Array.from({ length: this.#e }) : void 0;
						this.#S = n, this.#A = (n, i, o = this.#s.now()) => {
							t[n] = i === 0 ? 0 : o, e[n] = i, r(n, i);
						}, this.#O = (n) => {
							t[n] = e[n] === 0 ? 0 : this.#s.now(), r(n, e[n]);
						};
						let r = this.ttlAutopurge ? (e, t) => {
							if (n?.[e] && (clearTimeout(n[e]), n[e] = void 0), t && t !== 0 && n) {
								let r = setTimeout(() => {
									this.#j(e) && this.#Z(this.#d[e], "expire");
								}, t + 1);
								r.unref && r.unref(), n[e] = r;
							}
						} : () => {};
						this.#k = (n, r) => {
							if (e[r]) {
								let s = e[r], p = t[r];
								if (!s || !p) return;
								n.ttl = s, n.start = p, n.now = i || o(), n.remainingTTL = s - (n.now - p);
							}
						};
						let i = 0, o = () => {
							let e = this.#s.now();
							if (this.ttlResolution > 0) {
								i = e;
								let t = setTimeout(() => i = 0, this.ttlResolution);
								t.unref && t.unref();
							}
							return e;
						};
						this.getRemainingTTL = (n) => {
							let r = this.#u.get(n);
							if (r === void 0) return 0;
							let s = e[r], p = t[r];
							return s && p ? s - ((i || o()) - p) : Infinity;
						}, this.#j = (n) => {
							let r = t[n], s = e[n];
							return !!s && !!r && (i || o()) - r > s;
						};
					}
					#O = () => {};
					#k = () => {};
					#A = () => {};
					#j = () => !1;
					#M() {
						let e = new Sl(this.#e);
						this.#l = 0, this.#y = e, this.#N = (t) => {
							this.#l -= e[t], e[t] = 0;
						}, this.#F = (e, t, n, r) => {
							if (!k(n)) {
								if (this.#W(t)) return this.backgroundFetchSize;
								if (!r) throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
								if (typeof r != "function") throw TypeError("sizeCalculation must be a function");
								if (n = r(t, e), !k(n)) throw TypeError("sizeCalculation return invalid (expect positive integer)");
							}
							return n;
						}, this.#P = (t, n, r) => {
							if (e[t] = n, this.#t) {
								let n = this.#t - e[t];
								for (; this.#l > n;) this.#B(!0);
							}
							this.#l += e[t], r && (r.entrySize = n, r.totalCalculatedSize = this.#l);
						};
					}
					#N = (e) => {};
					#P = (e, t, n) => {};
					#F = (e, t, n, r) => {
						if (n || r) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
						return 0;
					};
					*#I({ allowStale: e = this.allowStale } = {}) {
						if (this.#c) for (let t = this.#g; this.#R(t) && ((e || !this.#j(t)) && (yield t), t !== this.#h);) t = this.#m[t];
					}
					*#L({ allowStale: e = this.allowStale } = {}) {
						if (this.#c) for (let t = this.#h; this.#R(t) && ((e || !this.#j(t)) && (yield t), t !== this.#g);) t = this.#p[t];
					}
					#R(e) {
						return e !== void 0 && this.#u.get(this.#d[e]) === e;
					}
					*entries() {
						for (let e of this.#I()) this.#f[e] !== void 0 && this.#d[e] !== void 0 && !this.#W(this.#f[e]) && (yield [this.#d[e], this.#f[e]]);
					}
					*rentries() {
						for (let e of this.#L()) this.#f[e] !== void 0 && this.#d[e] !== void 0 && !this.#W(this.#f[e]) && (yield [this.#d[e], this.#f[e]]);
					}
					*keys() {
						for (let e of this.#I()) {
							let t = this.#d[e];
							t !== void 0 && !this.#W(this.#f[e]) && (yield t);
						}
					}
					*rkeys() {
						for (let e of this.#L()) {
							let t = this.#d[e];
							t !== void 0 && !this.#W(this.#f[e]) && (yield t);
						}
					}
					*values() {
						for (let e of this.#I()) this.#f[e] !== void 0 && !this.#W(this.#f[e]) && (yield this.#f[e]);
					}
					*rvalues() {
						for (let e of this.#L()) this.#f[e] !== void 0 && !this.#W(this.#f[e]) && (yield this.#f[e]);
					}
					[Symbol.iterator]() {
						return this.entries();
					}
					[Symbol.toStringTag] = "LRUCache";
					find(e, t = {}) {
						for (let n of this.#I()) {
							let r = this.#f[n], i = this.#W(r) ? r.__staleWhileFetching : r;
							if (i !== void 0 && e(i, this.#d[n], this)) return this.#J(this.#d[n], t);
						}
					}
					forEach(e, t = this) {
						for (let n of this.#I()) {
							let r = this.#f[n], i = this.#W(r) ? r.__staleWhileFetching : r;
							i !== void 0 && e.call(t, i, this.#d[n], this);
						}
					}
					rforEach(e, t = this) {
						for (let n of this.#L()) {
							let r = this.#f[n], i = this.#W(r) ? r.__staleWhileFetching : r;
							i !== void 0 && e.call(t, i, this.#d[n], this);
						}
					}
					purgeStale() {
						let e = !1;
						for (let t of this.#L({ allowStale: !0 })) this.#j(t) && (this.#Z(this.#d[t], "expire"), e = !0);
						return e;
					}
					info(e) {
						let t = this.#u.get(e);
						if (t === void 0) return;
						let n = this.#f[t], r = this.#W(n) ? n.__staleWhileFetching : n;
						if (r === void 0) return;
						let i = { value: r };
						if (this.#x && this.#b) {
							let e = this.#x[t], n = this.#b[t];
							e && n && (i.ttl = e - (this.#s.now() - n), i.start = Date.now());
						}
						return this.#y && (i.size = this.#y[t]), i;
					}
					dump() {
						let e = [];
						for (let t of this.#I({ allowStale: !0 })) {
							let n = this.#d[t], r = this.#f[t], i = this.#W(r) ? r.__staleWhileFetching : r;
							if (i === void 0 || n === void 0) continue;
							let o = { value: i };
							if (this.#x && this.#b) {
								o.ttl = this.#x[t];
								let e = this.#s.now() - this.#b[t];
								o.start = Math.floor(Date.now() - e);
							}
							this.#y && (o.size = this.#y[t]), e.unshift([n, o]);
						}
						return e;
					}
					load(e) {
						this.clear();
						for (let [t, n] of e) {
							if (n.start) {
								let e = Date.now() - n.start;
								n.start = this.#s.now() - e;
							}
							this.#z(t, n.value, n);
						}
					}
					set(e, t, n = {}) {
						let { status: r = o.metrics.hasSubscribers ? {} : void 0 } = n;
						n.status = r, r && (r.op = "set", r.key = e, t !== void 0 && (r.value = t), r.cache = this);
						let i = this.#z(e, t, n);
						return r && o.metrics.hasSubscribers && o.metrics.publish(r), i;
					}
					#z(e, t, n, r) {
						let { ttl: i = this.ttl, start: o, noDisposeOnSet: s = this.noDisposeOnSet, sizeCalculation: p = this.sizeCalculation, status: S } = n, T = this.#W(t);
						if (t === void 0) return S && (S.set = "deleted"), this.delete(e), this;
						let { noUpdateTTL: k = this.noUpdateTTL } = n;
						S && !T && (S.value = t);
						let A = this.#F(e, t, n.size || 0, p, S);
						if (this.maxEntrySize && A > this.maxEntrySize) return this.#Z(e, "set"), S && (S.set = "miss", S.maxEntrySizeExceeded = !0), this;
						let Sl = this.#c === 0 ? void 0 : this.#u.get(e);
						if (Sl === void 0) Sl = this.#c === 0 ? this.#g : this.#_.length === 0 ? this.#c === this.#e ? this.#B(!1) : this.#c : this.#_.pop(), this.#d[Sl] = e, this.#f[Sl] = t, this.#u.set(e, Sl), this.#p[this.#g] = Sl, this.#m[Sl] = this.#g, this.#g = Sl, this.#c++, this.#P(Sl, A, S), S && (S.set = "add"), k = !1, this.#E && !T && this.#r?.(t, e, "add");
						else {
							this.#X(Sl);
							let n = this.#f[Sl];
							if (t !== n) {
								if (!s) if (this.#W(n)) {
									n !== r && n.__abortController.abort(/* @__PURE__ */ Error("replaced"));
									let { __staleWhileFetching: i } = n;
									i !== void 0 && i !== t && (this.#C && this.#n?.(i, e, "set"), this.#T && this.#v?.push([
										i,
										e,
										"set"
									]));
								} else this.#C && this.#n?.(n, e, "set"), this.#T && this.#v?.push([
									n,
									e,
									"set"
								]);
								if (this.#N(Sl), this.#P(Sl, A, S), this.#f[Sl] = t, !T) {
									let r = n && this.#W(n) ? n.__staleWhileFetching : n, i = r === void 0 ? "add" : t === r ? "update" : "replace";
									S && (S.set = i, r !== void 0 && (S.oldValue = r)), this.#E && this.onInsert?.(t, e, i);
								}
							} else T || (S && (S.set = "update"), this.#E && this.onInsert?.(t, e, "update"));
						}
						if (i !== 0 && !this.#x && this.#D(), this.#x && (k || this.#A(Sl, i, o), S && this.#k(S, Sl)), !s && this.#T && this.#v) {
							let e, t = this.#v;
							for (; e = t?.shift();) this.#i?.(...e);
						}
						return this;
					}
					pop() {
						try {
							for (; this.#c;) {
								let e = this.#f[this.#h];
								if (this.#B(!0), this.#W(e)) {
									if (e.__staleWhileFetching) return e.__staleWhileFetching;
								} else if (e !== void 0) return e;
							}
						} finally {
							if (this.#T && this.#v) {
								let e, t = this.#v;
								for (; e = t?.shift();) this.#i?.(...e);
							}
						}
					}
					#B(e) {
						let t = this.#h, n = this.#d[t], r = this.#f[t], i = this.#W(r);
						i && r.__abortController.abort(/* @__PURE__ */ Error("evicted"));
						let o = i ? r.__staleWhileFetching : r;
						return (this.#C || this.#T) && o !== void 0 && (this.#C && this.#n?.(o, n, "evict"), this.#T && this.#v?.push([
							o,
							n,
							"evict"
						])), this.#N(t), this.#S?.[t] && (clearTimeout(this.#S[t]), this.#S[t] = void 0), e && (this.#d[t] = void 0, this.#f[t] = void 0, this.#_.push(t)), this.#c === 1 ? (this.#h = this.#g = 0, this.#_.length = 0) : this.#h = this.#p[t], this.#u.delete(n), this.#c--, t;
					}
					has(e, t = {}) {
						let { status: n = o.metrics.hasSubscribers ? {} : void 0 } = t;
						t.status = n, n && (n.op = "has", n.key = e, n.cache = this);
						let r = this.#V(e, t);
						return o.metrics.hasSubscribers && o.metrics.publish(n), r;
					}
					#V(e, t = {}) {
						let { updateAgeOnHas: n = this.updateAgeOnHas, status: r } = t, i = this.#u.get(e);
						if (i !== void 0) {
							let e = this.#f[i];
							if (this.#W(e) && e.__staleWhileFetching === void 0) return !1;
							if (!this.#j(i)) return n && this.#O(i), r && (r.has = "hit", this.#k(r, i)), !0;
							r && (r.has = "stale", this.#k(r, i));
						} else r && (r.has = "miss");
						return !1;
					}
					peek(e, t = {}) {
						let { status: n = p() ? {} : void 0 } = t;
						n && (n.op = "peek", n.key = e, n.cache = this), t.status = n;
						let r = this.#H(e, t);
						return o.metrics.hasSubscribers && o.metrics.publish(n), r;
					}
					#H(e, t) {
						let { status: n, allowStale: r = this.allowStale } = t, i = this.#u.get(e);
						if (i === void 0 || !r && this.#j(i)) return void (n && (n.peek = i === void 0 ? "miss" : "stale"));
						let o = this.#f[i], s = this.#W(o) ? o.__staleWhileFetching : o;
						return n && (s === void 0 ? n.peek = "miss" : (n.peek = "hit", n.value = s)), s;
					}
					#U(e, t, n, r) {
						let i = t === void 0 ? void 0 : this.#f[t];
						if (this.#W(i)) return i;
						let o = new AbortController(), { signal: s } = n;
						s?.addEventListener("abort", () => o.abort(s.reason), { signal: o.signal });
						let p = {
							signal: o.signal,
							options: n,
							context: r
						}, S = (r, i = !1) => {
							let { aborted: s } = o.signal, S = n.ignoreFetchAbort && r !== void 0, A = n.ignoreFetchAbort || !(!n.allowStaleOnFetchAbort || r === void 0);
							if (n.status && (s && !i ? (n.status.fetchAborted = !0, n.status.fetchError = o.signal.reason, S && (n.status.fetchAbortIgnored = !0)) : n.status.fetchResolved = !0), s && !S && !i) return T(o.signal.reason, A);
							let Sl = k, Cl = this.#f[t];
							return (Cl === k || Cl === void 0 && S && i) && (r === void 0 ? Sl.__staleWhileFetching === void 0 ? this.#Z(e, "fetch") : this.#f[t] = Sl.__staleWhileFetching : (n.status && (n.status.fetchUpdated = !0), this.#z(e, r, p.options, Sl))), r;
						}, T = (r, i) => {
							let { aborted: s } = o.signal, p = s && n.allowStaleOnFetchAbort, S = p || n.allowStaleOnFetchRejection, T = S || n.noDeleteOnFetchRejection, A = k;
							if (this.#f[t] === k && (!T || !i && A.__staleWhileFetching === void 0 ? this.#Z(e, "fetch") : p || (this.#f[t] = A.__staleWhileFetching)), S) return n.status && A.__staleWhileFetching !== void 0 && (n.status.returnedStale = !0), A.__staleWhileFetching;
							if (A.__returned === A) throw r;
						};
						n.status && (n.status.fetchDispatched = !0);
						let k = new Promise((t, r) => {
							let s = this.#a?.(e, i, p);
							o.signal.addEventListener("abort", () => {
								(!n.ignoreFetchAbort || n.allowStaleOnFetchAbort) && (t(void 0), n.allowStaleOnFetchAbort && (t = (e) => S(e, !0)));
							}), s && s instanceof Promise ? s.then((e) => t(e === void 0 ? void 0 : e), r) : s !== void 0 && t(s);
						}).then(S, (e) => (n.status && (n.status.fetchRejected = !0, n.status.fetchError = e), T(e, !1))), A = Object.assign(k, {
							__abortController: o,
							__staleWhileFetching: i,
							__returned: void 0
						});
						return t === void 0 ? (this.#z(e, A, {
							...p.options,
							status: void 0
						}), t = this.#u.get(e)) : this.#f[t] = A, A;
					}
					#W(e) {
						if (!this.#w) return !1;
						let t = e;
						return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof AbortController;
					}
					fetch(e, t = {}) {
						let n = o.tracing.hasSubscribers, { status: r = p() ? {} : void 0 } = t;
						t.status = r, r && t.context && (r.context = t.context);
						let i = this.#G(e, t);
						return r && n && (r.trace = !0, o.tracing.tracePromise(() => i, r).catch(() => {})), i;
					}
					async #G(e, t = {}) {
						let { allowStale: n = this.allowStale, updateAgeOnGet: r = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, ttl: o = this.ttl, noDisposeOnSet: s = this.noDisposeOnSet, size: p = 0, sizeCalculation: S = this.sizeCalculation, noUpdateTTL: T = this.noUpdateTTL, noDeleteOnFetchRejection: k = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: A = this.allowStaleOnFetchRejection, ignoreFetchAbort: Sl = this.ignoreFetchAbort, allowStaleOnFetchAbort: Cl = this.allowStaleOnFetchAbort, context: wl, forceRefresh: Tl = !1, status: El, signal: Dl } = t;
						if (El && (El.op = "fetch", El.key = e, Tl && (El.forceRefresh = !0), El.cache = this), !this.#w) return El && (El.fetch = "get"), this.#J(e, {
							allowStale: n,
							updateAgeOnGet: r,
							noDeleteOnStaleGet: i,
							status: El
						});
						let Ol = {
							allowStale: n,
							updateAgeOnGet: r,
							noDeleteOnStaleGet: i,
							ttl: o,
							noDisposeOnSet: s,
							size: p,
							sizeCalculation: S,
							noUpdateTTL: T,
							noDeleteOnFetchRejection: k,
							allowStaleOnFetchRejection: A,
							allowStaleOnFetchAbort: Cl,
							ignoreFetchAbort: Sl,
							status: El,
							signal: Dl
						}, kl = this.#u.get(e);
						if (kl === void 0) {
							El && (El.fetch = "miss");
							let t = this.#U(e, kl, Ol, wl);
							return t.__returned = t;
						}
						{
							let t = this.#f[kl];
							if (this.#W(t)) {
								let e = n && t.__staleWhileFetching !== void 0;
								return El && (El.fetch = "inflight", e && (El.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t;
							}
							let i = this.#j(kl);
							if (!Tl && !i) return El && (El.fetch = "hit"), this.#X(kl), r && this.#O(kl), El && this.#k(El, kl), t;
							let o = this.#U(e, kl, Ol, wl), s = o.__staleWhileFetching !== void 0 && n;
							return El && (El.fetch = i ? "stale" : "refresh", s && i && (El.returnedStale = !0)), s ? o.__staleWhileFetching : o.__returned = o;
						}
					}
					forceFetch(e, t = {}) {
						let n = o.tracing.hasSubscribers, { status: r = p() ? {} : void 0 } = t;
						t.status = r, r && t.context && (r.context = t.context);
						let i = this.#K(e, t);
						return r && n && (r.trace = !0, o.tracing.tracePromise(() => i, r).catch(() => {})), i;
					}
					async #K(e, t = {}) {
						let n = await this.#G(e, t);
						if (n === void 0) throw Error("fetch() returned undefined");
						return n;
					}
					memo(e, t = {}) {
						let { status: n = o.metrics.hasSubscribers ? {} : void 0 } = t;
						t.status = n, n && (n.op = "memo", n.key = e, t.context && (n.context = t.context), n.cache = this);
						let r = this.#q(e, t);
						return n && (n.value = r), o.metrics.hasSubscribers && o.metrics.publish(n), r;
					}
					#q(e, t = {}) {
						let n = this.#o;
						if (!n) throw Error("no memoMethod provided to constructor");
						let { context: r, status: i, forceRefresh: o, ...s } = t;
						i && o && (i.forceRefresh = !0);
						let p = this.#J(e, s), S = o || p === void 0;
						if (i && (i.memo = S ? "miss" : "hit", S || (i.value = p)), !S) return p;
						let T = n(e, p, {
							options: s,
							context: r
						});
						return i && (i.value = T), this.#z(e, T, s), T;
					}
					get(e, t = {}) {
						let { status: n = o.metrics.hasSubscribers ? {} : void 0 } = t;
						t.status = n, n && (n.op = "get", n.key = e, n.cache = this);
						let r = this.#J(e, t);
						return n && (r !== void 0 && (n.value = r), o.metrics.hasSubscribers && o.metrics.publish(n)), r;
					}
					#J(e, t = {}) {
						let { allowStale: n = this.allowStale, updateAgeOnGet: r = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, status: o } = t, s = this.#u.get(e);
						if (s === void 0) return void (o && (o.get = "miss"));
						let p = this.#f[s], S = this.#W(p);
						return o && this.#k(o, s), this.#j(s) ? S ? (o && (o.get = "stale-fetching"), n && p.__staleWhileFetching !== void 0 ? (o && (o.returnedStale = !0), p.__staleWhileFetching) : void 0) : (i || this.#Z(e, "expire"), o && (o.get = "stale"), n ? (o && (o.returnedStale = !0), p) : void 0) : (o && (o.get = S ? "fetching" : "hit"), this.#X(s), r && this.#O(s), S ? p.__staleWhileFetching : p);
					}
					#Y(e, t) {
						this.#m[t] = e, this.#p[e] = t;
					}
					#X(e) {
						e !== this.#g && (e === this.#h ? this.#h = this.#p[e] : this.#Y(this.#m[e], this.#p[e]), this.#Y(this.#g, e), this.#g = e);
					}
					delete(e) {
						return this.#Z(e, "delete");
					}
					#Z(e, t) {
						o.metrics.hasSubscribers && o.metrics.publish({
							op: "delete",
							delete: t,
							key: e,
							cache: this
						});
						let n = !1;
						if (this.#c !== 0) {
							let r = this.#u.get(e);
							if (r !== void 0) if (this.#S?.[r] && (clearTimeout(this.#S?.[r]), this.#S[r] = void 0), n = !0, this.#c === 1) this.#Q(t);
							else {
								this.#N(r);
								let n = this.#f[r];
								if (this.#W(n) ? n.__abortController.abort(/* @__PURE__ */ Error("deleted")) : (this.#C || this.#T) && (this.#C && this.#n?.(n, e, t), this.#T && this.#v?.push([
									n,
									e,
									t
								])), this.#u.delete(e), this.#d[r] = void 0, this.#f[r] = void 0, r === this.#g) this.#g = this.#m[r];
								else if (r === this.#h) this.#h = this.#p[r];
								else {
									let e = this.#m[r];
									this.#p[e] = this.#p[r];
									let t = this.#p[r];
									this.#m[t] = this.#m[r];
								}
								this.#c--, this.#_.push(r);
							}
						}
						if (this.#T && this.#v?.length) {
							let e, t = this.#v;
							for (; e = t?.shift();) this.#i?.(...e);
						}
						return n;
					}
					clear() {
						return this.#Q("delete");
					}
					#Q(e) {
						for (let t of this.#L({ allowStale: !0 })) {
							let n = this.#f[t];
							if (this.#W(n)) n.__abortController.abort(/* @__PURE__ */ Error("deleted"));
							else {
								let r = this.#d[t];
								this.#C && this.#n?.(n, r, e), this.#T && this.#v?.push([
									n,
									r,
									e
								]);
							}
						}
						if (this.#u.clear(), this.#f.fill(void 0), this.#d.fill(void 0), this.#x && this.#b) {
							this.#x.fill(0), this.#b.fill(0);
							for (let e of this.#S ?? []) e !== void 0 && clearTimeout(e);
							this.#S?.fill(void 0);
						}
						if (this.#y && this.#y.fill(0), this.#h = 0, this.#g = 0, this.#_.length = 0, this.#l = 0, this.#c = 0, this.#T && this.#v) {
							let e, t = this.#v;
							for (; e = t?.shift();) this.#i?.(...e);
						}
					}
				};
			}
		}, t = {};
		function n(r) {
			var i = t[r];
			if (i !== void 0) return i.exports;
			var o = t[r] = { exports: {} };
			return e[r].call(o.exports, o, o.exports, n), o.exports;
		}
		var r = {};
		return (() => {
			var e = r;
			Object.defineProperty(e, "__esModule", { value: !0 }), e.LigaturesAddon = void 0;
			let t = n(241);
			e.LigaturesAddon = class {
				constructor(e) {
					this._fallbackLigatures = (e?.fallbackLigatures ?? /* @__PURE__ */ "<--.<---.<<-.<-.->.->>.-->.--->.<==.<===.<<=.<=.=>.=>>.==>.===>.>=.>>=.<->.<-->.<--->.<---->.<=>.<==>.<===>.<====>.::.:::.<~~.</.</>./>.~~>.==.!=./=.~=.<>.===.!==.!===.<:.:=.*=.*+.<*.<*>.*>.<|.<|>.|>.+*.=*.=:.:>./*.*/.+++.<!--.<!---".split(".")).sort((e, t) => t.length - e.length), this._fontFeatureSettings = e?.fontFeatureSettings;
				}
				activate(e) {
					if (!e.element) throw Error("Cannot activate LigaturesAddon before open is called");
					this._terminal = e, this._characterJoinerId = (0, t.enableLigatures)(e, this._fallbackLigatures), e.element.style.fontFeatureSettings = this._fontFeatureSettings ?? "\"calt\" on";
				}
				dispose() {
					var e, t;
					this._characterJoinerId !== void 0 && ((e = this._terminal) == null || e.deregisterCharacterJoiner(this._characterJoinerId), this._characterJoinerId = void 0), (t = this._terminal) != null && t.element && (this._terminal.element.style.fontFeatureSettings = "");
				}
			};
		})(), r;
	})());
})), import_addon_ligatures = require_addon_ligatures(), LIGATURE_CACHE_CHARACTER_BUDGET = 1e5, LIGATURE_CACHE_ENTRY_BUDGET = 2048;
function cloneRanges(e) {
	return e.map(([e, t]) => [e, t]);
}
var LigatureRangeCache = class {
	entries = /* @__PURE__ */ new Map();
	cachedCharacters = 0;
	generation = 0;
	get(e) {
		let t = this.entries.get(e);
		if (t) return this.entries.delete(e), this.entries.set(e, t), cloneRanges(t.ranges);
	}
	set(e, t) {
		if (e.length > LIGATURE_CACHE_CHARACTER_BUDGET) return;
		let n = this.entries.get(e);
		n && (this.cachedCharacters -= n.size, this.entries.delete(e));
		let r = {
			ranges: cloneRanges(t),
			size: e.length
		};
		for (this.entries.set(e, r), this.cachedCharacters += r.size; this.cachedCharacters > LIGATURE_CACHE_CHARACTER_BUDGET || this.entries.size > LIGATURE_CACHE_ENTRY_BUDGET;) {
			let e = this.entries.entries().next().value;
			if (!e) break;
			this.entries.delete(e[0]), this.cachedCharacters -= e[1].size;
		}
	}
	clear() {
		this.entries.clear(), this.cachedCharacters = 0, this.generation++;
	}
};
function createCachedCharacterJoiner(e, t, n) {
	let r = e.options.fontFamily;
	return (i) => {
		let o = e.options.fontFamily;
		o !== r && (r = o, n.clear());
		let s = n.get(i);
		if (s) return s;
		let p = n.generation, S = t(i);
		return n.generation === p && n.set(i, S), S;
	};
}
var TerminalLigaturesAddon = class extends import_addon_ligatures.LigaturesAddon {
	activate(e) {
		let t = new LigatureRangeCache(), n = new Proxy(e, { get(e, n) {
			if (n === "registerCharacterJoiner") return (n) => e.registerCharacterJoiner(createCachedCharacterJoiner(e, n, t));
			if (n === "refresh") return (n, r) => {
				t.clear(), e.refresh(n, r);
			};
			let r = Reflect.get(e, n, e);
			return typeof r == "function" ? r.bind(e) : r;
		} });
		super.activate(n);
	}
}, CURSOR_AGENT_HEADER = "Cursor Agent", CURSOR_AGENT_INPUT_MARKER = "→", CURSOR_AGENT_EMPTY_PROMPTS = ["Plan, search, build anything", "Add a follow-up"], CURSOR_AGENT_HEADER_SCAN_ROWS = 6;
function resolveCursorAgentImeAnchor(e) {
	let t = getVisibleLine(e.buffer, e.cursorY);
	return e.cursorX !== 0 || !isBlankLine(t) ? null : findCursorAgentScreenInputAnchor(e);
}
function findCursorAgentScreenInputAnchor(e) {
	let t = e.knownCursorAgent || hasCursorAgentHeader(e.buffer, e.rows);
	for (let n = e.rows - 1; n >= 0; n--) {
		let r = getVisibleLine(e.buffer, n);
		if (!r) continue;
		let i = resolveCursorAgentInputColumn(r, e.cols, !!t);
		if (i !== null) return {
			row: n,
			column: Math.min(i, Math.max(e.cols - 1, 0))
		};
	}
	return null;
}
function getVisibleLine(e, t) {
	return e.getLine(e.baseY + t);
}
function hasCursorAgentHeader(e, t) {
	let n = Math.min(t, CURSOR_AGENT_HEADER_SCAN_ROWS);
	for (let t = 0; t < n; t++) if (getVisibleLine(e, t)?.translateToString(!0).trim() === CURSOR_AGENT_HEADER) return !0;
	return !1;
}
function resolveCursorAgentInputColumn(e, t, n) {
	let r = findCursorAgentInputStartColumn(e, t);
	if (r === null) return null;
	let i = e.translateToString(!0, r, t), o = CURSOR_AGENT_EMPTY_PROMPTS.some((e) => i.startsWith(e));
	return !i.trim() || o ? r : n ? findLineContentEndColumn(e, r, t) ?? r : null;
}
function findCursorAgentInputStartColumn(e, t) {
	let n = Math.min(e.length, t);
	for (let t = 0; t < n - 1; t++) {
		let r = e.getCell(t);
		if (!isCellChar(r, CURSOR_AGENT_INPUT_MARKER)) continue;
		let i = t + Math.max(r.getWidth(), 1);
		if (i < n && isCellChar(e.getCell(i), " ")) return i + 1;
	}
	return null;
}
function findLineContentEndColumn(e, t, n) {
	let r = Math.min(e.length, n);
	for (let n = r - 1; n >= t; n--) {
		let t = e.getCell(n);
		if (!(!t || t.getWidth() === 0 || getCellChars(t) === " ")) return n + Math.max(t.getWidth(), 1);
	}
	return null;
}
function isBlankLine(e) {
	return !e || e.translateToString(!0).trim() === "";
}
function isCellChar(e, t) {
	return !!e && e.getWidth() > 0 && getCellChars(e) === t;
}
function getCellChars(e) {
	return e.getChars() || " ";
}
function installTerminalImeCandidateAnchor(e) {
	if (!e.element || !e.textarea) return null;
	let t = e.element.querySelector(".xterm-screen"), n = e.element.querySelector(".composition-view"), r = e.textarea, i = null, o = null, s = !1, p = () => {
		if (!t) return null;
		let n = t.getBoundingClientRect(), r = n.width / e.cols, i = n.height / e.rows;
		return !(r > 0) || !(i > 0) ? null : {
			cellWidth: r,
			cellHeight: i,
			cols: e.cols,
			rows: e.rows
		};
	}, S = (e, t, n) => {
		e.style[t] !== n && (e.style[t] = n);
	}, T = (e, t) => {
		let n = e * t.cellWidth, i = Number.parseFloat(r.style.width);
		return Number.isFinite(i) ? Math.max(0, Math.min(n, t.cols * t.cellWidth - i)) : n;
	}, k = (e, t, i, o) => {
		let s = `${e * i.cellHeight}px`, p = `${t * i.cellWidth}px`;
		if (S(r, "top", s), S(r, "left", `${T(t, i)}px`), o && n) {
			let e = `${i.cellHeight}px`;
			S(n, "top", s), S(n, "left", p), S(n, "height", e), S(n, "lineHeight", e);
		}
	}, A = () => {
		let t = e.buffer.active, n = resolveCursorAgentImeAnchor({
			buffer: t,
			rows: e.rows,
			cols: e.cols,
			cursorX: t.cursorX,
			cursorY: t.cursorY,
			knownCursorAgent: s
		});
		return s ||= n !== null, {
			anchor: n ?? {
				row: t.cursorY,
				column: Math.min(t.cursorX, e.cols - 1)
			},
			isCursorAgent: n !== null
		};
	}, Sl = (n) => {
		if (!t) return;
		let s = !i || i.cols !== e.cols || i.rows !== e.rows;
		(n?.type !== "compositionupdate" || s) && (i = p());
		let S = i;
		if (!S) return;
		let { anchor: T, isCursorAgent: Sl } = A();
		if (k(T.row, T.column, S, Sl), !Sl) {
			o !== null && (window.clearTimeout(o), o = null);
			return;
		}
		o !== null && window.clearTimeout(o), o = window.setTimeout(() => {
			if (o = null, r.isConnected && ((!i || i.cols !== e.cols || i.rows !== e.rows) && (i = p()), i)) {
				let e = A();
				k(e.anchor.row, e.anchor.column, i, e.isCursorAgent);
			}
		}, 0);
	};
	return e.element.addEventListener("compositionstart", Sl), e.element.addEventListener("compositionupdate", Sl), Sl;
}
/**
* Copyright (c) 2014-2024 The xterm.js authors. All rights reserved.
* @license MIT
*
* Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
* @license MIT
*
* Originally forked from (with the author's permission):
*   Fabrice Bellard's javascript vt100 for jslinux:
*   http://bellard.org/jslinux/
*   Copyright (c) 2011 Fabrice Bellard
*/
function E$1(e) {
	return { dispose: e };
}
var d = class {
	constructor() {
		this._disposables = /* @__PURE__ */ new Set(), this._isDisposed = !1;
	}
	get isDisposed() {
		return this._isDisposed;
	}
	add(e) {
		return this._isDisposed ? e.dispose() : this._disposables.add(e), e;
	}
	dispose() {
		if (!this._isDisposed) {
			this._isDisposed = !0;
			for (let e of this._disposables) e.dispose();
			this._disposables.clear();
		}
	}
	clear() {
		for (let e of this._disposables) e.dispose();
		this._disposables.clear();
	}
}, a = class {
	constructor() {
		this._store = new d();
	}
	dispose() {
		this._store.dispose();
	}
	_register(e) {
		return this._store.add(e);
	}
};
a.None = Object.freeze({ dispose() {} });
var B$1 = class {
	constructor() {
		this._listeners = [], this._disposed = !1;
	}
	get event() {
		return this._event ||= (e, t, n) => {
			if (this._disposed) return E$1(() => {});
			let r = {
				fn: e,
				thisArgs: t
			};
			this._listeners = this._listeners.slice(), this._listeners.push(r);
			let i = E$1(() => {
				let e = this._listeners.indexOf(r);
				e !== -1 && (this._listeners = this._listeners.slice(), this._listeners.splice(e, 1));
			});
			return n && (Array.isArray(n) ? n.push(i) : n.add(i)), i;
		}, this._event;
	}
	fire(e) {
		if (this._disposed || !this._listeners.length) return;
		if (this._listeners.length === 1) {
			this._listeners[0].fn.call(this._listeners[0].thisArgs, e);
			return;
		}
		let t = this._listeners;
		for (let n = 0, r = t.length; n < r; ++n) t[n].fn.call(t[n].thisArgs, e);
	}
	dispose() {
		this._disposed || (this._disposed = !0, this._listeners.length = 0);
	}
}, v;
((e) => {
	function t(e, t) {
		return e((e) => t.fire(e));
	}
	e.forward = t;
	function n(e, t) {
		return (n, r, i) => e((e) => n.call(r, t(e)), void 0, i);
	}
	e.map = n;
	function r(...e) {
		return (t, n, r) => {
			let i = new d();
			for (let r of e) i.add(r((e) => t.call(n, e)));
			return r && (Array.isArray(r) ? r.push(i) : r.add(i)), i;
		};
	}
	e.any = r;
	function i(e, t, n) {
		return t(n), e((e) => t(e));
	}
	e.runAndSubscribe = i;
})(v ||= {});
var C = class e {
	constructor() {
		this._providers = Object.create(null), this._active = "", this._onChange = new B$1(), this.onChange = this._onChange.event;
	}
	static extractShouldJoin(e) {
		return (e & 1) != 0;
	}
	static extractWidth(e) {
		return e >> 1 & 3;
	}
	static extractCharKind(e) {
		return e >> 3;
	}
	static createPropertyValue(e, t, n = !1) {
		return (e & 16777215) << 3 | (t & 3) << 1 | (n ? 1 : 0);
	}
	dispose() {
		this._onChange.dispose();
	}
	get versions() {
		return Object.keys(this._providers);
	}
	get activeVersion() {
		return this._active;
	}
	set activeVersion(e) {
		if (!this._providers[e]) throw Error(`unknown Unicode version "${e}"`);
		this._active = e, this._activeProvider = this._providers[e], this._onChange.fire(e);
	}
	register(e) {
		this._providers[e.version] = e, this._active || (this.activeVersion = e.version);
	}
	wcwidth(e) {
		return this._activeProvider.wcwidth(e);
	}
	getStringCellWidth(t) {
		let n = 0, r = 0, i = t.length;
		for (let o = 0; o < i; ++o) {
			let s = t.charCodeAt(o);
			if (55296 <= s && s <= 56319) {
				if (++o >= i) return n + this.wcwidth(s);
				let e = t.charCodeAt(o);
				56320 <= e && e <= 57343 ? s = (s - 55296) * 1024 + e - 56320 + 65536 : n += this.wcwidth(e);
			}
			let p = this.charProperties(s, r), S = e.extractWidth(p);
			e.extractShouldJoin(p) && (S -= e.extractWidth(r)), n += S, r = p;
		}
		return n;
	}
	charProperties(e, t) {
		return this._activeProvider.charProperties(e, t);
	}
}, c = [
	[768, 879],
	[1155, 1161],
	[1425, 1469],
	[1471, 1471],
	[1473, 1474],
	[1476, 1477],
	[1479, 1479],
	[1536, 1541],
	[1552, 1562],
	[1564, 1564],
	[1611, 1631],
	[1648, 1648],
	[1750, 1757],
	[1759, 1764],
	[1767, 1768],
	[1770, 1773],
	[1807, 1807],
	[1809, 1809],
	[1840, 1866],
	[1958, 1968],
	[2027, 2035],
	[2045, 2045],
	[2070, 2073],
	[2075, 2083],
	[2085, 2087],
	[2089, 2093],
	[2137, 2139],
	[2259, 2306],
	[2362, 2362],
	[2364, 2364],
	[2369, 2376],
	[2381, 2381],
	[2385, 2391],
	[2402, 2403],
	[2433, 2433],
	[2492, 2492],
	[2497, 2500],
	[2509, 2509],
	[2530, 2531],
	[2558, 2558],
	[2561, 2562],
	[2620, 2620],
	[2625, 2626],
	[2631, 2632],
	[2635, 2637],
	[2641, 2641],
	[2672, 2673],
	[2677, 2677],
	[2689, 2690],
	[2748, 2748],
	[2753, 2757],
	[2759, 2760],
	[2765, 2765],
	[2786, 2787],
	[2810, 2815],
	[2817, 2817],
	[2876, 2876],
	[2879, 2879],
	[2881, 2884],
	[2893, 2893],
	[2902, 2902],
	[2914, 2915],
	[2946, 2946],
	[3008, 3008],
	[3021, 3021],
	[3072, 3072],
	[3076, 3076],
	[3134, 3136],
	[3142, 3144],
	[3146, 3149],
	[3157, 3158],
	[3170, 3171],
	[3201, 3201],
	[3260, 3260],
	[3263, 3263],
	[3270, 3270],
	[3276, 3277],
	[3298, 3299],
	[3328, 3329],
	[3387, 3388],
	[3393, 3396],
	[3405, 3405],
	[3426, 3427],
	[3530, 3530],
	[3538, 3540],
	[3542, 3542],
	[3633, 3633],
	[3636, 3642],
	[3655, 3662],
	[3761, 3761],
	[3764, 3772],
	[3784, 3789],
	[3864, 3865],
	[3893, 3893],
	[3895, 3895],
	[3897, 3897],
	[3953, 3966],
	[3968, 3972],
	[3974, 3975],
	[3981, 3991],
	[3993, 4028],
	[4038, 4038],
	[4141, 4144],
	[4146, 4151],
	[4153, 4154],
	[4157, 4158],
	[4184, 4185],
	[4190, 4192],
	[4209, 4212],
	[4226, 4226],
	[4229, 4230],
	[4237, 4237],
	[4253, 4253],
	[4448, 4607],
	[4957, 4959],
	[5906, 5908],
	[5938, 5940],
	[5970, 5971],
	[6002, 6003],
	[6068, 6069],
	[6071, 6077],
	[6086, 6086],
	[6089, 6099],
	[6109, 6109],
	[6155, 6158],
	[6277, 6278],
	[6313, 6313],
	[6432, 6434],
	[6439, 6440],
	[6450, 6450],
	[6457, 6459],
	[6679, 6680],
	[6683, 6683],
	[6742, 6742],
	[6744, 6750],
	[6752, 6752],
	[6754, 6754],
	[6757, 6764],
	[6771, 6780],
	[6783, 6783],
	[6832, 6846],
	[6912, 6915],
	[6964, 6964],
	[6966, 6970],
	[6972, 6972],
	[6978, 6978],
	[7019, 7027],
	[7040, 7041],
	[7074, 7077],
	[7080, 7081],
	[7083, 7085],
	[7142, 7142],
	[7144, 7145],
	[7149, 7149],
	[7151, 7153],
	[7212, 7219],
	[7222, 7223],
	[7376, 7378],
	[7380, 7392],
	[7394, 7400],
	[7405, 7405],
	[7412, 7412],
	[7416, 7417],
	[7616, 7673],
	[7675, 7679],
	[8203, 8207],
	[8234, 8238],
	[8288, 8292],
	[8294, 8303],
	[8400, 8432],
	[11503, 11505],
	[11647, 11647],
	[11744, 11775],
	[12330, 12333],
	[12441, 12442],
	[42607, 42610],
	[42612, 42621],
	[42654, 42655],
	[42736, 42737],
	[43010, 43010],
	[43014, 43014],
	[43019, 43019],
	[43045, 43046],
	[43204, 43205],
	[43232, 43249],
	[43263, 43263],
	[43302, 43309],
	[43335, 43345],
	[43392, 43394],
	[43443, 43443],
	[43446, 43449],
	[43452, 43453],
	[43493, 43493],
	[43561, 43566],
	[43569, 43570],
	[43573, 43574],
	[43587, 43587],
	[43596, 43596],
	[43644, 43644],
	[43696, 43696],
	[43698, 43700],
	[43703, 43704],
	[43710, 43711],
	[43713, 43713],
	[43756, 43757],
	[43766, 43766],
	[44005, 44005],
	[44008, 44008],
	[44013, 44013],
	[64286, 64286],
	[65024, 65039],
	[65056, 65071],
	[65279, 65279],
	[65529, 65531]
], _$1 = [
	[66045, 66045],
	[66272, 66272],
	[66422, 66426],
	[68097, 68099],
	[68101, 68102],
	[68108, 68111],
	[68152, 68154],
	[68159, 68159],
	[68325, 68326],
	[68900, 68903],
	[69446, 69456],
	[69633, 69633],
	[69688, 69702],
	[69759, 69761],
	[69811, 69814],
	[69817, 69818],
	[69821, 69821],
	[69837, 69837],
	[69888, 69890],
	[69927, 69931],
	[69933, 69940],
	[70003, 70003],
	[70016, 70017],
	[70070, 70078],
	[70089, 70092],
	[70191, 70193],
	[70196, 70196],
	[70198, 70199],
	[70206, 70206],
	[70367, 70367],
	[70371, 70378],
	[70400, 70401],
	[70459, 70460],
	[70464, 70464],
	[70502, 70508],
	[70512, 70516],
	[70712, 70719],
	[70722, 70724],
	[70726, 70726],
	[70750, 70750],
	[70835, 70840],
	[70842, 70842],
	[70847, 70848],
	[70850, 70851],
	[71090, 71093],
	[71100, 71101],
	[71103, 71104],
	[71132, 71133],
	[71219, 71226],
	[71229, 71229],
	[71231, 71232],
	[71339, 71339],
	[71341, 71341],
	[71344, 71349],
	[71351, 71351],
	[71453, 71455],
	[71458, 71461],
	[71463, 71467],
	[71727, 71735],
	[71737, 71738],
	[72148, 72151],
	[72154, 72155],
	[72160, 72160],
	[72193, 72202],
	[72243, 72248],
	[72251, 72254],
	[72263, 72263],
	[72273, 72278],
	[72281, 72283],
	[72330, 72342],
	[72344, 72345],
	[72752, 72758],
	[72760, 72765],
	[72767, 72767],
	[72850, 72871],
	[72874, 72880],
	[72882, 72883],
	[72885, 72886],
	[73009, 73014],
	[73018, 73018],
	[73020, 73021],
	[73023, 73029],
	[73031, 73031],
	[73104, 73105],
	[73109, 73109],
	[73111, 73111],
	[73459, 73460],
	[78896, 78904],
	[92912, 92916],
	[92976, 92982],
	[94031, 94031],
	[94095, 94098],
	[113821, 113822],
	[113824, 113827],
	[119143, 119145],
	[119155, 119170],
	[119173, 119179],
	[119210, 119213],
	[119362, 119364],
	[121344, 121398],
	[121403, 121452],
	[121461, 121461],
	[121476, 121476],
	[121499, 121503],
	[121505, 121519],
	[122880, 122886],
	[122888, 122904],
	[122907, 122913],
	[122915, 122916],
	[122918, 122922],
	[123184, 123190],
	[123628, 123631],
	[125136, 125142],
	[125252, 125258],
	[917505, 917505],
	[917536, 917631],
	[917760, 917999]
], u$1 = [
	[4352, 4447],
	[8986, 8987],
	[9001, 9002],
	[9193, 9196],
	[9200, 9200],
	[9203, 9203],
	[9725, 9726],
	[9748, 9749],
	[9800, 9811],
	[9855, 9855],
	[9875, 9875],
	[9889, 9889],
	[9898, 9899],
	[9917, 9918],
	[9924, 9925],
	[9934, 9934],
	[9940, 9940],
	[9962, 9962],
	[9970, 9971],
	[9973, 9973],
	[9978, 9978],
	[9981, 9981],
	[9989, 9989],
	[9994, 9995],
	[10024, 10024],
	[10060, 10060],
	[10062, 10062],
	[10067, 10069],
	[10071, 10071],
	[10133, 10135],
	[10160, 10160],
	[10175, 10175],
	[11035, 11036],
	[11088, 11088],
	[11093, 11093],
	[11904, 11929],
	[11931, 12019],
	[12032, 12245],
	[12272, 12283],
	[12288, 12329],
	[12334, 12350],
	[12353, 12438],
	[12443, 12543],
	[12549, 12591],
	[12593, 12686],
	[12688, 12730],
	[12736, 12771],
	[12784, 12830],
	[12832, 12871],
	[12880, 19903],
	[19968, 42124],
	[42128, 42182],
	[43360, 43388],
	[44032, 55203],
	[63744, 64255],
	[65040, 65049],
	[65072, 65106],
	[65108, 65126],
	[65128, 65131],
	[65281, 65376],
	[65504, 65510]
], I$1 = [
	[94176, 94179],
	[94208, 100343],
	[100352, 101106],
	[110592, 110878],
	[110928, 110930],
	[110948, 110951],
	[110960, 111355],
	[126980, 126980],
	[127183, 127183],
	[127374, 127374],
	[127377, 127386],
	[127488, 127490],
	[127504, 127547],
	[127552, 127560],
	[127568, 127569],
	[127584, 127589],
	[127744, 127776],
	[127789, 127797],
	[127799, 127868],
	[127870, 127891],
	[127904, 127946],
	[127951, 127955],
	[127968, 127984],
	[127988, 127988],
	[127992, 128062],
	[128064, 128064],
	[128066, 128252],
	[128255, 128317],
	[128331, 128334],
	[128336, 128359],
	[128378, 128378],
	[128405, 128406],
	[128420, 128420],
	[128507, 128591],
	[128640, 128709],
	[128716, 128716],
	[128720, 128722],
	[128725, 128725],
	[128747, 128748],
	[128756, 128762],
	[128992, 129003],
	[129293, 129393],
	[129395, 129398],
	[129402, 129442],
	[129445, 129450],
	[129454, 129482],
	[129485, 129535],
	[129648, 129651],
	[129656, 129658],
	[129664, 129666],
	[129680, 129685],
	[131072, 196605],
	[196608, 262141]
], D$1;
function h(e, t) {
	let n = 0, r = t.length - 1, i;
	if (e < t[0][0] || e > t[r][1]) return !1;
	for (; r >= n;) if (i = n + r >> 1, e > t[i][1]) n = i + 1;
	else if (e < t[i][0]) r = i - 1;
	else return !0;
	return !1;
}
var l = class {
	constructor() {
		if (this.version = "11", !D$1) {
			D$1 = new Uint8Array(65536), D$1.fill(1), D$1[0] = 0, D$1.fill(0, 1, 32), D$1.fill(0, 127, 160);
			for (let e = 0; e < c.length; ++e) D$1.fill(0, c[e][0], c[e][1] + 1);
			for (let e = 0; e < u$1.length; ++e) D$1.fill(2, u$1[e][0], u$1[e][1] + 1);
		}
	}
	wcwidth(e) {
		return e < 32 ? 0 : e < 127 ? 1 : e < 65536 ? D$1[e] : h(e, _$1) ? 0 : h(e, I$1) ? 2 : 1;
	}
	charProperties(e, t) {
		let n = this.wcwidth(e), r = n === 0 && t !== 0;
		if (r) {
			let e = C.extractWidth(t);
			e === 0 ? r = !1 : e > n && (n = e);
		}
		return C.createPropertyValue(0, n, r);
	}
}, f$1 = class {
	activate(e) {
		e.unicode.register(new l());
	}
	dispose() {}
}, u = class {
	constructor(e, t, n, r = {}) {
		this._terminal = e, this._regex = t, this._handler = n, this._options = r;
	}
	provideLinks(e, t) {
		let n = f.computeLink(e, this._regex, this._terminal, this._handler);
		t(this._addCallbacks(n));
	}
	_addCallbacks(e) {
		return e.map((e) => (e.leave = this._options.leave, e.hover = (t, n) => {
			if (this._options.hover) {
				let { range: r } = e;
				this._options.hover(t, n, r);
			}
		}, e));
	}
};
function _(e) {
	try {
		let t = new URL(e), n = t.password && t.username ? `${t.protocol}//${t.username}:${t.password}@${t.host}` : t.username ? `${t.protocol}//${t.username}@${t.host}` : `${t.protocol}//${t.host}`;
		return e.toLocaleLowerCase().startsWith(n.toLocaleLowerCase());
	} catch {
		return !1;
	}
}
var f = class e {
	static computeLink(t, n, r, i) {
		let o = n.flags.includes("g") ? n.flags : `${n.flags}g`, s = new RegExp(n.source, o), [p, S] = e._getWindowedLineStrings(t - 1, r), T = p.join(""), k, A = [];
		for (; k = s.exec(T);) {
			let t = k[0];
			if (!_(t)) continue;
			let [n, o] = e._mapStrIdx(r, S, 0, k.index), [s, p] = e._mapStrIdx(r, n, o, t.length);
			if (n === -1 || o === -1 || s === -1 || p === -1) continue;
			let T = {
				start: {
					x: o + 1,
					y: n + 1
				},
				end: {
					x: p,
					y: s + 1
				}
			};
			A.push({
				range: T,
				text: t,
				activate: i
			});
		}
		return A;
	}
	static _getWindowedLineStrings(e, t) {
		let n, r = e, i = e, o, s, p = [];
		if (n = t.buffer.active.getLine(e)) {
			let e = n.translateToString(!0);
			if (n.isWrapped && e[0] !== " ") {
				for (o = 0; (n = t.buffer.active.getLine(--r)) && o < 2048 && (s = n.translateToString(!0), o += s.length, p.push(s), !(!n.isWrapped || s.indexOf(" ") !== -1)););
				p.reverse();
			}
			for (p.push(e), o = 0; (n = t.buffer.active.getLine(++i)) && n.isWrapped && o < 2048 && (s = n.translateToString(!0), o += s.length, p.push(s), s.indexOf(" ") === -1););
		}
		return [p, r];
	}
	static _mapStrIdx(e, t, n, r) {
		let i = e.buffer.active, o = i.getNullCell(), s = n;
		for (; r;) {
			let e = i.getLine(t);
			if (!e) return [-1, -1];
			for (let n = s; n < e.length; ++n) {
				e.getCell(n, o);
				let s = o.getChars();
				if (o.getWidth() && (r -= s.length || 1, n === e.length - 1 && s === "")) {
					let e = i.getLine(t + 1);
					e && e.isWrapped && (e.getCell(0, o), o.getWidth() === 2 && (r += 1));
				}
				if (r < 0) return [t, n];
			}
			t++, s = 0;
		}
		return [t, s];
	}
}, w = /(https?|HTTPS?):[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/;
function x(e, t) {
	let n = window.open();
	if (n) {
		try {
			n.opener = null;
		} catch {}
		n.location.href = t;
	} else console.warn("Opening link blocked as opener could not be cleared");
}
var b$1 = class {
	constructor(e = x, t = {}) {
		this._handler = e, this._options = t;
	}
	activate(e) {
		this._terminal = e;
		let t = this._options, n = t.urlRegex ?? w;
		this._linkProvider = this._terminal.registerLinkProvider(new u(this._terminal, n, this._handler, t));
	}
	dispose() {
		this._linkProvider?.dispose();
	}
}, ks = Object.defineProperty, An = Object.getOwnPropertyDescriptor, kn = (e, t) => {
	for (var n in t) ks(e, n, {
		get: t[n],
		enumerable: !0
	});
}, y = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? An(t, n) : t, o = e.length - 1, s; o >= 0; o--) (s = e[o]) && (i = (r ? s(t, n, i) : s(i)) || i);
	return r && i && ks(t, n, i), i;
}, m = (e, t) => (n, r) => t(n, r, e), Ps = "Terminal input", Ut = {
	get: () => Ps,
	set: (e) => Ps = e
}, Ms = "Too much output to announce, navigate to rows manually to read", Je = {
	get: () => Ms,
	set: (e) => Ms = e
};
function Pn(e) {
	return e.replace(/\r?\n/g, "\r");
}
function Mn(e, t) {
	return t ? `\x1B[200~${e.replace(/\x1b/g, "␛")}\x1B[201~` : e;
}
function Bs(e, t) {
	e.clipboardData && e.clipboardData.setData("text/plain", t.selectionText), e.preventDefault();
}
function Os(e, t, n, r) {
	e.stopPropagation(), e.clipboardData && Mr(e.clipboardData.getData("text/plain"), t, n, r);
}
function Mr(e, t, n, r) {
	e = Pn(e), e = Mn(e, n.decPrivateModes.bracketedPasteMode && r.rawOptions.ignoreBracketedPasteMode !== !0), n.triggerDataEvent(e, !0), t.value = "";
}
function Br(e, t, n) {
	let r = n.getBoundingClientRect(), i = e.clientX - r.left - 10, o = e.clientY - r.top - 10;
	t.style.width = "20px", t.style.height = "20px", t.style.left = `${i}px`, t.style.top = `${o}px`, t.style.zIndex = "1000", t.focus();
}
function Or(e, t, n, r, i) {
	Br(e, t, n), i && r.rightClickSelect(e), t.value = r.selectionText, t.select();
}
function be(e) {
	return e > 65535 ? (e -= 65536, String.fromCharCode((e >> 10) + 55296) + String.fromCharCode(e % 1024 + 56320)) : String.fromCharCode(e);
}
function xe(e, t = 0, n = e.length) {
	let r = "";
	for (let i = t; i < n; ++i) {
		let t = e[i];
		t > 65535 ? (t -= 65536, r += String.fromCharCode((t >> 10) + 55296) + String.fromCharCode(t % 1024 + 56320)) : r += String.fromCharCode(t);
	}
	return r;
}
var pi = class {
	constructor() {
		this._interim = 0;
	}
	clear() {
		this._interim = 0;
	}
	decode(e, t) {
		let n = e.length;
		if (!n) return 0;
		let r = 0, i = 0;
		if (this._interim) {
			let n = e.charCodeAt(i++);
			56320 <= n && n <= 57343 ? t[r++] = (this._interim - 55296) * 1024 + n - 56320 + 65536 : (t[r++] = this._interim, t[r++] = n), this._interim = 0;
		}
		for (let o = i; o < n; ++o) {
			let i = e.charCodeAt(o);
			if (55296 <= i && i <= 56319) {
				if (++o >= n) return this._interim = i, r;
				let s = e.charCodeAt(o);
				56320 <= s && s <= 57343 ? t[r++] = (i - 55296) * 1024 + s - 56320 + 65536 : (t[r++] = i, t[r++] = s);
				continue;
			}
			i !== 65279 && (t[r++] = i);
		}
		return r;
	}
}, mi = class {
	constructor() {
		this.interim = new Uint8Array(3);
	}
	clear() {
		this.interim.fill(0);
	}
	decode(e, t) {
		let n = e.length;
		if (!n) return 0;
		let r = 0, i, o, s, p, S, T = 0;
		if (this.interim[0]) {
			let i = !1, o = this.interim[0];
			o &= (o & 224) == 192 ? 31 : (o & 240) == 224 ? 15 : 7;
			let s = 0, p;
			for (; (p = this.interim[++s]) && s < 4;) o <<= 6, o |= p & 63;
			let S = (this.interim[0] & 224) == 192 ? 2 : (this.interim[0] & 240) == 224 ? 3 : 4, k = S - s;
			for (; T < k;) {
				if (T >= n) return 0;
				if (p = e[T++], (p & 192) != 128) {
					T--, i = !0;
					break;
				} else this.interim[s++] = p, o <<= 6, o |= p & 63;
			}
			i || (S === 2 ? o < 128 ? T-- : t[r++] = o : S === 3 ? o < 2048 || o >= 55296 && o <= 57343 || o === 65279 || (t[r++] = o) : o < 65536 || o > 1114111 || (t[r++] = o)), this.interim.fill(0);
		}
		let k = n - 4, A = T;
		for (; A < n;) {
			for (; A < k && !((i = e[A]) & 128) && !((o = e[A + 1]) & 128) && !((s = e[A + 2]) & 128) && !((p = e[A + 3]) & 128);) t[r++] = i, t[r++] = o, t[r++] = s, t[r++] = p, A += 4;
			if (i = e[A++], i < 128) t[r++] = i;
			else if ((i & 224) == 192) {
				if (A >= n) return this.interim[0] = i, r;
				if (o = e[A++], (o & 192) != 128) {
					A--;
					continue;
				}
				if (S = (i & 31) << 6 | o & 63, S < 128) {
					A--;
					continue;
				}
				t[r++] = S;
			} else if ((i & 240) == 224) {
				if (A >= n) return this.interim[0] = i, r;
				if (o = e[A++], (o & 192) != 128) {
					A--;
					continue;
				}
				if (A >= n) return this.interim[0] = i, this.interim[1] = o, r;
				if (s = e[A++], (s & 192) != 128) {
					A--;
					continue;
				}
				if (S = (i & 15) << 12 | (o & 63) << 6 | s & 63, S < 2048 || S >= 55296 && S <= 57343 || S === 65279) continue;
				t[r++] = S;
			} else if ((i & 248) == 240) {
				if (A >= n) return this.interim[0] = i, r;
				if (o = e[A++], (o & 192) != 128) {
					A--;
					continue;
				}
				if (A >= n) return this.interim[0] = i, this.interim[1] = o, r;
				if (s = e[A++], (s & 192) != 128) {
					A--;
					continue;
				}
				if (A >= n) return this.interim[0] = i, this.interim[1] = o, this.interim[2] = s, r;
				if (p = e[A++], (p & 192) != 128) {
					A--;
					continue;
				}
				if (S = (i & 7) << 18 | (o & 63) << 12 | (s & 63) << 6 | p & 63, S < 65536 || S > 1114111) continue;
				t[r++] = S;
			}
		}
		return r;
	}
}, fe = class e {
	constructor() {
		this.fg = 0, this.bg = 0, this.extended = new Pe();
	}
	static toColorRGB(e) {
		return [
			e >>> 16 & 255,
			e >>> 8 & 255,
			e & 255
		];
	}
	static fromColorRGB(e) {
		return (e[0] & 255) << 16 | (e[1] & 255) << 8 | e[2] & 255;
	}
	clone() {
		let t = new e();
		return t.fg = this.fg, t.bg = this.bg, t.extended = this.extended.clone(), t;
	}
	isInverse() {
		return this.fg & 67108864;
	}
	isBold() {
		return this.fg & 134217728;
	}
	isUnderline() {
		return this.hasExtendedAttrs() && this.extended.underlineStyle !== 0 ? 1 : this.fg & 268435456;
	}
	isBlink() {
		return this.fg & 536870912;
	}
	isInvisible() {
		return this.fg & 1073741824;
	}
	isItalic() {
		return this.bg & 67108864;
	}
	isDim() {
		return this.bg & 134217728;
	}
	isStrikethrough() {
		return this.fg & 2147483648;
	}
	isProtected() {
		return this.bg & 536870912;
	}
	isOverline() {
		return this.bg & 1073741824;
	}
	getFgColorMode() {
		return this.fg & 50331648;
	}
	getBgColorMode() {
		return this.bg & 50331648;
	}
	isFgRGB() {
		return (this.fg & 50331648) == 50331648;
	}
	isBgRGB() {
		return (this.bg & 50331648) == 50331648;
	}
	isFgPalette() {
		return (this.fg & 50331648) == 16777216 || (this.fg & 50331648) == 33554432;
	}
	isBgPalette() {
		return (this.bg & 50331648) == 16777216 || (this.bg & 50331648) == 33554432;
	}
	isFgDefault() {
		return (this.fg & 50331648) == 0;
	}
	isBgDefault() {
		return (this.bg & 50331648) == 0;
	}
	isAttributeDefault() {
		return this.fg === 0 && this.bg === 0;
	}
	getFgColor() {
		switch (this.fg & 50331648) {
			case 16777216:
			case 33554432: return this.fg & 255;
			case 50331648: return this.fg & 16777215;
			default: return -1;
		}
	}
	getBgColor() {
		switch (this.bg & 50331648) {
			case 16777216:
			case 33554432: return this.bg & 255;
			case 50331648: return this.bg & 16777215;
			default: return -1;
		}
	}
	hasExtendedAttrs() {
		return this.bg & 268435456;
	}
	updateExtended() {
		this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
	}
	getUnderlineColor() {
		if (this.bg & 268435456 && ~this.extended.underlineColor) switch (this.extended.underlineColor & 50331648) {
			case 16777216:
			case 33554432: return this.extended.underlineColor & 255;
			case 50331648: return this.extended.underlineColor & 16777215;
			default: return this.getFgColor();
		}
		return this.getFgColor();
	}
	getUnderlineColorMode() {
		return this.bg & 268435456 && ~this.extended.underlineColor ? this.extended.underlineColor & 50331648 : this.getFgColorMode();
	}
	isUnderlineColorRGB() {
		return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) == 50331648 : this.isFgRGB();
	}
	isUnderlineColorPalette() {
		return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) == 16777216 || (this.extended.underlineColor & 50331648) == 33554432 : this.isFgPalette();
	}
	isUnderlineColorDefault() {
		return this.bg & 268435456 && ~this.extended.underlineColor ? (this.extended.underlineColor & 50331648) == 0 : this.isFgDefault();
	}
	getUnderlineStyle() {
		return this.fg & 268435456 ? this.bg & 268435456 ? this.extended.underlineStyle : 1 : 0;
	}
	getUnderlineVariantOffset() {
		return this.extended.underlineVariantOffset;
	}
}, Pe = class e {
	constructor(e = 0, t = 0) {
		this._ext = 0, this._urlId = 0, this._ext = e, this._urlId = t;
	}
	get ext() {
		return this._urlId ? this._ext & -469762049 | this.underlineStyle << 26 : this._ext;
	}
	set ext(e) {
		this._ext = e;
	}
	get underlineStyle() {
		return this._urlId ? 5 : (this._ext & 469762048) >> 26;
	}
	set underlineStyle(e) {
		this._ext &= -469762049, this._ext |= e << 26 & 469762048;
	}
	get underlineColor() {
		return this._ext & 67108863;
	}
	set underlineColor(e) {
		this._ext &= -67108864, this._ext |= e & 67108863;
	}
	get urlId() {
		return this._urlId;
	}
	set urlId(e) {
		this._urlId = e;
	}
	get underlineVariantOffset() {
		let e = (this._ext & 3758096384) >> 29;
		return e < 0 ? e ^ 4294967288 : e;
	}
	set underlineVariantOffset(e) {
		this._ext &= 536870911, this._ext |= e << 29 & 3758096384;
	}
	clone() {
		return new e(this._ext, this._urlId);
	}
	isEmpty() {
		return this.underlineStyle === 0 && this._urlId === 0;
	}
}, F = class e extends fe {
	constructor() {
		super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new Pe(), this.combinedData = "";
	}
	static fromCharData(t) {
		let n = new e();
		return n.setFromCharData(t), n;
	}
	isCombined() {
		return this.content & 2097152;
	}
	getWidth() {
		return this.content >> 22;
	}
	getChars() {
		return this.content & 2097152 ? this.combinedData : this.content & 2097151 ? be(this.content & 2097151) : "";
	}
	getCode() {
		return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : this.content & 2097151;
	}
	setFromCharData(e) {
		this.fg = e[0], this.bg = 0;
		let t = !1;
		if (e[1].length > 2) t = !0;
		else if (e[1].length === 2) {
			let n = e[1].charCodeAt(0);
			if (55296 <= n && n <= 56319) {
				let r = e[1].charCodeAt(1);
				56320 <= r && r <= 57343 ? this.content = (n - 55296) * 1024 + r - 56320 + 65536 | e[2] << 22 : t = !0;
			} else t = !0;
		} else this.content = e[1].charCodeAt(0) | e[2] << 22;
		t && (this.combinedData = e[1], this.content = 2097152 | e[2] << 22);
	}
	getAsCharData() {
		return [
			this.fg,
			this.getChars(),
			this.getWidth(),
			this.getCode()
		];
	}
	attributesEquals(e) {
		if (this.getFgColorMode() !== e.getFgColorMode() || this.getFgColor() !== e.getFgColor() || this.getBgColorMode() !== e.getBgColorMode() || this.getBgColor() !== e.getBgColor() || this.isInverse() !== e.isInverse() || this.isBold() !== e.isBold() || this.isUnderline() !== e.isUnderline()) return !1;
		if (this.isUnderline()) {
			if (this.getUnderlineStyle() !== e.getUnderlineStyle()) return !1;
			let t = this.isUnderlineColorDefault(), n = e.isUnderlineColorDefault();
			if (!(t && n) && (t !== n || this.getUnderlineColor() !== e.getUnderlineColor() || this.getUnderlineColorMode() !== e.getUnderlineColorMode())) return !1;
		}
		return !(this.isOverline() !== e.isOverline() || this.isBlink() !== e.isBlink() || this.isInvisible() !== e.isInvisible() || this.isItalic() !== e.isItalic() || this.isDim() !== e.isDim() || this.isStrikethrough() !== e.isStrikethrough());
	}
}, Wr = /* @__PURE__ */ new Map();
function Fs(e) {
	return e.di$dependencies || [];
}
function H(e) {
	if (Wr.has(e)) return Wr.get(e);
	let t = function(e, n, r) {
		if (arguments.length !== 3) throw Error("@IServiceName-decorator can only be used to decorate a parameter");
		Nn(t, e, r);
	};
	return t._id = e, Wr.set(e, t), t;
}
function Nn(e, t, n) {
	t.di$target === t ? t.di$dependencies.push({
		id: e,
		index: n
	}) : (t.di$dependencies = [{
		id: e,
		index: n
	}], t.di$target = t);
}
var D = H("BufferService"), Me = H("MouseStateService"), X = H("CoreService"), Hs = H("CharsetService"), et = H("InstantiationService"), _e = H("LogService"), R = H("OptionsService"), bi = H("OscLinkService"), Ws = H("UnicodeService"), ge = H("DecorationService"), tt = class {
	constructor(e, t, n) {
		this._bufferService = e, this._optionsService = t, this._oscLinkService = n, this._workCell = new F();
	}
	provideLinks(e, t) {
		let n = this._bufferService.buffer.lines.get(e - 1);
		if (!n) {
			t(void 0);
			return;
		}
		let r = [], i = this._optionsService.rawOptions.linkHandler, o = this._workCell, s = n.getTrimmedLength(), p = -1, S = -1, T = !1;
		for (let t = 0; t < s; t++) if (!(S === -1 && !n.hasContent(t))) {
			if (n.loadCell(t, o), o.hasExtendedAttrs() && o.extended.urlId) if (S === -1) {
				S = t, p = o.extended.urlId;
				continue;
			} else T = o.extended.urlId !== p;
			else S !== -1 && (T = !0);
			if (T || S !== -1 && t === s - 1) {
				let n = this._oscLinkService.getLinkData(p)?.uri;
				if (n) {
					let o = t + (!T && t === s - 1 ? 1 : 0), k = this._getRangeWithLineWrap(e, S, o, p), A = !1;
					if (!i?.allowNonHttpProtocols) try {
						let e = new URL(n);
						["http:", "https:"].includes(e.protocol) || (A = !0);
					} catch {
						A = !0;
					}
					A || r.push({
						text: n,
						range: k,
						activate: (e, t) => i ? i.activate(e, t, k) : Fn(e, t),
						hover: (e, t) => i?.hover?.(e, t, k),
						leave: (e, t) => i?.leave?.(e, t, k)
					});
				}
				T = !1, o.hasExtendedAttrs() && o.extended.urlId ? (S = t, p = o.extended.urlId) : (S = -1, p = -1);
			}
		}
		t(r);
	}
	_getRangeWithLineWrap(e, t, n, r) {
		let i = e, o = t, s = e, p = n;
		for (; o === 0 && this._bufferService.buffer.lines.get(i - 1)?.isWrapped;) {
			let e = this._bufferService.buffer.lines.get(i - 2);
			if (!e) break;
			let t = e.getTrimmedLength();
			if (t === 0 || !this._hasUrlId(e, t - 1, r)) break;
			let n = t - 1;
			for (; n > 0 && this._hasUrlId(e, n - 1, r);) n--;
			i--, o = n;
		}
		for (;;) {
			let e = this._bufferService.buffer.lines.get(s - 1);
			if (!e) break;
			let t = e.getTrimmedLength();
			if (p !== t) break;
			let n = this._bufferService.buffer.lines.get(s);
			if (!n?.isWrapped) break;
			let i = n.getTrimmedLength();
			if (i === 0 || !this._hasUrlId(n, 0, r)) break;
			let o = 1;
			for (; o < i && this._hasUrlId(n, o, r);) o++;
			s++, p = o;
		}
		return {
			start: {
				x: o + 1,
				y: i
			},
			end: {
				x: p,
				y: s
			}
		};
	}
	_hasUrlId(e, t, n) {
		let r = this._workCell;
		return e.loadCell(t, r), !!r.hasExtendedAttrs() && r.extended.urlId === n;
	}
};
tt = y([
	m(0, D),
	m(1, R),
	m(2, bi)
], tt);
function Fn(e, t) {
	if (confirm(`Do you want to navigate to ${t}?

WARNING: This link could potentially be dangerous`)) {
		let e = window.open();
		if (e) {
			try {
				e.opener = null;
			} catch {}
			e.location.href = t;
		} else console.warn("Opening link blocked as opener could not be cleared");
	}
}
var Be = H("CharSizeService"), z = H("CoreBrowserService"), Oe = H("MouseCoordsService"), Us = H("MouseService"), G = H("RenderService"), vi = H("SelectionService"), Si = H("CharacterJoinerService"), le = H("ThemeService"), gi = H("LinkProviderService"), Ks = H("KeyboardService");
function E(e) {
	return { dispose: e };
}
function Ne(e) {
	if (!e) return e;
	if (Array.isArray(e)) {
		for (let t of e) t.dispose();
		return [];
	}
	return e.dispose(), e;
}
var pe = class {
	constructor() {
		this._disposables = /* @__PURE__ */ new Set(), this._isDisposed = !1;
	}
	get isDisposed() {
		return this._isDisposed;
	}
	add(e) {
		return this._isDisposed ? e.dispose() : this._disposables.add(e), e;
	}
	dispose() {
		if (!this._isDisposed) {
			this._isDisposed = !0;
			for (let e of this._disposables) e.dispose();
			this._disposables.clear();
		}
	}
	clear() {
		for (let e of this._disposables) e.dispose();
		this._disposables.clear();
	}
}, g = class {
	constructor() {
		this._store = new pe();
	}
	dispose() {
		this._store.dispose();
	}
	_register(e) {
		return this._store.add(e);
	}
};
g.None = Object.freeze({ dispose() {} });
var B = class {
	constructor() {
		this._isDisposed = !1;
	}
	get value() {
		return this._isDisposed ? void 0 : this._value;
	}
	set value(e) {
		this._isDisposed || e === this._value || (this._value?.dispose(), this._value = e);
	}
	clear() {
		this.value = void 0;
	}
	dispose() {
		this._isDisposed = !0, this._value?.dispose(), this._value = void 0;
	}
}, Ce = class {
	constructor() {
		this._token = -1, this._isDisposed = !1;
	}
	dispose() {
		this.cancel(), this._isDisposed = !0;
	}
	cancel() {
		this._token !== -1 && (clearTimeout(this._token), this._token = -1);
	}
	cancelAndSet(e, t) {
		if (this._isDisposed) throw Error("Calling cancelAndSet on a disposed TimeoutTimer");
		this.cancel(), this._token = setTimeout(() => {
			this._token = -1, e();
		}, t);
	}
	setIfNotSet(e, t) {
		if (this._isDisposed) throw Error("Calling setIfNotSet on a disposed TimeoutTimer");
		this._token === -1 && (this._token = setTimeout(() => {
			this._token = -1, e();
		}, t));
	}
}, Ci = class {
	constructor() {
		this._isScheduled = !1, this._isDisposed = !1;
	}
	dispose() {
		this.cancel(), this._isDisposed = !0;
	}
	cancel() {
		this._isScheduled = !1;
	}
	set(e) {
		if (this._isDisposed) throw Error("Calling set on a disposed MicrotaskTimer");
		this._isScheduled || (this._isScheduled = !0, queueMicrotask(() => {
			this._isScheduled && (this._isScheduled = !1, e());
		}));
	}
}, Ii = class {
	constructor() {
		this._isDisposed = !1;
	}
	cancel() {
		this._disposable?.dispose(), this._disposable = void 0;
	}
	cancelAndSet(e, t, n = globalThis) {
		if (this._isDisposed) throw Error("Calling cancelAndSet on a disposed IntervalTimer");
		this.cancel();
		let r = n.setInterval(() => {
			e();
		}, t);
		this._disposable = { dispose: () => {
			n.clearInterval(r), this._disposable = void 0;
		} };
	}
	dispose() {
		this.cancel(), this._isDisposed = !0;
	}
};
function re(e) {
	let t = e;
	if (t?.ownerDocument?.defaultView) return t.ownerDocument.defaultView;
	let n = e;
	return n?.view ? n.view : window;
}
var Ur = class {
	constructor(e, t, n, r) {
		this._node = e, this._type = t, this._handler = n, this._options = r, e.addEventListener(t, n, r);
	}
	dispose() {
		!this._node || !this._handler || (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null);
	}
};
function I(e, t, n, r) {
	return new Ur(e, t, n, r);
}
function Kr(e, t, n, r) {
	return I(e, t, n, r);
}
var ae = {
	CLICK: "click",
	MOUSE_DOWN: "mousedown",
	MOUSE_OVER: "mouseover",
	MOUSE_LEAVE: "mouseleave",
	KEY_DOWN: "keydown",
	KEY_UP: "keyup",
	INPUT: "input",
	BLUR: "blur",
	FOCUS: "focus",
	CHANGE: "change",
	POINTER_DOWN: "pointerdown",
	POINTER_MOVE: "pointermove",
	POINTER_UP: "pointerup",
	MOUSE_WHEEL: "wheel",
	WHEEL: "wheel"
};
function Gs(e) {
	let t = e.getBoundingClientRect(), n = re(e);
	return {
		left: t.left + n.scrollX,
		top: t.top + n.scrollY,
		width: t.width,
		height: t.height
	};
}
var Ei = class {
	constructor(e, t) {
		this._runner = e, this.priority = t, this._canceled = !1;
	}
	dispose() {
		this._canceled = !0;
	}
	execute() {
		if (!this._canceled) try {
			this._runner();
		} catch (e) {
			console.error(e);
		}
	}
	static sort(e, t) {
		return t.priority - e.priority;
	}
}, zs = /* @__PURE__ */ new Map();
function Vs(e) {
	let t = zs.get(e);
	return t || (t = {
		next: [],
		current: [],
		animFrameRequested: !1,
		inAnimationFrameRunner: !1
	}, zs.set(e, t)), t;
}
function Hn(e) {
	let t = Vs(e);
	for (t.animFrameRequested = !1, t.current = t.next, t.next = [], t.inAnimationFrameRunner = !0; t.current.length > 0;) t.current.sort(Ei.sort), t.current.shift().execute();
	t.inAnimationFrameRunner = !1;
}
function it(e, t, n = 0) {
	let r = Vs(e), i = new Ei(t, n);
	return r.next.push(i), r.animFrameRequested || (r.animFrameRequested = !0, e.requestAnimationFrame(() => Hn(e))), i;
}
var yi = class extends Ii {
	constructor(e) {
		super(), this._defaultTarget = e ? re(e) : void 0;
	}
	cancelAndSet(e, t, n) {
		super.cancelAndSet(e, t, n ?? this._defaultTarget ?? window);
	}
}, Te = class {
	constructor(e) {
		this.domNode = e, this._width = "", this._height = "", this._top = "", this._left = "", this._bottom = "", this._right = "", this._className = "", this._position = "", this._layerHint = !1, this._contain = "none";
	}
	setWidth(e) {
		let t = st(e);
		this._width !== t && (this._width = t, this.domNode.style.width = this._width);
	}
	setHeight(e) {
		let t = st(e);
		this._height !== t && (this._height = t, this.domNode.style.height = this._height);
	}
	setTop(e) {
		let t = st(e);
		this._top !== t && (this._top = t, this.domNode.style.top = this._top);
	}
	setLeft(e) {
		let t = st(e);
		this._left !== t && (this._left = t, this.domNode.style.left = this._left);
	}
	setBottom(e) {
		let t = st(e);
		this._bottom !== t && (this._bottom = t, this.domNode.style.bottom = this._bottom);
	}
	setRight(e) {
		let t = st(e);
		this._right !== t && (this._right = t, this.domNode.style.right = this._right);
	}
	setClassName(e) {
		this._className !== e && (this._className = e, this.domNode.className = this._className);
	}
	toggleClassName(e, t) {
		this.domNode.classList.toggle(e, t), this._className = this.domNode.className;
	}
	setPosition(e) {
		this._position !== e && (this._position = e, this.domNode.style.position = this._position);
	}
	setLayerHinting(e) {
		this._layerHint !== e && (this._layerHint = e, e ? this.domNode.style.transform = "translate3d(0px, 0px, 0px)" : this.domNode.style.transform = "");
	}
	setContain(e) {
		this._contain !== e && (this._contain = e, this.domNode.style.contain = this._contain);
	}
	setAttribute(e, t) {
		this.domNode.setAttribute(e, t);
	}
};
function st(e) {
	return typeof e == "number" ? `${e}px` : e;
}
var ze = {};
kn(ze, {
	getSafariVersion: () => Un,
	getZoomFactor: () => Vr,
	isChrome: () => Kt,
	isChromeOS: () => $r,
	isFirefox: () => ot,
	isLegacyEdge: () => Wn,
	isLinux: () => zt,
	isMac: () => te,
	isNode: () => zr,
	isSafari: () => xi,
	isWindows: () => Ke
});
var zr = !!(typeof process < "u" && "title" in process && (typeof navigator > "u" || navigator.userAgent.startsWith("Node.js/"))), nt = zr ? "node" : navigator.userAgent, Gr = zr ? "node" : navigator.platform, ot = nt.includes("Firefox"), Kt = nt.includes("Chrome"), Wn = nt.includes("Edge"), xi = /^((?!chrome|android).)*safari/i.test(nt);
function Vr(e) {
	return 1;
}
function Un() {
	if (!xi) return 0;
	let e = nt.match(/Version\/(\d+)/);
	return e === null || e.length < 2 ? 0 : parseInt(e[1], 10);
}
var te = [
	"Macintosh",
	"MacIntel",
	"MacPPC",
	"Mac68K"
].includes(Gr), Ke = [
	"Windows",
	"Win16",
	"Win32",
	"WinCE"
].includes(Gr), zt = Gr.indexOf("Linux") >= 0, $r = /\bCrOS\b/.test(nt), $s = /* @__PURE__ */ new WeakMap();
function Kn(e) {
	if (!e.parent || e.parent === e) return null;
	try {
		let t = e.location, n = e.parent.location;
		if (t.origin !== "null" && n.origin !== "null" && t.origin !== n.origin) return null;
	} catch {
		return null;
	}
	return e.parent;
}
var qr = class {
	static _getSameOriginWindowChain(e) {
		let t = $s.get(e);
		if (!t) {
			t = [], $s.set(e, t);
			let n = e, r;
			do
				r = Kn(n), r ? t.push({
					window: new WeakRef(n),
					iframeElement: n.frameElement ?? null
				}) : t.push({
					window: new WeakRef(n),
					iframeElement: null
				}), n = r;
			while (n);
		}
		return t.slice(0);
	}
	static getPositionOfChildWindowRelativeToAncestorWindow(e, t) {
		if (!t || e === t) return {
			top: 0,
			left: 0
		};
		let n = 0, r = 0, i = this._getSameOriginWindowChain(e);
		for (let e of i) {
			let i = e.window.deref();
			if (n += i?.scrollY ?? 0, r += i?.scrollX ?? 0, i === t || !e.iframeElement) break;
			let o = e.iframeElement.getBoundingClientRect();
			n += o.top, r += o.left;
		}
		return {
			top: n,
			left: r
		};
	}
}, at = class {
	constructor(e, t) {
		this.timestamp = Date.now(), this.browserEvent = t, this.leftButton = t.button === 0, this.middleButton = t.button === 1, this.rightButton = t.button === 2, this.buttons = t.buttons, this.target = t.target, this.detail = t.detail ?? 1, t.type === "dblclick" && (this.detail = 2), this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.altKey = t.altKey, this.metaKey = t.metaKey, typeof t.pageX == "number" ? (this.posx = t.pageX, this.posy = t.pageY) : (this.posx = t.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft, this.posy = t.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop);
		let n = qr.getPositionOfChildWindowRelativeToAncestorWindow(e, t.view);
		this.posx -= n.left, this.posy -= n.top;
	}
	preventDefault() {
		this.browserEvent.preventDefault();
	}
	stopPropagation() {
		this.browserEvent.stopPropagation();
	}
}, Gt = class {
	constructor(e, t = 0, n = 0) {
		this.browserEvent = e ?? null, this.target = e ? e.target ?? e.targetNode ?? e.srcElement ?? null : null, this.deltaY = n, this.deltaX = t;
		let r = !1;
		if (Kt) {
			let e = navigator.userAgent.match(/Chrome\/(\d+)/);
			r = (e ? parseInt(e[1], 10) : 123) <= 122;
		}
		if (e) {
			let t = e, n = e, i = e.view?.devicePixelRatio ?? 1;
			if (typeof t.wheelDeltaY < "u") r ? this.deltaY = t.wheelDeltaY / (120 * i) : this.deltaY = t.wheelDeltaY / 120;
			else if (typeof n.VERTICAL_AXIS < "u" && n.axis === n.VERTICAL_AXIS) this.deltaY = -n.detail / 3;
			else if (e.type === "wheel") {
				let t = e;
				t.deltaMode === t.DOM_DELTA_LINE ? ot && !te ? this.deltaY = -e.deltaY / 3 : this.deltaY = -e.deltaY : this.deltaY = -e.deltaY / 40;
			}
			if (typeof t.wheelDeltaX < "u") xi && Ke ? this.deltaX = -(t.wheelDeltaX / 120) : r ? this.deltaX = t.wheelDeltaX / (120 * i) : this.deltaX = t.wheelDeltaX / 120;
			else if (typeof n.HORIZONTAL_AXIS < "u" && n.axis === n.HORIZONTAL_AXIS) this.deltaX = -e.detail / 3;
			else if (e.type === "wheel") {
				let t = e;
				t.deltaMode === t.DOM_DELTA_LINE ? ot && !te ? this.deltaX = -e.deltaX / 3 : this.deltaX = -e.deltaX : this.deltaX = -e.deltaX / 40;
			}
			this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta && (r ? this.deltaY = e.wheelDelta / (120 * i) : this.deltaY = e.wheelDelta / 120);
		}
	}
	preventDefault() {
		this.browserEvent?.preventDefault();
	}
	stopPropagation() {
		this.browserEvent?.stopPropagation();
	}
}, lt = class {
	constructor() {
		this._hooks = new pe(), this._pointerMoveCallback = null, this._onStopCallback = null;
	}
	dispose() {
		this.stopMonitoring(!1), this._hooks.dispose();
	}
	stopMonitoring(e) {
		if (!this.isMonitoring()) return;
		this._hooks.clear(), this._pointerMoveCallback = null;
		let t = this._onStopCallback;
		this._onStopCallback = null, e && t && t();
	}
	isMonitoring() {
		return !!this._pointerMoveCallback;
	}
	startMonitoring(e, t, n, r, i) {
		this.isMonitoring() && this.stopMonitoring(!1), this._pointerMoveCallback = r, this._onStopCallback = i;
		let o = e;
		try {
			e.setPointerCapture(t), this._hooks.add(E(() => {
				try {
					e.releasePointerCapture(t);
				} catch {}
			}));
		} catch {
			o = re(e);
		}
		this._hooks.add(I(o, ae.POINTER_MOVE, (e) => {
			if (e.buttons !== n) {
				this.stopMonitoring(!0);
				return;
			}
			e.preventDefault(), this._pointerMoveCallback(e);
		})), this._hooks.add(I(o, ae.POINTER_UP, (e) => this.stopMonitoring(!0)));
	}
}, Fe = class extends g {
	_onclick(e, t) {
		this._register(I(e, ae.CLICK, (n) => t(new at(re(e), n))));
	}
	_onmouseover(e, t) {
		this._register(I(e, ae.MOUSE_OVER, (n) => t(new at(re(e), n))));
	}
	_onmouseleave(e, t) {
		this._register(I(e, ae.MOUSE_LEAVE, (n) => t(new at(re(e), n))));
	}
}, wi = class extends Fe {
	constructor(e) {
		super(), this._handleActivate = e.handleActivate, this.bgDomNode = document.createElement("div"), this.bgDomNode.className = "xterm-arrow-background", this.bgDomNode.style.position = "absolute", this.bgDomNode.style.width = e.bgWidth + "px", this.bgDomNode.style.height = e.bgHeight + "px", typeof e.top < "u" && (this.bgDomNode.style.top = "0px"), typeof e.left < "u" && (this.bgDomNode.style.left = "0px"), typeof e.bottom < "u" && (this.bgDomNode.style.bottom = "0px"), typeof e.right < "u" && (this.bgDomNode.style.right = "0px"), this.domNode = document.createElement("div"), this.domNode.className = e.className, this.domNode.style.position = "absolute";
		let t = Math.min(e.bgWidth, e.bgHeight);
		this.domNode.style.width = t + "px", this.domNode.style.height = t + "px", typeof e.top < "u" && (this.domNode.style.top = e.top + "px"), typeof e.left < "u" && (this.domNode.style.left = e.left + "px"), typeof e.bottom < "u" && (this.domNode.style.bottom = e.bottom + "px"), typeof e.right < "u" && (this.domNode.style.right = e.right + "px"), this._pointerMoveMonitor = this._register(new lt()), this._register(Kr(this.bgDomNode, ae.POINTER_DOWN, (e) => this._arrowPointerDown(e))), this._register(Kr(this.domNode, ae.POINTER_DOWN, (e) => this._arrowPointerDown(e))), this._pointerdownRepeatTimer = this._register(new yi()), this._pointerdownScheduleRepeatTimer = this._register(new Ce());
	}
	_arrowPointerDown(e) {
		!e.target || !(e.target instanceof Element) || (this._handleActivate(), this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancelAndSet(() => {
			this._pointerdownRepeatTimer.cancelAndSet(() => this._handleActivate(), 1e3 / 24, re(e));
		}, 200), this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (e) => {}, () => {
			this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancel();
		}), e.preventDefault());
	}
}, b = class {
	constructor() {
		this._listeners = [], this._disposed = !1;
	}
	get event() {
		return this._event ||= (e, t, n) => {
			if (this._disposed) return E(() => {});
			let r = {
				fn: e,
				thisArgs: t
			};
			this._listeners = this._listeners.slice(), this._listeners.push(r);
			let i = E(() => {
				let e = this._listeners.indexOf(r);
				e !== -1 && (this._listeners = this._listeners.slice(), this._listeners.splice(e, 1));
			});
			return n && (Array.isArray(n) ? n.push(i) : n.add(i)), i;
		}, this._event;
	}
	fire(e) {
		if (this._disposed || !this._listeners.length) return;
		if (this._listeners.length === 1) {
			this._listeners[0].fn.call(this._listeners[0].thisArgs, e);
			return;
		}
		let t = this._listeners;
		for (let n = 0, r = t.length; n < r; ++n) t[n].fn.call(t[n].thisArgs, e);
	}
	dispose() {
		this._disposed || (this._disposed = !0, this._listeners.length = 0);
	}
}, Y;
((e) => {
	function t(e, t) {
		return e((e) => t.fire(e));
	}
	e.forward = t;
	function n(e, t) {
		return (n, r, i) => e((e) => n.call(r, t(e)), void 0, i);
	}
	e.map = n;
	function r(...e) {
		return (t, n, r) => {
			let i = new pe();
			for (let r of e) i.add(r((e) => t.call(n, e)));
			return r && (Array.isArray(r) ? r.push(i) : r.add(i)), i;
		};
	}
	e.any = r;
	function i(e, t, n) {
		return t(n), e((e) => t(e));
	}
	e.runAndSubscribe = i;
})(Y ||= {});
var Yr = class e {
	constructor(e, t, n, r, i, o, s) {
		this._forceIntegerValues = e, this._scrollStateBrand = void 0, this._forceIntegerValues && (t |= 0, n |= 0, r |= 0, i |= 0, o |= 0, s |= 0), this.rawScrollLeft = r, this.rawScrollTop = s, t < 0 && (t = 0), r + t > n && (r = n - t), r < 0 && (r = 0), i < 0 && (i = 0), s + i > o && (s = o - i), s < 0 && (s = 0), this.width = t, this.scrollWidth = n, this.scrollLeft = r, this.height = i, this.scrollHeight = o, this.scrollTop = s;
	}
	equals(e) {
		return this.rawScrollLeft === e.rawScrollLeft && this.rawScrollTop === e.rawScrollTop && this.width === e.width && this.scrollWidth === e.scrollWidth && this.scrollLeft === e.scrollLeft && this.height === e.height && this.scrollHeight === e.scrollHeight && this.scrollTop === e.scrollTop;
	}
	withScrollDimensions(t, n) {
		return new e(this._forceIntegerValues, typeof t.width < "u" ? t.width : this.width, typeof t.scrollWidth < "u" ? t.scrollWidth : this.scrollWidth, n ? this.rawScrollLeft : this.scrollLeft, typeof t.height < "u" ? t.height : this.height, typeof t.scrollHeight < "u" ? t.scrollHeight : this.scrollHeight, n ? this.rawScrollTop : this.scrollTop);
	}
	withScrollPosition(t) {
		return new e(this._forceIntegerValues, this.width, this.scrollWidth, typeof t.scrollLeft < "u" ? t.scrollLeft : this.rawScrollLeft, this.height, this.scrollHeight, typeof t.scrollTop < "u" ? t.scrollTop : this.rawScrollTop);
	}
	createScrollEvent(e, t) {
		let n = this.width !== e.width, r = this.scrollWidth !== e.scrollWidth, i = this.scrollLeft !== e.scrollLeft, o = this.height !== e.height, s = this.scrollHeight !== e.scrollHeight, p = this.scrollTop !== e.scrollTop;
		return {
			inSmoothScrolling: t,
			oldWidth: e.width,
			oldScrollWidth: e.scrollWidth,
			oldScrollLeft: e.scrollLeft,
			width: this.width,
			scrollWidth: this.scrollWidth,
			scrollLeft: this.scrollLeft,
			oldHeight: e.height,
			oldScrollHeight: e.scrollHeight,
			oldScrollTop: e.scrollTop,
			height: this.height,
			scrollHeight: this.scrollHeight,
			scrollTop: this.scrollTop,
			widthChanged: n,
			scrollWidthChanged: r,
			scrollLeftChanged: i,
			heightChanged: o,
			scrollHeightChanged: s,
			scrollTopChanged: p
		};
	}
}, ct = class extends g {
	constructor(e) {
		super(), this._scrollableBrand = void 0, this._onScroll = this._register(new b()), this.onScroll = this._onScroll.event, this._smoothScrollDuration = e.smoothScrollDuration, this._scheduleAtNextAnimationFrame = e.scheduleAtNextAnimationFrame, this._state = new Yr(e.forceIntegerValues, 0, 0, 0, 0, 0, 0), this._smoothScrolling = null;
	}
	dispose() {
		this._smoothScrolling &&= (this._smoothScrolling.dispose(), null), super.dispose();
	}
	setSmoothScrollDuration(e) {
		this._smoothScrollDuration = e;
	}
	validateScrollPosition(e) {
		return this._state.withScrollPosition(e);
	}
	getScrollDimensions() {
		return this._state;
	}
	setScrollDimensions(e, t) {
		let n = this._state.withScrollDimensions(e, t);
		this._setState(n, !!this._smoothScrolling), this._smoothScrolling?.acceptScrollDimensions(this._state);
	}
	getFutureScrollPosition() {
		return this._smoothScrolling ? this._smoothScrolling.to : this._state;
	}
	getCurrentScrollPosition() {
		return this._state;
	}
	setScrollPositionNow(e) {
		let t = this._state.withScrollPosition(e);
		this._smoothScrolling &&= (this._smoothScrolling.dispose(), null), this._setState(t, !1);
	}
	setScrollPositionSmooth(e, t) {
		if (this._smoothScrollDuration === 0) {
			this.setScrollPositionNow(e);
			return;
		}
		if (this._smoothScrolling) {
			e = {
				scrollLeft: typeof e.scrollLeft > "u" ? this._smoothScrolling.to.scrollLeft : e.scrollLeft,
				scrollTop: typeof e.scrollTop > "u" ? this._smoothScrolling.to.scrollTop : e.scrollTop
			};
			let n = this._state.withScrollPosition(e);
			if (this._smoothScrolling.to.scrollLeft === n.scrollLeft && this._smoothScrolling.to.scrollTop === n.scrollTop) return;
			let r;
			r = t ? new Vt(this._smoothScrolling.from, n, this._smoothScrolling.startTime, this._smoothScrolling.duration) : Vt.start(this._state, n, this._smoothScrollDuration), this._smoothScrolling.dispose(), this._smoothScrolling = r;
		} else {
			let t = this._state.withScrollPosition(e);
			this._smoothScrolling = Vt.start(this._state, t, this._smoothScrollDuration);
		}
		this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
			this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable = null, this._performSmoothScrolling());
		});
	}
	hasPendingScrollAnimation() {
		return !!this._smoothScrolling;
	}
	_performSmoothScrolling() {
		if (!this._smoothScrolling) return;
		let e = this._smoothScrolling.tick(), t = this._state.withScrollPosition(e);
		if (this._setState(t, !0), this._smoothScrolling) {
			if (e.isDone) {
				this._smoothScrolling.dispose(), this._smoothScrolling = null;
				return;
			}
			this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
				this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable = null, this._performSmoothScrolling());
			});
		}
	}
	_setState(e, t) {
		let n = this._state;
		n.equals(e) || (this._state = e, this._onScroll.fire(this._state.createScrollEvent(n, t)));
	}
}, Ti = class {
	constructor(e, t, n) {
		this.scrollLeft = e, this.scrollTop = t, this.isDone = n;
	}
};
function Xr(e, t) {
	let n = t - e;
	return function(t) {
		return e + n * Vn(t);
	};
}
function zn(e, t, n) {
	return function(r) {
		return r < n ? e(r / n) : t((r - n) / (1 - n));
	};
}
var Vt = class e {
	constructor(e, t, n, r) {
		this.from = e, this.to = t, this.duration = r, this.startTime = n, this.animationFrameDisposable = null, this._initAnimations();
	}
	_initAnimations() {
		this._scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width), this._scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height);
	}
	_initAnimation(e, t, n) {
		if (Math.abs(e - t) > 2.5 * n) {
			let r, i;
			return e < t ? (r = e + .75 * n, i = t - .75 * n) : (r = e - .75 * n, i = t + .75 * n), zn(Xr(e, r), Xr(i, t), .33);
		}
		return Xr(e, t);
	}
	dispose() {
		this.animationFrameDisposable !== null && (this.animationFrameDisposable.dispose(), this.animationFrameDisposable = null);
	}
	acceptScrollDimensions(e) {
		this.to = e.withScrollPosition(this.to), this._initAnimations();
	}
	tick() {
		return this._tick(Date.now());
	}
	_tick(e) {
		let t = (e - this.startTime) / this.duration;
		return t < 1 ? new Ti(this._scrollLeft(t), this._scrollTop(t), !1) : new Ti(this.to.scrollLeft, this.to.scrollTop, !0);
	}
	static start(t, n, r) {
		return r += 10, new e(t, n, Date.now() - 10, r);
	}
};
function Gn(e) {
	return e ** 3;
}
function Vn(e) {
	return 1 - Gn(1 - e);
}
var Di = class extends g {
	constructor(e, t, n) {
		super(), this._visibility = e, this._visibleClassName = t, this._invisibleClassName = n, this._domNode = null, this._isVisible = !1, this._isNeeded = !1, this._rawShouldBeVisible = !1, this._shouldBeVisible = !1, this._revealTimer = this._register(new Ce());
	}
	setVisibility(e) {
		this._visibility !== e && (this._visibility = e, this._updateShouldBeVisible());
	}
	setShouldBeVisible(e) {
		this._rawShouldBeVisible = e, this._updateShouldBeVisible();
	}
	_applyVisibilitySetting() {
		return this._visibility === 2 ? !1 : this._visibility === 3 ? !0 : this._rawShouldBeVisible;
	}
	_updateShouldBeVisible() {
		let e = this._applyVisibilitySetting();
		this._shouldBeVisible !== e && (this._shouldBeVisible = e, this.ensureVisibility());
	}
	setIsNeeded(e) {
		this._isNeeded !== e && (this._isNeeded = e, this.ensureVisibility());
	}
	setDomNode(e) {
		this._domNode = e, this._domNode.setClassName(this._invisibleClassName), this.setShouldBeVisible(!1);
	}
	ensureVisibility() {
		if (!this._isNeeded) {
			this._hide(!1);
			return;
		}
		this._shouldBeVisible ? this._reveal() : this._hide(!0);
	}
	_reveal() {
		this._isVisible || (this._isVisible = !0, this._revealTimer.setIfNotSet(() => {
			this._domNode?.setClassName(this._visibleClassName);
		}, 0));
	}
	_hide(e) {
		this._revealTimer.cancel(), this._isVisible && (this._isVisible = !1, this._domNode?.setClassName(this._invisibleClassName + (e ? " xterm-fade" : "")));
	}
}, $n = 140, ht = class extends Fe {
	constructor(e) {
		super(), this._lazyRender = e.lazyRender, this._host = e.host, this._scrollable = e.scrollable, this._scrollByPage = e.scrollByPage, this._scrollbarState = e.scrollbarState, this._visibilityController = this._register(new Di(e.visibility, "xterm-visible xterm-scrollbar " + e.extraScrollbarClassName, "xterm-invisible xterm-scrollbar " + e.extraScrollbarClassName)), this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._pointerMoveMonitor = this._register(new lt()), this._shouldRender = !0, this.domNode = new Te(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this._visibilityController.setDomNode(this.domNode), this.domNode.setPosition("absolute"), this._register(I(this.domNode.domNode, ae.POINTER_DOWN, (e) => this._domNodePointerDown(e)));
	}
	_createArrow(e) {
		let t = this._register(new wi(e));
		return this.domNode.domNode.appendChild(t.bgDomNode), this.domNode.domNode.appendChild(t.domNode), t;
	}
	_createSlider(e, t, n, r) {
		this.slider = new Te(document.createElement("div")), this.slider.setClassName("xterm-slider"), this.slider.setPosition("absolute"), this.slider.setTop(e), this.slider.setLeft(t), typeof n == "number" && this.slider.setWidth(n), typeof r == "number" && this.slider.setHeight(r), this.slider.setLayerHinting(!0), this.slider.setContain("strict"), this.domNode.domNode.appendChild(this.slider.domNode), this._register(I(this.slider.domNode, ae.POINTER_DOWN, (e) => {
			e.button === 0 && (e.preventDefault(), this._sliderPointerDown(e));
		})), this._onclick(this.slider.domNode, (e) => {
			e.leftButton && e.stopPropagation();
		});
	}
	_handleElementSize(e) {
		return this._scrollbarState.setVisibleSize(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender;
	}
	_handleElementScrollSize(e) {
		return this._scrollbarState.setScrollSize(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender;
	}
	_handleElementScrollPosition(e) {
		return this._scrollbarState.setScrollPosition(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender;
	}
	beginReveal() {
		this._visibilityController.setShouldBeVisible(!0);
	}
	beginHide() {
		this._visibilityController.setShouldBeVisible(!1);
	}
	render() {
		this._shouldRender && (this._shouldRender = !1, this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize()), this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition()));
	}
	_domNodePointerDown(e) {
		e.target === this.domNode.domNode && this._handlePointerDown(e);
	}
	delegatePointerDown(e) {
		let t = this.domNode.domNode.getClientRects()[0].top, n = t + this._scrollbarState.getSliderPosition(), r = t + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize(), i = this._sliderPointerPosition(e);
		n <= i && i <= r ? e.button === 0 && (e.preventDefault(), this._sliderPointerDown(e)) : this._handlePointerDown(e);
	}
	_handlePointerDown(e) {
		let t, n;
		if (e.target === this.domNode.domNode && typeof e.offsetX == "number" && typeof e.offsetY == "number") t = e.offsetX, n = e.offsetY;
		else {
			let r = Gs(this.domNode.domNode);
			t = e.pageX - r.left, n = e.pageY - r.top;
		}
		let r = this._pointerDownRelativePosition(t, n);
		this._setDesiredScrollPositionNow(this._scrollByPage ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(r) : this._scrollbarState.getDesiredScrollPositionFromOffset(r)), e.button === 0 && (e.preventDefault(), this._sliderPointerDown(e));
	}
	_sliderPointerDown(e) {
		if (!e.target || !(e.target instanceof Element)) return;
		let t = this._sliderPointerPosition(e), n = this._sliderOrthogonalPointerPosition(e), r = this._scrollbarState.clone();
		this.slider.toggleClassName("xterm-active", !0), this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (e) => {
			let i = this._sliderOrthogonalPointerPosition(e), o = Math.abs(i - n);
			if (Ke && o > $n) {
				this._setDesiredScrollPositionNow(r.getScrollPosition());
				return;
			}
			let s = this._sliderPointerPosition(e) - t;
			this._setDesiredScrollPositionNow(r.getDesiredScrollPositionFromDelta(s));
		}, () => {
			this.slider.toggleClassName("xterm-active", !1), this._host.handleDragEnd();
		}), this._host.handleDragStart();
	}
	_setDesiredScrollPositionNow(e) {
		let t = {};
		this.writeScrollPosition(t, e), this._scrollable.setScrollPositionNow(t);
	}
	updateScrollbarSize(e) {
		this._updateScrollbarSize(e), this._scrollbarState.setScrollbarSize(e), this._shouldRender = !0, this._lazyRender || this.render();
	}
	isNeeded() {
		return this._scrollbarState.isNeeded();
	}
}, dt = class e {
	constructor(e, t, n, r, i, o) {
		this._scrollbarSize = Math.round(t), this._oppositeScrollbarSize = Math.round(n), this._arrowSize = Math.round(e), this._visibleSize = r, this._scrollSize = i, this._scrollPosition = o, this._computedAvailableSize = 0, this._computedIsNeeded = !1, this._computedSliderSize = 0, this._computedSliderRatio = 0, this._computedSliderPosition = 0, this._refreshComputedValues();
	}
	clone() {
		return new e(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition);
	}
	setVisibleSize(e) {
		let t = Math.round(e);
		return this._visibleSize === t ? !1 : (this._visibleSize = t, this._refreshComputedValues(), !0);
	}
	setScrollSize(e) {
		let t = Math.round(e);
		return this._scrollSize === t ? !1 : (this._scrollSize = t, this._refreshComputedValues(), !0);
	}
	setScrollPosition(e) {
		let t = Math.round(e);
		return this._scrollPosition === t ? !1 : (this._scrollPosition = t, this._refreshComputedValues(), !0);
	}
	setScrollbarSize(e) {
		this._scrollbarSize = Math.round(e);
	}
	setArrowSize(e) {
		let t = Math.round(e);
		this._arrowSize !== t && (this._arrowSize = t, this._refreshComputedValues());
	}
	setOppositeScrollbarSize(e) {
		this._oppositeScrollbarSize = Math.round(e);
	}
	static _computeValues(e, t, n, r, i) {
		let o = Math.max(0, n - e), s = Math.max(0, o - 2 * t), p = r > 0 && r > n;
		if (!p) return {
			computedAvailableSize: Math.round(o),
			computedIsNeeded: p,
			computedSliderSize: Math.round(s),
			computedSliderRatio: 0,
			computedSliderPosition: 0
		};
		let S = Math.round(Math.max(20, Math.floor(n * s / r))), T = (s - S) / (r - n), k = i * T;
		return {
			computedAvailableSize: Math.round(o),
			computedIsNeeded: p,
			computedSliderSize: Math.round(S),
			computedSliderRatio: T,
			computedSliderPosition: Math.round(k)
		};
	}
	_refreshComputedValues() {
		let t = e._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
		this._computedAvailableSize = t.computedAvailableSize, this._computedIsNeeded = t.computedIsNeeded, this._computedSliderSize = t.computedSliderSize, this._computedSliderRatio = t.computedSliderRatio, this._computedSliderPosition = t.computedSliderPosition;
	}
	getArrowSize() {
		return this._arrowSize;
	}
	getScrollPosition() {
		return this._scrollPosition;
	}
	getRectangleLargeSize() {
		return this._computedAvailableSize;
	}
	getRectangleSmallSize() {
		return this._scrollbarSize;
	}
	isNeeded() {
		return this._computedIsNeeded;
	}
	getSliderSize() {
		return this._computedSliderSize;
	}
	getSliderPosition() {
		return this._computedSliderPosition;
	}
	getDesiredScrollPositionFromOffset(e) {
		if (!this._computedIsNeeded) return 0;
		let t = e - this._arrowSize - this._computedSliderSize / 2;
		return Math.round(t / this._computedSliderRatio);
	}
	getDesiredScrollPositionFromOffsetPaged(e) {
		if (!this._computedIsNeeded) return 0;
		let t = e - this._arrowSize, n = this._scrollPosition;
		return t < this._computedSliderPosition ? n -= this._visibleSize : n += this._visibleSize, n;
	}
	getDesiredScrollPositionFromDelta(e) {
		if (!this._computedIsNeeded) return 0;
		let t = this._computedSliderPosition + e;
		return Math.round(t / this._computedSliderRatio);
	}
}, Li = class extends ht {
	constructor(e, t, n) {
		let r = e.getScrollDimensions(), i = e.getCurrentScrollPosition();
		if (super({
			lazyRender: t.lazyRender,
			host: n,
			scrollbarState: new dt(t.horizontalHasArrows ? t.horizontalScrollbarSize : 0, t.horizontal === 2 ? 0 : t.horizontalScrollbarSize, t.vertical === 2 ? 0 : t.verticalScrollbarSize, r.width, r.scrollWidth, i.scrollLeft),
			visibility: t.horizontal,
			extraScrollbarClassName: "xterm-horizontal",
			scrollable: e,
			scrollByPage: t.scrollByPage
		}), t.horizontalHasArrows) throw Error("horizontalHasArrows is not supported in xterm.js");
		this._createSlider(Math.floor((t.horizontalScrollbarSize - t.horizontalSliderSize) / 2), 0, void 0, t.horizontalSliderSize);
	}
	_updateSlider(e, t) {
		this.slider.setWidth(e), this.slider.setLeft(t);
	}
	_renderDomNode(e, t) {
		this.domNode.setWidth(e), this.domNode.setHeight(t), this.domNode.setLeft(0), this.domNode.setBottom(0);
	}
	handleScroll(e) {
		return this._shouldRender = this._handleElementScrollSize(e.scrollWidth) || this._shouldRender, this._shouldRender = this._handleElementScrollPosition(e.scrollLeft) || this._shouldRender, this._shouldRender = this._handleElementSize(e.width) || this._shouldRender, this._shouldRender;
	}
	_pointerDownRelativePosition(e, t) {
		return e;
	}
	_sliderPointerPosition(e) {
		return e.pageX;
	}
	_sliderOrthogonalPointerPosition(e) {
		return e.pageY;
	}
	_updateScrollbarSize(e) {
		this.slider.setHeight(e);
	}
	writeScrollPosition(e, t) {
		e.scrollLeft = t;
	}
	updateOptions(e) {
		this.updateScrollbarSize(e.horizontal === 2 ? 0 : e.horizontalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(e.vertical === 2 ? 0 : e.verticalScrollbarSize), this._visibilityController.setVisibility(e.horizontal), this._scrollByPage = e.scrollByPage;
	}
}, Ai = class extends ht {
	constructor(e, t, n) {
		let r = e.getScrollDimensions(), i = e.getCurrentScrollPosition(), o = t.verticalHasArrows;
		super({
			lazyRender: t.lazyRender,
			host: n,
			scrollbarState: new dt(o ? t.verticalScrollbarSize : 0, t.vertical === 2 ? 0 : t.verticalScrollbarSize, 0, r.height, r.scrollHeight, i.scrollTop),
			visibility: t.vertical,
			extraScrollbarClassName: "xterm-vertical",
			scrollable: e,
			scrollByPage: t.scrollByPage
		}), this._arrowScrollDelta = 0, this._setArrows(o, t.verticalScrollbarSize), this._createSlider(0, Math.floor((t.verticalScrollbarSize - t.verticalSliderSize) / 2), t.verticalSliderSize, void 0);
	}
	_updateSlider(e, t) {
		this.slider.setHeight(e), this.slider.setTop(t);
	}
	_renderDomNode(e, t) {
		this.domNode.setWidth(t), this.domNode.setHeight(e), this.domNode.setRight(0), this.domNode.setTop(0);
	}
	handleScroll(e) {
		return this._shouldRender = this._handleElementScrollSize(e.scrollHeight) || this._shouldRender, this._shouldRender = this._handleElementScrollPosition(e.scrollTop) || this._shouldRender, this._shouldRender = this._handleElementSize(e.height) || this._shouldRender, this._shouldRender;
	}
	_pointerDownRelativePosition(e, t) {
		return t;
	}
	_sliderPointerPosition(e) {
		return e.pageY;
	}
	_sliderOrthogonalPointerPosition(e) {
		return e.pageX;
	}
	_updateScrollbarSize(e) {
		this.slider.setWidth(e);
	}
	writeScrollPosition(e, t) {
		e.scrollTop = t;
	}
	_arrowScroll(e) {
		let t = this._scrollable.getCurrentScrollPosition();
		this._scrollable.setScrollPositionNow({ scrollTop: t.scrollTop + e });
	}
	_setArrows(e, t) {
		if (this._arrowScrollDelta = t, (!this._arrowUp || !this._arrowDown) && (this._arrowUp = this._createArrow({
			className: "xterm-scra xterm-arrow-up",
			top: 0,
			left: 0,
			bgWidth: t,
			bgHeight: t,
			handleActivate: () => this._arrowScroll(-this._arrowScrollDelta)
		}), this._arrowDown = this._createArrow({
			className: "xterm-scra xterm-arrow-down",
			bottom: 0,
			left: 0,
			bgWidth: t,
			bgHeight: t,
			handleActivate: () => this._arrowScroll(this._arrowScrollDelta)
		})), this._updateArrowSize(this._arrowUp, t), this._updateArrowSize(this._arrowDown, t), !this._arrowUp || !this._arrowDown) return;
		let n = e ? "" : "none";
		this._arrowUp.bgDomNode.style.display = n, this._arrowUp.domNode.style.display = n, this._arrowDown.bgDomNode.style.display = n, this._arrowDown.domNode.style.display = n;
	}
	_updateArrowSize(e, t) {
		e && (e.bgDomNode.style.width = `${t}px`, e.bgDomNode.style.height = `${t}px`, e.domNode.style.width = `${t}px`, e.domNode.style.height = `${t}px`);
	}
	updateOptions(e) {
		let t = e.verticalHasArrows ? e.verticalScrollbarSize : 0;
		this._scrollbarState.setArrowSize(t), this._setArrows(e.verticalHasArrows, e.verticalScrollbarSize), this.updateScrollbarSize(e.vertical === 2 ? 0 : e.verticalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(0), this._visibilityController.setVisibility(e.vertical), this._scrollByPage = e.scrollByPage;
	}
}, jr = class {
	constructor(e, t, n) {
		this.timestamp = e, this.deltaX = t, this.deltaY = n, this.score = 0;
	}
}, Pi = class {
	constructor() {
		this._capacity = 5, this._memory = [], this._front = -1, this._rear = -1;
	}
	isPhysicalMouseWheel() {
		if (this._front === -1 && this._rear === -1) return !1;
		let e = 1, t = 0, n = 1, r = this._rear;
		for (; r !== -1;) {
			let i = r === this._front ? e : 2 ** -n;
			if (e -= i, t += this._memory[r].score * i, r === this._front) break;
			r = (this._capacity + r - 1) % this._capacity, n++;
		}
		return t <= .5;
	}
	acceptStandardWheelEvent(e) {
		if (Kt) {
			let t = Vr(re(e.browserEvent));
			this.accept(Date.now(), e.deltaX * t, e.deltaY * t);
		} else this.accept(Date.now(), e.deltaX, e.deltaY);
	}
	accept(e, t, n) {
		let r = null, i = new jr(e, t, n);
		this._front === -1 && this._rear === -1 ? (this._memory[0] = i, this._front = 0, this._rear = 0) : (r = this._memory[this._rear], this._rear = (this._rear + 1) % this._capacity, this._rear === this._front && (this._front = (this._front + 1) % this._capacity), this._memory[this._rear] = i), i.score = this._computeScore(i, r);
	}
	_computeScore(e, t) {
		if (Math.abs(e.deltaX) > 0 && Math.abs(e.deltaY) > 0) return 1;
		let n = .5;
		if ((!this._isAlmostInt(e.deltaX) || !this._isAlmostInt(e.deltaY)) && (n += .25), t) {
			let r = Math.abs(e.deltaX), i = Math.abs(e.deltaY), o = Math.abs(t.deltaX), s = Math.abs(t.deltaY), p = Math.max(Math.min(r, o), 1), S = Math.max(Math.min(i, s), 1), T = Math.max(r, o), k = Math.max(i, s);
			T % p === 0 && k % S === 0 && (n -= .5);
		}
		return Math.min(Math.max(n, 0), 1);
	}
	_isAlmostInt(e) {
		return Math.abs(Math.round(e) - e) < .01;
	}
};
Pi.INSTANCE = new Pi();
var Zr = Pi, ki = class extends Fe {
	constructor(e, t, n) {
		super(), this._onScroll = this._register(new b()), this.onScroll = this._onScroll.event, t ??= {};
		let r, i = !n;
		n ? r = n : (t.mouseWheelSmoothScroll = !1, r = new ct({
			forceIntegerValues: !0,
			smoothScrollDuration: 0,
			scheduleAtNextAnimationFrame: (t) => it(re(e), t)
		})), this._options = qn(t), this._scrollable = r, this._register(this._scrollable.onScroll((e) => {
			this._handleScroll(e), this._onScroll.fire(e);
		})), i && this._register(this._scrollable);
		let o = {
			handleMouseWheel: (e) => this._handleMouseWheel(e),
			handleDragStart: () => this._handleDragStart(),
			handleDragEnd: () => this._handleDragEnd()
		};
		this._verticalScrollbar = this._register(new Ai(this._scrollable, this._options, o)), this._horizontalScrollbar = this._register(new Li(this._scrollable, this._options, o)), this._domNode = document.createElement("div"), this._domNode.className = "xterm-scrollable-element " + this._options.className, this._domNode.setAttribute("role", "presentation"), this._domNode.style.position = "relative", this._domNode.appendChild(e), this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode), this._domNode.appendChild(this._verticalScrollbar.domNode.domNode), this._options.useShadows ? (this._leftShadowDomNode = new Te(document.createElement("div")), this._leftShadowDomNode.setClassName("xterm-shadow"), this._domNode.appendChild(this._leftShadowDomNode.domNode), this._topShadowDomNode = new Te(document.createElement("div")), this._topShadowDomNode.setClassName("xterm-shadow"), this._domNode.appendChild(this._topShadowDomNode.domNode), this._topLeftShadowDomNode = new Te(document.createElement("div")), this._topLeftShadowDomNode.setClassName("xterm-shadow"), this._domNode.appendChild(this._topLeftShadowDomNode.domNode)) : (this._leftShadowDomNode = null, this._topShadowDomNode = null, this._topLeftShadowDomNode = null), this._listenOnDomNode = this._options.listenOnDomNode ?? this._domNode, this._mouseWheelToDispose = [], this._setListeningToMouseWheel(this._options.handleMouseWheel), this._onmouseover(this._listenOnDomNode, (e) => this._handleMouseOver(e)), this._onmouseleave(this._listenOnDomNode, (e) => this._handleMouseLeave(e)), this._hideTimeout = this._register(new Ce()), this._isDragging = !1, this._mouseIsOver = !1, this._shouldRender = !0, this._revealOnScroll = !0;
	}
	get options() {
		return this._options;
	}
	dispose() {
		this._mouseWheelToDispose = Ne(this._mouseWheelToDispose), super.dispose();
	}
	getDomNode() {
		return this._domNode;
	}
	getScrollDimensions() {
		return this._scrollable.getScrollDimensions();
	}
	setScrollDimensions(e) {
		this._scrollable.setScrollDimensions(e, !1);
	}
	setScrollPosition(e) {
		e.reuseAnimation ? this._scrollable.setScrollPositionSmooth(e, e.reuseAnimation) : this._scrollable.setScrollPositionNow(e);
	}
	getScrollPosition() {
		return this._scrollable.getCurrentScrollPosition();
	}
	updateClassName(e) {
		this._options.className = e, te && (this._options.className += " xterm-mac"), this._domNode.className = "xterm-scrollable-element " + this._options.className;
	}
	updateOptions(e) {
		typeof e.handleMouseWheel < "u" && (this._options.handleMouseWheel = e.handleMouseWheel, this._setListeningToMouseWheel(this._options.handleMouseWheel)), typeof e.mouseWheelScrollSensitivity < "u" && (this._options.mouseWheelScrollSensitivity = e.mouseWheelScrollSensitivity), typeof e.fastScrollSensitivity < "u" && (this._options.fastScrollSensitivity = e.fastScrollSensitivity), typeof e.scrollPredominantAxis < "u" && (this._options.scrollPredominantAxis = e.scrollPredominantAxis), typeof e.horizontal < "u" && (this._options.horizontal = e.horizontal), typeof e.vertical < "u" && (this._options.vertical = e.vertical), typeof e.horizontalHasArrows < "u" && (this._options.horizontalHasArrows = e.horizontalHasArrows), typeof e.verticalHasArrows < "u" && (this._options.verticalHasArrows = e.verticalHasArrows), typeof e.horizontalScrollbarSize < "u" && (this._options.horizontalScrollbarSize = e.horizontalScrollbarSize), typeof e.verticalScrollbarSize < "u" && (this._options.verticalScrollbarSize = e.verticalScrollbarSize), typeof e.scrollByPage < "u" && (this._options.scrollByPage = e.scrollByPage), this._horizontalScrollbar.updateOptions(this._options), this._verticalScrollbar.updateOptions(this._options), this._options.lazyRender || this._render();
	}
	delegateScrollFromMouseWheelEvent(e) {
		this._handleMouseWheel(new Gt(e));
	}
	_setListeningToMouseWheel(e) {
		this._mouseWheelToDispose.length > 0 !== e && (this._mouseWheelToDispose = Ne(this._mouseWheelToDispose), e) && this._mouseWheelToDispose.push(I(this._listenOnDomNode, ae.MOUSE_WHEEL, (e) => {
			this._handleMouseWheel(new Gt(e));
		}, { passive: !1 }));
	}
	_handleMouseWheel(e) {
		if (e.browserEvent?.defaultPrevented) return;
		let t = Zr.INSTANCE;
		t.acceptStandardWheelEvent(e);
		let n = !1;
		if (e.deltaY || e.deltaX) {
			let r = e.deltaY * this._options.mouseWheelScrollSensitivity, i = e.deltaX * this._options.mouseWheelScrollSensitivity;
			this._options.scrollPredominantAxis && (this._options.scrollYToX && i + r === 0 ? i = r = 0 : Math.abs(r) >= Math.abs(i) ? i = 0 : r = 0), this._options.flipAxes && ([r, i] = [i, r]);
			let o = !te && e.browserEvent && e.browserEvent.shiftKey;
			(this._options.scrollYToX || o) && !i && (i = r, r = 0), e.browserEvent && e.browserEvent.altKey && (i *= this._options.fastScrollSensitivity, r *= this._options.fastScrollSensitivity);
			let s = this._scrollable.getFutureScrollPosition(), p = {};
			if (r) {
				let e = 50 * r, t = s.scrollTop - (e < 0 ? Math.floor(e) : Math.ceil(e));
				this._verticalScrollbar.writeScrollPosition(p, t);
			}
			if (i) {
				let e = 50 * i, t = s.scrollLeft - (e < 0 ? Math.floor(e) : Math.ceil(e));
				this._horizontalScrollbar.writeScrollPosition(p, t);
			}
			p = this._scrollable.validateScrollPosition(p), (s.scrollLeft !== p.scrollLeft || s.scrollTop !== p.scrollTop) && (this._options.mouseWheelSmoothScroll && t.isPhysicalMouseWheel() ? this._scrollable.setScrollPositionSmooth(p) : this._scrollable.setScrollPositionNow(p), n = !0);
		}
		let r = n;
		!r && this._options.alwaysConsumeMouseWheel && (r = !0), !r && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded()) && (r = !0), r && (e.preventDefault(), e.stopPropagation());
	}
	_handleScroll(e) {
		this._shouldRender = this._horizontalScrollbar.handleScroll(e) || this._shouldRender, this._shouldRender = this._verticalScrollbar.handleScroll(e) || this._shouldRender, this._options.useShadows && (this._shouldRender = !0), this._revealOnScroll && this._reveal(), this._options.lazyRender || this._render();
	}
	renderNow() {
		if (!this._options.lazyRender) throw Error("Please use `lazyRender` together with `renderNow`!");
		this._render();
	}
	_render() {
		if (this._shouldRender && (this._shouldRender = !1, this._horizontalScrollbar.render(), this._verticalScrollbar.render(), this._options.useShadows)) {
			let e = this._scrollable.getCurrentScrollPosition(), t = e.scrollTop > 0, n = e.scrollLeft > 0, r = n ? " xterm-shadow-left" : "", i = t ? " xterm-shadow-top" : "", o = n || t ? " xterm-shadow-top-left-corner" : "";
			this._leftShadowDomNode.setClassName(`xterm-shadow${r}`), this._topShadowDomNode.setClassName(`xterm-shadow${i}`), this._topLeftShadowDomNode.setClassName(`xterm-shadow${o}${i}${r}`);
		}
	}
	_handleDragStart() {
		this._isDragging = !0, this._reveal();
	}
	_handleDragEnd() {
		this._isDragging = !1, this._hide();
	}
	_handleMouseLeave(e) {
		this._mouseIsOver = !1, this._hide();
	}
	_handleMouseOver(e) {
		this._mouseIsOver = !0, this._reveal();
	}
	_reveal() {
		this._verticalScrollbar.beginReveal(), this._horizontalScrollbar.beginReveal(), this._scheduleHide();
	}
	_hide() {
		!this._mouseIsOver && !this._isDragging && (this._verticalScrollbar.beginHide(), this._horizontalScrollbar.beginHide());
	}
	_scheduleHide() {
		!this._mouseIsOver && !this._isDragging && this._hideTimeout.cancelAndSet(() => this._hide(), 500);
	}
};
function qn(e) {
	let t = {
		lazyRender: typeof e.lazyRender < "u" ? e.lazyRender : !1,
		className: typeof e.className < "u" ? e.className : "",
		useShadows: typeof e.useShadows < "u" ? e.useShadows : !0,
		handleMouseWheel: typeof e.handleMouseWheel < "u" ? e.handleMouseWheel : !0,
		flipAxes: typeof e.flipAxes < "u" ? e.flipAxes : !1,
		consumeMouseWheelIfScrollbarIsNeeded: typeof e.consumeMouseWheelIfScrollbarIsNeeded < "u" ? e.consumeMouseWheelIfScrollbarIsNeeded : !1,
		alwaysConsumeMouseWheel: typeof e.alwaysConsumeMouseWheel < "u" ? e.alwaysConsumeMouseWheel : !1,
		scrollYToX: typeof e.scrollYToX < "u" ? e.scrollYToX : !1,
		mouseWheelScrollSensitivity: typeof e.mouseWheelScrollSensitivity < "u" ? e.mouseWheelScrollSensitivity : 1,
		fastScrollSensitivity: typeof e.fastScrollSensitivity < "u" ? e.fastScrollSensitivity : 5,
		scrollPredominantAxis: typeof e.scrollPredominantAxis < "u" ? e.scrollPredominantAxis : !0,
		mouseWheelSmoothScroll: typeof e.mouseWheelSmoothScroll < "u" ? e.mouseWheelSmoothScroll : !0,
		listenOnDomNode: typeof e.listenOnDomNode < "u" ? e.listenOnDomNode : null,
		horizontal: typeof e.horizontal < "u" ? e.horizontal : 1,
		horizontalScrollbarSize: typeof e.horizontalScrollbarSize < "u" ? e.horizontalScrollbarSize : 10,
		horizontalSliderSize: typeof e.horizontalSliderSize < "u" ? e.horizontalSliderSize : 0,
		horizontalHasArrows: typeof e.horizontalHasArrows < "u" ? e.horizontalHasArrows : !1,
		vertical: typeof e.vertical < "u" ? e.vertical : 1,
		verticalScrollbarSize: typeof e.verticalScrollbarSize < "u" ? e.verticalScrollbarSize : 10,
		verticalHasArrows: typeof e.verticalHasArrows < "u" ? e.verticalHasArrows : !1,
		verticalSliderSize: typeof e.verticalSliderSize < "u" ? e.verticalSliderSize : 0,
		scrollByPage: typeof e.scrollByPage < "u" ? e.scrollByPage : !1
	};
	return t.horizontalSliderSize = typeof e.horizontalSliderSize < "u" ? e.horizontalSliderSize : t.horizontalScrollbarSize, t.verticalSliderSize = typeof e.verticalSliderSize < "u" ? e.verticalSliderSize : t.verticalScrollbarSize, te && (t.className += " xterm-mac"), t;
}
var ut = class extends g {
	constructor(e, t, n, r, i, o, s, p, S) {
		super(), this._bufferService = n, this._coreService = i, this._optionsService = p, this._renderService = S, this._onRequestScrollLines = this._register(new b()), this.onRequestScrollLines = this._onRequestScrollLines.event, this._isSyncing = !1, this._isHandlingScroll = !1, this._suppressOnScrollHandler = !1, this._needsSyncOnRender = !1;
		let T = this._register(new ct({
			forceIntegerValues: !1,
			smoothScrollDuration: this._optionsService.rawOptions.smoothScrollDuration,
			scheduleAtNextAnimationFrame: (e) => it(r.window, e)
		}));
		this._register(this._optionsService.onSpecificOptionChange("smoothScrollDuration", () => {
			T.setSmoothScrollDuration(this._optionsService.rawOptions.smoothScrollDuration);
		})), this._scrollableElement = this._register(new ki(t, {
			vertical: 1,
			horizontal: 2,
			useShadows: !1,
			mouseWheelSmoothScroll: !0,
			verticalHasArrows: this._optionsService.rawOptions.scrollbar?.showArrows ?? !1,
			...this._getChangeOptions()
		}, T)), this._register(this._optionsService.onMultipleOptionChange([
			"scrollSensitivity",
			"fastScrollSensitivity",
			"scrollbar"
		], () => this._scrollableElement.updateOptions(this._getChangeOptions()))), this._register(o.onProtocolChange((e) => {
			this._scrollableElement.updateOptions({ handleMouseWheel: !(e & 16) });
		})), this._scrollableElement.setScrollDimensions({
			height: 0,
			scrollHeight: 0
		}), this._register(Y.runAndSubscribe(s.onChangeColors, () => {
			e.style.backgroundColor = s.colors.background.css, this._scrollableElement.getDomNode().style.backgroundColor = s.colors.background.css;
		})), e.appendChild(this._scrollableElement.getDomNode()), this._register(E(() => this._scrollableElement.getDomNode().remove())), this._styleElement = r.mainDocument.createElement("style"), t.appendChild(this._styleElement), this._register(E(() => this._styleElement.remove())), this._register(Y.runAndSubscribe(s.onChangeColors, () => {
			this._styleElement.textContent = [
				".xterm .xterm-scrollable-element > .xterm-scrollbar > .xterm-slider {",
				`  background: ${s.colors.scrollbarSliderBackground.css};`,
				"}",
				".xterm .xterm-scrollable-element > .xterm-scrollbar > .xterm-slider:hover {",
				`  background: ${s.colors.scrollbarSliderHoverBackground.css};`,
				"}",
				".xterm .xterm-scrollable-element > .xterm-scrollbar > .xterm-slider.xterm-active {",
				`  background: ${s.colors.scrollbarSliderActiveBackground.css};`,
				"}"
			].join("\n");
		})), this._register(this._bufferService.onResize(() => this.queueSync())), this._register(this._bufferService.buffers.onBufferActivate(() => {
			this._latestYDisp = void 0, this.queueSync();
		})), this._register(this._bufferService.onScroll(() => this._sync())), this._register(this._renderService.onRender(() => {
			this._needsSyncOnRender && (this._needsSyncOnRender = !1, this._sync());
		})), this._register(this._scrollableElement.onScroll((e) => this._handleScroll(e)));
	}
	scrollLines(e) {
		let t = this._scrollableElement.getScrollPosition();
		this._scrollableElement.setScrollPosition({
			reuseAnimation: !0,
			scrollTop: t.scrollTop + e * this._renderService.dimensions.css.cell.height
		});
	}
	scrollToLine(e, t) {
		t && (this._latestYDisp = e), this._scrollableElement.setScrollPosition({
			reuseAnimation: !t,
			scrollTop: e * this._renderService.dimensions.css.cell.height
		});
	}
	_getChangeOptions() {
		let e = this._optionsService.rawOptions.scrollbar?.showScrollbar ?? !0, t = this._optionsService.rawOptions.scrollbar?.showArrows ?? !1, n = e ? this._optionsService.rawOptions.scrollbar?.width ?? 14 : 0;
		return {
			mouseWheelScrollSensitivity: this._optionsService.rawOptions.scrollSensitivity,
			fastScrollSensitivity: this._optionsService.rawOptions.fastScrollSensitivity,
			vertical: e ? 1 : 2,
			verticalScrollbarSize: n,
			verticalHasArrows: t
		};
	}
	queueSync(e) {
		e !== void 0 && (this._latestYDisp = e), this._queuedAnimationFrame === void 0 && (this._queuedAnimationFrame = this._renderService.addRefreshCallback(() => {
			this._queuedAnimationFrame = void 0, this._sync(this._latestYDisp);
		}));
	}
	_sync(e = this._bufferService.buffer.ydisp) {
		if (!(!this._renderService || this._isSyncing)) {
			if (this._coreService.decPrivateModes.synchronizedOutput) {
				this._needsSyncOnRender = !0;
				return;
			}
			this._isSyncing = !0, this._suppressOnScrollHandler = !0, this._scrollableElement.setScrollDimensions({
				height: this._renderService.dimensions.css.canvas.height,
				scrollHeight: this._renderService.dimensions.css.cell.height * this._bufferService.buffer.lines.length
			}), this._suppressOnScrollHandler = !1, e !== this._latestYDisp && this._scrollableElement.setScrollPosition({ scrollTop: e * this._renderService.dimensions.css.cell.height }), this._isSyncing = !1;
		}
	}
	_handleScroll(e) {
		if (!this._renderService || this._isHandlingScroll || this._suppressOnScrollHandler) return;
		this._isHandlingScroll = !0;
		let t = Math.round(e.scrollTop / this._renderService.dimensions.css.cell.height), n = t - this._bufferService.buffer.ydisp;
		n !== 0 && (this._latestYDisp = t, this._onRequestScrollLines.fire(n)), this._isHandlingScroll = !1;
	}
	handleTouchScroll(e) {
		let t = this._scrollableElement.getScrollPosition();
		this._scrollableElement.setScrollPosition({ scrollTop: t.scrollTop - e });
	}
};
ut = y([
	m(2, D),
	m(3, z),
	m(4, X),
	m(5, Me),
	m(6, le),
	m(7, R),
	m(8, G)
], ut);
var ft = class extends g {
	constructor(e, t, n, r, i) {
		super(), this._screenElement = e, this._bufferService = t, this._coreBrowserService = n, this._decorationService = r, this._renderService = i, this._decorationElements = /* @__PURE__ */ new Map(), this._altBufferIsActive = !1, this._dimensionsChanged = !1, this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), this._screenElement.appendChild(this._container), this._register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations())), this._register(this._renderService.onDimensionsChange(() => {
			this._dimensionsChanged = !0, this._queueRefresh();
		})), this._register(this._coreBrowserService.onDprChange(() => this._queueRefresh())), this._register(this._bufferService.buffers.onBufferActivate(() => {
			this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
		})), this._register(this._decorationService.onDecorationRegistered(() => this._queueRefresh())), this._register(this._decorationService.onDecorationRemoved((e) => this._removeDecoration(e))), this._register(E(() => {
			this._container.remove(), this._decorationElements.clear();
		}));
	}
	_queueRefresh() {
		this._animationFrame === void 0 && (this._animationFrame = this._renderService.addRefreshCallback(() => {
			this._doRefreshDecorations(), this._animationFrame = void 0;
		}));
	}
	_doRefreshDecorations() {
		for (let e of this._decorationService.decorations) this._renderDecoration(e);
		this._dimensionsChanged = !1;
	}
	_renderDecoration(e) {
		this._refreshStyle(e), this._dimensionsChanged && this._refreshXPosition(e);
	}
	_createElement(e) {
		let t = this._coreBrowserService.mainDocument.createElement("div");
		t.classList.add("xterm-decoration"), t.classList.toggle("xterm-decoration-top-layer", e?.options?.layer === "top"), t.style.width = `${Math.round((e.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, t.style.height = `${(e.options.height || 1) * this._renderService.dimensions.css.cell.height}px`, t.style.top = `${(e.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height}px`, t.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
		let n = e.options.x ?? 0;
		return n && n > this._bufferService.cols && (t.style.display = "none"), this._refreshXPosition(e, t), t;
	}
	_refreshStyle(e) {
		let t = e.marker.line - this._bufferService.buffers.active.ydisp;
		if (t < 0 || t >= this._bufferService.rows) e.element && (e.element.style.display = "none", e.onRenderEmitter.fire(e.element));
		else {
			let n = this._decorationElements.get(e);
			n || (n = this._createElement(e), e.element = n, this._decorationElements.set(e, n), this._container.appendChild(n), e.onDispose(() => {
				this._decorationElements.delete(e), n.remove();
			})), n.style.display = this._altBufferIsActive ? "none" : "block", this._altBufferIsActive || (n.style.width = `${Math.round((e.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, n.style.height = `${(e.options.height || 1) * this._renderService.dimensions.css.cell.height}px`, n.style.top = `${t * this._renderService.dimensions.css.cell.height}px`, n.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`), e.onRenderEmitter.fire(n);
		}
	}
	_refreshXPosition(e, t = e.element) {
		if (!t) return;
		let n = e.options.x ?? 0;
		(e.options.anchor || "left") === "right" ? t.style.right = n ? `${n * this._renderService.dimensions.css.cell.width}px` : "" : t.style.left = n ? `${n * this._renderService.dimensions.css.cell.width}px` : "";
	}
	_removeDecoration(e) {
		this._decorationElements.get(e)?.remove(), this._decorationElements.delete(e), e.dispose();
	}
};
ft = y([
	m(1, D),
	m(2, z),
	m(3, ge),
	m(4, G)
], ft);
var Mi = class {
	constructor() {
		this._zones = [], this._zonePool = [], this._zonePoolIndex = 0, this._linePadding = {
			full: 0,
			left: 0,
			center: 0,
			right: 0
		};
	}
	get zones() {
		return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
	}
	clear() {
		this._zones.length = 0, this._zonePoolIndex = 0;
	}
	addDecoration(e) {
		if (e.options.overviewRulerOptions) {
			for (let t of this._zones) if (t.color === e.options.overviewRulerOptions.color && t.position === e.options.overviewRulerOptions.position) {
				if (this._lineIntersectsZone(t, e.marker.line)) return;
				if (this._lineAdjacentToZone(t, e.marker.line, e.options.overviewRulerOptions.position)) {
					this._addLineToZone(t, e.marker.line);
					return;
				}
			}
			if (this._zonePoolIndex < this._zonePool.length) {
				this._zonePool[this._zonePoolIndex].color = e.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = e.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = e.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = e.marker.line, this._zones.push(this._zonePool[this._zonePoolIndex++]);
				return;
			}
			this._zones.push({
				color: e.options.overviewRulerOptions.color,
				position: e.options.overviewRulerOptions.position,
				startBufferLine: e.marker.line,
				endBufferLine: e.marker.line
			}), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
		}
	}
	setPadding(e) {
		this._linePadding = e;
	}
	_lineIntersectsZone(e, t) {
		return t >= e.startBufferLine && t <= e.endBufferLine;
	}
	_lineAdjacentToZone(e, t, n) {
		return t >= e.startBufferLine - this._linePadding[n || "full"] && t <= e.endBufferLine + this._linePadding[n || "full"];
	}
	_addLineToZone(e, t) {
		e.startBufferLine = Math.min(e.startBufferLine, t), e.endBufferLine = Math.max(e.endBufferLine, t);
	}
}, Ie = {
	full: 0,
	left: 0,
	center: 0,
	right: 0
}, He = {
	full: 0,
	left: 0,
	center: 0,
	right: 0
}, $t = {
	full: 0,
	left: 0,
	center: 0,
	right: 0
}, Ge = class extends g {
	constructor(e, t, n, r, i, o, s, p) {
		super(), this._viewportElement = e, this._screenElement = t, this._bufferService = n, this._decorationService = r, this._renderService = i, this._optionsService = o, this._themeService = s, this._coreBrowserService = p, this._colorZoneStore = new Mi(), this._shouldUpdateDimensions = !0, this._shouldUpdateAnchor = !0, this._lastKnownBufferLength = 0, this._canvas = this._coreBrowserService.mainDocument.createElement("canvas"), this._canvas.classList.add("xterm-decoration-overview-ruler"), this._refreshCanvasDimensions(), this._viewportElement.parentElement?.insertBefore(this._canvas, this._viewportElement), this._register(E(() => this._canvas?.remove()));
		let S = this._canvas.getContext("2d");
		if (S) this._ctx = S;
		else throw Error("Ctx cannot be null");
		this._register(this._decorationService.onDecorationRegistered(() => this._queueRefresh(void 0, !0))), this._register(this._decorationService.onDecorationRemoved(() => this._queueRefresh(void 0, !0))), this._register(this._renderService.onRenderedViewportChange(() => this._queueRefresh())), this._register(this._bufferService.buffers.onBufferActivate(() => {
			this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
		})), this._register(this._bufferService.onScroll(() => {
			this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length && (this._refreshDrawHeightConstants(), this._refreshColorZonePadding());
		})), this._register(this._renderService.onDimensionsChange(() => this._queueRefresh(!0))), this._register(this._coreBrowserService.onDprChange(() => this._queueRefresh(!0))), this._register(this._optionsService.onSpecificOptionChange("scrollbar", () => this._queueRefresh(!0))), this._register(this._themeService.onChangeColors(() => this._queueRefresh())), this._register(E(() => {
			this._animationFrame !== void 0 && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
		})), this._queueRefresh(!0);
	}
	get _width() {
		let e = this._optionsService.rawOptions.scrollbar;
		return e?.showScrollbar ?? !0 ? e?.width ?? 0 : 0;
	}
	_refreshDrawConstants() {
		let e = Math.floor((this._canvas.width - 1) / 3), t = Math.ceil((this._canvas.width - 1) / 3);
		He.full = this._canvas.width, He.left = e, He.center = t, He.right = e, this._refreshDrawHeightConstants(), $t.full = 1, $t.left = 1, $t.center = 1 + He.left, $t.right = 1 + He.left + He.center;
	}
	_refreshDrawHeightConstants() {
		Ie.full = Math.round(2 * this._coreBrowserService.dpr);
		let e = this._canvas.height / this._bufferService.buffer.lines.length, t = Math.round(Math.max(Math.min(e, 12), 6) * this._coreBrowserService.dpr);
		Ie.left = t, Ie.center = t, Ie.right = t;
	}
	_refreshColorZonePadding() {
		this._colorZoneStore.setPadding({
			full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * Ie.full),
			left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * Ie.left),
			center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * Ie.center),
			right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * Ie.right)
		}), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
	}
	_refreshCanvasDimensions() {
		if (this._store.isDisposed || !this._renderService.hasRenderer()) return;
		let e = this._renderService.dimensions.css.canvas.height, t = this._renderService.dimensions.device.canvas.height;
		this._canvas.style.width = `${this._width}px`, this._canvas.width = Math.round(this._width * this._coreBrowserService.dpr), this._canvas.style.height = `${e}px`, this._canvas.height = t, this._refreshDrawConstants(), this._refreshColorZonePadding();
	}
	_refreshDecorations() {
		if (this._store.isDisposed || !this._renderService.hasRenderer()) return;
		this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
		for (let e of this._decorationService.decorations) this._colorZoneStore.addDecoration(e);
		this._ctx.lineWidth = 1, this._renderRulerOutline();
		let e = this._colorZoneStore.zones;
		for (let t of e) t.position !== "full" && this._renderColorZone(t);
		for (let t of e) t.position === "full" && this._renderColorZone(t);
		this._shouldUpdateDimensions = !1, this._shouldUpdateAnchor = !1;
	}
	_renderRulerOutline() {
		this._ctx.fillStyle = this._themeService.colors.overviewRulerBorder.css, this._ctx.fillRect(0, 0, 1, this._canvas.height), this._optionsService.rawOptions.scrollbar?.overviewRuler?.showTopBorder && this._ctx.fillRect(1, 0, this._canvas.width - 1, 1), this._optionsService.rawOptions.scrollbar?.overviewRuler?.showBottomBorder && this._ctx.fillRect(1, this._canvas.height - 1, this._canvas.width - 1, this._canvas.height);
	}
	_renderColorZone(e) {
		this._ctx.fillStyle = e.color, this._ctx.fillRect($t[e.position || "full"], Math.round((this._canvas.height - 1) * (e.startBufferLine / this._bufferService.buffers.active.lines.length) - Ie[e.position || "full"] / 2), He[e.position || "full"], Math.round((this._canvas.height - 1) * ((e.endBufferLine - e.startBufferLine) / this._bufferService.buffers.active.lines.length) + Ie[e.position || "full"]));
	}
	_queueRefresh(e, t) {
		this._store.isDisposed || (this._shouldUpdateDimensions = e || this._shouldUpdateDimensions, this._shouldUpdateAnchor = t || this._shouldUpdateAnchor, this._animationFrame === void 0 && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
			this._store.isDisposed || this._refreshDecorations(), this._animationFrame = void 0;
		})));
	}
};
Ge = y([
	m(2, D),
	m(3, ge),
	m(4, G),
	m(5, R),
	m(6, le),
	m(7, z)
], Ge);
var Z = 0, J = 0, Q = 0, W = 0, Jr = {
	css: "#00000000",
	rgba: 0
}, O;
((e) => {
	function t(e, t, n, r) {
		return r === void 0 ? `#${Ve(e)}${Ve(t)}${Ve(n)}` : `#${Ve(e)}${Ve(t)}${Ve(n)}${Ve(r)}`;
	}
	e.toCss = t;
	function n(e, t, n, r = 255) {
		return (e << 24 | t << 16 | n << 8 | r) >>> 0;
	}
	e.toRgba = n;
	function r(t, n, r, i) {
		return {
			css: e.toCss(t, n, r, i),
			rgba: e.toRgba(t, n, r, i)
		};
	}
	e.toColor = r;
})(O ||= {});
var L;
((e) => {
	function t(e, t) {
		if (W = (t.rgba & 255) / 255, W === 1) return {
			css: t.css,
			rgba: t.rgba
		};
		let n = t.rgba >> 24 & 255, r = t.rgba >> 16 & 255, i = t.rgba >> 8 & 255, o = e.rgba >> 24 & 255, s = e.rgba >> 16 & 255, p = e.rgba >> 8 & 255;
		return Z = o + Math.round((n - o) * W), J = s + Math.round((r - s) * W), Q = p + Math.round((i - p) * W), {
			css: O.toCss(Z, J, Q),
			rgba: O.toRgba(Z, J, Q)
		};
	}
	e.blend = t;
	function n(e) {
		return (e.rgba & 255) == 255;
	}
	e.isOpaque = n;
	function r(e, t, n) {
		let r = Bi.ensureContrastRatio(e.rgba, t.rgba, n);
		if (r) return O.toColor(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255);
	}
	e.ensureContrastRatio = r;
	function i(e) {
		let t = (e.rgba | 255) >>> 0;
		return [Z, J, Q] = Bi.toChannels(t), {
			css: O.toCss(Z, J, Q),
			rgba: t
		};
	}
	e.opaque = i;
	function o(e, t) {
		return W = Math.round(t * 255), [Z, J, Q] = Bi.toChannels(e.rgba), {
			css: O.toCss(Z, J, Q, W),
			rgba: O.toRgba(Z, J, Q, W)
		};
	}
	e.opacity = o;
	function s(e, t) {
		return W = e.rgba & 255, o(e, W * t / 255);
	}
	e.multiplyOpacity = s;
	function p(e) {
		return [
			e.rgba >> 24 & 255,
			e.rgba >> 16 & 255,
			e.rgba >> 8 & 255
		];
	}
	e.toColorRGB = p;
})(L ||= {});
var M;
((e) => {
	let t, n;
	try {
		let e = document.createElement("canvas");
		e.width = 1, e.height = 1;
		let r = e.getContext("2d", { willReadFrequently: !0 });
		r && (t = r, t.globalCompositeOperation = "copy", n = t.createLinearGradient(0, 0, 1, 1));
	} catch {}
	function r(e) {
		if (e.match(/#[\da-f]{3,8}/i)) switch (e.length) {
			case 4: return Z = parseInt(e.slice(1, 2).repeat(2), 16), J = parseInt(e.slice(2, 3).repeat(2), 16), Q = parseInt(e.slice(3, 4).repeat(2), 16), O.toColor(Z, J, Q);
			case 5: return Z = parseInt(e.slice(1, 2).repeat(2), 16), J = parseInt(e.slice(2, 3).repeat(2), 16), Q = parseInt(e.slice(3, 4).repeat(2), 16), W = parseInt(e.slice(4, 5).repeat(2), 16), O.toColor(Z, J, Q, W);
			case 7: return {
				css: e,
				rgba: (parseInt(e.slice(1), 16) << 8 | 255) >>> 0
			};
			case 9: return {
				css: e,
				rgba: parseInt(e.slice(1), 16) >>> 0
			};
		}
		let r = e.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
		if (r) return Z = parseInt(r[1], 10), J = parseInt(r[2], 10), Q = parseInt(r[3], 10), W = Math.round((r[5] === void 0 ? 1 : parseFloat(r[5])) * 255), O.toColor(Z, J, Q, W);
		if (e === "transparent") return {
			css: "transparent",
			rgba: 0
		};
		if (!t || !n || (t.fillStyle = n, t.fillStyle = e, typeof t.fillStyle != "string") || (t.fillRect(0, 0, 1, 1), [Z, J, Q, W] = t.getImageData(0, 0, 1, 1).data, W !== 255)) throw Error("css.toColor: Unsupported css format");
		return {
			rgba: O.toRgba(Z, J, Q, W),
			css: e
		};
	}
	e.toColor = r;
})(M ||= {});
var j;
((e) => {
	function t(e) {
		return n(e >> 16 & 255, e >> 8 & 255, e & 255);
	}
	e.relativeLuminance = t;
	function n(e, t, n) {
		let r = e / 255, i = t / 255, o = n / 255, s = r <= .03928 ? r / 12.92 : ((r + .055) / 1.055) ** 2.4, p = i <= .03928 ? i / 12.92 : ((i + .055) / 1.055) ** 2.4, S = o <= .03928 ? o / 12.92 : ((o + .055) / 1.055) ** 2.4;
		return s * .2126 + p * .7152 + S * .0722;
	}
	e.relativeLuminance2 = n;
})(j ||= {});
var Bi;
((e) => {
	function t(e, t) {
		if (W = (t & 255) / 255, W === 1) return t;
		let n = t >> 24 & 255, r = t >> 16 & 255, i = t >> 8 & 255, o = e >> 24 & 255, s = e >> 16 & 255, p = e >> 8 & 255;
		return Z = o + Math.round((n - o) * W), J = s + Math.round((r - s) * W), Q = p + Math.round((i - p) * W), O.toRgba(Z, J, Q);
	}
	e.blend = t;
	function n(e, t, n) {
		let o = j.relativeLuminance(e >> 8), s = j.relativeLuminance(t >> 8);
		if (De(o, s) < n) {
			if (s < o) {
				let s = r(e, t, n), p = De(o, j.relativeLuminance(s >> 8));
				if (p < n) {
					let r = i(e, t, n);
					return p > De(o, j.relativeLuminance(r >> 8)) ? s : r;
				}
				return s;
			}
			let p = i(e, t, n), S = De(o, j.relativeLuminance(p >> 8));
			if (S < n) {
				let i = r(e, t, n);
				return S > De(o, j.relativeLuminance(i >> 8)) ? p : i;
			}
			return p;
		}
	}
	e.ensureContrastRatio = n;
	function r(e, t, n) {
		let r = e >> 24 & 255, i = e >> 16 & 255, o = e >> 8 & 255, s = t >> 24 & 255, p = t >> 16 & 255, S = t >> 8 & 255, T = De(j.relativeLuminance2(s, p, S), j.relativeLuminance2(r, i, o));
		for (; T < n && (s > 0 || p > 0 || S > 0);) s -= Math.max(0, Math.ceil(s * .1)), p -= Math.max(0, Math.ceil(p * .1)), S -= Math.max(0, Math.ceil(S * .1)), T = De(j.relativeLuminance2(s, p, S), j.relativeLuminance2(r, i, o));
		return (s << 24 | p << 16 | S << 8 | 255) >>> 0;
	}
	e.reduceLuminance = r;
	function i(e, t, n) {
		let r = e >> 24 & 255, i = e >> 16 & 255, o = e >> 8 & 255, s = t >> 24 & 255, p = t >> 16 & 255, S = t >> 8 & 255, T = De(j.relativeLuminance2(s, p, S), j.relativeLuminance2(r, i, o));
		for (; T < n && (s < 255 || p < 255 || S < 255);) s = Math.min(255, s + Math.ceil((255 - s) * .1)), p = Math.min(255, p + Math.ceil((255 - p) * .1)), S = Math.min(255, S + Math.ceil((255 - S) * .1)), T = De(j.relativeLuminance2(s, p, S), j.relativeLuminance2(r, i, o));
		return (s << 24 | p << 16 | S << 8 | 255) >>> 0;
	}
	e.increaseLuminance = i;
	function o(e) {
		return [
			e >> 24 & 255,
			e >> 16 & 255,
			e >> 8 & 255,
			e & 255
		];
	}
	e.toChannels = o;
})(Bi ||= {});
function Ve(e) {
	let t = e.toString(16);
	return t.length < 2 ? "0" + t : t;
}
function De(e, t) {
	return e < t ? (t + .05) / (e + .05) : (e + .05) / (t + .05);
}
var Xn = "xterm-composition-session-start", Xs = "xterm-composition-session-end", Yn = "xterm-composition-transaction-accepted", Ee = class {
	constructor(e, t, n, r, i, o, s) {
		this._textarea = e, this._compositionView = t, this._bufferService = n, this._optionsService = r, this._coreService = i, this._renderService = o, this._themeService = s, this._isComposing = !1, this._isAwaitingCompositionEnd = !1, this._compositionPosition = {
			start: 0,
			end: 0
		}, this._compositionSuffix = "", this._dataAlreadySent = "", this._compositionInputData = "", this._lastCompositionData = "", this._compositionStartValue = "", this._compositionStartSelection = {
			start: 0,
			end: 0
		}, this._compositionHasObservedProgress = !1, this._compositionTransactionId = 0, this._compositionTimers = /* @__PURE__ */ new Set(), this._imeKeydownAwaitingCommit = !1;
	}
	get isComposing() {
		return this._isComposing;
	}
	get hasPendingCompositionFinalization() {
		return this._pendingComposition !== void 0;
	}
	get _isSendingComposition() {
		return this.hasPendingCompositionFinalization;
	}
	get _pendingKeypressData() {
		return this._pendingComposition?.keypressData ?? "";
	}
	compositionstart() {
		this._cancelDeferredTimer(this._compositionPositionTimer), this._compositionPositionTimer = void 0, this._cancelDeferredTimer(this._compositionViewTimer), this._compositionViewTimer = void 0, this._cancelDeferredTimer(this._compositionEndTimer), this._compositionEndTimer = void 0, this._textareaChangeTimer !== void 0 && (clearTimeout(this._textareaChangeTimer), this._textareaChangeTimer = void 0);
		let e = this._textarea.selectionStart ?? this._textarea.value.length, t = this._textarea.selectionEnd ?? e;
		this._compositionPosition.start = Math.min(e, t), this._compositionPosition.end = Math.max(e, t), this._compositionStartValue = this._textarea.value, this._compositionStartSelection = {
			start: e,
			end: t
		}, this._compositionHasObservedProgress = !1, this._imeKeydownAwaitingCommit = !1, this._pendingComposition && (this._pendingComposition.nextCompositionStart = this._compositionPosition.start), this._compositionTransactionId++, this._isComposing = !0, this._isAwaitingCompositionEnd = !0, this._compositionSuffix = this._textarea.value.substring(this._compositionPosition.end), this._resetCompositionView(), this._dataAlreadySent = "", this._compositionInputData = "", this._lastCompositionData = "", this._compositionView.classList.add("active"), this._dispatchCompositionSessionEvent(new CustomEvent(Xn, {
			bubbles: !0,
			detail: { id: this._compositionTransactionId }
		}));
	}
	compositionupdate(e) {
		e.data && !this._isComposing && this.compositionstart(), this._cancelDeferredTimer(this._compositionEndTimer), this._compositionEndTimer = void 0, this._compositionHasObservedProgress ||= this._hasCompositionProgress(), e.data?.length > 0 && (this._lastCompositionData = e.data), this._renderCompositionView(e.data ?? ""), this._compositionView.classList.toggle("active", !!e.data), this.updateCompositionElements();
		let t = this._compositionTransactionId;
		this._cancelDeferredTimer(this._compositionPositionTimer), this._compositionPositionTimer = this._defer(() => {
			if (this._isComposing && this._compositionTransactionId === t) {
				this._compositionHasObservedProgress ||= this._hasCompositionProgress();
				let e = this._textarea.selectionEnd ?? this._textarea.value.length;
				this._compositionPosition.end = Math.max(this._compositionPosition.start, e);
			}
		});
	}
	compositionend(e) {
		if (!this._isAwaitingCompositionEnd) return !1;
		if (!this._isComposing) {
			let t = this._pendingComposition;
			return t?.transactionId === this._compositionTransactionId && (t.endData = e?.data ?? "", this._updatePostCompositionInputExpectation(t)), !1;
		}
		let t = e?.data ?? "";
		if (this._compositionHasObservedProgress ||= this._hasCompositionProgress(), !this._compositionEndBelongsToCurrentTransaction(t)) {
			let e = this._pendingComposition;
			return e && e.transactionId !== this._compositionTransactionId && this._sendPendingComposition(e), this._deferCompositionEnd(t), !1;
		}
		return this._cancelDeferredTimer(this._compositionEndTimer), this._compositionEndTimer = void 0, this._finalizeComposition(!0, t), !0;
	}
	blur() {
		if (this._cancelDeferredTimer(this._compositionEndTimer), this._compositionEndTimer = void 0, this._isComposing) {
			let e = this._textarea.selectionEnd ?? this._textarea.value.length;
			this._compositionPosition.end = Math.max(this._compositionPosition.start, e);
		}
		(this._isComposing || this.hasPendingCompositionFinalization) && this._finalizeComposition(!1);
	}
	dispose() {
		this._textareaChangeTimer !== void 0 && (clearTimeout(this._textareaChangeTimer), this._textareaChangeTimer = void 0);
		for (let e of this._compositionTimers) clearTimeout(e);
		this._compositionTimers.clear(), this._compositionPositionTimer = void 0, this._compositionViewTimer = void 0, this._compositionEndTimer = void 0, this._pendingComposition = void 0, this._isAwaitingCompositionEnd = !1, this._isComposing = !1, this._compositionTransactionId++, this._compositionView.classList.remove("active"), this._resetCompositionView();
	}
	keydown(e) {
		if (this._canceledKey?.code === e.code && this._canceledKey.timeStamp === e.timeStamp) return this._canceledKey = void 0, !1;
		if (e.key === "Escape" && (this._isComposing || this.hasPendingCompositionFinalization)) return this._canceledKey = {
			code: e.code,
			timeStamp: e.timeStamp
		}, this._cancelComposition(), !1;
		if (this._isComposing || this.hasPendingCompositionFinalization) {
			if (this._deferPreeditResync(this._composedRegionLength() > 0), e.keyCode === 20 || e.keyCode === 229 || e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18) return !1;
			this._finalizeComposition(!1);
		}
		return this._imeKeydownAwaitingCommit = e.keyCode === 229, e.keyCode === 229 ? (this._handleAnyTextareaChanges(), !1) : !0;
	}
	keypress(e) {
		let t = this._pendingComposition;
		return t ? t.keypressMayOverlapComposition ? (t.keypressData += e, !0) : t.expectsPostCompositionInput && t.keypressData.length === 0 ? (t.keypressData = e, !0) : (this._sendPendingComposition(t), !1) : !1;
	}
	input(e) {
		if (this._isComposing) return this._compositionHasObservedProgress ||= this._hasCompositionProgress(), this._compositionInputData += e, !0;
		let t = this._pendingComposition;
		if (!t) return this._claimImeKeydownCommit(e);
		if (t.expectsPostCompositionInput) return t.inputData += e, t.expectsPostCompositionInput = !1, this._sendPendingComposition(t), !0;
		let n = e.length > 0 && this._getPendingTextareaInput(t) === e && this._getPendingTextareaInput(t, !0) === e;
		return this._sendPendingComposition(t), n || this._coreService.triggerDataEvent(e, !0), !0;
	}
	_claimImeKeydownCommit(e) {
		return this._imeKeydownAwaitingCommit ? (this._imeKeydownAwaitingCommit = !1, this._textareaChangeTimer !== void 0 && (clearTimeout(this._textareaChangeTimer), this._textareaChangeTimer = void 0), this._coreService.triggerDataEvent(e, !0), !0) : !1;
	}
	_finalizeComposition(e, t = "") {
		let n = this._isComposing;
		if (this._compositionView.classList.remove("active"), this._resetCompositionView(), this._isComposing = !1, !(e && !n)) {
			if (e) {
				this._pendingComposition && this._sendPendingComposition(this._pendingComposition);
				let e = {
					transactionId: this._compositionTransactionId,
					lifecycleSettled: !1,
					sessionEnded: !1,
					position: {
						start: this._compositionPosition.start,
						end: this._compositionPosition.end
					},
					suffix: this._compositionSuffix,
					dataAlreadySent: this._dataAlreadySent,
					compositionData: this._lastCompositionData,
					endData: t,
					inputData: this._compositionInputData,
					keypressData: "",
					keypressMayOverlapComposition: this._lastCompositionData.length === 0 && t.length === 0,
					expectsPostCompositionInput: !1
				};
				this._updatePostCompositionInputExpectation(e), this._pendingComposition = e, e.finalizerTimer = this._defer(() => {
					e.finalizerTimer = void 0, this._compositionTransactionId === e.transactionId && (this._isAwaitingCompositionEnd = !1), this._pendingComposition === e && this._sendPendingComposition(e, !0);
				});
			} else if (this._pendingComposition && this._sendPendingComposition(this._pendingComposition, !0), n) {
				let e = this._getCompositionInput(this._compositionPosition.start + this._dataAlreadySent.length, this._compositionSuffix);
				this._sendCompositionInput(this._compositionTransactionId, e);
			}
		}
	}
	_sendPendingComposition(e, t = !1) {
		this._cancelPendingFinalizer(e), this._pendingComposition === e && (this._pendingComposition = void 0);
		let n = this._getPendingTextareaInput(e, t), r = this._removeAlreadySentData(e.inputData || e.keypressData, e.dataAlreadySent), i = this._mergeTextObservations(n || e.endData || (r ? e.compositionData : ""), r, e.keypressMayOverlapComposition);
		this._sendCompositionInput(e.transactionId, i, !e.sessionEnded), this._settlePendingComposition(e);
	}
	_cancelPendingFinalizer(e) {
		e.finalizerTimer !== void 0 && (clearTimeout(e.finalizerTimer), this._compositionTimers.delete(e.finalizerTimer), e.finalizerTimer = void 0);
	}
	_settlePendingComposition(e) {
		e.lifecycleSettled || (e.lifecycleSettled = !0, this._dispatchCompositionTransactionSettled());
	}
	_mergeTextObservations(e, t, n) {
		if (!t || e.includes(t)) return e;
		if (!e || t.includes(e)) return t;
		if (n) {
			let n = Math.min(e.length, t.length);
			for (; n > 0 && !e.endsWith(t.substring(0, n));) n--;
			let r = Math.min(e.length, t.length);
			for (; r > 0 && !t.endsWith(e.substring(0, r));) r--;
			return n > r ? e + t.substring(n) : t + e.substring(r);
		}
		let r = Math.min(e.length, t.length);
		for (; r > 0 && !e.endsWith(t.substring(0, r));) r--;
		return e + t.substring(r);
	}
	_updatePostCompositionInputExpectation(e) {
		e.expectsPostCompositionInput = (e.endData.length > 0 || e.compositionData.length > 0) && e.inputData.length === 0 && this._getPendingTextareaInput(e).length === 0;
	}
	_getPendingTextareaInput(e, t = !1) {
		let n = this._textarea.value, r = e.position.start + e.dataAlreadySent.length;
		if (e.nextCompositionStart !== void 0) return n.substring(r, Math.max(r, e.nextCompositionStart));
		let i = e.suffix.length > 0 && n.endsWith(e.suffix) ? n.length - e.suffix.length : n.length, o = (e.endData || e.compositionData).length, s = t ? i : Math.max(e.position.end, r + o);
		return n.substring(r, Math.max(r, Math.min(i, s)));
	}
	_getCompositionInput(e, t) {
		let n = this._textarea.value, r = t.length > 0 && n.endsWith(t) ? n.length - t.length : n.length;
		return n.substring(e, Math.max(e, r));
	}
	_removeAlreadySentData(e, t) {
		return t.length === 0 ? e : e.startsWith(t) ? e.substring(t.length) : t.includes(e) ? "" : e;
	}
	_cancelComposition() {
		let e = this._pendingComposition;
		e && this._isComposing && e.transactionId !== this._compositionTransactionId && this._sendPendingComposition(e);
		let t = this._isComposing ? this._compositionTransactionId : this._pendingComposition?.transactionId ?? 0, n = e !== void 0 && this._pendingComposition === e;
		this._pendingComposition = void 0, this._isAwaitingCompositionEnd = !1, this._isComposing = !1, this._compositionView.classList.remove("active"), this._resetCompositionView(), this._textarea.value = this._textarea.value.substring(0, this._compositionPosition.start) + this._compositionSuffix, this._sendCompositionInput(t, ""), n && e && this._settlePendingComposition(e);
	}
	_sendCompositionInput(e, t, n = !0) {
		let r = !1;
		if (n) {
			let n = new CustomEvent(Xs, {
				bubbles: !0,
				cancelable: !0,
				detail: {
					id: e,
					data: t
				}
			});
			this._dispatchCompositionSessionEvent(n), r = n.defaultPrevented;
		}
		t.length > 0 && !r && this._coreService.triggerDataEvent(t, !0);
	}
	_endPendingCompositionSession(e) {
		if (e.sessionEnded) return;
		e.sessionEnded = !0;
		let t = this._getPendingTextareaInput(e) || e.endData || e.compositionData;
		this._dispatchCompositionSessionEvent(new CustomEvent(Xs, {
			bubbles: !0,
			cancelable: !0,
			detail: {
				id: e.transactionId,
				data: t,
				dataPendingReconciliation: !0
			}
		}));
	}
	_dispatchCompositionSessionEvent(e) {
		typeof this._textarea.dispatchEvent == "function" && this._textarea.dispatchEvent(e);
	}
	_dispatchCompositionTransactionSettled() {
		this._dispatchCompositionSessionEvent(new CustomEvent("xterm-composition-transaction-settled", { bubbles: !0 }));
	}
	_deferCompositionEnd(e) {
		this._cancelDeferredTimer(this._compositionEndTimer);
		let t = this._compositionTransactionId, n = this._defer(() => {
			if (this._compositionEndTimer !== n || !this._isComposing || this._compositionTransactionId !== t) return;
			if (this._compositionEndTimer = void 0, !this._compositionEndBelongsToCurrentTransaction(e)) {
				e.length === 0 && !this._hasCompositionProgress() && this._cancelComposition();
				return;
			}
			this._finalizeComposition(!0, e), this._dispatchCompositionSessionEvent(new CustomEvent(Yn, { bubbles: !0 }));
			let r = this._pendingComposition;
			r?.transactionId === t && this._sendPendingComposition(r, !0);
		});
		this._compositionEndTimer = n;
	}
	_composedRegionLength() {
		let e = this._textarea.value.length - this._compositionSuffix.length;
		return Math.max(0, e - this._compositionPosition.start);
	}
	_deferPreeditResync(e) {
		if (!e || !this._isComposing) return;
		let t = this._compositionTransactionId;
		this._defer(() => {
			this._isComposing && this._compositionTransactionId === t && this._composedRegionLength() === 0 && this._cancelComposition();
		});
	}
	_hasCompositionProgress() {
		let e = this._textarea.selectionStart ?? this._textarea.value.length, t = this._textarea.selectionEnd ?? e;
		return this._compositionHasObservedProgress || this._textarea.value !== this._compositionStartValue || e !== this._compositionStartSelection.start || t !== this._compositionStartSelection.end;
	}
	_compositionEndBelongsToCurrentTransaction(e) {
		return this._hasCompositionProgress() || e.length > 0 && e === this._lastCompositionData;
	}
	_defer(e) {
		let t = setTimeout(() => {
			this._compositionTimers.delete(t), e();
		}, 0);
		return this._compositionTimers.add(t), t;
	}
	_cancelDeferredTimer(e) {
		e !== void 0 && (clearTimeout(e), this._compositionTimers.delete(e));
	}
	_handleAnyTextareaChanges() {
		if (this._textareaChangeTimer) return;
		let e = this._textarea.value;
		this._textareaChangeTimer = window.setTimeout(() => {
			if (this._textareaChangeTimer = void 0, !this._isComposing) {
				let t = this._textarea.value, n = t.replace(e, "");
				t !== e && (this._imeKeydownAwaitingCommit = !1), this._dataAlreadySent = n, t.length > e.length ? this._coreService.triggerDataEvent(n, !0) : t.length < e.length ? this._coreService.triggerDataEvent("", !0) : t.length === e.length && t !== e && this._coreService.triggerDataEvent(t, !0);
			}
		}, 0);
	}
	_renderCompositionView(e, t = this._getRowRemainderText()) {
		if (!e) {
			this._resetCompositionView();
			return;
		}
		let n = `\u200E${e}\u200E`;
		this._compositionViewData = e;
		let r = this._compositionView.ownerDocument, i = r.createElement("span");
		i.className = "xterm-composition-preedit", i.style.flexShrink = "0", i.style.textDecoration = "underline", i.textContent = n;
		let o = r.createElement("span");
		o.className = "xterm-composition-caret", o.setAttribute("aria-hidden", "true");
		let s = [i, o], p;
		t && (p = r.createElement("span"), p.className = "xterm-composition-remainder", p.style.whiteSpace = "pre", p.textContent = t, s.push(p)), this._compositionView.replaceChildren(...s), this._compositionPreedit = i, this._compositionCaret = o, this._compositionRemainder = p, this._styleCompositionCaret();
	}
	_getRowRemainderText() {
		let e = this._bufferService.buffer;
		if (!e.isCursorInViewport) return "";
		let t = e.lines.get(e.ybase + e.y);
		return t ? t.translateToString(!0, Math.min(e.x, this._bufferService.cols - 1), t.length) : "";
	}
	_styleCompositionCaret() {
		let e = this._compositionCaret;
		if (!e) return;
		let t = Math.max(1, this._optionsService.rawOptions.cursorWidth), n = this._renderService.dimensions.css.cell.height, r = this._themeService?.colors, i = r && (L.ensureContrastRatio(r.background, r.cursor, 3) ?? r.cursor);
		e.style.backgroundColor = i?.css ?? "#FFF", e.style.display = "inline-block", e.style.flexShrink = "0", e.style.height = n + "px", e.style.marginLeft = -t + "px", e.style.verticalAlign = "top", e.style.width = t + "px";
	}
	_resetCompositionView() {
		this._compositionView.textContent = "", this._compositionPreedit = void 0, this._compositionRemainder = void 0, this._compositionCaret = void 0, this._compositionViewData = "", this._compositionView.style.display = "", this._compositionView.style.justifyContent = "";
	}
	_opaqueViewBackground() {
		let e = this._themeService?.colors.background;
		return e ? L.opaque(e).css : "#000";
	}
	updateCompositionElements(e) {
		if (!this._compositionView.classList.contains("active")) return;
		let t = this._getRowRemainderText();
		if (this._compositionViewData && t !== (this._compositionRemainder?.textContent ?? "") && this._renderCompositionView(this._compositionViewData, t), this._styleCompositionCaret(), this._bufferService.buffer.isCursorInViewport) {
			let e = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), t = this._renderService.dimensions.css.cell.height, n = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height, r = e * this._renderService.dimensions.css.cell.width;
			this._compositionView.style.left = r + "px", this._compositionView.style.top = n + "px", this._compositionView.style.height = t + "px", this._compositionView.style.lineHeight = t + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
			let i = this._bufferService.cols * this._renderService.dimensions.css.cell.width - r;
			this._compositionView.style.maxWidth = i + "px", this._compositionView.style.overflow = "hidden";
			let o = (this._compositionPreedit ?? this._compositionView).getBoundingClientRect(), s = r + Math.min(0, i - o.width), p = !!this._compositionRemainder && o.width < i;
			this._compositionRemainder && (this._compositionRemainder.style.display = p ? "" : "none"), this._compositionView.style.direction = "ltr", this._compositionView.style.display = p ? "" : "flex", this._compositionView.style.justifyContent = p ? "" : "flex-end", this._compositionView.style.background = this._opaqueViewBackground(), this._compositionView.style.color = this._themeService?.colors.foreground.css ?? "#FFF", this._textarea.style.left = s + "px", this._textarea.style.top = n + "px", this._textarea.style.width = Math.max(o.width, 1) + "px", this._textarea.style.height = Math.max(o.height, 1) + "px", this._textarea.style.lineHeight = o.height + "px";
		}
		e || (this._cancelDeferredTimer(this._compositionViewTimer), this._compositionViewTimer = this._defer(() => this.updateCompositionElements(!0)));
	}
};
Ee = y([
	m(2, D),
	m(3, R),
	m(4, X),
	m(5, G),
	m(6, le)
], Ee);
var Oi = class extends fe {
	constructor(e, t, n) {
		super(), this.content = 0, this.combinedData = "", this.fg = e.fg, this.bg = e.bg, this.combinedData = t, this._width = n;
	}
	isCombined() {
		return 2097152;
	}
	getWidth() {
		return this._width;
	}
	getChars() {
		return this.combinedData;
	}
	getCode() {
		return 2097151;
	}
	setFromCharData(e) {
		throw Error("not implemented");
	}
	getAsCharData() {
		return [
			this.fg,
			this.getChars(),
			this.getWidth(),
			this.getCode()
		];
	}
}, We = class {
	constructor(e) {
		this._bufferService = e, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new F();
	}
	register(e) {
		let t = {
			id: this._nextCharacterJoinerId++,
			handler: e
		};
		return this._characterJoiners.push(t), t.id;
	}
	deregister(e) {
		for (let t = 0; t < this._characterJoiners.length; t++) if (this._characterJoiners[t].id === e) return this._characterJoiners.splice(t, 1), !0;
		return !1;
	}
	getJoinedCharacters(e) {
		if (this._characterJoiners.length === 0) return [];
		let t = this._bufferService.buffer.lines.get(e);
		if (!t || t.length === 0) return [];
		let n = [], r = t.translateToString(!0), i = t.getTrimmedLength(), o = 0, s = 0, p = 0, S = t.getFg(0), T = t.getBg(0);
		for (let e = 0; e < i; e++) if (t.loadCell(e, this._workCell), this._workCell.getWidth() !== 0) {
			if (this._workCell.fg !== S || this._workCell.bg !== T) {
				if (e - o > 1) {
					let e = this._getJoinedRanges(r, p, s, t, o);
					for (let t = 0; t < e.length; t++) n.push(e[t]);
				}
				o = e, p = s, S = this._workCell.fg, T = this._workCell.bg;
			}
			s += this._workCell.getChars().length || 1;
		}
		if (i - o > 1) {
			let e = this._getJoinedRanges(r, p, s, t, o);
			for (let t = 0; t < e.length; t++) n.push(e[t]);
		}
		return n;
	}
	_getJoinedRanges(e, t, n, r, i) {
		let o = e.substring(t, n), s = [];
		try {
			s = this._characterJoiners[0].handler(o);
		} catch (e) {
			console.error(e);
		}
		for (let e = 1; e < this._characterJoiners.length; e++) try {
			let t = this._characterJoiners[e].handler(o);
			for (let e = 0; e < t.length; e++) We._mergeRanges(s, t[e]);
		} catch (e) {
			console.error(e);
		}
		return this._stringRangesToCellRanges(s, r, i), s;
	}
	_stringRangesToCellRanges(e, t, n) {
		let r = 0, i = !1, o = 0, s = e[r];
		if (!s) return;
		let p = t.getTrimmedLength();
		for (let S = n; S < p; S++) {
			let n = t.getWidth(S), p = t.getString(S).length || 1;
			if (n !== 0) {
				if (!i && s[0] <= o && (s[0] = S, i = !0), s[1] <= o) {
					if (s[1] = S, s = e[++r], !s) break;
					s[0] <= o ? (s[0] = S, i = !0) : i = !1;
				}
				o += p;
			}
		}
		s && (s[1] = p);
	}
	static _mergeRanges(e, t) {
		let n = !1;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (n) {
				if (t[1] <= i[0]) return e[r - 1][1] = t[1], e;
				if (t[1] <= i[1]) return e[r - 1][1] = Math.max(t[1], i[1]), e.splice(r, 1), e;
				e.splice(r, 1), r--;
			} else {
				if (t[1] <= i[0]) return e.splice(r, 0, t), e;
				if (t[1] <= i[1]) return i[0] = Math.min(t[0], i[0]), e;
				t[0] < i[1] && (i[0] = Math.min(t[0], i[0]), n = !0);
				continue;
			}
		}
		return n ? e[e.length - 1][1] = t[1] : e.push(t), e;
	}
};
We = y([m(0, D)], We);
function Qr(e) {
	if (!e) throw Error("value must not be falsy");
	return e;
}
function jn(e) {
	return 57508 <= e && e <= 57558;
}
function Zn(e) {
	return 9472 <= e && e <= 9631;
}
function Ys(e) {
	return jn(e) || Zn(e);
}
function js() {
	return {
		css: {
			canvas: Ni(),
			cell: Ni()
		},
		device: {
			canvas: Ni(),
			cell: Ni(),
			char: {
				width: 0,
				height: 0,
				left: 0,
				top: 0
			}
		}
	};
}
function Ni() {
	return {
		width: 0,
		height: 0
	};
}
var _t = class {
	constructor(e, t, n, r, i, o, s) {
		this._document = e, this._characterJoinerService = t, this._optionsService = n, this._coreBrowserService = r, this._coreService = i, this._decorationService = o, this._themeService = s, this._workCell = new F(), this._columnSelectMode = !1, this.defaultSpacing = 0;
	}
	handleSelectionChanged(e, t, n) {
		this._selectionStart = e, this._selectionEnd = t, this._columnSelectMode = n;
	}
	createRow(e, t, n, r, i, o, s, p, S, T, k, A, Sl) {
		let Cl = [];
		Sl && (Sl.hasBlinkingCells = !1);
		let wl = this._characterJoinerService.getJoinedCharacters(t), Tl = this._themeService.colors, El = e.getNoBgTrimmedLength();
		n && El < o + 1 && (El = o + 1);
		let Dl, Ol = 0, kl = "", Al, jl = 0, Ml = 0, Nl = 0, Pl = !1, Fl = 0, Il = !1, Ll, Rl = 0, zl = [], Bl = k !== -1 && A !== -1;
		for (let Vl = 0; Vl < El; Vl++) {
			e.loadCell(Vl, this._workCell);
			let El = this._workCell.getWidth();
			if (El === 0) continue;
			let Hl = !1, Ul = Vl >= Rl, Wl = Vl, Gl = this._workCell;
			if (wl.length > 0 && Vl === wl[0][0] && Ul) {
				let r = wl.shift(), i = this._isCellInSelection(r[0], t);
				for (Al = r[0] + 1; Al < r[1]; Al++) Ul &&= i === this._isCellInSelection(Al, t);
				Ul &&= !n || o < r[0] || o >= r[1], Ul ? (Hl = !0, Gl = new Oi(this._workCell, e.translateToString(!0, r[0], r[1]), r[1] - r[0]), Wl = r[1] - 1, El = Gl.getWidth()) : Rl = r[1];
			}
			let Kl = this._isCellInSelection(Vl, t), ql = n && Vl === o, Jl = Bl && Vl >= k && Vl <= A;
			Sl && Gl.isBlink() && (Sl.hasBlinkingCells = !0), !p && Gl.isBlink() && zl.push("xterm-blink-hidden");
			let Yl = !1;
			this._decorationService.forEachDecorationAtCell(Vl, t, void 0, (e) => {
				Yl = !0;
			});
			let Xl = Gl.getChars() || " ";
			if (Xl === " " && (Gl.isUnderline() || Gl.isOverline()) && (Xl = "\xA0"), Ll = El * S - T.get(Xl, Gl.isBold(), Gl.isItalic()), !Dl) Dl = this._document.createElement("span");
			else if (Ol && (Kl && Il || !Kl && !Il && Gl.bg === jl) && (Kl && Il && Tl.selectionForeground || Gl.fg === Ml) && Gl.extended.ext === Nl && Jl === Pl && Ll === Fl && !ql && !Hl && !Yl && Ul) {
				Gl.isInvisible() ? kl += " " : kl += Xl, Ol++;
				continue;
			} else Ol && (Dl.textContent = kl), Dl = this._document.createElement("span"), Ol = 0, kl = "";
			if (jl = Gl.bg, Ml = Gl.fg, Nl = Gl.extended.ext, Pl = Jl, Fl = Ll, Il = Kl, Hl && o >= Vl && o <= Wl && (o = Vl), !this._coreService.isCursorHidden && ql && this._coreService.isCursorInitialized) {
				if (zl.push("xterm-cursor"), this._coreBrowserService.isFocused) s && zl.push("xterm-cursor-blink"), zl.push(r === "bar" ? "xterm-cursor-bar" : r === "underline" ? "xterm-cursor-underline" : "xterm-cursor-block");
				else if (i) switch (i) {
					case "outline":
						zl.push("xterm-cursor-outline");
						break;
					case "block":
						zl.push("xterm-cursor-block");
						break;
					case "bar":
						zl.push("xterm-cursor-bar");
						break;
					case "underline":
						zl.push("xterm-cursor-underline");
						break;
					default: break;
				}
			}
			if (Gl.isBold() && zl.push("xterm-bold"), Gl.isItalic() && zl.push("xterm-italic"), Gl.isDim() && zl.push("xterm-dim"), kl = Gl.isInvisible() ? " " : Gl.getChars() || " ", Gl.isUnderline() && (zl.push(`xterm-underline-${Gl.extended.underlineStyle}`), kl === " " && (kl = "\xA0"), !Gl.isUnderlineColorDefault())) if (Gl.isUnderlineColorRGB()) Dl.style.textDecorationColor = `rgb(${fe.toColorRGB(Gl.getUnderlineColor()).join(",")})`;
			else {
				let e = Gl.getUnderlineColor();
				this._optionsService.rawOptions.drawBoldTextInBrightColors && Gl.isBold() && e < 8 && (e += 8), Dl.style.textDecorationColor = Tl.ansi[e].css;
			}
			Gl.isOverline() && (zl.push("xterm-overline"), kl === " " && (kl = "\xA0")), Gl.isStrikethrough() && zl.push("xterm-strikethrough"), Jl && (Dl.style.textDecoration = "underline");
			let Zl = Gl.getFgColor(), Ql = Gl.getFgColorMode(), $l = Gl.getBgColor(), eu = Gl.getBgColorMode(), tu = !!Gl.isInverse();
			if (tu) {
				let e = Zl;
				Zl = $l, $l = e;
				let t = Ql;
				Ql = eu, eu = t;
			}
			let nu, ru, iu = !1;
			this._decorationService.forEachDecorationAtCell(Vl, t, void 0, (e) => {
				e.options.layer !== "top" && iu || (e.backgroundColorRGB && (eu = 50331648, $l = e.backgroundColorRGB.rgba >> 8 & 16777215, nu = e.backgroundColorRGB), e.foregroundColorRGB && (Ql = 50331648, Zl = e.foregroundColorRGB.rgba >> 8 & 16777215, ru = e.foregroundColorRGB), iu = e.options.layer === "top");
			}), !iu && Kl && (nu = this._coreBrowserService.isFocused ? Tl.selectionBackgroundOpaque : Tl.selectionInactiveBackgroundOpaque, $l = nu.rgba >> 8 & 16777215, eu = 50331648, iu = !0, Tl.selectionForeground && (Ql = 50331648, Zl = Tl.selectionForeground.rgba >> 8 & 16777215, ru = Tl.selectionForeground)), iu && zl.push("xterm-decoration-top");
			let au;
			switch (eu) {
				case 16777216:
				case 33554432:
					au = Tl.ansi[$l], zl.push(`xterm-bg-${$l}`);
					break;
				case 50331648:
					au = O.toColor($l >> 16, $l >> 8 & 255, $l & 255), this._addStyle(Dl, `background-color:#${($l >>> 0).toString(16).padStart(6, "0")}`);
					break;
				case 0:
				default: tu ? (au = Tl.foreground, zl.push("xterm-bg-257")) : au = Tl.background;
			}
			switch (nu || Gl.isDim() && (nu = L.multiplyOpacity(au, .5)), Ql) {
				case 16777216:
				case 33554432:
					Gl.isBold() && Zl < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && (Zl += 8), this._applyMinimumContrast(Dl, au, Tl.ansi[Zl], Gl, nu, void 0) || zl.push(`xterm-fg-${Zl}`);
					break;
				case 50331648:
					let e = O.toColor(Zl >> 16 & 255, Zl >> 8 & 255, Zl & 255);
					this._applyMinimumContrast(Dl, au, e, Gl, nu, ru) || this._addStyle(Dl, `color:#${Zl.toString(16).padStart(6, "0")}`);
					break;
				case 0:
				default: this._applyMinimumContrast(Dl, au, Tl.foreground, Gl, nu, ru) || tu && zl.push("xterm-fg-257");
			}
			zl.length &&= (Dl.className = zl.join(" "), 0), !ql && !Hl && !Yl && Ul ? Ol++ : Dl.textContent = kl, Ll !== this.defaultSpacing && (Dl.style.letterSpacing = `${Ll}px`), Cl.push(Dl), Vl = Wl;
		}
		return Dl && Ol && (Dl.textContent = kl), Cl;
	}
	_applyMinimumContrast(e, t, n, r, i, o) {
		if (this._optionsService.rawOptions.minimumContrastRatio === 1 || Ys(r.getCode())) return !1;
		let s = this._getContrastCache(r), p;
		if (!i && !o && (p = s.getColor(t.rgba, n.rgba)), p === void 0) {
			let e = this._optionsService.rawOptions.minimumContrastRatio / (r.isDim() ? 2 : 1);
			p = L.ensureContrastRatio(i ?? t, o ?? n, e), s.setColor((i ?? t).rgba, (o ?? n).rgba, p ?? null);
		}
		return p ? (this._addStyle(e, `color:${p.css}`), !0) : !1;
	}
	_getContrastCache(e) {
		return e.isDim() ? this._themeService.colors.halfContrastCache : this._themeService.colors.contrastCache;
	}
	_addStyle(e, t) {
		e.setAttribute("style", `${e.getAttribute("style") || ""}${t};`);
	}
	_isCellInSelection(e, t) {
		let n = this._selectionStart, r = this._selectionEnd;
		return !n || !r ? !1 : this._columnSelectMode ? n[0] <= r[0] ? e >= n[0] && t >= n[1] && e < r[0] && t <= r[1] : e < n[0] && t >= n[1] && e >= r[0] && t <= r[1] : t > n[1] && t < r[1] || n[1] === r[1] && t === n[1] && e >= n[0] && e < r[0] || n[1] < r[1] && t === r[1] && e < r[0] || n[1] < r[1] && t === n[1] && e >= n[0];
	}
};
_t = y([
	m(1, Si),
	m(2, R),
	m(3, z),
	m(4, X),
	m(5, ge),
	m(6, le)
], _t);
var Fi = class {
	constructor(e = () => new es()) {
		this._flat = new Float32Array(256), this._font = "", this._fontSize = 0, this._weight = "normal", this._weightBold = "bold", this._canvasElements = [], this._canvasElements = [
			e(),
			e(),
			e(),
			e()
		], this.clear();
	}
	dispose() {
		this._canvasElements.length = 0, this._holey = void 0;
	}
	clear() {
		this._flat.fill(-9999), this._holey = /* @__PURE__ */ new Map();
	}
	setFont(e, t, n, r) {
		e === this._font && t === this._fontSize && n === this._weight && r === this._weightBold || (this._font = e, this._fontSize = t, this._weight = n, this._weightBold = r, this._canvasElements[0].setFont(e, t, n, !1), this._canvasElements[1].setFont(e, t, r, !1), this._canvasElements[2].setFont(e, t, n, !0), this._canvasElements[3].setFont(e, t, r, !0), this.clear());
	}
	get(e, t, n) {
		let r;
		if (!t && !n && e.length === 1 && (r = e.charCodeAt(0)) < 256) {
			if (this._flat[r] !== -9999) return this._flat[r];
			let t = this._measure(e, 0);
			return t > 0 && (this._flat[r] = t), t;
		}
		let i = e;
		t && (i += "B"), n && (i += "I");
		let o = this._holey.get(i);
		if (o === void 0) {
			let r = 0;
			t && (r |= 1), n && (r |= 2), o = this._measure(e, r), o > 0 && this._holey.set(i, o);
		}
		return o;
	}
	_measure(e, t) {
		return this._canvasElements[t].measure(e);
	}
}, es = class {
	constructor() {
		typeof OffscreenCanvas < "u" ? (this._canvas = new OffscreenCanvas(1, 1), this._ctx = Qr(this._canvas.getContext("2d"))) : (this._canvas = document.createElement("canvas"), this._canvas.width = 1, this._canvas.height = 1, this._ctx = Qr(this._canvas.getContext("2d")));
	}
	setFont(e, t, n, r) {
		let i = r ? "italic" : "";
		this._ctx.font = `${i} ${n} ${t}px ${e}`.trim();
	}
	measure(e) {
		return this._ctx.measureText(e).width;
	}
}, ts = class {
	constructor() {
		this.clear();
	}
	clear() {
		this.hasSelection = !1, this.columnSelectMode = !1, this.viewportStartRow = 0, this.viewportEndRow = 0, this.viewportCappedStartRow = 0, this.viewportCappedEndRow = 0, this.startCol = 0, this.endCol = 0, this.selectionStart = void 0, this.selectionEnd = void 0;
	}
	update(e, t, n, r = !1) {
		if (this.selectionStart = t, this.selectionEnd = n, !t || !n || t[0] === n[0] && t[1] === n[1]) {
			this.clear();
			return;
		}
		let i = e.buffers.active.ydisp, o = t[1] - i, s = n[1] - i, p = Math.max(o, 0), S = Math.min(s, e.rows - 1);
		if (p >= e.rows || S < 0) {
			this.clear();
			return;
		}
		this.hasSelection = !0, this.columnSelectMode = r, this.viewportStartRow = o, this.viewportEndRow = s, this.viewportCappedStartRow = p, this.viewportCappedEndRow = S, this.startCol = t[0], this.endCol = n[0];
	}
	isCellSelected(e, t, n) {
		return this.hasSelection ? (n -= e.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? t >= this.startCol && n >= this.viewportCappedStartRow && t < this.endCol && n <= this.viewportCappedEndRow : t < this.startCol && n >= this.viewportCappedStartRow && t >= this.endCol && n <= this.viewportCappedEndRow : n > this.viewportStartRow && n < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && n === this.viewportStartRow && t >= this.startCol && t < this.endCol || this.viewportStartRow < this.viewportEndRow && n === this.viewportEndRow && t < this.endCol || this.viewportStartRow < this.viewportEndRow && n === this.viewportStartRow && t >= this.startCol) : !1;
	}
};
function Zs() {
	return new ts();
}
var Hi = class extends g {
	constructor(e, t, n) {
		super(), this._renderCallback = e, this._coreBrowserService = t, this._optionsService = n, this._intervalDuration = 0, this._blinkOn = !0, this._needsBlinkInViewport = !1, this._isViewportVisible = !0, this._register(this._optionsService.onSpecificOptionChange("blinkIntervalDuration", (e) => {
			this.setIntervalDuration(e);
		})), this.setIntervalDuration(this._optionsService.rawOptions.blinkIntervalDuration), this._register(E(() => this._clearInterval()));
	}
	get isBlinkOn() {
		return this._blinkOn;
	}
	get isEnabled() {
		return this._intervalDuration > 0;
	}
	setNeedsBlinkInViewport(e) {
		this._needsBlinkInViewport !== e && (this._needsBlinkInViewport = e, this._updateIntervalState());
	}
	setViewportVisible(e) {
		this._isViewportVisible !== e && (this._isViewportVisible = e, this._updateIntervalState());
	}
	setIntervalDuration(e) {
		e !== this._intervalDuration && (this._intervalDuration = e, this._clearInterval(), this._updateIntervalState());
	}
	_updateIntervalState() {
		if (this._intervalDuration > 0 && this._needsBlinkInViewport && this._isViewportVisible) {
			if (this._interval !== void 0) return;
			let e = this._blinkOn;
			this._blinkOn = !0, this._interval = this._coreBrowserService.window.setInterval(() => {
				this._blinkOn = !this._blinkOn, this._renderCallback();
			}, this._intervalDuration), e || this._renderCallback();
			return;
		}
		this._clearInterval(), this._blinkOn || (this._blinkOn = !0, this._renderCallback());
	}
	_clearInterval() {
		this._interval !== void 0 && (this._coreBrowserService.window.clearInterval(this._interval), this._interval = void 0);
	}
}, Jn = 1, mt = class extends g {
	constructor(e, t, n, r, i, o, s, p, S, T, k, A, Sl, Cl) {
		super(), this._terminal = e, this._document = t, this._element = n, this._screenElement = r, this._viewportElement = i, this._helperContainer = o, this._linkifier2 = s, this._charSizeService = S, this._optionsService = T, this._bufferService = k, this._coreService = A, this._coreBrowserService = Sl, this._themeService = Cl, this._terminalClass = Jn++, this._rowElements = [], this._selectionRenderModel = Zs(), this._lastSelectionColumnMode = !1, this._rowHasBlinkingCells = [], this._rowHasBlinkingCellsCount = 0, this._onRequestRedraw = this._register(new b()), this.onRequestRedraw = this._onRequestRedraw.event, this._rowContainer = this._document.createElement("div"), this._rowContainer.classList.add("xterm-rows"), this._rowContainer.style.lineHeight = "normal", this._rowContainer.setAttribute("aria-hidden", "true"), this._refreshRowElements(this._bufferService.cols, this._bufferService.rows), this._selectionContainer = this._document.createElement("div"), this._selectionContainer.classList.add("xterm-selection"), this._selectionContainer.setAttribute("aria-hidden", "true"), this.dimensions = js(), this._updateDimensions(), this._register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this._register(this._themeService.onChangeColors((e) => this._injectCss(e))), this._injectCss(this._themeService.colors), this._rowFactory = p.createInstance(_t, document), this._element.classList.add("xterm-dom-renderer-owner-" + this._terminalClass), this._screenElement.appendChild(this._rowContainer), this._screenElement.appendChild(this._selectionContainer), this._register(this._linkifier2.onShowLinkUnderline((e) => this._handleLinkHover(e))), this._register(this._linkifier2.onHideLinkUnderline((e) => this._handleLinkLeave(e))), this._cursorBlinkStateManager = new is(this._rowContainer, this._coreBrowserService), this._register(I(this._document, "mousedown", () => this._cursorBlinkStateManager.restartBlinkAnimation())), this._register(E(() => this._cursorBlinkStateManager.dispose())), this._textBlinkStateManager = this._register(new Hi(() => this._onRequestRedraw.fire({
			start: 0,
			end: this._bufferService.rows - 1
		}), this._coreBrowserService, this._optionsService)), this._register(E(() => {
			this._element.classList.remove("xterm-dom-renderer-owner-" + this._terminalClass), this._rowContainer.remove(), this._selectionContainer.remove(), this._widthCache.dispose(), this._themeStyleElement.remove(), this._dimensionsStyleElement.remove();
		})), this._widthCache = new Fi(), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
	}
	_updateDimensions() {
		let e = this._coreBrowserService.dpr;
		this.dimensions.device.char.width = this._charSizeService.width * e, this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.left = 0, this.dimensions.device.char.top = 0, this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols, this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows, this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e), this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e), this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols, this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
		for (let e of this._rowElements) e.style.width = `${this.dimensions.css.canvas.width}px`, e.style.height = `${this.dimensions.css.cell.height}px`, e.style.lineHeight = `${this.dimensions.css.cell.height}px`, e.style.overflow = "hidden";
		this._dimensionsStyleElement || (this._dimensionsStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
		let t = `${this._terminalSelector} .xterm-rows span { display: inline-block; height: 100%; vertical-align: top;}`;
		this._dimensionsStyleElement.textContent = t, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
	}
	_injectCss(e) {
		this._themeStyleElement || (this._themeStyleElement = this._document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
		let t = `${this._terminalSelector} .xterm-rows { pointer-events: none; color: ${e.foreground.css};}`;
		t += `${this._terminalSelector} .xterm-rows, ${this._terminalSelector} .xterm-rows span { font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`, t += `${this._terminalSelector} .xterm-rows .xterm-dim { color: ${L.multiplyOpacity(e.foreground, .5).css};}`, t += `${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}${this._terminalSelector} span.xterm-blink-hidden { visibility: hidden;}`;
		let n = `blink_underline_${this._terminalClass}`, r = `blink_bar_${this._terminalClass}`, i = `blink_block_${this._terminalClass}`;
		t += `@keyframes ${n} { 50% {  border-bottom-style: hidden; }}`, t += `@keyframes ${r} { 50% {  box-shadow: none; }}`, t += `@keyframes ${i} { 0% {  background-color: ${e.cursor.css};  color: ${e.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${e.cursor.css}; }}`, t += `${this._terminalSelector} .xterm-rows.xterm-focus .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${n} 1s step-end infinite;}${this._terminalSelector} .xterm-rows.xterm-focus .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${r} 1s step-end infinite;}${this._terminalSelector} .xterm-rows.xterm-focus .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${i} 1s step-end infinite;}${this._terminalSelector} .xterm-rows.xterm-cursor-blink-idle .xterm-cursor.xterm-cursor-blink { animation: none !important;}${this._terminalSelector} .xterm-rows .xterm-cursor.xterm-cursor-block { background-color: ${e.cursor.css}; color: ${e.cursorAccent.css};}${this._terminalSelector} .xterm-rows .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${e.cursor.css} !important; color: ${e.cursorAccent.css} !important;}${this._terminalSelector} .xterm-rows .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${e.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .xterm-rows .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e.cursor.css} inset;}${this._terminalSelector} .xterm-rows .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${e.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}`, t += `${this._terminalSelector} .xterm-selection { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .xterm-selection div { position: absolute; background-color: ${e.selectionBackgroundOpaque.css};}${this._terminalSelector} .xterm-selection div { position: absolute; background-color: ${e.selectionInactiveBackgroundOpaque.css};}`;
		for (let [n, r] of e.ansi.entries()) t += `${this._terminalSelector} .xterm-fg-${n} { color: ${r.css}; }${this._terminalSelector} .xterm-fg-${n}.xterm-dim { color: ${L.multiplyOpacity(r, .5).css}; }${this._terminalSelector} .xterm-bg-${n} { background-color: ${r.css}; }`;
		t += `${this._terminalSelector} .xterm-fg-257 { color: ${L.opaque(e.background).css}; }${this._terminalSelector} .xterm-fg-257.xterm-dim { color: ${L.multiplyOpacity(L.opaque(e.background), .5).css}; }${this._terminalSelector} .xterm-bg-257 { background-color: ${e.foreground.css}; }`, this._themeStyleElement.textContent = t;
	}
	_setDefaultSpacing() {
		let e = this.dimensions.css.cell.width - this._widthCache.get("W", !1, !1);
		this._rowContainer.style.letterSpacing = `${e}px`, this._rowFactory.defaultSpacing = e;
	}
	handleDevicePixelRatioChange() {
		this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
	}
	_refreshRowElements(e, t) {
		for (let e = this._rowElements.length; e <= t; e++) {
			let e = this._document.createElement("div");
			this._rowContainer.appendChild(e), this._rowElements.push(e), this._rowHasBlinkingCells.push(!1);
		}
		for (; this._rowElements.length > t;) this._rowContainer.removeChild(this._rowElements.pop()), this._rowHasBlinkingCells.pop() && this._rowHasBlinkingCellsCount--;
	}
	handleResize(e, t) {
		this._refreshRowElements(e, t), this._updateDimensions(), this.handleSelectionChanged(this._selectionRenderModel.selectionStart, this._selectionRenderModel.selectionEnd, this._selectionRenderModel.columnSelectMode);
	}
	handleCharSizeChanged() {
		this._updateDimensions(), this._widthCache.clear(), this._setDefaultSpacing();
	}
	handleBlur() {
		this._rowContainer.classList.remove("xterm-focus"), this._cursorBlinkStateManager.pause(), this.renderRows(0, this._bufferService.rows - 1);
	}
	handleFocus() {
		this._rowContainer.classList.add("xterm-focus"), this._cursorBlinkStateManager.resume(), this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
	}
	handleViewportVisibilityChange(e) {
		this._textBlinkStateManager.setViewportVisible(e);
	}
	handleSelectionChanged(e, t, n) {
		let r = this._bufferService.rows;
		this._selectionContainer.replaceChildren(), this._rowFactory.handleSelectionChanged(e, t, n);
		let i = 0, o = -1;
		this._lastSelectionStart && this._lastSelectionEnd && (this._selectionRenderModel.update(this._terminal, this._lastSelectionStart, this._lastSelectionEnd, this._lastSelectionColumnMode), this._selectionRenderModel.hasSelection && (i = this._selectionRenderModel.viewportCappedStartRow, o = this._selectionRenderModel.viewportCappedEndRow));
		let s = 0, p = -1;
		if (!e || !t) return;
		if (this._selectionRenderModel.update(this._terminal, e, t, n), this._selectionRenderModel.hasSelection) {
			let r = this._selectionRenderModel.viewportStartRow, i = this._selectionRenderModel.viewportEndRow, o = this._selectionRenderModel.viewportCappedStartRow, S = this._selectionRenderModel.viewportCappedEndRow;
			s = o, p = S;
			let T = this._document.createDocumentFragment();
			if (n) {
				let n = e[0] > t[0];
				T.appendChild(this._createSelectionElement(o, n ? t[0] : e[0], n ? e[0] : t[0], S - o + 1));
			} else {
				let n = r === o ? e[0] : 0, s = o === i ? t[0] : this._bufferService.cols;
				T.appendChild(this._createSelectionElement(o, n, s));
				let p = S - o - 1;
				if (T.appendChild(this._createSelectionElement(o + 1, 0, this._bufferService.cols, p)), o !== S) {
					let e = i === S ? t[0] : this._bufferService.cols;
					T.appendChild(this._createSelectionElement(S, 0, e));
				}
			}
			this._selectionContainer.appendChild(T);
		}
		let S = Math.min(i, s), T = Math.max(o, p);
		if (T >= 0) {
			S = Math.max(S, 0), T = Math.min(T, r - 1);
			let e = this._bufferService.buffer.y;
			this._selectionRenderModel.hasSelection && e >= 0 && e < r && (S = Math.min(S, e), T = Math.max(T, e)), this.renderRows(S, T);
		}
		this._lastSelectionStart = e, this._lastSelectionEnd = t, this._lastSelectionColumnMode = n;
	}
	_createSelectionElement(e, t, n, r = 1) {
		let i = this._document.createElement("div"), o = t * this.dimensions.css.cell.width, s = this.dimensions.css.cell.width * (n - t);
		return o + s > this.dimensions.css.canvas.width && (s = this.dimensions.css.canvas.width - o), i.style.height = `${r * this.dimensions.css.cell.height}px`, i.style.top = `${e * this.dimensions.css.cell.height}px`, i.style.left = `${o}px`, i.style.width = `${s}px`, i;
	}
	handleCursorMove() {
		this._cursorBlinkStateManager.restartBlinkAnimation();
	}
	_handleOptionsChanged() {
		this._updateDimensions(), this._injectCss(this._themeService.colors), this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold), this._setDefaultSpacing();
	}
	clear() {
		for (let e of this._rowElements) e.replaceChildren();
		this._rowHasBlinkingCellsCount > 0 && (this._rowHasBlinkingCells.fill(!1), this._rowHasBlinkingCellsCount = 0, this._textBlinkStateManager.setNeedsBlinkInViewport(!1));
	}
	renderRows(e, t) {
		let n = this._bufferService.buffer, r = n.ybase + n.y, i = Math.min(n.x, this._bufferService.cols - 1), o = this._coreService.decPrivateModes.cursorBlink ?? this._optionsService.rawOptions.cursorBlink, s = this._coreService.decPrivateModes.cursorStyle ?? this._optionsService.rawOptions.cursorStyle, p = this._optionsService.rawOptions.cursorInactiveStyle, S = { hasBlinkingCells: !1 };
		for (let T = e; T <= t; T++) {
			let e = T + n.ydisp, t = this._rowElements[T];
			if (!t) continue;
			let k = n.lines.get(e);
			if (!k) {
				t.replaceChildren(), this._setRowBlinkState(T, !1);
				continue;
			}
			t.replaceChildren(...this._rowFactory.createRow(k, e, e === r, s, p, i, o, this._textBlinkStateManager.isBlinkOn, this.dimensions.css.cell.width, this._widthCache, -1, -1, S)), this._setRowBlinkState(T, S.hasBlinkingCells);
		}
		this._updateTextBlinkState();
	}
	get _terminalSelector() {
		return `.xterm-dom-renderer-owner-${this._terminalClass}`;
	}
	_handleLinkHover(e) {
		this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !0);
	}
	_handleLinkLeave(e) {
		this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !1);
	}
	_setCellUnderline(e, t, n, r, i, o) {
		n < 0 && (e = 0), r < 0 && (t = 0);
		let s = this._bufferService.rows - 1;
		n = Math.max(Math.min(n, s), 0), r = Math.max(Math.min(r, s), 0), i = Math.min(i, this._bufferService.cols);
		let p = this._bufferService.buffer, S = p.ybase + p.y, T = Math.min(p.x, i - 1), k = this._optionsService.rawOptions.cursorBlink, A = this._optionsService.rawOptions.cursorStyle, Sl = this._optionsService.rawOptions.cursorInactiveStyle, Cl = { hasBlinkingCells: !1 };
		for (let s = n; s <= r; ++s) {
			let wl = s + p.ydisp, Tl = this._rowElements[s];
			if (!Tl) continue;
			let El = p.lines.get(wl);
			if (!El) {
				Tl.replaceChildren(), this._setRowBlinkState(s, !1);
				continue;
			}
			Tl.replaceChildren(...this._rowFactory.createRow(El, wl, wl === S, A, Sl, T, k, this._textBlinkStateManager.isBlinkOn, this.dimensions.css.cell.width, this._widthCache, o ? s === n ? e : 0 : -1, o ? (s === r ? t : i) - 1 : -1, Cl)), this._setRowBlinkState(s, Cl.hasBlinkingCells);
		}
		this._updateTextBlinkState();
	}
	_setRowBlinkState(e, t) {
		this._rowHasBlinkingCells[e] !== t && (this._rowHasBlinkingCells[e] = t, this._rowHasBlinkingCellsCount += t ? 1 : -1);
	}
	_updateTextBlinkState() {
		this._textBlinkStateManager.setNeedsBlinkInViewport(this._rowHasBlinkingCellsCount > 0);
	}
};
mt = y([
	m(7, et),
	m(8, Be),
	m(9, R),
	m(10, D),
	m(11, X),
	m(12, z),
	m(13, le)
], mt);
var is = class {
	constructor(e, t) {
		this._rowContainer = e, this._coreBrowserService = t, this._isIdlePaused = !1, this._coreBrowserService.isFocused && this._resetIdleTimer();
	}
	dispose() {
		this._clearIdleTimer();
	}
	restartBlinkAnimation() {
		this._isIdlePaused && this._rowContainer.classList.remove("xterm-cursor-blink-idle"), this._resetIdleTimer();
	}
	pause() {
		this._isIdlePaused = !1, this._clearIdleTimer();
	}
	resume() {
		this._isIdlePaused = !1, this._rowContainer.classList.remove("xterm-cursor-blink-idle"), this._resetIdleTimer();
	}
	_resetIdleTimer() {
		this._isIdlePaused = !1, this._clearIdleTimer(), this._idleTimeout = this._coreBrowserService.window.setTimeout(() => {
			this._stopBlinkingDueToIdle();
		}, 3e5);
	}
	_clearIdleTimer() {
		this._idleTimeout !== void 0 && (this._coreBrowserService.window.clearTimeout(this._idleTimeout), this._idleTimeout = void 0);
	}
	_stopBlinkingDueToIdle() {
		this._rowContainer.classList.add("xterm-cursor-blink-idle"), this._isIdlePaused = !0, this._idleTimeout = void 0;
	}
}, bt = class extends g {
	constructor(e, t, n) {
		super(), this._optionsService = n, this.width = 0, this.height = 0, this._onCharSizeChange = this._register(new b()), this.onCharSizeChange = this._onCharSizeChange.event;
		try {
			this._measureStrategy = this._register(new ss(this._optionsService));
		} catch {
			this._measureStrategy = this._register(new rs(e, t, this._optionsService));
		}
		this._register(this._optionsService.onMultipleOptionChange(["fontFamily", "fontSize"], () => this.measure()));
	}
	get hasValidSize() {
		return this.width > 0 && this.height > 0;
	}
	measure() {
		let e = this._measureStrategy.measure();
		(e.width !== this.width || e.height !== this.height) && (this.width = e.width, this.height = e.height, this._onCharSizeChange.fire());
	}
};
bt = y([m(2, R)], bt);
var Wi = class extends g {
	constructor() {
		super(...arguments), this._result = {
			width: 0,
			height: 0
		};
	}
	_validateAndSet(e, t) {
		e !== void 0 && e > 0 && t !== void 0 && t > 0 && (this._result.width = e, this._result.height = t);
	}
}, rs = class extends Wi {
	constructor(e, t, n) {
		super(), this._document = e, this._parentElement = t, this._optionsService = n, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W".repeat(32), this._measureElement.setAttribute("aria-hidden", "true"), this._measureElement.style.whiteSpace = "pre", this._measureElement.style.fontKerning = "none", this._parentElement.appendChild(this._measureElement);
	}
	measure() {
		return this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`, this._validateAndSet(Number(this._measureElement.offsetWidth) / 32, Number(this._measureElement.offsetHeight)), this._result;
	}
}, ss = class extends Wi {
	constructor(e) {
		super(), this._optionsService = e, this._canvas = new OffscreenCanvas(100, 100), this._ctx = this._canvas.getContext("2d");
		let t = this._ctx.measureText("W");
		if (!("width" in t && "fontBoundingBoxAscent" in t && "fontBoundingBoxDescent" in t)) throw Error("Required font metrics not supported");
	}
	measure() {
		this._ctx.font = `${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;
		let e = this._ctx.measureText("W");
		return this._validateAndSet(e.width, e.fontBoundingBoxAscent + e.fontBoundingBoxDescent), this._result;
	}
}, Ui = class extends g {
	constructor(e, t, n) {
		super(), this._textarea = e, this._window = t, this.mainDocument = n, this._isFocused = !1, this._cachedIsFocused = void 0, this._onDprChange = this._register(new b()), this.onDprChange = this._onDprChange.event, this._onWindowChange = this._register(new b()), this.onWindowChange = this._onWindowChange.event, this._screenDprMonitor = this._register(new ns(this._window)), this._register(this.onWindowChange((e) => this._screenDprMonitor.setWindow(e))), this._register(Y.forward(this._screenDprMonitor.onDprChange, this._onDprChange)), this._register(I(this._textarea, "focus", () => this._isFocused = !0)), this._register(I(this._textarea, "blur", () => this._isFocused = !1));
	}
	get window() {
		return this._window;
	}
	set window(e) {
		this._window !== e && (this._window = e, this._onWindowChange.fire(this._window));
	}
	get dpr() {
		return this.window.devicePixelRatio;
	}
	get isFocused() {
		return this._cachedIsFocused === void 0 && (this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus(), queueMicrotask(() => this._cachedIsFocused = void 0)), this._cachedIsFocused;
	}
}, ns = class extends g {
	constructor(e) {
		super(), this._parentWindow = e, this._windowResizeListener = this._register(new B()), this._onDprChange = this._register(new b()), this.onDprChange = this._onDprChange.event, this._outerListener = () => this._setDprAndFireIfDiffers(), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._updateDpr(), this._setWindowResizeListener(), this._register(E(() => this.clearListener()));
	}
	setWindow(e) {
		this._parentWindow = e, this._setWindowResizeListener(), this._setDprAndFireIfDiffers();
	}
	_setWindowResizeListener() {
		this._windowResizeListener.value = I(this._parentWindow, "resize", () => this._setDprAndFireIfDiffers());
	}
	_setDprAndFireIfDiffers() {
		this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio && this._onDprChange.fire(this._parentWindow.devicePixelRatio), this._updateDpr();
	}
	_updateDpr() {
		this._outerListener && (this._resolutionMediaMatchList?.removeListener(this._outerListener), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`), this._resolutionMediaMatchList.addListener(this._outerListener));
	}
	clearListener() {
		!this._resolutionMediaMatchList || !this._outerListener || (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._outerListener = void 0);
	}
}, Ki = class extends g {
	constructor() {
		super(), this.linkProviders = [], this._register(E(() => this.linkProviders.length = 0));
	}
	registerLinkProvider(e) {
		return this.linkProviders.push(e), { dispose: () => {
			let t = this.linkProviders.indexOf(e);
			t !== -1 && this.linkProviders.splice(t, 1);
		} };
	}
};
function qt(e, t, n) {
	let r = n.getBoundingClientRect(), i = e.getComputedStyle(n), o = parseInt(i.getPropertyValue("padding-left"), 10), s = parseInt(i.getPropertyValue("padding-top"), 10);
	return [t.clientX - r.left - o, t.clientY - r.top - s];
}
function Js(e, t, n, r, i, o, s, p, S) {
	if (!o) return;
	let T = qt(e, t, n);
	return T[0] = Math.ceil((T[0] + (S ? s / 2 : 0)) / s), T[1] = Math.ceil(T[1] / p), T[0] = Math.min(Math.max(T[0], 1), r + (S ? 1 : 0)), T[1] = Math.min(Math.max(T[1], 1), i), T;
}
var vt = class {
	constructor(e, t) {
		this._charSizeService = e, this._renderService = t;
	}
	getCoords(e, t, n, r, i) {
		return Js(re(t), e, t, n, r, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, i);
	}
	getMouseReportCoords(e, t) {
		let n = qt(re(t), e, t);
		if (this._charSizeService.hasValidSize) return n[0] = Math.min(Math.max(n[0], 0), this._renderService.dimensions.css.canvas.width - 1), n[1] = Math.min(Math.max(n[1], 0), this._renderService.dimensions.css.canvas.height - 1), {
			col: Math.floor(n[0] / this._renderService.dimensions.css.cell.width),
			row: Math.floor(n[1] / this._renderService.dimensions.css.cell.height),
			x: Math.floor(n[0]),
			y: Math.floor(n[1])
		};
	}
};
vt = y([m(0, Be), m(1, G)], vt);
var Qs = typeof window == "object" ? window : globalThis;
function he(e, t = 0) {
	return e[e.length - (1 + t)];
}
function Qn(e, t, n) {
	let r = null, i = null;
	if (typeof n.value == "function" ? (r = "value", i = n.value, i.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof n.get == "function" && (r = "get", i = n.get), !i || !r) throw Error("not supported");
	let o = `$memoize$${t}`, s = n;
	s[r] = function(...e) {
		return this.hasOwnProperty(o) || Object.defineProperty(this, o, {
			configurable: !1,
			enumerable: !1,
			writable: !1,
			value: i.apply(this, e)
		}), this[o];
	};
}
var St = class e {
	constructor(t) {
		this.element = t, this.next = e.Undefined, this.prev = e.Undefined;
	}
};
St.Undefined = new St(void 0);
var ie = St, zi = class {
	constructor() {
		this._first = ie.Undefined, this._last = ie.Undefined;
	}
	push(e) {
		return this._insert(e, !0);
	}
	_insert(e, t) {
		let n = new ie(e);
		if (this._first === ie.Undefined) this._first = n, this._last = n;
		else if (t) {
			let e = this._last;
			this._last = n, n.prev = e, e.next = n;
		} else {
			let e = this._first;
			this._first = n, n.next = e, e.prev = n;
		}
		let r = !1;
		return () => {
			r || (r = !0, this._remove(n));
		};
	}
	_remove(e) {
		if (e.prev !== ie.Undefined && e.next !== ie.Undefined) {
			let t = e.prev;
			t.next = e.next, e.next.prev = t;
		} else e.prev === ie.Undefined && e.next === ie.Undefined ? (this._first = ie.Undefined, this._last = ie.Undefined) : e.next === ie.Undefined ? (this._last = this._last.prev, this._last.next = ie.Undefined) : e.prev === ie.Undefined && (this._first = this._first.next, this._first.prev = ie.Undefined);
	}
	*[Symbol.iterator]() {
		let e = this._first;
		for (; e !== ie.Undefined;) yield e.element, e = e.next;
	}
}, de;
((e) => (e.TAP = "-xterm-gesturetap", e.CHANGE = "-xterm-gesturechange", e.START = "-xterm-gesturestart", e.END = "-xterm-gesturesend", e.CONTEXT_MENU = "-xterm-gesturecontextmenu"))(de ||= {});
var K = class e extends g {
	constructor() {
		super(), this._dispatched = !1, this._targets = new zi(), this._ignoreTargets = new zi(), this._activeTouches = {}, this._handle = null, this._lastSetTapCountTime = 0;
		let e = Qs;
		this._register(I(e.document, "touchstart", (e) => this._handleTouchStart(e), { passive: !1 })), this._register(I(e.document, "touchend", (t) => this._handleTouchEnd(e, t))), this._register(I(e.document, "touchmove", (e) => this._handleTouchMove(e), { passive: !1 }));
	}
	static addTarget(t) {
		return e.isTouchDevice() ? (e._instance ||= new e(), E(e._instance._targets.push(t))) : g.None;
	}
	static ignoreTarget(t) {
		return e.isTouchDevice() ? (e._instance ||= new e(), E(e._instance._ignoreTargets.push(t))) : g.None;
	}
	static isTouchDevice() {
		return "ontouchstart" in Qs || navigator.maxTouchPoints > 0;
	}
	dispose() {
		this._handle &&= (this._handle.dispose(), null), super.dispose();
	}
	_handleTouchStart(e) {
		let t = Date.now();
		this._handle &&= (this._handle.dispose(), null);
		for (let n = 0, r = e.targetTouches.length; n < r; n++) {
			let r = e.targetTouches.item(n);
			this._activeTouches[r.identifier] = {
				id: r.identifier,
				initialTarget: r.target,
				initialTimeStamp: t,
				initialPageX: r.pageX,
				initialPageY: r.pageY,
				rollingTimestamps: [t],
				rollingPageX: [r.pageX],
				rollingPageY: [r.pageY]
			};
			let i = this._newGestureEvent(de.START, r.target);
			i.pageX = r.pageX, i.pageY = r.pageY, this._dispatchEvent(i);
		}
		this._dispatched &&= (e.preventDefault(), e.stopPropagation(), !1);
	}
	_handleTouchEnd(t, n) {
		let r = Date.now(), i = Object.keys(this._activeTouches).length;
		for (let o = 0, s = n.changedTouches.length; o < s; o++) {
			let s = n.changedTouches.item(o);
			if (!this._activeTouches.hasOwnProperty(String(s.identifier))) {
				console.warn("move of an UNKNOWN touch", s);
				continue;
			}
			let p = this._activeTouches[s.identifier], S = Date.now() - p.initialTimeStamp;
			if (S < e._holdDelay && Math.abs(p.initialPageX - he(p.rollingPageX)) < 30 && Math.abs(p.initialPageY - he(p.rollingPageY)) < 30) {
				let e = this._newGestureEvent(de.TAP, p.initialTarget);
				e.pageX = he(p.rollingPageX), e.pageY = he(p.rollingPageY), this._dispatchEvent(e);
			} else if (S >= e._holdDelay && Math.abs(p.initialPageX - he(p.rollingPageX)) < 30 && Math.abs(p.initialPageY - he(p.rollingPageY)) < 30) {
				let e = this._newGestureEvent(de.CONTEXT_MENU, p.initialTarget);
				e.pageX = he(p.rollingPageX), e.pageY = he(p.rollingPageY), this._dispatchEvent(e);
			} else if (i === 1) {
				let e = he(p.rollingPageX), n = he(p.rollingPageY), i = he(p.rollingTimestamps) - p.rollingTimestamps[0], o = e - p.rollingPageX[0], s = n - p.rollingPageY[0], S = [...this._targets].filter((e) => p.initialTarget instanceof Node && e.contains(p.initialTarget));
				this._inertia(t, S, r, Math.abs(o) / i, o > 0 ? 1 : -1, e, Math.abs(s) / i, s > 0 ? 1 : -1, n);
			}
			this._dispatchEvent(this._newGestureEvent(de.END, p.initialTarget)), delete this._activeTouches[s.identifier];
		}
		this._dispatched &&= (n.preventDefault(), n.stopPropagation(), !1);
	}
	_newGestureEvent(e, t) {
		let n = document.createEvent("CustomEvent");
		return n.initEvent(e, !1, !0), n.initialTarget = t, n.tapCount = 0, n;
	}
	_dispatchEvent(t) {
		if (t.type === de.TAP) {
			let n = (/* @__PURE__ */ new Date()).getTime(), r;
			r = n - this._lastSetTapCountTime > e._clearTapCountTime ? 1 : 2, this._lastSetTapCountTime = n, t.tapCount = r;
		} else (t.type === de.CHANGE || t.type === de.CONTEXT_MENU) && (this._lastSetTapCountTime = 0);
		if (t.initialTarget instanceof Node) {
			for (let e of this._ignoreTargets) if (e.contains(t.initialTarget)) return;
			let e = [];
			for (let n of this._targets) if (n.contains(t.initialTarget)) {
				let r = 0, i = t.initialTarget;
				for (; i && i !== n;) r++, i = i.parentElement;
				e.push([r, n]);
			}
			e.sort((e, t) => e[0] - t[0]);
			for (let [, n] of e) n.dispatchEvent(t), this._dispatched = !0;
		}
	}
	_inertia(t, n, r, i, o, s, p, S, T) {
		this._handle = it(t, () => {
			let k = Date.now(), A = k - r, Sl = 0, Cl = 0, wl = !0;
			i += e._scrollFriction * A, p += e._scrollFriction * A, i > 0 && (wl = !1, Sl = o * i * A), p > 0 && (wl = !1, Cl = S * p * A);
			let Tl = this._newGestureEvent(de.CHANGE);
			Tl.translationX = Sl, Tl.translationY = Cl, n.forEach((e) => e.dispatchEvent(Tl)), wl || this._inertia(t, n, k, i, o, s + Sl, p, S, T + Cl);
		});
	}
	_handleTouchMove(e) {
		let t = Date.now();
		for (let n = 0, r = e.changedTouches.length; n < r; n++) {
			let r = e.changedTouches.item(n);
			if (!this._activeTouches.hasOwnProperty(String(r.identifier))) {
				console.warn("end of an UNKNOWN touch", r);
				continue;
			}
			let i = this._activeTouches[r.identifier], o = this._newGestureEvent(de.CHANGE, i.initialTarget);
			o.translationX = r.pageX - he(i.rollingPageX), o.translationY = r.pageY - he(i.rollingPageY), o.pageX = r.pageX, o.pageY = r.pageY, o.clientX = r.clientX, o.clientY = r.clientY, this._dispatchEvent(o), i.rollingPageX.length > 3 && (i.rollingPageX.shift(), i.rollingPageY.shift(), i.rollingTimestamps.shift()), i.rollingPageX.push(r.pageX), i.rollingPageY.push(r.pageY), i.rollingTimestamps.push(t);
		}
		this._dispatched &&= (e.preventDefault(), e.stopPropagation(), !1);
	}
};
K._scrollFriction = -.005, K._holdDelay = 700, K._clearTapCountTime = 400, y([Qn], K, "isTouchDevice", 1);
var Gi = K, gt = class {
	constructor(e, t, n, r, i, o, s, p, S) {
		this._renderService = e, this._mouseCoordsService = t, this._mouseStateService = n, this._coreService = r, this._bufferService = i, this._optionsService = o, this._selectionService = s, this._logService = p, this._coreBrowserService = S, this._lastEvent = null, this._wheelPartialScroll = 0, this._touchScrollAccumulator = 0;
	}
	bindMouse(e, t, n) {
		let { element: r, document: i } = e, o = {
			mouseup: null,
			wheel: null,
			mousedrag: null,
			mousemove: null
		}, s = new B(), p = new B();
		t(s), t(p);
		let S = {
			target: e,
			focus: n,
			requestedEvents: o,
			mouseupListener: s,
			mousedragListener: p
		}, T = {
			mouseup: (e) => this._handleMouseUp(S, e),
			wheel: (e) => this._handleWheel(S, e),
			mousedrag: (e) => this._handleMouseDrag(S, e),
			mousemove: (e) => this._handleMouseMove(S, e)
		};
		this._altMouseCursor = new os(r, i, () => this._mouseStateService.areMouseEventsActive && !!this._optionsService.rawOptions.mouseEventsRequireAlt), t(this._altMouseCursor), t(this._mouseStateService.onProtocolChange((e) => {
			this._handleProtocolChange(S, T, e);
		})), t(this._optionsService.onSpecificOptionChange("mouseEventsRequireAlt", () => {
			this._syncMouseModeState(r), this._altMouseCursor?.sync();
		})), this._mouseStateService.activeProtocol = this._mouseStateService.activeProtocol, t(I(r, "mousedown", (e) => this._handleMouseDown(S, e))), t(I(r, "wheel", (e) => this._handlePassiveWheel(S, e), { passive: !1 })), t(Gi.addTarget(e.screenElement)), t(I(e.screenElement, de.START, () => this._handleTouchStart())), t(I(e.screenElement, de.CHANGE, (e) => this._handleTouchChange(S, e)));
	}
	_sendEvent(e, t) {
		let n = this._mouseCoordsService.getMouseReportCoords(t, e.target.screenElement);
		if (!n) return !1;
		let r, i;
		switch (t.overrideType || t.type) {
			case "mousemove":
				i = 32, t.buttons === void 0 ? (r = 3, t.button !== void 0 && (r = t.button < 3 ? t.button : 3)) : r = t.buttons & 1 ? 0 : t.buttons & 4 ? 1 : t.buttons & 2 ? 2 : 3;
				break;
			case "mouseup":
				i = 0, r = t.button < 3 ? t.button : 3;
				break;
			case "mousedown":
				i = 1, r = t.button < 3 ? t.button : 3;
				break;
			case "wheel":
				if (!this._mouseStateService.allowCustomWheelEvent(t)) return !1;
				let e = t.deltaY;
				if (e === 0 || this._consumeWheelEvent(t, this._renderService?.dimensions?.device?.cell?.height, this._coreBrowserService?.dpr) === 0) return !1;
				i = e < 0 ? 0 : 1, r = 4;
				break;
			default: return !1;
		}
		if (i === void 0 || r === void 0 || r > 4 || r !== 4 && this._optionsService.rawOptions.mouseEventsRequireAlt && this._mouseStateService.areMouseEventsActive && !t.altKey) return !1;
		let o = r !== 4 && this._optionsService.rawOptions.mouseEventsRequireAlt && this._mouseStateService.areMouseEventsActive;
		return this._triggerMouseEvent({
			col: n.col,
			row: n.row,
			x: n.x,
			y: n.y,
			button: r,
			action: i,
			ctrl: t.ctrlKey,
			alt: o ? !1 : t.altKey,
			shift: t.shiftKey
		});
	}
	_handleMouseUp(e, t) {
		this._sendEvent(e, t), t.buttons || (e.mouseupListener.clear(), e.mousedragListener.clear());
	}
	_handleWheel(e, t) {
		return this._sendEvent(e, t), t.preventDefault(), t.stopPropagation(), !1;
	}
	_handleMouseDrag(e, t) {
		t.buttons && this._sendEvent(e, t);
	}
	_handleMouseMove(e, t) {
		t.buttons || this._sendEvent(e, t);
	}
	_handleMouseDown(e, t) {
		if (t.preventDefault(), e.focus(), !this._mouseStateService.areMouseEventsActive || this._selectionService.shouldForceSelection(t)) return;
		this._sendEvent(e, t);
		let { element: n, document: r } = e.target, i = n.ownerDocument ?? r;
		e.requestedEvents.mouseup && (e.mouseupListener.value = I(i, "mouseup", e.requestedEvents.mouseup)), e.requestedEvents.mousedrag && (e.mousedragListener.value = I(i, "mousemove", e.requestedEvents.mousedrag));
	}
	_handlePassiveWheel(e, t) {
		if (!e.requestedEvents.wheel) {
			if (!this._mouseStateService.allowCustomWheelEvent(t)) return !1;
			if (!this._bufferService.buffer.hasScrollback) {
				if (t.deltaY === 0) return !1;
				if (this._consumeWheelEvent(t, this._renderService?.dimensions?.device?.cell?.height, this._coreBrowserService?.dpr) === 0) return t.preventDefault(), t.stopPropagation(), !1;
				let e = "\x1B" + (this._coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (t.deltaY < 0 ? "A" : "B");
				return this._coreService.triggerDataEvent(e, !0), t.preventDefault(), t.stopPropagation(), !1;
			}
		}
	}
	_handleTouchStart() {
		this._touchScrollAccumulator = 0;
	}
	_handleTouchChange(e, t) {
		if (t.preventDefault(), t.stopPropagation(), e.requestedEvents.wheel) {
			this._handleTouchScrollAsWheel(e, t);
			return;
		}
		if (!this._bufferService.buffer.hasScrollback) {
			this._handleTouchScrollAsKeys(t);
			return;
		}
		e.target.handleTouchScroll?.(t.translationY);
	}
	_handleTouchScrollAsKeys(e) {
		let t = this._renderService?.dimensions.css.cell.height;
		if (!t) return;
		this._touchScrollAccumulator -= e.translationY;
		let n = Math.trunc(this._touchScrollAccumulator / t);
		if (n === 0) return;
		this._touchScrollAccumulator -= n * t;
		let r = "\x1B" + (this._coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (n < 0 ? "A" : "B");
		for (let e = 0; e < Math.abs(n); e++) this._coreService.triggerDataEvent(r, !0);
	}
	_handleTouchScrollAsWheel(e, t) {
		let n = this._renderService?.dimensions.css.cell.height;
		if (!n) return;
		this._touchScrollAccumulator -= t.translationY;
		let r = Math.trunc(this._touchScrollAccumulator / n);
		if (r === 0) return;
		this._touchScrollAccumulator -= r * n;
		let i = this._mouseCoordsService.getMouseReportCoords(t, e.target.screenElement);
		if (i) for (let e = 0; e < Math.abs(r); e++) this._triggerMouseEvent({
			col: i.col,
			row: i.row,
			x: i.x,
			y: i.y,
			button: 4,
			action: r < 0 ? 0 : 1,
			ctrl: !1,
			alt: !1,
			shift: !1
		});
	}
	reset() {
		this._lastEvent = null, this._wheelPartialScroll = 0, this._touchScrollAccumulator = 0;
	}
	_syncMouseModeState(e) {
		this._mouseStateService.areMouseEventsActive ? this._optionsService.rawOptions.mouseEventsRequireAlt ? (this._altMouseCursor?.resetClass(), this._selectionService.enable()) : (e.classList.add("enable-mouse-events"), this._selectionService.disable()) : (e.classList.remove("enable-mouse-events"), this._selectionService.enable());
	}
	_handleProtocolChange(e, t, n) {
		let { element: r } = e.target, { requestedEvents: i } = e;
		n ? this._optionsService.rawOptions.logLevel === "debug" && this._logService.debug("Binding to mouse events:", this._explainEvents(n)) : this._logService.debug("Unbinding from mouse events."), this._syncMouseModeState(r), this._altMouseCursor?.sync(), n & 8 ? i.mousemove ||= (r.addEventListener("mousemove", t.mousemove), t.mousemove) : (i.mousemove && r.removeEventListener("mousemove", i.mousemove), i.mousemove = null), n & 16 ? i.wheel ||= (r.addEventListener("wheel", t.wheel, { passive: !1 }), t.wheel) : (i.wheel && r.removeEventListener("wheel", i.wheel), i.wheel = null), n & 2 ? i.mouseup ??= t.mouseup : (e.mouseupListener.clear(), i.mouseup = null), n & 4 ? i.mousedrag ??= t.mousedrag : (e.mousedragListener.clear(), i.mousedrag = null);
	}
	_applyScrollModifier(e, t) {
		return t.altKey || t.ctrlKey || t.shiftKey ? e * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e * this._optionsService.rawOptions.scrollSensitivity;
	}
	_consumeWheelEvent(e, t, n) {
		if (e.deltaY === 0 || e.shiftKey || t === void 0 || n === void 0) return 0;
		let r = t / n, i = this._applyScrollModifier(e.deltaY, e);
		return e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (i /= r + 0, Math.abs(e.deltaY) < 50 && (i *= .3), this._wheelPartialScroll += i, i = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (i *= this._bufferService.rows), i;
	}
	_triggerMouseEvent(e) {
		if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows || e.button === 4 && e.action === 32 || e.button === 3 && e.action !== 32 || e.button !== 4 && (e.action === 2 || e.action === 3) || (e.col++, e.row++, e.action === 32 && this._lastEvent && this._equalEvents(this._lastEvent, e, this._mouseStateService.isPixelEncoding)) || !this._mouseStateService.restrictMouseEvent(e)) return !1;
		let t = this._mouseStateService.encodeMouseEvent(e);
		return t && (this._mouseStateService.isDefaultEncoding ? this._coreService.triggerBinaryEvent(t) : this._coreService.triggerDataEvent(t, !0)), this._lastEvent = e, !0;
	}
	_explainEvents(e) {
		return {
			down: !!(e & 1),
			up: !!(e & 2),
			drag: !!(e & 4),
			move: !!(e & 8),
			wheel: !!(e & 16)
		};
	}
	_equalEvents(e, t, n) {
		if (n) {
			if (e.x !== t.x || e.y !== t.y) return !1;
		} else if (e.col !== t.col || e.row !== t.row) return !1;
		return !(e.button !== t.button || e.action !== t.action || e.ctrl !== t.ctrl || e.alt !== t.alt || e.shift !== t.shift);
	}
};
gt = y([
	m(0, G),
	m(1, Oe),
	m(2, Me),
	m(3, X),
	m(4, D),
	m(5, R),
	m(6, vi),
	m(7, _e),
	m(8, z)
], gt);
var os = class {
	constructor(e, t, n) {
		this._element = e, this._document = t, this._isActive = n, this._listeners = new B();
	}
	dispose() {
		this._listeners.dispose();
	}
	sync() {
		if (this._listeners.clear(), !this._isActive()) return;
		let e = new pe(), t = (e) => this.syncFromModifier(e);
		e.add(I(this._document, "keydown", t)), e.add(I(this._document, "keyup", t)), e.add(I(this._element, "mousemove", t));
		let n = this._element.ownerDocument?.defaultView;
		n && e.add(I(n, "blur", () => {
			this._isActive() && this.resetClass();
		})), this._listeners.value = e;
	}
	resetClass() {
		this._updateClass(!1);
	}
	syncFromModifier(e) {
		this._isActive() && this._updateClass(e.getModifierState("Alt"));
	}
	_updateClass(e) {
		e ? this._element.classList.add("enable-mouse-events") : this._element.classList.remove("enable-mouse-events");
	}
}, Vi = class {
	constructor(e, t) {
		this._renderCallback = e, this._coreBrowserService = t, this._refreshCallbacks = [];
	}
	dispose() {
		this._animationFrame !== void 0 && (this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
	}
	addRefreshCallback(e) {
		return this._refreshCallbacks.push(e), this._animationFrame ??= this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()), this._animationFrame;
	}
	refresh(e, t, n) {
		this._rowCount = n, e ??= 0, t ??= this._rowCount - 1, this._rowStart = this._rowStart === void 0 ? e : Math.min(this._rowStart, e), this._rowEnd = this._rowEnd === void 0 ? t : Math.max(this._rowEnd, t), this._animationFrame === void 0 && (this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
	}
	_innerRefresh() {
		if (this._animationFrame = void 0, this._rowStart === void 0 || this._rowEnd === void 0 || this._rowCount === void 0) {
			this._runRefreshCallbacks();
			return;
		}
		let e = Math.max(this._rowStart, 0), t = Math.min(this._rowEnd, this._rowCount - 1);
		this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e, t), this._runRefreshCallbacks();
	}
	_runRefreshCallbacks() {
		for (let e of this._refreshCallbacks) e(0);
		this._refreshCallbacks = [];
	}
}, $i = class {
	constructor(e) {
		this._tasks = [], this._i = 0, this._logService = e;
	}
	enqueue(e) {
		this._tasks.push(e), this._start();
	}
	flush() {
		for (; this._i < this._tasks.length;) this._tasks[this._i]() || this._i++;
		this.clear();
	}
	clear() {
		this._idleCallback &&= (this._cancelCallback(this._idleCallback), void 0), this._i = 0, this._tasks.length = 0;
	}
	_start() {
		this._idleCallback ||= this._requestCallback(this._process.bind(this));
	}
	_process(e) {
		this._idleCallback = void 0;
		let t, n = 0, r = e.timeRemaining(), i;
		for (; this._i < this._tasks.length;) {
			if (t = performance.now(), this._tasks[this._i]() || this._i++, t = Math.max(1, performance.now() - t), n = Math.max(t, n), i = e.timeRemaining(), n * 1.5 > i) {
				r - t < -20 && this._logService.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(r - t))}ms`), this._start();
				return;
			}
			r = i;
		}
		this.clear();
	}
}, as = class extends $i {
	_requestCallback(e) {
		return setTimeout(() => e(this._createDeadline(16)));
	}
	_cancelCallback(e) {
		clearTimeout(e);
	}
	_createDeadline(e) {
		let t = performance.now() + e;
		return { timeRemaining: () => Math.max(0, t - performance.now()) };
	}
}, ls = class extends $i {
	_requestCallback(e) {
		return requestIdleCallback(e);
	}
	_cancelCallback(e) {
		cancelIdleCallback(e);
	}
}, Ct = "requestIdleCallback" in globalThis ? ls : as, qi = class {
	constructor(e) {
		this._queue = new Ct(e);
	}
	set(e) {
		this._queue.clear(), this._queue.enqueue(e);
	}
	flush() {
		this._queue.flush();
	}
	dispose() {
		this._queue.clear();
	}
}, It = class extends g {
	constructor(e, t, n, r, i, o, s, p, S, T) {
		super(), this._rowCount = e, this._optionsService = n, this._logService = r, this._charSizeService = i, this._coreService = o, this._coreBrowserService = S, this._renderer = this._register(new B()), this._observerDisposable = this._register(new B()), this._isPaused = !1, this._needsFullRefresh = !1, this._isNextRenderRedrawOnly = !0, this._needsSelectionRefresh = !1, this._canvasWidth = 0, this._canvasHeight = 0, this._selectionState = {
			start: void 0,
			end: void 0,
			columnSelectMode: !1
		}, this._onDimensionsChange = this._register(new b()), this.onDimensionsChange = this._onDimensionsChange.event, this._onRenderedViewportChange = this._register(new b()), this.onRenderedViewportChange = this._onRenderedViewportChange.event, this._onRender = this._register(new b()), this.onRender = this._onRender.event, this._onRefreshRequest = this._register(new b()), this.onRefreshRequest = this._onRefreshRequest.event, this._pausedResizeTask = this._register(new qi(this._logService)), this._renderDebouncer = new Vi((e, t) => this._renderRows(e, t), this._coreBrowserService), this._register(this._renderDebouncer), this._syncOutputHandler = new cs(this._coreBrowserService, this._coreService, () => this._fullRefresh()), this._register(E(() => this._syncOutputHandler.dispose())), this._register(this._coreBrowserService.onDprChange(() => this.handleDevicePixelRatioChange())), this._register(p.onResize(() => this._fullRefresh())), this._register(p.buffers.onBufferActivate(() => this._renderer.value?.clear())), this._register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this._register(this._charSizeService.onCharSizeChange(() => this.handleCharSizeChanged())), this._register(s.onDecorationRegistered(() => this._fullRefresh())), this._register(s.onDecorationRemoved(() => this._fullRefresh())), this._register(this._optionsService.onMultipleOptionChange([
			"drawBoldTextInBrightColors",
			"letterSpacing",
			"lineHeight",
			"fontFamily",
			"fontSize",
			"fontWeight",
			"fontWeightBold",
			"minimumContrastRatio",
			"rescaleOverlappingGlyphs"
		], () => {
			this.clear(), this.handleResize(p.cols, p.rows), this._fullRefresh();
		})), this._register(this._optionsService.onMultipleOptionChange(["cursorBlink", "cursorStyle"], () => this.refreshRows(p.buffer.y, p.buffer.y, void 0, !0))), this._register(T.onChangeColors(() => this._fullRefresh())), this._registerIntersectionObserver(this._coreBrowserService.window, t), this._register(this._coreBrowserService.onWindowChange((e) => this._registerIntersectionObserver(e, t)));
	}
	get dimensions() {
		return this._renderer.value.dimensions;
	}
	_registerIntersectionObserver(e, t) {
		if ("IntersectionObserver" in e) {
			let n = new e.IntersectionObserver((e) => this._handleIntersectionChange(e[e.length - 1]), { threshold: 0 });
			this._observerDisposable.value = E(() => {
				this._intersectionObserver?.disconnect(), this._intersectionObserver = void 0;
			}), this._intersectionObserver = n, n.observe(t);
		}
	}
	_handleIntersectionChange(e) {
		this._isPaused = e.isIntersecting === void 0 ? e.intersectionRatio === 0 : !e.isIntersecting, this._renderer.value?.handleViewportVisibilityChange?.(!this._isPaused), !this._isPaused && !this._charSizeService.hasValidSize && this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this._pausedResizeTask.flush(), this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = !1);
	}
	refreshRows(e, t, n = !1, r = !1) {
		if (this._isPaused) {
			this._needsFullRefresh = !0;
			return;
		}
		if (this._coreService.decPrivateModes.synchronizedOutput) {
			this._syncOutputHandler.bufferRows(e, t);
			return;
		}
		let i = this._syncOutputHandler.flush();
		i && (e = Math.min(e, i.start), t = Math.max(t, i.end)), r || (this._isNextRenderRedrawOnly = !1), n ? this._renderRows(e, t) : this._renderDebouncer.refresh(e, t, this._rowCount);
	}
	_renderRows(e, t) {
		if (this._renderer.value) {
			if (this._coreService.decPrivateModes.synchronizedOutput) {
				this._syncOutputHandler.bufferRows(e, t);
				return;
			}
			e = Math.min(e, this._rowCount - 1), t = Math.min(t, this._rowCount - 1), this._renderer.value.renderRows(e, t), this._needsSelectionRefresh &&= (this._renderer.value.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), !1), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({
				start: e,
				end: t
			}), this._onRender.fire({
				start: e,
				end: t
			}), this._isNextRenderRedrawOnly = !0;
		}
	}
	resize(e, t) {
		this._rowCount = t, this._fireOnCanvasResize();
	}
	_handleOptionsChanged() {
		this._renderer.value && (this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize());
	}
	_fireOnCanvasResize() {
		this._renderer.value && (this._renderer.value.dimensions.css.canvas.width === this._canvasWidth && this._renderer.value.dimensions.css.canvas.height === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.value.dimensions));
	}
	hasRenderer() {
		return !!this._renderer.value;
	}
	setRenderer(e) {
		this._renderer.value = e, this._renderer.value && (this._renderer.value.onRequestRedraw((e) => this.refreshRows(e.start, e.end, e.sync, !0)), this._needsSelectionRefresh = !0, this._fullRefresh());
	}
	addRefreshCallback(e) {
		return this._renderDebouncer.addRefreshCallback(e);
	}
	_fullRefresh() {
		this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount - 1);
	}
	clearTextureAtlas() {
		this._renderer.value && (this._renderer.value.clearTextureAtlas?.(), this._fullRefresh());
	}
	handleDevicePixelRatioChange() {
		this._charSizeService.measure(), this._renderer.value && (this._renderer.value.handleDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1));
	}
	handleResize(e, t) {
		this._renderer.value && (this._isPaused ? this._pausedResizeTask.set(() => this._renderer.value?.handleResize(e, t)) : this._renderer.value.handleResize(e, t), this._fullRefresh());
	}
	handleCharSizeChanged() {
		this._renderer.value?.handleCharSizeChanged();
	}
	handleBlur() {
		this._renderer.value?.handleBlur();
	}
	handleFocus() {
		this._renderer.value?.handleFocus();
	}
	handleSelectionChanged(e, t, n) {
		this._selectionState.start = e, this._selectionState.end = t, this._selectionState.columnSelectMode = n, this._renderer.value?.handleSelectionChanged(e, t, n);
	}
	handleCursorMove() {
		this._renderer.value?.handleCursorMove();
	}
	clear() {
		this._renderer.value?.clear();
	}
};
It = y([
	m(2, R),
	m(3, _e),
	m(4, Be),
	m(5, X),
	m(6, ge),
	m(7, D),
	m(8, z),
	m(9, le)
], It);
var cs = class {
	constructor(e, t, n) {
		this._coreBrowserService = e, this._coreService = t, this._onTimeout = n, this._start = 0, this._end = 0, this._isBuffering = !1;
	}
	bufferRows(e, t) {
		this._isBuffering ? (this._start = Math.min(this._start, e), this._end = Math.max(this._end, t)) : (this._start = e, this._end = t, this._isBuffering = !0), this._timeout ??= this._coreBrowserService.window.setTimeout(() => {
			this._timeout = void 0, this._coreService.decPrivateModes.synchronizedOutput = !1, this._onTimeout();
		}, 1e3);
	}
	flush() {
		if (this._timeout !== void 0 && (this._coreBrowserService.window.clearTimeout(this._timeout), this._timeout = void 0), !this._isBuffering) return;
		let e = {
			start: this._start,
			end: this._end
		};
		return this._isBuffering = !1, e;
	}
	dispose() {
		this._timeout !== void 0 && (this._coreBrowserService.window.clearTimeout(this._timeout), this._timeout = void 0);
	}
};
function en(e, t, n, r) {
	let i = n.buffer.x, o = n.buffer.y;
	if (!n.buffer.hasScrollback) return so(i, o, e, t, n, r) + Xi(o, t, n, r) + no(i, o, e, t, n, r);
	let s;
	if (o === t) return s = i > e ? "D" : "C", Yt(Math.abs(i - e), Xt(s, r));
	s = o > t ? "D" : "C";
	let p = Math.abs(o - t);
	return Yt(ro(o > t ? e : i, n) + (p - 1) * n.cols + 1 + io(o > t ? i : e, n), Xt(s, r));
}
function io(e, t) {
	return e - 1;
}
function ro(e, t) {
	return t.cols - e;
}
function so(e, t, n, r, i, o) {
	return Xi(t, r, i, o).length === 0 ? "" : Yt(rn(e, t, e, t - qe(t, i), !1, i).length, Xt("D", o));
}
function Xi(e, t, n, r) {
	let i = e - qe(e, n), o = t - qe(t, n);
	return Yt(Math.abs(i - o) - oo(e, t, n), Xt(tn(e, t), r));
}
function no(e, t, n, r, i, o) {
	let s;
	s = Xi(t, r, i, o).length > 0 ? r - qe(r, i) : t;
	let p = r, S = ao(e, t, n, r, i, o);
	return Yt(rn(e, s, n, p, S === "C", i).length, Xt(S, o));
}
function oo(e, t, n) {
	let r = 0, i = e - qe(e, n), o = t - qe(t, n);
	for (let s = 0; s < Math.abs(i - o); s++) {
		let o = tn(e, t) === "A" ? -1 : 1;
		n.buffer.lines.get(i + o * s)?.isWrapped && r++;
	}
	return r;
}
function qe(e, t) {
	let n = 0, r = t.buffer.lines.get(e), i = r?.isWrapped;
	for (; i && e >= 0 && e < t.rows;) n++, r = t.buffer.lines.get(--e), i = r?.isWrapped;
	return n;
}
function ao(e, t, n, r, i, o) {
	let s;
	return s = Xi(t, r, i, o).length > 0 ? r - qe(r, i) : t, e < n && s <= r || e >= n && s < r ? "C" : "D";
}
function tn(e, t) {
	return e > t ? "A" : "B";
}
function rn(e, t, n, r, i, o) {
	let s = e, p = t, S = "";
	for (; (s !== n || p !== r) && p >= 0 && p < o.buffer.lines.length;) s += i ? 1 : -1, i && s > o.cols - 1 ? (S += o.buffer.translateBufferLineToString(p, !1, e, s), s = 0, e = 0, p++) : !i && s < 0 && (S += o.buffer.translateBufferLineToString(p, !1, 0, e + 1), s = o.cols - 1, e = s, p--);
	return S + o.buffer.translateBufferLineToString(p, !1, e, s);
}
function Xt(e, t) {
	return "\x1B" + (t ? "O" : "[") + e;
}
function Yt(e, t) {
	e = Math.floor(e);
	let n = "";
	for (let r = 0; r < e; r++) n += t;
	return n;
}
var Yi = class {
	constructor(e) {
		this._bufferService = e, this.isSelectAllActive = !1, this.selectionStartLength = 0;
	}
	clearSelection() {
		this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = !1, this.selectionStartLength = 0;
	}
	get finalSelectionStart() {
		return this.isSelectAllActive ? [0, 0] : !this.selectionEnd || !this.selectionStart ? this.selectionStart : this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
	}
	get finalSelectionEnd() {
		if (this.isSelectAllActive) return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
		if (this.selectionStart) {
			if (!this.selectionEnd || this.areSelectionValuesReversed()) {
				let e = this.selectionStart[0] + this.selectionStartLength;
				return e > this._bufferService.cols ? e % this._bufferService.cols === 0 ? [this._bufferService.cols, this.selectionStart[1] + Math.floor(e / this._bufferService.cols) - 1] : [e % this._bufferService.cols, this.selectionStart[1] + Math.floor(e / this._bufferService.cols)] : [e, this.selectionStart[1]];
			}
			if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
				let e = this.selectionStart[0] + this.selectionStartLength;
				return e > this._bufferService.cols ? [e % this._bufferService.cols, this.selectionStart[1] + Math.floor(e / this._bufferService.cols)] : [Math.max(e, this.selectionEnd[0]), this.selectionEnd[1]];
			}
			return this.selectionEnd;
		}
	}
	areSelectionValuesReversed() {
		let e = this.selectionStart, t = this.selectionEnd;
		return !e || !t ? !1 : e[1] > t[1] || e[1] === t[1] && e[0] > t[0];
	}
	handleTrim(e) {
		return this.selectionStart && (this.selectionStart[1] -= e), this.selectionEnd && (this.selectionEnd[1] -= e), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), !0) : this.selectionStart && this.selectionStart[1] < 0 ? (this.selectionStart = [0, 0], !0) : !1;
	}
};
function hs(e, t) {
	if (e.start.y > e.end.y) throw Error(`Buffer range end (${e.end.x}, ${e.end.y}) cannot be before start (${e.start.x}, ${e.start.y})`);
	return t * (e.end.y - e.start.y) + (e.end.x - e.start.x + 1);
}
var co = RegExp("\xA0", "g"), Et = class extends g {
	constructor(e, t, n, r, i, o, s, p, S, T) {
		super(), this._element = e, this._screenElement = t, this._linkifier = n, this._bufferService = r, this._coreService = i, this._mouseCoordsService = o, this._optionsService = s, this._mouseStateService = p, this._renderService = S, this._coreBrowserService = T, this._dragScrollAmount = 0, this._enabled = !0, this._trimListener = this._register(new B()), this._workCell = new F(), this._mouseDownTimeStamp = 0, this._oldHasSelection = !1, this._oldSelectionStart = void 0, this._oldSelectionEnd = void 0, this._onLinuxMouseSelection = this._register(new b()), this.onLinuxMouseSelection = this._onLinuxMouseSelection.event, this._onRedrawRequest = this._register(new b()), this.onRequestRedraw = this._onRedrawRequest.event, this._onSelectionChange = this._register(new b()), this.onSelectionChange = this._onSelectionChange.event, this._onRequestScrollLines = this._register(new b()), this.onRequestScrollLines = this._onRequestScrollLines.event, this._mouseMoveListener = (e) => this._handleMouseMove(e), this._mouseUpListener = (e) => this._handleMouseUp(e), this._coreService.onUserInput(() => {
			this.hasSelection && this.clearSelection();
		}), this._trimListener.value = this._bufferService.buffer.lines.onTrim((e) => this._handleTrim(e)), this._register(this._bufferService.buffers.onBufferActivate((e) => this._handleBufferActivate(e))), this.enable(), this._model = new Yi(this._bufferService), this._activeSelectionMode = 0, this._register(E(() => {
			this._removeMouseDownListeners();
		})), this._register(this._bufferService.onResize((e) => {
			e.rowsChanged && this.clearSelection();
		}));
	}
	reset() {
		this.clearSelection();
	}
	disable() {
		this.clearSelection(), this._enabled = !1;
	}
	enable() {
		this._enabled = !0;
	}
	get selectionStart() {
		return this._model.finalSelectionStart;
	}
	get selectionEnd() {
		return this._model.finalSelectionEnd;
	}
	get hasSelection() {
		let e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd;
		return !e || !t ? !1 : e[0] !== t[0] || e[1] !== t[1];
	}
	get selectionText() {
		let e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd;
		if (!e || !t) return "";
		let n = this._bufferService.buffer, r = [];
		if (this._activeSelectionMode === 3) {
			if (e[0] === t[0]) return "";
			let i = e[0] < t[0] ? e[0] : t[0], o = e[0] < t[0] ? t[0] : e[0];
			for (let s = e[1]; s <= t[1]; s++) {
				let e = n.translateBufferLineToString(s, !0, i, o);
				r.push(e);
			}
		} else {
			let i = e[1] === t[1] ? t[0] : void 0;
			r.push(n.translateBufferLineToString(e[1], !0, e[0], i));
			for (let i = e[1] + 1; i <= t[1] - 1; i++) {
				let e = n.lines.get(i), t = n.translateBufferLineToString(i, !0);
				e?.isWrapped ? r[r.length - 1] += t : r.push(t);
			}
			if (e[1] !== t[1]) {
				let e = n.lines.get(t[1]), i = n.translateBufferLineToString(t[1], !0, 0, t[0]);
				e && e.isWrapped ? r[r.length - 1] += i : r.push(i);
			}
		}
		return r.map((e) => e.replace(co, " ")).join(Ke ? "\r\n" : "\n");
	}
	clearSelection() {
		this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
	}
	refresh(e) {
		this._refreshAnimationFrame ||= this._coreBrowserService.window.requestAnimationFrame(() => this._refresh()), zt && e && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
	}
	_refresh() {
		this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({
			start: this._model.finalSelectionStart,
			end: this._model.finalSelectionEnd,
			columnSelectMode: this._activeSelectionMode === 3
		});
	}
	_isClickInSelection(e) {
		let t = this._getMouseBufferCoords(e), n = this._model.finalSelectionStart, r = this._model.finalSelectionEnd;
		return !n || !r || !t ? !1 : this._areCoordsInSelection(t, n, r);
	}
	isCellInSelection(e, t) {
		let n = this._model.finalSelectionStart, r = this._model.finalSelectionEnd;
		return !n || !r ? !1 : this._areCoordsInSelection([e, t], n, r);
	}
	_areCoordsInSelection(e, t, n) {
		return e[1] > t[1] && e[1] < n[1] || t[1] === n[1] && e[1] === t[1] && e[0] >= t[0] && e[0] < n[0] || t[1] < n[1] && e[1] === n[1] && e[0] < n[0] || t[1] < n[1] && e[1] === t[1] && e[0] >= t[0];
	}
	_selectWordAtCursor(e, t) {
		let n = this._linkifier.currentLink?.link?.range;
		if (n) return this._model.selectionStart = [n.start.x - 1, n.start.y - 1], this._model.selectionStartLength = hs(n, this._bufferService.cols), this._model.selectionEnd = void 0, !0;
		let r = this._getMouseBufferCoords(e);
		return r ? (this._selectWordAt(r, t), this._model.selectionEnd = void 0, !0) : !1;
	}
	selectAll() {
		this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire();
	}
	selectLines(e, t) {
		this._model.clearSelection(), e = Math.max(e, 0), t = Math.min(t, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e], this._model.selectionEnd = [this._bufferService.cols, t], this.refresh(), this._onSelectionChange.fire();
	}
	_handleTrim(e) {
		this._model.handleTrim(e) && this.refresh();
	}
	_getMouseBufferCoords(e) {
		let t = this._mouseCoordsService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows, !0);
		if (t) return t[0]--, t[1]--, t[1] += this._bufferService.buffer.ydisp, t;
	}
	_getMouseEventScrollAmount(e) {
		let t = qt(this._coreBrowserService.window, e, this._screenElement)[1], n = this._renderService.dimensions.css.canvas.height;
		return t >= 0 && t <= n ? 0 : (t > n && (t -= n), t = Math.min(Math.max(t, -50), 50), t /= 50, t / Math.abs(t) + Math.round(t * 14));
	}
	shouldForceSelection(e) {
		return this._optionsService.rawOptions.mouseEventsRequireAlt && this._mouseStateService.areMouseEventsActive ? !e.altKey : te ? e.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e.shiftKey;
	}
	handleMouseDown(e) {
		if (this._mouseDownTimeStamp = e.timeStamp, !(e.button === 2 && this.hasSelection) && e.button === 0 && !(this._optionsService.rawOptions.mouseEventsRequireAlt && this._mouseStateService.areMouseEventsActive && e.altKey)) {
			if (!this._enabled) {
				if (!this.shouldForceSelection(e)) return;
				e.stopPropagation();
			}
			e.preventDefault(), this._dragScrollAmount = 0, this._enabled && e.shiftKey ? this._handleIncrementalClick(e) : e.detail === 1 ? this._handleSingleClick(e) : e.detail === 2 ? this._handleDoubleClick(e) : e.detail === 3 && this._handleTripleClick(e), this._addMouseDownListeners(), this.refresh(!0);
		}
	}
	_addMouseDownListeners() {
		this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), 50);
	}
	_removeMouseDownListeners() {
		this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
	}
	_handleIncrementalClick(e) {
		this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e));
	}
	_handleSingleClick(e) {
		let t = this.hasSelection;
		if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e), !this._model.selectionStart) return;
		this._model.selectionEnd = void 0, t && this._fireOnSelectionChange(this._model.finalSelectionStart, this._model.finalSelectionEnd, !1);
		let n = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
		n && n.length !== this._model.selectionStart[0] && n.hasWidth(this._model.selectionStart[0]) === 0 && this._model.selectionStart[0]++;
	}
	_handleDoubleClick(e) {
		this._selectWordAtCursor(e, !0) && (this._activeSelectionMode = 1);
	}
	_handleTripleClick(e) {
		let t = this._getMouseBufferCoords(e);
		t && (this._activeSelectionMode = 2, this._selectLineAt(t[1]));
	}
	shouldColumnSelect(e) {
		return this._optionsService.rawOptions.mouseEventsRequireAlt && this._mouseStateService.areMouseEventsActive ? !1 : e.altKey && !(te && this._optionsService.rawOptions.macOptionClickForcesSelection);
	}
	_handleMouseMove(e) {
		if (e.stopImmediatePropagation(), !this._model.selectionStart) return;
		let t = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
		if (this._model.selectionEnd = this._getMouseBufferCoords(e), !this._model.selectionEnd) {
			this.refresh(!0);
			return;
		}
		this._activeSelectionMode === 2 ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : this._activeSelectionMode === 1 && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e), this._activeSelectionMode !== 3 && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
		let n = this._bufferService.buffer;
		if (this._model.selectionEnd[1] < n.lines.length) {
			let e = n.lines.get(this._model.selectionEnd[1]);
			e && e.hasWidth(this._model.selectionEnd[0]) === 0 && this._model.selectionEnd[0] < this._bufferService.cols && this._model.selectionEnd[0]++;
		}
		(!t || t[0] !== this._model.selectionEnd[0] || t[1] !== this._model.selectionEnd[1]) && this.refresh(!0);
	}
	_dragScroll() {
		if (!(!this._model.selectionEnd || !this._model.selectionStart) && this._dragScrollAmount) {
			this._onRequestScrollLines.fire({
				amount: this._dragScrollAmount,
				suppressScrollEvent: !1
			});
			let e = this._bufferService.buffer;
			this._dragScrollAmount > 0 ? (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e.ydisp + this._bufferService.rows - 1, e.lines.length - 1)) : (this._activeSelectionMode !== 3 && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e.ydisp), this.refresh();
		}
	}
	_handleMouseUp(e) {
		let t = e.timeStamp - this._mouseDownTimeStamp;
		if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t < 500 && e.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
			if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
				let t = this._mouseCoordsService.getCoords(e, this._element, this._bufferService.cols, this._bufferService.rows, !1);
				if (t && t[0] !== void 0 && t[1] !== void 0) {
					let e = en(t[0] - 1, t[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
					this._coreService.triggerDataEvent(e, !0);
				}
			}
		} else this._fireEventIfSelectionChanged();
	}
	_fireEventIfSelectionChanged() {
		let e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd, n = !!e && !!t && (e[0] !== t[0] || e[1] !== t[1]);
		if (!n) {
			this._oldHasSelection && this._fireOnSelectionChange(e, t, n);
			return;
		}
		!e || !t || (!this._oldSelectionStart || !this._oldSelectionEnd || e[0] !== this._oldSelectionStart[0] || e[1] !== this._oldSelectionStart[1] || t[0] !== this._oldSelectionEnd[0] || t[1] !== this._oldSelectionEnd[1]) && this._fireOnSelectionChange(e, t, n);
	}
	_fireOnSelectionChange(e, t, n) {
		this._oldSelectionStart = e, this._oldSelectionEnd = t, this._oldHasSelection = n, this._onSelectionChange.fire();
	}
	_handleBufferActivate(e) {
		this.clearSelection(), this._trimListener.value = e.activeBuffer.lines.onTrim((e) => this._handleTrim(e));
	}
	_convertViewportColToCharacterIndex(e, t) {
		let n = t;
		for (let r = 0; t >= r; r++) {
			let i = e.loadCell(r, this._workCell).getChars().length;
			this._workCell.getWidth() === 0 ? n-- : i > 1 && t !== r && (n += i - 1);
		}
		return n;
	}
	setSelection(e, t, n) {
		this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e, t], this._model.selectionStartLength = n, this.refresh(), this._fireEventIfSelectionChanged();
	}
	rightClickSelect(e) {
		this._isClickInSelection(e) || (this._selectWordAtCursor(e, !1) && this.refresh(!0), this._fireEventIfSelectionChanged());
	}
	_getWordAt(e, t, n = !0, r = !0) {
		if (e[0] >= this._bufferService.cols) return;
		let i = this._bufferService.buffer, o = i.lines.get(e[1]);
		if (!o) return;
		let s = i.translateBufferLineToString(e[1], !1), p = this._convertViewportColToCharacterIndex(o, e[0]), S = p, T = e[0] - p, k = 0, A = 0, Sl = 0, Cl = 0;
		if (s.charAt(p) === " ") {
			for (; p > 0 && s.charAt(p - 1) === " ";) p--;
			for (; S < s.length && s.charAt(S + 1) === " ";) S++;
		} else {
			let t = e[0], n = e[0];
			o.getWidth(t) === 0 && (k++, t--), o.getWidth(n) === 2 && (A++, n++);
			let r = o.getString(n).length;
			for (r > 1 && (Cl += r - 1, S += r - 1); t > 0 && p > 0 && !this._isCharWordSeparator(o.loadCell(t - 1, this._workCell));) {
				o.loadCell(t - 1, this._workCell);
				let e = this._workCell.getChars().length;
				this._workCell.getWidth() === 0 ? (k++, t--) : e > 1 && (Sl += e - 1, p -= e - 1), p--, t--;
			}
			for (; n < o.length && S + 1 < s.length && !this._isCharWordSeparator(o.loadCell(n + 1, this._workCell));) {
				o.loadCell(n + 1, this._workCell);
				let e = this._workCell.getChars().length;
				this._workCell.getWidth() === 2 ? (A++, n++) : e > 1 && (Cl += e - 1, S += e - 1), S++, n++;
			}
		}
		S++;
		let wl = p + T - k + Sl, Tl = Math.min(this._bufferService.cols, S - p + k + A - Sl - Cl);
		if (!(!t && s.slice(p, S).trim() === "")) {
			if (n && wl === 0 && o.getCodePoint(0) !== 32) {
				let t = i.lines.get(e[1] - 1);
				if (t && o.isWrapped && t.getCodePoint(this._bufferService.cols - 1) !== 32) {
					let t = this._getWordAt([this._bufferService.cols - 1, e[1] - 1], !1, !0, !1);
					if (t) {
						let e = this._bufferService.cols - t.start;
						wl -= e, Tl += e;
					}
				}
			}
			if (r && wl + Tl === this._bufferService.cols && o.getCodePoint(this._bufferService.cols - 1) !== 32) {
				let t = i.lines.get(e[1] + 1);
				if (t?.isWrapped && t.getCodePoint(0) !== 32) {
					let t = this._getWordAt([0, e[1] + 1], !1, !1, !0);
					t && (Tl += t.length);
				}
			}
			return {
				start: wl,
				length: Tl
			};
		}
	}
	_selectWordAt(e, t) {
		let n = this._getWordAt(e, t);
		if (n) {
			for (; n.start < 0;) n.start += this._bufferService.cols, e[1]--;
			this._model.selectionStart = [n.start, e[1]], this._model.selectionStartLength = n.length;
		}
	}
	_selectToWordAt(e) {
		let t = this._getWordAt(e, !0);
		if (t) {
			let n = e[1];
			for (; t.start < 0;) t.start += this._bufferService.cols, n--;
			if (!this._model.areSelectionValuesReversed()) for (; t.start + t.length > this._bufferService.cols;) t.length -= this._bufferService.cols, n++;
			this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t.start : t.start + t.length, n];
		}
	}
	_isCharWordSeparator(e) {
		return e.getWidth() === 0 ? !1 : this._optionsService.rawOptions.wordSeparator.indexOf(e.getChars()) >= 0;
	}
	_selectLineAt(e) {
		let t = this._bufferService.buffer.getWrappedRangeForLine(e), n = {
			start: {
				x: 0,
				y: t.first
			},
			end: {
				x: this._bufferService.cols - 1,
				y: t.last
			}
		};
		this._model.selectionStart = [0, t.first], this._model.selectionEnd = void 0, this._model.selectionStartLength = hs(n, this._bufferService.cols);
	}
};
Et = y([
	m(3, D),
	m(4, X),
	m(5, Oe),
	m(6, R),
	m(7, Me),
	m(8, G),
	m(9, z)
], Et);
var jt = class {
	constructor() {
		this._data = {};
	}
	set(e, t, n) {
		this._data[e] || (this._data[e] = {}), this._data[e][t] = n;
	}
	get(e, t) {
		return this._data[e] ? this._data[e][t] : void 0;
	}
	clear() {
		this._data = {};
	}
}, Zt = class {
	constructor() {
		this._color = new jt(), this._css = new jt();
	}
	setCss(e, t, n) {
		this._css.set(e, t, n);
	}
	getCss(e, t) {
		return this._css.get(e, t);
	}
	setColor(e, t, n) {
		this._color.set(e, t, n);
	}
	getColor(e, t) {
		return this._color.get(e, t);
	}
	clear() {
		this._color.clear(), this._css.clear();
	}
}, V = Object.freeze((() => {
	let e = [
		M.toColor("#2e3436"),
		M.toColor("#cc0000"),
		M.toColor("#4e9a06"),
		M.toColor("#c4a000"),
		M.toColor("#3465a4"),
		M.toColor("#75507b"),
		M.toColor("#06989a"),
		M.toColor("#d3d7cf"),
		M.toColor("#555753"),
		M.toColor("#ef2929"),
		M.toColor("#8ae234"),
		M.toColor("#fce94f"),
		M.toColor("#729fcf"),
		M.toColor("#ad7fa8"),
		M.toColor("#34e2e2"),
		M.toColor("#eeeeec")
	], t = [
		0,
		95,
		135,
		175,
		215,
		255
	];
	for (let n = 0; n < 216; n++) {
		let r = t[n / 36 % 6 | 0], i = t[n / 6 % 6 | 0], o = t[n % 6];
		e.push({
			css: O.toCss(r, i, o),
			rgba: O.toRgba(r, i, o)
		});
	}
	for (let t = 0; t < 24; t++) {
		let n = 8 + t * 10;
		e.push({
			css: O.toCss(n, n, n),
			rgba: O.toRgba(n, n, n)
		});
	}
	return e;
})()), Xe = M.toColor("#ffffff"), Qt = M.toColor("#000000"), sn = M.toColor("#ffffff"), nn = Qt, Jt = {
	css: "rgba(255, 255, 255, 0.3)",
	rgba: 4294967117
}, ho = Xe, yt = class extends g {
	constructor(e) {
		super(), this._optionsService = e, this._contrastCache = new Zt(), this._halfContrastCache = new Zt(), this._onChangeColors = this._register(new b()), this.onChangeColors = this._onChangeColors.event, this._colors = {
			foreground: Xe,
			background: Qt,
			cursor: sn,
			cursorAccent: nn,
			selectionForeground: void 0,
			selectionBackgroundTransparent: Jt,
			selectionBackgroundOpaque: L.blend(Qt, Jt),
			selectionInactiveBackgroundTransparent: Jt,
			selectionInactiveBackgroundOpaque: L.blend(Qt, Jt),
			scrollbarSliderBackground: L.opacity(Xe, .2),
			scrollbarSliderHoverBackground: L.opacity(Xe, .4),
			scrollbarSliderActiveBackground: L.opacity(Xe, .5),
			overviewRulerBorder: Xe,
			ansi: V.slice(),
			contrastCache: this._contrastCache,
			halfContrastCache: this._halfContrastCache
		}, this._updateRestoreColors(), this._setTheme(this._optionsService.rawOptions.theme), this._register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", () => this._contrastCache.clear())), this._register(this._optionsService.onSpecificOptionChange("theme", () => this._setTheme(this._optionsService.rawOptions.theme)));
	}
	get colors() {
		return this._colors;
	}
	_setTheme(e = {}) {
		let t = this._colors;
		if (t.foreground = P(e.foreground, Xe), t.background = P(e.background, Qt), t.cursor = L.blend(t.background, P(e.cursor, sn)), t.cursorAccent = L.blend(t.background, P(e.cursorAccent, nn)), t.selectionBackgroundTransparent = P(e.selectionBackground, Jt), t.selectionBackgroundOpaque = L.blend(t.background, t.selectionBackgroundTransparent), t.selectionInactiveBackgroundTransparent = P(e.selectionInactiveBackground, t.selectionBackgroundTransparent), t.selectionInactiveBackgroundOpaque = L.blend(t.background, t.selectionInactiveBackgroundTransparent), t.selectionForeground = e.selectionForeground ? P(e.selectionForeground, Jr) : void 0, t.selectionForeground === Jr && (t.selectionForeground = void 0), L.isOpaque(t.selectionBackgroundTransparent) && (t.selectionBackgroundTransparent = L.opacity(t.selectionBackgroundTransparent, .3)), L.isOpaque(t.selectionInactiveBackgroundTransparent) && (t.selectionInactiveBackgroundTransparent = L.opacity(t.selectionInactiveBackgroundTransparent, .3)), t.scrollbarSliderBackground = P(e.scrollbarSliderBackground, L.opacity(t.foreground, .2)), t.scrollbarSliderHoverBackground = P(e.scrollbarSliderHoverBackground, L.opacity(t.foreground, .4)), t.scrollbarSliderActiveBackground = P(e.scrollbarSliderActiveBackground, L.opacity(t.foreground, .5)), t.overviewRulerBorder = P(e.overviewRulerBorder, ho), t.ansi = V.slice(), t.ansi[0] = P(e.black, V[0]), t.ansi[1] = P(e.red, V[1]), t.ansi[2] = P(e.green, V[2]), t.ansi[3] = P(e.yellow, V[3]), t.ansi[4] = P(e.blue, V[4]), t.ansi[5] = P(e.magenta, V[5]), t.ansi[6] = P(e.cyan, V[6]), t.ansi[7] = P(e.white, V[7]), t.ansi[8] = P(e.brightBlack, V[8]), t.ansi[9] = P(e.brightRed, V[9]), t.ansi[10] = P(e.brightGreen, V[10]), t.ansi[11] = P(e.brightYellow, V[11]), t.ansi[12] = P(e.brightBlue, V[12]), t.ansi[13] = P(e.brightMagenta, V[13]), t.ansi[14] = P(e.brightCyan, V[14]), t.ansi[15] = P(e.brightWhite, V[15]), e.extendedAnsi) {
			let n = Math.min(t.ansi.length - 16, e.extendedAnsi.length);
			for (let r = 0; r < n; r++) t.ansi[r + 16] = P(e.extendedAnsi[r], V[r + 16]);
		}
		this._contrastCache.clear(), this._halfContrastCache.clear(), this._updateRestoreColors(), this._onChangeColors.fire(this.colors);
	}
	restoreColor(e) {
		this._restoreColor(e), this._onChangeColors.fire(this.colors);
	}
	_restoreColor(e) {
		if (e === void 0) {
			for (let e = 0; e < this._restoreColors.ansi.length; ++e) this._colors.ansi[e] = this._restoreColors.ansi[e];
			return;
		}
		switch (e) {
			case 256:
				this._colors.foreground = this._restoreColors.foreground;
				break;
			case 257:
				this._colors.background = this._restoreColors.background;
				break;
			case 258:
				this._colors.cursor = this._restoreColors.cursor;
				break;
			default: this._colors.ansi[e] = this._restoreColors.ansi[e];
		}
	}
	modifyColors(e) {
		e(this._colors), this._onChangeColors.fire(this.colors);
	}
	_updateRestoreColors() {
		this._restoreColors = {
			foreground: this._colors.foreground,
			background: this._colors.background,
			cursor: this._colors.cursor,
			ansi: this._colors.ansi.slice()
		};
	}
};
yt = y([m(0, R)], yt);
function P(e, t) {
	if (e !== void 0) try {
		return M.toColor(e);
	} catch {}
	return t;
}
var uo = {
	48: ["0", ")"],
	49: ["1", "!"],
	50: ["2", "@"],
	51: ["3", "#"],
	52: ["4", "$"],
	53: ["5", "%"],
	54: ["6", "^"],
	55: ["7", "&"],
	56: ["8", "*"],
	57: ["9", "("],
	186: [";", ":"],
	187: ["=", "+"],
	188: [",", "<"],
	189: ["-", "_"],
	190: [".", ">"],
	191: ["/", "?"],
	192: ["`", "~"],
	219: ["[", "{"],
	220: ["\\", "|"],
	221: ["]", "}"],
	222: ["'", "\""]
};
function an(e, t, n, r) {
	let i = {
		type: 0,
		cancel: !1,
		key: void 0
	}, o = (e.shiftKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.ctrlKey ? 4 : 0) | (e.metaKey ? 8 : 0);
	switch (e.keyCode) {
		case 0:
			e.key === "UIKeyInputUpArrow" ? t ? i.key = "\x1BOA" : i.key = "\x1B[A" : e.key === "UIKeyInputLeftArrow" ? t ? i.key = "\x1BOD" : i.key = "\x1B[D" : e.key === "UIKeyInputRightArrow" ? t ? i.key = "\x1BOC" : i.key = "\x1B[C" : e.key === "UIKeyInputDownArrow" && (t ? i.key = "\x1BOB" : i.key = "\x1B[B");
			break;
		case 8:
			i.key = e.ctrlKey ? "\b" : "", e.altKey && (i.key = "\x1B" + i.key);
			break;
		case 9:
			if (e.shiftKey) {
				i.key = "\x1B[Z";
				break;
			}
			i.key = "	", i.cancel = !0;
			break;
		case 13:
			e.key === "c" && e.ctrlKey ? i.key = "" : i.key = e.altKey ? "\x1B\r" : "\r", i.cancel = !0;
			break;
		case 27:
			i.key = "\x1B", e.altKey && (i.key = "\x1B\x1B"), i.cancel = !0;
			break;
		case 37:
			if (e.metaKey) break;
			o ? i.key = "\x1B[1;" + (o + 1) + "D" : t ? i.key = "\x1BOD" : i.key = "\x1B[D";
			break;
		case 39:
			if (e.metaKey) break;
			o ? i.key = "\x1B[1;" + (o + 1) + "C" : t ? i.key = "\x1BOC" : i.key = "\x1B[C";
			break;
		case 38:
			if (e.metaKey) break;
			o ? i.key = "\x1B[1;" + (o + 1) + "A" : t ? i.key = "\x1BOA" : i.key = "\x1B[A";
			break;
		case 40:
			if (e.metaKey) break;
			o ? i.key = "\x1B[1;" + (o + 1) + "B" : t ? i.key = "\x1BOB" : i.key = "\x1B[B";
			break;
		case 45:
			!e.shiftKey && !e.ctrlKey && (i.key = "\x1B[2~");
			break;
		case 46:
			o ? i.key = "\x1B[3;" + (o + 1) + "~" : i.key = "\x1B[3~";
			break;
		case 36:
			o ? i.key = "\x1B[1;" + (o + 1) + "H" : t ? i.key = "\x1BOH" : i.key = "\x1B[H";
			break;
		case 35:
			o ? i.key = "\x1B[1;" + (o + 1) + "F" : t ? i.key = "\x1BOF" : i.key = "\x1B[F";
			break;
		case 33:
			e.shiftKey ? i.type = 2 : e.ctrlKey ? i.key = "\x1B[5;" + (o + 1) + "~" : i.key = "\x1B[5~";
			break;
		case 34:
			e.shiftKey ? i.type = 3 : e.ctrlKey ? i.key = "\x1B[6;" + (o + 1) + "~" : i.key = "\x1B[6~";
			break;
		case 112:
			o ? i.key = "\x1B[1;" + (o + 1) + "P" : i.key = "\x1BOP";
			break;
		case 113:
			o ? i.key = "\x1B[1;" + (o + 1) + "Q" : i.key = "\x1BOQ";
			break;
		case 114:
			o ? i.key = "\x1B[1;" + (o + 1) + "R" : i.key = "\x1BOR";
			break;
		case 115:
			o ? i.key = "\x1B[1;" + (o + 1) + "S" : i.key = "\x1BOS";
			break;
		case 116:
			o ? i.key = "\x1B[15;" + (o + 1) + "~" : i.key = "\x1B[15~";
			break;
		case 117:
			o ? i.key = "\x1B[17;" + (o + 1) + "~" : i.key = "\x1B[17~";
			break;
		case 118:
			o ? i.key = "\x1B[18;" + (o + 1) + "~" : i.key = "\x1B[18~";
			break;
		case 119:
			o ? i.key = "\x1B[19;" + (o + 1) + "~" : i.key = "\x1B[19~";
			break;
		case 120:
			o ? i.key = "\x1B[20;" + (o + 1) + "~" : i.key = "\x1B[20~";
			break;
		case 121:
			o ? i.key = "\x1B[21;" + (o + 1) + "~" : i.key = "\x1B[21~";
			break;
		case 122:
			o ? i.key = "\x1B[23;" + (o + 1) + "~" : i.key = "\x1B[23~";
			break;
		case 123:
			o ? i.key = "\x1B[24;" + (o + 1) + "~" : i.key = "\x1B[24~";
			break;
		default:
			if (e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) e.keyCode >= 65 && e.keyCode <= 90 ? i.key = String.fromCharCode(e.keyCode - 64) : e.keyCode === 32 ? i.key = "\0" : e.keyCode >= 51 && e.keyCode <= 55 ? i.key = String.fromCharCode(e.keyCode - 51 + 27) : e.keyCode === 56 ? i.key = "" : e.key === "/" ? i.key = "" : e.keyCode === 219 ? i.key = "\x1B" : e.keyCode === 220 ? i.key = "" : e.keyCode === 221 && (i.key = "");
			else if ((!n || r) && e.altKey && !e.metaKey) {
				let t = uo[e.keyCode]?.[e.shiftKey ? 1 : 0];
				if (t) i.key = "\x1B" + t;
				else if (e.keyCode >= 65 && e.keyCode <= 90) {
					let t = e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32, n = String.fromCharCode(t);
					e.shiftKey && (n = n.toUpperCase()), i.key = "\x1B" + n;
				} else if (e.keyCode === 32) i.key = "\x1B" + (e.ctrlKey ? "\0" : " ");
				else if (e.key === "Dead" && e.code.startsWith("Key")) {
					let t = e.code.slice(3, 4);
					e.shiftKey || (t = t.toLowerCase()), i.key = "\x1B" + t, i.cancel = !0;
				}
			} else if (n && !e.altKey && !e.ctrlKey && !e.shiftKey && e.metaKey) e.keyCode === 65 && (i.type = 1);
			else if (e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.keyCode >= 48 && e.key.length === 1) i.key = e.key;
			else if (e.key && e.ctrlKey && e.shiftKey) switch (e.code) {
				case "Minus":
					i.key = "";
					break;
				case "Digit2":
					i.key = "\0";
					break;
				case "Digit6":
					i.key = "";
					break;
			}
			break;
	}
	return i;
}
var ei = class {
	constructor() {
		this._functionalKeyCodes = {
			Escape: 27,
			Enter: 13,
			Tab: 9,
			Backspace: 127,
			CapsLock: 57358,
			ScrollLock: 57359,
			NumLock: 57360,
			PrintScreen: 57361,
			Pause: 57362,
			ContextMenu: 57363,
			F13: 57376,
			F14: 57377,
			F15: 57378,
			F16: 57379,
			F17: 57380,
			F18: 57381,
			F19: 57382,
			F20: 57383,
			F21: 57384,
			F22: 57385,
			F23: 57386,
			F24: 57387,
			F25: 57388,
			KP_0: 57399,
			KP_1: 57400,
			KP_2: 57401,
			KP_3: 57402,
			KP_4: 57403,
			KP_5: 57404,
			KP_6: 57405,
			KP_7: 57406,
			KP_8: 57407,
			KP_9: 57408,
			KP_Decimal: 57409,
			KP_Divide: 57410,
			KP_Multiply: 57411,
			KP_Subtract: 57412,
			KP_Add: 57413,
			KP_Enter: 57414,
			KP_Equal: 57415,
			ShiftLeft: 57441,
			ShiftRight: 57447,
			ControlLeft: 57442,
			ControlRight: 57448,
			AltLeft: 57443,
			AltRight: 57449,
			MetaLeft: 57444,
			MetaRight: 57450,
			MediaPlayPause: 57430,
			MediaStop: 57432,
			MediaTrackNext: 57435,
			MediaTrackPrevious: 57436,
			AudioVolumeDown: 57438,
			AudioVolumeUp: 57439,
			AudioVolumeMute: 57440
		}, this._csiTildeKeys = {
			Insert: 2,
			Delete: 3,
			PageUp: 5,
			PageDown: 6,
			F5: 15,
			F6: 17,
			F7: 18,
			F8: 19,
			F9: 20,
			F10: 21,
			F11: 23,
			F12: 24
		}, this._csiLetterKeys = {
			ArrowUp: "A",
			ArrowDown: "B",
			ArrowRight: "C",
			ArrowLeft: "D",
			Home: "H",
			End: "F"
		}, this._ss3FunctionKeys = {
			F1: "P",
			F2: "Q",
			F3: "R",
			F4: "S"
		};
	}
	_getNumpadKeyCode(e) {
		if (e.code.startsWith("Numpad")) {
			let t = e.code.slice(6);
			if (t >= "0" && t <= "9") return 57399 + parseInt(t, 10);
			switch (t) {
				case "Decimal": return 57409;
				case "Divide": return 57410;
				case "Multiply": return 57411;
				case "Subtract": return 57412;
				case "Add": return 57413;
				case "Enter": return 57414;
				case "Equal": return 57415;
			}
		}
	}
	_getModifierKeyCode(e) {
		switch (e.code) {
			case "ShiftLeft": return 57441;
			case "ShiftRight": return 57447;
			case "ControlLeft": return 57442;
			case "ControlRight": return 57448;
			case "AltLeft": return 57443;
			case "AltRight": return 57449;
			case "MetaLeft": return 57444;
			case "MetaRight": return 57450;
		}
	}
	_encodeModifiers(e) {
		let t = 0;
		return e.shiftKey && (t |= 1), e.altKey && (t |= 2), e.ctrlKey && (t |= 4), e.metaKey && (t |= 8), t > 0 ? t + 1 : 0;
	}
	_getKeyCode(e, t) {
		let n = this._getNumpadKeyCode(e);
		if (n !== void 0) return n;
		let r = this._getModifierKeyCode(e);
		if (r !== void 0) return r;
		let i = this._functionalKeyCodes[e.key];
		if (i !== void 0) return i;
		if ((e.shiftKey || t && e.altKey) && e.code) {
			if (e.code.startsWith("Digit") && e.code.length === 6) {
				let t = e.code.charAt(5);
				if (t >= "0" && t <= "9") return t.charCodeAt(0);
			}
			if (e.code.startsWith("Key") && e.code.length === 4) return e.code.charAt(3).toLowerCase().charCodeAt(0);
		}
		if (e.key.length === 1) {
			let t = e.key.codePointAt(0);
			return t >= 65 && t <= 90 ? t + 32 : t;
		}
	}
	_isModifierKey(e) {
		return e.key === "Shift" || e.key === "Control" || e.key === "Alt" || e.key === "Meta";
	}
	_isLockKey(e) {
		return e.key === "CapsLock" || e.key === "NumLock" || e.key === "ScrollLock";
	}
	_buildCsiLetterSequence(e, t, n, r) {
		let i = r && n !== 1;
		if (t > 0 || i) {
			let r = "\x1B[1;" + (t > 0 ? t : "1");
			return i && (r += ":" + n), r += e, r;
		}
		return "\x1B[" + e;
	}
	_buildSs3Sequence(e, t, n, r) {
		let i = r && n !== 1;
		if (t > 0 || i) {
			let r = "\x1B[1;" + (t > 0 ? t : "1");
			return i && (r += ":" + n), r += e, r;
		}
		return "\x1BO" + e;
	}
	_buildCsiTildeSequence(e, t, n, r) {
		let i = r && n !== 1, o = "\x1B[" + e;
		return (t > 0 || i) && (o += ";" + (t > 0 ? t : "1"), i && (o += ":" + n)), o += "~", o;
	}
	_buildCsiUSequence(e, t, n, r, i, o, s) {
		let p = !!(i & 2), S = !!(i & 4), T = "\x1B[" + t, k;
		S && e.shiftKey && e.key.length === 1 && !o && !s && (k = e.key.codePointAt(0), T += ":" + k);
		let A = i & 16 && r !== 3 && e.key.length === 1 && !o && !s && !e.ctrlKey ? e.key.codePointAt(0) : void 0, Sl = p && r !== 1 && (r === 3 || A === void 0);
		return (n > 0 || Sl || A !== void 0) && (T += ";", n > 0 ? T += n : Sl && (T += "1"), Sl && (T += ":" + r)), A !== void 0 && (T += ";" + A), T += "u", T;
	}
	evaluate(e, t, n = 1, r = !1) {
		let i = {
			type: 0,
			cancel: !1,
			key: void 0
		}, o = this._encodeModifiers(e), s = this._isModifierKey(e), p = !!(t & 2);
		if (!p && n === 3 || s && !(t & 8) || this._isLockKey(e) && !(t & 8)) return i;
		let S = this._csiLetterKeys[e.key];
		if (S) return i.key = this._buildCsiLetterSequence(S, o, n, p), i.cancel = !0, i;
		let T = this._ss3FunctionKeys[e.key];
		if (T) return i.key = this._buildSs3Sequence(T, o, n, p), i.cancel = !0, i;
		let k = this._csiTildeKeys[e.key];
		if (k !== void 0) return i.key = this._buildCsiTildeSequence(k, o, n, p), i.cancel = !0, i;
		let A = this._getKeyCode(e, r);
		if (A === void 0) return i;
		let Sl = A === 13 || A === 9 || A === 127;
		if (Sl && n === 3 && !(t & 8)) return i;
		let Cl = this._functionalKeyCodes[e.key] !== void 0 || this._getNumpadKeyCode(e) !== void 0;
		if (t & 8 || p && n === 3 || (t & 1 || p) && (Cl && !Sl || o > 0 && e.key.length !== 1 || o - 1 > 1)) i.key = this._buildCsiUSequence(e, A, o, n, t, Cl, s), i.cancel = !0;
		else {
			let t = A === 13 ? "\r" : A === 9 ? "	" : A === 127 ? "" : void 0;
			t ? i.key = t : e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey && (i.key = e.key);
		}
		return i;
	}
	static shouldUseProtocol(e) {
		return e > 0;
	}
}, ji = class {
	constructor() {
		this._codeToVk = {
			KeyA: 65,
			KeyB: 66,
			KeyC: 67,
			KeyD: 68,
			KeyE: 69,
			KeyF: 70,
			KeyG: 71,
			KeyH: 72,
			KeyI: 73,
			KeyJ: 74,
			KeyK: 75,
			KeyL: 76,
			KeyM: 77,
			KeyN: 78,
			KeyO: 79,
			KeyP: 80,
			KeyQ: 81,
			KeyR: 82,
			KeyS: 83,
			KeyT: 84,
			KeyU: 85,
			KeyV: 86,
			KeyW: 87,
			KeyX: 88,
			KeyY: 89,
			KeyZ: 90,
			Digit0: 48,
			Digit1: 49,
			Digit2: 50,
			Digit3: 51,
			Digit4: 52,
			Digit5: 53,
			Digit6: 54,
			Digit7: 55,
			Digit8: 56,
			Digit9: 57,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			F13: 124,
			F14: 125,
			F15: 126,
			F16: 127,
			F17: 128,
			F18: 129,
			F19: 130,
			F20: 131,
			F21: 132,
			F22: 133,
			F23: 134,
			F24: 135,
			Numpad0: 96,
			Numpad1: 97,
			Numpad2: 98,
			Numpad3: 99,
			Numpad4: 100,
			Numpad5: 101,
			Numpad6: 102,
			Numpad7: 103,
			Numpad8: 104,
			Numpad9: 105,
			NumpadMultiply: 106,
			NumpadAdd: 107,
			NumpadSeparator: 108,
			NumpadSubtract: 109,
			NumpadDecimal: 110,
			NumpadDivide: 111,
			NumpadEnter: 13,
			NumLock: 144,
			ArrowUp: 38,
			ArrowDown: 40,
			ArrowLeft: 37,
			ArrowRight: 39,
			Home: 36,
			End: 35,
			PageUp: 33,
			PageDown: 34,
			Insert: 45,
			Delete: 46,
			ShiftLeft: 16,
			ShiftRight: 16,
			ControlLeft: 17,
			ControlRight: 17,
			AltLeft: 18,
			AltRight: 18,
			MetaLeft: 91,
			MetaRight: 92,
			CapsLock: 20,
			ScrollLock: 145,
			Escape: 27,
			Enter: 13,
			Tab: 9,
			Space: 32,
			Backspace: 8,
			Pause: 19,
			ContextMenu: 93,
			PrintScreen: 44,
			Semicolon: 186,
			Equal: 187,
			Comma: 188,
			Minus: 189,
			Period: 190,
			Slash: 191,
			Backquote: 192,
			BracketLeft: 219,
			Backslash: 220,
			BracketRight: 221,
			Quote: 222,
			IntlBackslash: 226
		}, this._codeToScancode = {
			KeyQ: 16,
			KeyW: 17,
			KeyE: 18,
			KeyR: 19,
			KeyT: 20,
			KeyY: 21,
			KeyU: 22,
			KeyI: 23,
			KeyO: 24,
			KeyP: 25,
			KeyA: 30,
			KeyS: 31,
			KeyD: 32,
			KeyF: 33,
			KeyG: 34,
			KeyH: 35,
			KeyJ: 36,
			KeyK: 37,
			KeyL: 38,
			KeyZ: 44,
			KeyX: 45,
			KeyC: 46,
			KeyV: 47,
			KeyB: 48,
			KeyN: 49,
			KeyM: 50,
			Digit1: 2,
			Digit2: 3,
			Digit3: 4,
			Digit4: 5,
			Digit5: 6,
			Digit6: 7,
			Digit7: 8,
			Digit8: 9,
			Digit9: 10,
			Digit0: 11,
			F1: 59,
			F2: 60,
			F3: 61,
			F4: 62,
			F5: 63,
			F6: 64,
			F7: 65,
			F8: 66,
			F9: 67,
			F10: 68,
			F11: 87,
			F12: 88,
			Numpad0: 82,
			Numpad1: 79,
			Numpad2: 80,
			Numpad3: 81,
			Numpad4: 75,
			Numpad5: 76,
			Numpad6: 77,
			Numpad7: 71,
			Numpad8: 72,
			Numpad9: 73,
			NumpadMultiply: 55,
			NumpadAdd: 78,
			NumpadSubtract: 74,
			NumpadDecimal: 83,
			NumpadDivide: 53,
			NumpadEnter: 28,
			NumLock: 69,
			ArrowUp: 72,
			ArrowDown: 80,
			ArrowLeft: 75,
			ArrowRight: 77,
			Home: 71,
			End: 79,
			PageUp: 73,
			PageDown: 81,
			Insert: 82,
			Delete: 83,
			ShiftLeft: 42,
			ShiftRight: 54,
			ControlLeft: 29,
			ControlRight: 29,
			AltLeft: 56,
			AltRight: 56,
			CapsLock: 58,
			ScrollLock: 70,
			Escape: 1,
			Enter: 28,
			Tab: 15,
			Space: 57,
			Backspace: 14,
			Pause: 69,
			Semicolon: 39,
			Equal: 13,
			Comma: 51,
			Minus: 12,
			Period: 52,
			Slash: 53,
			Backquote: 41,
			BracketLeft: 26,
			Backslash: 43,
			BracketRight: 27,
			Quote: 40
		}, this._enhancedKeyCodes = new Set([
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight",
			"Home",
			"End",
			"PageUp",
			"PageDown",
			"Insert",
			"Delete",
			"NumpadEnter",
			"NumpadDivide",
			"ControlRight",
			"AltRight",
			"PrintScreen",
			"Pause",
			"ContextMenu",
			"MetaLeft",
			"MetaRight"
		]), this._keyToControlChar = {
			Enter: 13,
			Backspace: 8,
			Tab: 9,
			Escape: 27
		};
	}
	_getVirtualKeyCode(e) {
		let t = this._codeToVk[e.code];
		return t === void 0 ? e.keyCode || 0 : t;
	}
	_getScanCode(e) {
		return this._codeToScancode[e.code] || 0;
	}
	_getUnicodeChar(e) {
		if (e.ctrlKey && !e.altKey && !e.metaKey) {
			if (e.key === "Enter") return 10;
			if (e.key === "Backspace") return 127;
		}
		let t = this._keyToControlChar[e.key];
		if (t !== void 0) return t;
		if (e.key.length === 1) {
			let t = e.key.codePointAt(0) || 0;
			if (e.ctrlKey && !e.altKey && !e.metaKey) {
				if (t >= 65 && t <= 90) return t - 64;
				if (t >= 97 && t <= 122) return t - 96;
			}
			return t;
		}
		return 0;
	}
	_getControlKeyState(e) {
		let t = 0;
		return e.shiftKey && (t |= 16), e.ctrlKey && (e.code === "ControlRight" ? t |= 4 : t |= 8), e.altKey && (e.code === "AltRight" ? t |= 1 : t |= 2), this._enhancedKeyCodes.has(e.code) && (t |= 256), t;
	}
	evaluateKeyboardEvent(e, t) {
		return {
			type: 0,
			cancel: !0,
			key: `\x1B[${this._getVirtualKeyCode(e)};${this._getScanCode(e)};${this._getUnicodeChar(e)};${t ? 1 : 0};${this._getControlKeyState(e)};1_`
		};
	}
}, xt = class {
	constructor(e, t) {
		this._coreService = e, this._optionsService = t;
	}
	_getWin32InputMode() {
		return this._win32InputMode ??= new ji(), this._win32InputMode;
	}
	_getKittyKeyboard() {
		return this._kittyKeyboard ??= new ei(), this._kittyKeyboard;
	}
	evaluateKeyDown(e) {
		if (this.useWin32InputMode) return this._getWin32InputMode().evaluateKeyboardEvent(e, !0);
		let t = this._coreService.kittyKeyboard.flags;
		return this.useKitty ? this._getKittyKeyboard().evaluate(e, t, e.repeat ? 2 : 1, te && this._optionsService.rawOptions.macOptionIsMeta) : an(e, this._coreService.decPrivateModes.applicationCursorKeys, te, this._optionsService.rawOptions.macOptionIsMeta);
	}
	evaluateKeyUp(e) {
		if (this.useWin32InputMode) return this._getWin32InputMode().evaluateKeyboardEvent(e, !1);
		let t = this._coreService.kittyKeyboard.flags;
		if (this.useKitty && t & 2) return this._getKittyKeyboard().evaluate(e, t, 3, te && this._optionsService.rawOptions.macOptionIsMeta);
	}
	get useKitty() {
		let e = this._coreService.kittyKeyboard.flags;
		return !!(this._optionsService.rawOptions.vtExtensions?.kittyKeyboard && ei.shouldUseProtocol(e));
	}
	get useWin32InputMode() {
		return !!(this._optionsService.rawOptions.vtExtensions?.win32InputMode && this._coreService.decPrivateModes.win32InputMode);
	}
};
xt = y([m(0, X), m(1, R)], xt);
var us = class {
	constructor(...e) {
		this._entries = /* @__PURE__ */ new Map();
		for (let [t, n] of e) this.set(t, n);
	}
	set(e, t) {
		let n = this._entries.get(e);
		return this._entries.set(e, t), n;
	}
	forEach(e) {
		for (let [t, n] of this._entries.entries()) e(t, n);
	}
	has(e) {
		return this._entries.has(e);
	}
	get(e) {
		return this._entries.get(e);
	}
}, Zi = class {
	constructor() {
		this._services = new us(), this._services.set(et, this);
	}
	setService(e, t) {
		this._services.set(e, t);
	}
	getService(e) {
		return this._services.get(e);
	}
	createInstance(e, ...t) {
		let n = Fs(e).sort((e, t) => e.index - t.index), r = [];
		for (let t of n) {
			let n = this._services.get(t.id);
			if (!n) throw Error(`[createInstance] ${e.name} depends on UNKNOWN service ${t.id._id}.`);
			r.push(n);
		}
		let i = n.length > 0 ? n[0].index : t.length;
		if (t.length !== i) throw Error(`[createInstance] First service dependency of ${e.name} at position ${i + 1} conflicts with ${t.length} static arguments`);
		return new e(...t, ...r);
	}
}, fo = {
	trace: 0,
	debug: 1,
	info: 2,
	warn: 3,
	error: 4,
	off: 5
}, _o = "xterm.js: ", wt = class extends g {
	constructor(e) {
		super(), this._optionsService = e, this._logLevel = 5, this._updateLogLevel(), this._register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel()));
	}
	get logLevel() {
		return this._logLevel;
	}
	_updateLogLevel() {
		this._logLevel = fo[this._optionsService.rawOptions.logLevel];
	}
	_evalLazyOptionalParams(e) {
		for (let t = 0; t < e.length; t++) typeof e[t] == "function" && (e[t] = e[t]());
	}
	_log(e, t, n) {
		this._evalLazyOptionalParams(n), e.call(console, (this._optionsService.options.logger ? "" : _o) + t, ...n);
	}
	trace(e, ...t) {
		this._logLevel <= 0 && this._log(this._optionsService.options.logger?.trace.bind(this._optionsService.options.logger) ?? console.log, e, t);
	}
	debug(e, ...t) {
		this._logLevel <= 1 && this._log(this._optionsService.options.logger?.debug.bind(this._optionsService.options.logger) ?? console.log, e, t);
	}
	info(e, ...t) {
		this._logLevel <= 2 && this._log(this._optionsService.options.logger?.info.bind(this._optionsService.options.logger) ?? console.info, e, t);
	}
	warn(e, ...t) {
		this._logLevel <= 3 && this._log(this._optionsService.options.logger?.warn.bind(this._optionsService.options.logger) ?? console.warn, e, t);
	}
	error(e, ...t) {
		this._logLevel <= 4 && this._log(this._optionsService.options.logger?.error.bind(this._optionsService.options.logger) ?? console.error, e, t);
	}
};
wt = y([m(0, R)], wt);
var ti = class extends g {
	constructor(e) {
		super(), this._maxLength = e, this.onDeleteEmitter = this._register(new b()), this.onDelete = this.onDeleteEmitter.event, this.onInsertEmitter = this._register(new b()), this.onInsert = this.onInsertEmitter.event, this.onTrimEmitter = this._register(new b()), this.onTrim = this.onTrimEmitter.event, this._array = Array(this._maxLength), this._startIndex = 0, this._length = 0;
	}
	get maxLength() {
		return this._maxLength;
	}
	set maxLength(e) {
		if (this._maxLength === e) return;
		let t = Array(e);
		for (let n = 0; n < Math.min(e, this.length); n++) t[n] = this._array[this._getCyclicIndex(n)];
		this._array = t, this._maxLength = e, this._startIndex = 0;
	}
	get length() {
		return this._length;
	}
	set length(e) {
		if (e > this._length) for (let t = this._length; t < e; t++) this._array[t] = void 0;
		this._length = e;
	}
	get(e) {
		return this._array[this._getCyclicIndex(e)];
	}
	set(e, t) {
		this._array[this._getCyclicIndex(e)] = t;
	}
	push(e) {
		this._array[this._getCyclicIndex(this._length)] = e, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
	}
	recycle() {
		if (this._length !== this._maxLength) throw Error("Can only recycle when the buffer is full");
		return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
	}
	get isFull() {
		return this._length === this._maxLength;
	}
	pop() {
		return this._array[this._getCyclicIndex(this._length-- - 1)];
	}
	splice(e, t, ...n) {
		if (t) {
			for (let n = e; n < this._length - t; n++) this._array[this._getCyclicIndex(n)] = this._array[this._getCyclicIndex(n + t)];
			this._length -= t, this.onDeleteEmitter.fire({
				index: e,
				amount: t
			});
		}
		for (let t = this._length - 1; t >= e; t--) this._array[this._getCyclicIndex(t + n.length)] = this._array[this._getCyclicIndex(t)];
		for (let t = 0; t < n.length; t++) this._array[this._getCyclicIndex(e + t)] = n[t];
		if (n.length && this.onInsertEmitter.fire({
			index: e,
			amount: n.length
		}), this._length + n.length > this._maxLength) {
			let e = this._length + n.length - this._maxLength;
			this._startIndex += e, this._length = this._maxLength, this.onTrimEmitter.fire(e);
		} else this._length += n.length;
	}
	trimStart(e) {
		e > this._length && (e = this._length), this._startIndex += e, this._length -= e, this.onTrimEmitter.fire(e);
	}
	shiftElements(e, t, n) {
		if (!(t <= 0)) {
			if (e < 0 || e >= this._length) throw Error("start argument out of range");
			if (e + n < 0) throw Error("Cannot shift elements in list beyond index 0");
			if (n > 0) {
				for (let r = t - 1; r >= 0; r--) this.set(e + r + n, this.get(e + r));
				let r = e + t + n - this._length;
				if (r > 0) for (this._length += r; this._length > this._maxLength;) this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
			} else for (let r = 0; r < t; r++) this.set(e + r + n, this.get(e + r));
		}
	}
	_getCyclicIndex(e) {
		return (this._startIndex + e) % this._maxLength;
	}
}, U = Object.freeze(new fe()), Ji = 0, cn = new F(), fs = U.extended.clone(), Re = class e {
	constructor(e, t, n = !1) {
		this.isWrapped = n, this._combined = {}, this._extendedAttrs = {}, this._cacheValid = !1, this._cache = "", this._cacheTrimmed = !1, this._data = new Uint32Array(e * 3);
		let r = t ?? F.fromCharData([
			0,
			"",
			1,
			0
		]);
		for (let t = 0; t < e; ++t) this.setCell(t, r);
		this.length = e;
	}
	get(e) {
		let t = this._data[e * 3 + 0], n = t & 2097151;
		return [
			this._data[e * 3 + 1],
			t & 2097152 ? this._combined[e] : n ? be(n) : "",
			t >> 22,
			t & 2097152 ? this._combined[e].charCodeAt(this._combined[e].length - 1) : n
		];
	}
	set(e, t) {
		this._cacheValid = !1, this._data[e * 3 + 1] = t[0], t[1].length > 1 ? (this._combined[e] = t[1], this._data[e * 3 + 0] = e | 2097152 | t[2] << 22) : this._data[e * 3 + 0] = t[1].charCodeAt(0) | t[2] << 22;
	}
	getWidth(e) {
		return this._data[e * 3 + 0] >> 22;
	}
	hasWidth(e) {
		return this._data[e * 3 + 0] & 12582912;
	}
	getFg(e) {
		return this._data[e * 3 + 1];
	}
	getBg(e) {
		return this._data[e * 3 + 2];
	}
	hasContent(e) {
		return this._data[e * 3 + 0] & 4194303;
	}
	getCodePoint(e) {
		let t = this._data[e * 3 + 0];
		return t & 2097152 ? this._combined[e].charCodeAt(this._combined[e].length - 1) : t & 2097151;
	}
	isCombined(e) {
		return this._data[e * 3 + 0] & 2097152;
	}
	getString(e) {
		let t = this._data[e * 3 + 0];
		return t & 2097152 ? this._combined[e] : t & 2097151 ? be(t & 2097151) : "";
	}
	isProtected(e) {
		return this._data[e * 3 + 2] & 536870912;
	}
	loadCell(e, t) {
		return Ji = e * 3, t.content = this._data[Ji + 0], t.fg = this._data[Ji + 1], t.bg = this._data[Ji + 2], t.content & 2097152 ? t.combinedData = this._combined[e] : t.combinedData = "", t.bg & 268435456 ? t.extended = this._extendedAttrs[e] : (fs._ext = 0, fs._urlId = 0, t.extended = fs), t;
	}
	setCell(e, t) {
		this._cacheValid = !1, t.content & 2097152 && (this._combined[e] = t.combinedData), t.bg & 268435456 && (this._extendedAttrs[e] = t.extended), this._data[e * 3 + 0] = t.content, this._data[e * 3 + 1] = t.fg, this._data[e * 3 + 2] = t.bg;
	}
	setCellFromCodepoint(e, t, n, r) {
		this._cacheValid = !1, r.bg & 268435456 && (this._extendedAttrs[e] = r.extended);
		let i = e * 3;
		this._data[i + 0] = t | n << 22, this._data[i + 1] = r.fg, this._data[i + 2] = r.bg;
	}
	addCodepointToCell(e, t, n) {
		this._cacheValid = !1;
		let r = this._data[e * 3 + 0];
		r & 2097152 ? this._combined[e] += be(t) : r & 2097151 ? (this._combined[e] = be(r & 2097151) + be(t), r &= -2097152, r |= 2097152) : r = t | 1 << 22, n && (r &= -12582913, r |= n << 22), this._data[e * 3 + 0] = r;
	}
	insertCells(e, t, n) {
		if (this._cacheValid = !1, e %= this.length, e && this.getWidth(e - 1) === 2 && this.setCellFromCodepoint(e - 1, 0, 1, n), t < this.length - e) {
			for (let n = this.length - e - t - 1; n >= 0; --n) this.setCell(e + t + n, this.loadCell(e + n, cn));
			for (let r = 0; r < t; ++r) this.setCell(e + r, n);
		} else for (let t = e; t < this.length; ++t) this.setCell(t, n);
		this.getWidth(this.length - 1) === 2 && this.setCellFromCodepoint(this.length - 1, 0, 1, n);
	}
	deleteCells(e, t, n) {
		if (this._cacheValid = !1, e %= this.length, t < this.length - e) {
			for (let n = 0; n < this.length - e - t; ++n) this.setCell(e + n, this.loadCell(e + t + n, cn));
			for (let e = this.length - t; e < this.length; ++e) this.setCell(e, n);
		} else for (let t = e; t < this.length; ++t) this.setCell(t, n);
		e && this.getWidth(e - 1) === 2 && this.setCellFromCodepoint(e - 1, 0, 1, n), this.getWidth(e) === 0 && !this.hasContent(e) && this.setCellFromCodepoint(e, 0, 1, n);
	}
	replaceCells(e, t, n, r = !1) {
		if (this._cacheValid = !1, r) {
			for (e && this.getWidth(e - 1) === 2 && !this.isProtected(e - 1) && this.setCellFromCodepoint(e - 1, 0, 1, n), t < this.length && this.getWidth(t - 1) === 2 && !this.isProtected(t) && this.setCellFromCodepoint(t, 0, 1, n); e < t && e < this.length;) this.isProtected(e) || this.setCell(e, n), e++;
			return;
		}
		for (e && this.getWidth(e - 1) === 2 && this.setCellFromCodepoint(e - 1, 0, 1, n), t < this.length && this.getWidth(t - 1) === 2 && this.setCellFromCodepoint(t, 0, 1, n); e < t && e < this.length;) this.setCell(e++, n);
	}
	resize(e, t) {
		if (this._cacheValid = !1, e === this.length) return this._data.length * 4 * 2 < this._data.buffer.byteLength;
		let n = e * 3;
		if (e > this.length) {
			if (this._data.buffer.byteLength >= n * 4) this._data = new Uint32Array(this._data.buffer, 0, n);
			else {
				let e = new Uint32Array(n);
				e.set(this._data), this._data = e;
			}
			for (let n = this.length; n < e; ++n) this.setCell(n, t);
		} else {
			this._data = this._data.subarray(0, n);
			let t = Object.keys(this._combined);
			for (let n = 0; n < t.length; n++) {
				let r = parseInt(t[n], 10);
				r >= e && delete this._combined[r];
			}
			let r = Object.keys(this._extendedAttrs);
			for (let t = 0; t < r.length; t++) {
				let n = parseInt(r[t], 10);
				n >= e && delete this._extendedAttrs[n];
			}
		}
		return this.length = e, n * 4 * 2 < this._data.buffer.byteLength;
	}
	cleanupMemory() {
		if (this._data.length * 4 * 2 < this._data.buffer.byteLength) {
			let e = new Uint32Array(this._data.length);
			return e.set(this._data), this._data = e, 1;
		}
		return 0;
	}
	fill(e, t = !1) {
		if (this._cacheValid = !1, t) {
			for (let t = 0; t < this.length; ++t) this.isProtected(t) || this.setCell(t, e);
			return;
		}
		this._combined = {}, this._extendedAttrs = {};
		for (let t = 0; t < this.length; ++t) this.setCell(t, e);
	}
	copyFrom(e, t) {
		this.length === e.length ? this._data.set(e._data) : this._data = new Uint32Array(e._data), this.length = e.length, t ? (this._combined = {}, this._extendedAttrs = {}) : this._copySparseMapsFrom(e), this._cache = "", this._cacheValid = !1, this.isWrapped = e.isWrapped;
	}
	clone(t) {
		let n = new e(0, void 0, !1);
		return n._data = new Uint32Array(this._data), n.length = this.length, t || n._copySparseMapsFrom(this), n.isWrapped = this.isWrapped, n;
	}
	getTrimmedLength() {
		for (let e = this.length - 1; e >= 0; --e) if (this._data[e * 3 + 0] & 4194303) return e + (this._data[e * 3 + 0] >> 22);
		return 0;
	}
	getNoBgTrimmedLength() {
		for (let e = this.length - 1; e >= 0; --e) if (this._data[e * 3 + 0] & 4194303 || this._data[e * 3 + 2] & 50331648) return e + (this._data[e * 3 + 0] >> 22);
		return 0;
	}
	copyCellsFrom(e, t, n, r, i) {
		this._cacheValid = !1;
		let o = e._data;
		if (i) for (let i = r - 1; i >= 0; i--) {
			for (let e = 0; e < 3; e++) this._data[(n + i) * 3 + e] = o[(t + i) * 3 + e];
			this._copyCellMapsFrom(e, t + i, n + i);
		}
		else for (let i = 0; i < r; i++) {
			for (let e = 0; e < 3; e++) this._data[(n + i) * 3 + e] = o[(t + i) * 3 + e];
			this._copyCellMapsFrom(e, t + i, n + i);
		}
	}
	translateToString(e, t, n, r) {
		let i = (t === void 0 || t === 0) && n === void 0 && r === void 0;
		if (i && this._cacheValid) {
			if (e) return this._cacheTrimmed ? this._cache : this._cache.trimEnd();
			if (!this._cacheTrimmed) return this._cache;
		}
		t ??= 0, n ??= this.length, e && (n = Math.min(n, this.getTrimmedLength())), r && (r.length = 0);
		let o = [];
		for (; t < n;) {
			let e = this._data[t * 3 + 0], n = e & 2097151, i = e & 2097152 ? this._combined[t] : n ? be(n) : " ";
			if (o.push(i), r) for (let e = 0; e < i.length; ++e) r.push(t);
			t += e >> 22 || 1;
		}
		r && r.push(t);
		let s = o.join("");
		return i && (this._cache = s, this._cacheValid = !0, this._cacheTrimmed = !!e), s;
	}
	_copyCellMapsFrom(e, t, n) {
		let r = t * 3;
		e._data[r + 0] & 2097152 && (this._combined[n] = e._combined[t]), e._data[r + 2] & 268435456 && (this._extendedAttrs[n] = e._extendedAttrs[t]);
	}
	_copySparseMapsFrom(e) {
		this._combined = {}, this._extendedAttrs = {};
		for (let t = 0; t < e.length; t++) this._copyCellMapsFrom(e, t, t);
	}
};
function hn(e, t, n, r, i, o) {
	let s = [];
	for (let p = 0; p < e.length - 1; p++) {
		let S = p, T = e.get(++S);
		if (!T.isWrapped) continue;
		let k = [e.get(p)];
		for (; S < e.length && T.isWrapped;) k.push(T), T = e.get(++S);
		if (!o && r >= p && r < S) {
			p += k.length - 1;
			continue;
		}
		let A = 0, Sl = Tt(k, A, t), Cl = 1, wl = 0;
		for (; Cl < k.length;) {
			let e = Tt(k, Cl, t), r = e - wl, o = n - Sl, s = Math.min(r, o);
			k[A].copyCellsFrom(k[Cl], wl, Sl, s, !1), Sl += s, Sl === n && (A++, Sl = 0), wl += s, wl === e && (Cl++, wl = 0), Sl === 0 && A !== 0 && k[A - 1].getWidth(n - 1) === 2 && (k[A].copyCellsFrom(k[A - 1], n - 1, Sl++, 1, !1), k[A - 1].setCell(n - 1, i));
		}
		k[A].replaceCells(Sl, n, i);
		let Tl = 0;
		for (let e = k.length - 1; e > 0 && (e > A || k[e].getTrimmedLength() === 0); e--) Tl++;
		Tl > 0 && (s.push(p + k.length - Tl), s.push(Tl)), p += k.length - 1;
	}
	return s;
}
function dn(e, t) {
	let n = [], r = 0, i = t[r], o = 0;
	for (let s = 0; s < e.length; s++) if (i === s) {
		let n = t[++r];
		e.onDeleteEmitter.fire({
			index: s - o,
			amount: n
		}), s += n - 1, o += n, i = t[++r];
	} else n.push(s);
	return {
		layout: n,
		countRemoved: o
	};
}
function un(e, t) {
	let n = [];
	for (let r = 0; r < t.length; r++) n.push(e.get(t[r]));
	for (let t = 0; t < n.length; t++) e.set(t, n[t]);
	e.length = t.length;
}
function fn(e, t, n) {
	let r = [], i = 0;
	for (let n = 0; n < e.length; n++) i += Tt(e, n, t);
	let o = 0, s = 0, p = 0;
	for (; p < i;) {
		if (i - p < n) {
			r.push(i - p);
			break;
		}
		o += n;
		let S = Tt(e, s, t);
		o > S && (o -= S, s++);
		let T = e[s].getWidth(o - 1) === 2;
		T && o--;
		let k = T ? n - 1 : n;
		r.push(k), p += k;
	}
	return r;
}
function Tt(e, t, n) {
	if (t === e.length - 1) return e[t].getTrimmedLength();
	let r = !e[t].hasContent(n - 1) && e[t].getWidth(n - 1) === 1, i = e[t + 1].getWidth(0) === 2;
	return r && i ? n - 1 : n;
}
var er = class e {
	constructor(t) {
		this.line = t, this.isDisposed = !1, this._disposables = [], this._id = e._nextId++, this._onDispose = this.register(new b()), this.onDispose = this._onDispose.event;
	}
	get id() {
		return this._id;
	}
	dispose() {
		this.isDisposed || (this.isDisposed = !0, this.line = -1, this._onDispose.fire(), Ne(this._disposables), this._disposables.length = 0);
	}
	register(e) {
		return this._disposables.push(e), e;
	}
};
er._nextId = 1;
var Qi = er, $ = {}, Le = $.B;
$[0] = {
	"`": "◆",
	a: "▒",
	b: "␉",
	c: "␌",
	d: "␍",
	e: "␊",
	f: "°",
	g: "±",
	h: "␤",
	i: "␋",
	j: "┘",
	k: "┐",
	l: "┌",
	m: "└",
	n: "┼",
	o: "⎺",
	p: "⎻",
	q: "─",
	r: "⎼",
	s: "⎽",
	t: "├",
	u: "┤",
	v: "┴",
	w: "┬",
	x: "│",
	y: "≤",
	z: "≥",
	"{": "π",
	"|": "≠",
	"}": "£",
	"~": "·"
}, $.A = { "#": "£" }, $.B = void 0, $[4] = {
	"#": "£",
	"@": "¾",
	"[": "ij",
	"\\": "½",
	"]": "|",
	"{": "¨",
	"|": "f",
	"}": "¼",
	"~": "´"
}, $.C = $[5] = {
	"[": "Ä",
	"\\": "Ö",
	"]": "Å",
	"^": "Ü",
	"`": "é",
	"{": "ä",
	"|": "ö",
	"}": "å",
	"~": "ü"
}, $.R = {
	"#": "£",
	"@": "à",
	"[": "°",
	"\\": "ç",
	"]": "§",
	"{": "é",
	"|": "ù",
	"}": "è",
	"~": "¨"
}, $.Q = {
	"@": "à",
	"[": "â",
	"\\": "ç",
	"]": "ê",
	"^": "î",
	"`": "ô",
	"{": "é",
	"|": "ù",
	"}": "è",
	"~": "û"
}, $.K = {
	"@": "§",
	"[": "Ä",
	"\\": "Ö",
	"]": "Ü",
	"{": "ä",
	"|": "ö",
	"}": "ü",
	"~": "ß"
}, $.Y = {
	"#": "£",
	"@": "§",
	"[": "°",
	"\\": "ç",
	"]": "é",
	"`": "ù",
	"{": "à",
	"|": "ò",
	"}": "è",
	"~": "ì"
}, $.E = $[6] = {
	"@": "Ä",
	"[": "Æ",
	"\\": "Ø",
	"]": "Å",
	"^": "Ü",
	"`": "ä",
	"{": "æ",
	"|": "ø",
	"}": "å",
	"~": "ü"
}, $.Z = {
	"#": "£",
	"@": "§",
	"[": "¡",
	"\\": "Ñ",
	"]": "¿",
	"{": "°",
	"|": "ñ",
	"}": "ç"
}, $.H = $[7] = {
	"@": "É",
	"[": "Ä",
	"\\": "Ö",
	"]": "Å",
	"^": "Ü",
	"`": "é",
	"{": "ä",
	"|": "ö",
	"}": "å",
	"~": "ü"
}, $["="] = {
	"#": "ù",
	"@": "à",
	"[": "é",
	"\\": "ç",
	"]": "ê",
	"^": "î",
	_: "è",
	"`": "ô",
	"{": "ä",
	"|": "ö",
	"}": "ü",
	"~": "û"
};
var _n = 4294967295, ri = class extends g {
	constructor(e, t, n, r) {
		super(), this._hasScrollback = e, this._optionsService = t, this._bufferService = n, this._logService = r, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.tabs = {}, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = U.clone(), this.savedCharset = Le, this.savedCharsets = [], this.savedGlevel = 0, this.savedOriginMode = !1, this.savedWraparoundMode = !0, this.markers = [], this._nullCell = F.fromCharData([
			0,
			"",
			1,
			0
		]), this._whitespaceCell = F.fromCharData([
			0,
			" ",
			1,
			32
		]), this._isClearing = !1, this._memoryCleanupPosition = 0, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new ti(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops(), this._memoryCleanupQueue = new Ct(this._logService), this._register(E(() => this._memoryCleanupQueue.clear())), this._register(E(() => this.clearAllMarkers()));
	}
	getNullCell(e) {
		return e ? (this._nullCell.fg = e.fg, this._nullCell.bg = e.bg, this._nullCell.extended = e.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new Pe()), this._nullCell;
	}
	getWhitespaceCell(e) {
		return e ? (this._whitespaceCell.fg = e.fg, this._whitespaceCell.bg = e.bg, this._whitespaceCell.extended = e.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new Pe()), this._whitespaceCell;
	}
	getBlankLine(e, t) {
		return new Re(this._bufferService.cols, this.getNullCell(e), t);
	}
	get hasScrollback() {
		return this._hasScrollback && this.lines.maxLength > this._rows;
	}
	get isCursorInViewport() {
		let e = this.ybase + this.y - this.ydisp;
		return e >= 0 && e < this._rows;
	}
	_getCorrectBufferLength(e) {
		if (!this._hasScrollback) return e;
		let t = e + this._optionsService.rawOptions.scrollback;
		return t > _n ? _n : t;
	}
	fillViewportRows(e) {
		if (this.lines.length === 0) {
			e ??= U;
			let t = this._rows;
			for (; t--;) this.lines.push(this.getBlankLine(e));
		}
	}
	clear() {
		this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new ti(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
	}
	resize(e, t) {
		let n = this.getNullCell(U), r = 0, i = this._getCorrectBufferLength(t);
		if (i > this.lines.maxLength && (this.lines.maxLength = i), this.lines.length > 0) {
			if (this._cols < e) for (let t = 0; t < this.lines.length; t++) r += +this.lines.get(t).resize(e, n);
			let o = 0;
			if (this._rows < t) for (let r = this._rows; r < t; r++) this.lines.length < t + this.ybase && (this._optionsService.rawOptions.windowsPty.backend !== void 0 || this._optionsService.rawOptions.windowsPty.buildNumber !== void 0 ? this.lines.push(new Re(e, n, !1)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + o + 1 ? (this.ybase--, o++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new Re(e, n, !1)));
			else for (let e = this._rows; e > t; e--) this.lines.length > t + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
			if (i < this.lines.maxLength) {
				let e = this.lines.length - i;
				e > 0 && (this.lines.trimStart(e), this.ybase = Math.max(this.ybase - e, 0), this.ydisp = Math.max(this.ydisp - e, 0), this.savedY = Math.max(this.savedY - e, 0)), this.lines.maxLength = i;
			}
			this.x = Math.min(this.x, e - 1), this.y = Math.min(this.y, t - 1), o && (this.y += o), this.savedX = Math.min(this.savedX, e - 1), this.scrollTop = 0;
		}
		if (this.scrollBottom = t - 1, this._isReflowEnabled && (this._reflow(e, t), this._cols > e)) for (let t = 0; t < this.lines.length; t++) r += +this.lines.get(t).resize(e, n);
		if (this._cols = e, this._rows = t, this.lines.length > 0) {
			let e = Math.max(0, this.lines.length - this.ybase - 1);
			this.y = Math.min(this.y, e);
		}
		this._memoryCleanupQueue.clear(), r > .1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup()));
	}
	_batchedMemoryCleanup() {
		let e = !0;
		this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, e = !1);
		let t = 0;
		for (; this._memoryCleanupPosition < this.lines.length;) if (t += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), t > 100) return !0;
		return e;
	}
	get _isReflowEnabled() {
		let e = this._optionsService.rawOptions.windowsPty;
		return e && e.buildNumber ? this._hasScrollback && e.backend === "conpty" && e.buildNumber >= 21376 : this._hasScrollback;
	}
	_reflow(e, t) {
		this._cols !== e && (e > this._cols ? this._reflowLarger(e, t) : this._reflowSmaller(e, t));
	}
	_reflowLarger(e, t) {
		let n = this._optionsService.rawOptions.reflowCursorLine, r = hn(this.lines, this._cols, e, this.ybase + this.y, this.getNullCell(U), n);
		if (r.length > 0) {
			let n = dn(this.lines, r);
			un(this.lines, n.layout), this._reflowLargerAdjustViewport(e, t, n.countRemoved);
		}
	}
	_reflowLargerAdjustViewport(e, t, n) {
		let r = this.getNullCell(U), i = n;
		for (; i-- > 0;) this.ybase === 0 ? (this.y > 0 && this.y--, this.lines.length < t && this.lines.push(new Re(e, r, !1))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
		this.savedY = Math.max(this.savedY - n, 0);
	}
	_reflowSmaller(e, t) {
		let n = this._optionsService.rawOptions.reflowCursorLine, r = this.getNullCell(U), i = [], o = 0;
		for (let s = this.lines.length - 1; s >= 0; s--) {
			let p = this.lines.get(s);
			if (!p || !p.isWrapped && p.getTrimmedLength() <= e) continue;
			let S = [p];
			for (; p.isWrapped && s > 0;) p = this.lines.get(--s), S.unshift(p);
			if (!n) {
				let e = this.ybase + this.y;
				if (e >= s && e < s + S.length) continue;
			}
			let T = S[S.length - 1].getTrimmedLength(), k = fn(S, this._cols, e), A = k.length - S.length, Sl;
			Sl = this.ybase === 0 && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + A) : Math.max(0, this.lines.length - this.lines.maxLength + A);
			let Cl = [];
			for (let e = 0; e < A; e++) {
				let e = this.getBlankLine(U, !0);
				Cl.push(e);
			}
			Cl.length > 0 && (i.push({
				start: s + S.length + o,
				newLines: Cl
			}), o += Cl.length), S.push(...Cl);
			let wl = k.length - 1, Tl = k[wl];
			Tl === 0 && (wl--, Tl = k[wl]);
			let El = S.length - A - 1, Dl = T;
			for (; El >= 0;) {
				let e = Math.min(Dl, Tl);
				if (S[wl] === void 0) break;
				S[wl].copyCellsFrom(S[El], Dl - e, Tl - e, e, !0), Tl -= e, Tl === 0 && (wl--, Tl = k[wl]), Dl -= e, Dl === 0 && (El--, Dl = Tt(S, Math.max(El, 0), this._cols));
			}
			for (let t = 0; t < S.length; t++) k[t] < e && S[t].setCell(k[t], r);
			let Ol = A - Sl;
			for (; Ol-- > 0;) this.ybase === 0 ? this.y < t - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + o) - t && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
			this.savedY = Math.min(this.savedY + A, this.ybase + t - 1);
		}
		if (i.length > 0) {
			let e = [], t = [];
			for (let e = 0; e < this.lines.length; e++) t.push(this.lines.get(e));
			let n = this.lines.length, r = n - 1, s = 0, p = i[s];
			this.lines.length = Math.min(this.lines.maxLength, this.lines.length + o);
			let S = 0;
			for (let T = Math.min(this.lines.maxLength - 1, n + o - 1); T >= 0; T--) if (p && p.start > r + S) {
				for (let e = p.newLines.length - 1; e >= 0; e--) this.lines.set(T--, p.newLines[e]);
				T++, e.push({
					index: r + 1,
					amount: p.newLines.length
				}), S += p.newLines.length, p = i[++s];
			} else this.lines.set(T, t[r--]);
			let T = 0;
			for (let t = e.length - 1; t >= 0; t--) e[t].index += T, this.lines.onInsertEmitter.fire(e[t]), T += e[t].amount;
			let k = Math.max(0, n + o - this.lines.maxLength);
			k > 0 && this.lines.onTrimEmitter.fire(k);
		}
	}
	translateBufferLineToString(e, t, n = 0, r) {
		let i = this.lines.get(e);
		return i ? i.translateToString(t, n, r) : "";
	}
	getWrappedRangeForLine(e) {
		let t = e, n = e;
		for (; t > 0 && this.lines.get(t).isWrapped;) t--;
		for (; n + 1 < this.lines.length && this.lines.get(n + 1).isWrapped;) n++;
		return {
			first: t,
			last: n
		};
	}
	setupTabStops(e) {
		for (e == null ? (this.tabs = {}, e = 0) : this.tabs[e] || (e = this.prevStop(e)); e < this._cols; e += this._optionsService.rawOptions.tabStopWidth) this.tabs[e] = !0;
	}
	prevStop(e) {
		for (e ??= this.x; !this.tabs[--e] && e > 0;);
		return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e;
	}
	nextStop(e) {
		for (e ??= this.x; !this.tabs[++e] && e < this._cols;);
		return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e;
	}
	clearMarkers(e) {
		this._isClearing = !0;
		for (let t = 0; t < this.markers.length; t++) this.markers[t].line === e && (this.markers[t].dispose(), this.markers.splice(t--, 1));
		this._isClearing = !1;
	}
	clearAllMarkers() {
		this._isClearing = !0;
		for (let e = 0; e < this.markers.length; e++) this.markers[e].dispose();
		this.markers.length = 0, this._isClearing = !1;
	}
	addMarker(e) {
		let t = new Qi(e);
		return this.markers.push(t), t.register(this.lines.onTrim((e) => {
			t.line -= e, t.line < 0 && t.dispose();
		})), t.register(this.lines.onInsert((e) => {
			t.line >= e.index && (t.line += e.amount);
		})), t.register(this.lines.onDelete((e) => {
			t.line >= e.index && t.line < e.index + e.amount && t.dispose(), t.line > e.index && (t.line -= e.amount);
		})), t.register(t.onDispose(() => this._removeMarker(t))), t;
	}
	_removeMarker(e) {
		this._isClearing || this.markers.splice(this.markers.indexOf(e), 1);
	}
}, tr = class extends g {
	constructor(e, t, n) {
		super(), this._optionsService = e, this._bufferService = t, this._logService = n, this._normalBuffer = this._register(new B()), this._altBuffer = this._register(new B()), this._onBufferActivate = this._register(new b()), this.onBufferActivate = this._onBufferActivate.event, this.reset(), this._register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows))), this._register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
	}
	reset() {
		this._normal = new ri(!0, this._optionsService, this._bufferService, this._logService), this._normalBuffer.value = this._normal, this._normal.fillViewportRows(), this._alt = new ri(!1, this._optionsService, this._bufferService, this._logService), this._altBuffer.value = this._alt, this._activeBuffer = this._normal, this._onBufferActivate.fire({
			activeBuffer: this._normal,
			inactiveBuffer: this._alt
		}), this.setupTabStops();
	}
	get alt() {
		return this._alt;
	}
	get active() {
		return this._activeBuffer;
	}
	get normal() {
		return this._normal;
	}
	activateNormalBuffer() {
		this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({
			activeBuffer: this._normal,
			inactiveBuffer: this._alt
		}));
	}
	activateAltBuffer(e) {
		this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({
			activeBuffer: this._alt,
			inactiveBuffer: this._normal
		}));
	}
	resize(e, t) {
		this._normal.resize(e, t), this._alt.resize(e, t), this.setupTabStops(e);
	}
	setupTabStops(e) {
		this._normal.setupTabStops(e), this._alt.setupTabStops(e);
	}
}, Dt = class extends g {
	constructor(e, t) {
		super(), this.isUserScrolling = !1, this._onResize = this._register(new b()), this.onResize = this._onResize.event, this._onScroll = this._register(new b()), this.onScroll = this._onScroll.event, this.cols = Math.max(e.rawOptions.cols || 0, 2), this.rows = Math.max(e.rawOptions.rows || 0, 1), this.buffers = this._register(new tr(e, this, t)), this._register(this.buffers.onBufferActivate((e) => {
			this._onScroll.fire(e.activeBuffer.ydisp);
		}));
	}
	get buffer() {
		return this.buffers.active;
	}
	resize(e, t) {
		let n = this.cols !== e, r = this.rows !== t;
		this.cols = e, this.rows = t, this.buffers.resize(e, t), this._onResize.fire({
			cols: e,
			rows: t,
			colsChanged: n,
			rowsChanged: r
		});
	}
	reset() {
		this.buffers.reset(), this.isUserScrolling = !1;
	}
	scroll(e, t = !1) {
		let n = this.buffer, r;
		r = this._cachedBlankLine, (!r || r.length !== this.cols || r.getFg(0) !== e.fg || r.getBg(0) !== e.bg) && (r = n.getBlankLine(e, t), this._cachedBlankLine = r), r.isWrapped = t;
		let i = n.ybase + n.scrollTop, o = n.ybase + n.scrollBottom;
		if (n.scrollTop === 0) {
			let e = n.lines.isFull;
			o === n.lines.length - 1 ? e ? n.lines.recycle().copyFrom(r, !0) : n.lines.push(r.clone(!0)) : n.lines.splice(o + 1, 0, r.clone(!0)), e ? this.isUserScrolling && (n.ydisp = Math.max(n.ydisp - 1, 0)) : (n.ybase++, this.isUserScrolling || n.ydisp++);
		} else {
			let e = o - i + 1;
			n.lines.shiftElements(i + 1, e - 1, -1), n.lines.set(o, r.clone(!0));
		}
		this.isUserScrolling || (n.ydisp = n.ybase), this._onScroll.fire(n.ydisp);
	}
	scrollLines(e, t) {
		let n = this.buffer;
		if (e < 0) {
			if (n.ydisp === 0) return;
			this.isUserScrolling = !0;
		} else e + n.ydisp >= n.ybase && (this.isUserScrolling = !1);
		let r = n.ydisp;
		n.ydisp = Math.max(Math.min(n.ydisp + e, n.ybase), 0), r !== n.ydisp && (t || this._onScroll.fire(n.ydisp));
	}
};
Dt = y([m(0, R), m(1, _e)], Dt);
var Rt = {
	cols: 80,
	rows: 24,
	showCursorImmediately: !1,
	cursorBlink: !1,
	blinkIntervalDuration: 0,
	cursorStyle: "block",
	cursorWidth: 1,
	cursorInactiveStyle: "outline",
	drawBoldTextInBrightColors: !0,
	documentOverride: null,
	fastScrollSensitivity: 5,
	fontFamily: "monospace",
	fontSize: 15,
	fontWeight: "normal",
	fontWeightBold: "bold",
	ignoreBracketedPasteMode: !1,
	lineHeight: 1,
	letterSpacing: 0,
	linkHandler: null,
	logLevel: "info",
	logger: null,
	scrollback: 1e3,
	scrollbar: { showScrollbar: !0 },
	scrollOnEraseInDisplay: !1,
	scrollOnUserInput: !0,
	scrollSensitivity: 1,
	screenReaderMode: !1,
	smoothScrollDuration: 0,
	macOptionIsMeta: !1,
	macOptionClickForcesSelection: !1,
	minimumContrastRatio: 1,
	mouseEventsRequireAlt: !1,
	disableStdin: !1,
	allowProposedApi: !1,
	allowTransparency: !1,
	tabStopWidth: 8,
	theme: {},
	reflowCursorLine: !1,
	rescaleOverlappingGlyphs: !1,
	rightClickSelectsWord: te,
	windowOptions: {},
	windowsPty: {},
	wordSeparator: " ()[]{}',\"`",
	altClickMovesCursor: !0,
	convertEol: !1,
	termName: "xterm",
	quirks: {},
	vtExtensions: {}
}, mo = [
	"normal",
	"bold",
	"100",
	"200",
	"300",
	"400",
	"500",
	"600",
	"700",
	"800",
	"900"
], ir = class extends g {
	constructor(e) {
		super(), this._onOptionChange = this._register(new b()), this.onOptionChange = this._onOptionChange.event;
		let t = { ...Rt };
		for (let n in e) if (n in t) try {
			let r = e[n];
			t[n] = this._sanitizeAndValidateOption(n, r);
		} catch (e) {
			console.error(e);
		}
		this.rawOptions = t, this.options = { ...t }, this._setupOptions(), this._register(E(() => {
			this.rawOptions.linkHandler = null, this.rawOptions.documentOverride = null;
		}));
	}
	onSpecificOptionChange(e, t) {
		return this.onOptionChange((n) => {
			n === e && t(this.rawOptions[e]);
		});
	}
	onMultipleOptionChange(e, t) {
		return this.onOptionChange((n) => {
			e.indexOf(n) !== -1 && t();
		});
	}
	_setupOptions() {
		let e = (e) => {
			if (!(e in Rt)) throw Error(`No option with key "${e}"`);
			return this.rawOptions[e];
		}, t = (e, t) => {
			if (!(e in Rt)) throw Error(`No option with key "${e}"`);
			t = this._sanitizeAndValidateOption(e, t), this.rawOptions[e] !== t && (this.rawOptions[e] = t, this._onOptionChange.fire(e));
		};
		for (let n in this.rawOptions) {
			let r = {
				get: e.bind(this, n),
				set: t.bind(this, n)
			};
			Object.defineProperty(this.options, n, r);
		}
	}
	_sanitizeAndValidateOption(e, t) {
		switch (e) {
			case "cursorStyle":
				if (t ||= Rt[e], !bo(t)) throw Error(`"${t}" is not a valid value for ${e}`);
				break;
			case "wordSeparator":
				t ||= Rt[e];
				break;
			case "fontWeight":
			case "fontWeightBold":
				if (typeof t == "number" && 1 <= t && t <= 1e3) break;
				t = mo.includes(t) ? t : Rt[e];
				break;
			case "blinkIntervalDuration":
				if (t = Math.floor(t), t < 0) throw Error(`${e} cannot be less than 0, value: ${t}`);
				break;
			case "cursorWidth": t = Math.floor(t);
			case "lineHeight":
			case "tabStopWidth":
				if (t < 1) throw Error(`${e} cannot be less than 1, value: ${t}`);
				break;
			case "minimumContrastRatio":
				t = Math.max(1, Math.min(21, Math.round(t * 10) / 10));
				break;
			case "scrollback":
				if (t = Math.min(t, 4294967295), t < 0) throw Error(`${e} cannot be less than 0, value: ${t}`);
				break;
			case "fastScrollSensitivity":
			case "scrollSensitivity":
				if (t <= 0) throw Error(`${e} cannot be less than or equal to 0, value: ${t}`);
				break;
			case "rows":
			case "cols":
				if (!t && t !== 0) throw Error(`${e} must be numeric, value: ${t}`);
				break;
			case "windowsPty":
				t ??= {};
				break;
		}
		return t;
	}
};
function bo(e) {
	return e === "block" || e === "underline" || e === "bar";
}
var pn = Object.freeze({ insertMode: !1 }), mn = Object.freeze({
	applicationCursorKeys: !1,
	applicationKeypad: !1,
	bracketedPasteMode: !1,
	colorSchemeUpdates: !1,
	cursorBlink: void 0,
	cursorStyle: void 0,
	origin: !1,
	reverseWraparound: !1,
	sendFocus: !1,
	synchronizedOutput: !1,
	win32InputMode: !1,
	wraparound: !0
}), bn = () => ({
	flags: 0,
	mainFlags: 0,
	altFlags: 0,
	mainStack: [],
	altStack: []
}), Lt = class extends g {
	constructor(e, t, n) {
		super(), this._bufferService = e, this._logService = t, this._optionsService = n, this.isCursorHidden = !1, this._onData = this._register(new b()), this.onData = this._onData.event, this._onUserInput = this._register(new b()), this.onUserInput = this._onUserInput.event, this._onBinary = this._register(new b()), this.onBinary = this._onBinary.event, this._onRequestScrollToBottom = this._register(new b()), this.onRequestScrollToBottom = this._onRequestScrollToBottom.event, this.isCursorInitialized = n.rawOptions.showCursorImmediately ?? !1, this.modes = structuredClone(pn), this.decPrivateModes = structuredClone(mn), this.kittyKeyboard = bn();
	}
	reset() {
		this.modes = structuredClone(pn), this.decPrivateModes = structuredClone(mn), this.kittyKeyboard = bn();
	}
	triggerDataEvent(e, t = !1) {
		if (this._optionsService.rawOptions.disableStdin) return;
		let n = this._bufferService.buffer;
		t && this._optionsService.rawOptions.scrollOnUserInput && n.ybase !== n.ydisp && this._onRequestScrollToBottom.fire(), t && this._onUserInput.fire(), this._logService.debug(`sending data "${e}"`), this._logService.trace("sending data (codes)", () => e.split("").map((e) => e.charCodeAt(0))), this._onData.fire(e);
	}
	triggerBinaryEvent(e) {
		this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${e}"`), this._logService.trace("sending binary (codes)", () => e.split("").map((e) => e.charCodeAt(0))), this._onBinary.fire(e));
	}
};
Lt = y([
	m(0, D),
	m(1, _e),
	m(2, R)
], Lt);
var vn = {
	NONE: {
		events: 0,
		restrict: () => !1
	},
	X10: {
		events: 1,
		restrict: (e) => e.button === 4 || e.action !== 1 ? !1 : (e.ctrl = !1, e.alt = !1, e.shift = !1, !0)
	},
	VT200: {
		events: 19,
		restrict: (e) => e.action !== 32
	},
	DRAG: {
		events: 23,
		restrict: (e) => !(e.action === 32 && e.button === 3)
	},
	ANY: {
		events: 31,
		restrict: (e) => !0
	}
};
function ms(e, t) {
	let n = (e.ctrl ? 16 : 0) | (e.shift ? 4 : 0) | (e.alt ? 8 : 0);
	return e.button === 4 ? (n |= 64, n |= e.action) : (n |= e.button & 3, e.button & 4 && (n |= 64), e.button & 8 && (n |= 128), e.action === 32 ? n |= 32 : e.action === 0 && !t && (n |= 3)), n;
}
var bs = String.fromCharCode, Sn = {
	DEFAULT: (e) => {
		let t = [
			ms(e, !1) + 32,
			e.col + 32,
			e.row + 32
		];
		return t[0] > 255 || t[1] > 255 || t[2] > 255 ? "" : `\x1B[M${bs(t[0])}${bs(t[1])}${bs(t[2])}`;
	},
	SGR: (e) => {
		let t = e.action === 0 && e.button !== 4 ? "m" : "M";
		return `\x1B[<${ms(e, !0)};${e.col};${e.row}${t}`;
	},
	SGR_PIXELS: (e) => {
		let t = e.action === 0 && e.button !== 4 ? "m" : "M";
		return `\x1B[<${ms(e, !0)};${e.x};${e.y}${t}`;
	}
}, rr = class extends g {
	constructor() {
		super(), this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._onProtocolChange = this._register(new b()), this.onProtocolChange = this._onProtocolChange.event;
		for (let e of Object.keys(vn)) this.addProtocol(e, vn[e]);
		for (let e of Object.keys(Sn)) this.addEncoding(e, Sn[e]);
		this.reset();
	}
	addProtocol(e, t) {
		this._protocols[e] = t;
	}
	addEncoding(e, t) {
		this._encodings[e] = t;
	}
	get activeProtocol() {
		return this._activeProtocol;
	}
	get areMouseEventsActive() {
		return this._protocols[this._activeProtocol].events !== 0;
	}
	set activeProtocol(e) {
		if (!this._protocols[e]) throw Error(`unknown protocol "${e}"`);
		this._activeProtocol = e, this._onProtocolChange.fire(this._protocols[e].events);
	}
	get activeEncoding() {
		return this._activeEncoding;
	}
	set activeEncoding(e) {
		if (!this._encodings[e]) throw Error(`unknown encoding "${e}"`);
		this._activeEncoding = e;
	}
	reset() {
		this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT";
	}
	setCustomWheelEventHandler(e) {
		this._customWheelEventHandler = e;
	}
	allowCustomWheelEvent(e) {
		return this._customWheelEventHandler ? this._customWheelEventHandler(e) !== !1 : !0;
	}
	restrictMouseEvent(e) {
		return this._protocols[this._activeProtocol].restrict(e);
	}
	encodeMouseEvent(e) {
		return this._encodings[this._activeEncoding](e);
	}
	get isDefaultEncoding() {
		return this._activeEncoding === "DEFAULT";
	}
	get isPixelEncoding() {
		return this._activeEncoding === "SGR_PIXELS";
	}
}, me = class e {
	constructor() {
		this._providers = Object.create(null), this._active = "", this._onChange = new b(), this.onChange = this._onChange.event;
	}
	static extractShouldJoin(e) {
		return (e & 1) != 0;
	}
	static extractWidth(e) {
		return e >> 1 & 3;
	}
	static extractCharKind(e) {
		return e >> 3;
	}
	static createPropertyValue(e, t, n = !1) {
		return (e & 16777215) << 3 | (t & 3) << 1 | (n ? 1 : 0);
	}
	dispose() {
		this._onChange.dispose();
	}
	get versions() {
		return Object.keys(this._providers);
	}
	get activeVersion() {
		return this._active;
	}
	set activeVersion(e) {
		if (!this._providers[e]) throw Error(`unknown Unicode version "${e}"`);
		this._active = e, this._activeProvider = this._providers[e], this._onChange.fire(e);
	}
	register(e) {
		this._providers[e.version] = e, this._active || (this.activeVersion = e.version);
	}
	wcwidth(e) {
		return this._activeProvider.wcwidth(e);
	}
	getStringCellWidth(t) {
		let n = 0, r = 0, i = t.length;
		for (let o = 0; o < i; ++o) {
			let s = t.charCodeAt(o);
			if (55296 <= s && s <= 56319) {
				if (++o >= i) return n + this.wcwidth(s);
				let e = t.charCodeAt(o);
				56320 <= e && e <= 57343 ? s = (s - 55296) * 1024 + e - 56320 + 65536 : n += this.wcwidth(e);
			}
			let p = this.charProperties(s, r), S = e.extractWidth(p);
			e.extractShouldJoin(p) && (S -= e.extractWidth(r)), n += S, r = p;
		}
		return n;
	}
	charProperties(e, t) {
		return this._activeProvider.charProperties(e, t);
	}
}, vs = [
	[768, 879],
	[1155, 1158],
	[1160, 1161],
	[1425, 1469],
	[1471, 1471],
	[1473, 1474],
	[1476, 1477],
	[1479, 1479],
	[1536, 1539],
	[1552, 1557],
	[1611, 1630],
	[1648, 1648],
	[1750, 1764],
	[1767, 1768],
	[1770, 1773],
	[1807, 1807],
	[1809, 1809],
	[1840, 1866],
	[1958, 1968],
	[2027, 2035],
	[2305, 2306],
	[2364, 2364],
	[2369, 2376],
	[2381, 2381],
	[2385, 2388],
	[2402, 2403],
	[2433, 2433],
	[2492, 2492],
	[2497, 2500],
	[2509, 2509],
	[2530, 2531],
	[2561, 2562],
	[2620, 2620],
	[2625, 2626],
	[2631, 2632],
	[2635, 2637],
	[2672, 2673],
	[2689, 2690],
	[2748, 2748],
	[2753, 2757],
	[2759, 2760],
	[2765, 2765],
	[2786, 2787],
	[2817, 2817],
	[2876, 2876],
	[2879, 2879],
	[2881, 2883],
	[2893, 2893],
	[2902, 2902],
	[2946, 2946],
	[3008, 3008],
	[3021, 3021],
	[3134, 3136],
	[3142, 3144],
	[3146, 3149],
	[3157, 3158],
	[3260, 3260],
	[3263, 3263],
	[3270, 3270],
	[3276, 3277],
	[3298, 3299],
	[3393, 3395],
	[3405, 3405],
	[3530, 3530],
	[3538, 3540],
	[3542, 3542],
	[3633, 3633],
	[3636, 3642],
	[3655, 3662],
	[3761, 3761],
	[3764, 3769],
	[3771, 3772],
	[3784, 3789],
	[3864, 3865],
	[3893, 3893],
	[3895, 3895],
	[3897, 3897],
	[3953, 3966],
	[3968, 3972],
	[3974, 3975],
	[3984, 3991],
	[3993, 4028],
	[4038, 4038],
	[4141, 4144],
	[4146, 4146],
	[4150, 4151],
	[4153, 4153],
	[4184, 4185],
	[4448, 4607],
	[4959, 4959],
	[5906, 5908],
	[5938, 5940],
	[5970, 5971],
	[6002, 6003],
	[6068, 6069],
	[6071, 6077],
	[6086, 6086],
	[6089, 6099],
	[6109, 6109],
	[6155, 6157],
	[6313, 6313],
	[6432, 6434],
	[6439, 6440],
	[6450, 6450],
	[6457, 6459],
	[6679, 6680],
	[6912, 6915],
	[6964, 6964],
	[6966, 6970],
	[6972, 6972],
	[6978, 6978],
	[7019, 7027],
	[7616, 7626],
	[7678, 7679],
	[8203, 8207],
	[8234, 8238],
	[8288, 8291],
	[8298, 8303],
	[8400, 8431],
	[12330, 12335],
	[12441, 12442],
	[43014, 43014],
	[43019, 43019],
	[43045, 43046],
	[64286, 64286],
	[65024, 65039],
	[65056, 65059],
	[65279, 65279],
	[65529, 65531]
], vo = [
	[68097, 68099],
	[68101, 68102],
	[68108, 68111],
	[68152, 68154],
	[68159, 68159],
	[119143, 119145],
	[119155, 119170],
	[119173, 119179],
	[119210, 119213],
	[119362, 119364],
	[917505, 917505],
	[917536, 917631],
	[917760, 917999]
], q;
function So(e, t) {
	let n = 0, r = t.length - 1, i;
	if (e < t[0][0] || e > t[r][1]) return !1;
	for (; r >= n;) if (i = n + r >> 1, e > t[i][1]) n = i + 1;
	else if (e < t[i][0]) r = i - 1;
	else return !0;
	return !1;
}
var sr = class {
	constructor() {
		if (this.version = "6", !q) {
			q = new Uint8Array(65536), q.fill(1), q[0] = 0, q.fill(0, 1, 32), q.fill(0, 127, 160), q.fill(2, 4352, 4448), q[9001] = 2, q[9002] = 2, q.fill(2, 11904, 42192), q[12351] = 1, q.fill(2, 44032, 55204), q.fill(2, 63744, 64256), q.fill(2, 65040, 65050), q.fill(2, 65072, 65136), q.fill(2, 65280, 65377), q.fill(2, 65504, 65511);
			for (let e = 0; e < vs.length; ++e) q.fill(0, vs[e][0], vs[e][1] + 1);
		}
	}
	wcwidth(e) {
		return e < 32 ? 0 : e < 127 ? 1 : e < 65536 ? q[e] : So(e, vo) ? 0 : e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141 ? 2 : 1;
	}
	charProperties(e, t) {
		let n = this.wcwidth(e), r = n === 0 && t !== 0;
		if (r) {
			let e = me.extractWidth(t);
			e === 0 ? r = !1 : e > n && (n = e);
		}
		return me.createPropertyValue(0, n, r);
	}
}, nr = class {
	constructor() {
		this.glevel = 0, this._charsets = [];
	}
	get charsets() {
		return this._charsets;
	}
	reset() {
		this.charset = void 0, this._charsets = [], this.glevel = 0;
	}
	setgLevel(e) {
		this.glevel = e, this.charset = this._charsets[e];
	}
	setgCharset(e, t) {
		this._charsets[e] = t, this.glevel === e && (this.charset = t);
	}
};
function Ss(e) {
	let t = e.buffer.lines.get(e.buffer.ybase + e.buffer.y - 1)?.get(e.cols - 1), n = e.buffer.lines.get(e.buffer.ybase + e.buffer.y);
	n && t && (n.isWrapped = t[3] !== 0 && t[3] !== 32);
}
var At = class e {
	constructor(e = 32, t = 32) {
		if (this.maxLength = e, this.maxSubParamsLength = t, t > 256) throw Error("maxSubParamsLength must not be greater than 256");
		this.params = new Int32Array(e), this.length = 0, this._subParams = new Int32Array(t), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e), this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
	}
	static fromArray(t) {
		let n = new e();
		if (!t.length) return n;
		for (let e = Array.isArray(t[0]) ? 1 : 0; e < t.length; ++e) {
			let r = t[e];
			if (Array.isArray(r)) for (let e = 0; e < r.length; ++e) n.addSubParam(r[e]);
			else n.addParam(r);
		}
		return n;
	}
	clone() {
		let t = new e(this.maxLength, this.maxSubParamsLength);
		return t.params.set(this.params), t.length = this.length, t._subParams.set(this._subParams), t._subParamsLength = this._subParamsLength, t._subParamsIdx.set(this._subParamsIdx), t._rejectDigits = this._rejectDigits, t._rejectSubDigits = this._rejectSubDigits, t._digitIsSub = this._digitIsSub, t;
	}
	toArray() {
		let e = [];
		for (let t = 0; t < this.length; ++t) {
			e.push(this.params[t]);
			let n = this._subParamsIdx[t] >> 8, r = this._subParamsIdx[t] & 255;
			r - n > 0 && e.push(Array.prototype.slice.call(this._subParams, n, r));
		}
		return e;
	}
	reset() {
		this.length = 0, this._subParamsLength = 0, this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
	}
	resetZdm() {
		this.length = 1, this._subParamsLength = 0, this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1, this._subParamsIdx[0] = 0, this.params[0] = 0;
	}
	addParam(e) {
		if (this._digitIsSub = !1, this.length >= this.maxLength) {
			this._rejectDigits = !0;
			return;
		}
		if (e < -1) throw Error("values less than -1 are not allowed");
		this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e > 2147483647 ? 2147483647 : e;
	}
	addSubParam(e) {
		if (this._digitIsSub = !0, this.length) {
			if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) {
				this._rejectSubDigits = !0;
				return;
			}
			if (e < -1) throw Error("values less than -1 are not allowed");
			this._subParams[this._subParamsLength++] = e > 2147483647 ? 2147483647 : e, this._subParamsIdx[this.length - 1]++;
		}
	}
	hasSubParams(e) {
		return (this._subParamsIdx[e] & 255) - (this._subParamsIdx[e] >> 8) > 0;
	}
	getSubParams(e) {
		let t = this._subParamsIdx[e] >> 8, n = this._subParamsIdx[e] & 255;
		return n - t > 0 ? this._subParams.subarray(t, n) : null;
	}
	getSubParamsAll() {
		let e = {};
		for (let t = 0; t < this.length; ++t) {
			let n = this._subParamsIdx[t] >> 8, r = this._subParamsIdx[t] & 255;
			r - n > 0 && (e[t] = this._subParams.slice(n, r));
		}
		return e;
	}
	addDigit(e) {
		let t;
		if (this._rejectDigits || !(t = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits) return;
		let n = this._digitIsSub ? this._subParams : this.params, r = n[t - 1];
		n[t - 1] = ~r ? Math.min(r * 10 + e, 2147483647) : e;
	}
}, gs = class {
	constructor() {
		this._chunks = [], this._length = 0;
	}
	get length() {
		return this._length;
	}
	reset() {
		this._chunks.length = 0, this._length = 0;
	}
	append(e) {
		this._chunks.push(e), this._length += e.length;
	}
	toString() {
		return this._chunks.join("");
	}
}, Ue = class {
	constructor(e) {
		this._limit = e, this._builder = new gs();
	}
	get length() {
		return this._builder.length;
	}
	get limit() {
		return this._limit;
	}
	reset() {
		this._builder.reset();
	}
	append(e) {
		return this._builder.append(e), this._builder.length > this._limit ? (this._builder.reset(), !0) : !1;
	}
	toString() {
		return this._builder.toString();
	}
}, si = [], or = class {
	constructor() {
		this._state = 0, this._active = si, this._id = -1, this._handlers = Object.create(null), this._handlerFb = () => {}, this._stack = {
			paused: !1,
			loopPosition: 0,
			fallThrough: !1
		};
	}
	registerHandler(e, t) {
		this._handlers[e] ??= [];
		let n = this._handlers[e];
		return n.push(t), { dispose: () => {
			let e = n.indexOf(t);
			e !== -1 && n.splice(e, 1);
		} };
	}
	clearHandler(e) {
		this._handlers[e] && delete this._handlers[e];
	}
	setHandlerFallback(e) {
		this._handlerFb = e;
	}
	dispose() {
		this._handlers = Object.create(null), this._handlerFb = () => {}, this._active = si;
	}
	reset() {
		if (this._state === 2) for (let e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e) this._active[e].end(!1);
		this._stack.paused = !1, this._active = si, this._id = -1, this._state = 0;
	}
	_start() {
		if (this._active = this._handlers[this._id] || si, !this._active.length) this._handlerFb(this._id, "START");
		else for (let e = this._active.length - 1; e >= 0; e--) this._active[e].start();
	}
	_put(e, t, n) {
		if (!this._active.length) this._handlerFb(this._id, "PUT", xe(e, t, n));
		else for (let r = this._active.length - 1; r >= 0; r--) this._active[r].put(e, t, n);
	}
	start() {
		this.reset(), this._state = 1;
	}
	put(e, t, n) {
		if (this._state !== 3) {
			if (this._state === 1) for (; t < n;) {
				let n = e[t++];
				if (n === 59) {
					this._state = 2, this._start();
					break;
				}
				if (n < 48 || 57 < n) {
					this._state = 3;
					return;
				}
				this._id === -1 && (this._id = 0), this._id = this._id * 10 + n - 48;
			}
			this._state === 2 && n - t > 0 && this._put(e, t, n);
		}
	}
	end(e, t = !0) {
		if (this._state !== 0) {
			if (this._state !== 3) if (this._state === 1 && this._start(), !this._active.length) this._handlerFb(this._id, "END", e);
			else {
				let n = !1, r = this._active.length - 1, i = !1;
				if (this._stack.paused && (r = this._stack.loopPosition - 1, n = t, i = this._stack.fallThrough, this._stack.paused = !1), !i && n === !1) {
					for (; r >= 0 && (n = this._active[r].end(e), n !== !0); r--) if (n instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = r, this._stack.fallThrough = !1, n;
					r--;
				}
				for (; r >= 0; r--) if (n = this._active[r].end(!1), n instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = r, this._stack.fallThrough = !0, n;
			}
			this._active = si, this._id = -1, this._state = 0;
		}
	}
}, ar = class e {
	constructor(t) {
		this._handler = t, this._data = new Ue(e._payloadLimit), this._hitLimit = !1;
	}
	start() {
		this._data.reset(), this._hitLimit = !1;
	}
	put(e, t, n) {
		this._hitLimit || this._data.append(xe(e, t, n)) && (this._hitLimit = !0);
	}
	end(e) {
		let t = !1;
		if (this._hitLimit) t = !1;
		else if (e && (t = this._handler(this._data.toString()), t instanceof Promise)) return t.then((e) => (this._data.reset(), this._hitLimit = !1, e));
		return this._data.reset(), this._hitLimit = !1, t;
	}
};
ar._payloadLimit = 1e7;
var se = ar, ni = [], lr = class {
	constructor() {
		this._handlers = Object.create(null), this._active = ni, this._ident = 0, this._handlerFb = () => {}, this._stack = {
			paused: !1,
			loopPosition: 0,
			fallThrough: !1
		};
	}
	dispose() {
		this._handlers = Object.create(null), this._handlerFb = () => {}, this._active = ni;
	}
	registerHandler(e, t) {
		this._handlers[e] ??= [];
		let n = this._handlers[e];
		return n.push(t), { dispose: () => {
			let e = n.indexOf(t);
			e !== -1 && n.splice(e, 1);
		} };
	}
	clearHandler(e) {
		this._handlers[e] && delete this._handlers[e];
	}
	setHandlerFallback(e) {
		this._handlerFb = e;
	}
	reset() {
		if (this._active.length) for (let e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e) this._active[e].unhook(!1);
		this._stack.paused = !1, this._active = ni, this._ident = 0;
	}
	hook(e, t) {
		if (this.reset(), this._ident = e, this._active = this._handlers[e] || ni, !this._active.length) this._handlerFb(this._ident, "HOOK", t);
		else for (let e = this._active.length - 1; e >= 0; e--) this._active[e].hook(t);
	}
	put(e, t, n) {
		if (!this._active.length) this._handlerFb(this._ident, "PUT", xe(e, t, n));
		else for (let r = this._active.length - 1; r >= 0; r--) this._active[r].put(e, t, n);
	}
	unhook(e, t = !0) {
		if (!this._active.length) this._handlerFb(this._ident, "UNHOOK", e);
		else {
			let n = !1, r = this._active.length - 1, i = !1;
			if (this._stack.paused && (r = this._stack.loopPosition - 1, n = t, i = this._stack.fallThrough, this._stack.paused = !1), !i && n === !1) {
				for (; r >= 0 && (n = this._active[r].unhook(e), n !== !0); r--) if (n instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = r, this._stack.fallThrough = !1, n;
				r--;
			}
			for (; r >= 0; r--) if (n = this._active[r].unhook(!1), n instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = r, this._stack.fallThrough = !0, n;
		}
		this._active = ni, this._ident = 0;
	}
}, oi = new At();
oi.addParam(0);
var cr = class e {
	constructor(t) {
		this._handler = t, this._data = new Ue(e._payloadLimit), this._params = oi, this._hitLimit = !1;
	}
	hook(e) {
		this._params = e.length > 1 || e.params[0] ? e.clone() : oi, this._data.reset(), this._hitLimit = !1;
	}
	put(e, t, n) {
		this._hitLimit || this._data.append(xe(e, t, n)) && (this._hitLimit = !0);
	}
	unhook(e) {
		let t = !1;
		if (this._hitLimit) t = !1;
		else if (e && (t = this._handler(this._data.toString(), this._params), t instanceof Promise)) return t.then((e) => (this._params = oi, this._data.reset(), this._hitLimit = !1, e));
		return this._params = oi, this._data.reset(), this._hitLimit = !1, t;
	}
};
cr._payloadLimit = 1e7;
var ai = cr, li = [], hr = class {
	constructor() {
		this._handlers = Object.create(null), this._active = li, this._ident = 0, this._handlerFb = () => {}, this._stack = {
			paused: !1,
			loopPosition: 0,
			fallThrough: !1
		};
	}
	registerHandler(e, t) {
		this._handlers[e] ??= [];
		let n = this._handlers[e];
		return n.push(t), { dispose: () => {
			let e = n.indexOf(t);
			e !== -1 && n.splice(e, 1);
		} };
	}
	clearHandler(e) {
		this._handlers[e] && delete this._handlers[e];
	}
	setHandlerFallback(e) {
		this._handlerFb = e;
	}
	dispose() {
		this._handlers = Object.create(null), this._handlerFb = () => {}, this._active = li;
	}
	reset() {
		if (this._active.length) for (let e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e) this._active[e].end(!1);
		this._stack.paused = !1, this._active = li, this._ident = 0;
	}
	start(e) {
		if (this.reset(), this._ident = e, this._active = this._handlers[e] || li, !this._active.length) this._handlerFb(this._ident, "START");
		else for (let e = this._active.length - 1; e >= 0; e--) this._active[e].start();
	}
	put(e, t, n) {
		if (!this._active.length) this._handlerFb(this._ident, "PUT", xe(e, t, n));
		else for (let r = this._active.length - 1; r >= 0; r--) this._active[r].put(e, t, n);
	}
	end(e, t = !0) {
		if (!this._active.length) this._handlerFb(this._ident, "END", e);
		else {
			let n = !1, r = this._active.length - 1, i = !1;
			if (this._stack.paused && (r = this._stack.loopPosition - 1, n = t, i = this._stack.fallThrough, this._stack.paused = !1), !i && n === !1) {
				for (; r >= 0 && (n = this._active[r].end(e), n !== !0); r--) if (n instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = r, this._stack.fallThrough = !1, n;
				r--;
			}
			for (; r >= 0; r--) if (n = this._active[r].end(!1), n instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = r, this._stack.fallThrough = !0, n;
		}
		this._active = li, this._ident = 0;
	}
}, ur = class e {
	constructor(t) {
		this._handler = t, this._data = new Ue(e._payloadLimit), this._hitLimit = !1;
	}
	start() {
		this._data.reset(), this._hitLimit = !1;
	}
	put(e, t, n) {
		this._hitLimit || this._data.append(xe(e, t, n)) && (this._hitLimit = !0);
	}
	end(e) {
		let t = !1;
		if (this._hitLimit) t = !1;
		else if (e && (t = this._handler(this._data.toString()), t instanceof Promise)) return t.then((e) => (this._data.reset(), this._hitLimit = !1, e));
		return this._data.reset(), this._hitLimit = !1, t;
	}
};
ur._payloadLimit = 1e7;
var dr = ur, Cs = class {
	constructor(e) {
		this.table = new Uint16Array(e);
	}
	setDefault(e, t) {
		this.table.fill(e << 8 | t);
	}
	add(e, t, n, r) {
		this.table[t << 8 | e] = n << 8 | r;
	}
	addMany(e, t, n, r) {
		for (let i = 0; i < e.length; i++) this.table[t << 8 | e[i]] = n << 8 | r;
	}
}, ne = 160, go = (function() {
	let e = new Cs(4257), t = Array.apply(null, Array(256)).map((e, t) => t), n = (e, n) => t.slice(e, n), r = n(32, 127), i = n(0, 24);
	i.push(25), i.push.apply(i, n(28, 32));
	let o = n(0, 17);
	e.setDefault(1, 0), e.addMany(r, 0, 2, 0);
	for (let t of o) e.addMany([
		24,
		26,
		153,
		154
	], t, 3, 0), e.addMany(n(128, 144), t, 3, 0), e.addMany(n(144, 152), t, 3, 0), e.add(156, t, 0, 0), e.add(27, t, 11, 1), e.add(157, t, 4, 8), e.addMany([152, 158], t, 0, 7), e.add(159, t, 11, 14), e.add(155, t, 11, 3), e.add(144, t, 11, 9);
	return e.addMany(i, 0, 3, 0), e.addMany(i, 1, 3, 1), e.add(127, 1, 0, 1), e.addMany(i, 8, 0, 8), e.addMany(i, 3, 3, 3), e.add(127, 3, 0, 3), e.addMany(i, 4, 3, 4), e.add(127, 4, 0, 4), e.addMany(i, 6, 3, 6), e.addMany(i, 5, 3, 5), e.add(127, 5, 0, 5), e.addMany(i, 2, 3, 2), e.add(127, 2, 0, 2), e.add(93, 1, 4, 8), e.addMany(r, 8, 5, 8), e.add(127, 8, 5, 8), e.addMany([
		156,
		27,
		24,
		26,
		7
	], 8, 6, 0), e.addMany(n(28, 32), 8, 0, 8), e.addMany([88, 94], 1, 0, 7), e.addMany(r, 7, 0, 7), e.addMany(i, 7, 0, 7), e.add(156, 7, 0, 0), e.add(127, 7, 0, 7), e.add(95, 1, 11, 14), e.addMany(i, 14, 0, 14), e.add(127, 14, 0, 14), e.addMany(n(32, 48), 14, 9, 15), e.addMany(n(48, 127), 14, 15, 16), e.addMany(n(48, 127), 15, 15, 16), e.addMany(i, 15, 0, 15), e.addMany(n(32, 48), 15, 9, 15), e.add(127, 15, 0, 15), e.addMany(r, 16, 16, 16), e.addMany(i, 16, 0, 16), e.addMany(n(8, 14), 16, 16, 16), e.add(127, 16, 0, 16), e.addMany([
		27,
		156,
		24,
		26
	], 16, 17, 0), e.add(91, 1, 11, 3), e.addMany(n(64, 127), 3, 7, 0), e.addMany(n(48, 60), 3, 8, 4), e.addMany([
		60,
		61,
		62,
		63
	], 3, 9, 4), e.addMany(n(48, 60), 4, 8, 4), e.addMany(n(64, 127), 4, 7, 0), e.addMany([
		60,
		61,
		62,
		63
	], 4, 0, 6), e.addMany(n(32, 64), 6, 0, 6), e.add(127, 6, 0, 6), e.addMany(n(64, 127), 6, 0, 0), e.addMany(n(32, 48), 3, 9, 5), e.addMany(n(32, 48), 5, 9, 5), e.addMany(n(48, 64), 5, 0, 6), e.addMany(n(64, 127), 5, 7, 0), e.addMany(n(32, 48), 4, 9, 5), e.addMany(n(32, 48), 1, 9, 2), e.addMany(n(32, 48), 2, 9, 2), e.addMany(n(48, 127), 2, 10, 0), e.addMany(n(48, 80), 1, 10, 0), e.addMany(n(81, 88), 1, 10, 0), e.addMany([
		89,
		90,
		92
	], 1, 10, 0), e.addMany(n(96, 127), 1, 10, 0), e.add(80, 1, 11, 9), e.addMany(i, 9, 0, 9), e.add(127, 9, 0, 9), e.addMany(n(32, 48), 9, 9, 12), e.addMany(n(48, 60), 9, 8, 10), e.addMany([
		60,
		61,
		62,
		63
	], 9, 9, 10), e.addMany(i, 11, 0, 11), e.addMany(n(32, 128), 11, 0, 11), e.addMany(i, 10, 0, 10), e.add(127, 10, 0, 10), e.addMany(n(48, 60), 10, 8, 10), e.addMany([
		60,
		61,
		62,
		63
	], 10, 0, 11), e.addMany(n(32, 48), 10, 9, 12), e.addMany(i, 12, 0, 12), e.add(127, 12, 0, 12), e.addMany(n(32, 48), 12, 9, 12), e.addMany(n(48, 64), 12, 0, 11), e.addMany(n(64, 127), 12, 12, 13), e.addMany(n(64, 127), 10, 12, 13), e.addMany(n(64, 127), 9, 12, 13), e.addMany(i, 13, 13, 13), e.addMany(r, 13, 13, 13), e.add(127, 13, 0, 13), e.addMany([
		27,
		156,
		24,
		26
	], 13, 14, 0), e.add(ne, 0, 2, 0), e.add(ne, 8, 5, 8), e.add(ne, 6, 0, 6), e.add(ne, 11, 0, 11), e.add(ne, 13, 13, 13), e.add(ne, 16, 16, 16), e;
})(), fr = class extends g {
	constructor(e = go) {
		super(), this._transitions = e, this._parseStack = {
			state: 0,
			handlers: [],
			handlerPos: 0,
			transition: 0,
			chunkPos: 0
		}, this.initialState = 0, this.currentState = this.initialState, this._params = new At(), this._params.addParam(0), this._collect = 0, this.precedingJoinState = 0, this._printHandlerFb = (e, t, n) => {}, this._executeHandlerFb = (e) => {}, this._csiHandlerFb = (e, t) => {}, this._escHandlerFb = (e) => {}, this._errorHandlerFb = (e) => e, this._printHandler = this._printHandlerFb, this._executeHandlers = Object.create(null), this._executeHandlersArr = Array(24).fill(void 0), this._csiHandlers = Object.create(null), this._escHandlers = Object.create(null), this._register(E(() => {
			this._csiHandlers = Object.create(null), this._executeHandlers = Object.create(null), this._executeHandlersArr = Array(24).fill(void 0), this._escHandlers = Object.create(null);
		})), this._oscParser = this._register(new or()), this._dcsParser = this._register(new lr()), this._apcParser = this._register(new hr()), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({ final: "\\" }, () => !0);
	}
	_identifier(e, t = [64, 126]) {
		let n = 0;
		if (e.prefix) {
			if (e.prefix.length > 1) throw Error("only one byte as prefix supported");
			if (n = e.prefix.charCodeAt(0), n < 60 || n > 63) throw Error("prefix must be in range 0x3c .. 0x3f");
		}
		if (e.intermediates) {
			if (e.intermediates.length > 2) throw Error("only two bytes as intermediates are supported");
			for (let t = 0; t < e.intermediates.length; ++t) {
				let r = e.intermediates.charCodeAt(t);
				if (32 > r || r > 47) throw Error("intermediate must be in range 0x20 .. 0x2f");
				n <<= 8, n |= r;
			}
		}
		if (e.final.length !== 1) throw Error("final must be a single byte");
		let r = e.final.charCodeAt(0);
		if (t[0] > r || r > t[1]) throw Error(`final must be in range ${t[0]} .. ${t[1]}`);
		return n <<= 8, n |= r, n;
	}
	identToString(e) {
		let t = [];
		for (; e;) t.push(String.fromCharCode(e & 255)), e >>= 8;
		return t.reverse().join("");
	}
	setPrintHandler(e) {
		this._printHandler = e;
	}
	clearPrintHandler() {
		this._printHandler = this._printHandlerFb;
	}
	registerEscHandler(e, t) {
		let n = this._identifier(e, [48, 126]);
		this._escHandlers[n] ??= [];
		let r = this._escHandlers[n];
		return r.push(t), { dispose: () => {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		} };
	}
	clearEscHandler(e) {
		this._escHandlers[this._identifier(e, [48, 126])] && delete this._escHandlers[this._identifier(e, [48, 126])];
	}
	setEscHandlerFallback(e) {
		this._escHandlerFb = e;
	}
	setExecuteHandler(e, t) {
		let n = e.charCodeAt(0);
		this._executeHandlers[n] = t, n < 24 && (this._executeHandlersArr[n] = t);
	}
	clearExecuteHandler(e) {
		let t = e.charCodeAt(0);
		this._executeHandlers[t] && delete this._executeHandlers[t], t < 24 && (this._executeHandlersArr[t] = void 0);
	}
	setExecuteHandlerFallback(e) {
		this._executeHandlerFb = e;
	}
	registerCsiHandler(e, t) {
		let n = this._identifier(e);
		this._csiHandlers[n] ??= [];
		let r = this._csiHandlers[n];
		return r.push(t), { dispose: () => {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		} };
	}
	clearCsiHandler(e) {
		this._csiHandlers[this._identifier(e)] && delete this._csiHandlers[this._identifier(e)];
	}
	setCsiHandlerFallback(e) {
		this._csiHandlerFb = e;
	}
	registerDcsHandler(e, t) {
		return this._dcsParser.registerHandler(this._identifier(e), t);
	}
	clearDcsHandler(e) {
		this._dcsParser.clearHandler(this._identifier(e));
	}
	setDcsHandlerFallback(e) {
		this._dcsParser.setHandlerFallback(e);
	}
	registerOscHandler(e, t) {
		return this._oscParser.registerHandler(e, t);
	}
	clearOscHandler(e) {
		this._oscParser.clearHandler(e);
	}
	setOscHandlerFallback(e) {
		this._oscParser.setHandlerFallback(e);
	}
	registerApcHandler(e, t) {
		return e.prefix = void 0, this._apcParser.registerHandler(this._identifier(e, [48, 126]), t);
	}
	clearApcHandler(e) {
		e.prefix = void 0, this._apcParser.clearHandler(this._identifier(e, [48, 126]));
	}
	setApcHandlerFallback(e) {
		this._apcParser.setHandlerFallback(e);
	}
	setErrorHandler(e) {
		this._errorHandler = e;
	}
	clearErrorHandler() {
		this._errorHandler = this._errorHandlerFb;
	}
	reset() {
		this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._apcParser.reset(), this._params.resetZdm(), this._collect = 0, this.precedingJoinState = 0, this._parseStack.state !== 0 && (this._parseStack.state = 2, this._parseStack.handlers = []);
	}
	_preserveStack(e, t, n, r, i) {
		this._parseStack.state = e, this._parseStack.handlers = t, this._parseStack.handlerPos = n, this._parseStack.transition = r, this._parseStack.chunkPos = i;
	}
	parse(e, t, n) {
		let r, i, o = 0, s;
		if (this._parseStack.state) if (this._parseStack.state === 2) this._parseStack.state = 0, o = this._parseStack.chunkPos + 1;
		else {
			if (n === void 0 || this._parseStack.state === 1) throw this._parseStack.state = 1, /* @__PURE__ */ Error("improper continuation due to previous async handler, giving up parsing");
			let t = this._parseStack.handlers, i = this._parseStack.handlerPos - 1;
			switch (this._parseStack.state) {
				case 3:
					if (n === !1 && i > -1) {
						for (; i >= 0 && (s = t[i](this._params), s !== !0); i--) if (s instanceof Promise) return this._parseStack.handlerPos = i, s;
					}
					this._parseStack.handlers = [];
					break;
				case 4:
					if (n === !1 && i > -1) {
						for (; i >= 0 && (s = t[i](), s !== !0); i--) if (s instanceof Promise) return this._parseStack.handlerPos = i, s;
					}
					this._parseStack.handlers = [];
					break;
				case 6:
					if (r = e[this._parseStack.chunkPos], s = this._dcsParser.unhook(r !== 24 && r !== 26, n), s) return s;
					r === 27 && (this._parseStack.transition |= 1), this._params.resetZdm(), this._collect = 0;
					break;
				case 5:
					if (r = e[this._parseStack.chunkPos], s = this._oscParser.end(r !== 24 && r !== 26, n), s) return s;
					r === 27 && (this._parseStack.transition |= 1), this._params.resetZdm(), this._collect = 0;
					break;
				case 7:
					if (r = e[this._parseStack.chunkPos], s = this._apcParser.end(r !== 24 && r !== 26, n), s) return s;
					r === 27 && (this._parseStack.transition |= 1), this._params.resetZdm(), this._collect = 0;
					break;
			}
			this._parseStack.state = 0, o = this._parseStack.chunkPos + 1, this.precedingJoinState = 0, this.currentState = this._parseStack.transition & 255;
		}
		for (let n = o; n < t; ++n) {
			if (r = e[n], r < 24 && this.currentState <= 6) {
				(this._executeHandlersArr[r] ?? this._executeHandlerFb)(r), this.precedingJoinState = 0;
				continue;
			}
			if (r === 27 && this.currentState < 8 && n + 2 < t && e[n + 1] === 91) {
				this._params.resetZdm(), this._collect = 0;
				let r = n + 2, o = e[r];
				o >= 60 && o <= 63 && (this._collect = o, r++);
				let p = !1;
				for (; r < t; r++) if (o = e[r], o >= 48 && o <= 57) this._params.addDigit(o - 48);
				else if (o === 59) this._params.addParam(0);
				else if (o === 58) this._params.addSubParam(-1);
				else if (o >= 64 && o <= 126) {
					let e = this._csiHandlers[this._collect << 8 | o], t = e ? e.length - 1 : -1;
					for (; t >= 0 && (s = e[t](this._params), s !== !0); t--) if (s instanceof Promise) return i = 1792, this._preserveStack(3, e, t, i, r), s;
					t < 0 && this._csiHandlerFb(this._collect << 8 | o, this._params), this.precedingJoinState = 0, n = r, this.currentState = 0, p = !0;
					break;
				} else break;
				p || (n = r - 1, this.currentState = 4);
				continue;
			}
			switch (i = this._transitions.table[this.currentState << 8 | (r < ne ? r : ne)], i >> 8) {
				case 2:
					let o = n, p = t - 4;
					for (; o < p && e[++o] >= 32 && (e[o] <= 126 || e[o] >= ne) && e[++o] >= 32 && (e[o] <= 126 || e[o] >= ne) && e[++o] >= 32 && (e[o] <= 126 || e[o] >= ne) && e[++o] >= 32 && (e[o] <= 126 || e[o] >= ne););
					if (o >= p) for (; o < t && e[o] >= 32 && (e[o] <= 126 || e[o] >= ne);) o++;
					this._printHandler(e, n, o), n = o - 1;
					break;
				case 3:
					this._executeHandlers[r] ? this._executeHandlers[r]() : this._executeHandlerFb(r), this.precedingJoinState = 0;
					break;
				case 0: break;
				case 1:
					if (this._errorHandler({
						position: n,
						code: r,
						currentState: this.currentState,
						collect: this._collect,
						params: this._params,
						abort: !1
					}).abort) return;
					break;
				case 7:
					let S = this._csiHandlers[this._collect << 8 | r], T = S ? S.length - 1 : -1;
					for (; T >= 0 && (s = S[T](this._params), s !== !0); T--) if (s instanceof Promise) return this._preserveStack(3, S, T, i, n), s;
					T < 0 && this._csiHandlerFb(this._collect << 8 | r, this._params), this.precedingJoinState = 0;
					break;
				case 8:
					do
						switch (r) {
							case 59:
								this._params.addParam(0);
								break;
							case 58:
								this._params.addSubParam(-1);
								break;
							default: this._params.addDigit(r - 48);
						}
					while (++n < t && (r = e[n]) > 47 && r < 60);
					n--;
					break;
				case 9:
					this._collect <<= 8, this._collect |= r;
					break;
				case 10:
					let k = this._escHandlers[this._collect << 8 | r], A = k ? k.length - 1 : -1;
					for (; A >= 0 && (s = k[A](), s !== !0); A--) if (s instanceof Promise) return this._preserveStack(4, k, A, i, n), s;
					A < 0 && this._escHandlerFb(this._collect << 8 | r), this.precedingJoinState = 0;
					break;
				case 11:
					this._params.resetZdm(), this._collect = 0;
					break;
				case 12:
					this._dcsParser.hook(this._collect << 8 | r, this._params);
					break;
				case 13:
					for (let i = n + 1;; ++i) if (i >= t || (r = e[i]) === 24 || r === 26 || r === 27 || r > 127 && r < ne) {
						this._dcsParser.put(e, n, i), n = i - 1;
						break;
					}
					break;
				case 14:
					if (s = this._dcsParser.unhook(r !== 24 && r !== 26), s) return this._preserveStack(6, [], 0, i, n), s;
					r === 27 && (i |= 1), this._params.resetZdm(), this._collect = 0, this.precedingJoinState = 0;
					break;
				case 4:
					this._oscParser.start();
					break;
				case 5:
					for (let i = n + 1;; i++) if (i >= t || (r = e[i]) < 32 || r > 127 && r < ne) {
						this._oscParser.put(e, n, i), n = i - 1;
						break;
					}
					break;
				case 6:
					if (s = this._oscParser.end(r !== 24 && r !== 26), s) return this._preserveStack(5, [], 0, i, n), s;
					r === 27 && (i |= 1), this._params.resetZdm(), this._collect = 0, this.precedingJoinState = 0;
					break;
				case 15:
					this._apcParser.start(this._collect << 8 | r);
					break;
				case 16:
					for (let r = n + 1;; ++r) if (!(r < t && (e[r] >= 32 && e[r] < 127 || e[r] >= 8 && e[r] < 14 || e[r] >= ne))) {
						this._apcParser.put(e, n, r), n = r - 1;
						break;
					}
					break;
				case 17:
					if (s = this._apcParser.end(r !== 24 && r !== 26), s) return this._preserveStack(7, [], 0, i, n), s;
					r === 27 && (i |= 1), this._params.resetZdm(), this._collect = 0, this.precedingJoinState = 0;
					break;
			}
			this.currentState = i & 255;
		}
	}
}, Co = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, Io = /^[\da-f]+$/;
function Es(e) {
	if (!e) return;
	let t = e.toLowerCase();
	if (t.startsWith("rgb:")) {
		t = t.slice(4);
		let e = Co.exec(t);
		if (e) {
			let t = e[1] ? 15 : e[4] ? 255 : e[7] ? 4095 : 65535;
			return [
				Math.round(parseInt(e[1] || e[4] || e[7] || e[10], 16) / t * 255),
				Math.round(parseInt(e[2] || e[5] || e[8] || e[11], 16) / t * 255),
				Math.round(parseInt(e[3] || e[6] || e[9] || e[12], 16) / t * 255)
			];
		}
	} else if (t.startsWith("#") && (t = t.slice(1), Io.exec(t) && [
		3,
		6,
		9,
		12
	].includes(t.length))) {
		let e = t.length / 3, n = [
			0,
			0,
			0
		];
		for (let r = 0; r < 3; ++r) {
			let i = parseInt(t.slice(e * r, e * r + e), 16);
			n[r] = e === 1 ? i << 4 : e === 2 ? i : e === 3 ? i >> 4 : i >> 8;
		}
		return n;
	}
}
function Is(e, t) {
	let n = e.toString(16), r = n.length < 2 ? "0" + n : n;
	switch (t) {
		case 4: return n[0];
		case 8: return r;
		case 12: return (r + r).slice(0, 3);
		default: return r + r;
	}
}
function In(e, t = 16) {
	let [n, r, i] = e;
	return `rgb:${Is(n, t)}/${Is(r, t)}/${Is(i, t)}`;
}
var En = "6.1.0-beta.303", yo = {
	"(": 0,
	")": 1,
	"*": 2,
	"+": 3,
	"-": 1,
	".": 2
};
function yn(e, t) {
	if (e > 24) return t.setWinLines || !1;
	switch (e) {
		case 1: return !!t.restoreWin;
		case 2: return !!t.minimizeWin;
		case 3: return !!t.setWinPosition;
		case 4: return !!t.setWinSizePixels;
		case 5: return !!t.raiseWin;
		case 6: return !!t.lowerWin;
		case 7: return !!t.refreshWin;
		case 8: return !!t.setWinSizeChars;
		case 9: return !!t.maximizeWin;
		case 10: return !!t.fullscreenWin;
		case 11: return !!t.getWinState;
		case 13: return !!t.getWinPosition;
		case 14: return !!t.getWinSizePixels;
		case 15: return !!t.getScreenSizePixels;
		case 16: return !!t.getCellSizePixels;
		case 18: return !!t.getWinSizeChars;
		case 19: return !!t.getScreenSizeChars;
		case 20: return !!t.getIconTitle;
		case 21: return !!t.getWinTitle;
		case 22: return !!t.pushTitle;
		case 23: return !!t.popTitle;
		case 24: return !!t.setWinLines;
	}
	return !1;
}
var xn = 0, _r = class extends g {
	constructor(e, t, n, r, i, o, s, p, S = new fr()) {
		for (let T in super(), this._bufferService = e, this._charsetService = t, this._coreService = n, this._logService = r, this._optionsService = i, this._oscLinkService = o, this._mouseStateService = s, this._unicodeService = p, this._parser = S, this._parseBuffer = new Uint32Array(4096), this._stringDecoder = new pi(), this._utf8Decoder = new mi(), this._windowTitle = "", this._iconName = "", this._windowTitleStack = [], this._iconNameStack = [], this._curAttrData = U.clone(), this._eraseAttrDataInternal = U.clone(), this._onRequestBell = this._register(new b()), this.onRequestBell = this._onRequestBell.event, this._onRequestRefreshRows = this._register(new b()), this.onRequestRefreshRows = this._onRequestRefreshRows.event, this._onRequestReset = this._register(new b()), this.onRequestReset = this._onRequestReset.event, this._onRequestSendFocus = this._register(new b()), this.onRequestSendFocus = this._onRequestSendFocus.event, this._onRequestSyncScrollBar = this._register(new b()), this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event, this._onRequestWindowsOptionsReport = this._register(new b()), this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event, this._onA11yChar = this._register(new b()), this.onA11yChar = this._onA11yChar.event, this._onA11yTab = this._register(new b()), this.onA11yTab = this._onA11yTab.event, this._onCursorMove = this._register(new b()), this.onCursorMove = this._onCursorMove.event, this._onLineFeed = this._register(new b()), this.onLineFeed = this._onLineFeed.event, this._onScroll = this._register(new b()), this.onScroll = this._onScroll.event, this._onTitleChange = this._register(new b()), this.onTitleChange = this._onTitleChange.event, this._onColor = this._register(new b()), this.onColor = this._onColor.event, this._onRequestColorSchemeQuery = this._register(new b()), this.onRequestColorSchemeQuery = this._onRequestColorSchemeQuery.event, this._parseStack = {
			paused: !1,
			cursorStartX: 0,
			cursorStartY: 0,
			decodedLength: 0,
			position: 0
		}, this._specialColors = [
			256,
			257,
			258
		], this._register(this._parser), this._dirtyRowTracker = new ci(this._bufferService), this._activeBuffer = this._bufferService.buffer, this._register(this._bufferService.buffers.onBufferActivate((e) => this._activeBuffer = e.activeBuffer)), this._parser.setCsiHandlerFallback((e, t) => {
			this._logService.debug("Unknown CSI code: ", {
				identifier: this._parser.identToString(e),
				params: t.toArray()
			});
		}), this._parser.setEscHandlerFallback((e) => {
			this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(e) });
		}), this._parser.setExecuteHandlerFallback((e) => {
			this._logService.debug("Unknown EXECUTE code: ", { code: e });
		}), this._parser.setOscHandlerFallback((e, t, n) => {
			this._logService.debug("Unknown OSC code: ", {
				identifier: e,
				action: t,
				data: n
			});
		}), this._parser.setDcsHandlerFallback((e, t, n) => {
			t === "HOOK" && (n = n.toArray()), this._logService.debug("Unknown DCS code: ", {
				identifier: this._parser.identToString(e),
				action: t,
				payload: n
			});
		}), this._parser.setApcHandlerFallback((e, t, n) => {
			this._logService.debug("Unknown APC code: ", {
				identifier: this._parser.identToString(e),
				action: t,
				payload: n
			});
		}), this._parser.setPrintHandler((e, t, n) => this.print(e, t, n)), this._parser.registerCsiHandler({ final: "@" }, (e) => this.insertChars(e)), this._parser.registerCsiHandler({
			intermediates: " ",
			final: "@"
		}, (e) => this.scrollLeft(e)), this._parser.registerCsiHandler({ final: "A" }, (e) => this.cursorUp(e)), this._parser.registerCsiHandler({
			intermediates: " ",
			final: "A"
		}, (e) => this.scrollRight(e)), this._parser.registerCsiHandler({ final: "B" }, (e) => this.cursorDown(e)), this._parser.registerCsiHandler({ final: "C" }, (e) => this.cursorForward(e)), this._parser.registerCsiHandler({ final: "D" }, (e) => this.cursorBackward(e)), this._parser.registerCsiHandler({ final: "E" }, (e) => this.cursorNextLine(e)), this._parser.registerCsiHandler({ final: "F" }, (e) => this.cursorPrecedingLine(e)), this._parser.registerCsiHandler({ final: "G" }, (e) => this.cursorCharAbsolute(e)), this._parser.registerCsiHandler({ final: "H" }, (e) => this.cursorPosition(e)), this._parser.registerCsiHandler({ final: "I" }, (e) => this.cursorForwardTab(e)), this._parser.registerCsiHandler({ final: "J" }, (e) => this.eraseInDisplay(e, !1)), this._parser.registerCsiHandler({
			prefix: "?",
			final: "J"
		}, (e) => this.eraseInDisplay(e, !0)), this._parser.registerCsiHandler({ final: "K" }, (e) => this.eraseInLine(e, !1)), this._parser.registerCsiHandler({
			prefix: "?",
			final: "K"
		}, (e) => this.eraseInLine(e, !0)), this._parser.registerCsiHandler({ final: "L" }, (e) => this.insertLines(e)), this._parser.registerCsiHandler({ final: "M" }, (e) => this.deleteLines(e)), this._parser.registerCsiHandler({ final: "P" }, (e) => this.deleteChars(e)), this._parser.registerCsiHandler({ final: "S" }, (e) => this.scrollUp(e)), this._parser.registerCsiHandler({ final: "T" }, (e) => this.scrollDown(e)), this._parser.registerCsiHandler({ final: "X" }, (e) => this.eraseChars(e)), this._parser.registerCsiHandler({ final: "Z" }, (e) => this.cursorBackwardTab(e)), this._parser.registerCsiHandler({ final: "^" }, (e) => this.scrollDown(e)), this._parser.registerCsiHandler({ final: "`" }, (e) => this.charPosAbsolute(e)), this._parser.registerCsiHandler({ final: "a" }, (e) => this.hPositionRelative(e)), this._parser.registerCsiHandler({ final: "b" }, (e) => this.repeatPrecedingCharacter(e)), this._parser.registerCsiHandler({ final: "c" }, (e) => this.sendDeviceAttributesPrimary(e)), this._parser.registerCsiHandler({
			prefix: ">",
			final: "c"
		}, (e) => this.sendDeviceAttributesSecondary(e)), this._parser.registerCsiHandler({ final: "d" }, (e) => this.linePosAbsolute(e)), this._parser.registerCsiHandler({ final: "e" }, (e) => this.vPositionRelative(e)), this._parser.registerCsiHandler({ final: "f" }, (e) => this.hVPosition(e)), this._parser.registerCsiHandler({ final: "g" }, (e) => this.tabClear(e)), this._parser.registerCsiHandler({ final: "h" }, (e) => this.setMode(e)), this._parser.registerCsiHandler({
			prefix: "?",
			final: "h"
		}, (e) => this.setModePrivate(e)), this._parser.registerCsiHandler({ final: "l" }, (e) => this.resetMode(e)), this._parser.registerCsiHandler({
			prefix: "?",
			final: "l"
		}, (e) => this.resetModePrivate(e)), this._parser.registerCsiHandler({ final: "m" }, (e) => this.charAttributes(e)), this._parser.registerCsiHandler({ final: "n" }, (e) => this.deviceStatus(e)), this._parser.registerCsiHandler({
			prefix: "?",
			final: "n"
		}, (e) => this.deviceStatusPrivate(e)), this._parser.registerCsiHandler({
			intermediates: "!",
			final: "p"
		}, (e) => this.softReset(e)), this._parser.registerCsiHandler({
			prefix: ">",
			final: "q"
		}, (e) => this.sendXtVersion(e)), this._parser.registerCsiHandler({
			intermediates: " ",
			final: "q"
		}, (e) => this.setCursorStyle(e)), this._parser.registerCsiHandler({ final: "r" }, (e) => this.setScrollRegion(e)), this._parser.registerCsiHandler({ final: "s" }, (e) => this.saveCursor(e)), this._parser.registerCsiHandler({ final: "t" }, (e) => this.windowOptions(e)), this._parser.registerCsiHandler({ final: "u" }, (e) => this.restoreCursor(e)), this._parser.registerCsiHandler({
			intermediates: "'",
			final: "}"
		}, (e) => this.insertColumns(e)), this._parser.registerCsiHandler({
			intermediates: "'",
			final: "~"
		}, (e) => this.deleteColumns(e)), this._parser.registerCsiHandler({
			intermediates: "\"",
			final: "q"
		}, (e) => this.selectProtected(e)), this._parser.registerCsiHandler({
			intermediates: "$",
			final: "p"
		}, (e) => this.requestMode(e, !0)), this._parser.registerCsiHandler({
			prefix: "?",
			intermediates: "$",
			final: "p"
		}, (e) => this.requestMode(e, !1)), this._parser.registerCsiHandler({
			prefix: "=",
			final: "u"
		}, (e) => this.kittyKeyboardSet(e)), this._parser.registerCsiHandler({
			prefix: "?",
			final: "u"
		}, (e) => this.kittyKeyboardQuery(e)), this._parser.registerCsiHandler({
			prefix: ">",
			final: "u"
		}, (e) => this.kittyKeyboardPush(e)), this._parser.registerCsiHandler({
			prefix: "<",
			final: "u"
		}, (e) => this.kittyKeyboardPop(e)), this._parser.setExecuteHandler("\x07", () => this.bell()), this._parser.setExecuteHandler("\n", () => this.lineFeed()), this._parser.setExecuteHandler("\v", () => this.lineFeed()), this._parser.setExecuteHandler("\f", () => this.lineFeed()), this._parser.setExecuteHandler("\r", () => this.carriageReturn()), this._parser.setExecuteHandler("\b", () => this.backspace()), this._parser.setExecuteHandler("	", () => this.tab()), this._parser.setExecuteHandler("", () => this.shiftOut()), this._parser.setExecuteHandler("", () => this.shiftIn()), this._parser.setExecuteHandler("", () => this.index()), this._parser.setExecuteHandler("", () => this.nextLine()), this._parser.setExecuteHandler("", () => this.tabSet()), this._parser.registerOscHandler(0, new se((e) => (this.setTitle(e), this.setIconName(e), !0))), this._parser.registerOscHandler(1, new se((e) => this.setIconName(e))), this._parser.registerOscHandler(2, new se((e) => this.setTitle(e))), this._parser.registerOscHandler(4, new se((e) => this.setOrReportIndexedColor(e))), this._parser.registerOscHandler(8, new se((e) => this.setHyperlink(e))), this._parser.registerOscHandler(10, new se((e) => this.setOrReportFgColor(e))), this._parser.registerOscHandler(11, new se((e) => this.setOrReportBgColor(e))), this._parser.registerOscHandler(12, new se((e) => this.setOrReportCursorColor(e))), this._parser.registerOscHandler(104, new se((e) => this.restoreIndexedColor(e))), this._parser.registerOscHandler(110, new se((e) => this.restoreFgColor(e))), this._parser.registerOscHandler(111, new se((e) => this.restoreBgColor(e))), this._parser.registerOscHandler(112, new se((e) => this.restoreCursorColor(e))), this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()), this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()), this._parser.registerEscHandler({ final: "D" }, () => this.index()), this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()), this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()), this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()), this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()), this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()), this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()), this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)), this._parser.registerEscHandler({
			intermediates: "%",
			final: "@"
		}, () => this.selectDefaultCharset()), this._parser.registerEscHandler({
			intermediates: "%",
			final: "G"
		}, () => this.selectDefaultCharset()), $) this._parser.registerEscHandler({
			intermediates: "(",
			final: T
		}, () => this.selectCharset("(" + T)), this._parser.registerEscHandler({
			intermediates: ")",
			final: T
		}, () => this.selectCharset(")" + T)), this._parser.registerEscHandler({
			intermediates: "*",
			final: T
		}, () => this.selectCharset("*" + T)), this._parser.registerEscHandler({
			intermediates: "+",
			final: T
		}, () => this.selectCharset("+" + T)), this._parser.registerEscHandler({
			intermediates: "-",
			final: T
		}, () => this.selectCharset("-" + T)), this._parser.registerEscHandler({
			intermediates: ".",
			final: T
		}, () => this.selectCharset("." + T)), this._parser.registerEscHandler({
			intermediates: "/",
			final: T
		}, () => this.selectCharset("/" + T));
		this._parser.registerEscHandler({
			intermediates: "#",
			final: "8"
		}, () => this.screenAlignmentPattern()), this._parser.setErrorHandler((e) => (this._logService.error("Parsing error: ", e), e)), this._parser.registerDcsHandler({
			intermediates: "$",
			final: "q"
		}, new ai((e, t) => this.requestStatusString(e, t)));
	}
	getAttrData() {
		return this._curAttrData;
	}
	_preserveStack(e, t, n, r) {
		this._parseStack.paused = !0, this._parseStack.cursorStartX = e, this._parseStack.cursorStartY = t, this._parseStack.decodedLength = n, this._parseStack.position = r;
	}
	_logSlowResolvingAsync(e) {
		if (this._logService.logLevel <= 3) {
			let t, n = new Promise((e, n) => {
				t = setTimeout(() => n("#SLOW_TIMEOUT"), 5e3);
			});
			Promise.race([e, n]).then(() => {
				t !== void 0 && clearTimeout(t);
			}, (e) => {
				if (t !== void 0 && clearTimeout(t), e !== "#SLOW_TIMEOUT") throw e;
				console.warn("async parser handler taking longer than 5000 ms");
			});
		}
	}
	_getCurrentLinkId() {
		return this._curAttrData.extended.urlId;
	}
	parse(e, t) {
		let n, r = this._activeBuffer.x, i = this._activeBuffer.y, o = 0, s = this._parseStack.paused;
		if (s) {
			if (n = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t)) return this._logSlowResolvingAsync(n), n;
			r = this._parseStack.cursorStartX, i = this._parseStack.cursorStartY, this._parseStack.paused = !1, e.length > 131072 && (o = this._parseStack.position + 131072);
		}
		if (this._logService.logLevel <= 1 && this._logService.debug(`parsing data ${typeof e == "string" ? ` "${e}"` : ` "${Array.prototype.map.call(e, (e) => String.fromCharCode(e)).join("")}"`}`), this._logService.logLevel === 0 && this._logService.trace("parsing data (codes)", typeof e == "string" ? e.split("").map((e) => e.charCodeAt(0)) : e), this._parseBuffer.length < e.length && this._parseBuffer.length < 131072 && (this._parseBuffer = new Uint32Array(Math.min(e.length, 131072))), s || this._dirtyRowTracker.clearRange(), e.length > 131072) for (let t = o; t < e.length; t += 131072) {
			let o = t + 131072 < e.length ? t + 131072 : e.length, s = typeof e == "string" ? this._stringDecoder.decode(e.substring(t, o), this._parseBuffer) : this._utf8Decoder.decode(e.subarray(t, o), this._parseBuffer);
			if (n = this._parser.parse(this._parseBuffer, s)) return this._preserveStack(r, i, s, t), this._logSlowResolvingAsync(n), n;
		}
		else if (!s) {
			let t = typeof e == "string" ? this._stringDecoder.decode(e, this._parseBuffer) : this._utf8Decoder.decode(e, this._parseBuffer);
			if (n = this._parser.parse(this._parseBuffer, t)) return this._preserveStack(r, i, t, 0), this._logSlowResolvingAsync(n), n;
		}
		(this._activeBuffer.x !== r || this._activeBuffer.y !== i) && this._onCursorMove.fire();
		let p = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp), S = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
		S < this._bufferService.rows && this._onRequestRefreshRows.fire({
			start: Math.min(S, this._bufferService.rows - 1),
			end: Math.min(p, this._bufferService.rows - 1)
		});
	}
	print(e, t, n) {
		let r, i, o = this._charsetService.charset, s = this._optionsService.rawOptions.screenReaderMode, p = this._bufferService.cols, S = this._coreService.decPrivateModes.wraparound, T = this._coreService.modes.insertMode, k = this._curAttrData, A = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
		if (!A) return;
		this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && n - t > 0 && A.getWidth(this._activeBuffer.x - 1) === 2 && A.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, k);
		let Sl = this._parser.precedingJoinState;
		for (let Cl = t; Cl < n; ++Cl) {
			if (r = e[Cl], r === 173) continue;
			if (r < 127 && o) {
				let e = o[String.fromCharCode(r)];
				e && (r = e.charCodeAt(0));
			}
			let t = this._unicodeService.charProperties(r, Sl);
			i = me.extractWidth(t);
			let n = me.extractShouldJoin(t), wl = n ? me.extractWidth(Sl) : 0;
			Sl = t, s && this._onA11yChar.fire(be(r));
			let Tl = this._getCurrentLinkId();
			if (Tl && this._oscLinkService.addLineToLink(Tl, this._activeBuffer.ybase + this._activeBuffer.y), this._activeBuffer.x + i - wl > p) {
				if (S) {
					let e = A, t = this._activeBuffer.x - wl;
					if (this._activeBuffer.x = wl, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), !0)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !0), A = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y), !A) return;
					for (wl > 0 && A instanceof Re && A.copyCellsFrom(e, t, 0, wl, !1); t < p;) e.setCellFromCodepoint(t++, 0, 1, k);
				} else if (this._activeBuffer.x = p - 1, i === 2) continue;
			}
			if (n && this._activeBuffer.x) {
				let e = A.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
				A.addCodepointToCell(this._activeBuffer.x - e, r, i);
				for (let e = i - wl; --e >= 0;) A.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, k);
				continue;
			}
			if (T && (A.insertCells(this._activeBuffer.x, i - wl, this._activeBuffer.getNullCell(k)), A.getWidth(p - 1) === 2 && A.setCellFromCodepoint(p - 1, 0, 1, k)), A.setCellFromCodepoint(this._activeBuffer.x++, r, i, k), i > 0) for (; --i;) A.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, k);
		}
		this._parser.precedingJoinState = Sl, this._activeBuffer.x < p && n - t > 0 && A.getWidth(this._activeBuffer.x) === 0 && !A.hasContent(this._activeBuffer.x) && A.setCellFromCodepoint(this._activeBuffer.x, 0, 1, k), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
	}
	registerCsiHandler(e, t) {
		return e.final === "t" && !e.prefix && !e.intermediates ? this._parser.registerCsiHandler(e, (e) => yn(e.params[0], this._optionsService.rawOptions.windowOptions) ? t(e) : !0) : this._parser.registerCsiHandler(e, t);
	}
	registerDcsHandler(e, t) {
		return this._parser.registerDcsHandler(e, new ai(t));
	}
	registerEscHandler(e, t) {
		return this._parser.registerEscHandler(e, t);
	}
	registerOscHandler(e, t) {
		return this._parser.registerOscHandler(e, new se(t));
	}
	registerApcHandler(e, t) {
		return this._parser.registerApcHandler(e, new dr(t));
	}
	bell() {
		return this._onRequestBell.fire(), !0;
	}
	lineFeed() {
		return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows ? this._activeBuffer.y = this._bufferService.rows - 1 : this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1, this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), !0;
	}
	carriageReturn() {
		return this._activeBuffer.x = 0, !0;
	}
	backspace() {
		if (!this._coreService.decPrivateModes.reverseWraparound) return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, !0;
		if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0) this._activeBuffer.x--;
		else if (this._activeBuffer.x === 0 && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped) {
			this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
			let e = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
			e.hasWidth(this._activeBuffer.x) && !e.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
		}
		return this._restrictCursor(), !0;
	}
	tab() {
		if (this._activeBuffer.x >= this._bufferService.cols) return !0;
		let e = this._activeBuffer.x;
		return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e), !0;
	}
	shiftOut() {
		return this._charsetService.setgLevel(1), !0;
	}
	shiftIn() {
		return this._charsetService.setgLevel(0), !0;
	}
	_restrictCursor(e = this._bufferService.cols - 1) {
		this._activeBuffer.x = Math.min(e, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
	}
	_setCursor(e, t) {
		this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e, this._activeBuffer.y = this._activeBuffer.scrollTop + t) : (this._activeBuffer.x = e, this._activeBuffer.y = t), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
	}
	_moveCursor(e, t) {
		this._restrictCursor(), this._setCursor(this._activeBuffer.x + e, this._activeBuffer.y + t);
	}
	cursorUp(e) {
		let t = this._activeBuffer.y - this._activeBuffer.scrollTop;
		return t >= 0 ? this._moveCursor(0, -Math.min(t, e.params[0] || 1)) : this._moveCursor(0, -(e.params[0] || 1)), !0;
	}
	cursorDown(e) {
		let t = this._activeBuffer.scrollBottom - this._activeBuffer.y;
		return t >= 0 ? this._moveCursor(0, Math.min(t, e.params[0] || 1)) : this._moveCursor(0, e.params[0] || 1), !0;
	}
	cursorForward(e) {
		return this._moveCursor(e.params[0] || 1, 0), !0;
	}
	cursorBackward(e) {
		return this._moveCursor(-(e.params[0] || 1), 0), !0;
	}
	cursorNextLine(e) {
		return this.cursorDown(e), this._activeBuffer.x = 0, !0;
	}
	cursorPrecedingLine(e) {
		return this.cursorUp(e), this._activeBuffer.x = 0, !0;
	}
	cursorCharAbsolute(e) {
		return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), !0;
	}
	cursorPosition(e) {
		return this._setCursor(e.length >= 2 ? (e.params[1] || 1) - 1 : 0, (e.params[0] || 1) - 1), !0;
	}
	charPosAbsolute(e) {
		return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), !0;
	}
	hPositionRelative(e) {
		return this._moveCursor(e.params[0] || 1, 0), !0;
	}
	linePosAbsolute(e) {
		return this._setCursor(this._activeBuffer.x, (e.params[0] || 1) - 1), !0;
	}
	vPositionRelative(e) {
		return this._moveCursor(0, e.params[0] || 1), !0;
	}
	hVPosition(e) {
		return this.cursorPosition(e), !0;
	}
	tabClear(e) {
		let t = e.params[0];
		return t === 0 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : t === 3 && (this._activeBuffer.tabs = {}), !0;
	}
	cursorForwardTab(e) {
		if (this._activeBuffer.x >= this._bufferService.cols) return !0;
		let t = e.params[0] || 1;
		for (; t--;) this._activeBuffer.x = this._activeBuffer.nextStop();
		return !0;
	}
	cursorBackwardTab(e) {
		if (this._activeBuffer.x >= this._bufferService.cols) return !0;
		let t = e.params[0] || 1;
		for (; t--;) this._activeBuffer.x = this._activeBuffer.prevStop();
		return !0;
	}
	selectProtected(e) {
		let t = e.params[0];
		return t === 1 && (this._curAttrData.bg |= 536870912), (t === 2 || t === 0) && (this._curAttrData.bg &= -536870913), !0;
	}
	_eraseInBufferLine(e, t, n, r = !1, i = !1) {
		let o = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
		o && (o.replaceCells(t, n, this._activeBuffer.getNullCell(this._eraseAttrData()), i), r && (o.isWrapped = !1));
	}
	_resetBufferLine(e, t = !1) {
		let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
		n && (n.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), t), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e), n.isWrapped = !1);
	}
	eraseInDisplay(e, t = !1) {
		this._restrictCursor(this._bufferService.cols);
		let n;
		switch (e.params[0]) {
			case 0:
				for (n = this._activeBuffer.y, this._dirtyRowTracker.markDirty(n), this._eraseInBufferLine(n++, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, t); n < this._bufferService.rows; n++) this._resetBufferLine(n, t);
				this._dirtyRowTracker.markDirty(n);
				break;
			case 1:
				if (n = this._activeBuffer.y, this._dirtyRowTracker.markDirty(n), this._eraseInBufferLine(n, 0, this._activeBuffer.x + 1, !0, t), this._activeBuffer.x + 1 >= this._bufferService.cols) {
					let e = this._activeBuffer.lines.get(n + 1);
					e && (e.isWrapped = !1);
				}
				for (; n--;) this._resetBufferLine(n, t);
				this._dirtyRowTracker.markDirty(0);
				break;
			case 2:
				if (this._optionsService.rawOptions.scrollOnEraseInDisplay) {
					for (n = this._bufferService.rows, this._dirtyRowTracker.markRangeDirty(0, n - 1); n-- && !this._activeBuffer.lines.get(this._activeBuffer.ybase + n)?.getTrimmedLength(););
					for (; n >= 0; n--) this._bufferService.scroll(this._eraseAttrData());
				} else {
					for (n = this._bufferService.rows, this._dirtyRowTracker.markDirty(n - 1); n--;) this._resetBufferLine(n, t);
					this._dirtyRowTracker.markDirty(0);
				}
				break;
			case 3:
				let e = this._activeBuffer.lines.length - this._bufferService.rows;
				e > 0 && (this._activeBuffer.lines.trimStart(e), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - e, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - e, 0), this._activeBuffer === this._bufferService.buffers.normal && (this._bufferService.isUserScrolling = !1), this._onScroll.fire(0));
				break;
		}
		return !0;
	}
	eraseInLine(e, t = !1) {
		switch (this._restrictCursor(this._bufferService.cols), e.params[0]) {
			case 0:
				this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, t);
				break;
			case 1:
				this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, !1, t);
				break;
			case 2:
				this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, !0, t);
				break;
		}
		return this._dirtyRowTracker.markDirty(this._activeBuffer.y), !0;
	}
	insertLines(e) {
		this._restrictCursor();
		let t = e.params[0] || 1;
		if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
		let n = this._activeBuffer.ybase + this._activeBuffer.y, r = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, i = this._bufferService.rows - 1 + this._activeBuffer.ybase - r + 1;
		for (; t--;) this._activeBuffer.lines.splice(i - 1, 1), this._activeBuffer.lines.splice(n, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
		return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
	}
	deleteLines(e) {
		this._restrictCursor();
		let t = e.params[0] || 1;
		if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
		let n = this._activeBuffer.ybase + this._activeBuffer.y, r;
		for (r = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r = this._bufferService.rows - 1 + this._activeBuffer.ybase - r; t--;) this._activeBuffer.lines.splice(n, 1), this._activeBuffer.lines.splice(r, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
		return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
	}
	insertChars(e) {
		this._restrictCursor();
		let t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
		return t && (t.insertCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), !0;
	}
	deleteChars(e) {
		this._restrictCursor();
		let t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
		return t && (t.deleteCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), !0;
	}
	scrollUp(e) {
		let t = e.params[0] || 1;
		for (; t--;) this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
		return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
	}
	scrollDown(e) {
		let t = e.params[0] || 1;
		for (; t--;) this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(U));
		return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
	}
	scrollLeft(e) {
		if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
		let t = e.params[0] || 1;
		for (let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e) {
			let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
			n.deleteCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData())), n.isWrapped = !1;
		}
		return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
	}
	scrollRight(e) {
		if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
		let t = e.params[0] || 1;
		for (let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e) {
			let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
			n.insertCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData())), n.isWrapped = !1;
		}
		return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
	}
	insertColumns(e) {
		if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
		let t = e.params[0] || 1;
		for (let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e) {
			let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
			n.insertCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData())), n.isWrapped = !1;
		}
		return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
	}
	deleteColumns(e) {
		if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
		let t = e.params[0] || 1;
		for (let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e) {
			let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
			n.deleteCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData())), n.isWrapped = !1;
		}
		return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
	}
	eraseChars(e) {
		this._restrictCursor();
		let t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
		return t && (t.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData())), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), !0;
	}
	repeatPrecedingCharacter(e) {
		let t = this._parser.precedingJoinState;
		if (!t) return !0;
		let n = e.params[0] || 1, r = me.extractWidth(t), i = this._activeBuffer.x - r, o = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(i), s = new Uint32Array(o.length * n), p = 0;
		for (let e = 0; e < o.length;) {
			let t = o.codePointAt(e) || 0;
			s[p++] = t, e += t > 65535 ? 2 : 1;
		}
		let S = p;
		for (let e = 1; e < n; ++e) s.copyWithin(S, 0, p), S += p;
		return this.print(s, 0, S), !0;
	}
	sendDeviceAttributesPrimary(e) {
		return e.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent("\x1B[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent("\x1B[?6c")), !0;
	}
	sendDeviceAttributesSecondary(e) {
		return e.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent("\x1B[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent("\x1B[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent("\x1B[>83;40003;0c")), !0;
	}
	sendXtVersion(e) {
		return e.params[0] > 0 || this._coreService.triggerDataEvent(`\x1BP>|xterm.js(${En})\x1B\\`), !0;
	}
	_is(e) {
		return (this._optionsService.rawOptions.termName + "").startsWith(e);
	}
	setMode(e) {
		for (let t = 0; t < e.length; t++) switch (e.params[t]) {
			case 4:
				this._coreService.modes.insertMode = !0;
				break;
			case 20:
				this._optionsService.options.convertEol = !0;
				break;
		}
		return !0;
	}
	setModePrivate(e) {
		for (let t = 0; t < e.length; t++) switch (e.params[t]) {
			case 1:
				this._coreService.decPrivateModes.applicationCursorKeys = !0;
				break;
			case 2:
				this._charsetService.setgCharset(0, Le), this._charsetService.setgCharset(1, Le), this._charsetService.setgCharset(2, Le), this._charsetService.setgCharset(3, Le);
				break;
			case 3:
				this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
				break;
			case 6:
				this._coreService.decPrivateModes.origin = !0, this._setCursor(0, 0);
				break;
			case 7:
				this._coreService.decPrivateModes.wraparound = !0;
				break;
			case 12:
				this._optionsService.rawOptions.quirks?.allowSetCursorBlink && (this._optionsService.options.cursorBlink = !0);
				break;
			case 45:
				this._coreService.decPrivateModes.reverseWraparound = !0;
				break;
			case 66:
				this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire();
				break;
			case 9:
				this._mouseStateService.activeProtocol = "X10";
				break;
			case 1e3:
				this._mouseStateService.activeProtocol = "VT200";
				break;
			case 1002:
				this._mouseStateService.activeProtocol = "DRAG";
				break;
			case 1003:
				this._mouseStateService.activeProtocol = "ANY";
				break;
			case 1004:
				this._coreService.decPrivateModes.sendFocus = !0, this._onRequestSendFocus.fire();
				break;
			case 1005:
				this._logService.debug("DECSET 1005 not supported (see #2507)");
				break;
			case 1006:
				this._mouseStateService.activeEncoding = "SGR";
				break;
			case 1015:
				this._logService.debug("DECSET 1015 not supported (see #2507)");
				break;
			case 1016:
				this._mouseStateService.activeEncoding = "SGR_PIXELS";
				break;
			case 25:
				this._coreService.isCursorHidden = !1;
				break;
			case 1048:
				this.saveCursor();
				break;
			case 1049: this.saveCursor();
			case 47:
			case 1047:
				if (this._optionsService.rawOptions.vtExtensions?.kittyKeyboard) {
					let e = this._coreService.kittyKeyboard;
					e.mainFlags = e.flags, e.flags = e.altFlags;
				}
				this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(void 0), this._onRequestSyncScrollBar.fire();
				break;
			case 2004:
				this._coreService.decPrivateModes.bracketedPasteMode = !0;
				break;
			case 2026:
				this._coreService.decPrivateModes.synchronizedOutput = !0;
				break;
			case 2031:
				(this._optionsService.rawOptions.vtExtensions?.colorSchemeQuery ?? !0) && (this._coreService.decPrivateModes.colorSchemeUpdates = !0);
				break;
			case 9001:
				this._optionsService.rawOptions.vtExtensions?.win32InputMode && (this._coreService.decPrivateModes.win32InputMode = !0);
				break;
		}
		return !0;
	}
	resetMode(e) {
		for (let t = 0; t < e.length; t++) switch (e.params[t]) {
			case 4:
				this._coreService.modes.insertMode = !1;
				break;
			case 20:
				this._optionsService.options.convertEol = !1;
				break;
		}
		return !0;
	}
	resetModePrivate(e) {
		for (let t = 0; t < e.length; t++) switch (e.params[t]) {
			case 1:
				this._coreService.decPrivateModes.applicationCursorKeys = !1;
				break;
			case 3:
				this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
				break;
			case 6:
				this._coreService.decPrivateModes.origin = !1, this._setCursor(0, 0);
				break;
			case 7:
				this._coreService.decPrivateModes.wraparound = !1;
				break;
			case 12:
				this._optionsService.rawOptions.quirks?.allowSetCursorBlink && (this._optionsService.options.cursorBlink = !1);
				break;
			case 45:
				this._coreService.decPrivateModes.reverseWraparound = !1;
				break;
			case 66:
				this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire();
				break;
			case 9:
			case 1e3:
			case 1002:
			case 1003:
				this._mouseStateService.activeProtocol = "NONE";
				break;
			case 1004:
				this._coreService.decPrivateModes.sendFocus = !1;
				break;
			case 1005:
				this._logService.debug("DECRST 1005 not supported (see #2507)");
				break;
			case 1006:
				this._mouseStateService.activeEncoding = "DEFAULT";
				break;
			case 1015:
				this._logService.debug("DECRST 1015 not supported (see #2507)");
				break;
			case 1016:
				this._mouseStateService.activeEncoding = "DEFAULT";
				break;
			case 25:
				this._coreService.isCursorHidden = !0;
				break;
			case 1048:
				this.restoreCursor();
				break;
			case 1049:
			case 47:
			case 1047:
				if (this._optionsService.rawOptions.vtExtensions?.kittyKeyboard) {
					let e = this._coreService.kittyKeyboard;
					e.altFlags = e.flags, e.flags = e.mainFlags;
				}
				this._bufferService.buffers.activateNormalBuffer(), e.params[t] === 1049 && this.restoreCursor(), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(void 0), this._onRequestSyncScrollBar.fire();
				break;
			case 2004:
				this._coreService.decPrivateModes.bracketedPasteMode = !1;
				break;
			case 2026:
				this._coreService.decPrivateModes.synchronizedOutput = !1, this._onRequestRefreshRows.fire(void 0);
				break;
			case 2031:
				(this._optionsService.rawOptions.vtExtensions?.colorSchemeQuery ?? !0) && (this._coreService.decPrivateModes.colorSchemeUpdates = !1);
				break;
			case 9001:
				this._optionsService.rawOptions.vtExtensions?.win32InputMode && (this._coreService.decPrivateModes.win32InputMode = !1);
				break;
		}
		return !0;
	}
	requestMode(e, t) {
		let n;
		((e) => (e[e.NOT_RECOGNIZED = 0] = "NOT_RECOGNIZED", e[e.SET = 1] = "SET", e[e.RESET = 2] = "RESET", e[e.PERMANENTLY_SET = 3] = "PERMANENTLY_SET", e[e.PERMANENTLY_RESET = 4] = "PERMANENTLY_RESET"))(n ||= {});
		let r = this._coreService.decPrivateModes, { activeProtocol: i, activeEncoding: o } = this._mouseStateService, s = this._coreService, { buffers: p, cols: S } = this._bufferService, { active: T, alt: k } = p, A = this._optionsService.rawOptions, Sl = (e, n) => (s.triggerDataEvent(`\x1B[${t ? "" : "?"}${e};${n}$y`), !0), Cl = (e) => e ? 1 : 2, wl = e.params[0];
		return t ? wl === 2 ? Sl(wl, 4) : wl === 4 ? Sl(wl, Cl(s.modes.insertMode)) : wl === 12 ? Sl(wl, 3) : wl === 20 ? Sl(wl, Cl(A.convertEol)) : Sl(wl, 0) : wl === 1 ? Sl(wl, Cl(r.applicationCursorKeys)) : wl === 3 ? Sl(wl, A.windowOptions.setWinLines ? S === 80 ? 2 : S === 132 ? 1 : 0 : 0) : wl === 6 ? Sl(wl, Cl(r.origin)) : wl === 7 ? Sl(wl, Cl(r.wraparound)) : wl === 8 ? Sl(wl, 3) : wl === 9 ? Sl(wl, Cl(i === "X10")) : wl === 12 ? Sl(wl, Cl(A.cursorBlink)) : wl === 25 ? Sl(wl, Cl(!s.isCursorHidden)) : wl === 45 ? Sl(wl, Cl(r.reverseWraparound)) : wl === 66 ? Sl(wl, Cl(r.applicationKeypad)) : wl === 67 ? Sl(wl, 4) : wl === 1e3 ? Sl(wl, Cl(i === "VT200")) : wl === 1002 ? Sl(wl, Cl(i === "DRAG")) : wl === 1003 ? Sl(wl, Cl(i === "ANY")) : wl === 1004 ? Sl(wl, Cl(r.sendFocus)) : wl === 1005 ? Sl(wl, 4) : wl === 1006 ? Sl(wl, Cl(o === "SGR")) : wl === 1015 ? Sl(wl, 4) : wl === 1016 ? Sl(wl, Cl(o === "SGR_PIXELS")) : wl === 1048 ? Sl(wl, 1) : wl === 47 || wl === 1047 || wl === 1049 ? Sl(wl, Cl(T === k)) : wl === 2004 ? Sl(wl, Cl(r.bracketedPasteMode)) : wl === 2026 ? Sl(wl, Cl(r.synchronizedOutput)) : wl === 9001 && this._optionsService.rawOptions.vtExtensions?.win32InputMode ? Sl(wl, Cl(r.win32InputMode)) : Sl(wl, 0);
	}
	_updateAttrColor(e, t, n, r, i) {
		return t === 2 ? (e |= 50331648, e &= -16777216, e |= fe.fromColorRGB([
			n,
			r,
			i
		])) : t === 5 && (e &= -67108864, e |= 33554432 | n & 255), e;
	}
	_extractColor(e, t, n) {
		let r = [
			0,
			0,
			-1,
			0,
			0,
			0
		], i = 0, o = 0;
		do {
			if (r[o + i] = e.params[t + o], e.hasSubParams(t + o)) {
				let n = e.getSubParams(t + o), s = 0;
				do
					r[1] === 5 && (i = 1), r[o + s + 1 + i] = n[s];
				while (++s < n.length && s + o + 1 + i < r.length);
				break;
			}
			if (r[1] === 5 && o + i >= 2 || r[1] === 2 && o + i >= 5) break;
			r[1] && (i = 1);
		} while (++o + t < e.length && o + i < r.length);
		for (let e = 2; e < r.length; ++e) r[e] === -1 && (r[e] = 0);
		switch (r[0]) {
			case 38:
				n.fg = this._updateAttrColor(n.fg, r[1], r[3], r[4], r[5]);
				break;
			case 48:
				n.bg = this._updateAttrColor(n.bg, r[1], r[3], r[4], r[5]);
				break;
			case 58: n.extended = n.extended.clone(), n.extended.underlineColor = this._updateAttrColor(n.extended.underlineColor, r[1], r[3], r[4], r[5]);
		}
		return o;
	}
	_processUnderline(e, t) {
		t.extended = t.extended.clone(), (!~e || e > 5) && (e = 1), t.extended.underlineStyle = e, t.fg |= 268435456, e === 0 && (t.fg &= -268435457), t.updateExtended();
	}
	_processSGR0(e) {
		e.fg = U.fg, e.bg = U.bg, e.extended = e.extended.clone(), e.extended.underlineStyle = 0, e.extended.underlineColor &= -67108864, e.updateExtended();
	}
	charAttributes(e) {
		if (e.length === 1 && e.params[0] === 0) return this._processSGR0(this._curAttrData), !0;
		let t = e.length, n, r = this._curAttrData;
		for (let i = 0; i < t; i++) n = e.params[i], n >= 30 && n <= 37 ? (r.fg &= -67108864, r.fg |= 16777216 | n - 30) : n >= 40 && n <= 47 ? (r.bg &= -67108864, r.bg |= 16777216 | n - 40) : n >= 90 && n <= 97 ? (r.fg &= -67108864, r.fg |= n - 90 | 16777224) : n >= 100 && n <= 107 ? (r.bg &= -67108864, r.bg |= n - 100 | 16777224) : n === 0 ? this._processSGR0(r) : n === 1 ? r.fg |= 134217728 : n === 3 ? r.bg |= 67108864 : n === 4 ? (r.fg |= 268435456, this._processUnderline(e.hasSubParams(i) ? e.getSubParams(i)[0] : 1, r)) : n === 5 ? r.fg |= 536870912 : n === 7 ? r.fg |= 67108864 : n === 8 ? r.fg |= 1073741824 : n === 9 ? r.fg |= 2147483648 : n === 2 ? r.bg |= 134217728 : n === 21 ? this._processUnderline(2, r) : n === 22 ? (r.fg &= -134217729, r.bg &= -134217729) : n === 23 ? r.bg &= -67108865 : n === 24 ? (r.fg &= -268435457, this._processUnderline(0, r)) : n === 25 ? r.fg &= -536870913 : n === 27 ? r.fg &= -67108865 : n === 28 ? r.fg &= -1073741825 : n === 29 ? r.fg &= 2147483647 : n === 39 ? (r.fg &= -67108864, r.fg |= U.fg & 16777215) : n === 49 ? (r.bg &= -67108864, r.bg |= U.bg & 16777215) : n === 38 || n === 48 || n === 58 ? i += this._extractColor(e, i, r) : n === 53 ? r.bg |= 1073741824 : n === 55 ? r.bg &= -1073741825 : n === 221 && (this._optionsService.rawOptions.vtExtensions?.kittySgrBoldFaintControl ?? !0) ? r.fg &= -134217729 : n === 222 && (this._optionsService.rawOptions.vtExtensions?.kittySgrBoldFaintControl ?? !0) ? r.bg &= -134217729 : n === 59 ? (r.extended = r.extended.clone(), r.extended.underlineColor = -1, r.updateExtended()) : this._logService.debug("Unknown SGR attribute: %d.", n);
		return !0;
	}
	deviceStatus(e) {
		switch (e.params[0]) {
			case 5:
				this._coreService.triggerDataEvent("\x1B[0n");
				break;
			case 6:
				let e = this._activeBuffer.y + 1, t = this._activeBuffer.x + 1;
				this._coreService.triggerDataEvent(`\x1B[${e};${t}R`);
				break;
		}
		return !0;
	}
	deviceStatusPrivate(e) {
		switch (e.params[0]) {
			case 6:
				let e = this._activeBuffer.y + 1, t = this._activeBuffer.x + 1;
				this._coreService.triggerDataEvent(`\x1B[?${e};${t}R`);
				break;
			case 15: break;
			case 25: break;
			case 26: break;
			case 53: break;
			case 996:
				(this._optionsService.rawOptions.vtExtensions?.colorSchemeQuery ?? !0) && this._onRequestColorSchemeQuery.fire();
				break;
		}
		return !0;
	}
	softReset(e) {
		return this._coreService.isCursorHidden = !1, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = U.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = !1, !0;
	}
	setCursorStyle(e) {
		let t = e.length === 0 ? 1 : e.params[0];
		if (t === 0) this._coreService.decPrivateModes.cursorStyle = void 0, this._coreService.decPrivateModes.cursorBlink = void 0;
		else {
			switch (t) {
				case 1:
				case 2:
					this._coreService.decPrivateModes.cursorStyle = "block";
					break;
				case 3:
				case 4:
					this._coreService.decPrivateModes.cursorStyle = "underline";
					break;
				case 5:
				case 6:
					this._coreService.decPrivateModes.cursorStyle = "bar";
					break;
			}
			let e = t % 2 == 1;
			this._coreService.decPrivateModes.cursorBlink = e;
		}
		return !0;
	}
	setScrollRegion(e) {
		let t = e.params[0] || 1, n;
		return (e.length < 2 || (n = e.params[1]) > this._bufferService.rows || n === 0) && (n = this._bufferService.rows), n > t && (this._activeBuffer.scrollTop = t - 1, this._activeBuffer.scrollBottom = n - 1, this._setCursor(0, 0)), !0;
	}
	windowOptions(e) {
		if (!yn(e.params[0], this._optionsService.rawOptions.windowOptions)) return !0;
		let t = e.length > 1 ? e.params[1] : 0;
		switch (e.params[0]) {
			case 14:
				t !== 2 && this._onRequestWindowsOptionsReport.fire(0);
				break;
			case 16:
				this._onRequestWindowsOptionsReport.fire(1);
				break;
			case 18:
				this._bufferService && this._coreService.triggerDataEvent(`\x1B[8;${this._bufferService.rows};${this._bufferService.cols}t`);
				break;
			case 22:
				(t === 0 || t === 2) && (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), (t === 0 || t === 1) && (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
				break;
			case 23:
				(t === 0 || t === 2) && this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), (t === 0 || t === 1) && this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
				break;
		}
		return !0;
	}
	saveCursor(e) {
		return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._activeBuffer.savedCharsets = this._charsetService.charsets.slice(), this._activeBuffer.savedGlevel = this._charsetService.glevel, this._activeBuffer.savedOriginMode = this._coreService.decPrivateModes.origin, this._activeBuffer.savedWraparoundMode = this._coreService.decPrivateModes.wraparound, !0;
	}
	restoreCursor(e) {
		this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg;
		for (let e = 0; e < this._activeBuffer.savedCharsets.length; e++) this._charsetService.setgCharset(e, this._activeBuffer.savedCharsets[e]);
		return this._charsetService.setgLevel(this._activeBuffer.savedGlevel), this._coreService.decPrivateModes.origin = this._activeBuffer.savedOriginMode, this._coreService.decPrivateModes.wraparound = this._activeBuffer.savedWraparoundMode, this._restrictCursor(), !0;
	}
	setTitle(e) {
		return this._windowTitle = e, this._onTitleChange.fire(e), !0;
	}
	setIconName(e) {
		return this._iconName = e, !0;
	}
	setOrReportIndexedColor(e) {
		let t = [], n = e.split(";");
		for (; n.length > 1;) {
			let e = n.shift(), r = n.shift();
			if (/^\d+$/.exec(e)) {
				let n = parseInt(e, 10);
				if (wn(n)) if (r === "?") t.push({
					type: 0,
					index: n
				});
				else {
					let e = Es(r);
					e && t.push({
						type: 1,
						index: n,
						color: e
					});
				}
			}
		}
		return t.length && this._onColor.fire(t), !0;
	}
	setHyperlink(e) {
		let t = e.indexOf(";");
		if (t === -1) return !0;
		let n = e.slice(0, t).trim(), r = e.slice(t + 1);
		return r ? this._createHyperlink(n, r) : n.trim() ? !1 : this._finishHyperlink();
	}
	_createHyperlink(e, t) {
		this._getCurrentLinkId() && this._finishHyperlink();
		let n = e.split(":"), r, i = n.findIndex((e) => e.startsWith("id="));
		return i !== -1 && (r = n[i].slice(3) || void 0), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({
			id: r,
			uri: t
		}), this._curAttrData.updateExtended(), !0;
	}
	_finishHyperlink() {
		return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), !0;
	}
	_setOrReportSpecialColor(e, t) {
		let n = e.split(";");
		for (let e = 0; e < n.length && !(t >= this._specialColors.length); ++e, ++t) if (n[e] === "?") this._onColor.fire([{
			type: 0,
			index: this._specialColors[t]
		}]);
		else {
			let r = Es(n[e]);
			r && this._onColor.fire([{
				type: 1,
				index: this._specialColors[t],
				color: r
			}]);
		}
		return !0;
	}
	setOrReportFgColor(e) {
		return this._setOrReportSpecialColor(e, 0);
	}
	setOrReportBgColor(e) {
		return this._setOrReportSpecialColor(e, 1);
	}
	setOrReportCursorColor(e) {
		return this._setOrReportSpecialColor(e, 2);
	}
	restoreIndexedColor(e) {
		if (!e) return this._onColor.fire([{ type: 2 }]), !0;
		let t = [], n = e.split(";");
		for (let e = 0; e < n.length; ++e) if (/^\d+$/.exec(n[e])) {
			let r = parseInt(n[e], 10);
			wn(r) && t.push({
				type: 2,
				index: r
			});
		}
		return t.length && this._onColor.fire(t), !0;
	}
	restoreFgColor(e) {
		return this._onColor.fire([{
			type: 2,
			index: 256
		}]), !0;
	}
	restoreBgColor(e) {
		return this._onColor.fire([{
			type: 2,
			index: 257
		}]), !0;
	}
	restoreCursorColor(e) {
		return this._onColor.fire([{
			type: 2,
			index: 258
		}]), !0;
	}
	nextLine() {
		return this._activeBuffer.x = 0, this.index(), !0;
	}
	keypadApplicationMode() {
		return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire(), !0;
	}
	keypadNumericMode() {
		return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire(), !0;
	}
	selectDefaultCharset() {
		return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, Le), !0;
	}
	selectCharset(e) {
		return e.length === 2 ? (e[0] === "/" || this._charsetService.setgCharset(yo[e[0]], $[e[1]] ?? Le), !0) : (this.selectDefaultCharset(), !0);
	}
	index() {
		return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), !0;
	}
	tabSet() {
		return this._activeBuffer.tabs[this._activeBuffer.x] = !0, !0;
	}
	reverseIndex() {
		if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
			let e = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
			this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
		} else this._activeBuffer.y--, this._restrictCursor();
		return !0;
	}
	fullReset() {
		return this._parser.reset(), this._onRequestReset.fire(), !0;
	}
	reset() {
		this._curAttrData = U.clone(), this._eraseAttrDataInternal = U.clone();
	}
	_eraseAttrData() {
		return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= this._curAttrData.bg & 67108863, this._eraseAttrDataInternal;
	}
	setgLevel(e) {
		return this._charsetService.setgLevel(e), !0;
	}
	screenAlignmentPattern() {
		let e = new F();
		e.content = 4194373, e.fg = this._curAttrData.fg, e.bg = this._curAttrData.bg, this._setCursor(0, 0);
		for (let t = 0; t < this._bufferService.rows; ++t) {
			let n = this._activeBuffer.ybase + this._activeBuffer.y + t, r = this._activeBuffer.lines.get(n);
			r && (r.fill(e), r.isWrapped = !1);
		}
		return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), !0;
	}
	requestStatusString(e, t) {
		let n = (e) => (this._coreService.triggerDataEvent(`\x1B${e}\x1B\\`), !0), r = this._bufferService.buffer, i = this._optionsService.rawOptions;
		return n(e === "\"q" ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : e === "\"p" ? "P1$r61;1\"p" : e === "r" ? `P1$r${r.scrollTop + 1};${r.scrollBottom + 1}r` : e === "m" ? "P1$r0m" : e === " q" ? `P1$r${{
			block: 2,
			underline: 4,
			bar: 6
		}[i.cursorStyle] - (i.cursorBlink ? 1 : 0)} q` : "P0$r");
	}
	markRangeDirty(e, t) {
		this._dirtyRowTracker.markRangeDirty(e, t);
	}
	kittyKeyboardSet(e) {
		if (!this._optionsService.rawOptions.vtExtensions?.kittyKeyboard) return !0;
		let t = e.params[0] || 0, n = e.length > 1 && e.params[1] || 1, r = this._coreService.kittyKeyboard;
		switch (n) {
			case 1:
				r.flags = t;
				break;
			case 2:
				r.flags |= t;
				break;
			case 3:
				r.flags &= ~t;
				break;
		}
		return !0;
	}
	kittyKeyboardQuery(e) {
		if (!this._optionsService.rawOptions.vtExtensions?.kittyKeyboard) return !0;
		let t = this._coreService.kittyKeyboard.flags;
		return this._coreService.triggerDataEvent(`\x1B[?${t}u`), !0;
	}
	kittyKeyboardPush(e) {
		if (!this._optionsService.rawOptions.vtExtensions?.kittyKeyboard) return !0;
		let t = e.params[0] || 0, n = this._coreService.kittyKeyboard, r = this._bufferService.buffer === this._bufferService.buffers.alt ? n.altStack : n.mainStack;
		return r.length >= 16 && r.shift(), r.push(n.flags), n.flags = t, !0;
	}
	kittyKeyboardPop(e) {
		if (!this._optionsService.rawOptions.vtExtensions?.kittyKeyboard) return !0;
		let t = Math.max(1, e.params[0] || 1), n = this._coreService.kittyKeyboard, r = this._bufferService.buffer === this._bufferService.buffers.alt ? n.altStack : n.mainStack;
		for (let e = 0; e < t && r.length > 0; e++) n.flags = r.pop();
		return r.length === 0 && t > 0 && (n.flags = 0), !0;
	}
}, ci = class {
	constructor(e) {
		this._bufferService = e, this.clearRange();
	}
	clearRange() {
		this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
	}
	markDirty(e) {
		e < this.start ? this.start = e : e > this.end && (this.end = e);
	}
	markRangeDirty(e, t) {
		e > t && (xn = e, e = t, t = xn), e < this.start && (this.start = e), t > this.end && (this.end = t);
	}
	markAllDirty() {
		this.markRangeDirty(0, this._bufferService.rows - 1);
	}
};
ci = y([m(0, D)], ci);
function wn(e) {
	return 0 <= e && e < 256;
}
var pr = class extends g {
	constructor(e) {
		super(), this._action = e, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = !1, this._syncCalls = 0, this._didUserInput = !1, this._innerWriteTimer = this._register(new Ce()), this._onWriteParsed = this._register(new b()), this.onWriteParsed = this._onWriteParsed.event, this._register(E(() => {
			this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0;
		}));
	}
	handleUserInput() {
		this._didUserInput = !0;
	}
	flushSync() {
		if (this._store.isDisposed || this._isSyncWriting) return;
		this._isSyncWriting = !0;
		let e, t = !1;
		for (; e = this._writeBuffer.shift();) {
			t = !0, this._action(e);
			let n = this._callbacks.shift();
			n && n();
		}
		this._pendingData = 0, this._bufferOffset = 2147483647, this._writeBuffer.length = 0, this._callbacks.length = 0, this._isSyncWriting = !1, t && this._onWriteParsed.fire();
	}
	writeSync(e, t) {
		if (this._store.isDisposed) return;
		if (t !== void 0 && this._syncCalls > t) {
			this._syncCalls = 0;
			return;
		}
		if (this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(void 0), this._syncCalls++, this._isSyncWriting) return;
		this._isSyncWriting = !0;
		let n;
		for (; n = this._writeBuffer.shift();) {
			this._action(n);
			let e = this._callbacks.shift();
			e && e();
		}
		this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = !1, this._syncCalls = 0;
	}
	write(e, t) {
		if (!this._store.isDisposed) {
			if (this._pendingData > 5e7) throw Error("write data discarded, use flow control to avoid losing data");
			if (!this._writeBuffer.length) {
				if (this._bufferOffset = 0, this._didUserInput) {
					this._didUserInput = !1, this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(t), this._innerWrite();
					return;
				}
				this._scheduleInnerWrite();
			}
			this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(t);
		}
	}
	_scheduleInnerWrite(e = 0, t = !0) {
		this._store.isDisposed || this._innerWriteTimer.cancelAndSet(() => this._innerWrite(e, t), 0);
	}
	_innerWrite(e = 0, t = !0) {
		if (this._store.isDisposed) return;
		let n = e || performance.now();
		for (; this._writeBuffer.length > this._bufferOffset;) {
			let e = this._writeBuffer[this._bufferOffset], r = this._action(e, t);
			if (r) {
				r.catch((e) => (queueMicrotask(() => {
					throw e;
				}), Promise.resolve(!1))).then((e) => {
					this._store.isDisposed || (performance.now() - n >= 12 ? this._scheduleInnerWrite(0, e) : this._innerWrite(n, e));
				});
				return;
			}
			let i = this._callbacks[this._bufferOffset];
			if (i && i(), this._bufferOffset++, this._pendingData -= e.length, performance.now() - n >= 12) break;
		}
		this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), this._scheduleInnerWrite()) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
	}
}, kt = class {
	constructor(e) {
		this._bufferService = e, this._nextId = 1, this._entriesWithId = /* @__PURE__ */ new Map(), this._dataByLinkId = /* @__PURE__ */ new Map();
	}
	registerLink(e) {
		let t = this._bufferService.buffer;
		if (e.id === void 0) {
			let n = t.addMarker(t.ybase + t.y), r = {
				data: e,
				id: this._nextId++,
				lines: [n]
			};
			return n.onDispose(() => this._removeMarkerFromLink(r, n)), this._dataByLinkId.set(r.id, r), r.id;
		}
		let n = e, r = this._getEntryIdKey(n), i = this._entriesWithId.get(r);
		if (i) return this.addLineToLink(i.id, t.ybase + t.y), i.id;
		let o = t.addMarker(t.ybase + t.y), s = {
			id: this._nextId++,
			key: this._getEntryIdKey(n),
			data: n,
			lines: [o]
		};
		return o.onDispose(() => this._removeMarkerFromLink(s, o)), this._entriesWithId.set(s.key, s), this._dataByLinkId.set(s.id, s), s.id;
	}
	addLineToLink(e, t) {
		let n = this._dataByLinkId.get(e);
		if (n && n.lines.every((e) => e.line !== t)) {
			let e = this._bufferService.buffer.addMarker(t);
			n.lines.push(e), e.onDispose(() => this._removeMarkerFromLink(n, e));
		}
	}
	getLinkData(e) {
		return this._dataByLinkId.get(e)?.data;
	}
	_getEntryIdKey(e) {
		return `${e.id};;${e.uri}`;
	}
	_removeMarkerFromLink(e, t) {
		let n = e.lines.indexOf(t);
		n !== -1 && (e.lines.splice(n, 1), e.lines.length === 0 && (e.data.id !== void 0 && this._entriesWithId.delete(e.key), this._dataByLinkId.delete(e.id)));
	}
};
kt = y([m(0, D)], kt);
var Tn = !1, mr = class extends g {
	constructor(e) {
		super(), this._windowsWrappingHeuristics = this._register(new B()), this._onBinary = this._register(new b()), this.onBinary = this._onBinary.event, this._onData = this._register(new b()), this.onData = this._onData.event, this._onLineFeed = this._register(new b()), this.onLineFeed = this._onLineFeed.event, this._onRender = this._register(new b()), this.onRender = this._onRender.event, this._onResize = this._register(new b()), this.onResize = this._onResize.event, this._onWriteParsed = this._register(new b()), this.onWriteParsed = this._onWriteParsed.event, this._onScroll = this._register(new b()), this._instantiationService = new Zi(), this.optionsService = this._register(new ir(e)), this._instantiationService.setService(R, this.optionsService), this._logService = this._register(this._instantiationService.createInstance(wt)), this._instantiationService.setService(_e, this._logService), this._bufferService = this._register(this._instantiationService.createInstance(Dt)), this._instantiationService.setService(D, this._bufferService), this.coreService = this._register(this._instantiationService.createInstance(Lt)), this._instantiationService.setService(X, this.coreService), this.mouseStateService = this._register(this._instantiationService.createInstance(rr)), this._instantiationService.setService(Me, this.mouseStateService), this.unicodeService = this._register(this._instantiationService.createInstance(me)), this.unicodeService.register(new sr()), this._instantiationService.setService(Ws, this.unicodeService), this._charsetService = this._instantiationService.createInstance(nr), this._instantiationService.setService(Hs, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(kt), this._instantiationService.setService(bi, this._oscLinkService), this._inputHandler = this._register(new _r(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.mouseStateService, this.unicodeService)), this._register(Y.forward(this._inputHandler.onLineFeed, this._onLineFeed)), this._register(Y.forward(this._bufferService.onResize, this._onResize)), this._register(Y.forward(this.coreService.onData, this._onData)), this._register(Y.forward(this.coreService.onBinary, this._onBinary)), this._register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom(!0))), this._register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())), this._register(this.optionsService.onMultipleOptionChange(["windowsPty"], () => this._handleWindowsPtyOptionChange())), this._register(this._bufferService.onScroll(() => {
			this._onScroll.fire({ position: this._bufferService.buffer.ydisp }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
		})), this._writeBuffer = this._register(new pr((e, t) => this._inputHandler.parse(e, t))), this._register(Y.forward(this._writeBuffer.onWriteParsed, this._onWriteParsed));
	}
	get onScroll() {
		return this._onScrollApi || (this._onScrollApi = this._register(new b()), this._onScroll.event((e) => {
			this._onScrollApi?.fire(e.position);
		})), this._onScrollApi.event;
	}
	get cols() {
		return this._bufferService.cols;
	}
	get rows() {
		return this._bufferService.rows;
	}
	get buffers() {
		return this._bufferService.buffers;
	}
	get options() {
		return this.optionsService.options;
	}
	set options(e) {
		for (let t in e) this.optionsService.options[t] = e[t];
	}
	write(e, t) {
		this._writeBuffer.write(e, t);
	}
	writeSync(e, t) {
		this._logService.logLevel <= 3 && !Tn && (this._logService.warn("writeSync is unreliable and will be removed soon."), Tn = !0), this._writeBuffer.writeSync(e, t);
	}
	input(e, t = !0) {
		this.coreService.triggerDataEvent(e, t);
	}
	resize(e, t) {
		isNaN(e) || isNaN(t) || (e = Math.max(e, 2), t = Math.max(t, 1), this._writeBuffer.flushSync(), this._bufferService.resize(e, t));
	}
	scroll(e, t = !1) {
		this._bufferService.scroll(e, t);
	}
	scrollLines(e, t) {
		this._bufferService.scrollLines(e, t);
	}
	scrollPages(e) {
		this.scrollLines(e * (this.rows - 1));
	}
	scrollToTop() {
		this.scrollLines(-this._bufferService.buffer.ydisp);
	}
	scrollToBottom(e) {
		this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
	}
	scrollToLine(e) {
		let t = e - this._bufferService.buffer.ydisp;
		t !== 0 && this.scrollLines(t);
	}
	registerEscHandler(e, t) {
		return this._inputHandler.registerEscHandler(e, t);
	}
	registerDcsHandler(e, t) {
		return this._inputHandler.registerDcsHandler(e, t);
	}
	registerCsiHandler(e, t) {
		return this._inputHandler.registerCsiHandler(e, t);
	}
	registerOscHandler(e, t) {
		return this._inputHandler.registerOscHandler(e, t);
	}
	registerApcHandler(e, t) {
		return this._inputHandler.registerApcHandler(e, t);
	}
	_setup() {
		this._handleWindowsPtyOptionChange();
	}
	reset() {
		this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.mouseStateService.reset();
	}
	_handleWindowsPtyOptionChange() {
		let e = !1, t = this.optionsService.rawOptions.windowsPty;
		t && t.backend !== void 0 && t.buildNumber !== void 0 && (e = t.backend === "conpty" && t.buildNumber < 21376), e ? this._enableWindowsWrappingHeuristics() : this._windowsWrappingHeuristics.clear();
	}
	_enableWindowsWrappingHeuristics() {
		if (!this._windowsWrappingHeuristics.value) {
			let e = [];
			e.push(this.onLineFeed(Ss.bind(null, this._bufferService))), e.push(this.registerCsiHandler({ final: "H" }, () => (Ss(this._bufferService), !1))), this._windowsWrappingHeuristics.value = E(() => {
				for (let t of e) t.dispose();
			});
		}
	}
}, ce = 0, br = class {
	constructor(e, t) {
		this._getKey = e, this._array = [], this._insertedValues = [], this._isFlushingInserted = !1, this._deletedIndices = /* @__PURE__ */ new Set(), this._indicesByValue = /* @__PURE__ */ new Map(), this._isFlushingDeleted = !1, this._flushInsertedTask = new Ct(t), this._flushDeletedTask = new Ct(t);
	}
	clear() {
		this._array.length = 0, this._indicesByValue.clear(), this._insertedValues.length = 0, this._flushInsertedTask.clear(), this._isFlushingInserted = !1, this._deletedIndices.clear(), this._flushDeletedTask.clear(), this._isFlushingDeleted = !1;
	}
	insert(e) {
		this._flushCleanupDeleted(), this._insertedValues.length === 0 && this._flushInsertedTask.enqueue(() => this._flushInserted()), this._insertedValues.push(e);
	}
	_flushInserted() {
		let e = this._insertedValues.sort((e, t) => this._getKey(e) - this._getKey(t)), t = 0, n = 0, r = Array(this._array.length + this._insertedValues.length);
		for (let i = 0; i < r.length; i++) n >= this._array.length || this._getKey(e[t]) <= this._getKey(this._array[n]) ? (r[i] = e[t], t++) : r[i] = this._array[n++];
		this._array = r, this._rebuildIdentityIndex(), this._insertedValues.length = 0;
	}
	_flushCleanupInserted() {
		!this._isFlushingInserted && this._insertedValues.length > 0 && this._flushInsertedTask.flush();
	}
	_rebuildIdentityIndex() {
		this._indicesByValue.clear();
		for (let e = this._array.length - 1; e >= 0; e--) {
			let t = this._array[e], n = this._indicesByValue.get(t);
			n === void 0 ? this._indicesByValue.set(t, e) : typeof n == "number" ? this._indicesByValue.set(t, [n, e]) : n.push(e);
		}
	}
	delete(e) {
		this._flushCleanupInserted();
		let t = this._indicesByValue.get(e);
		if (t === void 0) return !1;
		let n = typeof t == "number" ? t : t.pop();
		return n === void 0 ? !1 : ((typeof t == "number" || t.length === 0) && this._indicesByValue.delete(e), this._deletedIndices.size === 0 && this._flushDeletedTask.enqueue(() => this._flushDeleted()), this._deletedIndices.add(n), !0);
	}
	_flushDeleted() {
		this._isFlushingDeleted = !0;
		let e = Array(this._array.length - this._deletedIndices.size), t = 0;
		for (let n = 0; n < this._array.length; n++) this._deletedIndices.has(n) || (e[t++] = this._array[n]);
		this._array = e, this._rebuildIdentityIndex(), this._deletedIndices.clear(), this._isFlushingDeleted = !1;
	}
	_flushCleanupDeleted() {
		!this._isFlushingDeleted && this._deletedIndices.size > 0 && this._flushDeletedTask.flush();
	}
	*getKeyIterator(e) {
		if (this._flushCleanupInserted(), this._flushCleanupDeleted(), this._array.length !== 0 && (ce = this._search(e), !(ce < 0 || ce >= this._array.length) && this._getKey(this._array[ce]) === e)) do
			yield this._array[ce];
		while (++ce < this._array.length && this._getKey(this._array[ce]) === e);
	}
	forEachByKey(e, t) {
		if (this._flushCleanupInserted(), this._flushCleanupDeleted(), this._array.length !== 0 && (ce = this._search(e), !(ce < 0 || ce >= this._array.length) && this._getKey(this._array[ce]) === e)) do
			t(this._array[ce]);
		while (++ce < this._array.length && this._getKey(this._array[ce]) === e);
	}
	values() {
		return this._flushCleanupInserted(), this._flushCleanupDeleted(), [...this._array].values();
	}
	_search(e) {
		let t = 0, n = this._array.length - 1;
		for (; n >= t;) {
			let r = t + n >> 1, i = this._getKey(this._array[r]);
			if (i > e) n = r - 1;
			else if (i < e) t = r + 1;
			else {
				for (; r > 0 && this._getKey(this._array[r - 1]) === e;) r--;
				return r;
			}
		}
		return t;
	}
}, Pt = 0, vr = 0, Mt = class extends g {
	constructor(e, t) {
		super(), this._logService = e, this._bufferService = t, this._lineCache = this._register(new ys()), this._onDecorationRegistered = this._register(new b()), this.onDecorationRegistered = this._onDecorationRegistered.event, this._onDecorationRemoved = this._register(new b()), this.onDecorationRemoved = this._onDecorationRemoved.event, this._decorations = new br((e) => e?.marker.line, this._logService), this._register(E(() => this.reset())), this._register(this._bufferService.buffers.onBufferActivate(() => {
			this._lineCache.attachToBufferLines(this._bufferService.buffer.lines);
		})), this._lineCache.attachToBufferLines(this._bufferService.buffer.lines);
	}
	get decorations() {
		return this._decorations.values();
	}
	registerDecoration(e) {
		if (e.marker.isDisposed) return;
		let t = new xs(e);
		if (t) {
			let e = t.marker.onDispose(() => t.dispose()), n = t.onDispose(() => {
				n.dispose(), t && (this._decorations.delete(t) && (this._lineCache.remove(t), this._onDecorationRemoved.fire(t)), e.dispose());
			});
			this._decorations.insert(t), this._lineCache.add(t), this._onDecorationRegistered.fire(t);
		}
		return t;
	}
	reset() {
		for (let e of this._decorations.values()) e.dispose();
		this._decorations.clear(), this._lineCache.clear();
	}
	*getDecorationsAtCell(e, t, n) {
		let r = this._lineCache.getDecorationsOnLine(t);
		if (r) for (let t of r) Pt = t.options.x ?? 0, vr = Pt + (t.options.width ?? 1), e >= Pt && e < vr && (!n || (t.options.layer ?? "bottom") === n) && (yield t);
	}
	forEachDecorationAtCell(e, t, n, r) {
		let i = this._lineCache.getDecorationsOnLine(t);
		if (i) for (let t of i) Pt = t.options.x ?? 0, vr = Pt + (t.options.width ?? 1), e >= Pt && e < vr && (!n || (t.options.layer ?? "bottom") === n) && r(t);
	}
};
Mt = y([m(0, _e), m(1, D)], Mt);
var ys = class extends g {
	constructor() {
		super(...arguments), this._decorationsByLine = /* @__PURE__ */ new Map(), this._decorations = /* @__PURE__ */ new Set(), this._bufferLineListeners = this._register(new B()), this._lineIndexSyncTimer = this._register(new Ci()), this._lineIndexSyncCallbacks = [];
	}
	clear() {
		this._lineIndexSyncCallbacks.length = 0, this._lineIndexSyncTimer.cancel(), this._decorationsByLine.clear(), this._decorations.clear();
	}
	add(e) {
		this._decorations.add(e), this._addToLineBuckets(e);
	}
	remove(e) {
		this._decorations.delete(e), this._removeFromLineBuckets(e);
	}
	getDecorationsOnLine(e) {
		return this._decorationsByLine.get(e);
	}
	attachToBufferLines(e) {
		let t = new pe();
		this._bufferLineListeners.value = t, t.add(e.onTrim((e) => this._handleBufferLinesTrim(e))), t.add(e.onInsert((e) => this._handleBufferLinesInsert(e))), t.add(e.onDelete((e) => this._handleBufferLinesDelete(e)));
	}
	_getDecorationHeight(e) {
		return e.options.height ?? 1;
	}
	_addToLineBuckets(e) {
		let t = e.marker.line;
		if (t < 0) return;
		e._indexedStartLine = t;
		let n = this._getDecorationHeight(e);
		for (let r = t; r < t + n; r++) {
			let t = this._decorationsByLine.get(r);
			t || (t = [], this._decorationsByLine.set(r, t)), t.push(e);
		}
	}
	_removeFromLineBuckets(e) {
		let t = e._indexedStartLine, n = this._getDecorationHeight(e);
		for (let r = t; r < t + n; r++) {
			let t = this._decorationsByLine.get(r);
			if (!t) continue;
			let n = t.indexOf(e);
			n !== -1 && t.splice(n, 1), t.length === 0 && this._decorationsByLine.delete(r);
		}
	}
	_reindexDecoration(e) {
		this._removeFromLineBuckets(e), !e.marker.isDisposed && e.marker.line >= 0 && this._addToLineBuckets(e);
	}
	_scheduleLineIndexSync(e) {
		this._lineIndexSyncCallbacks.push(e), this._lineIndexSyncTimer.set(() => {
			let e = this._lineIndexSyncCallbacks;
			this._lineIndexSyncCallbacks = [];
			for (let t of e) t();
		});
	}
	_handleBufferLinesTrim(e) {
		if (e <= 0 || !this._decorationsByLine.size) return;
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of this._decorationsByLine) {
			let i = n - e;
			i < 0 || this._mergeLineBucket(t, i, r);
		}
		this._decorationsByLine.clear();
		for (let [e, n] of t) this._decorationsByLine.set(e, n);
		for (let t of this._decorations) t.marker.isDisposed || (t._indexedStartLine -= e);
	}
	_handleBufferLinesInsert(e) {
		this._scheduleLineIndexSync(() => this._applyBufferLinesInsert(e));
	}
	_handleBufferLinesDelete(e) {
		this._scheduleLineIndexSync(() => this._applyBufferLinesDelete(e));
	}
	_mergeLineBucket(e, t, n) {
		let r = e.get(t);
		if (r) for (let e = 0, t = n.length; e < t; e++) r.push(n[e]);
		else e.set(t, n.slice());
	}
	_applyBufferLinesInsert(e) {
		let { index: t, amount: n } = e, r = [];
		for (let e of this._decorations) {
			if (e.marker.isDisposed) continue;
			let n = e._indexedStartLine;
			n < t && n + this._getDecorationHeight(e) > t && (r.push(e), this._removeFromLineBuckets(e));
		}
		let i = /* @__PURE__ */ new Map();
		for (let [e, r] of this._decorationsByLine) {
			let o = e >= t ? e + n : e;
			this._mergeLineBucket(i, o, r);
		}
		this._decorationsByLine.clear();
		for (let [e, t] of i) this._decorationsByLine.set(e, t);
		for (let e of this._decorations) e.marker.isDisposed || e._indexedStartLine >= t && (e._indexedStartLine = e.marker.line);
		for (let e of r) this._addToLineBuckets(e);
	}
	_applyBufferLinesDelete(e) {
		let t = e.index + e.amount, n = /* @__PURE__ */ new Map();
		for (let [r, i] of this._decorationsByLine) {
			if (r >= e.index && r < t) continue;
			let o = r >= t ? r - e.amount : r;
			this._mergeLineBucket(n, o, i);
		}
		this._decorationsByLine.clear();
		for (let [e, t] of n) this._decorationsByLine.set(e, t);
		let r = [];
		for (let n of this._decorations) {
			if (n.marker.isDisposed) continue;
			let i = n._indexedStartLine, o = this._getDecorationHeight(n);
			i >= t ? n._indexedStartLine = n.marker.line : i < e.index && i + o > t && r.push(n);
		}
		for (let e of r) this._reindexDecoration(e);
	}
}, xs = class extends pe {
	constructor(e) {
		super(), this.options = e, this.onRenderEmitter = this.add(new b()), this.onRender = this.onRenderEmitter.event, this._onDispose = this.add(new b()), this.onDispose = this._onDispose.event, this._cachedBg = null, this._cachedFg = null, this.marker = e.marker, this._indexedStartLine = e.marker.line, this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position && (this.options.overviewRulerOptions.position = "full");
	}
	get backgroundColorRGB() {
		return this._cachedBg === null && (this.options.backgroundColor ? this._cachedBg = M.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
	}
	get foregroundColorRGB() {
		return this._cachedFg === null && (this.options.foregroundColor ? this._cachedFg = M.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
	}
	dispose() {
		this._onDispose.fire(), super.dispose();
	}
}, xo = 1e3, Sr = class {
	constructor(e, t = xo) {
		this._renderCallback = e, this._debounceThresholdMS = t, this._lastRefreshMs = 0, this._additionalRefreshRequested = !1;
	}
	dispose() {
		this._refreshTimeoutID &&= (clearTimeout(this._refreshTimeoutID), void 0), this._additionalRefreshRequested = !1;
	}
	refresh(e, t, n) {
		this._rowCount = n, e ??= 0, t ??= this._rowCount - 1, this._rowStart = this._rowStart === void 0 ? e : Math.min(this._rowStart, e), this._rowEnd = this._rowEnd === void 0 ? t : Math.max(this._rowEnd, t);
		let r = performance.now();
		if (r - this._lastRefreshMs >= this._debounceThresholdMS) this._refreshTimeoutID !== void 0 && (clearTimeout(this._refreshTimeoutID), this._refreshTimeoutID = void 0, this._additionalRefreshRequested = !1), this._lastRefreshMs = r, this._innerRefresh();
		else if (!this._additionalRefreshRequested) {
			let e = r - this._lastRefreshMs, t = this._debounceThresholdMS - e;
			this._additionalRefreshRequested = !0, this._refreshTimeoutID = window.setTimeout(() => {
				this._lastRefreshMs = performance.now(), this._innerRefresh(), this._additionalRefreshRequested = !1, this._refreshTimeoutID = void 0;
			}, t);
		}
	}
	_innerRefresh() {
		if (this._rowStart === void 0 || this._rowEnd === void 0 || this._rowCount === void 0) return;
		let e = Math.max(this._rowStart, 0), t = Math.min(this._rowEnd, this._rowCount - 1);
		this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e, t);
	}
}, Dn = !1, je = class extends g {
	constructor(e, t, n, r) {
		super(), this._terminal = e, this._coreBrowserService = n, this._renderService = r, this._rowColumns = /* @__PURE__ */ new WeakMap(), this._liveRegionLineCount = 0, this._charsToConsume = [], this._charsToAnnounce = "";
		let i = this._coreBrowserService.mainDocument;
		this._accessibilityContainer = i.createElement("div"), this._accessibilityContainer.classList.add("xterm-accessibility"), this._rowContainer = i.createElement("div"), this._rowContainer.setAttribute("role", "list"), this._rowContainer.classList.add("xterm-accessibility-tree"), this._rowElements = [];
		for (let e = 0; e < this._terminal.rows; e++) this._rowElements[e] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e]);
		if (this._topBoundaryFocusListener = (e) => this._handleBoundaryFocus(e, 0), this._bottomBoundaryFocusListener = (e) => this._handleBoundaryFocus(e, 1), this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._accessibilityContainer.appendChild(this._rowContainer), this._liveRegion = i.createElement("div"), this._liveRegion.classList.add("live-region"), this._liveRegion.setAttribute("aria-live", "assertive"), this._accessibilityContainer.appendChild(this._liveRegion), this._liveRegionDebouncer = this._register(new Sr(this._renderRows.bind(this))), !this._terminal.element) throw Error("Cannot enable accessibility before Terminal.open");
		Dn ? (this._accessibilityContainer.classList.add("debug"), this._rowContainer.classList.add("debug"), this._debugRootContainer = i.createElement("div"), this._debugRootContainer.classList.add("xterm"), this._debugRootContainer.appendChild(i.createTextNode("------start a11y------")), this._debugRootContainer.appendChild(this._accessibilityContainer), this._debugRootContainer.appendChild(i.createTextNode("------end a11y------")), this._terminal.element.insertAdjacentElement("afterend", this._debugRootContainer)) : this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityContainer), this._register(this._terminal.onResize((e) => this._handleResize(e.rows))), this._register(this._terminal.onRender((e) => this._refreshRows(e.start, e.end))), this._register(this._terminal.onScroll(() => this._refreshRows())), this._register(this._terminal.onA11yChar((e) => this._handleChar(e))), this._register(this._terminal.onLineFeed(() => this._handleChar("\n"))), this._register(this._terminal.onA11yTab((e) => this._handleTab(e))), this._register(this._terminal.onKey((e) => this._handleKey(e.key))), this._register(this._terminal.onBlur(() => this._clearLiveRegion())), this._register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions())), this._register(I(i, "selectionchange", () => this._handleSelectionChange())), this._register(this._coreBrowserService.onDprChange(() => this._refreshRowsDimensions())), this._refreshRowsDimensions(), this._refreshRows(), this._register(E(() => {
			Dn ? this._debugRootContainer.remove() : this._accessibilityContainer.remove(), this._rowElements.length = 0;
		}));
	}
	_handleTab(e) {
		for (let t = 0; t < e; t++) this._handleChar(" ");
	}
	_handleChar(e) {
		this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e && (this._charsToAnnounce += e) : this._charsToAnnounce += e, e === "\n" && (this._liveRegionLineCount++, this._liveRegionLineCount === 21 && (this._liveRegion.textContent = Je.get())));
	}
	_clearLiveRegion() {
		this._liveRegion.textContent = "", this._liveRegionLineCount = 0;
	}
	_handleKey(e) {
		this._clearLiveRegion(), /\p{Control}/u.test(e) || this._charsToConsume.push(e);
	}
	_refreshRows(e, t) {
		this._liveRegionDebouncer.refresh(e, t, this._terminal.rows);
	}
	_renderRows(e, t) {
		let n = this._terminal.buffer, r = n.lines.length.toString();
		for (let i = e; i <= t; i++) {
			let e = n.lines.get(n.ydisp + i), t = [], o = e?.translateToString(!0, void 0, void 0, t) || "", s = (n.ydisp + i + 1).toString(), p = this._rowElements[i];
			p && (o.length === 0 ? (p.textContent = "\xA0", this._rowColumns.set(p, [0, 1])) : (p.textContent = o, this._rowColumns.set(p, t)), p.setAttribute("aria-posinset", s), p.setAttribute("aria-setsize", r), this._alignRowWidth(p));
		}
		this._announceCharacters();
	}
	_announceCharacters() {
		this._charsToAnnounce.length !== 0 && (this._liveRegion.textContent === Je.get() && this._clearLiveRegion(), this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
	}
	_handleBoundaryFocus(e, t) {
		let n = e.target, r = this._rowElements[t === 0 ? 1 : this._rowElements.length - 2];
		if (n.getAttribute("aria-posinset") === (t === 0 ? "1" : `${this._terminal.buffer.lines.length}`) || e.relatedTarget !== r) return;
		let i, o;
		if (t === 0 ? (i = n, o = this._rowElements.pop(), this._rowContainer.removeChild(o)) : (i = this._rowElements.shift(), o = n, this._rowContainer.removeChild(i)), i.removeEventListener("focus", this._topBoundaryFocusListener), o.removeEventListener("focus", this._bottomBoundaryFocusListener), t === 0) {
			let e = this._createAccessibilityTreeNode();
			this._rowElements.unshift(e), this._rowContainer.insertAdjacentElement("afterbegin", e);
		} else {
			let e = this._createAccessibilityTreeNode();
			this._rowElements.push(e), this._rowContainer.appendChild(e);
		}
		this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(t === 0 ? -1 : 1), this._rowElements[t === 0 ? 1 : this._rowElements.length - 2].focus(), e.preventDefault(), e.stopImmediatePropagation();
	}
	_handleSelectionChange() {
		if (this._rowElements.length === 0) return;
		let e = this._coreBrowserService.mainDocument.getSelection();
		if (!e) return;
		if (e.isCollapsed) {
			this._rowContainer.contains(e.anchorNode) && this._terminal.clearSelection();
			return;
		}
		if (!e.anchorNode || !e.focusNode) {
			console.error("anchorNode and/or focusNode are null");
			return;
		}
		let t = {
			node: e.anchorNode,
			offset: e.anchorOffset
		}, n = {
			node: e.focusNode,
			offset: e.focusOffset
		};
		if ((t.node.compareDocumentPosition(n.node) & Node.DOCUMENT_POSITION_PRECEDING || t.node === n.node && t.offset > n.offset) && ([t, n] = [n, t]), t.node.compareDocumentPosition(this._rowElements[0]) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING) && (t = {
			node: this._rowElements[0].childNodes[0],
			offset: 0
		}), !this._rowContainer.contains(t.node)) return;
		let r = this._rowElements.slice(-1)[0];
		if (n.node.compareDocumentPosition(r) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_PRECEDING) && (n = {
			node: r,
			offset: r.textContent?.length ?? 0
		}), !this._rowContainer.contains(n.node)) return;
		let i = ({ node: e, offset: t }) => {
			let n = e instanceof Text ? e.parentNode : e, r = parseInt(n?.getAttribute("aria-posinset"), 10) - 1;
			if (isNaN(r)) return console.warn("row is invalid. Race condition?"), null;
			let i = this._rowColumns.get(n);
			if (!i) return console.warn("columns is null. Race condition?"), null;
			let o = t < i.length ? i[t] : i.slice(-1)[0] + 1;
			return o >= this._terminal.cols && (++r, o = 0), {
				row: r,
				column: o
			};
		}, o = i(t), s = i(n);
		if (!(!o || !s)) {
			if (o.row > s.row || o.row === s.row && o.column >= s.column) throw Error("invalid range");
			this._terminal.select(o.column, o.row, (s.row - o.row) * this._terminal.cols - o.column + s.column);
		}
	}
	_handleResize(e) {
		this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
		for (let e = this._rowContainer.children.length; e < this._terminal.rows; e++) this._rowElements[e] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e]);
		for (; this._rowElements.length > e;) this._rowContainer.removeChild(this._rowElements.pop());
		this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
	}
	_createAccessibilityTreeNode() {
		let e = this._coreBrowserService.mainDocument.createElement("div");
		return e.setAttribute("role", "listitem"), e.tabIndex = -1, this._refreshRowDimensions(e), e;
	}
	_refreshRowsDimensions() {
		if (this._renderService.dimensions.css.cell.height) {
			Object.assign(this._accessibilityContainer.style, {
				width: `${this._renderService.dimensions.css.canvas.width}px`,
				fontSize: `${this._terminal.options.fontSize}px`
			}), this._rowElements.length !== this._terminal.rows && this._handleResize(this._terminal.rows);
			for (let e = 0; e < this._terminal.rows; e++) this._refreshRowDimensions(this._rowElements[e]), this._alignRowWidth(this._rowElements[e]);
		}
	}
	_refreshRowDimensions(e) {
		e.style.height = `${this._renderService.dimensions.css.cell.height}px`;
	}
	_alignRowWidth(e) {
		e.style.transform = "";
		let t = e.getBoundingClientRect().width, n = this._rowColumns.get(e)?.slice(-1)?.[0];
		if (!n) return;
		let r = n * this._renderService.dimensions.css.cell.width;
		e.style.transform = `scaleX(${r / t})`;
	}
};
je = y([
	m(1, et),
	m(2, z),
	m(3, G)
], je);
var Bt = class extends g {
	constructor(e, t, n, r, i) {
		super(), this._element = e, this._mouseCoordsService = t, this._renderService = n, this._bufferService = r, this._linkProviderService = i, this._linkCacheDisposables = [], this._isMouseOut = !0, this._wasResized = !1, this._activeLine = -1, this._onShowLinkUnderline = this._register(new b()), this.onShowLinkUnderline = this._onShowLinkUnderline.event, this._onHideLinkUnderline = this._register(new b()), this.onHideLinkUnderline = this._onHideLinkUnderline.event, this._register(E(() => {
			Ne(this._linkCacheDisposables), this._linkCacheDisposables.length = 0, this._lastMouseEvent = void 0, this._activeProviderReplies?.clear();
		})), this._register(this._bufferService.onResize(() => {
			this._clearCurrentLink(), this._wasResized = !0;
		})), this._register(I(this._element, "mouseleave", () => {
			this._isMouseOut = !0, this._clearCurrentLink();
		})), this._register(I(this._element, "mousemove", this._handleMouseMove.bind(this))), this._register(I(this._element, "mousedown", this._handleMouseDown.bind(this))), this._register(I(this._element, "mouseup", this._handleMouseUp.bind(this)));
	}
	get currentLink() {
		return this._currentLink;
	}
	_handleMouseMove(e) {
		this._lastMouseEvent = e;
		let t = this._positionFromMouseEvent(e, this._element);
		if (!t) return;
		this._isMouseOut = !1;
		let n = e.composedPath();
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			if (t.classList.contains("xterm")) break;
			if (t.classList.contains("xterm-hover")) return;
		}
		(!this._lastBufferCell || t.x !== this._lastBufferCell.x || t.y !== this._lastBufferCell.y) && (this._handleHover(t), this._lastBufferCell = t);
	}
	_handleHover(e) {
		if (this._activeLine !== e.y || this._wasResized) {
			this._clearCurrentLink(), this._askForLink(e, !1), this._wasResized = !1;
			return;
		}
		this._currentLink && this._linkAtPosition(this._currentLink.link, e) || (this._clearCurrentLink(), this._askForLink(e, !0));
	}
	_askForLink(e, t) {
		(!this._activeProviderReplies || !t) && (this._activeProviderReplies?.forEach((e) => {
			e?.forEach((e) => {
				e.link.dispose && e.link.dispose();
			});
		}), this._activeProviderReplies = /* @__PURE__ */ new Map(), this._activeLine = e.y);
		let n = !1;
		for (let [r, i] of this._linkProviderService.linkProviders.entries()) t ? this._activeProviderReplies?.get(r) && (n = this._checkLinkProviderResult(r, e, n)) : i.provideLinks(e.y, (t) => {
			if (this._isMouseOut) return;
			let i = t?.map((e) => ({ link: e }));
			this._activeProviderReplies?.set(r, i), n = this._checkLinkProviderResult(r, e, n), this._activeProviderReplies?.size === this._linkProviderService.linkProviders.length && this._removeIntersectingLinks(e.y, this._activeProviderReplies);
		});
	}
	_removeIntersectingLinks(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let r = 0; r < t.size; r++) {
			let i = t.get(r);
			if (i) for (let t = 0; t < i.length; t++) {
				let r = i[t], o = r.link.range.start.y < e ? 0 : r.link.range.start.x, s = r.link.range.end.y > e ? this._bufferService.cols : r.link.range.end.x;
				for (let e = o; e <= s; e++) {
					if (n.has(e)) {
						i.splice(t--, 1);
						break;
					}
					n.add(e);
				}
			}
		}
	}
	_checkLinkProviderResult(e, t, n) {
		if (!this._activeProviderReplies) return n;
		let r = this._activeProviderReplies.get(e), i = !1;
		for (let t = 0; t < e; t++) (!this._activeProviderReplies.has(t) || this._activeProviderReplies.get(t)) && (i = !0);
		if (!i && r) {
			let e = r.find((e) => this._linkAtPosition(e.link, t));
			e && (n = !0, this._handleNewLink(e));
		}
		if (this._activeProviderReplies.size === this._linkProviderService.linkProviders.length && !n) for (let e = 0; e < this._activeProviderReplies.size; e++) {
			let r = this._activeProviderReplies.get(e)?.find((e) => this._linkAtPosition(e.link, t));
			if (r) {
				n = !0, this._handleNewLink(r);
				break;
			}
		}
		return n;
	}
	_handleMouseDown() {
		this._mouseDownLink = this._currentLink;
	}
	_handleMouseUp(e) {
		if (!this._currentLink) return;
		let t = this._positionFromMouseEvent(e, this._element);
		t && this._mouseDownLink && wo(this._mouseDownLink.link, this._currentLink.link) && this._linkAtPosition(this._currentLink.link, t) && this._currentLink.link.activate(e, this._currentLink.link.text);
	}
	_clearCurrentLink(e, t) {
		!this._currentLink || !this._lastMouseEvent || (!e || !t || this._currentLink.link.range.start.y >= e && this._currentLink.link.range.end.y <= t) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, Ne(this._linkCacheDisposables), this._linkCacheDisposables.length = 0);
	}
	_handleNewLink(e) {
		if (!this._lastMouseEvent) return;
		let t = this._positionFromMouseEvent(this._lastMouseEvent, this._element);
		t && this._linkAtPosition(e.link, t) && (this._currentLink = e, this._currentLink.state = {
			decorations: {
				underline: e.link.decorations === void 0 ? !0 : e.link.decorations.underline,
				pointerCursor: e.link.decorations === void 0 ? !0 : e.link.decorations.pointerCursor
			},
			isHovered: !0
		}, this._linkHover(this._element, e.link, this._lastMouseEvent), e.link.decorations = {}, Object.defineProperties(e.link.decorations, {
			pointerCursor: {
				get: () => this._currentLink?.state?.decorations.pointerCursor,
				set: (e) => {
					this._currentLink?.state && this._currentLink.state.decorations.pointerCursor !== e && (this._currentLink.state.decorations.pointerCursor = e, this._currentLink.state.isHovered && this._element.classList.toggle("xterm-cursor-pointer", e));
				}
			},
			underline: {
				get: () => this._currentLink?.state?.decorations.underline,
				set: (t) => {
					this._currentLink?.state && this._currentLink?.state?.decorations.underline !== t && (this._currentLink.state.decorations.underline = t, this._currentLink.state.isHovered && this._fireUnderlineEvent(e.link, t));
				}
			}
		}), this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((e) => {
			if (!this._currentLink) return;
			let t = e.start === 0 ? 0 : e.start + 1 + this._bufferService.buffer.ydisp, n = this._bufferService.buffer.ydisp + 1 + e.end;
			if (this._currentLink.link.range.start.y >= t && this._currentLink.link.range.end.y <= n && (this._clearCurrentLink(t, n), this._lastMouseEvent)) {
				let e = this._positionFromMouseEvent(this._lastMouseEvent, this._element);
				e && this._askForLink(e, !1);
			}
		})));
	}
	_linkHover(e, t, n) {
		this._currentLink?.state && (this._currentLink.state.isHovered = !0, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !0), this._currentLink.state.decorations.pointerCursor && e.classList.add("xterm-cursor-pointer")), t.hover && t.hover(n, t.text);
	}
	_fireUnderlineEvent(e, t) {
		let n = e.range, r = this._bufferService.buffer.ydisp, i = this._createLinkUnderlineEvent(n.start.x - 1, n.start.y - r - 1, n.end.x, n.end.y - r - 1, void 0);
		(t ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(i);
	}
	_linkLeave(e, t, n) {
		this._currentLink?.state && (this._currentLink.state.isHovered = !1, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !1), this._currentLink.state.decorations.pointerCursor && e.classList.remove("xterm-cursor-pointer")), t.leave && t.leave(n, t.text);
	}
	_linkAtPosition(e, t) {
		let n = e.range.start.y * this._bufferService.cols + e.range.start.x, r = e.range.end.y * this._bufferService.cols + e.range.end.x, i = t.y * this._bufferService.cols + t.x;
		return n <= i && i <= r;
	}
	_positionFromMouseEvent(e, t) {
		let n = this._mouseCoordsService.getCoords(e, t, this._bufferService.cols, this._bufferService.rows);
		if (n) return {
			x: n[0],
			y: n[1] + this._bufferService.buffer.ydisp
		};
	}
	_createLinkUnderlineEvent(e, t, n, r, i) {
		return {
			x1: e,
			y1: t,
			x2: n,
			y2: r,
			cols: this._bufferService.cols,
			fg: i
		};
	}
};
Bt = y([
	m(1, Oe),
	m(2, G),
	m(3, D),
	m(4, gi)
], Bt);
function wo(e, t) {
	return e.text === t.text && e.range.start.x === t.range.start.x && e.range.start.y === t.range.start.y && e.range.end.x === t.range.end.x && e.range.end.y === t.range.end.y;
}
var gr = class extends mr {
	constructor(e = {}) {
		super(e), this._linkifier = this._register(new B()), this.browser = ze, this._keyDownHandled = !1, this._keyDownSeen = !1, this._keyPressHandled = !1, this._unprocessedDeadKey = !1, this._accessibilityManager = this._register(new B()), this._onCursorMove = this._register(new b()), this.onCursorMove = this._onCursorMove.event, this._onKey = this._register(new b()), this.onKey = this._onKey.event, this._onSelectionChange = this._register(new b()), this.onSelectionChange = this._onSelectionChange.event, this._onTitleChange = this._register(new b()), this.onTitleChange = this._onTitleChange.event, this._onBell = this._register(new b()), this.onBell = this._onBell.event, this._onFocus = this._register(new b()), this._onBlur = this._register(new b()), this._onA11yCharEmitter = this._register(new b()), this._onA11yTabEmitter = this._register(new b()), this._onWillOpen = this._register(new b()), this._onDimensionsChange = this._register(new b()), this.onDimensionsChange = this._onDimensionsChange.event, this._setup(), this._decorationService = this._instantiationService.createInstance(Mt), this._instantiationService.setService(ge, this._decorationService), this._keyboardService = this._instantiationService.createInstance(xt), this._instantiationService.setService(Ks, this._keyboardService), this._linkProviderService = this._instantiationService.createInstance(Ki), this._instantiationService.setService(gi, this._linkProviderService), this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(tt)), this._register(this._inputHandler.onRequestBell(() => this._onBell.fire())), this._register(this._inputHandler.onRequestRefreshRows((e) => this.refresh(e?.start ?? 0, e?.end ?? this.rows - 1))), this._register(this._inputHandler.onRequestSendFocus(() => this._reportFocus())), this._register(this._inputHandler.onRequestReset(() => this.reset())), this._register(this._inputHandler.onRequestWindowsOptionsReport((e) => this._reportWindowsOptions(e))), this._register(this._inputHandler.onColor((e) => this._handleColorEvent(e))), this._register(Y.forward(this._inputHandler.onCursorMove, this._onCursorMove)), this._register(Y.forward(this._inputHandler.onTitleChange, this._onTitleChange)), this._register(Y.forward(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this._register(Y.forward(this._inputHandler.onA11yTab, this._onA11yTabEmitter)), this._register(this._bufferService.onResize((e) => this._afterResize(e.cols, e.rows))), this._register(E(() => {
			this._customKeyEventHandler = void 0, this.element?.parentNode?.removeChild(this.element);
		}));
	}
	get linkifier() {
		return this._linkifier.value;
	}
	get onFocus() {
		return this._onFocus.event;
	}
	get onBlur() {
		return this._onBlur.event;
	}
	get onA11yChar() {
		return this._onA11yCharEmitter.event;
	}
	get onA11yTab() {
		return this._onA11yTabEmitter.event;
	}
	get onWillOpen() {
		return this._onWillOpen.event;
	}
	get dimensions() {
		if (!this._renderService) return;
		let e = this._renderService.dimensions;
		return {
			css: {
				canvas: { ...e.css.canvas },
				cell: { ...e.css.cell }
			},
			device: {
				canvas: { ...e.device.canvas },
				cell: { ...e.device.cell },
				char: { ...e.device.char }
			}
		};
	}
	_handleColorEvent(e) {
		if (this._themeService) for (let t of e) {
			let e, n;
			switch (t.index) {
				case 256:
					e = "foreground", n = "10";
					break;
				case 257:
					e = "background", n = "11";
					break;
				case 258:
					e = "cursor", n = "12";
					break;
				default: e = "ansi", n = "4;" + t.index;
			}
			switch (t.type) {
				case 0:
					let r = L.toColorRGB(e === "ansi" ? this._themeService.colors.ansi[t.index] : this._themeService.colors[e]);
					this.coreService.triggerDataEvent(`\x1B]${n};${In(r)}\x1B\\`);
					break;
				case 1:
					if (e === "ansi") this._themeService.modifyColors((e) => e.ansi[t.index] = O.toColor(...t.color));
					else {
						let n = e;
						this._themeService.modifyColors((e) => e[n] = O.toColor(...t.color));
					}
					break;
				case 2:
					this._themeService.restoreColor(t.index);
					break;
			}
		}
	}
	_reportColorScheme() {
		if (!this._themeService) return;
		let e = j.relativeLuminance(this._themeService.colors.background.rgba >> 8) < j.relativeLuminance(this._themeService.colors.foreground.rgba >> 8) ? 1 : 2;
		this.coreService.triggerDataEvent(`\x1B[?997;${e}n`);
	}
	_setup() {
		super._setup(), this._customKeyEventHandler = void 0;
	}
	get buffer() {
		return this.buffers.active;
	}
	focus() {
		this.textarea && this.textarea.focus({ preventScroll: !0 });
	}
	_handleScreenReaderModeOptionChange(e) {
		e ? !this._accessibilityManager.value && this._renderService && (this._accessibilityManager.value = this._instantiationService.createInstance(je, this)) : this._accessibilityManager.clear();
	}
	_handleTextAreaFocus(e) {
		this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent("\x1B[I"), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
	}
	blur() {
		return this.textarea?.blur();
	}
	_handleTextAreaBlur() {
		this._compositionHelper instanceof Ee && this._compositionHelper.blur(), this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent("\x1B[O"), this.element.classList.remove("focus"), this._onBlur.fire();
	}
	_syncTextArea() {
		if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService) return;
		let e = this.buffer.ybase + this.buffer.y, t = this.buffer.lines.get(e);
		if (!t) return;
		let n = Math.min(this.buffer.x, this.cols - 1), r = this._renderService.dimensions.css.cell.height, i = t.getWidth(n), o = this._renderService.dimensions.css.cell.width * i, s = this.buffer.y * this._renderService.dimensions.css.cell.height, p = n * this._renderService.dimensions.css.cell.width;
		this.textarea.style.left = p + "px", this.textarea.style.top = s + "px", this.textarea.style.width = o + "px", this.textarea.style.height = r + "px", this.textarea.style.lineHeight = r + "px", this.textarea.style.zIndex = "-5";
	}
	_initGlobal() {
		this._bindKeys(), this._register(I(this.element, "copy", (e) => {
			this.hasSelection() && Bs(e, this._selectionService);
		}));
		let e = (e) => Os(e, this.textarea, this.coreService, this.optionsService);
		this._register(I(this.textarea, "paste", e)), this._register(I(this.element, "paste", e)), ot ? this._register(I(this.element, "mousedown", (e) => {
			e.button === 2 && Or(e, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
		})) : this._register(I(this.element, "contextmenu", (e) => {
			Or(e, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
		})), zt && this._register(I(this.element, "auxclick", (e) => {
			e.button === 1 && Br(e, this.textarea, this.screenElement);
		}));
	}
	_bindKeys() {
		this._register(I(this.textarea, "keyup", (e) => this._keyUp(e), !0)), this._register(I(this.textarea, "keydown", (e) => this._keyDown(e), !0)), this._register(I(this.textarea, "keypress", (e) => this._keyPress(e), !0)), this._register(I(this.textarea, "compositionstart", () => {
			this._syncTextArea(), this._compositionHelper.compositionstart(), this._compositionHelper.updateCompositionElements();
		})), this._register(I(this.textarea, "compositionupdate", (e) => this._compositionHelper.compositionupdate(e))), this._register(I(this.textarea, "compositionend", (e) => {
			this._compositionHelper instanceof Ee ? this._compositionHelper.compositionend(e) && this.textarea.dispatchEvent(new CustomEvent("xterm-composition-transaction-accepted", { bubbles: !0 })) : this._compositionHelper.compositionend();
		})), this._register(I(this.textarea, "input", (e) => this._inputEvent(e), !0)), this._register(this.onRender(() => this._compositionHelper.updateCompositionElements()));
	}
	open(e) {
		if (!e) throw Error("Terminal requires a parent element.");
		if (e.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this.element?.ownerDocument.defaultView && this._coreBrowserService) {
			this.element.ownerDocument.defaultView !== this._coreBrowserService.window && (this._coreBrowserService.window = this.element.ownerDocument.defaultView);
			return;
		}
		this._document = e.ownerDocument, this.options.documentOverride && this.options.documentOverride instanceof Document && (this._document = this.optionsService.rawOptions.documentOverride), this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.classList.toggle("allow-transparency", this.options.allowTransparency), this._register(this.optionsService.onSpecificOptionChange("allowTransparency", (e) => this.element.classList.toggle("allow-transparency", e))), e.appendChild(this.element);
		let t = this._document.createDocumentFragment();
		this._viewportElement = this._document.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), t.appendChild(this._viewportElement), this.screenElement = this._document.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._register(I(this.screenElement, "mousemove", (e) => this.updateCursorStyle(e))), this._helperContainer = this._document.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), t.appendChild(this.screenElement);
		let n = this.textarea = this._document.createElement("textarea");
		this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", Ut.get()), $r || this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocomplete", "off"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this._register(this.optionsService.onSpecificOptionChange("disableStdin", () => n.readOnly = this.optionsService.rawOptions.disableStdin)), this.textarea.readOnly = this.optionsService.rawOptions.disableStdin, this._coreBrowserService = this._register(this._instantiationService.createInstance(Ui, this.textarea, e.ownerDocument.defaultView ?? window, this._document ?? (typeof window < "u" ? window.document : null))), this._instantiationService.setService(z, this._coreBrowserService), this._register(I(this.textarea, "focus", (e) => this._handleTextAreaFocus(e))), this._register(I(this.textarea, "blur", () => this._handleTextAreaBlur())), this._helperContainer.appendChild(this.textarea), this._charSizeService = this._instantiationService.createInstance(bt, this._document, this._helperContainer), this._instantiationService.setService(Be, this._charSizeService), this._themeService = this._instantiationService.createInstance(yt), this._instantiationService.setService(le, this._themeService), this._register(this._inputHandler.onRequestColorSchemeQuery(() => this._reportColorScheme())), this._register(this._themeService.onChangeColors(() => {
			this.coreService.decPrivateModes.colorSchemeUpdates && this._reportColorScheme();
		})), this._characterJoinerService = this._instantiationService.createInstance(We), this._instantiationService.setService(Si, this._characterJoinerService), this._renderService = this._register(this._instantiationService.createInstance(It, this.rows, this.screenElement)), this._instantiationService.setService(G, this._renderService), this._register(this._renderService.onRenderedViewportChange((e) => this._onRender.fire(e))), this._register(this._renderService.onDimensionsChange((e) => this._onDimensionsChange.fire({
			css: {
				canvas: { ...e.css.canvas },
				cell: { ...e.css.cell }
			},
			device: {
				canvas: { ...e.device.canvas },
				cell: { ...e.device.cell },
				char: { ...e.device.char }
			}
		}))), this.onResize((e) => this._renderService.resize(e.cols, e.rows)), this._compositionView = this._document.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(Ee, this.textarea, this._compositionView), this._register(E(() => {
			this._compositionHelper instanceof Ee && this._compositionHelper.dispose();
		})), this._helperContainer.appendChild(this._compositionView), this._mouseCoordsService = this._instantiationService.createInstance(vt), this._instantiationService.setService(Oe, this._mouseCoordsService);
		let r = this._linkifier.value = this._register(this._instantiationService.createInstance(Bt, this.screenElement));
		this.element.appendChild(t);
		try {
			this._onWillOpen.fire(this.element);
		} catch (e) {
			this._logService.error("onWillOpen handler threw an exception", e);
		}
		this._renderService.hasRenderer() || this._renderService.setRenderer(this._createRenderer()), this._register(this.onCursorMove(() => {
			this._renderService.handleCursorMove(), this._syncTextArea();
		})), this._register(this.onResize(() => {
			this._renderService.handleResize(this.cols, this.rows), this._syncTextArea();
		})), this._register(this.onBlur(() => this._renderService.handleBlur())), this._register(this.onFocus(() => this._renderService.handleFocus())), this._viewport = this._register(this._instantiationService.createInstance(ut, this.element, this.screenElement)), this._register(this._viewport.onRequestScrollLines((e) => {
			super.scrollLines(e, !1), this.refresh(0, this.rows - 1);
		})), this._selectionService = this._register(this._instantiationService.createInstance(Et, this.element, this.screenElement, r)), this._instantiationService.setService(vi, this._selectionService), this._mouseService = this._instantiationService.createInstance(gt), this._instantiationService.setService(Us, this._mouseService), this._register(this._selectionService.onRequestScrollLines((e) => this.scrollLines(e.amount, e.suppressScrollEvent))), this._register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire())), this._register(this._selectionService.onRequestRedraw((e) => this._renderService.handleSelectionChanged(e.start, e.end, e.columnSelectMode))), this._register(this._selectionService.onLinuxMouseSelection((e) => {
			this.textarea.value = e, this.textarea.focus(), this.textarea.select();
		})), this._register(Y.any(this._onScroll.event, this._inputHandler.onScroll)(() => {
			this._selectionService.refresh(), this._viewport?.queueSync();
		})), this._register(this._instantiationService.createInstance(ft, this.screenElement)), this._register(I(this.element, "mousedown", (e) => this._selectionService.handleMouseDown(e))), this.mouseStateService.areMouseEventsActive && !this.options.mouseEventsRequireAlt ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : (this._selectionService.enable(), this.element.classList.remove("enable-mouse-events")), this.options.screenReaderMode && (this._accessibilityManager.value = this._instantiationService.createInstance(je, this)), this._register(this.optionsService.onSpecificOptionChange("screenReaderMode", (e) => this._handleScreenReaderModeOptionChange(e)));
		let i = this.options.scrollbar?.showScrollbar ?? !0, o = this.options.scrollbar?.width;
		i && o && (this._overviewRulerRenderer = this._register(this._instantiationService.createInstance(Ge, this._viewportElement, this.screenElement))), this.optionsService.onSpecificOptionChange("scrollbar", (e) => {
			let t = (e?.showScrollbar ?? !0) && !!e?.width;
			!this._overviewRulerRenderer && t && this._viewportElement && this.screenElement && (this._overviewRulerRenderer = this._register(this._instantiationService.createInstance(Ge, this._viewportElement, this.screenElement)));
		}), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this._mouseService.bindMouse({
			element: this.element,
			screenElement: this.screenElement,
			document: this._document,
			handleTouchScroll: (e) => this._viewport?.handleTouchScroll(e)
		}, (e) => this._register(e), () => this.focus());
	}
	_createRenderer() {
		return this._instantiationService.createInstance(mt, this, this._document, this.element, this.screenElement, this._viewportElement, this._helperContainer, this.linkifier);
	}
	refresh(e, t, n = !1) {
		this._renderService?.refreshRows(e, t, n);
	}
	updateCursorStyle(e) {
		this._selectionService?.shouldColumnSelect(e) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
	}
	_showCursor() {
		this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = !0, this.refresh(this.buffer.y, this.buffer.y));
	}
	scrollLines(e, t) {
		this._viewport ? this._viewport.scrollLines(e) : super.scrollLines(e, t), this.refresh(0, this.rows - 1);
	}
	scrollPages(e) {
		this.scrollLines(e * (this.rows - 1));
	}
	scrollToTop() {
		this.scrollLines(-this._bufferService.buffer.ydisp);
	}
	scrollToBottom(e) {
		e && this._viewport ? this._viewport.scrollToLine(this.buffer.ybase, !0) : this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
	}
	scrollToLine(e) {
		let t = e - this._bufferService.buffer.ydisp;
		t !== 0 && this.scrollLines(t);
	}
	paste(e) {
		Mr(e, this.textarea, this.coreService, this.optionsService);
	}
	attachCustomKeyEventHandler(e) {
		this._customKeyEventHandler = e;
	}
	attachCustomWheelEventHandler(e) {
		this.mouseStateService.setCustomWheelEventHandler(e);
	}
	registerLinkProvider(e) {
		return this._linkProviderService.registerLinkProvider(e);
	}
	registerCharacterJoiner(e) {
		if (!this._characterJoinerService) throw Error("Terminal must be opened first");
		let t = this._characterJoinerService.register(e);
		return this.refresh(0, this.rows - 1), t;
	}
	deregisterCharacterJoiner(e) {
		if (!this._characterJoinerService) throw Error("Terminal must be opened first");
		this._characterJoinerService.deregister(e) && this.refresh(0, this.rows - 1);
	}
	get markers() {
		return this.buffer.markers;
	}
	registerMarker(e) {
		return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e);
	}
	registerDecoration(e) {
		return this._decorationService.registerDecoration(e);
	}
	hasSelection() {
		return this._selectionService ? this._selectionService.hasSelection : !1;
	}
	select(e, t, n) {
		this._selectionService.setSelection(e, t, n);
	}
	getSelection() {
		return this._selectionService ? this._selectionService.selectionText : "";
	}
	getSelectionPosition() {
		if (!(!this._selectionService || !this._selectionService.hasSelection)) return {
			start: {
				x: this._selectionService.selectionStart[0],
				y: this._selectionService.selectionStart[1]
			},
			end: {
				x: this._selectionService.selectionEnd[0],
				y: this._selectionService.selectionEnd[1]
			}
		};
	}
	clearSelection() {
		this._selectionService?.clearSelection();
	}
	selectAll() {
		this._selectionService?.selectAll();
	}
	selectLines(e, t) {
		this._selectionService?.selectLines(e, t);
	}
	_keyDown(e) {
		if (this._keyDownHandled = !1, this._keyDownSeen = !0, this._customKeyEventHandler && this._customKeyEventHandler(e) === !1) return !1;
		let t = this.browser.isMac && this.options.macOptionIsMeta && e.altKey;
		if (!t && !this._compositionHelper.keydown(e)) return this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp && this.scrollToBottom(!0), !1;
		!t && (e.key === "Dead" || e.key === "AltGraph") && (this._unprocessedDeadKey = !0);
		let n = this._keyboardService.evaluateKeyDown(e);
		if (this.updateCursorStyle(e), n.type === 3 || n.type === 2) {
			let t = this.rows - 1;
			return this.scrollLines(n.type === 2 ? -t : t), e.preventDefault(), e.stopPropagation(), !1;
		}
		if (n.type === 1 && this.selectAll(), this._isThirdLevelShift(this.browser, e) || (n.cancel && (e.preventDefault(), e.stopPropagation()), !n.key) || !this._keyboardService.useKitty && !this._keyboardService.useWin32InputMode && e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.key.length === 1 && e.key.charCodeAt(0) >= 65 && e.key.charCodeAt(0) <= 90) return !0;
		if (this._unprocessedDeadKey) return this._unprocessedDeadKey = !1, !0;
		(n.key === "" || n.key === "\r") && (this.textarea.value = "");
		let r = this._keyboardService.useWin32InputMode && ws(e);
		if (this._onKey.fire({
			key: n.key,
			domEvent: e
		}), this._showCursor(), this.coreService.triggerDataEvent(n.key, !r), !this.optionsService.rawOptions.screenReaderMode || e.altKey || e.ctrlKey) return e.preventDefault(), e.stopPropagation(), !1;
		this._keyDownHandled = !0;
	}
	_isThirdLevelShift(e, t) {
		let n = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isWindows && t.altKey && t.ctrlKey && !t.metaKey || e.isWindows && t.getModifierState("AltGraph");
		return t.type === "keypress" ? n : n && (!t.keyCode || t.keyCode > 47);
	}
	_keyUp(e) {
		if (this._keyDownSeen = !1, this._customKeyEventHandler && this._customKeyEventHandler(e) === !1) return;
		ws(e) || this.focus();
		let t = this._keyboardService.evaluateKeyUp(e);
		if (t?.key) {
			let n = this._keyboardService.useWin32InputMode && ws(e);
			this.coreService.triggerDataEvent(t.key, !n);
		}
		this.updateCursorStyle(e), this._keyPressHandled = !1;
	}
	_keyPress(e) {
		let t;
		if (this._keyPressHandled = !1, this._keyDownHandled || this._customKeyEventHandler && this._customKeyEventHandler(e) === !1) return !1;
		if (e.charCode) t = e.charCode;
		else if (e.which === null || e.which === void 0) t = e.keyCode;
		else if (e.which !== 0 && e.charCode !== 0) t = e.which;
		else return !1;
		return !t || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e) ? !1 : (t = String.fromCharCode(t), this._onKey.fire({
			key: t,
			domEvent: e
		}), this._showCursor(), this._compositionHelper.keypress?.(t) || this.coreService.triggerDataEvent(t, !0), this._keyPressHandled = !0, this._unprocessedDeadKey = !1, !0);
	}
	_inputEvent(e) {
		if (e.data && e.inputType === "insertText" && !this.optionsService.rawOptions.screenReaderMode && this._compositionHelper instanceof Ee && this._compositionHelper.input(e.data)) return !0;
		if (e.data && e.inputType === "insertText" && (!e.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
			if (this._keyPressHandled) return !1;
			this._unprocessedDeadKey = !1;
			let t = e.data;
			return this.coreService.triggerDataEvent(t, !0), !0;
		}
		return !1;
	}
	resize(e, t) {
		if (e === this.cols && t === this.rows) {
			this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
			return;
		}
		super.resize(e, t);
	}
	_afterResize(e, t) {
		this._charSizeService?.measure();
	}
	clear() {
		this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
		for (let e = 1; e < this.rows; e++) this.buffer.lines.push(this.buffer.getBlankLine(U));
		this._onScroll.fire({ position: this.buffer.ydisp }), this.refresh(0, this.rows - 1);
	}
	reset() {
		this.options.rows = this.rows, this.options.cols = this.cols;
		let e = this._customKeyEventHandler;
		this._setup(), super.reset(), this._mouseService?.reset(), this._selectionService?.reset(), this._decorationService.reset(), this._customKeyEventHandler = e, this.refresh(0, this.rows - 1, !0);
	}
	clearTextureAtlas() {
		this._renderService?.clearTextureAtlas();
	}
	_reportFocus() {
		this.element?.classList.contains("focus") ? this.coreService.triggerDataEvent("\x1B[I") : this.coreService.triggerDataEvent("\x1B[O");
	}
	_reportWindowsOptions(e) {
		if (this._renderService) switch (e) {
			case 0:
				let e = this._renderService.dimensions.css.canvas.width.toFixed(0), t = this._renderService.dimensions.css.canvas.height.toFixed(0);
				this.coreService.triggerDataEvent(`\x1B[4;${t};${e}t`);
				break;
			case 1:
				let n = this._renderService.dimensions.css.cell.width.toFixed(0), r = this._renderService.dimensions.css.cell.height.toFixed(0);
				this.coreService.triggerDataEvent(`\x1B[6;${r};${n}t`);
				break;
		}
	}
};
function ws(e) {
	return e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 91 || e.keyCode === 92 || e.keyCode === 93 || e.keyCode === 224 || e.key === "Meta";
}
var Cr = class {
	constructor() {
		this._addons = [];
	}
	dispose() {
		for (let e = this._addons.length - 1; e >= 0; e--) this._addons[e].instance.dispose();
	}
	loadAddon(e, t) {
		let n = {
			instance: t,
			dispose: t.dispose,
			isDisposed: !1
		};
		this._addons.push(n), t.dispose = () => this._wrappedAddonDispose(n), t.activate(e);
	}
	_wrappedAddonDispose(e) {
		if (e.isDisposed) return;
		let t = -1;
		for (let n = 0; n < this._addons.length; n++) if (this._addons[n] === e) {
			t = n;
			break;
		}
		if (t === -1) throw Error("Could not dispose an addon that has not been loaded");
		e.isDisposed = !0, e.dispose.apply(e.instance), this._addons.splice(t, 1);
	}
}, Ir = class {
	constructor(e) {
		this._line = e;
	}
	get isWrapped() {
		return this._line.isWrapped;
	}
	get length() {
		return this._line.length;
	}
	getCell(e, t) {
		if (!(e < 0 || e >= this._line.length)) return t ? (this._line.loadCell(e, t), t) : this._line.loadCell(e, new F());
	}
	translateToString(e, t, n) {
		return this._line.translateToString(e, t, n);
	}
}, hi = class {
	constructor(e, t) {
		this._buffer = e, this.type = t;
	}
	init(e) {
		return this._buffer = e, this;
	}
	get cursorY() {
		return this._buffer.y;
	}
	get cursorX() {
		return this._buffer.x;
	}
	get viewportY() {
		return this._buffer.ydisp;
	}
	get baseY() {
		return this._buffer.ybase;
	}
	get length() {
		return this._buffer.lines.length;
	}
	getLine(e) {
		let t = this._buffer.lines.get(e);
		if (t) return new Ir(t);
	}
	getNullCell() {
		return new F();
	}
}, Er = class extends g {
	constructor(e) {
		super(), this._core = e, this._onBufferChange = this._register(new b()), this.onBufferChange = this._onBufferChange.event, this._normal = new hi(this._core.buffers.normal, "normal"), this._alternate = new hi(this._core.buffers.alt, "alternate"), this._register(this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active)));
	}
	get active() {
		if (this._core.buffers.active === this._core.buffers.normal) return this.normal;
		if (this._core.buffers.active === this._core.buffers.alt) return this.alternate;
		throw Error("Active buffer is neither normal nor alternate");
	}
	get normal() {
		return this._normal.init(this._core.buffers.normal);
	}
	get alternate() {
		return this._alternate.init(this._core.buffers.alt);
	}
}, yr = class {
	constructor(e) {
		this._core = e;
	}
	registerCsiHandler(e, t) {
		return this._core.registerCsiHandler(e, (e) => t(e.toArray()));
	}
	addCsiHandler(e, t) {
		return this.registerCsiHandler(e, t);
	}
	registerDcsHandler(e, t) {
		return this._core.registerDcsHandler(e, (e, n) => t(e, n.toArray()));
	}
	addDcsHandler(e, t) {
		return this.registerDcsHandler(e, t);
	}
	registerEscHandler(e, t) {
		return this._core.registerEscHandler(e, t);
	}
	addEscHandler(e, t) {
		return this.registerEscHandler(e, t);
	}
	registerOscHandler(e, t) {
		return this._core.registerOscHandler(e, t);
	}
	addOscHandler(e, t) {
		return this.registerOscHandler(e, t);
	}
	registerApcHandler(e, t) {
		return this._core.registerApcHandler(e, t);
	}
}, xr = class {
	constructor(e) {
		this._core = e;
	}
	register(e) {
		this._core.unicodeService.register(e);
	}
	get versions() {
		return this._core.unicodeService.versions;
	}
	get activeVersion() {
		return this._core.unicodeService.activeVersion;
	}
	set activeVersion(e) {
		this._core.unicodeService.activeVersion = e;
	}
}, To = ["cols", "rows"], ye = 0, Rn = class extends g {
	constructor(e) {
		super(), this._core = this._register(new gr(e)), this._addonManager = this._register(new Cr()), this._publicOptions = { ...this._core.options };
		let t = (e) => this._core.options[e], n = (e, t) => {
			this._checkReadonlyOptions(e), this._core.options[e] = t;
		};
		for (let e in this._core.options) {
			let r = {
				get: t.bind(this, e),
				set: n.bind(this, e)
			};
			Object.defineProperty(this._publicOptions, e, r);
		}
	}
	_checkReadonlyOptions(e) {
		if (To.includes(e)) throw Error(`Option "${e}" can only be set in the constructor`);
	}
	_checkProposedApi() {
		if (!this._core.optionsService.rawOptions.allowProposedApi) throw Error("You must set the allowProposedApi option to true to use proposed API");
	}
	get onBell() {
		return this._core.onBell;
	}
	get onBinary() {
		return this._core.onBinary;
	}
	get onCursorMove() {
		return this._core.onCursorMove;
	}
	get onData() {
		return this._core.onData;
	}
	get onKey() {
		return this._core.onKey;
	}
	get onLineFeed() {
		return this._core.onLineFeed;
	}
	get onRender() {
		return this._core.onRender;
	}
	get onResize() {
		return this._core.onResize;
	}
	get onScroll() {
		return this._core.onScroll;
	}
	get onSelectionChange() {
		return this._core.onSelectionChange;
	}
	get onTitleChange() {
		return this._core.onTitleChange;
	}
	get onWriteParsed() {
		return this._core.onWriteParsed;
	}
	get onDimensionsChange() {
		return this._core.onDimensionsChange;
	}
	get element() {
		return this._core.element;
	}
	get screenElement() {
		return this._core.screenElement;
	}
	get parser() {
		return this._parser ??= new yr(this._core);
	}
	get unicode() {
		return this._checkProposedApi(), new xr(this._core);
	}
	get textarea() {
		return this._core.textarea;
	}
	get rows() {
		return this._core.rows;
	}
	get cols() {
		return this._core.cols;
	}
	get buffer() {
		return this._buffer ??= this._register(new Er(this._core));
	}
	get markers() {
		return this._core.markers;
	}
	get modes() {
		let e = this._core.coreService.decPrivateModes, t = "none";
		switch (this._core.mouseStateService.activeProtocol) {
			case "X10":
				t = "x10";
				break;
			case "VT200":
				t = "vt200";
				break;
			case "DRAG":
				t = "drag";
				break;
			case "ANY":
				t = "any";
				break;
		}
		return {
			applicationCursorKeysMode: e.applicationCursorKeys,
			applicationKeypadMode: e.applicationKeypad,
			bracketedPasteMode: e.bracketedPasteMode,
			insertMode: this._core.coreService.modes.insertMode,
			mouseTrackingMode: t,
			originMode: e.origin,
			reverseWraparoundMode: e.reverseWraparound,
			sendFocusMode: e.sendFocus,
			showCursor: !this._core.coreService.isCursorHidden,
			synchronizedOutputMode: e.synchronizedOutput,
			win32InputMode: e.win32InputMode,
			wraparoundMode: e.wraparound
		};
	}
	get dimensions() {
		return this._core.dimensions;
	}
	get options() {
		return this._publicOptions;
	}
	set options(e) {
		for (let t in e) this._publicOptions[t] = e[t];
	}
	blur() {
		this._core.blur();
	}
	focus() {
		this._core.focus();
	}
	input(e, t = !0) {
		this._core.input(e, t);
	}
	resize(e, t) {
		this._verifyIntegers(e, t), this._core.resize(e, t);
	}
	open(e) {
		this._core.open(e);
	}
	attachCustomKeyEventHandler(e) {
		this._core.attachCustomKeyEventHandler(e);
	}
	attachCustomWheelEventHandler(e) {
		this._core.attachCustomWheelEventHandler(e);
	}
	registerLinkProvider(e) {
		return this._core.registerLinkProvider(e);
	}
	registerCharacterJoiner(e) {
		return this._core.registerCharacterJoiner(e);
	}
	deregisterCharacterJoiner(e) {
		this._core.deregisterCharacterJoiner(e);
	}
	registerMarker(e = 0) {
		return this._verifyIntegers(e), this._core.registerMarker(e);
	}
	registerDecoration(e) {
		return this._verifyPositiveIntegers(e.x ?? 0, e.width ?? 0, e.height ?? 0), this._core.registerDecoration(e);
	}
	hasSelection() {
		return this._core.hasSelection();
	}
	select(e, t, n) {
		this._verifyIntegers(e, t, n), this._core.select(e, t, n);
	}
	getSelection() {
		return this._core.getSelection();
	}
	getSelectionPosition() {
		return this._core.getSelectionPosition();
	}
	clearSelection() {
		this._core.clearSelection();
	}
	selectAll() {
		this._core.selectAll();
	}
	selectLines(e, t) {
		this._verifyIntegers(e, t), this._core.selectLines(e, t);
	}
	dispose() {
		super.dispose();
	}
	scrollLines(e) {
		this._verifyIntegers(e), this._core.scrollLines(e);
	}
	scrollPages(e) {
		this._verifyIntegers(e), this._core.scrollPages(e);
	}
	scrollToTop() {
		this._core.scrollToTop();
	}
	scrollToBottom() {
		this._core.scrollToBottom();
	}
	scrollToLine(e) {
		this._verifyIntegers(e), this._core.scrollToLine(e);
	}
	clear() {
		this._core.clear();
	}
	write(e, t) {
		this._core.write(e, t);
	}
	writeln(e, t) {
		this._core.write(e), this._core.write("\r\n", t);
	}
	paste(e) {
		this._core.paste(e);
	}
	refresh(e, t) {
		this._verifyIntegers(e, t), this._core.refresh(e, t);
	}
	reset() {
		this._core.reset();
	}
	clearTextureAtlas() {
		this._core.clearTextureAtlas();
	}
	loadAddon(e) {
		this._addonManager.loadAddon(this, e);
	}
	static get strings() {
		return {
			get promptLabel() {
				return Ut.get();
			},
			set promptLabel(e) {
				Ut.set(e);
			},
			get tooMuchOutput() {
				return Je.get();
			},
			set tooMuchOutput(e) {
				Je.set(e);
			}
		};
	}
	_verifyIntegers(...e) {
		for (ye of e) if (ye === Infinity || isNaN(ye) || ye % 1 != 0) throw Error("This API only accepts integers");
	}
	_verifyPositiveIntegers(...e) {
		for (ye of e) if (ye && (ye === Infinity || isNaN(ye) || ye % 1 != 0 || ye < 0)) throw Error("This API only accepts positive integers");
	}
};
function guardLinkProvider(e, t) {
	return { provideLinks(n, r) {
		let i = !1, o = (e) => {
			i = !0, r(e);
		};
		try {
			e.provideLinks(n, o);
		} catch (e) {
			recordRendererCrashBreadcrumb("terminal_link_provider_error", {
				provider: t,
				bufferLineNumber: n,
				errorName: e instanceof Error ? e.name : typeof e,
				errorMessage: e instanceof Error ? e.message : String(e)
			}), i || r(void 0);
		}
	} };
}
function installGuardedLinkProviderRegistration(e) {
	if (typeof e.registerLinkProvider != "function") return;
	let t = e.registerLinkProvider.bind(e), n = 0;
	e.registerLinkProvider = (e) => (n += 1, t(guardLinkProvider(e, `provider-${n}`)));
}
function isGenuineWindowsCtrlAltChord(e) {
	return e.ctrlKey && e.altKey && !e.metaKey && e.getModifierState?.("AltGraph") !== !0;
}
function shouldRepairWindowsCtrlAltChords(e) {
	return e.includes("Windows") && e.includes("Chrome/");
}
function installWindowsCtrlAltChordRepair(e, t = navigator.userAgent) {
	if (!shouldRepairWindowsCtrlAltChords(t)) return !1;
	let n = e._core, r = n?._isThirdLevelShift;
	return !n || typeof r != "function" ? (console.warn("xterm no longer exposes _core._isThirdLevelShift; Windows Ctrl+Alt chords will be dropped"), !1) : (n._isThirdLevelShift = function(e, t) {
		let n = r.call(this, e, t);
		return !n || e?.isWindows !== !0 ? n : !isGenuineWindowsCtrlAltChord(t);
	}, !0);
}
function isTerminalHttpLinkActivation(e) {
	return isTerminalLinkDirectActivation(e);
}
var KITTY_SCAN_TAIL_LIMIT = 4096, KITTY_STACK_LIMIT = 16, TerminalKittyKeyboardModeTracker = class {
	scanTail = "";
	currentFlags = 0;
	mainFlags = 0;
	altFlags = 0;
	currentKnown = !0;
	mainKnown = !0;
	altKnown = !0;
	mainStack = [];
	altStack = [];
	mainStackComplete = !0;
	altStackComplete = !0;
	alternateScreenActive = !1;
	alternateScreenSwitchObserved = !1;
	baselineProven = !1;
	get flags() {
		return this.currentFlags;
	}
	get snapshotFlags() {
		return this.currentKnown ? this.currentFlags : void 0;
	}
	get hasProvenBaseline() {
		return this.baselineProven;
	}
	get isAlternateScreen() {
		return this.alternateScreenActive;
	}
	get hasObservedAlternateScreenSwitch() {
		return this.alternateScreenSwitchObserved;
	}
	reset() {
		this.baselineProven = !0, this.scanTail = "", this.currentFlags = 0, this.mainFlags = 0, this.altFlags = 0, this.currentKnown = !0, this.mainKnown = !0, this.altKnown = !0, this.mainStack = [], this.altStack = [], this.mainStackComplete = !0, this.altStackComplete = !0, this.alternateScreenActive = !1, this.alternateScreenSwitchObserved = !1;
	}
	resetForSnapshot() {
		this.reset(), this.baselineProven = !1, this.currentKnown = !1, this.mainKnown = !1, this.altKnown = !1, this.mainStackComplete = !1, this.altStackComplete = !1;
	}
	restoreSnapshotFlags(e) {
		let t = parseTerminalKittyKeyboardFlags(e);
		t !== void 0 && (this.currentFlags = t, this.currentKnown = !0, this.baselineProven = !0);
	}
	scan(e) {
		this.scanInternal(e, !1);
	}
	scanReplay(e) {
		this.scanInternal(e, !0);
	}
	scanInternal(e, t) {
		let n = this.scanTail + e;
		this.scanTail = this.extractScanTail(n);
		let r = /\x1bc|(?:\x1b\[|\x9b)(?:!p|\?([0-9;]+)([hl])|([<>=])([0-9;]*)u)/g, i;
		for (; (i = r.exec(n)) !== null;) {
			if (i[0] === "\x1Bc") {
				let e = this.scanTail;
				this.reset(), this.scanTail = e, this.alternateScreenSwitchObserved = !0;
				continue;
			}
			if (i[0].endsWith("!p")) {
				this.applySoftReset();
				continue;
			}
			if (i[1] !== void 0) {
				this.applyScreenSwitch(i[1], i[2] === "h");
				continue;
			}
			this.applyKittySequence(i[3], i[4] ?? "", t);
		}
	}
	applySoftReset() {
		this.baselineProven = !0, this.currentFlags = 0, this.mainFlags = 0, this.altFlags = 0, this.currentKnown = !0, this.mainKnown = !0, this.altKnown = !0, this.mainStack = [], this.altStack = [], this.mainStackComplete = !0, this.altStackComplete = !0;
	}
	applyScreenSwitch(e, t) {
		for (let n of e.split(";")) {
			let e = Number(n);
			e !== 47 && e !== 1047 && e !== 1049 || (this.alternateScreenSwitchObserved = !0, t ? (this.mainFlags = this.currentFlags, this.mainKnown = this.currentKnown, this.currentFlags = this.altFlags, this.currentKnown = this.altKnown, this.alternateScreenActive = !0) : (this.altFlags = this.currentFlags, this.altKnown = this.currentKnown, this.currentFlags = this.mainFlags, this.currentKnown = this.mainKnown, this.alternateScreenActive = !1));
		}
	}
	applyKittySequence(e, t, n) {
		let r = t.split(";").map((e) => Number(e)), i = this.alternateScreenActive ? this.altStack : this.mainStack;
		if (e === ">") {
			n || (i.length >= KITTY_STACK_LIMIT && i.shift(), i.push({
				flags: this.currentFlags,
				known: this.currentKnown
			})), this.currentFlags = r[0] || 0, this.currentKnown = !0, this.baselineProven = !0;
			return;
		}
		if (e === "<") {
			let e = Math.max(1, r[0] || 1), t = null;
			for (let n = 0; n < e; n++) {
				let e = i.pop();
				if (!e) {
					t = null;
					break;
				}
				t = e, this.currentFlags = e.flags, this.currentKnown = e.known;
			}
			i.length === 0 && (this.currentFlags = 0, this.currentKnown = (this.alternateScreenActive ? this.altStackComplete : this.mainStackComplete) || t !== null && t.known && t.flags === 0);
			return;
		}
		let o = r[0] || 0, s = r.length > 1 && r[1] ? r[1] : 1;
		s === 1 ? (this.currentFlags = o, this.currentKnown = !0, this.baselineProven = !0) : s === 2 ? this.currentFlags |= o : s === 3 && (this.currentFlags &= ~o);
	}
	extractScanTail(e) {
		let t = Math.max(e.lastIndexOf("\x1B"), e.lastIndexOf(""));
		if (t === -1) return "";
		let n = e.slice(t);
		if (n.length > KITTY_SCAN_TAIL_LIMIT) return "";
		if (n === "\x1B" || n === "\x1B[" || n === "") return n;
		let r = n.startsWith("\x1B[") ? n.slice(2) : n.startsWith("") ? n.slice(1) : null;
		return r === null ? "" : this.isIncompleteSequenceBody(r) ? ownRetainedString(n) : "";
	}
	isIncompleteSequenceBody(e) {
		return e === "!" || /^[<>=?]?[0-9;]*$/.test(e);
	}
};
function createRedactedPasteDiagnostic(e) {
	return [
		"terminal paste",
		`mode=${e.mode}`,
		"target=terminal",
		`runtime=${e.runtimeKey}`,
		`bytes=${e.payload.byteLength}`,
		`lines=${e.payload.lineCount}`,
		`source=${e.payload.source}`,
		`rich=${e.payload.hasRichText}`,
		`controls=${e.payload.hasControlSequences}`,
		"content=redacted"
	].join(" ");
}
function createRedactedPasteExecutionDiagnostic({ chunksWritten: e, durationMs: t, plan: n, reason: r, status: i }) {
	return [
		n.redactedDiagnostic,
		`status=${i}`,
		`chunks=${e}`,
		`durationMs=${Math.max(0, Math.round(t))}`,
		r ? `reason=${formatDiagnosticReason(r)}` : null
	].filter((e) => typeof e == "string").join(" ");
}
function formatDiagnosticReason(e) {
	return /^[a-z0-9-]{1,64}$/i.test(e) ? e : "untrusted";
}
const measureTerminalPastePayloadMetadataWithYield = measurePastePayloadMetadataWithYield;
var TERMINAL_PASTE_ESCAPE_CODE_POINT = 27, TERMINAL_PASTE_INERT_ESCAPE_CODE_POINT = 9243, TERMINAL_PASTE_INERT_ESCAPE = "␛", LINE_FEED_CODE_POINT = 10, CARRIAGE_RETURN_CODE_POINT = 13;
function* iterateTerminalPastePlanChunks(e) {
	let t = Math.max(e.windowsInputRecordNewline === "csi-u" ? 8 : 4, e.maxChunkBytes ?? 16384);
	e.bracketed && (yield BRACKETED_PASTE_START), yield* iterateTextByUtf8Bytes(e.payload.plainText, t, e.bracketed || e.newlinePolicy === "windows-input-record", e.newlinePolicy, e.windowsInputRecordNewline), e.bracketed && (yield BRACKETED_PASTE_END);
}
function* iterateTextByUtf8Bytes(e, t, n, r, i) {
	let o = "", s = 0;
	for (let p = 0; p < e.length; p += 1) {
		let S = readUtf8CodePointAt(e, p), T = S > 65535 ? 2 : 1;
		if (r !== "preserve" && S === LINE_FEED_CODE_POINT && p > 0 && e.charCodeAt(p - 1) === CARRIAGE_RETURN_CODE_POINT) continue;
		let k = r !== "preserve" && (S === LINE_FEED_CODE_POINT || S === CARRIAGE_RETURN_CODE_POINT), A = k ? CARRIAGE_RETURN_CODE_POINT : S, Sl = n && S === TERMINAL_PASTE_ESCAPE_CODE_POINT, Tl = k && r === "windows-input-record" ? i === "csi-u" ? "\x1B[13;2u" : "\x1B\r" : Sl ? TERMINAL_PASTE_INERT_ESCAPE : A === S ? e.slice(p, p + T) : "\r", El = k && r === "windows-input-record" ? Tl.length : getUtf8ByteLengthForCodePoint(Sl ? TERMINAL_PASTE_INERT_ESCAPE_CODE_POINT : A);
		if (o && s + El > t) {
			yield o, o = Tl, s = El, T === 2 && (p += 1);
			continue;
		}
		o += Tl, s += El, T === 2 && (p += 1);
	}
	o && (yield o);
}
async function executeTerminalPastePlan(e, t) {
	return await runTerminalPtyInputTransaction(e.target.ptyId, () => executeTerminalPastePlanNow(e, t));
}
async function executeTerminalPastePlanNow(e, { pasteText: t, writePty: n, isTargetCurrent: r, canContinue: i, yieldToEventLoop: o = yieldToEventLoop, operationTimeoutMs: s = getTerminalPasteOperationTimeoutMs(e), now: p = defaultNow }) {
	let S = p(), T = (t, n, r) => result(t, e, n, Math.max(0, p() - S), r);
	if (e.mode === "reject") return T("rejected", 0, e.rejectReason ?? "paste-rejected");
	if (r && !r()) return T("cancelled", 0, "stale-target");
	if (e.mode !== "chunked") return (await runTerminalPasteOperationWithTimeout(() => t(e.payload.plainText, {
		forceBracketedPaste: e.mode === "bracketed-terminal",
		...e.windowsInputRecordNewline ? { windowsInputRecordNewline: e.windowsInputRecordNewline } : {}
	}), s)).timedOut ? T("cancelled", 0, "operation-timeout") : T("pasted", 1);
	if (!n) return T("rejected", 0, "pty-writer-unavailable");
	let k = 0, A = !1, Cl = async () => {
		if (!A || (A = !1, i && !i())) return { timedOut: !1 };
		try {
			let e = await runTerminalPasteOperationWithTimeout(() => n(BRACKETED_PASTE_END), s);
			if (e.timedOut) return { timedOut: !0 };
			e.value && (k += 1);
		} catch {}
		return { timedOut: !1 };
	}, wl = async () => {
		for (let t of iterateTerminalPastePlanChunks(e)) {
			if (r && !r()) return {
				status: "cancelled",
				reason: "stale-target"
			};
			if (i && !i()) return {
				status: "cancelled",
				reason: "target-disconnected"
			};
			let e = await runTerminalPasteOperationWithTimeout(() => n(t), s);
			if (e.timedOut) return A &&= t !== BRACKETED_PASTE_END, {
				status: "cancelled",
				reason: "operation-timeout"
			};
			if (!e.value) return A &&= t !== BRACKETED_PASTE_END, {
				status: "cancelled",
				reason: "target-disconnected"
			};
			k += 1, t === BRACKETED_PASTE_START ? A = !0 : t === BRACKETED_PASTE_END && (A = !1), await o();
		}
		return { status: "pasted" };
	}, Tl, El = !1;
	try {
		Tl = await wl();
	} finally {
		El = (await Cl()).timedOut;
	}
	return El && Tl.reason === "stale-target" ? T("cancelled", k, "operation-timeout") : T(Tl.status, k, Tl.reason);
}
function getTerminalPasteOperationTimeoutMs(e) {
	return e.target.runtime.kind === "ssh" || e.target.runtime.kind === "remote-runtime" ? 12e4 : TERMINAL_PASTE_OPERATION_TIMEOUT_MS;
}
function result(e, t, n, r, i) {
	let o = Math.max(0, Math.round(r));
	return {
		status: e,
		chunksWritten: n,
		durationMs: o,
		diagnostic: createRedactedPasteExecutionDiagnostic({
			chunksWritten: n,
			durationMs: o,
			plan: t,
			reason: i,
			status: e
		}),
		...i ? { reason: i } : {}
	};
}
function defaultNow() {
	return globalThis.performance?.now?.() ?? Date.now();
}
async function planTerminalPasteWithYield({ text: e, source: t, target: n, forceBracketedPaste: r = !1, forceBracketedPasteForMultiline: i = !1, windowsInputRecordNewline: o, terminalBracketedPasteMode: s = !1, hasRichText: p = !1, maxDirectBytes: S = 65536, maxChunkBytes: T = 16384, maxBytes: k = TERMINAL_PASTE_MAX_BYTES, measureYieldAfterCodeUnits: A, yieldToEventLoop: Sl }) {
	let Cl = await measureTerminalPastePayloadMetadataWithYield(e, {
		stopAfterBytes: k,
		yieldAfterCodeUnits: A,
		yieldToEventLoop: Sl
	});
	return buildTerminalPastePlan({
		forceBracketedPaste: r,
		forceBracketedPasteForMultiline: i,
		windowsInputRecordNewline: o,
		maxBytes: k,
		maxChunkBytes: T,
		maxDirectBytes: S,
		payload: {
			plainText: e,
			source: t,
			byteLength: Cl.byteLength,
			lineCount: Cl.lineCount,
			hasRichText: p,
			hasControlSequences: Cl.hasControlSequences,
			lineEndingByteLength: Cl.lineEndingByteLength
		},
		target: n,
		terminalBracketedPasteMode: s
	});
}
function buildTerminalPastePlan({ payload: e, target: t, forceBracketedPaste: n, forceBracketedPasteForMultiline: r, windowsInputRecordNewline: i, terminalBracketedPasteMode: o, maxDirectBytes: s, maxChunkBytes: p, maxBytes: S }) {
	let T = !n && e.lineCount > 1 ? i : void 0, k = T ? e.byteLength - e.lineEndingByteLength + (e.lineCount - 1) * (T === "csi-u" ? 7 : 2) : e.byteLength, A = k > s, Sl = n || T === void 0 && r && e.lineCount > 1, Cl = T === void 0 && (Sl || o), wl = choosePasteMode({
		byteLength: k,
		forceBracketedPaste: Sl,
		windowsInputRecordNewline: T,
		shouldChunk: A,
		maxBytes: S
	}), Tl = {
		target: t,
		payload: e,
		mode: wl,
		newlinePolicy: T === void 0 ? wl === "chunked" || wl === "bracketed-terminal" ? "terminal-cr" : "preserve" : "windows-input-record",
		...T ? { windowsInputRecordNewline: T } : {},
		runtimeKey: t.runtime.runtimeKey,
		...A ? { maxChunkBytes: p } : {},
		bracketed: wl === "bracketed-terminal" || wl === "chunked" && Cl,
		redactedDiagnostic: "",
		...wl === "reject" ? { rejectReason: "payload-too-large" } : {}
	};
	return {
		...Tl,
		redactedDiagnostic: createRedactedPasteDiagnostic(Tl)
	};
}
function choosePasteMode({ byteLength: e, forceBracketedPaste: t, windowsInputRecordNewline: n, shouldChunk: r, maxBytes: i }) {
	return e > i ? "reject" : r ? "chunked" : n === void 0 ? t ? "bracketed-terminal" : "direct" : "windows-input-record";
}
function subscribeToTerminalUserInput(e, t) {
	let n = e._core?.coreService;
	if (!n || typeof n.onUserInput != "function") return null;
	try {
		let e = n.onUserInput(t);
		return e && typeof e.dispose == "function" ? e : null;
	} catch {
		return null;
	}
}
function subscribeToTerminalInputData(e, t) {
	let n = !1, r = subscribeToTerminalUserInput(e, () => {
		n = !0;
	}), i = e.onData((e) => {
		let r = n;
		n = !1, t(e, r);
	});
	return { dispose: () => {
		i.dispose(), r?.dispose();
	} };
}
var HANGUL_PREEDIT_PATTERN = /[ᄀ-ᇿ㄰-㆏ꥠ-꥿가-힣]/;
const TERMINAL_IME_CANDIDATE_GUARD_POST_COMPOSITION_MS = 250;
function installTerminalImeCompositionTracker(e, t) {
	let n = t?.now ?? (() => Date.now()), r = !1, i = null, o = null, s = !1, p = !1, S = (e) => r && (i === null || e - i <= 1e4), T = (e) => p && i !== null && e - i <= 1e4, k = () => {
		let e = n();
		return S(e) ? !0 : o !== null && e - o <= 250;
	};
	if (!e) return {
		isActive: () => r,
		isCandidateKeyGuardActive: k,
		isHangulPreedit: () => T(n()),
		dispose: () => void 0
	};
	let A = () => {
		r = !0, i = n(), o = null, s = !1, p = !1;
	}, Sl = (e) => {
		if (i = n(), e instanceof CompositionEvent) {
			if (e.data === "") {
				s = !0;
				return;
			}
			p = HANGUL_PREEDIT_PATTERN.test(e.data), r = !0;
		}
	}, Cl = () => {
		r = !1, o = s ? n() : null, s = !1;
	}, wl = (e) => {
		e instanceof InputEvent && e.inputType === "insertCompositionText" || (r = !1, o = null, s = !1);
	}, Tl = () => {
		r = !1, i = null, o = null, s = !1, p = !1;
	};
	return e.addEventListener("compositionstart", A, !0), e.addEventListener("compositionupdate", Sl, !0), e.addEventListener("compositionend", Cl, !0), e.addEventListener("input", wl, !0), e.addEventListener("blur", Tl, !0), {
		isActive: () => S(n()),
		isCandidateKeyGuardActive: k,
		isHangulPreedit: () => T(n()),
		dispose: () => {
			e.removeEventListener("compositionstart", A, !0), e.removeEventListener("compositionupdate", Sl, !0), e.removeEventListener("compositionend", Cl, !0), e.removeEventListener("input", wl, !0), e.removeEventListener("blur", Tl, !0);
		}
	};
}
var PC_101_PUNCTUATION_BY_CODE = {
	Period: ".",
	Comma: ",",
	Slash: "/",
	Backslash: "\\",
	Semicolon: ";",
	Quote: "'",
	BracketLeft: "[",
	BracketRight: "]",
	Minus: "-",
	Equal: "=",
	Backquote: "`",
	Space: " "
}, KITTY_NUMPAD_CODE_POINT_BY_SUFFIX = {
	Decimal: 57409,
	Divide: 57410,
	Multiply: 57411,
	Subtract: 57412,
	Add: 57413,
	Enter: 57414,
	Equal: 57415,
	Separator: 57416
}, KITTY_NUMPAD_CODE_POINT_BY_KEY = {
	ArrowLeft: 57417,
	ArrowRight: 57418,
	ArrowUp: 57419,
	ArrowDown: 57420,
	PageUp: 57421,
	PageDown: 57422,
	Home: 57423,
	End: 57424,
	Insert: 57425,
	Delete: 57426,
	Begin: 57427,
	Clear: 57427
};
function pc101CharacterForCode(e) {
	if (e) return e.startsWith("Key") && e.length === 4 ? e.charAt(3).toLowerCase() : e.startsWith("Digit") && e.length === 6 ? e.charAt(5) : PC_101_PUNCTUATION_BY_CODE[e];
}
function optionKittyPrimaryCharacterFallback(e) {
	return pc101CharacterForCode(e.code) === void 0 ? e.key : void 0;
}
function kittyFunctionalNumpadCodePointForEvent(e) {
	if (!e.code?.startsWith("Numpad")) return;
	let t = KITTY_NUMPAD_CODE_POINT_BY_KEY[e.key];
	if (t !== void 0) return t;
	let n = e.code.slice(6);
	return n.length === 1 && n >= "0" && n <= "9" ? 57399 + Number(n) : KITTY_NUMPAD_CODE_POINT_BY_SUFFIX[n];
}
function nativePrimaryCharacterFallback(e, t, n) {
	if (!n) return n;
	let r = n.toLowerCase(), i = n.toUpperCase();
	return (e.shiftKey || t) && r !== i ? [...r].length === 1 ? r : void 0 : e.shiftKey ? void 0 : n;
}
function singleCodePoint(e) {
	return e && [...e].length === 1 ? e.codePointAt(0) : void 0;
}
function resolveTerminalKittyPrimaryCodePoint(e, t) {
	let n = e.capsLock ?? e.getModifierState?.("CapsLock") === !0, r = kittyFunctionalNumpadCodePointForEvent(e), i = pc101CharacterForCode(e.code), o = nativePrimaryCharacterFallback(e, n, t.primaryCharacterFallback), s = (e.code ? t.layoutCharacterForCode?.(e.code, !1) : void 0) ?? o ?? i ?? t.primaryCharacterFallback;
	return r ?? singleCodePoint(s);
}
function encodeModifiers(e) {
	let t = 1;
	return e.shiftKey && (t += 1), e.altKey && (t += 2), e.ctrlKey && (t += 4), e.metaKey && (t += 8), e.capsLock && (t += 64), e.numLock && (t += 128), t;
}
function associatedTextCodePoints(e) {
	if (e.type === "release" || e.ctrlKey || !(e.flags & 8) || !(e.flags & 16) || !e.associatedText) return;
	let t = [...e.associatedText].map((e) => e.codePointAt(0)).filter((e) => e > 31 && (e < 127 || e > 159));
	return t.length > 0 ? t.join(":") : void 0;
}
function encodeTerminalKittyCsiU(e) {
	let t = (e.flags & 2) != 0;
	if (e.type === "release" && !t) return null;
	let n = [String(e.primaryCodePoint)];
	if (e.flags & 4) {
		let t = e.shiftedCodePoint === e.primaryCodePoint ? void 0 : e.shiftedCodePoint, r = e.baseCodePoint === e.primaryCodePoint ? void 0 : e.baseCodePoint;
		(t !== void 0 || r !== void 0) && n.push(t === void 0 ? "" : String(t)), r !== void 0 && n.push(String(r));
	}
	let r = t && e.type !== "press" ? e.type === "repeat" ? 2 : 3 : void 0, i = associatedTextCodePoints(e), o = encodeModifiers(e), s = `\x1b[${n.join(":")}`;
	return (o > 1 || r !== void 0 || i !== void 0) && (s += `;${o > 1 ? String(o) : r === void 0 ? "" : "1"}`, r !== void 0 && (s += `:${r}`)), i !== void 0 && (s += `;${i}`), `${s}u`;
}
function encodeTerminalOptionKittyEvent(e, t) {
	let n = e.capsLock ?? e.getModifierState?.("CapsLock") === !0, r = e.numLock ?? e.getModifierState?.("NumLock") === !0, i = kittyFunctionalNumpadCodePointForEvent(e), o = pc101CharacterForCode(e.code), s = t.primaryCodePoint ?? resolveTerminalKittyPrimaryCodePoint(e, t);
	if (s === void 0) return null;
	let p = i === void 0 && e.shiftKey && e.code ? t.layoutCharacterForCode?.(e.code, !0) ?? (e.altKey ? void 0 : e.key) : void 0;
	return encodeTerminalKittyCsiU({
		flags: t.flags,
		type: t.type,
		primaryCodePoint: s,
		shiftedCodePoint: singleCodePoint(p),
		baseCodePoint: i === void 0 ? singleCodePoint(o) : void 0,
		shiftKey: e.shiftKey,
		altKey: e.altKey,
		ctrlKey: e.ctrlKey,
		metaKey: e.metaKey,
		capsLock: n,
		numLock: r,
		associatedText: i === void 0 ? t.associatedText : void 0
	});
}
function encodeImeCommitForKitty(e, t, n) {
	if (!e) return {
		report: null,
		release: null
	};
	let r = {
		...e,
		altKey: !1,
		ctrlKey: !1,
		metaKey: !1
	}, o = resolveTerminalKittyPrimaryCodePoint(r, {
		layoutCharacterForCode: n.layoutCharacterForCode,
		primaryCharacterFallback: e.key
	}), s = kittyFunctionalNumpadCodePointForEvent(e) !== void 0 && (t & 3) != 0;
	return {
		report: !kittyReportsAllKeysAsEscapeCodes(t) && !s ? null : encodeTerminalOptionKittyEvent(r, {
			flags: t,
			type: e.repeat === !0 ? "repeat" : "press",
			layoutCharacterForCode: n.layoutCharacterForCode,
			associatedText: n.committedText,
			primaryCharacterFallback: e.key,
			primaryCodePoint: o
		}),
		release: !(t & 2) || o === void 0 ? null : {
			flags: t,
			primaryCodePoint: o
		}
	};
}
function encodeImeReleaseForKitty(e, t, n) {
	if (!(n.currentKittyKeyboardFlags & 2)) return null;
	let r = t.key.length === 1 || n.press === void 0 ? t : {
		...t,
		key: n.press.key,
		code: n.press.code ?? t.code
	};
	return encodeTerminalOptionKittyEvent({
		...r,
		altKey: t.altKey === !0,
		ctrlKey: t.ctrlKey === !0,
		metaKey: t.metaKey === !0
	}, {
		flags: e.flags,
		type: "release",
		layoutCharacterForCode: n.layoutCharacterForCode,
		primaryCharacterFallback: r.key,
		primaryCodePoint: e.primaryCodePoint
	});
}
var cachedLayoutCharacters = {
	layoutMap: null,
	nativeKeyCharacters: null
}, focusListenerAttached = !1, refreshGeneration = 0, layoutChangeGeneration = 0, layoutRefreshBlocked = !1;
function getKeyboardLayoutAppApi() {
	return globalThis.window?.api?.app;
}
async function refreshLayoutMap() {
	if (layoutRefreshBlocked) return;
	let e = ++refreshGeneration, t = window.navigator.keyboard, n = getKeyboardLayoutAppApi()?.getKeyboardLayoutSnapshot, [r, i] = await Promise.allSettled([t?.getLayoutMap?.() ?? Promise.resolve(null), n?.() ?? Promise.resolve(null)]);
	if (e !== refreshGeneration) return;
	let o = r.status === "fulfilled" ? r.value : null, s = i.status === "fulfilled" ? i.value : null, p = s && Object.keys(s.keyCharacters).length > 0 ? s.keyCharacters : null;
	(o || p) && (cachedLayoutCharacters = {
		layoutMap: o,
		nativeKeyCharacters: p
	});
}
function refreshAfterKeyboardLayoutChange(e) {
	e.generation < layoutChangeGeneration || (layoutChangeGeneration = e.generation, e.phase === "invalidated" ? (layoutRefreshBlocked = !0, cachedLayoutCharacters = {
		layoutMap: null,
		nativeKeyCharacters: null
	}) : layoutRefreshBlocked = !1, ++refreshGeneration, e.phase === "refresh" && refreshLayoutMap());
}
function prefetchLayoutCharacters() {
	focusListenerAttached || typeof window > "u" || (focusListenerAttached = !0, window, window.addEventListener("focus", refreshOnFocus), getKeyboardLayoutAppApi()?.onKeyboardLayoutChanged?.(refreshAfterKeyboardLayoutChange), refreshLayoutMap());
}
function refreshOnFocus() {
	refreshLayoutMap();
}
function normalizeLayoutBaseCharacter(e) {
	return normalizeLayoutCharacter(e?.toLowerCase());
}
function normalizeLayoutCharacter(e) {
	if (e && [...e].length === 1) return e.codePointAt(0) < 32 ? void 0 : e;
}
function getLayoutBaseCharacterForCode(e) {
	let t = cachedLayoutCharacters.nativeKeyCharacters;
	return normalizeLayoutBaseCharacter(t ? t[e]?.unmodified ?? void 0 : cachedLayoutCharacters.layoutMap?.get(e) ?? void 0);
}
function getLayoutCharacterForCode(e, t) {
	if (!t) return getLayoutBaseCharacterForCode(e);
	let n = normalizeLayoutCharacter(cachedLayoutCharacters.nativeKeyCharacters?.[e]?.shifted);
	if (n) return n;
	let r = getLayoutBaseCharacterForCode(e);
	if (!(!e.startsWith("Key") || !r)) return normalizeLayoutCharacter(r.toUpperCase());
}
var MODIFIER_KEYDOWN_KEYS = new Set([
	"Shift",
	"Control",
	"Alt",
	"Meta",
	"CapsLock",
	"AltGraph",
	"Fn"
]);
const XTERM_COMPOSITION_TRANSACTION_ACCEPTED_EVENT = "xterm-composition-transaction-accepted", XTERM_COMPOSITION_TRANSACTION_SETTLED_EVENT = "xterm-composition-transaction-settled";
function isNativeTextKeydown(e, t) {
	return e.type === "keydown" && !e.ctrlKey && !e.altKey && !e.metaKey && e.key.length === 1 && e.isComposing !== !0 && !t;
}
function matchesClaimedPress(e, t) {
	return e.code && t.code ? e.code === t.code : e.key === t.key;
}
function claimedKeyId(e) {
	return e.code ?? e.key;
}
function installTerminalImeNativeTextForwarder(e) {
	if (!e.terminalElement) return {
		claimKeyEvent: () => !1,
		dispose: () => void 0
	};
	let t = e.terminalElement, n = !1, r = null, i = /* @__PURE__ */ new Map(), o = (e) => {
		let t = claimedKeyId(e);
		if (i.has(t)) return t;
		for (let [t, n] of i) if (matchesClaimedPress(e, n)) return t;
		return null;
	}, s = (t, n) => {
		let r = i.get(t);
		if (i.delete(t), !r?.obligation) return;
		let o = encodeImeReleaseForKitty(r.obligation, n, {
			press: {
				key: r.key,
				code: r.code
			},
			currentKittyKeyboardFlags: e.getKittyKeyboardFlags?.() ?? 0,
			layoutCharacterForCode: getLayoutCharacterForCode
		});
		o && e.sendInput(o);
	}, p = (e, t) => {
		let n = claimedKeyId(e.press), r = i.get(n);
		(t || !r) && i.set(n, {
			key: e.press.key,
			code: e.press.code,
			obligation: t ?? r?.obligation ?? null
		}), e.keyup && s(n, e.keyup);
	}, S = () => {
		n = !0;
	}, T = () => {
		n = !1;
	}, k = (t) => {
		if (t.type === "keydown") {
			if ((r && matchesClaimedPress(t, r.press) || r && !MODIFIER_KEYDOWN_KEYS.has(t.key)) && (p(r, null), r = null), t.repeat !== !0) {
				let e = o(t);
				e !== null && s(e, {
					key: t.key,
					code: t.code,
					shiftKey: t.shiftKey === !0,
					ctrlKey: t.ctrlKey,
					altKey: t.altKey,
					metaKey: t.metaKey,
					capsLock: t.getModifierState?.("CapsLock") === !0,
					numLock: t.getModifierState?.("NumLock") === !0
				});
			}
			return isNativeTextKeydown(t, e.isComposing()) ? (r = {
				press: {
					key: t.key,
					code: t.code,
					shiftKey: t.shiftKey === !0,
					repeat: t.repeat === !0,
					capsLock: t.getModifierState?.("CapsLock") === !0,
					numLock: t.getModifierState?.("NumLock") === !0
				},
				keyup: null
			}, !0) : !1;
		}
		if (t.type === "keyup") {
			if (r && matchesClaimedPress(t, r.press)) return r.keyup = {
				key: t.key,
				code: t.code,
				shiftKey: t.shiftKey === !0,
				ctrlKey: t.ctrlKey,
				altKey: t.altKey,
				metaKey: t.metaKey,
				capsLock: t.getModifierState?.("CapsLock") === !0,
				numLock: t.getModifierState?.("NumLock") === !0
			}, !0;
			let e = o(t);
			return e === null ? !1 : (s(e, {
				key: t.key,
				code: t.code,
				shiftKey: t.shiftKey === !0,
				ctrlKey: t.ctrlKey,
				altKey: t.altKey,
				metaKey: t.metaKey,
				capsLock: t.getModifierState?.("CapsLock") === !0,
				numLock: t.getModifierState?.("NumLock") === !0
			}), !0);
		}
		return t.type === "keypress" && r !== null;
	}, A = (t) => {
		if (!(t instanceof InputEvent)) return;
		if (n && t.inputType === "insertText") {
			r &&= (p(r, null), null), t.stopImmediatePropagation();
			return;
		}
		let i = r;
		if (i) {
			if (r = null, t.inputType !== "insertText") {
				p(i, null);
				return;
			}
			if (t.data) {
				let n = encodeImeCommitForKitty(i.press, e.getKittyKeyboardFlags?.() ?? 0, {
					committedText: t.data,
					layoutCharacterForCode: getLayoutCharacterForCode
				});
				e.sendInput(n.report ?? t.data), p(i, n.release);
			} else p(i, null);
			t.stopImmediatePropagation(), t.target instanceof HTMLTextAreaElement && (t.target.value = "");
		}
	}, Sl = () => {
		n = !1, r = null, i.clear();
	};
	return t.addEventListener(XTERM_COMPOSITION_TRANSACTION_ACCEPTED_EVENT, S, !0), t.addEventListener(XTERM_COMPOSITION_TRANSACTION_SETTLED_EVENT, T, !0), t.addEventListener("input", A, !0), t.addEventListener("blur", Sl, !0), {
		claimKeyEvent: k,
		dispose: () => {
			Sl(), t.removeEventListener(XTERM_COMPOSITION_TRANSACTION_ACCEPTED_EVENT, S, !0), t.removeEventListener(XTERM_COMPOSITION_TRANSACTION_SETTLED_EVENT, T, !0), t.removeEventListener("input", A, !0), t.removeEventListener("blur", Sl, !0);
		}
	};
}
var LEADING_SPACES = /^ */;
function parseLine(e) {
	let t = e.endsWith("\r"), n = t ? e.slice(0, -1) : e;
	return {
		indent: LEADING_SPACES.exec(n)?.[0].length ?? 0,
		text: n,
		terminator: t ? "\r" : ""
	};
}
function measureGutter(e) {
	let t = Infinity;
	for (let { indent: n, text: r } of e) if (n !== r.length && (t = Math.min(t, n), t === 0)) return 0;
	return Number.isFinite(t) ? t : 0;
}
function stripTerminalSelectionGutter(e) {
	let t = e.split("\n").map(parseLine), n = measureGutter(t);
	return n === 0 ? e : t.map(({ indent: e, text: t, terminator: r }) => t.slice(Math.min(e, n)) + r).join("\n");
}
function readTerminalClipboardSelection(e) {
	let t = e.getSelection();
	return useAppStore.getState().settings?.terminalCopyTrimsGutter === !1 ? t : stripTerminalSelectionGutter(t);
}
async function copyTerminalSelection({ terminal: e, writeClipboardText: t, clearSelectionOnSuccess: n = !1 }) {
	let r = readTerminalClipboardSelection(e);
	return r ? (await t(r), n && e.clearSelection(), !0) : !1;
}
function installTerminalNativeCopyGutterTrim(e) {
	let t = e.element;
	if (!t) return { dispose: () => {} };
	let n = (t) => {
		!e.hasSelection() || !t.clipboardData || (t.clipboardData.setData("text/plain", readTerminalClipboardSelection(e)), t.preventDefault(), t.stopImmediatePropagation());
	};
	return t.addEventListener("copy", n, { capture: !0 }), { dispose: () => t.removeEventListener("copy", n, { capture: !0 }) };
}
function sideBit(e) {
	return e === 1 || e === 2 ? e : null;
}
function createOptionKeyLocationTracker() {
	let e = 0;
	return {
		keyDown: (t) => {
			if (t.key !== "Alt") return;
			let n = sideBit(t.location);
			e = n === null ? 0 : e | n;
		},
		keyUp: (t) => {
			if (t.key !== "Alt") return;
			let n = sideBit(t.location);
			e = n === null ? 0 : e & ~n;
		},
		clear: () => {
			e = 0;
		},
		get: () => e
	};
}
function keyIdentity(e) {
	return e.code || e.key;
}
function createTerminalOptionKittyReleaseTracker() {
	let e = /* @__PURE__ */ new Map(), t = (t, n) => {
		let r = keyIdentity(t);
		(t.repeat !== !0 || !e.has(r)) && e.set(r, n);
	};
	return {
		arm: (e, n, r, i, o) => {
			if (!(n.flags & 2)) return;
			let s = resolveTerminalKittyPrimaryCodePoint(e, {
				layoutCharacterForCode: o,
				primaryCharacterFallback: optionKittyPrimaryCharacterFallback(e)
			});
			s !== void 0 && t(e, {
				type: "report",
				sendInput: r,
				getCurrentFlags: i,
				layoutCharacterForCode: o,
				primaryCodePoint: s
			});
		},
		armNativeDeadKey: (e) => t(e, { type: "consumeNativeDeadKey" }),
		settle: (t) => {
			let n = keyIdentity(t), r = e.get(n);
			if (!r) return !1;
			if (e.delete(n), r.type === "consumeNativeDeadKey") return !0;
			let i = r.getCurrentFlags();
			if (i & 2) {
				let e = encodeTerminalOptionKittyEvent(t, {
					flags: i,
					type: "release",
					layoutCharacterForCode: r.layoutCharacterForCode,
					primaryCharacterFallback: optionKittyPrimaryCharacterFallback(t),
					primaryCodePoint: r.primaryCodePoint
				});
				e && r.sendInput(e);
			}
			return !0;
		},
		clear: () => e.clear()
	};
}
function createRelease(e) {
	return e & 2 ? { flags: e } : void 0;
}
function isLayoutComposedAsciiCharacter(e, t) {
	if (e.length !== 1) return !1;
	let n = e.codePointAt(0);
	return n > 32 && n <= 126 && (t === void 0 || e.toLowerCase() !== t.toLowerCase());
}
function isImeOwnedKey(e) {
	return e.isComposing === !0 || e.keyCode === 229 || e.key === "Dead" || e.key === "Process" || e.key === "Unidentified";
}
function kittyEncodesModifiedTextKeys(e) {
	return kittyReportsAllKeysAsEscapeCodes(e) || (e & 3) != 0;
}
function resolveTerminalOptionShortcutAction(e, t) {
	if (!t.isMac || e.metaKey || e.ctrlKey || !e.altKey) return null;
	let n = (t.optionKeyLocations & 1) != 0, r = (t.optionKeyLocations & 2) != 0, o = t.macOptionAsAlt === "true" || t.macOptionAsAlt === "left" && n || t.macOptionAsAlt === "right" && r, s = t.macOptionAsAlt === "false" || t.macOptionAsAlt === "left" && !n && r || t.macOptionAsAlt === "right" && n && !r, p = e.key === "Dead" && t.macOptionAsAlt !== "true" && o && !e.shiftKey, S = t.getKittyKeyboardFlags();
	if (e.key === "Dead" && t.macOptionAsAlt !== "true" && !p) return S & 2 ? { type: "trackNativeOptionDeadKey" } : null;
	if (isImeOwnedKey(e) && !p || t.macOptionAsAlt === "true" && S === 0) return null;
	if (e.key !== "Dead" && kittyEncodesModifiedTextKeys(S)) {
		let n = e.code?.startsWith("Numpad") === !0, r = optionKittyPrimaryCharacterFallback(e), o = (e.code ? t.layoutCharacterForCode?.(e.code, !1) : void 0) ?? pc101CharacterForCode(e.code), p = e.code ? t.layoutCharacterForCode?.(e.code, e.shiftKey) ?? (e.shiftKey ? e.code.startsWith("Key") ? o?.toUpperCase() : void 0 : o) : void 0;
		if (!kittyReportsAllKeysAsEscapeCodes(S) && s && !n && isLayoutComposedAsciiCharacter(e.key, p)) return {
			type: "sendInput",
			data: e.key,
			optionKittyRelease: createRelease(S)
		};
		if (o || n || r) {
			let n = encodeTerminalOptionKittyEvent(e, {
				flags: S,
				type: e.repeat === !0 ? "repeat" : "press",
				layoutCharacterForCode: t.layoutCharacterForCode,
				primaryCharacterFallback: r,
				associatedText: kittyReportsAllKeysAsEscapeCodes(S) && s ? e.key : void 0
			});
			if (n) return {
				type: "sendInput",
				data: n,
				optionKittyRelease: createRelease(S)
			};
		}
	}
	if (!e.shiftKey) {
		if (o) {
			let n = (e.code ? t.layoutCharacterForCode?.(e.code, !1) : void 0) ?? pc101CharacterForCode(e.code);
			if (n) return {
				type: "sendInput",
				data: `\x1b${n}`,
				...p && S & 2 ? { consumeOptionKeyUp: !0 } : {}
			};
		}
		if (!o) {
			if (e.code === "KeyB") return {
				type: "sendInput",
				data: "\x1Bb"
			};
			if (e.code === "KeyF") return {
				type: "sendInput",
				data: "\x1Bf"
			};
			if (e.code === "KeyD") return {
				type: "sendInput",
				data: "\x1Bd"
			};
		}
	}
	return e.key === "Dead" && t.macOptionAsAlt !== "true" && S & 2 ? { type: "trackNativeOptionDeadKey" } : null;
}
function isTerminalPaneCloseChord(e, t, n, r, i) {
	return keybindingMatchesAction("terminal.closePane", e, t, n, r) || keybindingMatchesAction("tab.close", e, t, n, i);
}
function resolveTerminalShortcutAction(e, t, n = "false", r = 0, i = !1, o, s, p, S, T, k = () => i, A = "orca-first", Sl) {
	let Cl = t ? "darwin" : i ? "win32" : "linux";
	if (keybindingMatchesAction("terminal.switchInputSource", e, Cl, o)) return { type: "switchInputSource" };
	if (keybindingMatchesAction("terminal.selectAll", e, Cl, o)) return { type: "selectAll" };
	if (!e.repeat) {
		if (keybindingMatchesAction("terminal.copySelection", e, Cl, o)) return { type: "copySelection" };
		if (keybindingMatchesAction("terminal.search", e, Cl, o)) return { type: "toggleSearch" };
		if (keybindingMatchesAction("terminal.clear", e, Cl, o)) return { type: "clearActivePane" };
		if (keybindingMatchesAction("terminal.focusPreviousPane", e, Cl, o)) return {
			type: "focusPane",
			direction: "previous"
		};
		if (keybindingMatchesAction("terminal.focusNextPane", e, Cl, o)) return {
			type: "focusPane",
			direction: "next"
		};
		if (keybindingMatchesAction("terminal.equalizePaneSizes", e, Cl, o)) return { type: "equalizePaneSizes" };
		if (keybindingMatchesAction("terminal.expandPane", e, Cl, o)) return { type: "toggleExpandActivePane" };
		if (keybindingMatchesAction("terminal.setTitle", e, Cl, o)) return { type: "setTitle" };
		if (keybindingMatchesAction("terminal.clearPaneTitle", e, Cl, o)) return { type: "clearPaneTitle" };
		if (isTerminalPaneCloseChord(e, Cl, o, void 0, {
			context: "terminal",
			terminalShortcutPolicy: A
		})) return { type: "closeActivePane" };
		if (keybindingMatchesAction("terminal.splitRight", e, Cl, o)) return {
			type: "splitActivePane",
			direction: "vertical"
		};
		if (keybindingMatchesAction("terminal.splitDown", e, Cl, o)) return {
			type: "splitActivePane",
			direction: "horizontal"
		};
	}
	if (!e.metaKey && !e.ctrlKey && !e.altKey && e.shiftKey && e.key === "Enter") return {
		type: "sendInput",
		data: k() && T?.() === "csi-u" || (p?.() ?? 0) > 0 ? "\x1B[13;2u" : "\x1B\r"
	};
	if (e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey && e.key === "Enter") return {
		type: "sendInput",
		data: s?.() !== !0 || (p?.() ?? 0) > 0 || Sl?.() === !0 ? "\x1B[13;5u" : "\r"
	};
	if (e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey && e.key === "Backspace") return {
		type: "sendInput",
		data: ""
	};
	if (t && e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
		if (e.key === "Backspace") return {
			type: "sendInput",
			data: ""
		};
		if (e.key === "Delete") return {
			type: "sendInput",
			data: "\v"
		};
		if (e.key === "ArrowLeft") return {
			type: "sendInput",
			data: ""
		};
		if (e.key === "ArrowRight") return {
			type: "sendInput",
			data: ""
		};
		if (e.key === "ArrowUp") return {
			type: "scrollViewport",
			position: "top"
		};
		if (e.key === "ArrowDown") return {
			type: "scrollViewport",
			position: "bottom"
		};
	}
	return !e.metaKey && !e.ctrlKey && e.altKey && !e.shiftKey && e.key === "Backspace" ? (p?.() ?? 0) > 0 ? null : {
		type: "sendInput",
		data: "\x1B"
	} : !e.metaKey && !e.ctrlKey && e.altKey && !e.shiftKey && e.code?.startsWith("Numpad") !== !0 && (e.key === "ArrowLeft" || e.key === "ArrowRight") ? (p?.() ?? 0) > 0 ? null : {
		type: "sendInput",
		data: e.key === "ArrowLeft" ? "\x1Bb" : "\x1Bf"
	} : !t && !e.metaKey && e.ctrlKey && !e.altKey && !e.shiftKey && (e.key === "ArrowLeft" || e.key === "ArrowRight") ? s?.() ? null : {
		type: "sendInput",
		data: e.key === "ArrowLeft" ? "\x1Bb" : "\x1Bf"
	} : resolveTerminalOptionShortcutAction(e, {
		isMac: t,
		macOptionAsAlt: n,
		optionKeyLocations: r,
		getKittyKeyboardFlags: () => p?.() ?? 0,
		layoutCharacterForCode: S
	}) || null;
}
function getTerminalShortcutKeyIdentity(e) {
	return e.code?.trim() || (e.key === " " || e.key === "Spacebar" || e.key === "Space" ? "Space" : e.key);
}
function getCompanionKeyCandidates(e) {
	let t = new Set([getTerminalShortcutKeyIdentity(e)]);
	return e.code?.trim() && t.add(e.code.trim()), (e.key === " " || e.key === "Spacebar" || e.key === "Space") && t.add("Space"), t;
}
function consumeCompanion(e, t) {
	if (e.type !== "keypress" && e.type !== "keyup") return !1;
	let n = getCompanionKeyCandidates(e), r = null;
	for (let e of n) if (t.has(e)) {
		r = e;
		break;
	}
	if (!r) return !1;
	if (e.type === "keyup") {
		t.delete(r);
		for (let e of n) t.delete(e);
	}
	return !0;
}
function getExpectedText(e) {
	return e === "Spacebar" || e === "Space" ? " " : e.length === 1 ? e : null;
}
function createTerminalNativeOnlyShortcutTracker() {
	let e = /* @__PURE__ */ new Map();
	return {
		prepareKeyDown: (t) => {
			t.repeat || e.delete(getTerminalShortcutKeyIdentity(t));
		},
		armKeyDown: (t) => {
			e.set(getTerminalShortcutKeyIdentity(t), t.key);
		},
		consumeCompanion: (t) => consumeCompanion(t, e),
		shouldSuppressBeforeInput: (t) => {
			if (t.inputType !== "insertText" || t.isComposing) return !1;
			for (let n of e.values()) if (getExpectedText(n) === t.data) return !0;
			return !1;
		},
		clear: () => e.clear()
	};
}
export { require_addon_ligatures as A, isTerminalOwnedLinkGesture as B, installGuardedLinkProviderRegistration as C, installTerminalImeCandidateAnchor as D, f$1 as E, useDetectedOptionAsAlt as F, TERMINAL_PASTE_MAX_BYTES as H, useEffectiveMacOptionAsAlt as I, isTerminalLinkActionActivation as L, TERMINAL_TUI_MOUSE_WHEEL_MULTIPLIER as M, normalizeTerminalTuiMouseWheelMultiplier as N, resolveCursorAgentImeAnchor as O, activateOrcaTerminalUnicodeProvider as P, isTerminalLinkDirectActivation as R, installWindowsCtrlAltChordRepair as S, b$1 as T, TERMINAL_PASTE_OPERATION_TIMEOUT_MS as U, runTerminalPasteOperationWithTimeout as V, subscribeToTerminalUserInput as _, createOptionKeyLocationTracker as a, TerminalKittyKeyboardModeTracker as b, readTerminalClipboardSelection as c, getLayoutCharacterForCode as d, normalizeLayoutBaseCharacter as f, subscribeToTerminalInputData as g, installTerminalImeCompositionTracker as h, createTerminalOptionKittyReleaseTracker as i, attachTerminalMouseWheelMultiplier as j, TerminalLigaturesAddon as k, installTerminalImeNativeTextForwarder as l, TERMINAL_IME_CANDIDATE_GUARD_POST_COMPOSITION_MS as m, isTerminalPaneCloseChord as n, installTerminalNativeCopyGutterTrim as o, prefetchLayoutCharacters as p, resolveTerminalShortcutAction as r, copyTerminalSelection as s, createTerminalNativeOnlyShortcutTracker as t, getLayoutBaseCharacterForCode as u, planTerminalPasteWithYield as v, Rn as w, isTerminalHttpLinkActivation as x, executeTerminalPastePlan as y, isTerminalMiddleClickActivation as z };
