import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { R as sanitizeDirective, h as directiveRegex, p as detectType, r as assignWithDepth_default, s as common_default } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { s as epsilon, t as require_dist } from "./dist-DRK-BflQ.js";
function Linear(p) {
	this._context = p;
}
Linear.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(p, H) {
		switch (p = +p, H = +H, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(p, H) : this._context.moveTo(p, H);
				break;
			case 1: this._point = 2;
			default:
				this._context.lineTo(p, H);
				break;
		}
	}
};
function linear_default(p) {
	return new Linear(p);
}
var Bump = class {
	constructor(p, H) {
		this._context = p, this._x = H;
	}
	areaStart() {
		this._line = 0;
	}
	areaEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}
	point(p, H) {
		switch (p = +p, H = +H, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(p, H) : this._context.moveTo(p, H);
				break;
			case 1: this._point = 2;
			default:
				this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + p) / 2, this._y0, this._x0, H, p, H) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + H) / 2, p, this._y0, p, H);
				break;
		}
		this._x0 = p, this._y0 = H;
	}
};
function bumpX(p) {
	return new Bump(p, !0);
}
function bumpY(p) {
	return new Bump(p, !1);
}
function noop_default() {}
function point$3(p, H, U) {
	p._context.bezierCurveTo((2 * p._x0 + p._x1) / 3, (2 * p._y0 + p._y1) / 3, (p._x0 + 2 * p._x1) / 3, (p._y0 + 2 * p._y1) / 3, (p._x0 + 4 * p._x1 + H) / 6, (p._y0 + 4 * p._y1 + U) / 6);
}
function Basis(p) {
	this._context = p;
}
Basis.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 3: point$3(this, this._x1, this._y1);
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(p, H) {
		switch (p = +p, H = +H, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(p, H) : this._context.moveTo(p, H);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default:
				point$3(this, p, H);
				break;
		}
		this._x0 = this._x1, this._x1 = p, this._y0 = this._y1, this._y1 = H;
	}
};
function basis_default(p) {
	return new Basis(p);
}
function BasisClosed(p) {
	this._context = p;
}
BasisClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x2, this._y2), this._context.closePath();
				break;
			case 2:
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
				break;
			case 3:
				this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
				break;
		}
	},
	point: function(p, H) {
		switch (p = +p, H = +H, this._point) {
			case 0:
				this._point = 1, this._x2 = p, this._y2 = H;
				break;
			case 1:
				this._point = 2, this._x3 = p, this._y3 = H;
				break;
			case 2:
				this._point = 3, this._x4 = p, this._y4 = H, this._context.moveTo((this._x0 + 4 * this._x1 + p) / 6, (this._y0 + 4 * this._y1 + H) / 6);
				break;
			default:
				point$3(this, p, H);
				break;
		}
		this._x0 = this._x1, this._x1 = p, this._y0 = this._y1, this._y1 = H;
	}
};
function basisClosed_default(p) {
	return new BasisClosed(p);
}
function BasisOpen(p) {
	this._context = p;
}
BasisOpen.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(p, H) {
		switch (p = +p, H = +H, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var U = (this._x0 + 4 * this._x1 + p) / 6, W = (this._y0 + 4 * this._y1 + H) / 6;
				this._line ? this._context.lineTo(U, W) : this._context.moveTo(U, W);
				break;
			case 3: this._point = 4;
			default:
				point$3(this, p, H);
				break;
		}
		this._x0 = this._x1, this._x1 = p, this._y0 = this._y1, this._y1 = H;
	}
};
function basisOpen_default(p) {
	return new BasisOpen(p);
}
function Bundle(p, H) {
	this._basis = new Basis(p), this._beta = H;
}
Bundle.prototype = {
	lineStart: function() {
		this._x = [], this._y = [], this._basis.lineStart();
	},
	lineEnd: function() {
		var p = this._x, H = this._y, U = p.length - 1;
		if (U > 0) for (var W = p[0], G = H[0], K = p[U] - W, q = H[U] - G, J = -1, Y; ++J <= U;) Y = J / U, this._basis.point(this._beta * p[J] + (1 - this._beta) * (W + Y * K), this._beta * H[J] + (1 - this._beta) * (G + Y * q));
		this._x = this._y = null, this._basis.lineEnd();
	},
	point: function(p, H) {
		this._x.push(+p), this._y.push(+H);
	}
};
var bundle_default = (function p(H) {
	function U(p) {
		return H === 1 ? new Basis(p) : new Bundle(p, H);
	}
	return U.beta = function(H) {
		return p(+H);
	}, U;
})(.85);
function point$2(p, H, U) {
	p._context.bezierCurveTo(p._x1 + p._k * (p._x2 - p._x0), p._y1 + p._k * (p._y2 - p._y0), p._x2 + p._k * (p._x1 - H), p._y2 + p._k * (p._y1 - U), p._x2, p._y2);
}
function Cardinal(p, H) {
	this._context = p, this._k = (1 - H) / 6;
}
Cardinal.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				point$2(this, this._x1, this._y1);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(p, H) {
		switch (p = +p, H = +H, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(p, H) : this._context.moveTo(p, H);
				break;
			case 1:
				this._point = 2, this._x1 = p, this._y1 = H;
				break;
			case 2: this._point = 3;
			default:
				point$2(this, p, H);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = p, this._y0 = this._y1, this._y1 = this._y2, this._y2 = H;
	}
};
var cardinal_default = (function p(H) {
	function U(p) {
		return new Cardinal(p, H);
	}
	return U.tension = function(H) {
		return p(+H);
	}, U;
})(0);
function CardinalClosed(p, H) {
	this._context = p, this._k = (1 - H) / 6;
}
CardinalClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
				break;
		}
	},
	point: function(p, H) {
		switch (p = +p, H = +H, this._point) {
			case 0:
				this._point = 1, this._x3 = p, this._y3 = H;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = p, this._y4 = H);
				break;
			case 2:
				this._point = 3, this._x5 = p, this._y5 = H;
				break;
			default:
				point$2(this, p, H);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = p, this._y0 = this._y1, this._y1 = this._y2, this._y2 = H;
	}
};
var cardinalClosed_default = (function p(H) {
	function U(p) {
		return new CardinalClosed(p, H);
	}
	return U.tension = function(H) {
		return p(+H);
	}, U;
})(0);
function CardinalOpen(p, H) {
	this._context = p, this._k = (1 - H) / 6;
}
CardinalOpen.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(p, H) {
		switch (p = +p, H = +H, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default:
				point$2(this, p, H);
				break;
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = p, this._y0 = this._y1, this._y1 = this._y2, this._y2 = H;
	}
};
var cardinalOpen_default = (function p(H) {
	function U(p) {
		return new CardinalOpen(p, H);
	}
	return U.tension = function(H) {
		return p(+H);
	}, U;
})(0);
function point$1(p, H, U) {
	var W = p._x1, G = p._y1, K = p._x2, q = p._y2;
	if (p._l01_a > 1e-12) {
		var J = 2 * p._l01_2a + 3 * p._l01_a * p._l12_a + p._l12_2a, Y = 3 * p._l01_a * (p._l01_a + p._l12_a);
		W = (W * J - p._x0 * p._l12_2a + p._x2 * p._l01_2a) / Y, G = (G * J - p._y0 * p._l12_2a + p._y2 * p._l01_2a) / Y;
	}
	if (p._l23_a > 1e-12) {
		var X = 2 * p._l23_2a + 3 * p._l23_a * p._l12_a + p._l12_2a, Z = 3 * p._l23_a * (p._l23_a + p._l12_a);
		K = (K * X + p._x1 * p._l23_2a - H * p._l12_2a) / Z, q = (q * X + p._y1 * p._l23_2a - U * p._l12_2a) / Z;
	}
	p._context.bezierCurveTo(W, G, K, q, p._x2, p._y2);
}
function CatmullRom(p, H) {
	this._context = p, this._alpha = H;
}
CatmullRom.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3:
				this.point(this._x2, this._y2);
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(p, H) {
		if (p = +p, H = +H, this._point) {
			var U = this._x2 - p, W = this._y2 - H;
			this._l23_a = Math.sqrt(this._l23_2a = (U * U + W * W) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(p, H) : this._context.moveTo(p, H);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3;
			default:
				point$1(this, p, H);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = p, this._y0 = this._y1, this._y1 = this._y2, this._y2 = H;
	}
};
var catmullRom_default = (function p(H) {
	function U(p) {
		return H ? new CatmullRom(p, H) : new Cardinal(p, 0);
	}
	return U.alpha = function(H) {
		return p(+H);
	}, U;
})(.5);
function CatmullRomClosed(p, H) {
	this._context = p, this._alpha = H;
}
CatmullRomClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3:
				this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
				break;
		}
	},
	point: function(p, H) {
		if (p = +p, H = +H, this._point) {
			var U = this._x2 - p, W = this._y2 - H;
			this._l23_a = Math.sqrt(this._l23_2a = (U * U + W * W) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._x3 = p, this._y3 = H;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = p, this._y4 = H);
				break;
			case 2:
				this._point = 3, this._x5 = p, this._y5 = H;
				break;
			default:
				point$1(this, p, H);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = p, this._y0 = this._y1, this._y1 = this._y2, this._y2 = H;
	}
};
var catmullRomClosed_default = (function p(H) {
	function U(p) {
		return H ? new CatmullRomClosed(p, H) : new CardinalClosed(p, 0);
	}
	return U.alpha = function(H) {
		return p(+H);
	}, U;
})(.5);
function CatmullRomOpen(p, H) {
	this._context = p, this._alpha = H;
}
CatmullRomOpen.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(p, H) {
		if (p = +p, H = +H, this._point) {
			var U = this._x2 - p, W = this._y2 - H;
			this._l23_a = Math.sqrt(this._l23_2a = (U * U + W * W) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default:
				point$1(this, p, H);
				break;
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = p, this._y0 = this._y1, this._y1 = this._y2, this._y2 = H;
	}
};
var catmullRomOpen_default = (function p(H) {
	function U(p) {
		return H ? new CatmullRomOpen(p, H) : new CardinalOpen(p, 0);
	}
	return U.alpha = function(H) {
		return p(+H);
	}, U;
})(.5);
function LinearClosed(p) {
	this._context = p;
}
LinearClosed.prototype = {
	areaStart: noop_default,
	areaEnd: noop_default,
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		this._point && this._context.closePath();
	},
	point: function(p, H) {
		p = +p, H = +H, this._point ? this._context.lineTo(p, H) : (this._point = 1, this._context.moveTo(p, H));
	}
};
function linearClosed_default(p) {
	return new LinearClosed(p);
}
function sign(p) {
	return p < 0 ? -1 : 1;
}
function slope3(p, H, U) {
	var W = p._x1 - p._x0, G = H - p._x1, K = (p._y1 - p._y0) / (W || G < 0 && -0), q = (U - p._y1) / (G || W < 0 && -0), J = (K * G + q * W) / (W + G);
	return (sign(K) + sign(q)) * Math.min(Math.abs(K), Math.abs(q), .5 * Math.abs(J)) || 0;
}
function slope2(p, H) {
	var U = p._x1 - p._x0;
	return U ? (3 * (p._y1 - p._y0) / U - H) / 2 : H;
}
function point(p, H, U) {
	var W = p._x0, G = p._y0, K = p._x1, q = p._y1, J = (K - W) / 3;
	p._context.bezierCurveTo(W + J, G + J * H, K - J, q - J * U, K, q);
}
function MonotoneX(p) {
	this._context = p;
}
MonotoneX.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3:
				point(this, this._t0, slope2(this, this._t0));
				break;
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(p, H) {
		var U = NaN;
		if (p = +p, H = +H, !(p === this._x1 && H === this._y1)) {
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(p, H) : this._context.moveTo(p, H);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, point(this, slope2(this, U = slope3(this, p, H)), U);
					break;
				default:
					point(this, this._t0, U = slope3(this, p, H));
					break;
			}
			this._x0 = this._x1, this._x1 = p, this._y0 = this._y1, this._y1 = H, this._t0 = U;
		}
	}
};
function MonotoneY(p) {
	this._context = new ReflectContext(p);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(p, H) {
	MonotoneX.prototype.point.call(this, H, p);
};
function ReflectContext(p) {
	this._context = p;
}
ReflectContext.prototype = {
	moveTo: function(p, H) {
		this._context.moveTo(H, p);
	},
	closePath: function() {
		this._context.closePath();
	},
	lineTo: function(p, H) {
		this._context.lineTo(H, p);
	},
	bezierCurveTo: function(p, H, U, W, G, K) {
		this._context.bezierCurveTo(H, p, W, U, K, G);
	}
};
function monotoneX(p) {
	return new MonotoneX(p);
}
function monotoneY(p) {
	return new MonotoneY(p);
}
function Natural(p) {
	this._context = p;
}
Natural.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = [], this._y = [];
	},
	lineEnd: function() {
		var p = this._x, H = this._y, U = p.length;
		if (U) if (this._line ? this._context.lineTo(p[0], H[0]) : this._context.moveTo(p[0], H[0]), U === 2) this._context.lineTo(p[1], H[1]);
		else for (var W = controlPoints(p), G = controlPoints(H), K = 0, q = 1; q < U; ++K, ++q) this._context.bezierCurveTo(W[0][K], G[0][K], W[1][K], G[1][K], p[q], H[q]);
		(this._line || this._line !== 0 && U === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(p, H) {
		this._x.push(+p), this._y.push(+H);
	}
};
function controlPoints(p) {
	var H, U = p.length - 1, W, G = Array(U), K = Array(U), q = Array(U);
	for (G[0] = 0, K[0] = 2, q[0] = p[0] + 2 * p[1], H = 1; H < U - 1; ++H) G[H] = 1, K[H] = 4, q[H] = 4 * p[H] + 2 * p[H + 1];
	for (G[U - 1] = 2, K[U - 1] = 7, q[U - 1] = 8 * p[U - 1] + p[U], H = 1; H < U; ++H) W = G[H] / K[H - 1], K[H] -= W, q[H] -= W * q[H - 1];
	for (G[U - 1] = q[U - 1] / K[U - 1], H = U - 2; H >= 0; --H) G[H] = (q[H] - G[H + 1]) / K[H];
	for (K[U - 1] = (p[U] + G[U - 1]) / 2, H = 0; H < U - 1; ++H) K[H] = 2 * p[H + 1] - G[H + 1];
	return [G, K];
}
function natural_default(p) {
	return new Natural(p);
}
function Step(p, H) {
	this._context = p, this._t = H;
}
Step.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = this._y = NaN, this._point = 0;
	},
	lineEnd: function() {
		0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
	},
	point: function(p, H) {
		switch (p = +p, H = +H, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(p, H) : this._context.moveTo(p, H);
				break;
			case 1: this._point = 2;
			default:
				if (this._t <= 0) this._context.lineTo(this._x, H), this._context.lineTo(p, H);
				else {
					var U = this._x * (1 - this._t) + p * this._t;
					this._context.lineTo(U, this._y), this._context.lineTo(U, H);
				}
				break;
		}
		this._x = p, this._y = H;
	}
};
function step_default(p) {
	return new Step(p, .5);
}
function stepBefore(p) {
	return new Step(p, 0);
}
function stepAfter(p) {
	return new Step(p, 1);
}
function isLength(p) {
	return Number.isSafeInteger(p) && p >= 0;
}
function isArrayLike(p) {
	return p != null && typeof p != "function" && isLength(p.length);
}
function isUnsafeProperty(p) {
	return p === "__proto__";
}
function isPrimitive(p) {
	return p == null || typeof p != "object" && typeof p != "function";
}
function getSymbols(p) {
	return Object.getOwnPropertySymbols(p).filter((H) => Object.prototype.propertyIsEnumerable.call(p, H));
}
function getTag(p) {
	return p == null ? p === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(p);
}
var regexpTag = "[object RegExp]", stringTag = "[object String]", numberTag = "[object Number]", booleanTag = "[object Boolean]", argumentsTag = "[object Arguments]", symbolTag = "[object Symbol]", dateTag = "[object Date]", mapTag = "[object Map]", setTag = "[object Set]", arrayTag = "[object Array]", arrayBufferTag = "[object ArrayBuffer]", objectTag = "[object Object]", dataViewTag = "[object DataView]", uint8ArrayTag = "[object Uint8Array]", uint8ClampedArrayTag = "[object Uint8ClampedArray]", uint16ArrayTag = "[object Uint16Array]", uint32ArrayTag = "[object Uint32Array]", int8ArrayTag = "[object Int8Array]", int16ArrayTag = "[object Int16Array]", int32ArrayTag = "[object Int32Array]", float32ArrayTag = "[object Float32Array]", float64ArrayTag = "[object Float64Array]", globalThis_ = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || (function() {
	return this;
})() || Function("return this")();
function isBuffer(p) {
	return globalThis_.Buffer !== void 0 && globalThis_.Buffer.isBuffer(p);
}
function isTypedArray$1(p) {
	return ArrayBuffer.isView(p) && !(p instanceof DataView);
}
function cloneDeepWith$1(p, H) {
	return cloneDeepWithImpl(p, void 0, p, /* @__PURE__ */ new Map(), H);
}
function cloneDeepWithImpl(p, H, U, W = /* @__PURE__ */ new Map(), G = void 0) {
	let K = G?.(p, H, U, W);
	if (K !== void 0) return K;
	if (isPrimitive(p)) return p;
	if (W.has(p)) return W.get(p);
	if (Array.isArray(p)) {
		let H = Array(p.length);
		W.set(p, H);
		for (let K = 0; K < p.length; K++) H[K] = cloneDeepWithImpl(p[K], K, U, W, G);
		return Object.hasOwn(p, "index") && (H.index = p.index), Object.hasOwn(p, "input") && (H.input = p.input), H;
	}
	if (p instanceof Date) return new Date(p.getTime());
	if (p instanceof RegExp) {
		let H = new RegExp(p.source, p.flags);
		return H.lastIndex = p.lastIndex, H;
	}
	if (p instanceof Map) {
		let H = /* @__PURE__ */ new Map();
		W.set(p, H);
		for (let [K, q] of p) H.set(K, cloneDeepWithImpl(q, K, U, W, G));
		return H;
	}
	if (p instanceof Set) {
		let H = /* @__PURE__ */ new Set();
		W.set(p, H);
		for (let K of p) H.add(cloneDeepWithImpl(K, void 0, U, W, G));
		return H;
	}
	if (isBuffer(p)) return p.subarray();
	if (isTypedArray$1(p)) {
		let H = new (Object.getPrototypeOf(p)).constructor(p.length);
		W.set(p, H);
		for (let K = 0; K < p.length; K++) H[K] = cloneDeepWithImpl(p[K], K, U, W, G);
		return H;
	}
	if (p instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && p instanceof SharedArrayBuffer) return p.slice(0);
	if (p instanceof DataView) {
		let H = new DataView(p.buffer.slice(0), p.byteOffset, p.byteLength);
		return W.set(p, H), copyProperties(H, p, U, W, G), H;
	}
	if (typeof File < "u" && p instanceof File) {
		let H = new File([p], p.name, { type: p.type });
		return W.set(p, H), copyProperties(H, p, U, W, G), H;
	}
	if (typeof Blob < "u" && p instanceof Blob) {
		let H = new Blob([p], { type: p.type });
		return W.set(p, H), copyProperties(H, p, U, W, G), H;
	}
	if (p instanceof Error) {
		let H = structuredClone(p);
		return W.set(p, H), H.message = p.message, H.name = p.name, H.stack = p.stack, H.cause = p.cause, H.constructor = p.constructor, copyProperties(H, p, U, W, G), H;
	}
	if (p instanceof Boolean) {
		let H = new Boolean(p.valueOf());
		return W.set(p, H), copyProperties(H, p, U, W, G), H;
	}
	if (p instanceof Number) {
		let H = new Number(p.valueOf());
		return W.set(p, H), copyProperties(H, p, U, W, G), H;
	}
	if (p instanceof String) {
		let H = new String(p.valueOf());
		return W.set(p, H), copyProperties(H, p, U, W, G), H;
	}
	if (typeof p == "object" && isCloneableObject(p)) {
		let H = Object.create(Object.getPrototypeOf(p));
		return W.set(p, H), copyProperties(H, p, U, W, G), H;
	}
	return p;
}
function copyProperties(p, H, U = p, W, G) {
	let K = [...Object.keys(H), ...getSymbols(H)];
	for (let q = 0; q < K.length; q++) {
		let J = K[q], Y = Object.getOwnPropertyDescriptor(p, J);
		(Y == null || Y.writable) && (p[J] = cloneDeepWithImpl(H[J], J, U, W, G));
	}
}
function isCloneableObject(p) {
	switch (getTag(p)) {
		case argumentsTag:
		case arrayTag:
		case arrayBufferTag:
		case dataViewTag:
		case booleanTag:
		case dateTag:
		case float32ArrayTag:
		case float64ArrayTag:
		case int8ArrayTag:
		case int16ArrayTag:
		case int32ArrayTag:
		case mapTag:
		case numberTag:
		case objectTag:
		case regexpTag:
		case setTag:
		case stringTag:
		case symbolTag:
		case uint8ArrayTag:
		case uint8ClampedArrayTag:
		case uint16ArrayTag:
		case uint32ArrayTag: return !0;
		default: return !1;
	}
}
function cloneDeepWith(p, H) {
	return cloneDeepWith$1(p, (U, W, G, K) => {
		let q = H?.(U, W, G, K);
		if (q !== void 0) return q;
		if (typeof p == "object") {
			if (getTag(p) === "[object Object]" && typeof p.constructor != "function") {
				let H = {};
				return K.set(p, H), copyProperties(H, p, G, K), H;
			}
			switch (Object.prototype.toString.call(p)) {
				case numberTag:
				case stringTag:
				case booleanTag: {
					let H = new p.constructor(p?.valueOf());
					return copyProperties(H, p), H;
				}
				case argumentsTag: {
					let H = {};
					return copyProperties(H, p), H.length = p.length, H[Symbol.iterator] = p[Symbol.iterator], H;
				}
				default: return;
			}
		}
	});
}
function cloneDeep(p) {
	return cloneDeepWith(p);
}
function isArguments(p) {
	return typeof p == "object" && !!p && getTag(p) === "[object Arguments]";
}
function isObjectLike(p) {
	return typeof p == "object" && !!p;
}
function isArrayLikeObject(p) {
	return isObjectLike(p) && isArrayLike(p);
}
function memoize(p, H) {
	if (typeof p != "function" || H != null && typeof H != "function") throw TypeError("Expected a function");
	let U = function(...W) {
		let G = H ? H.apply(this, W) : W[0], K = U.cache;
		if (K.has(G)) return K.get(G);
		let q = p.apply(this, W);
		return U.cache = K.set(G, q) || K, q;
	};
	return U.cache = new (memoize.Cache || Map)(), U;
}
memoize.Cache = Map;
function noop() {}
function isTypedArray(p) {
	return isTypedArray$1(p);
}
function isPlainObject(p) {
	if (typeof p != "object" || !p) return !1;
	if (Object.getPrototypeOf(p) === null) return !0;
	if (Object.prototype.toString.call(p) !== "[object Object]") {
		let H = p[Symbol.toStringTag];
		return H == null || !Object.getOwnPropertyDescriptor(p, Symbol.toStringTag)?.writable ? !1 : p.toString() === `[object ${H}]`;
	}
	let H = p;
	for (; Object.getPrototypeOf(H) !== null;) H = Object.getPrototypeOf(H);
	return Object.getPrototypeOf(p) === H;
}
function clone(p) {
	if (isPrimitive(p)) return p;
	if (Array.isArray(p) || isTypedArray$1(p) || p instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && p instanceof SharedArrayBuffer) return p.slice(0);
	let H = Object.getPrototypeOf(p);
	if (H == null) return Object.assign(Object.create(H), p);
	let U = H.constructor;
	if (p instanceof Date || p instanceof Map || p instanceof Set) return new U(p);
	if (p instanceof RegExp) {
		let H = new U(p);
		return H.lastIndex = p.lastIndex, H;
	}
	if (p instanceof DataView) return new U(p.buffer.slice(0));
	if (p instanceof Error) {
		let H;
		return H = p instanceof AggregateError ? new U(p.errors, p.message, { cause: p.cause }) : new U(p.message, { cause: p.cause }), H.stack = p.stack, Object.assign(H, p), H;
	}
	if (typeof File < "u" && p instanceof File) return new U([p], p.name, {
		type: p.type,
		lastModified: p.lastModified
	});
	if (typeof p == "object") {
		let U = Object.create(H);
		return Object.assign(U, p);
	}
	return p;
}
function mergeWith(p, ...H) {
	let U = H.slice(0, -1), W = H[H.length - 1], G = p;
	for (let p = 0; p < U.length; p++) {
		let H = U[p];
		G = mergeWithDeep(G, H, W, /* @__PURE__ */ new Map());
	}
	return G;
}
function mergeWithDeep(p, H, U, W) {
	if (isPrimitive(p) && (p = Object(p)), typeof H != "object" || !H) return p;
	if (W.has(H)) return clone(W.get(H));
	if (W.set(H, p), Array.isArray(H)) {
		H = H.slice();
		for (let p = 0; p < H.length; p++) H[p] = H[p] ?? void 0;
	}
	let G = [...Object.keys(H), ...getSymbols(H)];
	for (let K = 0; K < G.length; K++) {
		let q = G[K];
		if (isUnsafeProperty(q)) continue;
		let J = H[q], Y = p[q];
		if (isArguments(J) && (J = { ...J }), isArguments(Y) && (Y = { ...Y }), isBuffer(J) && (J = cloneDeep(J)), Array.isArray(J)) if (Array.isArray(Y)) {
			let p = [], H = Reflect.ownKeys(Y);
			for (let U = 0; U < H.length; U++) {
				let W = H[U];
				p[W] = Y[W];
			}
			Y = p;
		} else if (isArrayLikeObject(Y)) {
			let p = [];
			for (let H = 0; H < Y.length; H++) p[H] = Y[H];
			Y = p;
		} else Y = [];
		let X = U(Y, J, q, p, H, W);
		X === void 0 ? Array.isArray(J) || isObjectLike(Y) && isObjectLike(J) && (isPlainObject(Y) || isPlainObject(J) || isTypedArray(Y) || isTypedArray(J)) ? p[q] = mergeWithDeep(Y, J, U, W) : Y == null && isPlainObject(J) ? p[q] = mergeWithDeep({}, J, U, W) : Y == null && isTypedArray(J) ? p[q] = cloneDeep(J) : (Y === void 0 || J !== void 0) && (p[q] = J) : p[q] = X;
	}
	return p;
}
function merge(p, ...H) {
	return mergeWith(p, ...H, noop);
}
var import_dist = require_dist(), ZERO_WIDTH_SPACE = "​", d3CurveTypes = {
	curveBasis: basis_default,
	curveBasisClosed: basisClosed_default,
	curveBasisOpen: basisOpen_default,
	curveBumpX: bumpX,
	curveBumpY: bumpY,
	curveBundle: bundle_default,
	curveCardinalClosed: cardinalClosed_default,
	curveCardinalOpen: cardinalOpen_default,
	curveCardinal: cardinal_default,
	curveCatmullRomClosed: catmullRomClosed_default,
	curveCatmullRomOpen: catmullRomOpen_default,
	curveCatmullRom: catmullRom_default,
	curveLinear: linear_default,
	curveLinearClosed: linearClosed_default,
	curveMonotoneX: monotoneX,
	curveMonotoneY: monotoneY,
	curveNatural: natural_default,
	curveStep: step_default,
	curveStepAfter: stepAfter,
	curveStepBefore: stepBefore
}, directiveWithoutOpen = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, detectInit = /* @__PURE__ */ __name(function(p, H) {
	let U = detectDirective(p, /(?:init\b)|(?:initialize\b)/), G = {};
	if (Array.isArray(U)) {
		let p = U.map((p) => p.args);
		sanitizeDirective(p), G = assignWithDepth_default(G, [...p]);
	} else G = U.args;
	if (!G) return;
	let J = detectType(p, H), Y = "config";
	return G[Y] !== void 0 && (J === "flowchart-v2" && (J = "flowchart"), G[J] = G[Y], delete G[Y]), G;
}, "detectInit"), detectDirective = /* @__PURE__ */ __name(function(p, U = null) {
	try {
		let W = RegExp(`[%]{2}(?![{]${directiveWithoutOpen.source})(?=[}][%]{2}).*
`, "ig");
		p = p.trim().replace(W, "").replace(/'/gm, "\""), log.debug(`Detecting diagram directive${U === null ? "" : " type:" + U} based on the text:${p}`);
		let K, q = [];
		for (; (K = directiveRegex.exec(p)) !== null;) if (K.index === directiveRegex.lastIndex && directiveRegex.lastIndex++, K && !U || U && K[1]?.match(U) || U && K[2]?.match(U)) {
			let p = K[1] ? K[1] : K[2], H = K[3] ? K[3].trim() : K[4] ? JSON.parse(K[4].trim()) : null;
			q.push({
				type: p,
				args: H
			});
		}
		return q.length === 0 ? {
			type: p,
			args: null
		} : q.length === 1 ? q[0] : q;
	} catch (W) {
		return log.error(`ERROR: ${W.message} - Unable to parse directive type: '${U}' based on the text: '${p}'`), {
			type: void 0,
			args: null
		};
	}
}, "detectDirective"), removeDirectives = /* @__PURE__ */ __name(function(p) {
	return p.replace(directiveRegex, "");
}, "removeDirectives"), isSubstringInArray = /* @__PURE__ */ __name(function(p, H) {
	for (let [U, W] of H.entries()) if (W.match(p)) return U;
	return -1;
}, "isSubstringInArray");
function interpolateToCurve(p, H) {
	return p ? d3CurveTypes[`curve${p.charAt(0).toUpperCase() + p.slice(1)}`] ?? H : H;
}
__name(interpolateToCurve, "interpolateToCurve");
function formatUrl(p, H) {
	let U = p.trim();
	if (U) return H.securityLevel === "loose" ? U : (0, import_dist.sanitizeUrl)(U);
}
__name(formatUrl, "formatUrl");
var runFunc = /* @__PURE__ */ __name((p, ...U) => {
	let W = p.split("."), G = W.length - 1, K = W[G], q = window;
	for (let U = 0; U < G; U++) if (q = q[W[U]], !q) {
		log.error(`Function name: ${p} not found in window`);
		return;
	}
	q[K](...U);
}, "runFunc");
function distance(p, H) {
	return !p || !H ? 0 : Math.sqrt((H.x - p.x) ** 2 + (H.y - p.y) ** 2);
}
__name(distance, "distance");
function traverseEdge(p) {
	let H, U = 0;
	return p.forEach((p) => {
		U += distance(p, H), H = p;
	}), calculatePoint(p, U / 2);
}
__name(traverseEdge, "traverseEdge");
function calcLabelPosition(p) {
	return p.length === 1 ? p[0] : traverseEdge(p);
}
__name(calcLabelPosition, "calcLabelPosition");
var roundNumber = /* @__PURE__ */ __name((p, H = 2) => {
	let U = 10 ** H;
	return Math.round(p * U) / U;
}, "roundNumber"), calculatePoint = /* @__PURE__ */ __name((p, H) => {
	let U, W = H;
	for (let H of p) {
		if (U) {
			let p = distance(H, U);
			if (p === 0) return U;
			if (p < W) W -= p;
			else {
				let G = W / p;
				if (G <= 0) return U;
				if (G >= 1) return {
					x: H.x,
					y: H.y
				};
				if (G > 0 && G < 1) return {
					x: roundNumber((1 - G) * U.x + G * H.x, 5),
					y: roundNumber((1 - G) * U.y + G * H.y, 5)
				};
			}
		}
		U = H;
	}
	throw Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), calcCardinalityPosition = /* @__PURE__ */ __name((p, U, W) => {
	log.info(`our points ${JSON.stringify(U)}`), U[0] !== W && (U = U.reverse());
	let G = calculatePoint(U, 25), K = p ? 10 : 5, q = Math.atan2(U[0].y - G.y, U[0].x - G.x), J = {
		x: 0,
		y: 0
	};
	return J.x = Math.sin(q) * K + (U[0].x + G.x) / 2, J.y = -Math.cos(q) * K + (U[0].y + G.y) / 2, J;
}, "calcCardinalityPosition");
function calcTerminalLabelPosition(p, U, W) {
	let G = structuredClone(W);
	log.info("our points", G), U !== "start_left" && U !== "start_right" && G.reverse();
	let K = calculatePoint(G, 25 + p), q = 10 + p * .5, J = Math.atan2(G[0].y - K.y, G[0].x - K.x), Y = {
		x: 0,
		y: 0
	};
	return U === "start_left" ? (Y.x = Math.sin(J + Math.PI) * q + (G[0].x + K.x) / 2, Y.y = -Math.cos(J + Math.PI) * q + (G[0].y + K.y) / 2) : U === "end_right" ? (Y.x = Math.sin(J - Math.PI) * q + (G[0].x + K.x) / 2 - 5, Y.y = -Math.cos(J - Math.PI) * q + (G[0].y + K.y) / 2 - 5) : U === "end_left" ? (Y.x = Math.sin(J) * q + (G[0].x + K.x) / 2 - 5, Y.y = -Math.cos(J) * q + (G[0].y + K.y) / 2 - 5) : (Y.x = Math.sin(J) * q + (G[0].x + K.x) / 2, Y.y = -Math.cos(J) * q + (G[0].y + K.y) / 2), Y;
}
__name(calcTerminalLabelPosition, "calcTerminalLabelPosition");
function getStylesFromArray(p) {
	let H = "", U = "";
	for (let W of p) W !== void 0 && (W.startsWith("color:") || W.startsWith("text-align:") ? U = U + W + ";" : H = H + W + ";");
	return {
		style: H,
		labelStyle: U
	};
}
__name(getStylesFromArray, "getStylesFromArray");
var cnt = 0, generateId = /* @__PURE__ */ __name(() => (cnt++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + cnt), "generateId");
function makeRandomHex(p) {
	let H = "";
	for (let U = 0; U < p; U++) H += "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
	return H;
}
__name(makeRandomHex, "makeRandomHex");
var random = /* @__PURE__ */ __name((p) => makeRandomHex(p.length), "random"), getTextObj = /* @__PURE__ */ __name(function() {
	return {
		x: 0,
		y: 0,
		fill: void 0,
		anchor: "start",
		style: "#666",
		width: 100,
		height: 100,
		textMargin: 0,
		rx: 0,
		ry: 0,
		valign: void 0,
		text: ""
	};
}, "getTextObj"), drawSimpleText = /* @__PURE__ */ __name(function(p, H) {
	let U = H.text.replace(common_default.lineBreakRegex, " "), [, W] = parseFontSize(H.fontSize), G = p.append("text");
	G.attr("x", H.x), G.attr("y", H.y), G.style("text-anchor", H.anchor), G.style("font-family", H.fontFamily), G.style("font-size", W), G.style("font-weight", H.fontWeight), G.attr("fill", H.fill), H.class !== void 0 && G.attr("class", H.class);
	let K = G.append("tspan");
	return K.attr("x", H.x + H.textMargin * 2), K.attr("fill", H.fill), K.text(U), G;
}, "drawSimpleText"), wrapLabel = memoize((p, H, U) => {
	if (!p || (U = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		joinWith: "<br/>"
	}, U), common_default.lineBreakRegex.test(p))) return p;
	let W = p.split(" ").filter(Boolean), G = [], K = "";
	return W.forEach((p, q) => {
		let J = calculateTextWidth(`${p} `, U), Y = calculateTextWidth(K, U);
		if (J > H) {
			let { hyphenatedStrings: W, remainingWord: q } = breakString(p, H, "-", U);
			G.push(K, ...W), K = q;
		} else Y + J >= H ? (G.push(K), K = p) : K = [K, p].filter(Boolean).join(" ");
		q + 1 === W.length && G.push(K);
	}), G.filter((p) => p !== "").join(U.joinWith);
}, (p, H, U) => `${p}${H}${U.fontSize}${U.fontWeight}${U.fontFamily}${U.joinWith}`), breakString = memoize((p, H, U = "-", W) => {
	W = Object.assign({
		fontSize: 12,
		fontWeight: 400,
		fontFamily: "Arial",
		margin: 0
	}, W);
	let G = [...p], K = [], q = "";
	return G.forEach((p, J) => {
		let Y = `${q}${p}`;
		if (calculateTextWidth(Y, W) >= H) {
			let p = J + 1, H = G.length === p, W = `${Y}${U}`;
			K.push(H ? Y : W), q = "";
		} else q = Y;
	}), {
		hyphenatedStrings: K,
		remainingWord: q
	};
}, (p, H, U = "-", W) => `${p}${H}${U}${W.fontSize}${W.fontWeight}${W.fontFamily}`);
function calculateTextHeight(p, H) {
	return calculateTextDimensions(p, H).height;
}
__name(calculateTextHeight, "calculateTextHeight");
function calculateTextWidth(p, H) {
	return calculateTextDimensions(p, H).width;
}
__name(calculateTextWidth, "calculateTextWidth");
var calculateTextDimensions = memoize((p, H) => {
	let { fontSize: W = 12, fontFamily: G = "Arial", fontWeight: K = 400 } = H;
	if (!p) return {
		width: 0,
		height: 0
	};
	let [, q] = parseFontSize(W), Y = ["sans-serif", G], X = p.split(common_default.lineBreakRegex), Z = [], Q = select_default("body");
	if (!Q.remove) return {
		width: 0,
		height: 0,
		lineHeight: 0
	};
	let $ = Q.append("svg");
	for (let p of Y) {
		let H = 0, U = {
			width: 0,
			height: 0,
			lineHeight: 0
		};
		for (let W of X) {
			let G = getTextObj();
			G.text = W || "​";
			let J = drawSimpleText($, G).style("font-size", q).style("font-weight", K).style("font-family", p), Y = (J._groups || J)[0][0].getBBox();
			if (Y.width === 0 && Y.height === 0) throw Error("svg element not in render tree");
			U.width = Math.round(Math.max(U.width, Y.width)), H = Math.round(Y.height), U.height += H, U.lineHeight = Math.round(Math.max(U.lineHeight, H));
		}
		Z.push(U);
	}
	return $.remove(), Z[isNaN(Z[1].height) || isNaN(Z[1].width) || isNaN(Z[1].lineHeight) || Z[0].height > Z[1].height && Z[0].width > Z[1].width && Z[0].lineHeight > Z[1].lineHeight ? 0 : 1];
}, (p, H) => `${p}${H.fontSize}${H.fontWeight}${H.fontFamily}`), InitIDGenerator = class {
	constructor(p = !1, H) {
		this.count = 0, this.count = H ? H.length : 0, this.next = p ? () => this.count++ : () => Date.now();
	}
	static #e = __name(this, "InitIDGenerator");
}, decoder, entityDecode = /* @__PURE__ */ __name(function(p) {
	return decoder ||= document.createElement("div"), p = escape(p).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), decoder.innerHTML = p, unescape(decoder.textContent);
}, "entityDecode");
function isDetailedError(p) {
	return "str" in p;
}
__name(isDetailedError, "isDetailedError");
var insertTitle = /* @__PURE__ */ __name((p, H, U, W) => {
	if (!W) return;
	let G = p.node()?.getBBox();
	G && p.append("text").text(W).attr("text-anchor", "middle").attr("x", G.x + G.width / 2).attr("y", -U).attr("class", H);
}, "insertTitle"), parseFontSize = /* @__PURE__ */ __name((p) => {
	if (typeof p == "number") return [p, p + "px"];
	let H = parseInt(p ?? "", 10);
	return Number.isNaN(H) ? [void 0, void 0] : p === String(H) ? [H, p + "px"] : [H, p];
}, "parseFontSize");
function cleanAndMerge(p, H) {
	return merge({}, p, H);
}
__name(cleanAndMerge, "cleanAndMerge");
var utils_default = {
	assignWithDepth: assignWithDepth_default,
	wrapLabel,
	calculateTextHeight,
	calculateTextWidth,
	calculateTextDimensions,
	cleanAndMerge,
	detectInit,
	detectDirective,
	isSubstringInArray,
	interpolateToCurve,
	calcLabelPosition,
	calcCardinalityPosition,
	calcTerminalLabelPosition,
	formatUrl,
	getStylesFromArray,
	generateId,
	random,
	runFunc,
	entityDecode,
	insertTitle,
	isLabelCoordinateInPath,
	parseFontSize,
	InitIDGenerator
}, encodeEntities = /* @__PURE__ */ __name(function(p) {
	let H = p;
	return H = H.replace(/style.*:\S*#.*;/g, function(p) {
		return p.substring(0, p.length - 1);
	}), H = H.replace(/classDef.*:\S*#.*;/g, function(p) {
		return p.substring(0, p.length - 1);
	}), H = H.replace(/#\w+;/g, function(p) {
		let H = p.substring(1, p.length - 1);
		return /^\+?\d+$/.test(H) ? "ﬂ°°" + H + "¶ß" : "ﬂ°" + H + "¶ß";
	}), H;
}, "encodeEntities"), decodeEntities = /* @__PURE__ */ __name(function(p) {
	return p.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), getEdgeId = /* @__PURE__ */ __name((p, H, { counter: U = 0, prefix: W, suffix: G }, K) => K || `${W ? `${W}_` : ""}${p}_${H}_${U}${G ? `_${G}` : ""}`, "getEdgeId");
function handleUndefinedAttr(p) {
	return p ?? null;
}
__name(handleUndefinedAttr, "handleUndefinedAttr");
function isLabelCoordinateInPath(p, H) {
	let U = Math.round(p.x), W = Math.round(p.y), G = H.replace(/(\d+\.\d+)/g, (p) => Math.round(parseFloat(p)).toString());
	return G.includes(U.toString()) || G.includes(W.toString());
}
__name(isLabelCoordinateInPath, "isLabelCoordinateInPath");
export { catmullRom_default as $, int16ArrayTag as A, uint16ArrayTag as B, arrayBufferTag as C, dateTag as D, dataViewTag as E, objectTag as F, isPrimitive as G, uint8ArrayTag as H, regexpTag as I, stepBefore as J, isArrayLike as K, setTag as L, int8ArrayTag as M, mapTag as N, float32ArrayTag as O, numberTag as P, monotoneY as Q, stringTag as R, argumentsTag as S, booleanTag as T, uint8ClampedArrayTag as U, uint32ArrayTag as V, getTag as W, natural_default as X, step_default as Y, monotoneX as Z, utils_default as _, cleanAndMerge as a, isArguments as b, generateId as c, handleUndefinedAttr as d, cardinal_default as et, interpolateToCurve as f, removeDirectives as g, random as h, calculateTextWidth as i, linear_default as it, int32ArrayTag as j, float64ArrayTag as k, getEdgeId as l, parseFontSize as m, calculateTextDimensions as n, bumpX as nt, decodeEntities as o, isDetailedError as p, stepAfter as q, calculateTextHeight as r, bumpY as rt, encodeEntities as s, ZERO_WIDTH_SPACE as t, basis_default as tt, getStylesFromArray as u, wrapLabel as v, arrayTag as w, isBuffer as x, isTypedArray as y, symbolTag as z };
