import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { h as setLogLevel, m as log, p as select_default } from "./src-DXrlgw8l.js";
import { C as getDiagramLoader, E as getSiteConfig, I as reset, L as sanitizeCss, N as registerDiagram, P as registerLazyLoadedDiagrams, Q as updateSiteConfig, S as getDiagram, T as getEffectiveHtmlLabels, V as saveConfigFromInitialize, W as setConfig, X as styles_default, Z as themes_default, _ as frontMatterRegex, b as getConfig, c as configureSvgSize, g as evaluate, l as cssStyleSheetToString, m as detectors, n as addDirective, p as detectType, q as setSiteConfig, r as assignWithDepth_default, t as UnknownDiagramError, u as defaultConfig } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { t as purify } from "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { K as isArrayLike, _ as utils_default, a as cleanAndMerge, b as isArguments, g as removeDirectives, o as decodeEntities, p as isDetailedError, s as encodeEntities, x as isBuffer, y as isTypedArray } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
import { r as registerIconPacks } from "./chunk-PWAF6VOD-xw3v3CBz.js";
import { i as dedent } from "./chunk-GMAD6QVW-CrbOfuRD.js";
import "./chunk-P2QGCYS3-ERnFXKBq.js";
import "./chunk-4HAMMTFA-C6ufBZSb.js";
import "./chunk-GVQU2GXP-Be8dkEne.js";
import "./chunk-OSK3NFVY-C6YyZAmC.js";
import "./graphlib-CFSw-S2d.js";
import "./chunk-L3NEJ4N5-B-D1dHln.js";
import { n as registerLayoutLoaders } from "./chunk-TLUHSLCS-B5wVOksj.js";
import { i as createCommonLayoutRenderer, l as paintLayoutData, n as clearLayoutRenderState, o as defaultMeasureLayout } from "./chunk-2E4U76K2-CWyxffW0.js";
import { n as load, t as JSON_SCHEMA } from "./chunk-LNGE3PJU-DESYm2bu.js";
function isPrototype(e) {
	let S = e?.constructor;
	return e === (typeof S == "function" ? S.prototype : Object.prototype);
}
function isEmpty(e) {
	if (e == null) return !0;
	if (isArrayLike(e)) return typeof e.splice != "function" && typeof e != "string" && !isBuffer(e) && !isTypedArray(e) && !isArguments(e) ? !1 : e.length === 0;
	if (typeof e == "object") {
		if (e instanceof Map || e instanceof Set) return e.size === 0;
		let S = Object.keys(e);
		return isPrototype(e) ? S.filter((e) => e !== "constructor").length === 0 : S.length === 0;
	}
	return !0;
}
var COMMENT = "comm", RULESET = "rule", DECLARATION = "decl", IMPORT = "@import", NAMESPACE = "@namespace", KEYFRAMES = "@keyframes", LAYER = "@layer", abs = Math.abs, from = String.fromCharCode;
function trim(e) {
	return e.trim();
}
function replace(e, S, C) {
	return e.replace(S, C);
}
function charat(e, S) {
	return e.charCodeAt(S) | 0;
}
function substr(e, S, C) {
	return e.slice(S, C);
}
function strlen(e) {
	return e.length;
}
function sizeof(e) {
	return e.length;
}
function append(e, S) {
	return S.push(e), e;
}
var line = 1, column = 1, length = 0, position = 0, character = 0, characters = "";
function node(e, S, C, w, T, E, D, O) {
	return {
		value: e,
		root: S,
		parent: C,
		type: w,
		props: T,
		children: E,
		line,
		column,
		length: D,
		return: "",
		siblings: O
	};
}
function char() {
	return character;
}
function prev() {
	return character = position > 0 ? charat(characters, --position) : 0, column--, character === 10 && (column = 1, line--), character;
}
function next() {
	return character = position < length ? charat(characters, position++) : 0, column++, character === 10 && (column = 1, line++), character;
}
function peek() {
	return charat(characters, position);
}
function caret() {
	return position;
}
function slice(e, S) {
	return substr(characters, e, S);
}
function token(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function alloc(e) {
	return line = column = 1, length = strlen(characters = e), position = 0, [];
}
function dealloc(e) {
	return characters = "", e;
}
function delimit(e) {
	return trim(slice(position - 1, delimiter(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function whitespace(e) {
	for (; (character = peek()) && character < 33;) next();
	return token(e) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(e, S) {
	for (; --S && next() && !(character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97););
	return slice(e, caret() + (S < 6 && peek() == 32 && next() == 32));
}
function delimiter(e) {
	for (; next();) switch (character) {
		case e: return position;
		case 34:
		case 39:
			e !== 34 && e !== 39 && delimiter(character);
			break;
		case 40:
			e === 41 && delimiter(e);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
function commenter(e, S) {
	for (; next() && e + character !== 57 && !(e + character === 84 && peek() === 47););
	return "/*" + slice(S, position - 1) + "*" + from(e === 47 ? e : next());
}
function identifier(e) {
	for (; !token(peek());) next();
	return slice(e, position);
}
function compile(e) {
	return dealloc(parse$1("", null, null, null, [""], e = alloc(e), 0, [0], e));
}
function parse$1(e, S, C, w, T, E, D, O, k) {
	for (var A = 0, j = 0, M = D, N = 0, P = 0, F = 0, I = 1, L = 1, R = 1, z = 0, B = 0, V = "", H = T, U = E, W = w, G = V; L;) switch (F = B, B = next()) {
		case 40:
			F != 108 && charat(G, M - 1) == 58 ? (z++, G += "(") : G += delimit(B);
			break;
		case 41:
			z--, G += ")";
			break;
		case 34:
		case 39:
		case 91:
			G += delimit(B);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			if (z > 0) {
				G += from(B);
				break;
			}
			G += whitespace(F);
			break;
		case 92:
			G += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), S, C, k), k), (token(F || 1) == 5 || token(peek() || 1) == 5) && strlen(G) && substr(G, -1, void 0) !== " " && (G += " ");
					break;
				default: G += "/";
			}
			break;
		case 123 * I: O[A++] = strlen(G) * R;
		case 125 * I:
		case 59:
		case 0:
			if (z > 0 && B) {
				G += from(B);
				break;
			}
			switch (B) {
				case 0:
				case 125: L = 0;
				case 59 + j:
					R == -1 && (G = replace(G, /\f/g, "")), P > 0 && (strlen(G) - M || I === 0) && append(P > 32 ? declaration(G + ";", w, C, M - 1, k) : declaration(replace(G, " ", "") + ";", w, C, M - 2, k), k);
					break;
				case 59: G += ";";
				default: if (append(W = ruleset(G, S, C, A, j, T, O, V, H = [], U = [], M, E), E), B === 123) if (j === 0) parse$1(G, S, W, W, H, E, M, O, U);
				else {
					switch (N) {
						case 99: if (charat(G, 3) === 110) break;
						case 108: if (charat(G, 2) === 97) break;
						default: j = 0;
						case 100:
						case 109:
						case 115:
					}
					j ? parse$1(e, W, W, w && append(ruleset(e, W, W, 0, 0, T, O, V, T, H = [], M, U), U), T, U, M, O, w ? H : U) : parse$1(G, W, W, W, [""], U, 0, O, U);
				}
			}
			A = j = P = 0, I = R = 1, V = G = "", M = D;
			break;
		case 58: M = 1 + strlen(G), P = F;
		default:
			if (I < 1) {
				if (B == 123) --I;
				else if (B == 125 && I++ == 0 && prev() == 125) continue;
			}
			switch (G += from(B), B * I) {
				case 38:
					R = j > 0 ? 1 : (G += "\f", -1);
					break;
				case 44:
					if (z > 0) break;
					O[A++] = (strlen(G) - 1) * R, R = 1;
					break;
				case 64:
					peek() === 45 && (G += delimit(next())), N = peek(), j = M = strlen(V = G += identifier(caret())), B++;
					break;
				case 45: F === 45 && strlen(G) == 2 && (I = 0);
			}
	}
	return E;
}
function ruleset(e, S, C, w, T, E, D, O, k, A, j, M) {
	for (var N = T - 1, P = T === 0 ? E : [""], F = sizeof(P), I = 0, L = 0, R = 0; I < w; ++I) for (var z = 0, B = substr(e, N + 1, N = abs(L = D[I])), V = e; z < F; ++z) (V = trim(L > 0 ? P[z] + " " + B : replace(B, /&\f/g, P[z]))) && (k[R++] = V);
	return node(e, S, C, T === 0 ? RULESET : O, k, A, j, M);
}
function comment(e, S, C, w) {
	return node(e, S, C, COMMENT, from(char()), substr(e, 2, -2), 0, w);
}
function declaration(e, S, C, w, T) {
	return node(e, S, C, DECLARATION, substr(e, 0, w), substr(e, w + 1, -1), w, T);
}
function serialize(e, S) {
	for (var C = "", w = 0; w < e.length; w++) C += S(e[w], w, e, S) || "";
	return C;
}
function stringify(e, S, C, w) {
	switch (e.type) {
		case LAYER: if (e.children.length) break;
		case IMPORT:
		case NAMESPACE:
		case DECLARATION: return e.return = e.return || e.value;
		case COMMENT: return "";
		case KEYFRAMES: return e.return = e.value + "{" + serialize(e.children, w) + "}";
		case RULESET: if (!strlen(e.value = e.props.join(","))) return "";
	}
	return strlen(C = serialize(e.children, w)) ? e.return = e.value + "{" + C + "}" : "";
}
function middleware(e) {
	var S = sizeof(e);
	return function(C, w, T, E) {
		for (var D = "", O = 0; O < S; O++) D += e[O](C, w, T, E) || "";
		return D;
	};
}
var id = "c4", c4Detector_default = {
	id,
	detector: /* @__PURE__ */ __name((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./c4Diagram-7LVT6UL2-ZZ5E2Fig.js");
		return {
			id,
			diagram: e
		};
	}, "loader")
}, id2 = "flowchart", flowDetector_default = {
	id: id2,
	detector: /* @__PURE__ */ __name((e, S) => S?.flowchart?.defaultRenderer === "dagre-wrapper" || S?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./flowDiagram-HODETNUW-DTYdyKrM.js");
		return {
			id: id2,
			diagram: e
		};
	}, "loader")
}, id3 = "flowchart-v2", flowDetector_v2_default = {
	id: id3,
	detector: /* @__PURE__ */ __name((e, S) => S?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (S?.flowchart?.defaultRenderer === "elk" && (S.layout = "elk"), /^\s*graph/.test(e) && S?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./flowDiagram-HODETNUW-DTYdyKrM.js");
		return {
			id: id3,
			diagram: e
		};
	}, "loader")
}, id4 = "swimlane", detector_default = {
	id: id4,
	detector: /* @__PURE__ */ __name((e) => /^\s*swimlane-beta\b/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./swimlanesDiagram-VR7AAH4N-DN0eAE2y.js");
		return {
			id: id4,
			diagram: e
		};
	}, "loader")
}, id5 = "er", erDetector_default = {
	id: id5,
	detector: /* @__PURE__ */ __name((e) => /^\s*erDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./erDiagram-RLTQ6QDP-CjtvhkJ0.js");
		return {
			id: id5,
			diagram: e
		};
	}, "loader")
}, id6 = "gitGraph", gitGraphDetector_default = {
	id: id6,
	detector: /* @__PURE__ */ __name((e) => /^\s*gitGraph/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./gitGraphDiagram-WWUBYQGX-fYhO1SEm.js");
		return {
			id: id6,
			diagram: e
		};
	}, "loader")
}, id7 = "gantt", ganttDetector_default = {
	id: id7,
	detector: /* @__PURE__ */ __name((e) => /^\s*gantt/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./ganttDiagram-EL5Y4UJY-M4SvAJ9Z.js");
		return {
			id: id7,
			diagram: e
		};
	}, "loader")
}, id8 = "info", info = {
	id: id8,
	detector: /* @__PURE__ */ __name((e) => /^\s*info/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./infoDiagram-27XIBGKW-ClKT_qG6.js");
		return {
			id: id8,
			diagram: e
		};
	}, "loader")
}, id9 = "pie", pie = {
	id: id9,
	detector: /* @__PURE__ */ __name((e) => /^\s*pie/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./pieDiagram-E7YTZNPT-DxutgHkg.js");
		return {
			id: id9,
			diagram: e
		};
	}, "loader")
}, id10 = "quadrantChart", quadrantDetector_default = {
	id: id10,
	detector: /* @__PURE__ */ __name((e) => /^\s*quadrantChart/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./quadrantDiagram-AXDQQJYC-pQXwc1E9.js");
		return {
			id: id10,
			diagram: e
		};
	}, "loader")
}, id11 = "xychart", xychartDetector_default = {
	id: id11,
	detector: /* @__PURE__ */ __name((e) => /^\s*xychart(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./xychartDiagram-S5SC5T6Z-CZbxq_fl.js");
		return {
			id: id11,
			diagram: e
		};
	}, "loader")
}, id12 = "requirement", requirementDetector_default = {
	id: id12,
	detector: /* @__PURE__ */ __name((e) => /^\s*requirement(Diagram)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./requirementDiagram-BXWQKSXE-B39BwqiH.js");
		return {
			id: id12,
			diagram: e
		};
	}, "loader")
}, id13 = "sequence", sequenceDetector_default = {
	id: id13,
	detector: /* @__PURE__ */ __name((e) => /^\s*sequenceDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./sequenceDiagram-WJ2MYXX4-B4OJ1LVG.js");
		return {
			id: id13,
			diagram: e
		};
	}, "loader")
}, id14 = "class", classDetector_default = {
	id: id14,
	detector: /* @__PURE__ */ __name((e, S) => S?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./classDiagram-ZZMXUADV-Cm7O7gkc.js");
		return {
			id: id14,
			diagram: e
		};
	}, "loader")
}, id15 = "classDiagram", classDetector_V2_default = {
	id: id15,
	detector: /* @__PURE__ */ __name((e, S) => /^\s*classDiagram/.test(e) && S?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./classDiagram-v2-VYDZK3BY-BhiUU0wH.js");
		return {
			id: id15,
			diagram: e
		};
	}, "loader")
}, id16 = "state", stateDetector_default = {
	id: id16,
	detector: /* @__PURE__ */ __name((e, S) => S?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./stateDiagram-D77RDMKH-DforxMXZ.js");
		return {
			id: id16,
			diagram: e
		};
	}, "loader")
}, id17 = "stateDiagram", stateDetector_V2_default = {
	id: id17,
	detector: /* @__PURE__ */ __name((e, S) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && S?.state?.defaultRenderer === "dagre-wrapper"), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./stateDiagram-v2-MP3YSRHH-Dl_C5iVT.js");
		return {
			id: id17,
			diagram: e
		};
	}, "loader")
}, id18 = "journey", journeyDetector_default = {
	id: id18,
	detector: /* @__PURE__ */ __name((e) => /^\s*journey/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./journeyDiagram-3NMN7TZE-C9HcPbgA.js");
		return {
			id: id18,
			diagram: e
		};
	}, "loader")
}, renderer = { draw: /* @__PURE__ */ __name((e, S, w) => {
	log.debug("rendering svg for syntax error\n");
	let T = selectSvgElement(S), E = T.append("g");
	T.attr("viewBox", "0 0 2412 512"), configureSvgSize(T, 100, 512, !0), E.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), E.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), E.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), E.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), E.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), E.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), E.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), E.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${w}`);
}, "draw") }, errorRenderer_default = renderer, errorDiagram_default = {
	db: {},
	renderer,
	parser: { parse: /* @__PURE__ */ __name(() => {}, "parse") }
}, id19 = "flowchart-elk", detector_default2 = {
	id: id19,
	detector: /* @__PURE__ */ __name((e, S = {}) => /^\s*flowchart-elk/.test(e) || /^\s*(flowchart|graph)/.test(e) && S?.flowchart?.defaultRenderer === "elk" ? (S.layout = "elk", !0) : !1, "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./flowDiagram-HODETNUW-DTYdyKrM.js");
		return {
			id: id19,
			diagram: e
		};
	}, "loader")
}, id20 = "timeline", detector_default3 = {
	id: id20,
	detector: /* @__PURE__ */ __name((e) => /^\s*timeline/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./timeline-definition-24CTP7MA-DBoDP3jV.js");
		return {
			id: id20,
			diagram: e
		};
	}, "loader")
}, id21 = "mindmap", detector_default4 = {
	id: id21,
	detector: /* @__PURE__ */ __name((e) => /^\s*mindmap/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./mindmap-definition-YA3MSWOX-C_yujT6R.js");
		return {
			id: id21,
			diagram: e
		};
	}, "loader")
}, id22 = "kanban", detector_default5 = {
	id: id22,
	detector: /* @__PURE__ */ __name((e) => /^\s*kanban/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./kanban-definition-UXKFOSKX-CV82T0kz.js");
		return {
			id: id22,
			diagram: e
		};
	}, "loader")
}, id23 = "sankey", sankeyDetector_default = {
	id: id23,
	detector: /* @__PURE__ */ __name((e) => /^\s*sankey(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./sankeyDiagram-P5KCCOFB-C2FFtxPs.js");
		return {
			id: id23,
			diagram: e
		};
	}, "loader")
}, id24 = "packet", packet = {
	id: id24,
	detector: /* @__PURE__ */ __name((e) => /^\s*packet(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./diagram-Z3DM3KII-KkWt_v_O.js");
		return {
			id: id24,
			diagram: e
		};
	}, "loader")
}, id25 = "radar", radar = {
	id: id25,
	detector: /* @__PURE__ */ __name((e) => /^\s*radar-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./diagram-UQ7AKVKN-BzJich4w.js");
		return {
			id: id25,
			diagram: e
		};
	}, "loader")
}, id26 = "block", blockDetector_default = {
	id: id26,
	detector: /* @__PURE__ */ __name((e) => /^\s*block(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./blockDiagram-I7D4REHJ-DYY30dms.js");
		return {
			id: id26,
			diagram: e
		};
	}, "loader")
}, id27 = "treeView", detector_default6 = {
	id: id27,
	detector: /* @__PURE__ */ __name((e) => /^\s*treeView-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./diagram-S7CK7UJ4-BAYr-5vx.js");
		return {
			id: id27,
			diagram: e
		};
	}, "loader")
}, id28 = "architecture", architectureDetector_default = {
	id: id28,
	detector: /* @__PURE__ */ __name((e) => /^\s*architecture/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./architectureDiagram-5GKGNRK7-BFGf1MSo.js");
		return {
			id: id28,
			diagram: e
		};
	}, "loader")
}, id29 = "eventmodeling", detector_default7 = {
	id: id29,
	detector: /* @__PURE__ */ __name((e) => /^\s*eventmodeling/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./diagram-VSXAHHWV-BQkRoNYx.js");
		return {
			id: id29,
			diagram: e
		};
	}, "loader")
}, id30 = "ishikawa", ishikawa = {
	id: id30,
	detector: /* @__PURE__ */ __name((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./ishikawaDiagram-5VMMS53U-CR9RMhhP.js");
		return {
			id: id30,
			diagram: e
		};
	}, "loader")
}, id31 = "venn", vennDetector_default = {
	id: id31,
	detector: /* @__PURE__ */ __name((e) => /^\s*venn-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./vennDiagram-4TSXK5OY-EQpvi72O.js");
		return {
			id: id31,
			diagram: e
		};
	}, "loader")
}, id32 = "treemap", treemap = {
	id: id32,
	detector: /* @__PURE__ */ __name((e) => /^\s*treemap/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./diagram-VX7I27RA-jePJ6CDe.js");
		return {
			id: id32,
			diagram: e
		};
	}, "loader")
}, id33 = "wardley", wardleyDetector_default = {
	id: id33,
	detector: /* @__PURE__ */ __name((e) => /^\s*wardley-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./wardleyDiagram-VM6X3IG4-nZJhGE8C.js");
		return {
			id: id33,
			diagram: e
		};
	}, "loader")
}, id34 = "cynefin", cynefin = {
	id: id34,
	detector: /* @__PURE__ */ __name((e) => /^\s*cynefin-beta(?:[\s:]|$)/.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./cynefinDiagram-5FMLGOSQ-CzuEw9A0.js");
		return {
			id: id34,
			diagram: e
		};
	}, "loader")
}, id35 = "railroad", railroad = {
	id: id35,
	detector: /* @__PURE__ */ __name((e) => /^\s*railroad-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./railroadDiagram-O6MQD6OU-BfUzZdDQ.js");
		return {
			id: id35,
			diagram: e
		};
	}, "loader")
}, id36 = "railroadEbnf", railroadEbnf = {
	id: id36,
	detector: /* @__PURE__ */ __name((e) => /^\s*railroad-ebnf-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./ebnfDiagram-PWID7BFC-CvyAGns2.js");
		return {
			id: id36,
			diagram: e
		};
	}, "loader")
}, id37 = "railroadAbnf", railroadAbnf = {
	id: id37,
	detector: /* @__PURE__ */ __name((e) => /^\s*railroad-abnf-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./abnfDiagram-VCTEODGH-BkEZf7kg.js");
		return {
			id: id37,
			diagram: e
		};
	}, "loader")
}, id38 = "railroadPeg", railroadPeg = {
	id: id38,
	detector: /* @__PURE__ */ __name((e) => /^\s*railroad-peg-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ __name(async () => {
		let { diagram: e } = await import("./pegDiagram-XKGWAZYB-CyrKiBXn.js");
		return {
			id: id38,
			diagram: e
		};
	}, "loader")
}, hasLoadedDiagrams = !1, addDiagrams = /* @__PURE__ */ __name(() => {
	hasLoadedDiagrams || (hasLoadedDiagrams = !0, registerDiagram("error", errorDiagram_default, (e) => e.toLowerCase().trim() === "error"), registerDiagram("---", {
		db: { clear: /* @__PURE__ */ __name(() => {}, "clear") },
		styles: {},
		renderer: { draw: /* @__PURE__ */ __name(() => {}, "draw") },
		parser: { parse: /* @__PURE__ */ __name(() => {
			throw Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
		}, "parse") },
		init: /* @__PURE__ */ __name(() => null, "init")
	}, (e) => e.toLowerCase().trimStart().startsWith("---")), registerLazyLoadedDiagrams(detector_default2, detector_default4, architectureDetector_default), registerLazyLoadedDiagrams(c4Detector_default, detector_default5, classDetector_V2_default, classDetector_default, erDetector_default, ganttDetector_default, info, pie, requirementDetector_default, sequenceDetector_default, detector_default, flowDetector_v2_default, flowDetector_default, detector_default3, gitGraphDetector_default, stateDetector_V2_default, stateDetector_default, journeyDetector_default, quadrantDetector_default, sankeyDetector_default, packet, xychartDetector_default, blockDetector_default, detector_default7, detector_default6, radar, ishikawa, treemap, railroad, railroadEbnf, railroadAbnf, railroadPeg, vennDetector_default, wardleyDetector_default, cynefin));
}, "addDiagrams"), loadRegisteredDiagrams = /* @__PURE__ */ __name(async () => {
	log.debug("Loading registered diagrams");
	let e = (await Promise.allSettled(Object.entries(detectors).map(async ([e, { detector: S, loader: w }]) => {
		if (w) try {
			getDiagram(e);
		} catch {
			try {
				let { diagram: e, id: C } = await w();
				registerDiagram(C, e, S);
			} catch (S) {
				throw log.error(`Failed to load external diagram with key ${e}. Removing from detectors.`), delete detectors[e], S;
			}
		}
	}))).filter((e) => e.status === "rejected");
	if (e.length > 0) {
		log.error(`Failed to load ${e.length} external diagrams`);
		for (let S of e) log.error(S);
		throw Error(`Failed to load ${e.length} external diagrams`);
	}
}, "loadRegisteredDiagrams"), SVG_ROLE = "graphics-document document";
function setA11yDiagramInfo(e, S) {
	e.attr("role", SVG_ROLE), S !== "" && e.attr("aria-roledescription", S);
}
__name(setA11yDiagramInfo, "setA11yDiagramInfo");
function addSVGa11yTitleDescription(e, S, C, w) {
	if (e.insert !== void 0) {
		if (C) {
			let S = `chart-desc-${w}`;
			e.attr("aria-describedby", S), e.insert("desc", ":first-child").attr("id", S).text(C);
		}
		if (S) {
			let C = `chart-title-${w}`;
			e.attr("aria-labelledby", C), e.insert("title", ":first-child").attr("id", C).text(S);
		}
	}
}
__name(addSVGa11yTitleDescription, "addSVGa11yTitleDescription");
var Diagram = class S {
	constructor(e, S, C, w, T) {
		this.type = e, this.text = S, this.db = C, this.parser = w, this.renderer = T;
	}
	static #e = __name(this, "Diagram");
	static async fromText(e, C = {}) {
		let w = getConfig(), E = detectType(e, w);
		e = encodeEntities(e) + "\n";
		try {
			getDiagram(E);
		} catch {
			let e = getDiagramLoader(E);
			if (!e) throw new UnknownDiagramError(`Diagram ${E} not found.`);
			let { id: S, diagram: C } = await e();
			registerDiagram(S, C);
		}
		let { db: D, parser: O, renderer: A, init: j } = getDiagram(E);
		return O.parser && (O.parser.yy = D), D.clear?.(), j?.(w), C.title && D.setDiagramTitle?.(C.title), await O.parse(e), new S(E, e, D, O, A);
	}
	async render(e, S) {
		await this.renderer.draw(this.text, e, S, this);
	}
	getParser() {
		return this.parser;
	}
	getType() {
		return this.type;
	}
}, interactionFunctions = [], attachFunctions = /* @__PURE__ */ __name(() => {
	interactionFunctions.forEach((e) => {
		e();
	}), interactionFunctions = [];
}, "attachFunctions"), cleanupComments = /* @__PURE__ */ __name((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function extractFrontMatter(e) {
	let S = e.match(frontMatterRegex);
	if (!S) return {
		text: e,
		metadata: {}
	};
	let C = S[1], w = load(C ? S[2].split("\n").map((e) => e.startsWith(C) ? e.slice(C.length) : e).join("\n") : S[2], { schema: JSON_SCHEMA }) ?? {};
	w = typeof w == "object" && !Array.isArray(w) ? w : {};
	let T = {};
	return w.displayMode && (T.displayMode = w.displayMode.toString()), w.title && (T.title = w.title.toString()), w.config && (T.config = w.config), {
		text: e.slice(S[0].length),
		metadata: T
	};
}
__name(extractFrontMatter, "extractFrontMatter");
var cleanupText = /* @__PURE__ */ __name((e) => e.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (e, S, C) => "<" + S + C.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText"), processFrontmatter = /* @__PURE__ */ __name((e) => {
	let { text: S, metadata: C } = extractFrontMatter(e), { displayMode: w, title: T, config: E = {} } = C;
	return w && (E.gantt ||= {}, E.gantt.displayMode = w), {
		title: T,
		config: E,
		text: S
	};
}, "processFrontmatter"), processDirectives = /* @__PURE__ */ __name((e) => {
	let S = utils_default.detectInit(e) ?? {}, C = utils_default.detectDirective(e, "wrap");
	return Array.isArray(C) ? S.wrap = C.some(({ type: e }) => e === "wrap") : C?.type === "wrap" && (S.wrap = !0), {
		text: removeDirectives(e),
		directive: S
	};
}, "processDirectives");
function preprocessDiagram(e) {
	let S = processFrontmatter(cleanupText(e)), C = processDirectives(S.text), w = cleanAndMerge(S.config, C.directive);
	return e = cleanupComments(C.text), {
		code: e,
		title: S.title,
		config: w
	};
}
__name(preprocessDiagram, "preprocessDiagram");
function toBase64(e) {
	let S = new TextEncoder().encode(e), C = Array.from(S, (e) => String.fromCodePoint(e)).join("");
	return btoa(C);
}
__name(toBase64, "toBase64");
var MAX_TEXTLENGTH = 5e4, MAX_TEXTLENGTH_EXCEEDED_MSG = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", SECURITY_LVL_SANDBOX = "sandbox", SECURITY_LVL_LOOSE = "loose", XMLNS_SVG_STD = "http://www.w3.org/2000/svg", XMLNS_XLINK_STD = "http://www.w3.org/1999/xlink", XMLNS_XHTML_STD = "http://www.w3.org/1999/xhtml", IFRAME_WIDTH = "100%", IFRAME_HEIGHT = "100%", IFRAME_STYLES = "border:0;margin:0;", IFRAME_BODY_STYLE = "margin:0", IFRAME_SANDBOX_OPTS = "allow-top-navigation-by-user-activation allow-popups", IFRAME_NOT_SUPPORTED_MSG = "The \"iframe\" tag is not supported by your browser.", DOMPURIFY_TAGS = ["foreignobject"], DOMPURIFY_ATTR = ["dominant-baseline"];
function processAndSetConfigs(e) {
	let S = preprocessDiagram(e);
	return reset(), addDirective(S.config ?? {}), S;
}
__name(processAndSetConfigs, "processAndSetConfigs");
async function parse(e, S) {
	addDiagrams();
	try {
		let { code: S, config: C } = processAndSetConfigs(e);
		return {
			diagramType: (await getDiagramFromText(S)).type,
			config: C
		};
	} catch (e) {
		if (S?.suppressErrors) return !1;
		throw e;
	}
}
__name(parse, "parse");
var cssImportantStyles = /* @__PURE__ */ __name((e, S, C = []) => `.${e} ${S} ${sanitizeCss(`{ ${C.join(" !important; ")} !important; }`)}`, "cssImportantStyles"), createCssStyles = /* @__PURE__ */ __name((e, S = /* @__PURE__ */ new Map()) => {
	let C = new CSSStyleSheet();
	if (e.fontFamily !== void 0 && C.insertRule(`:root { --mermaid-font-family: ${e.fontFamily}}`, C.cssRules.length), e.altFontFamily !== void 0 && C.insertRule(`:root { --mermaid-alt-font-family: ${e.altFontFamily}}`, C.cssRules.length), S instanceof Map) {
		let w = getEffectiveHtmlLabels(e) ? ["> *", "span"] : [
			"rect",
			"polygon",
			"ellipse",
			"circle",
			"path"
		];
		S.forEach((e) => {
			isEmpty(e.styles) || w.forEach((S) => {
				C.insertRule(cssImportantStyles(e.id, S, e.styles), C.cssRules.length);
			}), isEmpty(e.textStyles) || C.insertRule(cssImportantStyles(e.id, "tspan", (e?.textStyles || []).map((e) => e.replace("color", "fill"))), C.cssRules.length);
		});
	}
	let w = "";
	if (e.themeCSS !== void 0) if (typeof C.replaceSync == "function") {
		let S = new CSSStyleSheet();
		S.replaceSync(e.themeCSS), w = cssStyleSheetToString(S) + "\n";
	} else w += `${e.themeCSS}
