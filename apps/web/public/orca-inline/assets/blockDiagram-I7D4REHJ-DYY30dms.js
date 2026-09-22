import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { a as clear, b as getConfig, c as configureSvgSize, rt as rgba_default, s as common_default, x as getConfig2 } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { t as channel_default } from "./channel-BOnYEfIe.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { A as int16ArrayTag, B as uint16ArrayTag, C as arrayBufferTag, D as dateTag, E as dataViewTag, F as objectTag, G as isPrimitive, H as uint8ArrayTag, I as regexpTag, L as setTag, M as int8ArrayTag, N as mapTag, O as float32ArrayTag, P as numberTag, R as stringTag, S as argumentsTag, T as booleanTag, U as uint8ClampedArrayTag, V as uint32ArrayTag, W as getTag, j as int32ArrayTag, k as float64ArrayTag, u as getStylesFromArray, w as arrayTag, y as isTypedArray, z as symbolTag } from "./chunk-75Z2AOVW-DlWr2fif.js";
import "./chunk-PWAF6VOD-xw3v3CBz.js";
import "./chunk-GMAD6QVW-CrbOfuRD.js";
import { t as getIconStyles } from "./chunk-5VM5RSS4-CZATh3cw.js";
import "./chunk-P2QGCYS3-ERnFXKBq.js";
import "./chunk-4HAMMTFA-C6ufBZSb.js";
import { i as positionNode, r as insertNode } from "./chunk-GVQU2GXP-Be8dkEne.js";
import { a as insertEdgeLabel, c as positionEdgeLabel, i as insertEdge, s as markers_default } from "./chunk-OSK3NFVY-C6YyZAmC.js";
import { t as Graph } from "./graphlib-CFSw-S2d.js";
function isArray(e) {
	return Array.isArray(e);
}
function clone(e) {
	if (isPrimitive(e)) return e;
	let S = getTag(e);
	if (!isCloneableObject(e)) return {};
	if (isArray(e)) {
		let S = Array.from(e);
		return e.length > 0 && typeof e[0] == "string" && Object.hasOwn(e, "index") && (S.index = e.index, S.input = e.input), S;
	}
	if (isTypedArray(e)) {
		let S = e, C = S.constructor;
		return new C(S.buffer, S.byteOffset, S.length);
	}
	if (S === "[object ArrayBuffer]") return new ArrayBuffer(e.byteLength);
	if (S === "[object DataView]") {
		let S = e, C = S.buffer, w = S.byteOffset, T = S.byteLength, E = new ArrayBuffer(T), D = new Uint8Array(C, w, T);
		return new Uint8Array(E).set(D), new DataView(E);
	}
	if (S === "[object Boolean]" || S === "[object Number]" || S === "[object String]") {
		let C = e.constructor, w = new C(e.valueOf());
		return S === "[object String]" ? cloneStringObjectProperties(w, e) : copyOwnProperties(w, e), w;
	}
	if (S === "[object Date]") return new Date(Number(e));
	if (S === "[object RegExp]") {
		let S = e, C = new RegExp(S.source, S.flags);
		return C.lastIndex = S.lastIndex, C;
	}
	if (S === "[object Symbol]") return Object(Symbol.prototype.valueOf.call(e));
	if (S === "[object Map]") {
		let S = e, C = /* @__PURE__ */ new Map();
		return S.forEach((e, S) => {
			C.set(S, e);
		}), C;
	}
	if (S === "[object Set]") {
		let S = e, C = /* @__PURE__ */ new Set();
		return S.forEach((e) => {
			C.add(e);
		}), C;
	}
	if (S === "[object Arguments]") {
		let S = e, C = {};
		return copyOwnProperties(C, S), C.length = S.length, C[Symbol.iterator] = S[Symbol.iterator], C;
	}
	let C = {};
	return copyPrototype(C, e), copyOwnProperties(C, e), copySymbolProperties(C, e), C;
}
function isCloneableObject(e) {
	switch (getTag(e)) {
		case argumentsTag:
		case arrayTag:
		case arrayBufferTag:
		case dataViewTag:
		case booleanTag:
		case dateTag:
		case float32ArrayTag:
		case float64ArrayTag:
		case int8ArrayTag:
		case int16ArrayTag:
		case int32ArrayTag:
		case mapTag:
		case numberTag:
		case objectTag:
		case regexpTag:
		case setTag:
		case stringTag:
		case symbolTag:
		case uint8ArrayTag:
		case uint8ClampedArrayTag:
		case uint16ArrayTag:
		case uint32ArrayTag: return !0;
		default: return !1;
	}
}
function copyOwnProperties(e, S) {
	for (let C in S) Object.hasOwn(S, C) && (e[C] = S[C]);
}
function copySymbolProperties(e, S) {
	let C = Object.getOwnPropertySymbols(S);
	for (let w = 0; w < C.length; w++) {
		let T = C[w];
		Object.prototype.propertyIsEnumerable.call(S, T) && (e[T] = S[T]);
	}
}
function cloneStringObjectProperties(e, S) {
	let C = S.valueOf().length;
	for (let w in S) Object.hasOwn(S, w) && (Number.isNaN(Number(w)) || Number(w) >= C) && (e[w] = S[w]);
}
function copyPrototype(e, S) {
	let C = Object.getPrototypeOf(S);
	C !== null && typeof S.constructor == "function" && Object.setPrototypeOf(e, C);
}
var parser = (function() {
	var S = /* @__PURE__ */ __name(function(e, S, C, w) {
		for (C ||= {}, w = e.length; w--; C[e[w]] = S);
		return C;
	}, "o"), C = [1, 15], w = [1, 7], T = [1, 13], E = [1, 14], D = [1, 19], O = [1, 16], k = [1, 17], A = [1, 18], j = [8, 30], M = [
		8,
		10,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], N = [1, 23], P = [1, 24], F = [
		8,
		10,
		15,
		16,
		21,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], I = [
		8,
		10,
		15,
		16,
		21,
		27,
		28,
		29,
		30,
		31,
		39,
		43,
		46
	], L = [1, 49], R = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			spaceLines: 3,
			SPACELINE: 4,
			NL: 5,
			separator: 6,
			SPACE: 7,
			EOF: 8,
			start: 9,
			BLOCK_DIAGRAM_KEY: 10,
			document: 11,
			stop: 12,
			statement: 13,
			link: 14,
			LINK: 15,
			START_LINK: 16,
			LINK_LABEL: 17,
			STR: 18,
			nodeStatement: 19,
			columnsStatement: 20,
			SPACE_BLOCK: 21,
			blockStatement: 22,
			classDefStatement: 23,
			cssClassStatement: 24,
			styleStatement: 25,
			node: 26,
			SIZE: 27,
			COLUMNS: 28,
			"id-block": 29,
			end: 30,
			NODE_ID: 31,
			nodeShapeNLabel: 32,
			dirList: 33,
			DIR: 34,
			NODE_DSTART: 35,
			NODE_DEND: 36,
			BLOCK_ARROW_START: 37,
			BLOCK_ARROW_END: 38,
			classDef: 39,
			CLASSDEF_ID: 40,
			CLASSDEF_STYLEOPTS: 41,
			DEFAULT: 42,
			class: 43,
			CLASSENTITY_IDS: 44,
			STYLECLASS: 45,
			style: 46,
			STYLE_ENTITY_IDS: 47,
			STYLE_DEFINITION_DATA: 48,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SPACELINE",
			5: "NL",
			7: "SPACE",
			8: "EOF",
			10: "BLOCK_DIAGRAM_KEY",
			15: "LINK",
			16: "START_LINK",
			17: "LINK_LABEL",
			18: "STR",
			21: "SPACE_BLOCK",
			27: "SIZE",
			28: "COLUMNS",
			29: "id-block",
			30: "end",
			31: "NODE_ID",
			34: "DIR",
			35: "NODE_DSTART",
			36: "NODE_DEND",
			37: "BLOCK_ARROW_START",
			38: "BLOCK_ARROW_END",
			39: "classDef",
			40: "CLASSDEF_ID",
			41: "CLASSDEF_STYLEOPTS",
			42: "DEFAULT",
			43: "class",
			44: "CLASSENTITY_IDS",
			45: "STYLECLASS",
			46: "style",
			47: "STYLE_ENTITY_IDS",
			48: "STYLE_DEFINITION_DATA"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[3, 2],
			[6, 1],
			[6, 1],
			[6, 1],
			[9, 3],
			[12, 1],
			[12, 1],
			[12, 2],
			[12, 2],
			[11, 1],
			[11, 2],
			[14, 1],
			[14, 4],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[13, 1],
			[19, 3],
			[19, 2],
			[19, 1],
			[20, 1],
			[22, 4],
			[22, 3],
			[26, 1],
			[26, 2],
			[33, 1],
			[33, 2],
			[32, 3],
			[32, 4],
			[23, 3],
			[23, 3],
			[24, 3],
			[25, 3]
		],
		performAction: /* @__PURE__ */ __name(function(e, S, C, w, T, E, D) {
			var O = E.length - 1;
			switch (T) {
				case 4:
					w.getLogger().debug("Rule: separator (NL) ");
					break;
				case 5:
					w.getLogger().debug("Rule: separator (Space) ");
					break;
				case 6:
					w.getLogger().debug("Rule: separator (EOF) ");
					break;
				case 7:
					w.getLogger().debug("Rule: hierarchy: ", E[O - 1]), w.setHierarchy(E[O - 1]);
					break;
				case 8:
					w.getLogger().debug("Stop NL ");
					break;
				case 9:
					w.getLogger().debug("Stop EOF ");
					break;
				case 10:
					w.getLogger().debug("Stop NL2 ");
					break;
				case 11:
					w.getLogger().debug("Stop EOF2 ");
					break;
				case 12:
					w.getLogger().debug("Rule: statement: ", E[O]), typeof E[O].length == "number" ? this.$ = E[O] : this.$ = [E[O]];
					break;
				case 13:
					w.getLogger().debug("Rule: statement #2: ", E[O - 1]), this.$ = [E[O - 1]].concat(E[O]);
					break;
				case 14:
					w.getLogger().debug("Rule: link: ", E[O], e), this.$ = {
						edgeTypeStr: E[O],
						label: ""
					};
					break;
				case 15:
					w.getLogger().debug("Rule: LABEL link: ", E[O - 3], E[O - 1], E[O]), this.$ = {
						edgeTypeStr: E[O],
						label: E[O - 1]
					};
					break;
				case 18:
					let S = parseInt(E[O]);
					this.$ = {
						id: w.generateId(),
						type: "space",
						label: "",
						width: S,
						children: []
					};
					break;
				case 23:
					w.getLogger().debug("Rule: (nodeStatement link node) ", E[O - 2], E[O - 1], E[O], " typestr: ", E[O - 1].edgeTypeStr);
					let C = w.edgeStrToEdgeData(E[O - 1].edgeTypeStr), T = w.edgeStrToEdgeStartData(E[O - 1].edgeTypeStr), D = w.edgeStrToThickness(E[O - 1].edgeTypeStr), k = w.edgeStrToPattern(E[O - 1].edgeTypeStr);
					this.$ = [
						{
							id: E[O - 2].id,
							label: E[O - 2].label,
							type: E[O - 2].type,
							directions: E[O - 2].directions
						},
						{
							id: E[O - 2].id + "-" + E[O].id,
							start: E[O - 2].id,
							end: E[O].id,
							label: E[O - 1].label,
							type: "edge",
							thickness: D,
							pattern: k,
							directions: E[O].directions,
							arrowTypeEnd: C,
							arrowTypeStart: T
						},
						{
							id: E[O].id,
							label: E[O].label,
							type: w.typeStr2Type(E[O].typeStr),
							directions: E[O].directions
						}
					];
					break;
				case 24:
					w.getLogger().debug("Rule: nodeStatement (abc88 node size) ", E[O - 1], E[O]), this.$ = {
						id: E[O - 1].id,
						label: E[O - 1].label,
						type: w.typeStr2Type(E[O - 1].typeStr),
						directions: E[O - 1].directions,
						widthInColumns: parseInt(E[O], 10)
					};
					break;
				case 25:
					w.getLogger().debug("Rule: nodeStatement (node) ", E[O]), this.$ = {
						id: E[O].id,
						label: E[O].label,
						type: w.typeStr2Type(E[O].typeStr),
						directions: E[O].directions,
						widthInColumns: 1
					};
					break;
				case 26:
					w.getLogger().debug("APA123", this ? this : "na"), w.getLogger().debug("COLUMNS: ", E[O]), this.$ = {
						type: "column-setting",
						columns: E[O] === "auto" ? -1 : parseInt(E[O])
					};
					break;
				case 27:
					w.getLogger().debug("Rule: id-block statement : ", E[O - 2], E[O - 1]), w.generateId(), this.$ = {
						...E[O - 2],
						type: "composite",
						children: E[O - 1]
					};
					break;
				case 28:
					w.getLogger().debug("Rule: blockStatement : ", E[O - 2], E[O - 1], E[O]), this.$ = {
						id: w.generateId(),
						type: "composite",
						label: "",
						children: E[O - 1]
					};
					break;
				case 29:
					w.getLogger().debug("Rule: node (NODE_ID separator): ", E[O]), this.$ = { id: E[O] };
					break;
				case 30:
					w.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ", E[O - 1], E[O]), this.$ = {
						id: E[O - 1],
						label: E[O].label,
						typeStr: E[O].typeStr,
						directions: E[O].directions
					};
					break;
				case 31:
					w.getLogger().debug("Rule: dirList: ", E[O]), this.$ = [E[O]];
					break;
				case 32:
					w.getLogger().debug("Rule: dirList: ", E[O - 1], E[O]), this.$ = [E[O - 1]].concat(E[O]);
					break;
				case 33:
					w.getLogger().debug("Rule: nodeShapeNLabel: ", E[O - 2], E[O - 1], E[O]), this.$ = {
						typeStr: E[O - 2] + E[O],
						label: E[O - 1]
					};
					break;
				case 34:
					w.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ", E[O - 3], E[O - 2], " #3:", E[O - 1], E[O]), this.$ = {
						typeStr: E[O - 3] + E[O],
						label: E[O - 2],
						directions: E[O - 1]
					};
					break;
				case 35:
				case 36:
					this.$ = {
						type: "classDef",
						id: E[O - 1].trim(),
						css: E[O].trim()
					};
					break;
				case 37:
					this.$ = {
						type: "applyClass",
						id: E[O - 1].trim(),
						styleClass: E[O].trim()
					};
					break;
				case 38:
					this.$ = {
						type: "applyStyles",
						id: E[O - 1].trim(),
						stylesStr: E[O].trim()
					};
					break;
			}
		}, "anonymous"),
		table: [
			{
				9: 1,
				10: [1, 2]
			},
			{ 1: [3] },
			{
				10: C,
				11: 3,
				13: 4,
				19: 5,
				20: 6,
				21: w,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: T,
				29: E,
				31: D,
				39: O,
				43: k,
				46: A
			},
			{ 8: [1, 20] },
			S(j, [2, 12], {
				13: 4,
				19: 5,
				20: 6,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				11: 21,
				10: C,
				21: w,
				28: T,
				29: E,
				31: D,
				39: O,
				43: k,
				46: A
			}),
			S(M, [2, 16], {
				14: 22,
				15: N,
				16: P
			}),
			S(M, [2, 17]),
			S(M, [2, 18]),
			S(M, [2, 19]),
			S(M, [2, 20]),
			S(M, [2, 21]),
			S(M, [2, 22]),
			S(F, [2, 25], { 27: [1, 25] }),
			S(M, [2, 26]),
			{
				19: 26,
				26: 12,
				31: D
			},
			{
				10: C,
				11: 27,
				13: 4,
				19: 5,
				20: 6,
				21: w,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: T,
				29: E,
				31: D,
				39: O,
				43: k,
				46: A
			},
			{
				40: [1, 28],
				42: [1, 29]
			},
			{ 44: [1, 30] },
			{ 47: [1, 31] },
			S(I, [2, 29], {
				32: 32,
				35: [1, 33],
				37: [1, 34]
			}),
			{ 1: [2, 7] },
			S(j, [2, 13]),
			{
				26: 35,
				31: D
			},
			{ 31: [2, 14] },
			{ 17: [1, 36] },
			S(F, [2, 24]),
			{
				10: C,
				11: 37,
				13: 4,
				14: 22,
				15: N,
				16: P,
				19: 5,
				20: 6,
				21: w,
				22: 8,
				23: 9,
				24: 10,
				25: 11,
				26: 12,
				28: T,
				29: E,
				31: D,
				39: O,
				43: k,
				46: A
			},
			{ 30: [1, 38] },
			{ 41: [1, 39] },
			{ 41: [1, 40] },
			{ 45: [1, 41] },
			{ 48: [1, 42] },
			S(I, [2, 30]),
			{ 18: [1, 43] },
			{ 18: [1, 44] },
			S(F, [2, 23]),
			{ 18: [1, 45] },
			{ 30: [1, 46] },
			S(M, [2, 28]),
			S(M, [2, 35]),
			S(M, [2, 36]),
			S(M, [2, 37]),
			S(M, [2, 38]),
			{ 36: [1, 47] },
			{
				33: 48,
				34: L
			},
			{ 15: [1, 50] },
			S(M, [2, 27]),
			S(I, [2, 33]),
			{ 38: [1, 51] },
			{
				33: 52,
				34: L,
				38: [2, 31]
			},
			{ 31: [2, 15] },
			S(I, [2, 34]),
			{ 38: [2, 32] }
		],
		defaultActions: {
			20: [2, 7],
			23: [2, 14],
			50: [2, 15],
			52: [2, 32]
		},
		parseError: /* @__PURE__ */ __name(function(e, S) {
			if (S.recoverable) this.trace(e);
			else {
				var C = Error(e);
				throw C.hash = S, C;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(S) {
			var C = this, w = [0], T = [], E = [null], D = [], O = this.table, k = "", A = 0, j = 0, M = 0, N = 2, P = 1, F = D.slice.call(arguments, 1), I = Object.create(this.lexer), L = { yy: {} };
			for (var R in this.yy) Object.prototype.hasOwnProperty.call(this.yy, R) && (L.yy[R] = this.yy[R]);
			I.setInput(S, L.yy), L.yy.lexer = I, L.yy.parser = this, I.yylloc === void 0 && (I.yylloc = {});
			var z = I.yylloc;
			D.push(z);
			var B = I.options && I.options.ranges;
			typeof L.yy.parseError == "function" ? this.parseError = L.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function V(e) {
				w.length -= 2 * e, E.length -= e, D.length -= e;
			}
			__name(V, "popStack");
			function H() {
				var e = T.pop() || I.lex() || P;
				return typeof e != "number" && (e instanceof Array && (T = e, e = T.pop()), e = C.symbols_[e] || e), e;
			}
			__name(H, "lex");
			for (var U, W, G, K, q, J = {}, Y, X, Z, Q;;) {
				if (G = w[w.length - 1], this.defaultActions[G] ? K = this.defaultActions[G] : (U ??= H(), K = O[G] && O[G][U]), K === void 0 || !K.length || !K[0]) {
					var $ = "";
					for (Y in Q = [], O[G]) this.terminals_[Y] && Y > N && Q.push("'" + this.terminals_[Y] + "'");
					$ = I.showPosition ? "Parse error on line " + (A + 1) + ":\n" + I.showPosition() + "\nExpecting " + Q.join(", ") + ", got '" + (this.terminals_[U] || U) + "'" : "Parse error on line " + (A + 1) + ": Unexpected " + (U == P ? "end of input" : "'" + (this.terminals_[U] || U) + "'"), this.parseError($, {
						text: I.match,
						token: this.terminals_[U] || U,
						line: I.yylineno,
						loc: z,
						expected: Q
					});
				}
				if (K[0] instanceof Array && K.length > 1) throw Error("Parse Error: multiple actions possible at state: " + G + ", token: " + U);
				switch (K[0]) {
					case 1:
						w.push(U), E.push(I.yytext), D.push(I.yylloc), w.push(K[1]), U = null, W ? (U = W, W = null) : (j = I.yyleng, k = I.yytext, A = I.yylineno, z = I.yylloc, M > 0 && M--);
						break;
					case 2:
						if (X = this.productions_[K[1]][1], J.$ = E[E.length - X], J._$ = {
							first_line: D[D.length - (X || 1)].first_line,
							last_line: D[D.length - 1].last_line,
							first_column: D[D.length - (X || 1)].first_column,
							last_column: D[D.length - 1].last_column
						}, B && (J._$.range = [D[D.length - (X || 1)].range[0], D[D.length - 1].range[1]]), q = this.performAction.apply(J, [
							k,
							j,
							A,
							L.yy,
							K[1],
							E,
							D
						].concat(F)), q !== void 0) return q;
						X && (w = w.slice(0, -1 * X * 2), E = E.slice(0, -1 * X), D = D.slice(0, -1 * X)), w.push(this.productions_[K[1]][0]), E.push(J.$), D.push(J._$), Z = O[w[w.length - 2]][w[w.length - 1]], w.push(Z);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	R.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(e, S) {
				if (this.yy.parser) this.yy.parser.parseError(e, S);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(e, S) {
				return this.yy = S || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ __name(function() {
				var e = this._input[0];
				return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e;
			}, "input"),
			unput: /* @__PURE__ */ __name(function(e) {
				var S = e.length, C = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - S), this.offset -= S;
				var w = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), C.length - 1 && (this.yylineno -= C.length - 1);
				var T = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: C ? (C.length === w.length ? this.yylloc.first_column : 0) + w[w.length - C.length].length - C[0].length : this.yylloc.first_column - S
				}, this.options.ranges && (this.yylloc.range = [T[0], T[0] + this.yyleng - S]), this.yyleng = this.yytext.length, this;
			}, "unput"),
			more: /* @__PURE__ */ __name(function() {
				return this._more = !0, this;
			}, "more"),
			reject: /* @__PURE__ */ __name(function() {
				if (this.options.backtrack_lexer) this._backtrack = !0;
				else return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
				return this;
			}, "reject"),
			less: /* @__PURE__ */ __name(function(e) {
				this.unput(this.match.slice(e));
			}, "less"),
			pastInput: /* @__PURE__ */ __name(function() {
				var e = this.matched.substr(0, this.matched.length - this.match.length);
				return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ __name(function() {
				var e = this.match;
				return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ __name(function() {
				var e = this.pastInput(), S = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + S + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(e, S) {
				var C, w, T;
				if (this.options.backtrack_lexer && (T = {
					yylineno: this.yylineno,
					yylloc: {
						first_line: this.yylloc.first_line,
						last_line: this.last_line,
						first_column: this.yylloc.first_column,
						last_column: this.yylloc.last_column
					},
					yytext: this.yytext,
					match: this.match,
					matches: this.matches,
					matched: this.matched,
					yyleng: this.yyleng,
					offset: this.offset,
					_more: this._more,
					_input: this._input,
					yy: this.yy,
					conditionStack: this.conditionStack.slice(0),
					done: this.done
				}, this.options.ranges && (T.yylloc.range = this.yylloc.range.slice(0))), w = e[0].match(/(?:\r\n?|\n).*/g), w && (this.yylineno += w.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: w ? w[w.length - 1].length - w[w.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], C = this.performAction.call(this, this.yy, this, S, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), C) return C;
				if (this._backtrack) {
					for (var E in T) this[E] = T[E];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, S, C, w;
				this._more || (this.yytext = "", this.match = "");
				for (var T = this._currentRules(), E = 0; E < T.length; E++) if (C = this._input.match(this.rules[T[E]]), C && (!S || C[0].length > S[0].length)) {
					if (S = C, w = E, this.options.backtrack_lexer) {
						if (e = this.test_match(C, T[E]), e !== !1) return e;
						if (this._backtrack) {
							S = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return S ? (e = this.test_match(S, T[w]), e === !1 ? !1 : e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ __name(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ __name(function(e) {
				this.conditionStack.push(e);
			}, "begin"),
			popState: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ __name(function(e) {
				return e = this.conditionStack.length - 1 - Math.abs(e || 0), e >= 0 ? this.conditionStack[e] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ __name(function(e) {
				this.begin(e);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: {},
			performAction: /* @__PURE__ */ __name(function(e, S, C, w) {
				switch (C) {
					case 0: return e.getLogger().debug("Found block-beta"), 10;
					case 1: return e.getLogger().debug("Found id-block"), 29;
					case 2: return e.getLogger().debug("Found block"), 10;
					case 3:
						e.getLogger().debug(".", S.yytext);
						break;
					case 4:
						e.getLogger().debug("_", S.yytext);
						break;
					case 5: return 5;
					case 6: return S.yytext = -1, 28;
					case 7: return S.yytext = S.yytext.replace(/columns\s+/, ""), e.getLogger().debug("COLUMNS (LEX)", S.yytext), 28;
					case 8:
						this.pushState("md_string");
						break;
					case 9: return "MD_STR";
					case 10:
						this.popState();
						break;
					case 11:
						this.pushState("string");
						break;
					case 12:
						e.getLogger().debug("LEX: POPPING STR:", S.yytext), this.popState();
						break;
					case 13: return e.getLogger().debug("LEX: STR end:", S.yytext), "STR";
					case 14: return S.yytext = S.yytext.replace(/space\:/, ""), e.getLogger().debug("SPACE NUM (LEX)", S.yytext), 21;
					case 15: return S.yytext = "1", e.getLogger().debug("COLUMNS (LEX)", S.yytext), 21;
					case 16: return 42;
					case 17: return "LINKSTYLE";
					case 18: return "INTERPOLATE";
					case 19: return this.pushState("CLASSDEF"), 39;
					case 20: return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
					case 21: return this.popState(), this.pushState("CLASSDEFID"), 40;
					case 22: return this.popState(), 41;
					case 23: return this.pushState("CLASS"), 43;
					case 24: return this.popState(), this.pushState("CLASS_STYLE"), 44;
					case 25: return this.popState(), 45;
					case 26: return this.pushState("STYLE_STMNT"), 46;
					case 27: return this.popState(), this.pushState("STYLE_DEFINITION"), 47;
					case 28: return this.popState(), 48;
					case 29: return this.pushState("acc_title"), "acc_title";
					case 30: return this.popState(), "acc_title_value";
					case 31: return this.pushState("acc_descr"), "acc_descr";
					case 32: return this.popState(), "acc_descr_value";
					case 33:
						this.pushState("acc_descr_multiline");
						break;
					case 34:
						this.popState();
						break;
					case 35: return "acc_descr_multiline_value";
					case 36: return 30;
					case 37: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 38: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 39: return this.popState(), e.getLogger().debug("Lex: ))"), "NODE_DEND";
					case 40: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 41: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 42: return this.popState(), e.getLogger().debug("Lex: (-"), "NODE_DEND";
					case 43: return this.popState(), e.getLogger().debug("Lex: -)"), "NODE_DEND";
					case 44: return this.popState(), e.getLogger().debug("Lex: (("), "NODE_DEND";
					case 45: return this.popState(), e.getLogger().debug("Lex: ]]"), "NODE_DEND";
					case 46: return this.popState(), e.getLogger().debug("Lex: ("), "NODE_DEND";
					case 47: return this.popState(), e.getLogger().debug("Lex: ])"), "NODE_DEND";
					case 48: return this.popState(), e.getLogger().debug("Lex: /]"), "NODE_DEND";
					case 49: return this.popState(), e.getLogger().debug("Lex: /]"), "NODE_DEND";
					case 50: return this.popState(), e.getLogger().debug("Lex: )]"), "NODE_DEND";
					case 51: return this.popState(), e.getLogger().debug("Lex: )"), "NODE_DEND";
					case 52: return this.popState(), e.getLogger().debug("Lex: ]>"), "NODE_DEND";
					case 53: return this.popState(), e.getLogger().debug("Lex: ]"), "NODE_DEND";
					case 54: return e.getLogger().debug("Lexa: -)"), this.pushState("NODE"), 35;
					case 55: return e.getLogger().debug("Lexa: (-"), this.pushState("NODE"), 35;
					case 56: return e.getLogger().debug("Lexa: ))"), this.pushState("NODE"), 35;
					case 57: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 58: return e.getLogger().debug("Lex: ((("), this.pushState("NODE"), 35;
					case 59: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 60: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 61: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 62: return e.getLogger().debug("Lexc: >"), this.pushState("NODE"), 35;
					case 63: return e.getLogger().debug("Lexa: (["), this.pushState("NODE"), 35;
					case 64: return e.getLogger().debug("Lexa: )"), this.pushState("NODE"), 35;
					case 65: return this.pushState("NODE"), 35;
					case 66: return this.pushState("NODE"), 35;
					case 67: return this.pushState("NODE"), 35;
					case 68: return this.pushState("NODE"), 35;
					case 69: return this.pushState("NODE"), 35;
					case 70: return this.pushState("NODE"), 35;
					case 71: return this.pushState("NODE"), 35;
					case 72: return e.getLogger().debug("Lexa: ["), this.pushState("NODE"), 35;
					case 73: return this.pushState("BLOCK_ARROW"), e.getLogger().debug("LEX ARR START"), 37;
					case 74: return e.getLogger().debug("Lex: NODE_ID", S.yytext), 31;
					case 75: return e.getLogger().debug("Lex: EOF", S.yytext), 8;
					case 76:
						this.pushState("md_string");
						break;
					case 77:
						this.pushState("md_string");
						break;
					case 78: return "NODE_DESCR";
					case 79:
						this.popState();
						break;
					case 80:
						e.getLogger().debug("Lex: Starting string"), this.pushState("string");
						break;
					case 81:
						e.getLogger().debug("LEX ARR: Starting string"), this.pushState("string");
						break;
					case 82: return e.getLogger().debug("LEX: NODE_DESCR:", S.yytext), "NODE_DESCR";
					case 83:
						e.getLogger().debug("LEX POPPING"), this.popState();
						break;
					case 84:
						e.getLogger().debug("Lex: =>BAE"), this.pushState("ARROW_DIR");
						break;
					case 85: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (right): dir:", S.yytext), "DIR";
					case 86: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (left):", S.yytext), "DIR";
					case 87: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (x):", S.yytext), "DIR";
					case 88: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (y):", S.yytext), "DIR";
					case 89: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (up):", S.yytext), "DIR";
					case 90: return S.yytext = S.yytext.replace(/^,\s*/, ""), e.getLogger().debug("Lex (down):", S.yytext), "DIR";
					case 91: return S.yytext = "]>", e.getLogger().debug("Lex (ARROW_DIR end):", S.yytext), this.popState(), this.popState(), "BLOCK_ARROW_END";
					case 92: return e.getLogger().debug("Lex: LINK", "#" + S.yytext + "#"), 15;
					case 93: return e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 94: return e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 95: return e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 96: return e.getLogger().debug("Lex: START_LINK", S.yytext), this.pushState("LLABEL"), 16;
					case 97: return e.getLogger().debug("Lex: START_LINK", S.yytext), this.pushState("LLABEL"), 16;
					case 98: return e.getLogger().debug("Lex: START_LINK", S.yytext), this.pushState("LLABEL"), 16;
					case 99:
						this.pushState("md_string");
						break;
					case 100: return e.getLogger().debug("Lex: Starting string"), this.pushState("string"), "LINK_LABEL";
					case 101: return this.popState(), e.getLogger().debug("Lex: LINK", "#" + S.yytext + "#"), 15;
					case 102: return this.popState(), e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 103: return this.popState(), e.getLogger().debug("Lex: LINK", S.yytext), 15;
					case 104: return e.getLogger().debug("Lex: COLON", S.yytext), S.yytext = S.yytext.slice(1), 27;
				}
			}, "anonymous"),
			rules: [
				/^(?:block-beta\b)/,
				/^(?:block:)/,
				/^(?:block\b)/,
				/^(?:[\s]+)/,
				/^(?:[\n]+)/,
				/^(?:((\u000D\u000A)|(\u000A)))/,
				/^(?:columns\s+auto\b)/,
				/^(?:columns\s+[\d]+)/,
				/^(?:["][`])/,
				/^(?:[^`"]+)/,
				/^(?:[`]["])/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:[^"]*)/,
				/^(?:space[:]\d+)/,
				/^(?:space\b)/,
				/^(?:default\b)/,
				/^(?:linkStyle\b)/,
				/^(?:interpolate\b)/,
				/^(?:classDef\s+)/,
				/^(?:DEFAULT\s+)/,
				/^(?:\w+\s+)/,
				/^(?:[^\n]*)/,
				/^(?:class\s+)/,
				/^(?:(\w+)+((,\s*\w+)*))/,
				/^(?:[^\n]*)/,
				/^(?:style\s+)/,
				/^(?:(\w+)+((,\s*\w+)*))/,
				/^(?:[^\n]*)/,
				/^(?:accTitle\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*:\s*)/,
				/^(?:(?!\n||)*[^\n]*)/,
				/^(?:accDescr\s*\{\s*)/,
				/^(?:[\}])/,
				/^(?:[^\}]*)/,
				/^(?:end\b\s*)/,
				/^(?:\(\(\()/,
				/^(?:\)\)\))/,
				/^(?:[\)]\))/,
				/^(?:\}\})/,
				/^(?:\})/,
				/^(?:\(-)/,
				/^(?:-\))/,
				/^(?:\(\()/,
				/^(?:\]\])/,
				/^(?:\()/,
				/^(?:\]\))/,
				/^(?:\\\])/,
				/^(?:\/\])/,
				/^(?:\)\])/,
				/^(?:[\)])/,
				/^(?:\]>)/,
				/^(?:[\]])/,
				/^(?:-\))/,
				/^(?:\(-)/,
				/^(?:\)\))/,
				/^(?:\))/,
				/^(?:\(\(\()/,
				/^(?:\(\()/,
				/^(?:\{\{)/,
				/^(?:\{)/,
				/^(?:>)/,
				/^(?:\(\[)/,
				/^(?:\()/,
				/^(?:\[\[)/,
				/^(?:\[\|)/,
				/^(?:\[\()/,
				/^(?:\)\)\))/,
				/^(?:\[\\)/,
				/^(?:\[\/)/,
				/^(?:\[\\)/,
				/^(?:\[)/,
				/^(?:<\[)/,
				/^(?:[^\(\[\n\-\)\{\}\s\<\>:=]+)/,
				/^(?:$)/,
				/^(?:["][`])/,
				/^(?:["][`])/,
				/^(?:[^`"]+)/,
				/^(?:[`]["])/,
				/^(?:["])/,
				/^(?:["])/,
				/^(?:[^"]+)/,
				/^(?:["])/,
				/^(?:\]>\s*\()/,
				/^(?:,?\s*right\s*)/,
				/^(?:,?\s*left\s*)/,
				/^(?:,?\s*x\s*)/,
				/^(?:,?\s*y\s*)/,
				/^(?:,?\s*up\s*)/,
				/^(?:,?\s*down\s*)/,
				/^(?:\)\s*)/,
				/^(?:\s*[xo<]?--+[-xo>]\s*)/,
				/^(?:\s*[xo<]?==+[=xo>]\s*)/,
				/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
				/^(?:\s*~~[\~]+\s*)/,
				/^(?:\s*[xo<]?--\s*)/,
				/^(?:\s*[xo<]?==\s*)/,
				/^(?:\s*[xo<]?-\.\s*)/,
				/^(?:["][`])/,
				/^(?:["])/,
				/^(?:\s*[xo<]?--+[-xo>]\s*)/,
				/^(?:\s*[xo<]?==+[=xo>]\s*)/,
				/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,
				/^(?::\d+)/
			],
			conditions: {
				STYLE_DEFINITION: {
					rules: [28],
					inclusive: !1
				},
				STYLE_STMNT: {
					rules: [27],
					inclusive: !1
				},
				CLASSDEFID: {
					rules: [22],
					inclusive: !1
				},
				CLASSDEF: {
					rules: [20, 21],
					inclusive: !1
				},
				CLASS_STYLE: {
					rules: [25],
					inclusive: !1
				},
				CLASS: {
					rules: [24],
					inclusive: !1
				},
				LLABEL: {
					rules: [
						99,
						100,
						101,
						102,
						103
					],
					inclusive: !1
				},
				ARROW_DIR: {
					rules: [
						85,
						86,
						87,
						88,
						89,
						90,
						91
					],
					inclusive: !1
				},
				BLOCK_ARROW: {
					rules: [
						76,
						81,
						84
					],
					inclusive: !1
				},
				NODE: {
					rules: [
						37,
						38,
						39,
						40,
						41,
						42,
						43,
						44,
						45,
						46,
						47,
						48,
						49,
						50,
						51,
						52,
						53,
						77,
						80
					],
					inclusive: !1
				},
				md_string: {
					rules: [
						9,
						10,
						78,
						79
					],
					inclusive: !1
				},
				space: {
					rules: [],
					inclusive: !1
				},
				string: {
					rules: [
						12,
						13,
						82,
						83
					],
					inclusive: !1
				},
				acc_descr_multiline: {
					rules: [34, 35],
					inclusive: !1
				},
				acc_descr: {
					rules: [32],
					inclusive: !1
				},
				acc_title: {
					rules: [30],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						11,
						14,
						15,
						16,
						17,
						18,
						19,
						23,
						26,
						29,
						31,
						33,
						36,
						54,
						55,
						56,
						57,
						58,
						59,
						60,
						61,
						62,
						63,
						64,
						65,
						66,
						67,
						68,
						69,
						70,
						71,
						72,
						73,
						74,
						75,
						92,
						93,
						94,
						95,
						96,
						97,
						98,
						104
					],
					inclusive: !0
				}
			}
		};
	})();
	function z() {
		this.yy = {};
	}
	return __name(z, "Parser"), z.prototype = R, R.Parser = z, new z();
})();
parser.parser = parser;
var block_default = parser, blockDatabase = /* @__PURE__ */ new Map(), edgeList = [], edgeCount = /* @__PURE__ */ new Map(), COLOR_KEYWORD = "color", FILL_KEYWORD = "fill", BG_FILL = "bgFill", STYLECLASS_SEP = ",", classes = /* @__PURE__ */ new Map(), diagramId = "", sanitizeText = /* @__PURE__ */ __name((e) => common_default.sanitizeText(e, getConfig2()), "sanitizeText"), addStyleClass = /* @__PURE__ */ __name(function(e, S = "") {
	let C = classes.get(e);
	C || (C = {
		id: e,
		styles: [],
		textStyles: []
	}, classes.set(e, C)), S?.split(STYLECLASS_SEP).forEach((e) => {
		let S = e.replace(/([^;]*);/, "$1").trim();
		if (RegExp(COLOR_KEYWORD).exec(e)) {
			let e = S.replace(FILL_KEYWORD, BG_FILL).replace(COLOR_KEYWORD, FILL_KEYWORD);
			C.textStyles.push(e);
		}
		C.styles.push(S);
	});
}, "addStyleClass"), addStyle2Node = /* @__PURE__ */ __name(function(e, S = "") {
	let C = blockDatabase.get(e);
	S != null && (C.styles = S.split(STYLECLASS_SEP));
}, "addStyle2Node"), setCssClass = /* @__PURE__ */ __name(function(e, S) {
	e.split(",").forEach(function(e) {
		let C = blockDatabase.get(e);
		if (C === void 0) {
			let S = e.trim();
			C = {
				id: S,
				type: "na",
				children: []
			}, blockDatabase.set(S, C);
		}
		C.classes ||= [], C.classes.push(S);
	});
}, "setCssClass"), populateBlockDatabase = /* @__PURE__ */ __name((e, C) => {
	let w = e.flat(), T = [], E = w.find((e) => e?.type === "column-setting")?.columns ?? -1;
	for (let e of w) {
		if (typeof E == "number" && E > 0 && e.type !== "column-setting" && typeof e.widthInColumns == "number" && e.widthInColumns > E && log.warn(`Block ${e.id} width ${e.widthInColumns} exceeds configured column width ${E}`), e.label &&= sanitizeText(e.label), e.type === "classDef") {
			addStyleClass(e.id, e.css);
			continue;
		}
		if (e.type === "applyClass") {
			setCssClass(e.id, e?.styleClass ?? "");
			continue;
		}
		if (e.type === "applyStyles") {
			e?.stylesStr && addStyle2Node(e.id, e?.stylesStr);
			continue;
		}
		if (e.type === "column-setting") C.columns = e.columns ?? -1;
		else if (e.type === "edge") {
			let S = (edgeCount.get(e.id) ?? 0) + 1;
			edgeCount.set(e.id, S), e.id = S + "-" + e.id, edgeList.push(e);
		} else {
			e.label || (e.type === "composite" ? e.label = "" : e.label = e.id);
			let S = blockDatabase.get(e.id);
			if (S === void 0 ? blockDatabase.set(e.id, e) : (e.type !== "na" && (S.type = e.type), e.label !== e.id && (S.label = e.label)), e.children && populateBlockDatabase(e.children, e), e.type === "space") {
				let S = e.width ?? 1;
				for (let C = 0; C < S; C++) {
					let S = clone(e);
					S.id = S.id + "-" + C, blockDatabase.set(S.id, S), T.push(S);
				}
			} else S === void 0 && T.push(e);
		}
	}
	C.children = T;
}, "populateBlockDatabase"), blocks = [], rootBlock = {
	id: "root",
	type: "composite",
	children: [],
	columns: -1
}, clear2 = /* @__PURE__ */ __name(() => {
	log.debug("Clear called"), clear(), rootBlock = {
		id: "root",
		type: "composite",
		children: [],
		columns: -1
	}, blockDatabase = /* @__PURE__ */ new Map([["root", rootBlock]]), blocks = [], classes = /* @__PURE__ */ new Map(), edgeList = [], edgeCount = /* @__PURE__ */ new Map(), diagramId = "";
}, "clear");
function typeStr2Type(e) {
	switch (log.debug("typeStr2Type", e), e) {
		case "[]": return "square";
		case "()": return log.debug("we have a round"), "round";
		case "(())": return "circle";
		case ">]": return "rect_left_inv_arrow";
		case "{}": return "diamond";
		case "{{}}": return "hexagon";
		case "([])": return "stadium";
		case "[[]]": return "subroutine";
		case "[()]": return "cylinder";
		case "((()))": return "doublecircle";
		case "[//]": return "lean_right";
		case "[\\\\]": return "lean_left";
		case "[/\\]": return "trapezoid";
		case "[\\/]": return "inv_trapezoid";
		case "<[]>": return "block_arrow";
		default: return "na";
	}
}
__name(typeStr2Type, "typeStr2Type");
function edgeTypeStr2Type(e) {
	switch (log.debug("typeStr2Type", e), e) {
		case "==": return "thick";
		default: return "normal";
	}
}
__name(edgeTypeStr2Type, "edgeTypeStr2Type");
function edgeStrToEdgeData(e) {
	switch (e.trim().slice(-1)) {
		case "x": return "arrow_cross";
		case "o": return "arrow_circle";
		case ">": return "arrow_point";
		default: return "";
	}
}
__name(edgeStrToEdgeData, "edgeStrToEdgeData");
function edgeStrToEdgeStartData(e) {
	switch (e.trim().charAt(0)) {
		case "x": return "arrow_cross";
		case "o": return "arrow_circle";
		case "<": return "arrow_point";
		default: return "arrow_open";
	}
}
__name(edgeStrToEdgeStartData, "edgeStrToEdgeStartData");
function edgeStrToThickness(e) {
	return e.includes("==") ? "thick" : "normal";
}
__name(edgeStrToThickness, "edgeStrToThickness");
function edgeStrToPattern(e) {
	return e.includes(".-") ? "dotted" : "solid";
}
__name(edgeStrToPattern, "edgeStrToPattern");
var cnt = 0, blockDB_default = {
	getConfig: /* @__PURE__ */ __name(() => getConfig().block, "getConfig"),
	typeStr2Type,
	edgeTypeStr2Type,
	edgeStrToEdgeData,
	edgeStrToEdgeStartData,
	edgeStrToThickness,
	edgeStrToPattern,
	getLogger: /* @__PURE__ */ __name(() => log, "getLogger"),
	getBlocksFlat: /* @__PURE__ */ __name(() => [...blockDatabase.values()], "getBlocksFlat"),
	getBlocks: /* @__PURE__ */ __name(() => blocks || [], "getBlocks"),
	getEdges: /* @__PURE__ */ __name(() => edgeList, "getEdges"),
	setHierarchy: /* @__PURE__ */ __name((e) => {
		rootBlock.children = e, populateBlockDatabase(e, rootBlock), blocks = rootBlock.children;
	}, "setHierarchy"),
	getBlock: /* @__PURE__ */ __name((e) => blockDatabase.get(e), "getBlock"),
	setBlock: /* @__PURE__ */ __name((e) => {
		blockDatabase.set(e.id, e);
	}, "setBlock"),
	getColumns: /* @__PURE__ */ __name((e) => {
		let S = blockDatabase.get(e);
		return S ? S.columns ? S.columns : S.children ? S.children.length : -1 : -1;
	}, "getColumns"),
	getClasses: /* @__PURE__ */ __name(function() {
		return classes;
	}, "getClasses"),
	clear: clear2,
	generateId: /* @__PURE__ */ __name(() => (cnt++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt), "generateId"),
	setDiagramId: /* @__PURE__ */ __name((e) => {
		diagramId = e;
	}, "setDiagramId"),
	getDiagramId: /* @__PURE__ */ __name(() => diagramId, "getDiagramId")
}, fade = /* @__PURE__ */ __name((e, S) => {
	let C = channel_default;
	return rgba_default(C(e, "r"), C(e, "g"), C(e, "b"), S);
}, "fade"), styles_default = /* @__PURE__ */ __name((e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }



  .label text,span {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePaths .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    /*
     * This is for backward compatibility with existing code that didn't
     * add a \`<p>\` around edge labels.
     *
     * TODO: We should probably remove this in a future release.
     */
    p {
      margin: 0;
      padding: 0;
      display: inline;
    }
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${e.edgeLabelBackground};
  }

  .node .cluster {
    // fill: ${fade(e.mainBkg, .5)};
    fill: ${fade(e.clusterBkg, .5)};
    stroke: ${fade(e.clusterBorder, .2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  ${getIconStyles()}
`, "getStyles");
function calculateBlockPosition(e, S) {
	if (e === 0 || !Number.isInteger(e)) throw Error("Columns must be an integer !== 0.");
	if (S < 0 || !Number.isInteger(S)) throw Error("Position must be a non-negative integer." + S);
	return e < 0 ? {
		px: S,
		py: 0
	} : e === 1 ? {
		px: 0,
		py: S
	} : {
		px: S % e,
		py: Math.floor(S / e)
	};
}
__name(calculateBlockPosition, "calculateBlockPosition");
var getMaxChildSize = /* @__PURE__ */ __name((e) => {
	let C = 0, w = 0;
	for (let T of e.children) {
		let { width: e, height: E, x: D, y: O } = T.size ?? {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		};
		if (log.debug("getMaxChildSize abc95 child:", T.id, "width:", e, "height:", E, "x:", D, "y:", O, T.type), T.type === "space") continue;
		let k = e / (T.widthInColumns ?? 1);
		k > C && (C = k), E > w && (w = E);
	}
	return {
		width: C,
		height: w
	};
}, "getMaxChildSize");
function setBlockSizes(e, C, w = 0, T = 0, E = 8) {
	log.debug("setBlockSizes abc95 (start)", e.id, e?.size?.x, "block width =", e?.size, "siblingWidth", w), e?.size?.width || (e.size = {
		width: w,
		height: T,
		x: 0,
		y: 0
	});
	let D = 0, O = 0;
	if (e.children?.length > 0) {
		for (let S of e.children) setBlockSizes(S, C, 0, 0, E);
		let k = getMaxChildSize(e);
		D = k.width, O = k.height, log.debug("setBlockSizes abc95 maxWidth of", e.id, ":s children is ", D, O);
		for (let C of e.children) C.size && (log.debug(`abc95 Setting size of children of ${e.id} id=${C.id} ${D} ${O} ${JSON.stringify(C.size)}`), C.size.width = D * (C.widthInColumns ?? 1) + E * ((C.widthInColumns ?? 1) - 1), C.size.height = O, C.size.x = 0, C.size.y = 0, log.debug(`abc95 updating size of ${e.id} children child:${C.id} maxWidth:${D} maxHeight:${O}`));
		for (let S of e.children) setBlockSizes(S, C, D, O, E);
		let A = e.columns ?? -1, j = 0;
		for (let S of e.children) j += S.widthInColumns ?? 1;
		let M = e.children.length;
		A > 0 && A < j && (M = A);
		let N = Math.ceil(j / M), P = M * (D + E) + E, F = N * (O + E) + E;
		if (P < w) {
			log.debug(`Detected to small sibling: abc95 ${e.id} siblingWidth ${w} siblingHeight ${T} width ${P}`), P = w, F = T;
			let C = (w - M * E - E) / M, k = (T - N * E - E) / N;
			log.debug("Size indata abc88", e.id, "childWidth", C, "maxWidth", D), log.debug("Size indata abc88", e.id, "childHeight", k, "maxHeight", O), log.debug("Size indata abc88 xSize", M, "padding", E);
			for (let S of e.children) S.size && (S.size.width = C, S.size.height = k, S.size.x = 0, S.size.y = 0);
		}
		if (log.debug(`abc95 (finale calc) ${e.id} xSize ${M} ySize ${N} columns ${A}${e.children.length} width=${Math.max(P, e.size?.width || 0)}`), P < (e?.size?.width || 0)) {
			P = e?.size?.width || 0;
			let C = A > 0 ? Math.min(e.children.length, A) : e.children.length;
			if (C > 0) {
				let w = (P - C * E - E) / C;
				log.debug("abc95 (growing to fit) width", e.id, P, e.size?.width, w);
				for (let S of e.children) S.size && (S.size.width = w);
			}
		}
		e.size = {
			width: P,
			height: F,
			x: 0,
			y: 0
		};
	}
	log.debug("setBlockSizes abc94 (done)", e.id, e?.size?.x, e?.size?.width, e?.size?.y, e?.size?.height);
}
__name(setBlockSizes, "setBlockSizes");
function layoutBlocks(e, C, w = 8) {
	log.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
	let T = e.columns ?? -1;
	if (log.debug("layoutBlocks columns abc95", e.id, "=>", T, e), e.children && e.children.length > 0) {
		let E = e?.children[0]?.size?.width ?? 0, D = e.children.length * E + (e.children.length - 1) * w;
		log.debug("widthOfChildren 88", D, "posX");
		let O = /* @__PURE__ */ new Map();
		{
			let S = 0;
			for (let C of e.children) {
				if (!C.size) continue;
				let { py: e } = calculateBlockPosition(T, S), w = O.get(e) ?? 0;
				C.size.height > w && O.set(e, C.size.height);
				let E = C?.widthInColumns ?? 1;
				T > 0 && (E = Math.min(E, T - S % T)), S += E;
			}
		}
		let k = /* @__PURE__ */ new Map();
		{
			let e = 0, S = [...O.keys()].sort((e, S) => e - S);
			for (let C of S) k.set(C, e), e += (O.get(C) ?? 0) + w;
		}
		let A = 0;
		log.debug("abc91 block?.size?.x", e.id, e?.size?.x);
		let j = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -w, M = 0;
		for (let E of e.children) {
			let D = e;
			if (!E.size) continue;
			let { width: N, height: P } = E.size, { px: F, py: I } = calculateBlockPosition(T, A);
			if (I != M && (M = I, j = e?.size?.x ? e?.size?.x + (-e?.size?.width / 2 || 0) : -w, log.debug("New row in layout for block", e.id, " and child ", E.id, M)), log.debug(`abc89 layout blocks (child) id: ${E.id} Pos: ${A} (px, py) ${F},${I} (${D?.size?.x},${D?.size?.y}) parent: ${D.id} width: ${N}${w}`), D.size) {
				let e = N / 2;
				E.size.x = j + w + e, log.debug(`abc91 layout blocks (calc) px, pyid:${E.id} startingPos=X${j} new startingPosX${E.size.x} ${e} padding=${w} width=${N} halfWidth=${e} => x:${E.size.x} y:${E.size.y} ${E.widthInColumns} (width * (child?.w || 1)) / 2 ${N * (E?.widthInColumns ?? 1) / 2}`), j = E.size.x + e;
				let C = k.get(I) ?? 0, T = O.get(I) ?? P;
				E.size.y = D.size.y - D.size.height / 2 + C + T / 2 + w, log.debug(`abc88 layout blocks (calc) px, pyid:${E.id}startingPosX${j}${w}${e}=>x:${E.size.x}y:${E.size.y}${E.widthInColumns}(width * (child?.w || 1)) / 2${N * (E?.widthInColumns ?? 1) / 2}`);
			}
			E.children && layoutBlocks(E, C, w);
			let L = E?.widthInColumns ?? 1;
			T > 0 && (L = Math.min(L, T - A % T)), A += L, log.debug("abc88 columnsPos", E, A);
		}
	}
	log.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);
}
__name(layoutBlocks, "layoutBlocks");
function findBounds(e, { minX: S, minY: C, maxX: w, maxY: T } = {
	minX: 0,
	minY: 0,
	maxX: 0,
	maxY: 0
}) {
	if (e.size && e.id !== "root") {
		let { x: E, y: D, width: O, height: k } = e.size;
		E - O / 2 < S && (S = E - O / 2), D - k / 2 < C && (C = D - k / 2), E + O / 2 > w && (w = E + O / 2), D + k / 2 > T && (T = D + k / 2);
	}
	if (e.children) for (let E of e.children) ({minX: S, minY: C, maxX: w, maxY: T} = findBounds(E, {
		minX: S,
		minY: C,
		maxX: w,
		maxY: T
	}));
	return {
		minX: S,
		minY: C,
		maxX: w,
		maxY: T
	};
}
__name(findBounds, "findBounds");
function layout(e) {
	let C = e.getBlock("root");
	if (!C) return;
	let w = getConfig2()?.block?.padding ?? 8;
	setBlockSizes(C, e, 0, 0, w), layoutBlocks(C, e, w), log.debug("getBlocks", JSON.stringify(C, null, 2));
	let { minX: T, minY: E, maxX: D, maxY: O } = findBounds(C), A = O - E;
	return {
		x: T,
		y: E,
		width: D - T,
		height: A
	};
}
__name(layout, "layout");
function getNodeFromBlock(e, S, C = !1) {
	let w = e, E = "default";
	(w?.classes?.length || 0) > 0 && (E = (w?.classes ?? []).join(" ")), E += " flowchart-label";
	let D = (w?.classes ?? []).flatMap((e) => S.getClasses().get(e)?.styles ?? []), O = 0, k = "rect", A;
	switch (w.type) {
		case "round":
			O = 5, k = "rect";
			break;
		case "composite":
			O = 0, k = "composite", A = 0;
			break;
		case "square":
			k = "rect";
			break;
		case "diamond":
			k = "question";
			break;
		case "hexagon":
			k = "hexagon";
			break;
		case "block_arrow":
			k = "block_arrow";
			break;
		case "odd":
			k = "rect_left_inv_arrow";
			break;
		case "lean_right":
			k = "lean_right";
			break;
		case "lean_left":
			k = "lean_left";
			break;
		case "trapezoid":
			k = "trapezoid";
			break;
		case "inv_trapezoid":
			k = "inv_trapezoid";
			break;
		case "rect_left_inv_arrow":
			k = "rect_left_inv_arrow";
			break;
		case "circle":
			k = "circle";
			break;
		case "ellipse":
			k = "ellipse";
			break;
		case "stadium":
			k = "stadium";
			break;
		case "subroutine":
			k = "subroutine";
			break;
		case "cylinder":
			k = "cylinder";
			break;
		case "group":
			k = "rect";
			break;
		case "doublecircle":
			k = "doublecircle";
			break;
		default: k = "rect";
	}
	let j = getStylesFromArray(w?.styles ?? []), M = w.label, N = w.size ?? {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	}, P = S.getDiagramId();
	return {
		labelStyle: j.labelStyle,
		shape: k,
		label: M,
		labelText: M,
		rx: O,
		ry: O,
		class: E,
		cssClasses: E,
		cssStyles: w?.styles ?? [],
		cssCompiledStyles: D,
		style: j.style,
		id: w.id,
		domId: P ? `${P}-${w.id}` : w.id,
		isGroup: !1,
		directions: w.directions,
		width: N.width || void 0,
		height: N.height || void 0,
		wrappingWidth: N.width || Infinity,
		x: N.x,
		y: N.y,
		positioned: C,
		intersect: void 0,
		padding: A ?? getConfig()?.block?.padding ?? 0,
		widthInColumns: w.widthInColumns ?? 1
	};
}
__name(getNodeFromBlock, "getNodeFromBlock");
async function calculateBlockSize(e, S, C) {
	let w = getNodeFromBlock(S, C, !1);
	if (S.type === "group") return;
	let E = await insertNode(e, w, { config: getConfig() }), D = E.node()?.getBBox() ?? {
		width: 0,
		height: 0
	}, O = C.getBlock(w.id);
	O.size = {
		width: D.width,
		height: D.height,
		x: 0,
		y: 0,
		node: E
	}, C.setBlock(O), E.remove();
}
__name(calculateBlockSize, "calculateBlockSize");
async function insertBlockPositioned(e, S, C) {
	let w = getNodeFromBlock(S, C, !0);
	C.getBlock(w.id).type !== "space" && (await insertNode(e, w, { config: getConfig() }), S.intersect = w?.intersect, positionNode(w));
}
__name(insertBlockPositioned, "insertBlockPositioned");
async function performOperations(e, S, C, w) {
	for (let T of S) await w(e, T, C), T.children && await performOperations(e, T.children, C, w);
}
__name(performOperations, "performOperations");
async function calculateBlockSizes(e, S, C) {
	await performOperations(e, S, C, calculateBlockSize);
}
__name(calculateBlockSizes, "calculateBlockSizes");
async function insertBlocks(e, S, C) {
	await performOperations(e, S, C, insertBlockPositioned);
}
__name(insertBlocks, "insertBlocks");
async function insertEdges(e, S, C, w, T) {
	let E = new Graph({
		multigraph: !0,
		compound: !0
	});
	E.setGraph({
		rankdir: "TB",
		nodesep: 10,
		ranksep: 10,
		marginx: 8,
		marginy: 8
	});
	for (let e of C) e.size && E.setNode(e.id, {
		width: e.size.width,
		height: e.size.height,
		intersect: e.intersect
	});
	for (let C of S) if (C.start && C.end) {
		let S = w.getBlock(C.start), D = w.getBlock(C.end);
		if (S?.size && D?.size) {
			let w = S.size, O = D.size, k = [
				{
					x: w.x,
					y: w.y
				},
				{
					x: w.x + (O.x - w.x) / 2,
					y: w.y + (O.y - w.y) / 2
				},
				{
					x: O.x,
					y: O.y
				}
			], A = T ? `${T}-${C.id}` : C.id, j = `${C.thickness === "thick" ? "edge-thickness-thick" : "edge-thickness-normal"} ${C.pattern === "dotted" ? "edge-pattern-dotted" : "edge-pattern-solid"} flowchart-link LS-a1 LE-b1`;
			insertEdge(e, {
				...C,
				id: A,
				arrowTypeEnd: C.arrowTypeEnd,
				arrowTypeStart: C.arrowTypeStart,
				points: k,
				classes: j
			}, {}, "block", E.node(C.start), E.node(C.end), T), C.label && (await insertEdgeLabel(e, {
				...C,
				label: C.label,
				labelStyle: "stroke: #333; stroke-width: 1.5px;fill:none;",
				arrowTypeEnd: C.arrowTypeEnd,
				arrowTypeStart: C.arrowTypeStart,
				points: k,
				classes: j
			}), positionEdgeLabel({
				...C,
				x: k[1].x,
				y: k[1].y
			}, { originalPath: k }));
		}
	}
}
__name(insertEdges, "insertEdges");
var diagram = {
	parser: block_default,
	db: blockDB_default,
	renderer: {
		draw: /* @__PURE__ */ __name(async function(e, w, D, O) {
			let { securityLevel: k, block: A } = getConfig(), j = O.db;
			j.setDiagramId(w);
			let M;
			k === "sandbox" && (M = select_default("#i" + w));
			let N = select_default(k === "sandbox" ? M.nodes()[0].contentDocument.body : "body"), P = k === "sandbox" ? N.select(`[id="${w}"]`) : select_default(`[id="${w}"]`);
			markers_default(P, [
				"point",
				"circle",
				"cross"
			], O.type, w);
			let F = j.getBlocks(), I = j.getBlocksFlat(), L = j.getEdges(), R = P.insert("g").attr("class", "block");
			await calculateBlockSizes(R, F, j);
			let z = layout(j);
			await insertBlocks(R, F, j), await insertEdges(R, L, I, j, w);
			let B = R.node()?.getBBox(), V = B && Number.isFinite(B.width) && Number.isFinite(B.height) ? B : z;
			if (V) {
				let e = Math.max(1, Math.round(.125 * (V.width / V.height))), C = V.height + e + 10, w = V.width + 10, { useMaxWidth: T } = A;
				configureSvgSize(P, C, w, !!T), log.debug("Here Bounds", z, V), P.attr("viewBox", `${V.x - 5} ${V.y - 5} ${V.width + 10} ${V.height + 10}`);
			}
		}, "draw"),
		getClasses: /* @__PURE__ */ __name(function(e, S) {
			return S.db.getClasses();
		}, "getClasses")
	},
	styles: styles_default
};
export { diagram };
