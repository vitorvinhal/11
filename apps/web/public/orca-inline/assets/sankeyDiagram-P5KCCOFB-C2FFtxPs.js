import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { p as select_default } from "./src-DXrlgw8l.js";
import { H as setAccDescription, J as setupGraphViewbox, K as setDiagramTitle, U as setAccTitle, a as clear, d as defaultConfig2, s as common_default, v as getAccDescription, w as getDiagramTitle, x as getConfig2, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import { t as ordinal } from "./ordinal-BPgqv6Gv.js";
function colors_default(n) {
	for (var c = n.length / 6 | 0, l = Array(c), u = 0; u < c;) l[u] = "#" + n.slice(u * 6, ++u * 6);
	return l;
}
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function max(n, c) {
	let l;
	if (c === void 0) for (let c of n) c != null && (l < c || l === void 0 && c >= c) && (l = c);
	else {
		let u = -1;
		for (let d of n) (d = c(d, ++u, n)) != null && (l < d || l === void 0 && d >= d) && (l = d);
	}
	return l;
}
function min(n, c) {
	let l;
	if (c === void 0) for (let c of n) c != null && (l > c || l === void 0 && c >= c) && (l = c);
	else {
		let u = -1;
		for (let d of n) (d = c(d, ++u, n)) != null && (l > d || l === void 0 && d >= d) && (l = d);
	}
	return l;
}
function sum(n, c) {
	let l = 0;
	if (c === void 0) for (let c of n) (c = +c) && (l += c);
	else {
		let u = -1;
		for (let d of n) (d = +c(d, ++u, n)) && (l += d);
	}
	return l;
}
function targetDepth(n) {
	return n.target.depth;
}
function left(n) {
	return n.depth;
}
function right(n, c) {
	return c - 1 - n.height;
}
function justify(n, c) {
	return n.sourceLinks.length ? n.depth : c - 1;
}
function center(n) {
	return n.targetLinks.length ? n.depth : n.sourceLinks.length ? min(n.sourceLinks, targetDepth) - 1 : 0;
}
function constant(n) {
	return function() {
		return n;
	};
}
function ascendingSourceBreadth(n, c) {
	return ascendingBreadth(n.source, c.source) || n.index - c.index;
}
function ascendingTargetBreadth(n, c) {
	return ascendingBreadth(n.target, c.target) || n.index - c.index;
}
function ascendingBreadth(n, c) {
	return n.y0 - c.y0;
}
function value(n) {
	return n.value;
}
function defaultId(n) {
	return n.index;
}
function defaultNodes(n) {
	return n.nodes;
}
function defaultLinks(n) {
	return n.links;
}
function find(n, c) {
	let l = n.get(c);
	if (!l) throw Error("missing: " + c);
	return l;
}
function computeLinkBreadths({ nodes: n }) {
	for (let c of n) {
		let n = c.y0, l = n;
		for (let l of c.sourceLinks) l.y0 = n + l.width / 2, n += l.width;
		for (let n of c.targetLinks) n.y1 = l + n.width / 2, l += n.width;
	}
}
function Sankey() {
	let n = 0, c = 0, l = 1, u = 1, d = 24, f = 8, p, m = defaultId, h = justify, g, _, v = defaultNodes, b = defaultLinks, S = 6;
	function C() {
		let n = {
			nodes: v.apply(null, arguments),
			links: b.apply(null, arguments)
		};
		return w(n), O(n), k(n), A(n), W(n), computeLinkBreadths(n), n;
	}
	C.update = function(n) {
		return computeLinkBreadths(n), n;
	}, C.nodeId = function(n) {
		return arguments.length ? (m = typeof n == "function" ? n : constant(n), C) : m;
	}, C.nodeAlign = function(n) {
		return arguments.length ? (h = typeof n == "function" ? n : constant(n), C) : h;
	}, C.nodeSort = function(n) {
		return arguments.length ? (g = n, C) : g;
	}, C.nodeWidth = function(n) {
		return arguments.length ? (d = +n, C) : d;
	}, C.nodePadding = function(n) {
		return arguments.length ? (f = p = +n, C) : f;
	}, C.nodes = function(n) {
		return arguments.length ? (v = typeof n == "function" ? n : constant(n), C) : v;
	}, C.links = function(n) {
		return arguments.length ? (b = typeof n == "function" ? n : constant(n), C) : b;
	}, C.linkSort = function(n) {
		return arguments.length ? (_ = n, C) : _;
	}, C.size = function(d) {
		return arguments.length ? (n = c = 0, l = +d[0], u = +d[1], C) : [l - n, u - c];
	}, C.extent = function(d) {
		return arguments.length ? (n = +d[0][0], l = +d[1][0], c = +d[0][1], u = +d[1][1], C) : [[n, c], [l, u]];
	}, C.iterations = function(n) {
		return arguments.length ? (S = +n, C) : S;
	};
	function w({ nodes: n, links: c }) {
		for (let [c, l] of n.entries()) l.index = c, l.sourceLinks = [], l.targetLinks = [];
		let l = new Map(n.map((c, l) => [m(c, l, n), c]));
		for (let [n, u] of c.entries()) {
			u.index = n;
			let { source: c, target: d } = u;
			typeof c != "object" && (c = u.source = find(l, c)), typeof d != "object" && (d = u.target = find(l, d)), c.sourceLinks.push(u), d.targetLinks.push(u);
		}
		if (_ != null) for (let { sourceLinks: c, targetLinks: l } of n) c.sort(_), l.sort(_);
	}
	function O({ nodes: n }) {
		for (let c of n) c.value = c.fixedValue === void 0 ? Math.max(sum(c.sourceLinks, value), sum(c.targetLinks, value)) : c.fixedValue;
	}
	function k({ nodes: n }) {
		let c = n.length, l = new Set(n), u = /* @__PURE__ */ new Set(), d = 0;
		for (; l.size;) {
			for (let n of l) {
				n.depth = d;
				for (let { target: c } of n.sourceLinks) u.add(c);
			}
			if (++d > c) throw Error("circular link");
			l = u, u = /* @__PURE__ */ new Set();
		}
	}
	function A({ nodes: n }) {
		let c = n.length, l = new Set(n), u = /* @__PURE__ */ new Set(), d = 0;
		for (; l.size;) {
			for (let n of l) {
				n.height = d;
				for (let { source: c } of n.targetLinks) u.add(c);
			}
			if (++d > c) throw Error("circular link");
			l = u, u = /* @__PURE__ */ new Set();
		}
	}
	function M({ nodes: c }) {
		let u = max(c, (n) => n.depth) + 1, f = (l - n - d) / (u - 1), p = Array(u);
		for (let l of c) {
			let c = Math.max(0, Math.min(u - 1, Math.floor(h.call(null, l, u))));
			l.layer = c, l.x0 = n + c * f, l.x1 = l.x0 + d, p[c] ? p[c].push(l) : p[c] = [l];
		}
		if (g) for (let n of p) n.sort(g);
		return p;
	}
	function U(n) {
		let l = min(n, (n) => (u - c - (n.length - 1) * p) / sum(n, value));
		for (let d of n) {
			let n = c;
			for (let c of d) {
				c.y0 = n, c.y1 = n + c.value * l, n = c.y1 + p;
				for (let n of c.sourceLinks) n.width = n.value * l;
			}
			n = (u - n + p) / (d.length + 1);
			for (let c = 0; c < d.length; ++c) {
				let l = d[c];
				l.y0 += n * (c + 1), l.y1 += n * (c + 1);
			}
			Z(d);
		}
	}
	function W(n) {
		let l = M(n);
		p = Math.min(f, (u - c) / (max(l, (n) => n.length) - 1)), U(l);
		for (let n = 0; n < S; ++n) {
			let c = .99 ** n, u = Math.max(1 - c, (n + 1) / S);
			K(l, c, u), G(l, c, u);
		}
	}
	function G(n, c, l) {
		for (let u = 1, d = n.length; u < d; ++u) {
			let d = n[u];
			for (let n of d) {
				let l = 0, u = 0;
				for (let { source: c, value: d } of n.targetLinks) {
					let f = d * (n.layer - c.layer);
					l += Q(c, n) * f, u += f;
				}
				if (!(u > 0)) continue;
				let d = (l / u - n.y0) * c;
				n.y0 += d, n.y1 += d, X(n);
			}
			g === void 0 && d.sort(ascendingBreadth), q(d, l);
		}
	}
	function K(n, c, l) {
		for (let u = n.length - 2; u >= 0; --u) {
			let d = n[u];
			for (let n of d) {
				let l = 0, u = 0;
				for (let { target: c, value: d } of n.sourceLinks) {
					let f = d * (c.layer - n.layer);
					l += $(n, c) * f, u += f;
				}
				if (!(u > 0)) continue;
				let d = (l / u - n.y0) * c;
				n.y0 += d, n.y1 += d, X(n);
			}
			g === void 0 && d.sort(ascendingBreadth), q(d, l);
		}
	}
	function q(n, l) {
		let d = n.length >> 1, f = n[d];
		Y(n, f.y0 - p, d - 1, l), J(n, f.y1 + p, d + 1, l), Y(n, u, n.length - 1, l), J(n, c, 0, l);
	}
	function J(n, c, l, u) {
		for (; l < n.length; ++l) {
			let d = n[l], f = (c - d.y0) * u;
			f > 1e-6 && (d.y0 += f, d.y1 += f), c = d.y1 + p;
		}
	}
	function Y(n, c, l, u) {
		for (; l >= 0; --l) {
			let d = n[l], f = (d.y1 - c) * u;
			f > 1e-6 && (d.y0 -= f, d.y1 -= f), c = d.y0 - p;
		}
	}
	function X({ sourceLinks: n, targetLinks: c }) {
		if (_ === void 0) {
			for (let { source: { sourceLinks: n } } of c) n.sort(ascendingTargetBreadth);
			for (let { target: { targetLinks: c } } of n) c.sort(ascendingSourceBreadth);
		}
	}
	function Z(n) {
		if (_ === void 0) for (let { sourceLinks: c, targetLinks: l } of n) c.sort(ascendingTargetBreadth), l.sort(ascendingSourceBreadth);
	}
	function Q(n, c) {
		let l = n.y0 - (n.sourceLinks.length - 1) * p / 2;
		for (let { target: u, width: d } of n.sourceLinks) {
			if (u === c) break;
			l += d + p;
		}
		for (let { source: u, width: d } of c.targetLinks) {
			if (u === n) break;
			l -= d;
		}
		return l;
	}
	function $(n, c) {
		let l = c.y0 - (c.targetLinks.length - 1) * p / 2;
		for (let { source: u, width: d } of c.targetLinks) {
			if (u === n) break;
			l += d + p;
		}
		for (let { target: u, width: d } of n.sourceLinks) {
			if (u === c) break;
			l -= d;
		}
		return l;
	}
	return C;
}
var pi = Math.PI, tau = 2 * pi, epsilon = 1e-6, tauEpsilon = tau - epsilon;
function Path() {
	this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function path() {
	return new Path();
}
Path.prototype = path.prototype = {
	constructor: Path,
	moveTo: function(n, c) {
		this._ += "M" + (this._x0 = this._x1 = +n) + "," + (this._y0 = this._y1 = +c);
	},
	closePath: function() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
	},
	lineTo: function(n, c) {
		this._ += "L" + (this._x1 = +n) + "," + (this._y1 = +c);
	},
	quadraticCurveTo: function(n, c, l, u) {
		this._ += "Q" + +n + "," + +c + "," + (this._x1 = +l) + "," + (this._y1 = +u);
	},
	bezierCurveTo: function(n, c, l, u, d, f) {
		this._ += "C" + +n + "," + +c + "," + +l + "," + +u + "," + (this._x1 = +d) + "," + (this._y1 = +f);
	},
	arcTo: function(n, c, l, u, d) {
		n = +n, c = +c, l = +l, u = +u, d = +d;
		var f = this._x1, p = this._y1, m = l - n, h = u - c, g = f - n, _ = p - c, v = g * g + _ * _;
		if (d < 0) throw Error("negative radius: " + d);
		if (this._x1 === null) this._ += "M" + (this._x1 = n) + "," + (this._y1 = c);
		else if (v > epsilon) if (!(Math.abs(_ * m - h * g) > epsilon) || !d) this._ += "L" + (this._x1 = n) + "," + (this._y1 = c);
		else {
			var b = l - f, S = u - p, C = m * m + h * h, w = b * b + S * S, T = Math.sqrt(C), E = Math.sqrt(v), D = d * Math.tan((pi - Math.acos((C + v - w) / (2 * T * E))) / 2), O = D / E, k = D / T;
			Math.abs(O - 1) > epsilon && (this._ += "L" + (n + O * g) + "," + (c + O * _)), this._ += "A" + d + "," + d + ",0,0," + +(_ * b > g * S) + "," + (this._x1 = n + k * m) + "," + (this._y1 = c + k * h);
		}
	},
	arc: function(n, c, l, u, d, f) {
		n = +n, c = +c, l = +l, f = !!f;
		var p = l * Math.cos(u), m = l * Math.sin(u), h = n + p, g = c + m, _ = 1 ^ f, v = f ? u - d : d - u;
		if (l < 0) throw Error("negative radius: " + l);
		this._x1 === null ? this._ += "M" + h + "," + g : (Math.abs(this._x1 - h) > epsilon || Math.abs(this._y1 - g) > epsilon) && (this._ += "L" + h + "," + g), l && (v < 0 && (v = v % tau + tau), v > tauEpsilon ? this._ += "A" + l + "," + l + ",0,1," + _ + "," + (n - p) + "," + (c - m) + "A" + l + "," + l + ",0,1," + _ + "," + (this._x1 = h) + "," + (this._y1 = g) : v > epsilon && (this._ += "A" + l + "," + l + ",0," + +(v >= pi) + "," + _ + "," + (this._x1 = n + l * Math.cos(d)) + "," + (this._y1 = c + l * Math.sin(d))));
	},
	rect: function(n, c, l, u) {
		this._ += "M" + (this._x0 = this._x1 = +n) + "," + (this._y0 = this._y1 = +c) + "h" + +l + "v" + +u + "h" + -l + "Z";
	},
	toString: function() {
		return this._;
	}
};
var path_default = path;
function constant_default(n) {
	return function() {
		return n;
	};
}
function x(n) {
	return n[0];
}
function y(n) {
	return n[1];
}
var slice = Array.prototype.slice;
function linkSource(n) {
	return n.source;
}
function linkTarget(n) {
	return n.target;
}
function link(n) {
	var c = linkSource, l = linkTarget, u = x, d = y, f = null;
	function p() {
		var p, m = slice.call(arguments), h = c.apply(this, m), g = l.apply(this, m);
		if (f ||= p = path_default(), n(f, +u.apply(this, (m[0] = h, m)), +d.apply(this, m), +u.apply(this, (m[0] = g, m)), +d.apply(this, m)), p) return f = null, p + "" || null;
	}
	return p.source = function(n) {
		return arguments.length ? (c = n, p) : c;
	}, p.target = function(n) {
		return arguments.length ? (l = n, p) : l;
	}, p.x = function(n) {
		return arguments.length ? (u = typeof n == "function" ? n : constant_default(+n), p) : u;
	}, p.y = function(n) {
		return arguments.length ? (d = typeof n == "function" ? n : constant_default(+n), p) : d;
	}, p.context = function(n) {
		return arguments.length ? (f = n ?? null, p) : f;
	}, p;
}
function curveHorizontal(n, c, l, u, d) {
	n.moveTo(c, l), n.bezierCurveTo(c = (c + u) / 2, l, c, d, u, d);
}
function linkHorizontal() {
	return link(curveHorizontal);
}
function horizontalSource(n) {
	return [n.source.x1, n.y0];
}
function horizontalTarget(n) {
	return [n.target.x0, n.y1];
}
function sankeyLinkHorizontal_default() {
	return linkHorizontal().source(horizontalSource).target(horizontalTarget);
}
var parser = (function() {
	var c = /* @__PURE__ */ __name(function(n, c, l, u) {
		for (l ||= {}, u = n.length; u--; l[n[u]] = c);
		return l;
	}, "o"), l = [1, 9], u = [1, 10], d = [
		1,
		5,
		10,
		12
	], f = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			SANKEY: 4,
			NEWLINE: 5,
			csv: 6,
			opt_eof: 7,
			record: 8,
			csv_tail: 9,
			EOF: 10,
			"field[source]": 11,
			COMMA: 12,
			"field[target]": 13,
			"field[value]": 14,
			field: 15,
			escaped: 16,
			non_escaped: 17,
			DQUOTE: 18,
			ESCAPED_TEXT: 19,
			NON_ESCAPED_TEXT: 20,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "SANKEY",
			5: "NEWLINE",
			10: "EOF",
			11: "field[source]",
			12: "COMMA",
			13: "field[target]",
			14: "field[value]",
			18: "DQUOTE",
			19: "ESCAPED_TEXT",
			20: "NON_ESCAPED_TEXT"
		},
		productions_: [
			0,
			[3, 4],
			[6, 2],
			[9, 2],
			[9, 0],
			[7, 1],
			[7, 0],
			[8, 5],
			[15, 1],
			[15, 1],
			[16, 3],
			[17, 1]
		],
		performAction: /* @__PURE__ */ __name(function(n, c, l, u, d, f, p) {
			var m = f.length - 1;
			switch (d) {
				case 7:
					let n = u.findOrCreateNode(f[m - 4].trim().replaceAll("\"\"", "\"")), c = u.findOrCreateNode(f[m - 2].trim().replaceAll("\"\"", "\"")), l = parseFloat(f[m].trim());
					u.addLink(n, c, l);
					break;
				case 8:
				case 9:
				case 11:
					this.$ = f[m];
					break;
				case 10:
					this.$ = f[m - 1];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			{ 5: [1, 3] },
			{
				6: 4,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: l,
				20: u
			},
			{
				1: [2, 6],
				7: 11,
				10: [1, 12]
			},
			c(u, [2, 4], {
				9: 13,
				5: [1, 14]
			}),
			{ 12: [1, 15] },
			c(d, [2, 8]),
			c(d, [2, 9]),
			{ 19: [1, 16] },
			c(d, [2, 11]),
			{ 1: [2, 1] },
			{ 1: [2, 5] },
			c(u, [2, 2]),
			{
				6: 17,
				8: 5,
				15: 6,
				16: 7,
				17: 8,
				18: l,
				20: u
			},
			{
				15: 18,
				16: 7,
				17: 8,
				18: l,
				20: u
			},
			{ 18: [1, 19] },
			c(u, [2, 3]),
			{ 12: [1, 20] },
			c(d, [2, 10]),
			{
				15: 21,
				16: 7,
				17: 8,
				18: l,
				20: u
			},
			c([
				1,
				5,
				10
			], [2, 7])
		],
		defaultActions: {
			11: [2, 1],
			12: [2, 5]
		},
		parseError: /* @__PURE__ */ __name(function(n, c) {
			if (c.recoverable) this.trace(n);
			else {
				var l = Error(n);
				throw l.hash = c, l;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(c) {
			var l = this, u = [0], d = [], f = [null], p = [], m = this.table, h = "", g = 0, _ = 0, v = 0, b = 2, S = 1, C = p.slice.call(arguments, 1), w = Object.create(this.lexer), T = { yy: {} };
			for (var E in this.yy) Object.prototype.hasOwnProperty.call(this.yy, E) && (T.yy[E] = this.yy[E]);
			w.setInput(c, T.yy), T.yy.lexer = w, T.yy.parser = this, w.yylloc === void 0 && (w.yylloc = {});
			var D = w.yylloc;
			p.push(D);
			var O = w.options && w.options.ranges;
			typeof T.yy.parseError == "function" ? this.parseError = T.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function k(n) {
				u.length -= 2 * n, f.length -= n, p.length -= n;
			}
			__name(k, "popStack");
			function A() {
				var n = d.pop() || w.lex() || S;
				return typeof n != "number" && (n instanceof Array && (d = n, n = d.pop()), n = l.symbols_[n] || n), n;
			}
			__name(A, "lex");
			for (var j, M, N, P, F, I = {}, L, R, z, B;;) {
				if (N = u[u.length - 1], this.defaultActions[N] ? P = this.defaultActions[N] : (j ??= A(), P = m[N] && m[N][j]), P === void 0 || !P.length || !P[0]) {
					var V = "";
					for (L in B = [], m[N]) this.terminals_[L] && L > b && B.push("'" + this.terminals_[L] + "'");
					V = w.showPosition ? "Parse error on line " + (g + 1) + ":\n" + w.showPosition() + "\nExpecting " + B.join(", ") + ", got '" + (this.terminals_[j] || j) + "'" : "Parse error on line " + (g + 1) + ": Unexpected " + (j == S ? "end of input" : "'" + (this.terminals_[j] || j) + "'"), this.parseError(V, {
						text: w.match,
						token: this.terminals_[j] || j,
						line: w.yylineno,
						loc: D,
						expected: B
					});
				}
				if (P[0] instanceof Array && P.length > 1) throw Error("Parse Error: multiple actions possible at state: " + N + ", token: " + j);
				switch (P[0]) {
					case 1:
						u.push(j), f.push(w.yytext), p.push(w.yylloc), u.push(P[1]), j = null, M ? (j = M, M = null) : (_ = w.yyleng, h = w.yytext, g = w.yylineno, D = w.yylloc, v > 0 && v--);
						break;
					case 2:
						if (R = this.productions_[P[1]][1], I.$ = f[f.length - R], I._$ = {
							first_line: p[p.length - (R || 1)].first_line,
							last_line: p[p.length - 1].last_line,
							first_column: p[p.length - (R || 1)].first_column,
							last_column: p[p.length - 1].last_column
						}, O && (I._$.range = [p[p.length - (R || 1)].range[0], p[p.length - 1].range[1]]), F = this.performAction.apply(I, [
							h,
							_,
							g,
							T.yy,
							P[1],
							f,
							p
						].concat(C)), F !== void 0) return F;
						R && (u = u.slice(0, -1 * R * 2), f = f.slice(0, -1 * R), p = p.slice(0, -1 * R)), u.push(this.productions_[P[1]][0]), f.push(I.$), p.push(I._$), z = m[u[u.length - 2]][u[u.length - 1]], u.push(z);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	f.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(n, c) {
				if (this.yy.parser) this.yy.parser.parseError(n, c);
				else throw Error(n);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(n, c) {
				return this.yy = c || this.yy || {}, this._input = n, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ __name(function() {
				var n = this._input[0];
				return this.yytext += n, this.yyleng++, this.offset++, this.match += n, this.matched += n, n.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), n;
			}, "input"),
			unput: /* @__PURE__ */ __name(function(n) {
				var c = n.length, l = n.split(/(?:\r\n?|\n)/g);
				this._input = n + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - c), this.offset -= c;
				var u = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), l.length - 1 && (this.yylineno -= l.length - 1);
				var d = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: l ? (l.length === u.length ? this.yylloc.first_column : 0) + u[u.length - l.length].length - l[0].length : this.yylloc.first_column - c
				}, this.options.ranges && (this.yylloc.range = [d[0], d[0] + this.yyleng - c]), this.yyleng = this.yytext.length, this;
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
			less: /* @__PURE__ */ __name(function(n) {
				this.unput(this.match.slice(n));
			}, "less"),
			pastInput: /* @__PURE__ */ __name(function() {
				var n = this.matched.substr(0, this.matched.length - this.match.length);
				return (n.length > 20 ? "..." : "") + n.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ __name(function() {
				var n = this.match;
				return n.length < 20 && (n += this._input.substr(0, 20 - n.length)), (n.substr(0, 20) + (n.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ __name(function() {
				var n = this.pastInput(), c = Array(n.length + 1).join("-");
				return n + this.upcomingInput() + "\n" + c + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(n, c) {
				var l, u, d;
				if (this.options.backtrack_lexer && (d = {
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
				}, this.options.ranges && (d.yylloc.range = this.yylloc.range.slice(0))), u = n[0].match(/(?:\r\n?|\n).*/g), u && (this.yylineno += u.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: u ? u[u.length - 1].length - u[u.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + n[0].length
				}, this.yytext += n[0], this.match += n[0], this.matches = n, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(n[0].length), this.matched += n[0], l = this.performAction.call(this, this.yy, this, c, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), l) return l;
				if (this._backtrack) {
					for (var f in d) this[f] = d[f];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var n, c, l, u;
				this._more || (this.yytext = "", this.match = "");
				for (var d = this._currentRules(), f = 0; f < d.length; f++) if (l = this._input.match(this.rules[d[f]]), l && (!c || l[0].length > c[0].length)) {
					if (c = l, u = f, this.options.backtrack_lexer) {
						if (n = this.test_match(l, d[f]), n !== !1) return n;
						if (this._backtrack) {
							c = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return c ? (n = this.test_match(c, d[u]), n === !1 ? !1 : n) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ __name(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ __name(function(n) {
				this.conditionStack.push(n);
			}, "begin"),
			popState: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ __name(function(n) {
				return n = this.conditionStack.length - 1 - Math.abs(n || 0), n >= 0 ? this.conditionStack[n] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ __name(function(n) {
				this.begin(n);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ __name(function(n, c, l, u) {
				switch (l) {
					case 0: return this.pushState("csv"), 4;
					case 1: return this.pushState("csv"), 4;
					case 2: return 10;
					case 3: return 5;
					case 4: return 12;
					case 5: return this.pushState("escaped_text"), 18;
					case 6: return 20;
					case 7: return this.popState("escaped_text"), 18;
					case 8: return 19;
				}
			}, "anonymous"),
			rules: [
				/^(?:sankey-beta\b)/i,
				/^(?:sankey\b)/i,
				/^(?:$)/i,
				/^(?:((\u000D\u000A)|(\u000A)))/i,
				/^(?:(\u002C))/i,
				/^(?:(\u0022))/i,
				/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,
				/^(?:(\u0022)(?!(\u0022)))/i,
				/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i
			],
			conditions: {
				csv: {
					rules: [
						2,
						3,
						4,
						5,
						6,
						7,
						8
					],
					inclusive: !1
				},
				escaped_text: {
					rules: [7, 8],
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
						8
					],
					inclusive: !0
				}
			}
		};
	})();
	function p() {
		this.yy = {};
	}
	return __name(p, "Parser"), p.prototype = f, f.Parser = p, new p();
})();
parser.parser = parser;
var sankey_default = parser, links = [], nodes = [], nodesMap = /* @__PURE__ */ new Map(), clear2 = /* @__PURE__ */ __name(() => {
	links = [], nodes = [], nodesMap = /* @__PURE__ */ new Map(), clear();
}, "clear"), SankeyLink = class {
	constructor(n, c, l = 0) {
		this.source = n, this.target = c, this.value = l;
	}
	static #e = __name(this, "SankeyLink");
}, addLink = /* @__PURE__ */ __name((n, c, l) => {
	links.push(new SankeyLink(n, c, l));
}, "addLink"), SankeyNode = class {
	constructor(n) {
		this.ID = n;
	}
	static #e = __name(this, "SankeyNode");
}, sankeyDB_default = {
	nodesMap,
	getConfig: /* @__PURE__ */ __name(() => getConfig2().sankey, "getConfig"),
	getNodes: /* @__PURE__ */ __name(() => nodes, "getNodes"),
	getLinks: /* @__PURE__ */ __name(() => links, "getLinks"),
	getGraph: /* @__PURE__ */ __name(() => ({
		nodes: nodes.map((n) => ({ id: n.ID })),
		links: links.map((n) => ({
			source: n.source.ID,
			target: n.target.ID,
			value: n.value
		}))
	}), "getGraph"),
	addLink,
	findOrCreateNode: /* @__PURE__ */ __name((n) => {
		n = common_default.sanitizeText(n, getConfig2());
		let c = nodesMap.get(n);
		return c === void 0 && (c = new SankeyNode(n), nodesMap.set(n, c), nodes.push(c)), c;
	}, "findOrCreateNode"),
	getAccTitle,
	setAccTitle,
	getAccDescription,
	setAccDescription,
	getDiagramTitle,
	setDiagramTitle,
	clear: clear2
}, Uid = class c {
	static #e = __name(this, "Uid");
	static #t = this.count = 0;
	static next(n) {
		return new c(n + ++c.count);
	}
	constructor(n) {
		this.id = n, this.href = `#${n}`;
	}
	toString() {
		return "url(" + this.href + ")";
	}
}, alignmentsMap = {
	left,
	right,
	center,
	justify
}, findCentralNodeLayer = /* @__PURE__ */ __name((n) => {
	let c = 0, l = 0;
	for (let u of n) {
		let n = u.value ?? 0;
		n > c && (c = n, l = u.layer ?? 0);
	}
	return l;
}, "findCentralNodeLayer"), sankeyRenderer_default = { draw: /* @__PURE__ */ __name(function(l, d, f, p) {
	let { securityLevel: h, sankey: g } = getConfig2(), _ = defaultConfig2.sankey, b;
	h === "sandbox" && (b = select_default("#i" + d));
	let C = select_default(h === "sandbox" ? b.nodes()[0].contentDocument.body : "body"), T = h === "sandbox" ? C.select(`[id="${d}"]`) : select_default(`[id="${d}"]`), E = g?.width ?? _.width, D = g?.height ?? _.width, O = g?.useMaxWidth ?? _.useMaxWidth, k = g?.nodeAlignment ?? _.nodeAlignment, A = g?.prefix ?? _.prefix, j = g?.suffix ?? _.suffix, M = g?.showValues ?? _.showValues, N = g?.nodeWidth ?? _.nodeWidth ?? 10, P = g?.nodePadding ?? _.nodePadding ?? 12, F = g?.labelStyle ?? _.labelStyle ?? "legacy", I = g?.nodeColors ?? {}, L = p.db.getGraph(), R = alignmentsMap[k];
	Sankey().nodeId((n) => n.id).nodeWidth(N).nodePadding(P + (M ? 15 : 0)).nodeAlign(R).extent([[0, 0], [E, D]])(L);
	let z = findCentralNodeLayer(L.nodes), B = ordinal(Tableau10_default), V = /* @__PURE__ */ __name((n) => I[n] ?? B(n), "getNodeColor");
	T.append("g").attr("class", "nodes").selectAll(".node").data(L.nodes).join("g").attr("class", "node").attr("id", (n) => (n.uid = Uid.next("node-")).id).attr("transform", function(n) {
		return "translate(" + n.x0 + "," + n.y0 + ")";
	}).attr("x", (n) => n.x0).attr("y", (n) => n.y0).append("rect").attr("height", (n) => n.y1 - n.y0).attr("width", (n) => n.x1 - n.x0).attr("fill", (n) => V(n.id));
	let H = /* @__PURE__ */ __name(({ id: n, value: c }) => M ? `${n}
${A}${Math.round(c * 100) / 100}${j}` : n, "getText"), W = /* @__PURE__ */ __name((n) => F === "outlined" ? (n.layer ?? 0) < z ? {
		x: n.x0 - 6,
		anchor: "end"
	} : {
		x: n.x1 + 6,
		anchor: "start"
	} : n.x0 < E / 2 ? {
		x: n.x1 + 6,
		anchor: "start"
	} : {
		x: n.x0 - 6,
		anchor: "end"
	}, "getLabelPosition"), G = T.append("g").attr("class", "node-labels").attr("font-size", 14), K = /* @__PURE__ */ __name((n) => G.selectAll(n ? `.${n}` : "text").data(L.nodes).join("text").attr("class", n ?? null).attr("x", (n) => W(n).x).attr("y", (n) => (n.y1 + n.y0) / 2).attr("dy", `${M ? "0" : "0.35"}em`).attr("text-anchor", (n) => W(n).anchor).text(H), "appendLabel");
	F === "outlined" ? (K("sankey-label-bg"), K("sankey-label-fg")) : K();
	let q = T.append("g").attr("class", "links").attr("fill", "none").attr("stroke-opacity", .5).selectAll(".link").data(L.links).join("g").attr("class", "link").style("mix-blend-mode", "multiply"), J = g?.linkColor ?? "gradient";
	if (J === "gradient") {
		let n = q.append("linearGradient").attr("id", (n) => (n.uid = Uid.next("linearGradient-")).id).attr("gradientUnits", "userSpaceOnUse").attr("x1", (n) => n.source.x1).attr("x2", (n) => n.target.x0);
		n.append("stop").attr("offset", "0%").attr("stop-color", (n) => V(n.source.id)), n.append("stop").attr("offset", "100%").attr("stop-color", (n) => V(n.target.id));
	}
	let Y;
	switch (J) {
		case "gradient":
			Y = /* @__PURE__ */ __name((n) => n.uid, "coloring");
			break;
		case "source":
			Y = /* @__PURE__ */ __name((n) => V(n.source.id), "coloring");
			break;
		case "target":
			Y = /* @__PURE__ */ __name((n) => V(n.target.id), "coloring");
			break;
		default: Y = J;
	}
	q.append("path").attr("d", sankeyLinkHorizontal_default()).attr("stroke", Y).attr("stroke-width", (n) => Math.max(1, n.width)), setupGraphViewbox(void 0, T, 0, O);
}, "draw") }, prepareTextForParsing = /* @__PURE__ */ __name((n) => n.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, "").replaceAll(/([\n\r])+/g, "\n").trim(), "prepareTextForParsing"), styles_default = /* @__PURE__ */ __name((n) => `.label {
    font-family: ${n.fontFamily};
  }

  .node-labels {
    font-family: ${n.fontFamily};
  }

  /* Outlined label style - background stroke for better readability */
  .sankey-label-bg {
    stroke: ${n.mainBkg || n.background || "#fff"};
    stroke-width: 4px;
    stroke-linejoin: round;
    paint-order: stroke;
  }

  /* Foreground label text */
  .sankey-label-fg {
    fill: ${n.textColor};
  }

  /* Node styling */
  .node rect {
    shape-rendering: crispEdges;
  }

  /* Link styling */
  .link {
    fill: none;
    stroke-opacity: 0.5;
    mix-blend-mode: multiply;
  }
`, "getStyles"), originalParse = sankey_default.parse.bind(sankey_default);
sankey_default.parse = (n) => originalParse(prepareTextForParsing(n));
var diagram = {
	styles: styles_default,
	parser: sankey_default,
	db: sankeyDB_default,
	renderer: sankeyRenderer_default
};
export { diagram };
