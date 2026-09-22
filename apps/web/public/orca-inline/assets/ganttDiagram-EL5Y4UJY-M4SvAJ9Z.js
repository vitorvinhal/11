import { a as __toESM, t as __commonJSMin } from "./chunk-BKjlJnyO.js";
import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { a as nogamma, c as Rgb, d as define_default, f as extend, g as require_dayjs_min, i as hue, m as log, p as select_default, s as Color, u as rgbConvert } from "./src-DXrlgw8l.js";
import { H as setAccDescription, K as setDiagramTitle, U as setAccTitle, a as clear, c as configureSvgSize, s as common_default, v as getAccDescription, w as getDiagramTitle, x as getConfig2, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import { a as bisector, i as tickStep, n as continuous, r as copy, t as linear } from "./linear-ClH_z5d-.js";
import "./defaultLocale-DtvfgHTZ.js";
import { t as initRange } from "./init-Dgso81y6.js";
import { t as require_dist } from "./dist-DRK-BflQ.js";
import { _ as utils_default } from "./chunk-75Z2AOVW-DlWr2fif.js";
function max(i, c) {
	let l;
	if (c === void 0) for (let c of i) c != null && (l < c || l === void 0 && c >= c) && (l = c);
	else {
		let u = -1;
		for (let d of i) (d = c(d, ++u, i)) != null && (l < d || l === void 0 && d >= d) && (l = d);
	}
	return l;
}
function min(i, c) {
	let l;
	if (c === void 0) for (let c of i) c != null && (l > c || l === void 0 && c >= c) && (l = c);
	else {
		let u = -1;
		for (let d of i) (d = c(d, ++u, i)) != null && (l > d || l === void 0 && d >= d) && (l = d);
	}
	return l;
}
function identity_default(i) {
	return i;
}
var top = 1, right = 2, bottom = 3, left = 4, epsilon = 1e-6;
function translateX(i) {
	return "translate(" + i + ",0)";
}
function translateY(i) {
	return "translate(0," + i + ")";
}
function number$1(i) {
	return (c) => +i(c);
}
function center(i, c) {
	return c = Math.max(0, i.bandwidth() - c * 2) / 2, i.round() && (c = Math.round(c)), (l) => +i(l) + c;
}
function entering() {
	return !this.__axis;
}
function axis(i, c) {
	var l = [], u = null, d = null, f = 6, p = 6, m = 3, h = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, g = i === top || i === left ? -1 : 1, _ = i === left || i === right ? "x" : "y", v = i === top || i === bottom ? translateX : translateY;
	function y(y) {
		var b = u ?? (c.ticks ? c.ticks.apply(c, l) : c.domain()), x = d ?? (c.tickFormat ? c.tickFormat.apply(c, l) : identity_default), S = Math.max(f, 0) + m, C = c.range(), T = +C[0] + h, E = +C[C.length - 1] + h, D = (c.bandwidth ? center : number$1)(c.copy(), h), O = y.selection ? y.selection() : y, k = O.selectAll(".domain").data([null]), A = O.selectAll(".tick").data(b, c).order(), j = A.exit(), M = A.enter().append("g").attr("class", "tick"), N = A.select("line"), P = A.select("text");
		k = k.merge(k.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(M), N = N.merge(M.append("line").attr("stroke", "currentColor").attr(_ + "2", g * f)), P = P.merge(M.append("text").attr("fill", "currentColor").attr(_, g * S).attr("dy", i === top ? "0em" : i === bottom ? "0.71em" : "0.32em")), y !== O && (k = k.transition(y), A = A.transition(y), N = N.transition(y), P = P.transition(y), j = j.transition(y).attr("opacity", epsilon).attr("transform", function(i) {
			return isFinite(i = D(i)) ? v(i + h) : this.getAttribute("transform");
		}), M.attr("opacity", epsilon).attr("transform", function(i) {
			var c = this.parentNode.__axis;
			return v((c && isFinite(c = c(i)) ? c : D(i)) + h);
		})), j.remove(), k.attr("d", i === left || i === right ? p ? "M" + g * p + "," + T + "H" + h + "V" + E + "H" + g * p : "M" + h + "," + T + "V" + E : p ? "M" + T + "," + g * p + "V" + h + "H" + E + "V" + g * p : "M" + T + "," + h + "H" + E), A.attr("opacity", 1).attr("transform", function(i) {
			return v(D(i) + h);
		}), N.attr(_ + "2", g * f), P.attr(_, g * S).text(x), O.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", i === right ? "start" : i === left ? "end" : "middle"), O.each(function() {
			this.__axis = D;
		});
	}
	return y.scale = function(i) {
		return arguments.length ? (c = i, y) : c;
	}, y.ticks = function() {
		return l = Array.from(arguments), y;
	}, y.tickArguments = function(i) {
		return arguments.length ? (l = i == null ? [] : Array.from(i), y) : l.slice();
	}, y.tickValues = function(i) {
		return arguments.length ? (u = i == null ? null : Array.from(i), y) : u && u.slice();
	}, y.tickFormat = function(i) {
		return arguments.length ? (d = i, y) : d;
	}, y.tickSize = function(i) {
		return arguments.length ? (f = p = +i, y) : f;
	}, y.tickSizeInner = function(i) {
		return arguments.length ? (f = +i, y) : f;
	}, y.tickSizeOuter = function(i) {
		return arguments.length ? (p = +i, y) : p;
	}, y.tickPadding = function(i) {
		return arguments.length ? (m = +i, y) : m;
	}, y.offset = function(i) {
		return arguments.length ? (h = +i, y) : h;
	}, y;
}
function axisTop(i) {
	return axis(top, i);
}
function axisBottom(i) {
	return axis(bottom, i);
}
const radians = Math.PI / 180, degrees = 180 / Math.PI;
var K = 18, Xn = .96422, Yn = 1, Zn = .82521, t0$1 = 4 / 29, t1$1 = 6 / 29, t2 = 3 * t1$1 * t1$1, t3 = t1$1 * t1$1 * t1$1;
function labConvert(i) {
	if (i instanceof Lab) return new Lab(i.l, i.a, i.b, i.opacity);
	if (i instanceof Hcl) return hcl2lab(i);
	i instanceof Rgb || (i = rgbConvert(i));
	var c = rgb2lrgb(i.r), l = rgb2lrgb(i.g), u = rgb2lrgb(i.b), f = xyz2lab((.2225045 * c + .7168786 * l + .0606169 * u) / Yn), p, m;
	return c === l && l === u ? p = m = f : (p = xyz2lab((.4360747 * c + .3850649 * l + .1430804 * u) / Xn), m = xyz2lab((.0139322 * c + .0971045 * l + .7141733 * u) / Zn)), new Lab(116 * f - 16, 500 * (p - f), 200 * (f - m), i.opacity);
}
function lab(i, c, l, u) {
	return arguments.length === 1 ? labConvert(i) : new Lab(i, c, l, u ?? 1);
}
function Lab(i, c, l, u) {
	this.l = +i, this.a = +c, this.b = +l, this.opacity = +u;
}
define_default(Lab, lab, extend(Color, {
	brighter(i) {
		return new Lab(this.l + K * (i ?? 1), this.a, this.b, this.opacity);
	},
	darker(i) {
		return new Lab(this.l - K * (i ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var i = (this.l + 16) / 116, c = isNaN(this.a) ? i : i + this.a / 500, l = isNaN(this.b) ? i : i - this.b / 200;
		return c = Xn * lab2xyz(c), i = Yn * lab2xyz(i), l = Zn * lab2xyz(l), new Rgb(lrgb2rgb(3.1338561 * c - 1.6168667 * i - .4906146 * l), lrgb2rgb(-.9787684 * c + 1.9161415 * i + .033454 * l), lrgb2rgb(.0719453 * c - .2289914 * i + 1.4052427 * l), this.opacity);
	}
}));
function xyz2lab(i) {
	return i > t3 ? i ** (1 / 3) : i / t2 + t0$1;
}
function lab2xyz(i) {
	return i > t1$1 ? i * i * i : t2 * (i - t0$1);
}
function lrgb2rgb(i) {
	return 255 * (i <= .0031308 ? 12.92 * i : 1.055 * i ** (1 / 2.4) - .055);
}
function rgb2lrgb(i) {
	return (i /= 255) <= .04045 ? i / 12.92 : ((i + .055) / 1.055) ** 2.4;
}
function hclConvert(i) {
	if (i instanceof Hcl) return new Hcl(i.h, i.c, i.l, i.opacity);
	if (i instanceof Lab || (i = labConvert(i)), i.a === 0 && i.b === 0) return new Hcl(NaN, 0 < i.l && i.l < 100 ? 0 : NaN, i.l, i.opacity);
	var c = Math.atan2(i.b, i.a) * degrees;
	return new Hcl(c < 0 ? c + 360 : c, Math.sqrt(i.a * i.a + i.b * i.b), i.l, i.opacity);
}
function hcl(i, c, l, u) {
	return arguments.length === 1 ? hclConvert(i) : new Hcl(i, c, l, u ?? 1);
}
function Hcl(i, c, l, u) {
	this.h = +i, this.c = +c, this.l = +l, this.opacity = +u;
}
function hcl2lab(i) {
	if (isNaN(i.h)) return new Lab(i.l, 0, 0, i.opacity);
	var c = i.h * radians;
	return new Lab(i.l, Math.cos(c) * i.c, Math.sin(c) * i.c, i.opacity);
}
define_default(Hcl, hcl, extend(Color, {
	brighter(i) {
		return new Hcl(this.h, this.c, this.l + K * (i ?? 1), this.opacity);
	},
	darker(i) {
		return new Hcl(this.h, this.c, this.l - K * (i ?? 1), this.opacity);
	},
	rgb() {
		return hcl2lab(this).rgb();
	}
}));
function hcl$1(i) {
	return function(c, l) {
		var d = i((c = hcl(c)).h, (l = hcl(l)).h), f = nogamma(c.c, l.c), p = nogamma(c.l, l.l), m = nogamma(c.opacity, l.opacity);
		return function(i) {
			return c.h = d(i), c.c = f(i), c.l = p(i), c.opacity = m(i), c + "";
		};
	};
}
var hcl_default = hcl$1(hue);
function nice(i, c) {
	i = i.slice();
	var l = 0, u = i.length - 1, d = i[l], f = i[u], p;
	return f < d && (p = l, l = u, u = p, p = d, d = f, f = p), i[l] = c.floor(d), i[u] = c.ceil(f), i;
}
var t0 = /* @__PURE__ */ new Date(), t1 = /* @__PURE__ */ new Date();
function timeInterval(i, c, l, u) {
	function d(c) {
		return i(c = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+c)), c;
	}
	return d.floor = (c) => (i(c = /* @__PURE__ */ new Date(+c)), c), d.ceil = (l) => (i(l = /* @__PURE__ */ new Date(l - 1)), c(l, 1), i(l), l), d.round = (i) => {
		let c = d(i), l = d.ceil(i);
		return i - c < l - i ? c : l;
	}, d.offset = (i, l) => (c(i = /* @__PURE__ */ new Date(+i), l == null ? 1 : Math.floor(l)), i), d.range = (l, u, f) => {
		let p = [];
		if (l = d.ceil(l), f = f == null ? 1 : Math.floor(f), !(l < u) || !(f > 0)) return p;
		let m;
		do
			p.push(m = /* @__PURE__ */ new Date(+l)), c(l, f), i(l);
		while (m < l && l < u);
		return p;
	}, d.filter = (l) => timeInterval((c) => {
		if (c >= c) for (; i(c), !l(c);) c.setTime(c - 1);
	}, (i, u) => {
		if (i >= i) if (u < 0) for (; ++u <= 0;) for (; c(i, -1), !l(i););
		else for (; --u >= 0;) for (; c(i, 1), !l(i););
	}), l && (d.count = (c, u) => (t0.setTime(+c), t1.setTime(+u), i(t0), i(t1), Math.floor(l(t0, t1))), d.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? d.filter(u ? (c) => u(c) % i === 0 : (c) => d.count(0, c) % i === 0) : d)), d;
}
const millisecond = timeInterval(() => {}, (i, c) => {
	i.setTime(+i + c);
}, (i, c) => c - i);
millisecond.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? timeInterval((c) => {
	c.setTime(Math.floor(c / i) * i);
}, (c, l) => {
	c.setTime(+c + l * i);
}, (c, l) => (l - c) / i) : millisecond), millisecond.range;
const durationSecond = 1e3, durationMinute = durationSecond * 60, durationHour = durationMinute * 60, durationDay = durationHour * 24, durationWeek = durationDay * 7, durationMonth = durationDay * 30, durationYear = durationDay * 365, second = timeInterval((i) => {
	i.setTime(i - i.getMilliseconds());
}, (i, c) => {
	i.setTime(+i + c * durationSecond);
}, (i, c) => (c - i) / durationSecond, (i) => i.getUTCSeconds());
second.range;
const timeMinute = timeInterval((i) => {
	i.setTime(i - i.getMilliseconds() - i.getSeconds() * durationSecond);
}, (i, c) => {
	i.setTime(+i + c * durationMinute);
}, (i, c) => (c - i) / durationMinute, (i) => i.getMinutes());
timeMinute.range;
const utcMinute = timeInterval((i) => {
	i.setUTCSeconds(0, 0);
}, (i, c) => {
	i.setTime(+i + c * durationMinute);
}, (i, c) => (c - i) / durationMinute, (i) => i.getUTCMinutes());
utcMinute.range;
const timeHour = timeInterval((i) => {
	i.setTime(i - i.getMilliseconds() - i.getSeconds() * durationSecond - i.getMinutes() * durationMinute);
}, (i, c) => {
	i.setTime(+i + c * durationHour);
}, (i, c) => (c - i) / durationHour, (i) => i.getHours());
timeHour.range;
const utcHour = timeInterval((i) => {
	i.setUTCMinutes(0, 0, 0);
}, (i, c) => {
	i.setTime(+i + c * durationHour);
}, (i, c) => (c - i) / durationHour, (i) => i.getUTCHours());
utcHour.range;
const timeDay = timeInterval((i) => i.setHours(0, 0, 0, 0), (i, c) => i.setDate(i.getDate() + c), (i, c) => (c - i - (c.getTimezoneOffset() - i.getTimezoneOffset()) * durationMinute) / durationDay, (i) => i.getDate() - 1);
timeDay.range;
const utcDay = timeInterval((i) => {
	i.setUTCHours(0, 0, 0, 0);
}, (i, c) => {
	i.setUTCDate(i.getUTCDate() + c);
}, (i, c) => (c - i) / durationDay, (i) => i.getUTCDate() - 1);
utcDay.range;
const unixDay = timeInterval((i) => {
	i.setUTCHours(0, 0, 0, 0);
}, (i, c) => {
	i.setUTCDate(i.getUTCDate() + c);
}, (i, c) => (c - i) / durationDay, (i) => Math.floor(i / durationDay));
unixDay.range;
function timeWeekday(i) {
	return timeInterval((c) => {
		c.setDate(c.getDate() - (c.getDay() + 7 - i) % 7), c.setHours(0, 0, 0, 0);
	}, (i, c) => {
		i.setDate(i.getDate() + c * 7);
	}, (i, c) => (c - i - (c.getTimezoneOffset() - i.getTimezoneOffset()) * durationMinute) / durationWeek);
}
const timeSunday = timeWeekday(0), timeMonday = timeWeekday(1), timeTuesday = timeWeekday(2), timeWednesday = timeWeekday(3), timeThursday = timeWeekday(4), timeFriday = timeWeekday(5), timeSaturday = timeWeekday(6);
timeSunday.range, timeMonday.range, timeTuesday.range, timeWednesday.range, timeThursday.range, timeFriday.range, timeSaturday.range;
function utcWeekday(i) {
	return timeInterval((c) => {
		c.setUTCDate(c.getUTCDate() - (c.getUTCDay() + 7 - i) % 7), c.setUTCHours(0, 0, 0, 0);
	}, (i, c) => {
		i.setUTCDate(i.getUTCDate() + c * 7);
	}, (i, c) => (c - i) / durationWeek);
}
const utcSunday = utcWeekday(0), utcMonday = utcWeekday(1), utcTuesday = utcWeekday(2), utcWednesday = utcWeekday(3), utcThursday = utcWeekday(4), utcFriday = utcWeekday(5), utcSaturday = utcWeekday(6);
utcSunday.range, utcMonday.range, utcTuesday.range, utcWednesday.range, utcThursday.range, utcFriday.range, utcSaturday.range;
const timeMonth = timeInterval((i) => {
	i.setDate(1), i.setHours(0, 0, 0, 0);
}, (i, c) => {
	i.setMonth(i.getMonth() + c);
}, (i, c) => c.getMonth() - i.getMonth() + (c.getFullYear() - i.getFullYear()) * 12, (i) => i.getMonth());
timeMonth.range;
const utcMonth = timeInterval((i) => {
	i.setUTCDate(1), i.setUTCHours(0, 0, 0, 0);
}, (i, c) => {
	i.setUTCMonth(i.getUTCMonth() + c);
}, (i, c) => c.getUTCMonth() - i.getUTCMonth() + (c.getUTCFullYear() - i.getUTCFullYear()) * 12, (i) => i.getUTCMonth());
utcMonth.range;
const timeYear = timeInterval((i) => {
	i.setMonth(0, 1), i.setHours(0, 0, 0, 0);
}, (i, c) => {
	i.setFullYear(i.getFullYear() + c);
}, (i, c) => c.getFullYear() - i.getFullYear(), (i) => i.getFullYear());
timeYear.every = (i) => !isFinite(i = Math.floor(i)) || !(i > 0) ? null : timeInterval((c) => {
	c.setFullYear(Math.floor(c.getFullYear() / i) * i), c.setMonth(0, 1), c.setHours(0, 0, 0, 0);
}, (c, l) => {
	c.setFullYear(c.getFullYear() + l * i);
}), timeYear.range;
const utcYear = timeInterval((i) => {
	i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
}, (i, c) => {
	i.setUTCFullYear(i.getUTCFullYear() + c);
}, (i, c) => c.getUTCFullYear() - i.getUTCFullYear(), (i) => i.getUTCFullYear());
utcYear.every = (i) => !isFinite(i = Math.floor(i)) || !(i > 0) ? null : timeInterval((c) => {
	c.setUTCFullYear(Math.floor(c.getUTCFullYear() / i) * i), c.setUTCMonth(0, 1), c.setUTCHours(0, 0, 0, 0);
}, (c, l) => {
	c.setUTCFullYear(c.getUTCFullYear() + l * i);
}), utcYear.range;
function ticker(i, c, l, u, d, f) {
	let p = [
		[
			second,
			1,
			durationSecond
		],
		[
			second,
			5,
			5 * durationSecond
		],
		[
			second,
			15,
			15 * durationSecond
		],
		[
			second,
			30,
			30 * durationSecond
		],
		[
			f,
			1,
			durationMinute
		],
		[
			f,
			5,
			5 * durationMinute
		],
		[
			f,
			15,
			15 * durationMinute
		],
		[
			f,
			30,
			30 * durationMinute
		],
		[
			d,
			1,
			durationHour
		],
		[
			d,
			3,
			3 * durationHour
		],
		[
			d,
			6,
			6 * durationHour
		],
		[
			d,
			12,
			12 * durationHour
		],
		[
			u,
			1,
			durationDay
		],
		[
			u,
			2,
			2 * durationDay
		],
		[
			l,
			1,
			durationWeek
		],
		[
			c,
			1,
			durationMonth
		],
		[
			c,
			3,
			3 * durationMonth
		],
		[
			i,
			1,
			durationYear
		]
	];
	function m(i, c, l) {
		let u = c < i;
		u && ([i, c] = [c, i]);
		let d = l && typeof l.range == "function" ? l : h(i, c, l), f = d ? d.range(i, +c + 1) : [];
		return u ? f.reverse() : f;
	}
	function h(c, l, u) {
		let d = Math.abs(l - c) / u, f = bisector(([, , i]) => i).right(p, d);
		if (f === p.length) return i.every(tickStep(c / durationYear, l / durationYear, u));
		if (f === 0) return millisecond.every(Math.max(tickStep(c, l, u), 1));
		let [m, h] = p[d / p[f - 1][2] < p[f][2] / d ? f - 1 : f];
		return m.every(h);
	}
	return [m, h];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute), [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);
