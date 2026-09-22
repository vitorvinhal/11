function formatDecimal_default(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function formatDecimalParts(e, r) {
	if (!isFinite(e) || e === 0) return null;
	var i = (e = r ? e.toExponential(r - 1) : e.toExponential()).indexOf("e"), a = e.slice(0, i);
	return [a.length > 1 ? a[0] + a.slice(2) : a, +e.slice(i + 1)];
}
function exponent_default(e) {
	return e = formatDecimalParts(Math.abs(e)), e ? e[1] : NaN;
}
function formatGroup_default(e, r) {
	return function(i, a) {
		for (var o = i.length, s = [], c = 0, l = e[0], u = 0; o > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), s.push(i.substring(o -= l, o + l)), !((u += l + 1) > a));) l = e[c = (c + 1) % e.length];
		return s.reverse().join(r);
	};
}
function formatNumerals_default(e) {
	return function(r) {
		return r.replace(/[0-9]/g, function(r) {
			return e[+r];
		});
	};
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(e) {
	if (!(r = re.exec(e))) throw Error("invalid format: " + e);
	var r;
	return new FormatSpecifier({
		fill: r[1],
		align: r[2],
		sign: r[3],
		symbol: r[4],
		zero: r[5],
		width: r[6],
		comma: r[7],
		precision: r[8] && r[8].slice(1),
		trim: r[9],
		type: r[10]
	});
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
FormatSpecifier.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim_default(e) {
	out: for (var r = e.length, i = 1, a = -1, o; i < r; ++i) switch (e[i]) {
		case ".":
			a = o = i;
			break;
		case "0":
			a === 0 && (a = i), o = i;
			break;
		default:
			if (!+e[i]) break out;
			a > 0 && (a = 0);
			break;
	}
	return a > 0 ? e.slice(0, a) + e.slice(o + 1) : e;
}
var prefixExponent;
function formatPrefixAuto_default(e, i) {
	var a = formatDecimalParts(e, i);
	if (!a) return prefixExponent = void 0, e.toPrecision(i);
	var o = a[0], s = a[1], c = s - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, l = o.length;
	return c === l ? o : c > l ? o + Array(c - l + 1).join("0") : c > 0 ? o.slice(0, c) + "." + o.slice(c) : "0." + Array(1 - c).join("0") + formatDecimalParts(e, Math.max(0, i + c - 1))[0];
}
function formatRounded_default(e, i) {
	var a = formatDecimalParts(e, i);
	if (!a) return e + "";
	var o = a[0], s = a[1];
	return s < 0 ? "0." + Array(-s).join("0") + o : o.length > s + 1 ? o.slice(0, s + 1) + "." + o.slice(s + 1) : o + Array(s - o.length + 2).join("0");
}
var formatTypes_default = {
	"%": (e, r) => (e * 100).toFixed(r),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: formatDecimal_default,
	e: (e, r) => e.toExponential(r),
	f: (e, r) => e.toFixed(r),
	g: (e, r) => e.toPrecision(r),
	o: (e) => Math.round(e).toString(8),
	p: (e, r) => formatRounded_default(e * 100, r),
	r: formatRounded_default,
	s: formatPrefixAuto_default,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
function identity_default(e) {
	return e;
}
var map = Array.prototype.map, prefixes = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function locale_default(e) {
	var r = e.grouping === void 0 || e.thousands === void 0 ? identity_default : formatGroup_default(map.call(e.grouping, Number), e.thousands + ""), s = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", d = e.decimal === void 0 ? "." : e.decimal + "", f = e.numerals === void 0 ? identity_default : formatNumerals_default(map.call(e.numerals, String)), g = e.percent === void 0 ? "%" : e.percent + "", _ = e.minus === void 0 ? "−" : e.minus + "", v = e.nan === void 0 ? "NaN" : e.nan + "";
	function y(e, i) {
		e = formatSpecifier(e);
		var a = e.fill, o = e.align, m = e.sign, h = e.symbol, y = e.zero, b = e.width, x = e.comma, S = e.precision, C = e.trim, w = e.type;
		w === "n" ? (x = !0, w = "g") : formatTypes_default[w] || (S === void 0 && (S = 12), C = !0, w = "g"), (y || a === "0" && o === "=") && (y = !0, a = "0", o = "=");
		var T = (i && i.prefix !== void 0 ? i.prefix : "") + (h === "$" ? s : h === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : ""), E = (h === "$" ? l : /[%p]/.test(w) ? g : "") + (i && i.suffix !== void 0 ? i.suffix : ""), D = formatTypes_default[w], O = /[defgprs%]/.test(w);
		S = S === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
		function k(e) {
			var i = T, s = E, c, l, p;
			if (w === "c") s = D(e) + s, e = "";
			else {
				e = +e;
				var h = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? v : D(Math.abs(e), S), C && (e = formatTrim_default(e)), h && +e == 0 && m !== "+" && (h = !1), i = (h ? m === "(" ? m : _ : m === "-" || m === "(" ? "" : m) + i, s = (w === "s" && !isNaN(e) && prefixExponent !== void 0 ? prefixes[8 + prefixExponent / 3] : "") + s + (h && m === "(" ? ")" : ""), O) {
					for (c = -1, l = e.length; ++c < l;) if (p = e.charCodeAt(c), 48 > p || p > 57) {
						s = (p === 46 ? d + e.slice(c + 1) : e.slice(c)) + s, e = e.slice(0, c);
						break;
					}
				}
			}
			x && !y && (e = r(e, Infinity));
			var g = i.length + e.length + s.length, k = g < b ? Array(b - g + 1).join(a) : "";
			switch (x && y && (e = r(k + e, k.length ? b - s.length : Infinity), k = ""), o) {
				case "<":
					e = i + e + s + k;
					break;
				case "=":
					e = i + k + e + s;
					break;
				case "^":
					e = k.slice(0, g = k.length >> 1) + i + e + s + k.slice(g);
					break;
				default:
					e = k + i + e + s;
					break;
			}
			return f(e);
		}
		return k.toString = function() {
			return e + "";
		}, k;
	}
	function b(e, r) {
		var a = Math.max(-8, Math.min(8, Math.floor(exponent_default(r) / 3))) * 3, o = 10 ** -a, s = y((e = formatSpecifier(e), e.type = "f", e), { suffix: prefixes[8 + a / 3] });
		return function(e) {
			return s(o * e);
		};
	}
	return {
		format: y,
		formatPrefix: b
	};
}
var locale, format, formatPrefix;
defaultLocale({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function defaultLocale(e) {
	return locale = locale_default(e), format = locale.format, formatPrefix = locale.formatPrefix, locale;
}
export { exponent_default as i, formatPrefix as n, formatSpecifier as r, format as t };
