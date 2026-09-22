import { n as constant_default, t as withPath } from "./path-BhQxKYpt.js";
import { a as atan2, c as halfPi, d as pi, f as sin, i as asin, l as max, m as tau, n as abs, o as cos, p as sqrt, r as acos, s as epsilon, u as min } from "./dist-DRK-BflQ.js";
function arcInnerRadius(e) {
	return e.innerRadius;
}
function arcOuterRadius(e) {
	return e.outerRadius;
}
function arcStartAngle(e) {
	return e.startAngle;
}
function arcEndAngle(e) {
	return e.endAngle;
}
function arcPadAngle(e) {
	return e && e.padAngle;
}
function intersect(e, t, n, r, i, a, ee, o) {
	var s = n - e, c = r - t, l = ee - i, te = o - a, u = te * s - l * c;
	if (!(u * u < 1e-12)) return u = (l * (t - a) - te * (e - i)) / u, [e + u * s, t + u * c];
}
function cornerTangents(e, t, n, r, i, a, ee) {
	var s = e - n, c = t - r, l = (ee ? a : -a) / sqrt(s * s + c * c), u = l * c, d = -l * s, f = e + u, p = t + d, m = n + u, h = r + d, g = (f + m) / 2, _ = (p + h) / 2, v = m - f, y = h - p, b = v * v + y * y, x = i - a, S = f * h - m * p, C = (y < 0 ? -1 : 1) * sqrt(max(0, x * x * b - S * S)), w = (S * y - v * C) / b, T = (-S * v - y * C) / b, E = (S * y + v * C) / b, D = (-S * v + y * C) / b, O = w - g, k = T - _, A = E - g, j = D - _;
	return O * O + k * k > A * A + j * j && (w = E, T = D), {
		cx: w,
		cy: T,
		x01: -u,
		y01: -d,
		x11: w * (i / x - 1),
		y11: T * (i / x - 1)
	};
}
function arc_default() {
	var o = arcInnerRadius, d = arcOuterRadius, b = constant_default(0), x = null, S = arcStartAngle, C = arcEndAngle, w = arcPadAngle, T = null, E = withPath(D);
	function D() {
		var e, t, p = +o.apply(this, arguments), m = +d.apply(this, arguments), h = S.apply(this, arguments) - halfPi, g = C.apply(this, arguments) - halfPi, _ = abs(g - h), D = g > h;
		if (T ||= e = E(), m < p && (t = m, m = p, p = t), !(m > 1e-12)) T.moveTo(0, 0);
		else if (_ > tau - 1e-12) T.moveTo(m * cos(h), m * sin(h)), T.arc(0, 0, m, h, g, !D), p > 1e-12 && (T.moveTo(p * cos(g), p * sin(g)), T.arc(0, 0, p, g, h, D));
		else {
			var O = h, k = g, A = h, j = g, M = _, N = _, P = w.apply(this, arguments) / 2, F = P > 1e-12 && (x ? +x.apply(this, arguments) : sqrt(p * p + m * m)), I = min(abs(m - p) / 2, +b.apply(this, arguments)), L = I, R = I, z, B;
			if (F > 1e-12) {
				var V = asin(F / p * sin(P)), H = asin(F / m * sin(P));
				(M -= V * 2) > 1e-12 ? (V *= D ? 1 : -1, A += V, j -= V) : (M = 0, A = j = (h + g) / 2), (N -= H * 2) > 1e-12 ? (H *= D ? 1 : -1, O += H, k -= H) : (N = 0, O = k = (h + g) / 2);
			}
			var U = m * cos(O), W = m * sin(O), G = p * cos(j), K = p * sin(j);
			if (I > 1e-12) {
				var q = m * cos(k), J = m * sin(k), Y = p * cos(A), X = p * sin(A), Z;
				if (_ < pi) if (Z = intersect(U, W, Y, X, q, J, G, K)) {
					var Q = U - Z[0], $ = W - Z[1], ne = q - Z[0], re = J - Z[1], ie = 1 / sin(acos((Q * ne + $ * re) / (sqrt(Q * Q + $ * $) * sqrt(ne * ne + re * re))) / 2), ae = sqrt(Z[0] * Z[0] + Z[1] * Z[1]);
					L = min(I, (p - ae) / (ie - 1)), R = min(I, (m - ae) / (ie + 1));
				} else L = R = 0;
			}
			N > 1e-12 ? R > 1e-12 ? (z = cornerTangents(Y, X, U, W, m, R, D), B = cornerTangents(q, J, G, K, m, R, D), T.moveTo(z.cx + z.x01, z.cy + z.y01), R < I ? T.arc(z.cx, z.cy, R, atan2(z.y01, z.x01), atan2(B.y01, B.x01), !D) : (T.arc(z.cx, z.cy, R, atan2(z.y01, z.x01), atan2(z.y11, z.x11), !D), T.arc(0, 0, m, atan2(z.cy + z.y11, z.cx + z.x11), atan2(B.cy + B.y11, B.cx + B.x11), !D), T.arc(B.cx, B.cy, R, atan2(B.y11, B.x11), atan2(B.y01, B.x01), !D))) : (T.moveTo(U, W), T.arc(0, 0, m, O, k, !D)) : T.moveTo(U, W), !(p > 1e-12) || !(M > 1e-12) ? T.lineTo(G, K) : L > 1e-12 ? (z = cornerTangents(G, K, q, J, p, -L, D), B = cornerTangents(U, W, Y, X, p, -L, D), T.lineTo(z.cx + z.x01, z.cy + z.y01), L < I ? T.arc(z.cx, z.cy, L, atan2(z.y01, z.x01), atan2(B.y01, B.x01), !D) : (T.arc(z.cx, z.cy, L, atan2(z.y01, z.x01), atan2(z.y11, z.x11), !D), T.arc(0, 0, p, atan2(z.cy + z.y11, z.cx + z.x11), atan2(B.cy + B.y11, B.cx + B.x11), D), T.arc(B.cx, B.cy, L, atan2(B.y11, B.x11), atan2(B.y01, B.x01), !D))) : T.arc(0, 0, p, j, A, D);
		}
		if (T.closePath(), e) return T = null, e + "" || null;
	}
	return D.centroid = function() {
		var e = (+o.apply(this, arguments) + +d.apply(this, arguments)) / 2, t = (+S.apply(this, arguments) + +C.apply(this, arguments)) / 2 - pi / 2;
		return [cos(t) * e, sin(t) * e];
	}, D.innerRadius = function(t) {
		return arguments.length ? (o = typeof t == "function" ? t : constant_default(+t), D) : o;
	}, D.outerRadius = function(t) {
		return arguments.length ? (d = typeof t == "function" ? t : constant_default(+t), D) : d;
	}, D.cornerRadius = function(t) {
		return arguments.length ? (b = typeof t == "function" ? t : constant_default(+t), D) : b;
	}, D.padRadius = function(t) {
		return arguments.length ? (x = t == null ? null : typeof t == "function" ? t : constant_default(+t), D) : x;
	}, D.startAngle = function(t) {
		return arguments.length ? (S = typeof t == "function" ? t : constant_default(+t), D) : S;
	}, D.endAngle = function(t) {
		return arguments.length ? (C = typeof t == "function" ? t : constant_default(+t), D) : C;
	}, D.padAngle = function(t) {
		return arguments.length ? (w = typeof t == "function" ? t : constant_default(+t), D) : w;
	}, D.context = function(e) {
		return arguments.length ? (T = e ?? null, D) : T;
	}, D;
}
export { arc_default as t };
