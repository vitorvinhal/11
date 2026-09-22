import { a as __toESM, t as __commonJSMin } from "./chunk-BKjlJnyO.js";
import { x as ok } from "./lib-DEDsinTP.js";
var ParseError = class e extends Error {
	constructor(t, n) {
		var a = "KaTeX parse error: " + t, o, s, l = n && n.loc;
		if (l && l.start <= l.end) {
			var u = l.lexer.input;
			o = l.start, s = l.end, o === u.length ? a += " at end of input: " : a += " at position " + (o + 1) + ": ";
			var d = u.slice(o, s).replace(/[^]/g, "$&̲"), f = o > 15 ? "…" + u.slice(o - 15, o) : u.slice(0, o), p = s + 15 < u.length ? u.slice(s, s + 15) + "…" : u.slice(s);
			a += f + d + p;
		}
		super(a), this.name = "ParseError", Object.setPrototypeOf(this, e.prototype), this.position = o, o != null && s != null && (this.length = s - o), this.rawMessage = t;
	}
}, uppercase = /([A-Z])/g, hyphenate = (e) => e.replace(uppercase, "-$1").toLowerCase(), ESCAPE_LOOKUP = {
	"&": "&amp;",
	">": "&gt;",
	"<": "&lt;",
	"\"": "&quot;",
	"'": "&#x27;"
}, ESCAPE_REGEX = /[&><"']/g, escape$1 = (e) => String(e).replace(ESCAPE_REGEX, (e) => ESCAPE_LOOKUP[e]), getBaseElem = (e) => e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? getBaseElem(e.body[0]) : e : e.type === "font" ? getBaseElem(e.body) : e, characterNodesTypes = new Set([
	"mathord",
	"textord",
	"atom"
]), isCharacterBox = (e) => characterNodesTypes.has(getBaseElem(e).type), protocolFromUrl = (e) => {
	var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
	return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, SETTINGS_SCHEMA = {
	displayMode: {
		type: "boolean",
		description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
		cli: "-d, --display-mode"
	},
	output: {
		type: { enum: [
			"htmlAndMathml",
			"html",
			"mathml"
		] },
		description: "Determines the markup language of the output.",
		cli: "-F, --format <type>"
	},
	leqno: {
		type: "boolean",
		description: "Render display math in leqno style (left-justified tags)."
	},
	fleqn: {
		type: "boolean",
		description: "Render display math flush left."
	},
	throwOnError: {
		type: "boolean",
		default: !0,
		cli: "-t, --no-throw-on-error",
		cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
	},
	errorColor: {
		type: "string",
		default: "#cc0000",
		cli: "-c, --error-color <color>",
		cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
		cliProcessor: (e) => "#" + e
	},
	macros: {
		type: "object",
		cli: "-m, --macro <def>",
		cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
		cliDefault: [],
		cliProcessor: (e, t) => (t.push(e), t)
	},
	minRuleThickness: {
		type: "number",
		description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
		processor: (e) => Math.max(0, e),
		cli: "--min-rule-thickness <size>",
		cliProcessor: parseFloat
	},
	colorIsTextColor: {
		type: "boolean",
		description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
		cli: "-b, --color-is-text-color"
	},
	strict: {
		type: [
			{ enum: [
				"warn",
				"ignore",
				"error"
			] },
			"boolean",
			"function"
		],
		description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
		cli: "-S, --strict",
		cliDefault: !1
	},
	trust: {
		type: ["boolean", "function"],
		description: "Trust the input, enabling all HTML features such as \\url.",
		cli: "-T, --trust"
	},
	maxSize: {
		type: "number",
		default: Infinity,
		description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
		processor: (e) => Math.max(0, e),
		cli: "-s, --max-size <n>",
		cliProcessor: parseInt
	},
	maxExpand: {
		type: "number",
		default: 1e3,
		description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
		processor: (e) => Math.max(0, e),
		cli: "-e, --max-expand <n>",
		cliProcessor: (e) => e === "Infinity" ? Infinity : parseInt(e)
	},
	globalGroup: {
		type: "boolean",
		cli: !1
	}
};
function getDefaultValue(e) {
	if ("default" in e) return e.default;
	var t = e.type, n = Array.isArray(t) ? t[0] : t;
	if (typeof n != "string") return n.enum[0];
	switch (n) {
		case "boolean": return !1;
		case "string": return "";
		case "number": return 0;
		case "object": return {};
	}
}
var Settings = class {
	constructor(e) {
		e === void 0 && (e = {}), e ||= {};
		for (var t of Object.keys(SETTINGS_SCHEMA)) {
			var n = SETTINGS_SCHEMA[t], a = e[t];
			this[t] = a === void 0 ? getDefaultValue(n) : n.processor ? n.processor(a) : a;
		}
	}
	reportNonstrict(e, t, n) {
		var o = this.strict;
		if (typeof o == "function" && (o = o(e, t, n)), !(!o || o === "ignore")) {
			if (o === !0 || o === "error") throw new ParseError("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), n);
			o === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + o + "': " + t + " [" + e + "]"));
		}
	}
	useStrictBehavior(e, t, n) {
		var a = this.strict;
		if (typeof a == "function") try {
			a = a(e, t, n);
		} catch {
			a = "error";
		}
		return !a || a === "ignore" ? !1 : a === !0 || a === "error" ? !0 : a === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]")), !1);
	}
	isTrusted(e) {
		if ("url" in e && e.url && !e.protocol) {
			var t = protocolFromUrl(e.url);
			if (t == null) return !1;
			e.protocol = t;
		}
		return !!(typeof this.trust == "function" ? this.trust(e) : this.trust);
	}
}, Style = class {
	constructor(e, t, n) {
		this.id = e, this.size = t, this.cramped = n;
	}
	sup() {
		return styles[sup[this.id]];
	}
	sub() {
		return styles[sub[this.id]];
	}
	fracNum() {
		return styles[fracNum[this.id]];
	}
	fracDen() {
		return styles[fracDen[this.id]];
	}
	cramp() {
		return styles[cramp[this.id]];
	}
	text() {
		return styles[text$1[this.id]];
	}
	isTight() {
		return this.size >= 2;
	}
}, D = 0, Dc = 1, T = 2, Tc = 3, S = 4, Sc = 5, SS = 6, SSc = 7, styles = [
	new Style(D, 0, !1),
	new Style(Dc, 0, !0),
	new Style(T, 1, !1),
	new Style(Tc, 1, !0),
	new Style(S, 2, !1),
	new Style(Sc, 2, !0),
	new Style(SS, 3, !1),
	new Style(SSc, 3, !0)
], sup = [
	S,
	Sc,
	S,
	Sc,
	SS,
	SSc,
	SS,
	SSc
], sub = [
	Sc,
	Sc,
	Sc,
	Sc,
	SSc,
	SSc,
	SSc,
	SSc
], fracNum = [
	T,
	Tc,
	S,
	Sc,
	SS,
	SSc,
	SS,
	SSc
], fracDen = [
	Tc,
	Tc,
	Sc,
	Sc,
	SSc,
	SSc,
	SSc,
	SSc
], cramp = [
	Dc,
	Dc,
	Tc,
	Tc,
	Sc,
	Sc,
	SSc,
	SSc
], text$1 = [
	D,
	Dc,
	T,
	Tc,
	T,
	Tc,
	T,
	Tc
], Style$1 = {
	DISPLAY: styles[D],
	TEXT: styles[T],
	SCRIPT: styles[S],
	SCRIPTSCRIPT: styles[SS]
}, scriptData = [
	{
		name: "latin",
		blocks: [[256, 591], [768, 879]]
	},
	{
		name: "cyrillic",
		blocks: [[1024, 1279]]
	},
	{
		name: "armenian",
		blocks: [[1328, 1423]]
	},
	{
		name: "brahmic",
		blocks: [[2304, 4255]]
	},
	{
		name: "georgian",
		blocks: [[4256, 4351]]
	},
	{
		name: "cjk",
		blocks: [
			[12288, 12543],
			[19968, 40879],
			[65280, 65376]
		]
	},
	{
		name: "hangul",
		blocks: [[44032, 55215]]
	}
];
function scriptFromCodepoint(e) {
	for (var t = 0; t < scriptData.length; t++) for (var n = scriptData[t], a = 0; a < n.blocks.length; a++) {
		var o = n.blocks[a];
		if (e >= o[0] && e <= o[1]) return n.name;
	}
	return null;
}
var allBlocks = [];
scriptData.forEach((e) => e.blocks.forEach((e) => allBlocks.push(...e)));
function supportedCodepoint(e) {
	for (var t = 0; t < allBlocks.length; t += 2) if (e >= allBlocks[t] && e <= allBlocks[t + 1]) return !0;
	return !1;
}
var doubleBrushStroke = (e) => e + " " + e, hLinePad = 80, sqrtMain = function(e, t) {
	return "M95," + (622 + e + t) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + e / 2.075 + " -" + e + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + e) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, sqrtSize1 = function(e, t) {
	return "M263," + (601 + e + t) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + e / 2.084 + " -" + e + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + e) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, sqrtSize2 = function(e, t) {
	return "M983 " + (10 + e + t) + "\nl" + e / 3.13 + " -" + e + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + e) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, sqrtSize3 = function(e, t) {
	return "M424," + (2398 + e + t) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + e / 4.223 + " -" + e + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + e) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + e) + " " + t + "\nh400000v" + (40 + e) + "h-400000z";
}, sqrtSize4 = function(e, t) {
	return "M473," + (2713 + e + t) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + e / 5.298 + " -" + e + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + e) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, phasePath = function(e) {
	var t = e / 2;
	return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, sqrtTall = function(e, t, n) {
	var a = n - 54 - t - e;
	return "M702 " + (e + t) + "H400000" + (40 + e) + "\nH742v" + a + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + t + "H400000v" + (40 + e) + "H742z";
}, sqrtPath = function(e, t, n) {
	t = 1e3 * t;
	var a = "";
	switch (e) {
		case "sqrtMain":
			a = sqrtMain(t, hLinePad);
			break;
		case "sqrtSize1":
			a = sqrtSize1(t, hLinePad);
			break;
		case "sqrtSize2":
			a = sqrtSize2(t, hLinePad);
			break;
		case "sqrtSize3":
			a = sqrtSize3(t, hLinePad);
			break;
		case "sqrtSize4":
			a = sqrtSize4(t, hLinePad);
			break;
		case "sqrtTall": a = sqrtTall(t, hLinePad, n);
	}
	return a;
}, innerPath = function(e, t) {
	switch (e) {
		case "⎜": return doubleBrushStroke("M291 0 H417 V" + t + " H291z");
		case "∣": return doubleBrushStroke("M145 0 H188 V" + t + " H145z");
		case "∥": return doubleBrushStroke("M145 0 H188 V" + t + " H145z") + doubleBrushStroke("M367 0 H410 V" + t + " H367z");
		case "⎟": return doubleBrushStroke("M457 0 H583 V" + t + " H457z");
		case "⎢": return doubleBrushStroke("M319 0 H403 V" + t + " H319z");
		case "⎥": return doubleBrushStroke("M263 0 H347 V" + t + " H263z");
		case "⎪": return doubleBrushStroke("M384 0 H504 V" + t + " H384z");
		case "⏐": return doubleBrushStroke("M312 0 H355 V" + t + " H312z");
		case "‖": return doubleBrushStroke("M257 0 H300 V" + t + " H257z") + doubleBrushStroke("M478 0 H521 V" + t + " H478z");
		default: return "";
	}
}, path = {
	doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
	doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
	leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
	leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
	leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
	leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
	leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
	leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
	leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
	leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
	leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
	lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
	leftlinesegment: doubleBrushStroke("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
	leftbracketunder: doubleBrushStroke("M0 0 h120 V290 H399995 v120 H0z"),
	leftbracketover: doubleBrushStroke("M0 440 h120 V150 H399995 v-120 H0z"),
	leftmapsto: doubleBrushStroke("M40 281 V448H0V74H40V241H400000v40z"),
	leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
	longequal: doubleBrushStroke("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
	midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
	midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
	oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
	oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
	oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
	oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
	rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
	rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
	rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
	rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
	rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
	rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
	rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
	rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
	rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
	righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
	rightlinesegment: doubleBrushStroke("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
	rightbracketunder: doubleBrushStroke("M399995 0 h-120 V290 H0 v120 H400000z"),
	rightbracketover: doubleBrushStroke("M399995 440 h-120 V150 H0 v-120 H399995z"),
	rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
	twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
	twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
	tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
	tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
	tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
	tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
	vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
	widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
	widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
	widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
	widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
	widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
	widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
	widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
	widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
	baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
	rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
	baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
	rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
	shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
	shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
}, tallDelim = function(e, t) {
	switch (e) {
		case "lbrack": return "M403 1759 V84 H666 V0 H319 V1759 v" + t + " v1759 h347 v-84\nH403z M403 1759 V0 H319 V1759 v" + t + " v1759 h84z";
		case "rbrack": return "M347 1759 V0 H0 V84 H263 V1759 v" + t + " v1759 H0 v84 H347z\nM347 1759 V0 H263 V1759 v" + t + " v1759 h84z";
		case "vert": return "M145 15 v585 v" + t + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -t + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + t + " v585 h43z";
		case "doublevert": return "M145 15 v585 v" + t + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -t + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v" + t + " v585 h43z\nM367 15 v585 v" + t + " v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v" + -t + " v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M410 15 H367 v585 v" + t + " v585 h43z";
		case "lfloor": return "M319 602 V0 H403 V602 v" + t + " v1715 h263 v84 H319z\nMM319 602 V0 H403 V602 v" + t + " v1715 H319z";
		case "rfloor": return "M319 602 V0 H403 V602 v" + t + " v1799 H0 v-84 H319z\nMM319 602 V0 H403 V602 v" + t + " v1715 H319z";
		case "lceil": return "M403 1759 V84 H666 V0 H319 V1759 v" + t + " v602 h84z\nM403 1759 V0 H319 V1759 v" + t + " v602 h84z";
		case "rceil": return "M347 1759 V0 H0 V84 H263 V1759 v" + t + " v602 h84z\nM347 1759 V0 h-84 V1759 v" + t + " v602 h84z";
		case "lparen": return "M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1\nc-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,\n-36,557 l0," + (t + 84) + "c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,\n949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9\nc0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,\n-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189\nl0,-" + (t + 92) + "c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,\n-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z";
		case "rparen": return "M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,\n63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5\nc11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0," + (t + 9) + "\nc-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664\nc-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11\nc0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17\nc242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558\nl0,-" + (t + 144) + "c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,\n-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z";
		default: throw Error("Unknown stretchy delimiter.");
	}
}, DocumentFragment = class {
	constructor(e) {
		this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
	}
	hasClass(e) {
		return this.classes.includes(e);
	}
	toNode() {
		for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
		return e;
	}
	toMarkup() {
		for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
		return e;
	}
	toText() {
		return this.children.map((e) => e.toText()).join("");
	}
}, ptPerUnit = {
	pt: 1,
	mm: 7227 / 2540,
	cm: 7227 / 254,
	in: 72.27,
	bp: 803 / 800,
	pc: 12,
	dd: 1238 / 1157,
	cc: 14856 / 1157,
	nd: 685 / 642,
	nc: 1370 / 107,
	sp: 1 / 65536,
	px: 803 / 800
}, relativeUnit = {
	ex: !0,
	em: !0,
	mu: !0
}, validUnit = function(e) {
	return typeof e != "string" && (e = e.unit), e in ptPerUnit || e in relativeUnit || e === "ex";
}, calculateSize = function(e, t) {
	var n;
	if (e.unit in ptPerUnit) n = ptPerUnit[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
	else if (e.unit === "mu") n = t.fontMetrics().cssEmPerMu;
	else {
		var o = t.style.isTight() ? t.havingStyle(t.style.text()) : t;
		if (e.unit === "ex") n = o.fontMetrics().xHeight;
		else if (e.unit === "em") n = o.fontMetrics().quad;
		else throw new ParseError("Invalid unit: '" + e.unit + "'");
		o !== t && (n *= o.sizeMultiplier / t.sizeMultiplier);
	}
	return Math.min(e.number * n, t.maxSize);
}, makeEm = function(e) {
	return +e.toFixed(4) + "em";
}, createClass = function(e) {
	return e.filter((e) => e).join(" ");
}, initNode = function(e, t, n) {
	if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
		t.style.isTight() && this.classes.push("mtight");
		var a = t.getColor();
		a && (this.style.color = a);
	}
}, toNode = function(e) {
	var t = document.createElement(e);
	t.className = createClass(this.classes);
	for (var n of Object.keys(this.style)) t.style[n] = this.style[n];
	for (var a of Object.keys(this.attributes)) t.setAttribute(a, this.attributes[a]);
	for (var o = 0; o < this.children.length; o++) t.appendChild(this.children[o].toNode());
	return t;
}, invalidAttributeNameRegex = /[\s"'>/=\x00-\x1f]/, toMarkup = function(e) {
	var t = "<" + e;
	this.classes.length && (t += " class=\"" + escape$1(createClass(this.classes)) + "\"");
	var n = "";
	for (var o of Object.keys(this.style)) n += hyphenate(o) + ":" + this.style[o] + ";";
	n && (t += " style=\"" + escape$1(n) + "\"");
	for (var l of Object.keys(this.attributes)) {
		if (invalidAttributeNameRegex.test(l)) throw new ParseError("Invalid attribute name '" + l + "'");
		t += " " + l + "=\"" + escape$1(this.attributes[l]) + "\"";
	}
	t += ">";
	for (var u = 0; u < this.children.length; u++) t += this.children[u].toMarkup();
	return t += "</" + e + ">", t;
}, Span = class {
	constructor(e, t, n, a) {
		initNode.call(this, e, n, a), this.children = t || [];
	}
	setAttribute(e, t) {
		this.attributes[e] = t;
	}
	hasClass(e) {
		return this.classes.includes(e);
	}
	toNode() {
		return toNode.call(this, "span");
	}
	toMarkup() {
		return toMarkup.call(this, "span");
	}
}, Anchor = class {
	constructor(e, t, n, a) {
		initNode.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
	}
	setAttribute(e, t) {
		this.attributes[e] = t;
	}
	hasClass(e) {
		return this.classes.includes(e);
	}
	toNode() {
		return toNode.call(this, "a");
	}
	toMarkup() {
		return toMarkup.call(this, "a");
	}
}, Img = class {
	constructor(e, t, n) {
		this.alt = t, this.src = e, this.classes = ["mord"], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n;
	}
	hasClass(e) {
		return this.classes.includes(e);
	}
	toNode() {
		var e = document.createElement("img");
		e.src = this.src, e.alt = this.alt, e.className = "mord";
		for (var t of Object.keys(this.style)) e.style[t] = this.style[t];
		return e;
	}
	toMarkup() {
		var e = "<img src=\"" + escape$1(this.src) + "\"" + (" alt=\"" + escape$1(this.alt) + "\""), t = "";
		for (var n of Object.keys(this.style)) t += hyphenate(n) + ":" + this.style[n] + ";";
		return t && (e += " style=\"" + escape$1(t) + "\""), e += "'/>", e;
	}
}, iCombinations = {
	î: "ı̂",
	ï: "ı̈",
	í: "ı́",
	ì: "ı̀"
}, SymbolNode = class {
	constructor(e, t, n, a, o, s, l, u) {
		this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = o || 0, this.width = s || 0, this.classes = l || [], this.style = u || {}, this.maxFontSize = 0;
		var d = scriptFromCodepoint(this.text.charCodeAt(0));
		d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = iCombinations[this.text]);
	}
	hasClass(e) {
		return this.classes.includes(e);
	}
	toNode() {
		var e = document.createTextNode(this.text), t = null;
		this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = makeEm(this.italic)), this.classes.length > 0 && (t ||= document.createElement("span"), t.className = createClass(this.classes));
		for (var n of Object.keys(this.style)) t ||= document.createElement("span"), t.style[n] = this.style[n];
		return t ? (t.appendChild(e), t) : e;
	}
	toMarkup() {
		var e = !1, t = "<span";
		this.classes.length && (e = !0, t += " class=\"", t += escape$1(createClass(this.classes)), t += "\"");
		var n = "";
		this.italic > 0 && (n += "margin-right:" + makeEm(this.italic) + ";");
		for (var a of Object.keys(this.style)) n += hyphenate(a) + ":" + this.style[a] + ";";
		n && (e = !0, t += " style=\"" + escape$1(n) + "\"");
		var o = escape$1(this.text);
		return e ? (t += ">", t += o, t += "</span>", t) : o;
	}
}, SvgNode = class {
	constructor(e, t) {
		this.children = e || [], this.attributes = t || {};
	}
	toNode() {
		var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		for (var t of Object.keys(this.attributes)) e.setAttribute(t, this.attributes[t]);
		for (var n = 0; n < this.children.length; n++) e.appendChild(this.children[n].toNode());
		return e;
	}
	toMarkup() {
		var e = "<svg xmlns=\"http://www.w3.org/2000/svg\"";
		for (var t of Object.keys(this.attributes)) e += " " + t + "=\"" + escape$1(this.attributes[t]) + "\"";
		e += ">";
		for (var n = 0; n < this.children.length; n++) e += this.children[n].toMarkup();
		return e += "</svg>", e;
	}
}, PathNode = class {
	constructor(e, t) {
		this.pathName = e, this.alternate = t;
	}
	toNode() {
		var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
		return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", path[this.pathName]), e;
	}
	toMarkup() {
		return this.alternate ? "<path d=\"" + escape$1(this.alternate) + "\"/>" : "<path d=\"" + escape$1(path[this.pathName]) + "\"/>";
	}
}, LineNode = class {
	constructor(e) {
		this.attributes = e || {};
	}
	toNode() {
		var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
		for (var t of Object.keys(this.attributes)) e.setAttribute(t, this.attributes[t]);
		return e;
	}
	toMarkup() {
		var e = "<line";
		for (var t of Object.keys(this.attributes)) e += " " + t + "=\"" + escape$1(this.attributes[t]) + "\"";
		return e += "/>", e;
	}
};
function assertSymbolDomNode(e) {
	if (e instanceof SymbolNode) return e;
	throw Error("Expected symbolNode but got " + String(e) + ".");
}
function assertSpan(e) {
	if (e instanceof Span) return e;
	throw Error("Expected span<HtmlDomNode> but got " + String(e) + ".");
}
var hasHtmlDomChildren = (e) => e instanceof Span || e instanceof Anchor || e instanceof DocumentFragment, fontMetricsData = {
	"AMS-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		65: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		66: [
			0,
			.68889,
			0,
			0,
			.66667
		],
		67: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		68: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		69: [
			0,
			.68889,
			0,
			0,
			.66667
		],
		70: [
			0,
			.68889,
			0,
			0,
			.61111
		],
		71: [
			0,
			.68889,
			0,
			0,
			.77778
		],
		72: [
			0,
			.68889,
			0,
			0,
			.77778
		],
		73: [
			0,
			.68889,
			0,
			0,
			.38889
		],
		74: [
			.16667,
			.68889,
			0,
			0,
			.5
		],
		75: [
			0,
			.68889,
			0,
			0,
			.77778
		],
		76: [
			0,
			.68889,
			0,
			0,
			.66667
		],
		77: [
			0,
			.68889,
			0,
			0,
			.94445
		],
		78: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		79: [
			.16667,
			.68889,
			0,
			0,
			.77778
		],
		80: [
			0,
			.68889,
			0,
			0,
			.61111
		],
		81: [
			.16667,
			.68889,
			0,
			0,
			.77778
		],
		82: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		83: [
			0,
			.68889,
			0,
			0,
			.55556
		],
		84: [
			0,
			.68889,
			0,
			0,
			.66667
		],
		85: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		86: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		87: [
			0,
			.68889,
			0,
			0,
			1
		],
		88: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		89: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		90: [
			0,
			.68889,
			0,
			0,
			.66667
		],
		107: [
			0,
			.68889,
			0,
			0,
			.55556
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		165: [
			0,
			.675,
			.025,
			0,
			.75
		],
		174: [
			.15559,
			.69224,
			0,
			0,
			.94666
		],
		240: [
			0,
			.68889,
			0,
			0,
			.55556
		],
		295: [
			0,
			.68889,
			0,
			0,
			.54028
		],
		710: [
			0,
			.825,
			0,
			0,
			2.33334
		],
		732: [
			0,
			.9,
			0,
			0,
			2.33334
		],
		770: [
			0,
			.825,
			0,
			0,
			2.33334
		],
		771: [
			0,
			.9,
			0,
			0,
			2.33334
		],
		989: [
			.08167,
			.58167,
			0,
			0,
			.77778
		],
		1008: [
			0,
			.43056,
			.04028,
			0,
			.66667
		],
		8245: [
			0,
			.54986,
			0,
			0,
			.275
		],
		8463: [
			0,
			.68889,
			0,
			0,
			.54028
		],
		8487: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		8498: [
			0,
			.68889,
			0,
			0,
			.55556
		],
		8502: [
			0,
			.68889,
			0,
			0,
			.66667
		],
		8503: [
			0,
			.68889,
			0,
			0,
			.44445
		],
		8504: [
			0,
			.68889,
			0,
			0,
			.66667
		],
		8513: [
			0,
			.68889,
			0,
			0,
			.63889
		],
		8592: [
			-.03598,
			.46402,
			0,
			0,
			.5
		],
		8594: [
			-.03598,
			.46402,
			0,
			0,
			.5
		],
		8602: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8603: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8606: [
			.01354,
			.52239,
			0,
			0,
			1
		],
		8608: [
			.01354,
			.52239,
			0,
			0,
			1
		],
		8610: [
			.01354,
			.52239,
			0,
			0,
			1.11111
		],
		8611: [
			.01354,
			.52239,
			0,
			0,
			1.11111
		],
		8619: [
			0,
			.54986,
			0,
			0,
			1
		],
		8620: [
			0,
			.54986,
			0,
			0,
			1
		],
		8621: [
			-.13313,
			.37788,
			0,
			0,
			1.38889
		],
		8622: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8624: [
			0,
			.69224,
			0,
			0,
			.5
		],
		8625: [
			0,
			.69224,
			0,
			0,
			.5
		],
		8630: [
			0,
			.43056,
			0,
			0,
			1
		],
		8631: [
			0,
			.43056,
			0,
			0,
			1
		],
		8634: [
			.08198,
			.58198,
			0,
			0,
			.77778
		],
		8635: [
			.08198,
			.58198,
			0,
			0,
			.77778
		],
		8638: [
			.19444,
			.69224,
			0,
			0,
			.41667
		],
		8639: [
			.19444,
			.69224,
			0,
			0,
			.41667
		],
		8642: [
			.19444,
			.69224,
			0,
			0,
			.41667
		],
		8643: [
			.19444,
			.69224,
			0,
			0,
			.41667
		],
		8644: [
			.1808,
			.675,
			0,
			0,
			1
		],
		8646: [
			.1808,
			.675,
			0,
			0,
			1
		],
		8647: [
			.1808,
			.675,
			0,
			0,
			1
		],
		8648: [
			.19444,
			.69224,
			0,
			0,
			.83334
		],
		8649: [
			.1808,
			.675,
			0,
			0,
			1
		],
		8650: [
			.19444,
			.69224,
			0,
			0,
			.83334
		],
		8651: [
			.01354,
			.52239,
			0,
			0,
			1
		],
		8652: [
			.01354,
			.52239,
			0,
			0,
			1
		],
		8653: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8654: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8655: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8666: [
			.13667,
			.63667,
			0,
			0,
			1
		],
		8667: [
			.13667,
			.63667,
			0,
			0,
			1
		],
		8669: [
			-.13313,
			.37788,
			0,
			0,
			1
		],
		8672: [
			-.064,
			.437,
			0,
			0,
			1.334
		],
		8674: [
			-.064,
			.437,
			0,
			0,
			1.334
		],
		8705: [
			0,
			.825,
			0,
			0,
			.5
		],
		8708: [
			0,
			.68889,
			0,
			0,
			.55556
		],
		8709: [
			.08167,
			.58167,
			0,
			0,
			.77778
		],
		8717: [
			0,
			.43056,
			0,
			0,
			.42917
		],
		8722: [
			-.03598,
			.46402,
			0,
			0,
			.5
		],
		8724: [
			.08198,
			.69224,
			0,
			0,
			.77778
		],
		8726: [
			.08167,
			.58167,
			0,
			0,
			.77778
		],
		8733: [
			0,
			.69224,
			0,
			0,
			.77778
		],
		8736: [
			0,
			.69224,
			0,
			0,
			.72222
		],
		8737: [
			0,
			.69224,
			0,
			0,
			.72222
		],
		8738: [
			.03517,
			.52239,
			0,
			0,
			.72222
		],
		8739: [
			.08167,
			.58167,
			0,
			0,
			.22222
		],
		8740: [
			.25142,
			.74111,
			0,
			0,
			.27778
		],
		8741: [
			.08167,
			.58167,
			0,
			0,
			.38889
		],
		8742: [
			.25142,
			.74111,
			0,
			0,
			.5
		],
		8756: [
			0,
			.69224,
			0,
			0,
			.66667
		],
		8757: [
			0,
			.69224,
			0,
			0,
			.66667
		],
		8764: [
			-.13313,
			.36687,
			0,
			0,
			.77778
		],
		8765: [
			-.13313,
			.37788,
			0,
			0,
			.77778
		],
		8769: [
			-.13313,
			.36687,
			0,
			0,
			.77778
		],
		8770: [
			-.03625,
			.46375,
			0,
			0,
			.77778
		],
		8774: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		8776: [
			-.01688,
			.48312,
			0,
			0,
			.77778
		],
		8778: [
			.08167,
			.58167,
			0,
			0,
			.77778
		],
		8782: [
			.06062,
			.54986,
			0,
			0,
			.77778
		],
		8783: [
			.06062,
			.54986,
			0,
			0,
			.77778
		],
		8785: [
			.08198,
			.58198,
			0,
			0,
			.77778
		],
		8786: [
			.08198,
			.58198,
			0,
			0,
			.77778
		],
		8787: [
			.08198,
			.58198,
			0,
			0,
			.77778
		],
		8790: [
			0,
			.69224,
			0,
			0,
			.77778
		],
		8791: [
			.22958,
			.72958,
			0,
			0,
			.77778
		],
		8796: [
			.08198,
			.91667,
			0,
			0,
			.77778
		],
		8806: [
			.25583,
			.75583,
			0,
			0,
			.77778
		],
		8807: [
			.25583,
			.75583,
			0,
			0,
			.77778
		],
		8808: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		8809: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		8812: [
			.25583,
			.75583,
			0,
			0,
			.5
		],
		8814: [
			.20576,
			.70576,
			0,
			0,
			.77778
		],
		8815: [
			.20576,
			.70576,
			0,
			0,
			.77778
		],
		8816: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		8817: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		8818: [
			.22958,
			.72958,
			0,
			0,
			.77778
		],
		8819: [
			.22958,
			.72958,
			0,
			0,
			.77778
		],
		8822: [
			.1808,
			.675,
			0,
			0,
			.77778
		],
		8823: [
			.1808,
			.675,
			0,
			0,
			.77778
		],
		8828: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		8829: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		8830: [
			.22958,
			.72958,
			0,
			0,
			.77778
		],
		8831: [
			.22958,
			.72958,
			0,
			0,
			.77778
		],
		8832: [
			.20576,
			.70576,
			0,
			0,
			.77778
		],
		8833: [
			.20576,
			.70576,
			0,
			0,
			.77778
		],
		8840: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		8841: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		8842: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		8843: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		8847: [
			.03517,
			.54986,
			0,
			0,
			.77778
		],
		8848: [
			.03517,
			.54986,
			0,
			0,
			.77778
		],
		8858: [
			.08198,
			.58198,
			0,
			0,
			.77778
		],
		8859: [
			.08198,
			.58198,
			0,
			0,
			.77778
		],
		8861: [
			.08198,
			.58198,
			0,
			0,
			.77778
		],
		8862: [
			0,
			.675,
			0,
			0,
			.77778
		],
		8863: [
			0,
			.675,
			0,
			0,
			.77778
		],
		8864: [
			0,
			.675,
			0,
			0,
			.77778
		],
		8865: [
			0,
			.675,
			0,
			0,
			.77778
		],
		8872: [
			0,
			.69224,
			0,
			0,
			.61111
		],
		8873: [
			0,
			.69224,
			0,
			0,
			.72222
		],
		8874: [
			0,
			.69224,
			0,
			0,
			.88889
		],
		8876: [
			0,
			.68889,
			0,
			0,
			.61111
		],
		8877: [
			0,
			.68889,
			0,
			0,
			.61111
		],
		8878: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		8879: [
			0,
			.68889,
			0,
			0,
			.72222
		],
		8882: [
			.03517,
			.54986,
			0,
			0,
			.77778
		],
		8883: [
			.03517,
			.54986,
			0,
			0,
			.77778
		],
		8884: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		8885: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		8888: [
			0,
			.54986,
			0,
			0,
			1.11111
		],
		8890: [
			.19444,
			.43056,
			0,
			0,
			.55556
		],
		8891: [
			.19444,
			.69224,
			0,
			0,
			.61111
		],
		8892: [
			.19444,
			.69224,
			0,
			0,
			.61111
		],
		8901: [
			0,
			.54986,
			0,
			0,
			.27778
		],
		8903: [
			.08167,
			.58167,
			0,
			0,
			.77778
		],
		8905: [
			.08167,
			.58167,
			0,
			0,
			.77778
		],
		8906: [
			.08167,
			.58167,
			0,
			0,
			.77778
		],
		8907: [
			0,
			.69224,
			0,
			0,
			.77778
		],
		8908: [
			0,
			.69224,
			0,
			0,
			.77778
		],
		8909: [
			-.03598,
			.46402,
			0,
			0,
			.77778
		],
		8910: [
			0,
			.54986,
			0,
			0,
			.76042
		],
		8911: [
			0,
			.54986,
			0,
			0,
			.76042
		],
		8912: [
			.03517,
			.54986,
			0,
			0,
			.77778
		],
		8913: [
			.03517,
			.54986,
			0,
			0,
			.77778
		],
		8914: [
			0,
			.54986,
			0,
			0,
			.66667
		],
		8915: [
			0,
			.54986,
			0,
			0,
			.66667
		],
		8916: [
			0,
			.69224,
			0,
			0,
			.66667
		],
		8918: [
			.0391,
			.5391,
			0,
			0,
			.77778
		],
		8919: [
			.0391,
			.5391,
			0,
			0,
			.77778
		],
		8920: [
			.03517,
			.54986,
			0,
			0,
			1.33334
		],
		8921: [
			.03517,
			.54986,
			0,
			0,
			1.33334
		],
		8922: [
			.38569,
			.88569,
			0,
			0,
			.77778
		],
		8923: [
			.38569,
			.88569,
			0,
			0,
			.77778
		],
		8926: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		8927: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		8928: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		8929: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		8934: [
			.23222,
			.74111,
			0,
			0,
			.77778
		],
		8935: [
			.23222,
			.74111,
			0,
			0,
			.77778
		],
		8936: [
			.23222,
			.74111,
			0,
			0,
			.77778
		],
		8937: [
			.23222,
			.74111,
			0,
			0,
			.77778
		],
		8938: [
			.20576,
			.70576,
			0,
			0,
			.77778
		],
		8939: [
			.20576,
			.70576,
			0,
			0,
			.77778
		],
		8940: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		8941: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		8994: [
			.19444,
			.69224,
			0,
			0,
			.77778
		],
		8995: [
			.19444,
			.69224,
			0,
			0,
			.77778
		],
		9416: [
			.15559,
			.69224,
			0,
			0,
			.90222
		],
		9484: [
			0,
			.69224,
			0,
			0,
			.5
		],
		9488: [
			0,
			.69224,
			0,
			0,
			.5
		],
		9492: [
			0,
			.37788,
			0,
			0,
			.5
		],
		9496: [
			0,
			.37788,
			0,
			0,
			.5
		],
		9585: [
			.19444,
			.68889,
			0,
			0,
			.88889
		],
		9586: [
			.19444,
			.74111,
			0,
			0,
			.88889
		],
		9632: [
			0,
			.675,
			0,
			0,
			.77778
		],
		9633: [
			0,
			.675,
			0,
			0,
			.77778
		],
		9650: [
			0,
			.54986,
			0,
			0,
			.72222
		],
		9651: [
			0,
			.54986,
			0,
			0,
			.72222
		],
		9654: [
			.03517,
			.54986,
			0,
			0,
			.77778
		],
		9660: [
			0,
			.54986,
			0,
			0,
			.72222
		],
		9661: [
			0,
			.54986,
			0,
			0,
			.72222
		],
		9664: [
			.03517,
			.54986,
			0,
			0,
			.77778
		],
		9674: [
			.11111,
			.69224,
			0,
			0,
			.66667
		],
		9733: [
			.19444,
			.69224,
			0,
			0,
			.94445
		],
		10003: [
			0,
			.69224,
			0,
			0,
			.83334
		],
		10016: [
			0,
			.69224,
			0,
			0,
			.83334
		],
		10731: [
			.11111,
			.69224,
			0,
			0,
			.66667
		],
		10846: [
			.19444,
			.75583,
			0,
			0,
			.61111
		],
		10877: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		10878: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		10885: [
			.25583,
			.75583,
			0,
			0,
			.77778
		],
		10886: [
			.25583,
			.75583,
			0,
			0,
			.77778
		],
		10887: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		10888: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		10889: [
			.26167,
			.75726,
			0,
			0,
			.77778
		],
		10890: [
			.26167,
			.75726,
			0,
			0,
			.77778
		],
		10891: [
			.48256,
			.98256,
			0,
			0,
			.77778
		],
		10892: [
			.48256,
			.98256,
			0,
			0,
			.77778
		],
		10901: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		10902: [
			.13667,
			.63667,
			0,
			0,
			.77778
		],
		10933: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		10934: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		10935: [
			.26167,
			.75726,
			0,
			0,
			.77778
		],
		10936: [
			.26167,
			.75726,
			0,
			0,
			.77778
		],
		10937: [
			.26167,
			.75726,
			0,
			0,
			.77778
		],
		10938: [
			.26167,
			.75726,
			0,
			0,
			.77778
		],
		10949: [
			.25583,
			.75583,
			0,
			0,
			.77778
		],
		10950: [
			.25583,
			.75583,
			0,
			0,
			.77778
		],
		10955: [
			.28481,
			.79383,
			0,
			0,
			.77778
		],
		10956: [
			.28481,
			.79383,
			0,
			0,
			.77778
		],
		57350: [
			.08167,
			.58167,
			0,
			0,
			.22222
		],
		57351: [
			.08167,
			.58167,
			0,
			0,
			.38889
		],
		57352: [
			.08167,
			.58167,
			0,
			0,
			.77778
		],
		57353: [
			0,
			.43056,
			.04028,
			0,
			.66667
		],
		57356: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		57357: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		57358: [
			.41951,
			.91951,
			0,
			0,
			.77778
		],
		57359: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		57360: [
			.30274,
			.79383,
			0,
			0,
			.77778
		],
		57361: [
			.41951,
			.91951,
			0,
			0,
			.77778
		],
		57366: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		57367: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		57368: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		57369: [
			.25142,
			.75726,
			0,
			0,
			.77778
		],
		57370: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		57371: [
			.13597,
			.63597,
			0,
			0,
			.77778
		]
	},
	"Caligraphic-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		65: [
			0,
			.68333,
			0,
			.19445,
			.79847
		],
		66: [
			0,
			.68333,
			.03041,
			.13889,
			.65681
		],
		67: [
			0,
			.68333,
			.05834,
			.13889,
			.52653
		],
		68: [
			0,
			.68333,
			.02778,
			.08334,
			.77139
		],
		69: [
			0,
			.68333,
			.08944,
			.11111,
			.52778
		],
		70: [
			0,
			.68333,
			.09931,
			.11111,
			.71875
		],
		71: [
			.09722,
			.68333,
			.0593,
			.11111,
			.59487
		],
		72: [
			0,
			.68333,
			.00965,
			.11111,
			.84452
		],
		73: [
			0,
			.68333,
			.07382,
			0,
			.54452
		],
		74: [
			.09722,
			.68333,
			.18472,
			.16667,
			.67778
		],
		75: [
			0,
			.68333,
			.01445,
			.05556,
			.76195
		],
		76: [
			0,
			.68333,
			0,
			.13889,
			.68972
		],
		77: [
			0,
			.68333,
			0,
			.13889,
			1.2009
		],
		78: [
			0,
			.68333,
			.14736,
			.08334,
			.82049
		],
		79: [
			0,
			.68333,
			.02778,
			.11111,
			.79611
		],
		80: [
			0,
			.68333,
			.08222,
			.08334,
			.69556
		],
		81: [
			.09722,
			.68333,
			0,
			.11111,
			.81667
		],
		82: [
			0,
			.68333,
			0,
			.08334,
			.8475
		],
		83: [
			0,
			.68333,
			.075,
			.13889,
			.60556
		],
		84: [
			0,
			.68333,
			.25417,
			0,
			.54464
		],
		85: [
			0,
			.68333,
			.09931,
			.08334,
			.62583
		],
		86: [
			0,
			.68333,
			.08222,
			0,
			.61278
		],
		87: [
			0,
			.68333,
			.08222,
			.08334,
			.98778
		],
		88: [
			0,
			.68333,
			.14643,
			.13889,
			.7133
		],
		89: [
			.09722,
			.68333,
			.08222,
			.08334,
			.66834
		],
		90: [
			0,
			.68333,
			.07944,
			.13889,
			.72473
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		]
	},
	"Fraktur-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		33: [
			0,
			.69141,
			0,
			0,
			.29574
		],
		34: [
			0,
			.69141,
			0,
			0,
			.21471
		],
		38: [
			0,
			.69141,
			0,
			0,
			.73786
		],
		39: [
			0,
			.69141,
			0,
			0,
			.21201
		],
		40: [
			.24982,
			.74947,
			0,
			0,
			.38865
		],
		41: [
			.24982,
			.74947,
			0,
			0,
			.38865
		],
		42: [
			0,
			.62119,
			0,
			0,
			.27764
		],
		43: [
			.08319,
			.58283,
			0,
			0,
			.75623
		],
		44: [
			0,
			.10803,
			0,
			0,
			.27764
		],
		45: [
			.08319,
			.58283,
			0,
			0,
			.75623
		],
		46: [
			0,
			.10803,
			0,
			0,
			.27764
		],
		47: [
			.24982,
			.74947,
			0,
			0,
			.50181
		],
		48: [
			0,
			.47534,
			0,
			0,
			.50181
		],
		49: [
			0,
			.47534,
			0,
			0,
			.50181
		],
		50: [
			0,
			.47534,
			0,
			0,
			.50181
		],
		51: [
			.18906,
			.47534,
			0,
			0,
			.50181
		],
		52: [
			.18906,
			.47534,
			0,
			0,
			.50181
		],
		53: [
			.18906,
			.47534,
			0,
			0,
			.50181
		],
		54: [
			0,
			.69141,
			0,
			0,
			.50181
		],
		55: [
			.18906,
			.47534,
			0,
			0,
			.50181
		],
		56: [
			0,
			.69141,
			0,
			0,
			.50181
		],
		57: [
			.18906,
			.47534,
			0,
			0,
			.50181
		],
		58: [
			0,
			.47534,
			0,
			0,
			.21606
		],
		59: [
			.12604,
			.47534,
			0,
			0,
			.21606
		],
		61: [
			-.13099,
			.36866,
			0,
			0,
			.75623
		],
		63: [
			0,
			.69141,
			0,
			0,
			.36245
		],
		65: [
			0,
			.69141,
			0,
			0,
			.7176
		],
		66: [
			0,
			.69141,
			0,
			0,
			.88397
		],
		67: [
			0,
			.69141,
			0,
			0,
			.61254
		],
		68: [
			0,
			.69141,
			0,
			0,
			.83158
		],
		69: [
			0,
			.69141,
			0,
			0,
			.66278
		],
		70: [
			.12604,
			.69141,
			0,
			0,
			.61119
		],
		71: [
			0,
			.69141,
			0,
			0,
			.78539
		],
		72: [
			.06302,
			.69141,
			0,
			0,
			.7203
		],
		73: [
			0,
			.69141,
			0,
			0,
			.55448
		],
		74: [
			.12604,
			.69141,
			0,
			0,
			.55231
		],
		75: [
			0,
			.69141,
			0,
			0,
			.66845
		],
		76: [
			0,
			.69141,
			0,
			0,
			.66602
		],
		77: [
			0,
			.69141,
			0,
			0,
			1.04953
		],
		78: [
			0,
			.69141,
			0,
			0,
			.83212
		],
		79: [
			0,
			.69141,
			0,
			0,
			.82699
		],
		80: [
			.18906,
			.69141,
			0,
			0,
			.82753
		],
		81: [
			.03781,
			.69141,
			0,
			0,
			.82699
		],
		82: [
			0,
			.69141,
			0,
			0,
			.82807
		],
		83: [
			0,
			.69141,
			0,
			0,
			.82861
		],
		84: [
			0,
			.69141,
			0,
			0,
			.66899
		],
		85: [
			0,
			.69141,
			0,
			0,
			.64576
		],
		86: [
			0,
			.69141,
			0,
			0,
			.83131
		],
		87: [
			0,
			.69141,
			0,
			0,
			1.04602
		],
		88: [
			0,
			.69141,
			0,
			0,
			.71922
		],
		89: [
			.18906,
			.69141,
			0,
			0,
			.83293
		],
		90: [
			.12604,
			.69141,
			0,
			0,
			.60201
		],
		91: [
			.24982,
			.74947,
			0,
			0,
			.27764
		],
		93: [
			.24982,
			.74947,
			0,
			0,
			.27764
		],
		94: [
			0,
			.69141,
			0,
			0,
			.49965
		],
		97: [
			0,
			.47534,
			0,
			0,
			.50046
		],
		98: [
			0,
			.69141,
			0,
			0,
			.51315
		],
		99: [
			0,
			.47534,
			0,
			0,
			.38946
		],
		100: [
			0,
			.62119,
			0,
			0,
			.49857
		],
		101: [
			0,
			.47534,
			0,
			0,
			.40053
		],
		102: [
			.18906,
			.69141,
			0,
			0,
			.32626
		],
		103: [
			.18906,
			.47534,
			0,
			0,
			.5037
		],
		104: [
			.18906,
			.69141,
			0,
			0,
			.52126
		],
		105: [
			0,
			.69141,
			0,
			0,
			.27899
		],
		106: [
			0,
			.69141,
			0,
			0,
			.28088
		],
		107: [
			0,
			.69141,
			0,
			0,
			.38946
		],
		108: [
			0,
			.69141,
			0,
			0,
			.27953
		],
		109: [
			0,
			.47534,
			0,
			0,
			.76676
		],
		110: [
			0,
			.47534,
			0,
			0,
			.52666
		],
		111: [
			0,
			.47534,
			0,
			0,
			.48885
		],
		112: [
			.18906,
			.52396,
			0,
			0,
			.50046
		],
		113: [
			.18906,
			.47534,
			0,
			0,
			.48912
		],
		114: [
			0,
			.47534,
			0,
			0,
			.38919
		],
		115: [
			0,
			.47534,
			0,
			0,
			.44266
		],
		116: [
			0,
			.62119,
			0,
			0,
			.33301
		],
		117: [
			0,
			.47534,
			0,
			0,
			.5172
		],
		118: [
			0,
			.52396,
			0,
			0,
			.5118
		],
		119: [
			0,
			.52396,
			0,
			0,
			.77351
		],
		120: [
			.18906,
			.47534,
			0,
			0,
			.38865
		],
		121: [
			.18906,
			.47534,
			0,
			0,
			.49884
		],
		122: [
			.18906,
			.47534,
			0,
			0,
			.39054
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		8216: [
			0,
			.69141,
			0,
			0,
			.21471
		],
		8217: [
			0,
			.69141,
			0,
			0,
			.21471
		],
		58112: [
			0,
			.62119,
			0,
			0,
			.49749
		],
		58113: [
			0,
			.62119,
			0,
			0,
			.4983
		],
		58114: [
			.18906,
			.69141,
			0,
			0,
			.33328
		],
		58115: [
			.18906,
			.69141,
			0,
			0,
			.32923
		],
		58116: [
			.18906,
			.47534,
			0,
			0,
			.50343
		],
		58117: [
			0,
			.69141,
			0,
			0,
			.33301
		],
		58118: [
			0,
			.62119,
			0,
			0,
			.33409
		],
		58119: [
			0,
			.47534,
			0,
			0,
			.50073
		]
	},
	"Main-Bold": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		33: [
			0,
			.69444,
			0,
			0,
			.35
		],
		34: [
			0,
			.69444,
			0,
			0,
			.60278
		],
		35: [
			.19444,
			.69444,
			0,
			0,
			.95833
		],
		36: [
			.05556,
			.75,
			0,
			0,
			.575
		],
		37: [
			.05556,
			.75,
			0,
			0,
			.95833
		],
		38: [
			0,
			.69444,
			0,
			0,
			.89444
		],
		39: [
			0,
			.69444,
			0,
			0,
			.31944
		],
		40: [
			.25,
			.75,
			0,
			0,
			.44722
		],
		41: [
			.25,
			.75,
			0,
			0,
			.44722
		],
		42: [
			0,
			.75,
			0,
			0,
			.575
		],
		43: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		44: [
			.19444,
			.15556,
			0,
			0,
			.31944
		],
		45: [
			0,
			.44444,
			0,
			0,
			.38333
		],
		46: [
			0,
			.15556,
			0,
			0,
			.31944
		],
		47: [
			.25,
			.75,
			0,
			0,
			.575
		],
		48: [
			0,
			.64444,
			0,
			0,
			.575
		],
		49: [
			0,
			.64444,
			0,
			0,
			.575
		],
		50: [
			0,
			.64444,
			0,
			0,
			.575
		],
		51: [
			0,
			.64444,
			0,
			0,
			.575
		],
		52: [
			0,
			.64444,
			0,
			0,
			.575
		],
		53: [
			0,
			.64444,
			0,
			0,
			.575
		],
		54: [
			0,
			.64444,
			0,
			0,
			.575
		],
		55: [
			0,
			.64444,
			0,
			0,
			.575
		],
		56: [
			0,
			.64444,
			0,
			0,
			.575
		],
		57: [
			0,
			.64444,
			0,
			0,
			.575
		],
		58: [
			0,
			.44444,
			0,
			0,
			.31944
		],
		59: [
			.19444,
			.44444,
			0,
			0,
			.31944
		],
		60: [
			.08556,
			.58556,
			0,
			0,
			.89444
		],
		61: [
			-.10889,
			.39111,
			0,
			0,
			.89444
		],
		62: [
			.08556,
			.58556,
			0,
			0,
			.89444
		],
		63: [
			0,
			.69444,
			0,
			0,
			.54305
		],
		64: [
			0,
			.69444,
			0,
			0,
			.89444
		],
		65: [
			0,
			.68611,
			0,
			0,
			.86944
		],
		66: [
			0,
			.68611,
			0,
			0,
			.81805
		],
		67: [
			0,
			.68611,
			0,
			0,
			.83055
		],
		68: [
			0,
			.68611,
			0,
			0,
			.88194
		],
		69: [
			0,
			.68611,
			0,
			0,
			.75555
		],
		70: [
			0,
			.68611,
			0,
			0,
			.72361
		],
		71: [
			0,
			.68611,
			0,
			0,
			.90416
		],
		72: [
			0,
			.68611,
			0,
			0,
			.9
		],
		73: [
			0,
			.68611,
			0,
			0,
			.43611
		],
		74: [
			0,
			.68611,
			0,
			0,
			.59444
		],
		75: [
			0,
			.68611,
			0,
			0,
			.90138
		],
		76: [
			0,
			.68611,
			0,
			0,
			.69166
		],
		77: [
			0,
			.68611,
			0,
			0,
			1.09166
		],
		78: [
			0,
			.68611,
			0,
			0,
			.9
		],
		79: [
			0,
			.68611,
			0,
			0,
			.86388
		],
		80: [
			0,
			.68611,
			0,
			0,
			.78611
		],
		81: [
			.19444,
			.68611,
			0,
			0,
			.86388
		],
		82: [
			0,
			.68611,
			0,
			0,
			.8625
		],
		83: [
			0,
			.68611,
			0,
			0,
			.63889
		],
		84: [
			0,
			.68611,
			0,
			0,
			.8
		],
		85: [
			0,
			.68611,
			0,
			0,
			.88472
		],
		86: [
			0,
			.68611,
			.01597,
			0,
			.86944
		],
		87: [
			0,
			.68611,
			.01597,
			0,
			1.18888
		],
		88: [
			0,
			.68611,
			0,
			0,
			.86944
		],
		89: [
			0,
			.68611,
			.02875,
			0,
			.86944
		],
		90: [
			0,
			.68611,
			0,
			0,
			.70277
		],
		91: [
			.25,
			.75,
			0,
			0,
			.31944
		],
		92: [
			.25,
			.75,
			0,
			0,
			.575
		],
		93: [
			.25,
			.75,
			0,
			0,
			.31944
		],
		94: [
			0,
			.69444,
			0,
			0,
			.575
		],
		95: [
			.31,
			.13444,
			.03194,
			0,
			.575
		],
		97: [
			0,
			.44444,
			0,
			0,
			.55902
		],
		98: [
			0,
			.69444,
			0,
			0,
			.63889
		],
		99: [
			0,
			.44444,
			0,
			0,
			.51111
		],
		100: [
			0,
			.69444,
			0,
			0,
			.63889
		],
		101: [
			0,
			.44444,
			0,
			0,
			.52708
		],
		102: [
			0,
			.69444,
			.10903,
			0,
			.35139
		],
		103: [
			.19444,
			.44444,
			.01597,
			0,
			.575
		],
		104: [
			0,
			.69444,
			0,
			0,
			.63889
		],
		105: [
			0,
			.69444,
			0,
			0,
			.31944
		],
		106: [
			.19444,
			.69444,
			0,
			0,
			.35139
		],
		107: [
			0,
			.69444,
			0,
			0,
			.60694
		],
		108: [
			0,
			.69444,
			0,
			0,
			.31944
		],
		109: [
			0,
			.44444,
			0,
			0,
			.95833
		],
		110: [
			0,
			.44444,
			0,
			0,
			.63889
		],
		111: [
			0,
			.44444,
			0,
			0,
			.575
		],
		112: [
			.19444,
			.44444,
			0,
			0,
			.63889
		],
		113: [
			.19444,
			.44444,
			0,
			0,
			.60694
		],
		114: [
			0,
			.44444,
			0,
			0,
			.47361
		],
		115: [
			0,
			.44444,
			0,
			0,
			.45361
		],
		116: [
			0,
			.63492,
			0,
			0,
			.44722
		],
		117: [
			0,
			.44444,
			0,
			0,
			.63889
		],
		118: [
			0,
			.44444,
			.01597,
			0,
			.60694
		],
		119: [
			0,
			.44444,
			.01597,
			0,
			.83055
		],
		120: [
			0,
			.44444,
			0,
			0,
			.60694
		],
		121: [
			.19444,
			.44444,
			.01597,
			0,
			.60694
		],
		122: [
			0,
			.44444,
			0,
			0,
			.51111
		],
		123: [
			.25,
			.75,
			0,
			0,
			.575
		],
		124: [
			.25,
			.75,
			0,
			0,
			.31944
		],
		125: [
			.25,
			.75,
			0,
			0,
			.575
		],
		126: [
			.35,
			.34444,
			0,
			0,
			.575
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		163: [
			0,
			.69444,
			0,
			0,
			.86853
		],
		168: [
			0,
			.69444,
			0,
			0,
			.575
		],
		172: [
			0,
			.44444,
			0,
			0,
			.76666
		],
		176: [
			0,
			.69444,
			0,
			0,
			.86944
		],
		177: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		184: [
			.17014,
			0,
			0,
			0,
			.51111
		],
		198: [
			0,
			.68611,
			0,
			0,
			1.04166
		],
		215: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		216: [
			.04861,
			.73472,
			0,
			0,
			.89444
		],
		223: [
			0,
			.69444,
			0,
			0,
			.59722
		],
		230: [
			0,
			.44444,
			0,
			0,
			.83055
		],
		247: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		248: [
			.09722,
			.54167,
			0,
			0,
			.575
		],
		305: [
			0,
			.44444,
			0,
			0,
			.31944
		],
		338: [
			0,
			.68611,
			0,
			0,
			1.16944
		],
		339: [
			0,
			.44444,
			0,
			0,
			.89444
		],
		567: [
			.19444,
			.44444,
			0,
			0,
			.35139
		],
		710: [
			0,
			.69444,
			0,
			0,
			.575
		],
		711: [
			0,
			.63194,
			0,
			0,
			.575
		],
		713: [
			0,
			.59611,
			0,
			0,
			.575
		],
		714: [
			0,
			.69444,
			0,
			0,
			.575
		],
		715: [
			0,
			.69444,
			0,
			0,
			.575
		],
		728: [
			0,
			.69444,
			0,
			0,
			.575
		],
		729: [
			0,
			.69444,
			0,
			0,
			.31944
		],
		730: [
			0,
			.69444,
			0,
			0,
			.86944
		],
		732: [
			0,
			.69444,
			0,
			0,
			.575
		],
		733: [
			0,
			.69444,
			0,
			0,
			.575
		],
		915: [
			0,
			.68611,
			0,
			0,
			.69166
		],
		916: [
			0,
			.68611,
			0,
			0,
			.95833
		],
		920: [
			0,
			.68611,
			0,
			0,
			.89444
		],
		923: [
			0,
			.68611,
			0,
			0,
			.80555
		],
		926: [
			0,
			.68611,
			0,
			0,
			.76666
		],
		928: [
			0,
			.68611,
			0,
			0,
			.9
		],
		931: [
			0,
			.68611,
			0,
			0,
			.83055
		],
		933: [
			0,
			.68611,
			0,
			0,
			.89444
		],
		934: [
			0,
			.68611,
			0,
			0,
			.83055
		],
		936: [
			0,
			.68611,
			0,
			0,
			.89444
		],
		937: [
			0,
			.68611,
			0,
			0,
			.83055
		],
		8211: [
			0,
			.44444,
			.03194,
			0,
			.575
		],
		8212: [
			0,
			.44444,
			.03194,
			0,
			1.14999
		],
		8216: [
			0,
			.69444,
			0,
			0,
			.31944
		],
		8217: [
			0,
			.69444,
			0,
			0,
			.31944
		],
		8220: [
			0,
			.69444,
			0,
			0,
			.60278
		],
		8221: [
			0,
			.69444,
			0,
			0,
			.60278
		],
		8224: [
			.19444,
			.69444,
			0,
			0,
			.51111
		],
		8225: [
			.19444,
			.69444,
			0,
			0,
			.51111
		],
		8242: [
			0,
			.55556,
			0,
			0,
			.34444
		],
		8407: [
			0,
			.72444,
			.15486,
			0,
			.575
		],
		8463: [
			0,
			.69444,
			0,
			0,
			.66759
		],
		8465: [
			0,
			.69444,
			0,
			0,
			.83055
		],
		8467: [
			0,
			.69444,
			0,
			0,
			.47361
		],
		8472: [
			.19444,
			.44444,
			0,
			0,
			.74027
		],
		8476: [
			0,
			.69444,
			0,
			0,
			.83055
		],
		8501: [
			0,
			.69444,
			0,
			0,
			.70277
		],
		8592: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8593: [
			.19444,
			.69444,
			0,
			0,
			.575
		],
		8594: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8595: [
			.19444,
			.69444,
			0,
			0,
			.575
		],
		8596: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8597: [
			.25,
			.75,
			0,
			0,
			.575
		],
		8598: [
			.19444,
			.69444,
			0,
			0,
			1.14999
		],
		8599: [
			.19444,
			.69444,
			0,
			0,
			1.14999
		],
		8600: [
			.19444,
			.69444,
			0,
			0,
			1.14999
		],
		8601: [
			.19444,
			.69444,
			0,
			0,
			1.14999
		],
		8636: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8637: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8640: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8641: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8656: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8657: [
			.19444,
			.69444,
			0,
			0,
			.70277
		],
		8658: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8659: [
			.19444,
			.69444,
			0,
			0,
			.70277
		],
		8660: [
			-.10889,
			.39111,
			0,
			0,
			1.14999
		],
		8661: [
			.25,
			.75,
			0,
			0,
			.70277
		],
		8704: [
			0,
			.69444,
			0,
			0,
			.63889
		],
		8706: [
			0,
			.69444,
			.06389,
			0,
			.62847
		],
		8707: [
			0,
			.69444,
			0,
			0,
			.63889
		],
		8709: [
			.05556,
			.75,
			0,
			0,
			.575
		],
		8711: [
			0,
			.68611,
			0,
			0,
			.95833
		],
		8712: [
			.08556,
			.58556,
			0,
			0,
			.76666
		],
		8715: [
			.08556,
			.58556,
			0,
			0,
			.76666
		],
		8722: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		8723: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		8725: [
			.25,
			.75,
			0,
			0,
			.575
		],
		8726: [
			.25,
			.75,
			0,
			0,
			.575
		],
		8727: [
			-.02778,
			.47222,
			0,
			0,
			.575
		],
		8728: [
			-.02639,
			.47361,
			0,
			0,
			.575
		],
		8729: [
			-.02639,
			.47361,
			0,
			0,
			.575
		],
		8730: [
			.18,
			.82,
			0,
			0,
			.95833
		],
		8733: [
			0,
			.44444,
			0,
			0,
			.89444
		],
		8734: [
			0,
			.44444,
			0,
			0,
			1.14999
		],
		8736: [
			0,
			.69224,
			0,
			0,
			.72222
		],
		8739: [
			.25,
			.75,
			0,
			0,
			.31944
		],
		8741: [
			.25,
			.75,
			0,
			0,
			.575
		],
		8743: [
			0,
			.55556,
			0,
			0,
			.76666
		],
		8744: [
			0,
			.55556,
			0,
			0,
			.76666
		],
		8745: [
			0,
			.55556,
			0,
			0,
			.76666
		],
		8746: [
			0,
			.55556,
			0,
			0,
			.76666
		],
		8747: [
			.19444,
			.69444,
			.12778,
			0,
			.56875
		],
		8764: [
			-.10889,
			.39111,
			0,
			0,
			.89444
		],
		8768: [
			.19444,
			.69444,
			0,
			0,
			.31944
		],
		8771: [
			.00222,
			.50222,
			0,
			0,
			.89444
		],
		8773: [
			.027,
			.638,
			0,
			0,
			.894
		],
		8776: [
			.02444,
			.52444,
			0,
			0,
			.89444
		],
		8781: [
			.00222,
			.50222,
			0,
			0,
			.89444
		],
		8801: [
			.00222,
			.50222,
			0,
			0,
			.89444
		],
		8804: [
			.19667,
			.69667,
			0,
			0,
			.89444
		],
		8805: [
			.19667,
			.69667,
			0,
			0,
			.89444
		],
		8810: [
			.08556,
			.58556,
			0,
			0,
			1.14999
		],
		8811: [
			.08556,
			.58556,
			0,
			0,
			1.14999
		],
		8826: [
			.08556,
			.58556,
			0,
			0,
			.89444
		],
		8827: [
			.08556,
			.58556,
			0,
			0,
			.89444
		],
		8834: [
			.08556,
			.58556,
			0,
			0,
			.89444
		],
		8835: [
			.08556,
			.58556,
			0,
			0,
			.89444
		],
		8838: [
			.19667,
			.69667,
			0,
			0,
			.89444
		],
		8839: [
			.19667,
			.69667,
			0,
			0,
			.89444
		],
		8846: [
			0,
			.55556,
			0,
			0,
			.76666
		],
		8849: [
			.19667,
			.69667,
			0,
			0,
			.89444
		],
		8850: [
			.19667,
			.69667,
			0,
			0,
			.89444
		],
		8851: [
			0,
			.55556,
			0,
			0,
			.76666
		],
		8852: [
			0,
			.55556,
			0,
			0,
			.76666
		],
		8853: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		8854: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		8855: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		8856: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		8857: [
			.13333,
			.63333,
			0,
			0,
			.89444
		],
		8866: [
			0,
			.69444,
			0,
			0,
			.70277
		],
		8867: [
			0,
			.69444,
			0,
			0,
			.70277
		],
		8868: [
			0,
			.69444,
			0,
			0,
			.89444
		],
		8869: [
			0,
			.69444,
			0,
			0,
			.89444
		],
		8900: [
			-.02639,
			.47361,
			0,
			0,
			.575
		],
		8901: [
			-.02639,
			.47361,
			0,
			0,
			.31944
		],
		8902: [
			-.02778,
			.47222,
			0,
			0,
			.575
		],
		8968: [
			.25,
			.75,
			0,
			0,
			.51111
		],
		8969: [
			.25,
			.75,
			0,
			0,
			.51111
		],
		8970: [
			.25,
			.75,
			0,
			0,
			.51111
		],
		8971: [
			.25,
			.75,
			0,
			0,
			.51111
		],
		8994: [
			-.13889,
			.36111,
			0,
			0,
			1.14999
		],
		8995: [
			-.13889,
			.36111,
			0,
			0,
			1.14999
		],
		9651: [
			.19444,
			.69444,
			0,
			0,
			1.02222
		],
		9657: [
			-.02778,
			.47222,
			0,
			0,
			.575
		],
		9661: [
			.19444,
			.69444,
			0,
			0,
			1.02222
		],
		9667: [
			-.02778,
			.47222,
			0,
			0,
			.575
		],
		9711: [
			.19444,
			.69444,
			0,
			0,
			1.14999
		],
		9824: [
			.12963,
			.69444,
			0,
			0,
			.89444
		],
		9825: [
			.12963,
			.69444,
			0,
			0,
			.89444
		],
		9826: [
			.12963,
			.69444,
			0,
			0,
			.89444
		],
		9827: [
			.12963,
			.69444,
			0,
			0,
			.89444
		],
		9837: [
			0,
			.75,
			0,
			0,
			.44722
		],
		9838: [
			.19444,
			.69444,
			0,
			0,
			.44722
		],
		9839: [
			.19444,
			.69444,
			0,
			0,
			.44722
		],
		10216: [
			.25,
			.75,
			0,
			0,
			.44722
		],
		10217: [
			.25,
			.75,
			0,
			0,
			.44722
		],
		10815: [
			0,
			.68611,
			0,
			0,
			.9
		],
		10927: [
			.19667,
			.69667,
			0,
			0,
			.89444
		],
		10928: [
			.19667,
			.69667,
			0,
			0,
			.89444
		],
		57376: [
			.19444,
			.69444,
			0,
			0,
			0
		]
	},
	"Main-BoldItalic": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		33: [
			0,
			.69444,
			.11417,
			0,
			.38611
		],
		34: [
			0,
			.69444,
			.07939,
			0,
			.62055
		],
		35: [
			.19444,
			.69444,
			.06833,
			0,
			.94444
		],
		37: [
			.05556,
			.75,
			.12861,
			0,
			.94444
		],
		38: [
			0,
			.69444,
			.08528,
			0,
			.88555
		],
		39: [
			0,
			.69444,
			.12945,
			0,
			.35555
		],
		40: [
			.25,
			.75,
			.15806,
			0,
			.47333
		],
		41: [
			.25,
			.75,
			.03306,
			0,
			.47333
		],
		42: [
			0,
			.75,
			.14333,
			0,
			.59111
		],
		43: [
			.10333,
			.60333,
			.03306,
			0,
			.88555
		],
		44: [
			.19444,
			.14722,
			0,
			0,
			.35555
		],
		45: [
			0,
			.44444,
			.02611,
			0,
			.41444
		],
		46: [
			0,
			.14722,
			0,
			0,
			.35555
		],
		47: [
			.25,
			.75,
			.15806,
			0,
			.59111
		],
		48: [
			0,
			.64444,
			.13167,
			0,
			.59111
		],
		49: [
			0,
			.64444,
			.13167,
			0,
			.59111
		],
		50: [
			0,
			.64444,
			.13167,
			0,
			.59111
		],
		51: [
			0,
			.64444,
			.13167,
			0,
			.59111
		],
		52: [
			.19444,
			.64444,
			.13167,
			0,
			.59111
		],
		53: [
			0,
			.64444,
			.13167,
			0,
			.59111
		],
		54: [
			0,
			.64444,
			.13167,
			0,
			.59111
		],
		55: [
			.19444,
			.64444,
			.13167,
			0,
			.59111
		],
		56: [
			0,
			.64444,
			.13167,
			0,
			.59111
		],
		57: [
			0,
			.64444,
			.13167,
			0,
			.59111
		],
		58: [
			0,
			.44444,
			.06695,
			0,
			.35555
		],
		59: [
			.19444,
			.44444,
			.06695,
			0,
			.35555
		],
		61: [
			-.10889,
			.39111,
			.06833,
			0,
			.88555
		],
		63: [
			0,
			.69444,
			.11472,
			0,
			.59111
		],
		64: [
			0,
			.69444,
			.09208,
			0,
			.88555
		],
		65: [
			0,
			.68611,
			0,
			0,
			.86555
		],
		66: [
			0,
			.68611,
			.0992,
			0,
			.81666
		],
		67: [
			0,
			.68611,
			.14208,
			0,
			.82666
		],
		68: [
			0,
			.68611,
			.09062,
			0,
			.87555
		],
		69: [
			0,
			.68611,
			.11431,
			0,
			.75666
		],
		70: [
			0,
			.68611,
			.12903,
			0,
			.72722
		],
		71: [
			0,
			.68611,
			.07347,
			0,
			.89527
		],
		72: [
			0,
			.68611,
			.17208,
			0,
			.8961
		],
		73: [
			0,
			.68611,
			.15681,
			0,
			.47166
		],
		74: [
			0,
			.68611,
			.145,
			0,
			.61055
		],
		75: [
			0,
			.68611,
			.14208,
			0,
			.89499
		],
		76: [
			0,
			.68611,
			0,
			0,
			.69777
		],
		77: [
			0,
			.68611,
			.17208,
			0,
			1.07277
		],
		78: [
			0,
			.68611,
			.17208,
			0,
			.8961
		],
		79: [
			0,
			.68611,
			.09062,
			0,
			.85499
		],
		80: [
			0,
			.68611,
			.0992,
			0,
			.78721
		],
		81: [
			.19444,
			.68611,
			.09062,
			0,
			.85499
		],
		82: [
			0,
			.68611,
			.02559,
			0,
			.85944
		],
		83: [
			0,
			.68611,
			.11264,
			0,
			.64999
		],
		84: [
			0,
			.68611,
			.12903,
			0,
			.7961
		],
		85: [
			0,
			.68611,
			.17208,
			0,
			.88083
		],
		86: [
			0,
			.68611,
			.18625,
			0,
			.86555
		],
		87: [
			0,
			.68611,
			.18625,
			0,
			1.15999
		],
		88: [
			0,
			.68611,
			.15681,
			0,
			.86555
		],
		89: [
			0,
			.68611,
			.19803,
			0,
			.86555
		],
		90: [
			0,
			.68611,
			.14208,
			0,
			.70888
		],
		91: [
			.25,
			.75,
			.1875,
			0,
			.35611
		],
		93: [
			.25,
			.75,
			.09972,
			0,
			.35611
		],
		94: [
			0,
			.69444,
			.06709,
			0,
			.59111
		],
		95: [
			.31,
			.13444,
			.09811,
			0,
			.59111
		],
		97: [
			0,
			.44444,
			.09426,
			0,
			.59111
		],
		98: [
			0,
			.69444,
			.07861,
			0,
			.53222
		],
		99: [
			0,
			.44444,
			.05222,
			0,
			.53222
		],
		100: [
			0,
			.69444,
			.10861,
			0,
			.59111
		],
		101: [
			0,
			.44444,
			.085,
			0,
			.53222
		],
		102: [
			.19444,
			.69444,
			.21778,
			0,
			.4
		],
		103: [
			.19444,
			.44444,
			.105,
			0,
			.53222
		],
		104: [
			0,
			.69444,
			.09426,
			0,
			.59111
		],
		105: [
			0,
			.69326,
			.11387,
			0,
			.35555
		],
		106: [
			.19444,
			.69326,
			.1672,
			0,
			.35555
		],
		107: [
			0,
			.69444,
			.11111,
			0,
			.53222
		],
		108: [
			0,
			.69444,
			.10861,
			0,
			.29666
		],
		109: [
			0,
			.44444,
			.09426,
			0,
			.94444
		],
		110: [
			0,
			.44444,
			.09426,
			0,
			.64999
		],
		111: [
			0,
			.44444,
			.07861,
			0,
			.59111
		],
		112: [
			.19444,
			.44444,
			.07861,
			0,
			.59111
		],
		113: [
			.19444,
			.44444,
			.105,
			0,
			.53222
		],
		114: [
			0,
			.44444,
			.11111,
			0,
			.50167
		],
		115: [
			0,
			.44444,
			.08167,
			0,
			.48694
		],
		116: [
			0,
			.63492,
			.09639,
			0,
			.385
		],
		117: [
			0,
			.44444,
			.09426,
			0,
			.62055
		],
		118: [
			0,
			.44444,
			.11111,
			0,
			.53222
		],
		119: [
			0,
			.44444,
			.11111,
			0,
			.76777
		],
		120: [
			0,
			.44444,
			.12583,
			0,
			.56055
		],
		121: [
			.19444,
			.44444,
			.105,
			0,
			.56166
		],
		122: [
			0,
			.44444,
			.13889,
			0,
			.49055
		],
		126: [
			.35,
			.34444,
			.11472,
			0,
			.59111
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		168: [
			0,
			.69444,
			.11473,
			0,
			.59111
		],
		176: [
			0,
			.69444,
			0,
			0,
			.94888
		],
		184: [
			.17014,
			0,
			0,
			0,
			.53222
		],
		198: [
			0,
			.68611,
			.11431,
			0,
			1.02277
		],
		216: [
			.04861,
			.73472,
			.09062,
			0,
			.88555
		],
		223: [
			.19444,
			.69444,
			.09736,
			0,
			.665
		],
		230: [
			0,
			.44444,
			.085,
			0,
			.82666
		],
		248: [
			.09722,
			.54167,
			.09458,
			0,
			.59111
		],
		305: [
			0,
			.44444,
			.09426,
			0,
			.35555
		],
		338: [
			0,
			.68611,
			.11431,
			0,
			1.14054
		],
		339: [
			0,
			.44444,
			.085,
			0,
			.82666
		],
		567: [
			.19444,
			.44444,
			.04611,
			0,
			.385
		],
		710: [
			0,
			.69444,
			.06709,
			0,
			.59111
		],
		711: [
			0,
			.63194,
			.08271,
			0,
			.59111
		],
		713: [
			0,
			.59444,
			.10444,
			0,
			.59111
		],
		714: [
			0,
			.69444,
			.08528,
			0,
			.59111
		],
		715: [
			0,
			.69444,
			0,
			0,
			.59111
		],
		728: [
			0,
			.69444,
			.10333,
			0,
			.59111
		],
		729: [
			0,
			.69444,
			.12945,
			0,
			.35555
		],
		730: [
			0,
			.69444,
			0,
			0,
			.94888
		],
		732: [
			0,
			.69444,
			.11472,
			0,
			.59111
		],
		733: [
			0,
			.69444,
			.11472,
			0,
			.59111
		],
		915: [
			0,
			.68611,
			.12903,
			0,
			.69777
		],
		916: [
			0,
			.68611,
			0,
			0,
			.94444
		],
		920: [
			0,
			.68611,
			.09062,
			0,
			.88555
		],
		923: [
			0,
			.68611,
			0,
			0,
			.80666
		],
		926: [
			0,
			.68611,
			.15092,
			0,
			.76777
		],
		928: [
			0,
			.68611,
			.17208,
			0,
			.8961
		],
		931: [
			0,
			.68611,
			.11431,
			0,
			.82666
		],
		933: [
			0,
			.68611,
			.10778,
			0,
			.88555
		],
		934: [
			0,
			.68611,
			.05632,
			0,
			.82666
		],
		936: [
			0,
			.68611,
			.10778,
			0,
			.88555
		],
		937: [
			0,
			.68611,
			.0992,
			0,
			.82666
		],
		8211: [
			0,
			.44444,
			.09811,
			0,
			.59111
		],
		8212: [
			0,
			.44444,
			.09811,
			0,
			1.18221
		],
		8216: [
			0,
			.69444,
			.12945,
			0,
			.35555
		],
		8217: [
			0,
			.69444,
			.12945,
			0,
			.35555
		],
		8220: [
			0,
			.69444,
			.16772,
			0,
			.62055
		],
		8221: [
			0,
			.69444,
			.07939,
			0,
			.62055
		]
	},
	"Main-Italic": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		33: [
			0,
			.69444,
			.12417,
			0,
			.30667
		],
		34: [
			0,
			.69444,
			.06961,
			0,
			.51444
		],
		35: [
			.19444,
			.69444,
			.06616,
			0,
			.81777
		],
		37: [
			.05556,
			.75,
			.13639,
			0,
			.81777
		],
		38: [
			0,
			.69444,
			.09694,
			0,
			.76666
		],
		39: [
			0,
			.69444,
			.12417,
			0,
			.30667
		],
		40: [
			.25,
			.75,
			.16194,
			0,
			.40889
		],
		41: [
			.25,
			.75,
			.03694,
			0,
			.40889
		],
		42: [
			0,
			.75,
			.14917,
			0,
			.51111
		],
		43: [
			.05667,
			.56167,
			.03694,
			0,
			.76666
		],
		44: [
			.19444,
			.10556,
			0,
			0,
			.30667
		],
		45: [
			0,
			.43056,
			.02826,
			0,
			.35778
		],
		46: [
			0,
			.10556,
			0,
			0,
			.30667
		],
		47: [
			.25,
			.75,
			.16194,
			0,
			.51111
		],
		48: [
			0,
			.64444,
			.13556,
			0,
			.51111
		],
		49: [
			0,
			.64444,
			.13556,
			0,
			.51111
		],
		50: [
			0,
			.64444,
			.13556,
			0,
			.51111
		],
		51: [
			0,
			.64444,
			.13556,
			0,
			.51111
		],
		52: [
			.19444,
			.64444,
			.13556,
			0,
			.51111
		],
		53: [
			0,
			.64444,
			.13556,
			0,
			.51111
		],
		54: [
			0,
			.64444,
			.13556,
			0,
			.51111
		],
		55: [
			.19444,
			.64444,
			.13556,
			0,
			.51111
		],
		56: [
			0,
			.64444,
			.13556,
			0,
			.51111
		],
		57: [
			0,
			.64444,
			.13556,
			0,
			.51111
		],
		58: [
			0,
			.43056,
			.0582,
			0,
			.30667
		],
		59: [
			.19444,
			.43056,
			.0582,
			0,
			.30667
		],
		61: [
			-.13313,
			.36687,
			.06616,
			0,
			.76666
		],
		63: [
			0,
			.69444,
			.1225,
			0,
			.51111
		],
		64: [
			0,
			.69444,
			.09597,
			0,
			.76666
		],
		65: [
			0,
			.68333,
			0,
			0,
			.74333
		],
		66: [
			0,
			.68333,
			.10257,
			0,
			.70389
		],
		67: [
			0,
			.68333,
			.14528,
			0,
			.71555
		],
		68: [
			0,
			.68333,
			.09403,
			0,
			.755
		],
		69: [
			0,
			.68333,
			.12028,
			0,
			.67833
		],
		70: [
			0,
			.68333,
			.13305,
			0,
			.65277
		],
		71: [
			0,
			.68333,
			.08722,
			0,
			.77361
		],
		72: [
			0,
			.68333,
			.16389,
			0,
			.74333
		],
		73: [
			0,
			.68333,
			.15806,
			0,
			.38555
		],
		74: [
			0,
			.68333,
			.14028,
			0,
			.525
		],
		75: [
			0,
			.68333,
			.14528,
			0,
			.76888
		],
		76: [
			0,
			.68333,
			0,
			0,
			.62722
		],
		77: [
			0,
			.68333,
			.16389,
			0,
			.89666
		],
		78: [
			0,
			.68333,
			.16389,
			0,
			.74333
		],
		79: [
			0,
			.68333,
			.09403,
			0,
			.76666
		],
		80: [
			0,
			.68333,
			.10257,
			0,
			.67833
		],
		81: [
			.19444,
			.68333,
			.09403,
			0,
			.76666
		],
		82: [
			0,
			.68333,
			.03868,
			0,
			.72944
		],
		83: [
			0,
			.68333,
			.11972,
			0,
			.56222
		],
		84: [
			0,
			.68333,
			.13305,
			0,
			.71555
		],
		85: [
			0,
			.68333,
			.16389,
			0,
			.74333
		],
		86: [
			0,
			.68333,
			.18361,
			0,
			.74333
		],
		87: [
			0,
			.68333,
			.18361,
			0,
			.99888
		],
		88: [
			0,
			.68333,
			.15806,
			0,
			.74333
		],
		89: [
			0,
			.68333,
			.19383,
			0,
			.74333
		],
		90: [
			0,
			.68333,
			.14528,
			0,
			.61333
		],
		91: [
			.25,
			.75,
			.1875,
			0,
			.30667
		],
		93: [
			.25,
			.75,
			.10528,
			0,
			.30667
		],
		94: [
			0,
			.69444,
			.06646,
			0,
			.51111
		],
		95: [
			.31,
			.12056,
			.09208,
			0,
			.51111
		],
		97: [
			0,
			.43056,
			.07671,
			0,
			.51111
		],
		98: [
			0,
			.69444,
			.06312,
			0,
			.46
		],
		99: [
			0,
			.43056,
			.05653,
			0,
			.46
		],
		100: [
			0,
			.69444,
			.10333,
			0,
			.51111
		],
		101: [
			0,
			.43056,
			.07514,
			0,
			.46
		],
		102: [
			.19444,
			.69444,
			.21194,
			0,
			.30667
		],
		103: [
			.19444,
			.43056,
			.08847,
			0,
			.46
		],
		104: [
			0,
			.69444,
			.07671,
			0,
			.51111
		],
		105: [
			0,
			.65536,
			.1019,
			0,
			.30667
		],
		106: [
			.19444,
			.65536,
			.14467,
			0,
			.30667
		],
		107: [
			0,
			.69444,
			.10764,
			0,
			.46
		],
		108: [
			0,
			.69444,
			.10333,
			0,
			.25555
		],
		109: [
			0,
			.43056,
			.07671,
			0,
			.81777
		],
		110: [
			0,
			.43056,
			.07671,
			0,
			.56222
		],
		111: [
			0,
			.43056,
			.06312,
			0,
			.51111
		],
		112: [
			.19444,
			.43056,
			.06312,
			0,
			.51111
		],
		113: [
			.19444,
			.43056,
			.08847,
			0,
			.46
		],
		114: [
			0,
			.43056,
			.10764,
			0,
			.42166
		],
		115: [
			0,
			.43056,
			.08208,
			0,
			.40889
		],
		116: [
			0,
			.61508,
			.09486,
			0,
			.33222
		],
		117: [
			0,
			.43056,
			.07671,
			0,
			.53666
		],
		118: [
			0,
			.43056,
			.10764,
			0,
			.46
		],
		119: [
			0,
			.43056,
			.10764,
			0,
			.66444
		],
		120: [
			0,
			.43056,
			.12042,
			0,
			.46389
		],
		121: [
			.19444,
			.43056,
			.08847,
			0,
			.48555
		],
		122: [
			0,
			.43056,
			.12292,
			0,
			.40889
		],
		126: [
			.35,
			.31786,
			.11585,
			0,
			.51111
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		168: [
			0,
			.66786,
			.10474,
			0,
			.51111
		],
		176: [
			0,
			.69444,
			0,
			0,
			.83129
		],
		184: [
			.17014,
			0,
			0,
			0,
			.46
		],
		198: [
			0,
			.68333,
			.12028,
			0,
			.88277
		],
		216: [
			.04861,
			.73194,
			.09403,
			0,
			.76666
		],
		223: [
			.19444,
			.69444,
			.10514,
			0,
			.53666
		],
		230: [
			0,
			.43056,
			.07514,
			0,
			.71555
		],
		248: [
			.09722,
			.52778,
			.09194,
			0,
			.51111
		],
		338: [
			0,
			.68333,
			.12028,
			0,
			.98499
		],
		339: [
			0,
			.43056,
			.07514,
			0,
			.71555
		],
		710: [
			0,
			.69444,
			.06646,
			0,
			.51111
		],
		711: [
			0,
			.62847,
			.08295,
			0,
			.51111
		],
		713: [
			0,
			.56167,
			.10333,
			0,
			.51111
		],
		714: [
			0,
			.69444,
			.09694,
			0,
			.51111
		],
		715: [
			0,
			.69444,
			0,
			0,
			.51111
		],
		728: [
			0,
			.69444,
			.10806,
			0,
			.51111
		],
		729: [
			0,
			.66786,
			.11752,
			0,
			.30667
		],
		730: [
			0,
			.69444,
			0,
			0,
			.83129
		],
		732: [
			0,
			.66786,
			.11585,
			0,
			.51111
		],
		733: [
			0,
			.69444,
			.1225,
			0,
			.51111
		],
		915: [
			0,
			.68333,
			.13305,
			0,
			.62722
		],
		916: [
			0,
			.68333,
			0,
			0,
			.81777
		],
		920: [
			0,
			.68333,
			.09403,
			0,
			.76666
		],
		923: [
			0,
			.68333,
			0,
			0,
			.69222
		],
		926: [
			0,
			.68333,
			.15294,
			0,
			.66444
		],
		928: [
			0,
			.68333,
			.16389,
			0,
			.74333
		],
		931: [
			0,
			.68333,
			.12028,
			0,
			.71555
		],
		933: [
			0,
			.68333,
			.11111,
			0,
			.76666
		],
		934: [
			0,
			.68333,
			.05986,
			0,
			.71555
		],
		936: [
			0,
			.68333,
			.11111,
			0,
			.76666
		],
		937: [
			0,
			.68333,
			.10257,
			0,
			.71555
		],
		8211: [
			0,
			.43056,
			.09208,
			0,
			.51111
		],
		8212: [
			0,
			.43056,
			.09208,
			0,
			1.02222
		],
		8216: [
			0,
			.69444,
			.12417,
			0,
			.30667
		],
		8217: [
			0,
			.69444,
			.12417,
			0,
			.30667
		],
		8220: [
			0,
			.69444,
			.1685,
			0,
			.51444
		],
		8221: [
			0,
			.69444,
			.06961,
			0,
			.51444
		],
		8463: [
			0,
			.68889,
			0,
			0,
			.54028
		]
	},
	"Main-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		33: [
			0,
			.69444,
			0,
			0,
			.27778
		],
		34: [
			0,
			.69444,
			0,
			0,
			.5
		],
		35: [
			.19444,
			.69444,
			0,
			0,
			.83334
		],
		36: [
			.05556,
			.75,
			0,
			0,
			.5
		],
		37: [
			.05556,
			.75,
			0,
			0,
			.83334
		],
		38: [
			0,
			.69444,
			0,
			0,
			.77778
		],
		39: [
			0,
			.69444,
			0,
			0,
			.27778
		],
		40: [
			.25,
			.75,
			0,
			0,
			.38889
		],
		41: [
			.25,
			.75,
			0,
			0,
			.38889
		],
		42: [
			0,
			.75,
			0,
			0,
			.5
		],
		43: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		44: [
			.19444,
			.10556,
			0,
			0,
			.27778
		],
		45: [
			0,
			.43056,
			0,
			0,
			.33333
		],
		46: [
			0,
			.10556,
			0,
			0,
			.27778
		],
		47: [
			.25,
			.75,
			0,
			0,
			.5
		],
		48: [
			0,
			.64444,
			0,
			0,
			.5
		],
		49: [
			0,
			.64444,
			0,
			0,
			.5
		],
		50: [
			0,
			.64444,
			0,
			0,
			.5
		],
		51: [
			0,
			.64444,
			0,
			0,
			.5
		],
		52: [
			0,
			.64444,
			0,
			0,
			.5
		],
		53: [
			0,
			.64444,
			0,
			0,
			.5
		],
		54: [
			0,
			.64444,
			0,
			0,
			.5
		],
		55: [
			0,
			.64444,
			0,
			0,
			.5
		],
		56: [
			0,
			.64444,
			0,
			0,
			.5
		],
		57: [
			0,
			.64444,
			0,
			0,
			.5
		],
		58: [
			0,
			.43056,
			0,
			0,
			.27778
		],
		59: [
			.19444,
			.43056,
			0,
			0,
			.27778
		],
		60: [
			.0391,
			.5391,
			0,
			0,
			.77778
		],
		61: [
			-.13313,
			.36687,
			0,
			0,
			.77778
		],
		62: [
			.0391,
			.5391,
			0,
			0,
			.77778
		],
		63: [
			0,
			.69444,
			0,
			0,
			.47222
		],
		64: [
			0,
			.69444,
			0,
			0,
			.77778
		],
		65: [
			0,
			.68333,
			0,
			0,
			.75
		],
		66: [
			0,
			.68333,
			0,
			0,
			.70834
		],
		67: [
			0,
			.68333,
			0,
			0,
			.72222
		],
		68: [
			0,
			.68333,
			0,
			0,
			.76389
		],
		69: [
			0,
			.68333,
			0,
			0,
			.68056
		],
		70: [
			0,
			.68333,
			0,
			0,
			.65278
		],
		71: [
			0,
			.68333,
			0,
			0,
			.78472
		],
		72: [
			0,
			.68333,
			0,
			0,
			.75
		],
		73: [
			0,
			.68333,
			0,
			0,
			.36111
		],
		74: [
			0,
			.68333,
			0,
			0,
			.51389
		],
		75: [
			0,
			.68333,
			0,
			0,
			.77778
		],
		76: [
			0,
			.68333,
			0,
			0,
			.625
		],
		77: [
			0,
			.68333,
			0,
			0,
			.91667
		],
		78: [
			0,
			.68333,
			0,
			0,
			.75
		],
		79: [
			0,
			.68333,
			0,
			0,
			.77778
		],
		80: [
			0,
			.68333,
			0,
			0,
			.68056
		],
		81: [
			.19444,
			.68333,
			0,
			0,
			.77778
		],
		82: [
			0,
			.68333,
			0,
			0,
			.73611
		],
		83: [
			0,
			.68333,
			0,
			0,
			.55556
		],
		84: [
			0,
			.68333,
			0,
			0,
			.72222
		],
		85: [
			0,
			.68333,
			0,
			0,
			.75
		],
		86: [
			0,
			.68333,
			.01389,
			0,
			.75
		],
		87: [
			0,
			.68333,
			.01389,
			0,
			1.02778
		],
		88: [
			0,
			.68333,
			0,
			0,
			.75
		],
		89: [
			0,
			.68333,
			.025,
			0,
			.75
		],
		90: [
			0,
			.68333,
			0,
			0,
			.61111
		],
		91: [
			.25,
			.75,
			0,
			0,
			.27778
		],
		92: [
			.25,
			.75,
			0,
			0,
			.5
		],
		93: [
			.25,
			.75,
			0,
			0,
			.27778
		],
		94: [
			0,
			.69444,
			0,
			0,
			.5
		],
		95: [
			.31,
			.12056,
			.02778,
			0,
			.5
		],
		97: [
			0,
			.43056,
			0,
			0,
			.5
		],
		98: [
			0,
			.69444,
			0,
			0,
			.55556
		],
		99: [
			0,
			.43056,
			0,
			0,
			.44445
		],
		100: [
			0,
			.69444,
			0,
			0,
			.55556
		],
		101: [
			0,
			.43056,
			0,
			0,
			.44445
		],
		102: [
			0,
			.69444,
			.07778,
			0,
			.30556
		],
		103: [
			.19444,
			.43056,
			.01389,
			0,
			.5
		],
		104: [
			0,
			.69444,
			0,
			0,
			.55556
		],
		105: [
			0,
			.66786,
			0,
			0,
			.27778
		],
		106: [
			.19444,
			.66786,
			0,
			0,
			.30556
		],
		107: [
			0,
			.69444,
			0,
			0,
			.52778
		],
		108: [
			0,
			.69444,
			0,
			0,
			.27778
		],
		109: [
			0,
			.43056,
			0,
			0,
			.83334
		],
		110: [
			0,
			.43056,
			0,
			0,
			.55556
		],
		111: [
			0,
			.43056,
			0,
			0,
			.5
		],
		112: [
			.19444,
			.43056,
			0,
			0,
			.55556
		],
		113: [
			.19444,
			.43056,
			0,
			0,
			.52778
		],
		114: [
			0,
			.43056,
			0,
			0,
			.39167
		],
		115: [
			0,
			.43056,
			0,
			0,
			.39445
		],
		116: [
			0,
			.61508,
			0,
			0,
			.38889
		],
		117: [
			0,
			.43056,
			0,
			0,
			.55556
		],
		118: [
			0,
			.43056,
			.01389,
			0,
			.52778
		],
		119: [
			0,
			.43056,
			.01389,
			0,
			.72222
		],
		120: [
			0,
			.43056,
			0,
			0,
			.52778
		],
		121: [
			.19444,
			.43056,
			.01389,
			0,
			.52778
		],
		122: [
			0,
			.43056,
			0,
			0,
			.44445
		],
		123: [
			.25,
			.75,
			0,
			0,
			.5
		],
		124: [
			.25,
			.75,
			0,
			0,
			.27778
		],
		125: [
			.25,
			.75,
			0,
			0,
			.5
		],
		126: [
			.35,
			.31786,
			0,
			0,
			.5
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		163: [
			0,
			.69444,
			0,
			0,
			.76909
		],
		167: [
			.19444,
			.69444,
			0,
			0,
			.44445
		],
		168: [
			0,
			.66786,
			0,
			0,
			.5
		],
		172: [
			0,
			.43056,
			0,
			0,
			.66667
		],
		176: [
			0,
			.69444,
			0,
			0,
			.75
		],
		177: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		182: [
			.19444,
			.69444,
			0,
			0,
			.61111
		],
		184: [
			.17014,
			0,
			0,
			0,
			.44445
		],
		198: [
			0,
			.68333,
			0,
			0,
			.90278
		],
		215: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		216: [
			.04861,
			.73194,
			0,
			0,
			.77778
		],
		223: [
			0,
			.69444,
			0,
			0,
			.5
		],
		230: [
			0,
			.43056,
			0,
			0,
			.72222
		],
		247: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		248: [
			.09722,
			.52778,
			0,
			0,
			.5
		],
		305: [
			0,
			.43056,
			0,
			0,
			.27778
		],
		338: [
			0,
			.68333,
			0,
			0,
			1.01389
		],
		339: [
			0,
			.43056,
			0,
			0,
			.77778
		],
		567: [
			.19444,
			.43056,
			0,
			0,
			.30556
		],
		710: [
			0,
			.69444,
			0,
			0,
			.5
		],
		711: [
			0,
			.62847,
			0,
			0,
			.5
		],
		713: [
			0,
			.56778,
			0,
			0,
			.5
		],
		714: [
			0,
			.69444,
			0,
			0,
			.5
		],
		715: [
			0,
			.69444,
			0,
			0,
			.5
		],
		728: [
			0,
			.69444,
			0,
			0,
			.5
		],
		729: [
			0,
			.66786,
			0,
			0,
			.27778
		],
		730: [
			0,
			.69444,
			0,
			0,
			.75
		],
		732: [
			0,
			.66786,
			0,
			0,
			.5
		],
		733: [
			0,
			.69444,
			0,
			0,
			.5
		],
		915: [
			0,
			.68333,
			0,
			0,
			.625
		],
		916: [
			0,
			.68333,
			0,
			0,
			.83334
		],
		920: [
			0,
			.68333,
			0,
			0,
			.77778
		],
		923: [
			0,
			.68333,
			0,
			0,
			.69445
		],
		926: [
			0,
			.68333,
			0,
			0,
			.66667
		],
		928: [
			0,
			.68333,
			0,
			0,
			.75
		],
		931: [
			0,
			.68333,
			0,
			0,
			.72222
		],
		933: [
			0,
			.68333,
			0,
			0,
			.77778
		],
		934: [
			0,
			.68333,
			0,
			0,
			.72222
		],
		936: [
			0,
			.68333,
			0,
			0,
			.77778
		],
		937: [
			0,
			.68333,
			0,
			0,
			.72222
		],
		8211: [
			0,
			.43056,
			.02778,
			0,
			.5
		],
		8212: [
			0,
			.43056,
			.02778,
			0,
			1
		],
		8216: [
			0,
			.69444,
			0,
			0,
			.27778
		],
		8217: [
			0,
			.69444,
			0,
			0,
			.27778
		],
		8220: [
			0,
			.69444,
			0,
			0,
			.5
		],
		8221: [
			0,
			.69444,
			0,
			0,
			.5
		],
		8224: [
			.19444,
			.69444,
			0,
			0,
			.44445
		],
		8225: [
			.19444,
			.69444,
			0,
			0,
			.44445
		],
		8230: [
			0,
			.123,
			0,
			0,
			1.172
		],
		8242: [
			0,
			.55556,
			0,
			0,
			.275
		],
		8407: [
			0,
			.71444,
			.15382,
			0,
			.5
		],
		8463: [
			0,
			.68889,
			0,
			0,
			.54028
		],
		8465: [
			0,
			.69444,
			0,
			0,
			.72222
		],
		8467: [
			0,
			.69444,
			0,
			.11111,
			.41667
		],
		8472: [
			.19444,
			.43056,
			0,
			.11111,
			.63646
		],
		8476: [
			0,
			.69444,
			0,
			0,
			.72222
		],
		8501: [
			0,
			.69444,
			0,
			0,
			.61111
		],
		8592: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8593: [
			.19444,
			.69444,
			0,
			0,
			.5
		],
		8594: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8595: [
			.19444,
			.69444,
			0,
			0,
			.5
		],
		8596: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8597: [
			.25,
			.75,
			0,
			0,
			.5
		],
		8598: [
			.19444,
			.69444,
			0,
			0,
			1
		],
		8599: [
			.19444,
			.69444,
			0,
			0,
			1
		],
		8600: [
			.19444,
			.69444,
			0,
			0,
			1
		],
		8601: [
			.19444,
			.69444,
			0,
			0,
			1
		],
		8614: [
			.011,
			.511,
			0,
			0,
			1
		],
		8617: [
			.011,
			.511,
			0,
			0,
			1.126
		],
		8618: [
			.011,
			.511,
			0,
			0,
			1.126
		],
		8636: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8637: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8640: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8641: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8652: [
			.011,
			.671,
			0,
			0,
			1
		],
		8656: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8657: [
			.19444,
			.69444,
			0,
			0,
			.61111
		],
		8658: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8659: [
			.19444,
			.69444,
			0,
			0,
			.61111
		],
		8660: [
			-.13313,
			.36687,
			0,
			0,
			1
		],
		8661: [
			.25,
			.75,
			0,
			0,
			.61111
		],
		8704: [
			0,
			.69444,
			0,
			0,
			.55556
		],
		8706: [
			0,
			.69444,
			.05556,
			.08334,
			.5309
		],
		8707: [
			0,
			.69444,
			0,
			0,
			.55556
		],
		8709: [
			.05556,
			.75,
			0,
			0,
			.5
		],
		8711: [
			0,
			.68333,
			0,
			0,
			.83334
		],
		8712: [
			.0391,
			.5391,
			0,
			0,
			.66667
		],
		8715: [
			.0391,
			.5391,
			0,
			0,
			.66667
		],
		8722: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		8723: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		8725: [
			.25,
			.75,
			0,
			0,
			.5
		],
		8726: [
			.25,
			.75,
			0,
			0,
			.5
		],
		8727: [
			-.03472,
			.46528,
			0,
			0,
			.5
		],
		8728: [
			-.05555,
			.44445,
			0,
			0,
			.5
		],
		8729: [
			-.05555,
			.44445,
			0,
			0,
			.5
		],
		8730: [
			.2,
			.8,
			0,
			0,
			.83334
		],
		8733: [
			0,
			.43056,
			0,
			0,
			.77778
		],
		8734: [
			0,
			.43056,
			0,
			0,
			1
		],
		8736: [
			0,
			.69224,
			0,
			0,
			.72222
		],
		8739: [
			.25,
			.75,
			0,
			0,
			.27778
		],
		8741: [
			.25,
			.75,
			0,
			0,
			.5
		],
		8743: [
			0,
			.55556,
			0,
			0,
			.66667
		],
		8744: [
			0,
			.55556,
			0,
			0,
			.66667
		],
		8745: [
			0,
			.55556,
			0,
			0,
			.66667
		],
		8746: [
			0,
			.55556,
			0,
			0,
			.66667
		],
		8747: [
			.19444,
			.69444,
			.11111,
			0,
			.41667
		],
		8764: [
			-.13313,
			.36687,
			0,
			0,
			.77778
		],
		8768: [
			.19444,
			.69444,
			0,
			0,
			.27778
		],
		8771: [
			-.03625,
			.46375,
			0,
			0,
			.77778
		],
		8773: [
			-.022,
			.589,
			0,
			0,
			.778
		],
		8776: [
			-.01688,
			.48312,
			0,
			0,
			.77778
		],
		8781: [
			-.03625,
			.46375,
			0,
			0,
			.77778
		],
		8784: [
			-.133,
			.673,
			0,
			0,
			.778
		],
		8801: [
			-.03625,
			.46375,
			0,
			0,
			.77778
		],
		8804: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		8805: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		8810: [
			.0391,
			.5391,
			0,
			0,
			1
		],
		8811: [
			.0391,
			.5391,
			0,
			0,
			1
		],
		8826: [
			.0391,
			.5391,
			0,
			0,
			.77778
		],
		8827: [
			.0391,
			.5391,
			0,
			0,
			.77778
		],
		8834: [
			.0391,
			.5391,
			0,
			0,
			.77778
		],
		8835: [
			.0391,
			.5391,
			0,
			0,
			.77778
		],
		8838: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		8839: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		8846: [
			0,
			.55556,
			0,
			0,
			.66667
		],
		8849: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		8850: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		8851: [
			0,
			.55556,
			0,
			0,
			.66667
		],
		8852: [
			0,
			.55556,
			0,
			0,
			.66667
		],
		8853: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		8854: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		8855: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		8856: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		8857: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		8866: [
			0,
			.69444,
			0,
			0,
			.61111
		],
		8867: [
			0,
			.69444,
			0,
			0,
			.61111
		],
		8868: [
			0,
			.69444,
			0,
			0,
			.77778
		],
		8869: [
			0,
			.69444,
			0,
			0,
			.77778
		],
		8872: [
			.249,
			.75,
			0,
			0,
			.867
		],
		8900: [
			-.05555,
			.44445,
			0,
			0,
			.5
		],
		8901: [
			-.05555,
			.44445,
			0,
			0,
			.27778
		],
		8902: [
			-.03472,
			.46528,
			0,
			0,
			.5
		],
		8904: [
			.005,
			.505,
			0,
			0,
			.9
		],
		8942: [
			.03,
			.903,
			0,
			0,
			.278
		],
		8943: [
			-.19,
			.313,
			0,
			0,
			1.172
		],
		8945: [
			-.1,
			.823,
			0,
			0,
			1.282
		],
		8968: [
			.25,
			.75,
			0,
			0,
			.44445
		],
		8969: [
			.25,
			.75,
			0,
			0,
			.44445
		],
		8970: [
			.25,
			.75,
			0,
			0,
			.44445
		],
		8971: [
			.25,
			.75,
			0,
			0,
			.44445
		],
		8994: [
			-.14236,
			.35764,
			0,
			0,
			1
		],
		8995: [
			-.14236,
			.35764,
			0,
			0,
			1
		],
		9136: [
			.244,
			.744,
			0,
			0,
			.412
		],
		9137: [
			.244,
			.745,
			0,
			0,
			.412
		],
		9651: [
			.19444,
			.69444,
			0,
			0,
			.88889
		],
		9657: [
			-.03472,
			.46528,
			0,
			0,
			.5
		],
		9661: [
			.19444,
			.69444,
			0,
			0,
			.88889
		],
		9667: [
			-.03472,
			.46528,
			0,
			0,
			.5
		],
		9711: [
			.19444,
			.69444,
			0,
			0,
			1
		],
		9824: [
			.12963,
			.69444,
			0,
			0,
			.77778
		],
		9825: [
			.12963,
			.69444,
			0,
			0,
			.77778
		],
		9826: [
			.12963,
			.69444,
			0,
			0,
			.77778
		],
		9827: [
			.12963,
			.69444,
			0,
			0,
			.77778
		],
		9837: [
			0,
			.75,
			0,
			0,
			.38889
		],
		9838: [
			.19444,
			.69444,
			0,
			0,
			.38889
		],
		9839: [
			.19444,
			.69444,
			0,
			0,
			.38889
		],
		10216: [
			.25,
			.75,
			0,
			0,
			.38889
		],
		10217: [
			.25,
			.75,
			0,
			0,
			.38889
		],
		10222: [
			.244,
			.744,
			0,
			0,
			.412
		],
		10223: [
			.244,
			.745,
			0,
			0,
			.412
		],
		10229: [
			.011,
			.511,
			0,
			0,
			1.609
		],
		10230: [
			.011,
			.511,
			0,
			0,
			1.638
		],
		10231: [
			.011,
			.511,
			0,
			0,
			1.859
		],
		10232: [
			.024,
			.525,
			0,
			0,
			1.609
		],
		10233: [
			.024,
			.525,
			0,
			0,
			1.638
		],
		10234: [
			.024,
			.525,
			0,
			0,
			1.858
		],
		10236: [
			.011,
			.511,
			0,
			0,
			1.638
		],
		10815: [
			0,
			.68333,
			0,
			0,
			.75
		],
		10927: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		10928: [
			.13597,
			.63597,
			0,
			0,
			.77778
		],
		57376: [
			.19444,
			.69444,
			0,
			0,
			0
		]
	},
	"Math-BoldItalic": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		48: [
			0,
			.44444,
			0,
			0,
			.575
		],
		49: [
			0,
			.44444,
			0,
			0,
			.575
		],
		50: [
			0,
			.44444,
			0,
			0,
			.575
		],
		51: [
			.19444,
			.44444,
			0,
			0,
			.575
		],
		52: [
			.19444,
			.44444,
			0,
			0,
			.575
		],
		53: [
			.19444,
			.44444,
			0,
			0,
			.575
		],
		54: [
			0,
			.64444,
			0,
			0,
			.575
		],
		55: [
			.19444,
			.44444,
			0,
			0,
			.575
		],
		56: [
			0,
			.64444,
			0,
			0,
			.575
		],
		57: [
			.19444,
			.44444,
			0,
			0,
			.575
		],
		65: [
			0,
			.68611,
			0,
			0,
			.86944
		],
		66: [
			0,
			.68611,
			.04835,
			0,
			.8664
		],
		67: [
			0,
			.68611,
			.06979,
			0,
			.81694
		],
		68: [
			0,
			.68611,
			.03194,
			0,
			.93812
		],
		69: [
			0,
			.68611,
			.05451,
			0,
			.81007
		],
		70: [
			0,
			.68611,
			.15972,
			0,
			.68889
		],
		71: [
			0,
			.68611,
			0,
			0,
			.88673
		],
		72: [
			0,
			.68611,
			.08229,
			0,
			.98229
		],
		73: [
			0,
			.68611,
			.07778,
			0,
			.51111
		],
		74: [
			0,
			.68611,
			.10069,
			0,
			.63125
		],
		75: [
			0,
			.68611,
			.06979,
			0,
			.97118
		],
		76: [
			0,
			.68611,
			0,
			0,
			.75555
		],
		77: [
			0,
			.68611,
			.11424,
			0,
			1.14201
		],
		78: [
			0,
			.68611,
			.11424,
			0,
			.95034
		],
		79: [
			0,
			.68611,
			.03194,
			0,
			.83666
		],
		80: [
			0,
			.68611,
			.15972,
			0,
			.72309
		],
		81: [
			.19444,
			.68611,
			0,
			0,
			.86861
		],
		82: [
			0,
			.68611,
			.00421,
			0,
			.87235
		],
		83: [
			0,
			.68611,
			.05382,
			0,
			.69271
		],
		84: [
			0,
			.68611,
			.15972,
			0,
			.63663
		],
		85: [
			0,
			.68611,
			.11424,
			0,
			.80027
		],
		86: [
			0,
			.68611,
			.25555,
			0,
			.67778
		],
		87: [
			0,
			.68611,
			.15972,
			0,
			1.09305
		],
		88: [
			0,
			.68611,
			.07778,
			0,
			.94722
		],
		89: [
			0,
			.68611,
			.25555,
			0,
			.67458
		],
		90: [
			0,
			.68611,
			.06979,
			0,
			.77257
		],
		97: [
			0,
			.44444,
			0,
			0,
			.63287
		],
		98: [
			0,
			.69444,
			0,
			0,
			.52083
		],
		99: [
			0,
			.44444,
			0,
			0,
			.51342
		],
		100: [
			0,
			.69444,
			0,
			0,
			.60972
		],
		101: [
			0,
			.44444,
			0,
			0,
			.55361
		],
		102: [
			.19444,
			.69444,
			.11042,
			0,
			.56806
		],
		103: [
			.19444,
			.44444,
			.03704,
			0,
			.5449
		],
		104: [
			0,
			.69444,
			0,
			0,
			.66759
		],
		105: [
			0,
			.69326,
			0,
			0,
			.4048
		],
		106: [
			.19444,
			.69326,
			.0622,
			0,
			.47083
		],
		107: [
			0,
			.69444,
			.01852,
			0,
			.6037
		],
		108: [
			0,
			.69444,
			.0088,
			0,
			.34815
		],
		109: [
			0,
			.44444,
			0,
			0,
			1.0324
		],
		110: [
			0,
			.44444,
			0,
			0,
			.71296
		],
		111: [
			0,
			.44444,
			0,
			0,
			.58472
		],
		112: [
			.19444,
			.44444,
			0,
			0,
			.60092
		],
		113: [
			.19444,
			.44444,
			.03704,
			0,
			.54213
		],
		114: [
			0,
			.44444,
			.03194,
			0,
			.5287
		],
		115: [
			0,
			.44444,
			0,
			0,
			.53125
		],
		116: [
			0,
			.63492,
			0,
			0,
			.41528
		],
		117: [
			0,
			.44444,
			0,
			0,
			.68102
		],
		118: [
			0,
			.44444,
			.03704,
			0,
			.56666
		],
		119: [
			0,
			.44444,
			.02778,
			0,
			.83148
		],
		120: [
			0,
			.44444,
			0,
			0,
			.65903
		],
		121: [
			.19444,
			.44444,
			.03704,
			0,
			.59028
		],
		122: [
			0,
			.44444,
			.04213,
			0,
			.55509
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		915: [
			0,
			.68611,
			.15972,
			0,
			.65694
		],
		916: [
			0,
			.68611,
			0,
			0,
			.95833
		],
		920: [
			0,
			.68611,
			.03194,
			0,
			.86722
		],
		923: [
			0,
			.68611,
			0,
			0,
			.80555
		],
		926: [
			0,
			.68611,
			.07458,
			0,
			.84125
		],
		928: [
			0,
			.68611,
			.08229,
			0,
			.98229
		],
		931: [
			0,
			.68611,
			.05451,
			0,
			.88507
		],
		933: [
			0,
			.68611,
			.15972,
			0,
			.67083
		],
		934: [
			0,
			.68611,
			0,
			0,
			.76666
		],
		936: [
			0,
			.68611,
			.11653,
			0,
			.71402
		],
		937: [
			0,
			.68611,
			.04835,
			0,
			.8789
		],
		945: [
			0,
			.44444,
			0,
			0,
			.76064
		],
		946: [
			.19444,
			.69444,
			.03403,
			0,
			.65972
		],
		947: [
			.19444,
			.44444,
			.06389,
			0,
			.59003
		],
		948: [
			0,
			.69444,
			.03819,
			0,
			.52222
		],
		949: [
			0,
			.44444,
			0,
			0,
			.52882
		],
		950: [
			.19444,
			.69444,
			.06215,
			0,
			.50833
		],
		951: [
			.19444,
			.44444,
			.03704,
			0,
			.6
		],
		952: [
			0,
			.69444,
			.03194,
			0,
			.5618
		],
		953: [
			0,
			.44444,
			0,
			0,
			.41204
		],
		954: [
			0,
			.44444,
			0,
			0,
			.66759
		],
		955: [
			0,
			.69444,
			0,
			0,
			.67083
		],
		956: [
			.19444,
			.44444,
			0,
			0,
			.70787
		],
		957: [
			0,
			.44444,
			.06898,
			0,
			.57685
		],
		958: [
			.19444,
			.69444,
			.03021,
			0,
			.50833
		],
		959: [
			0,
			.44444,
			0,
			0,
			.58472
		],
		960: [
			0,
			.44444,
			.03704,
			0,
			.68241
		],
		961: [
			.19444,
			.44444,
			0,
			0,
			.6118
		],
		962: [
			.09722,
			.44444,
			.07917,
			0,
			.42361
		],
		963: [
			0,
			.44444,
			.03704,
			0,
			.68588
		],
		964: [
			0,
			.44444,
			.13472,
			0,
			.52083
		],
		965: [
			0,
			.44444,
			.03704,
			0,
			.63055
		],
		966: [
			.19444,
			.44444,
			0,
			0,
			.74722
		],
		967: [
			.19444,
			.44444,
			0,
			0,
			.71805
		],
		968: [
			.19444,
			.69444,
			.03704,
			0,
			.75833
		],
		969: [
			0,
			.44444,
			.03704,
			0,
			.71782
		],
		977: [
			0,
			.69444,
			0,
			0,
			.69155
		],
		981: [
			.19444,
			.69444,
			0,
			0,
			.7125
		],
		982: [
			0,
			.44444,
			.03194,
			0,
			.975
		],
		1009: [
			.19444,
			.44444,
			0,
			0,
			.6118
		],
		1013: [
			0,
			.44444,
			0,
			0,
			.48333
		],
		57649: [
			0,
			.44444,
			0,
			0,
			.39352
		],
		57911: [
			.19444,
			.44444,
			0,
			0,
			.43889
		]
	},
	"Math-Italic": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		48: [
			0,
			.43056,
			0,
			0,
			.5
		],
		49: [
			0,
			.43056,
			0,
			0,
			.5
		],
		50: [
			0,
			.43056,
			0,
			0,
			.5
		],
		51: [
			.19444,
			.43056,
			0,
			0,
			.5
		],
		52: [
			.19444,
			.43056,
			0,
			0,
			.5
		],
		53: [
			.19444,
			.43056,
			0,
			0,
			.5
		],
		54: [
			0,
			.64444,
			0,
			0,
			.5
		],
		55: [
			.19444,
			.43056,
			0,
			0,
			.5
		],
		56: [
			0,
			.64444,
			0,
			0,
			.5
		],
		57: [
			.19444,
			.43056,
			0,
			0,
			.5
		],
		65: [
			0,
			.68333,
			0,
			.13889,
			.75
		],
		66: [
			0,
			.68333,
			.05017,
			.08334,
			.75851
		],
		67: [
			0,
			.68333,
			.07153,
			.08334,
			.71472
		],
		68: [
			0,
			.68333,
			.02778,
			.05556,
			.82792
		],
		69: [
			0,
			.68333,
			.05764,
			.08334,
			.7382
		],
		70: [
			0,
			.68333,
			.13889,
			.08334,
			.64306
		],
		71: [
			0,
			.68333,
			0,
			.08334,
			.78625
		],
		72: [
			0,
			.68333,
			.08125,
			.05556,
			.83125
		],
		73: [
			0,
			.68333,
			.07847,
			.11111,
			.43958
		],
		74: [
			0,
			.68333,
			.09618,
			.16667,
			.55451
		],
		75: [
			0,
			.68333,
			.07153,
			.05556,
			.84931
		],
		76: [
			0,
			.68333,
			0,
			.02778,
			.68056
		],
		77: [
			0,
			.68333,
			.10903,
			.08334,
			.97014
		],
		78: [
			0,
			.68333,
			.10903,
			.08334,
			.80347
		],
		79: [
			0,
			.68333,
			.02778,
			.08334,
			.76278
		],
		80: [
			0,
			.68333,
			.13889,
			.08334,
			.64201
		],
		81: [
			.19444,
			.68333,
			0,
			.08334,
			.79056
		],
		82: [
			0,
			.68333,
			.00773,
			.08334,
			.75929
		],
		83: [
			0,
			.68333,
			.05764,
			.08334,
			.6132
		],
		84: [
			0,
			.68333,
			.13889,
			.08334,
			.58438
		],
		85: [
			0,
			.68333,
			.10903,
			.02778,
			.68278
		],
		86: [
			0,
			.68333,
			.22222,
			0,
			.58333
		],
		87: [
			0,
			.68333,
			.13889,
			0,
			.94445
		],
		88: [
			0,
			.68333,
			.07847,
			.08334,
			.82847
		],
		89: [
			0,
			.68333,
			.22222,
			0,
			.58056
		],
		90: [
			0,
			.68333,
			.07153,
			.08334,
			.68264
		],
		97: [
			0,
			.43056,
			0,
			0,
			.52859
		],
		98: [
			0,
			.69444,
			0,
			0,
			.42917
		],
		99: [
			0,
			.43056,
			0,
			.05556,
			.43276
		],
		100: [
			0,
			.69444,
			0,
			.16667,
			.52049
		],
		101: [
			0,
			.43056,
			0,
			.05556,
			.46563
		],
		102: [
			.19444,
			.69444,
			.10764,
			.16667,
			.48959
		],
		103: [
			.19444,
			.43056,
			.03588,
			.02778,
			.47697
		],
		104: [
			0,
			.69444,
			0,
			0,
			.57616
		],
		105: [
			0,
			.65952,
			0,
			0,
			.34451
		],
		106: [
			.19444,
			.65952,
			.05724,
			0,
			.41181
		],
		107: [
			0,
			.69444,
			.03148,
			0,
			.5206
		],
		108: [
			0,
			.69444,
			.01968,
			.08334,
			.29838
		],
		109: [
			0,
			.43056,
			0,
			0,
			.87801
		],
		110: [
			0,
			.43056,
			0,
			0,
			.60023
		],
		111: [
			0,
			.43056,
			0,
			.05556,
			.48472
		],
		112: [
			.19444,
			.43056,
			0,
			.08334,
			.50313
		],
		113: [
			.19444,
			.43056,
			.03588,
			.08334,
			.44641
		],
		114: [
			0,
			.43056,
			.02778,
			.05556,
			.45116
		],
		115: [
			0,
			.43056,
			0,
			.05556,
			.46875
		],
		116: [
			0,
			.61508,
			0,
			.08334,
			.36111
		],
		117: [
			0,
			.43056,
			0,
			.02778,
			.57246
		],
		118: [
			0,
			.43056,
			.03588,
			.02778,
			.48472
		],
		119: [
			0,
			.43056,
			.02691,
			.08334,
			.71592
		],
		120: [
			0,
			.43056,
			0,
			.02778,
			.57153
		],
		121: [
			.19444,
			.43056,
			.03588,
			.05556,
			.49028
		],
		122: [
			0,
			.43056,
			.04398,
			.05556,
			.46505
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		915: [
			0,
			.68333,
			.13889,
			.08334,
			.61528
		],
		916: [
			0,
			.68333,
			0,
			.16667,
			.83334
		],
		920: [
			0,
			.68333,
			.02778,
			.08334,
			.76278
		],
		923: [
			0,
			.68333,
			0,
			.16667,
			.69445
		],
		926: [
			0,
			.68333,
			.07569,
			.08334,
			.74236
		],
		928: [
			0,
			.68333,
			.08125,
			.05556,
			.83125
		],
		931: [
			0,
			.68333,
			.05764,
			.08334,
			.77986
		],
		933: [
			0,
			.68333,
			.13889,
			.05556,
			.58333
		],
		934: [
			0,
			.68333,
			0,
			.08334,
			.66667
		],
		936: [
			0,
			.68333,
			.11,
			.05556,
			.61222
		],
		937: [
			0,
			.68333,
			.05017,
			.08334,
			.7724
		],
		945: [
			0,
			.43056,
			.0037,
			.02778,
			.6397
		],
		946: [
			.19444,
			.69444,
			.05278,
			.08334,
			.56563
		],
		947: [
			.19444,
			.43056,
			.05556,
			0,
			.51773
		],
		948: [
			0,
			.69444,
			.03785,
			.05556,
			.44444
		],
		949: [
			0,
			.43056,
			0,
			.08334,
			.46632
		],
		950: [
			.19444,
			.69444,
			.07378,
			.08334,
			.4375
		],
		951: [
			.19444,
			.43056,
			.03588,
			.05556,
			.49653
		],
		952: [
			0,
			.69444,
			.02778,
			.08334,
			.46944
		],
		953: [
			0,
			.43056,
			0,
			.05556,
			.35394
		],
		954: [
			0,
			.43056,
			0,
			0,
			.57616
		],
		955: [
			0,
			.69444,
			0,
			0,
			.58334
		],
		956: [
			.19444,
			.43056,
			0,
			.02778,
			.60255
		],
		957: [
			0,
			.43056,
			.06366,
			.02778,
			.49398
		],
		958: [
			.19444,
			.69444,
			.04601,
			.11111,
			.4375
		],
		959: [
			0,
			.43056,
			0,
			.05556,
			.48472
		],
		960: [
			0,
			.43056,
			.03588,
			0,
			.57003
		],
		961: [
			.19444,
			.43056,
			0,
			.08334,
			.51702
		],
		962: [
			.09722,
			.43056,
			.07986,
			.08334,
			.36285
		],
		963: [
			0,
			.43056,
			.03588,
			0,
			.57141
		],
		964: [
			0,
			.43056,
			.1132,
			.02778,
			.43715
		],
		965: [
			0,
			.43056,
			.03588,
			.02778,
			.54028
		],
		966: [
			.19444,
			.43056,
			0,
			.08334,
			.65417
		],
		967: [
			.19444,
			.43056,
			0,
			.05556,
			.62569
		],
		968: [
			.19444,
			.69444,
			.03588,
			.11111,
			.65139
		],
		969: [
			0,
			.43056,
			.03588,
			0,
			.62245
		],
		977: [
			0,
			.69444,
			0,
			.08334,
			.59144
		],
		981: [
			.19444,
			.69444,
			0,
			.08334,
			.59583
		],
		982: [
			0,
			.43056,
			.02778,
			0,
			.82813
		],
		1009: [
			.19444,
			.43056,
			0,
			.08334,
			.51702
		],
		1013: [
			0,
			.43056,
			0,
			.05556,
			.4059
		],
		57649: [
			0,
			.43056,
			0,
			.02778,
			.32246
		],
		57911: [
			.19444,
			.43056,
			0,
			.08334,
			.38403
		]
	},
	"SansSerif-Bold": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		33: [
			0,
			.69444,
			0,
			0,
			.36667
		],
		34: [
			0,
			.69444,
			0,
			0,
			.55834
		],
		35: [
			.19444,
			.69444,
			0,
			0,
			.91667
		],
		36: [
			.05556,
			.75,
			0,
			0,
			.55
		],
		37: [
			.05556,
			.75,
			0,
			0,
			1.02912
		],
		38: [
			0,
			.69444,
			0,
			0,
			.83056
		],
		39: [
			0,
			.69444,
			0,
			0,
			.30556
		],
		40: [
			.25,
			.75,
			0,
			0,
			.42778
		],
		41: [
			.25,
			.75,
			0,
			0,
			.42778
		],
		42: [
			0,
			.75,
			0,
			0,
			.55
		],
		43: [
			.11667,
			.61667,
			0,
			0,
			.85556
		],
		44: [
			.10556,
			.13056,
			0,
			0,
			.30556
		],
		45: [
			0,
			.45833,
			0,
			0,
			.36667
		],
		46: [
			0,
			.13056,
			0,
			0,
			.30556
		],
		47: [
			.25,
			.75,
			0,
			0,
			.55
		],
		48: [
			0,
			.69444,
			0,
			0,
			.55
		],
		49: [
			0,
			.69444,
			0,
			0,
			.55
		],
		50: [
			0,
			.69444,
			0,
			0,
			.55
		],
		51: [
			0,
			.69444,
			0,
			0,
			.55
		],
		52: [
			0,
			.69444,
			0,
			0,
			.55
		],
		53: [
			0,
			.69444,
			0,
			0,
			.55
		],
		54: [
			0,
			.69444,
			0,
			0,
			.55
		],
		55: [
			0,
			.69444,
			0,
			0,
			.55
		],
		56: [
			0,
			.69444,
			0,
			0,
			.55
		],
		57: [
			0,
			.69444,
			0,
			0,
			.55
		],
		58: [
			0,
			.45833,
			0,
			0,
			.30556
		],
		59: [
			.10556,
			.45833,
			0,
			0,
			.30556
		],
		61: [
			-.09375,
			.40625,
			0,
			0,
			.85556
		],
		63: [
			0,
			.69444,
			0,
			0,
			.51945
		],
		64: [
			0,
			.69444,
			0,
			0,
			.73334
		],
		65: [
			0,
			.69444,
			0,
			0,
			.73334
		],
		66: [
			0,
			.69444,
			0,
			0,
			.73334
		],
		67: [
			0,
			.69444,
			0,
			0,
			.70278
		],
		68: [
			0,
			.69444,
			0,
			0,
			.79445
		],
		69: [
			0,
			.69444,
			0,
			0,
			.64167
		],
		70: [
			0,
			.69444,
			0,
			0,
			.61111
		],
		71: [
			0,
			.69444,
			0,
			0,
			.73334
		],
		72: [
			0,
			.69444,
			0,
			0,
			.79445
		],
		73: [
			0,
			.69444,
			0,
			0,
			.33056
		],
		74: [
			0,
			.69444,
			0,
			0,
			.51945
		],
		75: [
			0,
			.69444,
			0,
			0,
			.76389
		],
		76: [
			0,
			.69444,
			0,
			0,
			.58056
		],
		77: [
			0,
			.69444,
			0,
			0,
			.97778
		],
		78: [
			0,
			.69444,
			0,
			0,
			.79445
		],
		79: [
			0,
			.69444,
			0,
			0,
			.79445
		],
		80: [
			0,
			.69444,
			0,
			0,
			.70278
		],
		81: [
			.10556,
			.69444,
			0,
			0,
			.79445
		],
		82: [
			0,
			.69444,
			0,
			0,
			.70278
		],
		83: [
			0,
			.69444,
			0,
			0,
			.61111
		],
		84: [
			0,
			.69444,
			0,
			0,
			.73334
		],
		85: [
			0,
			.69444,
			0,
			0,
			.76389
		],
		86: [
			0,
			.69444,
			.01528,
			0,
			.73334
		],
		87: [
			0,
			.69444,
			.01528,
			0,
			1.03889
		],
		88: [
			0,
			.69444,
			0,
			0,
			.73334
		],
		89: [
			0,
			.69444,
			.0275,
			0,
			.73334
		],
		90: [
			0,
			.69444,
			0,
			0,
			.67223
		],
		91: [
			.25,
			.75,
			0,
			0,
			.34306
		],
		93: [
			.25,
			.75,
			0,
			0,
			.34306
		],
		94: [
			0,
			.69444,
			0,
			0,
			.55
		],
		95: [
			.35,
			.10833,
			.03056,
			0,
			.55
		],
		97: [
			0,
			.45833,
			0,
			0,
			.525
		],
		98: [
			0,
			.69444,
			0,
			0,
			.56111
		],
		99: [
			0,
			.45833,
			0,
			0,
			.48889
		],
		100: [
			0,
			.69444,
			0,
			0,
			.56111
		],
		101: [
			0,
			.45833,
			0,
			0,
			.51111
		],
		102: [
			0,
			.69444,
			.07639,
			0,
			.33611
		],
		103: [
			.19444,
			.45833,
			.01528,
			0,
			.55
		],
		104: [
			0,
			.69444,
			0,
			0,
			.56111
		],
		105: [
			0,
			.69444,
			0,
			0,
			.25556
		],
		106: [
			.19444,
			.69444,
			0,
			0,
			.28611
		],
		107: [
			0,
			.69444,
			0,
			0,
			.53056
		],
		108: [
			0,
			.69444,
			0,
			0,
			.25556
		],
		109: [
			0,
			.45833,
			0,
			0,
			.86667
		],
		110: [
			0,
			.45833,
			0,
			0,
			.56111
		],
		111: [
			0,
			.45833,
			0,
			0,
			.55
		],
		112: [
			.19444,
			.45833,
			0,
			0,
			.56111
		],
		113: [
			.19444,
			.45833,
			0,
			0,
			.56111
		],
		114: [
			0,
			.45833,
			.01528,
			0,
			.37222
		],
		115: [
			0,
			.45833,
			0,
			0,
			.42167
		],
		116: [
			0,
			.58929,
			0,
			0,
			.40417
		],
		117: [
			0,
			.45833,
			0,
			0,
			.56111
		],
		118: [
			0,
			.45833,
			.01528,
			0,
			.5
		],
		119: [
			0,
			.45833,
			.01528,
			0,
			.74445
		],
		120: [
			0,
			.45833,
			0,
			0,
			.5
		],
		121: [
			.19444,
			.45833,
			.01528,
			0,
			.5
		],
		122: [
			0,
			.45833,
			0,
			0,
			.47639
		],
		126: [
			.35,
			.34444,
			0,
			0,
			.55
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		168: [
			0,
			.69444,
			0,
			0,
			.55
		],
		176: [
			0,
			.69444,
			0,
			0,
			.73334
		],
		180: [
			0,
			.69444,
			0,
			0,
			.55
		],
		184: [
			.17014,
			0,
			0,
			0,
			.48889
		],
		305: [
			0,
			.45833,
			0,
			0,
			.25556
		],
		567: [
			.19444,
			.45833,
			0,
			0,
			.28611
		],
		710: [
			0,
			.69444,
			0,
			0,
			.55
		],
		711: [
			0,
			.63542,
			0,
			0,
			.55
		],
		713: [
			0,
			.63778,
			0,
			0,
			.55
		],
		728: [
			0,
			.69444,
			0,
			0,
			.55
		],
		729: [
			0,
			.69444,
			0,
			0,
			.30556
		],
		730: [
			0,
			.69444,
			0,
			0,
			.73334
		],
		732: [
			0,
			.69444,
			0,
			0,
			.55
		],
		733: [
			0,
			.69444,
			0,
			0,
			.55
		],
		915: [
			0,
			.69444,
			0,
			0,
			.58056
		],
		916: [
			0,
			.69444,
			0,
			0,
			.91667
		],
		920: [
			0,
			.69444,
			0,
			0,
			.85556
		],
		923: [
			0,
			.69444,
			0,
			0,
			.67223
		],
		926: [
			0,
			.69444,
			0,
			0,
			.73334
		],
		928: [
			0,
			.69444,
			0,
			0,
			.79445
		],
		931: [
			0,
			.69444,
			0,
			0,
			.79445
		],
		933: [
			0,
			.69444,
			0,
			0,
			.85556
		],
		934: [
			0,
			.69444,
			0,
			0,
			.79445
		],
		936: [
			0,
			.69444,
			0,
			0,
			.85556
		],
		937: [
			0,
			.69444,
			0,
			0,
			.79445
		],
		8211: [
			0,
			.45833,
			.03056,
			0,
			.55
		],
		8212: [
			0,
			.45833,
			.03056,
			0,
			1.10001
		],
		8216: [
			0,
			.69444,
			0,
			0,
			.30556
		],
		8217: [
			0,
			.69444,
			0,
			0,
			.30556
		],
		8220: [
			0,
			.69444,
			0,
			0,
			.55834
		],
		8221: [
			0,
			.69444,
			0,
			0,
			.55834
		]
	},
	"SansSerif-Italic": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		33: [
			0,
			.69444,
			.05733,
			0,
			.31945
		],
		34: [
			0,
			.69444,
			.00316,
			0,
			.5
		],
		35: [
			.19444,
			.69444,
			.05087,
			0,
			.83334
		],
		36: [
			.05556,
			.75,
			.11156,
			0,
			.5
		],
		37: [
			.05556,
			.75,
			.03126,
			0,
			.83334
		],
		38: [
			0,
			.69444,
			.03058,
			0,
			.75834
		],
		39: [
			0,
			.69444,
			.07816,
			0,
			.27778
		],
		40: [
			.25,
			.75,
			.13164,
			0,
			.38889
		],
		41: [
			.25,
			.75,
			.02536,
			0,
			.38889
		],
		42: [
			0,
			.75,
			.11775,
			0,
			.5
		],
		43: [
			.08333,
			.58333,
			.02536,
			0,
			.77778
		],
		44: [
			.125,
			.08333,
			0,
			0,
			.27778
		],
		45: [
			0,
			.44444,
			.01946,
			0,
			.33333
		],
		46: [
			0,
			.08333,
			0,
			0,
			.27778
		],
		47: [
			.25,
			.75,
			.13164,
			0,
			.5
		],
		48: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		49: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		50: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		51: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		52: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		53: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		54: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		55: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		56: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		57: [
			0,
			.65556,
			.11156,
			0,
			.5
		],
		58: [
			0,
			.44444,
			.02502,
			0,
			.27778
		],
		59: [
			.125,
			.44444,
			.02502,
			0,
			.27778
		],
		61: [
			-.13,
			.37,
			.05087,
			0,
			.77778
		],
		63: [
			0,
			.69444,
			.11809,
			0,
			.47222
		],
		64: [
			0,
			.69444,
			.07555,
			0,
			.66667
		],
		65: [
			0,
			.69444,
			0,
			0,
			.66667
		],
		66: [
			0,
			.69444,
			.08293,
			0,
			.66667
		],
		67: [
			0,
			.69444,
			.11983,
			0,
			.63889
		],
		68: [
			0,
			.69444,
			.07555,
			0,
			.72223
		],
		69: [
			0,
			.69444,
			.11983,
			0,
			.59722
		],
		70: [
			0,
			.69444,
			.13372,
			0,
			.56945
		],
		71: [
			0,
			.69444,
			.11983,
			0,
			.66667
		],
		72: [
			0,
			.69444,
			.08094,
			0,
			.70834
		],
		73: [
			0,
			.69444,
			.13372,
			0,
			.27778
		],
		74: [
			0,
			.69444,
			.08094,
			0,
			.47222
		],
		75: [
			0,
			.69444,
			.11983,
			0,
			.69445
		],
		76: [
			0,
			.69444,
			0,
			0,
			.54167
		],
		77: [
			0,
			.69444,
			.08094,
			0,
			.875
		],
		78: [
			0,
			.69444,
			.08094,
			0,
			.70834
		],
		79: [
			0,
			.69444,
			.07555,
			0,
			.73611
		],
		80: [
			0,
			.69444,
			.08293,
			0,
			.63889
		],
		81: [
			.125,
			.69444,
			.07555,
			0,
			.73611
		],
		82: [
			0,
			.69444,
			.08293,
			0,
			.64584
		],
		83: [
			0,
			.69444,
			.09205,
			0,
			.55556
		],
		84: [
			0,
			.69444,
			.13372,
			0,
			.68056
		],
		85: [
			0,
			.69444,
			.08094,
			0,
			.6875
		],
		86: [
			0,
			.69444,
			.1615,
			0,
			.66667
		],
		87: [
			0,
			.69444,
			.1615,
			0,
			.94445
		],
		88: [
			0,
			.69444,
			.13372,
			0,
			.66667
		],
		89: [
			0,
			.69444,
			.17261,
			0,
			.66667
		],
		90: [
			0,
			.69444,
			.11983,
			0,
			.61111
		],
		91: [
			.25,
			.75,
			.15942,
			0,
			.28889
		],
		93: [
			.25,
			.75,
			.08719,
			0,
			.28889
		],
		94: [
			0,
			.69444,
			.0799,
			0,
			.5
		],
		95: [
			.35,
			.09444,
			.08616,
			0,
			.5
		],
		97: [
			0,
			.44444,
			.00981,
			0,
			.48056
		],
		98: [
			0,
			.69444,
			.03057,
			0,
			.51667
		],
		99: [
			0,
			.44444,
			.08336,
			0,
			.44445
		],
		100: [
			0,
			.69444,
			.09483,
			0,
			.51667
		],
		101: [
			0,
			.44444,
			.06778,
			0,
			.44445
		],
		102: [
			0,
			.69444,
			.21705,
			0,
			.30556
		],
		103: [
			.19444,
			.44444,
			.10836,
			0,
			.5
		],
		104: [
			0,
			.69444,
			.01778,
			0,
			.51667
		],
		105: [
			0,
			.67937,
			.09718,
			0,
			.23889
		],
		106: [
			.19444,
			.67937,
			.09162,
			0,
			.26667
		],
		107: [
			0,
			.69444,
			.08336,
			0,
			.48889
		],
		108: [
			0,
			.69444,
			.09483,
			0,
			.23889
		],
		109: [
			0,
			.44444,
			.01778,
			0,
			.79445
		],
		110: [
			0,
			.44444,
			.01778,
			0,
			.51667
		],
		111: [
			0,
			.44444,
			.06613,
			0,
			.5
		],
		112: [
			.19444,
			.44444,
			.0389,
			0,
			.51667
		],
		113: [
			.19444,
			.44444,
			.04169,
			0,
			.51667
		],
		114: [
			0,
			.44444,
			.10836,
			0,
			.34167
		],
		115: [
			0,
			.44444,
			.0778,
			0,
			.38333
		],
		116: [
			0,
			.57143,
			.07225,
			0,
			.36111
		],
		117: [
			0,
			.44444,
			.04169,
			0,
			.51667
		],
		118: [
			0,
			.44444,
			.10836,
			0,
			.46111
		],
		119: [
			0,
			.44444,
			.10836,
			0,
			.68334
		],
		120: [
			0,
			.44444,
			.09169,
			0,
			.46111
		],
		121: [
			.19444,
			.44444,
			.10836,
			0,
			.46111
		],
		122: [
			0,
			.44444,
			.08752,
			0,
			.43472
		],
		126: [
			.35,
			.32659,
			.08826,
			0,
			.5
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		168: [
			0,
			.67937,
			.06385,
			0,
			.5
		],
		176: [
			0,
			.69444,
			0,
			0,
			.73752
		],
		184: [
			.17014,
			0,
			0,
			0,
			.44445
		],
		305: [
			0,
			.44444,
			.04169,
			0,
			.23889
		],
		567: [
			.19444,
			.44444,
			.04169,
			0,
			.26667
		],
		710: [
			0,
			.69444,
			.0799,
			0,
			.5
		],
		711: [
			0,
			.63194,
			.08432,
			0,
			.5
		],
		713: [
			0,
			.60889,
			.08776,
			0,
			.5
		],
		714: [
			0,
			.69444,
			.09205,
			0,
			.5
		],
		715: [
			0,
			.69444,
			0,
			0,
			.5
		],
		728: [
			0,
			.69444,
			.09483,
			0,
			.5
		],
		729: [
			0,
			.67937,
			.07774,
			0,
			.27778
		],
		730: [
			0,
			.69444,
			0,
			0,
			.73752
		],
		732: [
			0,
			.67659,
			.08826,
			0,
			.5
		],
		733: [
			0,
			.69444,
			.09205,
			0,
			.5
		],
		915: [
			0,
			.69444,
			.13372,
			0,
			.54167
		],
		916: [
			0,
			.69444,
			0,
			0,
			.83334
		],
		920: [
			0,
			.69444,
			.07555,
			0,
			.77778
		],
		923: [
			0,
			.69444,
			0,
			0,
			.61111
		],
		926: [
			0,
			.69444,
			.12816,
			0,
			.66667
		],
		928: [
			0,
			.69444,
			.08094,
			0,
			.70834
		],
		931: [
			0,
			.69444,
			.11983,
			0,
			.72222
		],
		933: [
			0,
			.69444,
			.09031,
			0,
			.77778
		],
		934: [
			0,
			.69444,
			.04603,
			0,
			.72222
		],
		936: [
			0,
			.69444,
			.09031,
			0,
			.77778
		],
		937: [
			0,
			.69444,
			.08293,
			0,
			.72222
		],
		8211: [
			0,
			.44444,
			.08616,
			0,
			.5
		],
		8212: [
			0,
			.44444,
			.08616,
			0,
			1
		],
		8216: [
			0,
			.69444,
			.07816,
			0,
			.27778
		],
		8217: [
			0,
			.69444,
			.07816,
			0,
			.27778
		],
		8220: [
			0,
			.69444,
			.14205,
			0,
			.5
		],
		8221: [
			0,
			.69444,
			.00316,
			0,
			.5
		]
	},
	"SansSerif-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		33: [
			0,
			.69444,
			0,
			0,
			.31945
		],
		34: [
			0,
			.69444,
			0,
			0,
			.5
		],
		35: [
			.19444,
			.69444,
			0,
			0,
			.83334
		],
		36: [
			.05556,
			.75,
			0,
			0,
			.5
		],
		37: [
			.05556,
			.75,
			0,
			0,
			.83334
		],
		38: [
			0,
			.69444,
			0,
			0,
			.75834
		],
		39: [
			0,
			.69444,
			0,
			0,
			.27778
		],
		40: [
			.25,
			.75,
			0,
			0,
			.38889
		],
		41: [
			.25,
			.75,
			0,
			0,
			.38889
		],
		42: [
			0,
			.75,
			0,
			0,
			.5
		],
		43: [
			.08333,
			.58333,
			0,
			0,
			.77778
		],
		44: [
			.125,
			.08333,
			0,
			0,
			.27778
		],
		45: [
			0,
			.44444,
			0,
			0,
			.33333
		],
		46: [
			0,
			.08333,
			0,
			0,
			.27778
		],
		47: [
			.25,
			.75,
			0,
			0,
			.5
		],
		48: [
			0,
			.65556,
			0,
			0,
			.5
		],
		49: [
			0,
			.65556,
			0,
			0,
			.5
		],
		50: [
			0,
			.65556,
			0,
			0,
			.5
		],
		51: [
			0,
			.65556,
			0,
			0,
			.5
		],
		52: [
			0,
			.65556,
			0,
			0,
			.5
		],
		53: [
			0,
			.65556,
			0,
			0,
			.5
		],
		54: [
			0,
			.65556,
			0,
			0,
			.5
		],
		55: [
			0,
			.65556,
			0,
			0,
			.5
		],
		56: [
			0,
			.65556,
			0,
			0,
			.5
		],
		57: [
			0,
			.65556,
			0,
			0,
			.5
		],
		58: [
			0,
			.44444,
			0,
			0,
			.27778
		],
		59: [
			.125,
			.44444,
			0,
			0,
			.27778
		],
		61: [
			-.13,
			.37,
			0,
			0,
			.77778
		],
		63: [
			0,
			.69444,
			0,
			0,
			.47222
		],
		64: [
			0,
			.69444,
			0,
			0,
			.66667
		],
		65: [
			0,
			.69444,
			0,
			0,
			.66667
		],
		66: [
			0,
			.69444,
			0,
			0,
			.66667
		],
		67: [
			0,
			.69444,
			0,
			0,
			.63889
		],
		68: [
			0,
			.69444,
			0,
			0,
			.72223
		],
		69: [
			0,
			.69444,
			0,
			0,
			.59722
		],
		70: [
			0,
			.69444,
			0,
			0,
			.56945
		],
		71: [
			0,
			.69444,
			0,
			0,
			.66667
		],
		72: [
			0,
			.69444,
			0,
			0,
			.70834
		],
		73: [
			0,
			.69444,
			0,
			0,
			.27778
		],
		74: [
			0,
			.69444,
			0,
			0,
			.47222
		],
		75: [
			0,
			.69444,
			0,
			0,
			.69445
		],
		76: [
			0,
			.69444,
			0,
			0,
			.54167
		],
		77: [
			0,
			.69444,
			0,
			0,
			.875
		],
		78: [
			0,
			.69444,
			0,
			0,
			.70834
		],
		79: [
			0,
			.69444,
			0,
			0,
			.73611
		],
		80: [
			0,
			.69444,
			0,
			0,
			.63889
		],
		81: [
			.125,
			.69444,
			0,
			0,
			.73611
		],
		82: [
			0,
			.69444,
			0,
			0,
			.64584
		],
		83: [
			0,
			.69444,
			0,
			0,
			.55556
		],
		84: [
			0,
			.69444,
			0,
			0,
			.68056
		],
		85: [
			0,
			.69444,
			0,
			0,
			.6875
		],
		86: [
			0,
			.69444,
			.01389,
			0,
			.66667
		],
		87: [
			0,
			.69444,
			.01389,
			0,
			.94445
		],
		88: [
			0,
			.69444,
			0,
			0,
			.66667
		],
		89: [
			0,
			.69444,
			.025,
			0,
			.66667
		],
		90: [
			0,
			.69444,
			0,
			0,
			.61111
		],
		91: [
			.25,
			.75,
			0,
			0,
			.28889
		],
		93: [
			.25,
			.75,
			0,
			0,
			.28889
		],
		94: [
			0,
			.69444,
			0,
			0,
			.5
		],
		95: [
			.35,
			.09444,
			.02778,
			0,
			.5
		],
		97: [
			0,
			.44444,
			0,
			0,
			.48056
		],
		98: [
			0,
			.69444,
			0,
			0,
			.51667
		],
		99: [
			0,
			.44444,
			0,
			0,
			.44445
		],
		100: [
			0,
			.69444,
			0,
			0,
			.51667
		],
		101: [
			0,
			.44444,
			0,
			0,
			.44445
		],
		102: [
			0,
			.69444,
			.06944,
			0,
			.30556
		],
		103: [
			.19444,
			.44444,
			.01389,
			0,
			.5
		],
		104: [
			0,
			.69444,
			0,
			0,
			.51667
		],
		105: [
			0,
			.67937,
			0,
			0,
			.23889
		],
		106: [
			.19444,
			.67937,
			0,
			0,
			.26667
		],
		107: [
			0,
			.69444,
			0,
			0,
			.48889
		],
		108: [
			0,
			.69444,
			0,
			0,
			.23889
		],
		109: [
			0,
			.44444,
			0,
			0,
			.79445
		],
		110: [
			0,
			.44444,
			0,
			0,
			.51667
		],
		111: [
			0,
			.44444,
			0,
			0,
			.5
		],
		112: [
			.19444,
			.44444,
			0,
			0,
			.51667
		],
		113: [
			.19444,
			.44444,
			0,
			0,
			.51667
		],
		114: [
			0,
			.44444,
			.01389,
			0,
			.34167
		],
		115: [
			0,
			.44444,
			0,
			0,
			.38333
		],
		116: [
			0,
			.57143,
			0,
			0,
			.36111
		],
		117: [
			0,
			.44444,
			0,
			0,
			.51667
		],
		118: [
			0,
			.44444,
			.01389,
			0,
			.46111
		],
		119: [
			0,
			.44444,
			.01389,
			0,
			.68334
		],
		120: [
			0,
			.44444,
			0,
			0,
			.46111
		],
		121: [
			.19444,
			.44444,
			.01389,
			0,
			.46111
		],
		122: [
			0,
			.44444,
			0,
			0,
			.43472
		],
		126: [
			.35,
			.32659,
			0,
			0,
			.5
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		168: [
			0,
			.67937,
			0,
			0,
			.5
		],
		176: [
			0,
			.69444,
			0,
			0,
			.66667
		],
		184: [
			.17014,
			0,
			0,
			0,
			.44445
		],
		305: [
			0,
			.44444,
			0,
			0,
			.23889
		],
		567: [
			.19444,
			.44444,
			0,
			0,
			.26667
		],
		710: [
			0,
			.69444,
			0,
			0,
			.5
		],
		711: [
			0,
			.63194,
			0,
			0,
			.5
		],
		713: [
			0,
			.60889,
			0,
			0,
			.5
		],
		714: [
			0,
			.69444,
			0,
			0,
			.5
		],
		715: [
			0,
			.69444,
			0,
			0,
			.5
		],
		728: [
			0,
			.69444,
			0,
			0,
			.5
		],
		729: [
			0,
			.67937,
			0,
			0,
			.27778
		],
		730: [
			0,
			.69444,
			0,
			0,
			.66667
		],
		732: [
			0,
			.67659,
			0,
			0,
			.5
		],
		733: [
			0,
			.69444,
			0,
			0,
			.5
		],
		915: [
			0,
			.69444,
			0,
			0,
			.54167
		],
		916: [
			0,
			.69444,
			0,
			0,
			.83334
		],
		920: [
			0,
			.69444,
			0,
			0,
			.77778
		],
		923: [
			0,
			.69444,
			0,
			0,
			.61111
		],
		926: [
			0,
			.69444,
			0,
			0,
			.66667
		],
		928: [
			0,
			.69444,
			0,
			0,
			.70834
		],
		931: [
			0,
			.69444,
			0,
			0,
			.72222
		],
		933: [
			0,
			.69444,
			0,
			0,
			.77778
		],
		934: [
			0,
			.69444,
			0,
			0,
			.72222
		],
		936: [
			0,
			.69444,
			0,
			0,
			.77778
		],
		937: [
			0,
			.69444,
			0,
			0,
			.72222
		],
		8211: [
			0,
			.44444,
			.02778,
			0,
			.5
		],
		8212: [
			0,
			.44444,
			.02778,
			0,
			1
		],
		8216: [
			0,
			.69444,
			0,
			0,
			.27778
		],
		8217: [
			0,
			.69444,
			0,
			0,
			.27778
		],
		8220: [
			0,
			.69444,
			0,
			0,
			.5
		],
		8221: [
			0,
			.69444,
			0,
			0,
			.5
		]
	},
	"Script-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		65: [
			0,
			.7,
			.22925,
			0,
			.80253
		],
		66: [
			0,
			.7,
			.04087,
			0,
			.90757
		],
		67: [
			0,
			.7,
			.1689,
			0,
			.66619
		],
		68: [
			0,
			.7,
			.09371,
			0,
			.77443
		],
		69: [
			0,
			.7,
			.18583,
			0,
			.56162
		],
		70: [
			0,
			.7,
			.13634,
			0,
			.89544
		],
		71: [
			0,
			.7,
			.17322,
			0,
			.60961
		],
		72: [
			0,
			.7,
			.29694,
			0,
			.96919
		],
		73: [
			0,
			.7,
			.19189,
			0,
			.80907
		],
		74: [
			.27778,
			.7,
			.19189,
			0,
			1.05159
		],
		75: [
			0,
			.7,
			.31259,
			0,
			.91364
		],
		76: [
			0,
			.7,
			.19189,
			0,
			.87373
		],
		77: [
			0,
			.7,
			.15981,
			0,
			1.08031
		],
		78: [
			0,
			.7,
			.3525,
			0,
			.9015
		],
		79: [
			0,
			.7,
			.08078,
			0,
			.73787
		],
		80: [
			0,
			.7,
			.08078,
			0,
			1.01262
		],
		81: [
			0,
			.7,
			.03305,
			0,
			.88282
		],
		82: [
			0,
			.7,
			.06259,
			0,
			.85
		],
		83: [
			0,
			.7,
			.19189,
			0,
			.86767
		],
		84: [
			0,
			.7,
			.29087,
			0,
			.74697
		],
		85: [
			0,
			.7,
			.25815,
			0,
			.79996
		],
		86: [
			0,
			.7,
			.27523,
			0,
			.62204
		],
		87: [
			0,
			.7,
			.27523,
			0,
			.80532
		],
		88: [
			0,
			.7,
			.26006,
			0,
			.94445
		],
		89: [
			0,
			.7,
			.2939,
			0,
			.70961
		],
		90: [
			0,
			.7,
			.24037,
			0,
			.8212
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		]
	},
	"Size1-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		40: [
			.35001,
			.85,
			0,
			0,
			.45834
		],
		41: [
			.35001,
			.85,
			0,
			0,
			.45834
		],
		47: [
			.35001,
			.85,
			0,
			0,
			.57778
		],
		91: [
			.35001,
			.85,
			0,
			0,
			.41667
		],
		92: [
			.35001,
			.85,
			0,
			0,
			.57778
		],
		93: [
			.35001,
			.85,
			0,
			0,
			.41667
		],
		123: [
			.35001,
			.85,
			0,
			0,
			.58334
		],
		125: [
			.35001,
			.85,
			0,
			0,
			.58334
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		710: [
			0,
			.72222,
			0,
			0,
			.55556
		],
		732: [
			0,
			.72222,
			0,
			0,
			.55556
		],
		770: [
			0,
			.72222,
			0,
			0,
			.55556
		],
		771: [
			0,
			.72222,
			0,
			0,
			.55556
		],
		8214: [
			-99e-5,
			.601,
			0,
			0,
			.77778
		],
		8593: [
			1e-5,
			.6,
			0,
			0,
			.66667
		],
		8595: [
			1e-5,
			.6,
			0,
			0,
			.66667
		],
		8657: [
			1e-5,
			.6,
			0,
			0,
			.77778
		],
		8659: [
			1e-5,
			.6,
			0,
			0,
			.77778
		],
		8719: [
			.25001,
			.75,
			0,
			0,
			.94445
		],
		8720: [
			.25001,
			.75,
			0,
			0,
			.94445
		],
		8721: [
			.25001,
			.75,
			0,
			0,
			1.05556
		],
		8730: [
			.35001,
			.85,
			0,
			0,
			1
		],
		8739: [
			-.00599,
			.606,
			0,
			0,
			.33333
		],
		8741: [
			-.00599,
			.606,
			0,
			0,
			.55556
		],
		8747: [
			.30612,
			.805,
			.19445,
			0,
			.47222
		],
		8748: [
			.306,
			.805,
			.19445,
			0,
			.47222
		],
		8749: [
			.306,
			.805,
			.19445,
			0,
			.47222
		],
		8750: [
			.30612,
			.805,
			.19445,
			0,
			.47222
		],
		8896: [
			.25001,
			.75,
			0,
			0,
			.83334
		],
		8897: [
			.25001,
			.75,
			0,
			0,
			.83334
		],
		8898: [
			.25001,
			.75,
			0,
			0,
			.83334
		],
		8899: [
			.25001,
			.75,
			0,
			0,
			.83334
		],
		8968: [
			.35001,
			.85,
			0,
			0,
			.47222
		],
		8969: [
			.35001,
			.85,
			0,
			0,
			.47222
		],
		8970: [
			.35001,
			.85,
			0,
			0,
			.47222
		],
		8971: [
			.35001,
			.85,
			0,
			0,
			.47222
		],
		9168: [
			-99e-5,
			.601,
			0,
			0,
			.66667
		],
		10216: [
			.35001,
			.85,
			0,
			0,
			.47222
		],
		10217: [
			.35001,
			.85,
			0,
			0,
			.47222
		],
		10752: [
			.25001,
			.75,
			0,
			0,
			1.11111
		],
		10753: [
			.25001,
			.75,
			0,
			0,
			1.11111
		],
		10754: [
			.25001,
			.75,
			0,
			0,
			1.11111
		],
		10756: [
			.25001,
			.75,
			0,
			0,
			.83334
		],
		10758: [
			.25001,
			.75,
			0,
			0,
			.83334
		]
	},
	"Size2-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		40: [
			.65002,
			1.15,
			0,
			0,
			.59722
		],
		41: [
			.65002,
			1.15,
			0,
			0,
			.59722
		],
		47: [
			.65002,
			1.15,
			0,
			0,
			.81111
		],
		91: [
			.65002,
			1.15,
			0,
			0,
			.47222
		],
		92: [
			.65002,
			1.15,
			0,
			0,
			.81111
		],
		93: [
			.65002,
			1.15,
			0,
			0,
			.47222
		],
		123: [
			.65002,
			1.15,
			0,
			0,
			.66667
		],
		125: [
			.65002,
			1.15,
			0,
			0,
			.66667
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		710: [
			0,
			.75,
			0,
			0,
			1
		],
		732: [
			0,
			.75,
			0,
			0,
			1
		],
		770: [
			0,
			.75,
			0,
			0,
			1
		],
		771: [
			0,
			.75,
			0,
			0,
			1
		],
		8719: [
			.55001,
			1.05,
			0,
			0,
			1.27778
		],
		8720: [
			.55001,
			1.05,
			0,
			0,
			1.27778
		],
		8721: [
			.55001,
			1.05,
			0,
			0,
			1.44445
		],
		8730: [
			.65002,
			1.15,
			0,
			0,
			1
		],
		8747: [
			.86225,
			1.36,
			.44445,
			0,
			.55556
		],
		8748: [
			.862,
			1.36,
			.44445,
			0,
			.55556
		],
		8749: [
			.862,
			1.36,
			.44445,
			0,
			.55556
		],
		8750: [
			.86225,
			1.36,
			.44445,
			0,
			.55556
		],
		8896: [
			.55001,
			1.05,
			0,
			0,
			1.11111
		],
		8897: [
			.55001,
			1.05,
			0,
			0,
			1.11111
		],
		8898: [
			.55001,
			1.05,
			0,
			0,
			1.11111
		],
		8899: [
			.55001,
			1.05,
			0,
			0,
			1.11111
		],
		8968: [
			.65002,
			1.15,
			0,
			0,
			.52778
		],
		8969: [
			.65002,
			1.15,
			0,
			0,
			.52778
		],
		8970: [
			.65002,
			1.15,
			0,
			0,
			.52778
		],
		8971: [
			.65002,
			1.15,
			0,
			0,
			.52778
		],
		10216: [
			.65002,
			1.15,
			0,
			0,
			.61111
		],
		10217: [
			.65002,
			1.15,
			0,
			0,
			.61111
		],
		10752: [
			.55001,
			1.05,
			0,
			0,
			1.51112
		],
		10753: [
			.55001,
			1.05,
			0,
			0,
			1.51112
		],
		10754: [
			.55001,
			1.05,
			0,
			0,
			1.51112
		],
		10756: [
			.55001,
			1.05,
			0,
			0,
			1.11111
		],
		10758: [
			.55001,
			1.05,
			0,
			0,
			1.11111
		]
	},
	"Size3-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		40: [
			.95003,
			1.45,
			0,
			0,
			.73611
		],
		41: [
			.95003,
			1.45,
			0,
			0,
			.73611
		],
		47: [
			.95003,
			1.45,
			0,
			0,
			1.04445
		],
		91: [
			.95003,
			1.45,
			0,
			0,
			.52778
		],
		92: [
			.95003,
			1.45,
			0,
			0,
			1.04445
		],
		93: [
			.95003,
			1.45,
			0,
			0,
			.52778
		],
		123: [
			.95003,
			1.45,
			0,
			0,
			.75
		],
		125: [
			.95003,
			1.45,
			0,
			0,
			.75
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		710: [
			0,
			.75,
			0,
			0,
			1.44445
		],
		732: [
			0,
			.75,
			0,
			0,
			1.44445
		],
		770: [
			0,
			.75,
			0,
			0,
			1.44445
		],
		771: [
			0,
			.75,
			0,
			0,
			1.44445
		],
		8730: [
			.95003,
			1.45,
			0,
			0,
			1
		],
		8968: [
			.95003,
			1.45,
			0,
			0,
			.58334
		],
		8969: [
			.95003,
			1.45,
			0,
			0,
			.58334
		],
		8970: [
			.95003,
			1.45,
			0,
			0,
			.58334
		],
		8971: [
			.95003,
			1.45,
			0,
			0,
			.58334
		],
		10216: [
			.95003,
			1.45,
			0,
			0,
			.75
		],
		10217: [
			.95003,
			1.45,
			0,
			0,
			.75
		]
	},
	"Size4-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.25
		],
		40: [
			1.25003,
			1.75,
			0,
			0,
			.79167
		],
		41: [
			1.25003,
			1.75,
			0,
			0,
			.79167
		],
		47: [
			1.25003,
			1.75,
			0,
			0,
			1.27778
		],
		91: [
			1.25003,
			1.75,
			0,
			0,
			.58334
		],
		92: [
			1.25003,
			1.75,
			0,
			0,
			1.27778
		],
		93: [
			1.25003,
			1.75,
			0,
			0,
			.58334
		],
		123: [
			1.25003,
			1.75,
			0,
			0,
			.80556
		],
		125: [
			1.25003,
			1.75,
			0,
			0,
			.80556
		],
		160: [
			0,
			0,
			0,
			0,
			.25
		],
		710: [
			0,
			.825,
			0,
			0,
			1.8889
		],
		732: [
			0,
			.825,
			0,
			0,
			1.8889
		],
		770: [
			0,
			.825,
			0,
			0,
			1.8889
		],
		771: [
			0,
			.825,
			0,
			0,
			1.8889
		],
		8730: [
			1.25003,
			1.75,
			0,
			0,
			1
		],
		8968: [
			1.25003,
			1.75,
			0,
			0,
			.63889
		],
		8969: [
			1.25003,
			1.75,
			0,
			0,
			.63889
		],
		8970: [
			1.25003,
			1.75,
			0,
			0,
			.63889
		],
		8971: [
			1.25003,
			1.75,
			0,
			0,
			.63889
		],
		9115: [
			.64502,
			1.155,
			0,
			0,
			.875
		],
		9116: [
			1e-5,
			.6,
			0,
			0,
			.875
		],
		9117: [
			.64502,
			1.155,
			0,
			0,
			.875
		],
		9118: [
			.64502,
			1.155,
			0,
			0,
			.875
		],
		9119: [
			1e-5,
			.6,
			0,
			0,
			.875
		],
		9120: [
			.64502,
			1.155,
			0,
			0,
			.875
		],
		9121: [
			.64502,
			1.155,
			0,
			0,
			.66667
		],
		9122: [
			-99e-5,
			.601,
			0,
			0,
			.66667
		],
		9123: [
			.64502,
			1.155,
			0,
			0,
			.66667
		],
		9124: [
			.64502,
			1.155,
			0,
			0,
			.66667
		],
		9125: [
			-99e-5,
			.601,
			0,
			0,
			.66667
		],
		9126: [
			.64502,
			1.155,
			0,
			0,
			.66667
		],
		9127: [
			1e-5,
			.9,
			0,
			0,
			.88889
		],
		9128: [
			.65002,
			1.15,
			0,
			0,
			.88889
		],
		9129: [
			.90001,
			0,
			0,
			0,
			.88889
		],
		9130: [
			0,
			.3,
			0,
			0,
			.88889
		],
		9131: [
			1e-5,
			.9,
			0,
			0,
			.88889
		],
		9132: [
			.65002,
			1.15,
			0,
			0,
			.88889
		],
		9133: [
			.90001,
			0,
			0,
			0,
			.88889
		],
		9143: [
			.88502,
			.915,
			0,
			0,
			1.05556
		],
		10216: [
			1.25003,
			1.75,
			0,
			0,
			.80556
		],
		10217: [
			1.25003,
			1.75,
			0,
			0,
			.80556
		],
		57344: [
			-.00499,
			.605,
			0,
			0,
			1.05556
		],
		57345: [
			-.00499,
			.605,
			0,
			0,
			1.05556
		],
		57680: [
			0,
			.12,
			0,
			0,
			.45
		],
		57681: [
			0,
			.12,
			0,
			0,
			.45
		],
		57682: [
			0,
			.12,
			0,
			0,
			.45
		],
		57683: [
			0,
			.12,
			0,
			0,
			.45
		]
	},
	"Typewriter-Regular": {
		32: [
			0,
			0,
			0,
			0,
			.525
		],
		33: [
			0,
			.61111,
			0,
			0,
			.525
		],
		34: [
			0,
			.61111,
			0,
			0,
			.525
		],
		35: [
			0,
			.61111,
			0,
			0,
			.525
		],
		36: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		37: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		38: [
			0,
			.61111,
			0,
			0,
			.525
		],
		39: [
			0,
			.61111,
			0,
			0,
			.525
		],
		40: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		41: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		42: [
			0,
			.52083,
			0,
			0,
			.525
		],
		43: [
			-.08056,
			.53055,
			0,
			0,
			.525
		],
		44: [
			.13889,
			.125,
			0,
			0,
			.525
		],
		45: [
			-.08056,
			.53055,
			0,
			0,
			.525
		],
		46: [
			0,
			.125,
			0,
			0,
			.525
		],
		47: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		48: [
			0,
			.61111,
			0,
			0,
			.525
		],
		49: [
			0,
			.61111,
			0,
			0,
			.525
		],
		50: [
			0,
			.61111,
			0,
			0,
			.525
		],
		51: [
			0,
			.61111,
			0,
			0,
			.525
		],
		52: [
			0,
			.61111,
			0,
			0,
			.525
		],
		53: [
			0,
			.61111,
			0,
			0,
			.525
		],
		54: [
			0,
			.61111,
			0,
			0,
			.525
		],
		55: [
			0,
			.61111,
			0,
			0,
			.525
		],
		56: [
			0,
			.61111,
			0,
			0,
			.525
		],
		57: [
			0,
			.61111,
			0,
			0,
			.525
		],
		58: [
			0,
			.43056,
			0,
			0,
			.525
		],
		59: [
			.13889,
			.43056,
			0,
			0,
			.525
		],
		60: [
			-.05556,
			.55556,
			0,
			0,
			.525
		],
		61: [
			-.19549,
			.41562,
			0,
			0,
			.525
		],
		62: [
			-.05556,
			.55556,
			0,
			0,
			.525
		],
		63: [
			0,
			.61111,
			0,
			0,
			.525
		],
		64: [
			0,
			.61111,
			0,
			0,
			.525
		],
		65: [
			0,
			.61111,
			0,
			0,
			.525
		],
		66: [
			0,
			.61111,
			0,
			0,
			.525
		],
		67: [
			0,
			.61111,
			0,
			0,
			.525
		],
		68: [
			0,
			.61111,
			0,
			0,
			.525
		],
		69: [
			0,
			.61111,
			0,
			0,
			.525
		],
		70: [
			0,
			.61111,
			0,
			0,
			.525
		],
		71: [
			0,
			.61111,
			0,
			0,
			.525
		],
		72: [
			0,
			.61111,
			0,
			0,
			.525
		],
		73: [
			0,
			.61111,
			0,
			0,
			.525
		],
		74: [
			0,
			.61111,
			0,
			0,
			.525
		],
		75: [
			0,
			.61111,
			0,
			0,
			.525
		],
		76: [
			0,
			.61111,
			0,
			0,
			.525
		],
		77: [
			0,
			.61111,
			0,
			0,
			.525
		],
		78: [
			0,
			.61111,
			0,
			0,
			.525
		],
		79: [
			0,
			.61111,
			0,
			0,
			.525
		],
		80: [
			0,
			.61111,
			0,
			0,
			.525
		],
		81: [
			.13889,
			.61111,
			0,
			0,
			.525
		],
		82: [
			0,
			.61111,
			0,
			0,
			.525
		],
		83: [
			0,
			.61111,
			0,
			0,
			.525
		],
		84: [
			0,
			.61111,
			0,
			0,
			.525
		],
		85: [
			0,
			.61111,
			0,
			0,
			.525
		],
		86: [
			0,
			.61111,
			0,
			0,
			.525
		],
		87: [
			0,
			.61111,
			0,
			0,
			.525
		],
		88: [
			0,
			.61111,
			0,
			0,
			.525
		],
		89: [
			0,
			.61111,
			0,
			0,
			.525
		],
		90: [
			0,
			.61111,
			0,
			0,
			.525
		],
		91: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		92: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		93: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		94: [
			0,
			.61111,
			0,
			0,
			.525
		],
		95: [
			.09514,
			0,
			0,
			0,
			.525
		],
		96: [
			0,
			.61111,
			0,
			0,
			.525
		],
		97: [
			0,
			.43056,
			0,
			0,
			.525
		],
		98: [
			0,
			.61111,
			0,
			0,
			.525
		],
		99: [
			0,
			.43056,
			0,
			0,
			.525
		],
		100: [
			0,
			.61111,
			0,
			0,
			.525
		],
		101: [
			0,
			.43056,
			0,
			0,
			.525
		],
		102: [
			0,
			.61111,
			0,
			0,
			.525
		],
		103: [
			.22222,
			.43056,
			0,
			0,
			.525
		],
		104: [
			0,
			.61111,
			0,
			0,
			.525
		],
		105: [
			0,
			.61111,
			0,
			0,
			.525
		],
		106: [
			.22222,
			.61111,
			0,
			0,
			.525
		],
		107: [
			0,
			.61111,
			0,
			0,
			.525
		],
		108: [
			0,
			.61111,
			0,
			0,
			.525
		],
		109: [
			0,
			.43056,
			0,
			0,
			.525
		],
		110: [
			0,
			.43056,
			0,
			0,
			.525
		],
		111: [
			0,
			.43056,
			0,
			0,
			.525
		],
		112: [
			.22222,
			.43056,
			0,
			0,
			.525
		],
		113: [
			.22222,
			.43056,
			0,
			0,
			.525
		],
		114: [
			0,
			.43056,
			0,
			0,
			.525
		],
		115: [
			0,
			.43056,
			0,
			0,
			.525
		],
		116: [
			0,
			.55358,
			0,
			0,
			.525
		],
		117: [
			0,
			.43056,
			0,
			0,
			.525
		],
		118: [
			0,
			.43056,
			0,
			0,
			.525
		],
		119: [
			0,
			.43056,
			0,
			0,
			.525
		],
		120: [
			0,
			.43056,
			0,
			0,
			.525
		],
		121: [
			.22222,
			.43056,
			0,
			0,
			.525
		],
		122: [
			0,
			.43056,
			0,
			0,
			.525
		],
		123: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		124: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		125: [
			.08333,
			.69444,
			0,
			0,
			.525
		],
		126: [
			0,
			.61111,
			0,
			0,
			.525
		],
		127: [
			0,
			.61111,
			0,
			0,
			.525
		],
		160: [
			0,
			0,
			0,
			0,
			.525
		],
		176: [
			0,
			.61111,
			0,
			0,
			.525
		],
		184: [
			.19445,
			0,
			0,
			0,
			.525
		],
		305: [
			0,
			.43056,
			0,
			0,
			.525
		],
		567: [
			.22222,
			.43056,
			0,
			0,
			.525
		],
		711: [
			0,
			.56597,
			0,
			0,
			.525
		],
		713: [
			0,
			.56555,
			0,
			0,
			.525
		],
		714: [
			0,
			.61111,
			0,
			0,
			.525
		],
		715: [
			0,
			.61111,
			0,
			0,
			.525
		],
		728: [
			0,
			.61111,
			0,
			0,
			.525
		],
		730: [
			0,
			.61111,
			0,
			0,
			.525
		],
		770: [
			0,
			.61111,
			0,
			0,
			.525
		],
		771: [
			0,
			.61111,
			0,
			0,
			.525
		],
		776: [
			0,
			.61111,
			0,
			0,
			.525
		],
		915: [
			0,
			.61111,
			0,
			0,
			.525
		],
		916: [
			0,
			.61111,
			0,
			0,
			.525
		],
		920: [
			0,
			.61111,
			0,
			0,
			.525
		],
		923: [
			0,
			.61111,
			0,
			0,
			.525
		],
		926: [
			0,
			.61111,
			0,
			0,
			.525
		],
		928: [
			0,
			.61111,
			0,
			0,
			.525
		],
		931: [
			0,
			.61111,
			0,
			0,
			.525
		],
		933: [
			0,
			.61111,
			0,
			0,
			.525
		],
		934: [
			0,
			.61111,
			0,
			0,
			.525
		],
		936: [
			0,
			.61111,
			0,
			0,
			.525
		],
		937: [
			0,
			.61111,
			0,
			0,
			.525
		],
		8216: [
			0,
			.61111,
			0,
			0,
			.525
		],
		8217: [
			0,
			.61111,
			0,
			0,
			.525
		],
		8242: [
			0,
			.61111,
			0,
			0,
			.525
		],
		9251: [
			.11111,
			.21944,
			0,
			0,
			.525
		]
	}
}, sigmasAndXis = {
	slant: [
		.25,
		.25,
		.25
	],
	space: [
		0,
		0,
		0
	],
	stretch: [
		0,
		0,
		0
	],
	shrink: [
		0,
		0,
		0
	],
	xHeight: [
		.431,
		.431,
		.431
	],
	quad: [
		1,
		1.171,
		1.472
	],
	extraSpace: [
		0,
		0,
		0
	],
	num1: [
		.677,
		.732,
		.925
	],
	num2: [
		.394,
		.384,
		.387
	],
	num3: [
		.444,
		.471,
		.504
	],
	denom1: [
		.686,
		.752,
		1.025
	],
	denom2: [
		.345,
		.344,
		.532
	],
	sup1: [
		.413,
		.503,
		.504
	],
	sup2: [
		.363,
		.431,
		.404
	],
	sup3: [
		.289,
		.286,
		.294
	],
	sub1: [
		.15,
		.143,
		.2
	],
	sub2: [
		.247,
		.286,
		.4
	],
	supDrop: [
		.386,
		.353,
		.494
	],
	subDrop: [
		.05,
		.071,
		.1
	],
	delim1: [
		2.39,
		1.7,
		1.98
	],
	delim2: [
		1.01,
		1.157,
		1.42
	],
	axisHeight: [
		.25,
		.25,
		.25
	],
	defaultRuleThickness: [
		.04,
		.049,
		.049
	],
	bigOpSpacing1: [
		.111,
		.111,
		.111
	],
	bigOpSpacing2: [
		.166,
		.166,
		.166
	],
	bigOpSpacing3: [
		.2,
		.2,
		.2
	],
	bigOpSpacing4: [
		.6,
		.611,
		.611
	],
	bigOpSpacing5: [
		.1,
		.143,
		.143
	],
	sqrtRuleThickness: [
		.04,
		.04,
		.04
	],
	ptPerEm: [
		10,
		10,
		10
	],
	doubleRuleSep: [
		.2,
		.2,
		.2
	],
	arrayRuleWidth: [
		.04,
		.04,
		.04
	],
	fboxsep: [
		.3,
		.3,
		.3
	],
	fboxrule: [
		.04,
		.04,
		.04
	]
}, extraCharacterMap = {
	Å: "A",
	Ð: "D",
	Þ: "o",
	å: "a",
	ð: "d",
	þ: "o",
	А: "A",
	Б: "B",
	В: "B",
	Г: "F",
	Д: "A",
	Е: "E",
	Ж: "K",
	З: "3",
	И: "N",
	Й: "N",
	К: "K",
	Л: "N",
	М: "M",
	Н: "H",
	О: "O",
	П: "N",
	Р: "P",
	С: "C",
	Т: "T",
	У: "y",
	Ф: "O",
	Х: "X",
	Ц: "U",
	Ч: "h",
	Ш: "W",
	Щ: "W",
	Ъ: "B",
	Ы: "X",
	Ь: "B",
	Э: "3",
	Ю: "X",
	Я: "R",
	а: "a",
	б: "b",
	в: "a",
	г: "r",
	д: "y",
	е: "e",
	ж: "m",
	з: "e",
	и: "n",
	й: "n",
	к: "n",
	л: "n",
	м: "m",
	н: "n",
	о: "o",
	п: "n",
	р: "p",
	с: "c",
	т: "o",
	у: "y",
	ф: "b",
	х: "x",
	ц: "n",
	ч: "n",
	ш: "w",
	щ: "w",
	ъ: "a",
	ы: "m",
	ь: "a",
	э: "e",
	ю: "m",
	я: "r"
};
function setFontMetrics(e, t) {
	fontMetricsData[e] = t;
}
function getCharacterMetrics(e, t, n) {
	if (!fontMetricsData[t]) throw Error("Font metrics not found for font: " + t + ".");
	var a = e.charCodeAt(0), o = fontMetricsData[t][a];
	if (!o && e[0] in extraCharacterMap && (a = extraCharacterMap[e[0]].charCodeAt(0), o = fontMetricsData[t][a]), !o && n === "text" && supportedCodepoint(a) && (o = fontMetricsData[t][77]), o) return {
		depth: o[0],
		height: o[1],
		italic: o[2],
		skew: o[3],
		width: o[4]
	};
}
var fontMetricsBySizeIndex = {};
function getGlobalMetrics(e) {
	var t = e >= 5 ? 0 : e >= 3 ? 1 : 2;
	if (!fontMetricsBySizeIndex[t]) {
		var n = fontMetricsBySizeIndex[t] = { cssEmPerMu: sigmasAndXis.quad[t] / 18 };
		for (var a in sigmasAndXis) sigmasAndXis.hasOwnProperty(a) && (n[a] = sigmasAndXis[a][t]);
	}
	return fontMetricsBySizeIndex[t];
}
var ATOMS = {
	bin: 1,
	close: 1,
	inner: 1,
	open: 1,
	punct: 1,
	rel: 1
}, NON_ATOMS = {
	"accent-token": 1,
	mathord: 1,
	"op-token": 1,
	spacing: 1,
	textord: 1
}, symbols = {
	math: {},
	text: {}
};
function defineSymbol(e, t, n, a, o, s) {
	symbols[e][o] = {
		font: t,
		group: n,
		replace: a
	}, s && a && (symbols[e][a] = symbols[e][o]);
}
var math = "math", text = "text", main = "main", ams = "ams", accent = "accent-token", bin = "bin", close = "close", inner = "inner", mathord = "mathord", op = "op-token", open = "open", punct = "punct", rel = "rel", spacing = "spacing", textord = "textord";
defineSymbol(math, main, rel, "≡", "\\equiv", !0), defineSymbol(math, main, rel, "≺", "\\prec", !0), defineSymbol(math, main, rel, "≻", "\\succ", !0), defineSymbol(math, main, rel, "∼", "\\sim", !0), defineSymbol(math, main, rel, "⊥", "\\perp"), defineSymbol(math, main, rel, "⪯", "\\preceq", !0), defineSymbol(math, main, rel, "⪰", "\\succeq", !0), defineSymbol(math, main, rel, "≃", "\\simeq", !0), defineSymbol(math, main, rel, "∣", "\\mid", !0), defineSymbol(math, main, rel, "≪", "\\ll", !0), defineSymbol(math, main, rel, "≫", "\\gg", !0), defineSymbol(math, main, rel, "≍", "\\asymp", !0), defineSymbol(math, main, rel, "∥", "\\parallel"), defineSymbol(math, main, rel, "⋈", "\\bowtie", !0), defineSymbol(math, main, rel, "⌣", "\\smile", !0), defineSymbol(math, main, rel, "⊑", "\\sqsubseteq", !0), defineSymbol(math, main, rel, "⊒", "\\sqsupseteq", !0), defineSymbol(math, main, rel, "≐", "\\doteq", !0), defineSymbol(math, main, rel, "⌢", "\\frown", !0), defineSymbol(math, main, rel, "∋", "\\ni", !0), defineSymbol(math, main, rel, "∝", "\\propto", !0), defineSymbol(math, main, rel, "⊢", "\\vdash", !0), defineSymbol(math, main, rel, "⊣", "\\dashv", !0), defineSymbol(math, main, rel, "∋", "\\owns"), defineSymbol(math, main, punct, ".", "\\ldotp"), defineSymbol(math, main, punct, "⋅", "\\cdotp"), defineSymbol(math, main, punct, "⋅", "·"), defineSymbol(text, main, textord, "⋅", "·"), defineSymbol(math, main, textord, "#", "\\#"), defineSymbol(text, main, textord, "#", "\\#"), defineSymbol(math, main, textord, "&", "\\&"), defineSymbol(text, main, textord, "&", "\\&"), defineSymbol(math, main, textord, "ℵ", "\\aleph", !0), defineSymbol(math, main, textord, "∀", "\\forall", !0), defineSymbol(math, main, textord, "ℏ", "\\hbar", !0), defineSymbol(math, main, textord, "∃", "\\exists", !0), defineSymbol(math, main, textord, "∇", "\\nabla", !0), defineSymbol(math, main, textord, "♭", "\\flat", !0), defineSymbol(math, main, textord, "ℓ", "\\ell", !0), defineSymbol(math, main, textord, "♮", "\\natural", !0), defineSymbol(math, main, textord, "♣", "\\clubsuit", !0), defineSymbol(math, main, textord, "℘", "\\wp", !0), defineSymbol(math, main, textord, "♯", "\\sharp", !0), defineSymbol(math, main, textord, "♢", "\\diamondsuit", !0), defineSymbol(math, main, textord, "ℜ", "\\Re", !0), defineSymbol(math, main, textord, "♡", "\\heartsuit", !0), defineSymbol(math, main, textord, "ℑ", "\\Im", !0), defineSymbol(math, main, textord, "♠", "\\spadesuit", !0), defineSymbol(math, main, textord, "§", "\\S", !0), defineSymbol(text, main, textord, "§", "\\S"), defineSymbol(math, main, textord, "¶", "\\P", !0), defineSymbol(text, main, textord, "¶", "\\P"), defineSymbol(math, main, textord, "†", "\\dag"), defineSymbol(text, main, textord, "†", "\\dag"), defineSymbol(text, main, textord, "†", "\\textdagger"), defineSymbol(math, main, textord, "‡", "\\ddag"), defineSymbol(text, main, textord, "‡", "\\ddag"), defineSymbol(text, main, textord, "‡", "\\textdaggerdbl"), defineSymbol(math, main, close, "⎱", "\\rmoustache", !0), defineSymbol(math, main, open, "⎰", "\\lmoustache", !0), defineSymbol(math, main, close, "⟯", "\\rgroup", !0), defineSymbol(math, main, open, "⟮", "\\lgroup", !0), defineSymbol(math, main, bin, "∓", "\\mp", !0), defineSymbol(math, main, bin, "⊖", "\\ominus", !0), defineSymbol(math, main, bin, "⊎", "\\uplus", !0), defineSymbol(math, main, bin, "⊓", "\\sqcap", !0), defineSymbol(math, main, bin, "∗", "\\ast"), defineSymbol(math, main, bin, "⊔", "\\sqcup", !0), defineSymbol(math, main, bin, "◯", "\\bigcirc", !0), defineSymbol(math, main, bin, "∙", "\\bullet", !0), defineSymbol(math, main, bin, "‡", "\\ddagger"), defineSymbol(math, main, bin, "≀", "\\wr", !0), defineSymbol(math, main, bin, "⨿", "\\amalg"), defineSymbol(math, main, bin, "&", "\\And"), defineSymbol(math, main, rel, "⟵", "\\longleftarrow", !0), defineSymbol(math, main, rel, "⇐", "\\Leftarrow", !0), defineSymbol(math, main, rel, "⟸", "\\Longleftarrow", !0), defineSymbol(math, main, rel, "⟶", "\\longrightarrow", !0), defineSymbol(math, main, rel, "⇒", "\\Rightarrow", !0), defineSymbol(math, main, rel, "⟹", "\\Longrightarrow", !0), defineSymbol(math, main, rel, "↔", "\\leftrightarrow", !0), defineSymbol(math, main, rel, "⟷", "\\longleftrightarrow", !0), defineSymbol(math, main, rel, "⇔", "\\Leftrightarrow", !0), defineSymbol(math, main, rel, "⟺", "\\Longleftrightarrow", !0), defineSymbol(math, main, rel, "↦", "\\mapsto", !0), defineSymbol(math, main, rel, "⟼", "\\longmapsto", !0), defineSymbol(math, main, rel, "↗", "\\nearrow", !0), defineSymbol(math, main, rel, "↩", "\\hookleftarrow", !0), defineSymbol(math, main, rel, "↪", "\\hookrightarrow", !0), defineSymbol(math, main, rel, "↘", "\\searrow", !0), defineSymbol(math, main, rel, "↼", "\\leftharpoonup", !0), defineSymbol(math, main, rel, "⇀", "\\rightharpoonup", !0), defineSymbol(math, main, rel, "↙", "\\swarrow", !0), defineSymbol(math, main, rel, "↽", "\\leftharpoondown", !0), defineSymbol(math, main, rel, "⇁", "\\rightharpoondown", !0), defineSymbol(math, main, rel, "↖", "\\nwarrow", !0), defineSymbol(math, main, rel, "⇌", "\\rightleftharpoons", !0), defineSymbol(math, ams, rel, "≮", "\\nless", !0), defineSymbol(math, ams, rel, "", "\\@nleqslant"), defineSymbol(math, ams, rel, "", "\\@nleqq"), defineSymbol(math, ams, rel, "⪇", "\\lneq", !0), defineSymbol(math, ams, rel, "≨", "\\lneqq", !0), defineSymbol(math, ams, rel, "", "\\@lvertneqq"), defineSymbol(math, ams, rel, "⋦", "\\lnsim", !0), defineSymbol(math, ams, rel, "⪉", "\\lnapprox", !0), defineSymbol(math, ams, rel, "⊀", "\\nprec", !0), defineSymbol(math, ams, rel, "⋠", "\\npreceq", !0), defineSymbol(math, ams, rel, "⋨", "\\precnsim", !0), defineSymbol(math, ams, rel, "⪹", "\\precnapprox", !0), defineSymbol(math, ams, rel, "≁", "\\nsim", !0), defineSymbol(math, ams, rel, "", "\\@nshortmid"), defineSymbol(math, ams, rel, "∤", "\\nmid", !0), defineSymbol(math, ams, rel, "⊬", "\\nvdash", !0), defineSymbol(math, ams, rel, "⊭", "\\nvDash", !0), defineSymbol(math, ams, rel, "⋪", "\\ntriangleleft"), defineSymbol(math, ams, rel, "⋬", "\\ntrianglelefteq", !0), defineSymbol(math, ams, rel, "⊊", "\\subsetneq", !0), defineSymbol(math, ams, rel, "", "\\@varsubsetneq"), defineSymbol(math, ams, rel, "⫋", "\\subsetneqq", !0), defineSymbol(math, ams, rel, "", "\\@varsubsetneqq"), defineSymbol(math, ams, rel, "≯", "\\ngtr", !0), defineSymbol(math, ams, rel, "", "\\@ngeqslant"), defineSymbol(math, ams, rel, "", "\\@ngeqq"), defineSymbol(math, ams, rel, "⪈", "\\gneq", !0), defineSymbol(math, ams, rel, "≩", "\\gneqq", !0), defineSymbol(math, ams, rel, "", "\\@gvertneqq"), defineSymbol(math, ams, rel, "⋧", "\\gnsim", !0), defineSymbol(math, ams, rel, "⪊", "\\gnapprox", !0), defineSymbol(math, ams, rel, "⊁", "\\nsucc", !0), defineSymbol(math, ams, rel, "⋡", "\\nsucceq", !0), defineSymbol(math, ams, rel, "⋩", "\\succnsim", !0), defineSymbol(math, ams, rel, "⪺", "\\succnapprox", !0), defineSymbol(math, ams, rel, "≆", "\\ncong", !0), defineSymbol(math, ams, rel, "", "\\@nshortparallel"), defineSymbol(math, ams, rel, "∦", "\\nparallel", !0), defineSymbol(math, ams, rel, "⊯", "\\nVDash", !0), defineSymbol(math, ams, rel, "⋫", "\\ntriangleright"), defineSymbol(math, ams, rel, "⋭", "\\ntrianglerighteq", !0), defineSymbol(math, ams, rel, "", "\\@nsupseteqq"), defineSymbol(math, ams, rel, "⊋", "\\supsetneq", !0), defineSymbol(math, ams, rel, "", "\\@varsupsetneq"), defineSymbol(math, ams, rel, "⫌", "\\supsetneqq", !0), defineSymbol(math, ams, rel, "", "\\@varsupsetneqq"), defineSymbol(math, ams, rel, "⊮", "\\nVdash", !0), defineSymbol(math, ams, rel, "⪵", "\\precneqq", !0), defineSymbol(math, ams, rel, "⪶", "\\succneqq", !0), defineSymbol(math, ams, rel, "", "\\@nsubseteqq"), defineSymbol(math, ams, bin, "⊴", "\\unlhd"), defineSymbol(math, ams, bin, "⊵", "\\unrhd"), defineSymbol(math, ams, rel, "↚", "\\nleftarrow", !0), defineSymbol(math, ams, rel, "↛", "\\nrightarrow", !0), defineSymbol(math, ams, rel, "⇍", "\\nLeftarrow", !0), defineSymbol(math, ams, rel, "⇏", "\\nRightarrow", !0), defineSymbol(math, ams, rel, "↮", "\\nleftrightarrow", !0), defineSymbol(math, ams, rel, "⇎", "\\nLeftrightarrow", !0), defineSymbol(math, ams, rel, "△", "\\vartriangle"), defineSymbol(math, ams, textord, "ℏ", "\\hslash"), defineSymbol(math, ams, textord, "▽", "\\triangledown"), defineSymbol(math, ams, textord, "◊", "\\lozenge"), defineSymbol(math, ams, textord, "Ⓢ", "\\circledS"), defineSymbol(math, ams, textord, "®", "\\circledR"), defineSymbol(text, ams, textord, "®", "\\circledR"), defineSymbol(math, ams, textord, "∡", "\\measuredangle", !0), defineSymbol(math, ams, textord, "∄", "\\nexists"), defineSymbol(math, ams, textord, "℧", "\\mho"), defineSymbol(math, ams, textord, "Ⅎ", "\\Finv", !0), defineSymbol(math, ams, textord, "⅁", "\\Game", !0), defineSymbol(math, ams, textord, "‵", "\\backprime"), defineSymbol(math, ams, textord, "▲", "\\blacktriangle"), defineSymbol(math, ams, textord, "▼", "\\blacktriangledown"), defineSymbol(math, ams, textord, "■", "\\blacksquare"), defineSymbol(math, ams, textord, "⧫", "\\blacklozenge"), defineSymbol(math, ams, textord, "★", "\\bigstar"), defineSymbol(math, ams, textord, "∢", "\\sphericalangle", !0), defineSymbol(math, ams, textord, "∁", "\\complement", !0), defineSymbol(math, ams, textord, "ð", "\\eth", !0), defineSymbol(text, main, textord, "ð", "ð"), defineSymbol(math, ams, textord, "╱", "\\diagup"), defineSymbol(math, ams, textord, "╲", "\\diagdown"), defineSymbol(math, ams, textord, "□", "\\square"), defineSymbol(math, ams, textord, "□", "\\Box"), defineSymbol(math, ams, textord, "◊", "\\Diamond"), defineSymbol(math, ams, textord, "¥", "\\yen", !0), defineSymbol(text, ams, textord, "¥", "\\yen", !0), defineSymbol(math, ams, textord, "✓", "\\checkmark", !0), defineSymbol(text, ams, textord, "✓", "\\checkmark"), defineSymbol(math, ams, textord, "ℶ", "\\beth", !0), defineSymbol(math, ams, textord, "ℸ", "\\daleth", !0), defineSymbol(math, ams, textord, "ℷ", "\\gimel", !0), defineSymbol(math, ams, textord, "ϝ", "\\digamma", !0), defineSymbol(math, ams, textord, "ϰ", "\\varkappa"), defineSymbol(math, ams, open, "┌", "\\@ulcorner", !0), defineSymbol(math, ams, close, "┐", "\\@urcorner", !0), defineSymbol(math, ams, open, "└", "\\@llcorner", !0), defineSymbol(math, ams, close, "┘", "\\@lrcorner", !0), defineSymbol(math, ams, rel, "≦", "\\leqq", !0), defineSymbol(math, ams, rel, "⩽", "\\leqslant", !0), defineSymbol(math, ams, rel, "⪕", "\\eqslantless", !0), defineSymbol(math, ams, rel, "≲", "\\lesssim", !0), defineSymbol(math, ams, rel, "⪅", "\\lessapprox", !0), defineSymbol(math, ams, rel, "≊", "\\approxeq", !0), defineSymbol(math, ams, bin, "⋖", "\\lessdot"), defineSymbol(math, ams, rel, "⋘", "\\lll", !0), defineSymbol(math, ams, rel, "≶", "\\lessgtr", !0), defineSymbol(math, ams, rel, "⋚", "\\lesseqgtr", !0), defineSymbol(math, ams, rel, "⪋", "\\lesseqqgtr", !0), defineSymbol(math, ams, rel, "≑", "\\doteqdot"), defineSymbol(math, ams, rel, "≓", "\\risingdotseq", !0), defineSymbol(math, ams, rel, "≒", "\\fallingdotseq", !0), defineSymbol(math, ams, rel, "∽", "\\backsim", !0), defineSymbol(math, ams, rel, "⋍", "\\backsimeq", !0), defineSymbol(math, ams, rel, "⫅", "\\subseteqq", !0), defineSymbol(math, ams, rel, "⋐", "\\Subset", !0), defineSymbol(math, ams, rel, "⊏", "\\sqsubset", !0), defineSymbol(math, ams, rel, "≼", "\\preccurlyeq", !0), defineSymbol(math, ams, rel, "⋞", "\\curlyeqprec", !0), defineSymbol(math, ams, rel, "≾", "\\precsim", !0), defineSymbol(math, ams, rel, "⪷", "\\precapprox", !0), defineSymbol(math, ams, rel, "⊲", "\\vartriangleleft"), defineSymbol(math, ams, rel, "⊴", "\\trianglelefteq"), defineSymbol(math, ams, rel, "⊨", "\\vDash", !0), defineSymbol(math, ams, rel, "⊪", "\\Vvdash", !0), defineSymbol(math, ams, rel, "⌣", "\\smallsmile"), defineSymbol(math, ams, rel, "⌢", "\\smallfrown"), defineSymbol(math, ams, rel, "≏", "\\bumpeq", !0), defineSymbol(math, ams, rel, "≎", "\\Bumpeq", !0), defineSymbol(math, ams, rel, "≧", "\\geqq", !0), defineSymbol(math, ams, rel, "⩾", "\\geqslant", !0), defineSymbol(math, ams, rel, "⪖", "\\eqslantgtr", !0), defineSymbol(math, ams, rel, "≳", "\\gtrsim", !0), defineSymbol(math, ams, rel, "⪆", "\\gtrapprox", !0), defineSymbol(math, ams, bin, "⋗", "\\gtrdot"), defineSymbol(math, ams, rel, "⋙", "\\ggg", !0), defineSymbol(math, ams, rel, "≷", "\\gtrless", !0), defineSymbol(math, ams, rel, "⋛", "\\gtreqless", !0), defineSymbol(math, ams, rel, "⪌", "\\gtreqqless", !0), defineSymbol(math, ams, rel, "≖", "\\eqcirc", !0), defineSymbol(math, ams, rel, "≗", "\\circeq", !0), defineSymbol(math, ams, rel, "≜", "\\triangleq", !0), defineSymbol(math, ams, rel, "∼", "\\thicksim"), defineSymbol(math, ams, rel, "≈", "\\thickapprox"), defineSymbol(math, ams, rel, "⫆", "\\supseteqq", !0), defineSymbol(math, ams, rel, "⋑", "\\Supset", !0), defineSymbol(math, ams, rel, "⊐", "\\sqsupset", !0), defineSymbol(math, ams, rel, "≽", "\\succcurlyeq", !0), defineSymbol(math, ams, rel, "⋟", "\\curlyeqsucc", !0), defineSymbol(math, ams, rel, "≿", "\\succsim", !0), defineSymbol(math, ams, rel, "⪸", "\\succapprox", !0), defineSymbol(math, ams, rel, "⊳", "\\vartriangleright"), defineSymbol(math, ams, rel, "⊵", "\\trianglerighteq"), defineSymbol(math, ams, rel, "⊩", "\\Vdash", !0), defineSymbol(math, ams, rel, "∣", "\\shortmid"), defineSymbol(math, ams, rel, "∥", "\\shortparallel"), defineSymbol(math, ams, rel, "≬", "\\between", !0), defineSymbol(math, ams, rel, "⋔", "\\pitchfork", !0), defineSymbol(math, ams, rel, "∝", "\\varpropto"), defineSymbol(math, ams, rel, "◀", "\\blacktriangleleft"), defineSymbol(math, ams, rel, "∴", "\\therefore", !0), defineSymbol(math, ams, rel, "∍", "\\backepsilon"), defineSymbol(math, ams, rel, "▶", "\\blacktriangleright"), defineSymbol(math, ams, rel, "∵", "\\because", !0), defineSymbol(math, ams, rel, "⋘", "\\llless"), defineSymbol(math, ams, rel, "⋙", "\\gggtr"), defineSymbol(math, ams, bin, "⊲", "\\lhd"), defineSymbol(math, ams, bin, "⊳", "\\rhd"), defineSymbol(math, ams, rel, "≂", "\\eqsim", !0), defineSymbol(math, main, rel, "⋈", "\\Join"), defineSymbol(math, ams, rel, "≑", "\\Doteq", !0), defineSymbol(math, ams, bin, "∔", "\\dotplus", !0), defineSymbol(math, ams, bin, "∖", "\\smallsetminus"), defineSymbol(math, ams, bin, "⋒", "\\Cap", !0), defineSymbol(math, ams, bin, "⋓", "\\Cup", !0), defineSymbol(math, ams, bin, "⩞", "\\doublebarwedge", !0), defineSymbol(math, ams, bin, "⊟", "\\boxminus", !0), defineSymbol(math, ams, bin, "⊞", "\\boxplus", !0), defineSymbol(math, ams, bin, "⋇", "\\divideontimes", !0), defineSymbol(math, ams, bin, "⋉", "\\ltimes", !0), defineSymbol(math, ams, bin, "⋊", "\\rtimes", !0), defineSymbol(math, ams, bin, "⋋", "\\leftthreetimes", !0), defineSymbol(math, ams, bin, "⋌", "\\rightthreetimes", !0), defineSymbol(math, ams, bin, "⋏", "\\curlywedge", !0), defineSymbol(math, ams, bin, "⋎", "\\curlyvee", !0), defineSymbol(math, ams, bin, "⊝", "\\circleddash", !0), defineSymbol(math, ams, bin, "⊛", "\\circledast", !0), defineSymbol(math, ams, bin, "⋅", "\\centerdot"), defineSymbol(math, ams, bin, "⊺", "\\intercal", !0), defineSymbol(math, ams, bin, "⋒", "\\doublecap"), defineSymbol(math, ams, bin, "⋓", "\\doublecup"), defineSymbol(math, ams, bin, "⊠", "\\boxtimes", !0), defineSymbol(math, ams, rel, "⇢", "\\dashrightarrow", !0), defineSymbol(math, ams, rel, "⇠", "\\dashleftarrow", !0), defineSymbol(math, ams, rel, "⇇", "\\leftleftarrows", !0), defineSymbol(math, ams, rel, "⇆", "\\leftrightarrows", !0), defineSymbol(math, ams, rel, "⇚", "\\Lleftarrow", !0), defineSymbol(math, ams, rel, "↞", "\\twoheadleftarrow", !0), defineSymbol(math, ams, rel, "↢", "\\leftarrowtail", !0), defineSymbol(math, ams, rel, "↫", "\\looparrowleft", !0), defineSymbol(math, ams, rel, "⇋", "\\leftrightharpoons", !0), defineSymbol(math, ams, rel, "↶", "\\curvearrowleft", !0), defineSymbol(math, ams, rel, "↺", "\\circlearrowleft", !0), defineSymbol(math, ams, rel, "↰", "\\Lsh", !0), defineSymbol(math, ams, rel, "⇈", "\\upuparrows", !0), defineSymbol(math, ams, rel, "↿", "\\upharpoonleft", !0), defineSymbol(math, ams, rel, "⇃", "\\downharpoonleft", !0), defineSymbol(math, main, rel, "⊶", "\\origof", !0), defineSymbol(math, main, rel, "⊷", "\\imageof", !0), defineSymbol(math, ams, rel, "⊸", "\\multimap", !0), defineSymbol(math, ams, rel, "↭", "\\leftrightsquigarrow", !0), defineSymbol(math, ams, rel, "⇉", "\\rightrightarrows", !0), defineSymbol(math, ams, rel, "⇄", "\\rightleftarrows", !0), defineSymbol(math, ams, rel, "↠", "\\twoheadrightarrow", !0), defineSymbol(math, ams, rel, "↣", "\\rightarrowtail", !0), defineSymbol(math, ams, rel, "↬", "\\looparrowright", !0), defineSymbol(math, ams, rel, "↷", "\\curvearrowright", !0), defineSymbol(math, ams, rel, "↻", "\\circlearrowright", !0), defineSymbol(math, ams, rel, "↱", "\\Rsh", !0), defineSymbol(math, ams, rel, "⇊", "\\downdownarrows", !0), defineSymbol(math, ams, rel, "↾", "\\upharpoonright", !0), defineSymbol(math, ams, rel, "⇂", "\\downharpoonright", !0), defineSymbol(math, ams, rel, "⇝", "\\rightsquigarrow", !0), defineSymbol(math, ams, rel, "⇝", "\\leadsto"), defineSymbol(math, ams, rel, "⇛", "\\Rrightarrow", !0), defineSymbol(math, ams, rel, "↾", "\\restriction"), defineSymbol(math, main, textord, "‘", "`"), defineSymbol(math, main, textord, "$", "\\$"), defineSymbol(text, main, textord, "$", "\\$"), defineSymbol(text, main, textord, "$", "\\textdollar"), defineSymbol(math, main, textord, "%", "\\%"), defineSymbol(text, main, textord, "%", "\\%"), defineSymbol(math, main, textord, "_", "\\_"), defineSymbol(text, main, textord, "_", "\\_"), defineSymbol(text, main, textord, "_", "\\textunderscore"), defineSymbol(math, main, textord, "∠", "\\angle", !0), defineSymbol(math, main, textord, "∞", "\\infty", !0), defineSymbol(math, main, textord, "′", "\\prime"), defineSymbol(math, main, textord, "△", "\\triangle"), defineSymbol(math, main, textord, "Γ", "\\Gamma", !0), defineSymbol(math, main, textord, "Δ", "\\Delta", !0), defineSymbol(math, main, textord, "Θ", "\\Theta", !0), defineSymbol(math, main, textord, "Λ", "\\Lambda", !0), defineSymbol(math, main, textord, "Ξ", "\\Xi", !0), defineSymbol(math, main, textord, "Π", "\\Pi", !0), defineSymbol(math, main, textord, "Σ", "\\Sigma", !0), defineSymbol(math, main, textord, "Υ", "\\Upsilon", !0), defineSymbol(math, main, textord, "Φ", "\\Phi", !0), defineSymbol(math, main, textord, "Ψ", "\\Psi", !0), defineSymbol(math, main, textord, "Ω", "\\Omega", !0), defineSymbol(math, main, textord, "A", "Α"), defineSymbol(math, main, textord, "B", "Β"), defineSymbol(math, main, textord, "E", "Ε"), defineSymbol(math, main, textord, "Z", "Ζ"), defineSymbol(math, main, textord, "H", "Η"), defineSymbol(math, main, textord, "I", "Ι"), defineSymbol(math, main, textord, "K", "Κ"), defineSymbol(math, main, textord, "M", "Μ"), defineSymbol(math, main, textord, "N", "Ν"), defineSymbol(math, main, textord, "O", "Ο"), defineSymbol(math, main, textord, "P", "Ρ"), defineSymbol(math, main, textord, "T", "Τ"), defineSymbol(math, main, textord, "X", "Χ"), defineSymbol(math, main, textord, "¬", "\\neg", !0), defineSymbol(math, main, textord, "¬", "\\lnot"), defineSymbol(math, main, textord, "⊤", "\\top"), defineSymbol(math, main, textord, "⊥", "\\bot"), defineSymbol(math, main, textord, "∅", "\\emptyset"), defineSymbol(math, ams, textord, "∅", "\\varnothing"), defineSymbol(math, main, mathord, "α", "\\alpha", !0), defineSymbol(math, main, mathord, "β", "\\beta", !0), defineSymbol(math, main, mathord, "γ", "\\gamma", !0), defineSymbol(math, main, mathord, "δ", "\\delta", !0), defineSymbol(math, main, mathord, "ϵ", "\\epsilon", !0), defineSymbol(math, main, mathord, "ζ", "\\zeta", !0), defineSymbol(math, main, mathord, "η", "\\eta", !0), defineSymbol(math, main, mathord, "θ", "\\theta", !0), defineSymbol(math, main, mathord, "ι", "\\iota", !0), defineSymbol(math, main, mathord, "κ", "\\kappa", !0), defineSymbol(math, main, mathord, "λ", "\\lambda", !0), defineSymbol(math, main, mathord, "μ", "\\mu", !0), defineSymbol(math, main, mathord, "ν", "\\nu", !0), defineSymbol(math, main, mathord, "ξ", "\\xi", !0), defineSymbol(math, main, mathord, "ο", "\\omicron", !0), defineSymbol(math, main, mathord, "π", "\\pi", !0), defineSymbol(math, main, mathord, "ρ", "\\rho", !0), defineSymbol(math, main, mathord, "σ", "\\sigma", !0), defineSymbol(math, main, mathord, "τ", "\\tau", !0), defineSymbol(math, main, mathord, "υ", "\\upsilon", !0), defineSymbol(math, main, mathord, "ϕ", "\\phi", !0), defineSymbol(math, main, mathord, "χ", "\\chi", !0), defineSymbol(math, main, mathord, "ψ", "\\psi", !0), defineSymbol(math, main, mathord, "ω", "\\omega", !0), defineSymbol(math, main, mathord, "ε", "\\varepsilon", !0), defineSymbol(math, main, mathord, "ϑ", "\\vartheta", !0), defineSymbol(math, main, mathord, "ϖ", "\\varpi", !0), defineSymbol(math, main, mathord, "ϱ", "\\varrho", !0), defineSymbol(math, main, mathord, "ς", "\\varsigma", !0), defineSymbol(math, main, mathord, "φ", "\\varphi", !0), defineSymbol(math, main, bin, "∗", "*", !0), defineSymbol(math, main, bin, "+", "+"), defineSymbol(math, main, bin, "−", "-", !0), defineSymbol(math, main, bin, "⋅", "\\cdot", !0), defineSymbol(math, main, bin, "∘", "\\circ", !0), defineSymbol(math, main, bin, "÷", "\\div", !0), defineSymbol(math, main, bin, "±", "\\pm", !0), defineSymbol(math, main, bin, "×", "\\times", !0), defineSymbol(math, main, bin, "∩", "\\cap", !0), defineSymbol(math, main, bin, "∪", "\\cup", !0), defineSymbol(math, main, bin, "∖", "\\setminus", !0), defineSymbol(math, main, bin, "∧", "\\land"), defineSymbol(math, main, bin, "∨", "\\lor"), defineSymbol(math, main, bin, "∧", "\\wedge", !0), defineSymbol(math, main, bin, "∨", "\\vee", !0), defineSymbol(math, main, textord, "√", "\\surd"), defineSymbol(math, main, open, "⟨", "\\langle", !0), defineSymbol(math, main, open, "∣", "\\lvert"), defineSymbol(math, main, open, "∥", "\\lVert"), defineSymbol(math, main, close, "?", "?"), defineSymbol(math, main, close, "!", "!"), defineSymbol(math, main, close, "⟩", "\\rangle", !0), defineSymbol(math, main, close, "∣", "\\rvert"), defineSymbol(math, main, close, "∥", "\\rVert"), defineSymbol(math, main, rel, "=", "="), defineSymbol(math, main, rel, ":", ":"), defineSymbol(math, main, rel, "≈", "\\approx", !0), defineSymbol(math, main, rel, "≅", "\\cong", !0), defineSymbol(math, main, rel, "≥", "\\ge"), defineSymbol(math, main, rel, "≥", "\\geq", !0), defineSymbol(math, main, rel, "←", "\\gets"), defineSymbol(math, main, rel, ">", "\\gt", !0), defineSymbol(math, main, rel, "∈", "\\in", !0), defineSymbol(math, main, rel, "", "\\@not"), defineSymbol(math, main, rel, "⊂", "\\subset", !0), defineSymbol(math, main, rel, "⊃", "\\supset", !0), defineSymbol(math, main, rel, "⊆", "\\subseteq", !0), defineSymbol(math, main, rel, "⊇", "\\supseteq", !0), defineSymbol(math, ams, rel, "⊈", "\\nsubseteq", !0), defineSymbol(math, ams, rel, "⊉", "\\nsupseteq", !0), defineSymbol(math, main, rel, "⊨", "\\models"), defineSymbol(math, main, rel, "←", "\\leftarrow", !0), defineSymbol(math, main, rel, "≤", "\\le"), defineSymbol(math, main, rel, "≤", "\\leq", !0), defineSymbol(math, main, rel, "<", "\\lt", !0), defineSymbol(math, main, rel, "→", "\\rightarrow", !0), defineSymbol(math, main, rel, "→", "\\to"), defineSymbol(math, ams, rel, "≱", "\\ngeq", !0), defineSymbol(math, ams, rel, "≰", "\\nleq", !0), defineSymbol(math, main, spacing, "\xA0", "\\ "), defineSymbol(math, main, spacing, "\xA0", "\\space"), defineSymbol(math, main, spacing, "\xA0", "\\nobreakspace"), defineSymbol(text, main, spacing, "\xA0", "\\ "), defineSymbol(text, main, spacing, "\xA0", " "), defineSymbol(text, main, spacing, "\xA0", "\\space"), defineSymbol(text, main, spacing, "\xA0", "\\nobreakspace"), defineSymbol(math, main, spacing, null, "\\nobreak"), defineSymbol(math, main, spacing, null, "\\allowbreak"), defineSymbol(math, main, punct, ",", ","), defineSymbol(math, main, punct, ";", ";"), defineSymbol(math, ams, bin, "⊼", "\\barwedge", !0), defineSymbol(math, ams, bin, "⊻", "\\veebar", !0), defineSymbol(math, main, bin, "⊙", "\\odot", !0), defineSymbol(math, main, bin, "⊕", "\\oplus", !0), defineSymbol(math, main, bin, "⊗", "\\otimes", !0), defineSymbol(math, main, textord, "∂", "\\partial", !0), defineSymbol(math, main, bin, "⊘", "\\oslash", !0), defineSymbol(math, ams, bin, "⊚", "\\circledcirc", !0), defineSymbol(math, ams, bin, "⊡", "\\boxdot", !0), defineSymbol(math, main, bin, "△", "\\bigtriangleup"), defineSymbol(math, main, bin, "▽", "\\bigtriangledown"), defineSymbol(math, main, bin, "†", "\\dagger"), defineSymbol(math, main, bin, "⋄", "\\diamond"), defineSymbol(math, main, bin, "⋆", "\\star"), defineSymbol(math, main, bin, "◃", "\\triangleleft"), defineSymbol(math, main, bin, "▹", "\\triangleright"), defineSymbol(math, main, open, "{", "\\{"), defineSymbol(text, main, textord, "{", "\\{"), defineSymbol(text, main, textord, "{", "\\textbraceleft"), defineSymbol(math, main, close, "}", "\\}"), defineSymbol(text, main, textord, "}", "\\}"), defineSymbol(text, main, textord, "}", "\\textbraceright"), defineSymbol(math, main, open, "{", "\\lbrace"), defineSymbol(math, main, close, "}", "\\rbrace"), defineSymbol(math, main, open, "[", "\\lbrack", !0), defineSymbol(text, main, textord, "[", "\\lbrack", !0), defineSymbol(math, main, close, "]", "\\rbrack", !0), defineSymbol(text, main, textord, "]", "\\rbrack", !0), defineSymbol(math, main, open, "(", "\\lparen", !0), defineSymbol(math, main, close, ")", "\\rparen", !0), defineSymbol(text, main, textord, "<", "\\textless", !0), defineSymbol(text, main, textord, ">", "\\textgreater", !0), defineSymbol(math, main, open, "⌊", "\\lfloor", !0), defineSymbol(math, main, close, "⌋", "\\rfloor", !0), defineSymbol(math, main, open, "⌈", "\\lceil", !0), defineSymbol(math, main, close, "⌉", "\\rceil", !0), defineSymbol(math, main, textord, "\\", "\\backslash"), defineSymbol(math, main, textord, "∣", "|"), defineSymbol(math, main, textord, "∣", "\\vert"), defineSymbol(text, main, textord, "|", "\\textbar", !0), defineSymbol(math, main, textord, "∥", "\\|"), defineSymbol(math, main, textord, "∥", "\\Vert"), defineSymbol(text, main, textord, "∥", "\\textbardbl"), defineSymbol(text, main, textord, "~", "\\textasciitilde"), defineSymbol(text, main, textord, "\\", "\\textbackslash"), defineSymbol(text, main, textord, "^", "\\textasciicircum"), defineSymbol(math, main, rel, "↑", "\\uparrow", !0), defineSymbol(math, main, rel, "⇑", "\\Uparrow", !0), defineSymbol(math, main, rel, "↓", "\\downarrow", !0), defineSymbol(math, main, rel, "⇓", "\\Downarrow", !0), defineSymbol(math, main, rel, "↕", "\\updownarrow", !0), defineSymbol(math, main, rel, "⇕", "\\Updownarrow", !0), defineSymbol(math, main, op, "∐", "\\coprod"), defineSymbol(math, main, op, "⋁", "\\bigvee"), defineSymbol(math, main, op, "⋀", "\\bigwedge"), defineSymbol(math, main, op, "⨄", "\\biguplus"), defineSymbol(math, main, op, "⋂", "\\bigcap"), defineSymbol(math, main, op, "⋃", "\\bigcup"), defineSymbol(math, main, op, "∫", "\\int"), defineSymbol(math, main, op, "∫", "\\intop"), defineSymbol(math, main, op, "∬", "\\iint"), defineSymbol(math, main, op, "∭", "\\iiint"), defineSymbol(math, main, op, "∏", "\\prod"), defineSymbol(math, main, op, "∑", "\\sum"), defineSymbol(math, main, op, "⨂", "\\bigotimes"), defineSymbol(math, main, op, "⨁", "\\bigoplus"), defineSymbol(math, main, op, "⨀", "\\bigodot"), defineSymbol(math, main, op, "∮", "\\oint"), defineSymbol(math, main, op, "∯", "\\oiint"), defineSymbol(math, main, op, "∰", "\\oiiint"), defineSymbol(math, main, op, "⨆", "\\bigsqcup"), defineSymbol(math, main, op, "∫", "\\smallint"), defineSymbol(text, main, inner, "…", "\\textellipsis"), defineSymbol(math, main, inner, "…", "\\mathellipsis"), defineSymbol(text, main, inner, "…", "\\ldots", !0), defineSymbol(math, main, inner, "…", "\\ldots", !0), defineSymbol(math, main, inner, "⋯", "\\@cdots", !0), defineSymbol(math, main, inner, "⋱", "\\ddots", !0), defineSymbol(math, main, textord, "⋮", "\\varvdots"), defineSymbol(text, main, textord, "⋮", "\\varvdots"), defineSymbol(math, main, accent, "ˊ", "\\acute"), defineSymbol(math, main, accent, "ˋ", "\\grave"), defineSymbol(math, main, accent, "¨", "\\ddot"), defineSymbol(math, main, accent, "~", "\\tilde"), defineSymbol(math, main, accent, "ˉ", "\\bar"), defineSymbol(math, main, accent, "˘", "\\breve"), defineSymbol(math, main, accent, "ˇ", "\\check"), defineSymbol(math, main, accent, "^", "\\hat"), defineSymbol(math, main, accent, "⃗", "\\vec"), defineSymbol(math, main, accent, "˙", "\\dot"), defineSymbol(math, main, accent, "˚", "\\mathring"), defineSymbol(math, main, mathord, "", "\\@imath"), defineSymbol(math, main, mathord, "", "\\@jmath"), defineSymbol(math, main, textord, "ı", "ı"), defineSymbol(math, main, textord, "ȷ", "ȷ"), defineSymbol(text, main, textord, "ı", "\\i", !0), defineSymbol(text, main, textord, "ȷ", "\\j", !0), defineSymbol(text, main, textord, "ß", "\\ss", !0), defineSymbol(text, main, textord, "æ", "\\ae", !0), defineSymbol(text, main, textord, "œ", "\\oe", !0), defineSymbol(text, main, textord, "ø", "\\o", !0), defineSymbol(text, main, textord, "Æ", "\\AE", !0), defineSymbol(text, main, textord, "Œ", "\\OE", !0), defineSymbol(text, main, textord, "Ø", "\\O", !0), defineSymbol(text, main, accent, "ˊ", "\\'"), defineSymbol(text, main, accent, "ˋ", "\\`"), defineSymbol(text, main, accent, "ˆ", "\\^"), defineSymbol(text, main, accent, "˜", "\\~"), defineSymbol(text, main, accent, "ˉ", "\\="), defineSymbol(text, main, accent, "˘", "\\u"), defineSymbol(text, main, accent, "˙", "\\."), defineSymbol(text, main, accent, "¸", "\\c"), defineSymbol(text, main, accent, "˚", "\\r"), defineSymbol(text, main, accent, "ˇ", "\\v"), defineSymbol(text, main, accent, "¨", "\\\""), defineSymbol(text, main, accent, "˝", "\\H"), defineSymbol(text, main, accent, "◯", "\\textcircled");
var ligatures = {
	"--": !0,
	"---": !0,
	"``": !0,
	"''": !0
};
defineSymbol(text, main, textord, "–", "--", !0), defineSymbol(text, main, textord, "–", "\\textendash"), defineSymbol(text, main, textord, "—", "---", !0), defineSymbol(text, main, textord, "—", "\\textemdash"), defineSymbol(text, main, textord, "‘", "`", !0), defineSymbol(text, main, textord, "‘", "\\textquoteleft"), defineSymbol(text, main, textord, "’", "'", !0), defineSymbol(text, main, textord, "’", "\\textquoteright"), defineSymbol(text, main, textord, "“", "``", !0), defineSymbol(text, main, textord, "“", "\\textquotedblleft"), defineSymbol(text, main, textord, "”", "''", !0), defineSymbol(text, main, textord, "”", "\\textquotedblright"), defineSymbol(math, main, textord, "°", "\\degree", !0), defineSymbol(text, main, textord, "°", "\\degree"), defineSymbol(text, main, textord, "°", "\\textdegree", !0), defineSymbol(math, main, textord, "£", "\\pounds"), defineSymbol(math, main, textord, "£", "\\mathsterling", !0), defineSymbol(text, main, textord, "£", "\\pounds"), defineSymbol(text, main, textord, "£", "\\textsterling", !0), defineSymbol(math, ams, textord, "✠", "\\maltese"), defineSymbol(text, ams, textord, "✠", "\\maltese");
for (var mathTextSymbols = "0123456789/@.\"", i = 0; i < mathTextSymbols.length; i++) {
	var ch = mathTextSymbols.charAt(i);
	defineSymbol(math, main, textord, ch, ch);
}
for (var textSymbols = "0123456789!@*()-=+\";:?/.,", _i = 0; _i < textSymbols.length; _i++) {
	var _ch = textSymbols.charAt(_i);
	defineSymbol(text, main, textord, _ch, _ch);
}
for (var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", _i2 = 0; _i2 < letters.length; _i2++) {
	var _ch2 = letters.charAt(_i2);
	defineSymbol(math, main, mathord, _ch2, _ch2), defineSymbol(text, main, textord, _ch2, _ch2);
}
defineSymbol(math, ams, textord, "C", "ℂ"), defineSymbol(text, ams, textord, "C", "ℂ"), defineSymbol(math, ams, textord, "H", "ℍ"), defineSymbol(text, ams, textord, "H", "ℍ"), defineSymbol(math, ams, textord, "N", "ℕ"), defineSymbol(text, ams, textord, "N", "ℕ"), defineSymbol(math, ams, textord, "P", "ℙ"), defineSymbol(text, ams, textord, "P", "ℙ"), defineSymbol(math, ams, textord, "Q", "ℚ"), defineSymbol(text, ams, textord, "Q", "ℚ"), defineSymbol(math, ams, textord, "R", "ℝ"), defineSymbol(text, ams, textord, "R", "ℝ"), defineSymbol(math, ams, textord, "Z", "ℤ"), defineSymbol(text, ams, textord, "Z", "ℤ"), defineSymbol(math, main, mathord, "h", "ℎ"), defineSymbol(text, main, mathord, "h", "ℎ");
for (var wideChar = "", _i3 = 0; _i3 < letters.length; _i3++) {
	var _ch3 = letters.charAt(_i3);
	wideChar = String.fromCharCode(55349, 56320 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), wideChar = String.fromCharCode(55349, 56372 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), wideChar = String.fromCharCode(55349, 56424 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), wideChar = String.fromCharCode(55349, 56580 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), wideChar = String.fromCharCode(55349, 56684 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), wideChar = String.fromCharCode(55349, 56736 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), wideChar = String.fromCharCode(55349, 56788 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), wideChar = String.fromCharCode(55349, 56840 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), wideChar = String.fromCharCode(55349, 56944 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), _i3 < 26 && (wideChar = String.fromCharCode(55349, 56632 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar), wideChar = String.fromCharCode(55349, 56476 + _i3), defineSymbol(math, main, mathord, _ch3, wideChar), defineSymbol(text, main, textord, _ch3, wideChar));
}
wideChar = String.fromCharCode(55349, 56668), defineSymbol(math, main, mathord, "k", wideChar), defineSymbol(text, main, textord, "k", wideChar);
for (var _i4 = 0; _i4 < 10; _i4++) {
	var _ch4 = _i4.toString();
	wideChar = String.fromCharCode(55349, 57294 + _i4), defineSymbol(math, main, mathord, _ch4, wideChar), defineSymbol(text, main, textord, _ch4, wideChar), wideChar = String.fromCharCode(55349, 57314 + _i4), defineSymbol(math, main, mathord, _ch4, wideChar), defineSymbol(text, main, textord, _ch4, wideChar), wideChar = String.fromCharCode(55349, 57324 + _i4), defineSymbol(math, main, mathord, _ch4, wideChar), defineSymbol(text, main, textord, _ch4, wideChar), wideChar = String.fromCharCode(55349, 57334 + _i4), defineSymbol(math, main, mathord, _ch4, wideChar), defineSymbol(text, main, textord, _ch4, wideChar);
}
for (var extraLatin = "ÐÞþ", _i5 = 0; _i5 < extraLatin.length; _i5++) {
	var _ch5 = extraLatin.charAt(_i5);
	defineSymbol(math, main, mathord, _ch5, _ch5), defineSymbol(text, main, textord, _ch5, _ch5);
}
var wideLatinLetterData = [
	[
		"mathbf",
		"textbf",
		"Main-Bold"
	],
	[
		"mathbf",
		"textbf",
		"Main-Bold"
	],
	[
		"mathnormal",
		"textit",
		"Math-Italic"
	],
	[
		"mathnormal",
		"textit",
		"Math-Italic"
	],
	[
		"boldsymbol",
		"boldsymbol",
		"Main-BoldItalic"
	],
	[
		"boldsymbol",
		"boldsymbol",
		"Main-BoldItalic"
	],
	[
		"mathscr",
		"textscr",
		"Script-Regular"
	],
	[
		"",
		"",
		""
	],
	[
		"",
		"",
		""
	],
	[
		"",
		"",
		""
	],
	[
		"mathfrak",
		"textfrak",
		"Fraktur-Regular"
	],
	[
		"mathfrak",
		"textfrak",
		"Fraktur-Regular"
	],
	[
		"mathbb",
		"textbb",
		"AMS-Regular"
	],
	[
		"mathbb",
		"textbb",
		"AMS-Regular"
	],
	[
		"mathboldfrak",
		"textboldfrak",
		"Fraktur-Regular"
	],
	[
		"mathboldfrak",
		"textboldfrak",
		"Fraktur-Regular"
	],
	[
		"mathsf",
		"textsf",
		"SansSerif-Regular"
	],
	[
		"mathsf",
		"textsf",
		"SansSerif-Regular"
	],
	[
		"mathboldsf",
		"textboldsf",
		"SansSerif-Bold"
	],
	[
		"mathboldsf",
		"textboldsf",
		"SansSerif-Bold"
	],
	[
		"mathitsf",
		"textitsf",
		"SansSerif-Italic"
	],
	[
		"mathitsf",
		"textitsf",
		"SansSerif-Italic"
	],
	[
		"",
		"",
		""
	],
	[
		"",
		"",
		""
	],
	[
		"mathtt",
		"texttt",
		"Typewriter-Regular"
	],
	[
		"mathtt",
		"texttt",
		"Typewriter-Regular"
	]
], wideNumeralData = [
	[
		"mathbf",
		"textbf",
		"Main-Bold"
	],
	[
		"",
		"",
		""
	],
	[
		"mathsf",
		"textsf",
		"SansSerif-Regular"
	],
	[
		"mathboldsf",
		"textboldsf",
		"SansSerif-Bold"
	],
	[
		"mathtt",
		"texttt",
		"Typewriter-Regular"
	]
], wideCharacterFont = (e, t) => {
	var n = e.charCodeAt(0), o = e.charCodeAt(1), s = (n - 55296) * 1024 + (o - 56320) + 65536, l = t === "math" ? 0 : 1;
	if (119808 <= s && s < 120484) {
		var u = Math.floor((s - 119808) / 26);
		return [wideLatinLetterData[u][2], wideLatinLetterData[u][l]];
	} else if (120782 <= s && s <= 120831) {
		var d = Math.floor((s - 120782) / 10);
		return [wideNumeralData[d][2], wideNumeralData[d][l]];
	} else if (s === 120485 || s === 120486) return [wideLatinLetterData[0][2], wideLatinLetterData[0][l]];
	else if (120486 < s && s < 120782) return ["", ""];
	else throw new ParseError("Unsupported character: " + e);
}, lookupSymbol = function(e, t, n) {
	if (symbols[n][e]) {
		var a = symbols[n][e].replace;
		a && (e = a);
	}
	return {
		value: e,
		metrics: getCharacterMetrics(e, t, n)
	};
}, makeSymbol = function(e, t, n, a, o) {
	var s = lookupSymbol(e, t, n), l = s.metrics;
	e = s.value;
	var u;
	if (l) {
		var d = l.italic;
		(n === "text" || a && a.font === "mathit") && (d = 0), u = new SymbolNode(e, l.height, l.depth, d, l.skew, l.width, o);
	} else typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), u = new SymbolNode(e, 0, 0, 0, 0, 0, o);
	if (a) {
		u.maxFontSize = a.sizeMultiplier, a.style.isTight() && u.classes.push("mtight");
		var f = a.getColor();
		f && (u.style.color = f);
	}
	return u;
}, mathsym = function(e, t, n, a) {
	return a === void 0 && (a = []), n.font === "boldsymbol" && lookupSymbol(e, "Main-Bold", t).metrics ? makeSymbol(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || symbols[t][e].font === "main" ? makeSymbol(e, "Main-Regular", t, n, a) : makeSymbol(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, boldsymbol = function(e, t, n, a, o) {
	return o !== "textord" && lookupSymbol(e, "Math-BoldItalic", t).metrics ? {
		fontName: "Math-BoldItalic",
		fontClass: "boldsymbol"
	} : {
		fontName: "Main-Bold",
		fontClass: "mathbf"
	};
}, makeOrd = function(e, t, n) {
	var a = e.mode, o = e.text, s = ["mord"], l = a === "math" || a === "text" && t.font, u = l ? t.font : t.fontFamily, d = "", f = "";
	if (o.charCodeAt(0) === 55349 && ([d, f] = wideCharacterFont(o, a)), d.length > 0) return makeSymbol(o, d, a, t, s.concat(f));
	if (u) {
		var p, m;
		if (u === "boldsymbol") {
			var h = boldsymbol(o, a, t, s, n);
			p = h.fontName, m = [h.fontClass];
		} else l ? (p = fontMap[u].fontName, m = [u]) : (p = retrieveTextFontName(u, t.fontWeight, t.fontShape), m = [
			u,
			t.fontWeight,
			t.fontShape
		]);
		if (lookupSymbol(o, p, a).metrics) return makeSymbol(o, p, a, t, s.concat(m));
		if (ligatures.hasOwnProperty(o) && p.slice(0, 10) === "Typewriter") {
			for (var g = [], _ = 0; _ < o.length; _++) g.push(makeSymbol(o[_], p, a, t, s.concat(m)));
			return makeFragment(g);
		}
	}
	if (n === "mathord") return makeSymbol(o, "Math-Italic", a, t, s.concat(["mathnormal"]));
	if (n === "textord") {
		var v = symbols[a][o] && symbols[a][o].font;
		if (v === "ams") return makeSymbol(o, retrieveTextFontName("amsrm", t.fontWeight, t.fontShape), a, t, s.concat("amsrm", t.fontWeight, t.fontShape));
		if (v === "main" || !v) return makeSymbol(o, retrieveTextFontName("textrm", t.fontWeight, t.fontShape), a, t, s.concat(t.fontWeight, t.fontShape));
		var y = retrieveTextFontName(v, t.fontWeight, t.fontShape);
		return makeSymbol(o, y, a, t, s.concat(y, t.fontWeight, t.fontShape));
	} else throw Error("unexpected type: " + n + " in makeOrd");
}, canCombine = (e, t) => {
	if (createClass(e.classes) !== createClass(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize || e.italic !== 0 && e.hasClass("mathnormal")) return !1;
	if (e.classes.length === 1) {
		var n = e.classes[0];
		if (n === "mbin" || n === "mord") return !1;
	}
	for (var a of Object.keys(e.style)) if (e.style[a] !== t.style[a]) return !1;
	for (var o of Object.keys(t.style)) if (e.style[o] !== t.style[o]) return !1;
	return !0;
}, tryCombineChars = (e) => {
	for (var t = 0; t < e.length - 1; t++) {
		var n = e[t], a = e[t + 1];
		n instanceof SymbolNode && a instanceof SymbolNode && canCombine(n, a) && (n.text += a.text, n.height = Math.max(n.height, a.height), n.depth = Math.max(n.depth, a.depth), n.italic = a.italic, e.splice(t + 1, 1), t--);
	}
	return e;
}, sizeElementFromChildren = function(e) {
	for (var t = 0, n = 0, a = 0, o = 0; o < e.children.length; o++) {
		var s = e.children[o];
		s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > a && (a = s.maxFontSize);
	}
	e.height = t, e.depth = n, e.maxFontSize = a;
}, makeSpan = function(e, t, n, a) {
	var o = new Span(e, t, n, a);
	return sizeElementFromChildren(o), o;
}, makeSvgSpan = (e, t, n, a) => new Span(e, t, n, a), makeLineSpan = function(e, t, n) {
	var a = makeSpan([e], [], t);
	return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = makeEm(a.height), a.maxFontSize = 1, a;
}, makeAnchor = function(e, t, n, a) {
	var o = new Anchor(e, t, n, a);
	return sizeElementFromChildren(o), o;
}, makeFragment = function(e) {
	var t = new DocumentFragment(e);
	return sizeElementFromChildren(t), t;
}, wrapFragment = function(e, t) {
	return e instanceof DocumentFragment ? makeSpan([], [e], t) : e;
}, getVListChildrenAndDepth = function(e) {
	if (e.positionType === "individualShift") {
		for (var t = e.children, n = [t[0]], a = -t[0].shift - t[0].elem.depth, o = a, s = 1; s < t.length; s++) {
			var l = -t[s].shift - o - t[s].elem.depth, u = l - (t[s - 1].elem.height + t[s - 1].elem.depth);
			o += l, n.push({
				type: "kern",
				size: u
			}), n.push(t[s]);
		}
		return {
			children: n,
			depth: a
		};
	}
	var d;
	if (e.positionType === "top") {
		for (var f = e.positionData, p = 0; p < e.children.length; p++) {
			var m = e.children[p];
			f -= m.type === "kern" ? m.size : m.elem.height + m.elem.depth;
		}
		d = f;
	} else if (e.positionType === "bottom") d = -e.positionData;
	else {
		var h = e.children[0];
		if (h.type !== "elem") throw Error("First child must have type \"elem\".");
		if (e.positionType === "shift") d = -h.elem.depth - e.positionData;
		else if (e.positionType === "firstBaseline") d = -h.elem.depth;
		else throw Error("Invalid positionType " + e.positionType + ".");
	}
	return {
		children: e.children,
		depth: d
	};
}, makeVList = function(e, t) {
	for (var { children: n, depth: a } = getVListChildrenAndDepth(e), o = 0, s = 0; s < n.length; s++) {
		var l = n[s];
		if (l.type === "elem") {
			var u = l.elem;
			o = Math.max(o, u.maxFontSize, u.height);
		}
	}
	o += 2;
	var d = makeSpan(["pstrut"], []);
	d.style.height = makeEm(o);
	for (var f = [], p = a, m = a, h = a, g = 0; g < n.length; g++) {
		var _ = n[g];
		if (_.type === "kern") h += _.size;
		else {
			var v = _.elem, y = _.wrapperClasses || [], b = _.wrapperStyle || {}, x = makeSpan(y, [d, v], void 0, b);
			x.style.top = makeEm(-o - h - v.depth), _.marginLeft && (x.style.marginLeft = _.marginLeft), _.marginRight && (x.style.marginRight = _.marginRight), f.push(x), h += v.height + v.depth;
		}
		p = Math.min(p, h), m = Math.max(m, h);
	}
	var C = makeSpan(["vlist"], f);
	C.style.height = makeEm(m);
	var w;
	if (p < 0) {
		var E = makeSpan(["vlist"], [makeSpan([], [])]);
		E.style.height = makeEm(-p), w = [makeSpan(["vlist-r"], [C, makeSpan(["vlist-s"], [new SymbolNode("​")])]), makeSpan(["vlist-r"], [E])];
	} else w = [makeSpan(["vlist-r"], [C])];
	var O = makeSpan(["vlist-t"], w);
	return w.length === 2 && O.classes.push("vlist-t2"), O.height = m, O.depth = -p, O;
}, makeGlue = (e, t) => {
	var n = makeSpan(["mspace"], [], t), a = calculateSize(e, t);
	return n.style.marginRight = makeEm(a), n;
}, retrieveTextFontName = function(e, t, n) {
	var a = "";
	switch (e) {
		case "amsrm":
			a = "AMS";
			break;
		case "textrm":
			a = "Main";
			break;
		case "textsf":
			a = "SansSerif";
			break;
		case "texttt":
			a = "Typewriter";
			break;
		default: a = e;
	}
	var o = t === "textbf" && n === "textit" ? "BoldItalic" : t === "textbf" ? "Bold" : t === "textit" ? "Italic" : "Regular";
	return a + "-" + o;
}, fontMap = {
	mathbf: {
		variant: "bold",
		fontName: "Main-Bold"
	},
	mathrm: {
		variant: "normal",
		fontName: "Main-Regular"
	},
	textit: {
		variant: "italic",
		fontName: "Main-Italic"
	},
	mathit: {
		variant: "italic",
		fontName: "Main-Italic"
	},
	mathnormal: {
		variant: "italic",
		fontName: "Math-Italic"
	},
	mathsfit: {
		variant: "sans-serif-italic",
		fontName: "SansSerif-Italic"
	},
	mathbb: {
		variant: "double-struck",
		fontName: "AMS-Regular"
	},
	mathcal: {
		variant: "script",
		fontName: "Caligraphic-Regular"
	},
	mathfrak: {
		variant: "fraktur",
		fontName: "Fraktur-Regular"
	},
	mathscr: {
		variant: "script",
		fontName: "Script-Regular"
	},
	mathsf: {
		variant: "sans-serif",
		fontName: "SansSerif-Regular"
	},
	mathtt: {
		variant: "monospace",
		fontName: "Typewriter-Regular"
	}
}, svgData = {
	vec: [
		"vec",
		.471,
		.714
	],
	oiintSize1: [
		"oiintSize1",
		.957,
		.499
	],
	oiintSize2: [
		"oiintSize2",
		1.472,
		.659
	],
	oiiintSize1: [
		"oiiintSize1",
		1.304,
		.499
	],
	oiiintSize2: [
		"oiiintSize2",
		1.98,
		.659
	]
}, staticSvg = function(e, t) {
	var [n, a, o] = svgData[e], s = makeSvgSpan(["overlay"], [new SvgNode([new PathNode(n)], {
		width: makeEm(a),
		height: makeEm(o),
		style: "width:" + makeEm(a),
		viewBox: "0 0 " + 1e3 * a + " " + 1e3 * o,
		preserveAspectRatio: "xMinYMin"
	})], t);
	return s.height = o, s.style.height = makeEm(o), s.style.width = makeEm(a), s;
}, thinspace = {
	number: 3,
	unit: "mu"
}, mediumspace = {
	number: 4,
	unit: "mu"
}, thickspace = {
	number: 5,
	unit: "mu"
}, spacings = {
	mord: {
		mop: thinspace,
		mbin: mediumspace,
		mrel: thickspace,
		minner: thinspace
	},
	mop: {
		mord: thinspace,
		mop: thinspace,
		mrel: thickspace,
		minner: thinspace
	},
	mbin: {
		mord: mediumspace,
		mop: mediumspace,
		mopen: mediumspace,
		minner: mediumspace
	},
	mrel: {
		mord: thickspace,
		mop: thickspace,
		mopen: thickspace,
		minner: thickspace
	},
	mopen: {},
	mclose: {
		mop: thinspace,
		mbin: mediumspace,
		mrel: thickspace,
		minner: thinspace
	},
	mpunct: {
		mord: thinspace,
		mop: thinspace,
		mrel: thickspace,
		mopen: thinspace,
		mclose: thinspace,
		mpunct: thinspace,
		minner: thinspace
	},
	minner: {
		mord: thinspace,
		mop: thinspace,
		mbin: mediumspace,
		mrel: thickspace,
		mopen: thinspace,
		mpunct: thinspace,
		minner: thinspace
	}
}, tightSpacings = {
	mord: { mop: thinspace },
	mop: {
		mord: thinspace,
		mop: thinspace
	},
	mbin: {},
	mrel: {},
	mopen: {},
	mclose: { mop: thinspace },
	mpunct: {},
	minner: { mop: thinspace }
}, _functions = {}, _htmlGroupBuilders = {}, _mathmlGroupBuilders = {};
function defineFunction(e) {
	for (var { type: t, names: n, props: a, handler: o, htmlBuilder: s, mathmlBuilder: l } = e, u = {
		type: t,
		numArgs: a.numArgs,
		argTypes: a.argTypes,
		allowedInArgument: !!a.allowedInArgument,
		allowedInText: !!a.allowedInText,
		allowedInMath: a.allowedInMath === void 0 ? !0 : a.allowedInMath,
		numOptionalArgs: a.numOptionalArgs || 0,
		infix: !!a.infix,
		primitive: !!a.primitive,
		handler: o
	}, d = 0; d < n.length; ++d) _functions[n[d]] = u;
	t && (s && (_htmlGroupBuilders[t] = s), l && (_mathmlGroupBuilders[t] = l));
}
function defineFunctionBuilders(e) {
	var { type: t, htmlBuilder: n, mathmlBuilder: a } = e;
	defineFunction({
		type: t,
		names: [],
		props: { numArgs: 0 },
		handler() {
			throw Error("Should never be called.");
		},
		htmlBuilder: n,
		mathmlBuilder: a
	});
}
var normalizeArgument = function(e) {
	return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, ordargument = function(e) {
	return e.type === "ordgroup" ? e.body : [e];
}, binLeftCanceller = new Set([
	"leftmost",
	"mbin",
	"mopen",
	"mrel",
	"mop",
	"mpunct"
]), binRightCanceller = new Set([
	"rightmost",
	"mrel",
	"mclose",
	"mpunct"
]), styleMap$1 = {
	display: Style$1.DISPLAY,
	text: Style$1.TEXT,
	script: Style$1.SCRIPT,
	scriptscript: Style$1.SCRIPTSCRIPT
}, DomEnum = {
	mord: "mord",
	mop: "mop",
	mbin: "mbin",
	mrel: "mrel",
	mopen: "mopen",
	mclose: "mclose",
	mpunct: "mpunct",
	minner: "minner"
}, buildExpression$1 = function(e, t, n, a) {
	a === void 0 && (a = [null, null]);
	for (var o = [], s = 0; s < e.length; s++) {
		var l = buildGroup$1(e[s], t);
		if (l instanceof DocumentFragment) {
			var u = l.children;
			o.push(...u);
		} else o.push(l);
	}
	if (tryCombineChars(o), !n) return o;
	var d = t;
	if (e.length === 1) {
		var f = e[0];
		f.type === "sizing" ? d = t.havingSize(f.size) : f.type === "styling" && (d = t.havingStyle(styleMap$1[f.style]));
	}
	var p = makeSpan([a[0] || "leftmost"], [], t), m = makeSpan([a[1] || "rightmost"], [], t), h = n === "root";
	return _traverseNonSpaceNodes(o, (e, t) => {
		var n = t.classes[0], a = e.classes[0];
		n === "mbin" && binRightCanceller.has(a) ? t.classes[0] = "mord" : a === "mbin" && binLeftCanceller.has(n) && (e.classes[0] = "mord");
	}, { node: p }, m, h), _traverseNonSpaceNodes(o, (e, t) => {
		var n = getTypeOfDomTree(t), a = getTypeOfDomTree(e), o = n && a ? e.hasClass("mtight") ? tightSpacings[n]?.[a] : spacings[n]?.[a] : null;
		if (o) return makeGlue(o, d);
	}, { node: p }, m, h), o;
}, _traverseNonSpaceNodes = function(e, t, n, a, o) {
	a && e.push(a);
	for (var s = 0; s < e.length; s++) {
		var l = e[s], u = checkPartialGroup(l);
		if (u) {
			_traverseNonSpaceNodes(u.children, t, n, null, o);
			continue;
		}
		var d = !l.hasClass("mspace");
		if (d) {
			var f = t(l, n.node);
			f && (n.insertAfter ? n.insertAfter(f) : (e.unshift(f), s++));
		}
		d ? n.node = l : o && l.hasClass("newline") && (n.node = makeSpan(["leftmost"])), n.insertAfter = ((t) => (n) => {
			e.splice(t + 1, 0, n), s++;
		})(s);
	}
	a && e.pop();
}, checkPartialGroup = function(e) {
	return e instanceof DocumentFragment || e instanceof Anchor || e instanceof Span && e.hasClass("enclosing") ? e : null;
}, _getOutermostNode = function(e, t) {
	var n = checkPartialGroup(e);
	if (n) {
		var a = n.children;
		if (a.length) {
			if (t === "right") return _getOutermostNode(a[a.length - 1], "right");
			if (t === "left") return _getOutermostNode(a[0], "left");
		}
	}
	return e;
}, getTypeOfDomTree = function(e, t) {
	return e ? (t && (e = _getOutermostNode(e, t)), DomEnum[e.classes[0]] || null) : null;
}, makeNullDelimiter = function(e, t) {
	var n = ["nulldelimiter"].concat(e.baseSizingClasses());
	return makeSpan(t.concat(n));
}, buildGroup$1 = function(e, t, n) {
	if (!e) return makeSpan();
	if (_htmlGroupBuilders[e.type]) {
		var o = _htmlGroupBuilders[e.type](e, t);
		if (n && t.size !== n.size) {
			o = makeSpan(t.sizingClasses(n), [o], t);
			var s = t.sizeMultiplier / n.sizeMultiplier;
			o.height *= s, o.depth *= s;
		}
		return o;
	} else throw new ParseError("Got group of unknown type: '" + e.type + "'");
};
function buildHTMLUnbreakable(e, t) {
	var n = makeSpan(["base"], e, t), a = makeSpan(["strut"]);
	return a.style.height = makeEm(n.height + n.depth), n.depth && (a.style.verticalAlign = makeEm(-n.depth)), n.children.unshift(a), n;
}
function buildHTML(e, t) {
	var n = null;
	e.length === 1 && e[0].type === "tag" && (n = e[0].tag, e = e[0].body);
	var a = buildExpression$1(e, t, "root"), o;
	a.length === 2 && a[1].hasClass("tag") && (o = a.pop());
	for (var s = [], l = [], u = 0; u < a.length; u++) if (l.push(a[u]), a[u].hasClass("mbin") || a[u].hasClass("mrel") || a[u].hasClass("allowbreak")) {
		for (var d = !1; u < a.length - 1 && a[u + 1].hasClass("mspace") && !a[u + 1].hasClass("newline");) u++, l.push(a[u]), a[u].hasClass("nobreak") && (d = !0);
		d || (s.push(buildHTMLUnbreakable(l, t)), l = []);
	} else a[u].hasClass("newline") && (l.pop(), l.length > 0 && (s.push(buildHTMLUnbreakable(l, t)), l = []), s.push(a[u]));
	l.length > 0 && s.push(buildHTMLUnbreakable(l, t));
	var f;
	n ? (f = buildHTMLUnbreakable(buildExpression$1(n, t, !0), t), f.classes = ["tag"], s.push(f)) : o && s.push(o);
	var p = makeSpan(["katex-html"], s);
	if (p.setAttribute("aria-hidden", "true"), f) {
		var m = f.children[0];
		m.style.height = makeEm(p.height + p.depth), p.depth && (m.style.verticalAlign = makeEm(-p.depth));
	}
	return p;
}
function newDocumentFragment(e) {
	return new DocumentFragment(e);
}
var MathNode = class {
	constructor(e, t, n) {
		this.type = e, this.attributes = {}, this.children = t || [], this.classes = n || [];
	}
	setAttribute(e, t) {
		this.attributes[e] = t;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	toNode() {
		var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
		for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
		this.classes.length > 0 && (e.className = createClass(this.classes));
		for (var n = 0; n < this.children.length; n++) if (this.children[n] instanceof TextNode && this.children[n + 1] instanceof TextNode) {
			for (var a = this.children[n].toText() + this.children[++n].toText(); this.children[n + 1] instanceof TextNode;) a += this.children[++n].toText();
			e.appendChild(new TextNode(a).toNode());
		} else e.appendChild(this.children[n].toNode());
		return e;
	}
	toMarkup() {
		var e = "<" + this.type;
		for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "=\"", e += escape$1(this.attributes[t]), e += "\"");
		this.classes.length > 0 && (e += " class =\"" + escape$1(createClass(this.classes)) + "\""), e += ">";
		for (var n = 0; n < this.children.length; n++) e += this.children[n].toMarkup();
		return e += "</" + this.type + ">", e;
	}
	toText() {
		return this.children.map((e) => e.toText()).join("");
	}
}, TextNode = class {
	constructor(e) {
		this.text = e;
	}
	toNode() {
		return document.createTextNode(this.text);
	}
	toMarkup() {
		return escape$1(this.toText());
	}
	toText() {
		return this.text;
	}
}, SpaceNode = class {
	constructor(e) {
		this.width = e, e >= .05555 && e <= .05556 ? this.character = " " : e >= .1666 && e <= .1667 ? this.character = " " : e >= .2222 && e <= .2223 ? this.character = " " : e >= .2777 && e <= .2778 ? this.character = "  " : e >= -.05556 && e <= -.05555 ? this.character = " ⁣" : e >= -.1667 && e <= -.1666 ? this.character = " ⁣" : e >= -.2223 && e <= -.2222 ? this.character = " ⁣" : e >= -.2778 && e <= -.2777 ? this.character = " ⁣" : this.character = null;
	}
	toNode() {
		if (this.character) return document.createTextNode(this.character);
		var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
		return e.setAttribute("width", makeEm(this.width)), e;
	}
	toMarkup() {
		return this.character ? "<mtext>" + this.character + "</mtext>" : "<mspace width=\"" + makeEm(this.width) + "\"/>";
	}
	toText() {
		return this.character ? this.character : " ";
	}
}, noVariantSymbols = new Set(["\\imath", "\\jmath"]), rowLikeTypes = new Set(["mrow", "mtable"]), makeText = function(e, t, n) {
	return symbols[t][e] && symbols[t][e].replace && e.charCodeAt(0) !== 55349 && !(ligatures.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = symbols[t][e].replace), new TextNode(e);
}, makeRow = function(e) {
	return e.length === 1 ? e[0] : new MathNode("mrow", e);
}, getVariant = function(e, t) {
	if (t.fontFamily === "texttt") return "monospace";
	if (t.fontFamily === "textsf") return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
	if (t.fontShape === "textit" && t.fontWeight === "textbf") return "bold-italic";
	if (t.fontShape === "textit") return "italic";
	if (t.fontWeight === "textbf") return "bold";
	var n = t.font;
	if (!n || n === "mathnormal") return null;
	var a = e.mode;
	if (n === "mathit") return "italic";
	if (n === "boldsymbol") return e.type === "textord" ? "bold" : "bold-italic";
	if (n === "mathbf") return "bold";
	if (n === "mathbb") return "double-struck";
	if (n === "mathsfit") return "sans-serif-italic";
	if (n === "mathfrak") return "fraktur";
	if (n === "mathscr" || n === "mathcal") return "script";
	if (n === "mathsf") return "sans-serif";
	if (n === "mathtt") return "monospace";
	var o = e.text;
	if (noVariantSymbols.has(o)) return null;
	if (symbols[a][o]) {
		var s = symbols[a][o].replace;
		s && (o = s);
	}
	var l = fontMap[n].fontName;
	return getCharacterMetrics(o, l, a) ? fontMap[n].variant : null;
};
function isNumberPunctuation(e) {
	if (!e) return !1;
	if (e.type === "mi" && e.children.length === 1) {
		var t = e.children[0];
		return t instanceof TextNode && t.text === ".";
	} else if (e.type === "mo" && e.children.length === 1 && e.getAttribute("separator") === "true" && e.getAttribute("lspace") === "0em" && e.getAttribute("rspace") === "0em") {
		var n = e.children[0];
		return n instanceof TextNode && n.text === ",";
	} else return !1;
}
var buildExpression = function(e, t, n) {
	if (e.length === 1) {
		var a = buildGroup(e[0], t);
		return n && a instanceof MathNode && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
	}
	for (var o = [], s, l = 0; l < e.length; l++) {
		var u = buildGroup(e[l], t);
		if (u instanceof MathNode && s instanceof MathNode) {
			if (u.type === "mtext" && s.type === "mtext" && u.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
				s.children.push(...u.children);
				continue;
			} else if (u.type === "mn" && s.type === "mn") {
				s.children.push(...u.children);
				continue;
			} else if (isNumberPunctuation(u) && s.type === "mn") {
				s.children.push(...u.children);
				continue;
			} else if (u.type === "mn" && isNumberPunctuation(s)) u.children = [...s.children, ...u.children], o.pop();
			else if ((u.type === "msup" || u.type === "msub") && u.children.length >= 1 && (s.type === "mn" || isNumberPunctuation(s))) {
				var d = u.children[0];
				d instanceof MathNode && d.type === "mn" && (d.children = [...s.children, ...d.children], o.pop());
			} else if (s.type === "mi" && s.children.length === 1) {
				var f = s.children[0];
				if (f instanceof TextNode && f.text === "̸" && (u.type === "mo" || u.type === "mi" || u.type === "mn")) {
					var p = u.children[0];
					p instanceof TextNode && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1), o.pop());
				}
			}
		}
		o.push(u), s = u;
	}
	return o;
}, buildExpressionRow = function(e, t, n) {
	return makeRow(buildExpression(e, t, n));
}, buildGroup = function(e, t) {
	if (!e) return new MathNode("mrow");
	if (_mathmlGroupBuilders[e.type]) return _mathmlGroupBuilders[e.type](e, t);
	throw new ParseError("Got group of unknown type: '" + e.type + "'");
};
function buildMathML(e, t, n, a, o) {
	var s = buildExpression(e, n), l = s.length === 1 && s[0] instanceof MathNode && rowLikeTypes.has(s[0].type) ? s[0] : new MathNode("mrow", s), u = new MathNode("annotation", [new TextNode(t)]);
	u.setAttribute("encoding", "application/x-tex");
	var d = new MathNode("math", [new MathNode("semantics", [l, u])]);
	return d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), a && d.setAttribute("display", "block"), makeSpan([o ? "katex" : "katex-mathml"], [d]);
}
var sizeStyleMap = [
	[
		1,
		1,
		1
	],
	[
		2,
		1,
		1
	],
	[
		3,
		1,
		1
	],
	[
		4,
		2,
		1
	],
	[
		5,
		2,
		1
	],
	[
		6,
		3,
		1
	],
	[
		7,
		4,
		2
	],
	[
		8,
		6,
		3
	],
	[
		9,
		7,
		6
	],
	[
		10,
		8,
		7
	],
	[
		11,
		10,
		9
	]
], sizeMultipliers = [
	.5,
	.6,
	.7,
	.8,
	.9,
	1,
	1.2,
	1.44,
	1.728,
	2.074,
	2.488
], sizeAtStyle = function(e, t) {
	return t.size < 2 ? e : sizeStyleMap[e - 1][t.size - 1];
}, Options = class e {
	constructor(t) {
		this.style = t.style, this.color = t.color, this.size = t.size || e.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = sizeMultipliers[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0;
	}
	extend(t) {
		var n = {
			style: this.style,
			size: this.size,
			textSize: this.textSize,
			color: this.color,
			phantom: this.phantom,
			font: this.font,
			fontFamily: this.fontFamily,
			fontWeight: this.fontWeight,
			fontShape: this.fontShape,
			maxSize: this.maxSize,
			minRuleThickness: this.minRuleThickness
		};
		return Object.assign(n, t), new e(n);
	}
	havingStyle(e) {
		return this.style === e ? this : this.extend({
			style: e,
			size: sizeAtStyle(this.textSize, e)
		});
	}
	havingCrampedStyle() {
		return this.havingStyle(this.style.cramp());
	}
	havingSize(e) {
		return this.size === e && this.textSize === e ? this : this.extend({
			style: this.style.text(),
			size: e,
			textSize: e,
			sizeMultiplier: sizeMultipliers[e - 1]
		});
	}
	havingBaseStyle(t) {
		t ||= this.style.text();
		var n = sizeAtStyle(e.BASESIZE, t);
		return this.size === n && this.textSize === e.BASESIZE && this.style === t ? this : this.extend({
			style: t,
			size: n
		});
	}
	havingBaseSizing() {
		var e;
		switch (this.style.id) {
			case 4:
			case 5:
				e = 3;
				break;
			case 6:
			case 7:
				e = 1;
				break;
			default: e = 6;
		}
		return this.extend({
			style: this.style.text(),
			size: e
		});
	}
	withColor(e) {
		return this.extend({ color: e });
	}
	withPhantom() {
		return this.extend({ phantom: !0 });
	}
	withFont(e) {
		return this.extend({ font: e });
	}
	withTextFontFamily(e) {
		return this.extend({
			fontFamily: e,
			font: ""
		});
	}
	withTextFontWeight(e) {
		return this.extend({
			fontWeight: e,
			font: ""
		});
	}
	withTextFontShape(e) {
		return this.extend({
			fontShape: e,
			font: ""
		});
	}
	sizingClasses(e) {
		return e.size === this.size ? [] : [
			"sizing",
			"reset-size" + e.size,
			"size" + this.size
		];
	}
	baseSizingClasses() {
		return this.size === e.BASESIZE ? [] : [
			"sizing",
			"reset-size" + this.size,
			"size" + e.BASESIZE
		];
	}
	fontMetrics() {
		return this._fontMetrics ||= getGlobalMetrics(this.size), this._fontMetrics;
	}
	getColor() {
		return this.phantom ? "transparent" : this.color;
	}
};
Options.BASESIZE = 6;
var optionsFromSettings = function(e) {
	return new Options({
		style: e.displayMode ? Style$1.DISPLAY : Style$1.TEXT,
		maxSize: e.maxSize,
		minRuleThickness: e.minRuleThickness
	});
}, displayWrap = function(e, t) {
	if (t.displayMode) {
		var n = ["katex-display"];
		t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = makeSpan(n, [e]);
	}
	return e;
}, buildTree = function(e, t, n) {
	var a = optionsFromSettings(n), o;
	return n.output === "mathml" ? buildMathML(e, t, a, n.displayMode, !0) : (o = n.output === "html" ? makeSpan(["katex"], [buildHTML(e, a)]) : makeSpan(["katex"], [buildMathML(e, t, a, n.displayMode, !1), buildHTML(e, a)]), displayWrap(o, n));
}, buildHTMLTree = function(e, t, n) {
	return displayWrap(makeSpan(["katex"], [buildHTML(e, optionsFromSettings(n))]), n);
}, stretchyCodePoint = {
	widehat: "^",
	widecheck: "ˇ",
	widetilde: "~",
	utilde: "~",
	overleftarrow: "←",
	underleftarrow: "←",
	xleftarrow: "←",
	overrightarrow: "→",
	underrightarrow: "→",
	xrightarrow: "→",
	underbrace: "⏟",
	overbrace: "⏞",
	underbracket: "⎵",
	overbracket: "⎴",
	overgroup: "⏠",
	undergroup: "⏡",
	overleftrightarrow: "↔",
	underleftrightarrow: "↔",
	xleftrightarrow: "↔",
	Overrightarrow: "⇒",
	xRightarrow: "⇒",
	overleftharpoon: "↼",
	xleftharpoonup: "↼",
	overrightharpoon: "⇀",
	xrightharpoonup: "⇀",
	xLeftarrow: "⇐",
	xLeftrightarrow: "⇔",
	xhookleftarrow: "↩",
	xhookrightarrow: "↪",
	xmapsto: "↦",
	xrightharpoondown: "⇁",
	xleftharpoondown: "↽",
	xrightleftharpoons: "⇌",
	xleftrightharpoons: "⇋",
	xtwoheadleftarrow: "↞",
	xtwoheadrightarrow: "↠",
	xlongequal: "=",
	xtofrom: "⇄",
	xrightleftarrows: "⇄",
	xrightequilibrium: "⇌",
	xleftequilibrium: "⇋",
	"\\cdrightarrow": "→",
	"\\cdleftarrow": "←",
	"\\cdlongequal": "="
}, stretchyMathML = function(e) {
	var t = new MathNode("mo", [new TextNode(stretchyCodePoint[e.replace(/^\\/, "")])]);
	return t.setAttribute("stretchy", "true"), t;
}, katexImagesData = {
	overrightarrow: [
		["rightarrow"],
		.888,
		522,
		"xMaxYMin"
	],
	overleftarrow: [
		["leftarrow"],
		.888,
		522,
		"xMinYMin"
	],
	underrightarrow: [
		["rightarrow"],
		.888,
		522,
		"xMaxYMin"
	],
	underleftarrow: [
		["leftarrow"],
		.888,
		522,
		"xMinYMin"
	],
	xrightarrow: [
		["rightarrow"],
		1.469,
		522,
		"xMaxYMin"
	],
	"\\cdrightarrow": [
		["rightarrow"],
		3,
		522,
		"xMaxYMin"
	],
	xleftarrow: [
		["leftarrow"],
		1.469,
		522,
		"xMinYMin"
	],
	"\\cdleftarrow": [
		["leftarrow"],
		3,
		522,
		"xMinYMin"
	],
	Overrightarrow: [
		["doublerightarrow"],
		.888,
		560,
		"xMaxYMin"
	],
	xRightarrow: [
		["doublerightarrow"],
		1.526,
		560,
		"xMaxYMin"
	],
	xLeftarrow: [
		["doubleleftarrow"],
		1.526,
		560,
		"xMinYMin"
	],
	overleftharpoon: [
		["leftharpoon"],
		.888,
		522,
		"xMinYMin"
	],
	xleftharpoonup: [
		["leftharpoon"],
		.888,
		522,
		"xMinYMin"
	],
	xleftharpoondown: [
		["leftharpoondown"],
		.888,
		522,
		"xMinYMin"
	],
	overrightharpoon: [
		["rightharpoon"],
		.888,
		522,
		"xMaxYMin"
	],
	xrightharpoonup: [
		["rightharpoon"],
		.888,
		522,
		"xMaxYMin"
	],
	xrightharpoondown: [
		["rightharpoondown"],
		.888,
		522,
		"xMaxYMin"
	],
	xlongequal: [
		["longequal"],
		.888,
		334,
		"xMinYMin"
	],
	"\\cdlongequal": [
		["longequal"],
		3,
		334,
		"xMinYMin"
	],
	xtwoheadleftarrow: [
		["twoheadleftarrow"],
		.888,
		334,
		"xMinYMin"
	],
	xtwoheadrightarrow: [
		["twoheadrightarrow"],
		.888,
		334,
		"xMaxYMin"
	],
	overleftrightarrow: [
		["leftarrow", "rightarrow"],
		.888,
		522
	],
	overbrace: [
		[
			"leftbrace",
			"midbrace",
			"rightbrace"
		],
		1.6,
		548
	],
	underbrace: [
		[
			"leftbraceunder",
			"midbraceunder",
			"rightbraceunder"
		],
		1.6,
		548
	],
	underleftrightarrow: [
		["leftarrow", "rightarrow"],
		.888,
		522
	],
	xleftrightarrow: [
		["leftarrow", "rightarrow"],
		1.75,
		522
	],
	xLeftrightarrow: [
		["doubleleftarrow", "doublerightarrow"],
		1.75,
		560
	],
	xrightleftharpoons: [
		["leftharpoondownplus", "rightharpoonplus"],
		1.75,
		716
	],
	xleftrightharpoons: [
		["leftharpoonplus", "rightharpoondownplus"],
		1.75,
		716
	],
	xhookleftarrow: [
		["leftarrow", "righthook"],
		1.08,
		522
	],
	xhookrightarrow: [
		["lefthook", "rightarrow"],
		1.08,
		522
	],
	overlinesegment: [
		["leftlinesegment", "rightlinesegment"],
		.888,
		522
	],
	underlinesegment: [
		["leftlinesegment", "rightlinesegment"],
		.888,
		522
	],
	overbracket: [
		["leftbracketover", "rightbracketover"],
		1.6,
		440
	],
	underbracket: [
		["leftbracketunder", "rightbracketunder"],
		1.6,
		410
	],
	overgroup: [
		["leftgroup", "rightgroup"],
		.888,
		342
	],
	undergroup: [
		["leftgroupunder", "rightgroupunder"],
		.888,
		342
	],
	xmapsto: [
		["leftmapsto", "rightarrow"],
		1.5,
		522
	],
	xtofrom: [
		["leftToFrom", "rightToFrom"],
		1.75,
		528
	],
	xrightleftarrows: [
		["baraboveleftarrow", "rightarrowabovebar"],
		1.75,
		901
	],
	xrightequilibrium: [
		["baraboveshortleftharpoon", "rightharpoonaboveshortbar"],
		1.75,
		716
	],
	xleftequilibrium: [
		["shortbaraboveleftharpoon", "shortrightharpoonabovebar"],
		1.75,
		716
	]
}, wideAccentLabels = new Set([
	"widehat",
	"widecheck",
	"widetilde",
	"utilde"
]), stretchySvg = function(e, t) {
	function n() {
		var n = 4e5, a = e.label.slice(1);
		if (wideAccentLabels.has(a)) {
			var o = e, s = o.base.type === "ordgroup" ? o.base.body.length : 1, l, u, d;
			if (s > 5) a === "widehat" || a === "widecheck" ? (l = 420, n = 2364, d = .42, u = a + "4") : (l = 312, n = 2340, d = .34, u = "tilde4");
			else {
				var f = [
					1,
					1,
					2,
					2,
					3,
					3
				][s];
				a === "widehat" || a === "widecheck" ? (n = [
					0,
					1062,
					2364,
					2364,
					2364
				][f], l = [
					0,
					239,
					300,
					360,
					420
				][f], d = [
					0,
					.24,
					.3,
					.3,
					.36,
					.42
				][f], u = a + f) : (n = [
					0,
					600,
					1033,
					2339,
					2340
				][f], l = [
					0,
					260,
					286,
					306,
					312
				][f], d = [
					0,
					.26,
					.286,
					.3,
					.306,
					.34
				][f], u = "tilde" + f);
			}
			return {
				span: makeSvgSpan([], [new SvgNode([new PathNode(u)], {
					width: "100%",
					height: makeEm(d),
					viewBox: "0 0 " + n + " " + l,
					preserveAspectRatio: "none"
				})], t),
				minWidth: 0,
				height: d
			};
		} else {
			var p = [], m = katexImagesData[a], [h, g, _] = m, v = _ / 1e3, y = h.length, b, x;
			if (y === 1) {
				var C = m[3];
				b = ["hide-tail"], x = [C];
			} else if (y === 2) b = ["halfarrow-left", "halfarrow-right"], x = ["xMinYMin", "xMaxYMin"];
			else if (y === 3) b = [
				"brace-left",
				"brace-center",
				"brace-right"
			], x = [
				"xMinYMin",
				"xMidYMin",
				"xMaxYMin"
			];
			else throw Error("Correct katexImagesData or update code here to support\n                    " + y + " children.");
			for (var w = 0; w < y; w++) {
				var E = new SvgNode([new PathNode(h[w])], {
					width: "400em",
					height: makeEm(v),
					viewBox: "0 0 " + n + " " + _,
					preserveAspectRatio: x[w] + " slice"
				}), O = makeSvgSpan([b[w]], [E], t);
				if (y === 1) return {
					span: O,
					minWidth: g,
					height: v
				};
				O.style.height = makeEm(v), p.push(O);
			}
			return {
				span: makeSpan(["stretchy"], p, t),
				minWidth: g,
				height: v
			};
		}
	}
	var { span: a, minWidth: o, height: s } = n();
	return a.height = s, a.style.height = makeEm(s), o > 0 && (a.style.minWidth = makeEm(o)), a;
}, stretchyEnclose = function(e, t, n, a, o) {
	var s, l = e.height + e.depth + n + a;
	if (/fbox|color|angl/.test(t)) {
		if (s = makeSpan(["stretchy", t], [], o), t === "fbox") {
			var u = o.color && o.getColor();
			u && (s.style.borderColor = u);
		}
	} else {
		var d = [];
		/^[bx]cancel$/.test(t) && d.push(new LineNode({
			x1: "0",
			y1: "0",
			x2: "100%",
			y2: "100%",
			"stroke-width": "0.046em"
		})), /^x?cancel$/.test(t) && d.push(new LineNode({
			x1: "0",
			y1: "100%",
			x2: "100%",
			y2: "0",
			"stroke-width": "0.046em"
		})), s = makeSvgSpan([], [new SvgNode(d, {
			width: "100%",
			height: makeEm(l)
		})], o);
	}
	return s.height = l, s.style.height = makeEm(l), s;
};
function assertNodeType(e, t) {
	if (!e || e.type !== t) throw Error("Expected node of type " + t + ", but got " + (e ? "node of type " + e.type : String(e)));
	return e;
}
function assertSymbolNodeType(e) {
	var t = checkSymbolNodeType(e);
	if (!t) throw Error("Expected node of symbol group type, but got " + (e ? "node of type " + e.type : String(e)));
	return t;
}
function checkSymbolNodeType(e) {
	return e && (e.type === "atom" || NON_ATOMS.hasOwnProperty(e.type)) ? e : null;
}
var getBaseSymbol = (e) => {
	if (e instanceof SymbolNode) return e;
	if (hasHtmlDomChildren(e) && e.children.length === 1) return getBaseSymbol(e.children[0]);
}, htmlBuilder$a = (e, t) => {
	var n, a, o;
	e && e.type === "supsub" ? (a = assertNodeType(e.base, "accent"), n = a.base, e.base = n, o = assertSpan(buildGroup$1(e, t)), e.base = a) : (a = assertNodeType(e, "accent"), n = a.base);
	var s = buildGroup$1(n, t.havingCrampedStyle()), l = a.isShifty && isCharacterBox(n), u = 0;
	l && (u = getBaseSymbol(s)?.skew ?? 0);
	var d = a.label === "\\c", f = d ? s.height + s.depth : Math.min(s.height, t.fontMetrics().xHeight), p;
	if (a.isStretchy) p = stretchySvg(a, t), p = makeVList({
		positionType: "firstBaseline",
		children: [{
			type: "elem",
			elem: s
		}, {
			type: "elem",
			elem: p,
			wrapperClasses: ["svg-align"],
			wrapperStyle: u > 0 ? {
				width: "calc(100% - " + makeEm(2 * u) + ")",
				marginLeft: makeEm(2 * u)
			} : void 0
		}]
	});
	else {
		var h, g;
		a.label === "\\vec" ? (h = staticSvg("vec", t), g = svgData.vec[1]) : (h = makeOrd({
			type: "textord",
			mode: a.mode,
			text: a.label
		}, t, "textord"), h = assertSymbolDomNode(h), h.italic = 0, g = h.width, d && (f += h.depth)), p = makeSpan(["accent-body"], [h]);
		var _ = a.label === "\\textcircled";
		_ && (p.classes.push("accent-full"), f = s.height);
		var v = u;
		_ || (v -= g / 2), p.style.left = makeEm(v), a.label === "\\textcircled" && (p.style.top = ".2em"), p = makeVList({
			positionType: "firstBaseline",
			children: [
				{
					type: "elem",
					elem: s
				},
				{
					type: "kern",
					size: -f
				},
				{
					type: "elem",
					elem: p
				}
			]
		});
	}
	var y = makeSpan(["mord", "accent"], [p], t);
	return o ? (o.children[0] = y, o.height = Math.max(y.height, o.height), o.classes[0] = "mord", o) : y;
}, mathmlBuilder$9 = (e, t) => {
	var n = e.isStretchy ? stretchyMathML(e.label) : new MathNode("mo", [makeText(e.label, e.mode)]), a = new MathNode("mover", [buildGroup(e.base, t), n]);
	return a.setAttribute("accent", "true"), a;
}, NON_STRETCHY_ACCENT_REGEX = new RegExp([
	"\\acute",
	"\\grave",
	"\\ddot",
	"\\tilde",
	"\\bar",
	"\\breve",
	"\\check",
	"\\hat",
	"\\vec",
	"\\dot",
	"\\mathring"
].map((e) => "\\" + e).join("|"));
defineFunction({
	type: "accent",
	names: [
		"\\acute",
		"\\grave",
		"\\ddot",
		"\\tilde",
		"\\bar",
		"\\breve",
		"\\check",
		"\\hat",
		"\\vec",
		"\\dot",
		"\\mathring",
		"\\widecheck",
		"\\widehat",
		"\\widetilde",
		"\\overrightarrow",
		"\\overleftarrow",
		"\\Overrightarrow",
		"\\overleftrightarrow",
		"\\overgroup",
		"\\overlinesegment",
		"\\overleftharpoon",
		"\\overrightharpoon"
	],
	props: { numArgs: 1 },
	handler: (e, t) => {
		var n = normalizeArgument(t[0]), a = !NON_STRETCHY_ACCENT_REGEX.test(e.funcName), o = !a || e.funcName === "\\widehat" || e.funcName === "\\widetilde" || e.funcName === "\\widecheck";
		return {
			type: "accent",
			mode: e.parser.mode,
			label: e.funcName,
			isStretchy: a,
			isShifty: o,
			base: n
		};
	},
	htmlBuilder: htmlBuilder$a,
	mathmlBuilder: mathmlBuilder$9
}), defineFunction({
	type: "accent",
	names: [
		"\\'",
		"\\`",
		"\\^",
		"\\~",
		"\\=",
		"\\u",
		"\\.",
		"\\\"",
		"\\c",
		"\\r",
		"\\H",
		"\\v",
		"\\textcircled"
	],
	props: {
		numArgs: 1,
		allowedInText: !0,
		allowedInMath: !0,
		argTypes: ["primitive"]
	},
	handler: (e, t) => {
		var n = t[0], a = e.parser.mode;
		return a === "math" && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), a = "text"), {
			type: "accent",
			mode: a,
			label: e.funcName,
			isStretchy: !1,
			isShifty: !0,
			base: n
		};
	},
	htmlBuilder: htmlBuilder$a,
	mathmlBuilder: mathmlBuilder$9
}), defineFunction({
	type: "accentUnder",
	names: [
		"\\underleftarrow",
		"\\underrightarrow",
		"\\underleftrightarrow",
		"\\undergroup",
		"\\underlinesegment",
		"\\utilde"
	],
	props: { numArgs: 1 },
	handler: (e, t) => {
		var { parser: n, funcName: a } = e, o = t[0];
		return {
			type: "accentUnder",
			mode: n.mode,
			label: a,
			base: o
		};
	},
	htmlBuilder: (e, t) => {
		var n = buildGroup$1(e.base, t), a = stretchySvg(e, t), o = e.label === "\\utilde" ? .12 : 0;
		return makeSpan(["mord", "accentunder"], [makeVList({
			positionType: "top",
			positionData: n.height,
			children: [
				{
					type: "elem",
					elem: a,
					wrapperClasses: ["svg-align"]
				},
				{
					type: "kern",
					size: o
				},
				{
					type: "elem",
					elem: n
				}
			]
		})], t);
	},
	mathmlBuilder: (e, t) => {
		var n = stretchyMathML(e.label), a = new MathNode("munder", [buildGroup(e.base, t), n]);
		return a.setAttribute("accentunder", "true"), a;
	}
});
var paddedNode = (e) => {
	var t = new MathNode("mpadded", e ? [e] : []);
	return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t;
};
defineFunction({
	type: "xArrow",
	names: [
		"\\xleftarrow",
		"\\xrightarrow",
		"\\xLeftarrow",
		"\\xRightarrow",
		"\\xleftrightarrow",
		"\\xLeftrightarrow",
		"\\xhookleftarrow",
		"\\xhookrightarrow",
		"\\xmapsto",
		"\\xrightharpoondown",
		"\\xrightharpoonup",
		"\\xleftharpoondown",
		"\\xleftharpoonup",
		"\\xrightleftharpoons",
		"\\xleftrightharpoons",
		"\\xlongequal",
		"\\xtwoheadrightarrow",
		"\\xtwoheadleftarrow",
		"\\xtofrom",
		"\\xrightleftarrows",
		"\\xrightequilibrium",
		"\\xleftequilibrium",
		"\\\\cdrightarrow",
		"\\\\cdleftarrow",
		"\\\\cdlongequal"
	],
	props: {
		numArgs: 1,
		numOptionalArgs: 1
	},
	handler(e, t, n) {
		var { parser: a, funcName: o } = e;
		return {
			type: "xArrow",
			mode: a.mode,
			label: o,
			body: t[0],
			below: n[0]
		};
	},
	htmlBuilder(e, t) {
		var n = t.style, a = t.havingStyle(n.sup()), o = wrapFragment(buildGroup$1(e.body, a, t), t), s = e.label.slice(0, 2) === "\\x" ? "x" : "cd";
		o.classes.push(s + "-arrow-pad");
		var l;
		e.below && (a = t.havingStyle(n.sub()), l = wrapFragment(buildGroup$1(e.below, a, t), t), l.classes.push(s + "-arrow-pad"));
		var u = stretchySvg(e, t), d = -t.fontMetrics().axisHeight + .5 * u.height, f = -t.fontMetrics().axisHeight - .5 * u.height - .111;
		(o.depth > .25 || e.label === "\\xleftequilibrium") && (f -= o.depth);
		var p;
		if (l) {
			var m = -t.fontMetrics().axisHeight + l.height + .5 * u.height + .111;
			p = makeVList({
				positionType: "individualShift",
				children: [
					{
						type: "elem",
						elem: o,
						shift: f
					},
					{
						type: "elem",
						elem: u,
						shift: d
					},
					{
						type: "elem",
						elem: l,
						shift: m
					}
				]
			});
		} else p = makeVList({
			positionType: "individualShift",
			children: [{
				type: "elem",
				elem: o,
				shift: f
			}, {
				type: "elem",
				elem: u,
				shift: d
			}]
		});
		return p.children[0].children[0].children[1].classes.push("svg-align"), makeSpan(["mrel", "x-arrow"], [p], t);
	},
	mathmlBuilder(e, t) {
		var n = stretchyMathML(e.label);
		n.setAttribute("minsize", e.label.charAt(0) === "x" ? "1.75em" : "3.0em");
		var a;
		if (e.body) {
			var o = paddedNode(buildGroup(e.body, t));
			a = e.below ? new MathNode("munderover", [
				n,
				paddedNode(buildGroup(e.below, t)),
				o
			]) : new MathNode("mover", [n, o]);
		} else e.below ? a = new MathNode("munder", [n, paddedNode(buildGroup(e.below, t))]) : (a = paddedNode(), a = new MathNode("mover", [n, a]));
		return a;
	}
});
function htmlBuilder$9(e, t) {
	var n = buildExpression$1(e.body, t, !0);
	return makeSpan([e.mclass], n, t);
}
function mathmlBuilder$8(e, t) {
	var n, a = buildExpression(e.body, t);
	return e.mclass === "minner" ? n = new MathNode("mpadded", a) : e.mclass === "mord" ? e.isCharacterBox ? (n = a[0], n.type = "mi") : n = new MathNode("mi", a) : (e.isCharacterBox ? (n = a[0], n.type = "mo") : n = new MathNode("mo", a), e.mclass === "mbin" ? (n.attributes.lspace = "0.22em", n.attributes.rspace = "0.22em") : e.mclass === "mpunct" ? (n.attributes.lspace = "0em", n.attributes.rspace = "0.17em") : e.mclass === "mopen" || e.mclass === "mclose" ? (n.attributes.lspace = "0em", n.attributes.rspace = "0em") : e.mclass === "minner" && (n.attributes.lspace = "0.0556em", n.attributes.width = "+0.1111em")), n;
}
defineFunction({
	type: "mclass",
	names: [
		"\\mathord",
		"\\mathbin",
		"\\mathrel",
		"\\mathopen",
		"\\mathclose",
		"\\mathpunct",
		"\\mathinner"
	],
	props: {
		numArgs: 1,
		primitive: !0
	},
	handler(e, t) {
		var { parser: n, funcName: a } = e, o = t[0];
		return {
			type: "mclass",
			mode: n.mode,
			mclass: "m" + a.slice(5),
			body: ordargument(o),
			isCharacterBox: isCharacterBox(o)
		};
	},
	htmlBuilder: htmlBuilder$9,
	mathmlBuilder: mathmlBuilder$8
});
var binrelClass = (e) => {
	var t = e.type === "ordgroup" && e.body.length ? e.body[0] : e;
	return t.type === "atom" && (t.family === "bin" || t.family === "rel") ? "m" + t.family : "mord";
};
defineFunction({
	type: "mclass",
	names: ["\\@binrel"],
	props: { numArgs: 2 },
	handler(e, t) {
		var { parser: n } = e;
		return {
			type: "mclass",
			mode: n.mode,
			mclass: binrelClass(t[0]),
			body: ordargument(t[1]),
			isCharacterBox: isCharacterBox(t[1])
		};
	}
}), defineFunction({
	type: "mclass",
	names: [
		"\\stackrel",
		"\\overset",
		"\\underset"
	],
	props: { numArgs: 2 },
	handler(e, t) {
		var { parser: n, funcName: a } = e, o = t[1], s = t[0], l = a === "\\stackrel" ? "mrel" : binrelClass(o), u = {
			type: "op",
			mode: o.mode,
			limits: !0,
			alwaysHandleSupSub: !0,
			parentIsSupSub: !1,
			symbol: !1,
			suppressBaseShift: a !== "\\stackrel",
			body: ordargument(o)
		}, d = {
			type: "supsub",
			mode: s.mode,
			base: u,
			sup: a === "\\underset" ? null : s,
			sub: a === "\\underset" ? s : null
		};
		return {
			type: "mclass",
			mode: n.mode,
			mclass: l,
			body: [d],
			isCharacterBox: isCharacterBox(d)
		};
	},
	htmlBuilder: htmlBuilder$9,
	mathmlBuilder: mathmlBuilder$8
}), defineFunction({
	type: "pmb",
	names: ["\\pmb"],
	props: {
		numArgs: 1,
		allowedInText: !0
	},
	handler(e, t) {
		var { parser: n } = e;
		return {
			type: "pmb",
			mode: n.mode,
			mclass: binrelClass(t[0]),
			body: ordargument(t[0])
		};
	},
	htmlBuilder(e, t) {
		var n = buildExpression$1(e.body, t, !0), a = makeSpan([e.mclass], n, t);
		return a.style.textShadow = "0.02em 0.01em 0.04px", a;
	},
	mathmlBuilder(e, t) {
		var n = new MathNode("mstyle", buildExpression(e.body, t));
		return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
	}
});
var cdArrowFunctionName = {
	">": "\\\\cdrightarrow",
	"<": "\\\\cdleftarrow",
	"=": "\\\\cdlongequal",
	A: "\\uparrow",
	V: "\\downarrow",
	"|": "\\Vert",
	".": "no arrow"
}, newCell = () => ({
	type: "styling",
	body: [],
	mode: "math",
	style: "display"
}), isStartOfArrow = (e) => e.type === "textord" && e.text === "@", isLabelEnd = (e, t) => (e.type === "mathord" || e.type === "atom") && e.text === t;
function cdArrow(e, t, n) {
	var a = cdArrowFunctionName[e];
	switch (a) {
		case "\\\\cdrightarrow":
		case "\\\\cdleftarrow": return n.callFunction(a, [t[0]], [t[1]]);
		case "\\uparrow":
		case "\\downarrow":
			var o = n.callFunction("\\\\cdleft", [t[0]], []), s = {
				type: "atom",
				text: a,
				mode: "math",
				family: "rel"
			}, l = {
				type: "ordgroup",
				mode: "math",
				body: [
					o,
					n.callFunction("\\Big", [s], []),
					n.callFunction("\\\\cdright", [t[1]], [])
				]
			};
			return n.callFunction("\\\\cdparent", [l], []);
		case "\\\\cdlongequal": return n.callFunction("\\\\cdlongequal", [], []);
		case "\\Vert": return n.callFunction("\\Big", [{
			type: "textord",
			text: "\\Vert",
			mode: "math"
		}], []);
		default: return {
			type: "textord",
			text: " ",
			mode: "math"
		};
	}
}
function parseCD(e) {
	var t = [];
	for (e.gullet.beginGroup(), e.gullet.macros.set("\\cr", "\\\\\\relax"), e.gullet.beginGroup();;) {
		t.push(e.parseExpression(!1, "\\\\")), e.gullet.endGroup(), e.gullet.beginGroup();
		var n = e.fetch().text;
		if (n === "&" || n === "\\\\") e.consume();
		else if (n === "\\end") {
			t[t.length - 1].length === 0 && t.pop();
			break;
		} else throw new ParseError("Expected \\\\ or \\cr or \\end", e.nextToken);
	}
	for (var o = [], s = [o], l = 0; l < t.length; l++) {
		for (var u = t[l], d = newCell(), f = 0; f < u.length; f++) if (!isStartOfArrow(u[f])) d.body.push(u[f]);
		else {
			o.push(d), f += 1;
			var p = assertSymbolNodeType(u[f]).text, m = [, ,];
			if (m[0] = {
				type: "ordgroup",
				mode: "math",
				body: []
			}, m[1] = {
				type: "ordgroup",
				mode: "math",
				body: []
			}, !"=|.".includes(p)) if ("<>AV".includes(p)) for (var h = 0; h < 2; h++) {
				for (var g = !0, _ = f + 1; _ < u.length; _++) {
					if (isLabelEnd(u[_], p)) {
						g = !1, f = _;
						break;
					}
					if (isStartOfArrow(u[_])) throw new ParseError("Missing a " + p + " character to complete a CD arrow.", u[_]);
					m[h].body.push(u[_]);
				}
				if (g) throw new ParseError("Missing a " + p + " character to complete a CD arrow.", u[f]);
			}
			else throw new ParseError("Expected one of \"<>AV=|.\" after @", u[f]);
			var v = {
				type: "styling",
				body: [cdArrow(p, m, e)],
				mode: "math",
				style: "display"
			};
			o.push(v), d = newCell();
		}
		l % 2 == 0 ? o.push(d) : o.shift(), o = [], s.push(o);
	}
	return e.gullet.endGroup(), e.gullet.endGroup(), {
		type: "array",
		mode: "math",
		body: s,
		arraystretch: 1,
		addJot: !0,
		rowGaps: [null],
		cols: Array(s[0].length).fill({
			type: "align",
			align: "c",
			pregap: .25,
			postgap: .25
		}),
		colSeparationType: "CD",
		hLinesBeforeRow: Array(s.length + 1).fill([])
	};
}
defineFunction({
	type: "cdlabel",
	names: ["\\\\cdleft", "\\\\cdright"],
	props: { numArgs: 1 },
	handler(e, t) {
		var { parser: n, funcName: a } = e;
		return {
			type: "cdlabel",
			mode: n.mode,
			side: a.slice(4),
			label: t[0]
		};
	},
	htmlBuilder(e, t) {
		var n = t.havingStyle(t.style.sup()), a = wrapFragment(buildGroup$1(e.label, n, t), t);
		return a.classes.push("cd-label-" + e.side), a.style.bottom = makeEm(.8 - a.depth), a.height = 0, a.depth = 0, a;
	},
	mathmlBuilder(e, t) {
		var n = new MathNode("mrow", [buildGroup(e.label, t)]);
		return n = new MathNode("mpadded", [n]), n.setAttribute("width", "0"), e.side === "left" && n.setAttribute("lspace", "-1width"), n.setAttribute("voffset", "0.7em"), n = new MathNode("mstyle", [n]), n.setAttribute("displaystyle", "false"), n.setAttribute("scriptlevel", "1"), n;
	}
}), defineFunction({
	type: "cdlabelparent",
	names: ["\\\\cdparent"],
	props: { numArgs: 1 },
	handler(e, t) {
		var { parser: n } = e;
		return {
			type: "cdlabelparent",
			mode: n.mode,
			fragment: t[0]
		};
	},
	htmlBuilder(e, t) {
		var n = wrapFragment(buildGroup$1(e.fragment, t), t);
		return n.classes.push("cd-vert-arrow"), n;
	},
	mathmlBuilder(e, t) {
		return new MathNode("mrow", [buildGroup(e.fragment, t)]);
	}
}), defineFunction({
	type: "textord",
	names: ["\\@char"],
	props: {
		numArgs: 1,
		allowedInText: !0
	},
	handler(e, t) {
		for (var { parser: n } = e, o = assertNodeType(t[0], "ordgroup").body, s = "", l = 0; l < o.length; l++) {
			var u = assertNodeType(o[l], "textord");
			s += u.text;
		}
		var d = parseInt(s), f;
		if (isNaN(d)) throw new ParseError("\\@char has non-numeric argument " + s);
		if (d < 0 || d >= 1114111) throw new ParseError("\\@char with invalid code point " + s);
		return d <= 65535 ? f = String.fromCharCode(d) : (d -= 65536, f = String.fromCharCode((d >> 10) + 55296, (d & 1023) + 56320)), {
			type: "textord",
			mode: n.mode,
			text: f
		};
	}
});
var htmlBuilder$8 = (e, t) => makeFragment(buildExpression$1(e.body, t.withColor(e.color), !1)), mathmlBuilder$7 = (e, t) => {
	var n = new MathNode("mstyle", buildExpression(e.body, t.withColor(e.color)));
	return n.setAttribute("mathcolor", e.color), n;
};
defineFunction({
	type: "color",
	names: ["\\textcolor"],
	props: {
		numArgs: 2,
		allowedInText: !0,
		argTypes: ["color", "original"]
	},
	handler(e, t) {
		var { parser: n } = e, a = assertNodeType(t[0], "color-token").color, o = t[1];
		return {
			type: "color",
			mode: n.mode,
			color: a,
			body: ordargument(o)
		};
	},
	htmlBuilder: htmlBuilder$8,
	mathmlBuilder: mathmlBuilder$7
}), defineFunction({
	type: "color",
	names: ["\\color"],
	props: {
		numArgs: 1,
		allowedInText: !0,
		argTypes: ["color"]
	},
	handler(e, t) {
		var { parser: n, breakOnTokenText: a } = e, o = assertNodeType(t[0], "color-token").color;
		n.gullet.macros.set("\\current@color", o);
		var s = n.parseExpression(!0, a);
		return {
			type: "color",
			mode: n.mode,
			color: o,
			body: s
		};
	},
	htmlBuilder: htmlBuilder$8,
	mathmlBuilder: mathmlBuilder$7
}), defineFunction({
	type: "cr",
	names: ["\\\\"],
	props: {
		numArgs: 0,
		numOptionalArgs: 0,
		allowedInText: !0
	},
	handler(e, t, n) {
		var { parser: a } = e, o = a.gullet.future().text === "[" ? a.parseSizeGroup(!0) : null, s = !a.settings.displayMode || !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
		return {
			type: "cr",
			mode: a.mode,
			newLine: s,
			size: o && assertNodeType(o, "size").value
		};
	},
	htmlBuilder(e, t) {
		var n = makeSpan(["mspace"], [], t);
		return e.newLine && (n.classes.push("newline"), e.size && (n.style.marginTop = makeEm(calculateSize(e.size, t)))), n;
	},
	mathmlBuilder(e, t) {
		var n = new MathNode("mspace");
		return e.newLine && (n.setAttribute("linebreak", "newline"), e.size && n.setAttribute("height", makeEm(calculateSize(e.size, t)))), n;
	}
});
var globalMap = {
	"\\global": "\\global",
	"\\long": "\\\\globallong",
	"\\\\globallong": "\\\\globallong",
	"\\def": "\\gdef",
	"\\gdef": "\\gdef",
	"\\edef": "\\xdef",
	"\\xdef": "\\xdef",
	"\\let": "\\\\globallet",
	"\\futurelet": "\\\\globalfuture"
}, checkControlSequence = (e) => {
	var t = e.text;
	if (/^(?:[\\{}$&#^_]|EOF)$/.test(t)) throw new ParseError("Expected a control sequence", e);
	return t;
}, getRHS = (e) => {
	var t = e.gullet.popToken();
	return t.text === "=" && (t = e.gullet.popToken(), t.text === " " && (t = e.gullet.popToken())), t;
}, letCommand = (e, t, n, a) => {
	var o = e.gullet.macros.get(n.text);
	o ??= (n.noexpand = !0, {
		tokens: [n],
		numArgs: 0,
		unexpandable: !e.gullet.isExpandable(n.text)
	}), e.gullet.macros.set(t, o, a);
};
defineFunction({
	type: "internal",
	names: [
		"\\global",
		"\\long",
		"\\\\globallong"
	],
	props: {
		numArgs: 0,
		allowedInText: !0
	},
	handler(e) {
		var { parser: t, funcName: n } = e;
		t.consumeSpaces();
		var o = t.fetch();
		if (globalMap[o.text]) return (n === "\\global" || n === "\\\\globallong") && (o.text = globalMap[o.text]), assertNodeType(t.parseFunction(), "internal");
		throw new ParseError("Invalid token after macro prefix", o);
	}
}), defineFunction({
	type: "internal",
	names: [
		"\\def",
		"\\gdef",
		"\\edef",
		"\\xdef"
	],
	props: {
		numArgs: 0,
		allowedInText: !0,
		primitive: !0
	},
	handler(e) {
		var { parser: t, funcName: n } = e, o = t.gullet.popToken(), s = o.text;
		if (/^(?:[\\{}$&#^_]|EOF)$/.test(s)) throw new ParseError("Expected a control sequence", o);
		for (var l = 0, u, d = [[]]; t.gullet.future().text !== "{";) if (o = t.gullet.popToken(), o.text === "#") {
			if (t.gullet.future().text === "{") {
				u = t.gullet.future(), d[l].push("{");
				break;
			}
			if (o = t.gullet.popToken(), !/^[1-9]$/.test(o.text)) throw new ParseError("Invalid argument number \"" + o.text + "\"");
			if (parseInt(o.text) !== l + 1) throw new ParseError("Argument number \"" + o.text + "\" out of order");
			l++, d.push([]);
		} else if (o.text === "EOF") throw new ParseError("Expected a macro definition");
		else d[l].push(o.text);
		var { tokens: f } = t.gullet.consumeArg();
		return u && f.unshift(u), (n === "\\edef" || n === "\\xdef") && (f = t.gullet.expandTokens(f), f.reverse()), t.gullet.macros.set(s, {
			tokens: f,
			numArgs: l,
			delimiters: d
		}, n === globalMap[n]), {
			type: "internal",
			mode: t.mode
		};
	}
}), defineFunction({
	type: "internal",
	names: ["\\let", "\\\\globallet"],
	props: {
		numArgs: 0,
		allowedInText: !0,
		primitive: !0
	},
	handler(e) {
		var { parser: t, funcName: n } = e, a = checkControlSequence(t.gullet.popToken());
		return t.gullet.consumeSpaces(), letCommand(t, a, getRHS(t), n === "\\\\globallet"), {
			type: "internal",
			mode: t.mode
		};
	}
}), defineFunction({
	type: "internal",
	names: ["\\futurelet", "\\\\globalfuture"],
	props: {
		numArgs: 0,
		allowedInText: !0,
		primitive: !0
	},
	handler(e) {
		var { parser: t, funcName: n } = e, a = checkControlSequence(t.gullet.popToken()), o = t.gullet.popToken(), s = t.gullet.popToken();
		return letCommand(t, a, s, n === "\\\\globalfuture"), t.gullet.pushToken(s), t.gullet.pushToken(o), {
			type: "internal",
			mode: t.mode
		};
	}
});
var getMetrics = function(e, t, n) {
	var a = getCharacterMetrics(symbols.math[e] && symbols.math[e].replace || e, t, n);
	if (!a) throw Error("Unsupported symbol " + e + " and font size " + t + ".");
	return a;
}, styleWrap = function(e, t, n, a) {
	var o = n.havingBaseStyle(t), s = makeSpan(a.concat(o.sizingClasses(n)), [e], n), l = o.sizeMultiplier / n.sizeMultiplier;
	return s.height *= l, s.depth *= l, s.maxFontSize = o.sizeMultiplier, s;
}, centerSpan = function(e, t, n) {
	var a = t.havingBaseStyle(n), o = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
	e.classes.push("delimcenter"), e.style.top = makeEm(o), e.height -= o, e.depth += o;
}, makeSmallDelim = function(e, t, n, a, o, s) {
	var l = styleWrap(makeSymbol(e, "Main-Regular", o, a), t, a, s);
	return n && centerSpan(l, a, t), l;
}, mathrmSize = function(e, t, n, a) {
	return makeSymbol(e, "Size" + t + "-Regular", n, a);
}, makeLargeDelim = function(e, t, n, a, o, s) {
	var l = mathrmSize(e, t, o, a), u = styleWrap(makeSpan(["delimsizing", "size" + t], [l], a), Style$1.TEXT, a, s);
	return n && centerSpan(u, a, Style$1.TEXT), u;
}, makeGlyphSpan = function(e, t, n) {
	return {
		type: "elem",
		elem: makeSpan(["delimsizinginner", t === "Size1-Regular" ? "delim-size1" : "delim-size4"], [makeSpan([], [makeSymbol(e, t, n)])])
	};
}, makeInner = function(e, t, n) {
	var a = fontMetricsData["Size4-Regular"][e.charCodeAt(0)] ? fontMetricsData["Size4-Regular"][e.charCodeAt(0)][4] : fontMetricsData["Size1-Regular"][e.charCodeAt(0)][4], o = makeSvgSpan([], [new SvgNode([new PathNode("inner", innerPath(e, Math.round(1e3 * t)))], {
		width: makeEm(a),
		height: makeEm(t),
		style: "width:" + makeEm(a),
		viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
		preserveAspectRatio: "xMinYMin"
	})], n);
	return o.height = t, o.style.height = makeEm(t), o.style.width = makeEm(a), {
		type: "elem",
		elem: o
	};
}, lapInEms = .008, lap = {
	type: "kern",
	size: -1 * lapInEms
}, verts = new Set([
	"|",
	"\\lvert",
	"\\rvert",
	"\\vert"
]), doubleVerts = new Set([
	"\\|",
	"\\lVert",
	"\\rVert",
	"\\Vert"
]), makeStackedDelim = function(e, t, n, a, o, s) {
	var l, u, d, f, p = "", m = 0;
	l = d = f = e, u = null;
	var h = "Size1-Regular";
	e === "\\uparrow" ? d = f = "⏐" : e === "\\Uparrow" ? d = f = "‖" : e === "\\downarrow" ? l = d = "⏐" : e === "\\Downarrow" ? l = d = "‖" : e === "\\updownarrow" ? (l = "\\uparrow", d = "⏐", f = "\\downarrow") : e === "\\Updownarrow" ? (l = "\\Uparrow", d = "‖", f = "\\Downarrow") : verts.has(e) ? (d = "∣", p = "vert", m = 333) : doubleVerts.has(e) ? (d = "∥", p = "doublevert", m = 556) : e === "[" || e === "\\lbrack" ? (l = "⎡", d = "⎢", f = "⎣", h = "Size4-Regular", p = "lbrack", m = 667) : e === "]" || e === "\\rbrack" ? (l = "⎤", d = "⎥", f = "⎦", h = "Size4-Regular", p = "rbrack", m = 667) : e === "\\lfloor" || e === "⌊" ? (d = l = "⎢", f = "⎣", h = "Size4-Regular", p = "lfloor", m = 667) : e === "\\lceil" || e === "⌈" ? (l = "⎡", d = f = "⎢", h = "Size4-Regular", p = "lceil", m = 667) : e === "\\rfloor" || e === "⌋" ? (d = l = "⎥", f = "⎦", h = "Size4-Regular", p = "rfloor", m = 667) : e === "\\rceil" || e === "⌉" ? (l = "⎤", d = f = "⎥", h = "Size4-Regular", p = "rceil", m = 667) : e === "(" || e === "\\lparen" ? (l = "⎛", d = "⎜", f = "⎝", h = "Size4-Regular", p = "lparen", m = 875) : e === ")" || e === "\\rparen" ? (l = "⎞", d = "⎟", f = "⎠", h = "Size4-Regular", p = "rparen", m = 875) : e === "\\{" || e === "\\lbrace" ? (l = "⎧", u = "⎨", f = "⎩", d = "⎪", h = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (l = "⎫", u = "⎬", f = "⎭", d = "⎪", h = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (l = "⎧", f = "⎩", d = "⎪", h = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (l = "⎫", f = "⎭", d = "⎪", h = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (l = "⎧", f = "⎭", d = "⎪", h = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (l = "⎫", f = "⎩", d = "⎪", h = "Size4-Regular");
	var g = getMetrics(l, h, o), _ = g.height + g.depth, v = getMetrics(d, h, o), y = v.height + v.depth, b = getMetrics(f, h, o), x = b.height + b.depth, C = 0, w = 1;
	if (u !== null) {
		var E = getMetrics(u, h, o);
		C = E.height + E.depth, w = 2;
	}
	var O = _ + x + C, k = O + Math.max(0, Math.ceil((t - O) / (w * y))) * w * y, A = a.fontMetrics().axisHeight;
	n && (A *= a.sizeMultiplier);
	var j = k / 2 - A, M = [];
	if (p.length > 0) {
		var N = k - _ - x, P = Math.round(k * 1e3), F = tallDelim(p, Math.round(N * 1e3)), I = new PathNode(p, F), L = makeEm(m / 1e3), z = makeEm(P / 1e3), B = makeSvgSpan([], [new SvgNode([I], {
			width: L,
			height: z,
			viewBox: "0 0 " + m + " " + P
		})], a);
		B.height = P / 1e3, B.style.width = L, B.style.height = z, M.push({
			type: "elem",
			elem: B
		});
	} else {
		if (M.push(makeGlyphSpan(f, h, o)), M.push(lap), u === null) {
			var V = k - _ - x + 2 * lapInEms;
			M.push(makeInner(d, V, a));
		} else {
			var H = (k - _ - x - C) / 2 + 2 * lapInEms;
			M.push(makeInner(d, H, a)), M.push(lap), M.push(makeGlyphSpan(u, h, o)), M.push(lap), M.push(makeInner(d, H, a));
		}
		M.push(lap), M.push(makeGlyphSpan(l, h, o));
	}
	var U = a.havingBaseStyle(Style$1.TEXT);
	return styleWrap(makeSpan(["delimsizing", "mult"], [makeVList({
		positionType: "bottom",
		positionData: j,
		children: M
	})], U), Style$1.TEXT, a, s);
}, vbPad = 80, emPad = .08, sqrtSvg = function(e, t, n, a, o) {
	return makeSvgSpan(["hide-tail"], [new SvgNode([new PathNode(e, sqrtPath(e, a, n))], {
		width: "400em",
		height: makeEm(t),
		viewBox: "0 0 400000 " + n,
		preserveAspectRatio: "xMinYMin slice"
	})], o);
}, makeSqrtImage = function(e, t) {
	var n = t.havingBaseSizing(), a = traverseSequence("\\surd", e * n.sizeMultiplier, stackLargeDelimiterSequence, n), o = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), l, u = 0, d = 0, f = 0, p;
	return a.type === "small" ? (f = 1e3 + 1e3 * s + vbPad, e < 1 ? o = 1 : e < 1.4 && (o = .7), u = (1 + s + emPad) / o, d = (1 + s) / o, l = sqrtSvg("sqrtMain", u, f, s, t), l.style.minWidth = "0.853em", p = .833 / o) : a.type === "large" ? (f = (1e3 + vbPad) * sizeToMaxHeight[a.size], d = (sizeToMaxHeight[a.size] + s) / o, u = (sizeToMaxHeight[a.size] + s + emPad) / o, l = sqrtSvg("sqrtSize" + a.size, u, f, s, t), l.style.minWidth = "1.02em", p = 1 / o) : (u = e + s + emPad, d = e + s, f = Math.floor(1e3 * e + s) + vbPad, l = sqrtSvg("sqrtTall", u, f, s, t), l.style.minWidth = "0.742em", p = 1.056), l.height = d, l.style.height = makeEm(u), {
		span: l,
		advanceWidth: p,
		ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * o
	};
}, stackLargeDelimiters = new Set([
	"(",
	"\\lparen",
	")",
	"\\rparen",
	"[",
	"\\lbrack",
	"]",
	"\\rbrack",
	"\\{",
	"\\lbrace",
	"\\}",
	"\\rbrace",
	"\\lfloor",
	"\\rfloor",
	"⌊",
	"⌋",
	"\\lceil",
	"\\rceil",
	"⌈",
	"⌉",
	"\\surd"
]), stackAlwaysDelimiters = new Set([
	"\\uparrow",
	"\\downarrow",
	"\\updownarrow",
	"\\Uparrow",
	"\\Downarrow",
	"\\Updownarrow",
	"|",
	"\\|",
	"\\vert",
	"\\Vert",
	"\\lvert",
	"\\rvert",
	"\\lVert",
	"\\rVert",
	"\\lgroup",
	"\\rgroup",
	"⟮",
	"⟯",
	"\\lmoustache",
	"\\rmoustache",
	"⎰",
	"⎱"
]), stackNeverDelimiters = new Set([
	"<",
	">",
	"\\langle",
	"\\rangle",
	"/",
	"\\backslash",
	"\\lt",
	"\\gt"
]), sizeToMaxHeight = [
	0,
	1.2,
	1.8,
	2.4,
	3
], makeSizedDelim = function(e, t, n, o, s) {
	if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), stackLargeDelimiters.has(e) || stackNeverDelimiters.has(e)) return makeLargeDelim(e, t, !1, n, o, s);
	if (stackAlwaysDelimiters.has(e)) return makeStackedDelim(e, sizeToMaxHeight[t], !1, n, o, s);
	throw new ParseError("Illegal delimiter: '" + e + "'");
}, stackNeverDelimiterSequence = [
	{
		type: "small",
		style: Style$1.SCRIPTSCRIPT
	},
	{
		type: "small",
		style: Style$1.SCRIPT
	},
	{
		type: "small",
		style: Style$1.TEXT
	},
	{
		type: "large",
		size: 1
	},
	{
		type: "large",
		size: 2
	},
	{
		type: "large",
		size: 3
	},
	{
		type: "large",
		size: 4
	}
], stackAlwaysDelimiterSequence = [
	{
		type: "small",
		style: Style$1.SCRIPTSCRIPT
	},
	{
		type: "small",
		style: Style$1.SCRIPT
	},
	{
		type: "small",
		style: Style$1.TEXT
	},
	{ type: "stack" }
], stackLargeDelimiterSequence = [
	{
		type: "small",
		style: Style$1.SCRIPTSCRIPT
	},
	{
		type: "small",
		style: Style$1.SCRIPT
	},
	{
		type: "small",
		style: Style$1.TEXT
	},
	{
		type: "large",
		size: 1
	},
	{
		type: "large",
		size: 2
	},
	{
		type: "large",
		size: 3
	},
	{
		type: "large",
		size: 4
	},
	{ type: "stack" }
], delimTypeToFont = function(e) {
	if (e.type === "small") return "Main-Regular";
	if (e.type === "large") return "Size" + e.size + "-Regular";
	if (e.type === "stack") return "Size4-Regular";
	var t = e.type;
	throw Error("Add support for delim type '" + t + "' here.");
}, traverseSequence = function(e, t, n, a) {
	for (var o = Math.min(2, 3 - a.style.size); o < n.length; o++) {
		var s = n[o];
		if (s.type === "stack") break;
		var l = getMetrics(e, delimTypeToFont(s), "math"), u = l.height + l.depth;
		if (s.type === "small") {
			var d = a.havingBaseStyle(s.style);
			u *= d.sizeMultiplier;
		}
		if (u > t) return s;
	}
	return n[n.length - 1];
}, makeCustomSizedDelim = function(e, t, n, a, o, s) {
	e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
	var l = stackNeverDelimiters.has(e) ? stackNeverDelimiterSequence : stackLargeDelimiters.has(e) ? stackLargeDelimiterSequence : stackAlwaysDelimiterSequence, u = traverseSequence(e, t, l, a);
	return u.type === "small" ? makeSmallDelim(e, u.style, n, a, o, s) : u.type === "large" ? makeLargeDelim(e, u.size, n, a, o, s) : makeStackedDelim(e, t, n, a, o, s);
}, makeLeftRightDelim = function(e, t, n, a, o, s) {
	var l = a.fontMetrics().axisHeight * a.sizeMultiplier, u = 901, d = 5 / a.fontMetrics().ptPerEm, f = Math.max(t - l, n + l);
	return makeCustomSizedDelim(e, Math.max(f / 500 * u, 2 * f - d), !0, a, o, s);
}, delimiterSizes = {
	"\\bigl": {
		mclass: "mopen",
		size: 1
	},
	"\\Bigl": {
		mclass: "mopen",
		size: 2
	},
	"\\biggl": {
		mclass: "mopen",
		size: 3
	},
	"\\Biggl": {
		mclass: "mopen",
		size: 4
	},
	"\\bigr": {
		mclass: "mclose",
		size: 1
	},
	"\\Bigr": {
		mclass: "mclose",
		size: 2
	},
	"\\biggr": {
		mclass: "mclose",
		size: 3
	},
	"\\Biggr": {
		mclass: "mclose",
		size: 4
	},
	"\\bigm": {
		mclass: "mrel",
		size: 1
	},
	"\\Bigm": {
		mclass: "mrel",
		size: 2
	},
	"\\biggm": {
		mclass: "mrel",
		size: 3
	},
	"\\Biggm": {
		mclass: "mrel",
		size: 4
	},
	"\\big": {
		mclass: "mord",
		size: 1
	},
	"\\Big": {
		mclass: "mord",
		size: 2
	},
	"\\bigg": {
		mclass: "mord",
		size: 3
	},
	"\\Bigg": {
		mclass: "mord",
		size: 4
	}
}, delimiters = new Set(/* @__PURE__ */ "(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,⌊,⌋,\\lceil,\\rceil,⌈,⌉,<,>,\\langle,⟨,\\rangle,⟩,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,⟮,⟯,\\lmoustache,\\rmoustache,⎰,⎱,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.".split(","));
function checkDelimiter(e, t) {
	var n = checkSymbolNodeType(e);
	if (n && delimiters.has(n.text)) return n;
	throw n ? new ParseError("Invalid delimiter '" + n.text + "' after '" + t.funcName + "'", e) : new ParseError("Invalid delimiter type '" + e.type + "'", e);
}
defineFunction({
	type: "delimsizing",
	names: [
		"\\bigl",
		"\\Bigl",
		"\\biggl",
		"\\Biggl",
		"\\bigr",
		"\\Bigr",
		"\\biggr",
		"\\Biggr",
		"\\bigm",
		"\\Bigm",
		"\\biggm",
		"\\Biggm",
		"\\big",
		"\\Big",
		"\\bigg",
		"\\Bigg"
	],
	props: {
		numArgs: 1,
		argTypes: ["primitive"]
	},
	handler: (e, t) => {
		var n = checkDelimiter(t[0], e);
		return {
			type: "delimsizing",
			mode: e.parser.mode,
			size: delimiterSizes[e.funcName].size,
			mclass: delimiterSizes[e.funcName].mclass,
			delim: n.text
		};
	},
	htmlBuilder: (e, t) => e.delim === "." ? makeSpan([e.mclass]) : makeSizedDelim(e.delim, e.size, t, e.mode, [e.mclass]),
	mathmlBuilder: (e) => {
		var t = [];
		e.delim !== "." && t.push(makeText(e.delim, e.mode));
		var n = new MathNode("mo", t);
		e.mclass === "mopen" || e.mclass === "mclose" ? n.setAttribute("fence", "true") : n.setAttribute("fence", "false"), n.setAttribute("stretchy", "true");
		var a = makeEm(sizeToMaxHeight[e.size]);
		return n.setAttribute("minsize", a), n.setAttribute("maxsize", a), n;
	}
});
function assertParsed(e) {
	if (!e.body) throw Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
defineFunction({
	type: "leftright-right",
	names: ["\\right"],
	props: {
		numArgs: 1,
		primitive: !0
	},
	handler: (e, t) => {
		var n = e.parser.gullet.macros.get("\\current@color");
		if (n && typeof n != "string") throw new ParseError("\\current@color set to non-string in \\right");
		return {
			type: "leftright-right",
			mode: e.parser.mode,
			delim: checkDelimiter(t[0], e).text,
			color: n
		};
	}
}), defineFunction({
	type: "leftright",
	names: ["\\left"],
	props: {
		numArgs: 1,
		primitive: !0
	},
	handler: (e, t) => {
		var n = checkDelimiter(t[0], e), a = e.parser;
		++a.leftrightDepth;
		var o = a.parseExpression(!1);
		--a.leftrightDepth, a.expect("\\right", !1);
		var s = assertNodeType(a.parseFunction(), "leftright-right");
		return {
			type: "leftright",
			mode: a.mode,
			body: o,
			left: n.text,
			right: s.delim,
			rightColor: s.color
		};
	},
	htmlBuilder: (e, t) => {
		assertParsed(e);
		for (var n = buildExpression$1(e.body, t, !0, ["mopen", "mclose"]), a = 0, o = 0, s = !1, l = 0; l < n.length; l++) n[l].isMiddle ? s = !0 : (a = Math.max(n[l].height, a), o = Math.max(n[l].depth, o));
		a *= t.sizeMultiplier, o *= t.sizeMultiplier;
		var u = e.left === "." ? makeNullDelimiter(t, ["mopen"]) : makeLeftRightDelim(e.left, a, o, t, e.mode, ["mopen"]);
		if (n.unshift(u), s) for (var d = 1; d < n.length; d++) {
			var f = n[d].isMiddle;
			f && (n[d] = makeLeftRightDelim(f.delim, a, o, f.options, e.mode, []));
		}
		var p;
		if (e.right === ".") p = makeNullDelimiter(t, ["mclose"]);
		else {
			var m = e.rightColor ? t.withColor(e.rightColor) : t;
			p = makeLeftRightDelim(e.right, a, o, m, e.mode, ["mclose"]);
		}
		return n.push(p), makeSpan(["minner"], n, t);
	},
	mathmlBuilder: (e, t) => {
		assertParsed(e);
		var n = buildExpression(e.body, t);
		if (e.left !== ".") {
			var a = new MathNode("mo", [makeText(e.left, e.mode)]);
			a.setAttribute("fence", "true"), n.unshift(a);
		}
		if (e.right !== ".") {
			var o = new MathNode("mo", [makeText(e.right, e.mode)]);
			o.setAttribute("fence", "true"), e.rightColor && o.setAttribute("mathcolor", e.rightColor), n.push(o);
		}
		return makeRow(n);
	}
}), defineFunction({
	type: "middle",
	names: ["\\middle"],
	props: {
		numArgs: 1,
		primitive: !0
	},
	handler: (e, t) => {
		var n = checkDelimiter(t[0], e);
		if (!e.parser.leftrightDepth) throw new ParseError("\\middle without preceding \\left", n);
		return {
			type: "middle",
			mode: e.parser.mode,
			delim: n.text
		};
	},
	htmlBuilder: (e, t) => {
		var n;
		if (e.delim === ".") n = makeNullDelimiter(t, []);
		else {
			n = makeSizedDelim(e.delim, 1, t, e.mode, []);
			var a = {
				delim: e.delim,
				options: t
			};
			n.isMiddle = a;
		}
		return n;
	},
	mathmlBuilder: (e, t) => {
		var n = new MathNode("mo", [e.delim === "\\vert" || e.delim === "|" ? makeText("|", "text") : makeText(e.delim, e.mode)]);
		return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
	}
});
var htmlBuilder$7 = (e, t) => {
	var n = wrapFragment(buildGroup$1(e.body, t), t), a = e.label.slice(1), o = t.sizeMultiplier, s, l = 0, u = isCharacterBox(e.body);
	if (a === "sout") s = makeSpan(["stretchy", "sout"]), s.height = t.fontMetrics().defaultRuleThickness / o, l = -.5 * t.fontMetrics().xHeight;
	else if (a === "phase") {
		var d = calculateSize({
			number: .6,
			unit: "pt"
		}, t), f = calculateSize({
			number: .35,
			unit: "ex"
		}, t), p = t.havingBaseSizing();
		o /= p.sizeMultiplier;
		var h = n.height + n.depth + d + f;
		n.style.paddingLeft = makeEm(h / 2 + d);
		var g = Math.floor(1e3 * h * o);
		s = makeSvgSpan(["hide-tail"], [new SvgNode([new PathNode("phase", phasePath(g))], {
			width: "400em",
			height: makeEm(g / 1e3),
			viewBox: "0 0 400000 " + g,
			preserveAspectRatio: "xMinYMin slice"
		})], t), s.style.height = makeEm(h), l = n.depth + d + f;
	} else {
		/cancel/.test(a) ? u || n.classes.push("cancel-pad") : a === "angl" ? n.classes.push("anglpad") : n.classes.push("boxpad");
		var _ = 0, v = 0, y = 0;
		/box/.test(a) ? (y = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness), _ = t.fontMetrics().fboxsep + (a === "colorbox" ? 0 : y), v = _) : a === "angl" ? (y = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness), _ = 4 * y, v = Math.max(0, .25 - n.depth)) : (_ = u ? .2 : 0, v = _), s = stretchyEnclose(n, a, _, v, t), /fbox|boxed|fcolorbox/.test(a) ? (s.style.borderStyle = "solid", s.style.borderWidth = makeEm(y)) : a === "angl" && y !== .049 && (s.style.borderTopWidth = makeEm(y), s.style.borderRightWidth = makeEm(y)), l = n.depth + v, e.backgroundColor && (s.style.backgroundColor = e.backgroundColor, e.borderColor && (s.style.borderColor = e.borderColor));
	}
	var b;
	if (e.backgroundColor) b = makeVList({
		positionType: "individualShift",
		children: [{
			type: "elem",
			elem: s,
			shift: l
		}, {
			type: "elem",
			elem: n,
			shift: 0
		}]
	});
	else {
		var x = /cancel|phase/.test(a) ? ["svg-align"] : [];
		b = makeVList({
			positionType: "individualShift",
			children: [{
				type: "elem",
				elem: n,
				shift: 0
			}, {
				type: "elem",
				elem: s,
				shift: l,
				wrapperClasses: x
			}]
		});
	}
	return /cancel/.test(a) && (b.height = n.height, b.depth = n.depth), /cancel/.test(a) && !u ? makeSpan(["mord", "cancel-lap"], [b], t) : makeSpan(["mord"], [b], t);
}, mathmlBuilder$6 = (e, t) => {
	var n = 0, a = new MathNode(e.label.includes("colorbox") ? "mpadded" : "menclose", [buildGroup(e.body, t)]);
	switch (e.label) {
		case "\\cancel":
			a.setAttribute("notation", "updiagonalstrike");
			break;
		case "\\bcancel":
			a.setAttribute("notation", "downdiagonalstrike");
			break;
		case "\\phase":
			a.setAttribute("notation", "phasorangle");
			break;
		case "\\sout":
			a.setAttribute("notation", "horizontalstrike");
			break;
		case "\\fbox":
			a.setAttribute("notation", "box");
			break;
		case "\\angl":
			a.setAttribute("notation", "actuarial");
			break;
		case "\\fcolorbox":
		case "\\colorbox":
			if (n = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm, a.setAttribute("width", "+" + 2 * n + "pt"), a.setAttribute("height", "+" + 2 * n + "pt"), a.setAttribute("lspace", n + "pt"), a.setAttribute("voffset", n + "pt"), e.label === "\\fcolorbox") {
				var o = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
				a.setAttribute("style", "border: " + makeEm(o) + " solid " + e.borderColor);
			}
			break;
		case "\\xcancel":
			a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
			break;
	}
	return e.backgroundColor && a.setAttribute("mathbackground", e.backgroundColor), a;
};
defineFunction({
	type: "enclose",
	names: ["\\colorbox"],
	props: {
		numArgs: 2,
		allowedInText: !0,
		argTypes: ["color", "text"]
	},
	handler(e, t, n) {
		var { parser: a, funcName: o } = e, s = assertNodeType(t[0], "color-token").color, l = t[1];
		return {
			type: "enclose",
			mode: a.mode,
			label: o,
			backgroundColor: s,
			body: l
		};
	},
	htmlBuilder: htmlBuilder$7,
	mathmlBuilder: mathmlBuilder$6
}), defineFunction({
	type: "enclose",
	names: ["\\fcolorbox"],
	props: {
		numArgs: 3,
		allowedInText: !0,
		argTypes: [
			"color",
			"color",
			"text"
		]
	},
	handler(e, t, n) {
		var { parser: a, funcName: o } = e, s = assertNodeType(t[0], "color-token").color, l = assertNodeType(t[1], "color-token").color, u = t[2];
		return {
			type: "enclose",
			mode: a.mode,
			label: o,
			backgroundColor: l,
			borderColor: s,
			body: u
		};
	},
	htmlBuilder: htmlBuilder$7,
	mathmlBuilder: mathmlBuilder$6
}), defineFunction({
	type: "enclose",
	names: ["\\fbox"],
	props: {
		numArgs: 1,
		argTypes: ["hbox"],
		allowedInText: !0
	},
	handler(e, t) {
		var { parser: n } = e;
		return {
			type: "enclose",
			mode: n.mode,
			label: "\\fbox",
			body: t[0]
		};
	}
}), defineFunction({
	type: "enclose",
	names: [
		"\\cancel",
		"\\bcancel",
		"\\xcancel",
		"\\phase"
	],
	props: { numArgs: 1 },
	handler(e, t) {
		var { parser: n, funcName: a } = e, o = t[0];
		return {
			type: "enclose",
			mode: n.mode,
			label: a,
			body: o
		};
	},
	htmlBuilder: htmlBuilder$7,
	mathmlBuilder: mathmlBuilder$6
}), defineFunction({
	type: "enclose",
	names: ["\\sout"],
	props: {
		numArgs: 1,
		allowedInText: !0
	},
	handler(e, t) {
		var { parser: n, funcName: a } = e;
		n.mode === "math" && n.settings.reportNonstrict("mathVsSout", "LaTeX's \\sout works only in text mode");
		var o = t[0];
		return {
			type: "enclose",
			mode: n.mode,
			label: a,
			body: o
		};
	},
	htmlBuilder: htmlBuilder$7,
	mathmlBuilder: mathmlBuilder$6
}), defineFunction({
	type: "enclose",
	names: ["\\angl"],
	props: {
		numArgs: 1,
		argTypes: ["hbox"],
		allowedInText: !1
	},
	handler(e, t) {
		var { parser: n } = e;
		return {
			type: "enclose",
			mode: n.mode,
			label: "\\angl",
			body: t[0]
		};
	}
});
var _environments = {};
function defineEnvironment(e) {
	for (var { type: t, names: n, props: a, handler: o, htmlBuilder: s, mathmlBuilder: l } = e, u = {
		type: t,
		numArgs: a.numArgs || 0,
		allowedInText: !1,
		numOptionalArgs: 0,
		handler: o
	}, d = 0; d < n.length; ++d) _environments[n[d]] = u;
	s && (_htmlGroupBuilders[t] = s), l && (_mathmlGroupBuilders[t] = l);
}
var _macros = {};
function defineMacro(e, t) {
	_macros[e] = t;
}
var SourceLocation = class e {
	constructor(e, t, n) {
		this.lexer = e, this.start = t, this.end = n;
	}
	static range(t, n) {
		return n ? !t || !t.loc || !n.loc || t.loc.lexer !== n.loc.lexer ? null : new e(t.loc.lexer, t.loc.start, n.loc.end) : t && t.loc;
	}
}, Token = class e {
	constructor(e, t) {
		this.text = e, this.loc = t;
	}
	range(t, n) {
		return new e(n, SourceLocation.range(this, t));
	}
};
function getHLines(e) {
	var t = [];
	e.consumeSpaces();
	var n = e.fetch().text;
	for (n === "\\relax" && (e.consume(), e.consumeSpaces(), n = e.fetch().text); n === "\\hline" || n === "\\hdashline";) e.consume(), t.push(n === "\\hdashline"), e.consumeSpaces(), n = e.fetch().text;
	return t;
}
var validateAmsEnvironmentContext = (e) => {
	if (!e.parser.settings.displayMode) throw new ParseError("{" + e.envName + "} can be used only in display mode.");
}, gatherEnvironments = new Set(["gather", "gather*"]);
function getAutoTag(e) {
	if (!e.includes("ed")) return !e.includes("*");
}
function parseArray(e, t, n) {
	var { hskipBeforeAndAfter: o, addJot: s, cols: l, arraystretch: u, colSeparationType: d, autoTag: f, singleRow: p, emptySingleRow: m, maxNumCols: h, leqno: g } = t;
	if (e.gullet.beginGroup(), p || e.gullet.macros.set("\\cr", "\\\\\\relax"), !u) {
		var _ = e.gullet.expandMacroAsText("\\arraystretch");
		if (_ == null) u = 1;
		else if (u = parseFloat(_), !u || u < 0) throw new ParseError("Invalid \\arraystretch: " + _);
	}
	e.gullet.beginGroup();
	var v = [], y = [v], b = [], x = [], C = f == null ? void 0 : [];
	function w() {
		f && e.gullet.macros.set("\\@eqnsw", "1", !0);
	}
	function E() {
		C && (e.gullet.macros.get("\\df@tag") ? (C.push(e.subparse([new Token("\\df@tag")])), e.gullet.macros.set("\\df@tag", void 0, !0)) : C.push(!!f && e.gullet.macros.get("\\@eqnsw") === "1"));
	}
	for (w(), x.push(getHLines(e));;) {
		var O = e.parseExpression(!1, p ? "\\end" : "\\\\");
		e.gullet.endGroup(), e.gullet.beginGroup();
		var k = {
			type: "ordgroup",
			mode: e.mode,
			body: O
		};
		n && (k = {
			type: "styling",
			mode: e.mode,
			style: n,
			body: [k]
		}), v.push(k);
		var A = e.fetch().text;
		if (A === "&") {
			if (h && v.length === h) {
				if (p || d) throw new ParseError("Too many tab characters: &", e.nextToken);
				e.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
			}
			e.consume();
		} else if (A === "\\end") {
			E(), v.length === 1 && k.type === "styling" && k.body.length === 1 && k.body[0].type === "ordgroup" && k.body[0].body.length === 0 && (y.length > 1 || !m) && y.pop(), x.length < y.length + 1 && x.push([]);
			break;
		} else if (A === "\\\\") {
			e.consume();
			var j = void 0;
			e.gullet.future().text !== " " && (j = e.parseSizeGroup(!0)), b.push(j ? j.value : null), E(), x.push(getHLines(e)), v = [], y.push(v), w();
		} else throw new ParseError("Expected & or \\\\ or \\cr or \\end", e.nextToken);
	}
	return e.gullet.endGroup(), e.gullet.endGroup(), {
		type: "array",
		mode: e.mode,
		addJot: s,
		arraystretch: u,
		body: y,
		cols: l,
		rowGaps: b,
		hskipBeforeAndAfter: o,
		hLinesBeforeRow: x,
		colSeparationType: d,
		tags: C,
		leqno: g
	};
}
function dCellStyle(e) {
	return e.slice(0, 1) === "d" ? "display" : "text";
}
var htmlBuilder$6 = function(e, t) {
	var n, o, s = e.body.length, l = e.hLinesBeforeRow, u = 0, d = Array(s), f = [], p = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness), m = 1 / t.fontMetrics().ptPerEm, h = 5 * m;
	e.colSeparationType && e.colSeparationType === "small" && (h = .2778 * (t.havingStyle(Style$1.SCRIPT).sizeMultiplier / t.sizeMultiplier));
	var g = e.colSeparationType === "CD" ? calculateSize({
		number: 3,
		unit: "ex"
	}, t) : 12 * m, _ = 3 * m, v = e.arraystretch * g, y = .7 * v, b = .3 * v, x = 0;
	function C(e) {
		for (var t = 0; t < e.length; ++t) t > 0 && (x += .25), f.push({
			pos: x,
			isDashed: e[t]
		});
	}
	for (C(l[0]), n = 0; n < e.body.length; ++n) {
		var w = e.body[n], E = y, O = b;
		u < w.length && (u = w.length);
		var k = Array(w.length);
		for (o = 0; o < w.length; ++o) {
			var A = buildGroup$1(w[o], t);
			O < A.depth && (O = A.depth), E < A.height && (E = A.height), k[o] = A;
		}
		var j = e.rowGaps[n], M = 0;
		j && (M = calculateSize(j, t), M > 0 && (M += b, O < M && (O = M), M = 0)), e.addJot && n < e.body.length - 1 && (O += _), k.height = E, k.depth = O, x += E, k.pos = x, x += O + M, d[n] = k, C(l[n + 1]);
	}
	var N = x / 2 + t.fontMetrics().axisHeight, P = e.cols || [], F = [], I, L, z = [];
	if (e.tags && e.tags.some((e) => e)) for (n = 0; n < s; ++n) {
		var B = d[n], V = B.pos - N, H = e.tags[n], U = void 0;
		U = H === !0 ? makeSpan(["eqn-num"], [], t) : H === !1 ? makeSpan([], [], t) : makeSpan([], buildExpression$1(H, t, !0), t), U.depth = B.depth, U.height = B.height, z.push({
			type: "elem",
			elem: U,
			shift: V
		});
	}
	for (o = 0, L = 0; o < u || L < P.length; ++o, ++L) {
		for (var W = P[L], G = !0; (Yo = W)?.type === "separator";) {
			var Yo;
			if (G || (I = makeSpan(["arraycolsep"], []), I.style.width = makeEm(t.fontMetrics().doubleRuleSep), F.push(I)), W.separator === "|" || W.separator === ":") {
				var Xo = W.separator === "|" ? "solid" : "dashed", K = makeSpan(["vertical-separator"], [], t);
				K.style.height = makeEm(x), K.style.borderRightWidth = makeEm(p), K.style.borderRightStyle = Xo, K.style.margin = "0 " + makeEm(-p / 2);
				var Zo = x - N;
				Zo && (K.style.verticalAlign = makeEm(-Zo)), F.push(K);
			} else throw new ParseError("Invalid separator type: " + W.separator);
			L++, W = P[L], G = !1;
		}
		if (!(o >= u)) {
			var q = void 0;
			(o > 0 || e.hskipBeforeAndAfter) && (q = W?.pregap ?? h, q !== 0 && (I = makeSpan(["arraycolsep"], []), I.style.width = makeEm(q), F.push(I)));
			var Qo = [];
			for (n = 0; n < s; ++n) {
				var J = d[n], Y = J[o];
				if (Y) {
					var $o = J.pos - N;
					Y.depth = J.depth, Y.height = J.height, Qo.push({
						type: "elem",
						elem: Y,
						shift: $o
					});
				}
			}
			var es = makeVList({
				positionType: "individualShift",
				children: Qo
			}), ts = makeSpan(["col-align-" + (W?.align || "c")], [es]);
			F.push(ts), (o < u - 1 || e.hskipBeforeAndAfter) && (q = W?.postgap ?? h, q !== 0 && (I = makeSpan(["arraycolsep"], []), I.style.width = makeEm(q), F.push(I)));
		}
	}
	var X = makeSpan(["mtable"], F);
	if (f.length > 0) {
		for (var ns = makeLineSpan("hline", t, p), rs = makeLineSpan("hdashline", t, p), os = [{
			type: "elem",
			elem: X,
			shift: 0
		}]; f.length > 0;) {
			var ss = f.pop(), cs = ss.pos - N;
			ss.isDashed ? os.push({
				type: "elem",
				elem: rs,
				shift: cs
			}) : os.push({
				type: "elem",
				elem: ns,
				shift: cs
			});
		}
		X = makeVList({
			positionType: "individualShift",
			children: os
		});
	}
	if (z.length === 0) return makeSpan(["mord"], [X], t);
	var ls = makeSpan(["tag"], [makeVList({
		positionType: "individualShift",
		children: z
	})], t);
	return makeFragment([X, ls]);
}, alignMap = {
	c: "center ",
	l: "left ",
	r: "right "
}, mathmlBuilder$5 = function(e, t) {
	for (var n = [], a = new MathNode("mtd", [], ["mtr-glue"]), o = new MathNode("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
		for (var l = e.body[s], u = [], d = 0; d < l.length; d++) u.push(new MathNode("mtd", [buildGroup(l[d], t)]));
		e.tags && e.tags[s] && (u.unshift(a), u.push(a), e.leqno ? u.unshift(o) : u.push(o)), n.push(new MathNode("mtr", u));
	}
	var f = new MathNode("mtable", n), p = e.arraystretch === .5 ? .1 : .16 + e.arraystretch - 1 + (e.addJot ? .09 : 0);
	f.setAttribute("rowspacing", makeEm(p));
	var m = "", h = "";
	if (e.cols && e.cols.length > 0) {
		var g = e.cols, _ = "", v = !1, y = 0, b = g.length;
		g[0].type === "separator" && (m += "top ", y = 1), g[g.length - 1].type === "separator" && (m += "bottom ", --b);
		for (var x = y; x < b; x++) {
			var C = g[x];
			C.type === "align" ? (h += alignMap[C.align], v && (_ += "none "), v = !0) : C.type === "separator" && (v &&= (_ += C.separator === "|" ? "solid " : "dashed ", !1));
		}
		f.setAttribute("columnalign", h.trim()), /[sd]/.test(_) && f.setAttribute("columnlines", _.trim());
	}
	if (e.colSeparationType === "align") {
		for (var w = e.cols || [], E = "", O = 1; O < w.length; O++) E += O % 2 ? "0em " : "1em ";
		f.setAttribute("columnspacing", E.trim());
	} else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? f.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? f.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? f.setAttribute("columnspacing", "0.5em") : f.setAttribute("columnspacing", "1em");
	var k = "", A = e.hLinesBeforeRow;
	m += A[0].length > 0 ? "left " : "", m += A[A.length - 1].length > 0 ? "right " : "";
	for (var j = 1; j < A.length - 1; j++) k += A[j].length === 0 ? "none " : A[j][0] ? "dashed " : "solid ";
	return /[sd]/.test(k) && f.setAttribute("rowlines", k.trim()), m !== "" && (f = new MathNode("menclose", [f]), f.setAttribute("notation", m.trim())), e.arraystretch && e.arraystretch < 1 && (f = new MathNode("mstyle", [f]), f.setAttribute("scriptlevel", "1")), f;
}, alignedHandler = function(e, t) {
	e.envName.includes("ed") || validateAmsEnvironmentContext(e);
	var n = [], o = e.envName.includes("at") ? "alignat" : "align", s = e.envName === "split", l = parseArray(e.parser, {
		cols: n,
		addJot: !0,
		autoTag: s ? void 0 : getAutoTag(e.envName),
		emptySingleRow: !0,
		colSeparationType: o,
		maxNumCols: s ? 2 : void 0,
		leqno: e.parser.settings.leqno
	}, "display"), u = 0, d = 0, f = {
		type: "ordgroup",
		mode: e.mode,
		body: []
	};
	if (t[0] && t[0].type === "ordgroup") {
		for (var p = "", m = 0; m < t[0].body.length; m++) {
			var h = assertNodeType(t[0].body[m], "textord");
			p += h.text;
		}
		u = Number(p), d = u * 2;
	}
	var g = !d;
	l.body.forEach(function(e) {
		for (var t = 1; t < e.length; t += 2) assertNodeType(assertNodeType(e[t], "styling").body[0], "ordgroup").body.unshift(f);
		if (g) d < e.length && (d = e.length);
		else {
			var n = e.length / 2;
			if (u < n) throw new ParseError("Too many math in a row: " + ("expected " + u + ", but got " + n), e[0]);
		}
	});
	for (var _ = 0; _ < d; ++_) {
		var v = "r", y = 0;
		_ % 2 == 1 ? v = "l" : _ > 0 && g && (y = 1), n[_] = {
			type: "align",
			align: v,
			pregap: y,
			postgap: 0
		};
	}
	return l.colSeparationType = g ? "align" : "alignat", l;
};
defineEnvironment({
	type: "array",
	names: ["array", "darray"],
	props: { numArgs: 1 },
	handler(e, t) {
		var n = (checkSymbolNodeType(t[0]) ? [t[0]] : assertNodeType(t[0], "ordgroup").body).map(function(e) {
			var t = assertSymbolNodeType(e).text;
			if ("lcr".includes(t)) return {
				type: "align",
				align: t
			};
			if (t === "|") return {
				type: "separator",
				separator: "|"
			};
			if (t === ":") return {
				type: "separator",
				separator: ":"
			};
			throw new ParseError("Unknown column alignment: " + t, e);
		}), o = {
			cols: n,
			hskipBeforeAndAfter: !0,
			maxNumCols: n.length
		};
		return parseArray(e.parser, o, dCellStyle(e.envName));
	},
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineEnvironment({
	type: "array",
	names: [
		"matrix",
		"pmatrix",
		"bmatrix",
		"Bmatrix",
		"vmatrix",
		"Vmatrix",
		"matrix*",
		"pmatrix*",
		"bmatrix*",
		"Bmatrix*",
		"vmatrix*",
		"Vmatrix*"
	],
	props: { numArgs: 0 },
	handler(e) {
		var t = {
			matrix: null,
			pmatrix: ["(", ")"],
			bmatrix: ["[", "]"],
			Bmatrix: ["\\{", "\\}"],
			vmatrix: ["|", "|"],
			Vmatrix: ["\\Vert", "\\Vert"]
		}[e.envName.replace("*", "")], n = "c", o = {
			hskipBeforeAndAfter: !1,
			cols: [{
				type: "align",
				align: n
			}]
		};
		if (e.envName.charAt(e.envName.length - 1) === "*") {
			var s = e.parser;
			if (s.consumeSpaces(), s.fetch().text === "[") {
				if (s.consume(), s.consumeSpaces(), n = s.fetch().text, !"lcr".includes(n)) throw new ParseError("Expected l or c or r", s.nextToken);
				s.consume(), s.consumeSpaces(), s.expect("]"), s.consume(), o.cols = [{
					type: "align",
					align: n
				}];
			}
		}
		var l = parseArray(e.parser, o, dCellStyle(e.envName)), u = Math.max(0, ...l.body.map((e) => e.length));
		return l.cols = Array(u).fill({
			type: "align",
			align: n
		}), t ? {
			type: "leftright",
			mode: e.mode,
			body: [l],
			left: t[0],
			right: t[1],
			rightColor: void 0
		} : l;
	},
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineEnvironment({
	type: "array",
	names: ["smallmatrix"],
	props: { numArgs: 0 },
	handler(e) {
		var t = parseArray(e.parser, { arraystretch: .5 }, "script");
		return t.colSeparationType = "small", t;
	},
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineEnvironment({
	type: "array",
	names: ["subarray"],
	props: { numArgs: 1 },
	handler(e, t) {
		var n = (checkSymbolNodeType(t[0]) ? [t[0]] : assertNodeType(t[0], "ordgroup").body).map(function(e) {
			var t = assertSymbolNodeType(e).text;
			if ("lc".includes(t)) return {
				type: "align",
				align: t
			};
			throw new ParseError("Unknown column alignment: " + t, e);
		});
		if (n.length > 1) throw new ParseError("{subarray} can contain only one column");
		var o = {
			cols: n,
			hskipBeforeAndAfter: !1,
			arraystretch: .5
		}, s = parseArray(e.parser, o, "script");
		if (s.body.length > 0 && s.body[0].length > 1) throw new ParseError("{subarray} can contain only one column");
		return s;
	},
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineEnvironment({
	type: "array",
	names: [
		"cases",
		"dcases",
		"rcases",
		"drcases"
	],
	props: { numArgs: 0 },
	handler(e) {
		var t = parseArray(e.parser, {
			arraystretch: 1.2,
			cols: [{
				type: "align",
				align: "l",
				pregap: 0,
				postgap: 1
			}, {
				type: "align",
				align: "l",
				pregap: 0,
				postgap: 0
			}]
		}, dCellStyle(e.envName));
		return {
			type: "leftright",
			mode: e.mode,
			body: [t],
			left: e.envName.includes("r") ? "." : "\\{",
			right: e.envName.includes("r") ? "\\}" : ".",
			rightColor: void 0
		};
	},
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineEnvironment({
	type: "array",
	names: [
		"align",
		"align*",
		"aligned",
		"split"
	],
	props: { numArgs: 0 },
	handler: alignedHandler,
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineEnvironment({
	type: "array",
	names: [
		"gathered",
		"gather",
		"gather*"
	],
	props: { numArgs: 0 },
	handler(e) {
		gatherEnvironments.has(e.envName) && validateAmsEnvironmentContext(e);
		var t = {
			cols: [{
				type: "align",
				align: "c"
			}],
			addJot: !0,
			colSeparationType: "gather",
			autoTag: getAutoTag(e.envName),
			emptySingleRow: !0,
			leqno: e.parser.settings.leqno
		};
		return parseArray(e.parser, t, "display");
	},
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineEnvironment({
	type: "array",
	names: [
		"alignat",
		"alignat*",
		"alignedat"
	],
	props: { numArgs: 1 },
	handler: alignedHandler,
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineEnvironment({
	type: "array",
	names: ["equation", "equation*"],
	props: { numArgs: 0 },
	handler(e) {
		validateAmsEnvironmentContext(e);
		var t = {
			autoTag: getAutoTag(e.envName),
			emptySingleRow: !0,
			singleRow: !0,
			maxNumCols: 1,
			leqno: e.parser.settings.leqno
		};
		return parseArray(e.parser, t, "display");
	},
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineEnvironment({
	type: "array",
	names: ["CD"],
	props: { numArgs: 0 },
	handler(e) {
		return validateAmsEnvironmentContext(e), parseCD(e.parser);
	},
	htmlBuilder: htmlBuilder$6,
	mathmlBuilder: mathmlBuilder$5
}), defineMacro("\\nonumber", "\\gdef\\@eqnsw{0}"), defineMacro("\\notag", "\\nonumber"), defineFunction({
	type: "text",
	names: ["\\hline", "\\hdashline"],
	props: {
		numArgs: 0,
		allowedInText: !0,
		allowedInMath: !0
	},
	handler(e, t) {
		throw new ParseError(e.funcName + " valid only within array environment");
	}
});
var environments = _environments;
defineFunction({
	type: "environment",
	names: ["\\begin", "\\end"],
	props: {
		numArgs: 1,
		argTypes: ["text"]
	},
	handler(e, t) {
		var { parser: n, funcName: o } = e, s = t[0];
		if (s.type !== "ordgroup") throw new ParseError("Invalid environment name", s);
		for (var l = "", u = 0; u < s.body.length; ++u) l += assertNodeType(s.body[u], "textord").text;
		if (o === "\\begin") {
			if (!environments.hasOwnProperty(l)) throw new ParseError("No such environment: " + l, s);
			var d = environments[l], { args: f, optArgs: p } = n.parseArguments("\\begin{" + l + "}", d), m = {
				mode: n.mode,
				envName: l,
				parser: n
			}, h = d.handler(m, f, p);
			n.expect("\\end", !1);
			var g = n.nextToken, _ = assertNodeType(n.parseFunction(), "environment");
			if (_.name !== l) throw new ParseError("Mismatch: \\begin{" + l + "} matched by \\end{" + _.name + "}", g);
			return h;
		}
		return {
			type: "environment",
			mode: n.mode,
			name: l,
			nameGroup: s
		};
	}
});
var htmlBuilder$5 = (e, t) => {
	var n = e.font, a = t.withFont(n);
	return buildGroup$1(e.body, a);
}, mathmlBuilder$4 = (e, t) => {
	var n = e.font, a = t.withFont(n);
	return buildGroup(e.body, a);
}, fontAliases = {
	"\\Bbb": "\\mathbb",
	"\\bold": "\\mathbf",
	"\\frak": "\\mathfrak",
	"\\bm": "\\boldsymbol"
};
defineFunction({
	type: "font",
	names: [
		"\\mathrm",
		"\\mathit",
		"\\mathbf",
		"\\mathnormal",
		"\\mathsfit",
		"\\mathbb",
		"\\mathcal",
		"\\mathfrak",
		"\\mathscr",
		"\\mathsf",
		"\\mathtt",
		"\\Bbb",
		"\\bold",
		"\\frak"
	],
	props: {
		numArgs: 1,
		allowedInArgument: !0
	},
	handler: (e, t) => {
		var { parser: n, funcName: a } = e, o = normalizeArgument(t[0]), s = a;
		return s in fontAliases && (s = fontAliases[s]), {
			type: "font",
			mode: n.mode,
			font: s.slice(1),
			body: o
		};
	},
	htmlBuilder: htmlBuilder$5,
	mathmlBuilder: mathmlBuilder$4
}), defineFunction({
	type: "mclass",
	names: ["\\boldsymbol", "\\bm"],
	props: { numArgs: 1 },
	handler: (e, t) => {
		var { parser: n } = e, a = t[0];
		return {
			type: "mclass",
			mode: n.mode,
			mclass: binrelClass(a),
			body: [{
				type: "font",
				mode: n.mode,
				font: "boldsymbol",
				body: a
			}],
			isCharacterBox: isCharacterBox(a)
		};
	}
}), defineFunction({
	type: "font",
	names: [
		"\\rm",
		"\\sf",
		"\\tt",
		"\\bf",
		"\\it",
		"\\cal"
	],
	props: {
		numArgs: 0,
		allowedInText: !0
	},
	handler: (e, t) => {
		var { parser: n, funcName: a, breakOnTokenText: o } = e, { mode: s } = n, l = n.parseExpression(!0, o);
		return {
			type: "font",
			mode: s,
			font: "math" + a.slice(1),
			body: {
				type: "ordgroup",
				mode: n.mode,
				body: l
			}
		};
	},
	htmlBuilder: htmlBuilder$5,
	mathmlBuilder: mathmlBuilder$4
});
var htmlBuilder$4 = (e, t) => {
	var n = t.style, a = n.fracNum(), o = n.fracDen(), s = t.havingStyle(a), l = buildGroup$1(e.numer, s, t);
	if (e.continued) {
		var u = 8.5 / t.fontMetrics().ptPerEm, d = 3.5 / t.fontMetrics().ptPerEm;
		l.height = l.height < u ? u : l.height, l.depth = l.depth < d ? d : l.depth;
	}
	s = t.havingStyle(o);
	var f = buildGroup$1(e.denom, s, t), p, m, h;
	e.hasBarLine ? (e.barSize ? (m = calculateSize(e.barSize, t), p = makeLineSpan("frac-line", t, m)) : p = makeLineSpan("frac-line", t), m = p.height, h = p.height) : (p = null, m = 0, h = t.fontMetrics().defaultRuleThickness);
	var g, _, v;
	n.size === Style$1.DISPLAY.size ? (g = t.fontMetrics().num1, _ = m > 0 ? 3 * h : 7 * h, v = t.fontMetrics().denom1) : (m > 0 ? (g = t.fontMetrics().num2, _ = h) : (g = t.fontMetrics().num3, _ = 3 * h), v = t.fontMetrics().denom2);
	var y;
	if (p) {
		var b = t.fontMetrics().axisHeight;
		g - l.depth - (b + .5 * m) < _ && (g += _ - (g - l.depth - (b + .5 * m))), b - .5 * m - (f.height - v) < _ && (v += _ - (b - .5 * m - (f.height - v)));
		var x = -(b - .5 * m);
		y = makeVList({
			positionType: "individualShift",
			children: [
				{
					type: "elem",
					elem: f,
					shift: v
				},
				{
					type: "elem",
					elem: p,
					shift: x
				},
				{
					type: "elem",
					elem: l,
					shift: -g
				}
			]
		});
	} else {
		var C = g - l.depth - (f.height - v);
		C < _ && (g += .5 * (_ - C), v += .5 * (_ - C)), y = makeVList({
			positionType: "individualShift",
			children: [{
				type: "elem",
				elem: f,
				shift: v
			}, {
				type: "elem",
				elem: l,
				shift: -g
			}]
		});
	}
	s = t.havingStyle(n), y.height *= s.sizeMultiplier / t.sizeMultiplier, y.depth *= s.sizeMultiplier / t.sizeMultiplier;
	var w = n.size === Style$1.DISPLAY.size ? t.fontMetrics().delim1 : n.size === Style$1.SCRIPTSCRIPT.size ? t.havingStyle(Style$1.SCRIPT).fontMetrics().delim2 : t.fontMetrics().delim2, E = e.leftDelim == null ? makeNullDelimiter(t, ["mopen"]) : makeCustomSizedDelim(e.leftDelim, w, !0, t.havingStyle(n), e.mode, ["mopen"]), O = e.continued ? makeSpan([]) : e.rightDelim == null ? makeNullDelimiter(t, ["mclose"]) : makeCustomSizedDelim(e.rightDelim, w, !0, t.havingStyle(n), e.mode, ["mclose"]);
	return makeSpan(["mord"].concat(s.sizingClasses(t)), [
		E,
		makeSpan(["mfrac"], [y]),
		O
	], t);
}, mathmlBuilder$3 = (e, t) => {
	var n = new MathNode("mfrac", [buildGroup(e.numer, t), buildGroup(e.denom, t)]);
	if (!e.hasBarLine) n.setAttribute("linethickness", "0px");
	else if (e.barSize) {
		var a = calculateSize(e.barSize, t);
		n.setAttribute("linethickness", makeEm(a));
	}
	if (e.leftDelim != null || e.rightDelim != null) {
		var o = [];
		if (e.leftDelim != null) {
			var s = new MathNode("mo", [new TextNode(e.leftDelim.replace("\\", ""))]);
			s.setAttribute("fence", "true"), o.push(s);
		}
		if (o.push(n), e.rightDelim != null) {
			var l = new MathNode("mo", [new TextNode(e.rightDelim.replace("\\", ""))]);
			l.setAttribute("fence", "true"), o.push(l);
		}
		return makeRow(o);
	}
	return n;
}, wrapWithStyle = (e, t) => t ? {
	type: "styling",
	mode: e.mode,
	style: t,
	body: [e]
} : e;
defineFunction({
	type: "genfrac",
	names: [
		"\\cfrac",
		"\\dfrac",
		"\\frac",
		"\\tfrac",
		"\\dbinom",
		"\\binom",
		"\\tbinom",
		"\\\\atopfrac",
		"\\\\bracefrac",
		"\\\\brackfrac"
	],
	props: {
		numArgs: 2,
		allowedInArgument: !0
	},
	handler: (e, t) => {
		var { parser: n, funcName: a } = e, o = t[0], s = t[1], l, u = null, d = null;
		switch (a) {
			case "\\cfrac":
			case "\\dfrac":
			case "\\frac":
			case "\\tfrac":
				l = !0;
				break;
			case "\\\\atopfrac":
				l = !1;
				break;
			case "\\dbinom":
			case "\\binom":
			case "\\tbinom":
				l = !1, u = "(", d = ")";
				break;
			case "\\\\bracefrac":
				l = !1, u = "\\{", d = "\\}";
				break;
			case "\\\\brackfrac":
				l = !1, u = "[", d = "]";
				break;
			default: throw Error("Unrecognized genfrac command");
		}
		var f = a === "\\cfrac", p = null;
		return f || a.startsWith("\\d") ? p = "display" : a.startsWith("\\t") && (p = "text"), wrapWithStyle({
			type: "genfrac",
			mode: n.mode,
			numer: o,
			denom: s,
			continued: f,
			hasBarLine: l,
			leftDelim: u,
			rightDelim: d,
			barSize: null
		}, p);
	},
	htmlBuilder: htmlBuilder$4,
	mathmlBuilder: mathmlBuilder$3
}), defineFunction({
	type: "infix",
	names: [
		"\\over",
		"\\choose",
		"\\atop",
		"\\brace",
		"\\brack"
	],
	props: {
		numArgs: 0,
		infix: !0
	},
	handler(e) {
		var { parser: t, funcName: n, token: a } = e, o;
		switch (n) {
			case "\\over":
				o = "\\frac";
				break;
			case "\\choose":
				o = "\\binom";
				break;
			case "\\atop":
				o = "\\\\atopfrac";
				break;
			case "\\brace":
				o = "\\\\bracefrac";
				break;
			case "\\brack":
				o = "\\\\brackfrac";
				break;
			default: throw Error("Unrecognized infix genfrac command");
		}
		return {
			type: "infix",
			mode: t.mode,
			replaceWith: o,
			token: a
		};
	}
});
var stylArray = [
	"display",
	"text",
	"script",
	"scriptscript"
], delimFromValue = function(e) {
	var t = null;
	return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
defineFunction({
	type: "genfrac",
	names: ["\\genfrac"],
	props: {
		numArgs: 6,
		allowedInArgument: !0,
		argTypes: [
			"math",
			"math",
			"size",
			"text",
			"math",
			"math"
		]
	},
	handler(e, t) {
		var { parser: n } = e, a = t[4], o = t[5], s = normalizeArgument(t[0]), l = s.type === "atom" && s.family === "open" ? delimFromValue(s.text) : null, u = normalizeArgument(t[1]), d = u.type === "atom" && u.family === "close" ? delimFromValue(u.text) : null, f = assertNodeType(t[2], "size"), p, m = null;
		f.isBlank ? p = !0 : (m = f.value, p = m.number > 0);
		var h = null, g = t[3];
		if (g.type === "ordgroup") {
			if (g.body.length > 0) {
				var _ = assertNodeType(g.body[0], "textord");
				h = stylArray[Number(_.text)];
			}
		} else g = assertNodeType(g, "textord"), h = stylArray[Number(g.text)];
		return wrapWithStyle({
			type: "genfrac",
			mode: n.mode,
			numer: a,
			denom: o,
			continued: !1,
			hasBarLine: p,
			barSize: m,
			leftDelim: l,
			rightDelim: d
		}, h);
	}
}), defineFunction({
	type: "infix",
	names: ["\\above"],
	props: {
		numArgs: 1,
		argTypes: ["size"],
		infix: !0
	},
	handler(e, t) {
		var { parser: n, funcName: a, token: o } = e;
		return {
			type: "infix",
			mode: n.mode,
			replaceWith: "\\\\abovefrac",
			size: assertNodeType(t[0], "size").value,
			token: o
		};
	}
}), defineFunction({
	type: "genfrac",
	names: ["\\\\abovefrac"],
	props: {
		numArgs: 3,
		argTypes: [
			"math",
			"size",
			"math"
		]
	},
	handler: (e, t) => {
		var { parser: n, funcName: a } = e, o = t[0], s = assertNodeType(t[1], "infix").size;
		if (!s) throw Error("\\\\abovefrac expected size, but got " + String(s));
		var l = t[2], u = s.number > 0;
		return {
			type: "genfrac",
			mode: n.mode,
			numer: o,
			denom: l,
			continued: !1,
			hasBarLine: u,
			barSize: s,
			leftDelim: null,
			rightDelim: null
		};
	}
});
var htmlBuilder$3 = (e, t) => {
	var n = t.style, a, o;
	e.type === "supsub" ? (a = e.sup ? buildGroup$1(e.sup, t.havingStyle(n.sup()), t) : buildGroup$1(e.sub, t.havingStyle(n.sub()), t), o = assertNodeType(e.base, "horizBrace")) : o = assertNodeType(e, "horizBrace");
	var s = buildGroup$1(o.base, t.havingBaseStyle(Style$1.DISPLAY)), l = stretchySvg(o, t), u;
	if (o.isOver ? (u = makeVList({
		positionType: "firstBaseline",
		children: [
			{
				type: "elem",
				elem: s
			},
			{
				type: "kern",
				size: .1
			},
			{
				type: "elem",
				elem: l
			}
		]
	}), u.children[0].children[0].children[1].classes.push("svg-align")) : (u = makeVList({
		positionType: "bottom",
		positionData: s.depth + .1 + l.height,
		children: [
			{
				type: "elem",
				elem: l
			},
			{
				type: "kern",
				size: .1
			},
			{
				type: "elem",
				elem: s
			}
		]
	}), u.children[0].children[0].children[0].classes.push("svg-align")), a) {
		var d = makeSpan(["minner", o.isOver ? "mover" : "munder"], [u], t);
		u = o.isOver ? makeVList({
			positionType: "firstBaseline",
			children: [
				{
					type: "elem",
					elem: d
				},
				{
					type: "kern",
					size: .2
				},
				{
					type: "elem",
					elem: a
				}
			]
		}) : makeVList({
			positionType: "bottom",
			positionData: d.depth + .2 + a.height + a.depth,
			children: [
				{
					type: "elem",
					elem: a
				},
				{
					type: "kern",
					size: .2
				},
				{
					type: "elem",
					elem: d
				}
			]
		});
	}
	return makeSpan(["minner", o.isOver ? "mover" : "munder"], [u], t);
};
defineFunction({
	type: "horizBrace",
	names: [
		"\\overbrace",
		"\\underbrace",
		"\\overbracket",
		"\\underbracket"
	],
	props: { numArgs: 1 },
	handler(e, t) {
		var { parser: n, funcName: a } = e;
		return {
			type: "horizBrace",
			mode: n.mode,
			label: a,
			isOver: a.includes("\\over"),
			base: t[0]
		};
	},
	htmlBuilder: htmlBuilder$3,
	mathmlBuilder: (e, t) => {
		var n = stretchyMathML(e.label);
		return new MathNode(e.isOver ? "mover" : "munder", [buildGroup(e.base, t), n]);
	}
}), defineFunction({
	type: "href",
	names: ["\\href"],
	props: {
		numArgs: 2,
		argTypes: ["url", "original"],
		allowedInText: !0
	},
	handler: (e, t) => {
		var { parser: n } = e, a = t[1], o = assertNodeType(t[0], "url").url;
		return n.settings.isTrusted({
			command: "\\href",
			url: o
		}) ? {
			type: "href",
			mode: n.mode,
			href: o,
			body: ordargument(a)
		} : n.formatUnsupportedCmd("\\href");
	},
	htmlBuilder: (e, t) => {
		var n = buildExpression$1(e.body, t, !1);
		return makeAnchor(e.href, [], n, t);
	},
	mathmlBuilder: (e, t) => {
		var n = buildExpressionRow(e.body, t);
		return n instanceof MathNode || (n = new MathNode("mrow", [n])), n.setAttribute("href", e.href), n;
	}
}), defineFunction({
	type: "href",
	names: ["\\url"],
	props: {
		numArgs: 1,
		argTypes: ["url"],
		allowedInText: !0
	},
	handler: (e, t) => {
		var { parser: n } = e, a = assertNodeType(t[0], "url").url;
		if (!n.settings.isTrusted({
			command: "\\url",
			url: a
		})) return n.formatUnsupportedCmd("\\url");
		for (var o = [], s = 0; s < a.length; s++) {
			var l = a[s];
			l === "~" && (l = "\\textasciitilde"), o.push({
				type: "textord",
				mode: "text",
				text: l
			});
		}
		var u = {
			type: "text",
			mode: n.mode,
			font: "\\texttt",
			body: o
		};
		return {
			type: "href",
			mode: n.mode,
			href: a,
			body: ordargument(u)
		};
	}
}), defineFunction({
	type: "hbox",
	names: ["\\hbox"],
	props: {
		numArgs: 1,
		argTypes: ["text"],
		allowedInText: !0,
		primitive: !0
	},
	handler(e, t) {
		var { parser: n } = e;
		return {
			type: "hbox",
			mode: n.mode,
			body: ordargument(t[0])
		};
	},
	htmlBuilder(e, t) {
		return makeFragment(buildExpression$1(e.body, t, !1));
	},
	mathmlBuilder(e, t) {
		return new MathNode("mrow", buildExpression(e.body, t));
	}
}), defineFunction({
	type: "html",
	names: [
		"\\htmlClass",
		"\\htmlId",
		"\\htmlStyle",
		"\\htmlData"
	],
	props: {
		numArgs: 2,
		argTypes: ["raw", "original"],
		allowedInText: !0
	},
	handler: (e, t) => {
		var { parser: n, funcName: o, token: s } = e, l = assertNodeType(t[0], "raw").string, u = t[1];
		n.settings.strict && n.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
		var d, f = {};
		switch (o) {
			case "\\htmlClass":
				f.class = l, d = {
					command: "\\htmlClass",
					class: l
				};
				break;
			case "\\htmlId":
				f.id = l, d = {
					command: "\\htmlId",
					id: l
				};
				break;
			case "\\htmlStyle":
				f.style = l, d = {
					command: "\\htmlStyle",
					style: l
				};
				break;
			case "\\htmlData":
				for (var p = l.split(","), m = 0; m < p.length; m++) {
					var h = p[m], g = h.indexOf("=");
					if (g < 0) throw new ParseError("\\htmlData key/value '" + h + "' missing equals sign");
					var _ = h.slice(0, g), v = h.slice(g + 1);
					f["data-" + _.trim()] = v;
				}
				d = {
					command: "\\htmlData",
					attributes: f
				};
				break;
			default: throw Error("Unrecognized html command");
		}
		return n.settings.isTrusted(d) ? {
			type: "html",
			mode: n.mode,
			attributes: f,
			body: ordargument(u)
		} : n.formatUnsupportedCmd(o);
	},
	htmlBuilder: (e, t) => {
		var n = buildExpression$1(e.body, t, !1), a = ["enclosing"];
		e.attributes.class && a.push(...e.attributes.class.trim().split(/\s+/));
		var o = makeSpan(a, n, t);
		for (var s in e.attributes) s !== "class" && e.attributes.hasOwnProperty(s) && o.setAttribute(s, e.attributes[s]);
		return o;
	},
	mathmlBuilder: (e, t) => buildExpressionRow(e.body, t)
}), defineFunction({
	type: "htmlmathml",
	names: ["\\html@mathml"],
	props: {
		numArgs: 2,
		allowedInArgument: !0,
		allowedInText: !0
	},
	handler: (e, t) => {
		var { parser: n } = e;
		return {
			type: "htmlmathml",
			mode: n.mode,
			html: ordargument(t[0]),
			mathml: ordargument(t[1])
		};
	},
	htmlBuilder: (e, t) => makeFragment(buildExpression$1(e.html, t, !1)),
	mathmlBuilder: (e, t) => buildExpressionRow(e.mathml, t)
});
var sizeData = function(e) {
	if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return {
		number: +e,
		unit: "bp"
	};
	var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
	if (!t) throw new ParseError("Invalid size: '" + e + "' in \\includegraphics");
	var n = {
		number: +(t[1] + t[2]),
		unit: t[3]
	};
	if (!validUnit(n)) throw new ParseError("Invalid unit: '" + n.unit + "' in \\includegraphics.");
	return n;
};
defineFunction({
	type: "includegraphics",
	names: ["\\includegraphics"],
	props: {
		numArgs: 1,
		numOptionalArgs: 1,
		argTypes: ["raw", "url"],
		allowedInText: !1
	},
	handler: (e, t, n) => {
		var { parser: o } = e, s = {
			number: 0,
			unit: "em"
		}, l = {
			number: .9,
			unit: "em"
		}, u = {
			number: 0,
			unit: "em"
		}, d = "";
		if (n[0]) for (var f = assertNodeType(n[0], "raw").string.split(","), p = 0; p < f.length; p++) {
			var m = f[p].split("=");
			if (m.length === 2) {
				var h = m[1].trim();
				switch (m[0].trim()) {
					case "alt":
						d = h;
						break;
					case "width":
						s = sizeData(h);
						break;
					case "height":
						l = sizeData(h);
						break;
					case "totalheight":
						u = sizeData(h);
						break;
					default: throw new ParseError("Invalid key: '" + m[0] + "' in \\includegraphics.");
				}
			}
		}
		var g = assertNodeType(t[0], "url").url;
		return d === "" && (d = g, d = d.replace(/^.*[\\/]/, ""), d = d.substring(0, d.lastIndexOf("."))), o.settings.isTrusted({
			command: "\\includegraphics",
			url: g
		}) ? {
			type: "includegraphics",
			mode: o.mode,
			alt: d,
			width: s,
			height: l,
			totalheight: u,
			src: g
		} : o.formatUnsupportedCmd("\\includegraphics");
	},
	htmlBuilder: (e, t) => {
		var n = calculateSize(e.height, t), a = 0;
		e.totalheight.number > 0 && (a = calculateSize(e.totalheight, t) - n);
		var o = 0;
		e.width.number > 0 && (o = calculateSize(e.width, t));
		var s = { height: makeEm(n + a) };
		o > 0 && (s.width = makeEm(o)), a > 0 && (s.verticalAlign = makeEm(-a));
		var l = new Img(e.src, e.alt, s);
		return l.height = n, l.depth = a, l;
	},
	mathmlBuilder: (e, t) => {
		var n = new MathNode("mglyph", []);
		n.setAttribute("alt", e.alt);
		var a = calculateSize(e.height, t), o = 0;
		if (e.totalheight.number > 0 && (o = calculateSize(e.totalheight, t) - a, n.setAttribute("valign", makeEm(-o))), n.setAttribute("height", makeEm(a + o)), e.width.number > 0) {
			var s = calculateSize(e.width, t);
			n.setAttribute("width", makeEm(s));
		}
		return n.setAttribute("src", e.src), n;
	}
}), defineFunction({
	type: "kern",
	names: [
		"\\kern",
		"\\mkern",
		"\\hskip",
		"\\mskip"
	],
	props: {
		numArgs: 1,
		argTypes: ["size"],
		primitive: !0,
		allowedInText: !0
	},
	handler(e, t) {
		var { parser: n, funcName: a } = e, o = assertNodeType(t[0], "size");
		if (n.settings.strict) {
			var s = a[1] === "m", l = o.value.unit === "mu";
			s ? (l || n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " supports only mu units, " + ("not " + o.value.unit + " units")), n.mode !== "math" && n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " works only in math mode")) : l && n.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " doesn't support mu units");
		}
		return {
			type: "kern",
			mode: n.mode,
			dimension: o.value
		};
	},
	htmlBuilder(e, t) {
		return makeGlue(e.dimension, t);
	},
	mathmlBuilder(e, t) {
		return new SpaceNode(calculateSize(e.dimension, t));
	}
}), defineFunction({
	type: "lap",
	names: [
		"\\mathllap",
		"\\mathrlap",
		"\\mathclap"
	],
	props: {
		numArgs: 1,
		allowedInText: !0
	},
	handler: (e, t) => {
		var { parser: n, funcName: a } = e, o = t[0];
		return {
			type: "lap",
			mode: n.mode,
			alignment: a.slice(5),
			body: o
		};
	},
	htmlBuilder: (e, t) => {
		var n;
		e.alignment === "clap" ? (n = makeSpan([], [buildGroup$1(e.body, t)]), n = makeSpan(["inner"], [n], t)) : n = makeSpan(["inner"], [buildGroup$1(e.body, t)]);
		var a = makeSpan(["fix"], []), o = makeSpan([e.alignment], [n, a], t), s = makeSpan(["strut"]);
		return s.style.height = makeEm(o.height + o.depth), o.depth && (s.style.verticalAlign = makeEm(-o.depth)), o.children.unshift(s), o = makeSpan(["thinbox"], [o], t), makeSpan(["mord", "vbox"], [o], t);
	},
	mathmlBuilder: (e, t) => {
		var n = new MathNode("mpadded", [buildGroup(e.body, t)]);
		if (e.alignment !== "rlap") {
			var a = e.alignment === "llap" ? "-1" : "-0.5";
			n.setAttribute("lspace", a + "width");
		}
		return n.setAttribute("width", "0px"), n;
	}
}), defineFunction({
	type: "styling",
	names: ["\\(", "$"],
	props: {
		numArgs: 0,
		allowedInText: !0,
		allowedInMath: !1
	},
	handler(e, t) {
		var { funcName: n, parser: a } = e, o = a.mode;
		a.switchMode("math");
		var s = n === "\\(" ? "\\)" : "$", l = a.parseExpression(!1, s);
		return a.expect(s), a.switchMode(o), {
			type: "styling",
			mode: a.mode,
			style: "text",
			body: l
		};
	}
}), defineFunction({
	type: "text",
	names: ["\\)", "\\]"],
	props: {
		numArgs: 0,
		allowedInText: !0,
		allowedInMath: !1
	},
	handler(e, t) {
		throw new ParseError("Mismatched " + e.funcName);
	}
});
var chooseMathStyle = (e, t) => {
	switch (t.style.size) {
		case Style$1.DISPLAY.size: return e.display;
		case Style$1.TEXT.size: return e.text;
		case Style$1.SCRIPT.size: return e.script;
		case Style$1.SCRIPTSCRIPT.size: return e.scriptscript;
		default: return e.text;
	}
};
defineFunction({
	type: "mathchoice",
	names: ["\\mathchoice"],
	props: {
		numArgs: 4,
		primitive: !0
	},
	handler: (e, t) => {
		var { parser: n } = e;
		return {
			type: "mathchoice",
			mode: n.mode,
			display: ordargument(t[0]),
			text: ordargument(t[1]),
			script: ordargument(t[2]),
			scriptscript: ordargument(t[3])
		};
	},
	htmlBuilder: (e, t) => makeFragment(buildExpression$1(chooseMathStyle(e, t), t, !1)),
	mathmlBuilder: (e, t) => buildExpressionRow(chooseMathStyle(e, t), t)
});
var assembleSupSub = (e, t, n, a, o, s, l) => {
	e = makeSpan([], [e]);
	var u = n && isCharacterBox(n), d, f;
	if (t) {
		var p = buildGroup$1(t, a.havingStyle(o.sup()), a);
		f = {
			elem: p,
			kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - p.depth)
		};
	}
	if (n) {
		var h = buildGroup$1(n, a.havingStyle(o.sub()), a);
		d = {
			elem: h,
			kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - h.height)
		};
	}
	var g;
	if (f && d) g = makeVList({
		positionType: "bottom",
		positionData: a.fontMetrics().bigOpSpacing5 + d.elem.height + d.elem.depth + d.kern + e.depth + l,
		children: [
			{
				type: "kern",
				size: a.fontMetrics().bigOpSpacing5
			},
			{
				type: "elem",
				elem: d.elem,
				marginLeft: makeEm(-s)
			},
			{
				type: "kern",
				size: d.kern
			},
			{
				type: "elem",
				elem: e
			},
			{
				type: "kern",
				size: f.kern
			},
			{
				type: "elem",
				elem: f.elem,
				marginLeft: makeEm(s)
			},
			{
				type: "kern",
				size: a.fontMetrics().bigOpSpacing5
			}
		]
	});
	else if (d) g = makeVList({
		positionType: "top",
		positionData: e.height - l,
		children: [
			{
				type: "kern",
				size: a.fontMetrics().bigOpSpacing5
			},
			{
				type: "elem",
				elem: d.elem,
				marginLeft: makeEm(-s)
			},
			{
				type: "kern",
				size: d.kern
			},
			{
				type: "elem",
				elem: e
			}
		]
	});
	else if (f) g = makeVList({
		positionType: "bottom",
		positionData: e.depth + l,
		children: [
			{
				type: "elem",
				elem: e
			},
			{
				type: "kern",
				size: f.kern
			},
			{
				type: "elem",
				elem: f.elem,
				marginLeft: makeEm(s)
			},
			{
				type: "kern",
				size: a.fontMetrics().bigOpSpacing5
			}
		]
	});
	else return e;
	var _ = [g];
	if (d && s !== 0 && !u) {
		var v = makeSpan(["mspace"], [], a);
		v.style.marginRight = makeEm(s), _.unshift(v);
	}
	return makeSpan(["mop", "op-limits"], _, a);
}, noSuccessor = new Set(["\\smallint"]), htmlBuilder$2 = (e, t) => {
	var n, a, o = !1, s;
	e.type === "supsub" ? (n = e.sup, a = e.sub, s = assertNodeType(e.base, "op"), o = !0) : s = assertNodeType(e, "op");
	var l = t.style, u = !1;
	l.size === Style$1.DISPLAY.size && s.symbol && !noSuccessor.has(s.name) && (u = !0);
	var d;
	if (s.symbol) {
		var f = u ? "Size2-Regular" : "Size1-Regular", p = "";
		if ((s.name === "\\oiint" || s.name === "\\oiiint") && (p = s.name.slice(1), s.name = p === "oiint" ? "\\iint" : "\\iiint"), d = makeSymbol(s.name, f, "math", t, [
			"mop",
			"op-symbol",
			u ? "large-op" : "small-op"
		]), p.length > 0) {
			var m = d.italic, h = staticSvg(p + "Size" + (u ? "2" : "1"), t);
			d = makeVList({
				positionType: "individualShift",
				children: [{
					type: "elem",
					elem: d,
					shift: 0
				}, {
					type: "elem",
					elem: h,
					shift: u ? .08 : 0
				}]
			}), s.name = "\\" + p, d.classes.unshift("mop"), d.italic = m;
		}
	} else if (s.body) {
		var g = buildExpression$1(s.body, t, !0);
		g.length === 1 && g[0] instanceof SymbolNode ? (d = g[0], d.classes[0] = "mop") : d = makeSpan(["mop"], g, t);
	} else {
		for (var _ = [], v = 1; v < s.name.length; v++) _.push(mathsym(s.name[v], s.mode, t));
		d = makeSpan(["mop"], _, t);
	}
	var y = 0, b = 0;
	return (d instanceof SymbolNode || s.name === "\\oiint" || s.name === "\\oiiint") && !s.suppressBaseShift && (y = (d.height - d.depth) / 2 - t.fontMetrics().axisHeight, b = d.italic || 0), o ? assembleSupSub(d, n, a, t, l, b, y) : (y && (d.style.position = "relative", d.style.top = makeEm(y)), d);
}, mathmlBuilder$1 = (e, t) => {
	var n;
	if (e.symbol) n = new MathNode("mo", [makeText(e.name, e.mode)]), noSuccessor.has(e.name) && n.setAttribute("largeop", "false");
	else if (e.body) n = new MathNode("mo", buildExpression(e.body, t));
	else {
		n = new MathNode("mi", [new TextNode(e.name.slice(1))]);
		var a = new MathNode("mo", [makeText("⁡", "text")]);
		n = e.parentIsSupSub ? new MathNode("mrow", [n, a]) : newDocumentFragment([n, a]);
	}
	return n;
}, singleCharBigOps = {
	"∏": "\\prod",
	"∐": "\\coprod",
	"∑": "\\sum",
	"⋀": "\\bigwedge",
	"⋁": "\\bigvee",
	"⋂": "\\bigcap",
	"⋃": "\\bigcup",
	"⨀": "\\bigodot",
	"⨁": "\\bigoplus",
	"⨂": "\\bigotimes",
	"⨄": "\\biguplus",
	"⨆": "\\bigsqcup"
};
defineFunction({
	type: "op",
	names: /* @__PURE__ */ "\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.∏.∐.∑.⋀.⋁.⋂.⋃.⨀.⨁.⨂.⨄.⨆".split("."),
	props: { numArgs: 0 },
	handler: (e, t) => {
		var { parser: n, funcName: a } = e, o = a;
		return o.length === 1 && (o = singleCharBigOps[o]), {
			type: "op",
			mode: n.mode,
			limits: !0,
			parentIsSupSub: !1,
			symbol: !0,
			name: o
		};
	},
	htmlBuilder: htmlBuilder$2,
	mathmlBuilder: mathmlBuilder$1
}), defineFunction({
	type: "op",
	names: ["\\mathop"],
	props: {
		numArgs: 1,
		primitive: !0
	},
	handler: (e, t) => {
		var { parser: n } = e, a = t[0];
		return {
			type: "op",
			mode: n.mode,
			limits: !1,
			parentIsSupSub: !1,
			symbol: !1,
			body: ordargument(a)
		};
	},
	htmlBuilder: htmlBuilder$2,
	mathmlBuilder: mathmlBuilder$1
});
var singleCharIntegrals = {
	"∫": "\\int",
	"∬": "\\iint",
	"∭": "\\iiint",
	"∮": "\\oint",
	"∯": "\\oiint",
	"∰": "\\oiiint"
};
defineFunction({
	type: "op",
	names: /* @__PURE__ */ "\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th".split("."),
	props: { numArgs: 0 },
	handler(e) {
		var { parser: t, funcName: n } = e;
		return {
			type: "op",
			mode: t.mode,
			limits: !1,
			parentIsSupSub: !1,
			symbol: !1,
			name: n
		};
	},
	htmlBuilder: htmlBuilder$2,
	mathmlBuilder: mathmlBuilder$1
}), defineFunction({
	type: "op",
	names: [
		"\\det",
		"\\gcd",
		"\\inf",
		"\\lim",
		"\\max",
		"\\min",
		"\\Pr",
		"\\sup"
	],
	props: { numArgs: 0 },
	handler(e) {
		var { parser: t, funcName: n } = e;
		return {
			type: "op",
			mode: t.mode,
			limits: !0,
			parentIsSupSub: !1,
			symbol: !1,
			name: n
		};
	},
	htmlBuilder: htmlBuilder$2,
	mathmlBuilder: mathmlBuilder$1
}), defineFunction({
	type: "op",
	names: [
		"\\int",
		"\\iint",
		"\\iiint",
		"\\oint",
		"\\oiint",
		"\\oiiint",
		"∫",
		"∬",
		"∭",
		"∮",
		"∯",
		"∰"
	],
	props: {
		numArgs: 0,
		allowedInArgument: !0
	},
	handler(e) {
		var { parser: t, funcName: n } = e, a = n;
		return a.length === 1 && (a = singleCharIntegrals[a]), {
			type: "op",
			mode: t.mode,
			limits: !1,
			parentIsSupSub: !1,
			symbol: !0,
			name: a
		};
	},
	htmlBuilder: htmlBuilder$2,
	mathmlBuilder: mathmlBuilder$1
});
var htmlBuilder$1 = (e, t) => {
	var n, a, o = !1, s;
	e.type === "supsub" ? (n = e.sup, a = e.sub, s = assertNodeType(e.base, "operatorname"), o = !0) : s = assertNodeType(e, "operatorname");
	var l;
	if (s.body.length > 0) {
		for (var u = buildExpression$1(s.body.map((e) => {
			var t = "text" in e ? e.text : void 0;
			return typeof t == "string" ? {
				type: "textord",
				mode: e.mode,
				text: t
			} : e;
		}), t.withFont("mathrm"), !0), d = 0; d < u.length; d++) {
			var f = u[d];
			f instanceof SymbolNode && (f.text = f.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
		}
		l = makeSpan(["mop"], u, t);
	} else l = makeSpan(["mop"], [], t);
	return o ? assembleSupSub(l, n, a, t, t.style, 0, 0) : l;
};
defineFunction({
	type: "operatorname",
	names: ["\\operatorname@", "\\operatornamewithlimits"],
	props: { numArgs: 1 },
	handler: (e, t) => {
		var { parser: n, funcName: a } = e, o = t[0];
		return {
			type: "operatorname",
			mode: n.mode,
			body: ordargument(o),
			alwaysHandleSupSub: a === "\\operatornamewithlimits",
			limits: !1,
			parentIsSupSub: !1
		};
	},
	htmlBuilder: htmlBuilder$1,
	mathmlBuilder: (e, t) => {
		for (var n = buildExpression(e.body, t.withFont("mathrm")), a = !0, o = 0; o < n.length; o++) {
			var s = n[o];
			if (!(s instanceof SpaceNode)) if (s instanceof MathNode) switch (s.type) {
				case "mi":
				case "mn":
				case "mspace":
				case "mtext": break;
				case "mo":
					var l = s.children[0];
					s.children.length === 1 && l instanceof TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : a = !1;
					break;
				default: a = !1;
			}
			else a = !1;
		}
		a && (n = [new TextNode(n.map((e) => e.toText()).join(""))]);
		var u = new MathNode("mi", n);
		u.setAttribute("mathvariant", "normal");
		var d = new MathNode("mo", [makeText("⁡", "text")]);
		return e.parentIsSupSub ? new MathNode("mrow", [u, d]) : newDocumentFragment([u, d]);
	}
}), defineMacro("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), defineFunctionBuilders({
	type: "ordgroup",
	htmlBuilder(e, t) {
		return e.semisimple ? makeFragment(buildExpression$1(e.body, t, !1)) : makeSpan(["mord"], buildExpression$1(e.body, t, !0), t);
	},
	mathmlBuilder(e, t) {
		return buildExpressionRow(e.body, t, !0);
	}
}), defineFunction({
	type: "overline",
	names: ["\\overline"],
	props: { numArgs: 1 },
	handler(e, t) {
		var { parser: n } = e, a = t[0];
		return {
			type: "overline",
			mode: n.mode,
			body: a
		};
	},
	htmlBuilder(e, t) {
		var n = buildGroup$1(e.body, t.havingCrampedStyle()), a = makeLineSpan("overline-line", t), o = t.fontMetrics().defaultRuleThickness;
		return makeSpan(["mord", "overline"], [makeVList({
			positionType: "firstBaseline",
			children: [
				{
					type: "elem",
					elem: n
				},
				{
					type: "kern",
					size: 3 * o
				},
				{
					type: "elem",
					elem: a
				},
				{
					type: "kern",
					size: o
				}
			]
		})], t);
	},
	mathmlBuilder(e, t) {
		var n = new MathNode("mo", [new TextNode("‾")]);
		n.setAttribute("stretchy", "true");
		var a = new MathNode("mover", [buildGroup(e.body, t), n]);
		return a.setAttribute("accent", "true"), a;
	}
}), defineFunction({
	type: "phantom",
	names: ["\\phantom"],
	props: {
		numArgs: 1,
		allowedInText: !0
	},
	handler: (e, t) => {
		var { parser: n } = e, a = t[0];
		return {
			type: "phantom",
			mode: n.mode,
			body: ordargument(a)
		};
	},
	htmlBuilder: (e, t) => makeFragment(buildExpression$1(e.body, t.withPhantom(), !1)),
	mathmlBuilder: (e, t) => new MathNode("mphantom", buildExpression(e.body, t))
}), defineMacro("\\hphantom", "\\smash{\\phantom{#1}}"), defineFunction({
	type: "vphantom",
	names: ["\\vphantom"],
	props: {
		numArgs: 1,
		allowedInText: !0
	},
	handler: (e, t) => {
		var { parser: n } = e, a = t[0];
		return {
			type: "vphantom",
			mode: n.mode,
			body: a
		};
	},
	htmlBuilder: (e, t) => makeSpan(["mord", "rlap"], [makeSpan(["inner"], [buildGroup$1(e.body, t.withPhantom())]), makeSpan(["fix"], [])], t),
	mathmlBuilder: (e, t) => {
		var n = new MathNode("mpadded", [new MathNode("mphantom", buildExpression(ordargument(e.body), t))]);
		return n.setAttribute("width", "0px"), n;
	}
}), defineFunction({
	type: "raisebox",
	names: ["\\raisebox"],
	props: {
		numArgs: 2,
		argTypes: ["size", "hbox"],
		allowedInText: !0
	},
	handler(e, t) {
		var { parser: n } = e, a = assertNodeType(t[0], "size").value, o = t[1];
		return {
			type: "raisebox",
			mode: n.mode,
			dy: a,
			body: o
		};
	},
	htmlBuilder(e, t) {
		var n = buildGroup$1(e.body, t);
		return makeVList({
			positionType: "shift",
			positionData: -calculateSize(e.dy, t),
			children: [{
				type: "elem",
				elem: n
			}]
		});
	},
	mathmlBuilder(e, t) {
		var n = new MathNode("mpadded", [buildGroup(e.body, t)]), a = e.dy.number + e.dy.unit;
		return n.setAttribute("voffset", a), n;
	}
}), defineFunction({
	type: "internal",
	names: ["\\relax"],
	props: {
		numArgs: 0,
		allowedInText: !0,
		allowedInArgument: !0
	},
	handler(e) {
		var { parser: t } = e;
		return {
			type: "internal",
			mode: t.mode
		};
	}
}), defineFunction({
	type: "rule",
	names: ["\\rule"],
	props: {
		numArgs: 2,
		numOptionalArgs: 1,
		allowedInText: !0,
		allowedInMath: !0,
		argTypes: [
			"size",
			"size",
			"size"
		]
	},
	handler(e, t, n) {
		var { parser: a } = e, o = n[0], s = assertNodeType(t[0], "size"), l = assertNodeType(t[1], "size");
		return {
			type: "rule",
			mode: a.mode,
			shift: o && assertNodeType(o, "size").value,
			width: s.value,
			height: l.value
		};
	},
	htmlBuilder(e, t) {
		var n = makeSpan(["mord", "rule"], [], t), a = calculateSize(e.width, t), o = calculateSize(e.height, t), s = e.shift ? calculateSize(e.shift, t) : 0;
		return n.style.borderRightWidth = makeEm(a), n.style.borderTopWidth = makeEm(o), n.style.bottom = makeEm(s), n.width = a, n.height = o + s, n.depth = -s, n.maxFontSize = o * 1.125 * t.sizeMultiplier, n;
	},
	mathmlBuilder(e, t) {
		var n = calculateSize(e.width, t), a = calculateSize(e.height, t), o = e.shift ? calculateSize(e.shift, t) : 0, s = t.color && t.getColor() || "black", l = new MathNode("mspace");
		l.setAttribute("mathbackground", s), l.setAttribute("width", makeEm(n)), l.setAttribute("height", makeEm(a));
		var u = new MathNode("mpadded", [l]);
		return o >= 0 ? u.setAttribute("height", makeEm(o)) : (u.setAttribute("height", makeEm(o)), u.setAttribute("depth", makeEm(-o))), u.setAttribute("voffset", makeEm(o)), u;
	}
});
function sizingGroup(e, t, n) {
	for (var a = buildExpression$1(e, t, !1), o = t.sizeMultiplier / n.sizeMultiplier, s = 0; s < a.length; s++) {
		var l = a[s].classes.indexOf("sizing");
		l < 0 ? Array.prototype.push.apply(a[s].classes, t.sizingClasses(n)) : a[s].classes[l + 1] === "reset-size" + t.size && (a[s].classes[l + 1] = "reset-size" + n.size), a[s].height *= o, a[s].depth *= o;
	}
	return makeFragment(a);
}
var sizeFuncs = [
	"\\tiny",
	"\\sixptsize",
	"\\scriptsize",
	"\\footnotesize",
	"\\small",
	"\\normalsize",
	"\\large",
	"\\Large",
	"\\LARGE",
	"\\huge",
	"\\Huge"
];
defineFunction({
	type: "sizing",
	names: sizeFuncs,
	props: {
		numArgs: 0,
		allowedInText: !0
	},
	handler: (e, t) => {
		var { breakOnTokenText: n, funcName: a, parser: o } = e, s = o.parseExpression(!1, n);
		return {
			type: "sizing",
			mode: o.mode,
			size: sizeFuncs.indexOf(a) + 1,
			body: s
		};
	},
	htmlBuilder: (e, t) => {
		var n = t.havingSize(e.size);
		return sizingGroup(e.body, n, t);
	},
	mathmlBuilder: (e, t) => {
		var n = t.havingSize(e.size), a = new MathNode("mstyle", buildExpression(e.body, n));
		return a.setAttribute("mathsize", makeEm(n.sizeMultiplier)), a;
	}
}), defineFunction({
	type: "smash",
	names: ["\\smash"],
	props: {
		numArgs: 1,
		numOptionalArgs: 1,
		allowedInText: !0
	},
	handler: (e, t, n) => {
		var { parser: a } = e, o = !1, s = !1, l = n[0] && assertNodeType(n[0], "ordgroup");
		if (l) for (var u = "", d = 0; d < l.body.length; ++d) {
			var f = l.body[d];
			if (u = assertSymbolNodeType(f).text, u === "t") o = !0;
			else if (u === "b") s = !0;
			else {
				o = !1, s = !1;
				break;
			}
		}
		else o = !0, s = !0;
		var p = t[0];
		return {
			type: "smash",
			mode: a.mode,
			body: p,
			smashHeight: o,
			smashDepth: s
		};
	},
	htmlBuilder: (e, t) => {
		var n = makeSpan([], [buildGroup$1(e.body, t)]);
		if (!e.smashHeight && !e.smashDepth) return n;
		if (e.smashHeight && (n.height = 0), e.smashDepth && (n.depth = 0), e.smashHeight && e.smashDepth) return makeSpan(["mord", "smash"], [n], t);
		if (n.children) for (var a = 0; a < n.children.length; a++) e.smashHeight && (n.children[a].height = 0), e.smashDepth && (n.children[a].depth = 0);
		return makeSpan(["mord"], [makeVList({
			positionType: "firstBaseline",
			children: [{
				type: "elem",
				elem: n
			}]
		})], t);
	},
	mathmlBuilder: (e, t) => {
		var n = new MathNode("mpadded", [buildGroup(e.body, t)]);
		return e.smashHeight && n.setAttribute("height", "0px"), e.smashDepth && n.setAttribute("depth", "0px"), n;
	}
}), defineFunction({
	type: "sqrt",
	names: ["\\sqrt"],
	props: {
		numArgs: 1,
		numOptionalArgs: 1
	},
	handler(e, t, n) {
		var { parser: a } = e, o = n[0], s = t[0];
		return {
			type: "sqrt",
			mode: a.mode,
			body: s,
			index: o
		};
	},
	htmlBuilder(e, t) {
		var n = buildGroup$1(e.body, t.havingCrampedStyle());
		n.height === 0 && (n.height = t.fontMetrics().xHeight), n = wrapFragment(n, t);
		var a = t.fontMetrics().defaultRuleThickness, o = a;
		t.style.id < Style$1.TEXT.id && (o = t.fontMetrics().xHeight);
		var s = a + o / 4, { span: l, ruleWidth: u, advanceWidth: d } = makeSqrtImage(n.height + n.depth + s + a, t), f = l.height - u;
		f > n.height + n.depth + s && (s = (s + f - n.height - n.depth) / 2);
		var p = l.height - n.height - s - u;
		n.style.paddingLeft = makeEm(d);
		var m = makeVList({
			positionType: "firstBaseline",
			children: [
				{
					type: "elem",
					elem: n,
					wrapperClasses: ["svg-align"]
				},
				{
					type: "kern",
					size: -(n.height + p)
				},
				{
					type: "elem",
					elem: l
				},
				{
					type: "kern",
					size: u
				}
			]
		});
		if (e.index) {
			var h = t.havingStyle(Style$1.SCRIPTSCRIPT), g = buildGroup$1(e.index, h, t);
			return makeSpan(["mord", "sqrt"], [makeSpan(["root"], [makeVList({
				positionType: "shift",
				positionData: -(.6 * (m.height - m.depth)),
				children: [{
					type: "elem",
					elem: g
				}]
			})]), m], t);
		} else return makeSpan(["mord", "sqrt"], [m], t);
	},
	mathmlBuilder(e, t) {
		var { body: n, index: a } = e;
		return a ? new MathNode("mroot", [buildGroup(n, t), buildGroup(a, t)]) : new MathNode("msqrt", [buildGroup(n, t)]);
	}
});
var styleMap = {
	display: Style$1.DISPLAY,
	text: Style$1.TEXT,
	script: Style$1.SCRIPT,
	scriptscript: Style$1.SCRIPTSCRIPT
};
defineFunction({
	type: "styling",
	names: [
		"\\displaystyle",
		"\\textstyle",
		"\\scriptstyle",
		"\\scriptscriptstyle"
	],
	props: {
		numArgs: 0,
		allowedInText: !0,
		primitive: !0
	},
	handler(e, t) {
		var { breakOnTokenText: n, funcName: a, parser: o } = e, s = o.parseExpression(!0, n), l = a.slice(1, a.length - 5);
		return {
			type: "styling",
			mode: o.mode,
			style: l,
			body: s
		};
	},
	htmlBuilder(e, t) {
		var n = styleMap[e.style], a = t.havingStyle(n).withFont("");
		return sizingGroup(e.body, a, t);
	},
	mathmlBuilder(e, t) {
		var n = styleMap[e.style], a = t.havingStyle(n), o = new MathNode("mstyle", buildExpression(e.body, a)), s = {
			display: ["0", "true"],
			text: ["0", "false"],
			script: ["1", "false"],
			scriptscript: ["2", "false"]
		}[e.style];
		return o.setAttribute("scriptlevel", s[0]), o.setAttribute("displaystyle", s[1]), o;
	}
});
var htmlBuilderDelegate = function(e, t) {
	var n = e.base;
	return n ? n.type === "op" ? n.limits && (t.style.size === Style$1.DISPLAY.size || n.alwaysHandleSupSub) ? htmlBuilder$2 : null : n.type === "operatorname" ? n.alwaysHandleSupSub && (t.style.size === Style$1.DISPLAY.size || n.limits) ? htmlBuilder$1 : null : n.type === "accent" ? isCharacterBox(n.base) ? htmlBuilder$a : null : n.type === "horizBrace" && !e.sub === n.isOver ? htmlBuilder$3 : null : null;
};
defineFunctionBuilders({
	type: "supsub",
	htmlBuilder(e, t) {
		var n = htmlBuilderDelegate(e, t);
		if (n) return n(e, t);
		var { base: a, sup: o, sub: s } = e, l = buildGroup$1(a, t), u, d, f = t.fontMetrics(), p = 0, h = 0, g = a && isCharacterBox(a);
		if (o) {
			var _ = t.havingStyle(t.style.sup());
			u = buildGroup$1(o, _, t), g || (p = l.height - _.fontMetrics().supDrop * _.sizeMultiplier / t.sizeMultiplier);
		}
		if (s) {
			var v = t.havingStyle(t.style.sub());
			d = buildGroup$1(s, v, t), g || (h = l.depth + v.fontMetrics().subDrop * v.sizeMultiplier / t.sizeMultiplier);
		}
		var y = t.style === Style$1.DISPLAY ? f.sup1 : t.style.cramped ? f.sup3 : f.sup2, b = t.sizeMultiplier, x = makeEm(.5 / f.ptPerEm / b), C = null;
		if (d) {
			var w = e.base && e.base.type === "op" && e.base.name && (e.base.name === "\\oiint" || e.base.name === "\\oiiint");
			(l instanceof SymbolNode || w) && (C = makeEm(-l.italic));
		}
		var E;
		if (u && d) {
			p = Math.max(p, y, u.depth + .25 * f.xHeight), h = Math.max(h, f.sub2);
			var O = 4 * f.defaultRuleThickness;
			if (p - u.depth - (d.height - h) < O) {
				h = O - (p - u.depth) + d.height;
				var k = .8 * f.xHeight - (p - u.depth);
				k > 0 && (p += k, h -= k);
			}
			E = makeVList({
				positionType: "individualShift",
				children: [{
					type: "elem",
					elem: d,
					shift: h,
					marginRight: x,
					marginLeft: C
				}, {
					type: "elem",
					elem: u,
					shift: -p,
					marginRight: x
				}]
			});
		} else if (d) h = Math.max(h, f.sub1, d.height - .8 * f.xHeight), E = makeVList({
			positionType: "shift",
			positionData: h,
			children: [{
				type: "elem",
				elem: d,
				marginLeft: C,
				marginRight: x
			}]
		});
		else if (u) p = Math.max(p, y, u.depth + .25 * f.xHeight), E = makeVList({
			positionType: "shift",
			positionData: -p,
			children: [{
				type: "elem",
				elem: u,
				marginRight: x
			}]
		});
		else throw Error("supsub must have either sup or sub.");
		return makeSpan([getTypeOfDomTree(l, "right") || "mord"], [l, makeSpan(["msupsub"], [E])], t);
	},
	mathmlBuilder(e, t) {
		var n = !1, a, o;
		e.base && e.base.type === "horizBrace" && (o = !!e.sup, o === e.base.isOver && (n = !0, a = e.base.isOver)), e.base && (e.base.type === "op" || e.base.type === "operatorname") && (e.base.parentIsSupSub = !0);
		var s = [buildGroup(e.base, t)];
		e.sub && s.push(buildGroup(e.sub, t)), e.sup && s.push(buildGroup(e.sup, t));
		var l;
		if (n) l = a ? "mover" : "munder";
		else if (e.sub) if (e.sup) {
			var u = e.base;
			l = u && u.type === "op" && u.limits && t.style === Style$1.DISPLAY || u && u.type === "operatorname" && u.alwaysHandleSupSub && (t.style === Style$1.DISPLAY || u.limits) ? "munderover" : "msubsup";
		} else {
			var d = e.base;
			l = d && d.type === "op" && d.limits && (t.style === Style$1.DISPLAY || d.alwaysHandleSupSub) || d && d.type === "operatorname" && d.alwaysHandleSupSub && (d.limits || t.style === Style$1.DISPLAY) ? "munder" : "msub";
		}
		else {
			var f = e.base;
			l = f && f.type === "op" && f.limits && (t.style === Style$1.DISPLAY || f.alwaysHandleSupSub) || f && f.type === "operatorname" && f.alwaysHandleSupSub && (f.limits || t.style === Style$1.DISPLAY) ? "mover" : "msup";
		}
		return new MathNode(l, s);
	}
}), defineFunctionBuilders({
	type: "atom",
	htmlBuilder(e, t) {
		return mathsym(e.text, e.mode, t, ["m" + e.family]);
	},
	mathmlBuilder(e, t) {
		var n = new MathNode("mo", [makeText(e.text, e.mode)]);
		if (e.family === "bin") {
			var a = getVariant(e, t);
			a === "bold-italic" && n.setAttribute("mathvariant", a);
		} else e.family === "punct" ? n.setAttribute("separator", "true") : (e.family === "open" || e.family === "close") && n.setAttribute("stretchy", "false");
		return n;
	}
});
var defaultVariant = {
	mi: "italic",
	mn: "normal",
	mtext: "normal"
};
defineFunctionBuilders({
	type: "mathord",
	htmlBuilder(e, t) {
		return makeOrd(e, t, "mathord");
	},
	mathmlBuilder(e, t) {
		var n = new MathNode("mi", [makeText(e.text, e.mode, t)]), a = getVariant(e, t) || "italic";
		return a !== defaultVariant[n.type] && n.setAttribute("mathvariant", a), n;
	}
}), defineFunctionBuilders({
	type: "textord",
	htmlBuilder(e, t) {
		return makeOrd(e, t, "textord");
	},
	mathmlBuilder(e, t) {
		var n = makeText(e.text, e.mode, t), a = getVariant(e, t) || "normal", o = e.mode === "text" ? new MathNode("mtext", [n]) : /[0-9]/.test(e.text) ? new MathNode("mn", [n]) : e.text === "\\prime" ? new MathNode("mo", [n]) : new MathNode("mi", [n]);
		return a !== defaultVariant[o.type] && o.setAttribute("mathvariant", a), o;
	}
});
var cssSpace = {
	"\\nobreak": "nobreak",
	"\\allowbreak": "allowbreak"
}, regularSpace = {
	" ": {},
	"\\ ": {},
	"~": { className: "nobreak" },
	"\\space": {},
	"\\nobreakspace": { className: "nobreak" }
};
defineFunctionBuilders({
	type: "spacing",
	htmlBuilder(e, t) {
		if (regularSpace.hasOwnProperty(e.text)) {
			var n = regularSpace[e.text].className || "";
			if (e.mode === "text") {
				var o = makeOrd(e, t, "textord");
				return o.classes.push(n), o;
			} else return makeSpan(["mspace", n], [mathsym(e.text, e.mode, t)], t);
		} else if (cssSpace.hasOwnProperty(e.text)) return makeSpan(["mspace", cssSpace[e.text]], [], t);
		else throw new ParseError("Unknown type of space \"" + e.text + "\"");
	},
	mathmlBuilder(e, t) {
		var n;
		if (regularSpace.hasOwnProperty(e.text)) n = new MathNode("mtext", [new TextNode("\xA0")]);
		else if (cssSpace.hasOwnProperty(e.text)) return new MathNode("mspace");
		else throw new ParseError("Unknown type of space \"" + e.text + "\"");
		return n;
	}
});
var pad = () => {
	var e = new MathNode("mtd", []);
	return e.setAttribute("width", "50%"), e;
};
defineFunctionBuilders({
	type: "tag",
	mathmlBuilder(e, t) {
		var n = new MathNode("mtable", [new MathNode("mtr", [
			pad(),
			new MathNode("mtd", [buildExpressionRow(e.body, t)]),
			pad(),
			new MathNode("mtd", [buildExpressionRow(e.tag, t)])
		])]);
		return n.setAttribute("width", "100%"), n;
	}
});
var textFontFamilies = {
	"\\text": void 0,
	"\\textrm": "textrm",
	"\\textsf": "textsf",
	"\\texttt": "texttt",
	"\\textnormal": "textrm"
}, textFontWeights = {
	"\\textbf": "textbf",
	"\\textmd": "textmd"
}, textFontShapes = {
	"\\textit": "textit",
	"\\textup": "textup"
}, optionsWithFont = (e, t) => {
	var n = e.font;
	if (n) {
		if (textFontFamilies[n]) return t.withTextFontFamily(textFontFamilies[n]);
		if (textFontWeights[n]) return t.withTextFontWeight(textFontWeights[n]);
		if (n === "\\emph") return t.fontShape === "textit" ? t.withTextFontShape("textup") : t.withTextFontShape("textit");
	} else return t;
	return t.withTextFontShape(textFontShapes[n]);
};
defineFunction({
	type: "text",
	names: [
		"\\text",
		"\\textrm",
		"\\textsf",
		"\\texttt",
		"\\textnormal",
		"\\textbf",
		"\\textmd",
		"\\textit",
		"\\textup",
		"\\emph"
	],
	props: {
		numArgs: 1,
		argTypes: ["text"],
		allowedInArgument: !0,
		allowedInText: !0
	},
	handler(e, t) {
		var { parser: n, funcName: a } = e, o = t[0];
		return {
			type: "text",
			mode: n.mode,
			body: ordargument(o),
			font: a
		};
	},
	htmlBuilder(e, t) {
		var n = optionsWithFont(e, t);
		return makeSpan(["mord", "text"], buildExpression$1(e.body, n, !0), n);
	},
	mathmlBuilder(e, t) {
		var n = optionsWithFont(e, t);
		return buildExpressionRow(e.body, n);
	}
}), defineFunction({
	type: "underline",
	names: ["\\underline"],
	props: {
		numArgs: 1,
		allowedInText: !0
	},
	handler(e, t) {
		var { parser: n } = e;
		return {
			type: "underline",
			mode: n.mode,
			body: t[0]
		};
	},
	htmlBuilder(e, t) {
		var n = buildGroup$1(e.body, t), a = makeLineSpan("underline-line", t), o = t.fontMetrics().defaultRuleThickness;
		return makeSpan(["mord", "underline"], [makeVList({
			positionType: "top",
			positionData: n.height,
			children: [
				{
					type: "kern",
					size: o
				},
				{
					type: "elem",
					elem: a
				},
				{
					type: "kern",
					size: 3 * o
				},
				{
					type: "elem",
					elem: n
				}
			]
		})], t);
	},
	mathmlBuilder(e, t) {
		var n = new MathNode("mo", [new TextNode("‾")]);
		n.setAttribute("stretchy", "true");
		var a = new MathNode("munder", [buildGroup(e.body, t), n]);
		return a.setAttribute("accentunder", "true"), a;
	}
}), defineFunction({
	type: "vcenter",
	names: ["\\vcenter"],
	props: {
		numArgs: 1,
		argTypes: ["original"],
		allowedInText: !1
	},
	handler(e, t) {
		var { parser: n } = e;
		return {
			type: "vcenter",
			mode: n.mode,
			body: t[0]
		};
	},
	htmlBuilder(e, t) {
		var n = buildGroup$1(e.body, t), a = t.fontMetrics().axisHeight;
		return makeVList({
			positionType: "shift",
			positionData: .5 * (n.height - a - (n.depth + a)),
			children: [{
				type: "elem",
				elem: n
			}]
		});
	},
	mathmlBuilder(e, t) {
		return new MathNode("mrow", [new MathNode("mpadded", [buildGroup(e.body, t)], ["vcenter"])]);
	}
}), defineFunction({
	type: "verb",
	names: ["\\verb"],
	props: {
		numArgs: 0,
		allowedInText: !0
	},
	handler(e, t, n) {
		throw new ParseError("\\verb ended by end of line instead of matching delimiter");
	},
	htmlBuilder(e, t) {
		for (var n = makeVerb(e), a = [], o = t.havingStyle(t.style.text()), s = 0; s < n.length; s++) {
			var l = n[s];
			l === "~" && (l = "\\textasciitilde"), a.push(makeSymbol(l, "Typewriter-Regular", e.mode, o, ["mord", "texttt"]));
		}
		return makeSpan(["mord", "text"].concat(o.sizingClasses(t)), tryCombineChars(a), o);
	},
	mathmlBuilder(e, t) {
		var n = new MathNode("mtext", [new TextNode(makeVerb(e))]);
		return n.setAttribute("mathvariant", "monospace"), n;
	}
});
var makeVerb = (e) => e.body.replace(/ /g, e.star ? "␣" : "\xA0"), functions = _functions, spaceRegexString = "[ \r\n	]", controlWordRegexString = "\\\\[a-zA-Z@]+", controlSymbolRegexString = "\\\\[^\ud800-\udfff]", controlWordWhitespaceRegexString = "(" + controlWordRegexString + ")" + spaceRegexString + "*", controlSpaceRegexString = "\\\\(\n|[ \r	]+\n?)[ \r	]*", combiningDiacriticalMarkString = "[̀-ͯ]", combiningDiacriticalMarksEndRegex = /* @__PURE__ */ RegExp(combiningDiacriticalMarkString + "+$"), tokenRegexString = "(" + spaceRegexString + "+)|" + (controlSpaceRegexString + "|") + "([!-\\[\\]-‧‪-퟿豈-￿]" + (combiningDiacriticalMarkString + "*") + "|[\ud800-\udbff][\udc00-\udfff]" + (combiningDiacriticalMarkString + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + controlWordWhitespaceRegexString) + ("|" + controlSymbolRegexString + ")"), Lexer = class {
	constructor(e, t) {
		this.input = e, this.settings = t, this.tokenRegex = new RegExp(tokenRegexString, "g"), this.catcodes = {
			"%": 14,
			"~": 13
		};
	}
	setCatcode(e, t) {
		this.catcodes[e] = t;
	}
	lex() {
		var e = this.input, t = this.tokenRegex.lastIndex;
		if (t === e.length) return new Token("EOF", new SourceLocation(this, t, t));
		var n = this.tokenRegex.exec(e);
		if (n === null || n.index !== t) throw new ParseError("Unexpected character: '" + e[t] + "'", new Token(e[t], new SourceLocation(this, t, t + 1)));
		var o = n[6] || n[3] || (n[2] ? "\\ " : " ");
		if (this.catcodes[o] === 14) {
			var s = e.indexOf("\n", this.tokenRegex.lastIndex);
			return s === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = s + 1, this.lex();
		}
		return new Token(o, new SourceLocation(this, t, this.tokenRegex.lastIndex));
	}
}, Namespace = class {
	constructor(e, t) {
		e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = t, this.builtins = e, this.undefStack = [];
	}
	beginGroup() {
		this.undefStack.push({});
	}
	endGroup() {
		if (this.undefStack.length === 0) throw new ParseError("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
		var e = this.undefStack.pop();
		for (var t in e) e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
	}
	endGroups() {
		for (; this.undefStack.length > 0;) this.endGroup();
	}
	has(e) {
		return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
	}
	get(e) {
		return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
	}
	set(e, t, n) {
		if (n === void 0 && (n = !1), n) {
			for (var a = 0; a < this.undefStack.length; a++) delete this.undefStack[a][e];
			this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
		} else {
			var o = this.undefStack[this.undefStack.length - 1];
			o && !o.hasOwnProperty(e) && (o[e] = this.current[e]);
		}
		t == null ? delete this.current[e] : this.current[e] = t;
	}
}, macros = _macros;
defineMacro("\\noexpand", function(e) {
	var t = e.popToken();
	return e.isExpandable(t.text) && (t.noexpand = !0, t.treatAsRelax = !0), {
		tokens: [t],
		numArgs: 0
	};
}), defineMacro("\\expandafter", function(e) {
	var t = e.popToken();
	return e.expandOnce(!0), {
		tokens: [t],
		numArgs: 0
	};
}), defineMacro("\\@firstoftwo", function(e) {
	return {
		tokens: e.consumeArgs(2)[0],
		numArgs: 0
	};
}), defineMacro("\\@secondoftwo", function(e) {
	return {
		tokens: e.consumeArgs(2)[1],
		numArgs: 0
	};
}), defineMacro("\\@ifnextchar", function(e) {
	var t = e.consumeArgs(3);
	e.consumeSpaces();
	var n = e.future();
	return t[0].length === 1 && t[0][0].text === n.text ? {
		tokens: t[1],
		numArgs: 0
	} : {
		tokens: t[2],
		numArgs: 0
	};
}), defineMacro("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), defineMacro("\\TextOrMath", function(e) {
	var t = e.consumeArgs(2);
	return e.mode === "text" ? {
		tokens: t[0],
		numArgs: 0
	} : {
		tokens: t[1],
		numArgs: 0
	};
});
var digitToNumber = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	a: 10,
	A: 10,
	b: 11,
	B: 11,
	c: 12,
	C: 12,
	d: 13,
	D: 13,
	e: 14,
	E: 14,
	f: 15,
	F: 15
};
defineMacro("\\char", function(e) {
	var t = e.popToken(), n, o = 0;
	if (t.text === "'") n = 8, t = e.popToken();
	else if (t.text === "\"") n = 16, t = e.popToken();
	else if (t.text === "`") if (t = e.popToken(), t.text[0] === "\\") o = t.text.charCodeAt(1);
	else if (t.text === "EOF") throw new ParseError("\\char` missing argument");
	else o = t.text.charCodeAt(0);
	else n = 10;
	if (n) {
		if (o = digitToNumber[t.text], o == null || o >= n) throw new ParseError("Invalid base-" + n + " digit " + t.text);
		for (var s; (s = digitToNumber[e.future().text]) != null && s < n;) o *= n, o += s, e.popToken();
	}
	return "\\@char{" + o + "}";
});
var newcommand = (e, t, n, o) => {
	var s = e.consumeArg().tokens;
	if (s.length !== 1) throw new ParseError("\\newcommand's first argument must be a macro name");
	var l = s[0].text, u = e.isDefined(l);
	if (u && !t) throw new ParseError("\\newcommand{" + l + "} attempting to redefine " + (l + "; use \\renewcommand"));
	if (!u && !n) throw new ParseError("\\renewcommand{" + l + "} when command " + l + " does not yet exist; use \\newcommand");
	var d = 0;
	if (s = e.consumeArg().tokens, s.length === 1 && s[0].text === "[") {
		for (var f = "", p = e.expandNextToken(); p.text !== "]" && p.text !== "EOF";) f += p.text, p = e.expandNextToken();
		if (!f.match(/^\s*[0-9]+\s*$/)) throw new ParseError("Invalid number of arguments: " + f);
		d = parseInt(f), s = e.consumeArg().tokens;
	}
	return u && o || e.macros.set(l, {
		tokens: s,
		numArgs: d
	}), "";
};
defineMacro("\\newcommand", (e) => newcommand(e, !1, !0, !1)), defineMacro("\\renewcommand", (e) => newcommand(e, !0, !1, !1)), defineMacro("\\providecommand", (e) => newcommand(e, !0, !0, !0)), defineMacro("\\message", (e) => {
	var t = e.consumeArgs(1)[0];
	return console.log(t.reverse().map((e) => e.text).join("")), "";
}), defineMacro("\\errmessage", (e) => {
	var t = e.consumeArgs(1)[0];
	return console.error(t.reverse().map((e) => e.text).join("")), "";
}), defineMacro("\\show", (e) => {
	var t = e.popToken(), n = t.text;
	return console.log(t, e.macros.get(n), functions[n], symbols.math[n], symbols.text[n]), "";
}), defineMacro("\\bgroup", "{"), defineMacro("\\egroup", "}"), defineMacro("~", "\\nobreakspace"), defineMacro("\\lq", "`"), defineMacro("\\rq", "'"), defineMacro("\\aa", "\\r a"), defineMacro("\\AA", "\\r A"), defineMacro("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"), defineMacro("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), defineMacro("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"), defineMacro("ℬ", "\\mathscr{B}"), defineMacro("ℰ", "\\mathscr{E}"), defineMacro("ℱ", "\\mathscr{F}"), defineMacro("ℋ", "\\mathscr{H}"), defineMacro("ℐ", "\\mathscr{I}"), defineMacro("ℒ", "\\mathscr{L}"), defineMacro("ℳ", "\\mathscr{M}"), defineMacro("ℛ", "\\mathscr{R}"), defineMacro("ℭ", "\\mathfrak{C}"), defineMacro("ℌ", "\\mathfrak{H}"), defineMacro("ℨ", "\\mathfrak{Z}"), defineMacro("\\Bbbk", "\\Bbb{k}"), defineMacro("\\llap", "\\mathllap{\\textrm{#1}}"), defineMacro("\\rlap", "\\mathrlap{\\textrm{#1}}"), defineMacro("\\clap", "\\mathclap{\\textrm{#1}}"), defineMacro("\\mathstrut", "\\vphantom{(}"), defineMacro("\\underbar", "\\underline{\\text{#1}}"), defineMacro("\\not", "\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char\"338}"), defineMacro("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"), defineMacro("\\ne", "\\neq"), defineMacro("≠", "\\neq"), defineMacro("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"), defineMacro("∉", "\\notin"), defineMacro("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"), defineMacro("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"), defineMacro("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"), defineMacro("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"), defineMacro("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"), defineMacro("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"), defineMacro("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"), defineMacro("⟂", "\\perp"), defineMacro("‼", "\\mathclose{!\\mkern-0.8mu!}"), defineMacro("∌", "\\notni"), defineMacro("⌜", "\\ulcorner"), defineMacro("⌝", "\\urcorner"), defineMacro("⌞", "\\llcorner"), defineMacro("⌟", "\\lrcorner"), defineMacro("©", "\\copyright"), defineMacro("®", "\\textregistered"), defineMacro("\\ulcorner", "\\html@mathml{\\@ulcorner}{\\mathop{\\char\"231c}}"), defineMacro("\\urcorner", "\\html@mathml{\\@urcorner}{\\mathop{\\char\"231d}}"), defineMacro("\\llcorner", "\\html@mathml{\\@llcorner}{\\mathop{\\char\"231e}}"), defineMacro("\\lrcorner", "\\html@mathml{\\@lrcorner}{\\mathop{\\char\"231f}}"), defineMacro("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}"), defineMacro("⋮", "\\vdots"), defineMacro("\\varGamma", "\\mathit{\\Gamma}"), defineMacro("\\varDelta", "\\mathit{\\Delta}"), defineMacro("\\varTheta", "\\mathit{\\Theta}"), defineMacro("\\varLambda", "\\mathit{\\Lambda}"), defineMacro("\\varXi", "\\mathit{\\Xi}"), defineMacro("\\varPi", "\\mathit{\\Pi}"), defineMacro("\\varSigma", "\\mathit{\\Sigma}"), defineMacro("\\varUpsilon", "\\mathit{\\Upsilon}"), defineMacro("\\varPhi", "\\mathit{\\Phi}"), defineMacro("\\varPsi", "\\mathit{\\Psi}"), defineMacro("\\varOmega", "\\mathit{\\Omega}"), defineMacro("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), defineMacro("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"), defineMacro("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), defineMacro("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), defineMacro("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), defineMacro("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;"), defineMacro("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}"), defineMacro("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var dotsByToken = {
	",": "\\dotsc",
	"\\not": "\\dotsb",
	"+": "\\dotsb",
	"=": "\\dotsb",
	"<": "\\dotsb",
	">": "\\dotsb",
	"-": "\\dotsb",
	"*": "\\dotsb",
	":": "\\dotsb",
	"\\DOTSB": "\\dotsb",
	"\\coprod": "\\dotsb",
	"\\bigvee": "\\dotsb",
	"\\bigwedge": "\\dotsb",
	"\\biguplus": "\\dotsb",
	"\\bigcap": "\\dotsb",
	"\\bigcup": "\\dotsb",
	"\\prod": "\\dotsb",
	"\\sum": "\\dotsb",
	"\\bigotimes": "\\dotsb",
	"\\bigoplus": "\\dotsb",
	"\\bigodot": "\\dotsb",
	"\\bigsqcup": "\\dotsb",
	"\\And": "\\dotsb",
	"\\longrightarrow": "\\dotsb",
	"\\Longrightarrow": "\\dotsb",
	"\\longleftarrow": "\\dotsb",
	"\\Longleftarrow": "\\dotsb",
	"\\longleftrightarrow": "\\dotsb",
	"\\Longleftrightarrow": "\\dotsb",
	"\\mapsto": "\\dotsb",
	"\\longmapsto": "\\dotsb",
	"\\hookrightarrow": "\\dotsb",
	"\\doteq": "\\dotsb",
	"\\mathbin": "\\dotsb",
	"\\mathrel": "\\dotsb",
	"\\relbar": "\\dotsb",
	"\\Relbar": "\\dotsb",
	"\\xrightarrow": "\\dotsb",
	"\\xleftarrow": "\\dotsb",
	"\\DOTSI": "\\dotsi",
	"\\int": "\\dotsi",
	"\\oint": "\\dotsi",
	"\\iint": "\\dotsi",
	"\\iiint": "\\dotsi",
	"\\iiiint": "\\dotsi",
	"\\idotsint": "\\dotsi",
	"\\DOTSX": "\\dotsx"
}, dotsbGroups = new Set(["bin", "rel"]);
defineMacro("\\dots", function(e) {
	var t = "\\dotso", n = e.expandAfterFuture().text;
	return n in dotsByToken ? t = dotsByToken[n] : (n.slice(0, 4) === "\\not" || n in symbols.math && dotsbGroups.has(symbols.math[n].group)) && (t = "\\dotsb"), t;
});
var spaceAfterDots = {
	")": !0,
	"]": !0,
	"\\rbrack": !0,
	"\\}": !0,
	"\\rbrace": !0,
	"\\rangle": !0,
	"\\rceil": !0,
	"\\rfloor": !0,
	"\\rgroup": !0,
	"\\rmoustache": !0,
	"\\right": !0,
	"\\bigr": !0,
	"\\biggr": !0,
	"\\Bigr": !0,
	"\\Biggr": !0,
	$: !0,
	";": !0,
	".": !0,
	",": !0
};
defineMacro("\\dotso", function(e) {
	return e.future().text in spaceAfterDots ? "\\ldots\\," : "\\ldots";
}), defineMacro("\\dotsc", function(e) {
	var t = e.future().text;
	return t in spaceAfterDots && t !== "," ? "\\ldots\\," : "\\ldots";
}), defineMacro("\\cdots", function(e) {
	return e.future().text in spaceAfterDots ? "\\@cdots\\," : "\\@cdots";
}), defineMacro("\\dotsb", "\\cdots"), defineMacro("\\dotsm", "\\cdots"), defineMacro("\\dotsi", "\\!\\cdots"), defineMacro("\\dotsx", "\\ldots\\,"), defineMacro("\\DOTSI", "\\relax"), defineMacro("\\DOTSB", "\\relax"), defineMacro("\\DOTSX", "\\relax"), defineMacro("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), defineMacro("\\,", "\\tmspace+{3mu}{.1667em}"), defineMacro("\\thinspace", "\\,"), defineMacro("\\>", "\\mskip{4mu}"), defineMacro("\\:", "\\tmspace+{4mu}{.2222em}"), defineMacro("\\medspace", "\\:"), defineMacro("\\;", "\\tmspace+{5mu}{.2777em}"), defineMacro("\\thickspace", "\\;"), defineMacro("\\!", "\\tmspace-{3mu}{.1667em}"), defineMacro("\\negthinspace", "\\!"), defineMacro("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), defineMacro("\\negthickspace", "\\tmspace-{5mu}{.277em}"), defineMacro("\\enspace", "\\kern.5em "), defineMacro("\\enskip", "\\hskip.5em\\relax"), defineMacro("\\quad", "\\hskip1em\\relax"), defineMacro("\\qquad", "\\hskip2em\\relax"), defineMacro("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), defineMacro("\\tag@paren", "\\tag@literal{({#1})}"), defineMacro("\\tag@literal", (e) => {
	if (e.macros.get("\\df@tag")) throw new ParseError("Multiple \\tag");
	return "\\gdef\\df@tag{\\text{#1}}";
}), defineMacro("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), defineMacro("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), defineMacro("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), defineMacro("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), defineMacro("\\newline", "\\\\\\relax"), defineMacro("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var latexRaiseA = makeEm(fontMetricsData["Main-Regular"][84][1] - .7 * fontMetricsData["Main-Regular"][65][1]);
defineMacro("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), defineMacro("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + latexRaiseA + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), defineMacro("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), defineMacro("\\@hspace", "\\hskip #1\\relax"), defineMacro("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), defineMacro("\\ordinarycolon", ":"), defineMacro("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), defineMacro("\\dblcolon", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char\"2237}}"), defineMacro("\\coloneqq", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char\"2254}}"), defineMacro("\\Coloneqq", "\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char\"2237\\char\"3d}}"), defineMacro("\\coloneq", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char\"3a\\char\"2212}}"), defineMacro("\\Coloneq", "\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char\"2237\\char\"2212}}"), defineMacro("\\eqqcolon", "\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char\"2255}}"), defineMacro("\\Eqqcolon", "\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char\"3d\\char\"2237}}"), defineMacro("\\eqcolon", "\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char\"2239}}"), defineMacro("\\Eqcolon", "\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char\"2212\\char\"2237}}"), defineMacro("\\colonapprox", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char\"3a\\char\"2248}}"), defineMacro("\\Colonapprox", "\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char\"2237\\char\"2248}}"), defineMacro("\\colonsim", "\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char\"3a\\char\"223c}}"), defineMacro("\\Colonsim", "\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char\"2237\\char\"223c}}"), defineMacro("∷", "\\dblcolon"), defineMacro("∹", "\\eqcolon"), defineMacro("≔", "\\coloneqq"), defineMacro("≕", "\\eqqcolon"), defineMacro("⩴", "\\Coloneqq"), defineMacro("\\ratio", "\\vcentcolon"), defineMacro("\\coloncolon", "\\dblcolon"), defineMacro("\\colonequals", "\\coloneqq"), defineMacro("\\coloncolonequals", "\\Coloneqq"), defineMacro("\\equalscolon", "\\eqqcolon"), defineMacro("\\equalscoloncolon", "\\Eqqcolon"), defineMacro("\\colonminus", "\\coloneq"), defineMacro("\\coloncolonminus", "\\Coloneq"), defineMacro("\\minuscolon", "\\eqcolon"), defineMacro("\\minuscoloncolon", "\\Eqcolon"), defineMacro("\\coloncolonapprox", "\\Colonapprox"), defineMacro("\\coloncolonsim", "\\Colonsim"), defineMacro("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), defineMacro("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), defineMacro("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), defineMacro("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), defineMacro("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"), defineMacro("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), defineMacro("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), defineMacro("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), defineMacro("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), defineMacro("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), defineMacro("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), defineMacro("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), defineMacro("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), defineMacro("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"), defineMacro("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"), defineMacro("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"), defineMacro("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"), defineMacro("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"), defineMacro("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"), defineMacro("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"), defineMacro("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"), defineMacro("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"), defineMacro("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"), defineMacro("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"), defineMacro("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"), defineMacro("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"), defineMacro("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"), defineMacro("\\imath", "\\html@mathml{\\@imath}{ı}"), defineMacro("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"), defineMacro("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"), defineMacro("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"), defineMacro("⟦", "\\llbracket"), defineMacro("⟧", "\\rrbracket"), defineMacro("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"), defineMacro("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"), defineMacro("⦃", "\\lBrace"), defineMacro("⦄", "\\rBrace"), defineMacro("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"), defineMacro("⦵", "\\minuso"), defineMacro("\\darr", "\\downarrow"), defineMacro("\\dArr", "\\Downarrow"), defineMacro("\\Darr", "\\Downarrow"), defineMacro("\\lang", "\\langle"), defineMacro("\\rang", "\\rangle"), defineMacro("\\uarr", "\\uparrow"), defineMacro("\\uArr", "\\Uparrow"), defineMacro("\\Uarr", "\\Uparrow"), defineMacro("\\N", "\\mathbb{N}"), defineMacro("\\R", "\\mathbb{R}"), defineMacro("\\Z", "\\mathbb{Z}"), defineMacro("\\alef", "\\aleph"), defineMacro("\\alefsym", "\\aleph"), defineMacro("\\Alpha", "\\mathrm{A}"), defineMacro("\\Beta", "\\mathrm{B}"), defineMacro("\\bull", "\\bullet"), defineMacro("\\Chi", "\\mathrm{X}"), defineMacro("\\clubs", "\\clubsuit"), defineMacro("\\cnums", "\\mathbb{C}"), defineMacro("\\Complex", "\\mathbb{C}"), defineMacro("\\Dagger", "\\ddagger"), defineMacro("\\diamonds", "\\diamondsuit"), defineMacro("\\empty", "\\emptyset"), defineMacro("\\Epsilon", "\\mathrm{E}"), defineMacro("\\Eta", "\\mathrm{H}"), defineMacro("\\exist", "\\exists"), defineMacro("\\harr", "\\leftrightarrow"), defineMacro("\\hArr", "\\Leftrightarrow"), defineMacro("\\Harr", "\\Leftrightarrow"), defineMacro("\\hearts", "\\heartsuit"), defineMacro("\\image", "\\Im"), defineMacro("\\infin", "\\infty"), defineMacro("\\Iota", "\\mathrm{I}"), defineMacro("\\isin", "\\in"), defineMacro("\\Kappa", "\\mathrm{K}"), defineMacro("\\larr", "\\leftarrow"), defineMacro("\\lArr", "\\Leftarrow"), defineMacro("\\Larr", "\\Leftarrow"), defineMacro("\\lrarr", "\\leftrightarrow"), defineMacro("\\lrArr", "\\Leftrightarrow"), defineMacro("\\Lrarr", "\\Leftrightarrow"), defineMacro("\\Mu", "\\mathrm{M}"), defineMacro("\\natnums", "\\mathbb{N}"), defineMacro("\\Nu", "\\mathrm{N}"), defineMacro("\\Omicron", "\\mathrm{O}"), defineMacro("\\plusmn", "\\pm"), defineMacro("\\rarr", "\\rightarrow"), defineMacro("\\rArr", "\\Rightarrow"), defineMacro("\\Rarr", "\\Rightarrow"), defineMacro("\\real", "\\Re"), defineMacro("\\reals", "\\mathbb{R}"), defineMacro("\\Reals", "\\mathbb{R}"), defineMacro("\\Rho", "\\mathrm{P}"), defineMacro("\\sdot", "\\cdot"), defineMacro("\\sect", "\\S"), defineMacro("\\spades", "\\spadesuit"), defineMacro("\\sub", "\\subset"), defineMacro("\\sube", "\\subseteq"), defineMacro("\\supe", "\\supseteq"), defineMacro("\\Tau", "\\mathrm{T}"), defineMacro("\\thetasym", "\\vartheta"), defineMacro("\\weierp", "\\wp"), defineMacro("\\Zeta", "\\mathrm{Z}"), defineMacro("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), defineMacro("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), defineMacro("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), defineMacro("\\bra", "\\mathinner{\\langle{#1}|}"), defineMacro("\\ket", "\\mathinner{|{#1}\\rangle}"), defineMacro("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), defineMacro("\\Bra", "\\left\\langle#1\\right|"), defineMacro("\\Ket", "\\left|#1\\right\\rangle");
var braketHelper = (e) => (t) => {
	var n = t.consumeArg().tokens, a = t.consumeArg().tokens, o = t.consumeArg().tokens, s = t.consumeArg().tokens, l = t.macros.get("|"), u = t.macros.get("\\|");
	t.macros.beginGroup();
	var d = (t) => (n) => {
		e && (n.macros.set("|", l), o.length && n.macros.set("\\|", u));
		var s = t;
		return !t && o.length && n.future().text === "|" && (n.popToken(), s = !0), {
			tokens: s ? o : a,
			numArgs: 0
		};
	};
	t.macros.set("|", d(!1)), o.length && t.macros.set("\\|", d(!0));
	var f = t.consumeArg().tokens, p = t.expandTokens([
		...s,
		...f,
		...n
	]);
	return t.macros.endGroup(), {
		tokens: p.reverse(),
		numArgs: 0
	};
};
defineMacro("\\bra@ket", braketHelper(!1)), defineMacro("\\bra@set", braketHelper(!0)), defineMacro("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"), defineMacro("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"), defineMacro("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"), defineMacro("\\angln", "{\\angl n}"), defineMacro("\\blue", "\\textcolor{##6495ed}{#1}"), defineMacro("\\orange", "\\textcolor{##ffa500}{#1}"), defineMacro("\\pink", "\\textcolor{##ff00af}{#1}"), defineMacro("\\red", "\\textcolor{##df0030}{#1}"), defineMacro("\\green", "\\textcolor{##28ae7b}{#1}"), defineMacro("\\gray", "\\textcolor{gray}{#1}"), defineMacro("\\purple", "\\textcolor{##9d38bd}{#1}"), defineMacro("\\blueA", "\\textcolor{##ccfaff}{#1}"), defineMacro("\\blueB", "\\textcolor{##80f6ff}{#1}"), defineMacro("\\blueC", "\\textcolor{##63d9ea}{#1}"), defineMacro("\\blueD", "\\textcolor{##11accd}{#1}"), defineMacro("\\blueE", "\\textcolor{##0c7f99}{#1}"), defineMacro("\\tealA", "\\textcolor{##94fff5}{#1}"), defineMacro("\\tealB", "\\textcolor{##26edd5}{#1}"), defineMacro("\\tealC", "\\textcolor{##01d1c1}{#1}"), defineMacro("\\tealD", "\\textcolor{##01a995}{#1}"), defineMacro("\\tealE", "\\textcolor{##208170}{#1}"), defineMacro("\\greenA", "\\textcolor{##b6ffb0}{#1}"), defineMacro("\\greenB", "\\textcolor{##8af281}{#1}"), defineMacro("\\greenC", "\\textcolor{##74cf70}{#1}"), defineMacro("\\greenD", "\\textcolor{##1fab54}{#1}"), defineMacro("\\greenE", "\\textcolor{##0d923f}{#1}"), defineMacro("\\goldA", "\\textcolor{##ffd0a9}{#1}"), defineMacro("\\goldB", "\\textcolor{##ffbb71}{#1}"), defineMacro("\\goldC", "\\textcolor{##ff9c39}{#1}"), defineMacro("\\goldD", "\\textcolor{##e07d10}{#1}"), defineMacro("\\goldE", "\\textcolor{##a75a05}{#1}"), defineMacro("\\redA", "\\textcolor{##fca9a9}{#1}"), defineMacro("\\redB", "\\textcolor{##ff8482}{#1}"), defineMacro("\\redC", "\\textcolor{##f9685d}{#1}"), defineMacro("\\redD", "\\textcolor{##e84d39}{#1}"), defineMacro("\\redE", "\\textcolor{##bc2612}{#1}"), defineMacro("\\maroonA", "\\textcolor{##ffbde0}{#1}"), defineMacro("\\maroonB", "\\textcolor{##ff92c6}{#1}"), defineMacro("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), defineMacro("\\maroonD", "\\textcolor{##ca337c}{#1}"), defineMacro("\\maroonE", "\\textcolor{##9e034e}{#1}"), defineMacro("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), defineMacro("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), defineMacro("\\purpleC", "\\textcolor{##aa87ff}{#1}"), defineMacro("\\purpleD", "\\textcolor{##7854ab}{#1}"), defineMacro("\\purpleE", "\\textcolor{##543b78}{#1}"), defineMacro("\\mintA", "\\textcolor{##f5f9e8}{#1}"), defineMacro("\\mintB", "\\textcolor{##edf2df}{#1}"), defineMacro("\\mintC", "\\textcolor{##e0e5cc}{#1}"), defineMacro("\\grayA", "\\textcolor{##f6f7f7}{#1}"), defineMacro("\\grayB", "\\textcolor{##f0f1f2}{#1}"), defineMacro("\\grayC", "\\textcolor{##e3e5e6}{#1}"), defineMacro("\\grayD", "\\textcolor{##d6d8da}{#1}"), defineMacro("\\grayE", "\\textcolor{##babec2}{#1}"), defineMacro("\\grayF", "\\textcolor{##888d93}{#1}"), defineMacro("\\grayG", "\\textcolor{##626569}{#1}"), defineMacro("\\grayH", "\\textcolor{##3b3e40}{#1}"), defineMacro("\\grayI", "\\textcolor{##21242c}{#1}"), defineMacro("\\kaBlue", "\\textcolor{##314453}{#1}"), defineMacro("\\kaGreen", "\\textcolor{##71B307}{#1}");
var implicitCommands = {
	"^": !0,
	_: !0,
	"\\limits": !0,
	"\\nolimits": !0
}, MacroExpander = class {
	constructor(e, t, n) {
		this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Namespace(macros, t.macros), this.mode = n, this.stack = [];
	}
	feed(e) {
		this.lexer = new Lexer(e, this.settings);
	}
	switchMode(e) {
		this.mode = e;
	}
	beginGroup() {
		this.macros.beginGroup();
	}
	endGroup() {
		this.macros.endGroup();
	}
	endGroups() {
		this.macros.endGroups();
	}
	future() {
		return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
	}
	popToken() {
		return this.future(), this.stack.pop();
	}
	pushToken(e) {
		this.stack.push(e);
	}
	pushTokens(e) {
		this.stack.push(...e);
	}
	scanArgument(e) {
		var t, n, a;
		if (e) {
			if (this.consumeSpaces(), this.future().text !== "[") return null;
			t = this.popToken(), {tokens: a, end: n} = this.consumeArg(["]"]);
		} else ({tokens: a, start: t, end: n} = this.consumeArg());
		return this.pushToken(new Token("EOF", n.loc)), this.pushTokens(a), new Token("", SourceLocation.range(t, n));
	}
	consumeSpaces() {
		for (; this.future().text === " ";) this.stack.pop();
	}
	consumeArg(e) {
		var t = [], n = e && e.length > 0;
		n || this.consumeSpaces();
		var o = this.future(), s, l = 0, u = 0;
		do {
			if (s = this.popToken(), t.push(s), s.text === "{") ++l;
			else if (s.text === "}") {
				if (--l, l === -1) throw new ParseError("Extra }", s);
			} else if (s.text === "EOF") throw new ParseError("Unexpected end of input in a macro argument, expected '" + (e && n ? e[u] : "}") + "'", s);
			if (e && n) if ((l === 0 || l === 1 && e[u] === "{") && s.text === e[u]) {
				if (++u, u === e.length) {
					t.splice(-u, u);
					break;
				}
			} else u = 0;
		} while (l !== 0 || n);
		return o.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
			tokens: t,
			start: o,
			end: s
		};
	}
	consumeArgs(e, t) {
		if (t) {
			if (t.length !== e + 1) throw new ParseError("The length of delimiters doesn't match the number of args!");
			for (var n = t[0], o = 0; o < n.length; o++) {
				var s = this.popToken();
				if (n[o] !== s.text) throw new ParseError("Use of the macro doesn't match its definition", s);
			}
		}
		for (var l = [], u = 0; u < e; u++) l.push(this.consumeArg(t && t[u + 1]).tokens);
		return l;
	}
	countExpansion(e) {
		if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand) throw new ParseError("Too many expansions: infinite loop or need to increase maxExpand setting");
	}
	expandOnce(e) {
		var t = this.popToken(), n = t.text, o = t.noexpand ? null : this._getExpansion(n);
		if (o == null || e && o.unexpandable) {
			if (e && o == null && n[0] === "\\" && !this.isDefined(n)) throw new ParseError("Undefined control sequence: " + n);
			return this.pushToken(t), !1;
		}
		this.countExpansion(1);
		var s = o.tokens, l = this.consumeArgs(o.numArgs, o.delimiters);
		if (o.numArgs) {
			s = s.slice();
			for (var u = s.length - 1; u >= 0; --u) {
				var d = s[u];
				if (d.text === "#") {
					if (u === 0) throw new ParseError("Incomplete placeholder at end of macro body", d);
					if (d = s[--u], d.text === "#") s.splice(u + 1, 1);
					else if (/^[1-9]$/.test(d.text)) s.splice(u, 2, ...l[d.text - 1]);
					else throw new ParseError("Not a valid argument number", d);
				}
			}
		}
		return this.pushTokens(s), s.length;
	}
	expandAfterFuture() {
		return this.expandOnce(), this.future();
	}
	expandNextToken() {
		for (;;) if (this.expandOnce() === !1) {
			var e = this.stack.pop();
			return e.treatAsRelax && (e.text = "\\relax"), e;
		}
	}
	expandMacro(e) {
		return this.macros.has(e) ? this.expandTokens([new Token(e)]) : void 0;
	}
	expandTokens(e) {
		var t = [], n = this.stack.length;
		for (this.pushTokens(e); this.stack.length > n;) if (this.expandOnce(!0) === !1) {
			var a = this.stack.pop();
			a.treatAsRelax &&= (a.noexpand = !1, !1), t.push(a);
		}
		return this.countExpansion(t.length), t;
	}
	expandMacroAsText(e) {
		var t = this.expandMacro(e);
		return t && t.map((e) => e.text).join("");
	}
	_getExpansion(e) {
		var t = this.macros.get(e);
		if (t == null) return t;
		if (e.length === 1) {
			var n = this.lexer.catcodes[e];
			if (n != null && n !== 13) return;
		}
		var a = typeof t == "function" ? t(this) : t;
		if (typeof a == "string") {
			var o = 0;
			if (a.includes("#")) for (var s = a.replace(/##/g, ""); s.includes("#" + (o + 1));) ++o;
			for (var l = new Lexer(a, this.settings), u = [], d = l.lex(); d.text !== "EOF";) u.push(d), d = l.lex();
			return u.reverse(), {
				tokens: u,
				numArgs: o
			};
		}
		return a;
	}
	isDefined(e) {
		return this.macros.has(e) || functions.hasOwnProperty(e) || symbols.math.hasOwnProperty(e) || symbols.text.hasOwnProperty(e) || implicitCommands.hasOwnProperty(e);
	}
	isExpandable(e) {
		var t = this.macros.get(e);
		return t == null ? functions.hasOwnProperty(e) && !functions[e].primitive : typeof t == "string" || typeof t == "function" || !t.unexpandable;
	}
}, unicodeSubRegEx = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, uSubsAndSups = Object.freeze({
	"₊": "+",
	"₋": "-",
	"₌": "=",
	"₍": "(",
	"₎": ")",
	"₀": "0",
	"₁": "1",
	"₂": "2",
	"₃": "3",
	"₄": "4",
	"₅": "5",
	"₆": "6",
	"₇": "7",
	"₈": "8",
	"₉": "9",
	ₐ: "a",
	ₑ: "e",
	ₕ: "h",
	ᵢ: "i",
	ⱼ: "j",
	ₖ: "k",
	ₗ: "l",
	ₘ: "m",
	ₙ: "n",
	ₒ: "o",
	ₚ: "p",
	ᵣ: "r",
	ₛ: "s",
	ₜ: "t",
	ᵤ: "u",
	ᵥ: "v",
	ₓ: "x",
	ᵦ: "β",
	ᵧ: "γ",
	ᵨ: "ρ",
	ᵩ: "ϕ",
	ᵪ: "χ",
	"⁺": "+",
	"⁻": "-",
	"⁼": "=",
	"⁽": "(",
	"⁾": ")",
	"⁰": "0",
	"¹": "1",
	"²": "2",
	"³": "3",
	"⁴": "4",
	"⁵": "5",
	"⁶": "6",
	"⁷": "7",
	"⁸": "8",
	"⁹": "9",
	ᴬ: "A",
	ᴮ: "B",
	ᴰ: "D",
	ᴱ: "E",
	ᴳ: "G",
	ᴴ: "H",
	ᴵ: "I",
	ᴶ: "J",
	ᴷ: "K",
	ᴸ: "L",
	ᴹ: "M",
	ᴺ: "N",
	ᴼ: "O",
	ᴾ: "P",
	ᴿ: "R",
	ᵀ: "T",
	ᵁ: "U",
	ⱽ: "V",
	ᵂ: "W",
	ᵃ: "a",
	ᵇ: "b",
	ᶜ: "c",
	ᵈ: "d",
	ᵉ: "e",
	ᶠ: "f",
	ᵍ: "g",
	ʰ: "h",
	ⁱ: "i",
	ʲ: "j",
	ᵏ: "k",
	ˡ: "l",
	ᵐ: "m",
	ⁿ: "n",
	ᵒ: "o",
	ᵖ: "p",
	ʳ: "r",
	ˢ: "s",
	ᵗ: "t",
	ᵘ: "u",
	ᵛ: "v",
	ʷ: "w",
	ˣ: "x",
	ʸ: "y",
	ᶻ: "z",
	ᵝ: "β",
	ᵞ: "γ",
	ᵟ: "δ",
	ᵠ: "ϕ",
	ᵡ: "χ",
	ᶿ: "θ"
}), unicodeAccents = {
	"́": {
		text: "\\'",
		math: "\\acute"
	},
	"̀": {
		text: "\\`",
		math: "\\grave"
	},
	"̈": {
		text: "\\\"",
		math: "\\ddot"
	},
	"̃": {
		text: "\\~",
		math: "\\tilde"
	},
	"̄": {
		text: "\\=",
		math: "\\bar"
	},
	"̆": {
		text: "\\u",
		math: "\\breve"
	},
	"̌": {
		text: "\\v",
		math: "\\check"
	},
	"̂": {
		text: "\\^",
		math: "\\hat"
	},
	"̇": {
		text: "\\.",
		math: "\\dot"
	},
	"̊": {
		text: "\\r",
		math: "\\mathring"
	},
	"̋": { text: "\\H" },
	"̧": { text: "\\c" }
}, unicodeSymbols = {
	á: "á",
	à: "à",
	ä: "ä",
	ǟ: "ǟ",
	ã: "ã",
	ā: "ā",
	ă: "ă",
	ắ: "ắ",
	ằ: "ằ",
	ẵ: "ẵ",
	ǎ: "ǎ",
	â: "â",
	ấ: "ấ",
	ầ: "ầ",
	ẫ: "ẫ",
	ȧ: "ȧ",
	ǡ: "ǡ",
	å: "å",
	ǻ: "ǻ",
	ḃ: "ḃ",
	ć: "ć",
	ḉ: "ḉ",
	č: "č",
	ĉ: "ĉ",
	ċ: "ċ",
	ç: "ç",
	ď: "ď",
	ḋ: "ḋ",
	ḑ: "ḑ",
	é: "é",
	è: "è",
	ë: "ë",
	ẽ: "ẽ",
	ē: "ē",
	ḗ: "ḗ",
	ḕ: "ḕ",
	ĕ: "ĕ",
	ḝ: "ḝ",
	ě: "ě",
	ê: "ê",
	ế: "ế",
	ề: "ề",
	ễ: "ễ",
	ė: "ė",
	ȩ: "ȩ",
	ḟ: "ḟ",
	ǵ: "ǵ",
	ḡ: "ḡ",
	ğ: "ğ",
	ǧ: "ǧ",
	ĝ: "ĝ",
	ġ: "ġ",
	ģ: "ģ",
	ḧ: "ḧ",
	ȟ: "ȟ",
	ĥ: "ĥ",
	ḣ: "ḣ",
	ḩ: "ḩ",
	í: "í",
	ì: "ì",
	ï: "ï",
	ḯ: "ḯ",
	ĩ: "ĩ",
	ī: "ī",
	ĭ: "ĭ",
	ǐ: "ǐ",
	î: "î",
	ǰ: "ǰ",
	ĵ: "ĵ",
	ḱ: "ḱ",
	ǩ: "ǩ",
	ķ: "ķ",
	ĺ: "ĺ",
	ľ: "ľ",
	ļ: "ļ",
	ḿ: "ḿ",
	ṁ: "ṁ",
	ń: "ń",
	ǹ: "ǹ",
	ñ: "ñ",
	ň: "ň",
	ṅ: "ṅ",
	ņ: "ņ",
	ó: "ó",
	ò: "ò",
	ö: "ö",
	ȫ: "ȫ",
	õ: "õ",
	ṍ: "ṍ",
	ṏ: "ṏ",
	ȭ: "ȭ",
	ō: "ō",
	ṓ: "ṓ",
	ṑ: "ṑ",
	ŏ: "ŏ",
	ǒ: "ǒ",
	ô: "ô",
	ố: "ố",
	ồ: "ồ",
	ỗ: "ỗ",
	ȯ: "ȯ",
	ȱ: "ȱ",
	ő: "ő",
	ṕ: "ṕ",
	ṗ: "ṗ",
	ŕ: "ŕ",
	ř: "ř",
	ṙ: "ṙ",
	ŗ: "ŗ",
	ś: "ś",
	ṥ: "ṥ",
	š: "š",
	ṧ: "ṧ",
	ŝ: "ŝ",
	ṡ: "ṡ",
	ş: "ş",
	ẗ: "ẗ",
	ť: "ť",
	ṫ: "ṫ",
	ţ: "ţ",
	ú: "ú",
	ù: "ù",
	ü: "ü",
	ǘ: "ǘ",
	ǜ: "ǜ",
	ǖ: "ǖ",
	ǚ: "ǚ",
	ũ: "ũ",
	ṹ: "ṹ",
	ū: "ū",
	ṻ: "ṻ",
	ŭ: "ŭ",
	ǔ: "ǔ",
	û: "û",
	ů: "ů",
	ű: "ű",
	ṽ: "ṽ",
	ẃ: "ẃ",
	ẁ: "ẁ",
	ẅ: "ẅ",
	ŵ: "ŵ",
	ẇ: "ẇ",
	ẘ: "ẘ",
	ẍ: "ẍ",
	ẋ: "ẋ",
	ý: "ý",
	ỳ: "ỳ",
	ÿ: "ÿ",
	ỹ: "ỹ",
	ȳ: "ȳ",
	ŷ: "ŷ",
	ẏ: "ẏ",
	ẙ: "ẙ",
	ź: "ź",
	ž: "ž",
	ẑ: "ẑ",
	ż: "ż",
	Á: "Á",
	À: "À",
	Ä: "Ä",
	Ǟ: "Ǟ",
	Ã: "Ã",
	Ā: "Ā",
	Ă: "Ă",
	Ắ: "Ắ",
	Ằ: "Ằ",
	Ẵ: "Ẵ",
	Ǎ: "Ǎ",
	Â: "Â",
	Ấ: "Ấ",
	Ầ: "Ầ",
	Ẫ: "Ẫ",
	Ȧ: "Ȧ",
	Ǡ: "Ǡ",
	Å: "Å",
	Ǻ: "Ǻ",
	Ḃ: "Ḃ",
	Ć: "Ć",
	Ḉ: "Ḉ",
	Č: "Č",
	Ĉ: "Ĉ",
	Ċ: "Ċ",
	Ç: "Ç",
	Ď: "Ď",
	Ḋ: "Ḋ",
	Ḑ: "Ḑ",
	É: "É",
	È: "È",
	Ë: "Ë",
	Ẽ: "Ẽ",
	Ē: "Ē",
	Ḗ: "Ḗ",
	Ḕ: "Ḕ",
	Ĕ: "Ĕ",
	Ḝ: "Ḝ",
	Ě: "Ě",
	Ê: "Ê",
	Ế: "Ế",
	Ề: "Ề",
	Ễ: "Ễ",
	Ė: "Ė",
	Ȩ: "Ȩ",
	Ḟ: "Ḟ",
	Ǵ: "Ǵ",
	Ḡ: "Ḡ",
	Ğ: "Ğ",
	Ǧ: "Ǧ",
	Ĝ: "Ĝ",
	Ġ: "Ġ",
	Ģ: "Ģ",
	Ḧ: "Ḧ",
	Ȟ: "Ȟ",
	Ĥ: "Ĥ",
	Ḣ: "Ḣ",
	Ḩ: "Ḩ",
	Í: "Í",
	Ì: "Ì",
	Ï: "Ï",
	Ḯ: "Ḯ",
	Ĩ: "Ĩ",
	Ī: "Ī",
	Ĭ: "Ĭ",
	Ǐ: "Ǐ",
	Î: "Î",
	İ: "İ",
	Ĵ: "Ĵ",
	Ḱ: "Ḱ",
	Ǩ: "Ǩ",
	Ķ: "Ķ",
	Ĺ: "Ĺ",
	Ľ: "Ľ",
	Ļ: "Ļ",
	Ḿ: "Ḿ",
	Ṁ: "Ṁ",
	Ń: "Ń",
	Ǹ: "Ǹ",
	Ñ: "Ñ",
	Ň: "Ň",
	Ṅ: "Ṅ",
	Ņ: "Ņ",
	Ó: "Ó",
	Ò: "Ò",
	Ö: "Ö",
	Ȫ: "Ȫ",
	Õ: "Õ",
	Ṍ: "Ṍ",
	Ṏ: "Ṏ",
	Ȭ: "Ȭ",
	Ō: "Ō",
	Ṓ: "Ṓ",
	Ṑ: "Ṑ",
	Ŏ: "Ŏ",
	Ǒ: "Ǒ",
	Ô: "Ô",
	Ố: "Ố",
	Ồ: "Ồ",
	Ỗ: "Ỗ",
	Ȯ: "Ȯ",
	Ȱ: "Ȱ",
	Ő: "Ő",
	Ṕ: "Ṕ",
	Ṗ: "Ṗ",
	Ŕ: "Ŕ",
	Ř: "Ř",
	Ṙ: "Ṙ",
	Ŗ: "Ŗ",
	Ś: "Ś",
	Ṥ: "Ṥ",
	Š: "Š",
	Ṧ: "Ṧ",
	Ŝ: "Ŝ",
	Ṡ: "Ṡ",
	Ş: "Ş",
	Ť: "Ť",
	Ṫ: "Ṫ",
	Ţ: "Ţ",
	Ú: "Ú",
	Ù: "Ù",
	Ü: "Ü",
	Ǘ: "Ǘ",
	Ǜ: "Ǜ",
	Ǖ: "Ǖ",
	Ǚ: "Ǚ",
	Ũ: "Ũ",
	Ṹ: "Ṹ",
	Ū: "Ū",
	Ṻ: "Ṻ",
	Ŭ: "Ŭ",
	Ǔ: "Ǔ",
	Û: "Û",
	Ů: "Ů",
	Ű: "Ű",
	Ṽ: "Ṽ",
	Ẃ: "Ẃ",
	Ẁ: "Ẁ",
	Ẅ: "Ẅ",
	Ŵ: "Ŵ",
	Ẇ: "Ẇ",
	Ẍ: "Ẍ",
	Ẋ: "Ẋ",
	Ý: "Ý",
	Ỳ: "Ỳ",
	Ÿ: "Ÿ",
	Ỹ: "Ỹ",
	Ȳ: "Ȳ",
	Ŷ: "Ŷ",
	Ẏ: "Ẏ",
	Ź: "Ź",
	Ž: "Ž",
	Ẑ: "Ẑ",
	Ż: "Ż",
	ά: "ά",
	ὰ: "ὰ",
	ᾱ: "ᾱ",
	ᾰ: "ᾰ",
	έ: "έ",
	ὲ: "ὲ",
	ή: "ή",
	ὴ: "ὴ",
	ί: "ί",
	ὶ: "ὶ",
	ϊ: "ϊ",
	ΐ: "ΐ",
	ῒ: "ῒ",
	ῑ: "ῑ",
	ῐ: "ῐ",
	ό: "ό",
	ὸ: "ὸ",
	ύ: "ύ",
	ὺ: "ὺ",
	ϋ: "ϋ",
	ΰ: "ΰ",
	ῢ: "ῢ",
	ῡ: "ῡ",
	ῠ: "ῠ",
	ώ: "ώ",
	ὼ: "ὼ",
	Ύ: "Ύ",
	Ὺ: "Ὺ",
	Ϋ: "Ϋ",
	Ῡ: "Ῡ",
	Ῠ: "Ῠ",
	Ώ: "Ώ",
	Ὼ: "Ὼ"
}, Parser = class e {
	constructor(e, t) {
		this.mode = "math", this.gullet = new MacroExpander(e, t, this.mode), this.settings = t, this.leftrightDepth = 0, this.nextToken = null;
	}
	expect(e, t) {
		if (t === void 0 && (t = !0), this.fetch().text !== e) throw new ParseError("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
		t && this.consume();
	}
	consume() {
		this.nextToken = null;
	}
	fetch() {
		return this.nextToken ??= this.gullet.expandNextToken(), this.nextToken;
	}
	switchMode(e) {
		this.mode = e, this.gullet.switchMode(e);
	}
	parse() {
		this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
		try {
			var e = this.parseExpression(!1);
			return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
		} finally {
			this.gullet.endGroups();
		}
	}
	subparse(e) {
		var t = this.nextToken;
		this.consume(), this.gullet.pushToken(new Token("}")), this.gullet.pushTokens(e);
		var n = this.parseExpression(!1);
		return this.expect("}"), this.nextToken = t, n;
	}
	parseExpression(t, n) {
		for (var a = [];;) {
			this.mode === "math" && this.consumeSpaces();
			var o = this.fetch();
			if (e.endOfExpression.has(o.text) || n && o.text === n || t && functions[o.text] && functions[o.text].infix) break;
			var s = this.parseAtom(n);
			if (s) {
				if (s.type === "internal") continue;
			} else break;
			a.push(s);
		}
		return this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a);
	}
	handleInfixNodes(e) {
		for (var t = -1, n, o = 0; o < e.length; o++) {
			var s = e[o];
			if (s.type === "infix") {
				if (t !== -1) throw new ParseError("only one infix operator per group", s.token);
				t = o, n = s.replaceWith;
			}
		}
		if (t !== -1 && n) {
			var l, u, d = e.slice(0, t), f = e.slice(t + 1);
			return l = d.length === 1 && d[0].type === "ordgroup" ? d[0] : {
				type: "ordgroup",
				mode: this.mode,
				body: d
			}, u = f.length === 1 && f[0].type === "ordgroup" ? f[0] : {
				type: "ordgroup",
				mode: this.mode,
				body: f
			}, [n === "\\\\abovefrac" ? this.callFunction(n, [
				l,
				e[t],
				u
			], []) : this.callFunction(n, [l, u], [])];
		} else return e;
	}
	handleSupSubscript(e) {
		var t = this.fetch(), n = t.text;
		this.consume(), this.consumeSpaces();
		var o;
		do
			o = this.parseGroup(e);
		while (o?.type === "internal");
		if (!o) throw new ParseError("Expected group after '" + n + "'", t);
		return o;
	}
	formatUnsupportedCmd(e) {
		for (var t = [], n = 0; n < e.length; n++) t.push({
			type: "textord",
			mode: "text",
			text: e[n]
		});
		var a = {
			type: "text",
			mode: this.mode,
			body: t
		};
		return {
			type: "color",
			mode: this.mode,
			color: this.settings.errorColor,
			body: [a]
		};
	}
	parseAtom(e) {
		var t = this.parseGroup("atom", e);
		if (t?.type === "internal" || this.mode === "text") return t;
		for (var n, o;;) {
			this.consumeSpaces();
			var s = this.fetch();
			if (s.text === "\\limits" || s.text === "\\nolimits") {
				if (t && t.type === "op") t.limits = s.text === "\\limits", t.alwaysHandleSupSub = !0;
				else if (t && t.type === "operatorname") t.alwaysHandleSupSub && (t.limits = s.text === "\\limits");
				else throw new ParseError("Limit controls must follow a math operator", s);
				this.consume();
			} else if (s.text === "^") {
				if (n) throw new ParseError("Double superscript", s);
				n = this.handleSupSubscript("superscript");
			} else if (s.text === "_") {
				if (o) throw new ParseError("Double subscript", s);
				o = this.handleSupSubscript("subscript");
			} else if (s.text === "'") {
				if (n) throw new ParseError("Double superscript", s);
				var l = {
					type: "textord",
					mode: this.mode,
					text: "\\prime"
				}, u = [l];
				for (this.consume(); this.fetch().text === "'";) u.push(l), this.consume();
				this.fetch().text === "^" && u.push(this.handleSupSubscript("superscript")), n = {
					type: "ordgroup",
					mode: this.mode,
					body: u
				};
			} else if (uSubsAndSups[s.text]) {
				var d = unicodeSubRegEx.test(s.text), f = [];
				for (f.push(new Token(uSubsAndSups[s.text])), this.consume();;) {
					var p = this.fetch().text;
					if (!uSubsAndSups[p] || unicodeSubRegEx.test(p) !== d) break;
					f.unshift(new Token(uSubsAndSups[p])), this.consume();
				}
				var m = this.subparse(f);
				d ? o = {
					type: "ordgroup",
					mode: "math",
					body: m
				} : n = {
					type: "ordgroup",
					mode: "math",
					body: m
				};
			} else break;
		}
		return n || o ? {
			type: "supsub",
			mode: this.mode,
			base: t,
			sup: n,
			sub: o
		} : t;
	}
	parseFunction(e, t) {
		var n = this.fetch(), o = n.text, s = functions[o];
		if (!s) return null;
		if (this.consume(), t && t !== "atom" && !s.allowedInArgument) throw new ParseError("Got function '" + o + "' with no arguments" + (t ? " as " + t : ""), n);
		if (this.mode === "text" && !s.allowedInText) throw new ParseError("Can't use function '" + o + "' in text mode", n);
		if (this.mode === "math" && s.allowedInMath === !1) throw new ParseError("Can't use function '" + o + "' in math mode", n);
		var { args: l, optArgs: u } = this.parseArguments(o, s);
		return this.callFunction(o, l, u, n, e);
	}
	callFunction(e, t, n, o, s) {
		var l = {
			funcName: e,
			parser: this,
			token: o,
			breakOnTokenText: s
		}, u = functions[e];
		if (u && u.handler) return u.handler(l, t, n);
		throw new ParseError("No function handler for " + e);
	}
	parseArguments(e, t) {
		var n = t.numArgs + t.numOptionalArgs;
		if (n === 0) return {
			args: [],
			optArgs: []
		};
		for (var o = [], s = [], l = 0; l < n; l++) {
			var u = t.argTypes && t.argTypes[l], d = l < t.numOptionalArgs;
			("primitive" in t && t.primitive && u == null || t.type === "sqrt" && l === 1 && s[0] == null) && (u = "primitive");
			var f = this.parseGroupOfType("argument to '" + e + "'", u, d);
			if (d) s.push(f);
			else if (f != null) o.push(f);
			else throw new ParseError("Null argument, please report this as a bug");
		}
		return {
			args: o,
			optArgs: s
		};
	}
	parseGroupOfType(e, t, n) {
		switch (t) {
			case "color": return this.parseColorGroup(n);
			case "size": return this.parseSizeGroup(n);
			case "url": return this.parseUrlGroup(n);
			case "math":
			case "text": return this.parseArgumentGroup(n, t);
			case "hbox":
				var o = this.parseArgumentGroup(n, "text");
				return o == null ? null : {
					type: "styling",
					mode: o.mode,
					body: [o],
					style: "text"
				};
			case "raw":
				var s = this.parseStringGroup("raw", n);
				return s == null ? null : {
					type: "raw",
					mode: "text",
					string: s.text
				};
			case "primitive":
				if (n) throw new ParseError("A primitive argument cannot be optional");
				var l = this.parseGroup(e);
				if (l == null) throw new ParseError("Expected group as " + e, this.fetch());
				return l;
			case "original":
			case null:
			case void 0: return this.parseArgumentGroup(n);
			default: throw new ParseError("Unknown group type as " + e, this.fetch());
		}
	}
	consumeSpaces() {
		for (; this.fetch().text === " ";) this.consume();
	}
	parseStringGroup(e, t) {
		var n = this.gullet.scanArgument(t);
		if (n == null) return null;
		for (var a = "", o; (o = this.fetch()).text !== "EOF";) a += o.text, this.consume();
		return this.consume(), n.text = a, n;
	}
	parseRegexGroup(e, t) {
		for (var n = this.fetch(), o = n, s = "", l; (l = this.fetch()).text !== "EOF" && e.test(s + l.text);) o = l, s += o.text, this.consume();
		if (s === "") throw new ParseError("Invalid " + t + ": '" + n.text + "'", n);
		return n.range(o, s);
	}
	parseColorGroup(e) {
		var t = this.parseStringGroup("color", e);
		if (t == null) return null;
		var n = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
		if (!n) throw new ParseError("Invalid color: '" + t.text + "'", t);
		var o = n[0];
		return /^[0-9a-f]{6}$/i.test(o) && (o = "#" + o), {
			type: "color-token",
			mode: this.mode,
			color: o
		};
	}
	parseSizeGroup(e) {
		var t, n = !1;
		if (this.gullet.consumeSpaces(), t = !e && this.gullet.future().text !== "{" ? this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : this.parseStringGroup("size", e), !t) return null;
		!e && t.text.length === 0 && (t.text = "0pt", n = !0);
		var o = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
		if (!o) throw new ParseError("Invalid size: '" + t.text + "'", t);
		var s = {
			number: +(o[1] + o[2]),
			unit: o[3]
		};
		if (!validUnit(s)) throw new ParseError("Invalid unit: '" + s.unit + "'", t);
		return {
			type: "size",
			mode: this.mode,
			value: s,
			isBlank: n
		};
	}
	parseUrlGroup(e) {
		this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
		var t = this.parseStringGroup("url", e);
		if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null) return null;
		var n = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
		return {
			type: "url",
			mode: this.mode,
			url: n
		};
	}
	parseArgumentGroup(e, t) {
		var n = this.gullet.scanArgument(e);
		if (n == null) return null;
		var a = this.mode;
		t && this.switchMode(t), this.gullet.beginGroup();
		var o = this.parseExpression(!1, "EOF");
		this.expect("EOF"), this.gullet.endGroup();
		var s = {
			type: "ordgroup",
			mode: this.mode,
			loc: n.loc,
			body: o
		};
		return t && this.switchMode(a), s;
	}
	parseGroup(e, t) {
		var n = this.fetch(), o = n.text, s;
		if (o === "{" || o === "\\begingroup") {
			this.consume();
			var l = o === "{" ? "}" : "\\endgroup";
			this.gullet.beginGroup();
			var u = this.parseExpression(!1, l), d = this.fetch();
			this.expect(l), this.gullet.endGroup(), s = {
				type: "ordgroup",
				mode: this.mode,
				loc: SourceLocation.range(n, d),
				body: u,
				semisimple: o === "\\begingroup" || void 0
			};
		} else if (s = this.parseFunction(t, e) || this.parseSymbol(), s == null && o[0] === "\\" && !implicitCommands.hasOwnProperty(o)) {
			if (this.settings.throwOnError) throw new ParseError("Undefined control sequence: " + o, n);
			s = this.formatUnsupportedCmd(o), this.consume();
		}
		return s;
	}
	formLigatures(e) {
		for (var t = e.length - 1, n = 0; n < t; ++n) {
			var a = e[n];
			if (a.type === "textord") {
				var o = a.text, s = e[n + 1];
				if (!(!s || s.type !== "textord")) {
					if (o === "-" && s.text === "-") {
						var l = e[n + 2];
						n + 1 < t && l && l.type === "textord" && l.text === "-" ? (e.splice(n, 3, {
							type: "textord",
							mode: "text",
							loc: SourceLocation.range(a, l),
							text: "---"
						}), t -= 2) : (e.splice(n, 2, {
							type: "textord",
							mode: "text",
							loc: SourceLocation.range(a, s),
							text: "--"
						}), --t);
					}
					(o === "'" || o === "`") && s.text === o && (e.splice(n, 2, {
						type: "textord",
						mode: "text",
						loc: SourceLocation.range(a, s),
						text: o + o
					}), --t);
				}
			}
		}
	}
	parseSymbol() {
		var e = this.fetch(), t = e.text;
		if (/^\\verb[^a-zA-Z]/.test(t)) {
			this.consume();
			var n = t.slice(5), o = n.charAt(0) === "*";
			if (o && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1)) throw new ParseError("\\verb assertion failed --\n                    please report what input caused this bug");
			return n = n.slice(1, -1), {
				type: "verb",
				mode: "text",
				body: n,
				star: o
			};
		}
		unicodeSymbols.hasOwnProperty(t[0]) && !symbols[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", "Accented Unicode text character \"" + t[0] + "\" used in math mode", e), t = unicodeSymbols[t[0]] + t.slice(1));
		var s = combiningDiacriticalMarksEndRegex.exec(t);
		s && (t = t.substring(0, s.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
		var l;
		if (symbols[this.mode][t]) {
			this.settings.strict && this.mode === "math" && extraLatin.includes(t) && this.settings.reportNonstrict("unicodeTextInMathMode", "Latin-1/Unicode text character \"" + t[0] + "\" used in math mode", e);
			var u = symbols[this.mode][t].group, d = SourceLocation.range(e), f;
			if (ATOMS.hasOwnProperty(u)) {
				var p = u;
				f = {
					type: "atom",
					mode: this.mode,
					family: p,
					loc: d,
					text: t
				};
			} else f = {
				type: u,
				mode: this.mode,
				loc: d,
				text: t
			};
			l = f;
		} else if (t.charCodeAt(0) >= 128) this.settings.strict && (supportedCodepoint(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", "Unicode text character \"" + t[0] + "\" used in math mode", e) : this.settings.reportNonstrict("unknownSymbol", "Unrecognized Unicode character \"" + t[0] + "\"" + (" (" + t.charCodeAt(0) + ")"), e)), l = {
			type: "textord",
			mode: "text",
			loc: SourceLocation.range(e),
			text: t
		};
		else return null;
		if (this.consume(), s) for (var m = 0; m < s[0].length; m++) {
			var h = s[0][m];
			if (!unicodeAccents[h]) throw new ParseError("Unknown accent ' " + h + "'", e);
			var g = unicodeAccents[h][this.mode] || unicodeAccents[h].text;
			if (!g) throw new ParseError("Accent " + h + " unsupported in " + this.mode + " mode", e);
			l = {
				type: "accent",
				mode: this.mode,
				loc: SourceLocation.range(e),
				label: g,
				isStretchy: !1,
				isShifty: !0,
				base: l
			};
		}
		return l;
	}
};
Parser.endOfExpression = new Set([
	"}",
	"\\endgroup",
	"\\end",
	"\\right",
	"&"
]);
var parseTree = function(e, t) {
	if (!(typeof e == "string" || e instanceof String)) throw TypeError("KaTeX can only parse string typed expression");
	var n = new Parser(e, t);
	delete n.gullet.macros.current["\\df@tag"];
	var o = n.parse();
	if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
		if (!t.displayMode) throw new ParseError("\\tag works only in display equations");
		o = [{
			type: "tag",
			mode: "text",
			body: o,
			tag: n.subparse([new Token("\\df@tag")])
		}];
	}
	return o;
}, render = function(e, t, n) {
	t.textContent = "";
	var a = renderToDomTree(e, n).toNode();
	t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), render = function() {
	throw new ParseError("KaTeX doesn't work in quirks mode.");
});
var renderToString = function(e, t) {
	return renderToDomTree(e, t).toMarkup();
}, generateParseTree = function(e, t) {
	return parseTree(e, new Settings(t));
}, renderError = function(e, t, n) {
	if (n.throwOnError || !(e instanceof ParseError)) throw e;
	var o = makeSpan(["katex-error"], [new SymbolNode(t)]);
	return o.setAttribute("title", e.toString()), o.setAttribute("style", "color:" + n.errorColor), o;
}, renderToDomTree = function(e, t) {
	var n = new Settings(t);
	try {
		return buildTree(parseTree(e, n), e, n);
	} catch (t) {
		return renderError(t, e, n);
	}
}, katex = {
	version: "0.16.45",
	render,
	renderToString,
	ParseError,
	SETTINGS_SCHEMA,
	__parse: generateParseTree,
	__renderToDomTree: renderToDomTree,
	__renderToHTMLTree: function(e, t) {
		var n = new Settings(t);
		try {
			return buildHTMLTree(parseTree(e, n), e, n);
		} catch (t) {
			return renderError(t, e, n);
		}
	},
	__setFontMetrics: setFontMetrics,
	__defineSymbol: defineSymbol,
	__defineFunction: defineFunction,
	__defineMacro: defineMacro,
	__domTree: {
		Span,
		Anchor,
		SymbolNode,
		SvgNode,
		PathNode,
		LineNode
	}
};
function cPlusPlus(e) {
	let t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), a = "decltype\\(auto\\)", o = "[a-zA-Z_]\\w*::", s = "(?!struct)(" + a + "|" + t.optional(o) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", l = {
		className: "type",
		begin: "\\b[a-z\\d_]*_t\\b"
	}, u = {
		className: "string",
		variants: [
			{
				begin: "(u8?|U|L)?\"",
				end: "\"",
				illegal: "\\n",
				contains: [e.BACKSLASH_ESCAPE]
			},
			{
				begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
				end: "'",
				illegal: "."
			},
			e.END_SAME_AS_BEGIN({
				begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
				end: /\)([^()\\ ]{0,16})"/
			})
		]
	}, d = {
		className: "number",
		variants: [{ begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)" }, { begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)" }],
		relevance: 0
	}, f = {
		className: "meta",
		begin: /#\s*[a-z]+\b/,
		end: /$/,
		keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
		contains: [
			{
				begin: /\\\n/,
				relevance: 0
			},
			e.inherit(u, { className: "string" }),
			{
				className: "string",
				begin: /<.*?>/
			},
			n,
			e.C_BLOCK_COMMENT_MODE
		]
	}, p = {
		className: "title",
		begin: t.optional(o) + e.IDENT_RE,
		relevance: 0
	}, m = t.optional(o) + e.IDENT_RE + "\\s*\\(", h = /* @__PURE__ */ "alignas.alignof.and.and_eq.asm.atomic_cancel.atomic_commit.atomic_noexcept.auto.bitand.bitor.break.case.catch.class.co_await.co_return.co_yield.compl.concept.const_cast|10.consteval.constexpr.constinit.continue.decltype.default.delete.do.dynamic_cast|10.else.enum.explicit.export.extern.false.final.for.friend.goto.if.import.inline.module.mutable.namespace.new.noexcept.not.not_eq.nullptr.operator.or.or_eq.override.private.protected.public.reflexpr.register.reinterpret_cast|10.requires.return.sizeof.static_assert.static_cast|10.struct.switch.synchronized.template.this.thread_local.throw.transaction_safe.transaction_safe_dynamic.true.try.typedef.typeid.typename.union.using.virtual.volatile.while.xor.xor_eq".split("."), g = [
		"bool",
		"char",
		"char16_t",
		"char32_t",
		"char8_t",
		"double",
		"float",
		"int",
		"long",
		"short",
		"void",
		"wchar_t",
		"unsigned",
		"signed",
		"const",
		"static"
	], _ = /* @__PURE__ */ "any.auto_ptr.barrier.binary_semaphore.bitset.complex.condition_variable.condition_variable_any.counting_semaphore.deque.false_type.flat_map.flat_set.future.imaginary.initializer_list.istringstream.jthread.latch.lock_guard.multimap.multiset.mutex.optional.ostringstream.packaged_task.pair.promise.priority_queue.queue.recursive_mutex.recursive_timed_mutex.scoped_lock.set.shared_future.shared_lock.shared_mutex.shared_timed_mutex.shared_ptr.stack.string_view.stringstream.timed_mutex.thread.true_type.tuple.unique_lock.unique_ptr.unordered_map.unordered_multimap.unordered_multiset.unordered_set.variant.vector.weak_ptr.wstring.wstring_view".split("."), v = /* @__PURE__ */ "abort.abs.acos.apply.as_const.asin.atan.atan2.calloc.ceil.cerr.cin.clog.cos.cosh.cout.declval.endl.exchange.exit.exp.fabs.floor.fmod.forward.fprintf.fputs.free.frexp.fscanf.future.invoke.isalnum.isalpha.iscntrl.isdigit.isgraph.islower.isprint.ispunct.isspace.isupper.isxdigit.labs.launder.ldexp.log.log10.make_pair.make_shared.make_shared_for_overwrite.make_tuple.make_unique.malloc.memchr.memcmp.memcpy.memset.modf.move.pow.printf.putchar.puts.realloc.scanf.sin.sinh.snprintf.sprintf.sqrt.sscanf.std.stderr.stdin.stdout.strcat.strchr.strcmp.strcpy.strcspn.strlen.strncat.strncmp.strncpy.strpbrk.strrchr.strspn.strstr.swap.tan.tanh.terminate.to_underlying.tolower.toupper.vfprintf.visit.vprintf.vsprintf".split("."), y = {
		type: g,
		keyword: h,
		literal: [
			"NULL",
			"false",
			"nullopt",
			"nullptr",
			"true"
		],
		built_in: ["_Pragma"],
		_type_hints: _
	}, b = {
		className: "function.dispatch",
		relevance: 0,
		keywords: { _hint: v },
		begin: t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/))
	}, x = [
		b,
		f,
		l,
		n,
		e.C_BLOCK_COMMENT_MODE,
		d,
		u
	], C = {
		variants: [
			{
				begin: /=/,
				end: /;/
			},
			{
				begin: /\(/,
				end: /\)/
			},
			{
				beginKeywords: "new throw return else",
				end: /;/
			}
		],
		keywords: y,
		contains: x.concat([{
			begin: /\(/,
			end: /\)/,
			keywords: y,
			contains: x.concat(["self"]),
			relevance: 0
		}]),
		relevance: 0
	}, w = {
		className: "function",
		begin: "(" + s + "[\\*&\\s]+)+" + m,
		returnBegin: !0,
		end: /[{;=]/,
		excludeEnd: !0,
		keywords: y,
		illegal: /[^\w\s\*&:<>.]/,
		contains: [
			{
				begin: a,
				keywords: y,
				relevance: 0
			},
			{
				begin: m,
				returnBegin: !0,
				contains: [p],
				relevance: 0
			},
			{
				begin: /::/,
				relevance: 0
			},
			{
				begin: /:/,
				endsWithParent: !0,
				contains: [u, d]
			},
			{
				relevance: 0,
				match: /,/
			},
			{
				className: "params",
				begin: /\(/,
				end: /\)/,
				keywords: y,
				relevance: 0,
				contains: [
					n,
					e.C_BLOCK_COMMENT_MODE,
					u,
					d,
					l,
					{
						begin: /\(/,
						end: /\)/,
						keywords: y,
						relevance: 0,
						contains: [
							"self",
							n,
							e.C_BLOCK_COMMENT_MODE,
							u,
							d,
							l
						]
					}
				]
			},
			l,
			n,
			e.C_BLOCK_COMMENT_MODE,
			f
		]
	};
	return {
		name: "C++",
		aliases: [
			"cc",
			"c++",
			"h++",
			"hpp",
			"hh",
			"hxx",
			"cxx"
		],
		keywords: y,
		illegal: "</",
		classNameAliases: { "function.dispatch": "built_in" },
		contains: [].concat(C, w, b, x, [
			f,
			{
				begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
				end: ">",
				keywords: y,
				contains: ["self", l]
			},
			{
				begin: e.IDENT_RE + "::",
				keywords: y
			},
			{
				match: [
					/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
					/\s+/,
					/\w+/
				],
				className: {
					1: "keyword",
					3: "title.class"
				}
			}
		])
	};
}
function arduino(e) {
	let t = {
		type: [
			"boolean",
			"byte",
			"word",
			"String"
		],
		built_in: /* @__PURE__ */ "KeyboardController.MouseController.SoftwareSerial.EthernetServer.EthernetClient.LiquidCrystal.RobotControl.GSMVoiceCall.EthernetUDP.EsploraTFT.HttpClient.RobotMotor.WiFiClient.GSMScanner.FileSystem.Scheduler.GSMServer.YunClient.YunServer.IPAddress.GSMClient.GSMModem.Keyboard.Ethernet.Console.GSMBand.Esplora.Stepper.Process.WiFiUDP.GSM_SMS.Mailbox.USBHost.Firmata.PImage.Client.Server.GSMPIN.FileIO.Bridge.Serial.EEPROM.Stream.Mouse.Audio.Servo.File.Task.GPRS.WiFi.Wire.TFT.GSM.SPI.SD".split("."),
		_hints: /* @__PURE__ */ "setup.loop.runShellCommandAsynchronously.analogWriteResolution.retrieveCallingNumber.printFirmwareVersion.analogReadResolution.sendDigitalPortPair.noListenOnLocalhost.readJoystickButton.setFirmwareVersion.readJoystickSwitch.scrollDisplayRight.getVoiceCallStatus.scrollDisplayLeft.writeMicroseconds.delayMicroseconds.beginTransmission.getSignalStrength.runAsynchronously.getAsynchronously.listenOnLocalhost.getCurrentCarrier.readAccelerometer.messageAvailable.sendDigitalPorts.lineFollowConfig.countryNameWrite.runShellCommand.readStringUntil.rewindDirectory.readTemperature.setClockDivider.readLightSensor.endTransmission.analogReference.detachInterrupt.countryNameRead.attachInterrupt.encryptionType.readBytesUntil.robotNameWrite.readMicrophone.robotNameRead.cityNameWrite.userNameWrite.readJoystickY.readJoystickX.mouseReleased.openNextFile.scanNetworks.noInterrupts.digitalWrite.beginSpeaker.mousePressed.isActionDone.mouseDragged.displayLogos.noAutoscroll.addParameter.remoteNumber.getModifiers.keyboardRead.userNameRead.waitContinue.processInput.parseCommand.printVersion.readNetworks.writeMessage.blinkVersion.cityNameRead.readMessage.setDataMode.parsePacket.isListening.setBitOrder.beginPacket.isDirectory.motorsWrite.drawCompass.digitalRead.clearScreen.serialEvent.rightToLeft.setTextSize.leftToRight.requestFrom.keyReleased.compassRead.analogWrite.interrupts.WiFiServer.disconnect.playMelody.parseFloat.autoscroll.getPINUsed.setPINUsed.setTimeout.sendAnalog.readSlider.analogRead.beginWrite.createChar.motorsStop.keyPressed.tempoWrite.readButton.subnetMask.debugPrint.macAddress.writeGreen.randomSeed.attachGPRS.readString.sendString.remotePort.releaseAll.mouseMoved.background.getXChange.getYChange.answerCall.getResult.voiceCall.endPacket.constrain.getSocket.writeJSON.getButton.available.connected.findUntil.readBytes.exitValue.readGreen.writeBlue.startLoop.IPAddress.isPressed.sendSysex.pauseMode.gatewayIP.setCursor.getOemKey.tuneWrite.noDisplay.loadImage.switchPIN.onRequest.onReceive.changePIN.playFile.noBuffer.parseInt.overflow.checkPIN.knobRead.beginTFT.bitClear.updateIR.bitWrite.position.writeRGB.highByte.writeRed.setSpeed.readBlue.noStroke.remoteIP.transfer.shutdown.hangCall.beginSMS.endWrite.attached.maintain.noCursor.checkReg.checkPUK.shiftOut.isValid.shiftIn.pulseIn.connect.println.localIP.pinMode.getIMEI.display.noBlink.process.getBand.running.beginSD.drawBMP.lowByte.setBand.release.bitRead.prepare.pointTo.readRed.setMode.noFill.remove.listen.stroke.detach.attach.noTone.exists.buffer.height.bitSet.circle.config.cursor.random.IRread.setDNS.endSMS.getKey.micros.millis.begin.print.write.ready.flush.width.isPIN.blink.clear.press.mkdir.rmdir.close.point.yield.image.BSSID.click.delay.read.text.move.peek.beep.rect.line.open.seek.fill.size.turn.stop.home.find.step.tone.sqrt.RSSI.SSID.end.bit.tan.cos.sin.pow.map.abs.max.min.get.run.put".split("."),
		literal: [
			"DIGITAL_MESSAGE",
			"FIRMATA_STRING",
			"ANALOG_MESSAGE",
			"REPORT_DIGITAL",
			"REPORT_ANALOG",
			"INPUT_PULLUP",
			"SET_PIN_MODE",
			"INTERNAL2V56",
			"SYSTEM_RESET",
			"LED_BUILTIN",
			"INTERNAL1V1",
			"SYSEX_START",
			"INTERNAL",
			"EXTERNAL",
			"DEFAULT",
			"OUTPUT",
			"INPUT",
			"HIGH",
			"LOW"
		]
	}, n = cPlusPlus(e), a = n.keywords;
	return a.type = [...a.type, ...t.type], a.literal = [...a.literal, ...t.literal], a.built_in = [...a.built_in, ...t.built_in], a._hints = t._hints, n.name = "Arduino", n.aliases = ["ino"], n.supersetOf = "cpp", n;
}
function bash(e) {
	let t = e.regex, n = {}, a = {
		begin: /\$\{/,
		end: /\}/,
		contains: ["self", {
			begin: /:-/,
			contains: [n]
		}]
	};
	Object.assign(n, {
		className: "variable",
		variants: [{ begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])") }, a]
	});
	let o = {
		className: "subst",
		begin: /\$\(/,
		end: /\)/,
		contains: [e.BACKSLASH_ESCAPE]
	}, s = e.inherit(e.COMMENT(), {
		match: [/(^|\s)/, /#.*$/],
		scope: { 2: "comment" }
	}), l = {
		begin: /<<-?\s*(?=\w+)/,
		starts: { contains: [e.END_SAME_AS_BEGIN({
			begin: /(\w+)/,
			end: /(\w+)/,
			className: "string"
		})] }
	}, u = {
		className: "string",
		begin: /"/,
		end: /"/,
		contains: [
			e.BACKSLASH_ESCAPE,
			n,
			o
		]
	};
	o.contains.push(u);
	let d = { match: /\\"/ }, f = {
		className: "string",
		begin: /'/,
		end: /'/
	}, p = { match: /\\'/ }, m = {
		begin: /\$?\(\(/,
		end: /\)\)/,
		contains: [
			{
				begin: /\d+#[0-9a-f]+/,
				className: "number"
			},
			e.NUMBER_MODE,
			n
		]
	}, h = e.SHEBANG({
		binary: `(${[
			"fish",
			"bash",
			"zsh",
			"sh",
			"csh",
			"ksh",
			"tcsh",
			"dash",
			"scsh"
		].join("|")})`,
		relevance: 10
	}), g = {
		className: "function",
		begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
		returnBegin: !0,
		contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
		relevance: 0
	}, _ = [
		"if",
		"then",
		"else",
		"elif",
		"fi",
		"time",
		"for",
		"while",
		"until",
		"in",
		"do",
		"done",
		"case",
		"esac",
		"coproc",
		"function",
		"select"
	], v = ["true", "false"], y = { match: /(\/[a-z._-]+)+/ }, b = [
		"break",
		"cd",
		"continue",
		"eval",
		"exec",
		"exit",
		"export",
		"getopts",
		"hash",
		"pwd",
		"readonly",
		"return",
		"shift",
		"test",
		"times",
		"trap",
		"umask",
		"unset"
	], x = [
		"alias",
		"bind",
		"builtin",
		"caller",
		"command",
		"declare",
		"echo",
		"enable",
		"help",
		"let",
		"local",
		"logout",
		"mapfile",
		"printf",
		"read",
		"readarray",
		"source",
		"sudo",
		"type",
		"typeset",
		"ulimit",
		"unalias"
	], C = /* @__PURE__ */ "autoload.bg.bindkey.bye.cap.chdir.clone.comparguments.compcall.compctl.compdescribe.compfiles.compgroups.compquote.comptags.comptry.compvalues.dirs.disable.disown.echotc.echoti.emulate.fc.fg.float.functions.getcap.getln.history.integer.jobs.kill.limit.log.noglob.popd.print.pushd.pushln.rehash.sched.setcap.setopt.stat.suspend.ttyctl.unfunction.unhash.unlimit.unsetopt.vared.wait.whence.where.which.zcompile.zformat.zftp.zle.zmodload.zparseopts.zprof.zpty.zregexparse.zsocket.zstyle.ztcp".split("."), w = /* @__PURE__ */ "chcon.chgrp.chown.chmod.cp.dd.df.dir.dircolors.ln.ls.mkdir.mkfifo.mknod.mktemp.mv.realpath.rm.rmdir.shred.sync.touch.truncate.vdir.b2sum.base32.base64.cat.cksum.comm.csplit.cut.expand.fmt.fold.head.join.md5sum.nl.numfmt.od.paste.ptx.pr.sha1sum.sha224sum.sha256sum.sha384sum.sha512sum.shuf.sort.split.sum.tac.tail.tr.tsort.unexpand.uniq.wc.arch.basename.chroot.date.dirname.du.echo.env.expr.factor.groups.hostid.id.link.logname.nice.nohup.nproc.pathchk.pinky.printenv.printf.pwd.readlink.runcon.seq.sleep.stat.stdbuf.stty.tee.test.timeout.tty.uname.unlink.uptime.users.who.whoami.yes".split(".");
	return {
		name: "Bash",
		aliases: ["sh", "zsh"],
		keywords: {
			$pattern: /\b[a-z][a-z0-9._-]+\b/,
			keyword: _,
			literal: v,
			built_in: [
				...b,
				...x,
				"set",
				"shopt",
				...C,
				...w
			]
		},
		contains: [
			h,
			e.SHEBANG(),
			g,
			m,
			s,
			l,
			y,
			u,
			d,
			f,
			p,
			n
		]
	};
}
function c(e) {
	let t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), a = "decltype\\(auto\\)", o = "[a-zA-Z_]\\w*::", s = "(" + a + "|" + t.optional(o) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", l = {
		className: "type",
		variants: [{ begin: "\\b[a-z\\d_]*_t\\b" }, { match: /\batomic_[a-z]{3,6}\b/ }]
	}, u = {
		className: "string",
		variants: [
			{
				begin: "(u8?|U|L)?\"",
				end: "\"",
				illegal: "\\n",
				contains: [e.BACKSLASH_ESCAPE]
			},
			{
				begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
				end: "'",
				illegal: "."
			},
			e.END_SAME_AS_BEGIN({
				begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
				end: /\)([^()\\ ]{0,16})"/
			})
		]
	}, d = {
		className: "number",
		variants: [
			{ match: /\b(0b[01']+)/ },
			{ match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/ },
			{ match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/ },
			{ match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/ }
		],
		relevance: 0
	}, f = {
		className: "meta",
		begin: /#\s*[a-z]+\b/,
		end: /$/,
		keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include" },
		contains: [
			{
				begin: /\\\n/,
				relevance: 0
			},
			e.inherit(u, { className: "string" }),
			{
				className: "string",
				begin: /<.*?>/
			},
			n,
			e.C_BLOCK_COMMENT_MODE
		]
	}, p = {
		className: "title",
		begin: t.optional(o) + e.IDENT_RE,
		relevance: 0
	}, m = t.optional(o) + e.IDENT_RE + "\\s*\\(", h = {
		keyword: /* @__PURE__ */ "asm.auto.break.case.continue.default.do.else.enum.extern.for.fortran.goto.if.inline.register.restrict.return.sizeof.typeof.typeof_unqual.struct.switch.typedef.union.volatile.while._Alignas._Alignof._Atomic._Generic._Noreturn._Static_assert._Thread_local.alignas.alignof.noreturn.static_assert.thread_local._Pragma".split("."),
		type: /* @__PURE__ */ "float.double.signed.unsigned.int.short.long.char.void._Bool._BitInt._Complex._Imaginary._Decimal32._Decimal64._Decimal96._Decimal128._Decimal64x._Decimal128x._Float16._Float32._Float64._Float128._Float32x._Float64x._Float128x.const.static.constexpr.complex.bool.imaginary".split("."),
		literal: "true false NULL",
		built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
	}, g = [
		f,
		l,
		n,
		e.C_BLOCK_COMMENT_MODE,
		d,
		u
	], _ = {
		variants: [
			{
				begin: /=/,
				end: /;/
			},
			{
				begin: /\(/,
				end: /\)/
			},
			{
				beginKeywords: "new throw return else",
				end: /;/
			}
		],
		keywords: h,
		contains: g.concat([{
			begin: /\(/,
			end: /\)/,
			keywords: h,
			contains: g.concat(["self"]),
			relevance: 0
		}]),
		relevance: 0
	}, v = {
		begin: "(" + s + "[\\*&\\s]+)+" + m,
		returnBegin: !0,
		end: /[{;=]/,
		excludeEnd: !0,
		keywords: h,
		illegal: /[^\w\s\*&:<>.]/,
		contains: [
			{
				begin: a,
				keywords: h,
				relevance: 0
			},
			{
				begin: m,
				returnBegin: !0,
				contains: [e.inherit(p, { className: "title.function" })],
				relevance: 0
			},
			{
				relevance: 0,
				match: /,/
			},
			{
				className: "params",
				begin: /\(/,
				end: /\)/,
				keywords: h,
				relevance: 0,
				contains: [
					n,
					e.C_BLOCK_COMMENT_MODE,
					u,
					d,
					l,
					{
						begin: /\(/,
						end: /\)/,
						keywords: h,
						relevance: 0,
						contains: [
							"self",
							n,
							e.C_BLOCK_COMMENT_MODE,
							u,
							d,
							l
						]
					}
				]
			},
			l,
			n,
			e.C_BLOCK_COMMENT_MODE,
			f
		]
	};
	return {
		name: "C",
		aliases: ["h"],
		keywords: h,
		disableAutodetect: !0,
		illegal: "</",
		contains: [].concat(_, v, g, [
			f,
			{
				begin: e.IDENT_RE + "::",
				keywords: h
			},
			{
				className: "class",
				beginKeywords: "enum class struct union",
				end: /[{;:<>=]/,
				contains: [{ beginKeywords: "final class struct" }, e.TITLE_MODE]
			}
		]),
		exports: {
			preprocessor: f,
			strings: u,
			keywords: h
		}
	};
}
function cpp(e) {
	let t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), a = "decltype\\(auto\\)", o = "[a-zA-Z_]\\w*::", s = "(?!struct)(" + a + "|" + t.optional(o) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", l = {
		className: "type",
		begin: "\\b[a-z\\d_]*_t\\b"
	}, u = {
		className: "string",
		variants: [
			{
				begin: "(u8?|U|L)?\"",
				end: "\"",
				illegal: "\\n",
				contains: [e.BACKSLASH_ESCAPE]
			},
			{
				begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
				end: "'",
				illegal: "."
			},
			e.END_SAME_AS_BEGIN({
				begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
				end: /\)([^()\\ ]{0,16})"/
			})
		]
	}, d = {
		className: "number",
		variants: [{ begin: "[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)" }, { begin: "[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)" }],
		relevance: 0
	}, f = {
		className: "meta",
		begin: /#\s*[a-z]+\b/,
		end: /$/,
		keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" },
		contains: [
			{
				begin: /\\\n/,
				relevance: 0
			},
			e.inherit(u, { className: "string" }),
			{
				className: "string",
				begin: /<.*?>/
			},
			n,
			e.C_BLOCK_COMMENT_MODE
		]
	}, p = {
		className: "title",
		begin: t.optional(o) + e.IDENT_RE,
		relevance: 0
	}, m = t.optional(o) + e.IDENT_RE + "\\s*\\(", h = /* @__PURE__ */ "alignas.alignof.and.and_eq.asm.atomic_cancel.atomic_commit.atomic_noexcept.auto.bitand.bitor.break.case.catch.class.co_await.co_return.co_yield.compl.concept.const_cast|10.consteval.constexpr.constinit.continue.decltype.default.delete.do.dynamic_cast|10.else.enum.explicit.export.extern.false.final.for.friend.goto.if.import.inline.module.mutable.namespace.new.noexcept.not.not_eq.nullptr.operator.or.or_eq.override.private.protected.public.reflexpr.register.reinterpret_cast|10.requires.return.sizeof.static_assert.static_cast|10.struct.switch.synchronized.template.this.thread_local.throw.transaction_safe.transaction_safe_dynamic.true.try.typedef.typeid.typename.union.using.virtual.volatile.while.xor.xor_eq".split("."), g = [
		"bool",
		"char",
		"char16_t",
		"char32_t",
		"char8_t",
		"double",
		"float",
		"int",
		"long",
		"short",
		"void",
		"wchar_t",
		"unsigned",
		"signed",
		"const",
		"static"
	], _ = /* @__PURE__ */ "any.auto_ptr.barrier.binary_semaphore.bitset.complex.condition_variable.condition_variable_any.counting_semaphore.deque.false_type.flat_map.flat_set.future.imaginary.initializer_list.istringstream.jthread.latch.lock_guard.multimap.multiset.mutex.optional.ostringstream.packaged_task.pair.promise.priority_queue.queue.recursive_mutex.recursive_timed_mutex.scoped_lock.set.shared_future.shared_lock.shared_mutex.shared_timed_mutex.shared_ptr.stack.string_view.stringstream.timed_mutex.thread.true_type.tuple.unique_lock.unique_ptr.unordered_map.unordered_multimap.unordered_multiset.unordered_set.variant.vector.weak_ptr.wstring.wstring_view".split("."), v = /* @__PURE__ */ "abort.abs.acos.apply.as_const.asin.atan.atan2.calloc.ceil.cerr.cin.clog.cos.cosh.cout.declval.endl.exchange.exit.exp.fabs.floor.fmod.forward.fprintf.fputs.free.frexp.fscanf.future.invoke.isalnum.isalpha.iscntrl.isdigit.isgraph.islower.isprint.ispunct.isspace.isupper.isxdigit.labs.launder.ldexp.log.log10.make_pair.make_shared.make_shared_for_overwrite.make_tuple.make_unique.malloc.memchr.memcmp.memcpy.memset.modf.move.pow.printf.putchar.puts.realloc.scanf.sin.sinh.snprintf.sprintf.sqrt.sscanf.std.stderr.stdin.stdout.strcat.strchr.strcmp.strcpy.strcspn.strlen.strncat.strncmp.strncpy.strpbrk.strrchr.strspn.strstr.swap.tan.tanh.terminate.to_underlying.tolower.toupper.vfprintf.visit.vprintf.vsprintf".split("."), y = {
		type: g,
		keyword: h,
		literal: [
			"NULL",
			"false",
			"nullopt",
			"nullptr",
			"true"
		],
		built_in: ["_Pragma"],
		_type_hints: _
	}, b = {
		className: "function.dispatch",
		relevance: 0,
		keywords: { _hint: v },
		begin: t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/))
	}, x = [
		b,
		f,
		l,
		n,
		e.C_BLOCK_COMMENT_MODE,
		d,
		u
	], C = {
		variants: [
			{
				begin: /=/,
				end: /;/
			},
			{
				begin: /\(/,
				end: /\)/
			},
			{
				beginKeywords: "new throw return else",
				end: /;/
			}
		],
		keywords: y,
		contains: x.concat([{
			begin: /\(/,
			end: /\)/,
			keywords: y,
			contains: x.concat(["self"]),
			relevance: 0
		}]),
		relevance: 0
	}, w = {
		className: "function",
		begin: "(" + s + "[\\*&\\s]+)+" + m,
		returnBegin: !0,
		end: /[{;=]/,
		excludeEnd: !0,
		keywords: y,
		illegal: /[^\w\s\*&:<>.]/,
		contains: [
			{
				begin: a,
				keywords: y,
				relevance: 0
			},
			{
				begin: m,
				returnBegin: !0,
				contains: [p],
				relevance: 0
			},
			{
				begin: /::/,
				relevance: 0
			},
			{
				begin: /:/,
				endsWithParent: !0,
				contains: [u, d]
			},
			{
				relevance: 0,
				match: /,/
			},
			{
				className: "params",
				begin: /\(/,
				end: /\)/,
				keywords: y,
				relevance: 0,
				contains: [
					n,
					e.C_BLOCK_COMMENT_MODE,
					u,
					d,
					l,
					{
						begin: /\(/,
						end: /\)/,
						keywords: y,
						relevance: 0,
						contains: [
							"self",
							n,
							e.C_BLOCK_COMMENT_MODE,
							u,
							d,
							l
						]
					}
				]
			},
			l,
			n,
			e.C_BLOCK_COMMENT_MODE,
			f
		]
	};
	return {
		name: "C++",
		aliases: [
			"cc",
			"c++",
			"h++",
			"hpp",
			"hh",
			"hxx",
			"cxx"
		],
		keywords: y,
		illegal: "</",
		classNameAliases: { "function.dispatch": "built_in" },
		contains: [].concat(C, w, b, x, [
			f,
			{
				begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",
				end: ">",
				keywords: y,
				contains: ["self", l]
			},
			{
				begin: e.IDENT_RE + "::",
				keywords: y
			},
			{
				match: [
					/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
					/\s+/,
					/\w+/
				],
				className: {
					1: "keyword",
					3: "title.class"
				}
			}
		])
	};
}
function csharp(e) {
	let t = [
		"bool",
		"byte",
		"char",
		"decimal",
		"delegate",
		"double",
		"dynamic",
		"enum",
		"float",
		"int",
		"long",
		"nint",
		"nuint",
		"object",
		"sbyte",
		"short",
		"string",
		"ulong",
		"uint",
		"ushort"
	], n = [
		"public",
		"private",
		"protected",
		"static",
		"internal",
		"protected",
		"abstract",
		"async",
		"extern",
		"override",
		"unsafe",
		"virtual",
		"new",
		"sealed",
		"partial"
	], a = {
		keyword: (/* @__PURE__ */ "abstract.as.base.break.case.catch.class.const.continue.do.else.event.explicit.extern.finally.fixed.for.foreach.goto.if.implicit.in.interface.internal.is.lock.namespace.new.operator.out.override.params.private.protected.public.readonly.record.ref.return.scoped.sealed.sizeof.stackalloc.static.struct.switch.this.throw.try.typeof.unchecked.unsafe.using.virtual.void.volatile.while".split(".")).concat(/* @__PURE__ */ "add.alias.and.ascending.args.async.await.by.descending.dynamic.equals.file.from.get.global.group.init.into.join.let.nameof.not.notnull.on.or.orderby.partial.record.remove.required.scoped.select.set.unmanaged.value|0.var.when.where.with.yield".split(".")),
		built_in: t,
		literal: [
			"default",
			"false",
			"null",
			"true"
		]
	}, o = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), s = {
		className: "number",
		variants: [
			{ begin: "\\b(0b[01']+)" },
			{ begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
			{ begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }
		],
		relevance: 0
	}, l = {
		className: "string",
		begin: /"""("*)(?!")(.|\n)*?"""\1/,
		relevance: 1
	}, u = {
		className: "string",
		begin: "@\"",
		end: "\"",
		contains: [{ begin: "\"\"" }]
	}, d = e.inherit(u, { illegal: /\n/ }), f = {
		className: "subst",
		begin: /\{/,
		end: /\}/,
		keywords: a
	}, p = e.inherit(f, { illegal: /\n/ }), m = {
		className: "string",
		begin: /\$"/,
		end: "\"",
		illegal: /\n/,
		contains: [
			{ begin: /\{\{/ },
			{ begin: /\}\}/ },
			e.BACKSLASH_ESCAPE,
			p
		]
	}, h = {
		className: "string",
		begin: /\$@"/,
		end: "\"",
		contains: [
			{ begin: /\{\{/ },
			{ begin: /\}\}/ },
			{ begin: "\"\"" },
			f
		]
	}, g = e.inherit(h, {
		illegal: /\n/,
		contains: [
			{ begin: /\{\{/ },
			{ begin: /\}\}/ },
			{ begin: "\"\"" },
			p
		]
	});
	f.contains = [
		h,
		m,
		u,
		e.APOS_STRING_MODE,
		e.QUOTE_STRING_MODE,
		s,
		e.C_BLOCK_COMMENT_MODE
	], p.contains = [
		g,
		m,
		d,
		e.APOS_STRING_MODE,
		e.QUOTE_STRING_MODE,
		s,
		e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ })
	];
	let _ = { variants: [
		l,
		h,
		m,
		u,
		e.APOS_STRING_MODE,
		e.QUOTE_STRING_MODE
	] }, v = {
		begin: "<",
		end: ">",
		contains: [{ beginKeywords: "in out" }, o]
	}, y = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", b = {
		begin: "@" + e.IDENT_RE,
		relevance: 0
	};
	return {
		name: "C#",
		aliases: ["cs", "c#"],
		keywords: a,
		illegal: /::/,
		contains: [
			e.COMMENT("///", "$", {
				returnBegin: !0,
				contains: [{
					className: "doctag",
					variants: [
						{
							begin: "///",
							relevance: 0
						},
						{ begin: "<!--|-->" },
						{
							begin: "</?",
							end: ">"
						}
					]
				}]
			}),
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE,
			{
				className: "meta",
				begin: "#",
				end: "$",
				keywords: { keyword: "if else elif endif define undef warning error line region endregion pragma checksum" }
			},
			_,
			s,
			{
				beginKeywords: "class interface",
				relevance: 0,
				end: /[{;=]/,
				illegal: /[^\s:,]/,
				contains: [
					{ beginKeywords: "where class" },
					o,
					v,
					e.C_LINE_COMMENT_MODE,
					e.C_BLOCK_COMMENT_MODE
				]
			},
			{
				beginKeywords: "namespace",
				relevance: 0,
				end: /[{;=]/,
				illegal: /[^\s:]/,
				contains: [
					o,
					e.C_LINE_COMMENT_MODE,
					e.C_BLOCK_COMMENT_MODE
				]
			},
			{
				beginKeywords: "record",
				relevance: 0,
				end: /[{;=]/,
				illegal: /[^\s:]/,
				contains: [
					o,
					v,
					e.C_LINE_COMMENT_MODE,
					e.C_BLOCK_COMMENT_MODE
				]
			},
			{
				className: "meta",
				begin: "^\\s*\\[(?=[\\w])",
				excludeBegin: !0,
				end: "\\]",
				excludeEnd: !0,
				contains: [{
					className: "string",
					begin: /"/,
					end: /"/
				}]
			},
			{
				beginKeywords: "new return throw await else",
				relevance: 0
			},
			{
				className: "function",
				begin: "(" + y + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
				returnBegin: !0,
				end: /\s*[{;=]/,
				excludeEnd: !0,
				keywords: a,
				contains: [
					{
						beginKeywords: n.join(" "),
						relevance: 0
					},
					{
						begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
						returnBegin: !0,
						contains: [e.TITLE_MODE, v],
						relevance: 0
					},
					{ match: /\(\)/ },
					{
						className: "params",
						begin: /\(/,
						end: /\)/,
						excludeBegin: !0,
						excludeEnd: !0,
						keywords: a,
						relevance: 0,
						contains: [
							_,
							s,
							e.C_BLOCK_COMMENT_MODE
						]
					},
					e.C_LINE_COMMENT_MODE,
					e.C_BLOCK_COMMENT_MODE
				]
			},
			b
		]
	};
}
var MODES$3 = (e) => ({
	IMPORTANT: {
		scope: "meta",
		begin: "!important"
	},
	BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
	HEXCOLOR: {
		scope: "number",
		begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
	},
	FUNCTION_DISPATCH: {
		className: "built_in",
		begin: /[\w-]+(?=\()/
	},
	ATTRIBUTE_SELECTOR_MODE: {
		scope: "selector-attr",
		begin: /\[/,
		end: /\]/,
		illegal: "$",
		contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
	},
	CSS_NUMBER_MODE: {
		scope: "number",
		begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
		relevance: 0
	},
	CSS_VARIABLE: {
		className: "attr",
		begin: /--[A-Za-z_][A-Za-z0-9_-]*/
	}
}), HTML_TAGS$2 = /* @__PURE__ */ "a.abbr.address.article.aside.audio.b.blockquote.body.button.canvas.caption.cite.code.dd.del.details.dfn.div.dl.dt.em.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.html.i.iframe.img.input.ins.kbd.label.legend.li.main.mark.menu.nav.object.ol.optgroup.option.p.picture.q.quote.samp.section.select.source.span.strong.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.ul.var.video".split("."), SVG_TAGS$2 = /* @__PURE__ */ "defs.g.marker.mask.pattern.svg.switch.symbol.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feFlood.feGaussianBlur.feImage.feMerge.feMorphology.feOffset.feSpecularLighting.feTile.feTurbulence.linearGradient.radialGradient.stop.circle.ellipse.image.line.path.polygon.polyline.rect.text.use.textPath.tspan.foreignObject.clipPath".split("."), TAGS$2 = [...HTML_TAGS$2, ...SVG_TAGS$2], MEDIA_FEATURES$2 = (/* @__PURE__ */ "any-hover.any-pointer.aspect-ratio.color.color-gamut.color-index.device-aspect-ratio.device-height.device-width.display-mode.forced-colors.grid.height.hover.inverted-colors.monochrome.orientation.overflow-block.overflow-inline.pointer.prefers-color-scheme.prefers-contrast.prefers-reduced-motion.prefers-reduced-transparency.resolution.scan.scripting.update.width.min-width.max-width.min-height.max-height".split(".")).sort().reverse(), PSEUDO_CLASSES$2 = (/* @__PURE__ */ "active.any-link.blank.checked.current.default.defined.dir.disabled.drop.empty.enabled.first.first-child.first-of-type.fullscreen.future.focus.focus-visible.focus-within.has.host.host-context.hover.indeterminate.in-range.invalid.is.lang.last-child.last-of-type.left.link.local-link.not.nth-child.nth-col.nth-last-child.nth-last-col.nth-last-of-type.nth-of-type.only-child.only-of-type.optional.out-of-range.past.placeholder-shown.read-only.read-write.required.right.root.scope.target.target-within.user-invalid.valid.visited.where".split(".")).sort().reverse(), PSEUDO_ELEMENTS$2 = [
	"after",
	"backdrop",
	"before",
	"cue",
	"cue-region",
	"first-letter",
	"first-line",
	"grammar-error",
	"marker",
	"part",
	"placeholder",
	"selection",
	"slotted",
	"spelling-error"
].sort().reverse(), ATTRIBUTES$2 = (/* @__PURE__ */ "accent-color.align-content.align-items.align-self.alignment-baseline.all.anchor-name.animation.animation-composition.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-range.animation-range-end.animation-range-start.animation-timeline.animation-timing-function.appearance.aspect-ratio.backdrop-filter.backface-visibility.background.background-attachment.background-blend-mode.background-clip.background-color.background-image.background-origin.background-position.background-position-x.background-position-y.background-repeat.background-size.baseline-shift.block-size.border.border-block.border-block-color.border-block-end.border-block-end-color.border-block-end-style.border-block-end-width.border-block-start.border-block-start-color.border-block-start-style.border-block-start-width.border-block-style.border-block-width.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-end-end-radius.border-end-start-radius.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-inline.border-inline-color.border-inline-end.border-inline-end-color.border-inline-end-style.border-inline-end-width.border-inline-start.border-inline-start-color.border-inline-start-style.border-inline-start-width.border-inline-style.border-inline-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-start-end-radius.border-start-start-radius.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-align.box-decoration-break.box-direction.box-flex.box-flex-group.box-lines.box-ordinal-group.box-orient.box-pack.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.caret-color.clear.clip.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.color-scheme.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.column-span.column-width.columns.contain.contain-intrinsic-block-size.contain-intrinsic-height.contain-intrinsic-inline-size.contain-intrinsic-size.contain-intrinsic-width.container.container-name.container-type.content.content-visibility.counter-increment.counter-reset.counter-set.cue.cue-after.cue-before.cursor.cx.cy.direction.display.dominant-baseline.empty-cells.enable-background.field-sizing.fill.fill-opacity.fill-rule.filter.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.flood-color.flood-opacity.flow.font.font-display.font-family.font-feature-settings.font-kerning.font-language-override.font-optical-sizing.font-palette.font-size.font-size-adjust.font-smooth.font-smoothing.font-stretch.font-style.font-synthesis.font-synthesis-position.font-synthesis-small-caps.font-synthesis-style.font-synthesis-weight.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-emoji.font-variant-ligatures.font-variant-numeric.font-variant-position.font-variation-settings.font-weight.forced-color-adjust.gap.glyph-orientation-horizontal.glyph-orientation-vertical.grid.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-column.grid-column-end.grid-column-start.grid-gap.grid-row.grid-row-end.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.hanging-punctuation.height.hyphenate-character.hyphenate-limit-chars.hyphens.icon.image-orientation.image-rendering.image-resolution.ime-mode.initial-letter.initial-letter-align.inline-size.inset.inset-area.inset-block.inset-block-end.inset-block-start.inset-inline.inset-inline-end.inset-inline-start.isolation.justify-content.justify-items.justify-self.kerning.left.letter-spacing.lighting-color.line-break.line-height.line-height-step.list-style.list-style-image.list-style-position.list-style-type.margin.margin-block.margin-block-end.margin-block-start.margin-bottom.margin-inline.margin-inline-end.margin-inline-start.margin-left.margin-right.margin-top.margin-trim.marker.marker-end.marker-mid.marker-start.marks.mask.mask-border.mask-border-mode.mask-border-outset.mask-border-repeat.mask-border-slice.mask-border-source.mask-border-width.mask-clip.mask-composite.mask-image.mask-mode.mask-origin.mask-position.mask-repeat.mask-size.mask-type.masonry-auto-flow.math-depth.math-shift.math-style.max-block-size.max-height.max-inline-size.max-width.min-block-size.min-height.min-inline-size.min-width.mix-blend-mode.nav-down.nav-index.nav-left.nav-right.nav-up.none.normal.object-fit.object-position.offset.offset-anchor.offset-distance.offset-path.offset-position.offset-rotate.opacity.order.orphans.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-anchor.overflow-block.overflow-clip-margin.overflow-inline.overflow-wrap.overflow-x.overflow-y.overlay.overscroll-behavior.overscroll-behavior-block.overscroll-behavior-inline.overscroll-behavior-x.overscroll-behavior-y.padding.padding-block.padding-block-end.padding-block-start.padding-bottom.padding-inline.padding-inline-end.padding-inline-start.padding-left.padding-right.padding-top.page.page-break-after.page-break-before.page-break-inside.paint-order.pause.pause-after.pause-before.perspective.perspective-origin.place-content.place-items.place-self.pointer-events.position.position-anchor.position-visibility.print-color-adjust.quotes.r.resize.rest.rest-after.rest-before.right.rotate.row-gap.ruby-align.ruby-position.scale.scroll-behavior.scroll-margin.scroll-margin-block.scroll-margin-block-end.scroll-margin-block-start.scroll-margin-bottom.scroll-margin-inline.scroll-margin-inline-end.scroll-margin-inline-start.scroll-margin-left.scroll-margin-right.scroll-margin-top.scroll-padding.scroll-padding-block.scroll-padding-block-end.scroll-padding-block-start.scroll-padding-bottom.scroll-padding-inline.scroll-padding-inline-end.scroll-padding-inline-start.scroll-padding-left.scroll-padding-right.scroll-padding-top.scroll-snap-align.scroll-snap-stop.scroll-snap-type.scroll-timeline.scroll-timeline-axis.scroll-timeline-name.scrollbar-color.scrollbar-gutter.scrollbar-width.shape-image-threshold.shape-margin.shape-outside.shape-rendering.speak.speak-as.src.stop-color.stop-opacity.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.table-layout.text-align.text-align-all.text-align-last.text-anchor.text-combine-upright.text-decoration.text-decoration-color.text-decoration-line.text-decoration-skip.text-decoration-skip-ink.text-decoration-style.text-decoration-thickness.text-emphasis.text-emphasis-color.text-emphasis-position.text-emphasis-style.text-indent.text-justify.text-orientation.text-overflow.text-rendering.text-shadow.text-size-adjust.text-transform.text-underline-offset.text-underline-position.text-wrap.text-wrap-mode.text-wrap-style.timeline-scope.top.touch-action.transform.transform-box.transform-origin.transform-style.transition.transition-behavior.transition-delay.transition-duration.transition-property.transition-timing-function.translate.unicode-bidi.user-modify.user-select.vector-effect.vertical-align.view-timeline.view-timeline-axis.view-timeline-inset.view-timeline-name.view-transition-name.visibility.voice-balance.voice-duration.voice-family.voice-pitch.voice-range.voice-rate.voice-stress.voice-volume.white-space.white-space-collapse.widows.width.will-change.word-break.word-spacing.word-wrap.writing-mode.x.y.z-index.zoom".split(".")).sort().reverse();
function css(e) {
	let t = e.regex, n = MODES$3(e), a = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, o = /@-?\w[\w]*(-\w+)*/, s = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
	return {
		name: "CSS",
		case_insensitive: !0,
		illegal: /[=|'\$]/,
		keywords: { keyframePosition: "from to" },
		classNameAliases: { keyframePosition: "selector-tag" },
		contains: [
			n.BLOCK_COMMENT,
			a,
			n.CSS_NUMBER_MODE,
			{
				className: "selector-id",
				begin: /#[A-Za-z0-9_-]+/,
				relevance: 0
			},
			{
				className: "selector-class",
				begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
				relevance: 0
			},
			n.ATTRIBUTE_SELECTOR_MODE,
			{
				className: "selector-pseudo",
				variants: [{ begin: ":(" + PSEUDO_CLASSES$2.join("|") + ")" }, { begin: ":(:)?(" + PSEUDO_ELEMENTS$2.join("|") + ")" }]
			},
			n.CSS_VARIABLE,
			{
				className: "attribute",
				begin: "\\b(" + ATTRIBUTES$2.join("|") + ")\\b"
			},
			{
				begin: /:/,
				end: /[;}{]/,
				contains: [
					n.BLOCK_COMMENT,
					n.HEXCOLOR,
					n.IMPORTANT,
					n.CSS_NUMBER_MODE,
					...s,
					{
						begin: /(url|data-uri)\(/,
						end: /\)/,
						relevance: 0,
						keywords: { built_in: "url data-uri" },
						contains: [...s, {
							className: "string",
							begin: /[^)]/,
							endsWithParent: !0,
							excludeEnd: !0
						}]
					},
					n.FUNCTION_DISPATCH
				]
			},
			{
				begin: t.lookahead(/@/),
				end: "[{;]",
				relevance: 0,
				illegal: /:/,
				contains: [{
					className: "keyword",
					begin: o
				}, {
					begin: /\s/,
					endsWithParent: !0,
					excludeEnd: !0,
					relevance: 0,
					keywords: {
						$pattern: /[a-z-]+/,
						keyword: "and or not only",
						attribute: MEDIA_FEATURES$2.join(" ")
					},
					contains: [
						{
							begin: /[a-z-]+(?=:)/,
							className: "attribute"
						},
						...s,
						n.CSS_NUMBER_MODE
					]
				}]
			},
			{
				className: "selector-tag",
				begin: "\\b(" + TAGS$2.join("|") + ")\\b"
			}
		]
	};
}
function diff(e) {
	let t = e.regex;
	return {
		name: "Diff",
		aliases: ["patch"],
		contains: [
			{
				className: "meta",
				relevance: 10,
				match: t.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
			},
			{
				className: "comment",
				variants: [{
					begin: t.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
					end: /$/
				}, { match: /^\*{15}$/ }]
			},
			{
				className: "addition",
				begin: /^\+/,
				end: /$/
			},
			{
				className: "deletion",
				begin: /^-/,
				end: /$/
			},
			{
				className: "addition",
				begin: /^!/,
				end: /$/
			}
		]
	};
}
function go(e) {
	let t = {
		keyword: [
			"break",
			"case",
			"chan",
			"const",
			"continue",
			"default",
			"defer",
			"else",
			"fallthrough",
			"for",
			"func",
			"go",
			"goto",
			"if",
			"import",
			"interface",
			"map",
			"package",
			"range",
			"return",
			"select",
			"struct",
			"switch",
			"type",
			"var"
		],
		type: [
			"bool",
			"byte",
			"complex64",
			"complex128",
			"error",
			"float32",
			"float64",
			"int8",
			"int16",
			"int32",
			"int64",
			"string",
			"uint8",
			"uint16",
			"uint32",
			"uint64",
			"int",
			"uint",
			"uintptr",
			"rune"
		],
		literal: [
			"true",
			"false",
			"iota",
			"nil"
		],
		built_in: [
			"append",
			"cap",
			"close",
			"complex",
			"copy",
			"imag",
			"len",
			"make",
			"new",
			"panic",
			"print",
			"println",
			"real",
			"recover",
			"delete"
		]
	};
	return {
		name: "Go",
		aliases: ["golang"],
		keywords: t,
		illegal: "</",
		contains: [
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE,
			{
				className: "string",
				variants: [
					e.QUOTE_STRING_MODE,
					e.APOS_STRING_MODE,
					{
						begin: "`",
						end: "`"
					}
				]
			},
			{
				className: "number",
				variants: [
					{
						match: /-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,
						relevance: 0
					},
					{
						match: /-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,
						relevance: 0
					},
					{
						match: /-?\b0[oO](_?[0-7])*i?/,
						relevance: 0
					},
					{
						match: /-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,
						relevance: 0
					},
					{
						match: /-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,
						relevance: 0
					}
				]
			},
			{ begin: /:=/ },
			{
				className: "function",
				beginKeywords: "func",
				end: "\\s*(\\{|$)",
				excludeEnd: !0,
				contains: [e.TITLE_MODE, {
					className: "params",
					begin: /\(/,
					end: /\)/,
					endsParent: !0,
					keywords: t,
					illegal: /["']/
				}]
			}
		]
	};
}
function graphql(e) {
	let t = e.regex;
	return {
		name: "GraphQL",
		aliases: ["gql"],
		case_insensitive: !0,
		disableAutodetect: !1,
		keywords: {
			keyword: [
				"query",
				"mutation",
				"subscription",
				"type",
				"input",
				"schema",
				"directive",
				"interface",
				"union",
				"scalar",
				"fragment",
				"enum",
				"on"
			],
			literal: [
				"true",
				"false",
				"null"
			]
		},
		contains: [
			e.HASH_COMMENT_MODE,
			e.QUOTE_STRING_MODE,
			e.NUMBER_MODE,
			{
				scope: "punctuation",
				match: /[.]{3}/,
				relevance: 0
			},
			{
				scope: "punctuation",
				begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
				relevance: 0
			},
			{
				scope: "variable",
				begin: /\$/,
				end: /\W/,
				excludeEnd: !0,
				relevance: 0
			},
			{
				scope: "meta",
				match: /@\w+/,
				excludeEnd: !0
			},
			{
				scope: "symbol",
				begin: t.concat(/[_A-Za-z][_0-9A-Za-z]*/, t.lookahead(/\s*:/)),
				relevance: 0
			}
		],
		illegal: [/[;<']/, /BEGIN/]
	};
}
function ini(e) {
	let t = e.regex, n = {
		className: "number",
		relevance: 0,
		variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e.NUMBER_RE }]
	}, a = e.COMMENT();
	a.variants = [{
		begin: /;/,
		end: /$/
	}, {
		begin: /#/,
		end: /$/
	}];
	let o = {
		className: "variable",
		variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }]
	}, s = {
		className: "literal",
		begin: /\bon|off|true|false|yes|no\b/
	}, l = {
		className: "string",
		contains: [e.BACKSLASH_ESCAPE],
		variants: [
			{
				begin: "'''",
				end: "'''",
				relevance: 10
			},
			{
				begin: "\"\"\"",
				end: "\"\"\"",
				relevance: 10
			},
			{
				begin: "\"",
				end: "\""
			},
			{
				begin: "'",
				end: "'"
			}
		]
	}, u = {
		begin: /\[/,
		end: /\]/,
		contains: [
			a,
			s,
			o,
			l,
			n,
			"self"
		],
		relevance: 0
	}, d = t.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
	return {
		name: "TOML, also INI",
		aliases: ["toml"],
		case_insensitive: !0,
		illegal: /\S/,
		contains: [
			a,
			{
				className: "section",
				begin: /\[+/,
				end: /\]+/
			},
			{
				begin: t.concat(d, "(\\s*\\.\\s*", d, ")*", t.lookahead(/\s*=\s*[^#\s]/)),
				className: "attr",
				starts: {
					end: /$/,
					contains: [
						a,
						u,
						s,
						o,
						l,
						n
					]
				}
			}
		]
	};
}
var decimalDigits$1 = "[0-9](_*[0-9])*", frac$1 = `\\.(${decimalDigits$1})`, hexDigits$1 = "[0-9a-fA-F](_*[0-9a-fA-F])*", NUMERIC$1 = {
	className: "number",
	variants: [
		{ begin: `(\\b(${decimalDigits$1})((${frac$1})|\\.)?|(${frac$1}))[eE][+-]?(${decimalDigits$1})[fFdD]?\\b` },
		{ begin: `\\b(${decimalDigits$1})((${frac$1})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
		{ begin: `(${frac$1})[fFdD]?\\b` },
		{ begin: `\\b(${decimalDigits$1})[fFdD]\\b` },
		{ begin: `\\b0[xX]((${hexDigits$1})\\.?|(${hexDigits$1})?\\.(${hexDigits$1}))[pP][+-]?(${decimalDigits$1})[fFdD]?\\b` },
		{ begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
		{ begin: `\\b0[xX](${hexDigits$1})[lL]?\\b` },
		{ begin: "\\b0(_*[0-7])*[lL]?\\b" },
		{ begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
	],
	relevance: 0
};
function recurRegex(e, t, n) {
	return n === -1 ? "" : e.replace(t, (a) => recurRegex(e, t, n - 1));
}
function java(e) {
	let t = e.regex, n = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", a = n + recurRegex("(?:<" + n + "~~~(?:\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*~~~)*>)?", /~~~/g, 2), o = {
		keyword: /* @__PURE__ */ "synchronized.abstract.private.var.static.if.const .for.while.strictfp.finally.protected.import.native.final.void.enum.else.break.transient.catch.instanceof.volatile.case.assert.package.default.public.try.switch.continue.throws.protected.public.private.module.requires.exports.do.sealed.yield.permits.goto.when".split("."),
		literal: [
			"false",
			"true",
			"null"
		],
		type: [
			"char",
			"boolean",
			"long",
			"float",
			"int",
			"byte",
			"short",
			"double"
		],
		built_in: ["super", "this"]
	}, s = {
		className: "meta",
		begin: "@" + n,
		contains: [{
			begin: /\(/,
			end: /\)/,
			contains: ["self"]
		}]
	}, l = {
		className: "params",
		begin: /\(/,
		end: /\)/,
		keywords: o,
		relevance: 0,
		contains: [e.C_BLOCK_COMMENT_MODE],
		endsParent: !0
	};
	return {
		name: "Java",
		aliases: ["jsp"],
		keywords: o,
		illegal: /<\/|#/,
		contains: [
			e.COMMENT("/\\*\\*", "\\*/", {
				relevance: 0,
				contains: [{
					begin: /\w+@/,
					relevance: 0
				}, {
					className: "doctag",
					begin: "@[A-Za-z]+"
				}]
			}),
			{
				begin: /import java\.[a-z]+\./,
				keywords: "import",
				relevance: 2
			},
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE,
			{
				begin: /"""/,
				end: /"""/,
				className: "string",
				contains: [e.BACKSLASH_ESCAPE]
			},
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			{
				match: [
					/\b(?:class|interface|enum|extends|implements|new)/,
					/\s+/,
					n
				],
				className: {
					1: "keyword",
					3: "title.class"
				}
			},
			{
				match: /non-sealed/,
				scope: "keyword"
			},
			{
				begin: [
					t.concat(/(?!else)/, n),
					/\s+/,
					n,
					/\s+/,
					/=(?!=)/
				],
				className: {
					1: "type",
					3: "variable",
					5: "operator"
				}
			},
			{
				begin: [
					/record/,
					/\s+/,
					n
				],
				className: {
					1: "keyword",
					3: "title.class"
				},
				contains: [
					l,
					e.C_LINE_COMMENT_MODE,
					e.C_BLOCK_COMMENT_MODE
				]
			},
			{
				beginKeywords: "new throw return else",
				relevance: 0
			},
			{
				begin: [
					"(?:" + a + "\\s+)",
					e.UNDERSCORE_IDENT_RE,
					/\s*(?=\()/
				],
				className: { 2: "title.function" },
				keywords: o,
				contains: [
					{
						className: "params",
						begin: /\(/,
						end: /\)/,
						keywords: o,
						relevance: 0,
						contains: [
							s,
							e.APOS_STRING_MODE,
							e.QUOTE_STRING_MODE,
							NUMERIC$1,
							e.C_BLOCK_COMMENT_MODE
						]
					},
					e.C_LINE_COMMENT_MODE,
					e.C_BLOCK_COMMENT_MODE
				]
			},
			NUMERIC$1,
			s
		]
	};
}
var IDENT_RE$2 = "[A-Za-z$_][0-9A-Za-z$_]*", KEYWORDS$1 = /* @__PURE__ */ "as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using".split("."), LITERALS$1 = [
	"true",
	"false",
	"null",
	"undefined",
	"NaN",
	"Infinity"
], TYPES$1 = /* @__PURE__ */ "Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly".split("."), ERROR_TYPES$1 = [
	"Error",
	"EvalError",
	"InternalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError"
], BUILT_IN_GLOBALS$1 = [
	"setInterval",
	"setTimeout",
	"clearInterval",
	"clearTimeout",
	"require",
	"exports",
	"eval",
	"isFinite",
	"isNaN",
	"parseFloat",
	"parseInt",
	"decodeURI",
	"decodeURIComponent",
	"encodeURI",
	"encodeURIComponent",
	"escape",
	"unescape"
], BUILT_IN_VARIABLES$1 = [
	"arguments",
	"this",
	"super",
	"console",
	"window",
	"document",
	"localStorage",
	"sessionStorage",
	"module",
	"global"
], BUILT_INS$1 = [].concat(BUILT_IN_GLOBALS$1, TYPES$1, ERROR_TYPES$1);
function javascript(e) {
	let t = e.regex, n = (e, { after: t }) => {
		let n = "</" + e[0].slice(1);
		return e.input.indexOf(n, t) !== -1;
	}, a = IDENT_RE$2, o = {
		begin: "<>",
		end: "</>"
	}, s = /<[A-Za-z0-9\\._:-]+\s*\/>/, l = {
		begin: /<[A-Za-z0-9\\._:-]+/,
		end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
		isTrulyOpeningTag: (e, t) => {
			let a = e[0].length + e.index, o = e.input[a];
			if (o === "<" || o === ",") {
				t.ignoreMatch();
				return;
			}
			o === ">" && (n(e, { after: a }) || t.ignoreMatch());
			let s, l = e.input.substring(a);
			if (s = l.match(/^\s*=/)) {
				t.ignoreMatch();
				return;
			}
			if ((s = l.match(/^\s+extends\s+/)) && s.index === 0) {
				t.ignoreMatch();
				return;
			}
		}
	}, u = {
		$pattern: IDENT_RE$2,
		keyword: KEYWORDS$1,
		literal: LITERALS$1,
		built_in: BUILT_INS$1,
		"variable.language": BUILT_IN_VARIABLES$1
	}, d = "[0-9](_?[0-9])*", f = `\\.(${d})`, p = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", m = {
		className: "number",
		variants: [
			{ begin: `(\\b(${p})((${f})|\\.)?|(${f}))[eE][+-]?(${d})\\b` },
			{ begin: `\\b(${p})\\b((${f})\\b|\\.)?|(${f})\\b` },
			{ begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
			{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
			{ begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
			{ begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
			{ begin: "\\b0[0-7]+n?\\b" }
		],
		relevance: 0
	}, h = {
		className: "subst",
		begin: "\\$\\{",
		end: "\\}",
		keywords: u,
		contains: []
	}, g = {
		begin: ".?html`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, h],
			subLanguage: "xml"
		}
	}, _ = {
		begin: ".?css`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, h],
			subLanguage: "css"
		}
	}, v = {
		begin: ".?gql`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, h],
			subLanguage: "graphql"
		}
	}, y = {
		className: "string",
		begin: "`",
		end: "`",
		contains: [e.BACKSLASH_ESCAPE, h]
	}, b = {
		className: "comment",
		variants: [
			e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
				relevance: 0,
				contains: [{
					begin: "(?=@[A-Za-z]+)",
					relevance: 0,
					contains: [
						{
							className: "doctag",
							begin: "@[A-Za-z]+"
						},
						{
							className: "type",
							begin: "\\{",
							end: "\\}",
							excludeEnd: !0,
							excludeBegin: !0,
							relevance: 0
						},
						{
							className: "variable",
							begin: a + "(?=\\s*(-)|$)",
							endsParent: !0,
							relevance: 0
						},
						{
							begin: /(?=[^\n])\s/,
							relevance: 0
						}
					]
				}]
			}),
			e.C_BLOCK_COMMENT_MODE,
			e.C_LINE_COMMENT_MODE
		]
	}, x = [
		e.APOS_STRING_MODE,
		e.QUOTE_STRING_MODE,
		g,
		_,
		v,
		y,
		{ match: /\$\d+/ },
		m
	];
	h.contains = x.concat({
		begin: /\{/,
		end: /\}/,
		keywords: u,
		contains: ["self"].concat(x)
	});
	let C = [].concat(b, h.contains), w = C.concat([{
		begin: /(\s*)\(/,
		end: /\)/,
		keywords: u,
		contains: ["self"].concat(C)
	}]), E = {
		className: "params",
		begin: /(\s*)\(/,
		end: /\)/,
		excludeBegin: !0,
		excludeEnd: !0,
		keywords: u,
		contains: w
	}, O = { variants: [{
		match: [
			/class/,
			/\s+/,
			a,
			/\s+/,
			/extends/,
			/\s+/,
			t.concat(a, "(", t.concat(/\./, a), ")*")
		],
		scope: {
			1: "keyword",
			3: "title.class",
			5: "keyword",
			7: "title.class.inherited"
		}
	}, {
		match: [
			/class/,
			/\s+/,
			a
		],
		scope: {
			1: "keyword",
			3: "title.class"
		}
	}] }, k = {
		relevance: 0,
		match: t.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
		className: "title.class",
		keywords: { _: [...TYPES$1, ...ERROR_TYPES$1] }
	}, A = {
		label: "use_strict",
		className: "meta",
		relevance: 10,
		begin: /^\s*['"]use (strict|asm)['"]/
	}, j = {
		variants: [{ match: [
			/function/,
			/\s+/,
			a,
			/(?=\s*\()/
		] }, { match: [/function/, /\s*(?=\()/] }],
		className: {
			1: "keyword",
			3: "title.function"
		},
		label: "func.def",
		contains: [E],
		illegal: /%/
	}, M = {
		relevance: 0,
		match: /\b[A-Z][A-Z_0-9]+\b/,
		className: "variable.constant"
	};
	function N(e) {
		return t.concat("(?!", e.join("|"), ")");
	}
	let P = {
		match: t.concat(/\b/, N([
			...BUILT_IN_GLOBALS$1,
			"super",
			"import"
		].map((e) => `${e}\\s*\\(`)), a, t.lookahead(/\s*\(/)),
		className: "title.function",
		relevance: 0
	}, F = {
		begin: t.concat(/\./, t.lookahead(t.concat(a, /(?![0-9A-Za-z$_(])/))),
		end: a,
		excludeBegin: !0,
		keywords: "prototype",
		className: "property",
		relevance: 0
	}, I = {
		match: [
			/get|set/,
			/\s+/,
			a,
			/(?=\()/
		],
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [{ begin: /\(\)/ }, E]
	}, L = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", R = {
		match: [
			/const|var|let/,
			/\s+/,
			a,
			/\s*/,
			/=\s*/,
			/(async\s*)?/,
			t.lookahead(L)
		],
		keywords: "async",
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [E]
	};
	return {
		name: "JavaScript",
		aliases: [
			"js",
			"jsx",
			"mjs",
			"cjs"
		],
		keywords: u,
		exports: {
			PARAMS_CONTAINS: w,
			CLASS_REFERENCE: k
		},
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({
				label: "shebang",
				binary: "node",
				relevance: 5
			}),
			A,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			g,
			_,
			v,
			y,
			b,
			{ match: /\$\d+/ },
			m,
			k,
			{
				scope: "attr",
				match: a + t.lookahead(":"),
				relevance: 0
			},
			R,
			{
				begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
				keywords: "return throw case",
				relevance: 0,
				contains: [
					b,
					e.REGEXP_MODE,
					{
						className: "function",
						begin: L,
						returnBegin: !0,
						end: "\\s*=>",
						contains: [{
							className: "params",
							variants: [
								{
									begin: e.UNDERSCORE_IDENT_RE,
									relevance: 0
								},
								{
									className: null,
									begin: /\(\s*\)/,
									skip: !0
								},
								{
									begin: /(\s*)\(/,
									end: /\)/,
									excludeBegin: !0,
									excludeEnd: !0,
									keywords: u,
									contains: w
								}
							]
						}]
					},
					{
						begin: /,/,
						relevance: 0
					},
					{
						match: /\s+/,
						relevance: 0
					},
					{
						variants: [
							{
								begin: o.begin,
								end: o.end
							},
							{ match: s },
							{
								begin: l.begin,
								"on:begin": l.isTrulyOpeningTag,
								end: l.end
							}
						],
						subLanguage: "xml",
						contains: [{
							begin: l.begin,
							end: l.end,
							skip: !0,
							contains: ["self"]
						}]
					}
				]
			},
			j,
			{ beginKeywords: "while if switch catch for" },
			{
				begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
				returnBegin: !0,
				label: "func.def",
				contains: [E, e.inherit(e.TITLE_MODE, {
					begin: a,
					className: "title.function"
				})]
			},
			{
				match: /\.\.\./,
				relevance: 0
			},
			F,
			{
				match: "\\$" + a,
				relevance: 0
			},
			{
				match: [/\bconstructor(?=\s*\()/],
				className: { 1: "title.function" },
				contains: [E]
			},
			P,
			M,
			O,
			I,
			{ match: /\$[(.]/ }
		]
	};
}
function json(e) {
	let t = {
		className: "attr",
		begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
		relevance: 1.01
	}, n = {
		match: /[{}[\],:]/,
		className: "punctuation",
		relevance: 0
	}, a = [
		"true",
		"false",
		"null"
	], o = {
		scope: "literal",
		beginKeywords: a.join(" ")
	};
	return {
		name: "JSON",
		aliases: ["jsonc"],
		keywords: { literal: a },
		contains: [
			t,
			n,
			e.QUOTE_STRING_MODE,
			o,
			e.C_NUMBER_MODE,
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE
		],
		illegal: "\\S"
	};
}
var decimalDigits = "[0-9](_*[0-9])*", frac = `\\.(${decimalDigits})`, hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*", NUMERIC = {
	className: "number",
	variants: [
		{ begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b` },
		{ begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
		{ begin: `(${frac})[fFdD]?\\b` },
		{ begin: `\\b(${decimalDigits})[fFdD]\\b` },
		{ begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b` },
		{ begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
		{ begin: `\\b0[xX](${hexDigits})[lL]?\\b` },
		{ begin: "\\b0(_*[0-7])*[lL]?\\b" },
		{ begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
	],
	relevance: 0
};
function kotlin(e) {
	let t = {
		keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
		built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
		literal: "true false null"
	}, n = {
		className: "keyword",
		begin: /\b(break|continue|return|this)\b/,
		starts: { contains: [{
			className: "symbol",
			begin: /@\w+/
		}] }
	}, a = {
		className: "symbol",
		begin: e.UNDERSCORE_IDENT_RE + "@"
	}, o = {
		className: "subst",
		begin: /\$\{/,
		end: /\}/,
		contains: [e.C_NUMBER_MODE]
	}, s = {
		className: "variable",
		begin: "\\$" + e.UNDERSCORE_IDENT_RE
	}, l = {
		className: "string",
		variants: [
			{
				begin: "\"\"\"",
				end: "\"\"\"(?=[^\"])",
				contains: [s, o]
			},
			{
				begin: "'",
				end: "'",
				illegal: /\n/,
				contains: [e.BACKSLASH_ESCAPE]
			},
			{
				begin: "\"",
				end: "\"",
				illegal: /\n/,
				contains: [
					e.BACKSLASH_ESCAPE,
					s,
					o
				]
			}
		]
	};
	o.contains.push(l);
	let u = {
		className: "meta",
		begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
	}, d = {
		className: "meta",
		begin: "@" + e.UNDERSCORE_IDENT_RE,
		contains: [{
			begin: /\(/,
			end: /\)/,
			contains: [e.inherit(l, { className: "string" }), "self"]
		}]
	}, f = NUMERIC, p = e.COMMENT("/\\*", "\\*/", { contains: [e.C_BLOCK_COMMENT_MODE] }), m = { variants: [{
		className: "type",
		begin: e.UNDERSCORE_IDENT_RE
	}, {
		begin: /\(/,
		end: /\)/,
		contains: []
	}] }, h = m;
	return h.variants[1].contains = [m], m.variants[1].contains = [h], {
		name: "Kotlin",
		aliases: ["kt", "kts"],
		keywords: t,
		contains: [
			e.COMMENT("/\\*\\*", "\\*/", {
				relevance: 0,
				contains: [{
					className: "doctag",
					begin: "@[A-Za-z]+"
				}]
			}),
			e.C_LINE_COMMENT_MODE,
			p,
			n,
			a,
			u,
			d,
			{
				className: "function",
				beginKeywords: "fun",
				end: "[(]|$",
				returnBegin: !0,
				excludeEnd: !0,
				keywords: t,
				relevance: 5,
				contains: [
					{
						begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
						returnBegin: !0,
						relevance: 0,
						contains: [e.UNDERSCORE_TITLE_MODE]
					},
					{
						className: "type",
						begin: /</,
						end: />/,
						keywords: "reified",
						relevance: 0
					},
					{
						className: "params",
						begin: /\(/,
						end: /\)/,
						endsParent: !0,
						keywords: t,
						relevance: 0,
						contains: [
							{
								begin: /:/,
								end: /[=,\/]/,
								endsWithParent: !0,
								contains: [
									m,
									e.C_LINE_COMMENT_MODE,
									p
								],
								relevance: 0
							},
							e.C_LINE_COMMENT_MODE,
							p,
							u,
							d,
							l,
							e.C_NUMBER_MODE
						]
					},
					p
				]
			},
			{
				begin: [
					/class|interface|trait/,
					/\s+/,
					e.UNDERSCORE_IDENT_RE
				],
				beginScope: { 3: "title.class" },
				keywords: "class interface trait",
				end: /[:\{(]|$/,
				excludeEnd: !0,
				illegal: "extends implements",
				contains: [
					{ beginKeywords: "public protected internal private constructor" },
					e.UNDERSCORE_TITLE_MODE,
					{
						className: "type",
						begin: /</,
						end: />/,
						excludeBegin: !0,
						excludeEnd: !0,
						relevance: 0
					},
					{
						className: "type",
						begin: /[,:]\s*/,
						end: /[<\(,){\s]|$/,
						excludeBegin: !0,
						returnEnd: !0
					},
					u,
					d
				]
			},
			l,
			{
				className: "meta",
				begin: "^#!/usr/bin/env",
				end: "$",
				illegal: "\n"
			},
			f
		]
	};
}
var MODES$2 = (e) => ({
	IMPORTANT: {
		scope: "meta",
		begin: "!important"
	},
	BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
	HEXCOLOR: {
		scope: "number",
		begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
	},
	FUNCTION_DISPATCH: {
		className: "built_in",
		begin: /[\w-]+(?=\()/
	},
	ATTRIBUTE_SELECTOR_MODE: {
		scope: "selector-attr",
		begin: /\[/,
		end: /\]/,
		illegal: "$",
		contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
	},
	CSS_NUMBER_MODE: {
		scope: "number",
		begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
		relevance: 0
	},
	CSS_VARIABLE: {
		className: "attr",
		begin: /--[A-Za-z_][A-Za-z0-9_-]*/
	}
}), HTML_TAGS$1 = /* @__PURE__ */ "a.abbr.address.article.aside.audio.b.blockquote.body.button.canvas.caption.cite.code.dd.del.details.dfn.div.dl.dt.em.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.html.i.iframe.img.input.ins.kbd.label.legend.li.main.mark.menu.nav.object.ol.optgroup.option.p.picture.q.quote.samp.section.select.source.span.strong.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.ul.var.video".split("."), SVG_TAGS$1 = /* @__PURE__ */ "defs.g.marker.mask.pattern.svg.switch.symbol.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feFlood.feGaussianBlur.feImage.feMerge.feMorphology.feOffset.feSpecularLighting.feTile.feTurbulence.linearGradient.radialGradient.stop.circle.ellipse.image.line.path.polygon.polyline.rect.text.use.textPath.tspan.foreignObject.clipPath".split("."), TAGS$1 = [...HTML_TAGS$1, ...SVG_TAGS$1], MEDIA_FEATURES$1 = (/* @__PURE__ */ "any-hover.any-pointer.aspect-ratio.color.color-gamut.color-index.device-aspect-ratio.device-height.device-width.display-mode.forced-colors.grid.height.hover.inverted-colors.monochrome.orientation.overflow-block.overflow-inline.pointer.prefers-color-scheme.prefers-contrast.prefers-reduced-motion.prefers-reduced-transparency.resolution.scan.scripting.update.width.min-width.max-width.min-height.max-height".split(".")).sort().reverse(), PSEUDO_CLASSES$1 = (/* @__PURE__ */ "active.any-link.blank.checked.current.default.defined.dir.disabled.drop.empty.enabled.first.first-child.first-of-type.fullscreen.future.focus.focus-visible.focus-within.has.host.host-context.hover.indeterminate.in-range.invalid.is.lang.last-child.last-of-type.left.link.local-link.not.nth-child.nth-col.nth-last-child.nth-last-col.nth-last-of-type.nth-of-type.only-child.only-of-type.optional.out-of-range.past.placeholder-shown.read-only.read-write.required.right.root.scope.target.target-within.user-invalid.valid.visited.where".split(".")).sort().reverse(), PSEUDO_ELEMENTS$1 = [
	"after",
	"backdrop",
	"before",
	"cue",
	"cue-region",
	"first-letter",
	"first-line",
	"grammar-error",
	"marker",
	"part",
	"placeholder",
	"selection",
	"slotted",
	"spelling-error"
].sort().reverse(), ATTRIBUTES$1 = (/* @__PURE__ */ "accent-color.align-content.align-items.align-self.alignment-baseline.all.anchor-name.animation.animation-composition.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-range.animation-range-end.animation-range-start.animation-timeline.animation-timing-function.appearance.aspect-ratio.backdrop-filter.backface-visibility.background.background-attachment.background-blend-mode.background-clip.background-color.background-image.background-origin.background-position.background-position-x.background-position-y.background-repeat.background-size.baseline-shift.block-size.border.border-block.border-block-color.border-block-end.border-block-end-color.border-block-end-style.border-block-end-width.border-block-start.border-block-start-color.border-block-start-style.border-block-start-width.border-block-style.border-block-width.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-end-end-radius.border-end-start-radius.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-inline.border-inline-color.border-inline-end.border-inline-end-color.border-inline-end-style.border-inline-end-width.border-inline-start.border-inline-start-color.border-inline-start-style.border-inline-start-width.border-inline-style.border-inline-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-start-end-radius.border-start-start-radius.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-align.box-decoration-break.box-direction.box-flex.box-flex-group.box-lines.box-ordinal-group.box-orient.box-pack.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.caret-color.clear.clip.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.color-scheme.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.column-span.column-width.columns.contain.contain-intrinsic-block-size.contain-intrinsic-height.contain-intrinsic-inline-size.contain-intrinsic-size.contain-intrinsic-width.container.container-name.container-type.content.content-visibility.counter-increment.counter-reset.counter-set.cue.cue-after.cue-before.cursor.cx.cy.direction.display.dominant-baseline.empty-cells.enable-background.field-sizing.fill.fill-opacity.fill-rule.filter.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.flood-color.flood-opacity.flow.font.font-display.font-family.font-feature-settings.font-kerning.font-language-override.font-optical-sizing.font-palette.font-size.font-size-adjust.font-smooth.font-smoothing.font-stretch.font-style.font-synthesis.font-synthesis-position.font-synthesis-small-caps.font-synthesis-style.font-synthesis-weight.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-emoji.font-variant-ligatures.font-variant-numeric.font-variant-position.font-variation-settings.font-weight.forced-color-adjust.gap.glyph-orientation-horizontal.glyph-orientation-vertical.grid.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-column.grid-column-end.grid-column-start.grid-gap.grid-row.grid-row-end.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.hanging-punctuation.height.hyphenate-character.hyphenate-limit-chars.hyphens.icon.image-orientation.image-rendering.image-resolution.ime-mode.initial-letter.initial-letter-align.inline-size.inset.inset-area.inset-block.inset-block-end.inset-block-start.inset-inline.inset-inline-end.inset-inline-start.isolation.justify-content.justify-items.justify-self.kerning.left.letter-spacing.lighting-color.line-break.line-height.line-height-step.list-style.list-style-image.list-style-position.list-style-type.margin.margin-block.margin-block-end.margin-block-start.margin-bottom.margin-inline.margin-inline-end.margin-inline-start.margin-left.margin-right.margin-top.margin-trim.marker.marker-end.marker-mid.marker-start.marks.mask.mask-border.mask-border-mode.mask-border-outset.mask-border-repeat.mask-border-slice.mask-border-source.mask-border-width.mask-clip.mask-composite.mask-image.mask-mode.mask-origin.mask-position.mask-repeat.mask-size.mask-type.masonry-auto-flow.math-depth.math-shift.math-style.max-block-size.max-height.max-inline-size.max-width.min-block-size.min-height.min-inline-size.min-width.mix-blend-mode.nav-down.nav-index.nav-left.nav-right.nav-up.none.normal.object-fit.object-position.offset.offset-anchor.offset-distance.offset-path.offset-position.offset-rotate.opacity.order.orphans.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-anchor.overflow-block.overflow-clip-margin.overflow-inline.overflow-wrap.overflow-x.overflow-y.overlay.overscroll-behavior.overscroll-behavior-block.overscroll-behavior-inline.overscroll-behavior-x.overscroll-behavior-y.padding.padding-block.padding-block-end.padding-block-start.padding-bottom.padding-inline.padding-inline-end.padding-inline-start.padding-left.padding-right.padding-top.page.page-break-after.page-break-before.page-break-inside.paint-order.pause.pause-after.pause-before.perspective.perspective-origin.place-content.place-items.place-self.pointer-events.position.position-anchor.position-visibility.print-color-adjust.quotes.r.resize.rest.rest-after.rest-before.right.rotate.row-gap.ruby-align.ruby-position.scale.scroll-behavior.scroll-margin.scroll-margin-block.scroll-margin-block-end.scroll-margin-block-start.scroll-margin-bottom.scroll-margin-inline.scroll-margin-inline-end.scroll-margin-inline-start.scroll-margin-left.scroll-margin-right.scroll-margin-top.scroll-padding.scroll-padding-block.scroll-padding-block-end.scroll-padding-block-start.scroll-padding-bottom.scroll-padding-inline.scroll-padding-inline-end.scroll-padding-inline-start.scroll-padding-left.scroll-padding-right.scroll-padding-top.scroll-snap-align.scroll-snap-stop.scroll-snap-type.scroll-timeline.scroll-timeline-axis.scroll-timeline-name.scrollbar-color.scrollbar-gutter.scrollbar-width.shape-image-threshold.shape-margin.shape-outside.shape-rendering.speak.speak-as.src.stop-color.stop-opacity.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.table-layout.text-align.text-align-all.text-align-last.text-anchor.text-combine-upright.text-decoration.text-decoration-color.text-decoration-line.text-decoration-skip.text-decoration-skip-ink.text-decoration-style.text-decoration-thickness.text-emphasis.text-emphasis-color.text-emphasis-position.text-emphasis-style.text-indent.text-justify.text-orientation.text-overflow.text-rendering.text-shadow.text-size-adjust.text-transform.text-underline-offset.text-underline-position.text-wrap.text-wrap-mode.text-wrap-style.timeline-scope.top.touch-action.transform.transform-box.transform-origin.transform-style.transition.transition-behavior.transition-delay.transition-duration.transition-property.transition-timing-function.translate.unicode-bidi.user-modify.user-select.vector-effect.vertical-align.view-timeline.view-timeline-axis.view-timeline-inset.view-timeline-name.view-transition-name.visibility.voice-balance.voice-duration.voice-family.voice-pitch.voice-range.voice-rate.voice-stress.voice-volume.white-space.white-space-collapse.widows.width.will-change.word-break.word-spacing.word-wrap.writing-mode.x.y.z-index.zoom".split(".")).sort().reverse(), PSEUDO_SELECTORS = PSEUDO_CLASSES$1.concat(PSEUDO_ELEMENTS$1).sort().reverse();
function less(e) {
	let t = MODES$2(e), n = PSEUDO_SELECTORS, a = "[\\w-]+", o = "(" + a + "|@\\{[\\w-]+\\})", s = [], l = [], u = function(e) {
		return {
			className: "string",
			begin: "~?" + e + ".*?" + e
		};
	}, d = function(e, t, n) {
		return {
			className: e,
			begin: t,
			relevance: n
		};
	}, f = {
		$pattern: /[a-z-]+/,
		keyword: "and or not only",
		attribute: MEDIA_FEATURES$1.join(" ")
	}, p = {
		begin: "\\(",
		end: "\\)",
		contains: l,
		keywords: f,
		relevance: 0
	};
	l.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, u("'"), u("\""), t.CSS_NUMBER_MODE, {
		begin: "(url|data-uri)\\(",
		starts: {
			className: "string",
			end: "[\\)\\n]",
			excludeEnd: !0
		}
	}, t.HEXCOLOR, p, d("variable", "@@?" + a, 10), d("variable", "@\\{" + a + "\\}"), d("built_in", "~?`[^`]*?`"), {
		className: "attribute",
		begin: a + "\\s*:",
		end: ":",
		returnBegin: !0,
		excludeEnd: !0
	}, t.IMPORTANT, { beginKeywords: "and not" }, t.FUNCTION_DISPATCH);
	let m = l.concat({
		begin: /\{/,
		end: /\}/,
		contains: s
	}), h = {
		beginKeywords: "when",
		endsWithParent: !0,
		contains: [{ beginKeywords: "and not" }].concat(l)
	}, g = {
		begin: o + "\\s*:",
		returnBegin: !0,
		end: /[;}]/,
		relevance: 0,
		contains: [
			{ begin: /-(webkit|moz|ms|o)-/ },
			t.CSS_VARIABLE,
			{
				className: "attribute",
				begin: "\\b(" + ATTRIBUTES$1.join("|") + ")\\b",
				end: /(?=:)/,
				starts: {
					endsWithParent: !0,
					illegal: "[<=$]",
					relevance: 0,
					contains: l
				}
			}
		]
	}, _ = {
		className: "keyword",
		begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
		starts: {
			end: "[;{}]",
			keywords: f,
			returnEnd: !0,
			contains: l,
			relevance: 0
		}
	}, v = {
		className: "variable",
		variants: [{
			begin: "@" + a + "\\s*:",
			relevance: 15
		}, { begin: "@" + a }],
		starts: {
			end: "[;}]",
			returnEnd: !0,
			contains: m
		}
	}, y = {
		variants: [{
			begin: "[\\.#:&\\[>]",
			end: "[;{}]"
		}, {
			begin: o,
			end: /\{/
		}],
		returnBegin: !0,
		returnEnd: !0,
		illegal: "[<='$\"]",
		relevance: 0,
		contains: [
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE,
			h,
			d("keyword", "all\\b"),
			d("variable", "@\\{" + a + "\\}"),
			{
				begin: "\\b(" + TAGS$1.join("|") + ")\\b",
				className: "selector-tag"
			},
			t.CSS_NUMBER_MODE,
			d("selector-tag", o, 0),
			d("selector-id", "#" + o),
			d("selector-class", "\\." + o, 0),
			d("selector-tag", "&", 0),
			t.ATTRIBUTE_SELECTOR_MODE,
			{
				className: "selector-pseudo",
				begin: ":(" + PSEUDO_CLASSES$1.join("|") + ")"
			},
			{
				className: "selector-pseudo",
				begin: ":(:)?(" + PSEUDO_ELEMENTS$1.join("|") + ")"
			},
			{
				begin: /\(/,
				end: /\)/,
				relevance: 0,
				contains: m
			},
			{ begin: "!important" },
			t.FUNCTION_DISPATCH
		]
	}, b = {
		begin: `[\\w-]+:(:)?(${n.join("|")})`,
		returnBegin: !0,
		contains: [y]
	};
	return s.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, _, v, b, g, y, h, t.FUNCTION_DISPATCH), {
		name: "Less",
		case_insensitive: !0,
		illegal: "[=>'/<($\"]",
		contains: s
	};
}
function lua(e) {
	let t = "\\[=*\\[", n = "\\]=*\\]", a = {
		begin: t,
		end: n,
		contains: ["self"]
	}, o = [e.COMMENT("--(?!" + t + ")", "$"), e.COMMENT("--" + t, n, {
		contains: [a],
		relevance: 10
	})];
	return {
		name: "Lua",
		aliases: ["pluto"],
		keywords: {
			$pattern: e.UNDERSCORE_IDENT_RE,
			literal: "true false nil",
			keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
			built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
		},
		contains: o.concat([
			{
				className: "function",
				beginKeywords: "function",
				end: "\\)",
				contains: [e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }), {
					className: "params",
					begin: "\\(",
					endsWithParent: !0,
					contains: o
				}].concat(o)
			},
			e.C_NUMBER_MODE,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			{
				className: "string",
				begin: t,
				end: n,
				contains: [a],
				relevance: 5
			}
		])
	};
}
function makefile(e) {
	let t = {
		className: "variable",
		variants: [{
			begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
			contains: [e.BACKSLASH_ESCAPE]
		}, { begin: /\$[@%<?\^\+\*]/ }]
	}, n = {
		className: "string",
		begin: /"/,
		end: /"/,
		contains: [e.BACKSLASH_ESCAPE, t]
	}, a = {
		className: "variable",
		begin: /\$\([\w-]+\s/,
		end: /\)/,
		keywords: { built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value" },
		contains: [t, n]
	}, o = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, s = {
		className: "meta",
		begin: /^\.PHONY:/,
		end: /$/,
		keywords: {
			$pattern: /[\.\w]+/,
			keyword: ".PHONY"
		}
	}, l = {
		className: "section",
		begin: /^[^\s]+:/,
		end: /$/,
		contains: [t]
	};
	return {
		name: "Makefile",
		aliases: [
			"mk",
			"mak",
			"make"
		],
		keywords: {
			$pattern: /[\w-]+/,
			keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
		},
		contains: [
			e.HASH_COMMENT_MODE,
			t,
			n,
			a,
			o,
			s,
			l
		]
	};
}
function markdown(e) {
	let t = e.regex, n = {
		begin: /<\/?[A-Za-z_]/,
		end: ">",
		subLanguage: "xml",
		relevance: 0
	}, a = {
		begin: "^[-\\*]{3,}",
		end: "$"
	}, o = {
		className: "code",
		variants: [
			{ begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
			{ begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
			{
				begin: "```",
				end: "```+[ ]*$"
			},
			{
				begin: "~~~",
				end: "~~~+[ ]*$"
			},
			{ begin: "`.+?`" },
			{
				begin: "(?=^( {4}|\\t))",
				contains: [{
					begin: "^( {4}|\\t)",
					end: "(\\n)$"
				}],
				relevance: 0
			}
		]
	}, s = {
		className: "bullet",
		begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
		end: "\\s+",
		excludeEnd: !0
	}, l = {
		begin: /^\[[^\n]+\]:/,
		returnBegin: !0,
		contains: [{
			className: "symbol",
			begin: /\[/,
			end: /\]/,
			excludeBegin: !0,
			excludeEnd: !0
		}, {
			className: "link",
			begin: /:\s*/,
			end: /$/,
			excludeBegin: !0
		}]
	}, u = {
		variants: [
			{
				begin: /\[.+?\]\[.*?\]/,
				relevance: 0
			},
			{
				begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
				relevance: 2
			},
			{
				begin: t.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
				relevance: 2
			},
			{
				begin: /\[.+?\]\([./?&#].*?\)/,
				relevance: 1
			},
			{
				begin: /\[.*?\]\(.*?\)/,
				relevance: 0
			}
		],
		returnBegin: !0,
		contains: [
			{ match: /\[(?=\])/ },
			{
				className: "string",
				relevance: 0,
				begin: "\\[",
				end: "\\]",
				excludeBegin: !0,
				returnEnd: !0
			},
			{
				className: "link",
				relevance: 0,
				begin: "\\]\\(",
				end: "\\)",
				excludeBegin: !0,
				excludeEnd: !0
			},
			{
				className: "symbol",
				relevance: 0,
				begin: "\\]\\[",
				end: "\\]",
				excludeBegin: !0,
				excludeEnd: !0
			}
		]
	}, d = {
		className: "strong",
		contains: [],
		variants: [{
			begin: /_{2}(?!\s)/,
			end: /_{2}/
		}, {
			begin: /\*{2}(?!\s)/,
			end: /\*{2}/
		}]
	}, f = {
		className: "emphasis",
		contains: [],
		variants: [{
			begin: /\*(?![*\s])/,
			end: /\*/
		}, {
			begin: /_(?![_\s])/,
			end: /_/,
			relevance: 0
		}]
	}, p = e.inherit(d, { contains: [] }), m = e.inherit(f, { contains: [] });
	d.contains.push(m), f.contains.push(p);
	let h = [n, u];
	return [
		d,
		f,
		p,
		m
	].forEach((e) => {
		e.contains = e.contains.concat(h);
	}), h = h.concat(d, f), {
		name: "Markdown",
		aliases: [
			"md",
			"mkdown",
			"mkd"
		],
		contains: [
			{
				className: "section",
				variants: [{
					begin: "^#{1,6}",
					end: "$",
					contains: h
				}, {
					begin: "(?=^.+?\\n[=-]{2,}$)",
					contains: [{ begin: "^[=-]*$" }, {
						begin: "^",
						end: "\\n",
						contains: h
					}]
				}]
			},
			n,
			s,
			d,
			f,
			{
				className: "quote",
				begin: "^>\\s+",
				contains: h,
				end: "$"
			},
			o,
			a,
			u,
			l,
			{
				scope: "literal",
				match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
			}
		]
	};
}
function objectivec(e) {
	let t = {
		className: "built_in",
		begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
	}, n = /[a-zA-Z@][a-zA-Z0-9_]*/, a = [
		"int",
		"float",
		"char",
		"unsigned",
		"signed",
		"short",
		"long",
		"double",
		"wchar_t",
		"unichar",
		"void",
		"bool",
		"BOOL",
		"id|0",
		"_Bool"
	], o = /* @__PURE__ */ "while.export.sizeof.typedef.const.struct.for.union.volatile.static.mutable.if.do.return.goto.enum.else.break.extern.asm.case.default.register.explicit.typename.switch.continue.inline.readonly.assign.readwrite.self.@synchronized.id.typeof.nonatomic.IBOutlet.IBAction.strong.weak.copy.in.out.inout.bycopy.byref.oneway.__strong.__weak.__block.__autoreleasing.@private.@protected.@public.@try.@property.@end.@throw.@catch.@finally.@autoreleasepool.@synthesize.@dynamic.@selector.@optional.@required.@encode.@package.@import.@defs.@compatibility_alias.__bridge.__bridge_transfer.__bridge_retained.__bridge_retain.__covariant.__contravariant.__kindof._Nonnull._Nullable._Null_unspecified.__FUNCTION__.__PRETTY_FUNCTION__.__attribute__.getter.setter.retain.unsafe_unretained.nonnull.nullable.null_unspecified.null_resettable.class.instancetype.NS_DESIGNATED_INITIALIZER.NS_UNAVAILABLE.NS_REQUIRES_SUPER.NS_RETURNS_INNER_POINTER.NS_INLINE.NS_AVAILABLE.NS_DEPRECATED.NS_ENUM.NS_OPTIONS.NS_SWIFT_UNAVAILABLE.NS_ASSUME_NONNULL_BEGIN.NS_ASSUME_NONNULL_END.NS_REFINED_FOR_SWIFT.NS_SWIFT_NAME.NS_SWIFT_NOTHROW.NS_DURING.NS_HANDLER.NS_ENDHANDLER.NS_VALUERETURN.NS_VOIDRETURN".split("."), s = [
		"false",
		"true",
		"FALSE",
		"TRUE",
		"nil",
		"YES",
		"NO",
		"NULL"
	], l = [
		"dispatch_once_t",
		"dispatch_queue_t",
		"dispatch_sync",
		"dispatch_async",
		"dispatch_once"
	], u = {
		"variable.language": ["this", "super"],
		$pattern: n,
		keyword: o,
		literal: s,
		built_in: l,
		type: a
	}, d = {
		$pattern: n,
		keyword: [
			"@interface",
			"@class",
			"@protocol",
			"@implementation"
		]
	};
	return {
		name: "Objective-C",
		aliases: [
			"mm",
			"objc",
			"obj-c",
			"obj-c++",
			"objective-c++"
		],
		keywords: u,
		illegal: "</",
		contains: [
			t,
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE,
			e.C_NUMBER_MODE,
			e.QUOTE_STRING_MODE,
			e.APOS_STRING_MODE,
			{
				className: "string",
				variants: [{
					begin: "@\"",
					end: "\"",
					illegal: "\\n",
					contains: [e.BACKSLASH_ESCAPE]
				}]
			},
			{
				className: "meta",
				begin: /#\s*[a-z]+\b/,
				end: /$/,
				keywords: { keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include" },
				contains: [
					{
						begin: /\\\n/,
						relevance: 0
					},
					e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
					{
						className: "string",
						begin: /<.*?>/,
						end: /$/,
						illegal: "\\n"
					},
					e.C_LINE_COMMENT_MODE,
					e.C_BLOCK_COMMENT_MODE
				]
			},
			{
				className: "class",
				begin: "(" + d.keyword.join("|") + ")\\b",
				end: /(\{|$)/,
				excludeEnd: !0,
				keywords: d,
				contains: [e.UNDERSCORE_TITLE_MODE]
			},
			{
				begin: "\\." + e.UNDERSCORE_IDENT_RE,
				relevance: 0
			}
		]
	};
}
function perl(e) {
	let t = e.regex, n = /* @__PURE__ */ "abs.accept.alarm.and.atan2.bind.binmode.bless.break.caller.chdir.chmod.chomp.chop.chown.chr.chroot.class.close.closedir.connect.continue.cos.crypt.dbmclose.dbmopen.defined.delete.die.do.dump.each.else.elsif.endgrent.endhostent.endnetent.endprotoent.endpwent.endservent.eof.eval.exec.exists.exit.exp.fcntl.field.fileno.flock.for.foreach.fork.format.formline.getc.getgrent.getgrgid.getgrnam.gethostbyaddr.gethostbyname.gethostent.getlogin.getnetbyaddr.getnetbyname.getnetent.getpeername.getpgrp.getpriority.getprotobyname.getprotobynumber.getprotoent.getpwent.getpwnam.getpwuid.getservbyname.getservbyport.getservent.getsockname.getsockopt.given.glob.gmtime.goto.grep.gt.hex.if.index.int.ioctl.join.keys.kill.last.lc.lcfirst.length.link.listen.local.localtime.log.lstat.lt.ma.map.method.mkdir.msgctl.msgget.msgrcv.msgsnd.my.ne.next.no.not.oct.open.opendir.or.ord.our.pack.package.pipe.pop.pos.print.printf.prototype.push.q|0.qq.quotemeta.qw.qx.rand.read.readdir.readline.readlink.readpipe.recv.redo.ref.rename.require.reset.return.reverse.rewinddir.rindex.rmdir.say.scalar.seek.seekdir.select.semctl.semget.semop.send.setgrent.sethostent.setnetent.setpgrp.setpriority.setprotoent.setpwent.setservent.setsockopt.shift.shmctl.shmget.shmread.shmwrite.shutdown.sin.sleep.socket.socketpair.sort.splice.split.sprintf.sqrt.srand.stat.state.study.sub.substr.symlink.syscall.sysopen.sysread.sysseek.system.syswrite.tell.telldir.tie.tied.time.times.tr.truncate.uc.ucfirst.umask.undef.unless.unlink.unpack.unshift.untie.until.use.utime.values.vec.wait.waitpid.wantarray.warn.when.while.write.x|0.xor.y|0".split("."), a = /[dualxmsipngr]{0,12}/, o = {
		$pattern: /[\w.]+/,
		keyword: n.join(" ")
	}, s = {
		className: "subst",
		begin: "[$@]\\{",
		end: "\\}",
		keywords: o
	}, l = {
		begin: /->\{/,
		end: /\}/
	}, u = {
		scope: "attr",
		match: /\s+:\s*\w+(\s*\(.*?\))?/
	}, d = {
		scope: "variable",
		variants: [
			{ begin: /\$\d/ },
			{ begin: t.concat(/[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])") },
			{
				begin: /[$%@](?!")[^\s\w{=]|\$=/,
				relevance: 0
			}
		],
		contains: [u]
	}, f = {
		className: "number",
		variants: [
			{ match: /0?\.[0-9][0-9_]+\b/ },
			{ match: /\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/ },
			{ match: /\b0[0-7][0-7_]*\b/ },
			{ match: /\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/ },
			{ match: /\b0b[0-1][0-1_]*\b/ }
		],
		relevance: 0
	}, p = [
		e.BACKSLASH_ESCAPE,
		s,
		d
	], m = [
		/!/,
		/\//,
		/\|/,
		/\?/,
		/'/,
		/"/,
		/#/
	], h = (e, n, o = "\\1") => {
		let s = o === "\\1" ? o : t.concat(o, n);
		return t.concat(t.concat("(?:", e, ")"), n, /(?:\\.|[^\\\/])*?/, s, /(?:\\.|[^\\\/])*?/, o, a);
	}, g = (e, n, o) => t.concat(t.concat("(?:", e, ")"), n, /(?:\\.|[^\\\/])*?/, o, a), _ = [
		d,
		e.HASH_COMMENT_MODE,
		e.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
		l,
		{
			className: "string",
			contains: p,
			variants: [
				{
					begin: "q[qwxr]?\\s*\\(",
					end: "\\)",
					relevance: 5
				},
				{
					begin: "q[qwxr]?\\s*\\[",
					end: "\\]",
					relevance: 5
				},
				{
					begin: "q[qwxr]?\\s*\\{",
					end: "\\}",
					relevance: 5
				},
				{
					begin: "q[qwxr]?\\s*\\|",
					end: "\\|",
					relevance: 5
				},
				{
					begin: "q[qwxr]?\\s*<",
					end: ">",
					relevance: 5
				},
				{
					begin: "qw\\s+q",
					end: "q",
					relevance: 5
				},
				{
					begin: "'",
					end: "'",
					contains: [e.BACKSLASH_ESCAPE]
				},
				{
					begin: "\"",
					end: "\""
				},
				{
					begin: "`",
					end: "`",
					contains: [e.BACKSLASH_ESCAPE]
				},
				{
					begin: /\{\w+\}/,
					relevance: 0
				},
				{
					begin: "-?\\w+\\s*=>",
					relevance: 0
				}
			]
		},
		f,
		{
			begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
			keywords: "split return print reverse grep",
			relevance: 0,
			contains: [
				e.HASH_COMMENT_MODE,
				{
					className: "regexp",
					variants: [
						{ begin: h("s|tr|y", t.either(...m, { capture: !0 })) },
						{ begin: h("s|tr|y", "\\(", "\\)") },
						{ begin: h("s|tr|y", "\\[", "\\]") },
						{ begin: h("s|tr|y", "\\{", "\\}") }
					],
					relevance: 2
				},
				{
					className: "regexp",
					variants: [
						{
							begin: /(m|qr)\/\//,
							relevance: 0
						},
						{ begin: g("(?:m|qr)?", /\//, /\//) },
						{ begin: g("m|qr", t.either(...m, { capture: !0 }), /\1/) },
						{ begin: g("m|qr", /\(/, /\)/) },
						{ begin: g("m|qr", /\[/, /\]/) },
						{ begin: g("m|qr", /\{/, /\}/) }
					]
				}
			]
		},
		{
			className: "function",
			beginKeywords: "sub method",
			end: "(\\s*\\(.*?\\))?[;{]",
			excludeEnd: !0,
			relevance: 5,
			contains: [e.TITLE_MODE, u]
		},
		{
			className: "class",
			beginKeywords: "class",
			end: "[;{]",
			excludeEnd: !0,
			relevance: 5,
			contains: [
				e.TITLE_MODE,
				u,
				f
			]
		},
		{
			begin: "-\\w\\b",
			relevance: 0
		},
		{
			begin: "^__DATA__$",
			end: "^__END__$",
			subLanguage: "mojolicious",
			contains: [{
				begin: "^@@.*",
				end: "$",
				className: "comment"
			}]
		}
	];
	return s.contains = _, l.contains = _, {
		name: "Perl",
		aliases: ["pl", "pm"],
		keywords: o,
		contains: _
	};
}
function php(e) {
	let t = e.regex, n = /(?![A-Za-z0-9])(?![$])/, a = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n), o = t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, n), s = t.concat(/[A-Z]+/, n), l = {
		scope: "variable",
		match: "\\$+" + a
	}, u = {
		scope: "meta",
		variants: [
			{
				begin: /<\?php/,
				relevance: 10
			},
			{ begin: /<\?=/ },
			{
				begin: /<\?/,
				relevance: .1
			},
			{ begin: /\?>/ }
		]
	}, d = {
		scope: "subst",
		variants: [{ begin: /\$\w+/ }, {
			begin: /\{\$/,
			end: /\}/
		}]
	}, f = e.inherit(e.APOS_STRING_MODE, { illegal: null }), p = e.inherit(e.QUOTE_STRING_MODE, {
		illegal: null,
		contains: e.QUOTE_STRING_MODE.contains.concat(d)
	}), m = {
		begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
		end: /[ \t]*(\w+)\b/,
		contains: e.QUOTE_STRING_MODE.contains.concat(d),
		"on:begin": (e, t) => {
			t.data._beginMatch = e[1] || e[2];
		},
		"on:end": (e, t) => {
			t.data._beginMatch !== e[1] && t.ignoreMatch();
		}
	}, h = e.END_SAME_AS_BEGIN({
		begin: /<<<[ \t]*'(\w+)'\n/,
		end: /[ \t]*(\w+)\b/
	}), g = "[ 	\n]", _ = {
		scope: "string",
		variants: [
			p,
			f,
			m,
			h
		]
	}, v = {
		scope: "number",
		variants: [
			{ begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
			{ begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
			{ begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
			{ begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
		],
		relevance: 0
	}, y = [
		"false",
		"null",
		"true"
	], b = /* @__PURE__ */ "__CLASS__.__DIR__.__FILE__.__FUNCTION__.__COMPILER_HALT_OFFSET__.__LINE__.__METHOD__.__NAMESPACE__.__TRAIT__.die.echo.exit.include.include_once.print.require.require_once.array.abstract.and.as.binary.bool.boolean.break.callable.case.catch.class.clone.const.continue.declare.default.do.double.else.elseif.empty.enddeclare.endfor.endforeach.endif.endswitch.endwhile.enum.eval.extends.final.finally.float.for.foreach.from.global.goto.if.implements.instanceof.insteadof.int.integer.interface.isset.iterable.list.match|0.mixed.new.never.object.or.private.protected.public.readonly.real.return.string.switch.throw.trait.try.unset.use.var.void.while.xor.yield".split("."), x = /* @__PURE__ */ "Error|0.AppendIterator.ArgumentCountError.ArithmeticError.ArrayIterator.ArrayObject.AssertionError.BadFunctionCallException.BadMethodCallException.CachingIterator.CallbackFilterIterator.CompileError.Countable.DirectoryIterator.DivisionByZeroError.DomainException.EmptyIterator.ErrorException.Exception.FilesystemIterator.FilterIterator.GlobIterator.InfiniteIterator.InvalidArgumentException.IteratorIterator.LengthException.LimitIterator.LogicException.MultipleIterator.NoRewindIterator.OutOfBoundsException.OutOfRangeException.OuterIterator.OverflowException.ParentIterator.ParseError.RangeException.RecursiveArrayIterator.RecursiveCachingIterator.RecursiveCallbackFilterIterator.RecursiveDirectoryIterator.RecursiveFilterIterator.RecursiveIterator.RecursiveIteratorIterator.RecursiveRegexIterator.RecursiveTreeIterator.RegexIterator.RuntimeException.SeekableIterator.SplDoublyLinkedList.SplFileInfo.SplFileObject.SplFixedArray.SplHeap.SplMaxHeap.SplMinHeap.SplObjectStorage.SplObserver.SplPriorityQueue.SplQueue.SplStack.SplSubject.SplTempFileObject.TypeError.UnderflowException.UnexpectedValueException.UnhandledMatchError.ArrayAccess.BackedEnum.Closure.Fiber.Generator.Iterator.IteratorAggregate.Serializable.Stringable.Throwable.Traversable.UnitEnum.WeakReference.WeakMap.Directory.__PHP_Incomplete_Class.parent.php_user_filter.self.static.stdClass".split("."), C = {
		keyword: b,
		literal: ((e) => {
			let t = [];
			return e.forEach((e) => {
				t.push(e), e.toLowerCase() === e ? t.push(e.toUpperCase()) : t.push(e.toLowerCase());
			}), t;
		})(y),
		built_in: x
	}, w = (e) => e.map((e) => e.replace(/\|\d+$/, "")), E = { variants: [{
		match: [
			/new/,
			t.concat(g, "+"),
			t.concat("(?!", w(x).join("\\b|"), "\\b)"),
			o
		],
		scope: {
			1: "keyword",
			4: "title.class"
		}
	}] }, O = t.concat(a, "\\b(?!\\()"), k = { variants: [
		{
			match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), O],
			scope: { 2: "variable.constant" }
		},
		{
			match: [/::/, /class/],
			scope: { 2: "variable.language" }
		},
		{
			match: [
				o,
				t.concat(/::/, t.lookahead(/(?!class\b)/)),
				O
			],
			scope: {
				1: "title.class",
				3: "variable.constant"
			}
		},
		{
			match: [o, t.concat("::", t.lookahead(/(?!class\b)/))],
			scope: { 1: "title.class" }
		},
		{
			match: [
				o,
				/::/,
				/class/
			],
			scope: {
				1: "title.class",
				3: "variable.language"
			}
		}
	] }, A = {
		scope: "attr",
		match: t.concat(a, t.lookahead(":"), t.lookahead(/(?!::)/))
	}, j = {
		relevance: 0,
		begin: /\(/,
		end: /\)/,
		keywords: C,
		contains: [
			A,
			l,
			k,
			e.C_BLOCK_COMMENT_MODE,
			_,
			v,
			E
		]
	}, M = {
		relevance: 0,
		match: [
			/\b/,
			t.concat("(?!fn\\b|function\\b|", w(b).join("\\b|"), "|", w(x).join("\\b|"), "\\b)"),
			a,
			t.concat(g, "*"),
			t.lookahead(/(?=\()/)
		],
		scope: { 3: "title.function.invoke" },
		contains: [j]
	};
	j.contains.push(M);
	let N = [
		A,
		k,
		e.C_BLOCK_COMMENT_MODE,
		_,
		v,
		E
	], P = {
		begin: t.concat(/#\[\s*\\?/, t.either(o, s)),
		beginScope: "meta",
		end: /]/,
		endScope: "meta",
		keywords: {
			literal: y,
			keyword: ["new", "array"]
		},
		contains: [
			{
				begin: /\[/,
				end: /]/,
				keywords: {
					literal: y,
					keyword: ["new", "array"]
				},
				contains: ["self", ...N]
			},
			...N,
			{
				scope: "meta",
				variants: [{ match: o }, { match: s }]
			}
		]
	};
	return {
		case_insensitive: !1,
		keywords: C,
		contains: [
			P,
			e.HASH_COMMENT_MODE,
			e.COMMENT("//", "$"),
			e.COMMENT("/\\*", "\\*/", { contains: [{
				scope: "doctag",
				match: "@[A-Za-z]+"
			}] }),
			{
				match: /__halt_compiler\(\);/,
				keywords: "__halt_compiler",
				starts: {
					scope: "comment",
					end: e.MATCH_NOTHING_RE,
					contains: [{
						match: /\?>/,
						scope: "meta",
						endsParent: !0
					}]
				}
			},
			u,
			{
				scope: "variable.language",
				match: /\$this\b/
			},
			l,
			M,
			k,
			{
				match: [
					/const/,
					/\s/,
					a
				],
				scope: {
					1: "keyword",
					3: "variable.constant"
				}
			},
			E,
			{
				scope: "function",
				relevance: 0,
				beginKeywords: "fn function",
				end: /[;{]/,
				excludeEnd: !0,
				illegal: "[$%\\[]",
				contains: [
					{ beginKeywords: "use" },
					e.UNDERSCORE_TITLE_MODE,
					{
						begin: "=>",
						endsParent: !0
					},
					{
						scope: "params",
						begin: "\\(",
						end: "\\)",
						excludeBegin: !0,
						excludeEnd: !0,
						keywords: C,
						contains: [
							"self",
							P,
							l,
							k,
							e.C_BLOCK_COMMENT_MODE,
							_,
							v
						]
					}
				]
			},
			{
				scope: "class",
				variants: [{
					beginKeywords: "enum",
					illegal: /[($"]/
				}, {
					beginKeywords: "class interface trait",
					illegal: /[:($"]/
				}],
				relevance: 0,
				end: /\{/,
				excludeEnd: !0,
				contains: [{ beginKeywords: "extends implements" }, e.UNDERSCORE_TITLE_MODE]
			},
			{
				beginKeywords: "namespace",
				relevance: 0,
				end: ";",
				illegal: /[.']/,
				contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
			},
			{
				beginKeywords: "use",
				relevance: 0,
				end: ";",
				contains: [{
					match: /\b(as|const|function)\b/,
					scope: "keyword"
				}, e.UNDERSCORE_TITLE_MODE]
			},
			_,
			v
		]
	};
}
function phpTemplate(e) {
	return {
		name: "PHP template",
		subLanguage: "xml",
		contains: [{
			begin: /<\?(php|=)?/,
			end: /\?>/,
			subLanguage: "php",
			contains: [
				{
					begin: "/\\*",
					end: "\\*/",
					skip: !0
				},
				{
					begin: "b\"",
					end: "\"",
					skip: !0
				},
				{
					begin: "b'",
					end: "'",
					skip: !0
				},
				e.inherit(e.APOS_STRING_MODE, {
					illegal: null,
					className: null,
					contains: null,
					skip: !0
				}),
				e.inherit(e.QUOTE_STRING_MODE, {
					illegal: null,
					className: null,
					contains: null,
					skip: !0
				})
			]
		}]
	};
}
function plaintext(e) {
	return {
		name: "Plain text",
		aliases: ["text", "txt"],
		disableAutodetect: !0
	};
}
function python(e) {
	let t = e.regex, n = /[\p{XID_Start}_]\p{XID_Continue}*/u, a = /* @__PURE__ */ "and.as.assert.async.await.break.case.class.continue.def.del.elif.else.except.finally.for.from.global.if.import.in.is.lambda.match.nonlocal|10.not.or.pass.raise.return.try.while.with.yield".split("."), o = {
		$pattern: /[A-Za-z]\w+|__\w+__/,
		keyword: a,
		built_in: /* @__PURE__ */ "__import__.abs.all.any.ascii.bin.bool.breakpoint.bytearray.bytes.callable.chr.classmethod.compile.complex.delattr.dict.dir.divmod.enumerate.eval.exec.filter.float.format.frozenset.getattr.globals.hasattr.hash.help.hex.id.input.int.isinstance.issubclass.iter.len.list.locals.map.max.memoryview.min.next.object.oct.open.ord.pow.print.property.range.repr.reversed.round.set.setattr.slice.sorted.staticmethod.str.sum.super.tuple.type.vars.zip".split("."),
		literal: [
			"__debug__",
			"Ellipsis",
			"False",
			"None",
			"NotImplemented",
			"True"
		],
		type: [
			"Any",
			"Callable",
			"Coroutine",
			"Dict",
			"List",
			"Literal",
			"Generic",
			"Optional",
			"Sequence",
			"Set",
			"Tuple",
			"Type",
			"Union"
		]
	}, s = {
		className: "meta",
		begin: /^(>>>|\.\.\.) /
	}, l = {
		className: "subst",
		begin: /\{/,
		end: /\}/,
		keywords: o,
		illegal: /#/
	}, u = {
		begin: /\{\{/,
		relevance: 0
	}, d = {
		className: "string",
		contains: [e.BACKSLASH_ESCAPE],
		variants: [
			{
				begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
				end: /'''/,
				contains: [e.BACKSLASH_ESCAPE, s],
				relevance: 10
			},
			{
				begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
				end: /"""/,
				contains: [e.BACKSLASH_ESCAPE, s],
				relevance: 10
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])'''/,
				end: /'''/,
				contains: [
					e.BACKSLASH_ESCAPE,
					s,
					u,
					l
				]
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])"""/,
				end: /"""/,
				contains: [
					e.BACKSLASH_ESCAPE,
					s,
					u,
					l
				]
			},
			{
				begin: /([uU]|[rR])'/,
				end: /'/,
				relevance: 10
			},
			{
				begin: /([uU]|[rR])"/,
				end: /"/,
				relevance: 10
			},
			{
				begin: /([bB]|[bB][rR]|[rR][bB])'/,
				end: /'/
			},
			{
				begin: /([bB]|[bB][rR]|[rR][bB])"/,
				end: /"/
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])'/,
				end: /'/,
				contains: [
					e.BACKSLASH_ESCAPE,
					u,
					l
				]
			},
			{
				begin: /([fF][rR]|[rR][fF]|[fF])"/,
				end: /"/,
				contains: [
					e.BACKSLASH_ESCAPE,
					u,
					l
				]
			},
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE
		]
	}, f = "[0-9](_?[0-9])*", p = `(\\b(${f}))?\\.(${f})|\\b(${f})\\.`, m = `\\b|${a.join("|")}`, h = {
		className: "number",
		relevance: 0,
		variants: [
			{ begin: `(\\b(${f})|(${p}))[eE][+-]?(${f})[jJ]?(?=${m})` },
			{ begin: `(${p})[jJ]?` },
			{ begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})` },
			{ begin: `\\b0[bB](_?[01])+[lL]?(?=${m})` },
			{ begin: `\\b0[oO](_?[0-7])+[lL]?(?=${m})` },
			{ begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})` },
			{ begin: `\\b(${f})[jJ](?=${m})` }
		]
	}, g = {
		className: "comment",
		begin: t.lookahead(/# type:/),
		end: /$/,
		keywords: o,
		contains: [{ begin: /# type:/ }, {
			begin: /#/,
			end: /\b\B/,
			endsWithParent: !0
		}]
	}, _ = {
		className: "params",
		variants: [{
			className: "",
			begin: /\(\s*\)/,
			skip: !0
		}, {
			begin: /\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: o,
			contains: [
				"self",
				s,
				h,
				d,
				e.HASH_COMMENT_MODE
			]
		}]
	};
	return l.contains = [
		d,
		h,
		s
	], {
		name: "Python",
		aliases: [
			"py",
			"gyp",
			"ipython"
		],
		unicodeRegex: !0,
		keywords: o,
		illegal: /(<\/|\?)|=>/,
		contains: [
			s,
			h,
			{
				scope: "variable.language",
				match: /\bself\b/
			},
			{
				beginKeywords: "if",
				relevance: 0
			},
			{
				match: /\bor\b/,
				scope: "keyword"
			},
			d,
			g,
			e.HASH_COMMENT_MODE,
			{
				match: [
					/\bdef/,
					/\s+/,
					n
				],
				scope: {
					1: "keyword",
					3: "title.function"
				},
				contains: [_]
			},
			{
				variants: [{ match: [
					/\bclass/,
					/\s+/,
					n,
					/\s*/,
					/\(\s*/,
					n,
					/\s*\)/
				] }, { match: [
					/\bclass/,
					/\s+/,
					n
				] }],
				scope: {
					1: "keyword",
					3: "title.class",
					6: "title.class.inherited"
				}
			},
			{
				className: "meta",
				begin: /^[\t ]*@/,
				end: /(?=#)|$/,
				contains: [
					h,
					_,
					d
				]
			}
		]
	};
}
function pythonRepl(e) {
	return {
		aliases: ["pycon"],
		contains: [{
			className: "meta.prompt",
			starts: {
				end: / |$/,
				starts: {
					end: "$",
					subLanguage: "python"
				}
			},
			variants: [{ begin: /^>>>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }]
		}]
	};
}
function r(e) {
	let t = e.regex, n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, a = t.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/), o = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, s = t.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
	return {
		name: "R",
		keywords: {
			$pattern: n,
			keyword: "function if in break next repeat else for while",
			literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
			built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
		},
		contains: [
			e.COMMENT(/#'/, /$/, { contains: [
				{
					scope: "doctag",
					match: /@examples/,
					starts: {
						end: t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)),
						endsParent: !0
					}
				},
				{
					scope: "doctag",
					begin: "@param",
					end: /$/,
					contains: [{
						scope: "variable",
						variants: [{ match: n }, { match: /`(?:\\.|[^`\\])+`/ }],
						endsParent: !0
					}]
				},
				{
					scope: "doctag",
					match: /@[a-zA-Z]+/
				},
				{
					scope: "keyword",
					match: /\\[a-zA-Z]+/
				}
			] }),
			e.HASH_COMMENT_MODE,
			{
				scope: "string",
				contains: [e.BACKSLASH_ESCAPE],
				variants: [
					e.END_SAME_AS_BEGIN({
						begin: /[rR]"(-*)\(/,
						end: /\)(-*)"/
					}),
					e.END_SAME_AS_BEGIN({
						begin: /[rR]"(-*)\{/,
						end: /\}(-*)"/
					}),
					e.END_SAME_AS_BEGIN({
						begin: /[rR]"(-*)\[/,
						end: /\](-*)"/
					}),
					e.END_SAME_AS_BEGIN({
						begin: /[rR]'(-*)\(/,
						end: /\)(-*)'/
					}),
					e.END_SAME_AS_BEGIN({
						begin: /[rR]'(-*)\{/,
						end: /\}(-*)'/
					}),
					e.END_SAME_AS_BEGIN({
						begin: /[rR]'(-*)\[/,
						end: /\](-*)'/
					}),
					{
						begin: "\"",
						end: "\"",
						relevance: 0
					},
					{
						begin: "'",
						end: "'",
						relevance: 0
					}
				]
			},
			{
				relevance: 0,
				variants: [
					{
						scope: {
							1: "operator",
							2: "number"
						},
						match: [o, a]
					},
					{
						scope: {
							1: "operator",
							2: "number"
						},
						match: [/%[^%]*%/, a]
					},
					{
						scope: {
							1: "punctuation",
							2: "number"
						},
						match: [s, a]
					},
					{
						scope: { 2: "number" },
						match: [/[^a-zA-Z0-9._]|^/, a]
					}
				]
			},
			{
				scope: { 3: "operator" },
				match: [
					n,
					/\s+/,
					/<-/,
					/\s+/
				]
			},
			{
				scope: "operator",
				relevance: 0,
				variants: [{ match: o }, { match: /%[^%]*%/ }]
			},
			{
				scope: "punctuation",
				relevance: 0,
				match: s
			},
			{
				begin: "`",
				end: "`",
				contains: [{ begin: /\\./ }]
			}
		]
	};
}
function ruby(e) {
	let t = e.regex, n = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", a = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/), o = t.concat(a, /(::\w+)*/), s = [
		"include",
		"extend",
		"prepend",
		"public",
		"private",
		"protected",
		"raise",
		"throw"
	], l = {
		"variable.constant": [
			"__FILE__",
			"__LINE__",
			"__ENCODING__"
		],
		"variable.language": ["self", "super"],
		keyword: [
			"alias",
			"and",
			"begin",
			"BEGIN",
			"break",
			"case",
			"class",
			"defined",
			"do",
			"else",
			"elsif",
			"end",
			"END",
			"ensure",
			"for",
			"if",
			"in",
			"module",
			"next",
			"not",
			"or",
			"redo",
			"require",
			"rescue",
			"retry",
			"return",
			"then",
			"undef",
			"unless",
			"until",
			"when",
			"while",
			"yield",
			...s
		],
		built_in: [
			"proc",
			"lambda",
			"attr_accessor",
			"attr_reader",
			"attr_writer",
			"define_method",
			"private_constant",
			"module_function"
		],
		literal: [
			"true",
			"false",
			"nil"
		]
	}, u = {
		className: "doctag",
		begin: "@[A-Za-z]+"
	}, d = {
		begin: "#<",
		end: ">"
	}, f = [
		e.COMMENT("#", "$", { contains: [u] }),
		e.COMMENT("^=begin", "^=end", {
			contains: [u],
			relevance: 10
		}),
		e.COMMENT("^__END__", e.MATCH_NOTHING_RE)
	], p = {
		className: "subst",
		begin: /#\{/,
		end: /\}/,
		keywords: l
	}, m = {
		className: "string",
		contains: [e.BACKSLASH_ESCAPE, p],
		variants: [
			{
				begin: /'/,
				end: /'/
			},
			{
				begin: /"/,
				end: /"/
			},
			{
				begin: /`/,
				end: /`/
			},
			{
				begin: /%[qQwWx]?\(/,
				end: /\)/
			},
			{
				begin: /%[qQwWx]?\[/,
				end: /\]/
			},
			{
				begin: /%[qQwWx]?\{/,
				end: /\}/
			},
			{
				begin: /%[qQwWx]?</,
				end: />/
			},
			{
				begin: /%[qQwWx]?\//,
				end: /\//
			},
			{
				begin: /%[qQwWx]?%/,
				end: /%/
			},
			{
				begin: /%[qQwWx]?-/,
				end: /-/
			},
			{
				begin: /%[qQwWx]?\|/,
				end: /\|/
			},
			{ begin: /\B\?(\\\d{1,3})/ },
			{ begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
			{ begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
			{ begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
			{ begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
			{ begin: /\B\?\\?\S/ },
			{
				begin: t.concat(/<<[-~]?'?/, t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
				contains: [e.END_SAME_AS_BEGIN({
					begin: /(\w+)/,
					end: /(\w+)/,
					contains: [e.BACKSLASH_ESCAPE, p]
				})]
			}
		]
	}, h = "[0-9](_?[0-9])*", g = {
		className: "number",
		relevance: 0,
		variants: [
			{ begin: `\\b([1-9](_?[0-9])*|0)(\\.(${h}))?([eE][+-]?(${h})|r)?i?\\b` },
			{ begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
			{ begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
			{ begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
			{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
			{ begin: "\\b0(_?[0-7])+r?i?\\b" }
		]
	}, _ = { variants: [{ match: /\(\)/ }, {
		className: "params",
		begin: /\(/,
		end: /(?=\))/,
		excludeBegin: !0,
		endsParent: !0,
		keywords: l
	}] }, v = {
		match: [/(include|extend)\s+/, o],
		scope: { 2: "title.class" },
		keywords: l
	}, y = {
		variants: [{ match: [
			/class\s+/,
			o,
			/\s+<\s+/,
			o
		] }, { match: [/\b(class|module)\s+/, o] }],
		scope: {
			2: "title.class",
			4: "title.class.inherited"
		},
		keywords: l
	}, b = {
		relevance: 0,
		match: /\b[A-Z][A-Z_0-9]+\b/,
		className: "variable.constant"
	}, x = {
		match: [
			/def/,
			/\s+/,
			n
		],
		scope: {
			1: "keyword",
			3: "title.function"
		},
		contains: [_]
	}, C = [
		m,
		y,
		v,
		{
			relevance: 0,
			match: [o, /\.new[. (]/],
			scope: { 1: "title.class" }
		},
		b,
		{
			relevance: 0,
			match: a,
			scope: "title.class"
		},
		x,
		{ begin: e.IDENT_RE + "::" },
		{
			className: "symbol",
			begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
			relevance: 0
		},
		{
			className: "symbol",
			begin: ":(?!\\s)",
			contains: [m, { begin: n }],
			relevance: 0
		},
		g,
		{
			className: "variable",
			begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
		},
		{
			className: "params",
			begin: /\|(?!=)/,
			end: /\|/,
			excludeBegin: !0,
			excludeEnd: !0,
			relevance: 0,
			keywords: l
		},
		{
			begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
			keywords: "unless",
			contains: [{
				className: "regexp",
				contains: [e.BACKSLASH_ESCAPE, p],
				illegal: /\n/,
				variants: [
					{
						begin: "/",
						end: "/[a-z]*"
					},
					{
						begin: /%r\{/,
						end: /\}[a-z]*/
					},
					{
						begin: "%r\\(",
						end: "\\)[a-z]*"
					},
					{
						begin: "%r!",
						end: "![a-z]*"
					},
					{
						begin: "%r\\[",
						end: "\\][a-z]*"
					}
				]
			}].concat(d, f),
			relevance: 0
		}
	].concat(d, f);
	p.contains = C, _.contains = C;
	let w = [{
		begin: /^\s*=>/,
		starts: {
			end: "$",
			contains: C
		}
	}, {
		className: "meta.prompt",
		begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
		starts: {
			end: "$",
			keywords: l,
			contains: C
		}
	}];
	return f.unshift(d), {
		name: "Ruby",
		aliases: [
			"rb",
			"gemspec",
			"podspec",
			"thor",
			"irb"
		],
		keywords: l,
		illegal: /\/\*/,
		contains: [e.SHEBANG({ binary: "ruby" })].concat(w, f, C)
	};
}
function rust(e) {
	let t = e.regex, n = /(r#)?/, a = t.concat(n, e.UNDERSCORE_IDENT_RE), o = t.concat(n, e.IDENT_RE), s = {
		className: "title.function.invoke",
		relevance: 0,
		begin: t.concat(/\b/, /(?!let|for|while|if|else|match\b)/, o, t.lookahead(/\s*\(/))
	}, l = "([ui](8|16|32|64|128|size)|f(32|64))?", u = /* @__PURE__ */ "abstract.as.async.await.become.box.break.const.continue.crate.do.dyn.else.enum.extern.false.final.fn.for.if.impl.in.let.loop.macro.match.mod.move.mut.override.priv.pub.ref.return.self.Self.static.struct.super.trait.true.try.type.typeof.union.unsafe.unsized.use.virtual.where.while.yield".split("."), d = [
		"true",
		"false",
		"Some",
		"None",
		"Ok",
		"Err"
	], f = /* @__PURE__ */ "drop .Copy.Send.Sized.Sync.Drop.Fn.FnMut.FnOnce.ToOwned.Clone.Debug.PartialEq.PartialOrd.Eq.Ord.AsRef.AsMut.Into.From.Default.Iterator.Extend.IntoIterator.DoubleEndedIterator.ExactSizeIterator.SliceConcatExt.ToString.assert!.assert_eq!.bitflags!.bytes!.cfg!.col!.concat!.concat_idents!.debug_assert!.debug_assert_eq!.env!.eprintln!.panic!.file!.format!.format_args!.include_bytes!.include_str!.line!.local_data_key!.module_path!.option_env!.print!.println!.select!.stringify!.try!.unimplemented!.unreachable!.vec!.write!.writeln!.macro_rules!.assert_ne!.debug_assert_ne!".split("."), p = [
		"i8",
		"i16",
		"i32",
		"i64",
		"i128",
		"isize",
		"u8",
		"u16",
		"u32",
		"u64",
		"u128",
		"usize",
		"f32",
		"f64",
		"str",
		"char",
		"bool",
		"Box",
		"Option",
		"Result",
		"String",
		"Vec"
	];
	return {
		name: "Rust",
		aliases: ["rs"],
		keywords: {
			$pattern: e.IDENT_RE + "!?",
			type: p,
			keyword: u,
			literal: d,
			built_in: f
		},
		illegal: "</",
		contains: [
			e.C_LINE_COMMENT_MODE,
			e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
			e.inherit(e.QUOTE_STRING_MODE, {
				begin: /b?"/,
				illegal: null
			}),
			{
				className: "symbol",
				begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/
			},
			{
				scope: "string",
				variants: [{ begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ }, {
					begin: /b?'/,
					end: /'/,
					contains: [{
						scope: "char.escape",
						match: /\\('|\w|x\w{2}|u\w{4}|U\w{8})/
					}]
				}]
			},
			{
				className: "number",
				variants: [
					{ begin: "\\b0b([01_]+)" + l },
					{ begin: "\\b0o([0-7_]+)" + l },
					{ begin: "\\b0x([A-Fa-f0-9_]+)" + l },
					{ begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + l }
				],
				relevance: 0
			},
			{
				begin: [
					/fn/,
					/\s+/,
					a
				],
				className: {
					1: "keyword",
					3: "title.function"
				}
			},
			{
				className: "meta",
				begin: "#!?\\[",
				end: "\\]",
				contains: [{
					className: "string",
					begin: /"/,
					end: /"/,
					contains: [e.BACKSLASH_ESCAPE]
				}]
			},
			{
				begin: [
					/let/,
					/\s+/,
					/(?:mut\s+)?/,
					a
				],
				className: {
					1: "keyword",
					3: "keyword",
					4: "variable"
				}
			},
			{
				begin: [
					/for/,
					/\s+/,
					a,
					/\s+/,
					/in/
				],
				className: {
					1: "keyword",
					3: "variable",
					5: "keyword"
				}
			},
			{
				begin: [
					/type/,
					/\s+/,
					a
				],
				className: {
					1: "keyword",
					3: "title.class"
				}
			},
			{
				begin: [
					/(?:trait|enum|struct|union|impl|for)/,
					/\s+/,
					a
				],
				className: {
					1: "keyword",
					3: "title.class"
				}
			},
			{
				begin: e.IDENT_RE + "::",
				keywords: {
					keyword: "Self",
					built_in: f,
					type: p
				}
			},
			{
				className: "punctuation",
				begin: "->"
			},
			s
		]
	};
}
var MODES$1 = (e) => ({
	IMPORTANT: {
		scope: "meta",
		begin: "!important"
	},
	BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
	HEXCOLOR: {
		scope: "number",
		begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
	},
	FUNCTION_DISPATCH: {
		className: "built_in",
		begin: /[\w-]+(?=\()/
	},
	ATTRIBUTE_SELECTOR_MODE: {
		scope: "selector-attr",
		begin: /\[/,
		end: /\]/,
		illegal: "$",
		contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
	},
	CSS_NUMBER_MODE: {
		scope: "number",
		begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
		relevance: 0
	},
	CSS_VARIABLE: {
		className: "attr",
		begin: /--[A-Za-z_][A-Za-z0-9_-]*/
	}
}), HTML_TAGS = /* @__PURE__ */ "a.abbr.address.article.aside.audio.b.blockquote.body.button.canvas.caption.cite.code.dd.del.details.dfn.div.dl.dt.em.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.html.i.iframe.img.input.ins.kbd.label.legend.li.main.mark.menu.nav.object.ol.optgroup.option.p.picture.q.quote.samp.section.select.source.span.strong.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.tr.ul.var.video".split("."), SVG_TAGS = /* @__PURE__ */ "defs.g.marker.mask.pattern.svg.switch.symbol.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feFlood.feGaussianBlur.feImage.feMerge.feMorphology.feOffset.feSpecularLighting.feTile.feTurbulence.linearGradient.radialGradient.stop.circle.ellipse.image.line.path.polygon.polyline.rect.text.use.textPath.tspan.foreignObject.clipPath".split("."), TAGS = [...HTML_TAGS, ...SVG_TAGS], MEDIA_FEATURES = (/* @__PURE__ */ "any-hover.any-pointer.aspect-ratio.color.color-gamut.color-index.device-aspect-ratio.device-height.device-width.display-mode.forced-colors.grid.height.hover.inverted-colors.monochrome.orientation.overflow-block.overflow-inline.pointer.prefers-color-scheme.prefers-contrast.prefers-reduced-motion.prefers-reduced-transparency.resolution.scan.scripting.update.width.min-width.max-width.min-height.max-height".split(".")).sort().reverse(), PSEUDO_CLASSES = (/* @__PURE__ */ "active.any-link.blank.checked.current.default.defined.dir.disabled.drop.empty.enabled.first.first-child.first-of-type.fullscreen.future.focus.focus-visible.focus-within.has.host.host-context.hover.indeterminate.in-range.invalid.is.lang.last-child.last-of-type.left.link.local-link.not.nth-child.nth-col.nth-last-child.nth-last-col.nth-last-of-type.nth-of-type.only-child.only-of-type.optional.out-of-range.past.placeholder-shown.read-only.read-write.required.right.root.scope.target.target-within.user-invalid.valid.visited.where".split(".")).sort().reverse(), PSEUDO_ELEMENTS = [
	"after",
	"backdrop",
	"before",
	"cue",
	"cue-region",
	"first-letter",
	"first-line",
	"grammar-error",
	"marker",
	"part",
	"placeholder",
	"selection",
	"slotted",
	"spelling-error"
].sort().reverse(), ATTRIBUTES = (/* @__PURE__ */ "accent-color.align-content.align-items.align-self.alignment-baseline.all.anchor-name.animation.animation-composition.animation-delay.animation-direction.animation-duration.animation-fill-mode.animation-iteration-count.animation-name.animation-play-state.animation-range.animation-range-end.animation-range-start.animation-timeline.animation-timing-function.appearance.aspect-ratio.backdrop-filter.backface-visibility.background.background-attachment.background-blend-mode.background-clip.background-color.background-image.background-origin.background-position.background-position-x.background-position-y.background-repeat.background-size.baseline-shift.block-size.border.border-block.border-block-color.border-block-end.border-block-end-color.border-block-end-style.border-block-end-width.border-block-start.border-block-start-color.border-block-start-style.border-block-start-width.border-block-style.border-block-width.border-bottom.border-bottom-color.border-bottom-left-radius.border-bottom-right-radius.border-bottom-style.border-bottom-width.border-collapse.border-color.border-end-end-radius.border-end-start-radius.border-image.border-image-outset.border-image-repeat.border-image-slice.border-image-source.border-image-width.border-inline.border-inline-color.border-inline-end.border-inline-end-color.border-inline-end-style.border-inline-end-width.border-inline-start.border-inline-start-color.border-inline-start-style.border-inline-start-width.border-inline-style.border-inline-width.border-left.border-left-color.border-left-style.border-left-width.border-radius.border-right.border-right-color.border-right-style.border-right-width.border-spacing.border-start-end-radius.border-start-start-radius.border-style.border-top.border-top-color.border-top-left-radius.border-top-right-radius.border-top-style.border-top-width.border-width.bottom.box-align.box-decoration-break.box-direction.box-flex.box-flex-group.box-lines.box-ordinal-group.box-orient.box-pack.box-shadow.box-sizing.break-after.break-before.break-inside.caption-side.caret-color.clear.clip.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.color-scheme.column-count.column-fill.column-gap.column-rule.column-rule-color.column-rule-style.column-rule-width.column-span.column-width.columns.contain.contain-intrinsic-block-size.contain-intrinsic-height.contain-intrinsic-inline-size.contain-intrinsic-size.contain-intrinsic-width.container.container-name.container-type.content.content-visibility.counter-increment.counter-reset.counter-set.cue.cue-after.cue-before.cursor.cx.cy.direction.display.dominant-baseline.empty-cells.enable-background.field-sizing.fill.fill-opacity.fill-rule.filter.flex.flex-basis.flex-direction.flex-flow.flex-grow.flex-shrink.flex-wrap.float.flood-color.flood-opacity.flow.font.font-display.font-family.font-feature-settings.font-kerning.font-language-override.font-optical-sizing.font-palette.font-size.font-size-adjust.font-smooth.font-smoothing.font-stretch.font-style.font-synthesis.font-synthesis-position.font-synthesis-small-caps.font-synthesis-style.font-synthesis-weight.font-variant.font-variant-alternates.font-variant-caps.font-variant-east-asian.font-variant-emoji.font-variant-ligatures.font-variant-numeric.font-variant-position.font-variation-settings.font-weight.forced-color-adjust.gap.glyph-orientation-horizontal.glyph-orientation-vertical.grid.grid-area.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-column.grid-column-end.grid-column-start.grid-gap.grid-row.grid-row-end.grid-row-start.grid-template.grid-template-areas.grid-template-columns.grid-template-rows.hanging-punctuation.height.hyphenate-character.hyphenate-limit-chars.hyphens.icon.image-orientation.image-rendering.image-resolution.ime-mode.initial-letter.initial-letter-align.inline-size.inset.inset-area.inset-block.inset-block-end.inset-block-start.inset-inline.inset-inline-end.inset-inline-start.isolation.justify-content.justify-items.justify-self.kerning.left.letter-spacing.lighting-color.line-break.line-height.line-height-step.list-style.list-style-image.list-style-position.list-style-type.margin.margin-block.margin-block-end.margin-block-start.margin-bottom.margin-inline.margin-inline-end.margin-inline-start.margin-left.margin-right.margin-top.margin-trim.marker.marker-end.marker-mid.marker-start.marks.mask.mask-border.mask-border-mode.mask-border-outset.mask-border-repeat.mask-border-slice.mask-border-source.mask-border-width.mask-clip.mask-composite.mask-image.mask-mode.mask-origin.mask-position.mask-repeat.mask-size.mask-type.masonry-auto-flow.math-depth.math-shift.math-style.max-block-size.max-height.max-inline-size.max-width.min-block-size.min-height.min-inline-size.min-width.mix-blend-mode.nav-down.nav-index.nav-left.nav-right.nav-up.none.normal.object-fit.object-position.offset.offset-anchor.offset-distance.offset-path.offset-position.offset-rotate.opacity.order.orphans.outline.outline-color.outline-offset.outline-style.outline-width.overflow.overflow-anchor.overflow-block.overflow-clip-margin.overflow-inline.overflow-wrap.overflow-x.overflow-y.overlay.overscroll-behavior.overscroll-behavior-block.overscroll-behavior-inline.overscroll-behavior-x.overscroll-behavior-y.padding.padding-block.padding-block-end.padding-block-start.padding-bottom.padding-inline.padding-inline-end.padding-inline-start.padding-left.padding-right.padding-top.page.page-break-after.page-break-before.page-break-inside.paint-order.pause.pause-after.pause-before.perspective.perspective-origin.place-content.place-items.place-self.pointer-events.position.position-anchor.position-visibility.print-color-adjust.quotes.r.resize.rest.rest-after.rest-before.right.rotate.row-gap.ruby-align.ruby-position.scale.scroll-behavior.scroll-margin.scroll-margin-block.scroll-margin-block-end.scroll-margin-block-start.scroll-margin-bottom.scroll-margin-inline.scroll-margin-inline-end.scroll-margin-inline-start.scroll-margin-left.scroll-margin-right.scroll-margin-top.scroll-padding.scroll-padding-block.scroll-padding-block-end.scroll-padding-block-start.scroll-padding-bottom.scroll-padding-inline.scroll-padding-inline-end.scroll-padding-inline-start.scroll-padding-left.scroll-padding-right.scroll-padding-top.scroll-snap-align.scroll-snap-stop.scroll-snap-type.scroll-timeline.scroll-timeline-axis.scroll-timeline-name.scrollbar-color.scrollbar-gutter.scrollbar-width.shape-image-threshold.shape-margin.shape-outside.shape-rendering.speak.speak-as.src.stop-color.stop-opacity.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.table-layout.text-align.text-align-all.text-align-last.text-anchor.text-combine-upright.text-decoration.text-decoration-color.text-decoration-line.text-decoration-skip.text-decoration-skip-ink.text-decoration-style.text-decoration-thickness.text-emphasis.text-emphasis-color.text-emphasis-position.text-emphasis-style.text-indent.text-justify.text-orientation.text-overflow.text-rendering.text-shadow.text-size-adjust.text-transform.text-underline-offset.text-underline-position.text-wrap.text-wrap-mode.text-wrap-style.timeline-scope.top.touch-action.transform.transform-box.transform-origin.transform-style.transition.transition-behavior.transition-delay.transition-duration.transition-property.transition-timing-function.translate.unicode-bidi.user-modify.user-select.vector-effect.vertical-align.view-timeline.view-timeline-axis.view-timeline-inset.view-timeline-name.view-transition-name.visibility.voice-balance.voice-duration.voice-family.voice-pitch.voice-range.voice-rate.voice-stress.voice-volume.white-space.white-space-collapse.widows.width.will-change.word-break.word-spacing.word-wrap.writing-mode.x.y.z-index.zoom".split(".")).sort().reverse();
function scss(e) {
	let t = MODES$1(e), n = PSEUDO_ELEMENTS, a = PSEUDO_CLASSES, o = "@[a-z-]+", s = {
		className: "variable",
		begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
		relevance: 0
	};
	return {
		name: "SCSS",
		case_insensitive: !0,
		illegal: "[=/|']",
		contains: [
			e.C_LINE_COMMENT_MODE,
			e.C_BLOCK_COMMENT_MODE,
			t.CSS_NUMBER_MODE,
			{
				className: "selector-id",
				begin: "#[A-Za-z0-9_-]+",
				relevance: 0
			},
			{
				className: "selector-class",
				begin: "\\.[A-Za-z0-9_-]+",
				relevance: 0
			},
			t.ATTRIBUTE_SELECTOR_MODE,
			{
				className: "selector-tag",
				begin: "\\b(" + TAGS.join("|") + ")\\b",
				relevance: 0
			},
			{
				className: "selector-pseudo",
				begin: ":(" + a.join("|") + ")"
			},
			{
				className: "selector-pseudo",
				begin: ":(:)?(" + n.join("|") + ")"
			},
			s,
			{
				begin: /\(/,
				end: /\)/,
				contains: [t.CSS_NUMBER_MODE]
			},
			t.CSS_VARIABLE,
			{
				className: "attribute",
				begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
			},
			{ begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" },
			{
				begin: /:/,
				end: /[;}{]/,
				relevance: 0,
				contains: [
					t.BLOCK_COMMENT,
					s,
					t.HEXCOLOR,
					t.CSS_NUMBER_MODE,
					e.QUOTE_STRING_MODE,
					e.APOS_STRING_MODE,
					t.IMPORTANT,
					t.FUNCTION_DISPATCH
				]
			},
			{
				begin: "@(page|font-face)",
				keywords: {
					$pattern: o,
					keyword: "@page @font-face"
				}
			},
			{
				begin: "@",
				end: "[{;]",
				returnBegin: !0,
				keywords: {
					$pattern: /[a-z-]+/,
					keyword: "and or not only",
					attribute: MEDIA_FEATURES.join(" ")
				},
				contains: [
					{
						begin: o,
						className: "keyword"
					},
					{
						begin: /[a-z-]+(?=:)/,
						className: "attribute"
					},
					s,
					e.QUOTE_STRING_MODE,
					e.APOS_STRING_MODE,
					t.HEXCOLOR,
					t.CSS_NUMBER_MODE
				]
			},
			t.FUNCTION_DISPATCH
		]
	};
}
function shell(e) {
	return {
		name: "Shell Session",
		aliases: ["console", "shellsession"],
		contains: [{
			className: "meta.prompt",
			begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
			starts: {
				end: /[^\\](?=\s*$)/,
				subLanguage: "bash"
			}
		}]
	};
}
function sql(e) {
	let t = e.regex, n = e.COMMENT("--", "$"), a = {
		scope: "string",
		variants: [{
			begin: /'/,
			end: /'/,
			contains: [{ match: /''/ }]
		}]
	}, o = {
		begin: /"/,
		end: /"/,
		contains: [{ match: /""/ }]
	}, s = [
		"true",
		"false",
		"unknown"
	], l = [
		"double precision",
		"large object",
		"with timezone",
		"without timezone"
	], u = /* @__PURE__ */ "bigint.binary.blob.boolean.char.character.clob.date.dec.decfloat.decimal.float.int.integer.interval.nchar.nclob.national.numeric.real.row.smallint.time.timestamp.varchar.varying.varbinary".split("."), d = [
		"add",
		"asc",
		"collation",
		"desc",
		"final",
		"first",
		"last",
		"view"
	], f = /* @__PURE__ */ "abs.acos.all.allocate.alter.and.any.are.array.array_agg.array_max_cardinality.as.asensitive.asin.asymmetric.at.atan.atomic.authorization.avg.begin.begin_frame.begin_partition.between.bigint.binary.blob.boolean.both.by.call.called.cardinality.cascaded.case.cast.ceil.ceiling.char.char_length.character.character_length.check.classifier.clob.close.coalesce.collate.collect.column.commit.condition.connect.constraint.contains.convert.copy.corr.corresponding.cos.cosh.count.covar_pop.covar_samp.create.cross.cube.cume_dist.current.current_catalog.current_date.current_default_transform_group.current_path.current_role.current_row.current_schema.current_time.current_timestamp.current_path.current_role.current_transform_group_for_type.current_user.cursor.cycle.date.day.deallocate.dec.decimal.decfloat.declare.default.define.delete.dense_rank.deref.describe.deterministic.disconnect.distinct.double.drop.dynamic.each.element.else.empty.end.end_frame.end_partition.end-exec.equals.escape.every.except.exec.execute.exists.exp.external.extract.false.fetch.filter.first_value.float.floor.for.foreign.frame_row.free.from.full.function.fusion.get.global.grant.group.grouping.groups.having.hold.hour.identity.in.indicator.initial.inner.inout.insensitive.insert.int.integer.intersect.intersection.interval.into.is.join.json_array.json_arrayagg.json_exists.json_object.json_objectagg.json_query.json_table.json_table_primitive.json_value.lag.language.large.last_value.lateral.lead.leading.left.like.like_regex.listagg.ln.local.localtime.localtimestamp.log.log10.lower.match.match_number.match_recognize.matches.max.member.merge.method.min.minute.mod.modifies.module.month.multiset.national.natural.nchar.nclob.new.no.none.normalize.not.nth_value.ntile.null.nullif.numeric.octet_length.occurrences_regex.of.offset.old.omit.on.one.only.open.or.order.out.outer.over.overlaps.overlay.parameter.partition.pattern.per.percent.percent_rank.percentile_cont.percentile_disc.period.portion.position.position_regex.power.precedes.precision.prepare.primary.procedure.ptf.range.rank.reads.real.recursive.ref.references.referencing.regr_avgx.regr_avgy.regr_count.regr_intercept.regr_r2.regr_slope.regr_sxx.regr_sxy.regr_syy.release.result.return.returns.revoke.right.rollback.rollup.row.row_number.rows.running.savepoint.scope.scroll.search.second.seek.select.sensitive.session_user.set.show.similar.sin.sinh.skip.smallint.some.specific.specifictype.sql.sqlexception.sqlstate.sqlwarning.sqrt.start.static.stddev_pop.stddev_samp.submultiset.subset.substring.substring_regex.succeeds.sum.symmetric.system.system_time.system_user.table.tablesample.tan.tanh.then.time.timestamp.timezone_hour.timezone_minute.to.trailing.translate.translate_regex.translation.treat.trigger.trim.trim_array.true.truncate.uescape.union.unique.unknown.unnest.update.upper.user.using.value.values.value_of.var_pop.var_samp.varbinary.varchar.varying.versioning.when.whenever.where.width_bucket.window.with.within.without.year".split("."), p = /* @__PURE__ */ "abs.acos.array_agg.asin.atan.avg.cast.ceil.ceiling.coalesce.corr.cos.cosh.count.covar_pop.covar_samp.cume_dist.dense_rank.deref.element.exp.extract.first_value.floor.json_array.json_arrayagg.json_exists.json_object.json_objectagg.json_query.json_table.json_table_primitive.json_value.lag.last_value.lead.listagg.ln.log.log10.lower.max.min.mod.nth_value.ntile.nullif.percent_rank.percentile_cont.percentile_disc.position.position_regex.power.rank.regr_avgx.regr_avgy.regr_count.regr_intercept.regr_r2.regr_slope.regr_sxx.regr_sxy.regr_syy.row_number.sin.sinh.sqrt.stddev_pop.stddev_samp.substring.substring_regex.sum.tan.tanh.translate.translate_regex.treat.trim.trim_array.unnest.upper.value_of.var_pop.var_samp.width_bucket".split("."), m = [
		"current_catalog",
		"current_date",
		"current_default_transform_group",
		"current_path",
		"current_role",
		"current_schema",
		"current_transform_group_for_type",
		"current_user",
		"session_user",
		"system_time",
		"system_user",
		"current_time",
		"localtime",
		"current_timestamp",
		"localtimestamp"
	], h = [
		"create table",
		"insert into",
		"primary key",
		"foreign key",
		"not null",
		"alter table",
		"add constraint",
		"grouping sets",
		"on overflow",
		"character set",
		"respect nulls",
		"ignore nulls",
		"nulls first",
		"nulls last",
		"depth first",
		"breadth first"
	], g = p, _ = [...f, ...d].filter((e) => !p.includes(e)), v = {
		scope: "variable",
		match: /@[a-z0-9][a-z0-9_]*/
	}, y = {
		scope: "operator",
		match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
		relevance: 0
	}, b = {
		match: t.concat(/\b/, t.either(...g), /\s*\(/),
		relevance: 0,
		keywords: { built_in: g }
	};
	function x(e) {
		return t.concat(/\b/, t.either(...e.map((e) => e.replace(/\s+/, "\\s+"))), /\b/);
	}
	let C = {
		scope: "keyword",
		match: x(h),
		relevance: 0
	};
	function w(e, { exceptions: t, when: n } = {}) {
		let a = n;
		return t ||= [], e.map((e) => e.match(/\|\d+$/) || t.includes(e) ? e : a(e) ? `${e}|0` : e);
	}
	return {
		name: "SQL",
		case_insensitive: !0,
		illegal: /[{}]|<\//,
		keywords: {
			$pattern: /\b[\w\.]+/,
			keyword: w(_, { when: (e) => e.length < 3 }),
			literal: s,
			type: u,
			built_in: m
		},
		contains: [
			{
				scope: "type",
				match: x(l)
			},
			C,
			b,
			v,
			a,
			o,
			e.C_NUMBER_MODE,
			e.C_BLOCK_COMMENT_MODE,
			n,
			y
		]
	};
}
function source$1(e) {
	return e ? typeof e == "string" ? e : e.source : null;
}
function lookahead$1(e) {
	return concat$1("(?=", e, ")");
}
function concat$1(...e) {
	return e.map((e) => source$1(e)).join("");
}
function stripOptionsFromArgs$1(e) {
	let t = e[e.length - 1];
	return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function either$1(...e) {
	return "(" + (stripOptionsFromArgs$1(e).capture ? "" : "?:") + e.map((e) => source$1(e)).join("|") + ")";
}
var keywordWrapper = (e) => concat$1(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/), dotKeywords = ["Protocol", "Type"].map(keywordWrapper), optionalDotKeywords = ["init", "self"].map(keywordWrapper), keywordTypes = ["Any", "Self"], keywords = [
	"actor",
	"any",
	"associatedtype",
	"async",
	"await",
	/as\?/,
	/as!/,
	"as",
	"borrowing",
	"break",
	"case",
	"catch",
	"class",
	"consume",
	"consuming",
	"continue",
	"convenience",
	"copy",
	"default",
	"defer",
	"deinit",
	"didSet",
	"distributed",
	"do",
	"dynamic",
	"each",
	"else",
	"enum",
	"extension",
	"fallthrough",
	/fileprivate\(set\)/,
	"fileprivate",
	"final",
	"for",
	"func",
	"get",
	"guard",
	"if",
	"import",
	"indirect",
	"infix",
	/init\?/,
	/init!/,
	"inout",
	/internal\(set\)/,
	"internal",
	"in",
	"is",
	"isolated",
	"nonisolated",
	"lazy",
	"let",
	"macro",
	"mutating",
	"nonmutating",
	/open\(set\)/,
	"open",
	"operator",
	"optional",
	"override",
	"package",
	"postfix",
	"precedencegroup",
	"prefix",
	/private\(set\)/,
	"private",
	"protocol",
	/public\(set\)/,
	"public",
	"repeat",
	"required",
	"rethrows",
	"return",
	"set",
	"some",
	"static",
	"struct",
	"subscript",
	"super",
	"switch",
	"throws",
	"throw",
	/try\?/,
	/try!/,
	"try",
	"typealias",
	/unowned\(safe\)/,
	/unowned\(unsafe\)/,
	"unowned",
	"var",
	"weak",
	"where",
	"while",
	"willSet"
], literals = [
	"false",
	"nil",
	"true"
], precedencegroupKeywords = [
	"assignment",
	"associativity",
	"higherThan",
	"left",
	"lowerThan",
	"none",
	"right"
], numberSignKeywords = [
	"#colorLiteral",
	"#column",
	"#dsohandle",
	"#else",
	"#elseif",
	"#endif",
	"#error",
	"#file",
	"#fileID",
	"#fileLiteral",
	"#filePath",
	"#function",
	"#if",
	"#imageLiteral",
	"#keyPath",
	"#line",
	"#selector",
	"#sourceLocation",
	"#warning"
], builtIns = /* @__PURE__ */ "abs.all.any.assert.assertionFailure.debugPrint.dump.fatalError.getVaList.isKnownUniquelyReferenced.max.min.numericCast.pointwiseMax.pointwiseMin.precondition.preconditionFailure.print.readLine.repeatElement.sequence.stride.swap.swift_unboxFromSwiftValueWithType.transcode.type.unsafeBitCast.unsafeDowncast.withExtendedLifetime.withUnsafeMutablePointer.withUnsafePointer.withVaList.withoutActuallyEscaping.zip".split("."), operatorHead = either$1(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/), operatorCharacter = either$1(operatorHead, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/), operator = concat$1(operatorHead, operatorCharacter, "*"), identifierHead = either$1(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/), identifierCharacter = either$1(identifierHead, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/), identifier = concat$1(identifierHead, identifierCharacter, "*"), typeIdentifier = concat$1(/[A-Z]/, identifierCharacter, "*"), keywordAttributes = [
	"attached",
	"autoclosure",
	concat$1(/convention\(/, either$1("swift", "block", "c"), /\)/),
	"discardableResult",
	"dynamicCallable",
	"dynamicMemberLookup",
	"escaping",
	"freestanding",
	"frozen",
	"GKInspectable",
	"IBAction",
	"IBDesignable",
	"IBInspectable",
	"IBOutlet",
	"IBSegueAction",
	"inlinable",
	"main",
	"nonobjc",
	"NSApplicationMain",
	"NSCopying",
	"NSManaged",
	concat$1(/objc\(/, identifier, /\)/),
	"objc",
	"objcMembers",
	"propertyWrapper",
	"requires_stored_property_inits",
	"resultBuilder",
	"Sendable",
	"testable",
	"UIApplicationMain",
	"unchecked",
	"unknown",
	"usableFromInline",
	"warn_unqualified_access"
], availabilityKeywords = [
	"iOS",
	"iOSApplicationExtension",
	"macOS",
	"macOSApplicationExtension",
	"macCatalyst",
	"macCatalystApplicationExtension",
	"watchOS",
	"watchOSApplicationExtension",
	"tvOS",
	"tvOSApplicationExtension",
	"swift"
];
function swift(e) {
	let t = {
		match: /\s+/,
		relevance: 0
	}, n = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }), a = [e.C_LINE_COMMENT_MODE, n], o = {
		match: [/\./, either$1(...dotKeywords, ...optionalDotKeywords)],
		className: { 2: "keyword" }
	}, s = {
		match: concat$1(/\./, either$1(...keywords)),
		relevance: 0
	}, l = keywords.filter((e) => typeof e == "string").concat(["_|0"]), u = { variants: [{
		className: "keyword",
		match: either$1(...keywords.filter((e) => typeof e != "string").concat(keywordTypes).map(keywordWrapper), ...optionalDotKeywords)
	}] }, d = {
		$pattern: either$1(/\b\w+/, /#\w+/),
		keyword: l.concat(numberSignKeywords),
		literal: literals
	}, f = [
		o,
		s,
		u
	], p = [{
		match: concat$1(/\./, either$1(...builtIns)),
		relevance: 0
	}, {
		className: "built_in",
		match: concat$1(/\b/, either$1(...builtIns), /(?=\()/)
	}], m = {
		match: /->/,
		relevance: 0
	}, h = [m, {
		className: "operator",
		relevance: 0,
		variants: [{ match: operator }, { match: `\\.(\\.|${operatorCharacter})+` }]
	}], g = "([0-9]_*)+", _ = "([0-9a-fA-F]_*)+", v = {
		className: "number",
		relevance: 0,
		variants: [
			{ match: `\\b(${g})(\\.(${g}))?([eE][+-]?(${g}))?\\b` },
			{ match: `\\b0x(${_})(\\.(${_}))?([pP][+-]?(${g}))?\\b` },
			{ match: /\b0o([0-7]_*)+\b/ },
			{ match: /\b0b([01]_*)+\b/ }
		]
	}, y = (e = "") => ({
		className: "subst",
		variants: [{ match: concat$1(/\\/, e, /[0\\tnr"']/) }, { match: concat$1(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) }]
	}), b = (e = "") => ({
		className: "subst",
		match: concat$1(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
	}), x = (e = "") => ({
		className: "subst",
		label: "interpol",
		begin: concat$1(/\\/, e, /\(/),
		end: /\)/
	}), C = (e = "") => ({
		begin: concat$1(e, /"""/),
		end: concat$1(/"""/, e),
		contains: [
			y(e),
			b(e),
			x(e)
		]
	}), w = (e = "") => ({
		begin: concat$1(e, /"/),
		end: concat$1(/"/, e),
		contains: [y(e), x(e)]
	}), E = {
		className: "string",
		variants: [
			C(),
			C("#"),
			C("##"),
			C("###"),
			w(),
			w("#"),
			w("##"),
			w("###")
		]
	}, O = [e.BACKSLASH_ESCAPE, {
		begin: /\[/,
		end: /\]/,
		relevance: 0,
		contains: [e.BACKSLASH_ESCAPE]
	}], k = {
		begin: /\/[^\s](?=[^/\n]*\/)/,
		end: /\//,
		contains: O
	}, A = (e) => {
		let t = concat$1(e, /\//), n = concat$1(/\//, e);
		return {
			begin: t,
			end: n,
			contains: [...O, {
				scope: "comment",
				begin: `#(?!.*${n})`,
				end: /$/
			}]
		};
	}, j = {
		scope: "regexp",
		variants: [
			A("###"),
			A("##"),
			A("#"),
			k
		]
	}, M = { match: concat$1(/`/, identifier, /`/) }, N = [
		M,
		{
			className: "variable",
			match: /\$\d+/
		},
		{
			className: "variable",
			match: `\\$${identifierCharacter}+`
		}
	], P = [
		{
			match: /(@|#(un)?)available/,
			scope: "keyword",
			starts: { contains: [{
				begin: /\(/,
				end: /\)/,
				keywords: availabilityKeywords,
				contains: [
					...h,
					v,
					E
				]
			}] }
		},
		{
			scope: "keyword",
			match: concat$1(/@/, either$1(...keywordAttributes), lookahead$1(either$1(/\(/, /\s+/)))
		},
		{
			scope: "meta",
			match: concat$1(/@/, identifier)
		}
	], F = {
		match: lookahead$1(/\b[A-Z]/),
		relevance: 0,
		contains: [
			{
				className: "type",
				match: concat$1(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, identifierCharacter, "+")
			},
			{
				className: "type",
				match: typeIdentifier,
				relevance: 0
			},
			{
				match: /[?!]+/,
				relevance: 0
			},
			{
				match: /\.\.\./,
				relevance: 0
			},
			{
				match: concat$1(/\s+&\s+/, lookahead$1(typeIdentifier)),
				relevance: 0
			}
		]
	}, I = {
		begin: /</,
		end: />/,
		keywords: d,
		contains: [
			...a,
			...f,
			...P,
			m,
			F
		]
	};
	F.contains.push(I);
	let L = {
		begin: /\(/,
		end: /\)/,
		relevance: 0,
		keywords: d,
		contains: [
			"self",
			{
				match: concat$1(identifier, /\s*:/),
				keywords: "_|0",
				relevance: 0
			},
			...a,
			j,
			...f,
			...p,
			...h,
			v,
			E,
			...N,
			...P,
			F
		]
	}, R = {
		begin: /</,
		end: />/,
		keywords: "repeat each",
		contains: [...a, F]
	}, z = {
		begin: /\(/,
		end: /\)/,
		keywords: d,
		contains: [
			{
				begin: either$1(lookahead$1(concat$1(identifier, /\s*:/)), lookahead$1(concat$1(identifier, /\s+/, identifier, /\s*:/))),
				end: /:/,
				relevance: 0,
				contains: [{
					className: "keyword",
					match: /\b_\b/
				}, {
					className: "params",
					match: identifier
				}]
			},
			...a,
			...f,
			...h,
			v,
			E,
			...P,
			F,
			L
		],
		endsParent: !0,
		illegal: /["']/
	}, B = {
		match: [
			/(func|macro)/,
			/\s+/,
			either$1(M.match, identifier, operator)
		],
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [
			R,
			z,
			t
		],
		illegal: [/\[/, /%/]
	}, V = {
		match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
		className: { 1: "keyword" },
		contains: [
			R,
			z,
			t
		],
		illegal: /\[|%/
	}, H = {
		match: [
			/operator/,
			/\s+/,
			operator
		],
		className: {
			1: "keyword",
			3: "title"
		}
	}, U = {
		begin: [
			/precedencegroup/,
			/\s+/,
			typeIdentifier
		],
		className: {
			1: "keyword",
			3: "title"
		},
		contains: [F],
		keywords: [...precedencegroupKeywords, ...literals],
		end: /}/
	}, W = {
		match: [
			/class\b/,
			/\s+/,
			/func\b/,
			/\s+/,
			/\b[A-Za-z_][A-Za-z0-9_]*\b/
		],
		scope: {
			1: "keyword",
			3: "keyword",
			5: "title.function"
		}
	}, G = {
		match: [
			/class\b/,
			/\s+/,
			/var\b/
		],
		scope: {
			1: "keyword",
			3: "keyword"
		}
	}, Yo = {
		begin: [
			/(struct|protocol|class|extension|enum|actor)/,
			/\s+/,
			identifier,
			/\s*/
		],
		beginScope: {
			1: "keyword",
			3: "title.class"
		},
		keywords: d,
		contains: [
			R,
			...f,
			{
				begin: /:/,
				end: /\{/,
				keywords: d,
				contains: [{
					scope: "title.class.inherited",
					match: typeIdentifier
				}, ...f],
				relevance: 0
			}
		]
	};
	for (let e of E.variants) {
		let t = e.contains.find((e) => e.label === "interpol");
		t.keywords = d;
		let n = [
			...f,
			...p,
			...h,
			v,
			E,
			...N
		];
		t.contains = [...n, {
			begin: /\(/,
			end: /\)/,
			contains: ["self", ...n]
		}];
	}
	return {
		name: "Swift",
		keywords: d,
		contains: [
			...a,
			B,
			V,
			W,
			G,
			Yo,
			H,
			U,
			{
				beginKeywords: "import",
				end: /$/,
				contains: [...a],
				relevance: 0
			},
			j,
			...f,
			...p,
			...h,
			v,
			E,
			...N,
			...P,
			F,
			L
		]
	};
}
var IDENT_RE$1 = "[A-Za-z$_][0-9A-Za-z$_]*", KEYWORDS = /* @__PURE__ */ "as.in.of.if.for.while.finally.var.new.function.do.return.void.else.break.catch.instanceof.with.throw.case.default.try.switch.continue.typeof.delete.let.yield.const.class.debugger.async.await.static.import.from.export.extends.using".split("."), LITERALS = [
	"true",
	"false",
	"null",
	"undefined",
	"NaN",
	"Infinity"
], TYPES = /* @__PURE__ */ "Object.Function.Boolean.Symbol.Math.Date.Number.BigInt.String.RegExp.Array.Float32Array.Float64Array.Int8Array.Uint8Array.Uint8ClampedArray.Int16Array.Int32Array.Uint16Array.Uint32Array.BigInt64Array.BigUint64Array.Set.Map.WeakSet.WeakMap.ArrayBuffer.SharedArrayBuffer.Atomics.DataView.JSON.Promise.Generator.GeneratorFunction.AsyncFunction.Reflect.Proxy.Intl.WebAssembly".split("."), ERROR_TYPES = [
	"Error",
	"EvalError",
	"InternalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError"
], BUILT_IN_GLOBALS = [
	"setInterval",
	"setTimeout",
	"clearInterval",
	"clearTimeout",
	"require",
	"exports",
	"eval",
	"isFinite",
	"isNaN",
	"parseFloat",
	"parseInt",
	"decodeURI",
	"decodeURIComponent",
	"encodeURI",
	"encodeURIComponent",
	"escape",
	"unescape"
], BUILT_IN_VARIABLES = [
	"arguments",
	"this",
	"super",
	"console",
	"window",
	"document",
	"localStorage",
	"sessionStorage",
	"module",
	"global"
], BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
function javascript$1(e) {
	let t = e.regex, n = (e, { after: t }) => {
		let n = "</" + e[0].slice(1);
		return e.input.indexOf(n, t) !== -1;
	}, a = IDENT_RE$1, o = {
		begin: "<>",
		end: "</>"
	}, s = /<[A-Za-z0-9\\._:-]+\s*\/>/, l = {
		begin: /<[A-Za-z0-9\\._:-]+/,
		end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
		isTrulyOpeningTag: (e, t) => {
			let a = e[0].length + e.index, o = e.input[a];
			if (o === "<" || o === ",") {
				t.ignoreMatch();
				return;
			}
			o === ">" && (n(e, { after: a }) || t.ignoreMatch());
			let s, l = e.input.substring(a);
			if (s = l.match(/^\s*=/)) {
				t.ignoreMatch();
				return;
			}
			if ((s = l.match(/^\s+extends\s+/)) && s.index === 0) {
				t.ignoreMatch();
				return;
			}
		}
	}, u = {
		$pattern: IDENT_RE$1,
		keyword: KEYWORDS,
		literal: LITERALS,
		built_in: BUILT_INS,
		"variable.language": BUILT_IN_VARIABLES
	}, d = "[0-9](_?[0-9])*", f = `\\.(${d})`, p = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", m = {
		className: "number",
		variants: [
			{ begin: `(\\b(${p})((${f})|\\.)?|(${f}))[eE][+-]?(${d})\\b` },
			{ begin: `\\b(${p})\\b((${f})\\b|\\.)?|(${f})\\b` },
			{ begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
			{ begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
			{ begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
			{ begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
			{ begin: "\\b0[0-7]+n?\\b" }
		],
		relevance: 0
	}, h = {
		className: "subst",
		begin: "\\$\\{",
		end: "\\}",
		keywords: u,
		contains: []
	}, g = {
		begin: ".?html`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, h],
			subLanguage: "xml"
		}
	}, _ = {
		begin: ".?css`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, h],
			subLanguage: "css"
		}
	}, v = {
		begin: ".?gql`",
		end: "",
		starts: {
			end: "`",
			returnEnd: !1,
			contains: [e.BACKSLASH_ESCAPE, h],
			subLanguage: "graphql"
		}
	}, y = {
		className: "string",
		begin: "`",
		end: "`",
		contains: [e.BACKSLASH_ESCAPE, h]
	}, b = {
		className: "comment",
		variants: [
			e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
				relevance: 0,
				contains: [{
					begin: "(?=@[A-Za-z]+)",
					relevance: 0,
					contains: [
						{
							className: "doctag",
							begin: "@[A-Za-z]+"
						},
						{
							className: "type",
							begin: "\\{",
							end: "\\}",
							excludeEnd: !0,
							excludeBegin: !0,
							relevance: 0
						},
						{
							className: "variable",
							begin: a + "(?=\\s*(-)|$)",
							endsParent: !0,
							relevance: 0
						},
						{
							begin: /(?=[^\n])\s/,
							relevance: 0
						}
					]
				}]
			}),
			e.C_BLOCK_COMMENT_MODE,
			e.C_LINE_COMMENT_MODE
		]
	}, x = [
		e.APOS_STRING_MODE,
		e.QUOTE_STRING_MODE,
		g,
		_,
		v,
		y,
		{ match: /\$\d+/ },
		m
	];
	h.contains = x.concat({
		begin: /\{/,
		end: /\}/,
		keywords: u,
		contains: ["self"].concat(x)
	});
	let C = [].concat(b, h.contains), w = C.concat([{
		begin: /(\s*)\(/,
		end: /\)/,
		keywords: u,
		contains: ["self"].concat(C)
	}]), E = {
		className: "params",
		begin: /(\s*)\(/,
		end: /\)/,
		excludeBegin: !0,
		excludeEnd: !0,
		keywords: u,
		contains: w
	}, O = { variants: [{
		match: [
			/class/,
			/\s+/,
			a,
			/\s+/,
			/extends/,
			/\s+/,
			t.concat(a, "(", t.concat(/\./, a), ")*")
		],
		scope: {
			1: "keyword",
			3: "title.class",
			5: "keyword",
			7: "title.class.inherited"
		}
	}, {
		match: [
			/class/,
			/\s+/,
			a
		],
		scope: {
			1: "keyword",
			3: "title.class"
		}
	}] }, k = {
		relevance: 0,
		match: t.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
		className: "title.class",
		keywords: { _: [...TYPES, ...ERROR_TYPES] }
	}, A = {
		label: "use_strict",
		className: "meta",
		relevance: 10,
		begin: /^\s*['"]use (strict|asm)['"]/
	}, j = {
		variants: [{ match: [
			/function/,
			/\s+/,
			a,
			/(?=\s*\()/
		] }, { match: [/function/, /\s*(?=\()/] }],
		className: {
			1: "keyword",
			3: "title.function"
		},
		label: "func.def",
		contains: [E],
		illegal: /%/
	}, M = {
		relevance: 0,
		match: /\b[A-Z][A-Z_0-9]+\b/,
		className: "variable.constant"
	};
	function N(e) {
		return t.concat("(?!", e.join("|"), ")");
	}
	let P = {
		match: t.concat(/\b/, N([
			...BUILT_IN_GLOBALS,
			"super",
			"import"
		].map((e) => `${e}\\s*\\(`)), a, t.lookahead(/\s*\(/)),
		className: "title.function",
		relevance: 0
	}, F = {
		begin: t.concat(/\./, t.lookahead(t.concat(a, /(?![0-9A-Za-z$_(])/))),
		end: a,
		excludeBegin: !0,
		keywords: "prototype",
		className: "property",
		relevance: 0
	}, I = {
		match: [
			/get|set/,
			/\s+/,
			a,
			/(?=\()/
		],
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [{ begin: /\(\)/ }, E]
	}, L = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", R = {
		match: [
			/const|var|let/,
			/\s+/,
			a,
			/\s*/,
			/=\s*/,
			/(async\s*)?/,
			t.lookahead(L)
		],
		keywords: "async",
		className: {
			1: "keyword",
			3: "title.function"
		},
		contains: [E]
	};
	return {
		name: "JavaScript",
		aliases: [
			"js",
			"jsx",
			"mjs",
			"cjs"
		],
		keywords: u,
		exports: {
			PARAMS_CONTAINS: w,
			CLASS_REFERENCE: k
		},
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({
				label: "shebang",
				binary: "node",
				relevance: 5
			}),
			A,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			g,
			_,
			v,
			y,
			b,
			{ match: /\$\d+/ },
			m,
			k,
			{
				scope: "attr",
				match: a + t.lookahead(":"),
				relevance: 0
			},
			R,
			{
				begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
				keywords: "return throw case",
				relevance: 0,
				contains: [
					b,
					e.REGEXP_MODE,
					{
						className: "function",
						begin: L,
						returnBegin: !0,
						end: "\\s*=>",
						contains: [{
							className: "params",
							variants: [
								{
									begin: e.UNDERSCORE_IDENT_RE,
									relevance: 0
								},
								{
									className: null,
									begin: /\(\s*\)/,
									skip: !0
								},
								{
									begin: /(\s*)\(/,
									end: /\)/,
									excludeBegin: !0,
									excludeEnd: !0,
									keywords: u,
									contains: w
								}
							]
						}]
					},
					{
						begin: /,/,
						relevance: 0
					},
					{
						match: /\s+/,
						relevance: 0
					},
					{
						variants: [
							{
								begin: o.begin,
								end: o.end
							},
							{ match: s },
							{
								begin: l.begin,
								"on:begin": l.isTrulyOpeningTag,
								end: l.end
							}
						],
						subLanguage: "xml",
						contains: [{
							begin: l.begin,
							end: l.end,
							skip: !0,
							contains: ["self"]
						}]
					}
				]
			},
			j,
			{ beginKeywords: "while if switch catch for" },
			{
				begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
				returnBegin: !0,
				label: "func.def",
				contains: [E, e.inherit(e.TITLE_MODE, {
					begin: a,
					className: "title.function"
				})]
			},
			{
				match: /\.\.\./,
				relevance: 0
			},
			F,
			{
				match: "\\$" + a,
				relevance: 0
			},
			{
				match: [/\bconstructor(?=\s*\()/],
				className: { 1: "title.function" },
				contains: [E]
			},
			P,
			M,
			O,
			I,
			{ match: /\$[(.]/ }
		]
	};
}
function typescript(e) {
	let t = e.regex, n = javascript$1(e), a = IDENT_RE$1, o = [
		"any",
		"void",
		"number",
		"boolean",
		"string",
		"object",
		"never",
		"symbol",
		"bigint",
		"unknown"
	], s = {
		begin: [
			/namespace/,
			/\s+/,
			e.IDENT_RE
		],
		beginScope: {
			1: "keyword",
			3: "title.class"
		}
	}, l = {
		beginKeywords: "interface",
		end: /\{/,
		excludeEnd: !0,
		keywords: {
			keyword: "interface extends",
			built_in: o
		},
		contains: [n.exports.CLASS_REFERENCE]
	}, u = {
		className: "meta",
		relevance: 10,
		begin: /^\s*['"]use strict['"]/
	}, d = {
		$pattern: IDENT_RE$1,
		keyword: KEYWORDS.concat([
			"type",
			"interface",
			"public",
			"private",
			"protected",
			"implements",
			"declare",
			"abstract",
			"readonly",
			"enum",
			"override",
			"satisfies"
		]),
		literal: LITERALS,
		built_in: BUILT_INS.concat(o),
		"variable.language": BUILT_IN_VARIABLES
	}, f = {
		className: "meta",
		begin: "@" + a
	}, p = (e, t, n) => {
		let a = e.contains.findIndex((e) => e.label === t);
		if (a === -1) throw Error("can not find mode to replace");
		e.contains.splice(a, 1, n);
	};
	Object.assign(n.keywords, d), n.exports.PARAMS_CONTAINS.push(f);
	let m = n.contains.find((e) => e.scope === "attr"), h = Object.assign({}, m, { match: t.concat(a, t.lookahead(/\s*\?:/)) });
	n.exports.PARAMS_CONTAINS.push([
		n.exports.CLASS_REFERENCE,
		m,
		h
	]), n.contains = n.contains.concat([
		f,
		s,
		l,
		h
	]), p(n, "shebang", e.SHEBANG()), p(n, "use_strict", u);
	let g = n.contains.find((e) => e.label === "func.def");
	return g.relevance = 0, Object.assign(n, {
		name: "TypeScript",
		aliases: [
			"ts",
			"tsx",
			"mts",
			"cts"
		]
	}), n;
}
function vbnet(e) {
	let t = e.regex, n = {
		className: "string",
		begin: /"(""|[^/n])"C\b/
	}, a = {
		className: "string",
		begin: /"/,
		end: /"/,
		illegal: /\n/,
		contains: [{ begin: /""/ }]
	}, o = /\d{1,2}\/\d{1,2}\/\d{4}/, s = /\d{4}-\d{1,2}-\d{1,2}/, l = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, u = /\d{1,2}(:\d{1,2}){1,2}/, d = {
		className: "literal",
		variants: [
			{ begin: t.concat(/# */, t.either(s, o), / *#/) },
			{ begin: t.concat(/# */, u, / *#/) },
			{ begin: t.concat(/# */, l, / *#/) },
			{ begin: t.concat(/# */, t.either(s, o), / +/, t.either(l, u), / *#/) }
		]
	}, f = {
		className: "number",
		relevance: 0,
		variants: [
			{ begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/ },
			{ begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
			{ begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
			{ begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
			{ begin: /&B[01_]+((U?[SIL])|[%&])?/ }
		]
	}, p = {
		className: "label",
		begin: /^\w+:/
	}, m = e.COMMENT(/'''/, /$/, { contains: [{
		className: "doctag",
		begin: /<\/?/,
		end: />/
	}] }), h = e.COMMENT(null, /$/, { variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }] });
	return {
		name: "Visual Basic .NET",
		aliases: ["vb"],
		case_insensitive: !0,
		classNameAliases: { label: "symbol" },
		keywords: {
			keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
			built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
			type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
			literal: "true false nothing"
		},
		illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
		contains: [
			n,
			a,
			d,
			f,
			p,
			m,
			h,
			{
				className: "meta",
				begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
				end: /$/,
				keywords: { keyword: "const disable else elseif enable end externalsource if region then" },
				contains: [h]
			}
		]
	};
}
function wasm(e) {
	e.regex;
	let t = e.COMMENT(/\(;/, /;\)/);
	t.contains.push("self");
	let n = e.COMMENT(/;;/, /$/), a = /* @__PURE__ */ "anyfunc,block,br,br_if,br_table,call,call_indirect,data,drop,elem,else,end,export,func,global.get,global.set,local.get,local.set,local.tee,get_global,get_local,global,if,import,local,loop,memory,memory.grow,memory.size,module,mut,nop,offset,param,result,return,select,set_global,set_local,start,table,tee_local,then,type,unreachable".split(","), o = {
		begin: [
			/(?:func|call|call_indirect)/,
			/\s+/,
			/\$[^\s)]+/
		],
		className: {
			1: "keyword",
			3: "title.function"
		}
	}, s = {
		className: "variable",
		begin: /\$[\w_]+/
	}, l = {
		match: /(\((?!;)|\))+/,
		className: "punctuation",
		relevance: 0
	}, u = {
		className: "number",
		relevance: 0,
		match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
	}, d = {
		match: /(i32|i64|f32|f64)(?!\.)/,
		className: "type"
	}, f = {
		className: "keyword",
		match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
	};
	return {
		name: "WebAssembly",
		keywords: {
			$pattern: /[\w.]+/,
			keyword: a
		},
		contains: [
			n,
			t,
			{
				match: [
					/(?:offset|align)/,
					/\s*/,
					/=/
				],
				className: {
					1: "keyword",
					3: "operator"
				}
			},
			s,
			l,
			o,
			e.QUOTE_STRING_MODE,
			d,
			f,
			u
		]
	};
}
function xml(e) {
	let t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), a = /[\p{L}0-9._:-]+/u, o = {
		className: "symbol",
		begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
	}, s = {
		begin: /\s/,
		contains: [{
			className: "keyword",
			begin: /#?[a-z_][a-z1-9_-]+/,
			illegal: /\n/
		}]
	}, l = e.inherit(s, {
		begin: /\(/,
		end: /\)/
	}), u = e.inherit(e.APOS_STRING_MODE, { className: "string" }), d = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), f = {
		endsWithParent: !0,
		illegal: /</,
		relevance: 0,
		contains: [{
			className: "attr",
			begin: a,
			relevance: 0
		}, {
			begin: /=\s*/,
			relevance: 0,
			contains: [{
				className: "string",
				endsParent: !0,
				variants: [
					{
						begin: /"/,
						end: /"/,
						contains: [o]
					},
					{
						begin: /'/,
						end: /'/,
						contains: [o]
					},
					{ begin: /[^\s"'=<>`]+/ }
				]
			}]
		}]
	};
	return {
		name: "HTML, XML",
		aliases: [
			"html",
			"xhtml",
			"rss",
			"atom",
			"xjb",
			"xsd",
			"xsl",
			"plist",
			"wsf",
			"svg"
		],
		case_insensitive: !0,
		unicodeRegex: !0,
		contains: [
			{
				className: "meta",
				begin: /<![a-z]/,
				end: />/,
				relevance: 10,
				contains: [
					s,
					d,
					u,
					l,
					{
						begin: /\[/,
						end: /\]/,
						contains: [{
							className: "meta",
							begin: /<![a-z]/,
							end: />/,
							contains: [
								s,
								l,
								d,
								u
							]
						}]
					}
				]
			},
			e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
			{
				begin: /<!\[CDATA\[/,
				end: /\]\]>/,
				relevance: 10
			},
			o,
			{
				className: "meta",
				end: /\?>/,
				variants: [{
					begin: /<\?xml/,
					relevance: 10,
					contains: [d]
				}, { begin: /<\?[a-z][a-z0-9]+/ }]
			},
			{
				className: "tag",
				begin: /<style(?=\s|>)/,
				end: />/,
				keywords: { name: "style" },
				contains: [f],
				starts: {
					end: /<\/style>/,
					returnEnd: !0,
					subLanguage: ["css", "xml"]
				}
			},
			{
				className: "tag",
				begin: /<script(?=\s|>)/,
				end: />/,
				keywords: { name: "script" },
				contains: [f],
				starts: {
					end: /<\/script>/,
					returnEnd: !0,
					subLanguage: [
						"javascript",
						"handlebars",
						"xml"
					]
				}
			},
			{
				className: "tag",
				begin: /<>|<\/>/
			},
			{
				className: "tag",
				begin: t.concat(/</, t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))),
				end: /\/?>/,
				contains: [{
					className: "name",
					begin: n,
					relevance: 0,
					starts: f
				}]
			},
			{
				className: "tag",
				begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
				contains: [{
					className: "name",
					begin: n,
					relevance: 0
				}, {
					begin: />/,
					relevance: 0,
					endsParent: !0
				}]
			}
		]
	};
}
function yaml(e) {
	let t = "true false yes no null", n = "[\\w#;/?:@&=+$,.~*'()[\\]]+", a = {
		className: "attr",
		variants: [
			{ begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
			{ begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/ },
			{ begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/ }
		]
	}, o = {
		className: "template-variable",
		variants: [{
			begin: /\{\{/,
			end: /\}\}/
		}, {
			begin: /%\{/,
			end: /\}/
		}]
	}, s = {
		className: "string",
		relevance: 0,
		begin: /'/,
		end: /'/,
		contains: [{
			match: /''/,
			scope: "char.escape",
			relevance: 0
		}]
	}, l = {
		className: "string",
		relevance: 0,
		variants: [{
			begin: /"/,
			end: /"/
		}, { begin: /\S+/ }],
		contains: [e.BACKSLASH_ESCAPE, o]
	}, u = e.inherit(l, { variants: [
		{
			begin: /'/,
			end: /'/,
			contains: [{
				begin: /''/,
				relevance: 0
			}]
		},
		{
			begin: /"/,
			end: /"/
		},
		{ begin: /[^\s,{}[\]]+/ }
	] }), d = {
		className: "number",
		begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
	}, f = {
		end: ",",
		endsWithParent: !0,
		excludeEnd: !0,
		keywords: t,
		relevance: 0
	}, p = {
		begin: /\{/,
		end: /\}/,
		contains: [f],
		illegal: "\\n",
		relevance: 0
	}, m = {
		begin: "\\[",
		end: "\\]",
		contains: [f],
		illegal: "\\n",
		relevance: 0
	}, h = [
		a,
		{
			className: "meta",
			begin: "^---\\s*$",
			relevance: 10
		},
		{
			className: "string",
			begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
		},
		{
			begin: "<%[%=-]?",
			end: "[%-]?%>",
			subLanguage: "ruby",
			excludeBegin: !0,
			excludeEnd: !0,
			relevance: 0
		},
		{
			className: "type",
			begin: "!\\w+!" + n
		},
		{
			className: "type",
			begin: "!<" + n + ">"
		},
		{
			className: "type",
			begin: "!" + n
		},
		{
			className: "type",
			begin: "!!" + n
		},
		{
			className: "meta",
			begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
		},
		{
			className: "meta",
			begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
		},
		{
			className: "bullet",
			begin: "-(?=[ ]|$)",
			relevance: 0
		},
		e.HASH_COMMENT_MODE,
		{
			beginKeywords: t,
			keywords: { literal: t }
		},
		d,
		{
			className: "number",
			begin: e.C_NUMBER_RE + "\\b",
			relevance: 0
		},
		p,
		m,
		s,
		l
	], g = [...h];
	return g.pop(), g.push(u), f.contains = g, {
		name: "YAML",
		case_insensitive: !0,
		aliases: ["yml"],
		contains: h
	};
}
const grammars = {
	arduino,
	bash,
	c,
	cpp,
	csharp,
	css,
	diff,
	go,
	graphql,
	ini,
	java,
	javascript,
	json,
	kotlin,
	less,
	lua,
	makefile,
	markdown,
	objectivec,
	perl,
	php,
	"php-template": phpTemplate,
	plaintext,
	python,
	"python-repl": pythonRepl,
	r,
	ruby,
	rust,
	scss,
	shell,
	sql,
	swift,
	typescript,
	vbnet,
	wasm,
	xml,
	yaml
};
var core_default = (/* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((e, t) => {
	function n(e) {
		return e instanceof Map ? e.clear = e.delete = e.set = function() {
			throw Error("map is read-only");
		} : e instanceof Set && (e.add = e.clear = e.delete = function() {
			throw Error("set is read-only");
		}), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
			let a = e[t], o = typeof a;
			(o === "object" || o === "function") && !Object.isFrozen(a) && n(a);
		}), e;
	}
	var a = class {
		constructor(e) {
			e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
		}
		ignoreMatch() {
			this.isMatchIgnored = !0;
		}
	};
	function o(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	}
	function s(e, ...t) {
		let n = Object.create(null);
		for (let t in e) n[t] = e[t];
		return t.forEach(function(e) {
			for (let t in e) n[t] = e[t];
		}), n;
	}
	var l = "</span>", u = (e) => !!e.scope, d = (e, { prefix: t }) => {
		if (e.startsWith("language:")) return e.replace("language:", "language-");
		if (e.includes(".")) {
			let n = e.split(".");
			return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`)].join(" ");
		}
		return `${t}${e}`;
	}, f = class {
		constructor(e, t) {
			this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
		}
		addText(e) {
			this.buffer += o(e);
		}
		openNode(e) {
			if (!u(e)) return;
			let t = d(e.scope, { prefix: this.classPrefix });
			this.span(t);
		}
		closeNode(e) {
			u(e) && (this.buffer += l);
		}
		value() {
			return this.buffer;
		}
		span(e) {
			this.buffer += `<span class="${e}">`;
		}
	}, p = (e = {}) => {
		let t = { children: [] };
		return Object.assign(t, e), t;
	}, m = class e {
		constructor() {
			this.rootNode = p(), this.stack = [this.rootNode];
		}
		get top() {
			return this.stack[this.stack.length - 1];
		}
		get root() {
			return this.rootNode;
		}
		add(e) {
			this.top.children.push(e);
		}
		openNode(e) {
			let t = p({ scope: e });
			this.add(t), this.stack.push(t);
		}
		closeNode() {
			if (this.stack.length > 1) return this.stack.pop();
		}
		closeAllNodes() {
			for (; this.closeNode(););
		}
		toJSON() {
			return JSON.stringify(this.rootNode, null, 4);
		}
		walk(e) {
			return this.constructor._walk(e, this.rootNode);
		}
		static _walk(e, t) {
			return typeof t == "string" ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((t) => this._walk(e, t)), e.closeNode(t)), e;
		}
		static _collapse(t) {
			typeof t != "string" && t.children && (t.children.every((e) => typeof e == "string") ? t.children = [t.children.join("")] : t.children.forEach((t) => {
				e._collapse(t);
			}));
		}
	}, h = class extends m {
		constructor(e) {
			super(), this.options = e;
		}
		addText(e) {
			e !== "" && this.add(e);
		}
		startScope(e) {
			this.openNode(e);
		}
		endScope() {
			this.closeNode();
		}
		__addSublanguage(e, t) {
			let n = e.root;
			t && (n.scope = `language:${t}`), this.add(n);
		}
		toHTML() {
			return new f(this, this.options).value();
		}
		finalize() {
			return this.closeAllNodes(), !0;
		}
	};
	function g(e) {
		return e ? typeof e == "string" ? e : e.source : null;
	}
	function _(e) {
		return b("(?=", e, ")");
	}
	function v(e) {
		return b("(?:", e, ")*");
	}
	function y(e) {
		return b("(?:", e, ")?");
	}
	function b(...e) {
		return e.map((e) => g(e)).join("");
	}
	function x(e) {
		let t = e[e.length - 1];
		return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
	}
	function C(...e) {
		return "(" + (x(e).capture ? "" : "?:") + e.map((e) => g(e)).join("|") + ")";
	}
	function w(e) {
		return (/* @__PURE__ */ RegExp(e.toString() + "|")).exec("").length - 1;
	}
	function E(e, t) {
		let n = e && e.exec(t);
		return n && n.index === 0;
	}
	var O = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
	function k(e, { joinWith: t }) {
		let n = 0;
		return e.map((e) => {
			n += 1;
			let t = n, a = g(e), o = "";
			for (; a.length > 0;) {
				let e = O.exec(a);
				if (!e) {
					o += a;
					break;
				}
				o += a.substring(0, e.index), a = a.substring(e.index + e[0].length), e[0][0] === "\\" && e[1] ? o += "\\" + String(Number(e[1]) + t) : (o += e[0], e[0] === "(" && n++);
			}
			return o;
		}).map((e) => `(${e})`).join(t);
	}
	var A = /\b\B/, j = "[a-zA-Z]\\w*", M = "[a-zA-Z_]\\w*", N = "\\b\\d+(\\.\\d+)?", P = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", F = "\\b(0b[01]+)", I = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", L = (e = {}) => {
		let t = /^#![ ]*\//;
		return e.binary && (e.begin = b(t, /.*\b/, e.binary, /\b.*/)), s({
			scope: "meta",
			begin: t,
			end: /$/,
			relevance: 0,
			"on:begin": (e, t) => {
				e.index !== 0 && t.ignoreMatch();
			}
		}, e);
	}, R = {
		begin: "\\\\[\\s\\S]",
		relevance: 0
	}, z = {
		scope: "string",
		begin: "'",
		end: "'",
		illegal: "\\n",
		contains: [R]
	}, B = {
		scope: "string",
		begin: "\"",
		end: "\"",
		illegal: "\\n",
		contains: [R]
	}, V = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, H = function(e, t, n = {}) {
		let a = s({
			scope: "comment",
			begin: e,
			end: t,
			contains: []
		}, n);
		a.contains.push({
			scope: "doctag",
			begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
			end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
			excludeBegin: !0,
			relevance: 0
		});
		let o = C("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
		return a.contains.push({ begin: b(/[ ]+/, "(", o, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), a;
	}, U = H("//", "$"), W = H("/\\*", "\\*/"), G = H("#", "$"), Yo = {
		scope: "number",
		begin: N,
		relevance: 0
	}, Xo = {
		scope: "number",
		begin: P,
		relevance: 0
	}, K = {
		scope: "number",
		begin: F,
		relevance: 0
	}, Zo = {
		scope: "regexp",
		begin: /\/(?=[^/\n]*\/)/,
		end: /\/[gimuy]*/,
		contains: [R, {
			begin: /\[/,
			end: /\]/,
			relevance: 0,
			contains: [R]
		}]
	}, q = {
		scope: "title",
		begin: j,
		relevance: 0
	}, Qo = {
		scope: "title",
		begin: M,
		relevance: 0
	}, J = {
		begin: "\\.\\s*" + M,
		relevance: 0
	}, Y = /* @__PURE__ */ Object.freeze({
		__proto__: null,
		APOS_STRING_MODE: z,
		BACKSLASH_ESCAPE: R,
		BINARY_NUMBER_MODE: K,
		BINARY_NUMBER_RE: F,
		COMMENT: H,
		C_BLOCK_COMMENT_MODE: W,
		C_LINE_COMMENT_MODE: U,
		C_NUMBER_MODE: Xo,
		C_NUMBER_RE: P,
		END_SAME_AS_BEGIN: function(e) {
			return Object.assign(e, {
				"on:begin": (e, t) => {
					t.data._beginMatch = e[1];
				},
				"on:end": (e, t) => {
					t.data._beginMatch !== e[1] && t.ignoreMatch();
				}
			});
		},
		HASH_COMMENT_MODE: G,
		IDENT_RE: j,
		MATCH_NOTHING_RE: A,
		METHOD_GUARD: J,
		NUMBER_MODE: Yo,
		NUMBER_RE: N,
		PHRASAL_WORDS_MODE: V,
		QUOTE_STRING_MODE: B,
		REGEXP_MODE: Zo,
		RE_STARTERS_RE: I,
		SHEBANG: L,
		TITLE_MODE: q,
		UNDERSCORE_IDENT_RE: M,
		UNDERSCORE_TITLE_MODE: Qo
	});
	function $o(e, t) {
		e.input[e.index - 1] === "." && t.ignoreMatch();
	}
	function es(e, t) {
		e.className !== void 0 && (e.scope = e.className, delete e.className);
	}
	function ts(e, t) {
		t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = $o, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
	}
	function X(e, t) {
		Array.isArray(e.illegal) && (e.illegal = C(...e.illegal));
	}
	function ns(e, t) {
		if (e.match) {
			if (e.begin || e.end) throw Error("begin & end are not supported with match");
			e.begin = e.match, delete e.match;
		}
	}
	function rs(e, t) {
		e.relevance === void 0 && (e.relevance = 1);
	}
	var is = (e, t) => {
		if (!e.beforeMatch) return;
		if (e.starts) throw Error("beforeMatch cannot be used with starts");
		let n = Object.assign({}, e);
		Object.keys(e).forEach((t) => {
			delete e[t];
		}), e.keywords = n.keywords, e.begin = b(n.beforeMatch, _(n.begin)), e.starts = {
			relevance: 0,
			contains: [Object.assign(n, { endsParent: !0 })]
		}, e.relevance = 0, delete n.beforeMatch;
	}, as = [
		"of",
		"and",
		"for",
		"in",
		"not",
		"or",
		"if",
		"then",
		"parent",
		"list",
		"value"
	], os = "keyword";
	function ss(e, t, n = os) {
		let a = Object.create(null);
		return typeof e == "string" ? o(n, e.split(" ")) : Array.isArray(e) ? o(n, e) : Object.keys(e).forEach(function(n) {
			Object.assign(a, ss(e[n], t, n));
		}), a;
		function o(e, n) {
			t && (n = n.map((e) => e.toLowerCase())), n.forEach(function(t) {
				let n = t.split("|");
				a[n[0]] = [e, cs(n[0], n[1])];
			});
		}
	}
	function cs(e, t) {
		return t ? Number(t) : ls(e) ? 0 : 1;
	}
	function ls(e) {
		return as.includes(e.toLowerCase());
	}
	var us = {}, Z = (e) => {
		console.error(e);
	}, ds = (e, ...t) => {
		console.log(`WARN: ${e}`, ...t);
	}, Q = (e, t) => {
		us[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), us[`${e}/${t}`] = !0);
	}, fs = /* @__PURE__ */ Error();
	function ps(e, t, { key: n }) {
		let a = 0, o = e[n], s = {}, l = {};
		for (let e = 1; e <= t.length; e++) l[e + a] = o[e], s[e + a] = !0, a += w(t[e - 1]);
		e[n] = l, e[n]._emit = s, e[n]._multi = !0;
	}
	function ms(e) {
		if (Array.isArray(e.begin)) {
			if (e.skip || e.excludeBegin || e.returnBegin) throw Z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), fs;
			if (typeof e.beginScope != "object" || e.beginScope === null) throw Z("beginScope must be object"), fs;
			ps(e, e.begin, { key: "beginScope" }), e.begin = k(e.begin, { joinWith: "" });
		}
	}
	function hs(e) {
		if (Array.isArray(e.end)) {
			if (e.skip || e.excludeEnd || e.returnEnd) throw Z("skip, excludeEnd, returnEnd not compatible with endScope: {}"), fs;
			if (typeof e.endScope != "object" || e.endScope === null) throw Z("endScope must be object"), fs;
			ps(e, e.end, { key: "endScope" }), e.end = k(e.end, { joinWith: "" });
		}
	}
	function gs(e) {
		e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
	}
	function _s(e) {
		gs(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), ms(e), hs(e);
	}
	function vs(e) {
		function t(t, n) {
			return new RegExp(g(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
		}
		class n {
			constructor() {
				this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
			}
			addRule(e, t) {
				t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += w(e) + 1;
			}
			compile() {
				this.regexes.length === 0 && (this.exec = () => null), this.matcherRe = t(k(this.regexes.map((e) => e[1]), { joinWith: "|" }), !0), this.lastIndex = 0;
			}
			exec(e) {
				this.matcherRe.lastIndex = this.lastIndex;
				let t = this.matcherRe.exec(e);
				if (!t) return null;
				let n = t.findIndex((e, t) => t > 0 && e !== void 0), a = this.matchIndexes[n];
				return t.splice(0, n), Object.assign(t, a);
			}
		}
		class a {
			constructor() {
				this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
			}
			getMatcher(e) {
				if (this.multiRegexes[e]) return this.multiRegexes[e];
				let t = new n();
				return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t;
			}
			resumingScanAtSamePosition() {
				return this.regexIndex !== 0;
			}
			considerAll() {
				this.regexIndex = 0;
			}
			addRule(e, t) {
				this.rules.push([e, t]), t.type === "begin" && this.count++;
			}
			exec(e) {
				let t = this.getMatcher(this.regexIndex);
				t.lastIndex = this.lastIndex;
				let n = t.exec(e);
				if (this.resumingScanAtSamePosition() && !(n && n.index === this.lastIndex)) {
					let t = this.getMatcher(0);
					t.lastIndex = this.lastIndex + 1, n = t.exec(e);
				}
				return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n;
			}
		}
		function o(e) {
			let t = new a();
			return e.contains.forEach((e) => t.addRule(e.begin, {
				rule: e,
				type: "begin"
			})), e.terminatorEnd && t.addRule(e.terminatorEnd, { type: "end" }), e.illegal && t.addRule(e.illegal, { type: "illegal" }), t;
		}
		function l(n, a) {
			let s = n;
			if (n.isCompiled) return s;
			[
				es,
				ns,
				_s,
				is
			].forEach((e) => e(n, a)), e.compilerExtensions.forEach((e) => e(n, a)), n.__beforeBegin = null, [
				ts,
				X,
				rs
			].forEach((e) => e(n, a)), n.isCompiled = !0;
			let u = null;
			return typeof n.keywords == "object" && n.keywords.$pattern && (n.keywords = Object.assign({}, n.keywords), u = n.keywords.$pattern, delete n.keywords.$pattern), u ||= /\w+/, n.keywords &&= ss(n.keywords, e.case_insensitive), s.keywordPatternRe = t(u, !0), a && (n.begin ||= /\B|\b/, s.beginRe = t(s.begin), !n.end && !n.endsWithParent && (n.end = /\B|\b/), n.end && (s.endRe = t(s.end)), s.terminatorEnd = g(s.end) || "", n.endsWithParent && a.terminatorEnd && (s.terminatorEnd += (n.end ? "|" : "") + a.terminatorEnd)), n.illegal && (s.illegalRe = t(n.illegal)), n.contains ||= [], n.contains = [].concat(...n.contains.map(function(e) {
				return bs(e === "self" ? n : e);
			})), n.contains.forEach(function(e) {
				l(e, s);
			}), n.starts && l(n.starts, a), s.matcher = o(s), s;
		}
		if (e.compilerExtensions ||= [], e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
		return e.classNameAliases = s(e.classNameAliases || {}), l(e);
	}
	function ys(e) {
		return e ? e.endsWithParent || ys(e.starts) : !1;
	}
	function bs(e) {
		return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
			return s(e, { variants: null }, t);
		})), e.cachedVariants ? e.cachedVariants : ys(e) ? s(e, { starts: e.starts ? s(e.starts) : null }) : Object.isFrozen(e) ? s(e) : e;
	}
	var xs = "11.11.1", Ss = class extends Error {
		constructor(e, t) {
			super(e), this.name = "HTMLInjectionError", this.html = t;
		}
	}, Cs = o, ws = s, Ts = Symbol("nomatch"), Es = 7, Ds = function(e) {
		let t = Object.create(null), o = Object.create(null), s = [], l = !0, u = "Could not find the language '{}', did you forget to load/include a language module?", d = {
			disableAutodetect: !0,
			name: "Plain text",
			contains: []
		}, f = {
			ignoreUnescapedHTML: !1,
			throwUnescapedHTML: !1,
			noHighlightRe: /^(no-?highlight)$/i,
			languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
			classPrefix: "hljs-",
			cssSelector: "pre code",
			languages: null,
			__emitter: h
		};
		function p(e) {
			return f.noHighlightRe.test(e);
		}
		function m(e) {
			let t = e.className + " ";
			t += e.parentNode ? e.parentNode.className : "";
			let n = f.languageDetectRe.exec(t);
			if (n) {
				let t = z(n[1]);
				return t || (ds(u.replace("{}", n[1])), ds("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight";
			}
			return t.split(/\s+/).find((e) => p(e) || z(e));
		}
		function g(e, t, n) {
			let a = "", o = "";
			typeof t == "object" ? (a = e, n = t.ignoreIllegals, o = t.language) : (Q("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Q("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), o = e, a = t), n === void 0 && (n = !0);
			let s = {
				code: a,
				language: o
			};
			G("before:highlight", s);
			let l = s.result ? s.result : x(s.language, s.code, n);
			return l.code = s.code, G("after:highlight", l), l;
		}
		function x(e, n, o, s) {
			let d = Object.create(null);
			function p(e, t) {
				return e.keywords[t];
			}
			function m() {
				if (!I.keywords) {
					R.addText(B);
					return;
				}
				let e = 0;
				I.keywordPatternRe.lastIndex = 0;
				let t = I.keywordPatternRe.exec(B), n = "";
				for (; t;) {
					n += B.substring(e, t.index);
					let a = N.case_insensitive ? t[0].toLowerCase() : t[0], o = p(I, a);
					if (o) {
						let [e, s] = o;
						if (R.addText(n), n = "", d[a] = (d[a] || 0) + 1, d[a] <= Es && (V += s), e.startsWith("_")) n += t[0];
						else {
							let n = N.classNameAliases[e] || e;
							_(t[0], n);
						}
					} else n += t[0];
					e = I.keywordPatternRe.lastIndex, t = I.keywordPatternRe.exec(B);
				}
				n += B.substring(e), R.addText(n);
			}
			function h() {
				if (B === "") return;
				let e = null;
				if (typeof I.subLanguage == "string") {
					if (!t[I.subLanguage]) {
						R.addText(B);
						return;
					}
					e = x(I.subLanguage, B, !0, L[I.subLanguage]), L[I.subLanguage] = e._top;
				} else e = O(B, I.subLanguage.length ? I.subLanguage : null);
				I.relevance > 0 && (V += e.relevance), R.__addSublanguage(e._emitter, e.language);
			}
			function g() {
				I.subLanguage == null ? m() : h(), B = "";
			}
			function _(e, t) {
				e !== "" && (R.startScope(t), R.addText(e), R.endScope());
			}
			function v(e, t) {
				let n = 1, a = t.length - 1;
				for (; n <= a;) {
					if (!e._emit[n]) {
						n++;
						continue;
					}
					let a = N.classNameAliases[e[n]] || e[n], o = t[n];
					a ? _(o, a) : (B = o, m(), B = ""), n++;
				}
			}
			function y(e, t) {
				return e.scope && typeof e.scope == "string" && R.openNode(N.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (_(B, N.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), B = "") : e.beginScope._multi && (v(e.beginScope, t), B = "")), I = Object.create(e, { parent: { value: I } }), I;
			}
			function b(e, t, n) {
				let o = E(e.endRe, n);
				if (o) {
					if (e["on:end"]) {
						let n = new a(e);
						e["on:end"](t, n), n.isMatchIgnored && (o = !1);
					}
					if (o) {
						for (; e.endsParent && e.parent;) e = e.parent;
						return e;
					}
				}
				if (e.endsWithParent) return b(e.parent, t, n);
			}
			function C(e) {
				return I.matcher.regexIndex === 0 ? (B += e[0], 1) : (W = !0, 0);
			}
			function w(e) {
				let t = e[0], n = e.rule, o = new a(n), s = [n.__beforeBegin, n["on:begin"]];
				for (let n of s) if (n && (n(e, o), o.isMatchIgnored)) return C(t);
				return n.skip ? B += t : (n.excludeBegin && (B += t), g(), !n.returnBegin && !n.excludeBegin && (B = t)), y(n, e), n.returnBegin ? 0 : t.length;
			}
			function k(e) {
				let t = e[0], a = n.substring(e.index), o = b(I, e, a);
				if (!o) return Ts;
				let s = I;
				I.endScope && I.endScope._wrap ? (g(), _(t, I.endScope._wrap)) : I.endScope && I.endScope._multi ? (g(), v(I.endScope, e)) : s.skip ? B += t : (s.returnEnd || s.excludeEnd || (B += t), g(), s.excludeEnd && (B = t));
				do
					I.scope && R.closeNode(), !I.skip && !I.subLanguage && (V += I.relevance), I = I.parent;
				while (I !== o.parent);
				return o.starts && y(o.starts, e), s.returnEnd ? 0 : t.length;
			}
			function A() {
				let e = [];
				for (let t = I; t !== N; t = t.parent) t.scope && e.unshift(t.scope);
				e.forEach((e) => R.openNode(e));
			}
			let j = {};
			function M(t, a) {
				let s = a && a[0];
				if (B += t, s == null) return g(), 0;
				if (j.type === "begin" && a.type === "end" && j.index === a.index && s === "") {
					if (B += n.slice(a.index, a.index + 1), !l) {
						let t = /* @__PURE__ */ Error(`0 width match regex (${e})`);
						throw t.languageName = e, t.badRule = j.rule, t;
					}
					return 1;
				}
				if (j = a, a.type === "begin") return w(a);
				if (a.type === "illegal" && !o) {
					let e = /* @__PURE__ */ Error("Illegal lexeme \"" + s + "\" for mode \"" + (I.scope || "<unnamed>") + "\"");
					throw e.mode = I, e;
				} else if (a.type === "end") {
					let e = k(a);
					if (e !== Ts) return e;
				}
				if (a.type === "illegal" && s === "") return B += "\n", 1;
				if (U > 1e5 && U > a.index * 3) throw /* @__PURE__ */ Error("potential infinite loop, way more iterations than matches");
				return B += s, s.length;
			}
			let N = z(e);
			if (!N) throw Z(u.replace("{}", e)), Error("Unknown language: \"" + e + "\"");
			let P = vs(N), F = "", I = s || P, L = {}, R = new f.__emitter(f);
			A();
			let B = "", V = 0, H = 0, U = 0, W = !1;
			try {
				if (N.__emitTokens) N.__emitTokens(n, R);
				else {
					for (I.matcher.considerAll();;) {
						U++, W ? W = !1 : I.matcher.considerAll(), I.matcher.lastIndex = H;
						let e = I.matcher.exec(n);
						if (!e) break;
						let t = M(n.substring(H, e.index), e);
						H = e.index + t;
					}
					M(n.substring(H));
				}
				return R.finalize(), F = R.toHTML(), {
					language: e,
					value: F,
					relevance: V,
					illegal: !1,
					_emitter: R,
					_top: I
				};
			} catch (t) {
				if (t.message && t.message.includes("Illegal")) return {
					language: e,
					value: Cs(n),
					illegal: !0,
					relevance: 0,
					_illegalBy: {
						message: t.message,
						index: H,
						context: n.slice(H - 100, H + 100),
						mode: t.mode,
						resultSoFar: F
					},
					_emitter: R
				};
				if (l) return {
					language: e,
					value: Cs(n),
					illegal: !1,
					relevance: 0,
					errorRaised: t,
					_emitter: R,
					_top: I
				};
				throw t;
			}
		}
		function w(e) {
			let t = {
				value: Cs(e),
				illegal: !1,
				relevance: 0,
				_top: d,
				_emitter: new f.__emitter(f)
			};
			return t._emitter.addText(e), t;
		}
		function O(e, n) {
			n = n || f.languages || Object.keys(t);
			let a = w(e), o = n.filter(z).filter(V).map((t) => x(t, e, !1));
			o.unshift(a);
			let [s, l] = o.sort((e, t) => {
				if (e.relevance !== t.relevance) return t.relevance - e.relevance;
				if (e.language && t.language) {
					if (z(e.language).supersetOf === t.language) return 1;
					if (z(t.language).supersetOf === e.language) return -1;
				}
				return 0;
			}), u = s;
			return u.secondBest = l, u;
		}
		function k(e, t, n) {
			let a = t && o[t] || n;
			e.classList.add("hljs"), e.classList.add(`language-${a}`);
		}
		function A(e) {
			let t = null, n = m(e);
			if (p(n)) return;
			if (G("before:highlightElement", {
				el: e,
				language: n
			}), e.dataset.highlighted) {
				console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", e);
				return;
			}
			if (e.children.length > 0 && (f.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), f.throwUnescapedHTML)) throw new Ss("One of your code blocks includes unescaped HTML.", e.innerHTML);
			t = e;
			let a = t.textContent, o = n ? g(a, {
				language: n,
				ignoreIllegals: !0
			}) : O(a);
			e.innerHTML = o.value, e.dataset.highlighted = "yes", k(e, n, o.language), e.result = {
				language: o.language,
				re: o.relevance,
				relevance: o.relevance
			}, o.secondBest && (e.secondBest = {
				language: o.secondBest.language,
				relevance: o.secondBest.relevance
			}), G("after:highlightElement", {
				el: e,
				result: o,
				text: a
			});
		}
		function j(e) {
			f = ws(f, e);
		}
		let M = () => {
			F(), Q("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
		};
		function N() {
			F(), Q("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
		}
		let P = !1;
		function F() {
			function e() {
				F();
			}
			if (document.readyState === "loading") {
				P || window.addEventListener("DOMContentLoaded", e, !1), P = !0;
				return;
			}
			document.querySelectorAll(f.cssSelector).forEach(A);
		}
		function I(n, a) {
			let o = null;
			try {
				o = a(e);
			} catch (e) {
				if (Z("Language definition for '{}' could not be registered.".replace("{}", n)), l) Z(e);
				else throw e;
				o = d;
			}
			o.name ||= n, t[n] = o, o.rawDefinition = a.bind(null, e), o.aliases && B(o.aliases, { languageName: n });
		}
		function L(e) {
			delete t[e];
			for (let t of Object.keys(o)) o[t] === e && delete o[t];
		}
		function R() {
			return Object.keys(t);
		}
		function z(e) {
			return e = (e || "").toLowerCase(), t[e] || t[o[e]];
		}
		function B(e, { languageName: t }) {
			typeof e == "string" && (e = [e]), e.forEach((e) => {
				o[e.toLowerCase()] = t;
			});
		}
		function V(e) {
			let t = z(e);
			return t && !t.disableAutodetect;
		}
		function H(e) {
			e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = (t) => {
				e["before:highlightBlock"](Object.assign({ block: t.el }, t));
			}), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = (t) => {
				e["after:highlightBlock"](Object.assign({ block: t.el }, t));
			});
		}
		function U(e) {
			H(e), s.push(e);
		}
		function W(e) {
			let t = s.indexOf(e);
			t !== -1 && s.splice(t, 1);
		}
		function G(e, t) {
			let n = e;
			s.forEach(function(e) {
				e[n] && e[n](t);
			});
		}
		function Yo(e) {
			return Q("10.7.0", "highlightBlock will be removed entirely in v12.0"), Q("10.7.0", "Please use highlightElement now."), A(e);
		}
		for (let t in Object.assign(e, {
			highlight: g,
			highlightAuto: O,
			highlightAll: F,
			highlightElement: A,
			highlightBlock: Yo,
			configure: j,
			initHighlighting: M,
			initHighlightingOnLoad: N,
			registerLanguage: I,
			unregisterLanguage: L,
			listLanguages: R,
			getLanguage: z,
			registerAliases: B,
			autoDetection: V,
			inherit: ws,
			addPlugin: U,
			removePlugin: W
		}), e.debugMode = function() {
			l = !1;
		}, e.safeMode = function() {
			l = !0;
		}, e.versionString = xs, e.regex = {
			concat: b,
			lookahead: _,
			either: C,
			optional: y,
			anyNumberOfTimes: v
		}, Y) typeof Y[t] == "object" && n(Y[t]);
		return Object.assign(e, Y), e;
	}, $ = Ds({});
	$.newInstance = () => Ds({}), t.exports = $, $.HighlightJS = $, $.default = $;
})))())).default, emptyOptions = {}, defaultPrefix = "hljs-";
function createLowlight(e) {
	let t = core_default.newInstance();
	return e && s(e), {
		highlight: n,
		highlightAuto: a,
		listLanguages: o,
		register: s,
		registerAlias: l,
		registered: u
	};
	function n(e, n, a) {
		let o = a || emptyOptions, s = typeof o.prefix == "string" ? o.prefix : defaultPrefix;
		if (!t.getLanguage(e)) throw Error("Unknown language: `" + e + "` is not registered");
		t.configure({
			__emitter: HastEmitter,
			classPrefix: s
		});
		let l = t.highlight(n, {
			ignoreIllegals: !0,
			language: e
		});
		/* c8 ignore next 5 */
		if (l.errorRaised) throw Error("Could not highlight with `Highlight.js`", { cause: l.errorRaised });
		let u = l._emitter.root, d = u.data;
		return d.language = l.language, d.relevance = l.relevance, u;
	}
	function a(e, a) {
		let s = (a || emptyOptions).subset || o(), l = -1, u = 0, d;
		for (; ++l < s.length;) {
			let o = s[l];
			if (!t.getLanguage(o)) continue;
			let f = n(o, e, a);
			f.data && f.data.relevance !== void 0 && f.data.relevance > u && (u = f.data.relevance, d = f);
		}
		return d || {
			type: "root",
			children: [],
			data: {
				language: void 0,
				relevance: u
			}
		};
	}
	function o() {
		return t.listLanguages();
	}
	function s(e, n) {
		if (typeof e == "string") t.registerLanguage(e, n);
		else {
			let n;
			for (n in e) Object.hasOwn(e, n) && t.registerLanguage(n, e[n]);
		}
	}
	function l(e, n) {
		if (typeof e == "string") t.registerAliases(typeof n == "string" ? n : [...n], { languageName: e });
		else {
			let n;
			for (n in e) if (Object.hasOwn(e, n)) {
				let a = e[n];
				t.registerAliases(typeof a == "string" ? a : [...a], { languageName: n });
			}
		}
	}
	function u(e) {
		return !!t.getLanguage(e);
	}
}
var HastEmitter = class {
	constructor(e) {
		this.options = e, this.root = {
			type: "root",
			children: [],
			data: {
				language: void 0,
				relevance: 0
			}
		}, this.stack = [this.root];
	}
	addText(e) {
		if (e === "") return;
		let t = this.stack[this.stack.length - 1], n = t.children[t.children.length - 1];
		n && n.type === "text" ? n.value += e : t.children.push({
			type: "text",
			value: e
		});
	}
	startScope(e) {
		this.openNode(String(e));
	}
	endScope() {
		this.closeNode();
	}
	__addSublanguage(e, t) {
		let n = this.stack[this.stack.length - 1], a = e.root.children;
		t ? n.children.push({
			type: "element",
			tagName: "span",
			properties: { className: [t] },
			children: a
		}) : n.children.push(...a);
	}
	openNode(e) {
		let t = this, n = e.split(".").map(function(e, n) {
			return n ? e + "_".repeat(n) : t.options.classPrefix + e;
		}), a = this.stack[this.stack.length - 1], o = {
			type: "element",
			tagName: "span",
			properties: { className: n },
			children: []
		};
		a.children.push(o), this.stack.push(o);
	}
	closeNode() {
		this.stack.pop();
	}
	finalize() {}
	toHTML() {
		return "";
	}
};
export { katex as i, core_default as n, grammars as r, createLowlight as t };
