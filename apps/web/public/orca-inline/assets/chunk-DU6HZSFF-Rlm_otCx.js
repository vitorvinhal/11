import { n as __name, t as __export } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { h as setLogLevel, m as log } from "./src-DXrlgw8l.js";
import { t as purify } from "./purify.es-Ddnop6vN.js";
var Channel = {
	min: {
		r: 0,
		g: 0,
		b: 0,
		s: 0,
		l: 0,
		a: 0
	},
	max: {
		r: 255,
		g: 255,
		b: 255,
		h: 360,
		s: 100,
		l: 100,
		a: 1
	},
	clamp: {
		r: (u) => u >= 255 ? 255 : u < 0 ? 0 : u,
		g: (u) => u >= 255 ? 255 : u < 0 ? 0 : u,
		b: (u) => u >= 255 ? 255 : u < 0 ? 0 : u,
		h: (u) => u % 360,
		s: (u) => u >= 100 ? 100 : u < 0 ? 0 : u,
		l: (u) => u >= 100 ? 100 : u < 0 ? 0 : u,
		a: (u) => u >= 1 ? 1 : u < 0 ? 0 : u
	},
	toLinear: (u) => {
		let z = u / 255;
		return u > .03928 ? ((z + .055) / 1.055) ** 2.4 : z / 12.92;
	},
	hue2rgb: (u, z, B) => (B < 0 && (B += 1), B > 1 && --B, B < 1 / 6 ? u + (z - u) * 6 * B : B < 1 / 2 ? z : B < 2 / 3 ? u + (z - u) * (2 / 3 - B) * 6 : u),
	hsl2rgb: ({ h: u, s: z, l: B }, V) => {
		if (!z) return B * 2.55;
		u /= 360, z /= 100, B /= 100;
		let H = B < .5 ? B * (1 + z) : B + z - B * z, W = 2 * B - H;
		switch (V) {
			case "r": return Channel.hue2rgb(W, H, u + 1 / 3) * 255;
			case "g": return Channel.hue2rgb(W, H, u) * 255;
			case "b": return Channel.hue2rgb(W, H, u - 1 / 3) * 255;
		}
	},
	rgb2hsl: ({ r: u, g: z, b: B }, V) => {
		u /= 255, z /= 255, B /= 255;
		let H = Math.max(u, z, B), U = Math.min(u, z, B), W = (H + U) / 2;
		if (V === "l") return W * 100;
		if (H === U) return 0;
		let G = H - U, K = W > .5 ? G / (2 - H - U) : G / (H + U);
		if (V === "s") return K * 100;
		switch (H) {
			case u: return ((z - B) / G + (z < B ? 6 : 0)) * 60;
			case z: return ((B - u) / G + 2) * 60;
			case B: return ((u - z) / G + 4) * 60;
			default: return -1;
		}
	}
}, utils_default = {
	channel: Channel,
	lang: {
		clamp: (u, z, B) => z > B ? Math.min(z, Math.max(B, u)) : Math.min(B, Math.max(z, u)),
		round: (u) => Math.round(u * 1e10) / 1e10
	},
	unit: { dec2hex: (u) => {
		let z = Math.round(u).toString(16);
		return z.length > 1 ? z : `0${z}`;
	} }
}, DEC2HEX = {};
for (let u = 0; u <= 255; u++) DEC2HEX[u] = utils_default.unit.dec2hex(u);
var TYPE = {
	ALL: 0,
	RGB: 1,
	HSL: 2
}, type_default = class {
	constructor() {
		this.type = TYPE.ALL;
	}
	get() {
		return this.type;
	}
	set(u) {
		if (this.type && this.type !== u) throw Error("Cannot change both RGB and HSL channels at the same time");
		this.type = u;
	}
	reset() {
		this.type = TYPE.ALL;
	}
	is(u) {
		return this.type === u;
	}
}, reusable_default = new class {
	constructor(u, z) {
		this.color = z, this.changed = !1, this.data = u, this.type = new type_default();
	}
	set(u, z) {
		return this.color = z, this.changed = !1, this.data = u, this.type.type = TYPE.ALL, this;
	}
	_ensureHSL() {
		let u = this.data, { h: z, s: B, l: V } = u;
		z === void 0 && (u.h = utils_default.channel.rgb2hsl(u, "h")), B === void 0 && (u.s = utils_default.channel.rgb2hsl(u, "s")), V === void 0 && (u.l = utils_default.channel.rgb2hsl(u, "l"));
	}
	_ensureRGB() {
		let u = this.data, { r: z, g: B, b: V } = u;
		z === void 0 && (u.r = utils_default.channel.hsl2rgb(u, "r")), B === void 0 && (u.g = utils_default.channel.hsl2rgb(u, "g")), V === void 0 && (u.b = utils_default.channel.hsl2rgb(u, "b"));
	}
	get r() {
		let u = this.data, z = u.r;
		return !this.type.is(TYPE.HSL) && z !== void 0 ? z : (this._ensureHSL(), utils_default.channel.hsl2rgb(u, "r"));
	}
	get g() {
		let u = this.data, z = u.g;
		return !this.type.is(TYPE.HSL) && z !== void 0 ? z : (this._ensureHSL(), utils_default.channel.hsl2rgb(u, "g"));
	}
	get b() {
		let u = this.data, z = u.b;
		return !this.type.is(TYPE.HSL) && z !== void 0 ? z : (this._ensureHSL(), utils_default.channel.hsl2rgb(u, "b"));
	}
	get h() {
		let u = this.data, z = u.h;
		return !this.type.is(TYPE.RGB) && z !== void 0 ? z : (this._ensureRGB(), utils_default.channel.rgb2hsl(u, "h"));
	}
	get s() {
		let u = this.data, z = u.s;
		return !this.type.is(TYPE.RGB) && z !== void 0 ? z : (this._ensureRGB(), utils_default.channel.rgb2hsl(u, "s"));
	}
	get l() {
		let u = this.data, z = u.l;
		return !this.type.is(TYPE.RGB) && z !== void 0 ? z : (this._ensureRGB(), utils_default.channel.rgb2hsl(u, "l"));
	}
	get a() {
		return this.data.a;
	}
	set r(u) {
		this.type.set(TYPE.RGB), this.changed = !0, this.data.r = u;
	}
	set g(u) {
		this.type.set(TYPE.RGB), this.changed = !0, this.data.g = u;
	}
	set b(u) {
		this.type.set(TYPE.RGB), this.changed = !0, this.data.b = u;
	}
	set h(u) {
		this.type.set(TYPE.HSL), this.changed = !0, this.data.h = u;
	}
	set s(u) {
		this.type.set(TYPE.HSL), this.changed = !0, this.data.s = u;
	}
	set l(u) {
		this.type.set(TYPE.HSL), this.changed = !0, this.data.l = u;
	}
	set a(u) {
		this.changed = !0, this.data.a = u;
	}
}({
	r: 0,
	g: 0,
	b: 0,
	a: 0
}, "transparent"), Hex = {
	re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
	parse: (u) => {
		if (u.charCodeAt(0) !== 35) return;
		let z = u.match(Hex.re);
		if (!z) return;
		let B = z[1], V = parseInt(B, 16), H = B.length, U = H % 4 == 0, W = H > 4, G = W ? 1 : 17, K = W ? 8 : 4, q = U ? 0 : -1, X = W ? 255 : 15;
		return reusable_default.set({
			r: (V >> K * (q + 3) & X) * G,
			g: (V >> K * (q + 2) & X) * G,
			b: (V >> K * (q + 1) & X) * G,
			a: U ? (V & X) * G / 255 : 1
		}, u);
	},
	stringify: (u) => {
		let { r: z, g: B, b: V, a: H } = u;
		return H < 1 ? `#${DEC2HEX[Math.round(z)]}${DEC2HEX[Math.round(B)]}${DEC2HEX[Math.round(V)]}${DEC2HEX[Math.round(H * 255)]}` : `#${DEC2HEX[Math.round(z)]}${DEC2HEX[Math.round(B)]}${DEC2HEX[Math.round(V)]}`;
	}
}, hex_default = Hex, HSL = {
	re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
	hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
	_hue2deg: (u) => {
		let z = u.match(HSL.hueRe);
		if (z) {
			let [, u, B] = z;
			switch (B) {
				case "grad": return utils_default.channel.clamp.h(parseFloat(u) * .9);
				case "rad": return utils_default.channel.clamp.h(parseFloat(u) * 180 / Math.PI);
				case "turn": return utils_default.channel.clamp.h(parseFloat(u) * 360);
			}
		}
		return utils_default.channel.clamp.h(parseFloat(u));
	},
	parse: (u) => {
		let z = u.charCodeAt(0);
		if (z !== 104 && z !== 72) return;
		let B = u.match(HSL.re);
		if (!B) return;
		let [, V, H, U, G, K] = B;
		return reusable_default.set({
			h: HSL._hue2deg(V),
			s: utils_default.channel.clamp.s(parseFloat(H)),
			l: utils_default.channel.clamp.l(parseFloat(U)),
			a: G ? utils_default.channel.clamp.a(K ? parseFloat(G) / 100 : parseFloat(G)) : 1
		}, u);
	},
	stringify: (u) => {
		let { h: z, s: B, l: V, a: H } = u;
		return H < 1 ? `hsla(${utils_default.lang.round(z)}, ${utils_default.lang.round(B)}%, ${utils_default.lang.round(V)}%, ${H})` : `hsl(${utils_default.lang.round(z)}, ${utils_default.lang.round(B)}%, ${utils_default.lang.round(V)}%)`;
	}
}, hsl_default = HSL, Keyword = {
	colors: {
		aliceblue: "#f0f8ff",
		antiquewhite: "#faebd7",
		aqua: "#00ffff",
		aquamarine: "#7fffd4",
		azure: "#f0ffff",
		beige: "#f5f5dc",
		bisque: "#ffe4c4",
		black: "#000000",
		blanchedalmond: "#ffebcd",
		blue: "#0000ff",
		blueviolet: "#8a2be2",
		brown: "#a52a2a",
		burlywood: "#deb887",
		cadetblue: "#5f9ea0",
		chartreuse: "#7fff00",
		chocolate: "#d2691e",
		coral: "#ff7f50",
		cornflowerblue: "#6495ed",
		cornsilk: "#fff8dc",
		crimson: "#dc143c",
		cyanaqua: "#00ffff",
		darkblue: "#00008b",
		darkcyan: "#008b8b",
		darkgoldenrod: "#b8860b",
		darkgray: "#a9a9a9",
		darkgreen: "#006400",
		darkgrey: "#a9a9a9",
		darkkhaki: "#bdb76b",
		darkmagenta: "#8b008b",
		darkolivegreen: "#556b2f",
		darkorange: "#ff8c00",
		darkorchid: "#9932cc",
		darkred: "#8b0000",
		darksalmon: "#e9967a",
		darkseagreen: "#8fbc8f",
		darkslateblue: "#483d8b",
		darkslategray: "#2f4f4f",
		darkslategrey: "#2f4f4f",
		darkturquoise: "#00ced1",
		darkviolet: "#9400d3",
		deeppink: "#ff1493",
		deepskyblue: "#00bfff",
		dimgray: "#696969",
		dimgrey: "#696969",
		dodgerblue: "#1e90ff",
		firebrick: "#b22222",
		floralwhite: "#fffaf0",
		forestgreen: "#228b22",
		fuchsia: "#ff00ff",
		gainsboro: "#dcdcdc",
		ghostwhite: "#f8f8ff",
		gold: "#ffd700",
		goldenrod: "#daa520",
		gray: "#808080",
		green: "#008000",
		greenyellow: "#adff2f",
		grey: "#808080",
		honeydew: "#f0fff0",
		hotpink: "#ff69b4",
		indianred: "#cd5c5c",
		indigo: "#4b0082",
		ivory: "#fffff0",
		khaki: "#f0e68c",
		lavender: "#e6e6fa",
		lavenderblush: "#fff0f5",
		lawngreen: "#7cfc00",
		lemonchiffon: "#fffacd",
		lightblue: "#add8e6",
		lightcoral: "#f08080",
		lightcyan: "#e0ffff",
		lightgoldenrodyellow: "#fafad2",
		lightgray: "#d3d3d3",
		lightgreen: "#90ee90",
		lightgrey: "#d3d3d3",
		lightpink: "#ffb6c1",
		lightsalmon: "#ffa07a",
		lightseagreen: "#20b2aa",
		lightskyblue: "#87cefa",
		lightslategray: "#778899",
		lightslategrey: "#778899",
		lightsteelblue: "#b0c4de",
		lightyellow: "#ffffe0",
		lime: "#00ff00",
		limegreen: "#32cd32",
		linen: "#faf0e6",
		magenta: "#ff00ff",
		maroon: "#800000",
		mediumaquamarine: "#66cdaa",
		mediumblue: "#0000cd",
		mediumorchid: "#ba55d3",
		mediumpurple: "#9370db",
		mediumseagreen: "#3cb371",
		mediumslateblue: "#7b68ee",
		mediumspringgreen: "#00fa9a",
		mediumturquoise: "#48d1cc",
		mediumvioletred: "#c71585",
		midnightblue: "#191970",
		mintcream: "#f5fffa",
		mistyrose: "#ffe4e1",
		moccasin: "#ffe4b5",
		navajowhite: "#ffdead",
		navy: "#000080",
		oldlace: "#fdf5e6",
		olive: "#808000",
		olivedrab: "#6b8e23",
		orange: "#ffa500",
		orangered: "#ff4500",
		orchid: "#da70d6",
		palegoldenrod: "#eee8aa",
		palegreen: "#98fb98",
		paleturquoise: "#afeeee",
		palevioletred: "#db7093",
		papayawhip: "#ffefd5",
		peachpuff: "#ffdab9",
		peru: "#cd853f",
		pink: "#ffc0cb",
		plum: "#dda0dd",
		powderblue: "#b0e0e6",
		purple: "#800080",
		rebeccapurple: "#663399",
		red: "#ff0000",
		rosybrown: "#bc8f8f",
		royalblue: "#4169e1",
		saddlebrown: "#8b4513",
		salmon: "#fa8072",
		sandybrown: "#f4a460",
		seagreen: "#2e8b57",
		seashell: "#fff5ee",
		sienna: "#a0522d",
		silver: "#c0c0c0",
		skyblue: "#87ceeb",
		slateblue: "#6a5acd",
		slategray: "#708090",
		slategrey: "#708090",
		snow: "#fffafa",
		springgreen: "#00ff7f",
		tan: "#d2b48c",
		teal: "#008080",
		thistle: "#d8bfd8",
		transparent: "#00000000",
		turquoise: "#40e0d0",
		violet: "#ee82ee",
		wheat: "#f5deb3",
		white: "#ffffff",
		whitesmoke: "#f5f5f5",
		yellow: "#ffff00",
		yellowgreen: "#9acd32"
	},
	parse: (u) => {
		u = u.toLowerCase();
		let z = Keyword.colors[u];
		if (z) return hex_default.parse(z);
	},
	stringify: (u) => {
		let z = hex_default.stringify(u);
		for (let u in Keyword.colors) if (Keyword.colors[u] === z) return u;
	}
}, keyword_default = Keyword, RGB = {
	re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
	parse: (u) => {
		let z = u.charCodeAt(0);
		if (z !== 114 && z !== 82) return;
		let B = u.match(RGB.re);
		if (!B) return;
		let [, V, H, U, G, K, q, Y, X] = B;
		return reusable_default.set({
			r: utils_default.channel.clamp.r(H ? parseFloat(V) * 2.55 : parseFloat(V)),
			g: utils_default.channel.clamp.g(G ? parseFloat(U) * 2.55 : parseFloat(U)),
			b: utils_default.channel.clamp.b(q ? parseFloat(K) * 2.55 : parseFloat(K)),
			a: Y ? utils_default.channel.clamp.a(X ? parseFloat(Y) / 100 : parseFloat(Y)) : 1
		}, u);
	},
	stringify: (u) => {
		let { r: z, g: B, b: V, a: H } = u;
		return H < 1 ? `rgba(${utils_default.lang.round(z)}, ${utils_default.lang.round(B)}, ${utils_default.lang.round(V)}, ${utils_default.lang.round(H)})` : `rgb(${utils_default.lang.round(z)}, ${utils_default.lang.round(B)}, ${utils_default.lang.round(V)})`;
	}
}, rgb_default = RGB, color_default = {
	format: {
		keyword: keyword_default,
		hex: hex_default,
		rgb: rgb_default,
		rgba: rgb_default,
		hsl: hsl_default,
		hsla: hsl_default
	},
	parse: (u) => {
		if (typeof u != "string") return u;
		let z = hex_default.parse(u) || rgb_default.parse(u) || hsl_default.parse(u) || keyword_default.parse(u);
		if (z) return z;
		throw Error(`Unsupported color format: "${u}"`);
	},
	stringify: (u) => !u.changed && u.color ? u.color : u.type.is(TYPE.HSL) || u.data.r === void 0 ? hsl_default.stringify(u) : u.a < 1 || !Number.isInteger(u.r) || !Number.isInteger(u.g) || !Number.isInteger(u.b) ? rgb_default.stringify(u) : hex_default.stringify(u)
}, change_default = (u, z) => {
	let B = color_default.parse(u);
	for (let u in z) B[u] = utils_default.channel.clamp[u](z[u]);
	return color_default.stringify(B);
}, rgba_default = (u, z, B = 0, V = 1) => {
	if (typeof u != "number") return change_default(u, { a: z });
	let H = reusable_default.set({
		r: utils_default.channel.clamp.r(u),
		g: utils_default.channel.clamp.g(z),
		b: utils_default.channel.clamp.b(B),
		a: utils_default.channel.clamp.a(V)
	});
	return color_default.stringify(H);
}, luminance_default = (u) => {
	let { r: z, g: B, b: V } = color_default.parse(u), H = .2126 * utils_default.channel.toLinear(z) + .7152 * utils_default.channel.toLinear(B) + .0722 * utils_default.channel.toLinear(V);
	return utils_default.lang.round(H);
}, is_light_default = (u) => luminance_default(u) >= .5, is_dark_default = (u) => !is_light_default(u), adjust_channel_default = (u, z, B) => {
	let V = color_default.parse(u), H = V[z], U = utils_default.channel.clamp[z](H + B);
	return H !== U && (V[z] = U), color_default.stringify(V);
}, lighten_default = (u, z) => adjust_channel_default(u, "l", z), darken_default = (u, z) => adjust_channel_default(u, "l", -z), adjust_default = (u, z) => {
	let B = color_default.parse(u), V = {};
	for (let u in z) z[u] && (V[u] = B[u] + z[u]);
	return change_default(u, V);
}, mix_default = (u, z, B = 50) => {
	let { r: V, g: H, b: U, a: W } = color_default.parse(u), { r: G, g: K, b: q, a: J } = color_default.parse(z), Y = B / 100, X = Y * 2 - 1, Z = W - J, Q = ((X * Z === -1 ? X : (X + Z) / (1 + X * Z)) + 1) / 2, $ = 1 - Q;
	return rgba_default(V * Q + G * $, H * Q + K * $, U * Q + q * $, W * Y + J * (1 - Y));
}, invert_default = (u, z = 100) => {
	let B = color_default.parse(u);
	return B.r = 255 - B.r, B.g = 255 - B.g, B.b = 255 - B.b, mix_default(B, u, z);
}, assignWithDepth = /* @__PURE__ */ __name((u, z, { depth: B = 2 } = {}) => {
	let V = { depth: B };
	if (Array.isArray(z) && !Array.isArray(u)) return z.forEach((z) => assignWithDepth(u, z, V)), u;
	if (Array.isArray(z) && Array.isArray(u)) return z.forEach((z) => {
		u.includes(z) || u.push(z);
	}), u;
	if (u == null || B <= 0) return typeof u == "object" && u && typeof z == "object" ? Object.assign(u, z) : z;
	if (z != null && typeof u == "object" && typeof z == "object") {
		let V = u;
		Object.entries(z).forEach(([z, H]) => {
			if (typeof H == "object") {
				if (H === null) return;
				Object.hasOwn(u, z) || Object.defineProperty(u, z, {
					value: void 0,
					writable: !0,
					enumerable: !0,
					configurable: !0
				}), V[z] === void 0 && (V[z] = Array.isArray(H) ? [] : {}), typeof V[z] == "object" && (V[z] = assignWithDepth(V[z], H, { depth: B - 1 }));
			} else typeof V[z] != "object" && (Object.hasOwn(u, z) ? V[z] = H : Object.defineProperty(u, z, {
				value: H,
				writable: !0,
				enumerable: !0,
				configurable: !0
			}));
		});
	}
	return u;
}, "assignWithDepth"), assignWithDepth_default = assignWithDepth, oldAttributeBackgroundColorOdd = "#ffffff", oldAttributeBackgroundColorEven = "#f2f2f2", mkBorder = /* @__PURE__ */ __name((u, z) => z ? adjust_default(u, {
	s: -40,
	l: 10
}) : adjust_default(u, {
	s: -40,
	l: -10
}), "mkBorder"), Theme = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.useGradient = !0, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
	}
	updateColors() {
		if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor), this.lineColor = this.lineColor || invert_default(this.background), this.arrowheadColor = this.arrowheadColor || invert_default(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || darken_default(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || darken_default(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || lighten_default(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 }), this.darkMode) for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 75);
		else for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 25);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || invert_default(this["cScale" + u]);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || lighten_default(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
		let u = this.darkMode ? -4 : -1;
		for (let z = 0; z < 5; z++) this["surface" + z] = this["surface" + z] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: u * (5 + z * 3)
		}), this["surfacePeer" + z] = this["surfacePeer" + z] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: u * (8 + z * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || adjust_default(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? adjust_default(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? adjust_default(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? adjust_default(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? adjust_default(this.primaryColor, {
			h: 60,
			l: -30
		}), this.venn5 = this.venn5 ?? adjust_default(this.primaryColor, {
			h: -60,
			l: -30
		}), this.venn6 = this.venn6 ?? adjust_default(this.secondaryColor, {
			h: 60,
			l: -30
		}), this.venn7 = this.venn7 ?? adjust_default(this.primaryColor, {
			h: 120,
			l: -30
		}), this.venn8 = this.venn8 ?? adjust_default(this.secondaryColor, {
			h: 120,
			l: -30
		}), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#8B0000",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#E8F5E9",
			complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
			chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
			clearBg: this.cynefin?.clearBg || "#FFF8E1",
			confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.background,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.background
		}, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor;
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables = /* @__PURE__ */ __name((u) => {
	let z = new Theme();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme2 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = lighten_default(this.primaryColor, 16), this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 }), this.primaryBorderColor = invert_default(this.background), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.tertiaryColor), this.lineColor = invert_default(this.background), this.textColor = invert_default(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = lighten_default(invert_default("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = rgba_default(255, 255, 255, .25), this.arrowheadColor = "calculated", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.clusterBkg = "#302F3D", this.sectionBkgColor = darken_default("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = darken_default(this.sectionBkgColor, 10), this.taskBorderColor = rgba_default(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = rgba_default(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || darken_default(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal";
	}
	updateColors() {
		this.secondBkg = lighten_default(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = lighten_default(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.background, this.taskBkgColor = lighten_default(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = invert_default(this.doneTaskBkgColor), this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = adjust_default(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || invert_default(this["cScale" + u]);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScalePeer" + u] = this["cScalePeer" + u] || lighten_default(this["cScale" + u], 10);
		for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || adjust_default(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(-10 + u * 4)
		}), this["surfacePeer" + u] = this["surfacePeer" + u] || adjust_default(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(-7 + u * 4)
		});
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["pie" + u] = this["cScale" + u];
		this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.mainContrastColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.mainContrastColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
		for (let u = 0; u < 8; u++) this["venn" + (u + 1)] = this["venn" + (u + 1)] ?? lighten_default(this["cScale" + u], 30);
		this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#FF6B6B",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#1B5E20",
			complicatedBg: this.cynefin?.complicatedBg || "#0D47A1",
			chaoticBg: this.cynefin?.chaoticBg || "#BF360C",
			clearBg: this.cynefin?.clearBg || "#F57F17",
			confusionBg: this.cynefin?.confusionBg || "#4A148C",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
		}, this.packet = {
			startByteColor: this.primaryTextColor,
			endByteColor: this.primaryTextColor,
			labelColor: this.primaryTextColor,
			titleColor: this.primaryTextColor,
			blockStrokeColor: this.primaryTextColor,
			blockFillColor: this.background
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#ff6b6b", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.mainBkg,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.mainBkg
		}, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = lighten_default(this.secondaryColor, 20), this.git1 = lighten_default(this.pie2 || this.secondaryColor, 20), this.git2 = lighten_default(this.pie3 || this.tertiaryColor, 20), this.git3 = lighten_default(this.pie4 || adjust_default(this.primaryColor, { h: -30 }), 20), this.git4 = lighten_default(this.pie5 || adjust_default(this.primaryColor, { h: -60 }), 20), this.git5 = lighten_default(this.pie6 || adjust_default(this.primaryColor, { h: -90 }), 10), this.git6 = lighten_default(this.pie7 || adjust_default(this.primaryColor, { h: 60 }), 10), this.git7 = lighten_default(this.pie8 || adjust_default(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "#2d2d2d", this.emUiStroke = this.emUiStroke || "#555", this.emProcessorFill = this.emProcessorFill || lighten_default("#5a3d5c", 10), this.emProcessorStroke = this.emProcessorStroke || "#8a6d8c", this.emReadModelFill = this.emReadModelFill || lighten_default("#3d5a2d", 10), this.emReadModelStroke = this.emReadModelStroke || "#6d8c5c", this.emCommandFill = this.emCommandFill || lighten_default("#2d3d5a", 10), this.emCommandStroke = this.emCommandStroke || "#5c6d8c", this.emEventFill = this.emEventFill || lighten_default("#5a452d", 10), this.emEventStroke = this.emEventStroke || "#8c755c", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || lighten_default(this.background, 5), this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || lighten_default(this.background, 12), this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || lighten_default(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || lighten_default(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables2 = /* @__PURE__ */ __name((u) => {
	let z = new Theme2();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme3 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = adjust_default(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 }), this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.tertiaryColor), this.lineColor = invert_default(this.background), this.textColor = invert_default(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode), this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.clusterBkg = "#FBFBFF", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = rgba_default(102, 102, 255, .49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !1, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow(1px 2px 2px rgba(185, 185, 185, 1))", this.updateColors();
	}
	updateColors() {
		this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || darken_default(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || darken_default(this.tertiaryColor, 40);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 10), this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 25);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || adjust_default(this["cScale" + u], { h: 180 });
		for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || adjust_default(this.mainBkg, {
			h: 30,
			l: -(5 + u * 5)
		}), this["surfacePeer" + u] = this["surfacePeer" + u] || adjust_default(this.mainBkg, {
			h: 30,
			l: -(7 + u * 5)
		});
		if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
			this.cScaleLabel0 = this.cScaleLabel0 || invert_default(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || invert_default(this.labelTextColor);
			for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.labelTextColor;
		}
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || lighten_default(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || lighten_default(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = adjust_default(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || adjust_default(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -40
		}), this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: -40
		}), this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -40
		}), this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -90,
			l: -40
		}), this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -30
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? adjust_default(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? adjust_default(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? adjust_default(this.tertiaryColor, { l: -40 }), this.venn4 = this.venn4 ?? adjust_default(this.primaryColor, {
			h: 60,
			l: -30
		}), this.venn5 = this.venn5 ?? adjust_default(this.primaryColor, {
			h: -60,
			l: -30
		}), this.venn6 = this.venn6 ?? adjust_default(this.secondaryColor, {
			h: 60,
			l: -30
		}), this.venn7 = this.venn7 ?? adjust_default(this.primaryColor, {
			h: 120,
			l: -30
		}), this.venn8 = this.venn8 ?? adjust_default(this.secondaryColor, {
			h: 120,
			l: -30
		}), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#8B0000",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#E8F5E9",
			complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
			chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
			clearBg: this.cynefin?.clearBg || "#FFF8E1",
			confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.background,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.background
		}, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || darken_default(invert_default(this.git0), 25), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(u) {
		if (Object.keys(this).forEach((u) => {
			this[u] === "calculated" && (this[u] = void 0);
		}), typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables3 = /* @__PURE__ */ __name((u) => {
	let z = new Theme3();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme4 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.tertiaryColor = lighten_default("#cde498", 10), this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.primaryColor), this.lineColor = invert_default(this.background), this.textColor = invert_default(this.background), this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.5))";
	}
	updateColors() {
		this.actorBorder = darken_default(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || darken_default(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || darken_default(this.tertiaryColor, 40);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 10), this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 25);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || adjust_default(this["cScale" + u], { h: 180 });
		this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
		for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || adjust_default(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(5 + u * 5)
		}), this["surfacePeer" + u] = this["surfacePeer" + u] || adjust_default(this.mainBkg, {
			h: 30,
			s: -30,
			l: -(8 + u * 5)
		});
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || lighten_default(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = adjust_default(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, {
			h: 40,
			l: -40
		}), this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -50
		}), this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -60,
			l: -50
		}), this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -50
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? adjust_default(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? adjust_default(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? adjust_default(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? adjust_default(this.primaryColor, {
			h: 60,
			l: -30
		}), this.venn5 = this.venn5 ?? adjust_default(this.primaryColor, {
			h: -60,
			l: -30
		}), this.venn6 = this.venn6 ?? adjust_default(this.secondaryColor, {
			h: 60,
			l: -30
		}), this.venn7 = this.venn7 ?? adjust_default(this.primaryColor, {
			h: 120,
			l: -30
		}), this.venn8 = this.venn8 ?? adjust_default(this.secondaryColor, {
			h: 120,
			l: -30
		}), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#8B4513",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#C8E6C9",
			complicatedBg: this.cynefin?.complicatedBg || "#DCEDC8",
			chaoticBg: this.cynefin?.chaoticBg || "#FFE0B2",
			clearBg: this.cynefin?.clearBg || "#FFF9C4",
			confusionBg: this.cynefin?.confusionBg || "#D7CCC8",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
			startByteColor: this.primaryTextColor,
			endByteColor: this.primaryTextColor,
			labelColor: this.primaryTextColor,
			titleColor: this.primaryTextColor,
			blockStrokeColor: this.primaryTextColor,
			blockFillColor: this.mainBkg
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.background,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.background
		}, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables4 = /* @__PURE__ */ __name((u) => {
	let z = new Theme4();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme5 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = lighten_default(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 }), this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.tertiaryColor), this.lineColor = invert_default(this.background), this.textColor = invert_default(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = "\"trebuchet ms\", verdana, arial, sans-serif", this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
	}
	updateColors() {
		this.secondBkg = lighten_default(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = lighten_default(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || invert_default(this["cScale" + u]);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || lighten_default(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 10);
		this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
		for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || adjust_default(this.mainBkg, { l: -(5 + u * 5) }), this["surfacePeer" + u] = this["surfacePeer" + u] || adjust_default(this.mainBkg, { l: -(8 + u * 5) });
		this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = lighten_default(this.contrast, 30), this.sectionBkgColor2 = lighten_default(this.contrast, 30), this.taskBorderColor = darken_default(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = lighten_default(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = darken_default(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["pie" + u] = this["cScale" + u];
		this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
		for (let u = 0; u < 8; u++) this["venn" + (u + 1)] = this["venn" + (u + 1)] ?? this["cScale" + u];
		this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.cynefin = {
			domainFontSize: this.cynefin?.domainFontSize || 16,
			itemFontSize: this.cynefin?.itemFontSize || 12,
			boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
			boundaryWidth: this.cynefin?.boundaryWidth || 2,
			cliffColor: this.cynefin?.cliffColor || "#8B0000",
			cliffWidth: this.cynefin?.cliffWidth || 4,
			arrowColor: this.cynefin?.arrowColor || this.lineColor,
			arrowWidth: this.cynefin?.arrowWidth || 2,
			complexBg: this.cynefin?.complexBg || "#E8F5E9",
			complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
			chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
			clearBg: this.cynefin?.clearBg || "#FFF8E1",
			confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
			textColor: this.cynefin?.textColor || this.textColor,
			labelColor: this.cynefin?.labelColor || this.primaryTextColor
		}, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
		}, this.radar = {
			axisColor: this.radar?.axisColor || this.lineColor,
			axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
			axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
			curveOpacity: this.radar?.curveOpacity || .5,
			curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
			graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
			graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
			graticuleOpacity: this.radar?.graticuleOpacity || .3,
			legendBoxSize: this.radar?.legendBoxSize || 12,
			legendFontSize: this.radar?.legendFontSize || 12
		}, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
			backgroundColor: this.wardley?.backgroundColor || this.background,
			axisColor: this.wardley?.axisColor || this.lineColor,
			axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
			gridColor: this.wardley?.gridColor || this.gridColor,
			componentFill: this.wardley?.componentFill || this.background,
			componentStroke: this.wardley?.componentStroke || this.lineColor,
			componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
			linkStroke: this.wardley?.linkStroke || this.lineColor,
			evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
			annotationStroke: this.wardley?.annotationStroke || this.lineColor,
			annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
			annotationFill: this.wardley?.annotationFill || this.background
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = darken_default(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || adjust_default(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables5 = /* @__PURE__ */ __name((u) => {
	let z = new Theme5();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme6 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 2, this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#000000", this.stateBorder = "#000000", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));", this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
	}
	updateColors() {
		this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor), this.lineColor = this.lineColor || invert_default(this.background), this.arrowheadColor = this.arrowheadColor || invert_default(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
		let u = "#ECECFE", z = "#E9E9F1", B = adjust_default(u, {
			h: 180,
			l: 5
		});
		if (this.sectionBkgColor = this.sectionBkgColor || B, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || z, this.sectionBkgColor2 = this.sectionBkgColor2 || u, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || u, this.activeTaskBorderColor = this.activeTaskBorderColor || u, this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(u, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || u, this.cScale1 = this.cScale1 || z, this.cScale2 = this.cScale2 || B, this.cScale3 = this.cScale3 || adjust_default(u, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(u, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(u, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(u, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(u, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(u, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || adjust_default(u, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(u, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(u, { h: 330 }), this.darkMode) for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 75);
		else for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 25);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || invert_default(this["cScale" + u]);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || lighten_default(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
		let V = this.darkMode ? -4 : -1;
		for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: V * (5 + u * 3)
		}), this["surfacePeer" + u] = this["surfacePeer" + u] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: V * (8 + u * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || u, this.fillType1 = this.fillType1 || z, this.fillType2 = this.fillType2 || adjust_default(u, { h: 64 }), this.fillType3 = this.fillType3 || adjust_default(z, { h: 64 }), this.fillType4 = this.fillType4 || adjust_default(u, { h: -64 }), this.fillType5 = this.fillType5 || adjust_default(z, { h: -64 }), this.fillType6 = this.fillType6 || adjust_default(u, { h: 128 }), this.fillType7 = this.fillType7 || adjust_default(z, { h: 128 }), this.pie1 = this.pie1 || u, this.pie2 = this.pie2 || z, this.pie3 = this.pie3 || B, this.pie4 = this.pie4 || adjust_default(u, { l: -10 }), this.pie5 = this.pie5 || adjust_default(z, { l: -10 }), this.pie6 = this.pie6 || adjust_default(B, { l: -10 }), this.pie7 = this.pie7 || adjust_default(u, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(u, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(u, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(u, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || adjust_default(u, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || adjust_default(u, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || u, this.quadrant2Fill = this.quadrant2Fill || adjust_default(u, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(u, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(u, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || u, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || u, this.git1 = this.git1 || z, this.git2 = this.git2 || B, this.git3 = this.git3 || adjust_default(u, { h: -30 }), this.git4 = this.git4 || adjust_default(u, { h: -60 }), this.git5 = this.git5 || adjust_default(u, { h: -90 }), this.git6 = this.git6 || adjust_default(u, { h: 60 }), this.git7 = this.git7 || adjust_default(u, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables6 = /* @__PURE__ */ __name((u) => {
	let z = new Theme6();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme7 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = lighten_default(this.primaryColor, 16), this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 }), this.primaryBorderColor = invert_default(this.background), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.tertiaryColor), this.mainBkg = "#2a2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = lighten_default(invert_default("#323D47"), 10), this.border1 = "#ccc", this.border2 = rgba_default(255, 255, 255, .25), this.arrowheadColor = invert_default(this.background), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 1, this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.2))", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
	}
	updateColors() {
		if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor), this.lineColor = this.lineColor || invert_default(this.background), this.arrowheadColor = this.arrowheadColor || invert_default(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 }), this.darkMode) for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 75);
		else for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 25);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || invert_default(this["cScale" + u]);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || lighten_default(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
		let u = this.darkMode ? -4 : -1;
		for (let z = 0; z < 5; z++) this["surface" + z] = this["surface" + z] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: u * (5 + z * 3)
		}), this["surfacePeer" + z] = this["surfacePeer" + z] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: u * (8 + z * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || adjust_default(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || "#0b0000", this.git1 = this.git1 || "#4d1037", this.git2 = this.git2 || "#3f5258", this.git3 = this.git3 || "#4f2f1b", this.git4 = this.git4 || "#6e0a0a", this.git5 = this.git5 || "#3b0048", this.git6 = this.git6 || "#995a01", this.git7 = this.git7 || "#154706", this.gitDarkMode = !0, this.gitDarkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables7 = /* @__PURE__ */ __name((u) => {
	let z = new Theme7();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme8 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = mkBorder("#28253D", this.darkMode), this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.clusterBkg = "#F9F9FB", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.filterColor = "#000000";
	}
	updateColors() {
		this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#FEF9C3", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor), this.lineColor = this.lineColor || invert_default(this.background), this.arrowheadColor = this.arrowheadColor || invert_default(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.noteFontWeight = 600, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
		let u = "#ECECFE", z = "#E9E9F1", B = adjust_default(u, {
			h: 180,
			l: 5
		});
		this.sectionBkgColor = this.sectionBkgColor || B, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || z, this.sectionBkgColor2 = this.sectionBkgColor2 || u, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || u, this.activeTaskBorderColor = this.activeTaskBorderColor || u, this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(u, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.compositeTitleBackground = "#F9F9FB", this.altBackground = "#F9F9FB", this.stateEdgeLabelBackground = "#FFFFFF", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = this.mainBkg;
		if (this.darkMode) for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 75);
		else for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 25);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || invert_default(this["cScale" + u]);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || lighten_default(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
		let V = this.darkMode ? -4 : -1;
		for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: V * (5 + u * 3)
		}), this["surfacePeer" + u] = this["surfacePeer" + u] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: V * (8 + u * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || u, this.fillType1 = this.fillType1 || z, this.fillType2 = this.fillType2 || adjust_default(u, { h: 64 }), this.fillType3 = this.fillType3 || adjust_default(z, { h: 64 }), this.fillType4 = this.fillType4 || adjust_default(u, { h: -64 }), this.fillType5 = this.fillType5 || adjust_default(z, { h: -64 }), this.fillType6 = this.fillType6 || adjust_default(u, { h: 128 }), this.fillType7 = this.fillType7 || adjust_default(z, { h: 128 }), this.pie1 = this.pie1 || u, this.pie2 = this.pie2 || z, this.pie3 = this.pie3 || B, this.pie4 = this.pie4 || adjust_default(u, { l: -10 }), this.pie5 = this.pie5 || adjust_default(z, { l: -10 }), this.pie6 = this.pie6 || adjust_default(B, { l: -10 }), this.pie7 = this.pie7 || adjust_default(u, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(u, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(u, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(u, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || adjust_default(u, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || adjust_default(u, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || u, this.quadrant2Fill = this.quadrant2Fill || adjust_default(u, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(u, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(u, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || u, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#FFFFFF", this.git0 = this.git0 || u, this.git1 = this.git1 || z, this.git2 = this.git2 || B, this.git3 = this.git3 || adjust_default(u, { h: -30 }), this.git4 = this.git4 || adjust_default(u, { h: -60 }), this.git5 = this.git5 || adjust_default(u, { h: -90 }), this.git6 = this.git6 || adjust_default(u, { h: 60 }), this.git7 = this.git7 || adjust_default(u, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables8 = /* @__PURE__ */ __name((u) => {
	let z = new Theme8();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme9 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = lighten_default(this.primaryColor, 16), this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 }), this.primaryBorderColor = invert_default(this.background), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = lighten_default(invert_default("#323D47"), 10), this.border1 = "#ccc", this.border2 = rgba_default(255, 255, 255, .25), this.arrowheadColor = invert_default(this.background), this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.filterColor = "#FFFFFF";
	}
	updateColors() {
		if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor), this.lineColor = this.lineColor || invert_default(this.background), this.arrowheadColor = this.arrowheadColor || invert_default(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.compositeBackground = "#16141F", this.altBackground = "#16141F", this.compositeTitleBackground = "#16141F", this.stateEdgeLabelBackground = "#16141F", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, {
			h: 210,
			l: 150
		}), this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 }), this.darkMode) for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 75);
		else for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScale" + u] = darken_default(this["cScale" + u], 25);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || invert_default(this["cScale" + u]);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || lighten_default(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
		let u = this.darkMode ? -4 : -1;
		for (let z = 0; z < 5; z++) this["surface" + z] = this["surface" + z] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: u * (5 + z * 3)
		}), this["surfacePeer" + z] = this["surfacePeer" + z] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: u * (8 + z * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || adjust_default(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#16141F", this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables9 = /* @__PURE__ */ __name((u) => {
	let z = new Theme9();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme10 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode), this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
			"#E879F9",
			"#2DD4BF",
			"#FB923C",
			"#22D3EE",
			"#4ADE80",
			"#A78BFA",
			"#F87171",
			"#FACC15",
			"#818CF8",
			"#A3E635 ",
			"#38BDF8",
			"#FB7185"
		], this.bkgColorArray = [
			"#FDF4FF",
			"#F0FDFA",
			"#FFF7ED",
			"#ECFEFF",
			"#F0FDF4",
			"#F5F3FF",
			"#FEF2F2",
			"#FEFCE8",
			"#EEF2FF",
			"#F7FEE7",
			"#F0F9FF",
			"#FFF1F2"
		], this.filterColor = "#000000";
	}
	updateColors() {
		this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor), this.lineColor = this.lineColor || invert_default(this.background), this.arrowheadColor = this.arrowheadColor || invert_default(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
		let u = "#ECECFE", z = "#E9E9F1", B = adjust_default(u, {
			h: 180,
			l: 5
		});
		this.sectionBkgColor = this.sectionBkgColor || B, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || z, this.sectionBkgColor2 = this.sectionBkgColor2 || u, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || u, this.activeTaskBorderColor = this.activeTaskBorderColor || u, this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(u, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || invert_default(this["cScale" + u]);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || lighten_default(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = this["cScaleLabel" + u] || this.scaleLabelColor;
		let V = this.darkMode ? -4 : -1;
		for (let u = 0; u < 5; u++) this["surface" + u] = this["surface" + u] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: V * (5 + u * 3)
		}), this["surfacePeer" + u] = this["surfacePeer" + u] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: V * (8 + u * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || u, this.fillType1 = this.fillType1 || z, this.fillType2 = this.fillType2 || adjust_default(u, { h: 64 }), this.fillType3 = this.fillType3 || adjust_default(z, { h: 64 }), this.fillType4 = this.fillType4 || adjust_default(u, { h: -64 }), this.fillType5 = this.fillType5 || adjust_default(z, { h: -64 }), this.fillType6 = this.fillType6 || adjust_default(u, { h: 128 }), this.fillType7 = this.fillType7 || adjust_default(z, { h: 128 }), this.pie1 = this.pie1 || u, this.pie2 = this.pie2 || z, this.pie3 = this.pie3 || B, this.pie4 = this.pie4 || adjust_default(u, { l: -10 }), this.pie5 = this.pie5 || adjust_default(z, { l: -10 }), this.pie6 = this.pie6 || adjust_default(B, { l: -10 }), this.pie7 = this.pie7 || adjust_default(u, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(u, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(u, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(u, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || adjust_default(u, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || adjust_default(u, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || u, this.quadrant2Fill = this.quadrant2Fill || adjust_default(u, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(u, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(u, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || u, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || u, this.git1 = this.git1 || z, this.git2 = this.git2 || B, this.git3 = this.git3 || adjust_default(u, { h: -30 }), this.git4 = this.git4 || adjust_default(u, { h: -60 }), this.git5 = this.git5 || adjust_default(u, { h: -90 }), this.git6 = this.git6 || adjust_default(u, { h: 60 }), this.git7 = this.git7 || adjust_default(u, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.fontWeight = 600, this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables10 = /* @__PURE__ */ __name((u) => {
	let z = new Theme10();
	return z.calculate(u), z;
}, "getThemeVariables"), Theme11 = class {
	static #e = __name(this, "Theme");
	constructor() {
		this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = lighten_default(this.primaryColor, 16), this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 }), this.primaryBorderColor = invert_default(this.background), this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode), this.primaryTextColor = invert_default(this.primaryColor), this.secondaryTextColor = invert_default(this.secondaryColor), this.tertiaryTextColor = invert_default(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = lighten_default(invert_default("#323D47"), 10), this.border1 = "#ccc", this.border2 = rgba_default(255, 255, 255, .25), this.arrowheadColor = invert_default(this.background), this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "\"Recursive Variable\", arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
			"#E879F9",
			"#2DD4BF",
			"#FB923C",
			"#22D3EE",
			"#4ADE80",
			"#A78BFA",
			"#F87171",
			"#FACC15",
			"#818CF8",
			"#A3E635 ",
			"#38BDF8",
			"#FB7185"
		], this.bkgColorArray = [], this.filterColor = "#FFFFFF";
	}
	updateColors() {
		this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, {
			h: 180,
			l: 5
		}), this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor), this.lineColor = this.lineColor || invert_default(this.background), this.arrowheadColor = this.arrowheadColor || invert_default(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor), this.rectBkgColor = this.rectBkgColor || this.tertiaryColor, this.rootLabelColor = "#FFFFFF", this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleInv" + u] = this["cScaleInv" + u] || invert_default(this["cScale" + u]);
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this.darkMode ? this["cScalePeer" + u] = this["cScalePeer" + u] || lighten_default(this["cScale" + u], 10) : this["cScalePeer" + u] = this["cScalePeer" + u] || darken_default(this["cScale" + u], 10);
		this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
		for (let u = 0; u < this.THEME_COLOR_LIMIT; u++) this["cScaleLabel" + u] = darken_default(this["cScale" + u], 75);
		let u = this.darkMode ? -4 : -1;
		for (let z = 0; z < 5; z++) this["surface" + z] = this["surface" + z] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: u * (5 + z * 3)
		}), this["surfacePeer" + z] = this["surfacePeer" + z] || adjust_default(this.mainBkg, {
			h: 180,
			s: -15,
			l: u * (8 + z * 3)
		});
		this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || adjust_default(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || adjust_default(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || adjust_default(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || adjust_default(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || adjust_default(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || adjust_default(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || adjust_default(this.primaryColor, {
			h: 60,
			l: -10
		}), this.pie8 = this.pie8 || adjust_default(this.primaryColor, {
			h: -60,
			l: -10
		}), this.pie9 = this.pie9 || adjust_default(this.primaryColor, {
			h: 120,
			l: 0
		}), this.pie10 = this.pie10 || adjust_default(this.primaryColor, {
			h: 60,
			l: -20
		}), this.pie11 = this.pie11 || adjust_default(this.primaryColor, {
			h: -60,
			l: -20
		}), this.pie12 = this.pie12 || adjust_default(this.primaryColor, {
			h: 120,
			l: -10
		}), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, {
			r: 5,
			g: 5,
			b: 5
		}), this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, {
			r: 10,
			g: 10,
			b: 10
		}), this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, {
			r: 15,
			g: 15,
			b: 15
		}), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, {
			r: -5,
			g: -5,
			b: -5
		}), this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, {
			r: -10,
			g: -10,
			b: -10
		}), this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, {
			r: -15,
			g: -15,
			b: -15
		}), this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
			backgroundColor: this.xyChart?.backgroundColor || this.background,
			titleColor: this.xyChart?.titleColor || this.primaryTextColor,
			legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
			xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
			xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
			xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
			xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
			yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
			yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
			yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
			yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
			plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
		}, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 }), this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 }), this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 }), this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 }), this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = lighten_default(this.git0, 25), this.git1 = lighten_default(this.git1, 25), this.git2 = lighten_default(this.git2, 25), this.git3 = lighten_default(this.git3, 25), this.git4 = lighten_default(this.git4, 25), this.git5 = lighten_default(this.git5, 25), this.git6 = lighten_default(this.git6, 25), this.git7 = lighten_default(this.git7, 25)) : (this.git0 = darken_default(this.git0, 25), this.git1 = darken_default(this.git1, 25), this.git2 = darken_default(this.git2, 25), this.git3 = darken_default(this.git3, 25), this.git4 = darken_default(this.git4, 25), this.git5 = darken_default(this.git5, 25), this.git6 = darken_default(this.git6, 25), this.git7 = darken_default(this.git7, 25)), this.gitInv0 = this.gitInv0 || invert_default(this.git0), this.gitInv1 = this.gitInv1 || invert_default(this.git1), this.gitInv2 = this.gitInv2 || invert_default(this.git2), this.gitInv3 = this.gitInv3 || invert_default(this.git3), this.gitInv4 = this.gitInv4 || invert_default(this.git4), this.gitInv5 = this.gitInv5 || invert_default(this.git5), this.gitInv6 = this.gitInv6 || invert_default(this.git6), this.gitInv7 = this.gitInv7 || invert_default(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.fontWeight = 600, this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
	}
	calculate(u) {
		if (typeof u != "object") {
			this.updateColors();
			return;
		}
		let z = Object.keys(u);
		z.forEach((z) => {
			this[z] = u[z];
		}), this.updateColors(), z.forEach((z) => {
			this[z] = u[z];
		});
	}
}, getThemeVariables11 = /* @__PURE__ */ __name((u) => {
	let z = new Theme11();
	return z.calculate(u), z;
}, "getThemeVariables"), themes_default = {
	base: { getThemeVariables },
	dark: { getThemeVariables: getThemeVariables2 },
	default: { getThemeVariables: getThemeVariables3 },
	forest: { getThemeVariables: getThemeVariables4 },
	neutral: { getThemeVariables: getThemeVariables5 },
	neo: { getThemeVariables: getThemeVariables6 },
	"neo-dark": { getThemeVariables: getThemeVariables7 },
	redux: { getThemeVariables: getThemeVariables8 },
	"redux-dark": { getThemeVariables: getThemeVariables9 },
	"redux-color": { getThemeVariables: getThemeVariables10 },
	"redux-dark-color": { getThemeVariables: getThemeVariables11 }
}, config_schema_default = {
	flowchart: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		subGraphTitleMargin: {
			top: 0,
			bottom: 0
		},
		diagramPadding: 8,
		htmlLabels: null,
		nodeSpacing: 50,
		rankSpacing: 50,
		curve: "basis",
		padding: 15,
		defaultRenderer: "dagre-wrapper",
		wrappingWidth: 200,
		inheritDir: !1
	},
	swimlane: {
		useMaxWidth: !0,
		lineHops: "arc",
		ignoreCrossLaneEdges: !0,
		optimizeRanksByCrossings: !0,
		automaticLaneOrdering: !1
	},
	sequence: {
		useMaxWidth: !0,
		hideUnusedParticipants: !1,
		activationWidth: 10,
		diagramMarginX: 50,
		diagramMarginY: 10,
		actorMargin: 50,
		width: 150,
		height: 65,
		boxMargin: 10,
		boxTextMargin: 5,
		noteMargin: 10,
		messageMargin: 35,
		messageAlign: "center",
		mirrorActors: !0,
		forceMenus: !1,
		bottomMarginAdj: 1,
		rightAngles: !1,
		showSequenceNumbers: !1,
		actorFontSize: 14,
		actorFontFamily: "\"Open Sans\", sans-serif",
		actorFontWeight: 400,
		noteFontSize: 14,
		noteFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		noteFontWeight: 400,
		noteAlign: "center",
		messageFontSize: 16,
		messageFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		messageFontWeight: 400,
		wrap: !1,
		wrapPadding: 10,
		labelBoxWidth: 50,
		labelBoxHeight: 20
	},
	gantt: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		barHeight: 20,
		barGap: 4,
		topPadding: 50,
		rightPadding: 75,
		leftPadding: 75,
		gridLineStartPadding: 35,
		fontSize: 11,
		sectionFontSize: 11,
		numberSectionStyles: 4,
		axisFormat: "%Y-%m-%d",
		topAxis: !1,
		displayMode: "",
		weekday: "sunday"
	},
	journey: {
		useMaxWidth: !0,
		diagramMarginX: 50,
		diagramMarginY: 10,
		leftMargin: 150,
		maxLabelWidth: 360,
		width: 150,
		height: 50,
		boxMargin: 10,
		boxTextMargin: 5,
		noteMargin: 10,
		messageMargin: 35,
		messageAlign: "center",
		bottomMarginAdj: 1,
		rightAngles: !1,
		taskFontSize: 14,
		taskFontFamily: "\"Open Sans\", sans-serif",
		taskMargin: 50,
		activationWidth: 10,
		textPlacement: "fo",
		actorColours: [
			"#8FBC8F",
			"#7CFC00",
			"#00FFFF",
			"#20B2AA",
			"#B0E0E6",
			"#FFFFE0"
		],
		sectionFills: [
			"#191970",
			"#8B008B",
			"#4B0082",
			"#2F4F4F",
			"#800000",
			"#8B4513",
			"#00008B"
		],
		sectionColours: ["#fff"],
		titleColor: "",
		titleFontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		titleFontSize: "4ex"
	},
	class: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		arrowMarkerAbsolute: !1,
		dividerMargin: 10,
		padding: 5,
		textHeight: 10,
		defaultRenderer: "dagre-wrapper",
		htmlLabels: !1,
		hideEmptyMembersBox: !1,
		hierarchicalNamespaces: !0
	},
	state: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		dividerMargin: 10,
		sizeUnit: 5,
		padding: 8,
		textHeight: 10,
		titleShift: -15,
		noteMargin: 10,
		forkWidth: 70,
		forkHeight: 7,
		miniPadding: 2,
		fontSizeFactor: 5.02,
		fontSize: 24,
		labelHeight: 16,
		edgeLengthFactor: "20",
		compositTitleSize: 35,
		radius: 5,
		defaultRenderer: "dagre-wrapper"
	},
	er: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		diagramPadding: 20,
		layoutDirection: "TB",
		minEntityWidth: 100,
		minEntityHeight: 75,
		entityPadding: 15,
		nodeSpacing: 140,
		rankSpacing: 80,
		stroke: "gray",
		fill: "honeydew",
		fontSize: 12
	},
	pie: {
		useMaxWidth: !0,
		textPosition: .75,
		donutHole: 0,
		legendPosition: "right",
		highlightSlice: ""
	},
	quadrantChart: {
		useMaxWidth: !0,
		chartWidth: 500,
		chartHeight: 500,
		titleFontSize: 20,
		titlePadding: 10,
		quadrantPadding: 5,
		xAxisLabelPadding: 5,
		yAxisLabelPadding: 5,
		xAxisLabelFontSize: 16,
		yAxisLabelFontSize: 16,
		quadrantLabelFontSize: 16,
		quadrantTextTopPadding: 5,
		pointTextPadding: 5,
		pointLabelFontSize: 12,
		pointRadius: 5,
		xAxisPosition: "top",
		yAxisPosition: "left",
		quadrantInternalBorderStrokeWidth: 1,
		quadrantExternalBorderStrokeWidth: 2
	},
	xyChart: {
		useMaxWidth: !0,
		width: 700,
		height: 500,
		titleFontSize: 20,
		titlePadding: 10,
		showDataLabel: !1,
		showDataLabelOutsideBar: !1,
		showTitle: !0,
		showLegend: !0,
		legendFontSize: 14,
		legendPadding: 10,
		xAxis: {
			$ref: "#/$defs/XYChartAxisConfig",
			showLabel: !0,
			labelFontSize: 14,
			labelPadding: 5,
			showTitle: !0,
			titleFontSize: 16,
			titlePadding: 5,
			showTick: !0,
			tickLength: 5,
			tickWidth: 2,
			showAxisLine: !0,
			axisLineWidth: 2,
			labelRotation: 0
		},
		yAxis: {
			$ref: "#/$defs/XYChartAxisConfig",
			showLabel: !0,
			labelFontSize: 14,
			labelPadding: 5,
			showTitle: !0,
			titleFontSize: 16,
			titlePadding: 5,
			showTick: !0,
			tickLength: 5,
			tickWidth: 2,
			showAxisLine: !0,
			axisLineWidth: 2,
			labelRotation: 0
		},
		chartOrientation: "vertical",
		plotReservedSpacePercent: 50
	},
	requirement: {
		useMaxWidth: !0,
		rect_fill: "#f9f9f9",
		text_color: "#333",
		rect_border_size: "0.5px",
		rect_border_color: "#bbb",
		rect_min_width: 200,
		rect_min_height: 200,
		fontSize: 14,
		rect_padding: 10,
		line_height: 20
	},
	mindmap: {
		useMaxWidth: !0,
		padding: 10,
		maxNodeWidth: 200,
		layoutAlgorithm: "cose-bilkent"
	},
	ishikawa: {
		useMaxWidth: !0,
		diagramPadding: 20
	},
	kanban: {
		useMaxWidth: !0,
		padding: 8,
		sectionWidth: 200,
		ticketBaseUrl: ""
	},
	timeline: {
		useMaxWidth: !0,
		diagramMarginX: 50,
		diagramMarginY: 10,
		leftMargin: 150,
		width: 150,
		height: 50,
		boxMargin: 10,
		boxTextMargin: 5,
		noteMargin: 10,
		messageMargin: 35,
		messageAlign: "center",
		bottomMarginAdj: 1,
		rightAngles: !1,
		taskFontSize: 14,
		taskFontFamily: "\"Open Sans\", sans-serif",
		taskMargin: 50,
		activationWidth: 10,
		textPlacement: "fo",
		actorColours: [
			"#8FBC8F",
			"#7CFC00",
			"#00FFFF",
			"#20B2AA",
			"#B0E0E6",
			"#FFFFE0"
		],
		sectionFills: [
			"#191970",
			"#8B008B",
			"#4B0082",
			"#2F4F4F",
			"#800000",
			"#8B4513",
			"#00008B"
		],
		sectionColours: ["#fff"],
		disableMulticolor: !1
	},
	gitGraph: {
		useMaxWidth: !0,
		titleTopMargin: 25,
		diagramPadding: 8,
		nodeLabel: {
			width: 75,
			height: 100,
			x: -25,
			y: 0
		},
		mainBranchName: "main",
		mainBranchOrder: 0,
		showCommitLabel: !0,
		showBranches: !0,
		rotateCommitLabel: !0,
		parallelCommits: !1,
		arrowMarkerAbsolute: !1
	},
	c4: {
		useMaxWidth: !0,
		diagramMarginX: 50,
		diagramMarginY: 10,
		c4ShapeMargin: 50,
		c4ShapePadding: 20,
		width: 216,
		height: 60,
		boxMargin: 10,
		c4ShapeInRow: 4,
		nextLinePaddingX: 0,
		c4BoundaryInRow: 2,
		personFontSize: 14,
		personFontFamily: "\"Open Sans\", sans-serif",
		personFontWeight: "normal",
		external_personFontSize: 14,
		external_personFontFamily: "\"Open Sans\", sans-serif",
		external_personFontWeight: "normal",
		systemFontSize: 14,
		systemFontFamily: "\"Open Sans\", sans-serif",
		systemFontWeight: "normal",
		external_systemFontSize: 14,
		external_systemFontFamily: "\"Open Sans\", sans-serif",
		external_systemFontWeight: "normal",
		system_dbFontSize: 14,
		system_dbFontFamily: "\"Open Sans\", sans-serif",
		system_dbFontWeight: "normal",
		external_system_dbFontSize: 14,
		external_system_dbFontFamily: "\"Open Sans\", sans-serif",
		external_system_dbFontWeight: "normal",
		system_queueFontSize: 14,
		system_queueFontFamily: "\"Open Sans\", sans-serif",
		system_queueFontWeight: "normal",
		external_system_queueFontSize: 14,
		external_system_queueFontFamily: "\"Open Sans\", sans-serif",
		external_system_queueFontWeight: "normal",
		boundaryFontSize: 14,
		boundaryFontFamily: "\"Open Sans\", sans-serif",
		boundaryFontWeight: "normal",
		messageFontSize: 12,
		messageFontFamily: "\"Open Sans\", sans-serif",
		messageFontWeight: "normal",
		containerFontSize: 14,
		containerFontFamily: "\"Open Sans\", sans-serif",
		containerFontWeight: "normal",
		external_containerFontSize: 14,
		external_containerFontFamily: "\"Open Sans\", sans-serif",
		external_containerFontWeight: "normal",
		container_dbFontSize: 14,
		container_dbFontFamily: "\"Open Sans\", sans-serif",
		container_dbFontWeight: "normal",
		external_container_dbFontSize: 14,
		external_container_dbFontFamily: "\"Open Sans\", sans-serif",
		external_container_dbFontWeight: "normal",
		container_queueFontSize: 14,
		container_queueFontFamily: "\"Open Sans\", sans-serif",
		container_queueFontWeight: "normal",
		external_container_queueFontSize: 14,
		external_container_queueFontFamily: "\"Open Sans\", sans-serif",
		external_container_queueFontWeight: "normal",
		componentFontSize: 14,
		componentFontFamily: "\"Open Sans\", sans-serif",
		componentFontWeight: "normal",
		external_componentFontSize: 14,
		external_componentFontFamily: "\"Open Sans\", sans-serif",
		external_componentFontWeight: "normal",
		component_dbFontSize: 14,
		component_dbFontFamily: "\"Open Sans\", sans-serif",
		component_dbFontWeight: "normal",
		external_component_dbFontSize: 14,
		external_component_dbFontFamily: "\"Open Sans\", sans-serif",
		external_component_dbFontWeight: "normal",
		component_queueFontSize: 14,
		component_queueFontFamily: "\"Open Sans\", sans-serif",
		component_queueFontWeight: "normal",
		external_component_queueFontSize: 14,
		external_component_queueFontFamily: "\"Open Sans\", sans-serif",
		external_component_queueFontWeight: "normal",
		wrap: !0,
		wrapPadding: 10,
		person_bg_color: "#08427B",
		person_border_color: "#073B6F",
		external_person_bg_color: "#686868",
		external_person_border_color: "#8A8A8A",
		system_bg_color: "#1168BD",
		system_border_color: "#3C7FC0",
		system_db_bg_color: "#1168BD",
		system_db_border_color: "#3C7FC0",
		system_queue_bg_color: "#1168BD",
		system_queue_border_color: "#3C7FC0",
		external_system_bg_color: "#999999",
		external_system_border_color: "#8A8A8A",
		external_system_db_bg_color: "#999999",
		external_system_db_border_color: "#8A8A8A",
		external_system_queue_bg_color: "#999999",
		external_system_queue_border_color: "#8A8A8A",
		container_bg_color: "#438DD5",
		container_border_color: "#3C7FC0",
		container_db_bg_color: "#438DD5",
		container_db_border_color: "#3C7FC0",
		container_queue_bg_color: "#438DD5",
		container_queue_border_color: "#3C7FC0",
		external_container_bg_color: "#B3B3B3",
		external_container_border_color: "#A6A6A6",
		external_container_db_bg_color: "#B3B3B3",
		external_container_db_border_color: "#A6A6A6",
		external_container_queue_bg_color: "#B3B3B3",
		external_container_queue_border_color: "#A6A6A6",
		component_bg_color: "#85BBF0",
		component_border_color: "#78A8D8",
		component_db_bg_color: "#85BBF0",
		component_db_border_color: "#78A8D8",
		component_queue_bg_color: "#85BBF0",
		component_queue_border_color: "#78A8D8",
		external_component_bg_color: "#CCCCCC",
		external_component_border_color: "#BFBFBF",
		external_component_db_bg_color: "#CCCCCC",
		external_component_db_border_color: "#BFBFBF",
		external_component_queue_bg_color: "#CCCCCC",
		external_component_queue_border_color: "#BFBFBF"
	},
	sankey: {
		useMaxWidth: !0,
		width: 600,
		height: 400,
		linkColor: "gradient",
		nodeAlignment: "justify",
		showValues: !0,
		prefix: "",
		suffix: "",
		nodeWidth: 10,
		nodePadding: 12,
		labelStyle: "legacy"
	},
	block: {
		useMaxWidth: !0,
		padding: 8
	},
	packet: {
		useMaxWidth: !0,
		rowHeight: 32,
		bitWidth: 32,
		bitsPerRow: 32,
		showBits: !0,
		paddingX: 5,
		paddingY: 5
	},
	treeView: {
		useMaxWidth: !0,
		rowIndent: 10,
		paddingX: 5,
		paddingY: 5,
		lineThickness: 1,
		showIcons: !1,
		defaultIconPack: "",
		filenameIcons: {},
		extensionIcons: {}
	},
	architecture: {
		useMaxWidth: !0,
		padding: 40,
		iconSize: 80,
		fontSize: 16,
		randomize: !1,
		nodeSeparation: 75,
		idealEdgeLengthMultiplier: 1.5,
		edgeElasticity: .45,
		numIter: 2500,
		seed: 1
	},
	eventmodeling: {
		useMaxWidth: !0,
		padding: 30,
		rowHeight: 32
	},
	radar: {
		useMaxWidth: !0,
		width: 600,
		height: 600,
		marginTop: 50,
		marginRight: 50,
		marginBottom: 50,
		marginLeft: 50,
		axisScaleFactor: 1,
		axisLabelFactor: 1.05,
		curveTension: .17
	},
	venn: {
		useMaxWidth: !0,
		width: 800,
		height: 450,
		padding: 8,
		useDebugLayout: !1
	},
	cynefin: {
		useMaxWidth: !0,
		width: 800,
		height: 600,
		padding: 40,
		showDomainDescriptions: !0,
		boundaryAmplitude: 8,
		seed: 0
	},
	theme: "default",
	look: "classic",
	handDrawnSeed: 0,
	layout: "dagre",
	maxTextSize: 5e4,
	maxEdges: 500,
	darkMode: !1,
	fontFamily: "\"trebuchet ms\", verdana, arial, sans-serif;",
	logLevel: 5,
	securityLevel: "strict",
	startOnLoad: !0,
	arrowMarkerAbsolute: !1,
	secure: [
		"secure",
		"securityLevel",
		"startOnLoad",
		"maxTextSize",
		"suppressErrorRendering",
		"maxEdges"
	],
	legacyMathML: !1,
	forceLegacyMathML: !1,
	deterministicIds: !1,
	fontSize: 16,
	markdownAutoWrap: !0,
	suppressErrorRendering: !1
}, config = {
	...config_schema_default,
	deterministicIDSeed: void 0,
	elk: {
		mergeEdges: !1,
		nodePlacementStrategy: "BRANDES_KOEPF",
		nodePlacementAlignment: "NONE",
		forceNodeModelOrder: !1,
		considerModelOrder: "NODES_AND_EDGES",
		keepEntryNodeOnTop: !1
	},
	themeCSS: void 0,
	themeVariables: themes_default.default.getThemeVariables(),
	sequence: {
		...config_schema_default.sequence,
		messageFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		}, "messageFont"),
		noteFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.noteFontFamily,
				fontSize: this.noteFontSize,
				fontWeight: this.noteFontWeight
			};
		}, "noteFont"),
		actorFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.actorFontFamily,
				fontSize: this.actorFontSize,
				fontWeight: this.actorFontWeight
			};
		}, "actorFont")
	},
	class: {
		defaultRenderer: "dagre-wrapper",
		hideEmptyMembersBox: !1,
		hierarchicalNamespaces: !0
	},
	gantt: {
		...config_schema_default.gantt,
		tickInterval: void 0,
		useWidth: void 0
	},
	c4: {
		...config_schema_default.c4,
		useWidth: void 0,
		personFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.personFontFamily,
				fontSize: this.personFontSize,
				fontWeight: this.personFontWeight
			};
		}, "personFont"),
		flowchart: {
			...config_schema_default.flowchart,
			inheritDir: !1
		},
		external_personFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_personFontFamily,
				fontSize: this.external_personFontSize,
				fontWeight: this.external_personFontWeight
			};
		}, "external_personFont"),
		systemFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.systemFontFamily,
				fontSize: this.systemFontSize,
				fontWeight: this.systemFontWeight
			};
		}, "systemFont"),
		external_systemFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_systemFontFamily,
				fontSize: this.external_systemFontSize,
				fontWeight: this.external_systemFontWeight
			};
		}, "external_systemFont"),
		system_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.system_dbFontFamily,
				fontSize: this.system_dbFontSize,
				fontWeight: this.system_dbFontWeight
			};
		}, "system_dbFont"),
		external_system_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_system_dbFontFamily,
				fontSize: this.external_system_dbFontSize,
				fontWeight: this.external_system_dbFontWeight
			};
		}, "external_system_dbFont"),
		system_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.system_queueFontFamily,
				fontSize: this.system_queueFontSize,
				fontWeight: this.system_queueFontWeight
			};
		}, "system_queueFont"),
		external_system_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_system_queueFontFamily,
				fontSize: this.external_system_queueFontSize,
				fontWeight: this.external_system_queueFontWeight
			};
		}, "external_system_queueFont"),
		containerFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.containerFontFamily,
				fontSize: this.containerFontSize,
				fontWeight: this.containerFontWeight
			};
		}, "containerFont"),
		external_containerFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_containerFontFamily,
				fontSize: this.external_containerFontSize,
				fontWeight: this.external_containerFontWeight
			};
		}, "external_containerFont"),
		container_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.container_dbFontFamily,
				fontSize: this.container_dbFontSize,
				fontWeight: this.container_dbFontWeight
			};
		}, "container_dbFont"),
		external_container_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_container_dbFontFamily,
				fontSize: this.external_container_dbFontSize,
				fontWeight: this.external_container_dbFontWeight
			};
		}, "external_container_dbFont"),
		container_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.container_queueFontFamily,
				fontSize: this.container_queueFontSize,
				fontWeight: this.container_queueFontWeight
			};
		}, "container_queueFont"),
		external_container_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_container_queueFontFamily,
				fontSize: this.external_container_queueFontSize,
				fontWeight: this.external_container_queueFontWeight
			};
		}, "external_container_queueFont"),
		componentFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.componentFontFamily,
				fontSize: this.componentFontSize,
				fontWeight: this.componentFontWeight
			};
		}, "componentFont"),
		external_componentFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_componentFontFamily,
				fontSize: this.external_componentFontSize,
				fontWeight: this.external_componentFontWeight
			};
		}, "external_componentFont"),
		component_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.component_dbFontFamily,
				fontSize: this.component_dbFontSize,
				fontWeight: this.component_dbFontWeight
			};
		}, "component_dbFont"),
		external_component_dbFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_component_dbFontFamily,
				fontSize: this.external_component_dbFontSize,
				fontWeight: this.external_component_dbFontWeight
			};
		}, "external_component_dbFont"),
		component_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.component_queueFontFamily,
				fontSize: this.component_queueFontSize,
				fontWeight: this.component_queueFontWeight
			};
		}, "component_queueFont"),
		external_component_queueFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.external_component_queueFontFamily,
				fontSize: this.external_component_queueFontSize,
				fontWeight: this.external_component_queueFontWeight
			};
		}, "external_component_queueFont"),
		boundaryFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.boundaryFontFamily,
				fontSize: this.boundaryFontSize,
				fontWeight: this.boundaryFontWeight
			};
		}, "boundaryFont"),
		messageFont: /* @__PURE__ */ __name(function() {
			return {
				fontFamily: this.messageFontFamily,
				fontSize: this.messageFontSize,
				fontWeight: this.messageFontWeight
			};
		}, "messageFont")
	},
	pie: {
		...config_schema_default.pie,
		useWidth: 984
	},
	xyChart: {
		...config_schema_default.xyChart,
		useWidth: void 0
	},
	requirement: {
		...config_schema_default.requirement,
		useWidth: void 0
	},
	packet: { ...config_schema_default.packet },
	eventmodeling: { ...config_schema_default.eventmodeling },
	treeView: {
		...config_schema_default.treeView,
		useWidth: void 0
	},
	radar: { ...config_schema_default.radar },
	railroad: {
		...config_schema_default.railroad,
		fontSize: void 0,
		fontFamily: void 0,
		terminalFill: void 0,
		terminalStroke: void 0,
		terminalTextColor: void 0,
		nonTerminalFill: void 0,
		nonTerminalStroke: void 0,
		nonTerminalTextColor: void 0,
		lineColor: void 0,
		markerFill: void 0,
		commentFill: void 0,
		commentStroke: void 0,
		commentTextColor: void 0,
		specialFill: void 0,
		specialStroke: void 0,
		ruleNameColor: void 0
	},
	ishikawa: { ...config_schema_default.ishikawa },
	sankey: {
		...config_schema_default.sankey,
		nodeColors: void 0
	},
	treemap: {
		useMaxWidth: !0,
		padding: 10,
		diagramPadding: 8,
		showValues: !0,
		nodeWidth: 100,
		nodeHeight: 40,
		borderWidth: 1,
		valueFontSize: 12,
		labelFontSize: 14,
		valueFormat: ","
	},
	venn: { ...config_schema_default.venn },
	cynefin: { ...config_schema_default.cynefin }
}, keyify = /* @__PURE__ */ __name((u, z = "") => Object.keys(u).reduce((B, V) => Array.isArray(u[V]) ? B : typeof u[V] == "object" && u[V] !== null ? [
	...B,
	z + V,
	...keyify(u[V], "")
] : [...B, z + V], []), "keyify"), configKeys = new Set(keyify(config, "")), defaultConfig_default = config, DICTIONARY_CONFIG_PATTERNS = {
	nodeColors: /^#[\da-f]{3,8}$|^rgb\([\d\s%,.]+\)$|^hsl\([\d\s%,.]+\)$|^[a-z]+$/i,
	filenameIcons: /^[\w-]+(?::[\w-]+)?$/,
	extensionIcons: /^[\w-]+(?::[\w-]+)?$/
}, sanitizeDictionaryConfig = /* @__PURE__ */ __name((u, z) => {
	for (let B of Object.keys(u)) {
		let H = u[B];
		(B.startsWith("__") || B.includes("proto") || B.includes("constr") || typeof H != "string" || !z.test(H)) && (log.debug("sanitize deleting dictionary entry:", B, H), delete u[B]);
	}
}, "sanitizeDictionaryConfig"), sanitizeDirective = /* @__PURE__ */ __name((u) => {
	if (log.debug("sanitizeDirective called with", u), !(typeof u != "object" || !u)) {
		if (Array.isArray(u)) {
			u.forEach((u) => sanitizeDirective(u));
			return;
		}
		for (let z of Object.keys(u)) {
			if (log.debug("Checking key", z), z.startsWith("__") || z.includes("proto") || z.includes("constr") || !configKeys.has(z) || u[z] == null) {
				log.debug("sanitize deleting key: ", z), delete u[z];
				continue;
			}
			if (typeof u[z] == "object") {
				let B = DICTIONARY_CONFIG_PATTERNS[z];
				B ? sanitizeDictionaryConfig(u[z], B) : (log.debug("sanitizing object", z), sanitizeDirective(u[z]));
				continue;
			}
			for (let B of [
				"themeCSS",
				"fontFamily",
				"altFontFamily"
			]) z.includes(B) && (log.debug("sanitizing css option", z), u[z] = sanitizeCss(u[z]));
		}
		if (u.themeVariables) for (let z of Object.keys(u.themeVariables)) {
			let B = u.themeVariables[z];
			B?.match && !B.match(/^[\d "#%(),.;A-Za-z]+$/) && (u.themeVariables[z] = "");
		}
		log.debug("After sanitization", u);
	}
}, "sanitizeDirective"), sanitizeCss = /* @__PURE__ */ __name((u) => {
	let z = 0, B = 0;
	for (let V of u) {
		if (z < B) return "{ /* ERROR: Unbalanced CSS */ }";
		V === "{" ? z++ : V === "}" && B++;
	}
	return z === B ? u : "{ /* ERROR: Unbalanced CSS */ }";
}, "sanitizeCss"), defaultConfig = Object.freeze(defaultConfig_default), evaluate = /* @__PURE__ */ __name((u) => !(u === !1 || [
	"false",
	"null",
	"0"
].includes(String(u).trim().toLowerCase())), "evaluate"), siteConfig = assignWithDepth_default({}, defaultConfig), configFromInitialize, directives = [], currentConfig = assignWithDepth_default({}, defaultConfig), updateCurrentConfig = /* @__PURE__ */ __name((u, z) => {
	let B = assignWithDepth_default({}, u), V = {};
	for (let u of z) sanitize(u), V = assignWithDepth_default(V, u);
	if (B = assignWithDepth_default(B, V), V.theme && V.theme in themes_default) {
		let u = assignWithDepth_default(assignWithDepth_default({}, configFromInitialize).themeVariables || {}, V.themeVariables);
		B.theme && B.theme in themes_default && (B.themeVariables = themes_default[B.theme].getThemeVariables(u));
	}
	return currentConfig = B, checkConfig(currentConfig), currentConfig;
}, "updateCurrentConfig"), setSiteConfig = /* @__PURE__ */ __name((u) => (siteConfig = assignWithDepth_default({}, defaultConfig), siteConfig = assignWithDepth_default(siteConfig, u), u.theme && themes_default[u.theme] && (siteConfig.themeVariables = themes_default[u.theme].getThemeVariables(u.themeVariables)), updateCurrentConfig(siteConfig, directives), siteConfig), "setSiteConfig"), saveConfigFromInitialize = /* @__PURE__ */ __name((u) => {
	configFromInitialize = assignWithDepth_default({}, u);
}, "saveConfigFromInitialize"), updateSiteConfig = /* @__PURE__ */ __name((u) => (siteConfig = assignWithDepth_default(siteConfig, u), updateCurrentConfig(siteConfig, directives), siteConfig), "updateSiteConfig"), getSiteConfig = /* @__PURE__ */ __name(() => assignWithDepth_default({}, siteConfig), "getSiteConfig"), setConfig = /* @__PURE__ */ __name((u) => (updateCurrentConfig(currentConfig, [u]), getConfig()), "setConfig"), getConfig = /* @__PURE__ */ __name(() => assignWithDepth_default({}, currentConfig), "getConfig"), sanitize = /* @__PURE__ */ __name((u) => {
	u && (["secure", ...siteConfig.secure ?? []].forEach((z) => {
		Object.hasOwn(u, z) && (log.debug(`Denied attempt to modify a secure key ${z}`, u[z]), delete u[z]);
	}), Object.keys(u).forEach((z) => {
		z.startsWith("__") && delete u[z];
	}), Object.keys(u).forEach((z) => {
		typeof u[z] == "string" && (u[z].includes("<") || u[z].includes(">") || u[z].includes("url(data:")) && delete u[z], typeof u[z] == "object" && sanitize(u[z]);
	}));
}, "sanitize"), addDirective = /* @__PURE__ */ __name((u) => {
	sanitizeDirective(u), u.fontFamily && !u.themeVariables?.fontFamily && (u.themeVariables = {
		...u.themeVariables,
		fontFamily: u.fontFamily
	}), directives.push(u), updateCurrentConfig(siteConfig, directives);
}, "addDirective"), reset = /* @__PURE__ */ __name((u = siteConfig) => {
	directives = [], updateCurrentConfig(u, directives);
}, "reset"), ConfigWarning = {
	LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
	FLOWCHART_HTML_LABELS_DEPRECATED: "flowchart.htmlLabels is deprecated. Please use global htmlLabels instead."
}, issuedWarnings = {}, issueWarning = /* @__PURE__ */ __name((u) => {
	issuedWarnings[u] || (log.warn(ConfigWarning[u]), issuedWarnings[u] = !0);
}, "issueWarning"), checkConfig = /* @__PURE__ */ __name((u) => {
	u && (u.lazyLoadedDiagrams || u.loadExternalDiagramsAtStartup) && issueWarning("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), getUserDefinedConfig = /* @__PURE__ */ __name(() => {
	let u = {};
	configFromInitialize && (u = assignWithDepth_default(u, configFromInitialize));
	for (let z of directives) u = assignWithDepth_default(u, z);
	return u;
}, "getUserDefinedConfig"), getEffectiveHtmlLabels = /* @__PURE__ */ __name((u) => (u.flowchart?.htmlLabels != null && issueWarning("FLOWCHART_HTML_LABELS_DEPRECATED"), evaluate(u.htmlLabels ?? u.flowchart?.htmlLabels ?? !0)), "getEffectiveHtmlLabels"), frontMatterRegex = /^([^\S\n\r]*)-{3}\s*[\n\r](.*?)[\n\r]\1-{3}\s*[\n\r]+/s, directiveRegex = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, anyCommentRegex = /\s*%%.*\n/gm, UnknownDiagramError = class extends Error {
	static #e = __name(this, "UnknownDiagramError");
	constructor(u) {
		super(u), this.name = "UnknownDiagramError";
	}
}, detectors = {}, detectType = /* @__PURE__ */ __name(function(u, z) {
	u = u.replace(frontMatterRegex, "").replace(directiveRegex, "").replace(anyCommentRegex, "\n");
	for (let [B, { detector: V }] of Object.entries(detectors)) if (V(u, z)) return B;
	throw new UnknownDiagramError(`No diagram type detected matching given configuration for text: ${u}`);
}, "detectType"), registerLazyLoadedDiagrams = /* @__PURE__ */ __name((...u) => {
	for (let { id: z, detector: B, loader: V } of u) addDetector(z, B, V);
}, "registerLazyLoadedDiagrams"), addDetector = /* @__PURE__ */ __name((u, z, B) => {
	detectors[u] && log.warn(`Detector with key ${u} already exists. Overwriting.`), detectors[u] = {
		detector: z,
		loader: B
	}, log.debug(`Detector with key ${u} added${B ? " with loader" : ""}`);
}, "addDetector"), getDiagramLoader = /* @__PURE__ */ __name((u) => detectors[u].loader, "getDiagramLoader"), lineBreakRegex = /<br\s*\/?>/gi, getRows = /* @__PURE__ */ __name((u) => u ? breakToPlaceholder(u).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), setupDompurifyHooksIfNotSetup = /* @__PURE__ */ (() => {
	let u = !1;
	return () => {
		u ||= (setupDompurifyHooks(), !0);
	};
})();
function setupDompurifyHooks() {
	let u = "data-temp-href-target";
	purify.addHook("beforeSanitizeAttributes", (z) => {
		z.tagName === "A" && z.hasAttribute("target") && z.setAttribute(u, z.getAttribute("target") ?? "");
	}), purify.addHook("afterSanitizeAttributes", (z) => {
		z.tagName === "A" && z.hasAttribute(u) && (z.setAttribute("target", z.getAttribute(u) ?? ""), z.removeAttribute(u), z.getAttribute("target") === "_blank" && z.setAttribute("rel", "noopener"));
	});
}
__name(setupDompurifyHooks, "setupDompurifyHooks");
var removeScript = /* @__PURE__ */ __name((u) => (setupDompurifyHooksIfNotSetup(), purify.sanitize(u)), "removeScript"), sanitizeMore = /* @__PURE__ */ __name((u, z) => {
	if (getEffectiveHtmlLabels(z)) {
		let B = z.securityLevel;
		B === "antiscript" || B === "strict" || B === "sandbox" ? u = removeScript(u) : B !== "loose" && (u = breakToPlaceholder(u), u = u.replace(/</g, "&lt;").replace(/>/g, "&gt;"), u = u.replace(/=/g, "&equals;"), u = placeholderToBreak(u));
	}
	return u;
}, "sanitizeMore"), sanitizeText = /* @__PURE__ */ __name((u, z) => u && (u = z.dompurifyConfig ? purify.sanitize(sanitizeMore(u, z), z.dompurifyConfig).toString() : purify.sanitize(sanitizeMore(u, z), { FORBID_TAGS: ["style"] }).toString(), u), "sanitizeText"), sanitizeTextOrArray = /* @__PURE__ */ __name((u, z) => typeof u == "string" ? sanitizeText(u, z) : u.flat().map((u) => sanitizeText(u, z)), "sanitizeTextOrArray"), hasBreaks = /* @__PURE__ */ __name((u) => lineBreakRegex.test(u), "hasBreaks"), splitBreaks = /* @__PURE__ */ __name((u) => u.split(lineBreakRegex), "splitBreaks"), placeholderToBreak = /* @__PURE__ */ __name((u) => u.replace(/#br#/g, "<br/>"), "placeholderToBreak"), breakToPlaceholder = /* @__PURE__ */ __name((u) => u.replace(lineBreakRegex, "#br#"), "breakToPlaceholder"), getUrl = /* @__PURE__ */ __name((u) => {
	let z = "";
	return u && (z = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, z = CSS.escape(z)), z;
}, "getUrl"), getMax = /* @__PURE__ */ __name(function(...u) {
	let z = u.filter((u) => !isNaN(u));
	return Math.max(...z);
}, "getMax"), getMin = /* @__PURE__ */ __name(function(...u) {
	let z = u.filter((u) => !isNaN(u));
	return Math.min(...z);
}, "getMin"), parseGenericTypes = /* @__PURE__ */ __name(function(u) {
	let z = u.split(/(,)/), B = [];
	for (let u = 0; u < z.length; u++) {
		let V = z[u];
		if (V === "," && u > 0 && u + 1 < z.length) {
			let H = z[u - 1], U = z[u + 1];
			shouldCombineSets(H, U) && (V = H + "," + U, u++, B.pop());
		}
		B.push(processSet(V));
	}
	return B.join("");
}, "parseGenericTypes"), countOccurrence = /* @__PURE__ */ __name((u, z) => Math.max(0, u.split(z).length - 1), "countOccurrence"), shouldCombineSets = /* @__PURE__ */ __name((u, z) => {
	let B = countOccurrence(u, "~"), V = countOccurrence(z, "~");
	return B === 1 && V === 1;
}, "shouldCombineSets"), processSet = /* @__PURE__ */ __name((u) => {
	let z = countOccurrence(u, "~"), B = !1;
	if (z <= 1) return u;
	z % 2 != 0 && u.startsWith("~") && (u = u.substring(1), B = !0);
	let V = [...u], H = V.indexOf("~"), U = V.lastIndexOf("~");
	for (; H !== -1 && U !== -1 && H !== U;) V[H] = "<", V[U] = ">", H = V.indexOf("~"), U = V.lastIndexOf("~");
	return B && V.unshift("~"), V.join("");
}, "processSet"), isMathMLSupported = /* @__PURE__ */ __name(() => window.MathMLElement !== void 0, "isMathMLSupported"), katexRegex = /\$\$(.*?)\$\$/g, hasKatex = /* @__PURE__ */ __name((u) => (u.match(katexRegex)?.length ?? 0) > 0, "hasKatex"), calculateMathMLDimensions = /* @__PURE__ */ __name(async (u, z) => {
	let B = document.createElement("div");
	B.innerHTML = await renderKatexSanitized(u, z), B.id = "katex-temp", B.style.visibility = "hidden", B.style.position = "absolute", B.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", B);
	let V = {
		width: B.clientWidth,
		height: B.clientHeight
	};
	return B.remove(), V;
}, "calculateMathMLDimensions"), renderKatexUnsanitized = /* @__PURE__ */ __name(async (u, z) => {
	if (!hasKatex(u)) return u;
	if (!(isMathMLSupported() || z.legacyMathML || z.forceLegacyMathML)) return u.replace(katexRegex, "MathML is unsupported in this environment.");
	{
		let { default: B } = await import("./katex-BqoyesZF.js"), V = z.forceLegacyMathML || !isMathMLSupported() && z.legacyMathML ? "htmlAndMathml" : "mathml";
		return u.split(lineBreakRegex).map((u) => hasKatex(u) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${u}</div>` : `<div>${u}</div>`).join("").replace(katexRegex, (u, z) => B.renderToString(z, {
			throwOnError: !0,
			displayMode: !0,
			output: V
		}).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, ""));
	}
	return u.replace(katexRegex, "Katex is not supported in @mermaid-js/tiny. Please use the full mermaid library.");
}, "renderKatexUnsanitized"), renderKatexSanitized = /* @__PURE__ */ __name(async (u, z) => sanitizeText(await renderKatexUnsanitized(u, z), z), "renderKatexSanitized"), common_default = {
	getRows,
	sanitizeText,
	sanitizeTextOrArray,
	hasBreaks,
	splitBreaks,
	lineBreakRegex,
	removeScript,
	getUrl,
	evaluate,
	getMax,
	getMin
}, d3Attrs = /* @__PURE__ */ __name(function(u, z) {
	for (let B of z) u.attr(B[0], B[1]);
}, "d3Attrs"), calculateSvgSizeAttrs = /* @__PURE__ */ __name(function(u, z, B) {
	let V = /* @__PURE__ */ new Map();
	return B ? (V.set("width", "100%"), V.set("style", `max-width: ${z}px;`)) : (V.set("height", u), V.set("width", z)), V;
}, "calculateSvgSizeAttrs"), configureSvgSize = /* @__PURE__ */ __name(function(u, z, B, V) {
	d3Attrs(u, calculateSvgSizeAttrs(z, B, V));
}, "configureSvgSize"), setupGraphViewbox = /* @__PURE__ */ __name(function(u, z, B, H) {
	let U = z.node().getBBox(), W = U.width, G = U.height;
	log.info(`SVG bounds: ${W}x${G}`, U);
	let K = 0, q = 0;
	log.info(`Graph bounds: ${K}x${q}`, u), K = W + B * 2, q = G + B * 2, log.info(`Calculated bounds: ${K}x${q}`), configureSvgSize(z, q, K, H);
	let J = `${U.x - B} ${U.y - B} ${U.width + 2 * B} ${U.height + 2 * B}`;
	z.attr("viewBox", J);
}, "setupGraphViewbox"), themes = {};
function cssStyleSheetToString(u) {
	return [...u.cssRules].map((u) => u.cssText).join("\n");
}
__name(cssStyleSheetToString, "cssStyleSheetToString");
var getStyles = /* @__PURE__ */ __name((u, z, B, H) => {
	let U = "";
	return u in themes && themes[u] ? U = themes[u]({
		...B,
		svgId: H
	}) : log.warn(`No theme found for ${u}`), `& {
    font-family: ${B.fontFamily};
    font-size: ${B.fontSize};
    fill: ${B.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${B.errorBkgColor};
  }
  & .error-text {
    fill: ${B.errorTextColor};
    stroke: ${B.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: ${B.strokeWidth ?? 1}px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${B.lineColor};
    stroke: ${B.lineColor};
  }
  & .marker.cross {
    stroke: ${B.lineColor};
  }

  & svg {
    font-family: ${B.fontFamily};
    font-size: ${B.fontSize};
  }
   & p {
    margin: 0
   }

  ${U}
  .node .neo-node {
    stroke: ${B.nodeBorder};
  }

  [data-look="neo"].node rect, [data-look="neo"].cluster rect, [data-look="neo"].node polygon {
    stroke: ${B.useGradient ? "url(" + H + "-gradient)" : B.nodeBorder};
    filter: ${B.dropShadow ? B.dropShadow.replace("url(#drop-shadow)", `url(${H}-drop-shadow)`) : "none"};
  }
  [data-look="neo"].swimlane.cluster rect {
    filter: none;
  }


  [data-look="neo"].node path {
    stroke: ${B.useGradient ? "url(" + H + "-gradient)" : B.nodeBorder};
    stroke-width: ${B.strokeWidth ?? 1}px;
  }

  [data-look="neo"].node .outer-path {
    filter: ${B.dropShadow ? B.dropShadow.replace("url(#drop-shadow)", `url(${H}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node .neo-line path {
    stroke: ${B.nodeBorder};
    filter: none;
  }

  [data-look="neo"].node circle{
    stroke: ${B.useGradient ? "url(" + H + "-gradient)" : B.nodeBorder};
    filter: ${B.dropShadow ? B.dropShadow.replace("url(#drop-shadow)", `url(${H}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node circle .state-start{
    fill: #000000;
  }

  [data-look="neo"].icon-shape .icon {
    fill: ${B.useGradient ? "url(" + H + "-gradient)" : B.nodeBorder};
    filter: ${B.dropShadow ? B.dropShadow.replace("url(#drop-shadow)", `url(${H}-drop-shadow)`) : "none"};
  }

    [data-look="neo"].icon-shape .icon-neo path {
    stroke: ${B.useGradient ? "url(" + H + "-gradient)" : B.nodeBorder};
    filter: ${B.dropShadow ? B.dropShadow.replace("url(#drop-shadow)", `url(${H}-drop-shadow)`) : "none"};
  }

  ${z}
`;
}, "getStyles"), addStylesForDiagram = /* @__PURE__ */ __name((u, z) => {
	z !== void 0 && (themes[u] = z);
}, "addStylesForDiagram"), styles_default = getStyles, commonDb_exports = {};
__export(commonDb_exports, {
	clear: () => clear,
	getAccDescription: () => getAccDescription,
	getAccTitle: () => getAccTitle,
	getDiagramTitle: () => getDiagramTitle,
	setAccDescription: () => setAccDescription,
	setAccTitle: () => setAccTitle,
	setDiagramTitle: () => setDiagramTitle
});
var accTitle = "", diagramTitle = "", accDescription = "", sanitizeText2 = /* @__PURE__ */ __name((u) => sanitizeText(u, getConfig()), "sanitizeText"), clear = /* @__PURE__ */ __name(() => {
	accTitle = "", accDescription = "", diagramTitle = "";
}, "clear"), setAccTitle = /* @__PURE__ */ __name((u) => {
	accTitle = sanitizeText2(u).replace(/^\s+/g, "");
}, "setAccTitle"), getAccTitle = /* @__PURE__ */ __name(() => accTitle, "getAccTitle"), setAccDescription = /* @__PURE__ */ __name((u) => {
	accDescription = sanitizeText2(u).replace(/\n\s+/g, "\n");
}, "setAccDescription"), getAccDescription = /* @__PURE__ */ __name(() => accDescription, "getAccDescription"), setDiagramTitle = /* @__PURE__ */ __name((u) => {
	diagramTitle = sanitizeText2(u);
}, "setDiagramTitle"), getDiagramTitle = /* @__PURE__ */ __name(() => diagramTitle, "getDiagramTitle"), log2 = log, setLogLevel2 = setLogLevel, getConfig2 = getConfig, setConfig2 = setConfig, defaultConfig2 = defaultConfig, sanitizeText3 = /* @__PURE__ */ __name((u) => sanitizeText(u, getConfig2()), "sanitizeText"), setupGraphViewbox2 = setupGraphViewbox, getCommonDb = /* @__PURE__ */ __name(() => commonDb_exports, "getCommonDb"), diagrams = {}, registerDiagram = /* @__PURE__ */ __name((u, z, B) => {
	diagrams[u] && log2.warn(`Diagram with id ${u} already registered. Overwriting.`), diagrams[u] = z, B && addDetector(u, B), addStylesForDiagram(u, z.styles), z.injectUtils?.(log2, setLogLevel2, getConfig2, sanitizeText3, setupGraphViewbox2, getCommonDb(), () => {});
}, "registerDiagram"), getDiagram = /* @__PURE__ */ __name((u) => {
	if (u in diagrams) return diagrams[u];
	throw new DiagramNotFoundError(u);
}, "getDiagram"), DiagramNotFoundError = class extends Error {
	static #e = __name(this, "DiagramNotFoundError");
	constructor(u) {
		super(`Diagram ${u} not found.`);
	}
};
export { darken_default as $, hasKatex as A, sanitizeText3 as B, getDiagramLoader as C, getThemeVariables3 as D, getSiteConfig as E, renderKatexSanitized as F, setConfig2 as G, setAccDescription as H, reset as I, setupGraphViewbox as J, setDiagramTitle as K, sanitizeCss as L, parseGenericTypes as M, registerDiagram as N, getUrl as O, registerLazyLoadedDiagrams as P, updateSiteConfig as Q, sanitizeDirective as R, getDiagram as S, getEffectiveHtmlLabels as T, setAccTitle as U, saveConfigFromInitialize as V, setConfig as W, styles_default as X, setupGraphViewbox2 as Y, themes_default as Z, frontMatterRegex as _, clear as a, utils_default as at, getConfig as b, configureSvgSize as c, defaultConfig2 as d, lighten_default as et, defaultConfig_default as f, evaluate as g, directiveRegex as h, calculateMathMLDimensions as i, color_default as it, lineBreakRegex as j, getUserDefinedConfig as k, cssStyleSheetToString as l, detectors as m, addDirective as n, is_dark_default as nt, commonDb_exports as o, detectType as p, setSiteConfig as q, assignWithDepth_default as r, rgba_default as rt, common_default as s, UnknownDiagramError as t, adjust_channel_default as tt, defaultConfig as u, getAccDescription as v, getDiagramTitle as w, getConfig2 as x, getAccTitle as y, sanitizeText as z };
