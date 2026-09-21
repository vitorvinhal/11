import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import "./src-DXrlgw8l.js";
import { H as setAccDescription, K as setDiagramTitle, U as setAccTitle, a as clear, c as configureSvgSize, s as common_default, v as getAccDescription, w as getDiagramTitle, x as getConfig2, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { m as parseFontSize } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
import { t as at } from "./rough.esm-DkFRuaoy.js";
var parser = (function() {
	var n = /* @__PURE__ */ __name(function(e, n, r, i) {
		for (r ||= {}, i = e.length; i--; r[e[i]] = n);
		return r;
	}, "o"), r = [1, 4], i = [1, 14], a = [1, 12], o = [1, 13], s = [
		6,
		7,
		8
	], c = [1, 20], l = [1, 18], u = [1, 19], d = [
		6,
		7,
		11
	], f = [
		1,
		6,
		13,
		14
	], p = [1, 23], m = [1, 24], h = [
		1,
		6,
		7,
		11,
		13,
		14
	], g = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			ishikawa: 4,
			spaceLines: 5,
			SPACELINE: 6,
			NL: 7,
			ISHIKAWA: 8,
			document: 9,
			stop: 10,
			EOF: 11,
			statement: 12,
			SPACELIST: 13,
			TEXT: 14,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			6: "SPACELINE",
			7: "NL",
			8: "ISHIKAWA",
			11: "EOF",
			13: "SPACELIST",
			14: "TEXT"
		},
		productions_: [
			0,
			[3, 1],
			[3, 2],
			[5, 1],
			[5, 2],
			[5, 2],
			[4, 2],
			[4, 3],
			[10, 1],
			[10, 1],
			[10, 1],
			[10, 2],
			[10, 2],
			[9, 3],
			[9, 2],
			[12, 2],
			[12, 1],
			[12, 1],
			[12, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, n, r, i, a, o, s) {
			var c = o.length - 1;
			switch (a) {
				case 6:
				case 7: return i;
				case 15:
					i.addNode(o[c - 1].length, o[c].trim());
					break;
				case 16:
					i.addNode(0, o[c].trim());
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: 2,
				5: 3,
				6: [1, 5],
				8: r
			},
			{ 1: [3] },
			{ 1: [2, 1] },
			{
				4: 6,
				6: [1, 7],
				7: [1, 8],
				8: r
			},
			{
				6: i,
				7: [1, 10],
				9: 9,
				12: 11,
				13: a,
				14: o
			},
			n(s, [2, 3]),
			{ 1: [2, 2] },
			n(s, [2, 4]),
			n(s, [2, 5]),
			{
				1: [2, 6],
				6: i,
				12: 15,
				13: a,
				14: o
			},
			{
				6: i,
				9: 16,
				12: 11,
				13: a,
				14: o
			},
			{
				6: c,
				7: l,
				10: 17,
				11: u
			},
			n(d, [2, 18], { 14: [1, 21] }),
			n(d, [2, 16]),
			n(d, [2, 17]),
			{
				6: c,
				7: l,
				10: 22,
				11: u
			},
			{
				1: [2, 7],
				6: i,
				12: 15,
				13: a,
				14: o
			},
			n(f, [2, 14], {
				7: p,
				11: m
			}),
			n(h, [2, 8]),
			n(h, [2, 9]),
			n(h, [2, 10]),
			n(d, [2, 15]),
			n(f, [2, 13], {
				7: p,
				11: m
			}),
			n(h, [2, 11]),
			n(h, [2, 12])
		],
		defaultActions: {
			2: [2, 1],
			6: [2, 2]
		},
		parseError: /* @__PURE__ */ __name(function(e, n) {
			if (n.recoverable) this.trace(e);
			else {
				var r = Error(e);
				throw r.hash = n, r;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(n) {
			var r = this, i = [0], a = [], o = [null], s = [], c = this.table, l = "", u = 0, d = 0, f = 0, p = 2, m = 1, h = s.slice.call(arguments, 1), g = Object.create(this.lexer), _ = { yy: {} };
			for (var v in this.yy) Object.prototype.hasOwnProperty.call(this.yy, v) && (_.yy[v] = this.yy[v]);
			g.setInput(n, _.yy), _.yy.lexer = g, _.yy.parser = this, g.yylloc === void 0 && (g.yylloc = {});
			var y = g.yylloc;
			s.push(y);
			var b = g.options && g.options.ranges;
			typeof _.yy.parseError == "function" ? this.parseError = _.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function x(e) {
				i.length -= 2 * e, o.length -= e, s.length -= e;
			}
			__name(x, "popStack");
			function S() {
				var e = a.pop() || g.lex() || m;
				return typeof e != "number" && (e instanceof Array && (a = e, e = a.pop()), e = r.symbols_[e] || e), e;
			}
			__name(S, "lex");
			for (var C, w, T, E, D, O = {}, k, A, j, M;;) {
				if (T = i[i.length - 1], this.defaultActions[T] ? E = this.defaultActions[T] : (C ??= S(), E = c[T] && c[T][C]), E === void 0 || !E.length || !E[0]) {
					var N = "";
					for (k in M = [], c[T]) this.terminals_[k] && k > p && M.push("'" + this.terminals_[k] + "'");
					N = g.showPosition ? "Parse error on line " + (u + 1) + ":\n" + g.showPosition() + "\nExpecting " + M.join(", ") + ", got '" + (this.terminals_[C] || C) + "'" : "Parse error on line " + (u + 1) + ": Unexpected " + (C == m ? "end of input" : "'" + (this.terminals_[C] || C) + "'"), this.parseError(N, {
						text: g.match,
						token: this.terminals_[C] || C,
						line: g.yylineno,
						loc: y,
						expected: M
					});
				}
				if (E[0] instanceof Array && E.length > 1) throw Error("Parse Error: multiple actions possible at state: " + T + ", token: " + C);
				switch (E[0]) {
					case 1:
						i.push(C), o.push(g.yytext), s.push(g.yylloc), i.push(E[1]), C = null, w ? (C = w, w = null) : (d = g.yyleng, l = g.yytext, u = g.yylineno, y = g.yylloc, f > 0 && f--);
						break;
					case 2:
						if (A = this.productions_[E[1]][1], O.$ = o[o.length - A], O._$ = {
							first_line: s[s.length - (A || 1)].first_line,
							last_line: s[s.length - 1].last_line,
							first_column: s[s.length - (A || 1)].first_column,
							last_column: s[s.length - 1].last_column
						}, b && (O._$.range = [s[s.length - (A || 1)].range[0], s[s.length - 1].range[1]]), D = this.performAction.apply(O, [
							l,
							d,
							u,
							_.yy,
							E[1],
							o,
							s
						].concat(h)), D !== void 0) return D;
						A && (i = i.slice(0, -1 * A * 2), o = o.slice(0, -1 * A), s = s.slice(0, -1 * A)), i.push(this.productions_[E[1]][0]), o.push(O.$), s.push(O._$), j = c[i[i.length - 2]][i[i.length - 1]], i.push(j);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	g.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(e, n) {
				if (this.yy.parser) this.yy.parser.parseError(e, n);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(e, n) {
				return this.yy = n || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
				var n = e.length, r = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - n), this.offset -= n;
				var i = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), r.length - 1 && (this.yylineno -= r.length - 1);
				var a = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: r ? (r.length === i.length ? this.yylloc.first_column : 0) + i[i.length - r.length].length - r[0].length : this.yylloc.first_column - n
				}, this.options.ranges && (this.yylloc.range = [a[0], a[0] + this.yyleng - n]), this.yyleng = this.yytext.length, this;
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
				var e = this.pastInput(), n = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + n + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(e, n) {
				var r, i, a;
				if (this.options.backtrack_lexer && (a = {
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
				}, this.options.ranges && (a.yylloc.range = this.yylloc.range.slice(0))), i = e[0].match(/(?:\r\n?|\n).*/g), i && (this.yylineno += i.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], r = this.performAction.call(this, this.yy, this, n, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), r) return r;
				if (this._backtrack) {
					for (var o in a) this[o] = a[o];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, n, r, i;
				this._more || (this.yytext = "", this.match = "");
				for (var a = this._currentRules(), o = 0; o < a.length; o++) if (r = this._input.match(this.rules[a[o]]), r && (!n || r[0].length > n[0].length)) {
					if (n = r, i = o, this.options.backtrack_lexer) {
						if (e = this.test_match(r, a[o]), e !== !1) return e;
						if (this._backtrack) {
							n = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return n ? (e = this.test_match(n, a[i]), e === !1 ? !1 : e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
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
			performAction: /* @__PURE__ */ __name(function(e, n, r, i) {
				switch (r) {
					case 0: return 6;
					case 1: return 8;
					case 2: return 8;
					case 3: return 6;
					case 4: return 7;
					case 5: return 13;
					case 6: return 14;
					case 7: return 11;
				}
			}, "anonymous"),
			rules: [
				/^(?:\s*%%.*)/i,
				/^(?:ishikawa-beta\b)/i,
				/^(?:ishikawa\b)/i,
				/^(?:[\s]+[\n])/i,
				/^(?:[\n]+)/i,
				/^(?:[\s]+)/i,
				/^(?:[^\n]+)/i,
				/^(?:$)/i
			],
			conditions: { INITIAL: {
				rules: [
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7
				],
				inclusive: !0
			} }
		};
	})();
	function _() {
		this.yy = {};
	}
	return __name(_, "Parser"), _.prototype = g, g.Parser = _, new _();
})();
parser.parser = parser;
var ishikawa_default = parser, IshikawaDB = class {
	constructor() {
		this.stack = [], this.clear = this.clear.bind(this), this.addNode = this.addNode.bind(this), this.getRoot = this.getRoot.bind(this);
	}
	static #e = __name(this, "IshikawaDB");
	clear() {
		this.root = void 0, this.stack = [], this.baseLevel = void 0, clear();
	}
	getRoot() {
		return this.root;
	}
	addNode(e, n) {
		let i = common_default.sanitizeText(n, getConfig2());
		if (!this.root) {
			this.root = {
				text: i,
				children: []
			}, this.stack = [{
				level: 0,
				node: this.root
			}], setDiagramTitle(i);
			return;
		}
		this.baseLevel ??= e;
		let a = e - this.baseLevel + 1;
		for (a <= 0 && (a = 1); this.stack.length > 1 && this.stack[this.stack.length - 1].level >= a;) this.stack.pop();
		let o = this.stack[this.stack.length - 1].node, c = {
			text: i,
			children: []
		};
		o.children.push(c), this.stack.push({
			level: a,
			node: c
		});
	}
	getAccTitle() {
		return getAccTitle();
	}
	setAccTitle(e) {
		setAccTitle(e);
	}
	getAccDescription() {
		return getAccDescription();
	}
	setAccDescription(e) {
		setAccDescription(e);
	}
	getDiagramTitle() {
		return getDiagramTitle();
	}
	setDiagramTitle(e) {
		setDiagramTitle(e);
	}
}, FONT_SIZE_DEFAULT = 14, SPINE_BASE_LENGTH = 250, BONE_STUB = 30, BONE_BASE = 60, BONE_PER_CHILD = 5, ANGLE = 82 * Math.PI / 180, COS_A = Math.cos(ANGLE), SIN_A = Math.sin(ANGLE), applyPaddedViewBox = /* @__PURE__ */ __name((e, n, r) => {
	let i = e.node().getBBox(), a = i.width + n * 2, s = i.height + n * 2;
	configureSvgSize(e, s, a, r), e.attr("viewBox", `${i.x - n} ${i.y - n} ${a} ${s}`);
}, "applyPaddedViewBox"), draw = /* @__PURE__ */ __name((e, n, r, i) => {
	let a = i.db.getRoot();
	if (!a) return;
	let o = getConfig2(), { look: s, handDrawnSeed: c, themeVariables: l } = o, d = parseFontSize(o.fontSize)[0] ?? FONT_SIZE_DEFAULT, h = s === "handDrawn", g = a.children ?? [], _ = o.ishikawa?.diagramPadding ?? 20, b = o.ishikawa?.useMaxWidth ?? !1, x = selectSvgElement(n), S = x.append("g").attr("class", "ishikawa"), C = h ? at.svg(x.node()) : void 0, w = C ? {
		roughSvg: C,
		seed: c ?? 0,
		lineColor: l?.lineColor ?? "#333",
		fillColor: l?.mainBkg ?? "#fff"
	} : void 0, T = `ishikawa-arrow-${n}`;
	h || S.append("defs").append("marker").attr("id", T).attr("viewBox", "0 0 10 10").attr("refX", 0).attr("refY", 5).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M 10 0 L 0 5 L 10 10 Z").attr("class", "ishikawa-arrow");
	let D = 0, A = SPINE_BASE_LENGTH, j = h ? void 0 : drawLine(S, D, A, D, A, "ishikawa-spine");
	if (drawHead(S, D, A, a.text, d, w), !g.length) {
		h && drawLine(S, D, A, D, A, "ishikawa-spine", w), applyPaddedViewBox(x, _, b);
		return;
	}
	D -= 20;
	let M = g.filter((e, n) => n % 2 == 0), P = g.filter((e, n) => n % 2 == 1), F = sideStats(M), I = sideStats(P), L = F.total + I.total, R = SPINE_BASE_LENGTH, z = SPINE_BASE_LENGTH;
	if (L > 0) {
		let e = SPINE_BASE_LENGTH * 2, n = SPINE_BASE_LENGTH * .3;
		R = Math.max(n, e * (F.total / L)), z = Math.max(n, e * (I.total / L));
	}
	let B = d * 2;
	R = Math.max(R, F.max * B), z = Math.max(z, I.max * B), A = Math.max(R, SPINE_BASE_LENGTH), j && j.attr("y1", A).attr("y2", A), S.select(".ishikawa-head-group").attr("transform", `translate(0,${A})`);
	let V = Math.ceil(g.length / 2);
	for (let e = 0; e < V; e++) {
		let n = S.append("g").attr("class", "ishikawa-pair");
		for (let [r, i, a] of [[
			g[e * 2],
			-1,
			R
		], [
			g[e * 2 + 1],
			1,
			z
		]]) r && drawBranch(n, r, D, A, i, a, d, w);
		D = n.selectAll("text").nodes().reduce((e, n) => Math.min(e, n.getBBox().x), Infinity);
	}
	if (h) drawLine(S, D, A, 0, A, "ishikawa-spine", w);
	else {
		j.attr("x1", D);
		let e = `url(#${T})`;
		S.selectAll("line.ishikawa-branch, line.ishikawa-sub-branch").attr("marker-start", e);
	}
	applyPaddedViewBox(x, _, b);
}, "draw"), sideStats = /* @__PURE__ */ __name((n) => {
	let r = /* @__PURE__ */ __name((e) => e.children.reduce((e, n) => e + 1 + r(n), 0), "countDescendants");
	return n.reduce((e, n) => {
		let i = r(n);
		return e.total += i, e.max = Math.max(e.max, i), e;
	}, {
		total: 0,
		max: 0
	});
}, "sideStats"), drawHead = /* @__PURE__ */ __name((e, n, r, i, a, o) => {
	let s = Math.max(6, Math.floor(110 / (a * .6))), c = e.append("g").attr("class", "ishikawa-head-group").attr("transform", `translate(${n},${r})`), l = drawMultilineText(c, wrapText(i, s), 0, 0, "ishikawa-head-label", "start", a), u = l.node().getBBox(), d = Math.max(60, u.width + 6), f = Math.max(40, u.height * 2 + 40), p = `M 0 ${-f / 2} L 0 ${f / 2} Q ${d * 2.4} 0 0 ${-f / 2} Z`;
	if (o) {
		let e = o.roughSvg.path(p, {
			roughness: 1.5,
			seed: o.seed,
			fill: o.fillColor,
			fillStyle: "hachure",
			fillWeight: 2.5,
			hachureGap: 5,
			stroke: o.lineColor,
			strokeWidth: 2
		});
		c.insert(() => e, ":first-child").attr("class", "ishikawa-head");
	} else c.insert("path", ":first-child").attr("class", "ishikawa-head").attr("d", p);
	l.attr("transform", `translate(${(d - u.width) / 2 - u.x + 3},${-u.y - u.height / 2})`);
}, "drawHead"), flattenTree = /* @__PURE__ */ __name((n, r) => {
	let i = [], a = [], o = /* @__PURE__ */ __name((e, n, s) => {
		let c = r === -1 ? [...e].reverse() : e;
		for (let e of c) {
			let r = i.length, c = e.children ?? [];
			i.push({
				depth: s,
				text: wrapText(e.text, 15),
				parentIndex: n,
				childCount: c.length
			}), s % 2 == 0 ? (a.push(r), c.length && o(c, r, s + 1)) : (c.length && o(c, r, s + 1), a.push(r));
		}
	}, "walk");
	return o(n, -1, 2), {
		entries: i,
		yOrder: a
	};
}, "flattenTree"), drawCauseLabel = /* @__PURE__ */ __name((e, n, r, i, a, o, s) => {
	let c = e.append("g").attr("class", "ishikawa-label-group"), l = drawMultilineText(c, n, r, i + 11 * a, "ishikawa-label cause", "middle", o).node().getBBox();
	if (s) {
		let e = s.roughSvg.rectangle(l.x - 20, l.y - 2, l.width + 40, l.height + 4, {
			roughness: 1.5,
			seed: s.seed,
			fill: s.fillColor,
			fillStyle: "hachure",
			fillWeight: 2.5,
			hachureGap: 5,
			stroke: s.lineColor,
			strokeWidth: 2
		});
		c.insert(() => e, ":first-child").attr("class", "ishikawa-label-box");
	} else c.insert("rect", ":first-child").attr("class", "ishikawa-label-box").attr("x", l.x - 20).attr("y", l.y - 2).attr("width", l.width + 40).attr("height", l.height + 4);
}, "drawCauseLabel"), drawArrowMarker = /* @__PURE__ */ __name((e, n, r, i, a, o) => {
	let s = Math.sqrt(i * i + a * a);
	if (s === 0) return;
	let c = i / s, l = a / s, u = -l * 6, d = c * 6, f = n, p = r, m = `M ${f} ${p} L ${f - c * 6 * 2 + u} ${p - l * 6 * 2 + d} L ${f - c * 6 * 2 - u} ${p - l * 6 * 2 - d} Z`, h = o.roughSvg.path(m, {
		roughness: 1,
		seed: o.seed,
		fill: o.lineColor,
		fillStyle: "solid",
		stroke: o.lineColor,
		strokeWidth: 1
	});
	e.append(() => h);
}, "drawArrowMarker"), drawBranch = /* @__PURE__ */ __name((e, n, r, i, a, o, s, c) => {
	let l = n.children ?? [], u = o * (l.length ? 1 : .2), d = -COS_A * u, f = SIN_A * u * a, p = r + d, m = i + f;
	if (drawLine(e, r, i, p, m, "ishikawa-branch", c), c && drawArrowMarker(e, r, i, r - p, i - m, c), drawCauseLabel(e, n.text, p, m, a, s, c), !l.length) return;
	let { entries: h, yOrder: g } = flattenTree(l, a), _ = h.length, v = Array(_);
	for (let [e, n] of g.entries()) v[n] = i + f * ((e + 1) / (_ + 1));
	let y = /* @__PURE__ */ new Map();
	y.set(-1, {
		x0: r,
		y0: i,
		x1: p,
		y1: m,
		childCount: l.length,
		childrenDrawn: 0
	});
	let C = -COS_A, E = SIN_A * a, D = a < 0 ? "ishikawa-label up" : "ishikawa-label down";
	for (let [n, r] of h.entries()) {
		let i = v[n], a = y.get(r.parentIndex), o = e.append("g").attr("class", "ishikawa-sub-group"), l = 0, u = 0, d = 0;
		if (r.depth % 2 == 0) {
			let e = a.y1 - a.y0;
			l = lerp(a.x0, a.x1, e ? (i - a.y0) / e : .5), u = i, d = l - (r.childCount > 0 ? BONE_BASE + r.childCount * BONE_PER_CHILD : BONE_STUB), drawLine(o, l, i, d, i, "ishikawa-sub-branch", c), c && drawArrowMarker(o, l, i, 1, 0, c), drawMultilineText(o, r.text, d, i, "ishikawa-label align", "end", s);
		} else {
			let e = a.childrenDrawn++;
			l = lerp(a.x0, a.x1, (a.childCount - e) / (a.childCount + 1)), u = a.y0, d = l + C * ((i - u) / E), drawLine(o, l, u, d, i, "ishikawa-sub-branch", c), c && drawArrowMarker(o, l, u, l - d, u - i, c), drawMultilineText(o, r.text, d, i, D, "end", s);
		}
		r.childCount > 0 && y.set(n, {
			x0: l,
			y0: u,
			x1: d,
			y1: i,
			childCount: r.childCount,
			childrenDrawn: 0
		});
	}
}, "drawBranch"), splitLines = /* @__PURE__ */ __name((e) => e.split(/<br\s*\/?>|\n/), "splitLines"), wrapText = /* @__PURE__ */ __name((e, n) => {
	if (e.length <= n) return e;
	let r = [];
	for (let i of e.split(/\s+/)) {
		let e = r.length - 1;
		e >= 0 && r[e].length + 1 + i.length <= n ? r[e] += " " + i : r.push(i);
	}
	return r.join("\n");
}, "wrapText"), drawMultilineText = /* @__PURE__ */ __name((e, n, r, i, a, o, s) => {
	let c = splitLines(n), l = s * 1.05, u = e.append("text").attr("class", a).attr("text-anchor", o).attr("x", r).attr("y", i - (c.length - 1) * l / 2);
	for (let [e, n] of c.entries()) u.append("tspan").attr("x", r).attr("dy", e === 0 ? 0 : l).text(n);
	return u;
}, "drawMultilineText"), lerp = /* @__PURE__ */ __name((e, n, r) => e + (n - e) * r, "lerp"), drawLine = /* @__PURE__ */ __name((e, n, r, i, a, o, s) => {
	if (s) {
		let c = s.roughSvg.line(n, r, i, a, {
			roughness: 1.5,
			seed: s.seed,
			stroke: s.lineColor,
			strokeWidth: 2
		});
		e.append(() => c).attr("class", o);
		return;
	}
	return e.append("line").attr("class", o).attr("x1", n).attr("y1", r).attr("x2", i).attr("y2", a);
}, "drawLine"), diagram = {
	parser: ishikawa_default,
	get db() {
		return new IshikawaDB();
	},
	renderer: { draw },
	styles: /* @__PURE__ */ __name((e) => `
.ishikawa .ishikawa-spine,
.ishikawa .ishikawa-branch,
.ishikawa .ishikawa-sub-branch {
  stroke: ${e.lineColor};
  stroke-width: 2;
  fill: none;
}

.ishikawa .ishikawa-sub-branch {
  stroke-width: 1;
}

.ishikawa .ishikawa-arrow {
  fill: ${e.lineColor};
}

.ishikawa .ishikawa-head {
  fill: ${e.mainBkg};
  stroke: ${e.lineColor};
  stroke-width: 2;
}

.ishikawa .ishikawa-label-box {
  fill: ${e.mainBkg};
  stroke: ${e.lineColor};
  stroke-width: 2;
}

.ishikawa text {
  font-family: ${e.fontFamily};
  font-size: ${e.fontSize};
  fill: ${e.textColor};
}

.ishikawa .ishikawa-head-label {
  font-weight: 600;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 14px;
}

.ishikawa .ishikawa-label {
  text-anchor: end;
}

.ishikawa .ishikawa-label.cause {
  text-anchor: middle;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.align {
  text-anchor: end;
  dominant-baseline: middle;
}

.ishikawa .ishikawa-label.up {
  dominant-baseline: baseline;
}

.ishikawa .ishikawa-label.down {
  dominant-baseline: hanging;
}
`, "getStyles")
};
export { diagram };
