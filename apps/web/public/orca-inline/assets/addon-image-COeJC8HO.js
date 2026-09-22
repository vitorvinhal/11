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
var At = Object.create, Me = Object.defineProperty, st = Object.getOwnPropertyDescriptor, rt = Object.getOwnPropertyNames, nt = Object.getPrototypeOf, at = Object.prototype.hasOwnProperty, x = (e, d) => () => {
	try {
		return d || e((d = { exports: {} }).exports, d), d.exports;
	} catch (e) {
		throw d = 0, e;
	}
}, ot = (e, m, g, _) => {
	if (m && typeof m == "object" || typeof m == "function") for (let v of rt(m)) !at.call(e, v) && v !== g && Me(e, v, {
		get: () => m[v],
		enumerable: !(_ = st(m, v)) || _.enumerable
	});
	return e;
}, M = (f, p, h) => (h = f == null ? {} : At(nt(f)), ot(p || !f || !f.__esModule ? Me(h, "default", {
	value: f,
	enumerable: !0
}) : h, f)), Z = x((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DEFAULT_FOREGROUND = e.DEFAULT_BACKGROUND = e.PALETTE_ANSI_256 = e.PALETTE_VT340_GREY = e.PALETTE_VT340_COLOR = e.normalizeHLS = e.normalizeRGB = e.nearestColorIndex = e.fromRGBA8888 = e.toRGBA8888 = e.alpha = e.blue = e.green = e.red = e.BIG_ENDIAN = void 0, e.BIG_ENDIAN = new Uint8Array(new Uint32Array([4278190080]).buffer)[0] === 255, e.BIG_ENDIAN && console.warn("BE platform detected. This version of node-sixel works only on LE properly.");
	function d(e) {
		return e & 255;
	}
	e.red = d;
	function f(e) {
		return e >>> 8 & 255;
	}
	e.green = f;
	function p(e) {
		return e >>> 16 & 255;
	}
	e.blue = p;
	function m(e) {
		return e >>> 24 & 255;
	}
	e.alpha = m;
	function h(e, d, f, p = 255) {
		return ((p & 255) << 24 | (f & 255) << 16 | (d & 255) << 8 | e & 255) >>> 0;
	}
	e.toRGBA8888 = h;
	function g(e) {
		return [
			e & 255,
			e >> 8 & 255,
			e >> 16 & 255,
			e >>> 24
		];
	}
	e.fromRGBA8888 = g;
	function _(e, m) {
		let h = d(e), g = f(e), _ = p(e), v = 2 ** 53 - 1, b = -1;
		for (let e = 0; e < m.length; ++e) {
			let d = h - m[e][0], f = g - m[e][1], p = _ - m[e][2], S = d * d + f * f + p * p;
			if (!S) return e;
			S < v && (v = S, b = e);
		}
		return b;
	}
	e.nearestColorIndex = _;
	function v(e, d, f) {
		return Math.max(e, Math.min(f, d));
	}
	function b(e, d, f) {
		return f < 0 && (f += 1), f > 1 && --f, f * 6 < 1 ? d + (e - d) * 6 * f : f * 2 < 1 ? e : f * 3 < 2 ? d + (e - d) * (4 - f * 6) : d;
	}
	function S(e, d, f) {
		if (!f) {
			let e = Math.round(d * 255);
			return h(e, e, e);
		}
		let p = d < .5 ? d * (1 + f) : d + f - d * f, m = 2 * d - p;
		return h(v(0, 255, Math.round(b(p, m, e + 1 / 3) * 255)), v(0, 255, Math.round(b(p, m, e) * 255)), v(0, 255, Math.round(b(p, m, e - 1 / 3) * 255)));
	}
	function C(e, d, f) {
		return (4278190080 | Math.round(f / 100 * 255) << 16 | Math.round(d / 100 * 255) << 8 | Math.round(e / 100 * 255)) >>> 0;
	}
	e.normalizeRGB = C;
	function T(e, d, f) {
		return S((e + 240 % 360) / 360, d / 100, f / 100);
	}
	e.normalizeHLS = T, e.PALETTE_VT340_COLOR = new Uint32Array([
		C(0, 0, 0),
		C(20, 20, 80),
		C(80, 13, 13),
		C(20, 80, 20),
		C(80, 20, 80),
		C(20, 80, 80),
		C(80, 80, 20),
		C(53, 53, 53),
		C(26, 26, 26),
		C(33, 33, 60),
		C(60, 26, 26),
		C(33, 60, 33),
		C(60, 33, 60),
		C(33, 60, 60),
		C(60, 60, 33),
		C(80, 80, 80)
	]), e.PALETTE_VT340_GREY = new Uint32Array([
		C(0, 0, 0),
		C(13, 13, 13),
		C(26, 26, 26),
		C(40, 40, 40),
		C(6, 6, 6),
		C(20, 20, 20),
		C(33, 33, 33),
		C(46, 46, 46),
		C(0, 0, 0),
		C(13, 13, 13),
		C(26, 26, 26),
		C(40, 40, 40),
		C(6, 6, 6),
		C(20, 20, 20),
		C(33, 33, 33),
		C(46, 46, 46)
	]), e.PALETTE_ANSI_256 = (() => {
		let e = [
			h(0, 0, 0),
			h(205, 0, 0),
			h(0, 205, 0),
			h(205, 205, 0),
			h(0, 0, 238),
			h(205, 0, 205),
			h(0, 250, 205),
			h(229, 229, 229),
			h(127, 127, 127),
			h(255, 0, 0),
			h(0, 255, 0),
			h(255, 255, 0),
			h(92, 92, 255),
			h(255, 0, 255),
			h(0, 255, 255),
			h(255, 255, 255)
		], d = [
			0,
			95,
			135,
			175,
			215,
			255
		];
		for (let f = 0; f < 6; ++f) for (let p = 0; p < 6; ++p) for (let m = 0; m < 6; ++m) e.push(h(d[f], d[p], d[m]));
		for (let d = 8; d <= 238; d += 10) e.push(h(d, d, d));
		return new Uint32Array(e);
	})(), e.DEFAULT_BACKGROUND = h(0, 0, 0, 255), e.DEFAULT_FOREGROUND = h(255, 255, 255, 255);
}), _e = x((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.InWasm = f;
	var d = (e) => {
		if (Uint8Array.fromBase64) return Uint8Array.fromBase64(e);
		if (typeof Buffer < "u") return Buffer.from(e, "base64");
		let d = atob(e), f = new Uint8Array(d.length);
		for (let e = 0; e < f.length; ++e) f[e] = d.charCodeAt(e);
		return f;
	};
	function f(e) {
		if (e.d) {
			let { t: f, s: p, d: m } = e, h, g, _ = WebAssembly;
			return f === 0 ? p ? (e) => new _.Instance(g ||= new _.Module(h ||= d(m)), e) : (e) => g ? _.instantiate(g, e) : _.instantiate(h ||= d(m), e).then((e) => (g = e.module) && e.instance) : f === 1 ? p ? () => g ||= new _.Module(h ||= d(m)) : () => g ? Promise.resolve(g) : _.compile(h ||= d(m)).then((e) => g = e) : p ? () => h ||= d(m) : () => Promise.resolve(h ||= d(m));
		}
		if (typeof _wasmCtx > "u") throw Error("must run \"inwasm\"");
		_wasmCtx.add(e);
	}
}), Ce = x((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var d = (0, _e().InWasm)({
		s: 1,
		t: 0,
		d: "AGFzbQEAAAABBQFgAAF/Ag8BA2VudgZtZW1vcnkCAAEDAwIAAAcNAgNkZWMAAANlbmQAAQqLBgKZBAEKf0GIKCgCAEGgKGohAUGEKCgCACIDQaAoaiEAQYAoKAIAQQFrQXxxIgRBoChqIQUgBEEQayADSgRAIARBkChqIQMDQCABIABBA2otAABBAnQoAoAgIABBAmotAABBAnQoAoAYIABBAWotAABBAnQoAoAQIAAtAABBAnQoAoAIcnJyIgY2AgAgAUEDaiAAQQdqLQAAQQJ0KAKAICAAQQZqLQAAQQJ0KAKAGCAAQQVqLQAAQQJ0KAKAECAAQQRqLQAAQQJ0KAKACHJyciIHNgIAIAFBBmogAEELai0AAEECdCgCgCAgAEEKai0AAEECdCgCgBggAEEJai0AAEECdCgCgBAgAEEIai0AAEECdCgCgAhycnIiCDYCACABQQlqIABBD2otAABBAnQoAoAgIABBDmotAABBAnQoAoAYIABBDWotAABBAnQoAoAQIABBDGotAABBAnQoAoAIcnJyIgk2AgAgAiAGciAHciAIciAJciECIAFBDGohASAAQRBqIgAgA0kNAAsLIAAgBUkEQANAIAEgAEEDai0AAEECdCgCgCAgAEECai0AAEECdCgCgBggAEEBai0AAEECdCgCgBAgAC0AAEECdCgCgAhycnIiAzYCACACIANyIQIgAUEDaiEBIABBBGoiACAFSQ0ACwtBfyEAIAJB////B00Ef0GEKCAENgIAQYgoIAFBoChrNgIAQQAFQX8LC+0BAQR/AkBBgCgoAgAiAUGEKCgCACIAa0EFTgRAQX8hAxAADQFBgCgoAgAhAUGEKCgCACEAC0F/IQMgASAAayIBQQJIDQAgAC0AoShBAnQoAoAQIAAtAKAoQQJ0KAKACHIhAgJ/IAFBBEYEQEEDQQQgAC0AoyhBPUYbIAAtAKIoQT1GayEBC0EBIAFBA0kNABogAC0AoihBAnQoAoAYIAJyIQJBAiABQQRHDQAaIAAtAKMoQQJ0KAKAICACciECQQMLIQEgAkH///8HSw0AQQAhA0GIKCgCACIAIAI2AKAoQYgoIAAgAWo2AgALIAML"
	}), f = new Uint8Array("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("").map((e) => e.charCodeAt(0))), p = new Uint32Array(1024);
	p.fill(4278190080);
	for (let e = 0; e < f.length; ++e) p[f[e]] = e << 2;
	for (let e = 0; e < f.length; ++e) p[256 + f[e]] = e >> 4 | (e << 4 & 255) << 8;
	for (let e = 0; e < f.length; ++e) p[512 + f[e]] = e >> 2 << 8 | (e << 6 & 255) << 16;
	for (let e = 0; e < f.length; ++e) p[768 + f[e]] = e << 16;
	var m = new Uint8Array();
	e.default = class {
		constructor(e, d, f) {
			if (this._inst = null, this._ended = !0, this._bytes = 0, this.keepSize = e ?? 1048576, this.maxBytes = d ?? 4294901760, this._bytes = f ?? 32768, this._bytes > this.maxBytes || this.maxBytes > 4294901760) throw Error("invalid byte settings");
		}
		get data8() {
			return this._inst ? this._d.subarray(0, this._m32[1282]) : m;
		}
		release() {
			this._inst && (this._bytes > this.keepSize ? this._inst = this._m32 = this._d = this._mem = null : (this._m32[1280] = 0, this._m32[1281] = 0, this._m32[1282] = 0));
		}
		init(e, f) {
			if (this.maxBytes = e ?? this.maxBytes, this._bytes = f ?? Math.min(this._bytes, this.maxBytes), this._bytes > this.maxBytes || this.maxBytes > 4294901760) throw Error("invalid byte settings");
			let m = this._m32, h = this._bytes + 5152;
			this._inst ? this._mem.buffer.byteLength < h && (this._mem.grow(Math.ceil((h - this._mem.buffer.byteLength) / 65536)), m = new Uint32Array(this._mem.buffer, 0), this._d = new Uint8Array(this._mem.buffer, 5152)) : (this._mem = new WebAssembly.Memory({ initial: Math.ceil(h / 65536) }), this._inst = d({ env: { memory: this._mem } }), m = new Uint32Array(this._mem.buffer, 0), m.set(p, 256), this._d = new Uint8Array(this._mem.buffer, 5152)), m[1280] = 0, m[1281] = 0, m[1282] = 0, this._m32 = m, this._ended = !1;
		}
		_realloc(e) {
			let d = this._m32[1280] + e;
			if (this._bytes < d) {
				if (d > this.maxBytes) return -3;
				let e = this._bytes;
				for (; (e *= 2) < d;);
				if (e = Math.min(e, this.maxBytes), e < d) return -3;
				if (e + 5152 > this._mem.buffer.byteLength) {
					let d = Math.ceil((e + 5152 - this._mem.buffer.byteLength) / 65536);
					this._mem.grow(d), this._m32 = new Uint32Array(this._mem.buffer, 0), this._d = new Uint8Array(this._mem.buffer, 5152);
				}
				this._bytes = e;
			}
			return 0;
		}
		put(e) {
			if (!this._inst || this._ended) return -2;
			if (this._realloc(e.length)) return -3;
			let d = this._m32;
			return this._d.set(e, d[1280]), d[1280] += e.length, d[1280] - d[1281] >= 131072 ? this._inst.exports.dec() : 0;
		}
		end() {
			return this._ended = !0, this._inst ? this._inst.exports.end() : -2;
		}
		get loadedBytes() {
			return this._inst ? this._m32[1280] : 0;
		}
		get freeBytes() {
			return this._inst ? this.maxBytes - this._m32[1280] : 0;
		}
	};
}), Ne = x((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var d = (0, _e().InWasm)({
		s: 1,
		t: 0,
		d: "AGFzbQEAAAABCgJgAABgA39/fwACDwEDZW52Bm1lbW9yeQIAAQMDAgABBwcBA2RlYwABCAEACu4EAgwAQQBBAEGAAvwLAAveBAEJf0EAQQBBgAL8CwAgAUEXTgRAIAAgAWpBCGshCkGACCEBIAJBAnRBgAhqIQsgAEEOaiEDQf8BIQZBACECA0AgA0EBaiEHIAMtAAAiCEE/cSEAAkACQCAIQcABcSIJRQRAIABBAnQiAC0AAyEGIAAtAAIhBCAALQABIQUgAC0AACECIAchAwwBCwJAIAhB/QFLDQAgCUHAAUcNACAFQQVsIAJBA2xqIARBB2xqIAZBC2xqQT9xQQJ0IgMgBDoAAiADIAU6AAEgAyACOgAAIANBA2ogBjoAAANAIAEgAjoAACABQQNqIAY6AAAgAUECaiAEOgAAIAFBAWogBToAACABQQRqIQEgAEUEQCAHIQMMBAsgAEEBayEAIAEgC0kNAAsgByEDDAILAn8CQAJAAkAgCEH+AWsOAgABAgsgAy0AAyEEIAMtAAIhBSADLQABIQIgA0EEagwCCyADKAIBIgJBGHYhBiACQRB2IQQgAkEIdiEFIANBBWoMAQsgCUGAAUcEQCAHIAlBwABHDQEaIAQgCEEDcWpBAmshBCACIABBBHZqQQJrIQIgBSAIQQJ2QQNxakECayEFIAcMAQsgBCAAQShrIgkgAy0AASIHQQ9xamohBCACIAdBBHYgCWpqIQIgACAFakEgayEFIANBAmoLIQMgBUEFbCACQQNsaiAEQQdsaiAGQQtsakE/cUECdCIAIAQ6AAIgACAFOgABIAAgAjoAACAAQQNqIAY6AAALIAEgBjoAAyABIAQ6AAIgASAFOgABIAEgAjoAACABQQRqIQELIAMgCkkNAAsLCw=="
	});
	e.default = class {
		constructor(e) {
			this.keepSize = e, this.width = 0, this.height = 0;
		}
		decode(e) {
			this.width = e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], this.height = e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11];
			let f = this.width * this.height, p = f * 4, m = e.length, h = Math.max(p, m) + (Math.min(p, m) >> 1) + 4096;
			this._inst ? this._mem.buffer.byteLength < h && (this._mem.grow(Math.ceil((h - this._mem.buffer.byteLength) / 65536)), this._d = null) : (this._mem = new WebAssembly.Memory({ initial: Math.ceil(h / 65536) }), this._inst = d({ env: { memory: this._mem } })), this._d ||= new Uint8Array(this._mem.buffer);
			let g = this._mem.buffer.byteLength - m & -256;
			return this._d.set(e, g), this._inst.exports.dec(g, m, f), this._d.subarray(1024, 1024 + p);
		}
		release() {
			this._inst && this._mem.buffer.byteLength > this.keepSize && (this._inst = this._d = this._mem = null);
		}
	};
}), Ye = x((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LIMITS = void 0, e.LIMITS = {
		CHUNK_SIZE: 16384,
		PALETTE_SIZE: 4096,
		MAX_WIDTH: 16384,
		BYTES: "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AEHAiwIgADcDAEG4iwIgADcDAEGwiwIgADcDAEGoiwIgADcDAEGgiwIgADcDAEGYiwIgADcDAEGQiwIgADcDAEGIiwIgADcDAEGAiwIgADcDAEH4igIgADcDAEHwigIgADcDAEHoigIgADcDAEHgigIgADcDAEHYigIgADcDAEHQigIgADcDAEHIigIgADcDAEHAigIgADcDAEG4igIgADcDAEGwigIgADcDAEGoigIgADcDAEGgigIgADcDAEGYigIgADcDAEGQigIgADcDAEGIigIgADcDAEGAigIgADcDAEH4iQIgADcDAEHwiQIgADcDAEHoiQIgADcDAEHgiQIgADcDAEHYiQIgADcDAEHQiQIgADcDAEHIiQIgADcDAEHAiQIgADcDAEG4iQIgADcDAEGwiQIgADcDAEGoCCgCACIEQf8AakGAAW0hCAJAIARBgQFIDQBBASEBIAhBAiAIQQJKG0EBayICQQFxIQMgBEGBAk4EQCACQX5xIQIDQCABQQl0IgdBEHJBoIkCakGwiQJBgAT8CgAAIAdBsI0CakGwiQJBgAT8CgAAIAFBAmohASACQQJrIgINAAsLIANFDQAgAUEJdEEQckGgiQJqQbCJAkGABPwKAAALAkAgBEEBSA0AIAhBASAIQQFKGyIDQQFxIQUCQCADQQFrIgdFBEBBACEBDAELIANB/v///wdxIQJBACEBA0AgAUEJdCIGQRByQbCJBmpBsIkCQYAE/AoAACAGQZAEckGwiQZqQbCJAkGABPwKAAAgAUECaiEBIAJBAmsiAg0ACwsgBQRAIAFBCXRBEHJBsIkGakGwiQJBgAT8CgAACyAEQQFIDQAgA0EBcSEFIAcEfyADQf7///8HcSECQQAhAQNAIAFBCXQiBkEQckHAiQpqQbCJAkGABPwKAAAgBkGQBHJBwIkKakGwiQJBgAT8CgAAIAFBAmohASACQQJrIgINAAsgAUEHdEEEcgVBBAshASAFBEAgAUECdEHAiQpqQbCJAkGABPwKAAALIARBAUgNACADQQFxIQUgBwR/IANB/v///wdxIQJBACEBA0AgAUEJdCIGQRByQdCJDmpBsIkCQYAE/AoAACAGQZAEckHQiQ5qQbCJAkGABPwKAAAgAUECaiEBIAJBAmsiAg0ACyABQQd0QQRyBUEECyEBIAUEQCABQQJ0QdCJ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"
	};
}), We = x((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.decodeAsync = e.decode = e.Decoder = e.DecoderAsync = void 0;
	var d = Z(), f = Ye();
	function p(e) {
		if (typeof Buffer < "u") return Buffer.from(e, "base64");
		let d = atob(e), f = new Uint8Array(d.length);
		for (let e = 0; e < f.length; ++e) f[e] = d.charCodeAt(e);
		return f;
	}
	var m = p(f.LIMITS.BYTES), h, g = new Uint32Array(), _ = class {
		constructor() {
			this.bandHandler = (e) => 1, this.modeHandler = (e) => 1;
		}
		handle_band(e) {
			return this.bandHandler(e);
		}
		mode_parsed(e) {
			return this.modeHandler(e);
		}
	}, v = {
		memoryLimit: 2048 * 65536,
		sixelColor: d.DEFAULT_FOREGROUND,
		fillColor: d.DEFAULT_BACKGROUND,
		palette: d.PALETTE_VT340_COLOR,
		paletteLimit: f.LIMITS.PALETTE_SIZE,
		truncate: !0
	};
	function S(e) {
		let d = new _(), f = { env: {
			handle_band: d.handle_band.bind(d),
			mode_parsed: d.mode_parsed.bind(d)
		} };
		return WebAssembly.instantiate(h || m, f).then((f) => (h ||= f.module, new C(e, f.instance || f, d)));
	}
	e.DecoderAsync = S;
	var C = class {
		constructor(e, p, _) {
			if (this._PIXEL_OFFSET = f.LIMITS.MAX_WIDTH + 4, this._canvas = g, this._bandWidths = [], this._maxWidth = 0, this._minWidth = f.LIMITS.MAX_WIDTH, this._lastOffset = 0, this._currentHeight = 0, this._opts = Object.assign({}, v, e), this._opts.paletteLimit > f.LIMITS.PALETTE_SIZE) throw Error(`DecoderOptions.paletteLimit must not exceed ${f.LIMITS.PALETTE_SIZE}`);
			if (p) _.bandHandler = this._handle_band.bind(this), _.modeHandler = this._initCanvas.bind(this);
			else {
				let e = h ||= new WebAssembly.Module(m);
				p = new WebAssembly.Instance(e, { env: {
					handle_band: this._handle_band.bind(this),
					mode_parsed: this._initCanvas.bind(this)
				} });
			}
			this._instance = p, this._wasm = this._instance.exports, this._chunk = new Uint8Array(this._wasm.memory.buffer, this._wasm.get_chunk_address(), f.LIMITS.CHUNK_SIZE), this._states = new Uint32Array(this._wasm.memory.buffer, this._wasm.get_state_address(), 12), this._palette = new Uint32Array(this._wasm.memory.buffer, this._wasm.get_palette_address(), f.LIMITS.PALETTE_SIZE), this._palette.set(this._opts.palette), this._pSrc = new Uint32Array(this._wasm.memory.buffer, this._wasm.get_p0_address()), this._wasm.init(d.DEFAULT_FOREGROUND, 0, this._opts.paletteLimit, 0);
		}
		get _fillColor() {
			return this._states[0];
		}
		get _truncate() {
			return this._states[8];
		}
		get _rasterWidth() {
			return this._states[6];
		}
		get _rasterHeight() {
			return this._states[7];
		}
		get _width() {
			return this._states[2] ? this._states[2] - 4 : 0;
		}
		get _height() {
			return this._states[3];
		}
		get _level() {
			return this._states[9];
		}
		get _mode() {
			return this._states[10];
		}
		get _paletteLimit() {
			return this._states[11];
		}
		_initCanvas(e) {
			if (e === 2) {
				let e = this.width * this.height;
				if (e > this._canvas.length) {
					if (this._opts.memoryLimit && e * 4 > this._opts.memoryLimit) throw this.release(), /* @__PURE__ */ Error("image exceeds memory limit");
					this._canvas = new Uint32Array(e);
				}
				this._maxWidth = this._width;
			} else if (e === 1) if (this._level === 2) {
				let e = Math.min(this._rasterWidth, f.LIMITS.MAX_WIDTH) * this._rasterHeight;
				if (e > this._canvas.length) {
					if (this._opts.memoryLimit && e * 4 > this._opts.memoryLimit) throw this.release(), /* @__PURE__ */ Error("image exceeds memory limit");
					this._canvas = new Uint32Array(e);
				}
			} else this._canvas.length < 65536 && (this._canvas = new Uint32Array(65536));
			return 0;
		}
		_realloc(e, d) {
			let f = e + d;
			if (f > this._canvas.length) {
				if (this._opts.memoryLimit && f * 4 > this._opts.memoryLimit) throw this.release(), /* @__PURE__ */ Error("image exceeds memory limit");
				let e = new Uint32Array(Math.ceil(f / 65536) * 65536);
				e.set(this._canvas), this._canvas = e;
			}
		}
		_handle_band(e) {
			let d = this._PIXEL_OFFSET, f = this._lastOffset;
			if (this._mode === 2) {
				let p = this.height - this._currentHeight, m = 0;
				for (; m < 6 && p > 0;) this._canvas.set(this._pSrc.subarray(d * m, d * m + e), f + e * m), m++, p--;
				this._lastOffset += e * m, this._currentHeight += m;
			} else if (this._mode === 1) {
				this._realloc(f, e * 6), this._maxWidth = Math.max(this._maxWidth, e), this._minWidth = Math.min(this._minWidth, e);
				for (let p = 0; p < 6; ++p) this._canvas.set(this._pSrc.subarray(d * p, d * p + e), f + e * p);
				this._bandWidths.push(e), this._lastOffset += e * 6, this._currentHeight += 6;
			}
			return 0;
		}
		get width() {
			return this._mode === 1 ? Math.max(this._maxWidth, this._wasm.current_width()) : this._width;
		}
		get height() {
			return this._mode === 1 ? this._wasm.current_width() ? this._bandWidths.length * 6 + this._wasm.current_height() : this._bandWidths.length * 6 : this._height;
		}
		get palette() {
			return this._palette.subarray(0, this._paletteLimit);
		}
		get memoryUsage() {
			return this._canvas.byteLength + this._wasm.memory.buffer.byteLength + 8 * this._bandWidths.length;
		}
		get properties() {
			return {
				width: this.width,
				height: this.height,
				mode: this._mode,
				level: this._level,
				truncate: !!this._truncate,
				paletteLimit: this._paletteLimit,
				fillColor: this._fillColor,
				memUsage: this.memoryUsage,
				rasterAttributes: {
					numerator: this._states[4],
					denominator: this._states[5],
					width: this._rasterWidth,
					height: this._rasterHeight
				}
			};
		}
		init(e = this._opts.fillColor, d = this._opts.palette, p = this._opts.paletteLimit, m = this._opts.truncate) {
			this._wasm.init(this._opts.sixelColor, e, p, m ? 1 : 0), d && this._palette.set(d.subarray(0, f.LIMITS.PALETTE_SIZE)), this._bandWidths.length = 0, this._maxWidth = 0, this._minWidth = f.LIMITS.MAX_WIDTH, this._lastOffset = 0, this._currentHeight = 0;
		}
		decode(e, d = 0, p = e.length) {
			let m = d;
			for (; m < p;) {
				let d = Math.min(p - m, f.LIMITS.CHUNK_SIZE);
				this._chunk.set(e.subarray(m, m += d)), this._wasm.decode(0, d);
			}
		}
		decodeString(e, d = 0, p = e.length) {
			let m = d;
			for (; m < p;) {
				let d = Math.min(p - m, f.LIMITS.CHUNK_SIZE);
				for (let f = 0, p = m; f < d; ++f, ++p) this._chunk[f] = e.charCodeAt(p);
				m += d, this._wasm.decode(0, d);
			}
		}
		get data32() {
			if (this._mode === 0 || !this.width || !this.height) return g;
			let e = this._wasm.current_width();
			if (this._mode === 2) {
				let d = this.height - this._currentHeight;
				if (d > 0) {
					let f = this._PIXEL_OFFSET, p = this._lastOffset, m = 0;
					for (; m < 6 && d > 0;) this._canvas.set(this._pSrc.subarray(f * m, f * m + e), p + e * m), m++, d--;
					d && this._canvas.fill(this._fillColor, p + e * m);
				}
				return this._canvas.subarray(0, this.width * this.height);
			}
			if (this._mode === 1) {
				if (this._minWidth === this._maxWidth) {
					let d = !1;
					if (e) if (e !== this._minWidth) d = !0;
					else {
						let d = this._PIXEL_OFFSET, f = this._lastOffset;
						this._realloc(f, e * 6);
						for (let p = 0; p < 6; ++p) this._canvas.set(this._pSrc.subarray(d * p, d * p + e), f + e * p);
					}
					if (!d) return this._canvas.subarray(0, this.width * this.height);
				}
				let d = new Uint32Array(this.width * this.height);
				d.fill(this._fillColor);
				let f = 0, p = 0;
				for (let e = 0; e < this._bandWidths.length; ++e) {
					let m = this._bandWidths[e];
					for (let e = 0; e < 6; ++e) d.set(this._canvas.subarray(p, p += m), f), f += this.width;
				}
				if (e) {
					let p = this._PIXEL_OFFSET, m = this._wasm.current_height();
					for (let h = 0; h < m; ++h) d.set(this._pSrc.subarray(p * h, p * h + e), f + this.width * h);
				}
				return d;
			}
			return g;
		}
		get data8() {
			return new Uint8ClampedArray(this.data32.buffer, 0, this.width * this.height * 4);
		}
		release() {
			this._canvas = g, this._bandWidths.length = 0, this._maxWidth = 0, this._minWidth = f.LIMITS.MAX_WIDTH, this._wasm.init(d.DEFAULT_FOREGROUND, 0, this._opts.paletteLimit, 0);
		}
	};
	e.Decoder = C;
	function T(e, d) {
		let f = new C(d);
		return f.init(), typeof e == "string" ? f.decodeString(e) : f.decode(e), {
			width: f.width,
			height: f.height,
			data32: f.data32,
			data8: f.data8
		};
	}
	e.decode = T;
	async function O(e, d) {
		let f = await S(d);
		return f.init(), typeof e == "string" ? f.decodeString(e) : f.decode(e), {
			width: f.width,
			height: f.height,
			data32: f.data32,
			data8: f.data8
		};
	}
	e.decodeAsync = O;
});
function H(e) {
	return { dispose: e };
}
var N = class {
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
}, k = class {
	constructor() {
		this._store = new N();
	}
	dispose() {
		this._store.dispose();
	}
	_register(e) {
		return this._store.add(e);
	}
};
k.None = Object.freeze({ dispose() {} });
var W = class {
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
}, X = class {
	constructor() {
		this._listeners = [], this._disposed = !1;
	}
	get event() {
		return this._event ||= (e, d, f) => {
			if (this._disposed) return H(() => {});
			let p = {
				fn: e,
				thisArgs: d
			};
			this._listeners = this._listeners.slice(), this._listeners.push(p);
			let m = H(() => {
				let e = this._listeners.indexOf(p);
				e !== -1 && (this._listeners = this._listeners.slice(), this._listeners.splice(e, 1));
			});
			return f && (Array.isArray(f) ? f.push(m) : f.add(m)), m;
		}, this._event;
	}
	fire(e) {
		if (this._disposed || !this._listeners.length) return;
		if (this._listeners.length === 1) {
			this._listeners[0].fn.call(this._listeners[0].thisArgs, e);
			return;
		}
		let d = this._listeners;
		for (let f = 0, p = d.length; f < p; ++f) d[f].fn.call(d[f].thisArgs, e);
	}
	dispose() {
		this._disposed || (this._disposed = !0, this._listeners.length = 0);
	}
}, ht;
((e) => {
	function d(e, d) {
		return e((e) => d.fire(e));
	}
	e.forward = d;
	function f(e, d) {
		return (f, p, m) => e((e) => f.call(p, d(e)), void 0, m);
	}
	e.map = f;
	function p(...e) {
		return (d, f, p) => {
			let m = new N();
			for (let p of e) m.add(p((e) => d.call(f, e)));
			return p && (Array.isArray(p) ? p.push(m) : p.add(m)), m;
		};
	}
	e.any = p;
	function m(e, d, f) {
		return d(f), e((e) => d(e));
	}
	e.runAndSubscribe = m;
})(ht ||= {});
var ce = M(Z()), D = class e extends k {
	constructor(e) {
		super(), this._terminal = e, this._layers = /* @__PURE__ */ new Map(), this._optionsRefresh = this._register(new W()), this._oldOpen = this._terminal._core.open, this._terminal._core.open = (e) => {
			this._oldOpen?.call(this._terminal._core, e), this._open();
		}, this._terminal._core.screenElement && this._open(), this._optionsRefresh.value = this._terminal._core.optionsService.onOptionChange((e) => {
			e === "fontSize" && (this.rescaleCanvas(), this._renderService?.refreshRows(0, this._terminal.rows));
		}), this._register(H(() => {
			this.removeLayerFromDom(), this.removeLayerFromDom("bottom"), this._terminal._core && this._oldOpen && (this._terminal._core.open = this._oldOpen, this._oldOpen = void 0), this._renderService && this._oldSetRenderer && (this._renderService.setRenderer = this._oldSetRenderer, this._oldSetRenderer = void 0), this._renderService = void 0, this._layers.clear(), this._placeholderBitmap?.close(), this._placeholderBitmap = void 0, this._placeholder = void 0;
		}));
	}
	get canvas() {
		return this._layers.get("top")?.canvas;
	}
	static createCanvas(e, d, f) {
		let p = (e ?? document).createElement("canvas");
		return p.width = d | 0, p.height = f | 0, p;
	}
	static createImageData(e, d, f, p) {
		if (typeof ImageData != "function") {
			let m = e.createImageData(d, f);
			return p && m.data.set(new Uint8ClampedArray(p, 0, d * f * 4)), m;
		}
		return p ? new ImageData(new Uint8ClampedArray(p, 0, d * f * 4), d, f) : new ImageData(d, f);
	}
	static createImageBitmap(e) {
		return typeof createImageBitmap == "function" ? createImageBitmap(e) : Promise.resolve(void 0);
	}
	showPlaceholder(e) {
		e ? !this._placeholder && this.cellSize.height !== -1 && this._createPlaceHolder(Math.max(this.cellSize.height + 1, 24)) : (this._placeholderBitmap?.close(), this._placeholderBitmap = void 0, this._placeholder = void 0), this._renderService?.refreshRows(0, this._terminal.rows);
	}
	get dimensions() {
		return this._terminal.dimensions;
	}
	get cellSize() {
		return {
			width: this.dimensions?.css.cell.width || -1,
			height: this.dimensions?.css.cell.height || -1
		};
	}
	clearLines(e, d, f) {
		let p = e * (this.dimensions?.css.cell.height || 0), m = this.dimensions?.css.canvas.width || 0, h = (d + 1 - e) * (this.dimensions?.css.cell.height || 0);
		(!f || f === "top") && this._layers.get("top")?.clearRect(0, p, m, h), (!f || f === "bottom") && this._layers.get("bottom")?.clearRect(0, p, m, h);
	}
	clearAll(e) {
		if (!e || e === "top") {
			let e = this._layers.get("top");
			e?.clearRect(0, 0, e.canvas.width, e.canvas.height);
		}
		if (!e || e === "bottom") {
			let e = this._layers.get("bottom");
			e?.clearRect(0, 0, e.canvas.width, e.canvas.height);
		}
	}
	draw(e, d, f, p, m = 1) {
		let h = this._layers.get(e.layer);
		if (!h) return;
		let { width: g, height: _ } = this.cellSize;
		if (g === -1 || _ === -1) return;
		this._rescaleImage(e, g, _);
		let v = e.actual, { width: b, height: S } = e.actualCellSize, C = Math.ceil(v.width / b), T = d % C * b, E = Math.floor(d / C) * S, O = f * g, A = p * _, P = m * b + T > v.width ? v.width - T : m * b, I = E + S > v.height ? v.height - E : S;
		h.drawImage(v, Math.floor(T), Math.floor(E), Math.ceil(P), Math.ceil(I), Math.floor(O), Math.floor(A), Math.ceil(P * g / b), Math.ceil(I * _ / S));
	}
	extractTile(d, f) {
		let { width: p, height: m } = this.cellSize;
		if (p === -1 || m === -1) return;
		this._rescaleImage(d, p, m);
		let h = d.actual, { width: g, height: _ } = d.actualCellSize, v = Math.ceil(h.width / g), b = f % v * g, S = Math.floor(f / v) * _, C = g + b > h.width ? h.width - b : g, T = S + _ > h.height ? h.height - S : _, E = e.createCanvas(this.document, Math.ceil(C * p / g), Math.ceil(T * m / _)), O = E.getContext("2d");
		if (O) return O.drawImage(h, Math.floor(b), Math.floor(S), Math.floor(C), Math.floor(T), 0, 0, E.width, E.height), E;
	}
	drawPlaceholder(e, d, f = 1) {
		let p = this._layers.get("top");
		if (p) {
			let { width: m, height: h } = this.cellSize;
			if (m === -1 || h === -1 || (this._placeholder ? h >= this._placeholder.height && this._createPlaceHolder(h + 1) : this._createPlaceHolder(Math.max(h + 1, 24)), !this._placeholder)) return;
			p.drawImage(this._placeholderBitmap ?? this._placeholder, e * m, d * h % 2 ? 0 : 1, m * f, h, e * m, d * h, m * f, h);
		}
	}
	rescaleCanvas() {
		let e = this.dimensions?.css.canvas.width || 0, d = this.dimensions?.css.canvas.height || 0;
		for (let f of this._layers.values()) (f.canvas.width !== e || f.canvas.height !== d) && (f.canvas.width = e, f.canvas.height = d);
	}
	_rescaleImage(d, f, p) {
		if (f === d.actualCellSize.width && p === d.actualCellSize.height) return;
		let { width: m, height: h } = d.origCellSize;
		if (f === m && p === h) {
			d.actual = d.orig, d.actualCellSize.width = m, d.actualCellSize.height = h;
			return;
		}
		let g = Math.ceil(d.orig.width * f / m), _ = Math.ceil(d.orig.height * p / h);
		if (g * _ > d.orig.width * d.orig.height) {
			d.actual = d.orig, d.actualCellSize.width = m, d.actualCellSize.height = h;
			return;
		}
		let v = e.createCanvas(this.document, g, _), b = v.getContext("2d");
		b && (b.drawImage(d.orig, 0, 0, v.width, v.height), d.actual = v, d.actualCellSize.width = f, d.actualCellSize.height = p);
	}
	_open() {
		this._renderService = this._terminal._core._renderService, this._oldSetRenderer = this._renderService.setRenderer.bind(this._renderService), this._renderService.setRenderer = (e) => {
			for (let e of [...this._layers.keys()]) this.removeLayerFromDom(e);
			this._oldSetRenderer?.call(this._renderService, e);
		};
	}
	insertLayerToDom(d = "top") {
		if (!this.document || !this._terminal._core.screenElement) {
			console.warn("image addon: cannot insert output canvas to DOM, missing document or screenElement");
			return;
		}
		if (this._layers.has(d)) return;
		let f = e.createCanvas(this.document, this.dimensions?.css.canvas.width || 0, this.dimensions?.css.canvas.height || 0);
		f.classList.add(`xterm-image-layer-${d}`);
		let p = this._terminal._core.screenElement;
		p.style.isolation = "isolate", d === "bottom" ? (f.style.zIndex = "-1", p.insertBefore(f, p.firstChild)) : (f.style.zIndex = "0", p.appendChild(f));
		let m = f.getContext("2d", { alpha: !0 });
		if (!m) {
			f.remove();
			return;
		}
		this._layers.set(d, m), this.clearAll(d);
	}
	removeLayerFromDom(e = "top") {
		let d = this._layers.get(e);
		d && (d.canvas.remove(), this._layers.delete(e));
	}
	hasLayer(e) {
		return this._layers.has(e);
	}
	_createPlaceHolder(d = 24) {
		this._placeholderBitmap?.close(), this._placeholderBitmap = void 0;
		let f = e.createCanvas(this.document, 32, d), p = f.getContext("2d", { alpha: !1 });
		if (!p) return;
		let m = e.createImageData(p, 32, d), h = new Uint32Array(m.data.buffer), g = (0, ce.toRGBA8888)(0, 0, 0), _ = (0, ce.toRGBA8888)(255, 255, 255);
		h.fill(g);
		for (let e = 0; e < d; ++e) {
			let d = e % 2, f = e * 32;
			for (let e = 0; e < 32; e += 2) h[f + e + d] = _;
		}
		p.putImageData(m, 0, 0);
		let v = screen.width + 32 - 1 & -32 || 4096;
		this._placeholder = e.createCanvas(this.document, v, d);
		let b = this._placeholder.getContext("2d", { alpha: !1 });
		if (!b) {
			this._placeholder = void 0;
			return;
		}
		for (let e = 0; e < v; e += 32) b.drawImage(f, e, 0);
		let S = this._placeholder;
		e.createImageBitmap(S).then((e) => {
			this._placeholder === S ? this._placeholderBitmap = e : e?.close();
		}).catch(() => {});
	}
	get document() {
		return this._terminal._core._coreBrowserService?.window.document;
	}
}, w = {
	width: 7,
	height: 14
}, G = class e {
	constructor(e = 0, d = 0, f = -1, p = -1) {
		this.imageId = f, this.tileId = p, this._ext = 0, this._urlId = 0, this._ext = e, this._urlId = d;
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
	get underlineVariantOffset() {
		let e = (this._ext & 3758096384) >> 29;
		return e < 0 ? e ^ 4294967288 : e;
	}
	set underlineVariantOffset(e) {
		this._ext &= 536870911, this._ext |= e << 29 & 3758096384;
	}
	get urlId() {
		return this._urlId;
	}
	set urlId(e) {
		this._urlId = e;
	}
	clone() {
		return new e(this._ext, this._urlId, this.imageId, this.tileId);
	}
	isEmpty() {
		return this.underlineStyle === 0 && this._urlId === 0 && this.imageId === -1;
	}
}, F = new G(), j = class {
	constructor(e, d, f) {
		this._terminal = e, this._renderer = d, this._opts = f, this._images = /* @__PURE__ */ new Map(), this._lastId = 0, this._lowestId = 0, this._fullyCleared = !1, this._needsFullClear = !1, this._pixelLimit = 25e5;
		try {
			this.setLimit(this._opts.storageLimit);
		} catch (e) {
			e instanceof Error && console.error(e.message), console.warn(`storageLimit is set to ${this.getLimit()} MB`);
		}
		this._viewportMetrics = {
			cols: this._terminal.cols,
			rows: this._terminal.rows
		};
	}
	dispose() {
		this.reset();
	}
	reset() {
		for (let e of this._images.values()) e.marker?.dispose();
		this._images.clear(), this._renderer.clearAll();
	}
	getLimit() {
		return this._pixelLimit * 4 / 1e6;
	}
	setLimit(e) {
		if (e < .5 || e > 1e3) throw RangeError("invalid storageLimit, should be at least 0.5 MB and not exceed 1G");
		this._pixelLimit = e / 4 * 1e6 >>> 0, this._evictOldest(0);
	}
	getUsage() {
		return this._getStoredPixels() * 4 / 1e6;
	}
	_getStoredPixels() {
		let e = 0;
		for (let d of this._images.values()) d.orig && (e += d.orig.width * d.orig.height, d.actual && d.actual !== d.orig && (e += d.actual.width * d.actual.height));
		return e;
	}
	_delImg(e) {
		let d = this._images.get(e);
		d && (this._images.delete(e), window.ImageBitmap && d.orig instanceof ImageBitmap && d.orig.close(), this.onImageDeleted?.(e));
	}
	wipeAlternate() {
		let e = [];
		for (let [d, f] of this._images.entries()) f.bufferType === "alternate" && (f.marker?.dispose(), e.push(d));
		for (let d of e) this._delImg(d);
		this._needsFullClear = !0, this._fullyCleared = !1;
	}
	deleteImage(e) {
		let d = this._images.get(e);
		d && (d.marker?.dispose(), this._delImg(e));
	}
	addImage(e, d) {
		this._evictOldest(e.width * e.height);
		let f = this._renderer.cellSize;
		(f.width === -1 || f.height === -1) && (f = w);
		let p = Math.ceil(e.width / f.width), m = Math.ceil(e.height / f.height), h = ++this._lastId, g = this._terminal._core.buffer, _ = this._terminal.cols, v = this._terminal.rows, b = g.x, S = g.y, C = b, T = 0;
		d.scrolling || (g.x = 0, g.y = 0, C = 0), this._terminal._core._inputHandler._dirtyRowTracker.markDirty(g.y);
		for (let e = 0; e < m; ++e) {
			let f = g.lines.get(g.y + g.ybase);
			for (let d = 0; d < p && !(C + d >= _); ++d) this._writeToCell(f, C + d, h, e * p + d), T++;
			if (d.scrolling) e < m - 1 && this._terminal._core._inputHandler.lineFeed();
			else if (++g.y >= v) break;
			g.x = C;
		}
		this._terminal._core._inputHandler._dirtyRowTracker.markDirty(g.y), d.scrolling ? d.cursorPos === "iip" ? g.x = Math.min(C + p, _) : g.x = C : (g.x = b, g.y = S);
		let E = [];
		for (let [e, d] of this._images.entries()) d.tileCount < 1 && (d.marker?.dispose(), E.push(e));
		for (let e of E) this._delImg(e);
		let O = this._terminal.registerMarker(0);
		O?.onDispose(() => {
			this._images.get(h) && this._delImg(h);
		}), this._terminal.buffer.active.type === "alternate" && this._evictOnAlternate();
		let A = {
			orig: e,
			origCellSize: f,
			actual: e,
			actualCellSize: { ...f },
			marker: O || void 0,
			tileCount: T,
			bufferType: this._terminal.buffer.active.type,
			layer: d.layer,
			zIndex: d.zIndex
		};
		return this._images.set(h, A), this.onImageAdded?.(), h;
	}
	render(e) {
		let d = !1, f = !1;
		for (let e of this._images.values()) if (e.layer === "bottom" ? f = !0 : d = !0, d && f) break;
		if (d && !this._renderer.hasLayer("top") && (this._renderer.insertLayerToDom("top"), !this._renderer.hasLayer("top"))) return;
		if (f && !this._renderer.hasLayer("bottom") && this._renderer.insertLayerToDom("bottom"), this._renderer.rescaleCanvas(), !this._images.size) {
			this._fullyCleared || (this._renderer.clearAll(), this._fullyCleared = !0, this._needsFullClear = !1), this._renderer.hasLayer("top") && this._renderer.removeLayerFromDom("top"), this._renderer.hasLayer("bottom") && this._renderer.removeLayerFromDom("bottom");
			return;
		}
		!d && this._renderer.hasLayer("top") && (this._renderer.clearAll("top"), this._renderer.removeLayerFromDom("top")), !f && this._renderer.hasLayer("bottom") && (this._renderer.clearAll("bottom"), this._renderer.removeLayerFromDom("bottom")), this._needsFullClear &&= (this._renderer.clearAll(), this._fullyCleared = !0, !1);
		let { start: p, end: m } = e, h = this._terminal._core.buffer, g = this._terminal._core.cols;
		this._renderer.clearLines(p, m);
		let _ = [], v = [];
		for (let e = p; e <= m; ++e) {
			let d = h.lines.get(e + h.ydisp);
			if (!d) return;
			for (let f = 0; f < g; ++f) if (d.getBg(f) & 268435456) {
				let p = d._extendedAttrs[f] ?? F, m = p.imageId;
				if (m === void 0 || m === -1) continue;
				let h = this._images.get(m);
				if (p.tileId !== -1) {
					let b = p.tileId, S = f, C = 1;
					for (; ++f < g && d.getBg(f) & 268435456 && (p = d._extendedAttrs[f] ?? F) && p.imageId === m && p.tileId === b + C;) C++;
					f--, h ? h.actual && _.push({
						imgSpec: h,
						tileId: b,
						col: S,
						row: e,
						count: C
					}) : this._opts.showPlaceholder && v.push({
						col: S,
						row: e,
						count: C
					}), this._fullyCleared = !1;
				}
			}
		}
		_.sort((e, d) => e.imgSpec.zIndex - d.imgSpec.zIndex);
		for (let e of v) this._renderer.drawPlaceholder(e.col, e.row, e.count);
		for (let e of _) this._renderer.draw(e.imgSpec, e.tileId, e.col, e.row, e.count);
	}
	viewportResize(e) {
		if (!this._images.size) {
			this._viewportMetrics = e;
			return;
		}
		if (this._viewportMetrics.cols >= e.cols) {
			this._viewportMetrics = e;
			return;
		}
		let d = this._terminal._core.buffer, f = d.lines.length, p = this._viewportMetrics.cols - 1;
		for (let m = 0; m < f; ++m) {
			let f = d.lines.get(m);
			if (f.getBg(p) & 268435456) {
				let d = f._extendedAttrs[p] ?? F, m = d.imageId;
				if (m === void 0 || m === -1) continue;
				let h = this._images.get(m);
				if (!h) continue;
				let g = Math.ceil((h.actual?.width || 0) / h.actualCellSize.width);
				if (d.tileId % g + 1 >= g) continue;
				let _ = !1;
				for (let d = p + 1; d > e.cols; ++d) if (f._data[d * 3 + 0] & 4194303) {
					_ = !0;
					break;
				}
				if (_) continue;
				let v = Math.min(e.cols, g - d.tileId % g + p), b = d.tileId;
				for (let e = p + 1; e < v; ++e) this._writeToCell(f, e, m, ++b), h.tileCount++;
			}
		}
		this._viewportMetrics = e;
	}
	getImageAtBufferCell(e, d) {
		let f = this._terminal._core.buffer.lines.get(d);
		if (f && f.getBg(e) & 268435456) {
			let d = f._extendedAttrs[e] ?? F;
			if (d.imageId && d.imageId !== -1) {
				let e = this._images.get(d.imageId)?.orig;
				if (window.ImageBitmap && e instanceof ImageBitmap) {
					let d = D.createCanvas(window.document, e.width, e.height);
					return d.getContext("2d")?.drawImage(e, 0, 0, e.width, e.height), d;
				}
				return e;
			}
		}
	}
	extractTileAtBufferCell(e, d) {
		let f = this._terminal._core.buffer.lines.get(d);
		if (f && f.getBg(e) & 268435456) {
			let d = f._extendedAttrs[e] ?? F;
			if (d.imageId && d.imageId !== -1 && d.tileId !== -1) {
				let e = this._images.get(d.imageId);
				if (e) return this._renderer.extractTile(e, d.tileId);
			}
		}
	}
	_evictOldest(e) {
		let d = this._getStoredPixels(), f = d;
		for (; this._pixelLimit < f + e && this._images.size;) {
			let e = this._images.get(++this._lowestId);
			e && e.orig && (f -= e.orig.width * e.orig.height, e.actual && e.orig !== e.actual && (f -= e.actual.width * e.actual.height), e.marker?.dispose(), this._delImg(this._lowestId));
		}
		return d - f;
	}
	_writeToCell(e, d, f, p) {
		if (e._data[d * 3 + 2] & 268435456) {
			let m = e._extendedAttrs[d];
			if (m) {
				if (m.imageId !== void 0) {
					let e = this._images.get(m.imageId);
					e && e.tileCount--, m.imageId = f, m.tileId = p;
					return;
				}
				e._extendedAttrs[d] = new G(m.ext, m.urlId, f, p);
				return;
			}
		}
		e._data[d * 3 + 2] |= 268435456, e._extendedAttrs[d] = new G(0, 0, f, p);
	}
	_evictOnAlternate() {
		for (let e of this._images.values()) e.bufferType === "alternate" && (e.tileCount = 0);
		let e = this._terminal._core.buffer;
		for (let d = 0; d < this._terminal.rows; ++d) {
			let f = e.lines.get(d);
			if (f) {
				for (let e = 0; e < this._terminal.cols; ++e) if (f._data[e * 3 + 2] & 268435456) {
					let d = f._extendedAttrs[e]?.imageId;
					if (d) {
						let e = this._images.get(d);
						e && e.tileCount++;
					}
				}
			}
		}
		let d = [];
		for (let [e, f] of this._images.entries()) f.bufferType === "alternate" && !f.tileCount && (f.marker?.dispose(), d.push(e));
		for (let e of d) this._delImg(e);
	}
}, Oe = M(Ce()), Je = M(Ne());
function V(e) {
	let d = "";
	for (let f = 0; f < e.length; ++f) d += String.fromCharCode(e[f]);
	return d;
}
function fe(e) {
	let d = 0;
	for (let f = 0; f < e.length; ++f) {
		if (e[f] < 48 || e[f] > 57) throw Error("illegal char");
		d = d * 10 + e[f] - 48;
	}
	return d;
}
function He(e) {
	let d = V(e);
	if (!d.match(/^((auto)|(\d+?((px)|(%)){0,1}))$/)) throw Error("illegal size");
	return d;
}
function bt(e) {
	if (typeof Buffer < "u") return Buffer.from(V(e), "base64").toString();
	let d = atob(V(e)), f = new Uint8Array(d.length);
	for (let e = 0; e < f.length; ++e) f[e] = d.charCodeAt(e);
	return new TextDecoder().decode(f);
}
var Fe = {
	inline: fe,
	size: fe,
	name: bt,
	width: He,
	height: He,
	preserveAspectRatio: fe
}, Ge = [
	70,
	105,
	108,
	101
], Ue = [
	77,
	117,
	108,
	116,
	105,
	112,
	97,
	114,
	116,
	70,
	105,
	108,
	101
], Qe = [
	70,
	105,
	108,
	101,
	80,
	97,
	114,
	116
], De = [
	70,
	105,
	108,
	101,
	69,
	110,
	100
], we = [
	82,
	101,
	112,
	111,
	114,
	116,
	67,
	101,
	108,
	108,
	83,
	105,
	122,
	101
], be = 1024, $ = class {
	constructor() {
		this.state = 0, this._buffer = new Uint32Array(be), this._position = 0, this._key = "", this.fields = {};
	}
	reset() {
		this._buffer.fill(0), this.state = 0, this._position = 0, this.fields = {}, this._key = "";
	}
	end() {
		if (this.state === 0) {
			if (this._position === De.length) {
				for (let e = 0; e < De.length; ++e) if (this._buffer[e] !== De[e]) return this._a();
				return this.fields.type = 4, this.state = 4, 0;
			}
			if (this._position === we.length) {
				for (let e = 0; e < we.length; ++e) if (this._buffer[e] !== we[e]) return this._a();
				return this.fields.type = 5, this.state = 4, 0;
			}
			return this._a();
		}
		return this.state === 4 ? 0 : this.state === 3 && this.fields.type === 2 && this._storeValue(this._position) ? (this.state = 4, 0) : this._a();
	}
	parse(e, d, f) {
		let p = this.state, m = this._position, h = this._buffer;
		if (p === 1 || p === 4 || p === 0 && m > 14) return -1;
		for (let g = d; g < f; ++g) {
			let d = e[g];
			switch (d) {
				case 59:
					if (!this._storeValue(m)) return this._a();
					p = 2, m = 0;
					break;
				case 61:
					if (p === 0) {
						if (h[0] === 70) {
							let e = 0;
							for (; e < Ge.length; ++e) if (h[e] !== Ge[e]) return this._a();
							if (this.fields.type = 1, m === Qe.length) {
								for (; e < Qe.length; ++e) if (h[e] !== Qe[e]) return this._a();
								return this.fields.type = 3, this.state = 4, g + 1;
							}
						} else if (h[0] === 77) {
							for (let e = 0; e < Ue.length; ++e) if (h[e] !== Ue[e]) return this._a();
							this.fields.type = 2;
						} else return this._a();
						p = 2, m = 0;
					} else if (p === 2) {
						if (!this._storeKey(m)) return this._a();
						p = 3, m = 0;
					} else if (p === 3) {
						if (m >= be) return this._a();
						h[m++] = d;
					}
					break;
				case 58: return p === 3 && !this._storeValue(m) ? this._a() : (this.state = 4, g + 1);
				default:
					if (m >= be) return this._a();
					h[m++] = d;
			}
		}
		return this.state = p, this._position = m, -2;
	}
	_a() {
		return this.fields.type = 0, this.state = 1, -1;
	}
	_storeKey(e) {
		let d = V(this._buffer.subarray(0, e));
		return d ? (this._key = d, this.fields[d] = null, !0) : !1;
	}
	_storeValue(e) {
		if (this._key) {
			try {
				let d = this._buffer.slice(0, e);
				this.fields[this._key] = Fe[this._key] ? Fe[this._key](d) : d;
			} catch {
				return !1;
			}
			return !0;
		}
		return !1;
	}
}, L = {
	mime: "unsupported",
	width: 0,
	height: 0
};
function ee(e) {
	if (e.length < 32) return L;
	let d = new Uint32Array(e.buffer, e.byteOffset, 8);
	if (d[0] === 1196314761 && d[1] === 169478669 && d[3] === 1380206665) return {
		mime: "image/png",
		width: e[16] << 24 | e[17] << 16 | e[18] << 8 | e[19],
		height: e[20] << 24 | e[21] << 16 | e[22] << 8 | e[23]
	};
	if (e[0] === 255 && e[1] === 216 && e[2] === 255) {
		let [d, f] = yt(e);
		return {
			mime: "image/jpeg",
			width: d,
			height: f
		};
	}
	if (d[0] === 944130375 && (e[4] === 55 || e[4] === 57) && e[5] === 97) return {
		mime: "image/gif",
		width: e[7] << 8 | e[6],
		height: e[9] << 8 | e[8]
	};
	if (d[0] === 1718185841) return {
		mime: "image/qoi",
		width: e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7],
		height: e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11]
	};
	if (d[0] === 1179011410 && d[2] === 1346520407 && (d[3] & 16777215) == 3690582) {
		switch (e[15]) {
			case 88: return {
				mime: "image/webp",
				width: (e[24] | e[25] << 8 | e[26] << 16) + 1,
				height: (e[27] | e[28] << 8 | e[29] << 16) + 1
			};
			case 76:
				if (e[20] !== 47) return L;
				let d = e[21] | e[22] << 8 | e[23] << 16 | e[24] << 24;
				return {
					mime: "image/webp",
					width: (d & 16383) + 1,
					height: (d >>> 14 & 16383) + 1
				};
			case 32: return e[23] !== 157 || e[24] !== 1 || e[25] !== 42 ? L : {
				mime: "image/webp",
				width: (e[26] | e[27] << 8) & 16383,
				height: (e[28] | e[29] << 8) & 16383
			};
		}
		return L;
	}
	if (d[1] === 1887007846 && (d[2] === 1718187617 || d[2] === 1936291425)) {
		let d = -1, f = Math.min(e.length - 16, 1024);
		for (let p = 8; p < f; p++) if (e[p] === 105 && e[p + 1] === 115 && e[p + 2] === 112 && e[p + 3] === 101) {
			d = p;
			break;
		}
		if (d !== -1) {
			let f = e[d + 8] << 24 | e[d + 9] << 16 | e[d + 10] << 8 | e[d + 11], p = e[d + 12] << 24 | e[d + 13] << 16 | e[d + 14] << 8 | e[d + 15];
			if (f > 0 && p > 0) return {
				mime: "image/avif",
				width: f,
				height: p
			};
		}
		return L;
	}
	return L;
}
function yt(e) {
	let d = e.length, f = 4, p = e[f] << 8 | e[f + 1];
	for (;;) {
		if (f += p, f >= d || e[f] !== 255) return [0, 0];
		if (e[f + 1] === 192 || e[f + 1] === 194) return f + 8 < d ? [e[f + 7] << 8 | e[f + 8], e[f + 5] << 8 | e[f + 6]] : [0, 0];
		f += 2, p = e[f] << 8 | e[f + 1];
	}
}
var ye = {
	type: 0,
	name: "Unnamed file",
	size: 0,
	width: "auto",
	height: "auto",
	preserveAspectRatio: 1,
	inline: 0
}, te = class {
	constructor(e, d, f, p) {
		this._opts = e, this._renderer = d, this._storage = f, this._coreTerminal = p, this._generation = 0, this._aborted = !1, this._hp = new $(), this._header = ye, this._isMultipart = !1, this._abortMulti = !1;
		let m = Math.ceil(this._opts.iipSizeLimit * 4 / 3), h = Math.min(1048576, m);
		this._dec = new Oe.default(4194304, m, h), this._qoiDec = new Je.default(4194304);
	}
	reset() {
		this._generation++, this._hp.reset(), this._dec.release(), this._qoiDec.release();
	}
	start() {
		this._aborted = !1, this._hp.reset();
	}
	put(e, d, f) {
		if (!this._aborted) if (this._hp.state === 4) this._dec.put(e.subarray(d, f)) !== 0 && (this._dec.release(), this._aborted = !0);
		else {
			let p = this._hp.parse(e, d, f);
			if (p === -1) {
				this._aborted = !0;
				return;
			}
			if (p > 0) {
				if (this._hp.fields.type === 1) {
					if (this._isMultipart && (this._isMultipart = !1, this._abortMulti = !1, this._dec.release()), this._header = Object.assign({}, ye, this._hp.fields), !this._header.inline) {
						this._aborted = !0;
						return;
					}
					this._dec.init();
				} else if (this._abortMulti) {
					this._aborted = !0;
					return;
				}
				this._dec.put(e.subarray(p, f)) !== 0 && (this._dec.release(), this._aborted = !0, this._isMultipart && (this._abortMulti = !0));
			}
		}
	}
	end(e) {
		if (this._aborted || this._hp.state !== 4 && this._hp.end()) return !0;
		let d = this._hp.fields.type;
		if (d === 3) return !0;
		if (d === 5) {
			let e = w.width, d = w.height;
			this._renderer.dimensions && (e = this._renderer.dimensions.css.canvas.width / this._coreTerminal.cols, d = this._renderer.dimensions.css.canvas.height / this._coreTerminal.rows);
			let f = this._coreTerminal._core._coreBrowserService?.dpr ?? 1, p = `\x1B]1337;ReportCellSize=${d.toFixed(3)};${e.toFixed(3)};${f.toFixed(3)}\x1B\\`;
			return this._coreTerminal.input(p, !1), !0;
		}
		if (d === 2) return this._header = Object.assign({}, ye, this._hp.fields), this._isMultipart = !0, this._abortMulti = !1, this._dec.release(), this._dec.init(), !0;
		if (d === 4 && (!this._isMultipart || (this._isMultipart = !1, this._abortMulti || this._header.type !== 2))) return !0;
		let f = 0, p = 0, m, h = L;
		if ((m = e) && ((m = !this._dec.end()) ? (h = ee(this._dec.data8), (m = h.mime !== "unsupported") ? (f = h.width, p = h.height, (m = f && p && f * p < this._opts.pixelLimit) ? ([f, p] = this._resize(f, p).map(Math.floor), m = f && p && f * p < this._opts.pixelLimit) : console.warn(`IIP: image dimension issue ${h.width}x${h.height}`)) : console.warn("IIP: unsupported image type")) : console.warn("IIP: error during BASE64 decoding")), !m) return this._dec.release(), !0;
		let g;
		if (h.mime === "image/qoi") {
			let e = this._qoiDec.decode(this._dec.data8);
			if (g = new ImageData(new Uint8ClampedArray(e.buffer, e.byteOffset, e.byteLength), this._qoiDec.width, this._qoiDec.height), this._qoiDec.release(), f === this._qoiDec.width && p === this._qoiDec.height) {
				this._dec.release();
				let e = D.createCanvas(void 0, this._qoiDec.width, this._qoiDec.height);
				return e.getContext("2d")?.putImageData(g, 0, 0), this._storage.addImage(e), !0;
			}
		} else g = new Blob([this._dec.data8], { type: h.mime });
		this._dec.release();
		let _ = this._generation;
		return createImageBitmap(g, {
			resizeWidth: f,
			resizeHeight: p
		}).then((e) => _ === this._generation ? (this._storage.addImage(e), !0) : (e.close(), !0)).catch((e) => (console.warn(`IIP: decoding error ${h.mime} ${h.width}x${h.height}`, e), !0));
	}
	_resize(e, d) {
		let f = this._renderer.dimensions?.css.cell.width || w.width, p = this._renderer.dimensions?.css.cell.height || w.height, m = this._renderer.dimensions?.css.canvas.width || f * this._coreTerminal.cols, h = this._renderer.dimensions?.css.canvas.height || p * this._coreTerminal.rows, g = this._dim(this._header.width, m, f), _ = this._dim(this._header.height, h, p);
		if (!g && !_) {
			let f = m / e, g = (h - p) / d, _ = Math.min(f, g);
			return _ < 1 ? [e * _, d * _] : [e, d];
		}
		return g ? this._header.preserveAspectRatio || !g || !_ ? [g, d * g / e] : [g, _] : [e * _ / d, _];
	}
	_dim(e, d, f) {
		return e === "auto" ? 0 : e.endsWith("%") ? parseInt(e.slice(0, -1), 10) * d / 100 : e.endsWith("px") ? parseInt(e.slice(0, -2), 10) : parseInt(e, 10) * f;
	}
}, Ke = M(Ce());
function Se(e) {
	let d = {}, f = e.split(",");
	for (let e of f) {
		let f = e.indexOf("=");
		if (f === -1) continue;
		let p = e.substring(0, f), m = e.substring(f + 1);
		if (p === "a") {
			d.action = m;
			continue;
		}
		if (p === "o") {
			d.compression = m;
			continue;
		}
		if (p === "t") {
			d.transmission = m;
			continue;
		}
		if (p === "d") {
			d.deleteSelector = m;
			continue;
		}
		let h = parseInt(m, 10);
		switch (p) {
			case "f":
				d.format = h;
				break;
			case "i":
				d.id = h;
				break;
			case "I":
				d.imageNumber = h;
				break;
			case "s":
				d.width = h;
				break;
			case "v":
				d.height = h;
				break;
			case "x":
				d.x = h;
				break;
			case "y":
				d.y = h;
				break;
			case "w":
				d.sourceWidth = h;
				break;
			case "h":
				d.sourceHeight = h;
				break;
			case "X":
				d.xOffset = h;
				break;
			case "Y":
				d.yOffset = h;
				break;
			case "c":
				d.columns = h;
				break;
			case "r":
				d.rows = h;
				break;
			case "m":
				d.more = h;
				break;
			case "q":
				d.quiet = h;
				break;
			case "C":
				d.cursorMovement = h;
				break;
			case "z":
				d.zIndex = h;
				break;
			case "p":
				d.placementId = h;
				break;
		}
	}
	return d;
}
var Pe = 0, ie = class {
	constructor(e, d, f, p) {
		this._opts = e, this._renderer = d, this._kittyStorage = f, this._coreTerminal = p, this._aborted = !1, this._generation = 0, this._decodeError = !1, this._activeDecoder = null, this._inControlData = !0, this._controlData = new Uint32Array(512), this._controlLength = 0, this._encodedSizeLimit = 0, this._totalEncodedSize = 0, this._parsedCommand = null, this._pendingTransmissions = /* @__PURE__ */ new Map(), this._maxEncodedBytes = Math.ceil(this._opts.kittySizeLimit * 4 / 3), this._initialEncodedBytes = Math.min(4194304, this._maxEncodedBytes);
	}
	reset() {
		this._generation++, this._cleanupAllPending(), this._activeDecoder &&= (this._activeDecoder.release(), null), this._kittyStorage.reset();
	}
	dispose() {
		this.reset();
	}
	_removePendingEntry(e) {
		this._pendingTransmissions.delete(e), this._lastPendingKey === e && (this._lastPendingKey = void 0);
	}
	_cleanupAllPending() {
		for (let e of this._pendingTransmissions.values()) e.decoder.release();
		this._pendingTransmissions.clear(), this._lastPendingKey = void 0;
	}
	start() {
		this._aborted = !1, this._decodeError = !1, this._inControlData = !0, this._controlLength = 0, this._parsedCommand = null, this._encodedSizeLimit = this._maxEncodedBytes, this._totalEncodedSize = 0, this._activeDecoder = null;
	}
	put(e, d, f) {
		if (!this._aborted) if (!this._inControlData) this._streamPayload(e, d, f);
		else {
			let p = f;
			for (let m = d; m < f; m++) if (e[m] === 59) {
				this._inControlData = !1, p = m;
				break;
			}
			let m = p - d;
			if (this._controlLength + m > 512) {
				this._aborted = !0;
				return;
			}
			if (this._controlData.set(e.subarray(d, p), this._controlLength), this._controlLength += m, !this._inControlData) {
				if (this._parsedCommand = Se(this._parseControlDataString()), this._parsedCommand.id !== void 0 && this._parsedCommand.imageNumber !== void 0) {
					this._sendResponse(this._parsedCommand.id, "EINVAL:cannot specify both i and I keys", this._parsedCommand.quiet ?? 0), this._aborted = !0;
					return;
				}
				if (this._parsedCommand.action === "d") return;
				let d = p + 1;
				d < f && this._streamPayload(e, d, f);
			}
		}
	}
	_streamPayload(e, d, f) {
		if (this._aborted) return;
		let p = this._parsedCommand?.id ?? this._lastPendingKey ?? 0, m = this._pendingTransmissions.get(p), h = m?.totalEncodedSize ?? 0;
		if (this._totalEncodedSize += f - d, h + this._totalEncodedSize > this._encodedSizeLimit) {
			let e = this._activeDecoder ?? m?.decoder;
			e && e.release(), this._activeDecoder = null, m && this._removePendingEntry(p), this._aborted = !0;
			return;
		}
		if (!this._decodeError) {
			if (m?.decoder && !this._activeDecoder && (this._activeDecoder = m.decoder), !this._activeDecoder) {
				let e = this._maxEncodedBytes + 131072;
				if (e > this._opts.storageLimit * 1e6) {
					this._aborted = !0, this._parsedCommand?.id !== void 0 && this._sendResponse(this._parsedCommand.id, "ENOMEM:pending image budget exceeded", this._parsedCommand.quiet ?? 0);
					return;
				}
				let d = Math.max(1, Math.floor(this._opts.storageLimit * 1e6 / e));
				for (; this._pendingTransmissions.size >= d;) {
					let e = this._pendingTransmissions.entries().next().value;
					if (!e) break;
					e[1].decoder.release(), this._removePendingEntry(e[0]), e[1].cmd.id !== void 0 && this._sendResponse(e[1].cmd.id, "ENOMEM:pending image budget exceeded", e[1].cmd.quiet ?? 0);
				}
				this._activeDecoder = new Ke.default(4194304, this._maxEncodedBytes, this._initialEncodedBytes), this._activeDecoder.init();
			}
			this._activeDecoder.put(e.subarray(d, f)) !== Pe && (this._activeDecoder.release(), this._activeDecoder = null, this._decodeError = !0, m && this._removePendingEntry(p));
		}
	}
	end(e) {
		if (this._aborted || !e) return this._activeDecoder &&= (this._activeDecoder.release(), null), !0;
		if (this._inControlData) return this._handleNoPayloadCommand();
		let d = this._parsedCommand;
		if (d.action === "d") return this._handleDelete(d);
		let f = d.id ?? this._lastPendingKey ?? 0, p = d.more === 1, m = this._pendingTransmissions.get(f);
		if (p) return this._activeDecoder &&= (m ? (m.totalEncodedSize += this._totalEncodedSize, m.decodeError = m.decodeError || this._decodeError) : this._pendingTransmissions.set(f, {
			cmd: { ...d },
			decoder: this._activeDecoder,
			totalEncodedSize: this._totalEncodedSize,
			decodeError: this._decodeError
		}), this._lastPendingKey = f, null), !0;
		m && (this._lastPendingKey = void 0);
		let h = this._decodeError, g = d, _ = this._activeDecoder;
		m && (g = m.cmd, _ = m.decoder, h ||= m.decodeError, this._pendingTransmissions.delete(f));
		let v = new Uint8Array();
		_ && (_.end() !== Pe && (h = !0), v = _.data8), this._activeDecoder = null;
		let b = this._handleCommandWithBytesAndCmd(g, v, h);
		return _ && _.release(), b;
	}
	_parseControlDataString() {
		let e = "";
		for (let d = 0; d < this._controlLength; d++) e += String.fromCodePoint(this._controlData[d]);
		return e;
	}
	_handleNoPayloadCommand() {
		let e = Se(this._parseControlDataString());
		if (e.id !== void 0 && e.imageNumber !== void 0) return this._sendResponse(e.id, "EINVAL:cannot specify both i and I keys", e.quiet ?? 0), !0;
		switch (e.action ?? "t") {
			case "d": return this._handleDelete(e);
			case "q": return this._sendResponse(e.id ?? 0, "OK", e.quiet ?? 0), !0;
			case "p": return this._handlePlacement(e);
			default: return e.id !== void 0 && this._sendResponse(e.id, "EINVAL:unsupported action", e.quiet ?? 0), !0;
		}
	}
	_handleCommandWithBytesAndCmd(e, d, f) {
		switch (e.action ?? "t") {
			case "t": {
				let p = this._handleTransmit(e, d, f);
				return (e.transmission ?? "d") === "d" && e.id !== void 0 && (f ? this._sendResponse(e.id, "EINVAL:invalid base64 data", e.quiet ?? 0) : d.length > 0 && this._sendResponse(e.id, "OK", e.quiet ?? 0)), p;
			}
			case "T": return this._handleTransmitDisplay(e, d, f);
			case "q": return this._handleQuery(e, d, f);
			case "p": return this._handlePlacement(e);
			default: return e.id !== void 0 && this._sendResponse(e.id, "EINVAL:unsupported action", e.quiet ?? 0), !0;
		}
	}
	_handlePlacement(e) {
		if (e.id === void 0) return !0;
		let d = e.id, f = this._kittyStorage.getImage(d);
		return f ? this._displayImage(f, e).then((f) => (this._sendResponse(d, f ? "OK" : "EINVAL:image rendering failed", e.quiet ?? 0, e.placementId), !0)) : (this._sendResponse(d, "ENOENT:image not found", e.quiet ?? 0, e.placementId), !0);
	}
	_handleTransmit(e, d, f) {
		return (e.transmission ?? "d") === "d" ? (f || d.length === 0 || this._kittyStorage.storeImage(e.id, {
			data: new Blob([d]),
			width: e.width ?? 0,
			height: e.height ?? 0,
			format: e.format ?? 32,
			compression: e.compression ?? ""
		}), !0) : (e.id !== void 0 && this._sendResponse(e.id, "EINVAL:unsupported transmission medium", e.quiet ?? 0), !0);
	}
	_handleTransmitDisplay(e, d, f) {
		if (f) return e.id !== void 0 && this._sendResponse(e.id, "EINVAL:invalid base64 data", e.quiet ?? 0), !0;
		this._handleTransmit(e, d, f);
		let p = e.id ?? this._kittyStorage.lastImageId, m = this._kittyStorage.getImage(p);
		if (m) {
			let d = this._displayImage(m, e);
			return e.id === void 0 ? d.then(() => !0) : d.then((d) => (this._sendResponse(p, d ? "OK" : "EINVAL:image rendering failed", e.quiet ?? 0), !0));
		}
		return !0;
	}
	_handleQuery(e, d, f) {
		let p = e.id ?? 0, m = e.quiet ?? 0;
		if ((e.transmission ?? "d") !== "d") return this._sendResponse(p, "EINVAL:unsupported transmission medium", m), !0;
		if (f) return this._sendResponse(p, "EINVAL:invalid base64 data", m), !0;
		if (d.length === 0) return this._sendResponse(p, "OK", m), !0;
		let h = e.format ?? 32;
		if (h === 100) this._sendResponse(p, "OK", m);
		else {
			let f = e.width ?? 0, g = e.height ?? 0;
			if (!f || !g) return this._sendResponse(p, "EINVAL:width and height required for raw pixel data", m), !0;
			let _ = h === 32 ? 4 : 3, v = f * g * _;
			if (d.length < v) return this._sendResponse(p, "EINVAL:insufficient pixel data", m), !0;
			this._sendResponse(p, "OK", m);
		}
		return !0;
	}
	_handleDelete(e) {
		switch (e.deleteSelector ?? "a") {
			case "a":
			case "A":
				this._cleanupAllPending(), this._kittyStorage.deleteAll();
				break;
			case "i":
			case "I":
				if (e.id !== void 0) {
					let d = this._pendingTransmissions.get(e.id);
					d && d.decoder.release(), this._removePendingEntry(e.id), this._kittyStorage.deleteById(e.id);
				}
				break;
			default: break;
		}
		return !0;
	}
	_sendResponse(e, d, f, p) {
		let m = d === "OK";
		if (m && f >= 1 || !m && f >= 2) return;
		let h = `\x1B_Gi=${e}${p ? `,p=${p}` : ""};${d}\x1B\\`;
		this._coreTerminal._core.coreService.triggerDataEvent(h);
	}
	_displayImage(e, d) {
		return this._decodeAndDisplay(e, d).then(() => !0).catch(() => !1);
	}
	async _decodeAndDisplay(e, d) {
		let f = this._generation, p = await this._createBitmap(e);
		try {
			if (f !== this._generation) throw Error("image decode canceled");
			let m = Math.max(0, d.x ?? 0), h = Math.max(0, d.y ?? 0), g = d.sourceWidth || p.width - m, _ = d.sourceHeight || p.height - h, v = Math.max(0, p.width - m), b = Math.max(0, p.height - h), S = Math.max(0, Math.min(g, v)), C = Math.max(0, Math.min(_, b));
			if (S === 0 || C === 0) throw Error("invalid source rectangle");
			if (m !== 0 || h !== 0 || S !== p.width || C !== p.height) {
				let e = await createImageBitmap(p, m, h, S, C);
				p.close(), p = e;
			}
			let T = this._renderer.dimensions?.css.cell.width || w.width, E = this._renderer.dimensions?.css.cell.height || w.height, O, A;
			d.columns !== void 0 && d.rows !== void 0 ? (O = d.columns, A = d.rows) : d.columns === void 0 ? d.rows === void 0 ? (O = Math.ceil(p.width / T), A = Math.ceil(p.height / E)) : (A = d.rows, O = Math.max(1, Math.ceil(p.width / p.height * (A * E) / T))) : (O = d.columns, A = Math.max(1, Math.ceil(p.height / p.width * (O * T) / E)));
			let P = p.width, I = p.height;
			if ((d.columns !== void 0 || d.rows !== void 0) && (P = Math.round(O * T), I = Math.round(A * E)), P * I > this._opts.pixelLimit) throw Error("image exceeds pixel limit");
			let R = this._coreTerminal._core.buffer, z = R.x, B = R.y, K = R.ybase, q = d.zIndex !== void 0 && d.zIndex < 0 ? "bottom" : "top";
			if (P !== p.width || I !== p.height) {
				let e = await createImageBitmap(p, {
					resizeWidth: P,
					resizeHeight: I
				});
				p.close(), p = e;
			}
			let J = Math.min(Math.max(0, d.xOffset ?? 0), T - 1), Y = Math.min(Math.max(0, d.yOffset ?? 0), E - 1);
			if (J !== 0 || Y !== 0) {
				let e = d.columns === void 0 ? p.width + J : Math.round(O * T), f = d.rows === void 0 ? p.height + Y : Math.round(A * E), m = D.createCanvas(window.document, e, f), h = m.getContext("2d");
				if (!h) throw Error("Failed to create offset canvas context");
				h.drawImage(p, J, Y);
				let g = await createImageBitmap(m);
				if (m.width = m.height = 0, p.close(), p = g, P = p.width, I = p.height, P * I > this._opts.pixelLimit) throw Error("image exceeds pixel limit");
				d.columns === void 0 && (O = Math.ceil(p.width / T)), d.rows === void 0 && (A = Math.ceil(p.height / E));
			}
			if (f !== this._generation) throw Error("image decode canceled");
			let Q = d.zIndex ?? 0;
			if (this._kittyStorage.addImage(e.id, p, !0, q, Q), p = void 0, d.cursorMovement === 1) {
				let e = R.ybase - K;
				R.x = z, R.y = Math.max(B - e, 0);
			} else R.x = Math.min(z + O, this._coreTerminal.cols);
		} catch (e) {
			throw p?.close(), e;
		}
	}
	async _createBitmap(e) {
		let d = new Uint8Array(await e.data.arrayBuffer());
		if (e.compression === "z" && (d = await this._decompressZlib(d)), e.format === 100) {
			let e = ee(d);
			if (e.mime !== "image/png" || !(e.width > 0) || !(e.height > 0) || e.width * e.height > this._opts.pixelLimit) throw RangeError("PNG exceeds pixel limit or has invalid dimensions");
			let f = new Blob([d], { type: "image/png" });
			if (!window.createImageBitmap) {
				let e = URL.createObjectURL(f), d = new Image();
				return new Promise((f, p) => {
					d.addEventListener("load", () => {
						URL.revokeObjectURL(e);
						let m = D.createCanvas(window.document, d.width, d.height);
						m.getContext("2d")?.drawImage(d, 0, 0), createImageBitmap(m).then(f).catch(p);
					}), d.addEventListener("error", () => {
						URL.revokeObjectURL(e), p(/* @__PURE__ */ Error("Failed to load image"));
					}), d.src = e;
				});
			}
			return createImageBitmap(f);
		}
		let f = e.width, p = e.height;
		if (!f || !p) throw Error("Width and height required for raw pixel data");
		let m = e.format === 32 ? 4 : 3, h = f * p * m;
		if (d.length < h) throw Error("Insufficient pixel data");
		let g = f * p;
		if (e.format === 32) return createImageBitmap(new ImageData(new Uint8ClampedArray(d.buffer, d.byteOffset, g * 4), f, p));
		let _ = new Uint8ClampedArray(g * 4), v = new Uint32Array(d.buffer, d.byteOffset, Math.floor(d.byteLength / 4)), b = new Uint32Array(_.buffer), S = g & -4, C = 0, T = 0;
		for (let e = 0; e < S; e += 4) {
			let e = v[C++], d = v[C++], f = v[C++];
			b[T++] = 4278190080 | e, b[T++] = 4278190080 | e >>> 24 | d << 8, b[T++] = 4278190080 | d >>> 16 | f << 16, b[T++] = 4278190080 | f >>> 8;
		}
		let E = S * 3, O = S * 4;
		for (let e = S; e < g; e++) _[O] = d[E], _[O + 1] = d[E + 1], _[O + 2] = d[E + 2], _[O + 3] = 255, E += 3, O += 4;
		return createImageBitmap(new ImageData(_, f, p));
	}
	async _decompressZlib(e) {
		try {
			return await this._decompress(e, "deflate");
		} catch (d) {
			if (d instanceof RangeError) throw d;
			return await this._decompress(e, "deflate-raw");
		}
	}
	async _decompress(e, d) {
		let f = Math.min(this._opts.kittySizeLimit, this._opts.pixelLimit * 4, this._opts.storageLimit * 1e6), p = 0, m = new ReadableStream({ pull(d) {
			if (p >= e.length) {
				d.close();
				return;
			}
			let f = Math.min(p + 4096, e.length);
			d.enqueue(new Uint8Array(e.subarray(p, f))), p = f;
		} }).pipeThrough(new DecompressionStream(d)).getReader(), h = [], g = 0;
		try {
			for (;;) {
				let { done: e, value: d } = await m.read();
				if (e) break;
				if (g += d.byteLength, g > f) throw await m.cancel().catch(() => {}), /* @__PURE__ */ RangeError("decompressed image exceeds byte limit");
				h.push(d);
			}
		} finally {
			m.releaseLock();
		}
		let _ = new Uint8Array(g), v = 0;
		for (let e of h) _.set(e, v), v += e.length;
		return _;
	}
	get images() {
		return this._kittyStorage.images;
	}
	get _kittyIdToStorageId() {
		return this._kittyStorage.kittyIdToStorageId;
	}
	get pendingTransmissions() {
		return this._pendingTransmissions;
	}
}, U = class e {
	constructor(e) {
		this._storage = e, this._nextImageId = 1, this._images = /* @__PURE__ */ new Map(), this._kittyIdToStorageId = /* @__PURE__ */ new Map(), this._storageIdToKittyId = /* @__PURE__ */ new Map(), this._handleStorageImageDeleted = (e) => {
			let d = this._storageIdToKittyId.get(e);
			d !== void 0 && (this._kittyIdToStorageId.delete(d), this._storageIdToKittyId.delete(e), this._images.delete(d));
		}, this._addImageOpts = {
			scrolling: !0,
			layer: "top",
			zIndex: 0,
			cursorPos: "iip"
		}, this._previousOnImageDeleted = this._storage.onImageDeleted, this._wrappedOnImageDeleted = (e) => {
			this._previousOnImageDeleted?.(e), this._handleStorageImageDeleted(e);
		}, this._storage.onImageDeleted = this._wrappedOnImageDeleted;
	}
	reset() {
		this._nextImageId = 1, this._images.clear(), this._kittyIdToStorageId.clear(), this._storageIdToKittyId.clear();
	}
	dispose() {
		this.reset(), this._storage.onImageDeleted === this._wrappedOnImageDeleted && (this._storage.onImageDeleted = this._previousOnImageDeleted);
	}
	storeImage(d, f) {
		let p = d ?? this._nextImageId++, m = this._kittyIdToStorageId.get(p);
		m !== void 0 && (this._storage.deleteImage(m), this._kittyIdToStorageId.delete(p), this._storageIdToKittyId.delete(m)), !this._images.has(p) && this._images.size >= e._maxStoredImages && this._evictUndisplayedImages();
		let h = this._storage.getLimit() * 1e6;
		this._images.delete(p);
		let g = 0;
		for (let e of this._images.values()) g += e.data.size;
		for (let e of [!1, !0]) for (let [d, p] of this._images) {
			if (g + f.data.size <= h) break;
			this._kittyIdToStorageId.has(d) === e && (g -= p.data.size, this.deleteById(d));
		}
		return this._images.set(p, {
			...f,
			id: p
		}), p;
	}
	addImage(e, d, f, p, m) {
		let h = this._kittyIdToStorageId.get(e);
		h !== void 0 && this._storageIdToKittyId.delete(h), this._addImageOpts.scrolling = f, this._addImageOpts.layer = p, this._addImageOpts.zIndex = m;
		let g = this._storage.addImage(d, this._addImageOpts);
		this._kittyIdToStorageId.set(e, g), this._storageIdToKittyId.set(g, e);
	}
	getImage(e) {
		return this._images.get(e);
	}
	deleteById(e) {
		this._images.delete(e);
		let d = this._kittyIdToStorageId.get(e);
		d !== void 0 && (this._storage.deleteImage(d), this._kittyIdToStorageId.delete(e), this._storageIdToKittyId.delete(d));
	}
	deleteAll() {
		this._images.clear();
		for (let e of this._kittyIdToStorageId.values()) this._storage.deleteImage(e);
		this._kittyIdToStorageId.clear(), this._storageIdToKittyId.clear();
	}
	get images() {
		return this._images;
	}
	get kittyIdToStorageId() {
		return this._kittyIdToStorageId;
	}
	get lastImageId() {
		return this._nextImageId - 1;
	}
	_evictUndisplayedImages() {
		for (let [d] of this._images) {
			if (this._images.size <= e._maxStoredImages / 2) break;
			this._kittyIdToStorageId.has(d) || this._images.delete(d);
		}
	}
};
U._maxStoredImages = 256;
var Ae = U, y = M(Z()), Xe = M(We()), Mt = 4194304, Te = y.PALETTE_ANSI_256;
Te.set(y.PALETTE_VT340_COLOR);
var ae = class {
	constructor(e, d, f) {
		this._opts = e, this._storage = d, this._coreTerminal = f, this._size = 0, this._aborted = !1, (0, Xe.DecoderAsync)({
			memoryLimit: this._opts.pixelLimit * 4,
			palette: Te,
			paletteLimit: this._opts.sixelPaletteLimit
		}).then((e) => this._dec = e);
	}
	reset() {
		this._dec && (this._dec.release(), this._dec._palette.fill(0), this._dec.init(0, Te, this._opts.sixelPaletteLimit));
	}
	hook(e) {
		if (this._size = 0, this._aborted = !1, this._dec) {
			let d = e.params[1] === 1 ? 0 : vt(this._coreTerminal._core._inputHandler._curAttrData, this._coreTerminal._core._themeService?.colors);
			this._dec.init(d, null, this._opts.sixelPaletteLimit);
		}
	}
	put(e, d, f) {
		if (!(this._aborted || !this._dec)) {
			if (this._size += f - d, this._size > this._opts.sixelSizeLimit) {
				console.warn("SIXEL: too much data, aborting"), this._aborted = !0, this._dec.release();
				return;
			}
			try {
				this._dec.decode(e, d, f);
			} catch (e) {
				console.warn(`SIXEL: error while decoding image - ${e}`), this._aborted = !0, this._dec.release();
			}
		}
	}
	unhook(e) {
		if (this._aborted || !e || !this._dec) return !0;
		let d = this._dec.width, f = this._dec.height;
		if (!d || !f) return f && this._storage.advanceCursor(f), !0;
		let p = D.createCanvas(void 0, d, f);
		return p.getContext("2d")?.putImageData(new ImageData(this._dec.data8, d, f), 0, 0), this._dec.memoryUsage > Mt && this._dec.release(), this._storage.addImage(p), !0;
	}
};
function vt(e, d) {
	let f = 0;
	if (!d) return f;
	if (e.isInverse()) if (e.isFgDefault()) f = ne(d.foreground.rgba);
	else if (e.isFgRGB()) {
		let d = e.constructor.toColorRGB(e.getFgColor());
		f = (0, y.toRGBA8888)(...d);
	} else f = ne(d.ansi[e.getFgColor()].rgba);
	else if (e.isBgDefault()) f = ne(d.background.rgba);
	else if (e.isBgRGB()) {
		let d = e.constructor.toColorRGB(e.getBgColor());
		f = (0, y.toRGBA8888)(...d);
	} else f = ne(d.ansi[e.getBgColor()].rgba);
	return f;
}
function ne(e) {
	return y.BIG_ENDIAN ? e : (e & 255) << 24 | (e >>> 8 & 255) << 16 | (e >>> 16 & 255) << 8 | e >>> 24 & 255;
}
var oe = class {
	constructor(e, d, f, p) {
		this._storage = e, this._opts = d, this._renderer = f, this._terminal = p, this._addImageOpts = {
			scrolling: !0,
			layer: "top",
			zIndex: 0,
			cursorPos: "vt340"
		};
	}
	addImage(e) {
		this._addImageOpts.scrolling = this._opts.sixelScrolling, this._storage.addImage(e, this._addImageOpts);
	}
	advanceCursor(e) {
		if (this._opts.sixelScrolling) {
			let d = this._renderer.cellSize;
			(d.width === -1 || d.height === -1) && (d = w);
			let f = Math.ceil(e / d.height);
			for (let e = 1; e < f; ++e) this._terminal._core._inputHandler.lineFeed();
		}
	}
}, he = class {
	constructor(e) {
		this._storage = e, this._addImageOpts = {
			scrolling: !0,
			layer: "top",
			zIndex: 0,
			cursorPos: "iip"
		};
	}
	addImage(e) {
		this._storage.addImage(e, this._addImageOpts);
	}
}, Ze = {
	enableSizeReports: !0,
	pixelLimit: 16777216,
	sixelSupport: !0,
	sixelScrolling: !0,
	sixelPaletteLimit: 4096,
	sixelSizeLimit: 33554432,
	storageLimit: 128,
	showPlaceholder: !0,
	iipSupport: !0,
	iipSizeLimit: 33554432,
	kittySupport: !0,
	kittySizeLimit: 33554432
}, je = 4096, Ve = class {
	constructor(e) {
		this._disposables = [], this._handlers = /* @__PURE__ */ new Map(), this._onImageAdded = new X(), this.onImageAdded = this._onImageAdded.event, this._opts = Object.assign({}, Ze, e), this._defaultOpts = Object.assign({}, Ze, e);
	}
	dispose() {
		for (let e of this._handlers.values()) e.reset();
		for (let e of this._disposables) e.dispose();
		this._disposables.length = 0, this._handlers.clear(), this._onImageAdded.dispose();
	}
	_disposeLater(...e) {
		for (let d of e) this._disposables.push(d);
	}
	activate(e) {
		if (this._terminal = e, this._renderer = new D(e), this._storage = new j(e, this._renderer, this._opts), this._storage.onImageAdded = () => this._onImageAdded.fire(), this._opts.enableSizeReports) {
			let d = e.options.windowOptions ?? {};
			d.getWinSizePixels = !0, d.getCellSizePixels = !0, d.getWinSizeChars = !0, e.options.windowOptions = d;
		}
		if (this._disposeLater(this._renderer, this._storage, e.parser.registerCsiHandler({
			prefix: "?",
			final: "h"
		}, (e) => this._decset(e)), e.parser.registerCsiHandler({
			prefix: "?",
			final: "l"
		}, (e) => this._decrst(e)), e.parser.registerCsiHandler({ final: "c" }, (e) => this._da1(e)), e.parser.registerCsiHandler({
			prefix: "?",
			final: "S"
		}, (e) => this._xtermGraphicsAttributes(e)), e.onRender((e) => this._storage?.render(e)), e.parser.registerCsiHandler({
			intermediates: "!",
			final: "p"
		}, () => this.reset()), e.parser.registerEscHandler({ final: "c" }, () => this.reset()), e._core._inputHandler.onRequestReset(() => this.reset()), e.buffer.onBufferChange(() => this._storage?.wipeAlternate()), e.onResize((e) => this._storage?.viewportResize(e))), this._opts.sixelSupport) {
			let d = new oe(this._storage, this._opts, this._renderer, e), f = new ae(this._opts, d, e);
			this._handlers.set("sixel", f), this._disposeLater(e._core._inputHandler._parser.registerDcsHandler({ final: "q" }, f));
		}
		if (this._opts.iipSupport) {
			let d = new he(this._storage), f = new te(this._opts, this._renderer, d, e);
			this._handlers.set("iip", f), this._disposeLater(e._core._inputHandler._parser.registerOscHandler(1337, f));
		}
		if (this._opts.kittySupport) {
			let d = new Ae(this._storage), f = new ie(this._opts, this._renderer, d, e);
			this._handlers.set("kitty", f), this._disposeLater(d, f, e._core._inputHandler._parser.registerApcHandler({ final: "G" }, f));
		}
	}
	reset() {
		this._opts.sixelScrolling = this._defaultOpts.sixelScrolling, this._opts.sixelPaletteLimit = this._defaultOpts.sixelPaletteLimit, this._storage?.reset();
		for (let e of this._handlers.values()) e.reset();
		return !1;
	}
	get storageLimit() {
		return this._storage?.getLimit() || -1;
	}
	set storageLimit(e) {
		this._storage?.setLimit(e), this._opts.storageLimit = e;
	}
	get storageUsage() {
		return this._storage ? this._storage.getUsage() : -1;
	}
	get showPlaceholder() {
		return this._opts.showPlaceholder;
	}
	set showPlaceholder(e) {
		this._opts.showPlaceholder = e, this._renderer?.showPlaceholder(e);
	}
	getImageAtBufferCell(e, d) {
		return this._storage?.getImageAtBufferCell(e, d);
	}
	extractTileAtBufferCell(e, d) {
		return this._storage?.extractTileAtBufferCell(e, d);
	}
	_report(e) {
		this._terminal?._core.input(e, !1);
	}
	_decset(e) {
		for (let d = 0; d < e.length; ++d) e[d] === 80 && (this._opts.sixelScrolling = !1);
		return !1;
	}
	_decrst(e) {
		for (let d = 0; d < e.length; ++d) e[d] === 80 && (this._opts.sixelScrolling = !0);
		return !1;
	}
	_da1(e) {
		return e[0] ? !0 : this._opts.sixelSupport ? (this._report("\x1B[?62;4;9;22c"), !0) : !1;
	}
	_xtermGraphicsAttributes(e) {
		if (e.length < 2) return !0;
		if (e[0] === 1) switch (e[1]) {
			case 1: return this._report(`\x1B[?${e[0]};0;${this._opts.sixelPaletteLimit}S`), !0;
			case 2:
				this._opts.sixelPaletteLimit = this._defaultOpts.sixelPaletteLimit, this._report(`\x1B[?${e[0]};0;${this._opts.sixelPaletteLimit}S`);
				for (let e of this._handlers.values()) e.reset();
				return !0;
			case 3: return e.length > 2 && !(e[2] instanceof Array) && e[2] <= je ? (this._opts.sixelPaletteLimit = e[2], this._report(`\x1B[?${e[0]};0;${this._opts.sixelPaletteLimit}S`)) : this._report(`\x1B[?${e[0]};2S`), !0;
			case 4: return this._report(`\x1B[?${e[0]};0;${je}S`), !0;
			default: return this._report(`\x1B[?${e[0]};2S`), !0;
		}
		if (e[0] === 2) switch (e[1]) {
			case 1:
				let d = this._renderer?.dimensions?.css.canvas.width, f = this._renderer?.dimensions?.css.canvas.height;
				if (!d || !f) {
					let e = w;
					d = (this._terminal?.cols || 80) * e.width, f = (this._terminal?.rows || 24) * e.height;
				}
				if (d * f < this._opts.pixelLimit) this._report(`\x1B[?${e[0]};0;${d.toFixed(0)};${f.toFixed(0)}S`);
				else {
					let d = Math.floor(Math.sqrt(this._opts.pixelLimit));
					this._report(`\x1B[?${e[0]};0;${d};${d}S`);
				}
				return !0;
			case 4:
				let p = Math.floor(Math.sqrt(this._opts.pixelLimit));
				return this._report(`\x1B[?${e[0]};0;${p};${p}S`), !0;
			default: return this._report(`\x1B[?${e[0]};2S`), !0;
		}
		return this._report(`\x1B[?${e[0]};1S`), !0;
	}
};
export { Ve as ImageAddon };