`;
	return w + cssStyleSheetToString(C);
}, "createCssStyles"), compileCSS = /* @__PURE__ */ __name((S, w) => serialize(compile(`${S}{${w}}`), middleware([/* @__PURE__ */ __name(function(e, w, T, E) {
	if (e.type === "rule" && Array.isArray(e.props)) {
		if (e.parent && e.parent.type === "@keyframes") return;
		e.props = e.props.map((C) => C === S && Array.isArray(e.children) && e.children.every((e) => e.type === "decl" ? (/* @__PURE__ */ new Set([
			"font-family",
			"font-size",
			"fill"
		])).has(e.props) : !1) || (C.startsWith(`${S} `) || C.startsWith(`${S}>`)) && !C.startsWith(`${S} ||`) ? C : `${S} ${C}`);
	} else e.type.startsWith("@") && ([...[
		"@media",
		"@supports",
		"@layer",
		"@scope",
		"@container",
		"@starting-style"
	], "@keyframes"].includes(e.type) || (log.warn(`Removing unsupported at-rule ${e.type} from CSS`), e.type = COMMENT));
}, "addNamespace"), stringify])), "compileCSS"), createUserStyles = /* @__PURE__ */ __name((e, S, C, w) => compileCSS(w, styles_default(S, createCssStyles(e, C), {
	...e.themeVariables,
	theme: e.theme,
	look: e.look
}, w)), "createUserStyles"), cleanUpSvgCode = /* @__PURE__ */ __name((e = "", S, C) => {
	let w = e;
	return !C && !S && (w = w.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#")), w = decodeEntities(w), w = w.replace(/<br>/g, "<br/>"), w;
}, "cleanUpSvgCode"), putIntoIFrame = /* @__PURE__ */ __name((e = "", S) => `<iframe style="width:${IFRAME_WIDTH};height:${S?.viewBox?.baseVal?.height ? S.viewBox.baseVal.height + "px" : IFRAME_HEIGHT};${IFRAME_STYLES}" src="data:text/html;charset=UTF-8;base64,${toBase64(`<body style="${IFRAME_BODY_STYLE}">${e}</body>`)}" sandbox="${IFRAME_SANDBOX_OPTS}">
  ${IFRAME_NOT_SUPPORTED_MSG}
