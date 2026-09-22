import { l as color, n as number_default, o as constant_default, r as rgb_default, t as string_default } from "./src-DXrlgw8l.js";
import { i as exponent_default, n as formatPrefix, r as formatSpecifier, t as format } from "./defaultLocale-DtvfgHTZ.js";
import { t as initRange } from "./init-Dgso81y6.js";
function ascending(p, L) {
	return p == null || L == null ? NaN : p < L ? -1 : p > L ? 1 : p >= L ? 0 : NaN;
}
function descending(p, L) {
	return p == null || L == null ? NaN : L < p ? -1 : L > p ? 1 : L >= p ? 0 : NaN;
}
function bisector(p) {
	let L, R, z;
	p.length === 2 ? (L = p === ascending || p === descending ? p : zero, R = p, z = p) : (L = ascending, R = (L, R) => ascending(p(L), R), z = (L, R) => p(L) - R);
	function B(p, z, B = 0, V = p.length) {
		if (B < V) {
			if (L(z, z) !== 0) return V;
			do {
				let L = B + V >>> 1;
				R(p[L], z) < 0 ? B = L + 1 : V = L;
			} while (B < V);
		}
		return B;
	}
	function V(p, z, B = 0, V = p.length) {
		if (B < V) {
			if (L(z, z) !== 0) return V;
			do {
				let L = B + V >>> 1;
				R(p[L], z) <= 0 ? B = L + 1 : V = L;
			} while (B < V);
		}
		return B;
	}
	function H(p, L, R = 0, V = p.length) {
		let H = B(p, L, R, V - 1);
		return H > R && z(p[H - 1], L) > -z(p[H], L) ? H - 1 : H;
	}
	return {
		left: B,
		center: H,
		right: V
	};
}
function zero() {
	return 0;
}
function number$1(p) {
	return p === null ? NaN : +p;
}
var ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
ascendingBisect.left, bisector(number$1).center;
var bisect_default = bisectRight, e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function tickSpec(p, L, R) {
	let z = (L - p) / Math.max(0, R), B = Math.floor(Math.log10(z)), V = z / 10 ** B, H = V >= e10 ? 10 : V >= e5 ? 5 : V >= e2 ? 2 : 1, U, W, G;
	return B < 0 ? (G = 10 ** -B / H, U = Math.round(p * G), W = Math.round(L * G), U / G < p && ++U, W / G > L && --W, G = -G) : (G = 10 ** B * H, U = Math.round(p / G), W = Math.round(L / G), U * G < p && ++U, W * G > L && --W), W < U && .5 <= R && R < 2 ? tickSpec(p, L, R * 2) : [
		U,
		W,
		G
	];
}
function ticks(p, L, R) {
	if (L = +L, p = +p, R = +R, !(R > 0)) return [];
	if (p === L) return [p];
	let z = L < p, [B, V, H] = z ? tickSpec(L, p, R) : tickSpec(p, L, R);
	if (!(V >= B)) return [];
	let U = V - B + 1, W = Array(U);
	if (z) if (H < 0) for (let p = 0; p < U; ++p) W[p] = (V - p) / -H;
	else for (let p = 0; p < U; ++p) W[p] = (V - p) * H;
	else if (H < 0) for (let p = 0; p < U; ++p) W[p] = (B + p) / -H;
	else for (let p = 0; p < U; ++p) W[p] = (B + p) * H;
	return W;
}
function tickIncrement(p, L, R) {
	return L = +L, p = +p, R = +R, tickSpec(p, L, R)[2];
}
function tickStep(p, L, R) {
	L = +L, p = +p, R = +R;
	let z = L < p, B = z ? tickIncrement(L, p, R) : tickIncrement(p, L, R);
	return (z ? -1 : 1) * (B < 0 ? 1 / -B : B);
}
function numberArray_default(p, L) {
	L ||= [];
	var R = p ? Math.min(L.length, p.length) : 0, z = L.slice(), B;
	return function(V) {
		for (B = 0; B < R; ++B) z[B] = p[B] * (1 - V) + L[B] * V;
		return z;
	};
}
function isNumberArray(p) {
	return ArrayBuffer.isView(p) && !(p instanceof DataView);
}
function genericArray(p, L) {
	var R = L ? L.length : 0, z = p ? Math.min(R, p.length) : 0, B = Array(z), V = Array(R), H;
	for (H = 0; H < z; ++H) B[H] = value_default(p[H], L[H]);
	for (; H < R; ++H) V[H] = L[H];
	return function(p) {
		for (H = 0; H < z; ++H) V[H] = B[H](p);
		return V;
	};
}
function date_default(p, L) {
	var R = /* @__PURE__ */ new Date();
	return p = +p, L = +L, function(z) {
		return R.setTime(p * (1 - z) + L * z), R;
	};
}
function object_default(p, L) {
	var R = {}, z = {}, B;
	for (B in (typeof p != "object" || !p) && (p = {}), (typeof L != "object" || !L) && (L = {}), L) B in p ? R[B] = value_default(p[B], L[B]) : z[B] = L[B];
	return function(p) {
		for (B in R) z[B] = R[B](p);
		return z;
	};
}
function value_default(V, H) {
	var U = typeof H, W;
	return H == null || U === "boolean" ? constant_default(H) : (U === "number" ? number_default : U === "string" ? (W = color(H)) ? (H = W, rgb_default) : string_default : H instanceof color ? rgb_default : H instanceof Date ? date_default : isNumberArray(H) ? numberArray_default : Array.isArray(H) ? genericArray : typeof H.valueOf != "function" && typeof H.toString != "function" || isNaN(H) ? object_default : number_default)(V, H);
}
function round_default(p, L) {
	return p = +p, L = +L, function(R) {
		return Math.round(p * (1 - R) + L * R);
	};
}
function precisionFixed_default(p) {
	return Math.max(0, -exponent_default(Math.abs(p)));
}
function precisionPrefix_default(p, L) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(L) / 3))) * 3 - exponent_default(Math.abs(p)));
}
function precisionRound_default(p, L) {
	return p = Math.abs(p), L = Math.abs(L) - p, Math.max(0, exponent_default(L) - exponent_default(p)) + 1;
}
function constants(p) {
	return function() {
		return p;
	};
}
function number(p) {
	return +p;
}
var unit = [0, 1];
function identity(p) {
	return p;
}
function normalize(p, L) {
	return (L -= p = +p) ? function(R) {
		return (R - p) / L;
	} : constants(isNaN(L) ? NaN : .5);
}
function clamper(p, L) {
	var R;
	return p > L && (R = p, p = L, L = R), function(R) {
		return Math.max(p, Math.min(L, R));
	};
}
function bimap(p, L, R) {
	var z = p[0], B = p[1], V = L[0], H = L[1];
	return B < z ? (z = normalize(B, z), V = R(H, V)) : (z = normalize(z, B), V = R(V, H)), function(p) {
		return V(z(p));
	};
}
function polymap(p, L, R) {
	var z = Math.min(p.length, L.length) - 1, B = Array(z), V = Array(z), H = -1;
	for (p[z] < p[0] && (p = p.slice().reverse(), L = L.slice().reverse()); ++H < z;) B[H] = normalize(p[H], p[H + 1]), V[H] = R(L[H], L[H + 1]);
	return function(L) {
		var R = bisect_default(p, L, 1, z) - 1;
		return V[R](B[R](L));
	};
}
function copy(p, L) {
	return L.domain(p.domain()).range(p.range()).interpolate(p.interpolate()).clamp(p.clamp()).unknown(p.unknown());
}
function transformer() {
	var p = unit, R = unit, z = value_default, B, V, H, U = identity, W, G, K;
	function q() {
		var L = Math.min(p.length, R.length);
		return U !== identity && (U = clamper(p[0], p[L - 1])), W = L > 2 ? polymap : bimap, G = K = null, J;
	}
	function J(L) {
		return L == null || isNaN(L = +L) ? H : (G ||= W(p.map(B), R, z))(B(U(L)));
	}
	return J.invert = function(z) {
		return U(V((K ||= W(R, p.map(B), number_default))(z)));
	}, J.domain = function(L) {
		return arguments.length ? (p = Array.from(L, number), q()) : p.slice();
	}, J.range = function(p) {
		return arguments.length ? (R = Array.from(p), q()) : R.slice();
	}, J.rangeRound = function(p) {
		return R = Array.from(p), z = round_default, q();
	}, J.clamp = function(p) {
		return arguments.length ? (U = p ? !0 : identity, q()) : U !== identity;
	}, J.interpolate = function(p) {
		return arguments.length ? (z = p, q()) : z;
	}, J.unknown = function(p) {
		return arguments.length ? (H = p, J) : H;
	}, function(p, L) {
		return B = p, V = L, q();
	};
}
function continuous() {
	return transformer()(identity, identity);
}
function tickFormat(p, L, R, z) {
	var B = tickStep(p, L, R), V;
	switch (z = formatSpecifier(z ?? ",f"), z.type) {
		case "s":
			var G = Math.max(Math.abs(p), Math.abs(L));
			return z.precision == null && !isNaN(V = precisionPrefix_default(B, G)) && (z.precision = V), formatPrefix(z, G);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			z.precision == null && !isNaN(V = precisionRound_default(B, Math.max(Math.abs(p), Math.abs(L)))) && (z.precision = V - (z.type === "e"));
			break;
		case "f":
		case "%":
			z.precision == null && !isNaN(V = precisionFixed_default(B)) && (z.precision = V - (z.type === "%") * 2);
			break;
	}
	return format(z);
}
function linearish(p) {
	var L = p.domain;
	return p.ticks = function(p) {
		var R = L();
		return ticks(R[0], R[R.length - 1], p ?? 10);
	}, p.tickFormat = function(p, R) {
		var z = L();
		return tickFormat(z[0], z[z.length - 1], p ?? 10, R);
	}, p.nice = function(R) {
		R ??= 10;
		var z = L(), B = 0, V = z.length - 1, H = z[B], U = z[V], W, G, K = 10;
		for (U < H && (G = H, H = U, U = G, G = B, B = V, V = G); K-- > 0;) {
			if (G = tickIncrement(H, U, R), G === W) return z[B] = H, z[V] = U, L(z);
			if (G > 0) H = Math.floor(H / G) * G, U = Math.ceil(U / G) * G;
			else if (G < 0) H = Math.ceil(H * G) / G, U = Math.floor(U * G) / G;
			else break;
			W = G;
		}
		return p;
	}, p;
}
function linear() {
	var p = continuous();
	return p.copy = function() {
		return copy(p, linear());
	}, initRange.apply(p, arguments), linearish(p);
}
export { bisector as a, tickStep as i, continuous as n, copy as r, linear as t };
