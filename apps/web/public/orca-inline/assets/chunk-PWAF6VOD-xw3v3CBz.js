import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log } from "./src-DXrlgw8l.js";
import { b as getConfig, z as sanitizeText } from "./chunk-DU6HZSFF-Rlm_otCx.js";
var defaultIconDimensions = Object.freeze({
	left: 0,
	top: 0,
	width: 16,
	height: 16
}), defaultIconTransformations = Object.freeze({
	rotate: 0,
	vFlip: !1,
	hFlip: !1
}), defaultIconProps = Object.freeze({
	...defaultIconDimensions,
	...defaultIconTransformations
}), defaultExtendedIconProps = Object.freeze({
	...defaultIconProps,
	body: "",
	hidden: !1
}), defaultIconSizeCustomisations = Object.freeze({
	width: null,
	height: null
}), defaultIconCustomisations = Object.freeze({
	...defaultIconSizeCustomisations,
	...defaultIconTransformations
}), stringToIcon = (n, S, C, w = "") => {
	let T = n.split(":");
	if (n.slice(0, 1) === "@") {
		if (T.length < 2 || T.length > 3) return null;
		w = T.shift().slice(1);
	}
	if (T.length > 3 || !T.length) return null;
	if (T.length > 1) {
		let n = T.pop(), C = T.pop(), E = {
			provider: T.length > 0 ? T[0] : w,
			prefix: C,
			name: n
		};
		return S && !validateIconName(E) ? null : E;
	}
	let E = T[0], D = E.split("-");
	if (D.length > 1) {
		let n = {
			provider: w,
			prefix: D.shift(),
			name: D.join("-")
		};
		return S && !validateIconName(n) ? null : n;
	}
	if (C && w === "") {
		let n = {
			provider: w,
			prefix: "",
			name: E
		};
		return S && !validateIconName(n, C) ? null : n;
	}
	return null;
}, validateIconName = (n, S) => n ? !!((S && n.prefix === "" || n.prefix) && n.name) : !1;
function mergeIconTransformations(n, S) {
	let C = {};
	!n.hFlip != !S.hFlip && (C.hFlip = !0), !n.vFlip != !S.vFlip && (C.vFlip = !0);
	let w = ((n.rotate || 0) + (S.rotate || 0)) % 4;
	return w && (C.rotate = w), C;
}
function mergeIconData(n, S) {
	let C = mergeIconTransformations(n, S);
	for (let w in defaultExtendedIconProps) w in defaultIconTransformations ? w in n && !(w in C) && (C[w] = defaultIconTransformations[w]) : w in S ? C[w] = S[w] : w in n && (C[w] = n[w]);
	return C;
}
function getIconsTree(n, S) {
	let C = n.icons, w = n.aliases || Object.create(null), T = Object.create(null);
	function E(n) {
		if (C[n]) return T[n] = [];
		if (!(n in T)) {
			T[n] = null;
			let S = w[n] && w[n].parent, C = S && E(S);
			C && (T[n] = [S].concat(C));
		}
		return T[n];
	}
	return (S || Object.keys(C).concat(Object.keys(w))).forEach(E), T;
}
function internalGetIconData(n, S, C) {
	let w = n.icons, T = n.aliases || Object.create(null), E = {};
	function D(n) {
		E = mergeIconData(w[n] || T[n], E);
	}
	return D(S), C.forEach(D), mergeIconData(n, E);
}
function getIconData(n, S) {
	if (n.icons[S]) return internalGetIconData(n, S, []);
	let C = getIconsTree(n, [S])[S];
	return C ? internalGetIconData(n, S, C) : null;
}
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g, unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(n, S, C) {
	if (S === 1) return n;
	if (C ||= 100, typeof n == "number") return Math.ceil(n * S * C) / C;
	if (typeof n != "string") return n;
	let w = n.split(unitsSplit);
	if (w === null || !w.length) return n;
	let T = [], E = w.shift(), D = unitsTest.test(E);
	for (;;) {
		if (D) {
			let n = parseFloat(E);
			isNaN(n) ? T.push(E) : T.push(Math.ceil(n * S * C) / C);
		} else T.push(E);
		if (E = w.shift(), E === void 0) return T.join("");
		D = !D;
	}
}
function splitSVGDefs(n, S = "defs") {
	let C = "", w = n.indexOf("<" + S);
	for (; w >= 0;) {
		let T = n.indexOf(">", w), E = n.indexOf("</" + S);
		if (T === -1 || E === -1) break;
		let D = n.indexOf(">", E);
		if (D === -1) break;
		C += n.slice(T + 1, E).trim(), n = n.slice(0, w).trim() + n.slice(D + 1);
	}
	return {
		defs: C,
		content: n
	};
}
function mergeDefsAndContent(n, S) {
	return n ? "<defs>" + n + "</defs>" + S : S;
}
function wrapSVGContent(n, S, C) {
	let w = splitSVGDefs(n);
	return mergeDefsAndContent(w.defs, S + w.content + C);
}
var isUnsetKeyword = (n) => n === "unset" || n === "undefined" || n === "none";
function iconToSVG(n, S) {
	let C = {
		...defaultIconProps,
		...n
	}, w = {
		...defaultIconCustomisations,
		...S
	}, T = {
		left: C.left,
		top: C.top,
		width: C.width,
		height: C.height
	}, E = C.body;
	[C, w].forEach((n) => {
		let S = [], C = n.hFlip, w = n.vFlip, D = n.rotate;
		C ? w ? D += 2 : (S.push("translate(" + (T.width + T.left).toString() + " " + (0 - T.top).toString() + ")"), S.push("scale(-1 1)"), T.top = T.left = 0) : w && (S.push("translate(" + (0 - T.left).toString() + " " + (T.height + T.top).toString() + ")"), S.push("scale(1 -1)"), T.top = T.left = 0);
		let O;
		switch (D < 0 && (D -= Math.floor(D / 4) * 4), D %= 4, D) {
			case 1:
				O = T.height / 2 + T.top, S.unshift("rotate(90 " + O.toString() + " " + O.toString() + ")");
				break;
			case 2:
				S.unshift("rotate(180 " + (T.width / 2 + T.left).toString() + " " + (T.height / 2 + T.top).toString() + ")");
				break;
			case 3:
				O = T.width / 2 + T.left, S.unshift("rotate(-90 " + O.toString() + " " + O.toString() + ")");
				break;
		}
		D % 2 == 1 && (T.left !== T.top && (O = T.left, T.left = T.top, T.top = O), T.width !== T.height && (O = T.width, T.width = T.height, T.height = O)), S.length && (E = wrapSVGContent(E, "<g transform=\"" + S.join(" ") + "\">", "</g>"));
	});
	let O = w.width, k = w.height, A = T.width, j = T.height, M, N;
	O === null ? (N = k === null ? "1em" : k === "auto" ? j : k, M = calculateSize(N, A / j)) : (M = O === "auto" ? A : O, N = k === null ? calculateSize(M, j / A) : k === "auto" ? j : k);
	let P = {}, F = (n, S) => {
		isUnsetKeyword(S) || (P[n] = S.toString());
	};
	F("width", M), F("height", N);
	let I = [
		T.left,
		T.top,
		A,
		j
	];
	return P.viewBox = I.join(" "), {
		attributes: P,
		viewBox: I,
		body: E
	};
}
var regex = /\sid="(\S+)"/g, counters = /* @__PURE__ */ new Map();
function nextID(n) {
	n = n.replace(/[0-9]+$/, "") || "a";
	let S = counters.get(n) || 0;
	return counters.set(n, S + 1), S ? `${n}${S}` : n;
}
function replaceIDs(n) {
	let S = [], C;
	for (; C = regex.exec(n);) S.push(C[1]);
	if (!S.length) return n;
	let w = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
	return S.forEach((S) => {
		let C = nextID(S), T = S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		n = n.replace(RegExp("([#;\"])(" + T + ")([\")]|\\.[a-z])", "g"), "$1" + C + w + "$3");
	}), n = n.replace(new RegExp(w, "g"), ""), n;
}
function iconToHTML(n, S) {
	let C = n.indexOf("xlink:") === -1 ? "" : " xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
	for (let n in S) C += " " + n + "=\"" + S[n] + "\"";
	return "<svg xmlns=\"http://www.w3.org/2000/svg\"" + C + ">" + n + "</svg>";
}
var unknownIcon = {
	body: "<g><rect width=\"80\" height=\"80\" style=\"fill: #087ebf; stroke-width: 0px;\"/><text transform=\"translate(21.16 64.67)\" style=\"fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;\"><tspan x=\"0\" y=\"0\">?</tspan></text></g>",
	height: 80,
	width: 80
}, iconsStore = /* @__PURE__ */ new Map(), loaderStore = /* @__PURE__ */ new Map(), registerIconPacks = /* @__PURE__ */ __name((n) => {
	for (let C of n) {
		if (!C.name) throw Error("Invalid icon loader. Must have a \"name\" property with non-empty string value.");
		if (log.debug("Registering icon pack:", C.name), "loader" in C) loaderStore.set(C.name, C.loader);
		else if ("icons" in C) iconsStore.set(C.name, C.icons);
		else throw log.error("Invalid icon loader:", C), Error("Invalid icon loader. Must have either \"icons\" or \"loader\" property.");
	}
}, "registerIconPacks"), getRegisteredIconData = /* @__PURE__ */ __name(async (n, C) => {
	let w = stringToIcon(n, !0, C !== void 0);
	if (!w) throw Error(`Invalid icon name: ${n}`);
	let T = w.prefix || C;
	if (!T) throw Error(`Icon name must contain a prefix: ${n}`);
	let E = iconsStore.get(T);
	if (!E) {
		let n = loaderStore.get(T);
		if (!n) throw Error(`Icon set not found: ${w.prefix}`);
		try {
			E = {
				...await n(),
				prefix: T
			}, iconsStore.set(T, E);
		} catch (n) {
			throw log.error(n), Error(`Failed to load icon set: ${w.prefix}`);
		}
	}
	let D = getIconData(E, w.name);
	if (!D) throw Error(`Icon not found: ${n}`);
	return D;
}, "getRegisteredIconData"), isIconAvailable = /* @__PURE__ */ __name(async (n) => {
	try {
		return await getRegisteredIconData(n), !0;
	} catch {
		return !1;
	}
}, "isIconAvailable"), getIconSVG = /* @__PURE__ */ __name(async (n, T, E) => {
	let D;
	try {
		D = await getRegisteredIconData(n, T?.fallbackPrefix);
	} catch (n) {
		log.error(n), D = unknownIcon;
	}
	let O = iconToSVG(D, T);
	return sanitizeText(iconToHTML(replaceIDs(O.body), {
		...O.attributes,
		...E
	}), getConfig());
}, "getIconSVG");
export { unknownIcon as i, isIconAvailable as n, registerIconPacks as r, getIconSVG as t };
