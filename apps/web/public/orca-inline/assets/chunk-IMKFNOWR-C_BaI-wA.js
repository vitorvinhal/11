import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { H as setAccDescription, K as setDiagramTitle, U as setAccTitle, a as clear, s as common_default, v as getAccDescription, w as getDiagramTitle, x as getConfig2, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { t as purify } from "./purify.es-Ddnop6vN.js";
import { _ as utils_default, c as generateId } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as createTooltip } from "./chunk-F27PBJKO-DSkpyj5-.js";
import { t as getDiagramElement } from "./chunk-XXDRQBXY-CP9NJsKO.js";
import { t as setupViewPortForSVG } from "./chunk-POPQ4Y6H-3Rat7IEA.js";
import { r as render } from "./chunk-TLUHSLCS-B5wVOksj.js";
var parser = (function() {
	var b = /* @__PURE__ */ __name(function(e, b, x, S) {
		for (x ||= {}, S = e.length; S--; x[e[S]] = b);
		return x;
	}, "o"), x = [1, 2], S = [1, 3], C = [1, 4], w = [2, 4], T = [1, 9], E = [1, 11], D = [1, 16], O = [1, 17], k = [1, 18], A = [1, 19], j = [1, 33], M = [1, 20], N = [1, 21], P = [1, 22], F = [1, 23], I = [1, 24], L = [1, 26], R = [1, 27], z = [1, 28], B = [1, 29], V = [1, 30], H = [1, 31], U = [1, 32], W = [1, 35], G = [1, 36], K = [1, 37], q = [1, 38], J = [1, 34], Y = [
		1,
		4,
		5,
		16,
		17,
		19,
		21,
		22,
		24,
		25,
		26,
		27,
		28,
		29,
		33,
		35,
		37,
		38,
		41,
		45,
		48,
		51,
		52,
		53,
		54,
		57
	], X = [
		1,
		4,
		5,
		14,
		15,
		16,
		17,
		19,
		21,
		22,
		24,
		25,
		26,
		27,
		28,
		29,
		33,
		35,
		37,
		38,
		39,
		40,
		41,
		45,
		48,
		51,
		52,
		53,
		54,
		57
	], Z = [
		4,
		5,
		16,
		17,
		19,
		21,
		22,
		24,
		25,
		26,
		27,
		28,
		29,
		33,
		35,
		37,
		38,
		41,
		45,
		48,
		51,
		52,
		53,
		54,
		57
	], Q = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			SPACE: 4,
			NL: 5,
			SD: 6,
			document: 7,
			line: 8,
			statement: 9,
			classDefStatement: 10,
			styleStatement: 11,
			cssClassStatement: 12,
			idStatement: 13,
			DESCR: 14,
			"-->": 15,
			HIDE_EMPTY: 16,
			scale: 17,
			WIDTH: 18,
			COMPOSIT_STATE: 19,
			STRUCT_START: 20,
			STRUCT_STOP: 21,
			STATE_DESCR: 22,
			AS: 23,
			ID: 24,
			FORK: 25,
			JOIN: 26,
			CHOICE: 27,
			CONCURRENT: 28,
			note: 29,
			notePosition: 30,
			NOTE_TEXT: 31,
			direction: 32,
			acc_title: 33,
			acc_title_value: 34,
			acc_descr: 35,
			acc_descr_value: 36,
			acc_descr_multiline_value: 37,
			CLICK: 38,
			STRING: 39,
			HREF: 40,
			classDef: 41,
			CLASSDEF_ID: 42,
			CLASSDEF_STYLEOPTS: 43,
			DEFAULT: 44,
			style: 45,
			STYLE_IDS: 46,
			STYLEDEF_STYLEOPTS: 47,
			class: 48,
			CLASSENTITY_IDS: 49,
			STYLECLASS: 50,
			direction_tb: 51,
			direction_bt: 52,
			direction_rl: 53,
			direction_lr: 54,
			eol: 55,
			";": 56,
			EDGE_STATE: 57,
			STYLE_SEPARATOR: 58,
			left_of: 59,
			right_of: 60,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SPACE",
			5: "NL",
			6: "SD",
			14: "DESCR",
			15: "-->",
			16: "HIDE_EMPTY",
			17: "scale",
			18: "WIDTH",
			19: "COMPOSIT_STATE",
			20: "STRUCT_START",
			21: "STRUCT_STOP",
			22: "STATE_DESCR",
			23: "AS",
			24: "ID",
			25: "FORK",
			26: "JOIN",
			27: "CHOICE",
			28: "CONCURRENT",
			29: "note",
			31: "NOTE_TEXT",
			33: "acc_title",
			34: "acc_title_value",
			35: "acc_descr",
			36: "acc_descr_value",
			37: "acc_descr_multiline_value",
			38: "CLICK",
			39: "STRING",
			40: "HREF",
			41: "classDef",
			42: "CLASSDEF_ID",
			43: "CLASSDEF_STYLEOPTS",
			44: "DEFAULT",
			45: "style",
			46: "STYLE_IDS",
			47: "STYLEDEF_STYLEOPTS",
			48: "class",
			49: "CLASSENTITY_IDS",
			50: "STYLECLASS",
			51: "direction_tb",
			52: "direction_bt",
			53: "direction_rl",
			54: "direction_lr",
			56: ";",
			57: "EDGE_STATE",
			58: "STYLE_SEPARATOR",
			59: "left_of",
			60: "right_of"
		},
		productions_: [
			0,
			[3, 2],
			[3, 2],
			[3, 2],
			[7, 0],
			[7, 2],
			[8, 2],
			[8, 1],
			[8, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[9, 3],
			[9, 4],
			[9, 1],
			[9, 2],
			[9, 1],
			[9, 4],
			[9, 3],
			[9, 6],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 4],
			[9, 4],
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 5],
			[9, 5],
			[10, 3],
			[10, 3],
			[11, 3],
			[12, 3],
			[32, 1],
			[32, 1],
			[32, 1],
			[32, 1],
			[55, 1],
			[55, 1],
			[13, 1],
			[13, 1],
			[13, 3],
			[13, 3],
			[30, 1],
			[30, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, b, x, S, C, w, T) {
			var E = w.length - 1;
			switch (C) {
				case 3: return S.setRootDoc(w[E]), w[E];
				case 4:
					this.$ = [];
					break;
				case 5:
					w[E] != "nl" && (w[E - 1].push(w[E]), this.$ = w[E - 1]);
					break;
				case 6:
				case 7:
					this.$ = w[E];
					break;
				case 8:
					this.$ = "nl";
					break;
				case 12:
					this.$ = w[E];
					break;
				case 13:
					let e = w[E - 1];
					e.description = S.trimColon(w[E]), this.$ = e;
					break;
				case 14:
					this.$ = {
						stmt: "relation",
						state1: w[E - 2],
						state2: w[E]
					};
					break;
				case 15:
					let b = S.trimColon(w[E]);
					this.$ = {
						stmt: "relation",
						state1: w[E - 3],
						state2: w[E - 1],
						description: b
					};
					break;
				case 19:
					this.$ = {
						stmt: "state",
						id: w[E - 3],
						type: "default",
						description: "",
						doc: w[E - 1]
					};
					break;
				case 20:
					var D = w[E], O = w[E - 2].trim();
					if (w[E].match(":")) {
						var k = w[E].split(":");
						D = k[0], O = [O, k[1]];
					}
					this.$ = {
						stmt: "state",
						id: D,
						type: "default",
						description: O
					};
					break;
				case 21:
					this.$ = {
						stmt: "state",
						id: w[E - 3],
						type: "default",
						description: w[E - 5],
						doc: w[E - 1]
					};
					break;
				case 22:
					this.$ = {
						stmt: "state",
						id: w[E],
						type: "fork"
					};
					break;
				case 23:
					this.$ = {
						stmt: "state",
						id: w[E],
						type: "join"
					};
					break;
				case 24:
					this.$ = {
						stmt: "state",
						id: w[E],
						type: "choice"
					};
					break;
				case 25:
					this.$ = {
						stmt: "state",
						id: S.getDividerId(),
						type: "divider"
					};
					break;
				case 26:
					this.$ = {
						stmt: "state",
						id: w[E - 1].trim(),
						note: {
							position: w[E - 2].trim(),
							text: w[E].trim()
						}
					};
					break;
				case 29:
					this.$ = w[E].trim(), S.setAccTitle(this.$);
					break;
				case 30:
				case 31:
					this.$ = w[E].trim(), S.setAccDescription(this.$);
					break;
				case 32:
					this.$ = {
						stmt: "click",
						id: w[E - 3],
						url: w[E - 2],
						tooltip: w[E - 1]
					};
					break;
				case 33:
					this.$ = {
						stmt: "click",
						id: w[E - 3],
						url: w[E - 1],
						tooltip: ""
					};
					break;
				case 34:
				case 35:
					this.$ = {
						stmt: "classDef",
						id: w[E - 1].trim(),
						classes: w[E].trim()
					};
					break;
				case 36:
					this.$ = {
						stmt: "style",
						id: w[E - 1].trim(),
						styleClass: w[E].trim()
					};
					break;
				case 37:
					this.$ = {
						stmt: "applyClass",
						id: w[E - 1].trim(),
						styleClass: w[E].trim()
					};
					break;
				case 38:
					S.setDirection("TB"), this.$ = {
						stmt: "dir",
						value: "TB"
					};
					break;
				case 39:
					S.setDirection("BT"), this.$ = {
						stmt: "dir",
						value: "BT"
					};
					break;
				case 40:
					S.setDirection("RL"), this.$ = {
						stmt: "dir",
						value: "RL"
					};
					break;
				case 41:
					S.setDirection("LR"), this.$ = {
						stmt: "dir",
						value: "LR"
					};
					break;
				case 44:
				case 45:
					this.$ = {
						stmt: "state",
						id: w[E].trim(),
						type: "default",
						description: ""
					};
					break;
				case 46:
					this.$ = {
						stmt: "state",
						id: w[E - 2].trim(),
						classes: [w[E].trim()],
						type: "default",
						description: ""
					};
					break;
				case 47:
					this.$ = {
						stmt: "state",
						id: w[E - 2].trim(),
						classes: [w[E].trim()],
						type: "default",
						description: ""
					};
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: x,
				5: S,
				6: C
			},
			{ 1: [3] },
			{
				3: 5,
				4: x,
				5: S,
				6: C
			},
			{
				3: 6,
				4: x,
				5: S,
				6: C
			},
			b([
				1,
				4,
				5,
				16,
				17,
				19,
				22,
				24,
				25,
				26,
				27,
				28,
				29,
				33,
				35,
				37,
				38,
				41,
				45,
				48,
				51,
				52,
				53,
				54,
				57
			], w, { 7: 7 }),
			{ 1: [2, 1] },
			{ 1: [2, 2] },
			{
				1: [2, 3],
				4: T,
				5: E,
				8: 8,
				9: 10,
				10: 12,
				11: 13,
				12: 14,
				13: 15,
				16: D,
				17: O,
				19: k,
				22: A,
				24: j,
				25: M,
				26: N,
				27: P,
				28: F,
				29: I,
				32: 25,
				33: L,
				35: R,
				37: z,
				38: B,
				41: V,
				45: H,
				48: U,
				51: W,
				52: G,
				53: K,
				54: q,
				57: J
			},
			b(Y, [2, 5]),
			{
				9: 39,
				10: 12,
				11: 13,
				12: 14,
				13: 15,
				16: D,
				17: O,
				19: k,
				22: A,
				24: j,
				25: M,
				26: N,
				27: P,
				28: F,
				29: I,
				32: 25,
				33: L,
				35: R,
				37: z,
				38: B,
				41: V,
				45: H,
				48: U,
				51: W,
				52: G,
				53: K,
				54: q,
				57: J
			},
			b(Y, [2, 7]),
			b(Y, [2, 8]),
			b(Y, [2, 9]),
			b(Y, [2, 10]),
			b(Y, [2, 11]),
			b(Y, [2, 12], {
				14: [1, 40],
				15: [1, 41]
			}),
			b(Y, [2, 16]),
			{ 18: [1, 42] },
			b(Y, [2, 18], { 20: [1, 43] }),
			{ 23: [1, 44] },
			b(Y, [2, 22]),
			b(Y, [2, 23]),
			b(Y, [2, 24]),
			b(Y, [2, 25]),
			{
				30: 45,
				31: [1, 46],
				59: [1, 47],
				60: [1, 48]
			},
			b(Y, [2, 28]),
			{ 34: [1, 49] },
			{ 36: [1, 50] },
			b(Y, [2, 31]),
			{
				13: 51,
				24: j,
				57: J
			},
			{
				42: [1, 52],
				44: [1, 53]
			},
			{ 46: [1, 54] },
			{ 49: [1, 55] },
			b(X, [2, 44], { 58: [1, 56] }),
			b(X, [2, 45], { 58: [1, 57] }),
			b(Y, [2, 38]),
			b(Y, [2, 39]),
			b(Y, [2, 40]),
			b(Y, [2, 41]),
			b(Y, [2, 6]),
			b(Y, [2, 13]),
			{
				13: 58,
				24: j,
				57: J
			},
			b(Y, [2, 17]),
			b(Z, w, { 7: 59 }),
			{ 24: [1, 60] },
			{ 24: [1, 61] },
			{ 23: [1, 62] },
			{ 24: [2, 48] },
			{ 24: [2, 49] },
			b(Y, [2, 29]),
			b(Y, [2, 30]),
			{
				39: [1, 63],
				40: [1, 64]
			},
			{ 43: [1, 65] },
			{ 43: [1, 66] },
			{ 47: [1, 67] },
			{ 50: [1, 68] },
			{ 24: [1, 69] },
			{ 24: [1, 70] },
			b(Y, [2, 14], { 14: [1, 71] }),
			{
				4: T,
				5: E,
				8: 8,
				9: 10,
				10: 12,
				11: 13,
				12: 14,
				13: 15,
				16: D,
				17: O,
				19: k,
				21: [1, 72],
				22: A,
				24: j,
				25: M,
				26: N,
				27: P,
				28: F,
				29: I,
				32: 25,
				33: L,
				35: R,
				37: z,
				38: B,
				41: V,
				45: H,
				48: U,
				51: W,
				52: G,
				53: K,
				54: q,
				57: J
			},
			b(Y, [2, 20], { 20: [1, 73] }),
			{ 31: [1, 74] },
			{ 24: [1, 75] },
			{ 39: [1, 76] },
			{ 39: [1, 77] },
			b(Y, [2, 34]),
			b(Y, [2, 35]),
			b(Y, [2, 36]),
			b(Y, [2, 37]),
			b(X, [2, 46]),
			b(X, [2, 47]),
			b(Y, [2, 15]),
			b(Y, [2, 19]),
			b(Z, w, { 7: 78 }),
			b(Y, [2, 26]),
			b(Y, [2, 27]),
			{ 5: [1, 79] },
			{ 5: [1, 80] },
			{
				4: T,
				5: E,
				8: 8,
				9: 10,
				10: 12,
				11: 13,
				12: 14,
				13: 15,
				16: D,
				17: O,
				19: k,
				21: [1, 81],
				22: A,
				24: j,
				25: M,
				26: N,
				27: P,
				28: F,
				29: I,
				32: 25,
				33: L,
				35: R,
				37: z,
				38: B,
				41: V,
				45: H,
				48: U,
				51: W,
				52: G,
				53: K,
				54: q,
				57: J
			},
			b(Y, [2, 32]),
			b(Y, [2, 33]),
			b(Y, [2, 21])
		],
		defaultActions: {
			5: [2, 1],
			6: [2, 2],
			47: [2, 48],
			48: [2, 49]
		},
		parseError: /* @__PURE__ */ __name(function(e, b) {
			if (b.recoverable) this.trace(e);
			else {
				var x = Error(e);
				throw x.hash = b, x;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(b) {
			var x = this, S = [0], C = [], w = [null], T = [], E = this.table, D = "", O = 0, k = 0, A = 0, j = 2, M = 1, N = T.slice.call(arguments, 1), P = Object.create(this.lexer), F = { yy: {} };
			for (var I in this.yy) Object.prototype.hasOwnProperty.call(this.yy, I) && (F.yy[I] = this.yy[I]);
			P.setInput(b, F.yy), F.yy.lexer = P, F.yy.parser = this, P.yylloc === void 0 && (P.yylloc = {});
			var L = P.yylloc;
			T.push(L);
			var R = P.options && P.options.ranges;
			typeof F.yy.parseError == "function" ? this.parseError = F.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function z(e) {
				S.length -= 2 * e, w.length -= e, T.length -= e;
			}
			__name(z, "popStack");
			function B() {
				var e = C.pop() || P.lex() || M;
				return typeof e != "number" && (e instanceof Array && (C = e, e = C.pop()), e = x.symbols_[e] || e), e;
			}
			__name(B, "lex");
			for (var V, H, U, W, G, K = {}, q, J, Y, X;;) {
				if (U = S[S.length - 1], this.defaultActions[U] ? W = this.defaultActions[U] : (V ??= B(), W = E[U] && E[U][V]), W === void 0 || !W.length || !W[0]) {
					var Z = "";
					for (q in X = [], E[U]) this.terminals_[q] && q > j && X.push("'" + this.terminals_[q] + "'");
					Z = P.showPosition ? "Parse error on line " + (O + 1) + ":\n" + P.showPosition() + "\nExpecting " + X.join(", ") + ", got '" + (this.terminals_[V] || V) + "'" : "Parse error on line " + (O + 1) + ": Unexpected " + (V == M ? "end of input" : "'" + (this.terminals_[V] || V) + "'"), this.parseError(Z, {
						text: P.match,
						token: this.terminals_[V] || V,
						line: P.yylineno,
						loc: L,
						expected: X
					});
				}
				if (W[0] instanceof Array && W.length > 1) throw Error("Parse Error: multiple actions possible at state: " + U + ", token: " + V);
				switch (W[0]) {
					case 1:
						S.push(V), w.push(P.yytext), T.push(P.yylloc), S.push(W[1]), V = null, H ? (V = H, H = null) : (k = P.yyleng, D = P.yytext, O = P.yylineno, L = P.yylloc, A > 0 && A--);
						break;
					case 2:
						if (J = this.productions_[W[1]][1], K.$ = w[w.length - J], K._$ = {
							first_line: T[T.length - (J || 1)].first_line,
							last_line: T[T.length - 1].last_line,
							first_column: T[T.length - (J || 1)].first_column,
							last_column: T[T.length - 1].last_column
						}, R && (K._$.range = [T[T.length - (J || 1)].range[0], T[T.length - 1].range[1]]), G = this.performAction.apply(K, [
							D,
							k,
							O,
							F.yy,
							W[1],
							w,
							T
						].concat(N)), G !== void 0) return G;
						J && (S = S.slice(0, -1 * J * 2), w = w.slice(0, -1 * J), T = T.slice(0, -1 * J)), S.push(this.productions_[W[1]][0]), w.push(K.$), T.push(K._$), Y = E[S[S.length - 2]][S[S.length - 1]], S.push(Y);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	Q.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(e, b) {
				if (this.yy.parser) this.yy.parser.parseError(e, b);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(e, b) {
				return this.yy = b || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
				var b = e.length, x = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b), this.offset -= b;
				var S = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), x.length - 1 && (this.yylineno -= x.length - 1);
				var C = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: x ? (x.length === S.length ? this.yylloc.first_column : 0) + S[S.length - x.length].length - x[0].length : this.yylloc.first_column - b
				}, this.options.ranges && (this.yylloc.range = [C[0], C[0] + this.yyleng - b]), this.yyleng = this.yytext.length, this;
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
				var e = this.pastInput(), b = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + b + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(e, b) {
				var x, S, C;
				if (this.options.backtrack_lexer && (C = {
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
				}, this.options.ranges && (C.yylloc.range = this.yylloc.range.slice(0))), S = e[0].match(/(?:\r\n?|\n).*/g), S && (this.yylineno += S.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: S ? S[S.length - 1].length - S[S.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], x = this.performAction.call(this, this.yy, this, b, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), x) return x;
				if (this._backtrack) {
					for (var w in C) this[w] = C[w];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, b, x, S;
				this._more || (this.yytext = "", this.match = "");
				for (var C = this._currentRules(), w = 0; w < C.length; w++) if (x = this._input.match(this.rules[C[w]]), x && (!b || x[0].length > b[0].length)) {
					if (b = x, S = w, this.options.backtrack_lexer) {
						if (e = this.test_match(x, C[w]), e !== !1) return e;
						if (this._backtrack) {
							b = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return b ? (e = this.test_match(b, C[S]), e === !1 ? !1 : e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
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
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ __name(function(b, x, S, C) {
				function w() {
					let e = x.yytext.indexOf("%%");
					if (e === 0) return !1;
					if (e > 0) {
						let S = x.yytext.slice(0, e), C = x.yytext.slice(e);
						C && b.lexer.unput(C), x.yytext = S;
					}
					return !0;
				}
				switch (__name(w, "processId"), S) {
					case 0: return 38;
					case 1: return 40;
					case 2: return 39;
					case 3: return 44;
					case 4: return 51;
					case 5: return 52;
					case 6: return 53;
					case 7: return 54;
					case 8: return 5;
					case 9: break;
					case 10: break;
					case 11: break;
					case 12: break;
					case 13: return this.pushState("SCALE"), 17;
					case 14: return 18;
					case 15:
						this.popState();
						break;
					case 16: return this.begin("acc_title"), 33;
					case 17: return this.popState(), "acc_title_value";
					case 18: return this.begin("acc_descr"), 35;
					case 19: return this.popState(), "acc_descr_value";
					case 20:
						this.begin("acc_descr_multiline");
						break;
					case 21:
						this.popState();
						break;
					case 22: return "acc_descr_multiline_value";
					case 23: return this.pushState("CLASSDEF"), 41;
					case 24: return this.popState(), this.pushState("CLASSDEFID"), "DEFAULT_CLASSDEF_ID";
					case 25: return this.popState(), this.pushState("CLASSDEFID"), 42;
					case 26: return this.popState(), 43;
					case 27: return this.pushState("CLASS"), 48;
					case 28: return this.popState(), this.pushState("CLASS_STYLE"), 49;
					case 29: return this.popState(), 50;
					case 30: return this.pushState("STYLE"), 45;
					case 31: return this.popState(), this.pushState("STYLEDEF_STYLES"), 46;
					case 32: return this.popState(), 47;
					case 33: return this.pushState("SCALE"), 17;
					case 34: return 18;
					case 35:
						this.popState();
						break;
					case 36:
						this.pushState("STATE");
						break;
					case 37: return this.popState(), x.yytext = x.yytext.slice(0, -8).trim(), 25;
					case 38: return this.popState(), x.yytext = x.yytext.slice(0, -8).trim(), 26;
					case 39: return this.popState(), x.yytext = x.yytext.slice(0, -10).trim(), 27;
					case 40: return this.popState(), x.yytext = x.yytext.slice(0, -8).trim(), 25;
					case 41: return this.popState(), x.yytext = x.yytext.slice(0, -8).trim(), 26;
					case 42: return this.popState(), x.yytext = x.yytext.slice(0, -10).trim(), 27;
					case 43: return 51;
					case 44: return 52;
					case 45: return 53;
					case 46: return 54;
					case 47:
						this.pushState("STATE_STRING");
						break;
					case 48: return this.pushState("STATE_ID"), "AS";
					case 49: return w() ? (this.popState(), "ID") : void 0;
					case 50:
						this.popState();
						break;
					case 51: return "STATE_DESCR";
					case 52: throw Error("Error: State name must be a single word. Found: \"" + x.yytext.trim() + "\"");
					case 53: return 19;
					case 54:
						this.popState();
						break;
					case 55: return this.popState(), this.pushState("struct"), 20;
					case 56: return this.popState(), 21;
					case 57: break;
					case 58: return this.begin("NOTE"), 29;
					case 59: return this.popState(), this.pushState("NOTE_ID"), 59;
					case 60: return this.popState(), this.pushState("NOTE_ID"), 60;
					case 61:
						this.popState(), this.pushState("FLOATING_NOTE");
						break;
					case 62: return this.popState(), this.pushState("FLOATING_NOTE_ID"), "AS";
					case 63: break;
					case 64: return "NOTE_TEXT";
					case 65: return w() ? (this.popState(), "ID") : void 0;
					case 66: return w() ? (this.popState(), this.pushState("NOTE_TEXT"), 24) : void 0;
					case 67: return this.popState(), x.yytext = x.yytext.substr(2).trim(), 31;
					case 68: return this.popState(), x.yytext = x.yytext.slice(0, -8).trim(), 31;
					case 69: return 6;
					case 70: return 6;
					case 71: return 16;
					case 72: return 57;
					case 73: return w() ? 24 : void 0;
					case 74: return x.yytext = x.yytext.trim(), 14;
					case 75: return 15;
					case 76: return 28;
					case 77: return 58;
					case 78: return 5;
					case 79: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:click\b)/i,
				/^(?:href\b)/i,
				/^(?:"[^"]*")/i,
				/^(?:default\b)/i,
				/^(?:.*direction\s+TB[^\n]*)/i,
				/^(?:.*direction\s+BT[^\n]*)/i,
				/^(?:.*direction\s+RL[^\n]*)/i,
				/^(?:.*direction\s+LR[^\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:[\s]+)/i,
				/^(?:((?!\n)\s)+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:%%(?!\{)[^\n]*)/i,
				/^(?:scale\s+)/i,
				/^(?:\d+)/i,
				/^(?:\s+width\b)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:classDef\s+)/i,
				/^(?:DEFAULT\s+)/i,
				/^(?:\w+\s+)/i,
				/^(?:[^\n]*)/i,
				/^(?:class\s+)/i,
				/^(?:(\w+)+((,\s*\w+)*))/i,
				/^(?:[^\n]*)/i,
				/^(?:style\s+)/i,
				/^(?:[\w,]+\s+)/i,
				/^(?:[^\n]*)/i,
				/^(?:scale\s+)/i,
				/^(?:\d+)/i,
				/^(?:\s+width\b)/i,
				/^(?:state\s+)/i,
				/^(?:.*<<fork>>)/i,
				/^(?:.*<<join>>)/i,
				/^(?:.*<<choice>>)/i,
				/^(?:.*\[\[fork\]\])/i,
				/^(?:.*\[\[join\]\])/i,
				/^(?:.*\[\[choice\]\])/i,
				/^(?:.*direction\s+TB[^\n]*)/i,
				/^(?:.*direction\s+BT[^\n]*)/i,
				/^(?:.*direction\s+RL[^\n]*)/i,
				/^(?:.*direction\s+LR[^\n]*)/i,
				/^(?:["])/i,
				/^(?:\s*as\s+)/i,
				/^(?:[^\n\{]*)/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?:\w+\s+\w+.*?\{)/i,
				/^(?:[^\n\s\{]+)/i,
				/^(?:\n)/i,
				/^(?:\{)/i,
				/^(?:\})/i,
				/^(?:[\n])/i,
				/^(?:note\s+)/i,
				/^(?:left of\b)/i,
				/^(?:right of\b)/i,
				/^(?:")/i,
				/^(?:\s*as\s*)/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?:[^\n]*)/i,
				/^(?:\s*[^:\n\s\-]+)/i,
				/^(?:\s*:[^:\n;]+)/i,
				/^(?:[\s\S]*?\n\s*end note\b)/i,
				/^(?:stateDiagram\s+)/i,
				/^(?:stateDiagram-v2\s+)/i,
				/^(?:hide empty description\b)/i,
				/^(?:\[\*\])/i,
				/^(?:[^:\n\s\-\{]+)/i,
				/^(?:\s*:(?:[^:\n;]|:[^:\n;])+)/i,
				/^(?:-->)/i,
				/^(?:--)/i,
				/^(?::::)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				LINE: {
					rules: [
						10,
						11,
						12
					],
					inclusive: !1
				},
				struct: {
					rules: [
						10,
						11,
						12,
						23,
						27,
						30,
						36,
						43,
						44,
						45,
						46,
						56,
						57,
						58,
						72,
						73,
						74,
						75,
						76,
						77
					],
					inclusive: !1
				},
				FLOATING_NOTE_ID: {
					rules: [65],
					inclusive: !1
				},
				FLOATING_NOTE: {
					rules: [
						62,
						63,
						64
					],
					inclusive: !1
				},
				NOTE_TEXT: {
					rules: [67, 68],
					inclusive: !1
				},
				NOTE_ID: {
					rules: [66],
					inclusive: !1
				},
				NOTE: {
					rules: [
						59,
						60,
						61
					],
					inclusive: !1
				},
				STYLEDEF_STYLEOPTS: {
					rules: [],
					inclusive: !1
				},
				STYLEDEF_STYLES: {
					rules: [32],
					inclusive: !1
				},
				STYLE_IDS: {
					rules: [],
					inclusive: !1
				},
				STYLE: {
					rules: [31],
					inclusive: !1
				},
				CLASS_STYLE: {
					rules: [29],
					inclusive: !1
				},
				CLASS: {
					rules: [28],
					inclusive: !1
				},
				CLASSDEFID: {
					rules: [26],
					inclusive: !1
				},
				CLASSDEF: {
					rules: [24, 25],
					inclusive: !1
				},
				acc_descr_multiline: {
					rules: [21, 22],
					inclusive: !1
				},
				acc_descr: {
					rules: [19],
					inclusive: !1
				},
				acc_title: {
					rules: [17],
					inclusive: !1
				},
				SCALE: {
					rules: [
						14,
						15,
						34,
						35
					],
					inclusive: !1
				},
				ALIAS: {
					rules: [],
					inclusive: !1
				},
				STATE_ID: {
					rules: [49],
					inclusive: !1
				},
				STATE_STRING: {
					rules: [50, 51],
					inclusive: !1
				},
				FORK_STATE: {
					rules: [],
					inclusive: !1
				},
				STATE: {
					rules: [
						10,
						11,
						12,
						37,
						38,
						39,
						40,
						41,
						42,
						47,
						48,
						52,
						53,
						54,
						55
					],
					inclusive: !1
				},
				ID: {
					rules: [
						10,
						11,
						12
					],
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
						9,
						11,
						12,
						13,
						16,
						18,
						20,
						23,
						27,
						30,
						33,
						36,
						55,
						58,
						69,
						70,
						71,
						72,
						73,
						74,
						75,
						77,
						78,
						79
					],
					inclusive: !0
				}
			}
		};
	})();
	function $() {
		this.yy = {};
	}
	return __name($, "Parser"), $.prototype = Q, Q.Parser = $, new $();
})();
parser.parser = parser;
var stateDiagram_default = parser, DEFAULT_DIAGRAM_DIRECTION = "TB", DEFAULT_NESTED_DOC_DIR = "TB", STMT_DIRECTION = "dir", STMT_STATE = "state", STMT_ROOT = "root", STMT_RELATION = "relation", STMT_CLASSDEF = "classDef", STMT_STYLEDEF = "style", STMT_APPLYCLASS = "applyClass", DEFAULT_STATE_TYPE = "default", DIVIDER_TYPE = "divider", G_EDGE_STYLE = "fill:none", G_EDGE_ARROWHEADSTYLE = "fill: #333", G_EDGE_LABELPOS = "c", G_EDGE_LABELTYPE = "markdown", G_EDGE_THICKNESS = "normal", SHAPE_STATE = "rect", SHAPE_STATE_WITH_DESC = "rectWithTitle", SHAPE_START = "stateStart", SHAPE_END = "stateEnd", SHAPE_DIVIDER = "divider", SHAPE_GROUP = "roundedWithTitle", SHAPE_NOTE = "note", SHAPE_NOTEGROUP = "noteGroup", CSS_DIAGRAM = "statediagram", CSS_DIAGRAM_STATE = `${CSS_DIAGRAM}-state`, CSS_EDGE = "transition", CSS_NOTE = "note", CSS_EDGE_NOTE_EDGE = `${CSS_EDGE} note-edge`, CSS_DIAGRAM_NOTE = `${CSS_DIAGRAM}-${CSS_NOTE}`, CSS_DIAGRAM_CLUSTER = `${CSS_DIAGRAM}-cluster`, CSS_DIAGRAM_CLUSTER_ALT = `${CSS_DIAGRAM}-cluster-alt`, PARENT = "parent", NOTE = "note", DOMID_STATE = "state", DOMID_TYPE_SPACER = "----", NOTE_ID = `${DOMID_TYPE_SPACER}${NOTE}`, PARENT_ID = `${DOMID_TYPE_SPACER}${PARENT}`, getDir = /* @__PURE__ */ __name((e, b = DEFAULT_NESTED_DOC_DIR) => {
	if (!e.doc) return b;
	let x = b;
	for (let b of e.doc) b.stmt === "dir" && (x = b.value);
	return x;
}, "getDir"), stateRenderer_v3_unified_default = {
	getClasses: /* @__PURE__ */ __name(function(e, b) {
		return b.db.getClasses();
	}, "getClasses"),
	draw: /* @__PURE__ */ __name(async function(e, x, S, C) {
		log.info("REF0:"), log.info("Drawing state diagram (v2)", x);
		let { securityLevel: w, state: T, layout: E } = getConfig2();
		C.db.extract(C.db.getRootDocV2());
		let D = C.db.getData(), O = getDiagramElement(x, w);
		D.type = C.type, D.layoutAlgorithm = E, D.nodeSpacing = T?.nodeSpacing || 50, D.rankSpacing = T?.rankSpacing || 50, getConfig2().look === "neo" ? D.markers = ["barbNeo"] : D.markers = ["barb"], D.diagramId = x, await render(D, O);
		try {
			(typeof C.db.getLinks == "function" ? C.db.getLinks() : /* @__PURE__ */ new Map()).forEach((e, x) => {
				let S = typeof x == "string" ? x : typeof x?.id == "string" ? x.id : "", C = D.nodes.find((e) => e.id === S);
				if (!S) {
					log.warn("⚠️ Invalid or missing stateId from key:", JSON.stringify(x));
					return;
				}
				let w = O.node()?.querySelectorAll("g.node, g.rough-node"), T;
				if (w?.forEach((e) => {
					let b = e.textContent?.trim();
					(e.id === C?.domId || b === S) && (T = e);
				}), !T) {
					log.warn("⚠️ Could not find node matching text:", S);
					return;
				}
				let E = T.parentNode;
				if (!E) {
					log.warn("⚠️ Node has no parent, cannot wrap:", S);
					return;
				}
				let k = document.createElementNS("http://www.w3.org/2000/svg", "a"), A = e.url.replace(/^"+|"+$/g, "");
				if (k.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", A), k.setAttribute("target", "_blank"), e.tooltip) {
					let b = e.tooltip.replace(/^"+|"+$/g, "");
					k.setAttribute("title", b), T.setAttribute("title", b);
				}
				E.replaceChild(k, T), k.appendChild(T), log.info("🔗 Wrapped node in <a> tag for:", S, e.url);
			});
		} catch (e) {
			log.error("❌ Error injecting clickable links:", e);
		}
		utils_default.insertTitle(O, "statediagramTitleText", T?.titleTopMargin ?? 25, C.db.getDiagramTitle()), setupViewPortForSVG(O, 8, CSS_DIAGRAM, T?.useMaxWidth ?? !0);
	}, "draw"),
	getDir
}, nodeDb = /* @__PURE__ */ new Map(), graphItemCount = 0;
function stateDomId(e = "", b = 0, x = "", S = DOMID_TYPE_SPACER) {
	return `${DOMID_STATE}-${e}${x !== null && x.length > 0 ? `${S}${x}` : ""}-${b}`;
}
__name(stateDomId, "stateDomId");
var setupDoc = /* @__PURE__ */ __name((e, x, S, C, w, T, D, O) => {
	log.trace("items", x), x.forEach((b) => {
		switch (b.stmt) {
			case STMT_STATE:
				dataFetcher(e, b, S, C, w, T, D, O);
				break;
			case DEFAULT_STATE_TYPE:
				dataFetcher(e, b, S, C, w, T, D, O);
				break;
			case STMT_RELATION:
				{
					dataFetcher(e, b.state1, S, C, w, T, D, O), dataFetcher(e, b.state2, S, C, w, T, D, O);
					let x = D === "neo", A = {
						id: "edge" + graphItemCount,
						start: b.state1.id,
						end: b.state2.id,
						arrowhead: "normal",
						arrowTypeEnd: x ? "arrow_barb_neo" : "arrow_barb",
						style: G_EDGE_STYLE,
						labelStyle: "",
						label: common_default.sanitizeText(b.description ?? "", getConfig2()),
						arrowheadStyle: G_EDGE_ARROWHEADSTYLE,
						labelpos: G_EDGE_LABELPOS,
						labelType: G_EDGE_LABELTYPE,
						thickness: G_EDGE_THICKNESS,
						classes: CSS_EDGE,
						look: D
					};
					w.push(A), graphItemCount++;
				}
				break;
		}
	});
}, "setupDoc"), getDir2 = /* @__PURE__ */ __name((e, b = DEFAULT_NESTED_DOC_DIR) => {
	let x = b;
	if (e.doc) for (let b of e.doc) b.stmt === "dir" && (x = b.value);
	return x;
}, "getDir");
function insertOrUpdateNode(e, b, x) {
	if (!b.id || b.id === "</join></fork>" || b.id === "</choice>") return;
	b.cssClasses && (Array.isArray(b.cssCompiledStyles) || (b.cssCompiledStyles = []), b.cssClasses.split(" ").forEach((e) => {
		let S = x.get(e);
		S && (b.cssCompiledStyles = [...b.cssCompiledStyles ?? [], ...S.styles]);
	}));
	let S = e.find((e) => e.id === b.id);
	S ? Object.assign(S, b) : e.push(b);
}
__name(insertOrUpdateNode, "insertOrUpdateNode");
function getClassesFromDbInfo(e) {
	return e?.classes?.join(" ") ?? "";
}
__name(getClassesFromDbInfo, "getClassesFromDbInfo");
function getStylesFromDbInfo(e) {
	return e?.styles ?? [];
}
__name(getStylesFromDbInfo, "getStylesFromDbInfo");
var dataFetcher = /* @__PURE__ */ __name((e, x, S, C, w, T, D, O) => {
	let A = x.id, j = S.get(A), M = getClassesFromDbInfo(j), N = getStylesFromDbInfo(j), P = getConfig2();
	if (log.info("dataFetcher parsedItem", x, j, N), A !== "root") {
		let S = SHAPE_STATE;
		x.start === !0 ? S = SHAPE_START : x.start === !1 && (S = SHAPE_END), x.type !== DEFAULT_STATE_TYPE && (S = x.type), nodeDb.get(A) || nodeDb.set(A, {
			id: A,
			shape: S,
			description: common_default.sanitizeText(A, P),
			cssClasses: `${M} ${CSS_DIAGRAM_STATE}`,
			cssStyles: N
		});
		let k = nodeDb.get(A);
		x.description && (Array.isArray(k.description) ? (k.shape = SHAPE_STATE_WITH_DESC, k.description.push(x.description)) : k.description?.length && k.description.length > 0 ? (k.shape = SHAPE_STATE_WITH_DESC, k.description === A ? k.description = [x.description] : k.description = [k.description, x.description]) : (k.shape = SHAPE_STATE, k.description = x.description), k.description = common_default.sanitizeTextOrArray(k.description, P)), k.description?.length === 1 && k.shape === SHAPE_STATE_WITH_DESC && (k.type === "group" ? k.shape = SHAPE_GROUP : k.shape = SHAPE_STATE), !k.type && x.doc && (log.info("Setting cluster for XCX", A, getDir2(x)), k.type = "group", k.isGroup = !0, k.dir = getDir2(x), k.shape = x.type === DIVIDER_TYPE ? SHAPE_DIVIDER : SHAPE_GROUP, k.cssClasses = `${k.cssClasses} ${CSS_DIAGRAM_CLUSTER} ${T ? CSS_DIAGRAM_CLUSTER_ALT : ""}`);
		let j = {
			labelStyle: "",
			shape: k.shape,
			label: k.description,
			cssClasses: k.cssClasses,
			cssCompiledStyles: [],
			cssStyles: k.cssStyles,
			id: A,
			dir: k.dir,
			domId: stateDomId(A, graphItemCount),
			type: k.type,
			isGroup: k.type === "group",
			padding: 8,
			rx: 10,
			ry: 10,
			look: D,
			labelType: "markdown"
		};
		if (j.shape === SHAPE_DIVIDER && (j.label = ""), e && e.id !== "root" && (log.trace("Setting node ", A, " to be child of its parent ", e.id), j.parentId = e.id), j.centerLabel = !0, x.note) {
			let e = {
				labelStyle: "",
				shape: SHAPE_NOTE,
				label: x.note.text,
				labelType: "markdown",
				cssClasses: CSS_DIAGRAM_NOTE,
				cssStyles: [],
				cssCompiledStyles: [],
				id: A + NOTE_ID + "-" + graphItemCount,
				domId: stateDomId(A, graphItemCount, NOTE),
				type: k.type,
				isGroup: k.type === "group",
				padding: P.flowchart?.padding,
				look: D,
				position: x.note.position
			}, b = A + PARENT_ID, S = {
				labelStyle: "",
				shape: SHAPE_NOTEGROUP,
				label: x.note.text,
				cssClasses: k.cssClasses,
				cssStyles: [],
				id: A + PARENT_ID,
				domId: stateDomId(A, graphItemCount, PARENT),
				type: "group",
				isGroup: !0,
				padding: 16,
				look: D,
				position: x.note.position
			};
			graphItemCount++, S.id = b, e.parentId = b, insertOrUpdateNode(C, S, O), insertOrUpdateNode(C, e, O), insertOrUpdateNode(C, j, O);
			let T = A, E = e.id;
			x.note.position === "left of" && (T = e.id, E = A), w.push({
				id: T + "-" + E,
				start: T,
				end: E,
				arrowhead: "none",
				arrowTypeEnd: "",
				style: G_EDGE_STYLE,
				labelStyle: "",
				classes: CSS_EDGE_NOTE_EDGE,
				arrowheadStyle: G_EDGE_ARROWHEADSTYLE,
				labelpos: G_EDGE_LABELPOS,
				labelType: G_EDGE_LABELTYPE,
				thickness: G_EDGE_THICKNESS,
				look: D
			});
		} else insertOrUpdateNode(C, j, O);
	}
	x.doc && (log.trace("Adding nodes children "), setupDoc(x, x.doc, S, C, w, !T, D, O));
}, "dataFetcher"), reset = /* @__PURE__ */ __name(() => {
	nodeDb.clear(), graphItemCount = 0;
}, "reset"), CONSTANTS = {
	START_NODE: "[*]",
	START_TYPE: "start",
	END_NODE: "[*]",
	END_TYPE: "end",
	COLOR_KEYWORD: "color",
	FILL_KEYWORD: "fill",
	BG_FILL: "bgFill",
	STYLECLASS_SEP: ","
}, newClassesList = /* @__PURE__ */ __name(() => /* @__PURE__ */ new Map(), "newClassesList"), newDoc = /* @__PURE__ */ __name(() => ({
	relations: [],
	states: /* @__PURE__ */ new Map(),
	documents: {}
}), "newDoc"), clone = /* @__PURE__ */ __name((e) => JSON.parse(JSON.stringify(e)), "clone"), StateDB = class {
	constructor(e) {
		this.version = e, this.nodes = [], this.edges = [], this.rootDoc = [], this.classes = newClassesList(), this.documents = { root: newDoc() }, this.currentDocument = this.documents.root, this.startEndCount = 0, this.dividerCnt = 0, this.links = /* @__PURE__ */ new Map(), this.funs = [], this.getAccTitle = getAccTitle, this.setAccTitle = setAccTitle, this.getAccDescription = getAccDescription, this.setAccDescription = setAccDescription, this.setDiagramTitle = setDiagramTitle, this.getDiagramTitle = getDiagramTitle, this.clear(), this.setRootDoc = this.setRootDoc.bind(this), this.getDividerId = this.getDividerId.bind(this), this.setDirection = this.setDirection.bind(this), this.trimColon = this.trimColon.bind(this), this.bindFunctions = this.bindFunctions.bind(this);
	}
	static #e = __name(this, "StateDB");
	static #t = this.relationType = {
		AGGREGATION: 0,
		EXTENSION: 1,
		COMPOSITION: 2,
		DEPENDENCY: 3
	};
	extract(e) {
		this.clear(!0);
		for (let b of Array.isArray(e) ? e : e.doc) switch (b.stmt) {
			case STMT_STATE:
				this.addState(b.id.trim(), b.type, b.doc, b.description, b.note);
				break;
			case STMT_RELATION:
				this.addRelation(b.state1, b.state2, b.description);
				break;
			case STMT_CLASSDEF:
				this.addStyleClass(b.id.trim(), b.classes);
				break;
			case STMT_STYLEDEF:
				this.handleStyleDef(b);
				break;
			case STMT_APPLYCLASS:
				this.setCssClass(b.id.trim(), b.styleClass);
				break;
			case "click":
				this.addLink(b.id, b.url, b.tooltip);
				break;
		}
		let b = this.getStates(), x = getConfig2();
		reset(), dataFetcher(void 0, this.getRootDocV2(), b, this.nodes, this.edges, !0, x.look, this.classes);
		for (let e of this.nodes) if (Array.isArray(e.label)) {
			if (e.description = e.label.slice(1), e.isGroup && e.description.length > 0) throw Error(`Group nodes can only have label. Remove the additional description for node [${e.id}]`);
			e.label = e.label[0];
		}
	}
	handleStyleDef(e) {
		let b = e.id.trim().split(","), x = e.styleClass.split(",");
		for (let e of b) {
			let b = this.getState(e);
			if (!b) {
				let x = e.trim();
				this.addState(x), b = this.getState(x);
			}
			b && (b.styles = x.map((e) => e.replace(/;/g, "")?.trim()));
		}
	}
	setRootDoc(e) {
		log.info("Setting root doc", e), this.rootDoc = e, this.version === 1 ? this.extract(e) : this.extract(this.getRootDocV2());
	}
	docTranslator(e, b, x) {
		if (b.stmt === STMT_RELATION) {
			this.docTranslator(e, b.state1, !0), this.docTranslator(e, b.state2, !1);
			return;
		}
		if (b.stmt === STMT_STATE && (b.id === CONSTANTS.START_NODE ? (b.id = e.id + (x ? "_start" : "_end"), b.start = x) : b.id = b.id.trim()), b.stmt !== STMT_ROOT && b.stmt !== STMT_STATE || !b.doc) return;
		let S = [], C = [];
		for (let e of b.doc) if (e.type === DIVIDER_TYPE) {
			let b = clone(e);
			b.doc = clone(C), S.push(b), C = [];
		} else C.push(e);
		if (S.length > 0 && C.length > 0) {
			let e = {
				stmt: STMT_STATE,
				id: generateId(),
				type: "divider",
				doc: clone(C)
			};
			S.push(clone(e)), b.doc = S;
		}
		b.doc.forEach((e) => this.docTranslator(b, e, !0));
	}
	getRootDocV2() {
		return this.docTranslator({
			id: STMT_ROOT,
			stmt: STMT_ROOT
		}, {
			id: STMT_ROOT,
			stmt: STMT_ROOT,
			doc: this.rootDoc
		}, !0), {
			id: STMT_ROOT,
			doc: this.rootDoc
		};
	}
	addState(e, x = DEFAULT_STATE_TYPE, S = void 0, C = void 0, w = void 0, T = void 0, D = void 0, O = void 0) {
		let A = e?.trim();
		if (!this.currentDocument.states.has(A)) log.info("Adding state ", A, C), this.currentDocument.states.set(A, {
			stmt: STMT_STATE,
			id: A,
			descriptions: [],
			type: x,
			doc: S,
			note: w,
			classes: [],
			styles: [],
			textStyles: []
		});
		else {
			let e = this.currentDocument.states.get(A);
			if (!e) throw Error(`State not found: ${A}`);
			e.doc ||= S, e.type ||= x;
		}
		if (C && (log.info("Setting state description", A, C), (Array.isArray(C) ? C : [C]).forEach((e) => this.addDescription(A, e.trim()))), w) {
			let e = this.currentDocument.states.get(A);
			if (!e) throw Error(`State not found: ${A}`);
			e.note = w, e.note.text = common_default.sanitizeText(e.note.text, getConfig2());
		}
		T && (log.info("Setting state classes", A, T), (Array.isArray(T) ? T : [T]).forEach((e) => this.setCssClass(A, e.trim()))), D && (log.info("Setting state styles", A, D), (Array.isArray(D) ? D : [D]).forEach((e) => this.setStyle(A, e.trim()))), O && (log.info("Setting state styles", A, D), (Array.isArray(O) ? O : [O]).forEach((e) => this.setTextStyle(A, e.trim())));
	}
	clear(e) {
		this.nodes = [], this.edges = [], this.funs = [this.setupToolTips.bind(this)], this.documents = { root: newDoc() }, this.currentDocument = this.documents.root, this.startEndCount = 0, this.classes = newClassesList(), e || (this.links = /* @__PURE__ */ new Map(), clear());
	}
	getState(e) {
		return this.currentDocument.states.get(e);
	}
	getStates() {
		return this.currentDocument.states;
	}
	logDocuments() {
		log.info("Documents = ", this.documents);
	}
	getRelations() {
		return this.currentDocument.relations;
	}
	addLink(e, x, S) {
		this.links.set(e, {
			url: x,
			tooltip: S
		}), log.warn("Adding link", e, x, S);
	}
	getLinks() {
		return this.links;
	}
	startIdIfNeeded(e = "") {
		return e === CONSTANTS.START_NODE ? (this.startEndCount++, `${CONSTANTS.START_TYPE}${this.startEndCount}`) : e;
	}
	startTypeIfNeeded(e = "", b = DEFAULT_STATE_TYPE) {
		return e === CONSTANTS.START_NODE ? CONSTANTS.START_TYPE : b;
	}
	endIdIfNeeded(e = "") {
		return e === CONSTANTS.END_NODE ? (this.startEndCount++, `${CONSTANTS.END_TYPE}${this.startEndCount}`) : e;
	}
	endTypeIfNeeded(e = "", b = DEFAULT_STATE_TYPE) {
		return e === CONSTANTS.END_NODE ? CONSTANTS.END_TYPE : b;
	}
	addRelationObjs(e, b, x = "") {
		let S = this.startIdIfNeeded(e.id.trim()), C = this.startTypeIfNeeded(e.id.trim(), e.type), w = this.startIdIfNeeded(b.id.trim()), T = this.startTypeIfNeeded(b.id.trim(), b.type);
		this.addState(S, C, e.doc, e.description, e.note, e.classes, e.styles, e.textStyles), this.addState(w, T, b.doc, b.description, b.note, b.classes, b.styles, b.textStyles), this.currentDocument.relations.push({
			id1: S,
			id2: w,
			relationTitle: common_default.sanitizeText(x, getConfig2())
		});
	}
	addRelation(e, b, x) {
		if (typeof e == "object" && typeof b == "object") this.addRelationObjs(e, b, x);
		else if (typeof e == "string" && typeof b == "string") {
			let S = this.startIdIfNeeded(e.trim()), C = this.startTypeIfNeeded(e), w = this.endIdIfNeeded(b.trim()), T = this.endTypeIfNeeded(b);
			this.addState(S, C), this.addState(w, T), this.currentDocument.relations.push({
				id1: S,
				id2: w,
				relationTitle: x ? common_default.sanitizeText(x, getConfig2()) : void 0
			});
		}
	}
	addDescription(e, b) {
		let x = this.currentDocument.states.get(e), S = b.startsWith(":") ? b.replace(":", "").trim() : b;
		x?.descriptions?.push(common_default.sanitizeText(S, getConfig2()));
	}
	cleanupLabel(e) {
		return e.startsWith(":") ? e.slice(2).trim() : e.trim();
	}
	getDividerId() {
		return this.dividerCnt++, `divider-id-${this.dividerCnt}`;
	}
	addStyleClass(e, b = "") {
		this.classes.has(e) || this.classes.set(e, {
			id: e,
			styles: [],
			textStyles: []
		});
		let x = this.classes.get(e);
		b && x && b.split(CONSTANTS.STYLECLASS_SEP).forEach((e) => {
			let b = e.replace(/([^;]*);/, "$1").trim();
			if (RegExp(CONSTANTS.COLOR_KEYWORD).exec(e)) {
				let e = b.replace(CONSTANTS.FILL_KEYWORD, CONSTANTS.BG_FILL).replace(CONSTANTS.COLOR_KEYWORD, CONSTANTS.FILL_KEYWORD);
				x.textStyles.push(e);
			}
			x.styles.push(b);
		});
	}
	getClasses() {
		return this.classes;
	}
	setupToolTips(e) {
		let b = createTooltip();
		select_default(e).select("svg").selectAll("g.node, g.rough-node").on("mouseover", (e) => {
			let S = select_default(e.currentTarget), C = S.attr("title");
			if (C === null) return;
			let w = e.currentTarget?.getBoundingClientRect();
			b.transition().duration(200).style("opacity", ".9"), b.style("left", window.scrollX + w.left + (w.right - w.left) / 2 + "px").style("top", window.scrollY + w.bottom + "px"), b.html(purify.sanitize(C)), S.classed("hover", !0);
		}).on("mouseout", (e) => {
			b.transition().duration(500).style("opacity", 0), select_default(e.currentTarget).classed("hover", !1);
		});
	}
	setCssClass(e, b) {
		e.split(",").forEach((e) => {
			let x = this.getState(e);
			if (!x) {
				let b = e.trim();
				this.addState(b), x = this.getState(b);
			}
			x?.classes?.push(b);
		});
	}
	setStyle(e, b) {
		this.getState(e)?.styles?.push(b);
	}
	setTextStyle(e, b) {
		this.getState(e)?.textStyles?.push(b);
	}
	bindFunctions(e) {
		this.funs.forEach((b) => {
			b(e);
		});
	}
	getDirectionStatement() {
		return this.rootDoc.find((e) => e.stmt === STMT_DIRECTION);
	}
	getDirection() {
		return this.getDirectionStatement()?.value ?? DEFAULT_DIAGRAM_DIRECTION;
	}
	setDirection(e) {
		let b = this.getDirectionStatement();
		b ? b.value = e : this.rootDoc.unshift({
			stmt: STMT_DIRECTION,
			value: e
		});
	}
	trimColon(e) {
		return e.startsWith(":") ? e.slice(1).trim() : e.trim();
	}
	getData() {
		let e = getConfig2();
		return {
			nodes: this.nodes,
			edges: this.edges,
			other: {},
			config: e,
			direction: getDir(this.getRootDocV2())
		};
	}
	getConfig() {
		return getConfig2().state;
	}
}, styles_default = /* @__PURE__ */ __name((e) => `
defs [id$="-barbEnd"] {
    fill: ${e.transitionColor};
    stroke: ${e.transitionColor};
  }
g.stateGroup text {
  fill: ${e.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${e.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${e.stateLabelColor};
}

g.stateGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.stateGroup line {
  stroke: ${e.lineColor};
  stroke-width: ${e.strokeWidth || 1};
}

.transition {
  stroke: ${e.transitionColor};
  stroke-width: ${e.strokeWidth || 1};
  fill: none;
}

.stateGroup .composit {
  fill: ${e.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${e.noteBorderColor};
  fill: ${e.noteBkgColor};

  text {
    fill: ${e.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${e.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${e.edgeLabelBackground};
  p {
    background-color: ${e.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${e.edgeLabelBackground};
    fill: ${e.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${e.transitionLabelColor || e.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${e.transitionLabelColor || e.tertiaryTextColor};
}

.stateLabel text {
  fill: ${e.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node .fork-join {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node circle.state-end {
  fill: ${e.innerEndBackground};
  stroke: ${e.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${e.compositeBackground || e.background};
  // stroke: ${e.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${e.stateBkg || e.mainBkg};
  stroke: ${e.stateBorder || e.nodeBorder};
  stroke-width: ${e.strokeWidth || 1}px;
}
.node polygon {
  fill: ${e.mainBkg};
  stroke: ${e.stateBorder || e.nodeBorder};;
  stroke-width: ${e.strokeWidth || 1}px;
}
[id$="-barbEnd"] {
  fill: ${e.lineColor};
}

.statediagram-cluster rect {
  fill: ${e.compositeTitleBackground};
  stroke: ${e.stateBorder || e.nodeBorder};
  stroke-width: ${e.strokeWidth || 1}px;
}

.cluster-label, .nodeLabel {
  color: ${e.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${e.stateBorder || e.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${e.compositeBackground || e.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${e.altBackground ? e.altBackground : "#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${e.altBackground ? e.altBackground : "#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${e.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${e.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${e.noteTextColor};
}

[id$="-dependencyStart"], [id$="-dependencyEnd"] {
  fill: ${e.lineColor};
  stroke: ${e.lineColor};
  stroke-width: ${e.strokeWidth || 1};
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}

[data-look="neo"].statediagram-cluster rect {
  fill: ${e.mainBkg};
  stroke: ${e.useGradient ? "url(" + e.svgId + "-gradient)" : e.stateBorder || e.nodeBorder};
  stroke-width: ${e.strokeWidth ?? 1};
}
[data-look="neo"].statediagram-cluster rect.outer {
  rx: ${e.radius}px;
  ry: ${e.radius}px;
  filter: ${e.dropShadow ? e.dropShadow.replace("url(#drop-shadow)", `url(${e.svgId}-drop-shadow)`) : "none"}
}
`, "getStyles");
export { styles_default as i, stateDiagram_default as n, stateRenderer_v3_unified_default as r, StateDB as t };