function localDate(i) {
	if (0 <= i.y && i.y < 100) {
		var c = new Date(-1, i.m, i.d, i.H, i.M, i.S, i.L);
		return c.setFullYear(i.y), c;
	}
	return new Date(i.y, i.m, i.d, i.H, i.M, i.S, i.L);
}
function utcDate(i) {
	if (0 <= i.y && i.y < 100) {
		var c = new Date(Date.UTC(-1, i.m, i.d, i.H, i.M, i.S, i.L));
		return c.setUTCFullYear(i.y), c;
	}
	return new Date(Date.UTC(i.y, i.m, i.d, i.H, i.M, i.S, i.L));
}
function newDate(i, c, l) {
	return {
		y: i,
		m: c,
		d: l,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function formatLocale(i) {
	var c = i.dateTime, l = i.date, u = i.time, d = i.periods, f = i.days, p = i.shortDays, m = i.months, h = i.shortMonths, g = formatRe(d), _ = formatLookup(d), v = formatRe(f), y = formatLookup(f), b = formatRe(p), x = formatLookup(p), S = formatRe(m), C = formatLookup(m), T = formatRe(h), E = formatLookup(h), D = {
		a: V,
		A: H,
		b: U,
		B: W,
		c: null,
		d: formatDayOfMonth,
		e: formatDayOfMonth,
		f: formatMicroseconds,
		g: formatYearISO,
		G: formatFullYearISO,
		H: formatHour24,
		I: formatHour12,
		j: formatDayOfYear,
		L: formatMilliseconds,
		m: formatMonthNumber,
		M: formatMinutes,
		p: G,
		q,
		Q: formatUnixTimestamp,
		s: formatUnixTimestampSeconds,
		S: formatSeconds,
		u: formatWeekdayNumberMonday,
		U: formatWeekNumberSunday,
		V: formatWeekNumberISO,
		w: formatWeekdayNumberSunday,
		W: formatWeekNumberMonday,
		x: null,
		X: null,
		y: formatYear,
		Y: formatFullYear,
		Z: formatZone,
		"%": formatLiteralPercent
	}, O = {
		a: J,
		A: Y,
		b: X,
		B: Z,
		c: null,
		d: formatUTCDayOfMonth,
		e: formatUTCDayOfMonth,
		f: formatUTCMicroseconds,
		g: formatUTCYearISO,
		G: formatUTCFullYearISO,
		H: formatUTCHour24,
		I: formatUTCHour12,
		j: formatUTCDayOfYear,
		L: formatUTCMilliseconds,
		m: formatUTCMonthNumber,
		M: formatUTCMinutes,
		p: Q,
		q: $,
		Q: formatUnixTimestamp,
		s: formatUnixTimestampSeconds,
		S: formatUTCSeconds,
		u: formatUTCWeekdayNumberMonday,
		U: formatUTCWeekNumberSunday,
		V: formatUTCWeekNumberISO,
		w: formatUTCWeekdayNumberSunday,
		W: formatUTCWeekNumberMonday,
		x: null,
		X: null,
		y: formatUTCYear,
		Y: formatUTCFullYear,
		Z: formatUTCZone,
		"%": formatLiteralPercent
	}, k = {
		a: P,
		A: F,
		b: I,
		B: L,
		c: R,
		d: parseDayOfMonth,
		e: parseDayOfMonth,
		f: parseMicroseconds,
		g: parseYear,
		G: parseFullYear,
		H: parseHour24,
		I: parseHour24,
		j: parseDayOfYear,
		L: parseMilliseconds,
		m: parseMonthNumber,
		M: parseMinutes,
		p: N,
		q: parseQuarter,
		Q: parseUnixTimestamp,
		s: parseUnixTimestampSeconds,
		S: parseSeconds,
		u: parseWeekdayNumberMonday,
		U: parseWeekNumberSunday,
		V: parseWeekNumberISO,
		w: parseWeekdayNumberSunday,
		W: parseWeekNumberMonday,
		x: z,
		X: B,
		y: parseYear,
		Y: parseFullYear,
		Z: parseZone,
		"%": parseLiteralPercent
	};
	D.x = A(l, D), D.X = A(u, D), D.c = A(c, D), O.x = A(l, O), O.X = A(u, O), O.c = A(c, O);
	function A(i, c) {
		return function(l) {
			var u = [], d = -1, f = 0, p = i.length, m, h, g;
			for (l instanceof Date || (l = /* @__PURE__ */ new Date(+l)); ++d < p;) i.charCodeAt(d) === 37 && (u.push(i.slice(f, d)), (h = pads[m = i.charAt(++d)]) == null ? h = m === "e" ? " " : "0" : m = i.charAt(++d), (g = c[m]) && (m = g(l, h)), u.push(m), f = d + 1);
			return u.push(i.slice(f, d)), u.join("");
		};
	}
	function j(i, c) {
		return function(l) {
			var u = newDate(1900, void 0, 1), d = M(u, i, l += "", 0), f, p;
			if (d != l.length) return null;
			if ("Q" in u) return new Date(u.Q);
			if ("s" in u) return new Date(u.s * 1e3 + ("L" in u ? u.L : 0));
			if (c && !("Z" in u) && (u.Z = 0), "p" in u && (u.H = u.H % 12 + u.p * 12), u.m === void 0 && (u.m = "q" in u ? u.q : 0), "V" in u) {
				if (u.V < 1 || u.V > 53) return null;
				"w" in u || (u.w = 1), "Z" in u ? (f = utcDate(newDate(u.y, 0, 1)), p = f.getUTCDay(), f = p > 4 || p === 0 ? utcMonday.ceil(f) : utcMonday(f), f = utcDay.offset(f, (u.V - 1) * 7), u.y = f.getUTCFullYear(), u.m = f.getUTCMonth(), u.d = f.getUTCDate() + (u.w + 6) % 7) : (f = localDate(newDate(u.y, 0, 1)), p = f.getDay(), f = p > 4 || p === 0 ? timeMonday.ceil(f) : timeMonday(f), f = timeDay.offset(f, (u.V - 1) * 7), u.y = f.getFullYear(), u.m = f.getMonth(), u.d = f.getDate() + (u.w + 6) % 7);
			} else ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), p = "Z" in u ? utcDate(newDate(u.y, 0, 1)).getUTCDay() : localDate(newDate(u.y, 0, 1)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + u.W * 7 - (p + 5) % 7 : u.w + u.U * 7 - (p + 6) % 7);
			return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, utcDate(u)) : localDate(u);
		};
	}
	function M(i, c, l, u) {
		for (var d = 0, f = c.length, p = l.length, m, h; d < f;) {
			if (u >= p) return -1;
			if (m = c.charCodeAt(d++), m === 37) {
				if (m = c.charAt(d++), h = k[m in pads ? c.charAt(d++) : m], !h || (u = h(i, l, u)) < 0) return -1;
			} else if (m != l.charCodeAt(u++)) return -1;
		}
		return u;
	}
	function N(i, c, l) {
		var u = g.exec(c.slice(l));
		return u ? (i.p = _.get(u[0].toLowerCase()), l + u[0].length) : -1;
	}
	function P(i, c, l) {
		var u = b.exec(c.slice(l));
		return u ? (i.w = x.get(u[0].toLowerCase()), l + u[0].length) : -1;
	}
	function F(i, c, l) {
		var u = v.exec(c.slice(l));
		return u ? (i.w = y.get(u[0].toLowerCase()), l + u[0].length) : -1;
	}
	function I(i, c, l) {
		var u = T.exec(c.slice(l));
		return u ? (i.m = E.get(u[0].toLowerCase()), l + u[0].length) : -1;
	}
	function L(i, c, l) {
		var u = S.exec(c.slice(l));
		return u ? (i.m = C.get(u[0].toLowerCase()), l + u[0].length) : -1;
	}
	function R(i, l, u) {
		return M(i, c, l, u);
	}
	function z(i, c, u) {
		return M(i, l, c, u);
	}
	function B(i, c, l) {
		return M(i, u, c, l);
	}
	function V(i) {
		return p[i.getDay()];
	}
	function H(i) {
		return f[i.getDay()];
	}
	function U(i) {
		return h[i.getMonth()];
	}
	function W(i) {
		return m[i.getMonth()];
	}
	function G(i) {
		return d[+(i.getHours() >= 12)];
	}
	function q(i) {
		return 1 + ~~(i.getMonth() / 3);
	}
	function J(i) {
		return p[i.getUTCDay()];
	}
	function Y(i) {
		return f[i.getUTCDay()];
	}
	function X(i) {
		return h[i.getUTCMonth()];
	}
	function Z(i) {
		return m[i.getUTCMonth()];
	}
	function Q(i) {
		return d[+(i.getUTCHours() >= 12)];
	}
	function $(i) {
		return 1 + ~~(i.getUTCMonth() / 3);
	}
	return {
		format: function(i) {
			var c = A(i += "", D);
			return c.toString = function() {
				return i;
			}, c;
		},
		parse: function(i) {
			var c = j(i += "", !1);
			return c.toString = function() {
				return i;
			}, c;
		},
		utcFormat: function(i) {
			var c = A(i += "", O);
			return c.toString = function() {
				return i;
			}, c;
		},
		utcParse: function(i) {
			var c = j(i += "", !0);
			return c.toString = function() {
				return i;
			}, c;
		}
	};
}
var pads = {
	"-": "",
	_: " ",
	0: "0"
}, numberRe = /^\s*\d+/, percentRe = /^%/, requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(i, c, l) {
	var u = i < 0 ? "-" : "", d = (u ? -i : i) + "", f = d.length;
	return u + (f < l ? Array(l - f + 1).join(c) + d : d);
}
function requote(i) {
	return i.replace(requoteRe, "\\$&");
}
function formatRe(i) {
	return RegExp("^(?:" + i.map(requote).join("|") + ")", "i");
}
function formatLookup(i) {
	return new Map(i.map((i, c) => [i.toLowerCase(), c]));
}
function parseWeekdayNumberSunday(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 1));
	return u ? (i.w = +u[0], l + u[0].length) : -1;
}
function parseWeekdayNumberMonday(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 1));
	return u ? (i.u = +u[0], l + u[0].length) : -1;
}
function parseWeekNumberSunday(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 2));
	return u ? (i.U = +u[0], l + u[0].length) : -1;
}
function parseWeekNumberISO(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 2));
	return u ? (i.V = +u[0], l + u[0].length) : -1;
}
function parseWeekNumberMonday(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 2));
	return u ? (i.W = +u[0], l + u[0].length) : -1;
}
function parseFullYear(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 4));
	return u ? (i.y = +u[0], l + u[0].length) : -1;
}
function parseYear(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 2));
	return u ? (i.y = +u[0] + (+u[0] > 68 ? 1900 : 2e3), l + u[0].length) : -1;
}
function parseZone(i, c, l) {
	var u = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(c.slice(l, l + 6));
	return u ? (i.Z = u[1] ? 0 : -(u[2] + (u[3] || "00")), l + u[0].length) : -1;
}
function parseQuarter(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 1));
	return u ? (i.q = u[0] * 3 - 3, l + u[0].length) : -1;
}
function parseMonthNumber(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 2));
	return u ? (i.m = u[0] - 1, l + u[0].length) : -1;
}
function parseDayOfMonth(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 2));
	return u ? (i.d = +u[0], l + u[0].length) : -1;
}
function parseDayOfYear(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 3));
	return u ? (i.m = 0, i.d = +u[0], l + u[0].length) : -1;
}
function parseHour24(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 2));
	return u ? (i.H = +u[0], l + u[0].length) : -1;
}
function parseMinutes(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 2));
	return u ? (i.M = +u[0], l + u[0].length) : -1;
}
function parseSeconds(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 2));
	return u ? (i.S = +u[0], l + u[0].length) : -1;
}
function parseMilliseconds(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 3));
	return u ? (i.L = +u[0], l + u[0].length) : -1;
}
function parseMicroseconds(i, c, l) {
	var u = numberRe.exec(c.slice(l, l + 6));
	return u ? (i.L = Math.floor(u[0] / 1e3), l + u[0].length) : -1;
}
function parseLiteralPercent(i, c, l) {
	var u = percentRe.exec(c.slice(l, l + 1));
	return u ? l + u[0].length : -1;
}
function parseUnixTimestamp(i, c, l) {
	var u = numberRe.exec(c.slice(l));
	return u ? (i.Q = +u[0], l + u[0].length) : -1;
}
function parseUnixTimestampSeconds(i, c, l) {
	var u = numberRe.exec(c.slice(l));
	return u ? (i.s = +u[0], l + u[0].length) : -1;
}
function formatDayOfMonth(i, c) {
	return pad(i.getDate(), c, 2);
}
function formatHour24(i, c) {
	return pad(i.getHours(), c, 2);
}
function formatHour12(i, c) {
	return pad(i.getHours() % 12 || 12, c, 2);
}
function formatDayOfYear(i, c) {
	return pad(1 + timeDay.count(timeYear(i), i), c, 3);
}
function formatMilliseconds(i, c) {
	return pad(i.getMilliseconds(), c, 3);
}
function formatMicroseconds(i, c) {
	return formatMilliseconds(i, c) + "000";
}
function formatMonthNumber(i, c) {
	return pad(i.getMonth() + 1, c, 2);
}
function formatMinutes(i, c) {
	return pad(i.getMinutes(), c, 2);
}
function formatSeconds(i, c) {
	return pad(i.getSeconds(), c, 2);
}
function formatWeekdayNumberMonday(i) {
	var c = i.getDay();
	return c === 0 ? 7 : c;
}
function formatWeekNumberSunday(i, c) {
	return pad(timeSunday.count(timeYear(i) - 1, i), c, 2);
}
function dISO(i) {
	var c = i.getDay();
	return c >= 4 || c === 0 ? timeThursday(i) : timeThursday.ceil(i);
}
function formatWeekNumberISO(i, c) {
	return i = dISO(i), pad(timeThursday.count(timeYear(i), i) + (timeYear(i).getDay() === 4), c, 2);
}
function formatWeekdayNumberSunday(i) {
	return i.getDay();
}
function formatWeekNumberMonday(i, c) {
	return pad(timeMonday.count(timeYear(i) - 1, i), c, 2);
}
function formatYear(i, c) {
	return pad(i.getFullYear() % 100, c, 2);
}
function formatYearISO(i, c) {
	return i = dISO(i), pad(i.getFullYear() % 100, c, 2);
}
function formatFullYear(i, c) {
	return pad(i.getFullYear() % 1e4, c, 4);
}
function formatFullYearISO(i, c) {
	var l = i.getDay();
	return i = l >= 4 || l === 0 ? timeThursday(i) : timeThursday.ceil(i), pad(i.getFullYear() % 1e4, c, 4);
}
function formatZone(i) {
	var c = i.getTimezoneOffset();
	return (c > 0 ? "-" : (c *= -1, "+")) + pad(c / 60 | 0, "0", 2) + pad(c % 60, "0", 2);
}
function formatUTCDayOfMonth(i, c) {
	return pad(i.getUTCDate(), c, 2);
}
function formatUTCHour24(i, c) {
	return pad(i.getUTCHours(), c, 2);
}
function formatUTCHour12(i, c) {
	return pad(i.getUTCHours() % 12 || 12, c, 2);
}
function formatUTCDayOfYear(i, c) {
	return pad(1 + utcDay.count(utcYear(i), i), c, 3);
}
function formatUTCMilliseconds(i, c) {
	return pad(i.getUTCMilliseconds(), c, 3);
}
function formatUTCMicroseconds(i, c) {
	return formatUTCMilliseconds(i, c) + "000";
}
function formatUTCMonthNumber(i, c) {
	return pad(i.getUTCMonth() + 1, c, 2);
}
function formatUTCMinutes(i, c) {
	return pad(i.getUTCMinutes(), c, 2);
}
function formatUTCSeconds(i, c) {
	return pad(i.getUTCSeconds(), c, 2);
}
function formatUTCWeekdayNumberMonday(i) {
	var c = i.getUTCDay();
	return c === 0 ? 7 : c;
}
function formatUTCWeekNumberSunday(i, c) {
	return pad(utcSunday.count(utcYear(i) - 1, i), c, 2);
}
function UTCdISO(i) {
	var c = i.getUTCDay();
	return c >= 4 || c === 0 ? utcThursday(i) : utcThursday.ceil(i);
}
function formatUTCWeekNumberISO(i, c) {
	return i = UTCdISO(i), pad(utcThursday.count(utcYear(i), i) + (utcYear(i).getUTCDay() === 4), c, 2);
}
function formatUTCWeekdayNumberSunday(i) {
	return i.getUTCDay();
}
function formatUTCWeekNumberMonday(i, c) {
	return pad(utcMonday.count(utcYear(i) - 1, i), c, 2);
}
function formatUTCYear(i, c) {
	return pad(i.getUTCFullYear() % 100, c, 2);
}
function formatUTCYearISO(i, c) {
	return i = UTCdISO(i), pad(i.getUTCFullYear() % 100, c, 2);
}
function formatUTCFullYear(i, c) {
	return pad(i.getUTCFullYear() % 1e4, c, 4);
}
function formatUTCFullYearISO(i, c) {
	var l = i.getUTCDay();
	return i = l >= 4 || l === 0 ? utcThursday(i) : utcThursday.ceil(i), pad(i.getUTCFullYear() % 1e4, c, 4);
}
function formatUTCZone() {
	return "+0000";
}
function formatLiteralPercent() {
	return "%";
}
function formatUnixTimestamp(i) {
	return +i;
}
function formatUnixTimestampSeconds(i) {
	return Math.floor(i / 1e3);
}
var locale, timeFormat;
defaultLocale({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	shortDays: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	shortMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]
});
function defaultLocale(i) {
	return locale = formatLocale(i), timeFormat = locale.format, locale.parse, locale.utcFormat, locale.utcParse, locale;
}
function date(i) {
	return new Date(i);
}
function number(i) {
	return i instanceof Date ? +i : +/* @__PURE__ */ new Date(+i);
}
function calendar(i, c, l, u, d, f, p, m, h, g) {
	var _ = continuous(), v = _.invert, y = _.domain, b = g(".%L"), x = g(":%S"), S = g("%I:%M"), C = g("%I %p"), T = g("%a %d"), E = g("%b %d"), D = g("%B"), O = g("%Y");
	function k(i) {
		return (h(i) < i ? b : m(i) < i ? x : p(i) < i ? S : f(i) < i ? C : u(i) < i ? d(i) < i ? T : E : l(i) < i ? D : O)(i);
	}
	return _.invert = function(i) {
		return new Date(v(i));
	}, _.domain = function(i) {
		return arguments.length ? y(Array.from(i, number)) : y().map(date);
	}, _.ticks = function(c) {
		var l = y();
		return i(l[0], l[l.length - 1], c ?? 10);
	}, _.tickFormat = function(i, c) {
		return c == null ? k : g(c);
	}, _.nice = function(i) {
		var l = y();
		return (!i || typeof i.range != "function") && (i = c(l[0], l[l.length - 1], i ?? 10)), i ? y(nice(l, i)) : _;
	}, _.copy = function() {
		return copy(_, calendar(i, c, l, u, d, f, p, m, h, g));
	}, _;
}
function time() {
	return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var require_isoWeek = /* @__PURE__ */ __commonJSMin(((i, c) => {
	(function(l, u) {
		typeof i == "object" && c !== void 0 ? c.exports = u() : typeof define == "function" && define.amd ? define(u) : (l = typeof globalThis < "u" ? globalThis : l || self).dayjs_plugin_isoWeek = u();
	})(i, (function() {
		var i = "day";
		return function(c, l, u) {
			var d = function(c) {
				return c.add(4 - c.isoWeekday(), i);
			}, f = l.prototype;
			f.isoWeekYear = function() {
				return d(this).year();
			}, f.isoWeek = function(c) {
				if (!this.$utils().u(c)) return this.add(7 * (c - this.isoWeek()), i);
				var l, f, p, m, h = d(this), g = (l = this.isoWeekYear(), f = this.$u, p = (f ? u.utc : u)().year(l).startOf("year"), m = 4 - p.isoWeekday(), p.isoWeekday() > 4 && (m += 7), p.add(m, i));
				return h.diff(g, "week") + 1;
			}, f.isoWeekday = function(i) {
				return this.$utils().u(i) ? this.day() || 7 : this.day(this.day() % 7 ? i : i - 7);
			};
			var p = f.startOf;
			f.startOf = function(i, c) {
				var l = this.$utils(), u = !!l.u(c) || c;
				return l.p(i) === "isoweek" ? u ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : p.bind(this)(i, c);
			};
		};
	}));
})), require_customParseFormat = /* @__PURE__ */ __commonJSMin(((i, c) => {
	(function(l, u) {
		typeof i == "object" && c !== void 0 ? c.exports = u() : typeof define == "function" && define.amd ? define(u) : (l = typeof globalThis < "u" ? globalThis : l || self).dayjs_plugin_customParseFormat = u();
	})(i, (function() {
		var i = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		}, c = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d/, u = /\d\d/, d = /\d\d?/, f = /\d*[^-_:/,()\s\d]+/, p = {}, m = function(i) {
			return (i = +i) + (i > 68 ? 1900 : 2e3);
		}, h = function(i) {
			return function(c) {
				this[i] = +c;
			};
		}, g = [/[+-]\d\d:?(\d\d)?|Z/, function(i) {
			(this.zone ||= {}).offset = function(i) {
				if (!i || i === "Z") return 0;
				var c = i.match(/([+-]|\d\d)/g), l = 60 * c[1] + (+c[2] || 0);
				return l === 0 ? 0 : c[0] === "+" ? -l : l;
			}(i);
		}], _ = function(i) {
			var c = p[i];
			return c && (c.indexOf ? c : c.s.concat(c.f));
		}, v = function(i, c) {
			var l, u = p.meridiem;
			if (u) {
				for (var d = 1; d <= 24; d += 1) if (i.indexOf(u(d, 0, c)) > -1) {
					l = d > 12;
					break;
				}
			} else l = i === (c ? "pm" : "PM");
			return l;
		}, y = {
			A: [f, function(i) {
				this.afternoon = v(i, !1);
			}],
			a: [f, function(i) {
				this.afternoon = v(i, !0);
			}],
			Q: [l, function(i) {
				this.month = 3 * (i - 1) + 1;
			}],
			S: [l, function(i) {
				this.milliseconds = 100 * i;
			}],
			SS: [u, function(i) {
				this.milliseconds = 10 * i;
			}],
			SSS: [/\d{3}/, function(i) {
				this.milliseconds = +i;
			}],
			s: [d, h("seconds")],
			ss: [d, h("seconds")],
			m: [d, h("minutes")],
			mm: [d, h("minutes")],
			H: [d, h("hours")],
			h: [d, h("hours")],
			HH: [d, h("hours")],
			hh: [d, h("hours")],
			D: [d, h("day")],
			DD: [u, h("day")],
			Do: [f, function(i) {
				var c = p.ordinal;
				if (this.day = i.match(/\d+/)[0], c) for (var l = 1; l <= 31; l += 1) c(l).replace(/\[|\]/g, "") === i && (this.day = l);
			}],
			w: [d, h("week")],
			ww: [u, h("week")],
			M: [d, h("month")],
			MM: [u, h("month")],
			MMM: [f, function(i) {
				var c = _("months"), l = (_("monthsShort") || c.map((function(i) {
					return i.slice(0, 3);
				}))).indexOf(i) + 1;
				if (l < 1) throw Error();
				this.month = l % 12 || l;
			}],
			MMMM: [f, function(i) {
				var c = _("months").indexOf(i) + 1;
				if (c < 1) throw Error();
				this.month = c % 12 || c;
			}],
			Y: [/[+-]?\d+/, h("year")],
			YY: [u, function(i) {
				this.year = m(i);
			}],
			YYYY: [/\d{4}/, h("year")],
			Z: g,
			ZZ: g
		};
		function b(l) {
			for (var u = l, d = p && p.formats, f = (l = u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(c, l, u) {
				var f = u && u.toUpperCase();
				return l || d[u] || i[u] || d[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(i, c, l) {
					return c || l.slice(1);
				}));
			}))).match(c), m = f.length, h = 0; h < m; h += 1) {
				var g = f[h], _ = y[g], v = _ && _[0], b = _ && _[1];
				f[h] = b ? {
					regex: v,
					parser: b
				} : g.replace(/^\[|\]$/g, "");
			}
			return function(i) {
				for (var c = {}, l = 0, u = 0; l < m; l += 1) {
					var d = f[l];
					if (typeof d == "string") u += d.length;
					else {
						var p = d.regex, h = d.parser, g = i.slice(u), _ = p.exec(g)[0];
						h.call(c, _), i = i.replace(_, "");
					}
				}
				return function(i) {
					var c = i.afternoon;
					if (c !== void 0) {
						var l = i.hours;
						c ? l < 12 && (i.hours += 12) : l === 12 && (i.hours = 0), delete i.afternoon;
					}
				}(c), c;
			};
		}
		return function(i, c, l) {
			l.p.customParseFormat = !0, i && i.parseTwoDigitYear && (m = i.parseTwoDigitYear);
			var u = c.prototype, d = u.parse;
			u.parse = function(i) {
				var c = i.date, u = i.utc, f = i.args;
				this.$u = u;
				var m = f[1];
				if (typeof m == "string") {
					var h = !0 === f[2], g = !0 === f[3], _ = h || g, v = f[2];
					g && (v = f[2]), p = this.$locale(), !h && v && (p = l.Ls[v]), this.$d = function(i, c, l, u) {
						try {
							if (["x", "X"].indexOf(c) > -1) return /* @__PURE__ */ new Date((c === "X" ? 1e3 : 1) * i);
							var d = b(c)(i), f = d.year, p = d.month, m = d.day, h = d.hours, g = d.minutes, _ = d.seconds, v = d.milliseconds, y = d.zone, x = d.week, S = /* @__PURE__ */ new Date(), C = m || (f || p ? 1 : S.getDate()), T = f || S.getFullYear(), E = 0;
							f && !p || (E = p > 0 ? p - 1 : S.getMonth());
							var D, O = h || 0, k = g || 0, A = _ || 0, j = v || 0;
							return y ? new Date(Date.UTC(T, E, C, O, k, A, j + 60 * y.offset * 1e3)) : l ? new Date(Date.UTC(T, E, C, O, k, A, j)) : (D = new Date(T, E, C, O, k, A, j), x && (D = u(D).week(x).toDate()), D);
						} catch {
							return /* @__PURE__ */ new Date("");
						}
					}(c, m, u, l), this.init(), v && !0 !== v && (this.$L = this.locale(v).$L), _ && c != this.format(m) && (this.$d = /* @__PURE__ */ new Date("")), p = {};
				} else if (m instanceof Array) for (var y = m.length, x = 1; x <= y; x += 1) {
					f[1] = m[x - 1];
					var S = l.apply(this, f);
					if (S.isValid()) {
						this.$d = S.$d, this.$L = S.$L, this.init();
						break;
					}
					x === y && (this.$d = /* @__PURE__ */ new Date(""));
				}
				else d.call(this, i);
			};
		};
	}));
})), require_advancedFormat = /* @__PURE__ */ __commonJSMin(((i, c) => {
	(function(l, u) {
		typeof i == "object" && c !== void 0 ? c.exports = u() : typeof define == "function" && define.amd ? define(u) : (l = typeof globalThis < "u" ? globalThis : l || self).dayjs_plugin_advancedFormat = u();
	})(i, (function() {
		return function(i, c) {
			var l = c.prototype, u = l.format;
			l.format = function(i) {
				var c = this, l = this.$locale();
				if (!this.isValid()) return u.bind(this)(i);
				var d = this.$utils(), f = (i || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(i) {
					switch (i) {
						case "Q": return Math.ceil((c.$M + 1) / 3);
						case "Do": return l.ordinal(c.$D);
						case "gggg": return c.weekYear();
						case "GGGG": return c.isoWeekYear();
						case "wo": return l.ordinal(c.week(), "W");
						case "w":
						case "ww": return d.s(c.week(), i === "w" ? 1 : 2, "0");
						case "W":
						case "WW": return d.s(c.isoWeek(), i === "W" ? 1 : 2, "0");
						case "k":
						case "kk": return d.s(String(c.$H === 0 ? 24 : c.$H), i === "k" ? 1 : 2, "0");
						case "X": return Math.floor(c.$d.getTime() / 1e3);
						case "x": return c.$d.getTime();
						case "z": return "[" + c.offsetName() + "]";
						case "zzz": return "[" + c.offsetName("long") + "]";
						default: return i;
					}
				}));
				return u.bind(this)(f);
			};
		};
	}));
})), require_duration = /* @__PURE__ */ __commonJSMin(((i, c) => {
	(function(l, u) {
		typeof i == "object" && c !== void 0 ? c.exports = u() : typeof define == "function" && define.amd ? define(u) : (l = typeof globalThis < "u" ? globalThis : l || self).dayjs_plugin_duration = u();
	})(i, (function() {
		var i, c, l = 1e3, u = 6e4, d = 36e5, f = 864e5, p = 31536e6, m = 2628e6, h = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = /\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g, _ = {
			years: p,
			months: m,
			days: f,
			hours: d,
			minutes: u,
			seconds: l,
			milliseconds: 1,
			weeks: 6048e5
		}, v = function(i) {
			return i instanceof E;
		}, y = function(i, c, l) {
			return new E(i, l, c.$l);
		}, b = function(i) {
			return c.p(i) + "s";
		}, x = function(i) {
			return i < 0;
		}, S = function(i) {
			return x(i) ? Math.ceil(i) : Math.floor(i);
		}, C = function(i) {
			return Math.abs(i);
		}, T = function(i, c) {
			return i ? x(i) ? {
				negative: !0,
				format: "" + C(i) + c
			} : {
				negative: !1,
				format: "" + i + c
			} : {
				negative: !1,
				format: ""
			};
		}, E = function() {
			function x(i, c, l) {
				var u = this;
				if (this.$d = {}, this.$l = l, i === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), c) return y(i * _[b(c)], this);
				if (typeof i == "number") return this.$ms = i, this.parseFromMilliseconds(), this;
				if (typeof i == "object") return Object.keys(i).forEach((function(c) {
					u.$d[b(c)] = i[c];
				})), this.calMilliseconds(), this;
				if (typeof i == "string") {
					var d = i.match(h);
					if (d) {
						var f = d.slice(2).map((function(i) {
							return i == null ? 0 : Number(i);
						}));
						return this.$d.years = f[0], this.$d.months = f[1], this.$d.weeks = f[2], this.$d.days = f[3], this.$d.hours = f[4], this.$d.minutes = f[5], this.$d.seconds = f[6], this.calMilliseconds(), this;
					}
				}
				return this;
			}
			var C = x.prototype;
			return C.calMilliseconds = function() {
				var i = this;
				this.$ms = Object.keys(this.$d).reduce((function(c, l) {
					return c + (i.$d[l] || 0) * _[l];
				}), 0);
			}, C.parseFromMilliseconds = function() {
				var i = this.$ms;
				this.$d.years = S(i / p), i %= p, this.$d.months = S(i / m), i %= m, this.$d.days = S(i / f), i %= f, this.$d.hours = S(i / d), i %= d, this.$d.minutes = S(i / u), i %= u, this.$d.seconds = S(i / l), i %= l, this.$d.milliseconds = i;
			}, C.toISOString = function() {
				var i = T(this.$d.years, "Y"), c = T(this.$d.months, "M"), l = +this.$d.days || 0;
				this.$d.weeks && (l += 7 * this.$d.weeks);
				var u = T(l, "D"), d = T(this.$d.hours, "H"), f = T(this.$d.minutes, "M"), p = this.$d.seconds || 0;
				this.$d.milliseconds && (p += this.$d.milliseconds / 1e3, p = Math.round(1e3 * p) / 1e3);
				var m = T(p, "S"), h = i.negative || c.negative || u.negative || d.negative || f.negative || m.negative, g = d.format || f.format || m.format ? "T" : "", _ = (h ? "-" : "") + "P" + i.format + c.format + u.format + g + d.format + f.format + m.format;
				return _ === "P" || _ === "-P" ? "P0D" : _;
			}, C.toJSON = function() {
				return this.toISOString();
			}, C.format = function(i) {
				var l = i || "YYYY-MM-DDTHH:mm:ss", u = {
					Y: this.$d.years,
					YY: c.s(this.$d.years, 2, "0"),
					YYYY: c.s(this.$d.years, 4, "0"),
					M: this.$d.months,
					MM: c.s(this.$d.months, 2, "0"),
					D: this.$d.days,
					DD: c.s(this.$d.days, 2, "0"),
					H: this.$d.hours,
					HH: c.s(this.$d.hours, 2, "0"),
					m: this.$d.minutes,
					mm: c.s(this.$d.minutes, 2, "0"),
					s: this.$d.seconds,
					ss: c.s(this.$d.seconds, 2, "0"),
					SSS: c.s(this.$d.milliseconds, 3, "0")
				};
				return l.replace(g, (function(i, c) {
					return c || String(u[i]);
				}));
			}, C.as = function(i) {
				return this.$ms / _[b(i)];
			}, C.get = function(i) {
				var c = this.$ms, l = b(i);
				return l === "milliseconds" ? c %= 1e3 : c = l === "weeks" ? S(c / _[l]) : this.$d[l], c || 0;
			}, C.add = function(i, c, l) {
				var u;
				return u = c ? i * _[b(c)] : v(i) ? i.$ms : y(i, this).$ms, y(this.$ms + u * (l ? -1 : 1), this);
			}, C.subtract = function(i, c) {
				return this.add(i, c, !0);
			}, C.locale = function(i) {
				var c = this.clone();
				return c.$l = i, c;
			}, C.clone = function() {
				return y(this.$ms, this);
			}, C.humanize = function(c) {
				return i().add(this.$ms, "ms").locale(this.$l).fromNow(!c);
			}, C.valueOf = function() {
				return this.asMilliseconds();
			}, C.milliseconds = function() {
				return this.get("milliseconds");
			}, C.asMilliseconds = function() {
				return this.as("milliseconds");
			}, C.seconds = function() {
				return this.get("seconds");
			}, C.asSeconds = function() {
				return this.as("seconds");
			}, C.minutes = function() {
				return this.get("minutes");
			}, C.asMinutes = function() {
				return this.as("minutes");
			}, C.hours = function() {
				return this.get("hours");
			}, C.asHours = function() {
				return this.as("hours");
			}, C.days = function() {
				return this.get("days");
			}, C.asDays = function() {
				return this.as("days");
			}, C.weeks = function() {
				return this.get("weeks");
			}, C.asWeeks = function() {
				return this.as("weeks");
			}, C.months = function() {
				return this.get("months");
			}, C.asMonths = function() {
				return this.as("months");
			}, C.years = function() {
				return this.get("years");
			}, C.asYears = function() {
				return this.as("years");
			}, x;
		}(), D = function(i, c, l) {
			return i.add(c.years() * l, "y").add(c.months() * l, "M").add(c.days() * l, "d").add(c.hours() * l, "h").add(c.minutes() * l, "m").add(c.seconds() * l, "s").add(c.milliseconds() * l, "ms");
		};
		return function(l, u, d) {
			i = d, c = d().$utils(), d.duration = function(i, c) {
				return y(i, { $l: d.locale() }, c);
			}, d.isDuration = v;
			var f = u.prototype.add, p = u.prototype.subtract;
			u.prototype.add = function(i, c) {
				return v(i) ? D(this, i, 1) : f.bind(this)(i, c);
			}, u.prototype.subtract = function(i, c) {
				return v(i) ? D(this, i, -1) : p.bind(this)(i, c);
			};
		};
	}));
})), import_dist = require_dist(), import_dayjs_min = /* @__PURE__ */ __toESM(require_dayjs_min(), 1), import_isoWeek = /* @__PURE__ */ __toESM(require_isoWeek(), 1), import_customParseFormat = /* @__PURE__ */ __toESM(require_customParseFormat(), 1), import_advancedFormat = /* @__PURE__ */ __toESM(require_advancedFormat(), 1), import_dayjs_min$1 = /* @__PURE__ */ __toESM(require_dayjs_min(), 1), import_duration = /* @__PURE__ */ __toESM(require_duration(), 1), parser = (function() {
	var i = /* @__PURE__ */ __name(function(i, c, l, u) {
		for (l ||= {}, u = i.length; u--; l[i[u]] = c);
		return l;
	}, "o"), c = [
		6,
		8,
		10,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
		33,
		35,
		36,
		38,
		40
	], u = [1, 26], d = [1, 27], f = [1, 28], p = [1, 29], m = [1, 30], h = [1, 31], g = [1, 32], _ = [1, 33], v = [1, 34], y = [1, 9], b = [1, 10], x = [1, 11], S = [1, 12], C = [1, 13], T = [1, 14], E = [1, 15], D = [1, 16], O = [1, 19], k = [1, 20], A = [1, 21], j = [1, 22], M = [1, 23], N = [1, 25], P = [1, 35], F = {
		trace: /* @__PURE__ */ __name(function() {}, "trace"),
		yy: {},
		symbols_: {
			error: 2,
			start: 3,
			gantt: 4,
			document: 5,
			EOF: 6,
			line: 7,
			SPACE: 8,
			statement: 9,
			NL: 10,
			weekday: 11,
			weekday_monday: 12,
			weekday_tuesday: 13,
			weekday_wednesday: 14,
			weekday_thursday: 15,
			weekday_friday: 16,
			weekday_saturday: 17,
			weekday_sunday: 18,
			weekend: 19,
			weekend_friday: 20,
			weekend_saturday: 21,
			dateFormat: 22,
			inclusiveEndDates: 23,
			topAxis: 24,
			axisFormat: 25,
			tickInterval: 26,
			excludes: 27,
			includes: 28,
			todayMarker: 29,
			title: 30,
			acc_title: 31,
			acc_title_value: 32,
			acc_descr: 33,
			acc_descr_value: 34,
			acc_descr_multiline_value: 35,
			section: 36,
			clickStatement: 37,
			taskTxt: 38,
			taskData: 39,
			click: 40,
			callbackname: 41,
			callbackargs: 42,
			href: 43,
			clickStatementDebug: 44,
			$accept: 0,
			$end: 1
		},
		terminals_: {
			2: "error",
			4: "gantt",
			6: "EOF",
			8: "SPACE",
			10: "NL",
			12: "weekday_monday",
			13: "weekday_tuesday",
			14: "weekday_wednesday",
			15: "weekday_thursday",
			16: "weekday_friday",
			17: "weekday_saturday",
			18: "weekday_sunday",
			20: "weekend_friday",
			21: "weekend_saturday",
			22: "dateFormat",
			23: "inclusiveEndDates",
			24: "topAxis",
			25: "axisFormat",
			26: "tickInterval",
			27: "excludes",
			28: "includes",
			29: "todayMarker",
			30: "title",
			31: "acc_title",
			32: "acc_title_value",
			33: "acc_descr",
			34: "acc_descr_value",
			35: "acc_descr_multiline_value",
			36: "section",
			38: "taskTxt",
			39: "taskData",
			40: "click",
			41: "callbackname",
			42: "callbackargs",
			43: "href"
		},
		productions_: [
			0,
			[3, 3],
			[5, 0],
			[5, 2],
			[7, 2],
			[7, 1],
			[7, 1],
			[7, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[11, 1],
			[19, 1],
			[19, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[9, 2],
			[9, 1],
			[9, 1],
			[9, 1],
			[9, 2],
			[37, 2],
			[37, 3],
			[37, 3],
			[37, 4],
			[37, 3],
			[37, 4],
			[37, 2],
			[44, 2],
			[44, 3],
			[44, 3],
			[44, 4],
			[44, 3],
			[44, 4],
			[44, 2]
		],
		performAction: /* @__PURE__ */ __name(function(i, c, l, u, d, f, p) {
			var m = f.length - 1;
			switch (d) {
				case 1: return f[m - 1];
				case 2:
					this.$ = [];
					break;
				case 3:
					f[m - 1].push(f[m]), this.$ = f[m - 1];
					break;
				case 4:
				case 5:
					this.$ = f[m];
					break;
				case 6:
				case 7:
					this.$ = [];
					break;
				case 8:
					u.setWeekday("monday");
					break;
				case 9:
					u.setWeekday("tuesday");
					break;
				case 10:
					u.setWeekday("wednesday");
					break;
				case 11:
					u.setWeekday("thursday");
					break;
				case 12:
					u.setWeekday("friday");
					break;
				case 13:
					u.setWeekday("saturday");
					break;
				case 14:
					u.setWeekday("sunday");
					break;
				case 15:
					u.setWeekend("friday");
					break;
				case 16:
					u.setWeekend("saturday");
					break;
				case 17:
					u.setDateFormat(f[m].substr(11)), this.$ = f[m].substr(11);
					break;
				case 18:
					u.enableInclusiveEndDates(), this.$ = f[m].substr(18);
					break;
				case 19:
					u.TopAxis(), this.$ = f[m].substr(8);
					break;
				case 20:
					u.setAxisFormat(f[m].substr(11)), this.$ = f[m].substr(11);
					break;
				case 21:
					u.setTickInterval(f[m].substr(13)), this.$ = f[m].substr(13);
					break;
				case 22:
					u.setExcludes(f[m].substr(9)), this.$ = f[m].substr(9);
					break;
				case 23:
					u.setIncludes(f[m].substr(9)), this.$ = f[m].substr(9);
					break;
				case 24:
					u.setTodayMarker(f[m].substr(12)), this.$ = f[m].substr(12);
					break;
				case 27:
					u.setDiagramTitle(f[m].substr(6)), this.$ = f[m].substr(6);
					break;
				case 28:
					this.$ = f[m].trim(), u.setAccTitle(this.$);
					break;
				case 29:
				case 30:
					this.$ = f[m].trim(), u.setAccDescription(this.$);
					break;
				case 31:
					u.addSection(f[m].substr(8)), this.$ = f[m].substr(8);
					break;
				case 33:
					u.addTask(f[m - 1], f[m]), this.$ = "task";
					break;
				case 34:
					this.$ = f[m - 1], u.setClickEvent(f[m - 1], f[m], null);
					break;
				case 35:
					this.$ = f[m - 2], u.setClickEvent(f[m - 2], f[m - 1], f[m]);
					break;
				case 36:
					this.$ = f[m - 2], u.setClickEvent(f[m - 2], f[m - 1], null), u.setLink(f[m - 2], f[m]);
					break;
				case 37:
					this.$ = f[m - 3], u.setClickEvent(f[m - 3], f[m - 2], f[m - 1]), u.setLink(f[m - 3], f[m]);
					break;
				case 38:
					this.$ = f[m - 2], u.setClickEvent(f[m - 2], f[m], null), u.setLink(f[m - 2], f[m - 1]);
					break;
				case 39:
					this.$ = f[m - 3], u.setClickEvent(f[m - 3], f[m - 1], f[m]), u.setLink(f[m - 3], f[m - 2]);
					break;
				case 40:
					this.$ = f[m - 1], u.setLink(f[m - 1], f[m]);
					break;
				case 41:
				case 47:
					this.$ = f[m - 1] + " " + f[m];
					break;
				case 42:
				case 43:
				case 45:
					this.$ = f[m - 2] + " " + f[m - 1] + " " + f[m];
					break;
				case 44:
				case 46:
					this.$ = f[m - 3] + " " + f[m - 2] + " " + f[m - 1] + " " + f[m];
					break;
			}
		}, "anonymous"),
		table: [
			{
				3: 1,
				4: [1, 2]
			},
			{ 1: [3] },
			i(c, [2, 2], { 5: 3 }),
			{
				6: [1, 4],
				7: 5,
				8: [1, 6],
				9: 7,
				10: [1, 8],
				11: 17,
				12: u,
				13: d,
				14: f,
				15: p,
				16: m,
				17: h,
				18: g,
				19: 18,
				20: _,
				21: v,
				22: y,
				23: b,
				24: x,
				25: S,
				26: C,
				27: T,
				28: E,
				29: D,
				30: O,
				31: k,
				33: A,
				35: j,
				36: M,
				37: 24,
				38: N,
				40: P
			},
			i(c, [2, 7], { 1: [2, 1] }),
			i(c, [2, 3]),
			{
				9: 36,
				11: 17,
				12: u,
				13: d,
				14: f,
				15: p,
				16: m,
				17: h,
				18: g,
				19: 18,
				20: _,
				21: v,
				22: y,
				23: b,
				24: x,
				25: S,
				26: C,
				27: T,
				28: E,
				29: D,
				30: O,
				31: k,
				33: A,
				35: j,
				36: M,
				37: 24,
				38: N,
				40: P
			},
			i(c, [2, 5]),
			i(c, [2, 6]),
			i(c, [2, 17]),
			i(c, [2, 18]),
			i(c, [2, 19]),
			i(c, [2, 20]),
			i(c, [2, 21]),
			i(c, [2, 22]),
			i(c, [2, 23]),
			i(c, [2, 24]),
			i(c, [2, 25]),
			i(c, [2, 26]),
			i(c, [2, 27]),
			{ 32: [1, 37] },
			{ 34: [1, 38] },
			i(c, [2, 30]),
			i(c, [2, 31]),
			i(c, [2, 32]),
			{ 39: [1, 39] },
			i(c, [2, 8]),
			i(c, [2, 9]),
			i(c, [2, 10]),
			i(c, [2, 11]),
			i(c, [2, 12]),
			i(c, [2, 13]),
			i(c, [2, 14]),
			i(c, [2, 15]),
			i(c, [2, 16]),
			{
				41: [1, 40],
				43: [1, 41]
			},
			i(c, [2, 4]),
			i(c, [2, 28]),
			i(c, [2, 29]),
			i(c, [2, 33]),
			i(c, [2, 34], {
				42: [1, 42],
				43: [1, 43]
			}),
			i(c, [2, 40], { 41: [1, 44] }),
			i(c, [2, 35], { 43: [1, 45] }),
			i(c, [2, 36]),
			i(c, [2, 38], { 42: [1, 46] }),
			i(c, [2, 37]),
			i(c, [2, 39])
		],
		defaultActions: {},
		parseError: /* @__PURE__ */ __name(function(i, c) {
			if (c.recoverable) this.trace(i);
			else {
				var l = Error(i);
				throw l.hash = c, l;
			}
		}, "parseError"),
		parse: /* @__PURE__ */ __name(function(i) {
			var c = this, u = [0], d = [], f = [null], p = [], m = this.table, h = "", g = 0, _ = 0, v = 0, y = 2, b = 1, x = p.slice.call(arguments, 1), S = Object.create(this.lexer), C = { yy: {} };
			for (var T in this.yy) Object.prototype.hasOwnProperty.call(this.yy, T) && (C.yy[T] = this.yy[T]);
			S.setInput(i, C.yy), C.yy.lexer = S, C.yy.parser = this, S.yylloc === void 0 && (S.yylloc = {});
			var E = S.yylloc;
			p.push(E);
			var D = S.options && S.options.ranges;
			typeof C.yy.parseError == "function" ? this.parseError = C.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
			function O(i) {
				u.length -= 2 * i, f.length -= i, p.length -= i;
			}
			__name(O, "popStack");
			function k() {
				var i = d.pop() || S.lex() || b;
				return typeof i != "number" && (i instanceof Array && (d = i, i = d.pop()), i = c.symbols_[i] || i), i;
			}
			__name(k, "lex");
			for (var A, j, M, N, P, F = {}, I, L, R, z;;) {
				if (M = u[u.length - 1], this.defaultActions[M] ? N = this.defaultActions[M] : (A ??= k(), N = m[M] && m[M][A]), N === void 0 || !N.length || !N[0]) {
					var B = "";
					for (I in z = [], m[M]) this.terminals_[I] && I > y && z.push("'" + this.terminals_[I] + "'");
					B = S.showPosition ? "Parse error on line " + (g + 1) + ":\n" + S.showPosition() + "\nExpecting " + z.join(", ") + ", got '" + (this.terminals_[A] || A) + "'" : "Parse error on line " + (g + 1) + ": Unexpected " + (A == b ? "end of input" : "'" + (this.terminals_[A] || A) + "'"), this.parseError(B, {
						text: S.match,
						token: this.terminals_[A] || A,
						line: S.yylineno,
						loc: E,
						expected: z
					});
				}
				if (N[0] instanceof Array && N.length > 1) throw Error("Parse Error: multiple actions possible at state: " + M + ", token: " + A);
				switch (N[0]) {
					case 1:
						u.push(A), f.push(S.yytext), p.push(S.yylloc), u.push(N[1]), A = null, j ? (A = j, j = null) : (_ = S.yyleng, h = S.yytext, g = S.yylineno, E = S.yylloc, v > 0 && v--);
						break;
					case 2:
						if (L = this.productions_[N[1]][1], F.$ = f[f.length - L], F._$ = {
							first_line: p[p.length - (L || 1)].first_line,
							last_line: p[p.length - 1].last_line,
							first_column: p[p.length - (L || 1)].first_column,
							last_column: p[p.length - 1].last_column
						}, D && (F._$.range = [p[p.length - (L || 1)].range[0], p[p.length - 1].range[1]]), P = this.performAction.apply(F, [
							h,
							_,
							g,
							C.yy,
							N[1],
							f,
							p
						].concat(x)), P !== void 0) return P;
						L && (u = u.slice(0, -1 * L * 2), f = f.slice(0, -1 * L), p = p.slice(0, -1 * L)), u.push(this.productions_[N[1]][0]), f.push(F.$), p.push(F._$), R = m[u[u.length - 2]][u[u.length - 1]], u.push(R);
						break;
					case 3: return !0;
				}
			}
			return !0;
		}, "parse")
	};
	F.lexer = /* @__PURE__ */ (function() {
		return {
			EOF: 1,
			parseError: /* @__PURE__ */ __name(function(i, c) {
				if (this.yy.parser) this.yy.parser.parseError(i, c);
				else throw Error(i);
			}, "parseError"),
			setInput: /* @__PURE__ */ __name(function(i, c) {
				return this.yy = c || this.yy || {}, this._input = i, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
			}, "setInput"),
			input: /* @__PURE__ */ __name(function() {
				var i = this._input[0];
				return this.yytext += i, this.yyleng++, this.offset++, this.match += i, this.matched += i, i.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), i;
			}, "input"),
			unput: /* @__PURE__ */ __name(function(i) {
				var c = i.length, l = i.split(/(?:\r\n?|\n)/g);
				this._input = i + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - c), this.offset -= c;
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
			less: /* @__PURE__ */ __name(function(i) {
				this.unput(this.match.slice(i));
			}, "less"),
			pastInput: /* @__PURE__ */ __name(function() {
				var i = this.matched.substr(0, this.matched.length - this.match.length);
				return (i.length > 20 ? "..." : "") + i.substr(-20).replace(/\n/g, "");
			}, "pastInput"),
			upcomingInput: /* @__PURE__ */ __name(function() {
				var i = this.match;
				return i.length < 20 && (i += this._input.substr(0, 20 - i.length)), (i.substr(0, 20) + (i.length > 20 ? "..." : "")).replace(/\n/g, "");
			}, "upcomingInput"),
			showPosition: /* @__PURE__ */ __name(function() {
				var i = this.pastInput(), c = Array(i.length + 1).join("-");
				return i + this.upcomingInput() + "\n" + c + "^";
			}, "showPosition"),
			test_match: /* @__PURE__ */ __name(function(i, c) {
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
				}, this.options.ranges && (d.yylloc.range = this.yylloc.range.slice(0))), u = i[0].match(/(?:\r\n?|\n).*/g), u && (this.yylineno += u.length), this.yylloc = {
					first_line: this.yylloc.last_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.last_column,
					last_column: u ? u[u.length - 1].length - u[u.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + i[0].length
				}, this.yytext += i[0], this.match += i[0], this.matches = i, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(i[0].length), this.matched += i[0], l = this.performAction.call(this, this.yy, this, c, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), l) return l;
				if (this._backtrack) {
					for (var f in d) this[f] = d[f];
					return !1;
				}
				return !1;
			}, "test_match"),
			next: /* @__PURE__ */ __name(function() {
				if (this.done) return this.EOF;
				this._input || (this.done = !0);
				var i, c, l, u;
				this._more || (this.yytext = "", this.match = "");
				for (var d = this._currentRules(), f = 0; f < d.length; f++) if (l = this._input.match(this.rules[d[f]]), l && (!c || l[0].length > c[0].length)) {
					if (c = l, u = f, this.options.backtrack_lexer) {
						if (i = this.test_match(l, d[f]), i !== !1) return i;
						if (this._backtrack) {
							c = !1;
							continue;
						} else return !1;
					} else if (!this.options.flex) break;
				}
				return c ? (i = this.test_match(c, d[u]), i === !1 ? !1 : i) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
					text: "",
					token: null,
					line: this.yylineno
				});
			}, "next"),
			lex: /* @__PURE__ */ __name(function() {
				return this.next() || this.lex();
			}, "lex"),
			begin: /* @__PURE__ */ __name(function(i) {
				this.conditionStack.push(i);
			}, "begin"),
			popState: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
			}, "popState"),
			_currentRules: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
			}, "_currentRules"),
			topState: /* @__PURE__ */ __name(function(i) {
				return i = this.conditionStack.length - 1 - Math.abs(i || 0), i >= 0 ? this.conditionStack[i] : "INITIAL";
			}, "topState"),
			pushState: /* @__PURE__ */ __name(function(i) {
				this.begin(i);
			}, "pushState"),
			stateStackSize: /* @__PURE__ */ __name(function() {
				return this.conditionStack.length;
			}, "stateStackSize"),
			options: { "case-insensitive": !0 },
			performAction: /* @__PURE__ */ __name(function(i, c, l, u) {
				switch (l) {
					case 0: return this.begin("open_directive"), "open_directive";
					case 1: return this.begin("acc_title"), 31;
					case 2: return this.popState(), "acc_title_value";
					case 3: return this.begin("acc_descr"), 33;
					case 4: return this.popState(), "acc_descr_value";
					case 5:
						this.begin("acc_descr_multiline");
						break;
					case 6:
						this.popState();
						break;
					case 7: return "acc_descr_multiline_value";
					case 8: break;
					case 9: break;
					case 10: break;
					case 11: return 10;
					case 12: break;
					case 13: break;
					case 14:
						this.begin("href");
						break;
					case 15:
						this.popState();
						break;
					case 16: return 43;
					case 17:
						this.begin("callbackname");
						break;
					case 18:
						this.popState();
						break;
					case 19:
						this.popState(), this.begin("callbackargs");
						break;
					case 20: return 41;
					case 21:
						this.popState();
						break;
					case 22: return 42;
					case 23:
						this.begin("click");
						break;
					case 24:
						this.popState();
						break;
					case 25: return 40;
					case 26: return 4;
					case 27: return 22;
					case 28: return 23;
					case 29: return 24;
					case 30: return 25;
					case 31: return 26;
					case 32: return 28;
					case 33: return 27;
					case 34: return 29;
					case 35: return 12;
					case 36: return 13;
					case 37: return 14;
					case 38: return 15;
					case 39: return 16;
					case 40: return 17;
					case 41: return 18;
					case 42: return 20;
					case 43: return 21;
					case 44: return "date";
					case 45: return 30;
					case 46: return "accDescription";
					case 47: return 36;
					case 48: return 38;
					case 49: return 39;
					case 50: return ":";
					case 51: return 6;
					case 52: return "INVALID";
				}
			}, "anonymous"),
			rules: [
				/^(?:%%\{)/i,
				/^(?:accTitle\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*:\s*)/i,
				/^(?:(?!\n||)*[^\n]*)/i,
				/^(?:accDescr\s*\{\s*)/i,
				/^(?:[\}])/i,
				/^(?:[^\}]*)/i,
				/^(?:%%(?!\{)*[^\n]*)/i,
				/^(?:[^\}]%%*[^\n]*)/i,
				/^(?:%%*[^\n]*[\n]*)/i,
				/^(?:[\n]+)/i,
				/^(?:\s+)/i,
				/^(?:%[^\n]*)/i,
				/^(?:href[\s]+["])/i,
				/^(?:["])/i,
				/^(?:[^"]*)/i,
				/^(?:call[\s]+)/i,
				/^(?:\([\s]*\))/i,
				/^(?:\()/i,
				/^(?:[^(]*)/i,
				/^(?:\))/i,
				/^(?:[^)]*)/i,
				/^(?:click[\s]+)/i,
				/^(?:[\s\n])/i,
				/^(?:[^\s\n]*)/i,
				/^(?:gantt\b)/i,
				/^(?:dateFormat\s[^#\n;]+)/i,
				/^(?:inclusiveEndDates\b)/i,
				/^(?:topAxis\b)/i,
				/^(?:axisFormat\s[^#\n;]+)/i,
				/^(?:tickInterval\s[^#\n;]+)/i,
				/^(?:includes\s[^#\n;]+)/i,
				/^(?:excludes\s[^#\n;]+)/i,
				/^(?:todayMarker\s[^\n;]+)/i,
				/^(?:weekday\s+monday\b)/i,
				/^(?:weekday\s+tuesday\b)/i,
				/^(?:weekday\s+wednesday\b)/i,
				/^(?:weekday\s+thursday\b)/i,
				/^(?:weekday\s+friday\b)/i,
				/^(?:weekday\s+saturday\b)/i,
				/^(?:weekday\s+sunday\b)/i,
				/^(?:weekend\s+friday\b)/i,
				/^(?:weekend\s+saturday\b)/i,
				/^(?:\d\d\d\d-\d\d-\d\d\b)/i,
				/^(?:title\s[^\n]+)/i,
				/^(?:accDescription\s[^#\n;]+)/i,
				/^(?:section\s[^\n]+)/i,
				/^(?:[^:\n]+)/i,
				/^(?::[^#\n;]+)/i,
				/^(?::)/i,
				/^(?:$)/i,
				/^(?:.)/i
			],
			conditions: {
				acc_descr_multiline: {
					rules: [6, 7],
					inclusive: !1
				},
				acc_descr: {
					rules: [4],
					inclusive: !1
				},
				acc_title: {
					rules: [2],
					inclusive: !1
				},
				callbackargs: {
					rules: [21, 22],
					inclusive: !1
				},
				callbackname: {
					rules: [
						18,
						19,
						20
					],
					inclusive: !1
				},
				href: {
					rules: [15, 16],
					inclusive: !1
				},
				click: {
					rules: [24, 25],
					inclusive: !1
				},
				INITIAL: {
					rules: [
						0,
						1,
						3,
						5,
						8,
						9,
						10,
						11,
						12,
						13,
						14,
						17,
						23,
						26,
						27,
						28,
						29,
						30,
						31,
						32,
						33,
						34,
						35,
						36,
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
						52
					],
					inclusive: !0
				}
			}
		};
	})();
	function I() {
		this.yy = {};
	}
	return __name(I, "Parser"), I.prototype = F, F.Parser = I, new I();
})();
parser.parser = parser;
var gantt_default = parser;
import_dayjs_min.default.extend(import_isoWeek.default), import_dayjs_min.default.extend(import_customParseFormat.default), import_dayjs_min.default.extend(import_advancedFormat.default);
var WEEKEND_START_DAY = {
	friday: 5,
	saturday: 6
}, dateFormat = "", axisFormat = "", tickInterval = void 0, todayMarker = "", includes = [], excludes = [], links = /* @__PURE__ */ new Map(), sections = [], tasks = [], currentSection = "", displayMode = "", tags = [
	"active",
	"done",
	"crit",
	"milestone",
	"vert"
], funs = [], diagramId = "", inclusiveEndDates = !1, topAxis = !1, weekday = "sunday", weekend = "saturday", lastOrder = 0, clear2 = /* @__PURE__ */ __name(function() {
	sections = [], tasks = [], currentSection = "", funs = [], taskCnt = 0, lastTask = void 0, lastTaskID = void 0, rawTasks = [], dateFormat = "", axisFormat = "", displayMode = "", tickInterval = void 0, todayMarker = "", includes = [], excludes = [], inclusiveEndDates = !1, topAxis = !1, lastOrder = 0, links = /* @__PURE__ */ new Map(), diagramId = "", clear(), weekday = "sunday", weekend = "saturday";
}, "clear"), setDiagramId = /* @__PURE__ */ __name(function(i) {
	diagramId = i;
}, "setDiagramId"), setAxisFormat = /* @__PURE__ */ __name(function(i) {
	axisFormat = i;
}, "setAxisFormat"), getAxisFormat = /* @__PURE__ */ __name(function() {
	return axisFormat;
}, "getAxisFormat"), setTickInterval = /* @__PURE__ */ __name(function(i) {
	tickInterval = i;
}, "setTickInterval"), getTickInterval = /* @__PURE__ */ __name(function() {
	return tickInterval;
}, "getTickInterval"), setTodayMarker = /* @__PURE__ */ __name(function(i) {
	todayMarker = i;
}, "setTodayMarker"), getTodayMarker = /* @__PURE__ */ __name(function() {
	return todayMarker;
}, "getTodayMarker"), setDateFormat = /* @__PURE__ */ __name(function(i) {
	dateFormat = i;
}, "setDateFormat"), enableInclusiveEndDates = /* @__PURE__ */ __name(function() {
	inclusiveEndDates = !0;
}, "enableInclusiveEndDates"), endDatesAreInclusive = /* @__PURE__ */ __name(function() {
	return inclusiveEndDates;
}, "endDatesAreInclusive"), enableTopAxis = /* @__PURE__ */ __name(function() {
	topAxis = !0;
}, "enableTopAxis"), topAxisEnabled = /* @__PURE__ */ __name(function() {
	return topAxis;
}, "topAxisEnabled"), setDisplayMode = /* @__PURE__ */ __name(function(i) {
	displayMode = i;
}, "setDisplayMode"), getDisplayMode = /* @__PURE__ */ __name(function() {
	return displayMode;
}, "getDisplayMode"), getDateFormat = /* @__PURE__ */ __name(function() {
	return dateFormat;
}, "getDateFormat"), mergeTokens = /* @__PURE__ */ __name((i, c) => {
	let l = c.toLowerCase().split(/[\s,]+/).filter((i) => i !== "");
	return [.../* @__PURE__ */ new Set([...i, ...l])];
}, "mergeTokens"), setIncludes = /* @__PURE__ */ __name(function(i) {
	includes = mergeTokens(includes, i);
}, "setIncludes"), getIncludes = /* @__PURE__ */ __name(function() {
	return includes;
}, "getIncludes"), setExcludes = /* @__PURE__ */ __name(function(i) {
	excludes = mergeTokens(excludes, i);
}, "setExcludes"), getExcludes = /* @__PURE__ */ __name(function() {
	return excludes;
}, "getExcludes"), getLinks = /* @__PURE__ */ __name(function() {
	return links;
}, "getLinks"), addSection = /* @__PURE__ */ __name(function(i) {
	currentSection = i, sections.push(i);
}, "addSection"), getSections = /* @__PURE__ */ __name(function() {
	return sections;
}, "getSections"), getTasks = /* @__PURE__ */ __name(function() {
	let i = compileTasks(), c = 0;
	for (; !i && c < 10;) i = compileTasks(), c++;
	return tasks = rawTasks, tasks;
}, "getTasks"), isInvalidDate = /* @__PURE__ */ __name(function(i, c, l, u) {
	let d = i.format(c.trim()), f = i.format("YYYY-MM-DD");
	return u.includes(d) || u.includes(f) ? !1 : l.includes("weekends") && (i.isoWeekday() === WEEKEND_START_DAY[weekend] || i.isoWeekday() === WEEKEND_START_DAY[weekend] + 1) || l.includes(i.format("dddd").toLowerCase()) ? !0 : l.includes(d) || l.includes(f);
}, "isInvalidDate"), setWeekday = /* @__PURE__ */ __name(function(i) {
	weekday = i;
}, "setWeekday"), getWeekday = /* @__PURE__ */ __name(function() {
	return weekday;
}, "getWeekday"), setWeekend = /* @__PURE__ */ __name(function(i) {
	weekend = i;
}, "setWeekend"), checkTaskDates = /* @__PURE__ */ __name(function(i, c, l, u) {
	if (!l.length || i.manualEndTime) return;
	let d;
	d = i.startTime instanceof Date ? (0, import_dayjs_min.default)(i.startTime) : (0, import_dayjs_min.default)(i.startTime, c, !0), d = d.add(1, "d");
	let f;
	f = i.endTime instanceof Date ? (0, import_dayjs_min.default)(i.endTime) : (0, import_dayjs_min.default)(i.endTime, c, !0);
	let [p, m] = fixTaskDates(d, f, c, l, u);
	i.endTime = p.toDate(), i.renderEndTime = m;
}, "checkTaskDates"), fixTaskDates = /* @__PURE__ */ __name(function(i, c, l, u, d) {
	let f = !1, p = null, m = c.add(1e4, "d");
	for (; i <= c;) {
		if (f || (p = c.toDate()), f = isInvalidDate(i, l, u, d), f && (c = c.add(1, "d"), c > m)) throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");
		i = i.add(1, "d");
	}
	return [c, p];
}, "fixTaskDates"), getStartDate = /* @__PURE__ */ __name(function(i, c, u) {
	if (u = u.trim(), (/* @__PURE__ */ __name((i) => {
		let c = i.trim();
		return c === "x" || c === "X";
	}, "isTimestampFormat"))(c) && /^\d+$/.test(u)) return new Date(Number(u));
	let d = /^after\s+(?<ids>[\d\w- ]+)/.exec(u);
	if (d !== null) {
		let i = null;
		for (let c of d.groups.ids.split(" ")) {
			let l = findTaskById(c);
			l !== void 0 && (!i || l.endTime > i.endTime) && (i = l);
		}
		if (i) return i.endTime;
		let c = /* @__PURE__ */ new Date();
		return c.setHours(0, 0, 0, 0), c;
	}
	let f = (0, import_dayjs_min.default)(u, c.trim(), !0);
	if (f.isValid()) return f.toDate();
	{
		log.debug("Invalid date:" + u), log.debug("With date format:" + c.trim());
		let i = new Date(u);
		if (i === void 0 || isNaN(i.getTime()) || i.getFullYear() < -1e4 || i.getFullYear() > 1e4) throw Error("Invalid date:" + u);
		return i;
	}
}, "getStartDate"), parseDuration = /* @__PURE__ */ __name(function(i) {
	let c = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(i.trim());
	return c === null ? [NaN, "ms"] : [Number.parseFloat(c[1]), c[2]];
}, "parseDuration"), getEndDate = /* @__PURE__ */ __name(function(i, c, l, u = !1) {
	l = l.trim();
	let d = /^until\s+(?<ids>[\d\w- ]+)/.exec(l);
	if (d !== null) {
		let i = null;
		for (let c of d.groups.ids.split(" ")) {
			let l = findTaskById(c);
			l !== void 0 && (!i || l.startTime < i.startTime) && (i = l);
		}
		if (i) return i.startTime;
		let c = /* @__PURE__ */ new Date();
		return c.setHours(0, 0, 0, 0), c;
	}
	let f = (0, import_dayjs_min.default)(l, c.trim(), !0);
	if (f.isValid()) return u && (f = f.add(1, "d")), f.toDate();
	let p = (0, import_dayjs_min.default)(i), [m, h] = parseDuration(l);
	if (!Number.isNaN(m)) {
		let i = p.add(m, h);
		i.isValid() && (p = i);
	}
	return p.toDate();
}, "getEndDate"), taskCnt = 0, parseId = /* @__PURE__ */ __name(function(i) {
	return i === void 0 ? (taskCnt += 1, "task" + taskCnt) : i;
}, "parseId"), compileData = /* @__PURE__ */ __name(function(i, c) {
	let l;
	l = c.substr(0, 1) === ":" ? c.substr(1, c.length) : c;
	let u = l.split(","), d = {};
	getTaskTags(u, d, tags);
	for (let i = 0; i < u.length; i++) u[i] = u[i].trim();
	let f = "";
	switch (u.length) {
		case 1:
			d.id = parseId(), d.startTime = i.endTime, f = u[0];
			break;
		case 2:
			d.id = parseId(), d.startTime = getStartDate(void 0, dateFormat, u[0]), f = u[1];
			break;
		case 3:
			d.id = parseId(u[0]), d.startTime = getStartDate(void 0, dateFormat, u[1]), f = u[2];
			break;
		default:
	}
	return f && (d.endTime = getEndDate(d.startTime, dateFormat, f, inclusiveEndDates), d.manualEndTime = (0, import_dayjs_min.default)(f, "YYYY-MM-DD", !0).isValid(), checkTaskDates(d, dateFormat, excludes, includes)), d;
}, "compileData"), parseData = /* @__PURE__ */ __name(function(i, c) {
	let l;
	l = c.substr(0, 1) === ":" ? c.substr(1, c.length) : c;
	let u = l.split(","), d = {};
	getTaskTags(u, d, tags);
	for (let i = 0; i < u.length; i++) u[i] = u[i].trim();
	switch (u.length) {
		case 1:
			d.id = parseId(), d.startTime = {
				type: "prevTaskEnd",
				id: i
			}, d.endTime = { data: u[0] };
			break;
		case 2:
			d.id = parseId(), d.startTime = {
				type: "getStartDate",
				startData: u[0]
			}, d.endTime = { data: u[1] };
			break;
		case 3:
			d.id = parseId(u[0]), d.startTime = {
				type: "getStartDate",
				startData: u[1]
			}, d.endTime = { data: u[2] };
			break;
		default:
	}
	return d;
}, "parseData"), lastTask, lastTaskID, rawTasks = [], taskDb = {}, addTask = /* @__PURE__ */ __name(function(i, c) {
	let l = {
		section: currentSection,
		type: currentSection,
		processed: !1,
		manualEndTime: !1,
		renderEndTime: null,
		raw: { data: c },
		task: i,
		classes: []
	}, u = parseData(lastTaskID, c);
	l.raw.startTime = u.startTime, l.raw.endTime = u.endTime, l.id = u.id, l.prevTaskId = lastTaskID, l.active = u.active, l.done = u.done, l.crit = u.crit, l.milestone = u.milestone, l.vert = u.vert, l.vert ? l.order = -1 : (l.order = lastOrder, lastOrder++);
	let d = rawTasks.push(l);
	lastTaskID = l.id, taskDb[l.id] = d - 1;
}, "addTask"), findTaskById = /* @__PURE__ */ __name(function(i) {
	let c = taskDb[i];
	return rawTasks[c];
}, "findTaskById"), addTaskOrg = /* @__PURE__ */ __name(function(i, c) {
	let l = {
		section: currentSection,
		type: currentSection,
		description: i,
		task: i,
		classes: []
	}, u = compileData(lastTask, c);
	l.startTime = u.startTime, l.endTime = u.endTime, l.id = u.id, l.active = u.active, l.done = u.done, l.crit = u.crit, l.milestone = u.milestone, l.vert = u.vert, lastTask = l, tasks.push(l);
}, "addTaskOrg"), compileTasks = /* @__PURE__ */ __name(function() {
	let i = /* @__PURE__ */ __name(function(i) {
		let c = rawTasks[i], l = "";
		switch (rawTasks[i].raw.startTime.type) {
			case "prevTaskEnd":
				c.startTime = findTaskById(c.prevTaskId).endTime;
				break;
			case "getStartDate":
				l = getStartDate(void 0, dateFormat, rawTasks[i].raw.startTime.startData), l && (rawTasks[i].startTime = l);
				break;
		}
		return rawTasks[i].startTime && (rawTasks[i].endTime = getEndDate(rawTasks[i].startTime, dateFormat, rawTasks[i].raw.endTime.data, inclusiveEndDates), rawTasks[i].endTime && (rawTasks[i].processed = !0, rawTasks[i].manualEndTime = (0, import_dayjs_min.default)(rawTasks[i].raw.endTime.data, "YYYY-MM-DD", !0).isValid(), checkTaskDates(rawTasks[i], dateFormat, excludes, includes))), rawTasks[i].processed;
	}, "compileTask"), c = !0;
	for (let [l, u] of rawTasks.entries()) i(l), c &&= u.processed;
	return c;
}, "compileTasks"), setLink = /* @__PURE__ */ __name(function(i, c) {
	let l = c;
	getConfig2().securityLevel !== "loose" && (l = (0, import_dist.sanitizeUrl)(c)), i.split(",").forEach(function(i) {
		findTaskById(i) !== void 0 && (pushFun(i, () => {
			window.open(l, "_self");
		}), links.set(i, l));
	}), setClass(i, "clickable");
}, "setLink"), setClass = /* @__PURE__ */ __name(function(i, c) {
	i.split(",").forEach(function(i) {
		let l = findTaskById(i);
		l !== void 0 && l.classes.push(c);
	});
}, "setClass"), setClickFun = /* @__PURE__ */ __name(function(i, c, l) {
	if (getConfig2().securityLevel !== "loose" || c === void 0) return;
	let u = [];
	if (typeof l == "string") {
		u = l.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
		for (let i = 0; i < u.length; i++) {
			let c = u[i].trim();
			c.startsWith("\"") && c.endsWith("\"") && (c = c.substr(1, c.length - 2)), u[i] = c;
		}
	}
	u.length === 0 && u.push(i), findTaskById(i) !== void 0 && pushFun(i, () => {
		utils_default.runFunc(c, ...u);
	});
}, "setClickFun"), pushFun = /* @__PURE__ */ __name(function(i, c) {
	funs.push(function() {
		let l = diagramId ? `${diagramId}-${i}` : i, u = document.querySelector(`[id="${l}"]`);
		u !== null && u.addEventListener("click", function() {
			c();
		});
	}, function() {
		let l = diagramId ? `${diagramId}-${i}` : i, u = document.querySelector(`[id="${l}-text"]`);
		u !== null && u.addEventListener("click", function() {
			c();
		});
	});
}, "pushFun"), ganttDb_default = {
	getConfig: /* @__PURE__ */ __name(() => getConfig2().gantt, "getConfig"),
	clear: clear2,
	setDateFormat,
	getDateFormat,
	enableInclusiveEndDates,
	endDatesAreInclusive,
	enableTopAxis,
	topAxisEnabled,
	setAxisFormat,
	getAxisFormat,
	setTickInterval,
	getTickInterval,
	setTodayMarker,
	getTodayMarker,
	setAccTitle,
	getAccTitle,
	setDiagramTitle,
	getDiagramTitle,
	setDiagramId,
	setDisplayMode,
	getDisplayMode,
	setAccDescription,
	getAccDescription,
	addSection,
	getSections,
	getTasks,
	addTask,
	findTaskById,
	addTaskOrg,
	setIncludes,
	getIncludes,
	setExcludes,
	getExcludes,
	setClickEvent: /* @__PURE__ */ __name(function(i, c, l) {
		i.split(",").forEach(function(i) {
			setClickFun(i, c, l);
		}), setClass(i, "clickable");
	}, "setClickEvent"),
	setLink,
	getLinks,
	bindFunctions: /* @__PURE__ */ __name(function(i) {
		funs.forEach(function(c) {
			c(i);
		});
	}, "bindFunctions"),
	parseDuration,
	isInvalidDate,
	setWeekday,
	getWeekday,
	setWeekend
};
function getTaskTags(i, c, l) {
	let u = !0;
	for (; u;) u = !1, l.forEach(function(l) {
		let d = "^\\s*" + l + "\\s*$", f = new RegExp(d);
		i[0].match(f) && (c[l] = !0, i.shift(1), u = !0);
	});
}
__name(getTaskTags, "getTaskTags"), import_dayjs_min$1.default.extend(import_duration.default);
var setConf = /* @__PURE__ */ __name(function() {
	log.debug("Something is calling, setConf, remove the call");
}, "setConf"), mapWeekdayToTimeFunction = {
	monday: timeMonday,
	tuesday: timeTuesday,
	wednesday: timeWednesday,
	thursday: timeThursday,
	friday: timeFriday,
	saturday: timeSaturday,
	sunday: timeSunday
}, getMaxIntersections = /* @__PURE__ */ __name((i, c) => {
	let l = [...i].map(() => -Infinity), u = [...i].sort((i, c) => i.startTime - c.startTime || i.order - c.order), d = 0;
	for (let i of u) for (let u = 0; u < l.length; u++) if (i.startTime >= l[u]) {
		l[u] = i.endTime, i.order = u + c, u > d && (d = u);
		break;
	}
	return d;
}, "getMaxIntersections"), w, MAX_TICK_COUNT = 1e4, diagram = {
	parser: gantt_default,
	db: ganttDb_default,
	renderer: {
		setConf,
		draw: /* @__PURE__ */ __name(function(i, c, u, d) {
			let f = getConfig2().gantt;
			d.db.setDiagramId(c);
			let p = getConfig2().securityLevel, m;
			p === "sandbox" && (m = select_default("#i" + c));
			let h = select_default(p === "sandbox" ? m.nodes()[0].contentDocument.body : "body"), v = p === "sandbox" ? m.nodes()[0].contentDocument : document, y = v.getElementById(c);
			w = y.parentElement.offsetWidth, w === void 0 && (w = 1200), f.useWidth !== void 0 && (w = f.useWidth);
			let b = d.db.getTasks(), x = b.filter((i) => !i.vert), S = [];
			for (let i of x) S.push(i.type);
			S = H(S);
			let C = {}, D = 2 * f.topPadding;
			if (d.db.getDisplayMode() === "compact" || f.displayMode === "compact") {
				let i = {};
				for (let c of x) i[c.section] === void 0 ? i[c.section] = [c] : i[c.section].push(c);
				let c = 0;
				for (let l of Object.keys(i)) {
					let u = getMaxIntersections(i[l], c) + 1;
					c += u, D += u * (f.barHeight + f.barGap), C[l] = u;
				}
			} else {
				D += x.length * (f.barHeight + f.barGap);
				for (let i of S) C[i] = x.filter((c) => c.type === i).length;
			}
			y.setAttribute("viewBox", "0 0 " + w + " " + D);
			let O = h.select(`[id="${c}"]`), A = time().domain([min(b, function(i) {
				return i.startTime;
			}), max(b, function(i) {
				return i.endTime;
			})]).rangeRound([0, w - f.leftPadding - f.rightPadding]);
			function j(i, c) {
				let l = i.startTime, u = c.startTime, d = 0;
				return l > u ? d = 1 : l < u && (d = -1), d;
			}
			__name(j, "taskCompare"), b.sort(j), M(b, w, D), configureSvgSize(O, D, w, f.useMaxWidth), O.append("text").text(d.db.getDiagramTitle()).attr("x", w / 2).attr("y", f.titleTopMargin).attr("class", "titleText");
			function M(i, c, l) {
				let u = f.barHeight, p = u + f.barGap, m = f.topPadding, h = f.leftPadding, g = linear().domain([0, S.length]).range(["#00B9FA", "#F95002"]).interpolate(hcl_default);
				P(p, m, h, c, l, i, d.db.getExcludes(), d.db.getIncludes()), L(h, m, c, l), N(i, p, m, h, u, g, c, l), R(p, m, h, u, g), V(h, m, c, l);
			}
			__name(M, "makeGantt");
			function N(i, l, u, p, m, h, g) {
				i.sort((i, c) => i.vert === c.vert ? 0 : i.vert ? 1 : -1);
				let v = i.filter((i) => !i.vert), y = [...new Set(v.map((i) => i.order))].map((i) => v.find((c) => c.order === i));
				O.append("g").selectAll("rect").data(y).enter().append("rect").attr("x", 0).attr("y", function(i, c) {
					return c = i.order, c * l + u - 2;
				}).attr("width", function() {
					return g - f.rightPadding / 2;
				}).attr("height", l).attr("class", function(i) {
					for (let [c, l] of S.entries()) if (i.type === l) return "section section" + c % f.numberSectionStyles;
					return "section section0";
				}).enter();
				let b = O.append("g").selectAll("rect").data(i).enter(), x = d.db.getLinks();
				if (b.append("rect").attr("id", function(i) {
					return c + "-" + i.id;
				}).attr("rx", 3).attr("ry", 3).attr("x", function(i) {
					return i.milestone ? A(i.startTime) + p + .5 * (A(i.endTime) - A(i.startTime)) - .5 * m : A(i.startTime) + p;
				}).attr("y", function(i, c) {
					return c = i.order, i.vert ? f.gridLineStartPadding : c * l + u;
				}).attr("width", function(i) {
					return i.milestone ? m : i.vert ? .08 * m : A(i.renderEndTime || i.endTime) - A(i.startTime);
				}).attr("height", function(i) {
					return i.vert ? v.length * (f.barHeight + f.barGap) + f.barHeight * 2 : m;
				}).attr("transform-origin", function(i, c) {
					return c = i.order, (A(i.startTime) + p + .5 * (A(i.endTime) - A(i.startTime))).toString() + "px " + (c * l + u + .5 * m).toString() + "px";
				}).attr("class", function(i) {
					let c = "";
					i.classes.length > 0 && (c = i.classes.join(" "));
					let l = 0;
					for (let [c, u] of S.entries()) i.type === u && (l = c % f.numberSectionStyles);
					let u = "";
					return i.active ? i.crit ? u += " activeCrit" : u = " active" : i.done ? u = i.crit ? " doneCrit" : " done" : i.crit && (u += " crit"), u.length === 0 && (u = " task"), i.milestone && (u = " milestone " + u), i.vert && (u = " vert " + u), u += l, u += " " + c, "task" + u;
				}), b.append("text").attr("id", function(i) {
					return c + "-" + i.id + "-text";
				}).text(function(i) {
					return i.task;
				}).attr("font-size", f.fontSize).attr("x", function(i) {
					let c = A(i.startTime), l = A(i.renderEndTime || i.endTime);
					if (i.milestone && (c += .5 * (A(i.endTime) - A(i.startTime)) - .5 * m, l = c + m), i.vert) return A(i.startTime) + p;
					let u = this.getBBox().width;
					return u > l - c ? l + u + 1.5 * f.leftPadding > g ? c + p - 5 : l + p + 5 : (l - c) / 2 + c + p;
				}).attr("y", function(i, c) {
					return i.vert ? f.gridLineStartPadding + v.length * (f.barHeight + f.barGap) + 60 : (c = i.order, c * l + f.barHeight / 2 + (f.fontSize / 2 - 2) + u);
				}).attr("text-height", m).attr("class", function(i) {
					let c = A(i.startTime), l = A(i.endTime);
					i.milestone && (l = c + m);
					let u = this.getBBox().width, d = "";
					i.classes.length > 0 && (d = i.classes.join(" "));
					let p = 0;
					for (let [c, l] of S.entries()) i.type === l && (p = c % f.numberSectionStyles);
					let h = "";
					return i.active && (h = i.crit ? "activeCritText" + p : "activeText" + p), i.done ? h = i.crit ? h + " doneCritText" + p : h + " doneText" + p : i.crit && (h = h + " critText" + p), i.milestone && (h += " milestoneText"), i.vert && (h += " vertText"), u > l - c ? l + u + 1.5 * f.leftPadding > g ? d + " taskTextOutsideLeft taskTextOutside" + p + " " + h : d + " taskTextOutsideRight taskTextOutside" + p + " " + h + " width-" + u : d + " taskText taskText" + p + " " + h + " width-" + u;
				}), getConfig2().securityLevel === "sandbox") {
					let i;
					i = select_default("#i" + c);
					let l = i.nodes()[0].contentDocument;
					b.filter(function(i) {
						return x.has(i.id);
					}).each(function(i) {
						var u = l.querySelector("#" + CSS.escape(c + "-" + i.id)), d = l.querySelector("#" + CSS.escape(c + "-" + i.id + "-text"));
						let f = u.parentNode;
						var p = l.createElement("a");
						p.setAttribute("xlink:href", x.get(i.id)), p.setAttribute("target", "_top"), f.appendChild(p), p.appendChild(u), p.appendChild(d);
					});
				}
			}
			__name(N, "drawRects");
			function P(i, l, u, p, m, h, _, v) {
				if (_.length === 0 && v.length === 0) return;
				let y, b;
				for (let { startTime: i, endTime: c } of h) (y === void 0 || i < y) && (y = i), (b === void 0 || c > b) && (b = c);
				if (!y || !b) return;
				if ((0, import_dayjs_min$1.default)(b).diff((0, import_dayjs_min$1.default)(y), "year") > 5) {
					log.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");
					return;
				}
				let x = d.db.getDateFormat(), S = [], C = null, T = (0, import_dayjs_min$1.default)(y);
				for (; T.valueOf() <= b;) d.db.isInvalidDate(T, x, _, v) ? C ? C.end = T : C = {
					start: T,
					end: T
				} : C &&= (S.push(C), null), T = T.add(1, "d");
				O.append("g").selectAll("rect").data(S).enter().append("rect").attr("id", (i) => c + "-exclude-" + i.start.format("YYYY-MM-DD")).attr("x", (i) => A(i.start.startOf("day")) + u).attr("y", f.gridLineStartPadding).attr("width", (i) => A(i.end.endOf("day")) - A(i.start.startOf("day"))).attr("height", m - l - f.gridLineStartPadding).attr("transform-origin", function(c, l) {
					return (A(c.start) + u + .5 * (A(c.end) - A(c.start))).toString() + "px " + (l * i + .5 * m).toString() + "px";
				}).attr("class", "exclude-range");
			}
			__name(P, "drawExcludeDays");
			function I(i, c, l, u) {
				if (l <= 0 || i > c) return Infinity;
				let d = c - i, f = import_dayjs_min$1.default.duration({ [u ?? "day"]: l }).asMilliseconds();
				return f <= 0 ? Infinity : Math.ceil(d / f);
			}
			__name(I, "getEstimatedTickCount");
			function L(i, c, l, u) {
				let p = d.db.getDateFormat(), m = d.db.getAxisFormat(), h;
				h = m || (p === "D" ? "%d" : f.axisFormat ?? "%Y-%m-%d");
				let _ = axisBottom(A).tickSize(-u + c + f.gridLineStartPadding).tickFormat(timeFormat(h)), v = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(d.db.getTickInterval() || f.tickInterval);
				if (v !== null) {
					let i = parseInt(v[1], 10);
					if (isNaN(i) || i <= 0) log.warn(`Invalid tick interval value: "${v[1]}". Skipping custom tick interval.`);
					else {
						let c = v[2], l = d.db.getWeekday() || f.weekday, u = A.domain(), p = u[0], m = u[1], h = I(p, m, i, c);
						if (h > MAX_TICK_COUNT) log.warn(`The tick interval "${i}${c}" would generate ${h} ticks, which exceeds the maximum allowed (${MAX_TICK_COUNT}). This may indicate an invalid date or time range. Skipping custom tick interval.`);
						else switch (c) {
							case "millisecond":
								_.ticks(millisecond.every(i));
								break;
							case "second":
								_.ticks(second.every(i));
								break;
							case "minute":
								_.ticks(timeMinute.every(i));
								break;
							case "hour":
								_.ticks(timeHour.every(i));
								break;
							case "day":
								_.ticks(timeDay.every(i));
								break;
							case "week":
								_.ticks(mapWeekdayToTimeFunction[l].every(i));
								break;
							case "month":
								_.ticks(timeMonth.every(i));
								break;
						}
					}
				}
				if (O.append("g").attr("class", "grid").attr("transform", "translate(" + i + ", " + (u - 50) + ")").call(_).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), d.db.topAxisEnabled() || f.topAxis) {
					let l = axisTop(A).tickSize(-u + c + f.gridLineStartPadding).tickFormat(timeFormat(h));
					if (v !== null) {
						let i = parseInt(v[1], 10);
						if (isNaN(i) || i <= 0) log.warn(`Invalid tick interval value: "${v[1]}". Skipping custom tick interval.`);
						else {
							let c = v[2], u = d.db.getWeekday() || f.weekday, p = A.domain(), m = p[0], h = p[1];
							if (I(m, h, i, c) <= MAX_TICK_COUNT) switch (c) {
								case "millisecond":
									l.ticks(millisecond.every(i));
									break;
								case "second":
									l.ticks(second.every(i));
									break;
								case "minute":
									l.ticks(timeMinute.every(i));
									break;
								case "hour":
									l.ticks(timeHour.every(i));
									break;
								case "day":
									l.ticks(timeDay.every(i));
									break;
								case "week":
									l.ticks(mapWeekdayToTimeFunction[u].every(i));
									break;
								case "month":
									l.ticks(timeMonth.every(i));
									break;
							}
						}
					}
					O.append("g").attr("class", "grid").attr("transform", "translate(" + i + ", " + c + ")").call(l).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
				}
			}
			__name(L, "makeGrid");
			function R(i, c) {
				let l = 0, u = Object.keys(C).map((i) => [i, C[i]]);
				O.append("g").selectAll("text").data(u).enter().append(function(i) {
					let c = i[0].split(common_default.lineBreakRegex), l = -(c.length - 1) / 2, u = v.createElementNS("http://www.w3.org/2000/svg", "text");
					u.setAttribute("dy", l + "em");
					for (let [i, l] of c.entries()) {
						let c = v.createElementNS("http://www.w3.org/2000/svg", "tspan");
						c.setAttribute("alignment-baseline", "central"), c.setAttribute("x", "10"), i > 0 && c.setAttribute("dy", "1em"), c.textContent = l, u.appendChild(c);
					}
					return u;
				}).attr("x", 10).attr("y", function(d, f) {
					if (f > 0) for (let p = 0; p < f; p++) return l += u[f - 1][1], d[1] * i / 2 + l * i + c;
					else return d[1] * i / 2 + c;
				}).attr("font-size", f.sectionFontSize).attr("class", function(i) {
					for (let [c, l] of S.entries()) if (i[0] === l) return "sectionTitle sectionTitle" + c % f.numberSectionStyles;
					return "sectionTitle";
				});
			}
			__name(R, "vertLabels");
			function V(i, c, l, u) {
				let p = d.db.getTodayMarker();
				if (p === "off") return;
				let m = O.append("g").attr("class", "today"), h = /* @__PURE__ */ new Date(), g = m.append("line");
				g.attr("x1", A(h) + i).attr("x2", A(h) + i).attr("y1", f.titleTopMargin).attr("y2", u - f.titleTopMargin).attr("class", "today"), p !== "" && g.attr("style", p.replace(/,/g, ";"));
			}
			__name(V, "drawToday");
			function H(i) {
				let c = {}, l = [];
				for (let u = 0, d = i.length; u < d; ++u) Object.prototype.hasOwnProperty.call(c, i[u]) || (c[i[u]] = !0, l.push(i[u]));
				return l;
			}
			__name(H, "checkUnique");
		}, "draw")
	},
	styles: /* @__PURE__ */ __name((i) => `
  .mermaid-main-font {
        font-family: ${i.fontFamily};
  }

  .exclude-range {
    fill: ${i.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${i.sectionBkgColor};
  }

  .section2 {
    fill: ${i.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${i.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${i.titleColor};
  }

  .sectionTitle1 {
    fill: ${i.titleColor};
  }

  .sectionTitle2 {
    fill: ${i.titleColor};
  }

  .sectionTitle3 {
    fill: ${i.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${i.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${i.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${i.fontFamily};
    fill: ${i.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${i.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${i.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${i.taskTextDarkColor};
    text-anchor: start;
    font-family: ${i.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${i.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${i.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${i.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${i.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${i.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${i.taskBkgColor};
    stroke: ${i.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${i.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${i.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${i.activeTaskBkgColor};
    stroke: ${i.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${i.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${i.doneTaskBorderColor};
    fill: ${i.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${i.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${i.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${i.critBorderColor};
    fill: ${i.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${i.critBorderColor};
    fill: ${i.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${i.critBorderColor};
    fill: ${i.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${i.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${i.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${i.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${i.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${i.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${i.titleColor || i.textColor};
    font-family: ${i.fontFamily};
  }
`, "getStyles")
};
export { diagram };
