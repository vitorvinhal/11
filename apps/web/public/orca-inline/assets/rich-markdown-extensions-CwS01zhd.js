import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as useTranslation } from "./useTranslation-gONZYZRO.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { K as projectMarkdownHrefForClipboard, q as resolveMarkdownLinkTarget, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as MermaidBlock } from "./MermaidBlock-DUCPG0_k.js";
import { $ as TextSelection, A as findChildren, B as marksEqual, C as attrsEqual, D as decodeHtmlEntities, E as createBlockMarkdownSpec, F as getChangedRanges, G as Decoration, H as nodeInputRule, I as getExtensionField, J as NodeSelection, K as DecorationSet, L as getRenderedAttributes, M as findParentNodeClosestToPos, N as flattenExtensions, O as defaultBlockAt, P as generateJSON, Q as SelectionRange, R as getSchema, S as ResizableNodeView, T as commands_exports, U as sortExtensions, V as mergeAttributes, W as keydownHandler, X as PluginKey, Y as Plugin, Z as Selection, a as ORDERED_LIST_MARKER_PATTERN, at as getCodeBlockLanguages, b as InputRule, c as TaskList, d as Code, et as Transform, h as ReactNodeViewRenderer, i as Paragraph, it as getCodeBlockLanguageLabel, j as findParentNode, k as encodeHtmlEntities, l as src_default$1, m as NodeViewWrapper, n as src_default, nt as Fragment, o as OrderedList, ot as isKnownCodeBlockLanguage, p as NodeViewContent, r as GapCursor, rt as Slice, s as TaskItem, t as src_default$3, u as CodeBlock, w as callOrReturn, x as Node$1, y as Extension, z as isActive } from "./dist-Zp9cYCrO.js";
import { a as onImageCacheInvalidated, i as loadLocalImageSrc, t as acquireLocalImageSrcLease } from "./useLocalImageSrc-Bc5zt6wA.js";
import { l as resolveMarkdownDocLink, n as formatMarkdownDocLink, o as parseMarkdownDocLink, r as formatMarkdownDocLinkBody, t as createMarkdownDocumentIndex } from "./markdown-doc-links-CqJYNZT9.js";
import { n as createMarkdownFenceTracker, r as getMarkdownFenceRanges, t as createMarkdownFenceRangeCursor } from "./markdown-fence-scanner-TZT3BBxV.js";
import { i as katex, n as core_default, r as grammars, t as createLowlight } from "./lib-CvCZTjbN.js";
const TOGGLE_HEADING_VARIANTS = [
	"heading-1",
	"heading-2",
	"heading-3",
	"heading-4",
	"heading-5"
];
function parseToggleHeadingVariant(e) {
	return typeof e == "string" && TOGGLE_HEADING_VARIANTS.includes(e) ? e : null;
}
function escapeDetailsHtml(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;");
}
function parseDetailsAttributes(e) {
	let t = e.match(/\sdata-orca-toggle\s*=\s*(?:"(heading-[1-5])"|'(heading-[1-5])'|(heading-[1-5]))(?:\s|$)/i);
	return {
		open: /\sopen(?:\s|=|$)/i.test(e),
		variant: parseToggleHeadingVariant((t?.[1] ?? t?.[2] ?? t?.[3])?.toLowerCase())
	};
}
function detailsBodyHtmlToMarkdown(e) {
	return e.replace(/<p\b[^>]*>/gi, "").replace(/<\/p>/gi, "\n\n").replace(/<br\s*\/?>/gi, "\n").trim();
}
function renderDetailsAttributes(e) {
	let t = ["class=\"orca-details\""], n = parseToggleHeadingVariant(e?.variant);
	return n && t.push(`data-orca-toggle="${n}"`), e?.open === !0 && t.push("open"), t.join(" ");
}
function markdownFenceRanges(e) {
	let t = [], n = 0, r = null;
	for (let i of e.matchAll(/[^\r\n]*(?:\r\n|\n|\r|$)/g)) {
		let e = i[0];
		if (e === "") break;
		let a = e.replace(/(?:\r\n|\n|\r)$/u, "");
		if (r) r.closingPattern.test(a) && (t.push([r.start, n + e.length]), r = null);
		else {
			let e = a.match(/^ {0,3}(`{3,}|~{3,})/u);
			e?.[1] && (r = {
				closingPattern: /* @__PURE__ */ RegExp(`^ {0,3}${e[1][0]}{${e[1].length},}\\s*$`),
				start: n
			});
		}
		n += e.length;
	}
	return r && t.push([r.start, e.length]), t;
}
function isInsideRange(e, t) {
	return t.some(([t, n]) => e >= t && e < n);
}
function matchDetailsHtmlBlock(e, t, n) {
	let r = e.slice(t).match(/^<details\b[^>]*>/i);
	if (!r) return null;
	let i = /<\/?details\b[^>]*>/gi;
	i.lastIndex = t;
	let a = n ?? markdownFenceRanges(e), o = 0;
	for (;;) {
		let n = i.exec(e);
		if (!n) return null;
		let s = n[0];
		if (!(n.index !== t && isInsideRange(n.index, a))) if (/^<\/details\b/i.test(s)) {
			if (--o, o === 0) {
				let i = n.index + s.length;
				return {
					raw: e.slice(t, i),
					openingAttributes: r[0].replace(/^<details\b/i, "").replace(/>$/u, ""),
					inner: e.slice(t + r[0].length, n.index)
				};
			}
		} else o += 1;
	}
}
function hasOnlySupportedDetailsAttributes(e) {
	return e.replace(/\s+open(?:\s*=\s*(?:""|"open"|''|'open'|open))?(?=\s|$)/giu, "").replace(/\s+class\s*=\s*(?:"orca-details"|'orca-details'|orca-details)(?=\s|$)/giu, "").replace(/\s+data-orca-toggle\s*=\s*(?:"heading-[1-5]"|'heading-[1-5]'|heading-[1-5])(?=\s|$)/giu, "").trim() === "";
}
function hasOnlyPlainParagraphAndBreakTags(e) {
	return !/<p\b(?!\s*>)[^>]*>|<br\b(?!\s*\/?>)[^>]*>/iu.test(e);
}
function extractDetailsSummaryHtml(e) {
	let t = 0;
	for (; t < e.length && isHtmlWhitespace$1(e.charCodeAt(t));) t++;
	if (!startsWithAsciiIgnoreCase(e, "<summary", t) || isHtmlTagNamePart(e.charCodeAt(t + 8))) return null;
	let n = e.indexOf(">", t + 8);
	if (n === -1) return null;
	let r = indexOfAsciiIgnoreCase(e, "</summary>", n + 1);
	return r === -1 ? null : {
		attributes: e.slice(t + 8, n),
		content: e.slice(n + 1, r),
		rawLength: r + 10
	};
}
function isHtmlWhitespace$1(e) {
	return e === 9 || e === 10 || e === 11 || e === 12 || e === 13 || e === 32;
}
function indexOfAsciiIgnoreCase(e, t, n) {
	let r = e.length - t.length;
	for (let i = Math.max(0, n); i <= r; i++) if (startsWithAsciiIgnoreCase(e, t, i)) return i;
	return -1;
}
function startsWithAsciiIgnoreCase(e, t, n) {
	if (n < 0 || n + t.length > e.length) return !1;
	for (let r = 0; r < t.length; r++) if (toLowerAsciiCode(e.charCodeAt(n + r)) !== t.charCodeAt(r)) return !1;
	return !0;
}
function toLowerAsciiCode(e) {
	return e >= 65 && e <= 90 ? e + 32 : e;
}
function isHtmlTagNamePart(e) {
	return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e === 95 || e >= 97 && e <= 122;
}
var MAX_DETAILS_NESTING_LEVELS = 16;
function stripEditableNestedDetails(e, t) {
	let n = "", r = 0, i = null;
	for (;;) {
		let a = indexOfAsciiIgnoreCase(e, "<details", r);
		if (a === -1) return n + e.slice(r);
		if (t >= MAX_DETAILS_NESTING_LEVELS) return null;
		i ??= markdownFenceRanges(e);
		let o = matchDetailsHtmlBlock(e, a, i);
		if (!o || !isEditableDetailsHtmlBlock(o, t + 1)) return null;
		n += e.slice(r, a), r = a + o.raw.length;
	}
}
function isEditableDetailsHtmlBlock(e, t = 1) {
	if (!hasOnlySupportedDetailsAttributes(e.openingAttributes)) return !1;
	let n = extractDetailsSummaryHtml(e.inner);
	if (!n || n.attributes.trim() || /<\/?[A-Za-z][\w.:-]*(?:\s[^<>]*?)?\/?>/.test(n.content)) return !1;
	let r = stripEditableNestedDetails(e.inner.slice(n.rawLength), t);
	if (r === null || !hasOnlyPlainParagraphAndBreakTags(r)) return !1;
	let i = r.replace(/<\/?p\b[^>]*>/gi, "").replace(/<br\s*\/?>/gi, "");
	return !/<\/?[A-Za-z][\w.:-]*(?:\s[^<>]*?)?\/?>/.test(i);
}
var REFERENCE_DEFINITION_PATTERN = /^ {0,3}\[([^\]]+)\]:[ \t]*(<[^>\n]+>|[^\s]+)(?:[ \t]+(?:"([^"]*)"|'([^']*)'|\(([^)]*)\)))?[ \t]*$/;
function normalizeReferenceLabel(e) {
	let t = "", n = !1;
	for (let r = 0; r < e.length; r += 1) {
		if (isMarkdownReferenceLabelWhitespace(e.charCodeAt(r))) {
			n = t.length > 0;
			continue;
		}
		n &&= (t += " ", !1), t += e.charAt(r);
	}
	return t.toLowerCase();
}
function isMarkdownReferenceLabelWhitespace(e) {
	return e === 32 || e >= 9 && e <= 13 || e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function unwrapReferenceUrl(e) {
	return e.startsWith("<") && e.endsWith(">") ? e.slice(1, -1) : e;
}
function parseReferenceDefinition(e) {
	let t = e.match(REFERENCE_DEFINITION_PATTERN);
	return t ? {
		label: normalizeReferenceLabel(t[1]),
		url: unwrapReferenceUrl(t[2]),
		title: t[3] ?? t[4] ?? t[5] ?? null
	} : null;
}
function splitReferenceDefinitions(e) {
	let t = /* @__PURE__ */ new Map(), n = createMarkdownFenceTracker(), r = "";
	return forEachReferenceDefinitionLine(e, (e, i) => {
		let a = n.consume(e) || n.insideFence ? null : parseReferenceDefinition(e);
		if (a) {
			t.set(a.label, a);
			return;
		}
		r += e + i;
	}), {
		definitions: t,
		markdown: r
	};
}
function forEachReferenceDefinitionLine(e, t) {
	let n = 0;
	for (let r = 0; r <= e.length; r += 1) {
		let i = r < e.length ? e.charCodeAt(r) : 10;
		if (r < e.length && i !== 10 && i !== 13) continue;
		let a = r < e.length, o = i === 13 && e.charCodeAt(r + 1) === 10, s = a ? o ? "\r\n" : e[r] : "";
		t(e.slice(n, r), s), o && (r += 1), n = r + 1;
	}
}
function isEscaped$1(e, t) {
	let n = 0;
	for (let r = t - 1; r >= 0 && e[r] === "\\"; --r) n += 1;
	return n % 2 == 1;
}
function findClosingBracket(e, t) {
	for (let n = t; n < e.length; n += 1) if (e[n] === "]" && !isEscaped$1(e, n)) return n;
	return -1;
}
function formatInlineReferenceLink(e, t) {
	let n = t.url.replace(/[()\\]/g, "\\$&");
	return t.title ? `[${e}](${n} "${t.title.replace(/["\\]/g, "\\$&")}")` : `[${e}](${n})`;
}
function replaceReferenceLinks(e, t) {
	let n = "", r = 0, i = createMarkdownFenceRangeCursor(getMarkdownFenceRanges(e));
	for (; r < e.length;) {
		if (i(r) || e[r] !== "[" || isEscaped$1(e, r)) {
			n += e[r], r += 1;
			continue;
		}
		let a = findClosingBracket(e, r + 1);
		if (a === -1) {
			n += e[r], r += 1;
			continue;
		}
		let o = e.slice(r + 1, a), s = e[a + 1];
		if (s === "(") {
			n += e[r], r += 1;
			continue;
		}
		if (s === "[") {
			let i = findClosingBracket(e, a + 2);
			if (i !== -1) {
				let s = normalizeReferenceLabel(e.slice(a + 2, i) || o), c = t.get(s);
				if (c) {
					n += formatInlineReferenceLink(o, c), r = i + 1;
					continue;
				}
			}
		} else {
			let e = t.get(normalizeReferenceLabel(o));
			if (e) {
				n += formatInlineReferenceLink(o, e), r = a + 1;
				continue;
			}
		}
		n += e[r], r += 1;
	}
	return n;
}
function normalizeMarkdownReferenceLinks(e) {
	let { definitions: t, markdown: n } = splitReferenceDefinitions(e);
	return t.size === 0 ? e : replaceReferenceLinks(n, t);
}
function M() {
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
var O = M();
function G(e) {
	O = e;
}
var _ = { exec: () => null };
function k(e, t = "") {
	let n = typeof e == "string" ? e : e.source, r = {
		replace: (e, t) => {
			let i = typeof t == "string" ? t : t.source;
			return i = i.replace(m.caret, "$1"), n = n.replace(e, i), r;
		},
		getRegex: () => new RegExp(n, t)
	};
	return r;
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
	listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
	listIsTask: /^\[[ xX]\] +\S/,
	listReplaceTask: /^\[[ xX]\] +/,
	listTaskCheckbox: /\[[ xX]\]/,
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
	htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i"),
	blockquoteBeginRegex: (e) => /* @__PURE__ */ RegExp(`^ {0,${Math.min(3, e - 1)}}>`)
}, Re = /^(?:[ \t]*(?:\n|$))+/, Oe = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Te = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, C = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, we = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Q = / {0,3}(?:[*+-]|\d{1,9}[.)])/, se = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ie = k(se).replace(/bull/g, Q).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), ye = k(se).replace(/bull/g, Q).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), j = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Pe = /^[^\n]+/, F = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Se = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", F).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), $e = k(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Q).getRegex(), v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, _e = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), oe = k(j).replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex(), K = {
	blockquote: k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", oe).getRegex(),
	code: Oe,
	def: Se,
	fences: Te,
	heading: we,
	hr: C,
	html: _e,
	lheading: ie,
	list: $e,
	newline: Re,
	paragraph: oe,
	table: _,
	text: Pe
}, ne = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex(), Me = {
	...K,
	lheading: ye,
	table: ne,
	paragraph: k(j).replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ne).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex()
}, ze = {
	...K,
	html: k("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
	def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
	heading: /^(#{1,6})(.*)(?:\n+|$)/,
	fences: _,
	lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
	paragraph: k(j).replace("hr", C).replace("heading", " *#{1,6} *[^\n]").replace("lheading", ie).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Ee = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ie = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ae = /^( {2,}|\\)\n(?!\s*$)/, Ae = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, z = /[\p{P}\p{S}]/u, H = /[\s\p{P}\p{S}]/u, W = /[^\s\p{P}\p{S}]/u, Ce = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, H).getRegex(), le = /(?!~)[\p{P}\p{S}]/u, Be = /(?!~)[\s\p{P}\p{S}]/u, De = /(?:[^\s\p{P}\p{S}]|~)/u, qe = k(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", be ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), ue = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, ve = k(ue, "u").replace(/punct/g, z).getRegex(), He = k(ue, "u").replace(/punct/g, le).getRegex(), pe = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Ze = k(pe, "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, z).getRegex(), Ge = k(pe, "gu").replace(/notPunctSpace/g, De).replace(/punctSpace/g, Be).replace(/punct/g, le).getRegex(), Ne = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, z).getRegex(), Qe = k(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, z).getRegex(), Fe = k("^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", "gu").replace(/notPunctSpace/g, W).replace(/punctSpace/g, H).replace(/punct/g, z).getRegex(), Ue = k(/\\(punct)/, "gu").replace(/punct/g, z).getRegex(), Ke = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), We = k(U).replace("(?:-->|$)", "-->").getRegex(), Xe = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", We).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, Je = k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ce = k(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", F).getRegex(), he = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", F).getRegex(), Ve = k("reflink|nolink(?!\\()", "g").replace("reflink", ce).replace("nolink", he).getRegex(), re = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, X = {
	_backpedal: _,
	anyPunctuation: Ue,
	autolink: Ke,
	blockSkip: qe,
	br: ae,
	code: Ie,
	del: _,
	delLDelim: _,
	delRDelim: _,
	emStrongLDelim: ve,
	emStrongRDelimAst: Ze,
	emStrongRDelimUnd: Ne,
	escape: Ee,
	link: Je,
	nolink: he,
	punctuation: Ce,
	reflink: ce,
	reflinkSearch: Ve,
	tag: Xe,
	text: Ae,
	url: _
}, Ye = {
	...X,
	link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(),
	reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex()
}, N = {
	...X,
	emStrongRDelimAst: Ge,
	emStrongLDelim: He,
	delLDelim: Qe,
	delRDelim: Fe,
	url: k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", re).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
	_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
	del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
	text: k(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", re).getRegex()
}, et = {
	...N,
	br: k(ae).replace("{2,}", "*").getRegex(),
	text: k(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, B = {
	normal: K,
	gfm: Me,
	pedantic: ze
}, E = {
	normal: X,
	gfm: N,
	breaks: et,
	pedantic: Ye
}, tt = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
}, ke = (e) => tt[e];
function T(e, t) {
	if (t) {
		if (m.escapeTest.test(e)) return e.replace(m.escapeReplace, ke);
	} else if (m.escapeTestNoEncode.test(e)) return e.replace(m.escapeReplaceNoEncode, ke);
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
function V(e, t) {
	let n = e.replace(m.findPipe, (e, t, n) => {
		let r = !1, i = t;
		for (; --i >= 0 && n[i] === "\\";) r = !r;
		return r ? "|" : " |";
	}).split(m.splitPipe), r = 0;
	if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) if (n.length > t) n.splice(t);
	else for (; n.length < t;) n.push("");
	for (; r < n.length; r++) n[r] = n[r].trim().replace(m.slashPipe, "|");
	return n;
}
function I(e, t, n) {
	let r = e.length;
	if (r === 0) return "";
	let i = 0;
	for (; i < r;) {
		let a = e.charAt(r - i - 1);
		if (a === t && !n) i++;
		else if (a !== t && n) i++;
		else break;
	}
	return e.slice(0, r - i);
}
function de(e, t) {
	if (e.indexOf(t[1]) === -1) return -1;
	let n = 0;
	for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
	else if (e[r] === t[0]) n++;
	else if (e[r] === t[1] && (n--, n < 0)) return r;
	return n > 0 ? -2 : -1;
}
function ge(e, t = 0) {
	let n = t, r = "";
	for (let t of e) if (t === "	") {
		let e = 4 - n % 4;
		r += " ".repeat(e), n += e;
	} else r += t, n++;
	return r;
}
function fe(e, t, n, r, i) {
	let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1");
	r.state.inLink = !0;
	let c = {
		type: e[0].charAt(0) === "!" ? "image" : "link",
		raw: n,
		href: a,
		title: o,
		text: s,
		tokens: r.inlineTokens(s)
	};
	return r.state.inLink = !1, c;
}
function nt(e, t, n) {
	let r = e.match(n.other.indentCodeCompensation);
	if (r === null) return t;
	let i = r[1];
	return t.split("\n").map((e) => {
		let t = e.match(n.other.beginningSpace);
		if (t === null) return e;
		let [r] = t;
		return r.length >= i.length ? e.slice(i.length) : e;
	}).join("\n");
}
var w = class {
	options;
	rules;
	lexer;
	constructor(e) {
		this.options = e || O;
	}
	space(e) {
		let t = this.rules.block.newline.exec(e);
		if (t && t[0].length > 0) return {
			type: "space",
			raw: t[0]
		};
	}
	code(e) {
		let t = this.rules.block.code.exec(e);
		if (t) {
			let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
			return {
				type: "code",
				raw: t[0],
				codeBlockStyle: "indented",
				text: this.options.pedantic ? e : I(e, "\n")
			};
		}
	}
	fences(e) {
		let t = this.rules.block.fences.exec(e);
		if (t) {
			let e = t[0], n = nt(e, t[3] || "", this.rules);
			return {
				type: "code",
				raw: e,
				lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
				text: n
			};
		}
	}
	heading(e) {
		let t = this.rules.block.heading.exec(e);
		if (t) {
			let e = t[2].trim();
			if (this.rules.other.endingHash.test(e)) {
				let t = I(e, "#");
				(this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim());
			}
			return {
				type: "heading",
				raw: t[0],
				depth: t[1].length,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	hr(e) {
		let t = this.rules.block.hr.exec(e);
		if (t) return {
			type: "hr",
			raw: I(t[0], "\n")
		};
	}
	blockquote(e) {
		let t = this.rules.block.blockquote.exec(e);
		if (t) {
			let e = I(t[0], "\n").split("\n"), n = "", r = "", i = [];
			for (; e.length > 0;) {
				let t = !1, a = [], o;
				for (o = 0; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
				else if (!t) a.push(e[o]);
				else break;
				e = e.slice(o);
				let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
				n = n ? `${n}
${s}` : s, r = r ? `${r}
${c}` : c;
				let l = this.lexer.state.top;
				if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
				let u = i.at(-1);
				if (u?.type === "code") break;
				if (u?.type === "blockquote") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.blockquote(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - t.raw.length) + o.raw, r = r.substring(0, r.length - t.text.length) + o.text;
					break;
				} else if (u?.type === "list") {
					let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
					i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
					continue;
				}
			}
			return {
				type: "blockquote",
				raw: n,
				tokens: i,
				text: r
			};
		}
	}
	list(e) {
		let t = this.rules.block.list.exec(e);
		if (t) {
			let n = t[1].trim(), r = n.length > 1, i = {
				type: "list",
				raw: "",
				ordered: r,
				start: r ? +n.slice(0, -1) : "",
				loose: !1,
				items: []
			};
			n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
			let a = this.rules.other.listItemRegex(n), o = !1;
			for (; e;) {
				let n = !1, r = "", s = "";
				if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
				r = t[0], e = e.substring(r.length);
				let c = ge(t[2].split("\n", 1)[0], t[1].length), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
				if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = c.search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
					let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d), f = this.rules.other.blockquoteBeginRegex(d);
					for (; e;) {
						let p = e.split("\n", 1)[0], h;
						if (l = p, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), h = l) : h = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || f.test(l) || t.test(l) || n.test(l)) break;
						if (h.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + h.slice(d);
						else {
							if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
							s += "\n" + l;
						}
						u = !l.trim(), r += p + "\n", e = e.substring(p.length + 1), c = h.slice(d);
					}
				}
				i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0)), i.items.push({
					type: "list_item",
					raw: r,
					task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
					loose: !1,
					text: s,
					tokens: []
				}), i.raw += r;
			}
			let s = i.items.at(-1);
			if (s) s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd();
			else return;
			i.raw = i.raw.trimEnd();
			for (let e of i.items) {
				if (this.lexer.state.top = !1, e.tokens = this.lexer.blockTokens(e.text, []), e.task) {
					if (e.text = e.text.replace(this.rules.other.listReplaceTask, ""), e.tokens[0]?.type === "text" || e.tokens[0]?.type === "paragraph") {
						e.tokens[0].raw = e.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), e.tokens[0].text = e.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
						for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)) {
							this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask, "");
							break;
						}
					}
					let t = this.rules.other.listTaskCheckbox.exec(e.raw);
					if (t) {
						let n = {
							type: "checkbox",
							raw: t[0] + " ",
							checked: t[0] !== "[ ]"
						};
						e.checked = n.checked, i.loose ? e.tokens[0] && ["paragraph", "text"].includes(e.tokens[0].type) && "tokens" in e.tokens[0] && e.tokens[0].tokens ? (e.tokens[0].raw = n.raw + e.tokens[0].raw, e.tokens[0].text = n.raw + e.tokens[0].text, e.tokens[0].tokens.unshift(n)) : e.tokens.unshift({
							type: "paragraph",
							raw: n.raw,
							text: n.raw,
							tokens: [n]
						}) : e.tokens.unshift(n);
					}
				}
				if (!i.loose) {
					let t = e.tokens.filter((e) => e.type === "space");
					i.loose = t.length > 0 && t.some((e) => this.rules.other.anyLine.test(e.raw));
				}
			}
			if (i.loose) for (let e of i.items) {
				e.loose = !0;
				for (let t of e.tokens) t.type === "text" && (t.type = "paragraph");
			}
			return i;
		}
	}
	html(e) {
		let t = this.rules.block.html.exec(e);
		if (t) return {
			type: "html",
			block: !0,
			raw: t[0],
			pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
			text: t[0]
		};
	}
	def(e) {
		let t = this.rules.block.def.exec(e);
		if (t) {
			let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
			return {
				type: "def",
				tag: e,
				raw: t[0],
				href: n,
				title: r
			};
		}
	}
	table(e) {
		let t = this.rules.block.table.exec(e);
		if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
		let n = V(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
			type: "table",
			raw: t[0],
			header: [],
			align: [],
			rows: []
		};
		if (n.length === r.length) {
			for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
			for (let e = 0; e < n.length; e++) a.header.push({
				text: n[e],
				tokens: this.lexer.inline(n[e]),
				header: !0,
				align: a.align[e]
			});
			for (let e of i) a.rows.push(V(e, a.header.length).map((e, t) => ({
				text: e,
				tokens: this.lexer.inline(e),
				header: !1,
				align: a.align[t]
			})));
			return a;
		}
	}
	lheading(e) {
		let t = this.rules.block.lheading.exec(e);
		if (t) {
			let e = t[1].trim();
			return {
				type: "heading",
				raw: t[0],
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	paragraph(e) {
		let t = this.rules.block.paragraph.exec(e);
		if (t) {
			let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
			return {
				type: "paragraph",
				raw: t[0],
				text: e,
				tokens: this.lexer.inline(e)
			};
		}
	}
	text(e) {
		let t = this.rules.block.text.exec(e);
		if (t) return {
			type: "text",
			raw: t[0],
			text: t[0],
			tokens: this.lexer.inline(t[0])
		};
	}
	escape(e) {
		let t = this.rules.inline.escape.exec(e);
		if (t) return {
			type: "escape",
			raw: t[0],
			text: t[1]
		};
	}
	tag(e) {
		let t = this.rules.inline.tag.exec(e);
		if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
			type: "html",
			raw: t[0],
			inLink: this.lexer.state.inLink,
			inRawBlock: this.lexer.state.inRawBlock,
			block: !1,
			text: t[0]
		};
	}
	link(e) {
		let t = this.rules.inline.link.exec(e);
		if (t) {
			let e = t[2].trim();
			if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
				if (!this.rules.other.endAngleBracket.test(e)) return;
				let t = I(e.slice(0, -1), "\\");
				if ((e.length - t.length) % 2 == 0) return;
			} else {
				let e = de(t[2], "()");
				if (e === -2) return;
				if (e > -1) {
					let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
					t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
				}
			}
			let n = t[2], r = "";
			if (this.options.pedantic) {
				let e = this.rules.other.pedanticHrefTitle.exec(n);
				e && (n = e[1], r = e[3]);
			} else r = t[3] ? t[3].slice(1, -1) : "";
			return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), fe(t, {
				href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
				title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
			}, t[0], this.lexer, this.rules);
		}
	}
	reflink(e, t) {
		let n;
		if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
			let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
			if (!e) {
				let e = n[0].charAt(0);
				return {
					type: "text",
					raw: e,
					text: e
				};
			}
			return fe(n, e, n[0], this.lexer, this.rules);
		}
	}
	emStrong(e, t, n = "") {
		let r = this.rules.inline.emStrongLDelim.exec(e);
		if (!(!r || !r[1] && !r[2] && !r[3] && !r[4] || r[4] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
			for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = c.exec(t)) !== null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
				if (a = [...i].length, r[3] || r[4]) {
					o += a;
					continue;
				} else if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
					s += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o + s);
				let t = [...r[0]][0].length, c = e.slice(0, n + r.index + t + a);
				if (Math.min(n, a) % 2) {
					let e = c.slice(1, -1);
					return {
						type: "em",
						raw: c,
						text: e,
						tokens: this.lexer.inlineTokens(e)
					};
				}
				let l = c.slice(2, -2);
				return {
					type: "strong",
					raw: c,
					text: l,
					tokens: this.lexer.inlineTokens(l)
				};
			}
		}
	}
	codespan(e) {
		let t = this.rules.inline.code.exec(e);
		if (t) {
			let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
			return n && r && (e = e.substring(1, e.length - 1)), {
				type: "codespan",
				raw: t[0],
				text: e
			};
		}
	}
	br(e) {
		let t = this.rules.inline.br.exec(e);
		if (t) return {
			type: "br",
			raw: t[0]
		};
	}
	del(e, t, n = "") {
		let r = this.rules.inline.delLDelim.exec(e);
		if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
			let n = [...r[0]].length - 1, i, a, o = n, s = this.rules.inline.delRDelim;
			for (s.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = s.exec(t)) !== null;) {
				if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i || (a = [...i].length, a !== n)) continue;
				if (r[3] || r[4]) {
					o += a;
					continue;
				}
				if (o -= a, o > 0) continue;
				a = Math.min(a, a + o);
				let t = [...r[0]][0].length, s = e.slice(0, n + r.index + t + a), c = s.slice(n, -n);
				return {
					type: "del",
					raw: s,
					text: c,
					tokens: this.lexer.inlineTokens(c)
				};
			}
		}
	}
	autolink(e) {
		let t = this.rules.inline.autolink.exec(e);
		if (t) {
			let e, n;
			return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	url(e) {
		let t;
		if (t = this.rules.inline.url.exec(e)) {
			let e, n;
			if (t[2] === "@") e = t[0], n = "mailto:" + e;
			else {
				let r;
				do
					r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
				while (r !== t[0]);
				e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
			}
			return {
				type: "link",
				raw: t[0],
				text: e,
				href: n,
				tokens: [{
					type: "text",
					raw: e,
					text: e
				}]
			};
		}
	}
	inlineText(e) {
		let t = this.rules.inline.text.exec(e);
		if (t) {
			let e = this.lexer.state.inRawBlock;
			return {
				type: "text",
				raw: t[0],
				text: t[0],
				escaped: e
			};
		}
	}
}, x = class e {
	tokens;
	options;
	state;
	inlineQueue;
	tokenizer;
	constructor(e) {
		this.tokens = [], this.tokens.links = Object.create(null), this.options = e || O, this.options.tokenizer = this.options.tokenizer || new w(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
			inLink: !1,
			inRawBlock: !1,
			top: !0
		};
		let t = {
			other: m,
			block: B.normal,
			inline: E.normal
		};
		this.options.pedantic ? (t.block = B.pedantic, t.inline = E.pedantic) : this.options.gfm && (t.block = B.gfm, this.options.breaks ? t.inline = E.breaks : t.inline = E.gfm), this.tokenizer.rules = t;
	}
	static get rules() {
		return {
			block: B,
			inline: E
		};
	}
	static lex(t, n) {
		return new e(n).lex(t);
	}
	static lexInline(t, n) {
		return new e(n).inlineTokens(t);
	}
	lex(e) {
		e = e.replace(m.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
		for (let e = 0; e < this.inlineQueue.length; e++) {
			let t = this.inlineQueue[e];
			this.inlineTokens(t.src, t.tokens);
		}
		return this.inlineQueue = [], this.tokens;
	}
	blockTokens(e, t = [], n = !1) {
		for (this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e;) {
			let r;
			if (this.options.extensions?.block?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.space(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(r);
				continue;
			}
			if (r = this.tokenizer.code(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.at(-1).src = n.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.fences(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.heading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.hr(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.blockquote(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.list(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.html(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.def(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
					href: r.href,
					title: r.title
				}, t.push(r));
				continue;
			}
			if (r = this.tokenizer.table(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.lheading(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startBlock) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startBlock.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (this.state.top && (r = this.tokenizer.paragraph(i))) {
				let a = t.at(-1);
				n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith("\n") ? "" : "\n") + r.raw, a.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
				continue;
			}
			if (r = this.tokenizer.text(e)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += (n.raw.endsWith("\n") ? "" : "\n") + r.raw, n.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				} else throw Error(t);
			}
		}
		return this.state.top = !0, t;
	}
	inline(e, t = []) {
		return this.inlineQueue.push({
			src: e,
			tokens: t
		}), t;
	}
	inlineTokens(e, t = []) {
		this.tokenizer.lexer = this;
		let n = e, r = null;
		if (this.tokens.links) {
			let e = Object.keys(this.tokens.links);
			if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) !== null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
		}
		for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) !== null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
		let i;
		for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) !== null;) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
		n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
		let a = !1, o = "";
		for (; e;) {
			a || (o = ""), a = !1;
			let r;
			if (this.options.extensions?.inline?.some((n) => (r = n.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), !0) : !1)) continue;
			if (r = this.tokenizer.escape(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.tag(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.link(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.reflink(e, this.tokens.links)) {
				e = e.substring(r.raw.length);
				let n = t.at(-1);
				r.type === "text" && n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (r = this.tokenizer.emStrong(e, n, o)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.codespan(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.br(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.del(e, n, o)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (r = this.tokenizer.autolink(e)) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			if (!this.state.inLink && (r = this.tokenizer.url(e))) {
				e = e.substring(r.raw.length), t.push(r);
				continue;
			}
			let i = e;
			if (this.options.extensions?.startInline) {
				let t = Infinity, n = e.slice(1), r;
				this.options.extensions.startInline.forEach((e) => {
					r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
				}), t < Infinity && t >= 0 && (i = e.substring(0, t + 1));
			}
			if (r = this.tokenizer.inlineText(i)) {
				e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (o = r.raw.slice(-1)), a = !0;
				let n = t.at(-1);
				n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				continue;
			}
			if (e) {
				let t = "Infinite loop on byte: " + e.charCodeAt(0);
				if (this.options.silent) {
					console.error(t);
					break;
				} else throw Error(t);
			}
		}
		return t;
	}
}, y = class {
	options;
	parser;
	constructor(e) {
		this.options = e || O;
	}
	space(e) {
		return "";
	}
	code({ text: e, lang: t, escaped: n }) {
		let r = (t || "").match(m.notSpaceStart)?.[0], i = e.replace(m.endingNewline, "") + "\n";
		return r ? "<pre><code class=\"language-" + T(r) + "\">" + (n ? i : T(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : T(i, !0)) + "</code></pre>\n";
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
	heading({ tokens: e, depth: t }) {
		return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
	}
	hr(e) {
		return "<hr>\n";
	}
	list(e) {
		let t = e.ordered, n = e.start, r = "";
		for (let t = 0; t < e.items.length; t++) {
			let n = e.items[t];
			r += this.listitem(n);
		}
		let i = t ? "ol" : "ul", a = t && n !== 1 ? " start=\"" + n + "\"" : "";
		return "<" + i + a + ">\n" + r + "</" + i + ">\n";
	}
	listitem(e) {
		return `<li>${this.parser.parse(e.tokens)}</li>
`;
	}
	checkbox({ checked: e }) {
		return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\"> ";
	}
	paragraph({ tokens: e }) {
		return `<p>${this.parser.parseInline(e)}</p>
`;
	}
	table(e) {
		let t = "", n = "";
		for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
		t += this.tablerow({ text: n });
		let r = "";
		for (let t = 0; t < e.rows.length; t++) {
			let i = e.rows[t];
			n = "";
			for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
			r += this.tablerow({ text: n });
		}
		return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
	}
	tablerow({ text: e }) {
		return `<tr>
${e}</tr>
`;
	}
	tablecell(e) {
		let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
		return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
	}
	strong({ tokens: e }) {
		return `<strong>${this.parser.parseInline(e)}</strong>`;
	}
	em({ tokens: e }) {
		return `<em>${this.parser.parseInline(e)}</em>`;
	}
	codespan({ text: e }) {
		return `<code>${T(e, !0)}</code>`;
	}
	br(e) {
		return "<br>";
	}
	del({ tokens: e }) {
		return `<del>${this.parser.parseInline(e)}</del>`;
	}
	link({ href: e, title: t, tokens: n }) {
		let r = this.parser.parseInline(n), i = J(e);
		if (i === null) return r;
		e = i;
		let a = "<a href=\"" + e + "\"";
		return t && (a += " title=\"" + T(t) + "\""), a += ">" + r + "</a>", a;
	}
	image({ href: e, title: t, text: n, tokens: r }) {
		r && (n = this.parser.parseInline(r, this.parser.textRenderer));
		let i = J(e);
		if (i === null) return T(n);
		e = i;
		let a = `<img src="${e}" alt="${T(n)}"`;
		return t && (a += ` title="${T(t)}"`), a += ">", a;
	}
	text(e) {
		return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : T(e.text);
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
	checkbox({ raw: e }) {
		return e;
	}
}, b = class e {
	options;
	renderer;
	textRenderer;
	constructor(e) {
		this.options = e || O, this.options.renderer = this.options.renderer || new y(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
	}
	static parse(t, n) {
		return new e(n).parse(t);
	}
	static parseInline(t, n) {
		return new e(n).parseInline(t);
	}
	parse(e) {
		this.renderer.parser = this;
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (this.options.extensions?.renderers?.[r.type]) {
				let e = r, n = this.options.extensions.renderers[e.type].call({ parser: this }, e);
				if (n !== !1 || ![
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
					t += n || "";
					continue;
				}
			}
			let i = r;
			switch (i.type) {
				case "space":
					t += this.renderer.space(i);
					break;
				case "hr":
					t += this.renderer.hr(i);
					break;
				case "heading":
					t += this.renderer.heading(i);
					break;
				case "code":
					t += this.renderer.code(i);
					break;
				case "table":
					t += this.renderer.table(i);
					break;
				case "blockquote":
					t += this.renderer.blockquote(i);
					break;
				case "list":
					t += this.renderer.list(i);
					break;
				case "checkbox":
					t += this.renderer.checkbox(i);
					break;
				case "html":
					t += this.renderer.html(i);
					break;
				case "def":
					t += this.renderer.def(i);
					break;
				case "paragraph":
					t += this.renderer.paragraph(i);
					break;
				case "text":
					t += this.renderer.text(i);
					break;
				default: {
					let e = "Token with \"" + i.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return t;
	}
	parseInline(e, t = this.renderer) {
		this.renderer.parser = this;
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (this.options.extensions?.renderers?.[i.type]) {
				let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
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
				].includes(i.type)) {
					n += e || "";
					continue;
				}
			}
			let a = i;
			switch (a.type) {
				case "escape":
					n += t.text(a);
					break;
				case "html":
					n += t.html(a);
					break;
				case "link":
					n += t.link(a);
					break;
				case "image":
					n += t.image(a);
					break;
				case "checkbox":
					n += t.checkbox(a);
					break;
				case "strong":
					n += t.strong(a);
					break;
				case "em":
					n += t.em(a);
					break;
				case "codespan":
					n += t.codespan(a);
					break;
				case "br":
					n += t.br(a);
					break;
				case "del":
					n += t.del(a);
					break;
				case "text":
					n += t.text(a);
					break;
				default: {
					let e = "Token with \"" + a.type + "\" type was not found.";
					if (this.options.silent) return console.error(e), "";
					throw Error(e);
				}
			}
		}
		return n;
	}
}, P = class {
	options;
	block;
	constructor(e) {
		this.options = e || O;
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
	provideLexer(e = this.block) {
		return e ? x.lex : x.lexInline;
	}
	provideParser(e = this.block) {
		return e ? b.parse : b.parseInline;
	}
}, D = class {
	defaults = M();
	options = this.setOptions;
	parse = this.parseMarkdown(!0);
	parseInline = this.parseMarkdown(!1);
	Parser = b;
	Renderer = y;
	TextRenderer = $;
	Lexer = x;
	Tokenizer = w;
	Hooks = P;
	constructor(...e) {
		this.use(...e);
	}
	walkTokens(e, t) {
		let n = [];
		for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
			case "table": {
				let e = r;
				for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
				for (let r of e.rows) for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
				break;
			}
			case "list": {
				let e = r;
				n = n.concat(this.walkTokens(e.items, t));
				break;
			}
			default: {
				let e = r;
				this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
					let i = e[r].flat(Infinity);
					n = n.concat(this.walkTokens(i, t));
				}) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
			}
		}
		return n;
	}
	use(...e) {
		let t = this.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		return e.forEach((e) => {
			let n = { ...e };
			if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach((e) => {
				if (!e.name) throw Error("extension name required");
				if ("renderer" in e) {
					let n = t.renderers[e.name];
					n ? t.renderers[e.name] = function(...t) {
						let r = e.renderer.apply(this, t);
						return r === !1 && (r = n.apply(this, t)), r;
					} : t.renderers[e.name] = e.renderer;
				}
				if ("tokenizer" in e) {
					if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
					let n = t[e.level];
					n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
				}
				"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
			}), n.extensions = t), e.renderer) {
				let t = this.defaults.renderer || new y(this.defaults);
				for (let n in e.renderer) {
					if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
					if (["options", "parser"].includes(n)) continue;
					let r = n, i = e.renderer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n || "";
					};
				}
				n.renderer = t;
			}
			if (e.tokenizer) {
				let t = this.defaults.tokenizer || new w(this.defaults);
				for (let n in e.tokenizer) {
					if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
					if ([
						"options",
						"rules",
						"lexer"
					].includes(n)) continue;
					let r = n, i = e.tokenizer[r], a = t[r];
					t[r] = (...e) => {
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.tokenizer = t;
			}
			if (e.hooks) {
				let t = this.defaults.hooks || new P();
				for (let n in e.hooks) {
					if (!(n in t)) throw Error(`hook '${n}' does not exist`);
					if (["options", "block"].includes(n)) continue;
					let r = n, i = e.hooks[r], a = t[r];
					P.passThroughHooks.has(n) ? t[r] = (e) => {
						if (this.defaults.async && P.passThroughHooksRespectAsync.has(n)) return (async () => {
							let n = await i.call(t, e);
							return a.call(t, n);
						})();
						let r = i.call(t, e);
						return a.call(t, r);
					} : t[r] = (...e) => {
						if (this.defaults.async) return (async () => {
							let n = await i.apply(t, e);
							return n === !1 && (n = await a.apply(t, e)), n;
						})();
						let n = i.apply(t, e);
						return n === !1 && (n = a.apply(t, e)), n;
					};
				}
				n.hooks = t;
			}
			if (e.walkTokens) {
				let t = this.defaults.walkTokens, r = e.walkTokens;
				n.walkTokens = function(e) {
					let n = [];
					return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
				};
			}
			this.defaults = {
				...this.defaults,
				...n
			};
		}), this;
	}
	setOptions(e) {
		return this.defaults = {
			...this.defaults,
			...e
		}, this;
	}
	lexer(e, t) {
		return x.lex(e, t ?? this.defaults);
	}
	parser(e, t) {
		return b.parse(e, t ?? this.defaults);
	}
	parseMarkdown(e) {
		return (t, n) => {
			let r = { ...n }, i = {
				...this.defaults,
				...r
			}, a = this.onError(!!i.silent, !!i.async);
			if (this.defaults.async === !0 && r.async === !1) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
			if (typeof t > "u" || t === null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
			if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
			if (i.hooks && (i.hooks.options = i, i.hooks.block = e), i.async) return (async () => {
				let n = i.hooks ? await i.hooks.preprocess(t) : t, r = await (i.hooks ? await i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(n, i), a = i.hooks ? await i.hooks.processAllTokens(r) : r;
				i.walkTokens && await Promise.all(this.walkTokens(a, i.walkTokens));
				let o = await (i.hooks ? await i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(a, i);
				return i.hooks ? await i.hooks.postprocess(o) : o;
			})().catch(a);
			try {
				i.hooks && (t = i.hooks.preprocess(t));
				let n = (i.hooks ? i.hooks.provideLexer(e) : e ? x.lex : x.lexInline)(t, i);
				i.hooks && (n = i.hooks.processAllTokens(n)), i.walkTokens && this.walkTokens(n, i.walkTokens);
				let r = (i.hooks ? i.hooks.provideParser(e) : e ? b.parse : b.parseInline)(n, i);
				return i.hooks && (r = i.hooks.postprocess(r)), r;
			} catch (e) {
				return a(e);
			}
		};
	}
	onError(e, t) {
		return (n) => {
			if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
				let e = "<p>An error occurred:</p><pre>" + T(n.message + "", !0) + "</pre>";
				return t ? Promise.resolve(e) : e;
			}
			if (t) return Promise.reject(n);
			throw n;
		};
	}
}, L = new D();
function g(e, t) {
	return L.parse(e, t);
}
g.options = g.setOptions = function(e) {
	return L.setOptions(e), g.defaults = L.defaults, G(g.defaults), g;
}, g.getDefaults = M, g.defaults = O, g.use = function(...e) {
	return L.use(...e), g.defaults = L.defaults, G(g.defaults), g;
}, g.walkTokens = function(e, t) {
	return L.walkTokens(e, t);
}, g.parseInline = L.parseInline, g.Parser = b, g.parser = b.parse, g.Renderer = y, g.TextRenderer = $, g.Lexer = x, g.lexer = x.lex, g.Tokenizer = w, g.Hooks = P, g.parse = g, g.options, g.setOptions, g.use, g.walkTokens, g.parseInline, b.parse, x.lex;
function createTiptapMarkedFacade() {
	let e = new D();
	class t extends x {
		constructor(t) {
			super({
				...e.defaults,
				...t,
				extensions: e.defaults.extensions
			});
		}
	}
	let n = (t, n) => e.parser(t, n), r = (e, n) => new t(n).lex(e), i = new Proxy(g, {
		apply: (t, n, r) => e.parse(...r),
		get: (a, o, s) => {
			switch (o) {
				case "defaults": return e.defaults;
				case "getDefaults": return M;
				case "Lexer": return t;
				case "Parser": return b;
				case "Renderer": return y;
				case "TextRenderer": return $;
				case "Tokenizer": return w;
				case "Hooks": return P;
				case "parse": return i;
				case "parseInline": return e.parseInline;
				case "parser": return n;
				case "lexer": return r;
				case "walkTokens": return e.walkTokens.bind(e);
				case "use": return (...t) => (e.use(...t), i);
				case "setOptions":
				case "options": return (t) => (e.setOptions(t), i);
				default: return Reflect.get(a, o, s);
			}
		}
	});
	return i;
}
var TRANSPORT_PREFIX = "[[ORCA_RICH_MD:", TRANSPORT_SUFFIX = "]]", KEY_PATTERN = /^[a-f0-9]{32}$/, TRANSPORT_BODY_PATTERN = /^ORCA_RICH_MD:[a-f0-9]{32}:(?:literal|inline-html|block-html|document-link|html-superscript-link):/, LEGACY_PREFIXES = [
	"ORCA_RAW_HTML_INLINE:",
	"ORCA_RAW_HTML_BLOCK:",
	"ORCA_DOC_LINK:"
];
function skipInlineTransportStartScan() {
	return -1;
}
function isLegacyRichMarkdownTransportBody(e) {
	return LEGACY_PREFIXES.some((t) => e.startsWith(t));
}
function isReservedRichMarkdownTransportBody(e) {
	return isLegacyRichMarkdownTransportBody(e) || TRANSPORT_BODY_PATTERN.test(e);
}
function createRichMarkdownEditorCodec(e = createCodecKey()) {
	return {
		transport: createRichMarkdownSourceTransport(e),
		marked: createTiptapMarkedFacade()
	};
}
function createRichMarkdownSourceTransport(e) {
	if (!KEY_PATTERN.test(e)) throw Error("Rich Markdown transport keys must be 128-bit lowercase hex values");
	let t = `${TRANSPORT_PREFIX}${e}:`, n = (e) => `${t}${e}:`;
	return {
		key: e,
		authoredPrefix: t,
		startFor: n,
		create: (e, t) => `${n(e)}${encodeURIComponent(t)}${TRANSPORT_SUFFIX}`,
		match: (e, t) => {
			let r = n(t);
			if (!e.startsWith(r)) return null;
			let i = e.indexOf(TRANSPORT_SUFFIX, r.length);
			if (i === -1) return null;
			let a = e.slice(0, i + 2);
			try {
				return {
					raw: a,
					value: decodeURIComponent(e.slice(r.length, i))
				};
			} catch {
				return null;
			}
		}
	};
}
function createCodecKey() {
	let e = new Uint8Array(16);
	return globalThis.crypto.getRandomValues(e), Array.from(e, (e) => e.toString(16).padStart(2, "0")).join("");
}
function decodeHtmlTextCharacterReferences(e) {
	let t = document.createElement("template");
	return t.innerHTML = e, t.content.textContent ?? "";
}
function decodeHtmlAttributeCharacterReferences(e, t) {
	let n = document.createElement("template"), r = t ?? "";
	return n.innerHTML = `<span data-orca-value=${r}${e}${r}></span>`, n.content.firstElementChild?.getAttribute("data-orca-value") ?? "";
}
var encoder = new TextEncoder();
function matchHtmlSuperscriptLinkSource(e, t = 0, n) {
	let r = Math.min(e.length, t + 16384 + 1), i = matchSimpleTag(e, t, "sup", !1, r, n);
	if (i === null) return null;
	let a = matchAnchorStart(e, i, r, n);
	if (!a) return null;
	i = a.end;
	let o = i;
	for (; i < r;) {
		step(n);
		let t = e.charCodeAt(i);
		if (t === 60 || t === 10 || t === 13) break;
		i += 1;
	}
	if (i === o || i >= r || e.charCodeAt(i) !== 60) return null;
	let s = e.slice(o, i);
	if (i = matchSimpleTag(e, i, "a", !0, r, n) ?? -1, i < 0 || (i = matchSimpleTag(e, i, "sup", !0, r, n) ?? -1, i < 0 || i - t > 16384)) return null;
	let c = a.attributes.find((e) => e.name === "href"), l = a.attributes.find((e) => e.name === "title");
	if (!c) return null;
	let u = decodeHtmlAttributeCharacterReferences(c.rawValue, c.quote), d = decodeHtmlTextCharacterReferences(s), f = l ? decodeHtmlAttributeCharacterReferences(l.rawValue, l.quote) : null, p = e.slice(t, i);
	return byteLength(p) > 16384 || byteLength(u) > 8192 || byteLength(d) > 2048 || f !== null && byteLength(f) > 2048 ? null : {
		end: i,
		value: {
			source: p,
			href: u,
			label: d,
			title: f
		}
	};
}
function parseHtmlSuperscriptLinkSource(e) {
	let t = matchHtmlSuperscriptLinkSource(e);
	return t?.end === e.length ? t.value : null;
}
function matchAnchorStart(e, t, n, r) {
	let i = t;
	if (e.charCodeAt(i) !== 60 || lowerCode(e.charCodeAt(i + 1)) !== 97 || (step(r, 2), i += 2, !isSingleLineHtmlWhitespace(e.charCodeAt(i)))) return null;
	let a = [];
	for (; i < n;) {
		let t = i;
		for (; isSingleLineHtmlWhitespace(e.charCodeAt(i));) step(r), i += 1;
		if (e.charCodeAt(i) === 62) return step(r), a.some((e) => e.name === "href") ? {
			end: i + 1,
			attributes: a
		} : null;
		if (i === t) return null;
		let o = i;
		for (; isAttributeNameCode(e.charCodeAt(i));) step(r), i += 1;
		if (i === o) return null;
		let s = e.slice(o, i).toLowerCase();
		if (s !== "href" && s !== "title" || a.some((e) => e.name === s)) return null;
		for (; isSingleLineHtmlWhitespace(e.charCodeAt(i));) step(r), i += 1;
		if (e.charCodeAt(i) !== 61) return null;
		for (step(r), i += 1; isSingleLineHtmlWhitespace(e.charCodeAt(i));) step(r), i += 1;
		let c = parseAttributeValue(e, i, n, r);
		if (!c) return null;
		a.push({
			name: s,
			rawValue: c.rawValue,
			quote: c.quote
		}), i = c.end;
	}
	return null;
}
function parseAttributeValue(e, t, n, r) {
	let i = e[t];
	if (i === "\"" || i === "'") {
		let a = t + 1;
		for (; a < n && e[a] !== i;) {
			step(r);
			let t = e.charCodeAt(a);
			if (t === 10 || t === 13) return null;
			a += 1;
		}
		return a >= n ? null : (step(r), {
			end: a + 1,
			rawValue: e.slice(t + 1, a),
			quote: i
		});
	}
	let a = t;
	for (; a < n;) {
		let t = e.charCodeAt(a);
		if (isHtmlWhitespace(t) || t === 62) break;
		if (step(r), t === 34 || t === 39 || t === 60 || t === 61 || t === 96) return null;
		a += 1;
	}
	return a === t ? null : {
		end: a,
		rawValue: e.slice(t, a),
		quote: null
	};
}
function matchSimpleTag(e, t, n, r, i, a) {
	let o = t;
	if (e.charCodeAt(o) !== 60) return null;
	if (step(a), o += 1, r) {
		if (e.charCodeAt(o) !== 47) return null;
		step(a), o += 1;
	}
	for (let t = 0; t < n.length; t += 1) {
		if (step(a), lowerCode(e.charCodeAt(o)) !== n.charCodeAt(t)) return null;
		o += 1;
	}
	for (; o < i && isSingleLineHtmlWhitespace(e.charCodeAt(o));) step(a), o += 1;
	return e.charCodeAt(o) === 62 ? (step(a), o + 1) : null;
}
function isAttributeNameCode(e) {
	return e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 95 || e === 46 || e === 58 || e === 45;
}
function isHtmlWhitespace(e) {
	return e === 9 || e === 10 || e === 12 || e === 13 || e === 32;
}
function isSingleLineHtmlWhitespace(e) {
	return e === 9 || e === 12 || e === 32;
}
function lowerCode(e) {
	return e >= 65 && e <= 90 ? e + 32 : e;
}
function byteLength(e) {
	return encoder.encode(e).byteLength;
}
function step(e, t = 1) {
	e && (e.transitions += t);
}
var INLINE_HTML_PATTERN = /^<!--[\s\S]*?-->|^<\/?[A-Za-z][\w.:-]*(?:\s[^<>]*?)?\/?>/;
function isEscaped(e, t) {
	let n = 0;
	for (let r = t - 1; r >= 0 && e[r] === "\\"; --r) n += 1;
	return n % 2 == 1;
}
function findLineEnd(e, t) {
	let n = e.indexOf("\n", t);
	return n === -1 ? e.length : n;
}
function isLineOnlyHtml(e) {
	let t = e.trim();
	return t.startsWith("<") ? t.startsWith("<!--") ? t.includes("-->") : /^<\/?[A-Za-z][\w.:-]*(?:\s[^<>]*?)?\/?>$/.test(t) : !1;
}
function matchBlockHtml(e, t) {
	let n = findLineEnd(e, t), r = e.slice(t, n);
	return isLineOnlyHtml(r) ? r : null;
}
function encodeRawMarkdownHtmlForRichEditor(e, t, { htmlSuperscriptLinks: n = !1 } = {}) {
	let r = normalizeMarkdownReferenceLinks(e), i = r.lastIndexOf("-->"), { transport: a } = t, o = 0, s = !0, c = null, l = 0, u = "", d = /\S/g, f = /(`{3,}|~{3,})/y, p = -1, h = null;
	for (; o < r.length;) {
		if (s && (o > p && (d.lastIndex = o, p = d.exec(r)?.index ?? r.length, f.lastIndex = p, h = f.exec(r)), h)) {
			let e = h[1][0], t = h[1].length;
			c === null ? (c = e, l = t) : c === e && t >= l && (c = null, l = 0);
		}
		if (c) {
			let e = r[o];
			u += e, s = e === "\n", o += 1;
			continue;
		}
		if (r[o] === "`") {
			let e = 0;
			for (; r[o + e] === "`";) e += 1;
			let t = o + e, n = -1;
			for (; t < r.length;) {
				let i = r.indexOf("`".repeat(e), t);
				if (i === -1) break;
				if ((i === 0 || r[i - 1] !== "`") && r[i + e] !== "`") {
					n = i;
					break;
				}
				t = i + 1;
			}
			if (n !== -1) {
				let t = r.slice(o, n + e);
				u += t, s = t.endsWith("\n"), o = n + e;
				continue;
			}
		}
		if (s) {
			let e = matchDetailsHtmlBlock(r, o);
			if (e && isEditableDetailsHtmlBlock(e)) {
				u += e.raw, o += e.raw.length;
				continue;
			}
			if (e) {
				u += a.create("block-html", e.raw), o += e.raw.length;
				continue;
			}
			let t = matchBlockHtml(r, o);
			if (t) {
				u += a.create("block-html", t), o += t.length;
				continue;
			}
		}
		if (r.startsWith(a.authoredPrefix, o)) {
			let e = r.indexOf("]]", o + a.authoredPrefix.length), t = e === -1 ? a.authoredPrefix : r.slice(o, e + 2);
			u += a.create("literal", t), o += t.length;
			continue;
		}
		if (r[o] === "<" && !isEscaped(r, o)) {
			if (n) {
				let e = matchHtmlSuperscriptLinkSource(r, o);
				if (e) {
					u += a.create("html-superscript-link", JSON.stringify(e.value)), o = e.end;
					continue;
				}
			}
			let e = r.startsWith("<!--", o) && o + 4 > i ? null : r.slice(o).match(INLINE_HTML_PATTERN)?.[0] ?? null;
			if (e) {
				u += a.create("inline-html", e), o += e.length;
				continue;
			}
		}
		if (r[o] === "[" && r[o + 1] === "[" && !isEscaped(r, o)) {
			let e = r.indexOf("]]", o + 2);
			if (e !== -1) {
				let t = r.slice(o + 2, e), n = parseMarkdownDocLink(t);
				if (n && !isReservedRichMarkdownTransportBody(t)) {
					u += a.create("document-link", formatMarkdownDocLinkBody(n.target, n.alias)), o = e + 2;
					continue;
				}
			}
		}
		let e = r[o];
		u += e, s = e === "\n", o += 1;
	}
	return u;
}
function createRichMarkdownLiteral(e) {
	return createRawSourceNode({
		name: "richMarkdownLiteral",
		kind: "literal",
		inline: !0,
		transport: e,
		marker: "data-rich-markdown-literal"
	});
}
function createRawMarkdownHtmlInline(e) {
	return createRawSourceNode({
		name: "rawMarkdownHtmlInline",
		kind: "inline-html",
		inline: !0,
		transport: e,
		marker: "data-raw-markdown-html-inline",
		className: "raw-markdown-html-inline"
	});
}
function createRawSourceNode({ name: e, kind: t, inline: n, transport: r, marker: i, className: a }) {
	return Node$1.create({
		name: e,
		inline: n,
		group: n ? "inline" : "block",
		atom: !0,
		selectable: !0,
		addAttributes() {
			return { value: {
				default: "",
				rendered: !1
			} };
		},
		markdownTokenName: e,
		markdownTokenizer: {
			name: e,
			level: n ? "inline" : "block",
			start: n ? skipInlineTransportStartScan : r.startFor(t),
			tokenize(i) {
				let a = r.match(i, t);
				if (a) return {
					type: e,
					raw: a.raw,
					text: a.value,
					block: !n
				};
			}
		},
		parseMarkdown: (t, n) => t.type === e ? n.createNode(e, { value: typeof t.text == "string" ? t.text : "" }) : [],
		renderMarkdown: (e) => typeof e.attrs?.value == "string" ? e.attrs.value : "",
		renderText: ({ node: e }) => typeof e.attrs.value == "string" ? e.attrs.value : "",
		parseHTML() {
			return [{
				tag: `${n ? "span" : "div"}[${i}]`,
				getAttrs: (e) => ({ value: e.textContent ?? "" })
			}];
		},
		renderHTML({ HTMLAttributes: e, node: t }) {
			let r = typeof t.attrs.value == "string" ? t.attrs.value : "";
			return [
				n ? "span" : "div",
				mergeAttributes(e, {
					[i]: "",
					contenteditable: "false",
					class: a
				}),
				n ? r : ["pre", r]
			];
		}
	});
}
function createRawMarkdownHtmlBlock(e) {
	return createRawSourceNode({
		name: "rawMarkdownHtmlBlock",
		kind: "block-html",
		inline: !1,
		transport: e,
		marker: "data-raw-markdown-html-block",
		className: "raw-markdown-html-block"
	});
}
var inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, src_default$2 = Node$1.create({
	name: "image",
	addOptions() {
		return {
			inline: !1,
			allowBase64: !1,
			HTMLAttributes: {},
			resize: !1
		};
	},
	inline() {
		return this.options.inline;
	},
	group() {
		return this.options.inline ? "inline" : "block";
	},
	draggable: !0,
	addAttributes() {
		return {
			src: { default: null },
			alt: { default: null },
			title: { default: null },
			width: { default: null },
			height: { default: null }
		};
	},
	parseHTML() {
		return [{ tag: this.options.allowBase64 ? "img[src]" : "img[src]:not([src^=\"data:\"])" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["img", mergeAttributes(this.options.HTMLAttributes, e)];
	},
	parseMarkdown: (e, t) => t.createNode("image", {
		src: e.href,
		title: e.title,
		alt: e.text
	}),
	renderMarkdown: (e) => {
		let t = e.attrs?.src ?? "", n = e.attrs?.alt ?? "", r = e.attrs?.title ?? "";
		return r ? `![${n}](${t} "${r}")` : `![${n}](${t})`;
	},
	addNodeView() {
		if (!this.options.resize || !this.options.resize.enabled || typeof document > "u") return null;
		let { directions: e, minWidth: t, minHeight: n, alwaysPreserveAspectRatio: r } = this.options.resize, i = /* @__PURE__ */ new Set([
			"src",
			"width",
			"height"
		]);
		return ({ node: a, getPos: o, HTMLAttributes: s, editor: c }) => {
			let l = document.createElement("img");
			l.draggable = !1;
			let u = mergeAttributes(this.options.HTMLAttributes, s);
			Object.entries(u).forEach(([e, t]) => {
				if (t != null) switch (e) {
					case "src":
					case "width":
					case "height": break;
					default: l.setAttribute(e, t);
				}
			}), u.src !== null && (l.src = u.src);
			let d = { ...s }, f = (e) => {
				if (typeof e == "string" && e !== "") {
					l.getAttribute("src") !== e && (l.src = e);
					return;
				}
				l.hasAttribute("src") && l.removeAttribute("src"), l.src !== "" && (l.src = "");
			};
			f(s.src);
			let p = new ResizableNodeView({
				element: l,
				editor: c,
				node: a,
				getPos: o,
				onResize: (e, t) => {
					l.style.width = `${e}px`, l.style.height = `${t}px`;
				},
				onCommit: (e, t) => {
					let n = o();
					n !== void 0 && this.editor.chain().setNodeSelection(n).updateAttributes(this.name, {
						width: e,
						height: t
					}).run();
				},
				onUpdate: (e) => {
					if (e.type !== a.type) return !1;
					let t = getRenderedAttributes(e, c.extensionManager.attributes.filter((t) => t.type === e.type.name));
					return Object.keys(d).forEach((e) => {
						!i.has(e) && !(e in t) && l.removeAttribute(e);
					}), Object.entries(t).forEach(([e, t]) => {
						i.has(e) || (t == null ? l.removeAttribute(e) : l.setAttribute(e, t));
					}), f(t.src), d = t, !0;
				},
				options: {
					directions: e,
					min: {
						width: t,
						height: n
					},
					preserveAspectRatio: r === !0
				}
			}), h = p.dom, S = () => {
				h.style.visibility = "", h.style.pointerEvents = "";
			};
			return h.style.visibility = "hidden", h.style.pointerEvents = "none", l.complete && l.naturalWidth > 0 ? S() : (l.onload = S, l.onerror = S), p;
		};
	},
	addCommands() {
		return { setImage: (e) => ({ commands: t }) => t.insertContent({
			type: this.name,
			attrs: e
		}) };
	},
	addInputRules() {
		return [nodeInputRule({
			find: inputRegex,
			type: this.type,
			getAttributes: (e) => {
				let [, , t, n, r] = e;
				return {
					src: n,
					alt: t,
					title: r
				};
			}
		})];
	}
}), src_default$4 = TaskItem, readFromCache, addToCache;
if (typeof WeakMap < "u") {
	let e = /* @__PURE__ */ new WeakMap();
	readFromCache = (t) => e.get(t), addToCache = (t, n) => (e.set(t, n), n);
} else {
	let e = [], t = 0;
	readFromCache = (t) => {
		for (let n = 0; n < e.length; n += 2) if (e[n] == t) return e[n + 1];
	}, addToCache = (n, r) => (t == 10 && (t = 0), e[t++] = n, e[t++] = r);
}
var TableMap = class {
	constructor(e, t, n, r) {
		this.width = e, this.height = t, this.map = n, this.problems = r;
	}
	findCell(e) {
		for (let t = 0; t < this.map.length; t++) {
			let n = this.map[t];
			if (n != e) continue;
			let r = t % this.width, i = t / this.width | 0, a = r + 1, o = i + 1;
			for (let e = 1; a < this.width && this.map[t + e] == n; e++) a++;
			for (let e = 1; o < this.height && this.map[t + this.width * e] == n; e++) o++;
			return {
				left: r,
				top: i,
				right: a,
				bottom: o
			};
		}
		throw RangeError(`No cell with offset ${e} found`);
	}
	colCount(e) {
		for (let t = 0; t < this.map.length; t++) if (this.map[t] == e) return t % this.width;
		throw RangeError(`No cell with offset ${e} found`);
	}
	nextCell(e, t, n) {
		let { left: r, right: i, top: a, bottom: o } = this.findCell(e);
		return t == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[a * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? a == 0 : o == this.height) ? null : this.map[r + this.width * (n < 0 ? a - 1 : o)];
	}
	rectBetween(e, t) {
		let { left: n, right: r, top: i, bottom: a } = this.findCell(e), { left: o, right: s, top: c, bottom: l } = this.findCell(t);
		return {
			left: Math.min(n, o),
			top: Math.min(i, c),
			right: Math.max(r, s),
			bottom: Math.max(a, l)
		};
	}
	cellsInRect(e) {
		let t = [], n = {};
		for (let r = e.top; r < e.bottom; r++) for (let i = e.left; i < e.right; i++) {
			let a = r * this.width + i, o = this.map[a];
			n[o] || (n[o] = !0, !(i == e.left && i && this.map[a - 1] == o || r == e.top && r && this.map[a - this.width] == o) && t.push(o));
		}
		return t;
	}
	positionAt(e, t, n) {
		for (let r = 0, i = 0;; r++) {
			let a = i + n.child(r).nodeSize;
			if (r == e) {
				let n = t + e * this.width, r = (e + 1) * this.width;
				for (; n < r && this.map[n] < i;) n++;
				return n == r ? a - 1 : this.map[n];
			}
			i = a;
		}
	}
	static get(e) {
		return readFromCache(e) || addToCache(e, computeMap(e));
	}
};
function computeMap(e) {
	if (e.type.spec.tableRole != "table") throw RangeError("Not a table node: " + e.type.name);
	let t = findWidth(e), n = e.childCount, r = [], i = 0, a = null, o = [];
	for (let e = 0, i = t * n; e < i; e++) r[e] = 0;
	for (let s = 0, c = 0; s < n; s++) {
		let l = e.child(s);
		c++;
		for (let e = 0;; e++) {
			for (; i < r.length && r[i] != 0;) i++;
			if (e == l.childCount) break;
			let u = l.child(e), { colspan: d, rowspan: f, colwidth: p } = u.attrs;
			for (let e = 0; e < f; e++) {
				if (e + s >= n) {
					(a ||= []).push({
						type: "overlong_rowspan",
						pos: c,
						n: f - e
					});
					break;
				}
				let l = i + e * t;
				for (let e = 0; e < d; e++) {
					r[l + e] == 0 ? r[l + e] = c : (a ||= []).push({
						type: "collision",
						row: s,
						pos: c,
						n: d - e
					});
					let n = p && p[e];
					if (n) {
						let r = (l + e) % t * 2, i = o[r];
						i == null || i != n && o[r + 1] == 1 ? (o[r] = n, o[r + 1] = 1) : i == n && o[r + 1]++;
					}
				}
			}
			i += d, c += u.nodeSize;
		}
		let u = (s + 1) * t, d = 0;
		for (; i < u;) r[i++] == 0 && d++;
		d && (a ||= []).push({
			type: "missing",
			row: s,
			n: d
		}), c++;
	}
	(t === 0 || n === 0) && (a ||= []).push({ type: "zero_sized" });
	let s = new TableMap(t, n, r, a), c = !1;
	for (let e = 0; !c && e < o.length; e += 2) o[e] != null && o[e + 1] < n && (c = !0);
	return c && findBadColWidths(s, o, e), s;
}
function findWidth(e) {
	let t = -1, n = !1;
	for (let r = 0; r < e.childCount; r++) {
		let i = e.child(r), a = 0;
		if (n) for (let t = 0; t < r; t++) {
			let n = e.child(t);
			for (let e = 0; e < n.childCount; e++) {
				let i = n.child(e);
				t + i.attrs.rowspan > r && (a += i.attrs.colspan);
			}
		}
		for (let e = 0; e < i.childCount; e++) {
			let t = i.child(e);
			a += t.attrs.colspan, t.attrs.rowspan > 1 && (n = !0);
		}
		t == -1 ? t = a : t != a && (t = Math.max(t, a));
	}
	return t;
}
function findBadColWidths(e, t, n) {
	e.problems ||= [];
	let r = {};
	for (let i = 0; i < e.map.length; i++) {
		let a = e.map[i];
		if (r[a]) continue;
		r[a] = !0;
		let o = n.nodeAt(a);
		if (!o) throw RangeError(`No cell with offset ${a} found`);
		let s = null, c = o.attrs;
		for (let n = 0; n < c.colspan; n++) {
			let r = t[(i + n) % e.width * 2];
			r != null && (!c.colwidth || c.colwidth[n] != r) && ((s ||= freshColWidth(c))[n] = r);
		}
		s && e.problems.unshift({
			type: "colwidth mismatch",
			pos: a,
			colwidth: s
		});
	}
}
function freshColWidth(e) {
	if (e.colwidth) return e.colwidth.slice();
	let t = [];
	for (let n = 0; n < e.colspan; n++) t.push(0);
	return t;
}
function tableNodeTypes(e) {
	let t = e.cached.tableNodeTypes;
	if (!t) for (let n in t = e.cached.tableNodeTypes = {}, e.nodes) {
		let r = e.nodes[n], i = r.spec.tableRole;
		i && (t[i] = r);
	}
	return t;
}
var tableEditingKey = new PluginKey("selectingCells");
function cellAround(e) {
	for (let t = e.depth - 1; t > 0; t--) if (e.node(t).type.spec.tableRole == "row") return e.node(0).resolve(e.before(t + 1));
	return null;
}
function cellWrapping(e) {
	for (let t = e.depth; t > 0; t--) {
		let n = e.node(t).type.spec.tableRole;
		if (n === "cell" || n === "header_cell") return e.node(t);
	}
	return null;
}
function isInTable(e) {
	let t = e.selection.$head;
	for (let e = t.depth; e > 0; e--) if (t.node(e).type.spec.tableRole == "row") return !0;
	return !1;
}
function selectionCell(e) {
	let t = e.selection;
	if ("$anchorCell" in t && t.$anchorCell) return t.$anchorCell.pos > t.$headCell.pos ? t.$anchorCell : t.$headCell;
	if ("node" in t && t.node && t.node.type.spec.tableRole == "cell") return t.$anchor;
	let n = cellAround(t.$head) || cellNear(t.$head);
	if (n) return n;
	throw RangeError(`No cell found around position ${t.head}`);
}
function cellNear(e) {
	for (let t = e.nodeAfter, n = e.pos; t; t = t.firstChild, n++) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n);
	}
	for (let t = e.nodeBefore, n = e.pos; t; t = t.lastChild, n--) {
		let r = t.type.spec.tableRole;
		if (r == "cell" || r == "header_cell") return e.doc.resolve(n - t.nodeSize);
	}
}
function pointsAtCell(e) {
	return e.parent.type.spec.tableRole == "row" && !!e.nodeAfter;
}
function moveCellForward(e) {
	return e.node(0).resolve(e.pos + e.nodeAfter.nodeSize);
}
function inSameTable(e, t) {
	return e.depth == t.depth && e.pos >= t.start(-1) && e.pos <= t.end(-1);
}
function nextCell(e, t, n) {
	let r = e.node(-1), i = TableMap.get(r), a = e.start(-1), o = i.nextCell(e.pos - a, t, n);
	return o == null ? null : e.node(0).resolve(a + o);
}
function removeColSpan(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan - n
	};
	return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(t, n), r.colwidth.some((e) => e > 0) || (r.colwidth = null)), r;
}
function addColSpan(e, t, n = 1) {
	let r = {
		...e,
		colspan: e.colspan + n
	};
	if (r.colwidth) {
		r.colwidth = r.colwidth.slice();
		for (let e = 0; e < n; e++) r.colwidth.splice(t, 0, 0);
	}
	return r;
}
function columnIsHeader(e, t, n) {
	let r = tableNodeTypes(t.type.schema).header_cell;
	for (let i = 0; i < e.height; i++) if (t.nodeAt(e.map[n + i * e.width]).type != r) return !1;
	return !0;
}
var CellSelection = class e extends Selection {
	constructor(e, t = e) {
		let n = e.node(-1), r = TableMap.get(n), i = e.start(-1), a = r.rectBetween(e.pos - i, t.pos - i), o = e.node(0), s = r.cellsInRect(a).filter((e) => e != t.pos - i);
		s.unshift(t.pos - i);
		let c = s.map((e) => {
			let t = n.nodeAt(e);
			if (!t) throw RangeError(`No cell with offset ${e} found`);
			let r = i + e + 1;
			return new SelectionRange(o.resolve(r), o.resolve(r + t.content.size));
		});
		super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
	}
	map(t, n) {
		let r = t.resolve(n.map(this.$anchorCell.pos)), i = t.resolve(n.map(this.$headCell.pos));
		if (pointsAtCell(r) && pointsAtCell(i) && inSameTable(r, i)) {
			let t = this.$anchorCell.node(-1) != r.node(-1);
			return t && this.isRowSelection() ? e.rowSelection(r, i) : t && this.isColSelection() ? e.colSelection(r, i) : new e(r, i);
		}
		return TextSelection.between(r, i);
	}
	content() {
		let e = this.$anchorCell.node(-1), t = TableMap.get(e), n = this.$anchorCell.start(-1), r = t.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n), i = {}, a = [];
		for (let n = r.top; n < r.bottom; n++) {
			let o = [];
			for (let a = n * t.width + r.left, s = r.left; s < r.right; s++, a++) {
				let n = t.map[a];
				if (i[n]) continue;
				i[n] = !0;
				let s = t.findCell(n), c = e.nodeAt(n);
				if (!c) throw RangeError(`No cell with offset ${n} found`);
				let l = r.left - s.left, u = s.right - r.right;
				if (l > 0 || u > 0) {
					let e = c.attrs;
					if (l > 0 && (e = removeColSpan(e, 0, l)), u > 0 && (e = removeColSpan(e, e.colspan - u, u)), s.left < r.left) {
						if (c = c.type.createAndFill(e), !c) throw RangeError(`Could not create cell with attrs ${JSON.stringify(e)}`);
					} else c = c.type.create(e, c.content);
				}
				if (s.top < r.top || s.bottom > r.bottom) {
					let e = {
						...c.attrs,
						rowspan: Math.min(s.bottom, r.bottom) - Math.max(s.top, r.top)
					};
					c = s.top < r.top ? c.type.createAndFill(e) : c.type.create(e, c.content);
				}
				o.push(c);
			}
			a.push(e.child(n).copy(Fragment.from(o)));
		}
		let o = this.isColSelection() && this.isRowSelection() ? e : a;
		return new Slice(Fragment.from(o), 1, 1);
	}
	replace(e, t = Slice.empty) {
		let n = e.steps.length, r = this.ranges;
		for (let i = 0; i < r.length; i++) {
			let { $from: a, $to: o } = r[i], s = e.mapping.slice(n);
			e.replace(s.map(a.pos), s.map(o.pos), i ? Slice.empty : t);
		}
		let i = Selection.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
		i && e.setSelection(i);
	}
	replaceWith(e, t) {
		this.replace(e, new Slice(Fragment.from(t), 0, 0));
	}
	forEachCell(e) {
		let t = this.$anchorCell.node(-1), n = TableMap.get(t), r = this.$anchorCell.start(-1), i = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
		for (let n = 0; n < i.length; n++) e(t.nodeAt(i[n]), r + i[n]);
	}
	isColSelection() {
		let e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
		if (Math.min(e, t) > 0) return !1;
		let n = e + this.$anchorCell.nodeAfter.attrs.rowspan, r = t + this.$headCell.nodeAfter.attrs.rowspan;
		return Math.max(n, r) == this.$headCell.node(-1).childCount;
	}
	static colSelection(t, n = t) {
		let r = t.node(-1), i = TableMap.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.top <= s.top ? (o.top > 0 && (t = c.resolve(a + i.map[o.left])), s.bottom < i.height && (n = c.resolve(a + i.map[i.width * (i.height - 1) + s.right - 1]))) : (s.top > 0 && (n = c.resolve(a + i.map[s.left])), o.bottom < i.height && (t = c.resolve(a + i.map[i.width * (i.height - 1) + o.right - 1]))), new e(t, n);
	}
	isRowSelection() {
		let e = this.$anchorCell.node(-1), t = TableMap.get(e), n = this.$anchorCell.start(-1), r = t.colCount(this.$anchorCell.pos - n), i = t.colCount(this.$headCell.pos - n);
		if (Math.min(r, i) > 0) return !1;
		let a = r + this.$anchorCell.nodeAfter.attrs.colspan, o = i + this.$headCell.nodeAfter.attrs.colspan;
		return Math.max(a, o) == t.width;
	}
	eq(t) {
		return t instanceof e && t.$anchorCell.pos == this.$anchorCell.pos && t.$headCell.pos == this.$headCell.pos;
	}
	static rowSelection(t, n = t) {
		let r = t.node(-1), i = TableMap.get(r), a = t.start(-1), o = i.findCell(t.pos - a), s = i.findCell(n.pos - a), c = t.node(0);
		return o.left <= s.left ? (o.left > 0 && (t = c.resolve(a + i.map[o.top * i.width])), s.right < i.width && (n = c.resolve(a + i.map[i.width * (s.top + 1) - 1]))) : (s.left > 0 && (n = c.resolve(a + i.map[s.top * i.width])), o.right < i.width && (t = c.resolve(a + i.map[i.width * (o.top + 1) - 1]))), new e(t, n);
	}
	toJSON() {
		return {
			type: "cell",
			anchor: this.$anchorCell.pos,
			head: this.$headCell.pos
		};
	}
	static fromJSON(t, n) {
		return new e(t.resolve(n.anchor), t.resolve(n.head));
	}
	static create(t, n, r = n) {
		return new e(t.resolve(n), t.resolve(r));
	}
	getBookmark() {
		return new CellBookmark(this.$anchorCell.pos, this.$headCell.pos);
	}
};
CellSelection.prototype.visible = !1, Selection.jsonID("cell", CellSelection);
var CellBookmark = class e {
	constructor(e, t) {
		this.anchor = e, this.head = t;
	}
	map(t) {
		return new e(t.map(this.anchor), t.map(this.head));
	}
	resolve(e) {
		let t = e.resolve(this.anchor), n = e.resolve(this.head);
		return t.parent.type.spec.tableRole == "row" && n.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && n.index() < n.parent.childCount && inSameTable(t, n) ? new CellSelection(t, n) : Selection.near(n, 1);
	}
};
function drawCellSelection(e) {
	if (!(e.selection instanceof CellSelection)) return null;
	let t = [];
	return e.selection.forEachCell((e, n) => {
		t.push(Decoration.node(n, n + e.nodeSize, { class: "selectedCell" }));
	}), DecorationSet.create(e.doc, t);
}
function isCellBoundarySelection({ $from: e, $to: t }) {
	if (e.pos == t.pos || e.pos < t.pos - 6) return !1;
	let n = e.pos, r = t.pos, i = e.depth;
	for (; i >= 0 && !(e.after(i + 1) < e.end(i)); i--, n++);
	for (let e = t.depth; e >= 0 && !(t.before(e + 1) > t.start(e)); e--, r--);
	return n == r && /row|table/.test(e.node(i).type.spec.tableRole);
}
function isTextSelectionAcrossCells({ $from: e, $to: t }) {
	let n, r;
	for (let t = e.depth; t > 0; t--) {
		let r = e.node(t);
		if (r.type.spec.tableRole === "cell" || r.type.spec.tableRole === "header_cell") {
			n = r;
			break;
		}
	}
	for (let e = t.depth; e > 0; e--) {
		let n = t.node(e);
		if (n.type.spec.tableRole === "cell" || n.type.spec.tableRole === "header_cell") {
			r = n;
			break;
		}
	}
	return n !== r && t.parentOffset === 0;
}
function normalizeSelection(e, t, n) {
	let r = (t || e).selection, i = (t || e).doc, a, o;
	if (r instanceof NodeSelection && (o = r.node.type.spec.tableRole)) {
		if (o == "cell" || o == "header_cell") a = CellSelection.create(i, r.from);
		else if (o == "row") {
			let e = i.resolve(r.from + 1);
			a = CellSelection.rowSelection(e, e);
		} else if (!n) {
			let e = TableMap.get(r.node), t = r.from + 1, n = t + e.map[e.width * e.height - 1];
			a = CellSelection.create(i, t + 1, n);
		}
	} else r instanceof TextSelection && isCellBoundarySelection(r) ? a = TextSelection.create(i, r.from) : r instanceof TextSelection && isTextSelectionAcrossCells(r) && (a = TextSelection.create(i, r.$from.start(), r.$from.end()));
	return a && (t ||= e.tr).setSelection(a), t;
}
var fixTablesKey = new PluginKey("fix-tables");
function changedDescendants(e, t, n, r) {
	let i = e.childCount, a = t.childCount;
	outer: for (let o = 0, s = 0; o < a; o++) {
		let a = t.child(o);
		for (let t = s, r = Math.min(i, o + 3); t < r; t++) if (e.child(t) == a) {
			s = t + 1, n += a.nodeSize;
			continue outer;
		}
		r(a, n), s < i && e.child(s).sameMarkup(a) ? changedDescendants(e.child(s), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
	}
}
function fixTables(e, t) {
	let n, r = (t, r) => {
		t.type.spec.tableRole == "table" && (n = fixTable(e, t, r, n));
	};
	return t ? t.doc != e.doc && changedDescendants(t.doc, e.doc, 0, r) : e.doc.descendants(r), n;
}
function fixTable(e, t, n, r) {
	let i = TableMap.get(t);
	if (!i.problems) return r;
	r ||= e.tr;
	let a = [];
	for (let e = 0; e < i.height; e++) a.push(0);
	for (let e = 0; e < i.problems.length; e++) {
		let o = i.problems[e];
		if (o.type == "collision") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			let i = e.attrs;
			for (let e = 0; e < i.rowspan; e++) a[o.row + e] += o.n;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, removeColSpan(i, i.colspan - o.n, o.n));
		} else if (o.type == "missing") a[o.row] += o.n;
		else if (o.type == "overlong_rowspan") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				rowspan: e.attrs.rowspan - o.n
			});
		} else if (o.type == "colwidth mismatch") {
			let e = t.nodeAt(o.pos);
			if (!e) continue;
			r.setNodeMarkup(r.mapping.map(n + 1 + o.pos), null, {
				...e.attrs,
				colwidth: o.colwidth
			});
		} else if (o.type == "zero_sized") {
			let e = r.mapping.map(n);
			r.delete(e, e + t.nodeSize);
		}
	}
	let o, s;
	for (let e = 0; e < a.length; e++) a[e] && (o ??= e, s = e);
	for (let c = 0, l = n + 1; c < i.height; c++) {
		let n = t.child(c), i = l + n.nodeSize, u = a[c];
		if (u > 0) {
			let t = "cell";
			n.firstChild && (t = n.firstChild.type.spec.tableRole);
			let a = [];
			for (let n = 0; n < u; n++) {
				let n = tableNodeTypes(e.schema)[t].createAndFill();
				n && a.push(n);
			}
			let d = (c == 0 || o == c - 1) && s == c ? l + 1 : i - 1;
			r.insert(r.mapping.map(d), a);
		}
		l = i;
	}
	return r.setMeta(fixTablesKey, { fixTables: !0 });
}
function selectedRect(e) {
	let t = e.selection, n = selectionCell(e), r = n.node(-1), i = n.start(-1), a = TableMap.get(r);
	return {
		...t instanceof CellSelection ? a.rectBetween(t.$anchorCell.pos - i, t.$headCell.pos - i) : a.findCell(n.pos - i),
		tableStart: i,
		map: a,
		table: r
	};
}
function addColumn(e, { map: t, tableStart: n, table: r }, i) {
	let a = i > 0 ? -1 : 0;
	columnIsHeader(t, r, i + a) && (a = i == 0 || i == t.width ? null : 0);
	for (let o = 0; o < t.height; o++) {
		let s = o * t.width + i;
		if (i > 0 && i < t.width && t.map[s - 1] == t.map[s]) {
			let a = t.map[s], c = r.nodeAt(a);
			e.setNodeMarkup(e.mapping.map(n + a), null, addColSpan(c.attrs, i - t.colCount(a))), o += c.attrs.rowspan - 1;
		} else {
			let c = a == null ? tableNodeTypes(r.type.schema).cell : r.nodeAt(t.map[s + a]).type, l = t.positionAt(o, i, r);
			e.insert(e.mapping.map(n + l), c.createAndFill());
		}
	}
	return e;
}
function addColumnBefore(e, t) {
	if (!isInTable(e)) return !1;
	if (t) {
		let n = selectedRect(e);
		t(addColumn(e.tr, n, n.left));
	}
	return !0;
}
function addColumnAfter(e, t) {
	if (!isInTable(e)) return !1;
	if (t) {
		let n = selectedRect(e);
		t(addColumn(e.tr, n, n.right));
	}
	return !0;
}
function removeColumn(e, { map: t, table: n, tableStart: r }, i) {
	let a = e.mapping.maps.length;
	for (let o = 0; o < t.height;) {
		let s = o * t.width + i, c = t.map[s], l = n.nodeAt(c), u = l.attrs;
		if (i > 0 && t.map[s - 1] == c || i < t.width - 1 && t.map[s + 1] == c) e.setNodeMarkup(e.mapping.slice(a).map(r + c), null, removeColSpan(u, i - t.colCount(c)));
		else {
			let t = e.mapping.slice(a).map(r + c);
			e.delete(t, t + l.nodeSize);
		}
		o += u.rowspan;
	}
}
function deleteColumn(e, t) {
	if (!isInTable(e)) return !1;
	if (t) {
		let n = selectedRect(e), r = e.tr;
		if (n.left == 0 && n.right == n.map.width) return !1;
		for (let e = n.right - 1; removeColumn(r, n, e), e != n.left; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = TableMap.get(e);
		}
		t(r);
	}
	return !0;
}
function rowIsHeader(e, t, n) {
	let r = tableNodeTypes(t.type.schema).header_cell;
	for (let i = 0; i < e.width; i++) if (t.nodeAt(e.map[i + n * e.width])?.type != r) return !1;
	return !0;
}
function addRow(e, { map: t, tableStart: n, table: r }, i) {
	let a = n;
	for (let e = 0; e < i; e++) a += r.child(e).nodeSize;
	let o = [], s = i > 0 ? -1 : 0;
	rowIsHeader(t, r, i + s) && (s = i == 0 || i == t.height ? null : 0);
	for (let a = 0, c = t.width * i; a < t.width; a++, c++) if (i > 0 && i < t.height && t.map[c] == t.map[c - t.width]) {
		let i = t.map[c], o = r.nodeAt(i).attrs;
		e.setNodeMarkup(n + i, null, {
			...o,
			rowspan: o.rowspan + 1
		}), a += o.colspan - 1;
	} else {
		let e = (s == null ? tableNodeTypes(r.type.schema).cell : r.nodeAt(t.map[c + s * t.width])?.type)?.createAndFill();
		e && o.push(e);
	}
	return e.insert(a, tableNodeTypes(r.type.schema).row.create(null, o)), e;
}
function addRowBefore(e, t) {
	if (!isInTable(e)) return !1;
	if (t) {
		let n = selectedRect(e);
		t(addRow(e.tr, n, n.top));
	}
	return !0;
}
function addRowAfter(e, t) {
	if (!isInTable(e)) return !1;
	if (t) {
		let n = selectedRect(e);
		t(addRow(e.tr, n, n.bottom));
	}
	return !0;
}
function removeRow(e, { map: t, table: n, tableStart: r }, i) {
	let a = 0;
	for (let e = 0; e < i; e++) a += n.child(e).nodeSize;
	let o = a + n.child(i).nodeSize, s = e.mapping.maps.length;
	e.delete(a + r, o + r);
	let c = /* @__PURE__ */ new Set();
	for (let a = 0, o = i * t.width; a < t.width; a++, o++) {
		let l = t.map[o];
		if (!c.has(l)) {
			if (c.add(l), i > 0 && l == t.map[o - t.width]) {
				let t = n.nodeAt(l).attrs;
				e.setNodeMarkup(e.mapping.slice(s).map(l + r), null, {
					...t,
					rowspan: t.rowspan - 1
				}), a += t.colspan - 1;
			} else if (i < t.height && l == t.map[o + t.width]) {
				let o = n.nodeAt(l), c = o.attrs, u = o.type.create({
					...c,
					rowspan: o.attrs.rowspan - 1
				}, o.content), d = t.positionAt(i + 1, a, n);
				e.insert(e.mapping.slice(s).map(r + d), u), a += c.colspan - 1;
			}
		}
	}
}
function deleteRow(e, t) {
	if (!isInTable(e)) return !1;
	if (t) {
		let n = selectedRect(e), r = e.tr;
		if (n.top == 0 && n.bottom == n.map.height) return !1;
		for (let e = n.bottom - 1; removeRow(r, n, e), e != n.top; e--) {
			let e = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
			if (!e) throw RangeError("No table found");
			n.table = e, n.map = TableMap.get(n.table);
		}
		t(r);
	}
	return !0;
}
function isEmpty(e) {
	let t = e.content;
	return t.childCount == 1 && t.child(0).isTextblock && t.child(0).childCount == 0;
}
function cellsOverlapRectangle({ width: e, height: t, map: n }, r) {
	let i = r.top * e + r.left, a = i, o = (r.bottom - 1) * e + r.left, s = i + (r.right - r.left - 1);
	for (let t = r.top; t < r.bottom; t++) {
		if (r.left > 0 && n[a] == n[a - 1] || r.right < e && n[s] == n[s + 1]) return !0;
		a += e, s += e;
	}
	for (let a = r.left; a < r.right; a++) {
		if (r.top > 0 && n[i] == n[i - e] || r.bottom < t && n[o] == n[o + e]) return !0;
		i++, o++;
	}
	return !1;
}
function mergeCells(e, t) {
	let n = e.selection;
	if (!(n instanceof CellSelection) || n.$anchorCell.pos == n.$headCell.pos) return !1;
	let r = selectedRect(e), { map: i } = r;
	if (cellsOverlapRectangle(i, r)) return !1;
	if (t) {
		let n = e.tr, a = {}, o = Fragment.empty, s, c;
		for (let e = r.top; e < r.bottom; e++) for (let t = r.left; t < r.right; t++) {
			let l = i.map[e * i.width + t], u = r.table.nodeAt(l);
			if (!(a[l] || !u)) if (a[l] = !0, s == null) s = l, c = u;
			else {
				isEmpty(u) || (o = o.append(u.content));
				let e = n.mapping.map(l + r.tableStart);
				n.delete(e, e + u.nodeSize);
			}
		}
		if (s == null || c == null) return !0;
		if (n.setNodeMarkup(s + r.tableStart, null, {
			...addColSpan(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
			rowspan: r.bottom - r.top
		}), o.size > 0) {
			let e = s + 1 + c.content.size, t = isEmpty(c) ? s + 1 : e;
			n.replaceWith(t + r.tableStart, e + r.tableStart, o);
		}
		n.setSelection(new CellSelection(n.doc.resolve(s + r.tableStart))), t(n);
	}
	return !0;
}
function splitCell(e, t) {
	let n = tableNodeTypes(e.schema);
	return splitCellWithType(({ node: e }) => n[e.type.spec.tableRole])(e, t);
}
function splitCellWithType(e) {
	return (t, n) => {
		let r = t.selection, i, a;
		if (r instanceof CellSelection) {
			if (r.$anchorCell.pos != r.$headCell.pos) return !1;
			i = r.$anchorCell.nodeAfter, a = r.$anchorCell.pos;
		} else {
			if (i = cellWrapping(r.$from), !i) return !1;
			a = cellAround(r.$from)?.pos;
		}
		if (i == null || a == null || i.attrs.colspan == 1 && i.attrs.rowspan == 1) return !1;
		if (n) {
			let o = i.attrs, s = [], c = o.colwidth;
			o.rowspan > 1 && (o = {
				...o,
				rowspan: 1
			}), o.colspan > 1 && (o = {
				...o,
				colspan: 1
			});
			let l = selectedRect(t), u = t.tr;
			for (let e = 0; e < l.right - l.left; e++) s.push(c ? {
				...o,
				colwidth: c && c[e] ? [c[e]] : null
			} : o);
			let d;
			for (let t = l.top; t < l.bottom; t++) {
				let n = l.map.positionAt(t, l.left, l.table);
				t == l.top && (n += i.nodeSize);
				for (let r = l.left, a = 0; r < l.right; r++, a++) r == l.left && t == l.top || u.insert(d = u.mapping.map(n + l.tableStart, 1), e({
					node: i,
					row: t,
					col: r
				}).createAndFill(s[a]));
			}
			u.setNodeMarkup(a, e({
				node: i,
				row: l.top,
				col: l.left
			}), s[0]), r instanceof CellSelection && u.setSelection(new CellSelection(u.doc.resolve(r.$anchorCell.pos), d ? u.doc.resolve(d) : void 0)), n(u);
		}
		return !0;
	};
}
function setCellAttr(e, t) {
	return function(n, r) {
		if (!isInTable(n)) return !1;
		let i = selectionCell(n);
		if (i.nodeAfter.attrs[e] === t) return !1;
		if (r) {
			let a = n.tr;
			n.selection instanceof CellSelection ? n.selection.forEachCell((n, r) => {
				n.attrs[e] !== t && a.setNodeMarkup(r, null, {
					...n.attrs,
					[e]: t
				});
			}) : a.setNodeMarkup(i.pos, null, {
				...i.nodeAfter.attrs,
				[e]: t
			}), r(a);
		}
		return !0;
	};
}
function deprecated_toggleHeader(e) {
	return function(t, n) {
		if (!isInTable(t)) return !1;
		if (n) {
			let r = tableNodeTypes(t.schema), i = selectedRect(t), a = t.tr, o = i.map.cellsInRect(e == "column" ? {
				left: i.left,
				top: 0,
				right: i.right,
				bottom: i.map.height
			} : e == "row" ? {
				left: 0,
				top: i.top,
				right: i.map.width,
				bottom: i.bottom
			} : i), s = o.map((e) => i.table.nodeAt(e));
			for (let e = 0; e < o.length; e++) s[e].type == r.header_cell && a.setNodeMarkup(i.tableStart + o[e], r.cell, s[e].attrs);
			if (a.steps.length === 0) for (let e = 0; e < o.length; e++) a.setNodeMarkup(i.tableStart + o[e], r.header_cell, s[e].attrs);
			n(a);
		}
		return !0;
	};
}
function isHeaderEnabledByType(e, t, n) {
	let r = t.map.cellsInRect({
		left: 0,
		top: 0,
		right: e == "row" ? t.map.width : 1,
		bottom: e == "column" ? t.map.height : 1
	});
	for (let e = 0; e < r.length; e++) {
		let i = t.table.nodeAt(r[e]);
		if (i && i.type !== n.header_cell) return !1;
	}
	return !0;
}
function toggleHeader(e, t) {
	return t ||= { useDeprecatedLogic: !1 }, t.useDeprecatedLogic ? deprecated_toggleHeader(e) : function(t, n) {
		if (!isInTable(t)) return !1;
		if (n) {
			let r = tableNodeTypes(t.schema), i = selectedRect(t), a = t.tr, o = isHeaderEnabledByType("row", i, r), s = isHeaderEnabledByType("column", i, r), c = (e === "column" ? o : e === "row" && s) ? 1 : 0, l = e == "column" ? {
				left: 0,
				top: c,
				right: 1,
				bottom: i.map.height
			} : e == "row" ? {
				left: c,
				top: 0,
				right: i.map.width,
				bottom: 1
			} : i, u = e == "column" ? s ? r.cell : r.header_cell : e == "row" ? o ? r.cell : r.header_cell : r.cell;
			i.map.cellsInRect(l).forEach((e) => {
				let t = e + i.tableStart, n = a.doc.nodeAt(t);
				n && a.setNodeMarkup(t, u, n.attrs);
			}), n(a);
		}
		return !0;
	};
}
toggleHeader("row", { useDeprecatedLogic: !0 }), toggleHeader("column", { useDeprecatedLogic: !0 });
var toggleHeaderCell = toggleHeader("cell", { useDeprecatedLogic: !0 });
function findNextCell(e, t) {
	if (t < 0) {
		let t = e.nodeBefore;
		if (t) return e.pos - t.nodeSize;
		for (let t = e.index(-1) - 1, n = e.before(); t >= 0; t--) {
			let r = e.node(-1).child(t), i = r.lastChild;
			if (i) return n - 1 - i.nodeSize;
			n -= r.nodeSize;
		}
	} else {
		if (e.index() < e.parent.childCount - 1) return e.pos + e.nodeAfter.nodeSize;
		let t = e.node(-1);
		for (let n = e.indexAfter(-1), r = e.after(); n < t.childCount; n++) {
			let e = t.child(n);
			if (e.childCount) return r + 1;
			r += e.nodeSize;
		}
	}
	return null;
}
function goToNextCell(e) {
	return function(t, n) {
		if (!isInTable(t)) return !1;
		let r = findNextCell(selectionCell(t), e);
		if (r == null) return !1;
		if (n) {
			let e = t.doc.resolve(r);
			n(t.tr.setSelection(TextSelection.between(e, moveCellForward(e))).scrollIntoView());
		}
		return !0;
	};
}
function deleteTable(e, t) {
	let n = e.selection.$anchor;
	for (let r = n.depth; r > 0; r--) if (n.node(r).type.spec.tableRole == "table") return t && t(e.tr.delete(n.before(r), n.after(r)).scrollIntoView()), !0;
	return !1;
}
function deleteCellSelection(e, t) {
	let n = e.selection;
	if (!(n instanceof CellSelection)) return !1;
	if (t) {
		let r = e.tr, i = tableNodeTypes(e.schema).cell.createAndFill().content;
		n.forEachCell((e, t) => {
			e.content.eq(i) || r.replace(r.mapping.map(t + 1), r.mapping.map(t + e.nodeSize - 1), new Slice(i, 0, 0));
		}), r.docChanged && t(r);
	}
	return !0;
}
function pastedCells(e) {
	if (e.size === 0) return null;
	let { content: t, openStart: n, openEnd: r } = e;
	for (; t.childCount == 1 && (n > 0 && r > 0 || t.child(0).type.spec.tableRole == "table");) n--, r--, t = t.child(0).content;
	let i = t.child(0), a = i.type.spec.tableRole, o = i.type.schema, s = [];
	if (a == "row") for (let e = 0; e < t.childCount; e++) {
		let i = t.child(e).content, a = e ? 0 : Math.max(0, n - 1), c = e < t.childCount - 1 ? 0 : Math.max(0, r - 1);
		(a || c) && (i = fitSlice(tableNodeTypes(o).row, new Slice(i, a, c)).content), s.push(i);
	}
	else if (a == "cell" || a == "header_cell") s.push(n || r ? fitSlice(tableNodeTypes(o).row, new Slice(t, n, r)).content : t);
	else return null;
	return ensureRectangular(o, s);
}
function ensureRectangular(e, t) {
	let n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e];
		for (let t = r.childCount - 1; t >= 0; t--) {
			let { rowspan: i, colspan: a } = r.child(t).attrs;
			for (let t = e; t < e + i; t++) n[t] = (n[t] || 0) + a;
		}
	}
	let r = 0;
	for (let e = 0; e < n.length; e++) r = Math.max(r, n[e]);
	for (let i = 0; i < n.length; i++) if (i >= t.length && t.push(Fragment.empty), n[i] < r) {
		let a = tableNodeTypes(e).cell.createAndFill(), o = [];
		for (let e = n[i]; e < r; e++) o.push(a);
		t[i] = t[i].append(Fragment.from(o));
	}
	return {
		height: t.length,
		width: r,
		rows: t
	};
}
function fitSlice(e, t) {
	let n = e.createAndFill();
	return new Transform(n).replace(0, n.content.size, t).doc;
}
function clipCells({ width: e, height: t, rows: n }, r, i) {
	if (e != r) {
		let t = [], i = [];
		for (let e = 0; e < n.length; e++) {
			let a = n[e], o = [];
			for (let n = t[e] || 0, i = 0; n < r; i++) {
				let s = a.child(i % a.childCount);
				n + s.attrs.colspan > r && (s = s.type.createChecked(removeColSpan(s.attrs, s.attrs.colspan, n + s.attrs.colspan - r), s.content)), o.push(s), n += s.attrs.colspan;
				for (let n = 1; n < s.attrs.rowspan; n++) t[e + n] = (t[e + n] || 0) + s.attrs.colspan;
			}
			i.push(Fragment.from(o));
		}
		n = i, e = r;
	}
	if (t != i) {
		let e = [];
		for (let r = 0, a = 0; r < i; r++, a++) {
			let o = [], s = n[a % t];
			for (let e = 0; e < s.childCount; e++) {
				let t = s.child(e);
				r + t.attrs.rowspan > i && (t = t.type.create({
					...t.attrs,
					rowspan: Math.max(1, i - t.attrs.rowspan)
				}, t.content)), o.push(t);
			}
			e.push(Fragment.from(o));
		}
		n = e, t = i;
	}
	return {
		width: e,
		height: t,
		rows: n
	};
}
function growTable(e, t, n, r, i, a, o) {
	let s = e.doc.type.schema, c = tableNodeTypes(s), l, u;
	if (i > t.width) for (let a = 0, s = 0; a < t.height; a++) {
		let d = n.child(a);
		s += d.nodeSize;
		let f = [], p;
		p = d.lastChild == null || d.lastChild.type == c.cell ? l ||= c.cell.createAndFill() : u ||= c.header_cell.createAndFill();
		for (let e = t.width; e < i; e++) f.push(p);
		e.insert(e.mapping.slice(o).map(s - 1 + r), f);
	}
	if (a > t.height) {
		let s = [];
		for (let e = 0, r = (t.height - 1) * t.width; e < Math.max(t.width, i); e++) {
			let i = e >= t.width ? !1 : n.nodeAt(t.map[r + e]).type == c.header_cell;
			s.push(i ? u ||= c.header_cell.createAndFill() : l ||= c.cell.createAndFill());
		}
		let d = c.row.create(null, Fragment.from(s)), f = [];
		for (let e = t.height; e < a; e++) f.push(d);
		e.insert(e.mapping.slice(o).map(r + n.nodeSize - 2), f);
	}
	return !!(l || u);
}
function isolateHorizontal(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.height) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = o * t.width + l, a = t.map[i];
		if (t.map[i - t.width] == a) {
			c = !0;
			let i = n.nodeAt(a), { top: u, left: d } = t.findCell(a);
			e.setNodeMarkup(e.mapping.slice(s).map(a + r), null, {
				...i.attrs,
				rowspan: o - u
			}), e.insert(e.mapping.slice(s).map(t.positionAt(o, d, n)), i.type.createAndFill({
				...i.attrs,
				rowspan: u + i.attrs.rowspan - o
			})), l += i.attrs.colspan - 1;
		}
	}
	return c;
}
function isolateVertical(e, t, n, r, i, a, o, s) {
	if (o == 0 || o == t.width) return !1;
	let c = !1;
	for (let l = i; l < a; l++) {
		let i = l * t.width + o, a = t.map[i];
		if (t.map[i - 1] == a) {
			c = !0;
			let i = n.nodeAt(a), u = t.colCount(a), d = e.mapping.slice(s).map(a + r);
			e.setNodeMarkup(d, null, removeColSpan(i.attrs, o - u, i.attrs.colspan - (o - u))), e.insert(d + i.nodeSize, i.type.createAndFill(removeColSpan(i.attrs, 0, o - u))), l += i.attrs.rowspan - 1;
		}
	}
	return c;
}
function insertCells(e, t, n, r, i) {
	let a = n ? e.doc.nodeAt(n - 1) : e.doc;
	if (!a) throw Error("No table found");
	let o = TableMap.get(a), { top: s, left: c } = r, l = c + i.width, u = s + i.height, d = e.tr, f = 0;
	function p() {
		if (a = n ? d.doc.nodeAt(n - 1) : d.doc, !a) throw Error("No table found");
		o = TableMap.get(a), f = d.mapping.maps.length;
	}
	growTable(d, o, a, n, l, u, f) && p(), isolateHorizontal(d, o, a, n, c, l, s, f) && p(), isolateHorizontal(d, o, a, n, c, l, u, f) && p(), isolateVertical(d, o, a, n, s, u, c, f) && p(), isolateVertical(d, o, a, n, s, u, l, f) && p();
	for (let e = s; e < u; e++) {
		let t = o.positionAt(e, c, a), r = o.positionAt(e, l, a);
		d.replace(d.mapping.slice(f).map(t + n), d.mapping.slice(f).map(r + n), new Slice(i.rows[e - s], 0, 0));
	}
	p(), d.setSelection(new CellSelection(d.doc.resolve(n + o.positionAt(s, c, a)), d.doc.resolve(n + o.positionAt(u - 1, l - 1, a)))), t(d);
}
var handleKeyDown = keydownHandler({
	ArrowLeft: arrow("horiz", -1),
	ArrowRight: arrow("horiz", 1),
	ArrowUp: arrow("vert", -1),
	ArrowDown: arrow("vert", 1),
	"Shift-ArrowLeft": shiftArrow("horiz", -1),
	"Shift-ArrowRight": shiftArrow("horiz", 1),
	"Shift-ArrowUp": shiftArrow("vert", -1),
	"Shift-ArrowDown": shiftArrow("vert", 1),
	Backspace: deleteCellSelection,
	"Mod-Backspace": deleteCellSelection,
	Delete: deleteCellSelection,
	"Mod-Delete": deleteCellSelection
});
function maybeSetSelection(e, t, n) {
	return n.eq(e.selection) ? !1 : (t && t(e.tr.setSelection(n).scrollIntoView()), !0);
}
function arrow(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection;
		if (a instanceof CellSelection) return maybeSetSelection(n, r, Selection.near(a.$headCell, t));
		if (e != "horiz" && !a.empty) return !1;
		let o = atEndOfCell(i, e, t);
		if (o == null) return !1;
		if (e == "horiz") return maybeSetSelection(n, r, Selection.near(n.doc.resolve(a.head + t), t));
		{
			let i = n.doc.resolve(o), a = nextCell(i, e, t), s;
			return s = a ? Selection.near(a, 1) : t < 0 ? Selection.near(n.doc.resolve(i.before(-1)), -1) : Selection.near(n.doc.resolve(i.after(-1)), 1), maybeSetSelection(n, r, s);
		}
	};
}
function shiftArrow(e, t) {
	return (n, r, i) => {
		if (!i) return !1;
		let a = n.selection, o;
		if (a instanceof CellSelection) o = a;
		else {
			let r = atEndOfCell(i, e, t);
			if (r == null) return !1;
			o = new CellSelection(n.doc.resolve(r));
		}
		let s = nextCell(o.$headCell, e, t);
		return s ? maybeSetSelection(n, r, new CellSelection(o.$anchorCell, s)) : !1;
	};
}
function handleTripleClick(e, t) {
	let n = e.state.doc, r = cellAround(n.resolve(t));
	return r ? (e.dispatch(e.state.tr.setSelection(new CellSelection(r))), !0) : !1;
}
function handlePaste(e, t, n) {
	if (!isInTable(e.state)) return !1;
	let r = pastedCells(n), i = e.state.selection;
	if (i instanceof CellSelection) {
		r ||= {
			width: 1,
			height: 1,
			rows: [Fragment.from(fitSlice(tableNodeTypes(e.state.schema).cell, n))]
		};
		let t = i.$anchorCell.node(-1), a = i.$anchorCell.start(-1), o = TableMap.get(t).rectBetween(i.$anchorCell.pos - a, i.$headCell.pos - a);
		return r = clipCells(r, o.right - o.left, o.bottom - o.top), insertCells(e.state, e.dispatch, a, o, r), !0;
	} else if (r) {
		let t = selectionCell(e.state), n = t.start(-1);
		return insertCells(e.state, e.dispatch, n, TableMap.get(t.node(-1)).findCell(t.pos - n), r), !0;
	} else return !1;
}
function handleMouseDown$1(e, t) {
	if (t.button != 0 || t.ctrlKey || t.metaKey) return;
	let n = domInCell(e, t.target), r;
	if (t.shiftKey && e.state.selection instanceof CellSelection) i(e.state.selection.$anchorCell, t), t.preventDefault();
	else if (t.shiftKey && n && (r = cellAround(e.state.selection.$anchor)) != null && cellUnderMouse(e, t)?.pos != r.pos) i(r, t), t.preventDefault();
	else if (!n) return;
	function i(t, n) {
		let r = cellUnderMouse(e, n), i = tableEditingKey.getState(e.state) == null;
		if (!r || !inSameTable(t, r)) if (i) r = t;
		else return;
		let a = new CellSelection(t, r);
		if (i || !e.state.selection.eq(a)) {
			let n = e.state.tr.setSelection(a);
			i && n.setMeta(tableEditingKey, t.pos), e.dispatch(n);
		}
	}
	function a() {
		e.root.removeEventListener("mouseup", a), e.root.removeEventListener("dragstart", a), e.root.removeEventListener("mousemove", o), tableEditingKey.getState(e.state) != null && e.dispatch(e.state.tr.setMeta(tableEditingKey, -1));
	}
	function o(r) {
		let o = r, s = tableEditingKey.getState(e.state), c;
		if (s != null) c = e.state.doc.resolve(s);
		else if (domInCell(e, o.target) != n && (c = cellUnderMouse(e, t), !c)) return a();
		c && i(c, o);
	}
	e.root.addEventListener("mouseup", a), e.root.addEventListener("dragstart", a), e.root.addEventListener("mousemove", o);
}
function atEndOfCell(e, t, n) {
	if (!(e.state.selection instanceof TextSelection)) return null;
	let { $head: r } = e.state.selection;
	for (let i = r.depth - 1; i >= 0; i--) {
		let a = r.node(i);
		if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : a.childCount)) return null;
		if (a.type.spec.tableRole == "cell" || a.type.spec.tableRole == "header_cell") {
			let a = r.before(i), o = t == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
			return e.endOfTextblock(o) ? a : null;
		}
	}
	return null;
}
function domInCell(e, t) {
	for (; t && t != e.dom; t = t.parentNode) if (t.nodeName == "TD" || t.nodeName == "TH") return t;
	return null;
}
function cellUnderMouse(e, t) {
	let n = e.posAtCoords({
		left: t.clientX,
		top: t.clientY
	});
	if (!n) return null;
	let { inside: r, pos: i } = n;
	return r >= 0 && cellAround(e.state.doc.resolve(r)) || cellAround(e.state.doc.resolve(i));
}
var TableView$1 = class {
	constructor(e, t) {
		this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), updateColumnsOnResize(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type == this.node.type ? (this.node = e, updateColumnsOnResize(e, this.colgroup, this.table, this.defaultCellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
	}
};
function updateColumnsOnResize(e, t, n, r, i, a) {
	let o = 0, s = !0, c = t.firstChild, l = e.firstChild;
	if (l) {
		for (let e = 0, n = 0; e < l.childCount; e++) {
			let { colspan: u, colwidth: d } = l.child(e).attrs;
			for (let e = 0; e < u; e++, n++) {
				let l = i == n ? a : d && d[e], u = l ? l + "px" : "";
				if (o += l || r, l || (s = !1), c) c.style.width != u && (c.style.width = u), c = c.nextSibling;
				else {
					let e = document.createElement("col");
					e.style.width = u, t.appendChild(e);
				}
			}
		}
		for (; c;) {
			var u;
			let e = c.nextSibling;
			(u = c.parentNode) == null || u.removeChild(c), c = e;
		}
		s ? (n.style.width = o + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = o + "px");
	}
}
var columnResizingPluginKey = new PluginKey("tableColumnResizing");
function columnResizing({ handleWidth: e = 5, cellMinWidth: t = 25, defaultCellMinWidth: n = 100, View: r = TableView$1, lastColumnResizable: i = !0 } = {}) {
	let a = new Plugin({
		key: columnResizingPluginKey,
		state: {
			init(e, t) {
				var i;
				let o = (i = a.spec) == null || (i = i.props) == null ? void 0 : i.nodeViews, s = tableNodeTypes(t.schema).table.name;
				return r && o && (o[s] = (e, t) => new r(e, n, t)), new ResizeState(-1, !1);
			},
			apply(e, t) {
				return t.apply(e);
			}
		},
		props: {
			attributes: (e) => {
				let t = columnResizingPluginKey.getState(e);
				return t && t.activeHandle > -1 ? { class: "resize-cursor" } : {};
			},
			handleDOMEvents: {
				mousemove: (t, n) => {
					handleMouseMove(t, n, e, i);
				},
				mouseleave: (e) => {
					handleMouseLeave(e);
				},
				mousedown: (e, r) => {
					handleMouseDown(e, r, t, n);
				}
			},
			decorations: (e) => {
				let t = columnResizingPluginKey.getState(e);
				if (t && t.activeHandle > -1) return handleDecorations(e, t.activeHandle);
			},
			nodeViews: {}
		}
	});
	return a;
}
var ResizeState = class e {
	constructor(e, t) {
		this.activeHandle = e, this.dragging = t;
	}
	apply(t) {
		let n = this, r = t.getMeta(columnResizingPluginKey);
		if (r && r.setHandle != null) return new e(r.setHandle, !1);
		if (r && r.setDragging !== void 0) return new e(n.activeHandle, r.setDragging);
		if (n.activeHandle > -1 && t.docChanged) {
			let r = t.mapping.map(n.activeHandle, -1);
			return pointsAtCell(t.doc.resolve(r)) || (r = -1), new e(r, n.dragging);
		}
		return n;
	}
};
function handleMouseMove(e, t, n, r) {
	if (!e.editable) return;
	let i = columnResizingPluginKey.getState(e.state);
	if (i && !i.dragging) {
		let a = domCellAround(t.target), o = -1;
		if (a) {
			let { left: r, right: i } = a.getBoundingClientRect();
			t.clientX - r <= n ? o = edgeCell(e, t, "left", n) : i - t.clientX <= n && (o = edgeCell(e, t, "right", n));
		}
		if (o != i.activeHandle) {
			if (!r && o !== -1) {
				let t = e.state.doc.resolve(o), n = t.node(-1), r = TableMap.get(n), i = t.start(-1);
				if (r.colCount(t.pos - i) + t.nodeAfter.attrs.colspan - 1 == r.width - 1) return;
			}
			updateHandle(e, o);
		}
	}
}
function handleMouseLeave(e) {
	if (!e.editable) return;
	let t = columnResizingPluginKey.getState(e.state);
	t && t.activeHandle > -1 && !t.dragging && updateHandle(e, -1);
}
function handleMouseDown(e, t, n, r) {
	if (!e.editable) return !1;
	let i = e.dom.ownerDocument.defaultView ?? window, a = columnResizingPluginKey.getState(e.state);
	if (!a || a.activeHandle == -1 || a.dragging) return !1;
	let o = e.state.doc.nodeAt(a.activeHandle), s = currentColWidth(e, a.activeHandle, o.attrs);
	e.dispatch(e.state.tr.setMeta(columnResizingPluginKey, { setDragging: {
		startX: t.clientX,
		startWidth: s
	} }));
	function c(t) {
		i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", l);
		let r = columnResizingPluginKey.getState(e.state);
		r?.dragging && (updateColumnWidth(e, r.activeHandle, draggedWidth(r.dragging, t, n)), e.dispatch(e.state.tr.setMeta(columnResizingPluginKey, { setDragging: null })));
	}
	function l(t) {
		if (!t.which) return c(t);
		let i = columnResizingPluginKey.getState(e.state);
		if (i && i.dragging) {
			let a = draggedWidth(i.dragging, t, n);
			displayColumnWidth(e, i.activeHandle, a, r);
		}
	}
	return displayColumnWidth(e, a.activeHandle, s, r), i.addEventListener("mouseup", c), i.addEventListener("mousemove", l), t.preventDefault(), !0;
}
function currentColWidth(e, t, { colspan: n, colwidth: r }) {
	let i = r && r[r.length - 1];
	if (i) return i;
	let a = e.domAtPos(t), o = a.node.childNodes[a.offset].offsetWidth, s = n;
	if (r) for (let e = 0; e < n; e++) r[e] && (o -= r[e], s--);
	return o / s;
}
function domCellAround(e) {
	for (; e && e.nodeName != "TD" && e.nodeName != "TH";) e = e.classList && e.classList.contains("ProseMirror") ? null : e.parentNode;
	return e;
}
function edgeCell(e, t, n, r) {
	let i = n == "right" ? -r : r, a = e.posAtCoords({
		left: t.clientX + i,
		top: t.clientY
	});
	if (!a) return -1;
	let { pos: o } = a, s = cellAround(e.state.doc.resolve(o));
	if (!s) return -1;
	if (n == "right") return s.pos;
	let c = TableMap.get(s.node(-1)), l = s.start(-1), u = c.map.indexOf(s.pos - l);
	return u % c.width == 0 ? -1 : l + c.map[u - 1];
}
function draggedWidth(e, t, n) {
	let r = t.clientX - e.startX;
	return Math.max(n, e.startWidth + r);
}
function updateHandle(e, t) {
	e.dispatch(e.state.tr.setMeta(columnResizingPluginKey, { setHandle: t }));
}
function updateColumnWidth(e, t, n) {
	let r = e.state.doc.resolve(t), i = r.node(-1), a = TableMap.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, c = e.state.tr;
	for (let e = 0; e < a.height; e++) {
		let t = e * a.width + s;
		if (e && a.map[t] == a.map[t - a.width]) continue;
		let r = a.map[t], l = i.nodeAt(r).attrs, u = l.colspan == 1 ? 0 : s - a.colCount(r);
		if (l.colwidth && l.colwidth[u] == n) continue;
		let d = l.colwidth ? l.colwidth.slice() : zeroes(l.colspan);
		d[u] = n, c.setNodeMarkup(o + r, null, {
			...l,
			colwidth: d
		});
	}
	c.docChanged && e.dispatch(c);
}
function displayColumnWidth(e, t, n, r) {
	let i = e.state.doc.resolve(t), a = i.node(-1), o = i.start(-1), s = TableMap.get(a).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1, c = e.domAtPos(i.start(-1)).node;
	for (; c && c.nodeName != "TABLE";) c = c.parentNode;
	c && updateColumnsOnResize(a, c.firstChild, c, r, s, n);
}
function zeroes(e) {
	return Array(e).fill(0);
}
function handleDecorations(e, t) {
	let n = [], r = e.doc.resolve(t), i = r.node(-1);
	if (!i) return DecorationSet.empty;
	let a = TableMap.get(i), o = r.start(-1), s = a.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
	for (let t = 0; t < a.height; t++) {
		let r = s + t * a.width;
		if ((s == a.width - 1 || a.map[r] != a.map[r + 1]) && (t == 0 || a.map[r] != a.map[r - a.width])) {
			let t = a.map[r], s = o + t + i.nodeAt(t).nodeSize - 1, c = document.createElement("div");
			c.className = "column-resize-handle", columnResizingPluginKey.getState(e)?.dragging && n.push(Decoration.node(o + t, o + t + i.nodeAt(t).nodeSize, { class: "column-resize-dragging" })), n.push(Decoration.widget(s, c));
		}
	}
	return DecorationSet.create(e.doc, n);
}
function tableEditing({ allowTableNodeSelection: e = !1 } = {}) {
	return new Plugin({
		key: tableEditingKey,
		state: {
			init() {
				return null;
			},
			apply(e, t) {
				let n = e.getMeta(tableEditingKey);
				if (n != null) return n == -1 ? null : n;
				if (t == null || !e.docChanged) return t;
				let { deleted: r, pos: i } = e.mapping.mapResult(t);
				return r ? null : i;
			}
		},
		props: {
			decorations: drawCellSelection,
			handleDOMEvents: { mousedown: handleMouseDown$1 },
			createSelectionBetween(e) {
				return tableEditingKey.getState(e.state) == null ? null : e.state.selection;
			},
			handleTripleClick,
			handleKeyDown,
			handlePaste
		},
		appendTransaction(t, n, r) {
			return normalizeSelection(r, fixTables(r, n), e);
		}
	});
}
function normalizeTableCellAlign(e) {
	return e === "left" || e === "right" || e === "center" ? e : null;
}
function parseAlign(e) {
	let t = (e.style.textAlign || "").trim().toLowerCase(), n = (e.getAttribute("align") || "").trim().toLowerCase();
	return normalizeTableCellAlign(t || n);
}
function normalizeTableCellAlignFromAttributes(e) {
	return normalizeTableCellAlign(e?.align);
}
function createAlignAttribute() {
	return {
		default: null,
		parseHTML: (e) => parseAlign(e),
		renderHTML: (e) => e.align ? { style: `text-align: ${e.align}` } : {}
	};
}
function parseColgroupWidth(e) {
	let t = e.parentElement, n = e.closest("table");
	if (!t || !n) return null;
	let r = Array.from(t.children).indexOf(e), i = n.querySelectorAll("colgroup > col")[r]?.getAttribute("width");
	return i ? [parseInt(i, 10)] : null;
}
function parseColwidth(e) {
	let t = e.getAttribute("colwidth");
	return t ? t.split(",").map((e) => parseInt(e, 10)) : parseColgroupWidth(e);
}
var COLLAPSIBLE_WHITESPACE = /[ \t\r\n\f]+/g;
function isEmptyCellElement(e) {
	return e.children.length > 0 ? !1 : (e.textContent ?? "").replace(COLLAPSIBLE_WHITESPACE, "") === "";
}
function fillEmptyCellContent(e) {
	let t = e.createAndFill();
	if (!t) throw Error(`[tiptap error]: "${e.name}" has no default content to backfill.`);
	return t.content;
}
var TableCell = Node$1.create({
	name: "tableCell",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: parseColwidth
			},
			align: createAlignAttribute()
		};
	},
	tableRole: "cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "td",
			getAttrs: (e) => isEmptyCellElement(e) ? {} : !1,
			getContent: (e, t) => fillEmptyCellContent(t.nodes[this.name])
		}, { tag: "td" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"td",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	}
}), TableHeader = Node$1.create({
	name: "tableHeader",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "block+",
	addAttributes() {
		return {
			colspan: { default: 1 },
			rowspan: { default: 1 },
			colwidth: {
				default: null,
				parseHTML: parseColwidth
			},
			align: createAlignAttribute()
		};
	},
	tableRole: "header_cell",
	isolating: !0,
	parseHTML() {
		return [{
			tag: "th",
			getAttrs: (e) => isEmptyCellElement(e) ? {} : !1,
			getContent: (e, t) => fillEmptyCellContent(t.nodes[this.name])
		}, { tag: "th" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"th",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	}
}), TableRow = Node$1.create({
	name: "tableRow",
	addOptions() {
		return { HTMLAttributes: {} };
	},
	content: "(tableCell | tableHeader)*",
	tableRole: "row",
	parseHTML() {
		return [{ tag: "tr" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"tr",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	}
});
function getColStyleDeclaration(e, t) {
	return t ? ["width", `${Math.max(t, e)}px`] : ["min-width", `${e}px`];
}
function updateColumns(e, t, n, r, i, a) {
	let o = 0, s = !0, c = t.firstChild, l = e.firstChild;
	if (l !== null) for (let e = 0, n = 0; e < l.childCount; e += 1) {
		let { colspan: u, colwidth: d } = l.child(e).attrs;
		for (let e = 0; e < u; e += 1, n += 1) {
			let l = i === n ? a : d && d[e], u = l ? `${l}px` : "";
			if (o += l || r, l || (s = !1), c) {
				if (c.style.width !== u) {
					let [e, t] = getColStyleDeclaration(r, l);
					c.style.setProperty(e, t);
				}
				c = c.nextSibling;
			} else {
				let e = document.createElement("col"), [n, i] = getColStyleDeclaration(r, l);
				e.style.setProperty(n, i), t.appendChild(e);
			}
		}
	}
	for (; c;) {
		var u;
		let e = c.nextSibling;
		(u = c.parentNode) == null || u.removeChild(c), c = e;
	}
	let d = e.attrs.style && typeof e.attrs.style == "string" && /\bwidth\s*:/i.test(e.attrs.style);
	s && !d ? (n.style.width = `${o}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${o}px`);
}
var TableView = class {
	constructor(e, t, n, r = {}) {
		this.node = e, this.cellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table"));
		for (let [e, t] of Object.entries(r)) t != null && (e === "style" ? this.table.style.cssText = String(t) : this.table.setAttribute(e, String(t)));
		e.attrs.style && (this.table.style.cssText = e.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), updateColumns(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
	}
	update(e) {
		return e.type === this.node.type ? (this.node = e, updateColumns(e, this.colgroup, this.table, this.cellMinWidth), !0) : !1;
	}
	ignoreMutation(e) {
		let t = e.target, n = this.dom.contains(t), r = this.contentDOM.contains(t);
		return !!(n && !r && (e.type === "attributes" || e.type === "childList" || e.type === "characterData"));
	}
};
function createColGroup(e, t, n, r) {
	let i = 0, a = !0, o = [], s = e.firstChild;
	if (!s) return {};
	for (let e = 0, c = 0; e < s.childCount; e += 1) {
		let { colspan: l, colwidth: u } = s.child(e).attrs;
		for (let e = 0; e < l; e += 1, c += 1) {
			let s = n === c ? r : u && u[e];
			i += s || t, s || (a = !1);
			let [l, d] = getColStyleDeclaration(t, s);
			o.push(["col", { style: `${l}: ${d}` }]);
		}
	}
	let c = a ? `${i}px` : "", l = a ? "" : `${i}px`;
	return {
		colgroup: [
			"colgroup",
			{},
			...o
		],
		tableWidth: c,
		tableMinWidth: l
	};
}
function createCell(e, t) {
	return t ? e.createChecked(null, t) : e.createAndFill();
}
function getTableNodeTypes(e) {
	if (e.cached.tableNodeTypes) return e.cached.tableNodeTypes;
	let t = {};
	return Object.keys(e.nodes).forEach((n) => {
		let r = e.nodes[n];
		r.spec.tableRole && (t[r.spec.tableRole] = r);
	}), e.cached.tableNodeTypes = t, t;
}
function createTable(e, t, n, r, i) {
	let a = getTableNodeTypes(e), o = [], s = [];
	for (let e = 0; e < n; e += 1) {
		let e = createCell(a.cell, i);
		if (e && s.push(e), r) {
			let e = createCell(a.header_cell, i);
			e && o.push(e);
		}
	}
	let c = [];
	for (let e = 0; e < t; e += 1) c.push(a.row.createChecked(null, r && e === 0 ? o : s));
	return a.table.createChecked(null, c);
}
function isCellSelection(e) {
	return e instanceof CellSelection;
}
var deleteTableWhenAllCellsSelected = ({ editor: e }) => {
	let { selection: t } = e.state;
	if (!isCellSelection(t)) return !1;
	let n = 0;
	return findParentNodeClosestToPos(t.ranges[0].$from, (e) => e.type.name === "table")?.node.descendants((e) => {
		if (e.type.name === "table") return !1;
		["tableCell", "tableHeader"].includes(e.type.name) && (n += 1);
	}), n === t.ranges.length ? (e.commands.deleteTable(), !0) : !1;
};
function keepCursorInTable(e, t) {
	let n = e.mapping.map(t);
	if (findParentNodeClosestToPos(e.selection.$from, (e) => e.type.name === "table")?.pos === n) return;
	let r = e.doc.nodeAt(n);
	if (!r) return;
	let i = n + r.nodeSize - 1;
	e.setSelection(TextSelection.near(e.doc.resolve(i), -1));
}
function escapeTableCellPipes(e) {
	let t = "", n = 0;
	for (; n < e.length;) {
		if (e[n] === "\\" && n + 1 < e.length) {
			t += e[n] + e[n + 1], n += 2;
			continue;
		}
		if (e[n] !== "`") {
			t += e[n++];
			continue;
		}
		let r = 0;
		for (; n + r < e.length && e[n + r] === "`";) r += 1;
		let i = n + r, a = !1;
		for (; i < e.length;) {
			if (e[i] !== "`") {
				i += 1;
				continue;
			}
			let o = 0;
			for (; i + o < e.length && e[i + o] === "`";) o += 1;
			if (o === r) {
				let o = e.slice(n + r, i);
				t += e.slice(n, n + r) + o.replace(/\\\||\|/g, (e) => e === "|" ? "\\|" : e) + e.slice(i, i + r), n = i + r, a = !0;
				break;
			}
			i += o;
		}
		a || (t += e.slice(n, n + r), n += r);
	}
	return t;
}
function preprocessTablePipes(e) {
	return e.split("\n").map((e) => !e.includes("|") || !e.includes("`") ? e : escapeTableCellPipes(e)).join("\n");
}
function collapseWhitespace(e) {
	return (e || "").replace(/\s+/g, " ").trim();
}
function renderTableToMarkdown(e, t, n = {}) {
	let r = n.cellLineSeparator ?? "";
	if (!e || !e.content || e.content.length === 0) return "";
	let i = [];
	e.content.forEach((e) => {
		let n = [];
		e.content && e.content.forEach((e) => {
			let i = "";
			i = e.content && Array.isArray(e.content) && e.content.length > 1 ? e.content.map((e) => t.renderChildren(e)).join(r) : e.content ? t.renderChildren(e.content) : "";
			let a = collapseWhitespace(i.split(r).join("\n").replace(/[ \t]*\r?\n[ \t]*/g, "<br>")), o = e.type === "tableHeader", s = normalizeTableCellAlignFromAttributes(e.attrs);
			n.push({
				text: a,
				isHeader: o,
				align: s
			});
		}), i.push(n);
	});
	let a = i.reduce((e, t) => Math.max(e, t.length), 0);
	if (a === 0) return "";
	let o = Array.from({ length: a }).fill(0);
	i.forEach((e) => {
		for (let t = 0; t < a; t += 1) {
			let n = (e[t]?.text || "").length;
			n > o[t] && (o[t] = n), o[t] < 3 && (o[t] = 3);
		}
	});
	let s = (e, t) => e + " ".repeat(Math.max(0, t - e.length)), c = i[0], l = c.some((e) => e.isHeader), u = Array.from({ length: a }).fill(null);
	i.forEach((e) => {
		for (let t = 0; t < a; t += 1) !u[t] && e[t]?.align && (u[t] = e[t].align);
	});
	let d = "\n", f = Array.from({ length: a }).map((e, t) => l && c[t] && c[t].text || "");
	return d += `| ${f.map((e, t) => s(e, o[t])).join(" | ")} |\n`, d += `| ${o.map((e, t) => {
		let n = Math.max(3, e), r = u[t];
		return r === "left" ? `:${"-".repeat(n)}` : r === "right" ? `${"-".repeat(n)}:` : r === "center" ? `:${"-".repeat(n)}:` : "-".repeat(n);
	}).join(" | ")} |\n`, (l ? i.slice(1) : i).forEach((e) => {
		d += `| ${Array.from({ length: a }).fill(0).map((t, n) => s(e[n] && e[n].text || "", o[n])).join(" | ")} |\n`;
	}), d;
}
var Table = Node$1.create({
	name: "table",
	addOptions() {
		return {
			HTMLAttributes: {},
			resizable: !1,
			renderWrapper: !1,
			handleWidth: 5,
			cellMinWidth: 25,
			View: TableView,
			lastColumnResizable: !0,
			allowTableNodeSelection: !1
		};
	},
	content: "tableRow+",
	tableRole: "table",
	isolating: !0,
	group: "block",
	parseHTML() {
		return [{ tag: "table" }];
	},
	renderHTML({ node: e, HTMLAttributes: t }) {
		let { colgroup: n, tableWidth: r, tableMinWidth: i } = createColGroup(e, this.options.cellMinWidth), a = t.style;
		function o() {
			return a || (r ? `width: ${r}` : `min-width: ${i}`);
		}
		let s = [
			"table",
			mergeAttributes(this.options.HTMLAttributes, t, { style: o() }),
			n,
			["tbody", 0]
		];
		return this.options.renderWrapper ? [
			"div",
			{ class: "tableWrapper" },
			s
		] : s;
	},
	parseMarkdown: (e, t) => {
		let n = [], r = Array.isArray(e.align) ? e.align : [];
		if (e.header) {
			let i = [];
			e.header.forEach((e, n) => {
				let a = normalizeTableCellAlign(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableHeader", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}
		return e.rows && e.rows.forEach((e) => {
			let i = [];
			e.forEach((e, n) => {
				let a = normalizeTableCellAlign(r[n] ?? e.align), o = a ? { align: a } : {};
				i.push(t.createNode("tableCell", o, [{
					type: "paragraph",
					content: t.parseInline(e.tokens)
				}]));
			}), n.push(t.createNode("tableRow", {}, i));
		}), t.createNode("table", void 0, n);
	},
	renderMarkdown: (e, t) => renderTableToMarkdown(e, t),
	markdownTokenizer: {
		name: "table",
		level: "block",
		start: (e) => {
			let t = e.split("\n");
			if (t.length < 2) return -1;
			let n = t[1];
			return !/^[ \t|:]*-[ \t|:-]*$/.test(n) || !n.includes("|") ? -1 : t[0].includes("|") ? 0 : -1;
		},
		tokenize(e, t, n) {
			let r = e.indexOf("\n\n"), i = r >= 0 ? e.slice(0, r) : e, a = i.split("\n");
			if (a.length < 2) return;
			let o = a[1];
			if (!/^[ \t|:]*-[ \t|:-]*$/.test(o) || !o.includes("|")) return;
			let s = preprocessTablePipes(i);
			if (s === i) return;
			let c = n.blockTokens(s)[0];
			if (c?.type !== "table" || !c.raw) return;
			let l = c.raw.split("\n").length, u = e.split("\n").slice(0, l).join("\n");
			return {
				...c,
				raw: u
			};
		}
	},
	addCommands() {
		return {
			insertTable: ({ rows: e = 3, cols: t = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: a }) => {
				let o = createTable(a.schema, e, t, n);
				if (i) {
					let e = r.selection.from + 1;
					r.replaceSelectionWith(o).scrollIntoView().setSelection(TextSelection.near(r.doc.resolve(e)));
				}
				return !0;
			},
			addColumnBefore: () => ({ state: e, dispatch: t }) => addColumnBefore(e, t),
			addColumnAfter: () => ({ state: e, dispatch: t }) => addColumnAfter(e, t),
			deleteColumn: () => ({ state: e, dispatch: t }) => {
				let n = findParentNodeClosestToPos(e.selection.$from, (e) => e.type.name === "table");
				return deleteColumn(e, t && ((e) => {
					n && keepCursorInTable(e, n.pos), t(e);
				}));
			},
			addRowBefore: () => ({ state: e, dispatch: t }) => addRowBefore(e, t),
			addRowAfter: () => ({ state: e, dispatch: t }) => addRowAfter(e, t),
			deleteRow: () => ({ state: e, dispatch: t }) => {
				let n = findParentNodeClosestToPos(e.selection.$from, (e) => e.type.name === "table");
				return deleteRow(e, t && ((e) => {
					n && keepCursorInTable(e, n.pos), t(e);
				}));
			},
			deleteTable: () => ({ state: e, dispatch: t }) => deleteTable(e, t),
			mergeCells: () => ({ state: e, dispatch: t }) => mergeCells(e, t),
			splitCell: () => ({ state: e, dispatch: t }) => splitCell(e, t),
			toggleHeaderColumn: () => ({ state: e, dispatch: t }) => toggleHeader("column")(e, t),
			toggleHeaderRow: () => ({ state: e, dispatch: t }) => toggleHeader("row")(e, t),
			toggleHeaderCell: () => ({ state: e, dispatch: t }) => toggleHeaderCell(e, t),
			mergeOrSplit: () => ({ state: e, dispatch: t }) => mergeCells(e, t) ? !0 : splitCell(e, t),
			setCellAttribute: (e, t) => ({ state: n, dispatch: r }) => setCellAttr(e, t)(n, r),
			goToNextCell: () => ({ state: e, dispatch: t }) => goToNextCell(1)(e, t),
			goToPreviousCell: () => ({ state: e, dispatch: t }) => goToNextCell(-1)(e, t),
			fixTables: () => ({ state: e, dispatch: t }) => (t && fixTables(e), !0),
			setCellSelection: (e) => ({ tr: t, dispatch: n }) => {
				if (n) {
					let n = CellSelection.create(t.doc, e.anchorCell, e.headCell);
					t.setSelection(n);
				}
				return !0;
			}
		};
	},
	addKeyboardShortcuts() {
		return {
			Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
			"Shift-Tab": () => this.editor.commands.goToPreviousCell(),
			Backspace: deleteTableWhenAllCellsSelected,
			"Mod-Backspace": deleteTableWhenAllCellsSelected,
			Delete: deleteTableWhenAllCellsSelected,
			"Mod-Delete": deleteTableWhenAllCellsSelected
		};
	},
	addProseMirrorPlugins() {
		return [...this.options.resizable && this.editor.isEditable ? [columnResizing({
			handleWidth: this.options.handleWidth,
			cellMinWidth: this.options.cellMinWidth,
			defaultCellMinWidth: this.options.cellMinWidth,
			View: this.options.View,
			lastColumnResizable: this.options.lastColumnResizable
		})] : [], tableEditing({ allowTableNodeSelection: this.options.allowTableNodeSelection })];
	},
	addNodeView() {
		let e = this.options.resizable && this.editor.isEditable, t = this.options.View;
		return e || !t ? null : ({ node: e, view: n, HTMLAttributes: r }) => {
			let i = mergeAttributes(this.options.HTMLAttributes, r);
			return new t(e, this.options.cellMinWidth, n, i);
		};
	},
	extendNodeSchema(e) {
		return { tableRole: callOrReturn(getExtensionField(e, "tableRole", {
			name: e.name,
			options: e.options,
			storage: e.storage
		})) };
	}
});
Extension.create({
	name: "tableKit",
	addExtensions() {
		let e = [];
		return this.options.table !== !1 && e.push(Table.configure(this.options.table)), this.options.tableCell !== !1 && e.push(TableCell.configure(this.options.tableCell)), this.options.tableHeader !== !1 && e.push(TableHeader.configure(this.options.tableHeader)), this.options.tableRow !== !1 && e.push(TableRow.configure(this.options.tableRow)), e;
	}
});
var BlockMath = Node$1.create({
	name: "blockMath",
	group: "block",
	atom: !0,
	addOptions() {
		return {
			onClick: void 0,
			katexOptions: void 0
		};
	},
	addAttributes() {
		return { latex: {
			default: "",
			parseHTML: (e) => e.getAttribute("data-latex"),
			renderHTML: (e) => ({ "data-latex": e.latex })
		} };
	},
	addCommands() {
		return {
			insertBlockMath: (e) => ({ commands: t, editor: n }) => {
				let { latex: r, pos: i } = e;
				return r ? t.insertContentAt(i ?? n.state.selection.from, {
					type: this.name,
					attrs: { latex: r }
				}) : !1;
			},
			deleteBlockMath: (e) => ({ editor: t, tr: n }) => {
				let r = e?.pos ?? t.state.selection.$from.pos, i = t.state.doc.nodeAt(r);
				return !i || i.type.name !== this.name ? !1 : (n.delete(r, r + i.nodeSize), !0);
			},
			updateBlockMath: (e) => ({ editor: t, tr: n }) => {
				let r = e?.latex, i = e?.pos;
				i === void 0 && (i = t.state.selection.$from.pos);
				let a = t.state.doc.nodeAt(i);
				return !a || a.type.name !== this.name ? !1 : (n.setNodeMarkup(i, this.type, {
					...a.attrs,
					latex: r ?? a.attrs.latex
				}), !0);
			}
		};
	},
	parseHTML() {
		return [{ tag: "div[data-type=\"block-math\"]" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["div", mergeAttributes(e, { "data-type": "block-math" })];
	},
	parseMarkdown: (e) => ({
		type: "blockMath",
		attrs: { latex: e.latex }
	}),
	renderMarkdown: (e) => [
		"$$",
		e.attrs?.latex || "",
		"$$"
	].join("\n"),
	markdownTokenizer: {
		name: "blockMath",
		level: "block",
		start: (e) => e.indexOf("$$"),
		tokenize: (e) => {
			let t = e.match(/^\$\$([^$]+)\$\$/);
			if (!t) return;
			let [n, r] = t;
			return {
				type: "blockMath",
				raw: n,
				latex: r.trim()
			};
		}
	},
	addInputRules() {
		return [new InputRule({
			find: /^\$\$\$([^$]+)\$\$\$$/,
			handler: ({ state: e, range: t, match: n }) => {
				let [, r] = n, { tr: i } = e, a = e.doc.resolve(t.from), o = this.type.create({ latex: r }), s = a.depth > 0 && a.parent.isTextblock && t.from === a.start() && t.to === a.end() && a.node(-1).canReplaceWith(a.index(-1), a.indexAfter(-1), this.type) ? {
					from: a.before(),
					to: a.after()
				} : t;
				i.replaceWith(s.from, s.to, o);
			}
		})];
	},
	addNodeView() {
		let { katexOptions: e } = this.options;
		return ({ node: t, getPos: n }) => {
			let r = document.createElement("div"), i = document.createElement("div");
			r.className = "tiptap-mathematics-render", this.editor.isEditable && r.classList.add("tiptap-mathematics-render--editable"), i.className = "block-math-inner", r.dataset.type = "block-math", r.setAttribute("data-latex", t.attrs.latex), r.appendChild(i);
			function a() {
				try {
					katex.render(t.attrs.latex, i, e), r.classList.remove("block-math-error");
				} catch {
					r.textContent = t.attrs.latex, r.classList.add("block-math-error");
				}
			}
			let o = (e) => {
				e.preventDefault(), e.stopPropagation();
				let r = n();
				r != null && this.options.onClick && this.options.onClick(t, r);
			};
			return this.options.onClick && r.addEventListener("click", o), a(), {
				dom: r,
				destroy() {
					r.removeEventListener("click", o);
				}
			};
		};
	}
}), InlineMath = Node$1.create({
	name: "inlineMath",
	group: "inline",
	inline: !0,
	atom: !0,
	addOptions() {
		return {
			onClick: void 0,
			katexOptions: void 0
		};
	},
	addAttributes() {
		return { latex: {
			default: "",
			parseHTML: (e) => e.getAttribute("data-latex"),
			renderHTML: (e) => ({ "data-latex": e.latex })
		} };
	},
	addCommands() {
		return {
			insertInlineMath: (e) => ({ editor: t, tr: n }) => {
				let r = e.latex, i = e?.pos ?? t.state.selection.from;
				return r ? (n.replaceWith(i, i, this.type.create({ latex: r })), !0) : !1;
			},
			deleteInlineMath: (e) => ({ editor: t, tr: n }) => {
				let r = e?.pos ?? t.state.selection.$from.pos, i = t.state.doc.nodeAt(r);
				return !i || i.type.name !== this.name ? !1 : (n.delete(r, r + i.nodeSize), !0);
			},
			updateInlineMath: (e) => ({ editor: t, tr: n }) => {
				let r = e?.latex, i = e?.pos;
				i === void 0 && (i = t.state.selection.$from.pos);
				let a = t.state.doc.nodeAt(i);
				return !a || a.type.name !== this.name ? !1 : (n.setNodeMarkup(i, this.type, {
					...a.attrs,
					latex: r
				}), !0);
			}
		};
	},
	parseHTML() {
		return [{ tag: "span[data-type=\"inline-math\"]" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return ["span", mergeAttributes(e, { "data-type": "inline-math" })];
	},
	parseMarkdown: (e) => ({
		type: "inlineMath",
		attrs: { latex: e.latex }
	}),
	renderMarkdown: (e) => `$${e.attrs?.latex || ""}$`,
	markdownTokenizer: {
		name: "inlineMath",
		level: "inline",
		start: (e) => e.indexOf("$"),
		tokenize: (e) => {
			let t = e.match(/^\$([^$]+)\$(?!\$)/);
			if (!t) return;
			let [n, r] = t;
			return {
				type: "inlineMath",
				raw: n,
				latex: r.trim()
			};
		}
	},
	addInputRules() {
		return [new InputRule({
			find: RegExp("(?<!\\$)(\\$\\$([^$\\n]+?)\\$\\$)(?!\\$)", ""),
			handler: ({ state: e, range: t, match: n }) => {
				let r = n[2], { tr: i } = e, a = t.from, o = t.to;
				i.replaceWith(a, o, this.type.create({ latex: r }));
			}
		})];
	},
	addNodeView() {
		let { katexOptions: e } = this.options;
		return ({ node: t, getPos: n }) => {
			let r = document.createElement("span");
			r.className = "tiptap-mathematics-render", this.editor.isEditable && r.classList.add("tiptap-mathematics-render--editable"), r.dataset.type = "inline-math", r.setAttribute("data-latex", t.attrs.latex);
			function i() {
				try {
					katex.render(t.attrs.latex, r, e), r.classList.remove("inline-math-error");
				} catch {
					r.textContent = t.attrs.latex, r.classList.add("inline-math-error");
				}
			}
			let a = (e) => {
				e.preventDefault(), e.stopPropagation();
				let r = n();
				r != null && this.options.onClick && this.options.onClick(t, r);
			};
			return this.options.onClick && r.addEventListener("click", a), i(), {
				dom: r,
				destroy() {
					r.removeEventListener("click", a);
				}
			};
		};
	}
});
Extension.create({
	name: "Mathematics",
	addOptions() {
		return {
			inlineOptions: void 0,
			blockOptions: void 0,
			katexOptions: void 0
		};
	},
	addExtensions() {
		return [BlockMath.configure({
			...this.options.blockOptions,
			katexOptions: this.options.katexOptions
		}), InlineMath.configure({
			...this.options.inlineOptions,
			katexOptions: this.options.katexOptions
		})];
	}
});
var TRAILING_BLANK_LINES = /\n[^\S\n]*(?:\n[^\S\n]*)+$/;
function extractAbsorbedBlankLines(e) {
	return e.flatMap((t, n) => {
		if (t.type === "space" || e[n + 1]?.type === "space") return [t];
		let r = (t.raw || "").match(TRAILING_BLANK_LINES);
		return r ? [{
			...t,
			raw: (t.raw || "").slice(0, -r[0].length)
		}, {
			type: "space",
			raw: r[0]
		}] : [t];
	});
}
function wrapInMarkdownBlock(e, t) {
	let n = t.split("\n").flatMap((e) => [e, ""]).map((t) => `${e}${t}`).join("\n");
	return n.slice(0, n.length - 1);
}
function findMarksToClose(e, t) {
	let n = [];
	return Array.from(e.entries()).forEach(([e, r]) => {
		if (!t) {
			n.push(e);
			return;
		}
		(t.marks || []).find((t) => t.type === e && attrsEqual(t.attrs, r.attrs)) || n.push(e);
	}), n;
}
function findMarksToOpen(e, t) {
	let n = [];
	return Array.from(t.entries()).forEach(([t, r]) => {
		let i = e.get(t);
		(!i || !attrsEqual(i.attrs, r.attrs)) && n.push({
			type: t,
			mark: r
		});
	}), n;
}
function findMarksToCloseAtEnd(e, t, n, r) {
	let i = !n, a = n && (!n.marks || n.marks.length === 0), o = n && n.marks && !r(t, new Map(n.marks.map((e) => [e.type, e]))), s = [];
	return (i || a || o) && (n && n.marks ? Array.from(e.entries()).reverse().forEach(([e, t]) => {
		n.marks.find((n) => n.type === e && attrsEqual(n.attrs, t.attrs)) || s.push(e);
	}) : (i || a) && s.push(...Array.from(e.keys()).reverse())), s;
}
function closeMarksBeforeNode(e, t) {
	let n = "";
	return Array.from(e.keys()).reverse().forEach((r) => {
		let i = t(r, e.get(r));
		i && (n = i + n);
	}), e.clear(), n;
}
function reopenMarksAfterNode(e, t, n) {
	let r = "";
	return Array.from(e.entries()).forEach(([e, i]) => {
		let a = n(e, i);
		a && (r += a), t.set(e, i);
	}), r;
}
function isTaskItem(e) {
	let t = (e.raw || e.text || "").match(/^(\s*)[-+*]\s+\[([ xX])\]\s+/);
	return t ? {
		isTask: !0,
		checked: t[2].toLowerCase() === "x",
		indentLevel: t[1].length
	} : {
		isTask: !1,
		indentLevel: 0
	};
}
function assumeContentType(e, t) {
	return typeof e == "string" ? t : "json";
}
var STANDARD_HTML_TAGS = /* @__PURE__ */ new Set(/* @__PURE__ */ "a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.link.main.map.mark.menu.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.search.section.select.slot.small.source.span.strong.style.sub.summary.sup.svg.circle.clippath.defs.ellipse.foreignobject.g.image.line.lineargradient.mask.path.polygon.polyline.radialgradient.rect.stop.switch.symbol.textpath.tspan.use.table.tbody.td.template.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr".split(".")), HTML_TAG_NAME_PATTERN = /<\/?([a-zA-Z][\w-]*)/g;
function extractHtmlTagNames(e) {
	let t = [], n;
	for (; (n = HTML_TAG_NAME_PATTERN.exec(e)) !== null;) t.push(n[1].toLowerCase());
	return t;
}
function isHtmlUnknownTagName(e) {
	let t = e.toLowerCase();
	return t.includes("-") ? !1 : !STANDARD_HTML_TAGS.has(t);
}
function htmlContainsUnrecognizedTag(e, t) {
	return extractHtmlTagNames(e).some((e) => isHtmlUnknownTagName(e) ? !t.has(e) : !1);
}
var MarkdownManager = class {
	constructor(e) {
		var t, n;
		this.activeParseLexer = null, this.extensionRanks = /* @__PURE__ */ new Map(), this.baseExtensions = [], this.extensions = [], this.codeTypes = /* @__PURE__ */ new Set(), this.schemaParseDomTagsCache = null, this.inlineNodeTypesCache = null, this.lastParseResult = null, this.markedInstance = e?.marked ?? g, this.indentStyle = (e == null || (t = e.indentation) == null ? void 0 : t.style) ?? "space", this.indentSize = (e == null || (n = e.indentation) == null ? void 0 : n.size) ?? 2, this.baseExtensions = e?.extensions || [], e?.markedOptions && typeof this.markedInstance.setOptions == "function" && this.markedInstance.setOptions(e.markedOptions), this.registry = /* @__PURE__ */ new Map(), this.nodeTypeRegistry = /* @__PURE__ */ new Map(), e?.extensions && (this.baseExtensions = e.extensions, sortExtensions(flattenExtensions(e.extensions)).forEach((e) => this.registerExtension(e)));
	}
	get instance() {
		return this.markedInstance;
	}
	get indentCharacter() {
		return this.indentStyle === "space" ? " " : "	";
	}
	get indentString() {
		return this.indentCharacter.repeat(this.indentSize);
	}
	hasMarked() {
		return !!this.markedInstance;
	}
	registerExtension(e) {
		this.extensions.push(e);
		let t = callOrReturn(getExtensionField(e, "code")), n = e.name;
		t && this.codeTypes.add(n), this.extensionRanks.has(n) || this.extensionRanks.set(n, this.extensionRanks.size);
		let r = getExtensionField(e, "markdownTokenName") || n, i = getExtensionField(e, "parseMarkdown"), a = getExtensionField(e, "renderMarkdown"), o = getExtensionField(e, "markdownTokenizer"), s = getExtensionField(e, "markdownOptions") ?? null, c = {
			tokenName: r,
			nodeName: n,
			parseMarkdown: i,
			renderMarkdown: a,
			isIndenting: s?.indentsContent ?? !1,
			htmlReopen: s?.htmlReopen,
			tokenizer: o
		};
		if (r && i) {
			let e = this.registry.get(r) || [];
			e.push(c), this.registry.set(r, e);
		}
		if (a) {
			let e = this.nodeTypeRegistry.get(n) || [];
			e.push(c), this.nodeTypeRegistry.set(n, e);
		}
		o && this.hasMarked() && this.registerTokenizer(o);
	}
	createLexer() {
		return new this.markedInstance.Lexer(this.markedInstance.defaults);
	}
	createTokenizerHelpers(e) {
		return {
			inlineTokens: (t) => e.inlineTokens(t),
			blockTokens: (t) => e.blockTokens(t)
		};
	}
	tokenizeInline(e) {
		return (this.activeParseLexer ?? this.createLexer()).inlineTokens(e);
	}
	registerTokenizer(e) {
		if (!this.hasMarked()) return;
		let { name: t, start: n, level: r = "inline", tokenize: i } = e, a = this.createTokenizerHelpers.bind(this), o = this.createLexer.bind(this), s;
		s = n ? typeof n == "function" ? n : (e) => e.indexOf(n) : (e) => {
			let t = i(e, [], this.createTokenizerHelpers(this.createLexer()));
			return t && t.raw ? e.indexOf(t.raw) : -1;
		};
		let c = {
			name: t,
			level: r,
			start: s,
			tokenizer(e, n) {
				let r = i(e, n, this.lexer ? a(this.lexer) : a(o()));
				if (r && r.type) return {
					...r,
					type: r.type || t,
					raw: r.raw || "",
					tokens: r.tokens || []
				};
			},
			childTokens: []
		};
		this.markedInstance.use({ extensions: [c] });
	}
	getHandlersForToken(e) {
		try {
			return this.registry.get(e) || [];
		} catch {
			return [];
		}
	}
	getHandlerForToken(e) {
		let t = this.getHandlersForToken(e);
		if (t.length > 0) return t[0];
		let n = this.getHandlersForNodeType(e);
		return n.length > 0 ? n[0] : void 0;
	}
	getHandlersForNodeType(e) {
		try {
			return this.nodeTypeRegistry.get(e) || [];
		} catch {
			return [];
		}
	}
	serialize(e) {
		if (!e) return "";
		let t = this.renderNodes(e, e);
		return this.isEmptyOutput(t) ? "" : t;
	}
	isEmptyOutput(e) {
		return !e || e.trim() === "" ? !0 : e.replace(/&nbsp;/g, "").replace(/\u00A0/g, "").trim() === "";
	}
	parse(e) {
		if (!this.hasMarked()) throw Error("No marked instance available for parsing");
		let t = this.activeParseLexer, n = this.createLexer();
		this.activeParseLexer = n;
		try {
			let t = n.lex(e);
			return {
				type: "doc",
				content: this.parseTokens(t, !0)
			};
		} finally {
			this.activeParseLexer = t;
		}
	}
	parseTokens(e, t = !1) {
		let n = t ? extractAbsorbedBlankLines(e) : e, r = n.reduce((e, t, n) => (t.type !== "space" && e.push(n), e), []), i = -1, a = 0;
		return n.flatMap((e, n) => {
			for (; a < r.length && r[a] < n;) i = r[a], a += 1;
			if (t && e.type === "space") {
				let t = r[a] ?? -1;
				return this.createImplicitEmptyParagraphsFromSpace(e, i, t);
			}
			let o = this.parseToken(e, t);
			return o === null ? [] : Array.isArray(o) ? o : [o];
		});
	}
	createImplicitEmptyParagraphsFromSpace(e, t, n) {
		let r = this.countParagraphSeparators(e.raw || "");
		if (r === 0) return [];
		let i = Math.max(r - (t === -1 || n === -1 ? 0 : 1), 0);
		return Array.from({ length: i }, () => ({
			type: "paragraph",
			content: []
		}));
	}
	countParagraphSeparators(e) {
		return (e.replace(/\r\n/g, "\n").match(/\n\n/g) || []).length;
	}
	parseToken(e, t = !1) {
		if (!e.type) return null;
		if (e.type === "list") return this.parseListToken(e);
		let n = this.getHandlersForToken(e.type), r = this.createParseHelpers();
		if (n.find((t) => {
			if (!t.parseMarkdown) return !1;
			let n = t.parseMarkdown(e, r), i = this.normalizeParseResult(n);
			return i && (!Array.isArray(i) || i.length > 0) ? (this.lastParseResult = i, !0) : !1;
		}) && this.lastParseResult) {
			let e = this.lastParseResult;
			return this.lastParseResult = null, e;
		}
		return this.parseFallbackToken(e, t);
	}
	parseListToken(e) {
		if (!e.items || e.items.length === 0) return this.parseTokenWithHandlers(e);
		let t = e.items.some((e) => isTaskItem(e).isTask), n = e.items.some((e) => !isTaskItem(e).isTask);
		if (!t || !n || this.getHandlersForToken("taskList").length === 0) return this.parseTokenWithHandlers(e);
		let r = [], i = [], a = null;
		for (let t = 0; t < e.items.length; t += 1) {
			let n = e.items[t], { isTask: o, checked: s, indentLevel: c } = isTaskItem(n), l = n;
			if (o) {
				let e = (n.raw || n.text || "").split("\n"), t = e[0].match(/^\s*[-+*]\s+\[([ xX])\]\s+(.*)$/), r = t ? t[2] : "", i = [];
				if (e.length > 1 && e.slice(1).join("\n").trim()) {
					let t = e.slice(1), n = t.filter((e) => e.trim());
					if (n.length > 0) {
						let e = Math.min(...n.map((e) => e.length - e.trimStart().length)), r = t.map((t) => t.trim() ? t.slice(e) : "").join("\n").trim();
						r && (i = this.markedInstance.lexer(`${r}\n`));
					}
				}
				l = {
					type: "taskItem",
					raw: "",
					mainContent: r,
					indentLevel: c,
					checked: s ?? !1,
					text: r,
					tokens: this.tokenizeInline(r),
					nestedTokens: i
				};
			}
			let u = o ? "taskList" : "list";
			a === u ? i.push(l) : (i.length > 0 && r.push({
				type: a,
				items: i
			}), i = [l], a = u);
		}
		i.length > 0 && r.push({
			type: a,
			items: i
		});
		let o = [];
		for (let t = 0; t < r.length; t += 1) {
			let n = r[t], i = {
				...e,
				type: n.type,
				items: n.items
			}, a = this.parseToken(i);
			a && (Array.isArray(a) ? o.push(...a) : o.push(a));
		}
		return o.length > 0 ? o : null;
	}
	parseTokenWithHandlers(e) {
		if (!e.type) return null;
		let t = this.getHandlersForToken(e.type), n = this.createParseHelpers();
		if (t.find((t) => {
			if (!t.parseMarkdown) return !1;
			let r = t.parseMarkdown(e, n), i = this.normalizeParseResult(r);
			return i && (!Array.isArray(i) || i.length > 0) ? (this.lastParseResult = i, !0) : !1;
		}) && this.lastParseResult) {
			let e = this.lastParseResult;
			return this.lastParseResult = null, e;
		}
		return this.parseFallbackToken(e);
	}
	createParseHelpers() {
		return {
			parseInline: (e) => this.parseInlineTokens(e),
			tokenizeInline: (e) => this.tokenizeInline(e),
			parseChildren: (e) => this.parseTokens(e),
			parseBlockChildren: (e) => this.parseTokens(e, !0),
			createTextNode: (e, t) => ({
				type: "text",
				text: e,
				marks: t || void 0
			}),
			createNode: (e, t, n) => {
				let r = {
					type: e,
					attrs: t || void 0,
					content: n || void 0
				};
				return (!t || Object.keys(t).length === 0) && delete r.attrs, r;
			},
			applyMark: (e, t, n) => ({
				mark: e,
				content: t,
				attrs: n && Object.keys(n).length > 0 ? n : void 0
			})
		};
	}
	escapeRegex(e) {
		return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	parseInlineTokens(e) {
		let t = [];
		for (let n = 0; n < e.length; n += 1) {
			let r = e[n];
			if (r.type === "text") t.push({
				type: "text",
				text: decodeHtmlEntities(r.text || "")
			});
			else if (r.type === "escape") t.push({
				type: "text",
				text: r.text || ""
			});
			else if (r.type === "html") {
				let i = (r.raw ?? r.text ?? "").toString(), a = /^<\/[\s]*[\w-]+/i.test(i), o = i.match(/^<[\s]*([\w-]+)(\s|>|\/|$)/i);
				if (!a && o && !/\/>$/.test(i)) {
					let r = o[1], a = this.escapeRegex(r), s = RegExp(`^<\\/\\s*${a}\\b`, "i"), c = -1, l = [i];
					for (let t = n + 1; t < e.length; t += 1) {
						let n = e[t], r = (n.raw ?? n.text ?? "").toString();
						if (l.push(r), n.type === "html" && s.test(r)) {
							c = t;
							break;
						}
					}
					if (c !== -1) {
						let e = l.join(""), r = {
							type: "html",
							raw: e,
							text: e,
							block: !1
						}, i = this.parseHTMLToken(r);
						if (i) {
							let e = this.normalizeParseResult(i);
							Array.isArray(e) ? t.push(...e) : e && t.push(e);
						}
						n = c;
						continue;
					}
				}
				let s = this.parseHTMLToken(r);
				if (s) {
					let e = this.normalizeParseResult(s);
					Array.isArray(e) ? t.push(...e) : e && t.push(e);
				}
			} else if (r.type) {
				let e = this.getHandlerForToken(r.type);
				if (e && e.parseMarkdown) {
					let n = this.createParseHelpers(), i = e.parseMarkdown(r, n);
					if (this.isMarkResult(i)) {
						let e = this.applyMarkToContent(i.mark, i.content, i.attrs);
						t.push(...e);
					} else {
						let e = this.normalizeParseResult(i);
						Array.isArray(e) ? t.push(...e) : e && t.push(e);
					}
				} else r.tokens && t.push(...this.parseInlineTokens(r.tokens));
			}
		}
		for (let e = t.length - 1; e > 0; --e) {
			let n = t[e], r = t[e - 1];
			n.type === "text" && r.type === "text" && marksEqual(n.marks || [], r.marks || []) && (r.text = (r.text || "") + (n.text || ""), t.splice(e, 1));
		}
		return t;
	}
	applyMarkToContent(e, t, n) {
		return t.map((t) => {
			if (t.type === "text") {
				let r = t.marks || [], i = n ? {
					type: e,
					attrs: n
				} : { type: e };
				return {
					...t,
					marks: [...r, i]
				};
			}
			return {
				...t,
				content: t.content ? this.applyMarkToContent(e, t.content, n) : void 0
			};
		});
	}
	isMarkResult(e) {
		return e && typeof e == "object" && "mark" in e;
	}
	normalizeParseResult(e) {
		return e ? this.isMarkResult(e) ? e.content : e : null;
	}
	parseFallbackToken(e, t = !1) {
		switch (e.type) {
			case "paragraph": return {
				type: "paragraph",
				content: e.tokens ? this.parseInlineTokens(e.tokens) : []
			};
			case "heading": return {
				type: "heading",
				attrs: { level: e.depth || 1 },
				content: e.tokens ? this.parseInlineTokens(e.tokens) : []
			};
			case "text": return {
				type: "text",
				text: decodeHtmlEntities(e.text || "")
			};
			case "html": return this.parseHTMLToken(e);
			case "escape": return {
				type: "text",
				text: e.text || ""
			};
			case "space": return null;
			default: return e.tokens ? this.parseTokens(e.tokens, t) : null;
		}
	}
	parseHTMLToken(e) {
		let t = e.text || e.raw || "";
		if (!t.trim()) return null;
		if (this.isUnrecognizedHtml(t) || typeof window > "u" || window.DOMParser === void 0) return this.htmlAsLiteralText(t, !!e.block);
		try {
			let n = generateJSON(t, this.baseExtensions);
			if (n.type === "doc" && n.content) {
				if (e.block) return n.content;
				let t = this.toInlineContent(n.content);
				return t.length > 0 ? t : null;
			}
			return n;
		} catch (e) {
			throw Error(`Failed to parse HTML in markdown: ${e}`);
		}
	}
	toInlineContent(e) {
		let t = this.getInlineNodeTypes();
		return e.flatMap((e) => e.type && t.has(e.type) ? [e] : e.content ? this.toInlineContent(e.content) : []);
	}
	getInlineNodeTypes() {
		if (this.inlineNodeTypesCache) return this.inlineNodeTypesCache;
		let e = /* @__PURE__ */ new Set(["text"]);
		try {
			let t = getSchema(this.baseExtensions);
			Object.values(t.nodes).forEach((t) => {
				t.isInline && e.add(t.name);
			});
		} catch {}
		return this.inlineNodeTypesCache = e, e;
	}
	isUnrecognizedHtml(e) {
		return htmlContainsUnrecognizedTag(e, this.getSchemaParseDomTags());
	}
	getSchemaParseDomTags() {
		if (this.schemaParseDomTagsCache) return this.schemaParseDomTagsCache;
		let e = /* @__PURE__ */ new Set();
		try {
			let t = getSchema(this.baseExtensions), n = (t) => {
				let n = t?.parseDOM;
				Array.isArray(n) && n.forEach((t) => {
					if (typeof t?.tag == "string") {
						let n = t.tag.match(/^[a-zA-Z][\w-]*/);
						n && e.add(n[0].toLowerCase());
					}
				});
			};
			Object.values(t.nodes).forEach((e) => n(e.spec)), Object.values(t.marks).forEach((e) => n(e.spec));
		} catch {}
		return this.schemaParseDomTagsCache = e, e;
	}
	htmlAsLiteralText(e, t) {
		let n = e.replace(/\s+$/, "");
		return n ? t ? {
			type: "paragraph",
			content: [{
				type: "text",
				text: n
			}]
		} : {
			type: "text",
			text: n
		} : null;
	}
	encodeTextForMarkdown(e, t, n) {
		return n?.type != null && this.codeTypes.has(n.type) || (t.marks || []).some((e) => this.codeTypes.has(typeof e == "string" ? e : e.type)) ? e : this.escapeMarkdownSyntax(encodeHtmlEntities(e));
	}
	escapeMarkdownSyntax(e) {
		return e.replace(/([\\`*_[\]~])/g, "\\$1");
	}
	renderNodeToMarkdown(e, t, n = 0, r = 0, i = {}) {
		if (e.type === "text") return this.encodeTextForMarkdown(e.text || "", e, t);
		if (!e.type) return "";
		let a = this.getHandlerForToken(e.type);
		if (!a) return "";
		let o = Array.isArray(t?.content) && n > 0 ? t.content[n - 1] : void 0, s = {
			renderChildren: (t, i) => {
				let o = a.isIndenting ? r + 1 : r;
				return !Array.isArray(t) && t.content ? this.renderNodes(t.content, e, i || "", n, o) : this.renderNodes(t, e, i || "", n, o);
			},
			renderChild: (t, n) => {
				let i = a.isIndenting ? r + 1 : r;
				return this.renderNodeToMarkdown(t, e, n, i);
			},
			indent: (e) => this.indentString + e,
			wrapInBlock: wrapInMarkdownBlock
		}, c = {
			index: n,
			level: r,
			parentType: t?.type,
			previousNode: o,
			meta: {
				parentAttrs: t?.attrs,
				...i
			}
		};
		return a.renderMarkdown?.call(a, e, s, c) || "";
	}
	renderNodes(e, t, n = "", r = 0, i = 0) {
		return Array.isArray(e) ? this.renderNodesWithMarkBoundaries(e, t, n, i) : e.type ? this.renderNodeToMarkdown(e, t, r, i) : "";
	}
	renderNodesWithMarkBoundaries(e, t, n = "", r = 0) {
		let i = [], a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
		return e.forEach((n, c) => {
			let l = c < e.length - 1 ? e[c + 1] : null;
			if (n.type) if (n.type === "text") {
				let e = this.encodeTextForMarkdown(n.text || "", n, t), r = new Map((n.marks || []).map((e) => [e.type, e])), c = this.getMarksToOpenForSerialization(a, r, l), u = findMarksToClose(r, l);
				if (e.length > 0 && e.trim().length === 0 && r.size > 0) {
					let e = new Set(u.filter((e) => !a.has(e)));
					e.size > 0 && (r = new Map(Array.from(r).filter(([t]) => !e.has(t))), c = this.getMarksToOpenForSerialization(a, r, l), u = findMarksToClose(r, l));
				}
				let d = u.filter((e) => a.has(e)), f = d.length > 0 && c.length > 0, p = "";
				if (u.length > 0 && !f) {
					let t = e.match(/(\s+)$/);
					t && (p = t[1], e = e.slice(0, -p.length));
				}
				f || u.slice().reverse().forEach((t) => {
					if (!a.has(t)) return;
					let n = r.get(t), i = this.getMarkClosing(t, n, s.get(t));
					i && (e += i), a.has(t) && (a.delete(t), s.delete(t));
				});
				let h = "";
				if (c.length > 0) {
					let t = e.match(/^(\s+)/);
					t && (h = t[1], e = e.slice(h.length));
				}
				c.forEach(({ type: t, mark: n }) => {
					let r = o.has(t) ? "html" : "markdown", i = this.getMarkOpening(t, n, r);
					i && (e = i + e), s.set(t, r), o.delete(t);
				}), f || c.slice().reverse().forEach(({ type: e, mark: t }) => {
					a.set(e, t);
				}), e = h + e;
				let S;
				if (f) {
					let e = new Set((l?.marks || []).map((e) => e.type));
					c.forEach(({ type: t }) => {
						e.has(t) && this.getHtmlReopenTags(t) && o.add(t);
					});
					let t = Array.from(a.keys()), n = d.slice().sort((e, n) => t.indexOf(n) - t.indexOf(e));
					S = [...c.map((e) => e.type), ...n];
				} else S = findMarksToCloseAtEnd(a, r, l, this.markSetsEqual.bind(this));
				let A = "";
				if (S.length > 0) {
					let t = e.match(/(\s+)$/);
					t && (A = t[1], e = e.slice(0, -A.length));
				}
				S.forEach((t) => {
					let n = a.get(t) ?? r.get(t), i = this.getMarkClosing(t, n, s.get(t));
					i && (e += i), a.delete(t), s.delete(t);
				}), e += A, e += p, i.push(e);
			} else {
				let e = new Set((n.marks || []).map((e) => e.type)), o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
				a.forEach((t, n) => {
					e.has(n) && (o.set(n, t), l.set(n, s.get(n) ?? "markdown"));
				});
				let u = closeMarksBeforeNode(a, (e, t) => this.getMarkClosing(e, t, s.get(e)));
				s.clear();
				let d = this.renderNodeToMarkdown(n, t, c, r), f = n.type === "hardBreak" ? "" : reopenMarksAfterNode(o, a, (e, t) => {
					let n = l.get(e) ?? "markdown";
					return s.set(e, n), this.getMarkOpening(e, t, n);
				});
				i.push(u + d + f);
			}
		}), i.join(n);
	}
	getMarkOpening(e, t, n = "markdown") {
		if (n === "html") return this.getHtmlReopenTags(e)?.open || "";
		let r = this.getHandlersForNodeType(e), i = r.length > 0 ? r[0] : void 0;
		if (!i || !i.renderMarkdown) return "";
		let a = "__TIPTAP_MARKDOWN_PLACEHOLDER__", o = {
			type: e,
			attrs: t.attrs || {},
			content: [{
				type: "text",
				text: a
			}]
		};
		try {
			let e = i.renderMarkdown(o, {
				renderChildren: () => a,
				renderChild: () => a,
				indent: (e) => e,
				wrapInBlock: (e, t) => e + t
			}, {
				index: 0,
				level: 0,
				parentType: "text",
				meta: {}
			}), t = e.indexOf(a);
			return t >= 0 ? e.substring(0, t) : "";
		} catch (t) {
			throw Error(`Failed to get mark opening for ${e}: ${t}`);
		}
	}
	getMarkClosing(e, t, n = "markdown") {
		if (n === "html") return this.getHtmlReopenTags(e)?.close || "";
		let r = this.getHandlersForNodeType(e), i = r.length > 0 ? r[0] : void 0;
		if (!i || !i.renderMarkdown) return "";
		let a = "__TIPTAP_MARKDOWN_PLACEHOLDER__", o = {
			type: e,
			attrs: t.attrs || {},
			content: [{
				type: "text",
				text: a
			}]
		};
		try {
			let e = i.renderMarkdown(o, {
				renderChildren: () => a,
				renderChild: () => a,
				indent: (e) => e,
				wrapInBlock: (e, t) => e + t
			}, {
				index: 0,
				level: 0,
				parentType: "text",
				meta: {}
			}), t = e.indexOf(a), n = t + 33;
			return t >= 0 ? e.substring(n) : "";
		} catch (t) {
			throw Error(`Failed to get mark closing for ${e}: ${t}`);
		}
	}
	getHtmlReopenTags(e) {
		let t = this.getHandlersForNodeType(e);
		return (t.length > 0 ? t[0] : void 0)?.htmlReopen;
	}
	markSetsEqual(e, t) {
		return e.size === t.size ? Array.from(e.entries()).every(([e, n]) => {
			let r = t.get(e);
			return r && attrsEqual(n.attrs, r.attrs);
		}) : !1;
	}
	getMarksToOpenForSerialization(e, t, n) {
		let r = findMarksToOpen(e, t);
		if (r.length <= 1) return r;
		let i = n?.marks || [], a = (e, t) => i.some((n) => n.type === e && attrsEqual(n.attrs, t)), o = (e, t) => {
			let n = this.extensionRanks.get(e.type) ?? 2 ** 53 - 1, r = this.extensionRanks.get(t.type) ?? 2 ** 53 - 1;
			return n === r ? e.type.localeCompare(t.type) : r - n;
		}, s = r.filter((e) => !a(e.type, e.mark.attrs)).sort(o), c = r.filter((e) => a(e.type, e.mark.attrs)).sort(o);
		return [...s, ...c];
	}
}, Markdown = Extension.create({
	name: "markdown",
	addOptions() {
		return {
			indentation: {
				style: "space",
				size: 2
			},
			marked: void 0,
			markedOptions: {}
		};
	},
	addCommands() {
		return {
			setContent: (e, t) => {
				if (!t?.contentType || assumeContentType(e, t?.contentType) !== "markdown" || !this.editor.markdown) return commands_exports.setContent(e, t);
				let n = this.editor.markdown.parse(e);
				return commands_exports.setContent(n, t);
			},
			insertContent: (e, t) => {
				if (!t?.contentType || assumeContentType(e, t?.contentType) !== "markdown" || !this.editor.markdown) return commands_exports.insertContent(e, t);
				let n = this.editor.markdown.parse(e);
				return commands_exports.insertContent(n, t);
			},
			insertContentAt: (e, t, n) => {
				if (!n?.contentType || assumeContentType(t, n?.contentType) !== "markdown" || !this.editor.markdown) return commands_exports.insertContentAt(e, t, n);
				let r = this.editor.markdown.parse(t);
				return commands_exports.insertContentAt(e, r, n);
			}
		};
	},
	addStorage() {
		return { manager: new MarkdownManager({
			indentation: this.options.indentation,
			marked: this.options.marked,
			markedOptions: this.options.markedOptions,
			extensions: []
		}) };
	},
	onBeforeCreate() {
		if (this.editor.markdown) {
			console.error("[tiptap][markdown]: There is already a `markdown` property on the editor instance. This might lead to unexpected behavior.");
			return;
		}
		if (this.storage.manager = new MarkdownManager({
			indentation: this.options.indentation,
			marked: this.options.marked,
			markedOptions: this.options.markedOptions,
			extensions: this.editor.extensionManager.baseExtensions
		}), this.editor.markdown = this.storage.manager, this.editor.getMarkdown = () => this.storage.manager.serialize(this.editor.getJSON()), !this.editor.options.contentType || assumeContentType(this.editor.options.content, this.editor.options.contentType) !== "markdown") return;
		if (!this.editor.markdown) throw Error("[tiptap][markdown]: The `contentType` option is set to \"markdown\", but the Markdown extension is not added to the editor. Please add the Markdown extension to use this feature.");
		if (this.editor.options.content === void 0 || typeof this.editor.options.content != "string") throw Error("[tiptap][markdown]: The `contentType` option is set to \"markdown\", but the initial content is not a string. Please provide the initial content as a markdown string.");
		let e = this.editor.markdown.parse(this.editor.options.content);
		e.content?.length && (this.editor.options.content = e);
	}
});
function withoutOptionalEscapes(e) {
	return e.replace(/\\([\\_[\]])/g, (e, t) => t === "\\" ? e : t);
}
function preserveLiteralMarkdownSource(e, t, n) {
	let r = e.markdown, i = r.renderNodeToMarkdown.bind(r), a = e.getMarkdown.bind(e), o = /* @__PURE__ */ new WeakMap(), s;
	r.renderNodeToMarkdown = (a, ...c) => {
		let l = i(a, ...c), u = s?.get(a);
		if (!u || !/\\[[\]]/.test(l)) return l;
		let d = o.get(u);
		if (d?.markdown === l) return d.result;
		let f = withoutOptionalEscapes(l), p = l;
		try {
			let i = r.parse(encodeRawMarkdownHtmlForRichEditor(f, t, { htmlSuperscriptLinks: n }));
			i.content?.length === 1 && e.schema.nodeFromJSON(i.content[0]).eq(u) && (p = f);
		} catch {}
		return o.set(u, {
			markdown: l,
			result: p
		}), p;
	}, e.getMarkdown = () => {
		let t = a();
		if (!/\\[[\]]/.test(t) || /^ {0,3}\[[^\n]*\]:/m.test(withoutOptionalEscapes(t))) return t;
		let n = e.getJSON();
		s = /* @__PURE__ */ new Map(), n.content?.forEach((t, n) => {
			(t.type === "paragraph" || t.type === "heading") && s.set(t, e.state.doc.child(n));
		});
		try {
			return r.serialize(n);
		} finally {
			s = void 0;
		}
	};
}
const RichMarkdownExtension = Markdown.extend({ onBeforeCreate(e) {
	this.parent?.(e), this.editor.options.contentType === "markdown" && typeof this.editor.options.content == "string" && (this.editor.options.content = this.editor.schema.topNodeType.createAndFill().toJSON());
} });
function createRichMarkdownExtension(e, t = !1) {
	return RichMarkdownExtension.extend({ onBeforeCreate(n) {
		this.parent?.(n), preserveLiteralMarkdownSource(this.editor, e, t);
	} });
}
var isNodeVisible = (e, t) => {
	let n = t.view.domAtPos(e).node, r = n.nodeType === Node.ELEMENT_NODE ? n : n.parentElement;
	return r ? r.offsetParent !== null : !1;
}, findClosestVisibleNode = (e, t, n) => {
	for (let r = e.depth; r > 0; --r) {
		let i = e.node(r), a = t(i), o = isNodeVisible(e.start(r), n);
		if (a && o) return {
			pos: r > 0 ? e.before(r) : 0,
			start: e.start(r),
			depth: r,
			node: i
		};
	}
}, setGapCursor = (e, t) => {
	let { state: n, view: r, extensionManager: i } = e, { schema: a, selection: o } = n, { empty: s, $anchor: c } = o, l = !!i.extensions.find((e) => e.name === "gapCursor");
	if (!s || c.parent.type !== a.nodes.detailsSummary || !l || t === "right" && c.parentOffset !== c.parent.nodeSize - 2) return !1;
	let u = findParentNode((e) => e.type === a.nodes.details)(o);
	if (!u) return !1;
	let d = findChildren(u.node, (e) => e.type === a.nodes.detailsContent);
	if (!d.length || isNodeVisible(u.start + d[0].pos + 1, e)) return !1;
	let f = n.doc.resolve(u.pos + u.node.nodeSize), h = GapCursor.findFrom(f, 1, !1);
	if (!h) return !1;
	let { tr: S } = n, A = new GapCursor(h);
	return S.setSelection(A), S.scrollIntoView(), r.dispatch(S), !0;
}, Details = Node$1.create({
	name: "details",
	content: "detailsSummary detailsContent",
	group: "block",
	defining: !0,
	isolating: !0,
	allowGapCursor: !1,
	addOptions() {
		return {
			persist: !1,
			openClassName: "is-open",
			HTMLAttributes: {},
			renderToggleButton: ({ element: e, isOpen: t }) => {
				e.setAttribute("aria-label", t ? "Collapse details content" : "Expand details content");
			}
		};
	},
	addAttributes() {
		return this.options.persist ? { open: {
			default: !1,
			parseHTML: (e) => e.hasAttribute("open"),
			renderHTML: ({ open: e }) => e ? { open: "" } : {}
		} } : [];
	},
	parseHTML() {
		return [{ tag: "details" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"details",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	},
	...createBlockMarkdownSpec({
		nodeName: "details",
		content: "block"
	}),
	addNodeView() {
		return ({ editor: e, getPos: t, node: n, HTMLAttributes: r }) => {
			let i = document.createElement("div"), a = mergeAttributes(this.options.HTMLAttributes, r, { "data-type": this.name });
			Object.entries(a).forEach(([e, t]) => i.setAttribute(e, t));
			let o = document.createElement("button");
			o.type = "button";
			let s = (e) => {
				this.options.renderToggleButton({
					element: o,
					...e
				});
			};
			i.append(o);
			let c = document.createElement("div");
			i.append(c);
			let l = (e) => {
				let { setToValue: t, node: r = n } = e || {};
				if (t !== void 0) if (t) {
					if (i.classList.contains(this.options.openClassName)) return;
					i.classList.add(this.options.openClassName);
				} else {
					if (!i.classList.contains(this.options.openClassName)) return;
					i.classList.remove(this.options.openClassName);
				}
				else i.classList.toggle(this.options.openClassName);
				s({
					isOpen: i.classList.contains(this.options.openClassName),
					node: r
				});
				let a = new Event("toggleDetailsContent");
				c.querySelector(":scope > div[data-type=\"detailsContent\"]")?.dispatchEvent(a);
			};
			return s({
				isOpen: !!n.attrs.open,
				node: n
			}), n.attrs.open && setTimeout(() => l()), o.addEventListener("click", () => {
				if (l(), !this.options.persist) {
					e.commands.focus(void 0, { scrollIntoView: !1 });
					return;
				}
				if (e.isEditable && typeof t == "function") {
					let { from: n, to: r } = e.state.selection;
					e.chain().command(({ tr: e }) => {
						let n = t();
						if (typeof n != "number") return !1;
						let r = e.doc.nodeAt(n);
						return r?.type === this.type ? (e.setNodeMarkup(n, void 0, { open: !r.attrs.open }), !0) : !1;
					}).setTextSelection({
						from: n,
						to: r
					}).focus(void 0, { scrollIntoView: !1 }).run();
				}
			}), {
				dom: i,
				contentDOM: c,
				ignoreMutation(e) {
					if (e.type === "selection") return !1;
					let t = e.target, n = i.contains(t);
					return o.contains(t) || !n || i === t;
				},
				update: (e) => e.type === this.type ? (e.attrs.open === void 0 ? s({
					isOpen: i.classList.contains(this.options.openClassName),
					node: e
				}) : l({
					setToValue: e.attrs.open,
					node: e
				}), !0) : !1
			};
		};
	},
	addCommands() {
		return {
			setDetails: () => ({ state: e, chain: t }) => {
				let { schema: n, selection: r } = e, { $from: i, $to: a } = r, o = i.blockRange(a);
				if (!o) return !1;
				let s = e.doc.slice(o.start, o.end);
				if (!n.nodes.detailsContent.contentMatch.matchFragment(s.content)) return !1;
				let c = s.toJSON()?.content || [];
				return t().insertContentAt({
					from: o.start,
					to: o.end
				}, {
					type: this.name,
					content: [{ type: "detailsSummary" }, {
						type: "detailsContent",
						content: c
					}]
				}).setTextSelection(o.start + 2).run();
			},
			unsetDetails: () => ({ state: e, chain: t }) => {
				let { selection: n, schema: r } = e, i = findParentNode((e) => e.type === this.type)(n);
				if (!i) return !1;
				let a = findChildren(i.node, (e) => e.type === r.nodes.detailsSummary), o = findChildren(i.node, (e) => e.type === r.nodes.detailsContent);
				if (!a.length || !o.length) return !1;
				let s = a[0], c = o[0], l = i.pos, u = e.doc.resolve(l), d = {
					from: l,
					to: l + i.node.nodeSize
				}, f = c.node.content.toJSON() || [], h = [u.parent.type.contentMatch.defaultType?.create(null, s.node.content).toJSON(), ...f];
				return t().insertContentAt(d, h).setTextSelection(l + 1).run();
			}
		};
	},
	addKeyboardShortcuts() {
		return {
			Backspace: () => {
				let { schema: e, selection: t } = this.editor.state, { empty: n, $anchor: r } = t;
				return !n || r.parent.type !== e.nodes.detailsSummary ? !1 : r.parentOffset === 0 ? this.editor.commands.unsetDetails() : this.editor.commands.command(({ tr: e }) => {
					let t = r.pos - 1, n = r.pos;
					return e.delete(t, n), !0;
				});
			},
			Enter: ({ editor: e }) => {
				let { state: t, view: n } = e, { schema: r, selection: i } = t, { $head: a } = i;
				if (a.parent.type !== r.nodes.detailsSummary) return !1;
				let o = isNodeVisible(a.after() + 1, e), s = o ? t.doc.nodeAt(a.after()) : a.node(-2);
				if (!s) return !1;
				let c = o ? 0 : a.indexAfter(-1), l = defaultBlockAt(s.contentMatchAt(c));
				if (!l || !s.canReplaceWith(c, c, l)) return !1;
				let u = l.createAndFill();
				if (!u) return !1;
				let d = o ? a.after() + 1 : a.after(-1), f = t.tr.replaceWith(d, d, u), p = f.doc.resolve(d), h = Selection.near(p, 1);
				return f.setSelection(h), f.scrollIntoView(), n.dispatch(f), !0;
			},
			ArrowRight: ({ editor: e }) => setGapCursor(e, "right"),
			ArrowDown: ({ editor: e }) => setGapCursor(e, "down")
		};
	},
	addProseMirrorPlugins() {
		return [new Plugin({
			key: new PluginKey("detailsSelection"),
			appendTransaction: (e, t, n) => {
				let { editor: r, type: i } = this;
				if (r.view.composing || !e.some((e) => e.selectionSet) || !t.selection.empty || !n.selection.empty || !isActive(n, i.name)) return;
				let { $from: a } = n.selection;
				if (isNodeVisible(a.pos, r)) return;
				let o = findClosestVisibleNode(a, (e) => e.type === i, r);
				if (!o) return;
				let s = findChildren(o.node, (e) => e.type === n.schema.nodes.detailsSummary);
				if (!s.length) return;
				let c = s[0], l = (t.selection.from < n.selection.from ? "forward" : "backward") == "forward" ? o.start + c.pos : o.pos + c.pos + c.node.nodeSize, u = TextSelection.create(n.doc, l);
				return n.tr.setSelection(u);
			}
		})];
	}
}), DetailsContent = Node$1.create({
	name: "detailsContent",
	content: "block+",
	defining: !0,
	selectable: !1,
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [{ tag: `div[data-type="${this.name}"]` }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"div",
			mergeAttributes(this.options.HTMLAttributes, e, { "data-type": this.name }),
			0
		];
	},
	addNodeView() {
		return ({ HTMLAttributes: e }) => {
			let t = document.createElement("div"), n = mergeAttributes(this.options.HTMLAttributes, e, {
				"data-type": this.name,
				hidden: "hidden"
			});
			return Object.entries(n).forEach(([e, n]) => t.setAttribute(e, n)), t.addEventListener("toggleDetailsContent", () => {
				t.toggleAttribute("hidden");
			}), {
				dom: t,
				contentDOM: t,
				ignoreMutation(e) {
					return e.type === "selection" ? !1 : !t.contains(e.target) || t === e.target;
				},
				update: (e) => e.type === this.type
			};
		};
	},
	addKeyboardShortcuts() {
		return { Enter: ({ editor: e }) => {
			let { state: t, view: n } = e, { selection: r } = t, { $from: i, empty: a } = r, o = findParentNode((e) => e.type === this.type)(r);
			if (!a || !o || !o.node.childCount) return !1;
			let s = i.index(o.depth), { childCount: c } = o.node;
			if (c !== s + 1) return !1;
			let l = o.node.type.contentMatch.defaultType?.createAndFill();
			if (!l) return !1;
			let u = t.doc.resolve(o.pos + 1), d = c - 1, f = o.node.child(d), p = u.posAtIndex(d, o.depth);
			if (!f.eq(l)) return !1;
			let h = i.node(-3);
			if (!h) return !1;
			let S = i.indexAfter(-3), A = defaultBlockAt(h.contentMatchAt(S));
			if (!A || !h.canReplaceWith(S, S, A)) return !1;
			let R = A.createAndFill();
			if (!R) return !1;
			let { tr: Y } = t, Z = i.after(-2);
			Y.replaceWith(Z, Z, R);
			let pl = Y.doc.resolve(Z), ml = Selection.near(pl, 1);
			Y.setSelection(ml);
			let hl = p, gl = p + f.nodeSize;
			return Y.delete(hl, gl), Y.scrollIntoView(), n.dispatch(Y), !0;
		} };
	},
	...createBlockMarkdownSpec({ nodeName: "detailsContent" })
}), DetailsSummary = Node$1.create({
	name: "detailsSummary",
	content: "text*",
	defining: !0,
	selectable: !1,
	isolating: !0,
	addOptions() {
		return { HTMLAttributes: {} };
	},
	parseHTML() {
		return [{ tag: "summary" }];
	},
	renderHTML({ HTMLAttributes: e }) {
		return [
			"summary",
			mergeAttributes(this.options.HTMLAttributes, e),
			0
		];
	},
	...createBlockMarkdownSpec({
		nodeName: "detailsSummary",
		content: "inline"
	})
}), RICH_MARKDOWN_PLACEHOLDER = "Write markdown… Type / for blocks.", TOGGLE_TEXT_PLACEHOLDER = "text", TOGGLE_HEADING_PLACEHOLDERS = {
	"heading-1": ["auto.components.editor.rich.markdown.slash.commands.e66e7f04c6", "Heading 1"],
	"heading-2": ["auto.components.editor.rich.markdown.slash.commands.c209a116b7", "Heading 2"],
	"heading-3": ["auto.components.editor.rich.markdown.slash.commands.30566ee962", "Heading 3"],
	"heading-4": ["auto.components.editor.rich.markdown.slash.commands.5f9a0ed7c4", "Heading 4"],
	"heading-5": ["auto.components.editor.rich.markdown.slash.commands.8440fa4acf", "Heading 5"]
};
function toggleHeadingPlaceholder(e) {
	let [t, n] = TOGGLE_HEADING_PLACEHOLDERS[e];
	return translate(t, n);
}
function getRichMarkdownPlaceholder({ editor: e, node: t, pos: n }) {
	if (t.type.name !== "detailsSummary") return RICH_MARKDOWN_PLACEHOLDER;
	let r = e.state.doc.resolve(n).parent;
	if (r.type.name !== "details") return TOGGLE_TEXT_PLACEHOLDER;
	let i = parseToggleHeadingVariant(r.attrs.variant);
	return i ? toggleHeadingPlaceholder(i) : TOGGLE_TEXT_PLACEHOLDER;
}
function moveDetailsSummarySelectionToContent(e) {
	let { state: t, view: n } = e, { selection: r } = t, { $from: i, empty: a } = r;
	if (!a || i.parent.type.name !== "detailsSummary") return !1;
	let o = i.depth - 1;
	if (o < 1) return !1;
	let s = i.node(o);
	if (s.type.name !== "details" || s.attrs.open === !1) return !1;
	let c = s.child(1);
	if (c?.type.name !== "detailsContent") return !1;
	let l = i.before(o) + 1 + s.child(0).nodeSize;
	if (!c.firstChild?.isTextblock) return !1;
	let u = l + 2, d = t.tr.setSelection(TextSelection.near(t.doc.resolve(u), 1));
	return d.scrollIntoView(), n.dispatch(d), !0;
}
function moveFromEmptyDetailsBodyToSummary(e) {
	let { state: t, view: n } = e, { selection: r } = t, { $from: i, empty: a } = r;
	if (!a || !i.parent.isTextblock || i.parent.content.size !== 0 || i.parentOffset !== 0) return !1;
	let o = i.depth - 1;
	if (o < 1) return !1;
	let s = i.node(o);
	if (s.type.name !== "detailsContent" || s.childCount !== 1 || i.index(o) !== 0) return !1;
	let c = o - 1, l = i.node(c);
	if (l.type.name !== "details" || l.childCount < 2) return !1;
	let u = l.child(0);
	if (u.type.name !== "detailsSummary") return !1;
	let d = i.before(c) + 1 + u.nodeSize - 1, p = t.tr.setSelection(TextSelection.near(t.doc.resolve(d), -1));
	return p.scrollIntoView(), n.dispatch(p), !0;
}
function exitEmptyDetailsBody(e) {
	let { state: t, view: n } = e, { selection: r } = t, { $from: i, empty: a } = r;
	if (!a || !i.parent.isTextblock || i.parent.content.size !== 0) return !1;
	let o = i.depth - 1;
	if (o < 1) return !1;
	let s = i.node(o);
	if (s.type.name !== "detailsContent" || i.index(o) !== s.childCount - 1) return !1;
	let c = o - 1;
	if (i.node(c).type.name !== "details") return !1;
	let l = t.schema.nodes.paragraph?.createAndFill();
	if (!l) return !1;
	let u = i.before(i.depth), d = i.after(i.depth), p = s.childCount > 1, h = i.after(c), S = t.tr;
	return p && (S.delete(u, d), h -= d - u), S.insert(h, l), S.setSelection(TextSelection.create(S.doc, h + 1)), S.scrollIntoView(), n.dispatch(S), !0;
}
var OrcaDetails = Details.extend({
	priority: 1e3,
	addAttributes() {
		return {
			...this.parent?.(),
			variant: {
				default: null,
				parseHTML: (e) => parseToggleHeadingVariant(e.getAttribute("data-orca-toggle")),
				renderHTML: ({ variant: e }) => {
					let t = parseToggleHeadingVariant(e);
					return t ? { "data-orca-toggle": t } : {};
				}
			}
		};
	},
	addKeyboardShortcuts() {
		let e = this.parent?.() ?? {};
		return {
			...e,
			Enter: ({ editor: t }) => moveDetailsSummarySelectionToContent(t) || e.Enter?.({ editor: t }) || !1
		};
	},
	markdownTokenizer: {
		name: "details",
		level: "block",
		start: "<details",
		tokenize(e, t, n) {
			let r = matchDetailsHtmlBlock(e, 0);
			if (!r || !isEditableDetailsHtmlBlock(r)) return;
			let i = extractDetailsSummaryHtml(r.inner);
			if (!i) return;
			let a = decodeHtmlEntities(i.content.trim()), o = r.inner.slice(i.rawLength);
			return {
				type: "details",
				raw: r.raw,
				block: !0,
				attributes: parseDetailsAttributes(r.openingAttributes),
				summaryTokens: n.inlineTokens(a),
				bodyTokens: n.blockTokens(detailsBodyHtmlToMarkdown(o))
			};
		}
	},
	parseMarkdown: (e, t) => {
		let n = e;
		if (n.type !== "details") return [];
		let r = t.createNode("detailsSummary", {}, t.parseInline(n.summaryTokens ?? [])), i = t.parseChildren(n.bodyTokens ?? []), a = t.createNode("detailsContent", {}, i.length > 0 ? i : [t.createNode("paragraph")]);
		return t.createNode("details", n.attributes ?? {}, [r, a]);
	},
	renderMarkdown: (e, t) => {
		let n = e.content?.find((e) => e.type === "detailsSummary"), r = e.content?.find((e) => e.type === "detailsContent"), i = escapeDetailsHtml(decodeHtmlEntities(t.renderChildren(n?.content ?? [], ""))), a = t.renderChildren(r?.content ?? [], "\n\n").trim();
		return `<details ${renderDetailsAttributes(e.attrs)}>\n<summary>${i}</summary>\n\n${a}\n\n</details>`;
	}
}), OrcaDetailsSummary = DetailsSummary.extend({ content: "inline*" }), OrcaDetailsContent = DetailsContent.extend({
	priority: 1e3,
	addKeyboardShortcuts() {
		let e = this.parent?.() ?? {};
		return {
			...e,
			Enter: ({ editor: t }) => exitEmptyDetailsBody(t) || e.Enter?.({ editor: t }) || !1,
			Backspace: ({ editor: t }) => moveFromEmptyDetailsBodyToSummary(t) || e.Backspace?.({ editor: t }) || !1
		};
	}
});
function createOrcaDetailsExtensions() {
	return [
		OrcaDetails.configure({
			persist: !0,
			HTMLAttributes: { class: "orca-details" }
		}),
		OrcaDetailsSummary,
		OrcaDetailsContent
	];
}
function renderRichMarkdownDocLinkHtml(e, t) {
	let n = typeof e.attrs.target == "string" ? e.attrs.target : "", r = typeof e.attrs.label == "string" ? e.attrs.label : null;
	return [
		"span",
		mergeAttributes(t, {
			"data-doc-link-target": n,
			...r ? { "data-doc-link-label": r } : {},
			contenteditable: "false",
			class: "rich-markdown-doc-link"
		}),
		r ?? n
	];
}
const DOC_LINK_PATTERN = /\[\[([^[\]\r\n]+)\]\]/g;
var DOC_LINK_OPEN = "[[";
function isDocLinkLiteralCodeTextNode(e, t) {
	return t?.type.spec.code === !0 || e.marks.some((e) => e.type.name === "code");
}
function canHoldDocLink(e, t) {
	return e.type.name === "text" && !!e.text && e.text.includes(DOC_LINK_OPEN) && !isDocLinkLiteralCodeTextNode(e, t);
}
var docLinkDissolveKey = new PluginKey("docLinkDissolve"), docLinkAutoConvertKey = new PluginKey("docLinkAutoConvert"), docLinkInlinePreviewKey = new PluginKey("docLinkInlinePreview");
function getDocIndex(e) {
	return e.documents.length === 0 ? (e._cachedDocs = null, e._cachedIndex = null, null) : (e._cachedDocs !== e.documents && (e._cachedIndex = createMarkdownDocumentIndex(e.documents), e._cachedDocs = e.documents), e._cachedIndex);
}
function buildPreviewDecorations(e, t) {
	let n = [], r = getDocIndex(t), i = e.selection.from;
	return e.doc.descendants((e, t, a) => {
		if (canHoldDocLink(e, a)) for (let a of e.text.matchAll(DOC_LINK_PATTERN)) {
			let e = isReservedRichMarkdownTransportBody(a[1]) ? null : parseMarkdownDocLink(a[1]);
			if (!e || a.index === void 0) continue;
			let o = t + a.index, s = o + a[0].length;
			if (i <= o || i > s) continue;
			let c = resolveAgainstIndex(e.target, r) ? "rich-markdown-doc-link-preview" : "rich-markdown-doc-link-preview rich-markdown-doc-link-preview--missing";
			n.push(Decoration.inline(o, s, { class: c }));
		}
	}), DecorationSet.create(e.doc, n);
}
function resolveAgainstIndex(e, t) {
	return t ? resolveMarkdownDocLink(e, t).status === "resolved" : !1;
}
function getDocLinkTarget(e) {
	return typeof e.attrs.target == "string" ? e.attrs.target : "";
}
function getDocLinkAlias(e) {
	return typeof e.attrs.label == "string" && e.attrs.label ? e.attrs.label : null;
}
function getDocLinkDisplayText(e) {
	return getDocLinkAlias(e) ?? getDocLinkTarget(e);
}
function createMarkdownDocLink(e) {
	return Node$1.create({
		name: "markdownDocLink",
		inline: !0,
		group: "inline",
		atom: !0,
		selectable: !0,
		addStorage() {
			return {
				documents: [],
				_cachedDocs: null,
				_cachedIndex: null
			};
		},
		addAttributes() {
			return {
				target: {
					default: "",
					parseHTML: (e) => e.getAttribute("data-doc-link-target") ?? ""
				},
				label: {
					default: null,
					parseHTML: (e) => e.getAttribute("data-doc-link-label")
				}
			};
		},
		markdownTokenName: "markdownDocLink",
		markdownTokenizer: {
			name: "markdownDocLink",
			level: "inline",
			start: skipInlineTransportStartScan,
			tokenize(t) {
				let n = e.match(t, "document-link");
				if (!n) return;
				let r = isReservedRichMarkdownTransportBody(n.value) ? null : parseMarkdownDocLink(n.value);
				if (r) return {
					type: "markdownDocLink",
					raw: n.raw,
					text: r.target,
					label: r.alias ?? void 0
				};
			}
		},
		parseMarkdown: (e, t) => e.type === "markdownDocLink" ? t.createNode("markdownDocLink", {
			target: typeof e.text == "string" ? e.text : "",
			label: typeof e.label == "string" ? e.label : null
		}) : [],
		renderMarkdown: (e) => formatMarkdownDocLink(typeof e.attrs?.target == "string" ? e.attrs.target : "", typeof e.attrs?.label == "string" ? e.attrs.label : null),
		renderText: ({ node: e }) => getDocLinkDisplayText(e),
		addNodeView() {
			let e = this.storage;
			return ({ node: t }) => {
				let n = getDocLinkTarget(t), r = document.createElement("span");
				r.setAttribute("data-doc-link-target", n);
				let i = getDocLinkAlias(t);
				i && r.setAttribute("data-doc-link-label", i), r.setAttribute("contenteditable", "false"), r.textContent = getDocLinkDisplayText(t);
				let a = (t) => {
					r.className = resolveAgainstIndex(t, getDocIndex(e)) ? "rich-markdown-doc-link" : "rich-markdown-doc-link rich-markdown-doc-link--missing";
				};
				return a(n), {
					dom: r,
					update: (e) => {
						if (e.type.name !== "markdownDocLink") return !1;
						let t = getDocLinkTarget(e), n = getDocLinkAlias(e);
						return r.setAttribute("data-doc-link-target", t), n ? r.setAttribute("data-doc-link-label", n) : r.removeAttribute("data-doc-link-label"), r.textContent = getDocLinkDisplayText(e), a(t), !0;
					}
				};
			};
		},
		addProseMirrorPlugins() {
			let e = this.type, t = this.storage;
			return [
				new Plugin({
					key: docLinkDissolveKey,
					props: { handleKeyDown(e, t) {
						if (t.shiftKey || t.altKey || t.metaKey || t.ctrlKey) return !1;
						let n;
						if (t.key === "ArrowLeft") n = "left";
						else if (t.key === "ArrowRight") n = "right";
						else return !1;
						let { state: r } = e;
						if (!(r.selection instanceof TextSelection)) return !1;
						let { $from: i } = r.selection, a = n === "left" ? i.nodeBefore : i.nodeAfter;
						if (!a || a.type.name !== "markdownDocLink") return !1;
						let o = formatMarkdownDocLink(getDocLinkTarget(a), getDocLinkAlias(a)), s = n === "left" ? i.pos - a.nodeSize : i.pos, c = s + a.nodeSize, l = r.tr.replaceWith(s, c, r.schema.text(o)), u = n === "left" ? s + o.length - 2 : s + 2;
						return l.setSelection(TextSelection.create(l.doc, u)), e.dispatch(l), !0;
					} }
				}),
				new Plugin({
					key: docLinkAutoConvertKey,
					appendTransaction(t, n, r) {
						let { tr: i } = r, a = r.selection.from, o = !1;
						return r.doc.descendants((t, n, r) => {
							if (canHoldDocLink(t, r)) for (let r of t.text.matchAll(DOC_LINK_PATTERN)) {
								let t = isReservedRichMarkdownTransportBody(r[1]) ? null : parseMarkdownDocLink(r[1]);
								if (!t || r.index === void 0) continue;
								let s = n + r.index, c = s + r[0].length;
								if (a > s && a <= c) continue;
								let l = e.create({
									target: t.target,
									label: t.alias
								});
								i.replaceWith(i.mapping.map(s), i.mapping.map(c), l), o = !0;
							}
						}), o ? i : null;
					}
				}),
				new Plugin({
					key: docLinkInlinePreviewKey,
					state: {
						init(e, n) {
							return buildPreviewDecorations(n, t);
						},
						apply(e, n, r, i) {
							let a = !r.selection.eq(i.selection);
							return !e.docChanged && !a && !e.getMeta("docLinksUpdated") ? n : buildPreviewDecorations(i, t);
						}
					},
					props: { decorations(e) {
						return docLinkInlinePreviewKey.getState(e);
					} }
				})
			];
		},
		parseHTML() {
			return [{ tag: "span[data-doc-link-target]" }];
		},
		renderHTML({ HTMLAttributes: e, node: t }) {
			return renderRichMarkdownDocLinkHtml(t, e);
		}
	});
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_react_dom = require_react_dom(), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function RichMarkdownCodeBlock({ node: e, updateAttributes: t }) {
	useTranslation();
	let n = e.attrs.language || "", [s, c] = (0, import_react.useState)(!1), [u, f] = (0, import_react.useState)(!1), p = (0, import_react.useRef)(null), h = (0, import_react.useRef)(!1), S = useAppStore((e) => e.settings), A = S?.theme === "dark" || S?.theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches, R = n === "mermaid", Y = (0, import_react.useCallback)(() => {
		p.current !== null && (window.clearTimeout(p.current), p.current = null);
	}, []), Z = (0, import_react.useCallback)((e) => {
		h.current = e !== null, e === null && Y();
	}, [Y]), pl = (0, import_react.useCallback)(() => {
		u || (0, import_react_dom.flushSync)(() => f(!0));
	}, [u]), ml = (0, import_react.useCallback)((e) => {
		t({ language: e.target.value });
	}, [t]), hl = (0, import_react.useCallback)((t) => {
		t.stopPropagation();
		let n = e.textContent;
		window.api.ui.writeClipboardText(n).then(() => {
			h.current && (Y(), c(!0), p.current = window.setTimeout(() => {
				p.current = null, c(!1);
			}, 1500));
		}).catch(() => {});
	}, [Y, e]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NodeViewWrapper, {
		className: "rich-markdown-code-block-wrapper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: "rich-markdown-code-block-lang",
				contentEditable: !1,
				value: n,
				onChange: ml,
				onMouseDown: pl,
				onFocus: pl,
				children: [u ? getCodeBlockLanguages().map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: e.value,
					children: e.label
				}, e.value)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: n,
					children: getCodeBlockLanguageLabel(n)
				}), u && n && !isKnownCodeBlockLanguage(n) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: n,
					children: n
				}, n) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				ref: Z,
				type: "button",
				className: "code-block-copy-btn",
				contentEditable: !1,
				onClick: hl,
				"aria-label": translate("auto.components.editor.RichMarkdownCodeBlock.c72beafc0f", "Copy code"),
				title: translate("auto.components.editor.RichMarkdownCodeBlock.c72beafc0f", "Copy code"),
				children: s ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "code-block-copy-label",
					children: translate("auto.components.editor.RichMarkdownCodeBlock.232d9ed853", "Copied")
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 14 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NodeViewContent, { as: "pre" }),
			R && e.textContent.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				contentEditable: !1,
				className: "mermaid-preview",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MermaidBlock, {
					content: e.textContent.trim(),
					isDark: A,
					htmlLabels: !1
				})
			})
		]
	});
}
function safeReactNodeViewRenderer(e, t) {
	let n = ReactNodeViewRenderer(e, t);
	return (e) => {
		let t = n(e);
		if (!("handleSelectionUpdate" in t)) return t;
		let r = t, i = r.handleSelectionUpdate;
		return r.editor.off("selectionUpdate", i), r.handleSelectionUpdate = function() {
			this.editor.state.selection instanceof NodeSelection ? i() : this.renderer?.props?.selected && this.deselectNode();
		}, r.handleSelectionUpdate = r.handleSelectionUpdate.bind(r), r.editor.on("selectionUpdate", r.handleSelectionUpdate), t;
	};
}
const positionStableNodeViewUpdate = ({ oldNode: e, oldDecorations: t, oldInnerDecorations: n, newNode: r, newDecorations: i, innerDecorations: a, updateProps: o }) => (e === r && t === i && n === a || o(), !0), DragSelectionGuard = Extension.create({
	name: "dragSelectionGuard",
	addProseMirrorPlugins() {
		let e = null, t = !1;
		return [new Plugin({
			key: new PluginKey("dragSelectionGuard"),
			filterTransaction(t) {
				if (!e) return !0;
				let n = e.input.mouseDown;
				return !(n && n.allowDefault && t.selection instanceof CellSelection);
			},
			view(n) {
				e = n;
				let r = e.domObserver, i = n.dom.ownerDocument, a = r.onSelectionChange, o = null;
				i.removeEventListener("selectionchange", a);
				let s = () => {
					let n = e.input.mouseDown;
					if (n && n.allowDefault) {
						r.setCurSelection(), t = !0;
						return;
					}
					a();
				};
				r.onSelectionChange = s, i.addEventListener("selectionchange", s);
				let c = () => {
					t && (t = !1, o !== null && cancelAnimationFrame(o), o = requestAnimationFrame(() => {
						if (o = null, !e || !n.dom.isConnected) return;
						let t = e?.input?.mouseDown;
						if (t && t.allowDefault) return;
						let a = e.domSelectionRange(), s = a.anchorNode, c = a.anchorOffset, l = a.focusNode, u = a.focusOffset;
						if (r.currentSelection.set({
							anchorNode: null,
							anchorOffset: 0,
							focusNode: null,
							focusOffset: 0
						}), r.flush(), s && l && s.isConnected && l.isConnected) {
							let e = i.getSelection();
							e && (r.stop(), e.setBaseAndExtent(s, c, l, u), r.setCurSelection(), r.start());
						}
					}));
				};
				return i.addEventListener("mouseup", c), { destroy() {
					o !== null && (cancelAnimationFrame(o), o = null), i.removeEventListener("mouseup", c), i.removeEventListener("selectionchange", s), r.onSelectionChange = a, i.addEventListener("selectionchange", a), e = null;
				} };
			}
		})];
	}
}), richMarkdownAnnotationHighlightPluginKey = new PluginKey("richMarkdownAnnotationHighlight");
function createAnnotationDecorations(e, t, n) {
	let r = [...n.map((e) => ({
		range: e,
		active: !1
	})), ...t ? [{
		range: t,
		active: !0
	}] : []].map((e) => {
		let t = Math.min(e.range.from, e.range.to), n = Math.max(e.range.from, e.range.to);
		return t === n ? null : Decoration.inline(t, n, { class: e.active ? "rich-markdown-annotation-selection rich-markdown-annotation-selection-active" : "rich-markdown-annotation-selection" });
	}).filter((e) => e !== null);
	return r.length === 0 ? DecorationSet.empty : DecorationSet.create(e, r);
}
function createRichMarkdownAnnotationHighlightPlugin() {
	return new Plugin({
		key: richMarkdownAnnotationHighlightPluginKey,
		state: {
			init: () => ({
				activeRange: null,
				noteRanges: [],
				decorations: DecorationSet.empty
			}),
			apply: (e, t) => {
				let n = e.getMeta(richMarkdownAnnotationHighlightPluginKey);
				if (n === null) return {
					activeRange: null,
					noteRanges: t.noteRanges,
					decorations: createAnnotationDecorations(e.doc, null, t.noteRanges)
				};
				if (n) {
					let r = n.activeRange === void 0 ? t.activeRange : n.activeRange, i = n.noteRanges === void 0 ? t.noteRanges : n.noteRanges;
					return {
						activeRange: r,
						noteRanges: i,
						decorations: createAnnotationDecorations(e.doc, r, i)
					};
				}
				return e.docChanged ? {
					...t,
					decorations: t.decorations.map(e.mapping, e.doc)
				} : t;
			}
		},
		props: { decorations(e) {
			return richMarkdownAnnotationHighlightPluginKey.getState(e)?.decorations ?? DecorationSet.empty;
		} }
	});
}
function createRichMarkdownAnnotationHighlightExtension() {
	return Extension.create({
		name: "richMarkdownAnnotationHighlight",
		addProseMirrorPlugins() {
			return [createRichMarkdownAnnotationHighlightPlugin()];
		}
	});
}
function createRichMarkdownHtmlSuperscriptLinkContext(e) {
	let t = {
		...e,
		version: 0
	}, n = /* @__PURE__ */ new Set();
	return {
		getSnapshot: () => t,
		subscribe: (e) => (n.add(e), () => n.delete(e)),
		update: (e) => {
			e.sourceFilePath === t.sourceFilePath && e.worktreeId === t.worktreeId && e.worktreeRoot === t.worktreeRoot && sameOwner(e.sourceOwner, t.sourceOwner) || (t = {
				...e,
				version: t.version + 1
			}, n.forEach((e) => e()));
		}
	};
}
function classifyHtmlSuperscriptLinkAction(e, t) {
	if (t.sourceOwner.kind === "unknown" || /^[\t\n\f\r ]*$/.test(e)) return !1;
	let n = resolveMarkdownLinkTarget(e, t.sourceFilePath, t.worktreeRoot);
	return n ? !(n.kind === "file" && n.relativePath === void 0 && (t.sourceOwner.kind === "runtime" || t.sourceOwner.kind === "ssh")) : !1;
}
function sameOwner(e, t) {
	return e.kind === t.kind ? e.kind === "runtime" && t.kind === "runtime" ? e.runtimeEnvironmentId === t.runtimeEnvironmentId : e.kind === "ssh" && t.kind === "ssh" ? e.connectionId === t.connectionId : !0 : !1;
}
var CLIPBOARD_VERSION = "1", MARKER_ATTRIBUTE = "data-rich-markdown-html-superscript-link", SOURCE_ATTRIBUTE = "data-orca-superscript-link-source", clipboardEncoder = new TextEncoder();
function createRichMarkdownHtmlSuperscriptLink(e, t) {
	return Node$1.create({
		name: "richMarkdownHtmlSuperscriptLink",
		inline: !0,
		group: "inline",
		atom: !0,
		selectable: !0,
		addAttributes() {
			return {
				source: {
					default: "",
					rendered: !1
				},
				href: {
					default: "",
					rendered: !1
				},
				label: {
					default: "",
					rendered: !1
				},
				title: {
					default: null,
					rendered: !1
				}
			};
		},
		markdownTokenName: "richMarkdownHtmlSuperscriptLink",
		markdownTokenizer: {
			name: "richMarkdownHtmlSuperscriptLink",
			level: "inline",
			start: skipInlineTransportStartScan,
			tokenize(t) {
				let n = e.match(t, "html-superscript-link");
				if (!n) return;
				let r = parseStructuredPayload(n.value);
				if (r) return {
					type: "richMarkdownHtmlSuperscriptLink",
					raw: n.raw,
					citation: r
				};
			}
		},
		parseMarkdown: (e, t) => {
			let n = e.citation;
			return e.type !== "richMarkdownHtmlSuperscriptLink" || !n ? [] : t.createNode("richMarkdownHtmlSuperscriptLink", n);
		},
		renderMarkdown: (e) => String(e.attrs?.source ?? ""),
		renderText: ({ node: e }) => String(e.attrs.label ?? ""),
		parseHTML() {
			return [{
				tag: `sup[${MARKER_ATTRIBUTE}]`,
				getAttrs: (e) => validateClipboardElement(e)
			}];
		},
		renderHTML({ node: e }) {
			let t = e.attrs, n = projectMarkdownHrefForClipboard(t.href), r = {};
			return n !== null && (r.href = n), t.title !== null && (r.title = t.title), [
				"sup",
				{
					[MARKER_ATTRIBUTE]: CLIPBOARD_VERSION,
					[SOURCE_ATTRIBUTE]: t.source
				},
				[
					"a",
					r,
					t.label
				]
			];
		},
		addNodeView() {
			return ({ node: e }) => {
				let n = document.createElement("sup");
				n.setAttribute(MARKER_ATTRIBUTE, ""), n.setAttribute("contenteditable", "false");
				let i = document.createElement("span");
				i.className = "rich-markdown-html-superscript-link", i.textContent = String(e.attrs.label ?? ""), n.appendChild(i);
				let a = () => {
					let n = String(e.attrs.href ?? ""), a = classifyHtmlSuperscriptLinkAction(n, t.getSnapshot());
					i.setAttribute("aria-label", a ? translate("auto.components.editor.richMarkdownHtmlSuperscriptLink.availableAriaLabel", "{{value0}}, link to {{value1}}", {
						value0: String(e.attrs.label ?? ""),
						value1: n
					}) : translate("auto.components.editor.richMarkdownHtmlSuperscriptLink.unavailableAriaLabel", "{{value0}}, citation link unavailable", { value0: String(e.attrs.label ?? "") })), a ? i.setAttribute("role", "link") : i.removeAttribute("role"), i.toggleAttribute("data-actionable", a);
				};
				return a(), {
					dom: n,
					destroy: t.subscribe(a)
				};
			};
		}
	});
}
function parseStructuredPayload(e) {
	let t;
	try {
		t = JSON.parse(e);
	} catch {
		return null;
	}
	if (!isCitationSource(t)) return null;
	let n = parseHtmlSuperscriptLinkSource(t.source);
	return n && sameCitation(n, t) ? n : null;
}
function validateClipboardElement(e) {
	if (e.getAttribute(MARKER_ATTRIBUTE) !== CLIPBOARD_VERSION || !hasOnlyAttributes(e, [
		MARKER_ATTRIBUTE,
		SOURCE_ATTRIBUTE,
		"data-pm-slice"
	])) return !1;
	let t = e.getAttribute(SOURCE_ATTRIBUTE);
	if (!t || t.length > 16384 || clipboardEncoder.encode(t).byteLength > 16384) return !1;
	let n = parseHtmlSuperscriptLinkSource(t), r = e.firstElementChild;
	return !n || e.childNodes.length !== 1 || e.children.length !== 1 || !r || e.firstChild !== r || r.tagName !== "A" || !hasOnlyAttributes(r, ["href", "title"]) || r.childNodes.length !== 1 || r.firstChild?.nodeType !== window.Node.TEXT_NODE || r.textContent !== n.label || r.getAttribute("title") !== n.title || r.getAttribute("href") !== projectMarkdownHrefForClipboard(n.href) ? !1 : n;
}
function hasOnlyAttributes(e, t) {
	let n = new Set(t);
	return Array.from(e.attributes).every((e) => n.has(e.name));
}
function isCitationSource(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return Object.keys(t).length === 4 && typeof t.source == "string" && typeof t.href == "string" && typeof t.label == "string" && (typeof t.title == "string" || t.title === null);
}
function sameCitation(e, t) {
	return e.source === t.source && e.href === t.href && e.label === t.label && e.title === t.title;
}
var orderedListStart = /* @__PURE__ */ RegExp(`^\\s*(?:${ORDERED_LIST_MARKER_PATTERN})[.)]\\s`), baseTokenizer$1 = OrderedList.config.markdownTokenizer;
const RichMarkdownOrderedList = OrderedList.extend({ markdownTokenizer: {
	...baseTokenizer$1,
	tokenize(e, t, n) {
		if (orderedListStart.test(e)) return baseTokenizer$1.tokenize(e, t, n);
	}
} });
var baseParseMarkdown = Paragraph.config.parseMarkdown;
const RichMarkdownParagraph = Paragraph.extend({ parseMarkdown: (e, t) => {
	let n = e.tokens ?? [];
	return !baseParseMarkdown || n.length === 1 && n[0]?.type === "image" ? t.createNode("paragraph", void 0, t.parseInline(n)) : baseParseMarkdown(e, t);
} });
function parseNodes(e, t = []) {
	return e.flatMap((e) => {
		let n = [...t, ...e.properties ? e.properties.className : []];
		return e.children ? parseNodes(e.children, n) : {
			text: e.value,
			classes: n
		};
	});
}
function getHighlightNodes(e) {
	return e.value || e.children || [];
}
function registered(e) {
	return !!core_default.getLanguage(e);
}
function getDecorations({ doc: e, name: t, lowlight: n, defaultLanguage: r }) {
	let i = [];
	return findChildren(e, (e) => e.type.name === t).forEach((e) => {
		let t = e.pos + 1, a = e.node.attrs.language || r, o = n.listLanguages();
		parseNodes(a && (o.includes(a) || registered(a) || n.registered?.call(n, a)) ? getHighlightNodes(n.highlight(a, e.node.textContent)) : getHighlightNodes(n.highlightAuto(e.node.textContent))).forEach((e) => {
			let n = t + e.text.length;
			if (e.classes.length) {
				let r = Decoration.inline(t, n, { class: e.classes.join(" ") });
				i.push(r);
			}
			t = n;
		});
	}), DecorationSet.create(e, i);
}
function isFunction(e) {
	return typeof e == "function";
}
function LowlightPlugin({ name: e, lowlight: t, defaultLanguage: n }) {
	if (![
		"highlight",
		"highlightAuto",
		"listLanguages"
	].every((e) => isFunction(t[e]))) throw Error("You should provide an instance of lowlight to use the code-block-lowlight extension");
	let r = new Plugin({
		key: new PluginKey("lowlight"),
		state: {
			init: (r, { doc: i }) => getDecorations({
				doc: i,
				name: e,
				lowlight: t,
				defaultLanguage: n
			}),
			apply: (r, i, a, o) => {
				let s = a.selection.$head.parent.type.name, c = o.selection.$head.parent.type.name, l = findChildren(a.doc, (t) => t.type.name === e), u = findChildren(o.doc, (t) => t.type.name === e);
				return r.docChanged && ([s, c].includes(e) || u.length !== l.length || r.steps.some((e) => e.from !== void 0 && e.to !== void 0 && l.some((t) => t.pos >= e.from && t.pos + t.node.nodeSize <= e.to))) ? getDecorations({
					doc: r.doc,
					name: e,
					lowlight: t,
					defaultLanguage: n
				}) : i.map(r.mapping, r.doc);
			}
		},
		props: { decorations(e) {
			return r.getState(e);
		} }
	});
	return r;
}
var src_default$6 = CodeBlock.extend({
	addOptions() {
		return {
			...this.parent?.call(this),
			lowlight: {},
			languageClassPrefix: "language-",
			exitOnTripleEnter: !0,
			exitOnArrowDown: !0,
			exitOnArrowUp: !0,
			defaultLanguage: null,
			enableTabIndentation: !1,
			tabSize: 4,
			HTMLAttributes: {}
		};
	},
	addProseMirrorPlugins() {
		return [...this.parent?.call(this) || [], LowlightPlugin({
			name: this.name,
			lowlight: this.options.lowlight,
			defaultLanguage: this.options.defaultLanguage
		})];
	}
});
function parseHighlightNodes(e, t = []) {
	return e.flatMap((e) => {
		if (e.type === "text") return [{
			text: e.value,
			classes: t
		}];
		if (e.type !== "element") return [];
		let n = e.properties.className, r = Array.isArray(n) ? n.map(String) : typeof n == "string" ? [n] : [];
		return parseHighlightNodes(e.children, [...t, ...r]);
	});
}
function highlightBlock(e, t, n, r) {
	let i = e.node.attrs.language || r, a = i && (n.has(i) || t.registered(i)) ? t.highlight(i, e.node.textContent) : t.highlightAuto(e.node.textContent), o = [], s = e.pos + 1;
	for (let e of parseHighlightNodes(a.children)) {
		let t = s + e.text.length;
		e.classes.length > 0 && o.push(Decoration.inline(s, t, { class: e.classes.join(" ") })), s = t;
	}
	return o;
}
function findAllCodeBlocks(e, t) {
	let n = [];
	return e.descendants((e, r) => e.type.name === t ? (n.push({
		node: e,
		pos: r
	}), !1) : !0), n;
}
function findCodeBlocksNearRanges(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = (n) => {
		let i = e.resolve(Math.max(0, Math.min(e.content.size, n)));
		for (let e = i.depth; e > 0; --e) {
			let n = i.node(e);
			if (n.type.name === t) {
				r.set(i.before(e), n);
				break;
			}
		}
		i.nodeBefore?.type.name === t && r.set(i.pos - i.nodeBefore.nodeSize, i.nodeBefore), i.nodeAfter?.type.name === t && r.set(i.pos, i.nodeAfter);
	};
	for (let a of n) {
		let n = Math.max(0, Math.min(e.content.size, a.from)), o = Math.max(n, Math.min(e.content.size, a.to));
		n < o && e.nodesBetween(n, o, (e, n) => e.type.name === t ? (r.set(n, e), !1) : !0), i(n), o !== n && i(o);
	}
	return [...r].map(([e, t]) => ({
		node: t,
		pos: e
	}));
}
function createDecorations(e, t, n, r, i) {
	return DecorationSet.create(e, findAllCodeBlocks(e, t).flatMap((e) => highlightBlock(e, n, r, i)));
}
function updateDecorations(e, t, n, r, i, a) {
	if (!e.docChanged) return t;
	let o = getChangedRanges(e);
	if (o.length === 0) return createDecorations(e.doc, n, r, i, a);
	let s = t.map(e.mapping, e.doc), c = findCodeBlocksNearRanges(e.before, n, o.map((e) => e.oldRange)), l = /* @__PURE__ */ new Set();
	for (let t of c) {
		let n = e.mapping.map(t.pos, -1), r = e.mapping.map(t.pos + t.node.nodeSize, 1);
		for (let e of s.find(Math.min(n, r), Math.max(n, r))) l.add(e);
	}
	l.size > 0 && (s = s.remove([...l]));
	let u = findCodeBlocksNearRanges(e.doc, n, o.map((e) => e.newRange));
	return s.add(e.doc, u.flatMap((e) => highlightBlock(e, r, i, a)));
}
function createRichMarkdownLowlightPlugin({ name: e, lowlight: t, defaultLanguage: n }) {
	let r = new Set(t.listLanguages()), i = new PluginKey("richMarkdownLowlight");
	return new Plugin({
		key: i,
		state: {
			init: (i, { doc: a }) => createDecorations(a, e, t, r, n),
			apply: (i, a) => updateDecorations(i, a, e, t, r, n)
		},
		props: { decorations: (e) => i.getState(e) }
	});
}
const RichMarkdownCodeBlockLowlight = CodeBlock.extend({
	addOptions() {
		return { ...src_default$6.options };
	},
	addProseMirrorPlugins() {
		return [...this.parent?.() ?? [], createRichMarkdownLowlightPlugin({
			name: this.name,
			lowlight: this.options.lowlight,
			defaultLanguage: this.options.defaultLanguage
		})];
	}
});
var src_default$5 = TaskList, baseTokenizer = src_default$5.config.markdownTokenizer;
function normalizeTaskListToken(e, t) {
	let n = e.nestedTokens?.[0];
	e.type === "taskItem" && n?.type === "code" && n.codeBlockStyle === "indented" && typeof n.text == "string" && (n.type = "paragraph", n.raw = n.text, n.tokens = t.inlineTokens(n.text), delete n.codeBlockStyle);
	for (let n of [...e.items ?? [], ...e.nestedTokens ?? []]) normalizeTaskListToken(n, t);
}
const RichMarkdownTaskList = src_default$5.extend({ markdownTokenizer: {
	...baseTokenizer,
	tokenize(e, t, n) {
		if (typeof baseTokenizer.start == "function" && baseTokenizer.start(e) !== 0) return;
		let r = baseTokenizer.tokenize(e, t, n);
		return r && normalizeTaskListToken(r, n), r;
	}
} });
var DEFAULT_CACHE_LIMITS = {
	maxEntries: 256,
	maxSourceCharacters: 128 * 1024
};
function prefixKey(e) {
	return e?.prefix ?? null;
}
function highlightKey(e, t, n) {
	return JSON.stringify([
		"language",
		e,
		prefixKey(n),
		t
	]);
}
function highlightAutoKey(e, t) {
	return JSON.stringify([
		"auto",
		prefixKey(t),
		t?.subset ?? null,
		e
	]);
}
function createCachedLowlight(e, t = DEFAULT_CACHE_LIMITS) {
	let n = /* @__PURE__ */ new Map(), r = 0, i = () => {
		n.clear(), r = 0;
	}, a = (e, i, a) => {
		if (t.maxEntries <= 0 || t.maxSourceCharacters <= 0 || i > t.maxSourceCharacters) return a();
		let o = e(), s = n.get(o);
		if (s) return n.delete(o), n.set(o, s), s.result;
		let c = a();
		for (n.set(o, {
			result: c,
			sourceCharacters: i
		}), r += i; n.size > t.maxEntries || r > t.maxSourceCharacters;) {
			let e = n.entries().next();
			if (e.done) break;
			r -= e.value[1].sourceCharacters, n.delete(e.value[0]);
		}
		return c;
	}, o = ((t, n) => (i(), typeof t == "string" ? e.register(t, n) : e.register(t))), s = ((t, n) => (i(), typeof t == "string" ? e.registerAlias(t, n) : e.registerAlias(t)));
	return {
		...e,
		highlight: (t, n, r) => a(() => highlightKey(t, n, r), n.length, () => e.highlight(t, n, r)),
		highlightAuto: (t, n) => a(() => highlightAutoKey(t, n), t.length, () => e.highlightAuto(t, n)),
		register: o,
		registerAlias: s
	};
}
var lowlight = createCachedLowlight(createLowlight(grammars)), RichMarkdownCode = Code.extend({ excludes: "code bold italic strike underline" });
function createRichMarkdownExtensions({ codec: e, includePlaceholder: t = !1, htmlSuperscriptLinks: n = !1, htmlSuperscriptLinkContext: r }) {
	if (n && !r) throw Error("HTML superscript links require a document interaction context");
	let i = [
		src_default.configure({
			link: !1,
			code: !1,
			codeBlock: !1,
			orderedList: !1,
			paragraph: !1
		}),
		RichMarkdownParagraph,
		RichMarkdownCode,
		RichMarkdownCodeBlockLowlight.extend({ addNodeView() {
			return safeReactNodeViewRenderer(RichMarkdownCodeBlock, { update: positionStableNodeViewUpdate });
		} }).configure({
			lowlight,
			defaultLanguage: null
		}),
		src_default$1.configure({
			openOnClick: !1,
			autolink: !0,
			linkOnPaste: !0
		}),
		src_default$2.extend({
			addStorage() {
				return {
					contextVersion: 0,
					filePath: "",
					reloadListeners: /* @__PURE__ */ new Set(),
					runtimeContext: void 0
				};
			},
			addNodeView() {
				return ({ node: e, HTMLAttributes: t }) => {
					let n = document.createElement("span");
					n.style.display = "inline-block", n.style.lineHeight = "0", n.style.maxWidth = "100%";
					let r = document.createElement("img");
					r.draggable = !1;
					for (let [e, n] of Object.entries(t)) e !== "src" && n != null && n !== !1 && r.setAttribute(e, String(n));
					n.appendChild(r);
					let i = e.attrs.src, a = getImageContextVersion(this.storage), o, s = (e) => {
						o?.(), o = void 0;
						let t = this.storage.filePath, n = this.storage.runtimeContext, s = getImageContextVersion(this.storage);
						e && t ? (o = acquireLocalImageSrcLease(e, t, void 0, n), loadLocalImageSrc(e, t, void 0, n).then((t) => {
							if (!(i !== e || a !== s)) {
								if (t) {
									r.src = t;
									return;
								}
								r.removeAttribute("src");
							}
						})) : e ? r.src = e : r.removeAttribute("src");
					};
					s(i);
					let c = onImageCacheInvalidated(() => {
						s(i);
					}), l = () => {
						a = getImageContextVersion(this.storage), s(i);
					}, u = this.storage.reloadListeners;
					return u instanceof Set && u.add(l), {
						dom: n,
						update: (e) => {
							if (e.type.name !== "image") return !1;
							let t = e.attrs.src, n = getImageContextVersion(this.storage);
							return (t !== i || n !== a) && (i = t, a = n, s(t)), !0;
						},
						destroy: () => {
							o?.(), u instanceof Set && u.delete(l), c();
						}
					};
				};
			}
		}).configure({
			allowBase64: !0,
			inline: !0
		}),
		RichMarkdownOrderedList,
		RichMarkdownTaskList,
		src_default$4.configure({ nested: !0 }),
		...createOrcaDetailsExtensions(),
		Table.configure({ resizable: !1 }),
		TableRow,
		TableHeader,
		TableCell,
		InlineMath.configure({ katexOptions: { throwOnError: !1 } }),
		BlockMath.configure({ katexOptions: {
			displayMode: !0,
			throwOnError: !1
		} }),
		createRichMarkdownLiteral(e.transport),
		...n ? [createRichMarkdownHtmlSuperscriptLink(e.transport, r)] : [],
		createRawMarkdownHtmlInline(e.transport),
		createRawMarkdownHtmlBlock(e.transport),
		createMarkdownDocLink(e.transport),
		DragSelectionGuard,
		createRichMarkdownExtension(e, n).configure({
			marked: e.marked,
			markedOptions: { gfm: !0 }
		}),
		createRichMarkdownAnnotationHighlightExtension()
	];
	return t && i.push(src_default$3.configure({
		includeChildren: !0,
		placeholder: getRichMarkdownPlaceholder
	})), i;
}
function getImageContextVersion(e) {
	let t = e.contextVersion;
	return typeof t == "number" ? t : 0;
}
export { CellSelection as a, moveCellForward as c, encodeRawMarkdownHtmlForRichEditor as d, createRichMarkdownEditorCodec as f, richMarkdownAnnotationHighlightPluginKey as i, nextCell as l, classifyHtmlSuperscriptLinkAction as n, TableMap as o, createRichMarkdownHtmlSuperscriptLinkContext as r, isInTable as s, createRichMarkdownExtensions as t, selectionCell as u };
