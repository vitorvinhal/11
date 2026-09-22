import { E as yieldToEventLoop, S as getUtf8ChunkEndIndex, T as readUtf8CodePointAt, x as getUtf8ByteLengthForCodePoint } from "./renderer-app-platform--nJ6HYmL.js";
function createRedactedTextControlPasteDiagnostic({ byteLength: e, chunksWritten: o, durationMs: s, hasControlSequences: c, lineCount: l, mode: u, reason: d, source: f, status: p }) {
	return [
		"text-control paste",
		`status=${p}`,
		u ? `mode=${u}` : null,
		"target=text-control",
		`source=${f}`,
		`bytes=${e}`,
		`lines=${l ?? "unknown"}`,
		`chunks=${o}`,
		`durationMs=${Math.max(0, Math.round(s))}`,
		`controls=${c ?? "unknown"}`,
		d ? `reason=${d}` : null,
		"content=redacted"
	].filter((e) => typeof e == "string").join(" ");
}
function getTextControlPasteSource(e) {
	return e ?? "programmatic";
}
function createTextControlPastedResult({ byteLength: e, chunksWritten: o, durationMs: s, hasControlSequences: c, lineCount: u, mode: d, source: f }) {
	return {
		status: "pasted",
		mode: d,
		byteLength: e,
		chunksWritten: o,
		durationMs: Math.max(0, Math.round(s)),
		redactedDiagnostic: createRedactedTextControlPasteDiagnostic({
			byteLength: e,
			chunksWritten: o,
			durationMs: s,
			hasControlSequences: c,
			lineCount: u,
			mode: d,
			source: f,
			status: "pasted"
		})
	};
}
function createTextControlRejectedResult(e, o, s, c) {
	let u = typeof o == "number" ? { byteLength: o } : o;
	return {
		status: "rejected",
		reason: e,
		byteLength: u.byteLength,
		chunksWritten: 0,
		durationMs: Math.max(0, Math.round(c)),
		redactedDiagnostic: createRedactedTextControlPasteDiagnostic({
			byteLength: u.byteLength,
			chunksWritten: 0,
			durationMs: c,
			hasControlSequences: u.hasControlSequences,
			lineCount: u.lineCount,
			reason: e,
			source: s,
			status: "rejected"
		})
	};
}
function createTextControlCancelledResult({ byteLength: e, chunksWritten: o, durationMs: s, hasControlSequences: c, lineCount: u, source: d }) {
	return {
		status: "cancelled",
		reason: "target-unavailable",
		byteLength: e,
		chunksWritten: o,
		durationMs: Math.max(0, Math.round(s)),
		redactedDiagnostic: createRedactedTextControlPasteDiagnostic({
			byteLength: e,
			chunksWritten: o,
			durationMs: s,
			hasControlSequences: c,
			lineCount: u,
			reason: "target-unavailable",
			source: d,
			status: "cancelled"
		})
	};
}
function measurePastePayloadMetadata(e, o = {}) {
	if (!e) return createEmptyPastePayloadMetadata();
	let l = o.stopAfterBytes, u = 0, d = !1, f = 0, p = 1, m = !1;
	for (let o = 0; o < e.length; o += 1) {
		let h = readUtf8CodePointAt(e, o);
		if (u += getUtf8ByteLengthForCodePoint(h), d ||= isPasteControlSequenceCodePoint(h), h === 13 ? (p += 1, f += 1, m = !0) : (h === 10 && (f += 1, m || (p += 1)), m = !1), Number.isFinite(l) && u > (l ?? 0)) return {
			byteLength: u,
			exceededLimit: !0,
			hasControlSequences: d,
			lineEndingByteLength: f,
			lineCount: p
		};
		h > 65535 && (o += 1);
	}
	return {
		byteLength: u,
		exceededLimit: !1,
		hasControlSequences: d,
		lineEndingByteLength: f,
		lineCount: p
	};
}
async function measurePastePayloadMetadataWithYield(o, l = {}) {
	if (!o) return createEmptyPastePayloadMetadata();
	let u = l.stopAfterBytes, d = Math.max(1, l.yieldAfterCodeUnits ?? 262144), f = l.yieldToEventLoop ?? yieldToEventLoop, p = d, m = 0, h = !1, v = 0, y = 1, b = !1;
	for (let e = 0; e < o.length; e += 1) {
		let l = readUtf8CodePointAt(o, e);
		if (m += getUtf8ByteLengthForCodePoint(l), h ||= isPasteControlSequenceCodePoint(l), l === 13 ? (y += 1, v += 1, b = !0) : (l === 10 && (v += 1, b || (y += 1)), b = !1), Number.isFinite(u) && m > (u ?? 0)) return {
			byteLength: m,
			exceededLimit: !0,
			hasControlSequences: h,
			lineEndingByteLength: v,
			lineCount: y
		};
		l > 65535 && (e += 1), e >= p && (await f(), p = e + d);
	}
	return {
		byteLength: m,
		exceededLimit: !1,
		hasControlSequences: h,
		lineEndingByteLength: v,
		lineCount: y
	};
}
function createEmptyPastePayloadMetadata() {
	return {
		byteLength: 0,
		exceededLimit: !1,
		hasControlSequences: !1,
		lineEndingByteLength: 0,
		lineCount: 0
	};
}
function isPasteControlSequenceCodePoint(e) {
	return e <= 8 || e === 11 || e === 12 || e >= 14 && e <= 31 || e === 127;
}
const TEXT_CONTROL_PASTE_DIRECT_MAX_BYTES = 64 * 1024, TEXT_CONTROL_PASTE_CHUNK_MAX_BYTES = 16 * 1024, TEXT_CONTROL_PASTE_MAX_BYTES = 16 * 1024 * 1024;
function measureTextControlPasteByteLength(e, o = {}) {
	let { byteLength: s, exceededLimit: c } = measurePastePayloadMetadata(e, o);
	return {
		byteLength: s,
		exceededLimit: c
	};
}
async function measureTextControlPasteByteLengthWithYield(e, o) {
	let { byteLength: s, exceededLimit: c } = await measurePastePayloadMetadataWithYield(e, {
		stopAfterBytes: o.stopAfterBytes,
		yieldAfterCodeUnits: o.yieldAfterCodeUnits ?? 65536,
		yieldToEventLoop: o.yieldToEventLoop
	});
	return {
		byteLength: s,
		exceededLimit: c
	};
}
async function measureTextControlPasteForExecution(e, o) {
	let s = o.maxBytes ?? 16777216;
	if (o.measuredByteLength !== void 0) return {
		byteLength: o.measuredByteLength,
		exceededLimit: o.measuredByteLength > s
	};
	let c = o.directMaxBytes ?? 65536, l = Math.min(c, s), u = measurePastePayloadMetadata(e, { stopAfterBytes: l });
	return !u.exceededLimit || l === s ? u : measurePastePayloadMetadataWithYield(e, {
		stopAfterBytes: s,
		yieldAfterCodeUnits: o.measureYieldAfterCodeUnits,
		yieldToEventLoop: o.yieldToEventLoop
	});
}
function shouldHandleTextControlPaste(e, o = {}) {
	if (!e) return !1;
	let s = o.maxBytes ?? 16777216, c = o.measuredByteLength === void 0 ? measureTextControlPasteByteLength(e, { stopAfterBytes: s }) : {
		byteLength: o.measuredByteLength,
		exceededLimit: o.measuredByteLength > s
	}, l = o.directMaxBytes ?? 65536;
	return c.exceededLimit || c.byteLength > l;
}
function dispatchTextControlInputEvent(e, o, s) {
	let c = typeof InputEvent == "function" ? new InputEvent("input", {
		bubbles: !0,
		cancelable: !1,
		data: o,
		inputType: s
	}) : new Event("input", {
		bubbles: !0,
		cancelable: !1
	});
	e.dispatchEvent(c);
}
function isTextControlPasteTargetAvailable(e, o) {
	return e.isConnected && !e.disabled && !e.readOnly && (o?.(e) ?? !0);
}
function getSelectionRange(e) {
	let o = e.selectionStart ?? e.value.length, s = e.selectionEnd ?? o;
	return {
		start: Math.min(o, s),
		end: Math.max(o, s)
	};
}
function defaultNow() {
	return globalThis.performance?.now?.() ?? Date.now();
}
async function pasteTextIntoTextControl(s, c, l = {}) {
	let m = getTextControlPasteSource(l.source), h = l.now ?? defaultNow, g = h(), _ = () => Math.max(0, h() - g), v = l.maxBytes ?? 16777216, y = l.directMaxBytes ?? 65536, b = await measureTextControlPasteForExecution(c, {
		directMaxBytes: y,
		maxBytes: v,
		measuredByteLength: l.measuredByteLength,
		measureYieldAfterCodeUnits: l.measureYieldAfterCodeUnits,
		yieldToEventLoop: l.yieldToEventLoop
	}), { byteLength: x } = b;
	if (x === 0) return createTextControlRejectedResult("empty", b, m, _());
	let S = l.chunkMaxBytes ?? 16384, C = l.canContinue, w = l.inputType ?? "insertFromPaste";
	if (b.exceededLimit) return createTextControlRejectedResult("too-large", b, m, _());
	if (!isTextControlPasteTargetAvailable(s, C)) return createTextControlRejectedResult("target-unavailable", b, m, _());
	try {
		if (s.focus(), x <= y) {
			let { start: e, end: o } = getSelectionRange(s);
			return s.setRangeText(c, e, o, "end"), dispatchTextControlInputEvent(s, c, w), createTextControlPastedResult({
				byteLength: x,
				chunksWritten: 1,
				hasControlSequences: b.hasControlSequences,
				lineCount: b.lineCount,
				mode: "direct",
				source: m,
				durationMs: _()
			});
		}
		let { start: u, end: f } = getSelectionRange(s);
		u !== f && s.setRangeText("", u, f, "end");
		let h = 0, g = 0;
		for (; g < c.length;) {
			if (!isTextControlPasteTargetAvailable(s, C)) return h > 0 && s.isConnected && dispatchTextControlInputEvent(s, null, w), createTextControlCancelledResult({
				byteLength: x,
				chunksWritten: h,
				hasControlSequences: b.hasControlSequences,
				lineCount: b.lineCount,
				source: m,
				durationMs: _()
			});
			let u = getUtf8ChunkEndIndex(c, g, S), d = c.slice(g, u), f = s.selectionStart ?? s.value.length;
			s.setRangeText(d, f, f, "end"), g = u, h += 1, g < c.length && await (l.yieldToEventLoop ?? yieldToEventLoop)();
		}
		return dispatchTextControlInputEvent(s, null, w), createTextControlPastedResult({
			byteLength: x,
			chunksWritten: h,
			hasControlSequences: b.hasControlSequences,
			lineCount: b.lineCount,
			mode: "chunked",
			source: m,
			durationMs: _()
		});
	} catch {
		return createTextControlRejectedResult("target-unavailable", b, m, _());
	}
}
export { TEXT_CONTROL_PASTE_CHUNK_MAX_BYTES as a, measurePastePayloadMetadataWithYield as c, shouldHandleTextControlPaste as i, createTextControlRejectedResult as l, measureTextControlPasteByteLengthWithYield as n, TEXT_CONTROL_PASTE_DIRECT_MAX_BYTES as o, pasteTextIntoTextControl as r, TEXT_CONTROL_PASTE_MAX_BYTES as s, measureTextControlPasteByteLength as t };
