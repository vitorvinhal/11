import { a as __toESM, t as __commonJSMin } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as ListTree } from "./list-tree-B6RtkQZp.js";
import { Fi as MARKDOWN_TOC_PANEL_MIN_WIDTH, Ii as clampMarkdownTocPanelWidth, Li as computeMaxMarkdownTocPanelWidth, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { s as keybindingMatchesAction } from "./keybindings-1v53ESY9.js";
import { t as useSidebarResize } from "./useSidebarResize-CVB8oNM1.js";
import { _ as markdownSpace, a as unified, d as remarkParse, f as resolveAll, g as markdownLineEndingOrSpace, h as markdownLineEnding, i as escapeStringRegexp, t as remarkGfm, v as push, x as ok, y as splice } from "./lib-DEDsinTP.js";
import { d as MarkdownHeadingSlugger } from "./markdown-doc-links-CqJYNZT9.js";
import { n as formatMarkdownReviewNotes } from "./markdown-review-notes-Bf0IQNNb.js";
function collectMarkdownTocParentIds(i) {
	let M = /* @__PURE__ */ new Set();
	function N(i) {
		for (let P of i) P.children.length > 0 && (M.add(P.id), N(P.children));
	}
	return N(i), M;
}
function collapseMarkdownTocToLevel(i, M) {
	let N = /* @__PURE__ */ new Set();
	function P(i) {
		for (let F of i) F.children.length > 0 && F.level >= M && N.add(F.id), P(F.children);
	}
	return P(i), N;
}
function pruneMarkdownTocCollapsedIds(i, M) {
	let N = collectMarkdownTocParentIds(M), P = /* @__PURE__ */ new Set();
	for (let M of i) N.has(M) && P.add(M);
	return P;
}
function toggleMarkdownTocCollapsedId(i, M) {
	let N = new Set(i);
	return N.has(M) ? N.delete(M) : N.add(M), N;
}
function isMarkdownTocItemExpanded(i, M) {
	return M.children.length === 0 || !i.has(M.id);
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), TOC_LEVELS = [
	1,
	2,
	3,
	4,
	5
], TOC_EXPAND_ALL_LEVEL = 5, TOC_INDENT_BASE_PX = 12, TOC_INDENT_STEP_PX = 12;
function MarkdownTocRow({ collapsedIds: i, depth: M, item: N, onNavigate: F, onToggleCollapsed: R }) {
	let z = N.children.length > 0, B = isMarkdownTocItemExpanded(i, N);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "markdown-toc-row",
		style: { paddingLeft: z ? M === 0 ? TOC_INDENT_BASE_PX : M * TOC_INDENT_STEP_PX : TOC_INDENT_BASE_PX + M * TOC_INDENT_STEP_PX },
		children: [z ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "markdown-toc-disclosure",
			"aria-label": B ? translate("auto.components.editor.MarkdownTableOfContentsPanel.97ad46f11f", "Collapse {{value0}}", { value0: N.title }) : translate("auto.components.editor.MarkdownTableOfContentsPanel.65b036a6c8", "Expand {{value0}}", { value0: N.title }),
			"aria-expanded": B,
			onClick: () => R(N.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: cn("size-3 shrink-0 text-muted-foreground transition-transform", B && "rotate-90") })
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "markdown-toc-title-button",
			onClick: () => F(N.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "markdown-toc-title",
				children: N.title
			})
		})]
	}), z && B ? N.children.map((N) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownTocRow, {
		collapsedIds: i,
		depth: M + 1,
		item: N,
		onNavigate: F,
		onToggleCollapsed: R
	}, N.id)) : null] });
}
function MarkdownTableOfContentsPanel({ items: i, onClose: M, onNavigate: N }) {
	let [I, L] = (0, import_react.useState)(() => /* @__PURE__ */ new Set()), z = useAppStore((i) => i.markdownTocPanelWidth), W = useAppStore((i) => i.setMarkdownTocPanelWidth), [G, K] = (0, import_react.useState)(null), J = computeMaxMarkdownTocPanelWidth(G ?? 0), { containerRef: Y, onResizeStart: Z } = useSidebarResize({
		isOpen: !0,
		width: clampMarkdownTocPanelWidth(z, G ?? void 0),
		minWidth: 200,
		maxWidth: J,
		deltaSign: 1,
		setWidth: W
	});
	(0, import_react.useEffect)(() => {
		L((M) => pruneMarkdownTocCollapsedIds(M, i));
	}, [i]), (0, import_react.useEffect)(() => {
		let i = Y.current?.parentElement;
		if (!i) return;
		let M = () => {
			K(i.clientWidth);
		};
		M();
		let N = new ResizeObserver(M);
		return N.observe(i), () => N.disconnect();
	}, [Y]);
	let Q = (M) => {
		L(collapseMarkdownTocToLevel(i, M));
	}, $ = (i) => {
		L((M) => toggleMarkdownTocCollapsedId(M, i));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		ref: Y,
		className: "markdown-toc-panel",
		"aria-label": translate("auto.components.editor.MarkdownTableOfContentsPanel.27d0a9c49a", "Table of contents"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "markdown-toc-header",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListTree, { className: "size-3.5 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.editor.MarkdownTableOfContentsPanel.06357eea60", "Table of Contents") }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "markdown-toc-header-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "markdown-toc-level-controls",
							role: "group",
							"aria-label": translate("auto.components.editor.MarkdownTableOfContentsPanel.0dc7b2f05a", "Collapse by level"),
							children: TOC_LEVELS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "icon-xs",
								className: "markdown-toc-level-button",
								"aria-label": i === TOC_EXPAND_ALL_LEVEL ? translate("auto.components.editor.MarkdownTableOfContentsPanel.f3de856175", "Expand all heading levels") : translate("auto.components.editor.MarkdownTableOfContentsPanel.111e66b85d", "Collapse to heading level {{value0}}", { value0: i }),
								title: i === TOC_EXPAND_ALL_LEVEL ? translate("auto.components.editor.MarkdownTableOfContentsPanel.a5daadd68b", "Expand all") : translate("auto.components.editor.MarkdownTableOfContentsPanel.4680a4b808", "Collapse to H{{value0}}", { value0: i }),
								onClick: () => Q(i),
								children: ["H", i]
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-xs",
							"aria-label": translate("auto.components.editor.MarkdownTableOfContentsPanel.bbe8369097", "Close table of contents"),
							title: translate("auto.components.editor.MarkdownTableOfContentsPanel.bbe8369097", "Close table of contents"),
							onClick: M,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "markdown-toc-list",
				children: i.length > 0 ? i.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkdownTocRow, {
					collapsedIds: I,
					depth: 0,
					item: i,
					onNavigate: N,
					onToggleCollapsed: $
				}, i.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "markdown-toc-empty",
					children: translate("auto.components.editor.MarkdownTableOfContentsPanel.de3928b6e4", "No headings")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-markdown-toc-resize-handle": "",
				className: "absolute top-0 right-0 z-10 h-full w-1 cursor-col-resize transition-colors hover:bg-ring/20 active:bg-ring/30",
				role: "separator",
				"aria-orientation": "vertical",
				"aria-label": translate("auto.components.editor.MarkdownTableOfContentsPanel.8f4d2c1a9b", "Resize table of contents"),
				onMouseDown: Z
			})
		]
	});
}
const codes = {
	carriageReturn: -5,
	lineFeed: -4,
	carriageReturnLineFeed: -3,
	horizontalTab: -2,
	virtualSpace: -1,
	eof: null,
	nul: 0,
	soh: 1,
	stx: 2,
	etx: 3,
	eot: 4,
	enq: 5,
	ack: 6,
	bel: 7,
	bs: 8,
	ht: 9,
	lf: 10,
	vt: 11,
	ff: 12,
	cr: 13,
	so: 14,
	si: 15,
	dle: 16,
	dc1: 17,
	dc2: 18,
	dc3: 19,
	dc4: 20,
	nak: 21,
	syn: 22,
	etb: 23,
	can: 24,
	em: 25,
	sub: 26,
	esc: 27,
	fs: 28,
	gs: 29,
	rs: 30,
	us: 31,
	space: 32,
	exclamationMark: 33,
	quotationMark: 34,
	numberSign: 35,
	dollarSign: 36,
	percentSign: 37,
	ampersand: 38,
	apostrophe: 39,
	leftParenthesis: 40,
	rightParenthesis: 41,
	asterisk: 42,
	plusSign: 43,
	comma: 44,
	dash: 45,
	dot: 46,
	slash: 47,
	digit0: 48,
	digit1: 49,
	digit2: 50,
	digit3: 51,
	digit4: 52,
	digit5: 53,
	digit6: 54,
	digit7: 55,
	digit8: 56,
	digit9: 57,
	colon: 58,
	semicolon: 59,
	lessThan: 60,
	equalsTo: 61,
	greaterThan: 62,
	questionMark: 63,
	atSign: 64,
	uppercaseA: 65,
	uppercaseB: 66,
	uppercaseC: 67,
	uppercaseD: 68,
	uppercaseE: 69,
	uppercaseF: 70,
	uppercaseG: 71,
	uppercaseH: 72,
	uppercaseI: 73,
	uppercaseJ: 74,
	uppercaseK: 75,
	uppercaseL: 76,
	uppercaseM: 77,
	uppercaseN: 78,
	uppercaseO: 79,
	uppercaseP: 80,
	uppercaseQ: 81,
	uppercaseR: 82,
	uppercaseS: 83,
	uppercaseT: 84,
	uppercaseU: 85,
	uppercaseV: 86,
	uppercaseW: 87,
	uppercaseX: 88,
	uppercaseY: 89,
	uppercaseZ: 90,
	leftSquareBracket: 91,
	backslash: 92,
	rightSquareBracket: 93,
	caret: 94,
	underscore: 95,
	graveAccent: 96,
	lowercaseA: 97,
	lowercaseB: 98,
	lowercaseC: 99,
	lowercaseD: 100,
	lowercaseE: 101,
	lowercaseF: 102,
	lowercaseG: 103,
	lowercaseH: 104,
	lowercaseI: 105,
	lowercaseJ: 106,
	lowercaseK: 107,
	lowercaseL: 108,
	lowercaseM: 109,
	lowercaseN: 110,
	lowercaseO: 111,
	lowercaseP: 112,
	lowercaseQ: 113,
	lowercaseR: 114,
	lowercaseS: 115,
	lowercaseT: 116,
	lowercaseU: 117,
	lowercaseV: 118,
	lowercaseW: 119,
	lowercaseX: 120,
	lowercaseY: 121,
	lowercaseZ: 122,
	leftCurlyBrace: 123,
	verticalBar: 124,
	rightCurlyBrace: 125,
	tilde: 126,
	del: 127,
	byteOrderMarker: 65279,
	replacementCharacter: 65533
}, constants = {
	attentionSideAfter: 2,
	attentionSideBefore: 1,
	atxHeadingOpeningFenceSizeMax: 6,
	autolinkDomainSizeMax: 63,
	autolinkSchemeSizeMax: 32,
	cdataOpeningString: "CDATA[",
	characterGroupPunctuation: 2,
	characterGroupWhitespace: 1,
	characterReferenceDecimalSizeMax: 7,
	characterReferenceHexadecimalSizeMax: 6,
	characterReferenceNamedSizeMax: 31,
	codeFencedSequenceSizeMin: 3,
	contentTypeContent: "content",
	contentTypeDocument: "document",
	contentTypeFlow: "flow",
	contentTypeString: "string",
	contentTypeText: "text",
	hardBreakPrefixSizeMin: 2,
	htmlBasic: 6,
	htmlCdata: 5,
	htmlComment: 2,
	htmlComplete: 7,
	htmlDeclaration: 4,
	htmlInstruction: 3,
	htmlRawSizeMax: 8,
	htmlRaw: 1,
	linkResourceDestinationBalanceMax: 32,
	linkReferenceSizeMax: 999,
	listItemValueSizeMax: 10,
	numericBaseDecimal: 10,
	numericBaseHexadecimal: 16,
	tabSize: 4,
	thematicBreakMarkerCountMin: 3,
	v8MaxSafeChunkSize: 1e4
}, types = {
	data: "data",
	whitespace: "whitespace",
	lineEnding: "lineEnding",
	lineEndingBlank: "lineEndingBlank",
	linePrefix: "linePrefix",
	lineSuffix: "lineSuffix",
	atxHeading: "atxHeading",
	atxHeadingSequence: "atxHeadingSequence",
	atxHeadingText: "atxHeadingText",
	autolink: "autolink",
	autolinkEmail: "autolinkEmail",
	autolinkMarker: "autolinkMarker",
	autolinkProtocol: "autolinkProtocol",
	characterEscape: "characterEscape",
	characterEscapeValue: "characterEscapeValue",
	characterReference: "characterReference",
	characterReferenceMarker: "characterReferenceMarker",
	characterReferenceMarkerNumeric: "characterReferenceMarkerNumeric",
	characterReferenceMarkerHexadecimal: "characterReferenceMarkerHexadecimal",
	characterReferenceValue: "characterReferenceValue",
	codeFenced: "codeFenced",
	codeFencedFence: "codeFencedFence",
	codeFencedFenceSequence: "codeFencedFenceSequence",
	codeFencedFenceInfo: "codeFencedFenceInfo",
	codeFencedFenceMeta: "codeFencedFenceMeta",
	codeFlowValue: "codeFlowValue",
	codeIndented: "codeIndented",
	codeText: "codeText",
	codeTextData: "codeTextData",
	codeTextPadding: "codeTextPadding",
	codeTextSequence: "codeTextSequence",
	content: "content",
	definition: "definition",
	definitionDestination: "definitionDestination",
	definitionDestinationLiteral: "definitionDestinationLiteral",
	definitionDestinationLiteralMarker: "definitionDestinationLiteralMarker",
	definitionDestinationRaw: "definitionDestinationRaw",
	definitionDestinationString: "definitionDestinationString",
	definitionLabel: "definitionLabel",
	definitionLabelMarker: "definitionLabelMarker",
	definitionLabelString: "definitionLabelString",
	definitionMarker: "definitionMarker",
	definitionTitle: "definitionTitle",
	definitionTitleMarker: "definitionTitleMarker",
	definitionTitleString: "definitionTitleString",
	emphasis: "emphasis",
	emphasisSequence: "emphasisSequence",
	emphasisText: "emphasisText",
	escapeMarker: "escapeMarker",
	hardBreakEscape: "hardBreakEscape",
	hardBreakTrailing: "hardBreakTrailing",
	htmlFlow: "htmlFlow",
	htmlFlowData: "htmlFlowData",
	htmlText: "htmlText",
	htmlTextData: "htmlTextData",
	image: "image",
	label: "label",
	labelText: "labelText",
	labelLink: "labelLink",
	labelImage: "labelImage",
	labelMarker: "labelMarker",
	labelImageMarker: "labelImageMarker",
	labelEnd: "labelEnd",
	link: "link",
	paragraph: "paragraph",
	reference: "reference",
	referenceMarker: "referenceMarker",
	referenceString: "referenceString",
	resource: "resource",
	resourceDestination: "resourceDestination",
	resourceDestinationLiteral: "resourceDestinationLiteral",
	resourceDestinationLiteralMarker: "resourceDestinationLiteralMarker",
	resourceDestinationRaw: "resourceDestinationRaw",
	resourceDestinationString: "resourceDestinationString",
	resourceMarker: "resourceMarker",
	resourceTitle: "resourceTitle",
	resourceTitleMarker: "resourceTitleMarker",
	resourceTitleString: "resourceTitleString",
	setextHeading: "setextHeading",
	setextHeadingText: "setextHeadingText",
	setextHeadingLine: "setextHeadingLine",
	setextHeadingLineSequence: "setextHeadingLineSequence",
	strong: "strong",
	strongSequence: "strongSequence",
	strongText: "strongText",
	thematicBreak: "thematicBreak",
	thematicBreakSequence: "thematicBreakSequence",
	blockQuote: "blockQuote",
	blockQuotePrefix: "blockQuotePrefix",
	blockQuoteMarker: "blockQuoteMarker",
	blockQuotePrefixWhitespace: "blockQuotePrefixWhitespace",
	listOrdered: "listOrdered",
	listUnordered: "listUnordered",
	listItemIndent: "listItemIndent",
	listItemMarker: "listItemMarker",
	listItemPrefix: "listItemPrefix",
	listItemPrefixWhitespace: "listItemPrefixWhitespace",
	listItemValue: "listItemValue",
	chunkDocument: "chunkDocument",
	chunkContent: "chunkContent",
	chunkFlow: "chunkFlow",
	chunkText: "chunkText",
	chunkString: "chunkString"
};
var ambiguousRanges = [
	161,
	161,
	164,
	164,
	167,
	168,
	170,
	170,
	173,
	174,
	176,
	180,
	182,
	186,
	188,
	191,
	198,
	198,
	208,
	208,
	215,
	216,
	222,
	225,
	230,
	230,
	232,
	234,
	236,
	237,
	240,
	240,
	242,
	243,
	247,
	250,
	252,
	252,
	254,
	254,
	257,
	257,
	273,
	273,
	275,
	275,
	283,
	283,
	294,
	295,
	299,
	299,
	305,
	307,
	312,
	312,
	319,
	322,
	324,
	324,
	328,
	331,
	333,
	333,
	338,
	339,
	358,
	359,
	363,
	363,
	462,
	462,
	464,
	464,
	466,
	466,
	468,
	468,
	470,
	470,
	472,
	472,
	474,
	474,
	476,
	476,
	593,
	593,
	609,
	609,
	708,
	708,
	711,
	711,
	713,
	715,
	717,
	717,
	720,
	720,
	728,
	731,
	733,
	733,
	735,
	735,
	768,
	879,
	913,
	929,
	931,
	937,
	945,
	961,
	963,
	969,
	1025,
	1025,
	1040,
	1103,
	1105,
	1105,
	8208,
	8208,
	8211,
	8214,
	8216,
	8217,
	8220,
	8221,
	8224,
	8226,
	8228,
	8231,
	8240,
	8240,
	8242,
	8243,
	8245,
	8245,
	8251,
	8251,
	8254,
	8254,
	8308,
	8308,
	8319,
	8319,
	8321,
	8324,
	8364,
	8364,
	8451,
	8451,
	8453,
	8453,
	8457,
	8457,
	8467,
	8467,
	8470,
	8470,
	8481,
	8482,
	8486,
	8486,
	8491,
	8491,
	8531,
	8532,
	8539,
	8542,
	8544,
	8555,
	8560,
	8569,
	8585,
	8585,
	8592,
	8601,
	8632,
	8633,
	8658,
	8658,
	8660,
	8660,
	8679,
	8679,
	8704,
	8704,
	8706,
	8707,
	8711,
	8712,
	8715,
	8715,
	8719,
	8719,
	8721,
	8721,
	8725,
	8725,
	8730,
	8730,
	8733,
	8736,
	8739,
	8739,
	8741,
	8741,
	8743,
	8748,
	8750,
	8750,
	8756,
	8759,
	8764,
	8765,
	8776,
	8776,
	8780,
	8780,
	8786,
	8786,
	8800,
	8801,
	8804,
	8807,
	8810,
	8811,
	8814,
	8815,
	8834,
	8835,
	8838,
	8839,
	8853,
	8853,
	8857,
	8857,
	8869,
	8869,
	8895,
	8895,
	8978,
	8978,
	9312,
	9449,
	9451,
	9547,
	9552,
	9587,
	9600,
	9615,
	9618,
	9621,
	9632,
	9633,
	9635,
	9641,
	9650,
	9651,
	9654,
	9655,
	9660,
	9661,
	9664,
	9665,
	9670,
	9672,
	9675,
	9675,
	9678,
	9681,
	9698,
	9701,
	9711,
	9711,
	9733,
	9734,
	9737,
	9737,
	9742,
	9743,
	9756,
	9756,
	9758,
	9758,
	9792,
	9792,
	9794,
	9794,
	9824,
	9825,
	9827,
	9829,
	9831,
	9834,
	9836,
	9837,
	9839,
	9839,
	9886,
	9887,
	9919,
	9919,
	9926,
	9933,
	9935,
	9939,
	9941,
	9953,
	9955,
	9955,
	9960,
	9961,
	9963,
	9969,
	9972,
	9972,
	9974,
	9977,
	9979,
	9980,
	9982,
	9983,
	10045,
	10045,
	10102,
	10111,
	11094,
	11097,
	12872,
	12879,
	57344,
	63743,
	65024,
	65039,
	65533,
	65533,
	127232,
	127242,
	127248,
	127277,
	127280,
	127337,
	127344,
	127373,
	127375,
	127376,
	127387,
	127404,
	917760,
	917999,
	983040,
	1048573,
	1048576,
	1114109
], fullwidthRanges = [
	12288,
	12288,
	65281,
	65376,
	65504,
	65510
], halfwidthRanges = [
	8361,
	8361,
	65377,
	65470,
	65474,
	65479,
	65482,
	65487,
	65490,
	65495,
	65498,
	65500,
	65512,
	65518
], narrowRanges = [
	32,
	126,
	162,
	163,
	165,
	166,
	172,
	172,
	175,
	175,
	10214,
	10221,
	10629,
	10630
], wideRanges = [
	4352,
	4447,
	8986,
	8987,
	9001,
	9002,
	9193,
	9196,
	9200,
	9200,
	9203,
	9203,
	9725,
	9726,
	9748,
	9749,
	9776,
	9783,
	9800,
	9811,
	9855,
	9855,
	9866,
	9871,
	9875,
	9875,
	9889,
	9889,
	9898,
	9899,
	9917,
	9918,
	9924,
	9925,
	9934,
	9934,
	9940,
	9940,
	9962,
	9962,
	9970,
	9971,
	9973,
	9973,
	9978,
	9978,
	9981,
	9981,
	9989,
	9989,
	9994,
	9995,
	10024,
	10024,
	10060,
	10060,
	10062,
	10062,
	10067,
	10069,
	10071,
	10071,
	10133,
	10135,
	10160,
	10160,
	10175,
	10175,
	11035,
	11036,
	11088,
	11088,
	11093,
	11093,
	11904,
	11929,
	11931,
	12019,
	12032,
	12245,
	12272,
	12287,
	12289,
	12350,
	12353,
	12438,
	12441,
	12543,
	12549,
	12591,
	12593,
	12686,
	12688,
	12773,
	12783,
	12830,
	12832,
	12871,
	12880,
	42124,
	42128,
	42182,
	43360,
	43388,
	44032,
	55203,
	63744,
	64255,
	65040,
	65049,
	65072,
	65106,
	65108,
	65126,
	65128,
	65131,
	94176,
	94180,
	94192,
	94198,
	94208,
	101589,
	101631,
	101662,
	101760,
	101874,
	110576,
	110579,
	110581,
	110587,
	110589,
	110590,
	110592,
	110882,
	110898,
	110898,
	110928,
	110930,
	110933,
	110933,
	110948,
	110951,
	110960,
	111355,
	119552,
	119638,
	119648,
	119670,
	126980,
	126980,
	127183,
	127183,
	127374,
	127374,
	127377,
	127386,
	127488,
	127490,
	127504,
	127547,
	127552,
	127560,
	127568,
	127569,
	127584,
	127589,
	127744,
	127776,
	127789,
	127797,
	127799,
	127868,
	127870,
	127891,
	127904,
	127946,
	127951,
	127955,
	127968,
	127984,
	127988,
	127988,
	127992,
	128062,
	128064,
	128064,
	128066,
	128252,
	128255,
	128317,
	128331,
	128334,
	128336,
	128359,
	128378,
	128378,
	128405,
	128406,
	128420,
	128420,
	128507,
	128591,
	128640,
	128709,
	128716,
	128716,
	128720,
	128722,
	128725,
	128728,
	128732,
	128735,
	128747,
	128748,
	128756,
	128764,
	128992,
	129003,
	129008,
	129008,
	129292,
	129338,
	129340,
	129349,
	129351,
	129535,
	129648,
	129660,
	129664,
	129674,
	129678,
	129734,
	129736,
	129736,
	129741,
	129756,
	129759,
	129770,
	129775,
	129784,
	131072,
	196605,
	196608,
	262141
];
const isInRange = (i, M) => {
	let N = 0, P = Math.floor(i.length / 2) - 1;
	for (; N <= P;) {
		let F = Math.floor((N + P) / 2), I = F * 2;
		if (M < i[I]) P = F - 1;
		else if (M > i[I + 1]) N = F + 1;
		else return !0;
	}
	return !1;
};
var minimumAmbiguousCodePoint = ambiguousRanges[0], maximumAmbiguousCodePoint = ambiguousRanges.at(-1), minimumFullWidthCodePoint = fullwidthRanges[0], maximumFullWidthCodePoint = fullwidthRanges.at(-1), minimumHalfWidthCodePoint = halfwidthRanges[0], maximumHalfWidthCodePoint = halfwidthRanges.at(-1), minimumNarrowCodePoint = narrowRanges[0], maximumNarrowCodePoint = narrowRanges.at(-1), minimumWideCodePoint = wideRanges[0], maximumWideCodePoint = wideRanges.at(-1), commonCjkCodePoint = 19968, [wideFastPathStart, wideFastPathEnd] = findWideFastPathRange(wideRanges);
function findWideFastPathRange(i) {
	let M = i[0], N = i[1];
	for (let P = 0; P < i.length; P += 2) {
		let F = i[P], I = i[P + 1];
		if (commonCjkCodePoint >= F && commonCjkCodePoint <= I) return [F, I];
		I - F > N - M && (M = F, N = I);
	}
	return [M, N];
}
const isAmbiguous = (i) => i < minimumAmbiguousCodePoint || i > maximumAmbiguousCodePoint ? !1 : isInRange(ambiguousRanges, i), isFullWidth = (i) => i < minimumFullWidthCodePoint || i > maximumFullWidthCodePoint ? !1 : isInRange(fullwidthRanges, i);
var isHalfWidth = (i) => i < minimumHalfWidthCodePoint || i > maximumHalfWidthCodePoint ? !1 : isInRange(halfwidthRanges, i), isNarrow = (i) => i < minimumNarrowCodePoint || i > maximumNarrowCodePoint ? !1 : isInRange(narrowRanges, i);
const isWide = (i) => i >= wideFastPathStart && i <= wideFastPathEnd ? !0 : i < minimumWideCodePoint || i > maximumWideCodePoint ? !1 : isInRange(wideRanges, i);
function getCategory(i) {
	return isAmbiguous(i) ? "ambiguous" : isFullWidth(i) ? "fullwidth" : isHalfWidth(i) ? "halfwidth" : isNarrow(i) ? "narrow" : isWide(i) ? "wide" : "neutral";
}
function validate(i) {
	if (!Number.isSafeInteger(i)) throw TypeError(`Expected a code point, got \`${typeof i}\`.`);
}
function eastAsianWidthType(i) {
	return validate(i), getCategory(i);
}
function isEmoji(i) {
	return /^\p{Emoji_Presentation}/u.test(String.fromCodePoint(i));
}
function cjkOrIvs(i) {
	if (!i || i < 4352) return !1;
	switch (eastAsianWidthType(i)) {
		case "fullwidth":
		case "halfwidth": return !0;
		case "wide": return !isEmoji(i);
		case "narrow": return !1;
		case "ambiguous": return 917760 <= i && i <= 917999 ? null : !1;
		case "neutral": return /^\p{sc=Hangul}/u.test(String.fromCodePoint(i));
	}
}
function isCjkAmbiguousPunctuation(i, M) {
	return M !== 65025 || !i || i < 8216 ? !1 : i === 8216 || i === 8217 || i === 8220 || i === 8221;
}
function nonEmojiGeneralUseVS(i) {
	return i !== null && i >= 65024 && i <= 65038;
}
var unicodePunctuation = regexCheck(/\p{P}|\p{S}/u), unicodeWhitespace = regexCheck(/\s/);
function regexCheck(i) {
	return M;
	function M(M) {
		return M !== null && M > -1 && i.test(String.fromCodePoint(M));
	}
}
function isUnicodeWhitespace(i) {
	return !!(i & constants.characterGroupWhitespace);
}
function isNonCjkPunctuation(i) {
	return (i & constantsEx.cjkPunctuation) === constants.characterGroupPunctuation;
}
function isCjk(i) {
	return !!(i & constantsEx.cjk);
}
function isCjkOrIvs(i) {
	return !!(i & constantsEx.cjkOrIvs);
}
function isNonEmojiGeneralUseVS(i) {
	return i === constantsEx.nonEmojiGeneralUseVS;
}
function isSpaceOrPunctuation(i) {
	return !!(i & constantsEx.spaceOrPunctuation);
}
var constantsEx;
(function(i) {
	i.spaceOrPunctuation = 3, i.cjk = 4096, i.cjkPunctuation = 4098, i.ivs = 8192, i.cjkOrIvs = 12288, i.nonEmojiGeneralUseVS = 16384, i.variationSelector = 24576, i.ivsToCjkRightShift = 1;
})(constantsEx ||= {});
function classifyCharacter(i) {
	if (i === codes.eof || markdownLineEndingOrSpace(i) || unicodeWhitespace(i)) return constants.characterGroupWhitespace;
	let M = 0;
	if (i >= 4352) {
		if (nonEmojiGeneralUseVS(i)) return constantsEx.nonEmojiGeneralUseVS;
		switch (cjkOrIvs(i)) {
			case null: return constantsEx.ivs;
			case !0:
				M |= constantsEx.cjk;
				break;
		}
	}
	return unicodePunctuation(i) && (M |= constants.characterGroupPunctuation), M;
}
function classifyPrecedingCharacter(i, M, N) {
	if (!isNonEmojiGeneralUseVS(i)) return i;
	let P = M(), F = classifyCharacter(P);
	return !P || isUnicodeWhitespace(F) ? i : isCjkAmbiguousPunctuation(P, N) ? constantsEx.cjkPunctuation : stripIvs(F);
}
function stripIvs(i) {
	return i & ~constantsEx.ivs;
}
function isCodeHighSurrogate(i) {
	return !!(i && i >= 55296 && i <= 56319);
}
function isCodeLowSurrogate(i) {
	return !!(i && i >= 56320 && i <= 57343);
}
function tryGetGenuinePreviousCode(i, M, N) {
	if (M._bufferIndex < 2) return i;
	let P = N({
		start: {
			...M,
			_bufferIndex: M._bufferIndex - 2
		},
		end: M
	}).codePointAt(0);
	return P && P >= 65536 ? P : i;
}
function tryGetCodeTwoBefore(i, M, N) {
	let P = i >= 65536 ? 2 : 1;
	if (M._bufferIndex < 1 + P) return null;
	let F = M._bufferIndex - P - 2, I = N({
		start: {
			...M,
			_bufferIndex: F >= 0 ? F : 0
		},
		end: {
			...M,
			_bufferIndex: M._bufferIndex - P
		}
	}), L = I.charCodeAt(I.length - 1);
	if (Number.isNaN(L)) return null;
	if (I.length < 2 || L < 56320 || 57343 < L) return L;
	let R = I.codePointAt(0);
	return R && R >= 65536 ? R : L;
}
var TwoPreviousCode = class {
	cachedValue = void 0;
	constructor(i, M, N) {
		this.previousCode = i, this.nowPoint = M, this.sliceSerialize = N;
	}
	value() {
		return this.cachedValue === void 0 && (this.cachedValue = tryGetCodeTwoBefore(this.previousCode, this.nowPoint, this.sliceSerialize)), this.cachedValue;
	}
};
function tryGetGenuineNextCode(i, M, N) {
	let P = N({
		start: M,
		end: {
			...M,
			_bufferIndex: M._bufferIndex + 2
		}
	}).codePointAt(0);
	return P && P >= 65536 ? P : i;
}
var attention = {
	name: "attention",
	resolveAll: resolveAllAttention,
	tokenize: tokenizeAttention
};
function resolveAllAttention(i, M) {
	let N = -1, P, F, I, L, R, z, B, V;
	for (; ++N < i.length;) if (i[N][0] === "enter" && i[N][1].type === "attentionSequence" && i[N][1]._close) {
		for (P = N; P--;) if (i[P][0] === "exit" && i[P][1].type === "attentionSequence" && i[P][1]._open && M.sliceSerialize(i[P][1]).charCodeAt(0) === M.sliceSerialize(i[N][1]).charCodeAt(0)) {
			if ((i[P][1]._close || i[N][1]._open) && (i[N][1].end.offset - i[N][1].start.offset) % 3 && !((i[P][1].end.offset - i[P][1].start.offset + i[N][1].end.offset - i[N][1].start.offset) % 3)) continue;
			z = i[P][1].end.offset - i[P][1].start.offset > 1 && i[N][1].end.offset - i[N][1].start.offset > 1 ? 2 : 1;
			let H = { ...i[P][1].end }, U = { ...i[N][1].start };
			movePoint(H, -z), movePoint(U, z), L = {
				type: z > 1 ? types.strongSequence : types.emphasisSequence,
				start: H,
				end: { ...i[P][1].end }
			}, R = {
				type: z > 1 ? types.strongSequence : types.emphasisSequence,
				start: { ...i[N][1].start },
				end: U
			}, I = {
				type: z > 1 ? types.strongText : types.emphasisText,
				start: { ...i[P][1].end },
				end: { ...i[N][1].start }
			}, F = {
				type: z > 1 ? types.strong : types.emphasis,
				start: { ...L.start },
				end: { ...R.end }
			}, i[P][1].end = { ...L.start }, i[N][1].start = { ...R.end }, B = [], i[P][1].end.offset - i[P][1].start.offset && (B = push(B, [[
				"enter",
				i[P][1],
				M
			], [
				"exit",
				i[P][1],
				M
			]])), B = push(B, [
				[
					"enter",
					F,
					M
				],
				[
					"enter",
					L,
					M
				],
				[
					"exit",
					L,
					M
				],
				[
					"enter",
					I,
					M
				]
			]), M.parser.constructs.insideSpan.null, B = push(B, resolveAll(M.parser.constructs.insideSpan.null, i.slice(P + 1, N), M)), B = push(B, [
				[
					"exit",
					I,
					M
				],
				[
					"enter",
					R,
					M
				],
				[
					"exit",
					R,
					M
				],
				[
					"exit",
					F,
					M
				]
			]), i[N][1].end.offset - i[N][1].start.offset ? (V = 2, B = push(B, [[
				"enter",
				i[N][1],
				M
			], [
				"exit",
				i[N][1],
				M
			]])) : V = 0, splice(i, P - 1, N - P + 3, B), N = P + B.length - V - 2;
			break;
		}
	}
	for (N = -1; ++N < i.length;) i[N][1].type === "attentionSequence" && (i[N][1].type = "data");
	return i;
}
function tokenizeAttention(i, M) {
	let N = this.parser.constructs.attentionMarkers.null, { now: P, sliceSerialize: F, previous: I } = this, L = isCodeLowSurrogate(I) ? tryGetGenuinePreviousCode(I, P(), F) : I, R = classifyCharacter(L), z = new TwoPreviousCode(L, P(), F), B = classifyPrecedingCharacter(R, z.value.bind(z), L), V;
	return H;
	function H(M) {
		return M === codes.asterisk || codes.underscore, V = M, i.enter("attentionSequence"), U(M);
	}
	function U(I) {
		if (I === V) return i.consume(I), U;
		let R = i.exit("attentionSequence"), z = classifyCharacter(isCodeHighSurrogate(I) ? tryGetGenuineNextCode(I, P(), F) : I), H = isNonCjkPunctuation(B), W = H || isUnicodeWhitespace(B), G = isNonCjkPunctuation(z), K = G || isUnicodeWhitespace(z), q = isCjkOrIvs(B), J = !K || G && (W || q) || N.includes(I), Y = !W || H && (K || isCjk(z)) || N.includes(L);
		return R._open = !!(V === codes.asterisk ? J : J && (isSpaceOrPunctuation(B) || !Y)), R._close = !!(V === codes.asterisk ? Y : Y && (isSpaceOrPunctuation(z) || !J)), M(I);
	}
}
function movePoint(i, M) {
	i.column += M, i.offset += M, i._bufferIndex += M;
}
function cjkFriendlyExtension() {
	return {
		text: {
			[codes.asterisk]: attention,
			[codes.underscore]: attention
		},
		insideSpan: { null: [attention] }
	};
}
function remarkCjkFriendly() {
	let i = this.data();
	(i.micromarkExtensions ||= []).push(cjkFriendlyExtension());
}
var import_format = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((i, M) => {
	(function() {
		var i = M === void 0 ? function() {
			return this || (0, eval)("this");
		}() : M.exports = F;
		i.format = F, i.vsprintf = P, typeof console < "u" && typeof console.log == "function" && (i.printf = N);
		function N() {
			console.log(F.apply(null, arguments));
		}
		function P(i, M) {
			return F.apply(null, [i].concat(M));
		}
		function F(i) {
			for (var M = 1, N = [].slice.call(arguments), P = 0, F = i.length, I = "", L, R = !1, z, B, V = !1, H, U = function() {
				return N[M++];
			}, W = function() {
				for (var M = ""; /\d/.test(i[P]);) M += i[P++], L = i[P];
				return M.length > 0 ? parseInt(M) : null;
			}; P < F; ++P) if (L = i[P], R) switch (R = !1, L == "." ? (V = !1, L = i[++P]) : L == "0" && i[P + 1] == "." ? (V = !0, P += 2, L = i[P]) : V = !0, H = W(), L) {
				case "b":
					I += parseInt(U(), 10).toString(2);
					break;
				case "c":
					z = U(), typeof z == "string" || z instanceof String ? I += z : I += String.fromCharCode(parseInt(z, 10));
					break;
				case "d":
					I += parseInt(U(), 10);
					break;
				case "f":
					B = String(parseFloat(U()).toFixed(H || 6)), I += V ? B : B.replace(/^0/, "");
					break;
				case "j":
					I += JSON.stringify(U());
					break;
				case "o":
					I += "0" + parseInt(U(), 10).toString(8);
					break;
				case "s":
					I += U();
					break;
				case "x":
					I += "0x" + parseInt(U(), 10).toString(16);
					break;
				case "X":
					I += "0x" + parseInt(U(), 10).toString(16).toUpperCase();
					break;
				default:
					I += L;
					break;
			}
			else L === "%" ? R = !0 : I += L;
			return I;
		}
	})();
})))(), 1);
const fault = Object.assign(create(Error), {
	eval: create(EvalError),
	range: create(RangeError),
	reference: create(ReferenceError),
	syntax: create(SyntaxError),
	type: create(TypeError),
	uri: create(URIError)
});
function create(i) {
	return M.displayName = i.displayName || i.name, M;
	function M(M, ...N) {
		return new i(M && (0, import_format.default)(M, ...N));
	}
}
var own = {}.hasOwnProperty, markers = {
	yaml: "-",
	toml: "+"
};
function toMatters(i) {
	let M = [], N = -1, P = Array.isArray(i) ? i : i ? [i] : ["yaml"];
	for (; ++N < P.length;) M[N] = matter(P[N]);
	return M;
}
function matter(i) {
	let M = i;
	if (typeof M == "string") {
		if (!own.call(markers, M)) throw fault("Missing matter definition for `%s`", M);
		M = {
			type: M,
			marker: markers[M]
		};
	} else if (typeof M != "object") throw fault("Expected matter to be an object, not `%j`", M);
	if (!own.call(M, "type")) throw fault("Missing `type` in matter `%j`", M);
	if (!own.call(M, "fence") && !own.call(M, "marker")) throw fault("Missing `marker` or `fence` in matter `%j`", M);
	return M;
}
function frontmatter(i) {
	let M = toMatters(i), N = {}, P = -1;
	for (; ++P < M.length;) {
		let i = M[P], F = fence$1(i, "open").charCodeAt(0), I = createConstruct(i), L = N[F];
		Array.isArray(L) ? L.push(I) : N[F] = [I];
	}
	return { flow: N };
}
function createConstruct(i) {
	let M = i.anywhere, N = i.type, P = N + "Fence", F = P + "Sequence", I = N + "Value", L = {
		tokenize: V,
		partial: !0
	}, R, z = 0;
	return {
		tokenize: B,
		concrete: !0
	};
	function B(B, V, H) {
		let U = this;
		return W;
		function W(I) {
			let L = U.now();
			return L.column === 1 && (L.line === 1 || M) && (R = fence$1(i, "open"), z = 0, I === R.charCodeAt(z)) ? (B.enter(N), B.enter(P), B.enter(F), G(I)) : H(I);
		}
		function G(i) {
			return z === R.length ? (B.exit(F), markdownSpace(i) ? (B.enter("whitespace"), K(i)) : q(i)) : i === R.charCodeAt(z++) ? (B.consume(i), G) : H(i);
		}
		function K(i) {
			return markdownSpace(i) ? (B.consume(i), K) : (B.exit("whitespace"), q(i));
		}
		function q(M) {
			return markdownLineEnding(M) ? (B.exit(P), B.enter("lineEnding"), B.consume(M), B.exit("lineEnding"), R = fence$1(i, "close"), z = 0, B.attempt(L, $, Y)) : H(M);
		}
		function Y(i) {
			return i === null || markdownLineEnding(i) ? Q(i) : (B.enter(I), Z(i));
		}
		function Z(i) {
			return i === null || markdownLineEnding(i) ? (B.exit(I), Q(i)) : (B.consume(i), Z);
		}
		function Q(i) {
			return i === null ? H(i) : (B.enter("lineEnding"), B.consume(i), B.exit("lineEnding"), B.attempt(L, $, Y));
		}
		function $(i) {
			return B.exit(N), V(i);
		}
	}
	function V(i, M, N) {
		let I = 0;
		return L;
		function L(M) {
			return M === R.charCodeAt(I) ? (i.enter(P), i.enter(F), z(M)) : N(M);
		}
		function z(M) {
			return I === R.length ? (i.exit(F), markdownSpace(M) ? (i.enter("whitespace"), B(M)) : V(M)) : M === R.charCodeAt(I++) ? (i.consume(M), z) : N(M);
		}
		function B(M) {
			return markdownSpace(M) ? (i.consume(M), B) : (i.exit("whitespace"), V(M));
		}
		function V(F) {
			return F === null || markdownLineEnding(F) ? (i.exit(P), M(F)) : N(F);
		}
	}
}
function fence$1(i, M) {
	return i.marker ? pick$1(i.marker, M).repeat(3) : pick$1(i.fence, M);
}
function pick$1(i, M) {
	return typeof i == "string" ? i : i[M];
}
function frontmatterFromMarkdown(i) {
	let M = toMatters(i), N = {}, P = {}, F = -1;
	for (; ++F < M.length;) {
		let i = M[F];
		N[i.type] = opener(i), P[i.type] = close, P[i.type + "Value"] = value;
	}
	return {
		enter: N,
		exit: P
	};
}
function opener(i) {
	return M;
	function M(M) {
		this.enter({
			type: i.type,
			value: ""
		}, M), this.buffer();
	}
}
function close(i) {
	let M = this.resume(), N = this.stack[this.stack.length - 1];
	"value" in N, this.exit(i), N.value = M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
}
function value(i) {
	this.config.enter.data.call(this, i), this.config.exit.data.call(this, i);
}
function frontmatterToMarkdown(i) {
	let M = [], N = {}, P = toMatters(i), F = -1;
	for (; ++F < P.length;) {
		let i = P[F];
		N[i.type] = handler(i);
		let I = fence(i, "open");
		M.push({
			atBreak: !0,
			character: I.charAt(0),
			after: escapeStringRegexp(I.charAt(1))
		});
	}
	return {
		unsafe: M,
		handlers: N
	};
}
function handler(i) {
	let M = fence(i, "open"), N = fence(i, "close");
	return P;
	function P(i) {
		return M + (i.value ? "\n" + i.value : "") + "\n" + N;
	}
}
function fence(i, M) {
	return i.marker ? pick(i.marker, M).repeat(3) : pick(i.fence, M);
}
function pick(i, M) {
	return typeof i == "string" ? i : i[M];
}
var emptyOptions = "yaml";
function remarkFrontmatter(i) {
	let M = this, N = i || emptyOptions, P = M.data(), F = P.micromarkExtensions ||= [], I = P.fromMarkdownExtensions ||= [], L = P.toMarkdownExtensions ||= [];
	F.push(frontmatter(N)), I.push(frontmatterFromMarkdown(N)), L.push(frontmatterToMarkdown(N));
}
function isMarkdownTocLevel(i) {
	return i >= 1 && i <= 5;
}
function foldMarkdownTocWhitespace(i) {
	let M = "", N = !1;
	for (let P = 0; P < i.length; P += 1) {
		if (isMarkdownTocWhitespace(i.charCodeAt(P))) {
			N = M.length > 0;
			continue;
		}
		N &&= (M += " ", !1), M += i.charAt(P);
	}
	return M;
}
function isMarkdownTocWhitespace(i) {
	return i === 32 || i >= 9 && i <= 13 || i === 160 || i === 5760 || i >= 8192 && i <= 8202 || i === 8232 || i === 8233 || i === 8239 || i === 8287 || i === 12288 || i === 65279;
}
function nearestParent(i, M) {
	for (let N = i.length - 1; N >= 0; --N) {
		let P = i.at(N);
		if (P && P.level < M) return P;
	}
	return i[0];
}
function appendTocItem(i, M) {
	nearestParent(i, M.level).children.push(M), Reflect.set(i, M.level, M), i.length = M.level + 1;
}
function markdownAstNodeToText(i) {
	return typeof i.value == "string" ? i.value : typeof i.alt == "string" ? i.alt : (i.children ?? []).map(markdownAstNodeToText).join("");
}
function buildMarkdownTableOfContents(i) {
	let M = new MarkdownHeadingSlugger(), N = {
		id: "toc-root",
		level: 1,
		title: "",
		children: []
	}, P = [N], F = unified().use(remarkParse).use(remarkGfm).use(remarkCjkFriendly).use(remarkFrontmatter, ["yaml", "toml"]).parse(i);
	function I(i) {
		if (i.type === "heading" && typeof i.depth == "number" && isMarkdownTocLevel(i.depth)) {
			let N = foldMarkdownTocWhitespace(markdownAstNodeToText(i));
			N && appendTocItem(P, {
				children: [],
				id: M.slug(N),
				level: i.depth,
				title: N
			});
		}
		for (let M of i.children ?? []) I(M);
	}
	return I(F), N.children;
}
var EMPTY_MARKDOWN_TOC = [];
function selectMarkdownTableOfContents(i, M, N = buildMarkdownTableOfContents) {
	return i ? N(M) : EMPTY_MARKDOWN_TOC;
}
async function copyMarkdownReviewNotesForAgent({ notes: i, content: M, writeClipboardText: N }) {
	return i.length === 0 ? !1 : (await N(formatMarkdownReviewNotes(i, M)), !0);
}
function isMarkdownPreviewSearchQueryTooLarge(i, M = 2048) {
	return isClipboardTextByteLengthOverLimit(i, M);
}
function isMarkdownPreviewFindShortcut(i, M, N) {
	return keybindingMatchesAction("editor.find", i, M, N);
}
function isMarkdownPreviewReplaceShortcut(i, M, N) {
	return keybindingMatchesAction("editor.replace", i, M, N);
}
function findTextMatchRanges(i, M, N = {}) {
	if (!M || isMarkdownPreviewSearchQueryTooLarge(M)) return [];
	let P = N.matchCase ? findCaseSensitiveMatchRanges(i, M) : findCaseInsensitiveMatchRanges(i, M);
	return N.wholeWord ? P.filter((M) => isWholeWordMatch(i, M.start, M.end)) : P;
}
function findCaseSensitiveMatchRanges(i, M) {
	let N = [], P = 0;
	for (; P <= i.length - M.length;) {
		let F = i.indexOf(M, P);
		if (F === -1) break;
		N.push({
			start: F,
			end: F + M.length
		}), P = F + M.length;
	}
	return N;
}
function findCaseInsensitiveMatchRanges(i, M) {
	let N = buildLocaleLowercaseIndex(i), P = M.toLocaleLowerCase(), F = [], I = 0;
	for (; I <= N.text.length - P.length;) {
		let M = N.text.indexOf(P, I);
		if (M === -1) break;
		let L = M + P.length;
		F.push({
			start: N.originalStartByNormalizedOffset[M] ?? i.length,
			end: N.originalEndByNormalizedOffset[L - 1] ?? i.length
		}), I = L + (P.length === 0 ? 1 : 0);
	}
	return F;
}
var WORD_CHARACTER = /[\p{L}\p{N}_]/u;
function isWordCharacter(i) {
	return i !== void 0 && WORD_CHARACTER.test(i);
}
function codePointBefore(i, M) {
	if (M <= 0) return;
	let N = i.charCodeAt(M - 1);
	return N >= 56320 && N <= 57343 && M > 1 && i.charCodeAt(M - 2) >= 55296 && i.charCodeAt(M - 2) <= 56319 ? i.slice(M - 2, M) : i[M - 1];
}
function codePointAt(i, M) {
	let N = i.codePointAt(M);
	return N === void 0 ? void 0 : String.fromCodePoint(N);
}
function isWholeWordMatch(i, M, N) {
	let P = codePointBefore(i, M), F = codePointAt(i, N);
	return !isWordCharacter(P) && !isWordCharacter(F);
}
function buildLocaleLowercaseIndex(i) {
	let M = "", N = [], P = [], F = 0;
	for (let I of i) {
		let i = I.toLocaleLowerCase(), L = F + I.length;
		for (let M = 0; M < i.length; M += 1) N.push(F), P.push(L);
		M += i, F = L;
	}
	return {
		text: M,
		originalStartByNormalizedOffset: N,
		originalEndByNormalizedOffset: P
	};
}
var SEARCH_HIGHLIGHT_NAME = "markdown-preview-search-match", ACTIVE_SEARCH_HIGHLIGHT_NAME = "markdown-preview-search-active-match";
function getHighlightApi() {
	let i = globalThis, M = i.CSS?.highlights, N = i.Highlight;
	return !M || typeof N != "function" ? null : {
		registry: M,
		create: (i) => {
			let M = new N();
			for (let N of i) M.add(N);
			return M;
		}
	};
}
var searchRangesByInstance = /* @__PURE__ */ new Map(), activeRangeByInstance = /* @__PURE__ */ new Map();
function paintMatchHighlight(i) {
	let M = [];
	for (let i of searchRangesByInstance.values()) for (let N of i) M.push(N);
	M.length > 0 ? i.registry.set(SEARCH_HIGHLIGHT_NAME, i.create(M)) : i.registry.delete(SEARCH_HIGHLIGHT_NAME);
}
function paintActiveHighlight(i) {
	let M = [];
	for (let i of activeRangeByInstance.values()) M.push(i);
	M.length > 0 ? i.registry.set(ACTIVE_SEARCH_HIGHLIGHT_NAME, i.create(M)) : i.registry.delete(ACTIVE_SEARCH_HIGHLIGHT_NAME);
}
function clearMarkdownPreviewSearchHighlights(i) {
	searchRangesByInstance.delete(i), activeRangeByInstance.delete(i);
	let M = getHighlightApi();
	M && (paintMatchHighlight(M), paintActiveHighlight(M));
}
function applyMarkdownPreviewSearchHighlights(i, M, N) {
	let P = [];
	if (N && !isMarkdownPreviewSearchQueryTooLarge(N)) {
		let i = document.createTreeWalker(M, NodeFilter.SHOW_TEXT, { acceptNode(i) {
			return !(i.parentElement instanceof HTMLElement) || !i.textContent?.trim() ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
		} }), F = i.nextNode();
		for (; F;) {
			if (F instanceof Text) {
				let i = F.textContent ?? "";
				for (let { start: M, end: I } of findTextMatchRanges(i, N)) {
					let i = document.createRange();
					i.setStart(F, M), i.setEnd(F, I), P.push(i);
				}
			}
			F = i.nextNode();
		}
	}
	searchRangesByInstance.set(i, P), activeRangeByInstance.delete(i);
	let F = getHighlightApi();
	return F && (paintMatchHighlight(F), paintActiveHighlight(F)), P;
}
function setActiveMarkdownPreviewSearchMatch(i, M, N) {
	let P = N >= 0 ? M[N] : void 0;
	P ? activeRangeByInstance.set(i, P) : activeRangeByInstance.delete(i);
	let F = getHighlightApi();
	F && paintActiveHighlight(F), P && P.startContainer.parentElement?.scrollIntoView({
		block: "center",
		inline: "nearest"
	});
}
export { isMarkdownPreviewReplaceShortcut as a, copyMarkdownReviewNotesForAgent as c, remarkCjkFriendly as d, MarkdownTableOfContentsPanel as f, isMarkdownPreviewFindShortcut as i, selectMarkdownTableOfContents as l, clearMarkdownPreviewSearchHighlights as n, isMarkdownPreviewSearchQueryTooLarge as o, findTextMatchRanges as r, setActiveMarkdownPreviewSearchMatch as s, applyMarkdownPreviewSearchHighlights as t, remarkFrontmatter as u };
