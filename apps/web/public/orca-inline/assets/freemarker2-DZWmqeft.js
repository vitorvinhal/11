import { h as languages } from "./editor.api2-B26FOp3A.js";
var EMPTY_ELEMENTS = [
	"assign",
	"flush",
	"ftl",
	"return",
	"global",
	"import",
	"include",
	"break",
	"continue",
	"local",
	"nested",
	"nt",
	"setting",
	"stop",
	"t",
	"lt",
	"rt",
	"fallback"
], BLOCK_ELEMENTS = [
	"attempt",
	"autoesc",
	"autoEsc",
	"compress",
	"comment",
	"escape",
	"noescape",
	"function",
	"if",
	"list",
	"items",
	"sep",
	"macro",
	"noparse",
	"noParse",
	"noautoesc",
	"noAutoEsc",
	"outputformat",
	"switch",
	"visit",
	"recurse"
], TagSyntaxAngle = {
	close: ">",
	id: "angle",
	open: "<"
}, TagSyntaxBracket = {
	close: "\\]",
	id: "bracket",
	open: "\\["
}, TagSyntaxAuto = {
	close: "[>\\]]",
	id: "auto",
	open: "[<\\[]"
}, InterpolationSyntaxDollar = {
	close: "\\}",
	id: "dollar",
	open1: "\\$",
	open2: "\\{"
}, InterpolationSyntaxBracket = {
	close: "\\]",
	id: "bracket",
	open1: "\\[",
	open2: "="
};
function createLangConfiguration(h) {
	return {
		brackets: [
			["<", ">"],
			["[", "]"],
			["(", ")"],
			["{", "}"]
		],
		comments: { blockComment: [`${h.open}--`, `--${h.close}`] },
		autoCloseBefore: "\n\r	 }]),.:;=",
		autoClosingPairs: [
			{
				open: "{",
				close: "}"
			},
			{
				open: "[",
				close: "]"
			},
			{
				open: "(",
				close: ")"
			},
			{
				open: "\"",
				close: "\"",
				notIn: ["string"]
			},
			{
				open: "'",
				close: "'",
				notIn: ["string"]
			}
		],
		surroundingPairs: [
			{
				open: "\"",
				close: "\""
			},
			{
				open: "'",
				close: "'"
			},
			{
				open: "{",
				close: "}"
			},
			{
				open: "[",
				close: "]"
			},
			{
				open: "(",
				close: ")"
			},
			{
				open: "<",
				close: ">"
			}
		],
		folding: { markers: {
			start: /* @__PURE__ */ RegExp(`${h.open}#(?:${BLOCK_ELEMENTS.join("|")})([^/${h.close}]*(?!/)${h.close})[^${h.open}]*$`),
			end: /* @__PURE__ */ RegExp(`${h.open}/#(?:${BLOCK_ELEMENTS.join("|")})[\\r\\n\\t ]*>`)
		} },
		onEnterRules: [{
			beforeText: /* @__PURE__ */ RegExp(`${h.open}#(?!(?:${EMPTY_ELEMENTS.join("|")}))([a-zA-Z_]+)([^/${h.close}]*(?!/)${h.close})[^${h.open}]*$`),
			afterText: /* @__PURE__ */ RegExp(`^${h.open}/#([a-zA-Z_]+)[\\r\\n\\t ]*${h.close}$`),
			action: { indentAction: languages.IndentAction.IndentOutdent }
		}, {
			beforeText: /* @__PURE__ */ RegExp(`${h.open}#(?!(?:${EMPTY_ELEMENTS.join("|")}))([a-zA-Z_]+)([^/${h.close}]*(?!/)${h.close})[^${h.open}]*$`),
			action: { indentAction: languages.IndentAction.Indent }
		}]
	};
}
function createLangConfigurationAuto() {
	return {
		brackets: [
			["<", ">"],
			["[", "]"],
			["(", ")"],
			["{", "}"]
		],
		autoCloseBefore: "\n\r	 }]),.:;=",
		autoClosingPairs: [
			{
				open: "{",
				close: "}"
			},
			{
				open: "[",
				close: "]"
			},
			{
				open: "(",
				close: ")"
			},
			{
				open: "\"",
				close: "\"",
				notIn: ["string"]
			},
			{
				open: "'",
				close: "'",
				notIn: ["string"]
			}
		],
		surroundingPairs: [
			{
				open: "\"",
				close: "\""
			},
			{
				open: "'",
				close: "'"
			},
			{
				open: "{",
				close: "}"
			},
			{
				open: "[",
				close: "]"
			},
			{
				open: "(",
				close: ")"
			},
			{
				open: "<",
				close: ">"
			}
		],
		folding: { markers: {
			start: /* @__PURE__ */ RegExp(`[<\\[]#(?:${BLOCK_ELEMENTS.join("|")})([^/>\\]]*(?!/)[>\\]])[^<\\[]*$`),
			end: /* @__PURE__ */ RegExp(`[<\\[]/#(?:${BLOCK_ELEMENTS.join("|")})[\\r\\n\\t ]*>`)
		} },
		onEnterRules: [{
			beforeText: /* @__PURE__ */ RegExp(`[<\\[]#(?!(?:${EMPTY_ELEMENTS.join("|")}))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$`),
			afterText: /* @__PURE__ */ RegExp("^[<\\[]/#([a-zA-Z_]+)[\\r\\n\\t ]*[>\\]]$"),
			action: { indentAction: languages.IndentAction.IndentOutdent }
		}, {
			beforeText: /* @__PURE__ */ RegExp(`[<\\[]#(?!(?:${EMPTY_ELEMENTS.join("|")}))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$`),
			action: { indentAction: languages.IndentAction.Indent }
		}]
	};
}
function createMonarchLanguage(e, p) {
	let m = `_${e.id}_${p.id}`, h = (e) => e.replace(/__id__/g, m), g = (e) => {
		let p = e.source.replace(/__id__/g, m);
		return new RegExp(p, e.flags);
	};
	return {
		unicode: !0,
		includeLF: !1,
		start: h("default__id__"),
		ignoreCase: !1,
		defaultToken: "invalid",
		tokenPostfix: ".freemarker2",
		brackets: [
			{
				open: "{",
				close: "}",
				token: "delimiter.curly"
			},
			{
				open: "[",
				close: "]",
				token: "delimiter.square"
			},
			{
				open: "(",
				close: ")",
				token: "delimiter.parenthesis"
			},
			{
				open: "<",
				close: ">",
				token: "delimiter.angle"
			}
		],
		[h("open__id__")]: new RegExp(e.open),
		[h("close__id__")]: new RegExp(e.close),
		[h("iOpen1__id__")]: new RegExp(p.open1),
		[h("iOpen2__id__")]: new RegExp(p.open2),
		[h("iClose__id__")]: new RegExp(p.close),
		[h("startTag__id__")]: g(/(@open__id__)(#)/),
		[h("endTag__id__")]: g(/(@open__id__)(\/#)/),
		[h("startOrEndTag__id__")]: g(/(@open__id__)(\/?#)/),
		[h("closeTag1__id__")]: g(/((?:@blank)*)(@close__id__)/),
		[h("closeTag2__id__")]: g(/((?:@blank)*\/?)(@close__id__)/),
		blank: /[ \t\n\r]/,
		keywords: [
			"false",
			"true",
			"in",
			"as",
			"using"
		],
		directiveStartCloseTag1: /attempt|recover|sep|auto[eE]sc|no(?:autoe|AutoE)sc|compress|default|no[eE]scape|comment|no[pP]arse/,
		directiveStartCloseTag2: /else|break|continue|return|stop|flush|t|lt|rt|nt|nested|recurse|fallback|ftl/,
		directiveStartBlank: /if|else[iI]f|list|for[eE]ach|switch|case|assign|global|local|include|import|function|macro|transform|visit|stop|return|call|setting|output[fF]ormat|nested|recurse|escape|ftl|items/,
		directiveEndCloseTag1: /if|list|items|sep|recover|attempt|for[eE]ach|local|global|assign|function|macro|output[fF]ormat|auto[eE]sc|no(?:autoe|AutoE)sc|compress|transform|switch|escape|no[eE]scape/,
		escapedChar: /\\(?:[ntrfbgla\\'"\{=]|(?:x[0-9A-Fa-f]{1,4}))/,
		asciiDigit: /[0-9]/,
		integer: /[0-9]+/,
		nonEscapedIdStartChar: /[\$@-Z_a-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u1FFF\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183-\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3006\u3031-\u3035\u303B-\u303C\u3040-\u318F\u31A0-\u31BA\u31F0-\u31FF\u3300-\u337F\u3400-\u4DB5\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
		escapedIdChar: /\\[\-\.:#]/,
		idStartChar: /(?:@nonEscapedIdStartChar)|(?:@escapedIdChar)/,
		id: /(?:@idStartChar)(?:(?:@idStartChar)|(?:@asciiDigit))*/,
		specialHashKeys: /\*\*|\*|false|true|in|as|using/,
		namedSymbols: /&lt;=|&gt;=|\\lte|\\lt|&lt;|\\gte|\\gt|&gt;|&amp;&amp;|\\and|-&gt;|->|==|!=|\+=|-=|\*=|\/=|%=|\+\+|--|<=|&&|\|\||:|\.\.\.|\.\.\*|\.\.<|\.\.!|\?\?|=|<|\+|-|\*|\/|%|\||\.\.|\?|!|&|\.|,|;/,
		arrows: ["->", "-&gt;"],
		delimiters: [
			";",
			":",
			",",
			"."
		],
		stringOperators: [
			"lte",
			"lt",
			"gte",
			"gt"
		],
		noParseTags: [
			"noparse",
			"noParse",
			"comment"
		],
		tokenizer: {
			[h("default__id__")]: [{ include: h("@directive_token__id__") }, { include: h("@interpolation_and_text_token__id__") }],
			[h("fmExpression__id__.directive")]: [
				{ include: h("@blank_and_expression_comment_token__id__") },
				{ include: h("@directive_end_token__id__") },
				{ include: h("@expression_token__id__") }
			],
			[h("fmExpression__id__.interpolation")]: [
				{ include: h("@blank_and_expression_comment_token__id__") },
				{ include: h("@expression_token__id__") },
				{ include: h("@greater_operators_token__id__") }
			],
			[h("inParen__id__.plain")]: [
				{ include: h("@blank_and_expression_comment_token__id__") },
				{ include: h("@directive_end_token__id__") },
				{ include: h("@expression_token__id__") }
			],
			[h("inParen__id__.gt")]: [
				{ include: h("@blank_and_expression_comment_token__id__") },
				{ include: h("@expression_token__id__") },
				{ include: h("@greater_operators_token__id__") }
			],
			[h("noSpaceExpression__id__")]: [
				{ include: h("@no_space_expression_end_token__id__") },
				{ include: h("@directive_end_token__id__") },
				{ include: h("@expression_token__id__") }
			],
			[h("unifiedCall__id__")]: [{ include: h("@unified_call_token__id__") }],
			[h("singleString__id__")]: [{ include: h("@string_single_token__id__") }],
			[h("doubleString__id__")]: [{ include: h("@string_double_token__id__") }],
			[h("rawSingleString__id__")]: [{ include: h("@string_single_raw_token__id__") }],
			[h("rawDoubleString__id__")]: [{ include: h("@string_double_raw_token__id__") }],
			[h("expressionComment__id__")]: [{ include: h("@expression_comment_token__id__") }],
			[h("noParse__id__")]: [{ include: h("@no_parse_token__id__") }],
			[h("terseComment__id__")]: [{ include: h("@terse_comment_token__id__") }],
			[h("directive_token__id__")]: [
				[g(/(?:@startTag__id__)(@directiveStartCloseTag1)(?:@closeTag1__id__)/), e.id === "auto" ? { cases: {
					"$1==<": {
						token: "@rematch",
						switchTo: `@default_angle_${p.id}`
					},
					"$1==[": {
						token: "@rematch",
						switchTo: `@default_bracket_${p.id}`
					}
				} } : [
					{ token: "@brackets.directive" },
					{ token: "delimiter.directive" },
					{ cases: {
						"@noParseTags": {
							token: "tag",
							next: h("@noParse__id__.$3")
						},
						"@default": { token: "tag" }
					} },
					{ token: "delimiter.directive" },
					{ token: "@brackets.directive" }
				]],
				[g(/(?:@startTag__id__)(@directiveStartCloseTag2)(?:@closeTag2__id__)/), e.id === "auto" ? { cases: {
					"$1==<": {
						token: "@rematch",
						switchTo: `@default_angle_${p.id}`
					},
					"$1==[": {
						token: "@rematch",
						switchTo: `@default_bracket_${p.id}`
					}
				} } : [
					{ token: "@brackets.directive" },
					{ token: "delimiter.directive" },
					{ token: "tag" },
					{ token: "delimiter.directive" },
					{ token: "@brackets.directive" }
				]],
				[g(/(?:@startTag__id__)(@directiveStartBlank)(@blank)/), e.id === "auto" ? { cases: {
					"$1==<": {
						token: "@rematch",
						switchTo: `@default_angle_${p.id}`
					},
					"$1==[": {
						token: "@rematch",
						switchTo: `@default_bracket_${p.id}`
					}
				} } : [
					{ token: "@brackets.directive" },
					{ token: "delimiter.directive" },
					{ token: "tag" },
					{
						token: "",
						next: h("@fmExpression__id__.directive")
					}
				]],
				[g(/(?:@endTag__id__)(@directiveEndCloseTag1)(?:@closeTag1__id__)/), e.id === "auto" ? { cases: {
					"$1==<": {
						token: "@rematch",
						switchTo: `@default_angle_${p.id}`
					},
					"$1==[": {
						token: "@rematch",
						switchTo: `@default_bracket_${p.id}`
					}
				} } : [
					{ token: "@brackets.directive" },
					{ token: "delimiter.directive" },
					{ token: "tag" },
					{ token: "delimiter.directive" },
					{ token: "@brackets.directive" }
				]],
				[g(/(@open__id__)(@)/), e.id === "auto" ? { cases: {
					"$1==<": {
						token: "@rematch",
						switchTo: `@default_angle_${p.id}`
					},
					"$1==[": {
						token: "@rematch",
						switchTo: `@default_bracket_${p.id}`
					}
				} } : [{ token: "@brackets.directive" }, {
					token: "delimiter.directive",
					next: h("@unifiedCall__id__")
				}]],
				[g(/(@open__id__)(\/@)((?:(?:@id)(?:\.(?:@id))*)?)(?:@closeTag1__id__)/), [
					{ token: "@brackets.directive" },
					{ token: "delimiter.directive" },
					{ token: "tag" },
					{ token: "delimiter.directive" },
					{ token: "@brackets.directive" }
				]],
				[g(/(@open__id__)#--/), e.id === "auto" ? { cases: {
					"$1==<": {
						token: "@rematch",
						switchTo: `@default_angle_${p.id}`
					},
					"$1==[": {
						token: "@rematch",
						switchTo: `@default_bracket_${p.id}`
					}
				} } : {
					token: "comment",
					next: h("@terseComment__id__")
				}],
				[g(/(?:@startOrEndTag__id__)([a-zA-Z_]+)/), e.id === "auto" ? { cases: {
					"$1==<": {
						token: "@rematch",
						switchTo: `@default_angle_${p.id}`
					},
					"$1==[": {
						token: "@rematch",
						switchTo: `@default_bracket_${p.id}`
					}
				} } : [
					{ token: "@brackets.directive" },
					{ token: "delimiter.directive" },
					{
						token: "tag.invalid",
						next: h("@fmExpression__id__.directive")
					}
				]]
			],
			[h("interpolation_and_text_token__id__")]: [[g(/(@iOpen1__id__)(@iOpen2__id__)/), [{ token: p.id === "bracket" ? "@brackets.interpolation" : "delimiter.interpolation" }, {
				token: p.id === "bracket" ? "delimiter.interpolation" : "@brackets.interpolation",
				next: h("@fmExpression__id__.interpolation")
			}]], [/[\$#<\[\{]|(?:@blank)+|[^\$<#\[\{\n\r\t ]+/, { token: "source" }]],
			[h("string_single_token__id__")]: [
				[/[^'\\]/, { token: "string" }],
				[/@escapedChar/, { token: "string.escape" }],
				[/'/, {
					token: "string",
					next: "@pop"
				}]
			],
			[h("string_double_token__id__")]: [
				[/[^"\\]/, { token: "string" }],
				[/@escapedChar/, { token: "string.escape" }],
				[/"/, {
					token: "string",
					next: "@pop"
				}]
			],
			[h("string_single_raw_token__id__")]: [[/[^']+/, { token: "string.raw" }], [/'/, {
				token: "string.raw",
				next: "@pop"
			}]],
			[h("string_double_raw_token__id__")]: [[/[^"]+/, { token: "string.raw" }], [/"/, {
				token: "string.raw",
				next: "@pop"
			}]],
			[h("expression_token__id__")]: [
				[/(r?)(['"])/, { cases: {
					"r'": [{ token: "keyword" }, {
						token: "string.raw",
						next: h("@rawSingleString__id__")
					}],
					"r\"": [{ token: "keyword" }, {
						token: "string.raw",
						next: h("@rawDoubleString__id__")
					}],
					"'": [{ token: "source" }, {
						token: "string",
						next: h("@singleString__id__")
					}],
					"\"": [{ token: "source" }, {
						token: "string",
						next: h("@doubleString__id__")
					}]
				} }],
				[/(?:@integer)(?:\.(?:@integer))?/, { cases: {
					"(?:@integer)": { token: "number" },
					"@default": { token: "number.float" }
				} }],
				[/(\.)(@blank*)(@specialHashKeys)/, [
					{ token: "delimiter" },
					{ token: "" },
					{ token: "identifier" }
				]],
				[/(?:@namedSymbols)/, { cases: {
					"@arrows": { token: "meta.arrow" },
					"@delimiters": { token: "delimiter" },
					"@default": { token: "operators" }
				} }],
				[/@id/, { cases: {
					"@keywords": { token: "keyword.$0" },
					"@stringOperators": { token: "operators" },
					"@default": { token: "identifier" }
				} }],
				[/[\[\]\(\)\{\}]/, { cases: {
					"\\[": { cases: {
						"$S2==gt": {
							token: "@brackets",
							next: h("@inParen__id__.gt")
						},
						"@default": {
							token: "@brackets",
							next: h("@inParen__id__.plain")
						}
					} },
					"\\]": { cases: {
						...p.id === "bracket" ? { "$S2==interpolation": {
							token: "@brackets.interpolation",
							next: "@popall"
						} } : {},
						...e.id === "bracket" ? { "$S2==directive": {
							token: "@brackets.directive",
							next: "@popall"
						} } : {},
						[h("$S1==inParen__id__")]: {
							token: "@brackets",
							next: "@pop"
						},
						"@default": { token: "@brackets" }
					} },
					"\\(": {
						token: "@brackets",
						next: h("@inParen__id__.gt")
					},
					"\\)": { cases: {
						[h("$S1==inParen__id__")]: {
							token: "@brackets",
							next: "@pop"
						},
						"@default": { token: "@brackets" }
					} },
					"\\{": { cases: {
						"$S2==gt": {
							token: "@brackets",
							next: h("@inParen__id__.gt")
						},
						"@default": {
							token: "@brackets",
							next: h("@inParen__id__.plain")
						}
					} },
					"\\}": { cases: {
						...p.id === "bracket" ? {} : { "$S2==interpolation": {
							token: "@brackets.interpolation",
							next: "@popall"
						} },
						[h("$S1==inParen__id__")]: {
							token: "@brackets",
							next: "@pop"
						},
						"@default": { token: "@brackets" }
					} }
				} }],
				[/\$\{/, { token: "delimiter.invalid" }]
			],
			[h("blank_and_expression_comment_token__id__")]: [[/(?:@blank)+/, { token: "" }], [/[<\[][#!]--/, {
				token: "comment",
				next: h("@expressionComment__id__")
			}]],
			[h("directive_end_token__id__")]: [[/>/, e.id === "bracket" ? { token: "operators" } : {
				token: "@brackets.directive",
				next: "@popall"
			}], [g(/(\/)(@close__id__)/), [{ token: "delimiter.directive" }, {
				token: "@brackets.directive",
				next: "@popall"
			}]]],
			[h("greater_operators_token__id__")]: [[/>/, { token: "operators" }], [/>=/, { token: "operators" }]],
			[h("no_space_expression_end_token__id__")]: [[/(?:@blank)+/, {
				token: "",
				switchTo: h("@fmExpression__id__.directive")
			}]],
			[h("unified_call_token__id__")]: [
				[/(@id)((?:@blank)+)/, [{ token: "tag" }, {
					token: "",
					next: h("@fmExpression__id__.directive")
				}]],
				[g(/(@id)(\/?)(@close__id__)/), [
					{ token: "tag" },
					{ token: "delimiter.directive" },
					{
						token: "@brackets.directive",
						next: "@popall"
					}
				]],
				[/./, {
					token: "@rematch",
					next: h("@noSpaceExpression__id__")
				}]
			],
			[h("no_parse_token__id__")]: [[g(/(@open__id__)(\/#?)([a-zA-Z]+)((?:@blank)*)(@close__id__)/), { cases: {
				"$S2==$3": [
					{ token: "@brackets.directive" },
					{ token: "delimiter.directive" },
					{ token: "tag" },
					{ token: "" },
					{
						token: "@brackets.directive",
						next: "@popall"
					}
				],
				"$S2==comment": [
					{ token: "comment" },
					{ token: "comment" },
					{ token: "comment" },
					{ token: "comment" },
					{ token: "comment" }
				],
				"@default": [
					{ token: "source" },
					{ token: "source" },
					{ token: "source" },
					{ token: "source" },
					{ token: "source" }
				]
			} }], [/[^<\[\-]+|[<\[\-]/, { cases: {
				"$S2==comment": { token: "comment" },
				"@default": { token: "source" }
			} }]],
			[h("expression_comment_token__id__")]: [[/--[>\]]/, {
				token: "comment",
				next: "@pop"
			}], [/[^\->\]]+|[>\]\-]/, { token: "comment" }]],
			[h("terse_comment_token__id__")]: [[g(/--(?:@close__id__)/), {
				token: "comment",
				next: "@popall"
			}], [/[^<\[\-]+|[<\[\-]/, { token: "comment" }]]
		}
	};
}
function createMonarchLanguageAuto(e) {
	let p = createMonarchLanguage(TagSyntaxAngle, e), m = createMonarchLanguage(TagSyntaxBracket, e), _ = createMonarchLanguage(TagSyntaxAuto, e);
	return {
		...p,
		...m,
		..._,
		unicode: !0,
		includeLF: !1,
		start: `default_auto_${e.id}`,
		ignoreCase: !1,
		defaultToken: "invalid",
		tokenPostfix: ".freemarker2",
		brackets: [
			{
				open: "{",
				close: "}",
				token: "delimiter.curly"
			},
			{
				open: "[",
				close: "]",
				token: "delimiter.square"
			},
			{
				open: "(",
				close: ")",
				token: "delimiter.parenthesis"
			},
			{
				open: "<",
				close: ">",
				token: "delimiter.angle"
			}
		],
		tokenizer: {
			...p.tokenizer,
			...m.tokenizer,
			..._.tokenizer
		}
	};
}
var TagAngleInterpolationDollar = {
	conf: createLangConfiguration(TagSyntaxAngle),
	language: createMonarchLanguage(TagSyntaxAngle, InterpolationSyntaxDollar)
}, TagBracketInterpolationDollar = {
	conf: createLangConfiguration(TagSyntaxBracket),
	language: createMonarchLanguage(TagSyntaxBracket, InterpolationSyntaxDollar)
}, TagAngleInterpolationBracket = {
	conf: createLangConfiguration(TagSyntaxAngle),
	language: createMonarchLanguage(TagSyntaxAngle, InterpolationSyntaxBracket)
}, TagBracketInterpolationBracket = {
	conf: createLangConfiguration(TagSyntaxBracket),
	language: createMonarchLanguage(TagSyntaxBracket, InterpolationSyntaxBracket)
}, TagAutoInterpolationDollar = {
	conf: createLangConfigurationAuto(),
	language: createMonarchLanguageAuto(InterpolationSyntaxDollar)
}, TagAutoInterpolationBracket = {
	conf: createLangConfigurationAuto(),
	language: createMonarchLanguageAuto(InterpolationSyntaxBracket)
};
export { TagAngleInterpolationBracket, TagAngleInterpolationDollar, TagAutoInterpolationBracket, TagAutoInterpolationDollar, TagBracketInterpolationBracket, TagBracketInterpolationDollar };
