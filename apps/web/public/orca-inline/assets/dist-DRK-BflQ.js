import { t as __commonJSMin } from "./chunk-BKjlJnyO.js";
const abs = Math.abs, atan2 = Math.atan2, cos = Math.cos, max = Math.max, min = Math.min, sin = Math.sin, sqrt = Math.sqrt, epsilon = 1e-12, pi = Math.PI, halfPi = pi / 2, tau = 2 * pi;
function acos(e) {
	return e > 1 ? 0 : e < -1 ? pi : Math.acos(e);
}
function asin(e) {
	return e >= 1 ? halfPi : e <= -1 ? -halfPi : Math.asin(e);
}
var require_constants = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.BLANK_URL = e.relativeFirstCharacters = e.whitespaceEscapeCharsRegex = e.urlSchemeRegex = e.ctrlCharactersRegex = e.htmlCtrlEntityRegex = e.htmlEntitiesRegex = e.invalidProtocolRegex = void 0, e.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, e.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, e.htmlCtrlEntityRegex = /&(newline|tab);/gi, e.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, e.urlSchemeRegex = /^.+(:|&colon;)/gim, e.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, e.relativeFirstCharacters = [".", "/"], e.BLANK_URL = "about:blank";
})), require_dist = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.sanitizeUrl = c;
	var r = require_constants();
	function i(e) {
		return r.relativeFirstCharacters.indexOf(e[0]) > -1;
	}
	function a(e) {
		return e.replace(r.ctrlCharactersRegex, "").replace(r.htmlEntitiesRegex, function(e, r) {
			return String.fromCharCode(r);
		});
	}
	function o(e) {
		return URL.canParse(e);
	}
	function s(e) {
		try {
			return decodeURIComponent(e);
		} catch {
			return e;
		}
	}
	function c(e) {
		if (!e) return r.BLANK_URL;
		var c, l = s(e.trim());
		do
			l = a(l).replace(r.htmlCtrlEntityRegex, "").replace(r.ctrlCharactersRegex, "").replace(r.whitespaceEscapeCharsRegex, "").trim(), l = s(l), c = l.match(r.ctrlCharactersRegex) || l.match(r.htmlEntitiesRegex) || l.match(r.htmlCtrlEntityRegex) || l.match(r.whitespaceEscapeCharsRegex);
		while (c && c.length > 0);
		var u = l;
		if (!u) return r.BLANK_URL;
		if (i(u)) return u;
		var d = u.trimStart(), f = d.match(r.urlSchemeRegex);
		if (!f) return u;
		var p = f[0].toLowerCase().trim();
		if (r.invalidProtocolRegex.test(p)) return r.BLANK_URL;
		var m = d.replace(/\\/g, "/");
		if (p === "mailto:" || p.includes("://")) return m;
		if (p === "http:" || p === "https:") {
			if (!o(m)) return r.BLANK_URL;
			var h = new URL(m);
			return h.protocol = h.protocol.toLowerCase(), h.hostname = h.hostname.toLowerCase(), h.toString();
		}
		return m;
	}
}));
export { atan2 as a, halfPi as c, pi as d, sin as f, asin as i, max as l, tau as m, abs as n, cos as o, sqrt as p, acos as r, epsilon as s, require_dist as t, min as u };
