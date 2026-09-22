function t(ee, Me, Ne) {
	if (ee && ee.length) {
		let [Pe, Fe] = Me, Ie = Math.PI / 180 * Ne, Le = Math.cos(Ie), Re = Math.sin(Ie);
		for (let Me of ee) {
			let [ee, Ne] = Me;
			Me[0] = (ee - Pe) * Le - (Ne - Fe) * Re + Pe, Me[1] = (ee - Pe) * Re + (Ne - Fe) * Le + Fe;
		}
	}
}
function e(ee, Me) {
	return ee[0] === Me[0] && ee[1] === Me[1];
}
function s(Ne, Pe, Fe, Ie = 1) {
	let Le = Fe, Re = Math.max(Pe, .1), ze = Ne[0] && Ne[0][0] && typeof Ne[0][0] == "number" ? [Ne] : Ne, Be = [0, 0];
	if (Le) for (let Me of ze) t(Me, Be, Le);
	let Ve = function(ee, Ne, Pe) {
		let Fe = [];
		for (let Ne of ee) {
			let ee = [...Ne];
			e(ee[0], ee[ee.length - 1]) || ee.push([ee[0][0], ee[0][1]]), ee.length > 2 && Fe.push(ee);
		}
		let Ie = [];
		Ne = Math.max(Ne, .1);
		let Le = [];
		for (let ee of Fe) for (let Me = 0; Me < ee.length - 1; Me++) {
			let Ne = ee[Me], Pe = ee[Me + 1];
			if (Ne[1] !== Pe[1]) {
				let ee = Math.min(Ne[1], Pe[1]);
				Le.push({
					ymin: ee,
					ymax: Math.max(Ne[1], Pe[1]),
					x: ee === Ne[1] ? Ne[0] : Pe[0],
					islope: (Pe[0] - Ne[0]) / (Pe[1] - Ne[1])
				});
			}
		}
		if (Le.sort(((ee, Me) => ee.ymin < Me.ymin ? -1 : ee.ymin > Me.ymin ? 1 : ee.x < Me.x ? -1 : ee.x > Me.x ? 1 : ee.ymax === Me.ymax ? 0 : (ee.ymax - Me.ymax) / Math.abs(ee.ymax - Me.ymax))), !Le.length) return Ie;
		let Re = [], ze = Le[0].ymin, Be = 0;
		for (; Re.length || Le.length;) {
			if (Le.length) {
				let ee = -1;
				for (let Me = 0; Me < Le.length && !(Le[Me].ymin > ze); Me++) ee = Me;
				Le.splice(0, ee + 1).forEach(((ee) => {
					Re.push({
						s: ze,
						edge: ee
					});
				}));
			}
			if (Re = Re.filter(((ee) => !(ee.edge.ymax <= ze))), Re.sort(((ee, Me) => ee.edge.x === Me.edge.x ? 0 : (ee.edge.x - Me.edge.x) / Math.abs(ee.edge.x - Me.edge.x))), (Pe !== 1 || Be % Ne == 0) && Re.length > 1) for (let ee = 0; ee < Re.length; ee += 2) {
				let Me = ee + 1;
				if (Me >= Re.length) break;
				let Ne = Re[ee].edge, Pe = Re[Me].edge;
				Ie.push([[Math.round(Ne.x), ze], [Math.round(Pe.x), ze]]);
			}
			ze += Pe, Re.forEach(((ee) => {
				ee.edge.x = ee.edge.x + Pe * ee.edge.islope;
			})), Be++;
		}
		return Ie;
	}(ze, Re, Ie);
	if (Le) {
		for (let Me of ze) t(Me, Be, -Le);
		(function(Me, Ne, Pe) {
			let Fe = [];
			Me.forEach(((ee) => Fe.push(...ee))), t(Fe, Ne, Pe);
		})(Ve, Be, -Le);
	}
	return Ve;
}
function n(ee, Me) {
	let Pe = Me.hachureAngle + 90, Fe = Me.hachureGap;
	Fe < 0 && (Fe = 4 * Me.strokeWidth), Fe = Math.round(Math.max(Fe, .1));
	let Ie = 1;
	return Me.roughness >= 1 && (Me.randomizer?.next() || Math.random()) > .7 && (Ie = Fe), s(ee, Fe, Pe, Ie || 1);
}
var o = class {
	constructor(ee) {
		this.helper = ee;
	}
	fillPolygons(ee, Me) {
		return this._fillPolygons(ee, Me);
	}
	_fillPolygons(ee, Me) {
		let Ne = n(ee, Me);
		return {
			type: "fillSketch",
			ops: this.renderLines(Ne, Me)
		};
	}
	renderLines(ee, Me) {
		let Ne = [];
		for (let Pe of ee) Ne.push(...this.helper.doubleLineOps(Pe[0][0], Pe[0][1], Pe[1][0], Pe[1][1], Me));
		return Ne;
	}
};
function a(ee) {
	let Me = ee[0], Ne = ee[1];
	return Math.sqrt((Me[0] - Ne[0]) ** 2 + (Me[1] - Ne[1]) ** 2);
}
var h = class extends o {
	fillPolygons(ee, Me) {
		let Ne = Me.hachureGap;
		Ne < 0 && (Ne = 4 * Me.strokeWidth), Ne = Math.max(Ne, .1);
		let Fe = n(ee, Object.assign({}, Me, { hachureGap: Ne })), Le = Math.PI / 180 * Me.hachureAngle, Re = [], ze = .5 * Ne * Math.cos(Le), Be = .5 * Ne * Math.sin(Le);
		for (let [ee, Me] of Fe) a([ee, Me]) && Re.push([[ee[0] - ze, ee[1] + Be], [...Me]], [[ee[0] + ze, ee[1] - Be], [...Me]]);
		return {
			type: "fillSketch",
			ops: this.renderLines(Re, Me)
		};
	}
}, r = class extends o {
	fillPolygons(ee, Me) {
		let Ne = this._fillPolygons(ee, Me), Pe = Object.assign({}, Me, { hachureAngle: Me.hachureAngle + 90 }), Fe = this._fillPolygons(ee, Pe);
		return Ne.ops = Ne.ops.concat(Fe.ops), Ne;
	}
}, i = class {
	constructor(ee) {
		this.helper = ee;
	}
	fillPolygons(ee, Me) {
		let Ne = n(ee, Me = Object.assign({}, Me, { hachureAngle: 0 }));
		return this.dotsOnLines(Ne, Me);
	}
	dotsOnLines(ee, Me) {
		let Ne = [], Pe = Me.hachureGap;
		Pe < 0 && (Pe = 4 * Me.strokeWidth), Pe = Math.max(Pe, .1);
		let Fe = Me.fillWeight;
		Fe < 0 && (Fe = Me.strokeWidth / 2);
		let Le = Pe / 4;
		for (let Re of ee) {
			let ee = a(Re), ze = ee / Pe, Be = Math.ceil(ze) - 1, Ve = ee - Be * Pe, He = (Re[0][0] + Re[1][0]) / 2 - Pe / 4, Ue = Math.min(Re[0][1], Re[1][1]);
			for (let ee = 0; ee < Be; ee++) {
				let Ie = Ue + Ve + ee * Pe, Re = He - Le + 2 * Math.random() * Le, ze = Ie - Le + 2 * Math.random() * Le, Be = this.helper.ellipse(Re, ze, Fe, Fe, Me);
				Ne.push(...Be.ops);
			}
		}
		return {
			type: "fillSketch",
			ops: Ne
		};
	}
}, c = class {
	constructor(ee) {
		this.helper = ee;
	}
	fillPolygons(ee, Me) {
		let Ne = n(ee, Me);
		return {
			type: "fillSketch",
			ops: this.dashedLine(Ne, Me)
		};
	}
	dashedLine(ee, Me) {
		let Ne = Me.dashOffset < 0 ? Me.hachureGap < 0 ? 4 * Me.strokeWidth : Me.hachureGap : Me.dashOffset, Pe = Me.dashGap < 0 ? Me.hachureGap < 0 ? 4 * Me.strokeWidth : Me.hachureGap : Me.dashGap, Fe = [];
		return ee.forEach(((ee) => {
			let Le = a(ee), Re = Math.floor(Le / (Ne + Pe)), ze = (Le + Pe - Re * (Ne + Pe)) / 2, Be = ee[0], Ve = ee[1];
			Be[0] > Ve[0] && (Be = ee[1], Ve = ee[0]);
			let He = Math.atan((Ve[1] - Be[1]) / (Ve[0] - Be[0]));
			for (let ee = 0; ee < Re; ee++) {
				let Ie = ee * (Ne + Pe), Le = Ie + Ne, Re = [Be[0] + Ie * Math.cos(He) + ze * Math.cos(He), Be[1] + Ie * Math.sin(He) + ze * Math.sin(He)], Ve = [Be[0] + Le * Math.cos(He) + ze * Math.cos(He), Be[1] + Le * Math.sin(He) + ze * Math.sin(He)];
				Fe.push(...this.helper.doubleLineOps(Re[0], Re[1], Ve[0], Ve[1], Me));
			}
		})), Fe;
	}
}, l = class {
	constructor(ee) {
		this.helper = ee;
	}
	fillPolygons(ee, Me) {
		let Ne = Me.hachureGap < 0 ? 4 * Me.strokeWidth : Me.hachureGap, Fe = Me.zigzagOffset < 0 ? Ne : Me.zigzagOffset, Ie = n(ee, Me = Object.assign({}, Me, { hachureGap: Ne + Fe }));
		return {
			type: "fillSketch",
			ops: this.zigzagLines(Ie, Fe, Me)
		};
	}
	zigzagLines(ee, Me, Ne) {
		let Pe = [];
		return ee.forEach(((ee) => {
			let Fe = a(ee), Le = Math.round(Fe / (2 * Me)), Re = ee[0], ze = ee[1];
			Re[0] > ze[0] && (Re = ee[1], ze = ee[0]);
			let Be = Math.atan((ze[1] - Re[1]) / (ze[0] - Re[0]));
			for (let ee = 0; ee < Le; ee++) {
				let Fe = 2 * ee * Me, Ie = 2 * (ee + 1) * Me, Le = Math.sqrt(2 * Me ** 2), ze = [Re[0] + Fe * Math.cos(Be), Re[1] + Fe * Math.sin(Be)], Ve = [Re[0] + Ie * Math.cos(Be), Re[1] + Ie * Math.sin(Be)], He = [ze[0] + Le * Math.cos(Be + Math.PI / 4), ze[1] + Le * Math.sin(Be + Math.PI / 4)];
				Pe.push(...this.helper.doubleLineOps(ze[0], ze[1], He[0], He[1], Ne), ...this.helper.doubleLineOps(He[0], He[1], Ve[0], Ve[1], Ne));
			}
		})), Pe;
	}
}, u = {}, p = class {
	constructor(ee) {
		this.seed = ee;
	}
	next() {
		return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
	}
}, f = 0, d = 1, g = 2, M = {
	A: 7,
	a: 7,
	C: 6,
	c: 6,
	H: 1,
	h: 1,
	L: 2,
	l: 2,
	M: 2,
	m: 2,
	Q: 4,
	q: 4,
	S: 4,
	s: 4,
	T: 2,
	t: 2,
	V: 1,
	v: 1,
	Z: 0,
	z: 0
};
function k(ee, Me) {
	return ee.type === Me;
}
function b(ee) {
	let Me = [], Ne = function(ee) {
		let Me = [];
		for (; ee !== "";) if (ee.match(/^([ \t\r\n,]+)/)) ee = ee.substr(RegExp.$1.length);
		else if (ee.match(/^([aAcChHlLmMqQsStTvVzZ])/)) Me[Me.length] = {
			type: f,
			text: RegExp.$1
		}, ee = ee.substr(RegExp.$1.length);
		else {
			if (!ee.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
			Me[Me.length] = {
				type: d,
				text: `${parseFloat(RegExp.$1)}`
			}, ee = ee.substr(RegExp.$1.length);
		}
		return Me[Me.length] = {
			type: g,
			text: ""
		}, Me;
	}(ee), Pe = "BOD", Fe = 0, Ie = Ne[Fe];
	for (; !k(Ie, g);) {
		let Le = 0, Re = [];
		if (Pe === "BOD") {
			if (Ie.text !== "M" && Ie.text !== "m") return b("M0,0" + ee);
			Fe++, Le = M[Ie.text], Pe = Ie.text;
		} else k(Ie, d) ? Le = M[Pe] : (Fe++, Le = M[Ie.text], Pe = Ie.text);
		if (!(Fe + Le < Ne.length)) throw Error("Path data ended short");
		for (let ee = Fe; ee < Fe + Le; ee++) {
			let Me = Ne[ee];
			if (!k(Me, d)) throw Error("Param not a number: " + Pe + "," + Me.text);
			Re[Re.length] = +Me.text;
		}
		if (typeof M[Pe] != "number") throw Error("Bad segment: " + Pe);
		{
			let ee = {
				key: Pe,
				data: Re
			};
			Me.push(ee), Fe += Le, Ie = Ne[Fe], Pe === "M" && (Pe = "L"), Pe === "m" && (Pe = "l");
		}
	}
	return Me;
}
function y(ee) {
	let Me = 0, Ne = 0, Pe = 0, Fe = 0, Ie = [];
	for (let { key: Le, data: Re } of ee) switch (Le) {
		case "M":
			Ie.push({
				key: "M",
				data: [...Re]
			}), [Me, Ne] = Re, [Pe, Fe] = Re;
			break;
		case "m":
			Me += Re[0], Ne += Re[1], Ie.push({
				key: "M",
				data: [Me, Ne]
			}), Pe = Me, Fe = Ne;
			break;
		case "L":
			Ie.push({
				key: "L",
				data: [...Re]
			}), [Me, Ne] = Re;
			break;
		case "l":
			Me += Re[0], Ne += Re[1], Ie.push({
				key: "L",
				data: [Me, Ne]
			});
			break;
		case "C":
			Ie.push({
				key: "C",
				data: [...Re]
			}), Me = Re[4], Ne = Re[5];
			break;
		case "c": {
			let ee = Re.map(((ee, Pe) => Pe % 2 ? ee + Ne : ee + Me));
			Ie.push({
				key: "C",
				data: ee
			}), Me = ee[4], Ne = ee[5];
			break;
		}
		case "Q":
			Ie.push({
				key: "Q",
				data: [...Re]
			}), Me = Re[2], Ne = Re[3];
			break;
		case "q": {
			let ee = Re.map(((ee, Pe) => Pe % 2 ? ee + Ne : ee + Me));
			Ie.push({
				key: "Q",
				data: ee
			}), Me = ee[2], Ne = ee[3];
			break;
		}
		case "A":
			Ie.push({
				key: "A",
				data: [...Re]
			}), Me = Re[5], Ne = Re[6];
			break;
		case "a":
			Me += Re[5], Ne += Re[6], Ie.push({
				key: "A",
				data: [
					Re[0],
					Re[1],
					Re[2],
					Re[3],
					Re[4],
					Me,
					Ne
				]
			});
			break;
		case "H":
			Ie.push({
				key: "H",
				data: [...Re]
			}), Me = Re[0];
			break;
		case "h":
			Me += Re[0], Ie.push({
				key: "H",
				data: [Me]
			});
			break;
		case "V":
			Ie.push({
				key: "V",
				data: [...Re]
			}), Ne = Re[0];
			break;
		case "v":
			Ne += Re[0], Ie.push({
				key: "V",
				data: [Ne]
			});
			break;
		case "S":
			Ie.push({
				key: "S",
				data: [...Re]
			}), Me = Re[2], Ne = Re[3];
			break;
		case "s": {
			let ee = Re.map(((ee, Pe) => Pe % 2 ? ee + Ne : ee + Me));
			Ie.push({
				key: "S",
				data: ee
			}), Me = ee[2], Ne = ee[3];
			break;
		}
		case "T":
			Ie.push({
				key: "T",
				data: [...Re]
			}), Me = Re[0], Ne = Re[1];
			break;
		case "t":
			Me += Re[0], Ne += Re[1], Ie.push({
				key: "T",
				data: [Me, Ne]
			});
			break;
		case "Z":
		case "z": Ie.push({
			key: "Z",
			data: []
		}), Me = Pe, Ne = Fe;
	}
	return Ie;
}
function m(ee) {
	let Me = [], Ne = "", Pe = 0, Fe = 0, Ie = 0, Le = 0, Re = 0, ze = 0;
	for (let { key: Be, data: Ve } of ee) {
		switch (Be) {
			case "M":
				Me.push({
					key: "M",
					data: [...Ve]
				}), [Pe, Fe] = Ve, [Ie, Le] = Ve;
				break;
			case "C":
				Me.push({
					key: "C",
					data: [...Ve]
				}), Pe = Ve[4], Fe = Ve[5], Re = Ve[2], ze = Ve[3];
				break;
			case "L":
				Me.push({
					key: "L",
					data: [...Ve]
				}), [Pe, Fe] = Ve;
				break;
			case "H":
				Pe = Ve[0], Me.push({
					key: "L",
					data: [Pe, Fe]
				});
				break;
			case "V":
				Fe = Ve[0], Me.push({
					key: "L",
					data: [Pe, Fe]
				});
				break;
			case "S": {
				let ee = 0, Ie = 0;
				Ne === "C" || Ne === "S" ? (ee = Pe + (Pe - Re), Ie = Fe + (Fe - ze)) : (ee = Pe, Ie = Fe), Me.push({
					key: "C",
					data: [
						ee,
						Ie,
						...Ve
					]
				}), Re = Ve[0], ze = Ve[1], Pe = Ve[2], Fe = Ve[3];
				break;
			}
			case "T": {
				let [ee, Ie] = Ve, Le = 0, Be = 0;
				Ne === "Q" || Ne === "T" ? (Le = Pe + (Pe - Re), Be = Fe + (Fe - ze)) : (Le = Pe, Be = Fe);
				let He = Pe + 2 * (Le - Pe) / 3, Ue = Fe + 2 * (Be - Fe) / 3, We = ee + 2 * (Le - ee) / 3, Ge = Ie + 2 * (Be - Ie) / 3;
				Me.push({
					key: "C",
					data: [
						He,
						Ue,
						We,
						Ge,
						ee,
						Ie
					]
				}), Re = Le, ze = Be, Pe = ee, Fe = Ie;
				break;
			}
			case "Q": {
				let [ee, Ne, Ie, Le] = Ve, Be = Pe + 2 * (ee - Pe) / 3, He = Fe + 2 * (Ne - Fe) / 3, Ue = Ie + 2 * (ee - Ie) / 3, We = Le + 2 * (Ne - Le) / 3;
				Me.push({
					key: "C",
					data: [
						Be,
						He,
						Ue,
						We,
						Ie,
						Le
					]
				}), Re = ee, ze = Ne, Pe = Ie, Fe = Le;
				break;
			}
			case "A": {
				let ee = Math.abs(Ve[0]), Ne = Math.abs(Ve[1]), Ie = Ve[2], Le = Ve[3], Re = Ve[4], ze = Ve[5], Be = Ve[6];
				ee === 0 || Ne === 0 ? (Me.push({
					key: "C",
					data: [
						Pe,
						Fe,
						ze,
						Be,
						ze,
						Be
					]
				}), Pe = ze, Fe = Be) : (Pe !== ze || Fe !== Be) && (x(Pe, Fe, ze, Be, ee, Ne, Ie, Le, Re).forEach((function(ee) {
					Me.push({
						key: "C",
						data: ee
					});
				})), Pe = ze, Fe = Be);
				break;
			}
			case "Z": Me.push({
				key: "Z",
				data: []
			}), Pe = Ie, Fe = Le;
		}
		Ne = Be;
	}
	return Me;
}
function w(ee, Me, Ne) {
	return [ee * Math.cos(Ne) - Me * Math.sin(Ne), ee * Math.sin(Ne) + Me * Math.cos(Ne)];
}
function x(ee, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be) {
	let Ve = (He = Le, Math.PI * He / 180);
	var He;
	let Ue = [], We = 0, Ge = 0, Ke = 0, qe = 0;
	if (Be) [We, Ge, Ke, qe] = Be;
	else {
		[ee, Me] = w(ee, Me, -Ve), [Ne, Pe] = w(Ne, Pe, -Ve);
		let Le = (ee - Ne) / 2, Be = (Me - Pe) / 2, He = Le * Le / (Fe * Fe) + Be * Be / (Ie * Ie);
		He > 1 && (He = Math.sqrt(He), Fe *= He, Ie *= He);
		let Ue = Fe * Fe, Je = Ie * Ie, Ye = Ue * Je - Ue * Be * Be - Je * Le * Le, Xe = Ue * Be * Be + Je * Le * Le, Ze = (Re === ze ? -1 : 1) * Math.sqrt(Math.abs(Ye / Xe));
		Ke = Ze * Fe * Be / Ie + (ee + Ne) / 2, qe = Ze * -Ie * Le / Fe + (Me + Pe) / 2, We = Math.asin(parseFloat(((Me - qe) / Ie).toFixed(9))), Ge = Math.asin(parseFloat(((Pe - qe) / Ie).toFixed(9))), ee < Ke && (We = Math.PI - We), Ne < Ke && (Ge = Math.PI - Ge), We < 0 && (We = 2 * Math.PI + We), Ge < 0 && (Ge = 2 * Math.PI + Ge), ze && We > Ge && (We -= 2 * Math.PI), !ze && Ge > We && (Ge -= 2 * Math.PI);
	}
	let Je = Ge - We;
	if (Math.abs(Je) > 120 * Math.PI / 180) {
		let ee = Ge, Me = Ne, Re = Pe;
		Ge = ze && Ge > We ? We + 120 * Math.PI / 180 * 1 : We + 120 * Math.PI / 180 * -1, Ue = x(Ne = Ke + Fe * Math.cos(Ge), Pe = qe + Ie * Math.sin(Ge), Me, Re, Fe, Ie, Le, 0, ze, [
			Ge,
			ee,
			Ke,
			qe
		]);
	}
	Je = Ge - We;
	let Ye = Math.cos(We), Xe = Math.sin(We), Ze = Math.cos(Ge), Qe = Math.sin(Ge), $e = Math.tan(Je / 4), rt = 4 / 3 * Fe * $e, it = 4 / 3 * Ie * $e, ct = [ee, Me], lt = [ee + rt * Xe, Me - it * Ye], ut = [Ne + rt * Qe, Pe - it * Ze], dt = [Ne, Pe];
	if (lt[0] = 2 * ct[0] - lt[0], lt[1] = 2 * ct[1] - lt[1], Be) return [
		lt,
		ut,
		dt
	].concat(Ue);
	{
		Ue = [
			lt,
			ut,
			dt
		].concat(Ue);
		let ee = [];
		for (let Me = 0; Me < Ue.length; Me += 3) {
			let Ne = w(Ue[Me][0], Ue[Me][1], Ve), Pe = w(Ue[Me + 1][0], Ue[Me + 1][1], Ve), Fe = w(Ue[Me + 2][0], Ue[Me + 2][1], Ve);
			ee.push([
				Ne[0],
				Ne[1],
				Pe[0],
				Pe[1],
				Fe[0],
				Fe[1]
			]);
		}
		return ee;
	}
}
var P = {
	randOffset: function(ee, Me) {
		return G(ee, Me);
	},
	randOffsetWithRange: function(ee, Me, Ne) {
		return E(ee, Me, Ne);
	},
	ellipse: function(ee, Me, Ne, Pe, Fe) {
		return D(ee, Me, Fe, T(Ne, Pe, Fe)).opset;
	},
	doubleLineOps: function(ee, Me, Ne, Pe, Fe) {
		return $(ee, Me, Ne, Pe, Fe, !0);
	}
};
function v(ee, Me, Ne, Pe, Fe) {
	return {
		type: "path",
		ops: $(ee, Me, Ne, Pe, Fe)
	};
}
function S(ee, Me, Ne) {
	let Pe = (ee || []).length;
	if (Pe > 2) {
		let Fe = [];
		for (let Me = 0; Me < Pe - 1; Me++) Fe.push(...$(ee[Me][0], ee[Me][1], ee[Me + 1][0], ee[Me + 1][1], Ne));
		return Me && Fe.push(...$(ee[Pe - 1][0], ee[Pe - 1][1], ee[0][0], ee[0][1], Ne)), {
			type: "path",
			ops: Fe
		};
	}
	return Pe === 2 ? v(ee[0][0], ee[0][1], ee[1][0], ee[1][1], Ne) : {
		type: "path",
		ops: []
	};
}
function O(ee, Me, Ne, Pe, Fe) {
	return function(ee, Me) {
		return S(ee, !0, Me);
	}([
		[ee, Me],
		[ee + Ne, Me],
		[ee + Ne, Me + Pe],
		[ee, Me + Pe]
	], Fe);
}
function L(ee, Me) {
	if (ee.length) {
		let Ne = typeof ee[0][0] == "number" ? [ee] : ee, Pe = j(Ne[0], 1 * (1 + .2 * Me.roughness), Me), Fe = Me.disableMultiStroke ? [] : j(Ne[0], 1.5 * (1 + .22 * Me.roughness), z(Me));
		for (let ee = 1; ee < Ne.length; ee++) {
			let Ie = Ne[ee];
			if (Ie.length) {
				let ee = j(Ie, 1 * (1 + .2 * Me.roughness), Me), Ne = Me.disableMultiStroke ? [] : j(Ie, 1.5 * (1 + .22 * Me.roughness), z(Me));
				for (let Me of ee) Me.op !== "move" && Pe.push(Me);
				for (let ee of Ne) ee.op !== "move" && Fe.push(ee);
			}
		}
		return {
			type: "path",
			ops: Pe.concat(Fe)
		};
	}
	return {
		type: "path",
		ops: []
	};
}
function T(ee, Me, Ne) {
	let Pe = Math.sqrt(2 * Math.PI * Math.sqrt(((ee / 2) ** 2 + (Me / 2) ** 2) / 2)), Fe = Math.ceil(Math.max(Ne.curveStepCount, Ne.curveStepCount / Math.sqrt(200) * Pe)), Ie = 2 * Math.PI / Fe, Le = Math.abs(ee / 2), Re = Math.abs(Me / 2), ze = 1 - Ne.curveFitting;
	return Le += G(Le * ze, Ne), Re += G(Re * ze, Ne), {
		increment: Ie,
		rx: Le,
		ry: Re
	};
}
function D(ee, Me, Ne, Pe) {
	let [Fe, Ie] = F(Pe.increment, ee, Me, Pe.rx, Pe.ry, 1, Pe.increment * E(.1, E(.4, 1, Ne), Ne), Ne), Le = q(Fe, null, Ne);
	if (!Ne.disableMultiStroke && Ne.roughness !== 0) {
		let [Fe] = F(Pe.increment, ee, Me, Pe.rx, Pe.ry, 1.5, 0, Ne), Ie = q(Fe, null, Ne);
		Le = Le.concat(Ie);
	}
	return {
		estimatedPoints: Ie,
		opset: {
			type: "path",
			ops: Le
		}
	};
}
function A(ee, Me, Ne, Pe, Fe, Ie, Le, Re, ze) {
	let Be = ee, Ve = Me, He = Math.abs(Ne / 2), Ue = Math.abs(Pe / 2);
	He += G(.01 * He, ze), Ue += G(.01 * Ue, ze);
	let We = Fe, Ge = Ie;
	for (; We < 0;) We += 2 * Math.PI, Ge += 2 * Math.PI;
	Ge - We > 2 * Math.PI && (We = 0, Ge = 2 * Math.PI);
	let Ke = 2 * Math.PI / ze.curveStepCount, qe = Math.min(Ke / 2, (Ge - We) / 2), Je = V(qe, Be, Ve, He, Ue, We, Ge, 1, ze);
	if (!ze.disableMultiStroke) {
		let ee = V(qe, Be, Ve, He, Ue, We, Ge, 1.5, ze);
		Je.push(...ee);
	}
	return Le && (Re ? Je.push(...$(Be, Ve, Be + He * Math.cos(We), Ve + Ue * Math.sin(We), ze), ...$(Be, Ve, Be + He * Math.cos(Ge), Ve + Ue * Math.sin(Ge), ze)) : Je.push({
		op: "lineTo",
		data: [Be, Ve]
	}, {
		op: "lineTo",
		data: [Be + He * Math.cos(We), Ve + Ue * Math.sin(We)]
	})), {
		type: "path",
		ops: Je
	};
}
function _(ee, Me) {
	let Ne = m(y(b(ee))), Pe = [], Fe = [0, 0], Ie = [0, 0];
	for (let { key: ee, data: Le } of Ne) switch (ee) {
		case "M":
			Ie = [Le[0], Le[1]], Fe = [Le[0], Le[1]];
			break;
		case "L":
			Pe.push(...$(Ie[0], Ie[1], Le[0], Le[1], Me)), Ie = [Le[0], Le[1]];
			break;
		case "C": {
			let [ee, Ne, Fe, Re, ze, Be] = Le;
			Pe.push(...Z(ee, Ne, Fe, Re, ze, Be, Ie, Me)), Ie = [ze, Be];
			break;
		}
		case "Z": Pe.push(...$(Ie[0], Ie[1], Fe[0], Fe[1], Me)), Ie = [Fe[0], Fe[1]];
	}
	return {
		type: "path",
		ops: Pe
	};
}
function I(ee, Me) {
	let Ne = [];
	for (let Pe of ee) if (Pe.length) {
		let ee = Me.maxRandomnessOffset || 0, Fe = Pe.length;
		if (Fe > 2) {
			Ne.push({
				op: "move",
				data: [Pe[0][0] + G(ee, Me), Pe[0][1] + G(ee, Me)]
			});
			for (let Ie = 1; Ie < Fe; Ie++) Ne.push({
				op: "lineTo",
				data: [Pe[Ie][0] + G(ee, Me), Pe[Ie][1] + G(ee, Me)]
			});
		}
	}
	return {
		type: "fillPath",
		ops: Ne
	};
}
function C(ee, Me) {
	return function(ee, Me) {
		let Ne = ee.fillStyle || "hachure";
		if (!u[Ne]) switch (Ne) {
			case "zigzag":
				u[Ne] || (u[Ne] = new h(Me));
				break;
			case "cross-hatch":
				u[Ne] || (u[Ne] = new r(Me));
				break;
			case "dots":
				u[Ne] || (u[Ne] = new i(Me));
				break;
			case "dashed":
				u[Ne] || (u[Ne] = new c(Me));
				break;
			case "zigzag-line":
				u[Ne] || (u[Ne] = new l(Me));
				break;
			default: Ne = "hachure", u[Ne] || (u[Ne] = new o(Me));
		}
		return u[Ne];
	}(Me, P).fillPolygons(ee, Me);
}
function z(ee) {
	let Me = Object.assign({}, ee);
	return Me.randomizer = void 0, ee.seed && (Me.seed = ee.seed + 1), Me;
}
function W(ee) {
	return ee.randomizer ||= new p(ee.seed || 0), ee.randomizer.next();
}
function E(ee, Me, Ne, Pe = 1) {
	return Ne.roughness * Pe * (W(Ne) * (Me - ee) + ee);
}
function G(ee, Me, Ne = 1) {
	return E(-ee, ee, Me, Ne);
}
function $(ee, Me, Ne, Pe, Fe, Ie = !1) {
	let Le = Ie ? Fe.disableMultiStrokeFill : Fe.disableMultiStroke, Re = R(ee, Me, Ne, Pe, Fe, !0, !1);
	if (Le) return Re;
	let ze = R(ee, Me, Ne, Pe, Fe, !0, !0);
	return Re.concat(ze);
}
function R(ee, Me, Ne, Pe, Fe, Ie, Le) {
	let Re = (ee - Ne) ** 2 + (Me - Pe) ** 2, ze = Math.sqrt(Re), Be = 1;
	Be = ze < 200 ? 1 : ze > 500 ? .4 : -.0016668 * ze + 1.233334;
	let Ve = Fe.maxRandomnessOffset || 0;
	Ve * Ve * 100 > Re && (Ve = ze / 10);
	let He = Ve / 2, Ue = .2 + .2 * W(Fe), We = Fe.bowing * Fe.maxRandomnessOffset * (Pe - Me) / 200, Ge = Fe.bowing * Fe.maxRandomnessOffset * (ee - Ne) / 200;
	We = G(We, Fe, Be), Ge = G(Ge, Fe, Be);
	let Ke = [], qe = () => G(He, Fe, Be), Je = () => G(Ve, Fe, Be), Ye = Fe.preserveVertices;
	return Ie && (Le ? Ke.push({
		op: "move",
		data: [ee + (Ye ? 0 : qe()), Me + (Ye ? 0 : qe())]
	}) : Ke.push({
		op: "move",
		data: [ee + (Ye ? 0 : G(Ve, Fe, Be)), Me + (Ye ? 0 : G(Ve, Fe, Be))]
	})), Le ? Ke.push({
		op: "bcurveTo",
		data: [
			We + ee + (Ne - ee) * Ue + qe(),
			Ge + Me + (Pe - Me) * Ue + qe(),
			We + ee + 2 * (Ne - ee) * Ue + qe(),
			Ge + Me + 2 * (Pe - Me) * Ue + qe(),
			Ne + (Ye ? 0 : qe()),
			Pe + (Ye ? 0 : qe())
		]
	}) : Ke.push({
		op: "bcurveTo",
		data: [
			We + ee + (Ne - ee) * Ue + Je(),
			Ge + Me + (Pe - Me) * Ue + Je(),
			We + ee + 2 * (Ne - ee) * Ue + Je(),
			Ge + Me + 2 * (Pe - Me) * Ue + Je(),
			Ne + (Ye ? 0 : Je()),
			Pe + (Ye ? 0 : Je())
		]
	}), Ke;
}
function j(ee, Me, Ne) {
	if (!ee.length) return [];
	let Pe = [];
	Pe.push([ee[0][0] + G(Me, Ne), ee[0][1] + G(Me, Ne)]), Pe.push([ee[0][0] + G(Me, Ne), ee[0][1] + G(Me, Ne)]);
	for (let Fe = 1; Fe < ee.length; Fe++) Pe.push([ee[Fe][0] + G(Me, Ne), ee[Fe][1] + G(Me, Ne)]), Fe === ee.length - 1 && Pe.push([ee[Fe][0] + G(Me, Ne), ee[Fe][1] + G(Me, Ne)]);
	return q(Pe, null, Ne);
}
function q(ee, Me, Ne) {
	let Pe = ee.length, Fe = [];
	if (Pe > 3) {
		let Ie = [], Le = 1 - Ne.curveTightness;
		Fe.push({
			op: "move",
			data: [ee[1][0], ee[1][1]]
		});
		for (let Me = 1; Me + 2 < Pe; Me++) {
			let Ne = ee[Me];
			Ie[0] = [Ne[0], Ne[1]], Ie[1] = [Ne[0] + (Le * ee[Me + 1][0] - Le * ee[Me - 1][0]) / 6, Ne[1] + (Le * ee[Me + 1][1] - Le * ee[Me - 1][1]) / 6], Ie[2] = [ee[Me + 1][0] + (Le * ee[Me][0] - Le * ee[Me + 2][0]) / 6, ee[Me + 1][1] + (Le * ee[Me][1] - Le * ee[Me + 2][1]) / 6], Ie[3] = [ee[Me + 1][0], ee[Me + 1][1]], Fe.push({
				op: "bcurveTo",
				data: [
					Ie[1][0],
					Ie[1][1],
					Ie[2][0],
					Ie[2][1],
					Ie[3][0],
					Ie[3][1]
				]
			});
		}
		if (Me && Me.length === 2) {
			let ee = Ne.maxRandomnessOffset;
			Fe.push({
				op: "lineTo",
				data: [Me[0] + G(ee, Ne), Me[1] + G(ee, Ne)]
			});
		}
	} else Pe === 3 ? (Fe.push({
		op: "move",
		data: [ee[1][0], ee[1][1]]
	}), Fe.push({
		op: "bcurveTo",
		data: [
			ee[1][0],
			ee[1][1],
			ee[2][0],
			ee[2][1],
			ee[2][0],
			ee[2][1]
		]
	})) : Pe === 2 && Fe.push(...R(ee[0][0], ee[0][1], ee[1][0], ee[1][1], Ne, !0, !0));
	return Fe;
}
function F(ee, Me, Ne, Pe, Fe, Ie, Le, Re) {
	let ze = [], Be = [];
	if (Re.roughness === 0) {
		ee /= 4, Be.push([Me + Pe * Math.cos(-ee), Ne + Fe * Math.sin(-ee)]);
		for (let Ie = 0; Ie <= 2 * Math.PI; Ie += ee) {
			let ee = [Me + Pe * Math.cos(Ie), Ne + Fe * Math.sin(Ie)];
			ze.push(ee), Be.push(ee);
		}
		Be.push([Me + Pe * Math.cos(0), Ne + Fe * Math.sin(0)]), Be.push([Me + Pe * Math.cos(ee), Ne + Fe * Math.sin(ee)]);
	} else {
		let Ve = G(.5, Re) - Math.PI / 2;
		Be.push([G(Ie, Re) + Me + .9 * Pe * Math.cos(Ve - ee), G(Ie, Re) + Ne + .9 * Fe * Math.sin(Ve - ee)]);
		let He = 2 * Math.PI + Ve - .01;
		for (let Le = Ve; Le < He; Le += ee) {
			let ee = [G(Ie, Re) + Me + Pe * Math.cos(Le), G(Ie, Re) + Ne + Fe * Math.sin(Le)];
			ze.push(ee), Be.push(ee);
		}
		Be.push([G(Ie, Re) + Me + Pe * Math.cos(Ve + 2 * Math.PI + .5 * Le), G(Ie, Re) + Ne + Fe * Math.sin(Ve + 2 * Math.PI + .5 * Le)]), Be.push([G(Ie, Re) + Me + .98 * Pe * Math.cos(Ve + Le), G(Ie, Re) + Ne + .98 * Fe * Math.sin(Ve + Le)]), Be.push([G(Ie, Re) + Me + .9 * Pe * Math.cos(Ve + .5 * Le), G(Ie, Re) + Ne + .9 * Fe * Math.sin(Ve + .5 * Le)]);
	}
	return [Be, ze];
}
function V(ee, Me, Ne, Pe, Fe, Ie, Le, Re, ze) {
	let Be = Ie + G(.1, ze), Ve = [];
	Ve.push([G(Re, ze) + Me + .9 * Pe * Math.cos(Be - ee), G(Re, ze) + Ne + .9 * Fe * Math.sin(Be - ee)]);
	for (let Ie = Be; Ie <= Le; Ie += ee) Ve.push([G(Re, ze) + Me + Pe * Math.cos(Ie), G(Re, ze) + Ne + Fe * Math.sin(Ie)]);
	return Ve.push([Me + Pe * Math.cos(Le), Ne + Fe * Math.sin(Le)]), Ve.push([Me + Pe * Math.cos(Le), Ne + Fe * Math.sin(Le)]), q(Ve, null, ze);
}
function Z(ee, Me, Ne, Pe, Fe, Ie, Le, Re) {
	let ze = [], Be = [Re.maxRandomnessOffset || 1, (Re.maxRandomnessOffset || 1) + .3], Ve = [0, 0], He = Re.disableMultiStroke ? 1 : 2, Ue = Re.preserveVertices;
	for (let We = 0; We < He; We++) We === 0 ? ze.push({
		op: "move",
		data: [Le[0], Le[1]]
	}) : ze.push({
		op: "move",
		data: [Le[0] + (Ue ? 0 : G(Be[0], Re)), Le[1] + (Ue ? 0 : G(Be[0], Re))]
	}), Ve = Ue ? [Fe, Ie] : [Fe + G(Be[We], Re), Ie + G(Be[We], Re)], ze.push({
		op: "bcurveTo",
		data: [
			ee + G(Be[We], Re),
			Me + G(Be[We], Re),
			Ne + G(Be[We], Re),
			Pe + G(Be[We], Re),
			Ve[0],
			Ve[1]
		]
	});
	return ze;
}
function Q(ee) {
	return [...ee];
}
function H(ee, Me = 0) {
	let Ne = ee.length;
	if (Ne < 3) throw Error("A curve must have at least three points.");
	let Pe = [];
	if (Ne === 3) Pe.push(Q(ee[0]), Q(ee[1]), Q(ee[2]), Q(ee[2]));
	else {
		let Ne = [];
		Ne.push(ee[0], ee[0]);
		for (let Me = 1; Me < ee.length; Me++) Ne.push(ee[Me]), Me === ee.length - 1 && Ne.push(ee[Me]);
		let Fe = [], Ie = 1 - Me;
		Pe.push(Q(Ne[0]));
		for (let ee = 1; ee + 2 < Ne.length; ee++) {
			let Me = Ne[ee];
			Fe[0] = [Me[0], Me[1]], Fe[1] = [Me[0] + (Ie * Ne[ee + 1][0] - Ie * Ne[ee - 1][0]) / 6, Me[1] + (Ie * Ne[ee + 1][1] - Ie * Ne[ee - 1][1]) / 6], Fe[2] = [Ne[ee + 1][0] + (Ie * Ne[ee][0] - Ie * Ne[ee + 2][0]) / 6, Ne[ee + 1][1] + (Ie * Ne[ee][1] - Ie * Ne[ee + 2][1]) / 6], Fe[3] = [Ne[ee + 1][0], Ne[ee + 1][1]], Pe.push(Fe[1], Fe[2], Fe[3]);
		}
	}
	return Pe;
}
function N(ee, Me) {
	return (ee[0] - Me[0]) ** 2 + (ee[1] - Me[1]) ** 2;
}
function B(ee, Me, Ne) {
	let Pe = N(Me, Ne);
	if (Pe === 0) return N(ee, Me);
	let Fe = ((ee[0] - Me[0]) * (Ne[0] - Me[0]) + (ee[1] - Me[1]) * (Ne[1] - Me[1])) / Pe;
	return Fe = Math.max(0, Math.min(1, Fe)), N(ee, J(Me, Ne, Fe));
}
function J(ee, Me, Ne) {
	return [ee[0] + (Me[0] - ee[0]) * Ne, ee[1] + (Me[1] - ee[1]) * Ne];
}
function K(ee, Me, Ne, Pe) {
	let Fe = Pe || [];
	if (function(ee, Me) {
		let Ne = ee[Me + 0], Pe = ee[Me + 1], Fe = ee[Me + 2], Ie = ee[Me + 3], Le = 3 * Pe[0] - 2 * Ne[0] - Ie[0];
		Le *= Le;
		let Re = 3 * Pe[1] - 2 * Ne[1] - Ie[1];
		Re *= Re;
		let ze = 3 * Fe[0] - 2 * Ie[0] - Ne[0];
		ze *= ze;
		let Be = 3 * Fe[1] - 2 * Ie[1] - Ne[1];
		return Be *= Be, Le < ze && (Le = ze), Re < Be && (Re = Be), Le + Re;
	}(ee, Me) < Ne) {
		let Ne = ee[Me + 0];
		Fe.length ? (Ie = Fe[Fe.length - 1], Le = Ne, Math.sqrt(N(Ie, Le))) > 1 && Fe.push(Ne) : Fe.push(Ne), Fe.push(ee[Me + 3]);
	} else {
		let Pe = .5, Ie = ee[Me + 0], Le = ee[Me + 1], Re = ee[Me + 2], ze = ee[Me + 3], Be = J(Ie, Le, Pe), Ve = J(Le, Re, Pe), He = J(Re, ze, Pe), Ue = J(Be, Ve, Pe), We = J(Ve, He, Pe), Ge = J(Ue, We, Pe);
		K([
			Ie,
			Be,
			Ue,
			Ge
		], 0, Ne, Fe), K([
			Ge,
			We,
			He,
			ze
		], 0, Ne, Fe);
	}
	var Ie, Le;
	return Fe;
}
function U(ee, Me) {
	return X(ee, 0, ee.length, Me);
}
function X(ee, Me, Ne, Pe, Fe) {
	let Ie = Fe || [], Le = ee[Me], Re = ee[Ne - 1], ze = 0, Be = 1;
	for (let Pe = Me + 1; Pe < Ne - 1; ++Pe) {
		let Me = B(ee[Pe], Le, Re);
		Me > ze && (ze = Me, Be = Pe);
	}
	return Math.sqrt(ze) > Pe ? (X(ee, Me, Be + 1, Pe, Ie), X(ee, Be, Ne, Pe, Ie)) : (Ie.length || Ie.push(Le), Ie.push(Re)), Ie;
}
function Y(ee, Me = .15, Ne) {
	let Pe = [], Fe = (ee.length - 1) / 3;
	for (let Ne = 0; Ne < Fe; Ne++) K(ee, 3 * Ne, Me, Pe);
	return Ne && Ne > 0 ? X(Pe, 0, Pe.length, Ne) : Pe;
}
var tt = "none", et = class {
	constructor(ee) {
		this.defaultOptions = {
			maxRandomnessOffset: 2,
			roughness: 1,
			bowing: 1,
			stroke: "#000",
			strokeWidth: 1,
			curveTightness: 0,
			curveFitting: .95,
			curveStepCount: 9,
			fillStyle: "hachure",
			fillWeight: -1,
			hachureAngle: -41,
			hachureGap: -1,
			dashOffset: -1,
			dashGap: -1,
			zigzagOffset: -1,
			seed: 0,
			disableMultiStroke: !1,
			disableMultiStrokeFill: !1,
			preserveVertices: !1,
			fillShapeRoughnessGain: .8
		}, this.config = ee || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
	}
	static newSeed() {
		return Math.floor(Math.random() * 2 ** 31);
	}
	_o(ee) {
		return ee ? Object.assign({}, this.defaultOptions, ee) : this.defaultOptions;
	}
	_d(ee, Me, Ne) {
		return {
			shape: ee,
			sets: Me || [],
			options: Ne || this.defaultOptions
		};
	}
	line(ee, Me, Ne, Pe, Fe) {
		let Ie = this._o(Fe);
		return this._d("line", [v(ee, Me, Ne, Pe, Ie)], Ie);
	}
	rectangle(ee, Me, Ne, Pe, Fe) {
		let Ie = this._o(Fe), Le = [], Re = O(ee, Me, Ne, Pe, Ie);
		if (Ie.fill) {
			let Fe = [
				[ee, Me],
				[ee + Ne, Me],
				[ee + Ne, Me + Pe],
				[ee, Me + Pe]
			];
			Ie.fillStyle === "solid" ? Le.push(I([Fe], Ie)) : Le.push(C([Fe], Ie));
		}
		return Ie.stroke !== tt && Le.push(Re), this._d("rectangle", Le, Ie);
	}
	ellipse(ee, Me, Ne, Pe, Fe) {
		let Ie = this._o(Fe), Le = [], Re = T(Ne, Pe, Ie), ze = D(ee, Me, Ie, Re);
		if (Ie.fill) if (Ie.fillStyle === "solid") {
			let Ne = D(ee, Me, Ie, Re).opset;
			Ne.type = "fillPath", Le.push(Ne);
		} else Le.push(C([ze.estimatedPoints], Ie));
		return Ie.stroke !== tt && Le.push(ze.opset), this._d("ellipse", Le, Ie);
	}
	circle(ee, Me, Ne, Pe) {
		let Fe = this.ellipse(ee, Me, Ne, Ne, Pe);
		return Fe.shape = "circle", Fe;
	}
	linearPath(ee, Me) {
		let Ne = this._o(Me);
		return this._d("linearPath", [S(ee, !1, Ne)], Ne);
	}
	arc(ee, Me, Ne, Pe, Fe, Ie, Le = !1, Re) {
		let ze = this._o(Re), Be = [], Ve = A(ee, Me, Ne, Pe, Fe, Ie, Le, !0, ze);
		if (Le && ze.fill) if (ze.fillStyle === "solid") {
			let Le = Object.assign({}, ze);
			Le.disableMultiStroke = !0;
			let Re = A(ee, Me, Ne, Pe, Fe, Ie, !0, !1, Le);
			Re.type = "fillPath", Be.push(Re);
		} else Be.push(function(ee, Me, Ne, Pe, Fe, Ie, Le) {
			let Re = ee, ze = Me, Be = Math.abs(Ne / 2), Ve = Math.abs(Pe / 2);
			Be += G(.01 * Be, Le), Ve += G(.01 * Ve, Le);
			let He = Fe, Ue = Ie;
			for (; He < 0;) He += 2 * Math.PI, Ue += 2 * Math.PI;
			Ue - He > 2 * Math.PI && (He = 0, Ue = 2 * Math.PI);
			let We = (Ue - He) / Le.curveStepCount, Ge = [];
			for (let ee = He; ee <= Ue; ee += We) Ge.push([Re + Be * Math.cos(ee), ze + Ve * Math.sin(ee)]);
			return Ge.push([Re + Be * Math.cos(Ue), ze + Ve * Math.sin(Ue)]), Ge.push([Re, ze]), C([Ge], Le);
		}(ee, Me, Ne, Pe, Fe, Ie, ze));
		return ze.stroke !== tt && Be.push(Ve), this._d("arc", Be, ze);
	}
	curve(ee, Me) {
		let Ne = this._o(Me), Pe = [], Fe = L(ee, Ne);
		if (Ne.fill && Ne.fill !== tt) if (Ne.fillStyle === "solid") {
			let Me = L(ee, Object.assign(Object.assign({}, Ne), {
				disableMultiStroke: !0,
				roughness: Ne.roughness ? Ne.roughness + Ne.fillShapeRoughnessGain : 0
			}));
			Pe.push({
				type: "fillPath",
				ops: this._mergedShape(Me.ops)
			});
		} else {
			let Me = [], Fe = ee;
			if (Fe.length) {
				let ee = typeof Fe[0][0] == "number" ? [Fe] : Fe;
				for (let Pe of ee) Pe.length < 3 ? Me.push(...Pe) : Pe.length === 3 ? Me.push(...Y(H([
					Pe[0],
					Pe[0],
					Pe[1],
					Pe[2]
				]), 10, (1 + Ne.roughness) / 2)) : Me.push(...Y(H(Pe), 10, (1 + Ne.roughness) / 2));
			}
			Me.length && Pe.push(C([Me], Ne));
		}
		return Ne.stroke !== tt && Pe.push(Fe), this._d("curve", Pe, Ne);
	}
	polygon(ee, Me) {
		let Ne = this._o(Me), Pe = [], Fe = S(ee, !0, Ne);
		return Ne.fill && (Ne.fillStyle === "solid" ? Pe.push(I([ee], Ne)) : Pe.push(C([ee], Ne))), Ne.stroke !== tt && Pe.push(Fe), this._d("polygon", Pe, Ne);
	}
	path(ee, Me) {
		let Ne = this._o(Me), Pe = [];
		if (!ee) return this._d("path", Pe, Ne);
		ee = (ee || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
		let Fe = Ne.fill && Ne.fill !== "transparent" && Ne.fill !== tt, Ie = Ne.stroke !== tt, Le = !!(Ne.simplification && Ne.simplification < 1), Re = function(ee, Me, Ne) {
			let Pe = m(y(b(ee))), Fe = [], Ie = [], Le = [0, 0], Re = [], ze = () => {
				Re.length >= 4 && Ie.push(...Y(Re, Me)), Re = [];
			}, Be = () => {
				ze(), Ie.length && (Fe.push(Ie), Ie = []);
			};
			for (let { key: ee, data: Me } of Pe) switch (ee) {
				case "M":
					Be(), Le = [Me[0], Me[1]], Ie.push(Le);
					break;
				case "L":
					ze(), Ie.push([Me[0], Me[1]]);
					break;
				case "C":
					if (!Re.length) {
						let ee = Ie.length ? Ie[Ie.length - 1] : Le;
						Re.push([ee[0], ee[1]]);
					}
					Re.push([Me[0], Me[1]]), Re.push([Me[2], Me[3]]), Re.push([Me[4], Me[5]]);
					break;
				case "Z": ze(), Ie.push([Le[0], Le[1]]);
			}
			if (Be(), !Ne) return Fe;
			let Ve = [];
			for (let ee of Fe) {
				let Me = U(ee, Ne);
				Me.length && Ve.push(Me);
			}
			return Ve;
		}(ee, 1, Le ? 4 - 4 * (Ne.simplification || 1) : (1 + Ne.roughness) / 2), ze = _(ee, Ne);
		if (Fe) if (Ne.fillStyle === "solid") if (Re.length === 1) {
			let Me = _(ee, Object.assign(Object.assign({}, Ne), {
				disableMultiStroke: !0,
				roughness: Ne.roughness ? Ne.roughness + Ne.fillShapeRoughnessGain : 0
			}));
			Pe.push({
				type: "fillPath",
				ops: this._mergedShape(Me.ops)
			});
		} else Pe.push(I(Re, Ne));
		else Pe.push(C(Re, Ne));
		return Ie && (Le ? Re.forEach(((ee) => {
			Pe.push(S(ee, !1, Ne));
		})) : Pe.push(ze)), this._d("path", Pe, Ne);
	}
	opsToPath(ee, Me) {
		let Ne = "";
		for (let Pe of ee.ops) {
			let ee = typeof Me == "number" && Me >= 0 ? Pe.data.map(((ee) => +ee.toFixed(Me))) : Pe.data;
			switch (Pe.op) {
				case "move":
					Ne += `M${ee[0]} ${ee[1]} `;
					break;
				case "bcurveTo":
					Ne += `C${ee[0]} ${ee[1]}, ${ee[2]} ${ee[3]}, ${ee[4]} ${ee[5]} `;
					break;
				case "lineTo": Ne += `L${ee[0]} ${ee[1]} `;
			}
		}
		return Ne.trim();
	}
	toPaths(ee) {
		let Me = ee.sets || [], Ne = ee.options || this.defaultOptions, Pe = [];
		for (let ee of Me) {
			let Me = null;
			switch (ee.type) {
				case "path":
					Me = {
						d: this.opsToPath(ee),
						stroke: Ne.stroke,
						strokeWidth: Ne.strokeWidth,
						fill: tt
					};
					break;
				case "fillPath":
					Me = {
						d: this.opsToPath(ee),
						stroke: tt,
						strokeWidth: 0,
						fill: Ne.fill || tt
					};
					break;
				case "fillSketch": Me = this.fillSketch(ee, Ne);
			}
			Me && Pe.push(Me);
		}
		return Pe;
	}
	fillSketch(ee, Me) {
		let Ne = Me.fillWeight;
		return Ne < 0 && (Ne = Me.strokeWidth / 2), {
			d: this.opsToPath(ee),
			stroke: Me.fill || tt,
			strokeWidth: Ne,
			fill: tt
		};
	}
	_mergedShape(ee) {
		return ee.filter(((ee, Me) => Me === 0 || ee.op !== "move"));
	}
}, st = class {
	constructor(ee, Me) {
		this.canvas = ee, this.ctx = this.canvas.getContext("2d"), this.gen = new et(Me);
	}
	draw(ee) {
		let Me = ee.sets || [], Ne = ee.options || this.getDefaultOptions(), Pe = this.ctx, Fe = ee.options.fixedDecimalPlaceDigits;
		for (let Ie of Me) switch (Ie.type) {
			case "path":
				Pe.save(), Pe.strokeStyle = Ne.stroke === "none" ? "transparent" : Ne.stroke, Pe.lineWidth = Ne.strokeWidth, Ne.strokeLineDash && Pe.setLineDash(Ne.strokeLineDash), Ne.strokeLineDashOffset && (Pe.lineDashOffset = Ne.strokeLineDashOffset), this._drawToContext(Pe, Ie, Fe), Pe.restore();
				break;
			case "fillPath": {
				Pe.save(), Pe.fillStyle = Ne.fill || "";
				let Me = ee.shape === "curve" || ee.shape === "polygon" || ee.shape === "path" ? "evenodd" : "nonzero";
				this._drawToContext(Pe, Ie, Fe, Me), Pe.restore();
				break;
			}
			case "fillSketch": this.fillSketch(Pe, Ie, Ne);
		}
	}
	fillSketch(ee, Me, Ne) {
		let Pe = Ne.fillWeight;
		Pe < 0 && (Pe = Ne.strokeWidth / 2), ee.save(), Ne.fillLineDash && ee.setLineDash(Ne.fillLineDash), Ne.fillLineDashOffset && (ee.lineDashOffset = Ne.fillLineDashOffset), ee.strokeStyle = Ne.fill || "", ee.lineWidth = Pe, this._drawToContext(ee, Me, Ne.fixedDecimalPlaceDigits), ee.restore();
	}
	_drawToContext(ee, Me, Ne, Pe = "nonzero") {
		ee.beginPath();
		for (let Pe of Me.ops) {
			let Me = typeof Ne == "number" && Ne >= 0 ? Pe.data.map(((ee) => +ee.toFixed(Ne))) : Pe.data;
			switch (Pe.op) {
				case "move":
					ee.moveTo(Me[0], Me[1]);
					break;
				case "bcurveTo":
					ee.bezierCurveTo(Me[0], Me[1], Me[2], Me[3], Me[4], Me[5]);
					break;
				case "lineTo": ee.lineTo(Me[0], Me[1]);
			}
		}
		Me.type === "fillPath" ? ee.fill(Pe) : ee.stroke();
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	line(ee, Me, Ne, Pe, Fe) {
		let Ie = this.gen.line(ee, Me, Ne, Pe, Fe);
		return this.draw(Ie), Ie;
	}
	rectangle(ee, Me, Ne, Pe, Fe) {
		let Ie = this.gen.rectangle(ee, Me, Ne, Pe, Fe);
		return this.draw(Ie), Ie;
	}
	ellipse(ee, Me, Ne, Pe, Fe) {
		let Ie = this.gen.ellipse(ee, Me, Ne, Pe, Fe);
		return this.draw(Ie), Ie;
	}
	circle(ee, Me, Ne, Pe) {
		let Fe = this.gen.circle(ee, Me, Ne, Pe);
		return this.draw(Fe), Fe;
	}
	linearPath(ee, Me) {
		let Ne = this.gen.linearPath(ee, Me);
		return this.draw(Ne), Ne;
	}
	polygon(ee, Me) {
		let Ne = this.gen.polygon(ee, Me);
		return this.draw(Ne), Ne;
	}
	arc(ee, Me, Ne, Pe, Fe, Ie, Le = !1, Re) {
		let ze = this.gen.arc(ee, Me, Ne, Pe, Fe, Ie, Le, Re);
		return this.draw(ze), ze;
	}
	curve(ee, Me) {
		let Ne = this.gen.curve(ee, Me);
		return this.draw(Ne), Ne;
	}
	path(ee, Me) {
		let Ne = this.gen.path(ee, Me);
		return this.draw(Ne), Ne;
	}
}, nt = "http://www.w3.org/2000/svg", ot = class {
	constructor(ee, Me) {
		this.svg = ee, this.gen = new et(Me);
	}
	draw(ee) {
		let Me = ee.sets || [], Ne = ee.options || this.getDefaultOptions(), Pe = this.svg.ownerDocument || window.document, Fe = Pe.createElementNS(nt, "g"), Ie = ee.options.fixedDecimalPlaceDigits;
		for (let Le of Me) {
			let Me = null;
			switch (Le.type) {
				case "path":
					Me = Pe.createElementNS(nt, "path"), Me.setAttribute("d", this.opsToPath(Le, Ie)), Me.setAttribute("stroke", Ne.stroke), Me.setAttribute("stroke-width", Ne.strokeWidth + ""), Me.setAttribute("fill", "none"), Ne.strokeLineDash && Me.setAttribute("stroke-dasharray", Ne.strokeLineDash.join(" ").trim()), Ne.strokeLineDashOffset && Me.setAttribute("stroke-dashoffset", `${Ne.strokeLineDashOffset}`);
					break;
				case "fillPath":
					Me = Pe.createElementNS(nt, "path"), Me.setAttribute("d", this.opsToPath(Le, Ie)), Me.setAttribute("stroke", "none"), Me.setAttribute("stroke-width", "0"), Me.setAttribute("fill", Ne.fill || ""), ee.shape !== "curve" && ee.shape !== "polygon" || Me.setAttribute("fill-rule", "evenodd");
					break;
				case "fillSketch": Me = this.fillSketch(Pe, Le, Ne);
			}
			Me && Fe.appendChild(Me);
		}
		return Fe;
	}
	fillSketch(ee, Me, Ne) {
		let Pe = Ne.fillWeight;
		Pe < 0 && (Pe = Ne.strokeWidth / 2);
		let Fe = ee.createElementNS(nt, "path");
		return Fe.setAttribute("d", this.opsToPath(Me, Ne.fixedDecimalPlaceDigits)), Fe.setAttribute("stroke", Ne.fill || ""), Fe.setAttribute("stroke-width", Pe + ""), Fe.setAttribute("fill", "none"), Ne.fillLineDash && Fe.setAttribute("stroke-dasharray", Ne.fillLineDash.join(" ").trim()), Ne.fillLineDashOffset && Fe.setAttribute("stroke-dashoffset", `${Ne.fillLineDashOffset}`), Fe;
	}
	get generator() {
		return this.gen;
	}
	getDefaultOptions() {
		return this.gen.defaultOptions;
	}
	opsToPath(ee, Me) {
		return this.gen.opsToPath(ee, Me);
	}
	line(ee, Me, Ne, Pe, Fe) {
		let Ie = this.gen.line(ee, Me, Ne, Pe, Fe);
		return this.draw(Ie);
	}
	rectangle(ee, Me, Ne, Pe, Fe) {
		let Ie = this.gen.rectangle(ee, Me, Ne, Pe, Fe);
		return this.draw(Ie);
	}
	ellipse(ee, Me, Ne, Pe, Fe) {
		let Ie = this.gen.ellipse(ee, Me, Ne, Pe, Fe);
		return this.draw(Ie);
	}
	circle(ee, Me, Ne, Pe) {
		let Fe = this.gen.circle(ee, Me, Ne, Pe);
		return this.draw(Fe);
	}
	linearPath(ee, Me) {
		let Ne = this.gen.linearPath(ee, Me);
		return this.draw(Ne);
	}
	polygon(ee, Me) {
		let Ne = this.gen.polygon(ee, Me);
		return this.draw(Ne);
	}
	arc(ee, Me, Ne, Pe, Fe, Ie, Le = !1, Re) {
		let ze = this.gen.arc(ee, Me, Ne, Pe, Fe, Ie, Le, Re);
		return this.draw(ze);
	}
	curve(ee, Me) {
		let Ne = this.gen.curve(ee, Me);
		return this.draw(Ne);
	}
	path(ee, Me) {
		let Ne = this.gen.path(ee, Me);
		return this.draw(Ne);
	}
}, at = {
	canvas: (ee, Me) => new st(ee, Me),
	svg: (ee, Me) => new ot(ee, Me),
	generator: (ee) => new et(ee),
	newSeed: () => et.newSeed()
};
export { at as t };
