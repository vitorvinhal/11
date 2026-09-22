import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { p as select_default } from "./src-DXrlgw8l.js";
import { $ as darken_default, H as setAccDescription, K as setDiagramTitle, U as setAccTitle, a as clear, b as getConfig, c as configureSvgSize, et as lighten_default, f as defaultConfig_default, nt as is_dark_default, tt as adjust_channel_default, v as getAccDescription, w as getDiagramTitle, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { a as cleanAndMerge } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
import { t as at } from "./rough.esm-DkFRuaoy.js";
var transparentize_default = (e, g) => adjust_channel_default(e, "a", -g), SMALL$1 = 1e-10;
function intersectionArea(e, g) {
	let _ = getIntersectionPoints(e), v = _.filter((g) => containedInCircles(g, e)), y = 0, b = 0, x = [];
	if (v.length > 1) {
		let g = getCenter(v);
		for (let e = 0; e < v.length; ++e) {
			let _ = v[e];
			_.angle = Math.atan2(_.x - g.x, _.y - g.y);
		}
		v.sort((e, g) => g.angle - e.angle);
		let _ = v[v.length - 1];
		for (let g = 0; g < v.length; ++g) {
			let S = v[g];
			b += (_.x + S.x) * (S.y - _.y);
			let C = {
				x: (S.x + _.x) / 2,
				y: (S.y + _.y) / 2
			}, w = null;
			for (let g = 0; g < S.parentIndex.length; ++g) if (_.parentIndex.includes(S.parentIndex[g])) {
				let v = e[S.parentIndex[g]], y = Math.atan2(S.x - v.x, S.y - v.y), b = Math.atan2(_.x - v.x, _.y - v.y), x = b - y;
				x < 0 && (x += 2 * Math.PI);
				let T = b - x / 2, E = distance(C, {
					x: v.x + v.radius * Math.sin(T),
					y: v.y + v.radius * Math.cos(T)
				});
				E > v.radius * 2 && (E = v.radius * 2), (w == null || w.width > E) && (w = {
					circle: v,
					width: E,
					p1: S,
					p2: _,
					large: E > v.radius,
					sweep: !0
				});
			}
			w != null && (x.push(w), y += circleArea(w.circle.radius, w.width), _ = S);
		}
	} else {
		let g = e[0];
		for (let _ = 1; _ < e.length; ++_) e[_].radius < g.radius && (g = e[_]);
		let _ = !1;
		for (let v = 0; v < e.length; ++v) if (distance(e[v], g) > Math.abs(g.radius - e[v].radius)) {
			_ = !0;
			break;
		}
		_ ? y = b = 0 : (y = g.radius * g.radius * Math.PI, x.push({
			circle: g,
			p1: {
				x: g.x,
				y: g.y + g.radius
			},
			p2: {
				x: g.x - SMALL$1,
				y: g.y + g.radius
			},
			width: g.radius * 2,
			large: !0,
			sweep: !0
		}));
	}
	return b /= 2, g && (g.area = y + b, g.arcArea = y, g.polygonArea = b, g.arcs = x, g.innerPoints = v, g.intersectionPoints = _), y + b;
}
function containedInCircles(e, g) {
	return g.every((g) => distance(e, g) < g.radius + SMALL$1);
}
function getIntersectionPoints(e) {
	let g = [];
	for (let _ = 0; _ < e.length; ++_) for (let v = _ + 1; v < e.length; ++v) {
		let y = circleCircleIntersection(e[_], e[v]);
		for (let e of y) e.parentIndex = [_, v], g.push(e);
	}
	return g;
}
function circleArea(e, g) {
	return e * e * Math.acos(1 - g / e) - (e - g) * Math.sqrt(g * (2 * e - g));
}
function distance(e, g) {
	return Math.sqrt((e.x - g.x) * (e.x - g.x) + (e.y - g.y) * (e.y - g.y));
}
function circleOverlap(e, g, _) {
	if (_ >= e + g) return 0;
	if (_ <= Math.abs(e - g)) return Math.PI * Math.min(e, g) * Math.min(e, g);
	let v = e - (_ * _ - g * g + e * e) / (2 * _), y = g - (_ * _ - e * e + g * g) / (2 * _);
	return circleArea(e, v) + circleArea(g, y);
}
function circleCircleIntersection(e, g) {
	let _ = distance(e, g), v = e.radius, y = g.radius;
	if (_ >= v + y || _ <= Math.abs(v - y)) return [];
	let b = (v * v - y * y + _ * _) / (2 * _), x = Math.sqrt(v * v - b * b), S = e.x + b * (g.x - e.x) / _, C = e.y + b * (g.y - e.y) / _, w = -(g.y - e.y) * (x / _), T = -(g.x - e.x) * (x / _);
	return [{
		x: S + w,
		y: C - T
	}, {
		x: S - w,
		y: C + T
	}];
}
function getCenter(e) {
	let g = {
		x: 0,
		y: 0
	};
	for (let _ of e) g.x += _.x, g.y += _.y;
	return g.x /= e.length, g.y /= e.length, g;
}
function bisect(e, g, _, v) {
	v ||= {};
	let y = v.maxIterations || 100, b = v.tolerance || 1e-10, x = e(g), S = e(_), C = _ - g;
	if (x * S > 0) throw "Initial bisect points must have opposite signs";
	if (x === 0) return g;
	if (S === 0) return _;
	for (let _ = 0; _ < y; ++_) {
		C /= 2;
		let _ = g + C, v = e(_);
		if (v * x >= 0 && (g = _), Math.abs(C) < b || v === 0) return _;
	}
	return g + C;
}
function zeros(e) {
	let g = Array(e);
	for (let _ = 0; _ < e; ++_) g[_] = 0;
	return g;
}
function zerosM(e, g) {
	return zeros(e).map(() => zeros(g));
}
function dot(e, g) {
	let _ = 0;
	for (let v = 0; v < e.length; ++v) _ += e[v] * g[v];
	return _;
}
function norm2(e) {
	return Math.sqrt(dot(e, e));
}
function scale(e, g, _) {
	for (let v = 0; v < g.length; ++v) e[v] = g[v] * _;
}
function weightedSum(e, g, _, v, y) {
	for (let b = 0; b < e.length; ++b) e[b] = g * _[b] + v * y[b];
}
function nelderMead(e, g, _) {
	_ ||= {};
	let v = _.maxIterations || g.length * 200, y = _.nonZeroDelta || 1.05, b = _.zeroDelta || .001, x = _.minErrorDelta || 1e-6, S = _.minErrorDelta || 1e-5, C = _.rho === void 0 ? 1 : _.rho, w = _.chi === void 0 ? 2 : _.chi, T = _.psi === void 0 ? -.5 : _.psi, E = _.sigma === void 0 ? .5 : _.sigma, D, O = g.length, k = Array(O + 1);
	k[0] = g, k[0].fx = e(g), k[0].id = 0;
	for (let _ = 0; _ < O; ++_) {
		let v = g.slice();
		v[_] = v[_] ? v[_] * y : b, k[_ + 1] = v, k[_ + 1].fx = e(v), k[_ + 1].id = _ + 1;
	}
	function A(e) {
		for (let g = 0; g < e.length; g++) k[O][g] = e[g];
		k[O].fx = e.fx;
	}
	let j = (e, g) => e.fx - g.fx, M = g.slice(), N = g.slice(), P = g.slice(), F = g.slice();
	for (let g = 0; g < v; ++g) {
		if (k.sort(j), _.history) {
			let e = k.map((e) => {
				let g = e.slice();
				return g.fx = e.fx, g.id = e.id, g;
			});
			e.sort((e, g) => e.id - g.id), _.history.push({
				x: k[0].slice(),
				fx: k[0].fx,
				simplex: e
			});
		}
		D = 0;
		for (let e = 0; e < O; ++e) D = Math.max(D, Math.abs(k[0][e] - k[1][e]));
		if (Math.abs(k[0].fx - k[O].fx) < x && D < S) break;
		for (let e = 0; e < O; ++e) {
			M[e] = 0;
			for (let g = 0; g < O; ++g) M[e] += k[g][e];
			M[e] /= O;
		}
		let g = k[O];
		if (weightedSum(N, 1 + C, M, -C, g), N.fx = e(N), N.fx < k[0].fx) weightedSum(F, 1 + w, M, -w, g), F.fx = e(F), F.fx < N.fx ? A(F) : A(N);
		else if (N.fx >= k[O - 1].fx) {
			let _ = !1;
			if (N.fx > g.fx ? (weightedSum(P, 1 + T, M, -T, g), P.fx = e(P), P.fx < g.fx ? A(P) : _ = !0) : (weightedSum(P, 1 - T * C, M, T * C, g), P.fx = e(P), P.fx < N.fx ? A(P) : _ = !0), _) {
				if (E >= 1) break;
				for (let g = 1; g < k.length; ++g) weightedSum(k[g], 1 - E, k[0], E, k[g]), k[g].fx = e(k[g]);
			}
		} else A(N);
	}
	return k.sort(j), {
		fx: k[0].fx,
		x: k[0]
	};
}
function wolfeLineSearch(e, g, _, v, y, b, x) {
	let S = _.fx, C = dot(_.fxprime, g), w = S, T = S, E = C, D = 0;
	y ||= 1, b ||= 1e-6, x ||= .1;
	function O(T, D, O) {
		for (let k = 0; k < 16; ++k) if (y = (T + D) / 2, weightedSum(v.x, 1, _.x, y, g), w = v.fx = e(v.x, v.fxprime), E = dot(v.fxprime, g), w > S + b * y * C || w >= O) D = y;
		else {
			if (Math.abs(E) <= -x * C) return y;
			E * (D - T) >= 0 && (D = T), T = y, O = w;
		}
		return 0;
	}
	for (let k = 0; k < 10; ++k) {
		if (weightedSum(v.x, 1, _.x, y, g), w = v.fx = e(v.x, v.fxprime), E = dot(v.fxprime, g), w > S + b * y * C || k && w >= T) return O(D, y, T);
		if (Math.abs(E) <= -x * C) return y;
		if (E >= 0) return O(y, D, w);
		T = w, D = y, y *= 2;
	}
	return y;
}
function conjugateGradient(e, g, _) {
	let v = {
		x: g.slice(),
		fx: 0,
		fxprime: g.slice()
	}, y = {
		x: g.slice(),
		fx: 0,
		fxprime: g.slice()
	}, b = g.slice(), x, S, C = 1, w;
	_ ||= {}, w = _.maxIterations || g.length * 20, v.fx = e(v.x, v.fxprime), x = v.fxprime.slice(), scale(x, v.fxprime, -1);
	for (let g = 0; g < w; ++g) {
		if (C = wolfeLineSearch(e, x, v, y, C), _.history && _.history.push({
			x: v.x.slice(),
			fx: v.fx,
			fxprime: v.fxprime.slice(),
			alpha: C
		}), !C) scale(x, v.fxprime, -1);
		else {
			weightedSum(b, 1, y.fxprime, -1, v.fxprime);
			let e = dot(v.fxprime, v.fxprime), g = Math.max(0, dot(b, y.fxprime) / e);
			weightedSum(x, g, x, -1, y.fxprime), S = v, v = y, y = S;
		}
		if (norm2(v.fxprime) <= 1e-5) break;
	}
	return _.history && _.history.push({
		x: v.x.slice(),
		fx: v.fx,
		fxprime: v.fxprime.slice(),
		alpha: C
	}), v;
}
function venn(e, g = {}) {
	g.maxIterations = g.maxIterations || 500;
	let _ = g.initialLayout || bestInitialLayout, v = g.lossFunction || lossFunction, y = addMissingAreas(e, g), b = _(y, g), x = Object.keys(b), S = [];
	for (let e of x) S.push(b[e].x), S.push(b[e].y);
	let C = nelderMead((e) => {
		let g = {};
		for (let _ = 0; _ < x.length; ++_) {
			let v = x[_];
			g[v] = {
				x: e[2 * _],
				y: e[2 * _ + 1],
				radius: b[v].radius
			};
		}
		return v(g, y);
	}, S, g).x;
	for (let e = 0; e < x.length; ++e) {
		let g = x[e];
		b[g].x = C[2 * e], b[g].y = C[2 * e + 1];
	}
	return b;
}
var SMALL = 1e-10;
function distanceFromIntersectArea(e, g, _) {
	return Math.min(e, g) * Math.min(e, g) * Math.PI <= _ + SMALL ? Math.abs(e - g) : bisect((v) => circleOverlap(e, g, v) - _, 0, e + g);
}
function addMissingAreas(e, g = {}) {
	let _ = g.distinct, v = e.map((e) => Object.assign({}, e));
	function y(e) {
		return e.join(";");
	}
	if (_) {
		let e = /* @__PURE__ */ new Map();
		for (let g of v) for (let _ = 0; _ < g.sets.length; _++) {
			let v = String(g.sets[_]);
			e.set(v, g.size + (e.get(v) || 0));
			for (let y = _ + 1; y < g.sets.length; y++) {
				let _ = String(g.sets[y]), b = `${v};${_}`, x = `${_};${v}`;
				e.set(b, g.size + (e.get(b) || 0)), e.set(x, g.size + (e.get(x) || 0));
			}
		}
		for (let g of v) g.sets.length < 3 && (g.size = e.get(y(g.sets)));
	}
	let b = [], x = /* @__PURE__ */ new Set();
	for (let e of v) if (e.sets.length === 1) b.push(e.sets[0]);
	else if (e.sets.length === 2) {
		let g = e.sets[0], _ = e.sets[1];
		x.add(y(e.sets)), x.add(y([_, g]));
	}
	b.sort((e, g) => e === g ? 0 : e < g ? -1 : 1);
	for (let e = 0; e < b.length; ++e) {
		let g = b[e];
		for (let _ = e + 1; _ < b.length; ++_) {
			let e = b[_];
			x.has(y([g, e])) || v.push({
				sets: [g, e],
				size: 0
			});
		}
	}
	return v;
}
function getDistanceMatrices(e, g, _) {
	let v = zerosM(g.length, g.length), y = zerosM(g.length, g.length);
	return e.filter((e) => e.sets.length === 2).forEach((e) => {
		let b = _[e.sets[0]], x = _[e.sets[1]], S = distanceFromIntersectArea(Math.sqrt(g[b].size / Math.PI), Math.sqrt(g[x].size / Math.PI), e.size);
		v[b][x] = v[x][b] = S;
		let C = 0;
		e.size + 1e-10 >= Math.min(g[b].size, g[x].size) ? C = 1 : e.size <= 1e-10 && (C = -1), y[b][x] = y[x][b] = C;
	}), {
		distances: v,
		constraints: y
	};
}
function constrainedMDSGradient(e, g, _, v) {
	for (let e = 0; e < g.length; ++e) g[e] = 0;
	let y = 0;
	for (let b = 0; b < _.length; ++b) {
		let x = e[2 * b], S = e[2 * b + 1];
		for (let C = b + 1; C < _.length; ++C) {
			let w = e[2 * C], T = e[2 * C + 1], E = _[b][C], D = v[b][C], O = (w - x) * (w - x) + (T - S) * (T - S), k = Math.sqrt(O), A = O - E * E;
			D > 0 && k <= E || D < 0 && k >= E || (y += 2 * A * A, g[2 * b] += 4 * A * (x - w), g[2 * b + 1] += 4 * A * (S - T), g[2 * C] += 4 * A * (w - x), g[2 * C + 1] += 4 * A * (T - S));
		}
	}
	return y;
}
function bestInitialLayout(e, g = {}) {
	let _ = greedyLayout(e, g), v = g.lossFunction || lossFunction;
	if (e.length >= 8) {
		let y = constrainedMDSLayout(e, g), b = v(y, e), x = v(_, e);
		b + 1e-8 < x && (_ = y);
	}
	return _;
}
function constrainedMDSLayout(e, g = {}) {
	let _ = g.restarts || 10, v = [], y = {};
	for (let g of e) g.sets.length === 1 && (y[g.sets[0]] = v.length, v.push(g));
	let { distances: b, constraints: x } = getDistanceMatrices(e, v, y), S = norm2(b.map(norm2)) / b.length;
	b = b.map((e) => e.map((e) => e / S));
	let C = (e, g) => constrainedMDSGradient(e, g, b, x), w = null;
	for (let e = 0; e < _; ++e) {
		let e = conjugateGradient(C, zeros(b.length * 2).map(Math.random), g);
		(!w || e.fx < w.fx) && (w = e);
	}
	let T = w.x, E = {};
	for (let e = 0; e < v.length; ++e) {
		let g = v[e];
		E[g.sets[0]] = {
			x: T[2 * e] * S,
			y: T[2 * e + 1] * S,
			radius: Math.sqrt(g.size / Math.PI)
		};
	}
	if (g.history) for (let e of g.history) scale(e.x, S);
	return E;
}
function greedyLayout(e, g) {
	let _ = g && g.lossFunction ? g.lossFunction : lossFunction, v = {}, y = {};
	for (let g of e) if (g.sets.length === 1) {
		let e = g.sets[0];
		v[e] = {
			x: 1e10,
			y: 1e10,
			rowid: v.length,
			size: g.size,
			radius: Math.sqrt(g.size / Math.PI)
		}, y[e] = [];
	}
	e = e.filter((e) => e.sets.length === 2);
	for (let g of e) {
		let e = g.weight == null ? 1 : g.weight, _ = g.sets[0], b = g.sets[1];
		g.size + SMALL >= Math.min(v[_].size, v[b].size) && (e = 0), y[_].push({
			set: b,
			size: g.size,
			weight: e
		}), y[b].push({
			set: _,
			size: g.size,
			weight: e
		});
	}
	let b = [];
	Object.keys(y).forEach((e) => {
		let g = 0;
		for (let _ = 0; _ < y[e].length; ++_) g += y[e][_].size * y[e][_].weight;
		b.push({
			set: e,
			size: g
		});
	});
	function x(e, g) {
		return g.size - e.size;
	}
	b.sort(x);
	let S = {};
	function C(e) {
		return e.set in S;
	}
	function w(e, g) {
		v[g].x = e.x, v[g].y = e.y, S[g] = !0;
	}
	w({
		x: 0,
		y: 0
	}, b[0].set);
	for (let g = 1; g < b.length; ++g) {
		let S = b[g].set, E = y[S].filter(C), D = v[S];
		if (E.sort(x), E.length === 0) throw "ERROR: missing pairwise overlap information";
		let O = [];
		for (var T = 0; T < E.length; ++T) {
			let e = v[E[T].set], g = distanceFromIntersectArea(D.radius, e.radius, E[T].size);
			O.push({
				x: e.x + g,
				y: e.y
			}), O.push({
				x: e.x - g,
				y: e.y
			}), O.push({
				y: e.y + g,
				x: e.x
			}), O.push({
				y: e.y - g,
				x: e.x
			});
			for (let _ = T + 1; _ < E.length; ++_) {
				let y = v[E[_].set], b = distanceFromIntersectArea(D.radius, y.radius, E[_].size), x = circleCircleIntersection({
					x: e.x,
					y: e.y,
					radius: g
				}, {
					x: y.x,
					y: y.y,
					radius: b
				});
				O.push(...x);
			}
		}
		let k = 1e50, A = O[0];
		for (let g of O) {
			v[S].x = g.x, v[S].y = g.y;
			let y = _(v, e);
			y < k && (k = y, A = g);
		}
		w(A, S);
	}
	return v;
}
function lossFunction(e, g) {
	let _ = 0;
	for (let v of g) {
		if (v.sets.length === 1) continue;
		let g;
		if (v.sets.length === 2) {
			let _ = e[v.sets[0]], y = e[v.sets[1]];
			g = circleOverlap(_.radius, y.radius, distance(_, y));
		} else g = intersectionArea(v.sets.map((g) => e[g]));
		let y = v.weight == null ? 1 : v.weight;
		_ += y * (g - v.size) * (g - v.size);
	}
	return _;
}
function logRatioLossFunction(e, g) {
	let _ = 0;
	for (let v of g) {
		if (v.sets.length === 1) continue;
		let g;
		if (v.sets.length === 2) {
			let _ = e[v.sets[0]], y = e[v.sets[1]];
			g = circleOverlap(_.radius, y.radius, distance(_, y));
		} else g = intersectionArea(v.sets.map((g) => e[g]));
		let y = v.weight == null ? 1 : v.weight, b = Math.log((g + 1) / (v.size + 1));
		_ += y * b * b;
	}
	return _;
}
function orientateCircles(e, g, _) {
	if (_ == null ? e.sort((e, g) => g.radius - e.radius) : e.sort(_), e.length > 0) {
		let g = e[0].x, _ = e[0].y;
		for (let v of e) v.x -= g, v.y -= _;
	}
	if (e.length === 2 && distance(e[0], e[1]) < Math.abs(e[1].radius - e[0].radius) && (e[1].x = e[0].x + e[0].radius - e[1].radius - 1e-10, e[1].y = e[0].y), e.length > 1) {
		let _ = Math.atan2(e[1].x, e[1].y) - g, v = Math.cos(_), y = Math.sin(_);
		for (let g of e) {
			let e = g.x, _ = g.y;
			g.x = v * e - y * _, g.y = y * e + v * _;
		}
	}
	if (e.length > 2) {
		let _ = Math.atan2(e[2].x, e[2].y) - g;
		for (; _ < 0;) _ += 2 * Math.PI;
		for (; _ > 2 * Math.PI;) _ -= 2 * Math.PI;
		if (_ > Math.PI) {
			let g = e[1].y / (1e-10 + e[1].x);
			for (let _ of e) {
				var v = (_.x + g * _.y) / (1 + g * g);
				_.x = 2 * v - _.x, _.y = 2 * v * g - _.y;
			}
		}
	}
}
function disjointCluster(e) {
	e.forEach((e) => {
		e.parent = e;
	});
	function g(e) {
		return e.parent !== e && (e.parent = g(e.parent)), e.parent;
	}
	function _(e, _) {
		let v = g(e);
		v.parent = g(_);
	}
	for (let g = 0; g < e.length; ++g) for (let v = g + 1; v < e.length; ++v) {
		let y = e[g].radius + e[v].radius;
		distance(e[g], e[v]) + 1e-10 < y && _(e[v], e[g]);
	}
	let v = /* @__PURE__ */ new Map();
	for (let _ = 0; _ < e.length; ++_) {
		let y = g(e[_]).parent.setid;
		v.has(y) || v.set(y, []), v.get(y).push(e[_]);
	}
	return e.forEach((e) => {
		delete e.parent;
	}), Array.from(v.values());
}
function getBoundingBox(e) {
	let g = (g) => ({
		max: e.reduce((e, _) => Math.max(e, _[g] + _.radius), -Infinity),
		min: e.reduce((e, _) => Math.min(e, _[g] - _.radius), Infinity)
	});
	return {
		xRange: g("x"),
		yRange: g("y")
	};
}
function normalizeSolution(e, g, _) {
	g ??= Math.PI / 2;
	let v = fromObjectNotation(e).map((e) => Object.assign({}, e)), y = disjointCluster(v);
	for (let e of y) {
		orientateCircles(e, g, _);
		let v = getBoundingBox(e);
		e.size = (v.xRange.max - v.xRange.min) * (v.yRange.max - v.yRange.min), e.bounds = v;
	}
	y.sort((e, g) => g.size - e.size), v = y[0];
	let b = v.bounds, x = (b.xRange.max - b.xRange.min) / 50;
	function S(e, g, _) {
		if (!e) return;
		let y = e.bounds, S, C;
		if (g) S = b.xRange.max - y.xRange.min + x;
		else {
			S = b.xRange.max - y.xRange.max;
			let e = (y.xRange.max - y.xRange.min) / 2 - (b.xRange.max - b.xRange.min) / 2;
			e < 0 && (S += e);
		}
		if (_) C = b.yRange.max - y.yRange.min + x;
		else {
			C = b.yRange.max - y.yRange.max;
			let e = (y.yRange.max - y.yRange.min) / 2 - (b.yRange.max - b.yRange.min) / 2;
			e < 0 && (C += e);
		}
		for (let g of e) g.x += S, g.y += C, v.push(g);
	}
	let C = 1;
	for (; C < y.length;) S(y[C], !0, !1), S(y[C + 1], !1, !0), S(y[C + 2], !0, !0), C += 3, b = getBoundingBox(v);
	return toObjectNotation(v);
}
function scaleSolution(e, g, _, v, y) {
	let b = fromObjectNotation(e);
	g -= 2 * v, _ -= 2 * v;
	let { xRange: x, yRange: S } = getBoundingBox(b);
	if (x.max === x.min || S.max === S.min) return console.log("not scaling solution: zero size detected"), e;
	let C, w;
	if (y) {
		let e = Math.sqrt(y / Math.PI) * 2;
		C = g / e, w = _ / e;
	} else C = g / (x.max - x.min), w = _ / (S.max - S.min);
	let T = Math.min(w, C), E = (g - (x.max - x.min) * T) / 2, D = (_ - (S.max - S.min) * T) / 2;
	return toObjectNotation(b.map((e) => ({
		radius: T * e.radius,
		x: v + E + (e.x - x.min) * T,
		y: v + D + (e.y - S.min) * T,
		setid: e.setid
	})));
}
function toObjectNotation(e) {
	let g = {};
	for (let _ of e) g[_.setid] = _;
	return g;
}
function fromObjectNotation(e) {
	return Object.keys(e).map((g) => Object.assign(e[g], { setid: g }));
}
function VennDiagram(e = {}) {
	let g = !1, _ = 600, v = 350, y = 15, b = 1e3, x = Math.PI / 2, S = !0, C = null, w = !0, T = !0, E = null, D = null, O = !1, k = null, A = e && e.symmetricalTextCentre ? e.symmetricalTextCentre : !1, j = {}, M = e && e.colourScheme ? e.colourScheme : e && e.colorScheme ? e.colorScheme : [
		"#1f77b4",
		"#ff7f0e",
		"#2ca02c",
		"#d62728",
		"#9467bd",
		"#8c564b",
		"#e377c2",
		"#7f7f7f",
		"#bcbd22",
		"#17becf"
	], N = 0, P = function(e) {
		if (e in j) return j[e];
		var g = j[e] = M[N];
		return N += 1, N >= M.length && (N = 0), g;
	}, F = venn, I = lossFunction;
	function L(j) {
		let M = j.datum(), N = /* @__PURE__ */ new Set();
		M.forEach((e) => {
			e.size == 0 && e.sets.length == 1 && N.add(e.sets[0]);
		}), M = M.filter((e) => !e.sets.some((e) => N.has(e)));
		let L = {}, R = {};
		if (M.length > 0) {
			let e = F(M, {
				lossFunction: I,
				distinct: O
			});
			S && (e = normalizeSolution(e, x, D)), L = scaleSolution(e, _, v, y, C), R = computeTextCentres(L, M, A);
		}
		let z = {};
		M.forEach((e) => {
			e.label && (z[e.sets] = e.label);
		});
		function B(e) {
			if (e.sets in z) return z[e.sets];
			if (e.sets.length == 1) return "" + e.sets[0];
		}
		j.selectAll("svg").data([L]).enter().append("svg");
		let V = j.select("svg");
		g ? V.attr("viewBox", `0 0 ${_} ${v}`) : V.attr("width", _).attr("height", v);
		let H = {}, U = !1;
		V.selectAll(".venn-area path").each(function(e) {
			let g = this.getAttribute("d");
			e.sets.length == 1 && g && !O && (U = !0, H[e.sets[0]] = circleFromPath(g));
		});
		function W(e) {
			return (g) => intersectionAreaPath(e.sets.map((e) => {
				let y = H[e], b = L[e];
				return y ||= {
					x: _ / 2,
					y: v / 2,
					radius: 1
				}, b ||= {
					x: _ / 2,
					y: v / 2,
					radius: 1
				}, {
					x: y.x * (1 - g) + b.x * g,
					y: y.y * (1 - g) + b.y * g,
					radius: y.radius * (1 - g) + b.radius * g
				};
			}), k);
		}
		let G = V.selectAll(".venn-area").data(M, (e) => e.sets), K = G.enter().append("g").attr("class", (e) => `venn-area venn-${e.sets.length == 1 ? "circle" : "intersection"}${e.colour || e.color ? " venn-coloured" : ""}`).attr("data-venn-sets", (e) => e.sets.join("_")), q = K.append("path"), J = K.append("text").attr("class", "label").text((e) => B(e)).attr("text-anchor", "middle").attr("dy", ".35em").attr("x", _ / 2).attr("y", v / 2);
		T && (q.style("fill-opacity", "0").filter((e) => e.sets.length == 1).style("fill", (e) => e.colour ? e.colour : e.color ? e.color : P(e.sets)).style("fill-opacity", ".25"), J.style("fill", (g) => g.colour || g.color ? "#FFF" : e.textFill ? e.textFill : g.sets.length == 1 ? P(g.sets) : "#444"));
		function Y(e) {
			return typeof e.transition == "function" ? e.transition("venn").duration(b) : e;
		}
		let X = j;
		U && typeof X.transition == "function" ? (X = Y(j), X.selectAll("path").attrTween("d", W)) : X.selectAll("path").attr("d", (e) => intersectionAreaPath(e.sets.map((e) => L[e])), k);
		let Z = X.selectAll("text").filter((e) => e.sets in R).text((e) => B(e)).attr("x", (e) => Math.floor(R[e.sets].x)).attr("y", (e) => Math.floor(R[e.sets].y));
		w && (U ? "on" in Z ? Z.on("end", wrapText(L, B)) : Z.each("end", wrapText(L, B)) : Z.each(wrapText(L, B)));
		let Q = Y(G.exit()).remove();
		typeof G.transition == "function" && Q.selectAll("path").attrTween("d", W);
		let $ = Q.selectAll("text").attr("x", _ / 2).attr("y", v / 2);
		return E !== null && (J.style("font-size", "0px"), Z.style("font-size", E), $.style("font-size", "0px")), {
			circles: L,
			textCentres: R,
			nodes: G,
			enter: K,
			update: X,
			exit: Q
		};
	}
	return L.wrap = function(e) {
		return arguments.length ? (w = e, L) : w;
	}, L.useViewBox = function() {
		return g = !0, L;
	}, L.width = function(e) {
		return arguments.length ? (_ = e, L) : _;
	}, L.height = function(e) {
		return arguments.length ? (v = e, L) : v;
	}, L.padding = function(e) {
		return arguments.length ? (y = e, L) : y;
	}, L.distinct = function(e) {
		return arguments.length ? (O = e, L) : O;
	}, L.colours = function(e) {
		return arguments.length ? (P = e, L) : P;
	}, L.colors = function(e) {
		return arguments.length ? (P = e, L) : P;
	}, L.fontSize = function(e) {
		return arguments.length ? (E = e, L) : E;
	}, L.round = function(e) {
		return arguments.length ? (k = e, L) : k;
	}, L.duration = function(e) {
		return arguments.length ? (b = e, L) : b;
	}, L.layoutFunction = function(e) {
		return arguments.length ? (F = e, L) : F;
	}, L.normalize = function(e) {
		return arguments.length ? (S = e, L) : S;
	}, L.scaleToFit = function(e) {
		return arguments.length ? (C = e, L) : C;
	}, L.styled = function(e) {
		return arguments.length ? (T = e, L) : T;
	}, L.orientation = function(e) {
		return arguments.length ? (x = e, L) : x;
	}, L.orientationOrder = function(e) {
		return arguments.length ? (D = e, L) : D;
	}, L.lossFunction = function(e) {
		return arguments.length ? (I = e === "default" ? lossFunction : e === "logRatio" ? logRatioLossFunction : e, L) : I;
	}, L;
}
function wrapText(e, g) {
	return function(_) {
		let v = this, y = e[_.sets[0]].radius || 50, b = g(_) || "", x = b.split(/\s+/).reverse(), S = (b.length + x.length) / 3, C = x.pop(), w = [C], T = 0, E = 1.1;
		v.textContent = null;
		let D = [];
		function O(e) {
			let g = v.ownerDocument.createElementNS(v.namespaceURI, "tspan");
			return g.textContent = e, D.push(g), v.append(g), g;
		}
		let k = O(C);
		for (; C = x.pop(), C;) {
			w.push(C);
			let e = w.join(" ");
			k.textContent = e, e.length > S && k.getComputedTextLength() > y && (w.pop(), k.textContent = w.join(" "), w = [C], k = O(C), T++);
		}
		let A = .35 - T * E / 2, j = v.getAttribute("x"), M = v.getAttribute("y");
		D.forEach((e, g) => {
			e.setAttribute("x", j), e.setAttribute("y", M), e.setAttribute("dy", `${A + g * E}em`);
		});
	};
}
function circleMargin(e, g, _) {
	let v = g[0].radius - distance(g[0], e);
	for (let _ = 1; _ < g.length; ++_) {
		let y = g[_].radius - distance(g[_], e);
		y <= v && (v = y);
	}
	for (let g = 0; g < _.length; ++g) {
		let y = distance(_[g], e) - _[g].radius;
		y <= v && (v = y);
	}
	return v;
}
function computeTextCentre(e, g, _) {
	let v = [];
	for (let g of e) v.push({
		x: g.x,
		y: g.y
	}), v.push({
		x: g.x + g.radius / 2,
		y: g.y
	}), v.push({
		x: g.x - g.radius / 2,
		y: g.y
	}), v.push({
		x: g.x,
		y: g.y + g.radius / 2
	}), v.push({
		x: g.x,
		y: g.y - g.radius / 2
	});
	let y = v[0], b = circleMargin(v[0], e, g);
	for (let _ = 1; _ < v.length; ++_) {
		let x = circleMargin(v[_], e, g);
		x >= b && (y = v[_], b = x);
	}
	let x = nelderMead((_) => -1 * circleMargin({
		x: _[0],
		y: _[1]
	}, e, g), [y.x, y.y], {
		maxIterations: 500,
		minErrorDelta: 1e-10
	}).x, S = {
		x: _ ? 0 : x[0],
		y: x[1]
	}, C = !0;
	for (let g of e) if (distance(S, g) > g.radius) {
		C = !1;
		break;
	}
	for (let e of g) if (distance(S, e) < e.radius) {
		C = !1;
		break;
	}
	if (C) return S;
	if (e.length == 1) return {
		x: e[0].x,
		y: e[0].y
	};
	let w = {};
	return intersectionArea(e, w), w.arcs.length === 0 ? {
		x: 0,
		y: -1e3,
		disjoint: !0
	} : w.arcs.length == 1 ? {
		x: w.arcs[0].circle.x,
		y: w.arcs[0].circle.y
	} : g.length ? computeTextCentre(e, []) : getCenter(w.arcs.map((e) => e.p1));
}
function getOverlappingCircles(e) {
	let g = {}, _ = Object.keys(e);
	for (let e of _) g[e] = [];
	for (let v = 0; v < _.length; v++) {
		let y = _[v], b = e[y];
		for (let x = v + 1; x < _.length; ++x) {
			let v = _[x], S = e[v], C = distance(b, S);
			C + S.radius <= b.radius + 1e-10 ? g[v].push(y) : C + b.radius <= S.radius + 1e-10 && g[y].push(v);
		}
	}
	return g;
}
function computeTextCentres(e, g, _) {
	let v = {}, y = getOverlappingCircles(e);
	for (let b = 0; b < g.length; ++b) {
		let x = g[b].sets, S = {}, C = {};
		for (let e = 0; e < x.length; ++e) {
			S[x[e]] = !0;
			let g = y[x[e]];
			for (let e = 0; e < g.length; ++e) C[g[e]] = !0;
		}
		let w = [], T = [];
		for (let g in e) g in S ? w.push(e[g]) : g in C || T.push(e[g]);
		let E = computeTextCentre(w, T, _);
		v[x] = E, E.disjoint && g[b].size > 0 && console.log("WARNING: area " + x + " not represented on screen");
	}
	return v;
}
function circlePath(e, g, _) {
	let v = [];
	return v.push("\nM", e, g), v.push("\nm", -_, 0), v.push("\na", _, _, 0, 1, 0, _ * 2, 0), v.push("\na", _, _, 0, 1, 0, -_ * 2, 0), v.join(" ");
}
function circleFromPath(e) {
	let g = e.split(" ");
	return {
		x: Number.parseFloat(g[1]),
		y: Number.parseFloat(g[2]),
		radius: -Number.parseFloat(g[4])
	};
}
function intersectionAreaArcs(e) {
	if (e.length === 0) return [];
	let g = {};
	return intersectionArea(e, g), g.arcs;
}
function arcsToPath(e, g) {
	if (e.length === 0) return "M 0 0";
	let _ = 10 ** (g || 0), v = g == null ? (e) => e : (e) => Math.round(e * _) / _;
	if (e.length == 1) {
		let g = e[0].circle;
		return circlePath(v(g.x), v(g.y), v(g.radius));
	}
	let y = [
		"\nM",
		v(e[0].p2.x),
		v(e[0].p2.y)
	];
	for (let g of e) {
		let e = v(g.circle.radius);
		y.push("\nA", e, e, 0, g.large ? 1 : 0, g.sweep ? 1 : 0, v(g.p1.x), v(g.p1.y));
	}
	return y.join(" ");
}
function intersectionAreaPath(e, g) {
	return arcsToPath(intersectionAreaArcs(e), g);
}
function layout(e, g = {}) {
	let { lossFunction: _, layoutFunction: v = venn, normalize: y = !0, orientation: b = Math.PI / 2, orientationOrder: x, width: S = 600, height: C = 350, padding: w = 15, scaleToFit: T = !1, symmetricalTextCentre: E = !1, distinct: D, round: O = 2 } = g, k = v(e, {
		lossFunction: _ === "default" || !_ ? lossFunction : _ === "logRatio" ? logRatioLossFunction : _,
		distinct: D
	});
	y && (k = normalizeSolution(k, b, x));
	let A = scaleSolution(k, S, C, w, T), j = computeTextCentres(A, e, E), M = new Map(Object.keys(A).map((e) => [e, {
		set: e,
		x: A[e].x,
		y: A[e].y,
		radius: A[e].radius
	}])), N = e.map((e) => {
		let g = e.sets.map((e) => M.get(e)), _ = intersectionAreaArcs(g);
		return {
			circles: g,
			arcs: _,
			path: arcsToPath(_, O),
			area: e,
			has: new Set(e.sets)
		};
	});
	function P(e) {
		let g = "";
		for (let _ of N) _.has.size > e.length && e.every((e) => _.has.has(e)) && (g += " " + _.path);
		return g;
	}
	return N.map(({ circles: e, arcs: g, path: _, area: v }) => ({
		data: v,
		text: j[v.sets],
		circles: e,
		arcs: g,
		path: _,
		distinctPath: _ + P(v.sets)
	}));
}
var parser = (function() {
	var g = /* @__PURE__ */ __name(function(e, g, _, v) {
		for (_ ||= {}, v = e.length; v--; _[e[v]] = g);
		return _;
	}, "o"), _ = [5, 8], v = [
		7,
		8,
		11,
		12,
		17,
		19,
		22,
		24
	], y = [1, 17], b = [1, 18], x = [
		7,
		8,
		11,
		12,
		14,
		15,
		16,
		17,
		19,
		20,
		21,
		22,
		24,
		27
	], S = [1, 31], C = [1, 39], w = [
		7,
		8,
		11,
		12,
		17,
		19,
		22,
		24,
		27
	], T = [1, 57], E = [1, 56], D = [1, 58], O = [1, 59], k = [1, 60], A = [
		7,
		8,
		11,
		12,
		16,
		17,
		19,
		20,
		22,
		24,
		27,
		31,
		32,
		33
	], j = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			optNewlines: 4,
			VENN: 5,
			document: 6,
			EOF: 7,
			NEWLINE: 8,
			line: 9,
			statement: 10,
			TITLE: 11,
			SET: 12,
			identifier: 13,
			BRACKET_LABEL: 14,
			COLON: 15,
			NUMERIC: 16,
			UNION: 17,
			identifierList: 18,
			TEXT: 19,
			IDENTIFIER: 20,
			STRING: 21,
			INDENT_TEXT: 22,
			indentedTextTail: 23,
			STYLE: 24,
			stylesOpt: 25,
			styleField: 26,
			COMMA: 27,
			styleValue: 28,
			valueTokens: 29,
			valueToken: 30,
			HEXCOLOR: 31,
			RGBCOLOR: 32,
			RGBACOLOR: 33,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			5: "VENN",
			7: "EOF",
			8: "NEWLINE",
			11: "TITLE",
			12: "SET",
			14: "BRACKET_LABEL",
			15: "COLON",
			16: "NUMERIC",
			17: "UNION",
			19: "TEXT",
			20: "IDENTIFIER",
			21: "STRING",
			22: "INDENT_TEXT",
			24: "STYLE",
			27: "COMMA",
			31: "HEXCOLOR",
			32: "RGBCOLOR",
			33: "RGBACOLOR"
		},
		productions_: [
			0,
			[3, 4],
			[4, 0],
			[4, 2],
			[6, 0],
			[6, 2],
			[9, 1],
			[9, 1],
			[10, 1],
			[10, 2],
			[10, 3],
			[10, 4],
			[10, 5],
			[10, 2],
			[10, 3],
			[10, 4],
			[10, 5],
			[10, 3],
			[10, 3],
			[10, 3],
			[10, 4],
			[10, 4],
			[10, 2],
			[10, 3],
			[23, 1],
			[23, 1],
			[23, 1],
			[23, 2],
			[23, 2],
			[25, 1],
			[25, 3],
			[26, 3],
			[28, 1],
			[28, 1],
			[29, 1],
			[29, 2],
			[30, 1],
			[30, 1],
			[30, 1],
			[30, 1],
			[30, 1],
			[18, 1],
			[18, 3],
			[13, 1],
			[13, 1]
		],
		performAction: /* @__PURE__ */ __name(function(e, g, _, v, y, b, x) {
			var S = b.length - 1;
			switch (y) {
				case 1: return b[S - 1];
				case 2:
				case 3:
				case 4:
					this.$ = [];
					break;
				case 5:
					b[S - 1].push(b[S]), this.$ = b[S - 1];
					break;
				case 6:
					this.$ = [];
					break;
				case 7:
				case 22:
				case 32:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
					this.$ = b[S];
					break;
				case 8:
					v.setDiagramTitle(b[S].substr(6)), this.$ = b[S].substr(6);
					break;
				case 9:
					v.addSubsetData([b[S]], void 0, void 0), v.setIndentMode && v.setIndentMode(!0);
					break;
				case 10:
					v.addSubsetData([b[S - 1]], b[S], void 0), v.setIndentMode && v.setIndentMode(!0);
					break;
				case 11:
					v.addSubsetData([b[S - 2]], void 0, parseFloat(b[S])), v.setIndentMode && v.setIndentMode(!0);
					break;
				case 12:
					v.addSubsetData([b[S - 3]], b[S - 2], parseFloat(b[S])), v.setIndentMode && v.setIndentMode(!0);
					break;
				case 13:
					if (b[S].length < 2) throw Error("union requires multiple identifiers");
					v.validateUnionIdentifiers && v.validateUnionIdentifiers(b[S]), v.addSubsetData(b[S], void 0, void 0), v.setIndentMode && v.setIndentMode(!0);
					break;
				case 14:
					if (b[S - 1].length < 2) throw Error("union requires multiple identifiers");
					v.validateUnionIdentifiers && v.validateUnionIdentifiers(b[S - 1]), v.addSubsetData(b[S - 1], b[S], void 0), v.setIndentMode && v.setIndentMode(!0);
					break;
				case 15:
					if (b[S - 2].length < 2) throw Error("union requires multiple identifiers");
					v.validateUnionIdentifiers && v.validateUnionIdentifiers(b[S - 2]), v.addSubsetData(b[S - 2], void 0, parseFloat(b[S])), v.setIndentMode && v.setIndentMode(!0);
					break;
				case 16:
					if (b[S - 3].length < 2) throw Error("union requires multiple identifiers");
					v.validateUnionIdentifiers && v.validateUnionIdentifiers(b[S - 3]), v.addSubsetData(b[S - 3], b[S - 2], parseFloat(b[S])), v.setIndentMode && v.setIndentMode(!0);
					break;
				case 17:
				case 18:
				case 19:
					v.addTextData(b[S - 1], b[S], void 0);
					break;
				case 20:
				case 21:
					v.addTextData(b[S - 2], b[S - 1], b[S]);
					break;
				case 23:
					v.addStyleData(b[S - 1], b[S]);
					break;
				case 24:
				case 25:
				case 26:
					var C = v.getCurrentSets();
					if (!C) throw Error("text requires set");
					v.addTextData(C, b[S], void 0);
					break;
				case 27:
				case 28:
					var C = v.getCurrentSets();
					if (!C) throw Error("text requires set");
					v.addTextData(C, b[S - 1], b[S]);
					break;
				case 29:
				case 41:
					this.$ = [b[S]];
					break;
				case 30:
				case 42:
					this.$ = [...b[S - 2], b[S]];
					break;
				case 31:
					this.$ = [b[S - 2], b[S]];
					break;
				case 33:
					this.$ = b[S].join(" ");
					break;
				case 34:
					this.$ = [b[S]];
					break;
				case 35:
					b[S - 1].push(b[S]), this.$ = b[S - 1];
					break;
				case 43:
				case 44:
					this.$ = b[S];
					break;
			}
		}, "anonymous"),
		table: [
			g(_, [2, 2], {
				3: 1,
				4: 2
			}),
			{ 1: [3] },
			{
				5: [1, 3],
				8: [1, 4]
			},
			g(v, [2, 4], { 6: 5 }),
			g(_, [2, 3]),
			{
				7: [1, 6],
				8: [1, 8],
				9: 7,
				10: 9,
				11: [1, 10],
				12: [1, 11],
				17: [1, 12],
				19: [1, 13],
				22: [1, 14],
				24: [1, 15]
			},
			{ 1: [2, 1] },
			g(v, [2, 5]),
			g(v, [2, 6]),
			g(v, [2, 7]),
			g(v, [2, 8]),
			{
				13: 16,
				20: y,
				21: b
			},
			{
				13: 20,
				18: 19,
				20: y,
				21: b
			},
			{
				13: 20,
				18: 21,
				20: y,
				21: b
			},
			{
				16: [1, 25],
				20: [1, 23],
				21: [1, 24],
				23: 22
			},
			{
				13: 20,
				18: 26,
				20: y,
				21: b
			},
			g(v, [2, 9], {
				14: [1, 27],
				15: [1, 28]
			}),
			g(x, [2, 43]),
			g(x, [2, 44]),
			g(v, [2, 13], {
				14: [1, 29],
				15: [1, 30],
				27: S
			}),
			g(x, [2, 41]),
			{
				16: [1, 34],
				20: [1, 32],
				21: [1, 33],
				27: S
			},
			g(v, [2, 22]),
			g(v, [2, 24], { 14: [1, 35] }),
			g(v, [2, 25], { 14: [1, 36] }),
			g(v, [2, 26]),
			{
				20: C,
				25: 37,
				26: 38,
				27: S
			},
			g(v, [2, 10], { 15: [1, 40] }),
			{ 16: [1, 41] },
			g(v, [2, 14], { 15: [1, 42] }),
			{ 16: [1, 43] },
			{
				13: 44,
				20: y,
				21: b
			},
			g(v, [2, 17], { 14: [1, 45] }),
			g(v, [2, 18], { 14: [1, 46] }),
			g(v, [2, 19]),
			g(v, [2, 27]),
			g(v, [2, 28]),
			g(v, [2, 23], { 27: [1, 47] }),
			g(w, [2, 29]),
			{ 15: [1, 48] },
			{ 16: [1, 49] },
			g(v, [2, 11]),
			{ 16: [1, 50] },
			g(v, [2, 15]),
			g(x, [2, 42]),
			g(v, [2, 20]),
			g(v, [2, 21]),
			{
				20: C,
				26: 51
			},
			{
				16: T,
				20: E,
				21: [1, 53],
				28: 52,
				29: 54,
				30: 55,
				31: D,
				32: O,
				33: k
			},
			g(v, [2, 12]),
			g(v, [2, 16]),
			g(w, [2, 30]),
			g(w, [2, 31]),
			g(w, [2, 32]),
			g(w, [2, 33], {
				30: 61,
				16: T,
				20: E,
				31: D,
				32: O,
				33: k
			}),
			g(A, [2, 34]),
			g(A, [2, 36]),
			g(A, [2, 37]),
			g(A, [2, 38]),
			g(A, [2, 39]),
			g(A, [2, 40]),
			g(A, [2, 35])
		],
		defaultActions: { 6: [2, 1] },
		parseError: /* @__PURE__ */ __name(function(e, g) {
			if (g.recoverable) this.trace(e);
			else {
				var _ = Error(e);
				throw _.hash = g, _;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(g) {
			var _ = this, v = [0], y = [], b = [null], x = [], S = this.table, C = "", w = 0, T = 0, E = 0, D = 2, O = 1, k = x.slice.call(arguments, 1), A = Object.create(this.lexer), j = { yy: {} };
			for (var M in this.yy) Object.prototype.hasOwnProperty.call(this.yy, M) && (j.yy[M] = this.yy[M]);
			A.setInput(g, j.yy), j.yy.lexer = A, j.yy.parser = this, A.yylloc === void 0 && (A.yylloc = {});
			var N = A.yylloc;
			x.push(N);
			var P = A.options && A.options.ranges;
			typeof j.yy.parseError == "function" ? this.parseError = j.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function F(e) {
				v.length -= 2 * e, b.length -= e, x.length -= e;
			}
			__name(F, "popStack");
			function I() {
				var e = y.pop() || A.lex() || O;
				return typeof e != "number" && (e instanceof Array && (y = e, e = y.pop()), e = _.symbols_[e] || e), e;
			}
			__name(I, "lex");
			for (var L, R, z, B, V, H = {}, U, W, G, K;;) {
				if (z = v[v.length - 1], this.defaultActions[z] ? B = this.defaultActions[z] : (L ??= I(), B = S[z] && S[z][L]), B === void 0 || !B.length || !B[0]) {
					var q = "";
					for (U in K = [], S[z]) this.terminals_[U] && U > D && K.push("'" + this.terminals_[U] + "'");
					q = A.showPosition ? "Parse error on line " + (w + 1) + ":\n" + A.showPosition() + "\nExpecting " + K.join(", ") + ", got '" + (this.terminals_[L] || L) + "'" : "Parse error on line " + (w + 1) + ": Unexpected " + (L == O ? "end of input" : "'" + (this.terminals_[L] || L) + "'"), this.parseError(q, {
						text: A.match,
						token: this.terminals_[L] || L,
						line: A.yylineno,
						loc: N,
						expected: K
					});
				}
				if (B[0] instanceof Array && B.length > 1) throw Error("Parse Error: multiple actions possible at state: " + z + ", token: " + L);
				switch (B[0]) {
					case 1:
						v.push(L), b.push(A.yytext), x.push(A.yylloc), v.push(B[1]), L = null, R ? (L = R, R = null) : (T = A.yyleng, C = A.yytext, w = A.yylineno, N = A.yylloc, E > 0 && E--);
						break;
					case 2:
						if (W = this.productions_[B[1]][1], H.$ = b[b.length - W], H._$ = {
							first_line: x[x.length - (W || 1)].first_line,
							last_line: x[x.length - 1].last_line,
							first_column: x[x.length - (W || 1)].first_column,
							last_column: x[x.length - 1].last_column
						}, P && (H._$.range = [x[x.length - (W || 1)].range[0], x[x.length - 1].range[1]]), V = this.performAction.apply(H, [
							C,
							T,
							w,
							j.yy,
							B[1],
							b,
							x
						].concat(k)), V !== void 0) return V;
						W && (v = v.slice(0, -1 * W * 2), b = b.slice(0, -1 * W), x = x.slice(0, -1 * W)), v.push(this.productions_[B[1]][0]), b.push(H.$), x.push(H._$), G = S[v[v.length - 2]][v[v.length - 1]], v.push(G);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	j.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(e, g) {
				if (this.yy.parser) this.yy.parser.parseError(e, g);
				else throw Error(e);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(e, g) {
				return this.yy = g || this.yy || {}, this._input = e, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
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
				var g = e.length, _ = e.split(/(?:\r\n?|\n)/g);
				this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g), this.offset -= g;
				var v = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), _.length - 1 && (this.yylineno -= _.length - 1);
				var y = this.yylloc.range;
				return this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: _ ? (_.length === v.length ? this.yylloc.first_column : 0) + v[v.length - _.length].length - _[0].length : this.yylloc.first_column - g
				}, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - g]), this.yyleng = this.yytext.length, this;
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
				var e = this.pastInput(), g = Array(e.length + 1).join("-");
				return e + this.upcomingInput() + "\n" + g + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(e, g) {
				var _, v, y;
				if (this.options.backtrack_lexer && (y = {
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
				}, this.options.ranges && (y.yylloc.range = this.yylloc.range.slice(0))), v = e[0].match(/(?:\r\n?|\n).*/g), v && (this.yylineno += v.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: v ? v[v.length - 1].length - v[v.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
				}, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], _ = this.performAction.call(this, this.yy, this, g, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), _) return _;
				if (this._backtrack) {
					for (var b in y) this[b] = y[b];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var e, g, _, v;
				this._more || (this.yytext = "", this.match = "");
				for (var y = this._currentRules(), b = 0; b < y.length; b++) if (_ = this._input.match(this.rules[y[b]]), _ && (!g || _[0].length > g[0].length)) {
					if (g = _, v = b, this.options.backtrack_lexer) {
						if (e = this.test_match(_, y[b]), e !== !1) return e;
						if (this._backtrack) {
							g = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return g ? (e = this.test_match(g, y[v]), e === !1 ? !1 : e) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
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
			performAction: /* @__PURE__ */ __name(function(e, g, _, v) {
				switch (_) {
					case 0: break;
					case 1: break;
					case 2: break;
					case 3:
						if (e.getIndentMode && e.getIndentMode()) return e.consumeIndentText = !0, this.begin("INITIAL"), 22;
						break;
					case 4: break;
					case 5:
						e.setIndentMode && e.setIndentMode(!1), this.begin("INITIAL"), this.unput(g.yytext);
						break;
					case 6: return this.begin("bol"), 8;
					case 7: break;
					case 8: break;
					case 9: return 7;
					case 10: return 11;
					case 11: return 5;
					case 12: return 12;
					case 13: return 17;
					case 14:
						if (e.consumeIndentText) e.consumeIndentText = !1;
						else return 19;
						break;
					case 15: return 24;
					case 16: return g.yytext = g.yytext.slice(2, -2), 14;
					case 17: return g.yytext = g.yytext.slice(1, -1).trim(), 14;
					case 18: return 16;
					case 19: return 31;
					case 20: return 33;
					case 21: return 32;
					case 22: return 20;
					case 23: return 21;
					case 24: return 27;
					case 25: return 15;
				}
			}, "anonymous"),
			rules: [
				/^(?:%%(?!\{)[^\n]*)/i,
				/^(?:[^\}]%%[^\n]*)/i,
				/^(?:[ \t]+(?=[\n\r]))/i,
				/^(?:[ \t]+(?=text\b))/i,
				/^(?:[ \t]+)/i,
				/^(?:[^ \t\n\r])/i,
				/^(?:[\n\r]+)/i,
				/^(?:%%[^\n]*)/i,
				/^(?:[ \t]+)/i,
				/^(?:$)/i,
				/^(?:title\s[^#\n;]+)/i,
				/^(?:venn-beta\b)/i,
				/^(?:set\b)/i,
				/^(?:union\b)/i,
				/^(?:text\b)/i,
				/^(?:style\b)/i,
				/^(?:\["[^\"]*"\])/i,
				/^(?:\[[^\]\"]+\])/i,
				/^(?:[+-]?(\d+(\.\d+)?|\.\d+))/i,
				/^(?:#[0-9a-fA-F]{3,8})/i,
				/^(?:rgba\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i,
				/^(?:rgb\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i,
				/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,
				/^(?:"[^\"]*")/i,
				/^(?:,)/i,
				/^(?::)/i
			],
			conditions: {
				bol: {
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
						10,
						11,
						12,
						13,
						14,
						15,
						16,
						17,
						18,
						19,
						20,
						21,
						22,
						23,
						24,
						25
					],
					inclusive: !0
				},
				INITIAL: {
					rules: [
						0,
						1,
						6,
						7,
						8,
						9,
						10,
						11,
						12,
						13,
						14,
						15,
						16,
						17,
						18,
						19,
						20,
						21,
						22,
						23,
						24,
						25
					],
					inclusive: !0
				}
			}
		};
	})();
	function M() {
		this.yy = {};
	}
	return __name(M, "Parser"), M.prototype = j, j.Parser = M, new M();
})();
parser.parser = parser;
var venn_default = parser, subsets = [], textNodes = [], styleEntries = [], knownSets = /* @__PURE__ */ new Set(), currentSets, indentMode = !1, addSubsetData = /* @__PURE__ */ __name((e, g, _) => {
	let v = normalizeIdentifierList(e).sort(), y = _ ?? 10 / e.length ** 2;
	currentSets = v, v.length === 1 && knownSets.add(v[0]), subsets.push({
		sets: v,
		size: y,
		label: g ? normalizeText(g) : void 0
	});
}, "addSubsetData"), getSubsetData = /* @__PURE__ */ __name(() => subsets, "getSubsetData"), normalizeText = /* @__PURE__ */ __name((e) => {
	let g = e.trim();
	return g.length >= 2 && g.startsWith("\"") && g.endsWith("\"") ? g.slice(1, -1) : g;
}, "normalizeText"), normalizeStyleValue = /* @__PURE__ */ __name((e) => e && normalizeText(e), "normalizeStyleValue"), addTextData = /* @__PURE__ */ __name((e, g, _) => {
	let v = normalizeText(g);
	textNodes.push({
		sets: normalizeIdentifierList(e).sort(),
		id: v,
		label: _ ? normalizeText(_) : void 0
	});
}, "addTextData"), addStyleData = /* @__PURE__ */ __name((e, g) => {
	let _ = normalizeIdentifierList(e).sort(), v = {};
	for (let [e, _] of g) v[e] = normalizeStyleValue(_) ?? _;
	styleEntries.push({
		targets: _,
		styles: v
	});
}, "addStyleData"), getStyleData = /* @__PURE__ */ __name(() => styleEntries, "getStyleData"), normalizeIdentifierList = /* @__PURE__ */ __name((e) => e.map((e) => normalizeText(e)), "normalizeIdentifierList"), validateUnionIdentifiers = /* @__PURE__ */ __name((e) => {
	let g = normalizeIdentifierList(e).filter((e) => !knownSets.has(e));
	if (g.length > 0) throw Error(`unknown set identifier: ${g.join(", ")}`);
}, "validateUnionIdentifiers"), getTextData = /* @__PURE__ */ __name(() => textNodes, "getTextData"), getCurrentSets = /* @__PURE__ */ __name(() => currentSets, "getCurrentSets"), getIndentMode = /* @__PURE__ */ __name(() => indentMode, "getIndentMode"), setIndentMode = /* @__PURE__ */ __name((e) => {
	indentMode = e;
}, "setIndentMode"), DEFAULT_VENN_CONFIG = defaultConfig_default.venn;
function getConfig2() {
	return cleanAndMerge(DEFAULT_VENN_CONFIG, getConfig().venn);
}
__name(getConfig2, "getConfig");
var db = {
	getConfig: getConfig2,
	clear: /* @__PURE__ */ __name(() => {
		clear(), subsets.length = 0, textNodes.length = 0, styleEntries.length = 0, knownSets.clear(), currentSets = void 0, indentMode = !1;
	}, "customClear"),
	setAccTitle,
	getAccTitle,
	setDiagramTitle,
	getDiagramTitle,
	getAccDescription,
	setAccDescription,
	addSubsetData,
	getSubsetData,
	addTextData,
	addStyleData,
	validateUnionIdentifiers,
	getTextData,
	getStyleData,
	getCurrentSets,
	getIndentMode,
	setIndentMode
}, styles_default = /* @__PURE__ */ __name((e) => `
  .venn-title {
    font-size: 32px;
    fill: ${e.vennTitleTextColor};
    font-family: ${e.fontFamily};
  }

  .venn-circle text {
    font-size: 48px;
    font-family: ${e.fontFamily};
  }

  .venn-intersection text {
    font-size: 48px;
    fill: ${e.vennSetTextColor};
    font-family: ${e.fontFamily};
  }

  .venn-text-node {
    font-family: ${e.fontFamily};
    color: ${e.vennSetTextColor};
  }
`, "getStyles");
function buildStyleByKey(e) {
	let g = /* @__PURE__ */ new Map();
	for (let _ of e) {
		let e = _.targets.join("|"), v = g.get(e);
		v ? Object.assign(v, _.styles) : g.set(e, { ..._.styles });
	}
	return g;
}
__name(buildStyleByKey, "buildStyleByKey");
var draw = /* @__PURE__ */ __name((e, v, y, b) => {
	let x = b.db, T = x.getConfig?.(), { themeVariables: D, look: O, handDrawnSeed: k } = getConfig(), A = O === "handDrawn", j = [
		D.venn1,
		D.venn2,
		D.venn3,
		D.venn4,
		D.venn5,
		D.venn6,
		D.venn7,
		D.venn8
	].filter(Boolean), F = x.getDiagramTitle?.(), I = x.getSubsetData(), L = x.getTextData(), R = buildStyleByKey(x.getStyleData()), z = ensurePairwiseSubsets(I), B = T?.width ?? 800, V = T?.height ?? 450, H = B / 1600, U = F ? 48 * H : 0, W = D.primaryTextColor ?? D.textColor, G = selectSvgElement(v);
	G.attr("viewBox", `0 0 ${B} ${V}`), F && G.append("text").text(F).attr("class", "venn-title").attr("font-size", `${32 * H}px`).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("x", "50%").attr("y", 32 * H).style("fill", D.vennTitleTextColor || D.titleColor);
	let K = select_default(document.createElement("div")), q = VennDiagram().width(B).height(V - U);
	K.datum(z).call(q);
	let J = A ? at.svg(K.select("svg").node()) : void 0, Y = layout(z, {
		width: B,
		height: V - U,
		padding: T?.padding ?? 15
	}), X = /* @__PURE__ */ new Map();
	for (let e of Y) {
		let g = stableSetsKey([...e.data.sets].sort());
		X.set(g, e);
	}
	L.length > 0 && renderTextNodes(T, X, K, L, H, R);
	let Z = is_dark_default(D.background || "#f4f4f4");
	K.selectAll(".venn-circle").each(function(e, v) {
		let y = select_default(this), b = stableSetsKey([...e.sets].sort()), x = R.get(b), S = x?.fill || j[v % j.length] || D.primaryColor;
		y.classed(`venn-set-${v % 8}`, !0);
		let C = x?.["fill-opacity"] ?? .1, T = x?.stroke || S, E = x?.["stroke-width"] || `${5 * H}`;
		if (A && J) {
			let e = X.get(b);
			if (e && e.circles.length > 0) {
				let g = e.circles[0], _ = J.circle(g.x, g.y, g.radius * 2, {
					roughness: .7,
					seed: k,
					fill: transparentize_default(S, .7),
					fillStyle: "hachure",
					fillWeight: 2,
					hachureGap: 8,
					hachureAngle: -41 + v * 60,
					stroke: T,
					strokeWidth: parseFloat(String(E))
				});
				y.select("path").remove(), y.node()?.insertBefore(_, y.select("text").node());
			}
		} else y.select("path").style("fill", S).style("fill-opacity", C).style("stroke", T).style("stroke-width", E).style("stroke-opacity", .95);
		let O = x?.color || (Z ? lighten_default(S, 30) : darken_default(S, 30));
		y.select("text").style("font-size", `${48 * H}px`).style("fill", O);
	}), A && J ? K.selectAll(".venn-intersection").each(function(e) {
		let _ = select_default(this), v = stableSetsKey([...e.sets].sort()), y = R.get(v), b = y?.fill;
		if (b) {
			let e = _.select("path"), g = e.attr("d");
			if (g) {
				let _ = J.path(g, {
					roughness: .7,
					seed: k,
					fill: transparentize_default(b, .3),
					fillStyle: "cross-hatch",
					fillWeight: 2,
					hachureGap: 6,
					hachureAngle: 60,
					stroke: "none"
				}), v = e.node();
				v?.parentNode?.insertBefore(_, v), e.remove();
			}
		} else _.select("path").style("fill-opacity", 0);
		_.select("text").style("font-size", `${48 * H}px`).style("fill", y?.color ?? D.vennSetTextColor ?? W);
	}) : (K.selectAll(".venn-intersection text").style("font-size", `${48 * H}px`).style("fill", (e) => {
		let g = stableSetsKey([...e.sets].sort());
		return R.get(g)?.color ?? D.vennSetTextColor ?? W;
	}), K.selectAll(".venn-intersection path").style("fill-opacity", (e) => {
		let g = stableSetsKey([...e.sets].sort());
		return R.get(g)?.fill ? 1 : 0;
	}).style("fill", (e) => {
		let g = stableSetsKey([...e.sets].sort());
		return R.get(g)?.fill ?? "transparent";
	}));
	let Q = G.append("g").attr("transform", `translate(0, ${U})`), $ = K.select("svg").node();
	if ($ && "childNodes" in $) for (let e of [...$.childNodes]) Q.node()?.appendChild(e);
	configureSvgSize(G, V, B, T?.useMaxWidth ?? !0);
}, "draw");
function stableSetsKey(e) {
	return e.join("|");
}
__name(stableSetsKey, "stableSetsKey");
function renderTextNodes(e, g, _, v, y, b) {
	let x = e?.useDebugLayout ?? !1, S = _.select("svg").append("g").attr("class", "venn-text-nodes"), C = /* @__PURE__ */ new Map();
	for (let e of v) {
		let g = stableSetsKey(e.sets), _ = C.get(g);
		_ ? _.push(e) : C.set(g, [e]);
	}
	for (let [e, _] of C.entries()) {
		let v = g.get(e);
		if (!v?.text) continue;
		let C = v.text.x, w = v.text.y, T = Math.min(...v.circles.map((e) => e.radius)), E = Math.min(...v.circles.map((e) => e.radius - Math.hypot(C - e.x, w - e.y))), D = Number.isFinite(E) ? Math.max(0, E) : 0;
		D === 0 && Number.isFinite(T) && (D = T * .6);
		let O = S.append("g").attr("class", "venn-text-area").attr("font-size", `${40 * y}px`);
		x && O.append("circle").attr("class", "venn-text-debug-circle").attr("cx", C).attr("cy", w).attr("r", D).attr("fill", "none").attr("stroke", "purple").attr("stroke-width", 1.5 * y).attr("stroke-dasharray", `${6 * y} ${4 * y}`);
		let k = Math.max(80 * y, D * 2 * .95), A = Math.max(60 * y, D * 2 * .95), j = (v.data.label && v.data.label.length > 0 ? Math.min(32 * y, D * .25) : 0) + (_.length <= 2 ? 30 * y : 0), M = C - k / 2, N = w - A / 2 + j, P = Math.max(1, Math.ceil(Math.sqrt(_.length))), F = Math.max(1, Math.ceil(_.length / P)), I = k / P, L = A / F;
		for (let [e, g] of _.entries()) {
			let _ = e % P, v = Math.floor(e / P), S = M + I * (_ + .5), C = N + L * (v + .5);
			x && O.append("rect").attr("class", "venn-text-debug-cell").attr("x", M + I * _).attr("y", N + L * v).attr("width", I).attr("height", L).attr("fill", "none").attr("stroke", "teal").attr("stroke-width", 1 * y).attr("stroke-dasharray", `${4 * y} ${3 * y}`);
			let w = I * .9, T = L * .9, E = O.append("foreignObject").attr("class", "venn-text-node-fo").attr("width", w).attr("height", T).attr("x", S - w / 2).attr("y", C - T / 2).attr("overflow", "visible"), D = b.get(g.id)?.color, k = E.append("xhtml:span").attr("class", "venn-text-node").style("display", "flex").style("width", "100%").style("height", "100%").style("white-space", "normal").style("align-items", "center").style("justify-content", "center").style("text-align", "center").style("overflow-wrap", "normal").style("word-break", "normal").text(g.label ?? g.id);
			D && k.style("color", D);
		}
	}
}
__name(renderTextNodes, "renderTextNodes");
function ensurePairwiseSubsets(e) {
	let g = new Set(e.map((e) => [...e.sets].sort().join("|"))), _ = new Map(e.filter((e) => e.sets.length === 1 && e.size !== void 0).map((e) => [e.sets[0], e.size])), v = [];
	for (let y of e) {
		if (y.sets.length < 3) continue;
		let e = [...y.sets].sort();
		for (let y = 0; y < e.length - 1; y++) for (let b = y + 1; b < e.length; b++) {
			let x = [e[y], e[b]], S = x.join("|");
			if (!g.has(S)) {
				g.add(S);
				let e = _.get(x[0]), y = _.get(x[1]), b = e !== void 0 && y !== void 0 ? Math.min(e, y) / 4 : 2.5;
				v.push({
					sets: x,
					size: b,
					label: ""
				});
			}
		}
	}
	return v.length > 0 ? [...e, ...v] : e;
}
__name(ensurePairwiseSubsets, "ensurePairwiseSubsets");
var diagram = {
	parser: venn_default,
	db,
	renderer: { draw },
	styles: styles_default
};
export { diagram };
