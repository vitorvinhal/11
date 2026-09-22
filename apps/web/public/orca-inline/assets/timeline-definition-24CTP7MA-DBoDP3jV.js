import { n as __name, t as __export } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { $ as darken_default, J as setupGraphViewbox, a as clear, b as getConfig, et as lighten_default, nt as is_dark_default, o as commonDb_exports, x as getConfig2 } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { t as arc_default } from "./arc-DQn371Pg.js";
import { m as parseFontSize } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
var parser = (function() {
	var b = /* @__PURE__ */ __name(function(e, b, x, S) {
		for (x ||= {}, S = e.length; S--; x[e[S]] = b);
		return x;
	}, "o"), x = [
		6,
		11,
		13,
		14,
		15,
		17,
		19,
		20,
		23,
		24
	], S = [1, 12], C = [1, 13], w = [1, 14], T = [1, 15], E = [1, 16], D = [1, 19], O = [1, 20], k = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			timeline_header: 4,
			document: 5,
			EOF: 6,
			timeline: 7,
			timeline_lr: 8,
			timeline_td: 9,
			line: 10,
			SPACE: 11,
			statement: 12,
			NEWLINE: 13,
			title: 14,
			acc_title: 15,
			acc_title_value: 16,
			acc_descr: 17,
			acc_descr_value: 18,
			acc_descr_multiline_value: 19,
			section: 20,
			period_statement: 21,
			event_statement: 22,
			period: 23,
			event: 24,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "EOF",
			7: "timeline",
			8: "timeline_lr",
			9: "timeline_td",
			11: "SPACE",
			13: "NEWLINE",
			14: "title",
			15: "acc_title",
			16: "acc_title_value",
			17: "acc_descr",
			18: "acc_descr_value",
			19: "acc_descr_multiline_value",
			20: "section",
			23: "period",
			24: "event"
		},
		productions_: [
			0,
			[3, 3],
			[4, 1],
			[4, 1],
			[4, 1],
			[5, 0],
			[5, 2],
			[10, 2],
			[10, 1],
			[10, 1],
			[10, 1],
			[12, 1],
			[12, 2],
			[12, 2],
			[12, 1],
			[12, 1],
			[12, 1],
			[12, 1],
			[21, 1],
			[22, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, b, x, S, C, w, T) {
			var E = w.length - 1;
			switch (C) {
				case 1: return w[E - 1];
				case 3:
					S.setDirection("LR");
					break;
				case 4:
					S.setDirection("TD");
					break;
				case 5:
					this.$ = [];
					break;
				case 6:
					w[E - 1].push(w[E]), this.$ = w[E - 1];
					break;
				case 7:
				case 8:
					this.$ = w[E];
					break;
				case 9:
				case 10:
					this.$ = [];
					break;
				case 11:
					S.getCommonDb().setDiagramTitle(w[E].substr(6)), this.$ = w[E].substr(6);
					break;
				case 12:
					this.$ = w[E].trim(), S.getCommonDb().setAccTitle(this.$);
					break;
				case 13:
				case 14:
					this.$ = w[E].trim(), S.getCommonDb().setAccDescription(this.$);
					break;
				case 15:
					S.addSection(w[E].substr(8)), this.$ = w[E].substr(8);
					break;
				case 18:
					S.addTask(w[E], 0, ""), this.$ = w[E];
					break;
				case 19:
					S.addEvent(w[E].substr(2)), this.$ = w[E];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				7: [1, 3],
				8: [1, 4],
				9: [1, 5]
			},
			{ 1: [3] },
			b(x, [2, 5], { 5: 6 }),
			b(x, [2, 2]),
			b(x, [2, 3]),
			b(x, [2, 4]),
			{
				6: [1, 7],
				10: 8,
				11: [1, 9],
				12: 10,
				13: [1, 11],
				14: S,
				15: C,
				17: w,
				19: T,
				20: E,
				21: 17,
				22: 18,
				23: D,
				24: O
			},
			b(x, [2, 10], { 1: [2, 1] }),
			b(x, [2, 6]),
			{
				12: 21,
				14: S,
				15: C,
				17: w,
				19: T,
				20: E,
				21: 17,
				22: 18,
				23: D,
				24: O
			},
			b(x, [2, 8]),
			b(x, [2, 9]),
			b(x, [2, 11]),
			{ 16: [1, 22] },
			{ 18: [1, 23] },
			b(x, [2, 14]),
			b(x, [2, 15]),
			b(x, [2, 16]),
			b(x, [2, 17]),
			b(x, [2, 18]),
			b(x, [2, 19]),
			b(x, [2, 7]),
			b(x, [2, 12]),
			b(x, [2, 13])
		],
		defaultActions: {},
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
	k.lexer = /* @__PURE__ */ (function() {
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
			performAction: /* @__PURE__ */ __name(function(e, b, x, S) {
				switch (x) {
					case 0: break;
					case 1: break;
					case 2: return 13;
					case 3: break;
					case 4: break;
					case 5: return 8;
					case 6: return 9;
					case 7: return 7;
					case 8: return 14;
					case 9: return this.begin("acc_title"), 15;
					case 10: return this.popState(), "acc_title_value";
					case 11: return this.begin("acc_descr"), 17;
					case 12: return this.popState(), "acc_descr_value";
					case 13:
						this.begin("acc_descr_multiline");
						break;
					case 14:
						this.popState();
						break;
					case 15: return "acc_descr_multiline_value";
					case 16: return 20;
					case 17: return 24;
					case 18: return 23;
					case 19: return 6;
					case 20: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:#[^\n]*)/i,
				/^(?:timeline[ \t]+LR\b)/i,
				/^(?:timeline[ \t]+TD\b)/i,
				/^(?:timeline\b)/i,
				/^(?:title\s[^\n]+)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:section\s[^:\n]+)/i,
				/^(?::\s(?:[^:\n]|:(?!\s))+)/i,
				/^(?:[^#:\n]+)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [14, 15],
					inclusive: !1
				},
				acc_descr: {
					rules: [12],
					inclusive: !1
				},
				acc_title: {
					rules: [10],
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
						13,
						16,
						17,
						18,
						19,
						20
					],
					inclusive: !0
				}
			}
		};
	})();
	function A() {
		this.yy = {};
	}
	return __name(A, "Parser"), A.prototype = k, k.Parser = A, new A();
})();
parser.parser = parser;
var timeline_default = parser, timelineDb_exports = {};
__export(timelineDb_exports, {
	addEvent: () => addEvent,
	addSection: () => addSection,
	addTask: () => addTask,
	addTaskOrg: () => addTaskOrg,
	clear: () => clear2,
	default: () => timelineDb_default,
	getCommonDb: () => getCommonDb,
	getDirection: () => getDirection,
	getSections: () => getSections,
	getTasks: () => getTasks,
	setDirection: () => setDirection
});
var currentSection = "", currentTaskId = 0, direction = "LR", sections = [], tasks = [], rawTasks = [], getCommonDb = /* @__PURE__ */ __name(() => commonDb_exports, "getCommonDb"), clear2 = /* @__PURE__ */ __name(function() {
	sections.length = 0, tasks.length = 0, currentSection = "", rawTasks.length = 0, direction = "LR", clear();
}, "clear"), setDirection = /* @__PURE__ */ __name(function(e) {
	direction = e;
}, "setDirection"), getDirection = /* @__PURE__ */ __name(function() {
	return direction;
}, "getDirection"), addSection = /* @__PURE__ */ __name(function(e) {
	currentSection = e, sections.push(e);
}, "addSection"), getSections = /* @__PURE__ */ __name(function() {
	return sections;
}, "getSections"), getTasks = /* @__PURE__ */ __name(function() {
	let e = compileTasks(), b = 0;
	for (; !e && b < 100;) e = compileTasks(), b++;
	return tasks.push(...rawTasks), tasks;
}, "getTasks"), addTask = /* @__PURE__ */ __name(function(e, b, x) {
	let S = {
		id: currentTaskId++,
		section: currentSection,
		type: currentSection,
		task: e,
		score: b || 0,
		events: x ? [x] : []
	};
	rawTasks.push(S);
}, "addTask"), addEvent = /* @__PURE__ */ __name(function(e) {
	rawTasks.find((e) => e.id === currentTaskId - 1).events.push(e);
}, "addEvent"), addTaskOrg = /* @__PURE__ */ __name(function(e) {
	let b = {
		section: currentSection,
		type: currentSection,
		description: e,
		task: e,
		classes: []
	};
	tasks.push(b);
}, "addTaskOrg"), compileTasks = /* @__PURE__ */ __name(function() {
	let b = /* @__PURE__ */ __name(function(e) {
		return rawTasks[e].processed;
	}, "compileTask"), x = !0;
	for (let [e, S] of rawTasks.entries()) b(e), x &&= S.processed;
	return x;
}, "compileTasks"), timelineDb_default = {
	clear: clear2,
	getCommonDb,
	getDirection,
	setDirection,
	addSection,
	getSections,
	getTasks,
	addTask,
	addTaskOrg,
	addEvent
}, nodeCount = 0, drawRect = /* @__PURE__ */ __name(function(e, b) {
	let x = e.append("rect");
	return x.attr("x", b.x), x.attr("y", b.y), x.attr("fill", b.fill), x.attr("stroke", b.stroke), x.attr("width", b.width), x.attr("height", b.height), x.attr("rx", b.rx), x.attr("ry", b.ry), b.class !== void 0 && x.attr("class", b.class), x;
}, "drawRect"), drawFace = /* @__PURE__ */ __name(function(b, x) {
	let S = b.append("circle").attr("cx", x.cx).attr("cy", x.cy).attr("class", "face").attr("r", 15).attr("stroke-width", 2).attr("overflow", "visible"), C = b.append("g");
	C.append("circle").attr("cx", x.cx - 15 / 3).attr("cy", x.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666"), C.append("circle").attr("cx", x.cx + 15 / 3).attr("cy", x.cy - 15 / 3).attr("r", 1.5).attr("stroke-width", 2).attr("fill", "#666").attr("stroke", "#666");
	function w(e) {
		let b = arc_default().startAngle(Math.PI / 2).endAngle(3 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
		e.append("path").attr("class", "mouth").attr("d", b).attr("transform", "translate(" + x.cx + "," + (x.cy + 2) + ")");
	}
	__name(w, "smile");
	function T(e) {
		let b = arc_default().startAngle(3 * Math.PI / 2).endAngle(5 * (Math.PI / 2)).innerRadius(15 / 2).outerRadius(15 / 2.2);
		e.append("path").attr("class", "mouth").attr("d", b).attr("transform", "translate(" + x.cx + "," + (x.cy + 7) + ")");
	}
	__name(T, "sad");
	function E(e) {
		e.append("line").attr("class", "mouth").attr("stroke", 2).attr("x1", x.cx - 5).attr("y1", x.cy + 7).attr("x2", x.cx + 5).attr("y2", x.cy + 7).attr("class", "mouth").attr("stroke-width", "1px").attr("stroke", "#666");
	}
	return __name(E, "ambivalent"), x.score > 3 ? w(C) : x.score < 3 ? T(C) : E(C), S;
}, "drawFace"), drawCircle = /* @__PURE__ */ __name(function(e, b) {
	let x = e.append("circle");
	return x.attr("cx", b.cx), x.attr("cy", b.cy), x.attr("class", "actor-" + b.pos), x.attr("fill", b.fill), x.attr("stroke", b.stroke), x.attr("r", b.r), x.class !== void 0 && x.attr("class", x.class), b.title !== void 0 && x.append("title").text(b.title), x;
}, "drawCircle"), drawText = /* @__PURE__ */ __name(function(e, b) {
	let x = b.text.replace(/<br\s*\/?>/gi, " "), S = e.append("text");
	S.attr("x", b.x), S.attr("y", b.y), S.attr("class", "legend"), S.style("text-anchor", b.anchor), b.class !== void 0 && S.attr("class", b.class);
	let C = S.append("tspan");
	return C.attr("x", b.x + b.textMargin * 2), C.text(x), S;
}, "drawText"), drawLabel = /* @__PURE__ */ __name(function(b, x) {
	function S(e, b, x, S, C) {
		return e + "," + b + " " + (e + x) + "," + b + " " + (e + x) + "," + (b + S - C) + " " + (e + x - C * 1.2) + "," + (b + S) + " " + e + "," + (b + S);
	}
	__name(S, "genPoints");
	let C = b.append("polygon");
	C.attr("points", S(x.x, x.y, 50, 20, 7)), C.attr("class", "labelBox"), x.y += x.labelMargin, x.x += .5 * x.labelMargin, drawText(b, x);
}, "drawLabel"), drawSection = /* @__PURE__ */ __name(function(e, b, x) {
	let S = e.append("g"), C = getNoteRect();
	C.x = b.x, C.y = b.y, C.fill = b.fill, C.width = x.width, C.height = x.height, C.class = "journey-section section-type-" + b.num, C.rx = 3, C.ry = 3, drawRect(S, C), _drawTextCandidateFunc(x)(b.text, S, C.x, C.y, C.width, C.height, { class: "journey-section section-type-" + b.num }, x, b.colour);
}, "drawSection"), taskCount = -1, drawTask = /* @__PURE__ */ __name(function(e, b, x, S) {
	let C = b.x + x.width / 2, w = e.append("g");
	taskCount++, w.append("line").attr("id", S + "-task" + taskCount).attr("x1", C).attr("y1", b.y).attr("x2", C).attr("y2", 450).attr("class", "task-line").attr("stroke-width", "1px").attr("stroke-dasharray", "4 2").attr("stroke", "#666"), drawFace(w, {
		cx: C,
		cy: 300 + (5 - b.score) * 30,
		score: b.score
	});
	let T = getNoteRect();
	T.x = b.x, T.y = b.y, T.fill = b.fill, T.width = x.width, T.height = x.height, T.class = "task task-type-" + b.num, T.rx = 3, T.ry = 3, drawRect(w, T), _drawTextCandidateFunc(x)(b.task, w, T.x, T.y, T.width, T.height, { class: "task" }, x, b.colour);
}, "drawTask"), drawBackgroundRect = /* @__PURE__ */ __name(function(e, b) {
	drawRect(e, {
		x: b.startx,
		y: b.starty,
		width: b.stopx - b.startx,
		height: b.stopy - b.starty,
		fill: b.fill,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), getTextObj = /* @__PURE__ */ __name(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		"text-anchor": "start",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0
	};
}, "getTextObj"), getNoteRect = /* @__PURE__ */ __name(function() {
	return {
		x: 0,
		y: 0,
		width: 100,
		anchor: "start",
		height: 100,
		rx: 0,
		ry: 0
	};
}, "getNoteRect"), _drawTextCandidateFunc = /* @__PURE__ */ (function() {
	function b(e, b, x, S, w, T, E, D) {
		C(b.append("text").attr("x", x + w / 2).attr("y", S + T / 2 + 5).style("font-color", D).style("text-anchor", "middle").text(e), E);
	}
	__name(b, "byText");
	function x(e, b, x, S, w, T, E, D, O) {
		let { taskFontSize: k, taskFontFamily: A } = D, j = e.split(/<br\s*\/?>/gi);
		for (let e = 0; e < j.length; e++) {
			let D = e * k - k * (j.length - 1) / 2, M = b.append("text").attr("x", x + w / 2).attr("y", S).attr("fill", O).style("text-anchor", "middle").style("font-size", k).style("font-family", A);
			M.append("tspan").attr("x", x + w / 2).attr("dy", D).text(j[e]), M.attr("y", S + T / 2).attr("dominant-baseline", "central").attr("alignment-baseline", "central"), C(M, E);
		}
	}
	__name(x, "byTspan");
	function S(e, b, S, w, T, E, D, O) {
		let k = b.append("switch"), A = k.append("foreignObject").attr("x", S).attr("y", w).attr("width", T).attr("height", E).attr("position", "fixed").append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%");
		A.append("div").attr("class", "label").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").text(e), x(e, k, S, w, T, E, D, O), C(A, D);
	}
	__name(S, "byFo");
	function C(e, b) {
		for (let x in b) x in b && e.attr(x, b[x]);
	}
	return __name(C, "_setTextAttrs"), function(e) {
		return e.textPlacement === "fo" ? S : e.textPlacement === "old" ? b : x;
	};
})(), initGraphics = /* @__PURE__ */ __name(function(e, b) {
	nodeCount = 0, taskCount = -1, e.append("defs").append("marker").attr("id", b + "-arrowhead").attr("refX", 5).attr("refY", 2).attr("markerWidth", 6).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0,0 V 4 L6,2 Z");
}, "initGraphics");
function wrap(e, b) {
	e.each(function() {
		var e = select_default(this), x = e.text().split(/(\s+|<br>)/).reverse(), C, w = [], T = 1.1, E = e.attr("y"), D = parseFloat(e.attr("dy")), O = e.text(null).append("tspan").attr("x", 0).attr("y", E).attr("dy", D + "em");
		for (let S = 0; S < x.length; S++) C = x[x.length - 1 - S], w.push(C), O.text(w.join(" ").trim()), (O.node().getComputedTextLength() > b || C === "<br>") && (w.pop(), O.text(w.join(" ").trim()), w = C === "<br>" ? [""] : [C], O = e.append("tspan").attr("x", 0).attr("y", E).attr("dy", T + "em").text(C));
	});
}
__name(wrap, "wrap");
var drawNode = /* @__PURE__ */ __name(function(e, b, x, C, w, T = !1) {
	let { theme: E, look: D } = C, O = E?.includes("redux"), k = x % (C?.themeVariables?.THEME_COLOR_LIMIT ?? 12) - 1, A = e.append("g");
	b.section = k, A.attr("class", (b.class ? b.class + " " : "") + "timeline-node " + ("section-" + k));
	let j = A.append("g"), M = A.append("g"), N = M.append("text").text(b.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(wrap, b.width).node().getBBox(), P = C.fontSize?.replace ? C.fontSize.replace("px", "") : C.fontSize;
	if (b.height = N.height + P * 1.1 * .5 + b.padding, b.height = Math.max(b.height, b.maxHeight), b.width += 2 * b.padding, M.attr("transform", "translate(" + b.width / 2 + ", " + b.padding / 2 + ")"), O && M.attr("transform", `translate(${b.width / 2}, ${T ? b.padding / 2 + 3 : b.padding})`), defaultBkg(j, b, k, w, C), D === "neo" && (A.attr("data-look", "neo"), O)) {
		let b = E.includes("dark"), x = select_default(e.node()?.ownerSVGElement ?? e.node()), C = x.attr("id") ?? "", w = C ? `${C}-drop-shadow` : "drop-shadow";
		if (x.select(`#${w}`).empty()) {
			let e = x.select("defs");
			(e.empty() ? x.append("defs") : e).append("filter").attr("id", w).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", b ? "0.2" : "0.06").attr("flood-color", b ? "#FFFFFF" : "#000000");
		}
	}
	return b;
}, "drawNode"), getVirtualNodeHeight = /* @__PURE__ */ __name(function(e, b, x) {
	let S = e.append("g"), C = S.append("text").text(b.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(wrap, b.width).node().getBBox(), w = x.fontSize?.replace ? x.fontSize.replace("px", "") : x.fontSize;
	return S.remove(), C.height + w * 1.1 * .5 + b.padding;
}, "getVirtualNodeHeight"), defaultBkg = /* @__PURE__ */ __name(function(e, b, x, S, C) {
	let { theme: w } = C, T = w?.includes("redux") ? 0 : 5, E = T > 0 ? `M0 ${b.height - 5} v${-b.height + 10} q0,-${T},${T},-${T} h${b.width - 10} q${T},0,${T},${T} v${b.height - 5} H0 Z` : `M0 ${b.height - 5} v${-(b.height - 5)} h${b.width} v${b.height} H0 Z`;
	e.append("path").attr("id", S + "-node-" + nodeCount++).attr("class", "node-bkg node-" + b.type).attr("d", E), w?.includes("redux") || e.append("line").attr("class", "node-line-" + x).attr("x1", 0).attr("y1", b.height).attr("x2", b.width).attr("y2", b.height);
}, "defaultBkg"), svgDraw_default = {
	drawRect,
	drawCircle,
	drawSection,
	drawText,
	drawLabel,
	drawTask,
	drawBackgroundRect,
	getTextObj,
	getNoteRect,
	initGraphics,
	drawNode,
	getVirtualNodeHeight
}, draw = /* @__PURE__ */ __name(function(e, b, C, T) {
	let E = getConfig2(), { look: D, theme: O, themeVariables: k } = E, { useGradient: j, gradientStart: M, gradientStop: N } = k, P = E.timeline?.leftMargin ?? 50;
	log.debug("timeline", T.db);
	let F = E.securityLevel, I;
	F === "sandbox" && (I = select_default("#i" + b));
	let L = select_default(F === "sandbox" ? I.nodes()[0].contentDocument.body : "body").select("#" + b);
	L.append("g");
	let R = T.db.getTasks(), z = T.db.getCommonDb().getDiagramTitle();
	log.debug("task", R), svgDraw_default.initGraphics(L, b);
	let B = T.db.getSections();
	log.debug("sections", B);
	let V = 0, H = 0, U = 0, W = 0, G = 50 + P, K = 50;
	W = 50;
	let q = 0, J = !0;
	B.forEach(function(e) {
		let b = {
			number: q,
			descr: e,
			section: q,
			width: 150,
			padding: 20,
			maxHeight: V
		}, S = svgDraw_default.getVirtualNodeHeight(L, b, E);
		log.debug("sectionHeight before draw", S), V = Math.max(V, S + 20);
	});
	let Y = 0, X = 0;
	log.debug("tasks.length", R.length);
	for (let [e, b] of R.entries()) {
		let S = {
			number: e,
			descr: b,
			section: b.section,
			width: 150,
			padding: 20,
			maxHeight: H
		}, C = svgDraw_default.getVirtualNodeHeight(L, S, E);
		log.debug("taskHeight before draw", C), H = Math.max(H, C + 20), Y = Math.max(Y, b.events.length);
		let w = 0;
		for (let e of b.events) {
			let x = {
				descr: e,
				section: b.section,
				number: b.section,
				width: 150,
				padding: 20,
				maxHeight: 50
			};
			w += svgDraw_default.getVirtualNodeHeight(L, x, E);
		}
		b.events.length > 0 && (w += (b.events.length - 1) * 10), X = Math.max(X, w);
	}
	log.debug("maxSectionHeight before draw", V), log.debug("maxTaskHeight before draw", H), B && B.length > 0 ? B.forEach((e) => {
		let S = R.filter((b) => b.section === e), C = {
			number: q,
			descr: e,
			section: q,
			width: 200 * Math.max(S.length, 1) - 50,
			padding: 20,
			maxHeight: V
		};
		log.debug("sectionNode", C);
		let w = L.append("g"), T = svgDraw_default.drawNode(w, C, q, E, b);
		log.debug("sectionNode output", T), w.attr("transform", `translate(${G}, ${W})`), K += V + 50, S.length > 0 && drawTasks(L, S, q, G, K, H, E, Y, X, V, !1, b), G += 200 * Math.max(S.length, 1), K = W, q++;
	}) : (J = !1, drawTasks(L, R, q, G, K, H, E, Y, X, V, !0, b));
	let Z = L.node().getBBox();
	if (log.debug("bounds", Z), z && L.append("text").text(z).attr("x", D === "neo" ? Z.x * 2 + P : Z.width / 2 - P).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), U = J ? V + H + 150 : H + 100, L.append("g").attr("class", "lineWrapper").append("line").attr("x1", P).attr("y1", U).attr("x2", Z.width + 3 * P).attr("y2", U).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", `url(#${b}-arrowhead)`), D === "neo" && j && O !== "neutral") {
		let e = L.select("defs"), b = (e.empty() ? L.append("defs") : e).append("linearGradient").attr("id", L.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
		b.append("stop").attr("offset", "0%").attr("stop-color", M).attr("stop-opacity", 1), b.append("stop").attr("offset", "100%").attr("stop-color", N).attr("stop-opacity", 1);
	}
	setupGraphViewbox(void 0, L, E.timeline?.padding ?? 50, E.timeline?.useMaxWidth ?? !1);
}, "draw"), drawTasks = /* @__PURE__ */ __name(function(e, b, S, C, w, T, E, D, O, k, A, j) {
	for (let D of b) {
		let b = {
			descr: D.task,
			section: S,
			number: S,
			width: 150,
			padding: 20,
			maxHeight: T
		};
		log.debug("taskNode", b);
		let k = e.append("g").attr("class", "taskWrapper"), M = svgDraw_default.drawNode(k, b, S, E, j).height;
		if (log.debug("taskHeight after draw", M), k.attr("transform", `translate(${C}, ${w})`), T = Math.max(T, M), D.events) {
			let b = e.append("g").attr("class", "lineWrapper"), x = T;
			w += 100, x += drawEvents(e, D.events, S, C, w, E, j), w -= 100, b.append("line").attr("x1", C + 190 / 2).attr("y1", w + T).attr("x2", C + 190 / 2).attr("y2", w + T + 100 + O + 100).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", `url(#${j}-arrowhead)`).attr("stroke-dasharray", "5,5");
		}
		C += 200, A && !E.timeline?.disableMulticolor && S++;
	}
	w -= 10;
}, "drawTasks"), drawEvents = /* @__PURE__ */ __name(function(e, b, S, C, w, T, E) {
	let D = 0, O = w;
	w += 100;
	for (let O of b) {
		let b = {
			descr: O,
			section: S,
			number: S,
			width: 150,
			padding: 20,
			maxHeight: 50
		};
		log.debug("eventNode", b);
		let k = e.append("g").attr("class", "eventWrapper"), A = svgDraw_default.drawNode(k, b, S, T, E, !0).height;
		D += A, k.attr("transform", `translate(${C}, ${w})`), w = w + 10 + A;
	}
	return w = O, D;
}, "drawEvents"), timelineRenderer_default = {
	setConf: /* @__PURE__ */ __name(() => {}, "setConf"),
	draw
}, NODE_WIDTH = 200, NODE_PADDING = 5, NODE_TOTAL_WIDTH = NODE_WIDTH + NODE_PADDING * 2, EVENT_WIDTH = NODE_WIDTH + 100, EVENT_TOTAL_WIDTH = EVENT_WIDTH + NODE_PADDING * 2, EVENT_SPACING = 10, EVENT_VERTICAL_GAP = 0, SECTION_TASK_GAP = 20, TASK_AXIS_GAP = 20, TASK_VERTICAL_GAP = 30, EVENT_AXIS_GAP = 50, draw2 = /* @__PURE__ */ __name(function(e, b, S, C) {
	let T = getConfig2(), E = T.timeline?.leftMargin ?? 50;
	log.debug("timeline", C.db);
	let D = selectSvgElement(b);
	D.append("g");
	let O = C.db.getTasks(), k = C.db.getCommonDb().getDiagramTitle();
	log.debug("task", O), svgDraw_default.initGraphics(D);
	let j = C.db.getSections();
	log.debug("sections", j);
	let P = 0, F = 0, I = 50 + E, L = 50, R = L, z = I, B = NODE_TOTAL_WIDTH + TASK_AXIS_GAP, V = EVENT_TOTAL_WIDTH + EVENT_AXIS_GAP, H = z + B, U = 0, W = j && j.length > 0, G = W ? H : I + B, K = Math.max(50, B + V - NODE_PADDING * 2);
	j.forEach(function(e) {
		let b = {
			number: U,
			descr: e,
			section: U,
			width: K,
			padding: NODE_PADDING,
			maxHeight: P
		}, S = svgDraw_default.getVirtualNodeHeight(D, b, T);
		log.debug("sectionHeight before draw", S), P = Math.max(P, S);
	});
	let q = 0;
	log.debug("tasks.length", O.length);
	for (let [e, b] of O.entries()) {
		let S = {
			number: e,
			descr: b,
			section: b.section,
			width: NODE_WIDTH,
			padding: NODE_PADDING,
			maxHeight: F
		}, C = svgDraw_default.getVirtualNodeHeight(D, S, T);
		log.debug("taskHeight before draw", C), F = Math.max(F, C);
		let w = 0;
		for (let e of b.events) {
			let x = {
				descr: e,
				section: b.section,
				number: b.section,
				width: EVENT_WIDTH,
				padding: NODE_PADDING,
				maxHeight: 50
			};
			w += svgDraw_default.getVirtualNodeHeight(D, x, T);
		}
		b.events.length > 0 && (w += (b.events.length - 1) * EVENT_SPACING), q = Math.max(q, w) + EVENT_VERTICAL_GAP;
	}
	log.debug("maxSectionHeight before draw", P), log.debug("maxTaskHeight before draw", F);
	let J = Math.max(F, q) + TASK_VERTICAL_GAP;
	W ? j.forEach((e) => {
		let b = O.filter((b) => b.section === e), S = {
			number: U,
			descr: e,
			section: U,
			width: K,
			padding: NODE_PADDING,
			maxHeight: P
		};
		log.debug("sectionNode", S);
		let C = D.append("g"), w = svgDraw_default.drawNode(C, S, U, T);
		log.debug("sectionNode output", w);
		let E = G - B;
		C.attr("transform", `translate(${E}, ${L})`);
		let k = L + w.height + SECTION_TASK_GAP;
		b.length > 0 && drawTasks2(D, b, U, G, k, F, T, J, !1);
		let A = b.length, j = w.height + SECTION_TASK_GAP + J * Math.max(A, 1) - (A > 0 ? TASK_VERTICAL_GAP * 2 : 0);
		L += j, U++;
	}) : drawTasks2(D, O, U, G, L, F, T, J, !0);
	let Y = D.node()?.getBBox();
	if (!Y) throw Error("bbox not found");
	if (log.debug("bounds", Y), k) {
		if (D.append("text").text(k).attr("x", Y.width / 2 - E).attr("font-size", "4ex").attr("font-weight", "bold").attr("y", 20), Y = D.node()?.getBBox(), !Y) throw Error("bbox not found");
		log.debug("bounds after title", Y);
	}
	let [X] = parseFontSize(T.fontSize), Z = (X ?? 16) * 2, Q = (X ?? 16) * .5 + 20, $ = D.append("g").attr("class", "lineWrapper");
	$.append("line").attr("x1", G).attr("y1", R - Z).attr("x2", G).attr("y2", Y.y + Y.height + Q).attr("stroke-width", 4).attr("stroke", "black").attr("marker-end", "url(#arrowhead)"), $.lower(), setupGraphViewbox(void 0, D, T.timeline?.padding ?? 50, T.timeline?.useMaxWidth ?? !1);
}, "draw"), drawTasks2 = /* @__PURE__ */ __name(function(e, b, S, C, w, T, E, D, O) {
	for (let k of b) {
		let b = {
			descr: k.task,
			section: S,
			number: S,
			width: NODE_WIDTH,
			padding: NODE_PADDING,
			maxHeight: T
		};
		log.debug("taskNode", b);
		let A = e.append("g").attr("class", "taskWrapper"), j = svgDraw_default.drawNode(A, b, S, E), M = j.height;
		log.debug("taskHeight after draw", M);
		let N = C - TASK_AXIS_GAP - j.width;
		if (A.attr("transform", `translate(${N}, ${w})`), T = Math.max(T, M), k.events && k.events.length > 0) {
			let b = w, x = C + EVENT_AXIS_GAP;
			drawEvents2(e, k.events, S, C, x, b, E);
		}
		w += D, O && !E.timeline?.disableMulticolor && S++;
	}
}, "drawTasks"), drawEvents2 = /* @__PURE__ */ __name(function(e, b, S, C, w, T, E) {
	let D = T;
	for (let T of b) {
		let b = {
			descr: T,
			section: S,
			number: S,
			width: EVENT_WIDTH,
			padding: NODE_PADDING,
			maxHeight: 0
		};
		log.debug("eventNode", b);
		let O = e.append("g").attr("class", "eventWrapper"), k = svgDraw_default.drawNode(O, b, S, E).height;
		O.attr("transform", `translate(${w}, ${D})`);
		let A = e.append("g").attr("class", "lineWrapper"), j = D + k / 2;
		A.append("line").attr("x1", C).attr("y1", j).attr("x2", w).attr("y2", j).attr("stroke-width", 2).attr("stroke", "black").attr("marker-end", "url(#arrowhead)").attr("stroke-dasharray", "5,5"), D = D + k + EVENT_SPACING;
	}
	return D - T;
}, "drawEvents"), timelineRendererVertical_default = {
	setConf: /* @__PURE__ */ __name(() => {}, "setConf"),
	draw: draw2
}, genReduxSections = /* @__PURE__ */ __name((e) => {
	let { theme: b } = getConfig(), x = b?.includes("dark"), S = b?.includes("color"), C = e.svgId?.replace(/^#/, "") ?? "", w = C ? `url(#${C}-drop-shadow)` : e.dropShadow ?? "none", T = "";
	for (let b = 0; b < e.THEME_COLOR_LIMIT; b++) {
		let C = `${17 - 3 * b}`, E = S ? e.borderColorArray[b] : e.mainBkg, D = S ? e.borderColorArray[b] : e.nodeBorder;
		T += `
    .section-${b - 1} rect,
    .section-${b - 1} path,
    .section-${b - 1} circle {
      fill: ${x && S ? e.mainBkg : E};
      stroke: ${D};
      stroke-width: ${e.strokeWidth};
      filter: ${w};
    }

    .section-${b - 1} text {
      fill: ${e.nodeBorder};
      font-weight: ${e.fontWeight}
    }

    .node-icon-${b - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + b]};
    }

    .section-edge-${b - 1} {
      stroke: ${e["cScale" + b]};
    }

    .edge-depth-${b - 1} {
      stroke-width: ${C};
    }

    .section-${b - 1} line {
      stroke: ${e["cScaleInv" + b]};
      stroke-width: 3;
    }

    .lineWrapper line {
      stroke: ${e.nodeBorder};
      stroke-width:${e.strokeWidth}
    }

    .disabled,
    .disabled circle,
    .disabled text {
      fill: ${e.tertiaryColor ?? "lightgray"};
    }

    .disabled text {
      fill: ${e.clusterBorder ?? "#efefef"};
    }
    `;
	}
	return T;
}, "genReduxSections"), genSections = /* @__PURE__ */ __name((e) => {
	let b = "";
	for (let b = 0; b < e.THEME_COLOR_LIMIT; b++) e["lineColor" + b] = e["lineColor" + b] || e["cScaleInv" + b], is_dark_default(e["lineColor" + b]) ? e["lineColor" + b] = lighten_default(e["lineColor" + b], 20) : e["lineColor" + b] = darken_default(e["lineColor" + b], 20);
	for (let x = 0; x < e.THEME_COLOR_LIMIT; x++) {
		let S = "" + (17 - 3 * x);
		b += `
    .section-${x - 1} rect, .section-${x - 1} path, .section-${x - 1} circle, .section-${x - 1} path  {
      fill: ${e["cScale" + x]};
    }
    .section-${x - 1} text {
     fill: ${e["cScaleLabel" + x]};
    }
    .node-icon-${x - 1} {
      font-size: 40px;
      color: ${e["cScaleLabel" + x]};
    }
    .section-edge-${x - 1}{
      stroke: ${e["cScale" + x]};
    }
    .edge-depth-${x - 1}{
      stroke-width: ${S};
    }
    .section-${x - 1} line {
      stroke: ${e["cScaleInv" + x]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${e["cScaleLabel" + x]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: ${e.tertiaryColor ?? "lightgray"};
    }
    .disabled text {
      fill: ${e.clusterBorder ?? "#efefef"};
    }
    `;
	}
	return b;
}, "genSections"), diagram = {
	db: timelineDb_exports,
	renderer: {
		setConf: /* @__PURE__ */ __name(() => {}, "setConf"),
		draw: /* @__PURE__ */ __name((e, b, x, S) => (S?.db?.getDirection?.() ?? "LR") === "TD" ? timelineRendererVertical_default.draw(e, b, x, S) : timelineRenderer_default.draw(e, b, x, S), "draw")
	},
	parser: timeline_default,
	styles: /* @__PURE__ */ __name((e) => {
		let { theme: b } = getConfig(), x = b?.includes("redux"), S = b === "neutral", C = e.svgId?.replace(/^#/, "") ?? "", w = "";
		if (e.useGradient && C && e.THEME_COLOR_LIMIT && !S) for (let b = 0; b < e.THEME_COLOR_LIMIT; b++) w += `
      .section-${b - 1}[data-look="neo"] rect,
      .section-${b - 1}[data-look="neo"] path,
      .section-${b - 1}[data-look="neo"] circle {
        fill: ${e.mainBkg};
        stroke: url(#${C}-gradient);
        stroke-width: 2;
      }
      .section-${b - 1}[data-look="neo"] line {
        stroke: url(#${C}-gradient);
        stroke-width: 2;
      }`;
		return `
  .edge {
    stroke-width: 3;
  }
  ${x ? genReduxSections(e) : genSections(e)}
  ${w}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`;
	}, "getStyles")
};
export { diagram };
