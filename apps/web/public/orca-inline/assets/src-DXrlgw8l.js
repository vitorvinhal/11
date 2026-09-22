import { a as __toESM, t as __commonJSMin } from "./chunk-BKjlJnyO.js";
import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
var require_dayjs_min = /* @__PURE__ */ __commonJSMin(((e, D) => {
	(function(O, k) {
		typeof e == "object" && D !== void 0 ? D.exports = k() : typeof define == "function" && define.amd ? define(k) : (O = typeof globalThis < "u" ? globalThis : O || self).dayjs = k();
	})(e, (function() {
		var e = 1e3, D = 6e4, O = 36e5, k = "millisecond", A = "second", j = "minute", M = "hour", N = "day", P = "week", F = "month", I = "quarter", L = "year", R = "date", z = "Invalid Date", B = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, V = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, H = {
			name: "en",
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			ordinal: function(e) {
				var D = [
					"th",
					"st",
					"nd",
					"rd"
				], O = e % 100;
				return "[" + e + (D[(O - 20) % 10] || D[O] || D[0]) + "]";
			}
		}, U = function(e, D, O) {
			var k = String(e);
			return !k || k.length >= D ? e : "" + Array(D + 1 - k.length).join(O) + e;
		}, W = {
			s: U,
			z: function(e) {
				var D = -e.utcOffset(), O = Math.abs(D), k = Math.floor(O / 60), A = O % 60;
				return (D <= 0 ? "+" : "-") + U(k, 2, "0") + ":" + U(A, 2, "0");
			},
			m: function e(D, O) {
				if (D.date() < O.date()) return -e(O, D);
				var k = 12 * (O.year() - D.year()) + (O.month() - D.month()), A = D.clone().add(k, F), j = O - A < 0, M = D.clone().add(k + (j ? -1 : 1), F);
				return +(-(k + (O - A) / (j ? A - M : M - A)) || 0);
			},
			a: function(e) {
				return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
			},
			p: function(e) {
				return {
					M: F,
					y: L,
					w: P,
					d: N,
					D: R,
					h: M,
					m: j,
					s: A,
					ms: k,
					Q: I
				}[e] || String(e || "").toLowerCase().replace(/s$/, "");
			},
			u: function(e) {
				return e === void 0;
			}
		}, G = "en", K = {};
		K[G] = H;
		var q = "$isDayjsObject", J = function(e) {
			return e instanceof Q || !(!e || !e[q]);
		}, Y = function e(D, O, k) {
			var A;
			if (!D) return G;
			if (typeof D == "string") {
				var j = D.toLowerCase();
				K[j] && (A = j), O && (K[j] = O, A = j);
				var M = D.split("-");
				if (!A && M.length > 1) return e(M[0]);
			} else {
				var N = D.name;
				K[N] = D, A = N;
			}
			return !k && A && (G = A), A || !k && G;
		}, X = function(e, D) {
			if (J(e)) return e.clone();
			var O = typeof D == "object" ? D : {};
			return O.date = e, O.args = arguments, new Q(O);
		}, Z = W;
		Z.l = Y, Z.i = J, Z.w = function(e, D) {
			return X(e, {
				locale: D.$L,
				utc: D.$u,
				x: D.$x,
				$offset: D.$offset
			});
		};
		var Q = function() {
			function H(e) {
				this.$L = Y(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[q] = !0;
			}
			var U = H.prototype;
			return U.parse = function(e) {
				this.$d = function(e) {
					var D = e.date, O = e.utc;
					if (D === null) return /* @__PURE__ */ new Date(NaN);
					if (Z.u(D)) return /* @__PURE__ */ new Date();
					if (D instanceof Date) return new Date(D);
					if (typeof D == "string" && !/Z$/i.test(D)) {
						var k = D.match(B);
						if (k) {
							var A = k[2] - 1 || 0, j = (k[7] || "0").substring(0, 3);
							return O ? new Date(Date.UTC(k[1], A, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, j)) : new Date(k[1], A, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, j);
						}
					}
					return new Date(D);
				}(e), this.init();
			}, U.init = function() {
				var e = this.$d;
				this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
			}, U.$utils = function() {
				return Z;
			}, U.isValid = function() {
				return this.$d.toString() !== z;
			}, U.isSame = function(e, D) {
				var O = X(e);
				return this.startOf(D) <= O && O <= this.endOf(D);
			}, U.isAfter = function(e, D) {
				return X(e) < this.startOf(D);
			}, U.isBefore = function(e, D) {
				return this.endOf(D) < X(e);
			}, U.$g = function(e, D, O) {
				return Z.u(e) ? this[D] : this.set(O, e);
			}, U.unix = function() {
				return Math.floor(this.valueOf() / 1e3);
			}, U.valueOf = function() {
				return this.$d.getTime();
			}, U.startOf = function(e, D) {
				var O = this, k = !!Z.u(D) || D, I = Z.p(e), z = function(e, D) {
					var A = Z.w(O.$u ? Date.UTC(O.$y, D, e) : new Date(O.$y, D, e), O);
					return k ? A : A.endOf(N);
				}, B = function(e, D) {
					return Z.w(O.toDate()[e].apply(O.toDate("s"), (k ? [
						0,
						0,
						0,
						0
					] : [
						23,
						59,
						59,
						999
					]).slice(D)), O);
				}, V = this.$W, H = this.$M, U = this.$D, W = "set" + (this.$u ? "UTC" : "");
				switch (I) {
					case L: return k ? z(1, 0) : z(31, 11);
					case F: return k ? z(1, H) : z(0, H + 1);
					case P:
						var G = this.$locale().weekStart || 0, K = (V < G ? V + 7 : V) - G;
						return z(k ? U - K : U + (6 - K), H);
					case N:
					case R: return B(W + "Hours", 0);
					case M: return B(W + "Minutes", 1);
					case j: return B(W + "Seconds", 2);
					case A: return B(W + "Milliseconds", 3);
					default: return this.clone();
				}
			}, U.endOf = function(e) {
				return this.startOf(e, !1);
			}, U.$set = function(e, D) {
				var O, P = Z.p(e), I = "set" + (this.$u ? "UTC" : ""), z = (O = {}, O[N] = I + "Date", O[R] = I + "Date", O[F] = I + "Month", O[L] = I + "FullYear", O[M] = I + "Hours", O[j] = I + "Minutes", O[A] = I + "Seconds", O[k] = I + "Milliseconds", O)[P], B = P === N ? this.$D + (D - this.$W) : D;
				if (P === F || P === L) {
					var V = this.clone().set(R, 1);
					V.$d[z](B), V.init(), this.$d = V.set(R, Math.min(this.$D, V.daysInMonth())).$d;
				} else z && this.$d[z](B);
				return this.init(), this;
			}, U.set = function(e, D) {
				return this.clone().$set(e, D);
			}, U.get = function(e) {
				return this[Z.p(e)]();
			}, U.add = function(k, I) {
				var R, z = this;
				k = Number(k);
				var B = Z.p(I), V = function(e) {
					var D = X(z);
					return Z.w(D.date(D.date() + Math.round(e * k)), z);
				};
				if (B === F) return this.set(F, this.$M + k);
				if (B === L) return this.set(L, this.$y + k);
				if (B === N) return V(1);
				if (B === P) return V(7);
				var H = (R = {}, R[j] = D, R[M] = O, R[A] = e, R)[B] || 1, U = this.$d.getTime() + k * H;
				return Z.w(U, this);
			}, U.subtract = function(e, D) {
				return this.add(-1 * e, D);
			}, U.format = function(e) {
				var D = this, O = this.$locale();
				if (!this.isValid()) return O.invalidDate || z;
				var k = e || "YYYY-MM-DDTHH:mm:ssZ", A = Z.z(this), j = this.$H, M = this.$m, N = this.$M, P = O.weekdays, F = O.months, I = O.meridiem, L = function(e, O, A, j) {
					return e && (e[O] || e(D, k)) || A[O].slice(0, j);
				}, R = function(e) {
					return Z.s(j % 12 || 12, e, "0");
				}, B = I || function(e, D, O) {
					var k = e < 12 ? "AM" : "PM";
					return O ? k.toLowerCase() : k;
				};
				return k.replace(V, (function(e, k) {
					return k || function(e) {
						switch (e) {
							case "YY": return String(D.$y).slice(-2);
							case "YYYY": return Z.s(D.$y, 4, "0");
							case "M": return N + 1;
							case "MM": return Z.s(N + 1, 2, "0");
							case "MMM": return L(O.monthsShort, N, F, 3);
							case "MMMM": return L(F, N);
							case "D": return D.$D;
							case "DD": return Z.s(D.$D, 2, "0");
							case "d": return String(D.$W);
							case "dd": return L(O.weekdaysMin, D.$W, P, 2);
							case "ddd": return L(O.weekdaysShort, D.$W, P, 3);
							case "dddd": return P[D.$W];
							case "H": return String(j);
							case "HH": return Z.s(j, 2, "0");
							case "h": return R(1);
							case "hh": return R(2);
							case "a": return B(j, M, !0);
							case "A": return B(j, M, !1);
							case "m": return String(M);
							case "mm": return Z.s(M, 2, "0");
							case "s": return String(D.$s);
							case "ss": return Z.s(D.$s, 2, "0");
							case "SSS": return Z.s(D.$ms, 3, "0");
							case "Z": return A;
						}
						return null;
					}(e) || A.replace(":", "");
				}));
			}, U.utcOffset = function() {
				return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
			}, U.diff = function(k, R, z) {
				var B, V = this, H = Z.p(R), U = X(k), W = (U.utcOffset() - this.utcOffset()) * D, G = this - U, K = function() {
					return Z.m(V, U);
				};
				switch (H) {
					case L:
						B = K() / 12;
						break;
					case F:
						B = K();
						break;
					case I:
						B = K() / 3;
						break;
					case P:
						B = (G - W) / 6048e5;
						break;
					case N:
						B = (G - W) / 864e5;
						break;
					case M:
						B = G / O;
						break;
					case j:
						B = G / D;
						break;
					case A:
						B = G / e;
						break;
					default: B = G;
				}
				return z ? B : Z.a(B);
			}, U.daysInMonth = function() {
				return this.endOf(F).$D;
			}, U.$locale = function() {
				return K[this.$L];
			}, U.locale = function(e, D) {
				if (!e) return this.$L;
				var O = this.clone(), k = Y(e, D, !0);
				return k && (O.$L = k), O;
			}, U.clone = function() {
				return Z.w(this.$d, this);
			}, U.toDate = function() {
				return new Date(this.valueOf());
			}, U.toJSON = function() {
				return this.isValid() ? this.toISOString() : null;
			}, U.toISOString = function() {
				return this.$d.toISOString();
			}, U.toString = function() {
				return this.$d.toUTCString();
			}, H;
		}(), $ = Q.prototype;
		return X.prototype = $, [
			["$ms", k],
			["$s", A],
			["$m", j],
			["$H", M],
			["$W", N],
			["$M", F],
			["$y", L],
			["$D", R]
		].forEach((function(e) {
			$[e[1]] = function(D) {
				return this.$g(D, e[0], e[1]);
			};
		})), X.extend = function(e, D) {
			return e.$i ||= (e(D, Q, X), !0), X;
		}, X.locale = Y, X.isDayjs = J, X.unix = function(e) {
			return X(1e3 * e);
		}, X.en = K[G], X.Ls = K, X.p = {}, X;
	}));
})), import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1), LEVELS = {
	trace: 0,
	debug: 1,
	info: 2,
	warn: 3,
	error: 4,
	fatal: 5
}, log = {
	trace: /* @__PURE__ */ __name((...e) => {}, "trace"),
	debug: /* @__PURE__ */ __name((...e) => {}, "debug"),
	info: /* @__PURE__ */ __name((...e) => {}, "info"),
	warn: /* @__PURE__ */ __name((...e) => {}, "warn"),
	error: /* @__PURE__ */ __name((...e) => {}, "error"),
	fatal: /* @__PURE__ */ __name((...e) => {}, "fatal")
}, setLogLevel = /* @__PURE__ */ __name(function(e = "fatal") {
	let D = LEVELS.fatal;
	typeof e == "string" ? e.toLowerCase() in LEVELS && (D = LEVELS[e]) : typeof e == "number" && (D = e), log.trace = () => {}, log.debug = () => {}, log.info = () => {}, log.warn = () => {}, log.error = () => {}, log.fatal = () => {}, D <= LEVELS.fatal && (log.fatal = console.error ? console.error.bind(console, format("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", format("FATAL"))), D <= LEVELS.error && (log.error = console.error ? console.error.bind(console, format("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", format("ERROR"))), D <= LEVELS.warn && (log.warn = console.warn ? console.warn.bind(console, format("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", format("WARN"))), D <= LEVELS.info && (log.info = console.info ? console.info.bind(console, format("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", format("INFO"))), D <= LEVELS.debug && (log.debug = console.debug ? console.debug.bind(console, format("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("DEBUG"))), D <= LEVELS.trace && (log.trace = console.debug ? console.debug.bind(console, format("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", format("TRACE")));
}, "setLogLevel"), format = /* @__PURE__ */ __name((e) => `%c${(0, import_dayjs_min.default)().format("ss.SSS")} : ${e} : `, "format"), noop = { value: () => {} };
function dispatch() {
	for (var e = 0, D = arguments.length, O = {}, k; e < D; ++e) {
		if (!(k = arguments[e] + "") || k in O || /[\s.]/.test(k)) throw Error("illegal type: " + k);
		O[k] = [];
	}
	return new Dispatch(O);
}
function Dispatch(e) {
	this._ = e;
}
function parseTypenames$1(e, D) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var O = "", k = e.indexOf(".");
		if (k >= 0 && (O = e.slice(k + 1), e = e.slice(0, k)), e && !D.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: O
		};
	});
}
Dispatch.prototype = dispatch.prototype = {
	constructor: Dispatch,
	on: function(e, D) {
		var O = this._, k = parseTypenames$1(e + "", O), A, j = -1, M = k.length;
		if (arguments.length < 2) {
			for (; ++j < M;) if ((A = (e = k[j]).type) && (A = get$1(O[A], e.name))) return A;
			return;
		}
		if (D != null && typeof D != "function") throw Error("invalid callback: " + D);
		for (; ++j < M;) if (A = (e = k[j]).type) O[A] = set$1(O[A], e.name, D);
		else if (D == null) for (A in O) O[A] = set$1(O[A], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, D = this._;
		for (var O in D) e[O] = D[O].slice();
		return new Dispatch(e);
	},
	call: function(e, D) {
		if ((A = arguments.length - 2) > 0) for (var O = Array(A), k = 0, A, j; k < A; ++k) O[k] = arguments[k + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (j = this._[e], k = 0, A = j.length; k < A; ++k) j[k].value.apply(D, O);
	},
	apply: function(e, D, O) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var k = this._[e], A = 0, j = k.length; A < j; ++A) k[A].value.apply(D, O);
	}
};
function get$1(e, D) {
	for (var O = 0, k = e.length, A; O < k; ++O) if ((A = e[O]).name === D) return A.value;
}
function set$1(e, D, O) {
	for (var k = 0, A = e.length; k < A; ++k) if (e[k].name === D) {
		e[k] = noop, e = e.slice(0, k).concat(e.slice(k + 1));
		break;
	}
	return O != null && e.push({
		name: D,
		value: O
	}), e;
}
var dispatch_default = dispatch, namespaces_default = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
function namespace_default(e) {
	var D = e += "", O = D.indexOf(":");
	return O >= 0 && (D = e.slice(0, O)) !== "xmlns" && (e = e.slice(O + 1)), namespaces_default.hasOwnProperty(D) ? {
		space: namespaces_default[D],
		local: e
	} : e;
}
function creatorInherit(e) {
	return function() {
		var D = this.ownerDocument, O = this.namespaceURI;
		return O === "http://www.w3.org/1999/xhtml" && D.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? D.createElement(e) : D.createElementNS(O, e);
	};
}
function creatorFixed(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function creator_default(e) {
	var D = namespace_default(e);
	return (D.local ? creatorFixed : creatorInherit)(D);
}
function none() {}
function selector_default(e) {
	return e == null ? none : function() {
		return this.querySelector(e);
	};
}
function select_default$2(e) {
	typeof e != "function" && (e = selector_default(e));
	for (var D = this._groups, O = D.length, k = Array(O), A = 0; A < O; ++A) for (var j = D[A], M = j.length, N = k[A] = Array(M), P, F, I = 0; I < M; ++I) (P = j[I]) && (F = e.call(P, P.__data__, I, j)) && ("__data__" in P && (F.__data__ = P.__data__), N[I] = F);
	return new Selection$1(k, this._parents);
}
function array(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function empty() {
	return [];
}
function selectorAll_default(e) {
	return e == null ? empty : function() {
		return this.querySelectorAll(e);
	};
}
function arrayAll(e) {
	return function() {
		return array(e.apply(this, arguments));
	};
}
function selectAll_default$1(e) {
	e = typeof e == "function" ? arrayAll(e) : selectorAll_default(e);
	for (var D = this._groups, O = D.length, k = [], A = [], j = 0; j < O; ++j) for (var M = D[j], N = M.length, P, F = 0; F < N; ++F) (P = M[F]) && (k.push(e.call(P, P.__data__, F, M)), A.push(P));
	return new Selection$1(k, A);
}
function matcher_default(e) {
	return function() {
		return this.matches(e);
	};
}
function childMatcher(e) {
	return function(D) {
		return D.matches(e);
	};
}
var find = Array.prototype.find;
function childFind(e) {
	return function() {
		return find.call(this.children, e);
	};
}
function childFirst() {
	return this.firstElementChild;
}
function selectChild_default(e) {
	return this.select(e == null ? childFirst : childFind(typeof e == "function" ? e : childMatcher(e)));
}
var filter = Array.prototype.filter;
function children() {
	return Array.from(this.children);
}
function childrenFilter(e) {
	return function() {
		return filter.call(this.children, e);
	};
}
function selectChildren_default(e) {
	return this.selectAll(e == null ? children : childrenFilter(typeof e == "function" ? e : childMatcher(e)));
}
function filter_default$1(e) {
	typeof e != "function" && (e = matcher_default(e));
	for (var D = this._groups, O = D.length, k = Array(O), A = 0; A < O; ++A) for (var j = D[A], M = j.length, N = k[A] = [], P, F = 0; F < M; ++F) (P = j[F]) && e.call(P, P.__data__, F, j) && N.push(P);
	return new Selection$1(k, this._parents);
}
function sparse_default(e) {
	return Array(e.length);
}
function enter_default() {
	return new Selection$1(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(e, D) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = D;
}
EnterNode.prototype = {
	constructor: EnterNode,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, D) {
		return this._parent.insertBefore(e, D);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
function constant_default$1(e) {
	return function() {
		return e;
	};
}
function bindIndex(e, D, O, k, A, j) {
	for (var M = 0, N, P = D.length, F = j.length; M < F; ++M) (N = D[M]) ? (N.__data__ = j[M], k[M] = N) : O[M] = new EnterNode(e, j[M]);
	for (; M < P; ++M) (N = D[M]) && (A[M] = N);
}
function bindKey(e, D, O, k, A, j, M) {
	var N, P, F = /* @__PURE__ */ new Map(), I = D.length, L = j.length, R = Array(I), z;
	for (N = 0; N < I; ++N) (P = D[N]) && (R[N] = z = M.call(P, P.__data__, N, D) + "", F.has(z) ? A[N] = P : F.set(z, P));
	for (N = 0; N < L; ++N) z = M.call(e, j[N], N, j) + "", (P = F.get(z)) ? (k[N] = P, P.__data__ = j[N], F.delete(z)) : O[N] = new EnterNode(e, j[N]);
	for (N = 0; N < I; ++N) (P = D[N]) && F.get(R[N]) === P && (A[N] = P);
}
function datum(e) {
	return e.__data__;
}
function data_default(e, D) {
	if (!arguments.length) return Array.from(this, datum);
	var O = D ? bindKey : bindIndex, k = this._parents, A = this._groups;
	typeof e != "function" && (e = constant_default$1(e));
	for (var j = A.length, M = Array(j), N = Array(j), P = Array(j), F = 0; F < j; ++F) {
		var I = k[F], L = A[F], R = L.length, z = arraylike(e.call(I, I && I.__data__, F, k)), B = z.length, V = N[F] = Array(B), H = M[F] = Array(B);
		O(I, L, V, H, P[F] = Array(R), z, D);
		for (var U = 0, W = 0, G, K; U < B; ++U) if (G = V[U]) {
			for (U >= W && (W = U + 1); !(K = H[W]) && ++W < B;);
			G._next = K || null;
		}
	}
	return M = new Selection$1(M, k), M._enter = N, M._exit = P, M;
}
function arraylike(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function exit_default() {
	return new Selection$1(this._exit || this._groups.map(sparse_default), this._parents);
}
function join_default(e, D, O) {
	var k = this.enter(), A = this, j = this.exit();
	return typeof e == "function" ? (k = e(k), k &&= k.selection()) : k = k.append(e + ""), D != null && (A = D(A), A &&= A.selection()), O == null ? j.remove() : O(j), k && A ? k.merge(A).order() : A;
}
function merge_default$1(e) {
	for (var D = e.selection ? e.selection() : e, O = this._groups, k = D._groups, A = O.length, j = k.length, M = Math.min(A, j), N = Array(A), P = 0; P < M; ++P) for (var F = O[P], I = k[P], L = F.length, R = N[P] = Array(L), z, B = 0; B < L; ++B) (z = F[B] || I[B]) && (R[B] = z);
	for (; P < A; ++P) N[P] = O[P];
	return new Selection$1(N, this._parents);
}
function order_default() {
	for (var e = this._groups, D = -1, O = e.length; ++D < O;) for (var k = e[D], A = k.length - 1, j = k[A], M; --A >= 0;) (M = k[A]) && (j && M.compareDocumentPosition(j) ^ 4 && j.parentNode.insertBefore(M, j), j = M);
	return this;
}
function sort_default(e) {
	e ||= ascending;
	function D(D, O) {
		return D && O ? e(D.__data__, O.__data__) : !D - !O;
	}
	for (var O = this._groups, k = O.length, A = Array(k), j = 0; j < k; ++j) {
		for (var M = O[j], N = M.length, P = A[j] = Array(N), F, I = 0; I < N; ++I) (F = M[I]) && (P[I] = F);
		P.sort(D);
	}
	return new Selection$1(A, this._parents).order();
}
function ascending(e, D) {
	return e < D ? -1 : e > D ? 1 : e >= D ? 0 : NaN;
}
function call_default() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
function nodes_default() {
	return Array.from(this);
}
function node_default() {
	for (var e = this._groups, D = 0, O = e.length; D < O; ++D) for (var k = e[D], A = 0, j = k.length; A < j; ++A) {
		var M = k[A];
		if (M) return M;
	}
	return null;
}
function size_default() {
	let e = 0;
	for (let D of this) ++e;
	return e;
}
function empty_default() {
	return !this.node();
}
function each_default(e) {
	for (var D = this._groups, O = 0, k = D.length; O < k; ++O) for (var A = D[O], j = 0, M = A.length, N; j < M; ++j) (N = A[j]) && e.call(N, N.__data__, j, A);
	return this;
}
function attrRemove$1(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function attrRemoveNS$1(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function attrConstant$1(e, D) {
	return function() {
		this.setAttribute(e, D);
	};
}
function attrConstantNS$1(e, D) {
	return function() {
		this.setAttributeNS(e.space, e.local, D);
	};
}
function attrFunction$1(e, D) {
	return function() {
		var O = D.apply(this, arguments);
		O == null ? this.removeAttribute(e) : this.setAttribute(e, O);
	};
}
function attrFunctionNS$1(e, D) {
	return function() {
		var O = D.apply(this, arguments);
		O == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, O);
	};
}
function attr_default$1(e, D) {
	var O = namespace_default(e);
	if (arguments.length < 2) {
		var k = this.node();
		return O.local ? k.getAttributeNS(O.space, O.local) : k.getAttribute(O);
	}
	return this.each((D == null ? O.local ? attrRemoveNS$1 : attrRemove$1 : typeof D == "function" ? O.local ? attrFunctionNS$1 : attrFunction$1 : O.local ? attrConstantNS$1 : attrConstant$1)(O, D));
}
function window_default(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function styleRemove$1(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function styleConstant$1(e, D, O) {
	return function() {
		this.style.setProperty(e, D, O);
	};
}
function styleFunction$1(e, D, O) {
	return function() {
		var k = D.apply(this, arguments);
		k == null ? this.style.removeProperty(e) : this.style.setProperty(e, k, O);
	};
}
function style_default$1(e, D, O) {
	return arguments.length > 1 ? this.each((D == null ? styleRemove$1 : typeof D == "function" ? styleFunction$1 : styleConstant$1)(e, D, O ?? "")) : styleValue(this.node(), e);
}
function styleValue(e, D) {
	return e.style.getPropertyValue(D) || window_default(e).getComputedStyle(e, null).getPropertyValue(D);
}
function propertyRemove(e) {
	return function() {
		delete this[e];
	};
}
function propertyConstant(e, D) {
	return function() {
		this[e] = D;
	};
}
function propertyFunction(e, D) {
	return function() {
		var O = D.apply(this, arguments);
		O == null ? delete this[e] : this[e] = O;
	};
}
function property_default(e, D) {
	return arguments.length > 1 ? this.each((D == null ? propertyRemove : typeof D == "function" ? propertyFunction : propertyConstant)(e, D)) : this.node()[e];
}
function classArray(e) {
	return e.trim().split(/^|\s+/);
}
function classList(e) {
	return e.classList || new ClassList(e);
}
function ClassList(e) {
	this._node = e, this._names = classArray(e.getAttribute("class") || "");
}
ClassList.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var D = this._names.indexOf(e);
		D >= 0 && (this._names.splice(D, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function classedAdd(e, D) {
	for (var O = classList(e), k = -1, A = D.length; ++k < A;) O.add(D[k]);
}
function classedRemove(e, D) {
	for (var O = classList(e), k = -1, A = D.length; ++k < A;) O.remove(D[k]);
}
function classedTrue(e) {
	return function() {
		classedAdd(this, e);
	};
}
function classedFalse(e) {
	return function() {
		classedRemove(this, e);
	};
}
function classedFunction(e, D) {
	return function() {
		(D.apply(this, arguments) ? classedAdd : classedRemove)(this, e);
	};
}
function classed_default(e, D) {
	var O = classArray(e + "");
	if (arguments.length < 2) {
		for (var k = classList(this.node()), A = -1, j = O.length; ++A < j;) if (!k.contains(O[A])) return !1;
		return !0;
	}
	return this.each((typeof D == "function" ? classedFunction : D ? classedTrue : classedFalse)(O, D));
}
function textRemove() {
	this.textContent = "";
}
function textConstant$1(e) {
	return function() {
		this.textContent = e;
	};
}
function textFunction$1(e) {
	return function() {
		this.textContent = e.apply(this, arguments) ?? "";
	};
}
function text_default$1(e) {
	return arguments.length ? this.each(e == null ? textRemove : (typeof e == "function" ? textFunction$1 : textConstant$1)(e)) : this.node().textContent;
}
function htmlRemove() {
	this.innerHTML = "";
}
function htmlConstant(e) {
	return function() {
		this.innerHTML = e;
	};
}
function htmlFunction(e) {
	return function() {
		this.innerHTML = e.apply(this, arguments) ?? "";
	};
}
function html_default(e) {
	return arguments.length ? this.each(e == null ? htmlRemove : (typeof e == "function" ? htmlFunction : htmlConstant)(e)) : this.node().innerHTML;
}
function raise() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function raise_default() {
	return this.each(raise);
}
function lower() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
	return this.each(lower);
}
function append_default(e) {
	var D = typeof e == "function" ? e : creator_default(e);
	return this.select(function() {
		return this.appendChild(D.apply(this, arguments));
	});
}
function constantNull() {
	return null;
}
function insert_default(e, D) {
	var O = typeof e == "function" ? e : creator_default(e), k = D == null ? constantNull : typeof D == "function" ? D : selector_default(D);
	return this.select(function() {
		return this.insertBefore(O.apply(this, arguments), k.apply(this, arguments) || null);
	});
}
function remove() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function remove_default$1() {
	return this.each(remove);
}
function selection_cloneShallow() {
	var e = this.cloneNode(!1), D = this.parentNode;
	return D ? D.insertBefore(e, this.nextSibling) : e;
}
function selection_cloneDeep() {
	var e = this.cloneNode(!0), D = this.parentNode;
	return D ? D.insertBefore(e, this.nextSibling) : e;
}
function clone_default(e) {
	return this.select(e ? selection_cloneDeep : selection_cloneShallow);
}
function datum_default(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function contextListener(e) {
	return function(D) {
		e.call(this, D, this.__data__);
	};
}
function parseTypenames(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var D = "", O = e.indexOf(".");
		return O >= 0 && (D = e.slice(O + 1), e = e.slice(0, O)), {
			type: e,
			name: D
		};
	});
}
function onRemove(e) {
	return function() {
		var D = this.__on;
		if (D) {
			for (var O = 0, k = -1, A = D.length, j; O < A; ++O) j = D[O], (!e.type || j.type === e.type) && j.name === e.name ? this.removeEventListener(j.type, j.listener, j.options) : D[++k] = j;
			++k ? D.length = k : delete this.__on;
		}
	};
}
function onAdd(e, D, O) {
	return function() {
		var k = this.__on, A, j = contextListener(D);
		if (k) {
			for (var M = 0, N = k.length; M < N; ++M) if ((A = k[M]).type === e.type && A.name === e.name) {
				this.removeEventListener(A.type, A.listener, A.options), this.addEventListener(A.type, A.listener = j, A.options = O), A.value = D;
				return;
			}
		}
		this.addEventListener(e.type, j, O), A = {
			type: e.type,
			name: e.name,
			value: D,
			listener: j,
			options: O
		}, k ? k.push(A) : this.__on = [A];
	};
}
function on_default$1(e, D, O) {
	var k = parseTypenames(e + ""), A, j = k.length, M;
	if (arguments.length < 2) {
		var N = this.node().__on;
		if (N) {
			for (var P = 0, F = N.length, I; P < F; ++P) for (A = 0, I = N[P]; A < j; ++A) if ((M = k[A]).type === I.type && M.name === I.name) return I.value;
		}
		return;
	}
	for (N = D ? onAdd : onRemove, A = 0; A < j; ++A) this.each(N(k[A], D, O));
	return this;
}
function dispatchEvent(e, D, O) {
	var k = window_default(e), A = k.CustomEvent;
	typeof A == "function" ? A = new A(D, O) : (A = k.document.createEvent("Event"), O ? (A.initEvent(D, O.bubbles, O.cancelable), A.detail = O.detail) : A.initEvent(D, !1, !1)), e.dispatchEvent(A);
}
function dispatchConstant(e, D) {
	return function() {
		return dispatchEvent(this, e, D);
	};
}
function dispatchFunction(e, D) {
	return function() {
		return dispatchEvent(this, e, D.apply(this, arguments));
	};
}
function dispatch_default$1(e, D) {
	return this.each((typeof D == "function" ? dispatchFunction : dispatchConstant)(e, D));
}
function* iterator_default() {
	for (var e = this._groups, D = 0, O = e.length; D < O; ++D) for (var k = e[D], A = 0, j = k.length, M; A < j; ++A) (M = k[A]) && (yield M);
}
var root = [null];
function Selection$1(e, D) {
	this._groups = e, this._parents = D;
}
function selection() {
	return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
	return this;
}
Selection$1.prototype = selection.prototype = {
	constructor: Selection$1,
	select: select_default$2,
	selectAll: selectAll_default$1,
	selectChild: selectChild_default,
	selectChildren: selectChildren_default,
	filter: filter_default$1,
	data: data_default,
	enter: enter_default,
	exit: exit_default,
	join: join_default,
	merge: merge_default$1,
	selection: selection_selection,
	order: order_default,
	sort: sort_default,
	call: call_default,
	nodes: nodes_default,
	node: node_default,
	size: size_default,
	empty: empty_default,
	each: each_default,
	attr: attr_default$1,
	style: style_default$1,
	property: property_default,
	classed: classed_default,
	text: text_default$1,
	html: html_default,
	raise: raise_default,
	lower: lower_default,
	append: append_default,
	insert: insert_default,
	remove: remove_default$1,
	clone: clone_default,
	datum: datum_default,
	on: on_default$1,
	dispatch: dispatch_default$1,
	[Symbol.iterator]: iterator_default
};
var selection_default = selection;
function select_default$1(e) {
	return typeof e == "string" ? new Selection$1([[document.querySelector(e)]], [document.documentElement]) : new Selection$1([[e]], root);
}
function define_default(e, D, O) {
	e.prototype = D.prototype = O, O.constructor = e;
}
function extend(e, D) {
	var O = Object.create(e.prototype);
	for (var k in D) O[k] = D[k];
	return O;
}
function Color() {}
var darker = .7, brighter = 1 / darker, reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = /* @__PURE__ */ RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`), reRgbPercent = /* @__PURE__ */ RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`), reRgbaInteger = /* @__PURE__ */ RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`), reRgbaPercent = /* @__PURE__ */ RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`), reHslPercent = /* @__PURE__ */ RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`), reHslaPercent = /* @__PURE__ */ RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`), named = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
define_default(Color, color, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: color_formatHex,
	formatHex: color_formatHex,
	formatHex8: color_formatHex8,
	formatHsl: color_formatHsl,
	formatRgb: color_formatRgb,
	toString: color_formatRgb
});
function color_formatHex() {
	return this.rgb().formatHex();
}
function color_formatHex8() {
	return this.rgb().formatHex8();
}
function color_formatHsl() {
	return hslConvert(this).formatHsl();
}
function color_formatRgb() {
	return this.rgb().formatRgb();
}
function color(e) {
	var D, O;
	return e = (e + "").trim().toLowerCase(), (D = reHex.exec(e)) ? (O = D[1].length, D = parseInt(D[1], 16), O === 6 ? rgbn(D) : O === 3 ? new Rgb(D >> 8 & 15 | D >> 4 & 240, D >> 4 & 15 | D & 240, (D & 15) << 4 | D & 15, 1) : O === 8 ? rgba(D >> 24 & 255, D >> 16 & 255, D >> 8 & 255, (D & 255) / 255) : O === 4 ? rgba(D >> 12 & 15 | D >> 8 & 240, D >> 8 & 15 | D >> 4 & 240, D >> 4 & 15 | D & 240, ((D & 15) << 4 | D & 15) / 255) : null) : (D = reRgbInteger.exec(e)) ? new Rgb(D[1], D[2], D[3], 1) : (D = reRgbPercent.exec(e)) ? new Rgb(D[1] * 255 / 100, D[2] * 255 / 100, D[3] * 255 / 100, 1) : (D = reRgbaInteger.exec(e)) ? rgba(D[1], D[2], D[3], D[4]) : (D = reRgbaPercent.exec(e)) ? rgba(D[1] * 255 / 100, D[2] * 255 / 100, D[3] * 255 / 100, D[4]) : (D = reHslPercent.exec(e)) ? hsla(D[1], D[2] / 100, D[3] / 100, 1) : (D = reHslaPercent.exec(e)) ? hsla(D[1], D[2] / 100, D[3] / 100, D[4]) : named.hasOwnProperty(e) ? rgbn(named[e]) : e === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(e) {
	return new Rgb(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function rgba(e, D, O, k) {
	return k <= 0 && (e = D = O = NaN), new Rgb(e, D, O, k);
}
function rgbConvert(e) {
	return e instanceof Color || (e = color(e)), e ? (e = e.rgb(), new Rgb(e.r, e.g, e.b, e.opacity)) : new Rgb();
}
function rgb(e, D, O, k) {
	return arguments.length === 1 ? rgbConvert(e) : new Rgb(e, D, O, k ?? 1);
}
function Rgb(e, D, O, k) {
	this.r = +e, this.g = +D, this.b = +O, this.opacity = +k;
}
define_default(Rgb, rgb, extend(Color, {
	brighter(e) {
		return e = e == null ? brighter : brighter ** +e, new Rgb(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? darker : darker ** +e, new Rgb(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: rgb_formatHex,
	formatHex: rgb_formatHex,
	formatHex8: rgb_formatHex8,
	formatRgb: rgb_formatRgb,
	toString: rgb_formatRgb
}));
function rgb_formatHex() {
	return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
	return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
	let e = clampa(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function clampa(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function clampi(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function hex(e) {
	return e = clampi(e), (e < 16 ? "0" : "") + e.toString(16);
}
function hsla(e, D, O, k) {
	return k <= 0 ? e = D = O = NaN : O <= 0 || O >= 1 ? e = D = NaN : D <= 0 && (e = NaN), new Hsl(e, D, O, k);
}
function hslConvert(e) {
	if (e instanceof Hsl) return new Hsl(e.h, e.s, e.l, e.opacity);
	if (e instanceof Color || (e = color(e)), !e) return new Hsl();
	if (e instanceof Hsl) return e;
	e = e.rgb();
	var D = e.r / 255, O = e.g / 255, k = e.b / 255, A = Math.min(D, O, k), j = Math.max(D, O, k), M = NaN, N = j - A, P = (j + A) / 2;
	return N ? (M = D === j ? (O - k) / N + (O < k) * 6 : O === j ? (k - D) / N + 2 : (D - O) / N + 4, N /= P < .5 ? j + A : 2 - j - A, M *= 60) : N = P > 0 && P < 1 ? 0 : M, new Hsl(M, N, P, e.opacity);
}
function hsl(e, D, O, k) {
	return arguments.length === 1 ? hslConvert(e) : new Hsl(e, D, O, k ?? 1);
}
function Hsl(e, D, O, k) {
	this.h = +e, this.s = +D, this.l = +O, this.opacity = +k;
}
define_default(Hsl, hsl, extend(Color, {
	brighter(e) {
		return e = e == null ? brighter : brighter ** +e, new Hsl(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? darker : darker ** +e, new Hsl(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, D = isNaN(e) || isNaN(this.s) ? 0 : this.s, O = this.l, k = O + (O < .5 ? O : 1 - O) * D, A = 2 * O - k;
		return new Rgb(hsl2rgb(e >= 240 ? e - 240 : e + 120, A, k), hsl2rgb(e, A, k), hsl2rgb(e < 120 ? e + 240 : e - 120, A, k), this.opacity);
	},
	clamp() {
		return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = clampa(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function clamph(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function clampt(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function hsl2rgb(e, D, O) {
	return (e < 60 ? D + (O - D) * e / 60 : e < 180 ? O : e < 240 ? D + (O - D) * (240 - e) / 60 : D) * 255;
}
var constant_default = (e) => () => e;
function linear(e, D) {
	return function(O) {
		return e + O * D;
	};
}
function exponential(e, D, O) {
	return e **= +O, D = D ** +O - e, O = 1 / O, function(k) {
		return (e + k * D) ** +O;
	};
}
function hue(e, D) {
	var O = D - e;
	return O ? linear(e, O > 180 || O < -180 ? O - 360 * Math.round(O / 360) : O) : constant_default(isNaN(e) ? D : e);
}
function gamma(e) {
	return (e = +e) == 1 ? nogamma : function(D, O) {
		return O - D ? exponential(D, O, e) : constant_default(isNaN(D) ? O : D);
	};
}
function nogamma(e, D) {
	var O = D - e;
	return O ? linear(e, O) : constant_default(isNaN(e) ? D : e);
}
var rgb_default = (function e(D) {
	var O = gamma(D);
	function k(e, D) {
		var k = O((e = rgb(e)).r, (D = rgb(D)).r), A = O(e.g, D.g), j = O(e.b, D.b), M = nogamma(e.opacity, D.opacity);
		return function(D) {
			return e.r = k(D), e.g = A(D), e.b = j(D), e.opacity = M(D), e + "";
		};
	}
	return k.gamma = e, k;
})(1);
function number_default(e, D) {
	return e = +e, D = +D, function(O) {
		return e * (1 - O) + D * O;
	};
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(e) {
	return function() {
		return e;
	};
}
function one(e) {
	return function(D) {
		return e(D) + "";
	};
}
function string_default(e, D) {
	var O = reA.lastIndex = reB.lastIndex = 0, k, A, j, M = -1, N = [], P = [];
	for (e += "", D += ""; (k = reA.exec(e)) && (A = reB.exec(D));) (j = A.index) > O && (j = D.slice(O, j), N[M] ? N[M] += j : N[++M] = j), (k = k[0]) === (A = A[0]) ? N[M] ? N[M] += A : N[++M] = A : (N[++M] = null, P.push({
		i: M,
		x: number_default(k, A)
	})), O = reB.lastIndex;
	return O < D.length && (j = D.slice(O), N[M] ? N[M] += j : N[++M] = j), N.length < 2 ? P[0] ? one(P[0].x) : zero(D) : (D = P.length, function(e) {
		for (var O = 0, k; O < D; ++O) N[(k = P[O]).i] = k.x(e);
		return N.join("");
	});
}
var degrees = 180 / Math.PI, identity$1 = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function decompose_default(e, D, O, k, A, j) {
	var M, N, P;
	return (M = Math.sqrt(e * e + D * D)) && (e /= M, D /= M), (P = e * O + D * k) && (O -= e * P, k -= D * P), (N = Math.sqrt(O * O + k * k)) && (O /= N, k /= N, P /= N), e * k < D * O && (e = -e, D = -D, P = -P, M = -M), {
		translateX: A,
		translateY: j,
		rotate: Math.atan2(D, e) * degrees,
		skewX: Math.atan(P) * degrees,
		scaleX: M,
		scaleY: N
	};
}
var svgNode;
function parseCss(e) {
	let D = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return D.isIdentity ? identity$1 : decompose_default(D.a, D.b, D.c, D.d, D.e, D.f);
}
function parseSvg(e) {
	return e == null || (svgNode ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), svgNode.setAttribute("transform", e), !(e = svgNode.transform.baseVal.consolidate())) ? identity$1 : (e = e.matrix, decompose_default(e.a, e.b, e.c, e.d, e.e, e.f));
}
function interpolateTransform(e, D, O, k) {
	function A(e) {
		return e.length ? e.pop() + " " : "";
	}
	function j(e, k, A, j, M, N) {
		if (e !== A || k !== j) {
			var P = M.push("translate(", null, D, null, O);
			N.push({
				i: P - 4,
				x: number_default(e, A)
			}, {
				i: P - 2,
				x: number_default(k, j)
			});
		} else (A || j) && M.push("translate(" + A + D + j + O);
	}
	function M(e, D, O, j) {
		e === D ? D && O.push(A(O) + "rotate(" + D + k) : (e - D > 180 ? D += 360 : D - e > 180 && (e += 360), j.push({
			i: O.push(A(O) + "rotate(", null, k) - 2,
			x: number_default(e, D)
		}));
	}
	function N(e, D, O, j) {
		e === D ? D && O.push(A(O) + "skewX(" + D + k) : j.push({
			i: O.push(A(O) + "skewX(", null, k) - 2,
			x: number_default(e, D)
		});
	}
	function P(e, D, O, k, j, M) {
		if (e !== O || D !== k) {
			var N = j.push(A(j) + "scale(", null, ",", null, ")");
			M.push({
				i: N - 4,
				x: number_default(e, O)
			}, {
				i: N - 2,
				x: number_default(D, k)
			});
		} else (O !== 1 || k !== 1) && j.push(A(j) + "scale(" + O + "," + k + ")");
	}
	return function(D, O) {
		var k = [], A = [];
		return D = e(D), O = e(O), j(D.translateX, D.translateY, O.translateX, O.translateY, k, A), M(D.rotate, O.rotate, k, A), N(D.skewX, O.skewX, k, A), P(D.scaleX, D.scaleY, O.scaleX, O.scaleY, k, A), D = O = null, function(e) {
			for (var D = -1, O = A.length, j; ++D < O;) k[(j = A[D]).i] = j.x(e);
			return k.join("");
		};
	};
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)"), interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")"), frame = 0, timeout = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance == "object" && performance.now ? performance : Date, setFrame = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function now() {
	return clockNow ||= (setFrame(clearNow), clock.now() + clockSkew);
}
function clearNow() {
	clockNow = 0;
}
function Timer() {
	this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
	constructor: Timer,
	restart: function(e, D, O) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		O = (O == null ? now() : +O) + (D == null ? 0 : +D), !this._next && taskTail !== this && (taskTail ? taskTail._next = this : taskHead = this, taskTail = this), this._call = e, this._time = O, sleep();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, sleep());
	}
};
function timer(e, D, O) {
	var k = new Timer();
	return k.restart(e, D, O), k;
}
function timerFlush() {
	now(), ++frame;
	for (var e = taskHead, D; e;) (D = clockNow - e._time) >= 0 && e._call.call(void 0, D), e = e._next;
	--frame;
}
function wake() {
	clockNow = (clockLast = clock.now()) + clockSkew, frame = timeout = 0;
	try {
		timerFlush();
	} finally {
		frame = 0, nap(), clockNow = 0;
	}
}
function poke() {
	var e = clock.now(), D = e - clockLast;
	D > pokeDelay && (clockSkew -= D, clockLast = e);
}
function nap() {
	for (var e, D = taskHead, O, k = Infinity; D;) D._call ? (k > D._time && (k = D._time), e = D, D = D._next) : (O = D._next, D._next = null, D = e ? e._next = O : taskHead = O);
	taskTail = e, sleep(k);
}
function sleep(e) {
	frame || (timeout &&= clearTimeout(timeout), e - clockNow > 24 ? (e < Infinity && (timeout = setTimeout(wake, e - clock.now() - clockSkew)), interval &&= clearInterval(interval)) : (interval ||= (clockLast = clock.now(), setInterval(poke, pokeDelay)), frame = 1, setFrame(wake)));
}
function timeout_default(e, D, O) {
	var k = new Timer();
	return D = D == null ? 0 : +D, k.restart((O) => {
		k.stop(), e(O + D);
	}, D, O), k;
}
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt"), emptyTween = [];
function schedule_default(e, D, O, k, A, j) {
	var M = e.__transition;
	if (!M) e.__transition = {};
	else if (O in M) return;
	create(e, O, {
		name: D,
		index: k,
		group: A,
		on: emptyOn,
		tween: emptyTween,
		time: j.time,
		delay: j.delay,
		duration: j.duration,
		ease: j.ease,
		timer: null,
		state: 0
	});
}
function init(e, D) {
	var O = get(e, D);
	if (O.state > 0) throw Error("too late; already scheduled");
	return O;
}
function set(e, D) {
	var O = get(e, D);
	if (O.state > 3) throw Error("too late; already running");
	return O;
}
function get(e, D) {
	var O = e.__transition;
	if (!O || !(O = O[D])) throw Error("transition not found");
	return O;
}
function create(e, D, O) {
	var k = e.__transition, A;
	k[D] = O, O.timer = timer(j, 0, O.time);
	function j(e) {
		O.state = 1, O.timer.restart(M, O.delay, O.time), O.delay <= e && M(e - O.delay);
	}
	function M(j) {
		var F, I, L, R;
		if (O.state !== 1) return P();
		for (F in k) if (R = k[F], R.name === O.name) {
			if (R.state === 3) return timeout_default(M);
			R.state === 4 ? (R.state = 6, R.timer.stop(), R.on.call("interrupt", e, e.__data__, R.index, R.group), delete k[F]) : +F < D && (R.state = 6, R.timer.stop(), R.on.call("cancel", e, e.__data__, R.index, R.group), delete k[F]);
		}
		if (timeout_default(function() {
			O.state === 3 && (O.state = 4, O.timer.restart(N, O.delay, O.time), N(j));
		}), O.state = 2, O.on.call("start", e, e.__data__, O.index, O.group), O.state === 2) {
			for (O.state = 3, A = Array(L = O.tween.length), F = 0, I = -1; F < L; ++F) (R = O.tween[F].value.call(e, e.__data__, O.index, O.group)) && (A[++I] = R);
			A.length = I + 1;
		}
	}
	function N(D) {
		for (var k = D < O.duration ? O.ease.call(null, D / O.duration) : (O.timer.restart(P), O.state = 5, 1), j = -1, M = A.length; ++j < M;) A[j].call(e, k);
		O.state === 5 && (O.on.call("end", e, e.__data__, O.index, O.group), P());
	}
	function P() {
		for (var A in O.state = 6, O.timer.stop(), delete k[D], k) return;
		delete e.__transition;
	}
}
function interrupt_default$1(e, D) {
	var O = e.__transition, k, A, j = !0, M;
	if (O) {
		for (M in D = D == null ? null : D + "", O) {
			if ((k = O[M]).name !== D) {
				j = !1;
				continue;
			}
			A = k.state > 2 && k.state < 5, k.state = 6, k.timer.stop(), k.on.call(A ? "interrupt" : "cancel", e, e.__data__, k.index, k.group), delete O[M];
		}
		j && delete e.__transition;
	}
}
function interrupt_default(e) {
	return this.each(function() {
		interrupt_default$1(this, e);
	});
}
function tweenRemove(e, D) {
	var O, k;
	return function() {
		var A = set(this, e), j = A.tween;
		if (j !== O) {
			k = O = j;
			for (var M = 0, N = k.length; M < N; ++M) if (k[M].name === D) {
				k = k.slice(), k.splice(M, 1);
				break;
			}
		}
		A.tween = k;
	};
}
function tweenFunction(e, D, O) {
	var k, A;
	if (typeof O != "function") throw Error();
	return function() {
		var j = set(this, e), M = j.tween;
		if (M !== k) {
			A = (k = M).slice();
			for (var N = {
				name: D,
				value: O
			}, P = 0, F = A.length; P < F; ++P) if (A[P].name === D) {
				A[P] = N;
				break;
			}
			P === F && A.push(N);
		}
		j.tween = A;
	};
}
function tween_default(e, D) {
	var O = this._id;
	if (e += "", arguments.length < 2) {
		for (var k = get(this.node(), O).tween, A = 0, j = k.length, M; A < j; ++A) if ((M = k[A]).name === e) return M.value;
		return null;
	}
	return this.each((D == null ? tweenRemove : tweenFunction)(O, e, D));
}
function tweenValue(e, D, O) {
	var k = e._id;
	return e.each(function() {
		var e = set(this, k);
		(e.value ||= {})[D] = O.apply(this, arguments);
	}), function(e) {
		return get(e, k).value[D];
	};
}
function interpolate_default(e, D) {
	var O;
	return (typeof D == "number" ? number_default : D instanceof color ? rgb_default : (O = color(D)) ? (D = O, rgb_default) : string_default)(e, D);
}
function attrRemove(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function attrRemoveNS(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function attrConstant(e, D, O) {
	var k, A = O + "", j;
	return function() {
		var M = this.getAttribute(e);
		return M === A ? null : M === k ? j : j = D(k = M, O);
	};
}
function attrConstantNS(e, D, O) {
	var k, A = O + "", j;
	return function() {
		var M = this.getAttributeNS(e.space, e.local);
		return M === A ? null : M === k ? j : j = D(k = M, O);
	};
}
function attrFunction(e, D, O) {
	var k, A, j;
	return function() {
		var M, N = O(this), P;
		return N == null ? void this.removeAttribute(e) : (M = this.getAttribute(e), P = N + "", M === P ? null : M === k && P === A ? j : (A = P, j = D(k = M, N)));
	};
}
function attrFunctionNS(e, D, O) {
	var k, A, j;
	return function() {
		var M, N = O(this), P;
		return N == null ? void this.removeAttributeNS(e.space, e.local) : (M = this.getAttributeNS(e.space, e.local), P = N + "", M === P ? null : M === k && P === A ? j : (A = P, j = D(k = M, N)));
	};
}
function attr_default(e, D) {
	var O = namespace_default(e), k = O === "transform" ? interpolateTransformSvg : interpolate_default;
	return this.attrTween(e, typeof D == "function" ? (O.local ? attrFunctionNS : attrFunction)(O, k, tweenValue(this, "attr." + e, D)) : D == null ? (O.local ? attrRemoveNS : attrRemove)(O) : (O.local ? attrConstantNS : attrConstant)(O, k, D));
}
function attrInterpolate(e, D) {
	return function(O) {
		this.setAttribute(e, D.call(this, O));
	};
}
function attrInterpolateNS(e, D) {
	return function(O) {
		this.setAttributeNS(e.space, e.local, D.call(this, O));
	};
}
function attrTweenNS(e, D) {
	var O, k;
	function A() {
		var A = D.apply(this, arguments);
		return A !== k && (O = (k = A) && attrInterpolateNS(e, A)), O;
	}
	return A._value = D, A;
}
function attrTween(e, D) {
	var O, k;
	function A() {
		var A = D.apply(this, arguments);
		return A !== k && (O = (k = A) && attrInterpolate(e, A)), O;
	}
	return A._value = D, A;
}
function attrTween_default(e, D) {
	var O = "attr." + e;
	if (arguments.length < 2) return (O = this.tween(O)) && O._value;
	if (D == null) return this.tween(O, null);
	if (typeof D != "function") throw Error();
	var k = namespace_default(e);
	return this.tween(O, (k.local ? attrTweenNS : attrTween)(k, D));
}
function delayFunction(e, D) {
	return function() {
		init(this, e).delay = +D.apply(this, arguments);
	};
}
function delayConstant(e, D) {
	return D = +D, function() {
		init(this, e).delay = D;
	};
}
function delay_default(e) {
	var D = this._id;
	return arguments.length ? this.each((typeof e == "function" ? delayFunction : delayConstant)(D, e)) : get(this.node(), D).delay;
}
function durationFunction(e, D) {
	return function() {
		set(this, e).duration = +D.apply(this, arguments);
	};
}
function durationConstant(e, D) {
	return D = +D, function() {
		set(this, e).duration = D;
	};
}
function duration_default(e) {
	var D = this._id;
	return arguments.length ? this.each((typeof e == "function" ? durationFunction : durationConstant)(D, e)) : get(this.node(), D).duration;
}
function easeConstant(e, D) {
	if (typeof D != "function") throw Error();
	return function() {
		set(this, e).ease = D;
	};
}
function ease_default(e) {
	var D = this._id;
	return arguments.length ? this.each(easeConstant(D, e)) : get(this.node(), D).ease;
}
function easeVarying(e, D) {
	return function() {
		var O = D.apply(this, arguments);
		if (typeof O != "function") throw Error();
		set(this, e).ease = O;
	};
}
function easeVarying_default(e) {
	if (typeof e != "function") throw Error();
	return this.each(easeVarying(this._id, e));
}
function filter_default(e) {
	typeof e != "function" && (e = matcher_default(e));
	for (var D = this._groups, O = D.length, k = Array(O), A = 0; A < O; ++A) for (var j = D[A], M = j.length, N = k[A] = [], P, F = 0; F < M; ++F) (P = j[F]) && e.call(P, P.__data__, F, j) && N.push(P);
	return new Transition(k, this._parents, this._name, this._id);
}
function merge_default(e) {
	if (e._id !== this._id) throw Error();
	for (var D = this._groups, O = e._groups, k = D.length, A = O.length, j = Math.min(k, A), M = Array(k), N = 0; N < j; ++N) for (var P = D[N], F = O[N], I = P.length, L = M[N] = Array(I), R, z = 0; z < I; ++z) (R = P[z] || F[z]) && (L[z] = R);
	for (; N < k; ++N) M[N] = D[N];
	return new Transition(M, this._parents, this._name, this._id);
}
function start(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var D = e.indexOf(".");
		return D >= 0 && (e = e.slice(0, D)), !e || e === "start";
	});
}
function onFunction(e, D, O) {
	var k, A, j = start(D) ? init : set;
	return function() {
		var M = j(this, e), N = M.on;
		N !== k && (A = (k = N).copy()).on(D, O), M.on = A;
	};
}
function on_default(e, D) {
	var O = this._id;
	return arguments.length < 2 ? get(this.node(), O).on.on(e) : this.each(onFunction(O, e, D));
}
function removeFunction(e) {
	return function() {
		var D = this.parentNode;
		for (var O in this.__transition) if (+O !== e) return;
		D && D.removeChild(this);
	};
}
function remove_default() {
	return this.on("end.remove", removeFunction(this._id));
}
function select_default(e) {
	var D = this._name, O = this._id;
	typeof e != "function" && (e = selector_default(e));
	for (var k = this._groups, A = k.length, j = Array(A), M = 0; M < A; ++M) for (var N = k[M], P = N.length, F = j[M] = Array(P), I, L, R = 0; R < P; ++R) (I = N[R]) && (L = e.call(I, I.__data__, R, N)) && ("__data__" in I && (L.__data__ = I.__data__), F[R] = L, schedule_default(F[R], D, O, R, F, get(I, O)));
	return new Transition(j, this._parents, D, O);
}
function selectAll_default(e) {
	var D = this._name, O = this._id;
	typeof e != "function" && (e = selectorAll_default(e));
	for (var k = this._groups, A = k.length, j = [], M = [], N = 0; N < A; ++N) for (var P = k[N], F = P.length, I, L = 0; L < F; ++L) if (I = P[L]) {
		for (var R = e.call(I, I.__data__, L, P), z, B = get(I, O), V = 0, H = R.length; V < H; ++V) (z = R[V]) && schedule_default(z, D, O, V, R, B);
		j.push(R), M.push(I);
	}
	return new Transition(j, M, D, O);
}
var Selection = selection_default.prototype.constructor;
function selection_default$1() {
	return new Selection(this._groups, this._parents);
}
function styleNull(e, D) {
	var O, k, A;
	return function() {
		var j = styleValue(this, e), M = (this.style.removeProperty(e), styleValue(this, e));
		return j === M ? null : j === O && M === k ? A : A = D(O = j, k = M);
	};
}
function styleRemove(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function styleConstant(e, D, O) {
	var k, A = O + "", j;
	return function() {
		var M = styleValue(this, e);
		return M === A ? null : M === k ? j : j = D(k = M, O);
	};
}
function styleFunction(e, D, O) {
	var k, A, j;
	return function() {
		var M = styleValue(this, e), N = O(this), P = N + "";
		return N ?? (P = N = (this.style.removeProperty(e), styleValue(this, e))), M === P ? null : M === k && P === A ? j : (A = P, j = D(k = M, N));
	};
}
function styleMaybeRemove(e, D) {
	var O, k, A, j = "style." + D, M = "end." + j, N;
	return function() {
		var P = set(this, e), F = P.on, I = P.value[j] == null ? N ||= styleRemove(D) : void 0;
		(F !== O || A !== I) && (k = (O = F).copy()).on(M, A = I), P.on = k;
	};
}
function style_default(e, D, O) {
	var k = (e += "") == "transform" ? interpolateTransformCss : interpolate_default;
	return D == null ? this.styleTween(e, styleNull(e, k)).on("end.style." + e, styleRemove(e)) : typeof D == "function" ? this.styleTween(e, styleFunction(e, k, tweenValue(this, "style." + e, D))).each(styleMaybeRemove(this._id, e)) : this.styleTween(e, styleConstant(e, k, D), O).on("end.style." + e, null);
}
function styleInterpolate(e, D, O) {
	return function(k) {
		this.style.setProperty(e, D.call(this, k), O);
	};
}
function styleTween(e, D, O) {
	var k, A;
	function j() {
		var j = D.apply(this, arguments);
		return j !== A && (k = (A = j) && styleInterpolate(e, j, O)), k;
	}
	return j._value = D, j;
}
function styleTween_default(e, D, O) {
	var k = "style." + (e += "");
	if (arguments.length < 2) return (k = this.tween(k)) && k._value;
	if (D == null) return this.tween(k, null);
	if (typeof D != "function") throw Error();
	return this.tween(k, styleTween(e, D, O ?? ""));
}
function textConstant(e) {
	return function() {
		this.textContent = e;
	};
}
function textFunction(e) {
	return function() {
		this.textContent = e(this) ?? "";
	};
}
function text_default(e) {
	return this.tween("text", typeof e == "function" ? textFunction(tweenValue(this, "text", e)) : textConstant(e == null ? "" : e + ""));
}
function textInterpolate(e) {
	return function(D) {
		this.textContent = e.call(this, D);
	};
}
function textTween(e) {
	var D, O;
	function k() {
		var k = e.apply(this, arguments);
		return k !== O && (D = (O = k) && textInterpolate(k)), D;
	}
	return k._value = e, k;
}
function textTween_default(e) {
	var D = "text";
	if (arguments.length < 1) return (D = this.tween(D)) && D._value;
	if (e == null) return this.tween(D, null);
	if (typeof e != "function") throw Error();
	return this.tween(D, textTween(e));
}
function transition_default$1() {
	for (var e = this._name, D = this._id, O = newId(), k = this._groups, A = k.length, j = 0; j < A; ++j) for (var M = k[j], N = M.length, P, F = 0; F < N; ++F) if (P = M[F]) {
		var I = get(P, D);
		schedule_default(P, e, O, F, M, {
			time: I.time + I.delay + I.duration,
			delay: 0,
			duration: I.duration,
			ease: I.ease
		});
	}
	return new Transition(k, this._parents, e, O);
}
function end_default() {
	var e, D, O = this, k = O._id, A = O.size();
	return new Promise(function(j, M) {
		var N = { value: M }, P = { value: function() {
			--A === 0 && j();
		} };
		O.each(function() {
			var O = set(this, k), A = O.on;
			A !== e && (D = (e = A).copy(), D._.cancel.push(N), D._.interrupt.push(N), D._.end.push(P)), O.on = D;
		}), A === 0 && j();
	});
}
var id = 0;
function Transition(e, D, O, k) {
	this._groups = e, this._parents = D, this._name = O, this._id = k;
}
function transition(e) {
	return selection_default().transition(e);
}
function newId() {
	return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
	constructor: Transition,
	select: select_default,
	selectAll: selectAll_default,
	selectChild: selection_prototype.selectChild,
	selectChildren: selection_prototype.selectChildren,
	filter: filter_default,
	merge: merge_default,
	selection: selection_default$1,
	transition: transition_default$1,
	call: selection_prototype.call,
	nodes: selection_prototype.nodes,
	node: selection_prototype.node,
	size: selection_prototype.size,
	empty: selection_prototype.empty,
	each: selection_prototype.each,
	on: on_default,
	attr: attr_default,
	attrTween: attrTween_default,
	style: style_default,
	styleTween: styleTween_default,
	text: text_default,
	textTween: textTween_default,
	remove: remove_default,
	tween: tween_default,
	delay: delay_default,
	duration: duration_default,
	ease: ease_default,
	easeVarying: easeVarying_default,
	end: end_default,
	[Symbol.iterator]: selection_prototype[Symbol.iterator]
};
function cubicInOut(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var defaultTiming = {
	time: null,
	delay: 0,
	duration: 250,
	ease: cubicInOut
};
function inherit(e, D) {
	for (var O; !(O = e.__transition) || !(O = O[D]);) if (!(e = e.parentNode)) throw Error(`transition ${D} not found`);
	return O;
}
function transition_default(e) {
	var D, O;
	e instanceof Transition ? (D = e._id, e = e._name) : (D = newId(), (O = defaultTiming).time = now(), e = e == null ? null : e + "");
	for (var k = this._groups, A = k.length, j = 0; j < A; ++j) for (var M = k[j], N = M.length, P, F = 0; F < N; ++F) (P = M[F]) && schedule_default(P, e, D, F, M, O || inherit(P, D));
	return new Transition(k, this._parents, e, D);
}
selection_default.prototype.interrupt = interrupt_default, selection_default.prototype.transition = transition_default;
var { abs, max, min } = Math;
["w", "e"].map(type), ["n", "s"].map(type), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(type);
function type(e) {
	return { type: e };
}
function Transform(e, D, O) {
	this.k = e, this.x = D, this.y = O;
}
Transform.prototype = {
	constructor: Transform,
	scale: function(e) {
		return e === 1 ? this : new Transform(this.k * e, this.x, this.y);
	},
	translate: function(e, D) {
		return e === 0 & D === 0 ? this : new Transform(this.k, this.x + this.k * e, this.y + this.k * D);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return identity;
	return e.__zoom;
}
export { nogamma as a, Rgb as c, define_default as d, extend as f, require_dayjs_min as g, setLogLevel as h, hue as i, color as l, log as m, number_default as n, constant_default as o, select_default$1 as p, rgb_default as r, Color as s, string_default as t, rgbConvert as u };
