import { a as __toESM, t as __commonJSMin } from "./chunk-BKjlJnyO.js";
import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { A as hasKatex, F as renderKatexSanitized, b as getConfig, s as common_default, z as sanitizeText } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { o as decodeEntities } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { n as isIconAvailable, t as getIconSVG } from "./chunk-PWAF6VOD-xw3v3CBz.js";
var require_fastdom = /* @__PURE__ */ __commonJSMin(((e, s) => {
	(function(e) {
		var c = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
			return setTimeout(e, 16);
		};
		function l() {
			var s = this;
			s.reads = [], s.writes = [], s.raf = c.bind(e);
		}
		l.prototype = {
			constructor: l,
			runTasks: function(e) {
				for (var s; s = e.shift();) s();
			},
			measure: function(e, s) {
				var c = s ? e.bind(s) : e;
				return this.reads.push(c), u(this), c;
			},
			mutate: function(e, s) {
				var c = s ? e.bind(s) : e;
				return this.writes.push(c), u(this), c;
			},
			clear: function(e) {
				return p(this.reads, e) || p(this.writes, e);
			},
			extend: function(e) {
				if (typeof e != "object") throw Error("expected object");
				var s = Object.create(this);
				return h(s, e), s.fastdom = this, s.initialize && s.initialize(), s;
			},
			catch: null
		};
		function u(e) {
			e.scheduled || (e.scheduled = !0, e.raf(f.bind(null, e)));
		}
		function f(e) {
			var s = e.writes, c = e.reads, l;
			try {
				c.length, e.runTasks(c), s.length, e.runTasks(s);
			} catch (e) {
				l = e;
			}
			if (e.scheduled = !1, (c.length || s.length) && u(e), l) if (l.message, e.catch) e.catch(l);
			else throw l;
		}
		function p(e, s) {
			var c = e.indexOf(s);
			return !!~c && !!e.splice(c, 1);
		}
		function h(e, s) {
			for (var c in s) s.hasOwnProperty(c) && (e[c] = s[c]);
		}
		var g = e.fastdom = e.fastdom || new l();
		typeof define == "function" ? define(function() {
			return g;
		}) : typeof s == "object" && (s.exports = g);
	})(typeof window < "u" ? window : e === void 0 ? globalThis : e);
})), require_fastdom_promised = /* @__PURE__ */ __commonJSMin(((e, s) => {
	(function() {
		var e = {
			initialize: function() {
				this._tasks = /* @__PURE__ */ new Map();
			},
			mutate: function(e, s) {
				return c(this, "mutate", e, s);
			},
			measure: function(e, s) {
				return c(this, "measure", e, s);
			},
			clear: function(e) {
				var s = this._tasks, c = s.get(e);
				this.fastdom.clear(c), s.delete(e);
			}
		};
		function c(e, s, c, l) {
			var u = e._tasks, f = e.fastdom, p, h = new Promise(function(e, g) {
				p = f[s](function() {
					u.delete(h);
					try {
						e(l ? c.call(l) : c());
					} catch (e) {
						g(e);
					}
				}, l);
			});
			return u.set(h, p), h;
		}
		(typeof define)[0] == "f" ? define(function() {
			return e;
		}) : (typeof s)[0] == "o" ? s.exports = e : window.fastdomPromised = e;
	})();
}));
function L() {
	return {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
}
var T = L();
function G(e) {
	T = e;
}
var E = { exec: () => null };
function d(e, s = "") {
	let c = typeof e == "string" ? e : e.source, l = {
		replace: (e, s) => {
			let u = typeof s == "string" ? s : s.source;
			return u = u.replace(m.caret, "$1"), c = c.replace(e, u), l;
		},
		getRegex: () => new RegExp(c, s)
	};
	return l;
}
var be = (() => {
	try {
		return !0;
	} catch {
		return !1;
	}
})(), m = {
	codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
	outputLinkReplace: /\\([\[\]])/g,
	indentCodeCompensation: /^(\s+)(?:```)/,
	beginningSpace: /^\s+/,
	endingHash: /#$/,
	startingSpaceChar: /^ /,
	endingSpaceChar: / $/,
	nonSpaceChar: /[^ ]/,
	newLineCharGlobal: /\n/g,
	tabCharGlobal: /\t/g,
	multipleSpaceGlobal: /\s+/g,
	blankLine: /^[ \t]*$/,
	doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
	blockquoteStart: /^ {0,3}>/,
	blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
	blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
	listReplaceTabs: /^\t+/,
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] /,
	listReplaceTask: /^\[[ xX]\] +/,
	anyLine: /\n.*\n/,
	hrefBrackets: /^<(.*)>$/,
	tableDelimiter: /[:|]/,
	tableAlignChars: /^\||\| *$/g,
	tableRowBlankLine: /\n[ \t]*$/,
	tableAlignRight: /^ *-+: *$/,
	tableAlignCenter: /^ *:-+: *$/,
	tableAlignLeft: /^ *:-+ *$/,
	startATag: /^<a /i,
	endATag: /^<\/a>/i,
	startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
	endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
	startAngleBracket: /^</,
	endAngleBracket: />$/,
	pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
	unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
	escapeTest: /[&<>"']/,
	escapeReplace: /[&<>"']/g,
	escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
	escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
	unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
	caret: /(^|[^\[])\^/g,
	percentDecode: /%25/g,
	findPipe: /\|/g,
	splitPipe: / \|/,
	slashPipe: /\\\|/g,
	carriageReturn: /\r\n|\r/g,
	spaceLine: /^ +$/gm,
	notSpaceStart: /^\S*/,
	endingNewline: /\n$/,
	listItemRegex: (e) => /* @__PURE__ */ RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
	nextBulletRegex: (e) => /* @__PURE__ */ RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
	hrRegex: (e) => /* @__PURE__ */ RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
	fencesBeginRegex: (e) => /* @__PURE__ */ RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
	headingBeginRegex: (e) => /* @__PURE__ */ RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
	htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, Re = /^(?:[ \t]*(?:\n|$))+/, Te = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Oe = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, I = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, we = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, F = /(?:[*+-]|\d{1,9}[.)])/, ie = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, oe = d(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), ye = d(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), j = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Pe = /^[^\n]+/, Q = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Se = d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Q).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), $e = d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, F).getRegex(), v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, _e = d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ae = d(j).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex(), K = {
	blockquote: d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ae).getRegex(),
	code: Te,
	def: Se,
	fences: Oe,
	heading: we,
	hr: I,
	html: _e,
	lheading: oe,
	list: $e,
	newline: Re,
	paragraph: ae,
	table: E,
	text: Pe
}, re = d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex(), Me = {
	...K,
	lheading: ye,
	table: re,
	paragraph: d(j).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", re).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex()
}, ze = {
	...K,
	html: d("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: E,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: d(j).replace("hr", I).replace("heading", " *#{1,6} *[^\n]").replace("lheading", oe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Ae = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ee = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, le = /^( {2,}|\\)\n(?!\s*$)/, Ie = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, D = /[\p{P}\p{S}]/u, W = /[\s\p{P}\p{S}]/u, ue = /[^\s\p{P}\p{S}]/u, Ce = d(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, W).getRegex(), pe = /(?!~)[\p{P}\p{S}]/u, Be = /(?!~)[\s\p{P}\p{S}]/u, qe = /(?:[^\s\p{P}\p{S}]|~)/u, ve = d(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", be ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ce = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, De = d(ce, "u").replace(/punct/g, D).getRegex(), He = d(ce, "u").replace(/punct/g, pe).getRegex(), he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ze = d(he, "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex(), Ge = d(he, "gu").replace(/notPunctSpace/g, qe).replace(/punctSpace/g, Be).replace(/punct/g, pe).getRegex(), Ne = d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex(), Fe = d(/\\(punct)/, "gu").replace(/punct/g, D).getRegex(), je = d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Qe = d(U).replace("(?:-->|$)", "-->").getRegex(), Ue = d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Qe).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Ke = d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), de = d(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", Q).getRegex(), ke = d(/^!?\[(ref)\](?:\[\])?/).replace("ref", Q).getRegex(), We = d("reflink|nolink(?!\\()", "g").replace("reflink", de).replace("nolink", ke).getRegex(), se = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, X = {
	_backpedal: E,
	anyPunctuation: Fe,
	autolink: je,
	blockSkip: ve,
	br: le,
	code: Ee,
	del: E,
	emStrongLDelim: De,
	emStrongRDelimAst: Ze,
	emStrongRDelimUnd: Ne,
	escape: Ae,
	link: Ke,
	nolink: ke,
	punctuation: Ce,
	reflink: de,
	reflinkSearch: We,
	tag: Ue,
	text: Ie,
	url: E
}, Xe = {
	...X,
	link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(),
	reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex()
}, N = {
	...X,
	emStrongRDelimAst: Ge,
	emStrongLDelim: He,
	url: d(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", se).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: d(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", se).getRegex()
}, Je = {
	...N,
	br: d(le).replace("{2,}", "*").getRegex(),
	text: d(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, C = {
	normal: K,
	gfm: Me,
	pedantic: ze
}, M = {
	normal: X,
	gfm: N,
	breaks: Je,
	pedantic: Xe
}, Ve = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, ge = (e) => Ve[e];
function w(e, s) {
	if (s) {
		if (m.escapeTest.test(e)) return e.replace(m.escapeReplace, ge);
	} else if (m.escapeTestNoEncode.test(e)) return e.replace(m.escapeReplaceNoEncode, ge);
	return e;
}
function J(e) {
	try {
		e = encodeURI(e).replace(m.percentDecode, "%");
	} catch {
		return null;
	}
	return e;
}
function V(e, s) {
	let c = e.replace(m.findPipe, (e, s, c) => {
		let l = !1, u = s;
		for (; --u >= 0 && c[u] === "\\";) l = !l;
		return l ? "|" : " |";
	}).split(m.splitPipe), l = 0;
	if (c[0].trim() || c.shift(), c.length > 0 && !c.at(-1)?.trim() && c.pop(), s) if (c.length > s) c.splice(s);
	else for (; c.length < s;) c.push("");
	for (; l < c.length; l++) c[l] = c[l].trim().replace(m.slashPipe, "|");
	return c;
}
function z(e, s, c) {
	let l = e.length;
	if (l === 0) return "";
	let u = 0;
	for (; u < l;) {
		let f = e.charAt(l - u - 1);
		if (f === s && !c) u++;
		else if (f !== s && c) u++;
		else break;
	}
	return e.slice(0, l - u);
}
function fe(e, s) {
	if (e.indexOf(s[1]) === -1) return -1;
	let c = 0;
	for (let l = 0; l < e.length; l++) if (e[l] === "\\") l++;
	else if (e[l] === s[0]) c++;
	else if (e[l] === s[1] && (c--, c < 0)) return l;
	return c > 0 ? -2 : -1;
}
function me(e, s, c, l, u) {
	let f = s.href, p = s.title || null, h = e[1].replace(u.other.outputLinkReplace, "$1");
	l.state.inLink = !0;
	let g = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: c,
		href: f,
		title: p,
		text: h,
		tokens: l.inlineTokens(h)
	};
	return l.state.inLink = !1, g;
}
function Ye(e, s, c) {
	let l = e.match(c.other.indentCodeCompensation);
	if (l === null) return s;
	let u = l[1];
	return s.split("\n").map((e) => {
		let s = e.match(c.other.beginningSpace);
		if (s === null) return e;
		let [l] = s;
		return l.length >= u.length ? e.slice(u.length) : e;
	}).join("\n");
}
var y = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || T;
	}
	space(e) {
		let s = this.rules.block.newline.exec(e);
		if (s && s[0].length > 0) return {
			type: "space",
			raw: s[0]
		};
	}
	code(e) {
		let s = this.rules.block.code.exec(e);
		if (s) {
			let e = s[0].replace(this.rules.other.codeRemoveIndent, "");
			return {
				type: "code",
				raw: s[0],
				codeBlockStyle: "indented",
				text: this.options.pedantic ? e : z(e, "\n")
			};
		}
	}
	fences(e) {
		let s = this.rules.block.fences.exec(e);
		if (s) {
			let e = s[0], c = Ye(e, s[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: s[2] ? s[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : s[2],
				text: c
			};
		}
	}
	heading(e) {
		let s = this.rules.block.heading.exec(e);
		if (s) {
			let e = s[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let s = z(e, "#");
				(this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (e = s.trim());
			}
			return {
				type: "heading",
				raw: s[0],
				depth: s[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let s = this.rules.block.hr.exec(e);
		if (s) return {
			type: "hr",
			raw: z(s[0], "\n")
		};
	}
	blockquote(e) {
		let s = this.rules.block.blockquote.exec(e);
		if (s) {
			let e = z(s[0], "\n").split("\n"), c = "", l = "", u = [];
			for (; e.length > 0;) {
				let s = !1, f = [], p;
				for (p = 0; p < e.length; p++) if (this.rules.other.blockquoteStart.test(e[p])) f.push(e[p]), s = !0;
				else if (!s) f.push(e[p]);
				else break;
				e = e.slice(p);
				let h = f.join("\n"), g = h.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				c = c ? `${c}
${h}` : h, l = l ? `${l}
${g}` : g;
				let O = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(g, u, !0), this.lexer.state.top = O, e.length === 0) break;
				let A = u.at(-1);
				if (A?.type === "code") break;
				if (A?.type === "blockquote") {
					let s = A, f = s.raw + "\n" + e.join("\n"), p = this.blockquote(f);
					u[u.length - 1] = p, c = c.substring(0, c.length - s.raw.length) + p.raw, l = l.substring(0, l.length - s.text.length) + p.text;
					break;
				} else if (A?.type === "list") {
					let s = A, f = s.raw + "\n" + e.join("\n"), p = this.list(f);
					u[u.length - 1] = p, c = c.substring(0, c.length - A.raw.length) + p.raw, l = l.substring(0, l.length - s.raw.length) + p.raw, e = f.substring(u.at(-1).raw.length).split("\n");
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: c,
				tokens: u,
				text: l
			};
		}
	}
	list(e) {
		let s = this.rules.block.list.exec(e);
		if (s) {
			let c = s[1].trim(), l = c.length > 1, u = {
				type: "list",
				raw: "",
				ordered: l,
				start: l ? +c.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			c = l ? `\\d{1,9}\\${c.slice(-1)}` : `\\${c}`, this.options.pedantic && (c = l ? c : "[*+-]");
			let f = this.rules.other.listItemRegex(c), p = !1;
			for (; e;) {
				let c = !1, l = "", h = "";
				if (!(s = f.exec(e)) || this.rules.block.hr.test(e)) break;
				l = s[0], e = e.substring(l.length);
				let g = s[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, (e) => " ".repeat(3 * e.length)), O = e.split("\n", 1)[0], A = !g.trim(), R = 0;
				if (this.options.pedantic ? (R = 2, h = g.trimStart()) : A ? R = s[1].length + 1 : (R = s[2].search(this.rules.other.nonSpaceChar), R = R > 4 ? 1 : R, h = g.slice(R), R += s[1].length), A && this.rules.other.blankLine.test(O) && (l += O + "\n", e = e.substring(O.length + 1), c = !0), !c) {
					let s = this.rules.other.nextBulletRegex(R), c = this.rules.other.hrRegex(R), u = this.rules.other.fencesBeginRegex(R), f = this.rules.other.headingBeginRegex(R), p = this.rules.other.htmlBeginRegex(R);
					for (; e;) {
						let B = e.split("\n", 1)[0], H;
						if (O = B, this.options.pedantic ? (O = O.replace(this.rules.other.listReplaceNesting, "  "), H = O) : H = O.replace(this.rules.other.tabCharGlobal, "    "), u.test(O) || f.test(O) || p.test(O) || s.test(O) || c.test(O)) break;
						if (H.search(this.rules.other.nonSpaceChar) >= R || !O.trim()) h += "\n" + H.slice(R);
						else {
							if (A || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || u.test(g) || f.test(g) || c.test(g)) break;
							h += "\n" + O;
						}
						!A && !O.trim() && (A = !0), l += B + "\n", e = e.substring(B.length + 1), g = H.slice(R);
					}
				}
				u.loose || (p ? u.loose = !0 : this.rules.other.doubleBlankLine.test(l) && (p = !0));
				let B = null, H;
				this.options.gfm && (B = this.rules.other.listIsTask.exec(h), B && (H = B[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), u.items.push({
					type: "list_item",
					raw: l,
					task: !!B,
					checked: H,
					loose: !1,
					text: h,
					tokens: []
				}), u.raw += l;
			}
			let h = u.items.at(-1);
			if (h) h.raw = h.raw.trimEnd(), h.text = h.text.trimEnd();
			else return;
			u.raw = u.raw.trimEnd();
			for (let e = 0; e < u.items.length; e++) if (this.lexer.state.top = !1, u.items[e].tokens = this.lexer.blockTokens(u.items[e].text, []), !u.loose) {
				let s = u.items[e].tokens.filter((e) => e.type === "space");
				u.loose = s.length > 0 && s.some((e) => this.rules.other.anyLine.test(e.raw));
			}
			if (u.loose) for (let e = 0; e < u.items.length; e++) u.items[e].loose = !0;
			return u;
		}
	}
	html(e) {
		let s = this.rules.block.html.exec(e);
		if (s) return {
			type: "html",
			block: !0,
			raw: s[0],
			pre: s[1] === "pre" || s[1] === "script" || s[1] === "style",
			text: s[0]
		};
	}
	def(e) {
		let s = this.rules.block.def.exec(e);
		if (s) {
			let e = s[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), c = s[2] ? s[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", l = s[3] ? s[3].substring(1, s[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : s[3];
			return {
				type: "def",
				tag: e,
				raw: s[0],
				href: c,
				title: l
			};
		}
	}
	table(e) {
		let s = this.rules.block.table.exec(e);
		if (!s || !this.rules.other.tableDelimiter.test(s[2])) return;
		let c = V(s[1]), l = s[2].replace(this.rules.other.tableAlignChars, "").split("|"), u = s[3]?.trim() ? s[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], f = {
			type: "table",
			raw: s[0],
			header: [],
			align: [],
			rows: []
		};
		if (c.length === l.length) {
			for (let e of l) this.rules.other.tableAlignRight.test(e) ? f.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? f.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? f.align.push("left") : f.align.push(null);
			for (let e = 0; e < c.length; e++) f.header.push({
				text: c[e],
				tokens: this.lexer.inline(c[e]),
				header: !0,
				align: f.align[e]
			});
			for (let e of u) f.rows.push(V(e, f.header.length).map((e, s) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: f.align[s]
			})));
			return f;
		}
	}
	lheading(e) {
		let s = this.rules.block.lheading.exec(e);
		if (s) return {
			type: "heading",
			raw: s[0],
			depth: s[2].charAt(0) === "=" ? 1 : 2,
			text: s[1],
			tokens: this.lexer.inline(s[1])
		};
	}
	paragraph(e) {
		let s = this.rules.block.paragraph.exec(e);
		if (s) {
			let e = s[1].charAt(s[1].length - 1) === "\n" ? s[1].slice(0, -1) : s[1];
			return {
				type: "paragraph",
				raw: s[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let s = this.rules.block.text.exec(e);
		if (s) return {
			type: "text",
			raw: s[0],
			text: s[0],
			tokens: this.lexer.inline(s[0])
		};
	}
	escape(e) {
		let s = this.rules.inline.escape.exec(e);
		if (s) return {
			type: "escape",
			raw: s[0],
			text: s[1]
		};
	}
	tag(e) {
		let s = this.rules.inline.tag.exec(e);
		if (s) return !this.lexer.state.inLink && this.rules.other.startATag.test(s[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(s[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(s[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(s[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: s[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: s[0]
		};
	}
	link(e) {
		let s = this.rules.inline.link.exec(e);
		if (s) {
			let e = s[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
				if (!this.rules.other.endAngleBracket.test(e)) return;
				let s = z(e.slice(0, -1), "\\");
				if ((e.length - s.length) % 2 == 0) return;
			} else {
				let e = fe(s[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let c = (s[0].indexOf("!") === 0 ? 5 : 4) + s[1].length + e;
					s[2] = s[2].substring(0, e), s[0] = s[0].substring(0, c).trim(), s[3] = "";
				}
			}
			let c = s[2], l = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(c);
				e && (c = e[1], l = e[3]);
			} else l = s[3] ? s[3].slice(1, -1) : "";
			return c = c.trim(), this.rules.other.startAngleBracket.test(c) && (c = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? c.slice(1) : c.slice(1, -1)), me(s, {
				href: c && c.replace(this.rules.inline.anyPunctuation, "$1"),
				title: l && l.replace(this.rules.inline.anyPunctuation, "$1")
			}, s[0], this.lexer, this.rules);
		}
	}
	reflink(e, s) {
		let c;
		if ((c = this.rules.inline.reflink.exec(e)) || (c = this.rules.inline.nolink.exec(e))) {
			let e = s[(c[2] || c[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!e) {
				let e = c[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return me(c, e, c[0], this.lexer, this.rules);
		}
	}
	emStrong(e, s, c = "") {
		let l = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!l || l[3] && c.match(this.rules.other.unicodeAlphaNumeric)) && (!(l[1] || l[2]) || !c || this.rules.inline.punctuation.exec(c))) {
			let c = [...l[0]].length - 1, u, f, p = c, h = 0, g = l[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (g.lastIndex = 0, s = s.slice(-1 * e.length + c); (l = g.exec(s)) != null;) {
				if (u = l[1] || l[2] || l[3] || l[4] || l[5] || l[6], !u) continue;
				if (f = [...u].length, l[3] || l[4]) {
					p += f;
					continue;
				} else if ((l[5] || l[6]) && c % 3 && !((c + f) % 3)) {
					h += f;
					continue;
				}
				if (p -= f, p > 0) continue;
				f = Math.min(f, f + p + h);
				let s = [...l[0]][0].length, g = e.slice(0, c + l.index + s + f);
				if (Math.min(c, f) % 2) {
					let e = g.slice(1, -1);
					return {
						type: "em",
						raw: g,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let O = g.slice(2, -2);
				return {
					type: "strong",
					raw: g,
					text: O,
					tokens: this.lexer.inlineTokens(O)
				};
			}
		}
	}
	codespan(e) {
		let s = this.rules.inline.code.exec(e);
		if (s) {
			let e = s[2].replace(this.rules.other.newLineCharGlobal, " "), c = this.rules.other.nonSpaceChar.test(e), l = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return c && l && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: s[0],
				text: e
			};
		}
	}
	br(e) {
		let s = this.rules.inline.br.exec(e);
		if (s) return {
			type: "br",
			raw: s[0]
		};
	}
	del(e) {
		let s = this.rules.inline.del.exec(e);
		if (s) return {
			type: "del",
			raw: s[0],
			text: s[2],
			tokens: this.lexer.inlineTokens(s[2])
		};
	}
	autolink(e) {
		let s = this.rules.inline.autolink.exec(e);
		if (s) {
			let e, c;
			return s[2] === "@" ? (e = s[1], c = "mailto:" + e) : (e = s[1], c = e), {
				type: "link",
				raw: s[0],
				text: e,
				href: c,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let s;
		if (s = this.rules.inline.url.exec(e)) {
			let e, c;
			if (s[2] === "@") e = s[0], c = "mailto:" + e;
			else {
				let l;
				do
					l = s[0], s[0] = this.rules.inline._backpedal.exec(s[0])?.[0] ?? "";
				while (l !== s[0]);
				e = s[0], c = s[1] === "www." ? "http://" + s[0] : s[0];
			}
			return {
				type: "link",
				raw: s[0],
				text: e,
				href: c,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let s = this.rules.inline.text.exec(e);
		if (s) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: s[0],
				text: s[0],
				escaped: e
			};
		}
	}
}, x = class e {
	tokens;
	options;
	state;
	tokenizer;
	inlineQueue;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let s = {
			other: m,
			block: C.normal,
			inline: M.normal
		};
		this.options.pedantic ? (s.block = C.pedantic, s.inline = M.pedantic) : this.options.gfm && (s.block = C.gfm, this.options.breaks ? s.inline = M.breaks : s.inline = M.gfm), this.tokenizer.rules = s;
	}
	static get rules() {
		return {
			block: C,
			inline: M
		};
	}
	static lex(s, c) {
		return new e(c).lex(s);
	}
	static lexInline(s, c) {
		return new e(c).inlineTokens(s);
	}
	lex(e) {
		e = e.replace(m.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let s = this.inlineQueue[e];
			this.inlineTokens(s.src, s.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, s = [], c = !1) {
		for (this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e;) {
			let l;
			if (this.options.extensions?.block?.some((c) => (l = c.call({ lexer: this }, e, s)) ? (e = e.substring(l.raw.length), s.push(l), !0) : !1)) continue;
			if (l = this.tokenizer.space(e)) {
				e = e.substring(l.raw.length);
				let c = s.at(-1);
				l.raw.length === 1 && c !== void 0 ? c.raw += "\n" : s.push(l);
				continue;
			}
			if (l = this.tokenizer.code(e)) {
				e = e.substring(l.raw.length);
				let c = s.at(-1);
				c?.type === "paragraph" || c?.type === "text" ? (c.raw += (c.raw.endsWith("\n") ? "" : "\n") + l.raw, c.text += "\n" + l.text, this.inlineQueue.at(-1).src = c.text) : s.push(l);
				continue;
			}
			if (l = this.tokenizer.fences(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.heading(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.hr(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.blockquote(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.list(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.html(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.def(e)) {
				e = e.substring(l.raw.length);
				let c = s.at(-1);
				c?.type === "paragraph" || c?.type === "text" ? (c.raw += (c.raw.endsWith("\n") ? "" : "\n") + l.raw, c.text += "\n" + l.raw, this.inlineQueue.at(-1).src = c.text) : this.tokens.links[l.tag] || (this.tokens.links[l.tag] = {
					href: l.href,
					title: l.title
				}, s.push(l));
				continue;
			}
			if (l = this.tokenizer.table(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.lheading(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			let u = e;
			if (this.options.extensions?.startBlock) {
				let s = Infinity, c = e.slice(1), l;
				this.options.extensions.startBlock.forEach((e) => {
					l = e.call({ lexer: this }, c), typeof l == "number" && l >= 0 && (s = Math.min(s, l));
				}), s < Infinity && s >= 0 && (u = e.substring(0, s + 1));
			}
			if (this.state.top && (l = this.tokenizer.paragraph(u))) {
				let f = s.at(-1);
				c && f?.type === "paragraph" ? (f.raw += (f.raw.endsWith("\n") ? "" : "\n") + l.raw, f.text += "\n" + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = f.text) : s.push(l), c = u.length !== e.length, e = e.substring(l.raw.length);
				continue;
			}
			if (l = this.tokenizer.text(e)) {
				e = e.substring(l.raw.length);
				let c = s.at(-1);
				c?.type === "text" ? (c.raw += (c.raw.endsWith("\n") ? "" : "\n") + l.raw, c.text += "\n" + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = c.text) : s.push(l);
				continue;
			}
			if (e) {
				let s = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(s);
					break;
				} else throw Error(s);
			}
		}
		return this.state.top = !0, s;
	}
	inline(e, s = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: s
		}), s;
	}
	inlineTokens(e, s = []) {
		let c = e, l = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (l = this.tokenizer.rules.inline.reflinkSearch.exec(c)) != null;) e.includes(l[0].slice(l[0].lastIndexOf("[") + 1, -1)) && (c = c.slice(0, l.index) + "[" + "a".repeat(l[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (l = this.tokenizer.rules.inline.anyPunctuation.exec(c)) != null;) c = c.slice(0, l.index) + "++" + c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		let u;
		for (; (l = this.tokenizer.rules.inline.blockSkip.exec(c)) != null;) u = l[2] ? l[2].length : 0, c = c.slice(0, l.index + u) + "[" + "a".repeat(l[0].length - u - 2) + "]" + c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		c = this.options.hooks?.emStrongMask?.call({ lexer: this }, c) ?? c;
		let f = !1, p = "";
		for (; e;) {
			f || (p = ""), f = !1;
			let l;
			if (this.options.extensions?.inline?.some((c) => (l = c.call({ lexer: this }, e, s)) ? (e = e.substring(l.raw.length), s.push(l), !0) : !1)) continue;
			if (l = this.tokenizer.escape(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.tag(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.link(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(l.raw.length);
				let c = s.at(-1);
				l.type === "text" && c?.type === "text" ? (c.raw += l.raw, c.text += l.text) : s.push(l);
				continue;
			}
			if (l = this.tokenizer.emStrong(e, c, p)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.codespan(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.br(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.del(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (l = this.tokenizer.autolink(e)) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			if (!this.state.inLink && (l = this.tokenizer.url(e))) {
				e = e.substring(l.raw.length), s.push(l);
				continue;
			}
			let u = e;
			if (this.options.extensions?.startInline) {
				let s = Infinity, c = e.slice(1), l;
				this.options.extensions.startInline.forEach((e) => {
					l = e.call({ lexer: this }, c), typeof l == "number" && l >= 0 && (s = Math.min(s, l));
				}), s < Infinity && s >= 0 && (u = e.substring(0, s + 1));
			}
			if (l = this.tokenizer.inlineText(u)) {
				e = e.substring(l.raw.length), l.raw.slice(-1) !== "_" && (p = l.raw.slice(-1)), f = !0;
				let c = s.at(-1);
				c?.type === "text" ? (c.raw += l.raw, c.text += l.text) : s.push(l);
				continue;
			}
			if (e) {
				let s = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(s);
					break;
				} else throw Error(s);
			}
		}
		return s;
	}
}, P = class {
	options;
	parser;
	constructor(e) {
		this.options = e || T;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: s, escaped: c }) {
		let l = (s || "").match(m.notSpaceStart)?.[0], u = e.replace(m.endingNewline, "") + "\n";
		return l ? "<pre><code class=\"language-" + w(l) + "\">" + (c ? u : w(u, !0)) + "</code></pre>\n" : "<pre><code>" + (c ? u : w(u, !0)) + "</code></pre>\n";
	}
	blockquote({ tokens: e }) {
		return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
	}
	html({ text: e }) {
		return e;
	}
	def(e) {
		return "";
	}
	heading({ tokens: e, depth: s }) {
		return `<h${s}>${this.parser.parseInline(e)}</h${s}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let s = e.ordered, c = e.start, l = "";
		for (let s = 0; s < e.items.length; s++) {
			let c = e.items[s];
			l += this.listitem(c);
		}
		let u = s ? "ol" : "ul", f = s && c !== 1 ? " start=\"" + c + "\"" : "";
		return "<" + u + f + ">\n" + l + "</" + u + ">\n";
	}
	listitem(e) {
		let s = "";
		if (e.task) {
			let c = this.checkbox({ checked: !!e.checked });
			e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = c + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = c + " " + w(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
				type: "text",
				raw: c + " ",
				text: c + " ",
				escaped: !0
			}) : s += c + " ";
		}
		return s += this.parser.parse(e.tokens, !!e.loose), `<li>${s}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\">";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let s = "", c = "";
		for (let s = 0; s < e.header.length; s++) c += this.tablecell(e.header[s]);
		s += this.tablerow({ text: c });
		let l = "";
		for (let s = 0; s < e.rows.length; s++) {
			let u = e.rows[s];
			c = "";
			for (let e = 0; e < u.length; e++) c += this.tablecell(u[e]);
			l += this.tablerow({ text: c });
		}
		return l &&= `<tbody>${l}</tbody>`, "<table>\n<thead>\n" + s + "</thead>\n" + l + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let s = this.parser.parseInline(e.tokens), c = e.header ? "th" : "td";
		return (e.align ? `<${c} align="${e.align}">` : `<${c}>`) + s + `</${c}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${w(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: s, tokens: c }) {
		let l = this.parser.parseInline(c), u = J(e);
		if (u === null) return l;
		e = u;
		let f = "<a href=\"" + e + "\"";
		return s && (f += " title=\"" + w(s) + "\""), f += ">" + l + "</a>", f;
	}
	image({ href: e, title: s, text: c, tokens: l }) {
		l && (c = this.parser.parseInline(l, this.parser.textRenderer));
		let u = J(e);
		if (u === null) return w(c);
		e = u;
		let f = `<img src="${e}" alt="${c}"`;
		return s && (f += ` title="${w(s)}"`), f += ">", f;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : w(e.text);
	}
}, $ = class {
	strong({ text: e }) {
		return e;
	}
	em({ text: e }) {
		return e;
	}
	codespan({ text: e }) {
		return e;
	}
	del({ text: e }) {
		return e;
	}
	html({ text: e }) {
		return e;
	}
	text({ text: e }) {
		return e;
	}
	link({ text: e }) {
		return "" + e;
	}
	image({ text: e }) {
		return "" + e;
	}
	br() {
		return "";
	}
}, b = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || T, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
	}
	static parse(s, c) {
		return new e(c).parse(s);
	}
	static parseInline(s, c) {
		return new e(c).parseInline(s);
	}
	parse(e, s = !0) {
		let c = "";
		for (let l = 0; l < e.length; l++) {
			let u = e[l];
			if (this.options.extensions?.renderers?.[u.type]) {
				let e = u, s = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (s !== !1 || ![
					"space",
					"hr",
					"heading",
					"code",
					"table",
					"blockquote",
					"list",
					"html",
					"def",
					"paragraph",
					"text"
				].includes(e.type)) {
					c += s || "";
					continue;
				}
			}
			let f = u;
			switch (f.type) {
				case "space":
					c += this.renderer.space(f);
					continue;
				case "hr":
					c += this.renderer.hr(f);
					continue;
				case "heading":
					c += this.renderer.heading(f);
					continue;
				case "code":
					c += this.renderer.code(f);
					continue;
				case "table":
					c += this.renderer.table(f);
					continue;
				case "blockquote":
					c += this.renderer.blockquote(f);
					continue;
				case "list":
					c += this.renderer.list(f);
					continue;
				case "html":
					c += this.renderer.html(f);
					continue;
				case "def":
					c += this.renderer.def(f);
					continue;
				case "paragraph":
					c += this.renderer.paragraph(f);
					continue;
				case "text": {
					let u = f, p = this.renderer.text(u);
					for (; l + 1 < e.length && e[l + 1].type === "text";) u = e[++l], p += "\n" + this.renderer.text(u);
					s ? c += this.renderer.paragraph({
						type: "paragraph",
						raw: p,
						text: p,
						tokens: [{
							type: "text",
							raw: p,
							text: p,
							escaped: !0
						}]
					}) : c += p;
					continue;
				}
				default: {
					let e = "Token with \"" + f.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return c;
	}
	parseInline(e, s = this.renderer) {
		let c = "";
		for (let l = 0; l < e.length; l++) {
			let u = e[l];
			if (this.options.extensions?.renderers?.[u.type]) {
				let e = this.options.extensions.renderers[u.type].call({ parser: this }, u);
				if (e !== !1 || ![
					"escape",
					"html",
					"link",
					"image",
					"strong",
					"em",
					"codespan",
					"br",
					"del",
					"text"
				].includes(u.type)) {
					c += e || "";
					continue;
				}
			}
			let f = u;
			switch (f.type) {
				case "escape":
					c += s.text(f);
					break;
				case "html":
					c += s.html(f);
					break;
				case "link":
					c += s.link(f);
					break;
				case "image":
					c += s.image(f);
					break;
				case "strong":
					c += s.strong(f);
					break;
				case "em":
					c += s.em(f);
					break;
				case "codespan":
					c += s.codespan(f);
					break;
				case "br":
					c += s.br(f);
					break;
				case "del":
					c += s.del(f);
					break;
				case "text":
					c += s.text(f);
					break;
				default: {
					let e = "Token with \"" + f.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return c;
	}
}, S = class {
	options;
	block;
	constructor(e) {
		this.options = e || T;
	}
	static passThroughHooks = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens",
		"emStrongMask"
	]);
	static passThroughHooksRespectAsync = new Set([
		"preprocess",
		"postprocess",
		"processAllTokens"
	]);
	preprocess(e) {
		return e;
	}
	postprocess(e) {
		return e;
	}
	processAllTokens(e) {
		return e;
	}
	emStrongMask(e) {
		return e;
	}
	provideLexer() {
		return this.block ? x.lex : x.lexInline;
	}
	provideParser() {
		return this.block ? b.parse : b.parseInline;
	}
}, _ = new class {
	defaults = L();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = b;
	Renderer = P;
	TextRenderer = $;
	Lexer = x;
	Tokenizer = y;
	Hooks = S;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, s) {
		let c = [];
		for (let l of e) switch (c = c.concat(s.call(this, l)), l.type) {
			case "table": {
				let e = l;
				for (let l of e.header) c = c.concat(this.walkTokens(l.tokens, s));
				for (let l of e.rows) for (let e of l) c = c.concat(this.walkTokens(e.tokens, s));
				break;
			}
			case "list": {
				let e = l;
				c = c.concat(this.walkTokens(e.items, s));
				break;
			}
			default: {
				let e = l;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((l) => {
					let u = e[l].flat(Infinity);
					c = c.concat(this.walkTokens(u, s));
				}) : e.tokens && (c = c.concat(this.walkTokens(e.tokens, s)));
			}
		}
		return c;
	}
	use(...e) {
		let s = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let c = { ...e };
			if (c.async = this.defaults.async || c.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let c = s.renderers[e.name];
					c ? s.renderers[e.name] = function(...s) {
						let l = e.renderer.apply(this, s);
						return l === !1 && (l = c.apply(this, s)), l;
					} : s.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let c = s[e.level];
					c ? c.unshift(e.tokenizer) : s[e.level] = [e.tokenizer], e.start && (e.level === "block" ? s.startBlock ? s.startBlock.push(e.start) : s.startBlock = [e.start] : e.level === "inline" && (s.startInline ? s.startInline.push(e.start) : s.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (s.childTokens[e.name] = e.childTokens);
			}), c.extensions = s), e.renderer) {
				let s = this.defaults.renderer || new P(this.defaults);
				for (let c in e.renderer) {
					if (!(c in s)) throw Error(`renderer '${c}' does not exist`);
					if (["options", "parser"].includes(c)) continue;
					let l = c, u = e.renderer[l], f = s[l];
					s[l] = (...e) => {
						let c = u.apply(s, e);
						return c === !1 && (c = f.apply(s, e)), c || "";
					};
				}
				c.renderer = s;
			}
			if (e.tokenizer) {
				let s = this.defaults.tokenizer || new y(this.defaults);
				for (let c in e.tokenizer) {
					if (!(c in s)) throw Error(`tokenizer '${c}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(c)) continue;
					let l = c, u = e.tokenizer[l], f = s[l];
					s[l] = (...e) => {
						let c = u.apply(s, e);
						return c === !1 && (c = f.apply(s, e)), c;
					};
				}
				c.tokenizer = s;
			}
			if (e.hooks) {
				let s = this.defaults.hooks || new S();
				for (let c in e.hooks) {
					if (!(c in s)) throw Error(`hook '${c}' does not exist`);
					if (["options", "block"].includes(c)) continue;
					let l = c, u = e.hooks[l], f = s[l];
					S.passThroughHooks.has(c) ? s[l] = (e) => {
						if (this.defaults.async && S.passThroughHooksRespectAsync.has(c)) return (async () => {
							let c = await u.call(s, e);
							return f.call(s, c);
						})();
						let l = u.call(s, e);
						return f.call(s, l);
					} : s[l] = (...e) => {
						if (this.defaults.async) return (async () => {
							let c = await u.apply(s, e);
							return c === !1 && (c = await f.apply(s, e)), c;
						})();
						let c = u.apply(s, e);
						return c === !1 && (c = f.apply(s, e)), c;
					};
				}
				c.hooks = s;
			}
			if (e.walkTokens) {
				let s = this.defaults.walkTokens, l = e.walkTokens;
				c.walkTokens = function(e) {
					let c = [];
					return c.push(l.call(this, e)), s && (c = c.concat(s.call(this, e))), c;
				};
			}
			this.defaults = {
				...this.defaults,
				...c
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, s) {
		return x.lex(e, s ?? this.defaults);
	}
	parser(e, s) {
		return b.parse(e, s ?? this.defaults);
	}
	parseMarkdown(e) {
		return (s, c) => {
			let l = { ...c }, u = {
				...this.defaults,
				...l
			}, f = this.onError(!!u.silent, !!u.async);
			if (this.defaults.async === !0 && l.async === !1) return f(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof s > "u" || s === null) return f(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof s != "string") return f(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
			if (u.hooks && (u.hooks.options = u, u.hooks.block = e), u.async) return (async () => {
				let c = u.hooks ? await u.hooks.preprocess(s) : s, l = await (u.hooks ? await u.hooks.provideLexer() : e ? x.lex : x.lexInline)(c, u), f = u.hooks ? await u.hooks.processAllTokens(l) : l;
				u.walkTokens && await Promise.all(this.walkTokens(f, u.walkTokens));
				let p = await (u.hooks ? await u.hooks.provideParser() : e ? b.parse : b.parseInline)(f, u);
				return u.hooks ? await u.hooks.postprocess(p) : p;
			})().catch(f);
			try {
				u.hooks && (s = u.hooks.preprocess(s));
				let c = (u.hooks ? u.hooks.provideLexer() : e ? x.lex : x.lexInline)(s, u);
				u.hooks && (c = u.hooks.processAllTokens(c)), u.walkTokens && this.walkTokens(c, u.walkTokens);
				let l = (u.hooks ? u.hooks.provideParser() : e ? b.parse : b.parseInline)(c, u);
				return u.hooks && (l = u.hooks.postprocess(l)), l;
			} catch (e) {
				return f(e);
			}
		};
	}
	onError(e, s) {
		return (c) => {
			if (c.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + w(c.message + "", !0) + "</pre>";
				return s ? Promise.resolve(e) : e;
			}
			if (s) return Promise.reject(c);
			throw c;
		};
	}
}();
function k(e, s) {
	return _.parse(e, s);
}
k.options = k.setOptions = function(e) {
	return _.setOptions(e), k.defaults = _.defaults, G(k.defaults), k;
}, k.getDefaults = L, k.defaults = T, k.use = function(...e) {
	return _.use(...e), k.defaults = _.defaults, G(k.defaults), k;
}, k.walkTokens = function(e, s) {
	return _.walkTokens(e, s);
}, k.parseInline = _.parseInline, k.Parser = b, k.parser = b.parse, k.Renderer = P, k.TextRenderer = $, k.Lexer = x, k.lexer = x.lex, k.Tokenizer = y, k.Hooks = S, k.parse = k, k.options, k.setOptions, k.use, k.walkTokens, k.parseInline, b.parse, x.lex;
function dedent(e) {
	var s = [...arguments].slice(1), c = Array.from(typeof e == "string" ? [e] : e);
	c[c.length - 1] = c[c.length - 1].replace(/\r?\n([\t ]*)$/, "");
	var l = c.reduce(function(e, s) {
		var c = s.match(/\n([\t ]+|(?!\s).)/g);
		return c ? e.concat(c.map(function(e) {
			return e.match(/[\t ]/g)?.length ?? 0;
		})) : e;
	}, []);
	if (l.length) {
		var u = RegExp("\n[	 ]{" + Math.min.apply(Math, l) + "}", "g");
		c = c.map(function(e) {
			return e.replace(u, "\n");
		});
	}
	c[0] = c[0].replace(/^\r?\n/, "");
	var f = c[0];
	return s.forEach(function(e, s) {
		var l = f.match(/(?:^|\n)( *)$/), u = l ? l[1] : "", p = e;
		typeof e == "string" && e.includes("\n") && (p = String(e).split("\n").map(function(e, s) {
			return s === 0 ? e : "" + u + e;
		}).join("\n")), f += p + c[s + 1];
	}), f;
}
var import_fastdom = /* @__PURE__ */ __toESM(require_fastdom(), 1), import_fastdom_promised = /* @__PURE__ */ __toESM(require_fastdom_promised(), 1), hasPerformance = typeof performance < "u" && typeof performance.now == "function", now = /* @__PURE__ */ __name(() => hasPerformance ? performance.now() : 0, "now"), MEASURE_PREFIX = "🧜 ", DEVTOOLS_TRACK = "Mermaid render", DEVTOOLS_TRACK_GROUP = "Mermaid", PHASE_COLORS = {
	parse: "tertiary",
	prepare: "secondary",
	measure: "primary",
	layout: "primary-dark",
	layoutCore: "error",
	draw: "primary-light",
	paint: "secondary-dark",
	serialize: "tertiary-dark",
	render: "primary-light"
};
(class {
	constructor() {
		this.enabled = !1, this.autoPrint = !0, this.records = [], this.maxRecords = 200, this.roots = [], this.stack = [], this.buckets = {};
	}
	static #e = __name(this, "Profiler");
	enable() {
		return this.enabled = !0, this;
	}
	disable() {
		return this.enabled = !1, this;
	}
	start(e) {
		this.enabled && (this.roots = [], this.stack = [], this.buckets = {}, this.begin(e));
	}
	tickSync(e, s) {
		if (!this.enabled) return s();
		let c = now();
		try {
			return s();
		} finally {
			this.buckets[e] = (this.buckets[e] ?? 0) + (now() - c);
		}
	}
	async tick(e, s) {
		if (!this.enabled) return s();
		let c = now();
		try {
			return await s();
		} finally {
			this.buckets[e] = (this.buckets[e] ?? 0) + (now() - c);
		}
	}
	stop() {
		if (!this.enabled) return;
		for (; this.stack.length > 0;) this.end();
		let e = this.roots.at(-1), s = this.runLabel ?? e?.name;
		return e && (this.records.push({
			label: s ?? e.name,
			tree: e,
			buckets: { ...this.buckets }
		}), this.records.length > this.maxRecords && this.records.splice(0, this.records.length - this.maxRecords), this.autoPrint && this.printSummary(e, s)), this.runLabel = void 0, e;
	}
	begin(e) {
		if (!this.enabled) return;
		let s = {
			name: e,
			start: now(),
			duration: -1,
			children: []
		}, c = this.stack.at(-1);
		if (c ? c.children.push(s) : this.roots.push(s), this.stack.push(s), hasPerformance && typeof performance.mark == "function") try {
			performance.mark(`${MEASURE_PREFIX}${e} \u25B6`);
		} catch {}
	}
	end() {
		if (!this.enabled) return;
		let e = this.stack.pop();
		if (!e) return;
		let s = now();
		if (e.duration = s - e.start, hasPerformance && typeof performance.measure == "function") try {
			performance.measure(`${MEASURE_PREFIX}${e.name}`, {
				start: e.start,
				end: s,
				detail: { devtools: {
					dataType: "track-entry",
					track: DEVTOOLS_TRACK,
					trackGroup: DEVTOOLS_TRACK_GROUP,
					color: PHASE_COLORS[e.name] ?? "primary",
					tooltipText: `${e.name} \u2014 ${e.duration.toFixed(1)} ms`
				} }
			});
		} catch {}
	}
	async span(e, s) {
		if (!this.enabled) return s();
		this.begin(e);
		try {
			return await s();
		} finally {
			this.end();
		}
	}
	report() {
		return this.records.at(-1)?.tree ?? this.roots.at(-1);
	}
	clear() {
		this.records.length = 0, this.roots = [], this.stack = [], this.runLabel = void 0;
	}
	reset() {
		this.roots = [], this.stack = [];
	}
	printSummary(e = this.report(), s) {
		if (!e) return;
		let l = e.duration, u = s && s !== e.name ? `${e.name} [${s}]` : e.name, f = ["ms        %    phase"], p = /* @__PURE__ */ __name((e, s) => {
			let c = "  ".repeat(s), u = e.duration.toFixed(1).padStart(8), h = l > 0 ? `${(e.duration / l * 100).toFixed(0).padStart(3)}%` : "   -";
			f.push(`${u}  ${h}  ${c}${e.name}`);
			for (let c of e.children) p(c, s + 1);
			if (e.children.length > 0) {
				let s = e.children.reduce((e, s) => e + s.duration, 0), l = e.duration - s;
				if (l > .5) {
					let e = l.toFixed(1).padStart(8);
					f.push(`${e}       ${c}  (self)`);
				}
			}
		}, "walk");
		p(e, 0);
		let h = Object.keys(this.buckets);
		if (h.length > 0) {
			f.push("—— buckets (summed) ——");
			for (let e of h) f.push(`${this.buckets[e].toFixed(1).padStart(8)}       ${e}`);
		}
		console.log(`${MEASURE_PREFIX}mermaid render profile \xB7 ${u}
${f.join("\n")}`);
	}
}), globalThis.injected ??= {
	includeLargeFeatures: !0,
	profiling: !1,
	version: "0.0.0"
};
var fastdom_default = import_fastdom.default.extend({ raf(e) {
	typeof queueMicrotask == "function" ? queueMicrotask(e) : setTimeout(e, 0);
} }).extend(import_fastdom_promised.default);
function preprocessMarkdown(e, { markdownAutoWrap: s }) {
	return dedent(e.replace(/<br\/>/g, "\n").replace(/\n{2,}/g, "\n"));
}
__name(preprocessMarkdown, "preprocessMarkdown");
function nonMarkdownToLines(e) {
	return e.split(/\\n|\n|<br\s*\/?>/gi).map((e) => e.trim().match(/<[^>]+>|[^\s<>]+/g)?.map((e) => ({
		content: e,
		type: "normal"
	})) ?? []);
}
__name(nonMarkdownToLines, "nonMarkdownToLines");
function markdownToLines(e, s = {}) {
	let l = preprocessMarkdown(e, s), u = k.lexer(l), f = [[]], p = 0;
	function h(e, s = "normal") {
		e.type === "text" ? e.text.split("\n").forEach((e, c) => {
			c !== 0 && (p++, f.push([])), e.split(" ").forEach((e) => {
				e = e.replace(/&#39;/g, "'"), e && f[p].push({
					content: e,
					type: s
				});
			});
		}) : e.type === "strong" || e.type === "em" ? e.tokens.forEach((s) => {
			h(s, e.type);
		}) : e.type === "html" && f[p].push({
			content: e.text,
			type: "normal"
		});
	}
	return __name(h, "processNode"), u.forEach((e) => {
		e.type === "paragraph" ? e.tokens?.forEach((e) => {
			h(e);
		}) : e.type === "html" ? f[p].push({
			content: e.text,
			type: "normal"
		}) : f[p].push({
			content: e.raw,
			type: "normal"
		});
	}), f;
}
__name(markdownToLines, "markdownToLines");
function nonMarkdownToHTML(e) {
	return e ? `<p>${e.replace(/\\n|\n/g, "<br />")}</p>` : "";
}
__name(nonMarkdownToHTML, "nonMarkdownToHTML");
function markdownToHTML(e, { markdownAutoWrap: s } = {}) {
	let u = k.lexer(e);
	function f(e) {
		return e.type === "text" ? s === !1 ? e.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : e.text.replace(/\n */g, "<br/>") : e.type === "strong" ? `<strong>${e.tokens?.map(f).join("")}</strong>` : e.type === "em" ? `<em>${e.tokens?.map(f).join("")}</em>` : e.type === "paragraph" ? `<p>${e.tokens?.map(f).join("")}</p>` : e.type === "space" ? "" : e.type === "html" ? `${e.text}` : e.type === "escape" ? e.text : (log.warn(`Unsupported markdown: ${e.type}`), e.raw);
	}
	return __name(f, "output"), u.map(f).join("");
}
__name(markdownToHTML, "markdownToHTML");
function splitTextToChars(e) {
	return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((e) => e.segment) : [...e];
}
__name(splitTextToChars, "splitTextToChars");
function splitWordToFitWidth(e, s) {
	return splitWordToFitWidthRecursion(e, [], splitTextToChars(s.content), s.type);
}
__name(splitWordToFitWidth, "splitWordToFitWidth");
function splitWordToFitWidthRecursion(e, s, c, l) {
	if (c.length === 0) return [{
		content: s.join(""),
		type: l
	}, {
		content: "",
		type: l
	}];
	let [u, ...f] = c, p = [...s, u];
	return e([{
		content: p.join(""),
		type: l
	}]) ? splitWordToFitWidthRecursion(e, p, f, l) : (s.length === 0 && u && (s.push(u), c.shift()), [{
		content: s.join(""),
		type: l
	}, {
		content: c.join(""),
		type: l
	}]);
}
__name(splitWordToFitWidthRecursion, "splitWordToFitWidthRecursion");
function splitLineToFitWidth(e, s) {
	if (e.some(({ content: e }) => e.includes("\n"))) throw Error("splitLineToFitWidth does not support newlines in the line");
	return splitLineToFitWidthRecursion(e, s);
}
__name(splitLineToFitWidth, "splitLineToFitWidth");
function splitLineToFitWidthRecursion(e, s, c = [], l = []) {
	if (e.length === 0) return l.length > 0 && c.push(l), c.length > 0 ? c : [];
	let u = "";
	e[0].content === " " && (u = " ", e.shift());
	let f = e.shift() ?? {
		content: " ",
		type: "normal"
	}, p = [...l];
	if (u !== "" && p.push({
		content: u,
		type: "normal"
	}), p.push(f), s(p)) return splitLineToFitWidthRecursion(e, s, c, p);
	if (l.length > 0) c.push(l), e.unshift(f);
	else if (f.content) {
		let [l, u] = splitWordToFitWidth(s, f);
		c.push([l]), u.content && e.unshift(u);
	}
	return splitLineToFitWidthRecursion(e, s, c);
}
__name(splitLineToFitWidthRecursion, "splitLineToFitWidthRecursion");
function applyStyle(e, s) {
	s && e.attr("style", s);
}
__name(applyStyle, "applyStyle");
var maxSafeSizeForWidth = 16384;
async function addHtmlSpan(e, s, c, l, u = !1, A = getConfig()) {
	let R = e.append("foreignObject");
	R.attr("width", `${Math.min(10 * c, maxSafeSizeForWidth)}px`), R.attr("height", `${Math.min(10 * c, maxSafeSizeForWidth)}px`);
	let B = R.append("xhtml:div"), H = hasKatex(s.label) ? await renderKatexSanitized(s.label.replace(common_default.lineBreakRegex, "\n"), A) : sanitizeText(s.label, A), Y = s.isNode ? "nodeLabel" : "edgeLabel", Z = B.append("span");
	return Z.html(H), applyStyle(Z, s.labelStyle), Z.attr("class", `${Y} ${l}`), applyStyle(B, s.labelStyle), B.style("display", "table-cell"), B.style("white-space", "nowrap"), B.style("line-height", "1.5"), c !== Infinity && (B.style("max-width", c + "px"), B.style("text-align", "center")), B.attr("xmlns", "http://www.w3.org/1999/xhtml"), u && B.attr("class", "labelBkg"), (await fastdom_default.measure(() => B.node().getBoundingClientRect())).width === c && (B.style("display", "table"), B.style("white-space", "break-spaces"), B.style("width", c + "px")), R.node();
}
__name(addHtmlSpan, "addHtmlSpan");
function createTspan(e, s, c, l = !1) {
	let u = e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", s * c - .1 + "em").attr("dy", c + "em");
	return l && u.attr("text-anchor", "middle"), u;
}
__name(createTspan, "createTspan");
function computeWidthOfText(e, s, c) {
	let l = e.append("text"), u = createTspan(l, 1, s);
	updateTextContentAndStyles(u, c);
	let f = u.node().getComputedTextLength();
	return l.remove(), f;
}
__name(computeWidthOfText, "computeWidthOfText");
function computeDimensionOfText(e, s, c) {
	let l = e.append("text"), u = createTspan(l, 1, s);
	updateTextContentAndStyles(u, [{
		content: c,
		type: "normal"
	}]);
	let f = u.node()?.getBoundingClientRect();
	return f && l.remove(), f;
}
__name(computeDimensionOfText, "computeDimensionOfText");
function createFormattedText(e, s, l, u = !1, f = !1) {
	let p = 1.1, h = s.append("g"), g = h.insert("rect").attr("class", "background").attr("style", "stroke: none"), O = h.append("text").attr("y", "-10.1");
	f && O.attr("text-anchor", "middle");
	let A = 0;
	for (let s of l) {
		let l = /* @__PURE__ */ __name((s) => computeWidthOfText(h, p, s) <= e, "checkWidth"), u = l(s) ? [s] : splitLineToFitWidth(s, l);
		for (let e of u) updateTextContentAndStyles(createTspan(O, A, p, f), e), A++;
	}
	if (u) {
		let e = O.node().getBBox();
		return g.attr("x", e.x - 2).attr("y", e.y - 2).attr("width", e.width + 4).attr("height", e.height + 4), h.node();
	} else return O.node();
}
__name(createFormattedText, "createFormattedText");
function decodeHTMLEntities(e) {
	return e.replace(/&(amp|lt|gt);/g, (e, s) => {
		switch (s) {
			case "amp": return "&";
			case "lt": return "<";
			case "gt": return ">";
			default: return e;
		}
	});
}
__name(decodeHTMLEntities, "decodeHTMLEntities");
function updateTextContentAndStyles(e, s) {
	e.text(""), s.forEach((s, c) => {
		let l = e.append("tspan").attr("font-style", s.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", s.type === "strong" ? "bold" : "normal");
		c === 0 ? l.text(decodeHTMLEntities(s.content)) : l.text(" " + decodeHTMLEntities(s.content));
	});
}
__name(updateTextContentAndStyles, "updateTextContentAndStyles");
async function replaceIconSubstring(e, s = {}) {
	let c = [];
	e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (e, l, u) => (c.push((async () => {
		let c = `${l}:${u}`;
		return await isIconAvailable(c) ? await getIconSVG(c, void 0, { class: "label-icon" }) : `<i class='${sanitizeText(e, s).replace(":", " ")}'></i>`;
	})()), e));
	let l = await Promise.all(c);
	return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => l.shift() ?? "");
}
__name(replaceIconSubstring, "replaceIconSubstring");
var createText = /* @__PURE__ */ __name(async (e, s = "", { style: c = "", isTitle: p = !1, classes: h = "", useHtmlLabels: g = !0, markdown: O = !0, isNode: R = !0, width: B = 200, addSvgBackground: H = !1 } = {}, Y) => {
	if (log.debug("XYZ createText", s, c, p, h, g, R, "addSvgBackground: ", H), g) {
		let l = await replaceIconSubstring(decodeEntities(O ? markdownToHTML(s, Y) : nonMarkdownToHTML(s)), Y), u = s.replace(/\\\\/g, "\\");
		return await addHtmlSpan(e, {
			isNode: R,
			label: hasKatex(s) ? u : l,
			labelStyle: c.replace("fill:", "color:")
		}, B, h, H, Y);
	} else {
		let l = decodeEntities(s.replace(/<br\s*\/?>/g, "<br/>")), f = createFormattedText(B, e, O ? markdownToLines(l.replace("<br>", "<br/>"), Y) : nonMarkdownToLines(l), s ? H : !1, !R);
		if (R) {
			/stroke:/.exec(c) && (c = c.replace("stroke:", "lineColor:"));
			let e = c.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			select_default(f).attr("style", e);
		} else {
			let e = c.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
			select_default(f).select("rect").attr("style", e.replace(/background:/g, "fill:"));
			let s = c.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
			select_default(f).select("text").attr("style", s);
		}
		return p ? select_default(f).selectAll("tspan.text-outer-tspan").classed("title-row", !0) : select_default(f).selectAll("tspan.text-outer-tspan").classed("row", !0), f;
	}
}, "createText");
export { dedent as i, createText as n, fastdom_default as r, computeDimensionOfText as t };
