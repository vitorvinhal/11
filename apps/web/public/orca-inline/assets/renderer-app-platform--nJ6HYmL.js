function createBrowserUuid() {
	let h = globalThis.crypto;
	if (typeof h?.randomUUID == "function") return h.randomUUID();
	let G = new Uint8Array(16);
	if (typeof h?.getRandomValues == "function") h.getRandomValues(G);
	else for (let h = 0; h < G.length; h += 1) G[h] = Math.floor(Math.random() * 256);
	return G[6] = G[6] & 15 | 64, G[8] = G[8] & 63 | 128, bytesToUuid(G);
}
function bytesToUuid(h) {
	let W = Array.from(h, (h) => h.toString(16).padStart(2, "0"));
	return `${W.slice(0, 4).join("")}-${W.slice(4, 6).join("")}-${W.slice(6, 8).join("")}-${W.slice(8, 10).join("")}-${W.slice(10, 16).join("")}`;
}
var pendingRendererYields = /* @__PURE__ */ new Map(), nextRendererYieldId = 0, rendererYieldChannel = null;
function isVitestEnvironment() {
	return typeof process < "u" && process.env?.VITEST === "true";
}
function getRendererYieldChannel() {
	return rendererYieldChannel || (rendererYieldChannel = new globalThis.MessageChannel(), rendererYieldChannel.port1.onmessage = (h) => {
		let W = h.data, K = typeof W == "number" ? pendingRendererYields.get(W) : void 0;
		K && (pendingRendererYields.delete(W), K());
	}), rendererYieldChannel;
}
function yieldToEventLoop() {
	return new Promise((h) => {
		if (isVitestEnvironment()) {
			globalThis.setTimeout(h, 0);
			return;
		}
		let W = globalThis.setImmediate;
		if (typeof window > "u" && W) {
			W(h);
			return;
		}
		if (typeof globalThis.MessageChannel == "function") {
			let W = nextRendererYieldId;
			nextRendererYieldId += 1, pendingRendererYields.set(W, h), getRendererYieldChannel().port2.postMessage(W);
			return;
		}
		globalThis.setTimeout(h, 0);
	});
}
function readUtf8CodePointAt(h, W) {
	let G = h.charCodeAt(W);
	if (G < 55296 || G > 56319 || W + 1 >= h.length) return G;
	let K = h.charCodeAt(W + 1);
	return K < 56320 || K > 57343 ? G : (G - 55296) * 1024 + (K - 56320) + 65536;
}
function measureUtf8ByteLength(h, W = {}) {
	let G = W.stopAfterBytes, K = 0;
	for (let W = 0; W < h.length; W += 1) {
		let q = readUtf8CodePointAt(h, W);
		if (K += getUtf8ByteLengthForCodePoint(q), Number.isFinite(G) && K > (G ?? 0)) return {
			byteLength: K,
			exceededLimit: !0
		};
		q > 65535 && (W += 1);
	}
	return {
		byteLength: K,
		exceededLimit: !1
	};
}
function getUtf8ByteLength(h) {
	return measureUtf8ByteLength(h).byteLength;
}
var MAX_UTF8_SCRATCH_BYTES = 1024 * 1024, utf8Encoder = new TextEncoder(), utf8Scratch = new Uint8Array();
function isUtf8ByteLengthWithinLimit(h, W) {
	return h.length === 0 ? !0 : h.length > W ? !1 : h.length * 3 <= W ? !0 : Number.isSafeInteger(W) && W <= MAX_UTF8_SCRATCH_BYTES ? (utf8Scratch.length < W && (utf8Scratch = new Uint8Array(W)), utf8Encoder.encodeInto(h, utf8Scratch.subarray(0, W)).read === h.length) : !measureUtf8ByteLength(h, { stopAfterBytes: W }).exceededLimit;
}
function clampUtf8TextTail(h, W) {
	if (!h || W <= 0) return {
		text: "",
		bytes: 0
	};
	let G = h.length, K = 0;
	for (; G > 0;) {
		let q = getPreviousUtf8CodePoint(h, G);
		if (q.bytes > W || K + q.bytes > W || (K += q.bytes, G = q.start, K >= W)) break;
	}
	return {
		text: h.slice(G),
		bytes: K
	};
}
function clampUtf8TextPrefix(h, W) {
	if (!h || W <= 0) return "";
	let G = 0, K = 0;
	for (; K < h.length;) {
		let q = readUtf8CodePointAt(h, K), J = getUtf8ByteLengthForCodePoint(q);
		if (G + J > W) break;
		G += J, K += q > 65535 ? 2 : 1;
	}
	return K === h.length ? h : h.slice(0, K);
}
function getUtf8ChunkEndIndex(h, W, G) {
	let K = 0, q = W;
	for (; q < h.length;) {
		let W = readUtf8CodePointAt(h, q), J = getUtf8ByteLengthForCodePoint(W);
		if (K > 0 && K + J > G) break;
		K += J, q += W > 65535 ? 2 : 1;
	}
	return q;
}
function getUtf8ByteLengthForCodePoint(h) {
	return h <= 127 ? 1 : h <= 2047 ? 2 : h <= 65535 ? 3 : 4;
}
function getPreviousUtf8CodePoint(h, W) {
	let G = W - 1, K = h.charCodeAt(G);
	if (K >= 56320 && K <= 57343 && G > 0) {
		let W = h.charCodeAt(G - 1);
		W >= 55296 && W <= 56319 && --G;
	}
	return {
		start: G,
		bytes: getUtf8ByteLengthForCodePoint(readUtf8CodePointAt(h, G))
	};
}
const CLIPBOARD_TEXT_MEASURE_YIELD_CODE_UNITS = 256 * 1024;
function measureClipboardTextByteLength(h, W = {}) {
	return measureUtf8ByteLength(h, W);
}
function getClipboardTextByteLength(h) {
	return measureClipboardTextByteLength(h).byteLength;
}
async function measureClipboardTextByteLengthWithYield(h, W = {}) {
	let G = W.stopAfterBytes, K = Math.max(1, W.yieldAfterCodeUnits ?? 262144), q = W.yieldToEventLoop ?? yieldToEventLoop, J = K, Y = 0;
	for (let W = 0; W < h.length; W += 1) {
		let X = readUtf8CodePointAt(h, W);
		if (Y += getUtf8ByteLengthForCodePoint(X), Number.isFinite(G) && Y > (G ?? 0)) return {
			byteLength: Y,
			exceededLimit: !0
		};
		X > 65535 && (W += 1), W >= J && (await q(), J = W + K);
	}
	return {
		byteLength: Y,
		exceededLimit: !1
	};
}
function isClipboardTextByteLengthOverLimit(h, W) {
	return h.length > W || measureClipboardTextByteLength(h, { stopAfterBytes: W }).exceededLimit;
}
async function isClipboardTextByteLengthOverLimitWithYield(h, W, G = {}) {
	return h.length > W ? !0 : (await measureClipboardTextByteLengthWithYield(h, {
		stopAfterBytes: W,
		yieldAfterCodeUnits: G.yieldAfterCodeUnits,
		yieldToEventLoop: G.yieldToEventLoop
	})).exceededLimit;
}
function getClipboardTextReadMaxBytes(h, W = 16777216) {
	return Number.isFinite(h?.maxBytes) && (h?.maxBytes ?? 0) > 0 ? Math.floor(h?.maxBytes ?? W) : W;
}
function getClipboardTextWriteMaxBytes(h, W = 16777216) {
	return Number.isFinite(h?.maxBytes) && (h?.maxBytes ?? 0) > 0 ? Math.floor(h?.maxBytes ?? W) : W;
}
async function assertClipboardTextWithinLimitWithYield(h, W) {
	if (await isClipboardTextByteLengthOverLimitWithYield(h, getClipboardTextReadMaxBytes(W))) throw Error("Clipboard text is too large for this paste target.");
	return h;
}
async function assertClipboardTextWriteWithinLimitWithYield(h, W) {
	if (await isClipboardTextByteLengthOverLimitWithYield(h, getClipboardTextWriteMaxBytes(W))) throw Error("Clipboard text is too large to copy safely.");
	return h;
}
function isClipboardTextTooLargeError(h) {
	return h instanceof Error && h.message.includes("Clipboard text is too large for this paste target.");
}
function isClipboardTextWriteTooLargeError(h) {
	return h instanceof Error && h.message.includes("Clipboard text is too large to copy safely.");
}
var ICO_MAX_IMAGES = 1024, JPEG_START_OF_FRAME_MARKERS = new Set([
	192,
	193,
	194,
	195,
	197,
	198,
	199,
	201,
	202,
	203,
	205,
	206,
	207
]), PNG_SIGNATURE = [
	137,
	80,
	78,
	71,
	13,
	10,
	26,
	10
];
function hasBytes(h, W, G) {
	return W >= 0 && G >= 0 && W + G <= h.byteLength;
}
function matchesBytes(h, W, G) {
	return hasBytes(h, W, G.length) && G.every((G, K) => h[W + K] === G);
}
function matchesAscii(h, W, G) {
	if (!hasBytes(h, W, G.length)) return !1;
	for (let K = 0; K < G.length; K += 1) if (h[W + K] !== G.charCodeAt(K)) return !1;
	return !0;
}
function readUint16Le(h, W) {
	return h[W] | h[W + 1] << 8;
}
function readUint16Be(h, W) {
	return h[W] << 8 | h[W + 1];
}
function readUint24Le(h, W) {
	return h[W] | h[W + 1] << 8 | h[W + 2] << 16;
}
function readUint32Le(h, W) {
	return (h[W] | h[W + 1] << 8 | h[W + 2] << 16 | h[W + 3] << 24) >>> 0;
}
function readUint32Be(h, W) {
	return (h[W] << 24 >>> 0 | h[W + 1] << 16 | h[W + 2] << 8 | h[W + 3]) >>> 0;
}
function readInt32Le(h, W) {
	return readUint32Le(h, W) | 0;
}
function positiveDimensions(h, W) {
	return Number.isSafeInteger(h) && Number.isSafeInteger(W) && h > 0 && W > 0 ? {
		width: h,
		height: W
	} : null;
}
function readPngDimensions(h) {
	return !matchesBytes(h, 0, PNG_SIGNATURE) || !hasBytes(h, 8, 16) || readUint32Be(h, 8) !== 13 || !matchesAscii(h, 12, "IHDR") ? null : positiveDimensions(readUint32Be(h, 16), readUint32Be(h, 20));
}
function readGifDimensions(h) {
	return !hasBytes(h, 0, 10) || !matchesAscii(h, 0, "GIF87a") && !matchesAscii(h, 0, "GIF89a") ? null : positiveDimensions(readUint16Le(h, 6), readUint16Le(h, 8));
}
function readJpegDimensions(h) {
	if (!hasBytes(h, 0, 4) || h[0] !== 255 || h[1] !== 216) return null;
	let W = 2, G = h.byteLength;
	for (; W < G;) {
		for (; W < G && h[W] === 255;) W += 1;
		let K = h[W];
		if (W += 1, K === void 0 || K === 0 || K === 217 || K === 218) return null;
		if (K === 1 || K >= 208 && K <= 216) continue;
		if (!hasBytes(h, W, 2)) return null;
		let q = readUint16Be(h, W);
		if (q < 2 || W + q > G) return null;
		if (JPEG_START_OF_FRAME_MARKERS.has(K)) return q >= 7 ? positiveDimensions(readUint16Be(h, W + 5), readUint16Be(h, W + 3)) : null;
		W += q;
	}
	return null;
}
function readWebpDimensions(h) {
	if (!hasBytes(h, 0, 20) || !matchesAscii(h, 0, "RIFF") || !matchesAscii(h, 8, "WEBP")) return null;
	let W = 12;
	for (; hasBytes(h, W, 8);) {
		let G = readUint32Le(h, W + 4), K = W + 8, q = K + G;
		if (matchesAscii(h, W, "VP8X") && G >= 10 && hasBytes(h, K, 10)) return positiveDimensions(readUint24Le(h, K + 4) + 1, readUint24Le(h, K + 7) + 1);
		if (matchesAscii(h, W, "VP8L") && G >= 5 && hasBytes(h, K, 5) && h[K] === 47) {
			let W = h[K + 1], G = h[K + 2], q = h[K + 3], J = h[K + 4];
			return positiveDimensions(1 + ((G & 63) << 8 | W), 1 + ((J & 15) << 10 | q << 2 | (G & 192) >> 6));
		}
		if (matchesAscii(h, W, "VP8 ") && G >= 10 && hasBytes(h, K, 10) && h[K + 3] === 157 && h[K + 4] === 1 && h[K + 5] === 42) return positiveDimensions(readUint16Le(h, K + 6) & 16383, readUint16Le(h, K + 8) & 16383);
		if (q > h.byteLength) return null;
		W = q + G % 2;
	}
	return null;
}
function readDibDimensions(h, W) {
	if (!hasBytes(h, W, 12)) return null;
	let G = readUint32Le(h, W);
	return G === 12 ? positiveDimensions(readUint16Le(h, W + 4), readUint16Le(h, W + 6)) : G < 40 || !hasBytes(h, W, 12) ? null : positiveDimensions(Math.abs(readInt32Le(h, W + 4)), Math.abs(readInt32Le(h, W + 8)));
}
function readBmpDimensions(h) {
	return matchesAscii(h, 0, "BM") ? readDibDimensions(h, 14) : null;
}
function readIcoDimensions(h) {
	if (!hasBytes(h, 0, 6) || readUint16Le(h, 0) !== 0 || readUint16Le(h, 2) !== 1) return null;
	let W = readUint16Le(h, 4);
	if (W <= 0 || W > ICO_MAX_IMAGES || !hasBytes(h, 6, W * 16)) return null;
	let G = 0, K = 0;
	for (let q = 0; q < W; q += 1) {
		let W = 6 + q * 16, J = readUint32Le(h, W + 8), Y = readUint32Le(h, W + 12);
		if (J <= 0 || !hasBytes(h, Y, J)) return null;
		let X = h.subarray(Y, Y + J), Z = readPngDimensions(X) ?? readDibDimensions(X, 0), Q = Z?.width ?? (h[W] === 0 ? 256 : h[W]), $ = Z?.height ?? (h[W + 1] === 0 ? 256 : h[W + 1]);
		G = Math.max(G, Q), K = Math.max(K, $);
	}
	return positiveDimensions(G, K);
}
function readRasterImageDimensions(h) {
	return readPngDimensions(h) ?? readGifDimensions(h) ?? readJpegDimensions(h) ?? readWebpDimensions(h) ?? readBmpDimensions(h) ?? readIcoDimensions(h);
}
const RASTER_IMAGE_PREVIEW_HEADER_MAX_BYTES = 8 * 1024 * 1024, INVALID_RASTER_IMAGE_PREVIEW_ERROR = "Image preview has invalid or unsupported raster dimensions", RASTER_IMAGE_PREVIEW_TOO_LARGE_ERROR = "Image dimensions exceed the preview safety limit";
var RASTER_IMAGE_MIME_TYPES = new Set([
	"image/apng",
	"image/bmp",
	"image/gif",
	"image/ico",
	"image/jpeg",
	"image/jpg",
	"image/pjpeg",
	"image/png",
	"image/vnd.microsoft.icon",
	"image/webp",
	"image/x-bmp",
	"image/x-icon",
	"image/x-ms-bmp"
]);
function normalizeMimeType(h) {
	return h?.split(";", 1)[0]?.trim().toLowerCase() || null;
}
function isKnownRasterImageMimeType(h) {
	let W = normalizeMimeType(h);
	return W !== null && RASTER_IMAGE_MIME_TYPES.has(W);
}
function isRasterImagePreviewDimensions(h) {
	if (!h || typeof h != "object") return !1;
	let W = h;
	return Number.isSafeInteger(W.width) && Number.isSafeInteger(W.height) && W.width > 0 && W.height > 0 && W.width <= 32768 && W.height <= 32768 && W.width <= Math.floor(33554432 / W.height);
}
function assertRasterImagePreviewWithinLimits(h, W) {
	if (!isKnownRasterImageMimeType(W)) return;
	let G = readRasterImageDimensions(h);
	if (!G) throw Error(INVALID_RASTER_IMAGE_PREVIEW_ERROR);
	if (!isRasterImagePreviewDimensions(G)) throw Error(RASTER_IMAGE_PREVIEW_TOO_LARGE_ERROR);
	return G;
}
var cachedAppPlatform;
function getRendererAppPlatform() {
	if (cachedAppPlatform) return cachedAppPlatform;
	let h = typeof window > "u" ? void 0 : window.api?.platform?.get?.()?.platform;
	if (h) return cachedAppPlatform = h, h;
	let W = typeof navigator > "u" ? "" : navigator.userAgent;
	return W.includes("Windows") ? "win32" : W.includes("Mac") ? "darwin" : W ? "linux" : "win32";
}
export { isUtf8ByteLengthWithinLimit as C, createBrowserUuid as D, yieldToEventLoop as E, getUtf8ChunkEndIndex as S, readUtf8CodePointAt as T, measureClipboardTextByteLength as _, assertRasterImagePreviewWithinLimits as a, getUtf8ByteLength as b, readRasterImageDimensions as c, assertClipboardTextWriteWithinLimitWithYield as d, getClipboardTextByteLength as f, isClipboardTextWriteTooLargeError as g, isClipboardTextTooLargeError as h, RASTER_IMAGE_PREVIEW_TOO_LARGE_ERROR as i, CLIPBOARD_TEXT_MEASURE_YIELD_CODE_UNITS as l, isClipboardTextByteLengthOverLimitWithYield as m, INVALID_RASTER_IMAGE_PREVIEW_ERROR as n, isKnownRasterImageMimeType as o, isClipboardTextByteLengthOverLimit as p, RASTER_IMAGE_PREVIEW_HEADER_MAX_BYTES as r, isRasterImagePreviewDimensions as s, getRendererAppPlatform as t, assertClipboardTextWithinLimitWithYield as u, clampUtf8TextPrefix as v, measureUtf8ByteLength as w, getUtf8ByteLengthForCodePoint as x, clampUtf8TextTail as y };