</iframe>`, "putIntoIFrame"), appendDivSvgG = /* @__PURE__ */ __name((e, S, C, w, T) => {
	let E = e.append("div");
	E.attr("id", C), w && E.attr("style", w);
	let D = E.append("svg").attr("id", S).attr("width", "100%").attr("xmlns", XMLNS_SVG_STD);
	return T && D.attr("xmlns:xlink", T), D.append("g"), e;
}, "appendDivSvgG");
function sandboxedIframe(e, S) {
	return e.append("iframe").attr("id", S).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
__name(sandboxedIframe, "sandboxedIframe");
var removeExistingElements = /* @__PURE__ */ __name((e, S, C, w) => {
	e.getElementById(S)?.remove(), e.getElementById(C)?.remove(), e.getElementById(w)?.remove();
}, "removeExistingElements"), render = /* @__PURE__ */ __name(async function(S, T, E) {
	addDiagrams();
	let D = processAndSetConfigs(T);
	T = D.code;
	let O = getConfig();
	log.debug(O), T.length > (O?.maxTextSize ?? MAX_TEXTLENGTH) && (T = MAX_TEXTLENGTH_EXCEEDED_MSG);
	let k = `#${S}`, A = "i" + S, j = "#" + A, M = "d" + S, N = "#" + M, P = /* @__PURE__ */ __name(() => {
		let e = select_default(I ? j : N).node();
		e && "remove" in e && e.remove();
	}, "removeTempElements"), F = select_default(document.body), I = O.securityLevel === SECURITY_LVL_SANDBOX, L = O.securityLevel === SECURITY_LVL_LOOSE, R = O.fontFamily;
	E === void 0 ? (removeExistingElements(document, S, M, A), I ? (F = select_default(sandboxedIframe(select_default(document.body), A).nodes()[0].contentDocument.body), F.node().style.margin = "0") : F = select_default("body"), appendDivSvgG(F, S, M)) : (E && (E.innerHTML = ""), I ? (F = select_default(sandboxedIframe(select_default(E), A).nodes()[0].contentDocument.body), F.node().style.margin = "0") : F = select_default(E), appendDivSvgG(F, S, M, `font-family: ${R}`, XMLNS_XLINK_STD));
	let B, H;
	try {
		B = await Diagram.fromText(T, { title: D.title });
	} catch (e) {
		if (O.suppressErrorRendering) throw P(), e;
		B = await Diagram.fromText("error"), H = e;
	}
	let U = F.select(N).node(), W = B.type, G = U.firstChild, K = G.firstChild, q = B.renderer.getClasses?.(T, B), J = createUserStyles(O, W, q, k), Y = document.createElement("style");
	Y.innerHTML = J, G.insertBefore(Y, K);
	try {
		await B.renderer.draw(T, S, "11.17.2", B);
	} catch (e) {
		throw O.suppressErrorRendering ? P() : errorRenderer_default.draw(T, S, "11.17.2"), e;
	}
	let X = F.select(`${N} svg`), Z = B.db.getAccTitle?.(), Q = B.db.getAccDescription?.();
	addA11yInfo(W, X, Z, Q);
	let $ = (/* @__PURE__ */ __name(() => {
		F.select(`[id="${S}"]`).selectAll("foreignobject > *").attr("xmlns", XMLNS_XHTML_STD);
		let e = F.select(N).node().innerHTML;
		if (log.debug("config.arrowMarkerAbsolute", O.arrowMarkerAbsolute), e = cleanUpSvgCode(e, I, evaluate(O.arrowMarkerAbsolute)), I) {
			let S = F.select(N + " svg").node();
			e = putIntoIFrame(e, S);
		} else L || (e = purify.sanitize(e, {
			ADD_TAGS: DOMPURIFY_TAGS,
			ADD_ATTR: DOMPURIFY_ATTR,
			HTML_INTEGRATION_POINTS: { foreignobject: !0 }
		}));
		return attachFunctions(), e;
	}, "serializeSvg"))();
	if (H) throw H;
	return P(), {
		diagramType: W,
		svg: $,
		bindFunctions: B.db.bindFunctions
	};
}, "render");
function initialize(e = {}) {
	let C = assignWithDepth_default({}, e);
	C?.fontFamily && !C.themeVariables?.fontFamily && (C.themeVariables ||= {}, C.themeVariables.fontFamily = C.fontFamily), saveConfigFromInitialize(C), C?.theme && C.theme in themes_default ? C.themeVariables = themes_default[C.theme].getThemeVariables(C.themeVariables) : C && (C.themeVariables = themes_default.default.getThemeVariables(C.themeVariables)), setLogLevel((typeof C == "object" ? setSiteConfig(C) : getSiteConfig()).logLevel), addDiagrams();
}
__name(initialize, "initialize");
var getDiagramFromText = /* @__PURE__ */ __name((e, S = {}) => {
	let { code: C } = preprocessDiagram(e);
	return Diagram.fromText(C, S);
}, "getDiagramFromText");
function addA11yInfo(e, S, C, w) {
	setA11yDiagramInfo(S, e), addSVGa11yTitleDescription(S, C, w, S.attr("id"));
}
__name(addA11yInfo, "addA11yInfo");
var mermaidAPI = Object.freeze({
	render,
	parse,
	getDiagramFromText,
	initialize,
	getConfig,
	setConfig,
	getSiteConfig,
	updateSiteConfig,
	reset: /* @__PURE__ */ __name(() => {
		reset();
	}, "reset"),
	globalReset: /* @__PURE__ */ __name(() => {
		reset(defaultConfig);
	}, "globalReset"),
	defaultConfig
});
setLogLevel(getConfig().logLevel), reset(getConfig());
var handleError = /* @__PURE__ */ __name((e, S, w) => {
	log.warn(e), isDetailedError(e) ? (w && w(e.str, e.hash), S.push({
		...e,
		message: e.str,
		error: e
	})) : (w && w(e), e instanceof Error && S.push({
		str: e.message,
		message: e.message,
		hash: e.name,
		error: e
	}));
}, "handleError"), run = /* @__PURE__ */ __name(async function(e = { querySelector: ".mermaid" }) {
	try {
		await runThrowsErrors(e);
	} catch (S) {
		if (isDetailedError(S) && log.error(S.str), mermaid.parseError && mermaid.parseError(S), !e.suppressErrors) throw log.error("Use the suppressErrors option to suppress these errors"), S;
	}
}, "run"), runThrowsErrors = /* @__PURE__ */ __name(async function({ postRenderCallback: e, querySelector: S, nodes: w } = { querySelector: ".mermaid" }) {
	let T = mermaidAPI.getConfig();
	log.debug(`${e ? "" : "No "}Callback function found`);
	let E;
	if (w) E = w;
	else if (S) E = document.querySelectorAll(S);
	else throw Error("Nodes and querySelector are both undefined");
	log.debug(`Found ${E.length} diagrams`), T?.startOnLoad !== void 0 && (log.debug("Start On Load: " + T?.startOnLoad), mermaidAPI.updateSiteConfig({ startOnLoad: T?.startOnLoad }));
	let D = new utils_default.InitIDGenerator(T.deterministicIds, T.deterministicIDSeed), O, k = [];
	for (let S of Array.from(E)) {
		if (log.info("Rendering diagram: " + S.id), S.getAttribute("data-processed")) continue;
		S.setAttribute("data-processed", "true");
		let w = `mermaid-${D.next()}`;
		O = S.innerHTML, O = dedent(utils_default.entityDecode(O)).trim().replace(/<br\s*\/?>/gi, "<br/>");
		let T = utils_default.detectInit(O);
		T && log.debug("Detected early reinit: ", T);
		try {
			let { svg: C, bindFunctions: T } = await render2(w, O, S);
			S.innerHTML = C, e && await e(w), T && T(S);
		} catch (e) {
			handleError(e, k, mermaid.parseError);
		}
	}
	if (k.length > 0) throw k[0];
}, "runThrowsErrors"), initialize2 = /* @__PURE__ */ __name(function(e) {
	mermaidAPI.initialize(e);
}, "initialize"), init = /* @__PURE__ */ __name(async function(e, S, w) {
	log.warn("mermaid.init is deprecated. Please use run instead."), e && initialize2(e);
	let T = {
		postRenderCallback: w,
		querySelector: ".mermaid"
	};
	typeof S == "string" ? T.querySelector = S : S && (S instanceof HTMLElement ? T.nodes = [S] : T.nodes = S), await run(T);
}, "init"), registerExternalDiagrams = /* @__PURE__ */ __name(async (e, { lazyLoad: S = !0 } = {}) => {
	addDiagrams(), registerLazyLoadedDiagrams(...e), S === !1 && await loadRegisteredDiagrams();
}, "registerExternalDiagrams"), contentLoaded = /* @__PURE__ */ __name(function() {
	if (mermaid.startOnLoad) {
		let { startOnLoad: e } = mermaidAPI.getConfig();
		e && mermaid.run().catch((e) => log.error("Mermaid failed to initialize", e));
	}
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", contentLoaded, !1);
var setParseErrorHandler = /* @__PURE__ */ __name(function(e) {
	mermaid.parseError = e;
}, "setParseErrorHandler"), executionQueue = [], executionQueueRunning = !1, executeQueue = /* @__PURE__ */ __name(async () => {
	if (!executionQueueRunning) {
		for (executionQueueRunning = !0; executionQueue.length > 0;) {
			let e = executionQueue.shift();
			if (e) try {
				await e();
			} catch (e) {
				log.error("Error executing queue", e);
			}
		}
		executionQueueRunning = !1;
	}
}, "executeQueue"), parse2 = /* @__PURE__ */ __name(async (S, w) => new Promise((T, E) => {
	let D = /* @__PURE__ */ __name(() => new Promise((e, D) => {
		mermaidAPI.parse(S, w).then((S) => {
			e(S), T(S);
		}, (e) => {
			log.error("Error parsing", e), mermaid.parseError?.(e), D(e), E(e);
		});
	}), "performCall");
	executionQueue.push(D), executeQueue().catch(E);
}), "parse"), render2 = /* @__PURE__ */ __name((S, w, T) => new Promise((E, D) => {
	let O = /* @__PURE__ */ __name(() => new Promise((e, O) => {
		mermaidAPI.render(S, w, T).then((S) => {
			e(S), E(S);
		}, (e) => {
			log.error("Error parsing", e), mermaid.parseError?.(e), O(e), D(e);
		});
	}), "performCall");
	executionQueue.push(O), executeQueue().catch(D);
}), "render"), mermaid = {
	startOnLoad: !0,
	mermaidAPI,
	parse: parse2,
	render: render2,
	init,
	run,
	registerExternalDiagrams,
	registerLayoutLoaders,
	initialize: initialize2,
	parseError: void 0,
	contentLoaded,
	setParseErrorHandler,
	detectType,
	registerIconPacks,
	getRegisteredDiagramsMetadata: /* @__PURE__ */ __name(() => Object.keys(detectors).map((e) => ({ id: e })), "getRegisteredDiagramsMetadata")
}, mermaid_default = mermaid;
export { mermaid_default as default };
